
const products = [
  { model: "HB-330C", img: "product-mains/hb-330c-main.png", en: ["Triangle Roadside Warning Lamp · Rechargeable", "Type-C rechargeable version of the HB-330 triangle warning light."], zh: ["HB-330C 三角道路警示灯充电款", "HB-330 三角警示灯的 Type-C 充电版本。"] },
  { model: "HB-331C", img: "product-mains/hb-331c-main.png", en: ["Triangle Work Warning Light · Rechargeable", "Type-C rechargeable version of the HB-331 triangle warning light."], zh: ["HB-331C 三角工作警示灯充电款", "HB-331 三角警示灯的 Type-C 充电版本。"] },
  { model: "HB-321", img: "product-mains/hb-321-main.png", en: ["LED Work Light", "COB handheld work light for inspection, repair and outdoor utility."], zh: ["LED 工作灯", "COB 手持工作灯，适用于检修、维修、户外便携照明。"] },
  { model: "HB-325", img: "product-mains/hb-325-main.png", en: ["Portable Work Light", "Portable work light with COB + LED illumination for job sites."], zh: ["便携式工作灯", "COB + LED 组合照明，适用于工地、车库、维修场景。"] },
  { model: "HB-326", img: "product-mains/hb-326-main.png", en: ["Outdoor Emergency Light", "Hook design emergency light for camping, repair and garage use."], zh: ["户外应急灯", "挂钩式应急照明，适合露营、维修、车库等场景。"] },
  { model: "HB-327", img: "p327.webp", en: ["Mini LED Warning Light", "Magnetic mini LED warning light for vehicle and roadside safety."], zh: ["迷你 LED 警示灯", "磁吸式迷你 LED 警示灯，适用于车辆与道路安全警示。"] },
  { model: "HB-328", img: "product-mains/hb-328-main.png", en: ["LED Road Warning Light", "Multi-mode LED road warning light with strong visibility."], zh: ["LED 道路警示灯", "多模式道路警示灯，亮度高、穿透力强。"] },
  { model: "HB-329", img: "product-mains/hb-329-main.png", en: ["Magnetic Safety Beacon", "Magnetic safety beacon for vehicles, projects and emergency scenes."], zh: ["磁吸安全警示灯", "磁吸式安全警示灯，适用于车辆、工程与应急现场。"] },
  { model: "HB-330", img: "product-mains/hb-330-main.png", en: ["Triangle Roadside Warning Lamp", "Foldable triangle warning lamp for night roadside emergencies."], zh: ["三角道路警示灯", "折叠式三角警示灯，适合夜间道路应急。"] },
  { model: "HB-331", img: "product-mains/hb-331-main.png", en: ["Triangle Work Warning Light", "Portable triangle warning light with strong safety illumination."], zh: ["三角工作警示灯", "便携式三角警示灯，安全警示效果明显。"] },
  { model: "HB-361", img: "product-mains/hb-361-main.png", en: ["Red Blue Emergency Beacon", "Red and blue emergency beacon for roadside and field warning."], zh: ["红蓝应急警示灯", "红蓝应急警示灯，适合道路和户外警示场景。"] },
  { model: "HB-362", img: "product-mains/hb-362-main.png", en: ["Battery LED Safety Flare", "Battery-powered magnetic LED safety flare with 9 modes for roadside rescue and vehicle emergency kits."], zh: ["HB-362 电池款警示灯", "电池款磁吸 LED 安全警示灯，9种模式，适合道路救援和车辆应急包。"] },
  { model: "HB-363C", img: "product-mains/hb-363c-main.png", en: ["Rechargeable Road Warning Light", "Rechargeable magnetic warning light with USB charging port for vehicle, roadside and emergency safety."], zh: ["HB-363C 充电款警示灯", "USB 充电款磁吸警示灯，适合车辆、道路救援和应急安全警示。"] },
  { model: "HB-363", img: "product-mains/hb-363-main.png", en: ["Battery Type Road Warning Light", "Battery-powered magnetic warning light for roadside emergency kits, vehicles and portable safety use."], zh: ["HB-363 电池款警示灯", "电池款磁吸警示灯，适合道路应急包、车辆和便携安全警示。"] },
  {"model": "XG-T31", "img": "xg-t31.webp", "cat": "solar", "en": ["Solar Wall Sensor Garden Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T31 壁挂感应灯", "壁挂感应灯/庭院灯，1200MA/18650*1；140+12LED；5.5v/ 2w；太阳能+人体感应；高亮白光+警示灯；防水+遥控功能。"]},
  {"model": "XG-T30", "img": "xg-t30.webp", "cat": "security", "en": ["Solar Dummy Camera Security Light", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-T30 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，1200MA/18650*2；6大功率+8LED；5.5v/ 3w。"]},
  {"model": "XG-T28-SMD", "img": "xg-t28-smd.webp", "cat": "security", "en": ["SMD Solar Camera Sensor Light", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-T28-SMD 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，1200MA/18650*1；33LED；5.5v/ 1.5w。"]},
  {"model": "XG-T28-COB", "img": "xg-t28-cob.webp", "cat": "security", "en": ["COB Solar Camera Sensor Light", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-T28-COB 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，1200MA/18650*1；33LED；5.5v/ 1.5w。"]},
  {"model": "XG-152-COB", "img": "xg-152-cob.webp", "cat": "work", "en": ["COB Multifunction Portable Emergency Light", "Portable work and emergency light for job sites, garages, roadside service and outdoor repair."], "zh": ["XG-152-COB 多功能手提应急灯", "多功能手提应急灯，1200MA/18650*4；140+12LED；5.5v/ 2.2w。"]},
  {"model": "XG-152-SMD", "img": "xg-152-smd.webp", "cat": "work", "en": ["SMD Multifunction Portable Emergency Light", "Portable work and emergency light for job sites, garages, roadside service and outdoor repair."], "zh": ["XG-152-SMD 多功能手提应急灯", "多功能手提应急灯，1200MA/18650*4；140+12LED；5.5v/ 2.2w。"]},
  {"model": "XG-T8501-COB", "img": "xg-t8501-cob.webp", "cat": "solar", "en": ["COB Split Solar Flood Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T8501-COB 太阳能投光灯", "太阳能投光灯/分体太阳能灯，1200MA/18650*2；50LED；5.5v/ 3w。"]},
  {"model": "XG-T8502-SMD", "img": "xg-t8502-smd.webp", "cat": "solar", "en": ["SMD Split Solar Flood Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T8502-SMD 太阳能投光灯", "太阳能投光灯/分体太阳能灯，1200MA/18650*2；50LED；5.5v/ 3w。"]},
  {"model": "XG-C8505-COB", "img": "xg-c8505-cob.webp", "cat": "work", "en": ["COB Portable Work Light", "Portable work and emergency light for job sites, garages, roadside service and outdoor repair."], "zh": ["XG-C8505-COB 手提工作灯", "手提工作灯/便携工作灯，1200MA/18650*2；50LED；USB充电。"]},
  {"model": "XG-C8506-SMD", "img": "xg-c8506-smd.webp", "cat": "work", "en": ["SMD Portable Work Light", "Portable work and emergency light for job sites, garages, roadside service and outdoor repair."], "zh": ["XG-C8506-SMD 手提工作灯", "手提工作灯/便携工作灯，1200MA/18650*2；50LED；USB充电。"]},
  {"model": "XG-TF28-SMD", "img": "xg-tf28-smd.webp", "cat": "security", "en": ["Indoor Split Solar Camera Light SMD", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-TF28-SMD 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，1200MA/18650*1；33LED；5.5v/ 3w；室内分体太阳能。"]},
  {"model": "XG-TF28-COB", "img": "xg-tf28-cob.webp", "cat": "security", "en": ["Indoor Split Solar Camera Light COB", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-TF28-COB 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，1200MA/18650*1；33LED；5.5v/ 3w；室内分体太阳能。"]},
  {"model": "XG-C11", "img": "xg-c11.webp", "cat": "security", "en": ["Battery Dummy Camera Warning Light", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-C11 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，5号2节电池；1LED红灯闪；不含电池。"]},
  {"model": "XG-009", "img": "xg-009.webp", "cat": "security", "en": ["Battery Dummy Camera Warning Light", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-009 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，5号3节电池；1LED红灯闪；起订量3000。"]},
  {"model": "XG-008", "img": "xg-008.webp", "cat": "security", "en": ["Battery Dummy Camera Warning Light", "Camera-style warning and security light for perimeter deterrence, yards, storefronts and outdoor sites."], "zh": ["XG-008 监控摄像头灯", "监控摄像头灯/仿真摄像头灯，5号2节电池；1LED红灯闪；不含电池。"]},
  {"model": "XG-T32SMD", "img": "xg-t32smd.webp", "cat": "solar", "en": ["SMD Solar RGB Landscape Spotlight", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T32SMD 壁挂感应灯", "壁挂感应灯/庭院灯，1200MA/18650*1；50LED白光+RGB七彩；5.5v/ 1.2w。"]},
  {"model": "XG-T32COB", "img": "xg-t32cob.webp", "cat": "solar", "en": ["COB Solar RGB Landscape Spotlight", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T32COB 壁挂感应灯", "壁挂感应灯/庭院灯，1200MA/18650*1；COB白光+RGB七彩；5.5v/ 1.2w。"]},
  {"model": "XG-T38", "img": "xg-t38.webp", "cat": "camping", "en": ["Solar Camping Bulb Lantern", "Portable camping and ambience light for outdoor leisure, emergency backup and retail channels."], "zh": ["XG-T38 露营吊灯", "露营吊灯/野营灯，60LED白光+3钨丝灯+RGB七彩；1500MA/18650*2；5.5v/ 0.8w。"]},
  {"model": "XG-T39SMD", "img": "xg-t39smd.webp", "cat": "solar", "en": ["SMD Split Solar Flood Light with RGB Ambience", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T39SMD 太阳能投光灯", "太阳能投光灯/分体太阳能灯，18650×3/1800MA；SMD白光；6v/ 6w。"]},
  {"model": "XG-T35SMD", "img": "xg-t35smd.webp", "cat": "solar", "en": ["SMD Split Solar Sensor Flood Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["XG-T35SMD 太阳能投光灯", "太阳能投光灯/分体太阳能灯，18650×3/1800MA；SMD白光；6v/ 6w。"]},
  {"model": "XG-T37SMD", "img": "xg-t37smd.webp", "cat": "work", "en": ["SMD Solar Portable Camping Work Light", "Portable work and emergency light for job sites, garages, roadside service and outdoor repair."], "zh": ["XG-T37SMD 手提工作灯", "手提工作灯/便携工作灯，18650×3/1800MA；SMD白光/红白爆闪；5.5v/ 6w。"]},
  {"model": "XG-T37COB", "img": "xg-t37cob.webp", "cat": "work", "en": ["COB Solar Portable Camping Work Light", "Portable work and emergency light for job sites, garages, roadside service and outdoor repair."], "zh": ["XG-T37COB 手提工作灯", "手提工作灯/便携工作灯，18650×3/1800MA；SMD白光/红白爆闪；5.5v/ 6w。"]},
  {"model": "XG-T53-200W", "img": "xg-t53-200w.webp", "cat": "solar", "en": ["200W LED Solar Flood Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["LED太阳能投光灯庭院灯", "太阳能投光灯/庭院灯，200W；13-15小时；光控、遥控、定时；5000毫安锂电池；6V6W分体太阳能充电。"]},
  {"model": "XG-T53-300W", "img": "xg-t53-300w.webp", "cat": "solar", "en": ["300W LED Solar Flood Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["LED太阳能投光灯庭院灯", "太阳能投光灯/庭院灯，300W；13-15小时；光控、遥控、定时；10000毫安锂电池；6V12W分体太阳能充电。"]},
  {"model": "XG-T53-400W", "img": "xg-t53-400w.webp", "cat": "solar", "en": ["400W LED Solar Flood Light", "Solar-powered lighting for gardens, yards, construction projects and outdoor retail programs."], "zh": ["LED太阳能投光灯庭院灯", "太阳能投光灯/庭院灯，400W；13-15小时；光控、遥控、定时；15000毫安锂电池；6V18W分体太阳能充电。"]},
  {"model": "XG-T51", "img": "xg-t51.webp", "cat": "camping", "en": ["Solar Camping Ambience Light", "Portable camping and ambience light for outdoor leisure, emergency backup and retail channels."], "zh": ["太阳能露营氛围灯", "露营/野营灯，白光4小时；暖光12小时；七彩灯8小时；白光、暖光、七彩灯；3000毫安锂电池。"]},

  {"model": "K-351", "img": "kt-k351.webp", "cat": "work", "en": ["Dual Color Rechargeable Headlamp", "Rechargeable headlamp with white and warm yellow flood lighting, Type-C charging and battery display for camping, repair and night work."], "zh": ["K-351 双色充电头灯", "白光/暖黄光泛光照明，Type-C 充电并带电量显示，适合露营、检修和夜间作业。"]},
  {"model": "K-352", "img": "kt-k352.webp", "cat": "work", "en": ["COB Sensor Headlamp", "Compact headlamp with wide COB illumination for repair, inspection, camping and outdoor work."], "zh": ["K-352 COB 头灯", "紧凑型 COB 头灯，适合检修、巡查、露营和户外作业照明。"]},
  {"model": "K-353", "img": "kt-k353.webp", "cat": "work", "en": ["COB Red Light Sensor Headlamp", "Rechargeable COB headlamp with white flood light, red light, red flash and sensor mode for outdoor and emergency use."], "zh": ["K-353 COB 红光感应头灯", "充电式 COB 头灯，带白光、红光、红闪和感应模式，适合户外和应急使用。"]},
  {"model": "K-354", "img": "kt-k354.webp", "cat": "work", "en": ["Multi-LED Sensor Headlamp", "Multi-LED headlamp for hands-free lighting in repair, outdoor activity and emergency backup scenes."], "zh": ["K-354 多灯珠户外头灯", "多灯珠头戴式照明，适合维修、户外活动和应急备用场景。"]},
  {"model": "K-361", "img": "kt-k361.webp", "cat": "work", "en": ["XPE + COB Rechargeable Headlamp", "Multifunction rechargeable headlamp with XPE spotlight, COB flood light, red light and sensor mode for job-site and outdoor use."], "zh": ["K-361 XPE+COB 充电头灯", "多功能充电头灯，带 XPE 聚光、COB 泛光、红光和感应模式，适合工地和户外使用。"]},
  {"model": "K-362", "img": "kt-k362.webp", "cat": "work", "en": ["Multifunction XPE + COB Headlamp", "Headlamp with front LEDs and side light design for job-site, camping and roadside service use."], "zh": ["K-362 多功能 LED 头灯", "前置灯珠搭配侧面照明设计，适合工地、露营和道路服务使用。"]},
  {"model": "K-363", "img": "kt-k363.webp", "cat": "work", "en": ["Four-XPE COB Sensor Headlamp", "Rechargeable headlamp with four XPE spot LEDs, COB flood light, red light and sensor mode for professional outdoor work."], "zh": ["K-363 四颗 XPE+COB 感应头灯", "四颗 XPE 聚光搭配 COB 泛光和红光，适合专业户外作业、露营和应急照明。"]},
  {"model": "K-371", "img": "kt-k371.webp", "cat": "work", "en": ["Wide Beam COB Headlamp", "Wide-beam COB headlamp for close-range work, night walking, garage repair and outdoor lighting."], "zh": ["K-371 宽光 COB 头灯", "宽光 COB 头灯，适合近距离作业、夜间行走、车库维修和户外照明。"]},
  {"model": "K-372", "img": "kt-k372.webp", "cat": "work", "en": ["COB Sensor Rechargeable Headlamp", "Rechargeable COB headlamp with red light, red flash, sensor mode and Type-C charging for camping, inspection and emergency backup."], "zh": ["K-372 COB 感应充电头灯", "COB 白光搭配红光、红闪和感应模式，Type-C 充电，适合露营、巡查和应急备用。"]},
  {"model": "Z-818", "img": "product-mains/z818-main.png", "cat": "work", "en": ["Power Bank Work Light", "Rechargeable work light with power-bank USB output, side lighting and battery display for repair, outdoor use and emergency phone charging."], "zh": ["Z-818 充电宝工作灯", "带 USB 输出充电功能、侧灯和电量显示，可作工作灯，也可给手机等设备应急补电。"]},
  {"model": "Z-828", "img": "kt-z828.webp", "cat": "work", "en": ["Power Bank Work Light", "Power-bank work light with USB output, dual front LEDs and side work light for repair, outdoor use and emergency device charging."], "zh": ["Z-828 充电宝工作灯", "带 USB 输出充电功能，双前灯搭配侧面工作灯，适合检修、户外使用和手机应急充电。"]},
  {"model": "Z-838", "img": "product-mains/z838-main.png", "cat": "work", "en": ["Power Bank Work Light", "High-visibility power-bank work light with USB output, dual front LEDs and side light for outdoor, repair and emergency charging programs."], "zh": ["Z-838 充电宝工作灯", "高可见度充电宝工作灯，支持 USB 输出应急充电，双前灯搭配侧灯，适合户外和检修场景。"]}
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
  "HB-330C": { moq: "100", lead: "1~7 days", cert: "CE, RoHS, FCC", price: "Contact sales", spec: { en: "PC + TPR + ABS body; 33 yellow LEDs plus 3 white SMD; 5 modes; Type-C rechargeable; 650mAh polymer lithium battery.", zh: "PC + TPR + ABS；33 颗黄色 LED 和 3 颗白色 SMD；5 种模式；Type-C 充电；650mAh 聚合物锂电池。" }, use: { en: "Reusable roadside safety programs, vehicle emergency kits and retail rechargeable lines.", zh: "适合重复使用的道路安全项目、车辆应急包和充电款零售产品线。" }, custom: { en: "Logo, color box, instruction sheet and mixed battery / rechargeable quotation.", zh: "支持 LOGO、彩盒、说明书以及电池款 / 充电款组合报价。" }, sample: { en: "Compare with HB-330 battery version before confirming the market program.", zh: "确认市场方案前，建议与 HB-330 电池款一起对比。" } },
  "HB-331C": { moq: "100", lead: "1~7 days", cert: "CE, RoHS, FCC", price: "Contact sales", spec: { en: "PC + TPR + ABS body; 30 yellow LEDs plus 3 white SMD; 5 modes; Type-C rechargeable version.", zh: "PC + TPR + ABS；30 颗黄色 LED 和 3 颗白色 SMD；5 种模式；Type-C 充电版本。" }, use: { en: "Construction warning, temporary lanes and repeat-use triangle warning light programs.", zh: "适合施工警示、临时车道和重复使用的三角警示灯项目。" }, custom: { en: "Logo, color box, instruction sheet and mixed battery / rechargeable quotation.", zh: "支持 LOGO、彩盒、说明书以及电池款 / 充电款组合报价。" }, sample: { en: "Compare with HB-331 battery version for work-zone and retail programs.", zh: "适合与 HB-331 电池款一起做施工和零售项目对比。" } },
  "HB-327": { moq: "1000", lead: "1~7天", cert: "CE, RoHS, FCC", price: "8.5元", spec: { en: "TPR + PC body; 8 LEDs; 6.5*2CM; 42g; powered by 2*CR2032 batteries.", zh: "材料 TPR+PC；8LED；尺寸 6.5*2CM；重量 42g；电池 2*CR2032。" }, use: { en: "Retail safety packs, compact warning light displays and add-on emergency products.", zh: "适合零售安全包、迷你警示灯陈列和应急补充产品。" }, custom: { en: "Logo label, blister/card packaging and mixed warning light sets.", zh: "支持 LOGO 标签、吸塑/卡装包装和警示灯组合套装。" }, sample: { en: "Good entry sample for distributors comparing compact warning lights.", zh: "适合作为经销商测试迷你警示灯市场的入门样品。" } },
  "HB-328": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "12元", spec: { en: "PC + TPR + ABS hook; red 12 LED plus white 3 SMD; 9 modes; 10*10*3.5CM.", zh: "材料 PC+TPR+ABS 挂钩；红光12LED，白光3SMD；9种模式；尺寸 10*10*3.5CM。" }, use: { en: "Roadside emergency kits, retail warning light shelves and mixed model starter orders.", zh: "适合道路应急包、零售警示灯货架和混合型号试单。" }, custom: { en: "Color box, instruction sheet, logo sticker and multi-pack options.", zh: "支持彩盒、说明书、LOGO 贴标和多只装方案。" }, sample: { en: "Recommended with HB-362 or HB-363C for a warning light sample set.", zh: "建议与 HB-362 或 HB-363C 一起做警示灯样品组合。" } },
  "HB-329": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "干电池12元 / 锂电池21元", spec: { en: "PC + ABS body; white 50LM plus red/orange warning light; 9*4.5CM; battery or lithium version available.", zh: "材料 PC+ABS；白光50LM，红光与橙光警示；尺寸 9*4.5CM；可选干电池/锂电池版本。" }, use: { en: "Service vehicles, towing rescue, construction vehicles and magnetic beacon programs.", zh: "适合服务车辆、拖车救援、工程车辆和磁吸信标项目。" }, custom: { en: "Logo, packaging, warning color and battery version selection.", zh: "支持 LOGO、包装、警示颜色和电池版本选择。" }, sample: { en: "Quote together with HB-361 if the buyer needs vehicle warning products.", zh: "如买家做车辆警示产品，建议与 HB-361 组合报价。" } },
  "HB-330": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "干电池14元 / 锂电池22元", spec: { en: "PC + TPR + ABS body; yellow 33 LEDs plus white 3 SMD; 5 modes; 10*11.5*2.8CM.", zh: "材料 PC+TPR+ABS；黄光33LED，白光3SMD；5种模式；尺寸 10*11.5*2.8CM。" }, use: { en: "Triangle warning light for roadside safety, temporary work areas and retail packs.", zh: "适合道路安全、临时作业区域和零售套装的三角警示灯。" }, custom: { en: "Color box, instruction sheet and warning light set packaging.", zh: "支持彩盒、说明书和警示灯套装包装。" }, sample: { en: "Use with HB-331 for triangle warning light comparison.", zh: "建议与 HB-331 一起做三角警示灯对比样品。" } },
  "HB-331": { moq: "100", lead: "1~7天", cert: "CE, RoHS, FCC", price: "干电池14元 / 锂电池22元", spec: { en: "PC + TPR + ABS body; yellow 30 LEDs plus white 3 SMD; 5 modes; 10.1*11.2*3.3CM.", zh: "材料 PC+TPR+ABS；黄光30LED，白光3SMD；5种模式；尺寸 10.1*11.2*3.3CM。" }, use: { en: "Triangle warning light for road lanes, work zones and emergency displays.", zh: "适合道路车道、作业区域和应急陈列的三角警示灯。" }, custom: { en: "Retail packaging, carton marks and mixed triangle warning light sets.", zh: "支持零售包装、外箱唛头和三角警示灯组合。" }, sample: { en: "Good comparison sample with HB-330 for shape and brightness selection.", zh: "适合与 HB-330 对比外形和亮度。" } },
  "HB-361": { moq: "500", lead: "5~25天", cert: "CE, RoHS, FCC", price: "55元", spec: { en: "PC + ABS body; front 96 SMD and side 48 SMD; 700LM white light and 48LM red-blue warning.", zh: "材料 PC+ABS；前面 SMD 96颗，侧面 SMD 48颗；白光高亮700LM，红蓝警示48LM。" }, use: { en: "Towing rescue, vehicle emergency visibility, outdoor warning and portable utility lighting.", zh: "适合拖车救援、车辆应急高可见度、户外警示和便携照明。" }, custom: { en: "Logo, export packaging, warning color configuration and project quotation.", zh: "支持 LOGO、出口包装、警示颜色配置和项目报价。" }, sample: { en: "Recommended for buyers needing stronger vehicle/rescue warning products.", zh: "适合需要更强车辆/救援警示产品的买家测试。" } },
  "HB-362": { moq: "Contact sales", lead: "Contact sales", cert: "CE, RoHS, FCC", price: "Contact sales", spec: { en: "10.5*3.5CM; 130g; PC + ABS body; 3*AAA batteries; 9 LED modes; magnetic back; rain-resistant design.", zh: "尺寸 10.5*3.5CM；重量 130g；材料 PC+ABS；电池 3*AAA；9种 LED 模式；磁吸背面；防水抗雨设计。" }, use: { en: "Roadside emergency packs, vehicle safety kits, retail multi-packs and safety stock.", zh: "适合道路应急包、车辆安全套装、零售多只装和安全库存。" }, custom: { en: "3PCS/6PCS sets, color box, logo, instruction sheet and carton marks.", zh: "支持 3PCS/6PCS 套装、彩盒、LOGO、说明书和外箱唛头。" }, sample: { en: "Recommended first sample for buyers building a warning flare product line.", zh: "建议作为买家搭建警示灯产品线的首选样品。" }, packing: { en: "120PCS/carton; 57.5*44*26CM; optional 3PCS set / 6PCS set.", zh: "120PCS/箱；57.5*44*26CM；可选 3PCS 套装 / 6PCS 套装。" }, note: { en: "New battery safety flare for roadside rescue packs and vehicle emergency kits.", zh: "新款 362 电池款安全警示灯，适合道路救援包和车辆应急套装。" } },
  "HB-363C": { moq: "Contact sales", lead: "Contact sales", cert: "Contact sales", price: "Contact sales", spec: { en: "USB rechargeable round road warning light; orange protective shell; magnetic back; designed for vehicle emergency and roadside safety.", zh: "USB 充电款圆形道路警示灯；橙色防护外壳，磁吸背面，适合车辆应急、道路救援和安全警示。" }, use: { en: "Reusable safety programs, distributors preferring rechargeable products and OEM warning light sets.", zh: "适合可重复使用安全项目、偏好充电款的经销商和 OEM 警示灯套装。" }, custom: { en: "Charging version, logo, color box, instruction sheet and mixed quote with battery type.", zh: "支持充电版本、LOGO、彩盒、说明书，并可与电池款组合报价。" }, sample: { en: "Best sample for buyers comparing rechargeable and battery warning light lines.", zh: "适合买家对比充电款和电池款警示灯产品线。" }, note: { en: "New rechargeable HB-363 version for samples, OEM packaging and repeat-use safety lines.", zh: "新款 363 充电款，可用于询盘、样品和贴牌项目。" } },
  "HB-363": { moq: "Contact sales", lead: "Contact sales", cert: "Contact sales", price: "Contact sales", spec: { en: "Battery type round road warning light; orange protective shell; magnetic back; suitable for portable vehicle safety use.", zh: "电池款圆形道路警示灯；橙色防护外壳，磁吸背面，适合道路应急包、车辆随车安全和便携警示。" }, use: { en: "Emergency kits, backup inventory, retail safety sets and buyers needing battery versions.", zh: "适合应急套装、备货库存、零售安全组合和需要电池款的买家。" }, custom: { en: "Logo, color box, instruction sheet and mixed quotation with HB-363C.", zh: "支持 LOGO、彩盒、说明书，并可与 HB-363C 组合报价。" }, sample: { en: "Quote with HB-363C to help buyers choose rechargeable or battery type.", zh: "建议与 HB-363C 一起报价，方便买家选择充电款或电池款。" }, note: { en: "Battery type HB-363 can be quoted together with rechargeable version.", zh: "新款 363 电池款，可与充电款组合报价。" } },
  "HB-321": { moq: "1000", lead: "10~25天", cert: "CE, RoHS, FCC", price: "8.5元（不含电池）", spec: "材料 ABS；COB 3W，190LM；尺寸 19.5*6.5*2.5CM；重量 96g。" },
  "HB-325": { moq: "1000", lead: "7~25天", cert: "CE, RoHS, FCC", price: "22元", spec: "材料 TPR；COB 160LM + 1LED 60LM；尺寸 15.5*4*2.5CM；重量 123g。" },
  "HB-326": { moq: "1000", lead: "7~25天", cert: "CE, RoHS, FCC", price: "10元（不含电池）", spec: "材料 ABS；COB 180LM，3W；尺寸 13*6*3CM；重量 97g。" },
  "XG-T31": {"spec": "1200MA/18650*1；140+12LED；5.5v/ 2w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "22 元", "packing": "60PCS；25.5G.M；55×52×51.5CM", "note": "太阳能+人体感应；高亮白光+警示灯；防水+遥控功能"},
  "XG-T30": {"spec": "1200MA/18650*2；6大功率+8LED；5.5v/ 3w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "32 元", "packing": "50PCS；33G.M；67×39×68.5CM", "note": ""},
  "XG-T28-SMD": {"spec": "1200MA/18650*1；33LED；5.5v/ 1.5w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "26 元", "packing": "60PCS；24G.M；65×48.5×59CM", "note": ""},
  "XG-T28-COB": {"spec": "1200MA/18650*1；33LED；5.5v/ 1.5w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "26 元", "packing": "60PCS；24G.M；65×48.5×59CM", "note": ""},
  "XG-152-COB": {"spec": "1200MA/18650*4；140+12LED；5.5v/ 2.2w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "52 元", "packing": "48PCS；34G.M；65×40×48CM", "note": ""},
  "XG-152-SMD": {"spec": "1200MA/18650*4；140+12LED；5.5v/ 2.2w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "52 元", "packing": "48PCS；34G.M；65×40×48CM", "note": ""},
  "XG-T8501-COB": {"spec": "1200MA/18650*2；50LED；5.5v/ 3w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "50 元", "packing": "30PCS；29G.M；52×47×50CM", "note": ""},
  "XG-T8502-SMD": {"spec": "1200MA/18650*2；50LED；5.5v/ 3w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "50 元", "packing": "30PCS；29G.M；52×47×50CM", "note": ""},
  "XG-C8505-COB": {"spec": "1200MA/18650*2；50LED；USB充电", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "42 元", "packing": "12PCS；15G.M；62.5×29.5×59CM", "note": ""},
  "XG-C8506-SMD": {"spec": "1200MA/18650*2；50LED；USB充电", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "42 元", "packing": "12PCS；15G.M；62.5×29.5×59CM", "note": ""},
  "XG-TF28-SMD": {"spec": "1200MA/18650*1；33LED；5.5v/ 3w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "32 元", "packing": "48PCS；33.5G.M；68×39.5×64CM", "note": "室内分体太阳能"},
  "XG-TF28-COB": {"spec": "1200MA/18650*1；33LED；5.5v/ 3w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "32 元", "packing": "48PCS；33.5G.M；68×39.5×64CM", "note": "室内分体太阳能"},
  "XG-C11": {"spec": "5号2节电池；1LED红灯闪", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "8 元", "packing": "60PCS；19G.M；57×36×75.5CM", "note": "不含电池"},
  "XG-009": {"spec": "5号3节电池；1LED红灯闪", "moq": "3000", "lead": "Contact sales", "cert": "Contact sales", "price": "5.5 元", "packing": "100PCS；21G.M；53.5×51.5×67CM", "note": "起订量3000"},
  "XG-008": {"spec": "5号2节电池；1LED红灯闪；不含电池", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "3 元", "packing": "100PCS；16G.M；49.7×41.2×62CM", "note": ""},
  "XG-T32SMD": {"spec": "1200MA/18650*1；50LED白光+RGB七彩；5.5v/ 1.2w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "24 元", "packing": "80PCS；22G.M；71×38×59CM", "note": ""},
  "XG-T32COB": {"spec": "1200MA/18650*1；COB白光+RGB七彩；5.5v/ 1.2w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "24 元", "packing": "80PCS；22G.M；71×38×59CM", "note": ""},
  "XG-T38": {"spec": "60LED白光+3钨丝灯+RGB七彩；1500MA/18650*2；5.5v/ 0.8w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "19 元", "packing": "60PCS；19G.M；62×38×64CM", "note": ""},
  "XG-T39SMD": {"spec": "18650×3/1800MA；SMD白光；6v/ 6w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "65 元", "packing": "12PCS；22G.M；59×31.5×52CM", "note": ""},
  "XG-T35SMD": {"spec": "18650×3/1800MA；SMD白光；6v/ 6w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "65 元", "packing": "12PCS；22G.M；59×31.5×52CM", "note": ""},
  "XG-T37SMD": {"spec": "18650×3/1800MA；SMD白光/红白爆闪；5.5v/ 6w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "70 元", "packing": "12PCS；21G.M；43×35×74CM", "note": ""},
  "XG-T37COB": {"spec": "18650×3/1800MA；SMD白光/红白爆闪；5.5v/ 6w", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "70 元", "packing": "12PCS；21G.M；43×35×74CM", "note": ""},
  "XG-T53-200W": {"spec": "200W；13-15小时；光控、遥控、定时；5000毫安锂电池；6V6W分体太阳能充电", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "46 元", "packing": "20PCS；28G.M；58×40×47", "note": ""},
  "XG-T53-300W": {"spec": "300W；13-15小时；光控、遥控、定时；10000毫安锂电池；6V12W分体太阳能充电", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "62 元", "packing": "12PCS；23G.M；56×37×53", "note": ""},
  "XG-T53-400W": {"spec": "400W；13-15小时；光控、遥控、定时；15000毫安锂电池；6V18W分体太阳能充电", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "75 元", "packing": "10PCS；25G.M；51×37×63", "note": ""},
  "XG-T51": {"spec": "白光4小时；暖光12小时；七彩灯8小时；白光、暖光、七彩灯；3000毫安锂电池", "moq": "Contact sales", "lead": "Contact sales", "cert": "Contact sales", "price": "22 元", "packing": "60PCS；26G.M；74×36×55", "note": ""},

  "K-351": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "RMB 8.5 factory reference", zh: "出厂参考价 8.5 元" }, spec: { en: "White 16 x 2835 LED + warm yellow 16 x 2835 LED; 300lm high / 150lm low; 1200mAh 18650 battery; Type-C charging; IPX4; size 91 x 53 x 43 mm; net weight 96g.", zh: "白光16颗2835灯珠+暖黄光16颗2835灯珠；高亮300lm/低亮150lm；1200mAh 18650电池；Type-C充电；IPX4；尺寸91x53x43mm；净重96g。" }, note: { en: "Dual-color headlamp for camping, inspection, night repair and outdoor retail programs.", zh: "适合露营、巡查、夜间检修和户外零售项目的双色头灯。" } },
  "K-352": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "COB headlamp; wide flood lighting; elastic head strap; suitable for inspection, patrol and outdoor work lighting.", zh: "COB 头灯；宽光照明；弹力头带；适合检修、巡查、户外作业照明。" }, note: { en: "New headlamp series, can be quoted as add-on catalog products with warning light orders.", zh: "新款头灯系列，可作为警示灯订单的补充产品组合报价。" } },
  "K-353": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "RMB 10.5 factory reference", zh: "出厂参考价 10.5 元" }, spec: { en: "COB white flood light + red COB; white 300lm high / 150lm low; red light and red flash; sensor mode; 1200mAh 18650 battery; Type-C charging; IPX4; size 91 x 53 x 43 mm.", zh: "白光COB泛光+红光COB；白光高亮300lm/低亮150lm；红光和红闪；感应模式；1200mAh 18650电池；Type-C充电；IPX4；尺寸91x53x43mm。" }, note: { en: "Red-light function makes it suitable for camping, emergency kits and night visibility add-on orders.", zh: "红光功能适合露营、应急包和夜间可视化补充订单。" } },
  "K-354": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "Multi-LED headlamp; hands-free lighting; adjustable head strap; suitable for outdoor, repair and emergency lighting.", zh: "多灯珠头灯；解放双手照明；可调节头带；适合户外、检修和应急照明。" }, note: { en: "New headlamp series for outdoor lighting retail and wholesale programs.", zh: "新款头灯系列，适合户外照明零售和批发项目。" } },
  "K-361": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "RMB 12.5 factory reference", zh: "出厂参考价 12.5 元" }, spec: { en: "3W XPE spotlight + 3W COB flood light + red COB; XPE 300lm high / 150lm low, COB 250lm high / 100lm low; sensor mode; 1200mAh 18650; Type-C; IPX4.", zh: "3W XPE聚光+3W COB泛光+红光COB；XPE高亮300lm/低亮150lm，COB高亮250lm/低亮100lm；感应模式；1200mAh 18650；Type-C；IPX4。" }, note: { en: "Higher-function headlamp for job-site, outdoor, roadside service and repair lighting programs.", zh: "适合工地、户外、道路服务和检修照明项目的高功能头灯。" } },
  "K-362": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "Multifunction LED headlamp; front LEDs with side lighting; suitable for job-site, outdoor and roadside service scenes.", zh: "多功能 LED 头灯；前置灯珠搭配侧面照明；适合工地、户外和道路服务场景。" }, note: { en: "Can be combined with portable work lights and emergency lights for mixed quotation.", zh: "可与便携工作灯、应急灯组合报价。" } },
  "K-363": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "RMB 12.5 factory reference", zh: "出厂参考价 12.5 元" }, spec: { en: "4W XPE spotlight + 3W COB flood light + red COB; 350lm XPE high / 150lm low, COB 250lm high / 100lm low; sensor mode; 1200mAh 18650; Type-C; IPX4.", zh: "4W XPE聚光+3W COB泛光+红光COB；XPE高亮350lm/低亮150lm，COB高亮250lm/低亮100lm；感应模式；1200mAh 18650；Type-C；IPX4。" }, note: { en: "Strong headlamp option for professional outdoor work, camping and emergency lighting sets.", zh: "适合专业户外作业、露营和应急照明套装的强光头灯。" } },
  "K-371": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "Wide beam COB headlamp; close-range work lighting; adjustable head strap; suitable for night work and outdoor use.", zh: "宽光 COB 头灯；适合近距离作业照明；可调节头带；适合夜间作业和户外使用。" }, note: { en: "New headlamp model for extending the work light and outdoor lighting range.", zh: "新款头灯型号，用于扩展工作灯和户外照明系列。" } },
  "K-372": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "RMB 10.5 factory reference", zh: "出厂参考价 10.5 元" }, spec: { en: "3W COB white flood light + red COB; white 300lm high / 150lm low; red light and red flash; sensor mode; 1200mAh 18650; Type-C; IPX4; size 91 x 53 x 43 mm.", zh: "3W白光COB泛光+红光COB；白光高亮300lm/低亮150lm；红光和红闪；感应模式；1200mAh 18650；Type-C；IPX4；尺寸91x53x43mm。" }, note: { en: "Sensor headlamp for camping, patrol, inspection and emergency backup lighting.", zh: "适合露营、巡查、检修和应急备用照明的感应头灯。" } },
  "Z-818": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "Power bank work light; USB output for emergency phone/device charging; side lighting and battery display design; suitable for repair, outdoor work, emergency backup and in-car lighting.", zh: "充电宝工作灯；支持 USB 输出，可给手机等设备应急充电；带侧面照明和电量显示设计；适合检修、户外作业、应急备用和随车照明。" }, note: { en: "Promote as a 2-in-1 work light and emergency power bank for outdoor, vehicle and safety kit orders.", zh: "建议作为“工作照明 + 应急充电宝”两用卖点推广，适合户外、车辆和应急套装订单。" } },
  "Z-828": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "Power bank work light; USB output for emergency device charging; dual front LEDs, side work light and lanyard design; suitable for repair, outdoor use, emergency kits and in-car backup.", zh: "充电宝工作灯；支持 USB 输出，可给手机等设备应急充电；双前灯、侧面工作灯和挂绳设计；适合检修、户外使用、应急包和随车备用。" }, note: { en: "Orange shell fits safety and emergency product lines; the power-bank function makes it stronger for retail and gift-kit programs.", zh: "橙色外壳适合安全应急类产品线，充电宝功能更适合零售和礼品应急套装卖点。" } },
  "Z-838": { moq: { en: "Contact sales", zh: "联系销售" }, lead: { en: "Contact sales", zh: "联系销售" }, cert: { en: "Contact sales", zh: "联系销售" }, price: { en: "Contact sales", zh: "联系销售" }, spec: { en: "Power bank work light; USB output for emergency phone/device charging; dual front LEDs with side lighting; portable body for outdoor, repair and backup lighting.", zh: "充电宝工作灯；支持 USB 输出，可给手机等设备应急充电；双前灯搭配侧面照明；便携机身，适合户外、检修和应急备用照明。" }, note: { en: "High-visibility yellow shell plus power-bank charging function for outdoor retail, emergency kits and vehicle backup sets.", zh: "高可见度黄色外壳叠加充电宝功能，适合户外零售、应急包和车辆备用套装。" } }
};

const translations = {
  en: {
    brandTag: "Industry & Trade Integrated Factory", navProducts: "Products", navFactory: "Factory", navCustom: "OEM/ODM", navQuality: "Quality", navContact: "Contact", quote: "Request Quote",
    eyebrow: "Portable Lighting & Safety Warning Solutions", heroTitle: "LED warning light factory for wholesale & OEM.", heroText: "Road safety warning lights, magnetic beacons, rechargeable and battery warning lamps supplied by a factory + trading integrated export team.", explore: "Explore Products", customize: "Customize Your Brand", heroWarning: "Warning Lights", heroBeacon: "Safety Beacons", heroWork: "Work Lights", heroSourcingLabel: "Hot warning models",
    proof1: "Factory-owned production", proof2: "Export service team", proof3: "OEM/ODM brand support", signatureEyebrow: "Signature Warning Series", signatureTitle: "Designed for visibility. Built for roadside and emergency safety.", flagshipEyebrow: "Core Warning Product Matrix", flagshipTitle: "Road warning lights, beacons and work lights for safety markets.", flagshipText: "Build your safety lighting range from compact warning lights to magnetic beacons, road emergency lamps and portable work lights.", prestige1: "modern production base", prestige2: "core manufacturing modules", prestige3: "trained production staff", prestige4: "quality & export compliance", metricFactory: "Modern factory", metricTeam: "Skilled employees", metricService: "Full customization", metricExport: "Export ready",
    floatingLabel: "Factory Verified", floatingText: "Injection molding · Tooling · Assembly · QC", strip1: "Global supply", strip2: "Stable quality", strip3: "Competitive pricing", strip4: "Bulk order support", strip5: "Fast response",
    productsEyebrow: "Main Product Lines", productsTitle: "Warning lights first, with wider outdoor lighting options.", productsText: "Our core range covers LED road warning lights, safety beacons and portable work lights; newly added solar, camping and security lights help buyers expand the catalog.",
    collectionsEyebrow: "Product Range", collectionsTitle: "Core warning products plus extended outdoor lighting.", collectionsText: "Start with HENGBO warning lights and beacons, then add solar, camping and security lighting for a wider catalog.", collectionWarningTitle: "Road warning lights", collectionWarningText: "Multi-mode LED warning lamps for roadside safety, vehicle emergency kits and retail packs.", collectionBeaconTitle: "Safety beacons", collectionBeaconText: "Magnetic beacons and red-blue warning lights for vehicles, projects and emergency scenes.", collectionSolarTitle: "Solar project lighting", collectionSolarText: "Flood lights, wall lights and garden lighting for yards, farms and project supply.", collectionCampingTitle: "Camping & ambience", collectionCampingText: "Portable lanterns and ambience lights for outdoor retail and seasonal programs.", collectionSecurityTitle: "Security warning lights", collectionSecurityText: "Camera-style warning lights for perimeter deterrence and storefront protection.", collectionWorkTitle: "Portable work range", collectionWorkText: "Rechargeable work lights and emergency lights for repair, garage and job-site use.", collectionCta: "View range",
    factoryEyebrow: "Manufacturing Excellence", factoryTitle: "End-to-end capability, built for global brands.", factoryText: "We combine production ownership with export service: injection molding, precision tooling, assembly lines, packaging warehouse and dedicated QC are coordinated under an ISO 9001-oriented management system.",
    cap1: "Advanced injection molding", cap2: "Precision tooling workshop", cap3: "Standardized assembly", cap4: "Sustainable packaging", cap5: "Dedicated quality control", cap6: "Scalable production capacity",
    customEyebrow: "OEM & ODM Customization", customTitle: "From idea to branded product, one accountable team.",
    qualityEyebrow: "Quality & Service", qualityTitle: "ISO 9001-oriented quality management for stable export orders.", qualityText: "We build our daily production around ISO 9001 quality management principles, with documented checkpoints from incoming materials to final shipment.", qualityIso: "Process-based quality management", qualityStages: "Incoming, in-process and final checks", qualityAql: "Sampling inspection before shipment", qualityFlowEyebrow: "Quality Delivery Path", qualityFlowTitle: "From order review to shipment, every step leaves a check point.", qualityFlow1: "Material verification", qualityFlow2: "Assembly inspection", qualityFlow3: "Function testing", qualityFlow4: "Packing & shipment check", qualityFlowNote: "Clear inspection records and order-specific sampling help professional buyers reduce repeat-order risk.", certEyebrow: "Compliance Portfolio", certTitle: "Documented compliance support for professional buyers.", certText: "For importers, distributors and project buyers, we provide selected third-party documents for initial review. Available files include ISO 9001, CE/EMC, FCC and RoHS documents related to lighting product series.", certNote: "Documents are provided for buyer reference; applicable requirements may vary by model, market and order specification.", certIso: "Quality management system certificate for lighting production scope", certCe: "Electromagnetic compatibility documentation", certFcc: "Supplier's Declaration of Conformity documentation", certRohs: "Restriction of hazardous substances documentation", certOpen: "View PDF",
    showroomEyebrow: "Scenario Ready", showroomTitle: "Roadside safety · Cycling & outdoor · Emergency warning · Portable utility",
    contactEyebrow: "Start A Project", contactTitle: "Send your market, quantity and customization needs.", contactText: "We will prepare product recommendations, packaging options, lead time and quotation details for your target market.", buyerFitEyebrow: "Who We Supply", buyerFitTitle: "Built for buyers who need stable warning light supply, not one-time decoration.", buyerFitText: "If you are building a roadside safety line, emergency kit program, retail warning light range or OEM packaging project, HENGBO helps you compare models, confirm samples and prepare factory quotation details faster.", buyerFit1Title: "Importers & Distributors", buyerFit1Text: "Need stable warning light supply, mixed models and repeat-order support.", buyerFit2Title: "Emergency Kit Brands", buyerFit2Text: "Need battery flares, rechargeable lights and packaging for safety kits.", buyerFit3Title: "OEM / Private Label", buyerFit3Text: "Need logo, color box, instruction sheet and market-specific product sets.", buyerFit4Title: "Vehicle & Project Buyers", buyerFit4Text: "Need magnetic beacons, road warning lights and work-light add-ons.", rfqLabel: "For faster quotation, send:", rfqModels: "target model", rfqQty: "quantity", rfqMarket: "destination market", rfqPack: "logo / packaging needs", rfqMiniTitle: "Recommended inquiry format:", rfqMiniText: "Model + quantity + market + OEM packaging + target delivery time.", bundleEyebrow: "Popular Buying Sets", bundleTitle: "Start from proven warning light combinations.", bundleText: "For new buyers, mixed model quotations reduce selection risk and help test the market before a larger OEM order.", bundle1Tag: "Roadside Kit", bundle1Title: "Vehicle emergency pack", bundle1Text: "Battery warning flares for car kits, retail packs and safety stock.", bundle2Tag: "Rechargeable Line", bundle2Title: "Reusable warning light range", bundle2Text: "Rechargeable warning lights for distributors and repeat-use safety products.", bundle3Tag: "Vehicle / Rescue", bundle3Title: "Magnetic beacon set", bundle3Text: "Magnetic warning lights for service vehicles, towing rescue and project sites.", bundle4Tag: "Retail Add-ons", bundle4Title: "Warning lights plus work lights", bundle4Text: "Add selected work lights to safety orders without changing the main warning light focus.", orderFlowEyebrow: "Sample To Shipment", orderFlowTitle: "A clear path from sample request to repeat supply.", orderFlowText: "Buyers can start with samples or mixed sets, then confirm packaging, quality checks and shipment details before bulk production.", orderStep1Title: "Model selection", orderStep1Text: "Confirm target models, market use and battery or rechargeable version.", orderStep2Title: "Sample check", orderStep2Text: "Test brightness, modes, magnet, packaging and retail requirements.", orderStep3Title: "OEM packaging", orderStep3Text: "Confirm logo, color box, instruction sheet, barcode and carton marks.", orderStep4Title: "Bulk production", orderStep4Text: "Arrange material, assembly, function checks and order progress updates.", orderStep5Title: "QC & shipment", orderStep5Text: "Check packing, quantity and documents before delivery or forwarder pickup.",
    formName: "Your name", formEmail: "Email / WhatsApp", formProduct: "Product interest", formMessage: "Quantity, logo, packaging, destination market", formSubmit: "Send Inquiry", footerText: "Integrated manufacturer & trading partner for portable lighting and safety warning products.", searchProducts: "Search model or product", filterAll: "All", filterWork: "Work Lights", filterWarning: "Warning Lights", filterBeacon: "Beacons", filterSolar: "Solar Lights", filterCamping: "Camping", filterSecurity: "Security", floatingInquiry: "Quick Inquiry", backTop: "Back to top", moreProducts: "More Products", lessProducts: "Show Less", customBadge: "OEM / ODM", customLogo: "Custom Logo", customLogoText: "Your brand on product", customPack: "Custom Packaging", customPackText: "Retail-ready box design", productCta: "View details", productQuickQuote: "Quick quote", pathEyebrow: "Warning Light Buying Guide", pathTitle: "Let buyers choose by use case, not only by model number.", pathText: "Roadside kits, rechargeable programs, vehicle beacons and work-light add-ons are placed together so warning lights stay central while related products are naturally mixed in.", pathKitLabel: "Roadside Kit", pathKitTitle: "Battery warning lights for emergency packs", pathKitText: "Start with HB-362 and HB-363 for car kits, retail sets and portable safety packs.", pathRechargeLabel: "Rechargeable Program", pathRechargeTitle: "Reusable warning light line", pathRechargeText: "Use HB-363C for buyers who prefer USB charging and repeat-use safety products.", pathBeaconLabel: "Vehicle / Rescue", pathBeaconTitle: "Magnetic beacons for service vehicles", pathBeaconText: "HB-329 and HB-361 support roadside rescue, towing and project visibility.", pathAddonLabel: "Add-on Range", pathAddonTitle: "Work lights mixed into safety orders", pathAddonText: "Add selected work lights only as supporting products, so the page does not become too single.", pathViewWarning: "View warning range", tierEyebrow: "Procurement Price Matrix", tierTitle: "Three product tiers help buyers choose faster.", tierText: "Entry models protect price-sensitive inquiries, core models compete for daily orders, and premium models anchor higher-value safety programs.", tierEntryLabel: "Entry / Trial", tierEntryTitle: "Low-cost warning lights for first orders", tierEntryText: "Use compact battery models to answer budget buyers and sample-pack requests without lowering the whole product line.", tierCoreLabel: "Core / Main Sale", tierCoreTitle: "Main warning lights for wholesale competition", tierCoreText: "These models should receive the most SEO, quotation and image attention because they match common roadside safety demand.", tierPremiumLabel: "Premium / Anchor", tierPremiumTitle: "Higher-value options for serious buyers", tierPremiumText: "Rechargeable, beacon and kit-ready products raise perceived factory strength and create room for better-margin orders.", modalInquiry: "Inquire this product", modalSupport: "OEM/ODM, packaging and quotation support within 24h.", categoryWork: "Work light", categoryWarning: "Warning light", categoryBeacon: "Beacon", categorySolar: "Solar light", categoryCamping: "Camping light", categorySecurity: "Security light", tagNew: "New", tagHot: "Hot", tagWarning: "Warning", tagBeacon: "Beacon", tagRechargeable: "Rechargeable", tagBattery: "Battery", tagWork: "Work", tagSolar: "Solar", tagSecurity: "Security", tagCamping: "Camping", tagOem: "OEM Ready", tagExtended: "Extended Range", modalVersion: "Version", modalApplication: "Application", modalOem: "OEM/ODM", modalOemValue: "Logo, color box and export packaging available", applicationWarning: "Roadside rescue, vehicle emergency kits and safety warning scenes", applicationBeacon: "Vehicle safety, project sites and emergency visibility", applicationWork: "Inspection, repair, garage and job-site lighting", applicationSolar: "Garden, yard, farm and project outdoor lighting", applicationSecurity: "Perimeter deterrence, storefronts and yard security", applicationCamping: "Camping, outdoor leisure and emergency backup", newSeriesEyebrow: "New Warning Series", newSeriesTitle: "New orange warning lights for road safety kits.", newSeriesText: "HB-362 battery safety flare and HB-363 rechargeable / battery warning lights are now available for samples, wholesale orders and OEM packaging.", newSeriesPoint1: "Magnetic back", newSeriesPoint2: "Vehicle emergency", newSeriesPoint3: "OEM ready", newSeries362: "Battery Safety Flare", newSeriesRechargeable: "Rechargeable Type", newSeriesBattery: "Battery Type", quickWhatsApp: "WhatsApp Quote", quickEmail: "Email Sales", floatWhatsApp: "WhatsApp", floatEmail: "Email", modalWhatsapp: "Ask price on WhatsApp", applicationsEyebrow: "Application Scenarios", applicationsTitle: "Mixed warning light models for real roadside, vehicle and rescue scenes.", applicationsText: "This section mixes HB-362 road flares, HB-329 magnetic beacons, HB-331 triangle warning lights and HB-361 red-blue emergency beacons so buyers see different applications.", appRoadLabel: "HB-362 Roadside", appRoadTitle: "High visibility on wet roads", appRoadText: "Orange warning flares help mark the safety zone behind vehicles at night.", appVehicleLabel: "HB-329 Beacon", appVehicleTitle: "Magnetic beacon on vehicles", appVehicleText: "HB-329 magnetic beacons support vehicles, project sites and roadside safety programs.", appWorksiteLabel: "HB-331 Triangle", appWorksiteTitle: "Triangle warning for work areas", appWorksiteText: "HB-330 / HB-331 triangle lights help mark temporary work areas and road lanes.", appRescueLabel: "HB-361 Red-blue", appRescueTitle: "Red-blue beacon for towing rescue", appRescueText: "HB-361 red-blue beacons improve visibility for towing, rescue and emergency response.", trustEyebrow: "Why Buyers Choose HENGBO", trustTitle: "Factory supply plus export service for warning light orders.", trust1Title: "Factory direct supply", trust1Text: "Production ownership helps control pricing, lead time and repeat-order stability.", trust2Title: "OEM / ODM packaging", trust2Text: "Support logo, color box, instruction sheet and retail-ready warning light kits.", trust3Title: "Sample support", trust3Text: "Fast sample communication for new HB-362, HB-363 and core warning models.", trust4Title: "Quality inspection", trust4Text: "Incoming, assembly, function and packing checks before shipment.", trust5Title: "Export service team", trust5Text: "Product recommendation, quotation, packing and shipping details in one workflow.", trust6Title: "Trial & bulk orders", trust6Text: "Support starter orders, wholesale programs and long-term supply plans.", faqEyebrow: "FAQ", faqTitle: "Common questions from warning light buyers.", faq1Q: "Can you customize logo and packaging?", faq1A: "Yes. We support logo printing, color box design, instructions and retail-ready packaging for OEM/ODM orders.", faq2Q: "Can I get samples before bulk order?", faq2A: "Yes. Send the target model, quantity and market, and our sales team will confirm sample options and lead time.", faq3Q: "Do you have rechargeable and battery warning lights?", faq3A: "Yes. HB-363C is rechargeable, while HB-362 and HB-363 battery type is a battery warning light option.", faq4Q: "What certificates can you provide?", faq4A: "Selected product series can provide CE, RoHS and FCC related documents for buyer review.", faq5Q: "What information should I send for quotation?", faq5A: "Please send model, quantity, logo or packaging needs, destination market and target delivery time.", faq6Q: "Do you support small trial orders?", faq6A: "We can discuss trial orders, sample packs and wholesale programs based on model and packaging requirements.", seoProductEyebrow: "SEO Product Pages", seoProductTitle: "Core warning light pages for overseas buyers", seoProductText: "Independent English pages help buyers and search engines understand each model, application, specification and OEM option.", seoLink327: "HB-327 Mini Warning Light", seoLink328: "HB-328 Road Warning Light", seoLink330: "HB-330 Triangle Lamp", seoLink362: "HB-362 Safety Flare", seoLink363C: "HB-363C Rechargeable", seoLink363: "HB-363 Battery Type", seoLink329: "HB-329 Magnetic Beacon", seoLink331: "HB-331 Triangle Light", seoLink361: "HB-361 Emergency Beacon", seoViewCatalog: "View Product Catalog", routeEyebrow: "Buyer Navigation", routeTitle: "Start with warning lights, then add the right support products.", routeText: "Instead of listing every model at once, this area guides buyers by sourcing intent: core warning lights, add-on portable lighting and keyword landing pages.", routeCoreLabel: "Core warning lights", routeCoreTitle: "Roadside safety models", routeCoreText: "For emergency kits, road rescue, vehicle visibility and warning light wholesale orders.", routeAddonLabel: "Add-on lighting", routeAddonTitle: "Headlamps and work lights", routeAddonText: "Support products for buyers who also need outdoor, repair and emergency backup lighting.", routeSearchLabel: "Buyer search pages", routeSearchTitle: "Factory, OEM and guide pages", routeSearchText: "For buyers comparing suppliers, OEM packaging and model selection before inquiry.", sourcingEyebrow: "Buyer Sourcing Pages", sourcingTitle: "Keyword pages for manufacturers, roadside safety and OEM wholesale.", sourcingText: "These English landing pages target how overseas buyers search: factory supply, roadside emergency use and private label warning light wholesale.", sourcingManufacturer: "LED Warning Light Manufacturer", sourcingRoadside: "Roadside Emergency Supplier", sourcingOem: "OEM Safety Light Wholesale", sourcingRoadFlare: "LED Road Flare Wholesale", sourcingVehicleEmergency: "Vehicle Emergency Lights", sourcingMagneticBeacon: "Magnetic Safety Beacon", sourcingGuide: "How to Choose Warning Lights", sourcingWorkLight: "Rechargeable Work Light Supplier", sourcingHeadlamp: "Outdoor Headlamp Wholesale", sourcingViewPages: "View Sourcing Pages", thanks: "Thank you. We will contact you soon."
  },
  zh: {
    brandTag: "工贸一体实力工厂", navProducts: "产品", navFactory: "工厂", navCustom: "定制", navQuality: "质量", navContact: "联系", quote: "获取报价",
    eyebrow: "便携照明与安全警示解决方案", heroTitle: "LED 警示灯批发与 OEM 实力工厂。", heroText: "工贸一体外贸团队供应道路安全警示灯、磁吸警示信标、充电款和电池款警示灯，支持批发、样品和贴牌包装。", explore: "查看产品", customize: "定制品牌", heroWarning: "警示灯", heroBeacon: "安全信标", heroWork: "工作灯", heroSourcingLabel: "热询警示型号",
    proof1: "自有工厂生产", proof2: "外贸服务团队", proof3: "OEM/ODM品牌支持", signatureEyebrow: "核心系列", signatureTitle: "为高可见度而设计，为真实安全场景而制造。", flagshipEyebrow: "旗舰产品矩阵", flagshipTitle: "一条产品线，覆盖多种安全场景。", flagshipText: "从迷你警示灯、工作灯，到安全信标和道路应急灯，帮助客户快速搭建市场产品组合。", prestige1: "现代化生产基地", prestige2: "核心制造模块", prestige3: "专业生产人员", prestige4: "质量体系与出口认证支持", metricFactory: "现代化工厂", metricTeam: "专业团队", metricService: "全链路定制", metricExport: "全球交付",
    floatingLabel: "实力工厂", floatingText: "注塑 · 模具 · 装配 · 质检", strip1: "全球供应", strip2: "品质稳定", strip3: "价格有竞争力", strip4: "支持批量订单", strip5: "响应快速",
    productsEyebrow: "主营产品线", productsTitle: "警示灯为主，兼顾工作灯与户外照明。", productsText: "首页产品区优先展示道路 LED 警示灯、磁吸安全信标和应急警示灯，工作灯、太阳能灯和露营灯作为补充系列穿插展示。",
    collectionsEyebrow: "核心产品系列", collectionsTitle: "先看警示灯，再扩展户外照明。", collectionsText: "核心仍是 HENGBO 警示灯和安全信标，XG 太阳能、露营、安防照明作为补充产品线。", collectionWarningTitle: "道路警示灯", collectionWarningText: "多模式 LED 警示灯，适合道路救援、车辆应急包和零售套装。", collectionBeaconTitle: "安全警示信标", collectionBeaconText: "磁吸信标、红蓝警示灯，适合车辆、工程和应急现场。", collectionSolarTitle: "太阳能工程照明", collectionSolarText: "投光灯、壁挂灯、庭院灯，适合庭院、农场和工程供货。", collectionCampingTitle: "露营与氛围灯", collectionCampingText: "便携露营灯与氛围灯，适合户外零售和季节性项目。", collectionSecurityTitle: "安防警示灯", collectionSecurityText: "仿真摄像头警示灯，适合周界警示、店铺和庭院安防。", collectionWorkTitle: "便携工作灯系列", collectionWorkText: "充电工作灯和应急灯，适用于维修、车库和工地场景。", collectionCta: "查看系列",
    factoryEyebrow: "制造实力", factoryTitle: "端到端生产能力，服务全球品牌。", factoryText: "我们将生产制造与出口服务整合：注塑、精密模具、装配线、包装仓储和专职质检在 ISO9001 质量管理体系要求下协同运行。",
    cap1: "先进注塑", cap2: "精密模具车间", cap3: "标准化装配", cap4: "环保包装", cap5: "专职质量控制", cap6: "可扩展产能",
    customEyebrow: "OEM/ODM 定制", customTitle: "从想法到品牌成品，一个团队全程负责。",
    qualityEyebrow: "质量与服务", qualityTitle: "围绕 ISO9001 质量管理体系，保障稳定出口订单。", qualityText: "我们按照 ISO9001 质量管理体系思路建立日常生产流程，从来料、制程、功能测试到出货抽检均设置记录和检查节点。", qualityIso: "以过程管理保障品质一致", qualityStages: "来料、制程、成品分阶段检验", qualityAql: "出货前按订单要求抽检",
    qualityFlowEyebrow: "质量交付路径", qualityFlowTitle: "从订单评审到出货，每一步都有对应检查节点。", qualityFlow1: "来料核验", qualityFlow2: "装配巡检", qualityFlow3: "功能测试", qualityFlow4: "包装与出货检查", qualityFlowNote: "清晰的检验记录与按订单要求抽检，帮助专业买家降低复购风险。", showroomEyebrow: "多场景适配", showroomTitle: "道路安全 · 骑行户外 · 应急警示 · 便携工具",
    contactEyebrow: "开启项目", contactTitle: "告诉我们市场、数量和定制需求。", contactText: "我们会根据目标市场提供产品推荐、包装方案、交期和报价。", buyerFitEyebrow: "我们服务哪些买家", buyerFitTitle: "适合需要稳定警示灯供货的买家，而不是只看一次图片。", buyerFitText: "如果您正在做道路安全产品线、车辆应急套装、零售警示灯系列或 OEM 包装项目，HENGBO 可以帮助您更快比较型号、确认样品并准备工厂报价信息。", buyerFit1Title: "进口商与经销商", buyerFit1Text: "需要稳定警示灯供货、混合型号组合和长期复购支持。", buyerFit2Title: "应急套装品牌", buyerFit2Text: "需要电池款警示灯、充电款警示灯和安全套装包装。", buyerFit3Title: "OEM / 贴牌客户", buyerFit3Text: "需要 LOGO、彩盒、说明书和适合目标市场的产品组合。", buyerFit4Title: "车辆与项目采购", buyerFit4Text: "需要磁吸信标、道路警示灯和工作灯补充产品。", rfqLabel: "为了更快报价，请发送：", rfqModels: "目标型号", rfqQty: "采购数量", rfqMarket: "目标市场", rfqPack: "LOGO / 包装需求", rfqMiniTitle: "建议询盘格式：", rfqMiniText: "型号 + 数量 + 市场 + OEM 包装 + 期望交期。", bundleEyebrow: "热门采购组合", bundleTitle: "从成熟警示灯组合开始询价。", bundleText: "新买家先做混合型号报价，可以降低选品风险，也方便批量 OEM 订单前测试市场。", bundle1Tag: "道路应急包", bundle1Title: "车辆应急套装", bundle1Text: "电池款警示灯适合汽车应急包、零售套装和安全库存。", bundle2Tag: "充电款系列", bundle2Title: "可重复使用警示灯", bundle2Text: "充电款警示灯适合经销商和重复使用安全产品线。", bundle3Tag: "车辆 / 救援", bundle3Title: "磁吸信标组合", bundle3Text: "磁吸警示灯适合服务车辆、拖车救援和工程现场。", bundle4Tag: "零售补充", bundle4Title: "警示灯搭配工作灯", bundle4Text: "在安全产品订单中加入精选工作灯，但主线仍然保持警示灯。", orderFlowEyebrow: "样品到出货", orderFlowTitle: "从样品确认到长期供货，流程清楚。", orderFlowText: "买家可以先从样品或混合套装开始，再确认包装、质检和出货细节，最后进入批量生产。", orderStep1Title: "选择型号", orderStep1Text: "确认目标型号、市场用途，以及电池款或充电款版本。", orderStep2Title: "样品测试", orderStep2Text: "测试亮度、模式、磁吸、包装和零售要求。", orderStep3Title: "OEM 包装", orderStep3Text: "确认 LOGO、彩盒、说明书、条码和外箱唛头。", orderStep4Title: "批量生产", orderStep4Text: "安排物料、装配、功能检查和订单进度沟通。", orderStep5Title: "质检出货", orderStep5Text: "出货或货代提货前检查包装、数量和相关文件。",
    certEyebrow: "合规文件", certTitle: "面向专业买家的认证资料支持。", certText: "我们为进口商、经销商和项目采购提供部分第三方文件用于初步审核，包含照明产品系列相关的 ISO9001、CE/EMC、FCC、RoHS 文件。", certNote: "文件仅供买家参考，具体适用要求会因型号、市场和订单规格而不同。", certIso: "照明灯具生产范围的质量管理体系证书", certCe: "电磁兼容文件", certFcc: "FCC 符合性文件", certRohs: "有害物质限制文件", certOpen: "查看 PDF",
    formName: "您的姓名", formEmail: "邮箱 / WhatsApp", formProduct: "感兴趣的产品", formMessage: "数量、LOGO、包装、目标市场", formSubmit: "发送询盘", formNote: "提交后会打开您的邮件应用，并自动带入所选收件人和询盘内容。", sales1: "Sam", sales2: "Peter", sales3: "Bao", sales4: "Charon Wang", recipient1: "Sam - 19858215314@163.com", recipient2: "Peter - cyanpeter@hotmail.com", recipient3: "Bao - bshong@126.com", recipient4: "Charon Wang - 15356476616@163.com", recipientAll: "发送给 Sam / Peter / Bao / Charon Wang", footerText: "便携照明与安全警示产品的工贸一体合作伙伴。", searchProducts: "搜索型号或产品", filterAll: "全部", filterWork: "工作灯", filterWarning: "警示灯", filterBeacon: "警示信标", filterSolar: "太阳能灯", filterCamping: "露营灯", filterSecurity: "安防灯", floatingInquiry: "快速询盘", backTop: "返回顶部", moreProducts: "更多产品", lessProducts: "收起产品", customBadge: "OEM / ODM", customLogo: "定制 LOGO", customLogoText: "产品印制您的品牌", customPack: "定制包装", customPackText: "适合零售渠道的彩盒", productCta: "查看详情", productQuickQuote: "快速询价", pathEyebrow: "警示灯采购引导", pathTitle: "让买家按用途选择，而不是只看型号。", pathText: "道路应急包、充电款项目、车辆信标和工作灯补充款放在一起，让警示灯保持主角，同时自然穿插相关产品。", pathKitLabel: "道路应急包", pathKitTitle: "适合应急套装的电池款警示灯", pathKitText: "HB-362 和 HB-363 适合汽车应急包、零售套装和便携安全组合。", pathRechargeLabel: "充电款项目", pathRechargeTitle: "可重复使用的警示灯系列", pathRechargeText: "HB-363C 适合偏好 USB 充电和重复使用安全产品的买家。", pathBeaconLabel: "车辆 / 救援", pathBeaconTitle: "适合服务车辆的磁吸警示灯", pathBeaconText: "HB-329 和 HB-361 适合道路救援、拖车和工程车辆警示。", pathAddonLabel: "补充产品", pathAddonTitle: "工作灯穿插到安全产品订单中", pathAddonText: "工作灯只作为辅助产品穿插展示，让页面不单调，但主线仍然是警示灯。", pathViewWarning: "查看警示灯系列", tierEyebrow: "采购价格矩阵", tierTitle: "三个产品层级，让买家更快做选择。", tierText: "入门款承接价格敏感询盘，核心款主攻日常订单，高阶款负责提升安全产品线价值感。", tierEntryLabel: "入门 / 试单", tierEntryTitle: "适合首单的低成本警示灯", tierEntryText: "用小型电池款承接预算型客户和样品包需求，不用拉低整条产品线的价格。", tierCoreLabel: "核心 / 主推", tierCoreTitle: "用于批发竞争的主力警示灯", tierCoreText: "这些型号最符合道路安全常见需求，应重点优化 SEO、报价、图片和询盘引导。", tierPremiumLabel: "高阶 / 锚定", tierPremiumTitle: "面向认真买家的高价值选项", tierPremiumText: "充电款、信标和套装型产品能提升工厂实力感，也给高利润订单留出空间。", modalInquiry: "咨询此产品", modalSupport: "支持 OEM/ODM、包装方案和 24 小时内报价沟通。", categoryWork: "工作灯", categoryWarning: "警示灯", categoryBeacon: "信标", categorySolar: "太阳能灯", categoryCamping: "露营灯", categorySecurity: "安防灯", tagNew: "新品", tagHot: "热卖", tagWarning: "警示", tagBeacon: "信标", tagRechargeable: "充电款", tagBattery: "电池款", tagWork: "工作灯", tagSolar: "太阳能", tagSecurity: "安防", tagCamping: "露营", tagOem: "可贴牌", tagExtended: "扩展系列", modalVersion: "版本", modalApplication: "适用场景", modalOem: "OEM/ODM", modalOemValue: "支持 LOGO、彩盒和出口包装定制", applicationWarning: "道路救援、车辆应急包和安全警示场景", applicationBeacon: "车辆安全、工程现场和应急高可见度警示", applicationWork: "检修、车库、工地和随车照明", applicationSolar: "庭院、农场、户外工程和项目供货", applicationSecurity: "周界警示、店铺和庭院安防", applicationCamping: "露营、户外休闲和应急备用", newSeriesEyebrow: "新品警示灯系列", newSeriesTitle: "新款橙色道路安全警示灯。", newSeriesText: "HB-362 电池款安全警示灯，以及 HB-363 充电款 / 电池款警示灯，支持样品、批发订单和 OEM 包装。", newSeriesPoint1: "磁吸背面", newSeriesPoint2: "车辆应急", newSeriesPoint3: "支持贴牌", newSeries362: "电池安全警示灯", newSeriesRechargeable: "充电款", newSeriesBattery: "电池款", quickWhatsApp: "WhatsApp 报价", quickEmail: "邮件联系", floatWhatsApp: "WhatsApp", floatEmail: "邮箱", modalWhatsapp: "WhatsApp 询价", applicationsEyebrow: "应用场景", applicationsTitle: "不同型号警示灯穿插展示真实道路、车辆和救援场景。", applicationsText: "这里不只放一个产品：HB-362 道路警示灯、HB-329 磁吸信标、HB-331 三角警示灯、HB-361 红蓝警示灯分开展示，方便买家快速理解用途。", appRoadLabel: "HB-362 道路应急", appRoadTitle: "雨夜道路高可见度", appRoadText: "橙色警示灯可在夜间车辆后方快速划出安全警示区域。", appVehicleLabel: "HB-329 磁吸信标", appVehicleTitle: "车辆侧面磁吸警示", appVehicleText: "HB-329 等磁吸警示灯适合车辆、工程和随车安全场景。", appWorksiteLabel: "HB-331 三角警示", appWorksiteTitle: "临时作业区域警示", appWorksiteText: "HB-330 / HB-331 系列适合施工现场、护栏和临时车道警示。", appRescueLabel: "HB-361 红蓝警示", appRescueTitle: "拖车救援红蓝警示", appRescueText: "HB-361 红蓝警示灯适合拖车、救援、户外应急等场景。", trustEyebrow: "为什么买家选择 HENGBO", trustTitle: "警示灯订单的工厂供应与外贸服务。", trust1Title: "工厂直供", trust1Text: "自有生产更容易控制价格、交期和复购稳定性。", trust2Title: "OEM / ODM 包装", trust2Text: "支持 LOGO、彩盒、说明书和零售警示灯套装。", trust3Title: "样品支持", trust3Text: "针对 HB-362、HB-363 和核心警示灯型号快速沟通样品。", trust4Title: "质量检验", trust4Text: "出货前进行来料、装配、功能和包装检查。", trust5Title: "外贸服务团队", trust5Text: "产品推荐、报价、包装和出货信息一条流程跟进。", trust6Title: "试单与批量订单", trust6Text: "支持试单、样品组合、批发项目和长期供货计划。", faqEyebrow: "常见问题", faqTitle: "警示灯买家常问问题。", faq1Q: "可以定制 LOGO 和包装吗？", faq1A: "可以。我们支持 LOGO 印制、彩盒设计、说明书和适合零售的 OEM/ODM 包装。", faq2Q: "批量订单前可以拿样品吗？", faq2A: "可以。请发送目标型号、数量和市场，我们会确认样品方案和交期。", faq3Q: "有充电款和电池款警示灯吗？", faq3A: "有。HB-363C 是充电款，HB-362 和 HB-363 电池款是电池款警示灯。", faq4Q: "可以提供哪些认证文件？", faq4A: "部分产品系列可提供 CE、RoHS、FCC 等相关文件供买家审核。", faq5Q: "报价需要提供什么信息？", faq5A: "请提供型号、数量、LOGO 或包装需求、目标市场和期望交期。", faq6Q: "支持小批量试单吗？", faq6A: "可根据型号和包装要求沟通试单、样品组合和批发项目。", seoProductEyebrow: "产品详情页", seoProductTitle: "面向海外买家的核心警示灯详情页", seoProductText: "这些独立英文页面用于给搜索引擎收录，也方便海外买家查看每个型号的用途、规格和 OEM 选项。", seoLink327: "HB-327 迷你警示灯", seoLink328: "HB-328 道路警示灯", seoLink330: "HB-330 三角警示灯", seoLink362: "HB-362 安全警示灯", seoLink363C: "HB-363C 充电款", seoLink363: "HB-363 电池款", seoLink329: "HB-329 磁吸信标", seoLink331: "HB-331 三角警示灯", seoLink361: "HB-361 应急警示灯", seoViewCatalog: "查看产品详情目录", routeEyebrow: "买家导航", routeTitle: "先看核心警示灯，再搭配合适的补充产品。", routeText: "这里不再一次性堆满所有型号，而是按采购目的引导买家：核心警示灯、补充便携照明和买家搜索页面。", routeCoreLabel: "核心警示灯", routeCoreTitle: "道路安全主力型号", routeCoreText: "适合应急套装、道路救援、车辆可视警示和警示灯批发订单。", routeAddonLabel: "补充照明", routeAddonTitle: "头灯和工作灯", routeAddonText: "给同时需要户外、检修和应急备用照明的买家作为补充产品。", routeSearchLabel: "买家搜索页", routeSearchTitle: "工厂、OEM 和选型指南", routeSearchText: "适合买家在询盘前比较供应商、OEM 包装和型号选择。", sourcingEyebrow: "买家搜索页", sourcingTitle: "覆盖厂家、道路应急和 OEM 批发关键词页面。", sourcingText: "这些英文落地页用于匹配海外买家的搜索方式：工厂供货、道路应急应用和贴牌批发警示灯。", sourcingManufacturer: "LED 警示灯厂家", sourcingRoadside: "道路应急警示灯供应商", sourcingOem: "OEM 安全警示灯批发", sourcingRoadFlare: "LED 道路警示灯批发", sourcingVehicleEmergency: "车辆应急警示灯", sourcingMagneticBeacon: "磁吸安全警示灯", sourcingGuide: "如何选择警示灯", sourcingWorkLight: "充电工作灯供应商", sourcingHeadlamp: "户外头灯批发", sourcingViewPages: "查看买家搜索页", thanks: "感谢咨询，我们会尽快联系您。"
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

translations.en.formIntroEyebrow = "FAST FACTORY QUOTE";
translations.en.formIntroTitle = "Tell us what you need";
translations.en.formIntroText = "Choose a model and share quantity, market and packaging needs. We will prepare the next quotation step.";
translations.zh.formIntroEyebrow = "快速获取工厂报价";
translations.zh.formIntroTitle = "告诉我们你的采购需求";
translations.zh.formIntroText = "选择型号并填写数量、市场和包装需求，我们会据此准备下一步报价信息。";

Object.assign(translations.en, {
  corePriority: "Priority model", coreConfirm: "Confirm by model", coreLogoPack: "Logo / color box", coreCertLabel: "Cert.", coreDetails: "View product page", coreQuote: "Request quote",
  coreCard1Title: "Battery Safety Flare", coreCard1Text: "Roadside rescue kits and retail safety packs.",
  coreCard2Title: "Rechargeable Road Warning Light", coreCard2Text: "Reusable vehicle emergency programs and distributors.",
  coreCard3Title: "Magnetic Safety Beacon", coreCard3Text: "Service vehicles, towing and roadside visibility.",
  coreCard4Title: "Battery Road Warning Light", coreCard4Text: "Portable warning kits and backup inventory.",
  coreCard5Title: "Triangle Work Warning Light", coreCard5Text: "Construction zones, temporary lanes and barriers.",
  coreCard6Title: "Red-Blue Emergency Beacon", coreCard6Text: "Towing, rescue and emergency response programs.",
  proofEyebrow: "Factory proof for procurement", proofTitle: "Specific information buyers need before requesting a quote.", proofText: "The current product records give buyers a concrete starting point for MOQ, lead time, packing and documentation review.",
  proofMoqTitle: "MOQ", proofMoqText: "HB-328 and the new HB-330 / HB-331 product records show 100 PCS; confirm the final version and packing plan.", proofLeadTitle: "Lead time", proofLeadText: "The new HB-330 / HB-331 product records show 1–7 days; confirm after quantity, sample and packaging review.", proofOemTitle: "OEM", proofOemText: "The new triangle models use white-box packing; logo, color box and carton marks can be discussed.", proofCertTitle: "Certificates", proofCertText: "The current product records list CE / RoHS / FCC; provide the final file set by model.", proofShipmentTitle: "Shipment", proofShipmentText: "The new HB-330 / HB-331 product records show 100 PCS per carton; confirm the final carton plan.", proofDocsEyebrow: "Document previews", proofDocsText: "Open the available files for initial buyer review.", proofDocQuality: "Quality management", proofDocCe: "Electromagnetic compatibility", proofDocFcc: "Supplier declaration", proofDocRohs: "Restricted substances",
  oemFlowEyebrow: "OEM flow", oemFlowTitle: "One clear path from model selection to shipment.", oemFlowText: "Share the target model, market and packaging plan. HENGBO coordinates samples, artwork, production and delivery details.",
  oemStep1Title: "Select", oemStep1Text: "Choose the model and version.", oemStep2Title: "Sample", oemStep2Text: "Confirm function and application.", oemStep3Title: "Packaging", oemStep3Text: "Approve logo, box and carton marks.", oemStep4Title: "Production", oemStep4Text: "Arrange assembly and inspection.", oemStep5Title: "Shipment", oemStep5Text: "Check packing and hand off to the forwarder.",
  appRetailLabel: "Retail / Wholesale", appRetailTitle: "Build market-ready safety kits", appRetailText: "Mix core warning lights, packaging and supporting products for retail packs and distributor programs.",
  formQuantity: "Target quantity", formMarket: "Destination market", formPackaging: "Packaging / OEM need", formDelivery: "Target delivery time", packStandard: "Standard packaging", packLogo: "Logo / color box", packMixed: "Mixed retail kit", packConfirm: "To be confirmed"
});

Object.assign(translations.zh, {
  corePriority: "重点型号", coreConfirm: "按型号确认", coreLogoPack: "Logo / 彩盒", coreCertLabel: "认证", coreDetails: "查看产品页", coreQuote: "获取报价",
  coreCard1Title: "电池式安全警示灯", coreCard1Text: "适合道路救援包和零售安全套装。",
  coreCard2Title: "充电式道路警示灯", coreCard2Text: "适合车辆应急项目和经销商采购。",
  coreCard3Title: "磁吸安全信标灯", coreCard3Text: "适合服务车辆、拖车救援和道路警示。",
  coreCard4Title: "电池式道路警示灯", coreCard4Text: "适合便携警示套装和备用库存。",
  coreCard5Title: "三角施工警示灯", coreCard5Text: "适合施工区域、临时车道和围挡。",
  coreCard6Title: "红蓝应急信标灯", coreCard6Text: "适合拖车、救援和应急响应项目。",
  proofEyebrow: "采购所需的工厂证据", proofTitle: "报价前，先把采购关心的信息说清楚。", proofText: "当前产品资料已给出 MOQ、交期、包装和认证资料的具体采购起点，最终按型号确认。",
  proofMoqTitle: "起订量", proofMoqText: "HB-328 及标注为新品的 HB-330 / HB-331 资料均为 100 PCS，最终按版本和包装确认。", proofLeadTitle: "交期", proofLeadText: "标注为新品的 HB-330 / HB-331 资料显示 1–7 天，确认数量、样品和包装需求后锁定。", proofOemTitle: "OEM", proofOemText: "新款三角警示灯为白盒包装，可沟通 Logo、彩盒和外箱唛头。", proofCertTitle: "认证资料", proofCertText: "当前产品资料列有 CE / RoHS / FCC，最终按型号提供文件。", proofShipmentTitle: "出货", proofShipmentText: "标注为新品的 HB-330 / HB-331 资料显示 100 PCS/箱，最终按版本确认外箱方案。", proofDocsEyebrow: "认证文件预览", proofDocsText: "点击查看可提供的文件，供买家初步审核。", proofDocQuality: "质量管理体系", proofDocCe: "电磁兼容文件", proofDocFcc: "供应商符合性声明", proofDocRohs: "有害物质限制文件",
  oemFlowEyebrow: "OEM 流程", oemFlowTitle: "从选型到出货，一条清晰的采购路径。", oemFlowText: "告诉我们型号、市场和包装方案，恒博统一协调打样、设计、生产和出货细节。",
  oemStep1Title: "选型", oemStep1Text: "确认型号和版本。", oemStep2Title: "打样", oemStep2Text: "确认功能和应用场景。", oemStep3Title: "包装", oemStep3Text: "确认 Logo、彩盒和外箱唛头。", oemStep4Title: "量产", oemStep4Text: "安排生产组装和过程检验。", oemStep5Title: "出货", oemStep5Text: "核对包装并完成货代交接。",
  appRetailLabel: "批发 / 零售", appRetailTitle: "组合成适合市场销售的安全套装", appRetailText: "围绕主推警示灯组合包装与配套产品，适合零售套装和经销商项目。",
  formQuantity: "目标采购数量", formMarket: "目标市场", formPackaging: "包装 / OEM 需求", formDelivery: "期望交期", packStandard: "标准包装", packLogo: "Logo / 彩盒", packMixed: "混合零售套装", packConfirm: "待确认"
});

Object.assign(translations.en, {
  topBestSeller: "HB-328 Best Seller", topNewSeries: "HB-330 / HB-331 New Series", topVersions: "Battery / Rechargeable Versions", topOem: "OEM / ODM Packaging",
  eyebrow: "Road Safety Warning Light Factory", heroTitle: "HB-328 bestseller. New HB-330 / HB-331 warning light series.", heroText: "HENGBO supplies proven HB-328 road warning lights and new triangle warning light families with battery, rechargeable and OEM packaging options.", explore: "View Core Warning Lights", customize: "Get a Factory Quote", heroWarning: "HB-328 Bestseller", heroWarningText: "Stable road warning light", heroBeacon: "HB-330 / HB-330C", heroBeaconText: "Battery / rechargeable", heroWork: "HB-331 / HB-331C", heroWorkText: "New triangle warning light", heroSourcingLabel: "Core inquiry models",
  metricFactory: "Proven bestseller", metricTeam: "New triangle series", metricService: "Battery / rechargeable", metricExport: "Packaging support",
  productsEyebrow: "Core Warning Light Series", productsTitle: "Three warning light families, clear version choices.", productsText: "Start with the proven HB-328 bestseller, then compare the new HB-330 and HB-331 triangle warning light series by battery or rechargeable version.",
  coreBestSeller: "Best seller", coreNewSeries: "New series", coreSupporting: "Supporting model", coreVersionLabel: "Version", coreBatteryLabel: "Battery", coreRechargeableLabel: "Rechargeable",
  coreCard1Title: "LED Road Warning Light", coreCard1Text: "Mature bestseller for roadside kits, retail and repeat wholesale orders.", coreCard2Title: "Triangle Warning Light · Battery", coreCard2Text: "New battery version for emergency kits, road work and retail packs.", coreCard3Title: "Triangle Warning Light · Rechargeable", coreCard3Text: "Type-C rechargeable version for repeat-use safety programs.", coreCard4Title: "Triangle Warning Light · Battery", coreCard4Text: "New battery version for work zones, temporary lanes and barriers.", coreCard5Title: "Triangle Warning Light · Rechargeable", coreCard5Text: "Type-C rechargeable version for construction and repeat-use programs.", coreCard6Title: "Magnetic Safety Beacon", coreCard6Text: "Supporting beacon for service vehicles, towing and roadside visibility.",
  versionBattery: "Battery version", versionRechargeable: "Rechargeable version",
  applicationsTitle: "See the warning light line in real buyer situations.", applicationsText: "HB-328 covers mature roadside demand, while HB-330 and HB-331 serve triangle warning, work-zone and retail programs.", appRoadLabel: "HB-328 Roadside", appRoadTitle: "Proven visibility for roadside kits", appRoadText: "HB-328 is a dependable starting model for vehicle emergency kits, roadside safety and repeat wholesale orders.", appVehicleLabel: "HB-330 / HB-330C", appVehicleTitle: "Choose battery or rechargeable", appVehicleText: "The HB-330 family lets buyers select a 3 x AAA battery version or a Type-C rechargeable version.", appWorksiteLabel: "HB-331 / HB-331C", appWorksiteTitle: "Triangle warning for work zones", appWorksiteText: "The HB-331 family fits construction areas, temporary lanes and buyers who need battery or rechargeable supply.",
  trust3Title: "Sample support", trust3Text: "Compare HB-328 with the new HB-330 / HB-331 battery and rechargeable versions before bulk ordering.", faq3Q: "Do you have battery and rechargeable versions?", faq3A: "Yes. HB-330C and HB-331C are rechargeable versions, while HB-330 and HB-331 are battery versions. HB-328 is the mature bestseller road warning light."
});

Object.assign(translations.zh, {
  topBestSeller: "HB-328 爆款", topNewSeries: "HB-330 / HB-331 新品系列", topVersions: "电池款 / 充电款", topOem: "OEM / ODM 包装",
  eyebrow: "道路安全警示灯工厂", heroTitle: "HB-328 成熟爆款，HB-330 / HB-331 新品系列。", heroText: "恒博供应成熟的 HB-328 道路警示灯，以及 HB-330 / HB-331 电池款、充电款和 OEM 包装方案。", explore: "查看核心警示灯", customize: "获取工厂报价", heroWarning: "HB-328 爆款", heroWarningText: "成熟道路警示灯", heroBeacon: "HB-330 / HB-330C", heroBeaconText: "电池款 / 充电款", heroWork: "HB-331 / HB-331C", heroWorkText: "新款三角警示灯", heroSourcingLabel: "核心询盘型号",
  metricFactory: "成熟爆款", metricTeam: "三角新品系列", metricService: "电池 / 充电版本", metricExport: "支持定制包装",
  productsEyebrow: "核心警示灯系列", productsTitle: "三条产品线，电池款和充电款清晰可选。", productsText: "先看成熟爆款 HB-328，再对比 HB-330 和 HB-331 三角警示灯系列的电池款与充电款。",
  coreBestSeller: "成熟爆款", coreNewSeries: "新品系列", coreSupporting: "配套型号", coreVersionLabel: "版本", coreBatteryLabel: "电池款", coreRechargeableLabel: "充电款",
  coreCard1Title: "LED 道路警示灯", coreCard1Text: "适合道路应急包、零售和长期批发补货的成熟爆款。", coreCard2Title: "三角道路警示灯 · 电池款", coreCard2Text: "适合应急包、道路施工和零售套装的新款电池版本。", coreCard3Title: "三角道路警示灯 · 充电款", coreCard3Text: "适合重复使用安全项目的 Type-C 充电版本。", coreCard4Title: "三角工作警示灯 · 电池款", coreCard4Text: "适合施工区域、临时车道和围挡的新款电池版本。", coreCard5Title: "三角工作警示灯 · 充电款", coreCard5Text: "适合施工和重复使用项目的 Type-C 充电版本。", coreCard6Title: "磁吸安全信标灯", coreCard6Text: "适合服务车辆、拖车救援和道路警示的配套型号。",
  versionBattery: "电池款", versionRechargeable: "充电款",
  applicationsTitle: "在真实采购场景中理解警示灯产品线。", applicationsText: "HB-328 承接成熟道路警示需求，HB-330 和 HB-331 面向三角警示、施工区域和零售项目。", appRoadLabel: "HB-328 道路应急", appRoadTitle: "成熟爆款适合道路应急包", appRoadText: "HB-328 适合车辆应急包、道路安全和长期批发补货，是稳定的起步型号。", appVehicleLabel: "HB-330 / HB-330C", appVehicleTitle: "电池款和充电款可选", appVehicleText: "HB-330 系列可选择 3 节 AAA 电池款或 Type-C 充电款。", appWorksiteLabel: "HB-331 / HB-331C", appWorksiteTitle: "施工区域的三角警示", appWorksiteText: "HB-331 系列适合施工区域、临时车道，以及需要电池款或充电款的采购项目。",
  trust3Title: "样品支持", trust3Text: "批量采购前，可对比 HB-328 与 HB-330 / HB-331 的电池款和充电款。", faq3Q: "有电池款和充电款吗？", faq3A: "有。HB-330C 和 HB-331C 是充电款，HB-330 和 HB-331 是电池款；HB-328 是成熟爆款道路警示灯。"
});

Object.assign(translations.en, {
  eyebrow: "Portable Lighting & Safety Warning Products", heroTitle: "Portable lighting and safety warning products for global buyers.", heroText: "OEM/ODM manufacturing from tooling to finished product, led by the proven HB-328 bestseller and new HB-330 / HB-331 warning light series.", explore: "View Products", customize: "Start an OEM Project", productsEyebrow: "Product Lines", productsTitle: "Portable lighting and safety warning products for wholesale and OEM.", productsText: "Start with the proven HB-328 bestseller, compare the new HB-330 / HB-330C and HB-331 / HB-331C series, then extend your range with portable work lights.",
  templateUseLabel: "Use", templateRoadside: "Roadside safety", templateWorksite: "Work zones", templateWorkUse: "Repair / outdoor", templateWorkVersion: "Rechargeable",
  template330Title: "Triangle Warning Light Series", template330Text: "A new triangle warning light line with a battery version and a Type-C rechargeable version.",
  template331Title: "Triangle Warning Light Series", template331Text: "A new triangle warning light line for work zones, temporary lanes and repeat-use safety programs.",
  templateWorkTitle: "Magnetic Hook Work Light", templateWorkText: "Portable work lights and headlamps extend the safety range for repair, vehicle and outdoor programs.",
  templateVersionTitle: "Version rule", templateVersionText: "No C = battery version · C = Type-C rechargeable version.",
  templateProcessEyebrow: "From Tooling To Delivery", templateProcessTitle: "One accountable team from tooling to finished product.", templateProcessText: "Injection molding, precision tooling, standardized assembly and quality control are organized for stable OEM and wholesale supply.",
  templateCapability1: "Injection Molding", templateCapability2: "Precision Tooling", templateCapability3: "Standardized Assembly", templateCapability4: "Quality Control & Packaging",
  templateStep1: "Inquiry", templateStep2: "Sampling", templateStep3: "Customization", templateStep4: "Mass Production", templateStep5: "Quality Check", templateStep6: "Delivery"
});

Object.assign(translations.zh, {
  eyebrow: "便携照明与安全警示产品", heroTitle: "面向全球采购商的便携照明与安全警示产品。", heroText: "从模具开发到成品交付，围绕 HB-328 成熟爆款和 HB-330 / HB-331 新品系列提供 OEM/ODM 制造支持。", explore: "查看产品", customize: "启动 OEM 项目", productsEyebrow: "产品线", productsTitle: "面向批发与 OEM 的便携照明和安全警示产品。", productsText: "从 HB-328 成熟爆款开始，对比 HB-330 / HB-330C 与 HB-331 / HB-331C 新品系列，再扩展便携工作灯产品线。",
  templateUseLabel: "适用场景", templateRoadside: "道路安全", templateWorksite: "施工区域", templateWorkUse: "维修 / 户外", templateWorkVersion: "充电款",
  template330Title: "三角警示灯系列", template330Text: "HB-330 新品系列，提供电池款和 Type-C 充电款。",
  template331Title: "三角警示灯系列", template331Text: "适合施工区域、临时车道和重复使用安全项目。",
  templateWorkTitle: "磁吸挂钩工作灯", templateWorkText: "便携工作灯和头灯作为配套产品，覆盖维修、车辆和户外照明场景。",
  templateVersionTitle: "版本规则", templateVersionText: "不带 C = 电池款 · 带 C = Type-C 充电款。",
  templateProcessEyebrow: "从模具到交付", templateProcessTitle: "从模具开发到成品交付，由一支团队负责。", templateProcessText: "注塑、精密模具、标准化装配和质量控制，为 OEM 与批发采购提供稳定支持。",
  templateCapability1: "注塑成型", templateCapability2: "精密模具", templateCapability3: "标准化装配", templateCapability4: "质量控制与包装",
  templateStep1: "询盘", templateStep2: "打样", templateStep3: "定制", templateStep4: "量产", templateStep5: "质量检查", templateStep6: "交付"
});

const fallback = translations.en;
let currentLang = "en";
let activeFilter = "all";
let searchTerm = "";
let selectedModalProduct = "";
const inquiryEmails = ["19858215314@163.com", "cyanpeter@hotmail.com", "bshong@126.com", "15356476616@163.com"];

const collectionCards = [
  { filter: "warning", model: "HB-328", title: "collectionWarningTitle", text: "collectionWarningText" },
  { filter: "beacon", model: "HB-329", title: "collectionBeaconTitle", text: "collectionBeaconText" },
  { filter: "work", model: "HB-321", title: "collectionWorkTitle", text: "collectionWorkText" },
  { filter: "solar", model: "XG-T53-400W", title: "collectionSolarTitle", text: "collectionSolarText" }
];

const compareCopy = {
  en: {
    aria: "HB-362 and HB-363 warning light comparison",
    eyebrow: "Quick Compare",
    title: "Choose the right warning light version for your market.",
    text: "Compare HB-362, HB-363C and HB-363 before you request samples, mixed kits or OEM packaging. This makes it easier for buyers to decide between battery flare, rechargeable warning light and battery type warning light.",
    hb362Title: "Battery Safety Flare",
    hb362Text: "Best for roadside kits, emergency packs and multi-piece retail sets.",
    hb362Point1: "3 x AAA battery design",
    hb362Point2: "9 LED warning modes",
    hb363cTitle: "Rechargeable Road Warning Light",
    hb363cText: "Best for reusable vehicle safety programs and rechargeable product lines.",
    hb363cPoint1: "USB rechargeable version",
    hb363cPoint2: "Magnetic back for quick placement",
    hb363Title: "Battery Type Road Warning Light",
    hb363Text: "Best for portable warning kits, backup inventory and mixed quotation projects.",
    hb363Point1: "Battery powered warning light",
    hb363Point2: "Easy to quote with HB-363C",
    detailLink: "View detail page"
  },
  zh: {
    aria: "HB-362 与 HB-363 警示灯对比",
    eyebrow: "快速对比",
    title: "按市场需求快速选择合适的警示灯版本。",
    text: "在申请样品、组合套装或 OEM 包装前，先比较 HB-362、HB-363C 和 HB-363。这样海外买家更容易区分电池安全警示灯、充电款警示灯和电池款警示灯。",
    hb362Title: "电池安全警示灯",
    hb362Text: "更适合道路应急套装、车辆急救包和多件零售组合。",
    hb362Point1: "3 节 AAA 电池设计",
    hb362Point2: "9 种 LED 警示模式",
    hb363cTitle: "充电款道路警示灯",
    hb363cText: "更适合可重复使用的车辆安全项目和充电款产品线。",
    hb363cPoint1: "USB 充电版本",
    hb363cPoint2: "磁吸背面，方便快速固定",
    hb363Title: "电池款道路警示灯",
    hb363Text: "更适合便携警示套装、备用库存和组合报价项目。",
    hb363Point1: "电池供电警示灯",
    hb363Point2: "可与 HB-363C 搭配报价",
    detailLink: "查看详情页"
  }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function renderCompareSection() {
  const section = document.querySelector("[data-compare-section]");
  if (!section) return;
  const copy = compareCopy[currentLang] || compareCopy.en;
  section.setAttribute("aria-label", copy.aria);
  section.querySelectorAll("[data-compare]").forEach(el => {
    const key = el.dataset.compare;
    el.textContent = copy[key] || compareCopy.en[key] || el.textContent;
  });
}

function getSavedLanguage() {
  try {
    return localStorage.getItem("hb-lang");
  } catch {
    return null;
  }
}

function getRequestedLanguage() {
  const lang = new URLSearchParams(window.location.search).get("lang");
  return translations[lang] ? lang : null;
}

function saveLanguage(lang) {
  try {
    localStorage.setItem("hb-lang", lang);
  } catch {
    // Private browsing or strict privacy settings can block storage.
  }
}

const recipientLabels = {
  en: {
    recipient1: "Sam - 19858215314@163.com",
    recipient2: "Peter - cyanpeter@hotmail.com",
    recipient3: "Bao - bshong@126.com",
    recipient4: "Charon Wang - 15356476616@163.com",
    recipientAll: "Send to Sam / Peter / Bao / Charon Wang",
    formNote: "Submitting will open your email app with the selected recipient and inquiry content.",
    privacyNote: "We only use these details to reply to your inquiry.",
    privacyLink: "Privacy notice",
    formStatus: "Your email app should open with the inquiry details filled in.",
    sales1: "Sam",
    sales2: "Peter",
    sales3: "Bao",
    sales4: "Charon Wang"
  },
  zh: {
    recipient1: "Sam - 19858215314@163.com",
    recipient2: "Peter - cyanpeter@hotmail.com",
    recipient3: "Bao - bshong@126.com",
    recipient4: "Charon Wang - 15356476616@163.com",
    recipientAll: "发送给 Sam / Peter / Bao / Charon Wang",
    formNote: "提交后会打开您的邮箱应用，并自动带入所选收件人与询盘内容。",
    privacyNote: "我们仅使用这些信息回复您的询盘。",
    privacyLink: "隐私说明",
    formStatus: "您的邮箱应用将打开，并自动带入询盘内容。",
    sales1: "Sam",
    sales2: "Peter",
    sales3: "Bao",
    sales4: "Charon Wang"
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

function localizedDetail(value) {
  if (!value) return "";
  if (typeof value === "object") return value[currentLang] || value.en || value.zh || "";
  if (currentLang === "zh" && value === "Contact sales") return "联系销售";
  if (currentLang !== "zh" && value === "联系销售") return "Contact sales";
  return value;
}

function productCategory(item) {
  if (item.cat) return item.cat;
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
  if (category === "solar") return t("categorySolar");
  if (category === "camping") return t("categoryCamping");
  if (category === "security") return t("categorySecurity");
  return t("categoryWarning");
}

function productBadges(item) {
  const category = productCategory(item);
  const badges = [];
  if (item.model === "HB-362") badges.push(t("tagNew"), t("tagBattery"));
  if (item.model === "HB-363C") badges.push(t("tagNew"), t("tagRechargeable"));
  if (item.model === "HB-363") badges.push(t("tagNew"), t("tagBattery"));
  if (["Z-818", "Z-828", "Z-838"].includes(item.model)) badges.push(currentLang === "zh" ? "充电宝" : "Power Bank", t("tagRechargeable"));
  if (["HB-328", "HB-330", "HB-330C", "HB-331", "HB-331C"].includes(item.model)) badges.push(t("tagHot"));
  if (["HB-330", "HB-330C", "HB-331", "HB-331C"].includes(item.model)) badges.push(t("tagNew"));
  if (category === "warning") badges.push(t("tagWarning"));
  if (category === "beacon") badges.push(t("tagBeacon"));
  if (category === "work") badges.push(t("tagWork"));
  if (category === "solar") badges.push(t("tagSolar"));
  if (category === "security") badges.push(t("tagSecurity"));
  if (category === "camping") badges.push(t("tagCamping"));
  if (["K-351", "K-352", "K-353", "K-354", "K-361", "K-362", "K-363", "K-371", "K-372", "Z-818", "Z-828", "Z-838"].includes(item.model)) badges.push(t("tagNew"));
  if (item.model.startsWith("XG-") || item.model.startsWith("K-") || item.model.startsWith("Z-")) badges.push(t("tagExtended"));
  if (["HB-328", "HB-330", "HB-330C", "HB-331", "HB-331C", "HB-329"].includes(item.model)) badges.push(t("tagOem"));
  return [...new Set(badges)].slice(0, 3);
}

function productApplication(item) {
  const category = productCategory(item);
  if (category === "beacon") return t("applicationBeacon");
  if (category === "work") return t("applicationWork");
  if (category === "solar") return t("applicationSolar");
  if (category === "security") return t("applicationSecurity");
  if (category === "camping") return t("applicationCamping");
  return t("applicationWarning");
}

function productVersion(item) {
  if (item.model === "HB-328") return t("versionBattery");
  if (item.model === "HB-330" || item.model === "HB-331") return t("versionBattery");
  if (item.model === "HB-330C" || item.model === "HB-331C") return t("versionRechargeable");
  if (item.model === "HB-362") return t("newSeries362");
  if (item.model === "HB-363C") return t("newSeriesRechargeable");
  if (item.model === "HB-363") return t("newSeriesBattery");
  return productCategoryLabel(item);
}

const featuredProductOrder = [
  "HB-328", "HB-330", "HB-330C", "HB-331", "HB-331C", "HB-329",
  "HB-362", "HB-363C", "HB-363", "HB-327", "HB-361",
  "K-351", "K-352", "K-353", "K-354", "K-361", "K-362", "K-363", "K-371", "K-372",
  "Z-838", "Z-828", "Z-818", "XG-C8505-COB", "XG-152-COB",
  "XG-T31", "HB-325", "XG-T30", "HB-326",
  "XG-T53-400W", "XG-T28-SMD", "XG-T51", "XG-T28-COB",
  "XG-152-SMD", "XG-T8501-COB", "XG-T8502-SMD"
];

function productRank(item) {
  const featuredIndex = featuredProductOrder.indexOf(item.model);
  if (featuredIndex !== -1) return featuredIndex;
  const category = productCategory(item);
  const categoryOrder = { warning: 100, beacon: 110, work: 120, solar: 130, security: 140, camping: 150 };
  return (categoryOrder[category] ?? 190) + products.indexOf(item);
}

function updateProductToggle(total = products.length) {
  const grid = document.getElementById("productGrid");
  const toggle = document.getElementById("toggleProducts");
  const isExpanded = grid.classList.contains("show-all");
  toggle.style.display = total > 8 ? "inline-flex" : "none";
  toggle.textContent = isExpanded ? t("lessProducts") : t("moreProducts");
  toggle.setAttribute("aria-expanded", String(isExpanded));
}

function renderStaticLists() {
  const grid = document.getElementById("productGrid");
  const showAll = grid?.classList.contains("show-all");
  const filtered = products.filter(item => {
    const [name, desc] = localized(item);
    const haystack = `${item.model} ${name} ${desc} ${productCategoryLabel(item)}`.toLowerCase();
    const okSearch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
    const okFilter = activeFilter === "all" || productCategory(item) === activeFilter;
    return okSearch && okFilter;
  }).sort((a, b) => productRank(a) - productRank(b));
  grid.innerHTML = filtered.map((item, index) => {
    const [name, desc] = localized(item);
    const model = escapeHtml(item.model);
    const safeName = escapeHtml(name);
    const safeDesc = escapeHtml(desc);
    const category = escapeHtml(productCategoryLabel(item));
    const image = escapeHtml(item.img);
    const badges = productBadges(item).map(badge => `<span>${escapeHtml(badge)}</span>`).join("");
    const cardClass = `product-card reveal ${index >= 8 ? "is-extra" : ""} is-${escapeHtml(productCategory(item))} ${item.model.startsWith("HB-363") ? "is-new-series" : ""}`;
    return `
      <article class="${cardClass}" data-model="${model}" aria-label="${model} ${safeName}">
        <button class="product-hit" type="button" data-action="details" data-model="${model}">
          <div class="product-card-top">
            <div class="product-meta"><span>${model}</span><span>${category}</span></div>
            <div class="product-badges">${badges}</div>
            <img src="assets/${image}" alt="${safeName}" loading="${index < 4 ? "eager" : "lazy"}" decoding="async">
          </div>
          <div class="product-info"><h3>${safeName}</h3><p>${safeDesc}</p><span class="product-action">${escapeHtml(t("productCta"))}</span></div>
        </button>
        <div class="product-quick-row">
          <button type="button" data-action="details" data-model="${model}">${escapeHtml(t("productCta"))}</button>
          <button type="button" data-action="quote" data-model="${model}">${escapeHtml(t("productQuickQuote"))}</button>
        </div>
      </article>`;
  }).join("");
  if (showAll) grid.classList.add("show-all");
  updateProductToggle(filtered.length);

  document.getElementById("processList").innerHTML = process.map((item) => {
    const [title, text] = localized(item);
    return `
      <article class="process-step">
        <b>${escapeHtml(item.num)}</b><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div>
      </article>`;
  }).join("");

  document.getElementById("advantageGrid").innerHTML = advantages.map((item) => {
    const [title, text] = localized(item);
    return `
      <article class="advantage" data-mark="${escapeHtml(item.num)}">
        <b>${escapeHtml(item.num)}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p>
      </article>`;
  }).join("");

  document.querySelectorAll(".product-card [data-action]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const item = products.find(product => product.model === button.dataset.model);
      if (!item) return;
      if (button.dataset.action === "quote") {
        fillInquiryProduct(item);
        document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      openProductModal(item.model);
    });
  });
}

function renderCollections() {
  const grid = document.getElementById("collectionGrid");
  if (!grid) return;
  grid.innerHTML = collectionCards.map(card => {
    const item = products.find(product => product.model === card.model);
    if (!item) return "";
    const [name] = localized(item);
    return `
      <article class="collection-card" data-filter="${escapeHtml(card.filter)}">
        <div class="collection-image">
          <img src="assets/${escapeHtml(item.img)}" alt="${escapeHtml(name)}" loading="lazy" decoding="async">
        </div>
        <div class="collection-copy">
          <span>${escapeHtml(productCategoryLabel(item))}</span>
          <h3>${escapeHtml(t(card.title))}</h3>
          <p>${escapeHtml(t(card.text))}</p>
          <button class="btn glass" type="button" data-filter="${escapeHtml(card.filter)}">${escapeHtml(t("collectionCta"))}</button>
        </div>
      </article>`;
  }).join("");
  grid.querySelectorAll("button[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.filter);
      document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderProductOptions() {
  const select = document.getElementById("productInterest");
  const first = `<option value="" data-i18n="formProduct">${escapeHtml(t("formProduct"))}</option>`;
  select.innerHTML = first + [...products].sort((a, b) => productRank(a) - productRank(b)).map(item => {
    const [name] = localized(item);
    const label = `${item.model} - ${name}`;
    return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
  }).join("");
}

function bindWarningPathActions() {
  document.querySelectorAll(".warning-path-card button[data-model]").forEach(button => {
    button.addEventListener("click", () => openProductModal(button.dataset.model));
  });
  document.querySelectorAll(".warning-path-card button[data-filter-jump]").forEach(button => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.filterJump);
      document.getElementById("productGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSlides() {
  const slideModels = ["HB-328", "HB-327", "HB-329", "HB-361", "XG-T53-400W"];
  document.querySelectorAll(".slide").forEach((slide, index) => {
    const item = products.find(product => product.model === slideModels[index]) || products[index];
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
  selectedModalProduct = model;
  const [name, desc] = localized(item);
  const detail = productDetails[model] || {};
  document.getElementById("modalImage").src = `assets/${item.img}`;
  document.getElementById("modalImage").alt = name;
  document.getElementById("modalModel").textContent = model;
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modalBadges").innerHTML = productBadges(item)
    .map(badge => `<span>${escapeHtml(badge)}</span>`)
    .join("");
  const labels = currentLang === "zh"
    ? { spec: "产品解析", use: "适合采购场景", custom: "定制支持", sample: "样品建议", moq: "起订量", lead: "交货期", cert: "认证", packing: "装箱信息", note: "备注", price: "报价方式" }
    : { spec: "Product details", use: "Best for", custom: "Customization", sample: "Sample advice", moq: "MOQ", lead: "Lead time", cert: "Certificates", packing: "Carton info", note: "Notes", price: "Quotation" };
  const quoteValue = currentLang === "zh" ? "请联系业务获取最新报价" : "Contact sales for current quotation";
  const specRows = [
    [t("modalVersion"), productVersion(item)],
    [t("modalApplication"), productApplication(item)],
    [labels.spec, localizedDetail(detail.spec) || "-"],
    detail.use ? [labels.use, localizedDetail(detail.use)] : null,
    detail.custom ? [labels.custom, localizedDetail(detail.custom)] : null,
    detail.sample ? [labels.sample, localizedDetail(detail.sample)] : null,
    [labels.moq, localizedDetail(detail.moq) || "-"],
    [labels.lead, localizedDetail(detail.lead) || "-"],
    [labels.cert, localizedDetail(detail.cert) || "-"],
    detail.packing ? [labels.packing, localizedDetail(detail.packing)] : null,
    detail.note ? [labels.note, localizedDetail(detail.note)] : null,
    [t("modalOem"), t("modalOemValue")],
    [labels.price, quoteValue]
  ].filter(Boolean);
  document.getElementById("modalSpecs").innerHTML = specRows.map(([k,v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`).join("");
  document.getElementById("modalInquiry").textContent = `${t("modalInquiry")} ${model}`;
  const whatsappText = `Hello HENGBO, I want a factory quotation for ${model} - ${name}. Please send MOQ, packaging and lead time.`;
  document.getElementById("modalWhatsapp").href = `https://wa.me/8619858215314?text=${encodeURIComponent(whatsappText)}`;
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
  renderCompareSection();
  window.currentThanks = t("thanks");
  saveLanguage(lang);
  renderStaticLists();
  renderCollections();
  renderProductOptions();
  renderSlides();
}

renderStaticLists();
bindWarningPathActions();
const selector = document.getElementById("language");
selector.value = getRequestedLanguage() || getSavedLanguage() || (navigator.language || "en").slice(0,2);
if (!translations[selector.value]) selector.value = "en";
applyLanguage(selector.value);
selector.addEventListener("change", e => applyLanguage(e.target.value));

document.getElementById("toggleProducts").addEventListener("click", () => {
  const grid = document.getElementById("productGrid");
  grid.classList.toggle("show-all");
  updateProductToggle(grid.querySelectorAll(".product-card").length);
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

document.querySelectorAll(".signature-products button, .flagship-board button, .hero-sourcing-card button, .new-series-card, .bundle-grid button, .price-tier-actions button, .core-product-quote").forEach(button => {
  button.addEventListener("click", () => {
    const item = products.find(product => product.model === button.dataset.model);
    if (!item) return;
    if (button.classList.contains("core-product-quote")) {
      fillInquiryProduct(item);
      document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    openProductModal(button.dataset.model);
  });
});

document.querySelectorAll(".hero-filter button").forEach(button => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter);
    document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    setActiveFilter(chip.dataset.filter);
  });
});

function setActiveFilter(filter) {
  activeFilter = filter;
  searchTerm = "";
  document.getElementById("productSearch").value = "";
  document.querySelectorAll(".chip").forEach(item => item.classList.toggle("active", item.dataset.filter === filter));
  const grid = document.getElementById("productGrid");
  grid.classList.remove("show-all");
  renderStaticLists();
}

document.getElementById("modalInquiry").addEventListener("click", () => {
  const item = products.find(product => product.model === selectedModalProduct);
  if (!item) return;
  closeProductModal();
  fillInquiryProduct(item);
  document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
});

function fillInquiryProduct(item) {
  const [name] = localized(item);
  const select = document.getElementById("productInterest");
  const interest = `${item.model} - ${name}`;
  select.value = interest;
  if (select.value !== interest) {
    select.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(interest)}">${escapeHtml(interest)}</option>`);
    select.value = interest;
  }
  document.getElementById("messageText").value = currentLang === "zh"
    ? `我对 ${interest} 感兴趣，请发送报价、起订量、包装方式和交期。`
    : `I am interested in ${interest}. Please send quotation, MOQ, packaging and lead time.`;
}

let scrollTicking = false;
function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.getElementById("scrollProgress").style.width = `${progress}%`;
  scrollTicking = false;
}
window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(updateScrollProgress);
}, { passive: true });
updateScrollProgress();

document.getElementById("inquiryForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const selected = document.getElementById("recipientSelect").value;
  const to = selected === "all" ? inquiryEmails.join(",") : selected;
  const name = document.getElementById("customerName").value.trim();
  const contact = document.getElementById("customerContact").value.trim();
  const product = document.getElementById("productInterest").value;
  const quantity = document.getElementById("customerQuantity").value.trim();
  const market = document.getElementById("destinationMarket").value.trim();
  const packaging = document.getElementById("packagingNeed").value;
  const delivery = document.getElementById("targetDelivery").value.trim();
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
    `Target Quantity: ${quantity || "-"}`,
    `Destination Market: ${market || "-"}`,
    `Packaging / OEM Need: ${packaging || "-"}`,
    `Target Delivery Time: ${delivery || "-"}`,
    "",
    "Inquiry Details:",
    message || "-",
    "",
    "Please contact me with product recommendations, MOQ, packaging options, lead time and quotation.",
    "",
    "Best regards,"
  ].join("\n");
  const status = document.getElementById("inquiryStatus");
  status.textContent = t("formStatus");
  status.hidden = false;
  window.location.assign(`mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
});

const slides = Array.from(document.querySelectorAll(".slide"));
const dotWrap = document.getElementById("carouselDots");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let slideIndex = 0;
let slideTimer;

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === slideIndex));
  dotWrap.querySelectorAll("button").forEach((dot, i) => {
    const isActive = i === slideIndex;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-current", String(isActive));
  });
}

function startCarousel() {
  clearInterval(slideTimer);
  if (reduceMotionQuery.matches || document.hidden) return;
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
document.addEventListener("visibilitychange", startCarousel);
reduceMotionQuery.addEventListener?.("change", startCarousel);

if ("IntersectionObserver" in window) {
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
}
