/*
 * Platform-neutral Fetch-style inquiry handler.
 * The current GitHub Pages deployment does not execute this file. Deploy it
 * through the serverless adapter selected for the project, with env vars from
 * INQUIRY-BACKEND.md. Test mode must stay enabled until storage and mail are
 * configured; it never returns a successful submission.
 */

const buckets = new Map();

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

const clean = (value, max = 4000) => String(value ?? "").replace(/[<>]/g, "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const required = ["name", "company", "market", "email", "message"];

function inquiryNumber() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
  return `HB-${date}-${suffix}`;
}

function rateLimited(request) {
  const forwarded = request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || "unknown";
  const now = Date.now();
  const previous = buckets.get(forwarded) || [];
  const recent = previous.filter(time => now - time < 10 * 60 * 1000);
  recent.push(now);
  buckets.set(forwarded, recent);
  return recent.length > 5;
}

async function sendJson(url, token, payload) {
  if (!url) return { ok: false, reason: "missing endpoint" };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", ...(token ? { authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify(payload)
    });
    return { ok: response.ok, status: response.status, reason: response.ok ? "" : await response.text().catch(() => "remote request failed") };
  } catch (error) {
    return { ok: false, reason: error instanceof Error ? error.message : "remote request failed" };
  }
}

export default async function handler(request) {
  if (request.method !== "POST") return json({ success: false, error: "Method not allowed" }, 405);
  if (rateLimited(request)) return json({ success: false, error: "Too many requests" }, 429);

  const config = globalThis.process?.env || {};
  const allowedOrigin = config.INQUIRY_ALLOWED_ORIGIN;
  if (allowedOrigin && request.headers.get("origin") !== allowedOrigin) return json({ success: false, error: "Origin not allowed" }, 403);
  if ((config.INQUIRY_MODE || "test") !== "production") {
    return json({ success: false, code: "TEST_MODE", error: "Inquiry backend is in test mode. No inquiry was sent or stored." }, 503);
  }

  let input;
  try { input = await request.json(); } catch { return json({ success: false, error: "Invalid JSON" }, 400); }
  if (input.websiteField) return json({ success: false, error: "Invalid submission" }, 400);
  if (input.consent !== true && input.consent !== "on") return json({ success: false, error: "Privacy consent is required" }, 400);

  const data = Object.fromEntries(Object.entries(input).map(([key, value]) => [key, typeof value === "string" ? clean(value) : value]));
  const missing = required.filter(field => !data[field]);
  if (missing.length || !validEmail(data.email)) return json({ success: false, error: "Please provide valid required fields", fields: missing }, 400);

  const record = {
    inquiryNumber: inquiryNumber(),
    inquiryType: data.type === "sample" ? "Sample Request" : data.items?.length > 1 ? "Multi-product Quote" : "Product Quote",
    status: "new",
    followUpStatus: "unassigned",
    submittedAt: new Date().toISOString(),
    customer: { name: data.name, company: data.company, market: data.market, email: data.email, whatsapp: data.whatsapp, destination: data.destination },
    products: Array.isArray(data.items) ? data.items.slice(0, 30).map(item => ({ model: clean(item.model, 120), name: clean(item.name, 240), quantity: clean(item.quantity, 80), version: clean(item.version, 120), logo: clean(item.logo, 500), packaging: clean(item.packaging, 500), notes: clean(item.notes, 1000) })) : [{ model: data.productModel, quantity: data.quantity, version: data.version, logo: data.logoRequirement, packaging: data.packagingRequirement }],
    customization: data.customization || data.logoRequirement || data.packagingRequirement || "",
    message: data.message || data.specification || "",
    sourcePage: clean(data.sourcePage, 2000), productModel: clean(data.productModel, 120), language: clean(data.language, 20), utm: data.utm || {}, referrer: clean(data.referrer || request.headers.get("referer"), 2000), userAgent: clean(data.userAgent || request.headers.get("user-agent"), 1000)
  };

  const storage = await sendJson(config.INQUIRY_STORAGE_URL, config.INQUIRY_STORAGE_TOKEN, { event: "inquiry.created", record });
  if (!storage.ok) return json({ success: false, inquiryNumber: record.inquiryNumber, code: "STORAGE_FAILED", error: "Inquiry could not be saved", detail: storage.reason }, 502);

  const notification = await sendJson(config.INQUIRY_EMAIL_URL, config.INQUIRY_EMAIL_TOKEN, { event: "inquiry.notification", to: config.INQUIRY_TO_EMAIL, replyTo: data.email, senderName: "HENGBO", inquiry: record });
  const confirmation = await sendJson(config.INQUIRY_CONFIRMATION_URL, config.INQUIRY_CONFIRMATION_TOKEN, { event: "inquiry.confirmation", to: data.email, replyTo: config.INQUIRY_TO_EMAIL, senderName: "HENGBO", inquiryNumber: record.inquiryNumber, inquiry: record });
  if (!notification.ok || !confirmation.ok) {
    return json({ success: false, inquiryNumber: record.inquiryNumber, code: "MAIL_FAILED", error: "Inquiry was saved but email delivery did not complete", notification: notification.ok ? "sent" : "failed", confirmation: confirmation.ok ? "sent" : "failed" }, 502);
  }
  return json({ success: true, inquiryNumber: record.inquiryNumber, notification: "sent", confirmation: "sent" });
}
