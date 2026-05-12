import React, { useState } from "react";

const ICONS = {
  compass: "M12 2l3.5 8.5L24 14l-8.5 3.5L12 26l-3.5-8.5L0 14l8.5-3.5L12 2zm0 5.8l-1.9 4.6L5.5 14l4.6 1.9L12 20.5l1.9-4.6 4.6-1.9-4.6-1.6L12 7.8z",
  layers: "M12 2l10 5-10 5L2 7l10-5zm0 8.5L22 6v4l-10 5-10-5V6l10 4.5zm0 6L22 12v4l-10 5-10-5v-4l10 4.5z",
  flow: "M4 6h6v4H4V6zm10 0h6v4h-6V6zM4 18h6v4H4v-4zm10 0h6v4h-6v-4zM10 8h4v1.5h-4V8zm2.7 2.5h1.8V17h-1.8v-6.5zM10 19h4v1.5h-4V19z",
  target: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 3a7 7 0 11-7 7 7 7 0 017-7zm0 3a4 4 0 104 4 4 4 0 00-4-4zm0 2a2 2 0 11-2 2 2 2 0 012-2z",
  factory: "M3 21V9l5 3V9l5 3V6h8v15H3zm12-13v5.2L10 10v3.2L5 10v9h14V8h-4zM6 15h3v3H6v-3zm5 0h3v3h-3v-3z",
  chart: "M4 21V4h2v15h15v2H4zm4-4V9h3v8H8zm5 0V6h3v11h-3zm5 0v-5h3v5h-3z",
  book: "M5 3h10a4 4 0 014 4v15H8a3 3 0 00-3 3V3zm2 2v16.1A5 5 0 018 21h9V7a2 2 0 00-2-2H7z",
  warning: "M12 3l10 18H2L12 3zm0 4.2L5.4 19h13.2L12 7.2zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z",
  check: "M9.2 16.6L4.8 12.2l-1.4 1.4 5.8 5.8L21 7.6l-1.4-1.4L9.2 16.6z",
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  spark: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2zm8 13l.9 3.1L24 19l-3.1.9L20 23l-.9-3.1L16 19l3.1-.9L20 15zM4 15l.9 3.1L8 19l-3.1.9L4 23l-.9-3.1L0 19l3.1-.9L4 15z"
};

function Icon({ name, size = 18 }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className="icon">
      <path d={ICONS[name] || ICONS.compass} />
    </svg>
  );
}

const ui = {
  en: {
    eyebrow: "SCHM 6201 | Class 2",
    title: "Operations Function, Supply Chain Strategy, and Product Design",
    subtitle: "A reader facing bilingual study infrastructure for Professor Bill Forbes' second class.",
    primary: "Primary reading mode",
    modeEn: "English",
    modeZh: "中文",
    modeBi: "Bilingual",
    sources: "Source basis",
    search: "Study focus",
    jump: "Jump to section",
    checklist: "Final six point checklist",
    sourceNote: "Use Canvas and the latest instructor instruction when schedule or submission details conflict.",
    action: "Class use",
    close: "Close reading path"
  },
  zh: {
    eyebrow: "SCHM 6201 | 第二堂課",
    title: "營運職能、供應鏈策略與產品設計",
    subtitle: "面向讀者的雙語視覺化學習系統，整理 Forbes 教授第二堂課內容。",
    primary: "主要閱讀模式",
    modeEn: "英文",
    modeZh: "中文",
    modeBi: "雙語",
    sources: "來源基礎",
    search: "學習重點",
    jump: "章節導覽",
    checklist: "最後六點檢查表",
    sourceNote: "若時程或繳交規定有衝突，以 Canvas 及教授最新指示為準。",
    action: "課堂用途",
    close: "收束閱讀路徑"
  }
};

const sectionNav = [
  { id: "map", icon: "compass", en: "Class map", zh: "課程地圖" },
  { id: "articles", icon: "factory", en: "Semiconductor articles", zh: "半導體文章" },
  { id: "operations", icon: "flow", en: "Operations function", zh: "營運職能" },
  { id: "strategy", icon: "target", en: "Strategy", zh: "策略" },
  { id: "design", icon: "layers", en: "Product design", zh: "產品設計" },
  { id: "assignments", icon: "book", en: "Assignments", zh: "作業" },
  { id: "participation", icon: "spark", en: "Participation", zh: "課堂發言" },
  { id: "checklist", icon: "check", en: "Checklist", zh: "檢查表" }
];

const sourceBasis = [
  { en: "Class 2 slides", zh: "第二堂課投影片", tag: "Slide" },
  { en: "Class 2 speaking notes", zh: "第二堂課講稿筆記", tag: "Notes" },
  { en: "Course syllabus", zh: "正式課綱", tag: "Syllabus" },
  { en: "Master Plan", zh: "課程 Master Plan", tag: "Master Plan" },
  { en: "Four semiconductor readings", zh: "四篇半導體指定文章", tag: "Article Fact" },
  { en: "Integrated pre class brief", zh: "課前整合備忘錄", tag: "Working Brief" }
];

const classMap = [
  {
    slides: "1 to 3",
    en: "Opening and articles",
    zh: "開場與文章",
    detailEn: "Frames subsidies, tariffs, capacity location, TSMC dependency, AI demand, and operating redesign.",
    detailZh: "用補助、關稅、產能區位、TSMC 依賴、AI 需求與營運重設作為開場。"
  },
  {
    slides: "4 to 15",
    en: "The Operations Function",
    zh: "營運職能",
    detailEn: "Defines operations, four major OM decisions, financial links, supply chain flows, and process models.",
    detailZh: "定義營運、四大營運決策、財務連結、供應鏈三流與流程模型。"
  },
  {
    slides: "16 to 29",
    en: "Operations and Supply Chain Strategy",
    zh: "營運與供應鏈策略",
    detailEn: "Moves from corporate strategy to SBU and functional strategy, then to CORE competencies, disruption, and globalization.",
    detailZh: "從公司策略走到事業單位與功能策略，再連到 CORE 能力、中斷與全球化。"
  },
  {
    slides: "30 to 39",
    en: "Product Design",
    zh: "產品設計",
    detailEn: "Shows how design locks in cost, quality, supplier risk, inventory, capacity, and flexibility.",
    detailZh: "說明設計如何提前鎖定成本、品質、供應商風險、庫存、產能與彈性。"
  },
  {
    slides: "40 to 50",
    en: "Case and assignments",
    zh: "案例與作業",
    detailEn: "Sets up the case framework, Halloran Metals, Topic Overview, Final Project, Master Plan, and Q&A.",
    detailZh: "建立案例框架、Halloran Metals、Topic Overview、期末專案、Master Plan 與問答。"
  }
];

const articleCards = [
  {
    titleEn: "Micron: policy driven capacity strategy",
    titleZh: "Micron：政策推動的產能策略",
    source: "WSJ article and Slide 3",
    metrics: ["Up to $100B New York campus", "$5.5B New York incentives", "35% to 45% domestic cost gap", "U.S. capacity near 12%", "Micron U.S. share could rise from 10% to 40%"],
    en: "Micron is a capacity and location strategy case. The issue is not only whether a firm can build a domestic fab. The issue is whether subsidies, national security, resilience, and long term demand justify a higher cost domestic footprint.",
    zh: "Micron 是產能與區位策略案例。重點不只是企業能不能在美國設廠，而是補助、國安、韌性與長期需求是否足以支撐較高成本的本土製造配置。",
    cautionEn: "$100B and $150B must stay separate. The article treats the $100B as the New York campus and the earlier $150B as a broader capacity discussion without a specified location.",
    cautionZh: "$100B 與 $150B 必須分開。文章把 $100B 指向紐約廠區，較早的 $150B 是更廣泛的產能討論，未指定投向地點。"
  },
  {
    titleEn: "TSMC geopolitics: capabilities case",
    titleZh: "TSMC 地緣政治：能力案例",
    source: "The Economist article and Slide 3",
    metrics: ["84% leading edge market position", "$48B revenue", "$20B operating profit", "$560B market value", "62% North America headquartered customers", "17% mainland China domiciled customers"],
    en: "TSMC's advantage is not just scale. It combines process technology, customer trust, capital intensity, IP protection, and reinvestment speed. The operating logic is technology lead, premium pricing, higher profit, reinvestment, then the next generation of technology.",
    zh: "TSMC 的優勢不只是規模，而是流程技術、客戶信任、資本密集度、智慧財產保護與再投資速度的組合。營運邏輯是技術領先、較高定價、較高利潤、再投資，再進入下一代技術。",
    cautionEn: "The Arizona water issue of about one million gallons per day is a slide claim, not an Economist article claim.",
    cautionZh: "亞利桑那廠每日約一百萬加侖用水問題是投影片說法，不是 Economist 文章本身的說法。"
  },
  {
    titleEn: "TSMC 2025 Outlook: demand does not erase risk",
    titleZh: "TSMC 2025 展望：需求強不等於風險消失",
    source: "WSJ article and Slide 3",
    metrics: ["Mid 20% sales growth guidance", "Q1 profit up 60%", "Q1 revenue up 42%", "$28.4B to $29.2B current quarter revenue", "$100B plus U.S. investment", "$5.5B Nvidia charge noted by article"],
    en: "AI demand supports growth, but tariffs and export controls can still reshape capacity commitments, customer allocation, product flows, and geographic footprint. Strong demand and high uncertainty can exist at the same time.",
    zh: "AI 需求支撐成長，但關稅與出口管制仍可能重塑產能承諾、客戶配置、產品流向與地理布局。需求強與不確定性高可以同時存在。",
    cautionEn: "Tariff details were time sensitive in the article. Treat them as article context, not permanent facts.",
    cautionZh: "關稅細節具有時效性。此處應視為文章時點背景，不應視為永久事實。"
  },
  {
    titleEn: "Chip disruptions: tariffs as operating model risk",
    titleZh: "晶片中斷：關稅作為營運模式風險",
    source: "WSJ article and Slide 3",
    metrics: ["Design in U.S. or Europe", "Fabrication in Taiwan or South Korea", "Assembly in mainland China or other Asian locations", "Suss MicroTec sales growth near 47% last year", "Forecast sales of 470M to 510M euros"],
    en: "Tariffs do not only change prices. They can force redesign of supplier selection, production footprint, assembly location, inventory buffers, customer pricing, and risk management.",
    zh: "關稅不只改變價格，也可能迫使企業重設供應商選擇、生產版圖、組裝地點、庫存緩衝、客戶定價與風險管理。",
    cautionEn: "The article separates strong AI demand from weak legacy chip demand in cars and industrial machinery.",
    cautionZh: "文章把強勁的 AI 需求與汽車及工業機械所用傳統晶片的疲弱需求分開。"
  }
];

const omDecisions = [
  { labelEn: "Process", labelZh: "流程", questionEn: "How do we produce and deliver?", questionZh: "怎麼生產與交付？", useEn: "Manufacturing or service delivery model, process flow, bottlenecks, cycle time.", useZh: "製造或服務交付模式、流程圖、瓶頸、週期時間。" },
  { labelEn: "Quality", labelZh: "品質", questionEn: "What standards, measures, and routines achieve quality?", questionZh: "標準、衡量方式與日常機制是甚麼？", useEn: "Inspection points, defect prevention, process control, customer experience.", useZh: "檢驗點、缺陷預防、流程控制、顧客體驗。" },
  { labelEn: "Capacity", labelZh: "產能", questionEn: "What facilities and labor are needed?", questionZh: "需要多少設施與人力？", useEn: "Plant footprint, labor plan, resource availability, demand peaks.", useZh: "廠區版圖、人力計畫、資源可得性、需求尖峰。" },
  { labelEn: "Inventory", labelZh: "庫存", questionEn: "What should we stock, when, and how much?", questionZh: "備甚麼、何時備、備多少？", useEn: "Service level, working capital, safety stock, supplier reliability.", useZh: "服務水準、營運資金、安全庫存、供應商可靠性。" }
];

const financialRows = [
  { leftEn: "Balance Sheet", leftZh: "資產負債表", middleEn: "Inventory, receivables, payables", middleZh: "庫存、應收款、應付款", rightEn: "Operations decisions shape working capital and cash pressure.", rightZh: "營運決策會影響營運資金與現金壓力。" },
  { leftEn: "Income Statement", leftZh: "損益表", middleEn: "Sales, cost, profit", middleZh: "銷售、成本、利潤", rightEn: "Service, cost control, and quality affect revenue and margin.", rightZh: "服務、成本控制與品質會影響營收與利潤率。" },
  { leftEn: "In process measures", leftZh: "流程中指標", middleEn: "Service, inventory, cost, quality", middleZh: "服務、庫存、成本、品質", rightEn: "These are leading indicators before the financial statements close.", rightZh: "這些是財報結帳前的領先指標。" }
];

const supplyChainFlows = [
  { en: "Supplier", zh: "供應商" },
  { en: "Contracted manufacturer", zh: "合約製造商" },
  { en: "Manufacturer", zh: "製造商" },
  { en: "Wholesaler or distributor", zh: "批發商或配銷商" },
  { en: "Retailer or customer", zh: "零售商或顧客" }
];

const strategyLevels = [
  {
    levelEn: "Corporate strategy",
    levelZh: "公司層級策略",
    horizonEn: "Long time horizon",
    horizonZh: "長期時間範圍",
    contentEn: "Mission, target businesses, values, direction, acquisitions, divestitures, performance metrics, and risk management.",
    contentZh: "使命、目標業務、價值、方向、併購、事業出售、績效指標與風險管理。",
    questionEn: "What businesses should the firm be in, and how should it survive competition over time?",
    questionZh: "企業應該處於哪些業務，並如何在競爭中長期存活？"
  },
  {
    levelEn: "SBU strategy",
    levelZh: "事業單位策略",
    horizonEn: "More detailed and shorter term",
    horizonZh: "更細且較短期",
    contentEn: "Customer segments, markets, product families, competitive priorities, capacity, and inventory plans.",
    contentZh: "顧客區隔、市場、產品族群、競爭優先順序、產能與庫存計畫。",
    questionEn: "How should this business unit compete?",
    questionZh: "這個事業單位應該如何競爭？"
  },
  {
    levelEn: "Functional strategy",
    levelZh: "功能層級策略",
    horizonEn: "Operational execution level",
    horizonZh: "營運執行層級",
    contentEn: "Resources, metrics, capabilities, and coordination across functions.",
    contentZh: "資源、指標、能力，以及跨功能協調。",
    questionEn: "What specifically must operations and supply chain do to support corporate and SBU strategies?",
    questionZh: "營運與供應鏈具體必須做甚麼，才能支援公司與事業單位策略？"
  }
];

const swot = [
  { quadrantEn: "Strengths", quadrantZh: "優勢", typeEn: "Internal positive", typeZh: "內部正向", promptsEn: "Advantages, unique value proposition, unique resources, customer perceived strengths.", promptsZh: "優勢、獨特價值主張、獨特資源、顧客認知的強項。", opsEn: "Convert into process advantage, quality advantage, supplier access, or capability depth.", opsZh: "轉換成流程優勢、品質優勢、供應商取得能力或能力深度。" },
  { quadrantEn: "Weaknesses", quadrantZh: "劣勢", typeEn: "Internal negative", typeZh: "內部負向", promptsEn: "Limits, vulnerabilities, barriers, what customers see as weaknesses.", promptsZh: "限制、脆弱點、障礙、顧客認知的弱點。", opsEn: "Identify process gaps, capacity limits, quality risks, inventory pressure, or coordination failure.", opsZh: "辨識流程缺口、產能限制、品質風險、庫存壓力或協調失靈。" },
  { quadrantEn: "Opportunities", quadrantZh: "機會", typeEn: "External positive", typeZh: "外部正向", promptsEn: "Trends, technologies, new markets, social and population changes.", promptsZh: "趨勢、技術、新市場、社會與人口變化。", opsEn: "Ask what operating capability must be built before the opportunity can be captured.", opsZh: "先問企業必須建立甚麼營運能力，才有辦法抓住機會。" },
  { quadrantEn: "Threats", quadrantZh: "威脅", typeEn: "External negative", typeZh: "外部負向", promptsEn: "Competitors, technology shifts, regulation, standards, disruption.", promptsZh: "競爭者、技術變化、法規、標準、中斷。", opsEn: "Translate threat into resilience, supplier design, inventory, quality, or cost response.", opsZh: "把威脅翻譯成韌性、供應商設計、庫存、品質或成本應對。" }
];

const coreTriangle = [
  { en: "Critical Customer", zh: "關鍵顧客", detailEn: "The customer or segment critical to firm success and therefore worthy of focused operating design.", detailZh: "對公司成功至關重要，因此值得以營運設計集中服務的顧客或區隔。" },
  { en: "Value Proposition", zh: "價值主張", detailEn: "The tangible and intangible benefits customers expect from the firm.", detailZh: "顧客期待從公司取得的有形與無形利益。" },
  { en: "Capabilities", zh: "能力", detailEn: "What the firm does well and what problems it can proficiently solve.", detailZh: "公司擅長甚麼，以及能熟練處理哪些問題。" }
];

const disruptionFactors = [
  { en: "Political uncertainty", zh: "政治不確定性", examplesEn: "Tariffs, regulation, policy shifts", examplesZh: "關稅、法規、政策轉向" },
  { en: "Financial crisis", zh: "金融危機", examplesEn: "Credit stress, recession, demand shock", examplesZh: "信用壓力、衰退、需求衝擊" },
  { en: "Natural disasters", zh: "天然災害", examplesEn: "Earthquakes and regional disruption", examplesZh: "地震與區域性中斷" },
  { en: "IP theft", zh: "智慧財產竊取", examplesEn: "Trade secret and technology risk", examplesZh: "營業秘密與技術風險" },
  { en: "War", zh: "戰爭", examplesEn: "Geopolitical and logistics disruption", examplesZh: "地緣政治與物流中斷" },
  { en: "Labor", zh: "勞動力", examplesEn: "Strikes, shortages, workforce disruption", examplesZh: "罷工、短缺、人力中斷" },
  { en: "Pandemic", zh: "疫情", examplesEn: "COVID 19 as network stress test", examplesZh: "COVID 19 作為網路壓力測試" }
];

const globalRows = [
  { en: "Lower prices", zh: "較低價格", challengeEn: "Increased complexity", challengeZh: "管理複雜度增加" },
  { en: "Wider availability", zh: "產品與服務更容易取得", challengeEn: "Shorter product life cycles", challengeZh: "產品生命週期縮短" },
  { en: "New employment opportunities", zh: "新的就業機會", challengeEn: "New forms of competition", challengeZh: "新的競爭形式" }
];

const npd = [
  { phaseEn: "Concept Development", phaseZh: "構想發展", contentEn: "Idea generation and evaluation of alternatives. Customer input, market research, and competitive analysis belong here.", contentZh: "產生想法並評估替代方案。顧客輸入、市場研究與競爭分析都在此階段進入。" },
  { phaseEn: "Product Design", phaseZh: "產品設計", contentEn: "Design of the physical product and the production process. These should be concurrent, not sequential.", contentZh: "設計實體產品與生產流程。兩者應該並行，而不是先後分離。" },
  { phaseEn: "Pilot Production and Testing", phaseZh: "試製與測試", contentEn: "Test prototypes and finalize the information package that manufacturing and supply chain need to execute.", contentZh: "測試原型，並定稿製造與供應鏈執行所需的資訊包。" }
];

const designTools = [
  { en: "Design for Manufacturing", zh: "可製造性設計", detailEn: "Design products that are easier and cheaper to build.", detailZh: "讓產品更容易且更便宜製造。" },
  { en: "Value Analysis", zh: "價值分析", detailEn: "Improve the usefulness to cost ratio by improving quality at the same price or keeping quality at a lower price.", detailZh: "透過同價提高品質，或降價維持品質，改善效用與成本之比。" },
  { en: "Modular Design", zh: "模組化設計", detailEn: "Use common parts, processes, and modules so variety does not create excessive complexity.", detailZh: "使用共通零件、流程與模組，使多樣化不致造成過度複雜。" }
];

const dfmSteps = [
  { en: "Original design", zh: "原始設計", detailEn: "Common fasteners create more steps and more part numbers.", detailZh: "使用一般緊固件，導致更多步驟與更多零件編號。" },
  { en: "Revised design", zh: "修正版設計", detailEn: "One piece base removes fasteners and reduces assembly time.", detailZh: "一體式底座移除緊固件，降低組裝時間。" },
  { en: "Final design", zh: "最終設計", detailEn: "Push and snap assembly requires no tools and reduces quality problems.", detailZh: "按壓卡扣式組裝不需工具，並降低品質問題。" }
];

const caseFramework = [
  { bucketEn: "External environment", bucketZh: "外部環境", itemsEn: "Economic, Environmental, Social, Political, Emerging", itemsZh: "經濟、環境、社會、政治、新興因素" },
  { bucketEn: "Internal levers", bucketZh: "內部槓桿", itemsEn: "Strategy, Capabilities, Process, Technology, People", itemsZh: "策略、能力、流程、技術、人員" },
  { bucketEn: "Financials", bucketZh: "財務", itemsEn: "Balance Sheet, Revenue, Cost, Profit, GMROI", itemsZh: "資產負債表、營收、成本、利潤、GMROI" },
  { bucketEn: "In process", bucketZh: "流程中指標", itemsEn: "Service, Inventory, Cost, Quality", itemsZh: "服務、庫存、成本、品質" }
];

const halloranFocus = [
  { en: "What forces are at play at the time of the case?", zh: "案發時點有哪些力量在作用？" },
  { en: "What are the business and supply chain implications?", zh: "對企業與供應鏈有甚麼含義？" },
  { en: "Does Halloran have a strategy and operational design?", zh: "Halloran 是否有策略與營運設計？" },
  { en: "Compare Halloran and Allied by strategy and design.", zh: "從策略與設計比較 Halloran 與 Allied。" },
  { en: "Whose strategy and design are right? Explain.", zh: "哪一方的策略與設計較正確？請解釋。" },
  { en: "What should Halloran do given macro forces and competition?", zh: "面對宏觀力量與競爭環境，Halloran 應如何行動？" }
];

const assignmentCards = [
  {
    titleEn: "Halloran Metals case",
    titleZh: "Halloran Metals 案例",
    fields: [
      { en: "Due: Master Plan working assumption is 5/14. Confirm Canvas.", zh: "期限：Master Plan 工作假設為 5/14。需核對 Canvas。" },
      { en: "Length: 2 to 3 pages in the Class 2 case setup. Some slides say 3 pages. Exclude cover and exhibits.", zh: "篇幅：第二堂課案例設定為 2 至 3 頁。部分投影片寫 3 頁。不含封面與附錄。" },
      { en: "Format: Background, Analysis, Recommended Solutions, Exhibits and References.", zh: "格式：背景、分析、建議方案、附錄與參考資料。" },
      { en: "Analysis: quantitative and qualitative analysis should work together.", zh: "分析：量化與質化分析需要一起支撐判斷。" }
    ]
  },
  {
    titleEn: "Topic Overview",
    titleZh: "Topic Overview",
    fields: [
      { en: "Weight: 10% of final grade.", zh: "比重：總成績 10%。" },
      { en: "Format: 5 to 10 minute verbal overview with one lesson learned.", zh: "形式：5 至 10 分鐘口頭介紹，包含一個可分享的學習重點。" },
      { en: "Submission: one page summary on Canvas. Class 1 slides also mention possible 2 to 3 PowerPoint slides.", zh: "繳交：Canvas 一頁摘要。第一堂投影片也提到可為 2 至 3 張 PowerPoint。" },
      { en: "Sign up: email the professor with date and topic. Individual or team of two.", zh: "報名：用 email 告知教授日期與主題。可個人或兩人一組。" }
    ]
  },
  {
    titleEn: "Final Team Project",
    titleZh: "期末團隊專案",
    fields: [
      { en: "Core question: What operations, processes, or systems are critical for the company, and what should be done to manage them effectively?", zh: "核心問題：公司的哪些營運、流程或系統最關鍵，應如何有效管理？" },
      { en: "Team size conflict: syllabus says four to five students. Class slides say four students. Confirm Canvas.", zh: "組隊人數有衝突：課綱寫四至五人，課堂投影片寫四人。以 Canvas 確認。" },
      { en: "Progress overview: class slides say 4 to 6 slides and not graded. Syllabus version says 4 to 7 slides and 15 minutes on 6/5.", zh: "進度概要：課堂投影片寫 4 至 6 張且不計分。課綱版本寫 4 至 7 張、6/5 進行 15 分鐘。" },
      { en: "Final deliverable conflict: class slides say 7 to 12 slides plus 6 to 8 pages. Syllabus says 7 to 12 slides plus 8 to 10 pages. Confirm latest instruction.", zh: "期末繳交有衝突：課堂投影片寫 7 至 12 張加 6 至 8 頁。課綱寫 7 至 12 張加 8 至 10 頁。需確認最新指示。" }
    ]
  }
];

const scheduleRows = [
  ["1", "5/7", "Introduction and Course Overview", ""],
  ["2", "5/12", "Operations Function, Ops and SC Strategy, Product Design", ""],
  ["3", "5/14", "Process Selection, Service Process Design", "Halloran"],
  ["4", "5/19", "Process Flow, Managing Quality, Quality Control", ""],
  ["5", "5/21", "SCM, Forecasting", "West Marine"],
  ["6", "5/26", "Capacity, Scheduling, Project Planning", ""],
  ["7", "5/28", "Independent Demand Inventory, MRP and ERP", "Acme Medical"],
  ["8", "6/2", "Network Design, Relationship, Collaboration, Procurement", ""],
  ["9", "6/4", "Transportation and Distribution", "KL Worldwide"],
  ["10", "6/9", "Schedule item not fully visible in working brief", "Group Executive Summary"],
  ["11", "6/11", "Customer Service, S and OP", ""],
  ["12", "6/16", "Group Final Presentation", "Group Final"],
  ["13", "6/18", "Group Final Presentation", "Group Final"]
];

const participationLines = [
  {
    titleEn: "Semiconductor operating design",
    titleZh: "半導體營運設計",
    en: "The semiconductor articles show that tariffs are not only a price issue. They can change where design happens, where fabrication happens, where assembly happens, how much inventory firms need, and how much redundancy they build into the supplier base.",
    zh: "半導體文章顯示，關稅不只是價格問題。它可能改變設計、晶圓製造、組裝發生的地點，也會改變企業需要的庫存量，以及供應商基礎中的備援程度。"
  },
  {
    titleEn: "TSMC as a capabilities case",
    titleZh: "TSMC 作為能力案例",
    en: "TSMC cannot be replaced quickly because its position comes from process technology, customer trust, capital intensity, IP protection, and reinvestment speed. This is a capabilities case, not only a scale case.",
    zh: "TSMC 很難被快速取代，因為它的位置來自流程技術、客戶信任、資本密集度、智慧財產保護與再投資速度。這是能力案例，不只是規模案例。"
  },
  {
    titleEn: "Micron as capacity strategy",
    titleZh: "Micron 作為產能策略",
    en: "Micron is a capacity strategy case shaped by public policy. Subsidies help bridge the domestic cost gap, but the strategic reason is resilience, national security, and long term demand.",
    zh: "Micron 是受公共政策塑造的產能策略案例。補助有助於縮小本土製造成本差距，但策略理由是韌性、國安與長期需求。"
  },
  {
    titleEn: "Product design and supply chain outcomes",
    titleZh: "產品設計與供應鏈結果",
    en: "Product design connects directly to supply chain risk. If a product is designed around specialized components or single source suppliers, manufacturability, inventory cost, lead time, and resilience are constrained before production begins.",
    zh: "產品設計會直接連到供應鏈風險。若產品圍繞特殊零件或單一供應商設計，可製造性、庫存成本、交期與韌性在生產開始前就已受限。"
  }
];

const finalChecklist = [
  { en: "Class 2 is three modules in one class.", zh: "第二堂課是三個模組合一。" },
  { en: "The four semiconductor articles are the opening case set.", zh: "四篇半導體文章是開場案例組。" },
  { en: "Slide 10 connects supply chain and market performance.", zh: "Slide 10 把供應鏈與市場表現連起來。" },
  { en: "Four OM decisions are the course skeleton: Process, Quality, Capacity, Inventory.", zh: "四大營運決策是整門課骨架：流程、品質、產能、庫存。" },
  { en: "CORE Competencies is the strategy anchor: Critical Customer, Value Proposition, Capabilities.", zh: "CORE Competencies 是策略核心：關鍵顧客、價值主張、能力。" },
  { en: "Halloran is due soon. After class, move to Halloran immediately.", zh: "Halloran 很快要繳。課後應立刻轉向 Halloran。" }
];

function useActiveSection() {
  const [active, setActive] = useState("map");
  const click = id => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { active, click };
}

function Text({ item, mode, as = "span", className = "" }) {
  const Tag = as;
  const mergedClassName = ["langText", className].filter(Boolean).join(" ");
  if (mode === "zh") return <Tag className={mergedClassName}>{item.zh}</Tag>;
  if (mode === "bi") {
    return (
      <Tag className={mergedClassName}>
        <span className="biEn">{item.en}</span>
        <span className="biZh">{item.zh}</span>
      </Tag>
    );
  }
  return <Tag className={mergedClassName}>{item.en}</Tag>;
}

function Section({ id, icon, label, mode, children, kicker }) {
  const kickerItem = typeof kicker === "string" ? { en: kicker, zh: kicker } : kicker;
  return (
    <section id={id} className="sectionBlock">
      <div className="sectionHead">
        <div className="sectionIcon"><Icon name={icon} /></div>
        <div>
          <p className="kicker"><Text item={kickerItem} mode={mode} /></p>
          <h2><Text item={label} mode={mode} /></h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function MetricPill({ children }) {
  return <span className="metricPill">{children}</span>;
}

function MiniTable({ rows, mode }) {
  return (
    <div className="miniTable">
      {rows.map((row, index) => (
        <div className="miniRow" key={index}>
          <div className="miniKey"><Text item={{ en: row.leftEn, zh: row.leftZh }} mode={mode} /></div>
          <div className="miniValue"><Text item={{ en: row.middleEn, zh: row.middleZh }} mode={mode} /></div>
          <div className="miniNote"><Text item={{ en: row.rightEn, zh: row.rightZh }} mode={mode} /></div>
        </div>
      ))}
    </div>
  );
}

export default function SCHM6201Class2VisualInfrastructure() {
  const [mode, setMode] = useState("en");
  const [modeOpen, setModeOpen] = useState(false);
  const { active, click } = useActiveSection();
  const [checked, setChecked] = useState([]);

  const selectMode = nextMode => {
    setMode(nextMode);
    setModeOpen(false);
  };

  const toggleCheck = index => {
    setChecked(prev => prev.includes(index) ? prev.filter(x => x !== index) : [...prev, index]);
  };

  return (
    <div className="class2Root">
      <style>{styles}</style>
      <header className="hero">
        <div className="heroMeta">
          <span className="badge"><Icon name="book" /><Text item={{ en: ui.en.eyebrow, zh: ui.zh.eyebrow }} mode={mode} /></span>
          <span className="badge ghost">Professor Bill Forbes</span>
          <span className="badge ghost">2026/5/12 | 7:30 to 9:30 PM</span>
        </div>
        <div className="heroGrid">
          <div>
            <h1 className="heroTitle"><Text item={{ en: ui.en.title, zh: ui.zh.title }} mode={mode} /></h1>
            <p className="heroSub"><Text item={{ en: ui.en.subtitle, zh: ui.zh.subtitle }} mode={mode} /></p>
            <div className="heroCallout">
              <Icon name="warning" />
              <p><Text item={{ en: ui.en.sourceNote, zh: ui.zh.sourceNote }} mode={mode} /></p>
            </div>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar" aria-label="Section navigation">
          <p className="sideTitle"><Text item={{ en: ui.en.jump, zh: ui.zh.jump }} mode={mode} /></p>
          <nav>
            {sectionNav.map(item => (
              <button key={item.id} onClick={() => click(item.id)} className={active === item.id ? "navActive" : ""}>
                <Icon name={item.icon} />
                <Text item={{ en: item.en, zh: item.zh }} mode={mode} />
              </button>
            ))}
          </nav>
          <div className="sideSummary">
            <p className="sideTitle"><Text item={{ en: "High yield path", zh: "高效閱讀路徑" }} mode={mode} /></p>
            <ol>
              <li><Text item={{ en: "Articles", zh: "文章案例" }} mode={mode} /></li>
              <li><Text item={{ en: "Four OM decisions", zh: "四大營運決策" }} mode={mode} /></li>
              <li><Text item={{ en: "CORE competencies", zh: "CORE 能力" }} mode={mode} /></li>
              <li><Text item={{ en: "Halloran requirements", zh: "Halloran 要求" }} mode={mode} /></li>
            </ol>
          </div>
        </aside>

        <main>
          <Section id="map" icon="compass" mode={mode} kicker={{ en: "Reading route", zh: "閱讀路徑" }} label={{ en: "One page course map", zh: "一頁課程地圖" }}>
            <div className="card sourceCard">
              <div>
                <h3><Text item={{ en: ui.en.sources, zh: ui.zh.sources }} mode={mode} /></h3>
                <p className="muted"><Text item={{ en: "Read claims by source type. Article facts, slide claims, speaking notes, syllabus requirements, Master Plan assumptions, and cross source inferences are kept separate.", zh: "閱讀時先看來源類型。文章事實、投影片說法、講稿筆記、課綱要求、Master Plan 假設與跨來源推論需要分開判讀。" }} mode={mode} /></p>
              </div>
              <div className="sourceGrid">
                {sourceBasis.map((s, index) => (
                  <div className="sourceItem" key={index}>
                    <span>{s.tag}</span>
                    <Text item={{ en: s.en, zh: s.zh }} mode={mode} />
                  </div>
                ))}
              </div>
            </div>

            <div className="timeline">
              {classMap.map((item, index) => (
                <article className="timelineItem" key={index}>
                  <div className="slideRange">Slides {item.slides}</div>
                  <h3><Text item={{ en: item.en, zh: item.zh }} mode={mode} /></h3>
                  <p><Text item={{ en: item.detailEn, zh: item.detailZh }} mode={mode} /></p>
                </article>
              ))}
            </div>

            <div className="logicBanner">
              <Icon name="target" />
              <div>
                <h3><Text item={{ en: "Central class logic", zh: "本堂課主邏輯" }} mode={mode} /></h3>
                <p><Text item={{ en: "Strategy becomes real only when it is translated into process, quality, capacity, inventory, supplier design, financial outcomes, and product design choices.", zh: "策略只有在轉譯成流程、品質、產能、庫存、供應商設計、財務結果與產品設計選擇時，才真正落地。" }} mode={mode} /></p>
              </div>
            </div>
          </Section>

          <Section id="articles" icon="factory" mode={mode} kicker={{ en: "Slides 1 to 3", zh: "投影片 1 至 3" }} label={{ en: "Opening articles as the applied case set", zh: "開場文章作為應用案例組" }}>
            <div className="articleGrid">
              {articleCards.map((card, index) => (
                <article className="articleCard" key={index}>
                  <div className="articleTop">
                    <span className="articleIndex">0{index + 1}</span>
                    <span className="sourceTag">{card.source}</span>
                  </div>
                  <h3><Text item={{ en: card.titleEn, zh: card.titleZh }} mode={mode} /></h3>
                  <p><Text item={{ en: card.en, zh: card.zh }} mode={mode} /></p>
                  <div className="metricWrap">
                    {card.metrics.map((m, i) => <MetricPill key={i}>{m}</MetricPill>)}
                  </div>
                  <div className="cautionBox">
                    <strong><Text item={{ en: "Accuracy lock", zh: "準確性鎖定" }} mode={mode} /></strong>
                    <p><Text item={{ en: card.cautionEn, zh: card.cautionZh }} mode={mode} /></p>
                  </div>
                </article>
              ))}
            </div>

            <div className="visualModel wide">
              <h3><Text item={{ en: "Article to operations translation", zh: "文章如何轉譯成營運問題" }} mode={mode} /></h3>
              <div className="chain">
                <div><span>1</span><Text item={{ en: "External shock", zh: "外部衝擊" }} mode={mode} /></div>
                <div><span>2</span><Text item={{ en: "Operating model redesign", zh: "營運模式重設" }} mode={mode} /></div>
                <div><span>3</span><Text item={{ en: "Financial and strategic consequence", zh: "財務與策略後果" }} mode={mode} /></div>
                <div><span>4</span><Text item={{ en: "Recommendation", zh: "建議行動" }} mode={mode} /></div>
              </div>
              <p className="muted"><Text item={{ en: "Use this chain for participation. Do not stop at the article headline. Translate the article into process, quality, capacity, inventory, supplier, and finance implications.", zh: "課堂發言可用這條鏈。不要停在新聞標題，要把文章轉成流程、品質、產能、庫存、供應商與財務含義。" }} mode={mode} /></p>
            </div>
          </Section>

          <Section id="operations" icon="flow" mode={mode} kicker={{ en: "Slides 4 to 15", zh: "投影片 4 至 15" }} label={{ en: "The Operations Function", zh: "營運職能" }}>
            <div className="twoCol">
              <div className="card">
                <h3><Text item={{ en: "Why study Operations Management", zh: "為甚麼要學營運管理" }} mode={mode} /></h3>
                <ul className="cleanList">
                  <li><Text item={{ en: "Operations decisions are cross functional.", zh: "營運決策具有跨功能性。" }} mode={mode} /></li>
                  <li><Text item={{ en: "Operations is a major function in every organization.", zh: "營運是每個組織的核心功能。" }} mode={mode} /></li>
                  <li><Text item={{ en: "Process thinking applies across the business.", zh: "流程思維可應用於整個商業場景。" }} mode={mode} /></li>
                  <li><Text item={{ en: "Forbes calls operations the heart of the organization.", zh: "Forbes 教授稱營運是組織的心臟。" }} mode={mode} /></li>
                </ul>
              </div>
              <div className="card definitionCard">
                <h3><Text item={{ en: "Definition", zh: "定義" }} mode={mode} /></h3>
                <p><Text item={{ en: "The operations function is responsible for producing and delivering goods or services of value to customers. Operations managers make decisions to manage the transformation process that converts inputs into desired finished goods or services.", zh: "營運職能負責生產並交付對顧客有價值的產品或服務。營運經理透過決策管理轉換流程，把投入轉換成目標產品或服務。" }} mode={mode} /></p>
              </div>
            </div>

            <div className="decisionGrid">
              {omDecisions.map((d, index) => (
                <article className="decisionCard" key={index}>
                  <span>{index + 1}</span>
                  <h3><Text item={{ en: d.labelEn, zh: d.labelZh }} mode={mode} /></h3>
                  <p className="question"><Text item={{ en: d.questionEn, zh: d.questionZh }} mode={mode} /></p>
                  <p><Text item={{ en: d.useEn, zh: d.useZh }} mode={mode} /></p>
                </article>
              ))}
            </div>

            <div className="card">
              <h3><Text item={{ en: "Financial connection to operations", zh: "營運與財務的連結" }} mode={mode} /></h3>
              <MiniTable rows={financialRows} mode={mode} />
            </div>

            <div className="flowBoard">
              <h3><Text item={{ en: "Supply chain flow diagnostic", zh: "供應鏈流動診斷" }} mode={mode} /></h3>
              <div className="flowNodes">
                {supplyChainFlows.map((node, index) => (
                  <React.Fragment key={node.en}>
                    <div className="flowNode"><Text item={node} mode={mode} /></div>
                    {index < supplyChainFlows.length - 1 && <div className="flowArrow">›</div>}
                  </React.Fragment>
                ))}
              </div>
              <div className="flowLegend">
                <MetricPill>Product or services flow</MetricPill>
                <MetricPill>Information flow</MetricPill>
                <MetricPill>Finance or cash flow</MetricPill>
                <MetricPill>People</MetricPill>
              </div>
              <p><Text item={{ en: "SCM covers sourcing, procurement, conversion, logistics, and coordination with suppliers, intermediaries, third party service providers, and customers. Forbes' phrase is that supply chain is the organization's glue.", zh: "供應鏈管理涵蓋採購來源、採購、轉換、物流，以及與供應商、中介者、第三方服務提供者與顧客的協調。Forbes 教授的說法是，供應鏈是組織的膠水。" }} mode={mode} /></p>
            </div>

            <div className="processModel">
              <div className="processBox"><Text item={{ en: "Inputs", zh: "投入" }} mode={mode} /><small>Energy, Materials, Labor, Capital, Information</small></div>
              <div className="processArrow">›</div>
              <div className="processBox highlight"><Text item={{ en: "Transformation", zh: "轉換" }} mode={mode} /><small>Theory of Constraints, Lean, Six Sigma</small></div>
              <div className="processArrow">›</div>
              <div className="processBox"><Text item={{ en: "Outputs", zh: "產出" }} mode={mode} /><small>Goods or Services</small></div>
            </div>
          </Section>

          <Section id="strategy" icon="target" mode={mode} kicker={{ en: "Slides 16 to 29", zh: "投影片 16 至 29" }} label={{ en: "Operations and Supply Chain Strategy", zh: "營運與供應鏈策略" }}>
            <div className="strategyCascade">
              {strategyLevels.map((level, index) => (
                <article key={index} className="cascadeCard">
                  <div className="cascadeNum">{index + 1}</div>
                  <h3><Text item={{ en: level.levelEn, zh: level.levelZh }} mode={mode} /></h3>
                  <p className="muted"><Text item={{ en: level.horizonEn, zh: level.horizonZh }} mode={mode} /></p>
                  <p><Text item={{ en: level.contentEn, zh: level.contentZh }} mode={mode} /></p>
                  <div className="questionBox"><Text item={{ en: level.questionEn, zh: level.questionZh }} mode={mode} /></div>
                </article>
              ))}
            </div>

            <div className="card">
              <h3><Text item={{ en: "SWOT becomes useful only when it becomes operational", zh: "SWOT 只有轉成營運含義才有用" }} mode={mode} /></h3>
              <div className="swotGrid">
                {swot.map(item => (
                  <div className="swotBox" key={item.quadrantEn}>
                    <span><Text item={{ en: item.typeEn, zh: item.typeZh }} mode={mode} /></span>
                    <h4><Text item={{ en: item.quadrantEn, zh: item.quadrantZh }} mode={mode} /></h4>
                    <p><Text item={{ en: item.promptsEn, zh: item.promptsZh }} mode={mode} /></p>
                    <p className="opsLine"><Text item={{ en: item.opsEn, zh: item.opsZh }} mode={mode} /></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="coreBoard">
              <div className="coreCenter">CORE<br />Competencies</div>
              {coreTriangle.map((item, index) => (
                <div className={`corePoint point${index + 1}`} key={item.en}>
                  <h3><Text item={item} mode={mode} /></h3>
                  <p><Text item={{ en: item.detailEn, zh: item.detailZh }} mode={mode} /></p>
                </div>
              ))}
            </div>

            <div className="twoCol">
              <div className="card">
                <h3><Text item={{ en: "Operations and Supply Chain Strategy", zh: "營運與供應鏈策略" }} mode={mode} /></h3>
                <p><Text item={{ en: "A set of competitive priorities, coupled with structural and infrastructural design choices, intended to create capabilities that support value propositions for critical customers.", zh: "以競爭優先順序，加上結構性與基礎制度性設計選擇，創造支援關鍵顧客價值主張的能力。" }} mode={mode} /></p>
                <div className="metricWrap"><MetricPill>Cost</MetricPill><MetricPill>Quality</MetricPill><MetricPill>Speed</MetricPill><MetricPill>Flexibility</MetricPill><MetricPill>Reliability</MetricPill><MetricPill>Service</MetricPill></div>
              </div>
              <div className="card">
                <h3><Text item={{ en: "RTX example", zh: "RTX 例子" }} mode={mode} /></h3>
                <p><Text item={{ en: "Strategy is not a slide deck. It should drive make or buy decisions, supplier investment, distribution network, and technology choices. For team projects, start with stated strategy and test whether the supply chain design reflects it.", zh: "策略不是簡報，而應驅動自製或外包、供應商投資、配送網路與技術選擇。期末專案應從公司公開策略開始，再檢驗供應鏈設計是否真正反映該策略。" }} mode={mode} /></p>
              </div>
            </div>

            <div className="riskGrid">
              {disruptionFactors.map(item => (
                <div className="riskItem" key={item.en}>
                  <h4><Text item={{ en: item.en, zh: item.zh }} mode={mode} /></h4>
                  <p><Text item={{ en: item.examplesEn, zh: item.examplesZh }} mode={mode} /></p>
                </div>
              ))}
            </div>

            <div className="card">
              <h3><Text item={{ en: "Globalization: benefits and challenges", zh: "全球化：利益與挑戰" }} mode={mode} /></h3>
              <div className="compareTable">
                <div className="compareHead"><Text item={{ en: "Benefits", zh: "利益" }} mode={mode} /></div>
                <div className="compareHead"><Text item={{ en: "Challenges", zh: "挑戰" }} mode={mode} /></div>
                {globalRows.map(row => (
                  <React.Fragment key={row.en}>
                    <div><Text item={{ en: row.en, zh: row.zh }} mode={mode} /></div>
                    <div><Text item={{ en: row.challengeEn, zh: row.challengeZh }} mode={mode} /></div>
                  </React.Fragment>
                ))}
              </div>
              <p className="muted"><Text item={{ en: "The question is not whether globalization is good or bad. The question is which activities should be global, regional, or local, given cost, speed, risk, and strategic control.", zh: "問題不是全球化好或不好，而是在成本、速度、風險與策略控制下，哪些活動應該全球化、區域化或本地化。" }} mode={mode} /></p>
            </div>
          </Section>

          <Section id="design" icon="layers" mode={mode} kicker={{ en: "Slides 30 to 39", zh: "投影片 30 至 39" }} label={{ en: "Product Design", zh: "產品設計" }}>
            <div className="logicBanner">
              <Icon name="layers" />
              <div>
                <h3><Text item={{ en: "Why operations cares", zh: "為甚麼營運部門在意產品設計" }} mode={mode} /></h3>
                <p><Text item={{ en: "The old model was engineering designs and operations figures out production later. The current model requires operations early because design locks in process, technology, resources, capacity, quality, and inventory policy.", zh: "舊模式是工程端先設計，再由營運端處理生產。現在營運必須早期參與，因為設計會提前鎖定流程、技術、資源、產能、品質與庫存政策。" }} mode={mode} /></p>
              </div>
            </div>

            <div className="npdFlow">
              {npd.map((phase, index) => (
                <article key={phase.phaseEn}>
                  <span>{index + 1}</span>
                  <h3><Text item={{ en: phase.phaseEn, zh: phase.phaseZh }} mode={mode} /></h3>
                  <p><Text item={{ en: phase.contentEn, zh: phase.contentZh }} mode={mode} /></p>
                </article>
              ))}
            </div>

            <div className="twoCol">
              <div className="card">
                <h3><Text item={{ en: "Cross functional product design", zh: "跨功能產品設計" }} mode={mode} /></h3>
                <p><Text item={{ en: "Concurrent design reduces rework, catches manufacturability issues earlier, and shortens time to market. The overlap among concept, product process design, and pilot work is intentional.", zh: "並行設計可減少重工、提早發現可製造性問題，並縮短上市時間。構想、產品流程設計與試製工作之間的重疊是刻意安排。" }} mode={mode} /></p>
              </div>
              <div className="card">
                <h3><Text item={{ en: "Supply chain collaboration in design", zh: "設計中的供應鏈協作" }} mode={mode} /></h3>
                <p><Text item={{ en: "Customers should help the firm ask the right questions. Suppliers should bring technical expertise, capability, capacity, and low risk. Collaboration crosses both functional areas and organizational boundaries.", zh: "顧客協助企業問對問題。供應商提供技術專長、能力、產能與低風險。協作同時跨越功能部門與組織邊界。" }} mode={mode} /></p>
              </div>
            </div>

            <div className="toolGrid">
              {designTools.map(tool => (
                <div className="toolCard" key={tool.en}>
                  <h3><Text item={{ en: tool.en, zh: tool.zh }} mode={mode} /></h3>
                  <p><Text item={{ en: tool.detailEn, zh: tool.detailZh }} mode={mode} /></p>
                </div>
              ))}
            </div>

            <div className="dfmBoard">
              <h3><Text item={{ en: "DFM example: fewer parts, fewer steps, fewer quality problems", zh: "DFM 例子：更少零件、更少步驟、更少品質問題" }} mode={mode} /></h3>
              <div className="dfmSteps">
                {dfmSteps.map((step, index) => (
                  <article key={step.en}>
                    <span>{String.fromCharCode(65 + index)}</span>
                    <h4><Text item={{ en: step.en, zh: step.zh }} mode={mode} /></h4>
                    <p><Text item={{ en: step.detailEn, zh: step.detailZh }} mode={mode} /></p>
                  </article>
                ))}
              </div>
            </div>

            <div className="card">
              <h3><Text item={{ en: "Modular design examples", zh: "模組化設計例子" }} mode={mode} /></h3>
              <div className="platformGrid">
                <div>
                  <h4>Volvo P1 Platform</h4>
                  <p>S40 sedan, V50 station wagon, C70 convertible, C30 compact.</p>
                </div>
                <div>
                  <h4>Chrysler LX Platform</h4>
                  <p>Dodge Charger, Chrysler 300, Chrysler 300C Hemi, Dodge Magnum wagon, Dodge Challenger.</p>
                </div>
              </div>
              <p className="muted"><Text item={{ en: "Course meaning: modular design offers variety without excessive complexity.", zh: "課程含義：模組化設計能提供多樣化，但不必承擔過度複雜度。" }} mode={mode} /></p>
            </div>
          </Section>

          <Section id="assignments" icon="book" mode={mode} kicker={{ en: "Slides 40 to 50", zh: "投影片 40 至 50" }} label={{ en: "Case and assignments", zh: "案例與作業" }}>
            <div className="frameworkGrid">
              {caseFramework.map(item => (
                <div className="frameworkCard" key={item.bucketEn}>
                  <h3><Text item={{ en: item.bucketEn, zh: item.bucketZh }} mode={mode} /></h3>
                  <p><Text item={{ en: item.itemsEn, zh: item.itemsZh }} mode={mode} /></p>
                </div>
              ))}
            </div>

            <div className="assignmentGrid">
              {assignmentCards.map(card => (
                <article className="assignmentCard" key={card.titleEn}>
                  <h3><Text item={{ en: card.titleEn, zh: card.titleZh }} mode={mode} /></h3>
                  <ul className="cleanList">
                    {card.fields.map((field, index) => <li key={index}><Text item={field} mode={mode} /></li>)}
                  </ul>
                </article>
              ))}
            </div>

            <div className="card">
              <h3><Text item={{ en: "Halloran Metals focus areas", zh: "Halloran Metals 聚焦問題" }} mode={mode} /></h3>
              <div className="focusList">
                {halloranFocus.map((item, index) => (
                  <div key={index}><span>{index + 1}</span><Text item={item} mode={mode} /></div>
                ))}
              </div>
            </div>

            <div className="scheduleCard">
              <h3><Text item={{ en: "Master Plan schedule", zh: "Master Plan 時程" }} mode={mode} /></h3>
              <div className="scheduleTable">
                <div className="scheduleHead">Class</div><div className="scheduleHead">Date</div><div className="scheduleHead">Topic</div><div className="scheduleHead">Due</div>
                {scheduleRows.map(row => row.map((cell, index) => <div key={`${row[0]}-${index}`} className={index === 3 && cell ? "dueCell" : ""}>{cell}</div>))}
              </div>
              <p className="muted"><Text item={{ en: "The working brief notes possible case numbering inconsistency for Acme and KL. Use syllabus order for case numbering and Canvas for submission rules.", zh: "工作版提醒 Acme 與 KL 的案例編號可能不一致。案例排序以課綱為準，繳交規則以 Canvas 為準。" }} mode={mode} /></p>
            </div>
          </Section>

          <Section id="participation" icon="spark" mode={mode} kicker={{ en: "Class discussion", zh: "課堂討論" }} label={{ en: "Participation toolkit", zh: "課堂發言工具包" }}>
            <div className="formulaBoard">
              <div><span>1</span><Text item={{ en: "Fact", zh: "事實" }} mode={mode} /></div>
              <div><span>2</span><Text item={{ en: "Operational implication", zh: "營運含義" }} mode={mode} /></div>
              <div><span>3</span><Text item={{ en: "Financial or strategic consequence", zh: "財務或策略後果" }} mode={mode} /></div>
              <div><span>4</span><Text item={{ en: "Recommendation with end to end impact", zh: "具端到端影響的建議" }} mode={mode} /></div>
            </div>

            <div className="participationGrid">
              {participationLines.map(line => (
                <article key={line.titleEn}>
                  <h3><Text item={{ en: line.titleEn, zh: line.titleZh }} mode={mode} /></h3>
                  <p><Text item={{ en: line.en, zh: line.zh }} mode={mode} /></p>
                </article>
              ))}
            </div>

            <div className="twoCol">
              <div className="card">
                <h3><Text item={{ en: "Question to ask", zh: "可提問問題" }} mode={mode} /></h3>
                <p><Text item={{ en: "When a company redesigns its supply chain for resilience, how should it decide how much cost efficiency it is willing to give up? Is there a framework for that trade off?", zh: "當公司為了韌性重設供應鏈時，應如何決定願意放棄多少成本效率？是否有可用的權衡框架？" }} mode={mode} /></p>
              </div>
              <div className="card">
                <h3><Text item={{ en: "Professor preference signal", zh: "教授偏好訊號" }} mode={mode} /></h3>
                <p><Text item={{ en: "Prefer applied reasoning tied to current events, quantitative and qualitative analysis together, financial consequence, end to end thinking, and an operations manager viewpoint.", zh: "優先使用連到時事的應用推理、量化與質化並用、財務後果、端到端思考，以及營運經理視角。" }} mode={mode} /></p>
                <p className="muted"><Text item={{ en: "Avoid abstract theory only, generic strategy language, or commentary that looks at only one function.", zh: "避免只有抽象理論、空泛策略語言，或只看單一功能的評論。" }} mode={mode} /></p>
              </div>
            </div>
          </Section>

          <Section id="checklist" icon="check" mode={mode} kicker={{ en: "Before class", zh: "課前確認" }} label={{ en: "Final six point checklist", zh: "最後六點檢查表" }}>
            <div className="checklistPanel">
              {finalChecklist.map((item, index) => (
                <button key={index} onClick={() => toggleCheck(index)} className={checked.includes(index) ? "checked" : ""}>
                  <span>{checked.includes(index) ? "✓" : index + 1}</span>
                  <Text item={item} mode={mode} />
                </button>
              ))}
            </div>

            <div className="closePanel">
              <h3><Text item={{ en: ui.en.close, zh: ui.zh.close }} mode={mode} /></h3>
              <p><Text item={{ en: "Read the article cards first, then the four OM decisions, then CORE Competencies, then Halloran requirements. That path gives the highest return before class because it matches the likely discussion flow and grading logic.", zh: "先讀文章卡片，再讀四大營運決策，再讀 CORE Competencies，最後讀 Halloran 要求。這條路徑最符合可能的課堂討論順序與評分邏輯，課前投資報酬最高。" }} mode={mode} /></p>
            </div>
          </Section>
        </main>
      </div>

      <div className={`modeDock ${modeOpen ? "open" : ""}`} aria-label="Language controls">
        <button
          type="button"
          className="modeToggle"
          onClick={() => setModeOpen(prev => !prev)}
          aria-expanded={modeOpen}
          aria-controls="language-mode-menu"
        >
          <span>{mode === "en" ? "Language" : mode === "zh" ? "語言" : "Lang"}</span>
          <strong>{mode === "en" ? "EN" : mode === "zh" ? "中" : "EN / 中"}</strong>
        </button>
        <div id="language-mode-menu" className="modeMenu">
          <button type="button" onClick={() => selectMode("en")} className={mode === "en" ? "active" : ""}>English</button>
          <button type="button" onClick={() => selectMode("zh")} className={mode === "zh" ? "active" : ""}>中文</button>
          <button type="button" onClick={() => selectMode("bi")} className={mode === "bi" ? "active" : ""}>EN / 中</button>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700;800&family=Noto+Serif+TC:wght@500;700;900&family=Source+Serif+4:opsz,wght@8..60,500;8..60,650;8..60,750;8..60,850&display=swap');

.class2Root {
  color-scheme: light;
  --paper: #FCFAF2;
  --paper2: #FFFDF6;
  --ink: #202528;
  --ink2: #2E3438;
  --muted: #596368;
  --soft: #F5F0E6;
  --soft2: #F8F3EA;
  --line: rgba(32, 37, 40, 0.16);
  --line2: rgba(32, 37, 40, 0.09);
  --ruri: #005CAF;
  --ai: #165E83;
  --enji: #9F353A;
  --koke: #7B8D42;
  --plum: #622954;
  min-height: 100vh;
  background:
    radial-gradient(circle at 12% 0%, rgba(0, 92, 175, 0.05), transparent 28rem),
    radial-gradient(circle at 86% 4%, rgba(159, 53, 58, 0.04), transparent 28rem),
    var(--paper);
  color: var(--ink);
  font-family: "Source Serif 4", "Noto Serif TC", Georgia, serif;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0;
  padding: 18px 16px 96px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.class2Root, .class2Root * { box-sizing: border-box; min-width: 0; }
.class2Root * { -webkit-text-fill-color: currentColor; }
.class2Root button { font: inherit; }
.class2Root h1, .class2Root h2, .class2Root h3, .class2Root h4, .class2Root p { margin-top: 0; }
.class2Root p { margin-bottom: 0.72rem; max-width: 78ch; color: var(--ink2); font-size: 0.97rem; line-height: 1.62; overflow-wrap: break-word; }
.class2Root h1, .class2Root h2, .class2Root h3, .class2Root h4 { color: var(--ink); letter-spacing: -0.012em; }
.class2Root svg { fill: currentColor; }
.class2Root .icon { display: block; color: currentColor; flex: 0 0 auto; }
.class2Root strong { color: inherit; }

.langText { display: inline; color: inherit; font: inherit; letter-spacing: inherit; line-height: inherit; overflow-wrap: break-word; word-break: normal; }
.langText .biEn, .langText .biZh { display: block; font: inherit; line-height: 1.48; overflow-wrap: break-word; word-break: normal; }
.langText .biZh { margin-top: 0.18rem; color: var(--muted); font-family: "Noto Serif TC", "Source Serif 4", Georgia, serif; }
.heroTitle .biZh { color: var(--plum); }

.hero, .sectionBlock, .sidebar {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--line);
  background: rgba(255, 253, 246, 0.94);
  box-shadow: 0 14px 34px rgba(31, 37, 40, 0.052);
}

.hero { border-radius: 24px; padding: 24px; margin-bottom: 16px; }
.heroMeta, .metricWrap, .flowLegend { display: flex; flex-wrap: wrap; gap: 7px; align-items: center; }
.badge, .metricPill, .sourceTag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid rgba(22, 94, 131, 0.22);
  background: var(--soft2);
  color: var(--ai);
  border-radius: 999px;
  padding: 5px 9px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.68rem;
  line-height: 1.25;
  font-weight: 800;
  white-space: normal;
}
.badge.ghost { color: var(--muted); border-color: var(--line); }
.heroGrid { margin-top: 18px; }
.heroTitle { max-width: 980px; font-size: clamp(2rem, 4vw, 3.35rem); line-height: 1.06; letter-spacing: -0.026em; margin-bottom: 12px; }
.heroSub { max-width: 76ch; color: var(--muted); font-size: clamp(0.98rem, 1.45vw, 1.08rem); line-height: 1.55; margin-bottom: 15px; }
.heroCallout, .logicBanner {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  border: 1px solid rgba(159, 53, 58, 0.22);
  background: rgba(159, 53, 58, 0.045);
  border-radius: 17px;
  padding: 12px 14px;
}
.heroCallout p, .logicBanner p { margin: 0; max-width: none; }

.layout { max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 210px minmax(0, 1fr); gap: 16px; align-items: start; }
.sidebar { position: sticky; top: 12px; border-radius: 20px; padding: 11px; max-height: calc(100vh - 24px); overflow: auto; }
.sideTitle, .kicker {
  color: var(--muted);
  font-family: "JetBrains Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  font-size: 0.66rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.sidebar nav { display: grid; gap: 5px; }
.sidebar button {
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  color: var(--muted);
  border-radius: 12px;
  padding: 8px;
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  text-align: left;
  cursor: pointer;
  font-size: 0.84rem;
  line-height: 1.28;
  font-weight: 750;
}
.sidebar button.navActive, .sidebar button:hover { background: var(--soft); color: var(--ai); border-color: rgba(22, 94, 131, 0.14); }
.sideSummary { margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--line); }
.sideSummary ol { margin: 0; padding-left: 20px; color: var(--muted); font-size: 0.83rem; line-height: 1.45; }
.sideSummary li { margin: 4px 0; }

main { display: grid; gap: 16px; min-width: 0; }
.sectionBlock { border-radius: 24px; padding: 18px; scroll-margin-top: 18px; }
.sectionHead { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 11px; align-items: start; margin-bottom: 15px; }
.sectionIcon, .articleIndex, .decisionCard > span, .cascadeNum, .npdFlow article > span:first-child, .dfmSteps article > span:first-child, .focusList div > span:first-child, .formulaBoard div > span:first-child, .checklistPanel button > span:first-child, .chain div > span:first-child {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 10px;
  border: 1px solid rgba(22, 94, 131, 0.22);
  background: var(--soft);
  color: var(--ai);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  font-weight: 800;
  line-height: 1;
}
.sectionIcon { width: 38px; height: 38px; border-radius: 13px; }
.sectionHead h2 { margin: 0; font-size: clamp(1.25rem, 2.05vw, 1.68rem); line-height: 1.2; }

.card, .articleCard, .timelineItem, .assignmentCard, .scheduleCard, .visualModel, .flowBoard, .dfmBoard, .closePanel, .decisionCard, .riskItem, .toolCard, .frameworkCard, .participationGrid article, .cascadeCard, .swotBox, .dfmSteps article, .platformGrid div, .sourceItem, .chain div, .formulaBoard div, .miniRow > div, .processBox, .npdFlow article, .focusList div, .checklistPanel button {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 253, 246, 0.98);
  color: var(--ink);
  padding: 13px 14px;
  overflow: visible;
}
.card h3, .articleCard h3, .decisionCard h3, .timelineItem h3, .assignmentCard h3, .scheduleCard h3, .visualModel h3, .flowBoard h3, .dfmBoard h3, .closePanel h3, .toolCard h3, .frameworkCard h3, .participationGrid h3 { font-size: 1.03rem; line-height: 1.3; margin-bottom: 0.45rem; }
.card h4, .articleCard h4, .dfmSteps h4, .swotBox h4 { font-size: 0.98rem; line-height: 1.34; margin-bottom: 0.35rem; }
.muted, .miniNote, .riskItem p, .toolCard p, .frameworkCard p, .participationGrid p, .cautionBox p, .corePoint p { color: var(--muted); }

.sourceCard { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr); gap: 14px; margin-bottom: 14px; }
.sourceGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr)); gap: 8px; }
.sourceItem { display: grid; gap: 4px; font-size: 0.9rem; }
.sourceItem > span:first-child { color: var(--enji); font-family: "JetBrains Mono", monospace; font-size: 0.65rem; line-height: 1.2; text-transform: uppercase; font-weight: 800; }

.timeline { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 246px), 1fr)); gap: 10px; }
.timelineItem { min-height: 132px; }
.slideRange { display: block; color: var(--ai); font-family: "JetBrains Mono", monospace; font-size: 0.7rem; line-height: 1.25; font-weight: 800; margin-bottom: 8px; }
.logicBanner { margin-top: 14px; }

.articleGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr)); gap: 12px; }
.articleCard { display: grid; gap: 10px; align-content: start; }
.articleTop { display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap; }
.articleIndex { width: 34px; height: 34px; min-width: 34px; }
.metricWrap { row-gap: 7px; }
.metricPill { font-size: 0.66rem; padding: 5px 8px; }
.cautionBox { border-left: 3px solid var(--enji); background: rgba(159, 53, 58, 0.045); border-radius: 12px; padding: 10px 11px; }
.cautionBox strong { display: block; margin-bottom: 4px; color: var(--enji); }
.cautionBox p { margin: 0; }
.visualModel.wide { margin-top: 12px; }
.chain, .formulaBoard { display: grid; grid-template-columns: 1fr; gap: 9px; margin: 12px 0; }
.chain div, .formulaBoard div { display: grid; grid-template-columns: 32px minmax(0, 1fr); column-gap: 10px; row-gap: 3px; align-items: start; min-height: 0; padding: 12px 14px; }
.chain div > .langText, .formulaBoard div > .langText { grid-column: 2; display: block; font-weight: 750; color: var(--ai); line-height: 1.38; }
.chain div > span:first-child, .formulaBoard div > span:first-child { grid-column: 1; grid-row: 1 / span 2; }

.twoCol, .strategyCascade, .riskGrid, .toolGrid, .frameworkGrid, .participationGrid, .assignmentGrid, .platformGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 330px), 1fr)); gap: 12px; margin-bottom: 12px; }
.cleanList { margin: 0; padding-left: 18px; }
.cleanList li { margin: 5px 0; line-height: 1.52; }
.definitionCard { background: rgba(123, 141, 66, 0.055); }

.decisionGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 235px), 1fr)); gap: 10px; margin-bottom: 12px; }
.decisionCard { display: grid; gap: 7px; align-content: start; }
.decisionCard > span { margin-bottom: 3px; }
.decisionCard h3 { margin-bottom: 0; }
.question { color: var(--ai); font-weight: 850; margin-bottom: 0.35rem; }

.miniTable { display: grid; gap: 7px; }
.miniRow { display: grid; grid-template-columns: minmax(126px, 0.72fr) minmax(164px, 0.9fr) minmax(220px, 1.45fr); gap: 8px; }
.miniRow > div { border-radius: 12px; padding: 9px; font-size: 0.91rem; }
.miniKey { color: var(--ai); font-weight: 850; }

.flowBoard { margin-top: 12px; }
.flowNodes { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 7px; align-items: stretch; margin: 12px 0; }
.flowNode { border: 1px solid rgba(22, 94, 131, 0.2); background: var(--soft2); border-radius: 15px; min-height: 62px; padding: 10px; display: grid; place-items: center; text-align: center; color: var(--ai); font-weight: 850; font-size: 0.87rem; line-height: 1.35; }
.flowArrow { display: none; }
.processModel { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 8px; align-items: center; margin-top: 12px; }
.processBox { min-height: 96px; display: grid; align-content: center; text-align: center; font-weight: 850; }
.processBox small { display: block; margin-top: 7px; color: var(--muted); font-family: "JetBrains Mono", monospace; font-size: 0.66rem; line-height: 1.35; }
.processBox.highlight { background: rgba(159, 53, 58, 0.045); }
.processArrow { color: var(--enji); font-size: 22px; font-weight: 850; text-align: center; }

.strategyCascade { align-items: stretch; }
.cascadeCard { display: grid; align-content: start; gap: 6px; }
.cascadeNum { margin-bottom: 4px; }
.questionBox { margin-top: 8px; padding-top: 9px; border-top: 1px solid var(--line); color: var(--enji); font-weight: 850; line-height: 1.42; }
.swotGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 10px; margin-bottom: 12px; }
.swotBox > span:first-child { color: var(--muted); font-family: "JetBrains Mono", monospace; font-size: 0.66rem; font-weight: 800; }
.swotBox h4 { color: var(--ai); margin: 5px 0; }
.opsLine { color: var(--enji); font-weight: 800; }
.coreBoard { border: 1px solid var(--line); border-radius: 20px; background: rgba(255, 253, 246, 0.92); margin: 12px 0; padding: 14px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; align-items: stretch; }
.coreCenter { grid-column: 1 / -1; justify-self: center; width: min(100%, 240px); border: 1px solid rgba(22, 94, 131, 0.22); border-radius: 999px; background: var(--soft); color: var(--ai); padding: 13px 16px; text-align: center; font-family: "JetBrains Mono", monospace; font-weight: 850; line-height: 1.25; }
.corePoint { border: 1px solid var(--line); border-radius: 16px; padding: 12px; background: var(--paper2); }
.corePoint h3 { margin-bottom: 5px; }
.corePoint p { margin: 0; font-size: 0.92rem; }
.riskGrid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr)); }
.riskItem h4, .toolCard h3, .frameworkCard h3, .participationGrid h3 { color: var(--ai); }
.compareTable { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 15px; overflow: hidden; margin-bottom: 10px; }
.compareTable div { padding: 9px; border-bottom: 1px solid var(--line); background: var(--paper2); font-size: 0.92rem; }
.compareTable div:nth-child(2n-1) { border-right: 1px solid var(--line); }
.compareHead { background: var(--soft) !important; color: var(--ai); font-weight: 850; }

.npdFlow, .dfmSteps, .focusList, .checklistPanel { display: grid; grid-template-columns: 1fr; gap: 10px; margin: 12px 0; }
.npdFlow article, .dfmSteps article, .focusList div, .checklistPanel button { display: grid; grid-template-columns: 34px minmax(0, 1fr); column-gap: 12px; row-gap: 4px; align-items: start; width: 100%; min-height: 0; }
.npdFlow article > span:first-child, .dfmSteps article > span:first-child, .focusList div > span:first-child, .checklistPanel button > span:first-child { grid-column: 1; grid-row: 1 / span 2; }
.npdFlow article > h3, .npdFlow article > p, .dfmSteps article > h4, .dfmSteps article > p, .focusList div > .langText, .checklistPanel button > .langText { grid-column: 2; width: 100%; margin: 0; }
.npdFlow article h3, .dfmSteps article h4, .focusList div > .langText, .checklistPanel button > .langText { display: block; font-size: 0.98rem; line-height: 1.42; font-weight: 750; color: var(--ink); }
.npdFlow article p, .dfmSteps article p { color: var(--muted); font-size: 0.93rem; line-height: 1.5; }
.toolGrid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 290px), 1fr)); }
.platformGrid { margin-top: 10px; }
.platformGrid div p { margin: 0; }
.dfmBoard { margin: 12px 0; }

.frameworkGrid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr)); }
.assignmentGrid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr)); }
.assignmentCard ul { margin: 0; padding-left: 18px; }
.assignmentCard li { margin: 6px 0; line-height: 1.52; }
.scheduleCard { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.scheduleTable { display: grid; grid-template-columns: 52px 78px minmax(320px, 1fr) 160px; min-width: 760px; border: 1px solid var(--line); border-radius: 14px; overflow: hidden; font-size: 0.84rem; }
.scheduleTable div { padding: 7px 8px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--paper2); line-height: 1.35; }
.scheduleTable div:nth-child(4n) { border-right: none; }
.scheduleHead { background: var(--soft) !important; color: var(--ai); font-weight: 850; }
.dueCell { color: var(--enji); font-weight: 850; }

.participationGrid { grid-template-columns: 1fr; }
.participationGrid article p { margin: 0; }
.formulaBoard { grid-template-columns: 1fr; }
.checklistPanel button { cursor: pointer; text-align: left; font: inherit; }
.checklistPanel button.checked { background: rgba(123, 141, 66, 0.08); border-color: rgba(123, 141, 66, 0.34); }
.closePanel { margin-top: 12px; background: rgba(0, 92, 175, 0.04); }

.modeDock { position: fixed; right: 14px; bottom: 14px; z-index: 60; display: grid; justify-items: end; gap: 6px; font-family: "JetBrains Mono", monospace; }
.modeToggle { border: 1px solid var(--line); background: rgba(255, 253, 246, 0.98); color: var(--ink); border-radius: 999px; min-width: 62px; padding: 7px 10px; display: inline-flex; justify-content: center; align-items: center; box-shadow: 0 10px 24px rgba(31,37,40,.12); cursor: pointer; }
.modeToggle span { display: none; }
.modeToggle strong { color: var(--ai); font-size: 0.72rem; line-height: 1; white-space: nowrap; }
.modeMenu { display: none; min-width: 122px; border: 1px solid var(--line); border-radius: 14px; padding: 6px; background: rgba(255, 253, 246, 0.99); box-shadow: 0 12px 28px rgba(31,37,40,.14); }
.modeDock.open .modeMenu { display: grid; gap: 4px; }
.modeMenu button { border: 1px solid transparent; background: transparent; color: var(--muted); border-radius: 10px; padding: 8px 10px; text-align: left; cursor: pointer; font-size: 0.74rem; line-height: 1.2; font-weight: 850; }
.modeMenu button:hover, .modeMenu button.active { background: var(--soft); color: var(--ai); border-color: rgba(22,94,131,.14); }

@media (max-width: 1080px) {
  .class2Root { padding: 14px 12px 92px; }
  .layout, .sourceCard { grid-template-columns: 1fr; gap: 12px; }
  .sidebar { position: sticky; top: 6px; z-index: 12; max-height: none; overflow: hidden; padding: 9px; }
  .sidebar nav { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px; scrollbar-width: thin; }
  .sidebar button { min-width: 136px; width: auto; }
  .sideSummary { display: none; }
  .coreBoard { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .class2Root { padding: 9px 8px 88px; font-size: 14.8px; }
  .hero, .sectionBlock { padding: 12px; border-radius: 18px; }
  .heroTitle { font-size: clamp(1.62rem, 8.3vw, 2.14rem); line-height: 1.1; }
  .heroSub { font-size: 0.93rem; }
  .heroCallout, .logicBanner { grid-template-columns: 28px minmax(0, 1fr); padding: 11px; border-radius: 15px; }
  .sectionHead { grid-template-columns: 32px minmax(0, 1fr); gap: 9px; }
  .sectionIcon { width: 32px; height: 32px; }
  .sectionHead h2 { font-size: 1.16rem; line-height: 1.22; }
  .card, .articleCard, .timelineItem, .assignmentCard, .scheduleCard, .visualModel, .flowBoard, .dfmBoard, .closePanel, .decisionCard, .riskItem, .toolCard, .frameworkCard, .participationGrid article, .cascadeCard, .swotBox, .platformGrid div, .sourceItem, .chain div, .formulaBoard div, .miniRow > div, .processBox, .npdFlow article, .dfmSteps article, .focusList div, .checklistPanel button { padding: 10px 11px; border-radius: 14px; }
  .articleGrid, .twoCol, .strategyCascade, .riskGrid, .toolGrid, .frameworkGrid, .participationGrid, .assignmentGrid, .platformGrid, .swotGrid, .timeline, .decisionGrid, .sourceGrid { grid-template-columns: 1fr; }
  .miniRow, .flowNodes, .processModel, .compareTable { grid-template-columns: 1fr; }
  .processArrow { transform: rotate(90deg); }
  .npdFlow article, .dfmSteps article, .focusList div, .formulaBoard div, .checklistPanel button { grid-template-columns: 30px minmax(0, 1fr); column-gap: 10px; }
  .modeDock { right: 9px; bottom: 9px; }
  .modeToggle { min-width: 58px; padding: 7px 8px; }
}

@media (max-width: 430px) {
  .class2Root { padding: 7px 6px 86px; }
  .hero, .sectionBlock { padding: 10px; }
  .badge, .metricPill, .sourceTag { font-size: 0.63rem; padding: 5px 7px; }
  .npdFlow article, .dfmSteps article, .focusList div, .checklistPanel button { grid-template-columns: 28px minmax(0, 1fr); }
}

@media print {
  .modeDock, .sidebar { display: none !important; }
  .class2Root { background: #fff; padding: 0; color: #111; }
  .layout { grid-template-columns: 1fr; }
  .hero, .sectionBlock { box-shadow: none; break-inside: avoid; }
}
`;
