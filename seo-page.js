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
    "HB-328 is a multi-mode LED road warning light with red warning functions and white SMD lighting for vehicle emergency kits, roadside safety and wholesale programs.": "HB-328 是一款多模式 LED 道路警示灯，带红色警示和白光 SMD 照明，适合车辆应急包、道路安全和批发项目。",
    "HB-328 9-mode LED road warning light for vehicle emergency kits, roadside safety and OEM wholesale programs.": "HB-328 9 模式 LED 道路警示灯，适合车辆应急包、道路安全和 OEM 批发项目。",
    "Why buyers choose HB-328": "采购商选择 HB-328 的原因",
    "9 selectable warning modes": "9 种可选警示模式",
    "Red 12 LED warning with white 3 SMD light": "红光 12 LED 警示，搭配白光 3 SMD",
    "Hook and portable body for flexible placement": "挂钩与便携机身，方便灵活摆放",
    "Good visibility for night roadside use": "适合夜间道路高可见度警示",
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
    "Why buyers choose HB-330": "采购商选择 HB-330 的原因",
    "Triangle warning body for clear road visibility": "三角警示外形，道路识别更清晰",
    "Yellow 33 LED warning with white 3 SMD light": "黄光 33 LED 警示，搭配白光 3 SMD",
    "5 warning modes for temporary safety scenes": "5 种警示模式，适合临时安全场景",
    "Portable body for quick placement": "便携机身，方便快速摆放",
    "10 x 11.5 x 2.8 cm": "10 x 11.5 x 2.8 cm",
    "Yellow 33 LED, white 3 SMD": "黄光 33 LED，白光 3 SMD",
    "5 warning modes": "5 种警示模式",
    "Temporary road lanes": "临时道路车道",
    "Construction warning": "施工警示",
    "Vehicle emergency packs": "车辆应急包",
    "Project safety supply": "项目安全供货",
    "Need samples, OEM packaging or a mixed warning light quotation?": "需要样品、OEM 包装或警示灯组合报价吗？",
    "Tell HENGBO your quantity, destination market and whether you need battery versions, rechargeable versions, retail kits or private label packaging. We can recommend a practical product mix for your warning light program.": "请告诉恒博您的数量、目标市场，以及是否需要电池款、充电款、零售套装或自有品牌包装。我们可以为您的警示灯项目推荐合适的产品组合。",
    "Questions about HB-330": "关于 HB-330 的问题"
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
      "Triangle warning light construction and road work scene": "三角警示灯施工与道路作业场景"
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
    "/products/hb-330-triangle-roadside-warning-lamp.html": "HB-330 三角道路警示灯 | 车辆安全警示灯"
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

  function applyLanguage(lang) {
    const safeLang = SUPPORTED_LANGS.has(lang) ? lang : "en";
    const pathname = normalizePath(window.location.pathname);

    document.documentElement.lang = safeLang === "zh" ? "zh-CN" : "en";
    saveLanguage(safeLang);
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
