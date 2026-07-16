(function () {
  const STORAGE_KEY = "hb-lang";
  const SUPPORTED_LANGS = new Set(["en", "zh"]);

  const TEXT_COPY_ZH = {
    "Skip to main content": "跳到主要内容",
    "LED Warning Light Manufacturer": "LED 警示灯制造商",
    "Warning Light Solutions": "警示灯解决方案",
    "Products": "产品中心",
    "Home Products": "首页产品",
    "SEO Product Pages": "产品专题页",
    "Product Pages": "产品专题页",
    "Factory": "工厂实力",
    "Contact": "联系我们",
    "Request Quote": "获取报价",
    "Request Factory Quotation": "获取工厂报价",
    "Send Inquiry": "发送询盘",
    "View Warning Lights": "查看警示灯产品",
    "WhatsApp Sales": "WhatsApp 销售",
    "WhatsApp sales": "WhatsApp 销售",
    "Key Features": "核心特点",
    "Specifications": "产品参数",
    "Product details": "产品详情",
    "Applications": "应用场景",
    "Common buyer use cases": "常见采购场景",
    "OEM / ODM": "OEM / ODM",
    "Factory support for warning light orders": "警示灯订单工厂支持",
    "HENGBO supports product recommendation, sample communication, logo customization, color box design, carton packing and export order follow-up for importers, distributors and safety product buyers.": "恒博可为进口商、分销商和安全产品采购商提供选品建议、样品沟通、Logo 定制、彩盒设计、外箱包装和出口订单跟进服务。",
    "Buyer FAQ": "采购常见问题",
    "Buyer Questions": "采购常见问题",
    "Can I request samples before a bulk order?": "可以先申请样品再下大货吗？",
    "Yes. Send the target model, quantity and destination market, and HENGBO sales will confirm sample options and lead time.": "可以。请提供目标型号、数量和目的市场，恒博销售会确认打样方案和交期。",
    "Can you customize logo and packaging?": "可以定制 Logo 和包装吗？",
    "Yes. Logo printing, color box, instructions and export carton packing can be discussed for OEM/ODM orders.": "可以。Logo 印刷、彩盒、说明书和出口外箱包装都可按 OEM/ODM 需求沟通。",
    "What should I send for quotation?": "询价时需要提供哪些信息？",
    "Please send model, quantity, packaging requirement, destination market and target delivery time.": "请提供型号、数量、包装要求、目的市场和目标交期。",
    "Related Warning Lights": "相关警示灯",
    "Build a complete roadside safety product line": "组合完整的道路安全产品线",
    "Integrated manufacturer & trading partner for LED warning lights and portable safety lighting products.": "LED 警示灯与便携安全照明产品一体化制造及贸易合作伙伴。",
    "Integrated manufacturer & trading partner for warning lights.": "警示灯产品一体化制造及贸易合作伙伴。",
    "Contact Sales": "联系销售",
    "Procurement Support": "采购支持",
    "Request mixed quotation": "获取组合报价",
    "OEM wholesale support": "OEM 批发支持",
    "Roadside safety sourcing": "道路安全采购支持",
    "Warning Light SEO Catalog": "警示灯产品专题",
    "LED warning lights, magnetic beacons and roadside safety flares.": "LED 警示灯、磁吸警示灯与道路安全警示灯。",
    "These pages help importers, distributors and safety product buyers find HENGBO core warning light models through search engines and compare product applications quickly.": "这些页面帮助进口商、分销商和安全产品采购商通过搜索引擎快速找到恒博核心警示灯型号并快速比较应用场景。",
    "Back to home": "返回首页",
    "Privacy notice": "隐私说明",
    "HB-362 Battery LED Safety Flare": "HB-362 电池款 LED 安全警示灯",
    "HB-362 battery LED safety flare for roadside rescue kits, vehicle emergency packs and OEM warning light wholesale orders.": "HB-362 电池款 LED 安全警示灯，适用于道路救援套装、车辆应急包和 OEM 警示灯批发项目。",
    "HB-363C Rechargeable Road Warning Light": "HB-363C 充电款道路警示灯",
    "HB-363C rechargeable road warning light with USB charging for vehicle safety, roadside rescue and OEM warning light programs.": "HB-363C 充电款道路警示灯，支持 USB 充电，适用于车辆安全、道路救援和 OEM 警示灯项目。",
    "HB-363 Battery Type Road Warning Light": "HB-363 电池款道路警示灯",
    "HB-363 battery type road warning light for portable vehicle safety, roadside emergency kits and wholesale warning light projects.": "HB-363 电池款道路警示灯，适用于便携车辆安全、道路应急套装和警示灯批发项目。",
    "HB-329 Magnetic Safety Beacon": "HB-329 磁吸安全警示灯",
    "HB-329 magnetic safety beacon for vehicles, project sites and roadside warning light wholesale orders.": "HB-329 磁吸安全警示灯，适用于车辆、工程现场和道路警示灯批发订单。",
    "HB-331 Triangle Work Warning Light": "HB-331 三角作业警示灯",
    "HB-331 triangle warning light for temporary work areas, road lanes, construction zones and vehicle safety programs.": "HB-331 三角作业警示灯，适用于临时作业区、道路车道、施工区域和车辆安全项目。",
    "HB-361 Red Blue Emergency Beacon": "HB-361 红蓝应急警示灯",
    "HB-361 red blue emergency beacon for towing, rescue, roadside warning and outdoor emergency visibility.": "HB-361 红蓝应急警示灯，适用于拖车救援、道路警示和户外应急可视场景。",
    "Battery LED warning light": "电池款 LED 警示灯",
    "HB-362 is a compact battery-powered LED safety flare designed for roadside rescue, vehicle emergency kits and portable safety warning programs.": "HB-362 是一款紧凑型电池供电 LED 安全警示灯，适用于道路救援、车辆应急包和便携式安全警示项目。",
    "Why buyers choose HB-362": "采购商选择 HB-362 的原因",
    "3 x AAA battery design": "3 节 AAA 电池设计",
    "9 LED warning modes": "9 种 LED 警示模式",
    "Magnetic back for vehicle placement": "背部磁吸，便于吸附在车辆表面",
    "Water-resistant housing for rainy roadside use": "防泼水外壳，适合雨天路边使用",
    "Suitable for 3PCS and 6PCS emergency kits": "适合 3PCS 和 6PCS 应急套装",
    "Size": "尺寸",
    "Weight": "重量",
    "Material": "材质",
    "Battery": "电池",
    "Packing": "装箱",
    "OEM": "定制",
    "Logo, color box and kit packaging available": "支持 Logo、彩盒和套装包装定制",
    "Roadside rescue": "道路救援",
    "Vehicle emergency kits": "车辆应急套装",
    "Night road safety marking": "夜间道路安全警示",
    "Retail safety packs": "零售安全套装",
    "Need samples, OEM packaging or a mixed HB-362 / HB-363 quotation?": "需要样品、OEM 包装或 HB-362 / HB-363 组合报价吗？",
    "Tell HENGBO your quantity, destination market and whether you need 3PCS or 6PCS kits, rechargeable versions, battery versions or private label packaging. We can recommend the right model mix for your roadside safety program.": "请告诉恒博您的数量、目标市场，以及您需要 3PCS 还是 6PCS 套装、充电款、电池款或自有品牌包装。我们可以为您的道路安全项目推荐合适的型号组合。",
    "Questions about HB-362": "关于 HB-362 的问题",
    "Rechargeable road warning light": "充电款道路警示灯",
    "HB-363C is the rechargeable version of the round road warning light series, built for buyers who need reusable safety flares for vehicle and roadside markets.": "HB-363C 是圆形道路警示灯系列中的充电版本，适合需要可重复使用安全警示灯的车辆和道路市场采购商。",
    "Why buyers choose HB-363C": "采购商选择 HB-363C 的原因",
    "USB rechargeable version": "USB 充电版本",
    "Orange protective housing": "橙色防护外壳",
    "Magnetic back for quick placement": "背部磁吸，便于快速固定",
    "Multi-mode warning visibility": "多模式警示可视性",
    "Good fit for OEM roadside safety kits": "适合 OEM 道路安全套装",
    "Version": "版本",
    "Rechargeable type": "充电款",
    "Housing": "外壳",
    "Mounting": "安装方式",
    "Use": "用途",
    "Vehicle emergency and roadside safety": "车辆应急与道路安全",
    "MOQ": "起订量",
    "Contact sales": "联系销售",
    "Logo and retail packaging available": "支持 Logo 和零售包装定制",
    "Vehicle rescue kits": "车辆救援套装",
    "Roadside safety programs": "道路安全项目",
    "Wholesale warning light orders": "警示灯批发订单",
    "Private label emergency packs": "自有品牌应急套装",
    "Need samples, OEM packaging or a mixed rechargeable warning light quotation?": "需要样品、OEM 包装或充电款警示灯组合报价吗？",
    "Tell HENGBO your quantity, destination market and whether you need rechargeable models only or a mixed HB-362 / HB-363 program. We can recommend the right product mix and packaging plan for your buyers.": "请告诉恒博您的数量、目标市场，以及您只需要充电款，还是需要 HB-362 / HB-363 的组合方案。我们可以为您的客户推荐合适的产品组合与包装方案。",
    "Questions about HB-363C": "关于 HB-363C 的问题",
    "Battery road warning light": "电池款道路警示灯",
    "HB-363 is the battery version of the round road warning light range, made for portable safety use and easy retail kit packing.": "HB-363 是圆形道路警示灯系列中的电池版本，适用于便携式安全使用和零售套装装箱。",
    "Why buyers choose HB-363": "采购商选择 HB-363 的原因",
    "Battery powered warning light": "电池供电警示灯",
    "Magnetic back": "背部磁吸",
    "Portable orange safety housing": "便携式橙色安全外壳",
    "Suitable for vehicle emergency packs": "适合车辆应急套装",
    "Can be quoted together with rechargeable version": "可与充电款一起组合报价",
    "Battery type": "电池款",
    "Roadside emergency and vehicle kits": "道路应急与车辆套装",
    "Logo and color box available": "支持 Logo 和彩盒定制",
    "Roadside emergency kits": "道路应急套装",
    "Vehicle safety packs": "车辆安全套装",
    "Portable safety marking": "便携式安全警示",
    "Retail and wholesale programs": "零售与批发项目",
    "Need samples, OEM packaging or a mixed battery warning light quotation?": "需要样品、OEM 包装或电池款警示灯组合报价吗？",
    "Tell HENGBO your quantity, destination market and whether you want HB-363 only or a mixed battery plus rechargeable program. We can recommend the right packing plan and model combination for your market.": "请告诉恒博您的数量、目标市场，以及您只要 HB-363，还是需要电池款加充电款的组合方案。我们可以为您的市场推荐合适的包装方案和型号搭配。",
    "Questions about HB-363": "关于 HB-363 的问题",
    "Magnetic safety beacon": "磁吸安全警示灯",
    "HB-329 is a magnetic safety beacon for vehicle visibility, project sites and emergency warning scenes where fast placement matters.": "HB-329 是一款磁吸安全警示灯，适用于车辆可视警示、工程现场和需要快速布设的应急警示场景。",
    "Why buyers choose HB-329": "采购商选择 HB-329 的原因",
    "Magnetic mounting for vehicle panels": "磁吸安装，适合车辆表面",
    "White, red and orange warning light functions": "具备白光、红光和橙光警示功能",
    "Compact 9 x 4.5 cm body": "紧凑 9 x 4.5 cm 机身",
    "Battery and rechargeable quotation options": "支持电池款和充电款组合报价",
    "Suitable for fleet and project safety supply": "适合车队和工程安全供货",
    "Light": "灯光",
    "White 50LM, red and orange warning light": "白光 50LM，红光和橙光警示",
    "Certificates": "认证",
    "Vehicle warning": "车辆警示",
    "Roadside work zones": "路边作业区域",
    "Construction project safety": "工程施工安全",
    "Fleet emergency kits": "车队应急套装",
    "Questions about HB-329": "关于 HB-329 的问题",
    "Triangle road warning light": "三角道路警示灯",
    "HB-331 is a portable triangle warning light for work areas, temporary lanes and roadside emergency visibility.": "HB-331 是一款便携式三角警示灯，适用于作业区域、临时车道和路边应急可视警示。",
    "Why buyers choose HB-331": "采购商选择 HB-331 的原因",
    "Triangle safety shape for quick recognition": "三角安全外形，便于快速识别",
    "Yellow warning LEDs with white SMD light": "黄色警示 LED 搭配白光 SMD 照明",
    "5 selectable modes": "5 种可选模式",
    "Portable body for temporary warning areas": "便携机身，适合临时警示区域",
    "Battery and rechargeable series options": "提供电池款和充电款系列选择",
    "30 yellow LEDs + 3 white SMD": "30 颗黄色 LED + 3 颗白光 SMD",
    "Modes": "模式",
    "5 modes": "5 种模式",
    "Road work warning": "道路作业警示",
    "Temporary lane marking": "临时车道标识",
    "Construction safety": "施工安全",
    "Vehicle breakdown visibility": "车辆故障可视警示",
    "Questions about HB-331": "关于 HB-331 的问题",
    "Red blue emergency beacon": "红蓝应急警示灯",
    "HB-361 is a red blue emergency beacon for towing, rescue, roadside warning and outdoor emergency visibility.": "HB-361 是一款红蓝应急警示灯，适用于拖车、救援、道路警示和户外应急可视场景。",
    "HB-361 combines work lighting and red-blue warning visibility for rescue teams, towing scenes and outdoor emergency use.": "HB-361 结合了作业照明与红蓝警示可视功能，适用于救援团队、拖车现场和户外应急使用。",
    "Why buyers choose HB-361": "采购商选择 HB-361 的原因",
    "Red and blue emergency warning lights": "红蓝应急警示灯光",
    "High brightness white work light": "高亮白光作业灯",
    "Front and side SMD layout": "前后侧面 SMD 灯珠布局",
    "Bracket support for portable use": "配支架，便于便携使用",
    "Suitable for rescue and towing supply programs": "适合救援与拖车供货项目",
    "Front SMD 96PCS, side SMD 48PCS": "正面 SMD 96PCS，侧面 SMD 48PCS",
    "White high 700LM, red-blue warning 48LM": "白光高亮 700LM，红蓝警示 48LM",
    "Project packaging available": "支持项目包装",
    "Towing rescue": "拖车救援",
    "Emergency response": "应急响应",
    "Outdoor roadside warning": "户外道路警示",
    "Field work visibility": "现场作业可视照明",
    "Questions about HB-361": "关于 HB-361 的问题",
    "SEO Solution Pages": "专题解决方案页面",
    "Warning light sourcing pages for overseas buyers.": "面向海外采购商的警示灯采购专题页。",
    "These pages explain HENGBO manufacturing, roadside use cases and OEM wholesale support for LED warning light buyers.": "这些页面介绍恒博的制造能力、道路应用场景以及针对 LED 警示灯采购商的 OEM 批发支持。",
    "Warning light manufacturer and export partner.": "警示灯制造与出口合作伙伴。",
    "Factory Supply": "工厂供货",
    "Roadside Safety": "道路安全",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "LED warning light manufacturer for wholesale and OEM buyers.": "面向批发和 OEM 采购商的 LED 警示灯制造商。",
    "HENGBO manufactures LED warning lights, magnetic safety beacons and roadside emergency lights for importers, distributors and OEM buyers.": "恒博为进口商、分销商和 OEM 采购商生产 LED 警示灯、磁吸安全警示灯和道路应急警示灯。",
    "Roadside emergency warning lights for vehicle safety kits.": "适用于车辆安全套装的道路应急警示灯。",
    "Roadside emergency warning lights for vehicle safety kits, towing rescue, wet roads and night visibility. HENGBO supplies LED safety flares and beacons for wholesale buyers.": "适用于车辆安全套装、拖车救援、湿滑道路和夜间可视场景的道路应急警示灯。恒博为批发采购商供应 LED 安全警示灯和信标灯。",
    "OEM safety warning lights for private label and wholesale programs.": "面向自有品牌和批发项目的 OEM 安全警示灯。",
    "OEM safety warning light wholesale for private label importers, distributors and retail programs. HENGBO supports logo, packaging and product recommendation.": "面向自有品牌进口商、分销商和零售项目的 OEM 安全警示灯批发方案。恒博支持 Logo、包装和产品选型建议。",
    "Factory Supply": "工厂供货",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "Roadside Safety": "道路安全",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "Factory Supply": "工厂供货",
    "Core warning light range": "核心警示灯系列",
    "Battery LED safety flares for roadside rescue kits": "适用于道路救援套装的电池款 LED 安全警示灯",
    "Rechargeable and battery type road warning lights": "充电款和电池款道路警示灯",
    "Magnetic safety beacons for vehicles and project sites": "适用于车辆和工程现场的磁吸安全警示灯",
    "Triangle warning lights for temporary work zones": "适用于临时作业区域的三角警示灯",
    "Red-blue emergency beacons for towing and rescue scenes": "适用于拖车和救援场景的红蓝应急警示灯",
    "Factory and export support": "工厂与出口支持",
    "OEM logo and color box packaging": "OEM Logo 和彩盒包装",
    "Sample communication for new models": "新型号样品沟通",
    "Carton packing and order documentation": "外箱包装与订单文件支持",
    "CE, RoHS and FCC related documents for selected models": "指定型号可提供 CE、RoHS 和 FCC 相关资料",
    "Quotation support for trial and bulk orders": "支持试单和批量订单报价",
    "Buyer markets": "采购客户类型",
    "Importers building private-label safety ranges": "打造自有品牌安全产品线的进口商",
    "Distributors supplying vehicle emergency kits": "供应车辆应急套装的分销商",
    "Retail pack buyers needing 3PCS or 6PCS sets": "需要 3PCS 或 6PCS 零售套装的采购商",
    "Project buyers sourcing construction and fleet safety lights": "采购施工和车队安全灯具的项目客户",
    "Common questions before sourcing": "采购前常见问题",
    "Can HENGBO support OEM warning light orders?": "恒博可以支持 OEM 警示灯订单吗？",
    "Yes. Logo, color box, instruction sheet and export packing can be discussed for suitable order quantities.": "可以。对于合适的订单数量，可沟通 Logo、彩盒、说明书和出口包装。",
    "Which models are suitable for a first inquiry?": "首次询盘适合从哪些型号开始？",
    "HB-362, HB-363C, HB-329, HB-331 and HB-361 are good starting models for roadside safety and emergency warning ranges.": "HB-362、HB-363C、HB-329、HB-331 和 HB-361 都是道路安全与应急警示系列的合适起询型号。",
    "Can I request samples?": "可以申请样品吗？",
    "Yes. Send target models, quantity, destination market and packaging needs to confirm sample options.": "可以。请发送目标型号、数量、目的市场和包装需求，以确认样品方案。",
    "Core Models": "核心型号",
    "Related LED warning lights": "相关 LED 警示灯",
    "HB-362 LED Safety Flare": "HB-362 电池款 LED 安全警示灯",
    "HB-363C Rechargeable Warning Light": "HB-363C 充电款警示灯",
    "HB-363 Battery Type Warning Light": "HB-363 电池款警示灯",
    "HB-331 Triangle Warning Light": "HB-331 三角警示灯",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "Roadside Safety": "道路安全",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "OEM / ODM Supply": "OEM / ODM 供货",
    "Roadside emergency warning lights for vehicle safety kits.": "适用于车辆安全套装的道路应急警示灯。",
    "For vehicle breakdowns, towing rescue and night road safety, buyers need visible warning lights that are easy to place, easy to package and suitable for repeated wholesale supply.": "针对车辆故障、拖车救援和夜间道路安全场景，采购商需要醒目、易布设、易包装并适合持续批发供货的警示灯。",
    "Recommended roadside models": "推荐道路安全型号",
    "HB-362 battery LED safety flare for 3PCS and 6PCS kits": "HB-362 电池款 LED 安全警示灯，适合 3PCS 和 6PCS 套装",
    "HB-363C rechargeable road warning light for reusable safety programs": "HB-363C 充电款道路警示灯，适合可重复使用的安全项目",
    "HB-363 battery type road warning light for portable emergency packs": "HB-363 电池款道路警示灯，适合便携应急套装",
    "HB-329 magnetic safety beacon for vehicle-side visibility": "HB-329 磁吸安全警示灯，适合车辆侧面可视警示",
    "Application scenes": "应用场景",
    "Night vehicle breakdown warning": "夜间车辆故障警示",
    "Wet road and low-visibility safety marking": "湿滑道路与低能见度安全标识",
    "Towing and rescue service vehicles": "拖车与救援服务车辆",
    "Retail roadside emergency kits": "零售道路应急套装",
    "Fleet and project safety equipment": "车队与项目安全装备",
    "What buyers can customize": "可定制内容",
    "Logo printing on product or packaging": "产品或包装上的 Logo 印刷",
    "Color box and kit layout": "彩盒和套装排版",
    "Instruction sheet and warning label content": "说明书和警示标签内容",
    "Carton packing for wholesale shipment": "批发出货外箱包装",
    "Which warning light is best for vehicle emergency kits?": "哪种警示灯更适合车辆应急套装？",
    "HB-362 and HB-363 series are strong options because they are compact, orange, magnetic and easy to pack into safety kits.": "HB-362 和 HB-363 系列都是很合适的选择，因为它们体积紧凑、橙色醒目、带磁吸且便于装入安全套装。",
    "Do you have rechargeable and battery versions?": "是否有充电款和电池款？",
    "Yes. HB-363C is rechargeable, while HB-362 and HB-363 are battery-powered options.": "有。HB-363C 是充电款，而 HB-362 和 HB-363 是电池供电款。",
    "Can these products be sold as kits?": "这些产品可以做成套装销售吗？",
    "Yes. HENGBO can discuss 3PCS, 6PCS and retail-ready package ideas based on model and order quantity.": "可以。恒博可根据型号和订单数量沟通 3PCS、6PCS 以及适合零售的包装方案。",
    "If you sell warning lights under your own brand, HENGBO can help organize model selection, sample confirmation, logo options, color box packaging and export order follow-up.": "如果您以自有品牌销售警示灯，恒博可以协助完成型号筛选、样品确认、Logo 方案、彩盒包装和出口订单跟进。",
    "OEM support scope": "OEM 支持范围",
    "Logo printing and product label discussion": "Logo 印刷和产品标签方案",
    "Color box and instruction sheet support": "彩盒和说明书支持",
    "Retail-ready warning light kit packaging": "适合零售的警示灯套装包装",
    "Export carton packing and shipment details": "出口外箱包装和出货细节",
    "Long-term supply planning for repeated orders": "面向重复订单的长期供货规划",
    "Suitable product categories": "适配产品类别",
    "LED safety flares and magnetic road warning lights": "LED 安全警示灯和磁吸道路警示灯",
    "Magnetic safety beacons for vehicles and job sites": "适用于车辆和作业现场的磁吸安全警示灯",
    "Triangle road work warning lamps": "三角道路作业警示灯",
    "Red-blue rescue and emergency beacons": "红蓝救援与应急警示灯",
    "Portable work lights as add-on catalog items": "可作为目录补充款的便携工作灯",
    "How to request quotation": "如何发起询价",
    "Send target model or product photo": "发送目标型号或产品图片",
    "Confirm quantity and destination market": "确认数量和目标市场",
    "Share logo and packaging requirements": "说明 Logo 和包装要求",
    "Tell us expected lead time and certificate needs": "告知预期交期和认证需求",
    "Can you make products with my brand?": "可以做我的品牌产品吗？",
    "For suitable order quantities, logo and packaging customization can be discussed.": "对于合适的订单数量，可以沟通 Logo 和包装定制。",
    "Can I start with a trial order?": "可以先从试单开始吗？",
    "Trial orders and sample packs can be discussed depending on model and packaging requirement.": "可根据型号和包装要求沟通试单和样品套装。",
    "What information should I send first?": "我应该先提供哪些信息？",
    "Send model, quantity, market, logo or packaging needs and target delivery time.": "请提供型号、数量、市场、Logo 或包装需求以及目标交期。",
    "Mini LED warning light": "迷你 LED 警示灯",
    "HB-327 Mini LED Warning Light": "HB-327 迷你 LED 警示灯",
    "HB-327 is a compact mini LED warning light for buyers who need a small, lightweight safety light for vehicles, retail packs and portable roadside warning use.": "HB-327 是一款紧凑型迷你 LED 警示灯，适合车辆安全包、零售套装和便携道路警示使用。",
    "HB-327 mini LED warning light for compact vehicle safety kits, roadside visibility and promotional warning light programs.": "HB-327 迷你 LED 警示灯，适合紧凑车辆安全套装、道路可视警示和促销型安全产品项目。",
    "Why buyers choose HB-327": "采购商选择 HB-327 的原因",
    "Compact 6.5 x 2 cm mini body": "6.5 x 2 cm 迷你紧凑机身",
    "8 LED warning light source": "8 颗 LED 警示光源",
    "Lightweight 42 g design": "42 g 轻量化设计",
    "Powered by 2 x CR2032 batteries": "使用 2 节 CR2032 电池供电",
    "Good fit for small vehicle safety kits": "适合小型车辆安全套装",
    "6.5 x 2 cm": "6.5 x 2 cm",
    "42 g": "42 g",
    "Light source": "光源",
    "CE, RoHS, FCC": "CE、RoHS、FCC",
    "Vehicle safety kits": "车辆安全套装",
    "Compact roadside warning": "紧凑道路警示",
    "Retail emergency packs": "零售应急包",
    "Promotional safety programs": "促销安全产品项目",
    "Questions about HB-327": "关于 HB-327 的问题",
    "LED road warning light": "LED 道路警示灯",
    "HB-328 LED Road Warning Light": "HB-328 LED 道路警示灯",
    "Best Seller · LED Road Warning Light": "成熟爆款 · LED 道路警示灯",
    "HB-328 mature bestseller for roadside safety programs.": "HB-328 成熟爆款，适合道路安全项目。",
    "HB-328 is HENGBO's proven multi-mode LED road warning light with red warning functions and white SMD lighting for vehicle emergency kits, roadside safety and repeat wholesale programs.": "HB-328 是恒博成熟的多模式 LED 道路警示灯，带红色警示和白光 SMD 照明，适合车辆应急包、道路安全和长期批发补货。",
    "Request Factory Quotation": "获取工厂报价",
    "WhatsApp Sales": "WhatsApp 销售",
    "Key Features": "核心特点",
    "Specifications": "产品参数",
    "Product details": "产品详情",
    "Applications": "应用场景",
    "Common buyer use cases": "常见采购场景",
    "Factory support for warning light orders": "警示灯订单工厂支持",
    "HB-328 is a multi-mode LED road warning light with red warning functions and white SMD lighting for vehicle emergency kits, roadside safety and wholesale programs.": "HB-328 是一款多模式 LED 道路警示灯，带红色警示和白光 SMD 照明，适合车辆应急包、道路安全和批发项目。",
    "HB-328 9-mode LED road warning light for vehicle emergency kits, roadside safety and OEM wholesale programs.": "HB-328 9 模式 LED 道路警示灯，适合车辆应急包、道路安全和 OEM 批发项目。",
    "Why buyers choose HB-328": "采购商选择 HB-328 的原因",
    "9 selectable warning modes": "9 种可选警示模式",
    "Red 12 LED warning with white 3 SMD light": "红光 12 LED 警示，搭配白光 3 SMD",
    "Hook and portable body for flexible placement": "挂钩与便携机身，方便灵活摆放",
    "Good visibility for night roadside use": "适合夜间道路高可见度警示",
    "Suitable for OEM safety kit packaging and repeat wholesale orders": "适合 OEM 安全套装包装和长期批发补货",
    "HB-328C rechargeable version can be discussed for selected projects": "部分项目可进一步沟通 HB-328C 充电款",
    "Suitable for OEM safety kit packaging": "适合 OEM 安全套装包装",
    "10 x 10 x 3.5 cm": "10 x 10 x 3.5 cm",
    "120 g": "120 g",
    "PC + TPR + ABS hook": "PC + TPR + ABS 挂钩",
    "Red 12 LED, white 3 SMD": "红光 12 LED，白光 3 SMD",
    "3 x AAA, not included": "3 节 AAA 电池，不含电池",
    "Vehicle breakdown warning": "车辆故障警示",
    "Night safety marking": "夜间安全标识",
    "Questions about HB-328": "关于 HB-328 的问题",
    "Triangle roadside warning lamp": "三角道路警示灯",
    "HB-330 Triangle Roadside Warning Lamp": "HB-330 三角道路警示灯",
    "HB-330 is a triangle roadside warning lamp for temporary road safety, work areas, vehicle emergency scenes and retail safety product lines.": "HB-330 是一款三角道路警示灯，适合临时道路安全、作业区域、车辆应急场景和零售安全产品线。",
    "HB-330 triangle roadside warning lamp for temporary road work, vehicle safety and emergency warning programs.": "HB-330 三角道路警示灯，适合临时道路作业、车辆安全和应急警示项目。",
    "HB-330 triangle roadside warning lamp for vehicle safety kits.": "HB-330 三角道路警示灯，适合车辆安全套装。",
    "HB-330 is a compact orange triangle warning light for roadside emergency packs, temporary work areas and retail safety programs. Buyers can quote the Type-C rechargeable version or the 3 x AAA battery version according to market preference.": "HB-330 是一款橙色紧凑型三角警示灯，适合道路应急包、临时作业区和零售安全项目。买家可根据市场需求选择 Type-C 充电款或 3 节 AAA 电池款。",
    "Why buyers choose HB-330": "采购商选择 HB-330 的原因",
    "Triangle warning body for clear road visibility": "三角警示外形，道路识别更清晰",
    "Yellow 33 LED warning with white 3 SMD light": "黄光 33 LED 警示，搭配白光 3 SMD",
    "5 warning modes for temporary safety scenes": "5 种警示模式，适合临时安全场景",
    "Portable body for quick placement": "便携机身，方便快速摆放",
    "10 x 11.5 x 2.8 cm": "10 x 11.5 x 2.8 cm",
    "Yellow 33 LED, white 3 SMD": "黄光 33 LED，白光 3 SMD",
    "33 yellow warning LEDs plus 3 white SMD work lights": "33 颗黄色警示 LED，搭配 3 颗白光 SMD 工作灯",
    "5 modes for white light, front flash, side flash, double flash and running light": "5 种模式：白光、前闪、侧闪、双闪和流水灯",
    "HB-330 rechargeable vs battery type": "HB-330 充电款与电池款对比",
    "Model naming": "型号命名",
    "HB-330 = battery version / HB-330C = Type-C rechargeable version.": "HB-330 = 电池款 / HB-330C = Type-C 充电款。",
    "3 x AAA dry cells, suitable for emergency kits and backup inventory.": "使用 3 节 AAA 干电池，适合应急套装和备货库存。",
    "White box, 100 PCS/carton, 55.5 x 46 x 30 cm": "白盒包装，100 PCS/箱，外箱尺寸 55.5 x 46 x 30 cm",
    "33 yellow LEDs + 3 white SMD": "33 颗黄色 LED + 3 颗白光 SMD",
    "100 PCS, sample and mixed quotation can be discussed": "100 PCS，可沟通样品和混合型号报价",
    "5 warning modes": "5 种警示模式",
    "Temporary road lanes": "临时道路车道",
    "Construction warning": "施工警示",
    "Vehicle emergency packs": "车辆应急包",
    "Project safety supply": "项目安全供货",
    "Need samples, OEM packaging or a mixed warning light quotation?": "需要样品、OEM 包装或警示灯组合报价吗？",
    "Tell HENGBO your quantity, destination market and whether you need battery versions, rechargeable versions, retail kits or private label packaging. We can recommend a practical product mix for your warning light program.": "请告诉恒博您的数量、目标市场，以及是否需要电池款、充电款、零售套装或自有品牌包装。我们可以为您的警示灯项目推荐合适的产品组合。",
    "Questions about HB-330": "关于 HB-330 的问题",
    "Carton packing": "外箱包装",
    "1–7 days": "1–7 天",
    "HB-331 triangle warning light with rechargeable and battery options.": "HB-331 三角警示灯，提供充电款和电池款选择。",
    "HB-331 is built for temporary work areas, road lanes, construction warning and vehicle breakdown visibility. It gives buyers a clear choice between Type-C rechargeable supply and 3 x AAA battery supply.": "HB-331 适用于临时作业区、道路车道、施工警示和车辆故障可视场景。买家可以在 Type-C 充电款和 3 节 AAA 电池款之间清晰选择。",
    "Why buyers choose HB-331": "采购商选择 HB-331 的原因",
    "30 yellow warning LEDs plus 3 white SMD work lights": "30 颗黄色警示 LED，搭配 3 颗白光 SMD 工作灯",
    "5 selectable modes for emergency and work-light use": "5 种可选模式，适合应急警示和工作照明",
    "HB-331 rechargeable vs battery type": "HB-331 充电款与电池款对比",
    "HB-331 = battery version / HB-331C = Type-C rechargeable version.": "HB-331 = 电池款 / HB-331C = Type-C 充电款。",
    "3 x AAA dry cell design for portable warning kits and backup stock.": "3 节 AAA 干电池设计，适合便携警示套装和备货库存。",
    "11.2 x 10.1 x 3.3 cm": "11.2 x 10.1 x 3.3 cm",
    "119 x 37 x 105 mm / 11.9 x 3.7 x 10.5 cm": "119 x 37 x 105 mm / 11.9 x 3.7 x 10.5 cm",
    "116 x 37 x 105 mm / 11.6 x 3.7 x 10.5 cm": "116 x 37 x 105 mm / 11.6 x 3.7 x 10.5 cm",
    "Use HB-331 when buyers need a clear triangle work-zone warning light.": "当买家需要清晰的三角作业区警示灯时，可优先选择 HB-331。",
    "Road Flare Wholesale": "道路警示灯批发",
    "LED road flare wholesale for roadside safety kits.": "面向道路安全套装的 LED 道路警示灯批发。",
    "Wholesale LED road flares for roadside safety kits, vehicle emergency packs and OEM warning light programs from HENGBO.": "恒博供应适合道路安全套装、车辆应急包和 OEM 警示灯项目的 LED 道路警示灯批发方案。",
    "Vehicle Emergency Safety": "车辆应急安全",
    "Vehicle emergency warning light wholesale for safety kit buyers.": "面向安全套装采购商的车辆应急警示灯批发。",
    "Vehicle emergency warning light wholesale for car safety kits, towing rescue, roadside breakdowns and OEM packaging programs.": "车辆应急警示灯批发，适合汽车安全套装、拖车救援、道路故障和 OEM 包装项目。",
    "Magnetic Beacon Supply": "磁吸信标供应",
    "Magnetic safety beacon manufacturer for vehicle and roadside warning.": "面向车辆和道路警示的磁吸安全信标制造商。",
    "Magnetic safety beacon manufacturer for vehicle warning, roadside rescue, project sites and OEM wholesale safety light orders.": "磁吸安全信标制造商，适合车辆警示、道路救援、工程现场和 OEM 批发安全灯订单。",
    "HENGBO helps importers, distributors and retail pack buyers source LED road flares, magnetic warning lights and portable safety beacons for vehicle emergency markets.": "恒博帮助进口商、分销商和零售套装采购商，为车辆应急市场采购 LED 道路警示灯、磁吸警示灯和便携安全信标。",
    "Procurement Focus": "采购重点",
    "Wholesale road flare programs": "道路警示灯批发项目",
    "Battery LED safety flares for vehicle kits": "适合车辆套装的电池款 LED 安全警示灯",
    "Rechargeable and battery warning light options": "充电款和电池款警示灯选择",
    "3PCS and 6PCS retail kit discussion": "支持 3PCS 和 6PCS 零售套装沟通",
    "Orange high-visibility safety housing": "橙色高可见度安全外壳",
    "OEM packaging support for distributors": "为分销商提供 OEM 包装支持",
    "Best-fit buyer channels": "适合的买家渠道",
    "Vehicle emergency kit importers": "车辆应急套装进口商",
    "Roadside assistance product distributors": "道路救援产品分销商",
    "Retail safety pack buyers": "零售安全套装采购商",
    "Car accessory wholesalers": "汽车配件批发商",
    "Project safety equipment suppliers": "项目安全设备供应商",
    "Inquiry information to prepare": "询价前需要准备的信息",
    "Target model or product photo": "目标型号或产品图片",
    "Order quantity and destination market": "订单数量和目的市场",
    "Battery or rechargeable preference": "电池款或充电款偏好",
    "Logo and color box requirements": "Logo 和彩盒要求",
    "Expected delivery time": "预期交期",
    "Need a mixed LED road flare quotation?": "需要 LED 道路警示灯组合报价吗？",
    "Send your quantity, target market and packaging plan. HENGBO can recommend HB-362, HB-363, HB-363C and related warning light combinations for your sales channel.": "请发送数量、目标市场和包装计划。恒博可以根据您的销售渠道推荐 HB-362、HB-363、HB-363C 及相关警示灯组合。",
    "LED road flare wholesale FAQ": "LED 道路警示灯批发常见问题",
    "Which models are suitable for road flare wholesale?": "哪些型号适合道路警示灯批发？",
    "HB-362, HB-363 and HB-363C are practical starting models for roadside emergency kits and warning light wholesale programs.": "HB-362、HB-363 和 HB-363C 是道路应急套装和警示灯批发项目的实用起步型号。",
    "Can HENGBO support retail kit packaging?": "恒博可以支持零售套装包装吗？",
    "Yes. Logo, color box, instruction sheet and carton packing can be discussed based on order quantity and target market.": "可以。可根据订单数量和目标市场沟通 Logo、彩盒、说明书和外箱包装。",
    "Can I combine road flares with magnetic beacons?": "道路警示灯可以和磁吸信标组合采购吗？",
    "Yes. Buyers often combine LED road flares, magnetic safety beacons and triangle warning lights to build a wider safety catalog.": "可以。很多买家会组合 LED 道路警示灯、磁吸安全信标和三角警示灯，形成更完整的安全产品目录。",
    "Build a practical vehicle safety product line with warning flares, magnetic beacons and triangle warning lights for breakdowns, towing rescue and night roadside visibility.": "通过警示灯、磁吸信标和三角警示灯，建立适合车辆故障、拖车救援和夜间道路可视警示的实用车辆安全产品线。",
    "Recommended vehicle safety range": "推荐车辆安全产品系列",
    "HB-328 road warning light for emergency kits": "HB-328 道路警示灯，适合应急套装",
    "HB-362 safety flare for roadside marking": "HB-362 安全警示灯，适合道路标识",
    "HB-329 magnetic beacon for vehicle panels": "HB-329 磁吸信标，适合车辆表面",
    "HB-330 and HB-331 triangle warning lamps": "HB-330 和 HB-331 三角警示灯",
    "HB-361 red-blue beacon for rescue visibility": "HB-361 红蓝信标，适合救援可视警示",
    "Why buyers use a mixed range": "为什么买家需要组合产品线",
    "Different markets require different battery preferences": "不同市场对电池方式有不同偏好",
    "Retail kits need compact and easy-to-pack models": "零售套装需要紧凑且易包装的型号",
    "Fleet and towing buyers prefer higher visibility": "车队和拖车买家更重视高可见度",
    "OEM orders need stable repeat supply": "OEM 订单需要稳定复购供货",
    "Related models improve catalog depth": "相关型号可以提升目录深度",
    "Quotation checklist": "报价清单",
    "Model list or application scene": "型号清单或应用场景",
    "Trial order or bulk order quantity": "试单或批量订单数量",
    "Packaging style and language": "包装风格和语言",
    "Certificate document requirements": "认证文件需求",
    "Shipping destination and deadline": "发货目的地和时间要求",
    "Want to build a vehicle emergency warning light line?": "想建立车辆应急警示灯产品线吗？",
    "Tell HENGBO your market and buyer type. We can recommend compact warning lights, magnetic beacons and road flares for retail, wholesale or project orders.": "请告诉恒博您的市场和买家类型。我们可以为零售、批发或项目订单推荐紧凑警示灯、磁吸信标和道路警示灯。",
    "Vehicle emergency warning light FAQ": "车辆应急警示灯常见问题",
    "What products should a vehicle emergency kit include?": "车辆应急套装应该包含哪些产品？",
    "Many buyers start with LED road flares, battery warning lights, rechargeable warning lights and magnetic safety beacons.": "很多买家会从 LED 道路警示灯、电池款警示灯、充电款警示灯和磁吸安全信标开始。",
    "Can you help choose models for my market?": "可以帮我按市场选择型号吗？",
    "Yes. Send your target market, quantity and packaging plan, and HENGBO can recommend a suitable model mix.": "可以。请发送目标市场、数量和包装计划，恒博可以推荐合适的型号组合。",
    "Do you support logo and packaging customization?": "支持 Logo 和包装定制吗？",
    "Logo, color box, instruction sheet and export carton packing can be discussed for suitable order quantities.": "对于合适的订单数量，可以沟通 Logo、彩盒、说明书和出口外箱包装。",
    "HENGBO supplies magnetic safety beacons and related LED warning lights for vehicles, roadside rescue, construction projects and private-label wholesale programs.": "恒博为车辆、道路救援、工程项目和自有品牌批发项目供应磁吸安全信标及相关 LED 警示灯。",
    "Magnetic beacon applications": "磁吸信标应用场景",
    "Vehicle-side warning and roadside parking": "车辆侧面警示和道路停车警示",
    "Towing and rescue service visibility": "拖车和救援服务可视警示",
    "Construction and project safety marking": "施工和项目安全标识",
    "Fleet emergency kits and tool sets": "车队应急套装和工具组合",
    "Outdoor temporary warning scenes": "户外临时警示场景",
    "Factory support for beacon orders": "磁吸信标订单的工厂支持",
    "Model recommendation for target use": "按目标用途推荐型号",
    "Logo and packaging discussion": "Logo 和包装方案沟通",
    "Battery and rechargeable option quotation": "电池款和充电款报价选择",
    "Sample communication before bulk order": "批量订单前的样品沟通",
    "Export packing and order follow-up": "出口包装和订单跟进",
    "Related warning light combinations": "相关警示灯组合",
    "HB-362 and HB-363 road flares for emergency kits": "HB-362 和 HB-363 道路警示灯，适合应急套装",
    "HB-330 and HB-331 triangle lamps for work areas": "HB-330 和 HB-331 三角灯，适合作业区域",
    "Need magnetic beacons with related warning lights?": "需要磁吸信标和相关警示灯组合吗？",
    "Send your application scene, quantity and packaging needs. HENGBO can prepare a mixed quotation for magnetic beacons, road flares and triangle warning lamps.": "请发送应用场景、数量和包装需求。恒博可以为磁吸信标、道路警示灯和三角警示灯准备组合报价。",
    "Magnetic safety beacon FAQ": "磁吸安全信标常见问题",
    "Are magnetic beacons suitable for vehicles?": "磁吸信标适合车辆使用吗？",
    "Yes. Magnetic warning lights are useful for temporary vehicle-side warning, roadside work and emergency visibility.": "适合。磁吸警示灯适用于临时车辆侧面警示、道路作业和应急可视警示。",
    "Can I request samples before ordering?": "下单前可以申请样品吗？",
    "Yes. Send target models, quantity and destination market to confirm sample options and lead time.": "可以。请发送目标型号、数量和目的市场，以确认样品方案和交期。",
    "Can magnetic beacons be sold with road flares?": "磁吸信标可以和道路警示灯一起销售吗？",
    "Yes. Many buyers combine magnetic beacons with LED road flares and triangle warning lamps to build a complete safety range.": "可以。很多买家会把磁吸信标、LED 道路警示灯和三角警示灯组合成完整的安全产品系列。",
    "LED road flare wholesale": "LED 道路警示灯批发",
    "Vehicle emergency light wholesale": "车辆应急警示灯批发",
    "Magnetic safety beacon manufacturer": "磁吸安全信标制造商",
    "9 x 4.5 cm": "9 x 4.5 cm",
    "10.1 x 11.2 x 3.3 cm": "10.1 x 11.2 x 3.3 cm",
    "Brightness": "亮度",
    "10.5 x 3.5 cm": "10.5 x 3.5 cm",
    "130 g": "130 g",
    "120PCS/CTN, 57.5 x 44 x 26 cm": "120PCS/箱，57.5 x 44 x 26 cm",
    "Orange protective shell": "橙色防护外壳",
    "HENGBO combines factory production and export service to help overseas buyers build reliable warning light product lines for roadside safety, vehicle kits and retail channels.": "恒博结合工厂生产和外贸服务，帮助海外买家为道路安全、车辆套装和零售渠道建立稳定的警示灯产品线。",
    "Warning Light Buyer Guide": "警示灯采购指南",
    "Buyer Guide": "采购指南",
    "How to choose LED warning lights for your market.": "如何为你的市场选择 LED 警示灯。",
    "Different buyers do not need the same warning light. Vehicle emergency kits, rechargeable safety programs, towing rescue products and road-work visibility projects each need a different model mix. This guide helps overseas buyers decide before requesting samples or OEM packaging.": "不同买家需要的警示灯并不一样。车辆应急套装、充电款安全项目、拖车救援产品和道路作业可视项目，都需要不同的型号组合。本指南帮助海外买家在申请样品或 OEM 包装前先做判断。",
    "Ask HENGBO for model advice": "让 HENGBO 推荐型号",
    "View warning light products": "查看警示灯产品",
    "Step 1": "步骤 1",
    "Choose by use case first.": "先按使用场景选择。",
    "Roadside emergency kits: compact battery flares and triangle warning lights": "道路应急套装：紧凑型电池警示灯和三角警示灯",
    "Reusable fleet programs: rechargeable warning lights and magnetic beacons": "可重复使用车队项目：充电款警示灯和磁吸信标",
    "Towing or rescue vehicles: high-visibility magnetic beacons and red-blue emergency lights": "拖车或救援车辆：高可见度磁吸信标和红蓝应急灯",
    "Retail packs: easy battery replacement, clear packaging and simple instructions": "零售套装：易更换电池、包装清晰、说明简单",
    "Step 2": "步骤 2",
    "Battery vs rechargeable.": "电池款与充电款怎么选。",
    "Battery type": "电池款",
    "Best for emergency kits, backup stock, retail shelves and markets that prefer low first cost.": "适合应急套装、备货库存、零售货架，以及更看重首批成本的市场。",
    "Rechargeable type": "充电款",
    "Best for reusable safety products, professional buyers, fleet programs and higher perceived value.": "适合可重复使用安全产品、专业采购商、车队项目，以及需要更高价值感的市场。",
    "Mixed order": "混合订单",
    "Many importers quote both types to test the market before a larger OEM order.": "很多进口商会同时询价两种版本，在更大的 OEM 订单前先测试市场。",
    "Model Map": "型号地图",
    "Recommended HENGBO starting models": "推荐从这些 HENGBO 型号开始",
    "Battery LED safety flare for emergency packs and roadside kits.": "电池款 LED 安全警示灯，适合应急包和道路安全套装。",
    "Rechargeable road warning light for reusable safety programs.": "充电款道路警示灯，适合可重复使用的安全项目。",
    "Battery type road warning light for portable safety kits.": "电池款道路警示灯，适合便携式安全套装。",
    "Triangle warning lamps for road work, vehicle visibility and retail sets.": "三角警示灯，适合道路作业、车辆可视警示和零售套装。",
    "Magnetic beacons and red-blue emergency lights for vehicles and rescue scenes.": "磁吸信标和红蓝应急灯，适合车辆和救援场景。",
    "RFQ Checklist": "询价清单",
    "Send this for a faster quotation.": "发送这些信息，报价会更快。",
    "Target model or application": "目标型号或应用场景",
    "Quantity and destination market": "数量和目的市场",
    "Battery or rechargeable preference": "偏好电池款还是充电款",
    "Logo, color box and instruction needs": "Logo、彩盒和说明书需求",
    "Target delivery time and sample requirement": "目标交期和样品需求",
    "Factory Recommendation": "工厂选型建议",
    "Do not choose only by model number.": "不要只按型号选择。",
    "Tell us your buyer type and target use. HENGBO can recommend a practical model mix for roadside kits, rechargeable programs, vehicle beacons or retail safety packs.": "告诉我们你的客户类型和目标用途。HENGBO 可以为道路套装、充电款项目、车辆信标或零售安全包推荐更实用的型号组合。",
    "HB-362 Battery Safety Flare": "HB-362 电池款安全警示灯",
    "HB-363C Rechargeable": "HB-363C 充电款",
    "HB-330 Triangle Lamp": "HB-330 三角警示灯",
    "HB-331 Triangle Light": "HB-331 三角警示灯",
    "Common selection questions": "常见选型问题",
    "Should I choose battery or rechargeable LED warning lights?": "应该选择电池款还是充电款 LED 警示灯？",
    "Battery warning lights are easy for emergency kits and backup stock. Rechargeable warning lights are better for reusable programs, fleet buyers and repeat-use safety products.": "电池款警示灯更适合应急套装和备货库存。充电款警示灯更适合可重复使用项目、车队采购和反复使用的安全产品。",
    "Which HENGBO models are best for roadside emergency kits?": "哪些 HENGBO 型号更适合道路应急套装？",
    "HB-362, HB-363, HB-363C, HB-330 and HB-331 are strong starting models for roadside emergency kits and OEM warning light packs.": "HB-362、HB-363、HB-363C、HB-330 和 HB-331 都适合作为道路应急套装和 OEM 警示灯组合的起始型号。",
    "What should overseas buyers send for a warning light quotation?": "海外买家询价警示灯时应该发送什么信息？",
    "Send model, target quantity, battery or rechargeable preference, target market, packaging requirements, logo needs and expected delivery time.": "请发送型号、目标数量、电池款或充电款偏好、目标市场、包装要求、Logo 需求和期望交期。"
  };

  const ATTRIBUTE_COPY_ZH = {
    alt: {
      "HB-362 Battery LED Safety Flare": "HB-362 电池款 LED 安全警示灯",
      "HB-362 application scene": "HB-362 应用场景",
      "HB-363C Rechargeable Road Warning Light": "HB-363C 充电款道路警示灯",
      "HB-363C rechargeable warning light application scene": "HB-363C 充电款警示灯应用场景",
      "HB-363 Battery Type Road Warning Light": "HB-363 电池款道路警示灯",
      "HB-363 battery type warning light application scene": "HB-363 电池款警示灯应用场景",
      "HB-329 Magnetic Safety Beacon": "HB-329 磁吸安全警示灯",
      "HB-329 application scene": "HB-329 应用场景",
      "HB-331 Triangle Work Warning Light": "HB-331 三角作业警示灯",
      "HB-331 application scene": "HB-331 应用场景",
      "HB-361 Red Blue Emergency Beacon": "HB-361 红蓝应急警示灯",
      "HB-361 application scene": "HB-361 应用场景",
      "OEM safety warning lights for private label and wholesale programs.": "面向自有品牌和批发项目的 OEM 安全警示灯。",
      "Roadside emergency warning lights for vehicle safety kits.": "适用于车辆安全套装的道路应急警示灯。",
      "LED warning light manufacturer for wholesale and OEM buyers.": "面向批发和 OEM 采购商的 LED 警示灯制造商。",
      "HENGBO LED warning light product": "恒博 LED 警示灯产品",
      "HENGBO": "恒博",
      "HB-327 Mini LED Warning Light": "HB-327 迷你 LED 警示灯",
      "HENGBO warning light product range for HB-327 buyers": "面向 HB-327 买家的恒博警示灯产品系列",
      "HB-328 LED Road Warning Light": "HB-328 LED 道路警示灯",
      "Roadside safety warning light application scene": "道路安全警示灯应用场景",
      "HB-330 Triangle Roadside Warning Lamp": "HB-330 三角道路警示灯",
      "Triangle warning light construction and road work scene": "三角警示灯施工与道路作业场景",
      "LED warning light buyer guide product example": "LED 警示灯采购指南产品示例",
      "Roadside LED warning light application scene": "道路 LED 警示灯应用场景"
    },
    "aria-label": {
      "HENGBO home": "恒博首页"
    }
  };

  const PAGE_TITLES_ZH = {
    "/products/index.html": "LED 警示灯产品 | 恒博道路安全警示灯制造商",
    "/products/hb-362-led-safety-flare.html": "HB-362 电池款 LED 安全警示灯 | 恒博道路警示灯厂家",
    "/products/hb-363-rechargeable-warning-light.html": "HB-363C 充电款道路警示灯 | 恒博 USB 安全警示灯供应商",
    "/products/hb-363-battery-type-warning-light.html": "HB-363 电池款道路警示灯 | 恒博 OEM LED 安全警示灯工厂",
    "/products/hb-329-magnetic-safety-beacon.html": "HB-329 磁吸安全警示灯 | 车辆警示灯供应商",
    "/products/hb-331-triangle-warning-light.html": "HB-331 三角作业警示灯 | 道路作业警示灯厂家",
    "/products/hb-361-red-blue-emergency-beacon.html": "HB-361 红蓝应急警示灯 | 道路救援警示灯",
    "/solutions/index.html": "警示灯采购解决方案 | 恒博",
    "/solutions/led-warning-light-manufacturer.html": "中国 LED 警示灯制造商 | 恒博工厂与 OEM 供应商",
    "/solutions/roadside-emergency-warning-light-supplier.html": "道路应急警示灯供应商 | 车辆安全警示灯批发",
    "/solutions/oem-safety-warning-light-wholesale.html": "OEM 安全警示灯批发 | 自有品牌 LED 道路安全警示灯",
    "/products/hb-327-mini-led-warning-light.html": "HB-327 迷你 LED 警示灯 | 紧凑车辆安全警示灯",
    "/products/hb-328-led-road-warning-light.html": "HB-328 LED 道路警示灯 | 9 模式车辆安全灯",
    "/products/hb-330-triangle-roadside-warning-lamp.html": "HB-330 三角道路警示灯 | 车辆安全警示灯",
    "/solutions/led-road-flare-wholesale.html": "LED 道路警示灯批发 | 道路安全警示灯",
    "/solutions/vehicle-emergency-warning-light-wholesale.html": "车辆应急警示灯批发 | 恒博安全灯",
    "/solutions/magnetic-safety-beacon-manufacturer.html": "磁吸安全信标制造商 | 车辆警示灯",
    "/solutions/how-to-choose-led-warning-lights.html": "如何选择 LED 警示灯 | 恒博道路安全采购指南"
  };

  const WHATSAPP_COPY_ZH = {
    "/products/hb-362-led-safety-flare.html": "你好 HENGBO，我想咨询 HB-362 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-363-rechargeable-warning-light.html": "你好 HENGBO，我想咨询 HB-363C 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-363-battery-type-warning-light.html": "你好 HENGBO，我想咨询 HB-363 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-329-magnetic-safety-beacon.html": "你好 HENGBO，我想咨询 HB-329 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-331-triangle-warning-light.html": "你好 HENGBO，我想咨询 HB-331 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-361-red-blue-emergency-beacon.html": "你好 HENGBO，我想咨询 HB-361 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-327-mini-led-warning-light.html": "你好 HENGBO，我想咨询 HB-327 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-328-led-road-warning-light.html": "你好 HENGBO，我想咨询 HB-328 的工厂报价，请发送起订量、包装方案和交期。",
    "/products/hb-330-triangle-roadside-warning-lamp.html": "你好 HENGBO，我想咨询 HB-330 的工厂报价，请发送起订量、包装方案和交期。"
  };


  Object.assign(TEXT_COPY_ZH, {
    "Product SEO Catalog": "产品专题目录",
    "LED warning lights plus portable work-light add-ons.": "LED 警示灯及便携工作灯补充产品。",
    "Warning lights remain the core catalog, while rechargeable headlamps and power-bank work lights help importers build complete roadside, outdoor and emergency lighting programs.": "警示灯仍然是核心产品目录，充电头灯和充电宝工作灯作为补充，帮助进口商搭建更完整的道路、户外和应急照明产品线。",
    "Rechargeable Headlamp Work Lights": "充电头灯工作灯",
    "Power Bank Work Lights": "充电宝工作灯",
    "A practical guide comparing battery type, rechargeable type, magnetic beacons and triangle warning lamps for importers and OEM buyers.": "面向进口商和 OEM 买家的实用指南，对比电池款、充电款、磁吸信标和三角警示灯。",
    "How to choose LED warning lights for roadside safety.": "如何为道路安全选择 LED 警示灯。",
    "Solutions": "解决方案",
    "Work Light Add-ons": "工作灯补充款",
    "Rechargeable work light supplier for emergency kit buyers.": "面向应急套装买家的充电工作灯供应商。",
    "Headlamp Add-ons": "头灯补充款",
    "Outdoor headlamp wholesale for safety and repair programs.": "面向安全和检修项目的户外头灯批发。",
    "Power Bank Work Light Series": "充电宝工作灯系列",
    "Request Mixed Quotation": "获取组合报价",
    "Buyer Fit": "适合的买家",
    "Buyer fit": "适合的买家",
    "Use these as add-on products around the warning light catalog.": "这些产品适合作为警示灯目录旁边的补充款。",
    "Warning lights stay the main line, while rechargeable headlamps and power-bank work lights help buyers build fuller emergency, outdoor and repair-light programs.": "警示灯保持主线，充电头灯和充电宝工作灯帮助买家补充应急、户外和检修照明项目。",
    "Shared Specifications": "通用规格",
    "Quotation reference": "报价参考",
    "Function mix": "功能组合",
    "Power bank output, flashlight, work light, warning light and bike-light use depending on model.": "根据型号不同，可支持充电宝输出、手电、工作灯、警示灯和自行车灯用途。",
    "Charging": "充电",
    "Type-C rechargeable design with battery display.": "Type-C 充电设计，带电量显示。",
    "Packaging": "包装",
    "Color box packaging, bike bracket and charging cable depending on model.": "根据型号不同，可配彩盒、自行车支架和充电线。",
    "Outdoor retail, vehicle emergency kits, repair lighting and promotional safety sets.": "适合户外零售、车辆应急套装、检修照明和促销安全套装。",
    "Vehicle emergency and backup lighting": "车辆应急和备用照明",
    "Outdoor work and camping light orders": "户外作业和露营灯订单",
    "Retail safety kits with phone charging": "带手机应急充电功能的零售安全套装",
    "Power-bank flashlight promotional programs": "充电宝手电促销项目",
    "Packaging and mixed model support": "包装和混合型号支持",
    "HENGBO can discuss logo, retail box, instructions, carton marks and mixed product quotations for importers, distributors, hardware stores and emergency kit buyers.": "恒博可为进口商、分销商、五金渠道和应急套装买家沟通 Logo、零售彩盒、说明书、外箱唛头和混合产品报价。",
    "Power Bank Work Light": "充电宝工作灯",
    "High Visibility Power Bank Work Light": "高可见度充电宝工作灯",
    "Rechargeable power-bank work light with USB output, dual front LEDs and side light for outdoor and emergency use.": "充电式充电宝工作灯，带 USB 输出、双前灯和侧灯，适合户外和应急使用。",
    "Need model selection help?": "需要选型帮助吗？",
    "Send your target market, quantity and packaging needs. We can recommend which warning lights, headlamps and work lights fit the same buyer program.": "请发送目标市场、数量和包装需求。我们可以推荐哪些警示灯、头灯和工作灯适合同一个采购项目。",
    "Request quotation": "获取报价",
    "Warning light buyer guide": "警示灯采购指南",
    "Rechargeable headlamps": "充电头灯",
    "Power bank work lights": "充电宝工作灯",
    "Integrated manufacturer & trading partner for warning lights and portable work lights.": "警示灯与便携工作灯一体化制造及贸易合作伙伴。",
    "Rechargeable Headlamp Series": "充电头灯系列",
    "K-series rechargeable headlamps for outdoor, repair and emergency lighting.": "K 系列充电头灯，适合户外、检修和应急照明。",
    "These K-series products support hands-free lighting for outdoor work, camping, inspection, patrol and roadside service. They are best used as add-on products beside the core warning light catalog.": "这些 K 系列产品支持户外作业、露营、检修、巡查和道路服务中的双手解放照明，适合作为核心警示灯目录旁边的补充产品。",
    "Battery platform": "电池平台",
    "Most K-series models use built-in 1200mAh 18650 rechargeable battery.": "大多数 K 系列型号使用内置 1200mAh 18650 充电电池。",
    "Type-C charging, approx. 100 minutes full charge for listed K-series models.": "Type-C 充电，所列 K 系列型号约 100 分钟充满。",
    "Protection": "防护等级",
    "IPX4 water resistance for outdoor, repair and emergency lighting scenes.": "IPX4 防水，适合户外、检修和应急照明场景。",
    "Color box 98 x 50 x 82 mm; 200 pcs per carton; carton gross weight reference 30 kg.": "彩盒 98 x 50 x 82 mm；200 只/箱；整箱毛重参考 30 kg。",
    "Camping and outdoor retail programs": "露营和户外零售项目",
    "Inspection, patrol and repair lighting": "检修、巡查和维修照明",
    "Roadside service add-on products": "道路服务补充产品",
    "Emergency kit and hardware-store lighting range": "应急套装和五金渠道照明系列",
    "Dual Color Rechargeable Headlamp": "双色充电头灯",
    "Dual Color Headlamp": "双色头灯",
    "White + warm yellow flood lighting, 1200mAh 18650 battery, Type-C charging, IPX4 and battery display.": "白光 + 暖黄光泛光照明，1200mAh 18650 电池，Type-C 充电，IPX4，带电量显示。",
    "White and warm yellow flood lighting with Type-C charging and battery display.": "白光和暖黄光泛光照明，支持 Type-C 充电和电量显示。",
    "COB Sensor Headlamp": "COB 感应头灯",
    "COB Red Light Sensor Headlamp": "COB 红光感应头灯",
    "COB Sensor Rechargeable Headlamp": "COB 感应充电头灯",
    "COB flood light with red LEDs, sensor mode, Type-C charging and 91 x 53 x 43 mm compact body.": "COB 泛光灯搭配红光 LED、感应模式、Type-C 充电和 91 x 53 x 43 mm 紧凑机身。",
    "COB white flood light plus red COB, red flash and sensor mode for outdoor and emergency use.": "COB 白光泛光搭配红光 COB、红闪和感应模式，适合户外和应急使用。",
    "COB white light, red light, red flash and sensor mode for camping, patrol and inspection.": "COB 白光、红光、红闪和感应模式，适合露营、巡查和检修。",
    "COB white light, red light, red flash and sensor mode for patrol and inspection.": "COB 白光、红光、红闪和感应模式，适合巡查和检修。",
    "COB flood lighting for close work": "COB 泛光适合近距离作业",
    "Multi-LED Sensor Headlamp": "多灯珠感应头灯",
    "Multifunction XPE + COB Headlamp": "多功能 XPE + COB 头灯",
    "Front XPE LEDs, COB side lighting, red light and sensor mode for repair and roadside service.": "前置 XPE 灯珠、COB 侧灯、红光和感应模式，适合检修和道路服务。",
    "Four-XPE COB Sensor Headlamp": "四颗 XPE COB 感应头灯",
    "Four XPE spot LEDs plus COB flood light and red light for professional outdoor work.": "四颗 XPE 聚光灯搭配 COB 泛光和红光，适合专业户外作业。",
    "Four XPE LEDs plus COB flood light and red light for outdoor work.": "四颗 XPE 灯珠搭配 COB 泛光和红光，适合户外作业。",
    "Wide Beam COB Headlamp": "宽光 COB 头灯",
    "Wide COB flood light with red light and Type-C charging for night work and camping.": "宽光 COB 泛光搭配红光和 Type-C 充电，适合夜间作业和露营。",
    "Outdoor Headlamp Wholesale": "户外头灯批发",
    "Rechargeable Headlamp Wholesale": "充电头灯批发",
    "Rechargeable Work Light Supplier": "充电工作灯供应商",
    "Rechargeable Work Light Supply": "充电工作灯供应",
    "Rechargeable work lights as add-on products for warning light buyers.": "充电工作灯可作为警示灯买家的补充产品。",
    "HENGBO keeps LED warning lights as the core line, while Z-series rechargeable power-bank work lights help buyers extend into vehicle backup, outdoor repair and emergency kit programs.": "恒博以 LED 警示灯为核心产品线，Z 系列充电宝工作灯帮助买家延伸到车辆备用、户外检修和应急套装项目。",
    "For safety buyers who need more than warning lights.": "适合需要警示灯以外补充产品的安全类买家。",
    "Importers often start with road flares, magnetic beacons and triangle warning lights, then add rechargeable work lights for repair, vehicle backup and emergency retail kits.": "进口商通常先从道路警示灯、磁吸信标和三角警示灯开始，再加入充电工作灯，用于检修、车辆备用和应急零售套装。",
    "Recommended Models": "推荐型号",
    "USB output for emergency device charging": "USB 输出，可为设备应急充电",
    "Side work light for repair and outdoor use": "侧面工作灯，适合检修和户外使用",
    "Portable body for vehicle and camping backup": "便携机身，适合车辆和露营备用",
    "Retail packaging and OEM discussion available": "可沟通零售包装和 OEM 方案",
    "Main Line Reminder": "主线提醒",
    "Warning lights stay the main procurement focus.": "警示灯仍然是主要采购重点。",
    "These work lights are positioned as supporting products, so overseas buyers can build a fuller safety catalog without weakening the core warning light message.": "这些工作灯定位为辅助产品，海外买家可以扩充安全产品目录，同时不会削弱警示灯核心主线。",
    "Logo, color box and carton packing support.": "支持 Logo、彩盒和外箱包装。",
    "Send model, quantity, market, color preference and packaging plan. We can prepare a mixed quotation with warning lights and work lights together.": "请发送型号、数量、市场、颜色偏好和包装计划。我们可以准备警示灯与工作灯的组合报价。",
    "Compact 18650 work light with USB output, battery display and emergency charging use.": "紧凑型 18650 工作灯，带 USB 输出、电量显示和应急充电用途。",
    "High Visibility Work Light": "高可见度工作灯",
    "High-visibility shell with USB output and portable lighting for emergency kits.": "高可见度外壳，带 USB 输出和便携照明，适合应急套装。",
    "Build a safer mixed catalog around warning lights.": "围绕警示灯建立更完整的安全产品组合。",
    "Send target market, quantity and packaging needs. HENGBO can recommend warning lights first, then match headlamps or work lights as add-on products.": "请发送目标市场、数量和包装需求。恒博会优先推荐警示灯，再匹配头灯或工作灯作为补充产品。",
    "Warning light manufacturer": "警示灯制造商",
    "Warning light guide": "警示灯指南",
    "Common sourcing questions": "常见采购问题",
    "Can these work lights ship with warning light orders?": "这些工作灯可以和警示灯订单一起出货吗？",
    "Yes. They can be quoted as add-on products with road warning lights, magnetic beacons and emergency kit items.": "可以。它们可以作为道路警示灯、磁吸信标和应急套装产品的补充款一起报价。",
    "Are they suitable for retail safety kits?": "它们适合零售安全套装吗？",
    "Yes. Power-bank work lights can support vehicle backup, outdoor emergency and repair lighting kits.": "适合。充电宝工作灯可用于车辆备用、户外应急和检修照明套装。",
    "Send target models, quantity, market, packaging needs and whether you want a mixed warning light quotation.": "请发送目标型号、数量、市场、包装需求，以及是否需要警示灯组合报价。",
    "Warning light manufacturer and portable lighting export partner.": "警示灯制造商与便携照明出口合作伙伴。",
    "Headlamps extend the warning light catalog naturally.": "头灯可以自然扩展警示灯产品目录。",
    "For distributors and emergency kit brands, headlamps can sit beside safety flares, beacons and vehicle warning lights as practical lighting accessories.": "对于分销商和应急套装品牌，头灯可以作为实用照明配件，与安全警示灯、信标和车辆警示灯一起搭配。",
    "Product Range": "产品范围",
    "Red light / red flash options on selected models": "部分型号支持红光 / 红闪功能",
    "Type-C rechargeable platform for most listed models": "大多数所列型号采用 Type-C 充电平台",
    "Warning-Light First": "警示灯优先",
    "The page supports, not replaces, the core safety range.": "这个页面是补充核心安全系列，不是替代它。",
    "Headlamps are presented as add-on products around roadside safety, repair and outdoor service orders, keeping HENGBO positioned around warning light supply.": "头灯作为道路安全、检修和户外服务订单的补充产品展示，让恒博仍然围绕警示灯供应定位。",
    "Packaging and mixed model quotations are available.": "支持包装和混合型号报价。",
    "Logo, retail box, instruction sheet, carton marks and mixed K-series quotations can be discussed according to quantity and target market.": "可根据数量和目标市场沟通 Logo、零售盒、说明书、外箱唛头和 K 系列混合报价。",
    "Can I combine headlamps with warning light orders?": "头灯可以和警示灯订单一起组合吗？",
    "Yes. K-series headlamps can be quoted with warning lights as add-on products for emergency, repair and outdoor programs.": "可以。K 系列头灯可作为应急、检修和户外项目的补充产品，与警示灯一起报价。",
    "Do these models support OEM packaging?": "这些型号支持 OEM 包装吗？",
    "Logo, color box, instruction sheet and carton marks can be discussed based on order quantity and model selection.": "可根据订单数量和型号选择沟通 Logo、彩盒、说明书和外箱唛头。",
    "Which models should I ask about first?": "应该先咨询哪些型号？",
    "Start with K-351 for dual-color lighting, K-363 for XPE + COB function and K-372 for COB sensor use.": "可以先从 K-351 双色照明、K-363 的 XPE + COB 功能、K-372 的 COB 感应用途开始咨询。",
    "Version Compare": "版本对比",
    "Rechargeable version": "充电款版本",
    "Battery version": "电池款版本",
    "Type-C charging, about 2.5 hours charge time, charging cable included.": "Type-C 充电，约 2.5 小时充满，含充电线。",
    "Powered by 3 x AAA dry cells, suitable for emergency kits and backup inventory.": "使用 3 节 AAA 干电池供电，适合应急套装和备货库存。",
    "Rechargeable runtime": "充电款续航",
    "Battery runtime": "电池款续航",
    "White 11.5h / front flash 16.5h / side flash 3.5h / double flash 3h / running light 10h.": "白光 11.5 小时 / 前闪 16.5 小时 / 侧闪 3.5 小时 / 双闪 3 小时 / 流水灯 10 小时。",
    "White 12.5h / front flash 18h / side flash 4h / double flash 3.5h / running light 11h.": "白光 12.5 小时 / 前闪 18 小时 / 侧闪 4 小时 / 双闪 3.5 小时 / 流水灯 11 小时。",
    "Product size": "产品尺寸",
    "Single weight": "单只重量",
    "Packing size": "包装尺寸",
    "Rechargeable packing": "充电款包装",
    "Battery packing": "电池款包装",
    "Retail safety kits": "零售安全套装",
    "Construction safety supply": "施工安全供货",
    "OEM roadside warning light programs": "OEM 道路警示灯项目",
    "OEM triangle warning light programs": "OEM 三角警示灯项目",
    "OEM packaging support": "OEM 包装支持",
    "Compare HB-330": "对比 HB-330",
    "Compare HB-331": "对比 HB-331",
    "How to choose warning lights": "如何选择警示灯",
    "Quote HB-330 alone or compare it with HB-331.": "可单独询价 HB-330，也可与 HB-331 对比询价。",
    "Tell HENGBO which version you need, quantity, target market and packaging style. We can recommend whether HB-330, HB-331 or a mixed triangle warning light program is better for your buyers.": "请告诉恒博你需要的版本、数量、目标市场和包装风格。我们可以推荐 HB-330、HB-331 或混合三角警示灯方案，哪种更适合你的买家。",
    "Use HB-331 when buyers need a clear triangle work-zone warning light.": "当买家需要清晰的三角作业区警示灯时，可优先选择 HB-331。",
    "Send the version, quantity, target market and packaging requirements. HENGBO can prepare a comparison quotation for HB-331, HB-330 and other roadside warning light models.": "请发送版本、数量、目标市场和包装要求。恒博可以为 HB-331、HB-330 和其他道路警示灯型号准备对比报价。",
    "Does HB-330 have both rechargeable and battery versions?": "HB-330 有充电款和电池款两个版本吗？",
    "Yes. HB-330 can be quoted as a Type-C rechargeable warning lamp or as a 3 x AAA battery warning lamp for retail kits.": "有。HB-330 可按 Type-C 充电款警示灯报价，也可按适合零售套装的 3 节 AAA 电池款报价。",
    "Please send target version, quantity, destination market, logo or color box needs and expected delivery time.": "请发送目标版本、数量、目的市场、Logo 或彩盒需求以及期望交期。",
    "Can you customize packaging for HB-330?": "HB-330 可以定制包装吗？",
    "Yes. HENGBO supports logo, instruction sheet, color box, carton marks and mixed warning light set packaging.": "可以。恒博支持 Logo、说明书、彩盒、外箱唛头和混合警示灯套装包装。",
    "Does HB-331 have rechargeable and battery versions?": "HB-331 有充电款和电池款吗？",
    "Yes. HB-331 is available as a Type-C rechargeable warning light and as a 3 x AAA battery warning light.": "有。HB-331 可提供 Type-C 充电款警示灯和 3 节 AAA 电池款警示灯。",
    "How is HB-331 different from HB-330?": "HB-331 和 HB-330 有什么区别？",
    "Can I quote HB-330 and HB-331 together?": "HB-330 和 HB-331 可以一起询价吗？",
    "Yes. Many buyers compare HB-330 and HB-331 together for triangle warning light programs, retail packs and OEM packaging.": "可以。很多买家会把 HB-330 和 HB-331 一起对比，用于三角警示灯项目、零售套装和 OEM 包装。",
    "Rechargeable / Battery Triangle Warning Light": "充电款 / 电池款三角警示灯",
    "Road Work / Vehicle Emergency Warning Light": "道路作业 / 车辆应急警示灯",
    "Triangle orange body for fast roadside recognition": "橙色三角机身，便于道路快速识别",
    "Triangle safety shape for fast recognition in work zones": "三角安全造型，便于作业区快速识别",
    "Rechargeable and battery versions for different retail channels": "充电款和电池款适配不同零售渠道",
    "Rechargeable and battery versions for different order programs": "充电款和电池款适配不同订单项目",
    "Good comparison model with HB-330 for triangle warning light buyers": "适合三角警示灯买家与 HB-330 对比的型号",
    "OEM color box, instructions and mixed warning light set support": "支持 OEM 彩盒、说明书和混合警示灯套装",
    "Redirecting to": "正在跳转到",
    "TPR + PC": "TPR + PC 材质",
    "PC + ABS": "PC + ABS 材质",
    "PC + TPR + ABS": "PC + TPR + ABS 材质"
  });

  Object.assign(PAGE_TITLES_ZH, {
    "/products/power-bank-work-lights.html": "充电宝工作灯 | 恒博应急便携照明供应商",
    "/products/rechargeable-headlamp-work-lights.html": "充电头灯工作灯 | 恒博户外照明供应商",
    "/solutions/rechargeable-work-light-supplier.html": "充电工作灯供应商 | 恒博警示灯与便携照明",
    "/solutions/outdoor-headlamp-wholesale.html": "户外头灯批发 | 充电头灯供应商"
  });

  function normalizePath(pathname) {
    if (!pathname) return "/index.html";
    return pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  }

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function getRequestedLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return SUPPORTED_LANGS.has(requested) ? requested : null;
  }

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGS.has(saved) ? saved : null;
    } catch {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage failures in privacy-restricted contexts.
    }
  }

  function getBrowserLanguage() {
    return /^zh\b/i.test(navigator.language || "") ? "zh" : "en";
  }

  function updateCurrentUrl(lang) {
    const url = new URL(window.location.href);
    if (lang === "zh") {
      url.searchParams.set("lang", "zh");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function localizeInternalLinks(lang) {
    document.querySelectorAll("a[href]").forEach(anchor => {
      const rawHref = anchor.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(rawHref)) {
        return;
      }

      let url;
      try {
        url = new URL(rawHref, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) {
        return;
      }

      if (lang === "zh") {
        url.searchParams.set("lang", "zh");
      } else {
        url.searchParams.delete("lang");
      }

      anchor.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
    });
  }

  function replaceLeafText(copy) {
    document.querySelectorAll("body *").forEach(element => {
      if (element.matches("script, style")) return;
      if (element.children.length > 0) return;

      const currentText = normalizeText(element.textContent);
      if (!currentText) return;

      const translated = copy[currentText];
      if (translated) {
        element.textContent = translated;
      }
    });
  }

  function replaceAttributes(copy) {
    Object.entries(copy).forEach(([attribute, values]) => {
      document.querySelectorAll(`[${attribute}]`).forEach(element => {
        const currentValue = normalizeText(element.getAttribute(attribute));
        const translated = values[currentValue];
        if (translated) {
          element.setAttribute(attribute, translated);
        }
      });
    });
  }

  function localizeWhatsapp(pathname) {
    const message = WHATSAPP_COPY_ZH[pathname];
    if (!message) return;

    document.querySelectorAll('a[href*="wa.me/8619858215314"]').forEach(link => {
      let url;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }
      url.searchParams.set("text", message);
      link.href = url.toString();
    });
  }

  function ensurePrivacyLink() {
    const footer = document.querySelector(".footer");
    if (!footer || footer.querySelector('a[href$="privacy.html"]')) return;

    const link = document.createElement("a");
    const inSection = /^\/(products|solutions)(?:\/|$)/.test(window.location.pathname);
    link.href = `${inSection ? "../" : ""}privacy.html`;
    link.textContent = "Privacy notice";
    footer.appendChild(link);
  }

  function ensureProductProcurementStrip(lang) {
    if (!document.body.classList.contains("product-detail-page") || document.querySelector(".seo-procurement-strip")) return;
    const detailGrid = document.querySelector(".seo-detail-grid");
    if (!detailGrid) return;
    const model = (document.querySelector("h1")?.textContent.match(/HB-\d+[A-Z]?/i) || [""])[0].toUpperCase();
    const fixedMeta = {
      "HB-327": { moq: "1,000", lead: "1–7 days", cert: "CE / RoHS / FCC" },
      "HB-328": { moq: "100", lead: "1–7 days", cert: "CE / RoHS / FCC" },
      "HB-329": { moq: "100", lead: "1–7 days", cert: "CE / RoHS / FCC" },
      "HB-330": { moq: "100", lead: "1–7 days", cert: "CE / RoHS / FCC" },
      "HB-331": { moq: "100", lead: "1–7 days", cert: "CE / RoHS / FCC" },
      "HB-361": { moq: "500", lead: "5–25 days", cert: "CE / RoHS / FCC" }
    }[model] || { moq: "Confirm by model", lead: "Confirm by model", cert: "Confirm by model" };
    const zh = lang === "zh";
    const copy = zh ? {
      eyebrow: "采购信息概览", moq: "起订量", lead: "交期", packaging: "包装", cert: "认证资料",
      packagingValue: "标准包装 / OEM 包装", certFallback: "按型号确认"
    } : {
      eyebrow: "Procurement snapshot", moq: "MOQ", lead: "Lead time", packaging: "Packaging", cert: "Certificates",
      packagingValue: "Standard / OEM packaging", certFallback: "Confirm by model"
    };
    const value = (en, zhValue) => zh ? zhValue : en;
    const section = document.createElement("section");
    section.className = "seo-procurement-strip reveal";
    section.setAttribute("aria-label", copy.eyebrow);
    section.innerHTML = `
      <div class="seo-procurement-heading"><p class="eyebrow">${copy.eyebrow}</p><strong>${zh ? "统一模板中的关键采购字段" : "The key fields buyers need in one place"}</strong></div>
      <div class="seo-procurement-grid">
        <article><b>${copy.moq}</b><span>${value(fixedMeta.moq, fixedMeta.moq === "Confirm by model" ? "按型号确认" : fixedMeta.moq)}</span></article>
        <article><b>${copy.lead}</b><span>${value(fixedMeta.lead, fixedMeta.lead === "Confirm by model" ? "按型号确认" : fixedMeta.lead)}</span></article>
        <article><b>${copy.packaging}</b><span>${copy.packagingValue}</span></article>
        <article><b>${copy.cert}</b><span>${fixedMeta.cert === "Confirm by model" ? copy.certFallback : fixedMeta.cert}</span></article>
      </div>`;
    detailGrid.parentNode.insertBefore(section, detailGrid);
  }

  function applyLanguage(lang) {
    const safeLang = SUPPORTED_LANGS.has(lang) ? lang : "en";
    const pathname = normalizePath(window.location.pathname);

    document.documentElement.lang = safeLang === "zh" ? "zh-CN" : "en";
    saveLanguage(safeLang);
    ensurePrivacyLink();
    ensureProductProcurementStrip(safeLang);
    updateCurrentUrl(safeLang);
    localizeInternalLinks(safeLang);

    if (safeLang !== "zh") return;

    replaceLeafText(TEXT_COPY_ZH);
    replaceAttributes(ATTRIBUTE_COPY_ZH);

    if (PAGE_TITLES_ZH[pathname]) {
      document.title = PAGE_TITLES_ZH[pathname];
    }

    localizeWhatsapp(pathname);
  }

  const preferredLanguage = getRequestedLanguage() || getSavedLanguage() || getBrowserLanguage();
  applyLanguage(preferredLanguage);
}());
