(function () {
  "use strict";

  const lang = new URLSearchParams(window.location.search).get("lang") === "zh" ? "zh" : "en";
  const path = window.location.pathname;
  const isContentPage = /^\/(products|solutions)(\/|$)/.test(path);
  const normalize = value => String(value || "").replace(/\s+/g, " ").trim();
  const currentModel = () => (document.querySelector("h1")?.textContent.match(/HB-\d+[A-Z]?/i) || [""])[0].toUpperCase();
  const zhCommon = {
    "Products": "产品", "SEO Product Pages": "产品专题页", "Factory": "工厂实力", "Contact": "联系我们", "Request Quote": "获取报价", "Request Factory Quotation": "获取工厂报价", "WhatsApp Sales": "WhatsApp销售", "Key Features": "核心特点", "Specifications": "产品参数", "Product details": "产品详情", "Applications": "应用场景", "OEM / ODM": "OEM / ODM", "Buyer FAQ": "采购常见问题", "Related Warning Lights": "相关警示灯", "Contact Sales": "联系销售", "Back to home": "返回首页", "Privacy notice": "隐私说明", "Back to top": "返回顶部"
  };
  const productZh = {
    "HB-328": { eyebrow: "成熟爆款 · LED道路警示灯", h1: "HB-328成熟爆款道路安全警示灯。", intro: "HB-328是恒博成熟的多模式LED道路警示灯，适用于车辆应急包、道路安全和长期批发项目。", features: ["9种可选警示模式", "红色LED警示灯与白色SMD照明", "挂钩和便携结构，方便布置", "适合夜间道路安全使用", "支持安全套装包装和重复批发项目"], uses: ["道路应急套装", "车辆故障警示", "夜间安全标识", "警示灯批发项目"] },
    "HB-330": { eyebrow: "新品系列 · 三角道路警示灯", h1: "HB-330 / HB-330C三角道路警示灯。", intro: "HB-330系列面向道路应急、车辆故障和OEM警示灯项目，提供电池款和Type-C充电款。", features: ["三角安全外形，便于快速识别", "电池款与Type-C充电款", "黄光警示与白光照明组合", "适用于道路、车辆和临时作业区", "支持Logo与包装方案沟通"], uses: ["道路应急包", "车辆故障警示", "临时车道", "安全产品批发"] },
    "HB-331": { eyebrow: "新品系列 · 三角作业警示灯", h1: "HB-331 / HB-331C三角作业警示灯。", intro: "HB-331系列适用于作业区域、临时车道和道路应急可视警示，提供电池款和Type-C充电款。", features: ["三角安全外形，快速识别", "黄光LED与白光SMD照明", "多种可选工作与警示模式", "便携结构，适合临时警示区域", "支持电池款与充电款组合采购"], uses: ["道路作业警示", "临时车道标识", "施工安全", "车辆故障可视警示"] },
    "HB-329": { eyebrow: "磁吸安全警示灯", h1: "HB-329磁吸安全警示灯。", intro: "HB-329适合车辆侧面、项目现场和需要快速布置的应急警示场景。", features: ["磁吸安装，适合车辆表面", "白光、红光和橙光警示功能", "紧凑便携的产品结构", "适合车队和项目安全供应", "电池与充电版本按型号确认"], uses: ["车辆警示", "道路作业区", "施工项目安全", "车队应急套装"] },
    "HB-361": { eyebrow: "红蓝应急警示灯", h1: "HB-361红蓝应急警示灯。", intro: "HB-361适用于拖车、救援、道路警示和户外应急可视场景。", features: ["红蓝应急警示光", "高亮白光工作照明", "前后侧SMD灯珠布局", "支架支持便携使用", "适合救援与拖车供应项目"], uses: ["拖车救援", "应急响应", "户外道路警示", "现场作业照明"] },
    "HB-362": { eyebrow: "电池款 · LED安全爆闪灯", h1: "HB-362电池款LED安全爆闪灯。", intro: "HB-362是紧凑型电池供电LED安全警示灯，适用于道路救援、车辆应急包和便携安全项目。", features: ["3节AAA电池设计", "多种LED警示模式", "背部磁吸，方便车辆布置", "适合道路和雨天场景的外壳设计", "适合应急套装和批发项目"], uses: ["道路救援", "车辆应急包", "夜间道路安全", "零售安全套装"] },
    "HB-363": { eyebrow: "电池款 · 圆形道路警示灯", h1: "HB-363电池款圆形道路警示灯。", intro: "HB-363是圆形道路警示灯系列的电池款，适合便携安全使用和应急套装包装。", features: ["电池供电警示灯", "磁吸背部，方便快速布置", "便携橙色安全外壳", "适合车辆应急套装", "可与充电款组合报价"], uses: ["道路应急套装", "车辆安全包", "便携安全标识", "零售与批发项目"] },
    "HB-363C": { eyebrow: "Type-C充电款 · 圆形道路警示灯", h1: "HB-363C Type-C充电道路警示灯。", intro: "HB-363C是圆形道路警示灯系列的充电款，适合需要重复使用安全警示灯的车辆和道路市场。", features: ["Type-C充电版本", "橙色防护外壳", "背部磁吸，方便快速固定", "多模式警示可视效果", "适合OEM道路安全套装"], uses: ["车辆救援套装", "道路安全项目", "批发警示灯订单", "自有品牌应急套装"] }
  };

  function updateLanguageUrl() {
    const url = new URL(window.location.href);
    lang === "zh" ? url.searchParams.set("lang", "zh") : url.searchParams.delete("lang");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function updateLanguageLinks() {
    const canonical = document.querySelector('link[rel="canonical"]');
    const clean = canonical ? new URL(canonical.href, window.location.href) : new URL(window.location.href);
    clean.searchParams.delete("lang");
    const zh = new URL(clean); zh.searchParams.set("lang", "zh");
    if (canonical) canonical.href = lang === "zh" ? zh.href : clean.href;
    document.querySelectorAll('link[rel="alternate"]').forEach(link => {
      if (link.hreflang === "en" || link.hreflang === "x-default") link.href = clean.href;
      if (link.hreflang === "zh-CN") link.href = zh.href;
    });
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = lang === "zh" ? zh.href : clean.href;
  }

  function ensureLanguageControl() {
    const actions = document.querySelector(".product-site-header .header-actions");
    if (!actions || actions.querySelector(".page-language-switcher")) return;
    const selector = document.createElement("select");
    selector.className = "page-language-switcher language-switcher";
    selector.setAttribute("aria-label", "Language selector");
    selector.innerHTML = '<option value="en">English</option><option value="zh">中文</option>';
    selector.value = lang;
    selector.addEventListener("change", event => {
      const url = new URL(window.location.href);
      event.target.value === "zh" ? url.searchParams.set("lang", "zh") : url.searchParams.delete("lang");
      window.location.href = `${url.pathname}${url.search}${url.hash}`;
    });
    actions.prepend(selector);
  }

  function ensureMobileNav() {
    const header = document.querySelector(".product-site-header");
    const nav = header?.querySelector(".nav");
    if (!header || !nav || header.querySelector(".product-mobile-toggle")) return;
    nav.id = "productPrimaryNav";
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "product-mobile-toggle";
    toggle.textContent = "Menu";
    toggle.setAttribute("aria-controls", nav.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); toggle.setAttribute("aria-expanded", String(open)); });
    header.insertBefore(toggle, nav);
  }

  function ensureB2BAssets() {
    if (!document.querySelector("link[data-b2b-quote-style]")) {
      const link = document.createElement("link"); link.rel = "stylesheet"; link.dataset.b2bQuoteStyle = "true"; link.href = "../home-v3.css?v=20260716-b2b-v5"; document.head.appendChild(link);
    }
    if (!document.querySelector("script[data-b2b-quote-flow]")) {
      const script = document.createElement("script"); script.dataset.b2bQuoteFlow = "true"; script.src = "../quote-flow.js?v=20260716-inquiry-v3"; document.body.appendChild(script);
    }
  }

  function ensurePrivacyLink() {
    const footer = document.querySelector(".footer");
    if (!footer || footer.querySelector('a[href$="privacy.html"]')) return;
    const link = document.createElement("a"); link.href = "../privacy.html"; link.textContent = lang === "zh" ? "隐私说明" : "Privacy notice"; footer.appendChild(link);
  }

  function updateMetadata() {
    const model = currentModel();
    if (lang !== "zh" || !model) return;
    const names = { "HB-328": "LED道路警示灯", "HB-329": "磁吸安全警示灯", "HB-330": "三角道路警示灯", "HB-331": "三角作业警示灯", "HB-361": "红蓝应急警示灯", "HB-362": "LED安全爆闪灯", "HB-363": "圆形道路警示灯", "HB-363C": "Type-C充电道路警示灯" };
    const name = names[model] || "LED警示灯产品";
    document.title = `${model} ${name} | 恒博B2B供应商`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = `${model}${name}，面向进口商、经销商和OEM项目采购客户，支持样品申请、多产品询价和定制包装沟通。`;
    document.querySelectorAll('meta[property="og:title"]').forEach(meta => { meta.content = document.title; });
    document.querySelectorAll('meta[property="og:description"]').forEach(meta => { meta.content = description?.content || ""; });
  }

  function translateCommon() {
    document.querySelectorAll("body *").forEach(element => {
      if (element.matches("script, style") || element.children.length) return;
      const value = normalize(element.textContent);
      if (zhCommon[value]) element.textContent = zhCommon[value];
    });
  }

  function translateProduct() {
    if (!document.body.classList.contains("product-detail-page")) return;
    const model = currentModel(); const copy = productZh[model]; if (!copy) return;
    const hero = document.querySelector(".product-hero-detail");
    if (hero) { hero.querySelector(".eyebrow").textContent = copy.eyebrow; hero.querySelector("h1").textContent = copy.h1; const intro = hero.querySelector(".seo-copy > p:not(.eyebrow)"); if (intro) intro.textContent = copy.intro; }
    const panels = [...document.querySelectorAll(".seo-detail-grid .seo-panel")];
    if (panels[0]) { panels[0].querySelector(".eyebrow").textContent = "核心特点"; panels[0].querySelector("h2").textContent = `采购商选择 ${model} 的原因`; panels[0].querySelectorAll("li").forEach((li, i) => { if (copy.features[i]) li.textContent = copy.features[i]; }); }
    if (panels[1]) { panels[1].querySelector(".eyebrow").textContent = "产品参数"; panels[1].querySelector("h2").textContent = "规格信息"; }
    if (panels[2]) { panels[2].querySelector(".eyebrow").textContent = "应用场景"; panels[2].querySelector("h2").textContent = "常见采购用途"; panels[2].querySelectorAll("li").forEach((li, i) => { if (copy.uses[i]) li.textContent = copy.uses[i]; }); }
    if (panels[3]) { panels[3].querySelector(".eyebrow").textContent = "OEM / ODM"; panels[3].querySelector("h2").textContent = "警示灯项目支持"; const p = panels[3].querySelector("p"); if (p) p.textContent = "恒博可以为进口商、经销商和安全产品采购商提供选型建议、样品沟通、Logo定制、彩盒设计、外箱包装和出口订单跟进。"; }
    document.querySelectorAll(".seo-conversion-band .eyebrow").forEach(el => { el.textContent = "采购支持"; });
    document.querySelectorAll(".seo-conversion-band h2").forEach(el => { el.textContent = "需要样品、OEM包装或组合报价？"; });
    document.querySelectorAll(".seo-faq .eyebrow").forEach(el => { el.textContent = "采购常见问题"; });
    document.querySelectorAll(".seo-faq h2").forEach(el => { el.textContent = `关于 ${model} 的问题`; });
    document.querySelectorAll(".seo-related .eyebrow").forEach(el => { el.textContent = "相关警示灯"; });
    document.querySelectorAll(".seo-related h2").forEach(el => { el.textContent = "组合完整的道路安全产品线"; });
  }

  if (isContentPage) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    updateLanguageUrl(); updateLanguageLinks(); ensureB2BAssets(); ensureLanguageControl(); ensureMobileNav(); ensurePrivacyLink();
    if (lang === "zh") { updateMetadata(); translateCommon(); translateProduct(); }
  }
}());
