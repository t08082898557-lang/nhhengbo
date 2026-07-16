(function () {
  "use strict";

  const STORAGE_KEY = "hb-quote-list-v1";
  const inquiryConfig = window.HB_INQUIRY_CONFIG || { endpoint: "/api/inquiries", mode: "test" };
  const endpoint = inquiryConfig.endpoint || "/api/inquiries";
  const testMode = inquiryConfig.mode !== "production";
  const catalog = {
    "HB-328": { name: "LED Road Warning Light", image: "assets/product-mains/alibaba-hb-328-main.png", versions: ["Battery"] },
    "HB-330": { name: "Triangle Road Warning Light", image: "assets/product-mains/alibaba-hb-330-main.png", versions: ["Battery", "Type-C rechargeable"] },
    "HB-330C": { name: "Triangle Road Warning Light", image: "assets/product-mains/alibaba-hb-330c-main.png", versions: ["Type-C rechargeable", "Battery"] },
    "HB-331": { name: "Triangle Work Warning Light", image: "assets/product-mains/alibaba-hb-331-main.png", versions: ["Battery", "Type-C rechargeable"] },
    "HB-331C": { name: "Triangle Work Warning Light", image: "assets/product-mains/alibaba-hb-331c-main.png", versions: ["Type-C rechargeable", "Battery"] },
    "HB-329": { name: "Magnetic Safety Beacon", image: "assets/product-mains/hb-329-main.png", versions: ["Confirm by model"] },
    "HB-361": { name: "Red Blue Emergency Beacon", image: "assets/product-mains/hb-361-main.png", versions: ["Confirm by model"] },
    "HB-362": { name: "LED Safety Flare", image: "assets/product-mains/hb-362-main.png", versions: ["Battery"] },
    "HB-363": { name: "Round Road Warning Light", image: "assets/product-mains/hb-363-main.png", versions: ["Battery", "Type-C rechargeable"] },
    "HB-363C": { name: "Round Road Warning Light", image: "assets/product-mains/hb-363c-main.png", versions: ["Type-C rechargeable", "Battery"] }
  };

  const labels = {
    en: { quoteList: "Quote List", empty: "No products added yet. Choose models and add them here.", remove: "Remove", quantity: "Expected quantity", version: "Version", logo: "Logo requirement", packaging: "Packaging requirement", notes: "Other specifications", submit: "Submit Quote Request", sampleTitle: "Request a Sample", sampleNote: "Sample cost and international shipping will be confirmed before payment.", unavailable: "Online inquiry endpoint is not configured yet. Please use WhatsApp while the sales endpoint is being connected.", success: "Your inquiry was submitted successfully. Sales will confirm specifications before quotation.", error: "Submission failed. Please check the fields or contact WhatsApp Sales.", required: "Please complete the required fields.", add: "Add to Quote", sample: "Request a Sample", whatsapp: "WhatsApp Sales" },
    zh: { quoteList: "询价清单", empty: "还没有产品，请先选择型号加入询价清单。", remove: "删除", quantity: "预计采购数量", version: "版本", logo: "Logo定制需求", packaging: "包装定制需求", notes: "其他规格要求", submit: "提交询价", sampleTitle: "申请样品", sampleNote: "样品费用和国际运费将在付款前由销售确认。", unavailable: "在线询盘接口尚未配置完成。请先使用 WhatsApp 联系销售，待接口接入后即可在线提交。", success: "询盘已提交，销售会先确认规格，再进行报价。", error: "提交失败，请检查必填信息或使用 WhatsApp 联系销售。", required: "请填写必填信息。", add: "加入询价清单", sample: "申请样品", whatsapp: "WhatsApp销售" }
  };

  const lang = () => new URLSearchParams(location.search).get("lang") === "zh" ? "zh" : "en";
  const text = key => (labels[lang()] || labels.en)[key] || labels.en[key] || key;
  const read = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; } };
  const write = items => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {} };
  const esc = value => String(value ?? "").replace(/[&<>\"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const currentModel = () => {
    const explicit = document.body.dataset.productModel || document.querySelector("[data-product-model]")?.dataset.productModel;
    if (explicit) return explicit;
    const match = document.title.match(/HB-\d{3}C?/i) || location.pathname.match(/hb-(\d{3})(?:c)?/i);
    return match ? match[0].toUpperCase() : "";
  };
  const dataFor = model => catalog[model] || { name: "HENGBO Product", image: "assets/product-mains/alibaba-hb-328-main.png", versions: ["Confirm by model"] };
  const imagePath = file => (file || "").startsWith("http") ? file : `${location.pathname.includes("/products/") || location.pathname.includes("/solutions/") ? "../" : ""}${file}`;

  function ensureShell() {
    if (document.getElementById("quoteDrawer")) return;
    document.body.insertAdjacentHTML("beforeend", `<div class="quote-drawer-backdrop" id="quoteDrawerBackdrop"></div><aside class="quote-drawer" id="quoteDrawer" aria-labelledby="quoteDrawerTitle"><div class="quote-drawer-head"><h2 id="quoteDrawerTitle">${text("quoteList")} <span class="quote-count" id="quoteDrawerCount">0</span></h2><button class="quote-drawer-close" type="button" id="quoteDrawerClose" aria-label="Close">×</button></div><p class="quote-note">${text("empty")}</p><div id="quoteItems"></div><form class="quote-drawer-form" id="quoteDrawerForm"><div class="quote-drawer-form form-grid"><input name="name" required placeholder="Name"><input name="company" required placeholder="Company"><input name="market" required placeholder="Country / Market"><input name="email" type="email" required placeholder="Email"><input name="whatsapp" placeholder="WhatsApp"><input name="destination" placeholder="Destination"></div><textarea name="customization" placeholder="Customization Requirements"></textarea><textarea name="message" placeholder="Message"></textarea><button class="btn primary" type="submit">${text("submit")}</button><p class="form-status" id="quoteDrawerStatus" role="status" aria-live="polite"></p></form></aside>`);
    document.getElementById("quoteDrawerClose").addEventListener("click", closeDrawer);
    document.getElementById("quoteDrawerBackdrop").addEventListener("click", closeDrawer);
    document.getElementById("quoteDrawerForm").addEventListener("submit", submitQuote);
  }
  function openDrawer() { ensureShell(); document.getElementById("quoteDrawer").classList.add("is-open"); document.getElementById("quoteDrawerBackdrop").classList.add("is-open"); render(); }
  function closeDrawer() { document.getElementById("quoteDrawer")?.classList.remove("is-open"); document.getElementById("quoteDrawerBackdrop")?.classList.remove("is-open"); }
  function add(model, values = {}) {
    if (!model) return;
    const product = dataFor(model); const items = read();
    const existing = items.find(item => item.model === model && item.version === (values.version || product.versions[0]));
    if (existing) existing.quantity = values.quantity || existing.quantity;
    else items.push({ model, name: product.name, image: product.image, quantity: values.quantity || "", version: values.version || product.versions[0], logo: "", packaging: "", notes: "" });
    write(items); openDrawer(); updateCounts();
  }
  function remove(index) { const items = read(); items.splice(index, 1); write(items); render(); updateCounts(); }
  function update(index, field, value) { const items = read(); if (!items[index]) return; items[index][field] = value; write(items); updateCounts(); }
  function render() {
    ensureShell(); const items = read(); const root = document.getElementById("quoteItems"); const note = document.querySelector("#quoteDrawer .quote-note");
    if (!items.length) { root.innerHTML = `<div class="quote-empty">${text("empty")}</div>`; note.hidden = true; return; }
    note.hidden = true;
    root.innerHTML = items.map((item, index) => { const product = dataFor(item.model); return `<article class="quote-drawer-item"><div class="quote-drawer-item-top"><img src="${esc(imagePath(item.image || product.image))}" alt="${esc(item.model)}"><div><strong>${esc(item.model)}</strong><small>${esc(item.name || product.name)}</small></div><button class="quote-drawer-remove" type="button" data-remove-quote="${index}">${text("remove")}</button></div><div class="quote-drawer-fields"><input data-update-quote="quantity" data-index="${index}" value="${esc(item.quantity)}" placeholder="${text("quantity")}"><select data-update-quote="version" data-index="${index}">${product.versions.map(version => `<option ${version === item.version ? "selected" : ""}>${esc(version)}</option>`).join("")}</select><input data-update-quote="logo" data-index="${index}" value="${esc(item.logo)}" placeholder="${text("logo")}"><input data-update-quote="packaging" data-index="${index}" value="${esc(item.packaging)}" placeholder="${text("packaging")}"><textarea data-update-quote="notes" data-index="${index}" placeholder="${text("notes")}">${esc(item.notes)}</textarea></div></article>`; }).join("");
    root.querySelectorAll("[data-remove-quote]").forEach(button => button.addEventListener("click", () => remove(Number(button.dataset.removeQuote))));
    root.querySelectorAll("[data-update-quote]").forEach(field => field.addEventListener("input", () => update(Number(field.dataset.index), field.dataset.updateQuote, field.value)));
  }
  function updateCounts() { const count = read().length; document.querySelectorAll("[data-quote-count]").forEach(el => el.textContent = count); const drawerCount = document.getElementById("quoteDrawerCount"); if (drawerCount) drawerCount.textContent = count; }
  function payload(form, type) { const data = Object.fromEntries(new FormData(form).entries()); return { type, ...data, items: read(), sourcePage: location.href, productModel: currentModel(), submittedAt: new Date().toISOString(), language: lang(), referrer: document.referrer, userAgent: navigator.userAgent, submissionId: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`, utm: Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map(key => [key, new URLSearchParams(location.search).get(key) || ""])) }; }
  async function post(form, type, status) {
    if (form.dataset.submitting === "true") return;
    if (!form.checkValidity()) { form.reportValidity(); status.textContent = text("required"); status.className = "form-status is-error"; return; }
    const raw = Object.fromEntries(new FormData(form).entries());
    if (raw.websiteField) { status.textContent = text("error"); status.className = "form-status is-error"; return; }
    if (testMode) { status.textContent = text("unavailable"); status.className = "form-status is-error"; return; }
    form.dataset.submitting = "true"; status.textContent = ""; try { const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", "X-Idempotency-Key": crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) }, body: JSON.stringify(payload(form, type)) }); const result = await response.json().catch(() => ({})); if (!response.ok || result.success === false) throw new Error("Request failed"); status.textContent = `${text("success")}${result.inquiryNumber ? ` ${result.inquiryNumber}` : ""}`; status.className = "form-status is-success"; } catch { status.textContent = text("error"); status.className = "form-status is-error"; } finally { form.dataset.submitting = "false"; }
  }
  function submitQuote(event) { event.preventDefault(); post(event.currentTarget, "quote", document.getElementById("quoteDrawerStatus")); }
  function ensureSampleDialog() {
    if (document.getElementById("sampleDialog")) return;
    document.body.insertAdjacentHTML("beforeend", `<div class="sample-dialog" id="sampleDialog" role="dialog" aria-modal="true" aria-labelledby="sampleTitle"><div class="sample-dialog-panel"><div class="sample-dialog-head"><div><p class="eyebrow">HENGBO B2B SAMPLE</p><h2 id="sampleTitle">${text("sampleTitle")}</h2><p>${text("sampleNote")}</p></div><button class="sample-dialog-close" type="button" id="sampleDialogClose">×</button></div><form class="sample-form" id="sampleForm"><input type="hidden" name="productModel"><input type="text" name="websiteField" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px" placeholder="Leave blank"><div class="form-grid"><input name="sampleQuantity" required placeholder="Sample quantity"><input name="country" required placeholder="Receiving country"><input name="company" required placeholder="Company"><input name="name" required placeholder="Contact name"><input name="email" type="email" required placeholder="Email"><input name="whatsapp" placeholder="WhatsApp"><input name="courierAccount" placeholder="Courier account (if available)"><input name="specification" placeholder="Sample specification"></div><textarea name="logoPackaging" placeholder="Logo or packaging requirements"></textarea><label><input name="consent" type="checkbox" required> I agree to the Privacy Policy.</label><button class="btn primary" type="submit">${text("sampleTitle")}</button><p class="form-status" id="sampleStatus" role="status" aria-live="polite"></p></form></div></div>`);
    document.getElementById("sampleDialogClose").addEventListener("click", () => document.getElementById("sampleDialog").classList.remove("is-open"));
    document.getElementById("sampleDialog").addEventListener("click", event => { if (event.target.id === "sampleDialog") event.currentTarget.classList.remove("is-open"); });
    document.getElementById("sampleForm").addEventListener("submit", event => { event.preventDefault(); post(event.currentTarget, "sample", document.getElementById("sampleStatus")); });
  }
  function requestSample(model) { ensureSampleDialog(); const form = document.getElementById("sampleForm"); form.productModel.value = model || currentModel(); document.getElementById("sampleDialog").classList.add("is-open"); }
  function setWhatsAppLinks() { const model = currentModel(); const message = `Hello HENGBO, I'm interested in ${model || "your LED warning lights"}.\n\nEstimated quantity:\nDestination market:\nLogo/packaging requirements:\n\nProduct page: ${location.href}`; document.querySelectorAll("[data-whatsapp-link]").forEach(link => { link.href = `https://wa.me/8619858215314?text=${encodeURIComponent(message)}`; }); }
  function ensureProductCtas() {
    const model = currentModel(); const row = document.querySelector(".seo-cta-row"); if (!model || !row || row.dataset.b2bActions) return;
    row.dataset.b2bActions = "true"; row.innerHTML = `<a class="btn primary" href="../index.html#contact">${text("quoteList") === "Quote List" ? "Request a Quote" : "提交询价"}</a><button class="btn outline" type="button" data-add-quote="${esc(model)}">${text("add")}</button><button class="btn outline" type="button" data-request-sample="${esc(model)}">${text("sample")}</button><a class="btn glass" data-whatsapp-link href="https://wa.me/8619858215314" target="_blank" rel="noopener">${text("whatsapp")}</a>`;
  }
  function bind() {
    ensureShell();
    document.addEventListener("click", event => { const addButton = event.target.closest("[data-add-quote]"); if (addButton) { event.preventDefault(); add(addButton.dataset.addQuote); return; } const sampleButton = event.target.closest("[data-request-sample]"); if (sampleButton) { event.preventDefault(); requestSample(sampleButton.dataset.requestSample || currentModel()); return; } const openButton = event.target.closest("[data-open-quote-list]"); if (openButton) { event.preventDefault(); openDrawer(); } });
    document.querySelectorAll("[data-inquiry-form]").forEach(form => form.addEventListener("submit", event => { event.preventDefault(); post(form, "quote", form.querySelector(".form-status")); }));
    ensureProductCtas(); setWhatsAppLinks(); render(); updateCounts();
  }
  window.HBQuoteFlow = { add, open: openDrawer, requestSample, render, updateCounts };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", bind) : bind();
})();
