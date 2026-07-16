# HENGBO website latest handoff — 2026-07-16

## Current state

- Project: `C:\Users\Administrator\Desktop\HB-company-website`
- Stack: static HTML/CSS/JavaScript; no `package.json`, database, SMTP service or server runtime in the repository.
- Deployment: GitHub Pages. The static site cannot execute `/api/inquiries` by itself.
- Product strategy: HB-328 is the mature bestseller; HB-330/HB-331 are the new series; models without `C` are battery versions and models with `C` are Type-C rechargeable versions.
- Public prices are not shown.
- The second-phase referral dashboard, partner backend and automatic email workflow remain deferred.

## This redesign

- Replaced the old homepage DOM with a focused B2B structure: hero, core warning-light range, manufacturing, OEM/ODM, applications, quality, buyer types, FAQ, quote form and footer.
- Added a navy + safety-orange visual system in `home-v3.css`.
- Added real product images for HB-328, HB-330/HB-330C, HB-331/HB-331C, HB-362, HB-363/HB-363C and HB-329/HB-361.
- Replaced the old `mailto` form, internal recipient selector, product modal and floating email path on the homepage.
- Added `quote-flow.js`: local-storage Quote List, multi-product fields, Add to Quote, Request a Sample, dynamic WhatsApp model/page text and test-mode inquiry status.
- Added `api/inquiries.js` as a platform-neutral Serverless handler contract and `INQUIRY-BACKEND.md` for environment variables. It defaults to test mode and never reports success without storage and both email deliveries.
- Added `terms.html` and `cookie-policy.html` to remove footer dead links.
- Product and solution pages keep their existing URLs. `seo-page.js` now injects the B2B CTA sequence, language selector, mobile product navigation and clean Chinese metadata/copy for core product pages.

## Cleanup and archive

The following were moved to `_archive_before_redesign` and are not permanently deleted:

- `.playwright-cli/` and `output/`: local browser QA artifacts.
- `assets.json`: machine-local source asset manifest, not used by runtime pages.
- `24049f2cce9997f94f5cfcc8661b5a1f.txt`: duplicate verification file; `indexnow-key.txt` is retained.
- `script.js`: old homepage runtime, no HTML page references it after the redesign.

Product images such as `assets/p321.webp`, `assets/p325.webp` and `assets/p326.webp` are retained even when not displayed on the homepage. `styles.css`, `seo-page.js`, `product-data.json`, product pages, solution pages, PDFs, sitemap, robots and company verification files are retained.

## Verification completed

- `node --check home-v3.js`
- `node --check quote-flow.js`
- `node --check seo-page.js`
- Module syntax check for `api/inquiries.js` through `node --input-type=module --check`.
- Local homepage: six core product cards, no missing homepage references, no console errors observed.
- Mobile homepage at 390px: no horizontal overflow after header fix.
- HB-328 detail page: dynamic Request a Quote / Add to Quote / Request a Sample / WhatsApp CTA sequence works; Quote List survives navigation.
- Chinese product page: `lang="zh-CN"`, clean title/meta, Chinese H1 and CTA copy, current-page language selector.
- Root homepage remains English even when browser storage previously contains `hb-lang=zh`.
- Test-mode inquiry submission keeps form values and shows a non-success configuration message.

## Still blocked or awaiting configuration

- GitHub Pages cannot run the API. A Serverless host, persistent storage endpoint, email notification endpoint and customer confirmation email endpoint must be selected and configured with server-side environment variables.
- `sales@nhhengbo.com` and `info@nhhengbo.com` are placeholders until mailbox delivery is confirmed. Configure MX, SPF, DKIM and DMARC before using them as operational senders.
- No production inquiry, database or email test was sent; no real customer or internal sales mailbox was contacted.
- Before production deployment, run a full link/image/SEO check and verify the chosen Serverless adapter routes `/api/inquiries` to the handler.
