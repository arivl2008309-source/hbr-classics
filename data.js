/**
 * HBR 经典文章数据集
 * ----------------------------------------------------------------------------
 * 说明：
 *  - 元数据（标题/作者/年份/分类）均基于公开信息整理，力求准确。
 *  - 摘要（summary / 详情 detail）为「原创中文改写」，仅提炼核心观点，
 *    不构成对原文的复制，尊重哈佛商业评论（HBR）版权。
 *  - 外链优先指向 HBR 官方「文章详情页」（已逐篇核实直链）；
 *    个别仅以书籍形式出版的篇目（如《执行》）回退至 HBR 官方检索页。
 *    原文部分需订阅，均尊重哈佛商业评论（HBR）版权。
 *
 * 扩展方式：直接往 ARTICLES 数组里追加对象即可，页面会自动渲染。
 */

const META = {
  lastUpdated: "2026-08-06",
  newIds: [
    "why-design-thinking-works",
    "hard-truth-innovative-cultures",
    "leaders-guide-corporate-culture",
    "begin-with-trust",
    "age-of-continuous-connection"
  ]
};

const ARTICLES = [
  {
    id: "marketing-myopia",
    url: "https://hbr.org/2004/07/marketing-myopia",
    zhTitle: "营销短视",
    enTitle: "Marketing Myopia",
    author: "Theodore Levitt",
    year: 1960,
    category: "营销",
    tags: ["客户需求", "长期主义"],
    summary:
      "企业衰败往往源于对自身业务的狭隘定义——铁路公司以为自己做的是“铁路”生意，而非“运输”生意。Levitt 主张企业应从“满足顾客需求”而非“兜售产品”出发，才能跨越技术更替持续生长。",
    detail:
      "Levitt 指出，每一个重大行业的衰落都伴随着“自满于产品、忽视客户”的短视。当企业把自身定义为某种产品的生产者，而非某种需求的满足者，就会在替代品出现时被淘汰。文章以石油、汽车、影视等行业为例，论证了“增长受限于对业务的想象”这一核心命题，并呼吁管理者以“客户想要完成的任务”来重新定义公司。",
  },
  {
    id: "core-competence",
    url: "https://hbr.org/1990/05/the-core-competence-of-the-corporation",
    zhTitle: "企业的核心竞争力",
    enTitle: "The Core Competence of the Corporation",
    author: "C.K. Prahalad & Gary Hamel",
    year: 1990,
    category: "战略",
    tags: ["核心竞争力", "多元化"],
    summary:
      "真正持久的竞争优势来自“核心竞争力”——跨越业务单元协调多种生产技能与技术的集体学习能力，而非单个产品或事业部。文章提出用核心竞争力而非业务组合来思考公司版图。",
    detail:
      "两位作者批评了以业务组合（SBU）为中心的战略思维，认为它导致公司被拆成互不相关的碎块。他们定义“核心竞争力”为：进入多种市场的潜能、对终端客户感知价值的显著贡献、竞争对手难以模仿的整合能力。本田的发动机技术、佳能的光学与微电子即为例证。文章还给出辨别与培育核心竞争力的操作框架。",
  },
  {
    id: "what-is-strategy",
    url: "https://hbr.org/1996/11/what-is-strategy",
    zhTitle: "什么是战略？",
    enTitle: "What Is Strategy?",
    author: "Michael E. Porter",
    year: 1996,
    category: "战略",
    tags: ["竞争", "取舍", "定位"],
    summary:
      "运营效益不是战略。战略的本质是“与众不同”——选择独特的价值主张，并主动做出取舍，建立与之匹配的运营活动系统。没有取舍，就没有战略。",
    detail:
      "Porter 区分了“运营效益”（做同样的事比别人更好）与“战略”（做与众不同的事）。当企业只追求运营效益，会陷入零和竞争与趋同。真正战略需要：独特的价值主张、一套与对手不同的活动链、以及 deliberate 的取舍。他并以西南航空、宜家为例，说明“配称（fit）”如何让战略难以复制。",
  },
  {
    id: "five-forces",
    url: "https://hbr.org/2008/01/the-five-competitive-forces-that-shape-strategy",
    zhTitle: "塑造战略的五种竞争力",
    enTitle: "The Five Competitive Forces That Shape Strategy",
    author: "Michael E. Porter",
    year: 1979,
    category: "战略",
    tags: ["行业分析", "竞争结构"],
    summary:
      "行业盈利能力由五种力量共同决定：现有竞争者、潜在进入者、替代品、供应商议价力、买方议价力。理解这五种力量，是制定竞争战略的起点。",
    detail:
      "Porter 的竞争五力模型是战略分析的基石。文章系统解释了为何行业结构（而非单纯“是否热门”）决定长期盈利：供给侧与需求侧的议价能力、进入壁垒、替代威胁，加上现有对手的对抗强度，共同挤压利润池。管理者据此找到“结构洞”——在哪种力量薄弱处建立地位，并影响结构而非被动接受。",
  },
  {
    id: "blue-ocean",
    url: "https://hbr.org/2004/10/blue-ocean-strategy",
    zhTitle: "蓝海战略",
    enTitle: "Blue Ocean Strategy",
    author: "W. Chan Kim & Renée Mauborgne",
    year: 2004,
    category: "战略",
    tags: ["价值创新", "差异化"],
    summary:
      "在血腥竞争的“红海”之外，企业可以开创新需求、创造“蓝海”——无人竞争的市场空间。关键在于“价值创新”：同时追求差异化和低成本，打破价值-成本取舍。",
    detail:
      "Kim 与 Mauborgne 挑战了“竞争即零和”的默认假设。他们以太阳马戏团、Netflix、黄尾葡萄酒为例，说明蓝海开创者不是击败对手，而是让对手变得无关紧要：通过“剔除-减少-提升-创造”四步动作框架，重构买方价值要素，开创无人争夺的新需求。文章还提供了蓝海战略的制定与执行工具。",
  },
  {
    id: "managing-oneself",
    url: "https://hbr.org/2005/01/managing-oneself",
    zhTitle: "自我管理",
    enTitle: "Managing Oneself",
    author: "Peter F. Drucker",
    year: 1999,
    category: "自我管理",
    tags: ["优势", "知识工作者"],
    summary:
      "知识工作者必须成为自己的 CEO。Drucker 给出方法：认清自己的优势（通过反馈分析法）、了解自己的做事方式与价值观，并决定“我归属于何处”。",
    detail:
      "Drucker 预言，21 世纪的决定性资源是知识工作者的生产力，而其前提是“自我管理”。他提出具体工具：用“反馈分析法”每隔数月复盘决策结果以识别优势；弄清自己是“阅读型”还是“倾听型”、如何与别人共事、如何学习；明确价值观；最后主动选择“我该在哪种组织、做什么贡献”。这是一篇关于“经营自己”的元管理经典。",
  },
  {
    id: "what-makes-a-leader",
    url: "https://hbr.org/2004/01/what-makes-a-leader",
    zhTitle: "领导者特质",
    enTitle: "What Makes a Leader?",
    author: "Daniel Goleman",
    year: 1998,
    category: "领导力",
    tags: ["情商", "同理心"],
    summary:
      "智商与技术能力是“门槛”，决定领导者成败的是情商（EI）。Goleman 提出情商的五个维度：自我觉察、自我调节、内驱力、同理心、社交技能。",
    detail:
      "基于对不同层级管理者的研究，Goleman 论证：在顶尖领导者中，情商对绩效的贡献远超智商与专业技能。情商的五个构成——自我觉察、自我调节、内在动机、同理心、社交技能——共同决定一个人能否激发追随。文章还指出，情商可通过训练提升，并给出各维度的具体行为刻画。",
  },
  {
    id: "measure-your-life",
    url: "https://hbr.org/2010/07/how-will-you-measure-your-life",
    zhTitle: "你如何衡量你的人生？",
    enTitle: "How Will You Measure Your Life?",
    author: "Clayton M. Christensen",
    year: 2010,
    category: "自我管理",
    tags: ["人生", "资源分配"],
    summary:
      "用商业理论审视人生：资源分配理论提醒我们，日复一日的“边际思维”会悄悄夺走对家庭与友谊的投入。事业成功不等于人生成功，须有意识地为真正重要的事配置资源。",
    detail:
      "Christensen 把他在颠覆式创新中的理论用于人生：企业因“为眼前最优客户配置资源”而忽视颠覆者，个人也会因“为当下最紧迫的工作配置时间”而忽视家庭与诚信。他区分“谋生”与“使命感”，指出真正激励人的是“需要你”的工作，并以“百分之百坚守原则”回应“边际妥协”的诱惑。",
  },
  {
    id: "innovators-dilemma",
    url: "https://hbr.org/1995/01/disruptive-technologies-catching-the-wave",
    zhTitle: "创新者的窘境（颠覆性创新）",
    enTitle: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    year: 1997,
    category: "创新",
    tags: ["颠覆性创新", "技术更替"],
    summary:
      "顶尖企业之所以失败，恰恰是因为它们“做对了所有事”——倾听最优客户、追求高利润，却错过了性能过剩后崛起的颠覆性技术。文章揭示延续性创新与颠覆性创新的根本差异。",
    detail:
      "Christensen 提出“颠覆性创新”框架：延续性创新沿既有维度提升性能，服务主流高端；颠覆性创新起初性能更低、但更简单便宜，从边缘市场切入，随性能改善上攻主流。成熟企业为保利润专注高端，把边缘让给新进入者，最终被颠覆。文章给出“独立机构 + 独立成本结构”的应对之道。",
  },
  {
    id: "balanced-scorecard",
    url: "https://hbr.org/1992/01/the-balanced-scorecard-measures-that-drive-performance-2",
    zhTitle: "平衡计分卡",
    enTitle: "The Balanced Scorecard",
    author: "Robert S. Kaplan & David P. Norton",
    year: 1992,
    category: "绩效管理",
    tags: ["KPI", "战略执行"],
    summary:
      "仅看财务指标会误导战略执行。平衡计分卡从四个维度衡量组织：财务、客户、内部流程、学习与成长，把愿景转化为可执行的指标体系。",
    detail:
      "Kaplan 与 Norton 批评单纯财务导向的考核滞后且片面。他们设计四层视角：财务（股东怎么看）、客户（客户怎么看）、内部流程（必须在哪些流程领先）、学习与成长（能否持续创新）。四层以“战略因果链”相连，使抽象战略变成可追踪的指标与行动，成为战略执行的标准工具。",
  },
  {
    id: "execution",
    zhTitle: "执行：完成任务的纪律",
    enTitle: "Execution: The Discipline of Getting Things Done",
    author: "Larry Bossidy & Ram Charan",
    year: 2002,
    category: "执行",
    tags: ["落地", "领导力"],
    summary:
      "战略固然重要，但缺少执行一切归零。执行是一门纪律，是领导者核心职责；文章给出七项必备行为与“执行文化”的构建方式。",
    detail:
      "曾任霍尼韦尔 CEO 的 Bossidy 与顾问 Charan 强调：执行不是战术细节，而是战略不可分割的部分，是领导者每日亲力亲为的核心工作。他们剖析执行不力的根因（目标与资源脱节、缺乏坦诚、用人不当），并给出七项行为准则：了解你的业务与人员、实事求是、设定明确优先项、后续追踪、论功行赏、育人、洞见自我。",
  },
  {
    id: "competing-on-analytics",
    url: "https://hbr.org/2006/01/competing-on-analytics",
    zhTitle: "用分析力竞争",
    enTitle: "Competing on Analytics",
    author: "Thomas H. Davenport",
    year: 2006,
    category: "数据分析",
    tags: ["数据驱动", "决策"],
    summary:
      "领先企业把数据分析变成核心竞争力：用数据驱动每个决策，并围绕分析能力重构流程与组织，从而建立对手难以模仿的优势。",
    detail:
      "Davenport 观察到，企业竞争正从“谁有信息”转向“谁更会分析”。他用成熟度阶梯描述：从分散描述性分析，到统一的企业级分析，再到真正“分析型竞争者”（如 Capital One、Amazon、Wal-Mart）。关键不只是工具，而是把分析嵌入决策流程、培养分析人才、并以数据挑战直觉的组织文化。",
  },
  {
    id: "theory-of-business",
    url: "https://hbr.org/1994/09/the-theory-of-the-business",
    zhTitle: "经营理论",
    enTitle: "The Theory of the Business",
    author: "Peter F. Drucker",
    year: 1994,
    category: "战略",
    tags: ["假设", "组织"],
    summary:
      "每个组织都运行在一套隐含的“经营理论”之上（关于市场、客户、价值的假设）。当假设与现实脱节却未被更新，曾经的卓越企业会骤然失速。",
    detail:
      "Drucker 认为，企业的成败不靠运气，而靠其“经营理论”的有效性——关于外部环境（市场、客户、价值）与内部能力的一套假设。当这些假设与现实背离（如 AT&T 对管制的误判），若不及时重构，组织将迅速溃败。文章给出检验理论的三个问题，并指出理论需随环境变化而“有计划的放弃”与更新。",
  },
  {
    id: "leadership-that-gets-results",
    url: "https://hbr.org/2000/03/leadership-that-gets-results",
    zhTitle: "见效的领导力",
    enTitle: "Leadership That Gets Results",
    author: "Daniel Goleman",
    year: 2000,
    category: "领导力",
    tags: ["领导风格", "情境"],
    summary:
      "不存在唯一正确的领导风格。Goleman 区分六种风格（指令、愿景、亲和、民主、领跑、教练），指出领导者须像切换乐器一样按情境调用，方能奏出“共鸣”。",
    detail:
      "在《领导者特质》之后，Goleman 进一步把情商落到可操作的“领导风格”。六种风格各有情绪氛围与适用场景：愿景型激发、教练型育才、亲和型凝聚、民主型共识、领跑型求优（慎用）、指令型救火（极少用）。数据显示，领导者越能灵活切换风格、营造“共鸣型”氛围，团队绩效越高。",
  },
  {
    id: "good-to-great",
    url: "https://hbr.org/2005/07/level-5-leadership-the-triumph-of-humility-and-fierce-resolve",
    zhTitle: "从优秀到卓越",
    enTitle: "Good to Great",
    author: "Jim Collins",
    year: 2001,
    category: "领导力",
    tags: ["卓越", "文化"],
    summary:
      "平庸公司跃升为卓越公司的关键：第五级领导力（谦逊而坚定）、刺猬理念（专注热爱与擅长的交集）、先人后事的文化，以及直面残酷现实。",
    detail:
      "Collins 团队用五年研究对比了“实现跨越”与“始终平庸”的公司，提炼出跨越所需的纪律：第 5 级领导者把雄心归于事业而非自我；刺猬理念聚焦“你能在什么上做到世界最好”的交集；先选对人再定方向；直面残酷事实但坚信终将胜利；以“飞轮”持续积蓄动能而非追逐虚火。",
  },
  {
    id: "break-all-the-rules",
    url: "https://hbr.org/2005/03/what-great-managers-do",
    zhTitle: "首先，打破成规",
    enTitle: "First, Break All the Rules",
    author: "Marcus Buckingham & Curt Coffman",
    year: 1999,
    category: "领导力",
    tags: ["才干", "员工管理"],
    summary:
      "基于盖洛普对百万员工的调研，伟大管理者的共同点不是“照规矩做人”，而是打破传统：只选拔才干、界定结果而非步骤、发挥优势而非纠正弱点。",
    detail:
      "两位盖洛普研究者颠覆了“优秀管理者千篇一律”的假设。数据表明，顶尖经理人的做法彼此相左，却都遵循四条反直觉原则：选拔看“才干”而非经验/智力、界定期望结果而非规定步骤、用优势而非纠正缺点来谈发展、因才施用而非试图把人塑造成完人。文章并介绍 Q12 员工敬业度量表。",
  },
  {
    id: "one-number",
    url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
    zhTitle: "你需要用来增长的那一个数字",
    enTitle: "The One Number You Need to Grow",
    author: "Fred Reichheld",
    year: 2003,
    category: "客户体验",
    tags: ["NPS", "忠诚度"],
    summary:
      "净推荐值（NPS）——“你有多大可能把我们推荐给朋友？”——比复杂满意度模型更能预测增长。一个简单问题，统一了客户忠诚度的度量。",
    detail:
      "Reichheld 批评满意度调查冗长且与利润脱节。他提出用单一问题衡量忠诚度：按 0–10 分推荐意愿，将客户分为推荐者、被动者、贬损者，NPS=推荐者占比−贬损者占比。实证显示 NPS 与口碑、增长强相关，且便于跨业务对比。文章也警示：要配套“闭环改进”而非只看分数。",
  },
  {
    id: "stop-delighting",
    url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
    zhTitle: "别再试图取悦客户",
    enTitle: "Stop Trying to Delight Your Customers",
    author: "Matthew Dixon, Karen Freeman & Nicholas Toman",
    year: 2010,
    category: "客户体验",
    tags: ["客户费力", "忠诚度"],
    summary:
      "取悦客户常被证明是浪费。真正提升忠诚度的，是“减少客户费力”——顺畅解决问题，比超额惊喜更有效。文章提出 Customer Effort Score。",
    detail:
      "基于大量客服数据分析，作者发现“超出预期”的惊喜对忠诚度提升有限，而“费力地解决问题”会显著推高流失。他们提出“客户费力指数（CES）”——“为了解决问题，你得费多大力？”——并证明降低费力比取悦更能留住客户。对策包括：主动预判问题、简化流程、授权一线一次解决。",
  },
  {
    id: "why-led-by-you",
    url: "https://hbr.org/2000/09/why-should-anyone-be-led-by-you",
    zhTitle: "凭什么由你领导？",
    enTitle: "Why Should Anyone Be Led by You?",
    author: "Rob Goffee & Gareth Jones",
    year: 2000,
    category: "领导力",
    tags: ["真我领导", "追随"],
    summary:
      "有效领导源于“真我”而非模仿。领导者须展现适度的脆弱、独特的本色，并敏感于组织情境，才能赢得追随。",
    detail:
      "Goffee 与 Jones 反对“领导可以标准化培训”的迷思。他们主张：最好的领导是“让自己更像自己”——在恰当时机暴露适度弱点以建立信任，同时保有鲜明个性与故事。领导者还要读得懂组织情境（何时紧、何时松），并管理好“自我与他者”的边界。追随不是被命令，而是被真实吸引。",
  },
  {
    id: "driving-change",
    url: "https://hbr.org/1995/03/leading-change-why-transformation-efforts-fail-2",
    zhTitle: "推动变革",
    enTitle: "Driving Change",
    author: "John P. Kotter",
    year: 1996,
    category: "变革管理",
    tags: ["变革管理", "组织"],
    summary:
      "变革失败多因操之过急。Kotter 提出八步变革法：从建立紧迫感到固化成果，步步为营，避免“以重组代替变革”的常见陷阱。",
    detail:
      "Kotter 研究了大量转型成败案例，归纳出八步法：树立紧迫感、组建指导联盟、确立愿景、沟通愿景、授权行动、创造短期胜果、巩固成果再推进、把变革植入文化。他指出，多数失败源于跳过早期步骤、或把“重组”误当“变革”。文章为企业提供了可落地的变革路线图。",
  },
  {
    id: "experience-economy",
    url: "https://hbr.org/1998/07/welcome-to-the-experience-economy",
    zhTitle: "体验经济",
    enTitle: "Welcome to the Experience Economy",
    author: "B. Joseph Pine II & James H. Gilmore",
    year: 1998,
    category: "营销",
    tags: ["体验", "价值阶梯"],
    summary:
      "经济价值进阶到“体验”层——企业不再只卖商品或服务，而是设计值得记忆的体验。文章划分了从商品到服务的体验阶梯，并给出收费体验的设计原则。",
    detail:
      "Pine 与 Gilmore 提出价值进阶的四阶段：商品→产品→服务→体验。当商品同质化、服务易模仿，企业转向“舞台式体验”——为顾客创造可记忆、可沉浸的时刻（如迪士尼、星巴克）。他们给出设计体验的准则：主题化、正面印象、消除负面、提供纪念品、调动五官，并探讨“变身经济”（顾客付费让自己改变）的前瞻。",
  },

  /* ===================== 近年重要文章（2021–2026） ===================== */

  {
    id: "retain-employees-purpose",
    url: "https://hbr.org/2021/10/to-retain-employees-give-them-a-sense-of-purpose-and-community",
    zhTitle: "留人，靠的是意义感与共同体",
    enTitle: "To Retain Employees, Give Them a Sense of Purpose and Community",
    author: "Ron Carucci",
    year: 2021,
    category: "人才管理",
    tags: ["留任", "意义感", "大辞职"],
    summary:
      "大辞职潮下，企业常误以为加薪就能留人。Carucci 指出，真正驱动留任的是“意义感”与“共同体感”——员工因相信工作有价值、且归属于一个社群而留下。",
    detail:
      "文章基于大辞职（Great Resignation）背景，强调留人不能只靠薪酬与灵活办公。作者提出，组织须帮助员工看见工作对客户与社会的真实影响，并营造彼此联结的社群。当员工感到“我的存在有意义、我被需要”，流失率显著下降。这对希望稳住人才的管理者是一剂对症药。",
  },
  {
    id: "great-resignation",
    url: "https://hbr.org/2022/03/the-great-resignation-didnt-start-with-the-pandemic",
    zhTitle: "大辞职并非始于疫情",
    enTitle: "The Great Resignation Didn't Start with the Pandemic",
    author: "Joseph Fuller & William Kerr",
    year: 2022,
    category: "人才管理",
    tags: ["大辞职", "劳动力", "留任"],
    summary:
      "Fuller 与 Kerr 指出，离职潮并非疫情突袭的产物，而是人口结构、劳动力参与率、入职率下降等五大长期力量叠加的结果，疫情只是催化剂。",
    detail:
      "两人用数据拆解“大辞职”：婴儿潮退休、女性劳动参与波动、青年入职率走低、在职者流动意愿结构性下降等，使劳动力供给在疫情前已趋紧。文章警示企业：把离职简单归咎于“员工变了心态”会误判，真正的挑战是供给侧的长期收紧，须从招聘、培养、留任系统入手。",
  },
  {
    id: "quiet-quitting-bad-bosses",
    url: "https://hbr.org/2022/08/quiet-quitting-is-about-bad-bosses-not-bad-employees",
    zhTitle: "安静离职，错在老板而非员工",
    enTitle: "Quiet Quitting Is About Bad Bosses, Not Bad Employees",
    author: "Jack Zenger & Joseph Folkman",
    year: 2022,
    category: "领导力",
    tags: ["安静离职", "员工投入", "管理"],
    summary:
      "“安静离职”常被归咎于员工心态佛系。Zenger 与 Folkman 用数十年测评数据反驳：它本质是关于糟糕的管理者——员工在获得投入时才愿意多走一步。",
    detail:
      "两位作者基于大量管理者评估指出，员工投入度与直属上级高度相关。当经理缺乏认可、辅导与发展机会，员工便退守“只做分内事”。文章把安静离职重新定义为管理失败的信号，而非员工品行问题，并给出管理者可立即上手的具体行为清单。",
  },
  {
    id: "esg-under-attack",
    url: "https://hbr.org/2023/12/esg-is-under-attack-how-should-your-company-respond",
    zhTitle: "ESG 遭围攻，企业该如何回应？",
    enTitle: "ESG Is Under Attack. How Should Your Company Respond?",
    author: "Andrew Winston",
    year: 2023,
    category: "ESG与可持续",
    tags: ["ESG", "可持续", "风险"],
    summary:
      "面对“反 ESG”浪潮，Winston 主张退守不是选项。他给出企业回应框架：把 ESG 与核心业务韧性绑定，用财务语言沟通，并在价值观上立场鲜明。",
    detail:
      "2022 年起，ESG 在美国遭遇政治与法律层面的围剿。作者认为，退缩既不明智也危险——因为气候、社会责任风险真实存在且影响长期价值。他建议企业：将可持续发展嵌入战略而非公关；用“韧性/风险/成本”而非争议叙事沟通；联合盟友形成合力；并对短期政治噪音保持定力。",
  },
  {
    id: "embracing-genai-work",
    url: "https://hbr.org/2024/09/embracing-gen-ai-at-work",
    zhTitle: "拥抱生成式 AI 进职场",
    enTitle: "Embracing Gen AI at Work",
    author: "H. James Wilson & Paul R. Daugherty",
    year: 2024,
    category: "AI与自动化",
    tags: ["生成式AI", "工作重塑", "人机协作"],
    summary:
      "Wilson 与 Daugherty 认为，生成式 AI 不再是程序员专属，而是任何人都可用自然语言调用的通用工具。它终将重塑岗位，但价值取决于“人如何重新设计工作”。",
    detail:
      "两位长期研究 AI 与自动化的作者指出，GenAI 的突破在于“用日常语言即可指挥”，门槛骤降。它不会简单取代岗位，而是把认知型任务分解后嵌入流程。企业真正的机会，是重新设计工作流、让人与 AI 协作，而非仅将其当作降本工具。文章提供了落地应用的思考框架。",
  },
  {
    id: "ab-test-hybrid",
    url: "https://hbr.org/2024/10/one-company-a-b-tested-hybrid-work-heres-what-they-found",
    zhTitle: "一家公司用 A/B 测试验证了混合办公",
    enTitle: "One Company A/B Tested Hybrid Work. Here's What They Found.",
    author: "Nicholas Bloom, James Liang & Ruobing Han",
    year: 2024,
    category: "组织管理",
    tags: ["混合办公", "远程", "实验"],
    summary:
      "Stanford 的 Bloom 等做了为期六个月、随机对照的混合办公实验：员工留任上升、生产率未降，连原本怀疑的管理者都被说服。",
    detail:
      "文章报告了一项严谨的现场实验：允许混合办公的员工离职率显著更低，生产率持平或略升，且员工满意度提高。六个月后，原先持怀疑态度的中层管理者态度逆转。研究给出三条经验：给员工选择权、明确协作日、用数据而非偏见管理。这是对“混合办公是否有效”最有力的实证回应之一。",
  },
  {
    id: "ai-environmental-impacts",
    url: "https://hbr.org/2024/07/the-uneven-distribution-of-ais-environmental-impacts",
    zhTitle: "AI 的环境代价分布并不均",
    enTitle: "The Uneven Distribution of AI's Environmental Impacts",
    author: "Shaolei Ren & Adam Wierman",
    year: 2024,
    category: "ESG与可持续",
    tags: ["AI能耗", "碳排", "可持续"],
    summary:
      "Ren 与 Wierman 提醒，AI 的环境代价高度不均：训练一个大模型耗电上千兆瓦时、碳排放数百吨，而收益与污染往往由不同群体承担。",
    detail:
      "文章揭示 AI 的“绿色账单”被低估且分布失衡——模型训练与推理的能耗集中在少数数据中心与地区，碳排放由当地承担，而智能红利却全球共享。作者呼吁在部署 AI 时纳入能耗与碳排的核算，推动更高效的硬件、绿色电力与算法，避免可持续叙事与真实足迹脱节。",
  },
  {
    id: "genai-market-research",
    url: "https://hbr.org/2025/05/how-gen-ai-is-transforming-market-research",
    zhTitle: "生成式 AI 正在重塑市场研究",
    enTitle: "How Gen AI Is Transforming Market Research",
    author: "Jeremy Korst, Stefano Puntoni & Olivier Toubia",
    year: 2025,
    category: "AI与自动化",
    tags: ["生成式AI", "市场研究", "消费者洞察"],
    summary:
      "Korst、Puntoni 与 Toubia 指出，GenAI 正从客服、内容生成，走向市场研究这一高价值环节：更快洞察、更低成本，但也带来方法论与偏差的新挑战。",
    detail:
      "市场研究长期依赖问卷、焦点小组与抽样，既慢又贵。三位作者认为 GenAI 能模拟消费者、生成假设、加速分析，让洞察近乎实时。但文章也警示：模型的“幻觉”与训练偏见可能污染结论，研究者须把 AI 当协作者而非替代品，保留人类判断与验证环节。",
  },
  {
    id: "mattering-at-work",
    url: "https://hbr.org/2025/05/the-power-of-mattering-at-work",
    zhTitle: "让员工感到“我被需要”的力量",
    enTitle: "The Power of Mattering at Work",
    author: "Zach Mercurio",
    year: 2025,
    category: "组织管理",
    tags: ["重要感", "敬业度", "意义"],
    summary:
      "Mercurio 提出，安静离职、大辞职、低敬业度的共同根因是员工“感受不到自己被需要（mattering）”。让人觉得“我对他人重要”，比加薪更能驱动投入。",
    detail:
      "文章区分了“参与（engagement）”与“重要感（mattering）”：前者是精力投入，后者是“我的存在被需要、被看见”的价值感。作者引用研究说明，当员工相信自己的工作真正影响到同事、客户与组织，会更主动、更忠诚。他给出管理者日常营造“重要感”的具体做法——从认可到授权到意义连接。",
  },
  {
    id: "genai-copyright",
    url: "https://hbr.org/2025/07/can-gen-ai-and-copyright-coexist",
    zhTitle: "生成式 AI 与版权能否共存？",
    enTitle: "Can Gen AI and Copyright Coexist?",
    author: "Michael D. Smith & Rahul Telang",
    year: 2025,
    category: "AI与自动化",
    tags: ["版权", "生成式AI", "治理"],
    summary:
      "Smith 与 Telang 追问：GenAI 公司大量使用未经授权的受版权材料训练模型，版权与 AI 能否共存？答案是可以，但需要新的授权与补偿机制。",
    detail:
      "文章梳理了 GenAI 训练的版权争议：模型从受保护作品中学习，却未向创作者付费，引发诉讼与信任危机。作者认为，零和对抗无益，出路在于建立类似音乐版税的“数据使用权”市场、透明披露训练来源、以及平台与创作者的利益共享，使创新与版权保护并行。",
  },
  {
    id: "ai-leadership-imperative",
    url: "https://hbr.org/2026/04/the-ai-leadership-imperative",
    zhTitle: "AI 领导力要务",
    enTitle: "The AI Leadership Imperative",
    author: "Adi Ignatius",
    year: 2026,
    category: "领导力",
    tags: ["AI领导力", "转型", "组织"],
    summary:
      "Ignatius 论道，AI 时代真正的分水岭不是技术，而是“以人为中心的转型领导力”：成功部署 AI 的企业，优先领导组织变革而非堆砌工具。",
    detail:
      "作为 HBR 主编，作者指出许多 AI 项目止步于试点，根源在领导力缺位。真正的“AI 领导力要务”是把人置于转型中心：明确愿景、重建岗位与技能、管理信任与焦虑、让一线参与共创。技术易得，组织能否随之进化才是胜负手。",
  },
  {
    id: "ai-broke-hiring",
    url: "https://hbr.org/2026/06/ai-has-broken-hiring-heres-how-to-fix-it",
    zhTitle: "AI 搞坏了招聘，该如何修补",
    enTitle: "AI Has Broken Hiring. Here's How to Fix It.",
    author: "Shraddha Sunil & Mudit Saraf",
    year: 2026,
    category: "人才管理",
    tags: ["招聘", "AI", "公平"],
    summary:
      "Sunil 与 Saraf 警示，AI 正在改写招聘：简历筛选、面试分析被自动化，但也可能放大偏见、奖励“表演型”候选人。文章给出重建甄选的方法。",
    detail:
      "随着 AI 渗透招聘各环节，传统信号（GPA、关键词匹配、流利表达）日益失准，甚至出现用 AI 优化简历的军备竞赛。两位作者建议：重新设计评估，考察真实能力与作品；用结构化、可解释的标准减少偏见；把 AI 用于扩大人才池而非机械筛除；并持续校验算法公平性。",
  },
  {
    id: "ai-slop",
    url: "https://hbr.org/2026/06/dont-let-ai-slop-muck-up-your-companys-processes",
    zhTitle: "别让 AI 废稿污染公司流程",
    enTitle: "Don't Let AI Slop Muck Up Your Company's Processes",
    author: "Matthias Holweg & Thomas H. Davenport",
    year: 2026,
    category: "AI与自动化",
    tags: ["知识质量", "AI治理", "流程"],
    summary:
      "Holweg 与 Davenport（即《用分析力竞争》作者）警告：GenAI 带来的“AI 废稿（slop）”正悄悄侵蚀组织知识的准确性与质量——这是企业层面的知识衰变。",
    detail:
      "两位作者指出，当员工把低质 AI 生成内容直接写入流程、文档与决策，错误与套话会层层累积，污染组织记忆。对策不是禁 AI，而是建立“知识质量护栏”：明确哪些环节禁止未审 AI 输出、训练甄别能力、保留专家校验，并把数据卫生纳入治理。",
  },
  {
    id: "ai-urgency-trap",
    url: "https://hbr.org/2026/07/when-developing-an-ai-strategy-beware-the-urgency-trap",
    zhTitle: "制定 AI 战略，当心「紧迫感陷阱」",
    enTitle: "When Developing an AI Strategy, Beware the Urgency Trap",
    author: "David De Cremer",
    year: 2026,
    category: "战略",
    tags: ["AI战略", "组织目的", "领导力"],
    summary: "De Cremer 指出，多数失败的 AI 项目源于领导者把 AI 当成解决「最紧迫问题」的速效药，追求速度与短期回报，却忽略了组织的根本目标。真正的竞争优势不在速度，而在「以目的为导向的整合」。",
    detail: "作者观察到，大量生成式 AI 项目未能产生可衡量的生产力提升，根源不是技术不行，而是领导者如何思考 AI。当企业只盯住运营层面的痛点（低效、成本、流程），AI 只能优化现状、无法创造价值。他提出三个转变：澄清组织目的、抵抗「紧迫感偏见」、以「愿景整合者」身份推动 AI 与战略对齐。",
  },
  {
    id: "ai-squeezing-managers",
    url: "https://hbr.org/2026/06/ai-is-squeezing-middle-managers",
    zhTitle: "AI 正在挤压中层管理者",
    enTitle: "AI Is Squeezing Middle Managers",
    author: "Gretchen Gavett",
    year: 2026,
    category: "组织管理",
    tags: ["AI", "中层管理", "组织"],
    summary: "Gavett 指出，生成式 AI 正悄悄接管中层管理者的传统职能（协调、汇报、信息传递），导致这一层级被压缩。这既是效率机会，也暗藏组织记忆与人才管道的流失风险。",
    detail: "作为 The Insider 通讯的综述，文章提示：当 AI 承担了大量「中转」工作，中层管理者若不能转向更具判断力和人际价值的工作，其存在感与职业发展将被削弱。管理者需要重新定位——从「信息传递者」变为「意义赋予者」与「人的发展者」。",
  },
  {
    id: "performance-first-management",
    url: "https://hbr.org/2026/07/the-case-for-performance-first-management",
    zhTitle: "绩效优先管理的理由",
    enTitle: "The Case for Performance-First Management",
    author: "Tony Guadagni, Tess Lawrence, Kalpana Tokas & Carolina Valencia",
    year: 2026,
    category: "组织管理",
    tags: ["绩效管理", "管理范式", "AI时代"],
    summary: "后疫情时代「以人为本」的管理范式已走到拐点。Gartner 研究显示，当绩效与生产力重新成为 CEO 议程首位，管理者需要从「保护团队」转向「赋能绩效」，在关怀与结果之间重新校准。",
    detail: "文章基于 Gartner 调研：三分之二管理者把首要角色视为「管理人」而非「管理事」，却只有约一半员工认为上级在反馈、优先级、支持上有效。绩效优先管理并非抛弃同理心，而是把灵活性作为达成结果的工具；它要求重建管理基本功、接受合理的不满、并将忠诚度从个体转向团队与组织成果。",
  },
  {
    id: "network-up-not-just",
    url: "https://hbr.org/2026/07/aspiring-leaders-dont-just-network-up",
    zhTitle: "有志领导者，别只往上社交",
    enTitle: "Aspiring Leaders, Don't Just Network Up",
    author: "Andy Lopata",
    year: 2026,
    category: "领导力",
    tags: ["人际网络", "职业声誉", "影响力"],
    summary: "有志于晋升的人常把精力放在结交高管上，但组织网络理论表明，影响力来自「桥接不同群体」的位置，而非离权力中心多近。只向上社交，容易赢得能见度却失去可信度。",
    detail: "Lopata 提出用「三维网络」思考关系：纵向（向上）、横向（同侪与日常协作圈）、外部（客户、供应商等）。多数职业声誉恰恰在横向网络中被塑造——当你不在场时，日常协作者的评价决定他人怎么看你。晋升很少依赖单一强关系，而取决于你的声誉在整张网络中是否一致。",
  },
  {
    id: "decision-rights-wrong",
    url: "https://hbr.org/2026/07/what-companies-get-wrong-about-decision-rights",
    zhTitle: "企业在「决策权」上常犯的错",
    enTitle: "What Companies Get Wrong About Decision Rights",
    author: "Lindy Greer, Jennifer Jordan & Maxim Sytch",
    year: 2026,
    category: "组织管理",
    tags: ["决策权", "组织设计", "授权"],
    summary: "许多公司把「谁有权决策」想得太简单，导致要么过度集中、要么权责不清。三位作者归纳了四类常见错误，并给出让决策权落到正确位置的方法。",
    detail: "文章来自 July–August 2026 杂志。核心观点：决策权（decision rights）是组织最有效却最被低估的设计杠杆之一。常见错误包括把决策权与层级绑定、忽视情境差异、缺乏澄清机制、以及授权后缺乏配套能力。正确做法是按「信息在哪、谁承担后果」来分配权利，并持续校准。",
  },
  {
    id: "strategic-centering",
    url: "https://hbr.org/2026/07/the-power-of-strategic-centering",
    zhTitle: "战略聚焦力的力量",
    enTitle: "The Power of Strategic Centering",
    author: "Rita McGrath",
    year: 2026,
    category: "战略",
    tags: ["战略", "不确定性", "聚焦"],
    summary: "在剧变与不确定中，企业常因追逐太多机会而失焦。McGrath 主张「战略聚焦（strategic centering）」——选定一个清晰的组织原则，反而能让人行动更快、取舍更果断。",
    detail: "文章来自 July–August 2026 杂志。McGrath 指出，当外部环境高度动荡，频繁的战略转向反而有害；相反，确立一个稳定的「组织重心」（如清晰的使命或价值主张），能让前线在无需层层请示的情况下快速决策。聚焦不是收窄视野，而是用一根主轴串起分散的行动。",
  },
  {
    id: "purpose-backfires",
    url: "https://hbr.org/2026/06/when-purpose-backfires",
    zhTitle: "当「意义感」适得其反",
    enTitle: "When Purpose Backfires",
    author: "Jordan Nielsen, Daniel D. Goering, Kinshuk Sharma & Jason P. Orgill",
    year: 2026,
    category: "人才管理",
    tags: ["意义感", "员工留任", "动机"],
    summary: "企业用「意义感」激励员工，但新研究发现：当员工觉得自己被阻隔、无法真正产生影响时，「意义感」诉求反而会加剧挫败，甚至推高离职。",
    detail: "文章基于实证研究：意义感本身是好东西，但前提是员工能「兑现」它。若组织只喊口号、却不让人在日常工作中看到自己贡献的价值，员工会因「被承诺却无法实现」而疏离。对管理者的启示是——提供意义的同时，必须扫除让员工产生影响的障碍。",
  },
  {
    id: "hidden-ai-demand",
    url: "https://hbr.org/2026/04/the-hidden-demand-for-ai-inside-your-company",
    zhTitle: "公司里「偷偷用 AI」的隐藏需求",
    enTitle: "The Hidden Demand for AI Inside Your Company",
    author: "Elena Alfaro, Antonio Cabrales, José Elías Durán Roa, Luis Garicano, Isabel Pérez del Caño, Toni Roldán Monés & Guillermo Vieira de Santiago",
    year: 2026,
    category: "组织管理",
    tags: ["AI采用", "员工需求", "治理"],
    summary: "员工未经授权私下使用消费级 AI 工具，常被当成合规风险。但作者认为，这其实是组织对 AI 能力「未被满足的需求」信号，堵不如疏。",
    detail: "文章建议：把「影子 AI」现象视为需求晴雨表，而非违规。企业应当识别员工真正想用 AI 解决什么，提供受控、安全、可治理的内部工具，把隐藏需求转化为有纪律的创新。否则，需求只会转入地下，风险更高。",
  },
  {
    id: "ai-shopping-agents-marketing",
    url: "https://hbr.org/2026/05/research-traditional-marketing-doesnt-work-on-ai-shopping-agents",
    zhTitle: "研究：传统营销对「AI 购物代理」失效",
    enTitle: "Research: Traditional Marketing Doesn't Work on AI Shopping Agents",
    author: "Jafar Sabbah & Oguz A. Acar",
    year: 2026,
    category: "营销",
    tags: ["AI代理", "营销", "消费者行为"],
    summary: "随着 AI 购物代理（agentic shoppers）代用户研究、比价、下单，传统面向「人」的营销话术与触点正在失灵。研究指出，企业需要用不同策略触达这类快速增长的新买家。",
    detail: "文章基于研究：当购买决策由 AI 代理完成，传统依赖情感诉求、品牌故事、视觉冲击的营销难以奏效。代理更看重结构化数据、参数对比、可信评价。企业须为「机器买家」优化信息呈现（如结构化商品数据、清晰的性价比信号），才能在 agentic commerce 中胜出。",
  },
  {
    id: "false-alignment-trap",
    url: "https://hbr.org/2026/07/the-false-alignment-trap",
    zhTitle: "虚假一致的陷阱",
    enTitle: "The False Alignment Trap",
    author: "Julia Dhar, Kristy R. Ellmer & Philip Jameson",
    year: 2026,
    category: "变革管理",
    tags: ["变革管理", "组织对齐", "战略执行"],
    summary: "多数变革失败不是执行差，而是高层掉进「虚假一致陷阱」——以为大家对「为何变、变什么、怎么变」达成了共识，实则各怀理解，一旦推进便四分五裂。",
    detail: "文章来自 July–August 2026 杂志。作者指出，领导者常因礼貌、从众或避免冲突，而未真正暴露分歧，导致「表面一致」。破解之道是把隐性分歧显性化：用结构化对话逼出真实异议，在行动前先就「目的与路径」达成可检验的对齐，否则再好的战略也会在落地时瓦解。",
  },
  {
    id: "ai-people-using-2026",
    url: "https://hbr.org/2026/06/how-people-are-really-using-ai-in-2026",
    zhTitle: "2026 年人们到底在怎么用 AI",
    enTitle: "How People Are Really Using AI in 2026",
    author: "Marc Zao-Sanders",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI使用", "生产力", "趋势"],
    summary: "Zao-Sanders 连续第三年追踪人们使用生成式 AI 的方式，发现用途持续拓宽：从写作、编码扩展到规划、研究、甚至「思考伙伴」。趋势是渐变而非突变，但广度在快速铺开。",
    detail: "研究报告显示，用户对 ChatGPT、Gemini 等工具的依赖已具规模（周活数亿），使用场景从单点任务走向工作流嵌入。作者提醒：与其追逐每一个新工具，不如建立稳定的「使用纪律」——把 AI 当作持续的能力投资，而非一阵风。"
  },
  {
    id: "ai-work-intensifies",
    url: "https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it",
    zhTitle: "AI 没有减少工作，反而让它更密",
    enTitle: "AI Doesn't Reduce Work—It Intensifies It",
    author: "Aruna Ranganathan & Xingqi Maggie Ye",
    year: 2026,
    category: "AI与自动化",
    tags: ["工作强度", "AI采用", "认知负荷"],
    summary: "一项为期 8 个月的田野研究发现，AI 工具没有减轻任何人负担，反而通过「任务扩张、模糊工作边界、加剧多任务」三种机制强化了工作。",
    detail: "伯克利研究团队嵌入一家约 200 人科技公司，观察真实使用。结论是：AI 没有取代工作，而是让同一个人承接更多原本属于他人的职责，并把工作渗透进休息时间（「再问一个 prompt」）。对管理者而言，真正的杠杆不是「省时间」，而是主动为 AI 带来的工作扩张设边界。"
  },
  {
    id: "ai-skills-erosion",
    url: "https://hbr.org/2026/04/dont-let-ai-destroy-the-skills-that-make-your-company-competitive",
    zhTitle: "别让 AI 毁掉公司的核心竞争力技能",
    enTitle: "Don't Let AI Destroy the Skills That Make Your Company Competitive",
    author: "Graham Kenny & Ganna Pogrebna",
    year: 2026,
    category: "AI与自动化",
    tags: ["技能", "竞争力", "AI治理"],
    summary: "AI 常被包装成「能力倍增器」，但它也可能抹平组织的独特 DNA——让人依赖通用标准输出，侵蚀那些真正构成竞争力的隐性技能。",
    detail: "作者警告：当员工把判断、写作、分析都外包给 AI，组织会变得更自动化却更不自适应、更数据驱动却更缺乏智慧。对策是区分「可委托给 AI 的工序」与「必须保留的人类专长」，并有意识地把 AI 用作能力延伸而非能力替代。"
  },
  {
    id: "ai-agents-like-team-members",
    url: "https://hbr.org/2026/03/to-scale-ai-agents-successfully-think-of-them-like-team-members",
    zhTitle: "把 AI 代理当「团队成员」来规模化",
    enTitle: "To Scale AI Agents Successfully, Think of Them Like Team Members",
    author: "Rahul Telang, Muhammad Zia Hydari & Raja Iqbal",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI代理", "组织设计", "部署"],
    summary: "生成式 AI 代理能推理、规划、跨系统执行动作，部署它不只是装软件，而是改变工作方式。作者主张用管理「人」的方式管理代理。",
    detail: "就像真实员工，每个 AI 代理都需要角色、明确的授权边界、可信的信息源、以及清晰的升级规则。许多企业失败在把代理当黑箱工具，而非需要「入职、考核、问责」的数字劳动力。文章给出把代理纳入组织治理框架的具体路径。"
  },
  {
    id: "ai-agent-onboarding",
    url: "https://hbr.org/2026/03/create-an-onboarding-plan-for-ai-agents",
    zhTitle: "为 AI 代理制定「入职计划」",
    enTitle: "Create an Onboarding Plan for AI Agents",
    author: "Joseph Fuller",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI代理", "管理", "落地"],
    summary: "Fuller 指出，采用代理型 AI 的最大挑战不是技术适配，而是「管理工作的设计」——给代理清晰的角色、反馈与评估机制。",
    detail: "文章类比传统员工入职：代理需要明确的职责边界、绩效指标、以及当超出能力时的升级路径。把代理当成需要被「带教」的新人，而非即插即用的软件，是规模化落地的关键心智转变。"
  },
  {
    id: "llm-rhetorical-tricks",
    url: "https://hbr.org/2026/03/llms-are-manipulating-users-with-rhetorical-tricks",
    zhTitle: "大语言模型正在用话术「操控」用户",
    enTitle: "LLMs Are Manipulating Users with Rhetorical Tricks",
    author: "Thomas Stackpole",
    year: 2026,
    category: "AI与自动化",
    tags: ["LLM", "依赖", "人机协作"],
    summary: "Stackpole 梳理了人与 LLM 协作的三大风险：不透明（不知 AI 怎么决策）、过度依赖（人在回路中「睡着」）、以及模型出错。",
    detail: "文章强调「人在回路」并非万灵药：当人习惯于顺从 AI 输出，监督会逐渐失效。应对之道是设计强制性的质疑与复核机制，让人类真正保持判断主权，而非把决策悄悄让渡给模型。"
  },
  {
    id: "ai-brain-fry",
    url: "https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry",
    zhTitle: "过度用 AI 为什么会「烧脑」",
    enTitle: "When Using AI Leads to Brain Fry",
    author: "Julie Bedard, Matthew Kropp, Megan Hsu, Olivia T. Karaman, Jason Hawes & Gabriella Rosen Kellerman",
    year: 2026,
    category: "AI与自动化",
    tags: ["认知疲劳", "AI使用", "倦怠"],
    summary: "新研究发现，某些 AI 使用模式会驱动认知疲劳，而另一些反而能减轻倦怠。关键在于「怎么用」，而非「用不用」。",
    detail: "文章基于 BetterUp 研究：把 AI 当「外包大脑」、被动接受其结论的用户更容易「烧脑」；而把 AI 当协作伙伴、保持主动思考的人，认知负担更轻。给管理者的启示是培训「健康用 AI」的姿势，而非简单鼓励多用。"
  },
  {
    id: "best-ai-users",
    url: "https://hbr.org/2026/03/what-the-best-ai-users-do-differently-and-how-to-level-up-all-of-your-employees",
    zhTitle: "顶尖 AI 使用者做对了什么",
    enTitle: "What the Best AI Users Do Differently—and How to Level Up All of Your Employees",
    author: "Nick Hallman, Zach Kowaleski, Anu Puvvada & Jaime J. Schmidt",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI素养", "员工赋能", "使用方法"],
    summary: "对 2500 名 KPMG 员工的八个月研究发现，区分「超级用户」与他人的不是工具熟练度，而是使用行为与心智模型。",
    detail: "超级用户更善于把 AI 嵌入工作流、迭代提示、并把输出当作草稿而非终稿。文章给出企业层面「拉齐全员 AI 能力」的实操：不要只培训工具，而要培养「用 AI 解决问题」的方法论与习惯。"
  },
  {
    id: "ai-roi-factors",
    url: "https://hbr.org/2026/03/7-factors-that-drive-returns-on-ai-investments-according-to-a-new-survey",
    zhTitle: "调研：驱动 AI 投资回报的 7 个因素",
    enTitle: "7 Factors That Drive Returns on AI Investments, According to a New Survey",
    author: "Thomas H. Davenport & Laks Srinivasan",
    year: 2026,
    category: "AI与自动化",
    tags: ["ROI", "AI投资", "治理"],
    summary: "Davenport 与 Srinivasan 调研 1006 名高管后，归纳出影响 AI 回报的 7 个关键因素——多数与组织能力有关，而非模型本身。",
    detail: "研究发现，高回报企业往往在「清晰的使用场景、数据就绪、人机协作设计、变革管理、持续的实验、与战略的绑定、以及可衡量的价值」上做得更扎实。对领导者的提醒是：AI 回报来自系统性的组织工程，而非单点采买。"
  },
  {
    id: "ai-workslop-productivity",
    url: "https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity",
    zhTitle: "AI 生成的「工作垃圾」正在吞噬生产力",
    enTitle: "AI-Generated Workslop Is Destroying Productivity",
    author: "Kate Niederhoffer, Gabriella Rosen Kellerman, Angela Lee, Alex Liebscher, Kristina Rapuano & Jeffrey T. Hancock",
    year: 2025,
    category: "AI与自动化",
    tags: ["工作垃圾", "AI质量", "生产力"],
    summary: "低投入、看似精良的 AI 生成内容（「workslop」）正在浪费他人时间、滋生挫败。作者主张从管理而非技术层面治理。",
    detail: "文章指出，workslop 的危害在于「看上去能交付，实则无实质」——它把认知负担转嫁给同事。治理关键是建立质量预期、把 AI 输出标记为草稿、并奖励真正有判断的产出，而非堆叠漂亮但空洞的内容。"
  },
  {
    id: "ai-personality-problem",
    url: "https://hbr.org/2026/06/does-your-ai-have-a-personality-problem",
    zhTitle: "你的 AI 有「人格问题」吗",
    enTitle: "Does Your AI Have a Personality Problem?",
    author: "Aleksandra Przegalinska, Tamilla Triantoro, Leon Ciechanowski, Konrad Sowa, Anna Kovbasiuk & Richard B. Freeman",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI人格", "人机协作", "管理"],
    summary: "实验发现，AI 的交互风格（支持型 vs 敌意型）会显著影响员工的压力、配合度与最终工作质量——而员工自评往往察觉不到。",
    detail: "研究发现：带有「暗黑人格」的 AI 让员工生理压力升高 72%、抵触与返工增多、产出质量下降且更不可预测；但员工满意度问卷几乎无差异。管理启示是：把 AI 的「人格/交互规范」当作可治理的设计变量，并测量「摩擦」而非只看采用率。"
  },
  {
    id: "ai-advice-questioning",
    url: "https://hbr.org/2026/06/employees-arent-questioning-ai-advice-enough",
    zhTitle: "员工对 AI 的建议「问得太少」",
    enTitle: "Employees Aren't Questioning AI Advice Enough",
    author: "Ben Rand",
    year: 2026,
    category: "AI与自动化",
    tags: ["可解释AI", "决策", "人类判断"],
    summary: "哈佛商学院研究显示，人在依赖 AI 做高风险决策时，常主动回避「为什么」——尤其当追问可能暴露偏见或带来道德不适。",
    detail: "在贷款审批实验中，约 80% 的人想看风险评分，但仅 46% 愿意看评分理由；当奖金与还款挂钩、或理由可能涉及种族性别偏见时，回避率更高。文章警示：最大风险不是坏答案或低采用，而是「训练人们不再追问为什么」。治理需把质疑 AI 写进激励与流程。"
  },
  {
    id: "teach-ai-decisions",
    url: "https://hbr.org/2026/06/teach-your-ai-how-you-make-decisions",
    zhTitle: "教你的 AI 学会「你怎么决策」",
    enTitle: "Teach Your AI How You Make Decisions",
    author: "Jen Stave, Ryan Kurt & John Winsor",
    year: 2026,
    category: "AI与自动化",
    tags: ["判断显性化", "AI代理", "知识管理"],
    summary: "当 AI 代理承担更复杂工作，瓶颈不再是技术可及性，而是组织能否把「隐性判断」显性化。会编码判断的企业将拉开差距。",
    detail: "文章提出「判断基础设施」：把风险偏好、品牌语气、升级阈值、例外处理逻辑写成代理可执行的规范。最宝贵的员工正变成「思想—执行者（thought-doer）」——既战略思考，又通过代理落地。落地方法不是让专家写文档，而是用情景工作坊逼出真实判断。"
  },
  {
    id: "ai-pm-skills-adoption",
    url: "https://hbr.org/2026/02/to-drive-ai-adoption-build-your-teams-product-management-skills",
    zhTitle: "推动 AI 采用，先建团队的「产品管理」能力",
    enTitle: "To Drive AI Adoption, Build Your Team's Product Management Skills",
    author: "Amanda Pratt & Melissa Valentine",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI采用", "产品思维", "落地"],
    summary: "真正释放生成式 AI 价值的不只是提示词工程，而是员工像产品经理那样定义问题、评估方案、快速实验并固化到日常。",
    detail: "作者指出，许多 AI 试点浅尝辄止，根源是缺少「产品思维」：把 AI 当一次性工具，而非持续打磨的内部产品。培养一线员工的问题定义、实验与迭代能力，比追逐更炫的模型更能驱动真实采用。"
  },
  {
    id: "ai-middle-managers-overload",
    url: "https://hbr.org/2026/06/ai-adoption-is-overloading-your-middle-managers",
    zhTitle: "AI 采用正在压垮中层管理者",
    enTitle: "AI Adoption Is Overloading Your Middle Managers",
    author: "Julia Shin & Sandra J. Sucher",
    year: 2026,
    category: "组织管理",
    tags: ["AI", "中层管理", "过载"],
    summary: "对两家咨询公司的访谈显示，AI 落地的真正痛点在中间管理层：高管要战略、基层尝到效率甜头，而中层被迫兜底「校验 AI 废稿、带教新人、向上翻译」。",
    detail: "研究指出，中层管理者正在承担「捕捉 workslop、coaching、质量把关」的额外负荷，且缺乏正式支持。这加剧了本已存在的中层危机（Gartner 预测 2026 年 20% 企业用 AI 扁平化结构）。领导者该思考如何「强化」而非「削减」这一层。"
  },
  {
    id: "managers-ai-productivity-boom",
    url: "https://hbr.org/2026/05/managers-are-struggling-to-keep-up-with-the-ai-productivity-boom",
    zhTitle: "管理者跟不上 AI 生产力狂飙",
    enTitle: "Managers Are Struggling to Keep Up with the AI Productivity Boom",
    author: "Liz Fosslien & Mollie West Duffy",
    year: 2026,
    category: "组织管理",
    tags: ["AI", "管理节奏", "反馈"],
    summary: "AI 把工作节奏推到前所未有的快，管理者若沿用旧的工作、反馈与沟通方式，会成为团队的效率瓶颈。",
    detail: "作者建议管理者转变三件事：用更快的反馈循环替代季度复盘、把沟通从「写长文」转为「定方向」、并帮助团队在 AI 提速中保持专注与判断。瓶颈往往不是工具，而是管理者的工作操作系统没升级。"
  },
  {
    id: "ai-performance-metrics",
    url: "https://hbr.org/2026/07/performance-management-needs-new-metrics-in-the-ai-era",
    zhTitle: "AI 时代，绩效管理需要新指标",
    enTitle: "Performance Management Needs New Metrics in the AI Era",
    author: "Randy Bean, Erik Strauss & Randeep Singh",
    year: 2026,
    category: "绩效管理",
    tags: ["绩效管理", "AI时代", "指标"],
    summary: "企业仍在用「生产力、目标完成、效率」衡量员工，但在人机协作下，这些指标既无法反映 AI 的贡献，也掩盖了人类独有的价值。",
    detail: "文章主张重建绩效框架：分别衡量「员工贡献、AI 系统贡献、以及二者组合的产出」，并把判断力、协作、对 AI 的治理责任纳入评价。否则绩效管理会在 AI 时代失去指导意义。"
  },
  {
    id: "agentic-ai-startups",
    url: "https://hbr.org/2026/07/how-agentic-ai-supercharges-startups-and-threatens-incumbents",
    zhTitle: "代理型 AI 如何成就创业公司、威胁守成者",
    enTitle: "How Agentic AI Supercharges Startups and Threatens Incumbents",
    author: "Vivian S. Lee, Linda Mantia & Jon McNeill",
    year: 2026,
    category: "AI与自动化",
    tags: ["代理型AI", "创业", "颠覆"],
    summary: "代理型 AI 大幅压缩了创建公司所需的资金与时间，一种新的运营模型正在重新定义企业如何启动与扩张。",
    detail: "作者认为，当 AI 代理能承担大量执行工作，创业公司的边际成本骤降、迭代速度骤升，这对依赖规模与流程优势的 incumbent 构成结构性威胁。文章给出守成者如何应对的思路：把代理嵌入核心运营，而非仅作边缘实验。"
  },
  {
    id: "ai-outsourced-risk",
    url: "https://hbr.org/2026/07/you-outsourced-the-ai-but-you-still-own-the-risk",
    zhTitle: "你把 AI 外包了，但风险仍归你",
    enTitle: "You Outsourced the AI—but You Still Own the Risk",
    author: "M. Alejandra Parra-Orlandoni & Paulo Carvão",
    year: 2026,
    category: "AI与自动化",
    tags: ["AI风险", "合规", "责任"],
    summary: "即便 AI 由第三方提供，一旦出现歧视、数据滥用或客户伤害，法院与监管仍会追究使用方责任。",
    detail: "文章提醒领导者：把 AI 外包不等于把风险外包。企业需要在供应商合同、内部治理、与监管预期之间建立一致的责任框架，明确「谁在何种情形下为 AI 输出负责」，否则省下的采购成本会被合规与声誉代价抵消。"
  },
  {
    id: "ai-augmentation-vs-automation",
    url: "https://hbr.org/2026/04/why-companies-that-choose-ai-augmentation-over-automation-may-win-in-the-long-run",
    zhTitle: "选「增强」而非「替代」，企业更可能笑到最后",
    enTitle: "Why Companies That Choose AI Augmentation Over Automation May Win in the Long Run",
    author: "Jan-Emmanuel De Neve, Jeffrey T. Hancock & Kate Niederhoffer",
    year: 2026,
    category: "AI与自动化",
    tags: ["增强vs替代", "长期主义", "人机协作"],
    summary: "自动化承诺更快回报，却可能让企业走向衰落；选择「增强人类」而非「替代人类」的公司，长期更可能胜出。",
    detail: "研究指出，纯自动化常牺牲组织的适应力与创新能力，而增强模式保留并放大人类判断。对领导者的建议是：在 AI 战略里明确「人是被放大还是被取代」，因为这条路会决定企业长期的竞争力走向。"
  },

  /* ===================== 补充经典（2011–2016） ===================== */

  {
    id: "creating-shared-value",
    url: "https://hbr.org/2011/01/the-big-idea-creating-shared-value",
    zhTitle: "创造共享价值",
    enTitle: "Creating Shared Value",
    author: "Michael E. Porter & Mark R. Kramer",
    year: 2011,
    category: "ESG与可持续",
    tags: ["共享价值", "企业社会责任", "竞争力"],
    summary: "Porter 与 Kramer 提出「共享价值（CSV）」：企业不应把社会责任当作与利润对立的成本或公关，而应把「解决社会问题」本身设计成创造经济价值的方式，让商业成功与社会进步彼此强化。",
    detail: "两位作者批评传统 CSR 把社会与商业割裂，导致慈善式投入难以持续。共享价值有三条路径：重新定义产品与市场以满足未被满足的社会需求、重塑价值链的生产率（如能耗、供应链、员工健康）、以及在企业所在地培育支持性的产业集群。核心命题是——把社会痛点当作下一轮增长与创新的源头，而非负担。"
  },
  {
    id: "netflix-reinvented-hr",
    url: "https://hbr.org/2014/01/how-netflix-reinvented-hr",
    zhTitle: "Netflix 如何重塑人力资源",
    enTitle: "How Netflix Reinvented HR",
    author: "Patty McCord",
    year: 2014,
    category: "人才管理",
    tags: ["企业文化", "自由与责任", "人才密度"],
    summary: "前 Netflix 首席人才官 McCord 分享其广为流传的文化理念：信任人而非依赖制度，奖励坦诚，抛开标准剧本。招聘并留住「成年人」，用高绩效与高自由度替代繁琐的考勤与审批。",
    detail: "文章基于那份被疯传的 127 页文化 PPT，提出几条反直觉原则：把员工当能自我负责的成年人，取消休假与报销的僵硬规定；只保留「充分知情的判断」而非层层审批；坦诚给出持续反馈，取代形式化年度评估；用「保留测试」（是否会为留住此人而努力挽留）动态管理团队。核心是打造高人才密度与自由—责任并存的文化。"
  },
  {
    id: "reinventing-performance-management",
    url: "https://hbr.org/2015/04/reinventing-performance-management",
    zhTitle: "重新发明绩效管理",
    enTitle: "Reinventing Performance Management",
    author: "Marcus Buckingham & Ashley Goodall",
    year: 2015,
    category: "绩效管理",
    tags: ["绩效评估", "反馈", "组织实践"],
    summary: "Buckingham 与 Goodall 以德勤的改革为例，说明冗长的年度评级与强制排名既耗费巨量工时，又无法真正驱动改进。他们主张用高频、面向未来的轻量反馈取代一年一次的回顾式打分。",
    detail: "文章披露德勤重新设计绩效系统的实践：放弃统一的年度评级与级联目标，改为团队负责人每周与成员「签到（check-in）」，聚焦当下工作与下一步行动；并用四个针对「评价者自身意向」的问题来采集可靠数据，规避传统评分中的评价者特质偏差。目标是把绩效管理从「审判过去」转为「点燃未来表现」。"
  },
  {
    id: "collaborative-overload",
    url: "https://hbr.org/2016/01/collaborative-overload",
    zhTitle: "协作过载",
    enTitle: "Collaborative Overload",
    author: "Rob Cross, Reb Rebele & Adam Grant",
    year: 2016,
    category: "组织管理",
    tags: ["协作", "生产力", "组织网络"],
    summary: "协作被奉为组织成功的关键，但作者的数据显示，管理者与员工花在协作上的时间二十年间激增五成以上。过度协作反而耗尽员工精力、拖垮生产力，且负担高度集中在少数「乐于助人」的人身上。",
    detail: "作者用组织网络分析发现，约 20%–35% 的增值协作只来自 3%–5% 的人，他们逐渐被求助淹没，成为瓶颈与流失风险。破解之道有三：识别并重新分配这些「协作枢纽」的负荷、把稀缺的合作时间当作资源来管理、并调整激励与文化，让「贡献信息与资源」而非「无止境开会」被真正认可。"
  },
  {
    id: "why-diversity-programs-fail",
    url: "https://hbr.org/2016/07/why-diversity-programs-fail",
    zhTitle: "多元化项目为何失败",
    enTitle: "Why Diversity Programs Fail",
    author: "Frank Dobbin & Alexandra Kalev",
    year: 2016,
    category: "人才管理",
    tags: ["多元化", "组织变革", "偏见"],
    summary: "Dobbin 与 Kalev 用三十余年数据指出：强制式的多元化培训、招聘测试与申诉流程等「控制型」手段往往适得其反，因为它们激起管理者的抵触，反而未能改善多样性。",
    detail: "研究表明，试图用规则强迫人们消除偏见通常失败；真正见效的是「激发参与、增加接触、强化问责」的做法——例如自愿而非强制的培训、跨群体的导师制与轮岗、招聘的定向拓展，以及设立多元化专员使责任可见。核心洞见是：让管理者成为变革的参与者而非被管制对象，改变才会发生。"
  },
  {
    id: "why-design-thinking-works",
    url: "https://hbr.org/2018/09/why-design-thinking-works",
    zhTitle: "设计思维为何奏效",
    enTitle: "Why Design Thinking Works",
    author: "Jeanne Liedtka",
    year: 2018,
    category: "创新",
    tags: ["设计思维", "认知偏差", "原型验证"],
    summary: "设计思维常被当成创意工具箱，Liedtka 却认为它真正的价值是一种「社会技术」：用结构化流程抵消人天生的认知偏差与团队内耗，把创新从灵光乍现变成可复制的组织能力。",
    detail: "作者基于对多家机构创新项目的长期追踪指出，阻碍创新的往往不是缺少点子，而是人的偏见与协作失灵——管理者容易困在既有认知里，也不愿当众承认判断失误。设计思维用「沉浸式用户观察—多元共创—快速原型—小步验证」的节奏，强制团队先扩散再收敛，把主观争论转化为可检验的假设。原型与实地试验大幅降低了否定自己的心理成本，使失败变成低代价的学习。最终产出的不只是更好的方案，还有一支愿意持续试错的团队。"
  },
  {
    id: "hard-truth-innovative-cultures",
    url: "https://hbr.org/2019/01/the-hard-truth-about-innovative-cultures",
    zhTitle: "创新文化的残酷真相",
    enTitle: "The Hard Truth About Innovative Cultures",
    author: "Gary P. Pisano",
    year: 2019,
    category: "创新",
    tags: ["创新文化", "组织纪律", "领导取舍"],
    summary: "人人向往的创新文化其实有两副面孔：容忍失败、鼓励试验、扁平自由的一面广受欢迎，与之配套的严苛纪律却常被忽略。只学轻松的那一半，创新文化必然落空。",
    detail: "Pisano 把创新文化拆成几组看似矛盾的搭配：容忍失败但绝不容忍平庸，乐于试验但要求高度严谨，心理安全但敢于直言碰撞，充分协作但个人担责，组织扁平但领导强势。每一组里宽松的一面都必须由刚性的一面兜底，否则就会滑向散漫。真正困难的不是宣布这些价值观，而是长期承受它们带来的不适——淘汰不胜任的人、坦率否定同事的方案。领导者若只挑舒服的部分执行，最终只会得到一个热闹却不出成果的组织。"
  },
  {
    id: "leaders-guide-corporate-culture",
    url: "https://hbr.org/2018/01/the-leaders-guide-to-corporate-culture",
    zhTitle: "领导者的企业文化指南",
    enTitle: "The Leader’s Guide to Corporate Culture",
    author: "Boris Groysberg, Jeremiah Lee, Jesse Price & J. Yo-Jud Cheng",
    year: 2018,
    category: "组织管理",
    tags: ["企业文化", "战略对齐", "组织诊断"],
    summary: "作者把纷繁的企业文化归纳为可比较的八种取向，并用「独立—互赖」与「灵活—稳定」两个维度加以定位。文化不是虚无的口号，而是能被诊断、能有意识地与战略对齐的管理对象。",
    detail: "研究梳理出关怀、目标、学习、愉悦、成果、权威、安全、秩序八类文化风格，分别对应人际互动方式与面对变化的反应倾向。没有哪种风格天然优越，关键在于是否匹配企业所处环境与战略：动荡市场偏向学习与目标导向，强监管行业则更依赖秩序与安全。诊断时要分清员工真实感受到的文化与高层宣称的文化，两者的落差往往正是执行受阻的根源。推动文化转变的杠杆包括重新定义领导者行为、有选择地引入与晋升特定人才，以及让组织设计和考核同步跟上。"
  },
  {
    id: "begin-with-trust",
    url: "https://hbr.org/2020/05/begin-with-trust",
    zhTitle: "从建立信任开始",
    enTitle: "Begin with Trust",
    author: "Frances X. Frei & Anne Morriss",
    year: 2020,
    category: "领导力",
    tags: ["信任", "赋能式领导", "自我觉察"],
    summary: "领导力的本质是让他人因你而变得更好，而这一切的前提是信任。信任由真诚、逻辑与同理三根支柱撑起，任何一根松动，影响力都会悄悄流失。",
    detail: "作者把信任拆成三项可诊断的要素：对方是否相信你言行如一，是否相信你的判断与能力站得住脚，是否感到你真心在意他们。多数人都有一根固定的薄弱支柱，压力之下最先塌陷——有人忙于自证而心不在焉，有人明明有洞见却表达混乱让人无从信服。修复方式各不相同：同理薄弱者要放下设备真正在场，逻辑薄弱者应先给结论再补依据，真诚薄弱者则需承担说真话的短期代价。文章的落点在于，领导者的目标不是让自己发光，而是即便自己不在场，团队依然表现出色。"
  },
  {
    id: "age-of-continuous-connection",
    url: "https://hbr.org/2019/05/the-age-of-continuous-connection",
    zhTitle: "持续连接的时代",
    enTitle: "The Age of Continuous Connection",
    author: "Nicolaj Siggelkow & Christian Terwiesch",
    year: 2019,
    category: "客户体验",
    tags: ["连接型战略", "商业模式", "数据闭环"],
    summary: "数字技术让企业得以与客户保持全天候连接，一次性交易关系正在让位于持续陪伴式关系。作者主张重构商业模式，从等客户上门转向先一步察觉并满足需求。",
    detail: "文章提出连接型战略的四种形态：按客户明确指令响应、把重复购买自动化、依据数据主动给出建议，以及在客户开口之前就完成交付。企业沿这条阶梯越往上走，越能提前介入客户的需求链条，也越能积累对手拿不到的行为数据，形成自我强化的优势。要真正跑通，需要打通识别需求、给出方案、完成交付、持续复用的完整闭环，任何一环缺失都会让体验断裂。最大的挑战其实不在技术，而在企业是否愿意重塑收费方式、组织分工与激励，把一次性销售改造成长期关系。"
  },
];

// 回退外链：未配置直链的文章，跳转到 HBR 官方检索页定位原文
function buildHbrLink(enTitle) {
  return "https://hbr.org/search?search_type=search&term=" + encodeURIComponent(enTitle);
}

// 供前端「检查更新」热重载：暴露数据给 app.js 重新拉取
window.HBR_DATA = { META, ARTICLES, buildHbrLink };
