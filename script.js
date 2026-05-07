
const products = [
  { model: "HB-321", img: "p321.webp", en: ["LED Work Light", "COB handheld work light for inspection, repair and outdoor utility."], zh: ["LED 工作灯", "COB 手持工作灯，适用于检修、维修、户外便携照明。"] },
  { model: "HB-325", img: "p325.webp", en: ["Portable Work Light", "Portable work light with COB + LED illumination for job sites."], zh: ["便携式工作灯", "COB + LED 组合照明，适用于工地、车库、维修场景。"] },
  { model: "HB-326", img: "p326.webp", en: ["Outdoor Emergency Light", "Hook design emergency light for camping, repair and garage use."], zh: ["户外应急灯", "挂钩式应急照明，适合露营、维修、车库等场景。"] },
  { model: "HB-327", img: "p327.webp", en: ["Mini LED Warning Light", "Magnetic mini LED warning light for vehicle and roadside safety."], zh: ["迷你 LED 警示灯", "磁吸式迷你 LED 警示灯，适用于车辆与道路安全警示。"] },
  { model: "HB-328", img: "p328.webp", en: ["LED Road Warning Light", "Multi-mode LED road warning light with strong visibility."], zh: ["LED 道路警示灯", "多模式道路警示灯，亮度高、穿透力强。"] },
  { model: "HB-329", img: "p329.webp", en: ["Magnetic Safety Beacon", "Magnetic safety beacon for vehicles, projects and emergency scenes."], zh: ["磁吸安全警示灯", "磁吸式安全警示灯，适用于车辆、工程与应急现场。"] },
  { model: "HB-330", img: "p330.webp", en: ["Triangle Roadside Warning Lamp", "Foldable triangle warning lamp for night roadside emergencies."], zh: ["三角道路警示灯", "折叠式三角警示灯，适合夜间道路应急。"] },
  { model: "HB-331", img: "p331.webp", en: ["Triangle Work Warning Light", "Portable triangle warning light with strong safety illumination."], zh: ["三角工作警示灯", "便携式三角警示灯，安全警示效果明显。"] },
  { model: "HB-361", img: "p361.webp", en: ["Red Blue Emergency Beacon", "Red and blue emergency beacon for roadside and field warning."], zh: ["红蓝应急警示灯", "红蓝应急警示灯，适合道路和户外警示场景。"] }
];

const process = [
  { num: "01", en: ["Inquiry", "Send requirements, market, target price and product ideas."], zh: ["需求沟通", "提供产品需求、目标市场、目标价和定制想法。"] },
  { num: "02", en: ["Design & Sampling", "Engineering team prepares product and sample solutions."], zh: ["设计打样", "工程团队提供产品方案、样品和可行性建议。"] },
  { num: "03", en: ["Logo / Packaging", "Customize logo, color, instruction manual and packaging."], zh: ["标识与包装", "支持 LOGO、颜色、说明书、彩盒和外箱定制。"] },
  { num: "04", en: ["Prototype Confirmation", "Confirm sample performance before mass production."], zh: ["样品确认", "量产前确认样品结构、功能、外观和包装细节。"] },
  { num: "05", en: ["Mass Production", "Efficient production with stable process control."], zh: ["批量生产", "按确认样品和订单要求进行稳定批量生产。"] },
  { num: "06", en: ["Inspection & Delivery", "Final QC, export packing and on-time shipment."], zh: ["质检交付", "成品检验、出口包装、装柜与按期发货。"] }
];

const advantages = [
  { num: "01", en: ["Portable lighting focus", "Specialized in LED lighting and safety warning products."], zh: ["专注便携照明", "专注 LED 工作灯、道路警示灯和安全警示产品。"] },
  { num: "02", en: ["OEM & ODM service", "Brand customization from product to package."], zh: ["OEM/ODM 定制", "从产品外观、功能到包装，支持品牌化定制。"] },
  { num: "03", en: ["Fast response", "Efficient communication for samples and bulk orders."], zh: ["响应快速", "样品、报价、订单进度沟通更高效。"] },
  { num: "04", en: ["Custom packaging", "Retail-ready packaging for different channels."], zh: ["包装定制", "支持中性包装、彩盒、品牌包装和渠道包装。"] },
  { num: "05", en: ["ISO 9001-oriented QC", "Process records, inspection checkpoints and shipment sampling support stable quality."], zh: ["ISO9001质量体系", "建立过程记录、检验节点和出货抽检，保障品质稳定。"] },
  { num: "06", en: ["Flexible orders", "Support for trial orders, wholesale and long-term supply."], zh: ["订单灵活", "支持试单、批量订单和长期稳定供货。"] }
];

const productDetails = {
  "HB-327": { moq: "1000", lead: "1~7天", cert: "CE, RoHS, FCC", price: "8.5元", spec: "材料 TPR+PC；8LED；尺寸 6.5*2CM；重量 42g；电池 2*CR2032。" },
  "HB-328": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "12元", spec: "材料 PC+TPR+ABS 挂钩；红光12LED，白光3SMD；9种模式；尺寸 10*10*3.5CM。" },
  "HB-329": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "干电池12元 / 锂电池21元", spec: "材料 PC+ABS；白光50LM，红光与橙光警示；尺寸 9*4.5CM。" },
  "HB-330": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "干电池14元 / 锂电池22元", spec: "材料 PC+TPR+ABS；黄光33LED，白光3SMD；5种模式；尺寸 10*11.5*2.8CM。" },
  "HB-331": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "干电池14元 / 锂电池22元", spec: "材料 PC+TPR+ABS；黄光30LED，白光3SMD；5种模式；尺寸 10.1*11.2*3.3CM。" },
  "HB-361": { moq: "500", lead: "5~25天", cert: "CE, RoHS, FCC", price: "55元", spec: "材料 PC+ABS；前面 SMD 96颗，侧面 SMD 48颗；白光高亮700LM，红蓝警示48LM。" },
  "HB-321": { moq: "1000", lead: "10~25天", cert: "CE, RoHS, FCC", price: "8.5元（不含电池）", spec: "材料 ABS；COB 3W，190LM；尺寸 19.5*6.5*2.5CM；重量 96g。" },
  "HB-325": { moq: "1000", lead: "7~25天", cert: "CE, RoHS, FCC", price: "22元", spec: "材料 TPR；COB 160LM + 1LED 60LM；尺寸 15.5*4*2.5CM；重量 123g。" },
  "HB-326": { moq: "1000", lead: "7~25天", cert: "CE, RoHS, FCC", price: "10元（不含电池）", spec: "材料 ABS；COB 180LM，3W；尺寸 13*6*3CM；重量 97g。" }
};

const translations = {
  en: {
    brandTag: "Industry & Trade Integrated Factory", navProducts: "Products", navFactory: "Factory", navCustom: "OEM/ODM", navQuality: "Quality", navContact: "Contact", quote: "Request Quote",
    eyebrow: "Portable Lighting & Safety Warning Solutions", heroTitle: "Manufacturing strength for global safety brands.", heroText: "A factory + trading integrated partner delivering LED warning lights, work lights, magnetic beacons and outdoor emergency lighting with OEM/ODM customization.", explore: "Explore Products", customize: "Customize Your Brand",
    proof1: "Factory-owned production", proof2: "Export service team", proof3: "OEM/ODM brand support", signatureEyebrow: "Signature Series", signatureTitle: "Designed for visibility. Built for real-world safety.", flagshipEyebrow: "Flagship Product Matrix", flagshipTitle: "One product line, multiple safety scenarios.", flagshipText: "Build your market range from compact warning lights to work lights, safety beacons and road emergency lamps.", prestige1: "modern production base", prestige2: "core manufacturing modules", prestige3: "trained production staff", prestige4: "quality & export compliance", metricFactory: "Modern factory", metricTeam: "Skilled employees", metricService: "Full customization", metricExport: "Export ready",
    floatingLabel: "Factory Verified", floatingText: "Injection molding · Tooling · Assembly · QC", strip1: "Global supply", strip2: "Stable quality", strip3: "Competitive pricing", strip4: "Bulk order support", strip5: "Fast response",
    productsEyebrow: "Main Product Lines", productsTitle: "Portable lighting for roadside, outdoor and emergency scenarios.", productsText: "From handheld work lights to LED road warning lights and magnetic safety beacons, our catalog supports retail packs, private label programs and project procurement.",
    factoryEyebrow: "Manufacturing Excellence", factoryTitle: "End-to-end capability, built for global brands.", factoryText: "We combine production ownership with export service: injection molding, precision tooling, assembly lines, packaging warehouse and dedicated QC are coordinated under an ISO 9001-oriented management system.",
    cap1: "Advanced injection molding", cap2: "Precision tooling workshop", cap3: "Standardized assembly", cap4: "Sustainable packaging", cap5: "Dedicated quality control", cap6: "Scalable production capacity",
    customEyebrow: "OEM & ODM Customization", customTitle: "From idea to branded product, one accountable team.",
    qualityEyebrow: "Quality & Service", qualityTitle: "ISO 9001-oriented quality management for stable export orders.", qualityText: "We build our daily production around ISO 9001 quality management principles, with documented checkpoints from incoming materials to final shipment.", qualityIso: "Process-based quality management", qualityStages: "Incoming, in-process and final checks", qualityAql: "Sampling inspection before shipment", qualityFlowEyebrow: "Quality Delivery Path", qualityFlowTitle: "From order review to shipment, every step leaves a check point.", qualityFlow1: "Material verification", qualityFlow2: "Assembly inspection", qualityFlow3: "Function testing", qualityFlow4: "Packing & shipment check", qualityFlowNote: "Clear inspection records and order-specific sampling help professional buyers reduce repeat-order risk.", certEyebrow: "Compliance Portfolio", certTitle: "Documented compliance support for professional buyers.", certText: "For importers, distributors and project buyers, we provide selected third-party documents for initial review. Available files include ISO 9001, CE/EMC, FCC and RoHS documents related to lighting product series.", certNote: "Documents are provided for buyer reference; applicable requirements may vary by model, market and order specification.", certIso: "Quality management system certificate for lighting production scope", certCe: "Electromagnetic compatibility documentation", certFcc: "Supplier's Declaration of Conformity documentation", certRohs: "Restriction of hazardous substances documentation", certOpen: "View PDF",
    showroomEyebrow: "Scenario Ready", showroomTitle: "Roadside safety · Cycling & outdoor · Emergency warning · Portable utility",
    contactEyebrow: "Start A Project", contactTitle: "Send your market, quantity and customization needs.", contactText: "We will prepare product recommendations, packaging options, lead time and quotation details for your target market.",
    formName: "Your name", formEmail: "Email / WhatsApp", formProduct: "Product interest", formMessage: "Quantity, logo, packaging, destination market", formSubmit: "Send Inquiry", footerText: "Integrated manufacturer & trading partner for portable lighting and safety warning products.", searchProducts: "Search model or product", filterAll: "All", filterWork: "Work Lights", filterWarning: "Warning Lights", filterBeacon: "Beacons", floatingInquiry: "Quick Inquiry", backTop: "Back to top", moreProducts: "More Products", lessProducts: "Show Less", customBadge: "OEM / ODM", customLogo: "Custom Logo", customLogoText: "Your brand on product", customPack: "Custom Packaging", customPackText: "Retail-ready box design", productCta: "View details", categoryWork: "Work light", categoryWarning: "Warning light", categoryBeacon: "Beacon", thanks: "Thank you. We will contact you soon."
  },
  zh: {
    brandTag: "工贸一体实力工厂", navProducts: "产品", navFactory: "工厂", navCustom: "定制", navQuality: "质量", navContact: "联系", quote: "获取报价",
    eyebrow: "便携照明与安全警示解决方案", heroTitle: "面向全球品牌的制造实力。", heroText: "我们是工厂与贸易一体化伙伴，提供 LED 警示灯、工作灯、磁吸警示灯、户外应急灯及 OEM/ODM 定制服务。", explore: "查看产品", customize: "定制品牌",
    proof1: "自有工厂生产", proof2: "外贸服务团队", proof3: "OEM/ODM品牌支持", signatureEyebrow: "核心系列", signatureTitle: "为高可见度而设计，为真实安全场景而制造。", flagshipEyebrow: "旗舰产品矩阵", flagshipTitle: "一条产品线，覆盖多种安全场景。", flagshipText: "从迷你警示灯、工作灯，到安全信标和道路应急灯，帮助客户快速搭建市场产品组合。", prestige1: "现代化生产基地", prestige2: "核心制造模块", prestige3: "专业生产人员", prestige4: "质量体系与出口认证支持", metricFactory: "现代化工厂", metricTeam: "专业团队", metricService: "全链路定制", metricExport: "全球交付",
    floatingLabel: "实力工厂", floatingText: "注塑 · 模具 · 装配 · 质检", strip1: "全球供应", strip2: "品质稳定", strip3: "价格有竞争力", strip4: "支持批量订单", strip5: "响应快速",
    productsEyebrow: "主营产品线", productsTitle: "适用于道路、户外、应急场景的便携照明。", productsText: "从手持工作灯到道路 LED 警示灯和磁吸安全信标，支持零售包装、贴牌项目和工程采购。",
    factoryEyebrow: "制造实力", factoryTitle: "端到端生产能力，服务全球品牌。", factoryText: "我们将生产制造与出口服务整合：注塑、精密模具、装配线、包装仓储和专职质检在 ISO9001 质量管理体系要求下协同运行。",
    cap1: "先进注塑", cap2: "精密模具车间", cap3: "标准化装配", cap4: "环保包装", cap5: "专职质量控制", cap6: "可扩展产能",
    customEyebrow: "OEM/ODM 定制", customTitle: "从想法到品牌成品，一个团队全程负责。",
    qualityEyebrow: "质量与服务", qualityTitle: "围绕 ISO9001 质量管理体系，保障稳定出口订单。", qualityText: "我们按照 ISO9001 质量管理体系思路建立日常生产流程，从来料、制程、功能测试到出货抽检均设置记录和检查节点。", qualityIso: "以过程管理保障品质一致", qualityStages: "来料、制程、成品分阶段检验", qualityAql: "出货前按订单要求抽检",
    qualityFlowEyebrow: "质量交付路径", qualityFlowTitle: "从订单评审到出货，每一步都有对应检查节点。", qualityFlow1: "来料核验", qualityFlow2: "装配巡检", qualityFlow3: "功能测试", qualityFlow4: "包装与出货检查", qualityFlowNote: "清晰的检验记录与按订单要求抽检，帮助专业买家降低复购风险。", showroomEyebrow: "多场景适配", showroomTitle: "道路安全 · 骑行户外 · 应急警示 · 便携工具",
    contactEyebrow: "开启项目", contactTitle: "告诉我们市场、数量和定制需求。", contactText: "我们会根据目标市场提供产品推荐、包装方案、交期和报价。",
    certEyebrow: "合规文件", certTitle: "面向专业买家的认证资料支持。", certText: "我们为进口商、经销商和项目采购提供部分第三方文件用于初步审核，包含照明产品系列相关的 ISO9001、CE/EMC、FCC、RoHS 文件。", certNote: "文件仅供买家参考，具体适用要求会因型号、市场和订单规格而不同。", certIso: "照明灯具生产范围的质量管理体系证书", certCe: "电磁兼容文件", certFcc: "FCC 符合性文件", certRohs: "有害物质限制文件", certOpen: "查看 PDF",
    formName: "您的姓名", formEmail: "邮箱 / WhatsApp", formProduct: "感兴趣的产品", formMessage: "数量、LOGO、包装、目标市场", formSubmit: "发送询盘", footerText: "便携照明与安全警示产品的工贸一体合作伙伴。", searchProducts: "搜索型号或产品", filterAll: "全部", filterWork: "工作灯", filterWarning: "警示灯", filterBeacon: "警示信标", floatingInquiry: "快速询盘", backTop: "返回顶部", moreProducts: "更多产品", lessProducts: "收起产品", customBadge: "OEM / ODM", customLogo: "定制 LOGO", customLogoText: "产品印制您的品牌", customPack: "定制包装", customPackText: "适合零售渠道的彩盒", productCta: "查看详情", categoryWork: "工作灯", categoryWarning: "警示灯", categoryBeacon: "信标", thanks: "感谢咨询，我们会尽快联系您。"
  },
  es: { navProducts:"Productos",navFactory:"Fábrica",navCustom:"OEM/ODM",navQuality:"Calidad",navContact:"Contacto",quote:"Cotizar",heroTitle:"Capacidad industrial para marcas globales.",heroText:"Fabricante y socio comercial integrado para luces LED de advertencia, trabajo, balizas magnéticas y emergencia.",explore:"Ver productos",customize:"Personalizar marca",productsTitle:"Iluminación portátil para carretera, exterior y emergencias.",factoryTitle:"Capacidad integral para marcas globales.",customTitle:"De la idea al producto de marca.",qualityTitle:"Control estricto desde materia prima hasta producto final.",contactTitle:"Envíenos mercado, cantidad y requisitos.",formSubmit:"Enviar consulta",thanks:"Gracias. Le contactaremos pronto." },
  fr: { navProducts:"Produits",navFactory:"Usine",navCustom:"OEM/ODM",navQuality:"Qualité",navContact:"Contact",quote:"Devis",heroTitle:"Puissance industrielle pour les marques mondiales.",heroText:"Partenaire usine + commerce pour feux LED d'avertissement, lampes de travail, balises magnétiques et éclairage d'urgence.",explore:"Voir les produits",customize:"Personnaliser",productsTitle:"Éclairage portable pour route, extérieur et urgence.",factoryTitle:"Capacité complète pour marques mondiales.",customTitle:"De l'idée au produit de marque.",qualityTitle:"Contrôle qualité strict du matériau au produit fini.",contactTitle:"Envoyez marché, quantité et besoins.",formSubmit:"Envoyer",thanks:"Merci. Nous vous contacterons bientôt." },
  de: { navProducts:"Produkte",navFactory:"Fabrik",navCustom:"OEM/ODM",navQuality:"Qualität",navContact:"Kontakt",quote:"Anfrage",heroTitle:"Fertigungskraft für globale Marken.",heroText:"Integrierter Hersteller und Handelspartner für LED-Warnleuchten, Arbeitsleuchten, Magnetbaken und Notbeleuchtung.",explore:"Produkte ansehen",customize:"Marke anpassen",productsTitle:"Portable Beleuchtung für Straße, Outdoor und Notfälle.",factoryTitle:"End-to-End-Fähigkeit für globale Marken.",customTitle:"Von der Idee zum Markenprodukt.",qualityTitle:"Strenge QC vom Rohmaterial bis zum Endprodukt.",contactTitle:"Senden Sie Markt, Menge und Anforderungen.",formSubmit:"Anfrage senden",thanks:"Danke. Wir melden uns bald." },
  ar: { navProducts:"المنتجات",navFactory:"المصنع",navCustom:"OEM/ODM",navQuality:"الجودة",navContact:"اتصال",quote:"طلب عرض",heroTitle:"قوة تصنيع للعلامات العالمية.",heroText:"شريك مصنع وتجارة متكامل لمصابيح التحذير والعمل والمنارات المغناطيسية وإضاءة الطوارئ.",explore:"استعرض المنتجات",customize:"خصص علامتك",productsTitle:"إضاءة محمولة للطرق والخارج والطوارئ.",factoryTitle:"قدرة شاملة للعلامات العالمية.",customTitle:"من الفكرة إلى منتج بعلامتك.",qualityTitle:"رقابة جودة صارمة من المواد إلى المنتج النهائي.",contactTitle:"أرسل السوق والكمية ومتطلباتك.",formSubmit:"إرسال",thanks:"شكراً، سنتواصل معك قريباً." },
  ru: { navProducts:"Продукты",navFactory:"Фабрика",navCustom:"OEM/ODM",navQuality:"Качество",navContact:"Контакты",quote:"Запрос цены",heroTitle:"Производственная сила для мировых брендов.",heroText:"Интегрированный производитель и торговый партнер для LED предупреждения, рабочих фонарей и аварийного освещения.",explore:"Смотреть продукты",customize:"Настроить бренд",productsTitle:"Портативное освещение для дорог, улицы и ЧС.",factoryTitle:"Полный цикл для мировых брендов.",customTitle:"От идеи до брендированного продукта.",qualityTitle:"Строгий контроль от сырья до готового изделия.",contactTitle:"Отправьте рынок, количество и требования.",formSubmit:"Отправить",thanks:"Спасибо. Мы скоро свяжемся." },
  pt: { navProducts:"Produtos",navFactory:"Fábrica",navCustom:"OEM/ODM",navQuality:"Qualidade",navContact:"Contato",quote:"Cotação",heroTitle:"Força industrial para marcas globais.",heroText:"Parceiro integrado de fábrica e comércio para luzes LED de aviso, trabalho, balizas e emergência.",explore:"Ver produtos",customize:"Personalizar marca",productsTitle:"Iluminação portátil para estrada, exterior e emergência.",factoryTitle:"Capacidade completa para marcas globais.",customTitle:"Da ideia ao produto de marca.",qualityTitle:"QC rigoroso da matéria-prima ao produto final.",contactTitle:"Envie mercado, quantidade e requisitos.",formSubmit:"Enviar",thanks:"Obrigado. Entraremos em contato." },
  ja: { navProducts:"製品",navFactory:"工場",navCustom:"OEM/ODM",navQuality:"品質",navContact:"連絡",quote:"見積依頼",heroTitle:"グローバルブランドを支える製造力。",heroText:"LED警告灯、作業灯、磁気ビーコン、非常灯を提供する工場・貿易一体型パートナーです。",explore:"製品を見る",customize:"ブランドカスタム",productsTitle:"道路・屋外・緊急用のポータブル照明。",factoryTitle:"グローバルブランド向けの一貫能力。",customTitle:"アイデアからブランド製品まで。",qualityTitle:"原材料から完成品まで厳格QC。",contactTitle:"市場、数量、要望を送信してください。",formSubmit:"問い合わせ",thanks:"ありがとうございます。折り返しご連絡します。" },
  ko: { navProducts:"제품",navFactory:"공장",navCustom:"OEM/ODM",navQuality:"품질",navContact:"문의",quote:"견적 요청",heroTitle:"글로벌 브랜드를 위한 제조 역량.",heroText:"LED 경고등, 작업등, 자석 비콘 및 비상 조명을 제공하는 공장+무역 통합 파트너입니다.",explore:"제품 보기",customize:"브랜드 맞춤",productsTitle:"도로, 야외, 비상 상황용 휴대 조명.",factoryTitle:"글로벌 브랜드를 위한 전 공정 역량.",customTitle:"아이디어에서 브랜드 제품까지.",qualityTitle:"원자재부터 완제품까지 엄격한 QC.",contactTitle:"시장, 수량, 요구사항을 보내주세요.",formSubmit:"문의 보내기",thanks:"감사합니다. 곧 연락드리겠습니다." },
  it: { navProducts:"Prodotti",navFactory:"Fabbrica",navCustom:"OEM/ODM",navQuality:"Qualità",navContact:"Contatto",quote:"Preventivo",heroTitle:"Forza produttiva per brand globali.",heroText:"Partner fabbrica+commercio per luci LED di avviso, da lavoro, beacon magnetici ed emergenza.",explore:"Vedi prodotti",customize:"Personalizza",productsTitle:"Illuminazione portatile per strada, outdoor ed emergenze.",factoryTitle:"Capacità completa per brand globali.",customTitle:"Dall'idea al prodotto brandizzato.",qualityTitle:"QC rigoroso dalle materie prime al prodotto finito.",contactTitle:"Invia mercato, quantità e richieste.",formSubmit:"Invia",thanks:"Grazie. Ti contatteremo presto." },
  nl: { navProducts:"Producten",navFactory:"Fabriek",navCustom:"OEM/ODM",navQuality:"Kwaliteit",navContact:"Contact",quote:"Offerte",heroTitle:"Productiekracht voor wereldmerken.",heroText:"Geïntegreerde fabriek en handelspartner voor LED-waarschuwingslampen, werklampen, bakens en noodverlichting.",explore:"Bekijk producten",customize:"Merk aanpassen",productsTitle:"Draagbare verlichting voor weg, buiten en noodsituaties.",factoryTitle:"End-to-end capaciteit voor wereldmerken.",customTitle:"Van idee tot merkproduct.",qualityTitle:"Strenge QC van grondstof tot eindproduct.",contactTitle:"Stuur markt, aantal en wensen.",formSubmit:"Verzenden",thanks:"Dank u. Wij nemen contact op." },
  tr: { navProducts:"Ürünler",navFactory:"Fabrika",navCustom:"OEM/ODM",navQuality:"Kalite",navContact:"İletişim",quote:"Teklif Al",heroTitle:"Global markalar için üretim gücü.",heroText:"LED uyarı, iş, manyetik ikaz ve acil durum lambaları için entegre üretici ve ticaret ortağı.",explore:"Ürünleri İncele",customize:"Markanı Özelleştir",productsTitle:"Yol, dış mekan ve acil durum için taşınabilir aydınlatma.",factoryTitle:"Global markalar için uçtan uca kapasite.",customTitle:"Fikirden markalı ürüne.",qualityTitle:"Hammaddeden bitmiş ürüne sıkı QC.",contactTitle:"Pazar, adet ve ihtiyaçlarınızı gönderin.",formSubmit:"Gönder",thanks:"Teşekkürler. Yakında iletişime geçeceğiz." },
  vi: { navProducts:"Sản phẩm",navFactory:"Nhà máy",navCustom:"OEM/ODM",navQuality:"Chất lượng",navContact:"Liên hệ",quote:"Báo giá",heroTitle:"Năng lực sản xuất cho thương hiệu toàn cầu.",heroText:"Đối tác nhà máy + thương mại cho đèn cảnh báo LED, đèn làm việc, đèn từ tính và đèn khẩn cấp.",explore:"Xem sản phẩm",customize:"Tùy chỉnh thương hiệu",productsTitle:"Đèn di động cho đường bộ, ngoài trời và khẩn cấp.",factoryTitle:"Năng lực trọn gói cho thương hiệu toàn cầu.",customTitle:"Từ ý tưởng đến sản phẩm thương hiệu.",qualityTitle:"QC nghiêm ngặt từ nguyên liệu đến thành phẩm.",contactTitle:"Gửi thị trường, số lượng và yêu cầu.",formSubmit:"Gửi yêu cầu",thanks:"Cảm ơn. Chúng tôi sẽ liên hệ sớm." },
  th: { navProducts:"สินค้า",navFactory:"โรงงาน",navCustom:"OEM/ODM",navQuality:"คุณภาพ",navContact:"ติดต่อ",quote:"ขอราคา",heroTitle:"พลังการผลิตสำหรับแบรนด์ทั่วโลก",heroText:"พันธมิตรโรงงานและการค้าสำหรับไฟเตือน LED ไฟทำงาน บีคอนแม่เหล็ก และไฟฉุกเฉิน",explore:"ดูสินค้า",customize:"ปรับแต่งแบรนด์",productsTitle:"ไฟพกพาสำหรับถนน กลางแจ้ง และฉุกเฉิน",factoryTitle:"ความสามารถครบวงจรสำหรับแบรนด์ทั่วโลก",customTitle:"จากไอเดียสู่สินค้ามีแบรนด์",qualityTitle:"QC เข้มงวดตั้งแต่วัตถุดิบถึงสินค้าสำเร็จ",contactTitle:"ส่งตลาด จำนวน และความต้องการ",formSubmit:"ส่งคำถาม",thanks:"ขอบคุณ เราจะติดต่อกลับเร็วๆ นี้" },
  id: { navProducts:"Produk",navFactory:"Pabrik",navCustom:"OEM/ODM",navQuality:"Kualitas",navContact:"Kontak",quote:"Minta Harga",heroTitle:"Kekuatan manufaktur untuk merek global.",heroText:"Mitra pabrik + perdagangan untuk lampu peringatan LED, lampu kerja, beacon magnetik, dan lampu darurat.",explore:"Lihat Produk",customize:"Kustom Merek",productsTitle:"Pencahayaan portabel untuk jalan, outdoor, dan darurat.",factoryTitle:"Kemampuan end-to-end untuk merek global.",customTitle:"Dari ide ke produk bermerek.",qualityTitle:"QC ketat dari bahan baku hingga produk jadi.",contactTitle:"Kirim pasar, jumlah, dan kebutuhan.",formSubmit:"Kirim",thanks:"Terima kasih. Kami akan menghubungi Anda." },
  hi: { navProducts:"उत्पाद",navFactory:"फैक्टरी",navCustom:"OEM/ODM",navQuality:"गुणवत्ता",navContact:"संपर्क",quote:"कोटेशन",heroTitle:"वैश्विक ब्रांडों के लिए निर्माण शक्ति।",heroText:"LED चेतावनी लाइट, वर्क लाइट, मैग्नेटिक बीकन और इमरजेंसी लाइटिंग के लिए फैक्टरी+ट्रेडिंग पार्टनर।",explore:"उत्पाद देखें",customize:"ब्रांड कस्टमाइज",productsTitle:"सड़क, आउटडोर और आपात स्थिति के लिए पोर्टेबल लाइटिंग।",factoryTitle:"वैश्विक ब्रांडों के लिए पूर्ण क्षमता।",customTitle:"विचार से ब्रांडेड उत्पाद तक।",qualityTitle:"कच्चे माल से तैयार उत्पाद तक सख्त QC।",contactTitle:"बाजार, मात्रा और आवश्यकताएँ भेजें।",formSubmit:"भेजें",thanks:"धन्यवाद। हम जल्द संपर्क करेंगे।" }
};

const fallback = translations.en;
let currentLang = "en";
let activeFilter = "all";
let searchTerm = "";
const inquiryEmails = ["19858215314@163.com", "cyanpeter@hotmail.com", "bshong@126.com"];

const recipientLabels = {
  en: {
    recipient1: "Sales Consultant 1 - 19858215314@163.com",
    recipient2: "Sales Consultant 2 - cyanpeter@hotmail.com",
    recipient3: "Sales Consultant 3 - bshong@126.com",
    recipientAll: "Send to all consultants",
    formNote: "Submitting will open your email app with the selected recipient and inquiry content.",
    sales1: "Sales Consultant 1",
    sales2: "Sales Consultant 2",
    sales3: "Sales Consultant 3"
  },
  zh: {
    recipient1: "销售顾问 1 - 19858215314@163.com",
    recipient2: "销售顾问 2 - cyanpeter@hotmail.com",
    recipient3: "销售顾问 3 - bshong@126.com",
    recipientAll: "发送给全部顾问",
    formNote: "提交后会打开您的邮箱应用，并自动带入所选收件人与询盘内容。",
    sales1: "业务员邮箱 1",
    sales2: "业务员邮箱 2",
    sales3: "业务员邮箱 3"
  }
};

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
    (recipientLabels[currentLang] && recipientLabels[currentLang][key]) ||
    fallback[key] ||
    recipientLabels.en[key] ||
    key;
}

function localized(item) {
  return item[currentLang] || item.en;
}

function productCategory(item) {
  const model = item.model;
  const workModels = new Set(["HB-321", "HB-325", "HB-326"]);
  const beaconModels = new Set(["HB-329", "HB-361"]);
  if (workModels.has(model)) return "work";
  if (beaconModels.has(model)) return "beacon";
  return "warning";
}

function productCategoryLabel(item) {
  const category = productCategory(item);
  if (category === "work") return t("categoryWork");
  if (category === "beacon") return t("categoryBeacon");
  return t("categoryWarning");
}

function renderStaticLists() {
  const grid = document.getElementById("productGrid");
  const showAll = grid?.classList.contains("show-all");
  const filtered = products.filter(item => {
    const [name, desc] = localized(item);
    const haystack = `${item.model} ${name} ${desc}`.toLowerCase();
    const okSearch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
    const okFilter = activeFilter === "all" || productCategory(item) === activeFilter;
    return okSearch && okFilter;
  });
  grid.innerHTML = filtered.map((item, index) => {
    const [name, desc] = localized(item);
    return `
      <button class="product-card reveal ${index >= 8 ? "is-extra" : ""}" type="button" data-model="${item.model}" aria-label="${item.model} ${name}">
        <div class="product-card-top">
          <div class="product-meta"><span>${item.model}</span><span>${productCategoryLabel(item)}</span></div>
          <img src="assets/${item.img}" alt="${name}" loading="${index < 4 ? "eager" : "lazy"}">
        </div>
        <div class="product-info"><h3>${name}</h3><p>${desc}</p><span class="product-action">${t("productCta")}</span></div>
      </button>`;
  }).join("");
  if (showAll) grid.classList.add("show-all");
  document.getElementById("toggleProducts").style.display = filtered.length > 8 ? "inline-flex" : "none";

  document.getElementById("processList").innerHTML = process.map((item) => {
    const [title, text] = localized(item);
    return `
      <article class="process-step">
        <b>${item.num}</b><div><h3>${title}</h3><p>${text}</p></div>
      </article>`;
  }).join("");

  document.getElementById("advantageGrid").innerHTML = advantages.map((item) => {
    const [title, text] = localized(item);
    return `
      <article class="advantage" data-mark="${item.num}">
        <b>${item.num}</b><h3>${title}</h3><p>${text}</p>
      </article>`;
  }).join("");

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => openProductModal(card.dataset.model));
  });
}

function renderProductOptions() {
  const select = document.getElementById("productInterest");
  const first = `<option value="" data-i18n="formProduct">${t("formProduct")}</option>`;
  select.innerHTML = first + products.map(item => {
    const [name] = localized(item);
    return `<option value="${item.model} - ${name}">${item.model} - ${name}</option>`;
  }).join("");
}

function renderSlides() {
  document.querySelectorAll(".slide").forEach((slide, index) => {
    const item = products[[0,3,4,5,1][index] || index];
    if (!item) return;
    const [name, desc] = localized(item);
    const img = slide.querySelector("img");
    img.src = `assets/${item.img}`;
    img.alt = name;
    slide.querySelector("h3").textContent = name;
    slide.querySelector("p").textContent = desc;
  });
}

function openProductModal(model) {
  const item = products.find(p => p.model === model);
  if (!item) return;
  const [name, desc] = localized(item);
  const detail = productDetails[model] || {};
  document.getElementById("modalImage").src = `assets/${item.img}`;
  document.getElementById("modalImage").alt = name;
  document.getElementById("modalModel").textContent = model;
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalDesc").textContent = desc;
  const labels = currentLang === "zh"
    ? { spec: "产品解析", moq: "起订量", lead: "交货期", cert: "认证", price: "报价方式" }
    : { spec: "Product details", moq: "MOQ", lead: "Lead time", cert: "Certificates", price: "Quotation" };
  const quoteValue = currentLang === "zh" ? "请联系业务获取最新报价" : "Contact sales for current quotation";
  document.getElementById("modalSpecs").innerHTML = [
    [labels.spec, detail.spec || "-"],
    [labels.moq, detail.moq || "-"],
    [labels.lead, detail.lead || "-"],
    [labels.cert, detail.cert || "-"],
    [labels.price, quoteValue]
  ].map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  document.getElementById("productModal").classList.add("open");
  document.getElementById("productModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-is-open");
  document.getElementById("modalClose").focus();
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("open");
  document.getElementById("productModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-is-open");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  window.currentThanks = t("thanks");
  localStorage.setItem("hb-lang", lang);
  renderStaticLists();
  renderProductOptions();
  renderSlides();
  const grid = document.getElementById("productGrid");
  document.getElementById("toggleProducts").textContent = grid.classList.contains("show-all") ? t("lessProducts") : t("moreProducts");
}

renderStaticLists();
const selector = document.getElementById("language");
selector.value = localStorage.getItem("hb-lang") || (navigator.language || "en").slice(0,2);
if (!translations[selector.value]) selector.value = "en";
applyLanguage(selector.value);
selector.addEventListener("change", e => applyLanguage(e.target.value));

document.getElementById("toggleProducts").addEventListener("click", () => {
  const grid = document.getElementById("productGrid");
  grid.classList.toggle("show-all");
  document.getElementById("toggleProducts").textContent = grid.classList.contains("show-all") ? t("lessProducts") : t("moreProducts");
});

document.getElementById("modalClose").addEventListener("click", closeProductModal);
document.getElementById("productModal").addEventListener("click", event => {
  if (event.target.id === "productModal") closeProductModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.getElementById("productModal").classList.contains("open")) {
    closeProductModal();
  }
});

document.getElementById("productSearch").addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderStaticLists();
});

document.querySelectorAll(".signature-products button, .flagship-board button").forEach(button => {
  button.addEventListener("click", () => openProductModal(button.dataset.model));
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    document.querySelectorAll(".chip").forEach(item => item.classList.toggle("active", item === chip));
    renderStaticLists();
  });
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.getElementById("scrollProgress").style.width = `${progress}%`;
});

document.getElementById("inquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const selected = document.getElementById("recipientSelect").value;
  const to = selected === "all" ? inquiryEmails.join(",") : selected;
  const name = document.getElementById("customerName").value.trim();
  const contact = document.getElementById("customerContact").value.trim();
  const product = document.getElementById("productInterest").value;
  const message = document.getElementById("messageText").value.trim();
  const subject = `Product Inquiry - ${product || "HENGBO"}`;
  const body = [
    "Hello HENGBO team,",
    "",
    "I would like to request more information / quotation.",
    "",
    `Name: ${name || "-"}`,
    `Contact: ${contact || "-"}`,
    `Product Interest: ${product || "-"}`,
    "",
    "Inquiry Details:",
    message || "-",
    "",
    "Please contact me with product recommendations, MOQ, packaging options, lead time and quotation.",
    "",
    "Best regards,"
  ].join("\\n");
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const slides = Array.from(document.querySelectorAll(".slide"));
const dotWrap = document.getElementById("carouselDots");
let slideIndex = 0;
let slideTimer;

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === slideIndex));
  dotWrap.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("active", i === slideIndex));
}

function startCarousel() {
  clearInterval(slideTimer);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  slideTimer = setInterval(() => showSlide(slideIndex + 1), 3600);
}

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Show product slide ${i + 1}`);
  dot.addEventListener("click", () => {
    showSlide(i);
    startCarousel();
  });
  dotWrap.appendChild(dot);
});
showSlide(0);
startCarousel();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});
