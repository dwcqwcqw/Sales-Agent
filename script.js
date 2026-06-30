const industryData = [
  {
    id: "overall",
    label: "整体",
    automate: 89,
    faq: 46,
    saving: "¥42,800",
    title: "先让智客处理高频咨询",
    body: "把课程介绍、价格政策、试听规则和校区信息接入知识库，智客就能先接住大量重复问题，并把高意向家长标记给销售。",
    segments: [38, 29, 22, 11],
  },
  {
    id: "admission",
    label: "招生咨询",
    automate: 83,
    faq: 52,
    saving: "¥58,600",
    title: "先从招生咨询和试听预约开始",
    body: "让智客识别年级、学习目标、预算和试听意向，自动完成课程介绍、时间推荐和顾问跟进提醒。",
    segments: [34, 27, 22, 17],
  },
  {
    id: "renewal",
    label: "续费转化",
    automate: 92,
    faq: 39,
    saving: "¥36,200",
    title: "用续费节点承接家长顾虑",
    body: "围绕学习效果、课时消耗、老师反馈和续费权益建立话术，帮助顾问在关键节点减少流失。",
    segments: [39, 31, 22, 8],
  },
  {
    id: "service",
    label: "售后服务",
    automate: 94,
    faq: 57,
    saving: "¥31,900",
    title: "先自动解决排课和售后问题",
    body: "把请假、调课、发票、教材和班级通知流程做成可执行步骤，减少顾问被事务性问题打断。",
    segments: [41, 32, 21, 6],
  },
  {
    id: "private",
    label: "私域运营",
    automate: 91,
    faq: 43,
    saving: "¥49,500",
    title: "让私域会话自动沉淀线索",
    body: "在企微、公众号和小程序会话中自动打标签、判断意向度，并生成下一次触达建议。",
    segments: [37, 31, 23, 9],
  },
];

const modes = [
  {
    id: "informational",
    label: "信息咨询",
    intro: "这是云梯智客基于课程知识内容回答家长问题的预览。",
    questions: [
      {
        q: "你们客服什么时候在线？我想确认一下能不能马上约试听。",
        a: "我们的在线咨询可以 7x24 小时响应。现在我可以先帮你确认孩子年级、英语基础和可试听时间，并把合适的课程顾问安排给你。",
        actions: ["记录年级", "推荐试听", "转给顾问"],
      },
      {
        q: "课程资料在哪里看？我想先了解自然拼读适不适合孩子。",
        a: "可以的。自然拼读课程主要适合正在建立字母音、拼读规则和阅读兴趣的孩子。我会根据孩子年龄和当前英语基础，给你匹配对应的课程介绍。",
        actions: ["发送课程介绍", "询问基础", "加入资料包"],
      },
      {
        q: "可以先体验吗？不想直接报名。",
        a: "可以先安排试听。试听前我会先了解孩子年级、学习目标和可上课时间，方便老师准备更贴合的体验内容。",
        actions: ["预约试听", "收集信息", "设置跟进"],
      },
      {
        q: "我想预约演示课，怎么联系课程顾问？",
        a: "最快的方式是留下孩子年级、英语基础和可联系时间。我会把信息同步给对应课程顾问，并优先安排适合你时间的试听档期。",
        actions: ["创建试听", "提醒顾问", "发送日程"],
      },
      {
        q: "不同班型有什么区别？哪里能看明细？",
        a: "可以。自然拼读、剑桥英语和专项提升班的目标不同，我会先按孩子年级和当前基础筛选，再发送对应班型对比表。",
        actions: ["发送对比", "询问基础", "推荐班型"],
      },
      {
        q: "老学员或者转介绍有没有优惠？",
        a: "有些活动会针对老学员和转介绍开放专属权益。我可以先记录你的学员信息和推荐来源，再让顾问确认当前可用方案。",
        actions: ["查询权益", "记录来源", "转给顾问"],
      },
    ],
  },
  {
    id: "personalized",
    label: "个性化与任务",
    intro: "这是云梯智客结合客户属性、历史咨询和业务工具执行任务的预览。",
    questions: [
      {
        q: "孩子三年级，单词总是背了就忘，适合上哪个班？",
        a: "三年级如果主要问题是单词记忆和拼读迁移，建议先看自然拼读强化班。它会从音素、字母组合和高频词规则切入，帮助孩子从死记硬背转向规律拼读。",
        actions: ["判断意向 A", "推荐班型", "创建线索"],
      },
      {
        q: "我们周二周四晚上有空，能约一个女老师试听吗？",
        a: "可以，我先帮你记录周二、周四晚间可试听，并优先匹配女老师。为了安排更准确，还需要确认孩子所在城市和当前英语水平。",
        actions: ["记录时间", "匹配老师", "同步 CRM"],
      },
      {
        q: "之前咨询过，但是还没下单，今天有什么优惠？",
        a: "我可以帮你查询当前可用权益。通常试听后 48 小时内会有更适合的报名方案，我会先确认你之前咨询的课程和孩子年级。",
        actions: ["查询权益", "识别老线索", "提醒销售"],
      },
      {
        q: "我上次留过电话，你能查到我适合哪个课程吗？",
        a: "可以。我会根据你之前留下的年级、学习目标和试听记录判断适合的课程。如果资料不完整，我会先补问关键问题再推荐。",
        actions: ["读取线索", "补齐字段", "推荐课程"],
      },
      {
        q: "我已经付过定金了吗？能帮我确认一下吗？",
        a: "我可以帮你发起订单核验。为了保护信息安全，请先确认报名手机号后四位，确认后我会返回支付状态和下一步安排。",
        actions: ["核验订单", "请求验证", "通知顾问"],
      },
      {
        q: "我想把上课提醒改到晚上 8 点。",
        a: "可以，我会把提醒时间改为晚上 8 点，并同步到后续试听和正式课提醒里。修改完成后会给你确认消息。",
        actions: ["修改提醒", "同步日程", "发送确认"],
      },
    ],
  },
  {
    id: "handoff",
    label: "转人工",
    handoff: true,
    intro: "当智客无法可靠解决，或家长明确要求人工时，会自动交接给顾问。",
    questions: [
      {
        q: "当智客无法确信答案",
        detail: "当知识库没有稳定依据时，智客会说明不确定点、提出澄清问题，仍无法解决时升级给人工。",
        a: "我还不能完全确定孩子适合哪条学习路径。当前资料显示两种可能：一是先补拼读规则，二是直接进入阅读提升。请问孩子现在看到陌生单词时，能不能根据发音规则尝试拼出来？",
        actions: ["可以尝试拼读", "完全不会拼", "不确定"],
      },
      {
        q: "当规则要求必须转人工",
        detail: "涉及价格特批、投诉、退款、隐私信息或复杂排课时，智客会直接交给顾问，并附上摘要。",
        a: "这类价格和特殊权益需要课程顾问确认。我已经整理好你关注的班型、预算和可试听时间，会转给顾问继续沟通。",
        actions: ["标记价格异议", "生成摘要", "转给顾问"],
      },
      {
        q: "当家长主动要求人工",
        detail: "家长说“找顾问”“电话聊”“人工处理”时，智客会停止继续劝说，收集必要信息后交接。",
        a: "可以，我会安排顾问联系你。为了减少重复沟通，我先把孩子年级、学习目标和你希望电话沟通的时间一起同步过去。",
        actions: ["整理摘要", "预约回电", "转给顾问"],
      },
    ],
  },
];

const modalCopy = {
  role: {
    title: "选择智客角色",
    body: "当前演示使用“售前服务营销”角色。你也可以切换到售后服务、续费运营或私域跟进，不同角色会影响话术目标、转人工阈值和指标看板。",
    rows: [
      ["售前服务营销", "识别意向、推荐课程、预约试听"],
      ["售后服务", "排课、请假、教材、发票和工单"],
      ["续费运营", "学习反馈、流失预警、续费跟进"],
    ],
  },
  search: {
    title: "全局搜索",
    body: "可搜索联系人、课程知识、对话记录、自动化流程和报表。当前为纯前端演示，已用模拟结果填充。",
    rows: [
      ["自然拼读试听", "32 条对话、4 条知识、2 个流程"],
      ["高意向家长", "18 条线索、7 个待跟进任务"],
      ["转人工规则", "售前、售后、续费三套策略"],
    ],
  },
  settings: {
    title: "系统设置",
    body: "这里通常配置成员权限、品牌语气、渠道安全、数据保留和转人工 SLA。",
    rows: [
      ["品牌语气", "专业、温和、结果导向"],
      ["SLA", "高意向线索 5 分钟内提醒顾问"],
      ["数据保留", "对话记录保存 180 天"],
    ],
  },
  guide: {
    title: "配置指南",
    body: "建议按照 Intercom 风格的部署路径：先接知识，再设转人工，再跑测试，最后上线到真实渠道。",
    rows: [
      ["1. 接入知识", "课程介绍、FAQ、价格政策、试听流程"],
      ["2. 训练话术", "识别意向、处理异议、引导留资"],
      ["3. 测试发布", "用真实问题测试，再发布到企微或网页"],
    ],
  },
  video: {
    title: "演示播放",
    body: "这里模拟视频播放入口。实际产品可嵌入智客处理咨询、生成摘要和转人工的 60 秒演示。",
    rows: [
      ["00:00", "家长进入咨询"],
      ["00:18", "智客判断意向并推荐试听"],
      ["00:46", "生成摘要并转交顾问"],
    ],
  },
  publish: {
    title: "发布到测试渠道",
    body: "已模拟发布到测试网页渠道。真实上线前建议先在内部账号和小流量渠道验证命中率。",
    rows: [
      ["测试网页", "已连接"],
      ["企业微信", "待授权"],
      ["公众号", "待配置欢迎语"],
    ],
  },
  savings: {
    title: "增效金额如何估算",
    body: "金额由三部分组成：重复咨询节省的人力、响应速度提升带来的线索转化、以及顾问处理复杂问题的时间释放。",
    rows: [
      ["人力节省", "约 ¥18,400 / 月"],
      ["转化提升", "约 ¥19,600 / 月"],
      ["质检提效", "约 ¥4,800 / 月"],
    ],
  },
  studio: {
    title: "系统设置",
    body: "系统设置用于搭建和测试不同业务角色的 Agent：可以配置知识、工作流、工具调用、转人工和评测集。",
    rows: [
      ["招生 Agent", "已完成 73%"],
      ["售后 Agent", "已完成 48%"],
      ["续费 Agent", "待补充学习报告数据"],
    ],
  },
};

const sectionMessages = {
  inbox: "聚合聊天已选中：查看飞书会话、当前标签、聊天记忆和待发送内容。",
  n8n: "智能体配置已接入 n8n：可查看工作流、Webhook、发布状态和执行记录。",
  content: "内容页已选中：可管理课程资料、FAQ、政策文档和导入状态。",
  guidance: "技能中心已选中：可配置高意向识别、异议处理、邀约策略和服务技能。",
  attributes: "客户属性已选中：可维护年级、城市、来源、意向度等字段。",
  escalation: "转人工规则已选中：可设置价格异议、投诉、复杂需求等升级条件。",
  procedures: "工作流已选中：可编排预约试听、创建线索、发送资料等任务。",
  test: "测试页已选中：可用真实家长问题检查回答质量。",
  report: "数据优化已选中：已合并核心销售数据、AI 策略报告和日常问答。",
  quality: "数据优化已选中：已合并核心销售数据、AI 策略报告和日常问答。",
};

const steps = [
  ["导入知识", "上传课程 FAQ、价格政策、试听流程和校区信息。"],
  ["配置目标", "选择留资、预约试听、转人工或售后解决作为会话目标。"],
  ["测试样本", "用 30 条真实家长问题检查命中率、语气和边界。"],
  ["上线渠道", "发布到网页、企微、公众号或小程序，并开启报表。"],
];

const pageData = {
  operator: {
    kicker: "Operator",
    title: "数据分析",
    desc: "像 Intercom Operator 一样，主动运行客户运营：发现问题、定位机会、起草改进方案、调优智客、更新知识库，并在你批准后再上线。",
    actions: ["询问智能体", "查看提案"],
    metrics: [["待审批提案", "7"], ["发现机会", "18"], ["自动诊断", "42"]],
    recordsTitle: "智能体提案",
    records: [
      ["搭建试听预约流程", "待审批", "检测到 36 条高意向会话仍需人工追问试听时间，已生成一个可上线的流程草稿。", ["自动化", "需审批"]],
      ["补充价格异议知识", "草稿已生成", "发现家长频繁询问转介绍和试听后优惠，已起草内部知识更新。", ["知识库", "内容更新"]],
      ["调试过早转人工会话", "已诊断", "定位到价格关键词触发过宽，建议收窄规则并保留高意向摘要。", ["调试", "转人工"]],
    ],
    tableTitle: "智能洞察",
    table: [["能力", "Operator 行为", "云梯智客落地"], ["自动化改进", "描述目标后自动搭建配置", "生成试听预约流程"], ["知识维护", "发现缺口并起草内容", "补全价格政策"], ["数据分析", "自然语言提问获得图表", "解释留资率下降"]],
  },
  n8n: {
    kicker: "智能体配置 / n8n",
    title: "n8n 工作流接入",
    desc: "把云梯智客的意图识别、客户状态、飞书回复、定时跟进和人工接管编排到 n8n。这里是前端演示状态，不会真实调用后端。",
    actions: ["同步 n8n", "发布到测试"],
    metrics: [["已连接工作流", "3"], ["今日执行", "126"], ["待处理异常", "4"]],
    recordsTitle: "n8n 工作流",
    records: [
      ["飞书-猿辅导自然拼读意图识别与定时跟进", "运行中", "接收飞书消息，识别咨询意图，查询客户状态，生成回复和后续跟进计划。", ["飞书", "售前", "定时任务"]],
      ["38天自动消息任务", "运行中", "按客户阶段触发资料发送、报名提醒、试听回访和停止跟进。", ["SOP", "自动跟进"]],
      ["人工接管同步", "测试中", "当价格特批、投诉、明确找人工时，写入人工接管队列并保留完整上下文。", ["转人工", "队列"]],
      ["课程知识库检索", "已连接", "从课程 FAQ 和知识表检索答案，优先返回严格可溯源的回复。", ["知识库", "RAG"]],
    ],
    tableTitle: "接入状态",
    table: [
      ["节点", "n8n 角色", "状态"],
      ["Webhook 入口", "接收飞书事件和聊天消息", "已配置"],
      ["客户状态表", "读取/写入标签、阶段、待执行计划", "已连接"],
      ["AI 回复节点", "生成回复、摘要和下一步计划", "运行中"],
      ["发布控制", "测试通过后再发布工作流", "前端演示"],
    ],
  },
  content: {
    kicker: "智能体配置 / 内容",
    title: "内容",
    desc: "管理智客可引用的课程资料、FAQ、价格政策、试听流程和内部话术。每条内容都可以进入详情检查覆盖范围。",
    actions: ["上传文档", "新建文章"],
    metrics: [["已启用来源", "24"], ["待审核", "5"], ["覆盖问题", "186"]],
    recordsTitle: "知识来源",
    records: [
      ["自然拼读课程介绍文档", "已启用", "包含课程目标、适龄范围、试听安排和常见问题。", ["课程", "FAQ", "公开"]],
      ["剑桥英语卖点与话术", "待审核", "适合顾问解释学习路径和阶段目标。", ["内部", "销售话术"]],
      ["价格与优惠政策", "已启用", "包含老学员、转介绍、试听后限时权益。", ["敏感", "需人工确认"]],
      ["售后调课与请假规则", "已启用", "用于自动处理基础售后问题。", ["售后", "流程"]],
    ],
    tableTitle: "内容健康度",
    table: [["栏目", "覆盖率", "建议"], ["课程介绍", "92%", "保持"], ["价格政策", "71%", "补充城市差异"], ["售后流程", "84%", "补充发票问题"]],
  },
  guidance: {
    kicker: "智能体配置 / 技能中心",
    title: "技能中心",
    desc: "配置智客的回答口径、销售边界、邀约策略和禁止话术，让每一次自动接待都更接近优秀课程顾问。",
    actions: ["新增指导", "运行检查"],
    metrics: [["启用指导", "18"], ["命中率", "76%"], ["风险拦截", "9"]],
    recordsTitle: "指导规则",
    records: [
      ["先问孩子年级和基础", "已启用", "课程推荐前必须先确认年级、英语基础和学习目标。", ["售前", "必问"]],
      ["价格异议不承诺最低价", "已启用", "遇到价格优惠问题，只说明可帮忙查询权益并转给顾问。", ["合规", "转人工"]],
      ["试听邀约优先给两个时间段", "测试中", "提供两个可选试听时段，减少开放式沟通成本。", ["转化", "A/B"]],
    ],
    tableTitle: "话术命中样例",
    table: [["意图", "推荐动作", "人工边界"], ["想试听", "收集时间并创建预约", "家长要求电话"], ["问价格", "解释范围并查权益", "特殊优惠"], ["投诉", "安抚并升级工单", "全部升级"]],
  },
  attributes: {
    kicker: "智能体配置 / 客户属性",
    title: "客户属性",
    desc: "定义智客需要收集和使用的客户字段，用于判断意向、推荐课程、路由顾问和生成跟进摘要。",
    actions: ["新增属性", "同步 CRM"],
    metrics: [["核心字段", "16"], ["自动填充率", "68%"], ["CRM 同步", "已开启"]],
    recordsTitle: "属性字段",
    records: [
      ["孩子年级", "必填", "用于判断课程阶段和试听内容。", ["路由", "推荐"]],
      ["英语基础", "推荐填写", "区分零基础、拼读薄弱、阅读提升等路径。", ["画像"]],
      ["可试听时间", "必填", "用于自动推荐时间并创建顾问任务。", ["任务"]],
      ["来源渠道", "自动填充", "记录小红书、企微、公众号、网页等来源。", ["归因"]],
    ],
    tableTitle: "字段使用位置",
    table: [["字段", "用于", "缺失时动作"], ["孩子年级", "课程推荐", "追问"], ["手机号", "CRM 去重", "转人工收集"], ["城市", "校区/顾问分配", "默认线上课"]],
  },
  escalation: {
    kicker: "智能体配置 / 转人工规则",
    title: "转人工规则",
    desc: "设置智客在不确定、敏感、投诉、价格特批和高意向场景下的升级条件，确保自动化不越界。",
    actions: ["新增规则", "模拟升级"],
    metrics: [["启用规则", "11"], ["今日升级", "27"], ["误升级率", "3.4%"]],
    recordsTitle: "升级规则",
    records: [
      ["家长明确要求人工", "已启用", "出现“找老师/顾问/人工/电话聊”等表达时转人工。", ["强制升级"]],
      ["价格特批与退款", "已启用", "涉及优惠承诺、退款、合同争议时不自动决策。", ["合规"]],
      ["回答置信度不足", "已启用", "连续两轮无法可靠回答时，携带上下文升级。", ["安全"]],
      ["高意向试听预约", "已启用", "满足年级+手机号+时间后提醒顾问接管。", ["转化"]],
    ],
    tableTitle: "转交摘要字段",
    table: [["字段", "示例", "用途"], ["用户诉求", "想约试听", "顾问开场"], ["已收集信息", "三年级/周四晚", "减少重复询问"], ["风险点", "价格异议", "人工优先处理"]],
  },
  procedures: {
    kicker: "智能体配置 / 工作流",
    title: "工作流",
    desc: "把预约试听、发送资料、创建线索、查订单、升级工单等动作编排成可执行流程。",
    actions: ["新建流程", "测试流程"],
    metrics: [["流程数", "9"], ["成功执行", "312"], ["失败待查", "4"]],
    recordsTitle: "流程清单",
    records: [
      ["预约试听", "运行中", "收集年级、基础、手机号、可试听时间并创建顾问任务。", ["售前", "核心"]],
      ["发送课程资料", "运行中", "根据班型和孩子年级发送课程介绍、班型对比和试听说明。", ["资料"]],
      ["售后调课", "测试中", "收集原上课时间和可替换时间，生成售后工单。", ["售后"]],
      ["续费提醒", "草稿", "基于课时消耗和学习反馈触发续费沟通。", ["运营"]],
    ],
    tableTitle: "流程节点",
    table: [["流程", "触发", "下一步"], ["预约试听", "家长说想体验", "收集字段"], ["调课", "请假/换时间", "建工单"], ["续费", "课时少于 4", "发学习反馈"]],
  },
  test: {
    kicker: "Test",
    title: "测试",
    desc: "用真实家长问题测试智客回答，检查知识命中、语气、转人工时机和销售转化动作。",
    actions: ["运行测试集", "新增问题"],
    metrics: [["测试问题", "64"], ["通过率", "88%"], ["需复核", "7"]],
    recordsTitle: "测试样本",
    records: [
      ["孩子二年级适合自然拼读吗？", "通过", "正确询问基础并推荐试听。", ["课程推荐"]],
      ["最低多少钱能报？", "复核", "应避免直接承诺价格，建议转人工。", ["价格边界"]],
      ["我想投诉上次老师迟到", "通过", "已安抚并升级服务工单。", ["投诉"]],
    ],
    tableTitle: "测试维度",
    table: [["维度", "得分", "问题"], ["准确性", "91", "价格政策需更新"], ["语气", "94", "无"], ["转人工", "82", "部分问题升级偏晚"]],
  },
  channels: {
    kicker: "Deploy / Channels",
    title: "渠道接入",
    desc: "管理网页、企业微信、公众号、小程序和抖音私信等触点，确保家长从任意入口都能进入同一个接待体系。",
    actions: ["添加渠道", "复制安装代码"],
    metrics: [["已连接", "4"], ["测试中", "2"], ["今日会话", "864"]],
    recordsTitle: "接入渠道",
    records: [
      ["官网咨询窗口", "已连接", "用于网页落地页和课程详情页。", ["Web", "在线"]],
      ["企业微信", "测试中", "用于私域家长咨询和顾问协同。", ["企微", "需授权"]],
      ["公众号", "已连接", "关注后自动欢迎语和课程资料索取。", ["微信"]],
      ["小程序客服", "待配置", "用于报名后售后和课程提醒。", ["小程序"]],
    ],
    tableTitle: "渠道配置",
    table: [["渠道", "欢迎语", "转人工"], ["官网", "已启用", "课程顾问组"], ["企微", "测试中", "私域顾问组"], ["公众号", "已启用", "售前组"]],
  },
  routing: {
    kicker: "Deploy / Routing",
    title: "分流策略",
    desc: "按意向度、地区、班型、渠道和顾问负载分配会话，让高价值线索被最快接住。",
    actions: ["新增策略", "模拟分配"],
    metrics: [["启用策略", "7"], ["高意向直达", "96%"], ["平均等待", "42 秒"]],
    recordsTitle: "路由规则",
    records: [
      ["A 级试听线索", "已启用", "手机号+年级+试听时间齐全，直达课程顾问。", ["高优先级"]],
      ["售后问题", "已启用", "调课、发票、教材进入服务顾问组。", ["售后"]],
      ["低意向资料索取", "已启用", "先由智客自动发送资料，24 小时后提醒跟进。", ["自动化"]],
    ],
    tableTitle: "顾问组",
    table: [["组", "条件", "SLA"], ["售前 A 组", "高意向/一线城市", "5 分钟"], ["售前 B 组", "普通咨询", "30 分钟"], ["售后组", "已报名用户", "15 分钟"]],
  },
  report: {
    kicker: "数据分析 / 表现分析",
    title: "表现分析",
    desc: "让 Agent 分析自己的回答、解决、转人工和转化表现，自动总结原因并提出可执行策略。",
    actions: ["询问表现", "生成策略"],
    metrics: [["自动解决率", "71%"], ["留资率", "38%"], ["试听预约", "126"]],
    recordsTitle: "关键指标",
    records: [
      ["招生咨询自动化", "上升", "本周自动处理 2,140 条，较上周提升 12%。", ["增长"]],
      ["价格异议转人工", "稳定", "转人工后 42% 进入顾问跟进。", ["转化"]],
      ["售后调课自动处理", "上升", "自动完成 318 次调课信息收集。", ["提效"]],
    ],
    tableTitle: "渠道表现",
    table: [["渠道", "会话", "留资率"], ["官网", "1,248", "31%"], ["企微", "892", "44%"], ["公众号", "530", "28%"]],
  },
  quality: {
    kicker: "数据分析 / 策略复盘",
    title: "策略复盘",
    desc: "沉淀 Agent 自我分析后的策略提案、实验结果和审批记录，形成持续迭代闭环。",
    actions: ["复盘策略", "审批提案"],
    metrics: [["抽检会话", "180"], ["合格率", "92%"], ["知识缺口", "14"]],
    recordsTitle: "复盘发现",
    records: [
      ["自然拼读适龄说明不够细", "需补充", "建议按幼小衔接、一二年级、三年级以上拆分。", ["知识缺口"]],
      ["价格问题升级及时", "通过", "没有直接承诺最低价，转交顾问处理。", ["合规"]],
      ["试听邀约缺少二选一时间", "优化", "建议默认给两个可选时间段。", ["转化"]],
    ],
    tableTitle: "质检维度",
    table: [["维度", "合格率", "下步"], ["准确性", "93%", "补知识"], ["销售合规", "96%", "保持"], ["体验", "88%", "优化话术"]],
  },
  settings: {
    kicker: "Settings",
    title: "设置",
    desc: "管理 Agent 名称、品牌语气、权限、数据保留、隐私合规和模型安全边界。",
    actions: ["保存设置", "权限管理"],
    metrics: [["成员", "8"], ["角色", "4"], ["数据保留", "180 天"]],
    recordsTitle: "配置项",
    records: [
      ["品牌语气", "已配置", "专业、温和、结果导向，避免夸大承诺。", ["语气"]],
      ["权限", "已配置", "运营可改话术，顾问只查看会话和摘要。", ["权限"]],
      ["安全边界", "已配置", "价格、退款、合同、隐私问题必须人工确认。", ["安全"]],
    ],
    tableTitle: "权限矩阵",
    table: [["角色", "可编辑", "可查看"], ["管理员", "全部", "全部"], ["运营", "知识/话术/流程", "报表"], ["顾问", "跟进状态", "分配会话"]],
  },
  changelog: {
    kicker: "Changelog",
    title: "更新记录",
    desc: "记录智客能力、知识库、流程和渠道配置的变更，方便团队回溯。",
    actions: ["筛选变更", "订阅通知"],
    metrics: [["本周更新", "17"], ["发布人", "4"], ["回滚点", "3"]],
    recordsTitle: "最近变更",
    records: [
      ["新增价格异议识别规则", "今天 10:32", "遇到低价、优惠、团购等表达自动转人工。", ["规则"]],
      ["更新自然拼读课程介绍", "昨天 18:20", "补充适龄范围和试听课结构。", ["知识"]],
      ["上线官网测试渠道", "周二 14:05", "已部署测试窗口并接入欢迎语。", ["渠道"]],
    ],
    tableTitle: "发布记录",
    table: [["版本", "内容", "状态"], ["v0.4", "转人工摘要", "已发布"], ["v0.3", "策略复盘", "已发布"], ["v0.2", "渠道接入", "已发布"]],
  },
  workflows: {
    kicker: "Automation",
    title: "工作流",
    desc: "把智客识别到的意图连接到 CRM、通知、标签、工单和顾问任务，形成完整闭环。",
    actions: ["新建工作流", "运行日志"],
    metrics: [["工作流", "12"], ["今日触发", "486"], ["失败", "3"]],
    recordsTitle: "工作流",
    records: [
      ["高意向试听提醒", "运行中", "识别 A 级线索后 5 分钟内通知顾问。", ["线索", "通知"]],
      ["资料索取后回访", "运行中", "发送资料 24 小时后自动创建回访任务。", ["培育"]],
      ["投诉升级", "运行中", "投诉类会话立即生成服务工单并提醒负责人。", ["售后"]],
    ],
    tableTitle: "触发日志",
    table: [["时间", "工作流", "结果"], ["10:42", "高意向试听提醒", "成功"], ["10:37", "资料索取后回访", "成功"], ["10:12", "投诉升级", "成功"]],
  },
};

const intercomPages = {
  guidance: {
    title: "自定义云梯智客的服务技能",
    intro: "训练智客掌握可复用的服务与销售技能，包括沟通风格、追问策略、异议处理和推荐动作，确保每个工作流里的服务口径一致且可规模化。",
    tabs: ["快速开始", "最佳实践", "智客基础", "了解更多"],
    mainTitle: "技能中心",
    search: "按标题或内容搜索指导",
    groups: [
      {
        icon: "💬",
        title: "沟通技能",
        desc: "创建智客在称呼、语气、解释方式和销售边界上的可复用技能。",
        empty: "还没有技能。点击新建来创建一条。",
        items: ["称呼家长为“您”，避免销售压迫感", "解释课程时先确认孩子年级和基础"],
      },
      {
        icon: "?",
        title: "追问与判断技能",
        desc: "创建智客在推荐课程、判断意向和补充信息时应使用的追问技能。",
        empty: "还没有技能。点击新建来创建一条。",
        items: ["推荐课程前必须确认年级、英语基础和可试听时间"],
      },
    ],
    preview: "请向智客提问您的客户可能会问的问题，以预览其回答。",
  },
  attributes: {
    title: "让智客使用客户属性",
    intro: "选择智客可读取和更新的客户资料，让回答可以基于年级、来源渠道、课程阶段和顾问归属进行个性化处理。",
    tabs: ["配置属性", "数据权限", "同步说明"],
    mainTitle: "属性",
    search: "搜索属性名称",
    groups: [
      {
        icon: "◎",
        title: "客户资料",
        desc: "智客可以读取这些字段来判断意向、推荐课程并生成转人工摘要。",
        empty: "选择字段后，智客会在预览面板中展示如何使用。",
        items: ["孩子年级", "英语基础", "可试听时间", "来源渠道"],
      },
      {
        icon: "↔",
        title: "CRM 同步",
        desc: "把智客收集到的信息同步到线索系统，避免顾问重复询问。",
        empty: "还没有写入规则。点击新建来创建一条。",
        items: ["手机号用于 CRM 去重", "高意向标签同步给顾问"],
      },
    ],
    preview: "选择一位预览用户后，测试智客如何读取和使用这些属性。",
  },
  escalation: {
    title: "告诉智客何时转人工",
    intro: "通过确定性转人工规则和自然语言转人工指导，控制智客什么时候把对话交给团队。",
    tabs: ["如何设置自动转人工", "指导最佳实践"],
    mainTitle: "转人工",
    search: "筛选转人工规则",
    split: true,
    columns: [
      {
        title: "转人工规则",
        desc: "使用属性和客户数据确定性地定义升级条件。",
        button: "新建",
        items: ["价格特批或退款请求", "投诉、焦虑或紧急情况", "高意向试听预约"],
      },
      {
        title: "转人工指导",
        desc: "微调没有被规则覆盖的特定场景下的智客转人工行为。",
        button: "新建",
        items: ["升级退款请求", "升级情绪激动或紧急案例", "升级排课延迟"],
      },
    ],
  },
  procedures: {
    title: "工作流",
    intro: "通过步骤化说明训练智客处理复杂、多步骤流程，例如预约试听、售后调课、支付异常或账号排查。",
    tabs: ["全部状态", "全部渠道", "已上线优先", "标签筛选"],
    procedure: true,
    cardTitle: "开始使用工作流",
    cardBody: "工作流让你用自然语言说明和确定性控制结合的方式，训练智客处理关键决策。也可以让 AI 根据流程描述直接生成可编辑的流程草稿。",
    items: [
      {
        title: "处理试听预约并创建顾问任务",
        channels: "网页、企微、公众号",
        state: "草稿",
        desc: "当家长表示想体验、试听或了解课程时触发。智客会收集孩子年级、英语基础、手机号和可试听时间，并把摘要交给课程顾问。",
        stats: ["已触发 126", "待处理 8", "已解决 91", "转人工 27", "升级 3"],
      },
      {
        title: "处理售后调课和请假",
        channels: "网页、小程序、企微",
        state: "草稿",
        desc: "当用户提出调课、请假、换老师或补课问题时触发。智客收集原课时、可替换时间和原因，创建服务工单。",
        stats: ["已触发 84", "待处理 5", "已解决 73", "转人工 6", "升级 1"],
      },
    ],
  },
  content: {
    content: true,
    title: "内容",
    intro: "管理智客可引用的公开文章、内部文章、片段和网站同步内容。",
    actions: ["添加内容", "公开文章", "内部文章", "片段", "网站同步", "查看全部"],
    rows: [
      ["自然拼读课程介绍", "已上线 10 项", "已启用", "已启用", "已启用"],
      ["价格与优惠政策", "已上线", "已启用", "需人工确认", "关闭"],
      ["售后调课与请假规则", "已上线", "已启用", "关闭", "关闭"],
    ],
  },
  test: {
    test: true,
    title: "批量测试智客回答，更有信心地上线",
    intro: "查看智客如何处理真实对话。上线前优化答案，确保高质量支持。",
    cards: [
      ["从收件箱生成", "基于过往对话生成最多 50 个测试问题", "生成"],
      ["手动添加", "复制粘贴问题列表，或逐条手动添加", "添加"],
      ["上传 CSV 文件", "一次上传最多 50 个问题", "上传"],
    ],
  },
};

const railPages = {
  inbox: {
    title: "收件箱",
    subtitle: "统一处理来自官网、企微、公众号和小程序的客户会话。",
    tabs: ["开放中 4", "等待中 12", "已关闭", "全部"],
    type: "inbox",
    conversations: [
      ["李女士", "想预约自然拼读试听，孩子二年级，周四晚上可沟通。", "2 分钟前", "高意向"],
      ["张先生", "询问课程价格和转介绍优惠，已要求顾问电话联系。", "8 分钟前", "价格异议"],
      ["王同学妈妈", "反馈上周调课后没有收到提醒，需要售后跟进。", "14 分钟前", "售后"],
      ["赵女士", "索取自然拼读课程资料，智客已自动发送介绍。", "29 分钟前", "已自动解决"],
    ],
  },
  knowledge: {
    title: "知识库",
    subtitle: "管理帮助中心、内部文章、片段和同步来源，供云梯智客引用。",
    tabs: ["内容", "来源", "推荐", "覆盖缺口"],
    type: "table",
    actions: ["新建文章", "导入文档", "同步网站"],
    columns: ["标题", "状态", "类型", "最近更新", "覆盖场景"],
    rows: [
      ["自然拼读课程介绍", "已上线", "公开文章", "今天 10:12", "课程咨询"],
      ["试听预约标准流程", "已上线", "内部文章", "昨天 18:20", "销售转化"],
      ["价格与优惠政策", "需复核", "内部文章", "周二 14:05", "价格异议"],
      ["售后调课规则", "已上线", "片段", "周一 09:30", "售后服务"],
    ],
  },
  reports: {
    title: "报表",
    subtitle: "查看自动解决、转人工、留资、试听预约和顾问跟进表现。",
    tabs: ["概览", "会话", "转化", "质量"],
    type: "reports",
    cards: [["自动解决率", "71%", "+8%"], ["留资率", "38%", "+5%"], ["试听预约", "126", "+19"], ["转人工满意度", "92%", "+3%"]],
    rows: [
      ["官网咨询", "1,248", "31%", "64%"],
      ["企业微信", "892", "44%", "72%"],
      ["公众号", "530", "28%", "59%"],
    ],
  },
  outbound: {
    title: "客户触达",
    subtitle: "创建对家长的主动触达、资料补发、试听提醒和回访计划。",
    tabs: ["活动", "受众", "模板", "发送记录"],
    type: "table",
    actions: ["新建触达", "选择受众", "创建模板"],
    columns: ["活动", "状态", "渠道", "触达人数", "目标"],
    rows: [
      ["试听后 24 小时跟进", "运行中", "企微", "386", "提高报名转化"],
      ["自然拼读资料补发", "草稿", "公众号", "214", "唤醒低意向线索"],
      ["续费提醒", "暂停", "短信", "98", "续费沟通"],
      ["公开课开播提醒", "运行中", "企微", "642", "提高到课率"],
    ],
  },
  contacts: {
    title: "联系人",
    subtitle: "管理家长、学员和线索属性，查看对话历史与顾问跟进状态。",
    tabs: ["全部", "高意向", "待跟进", "已报名"],
    type: "contacts",
    rows: [
      ["李女士", "二年级", "自然拼读试听", "A 级", "陈顾问"],
      ["张先生", "三年级", "价格优惠", "B 级", "李老师"],
      ["王同学妈妈", "已报名", "售后调课", "服务中", "售后组"],
      ["赵女士", "一年级", "资料索取", "培育中", "未分配"],
    ],
  },
};

let activeIndustry = industryData[0];
let activeMode = modes[0];
let activeQuestionIndex = 0;
let procedureDraft = {
  title: "处理试听预约并创建顾问任务",
  trigger: "当家长表达想体验课程、预约试听、了解老师或询问是否适合孩子时触发。",
  audience: "网页、企业微信、公众号、小程序",
  steps: [
    ["确认触发场景", "判断用户是否在表达试听、体验、课程匹配或顾问咨询意图。"],
    ["收集关键字段", "询问孩子年级、英语基础、学习目标、所在城市和可试听时间。"],
    ["检查信息完整度", "如果缺少手机号或试听时间，继续追问；如果已完整，进入下一步。"],
    ["创建顾问任务", "把会话摘要、客户属性和推荐班型同步到 CRM，并标记为高意向。"],
    ["给用户确认", "告知已经安排顾问跟进，并说明预计联系时间。"],
  ],
};

let connectorDraft = {
  name: "猿辅导课程 CRM",
  type: "自定义 MCP",
  audience: "服务营销",
  status: "草稿",
  health: "未运行",
  security: "无风险",
  fin: "未启用",
  updated: "14 小时前",
};

const AI_MCP_STORAGE_KEY = "yunti.aiMcp.messages.v1";
const AI_MCP_ACTIVE_SESSION_KEY = "yunti.aiMcp.activeSession.v1";
const AI_MCP_PENDING_KEY = "yunti.aiMcp.pending.v1";
const AI_MCP_MAX_ATTACHMENTS = 9;
const AI_MCP_ATTACHMENT_ACCEPT = ".txt,.md,.markdown,.json,.csv,.tsv,.xml,.html,.css,.js,.mjs,.ts,.tsx,.jsx,.log,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpg,.jpeg,.webp,.gif";
const AI_MCP_TEXT_ATTACHMENT_LIMIT = 120_000;
const AI_MCP_IMAGE_INLINE_LIMIT = 900_000;
const initialAiMcpMessages = [
  {
    role: "assistant",
    content: "我会优先使用 n8n 原生节点面板里的「AI销售 模块」节点；模块不够时再补 HTTP、Code、IF、Wait 等 n8n 原生节点。你可以直接说“新建 SOP：家长咨询试听后 5 分钟未回复自动跟进”。",
  },
];
let aiMcpSessions = loadAiMcpState();
let aiMcpActiveSessionId = loadAiMcpActiveSessionId(aiMcpSessions);
let aiMcpMessages = getActiveAiMcpSession()?.messages || initialAiMcpMessages.map((message) => ({ ...message }));
let aiMcpPendingState = loadAiMcpPendingState();
let aiMcpStreamingMessage = "";
let aiMcpStatusText = "";
let aiMcpAttachments = [];
let aiMcpHistoryOpen = false;

const businessNodeCatalog = [
  {
    group: "入口",
    nodes: [
      ["feishu-entry", "飞书消息入口", "接收飞书私聊、群聊、URL 验证和报名点击事件。", "Webhook / Trigger"],
      ["tag-sync-entry", "后台标签同步入口", "接收人工标签、停止跟进和群发任务标签。", "Webhook"],
    ],
  },
  {
    group: "理解",
    nodes: [
      ["normalize-message", "标准化客户消息", "统一 chat_id、message_id、文本、语音和来源渠道。", "Code"],
      ["sales-intent", "AI识别销售意图", "识别试听、价格、课程匹配、投诉、找人工等销售 SOP 意图。", "AI / Code"],
      ["dedupe", "按消息ID去重", "避免飞书重复事件导致多次回复或多次跟进。", "Data Table / IF"],
    ],
  },
  {
    group: "知识与状态",
    nodes: [
      ["customer-state-read", "读取客户跟进状态", "读取标签、阶段、历史回复、待执行计划和群发记录。", "Data Table"],
      ["rag-course", "课程知识库检索", "从课程 FAQ、价格政策、试听流程中检索可溯源答案。", "Vector / RAG"],
      ["customer-state-write", "写入当前跟进状态", "把意图、摘要、下一步计划和手动标签写回客户状态。", "Data Table"],
    ],
  },
  {
    group: "回复与跟进",
    nodes: [
      ["reply-plan", "生成回复和跟进计划", "生成分条回复、顾问摘要、下一次触达时间和跟进原因。", "AI"],
      ["instant-reply", "发送飞书即时回复", "按顺序发送文本、卡片或语音回复。", "HTTP Request"],
      ["five-min-follow", "5分钟跟进", "等待 5 分钟后读取状态，仍需跟进才发送。", "Wait / IF"],
      ["hour-follow", "1小时跟进", "等待到 1 小时节点后检查状态并触达。", "Wait / IF"],
      ["night-follow", "21点30统一跟进", "按业务时间窗口统一处理晚间跟进。", "Schedule / Wait"],
      ["daily-bulk", "每日群发候选计算", "根据 SOP、客户阶段和自动任务标签计算群发队列。", "Schedule / Code"],
    ],
  },
  {
    group: "人工控制",
    nodes: [
      ["handoff", "转人工", "价格特批、投诉、退款、明确找顾问时生成摘要并进入人工队列。", "Human review / HTTP"],
      ["stop-follow", "停止跟进", "人工标记停止后清理自动任务并阻断后续消息。", "IF / Data Table"],
      ["approval", "发布前审批", "新 SOP 或高风险改动先进入测试版，人工确认后再发布。", "Manual approval"],
    ],
  },
  {
    group: "原生兜底",
    nodes: [
      ["native-fallback", "调用 n8n 原生节点", "当业务节点不够表达时，由 AI 直接添加 HTTP、Code、IF、Wait、Merge 等原生节点。", "Native n8n"],
      ["native-map", "原生节点中文对照", "把 Webhook、Code、IF、Wait、HTTP Request 等英文能力翻译成业务可理解的中文。", "Translation"],
    ],
  },
];

const nativeNodeChineseMap = [
  ["AI", "AI 能力：智能体、模型、知识检索、总结、分类"],
  ["Action in an app", "应用动作：调用飞书、表格、CRM、支付、工单等外部系统"],
  ["Data transformation", "数据处理：清洗、拆分、合并、格式转换"],
  ["Flow", "流程控制：条件判断、分支、循环、合并"],
  ["Core", "核心节点：代码、HTTP 请求、Webhook、执行子流程"],
  ["Human review", "人工审批：需要人确认后再继续执行"],
  ["Add another trigger", "新增触发器：再加一个入口或定时任务"],
];

const moduleRegistry = [
  {
    group: "数据库与RAG",
    modules: [
      ["rag-db", "课程知识库 / 向量库", "FAQ、价格政策、试听流程、售后规则", "输入 question / productLine / customerStage，输出 answer / sources / confidence"],
      ["customer-profile-db", "客户画像库", "孩子年级、基础、来源渠道、购买意向、历史摘要", "输入 customerId / chatId，输出 profile / tags / riskFlags"],
      ["conversation-memory", "会话记忆库", "近期消息、顾问备注、已发送话术、待执行任务", "输入 chatId，输出 history / lastReply / pendingTasks"],
    ],
  },
  {
    group: "沟通技能库",
    modules: [
      ["trial-playbook", "试听转化 Playbook", "试听咨询、课程匹配、信息收集、顾问任务创建", "输入 intent / profile，输出 nextStep / scriptTemplate / handoffReason"],
      ["objection-skill", "异议处理技能包", "价格、效果、时间、孩子抗拒、家长犹豫", "输入 objectionType / customerStage，输出 replyStrategy / examples"],
      ["complaint-skill", "投诉安抚技能包", "退款、投诉、找人工、负面情绪直接升级", "输入 message / riskFlags，输出 escalation / summary / requiredOwner"],
    ],
  },
  {
    group: "Agent基础设定",
    modules: [
      ["agent-persona", "销售顾问人设", "语气、禁用承诺、品牌称谓、分条回复规范", "为话术生成、RAG回答、人工摘要提供系统约束"],
      ["channel-policy", "渠道策略", "飞书、企微、短信、群发、晚间触达窗口", "为发送节点和等待节点提供触达限制"],
      ["approval-policy", "发布审批策略", "新 SOP、价格特批、高风险回复先进入测试或人工审批", "为发布前审批节点提供拦截规则"],
    ],
  },
  {
    group: "用户标签状态",
    modules: [
      ["tag-state", "标签与阶段状态", "高意向、待试听、已转人工、停止跟进、投诉中", "输入 customerId / event，输出 currentStage / allowedActions"],
      ["followup-queue", "跟进任务队列", "5分钟、1小时、21点30、每日群发候选", "输入 taskType / dueAt，输出 queued / skippedReason"],
      ["dedupe-state", "消息去重状态", "message_id、event_id、发送记录和幂等键", "输入 eventId / messageId，输出 shouldProcess / duplicateOf"],
    ],
  },
];

const droppedBusinessNodes = [];

const agentConfigSubmodules = [
  {
    id: "workflow-build",
    label: "工作流搭建",
    eyebrow: "Workflow",
    title: "把销售 SOP 编排成可执行流程",
    desc: "面向业务人员组织触发、分支、等待、工具调用和转人工，再同步到 n8n 原生画布执行。",
    points: ["触发器与路径分支", "定时跟进与状态回写", "n8n 业务节点映射"],
    metrics: [["当前画布", "已连接"], ["可发布版本", "草稿"], ["执行节点", "22"]],
  },
  {
    id: "sales-skills",
    label: "销售技能",
    eyebrow: "Skills",
    title: "沉淀优秀顾问的销售动作",
    desc: "配置需求挖掘、异议处理、邀约试听、催单、续费和投诉安抚等技能，让回复不只是答题。",
    points: ["高意向识别话术", "价格异议边界", "试听邀约策略"],
    metrics: [["启用技能", "18"], ["待审核", "3"], ["风险拦截", "9"]],
  },
  {
    id: "smart-tags",
    label: "智能标签",
    eyebrow: "Tags",
    title: "让客户状态成为流程判断依据",
    desc: "维护 AI 自动标签和人工标签，处理标签冲突、阶段切换、停止跟进和人工接管条件。",
    points: ["意向等级与购买阶段", "沉默/拒绝/投诉状态", "AI 标签与人工覆盖"],
    metrics: [["核心标签", "16"], ["自动命中", "68%"], ["人工覆盖", "可用"]],
  },
  {
    id: "knowledge-base",
    label: "资料中心",
    eyebrow: "Knowledge",
    title: "管理可溯源的回答依据",
    desc: "接入课程资料、FAQ、价格政策、报名链接、图片表格和案例素材，并支持检索测试与冲突清理。",
    points: ["资料导入与解析", "引用来源与版本", "检索覆盖检查"],
    metrics: [["资料来源", "24"], ["待审核", "5"], ["覆盖问题", "186"]],
  },
  {
    id: "answer-test",
    label: "执行测试",
    eyebrow: "Test",
    title: "定位答案来源，标注好坏回答给 AI 学习",
    desc: "不同于 n8n 的节点运行测试，这里检查业务回答是否答非所问、是否引用了正确资料、是否触发了正确技能和标签。",
    points: ["答案来源追踪", "标注好坏回答", "学习回流到技能/标签/资料中心"],
    metrics: [["测试样本", "30"], ["待复盘", "7"], ["学习回流", "开启"]],
  },
];

let salesSkillSearchTerm = "";
let selectedSalesSkillId = "skill-objection-price";
let selectedSalesSkillIds = [];
let salesBasicPaused = false;
let salesSkillBasicSetting = "销售技能用于约束智能体在招生咨询、试听邀约、异议处理、催单续费和投诉安抚中的沟通方式。所有技能都应遵守：不夸大效果、不承诺最低价、不索要敏感验证码，无法确认时转人工。";
let activeAnswerTestThreadId = "";
let answerTestDraft = "";
let answerTestSearchTerm = "";
let answerHistoryCollapsed = false;
let answerTestAttachments = [];
const answerTestThreads = [
  {
    id: "answer-thread-1",
    title: "有啥礼物",
    createdAt: Date.parse("2026-06-30T09:48:00+08:00"),
    messages: [
      {
        role: "user",
        text: "有啥礼物",
      },
      {
        role: "assistant",
        text: "目前可确认的礼物是自然拼读试听资料包和课后练习卡。具体领取条件会根据孩子年级、报名阶段和当前活动政策判断；如果家长已经试听或已购课，需要先让顾问核对权益，避免承诺错误。",
        sources: [
          {
            group: "工作流节点设定",
            count: 2,
            items: [
              { icon: "node", title: "礼品权益判断节点", detail: "命中字段：grade、trial_status、purchase_stage；输出礼品领取边界。", route: "workflow-build" },
              { icon: "node", title: "人工核对分支", detail: "当权益状态不确定时转顾问确认，禁止直接承诺。", route: "workflow-build" },
            ],
          },
          {
            group: "销售技能",
            count: 2,
            items: [
              { icon: "skill", title: "试听邀约", detail: "先确认孩子基础和试听阶段，再说明可领取的资料包。", route: "sales-skills" },
              { icon: "skill", title: "价格异议处理", detail: "涉及优惠或权益时不承诺最低价，转课程顾问确认。", route: "sales-skills" },
            ],
          },
          {
            group: "智能标签",
            count: 1,
            items: [
              { icon: "tag", title: "高意向 / 待试听", detail: "家长询问礼品且未明确报名，保持邀约试听路径。", route: "smart-tags" },
            ],
          },
          {
            group: "资料中心",
            count: 2,
            items: [
              { icon: "doc", title: "自然拼读试听 SOP", detail: "引用：试听资料包、练习卡、领取前置条件。", route: "knowledge-base" },
              { icon: "doc", title: "课程权益 FAQ", detail: "引用：已购课和未购课礼品权益差异。", route: "knowledge-base" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "answer-thread-2",
    title: "孩子基础差能不能学",
    createdAt: Date.parse("2026-06-30T09:21:00+08:00"),
    messages: [
      { role: "user", text: "孩子基础差能不能学" },
      {
        role: "assistant",
        text: "可以先从试听评估开始，重点看孩子当前字母音、拼读兴趣和可配合时间。AI 会先收集基础信息，再推荐顾问安排合适级别。",
        sources: [
          {
            group: "销售技能",
            count: 1,
            items: [
              { icon: "skill", title: "需求挖掘", detail: "先问年级、英语基础、学习目标，不直接承诺效果。", route: "sales-skills" },
            ],
          },
          {
            group: "资料中心",
            count: 1,
            items: [
              { icon: "doc", title: "自然拼读课程介绍", detail: "引用：适合零基础或弱基础孩子的试听评估说明。", route: "knowledge-base" },
            ],
          },
        ],
      },
    ],
  },
];
const salesSkillStore = [
  {
    id: "skill-objection-price",
    name: "价格异议处理",
    condition: "家长提到太贵、优惠、最低价、转介绍权益或试听后价格。",
    description: "## 处理目标\n先共情预算顾虑，再解释课程价值和可查询权益。\n\n## 执行步骤\n1. 先认可家长对预算的担心。\n2. 结合孩子年级、学习目标说明课程价值。\n3. 如涉及优惠、转介绍权益或特殊价格，转课程顾问确认。\n\n## 边界\n- 不承诺最低价。\n- 不暗示可绕过官方规则。",
    createdAt: Date.parse("2026-06-29T09:30:00+08:00"),
  },
  {
    id: "skill-trial-invite",
    name: "试听邀约",
    condition: "家长咨询课程是否适合、希望先体验、问老师或上课时间。",
    description: "## 处理目标\n把泛咨询推进到可执行的试听安排。\n\n## 执行步骤\n1. 收集孩子年级、英语基础和可试听时间。\n2. 优先给出两个可选档期。\n3. 确认后创建顾问跟进任务。\n\n## 边界\n- 不保证试听老师固定。\n- 时间未确认前不承诺已预约成功。",
    createdAt: Date.parse("2026-06-28T16:20:00+08:00"),
  },
  {
    id: "skill-need-discovery",
    name: "需求挖掘",
    condition: "用户只表达泛泛兴趣，尚未说明孩子年级、学习目标或当前问题。",
    description: "## 处理目标\n补齐课程推荐前必须知道的关键信息。\n\n## 执行步骤\n1. 用 2 到 3 个短问题询问年级、基础、目标和可上课时间。\n2. 根据回答判断进入课程推荐还是试听邀约。\n3. 信息不足时继续追问，不直接给结论。\n\n## 边界\n- 不凭空判断孩子水平。\n- 不一次性抛出过多问题。",
    createdAt: Date.parse("2026-06-27T11:12:00+08:00"),
  },
  {
    id: "skill-complaint-calm",
    name: "投诉安抚",
    condition: "家长表达不满、退款、投诉、找负责人、老师问题或服务体验差。",
    description: "## 处理目标\n先稳定情绪，再把问题转成可交接的处理信息。\n\n## 执行步骤\n1. 先承认情绪和问题。\n2. 收集订单、班级、时间和具体诉求。\n3. 生成摘要并转人工处理。\n\n## 边界\n- 不争辩、不推责。\n- 不承诺退款结果或处理时效。",
    createdAt: Date.parse("2026-06-26T18:05:00+08:00"),
  },
];

let smartTagSearchTerm = "";
let selectedSmartTagCategoryId = "tag-cat-stage";
let expandedSmartTagCategoryIds = ["tag-cat-stage"];
const smartTagCategories = [
  {
    id: "tag-cat-stage",
    name: "客户阶段",
    condition: "用于判断客户从首次咨询到售后咨询的生命周期阶段，阶段标签之间默认互斥。",
    createdAt: Date.parse("2026-06-29T10:10:00+08:00"),
    tags: [
      { id: "tag-stage-new", name: "新线索", condition: "家长首次咨询或只留下初步问题，尚未明确课程、试听或购买意向。", createdAt: Date.parse("2026-06-29T10:16:00+08:00") },
      { id: "tag-stage-learning", name: "正在了解", condition: "家长开始询问课程细节、适龄、效果、价格或上课方式，但还没有预约试听。", createdAt: Date.parse("2026-06-29T10:18:00+08:00") },
      { id: "tag-stage-trial", name: "试听预约", condition: "家长表达想试听、体验课、领取试听名额，或正在确认试听时间和孩子信息。", createdAt: Date.parse("2026-06-29T10:20:00+08:00") },
      { id: "tag-stage-paid", name: "购买成交", condition: "家长询问付款、优惠、报名、名额、合同、发票，或已接近/正在完成购买。", createdAt: Date.parse("2026-06-29T10:24:00+08:00") },
      { id: "tag-stage-after-sales", name: "售后咨询", condition: "已购用户咨询排课、资料、进群、退款、补课、技术问题或学习反馈。", createdAt: Date.parse("2026-06-29T10:28:00+08:00") },
    ],
  },
  {
    id: "tag-cat-intent",
    name: "购买意向",
    condition: "用于区分高意向、犹豫、价格敏感和明确拒绝，决定是否催单或降频跟进。",
    createdAt: Date.parse("2026-06-28T14:00:00+08:00"),
    tags: [
      { id: "tag-intent-high", name: "高意向", condition: "主动追问报名、名额、优惠截止、试听后购买，或多次表达希望尽快安排。", createdAt: Date.parse("2026-06-28T14:05:00+08:00") },
      { id: "tag-intent-price", name: "价格敏感", condition: "反复询问最低价、优惠、转介绍权益、是否还能便宜，或因预算暂缓。", createdAt: Date.parse("2026-06-28T14:08:00+08:00") },
      { id: "tag-intent-wait", name: "犹豫观望", condition: "表达再看看、和家人商量、等孩子反馈、暂时不急，但未明确拒绝。", createdAt: Date.parse("2026-06-28T14:12:00+08:00") },
      { id: "tag-intent-reject", name: "明确拒绝", condition: "明确表示不需要、不考虑、不再联系，或要求停止营销触达。", createdAt: Date.parse("2026-06-28T14:16:00+08:00"), paused: true },
    ],
  },
  {
    id: "tag-cat-topic",
    name: "咨询主题",
    condition: "记录家长当前最关心的问题，用于选择知识库资料、销售技能和后续跟进内容。",
    createdAt: Date.parse("2026-06-27T09:30:00+08:00"),
    tags: [
      { id: "tag-topic-course", name: "课程适配", condition: "询问孩子年龄、年级、基础、课程难度、自然拼读是否适合。", createdAt: Date.parse("2026-06-27T09:35:00+08:00") },
      { id: "tag-topic-price", name: "价格优惠", condition: "询问价格、优惠政策、团购、转介绍、续费折扣或付款方式。", createdAt: Date.parse("2026-06-27T09:39:00+08:00") },
      { id: "tag-topic-schedule", name: "上课时间", condition: "询问上课时间、排课、请假、补课、试听时间或老师档期。", createdAt: Date.parse("2026-06-27T09:42:00+08:00") },
      { id: "tag-topic-effect", name: "老师效果", condition: "询问老师资质、课堂效果、孩子是否能坚持、学习成果或案例。", createdAt: Date.parse("2026-06-27T09:45:00+08:00") },
      { id: "tag-topic-service", name: "退款售后", condition: "咨询退款、换课、资料缺失、进群、技术问题或服务体验。", createdAt: Date.parse("2026-06-27T09:52:00+08:00") },
    ],
  },
  {
    id: "tag-cat-handoff",
    name: "转人工规则",
    condition: "识别需要顾问、班主任或运营人工介入的场景，避免智能体继续自动承诺。",
    createdAt: Date.parse("2026-06-26T16:00:00+08:00"),
    tags: [
      { id: "tag-handoff-consultant", name: "需要顾问", condition: "涉及价格确认、名额锁定、试听排期、合同、发票或个性化方案。", createdAt: Date.parse("2026-06-26T16:05:00+08:00") },
      { id: "tag-handoff-complaint", name: "投诉风险", condition: "出现投诉、退款、找负责人、不满老师或服务体验差等高风险表达。", createdAt: Date.parse("2026-06-26T16:08:00+08:00") },
      { id: "tag-handoff-processing", name: "人工处理中", condition: "已有人工接管、顾问正在跟进或已创建待处理任务，AI 不再重复推进。", createdAt: Date.parse("2026-06-26T16:12:00+08:00") },
      { id: "tag-handoff-sensitive", name: "敏感信息", condition: "用户发送身份证、验证码、支付截图、隐私信息或要求处理账号安全。", createdAt: Date.parse("2026-06-26T16:18:00+08:00") },
    ],
  },
  {
    id: "tag-cat-abuse",
    name: "骚扰处理",
    condition: "识别无效、骚扰、辱骂、广告和机器人消息，决定是否停止跟进或转人工复核。",
    createdAt: Date.parse("2026-06-25T11:00:00+08:00"),
    tags: [
      { id: "tag-abuse-spam", name: "广告推销", condition: "对方发送广告、招商、代运营、刷单、推广链接等非课程咨询内容。", createdAt: Date.parse("2026-06-25T11:05:00+08:00") },
      { id: "tag-abuse-invalid", name: "无效会话", condition: "连续空消息、乱码、误触、测试内容或明显不是目标客户咨询。", createdAt: Date.parse("2026-06-25T11:08:00+08:00") },
      { id: "tag-abuse-hostile", name: "辱骂攻击", condition: "出现辱骂、攻击、威胁、恶意挑衅或明显不适合继续自动回复。", createdAt: Date.parse("2026-06-25T11:12:00+08:00") },
      { id: "tag-abuse-stop", name: "停止跟进", condition: "用户明确要求不要再联系，或已被人工标记为停止营销触达。", createdAt: Date.parse("2026-06-25T11:16:00+08:00") },
    ],
  },
];

const knowledgeResourceStore = [
  {
    id: "kb-yuanfudao-course",
    name: "AI销售课程产品知识库_模拟数据",
    type: "文本",
    enabled: true,
    createdAt: Date.parse("2026-06-29T14:18:00+08:00"),
  },
  {
    id: "kb-followup-script",
    name: "AI销售成交案例话术",
    type: "表格",
    enabled: true,
    createdAt: Date.parse("2026-06-29T10:36:00+08:00"),
  },
  {
    id: "kb-price-policy",
    name: "价格报名与资料说明",
    type: "文本",
    enabled: false,
    createdAt: Date.parse("2026-06-28T17:45:00+08:00"),
  },
  {
    id: "kb-payment-shot",
    name: "支付截图",
    type: "图片",
    enabled: true,
    createdAt: Date.parse("2026-06-28T09:22:00+08:00"),
  },
];

let knowledgeResourceStep = 1;
let activeKnowledgeResourceId = "";
let editingKnowledgeChunkId = "";
let knowledgeChunkEditGuardUntil = 0;
let pendingKnowledgeChunk = null;
const knowledgeChunkDrafts = [
  {
    id: "chunk-overview",
    title: "切片 1",
    text: "自然拼读试听前，先确认孩子年级、英语基础和家长最关心的问题，再推荐合适的试听路径。",
    image: "课程路径图",
  },
  {
    id: "chunk-policy",
    title: "切片 2",
    text: "涉及价格、优惠、转介绍权益时，自动回复只说明官方口径，具体金额和特殊权益交由课程顾问确认。",
    image: "",
  },
  {
    id: "chunk-service",
    title: "切片 3",
    text: "售后或投诉场景需要先安抚情绪，收集订单、问题截图和期望处理方式，再创建人工跟进任务。",
    image: "服务流程图",
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function startProjectNameEdit(button) {
  if (!button || button.isContentEditable) return;
  button.dataset.previousName = button.textContent.trim() || "猿辅导课堂";
  button.contentEditable = "true";
  button.classList.add("editing");
  button.focus();
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(button);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function finishProjectNameEdit(button) {
  if (!button || !button.isContentEditable) return;
  const nextName = button.textContent.replace(/\s+/g, "").slice(0, 6);
  button.textContent = nextName || button.dataset.previousName || "猿辅导课堂";
  button.contentEditable = "false";
  button.classList.remove("editing");
  delete button.dataset.previousName;
  showToast("项目名已更新");
}

function toggleAgentConfigSubnav(button) {
  const subnav = $(".agent-config-sidebar-subnav");
  if (!button || !subnav) return;
  const expanded = button.getAttribute("aria-expanded") !== "false";
  const nextExpanded = !expanded;
  button.classList.toggle("open", nextExpanded);
  button.setAttribute("aria-expanded", String(nextExpanded));
  subnav.classList.toggle("collapsed", !nextExpanded);
}

function openModal(key) {
  const item = modalCopy[key] || modalCopy.guide;
  $("#modalContent").innerHTML = `
    <div class="modal-body">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <div class="modal-list">
        ${item.rows.map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`).join("")}
      </div>
    </div>
  `;
  $("#modal").showModal();
}

function openDetail(title, body, rows = []) {
  $("#modalContent").innerHTML = `
    <div class="modal-body detail-body">
      <h3>${title}</h3>
      <p>${body}</p>
      ${rows.length ? `
        <div class="modal-list">
          ${rows.map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`).join("")}
        </div>
      ` : ""}
      <pre>${body}

模拟内容：
- 当前状态会影响智客在对话里的回答、转人工和下一步动作。
- 这里可以继续编辑规则、查看命中样例、运行测试或同步到渠道。
- 所有数据为前端模拟，用于还原 Intercom 后台的操作感。</pre>
    </div>
  `;
  $("#modal").showModal();
}

function renderIndustryTabs() {
  $("#industryTabs").innerHTML = industryData
    .map((item) => `<button class="${item.id === activeIndustry.id ? "active" : ""}" data-industry="${item.id}">${item.label}</button>`)
    .join("");
}

function renderOpportunity() {
  $("#benchmarkText").textContent = `根据${activeIndustry.label === "整体" ? "教育咨询场景样本" : activeIndustry.label + "样本"}，云梯智客最高可自动处理 ${activeIndustry.automate}% 的对话。`;
  $("#faqMetric").textContent = `${activeIndustry.faq}%`;
  $("#savingMetric").textContent = activeIndustry.saving;
  $("#startTitle").textContent = activeIndustry.title;
  $("#startBody").textContent = activeIndustry.body;

  const colors = ["var(--purple)", "var(--purple-2)", "var(--purple-3)", "var(--olive)"];
  const labels = ["信息咨询", "个性化判断", "任务执行", "人工复杂"];
  $("#stackedBar").innerHTML = activeIndustry.segments
    .map((value, index) => `<div class="stacked-segment" style="width:${value}%;background:${colors[index]}"></div>`)
    .join("");
  $("#barLegend").innerHTML = activeIndustry.segments
    .map((value, index) => `
      <div class="legend-item">
        <span class="legend-swatch" style="background:${colors[index]}"></span>
        <strong>${index === 0 ? activeIndustry.automate + "% 智客" : value + "%"}</strong>
        <span>${labels[index]}</span>
      </div>
    `)
    .join("");
}

function renderModeTabs() {
  $("#modeTabs").innerHTML = modes
    .map((mode) => `<button class="${mode.id === activeMode.id ? "active" : ""}" data-mode="${mode.id}">${mode.label}</button>`)
    .join("");
}

function renderQuestions() {
  if (activeMode.handoff) {
    $("#questionList").className = "handoff-list";
    $("#questionList").innerHTML = activeMode.questions
      .map((item, index) => `
        <button class="handoff-card ${index === activeQuestionIndex ? "active" : ""}" data-question="${index}">
          <strong>${item.q}</strong>
          <span>${item.detail}</span>
        </button>
      `)
      .join("");
    return;
  }
  $("#questionList").className = "question-list";
  $("#questionList").innerHTML = activeMode.questions
    .map((item, index) => `
      <button class="question-card ${index === activeQuestionIndex ? "active" : ""}" data-question="${index}">
        ${item.q}
      </button>
    `)
    .join("");
}

function renderChat() {
  const item = activeMode.questions[activeQuestionIndex];
  $("#handoffNote").textContent = activeMode.id === "handoff" ? "正在转给顾问" : "我们会尽快";
  $("#chatWindow").innerHTML = `
    <div class="chat-bubble agent">${activeMode.intro}</div>
    <div class="chat-bubble user">${item.q}</div>
    <div class="chat-bubble agent">
      <strong>云梯智客</strong><br />
      ${item.a}
      <div class="action-strip">
        ${item.actions.map((action) => `<button data-toast="已执行：${action}">${action}</button>`).join("")}
      </div>
    </div>
  `;
}

function renderSteps() {
  $("#stepList").innerHTML = steps
    .map((step, index) => `
      <div class="step-item">
        <div class="step-index">${index + 1}</div>
        <div><strong>${step[0]}</strong><span>${step[1]}</span></div>
        <button data-toast="已标记「${step[0]}」为下一步">开始</button>
      </div>
    `)
    .join("");
}

function syncNav(section) {
  const groups = {
    deploy: ["channels", "routing"],
  };
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.section === section));
  $$(".sub-nav button").forEach((item) => item.classList.toggle("active", item.dataset.section === section));
  Object.entries(groups).forEach(([group, sections]) => {
    const shouldOpen = sections.includes(section);
    $(`[data-toggle="${group}"]`)?.classList.toggle("open", shouldOpen);
    $(`[data-group="${group}"]`)?.classList.toggle("collapsed", !shouldOpen);
  });
}

function syncRail(nav) {
  $$(".rail-button").forEach((item) => item.classList.toggle("active", item.dataset.nav === nav));
  $(".app-shell")?.classList.toggle("agent-mode", nav === "agent" || nav === "inbox");
  $(".app-shell")?.classList.remove("sidebar-collapsed");
}

function renderRailPage(nav) {
  const page = railPages[nav];
  if (!page) return false;
  syncRail(nav);
  $$(".nav-item").forEach((item) => item.classList.remove("active"));
  $$(".sub-nav button").forEach((item) => item.classList.remove("active"));
  if (page.type === "inbox") {
    document.querySelector('[data-section="inbox"]')?.classList.add("active");
  }
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");

  const tabBar = page.type === "inbox"
    ? ""
    : `<div class="rail-tabs">${page.tabs.map((tab, index) => `<button class="${index === 0 ? "active" : ""}" data-rail-detail="${nav}|筛选|${tab}">${tab}</button>`).join("")}</div>`;
  let body = "";

  if (page.type === "inbox") {
    body = `
      <div class="console-shell feishu-inbox-shell">
        <aside class="conversation-list">
          <header class="list-header">
            <div>
              <h1>飞书会话</h1>
              <span id="syncStatus">同步中</span>
            </div>
            <button id="refreshButton" class="icon-button" title="刷新" aria-label="刷新">
              <svg viewBox="0 0 24 24"><path d="M17.7 6.3A8 8 0 1 0 20 12h-2a6 6 0 1 1-1.8-4.2L13 11h8V3l-3.3 3.3z"/></svg>
            </button>
          </header>

          <div class="filters">
            <div class="segmented" role="tablist" aria-label="视图">
              <button data-view="handoff">转人工</button>
              <button class="active" data-view="all">全部</button>
            </div>
            <label class="search-box">
              <svg viewBox="0 0 24 24"><path d="m20 18.6-4.3-4.3a7 7 0 1 0-1.4 1.4l4.3 4.3L20 18.6zM5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"/></svg>
              <input id="searchInput" type="search" placeholder="搜索用户、标签、消息" />
            </label>
          </div>

          <div id="conversationList" class="list-body"></div>
        </aside>

        <main class="chat-pane">
          <header class="chat-header">
            <div>
              <strong id="chatTitle">选择一个用户</strong>
              <span id="chatSubtitle">查看聚合历史、标签和待发送内容</span>
            </div>
            <div class="header-actions">
              <button id="handoffButton" class="primary-button">人工接管</button>
            </div>
          </header>

          <section id="messages" class="messages" aria-live="polite">
            <div class="empty-state">
              <h2>默认显示需要人工处理的用户</h2>
              <p>左侧可按标签和关键词筛选。选中用户后，可以查看所有 n8n 会话历史和下一步计划。</p>
            </div>
          </section>

          <footer class="composer">
            <div class="attachment-row">
              <label class="file-chip">
                <input id="imageInput" type="file" accept="image/*" />
                <svg viewBox="0 0 24 24"><path d="M5 5h14v14H5V5zm2 2v8.2l2.8-2.8 2.2 2.2 3.2-3.8L17 13v4H7V7zm2.5 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
                图片
              </label>
              <button id="recordButton" class="file-chip record-chip" type="button">
                <svg viewBox="0 0 24 24"><path d="M12 14a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v4a4 4 0 0 0 4 4zm7-4a7 7 0 0 1-14 0H3a9 9 0 0 0 8 8.94V22h2v-3.06A9 9 0 0 0 21 10h-2z"/></svg>
                <span id="recordButtonText">录音</span>
              </button>
              <label class="file-chip">
                <input id="fileInput" type="file" />
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2.8L17.2 8H14V4.8zM8 13h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
                附件
              </label>
              <span id="pendingFile" class="pending-file"></span>
            </div>
            <div class="input-row">
              <textarea id="composerText" rows="3" placeholder="输入人工回复，Enter 发送，Shift+Enter 换行"></textarea>
              <button id="sendButton" class="send-button" aria-label="发送">
                <svg viewBox="0 0 24 24"><path d="M3 11 21 3l-7 18-3-7-8-3zm6.2-.2 3.7 1.4 1.8 4.3 2.8-8.1-8.3 2.4z"/></svg>
              </button>
            </div>
          </footer>
        </main>

        <aside class="detail-pane">
          <div class="detail-tabs" role="tablist" aria-label="会话详情">
            <button class="active" data-detail-tab="tags">当前标签</button>
            <button data-detail-tab="memory">聊天记忆</button>
            <button data-detail-tab="plans">待发送</button>
          </div>
          <section id="tagsTab" class="detail-section active" data-detail-panel="tags">
            <div id="tagPanel" class="tag-panel">未选择用户</div>
          </section>
          <section id="memoryTab" class="detail-section" data-detail-panel="memory">
            <div id="memoryPanel" class="memory-panel">未选择用户</div>
          </section>
          <section id="plansTab" class="detail-section" data-detail-panel="plans">
            <div id="planPanel" class="plan-list muted">暂无</div>
          </section>
        </aside>
      </div>
    `;
  } else if (page.type === "reports") {
    body = `
      <div class="rail-layout one-column">
        <div class="report-card-grid">
          ${page.cards.map(([label, value, delta]) => `<article><span>${label}</span><strong>${value}</strong><em>${delta}</em></article>`).join("")}
        </div>
        <section class="rail-card">
          <header><h3>渠道表现</h3><button data-rail-detail="${nav}|导出|报表">导出</button></header>
          <table class="source-table">
            <thead><tr><th>渠道</th><th>会话量</th><th>留资率</th><th>自动解决率</th></tr></thead>
            <tbody>${page.rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<button data-rail-detail="${nav}|渠道|${cell}">${cell}</button>` : cell}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </section>
      </div>
    `;
  } else if (page.type === "contacts") {
    body = `
      <div class="rail-layout contacts-layout">
        <section class="rail-card">
          <header><h3>联系人列表</h3><button data-rail-detail="${nav}|操作|新建联系人">新建联系人</button></header>
          <div class="rail-search">⌕ 搜索姓名、手机号、课程或标签 <button data-rail-detail="${nav}|筛选|联系人">筛选</button></div>
          <table class="source-table">
            <thead><tr><th>姓名</th><th>阶段</th><th>需求</th><th>标签</th><th>负责人</th></tr></thead>
            <tbody>${page.rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<button data-rail-detail="${nav}|联系人|${cell}">${cell}</button>` : cell}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </section>
        <aside class="customer-side-panel">
          <h3>联系人详情</h3>
          <dl><dt>最近会话</dt><dd>2 分钟前</dd><dt>最近动作</dt><dd>预约试听</dd><dt>下一步</dt><dd>顾问电话确认</dd></dl>
          <button data-rail-detail="${nav}|任务|创建跟进">创建跟进任务</button>
        </aside>
      </div>
    `;
  } else {
    body = `
      <div class="rail-layout one-column">
        <section class="rail-card">
          <header>
            <h3>${page.title}</h3>
            <div>${page.actions.map((action, index) => `<button class="${index === 0 ? "primary-mini" : ""}" data-rail-detail="${nav}|操作|${action}">${action}</button>`).join("")}</div>
          </header>
          <div class="rail-search">⌕ 搜索${page.title}内容 <button data-rail-detail="${nav}|筛选|高级筛选">筛选</button></div>
          <table class="source-table">
            <thead><tr>${page.columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
            <tbody>${page.rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<button data-rail-detail="${nav}|打开|${cell}">${cell}</button>` : cell}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </section>
      </div>
    `;
  }

  $("#pageView").innerHTML = `
    <div class="rail-page-header ${page.type === "inbox" ? "inbox-agent-header" : ""}">
      <div>
        <span class="page-kicker">${page.type === "inbox" ? "云梯智客 / 聚合聊天" : "Intercom / " + page.title}</span>
        <h2>${page.type === "inbox" ? "聚合聊天" : page.title}</h2>
        <p>${page.type === "inbox" ? "在云梯智客工作区内统一查看飞书用户、标签、记忆和待发送内容。" : page.subtitle}</p>
      </div>
      <button class="primary-mini" data-rail-detail="${nav}|设置|${page.title}设置">设置</button>
    </div>
    ${tabBar}
    ${body}
  `;
  if (page.type === "inbox") {
    window.requestAnimationFrame(() => window.initFeishuInbox?.());
  }
  history.replaceState(null, "", `#${nav}`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function renderOperatorPage(mode = "new") {
  const threads = {
    highIntent: {
      title: "高意向会话复盘",
      prompt: "请帮我复盘今天的高意向会话，找出最值得销售优先跟进的客户。",
      summary: "我已分析今日 37 条高意向咨询，按响应时效、课程匹配度、购买力信号和顾问跟进状态筛出了 6 条重点会话。客服经理需要关注漏接和转人工边界，销售经理需要优先处理 A 级试听线索。",
      action: "已生成 3 项策略：高意向试听优先接入、价格异议话术、A 级线索 5 分钟内跟进。",
      recordsTitle: "智客已筛出今天最值得复盘的 6 条会话",
    },
    knowledge: {
      title: "更新自然拼读知识缺口",
      prompt: "找出最近一周智客回答不稳定的自然拼读问题，并整理需要补充的知识库内容。",
      summary: "我发现 18 条对话集中追问“适合年级、试听前准备、老师资质和课后反馈”。当前知识库缺少老师介绍页、试听流程图和三年级基础弱的班型建议。",
      action: "建议新增 4 篇知识：老师资质说明、试听课前准备、零基础入门路径、课后反馈规则。",
      recordsTitle: "最近 7 天最常触发知识缺口的会话",
    },
    escalation: {
      title: "复盘转人工规则异常",
      prompt: "检查哪些会话被过早转人工，哪些高风险会话应该更快转给客服。",
      summary: "我比对了 52 条转人工记录，其中 9 条价格咨询可以先由智客完成报价解释，4 条售后投诉应更快进入人工队列。",
      action: "建议调整 2 条转人工规则：价格咨询先自动解释，投诉/退款立即升级。",
      recordsTitle: "需要调整转人工策略的典型会话",
    },
    followup: {
      title: "更新课后回访监控",
      prompt: "复盘试听后没有及时回访的客户，并生成顾问跟进任务。",
      summary: "我找到 11 条试听后超过 24 小时未回访的会话，其中 5 条仍有续费或报名意向，建议按金额和家长活跃度排序给顾问。",
      action: "已生成 5 条 CRM 跟进任务，并标记 2 条需要客服先安抚的服务风险。",
      recordsTitle: "课后回访需要优先处理的会话",
    },
  };
  const selectedThread = threads[mode];
  const isNewChat = !selectedThread;
  const recordRows = [
    ["李女士", "官网咨询", "孩子二年级，想约自然拼读试听，周四晚上可以吗？", "高意向试听", "智客已收集年级和英语基础，建议 5 分钟内顾问接入", "A 级", "¥8,800"],
    ["张先生", "企微", "课程价格和转介绍优惠能一起用吗？", "价格异议", "需要销售解释套餐权益，智客已生成价格对比话术", "B 级", "¥6,400"],
    ["王同学妈妈", "公众号", "上周试听后还没有收到老师反馈。", "售后风险", "已触发客服跟进任务，建议优先安抚并补发反馈报告", "服务中", "续费风险"],
    ["周先生", "电话转写", "孩子三年级，英语基础弱，担心跟不上。", "课程匹配", "智客建议推荐基础班并展示同年级案例", "A 级", "¥12,800"],
    ["赵女士", "小程序", "可以先发自然拼读课程资料吗？", "资料索取", "智客已发送介绍并预约次日回访", "培育中", "¥4,800"],
    ["林妈妈", "官网咨询", "老师是固定的吗？能不能看看老师介绍？", "老师资质", "知识库缺老师资质页，建议补充并同步给智客", "B 级", "¥7,200"],
  ];

  const renderThreadButton = (id, label, done = false) => `
    <button class="operator-thread ${mode === id ? "active" : ""} ${done ? "done" : ""}" data-operator-thread="${id}">
      <span>${done ? "✓" : "◌"}</span>
      ${label}
    </button>
  `;

  const newChatHtml = `
    <section class="operator-chat operator-new-chat-view">
      <header>
        <h2>新对话</h2>
      </header>
      <div class="operator-empty-chat">
        <div class="operator-spark" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <h3>今天想让智客优化什么？</h3>
        <div class="operator-prompt-box">
          <textarea placeholder="例如：找出今天没有完成试听邀约的高意向会话，并给出跟进策略"></textarea>
          <div>
            <button data-toast="已打开工具菜单">＋</button>
            <button class="send" data-operator-thread="highIntent" aria-label="发送">↑</button>
          </div>
        </div>
        <div class="operator-suggestion-list">
          <button data-operator-thread="highIntent"><strong>复盘高意向会话</strong><span>筛出最值得销售优先跟进的客户</span></button>
          <button data-operator-thread="knowledge"><strong>更新知识库缺口</strong><span>发现智客回答不稳定的问题</span></button>
          <button data-operator-thread="escalation"><strong>检查转人工规则</strong><span>找出漏接、误转和升级过慢的会话</span></button>
          <button data-operator-thread="followup"><strong>生成课后回访任务</strong><span>把试听后未闭环客户同步给顾问</span></button>
        </div>
      </div>
    </section>
  `;

  const detailChatHtml = selectedThread ? `
    <section class="operator-chat">
      <header>
        <h2>${selectedThread.title}</h2>
      </header>
      <div class="operator-insight-board">
        <div class="operator-dialogue">
          <article class="operator-message user">
            <span>你</span>
            <p>${selectedThread.prompt}</p>
          </article>
          <article class="operator-message agent">
            <span>云梯智客</span>
            <p>${selectedThread.summary}</p>
            <p>${selectedThread.action}</p>
          </article>
        </div>
        <section class="operator-kpi-row">
          <article><span>今日高意向</span><strong>37</strong><em>较昨日 +18%</em></article>
          <article><span>需人工接入</span><strong>9</strong><em>平均等待 3分12秒</em></article>
          <article><span>未完成邀约</span><strong>12</strong><em>主要缺手机号/时间</em></article>
          <article><span>预计可转化金额</span><strong>¥68,400</strong><em>来自试听与续费线索</em></article>
        </section>

        <section class="manager-focus-grid">
          <article>
            <h3>客服经理最关心</h3>
            <ul>
              <li><strong>哪些会话没被及时接住</strong><span>3 条超过 5 分钟无人跟进</span></li>
              <li><strong>智客在哪些问题上答不准</strong><span>价格特批、试听改期、课程适龄边界</span></li>
              <li><strong>转人工原因是否合理</strong><span>投诉/退款 100% 转人工，高意向建议更快接入</span></li>
            </ul>
          </article>
          <article>
            <h3>销售经理最关心</h3>
            <ul>
              <li><strong>谁最值得优先打电话</strong><span>李女士、周先生、王同学妈妈进入 A 级线索</span></li>
              <li><strong>卡在哪一步导致没报名</strong><span>试听时间未确认、价格异议、家长想看老师资质</span></li>
              <li><strong>顾问跟进是否闭环</strong><span>4 条会话已生成 CRM 任务，2 条等待顾问确认</span></li>
            </ul>
          </article>
        </section>

        <section class="operator-records">
          <header>
            <div>
              <span>对话记录</span>
              <h3>${selectedThread.recordsTitle}</h3>
            </div>
            <button data-detail="operator|record|导出复盘记录">导出</button>
          </header>
          ${recordRows.map(([name, source, quote, tag, action, level, value]) => `
            <button class="operator-record-card" data-detail="operator|record|${name}">
              <div class="record-avatar">${name.slice(0, 1)}</div>
              <div>
                <strong>${name}<span>${source}</span></strong>
                <p>${quote}</p>
                <em>${action}</em>
              </div>
              <aside>
                <b>${tag}</b>
                <span>${level}</span>
                <small>${value}</small>
              </aside>
            </button>
          `).join("")}
        </section>
      </div>
      <div class="operator-applied-card">
        <strong>3 项策略待应用 <button data-toast="已展开策略列表">⌄</button></strong>
        <p>▤ 工作流：高意向试听优先接入 <span>✓</span></p>
        <p>▴ 技能优化：价格异议与老师资质 <span>✓</span></p>
        <p>◷ 顾问任务：A 级线索 5 分钟内跟进 <span>✓</span></p>
      </div>
      <div class="operator-chat-input">
        <button data-toast="已打开附件与工具">＋</button>
        <input placeholder="继续追问，例如：只看今天未闭环的 A 级线索..." />
        <button data-toast="数据分析已继续分析">↑</button>
      </div>
    </section>
  ` : "";

  const procedurePanel = selectedThread ? `
    <aside class="operator-procedure-panel">
      <header>
        <h2>工作流</h2>
        <div>
          <button data-toast="已放弃本次改动">放弃</button>
          <button class="apply" data-toast="已应用自然拼读试听预约流程">应用 ▾</button>
          <button class="operator-collapse-button" data-operator-collapse aria-label="折叠工作流">×</button>
        </div>
      </header>
      <button class="operator-procedure-collapsed" data-operator-expand aria-label="展开工作流">
        <span>工作流</span>
        <b>展开</b>
      </button>
      <div class="procedure-preview">
        <h3>自然拼读试听预约</h3>
        <dl>
          <dt>适用对象</dt>
          <dd>所有渠道的自然拼读咨询家长</dd>
        </dl>
        <h4>执行说明</h4>
        <ol>
          <li><strong>查询客户资料</strong>：根据手机号读取年级、历史咨询、课程标签和顾问归属。</li>
          <li>
            <strong>如果信息不完整</strong>
            <code>客户.年级 为空 或 手机号 为空</code>
            <p>向家长确认孩子年级、英语基础和联系方式，然后继续。</p>
          </li>
          <li>
            <strong>否则，如果已有试听记录</strong>
            <code>试听.状态 = 已预约</code>
            <p>告知已预约时间，并提供改期入口。</p>
          </li>
          <li><strong>获取可试听时间</strong>：返回未来 7 天可约老师和时段。</li>
          <li><strong>创建顾问任务</strong>：把会话摘要、客户属性和推荐班型同步到 CRM。</li>
        </ol>
        <button data-detail="operator|subprocedure|身份校验">子流程 1：身份校验 ›</button>
      </div>
    </aside>
  ` : "";

  syncRail("agent");
  syncNav("operator");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").innerHTML = `
    <section class="operator-console ${isNewChat ? "new-chat-mode" : "detail-mode"}">
      <aside class="operator-sidebar">
        <header>
          <span class="operator-square"></span>
          <h2>数据分析</h2>
        </header>
        <button data-detail="operator|action|搜索">⌕ 搜索</button>
        <button class="operator-new-chat ${isNewChat ? "active" : ""}" data-operator-new-chat>＋ 新建对话</button>
        <button data-detail="operator|scheduled|计划任务">◔ 计划任务</button>
        <p>今天</p>
        ${renderThreadButton("highIntent", "高意向会话复盘")}
        <p>过去 7 天</p>
        ${renderThreadButton("knowledge", "更新自然拼读知识缺口")}
        ${renderThreadButton("escalation", "复盘转人工规则异常")}
        ${renderThreadButton("followup", "更新课后回访监控", true)}
      </aside>
      ${isNewChat ? newChatHtml : detailChatHtml}
      ${procedurePanel}
    </section>
  `;
  history.replaceState(null, "", "#operator");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderIterationPage(section = "quality") {
  const metrics = [
    ["总会话", "3,562", "+12%", "本周销售咨询量继续上升，官网和企微贡献最高。"],
    ["有效线索", "1,284", "+9%", "留下手机号、年级或试听意向的会话占比提升。"],
    ["试听预约", "126", "-6%", "高意向会话里漏收试听时间，是当前最大损耗点。"],
    ["成交跟进", "42", "+5%", "顾问接管后的二次跟进更稳定，但价格异议仍需优化。"],
  ];
  const themes = [
    ["价格异议", "本周出现 186 次", "建议新增“试听后权益说明”知识片段，并把特殊优惠转人工。"],
    ["试听预约", "高意向但漏收时间 42 次", "建议上线工作流：先收年级、基础和时间，再通知顾问。"],
    ["自然拼读适龄", "未命中问题 31 次", "建议拆分幼小衔接、一二年级、三年级以上三段回答。"],
  ];
  const experiments = [
    ["二选一试听时间策略", "实验中", "留资完成率 +5.8%", "继续扩大到官网与企微渠道"],
    ["价格问题先解释再转人工", "建议上线", "误转人工 -23%", "等待运营审批"],
    ["课程推荐前先确认基础", "已上线", "课程推荐准确率 +11%", "保留并加入测试集"],
  ];
  const reportBlocks = [
    ["机会点", "试听预约链路掉点", "高意向家长已经表达试听意图，但 33% 没有被追问可试听时间。"],
    ["原因", "问题被知识回答截断", "机器人回答完课程介绍后结束，没有继续推进预约字段收集。"],
    ["动作", "生成预约优化策略", "把试听时间、孩子年级、手机号设为高意向链路的下一步必收字段。"],
  ];
  syncRail("agent");
  syncNav("quality");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").innerHTML = `
    <section class="iteration-hero">
      <div>
        <span class="page-kicker">云梯智客 / 数据优化</span>
        <h2>把每次销售对话变成下一轮优化策略。</h2>
        <p>统一查看会话量、线索、试听预约、转人工和成交跟进数据，由 AI 生成优化策略报告，并支持运营随时追问原因、查看证据和生成下一步动作。</p>
      </div>
      <aside class="iteration-summary-card">
        <span>本周核心结论</span>
        <strong>试听预约链路是最大机会点</strong>
        <p>智客发现高意向家长经常已表达试听意图，但没有被及时收集可试听时间。建议把“试听预约工作流”作为下一轮优先策略。</p>
        <button data-toast="已打开试听预约链路分析依据">查看分析依据</button>
      </aside>
    </section>

    <section class="iteration-metrics">
      ${metrics.map(([label, value, delta, note]) => `
        <article>
          <span>${label}</span>
          <strong>${value}</strong>
          <em>${delta}</em>
          <p>${note}</p>
        </article>
      `).join("")}
    </section>

    <section class="iteration-ai-grid">
      <article class="iteration-card iteration-ai-card">
        <header>
          <h3>AI 优化策略报告</h3>
          <button data-toast="已生成本周销售优化策略报告">生成报告</button>
        </header>
        <div class="strategy-report-list">
          ${reportBlocks.map(([label, title, desc]) => `
            <div>
              <span>${label}</span>
              <strong>${title}</strong>
              <p>${desc}</p>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="iteration-card iteration-chat-card">
        <header>
          <h3>AI 日常问答</h3>
          <button data-toast="已将问答结果加入优化报告">加入报告</button>
        </header>
        <div class="analysis-chat">
          <div class="analysis-bubble user">为什么本周试听预约下降？</div>
          <div class="analysis-bubble agent">主要因为高意向家长被课程介绍回答截断，没有继续收集试听时间。建议优先优化“试听预约”工作流。</div>
        </div>
        <div class="iteration-query">
          <input value="生成猿辅导课包本周销售优化策略报告" />
          <button data-toast="AI 正在生成数据优化回答">发送</button>
        </div>
      </article>
    </section>

    <section class="iteration-grid">
      <article class="iteration-card">
        <header>
          <h3>核心问题主题</h3>
          <button data-toast="已生成知识更新草稿">生成知识更新</button>
        </header>
        <div class="theme-list">
          ${themes.map(([title, count, strategy]) => `
            <button data-toast="已打开${title}优化详情">
              <strong>${title}<span>${count}</span></strong>
              <p>${strategy}</p>
            </button>
          `).join("")}
        </div>
      </article>
      <article class="iteration-card">
        <header>
          <h3>待执行优化策略</h3>
          <button data-toast="已提交全部策略审批">审批全部</button>
        </header>
        <table class="iteration-table">
          <thead><tr><th>策略</th><th>状态</th><th>影响</th><th>下一步</th></tr></thead>
          <tbody>
            ${experiments.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<button data-toast="已打开策略：${cell}">${cell}</button>` : cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </article>
    </section>

    <section class="iteration-card iteration-wide">
      <header>
        <h3>智客生成的下一步计划</h3>
        <button data-toast="已创建下周迭代计划">创建迭代计划</button>
      </header>
      <div class="iteration-plan">
        <div><b>1</b><strong>修复漏收试听时间</strong><p>上线试听预约工作流，并把“可试听时间”设为高意向链路必填字段。</p></div>
        <div><b>2</b><strong>补齐价格异议知识</strong><p>起草“试听后权益”和“转介绍优惠”两条内部知识，并设置人工边界。</p></div>
        <div><b>3</b><strong>更新测试集</strong><p>把本周 25 条失败会话加入批量测试，防止同类问题再次出现。</p></div>
      </div>
    </section>
  `;
  history.replaceState(null, "", "#quality");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderDataConnectorsPage() {
  syncRail("agent");
  syncNav("settings");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").innerHTML = `
    <section class="data-connector-config">
      <header class="data-connector-topbar">
        <input value="课程与客户数据连接器" aria-label="连接器名称" />
        <span>草稿</span>
        <button data-toast="已撤销上一步">↶</button>
        <button data-toast="已打开更多操作">•••</button>
        <button data-toast="已保存">保存</button>
        <button class="primary-mini" data-toast="上线前需要完成测试">设为上线</button>
        <button data-toast="已打开智客预览">智客预览</button>
        <button data-section="get-started">×</button>
      </header>

      <nav class="data-connector-tabs" aria-label="数据连接器配置步骤">
        <button class="active" data-connector-detail="tab|接口">1 接口</button>
        <button data-connector-detail="tab|数据">2 数据</button>
        <button data-connector-detail="tab|智客">3 智客</button>
        <button data-connector-detail="tab|安全">4 安全</button>
      </nav>

      <div class="data-connector-form">
        <section class="connector-config-card">
          <h3>描述</h3>
          <p>仅供团队内部参考，用来说明这个数据连接器会读取或更新哪些业务数据。</p>
          <textarea placeholder="输入">查询课程、试听预约、客户标签、顾问归属和最近跟进记录，供云梯智客在会话中判断意向并创建顾问任务。</textarea>
        </section>

        <section class="connector-config-card">
          <header>
            <div><h3>数据输入</h3><p>指定运行连接器前需要收集的数据。输入可以来自对话历史、前置动作，或由智客向客户追问。</p></div>
            <button data-connector-detail="input|新增数据输入">+ 数据输入</button>
          </header>
          <div class="input-chip-row">
            <span>客户手机号</span>
            <span>孩子年级</span>
            <span>意向课程</span>
          </div>
        </section>

        <section class="connector-config-card">
          <h3>数据校验</h3>
          <label class="connector-toggle-row">
            <input type="checkbox" checked />
            <span>校验缺失属性</span>
          </label>
          <p>如果手机号或年级缺失，智客会先追问，再运行连接器。</p>
        </section>

        <section class="connector-config-card">
          <h3>接口端点 <em>必填</em></h3>
          <p>输入访问或更新数据时需要调用的接口地址。</p>
          <div class="endpoint-grid">
            <label>请求方式
              <select>
                <option selected>获取</option>
                <option>提交</option>
                <option>更新</option>
              </select>
            </label>
            <label>安全链接地址
              <input value="https://api.yunti.example.com/v1/student-profile" />
            </label>
            <button data-connector-detail="data|插入数据属性">插入数据属性</button>
          </div>
          <small>示例：https://api.yunti.example.com/v1/student-profile?phone={{客户手机号}}</small>
        </section>

        <section class="connector-config-card">
          <h3>测试 <em>必填</em></h3>
          <p>如果接口还没有准备好，可以使用模拟响应；也可以运行真实请求确认端点、认证和返回格式。</p>
          <div class="radio-card-row">
            <label><input type="radio" name="connector-test" checked /> 模拟响应</label>
            <label><input type="radio" name="connector-test" /> 测试真实连接</label>
          </div>
          <textarea>{
  "name": "李女士",
  "student_grade": "二年级",
  "intent": "自然拼读试听",
  "advisor": "陈顾问",
  "lead_score": "高"
}</textarea>
          <button class="primary-mini" data-toast="测试通过：返回字段可供智客使用">运行测试</button>
        </section>

        <section class="connector-config-card">
          <h3>认证令牌</h3>
          <p>如果接口需要认证，请选择令牌凭证。令牌用于在请求时安全识别连接器。</p>
          <select>
            <option selected>无需认证</option>
            <option>接口密钥</option>
            <option>开放授权</option>
          </select>
        </section>

        <section class="connector-config-card">
          <header>
            <div><h3>请求头</h3><p>添加键值对，为接口请求提供额外信息，例如格式偏好或业务系统要求的元数据。</p></div>
            <button data-connector-detail="header|新增请求头">+ 添加键和值</button>
          </header>
          <div class="header-table">
            <span>键</span><span>值</span>
            <strong>X-Yunti-Verified-Phone</strong><em>已验证手机号</em>
            <strong>X-Yunti-Lead-Source</strong><em>会话来源渠道</em>
          </div>
        </section>
      </div>
    </section>
  `;
  history.replaceState(null, "", "#settings");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderConnectorSetup(stage = "choose") {
  const stages = ["choose", "details", "auth", "capabilities", "security", "publish"];
  const labels = ["选择类型", "配置连接", "认证", "动作与数据", "安全检查", "发布"];
  const activeIndex = Math.max(0, stages.indexOf(stage));
  syncRail("agent");
  syncNav("settings");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");

  const stepper = `<div class="connector-stepper">${labels.map((label, index) => `<span class="${index === activeIndex ? "active" : index < activeIndex ? "done" : ""}"><b>${index + 1}</b>${label}</span>`).join("")}</div>`;
  let body = "";
  if (stage === "choose") {
    body = `
      <section class="connector-builder-card">
        <span class="page-kicker">新建数据连接器</span>
        <h3>选择数据连接器类型</h3>
        <p>先选择连接方式：自定义 MCP、热门业务系统模板，或从空白配置开始。</p>
        <div class="connector-choice-grid">
          ${[
            ["自定义 MCP", "连接自己的 MCP 服务，让智客读取课程、订单、CRM 或工单数据。"],
            ["支付与订单", "导入账单、订阅、支付和退款信息。"],
            ["工单与项目", "导入工单、项目和处理状态。"],
            ["课程商城", "连接课程目录、购物车、优惠和政策数据。"],
          ].map(([title, desc]) => `<a href="#settings/data-connectors/details" data-connector-action="next|details|${title}"><strong>${title}</strong><span>${desc}</span></a>`).join("")}
        </div>
      </section>
    `;
  } else if (stage === "details") {
    body = `
      <section class="connector-builder-grid">
        <div class="connector-builder-card">
          <h3>配置连接器详情</h3>
          <label>名称<input value="${connectorDraft.name}" /></label>
          <label>描述<textarea>让云梯智客查询课程库存、试听预约、客户标签和顾问任务状态。</textarea></label>
          <label>MCP Server URL<input value="https://api.yunti.example.com/mcp" /></label>
          <div class="connector-switch-row"><span>允许智客调用</span><button data-toast="已切换智客调用权限">未启用 ▾</button></div>
          <div class="builder-actions"><a href="#settings/data-connectors/choose">返回</a><a class="primary-mini" href="#settings/data-connectors/auth">继续</a></div>
        </div>
        <aside class="connector-help-card"><h3>配置说明</h3><p>这一页对应 Intercom 新 setup flow 中的基础信息和连接地址。保存后会进入认证配置。</p></aside>
      </section>
    `;
  } else if (stage === "auth") {
    body = `
      <section class="connector-builder-grid">
        <div class="connector-builder-card">
          <h3>身份认证</h3>
          <p>选择连接器访问外部系统所需的认证方式。</p>
          <div class="auth-options">
            <button class="active" data-connector-detail="auth|API key">API key</button>
            <button data-connector-detail="auth|OAuth">OAuth</button>
            <button data-connector-detail="auth|无需认证">无需认证</button>
          </div>
          <label>请求头名称<input value="Authorization" /></label>
          <label>密钥值<input value="••••••••••••••••" /></label>
          <div class="builder-actions"><a href="#settings/data-connectors/details">返回</a><a class="primary-mini" href="#settings/data-connectors/capabilities">继续</a></div>
        </div>
        <aside class="connector-help-card"><h3>安全提示</h3><p>密钥不会展示给前端用户。发布前会进入安全检查，确认没有暴露敏感字段。</p></aside>
      </section>
    `;
  } else if (stage === "capabilities") {
    body = `
      <section class="connector-builder-grid">
        <div class="connector-builder-card">
          <h3>定义可用动作与数据</h3>
          <p>选择智客可调用的查询和动作，类似连接器中的“使用方 / 智客调用”配置。</p>
          <div class="capability-list">
            ${[
              ["查询客户档案", "读取年级、课程阶段、顾问归属和最近会话。"],
              ["查询试听时段", "返回可预约老师、校区和时间段。"],
              ["创建顾问任务", "把高意向线索推送给课程顾问。"],
              ["更新客户标签", "写入高意向、价格异议、待回访等标签。"],
            ].map(([title, desc]) => `<button data-connector-detail="capability|${title}"><strong>${title}</strong><span>${desc}</span><em>已启用</em></button>`).join("")}
          </div>
          <div class="builder-actions"><a href="#settings/data-connectors/auth">返回</a><a class="primary-mini" href="#settings/data-connectors/security">运行检查</a></div>
        </div>
        <aside class="connector-help-card"><h3>智客使用范围</h3><p>建议先只开放查询和创建任务，等测试通过后再开放写入类动作。</p></aside>
      </section>
    `;
  } else if (stage === "security") {
    body = `
      <section class="connector-builder-grid">
        <div class="connector-builder-card">
          <h3>健康与安全检查</h3>
          <div class="check-list">
            ${[
              ["连接健康", "通过", "MCP 服务可访问，响应时间 248ms。"],
              ["安全检查", "无风险", "未发现密钥暴露或高风险字段。"],
              ["数据结构校验", "通过", "4 个动作均返回有效 schema。"],
              ["智客可用性", "需确认", "发布前需选择哪些场景允许智客调用。"],
            ].map(([title, state, desc]) => `<article><strong>${title}<em>${state}</em></strong><p>${desc}</p></article>`).join("")}
          </div>
          <div class="builder-actions"><a href="#settings/data-connectors/capabilities">返回</a><a class="primary-mini" href="#settings/data-connectors/publish">继续发布</a></div>
        </div>
        <aside class="connector-help-card"><h3>报告</h3><p>这里对应 Intercom 页面中的 Health / Security / reporting checks。</p></aside>
      </section>
    `;
  } else {
    body = `
      <section class="connector-builder-grid">
        <div class="connector-builder-card">
          <h3>发布与版本历史</h3>
          <p>每次改动都形成版本记录。真实 Intercom 会显示 version history，并允许回看配置变化。</p>
          <table class="connector-table">
            <thead><tr><th>版本</th><th>变更</th><th>状态</th><th>时间</th></tr></thead>
            <tbody><tr><td>v0.1</td><td>创建 MCP 连接器草稿</td><td>草稿</td><td>刚刚</td></tr><tr><td>v0.0</td><td>未命名连接器</td><td>草稿</td><td>14 小时前</td></tr></tbody>
          </table>
          <div class="builder-actions"><a href="#settings/data-connectors/security">返回</a><button class="primary-mini" data-toast="已模拟发布检查，连接器仍保持草稿状态">发布草稿</button><a href="#settings">完成</a></div>
        </div>
        <aside class="connector-help-card"><h3>上线前确认</h3><p>先用测试客户验证数据返回，再让智客在指定场景中调用连接器。</p></aside>
      </section>
    `;
  }

  $("#pageView").innerHTML = `
    <div class="connector-builder-header">
      <button class="back-button" data-connector-action="finish" aria-label="返回数据连接器"><svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg></button>
      <div><span class="page-kicker">数据连接 / 数据连接器</span><h2>新建数据连接器</h2><p>按新版配置流程还原：选择连接器、配置、认证、定义动作、运行健康与安全检查，再进入发布和版本历史。</p></div>
    </div>
    ${stepper}
    ${body}
  `;
  history.replaceState(null, "", `#settings/data-connectors/${stage}`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderConnectorDetail(tab = "health") {
  syncRail("agent");
  syncNav("settings");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  const tabs = [
    ["health", "健康状态"],
    ["configuration", "配置"],
    ["security", "安全检查"],
    ["version history", "版本历史"],
  ];
  const tabLabel = tabs.find(([key]) => key === tab)?.[1] || "健康状态";
  $("#pageView").innerHTML = `
    <div class="connector-builder-header">
      <button class="back-button" data-section="settings" aria-label="返回数据连接器"><svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg></button>
      <div><span class="page-kicker">数据连接器 / ${tabLabel}</span><h2>课程与 CRM 数据连接器</h2><p>这是现有草稿连接器详情页，包含健康、配置、安全和版本历史。</p></div>
    </div>
    <div class="connector-detail-tabs">${tabs.map(([key, label]) => `<button class="${key === tab ? "active" : ""}" data-connector-action="detail|${key}">${label}</button>`).join("")}</div>
    <section class="connector-builder-grid">
      <div class="connector-builder-card">
        <h3>${tabLabel}</h3>
        <div class="check-list">
          <article><strong>状态<em>草稿</em></strong><p>连接器仍处于草稿状态，尚未启用给智客调用。</p></article>
          <article><strong>安全检查<em>无风险</em></strong><p>当前配置未发现高风险权限或密钥暴露。</p></article>
          <article><strong>智客调用<em>未启用</em></strong><p>需要在测试通过后手动启用给指定 Agent 使用。</p></article>
        </div>
      </div>
      <aside class="connector-help-card"><h3>连接器信息</h3><p>名称：课程与 CRM 数据连接器<br>状态：草稿<br>最近更新：14 小时前</p><button data-connector-action="start|details">继续配置</button></aside>
    </section>
  `;
  history.replaceState(null, "", `#settings/data-connectors/detail/${tab.replaceAll(" ", "-")}`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderWorkflowsPage(view = "overview") {
  syncRail("agent");
  syncNav("workflows");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");

  const templates = [
    ["triage", "先分诊再交给智客回答", "优先识别咨询类型，收集更多上下文，再让智客处理。", "常用", "6k 团队使用"],
    ["messenger", "网页咨询启用智客", "访客打开咨询后，由智客基于知识库优先接待。", "智客", "6k 团队使用"],
    ["reply-time", "展示预计回复时间", "顾问忙碌时先告知等待时间，降低家长焦虑。", "服务", "10k 团队使用"],
    ["route", "按意向分配给顾问", "根据年级、城市、意向度和课程类型分配负责人。", "分流", "9k 团队使用"],
    ["rating", "会话结束后收集评价", "把满意度、未解决原因和复购风险沉淀到报表。", "质检", "8k 团队使用"],
  ];

  const workflowRows = [
    ["访客打开新会话", "网页咨询启用智客", "草稿", "21 小时前", "用户与线索", "从未上线"],
    ["用户发送第一条消息", "展示预计回复时间", "草稿", "3 天前", "用户与线索", "从未上线"],
    ["识别高意向试听", "按意向分配给顾问", "运行中", "今天 10:42", "家长线索", "今天"],
  ];

  const templatePicker = view === "templates" ? `
    <div class="workflow-template-overlay" data-workflow-action="overview" aria-label="关闭模板选择"></div>
    <section class="workflow-template-modal" role="dialog" aria-label="创建新的工作流">
      <header>
        <h3>创建新的工作流</h3>
        <div>
          <button class="dark-button" data-workflow-action="editor|blank">＋ 从空白开始</button>
          <button data-workflow-action="overview" aria-label="关闭">×</button>
        </div>
      </header>
      <div class="workflow-template-layout">
        <nav>
          <button class="active">热门</button>
          <button>智客 Agent</button>
          <button>提高团队效率</button>
          <button>优化客户体验</button>
          <button>主动触达</button>
          <button>连接应用</button>
        </nav>
        <div class="workflow-template-grid">
          ${templates.map(([id, title, desc, tag, usage]) => `
            <button class="workflow-template-card" data-workflow-action="editor|${id}">
              <span>${tag}</span>
              <strong>${title}</strong>
              <p>${desc}</p>
              <em>▣ ${usage}</em>
            </button>
          `).join("")}
        </div>
      </div>
    </section>
  ` : "";

  if (view === "editor") {
    $("#pageView").innerHTML = `
      <section class="workflow-builder">
        <header class="workflow-builder-header">
          <button class="back-button" data-workflow-action="overview" aria-label="返回工作流列表">
            <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
          </button>
          <input value="先分诊客户会话，再交给智客回答" aria-label="工作流名称" />
          <span class="draft-pill">草稿</span>
          <button data-toast="已打开更多操作">•••</button>
          <button data-toast="已打开预览">预览</button>
          <button data-toast="草稿已保存">保存</button>
          <button data-toast="上线前请先完成缺失配置">上线</button>
        </header>
        <main class="workflow-canvas">
          <div class="workflow-start-node">
            <span>触发</span>
            <strong>家长在咨询窗口打开新会话</strong>
            <dl>
              <dt>渠道</dt><dd>网页、公众号、企微</dd>
              <dt>受众</dt><dd>用户与线索</dd>
            </dl>
          </div>

          <section class="workflow-path path-a">
            <b>A.</b>
            <input value="欢迎分诊" aria-label="路径名称" />
            <article class="workflow-step message">
              <strong>发送欢迎语</strong>
              <p>您好，欢迎咨询云梯课程。请问今天主要想了解什么？</p>
              <div class="reply-buttons">
                <span>我想预约试听</span>
                <span>我想了解价格</span>
                <span>我需要售后帮助</span>
              </div>
              <button data-toast="已添加步骤">＋ 添加步骤</button>
            </article>
          </section>

          <section class="workflow-path path-b">
            <b>B.</b>
            <input value="课程咨询路径" aria-label="路径名称" />
            <article class="workflow-step note">
              <strong>提示</strong>
              <p>先鼓励家长补充孩子年级、英语基础和可试听时间，再让智客基于内容回答。</p>
            </article>
            <article class="workflow-step fin">
              <strong>让智客处理服务咨询</strong>
              <ul>
                <li>使用课程知识库</li>
                <li>遵循技能中心规则</li>
                <li>检测客户属性</li>
                <li>必要时转人工</li>
              </ul>
            </article>
          </section>

          <section class="workflow-path path-c">
            <b>C.</b>
            <input value="售后问题路径" aria-label="路径名称" />
            <article class="workflow-step">
              <strong>创建工单</strong>
              <p>收集手机号、课程名称和问题类型，创建售后工单。</p>
              <button data-toast="请选择工单类型">选择工单类型</button>
            </article>
            <em>结束</em>
          </section>

          <section class="workflow-path path-d">
            <b>D.</b>
            <input value="高意向转人工路径" aria-label="路径名称" />
            <article class="workflow-step warn">
              <strong>分配缺失</strong>
              <p>负责人为空，请选择顾问或销售组。</p>
            </article>
            <article class="workflow-step">
              <strong>展示预计回复时间</strong>
              <p>顾问会尽快联系您。回复会同步到当前会话和绑定手机号。</p>
            </article>
            <em>结束</em>
          </section>
        </main>
        <footer class="workflow-canvas-toolbar">
          <button data-toast="已打开路径列表">△ 路径列表</button>
          <button>－</button>
          <strong>51%</strong>
          <button>＋</button>
          <button data-toast="已切换拖动画布">手型</button>
          <button data-toast="已打开更多画布工具">•••</button>
        </footer>
      </section>
    `;
    history.replaceState(null, "", "#workflows");
    $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  $("#pageView").innerHTML = `
    <section class="workflow-overview">
      <div class="workflow-hero">
        <div>
          <button class="back-button" data-section="get-started" aria-label="返回快速开始">
            <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
          </button>
          <span class="page-kicker">自动化</span>
          <h2>工作流</h2>
          <p>用拖拽式流程把分诊、标签、通知、智客回答和转人工串起来，让每条客户会话都有明确下一步。</p>
        </div>
        <div class="workflow-hero-actions">
          <button data-workflow-action="templates">查看模板</button>
          <button class="primary-mini" data-workflow-action="templates">＋ 新建工作流</button>
        </div>
      </div>

      <section class="workflow-template-strip">
        <header>
          <div>
            <h3>从模板开始</h3>
            <p>选择一个常见场景，快速生成可编辑的流程画布。</p>
          </div>
          <button data-workflow-action="templates">全部模板</button>
        </header>
        <div>
          ${templates.slice(0, 4).map(([id, title, desc, tag]) => `
            <button class="workflow-template-card compact" data-workflow-action="editor|${id}">
              <span>${tag}</span>
              <strong>${title}</strong>
              <p>${desc}</p>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="workflow-list-card">
        <header>
          <div>
            <h3>样例工作流</h3>
            <p>当用户匹配多个面向客户的工作流时，最上方命中的工作流会先运行。</p>
          </div>
          <button data-toast="已打开排障视图">排障</button>
        </header>
        <div class="workflow-filters">
          <input placeholder="搜索工作流..." />
          <button>受众：全部</button>
          <button>状态：任意</button>
          <button>渠道：任意</button>
          <button>类型：任意</button>
        </div>
        <table class="workflow-table">
          <thead>
            <tr><th></th><th>标题</th><th>状态</th><th>最近更新</th><th>适用人群</th><th>首次上线</th></tr>
          </thead>
          <tbody>
            ${workflowRows.map((row, index) => `
              <tr>
                <td><input type="checkbox" /></td>
                <td><button data-workflow-action="editor|row-${index}">${row[1]}</button><small>${row[0]}</small></td>
                <td><span class="status-tag ${row[2] === "运行中" ? "live" : ""}">${row[2]}</span></td>
                <td>${row[3]}</td>
                <td>${row[4]}</td>
                <td>${row[5]}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ${templatePicker}
    </section>
  `;
  history.replaceState(null, "", "#workflows");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderBusinessNodeCatalog() {
  return businessNodeCatalog.map((section) => `
    <section class="business-node-group">
      <h4>${escapeHTML(section.group)}</h4>
      ${section.nodes.map(([id, label, desc, native]) => `
        <button class="business-node-card" data-business-node="${escapeHTML(id)}" data-business-label="${escapeHTML(label)}">
          <span>${escapeHTML(native)}</span>
          <strong>${escapeHTML(label)}</strong>
          <em>${escapeHTML(desc)}</em>
        </button>
      `).join("")}
    </section>
  `).join("");
}

function renderBusinessPalette() {
  const quickNodes = businessNodeCatalog.flatMap((section) => section.nodes.map((node) => ({ group: section.group, node })));
  return `
    <aside class="business-palette-overlay" aria-label="AI 销售业务节点快捷库">
      <header>
        <div>
          <span>业务节点</span>
          <strong>已同步到 n8n 原生下拉框，可在 What happens next? 搜索“云梯”</strong>
        </div>
        <button data-ai-sop-template="新建 SOP：当家长咨询自然拼读试听时，先识别意图和孩子基础，生成回复，5 分钟未回复跟进，价格特批或投诉转人工。">新 SOP</button>
      </header>
      <div class="business-palette-list">
        ${quickNodes.map(({ group, node }) => {
          const [id, label, desc, native] = node;
          return `
            <button class="business-node-chip" draggable="true" data-business-node="${escapeHTML(id)}" data-business-label="${escapeHTML(label)}" data-business-native="${escapeHTML(native)}" data-business-desc="${escapeHTML(desc)}">
              <span>${escapeHTML(group)}</span>
              <strong>${escapeHTML(label)}</strong>
              <em>${escapeHTML(native)}</em>
              <small>${escapeHTML(desc)}</small>
            </button>
          `;
        }).join("")}
      </div>
      <footer>
        <button data-ai-sop-template="修改当前 n8n 工作流：优先用业务节点表达；如果业务节点不够，直接调用 n8n 原生节点并说明中文用途。">自然语言改画布</button>
      </footer>
    </aside>
  `;
}

function renderModuleRegistryCenter() {
  return `
    <details class="module-registry-center" aria-label="模块注册中心">
      <summary>
        <div>
          <span>模块注册中心</span>
          <strong>数据库、沟通技能库、Agent 设定、用户标签状态</strong>
        </div>
        <em>展开</em>
      </summary>
      <button class="module-registry-map-button" data-ai-sop-template="检查模块注册中心：把数据库、RAG、沟通技能库、Agent基础设定、用户标签状态映射到当前 n8n 工作流节点输入输出。">映射检查</button>
      <div class="module-registry-grid">
        ${moduleRegistry.map((section) => `
          <section class="module-registry-group">
            <h4>${escapeHTML(section.group)}</h4>
            ${section.modules.map(([id, name, desc, io]) => `
              <article class="module-registry-card" data-module-registry="${escapeHTML(id)}">
                <strong>${escapeHTML(name)}</strong>
                <p>${escapeHTML(desc)}</p>
                <em>${escapeHTML(io)}</em>
              </article>
            `).join("")}
          </section>
        `).join("")}
      </div>
    </details>
  `;
}

function renderBusinessDropZone() {
  return `
    <section class="business-drop-zone" data-business-dropzone aria-label="AI 销售业务节点编排区">
      <header>
        <div>
          <span>AI 销售业务模块节点包</span>
          <strong>拖业务节点到这里，再由 AI 编译为 n8n 节点</strong>
        </div>
        <button data-ai-sop-template="把已拖入的 AI 销售业务模块编译成 n8n 原生节点组合：优先使用云梯智客 AI销售模块执行器，必要时补充 Webhook、IF、Wait、HTTP Request、Code。">编译到 n8n</button>
      </header>
      <div class="business-drop-list" id="businessDropList">
        <article class="business-drop-empty">从下方业务节点库拖入：RAG、Playbook、客户状态、转人工、跟进任务等模块。</article>
      </div>
    </section>
  `;
}

function renderBusinessWorkbench() {
  return `
    <section class="n8n-business-workbench" aria-label="AI 销售业务配置区">
      <div class="n8n-business-left">
        ${renderBusinessDropZone()}
        ${renderBusinessPalette()}
      </div>
      ${renderModuleRegistryCenter()}
    </section>
  `;
}

function findBusinessNode(id) {
  for (const section of businessNodeCatalog) {
    const node = section.nodes.find((item) => item[0] === id);
    if (node) return { group: section.group, node };
  }
  return null;
}

function renderDroppedBusinessNodes() {
  const list = $("#businessDropList");
  if (!list) return;
  list.innerHTML = droppedBusinessNodes.length
    ? droppedBusinessNodes.map((item, index) => `
      <article class="business-dropped-node">
        <span>${index + 1}</span>
        <div>
          <strong>${escapeHTML(item.label)}</strong>
          <p>${escapeHTML(item.native)} · ${escapeHTML(item.desc)}</p>
        </div>
        <button data-remove-dropped-node="${index}" aria-label="移除 ${escapeHTML(item.label)}">×</button>
      </article>
    `).join("")
    : `<article class="business-drop-empty">从下方业务节点库拖入：RAG、Playbook、客户状态、转人工、跟进任务等模块。</article>`;
}

function buildDroppedNodePrompt() {
  const names = droppedBusinessNodes.map((item, index) => `${index + 1}. ${item.label}（${item.native}）`).join("\n");
  return `请把当前 AI 销售业务模块编排编译到 n8n：\n${names}\n\n要求：优先使用「云梯智客 AI销售模块执行器」承接 RAG、Playbook、沟通技能库、Agent基础设定和用户标签状态；需要原生能力时补充 Webhook、IF、Wait、HTTP Request、Code，并用中文说明每个原生节点用途。`;
}

function addDroppedBusinessNode(id) {
  const found = findBusinessNode(id);
  if (!found) return;
  const [nodeId, label, desc, native] = found.node;
  droppedBusinessNodes.push({ id: nodeId, label, desc, native, group: found.group });
  renderDroppedBusinessNodes();
  setAiPrompt(buildDroppedNodePrompt());
  showToast(`已加入业务编排：${label}`);
}

function setAiPrompt(text) {
  const input = $("#aiMcpInput");
  if (!input) return;
  input.value = text;
  input.focus();
}

function syncAgentConfigRoute(route = "workflow-build") {
  const inAgentConfig = agentConfigSubmodules.some((item) => item.id === route);
  $$(".nav-item, .nav-group").forEach((item) => item.classList.remove("active"));
  if (inAgentConfig) document.querySelector('[data-section="n8n"]')?.classList.add("active");
  $$(".agent-config-sidebar-subnav [data-agent-config-route]").forEach((button) => {
    button.classList.toggle("active", button.dataset.agentConfigRoute === route);
  });
}

function formatSkillTime(timestamp) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function getFilteredSalesSkills() {
  const keyword = salesSkillSearchTerm.trim().toLowerCase();
  return [...salesSkillStore]
    .sort((a, b) => b.createdAt - a.createdAt)
    .filter((skill) => {
      if (!keyword) return true;
      return [skill.name, skill.condition, skill.description]
        .some((value) => value.toLowerCase().includes(keyword));
    });
}

function renderSalesSkillRows(skills) {
  if (!skills.length) {
    return `<tr><td colspan="5" class="sales-skill-empty">没有匹配的销售技能</td></tr>`;
  }
  return skills.map((skill) => `
    <tr class="${selectedSalesSkillIds.includes(skill.id) ? "selected" : ""} ${skill.paused ? "paused" : ""}" data-sales-skill-row="${escapeHTML(skill.id)}">
      <td><input type="checkbox" data-sales-skill-checkbox="${escapeHTML(skill.id)}" ${selectedSalesSkillIds.includes(skill.id) ? "checked" : ""} aria-label="选择 ${escapeHTML(skill.name)}" /></td>
      <td><strong class="sales-skill-cell-clamp" title="${escapeHTML(skill.name)}">${escapeHTML(skill.name)}</strong>${skill.paused ? `<span class="sales-skill-state">已暂停</span>` : ""}</td>
      <td><span class="sales-skill-cell-clamp" title="${escapeHTML(skill.condition)}">${escapeHTML(skill.condition)}</span></td>
      <td><span class="sales-skill-cell-clamp" title="${escapeHTML(skill.description)}">${escapeHTML(skill.description)}</span></td>
      <td>${escapeHTML(formatSkillTime(skill.createdAt))}</td>
    </tr>
  `).join("");
}

function getSelectedSalesSkills() {
  return selectedSalesSkillIds
    .map((skillId) => salesSkillStore.find((skill) => skill.id === skillId))
    .filter(Boolean);
}

function renderSalesSkillBulkActions(selectedSkills) {
  if (!selectedSkills.length) return `<span>共 ${salesSkillStore.length} 项</span>`;
  const hasActive = selectedSkills.some((skill) => !skill.paused);
  const hasPaused = selectedSkills.some((skill) => skill.paused);
  return `
    <span>已选 ${selectedSkills.length} 项</span>
    ${hasActive ? `<button data-sales-skill-bulk-action="pause">暂停</button>` : ""}
    ${hasPaused ? `<button data-sales-skill-bulk-action="activate">激活</button>` : ""}
    <button data-sales-skill-bulk-action="delete">删除</button>
  `;
}

function renderSalesSkillsPage() {
  const item = agentConfigSubmodules.find((module) => module.id === "sales-skills");
  const filteredSkills = getFilteredSalesSkills();
  const selectedSkills = getSelectedSalesSkills();
  syncRail("agent");
  syncAgentConfigRoute("sales-skills");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").classList.remove("ai-panel-collapsed");
  $("#pageView").innerHTML = `
    <div class="page-hero agent-config-page-hero sales-skills-hero">
      <button class="back-button" data-agent-config-route="workflow-build" aria-label="返回工作流搭建">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">智能体配置 / 销售技能</span>
        <h2>销售技能</h2>
      </div>
    </div>
    <section class="sales-skills-workbench">
      <section class="sales-basic-panel ${salesBasicPaused ? "paused" : ""}">
        <header>
          <div>
            <h3>全局设定</h3>
          </div>
        </header>
        <button class="sales-basic-content" data-sales-basic-open title="${escapeHTML(salesSkillBasicSetting)}">
          ${salesSkillBasicSetting ? escapeHTML(salesSkillBasicSetting) : "暂无基本设定，点击编辑后补充。"}
        </button>
      </section>
      <div class="sales-skill-toolbar">
        <label class="sales-skill-search">
          <svg viewBox="0 0 24 24"><path d="M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.41 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" /></svg>
          <input data-sales-skill-search type="search" value="${escapeHTML(salesSkillSearchTerm)}" placeholder="搜索名称、适用条件、技能描述" />
        </label>
        <button class="primary-mini" data-sales-skill-create>创建新技能</button>
      </div>
      <div class="sales-skill-layout">
        <section class="content-panel sales-skill-list-panel">
          <header>
            <h3>技能列表</h3>
            <div class="sales-skill-list-actions">
              ${renderSalesSkillBulkActions(selectedSkills)}
            </div>
          </header>
          <table class="sales-skill-table">
            <thead>
              <tr>
                <th><input type="checkbox" data-sales-skill-select-all ${filteredSkills.length && filteredSkills.every((skill) => selectedSalesSkillIds.includes(skill.id)) ? "checked" : ""} aria-label="全选技能" /></th>
                <th>名称</th><th>适用条件</th><th>技能描述</th><th>创建时间</th>
              </tr>
            </thead>
            <tbody>${renderSalesSkillRows(filteredSkills)}</tbody>
          </table>
        </section>
      </div>
    </section>
  `;
  bindSalesSkillsInteractions();
  history.replaceState(null, "", "#agent-config/sales-skills");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function bindSalesSkillsInteractions() {
  $$(".sales-basic-content").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSalesBasicModal();
    };
  });
  $("[data-sales-skill-create]")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openSalesSkillModal();
  });
  $("[data-sales-skill-search]")?.addEventListener("input", (event) => {
    salesSkillSearchTerm = event.target.value;
    renderSalesSkillsPage();
    $("[data-sales-skill-search]")?.focus();
  });
  $$("[data-sales-skill-checkbox]").forEach((checkbox) => {
    checkbox.onchange = (event) => {
      event.stopPropagation();
      toggleSalesSkillSelection(checkbox.dataset.salesSkillCheckbox, checkbox.checked);
    };
    checkbox.onclick = (event) => event.stopPropagation();
  });
  $("[data-sales-skill-select-all]")?.addEventListener("change", (event) => {
    event.stopPropagation();
    toggleAllSalesSkillSelection(event.target.checked);
  });
  $$("[data-sales-skill-bulk-action]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      runSalesSkillBulkAction(button.dataset.salesSkillBulkAction);
    };
  });
  $$("[data-sales-skill-row]").forEach((row) => {
    row.onclick = () => selectSalesSkill(row.dataset.salesSkillRow);
  });
}

function selectSalesSkill(skillId) {
  if (!salesSkillStore.some((skill) => skill.id === skillId)) return;
  selectedSalesSkillId = skillId;
  openSalesSkillModal(skillId);
}

function openSalesSkillModal(skillId = "") {
  const skill = salesSkillStore.find((item) => item.id === skillId);
  $("#modalContent").innerHTML = `
    <div class="modal-body">
      <h3>${skill ? "编辑技能" : "创建新技能"}</h3>
      <p>${skill ? "修改后立即生效。" : "按从上到下的顺序填写，保存后会自动排在技能列表最上方。"}</p>
      <form class="sales-skill-modal-form" data-sales-skill-modal-form>
        <input type="hidden" name="skillId" value="${escapeHTML(skill?.id || "")}" />
        <label>名称<input name="name" required placeholder="例如：续费催单" value="${escapeHTML(skill?.name || "")}" /></label>
        <label>适用条件<textarea name="condition" required rows="4" placeholder="描述什么时候启用这个技能">${escapeHTML(skill?.condition || "")}</textarea></label>
        <label>技能描述<textarea class="sales-skill-description-editor" name="description" required rows="12" placeholder="使用 Markdown 编写，例如：&#10;## 处理目标&#10;...&#10;&#10;## 执行步骤&#10;1. ...&#10;&#10;## 边界&#10;- ...">${escapeHTML(skill?.description || "")}</textarea></label>
        <footer>
          <button class="primary-mini" type="submit">保存</button>
        </footer>
      </form>
    </div>
  `;
  $("#modal").showModal();
}

function openSalesBasicModal() {
  $("#modalContent").innerHTML = `
    <div class="modal-body">
      <h3>编辑基本设定</h3>
      <p>保存后立即应用到销售技能的全局规则。</p>
      <form class="sales-skill-modal-form" data-sales-basic-modal-form>
        <label>基本设定<textarea name="basicSetting" required rows="7" placeholder="输入销售技能的全局原则、边界和默认语气">${escapeHTML(salesSkillBasicSetting)}</textarea></label>
        <footer>
          <button class="primary-mini" type="submit">保存</button>
        </footer>
      </form>
    </div>
  `;
  $("#modal").showModal();
}

function saveSalesSkillFromModal(form) {
  const data = new FormData(form);
  const skillId = String(data.get("skillId") || "");
  const name = String(data.get("name") || "").trim();
  const condition = String(data.get("condition") || "").trim();
  const description = String(data.get("description") || "").trim();
  if (!name || !condition || !description) {
    showToast("请填写完整技能信息");
    return;
  }
  const existing = salesSkillStore.find((skill) => skill.id === skillId);
  if (existing) {
    Object.assign(existing, { name, condition, description });
    selectedSalesSkillId = existing.id;
    $("#modal").close();
    renderSalesSkillsPage();
    showToast("技能已保存");
    return;
  }
  const id = `skill-${Date.now()}`;
  salesSkillStore.push({ id, name, condition, description, createdAt: Date.now() });
  selectedSalesSkillId = id;
  salesSkillSearchTerm = "";
  $("#modal").close();
  renderSalesSkillsPage();
  showToast("新技能已创建");
}

function saveSalesBasicFromModal(form) {
  const data = new FormData(form);
  salesSkillBasicSetting = String(data.get("basicSetting") || "").trim();
  $("#modal").close();
  renderSalesSkillsPage();
  showToast("基本设定已更新");
}

function toggleSalesSkillPaused(skillId) {
  const skill = salesSkillStore.find((item) => item.id === skillId);
  if (!skill) return;
  skill.paused = !skill.paused;
  renderSalesSkillsPage();
  showToast(skill.paused ? "技能已暂停" : "技能已启用");
}

function deleteSalesSkill(skillId) {
  const index = salesSkillStore.findIndex((skill) => skill.id === skillId);
  if (index < 0) return;
  salesSkillStore.splice(index, 1);
  selectedSalesSkillId = salesSkillStore.sort((a, b) => b.createdAt - a.createdAt)[0]?.id || "";
  selectedSalesSkillIds = selectedSalesSkillIds.filter((id) => id !== skillId);
  renderSalesSkillsPage();
  showToast("技能已删除");
}

function toggleSalesSkillSelection(skillId, checked) {
  if (checked) {
    if (!selectedSalesSkillIds.includes(skillId)) selectedSalesSkillIds.push(skillId);
  } else {
    selectedSalesSkillIds = selectedSalesSkillIds.filter((id) => id !== skillId);
  }
  renderSalesSkillsPage();
}

function toggleAllSalesSkillSelection(checked) {
  selectedSalesSkillIds = checked ? getFilteredSalesSkills().map((skill) => skill.id) : [];
  renderSalesSkillsPage();
}

function runSalesSkillBulkAction(action) {
  if (!selectedSalesSkillIds.length) return;
  const selectedSkills = getSelectedSalesSkills();
  if (action === "delete") {
    selectedSalesSkillIds.forEach((skillId) => {
      const index = salesSkillStore.findIndex((skill) => skill.id === skillId);
      if (index >= 0) salesSkillStore.splice(index, 1);
    });
    selectedSalesSkillIds = [];
    selectedSalesSkillId = salesSkillStore.sort((a, b) => b.createdAt - a.createdAt)[0]?.id || "";
    renderSalesSkillsPage();
    showToast("已删除选中技能");
    return;
  }
  if (action === "pause") {
    selectedSkills.forEach((skill) => {
      if (!skill.paused) skill.paused = true;
    });
    renderSalesSkillsPage();
    showToast("已暂停选中技能");
    return;
  }
  if (action === "activate") {
    selectedSkills.forEach((skill) => {
      if (skill.paused) skill.paused = false;
    });
    renderSalesSkillsPage();
    showToast("已激活选中技能");
  }
}

function renderKnowledgeResourceRows() {
  if (!knowledgeResourceStore.length) {
    return `<tr><td colspan="3" class="knowledge-resource-empty">暂无资源，点击右上角新建资源</td></tr>`;
  }
  return [...knowledgeResourceStore]
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((resource) => `
      <tr class="${resource.enabled ? "" : "paused"}" data-knowledge-resource-row="${escapeHTML(resource.id)}">
        <td>
          <button class="knowledge-resource-name" data-knowledge-resource-open="${escapeHTML(resource.id)}" aria-label="编辑 ${escapeHTML(resource.name)}">
            <span class="knowledge-resource-icon ${escapeHTML(resource.type)}">${getKnowledgeResourceIcon(resource.type)}</span>
            <div>
              <strong title="${escapeHTML(resource.name)}">${escapeHTML(resource.name)}</strong>
              <span>${escapeHTML(resource.type)}${resource.enabled ? " · 已启用" : " · 不使用"}</span>
            </div>
          </button>
        </td>
        <td>${escapeHTML(formatSkillTime(resource.createdAt))}</td>
        <td>
          <div class="knowledge-resource-actions">
            <button data-knowledge-resource-toggle="${escapeHTML(resource.id)}">${resource.enabled ? "不使用" : "启用"}</button>
            <button class="danger-link" data-knowledge-resource-delete="${escapeHTML(resource.id)}">删除</button>
          </div>
        </td>
      </tr>
    `).join("");
}

function getKnowledgeResourceIcon(type) {
  const icons = {
    "文本": `<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7V3Zm7 1.5V8h3.5M9 12h6M9 15h6M9 18h4" /></svg>`,
    "表格": `<svg viewBox="0 0 24 24"><path d="M5 5h14v14H5V5Zm0 5h14M5 14h14M10 5v14M15 5v14" /></svg>`,
    "图片": `<svg viewBox="0 0 24 24"><path d="M5 5h14v14H5V5Zm3 10 3-3 2 2 2-3 4 4M8.5 8.5h.01" /></svg>`,
  };
  return icons[type] || icons["文本"];
}

function renderKnowledgeBasePage() {
  syncRail("agent");
  syncAgentConfigRoute("knowledge-base");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").classList.remove("ai-panel-collapsed");
  $("#pageView").innerHTML = `
    <div class="page-hero agent-config-page-hero knowledge-base-hero">
      <button class="back-button" data-agent-config-route="workflow-build" aria-label="返回工作流搭建">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">智能体配置 / 资料中心</span>
        <h2>资料中心</h2>
      </div>
      <div class="page-actions">
        <button class="primary" data-knowledge-resource-create>新建资源</button>
      </div>
    </div>
    <section class="content-panel knowledge-resource-panel">
      <table class="knowledge-resource-table">
        <thead>
          <tr><th>资源列表</th><th>添加时间</th><th><span>操作</span></th></tr>
        </thead>
        <tbody>${renderKnowledgeResourceRows()}</tbody>
      </table>
    </section>
  `;
  history.replaceState(null, "", "#agent-config/knowledge-base");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function getActiveKnowledgeResource() {
  return knowledgeResourceStore.find((resource) => resource.id === activeKnowledgeResourceId) || null;
}

function renderKnowledgeResourceBuilder() {
  const activeResource = getActiveKnowledgeResource();
  syncRail("agent");
  syncAgentConfigRoute("knowledge-base");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").classList.remove("ai-panel-collapsed");
  $("#pageView").innerHTML = `
    <div class="page-hero agent-config-page-hero knowledge-builder-hero">
      <button class="back-button" data-agent-config-route="knowledge-base" aria-label="返回资料中心">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">资料中心 / ${activeResource ? "编辑资源" : "新建资源"}</span>
        <h2>${escapeHTML(activeResource?.name || "新建课程资料")}</h2>
      </div>
      <div class="page-actions">
        <button data-knowledge-builder-step="prev">上一步</button>
        ${activeResource
          ? `<button class="danger-top" data-knowledge-resource-delete-document="${escapeHTML(activeResource.id)}">删除文档</button>`
          : `<button class="primary" data-knowledge-builder-step="next">${knowledgeResourceStep === 3 ? "保存资源" : "下一步"}</button>`}
      </div>
    </div>
    <section class="knowledge-builder-shell">
      <nav class="knowledge-builder-steps" aria-label="资料处理步骤">
        ${["上传文件", "数据处理", "切片编辑"].map((label, index) => {
          const step = index + 1;
          return `<button class="${step === knowledgeResourceStep ? "active" : ""}" data-knowledge-step="${step}"><span>${step}</span>${label}</button>`;
        }).join("")}
      </nav>
      ${renderKnowledgeBuilderStep()}
    </section>
  `;
  history.replaceState(null, "", "#agent-config/knowledge-base/new");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function renderKnowledgeBuilderStep() {
  if (knowledgeResourceStep === 1) {
    return `
      <section class="knowledge-upload-zone">
        <svg viewBox="0 0 24 24"><path d="M12 16V4m0 0-4 4m4-4 4 4M5 20h14" /></svg>
        <strong>点击上传或拖拽文档到这里</strong>
        <span>支持 PDF、TXT、DOC、DOCX、MD、图片；单个文件不超过 100MB</span>
      </section>
    `;
  }
  if (knowledgeResourceStep === 2) {
    return `
      <section class="content-panel knowledge-processing-panel">
        <header><h3>数据处理</h3><span>清洗后进入切片编辑</span></header>
        <div class="knowledge-process-list">
          ${[["格式解析", "已完成"], ["OCR 与图片描述", "已完成"], ["去重与结构清洗", "处理中"], ["自动分段", "待人工复核"]].map(([label, state], index) => `
            <article class="${index < 2 ? "done" : index === 2 ? "running" : ""}">
              <span>${index + 1}</span>
              <strong>${label}</strong>
              <em>${state}</em>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }
  return `
    <section class="knowledge-chunk-editor">
      <header>
        <div>
          <h3>切片编辑</h3>
          <span>可编辑文本和图，在任意位置插入或删除切片</span>
        </div>
      </header>
      <div class="knowledge-chunk-list">
        ${renderKnowledgeChunkCards()}
      </div>
    </section>
  `;
}

function renderKnowledgeChunkCards() {
  const cards = [];
  for (let index = 0; index <= knowledgeChunkDrafts.length; index += 1) {
    if (pendingKnowledgeChunk?.index === index) cards.push(renderPendingKnowledgeChunk());
    const chunk = knowledgeChunkDrafts[index];
    if (!chunk) continue;
    const isEditing = editingKnowledgeChunkId === chunk.id;
    cards.push(`
          <article class="knowledge-chunk-card ${isEditing ? "editing" : ""}" data-knowledge-chunk="${escapeHTML(chunk.id)}" tabindex="0">
            ${isEditing ? "" : `
              <div class="knowledge-chunk-actions" aria-label="${escapeHTML(chunk.title)} 操作">
                <button data-knowledge-chunk-edit="${escapeHTML(chunk.id)}">编辑</button>
                <button data-knowledge-chunk-add="before|${escapeHTML(chunk.id)}">前插入</button>
                <button data-knowledge-chunk-add="after|${escapeHTML(chunk.id)}">后插入</button>
                <button class="danger-link" data-knowledge-chunk-delete="${escapeHTML(chunk.id)}">删除</button>
              </div>
            `}
            <div class="knowledge-chunk-preview">
              <p>${formatKnowledgeChunkText(chunk.text)}</p>
              ${renderKnowledgeChunkImage(chunk)}
            </div>
            <div class="knowledge-chunk-edit-fields">
              <label>文本<textarea data-knowledge-chunk-text="${escapeHTML(chunk.id)}" rows="5">${escapeHTML(chunk.text)}</textarea></label>
              ${renderKnowledgeChunkImageEditor(chunk)}
            </div>
          </article>
    `);
  }
  return cards.join("");
}

function renderPendingKnowledgeChunk() {
  return `
    <article class="knowledge-chunk-card pending editing" data-knowledge-pending-chunk="${escapeHTML(pendingKnowledgeChunk.id)}">
      <div class="knowledge-pending-empty-bar">
        <textarea data-knowledge-pending-text rows="3" placeholder="输入文字，或直接粘贴图片"></textarea>
      </div>
    </article>
  `;
}

function renderKnowledgeChunkImage(chunk) {
  if (chunk.imageSrc) {
    return `<figure class="knowledge-chunk-image-preview has-image"><img src="${escapeHTML(chunk.imageSrc)}" alt="${escapeHTML(chunk.image || "切片图片")}" /><figcaption>${escapeHTML(chunk.image || "粘贴图片")}</figcaption></figure>`;
  }
  if (!chunk.image) return "";
  return `<div class="knowledge-chunk-image-preview">${escapeHTML(chunk.image)}</div>`;
}

function renderKnowledgeChunkImageEditor(chunk) {
  if (!chunk.image && !chunk.imageSrc) return "";
  return `<label>图片<input data-knowledge-chunk-image="${escapeHTML(chunk.id)}" value="${escapeHTML(chunk.image)}" placeholder="图片名称或说明" /></label>`;
}

function formatKnowledgeChunkText(text = "") {
  return escapeHTML(text).replaceAll("\n", "<br />");
}

function toggleKnowledgeResource(resourceId) {
  const resource = knowledgeResourceStore.find((item) => item.id === resourceId);
  if (!resource) return;
  resource.enabled = !resource.enabled;
  renderKnowledgeBasePage();
  showToast(resource.enabled ? "资源已启用" : "资源已设为不使用");
}

function deleteKnowledgeResource(resourceId) {
  const index = knowledgeResourceStore.findIndex((item) => item.id === resourceId);
  if (index < 0) return;
  knowledgeResourceStore.splice(index, 1);
  if (activeKnowledgeResourceId === resourceId) activeKnowledgeResourceId = "";
  renderKnowledgeBasePage();
  showToast("资源已删除");
}

function openKnowledgeResourceDeleteConfirm(resourceId) {
  const resource = knowledgeResourceStore.find((item) => item.id === resourceId);
  if (!resource) return;
  resetSmartTagModalCloseButton();
  $("#modalContent").innerHTML = `
    <div class="modal-body smart-tag-delete-confirm">
      ${renderSmartTagModalTitle("确认删除文档")}
      <p>删除后无法恢复，确定要删除「${escapeHTML(resource.name)}」吗？</p>
      <footer>
        <button type="button" data-knowledge-resource-delete-cancel>取消</button>
        <button class="danger-mini" type="button" data-knowledge-resource-delete-confirm="${escapeHTML(resource.id)}">删除文档</button>
      </footer>
    </div>
  `;
  if (!$("#modal").open) $("#modal").showModal();
}

function addKnowledgeChunk(position = "end", targetId = "") {
  if (pendingKnowledgeChunk) {
    const committed = commitPendingKnowledgeChunk();
    if (!committed && pendingKnowledgeChunk) pendingKnowledgeChunk = null;
  }
  const targetIndex = knowledgeChunkDrafts.findIndex((item) => item.id === targetId);
  let index = knowledgeChunkDrafts.length;
  if (position === "before" && targetIndex >= 0) index = targetIndex;
  else if (position === "after" && targetIndex >= 0) index = targetIndex + 1;
  pendingKnowledgeChunk = { id: `pending-${Date.now()}`, index, text: "", image: "", imageSrc: "" };
  editingKnowledgeChunkId = "";
  renderKnowledgeResourceBuilder();
  window.setTimeout(() => $("[data-knowledge-pending-text]")?.focus(), 0);
}

function toggleKnowledgeChunkEdit(chunkId) {
  if (!knowledgeChunkDrafts.some((chunk) => chunk.id === chunkId)) return;
  editingKnowledgeChunkId = editingKnowledgeChunkId === chunkId ? "" : chunkId;
  knowledgeChunkEditGuardUntil = editingKnowledgeChunkId ? Date.now() + 450 : 0;
  renderKnowledgeResourceBuilder();
  if (editingKnowledgeChunkId) window.setTimeout(() => $(`[data-knowledge-chunk-text="${CSS.escape(editingKnowledgeChunkId)}"]`)?.focus(), 0);
}

function closeKnowledgeChunkEdit(chunkId = editingKnowledgeChunkId) {
  if (!chunkId || editingKnowledgeChunkId !== chunkId) return;
  if (Date.now() < knowledgeChunkEditGuardUntil) return;
  editingKnowledgeChunkId = "";
  knowledgeChunkEditGuardUntil = 0;
  renderKnowledgeResourceBuilder();
}

function renumberKnowledgeChunks() {
  knowledgeChunkDrafts.forEach((chunk, index) => {
    chunk.title = `切片 ${index + 1}`;
  });
}

function openKnowledgeChunkDeleteConfirm(chunkId) {
  const chunk = knowledgeChunkDrafts.find((item) => item.id === chunkId);
  if (!chunk) return;
  resetSmartTagModalCloseButton();
  $("#modalContent").innerHTML = `
    <div class="modal-body smart-tag-delete-confirm">
      ${renderSmartTagModalTitle("确认删除切片")}
      <p>删除后无法恢复，确定要删除「${escapeHTML(chunk.title)}」吗？</p>
      <footer>
        <button type="button" data-knowledge-chunk-delete-cancel>取消</button>
        <button class="danger-mini" type="button" data-knowledge-chunk-delete-confirm="${escapeHTML(chunk.id)}">删除</button>
      </footer>
    </div>
  `;
  if (!$("#modal").open) $("#modal").showModal();
}

function commitKnowledgeChunkDelete(chunkId) {
  const index = knowledgeChunkDrafts.findIndex((chunk) => chunk.id === chunkId);
  if (index < 0) return;
  knowledgeChunkDrafts.splice(index, 1);
  if (editingKnowledgeChunkId === chunkId) editingKnowledgeChunkId = "";
  renumberKnowledgeChunks();
  $("#modal").close();
  renderKnowledgeResourceBuilder();
  showToast("切片已删除");
}

function commitPendingKnowledgeChunk() {
  if (!pendingKnowledgeChunk) return null;
  const text = pendingKnowledgeChunk.text.trim();
  const hasImage = Boolean(pendingKnowledgeChunk.imageSrc || pendingKnowledgeChunk.image.trim());
  if (!text && !hasImage) {
    pendingKnowledgeChunk = null;
    renderKnowledgeResourceBuilder();
    return null;
  }
  const chunk = {
    id: `chunk-${Date.now()}`,
    title: "",
    text,
    image: pendingKnowledgeChunk.image || (hasImage ? "粘贴图片" : ""),
    imageSrc: pendingKnowledgeChunk.imageSrc || "",
  };
  const index = Math.max(0, Math.min(pendingKnowledgeChunk.index, knowledgeChunkDrafts.length));
  knowledgeChunkDrafts.splice(index, 0, chunk);
  pendingKnowledgeChunk = null;
  editingKnowledgeChunkId = "";
  renumberKnowledgeChunks();
  renderKnowledgeResourceBuilder();
  return chunk;
}

function discardEmptyPendingKnowledgeChunk() {
  if (!pendingKnowledgeChunk) return;
  if (pendingKnowledgeChunk.text.trim() || pendingKnowledgeChunk.imageSrc || pendingKnowledgeChunk.image.trim()) {
    commitPendingKnowledgeChunk();
    return;
  }
  pendingKnowledgeChunk = null;
  renderKnowledgeResourceBuilder();
}

function handlePendingKnowledgePaste(event) {
  if (!pendingKnowledgeChunk) return;
  const items = [...(event.clipboardData?.items || [])];
  const imageItem = items.find((item) => item.type?.startsWith("image/"));
  if (!imageItem) return;
  event.preventDefault();
  const file = imageItem.getAsFile();
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    pendingKnowledgeChunk.imageSrc = String(reader.result || "");
    pendingKnowledgeChunk.image = file.name || "粘贴图片";
    commitPendingKnowledgeChunk();
  };
  reader.readAsDataURL(file);
}

function getSmartTagTotals() {
  const tags = smartTagCategories.flatMap((category) => category.tags);
  return {
    categories: smartTagCategories.length,
    tags: tags.length,
    pausedTags: tags.filter((tag) => tag.paused).length,
    activeTags: tags.filter((tag) => !tag.paused).length,
  };
}

function getSmartTagCategory(categoryId) {
  return smartTagCategories.find((category) => category.id === categoryId);
}

function getSmartTagRecord(tagId) {
  for (const category of smartTagCategories) {
    const tag = category.tags.find((item) => item.id === tagId);
    if (tag) return { category, tag };
  }
  return null;
}

function getFilteredSmartTags() {
  const keyword = smartTagSearchTerm.trim().toLowerCase();
  const category = getSmartTagCategory(selectedSmartTagCategoryId);
  const categories = category ? [category] : smartTagCategories;
  return categories.flatMap((item) => item.tags.map((tag) => ({ category: item, tag })))
    .sort((a, b) => b.tag.createdAt - a.tag.createdAt)
    .filter(({ category: item, tag }) => {
      if (!keyword) return true;
      return [item.name, item.condition, tag.name, tag.condition]
        .some((value) => value.toLowerCase().includes(keyword));
    });
}

function getSmartTagCategoryPaused(category) {
  return category.paused || category.tags.every((tag) => tag.paused);
}

function getVisibleSmartTagCategories() {
  const keyword = smartTagSearchTerm.trim().toLowerCase();
  if (!keyword) return smartTagCategories.map((category) => ({ category, tags: category.tags, matchedBySearch: false }));
  return smartTagCategories
    .map((category) => {
      const categoryMatched = [category.name, category.condition]
        .some((value) => value.toLowerCase().includes(keyword));
      const tags = categoryMatched
        ? category.tags
        : category.tags.filter((tag) => [tag.name, tag.condition]
          .some((value) => value.toLowerCase().includes(keyword)));
      return { category, tags, matchedBySearch: true };
    })
    .filter(({ tags }) => tags.length);
}

function renderSmartTagCategoryList() {
  const visibleCategories = getVisibleSmartTagCategories();
  if (!visibleCategories.length) {
    return `<div class="smart-tag-empty">没有匹配的智能标签</div>`;
  }
  const rows = visibleCategories.map(({ category, tags, matchedBySearch }) => {
    const isPaused = getSmartTagCategoryPaused(category);
    const isExpanded = matchedBySearch || expandedSmartTagCategoryIds.includes(category.id);
    return `
      <tbody class="smart-tag-category ${isExpanded ? "expanded" : ""} ${isPaused ? "paused" : ""}" data-smart-tag-category="${escapeHTML(category.id)}">
        <tr class="smart-tag-category-row">
          <td colspan="3">
            <button class="smart-tag-category-name" data-smart-tag-category-toggle="${escapeHTML(category.id)}" aria-expanded="${isExpanded}">
            <span class="smart-tag-chevron">${isExpanded ? "⌄" : "›"}</span>
            <span>${escapeHTML(category.name)}</span>
            <em>${category.tags.length}</em>
            ${isPaused ? `<b>已暂停</b>` : ""}
            </button>
          </td>
          <td>
          <div class="smart-tag-category-actions">
            <button data-smart-tag-category-edit="${escapeHTML(category.id)}">编辑</button>
            <button data-smart-tag-category-action="toggle|${escapeHTML(category.id)}">${isPaused ? "激活" : "暂停"}</button>
            <button data-smart-tag-category-action="delete|${escapeHTML(category.id)}">删除</button>
          </div>
          </td>
        </tr>
        ${isExpanded ? tags.map((tag) => `
          <tr class="smart-tag-value ${tag.paused ? "paused" : ""}" data-smart-tag-value="${escapeHTML(tag.id)}" data-smart-tag-edit="${escapeHTML(tag.id)}">
            <td>
              <span class="smart-tag-value-name"><span class="smart-tag-value-branch">↳</span>${escapeHTML(tag.name)}</span>
              ${tag.paused ? `<b>已暂停</b>` : ""}
            </td>
            <td><span class="sales-skill-cell-clamp" title="${escapeHTML(tag.condition)}">${escapeHTML(tag.condition)}</span></td>
            <td>${escapeHTML(formatSkillTime(tag.createdAt))}</td>
            <td></td>
          </tr>
        `).join("") : ""}
      </tbody>
    `;
  }).join("");
  return `
    <table class="smart-tag-home-table">
      <thead><tr><th>名称</th><th>适用条件</th><th>创建时间</th><th class="smart-tag-actions-header" aria-label="类别操作"></th></tr></thead>
      ${rows}
    </table>
  `;
}

function renderSmartTagsPage() {
  const totals = getSmartTagTotals();
  syncRail("agent");
  syncAgentConfigRoute("smart-tags");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").classList.remove("ai-panel-collapsed");
  $("#pageView").innerHTML = `
    <div class="page-hero agent-config-page-hero sales-skills-hero">
      <button class="back-button" data-agent-config-route="workflow-build" aria-label="返回工作流搭建">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">智能体配置 / 智能标签</span>
        <h2>智能标签</h2>
      </div>
    </div>
    <section class="smart-tags-workbench">
      <section class="smart-tag-summary">
        <div><span>类别</span><strong>${totals.categories}</strong></div>
        <div><span>标签</span><strong>${totals.tags}</strong></div>
        <div><span>生效中标签数</span><strong>${totals.activeTags}</strong></div>
      </section>
      <div class="sales-skill-toolbar">
        <label class="sales-skill-search">
          <svg viewBox="0 0 24 24"><path d="M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.41 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" /></svg>
          <input data-smart-tag-search type="search" value="${escapeHTML(smartTagSearchTerm)}" placeholder="搜索类别、标签名称、适用条件" />
        </label>
      </div>
      <div class="smart-tag-layout">
        <section class="content-panel smart-tag-category-panel">
          <header>
            <h3>标签类别</h3>
            <button class="primary-mini smart-tag-create-button" data-smart-tag-create onclick="window.__openSmartTagCreateModal && window.__openSmartTagCreateModal()">新建标签</button>
          </header>
          <div class="smart-tag-category-list">
            ${renderSmartTagCategoryList()}
          </div>
        </section>
      </div>
    </section>
  `;
  bindSmartTagsInteractions();
  history.replaceState(null, "", "#agent-config/smart-tags");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function bindSmartTagsInteractions() {
  $("[data-smart-tag-create]")?.addEventListener("click", (event) => {
    event.preventDefault();
    openSmartTagCreateModal();
  });
  $$("[data-smart-tag-category-toggle]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleSmartTagCategory(button.dataset.smartTagCategoryToggle);
    };
  });
  $$("[data-smart-tag-category-edit]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSmartTagCategoryModal(button.dataset.smartTagCategoryEdit);
    };
  });
  $$("[data-smart-tag-category-action]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const [action, categoryId] = button.dataset.smartTagCategoryAction.split("|");
      runSmartTagCategoryAction(action, categoryId);
    };
  });
  $$("[data-smart-tag-edit]").forEach((row) => {
    row.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSmartTagModal(row.dataset.smartTagEdit);
    };
  });
  $$("[data-smart-tag-action]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const [action, tagId] = button.dataset.smartTagAction.split("|");
      runSmartTagAction(action, tagId);
    };
  });
  $("[data-smart-tag-search]")?.addEventListener("input", (event) => {
    smartTagSearchTerm = event.target.value;
    renderSmartTagsPage();
    $("[data-smart-tag-search]")?.focus();
  });
}

function toggleSmartTagCategory(categoryId) {
  if (!getSmartTagCategory(categoryId)) return;
  expandedSmartTagCategoryIds = expandedSmartTagCategoryIds.includes(categoryId)
    ? expandedSmartTagCategoryIds.filter((id) => id !== categoryId)
    : [...expandedSmartTagCategoryIds, categoryId];
  renderSmartTagsPage();
}

function renderSmartTagCategoryEditorRows(category) {
  if (!category.tags.length) return `<tr><td colspan="3" class="sales-skill-empty">这个类别下暂无标签</td></tr>`;
  return category.tags
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((tag) => `
      <tr class="${tag.paused ? "paused" : ""}" data-smart-tag-editor-row="${escapeHTML(tag.id)}" data-smart-tag-edit="${escapeHTML(tag.id)}">
        <td>
          <strong class="sales-skill-cell-clamp" title="${escapeHTML(tag.name)}">${escapeHTML(tag.name)}</strong>
          ${tag.paused ? `<span class="sales-skill-state">已暂停</span>` : ""}
        </td>
        <td><span class="sales-skill-cell-clamp" title="${escapeHTML(tag.condition)}">${escapeHTML(tag.condition)}</span></td>
        <td>${escapeHTML(formatSkillTime(tag.createdAt))}</td>
      </tr>
    `).join("");
}

function resetSmartTagModalCloseButton() {
  const closeButton = $(".modal-close");
  if (!closeButton) return;
  closeButton.dataset.smartTagBackCategory = "";
  closeButton.textContent = "×";
  closeButton.setAttribute("aria-label", "关闭");
}

function setSmartTagModalBackMode(categoryId = "") {
  const closeButton = $(".modal-close");
  if (!closeButton) return;
  closeButton.dataset.smartTagBackCategory = categoryId;
}

function renderSmartTagModalTitle(title, backCategoryId = "") {
  return `
    <div class="smart-tag-modal-title-row">
      ${backCategoryId ? `<button class="smart-tag-modal-back" type="button" data-smart-tag-modal-back="${escapeHTML(backCategoryId)}" aria-label="返回标签类别编辑">‹</button>` : ""}
      <h3>${escapeHTML(title)}</h3>
    </div>
  `;
}

function slugifySmartTagValue(value, fallback = "item") {
  const slug = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 28);
  return slug || fallback;
}

function getUniqueSmartTagId(prefix, value) {
  const base = `${prefix}-${slugifySmartTagValue(value, "new")}`;
  const existingIds = new Set([
    ...smartTagCategories.map((category) => category.id),
    ...smartTagCategories.flatMap((category) => category.tags.map((tag) => tag.id)),
  ]);
  let id = base;
  let index = 2;
  while (existingIds.has(id)) {
    id = `${base}-${index}`;
    index += 1;
  }
  return id;
}

function renderSmartTagCreateRow() {
  return `
    <div class="smart-tag-create-row" data-smart-tag-create-row>
      <label>标签名称<input name="tagName" required placeholder="例如：复购意向" /></label>
      <label>适用条件<textarea name="condition" required rows="4" placeholder="说明什么时候应该给用户打上这个标签"></textarea></label>
    </div>
  `;
}

function openSmartTagCreateModal(categoryId = "") {
  const category = getSmartTagCategory(categoryId);
  resetSmartTagModalCloseButton();
  $("#modalContent").innerHTML = `
    <div class="modal-body smart-tag-create-editor">
      ${renderSmartTagModalTitle("新建标签", category?.id || "")}
      <form class="sales-skill-modal-form" data-smart-tag-create-form onsubmit="window.__saveSmartTagCreateFromForm && window.__saveSmartTagCreateFromForm(this); return false;">
        <input type="hidden" name="returnCategoryId" value="${escapeHTML(category?.id || "")}" />
        <label>标签类别<input name="categoryName" required placeholder="例如：客户阶段" value="${escapeHTML(category?.name || "")}" ${category ? "readonly" : ""} /></label>
        <div class="smart-tag-create-rows" data-smart-tag-create-rows>
          ${renderSmartTagCreateRow()}
        </div>
        <button type="button" class="smart-tag-add-row-button" data-smart-tag-add-row onclick="window.__addSmartTagCreateRow && window.__addSmartTagCreateRow()">添加一条标签</button>
        <footer>
          <button class="primary-mini" type="submit">创建</button>
        </footer>
      </form>
    </div>
  `;
  bindSmartTagCreateModalInteractions();
  if (!$("#modal").open) $("#modal").showModal();
}

function bindSmartTagCreateModalInteractions() {
  const addButton = $("[data-smart-tag-add-row]");
  if (addButton) addButton.onclick = (event) => {
    event.preventDefault();
    addSmartTagCreateRow();
  };
}

function addSmartTagCreateRow() {
  const rows = $("[data-smart-tag-create-rows]");
  if (!rows) return;
  rows.insertAdjacentHTML("beforeend", renderSmartTagCreateRow());
  bindSmartTagCreateModalInteractions();
}

function openSmartTagCategoryModal(categoryId) {
  const category = getSmartTagCategory(categoryId);
  if (!category) return;
  resetSmartTagModalCloseButton();
  $("#modalContent").innerHTML = `
    <div class="modal-body smart-tag-category-editor" data-smart-tag-category-editor="${escapeHTML(category.id)}">
      ${renderSmartTagModalTitle("编辑标签")}
      <form class="sales-skill-modal-form" data-smart-tag-category-modal-form>
        <input type="hidden" name="categoryId" value="${escapeHTML(category.id)}" />
        <label>名称<input name="name" required value="${escapeHTML(category.name)}" data-smart-tag-category-name-input="${escapeHTML(category.id)}" /></label>
      </form>
      <section class="smart-tag-editor-table-panel">
        <header>
          <h4>关联标签</h4>
          <div class="smart-tag-editor-table-tools">
            <span>共 ${category.tags.length} 项</span>
            <button type="button" class="primary-mini" data-smart-tag-category-add="${escapeHTML(category.id)}">新增标签</button>
          </div>
        </header>
        <table class="sales-skill-table smart-tag-editor-table">
          <thead>
            <tr><th>名称</th><th>适用条件</th><th>创建时间</th></tr>
          </thead>
          <tbody>${renderSmartTagCategoryEditorRows(category)}</tbody>
        </table>
      </section>
    </div>
  `;
  bindSmartTagCategoryModalInteractions();
  if (!$("#modal").open) $("#modal").showModal();
}

function bindSmartTagCategoryModalInteractions() {
  $$("[data-smart-tag-category-add]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSmartTagCreateModal(button.dataset.smartTagCategoryAdd);
    };
  });
  $$("[data-smart-tag-edit]").forEach((row) => {
    row.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSmartTagModal(row.dataset.smartTagEdit, row.closest("[data-smart-tag-category-editor]")?.dataset.smartTagCategoryEditor);
    };
  });
  $$("[data-smart-tag-category-name-input]").forEach((input) => {
    input.addEventListener("input", () => {
      saveSmartTagCategoryName(input.dataset.smartTagCategoryNameInput, input.value);
    });
  });
}

function openSmartTagModal(tagId, parentCategoryId = "") {
  const record = getSmartTagRecord(tagId);
  if (!record) return;
  const { category, tag } = record;
  resetSmartTagModalCloseButton();
  $("#modalContent").innerHTML = `
    <div class="modal-body smart-tag-value-editor">
      ${renderSmartTagModalTitle(`${category.name} / ${tag.name}`, parentCategoryId || category.id)}
      <form class="sales-skill-modal-form" data-smart-tag-modal-form>
        <input type="hidden" name="tagId" value="${escapeHTML(tag.id)}" />
        <label>名称<input name="name" required value="${escapeHTML(tag.name)}" /></label>
        <label>适用条件<textarea name="condition" required rows="7">${escapeHTML(tag.condition)}</textarea></label>
        <footer>
          <button type="button" data-smart-tag-action="toggle|${escapeHTML(tag.id)}">${tag.paused ? "激活" : "暂停"}</button>
          <button type="button" data-smart-tag-action="delete|${escapeHTML(tag.id)}">删除</button>
          <button class="primary-mini" type="submit">保存</button>
        </footer>
      </form>
    </div>
  `;
  bindSmartTagValueModalInteractions();
  if (!$("#modal").open) $("#modal").showModal();
}

function openSmartTagDeleteConfirmModal({ type, id, returnTo }) {
  const isCategory = type === "category";
  const target = isCategory ? getSmartTagCategory(id) : getSmartTagRecord(id)?.tag;
  if (!target) return;
  resetSmartTagModalCloseButton();
  $("#modalContent").innerHTML = `
    <div class="modal-body smart-tag-delete-confirm">
      ${renderSmartTagModalTitle("确认删除", returnTo || "")}
      <p>删除后无法恢复，确定要删除「${escapeHTML(target.name)}」吗？</p>
      <footer>
        <button type="button" data-smart-tag-delete-cancel="${escapeHTML(returnTo || "")}">取消</button>
        <button class="danger-mini" type="button" data-smart-tag-delete-confirm="${escapeHTML(type)}|${escapeHTML(id)}">删除</button>
      </footer>
    </div>
  `;
  bindSmartTagDeleteConfirmInteractions();
  if (!$("#modal").open) $("#modal").showModal();
}

function bindSmartTagDeleteConfirmInteractions() {
  $$("[data-smart-tag-delete-cancel]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const categoryId = button.dataset.smartTagDeleteCancel;
      if (categoryId) openSmartTagCategoryModal(categoryId);
      else $("#modal").close();
    };
  });
  $$("[data-smart-tag-delete-confirm]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const [type, id] = button.dataset.smartTagDeleteConfirm.split("|");
      commitSmartTagDelete(type, id);
    };
  });
}

function bindSmartTagValueModalInteractions() {
  $$("[data-smart-tag-action]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const [action, tagId] = button.dataset.smartTagAction.split("|");
      runSmartTagAction(action, tagId);
    };
  });
}

function saveSmartTagCategoryName(categoryId, value) {
  const category = getSmartTagCategory(categoryId);
  if (!category) return;
  const name = String(value || "").trim();
  if (!name) return;
  category.name = name;
  renderSmartTagsPage();
}

function saveSmartTagCreateFromModal(form) {
  if (form.dataset.smartTagSubmitted === "true") return;
  const data = new FormData(form);
  const categoryName = String(data.get("categoryName") || "").trim();
  const returnCategoryId = String(data.get("returnCategoryId") || "");
  const tagRows = [...form.querySelectorAll("[data-smart-tag-create-row]")].map((row) => ({
    name: String(row.querySelector('[name="tagName"]')?.value || "").trim(),
    condition: String(row.querySelector('[name="condition"]')?.value || "").trim(),
  }));
  if (!categoryName || !tagRows.length || tagRows.some((row) => !row.name || !row.condition)) {
    showToast("请填写完整标签信息");
    return;
  }
  form.dataset.smartTagSubmitted = "true";
  const now = Date.now();
  let category = smartTagCategories.find((item) => item.name === categoryName);
  if (!category) {
    category = {
      id: getUniqueSmartTagId("tag-cat", categoryName),
      name: categoryName,
      condition: "",
      createdAt: now,
      tags: [],
    };
    smartTagCategories.unshift(category);
  }
  const tags = tagRows.map((row, index) => ({
    id: getUniqueSmartTagId("tag", `${row.name}-${now}-${index}`),
    name: row.name,
    condition: row.condition,
    createdAt: now + index,
  }));
  category.tags.unshift(...tags);
  selectedSmartTagCategoryId = category.id;
  if (!expandedSmartTagCategoryIds.includes(category.id)) {
    expandedSmartTagCategoryIds = [category.id, ...expandedSmartTagCategoryIds];
  }
  smartTagSearchTerm = "";
  renderSmartTagsPage();
  if (returnCategoryId) openSmartTagCategoryModal(category.id);
  else $("#modal").close();
  showToast(tags.length > 1 ? `已创建 ${tags.length} 个标签` : "标签已创建");
}

window.__openSmartTagCreateModal = openSmartTagCreateModal;
window.__addSmartTagCreateRow = addSmartTagCreateRow;
window.__saveSmartTagCreateFromForm = saveSmartTagCreateFromModal;

function saveSmartTagCategoryFromModal(form) {
  const data = new FormData(form);
  const category = getSmartTagCategory(String(data.get("categoryId") || ""));
  if (!category) return;
  const name = String(data.get("name") || "").trim();
  if (!name) {
    showToast("请填写完整类别信息");
    return;
  }
  Object.assign(category, { name });
  renderSmartTagsPage();
}

function saveSmartTagFromModal(form) {
  const data = new FormData(form);
  const record = getSmartTagRecord(String(data.get("tagId") || ""));
  if (!record) return;
  const name = String(data.get("name") || "").trim();
  const condition = String(data.get("condition") || "").trim();
  if (!name || !condition) {
    showToast("请填写完整标签信息");
    return;
  }
  Object.assign(record.tag, { name, condition });
  renderSmartTagsPage();
  openSmartTagCategoryModal(record.category.id);
}

function runSmartTagAction(action, tagId) {
  const record = getSmartTagRecord(tagId);
  if (!record) return;
  if (action === "delete") {
    openSmartTagDeleteConfirmModal({ type: "tag", id: tagId, returnTo: record.category.id });
    return;
  }
  if (action === "toggle") {
    record.tag.paused = !record.tag.paused;
    renderSmartTagsPage();
    openSmartTagModal(tagId, record.category.id);
    showToast(record.tag.paused ? "标签已暂停" : "标签已激活");
  }
}

function runSmartTagCategoryAction(action, categoryId) {
  const category = getSmartTagCategory(categoryId);
  if (!category) return;
  if (action === "delete") {
    openSmartTagDeleteConfirmModal({ type: "category", id: categoryId, returnTo: "" });
    return;
  }
  if (action === "toggle") {
    const shouldPause = !getSmartTagCategoryPaused(category);
    category.paused = shouldPause;
    category.tags.forEach((tag) => {
      tag.paused = shouldPause;
    });
    renderSmartTagsPage();
    showToast(shouldPause ? "标签类别已暂停" : "标签类别已激活");
  }
}

function commitSmartTagDelete(type, id) {
  if (type === "tag") {
    const record = getSmartTagRecord(id);
    if (!record) return;
    record.category.tags = record.category.tags.filter((tag) => tag.id !== id);
    renderSmartTagsPage();
    openSmartTagCategoryModal(record.category.id);
    return;
  }
  if (type === "category") {
    const index = smartTagCategories.findIndex((item) => item.id === id);
    if (index >= 0) smartTagCategories.splice(index, 1);
    selectedSmartTagCategoryId = smartTagCategories[0]?.id || "";
    renderSmartTagsPage();
    $("#modal").close();
  }
}

function renderAgentConfigPage(route) {
  if (route === "workflow-build") return renderN8nConsolePage();
  if (route === "sales-skills") return renderSalesSkillsPage();
  if (route === "smart-tags") return renderSmartTagsPage();
  if (route === "knowledge-base") return renderKnowledgeBasePage();
  if (route === "knowledge-base/new") return renderKnowledgeResourceBuilder();
  if (route === "answer-test") return renderAnswerTestPage();
  const item = agentConfigSubmodules.find((module) => module.id === route);
  if (!item) return false;
  syncRail("agent");
  syncAgentConfigRoute(route);
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").classList.remove("ai-panel-collapsed");
  $("#pageView").innerHTML = `
    <div class="page-hero agent-config-page-hero">
      <button class="back-button" data-agent-config-route="workflow-build" aria-label="返回工作流搭建">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">智能体配置 / ${escapeHTML(item.label)}</span>
        <h2>${escapeHTML(item.label)}</h2>
        <p>${escapeHTML(item["desc"])}</p>
      </div>
      <div class="page-actions">
        <button class="primary" data-ai-sop-template="${escapeHTML(item.title)}">让 AI 优化</button>
        <button data-toast="已保存${escapeHTML(item.label)}">保存</button>
      </div>
    </div>
    <div class="metric-row">
      ${item.metrics.map(([label, value]) => `<div class="mini-metric"><span>${escapeHTML(label)}</span><strong>${escapeHTML(value)}</strong></div>`).join("")}
    </div>
    <div class="content-grid">
      <section class="content-panel agent-config-page-panel">
        <header>
          <h3>${escapeHTML(item.title)}</h3>
          <span>${item.points.length} 个配置点</span>
        </header>
        <div class="record-list">
          ${item.points.map((point, index) => `
            <button class="record-item" data-toast="已打开：${escapeHTML(point)}">
              <span class="record-title">
                ${escapeHTML(point)}
                <span class="status-tag ${index === 0 ? "live" : "warn"}">${index === 0 ? "已启用" : "待完善"}</span>
              </span>
              <p>${escapeHTML(getAgentConfigPointDesc(route, point))}</p>
              <span class="tag-row"><span class="soft-tag">${escapeHTML(item.label)}</span><span class="soft-tag">${escapeHTML(item.eyebrow)}</span></span>
            </button>
          `).join("")}
        </div>
      </section>
      <section class="content-panel agent-config-page-panel">
        <header>
          <h3>${route === "answer-test" ? "答案质检样本" : "配置检查"}</h3>
          <span>业务视角</span>
        </header>
        <table class="inline-table">
          <thead><tr><th>项目</th><th>当前状态</th><th>下一步</th></tr></thead>
          <tbody>
            ${getAgentConfigRows(route).map((row) => `
              <tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
  history.replaceState(null, "", `#agent-config/${route}`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function getActiveAnswerTestThread() {
  return answerTestThreads.find((thread) => thread.id === activeAnswerTestThreadId) || null;
}

function getAnswerSourceIcon(type) {
  const icons = {
    node: `<svg viewBox="0 0 24 24"><path d="M7 7h4v4H7V7Zm6 0h4v4h-4V7ZM7 13h4v4H7v-4Zm6 0h4v4h-4v-4Z" /></svg>`,
    skill: `<svg viewBox="0 0 24 24"><path d="M12 4 4.5 8.2 12 12.4l7.5-4.2L12 4Zm-5.5 7.1v4.1L12 18.3l5.5-3.1v-4.1L12 14.2l-5.5-3.1Z" /></svg>`,
    tag: `<svg viewBox="0 0 24 24"><path d="M5 5h8.2L19 10.8 10.8 19 5 13.2V5Zm4 3a1.4 1.4 0 1 0 0 2.8A1.4 1.4 0 0 0 9 8Z" /></svg>`,
    doc: `<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7V3Zm6 1.8V8h3.2L13 4.8ZM9 11h6v2H9v-2Zm0 4h6v2H9v-2Z" /></svg>`,
  };
  return icons[type] || icons.doc;
}

function buildAnswerTestResponse(question) {
  const normalized = question.trim();
  const isGift = /礼物|赠品|资料包|福利/.test(normalized);
  const isPrice = /价格|优惠|多少钱|贵|便宜/.test(normalized);
  const text = isGift
    ? "我会先确认孩子是否已试听、当前报名阶段和可领取权益。现在可稳定说明的是自然拼读试听资料包和练习卡；如果涉及已购课权益或特殊活动，需要转顾问核对后再答复。"
    : isPrice
      ? "价格需要结合课程级别、课包和当前活动确认。我可以先解释课程价值和试听安排，但不会承诺最低价或特殊优惠；涉及优惠时会触发顾问核对。"
      : "我会先根据问题意图匹配销售技能、客户标签和资料来源，再生成可追溯回答。当前建议先补充孩子年级、学习目标和跟进阶段，避免只给泛化答案。";
  return {
    role: "assistant",
    text,
    sources: [
      {
        group: "工作流节点设定",
        count: 2,
        items: [
          { icon: "node", title: isPrice ? "价格政策核对节点" : "意图识别与路由节点", detail: "根据用户问题抽取 intent、stage、risk_level，再决定是否进入顾问核对。", route: "workflow-build" },
          { icon: "node", title: "回答生成节点", detail: "组合技能约束、资料片段和标签状态，生成可审计回复。", route: "workflow-build" },
        ],
      },
      {
        group: "销售技能",
        count: isPrice ? 2 : 1,
        items: [
          { icon: "skill", title: isPrice ? "价格异议处理" : "需求挖掘", detail: isPrice ? "涉及价格、优惠、最低价时不越权承诺。" : "先收集基础信息，再推进试听或人工跟进。", route: "sales-skills" },
          ...(isPrice ? [{ icon: "skill", title: "试听邀约", detail: "把泛价格咨询推进到可体验的试听安排。", route: "sales-skills" }] : []),
        ],
      },
      {
        group: "智能标签",
        count: 1,
        items: [
          { icon: "tag", title: isPrice ? "价格敏感" : "待识别意向", detail: "用于决定继续追问、邀约试听或转人工确认。", route: "smart-tags" },
        ],
      },
      {
        group: "资料中心",
        count: 1,
        items: [
          { icon: "doc", title: isPrice ? "课程价格政策 FAQ" : "自然拼读课程介绍", detail: "回答中只引用已审核资料，缺失时提示需要补充。", route: "knowledge-base" },
        ],
      },
    ],
  };
}

function renderAnswerTestSources(message) {
  if (!message?.sources?.length) return "";
  return `
    <section class="answer-source-panel">
      <header>
        <span>本次回答使用了</span>
        <strong>${message.sources.reduce((sum, group) => sum + group.count, 0)} 个配置来源</strong>
      </header>
      <div class="answer-source-groups">
        ${message.sources.map((group) => `
          <details class="answer-source-group" open>
            <summary>
              <span>${escapeHTML(group.group)} (${group.count})</span>
              <svg viewBox="0 0 24 24"><path d="m7 10 5 5 5-5" /></svg>
            </summary>
            <div class="answer-source-items">
              ${group.items.map((source) => `
                <button class="answer-source-item" data-answer-source-target="${escapeHTML(source.route)}">
                  <span class="answer-source-icon">${getAnswerSourceIcon(source.icon)}</span>
                  <span>
                    <strong>${escapeHTML(source.title)}</strong>
                    <small>${escapeHTML(source.detail)}</small>
                  </span>
                </button>
              `).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAnswerTestAttachmentChips(files = []) {
  if (!files.length) return "";
  return `
    <div class="answer-attachment-list">
      ${files.map((file, index) => `
        <span class="answer-attachment-chip">
          <strong>${escapeHTML(file.name)}</strong>
          <em>${escapeHTML(file.kind || "文件")} · ${escapeHTML(formatFileSize(file.size || 0))}</em>
          ${file.removable ? `<button type="button" data-answer-remove-attachment="${index}" aria-label="移除附件 ${escapeHTML(file.name)}">×</button>` : ""}
        </span>
      `).join("")}
    </div>
  `;
}

function renderAnswerTestPendingAttachments() {
  return renderAnswerTestAttachmentChips(answerTestAttachments.map((file) => ({ ...file, removable: true })));
}

async function processAnswerTestAttachments(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  const accepted = files.filter(isAiMcpAcceptedFile);
  if (accepted.length !== files.length) showToast("已忽略不支持的附件格式");
  const room = Math.max(0, AI_MCP_MAX_ATTACHMENTS - answerTestAttachments.length);
  const selected = accepted.slice(0, room);
  if (accepted.length > room) showToast(`一次最多上传 ${AI_MCP_MAX_ATTACHMENTS} 个文件`);
  const next = [];
  for (const file of selected) {
    const isImage = String(file.type || "").startsWith("image/");
    const textLike = /^(text\/|application\/json|application\/xml|application\/javascript)/.test(file.type || "") || /\.(txt|md|markdown|json|csv|tsv|xml|html|css|js|mjs|ts|tsx|jsx|log)$/i.test(file.name);
    next.push({
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      kind: isImage ? "图片" : "文件",
      text: textLike ? await readFileAsText(file) : "",
      dataUrl: isImage && file.size <= AI_MCP_IMAGE_INLINE_LIMIT ? await readFileAsDataUrl(file) : "",
    });
  }
  answerTestAttachments = [...answerTestAttachments, ...next].slice(0, AI_MCP_MAX_ATTACHMENTS);
  renderAnswerTestPage();
  showToast(`已添加 ${next.length} 个附件`);
}

function renderAnswerTestMessages(thread) {
  if (!thread?.messages?.length) {
    return `
      <div class="answer-empty-state">
        <strong>请输入测试内容。</strong>
      </div>
    `;
  }
  return thread.messages.map((message) => `
    <div class="answer-message ${message.role === "user" ? "user" : "assistant"}">
      ${message.role === "assistant" ? `<div class="answer-agent-name"><span>AI</span><strong>云梯智客</strong></div>` : ""}
      <div class="answer-bubble">${escapeHTML(message.text)}</div>
      ${message.role === "user" ? renderAnswerTestAttachmentChips(message.attachments || []) : ""}
      ${message.role === "assistant" ? renderAnswerTestSources(message) : ""}
    </div>
  `).join("");
}

function renderAnswerTestHistory(activeThread) {
  const keyword = answerTestSearchTerm.trim().toLowerCase();
  const threads = answerTestThreads
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .filter((thread) => !keyword || thread.title.toLowerCase().includes(keyword));
  if (!threads.length) {
    return `<div class="answer-history-empty">没有匹配的对话</div>`;
  }
  return threads.map((thread) => `
    <div class="answer-history-row ${thread.id === activeThread?.id ? "active" : ""}">
      <button class="answer-history-item" data-answer-thread="${escapeHTML(thread.id)}" title="${escapeHTML(thread.title)}">
        <span>${escapeHTML(thread.title)}</span>
      </button>
      <button class="answer-history-delete" data-answer-thread-delete="${escapeHTML(thread.id)}" aria-label="删除对话 ${escapeHTML(thread.title)}">
        <svg viewBox="0 0 24 24"><path d="M8 7V5.8C8 4.8 8.8 4 9.8 4h4.4c1 0 1.8.8 1.8 1.8V7h3v2h-1.2l-.8 10.2c-.1 1-.9 1.8-2 1.8H9c-1 0-1.9-.8-2-1.8L6.2 9H5V7h3Zm2 0h4V6h-4v1Zm-1.8 2 .8 10h6l.8-10H8.2Z" /></svg>
      </button>
    </div>
  `).join("");
}

function ensureActiveAnswerThread() {
  return getActiveAnswerTestThread();
}

function createAnswerTestThread() {
  activeAnswerTestThreadId = "";
  answerTestDraft = "";
  answerTestSearchTerm = "";
  answerTestAttachments = [];
}

function deleteAnswerTestThread(threadId) {
  const index = answerTestThreads.findIndex((thread) => thread.id === threadId);
  if (index < 0) return;
  const [deleted] = answerTestThreads.splice(index, 1);
  if (activeAnswerTestThreadId === deleted.id) {
    activeAnswerTestThreadId = "";
  }
  answerTestDraft = "";
  answerTestAttachments = [];
}

function getAnswerTestTitle(thread) {
  if (!thread?.messages.length) return "执行测试";
  return thread.title || "未命名对话";
}

function renderAnswerTestHistoryPanel(thread) {
  return answerTestThreads
    ? `
      <aside class="answer-history-panel ${answerHistoryCollapsed ? "collapsed" : ""}">
        <div class="answer-history-head">
          <button class="answer-history-collapse" data-answer-history-toggle aria-label="${answerHistoryCollapsed ? "展开历史对话" : "折叠历史对话"}" aria-expanded="${answerHistoryCollapsed ? "false" : "true"}">
            <svg viewBox="0 0 24 24"><path d="${answerHistoryCollapsed ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}" /></svg>
          </button>
          <strong>历史对话</strong>
          <button class="answer-history-new" data-answer-test-new aria-label="新建对话">
            <svg viewBox="0 0 24 24"><path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4Z" /></svg>
          </button>
        </div>
        <label class="answer-history-search">
          <svg viewBox="0 0 24 24"><path d="M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.41 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" /></svg>
          <input data-answer-history-search type="search" value="${escapeHTML(answerTestSearchTerm)}" placeholder="搜索对话" />
        </label>
        <div class="answer-history-list">${renderAnswerTestHistory(thread)}</div>
      </aside>
    `
    : "";
}

function renderAnswerTestPage() {
  const thread = ensureActiveAnswerThread();
  syncRail("agent");
  syncAgentConfigRoute("answer-test");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").classList.remove("ai-panel-collapsed");
  $("#pageView").innerHTML = `
    <div class="answer-test-shell ${answerHistoryCollapsed ? "history-collapsed" : ""}">
      <div class="answer-test-layout">
        ${renderAnswerTestHistoryPanel(thread)}
        <section class="answer-dialog ${thread?.messages?.length ? "" : "empty"}" aria-label="执行测试对话框">
          <header class="answer-dialog-header">
            <button class="back-button" data-agent-config-route="workflow-build" aria-label="返回工作流搭建">
              <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
            </button>
            <div>
              <span class="page-kicker">执行测试</span>
              <h2>${escapeHTML(getAnswerTestTitle(thread))}</h2>
            </div>
            <div class="answer-test-actions">
              <button data-answer-test-refresh aria-label="刷新回答">
                <svg viewBox="0 0 24 24"><path d="M17.7 6.3A8 8 0 1 0 20 12h-2a6 6 0 1 1-1.76-4.24L13 11h8V3l-3.3 3.3Z" /></svg>
              </button>
              <button data-answer-test-new aria-label="新建对话">
                <svg viewBox="0 0 24 24"><path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4Z" /></svg>
              </button>
            </div>
          </header>
          <div class="answer-dialog-scroll">
            ${renderAnswerTestMessages(thread)}
          </div>
          <div class="answer-composer">
            ${renderAnswerTestPendingAttachments()}
            <input id="answerTestAttachmentInput" type="file" accept="${AI_MCP_ATTACHMENT_ACCEPT}" multiple hidden />
            <div class="answer-input-box">
              <textarea data-answer-test-input rows="2" placeholder="请输入测试内容。">${escapeHTML(answerTestDraft)}</textarea>
              <button class="answer-attach-button" type="button" data-answer-test-attach aria-label="添加附件">
                <svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z" /></svg>
              </button>
              <button class="primary" data-answer-test-send>发送</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
  history.replaceState(null, "", "#agent-config/answer-test");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  $("#pageView .answer-dialog-scroll")?.scrollTo({ top: 9999 });
  return true;
}

function submitAnswerTestQuestion() {
  const input = $("[data-answer-test-input]");
  const question = input?.value.trim();
  const attachments = answerTestAttachments.map((file) => ({ ...file }));
  if (!question && !attachments.length) {
    showToast("请先输入要测试的问题或添加附件");
    return;
  }
  const questionText = question || "请根据附件内容测试回答来源。";
  let thread = getActiveAnswerTestThread();
  if (!thread) {
    const id = `answer-thread-${Date.now()}`;
    thread = {
      id,
      title: questionText.slice(0, 18),
      createdAt: Date.now(),
      messages: [],
    };
    answerTestThreads.unshift(thread);
    activeAnswerTestThreadId = id;
  }
  thread.title = questionText.slice(0, 18);
  thread.createdAt = Date.now();
  thread.messages.push({ role: "user", text: questionText, attachments });
  thread.messages.push(buildAnswerTestResponse(questionText));
  answerTestDraft = "";
  answerTestAttachments = [];
  renderAnswerTestPage();
  showToast("已生成回答来源追踪");
}

function getAgentConfigPointDesc(route, point) {
  const descriptions = {
    "answer-test": {
      "答案来源追踪": "定位每次回答命中了哪条资料、哪个销售技能、哪个客户标签，避免只看到 n8n 节点是否执行。",
      "标注好坏回答": "把答非所问、遗漏关键信息、越界承诺和优秀回答分开标注，形成可复盘样本。",
      "学习回流到技能/标签/资料中心": "把标注结果回流到对应配置项，让 AI 知道应该改话术、标签还是资料来源。",
    },
  };
  return descriptions[route]?.[point] || `${point}用于约束智能体配置，确保业务策略、执行流程和人工接管保持一致。`;
}

function getAgentConfigRows(route) {
  const rows = {
    "sales-skills": [["异议处理", "待完善", "补充价格和试听拒绝话术"], ["邀约策略", "已启用", "接入 A/B 测试"], ["禁用承诺", "已启用", "加入发布前检查"]],
    "smart-tags": [["意向标签", "已启用", "补充冲突优先级"], ["人工覆盖", "可用", "记录覆盖原因"], ["停止跟进", "待完善", "绑定群发 SOP"]],
    "knowledge-base": [["课程资料", "已连接", "补充引用版本"], ["价格政策", "待复核", "拆分城市差异"], ["检索测试", "待完善", "加入答案级测试"]],
    "answer-test": [["答非所问", "7 条待复盘", "标注后回流销售技能"], ["来源不准", "3 条待处理", "回流资料中心"], ["标签误判", "2 条待处理", "回流智能标签"]],
  };
  return rows[route] || [["配置完整性", "待检查", "运行一次测试"], ["发布状态", "草稿", "发布到测试渠道"], ["回滚点", "可用", "保留当前版本"]];
}

function renderN8nStatusShell() {
  return `
    <div class="n8n-console-layout">
      <section class="content-panel n8n-ui-panel">
        <div class="yunti-workflow-shell">
          <main class="yunti-workflow-main">
            <header>
              <div class="yunti-workflow-title">
                <span id="n8nConnectionBadge" class="status-tag warn">连接中</span>
                <h3 id="n8nWorkflowTitle">正在加载工作流</h3>
                <p id="n8nWorkflowDesc">预设模块已注册到 n8n 原生节点面板，点击画布加号后搜索“AI销售 模块”。</p>
              </div>
              <div class="yunti-workflow-compact">
                <div class="yunti-workflow-list" id="n8nWorkflowList">
                  <article class="loading">正在读取 n8n 工作流...</article>
                </div>
                <div class="yunti-workflow-meta" id="n8nWorkflowMeta"></div>
              </div>
              <div class="yunti-workflow-actions">
                <button data-n8n-refresh>同步 n8n</button>
                <button data-ai-sop-template="优化当前 SOP：保留业务节点，检查缺失的转人工、状态回写、定时跟进和发布审批。">AI 优化</button>
              </div>
            </header>
            <div class="yunti-workflow-body">
              <div class="n8n-native-crop" id="n8nNativeCrop">
                <div id="n8nUiFrame" class="n8n-mirror-frame" title="n8n 原生工作流画布镜像" data-workflow-id=""></div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <aside class="ai-mcp-panel" id="aiMcpPanel">
        <header>
          <div>
            <h3>AI 搭建助手</h3>
            <span>GPT-5.5 / n8n MCP</span>
          </div>
          <div class="ai-mcp-header-actions">
            <div class="ai-mcp-history-menu" id="aiMcpSessionList">
              <button type="button" data-ai-mcp-history-toggle aria-label="历史对话">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5a7 7 0 1 1-6.32 4H3l3.2-3.2L9.4 9H7.75A5 5 0 1 0 12 7v5l3.2 1.9" /></svg>
              </button>
              <div class="ai-mcp-session-list" data-ai-mcp-session-menu hidden></div>
            </div>
            <button type="button" data-ai-mcp-new-chat aria-label="新建对话">＋</button>
            <button type="button" data-ai-panel-toggle aria-label="折叠 AI 对话">›</button>
          </div>
        </header>
        <div class="ai-mcp-messages" id="aiMcpMessages"></div>
        <form class="ai-mcp-form" id="aiMcpForm">
          <textarea id="aiMcpInput" rows="4" placeholder="描述新 SOP 或改动目标，例如：试听后 5 分钟未回复自动跟进，投诉直接转人工..."></textarea>
          <input id="aiMcpAttachmentInput" type="file" accept="${AI_MCP_ATTACHMENT_ACCEPT}" multiple hidden />
          <div class="ai-mcp-attachments" id="aiMcpAttachments"></div>
          <div class="ai-mcp-actions">
            <button class="ai-mcp-attach-button" type="button" data-ai-mcp-attach>附件</button>
            <button type="submit">发送</button>
          </div>
        </form>
      </aside>
      <button class="ai-mcp-floating" data-ai-panel-toggle aria-label="打开 AI 对话">AI</button>
    </div>
  `;
}

const n8nFrontendMirrorMode = true;

const n8nMirrorWorkflow = {
  id: "JG0ZuC8hz9UScHu8",
  name: "测试草稿SOP-资料领取后5分钟跟进",
  active: false,
  updatedAt: "2026-06-30T11:36:55.000Z",
  settings: { executionOrder: "v1", binaryMode: "separate" },
  nodes: [
    { id: "chat-trigger", name: "Chat", type: "@n8n/n8n-nodes-langchain.chatTrigger", position: [80, 360], parameterKeys: ["public"] },
    { id: "ai-module", name: "Create a AI销售模块", type: "n8n-nodes-base.yuntiAiSalesModule", position: [250, 360], parameterKeys: ["moduleId", "input", "output"] },
    { id: "webhook-entry", name: "Webhook触发器", type: "n8n-nodes-base.webhook", position: [90, 535], parameterKeys: ["path", "method"] },
    { id: "source-check", name: "资料是否已领取", type: "n8n-nodes-base.if", position: [430, 430], parameterKeys: ["conditions"] },
    { id: "reply-plan", name: "生成回复和跟进计划", type: "n8n-nodes-base.yuntiReplyPlan", position: [600, 380], parameterKeys: ["tone", "policy"] },
    { id: "wait-5", name: "5分钟跟进", type: "n8n-nodes-base.yuntiFollowupWait", position: [790, 380], parameterKeys: ["waitSeconds"] },
    { id: "state-write", name: "写入客户跟进状态", type: "n8n-nodes-base.yuntiCustomerState", position: [985, 430], parameterKeys: ["status", "tag"] },
  ],
  connections: [
    { source: "Chat", target: "Create a AI销售模块", outputIndex: 0, inputIndex: 0, type: "main" },
    { source: "Webhook触发器", target: "资料是否已领取", outputIndex: 0, inputIndex: 0, type: "main" },
    { source: "Create a AI销售模块", target: "资料是否已领取", outputIndex: 0, inputIndex: 0, type: "main" },
    { source: "资料是否已领取", target: "生成回复和跟进计划", outputIndex: 0, inputIndex: 0, type: "main" },
    { source: "生成回复和跟进计划", target: "5分钟跟进", outputIndex: 0, inputIndex: 0, type: "main" },
    { source: "5分钟跟进", target: "写入客户跟进状态", outputIndex: 0, inputIndex: 0, type: "main" },
  ],
};

const n8nMirrorExecutions = [
  { id: "mirror-1001", workflowId: n8nMirrorWorkflow.id, status: "success", finished: true, startedAt: "2026-06-30T11:31:00.000Z" },
  { id: "mirror-1002", workflowId: n8nMirrorWorkflow.id, status: "success", finished: true, startedAt: "2026-06-30T11:33:00.000Z" },
  { id: "mirror-1003", workflowId: n8nMirrorWorkflow.id, status: "running", finished: false, startedAt: "2026-06-30T11:35:00.000Z" },
];

function getN8nNodeKind(node = {}) {
  const type = String(node.type || "");
  if (type.includes("webhook") || type.includes("trigger")) return "触发";
  if (type.includes("code")) return "代码";
  if (type.includes("dataTable")) return "数据";
  if (type.includes("httpRequest")) return "接口";
  if (type.includes("if") || type.includes("switch")) return "判断";
  if (type.includes("wait")) return "等待";
  if (type.includes("stickyNote")) return "说明";
  if (type.includes("openAi") || type.includes("lmChat") || type.includes("agent")) return "AI";
  return "动作";
}

function getN8nNodeClass(node = {}) {
  const kind = getN8nNodeKind(node);
  if (kind === "触发") return "trigger";
  if (kind === "AI") return "ai";
  if (kind === "判断") return "branch";
  if (kind === "等待") return "wait";
  if (kind === "数据") return "data";
  if (node.disabled) return "disabled";
  return "action";
}

function normalizeWorkflowLayout(nodes = [], connections = []) {
  const nodeWidth = 190;
  const nodeHeight = 88;
  const columnGap = 248;
  const rowGap = 122;
  const startX = 64;
  const startY = 64;
  const nodeNames = new Set(nodes.map((node) => node.name));
  const adjacency = new Map(nodes.map((node) => [node.name, []]));
  const indegree = new Map(nodes.map((node) => [node.name, 0]));
  connections.forEach((connection) => {
    if (!nodeNames.has(connection.source) || !nodeNames.has(connection.target)) return;
    adjacency.get(connection.source)?.push(connection.target);
    indegree.set(connection.target, (indegree.get(connection.target) || 0) + 1);
  });

  const originalOrder = new Map(
    [...nodes]
      .sort((a, b) => (a.position?.[0] || 0) - (b.position?.[0] || 0) || (a.position?.[1] || 0) - (b.position?.[1] || 0))
      .map((node, index) => [node.name, index])
  );
  const level = new Map(nodes.map((node) => [node.name, 0]));
  const sources = nodes
    .filter((node) => (indegree.get(node.name) || 0) === 0)
    .sort((a, b) => (originalOrder.get(a.name) || 0) - (originalOrder.get(b.name) || 0));
  const queue = sources.length ? [...sources.map((node) => node.name)] : [...nodes.map((node) => node.name)];

  for (let safety = 0; safety < nodes.length * 2 && queue.length; safety += 1) {
    const current = queue.shift();
    const currentLevel = level.get(current) || 0;
    (adjacency.get(current) || []).forEach((target) => {
      const nextLevel = currentLevel + 1;
      if ((level.get(target) || 0) < nextLevel) {
        level.set(target, nextLevel);
        queue.push(target);
      }
    });
  }

  const columns = new Map();
  nodes.forEach((node) => {
    const column = level.get(node.name) || 0;
    if (!columns.has(column)) columns.set(column, []);
    columns.get(column).push(node);
  });
  [...columns.values()].forEach((columnNodes) => {
    columnNodes.sort((a, b) => (a.position?.[1] || 0) - (b.position?.[1] || 0) || (originalOrder.get(a.name) || 0) - (originalOrder.get(b.name) || 0));
  });

  const laidOutNodes = nodes.map((node) => {
    const column = level.get(node.name) || 0;
    const row = columns.get(column).findIndex((item) => item.name === node.name);
    return {
      ...node,
      x: startX + column * columnGap,
      y: startY + Math.max(row, 0) * rowGap,
      width: nodeWidth,
      height: nodeHeight,
    };
  });
  const maxLevel = Math.max(...laidOutNodes.map((node) => Math.round((node.x - startX) / columnGap)), 0);
  const maxRows = Math.max(...[...columns.values()].map((columnNodes) => columnNodes.length), 1);
  const canvasWidth = Math.max(1080, startX * 2 + (maxLevel + 1) * columnGap + nodeWidth);
  const canvasHeight = Math.max(680, startY * 2 + maxRows * rowGap + nodeHeight);
  return { nodes: laidOutNodes, canvasWidth, canvasHeight, nodeWidth, nodeHeight };
}

function renderWorkflowCanvas(workflow) {
  const canvas = $("#n8nWorkflowCanvas");
  if (!canvas) return;
  const sourceNodes = Array.isArray(workflow?.nodes) ? workflow.nodes : [];
  if (!sourceNodes.length) {
    canvas.innerHTML = `<div class="yunti-workflow-empty">这个 n8n 工作流还没有节点。</div>`;
    return;
  }
  const visibleNodes = sourceNodes
    .filter((node) => getN8nNodeKind(node) !== "说明")
    .slice(0, 80);
  const visibleNodeNames = new Set(visibleNodes.map((node) => node.name));
  const visibleConnections = (workflow.connections || []).filter((connection) => visibleNodeNames.has(connection.source) && visibleNodeNames.has(connection.target));
  const layout = normalizeWorkflowLayout(visibleNodes, visibleConnections);
  const nodeByName = new Map(layout.nodes.map((node) => [node.name, node]));
  const lines = visibleConnections
    .map((connection) => {
      const source = nodeByName.get(connection.source);
      const target = nodeByName.get(connection.target);
      if (!source || !target) return "";
      const x1 = source.x + source.width;
      const y1 = source.y + source.height / 2;
      const x2 = target.x;
      const y2 = target.y + target.height / 2;
      const mid = Math.max(36, Math.abs(x2 - x1) / 2);
      return `<path d="M ${x1} ${y1} C ${x1 + mid} ${y1}, ${x2 - mid} ${y2}, ${x2} ${y2}" />`;
    })
    .join("");
  canvas.innerHTML = `
    <div class="yunti-workflow-board" style="width:${layout.canvasWidth}px;height:${layout.canvasHeight}px">
      <svg class="yunti-workflow-lines" width="${layout.canvasWidth}" height="${layout.canvasHeight}" viewBox="0 0 ${layout.canvasWidth} ${layout.canvasHeight}" aria-hidden="true">${lines}</svg>
      ${layout.nodes.map((node) => `
        <button class="yunti-node ${getN8nNodeClass(node)}" style="left:${node.x}px;top:${node.y}px;width:${node.width}px" data-n8n-node="${escapeHTML(node.name)}">
          <span>${getN8nNodeKind(node)}</span>
          <strong>${escapeHTML(node.name)}</strong>
          <em>${node.disabled ? "已停用" : "运行中"} · ${node.parameterKeys?.length || 0} 项配置</em>
        </button>
      `).join("")}
    </div>
  `;
}

function renderWorkflowSide(workflows = [], activeId = "") {
  const list = $("#n8nWorkflowList");
  if (!list) return;
  list.innerHTML = workflows.length
    ? workflows.map((workflow) => `
      <button class="${workflow.id === activeId ? "active" : ""}" data-n8n-workflow="${workflow.id}">
        <strong>${escapeHTML(workflow.name)}</strong>
        <span>${workflow.nodes} 个节点 · ${workflow.active ? "已启用" : "未启用"}</span>
      </button>
    `).join("")
    : `<article class="loading">没有读取到 n8n 工作流。</article>`;
}

function renderWorkflowMeta(workflow, executions = []) {
  const meta = $("#n8nWorkflowMeta");
  if (!meta || !workflow) return;
  const successCount = executions.filter((item) => item.finished && item.status === "success").length;
  meta.innerHTML = `
    <article><span>节点数</span><strong>${workflow.nodes?.length || 0}</strong></article>
    <article><span>连接数</span><strong>${workflow.connections?.length || 0}</strong></article>
    <article><span>最近执行</span><strong>${executions.length || 0}</strong></article>
    <article><span>成功记录</span><strong>${successCount}</strong></article>
  `;
}

function getN8nMirrorNodeIcon(node = {}) {
  const kind = getN8nNodeKind(node);
  if (kind === "触发") return "✦";
  if (kind === "AI") return "AI";
  if (kind === "判断") return "?";
  if (kind === "等待") return "⏱";
  if (kind === "数据") return "DB";
  return "◆";
}

function renderN8nMirrorCanvas(workflow = n8nMirrorWorkflow) {
  const sourceNodes = Array.isArray(workflow.nodes) ? workflow.nodes : [];
  const visibleNodes = sourceNodes.filter((node) => getN8nNodeKind(node) !== "说明");
  const visibleNodeNames = new Set(visibleNodes.map((node) => node.name));
  const visibleConnections = (workflow.connections || [])
    .filter((connection) => visibleNodeNames.has(connection.source) && visibleNodeNames.has(connection.target));
  const layout = normalizeWorkflowLayout(visibleNodes, visibleConnections);
  const nodeByName = new Map(layout.nodes.map((node) => [node.name, node]));
  const lines = visibleConnections.map((connection) => {
    const source = nodeByName.get(connection.source);
    const target = nodeByName.get(connection.target);
    if (!source || !target) return "";
    const x1 = source.x + source.width;
    const y1 = source.y + source.height / 2;
    const x2 = target.x;
    const y2 = target.y + target.height / 2;
    const mid = Math.max(42, Math.abs(x2 - x1) / 2);
    return `<path d="M ${x1} ${y1} C ${x1 + mid} ${y1}, ${x2 - mid} ${y2}, ${x2} ${y2}" />`;
  }).join("");

  return `
    <div class="n8n-mirror-canvas-scroll">
      <div class="n8n-mirror-board" style="width:${layout.canvasWidth}px;height:${layout.canvasHeight}px">
        <svg class="n8n-mirror-lines" width="${layout.canvasWidth}" height="${layout.canvasHeight}" viewBox="0 0 ${layout.canvasWidth} ${layout.canvasHeight}" aria-hidden="true">${lines}</svg>
        ${layout.nodes.map((node) => `
          <button class="n8n-mirror-node ${getN8nNodeClass(node)}" style="left:${node.x}px;top:${node.y}px;width:${node.width}px" data-n8n-node="${escapeHTML(node.name)}">
            <span>${escapeHTML(getN8nMirrorNodeIcon(node))}</span>
            <strong>${escapeHTML(node.name)}</strong>
            <em>${getN8nNodeKind(node)} · ${node.parameterKeys?.length || 0} 项配置</em>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderN8nMirrorFrame(workflow = n8nMirrorWorkflow) {
  const frame = $("#n8nUiFrame");
  if (!frame) return;
  frame.dataset.workflowId = workflow.id || "";
  frame.innerHTML = `
    <section class="n8n-mirror-app" aria-label="n8n 原生编辑器镜像">
      <header class="n8n-mirror-topbar">
        <div class="n8n-mirror-title">
          <strong>${escapeHTML(workflow.name)}</strong>
          <span>+ Add tag</span>
        </div>
        <nav class="n8n-mirror-tabs" aria-label="n8n 编辑器标签页">
          <button class="active">Editor</button>
          <button>执行记录</button>
          <button>Evaluations</button>
        </nav>
        <div class="n8n-mirror-actions">
          <span>0 / 1</span>
          <button>Publish</button>
          <button aria-label="更多">•••</button>
        </div>
      </header>
      <div class="n8n-mirror-workspace">
        ${renderN8nMirrorCanvas(workflow)}
        <aside class="n8n-mirror-node-panel" aria-label="下一步要做什么">
          <h3>下一步要做什么？</h3>
          <label>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 4a6.5 6.5 0 0 1 5.2 10.4l4.4 4.4-1.4 1.4-4.4-4.4A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" /></svg>
            <input type="search" placeholder="搜索节点..." aria-label="搜索节点" />
          </label>
          <div class="n8n-mirror-category-list">
            ${[
              ["AI销售模块", "RAG、Playbook、客户状态、转人工、跟进任务等销售业务模块", "▣"],
              ["AI", "构建自主智能体、总结或检索文档等。", "AI"],
              ["应用动作", "调用 Google Sheets、Telegram、Notion 等应用或服务", "◎"],
              ["数据处理", "处理、筛选或转换数据", "／"],
              ["流程控制", "分支、合并、循环等流程控制。", "⌘"],
              ["核心节点", "运行代码、发送 HTTP 请求、设置 Webhook 等。", "▤"],
              ["添加另一个触发器", "触发器用于启动工作流；一个工作流可以有多个触发器。", "⚡"],
            ].map(([title, detail, icon]) => `
              <button type="button" class="${title === "AI销售模块" ? "active" : ""}">
                <span>${escapeHTML(icon)}</span>
                <strong>${escapeHTML(title)}</strong>
                <em>${escapeHTML(detail)}</em>
                <b>›</b>
              </button>
            `).join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function loadAiMcpState() {
  try {
    const saved = JSON.parse(localStorage.getItem(AI_MCP_STORAGE_KEY) || "null");
    if (Array.isArray(saved) && saved.some((message) => message?.content)) {
      return [createAiMcpSession(normalizeAiMcpMessages(saved), "历史对话")];
    }
    if (Array.isArray(saved?.sessions) && saved.sessions.length) {
      const sessions = saved.sessions
        .map((session) => ({
          id: session?.id || createAiMcpSession().id,
          title: session?.title || buildAiMcpSessionTitle(session?.messages),
          createdAt: session?.createdAt || new Date().toISOString(),
          updatedAt: session?.updatedAt || session?.createdAt || new Date().toISOString(),
          messages: normalizeAiMcpMessages(session?.messages),
        }))
        .filter((session) => session.messages.length);
      if (sessions.length) return sessions.slice(0, 20);
    }
  } catch {
    // Ignore corrupt local chat history and fall back to the intro message.
  }
  return [createAiMcpSession()];
}

function isTransientAiMcpConnectionError(message) {
  return message?.role === "assistant" && /^连接失败：(Failed to fetch|fetch failed)/.test(String(message.content || ""));
}

function normalizeAiMcpMessages(messages = []) {
  const normalized = Array.isArray(messages)
    ? messages
        .filter((message) => ["assistant", "user"].includes(message?.role) && message.content)
        .filter((message) => !isTransientAiMcpConnectionError(message))
        .map((message) => ({ role: message.role, content: String(message.content) }))
        .slice(-40)
    : [];
  return normalized.length ? normalized : initialAiMcpMessages.map((message) => ({ ...message }));
}

function buildAiMcpSessionTitle(messages = []) {
  const firstUserMessage = Array.isArray(messages)
    ? messages.find((message) => message?.role === "user" && message.content)
    : null;
  const title = String(firstUserMessage?.content || "新对话").replace(/\s+/g, " ").trim();
  return title.length > 24 ? `${title.slice(0, 24)}...` : title;
}

function createAiMcpSession(messages = initialAiMcpMessages.map((message) => ({ ...message })), title = "") {
  const now = new Date().toISOString();
  const normalizedMessages = normalizeAiMcpMessages(messages);
  return {
    id: `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: title || buildAiMcpSessionTitle(normalizedMessages),
    createdAt: now,
    updatedAt: now,
    messages: normalizedMessages,
  };
}

function loadAiMcpActiveSessionId(sessions = []) {
  try {
    const savedId = localStorage.getItem(AI_MCP_ACTIVE_SESSION_KEY);
    if (sessions.some((session) => session.id === savedId)) return savedId;
  } catch {
    // Ignore storage errors and fall back to the newest local session.
  }
  return sessions[0]?.id || "";
}

function getActiveAiMcpSession() {
  return aiMcpSessions.find((session) => session.id === aiMcpActiveSessionId) || aiMcpSessions[0] || null;
}

function saveAiMcpState() {
  try {
    const activeSession = getActiveAiMcpSession();
    if (activeSession) {
      activeSession.messages = normalizeAiMcpMessages(aiMcpMessages);
      activeSession.title = buildAiMcpSessionTitle(activeSession.messages);
      activeSession.updatedAt = new Date().toISOString();
    }
    aiMcpSessions = aiMcpSessions
      .slice()
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 20);
    localStorage.setItem(AI_MCP_STORAGE_KEY, JSON.stringify({ sessions: aiMcpSessions }));
    localStorage.setItem(AI_MCP_ACTIVE_SESSION_KEY, aiMcpActiveSessionId);
  } catch {
    // Chat persistence is best-effort; the assistant should still work.
  }
}

function loadAiMcpPendingState() {
  try {
    const pending = JSON.parse(localStorage.getItem(AI_MCP_PENDING_KEY) || "null");
    if (pending?.content && pending?.startedAt) return pending;
  } catch {
    // Ignore corrupt pending state.
  }
  return null;
}

function setAiMcpPendingState(content) {
  aiMcpPendingState = {
    content,
    sessionId: aiMcpActiveSessionId,
    workflowId: getActiveN8nWorkflowId(),
    startedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(AI_MCP_PENDING_KEY, JSON.stringify(aiMcpPendingState));
  } catch {
    // Pending-state persistence is best-effort.
  }
}

function clearAiMcpPendingState() {
  aiMcpPendingState = null;
  try {
    localStorage.removeItem(AI_MCP_PENDING_KEY);
  } catch {
    // Ignore storage errors.
  }
}

function getActiveN8nWorkflowId() {
  const activeButton = document.querySelector("[data-n8n-workflow].active");
  if (activeButton?.dataset?.n8nWorkflow) return activeButton.dataset.n8nWorkflow;
  const mirrorWorkflowId = $("#n8nUiFrame")?.dataset?.workflowId || "";
  if (mirrorWorkflowId) return mirrorWorkflowId;
  const frameSrc = $("#n8nUiFrame")?.getAttribute("src") || "";
  const match = frameSrc.match(/\/workflow\/([^/?#]+)/);
  if (match) return decodeURIComponent(match[1]);
  return new URLSearchParams(location.search).get("workflowId") || "";
}

function syncN8nWorkflowUrl(workflowId = "") {
  if (!workflowId || location.hash !== "#n8n") return;
  const params = new URLSearchParams(location.search);
  params.set("workflowId", workflowId);
  history.replaceState(null, "", `?${params.toString()}#n8n`);
}

function formatFileSize(size = 0) {
  if (size >= 1_000_000) return `${(size / 1_000_000).toFixed(1)} MB`;
  if (size >= 1_000) return `${Math.ceil(size / 1_000)} KB`;
  return `${size} B`;
}

function isAiMcpAcceptedFile(file) {
  const extension = `.${String(file.name || "").split(".").pop()?.toLowerCase() || ""}`;
  return AI_MCP_ATTACHMENT_ACCEPT.split(",").includes(extension) || String(file.type || "").startsWith("image/");
}

function readFileAsText(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || "").slice(0, AI_MCP_TEXT_ATTACHMENT_LIMIT));
    reader.onerror = () => resolve("");
    reader.readAsText(file);
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function renderAiMcpAttachments() {
  const holder = $("#aiMcpAttachments");
  if (!holder) return;
  holder.innerHTML = aiMcpAttachments.length
    ? aiMcpAttachments.map((file, index) => `
      <span class="ai-mcp-attachment-chip">
        <strong>${escapeHTML(file.name)}</strong>
        <em>${escapeHTML(file.kind)} · ${escapeHTML(formatFileSize(file.size))}</em>
        <button type="button" data-ai-mcp-remove-attachment="${index}" aria-label="移除附件 ${escapeHTML(file.name)}">×</button>
      </span>
    `).join("")
    : "";
}

function summarizeAiMcpAttachments(files = aiMcpAttachments) {
  if (!files.length) return "";
  return [
    "附件：",
    ...files.map((file, index) => `${index + 1}. ${file.name}（${file.type || file.kind}，${formatFileSize(file.size)}）${file.text ? `\n${file.text.slice(0, 1200)}` : file.dataUrl ? "\n[图片已随请求上传，可直接分析画面内容]" : "\n[此文件已上传，但只能读取元信息]"}`),
  ].join("\n");
}

async function processAiMcpAttachments(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  const accepted = files.filter(isAiMcpAcceptedFile);
  if (accepted.length !== files.length) showToast("已忽略不支持的附件格式");
  const room = Math.max(0, AI_MCP_MAX_ATTACHMENTS - aiMcpAttachments.length);
  const selected = accepted.slice(0, room);
  if (accepted.length > room) showToast(`一次最多上传 ${AI_MCP_MAX_ATTACHMENTS} 个文件`);
  const next = [];
  for (const file of selected) {
    const isImage = String(file.type || "").startsWith("image/");
    const textLike = /^(text\/|application\/json|application\/xml|application\/javascript)/.test(file.type || "") || /\.(txt|md|markdown|json|csv|tsv|xml|html|css|js|mjs|ts|tsx|jsx|log)$/i.test(file.name);
    next.push({
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      kind: isImage ? "图片" : "文件",
      text: textLike ? await readFileAsText(file) : "",
      dataUrl: isImage && file.size <= AI_MCP_IMAGE_INLINE_LIMIT ? await readFileAsDataUrl(file) : "",
    });
  }
  aiMcpAttachments = [...aiMcpAttachments, ...next].slice(0, AI_MCP_MAX_ATTACHMENTS);
  renderAiMcpAttachments();
}

function renderAiMcpBuffer() {
  return `
    <div class="ai-mcp-buffer" aria-label="AI 正在处理" role="status">
      <i></i><i></i><i></i><i></i>
    </div>
  `;
}

function compactAiMcpSessionTitle(title = "新对话") {
  const normalized = String(title || "新对话").replace(/\s+/g, "");
  return normalized.slice(0, 8);
}

function renderAiMcpSessions() {
  const menu = $("[data-ai-mcp-session-menu]");
  if (!menu) return;
  menu.hidden = !aiMcpHistoryOpen;
  const orderedSessions = aiMcpSessions
    .slice()
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  menu.innerHTML = orderedSessions.map((session) => `
    <button
      type="button"
      class="${session.id === aiMcpActiveSessionId ? "active" : ""}"
      data-ai-mcp-session="${escapeHTML(session.id)}"
      title="${escapeHTML(session.title)}"
    >
      <strong>${escapeHTML(compactAiMcpSessionTitle(session.title))}</strong>
    </button>
  `).join("");
}

function switchAiMcpSession(sessionId) {
  const nextSession = aiMcpSessions.find((session) => session.id === sessionId);
  if (!nextSession) return;
  saveAiMcpState();
  aiMcpActiveSessionId = nextSession.id;
  aiMcpMessages = nextSession.messages.map((message) => ({ ...message }));
  aiMcpStreamingMessage = "";
  aiMcpStatusText = "";
  aiMcpAttachments = [];
  aiMcpHistoryOpen = false;
  saveAiMcpState();
  renderAiMcpSessions();
  renderAiMcpAttachments();
  renderAiMcpMessages(false);
}

function startNewAiMcpSession() {
  saveAiMcpState();
  const session = createAiMcpSession();
  aiMcpSessions = [session, ...aiMcpSessions].slice(0, 20);
  aiMcpActiveSessionId = session.id;
  aiMcpMessages = session.messages.map((message) => ({ ...message }));
  aiMcpStreamingMessage = "";
  aiMcpStatusText = "";
  aiMcpAttachments = [];
  aiMcpHistoryOpen = false;
  saveAiMcpState();
  renderAiMcpSessions();
  renderAiMcpAttachments();
  renderAiMcpMessages(false);
  $("#aiMcpInput")?.focus();
}

function getAiMcpStatusText(payload = {}) {
  if (payload.phase === "tool") {
    if (payload.tool === "yunti_compile_sales_sop") return "正在修改当前画布";
    if (payload.tool === "yunti_patch_workflow_nodes") return "正在写入当前工作流";
    if (payload.tool === "yunti_get_execution_detail") return "正在读取执行细节";
    return "正在调用工作流工具";
  }
  return "正在分析你的指令";
}

function renderAiMcpMessages(loading = false) {
  const list = $("#aiMcpMessages");
  if (!list) return;
  const pendingAge = aiMcpPendingState?.startedAt
    ? new Date(aiMcpPendingState.startedAt).toLocaleString("zh-CN")
    : "";
  const showPendingState = aiMcpPendingState && (!aiMcpPendingState.sessionId || aiMcpPendingState.sessionId === aiMcpActiveSessionId);
  list.innerHTML = `
    ${aiMcpMessages.map((message) => `
      <div class="ai-mcp-message ${message.role}">
        <span>${message.role === "user" ? "你" : "AI"}</span>
        <p>${escapeHTML(message.content).replaceAll("\n", "<br />")}</p>
      </div>
    `).join("")}
    ${aiMcpStreamingMessage ? `
      <div class="ai-mcp-message assistant streaming">
        <span>AI</span>
        <p>${escapeHTML(aiMcpStreamingMessage).replaceAll("\n", "<br />")}</p>
      </div>
    ` : ""}
    ${showPendingState && !loading ? `
      <div class="ai-mcp-message assistant loading">
        <span>AI</span>
        <p>上次请求未完成${pendingAge ? `（${escapeHTML(pendingAge)}）` : ""}，已保留对话和工作流上下文。你可以继续发“重试上一次”或直接粘贴 n8n 执行日志让我排查。</p>
      </div>
    ` : ""}
    ${loading && !aiMcpStreamingMessage ? `<div class="ai-mcp-message assistant loading"><span>AI</span>${renderAiMcpBuffer()}${aiMcpStatusText ? `<p class="ai-mcp-status-text">${escapeHTML(aiMcpStatusText)}</p>` : ""}</div>` : ""}
  `;
  list.scrollTop = list.scrollHeight;
}

async function readAiMcpStream(response) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let finalData = null;
  const toolResults = [];
  const handleEvent = (eventName, payload) => {
    if (eventName === "status") {
      aiMcpStatusText = getAiMcpStatusText(payload);
      renderAiMcpMessages(true);
      return;
    }
    if (eventName === "chunk") {
      aiMcpStreamingMessage += payload.delta || "";
      renderAiMcpMessages(true);
      return;
    }
    if (eventName === "tool") {
      toolResults.push(payload);
      return;
    }
    if (eventName === "done") {
      finalData = payload;
      return;
    }
    if (eventName === "error") {
      throw new Error(payload.message || "AI 请求失败");
    }
  };
  const drain = (force = false) => {
    const parts = buffer.split("\n\n");
    buffer = force ? "" : parts.pop() || "";
    for (const part of parts) {
      const lines = part.split(/\r?\n/);
      const eventName = lines.find((line) => line.startsWith("event:"))?.slice(6).trim() || "message";
      const dataText = lines
        .filter((line) => line.startsWith("data:"))
        .map((line) => line.slice(5).trim())
        .join("\n");
      if (!dataText) continue;
      handleEvent(eventName, JSON.parse(dataText));
    }
  };
  while (true) {
    const { value, done } = await reader.read();
    if (value) {
      buffer += decoder.decode(value, { stream: !done });
      drain(false);
    }
    if (done) break;
  }
  if (buffer.trim()) {
    buffer += "\n\n";
    drain(true);
  }
  return {
    ok: true,
    reply: finalData?.reply || aiMcpStreamingMessage,
    workflowId: finalData?.workflowId || "",
    toolResults: finalData?.toolResults || toolResults,
  };
}

async function submitAiMcpPrompt() {
  const input = $("#aiMcpInput");
  const text = input?.value.trim();
  const attachments = aiMcpAttachments.map((item) => ({ ...item }));
  if (!text && !attachments.length) {
    showToast("先输入要搭建的工作流目标，或上传附件");
    return;
  }
  input.value = "";
  aiMcpAttachments = [];
  renderAiMcpAttachments();
  const attachmentSummary = summarizeAiMcpAttachments(attachments);
  const userContent = [text || "请根据附件内容操作当前工作流。", attachmentSummary].filter(Boolean).join("\n\n");
  aiMcpMessages.push({ role: "user", content: userContent });
  saveAiMcpState();
  renderAiMcpSessions();
  setAiMcpPendingState(userContent);
  aiMcpStreamingMessage = "";
  aiMcpStatusText = "正在分析你的指令";
  renderAiMcpMessages(true);
  try {
    const response = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "content-type": "application/json", "Accept": "text/event-stream" },
      body: JSON.stringify({ messages: aiMcpMessages, attachments, workflowId: getActiveN8nWorkflowId() }),
    });
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("text/event-stream")
      ? await readAiMcpStream(response)
      : await response.json();
    if (!data.ok) throw new Error(data.message || "AI 请求失败");
    const toolSummary = Array.isArray(data.toolResults) && data.toolResults.length
      ? `\n\n工具调用：${data.toolResults.map((item) => `${item.tool}${item.ok ? " 成功" : " 失败"}${item.summary ? `：${item.summary}` : ""}`).join("；")}`
      : "";
    aiMcpStreamingMessage = "";
    aiMcpMessages.push({ role: "assistant", content: `${data.reply || "已完成。"}${toolSummary}` });
    saveAiMcpState();
    renderAiMcpSessions();
    clearAiMcpPendingState();
    if (data.workflowId) {
      showToast("已更新 n8n 工作流节点，正在刷新画布");
      loadN8nLiveData(data.workflowId);
    }
  } catch (error) {
    aiMcpStreamingMessage = "";
    aiMcpStatusText = "";
    aiMcpMessages.push({ role: "assistant", content: `连接失败：${error.message}` });
    saveAiMcpState();
    renderAiMcpSessions();
    clearAiMcpPendingState();
  }
  aiMcpStatusText = "";
  renderAiMcpMessages(false);
}

async function loadN8nLiveData(requestedWorkflowId = "") {
  const badge = $("#n8nConnectionBadge");
  const frame = $("#n8nUiFrame");
  const title = $("#n8nWorkflowTitle");
  const desc = $("#n8nWorkflowDesc");
  if (!badge && !frame && !title && !desc) return;
  const setState = (label, className) => {
    if (!badge) return;
    badge.textContent = label;
    badge.className = `status-tag ${className}`;
  };
  const renderMirror = () => {
    const workflow = { ...n8nMirrorWorkflow, id: requestedWorkflowId || n8nMirrorWorkflow.id };
    renderWorkflowSide([{
      id: workflow.id,
      name: workflow.name,
      active: workflow.active,
      updatedAt: workflow.updatedAt,
      createdAt: workflow.updatedAt,
      nodes: workflow.nodes.length,
    }], workflow.id);
    renderN8nMirrorFrame(workflow);
    renderWorkflowMeta(workflow, n8nMirrorExecutions);
    syncN8nWorkflowUrl(workflow.id);
    if (title) title.textContent = workflow.name;
    if (desc) desc.textContent = "前端镜像模式 · 不依赖真实 n8n 运行 · 已还原当前本地 n8n 编辑器设定";
    setState("镜像展示", "live");
  };
  if (n8nFrontendMirrorMode) {
    renderMirror();
    return;
  }
  const setNativeFrame = (config, workflowId = "", forceReload = false) => {
    const uiUrl = config?.uiUrl || "http://127.0.0.1:5678";
    const nativeUrl = workflowId ? `${uiUrl}/workflow/${workflowId}` : `${uiUrl}/workflow/new`;
    if (frame) {
      const currentSrc = frame.getAttribute("src") || "";
      if (forceReload && currentSrc.includes(`/workflow/${workflowId}`)) {
        frame.src = "about:blank";
        requestAnimationFrame(() => {
          frame.src = `${nativeUrl}?_yuntiRefresh=${Date.now()}`;
        });
      } else if (frame.src !== nativeUrl && currentSrc !== nativeUrl) {
        frame.src = nativeUrl;
      }
    }
    return nativeUrl;
  };

  try {
    const config = await fetch("/api/n8n/config", { cache: "no-store" }).then((response) => response.json());
    const workflows = await fetch("/api/n8n/workflows", { cache: "no-store" })
      .then((response) => response.json())
      .catch(() => ({ workflows: [] }));
    const allWorkflows = workflows.workflows || [];
    const firstWorkflow = allWorkflows.find((workflow) => workflow.id === requestedWorkflowId) || allWorkflows[0];
    renderWorkflowSide(allWorkflows, firstWorkflow?.id || "");
    if (!config.configured) {
      setState("待配置", "warn");
      return;
    }
    if (!firstWorkflow?.id) {
      setNativeFrame(config);
      if (title) title.textContent = "n8n 原生编辑器";
      if (desc) desc.textContent = "暂未通过 REST 读取到工作流，已保留 n8n 原生新建画布入口。";
      setState("原生可用", "live");
      return;
    }

    const [workflowResponse, executionResponse] = await Promise.all([
      fetch(`/api/n8n/workflow?id=${encodeURIComponent(firstWorkflow.id)}`, { cache: "no-store" }).then((response) => response.json()),
      fetch(`/api/n8n/executions?workflowId=${encodeURIComponent(firstWorkflow.id)}`, { cache: "no-store" })
        .then((response) => response.json())
        .catch(() => ({ executions: [] })),
    ]);
    if (!workflowResponse.ok) throw new Error(workflowResponse.message || "工作流读取失败");
    const workflow = workflowResponse.workflow;
    setNativeFrame(config, firstWorkflow.id, Boolean(requestedWorkflowId));
    syncN8nWorkflowUrl(firstWorkflow.id);
    if (title) title.textContent = workflow.name || "未命名工作流";
    if (desc) desc.textContent = `${workflow.active ? "已启用" : "未启用"} · 最近更新 ${workflow.updatedAt ? new Date(workflow.updatedAt).toLocaleString("zh-CN") : "未知"} · n8n 原生画布`;
    renderWorkflowMeta(workflow, executionResponse.executions || []);
    setState("已连接", "live");
  } catch (error) {
    renderMirror();
  }
}

function renderN8nConsolePage() {
  const requestedWorkflowId = new URLSearchParams(location.search).get("workflowId") || "";
  syncRail("agent");
  $(".app-shell")?.classList.remove("sidebar-collapsed");
  syncAgentConfigRoute("workflow-build");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").innerHTML = renderN8nStatusShell();
  $("#pageView").classList.toggle("ai-panel-collapsed", window.innerWidth <= 1060);
  const query = requestedWorkflowId ? `?workflowId=${encodeURIComponent(requestedWorkflowId)}` : location.search;
  history.replaceState(null, "", `${query || ""}#n8n`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  loadN8nLiveData(requestedWorkflowId);
  renderDroppedBusinessNodes();
  renderAiMcpSessions();
  renderAiMcpMessages(false);
  renderAiMcpAttachments();
  return true;
}

function renderPage(section) {
  if (section === "report") {
    section = "quality";
  }
  if (["content", "guidance", "attributes", "escalation", "procedures"].includes(section)) {
    section = "n8n";
  }
  if (section === "n8n") {
    return renderN8nConsolePage();
  }
  if (section === "simple") {
    renderWorkflowsPage();
    history.replaceState(null, "", "#workflows");
    return true;
  }
  if (section === "operator") {
    renderOperatorPage();
    return true;
  }
  if (section === "workflows") {
    renderWorkflowsPage();
    return true;
  }
  if (section === "settings") {
    renderDataConnectorsPage();
    return true;
  }
  if (section === "report" || section === "quality") {
    renderIterationPage(section);
    return true;
  }
  if (intercomPages[section]) {
    renderIntercomPage(section);
    return true;
  }
  const page = pageData[section];
  if (!page) return false;
  syncRail("agent");
  syncNav(section);
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  $("#pageView").innerHTML = `
    <div class="page-hero">
      <button class="back-button" data-section="get-started" aria-label="返回快速开始">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">${page.kicker}</span>
        <h2>${page.title}</h2>
        <p>${page.desc}</p>
      </div>
      <div class="page-actions">
        ${page.actions.map((action, index) => `<button class="${index === 0 ? "primary" : ""}" data-page-action="${section}|${action}">${action}</button>`).join("")}
      </div>
    </div>
    <div class="metric-row">
      ${page.metrics.map(([label, value]) => `<div class="mini-metric"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
    <div class="content-grid">
      <section class="content-panel">
        <header>
          <h3>${page.recordsTitle}</h3>
          <span>${page.records.length} 项</span>
        </header>
        <div class="record-list">
          ${page.records.map(([title, status, desc, tags], index) => `
            <button class="record-item" data-detail="${section}|record|${index}">
              <span class="record-title">
                ${title}
                <span class="status-tag ${status.includes("启用") || status.includes("连接") || status.includes("运行") || status.includes("通过") ? "live" : status.includes("待") || status.includes("复核") || status.includes("测试") ? "warn" : ""}">${status}</span>
              </span>
              <p>${desc}</p>
              <span class="tag-row">${tags.map((tag) => `<span class="soft-tag">${tag}</span>`).join("")}</span>
            </button>
          `).join("")}
        </div>
      </section>
      <section class="content-panel">
        <header>
          <h3>${page.tableTitle}</h3>
          <span>可点击查看</span>
        </header>
        <table class="inline-table">
          <thead>
            <tr>${page.table[0].map((head) => `<th>${head}</th>`).join("")}<th>详情</th></tr>
          </thead>
          <tbody>
            ${page.table.slice(1).map((row, index) => `
              <tr>
                ${row.map((cell) => `<td>${cell}</td>`).join("")}
                <td><button data-detail="${section}|table|${index}">打开</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
  history.replaceState(null, "", `#${section}`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function renderIntercomPage(section) {
  const page = intercomPages[section];
  syncRail("agent");
  syncNav(section);
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  const heroVisuals = {
    attributes: `
      <div class="hero-visual-card attributes-visual">
        <div class="visual-window-bar"><span></span><span></span><span></span></div>
        <strong>客户属性</strong>
        <div class="attribute-chip-grid">
          <span>孩子年级</span><span>二年级</span>
          <span>英语基础</span><span>字母音已学</span>
          <span>来源渠道</span><span>官网咨询</span>
          <span>顾问归属</span><span>陈顾问</span>
        </div>
        <em>自动生成转人工摘要</em>
      </div>
    `,
    guidance: `
      <div class="hero-visual-card guidance-visual">
        <div class="mini-chat-row user">孩子适合自然拼读吗？</div>
        <div class="mini-chat-row agent">先确认年级和基础，再推荐试听。</div>
        <div class="guidance-rule"><b>技能规则</b><span>称呼家长为“您” · 避免压迫感</span></div>
      </div>
    `,
    escalation: `
      <div class="hero-visual-card escalation-visual">
        <strong>转人工判断</strong>
        <div class="decision-path"><span>价格特批</span><b>→</b><span>投诉风险</span><b>→</b><span>顾问接入</span></div>
        <em>携带上下文、标签和客户资料</em>
      </div>
    `,
    procedures: `
      <div class="hero-visual-card procedures-visual">
        <strong>试听预约流程</strong>
        <ol><li>收集年级</li><li>判断基础</li><li>选择时间</li><li>创建顾问任务</li></ol>
      </div>
    `,
    content: `
      <div class="hero-visual-card content-visual">
        <strong>知识命中</strong>
        <div class="doc-row"><span>自然拼读介绍</span><b>已上线</b></div>
        <div class="doc-row"><span>价格优惠政策</span><b>需复核</b></div>
        <div class="doc-row"><span>售后调课规则</span><b>已上线</b></div>
      </div>
    `,
    test: `
      <div class="hero-visual-card test-visual">
        <strong>批量测试</strong>
        <div class="score-ring">88%</div>
        <span>64 个问题 · 7 个需复核</span>
      </div>
    `,
  };
  const hero = `
    <div class="intercom-hero">
      <div>
        <h2>${page.title}</h2>
        <p>${page.intro}</p>
        ${page.tabs ? `<div class="intercom-tabs">${page.tabs.map((tab) => `<button data-detail="${section}|tab|${tab}">▰ ${tab}</button>`).join("")}</div>` : ""}
      </div>
      ${heroVisuals[section] || `
        <div class="hero-visual-card default-visual">
          <strong>${page.title}</strong>
          <span>配置 · 测试 · 上线</span>
          <em>云梯智客实时引用</em>
        </div>
      `}
      ${section === "guidance" ? `<button class="sample-close" data-toast="已关闭示例卡">×</button>` : ""}
    </div>
  `;

  let body = "";
  if (page.content) {
    body = `
      <div class="intercom-main full">
        <section class="intercom-card">
          <header><h3>${page.title}</h3><button class="learn-button" data-detail="${section}|learn|内容学习">▰ 学习</button></header>
          <div class="content-toolbar">
            ${page.actions.map((action, index) => `<button class="${index === 0 ? "primary" : ""}" data-page-action="${section}|${action}">${action}</button>`).join("")}
          </div>
          <div class="recommend-row"><strong>推荐优化</strong><span>0</span></div>
          <table class="source-table">
            <thead><tr><th>标题</th><th>状态</th><th>客服</th><th>销售</th><th>电商</th></tr></thead>
            <tbody>${page.rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<button data-detail="${section}|source|${cell}">${cell}</button>` : cell}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </section>
      </div>
    `;
  } else if (page.test) {
    body = `
      <div class="intercom-main full">
        <section class="intercom-card testing-card">
          <h3>测试智客并优化回答质量</h3>
          <span class="soft-tag">批量测试</span>
          <p>让我们先添加问题：</p>
          <div class="test-card-grid">
            ${page.cards.map(([title, desc, action]) => `
              <article>
                <strong>${title}</strong>
                <p>${desc}</p>
                <button data-page-action="${section}|${action}">${action}</button>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    `;
  } else if (page.procedure) {
    body = `
      <div class="intercom-main full">
        <section class="intercom-card procedures-card">
          <header><h3>${page.title}</h3><button class="primary-mini" data-action="newProcedure">新建流程</button></header>
          <div class="filter-row">${page.tabs.map((tab) => `<button data-detail="${section}|filter|${tab}">${tab}</button>`).join("")}</div>
          <div class="procedure-intro">
            <h3>${page.cardTitle}</h3>
            <p>${page.cardBody}</p>
            <div><button data-detail="${section}|learn|了解工作流">了解更多</button><button data-detail="${section}|pricing|按效果计费说明">按效果计费说明</button><button data-detail="${section}|chat|联系云梯顾问">联系云梯顾问</button></div>
          </div>
          ${page.items.map((item) => `
            <button class="procedure-row" data-detail="${section}|procedure|${item.title}">
              <span class="procedure-row-main">
                <strong>${item.title}</strong>
                <span>${item.channels}</span>
                <p>${item.desc}</p>
                <small>${(item.stats || ["已触发 0", "待处理 0", "已解决 0", "转人工 0", "升级 0"]).join(" · ")}</small>
              </span>
              <span class="procedure-row-side">
                <em>${item.state}</em>
                <b>打开配置</b>
              </span>
            </button>
          `).join("")}
        </section>
      </div>
    `;
  } else if (page.split) {
    body = `
      <div class="intercom-main full">
        <section class="intercom-card">
          <header><h3>${page.mainTitle}</h3><button class="learn-button" data-detail="${section}|learn|学习">▰ 学习</button></header>
          <div class="filter-row"><button>筛选</button></div>
          <div class="split-columns">
            ${page.columns.map((column) => `
              <article>
                <h3>${column.title}</h3>
                <p>${column.desc}</p>
                <button class="primary-mini" data-page-action="${section}|${column.button}">${column.button}</button>
                ${column.items.map((item) => `<button data-detail="${section}|template|${item}">${item}</button>`).join("")}
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    `;
  } else {
    body = `
      <div class="intercom-main">
        <section class="intercom-card">
          <header><h3>${page.mainTitle}</h3><button class="learn-button" data-detail="${section}|learn|学习">▰ 学习</button></header>
          <div class="basic-selector">基础设置 <span>友好语气，标准长度</span><b>⌄</b></div>
          <div class="search-row"><span>⌕</span><input placeholder="${page.search}" /><button data-toast="已打开筛选">+ 筛选</button></div>
          ${page.groups.map((group) => `
            <section class="guidance-group">
              <div class="group-head"><span>${group.icon}</span><div><h3>${group.title}</h3><p>${group.desc}</p></div><button>⌃</button></div>
              <div class="empty-box">${group.empty}</div>
              ${group.items.map((item) => `<button class="guidance-item" data-detail="${section}|guidance|${item}">${item}</button>`).join("")}
              <button class="new-button" data-page-action="${section}|新建">+ 新建</button>
            </section>
          `).join("")}
        </section>
        <aside class="preview-panel">
          <header><h3>预览</h3><div>↶ ⚙ ×</div></header>
          <div class="preview-tabs"><button>▰ 聊天</button><button>✉ 邮件</button><button>▥ 语音</button></div>
          <div class="testing-as">测试身份 <button>▣ 预览用户 ▾</button></div>
          <div class="preview-empty"><span>Fin</span><p>${page.preview}</p><small>注意：预览对话无需付费。</small></div>
          <div class="preview-input">提出问题... <span>⌕ ☺ GIF 🎙</span></div>
        </aside>
      </div>
    `;
  }
  $("#pageView").innerHTML = hero + body;
  history.replaceState(null, "", `#${section}`);
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function renderProcedureBuilder(stage = "choice") {
  syncNav("procedures");
  leaveStudio(false);
  $(".workspace").classList.add("page-open");
  $("#pageView").setAttribute("aria-hidden", "false");
  const isEditor = stage === "editor" || stage === "preview";
  const draftSteps = procedureDraft.steps
    .map(([title, desc], index) => `
      <button class="builder-step-row ${index === 0 ? "active" : ""}" data-detail="procedures|step|${title}">
        <span>${index + 1}</span>
        <div><strong>${title}</strong><p>${desc}</p></div>
        <em>编辑</em>
      </button>
    `)
    .join("");

  const choiceBody = `
    <div class="builder-grid narrow">
      <section class="builder-card">
        <span class="builder-kicker">创建方式</span>
        <h3>你想怎样开始这个工作流？</h3>
        <p>Intercom 的入口会先让你选择由 AI 起草，或从空白流程开始。这里使用中文模拟同样的创建路径。</p>
        <button class="procedure-choice recommended" data-procedure-choice="prompt">
          <strong>让 AI 起草流程</strong>
          <span>描述业务目标，智客会生成触发条件、步骤、成功结果和异常处理。</span>
          <em>推荐</em>
        </button>
        <button class="procedure-choice" data-procedure-choice="editor">
          <strong>从空白流程开始</strong>
          <span>手动添加触发条件、每一步动作、分支和转人工规则。</span>
        </button>
      </section>
      <aside class="builder-side">
        <h3>常见模板</h3>
        <button data-procedure-template="试听预约">试听预约和顾问任务</button>
        <button data-procedure-template="支付异常">支付失败或待支付处理</button>
        <button data-procedure-template="售后调课">售后调课和请假</button>
      </aside>
    </div>
  `;

  const promptBody = `
    <div class="builder-grid">
      <section class="builder-card">
        <span class="builder-kicker">让 AI 起草你的流程</span>
        <h3>告诉智客这个流程要处理什么</h3>
        <p>写清楚触发场景、需要收集的信息、要调用的系统动作，以及什么时候必须转人工。</p>
        <textarea id="procedurePrompt">当家长想预约自然拼读试听时，先确认孩子年级、英语基础、手机号和可试听时间；信息完整后创建客户系统顾问任务，并把会话摘要同步过去。遇到价格特批、投诉或家长要求电话时转人工。</textarea>
        <div class="prompt-examples">
          <button data-procedure-template="试听预约">试听预约</button>
          <button data-procedure-template="支付异常">支付异常</button>
          <button data-procedure-template="售后调课">售后调课</button>
        </div>
        <div class="builder-actions">
          <button data-procedure-back="choice">返回</button>
          <button class="primary-mini" data-procedure-next="editor">生成流程草稿</button>
        </div>
      </section>
      <aside class="builder-side">
        <h3>AI 将生成</h3>
        <ul>
          <li>触发条件和适用渠道</li>
          <li>可编辑的步骤清单</li>
          <li>信息缺失时的追问</li>
          <li>转人工和失败处理</li>
          <li>预览测试问题</li>
        </ul>
      </aside>
    </div>
  `;

  const editorBody = `
    <section class="fin-procedure-editor">
      <main class="fin-procedure-document">
        <header class="fin-procedure-toolbar">
          <button class="back-button" data-section="procedures" aria-label="返回工作流">
            <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
          </button>
          <input value="处理试听预约并创建顾问任务" aria-label="流程名称" />
          <span class="draft-pill">草稿</span>
          <button data-toast="已打开更多操作">•••</button>
          <button data-toast="已撤销上一步">↶</button>
          <button data-toast="已打开设置">⚙</button>
          <button data-toast="草稿已保存">保存</button>
          <button class="run-button" data-procedure-preview>▶</button>
          <button data-section="procedures">×</button>
        </header>

        <section class="procedure-trigger-block">
          <button class="step-count" data-toast="已展开流程目录">☷ 5</button>
          <div>
            <h3>何时使用这个流程</h3>
            <textarea>当家长提出想试听、体验课、了解自然拼读课程，或询问孩子是否适合上课时触发此流程。

仅在以下情况触发：
- 家长明确表达试听、体验、预约、试课意向
- 家长说明孩子年级或英语基础，希望判断是否适合
- 家长询问可试听时间、老师安排或课程顾问联系

不要在以下情况触发：
- 家长只是询问价格、优惠或退款
- 已报名学员提出调课、请假或售后问题
- 家长投诉老师、课程效果或服务体验
- 家长只想索取资料，还没有表达试听意向</textarea>
            <div class="procedure-audience-row">
              <button data-toast="已打开训练样例">训练智客样例（18）</button>
              <button data-toast="已打开适用范围">所有人 · 全部渠道</button>
            </div>
          </div>
        </section>

        <section class="procedure-flow-list">
          <article class="flow-step">
            <span class="step-number">1.</span>
            <p>使用 <b>[数据连接器：客户系统资料]</b> 获取家长最近一次咨询记录、孩子年级、英语基础、手机号和顾问归属。</p>
            <button data-toast="已打开步骤设置">⋯</button>
          </article>
          <article class="flow-step">
            <span class="step-number">2.</span>
            <p>如果客户系统没有清晰客户记录，或 <b>[客户.手机号]</b>、<b>[孩子.年级]</b> 为空，向家长补充询问必要信息，并说明课程顾问会继续协助。</p>
            <em>转人工团队：默认课程顾问组</em>
            <button data-toast="已打开步骤设置">⋯</button>
          </article>

          <article class="condition-group">
            <div class="condition-branch">
              <header>
                <span>3.1.</span>
                <strong>如果</strong>
                <button data-toast="已打开条件设置">自然语言 ▾</button>
              </header>
              <code>[试听.状态] 是 “已预约”</code>
              <div class="sub-step"><span>1.</span><p>告知家长已预约的试听时间、老师和上课入口。</p></div>
              <div class="sub-step"><span>2.</span><p>询问是否需要改期；如果需要，进入“获取可试听时间”步骤。</p></div>
              <div class="sub-step end"><span>3.</span><p>结束：“还需要我帮您确认其他课程信息吗？”</p></div>
            </div>
            <div class="condition-branch">
              <header>
                <span>3.2.</span>
                <strong>否则如果</strong>
                <button data-toast="已打开条件设置">自然语言 ▾</button>
              </header>
              <code>[孩子.年级] 为空 或 [英语基础] 为空</code>
              <div class="sub-step"><span>1.</span><p>请家长补充孩子年级、是否学过字母音、是否能自主阅读简单英文词。</p></div>
              <div class="sub-step"><span>2.</span><p>根据回答打上 <b>[客户标签：自然拼读适配度]</b>，并生成顾问摘要。</p></div>
            </div>
            <div class="condition-branch">
              <header>
                <span>3.3.</span>
                <strong>否则如果</strong>
                <button data-toast="已打开条件设置">自然语言 ▾</button>
              </header>
              <code>[价格异议] 为 true 或 家长要求最低价</code>
              <div class="sub-step"><span>1.</span><p>运行子流程 <b>处理价格异议与优惠边界</b>。</p></div>
            </div>
            <div class="condition-branch">
              <header>
                <span>3.4.</span>
                <strong>否则</strong>
                <button data-toast="已打开条件设置">更多 ▾</button>
              </header>
              <div class="sub-step"><span>1.</span><p>获取未来 7 天可约老师和试听时段，让家长选择一个方便时间。</p></div>
              <div class="sub-step"><span>2.</span><p>创建客户系统顾问任务，包含会话摘要、客户画像、推荐班型和跟进截止时间。</p></div>
              <em>转人工团队：课程顾问组</em>
            </div>
          </article>

          <button class="add-flow-step" data-procedure-add-step>＋ 添加步骤、条件或子流程</button>
        </section>
      </main>

      <aside class="fin-procedure-preview">
        <header>
          <div class="preview-tab-row">
            <button class="active">预览</button>
            <button>模拟测试</button>
          </div>
          <div>
            <button data-toast="已刷新预览">↶</button>
            <button data-toast="已打开预览设置">⚙</button>
            <button data-section="procedures">×</button>
          </div>
        </header>
        <div class="preview-channel-row">
          <button class="active">💬 聊天</button>
          <button>✉ 邮件</button>
        </div>
        <div class="testing-user">测试身份 <button>预览用户 ▾</button></div>
        <div class="fin-preview-empty">
          <span>智</span>
          <p>请向智客询问客户可能会问的问题，以预览其回答。</p>
          <small>注意：预览对话无需付费。</small>
        </div>
        <div class="fin-preview-composer">
          <input placeholder="提出问题..." />
          <div>⌕ ☺ ▣ 🎙</div>
        </div>
      </aside>
    </section>
  `;

  if (isEditor) {
    $("#pageView").innerHTML = editorBody;
  } else {
    $("#pageView").innerHTML = `
    <div class="builder-header">
      <button class="back-button" data-section="procedures" aria-label="返回工作流">
        <svg viewBox="0 0 24 24"><path d="M15.5 5 8.5 12l7 7" /></svg>
      </button>
      <div>
        <span class="page-kicker">智能体配置 / 工作流</span>
        <h2>${isEditor ? procedureDraft.title : "新建工作流"}</h2>
        <p>按照工作流创建方式，还原为中文教育销售场景：先选择创建方式，再由智能助手草拟，最后编辑步骤并预览。</p>
      </div>
      <div class="builder-top-actions">
        <button data-section="procedures">取消</button>
        <button data-toast="已保存">保存</button>
        <button class="primary-mini" data-toast="前端演示中已模拟发布检查">发布检查</button>
      </div>
    </div>
    <div class="builder-stepper">
      ${["选择方式", "描述流程", "编辑步骤", "预览测试"].map((label, index) => {
        const active = (stage === "choice" && index === 0) || (stage === "prompt" && index === 1) || (stage === "editor" && index === 2) || (stage === "preview" && index === 3);
        return `<span class="${active ? "active" : ""}"><b>${index + 1}</b>${label}</span>`;
      }).join("")}
    </div>
    ${stage === "choice" ? choiceBody : stage === "prompt" ? promptBody : editorBody}
  `;
  }
  history.replaceState(null, "", "#procedures/new");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  syncRail("agent");
  $(".workspace").classList.remove("page-open", "studio-open");
  $("#pageView").setAttribute("aria-hidden", "true");
  $("#studioView").setAttribute("aria-hidden", "true");
  syncNav("get-started");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function setAgentOSTab(activeTab = "workspace") {
  $$(".agentos-tabs button").forEach((button) => {
    const active = button.dataset.agentosTab === activeTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  $$("[data-agentos-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.agentosPanel !== activeTab;
  });
}

function showAgentOSHome(activeTab = "workspace") {
  document.body.classList.add("agentos-visible");
  setAgentOSTab(activeTab);
  $(".agentos-home")?.scrollTo?.({ top: 0, behavior: "smooth" });
}

function routeToAgentOSHome() {
  if (location.hash !== "#agentos") history.replaceState(null, "", "#agentos");
  showAgentOSHome();
}

function enterWorkspaceHome() {
  routeToAgentOSHome();
}

function openAgentOSProject(projectId) {
  document.body.classList.remove("agentos-visible");
  $(".app-shell")?.classList.remove("sidebar-collapsed");
  renderAgentConfigPage(projectId === "yuanfudao" ? "sales-skills" : "workflow-build");
}

function enterStudio() {
  $(".workspace").classList.remove("page-open");
  $(".workspace").classList.add("studio-open");
  $("#pageView").setAttribute("aria-hidden", "true");
  $("#studioView").setAttribute("aria-hidden", "false");
  history.replaceState(null, "", "#studio/train/how-zhike-learns");
  $$(".nav-item").forEach((item) => item.classList.remove("active"));
  showToast("已进入系统设置配置引导");
  $(".workspace").scrollTo({ top: 0, behavior: "smooth" });
}

function leaveStudio(announce = true) {
  $(".workspace").classList.remove("studio-open");
  $("#studioView").setAttribute("aria-hidden", "true");
  if (announce) {
    history.replaceState(null, "", location.pathname);
    showToast("已返回快速开始");
  }
}

function setActiveNav(button) {
  $$(".nav-item").forEach((item) => item.classList.remove("active"));
  $$(".sub-nav button").forEach((item) => item.classList.remove("active"));
  if (button.matches(".nav-item, .sub-nav button")) {
    button.classList.add("active");
  }
}

function activateRailNav(nav, label = "") {
  if (nav === "agent") {
    syncRail("agent");
    showHome();
    return;
  }
  renderRailPage(nav);
}

window.__activateRailNav = activateRailNav;

function initEvents() {
  $$("[data-nav]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      activateRailNav(button.dataset.nav, button.getAttribute("aria-label"));
    });
  });

  document.addEventListener("click", (event) => {
    if (
      pendingKnowledgeChunk
      && !event.target.closest("[data-knowledge-pending-chunk]")
      && !event.target.closest("[data-knowledge-chunk-add]")
    ) {
      discardEmptyPendingKnowledgeChunk();
    }

    const aiPanelToggle = event.target.closest("[data-ai-panel-toggle]");
    if (aiPanelToggle) {
      $("#pageView")?.classList.toggle("ai-panel-collapsed");
      return;
    }

    const nativeN8nToggle = event.target.closest("[data-native-n8n-toggle]");
    if (nativeN8nToggle) {
      const crop = $("#n8nNativeCrop");
      const collapsed = crop?.classList.toggle("collapsed");
      nativeN8nToggle.setAttribute("aria-expanded", String(!collapsed));
      nativeN8nToggle.textContent = collapsed ? "展开原生编辑器" : "折叠原生编辑器";
      showToast(collapsed ? "已折叠原生 n8n 编辑器" : "已展开原生 n8n 编辑器");
      return;
    }

    const businessNodeButton = event.target.closest("[data-business-node]");
    if (businessNodeButton) {
      const label = businessNodeButton.dataset.businessLabel || "业务节点";
      addDroppedBusinessNode(businessNodeButton.dataset.businessNode);
      if (!droppedBusinessNodes.length) {
        setAiPrompt(`修改当前 SOP：添加或调整「${label}」业务节点。优先修改云梯智客业务节点；业务节点不够时调用 n8n 原生节点，并用中文说明原生节点用途。`);
      }
      return;
    }

    const removeDroppedNode = event.target.closest("[data-remove-dropped-node]");
    if (removeDroppedNode) {
      droppedBusinessNodes.splice(Number(removeDroppedNode.dataset.removeDroppedNode), 1);
      renderDroppedBusinessNodes();
      setAiPrompt(droppedBusinessNodes.length ? buildDroppedNodePrompt() : "请新建一个 AI 销售 SOP，并从模块注册中心选择所需的 RAG、Playbook、客户状态和 Agent 基础设定。");
      showToast("已移除业务节点");
      return;
    }

    const moduleRegistryCard = event.target.closest("[data-module-registry]");
    if (moduleRegistryCard) {
      const moduleId = moduleRegistryCard.dataset.moduleRegistry;
      const module = moduleRegistry.flatMap((section) => section.modules.map((item) => ({ group: section.group, item }))).find(({ item }) => item[0] === moduleId);
      if (module) {
        const [, name, desc, io] = module.item;
        openDetail(name, desc, [
          ["模块分类", module.group],
          ["调度协议", io],
          ["n8n节点", "云梯智客 AI销售模块执行器"],
        ]);
      }
      return;
    }

    const aiSopTemplate = event.target.closest("[data-ai-sop-template]");
    if (aiSopTemplate) {
      setAiPrompt(aiSopTemplate.dataset.aiSopTemplate);
      showToast("已填入 AI 修改指令");
      return;
    }

    const aiMcpNewChat = event.target.closest("[data-ai-mcp-new-chat]");
    if (aiMcpNewChat) {
      startNewAiMcpSession();
      showToast("已开启新对话");
      return;
    }

    const aiMcpHistoryToggle = event.target.closest("[data-ai-mcp-history-toggle]");
    if (aiMcpHistoryToggle) {
      aiMcpHistoryOpen = !aiMcpHistoryOpen;
      renderAiMcpSessions();
      return;
    }

    const aiMcpSession = event.target.closest("[data-ai-mcp-session]");
    if (aiMcpSession) {
      aiMcpHistoryOpen = false;
      switchAiMcpSession(aiMcpSession.dataset.aiMcpSession);
      return;
    }

    if (aiMcpHistoryOpen && !event.target.closest("#aiMcpSessionList")) {
      aiMcpHistoryOpen = false;
      renderAiMcpSessions();
    }

    const aiMcpAttach = event.target.closest("[data-ai-mcp-attach]");
    if (aiMcpAttach) {
      $("#aiMcpAttachmentInput")?.click();
      return;
    }

    const aiMcpRemoveAttachment = event.target.closest("[data-ai-mcp-remove-attachment]");
    if (aiMcpRemoveAttachment) {
      const index = Number(aiMcpRemoveAttachment.dataset.aiMcpRemoveAttachment);
      aiMcpAttachments = aiMcpAttachments.filter((_, itemIndex) => itemIndex !== index);
      renderAiMcpAttachments();
      return;
    }

    const n8nRefresh = event.target.closest("[data-n8n-refresh]");
    if (n8nRefresh) {
      loadN8nLiveData();
      showToast("正在同步 n8n 工作流数据");
      return;
    }

    const n8nWorkflowButton = event.target.closest("[data-n8n-workflow]");
    if (n8nWorkflowButton) {
      loadN8nLiveData(n8nWorkflowButton.dataset.n8nWorkflow);
      showToast("已切换工作流画布");
      return;
    }

    const n8nNodeButton = event.target.closest("[data-n8n-node]");
    if (n8nNodeButton) {
      openDetail(n8nNodeButton.dataset.n8nNode, "这是从 n8n workflow JSON 读取并映射到云梯智客画布的节点。这里不展示 n8n 原生设置，只保留业务上需要的节点信息。", [
        ["节点类型", n8nNodeButton.querySelector("span")?.textContent || "节点"],
        ["状态", n8nNodeButton.querySelector("em")?.textContent || "未知"],
        ["来源", "n8n API"],
      ]);
      return;
    }

    const agentosTab = event.target.closest("[data-agentos-tab]");
    if (agentosTab) {
      if (location.hash !== "#agentos") history.replaceState(null, "", "#agentos");
      showAgentOSHome(agentosTab.dataset.agentosTab);
      return;
    }

    const agentosProject = event.target.closest("[data-agentos-project]");
    if (agentosProject) {
      openAgentOSProject(agentosProject.dataset.agentosProject);
      return;
    }

    const agentosHomeLink = event.target.closest("[data-agentos-home]");
    if (agentosHomeLink) {
      if (agentosHomeLink.isContentEditable) return;
      if (location.hash !== "#agentos") location.hash = "agentos";
      else showAgentOSHome();
      return;
    }

    const agentosUpload = event.target.closest("[data-agentos-upload]");
    if (agentosUpload) {
      showToast("已模拟上传工作流文件");
      return;
    }

    const agentosSend = event.target.closest("[data-agentos-send]");
    if (agentosSend) {
      const value = $("#agentosPrompt")?.value.trim();
      showToast(value ? "已开始创建销售智能体草稿" : "请输入产品介绍或上传工作流文件");
      return;
    }

    const openButton = event.target.closest("[data-open]");
    if (openButton) {
      openModal(openButton.dataset.open);
      return;
    }

    const createSalesSkillButton = event.target.closest("[data-sales-skill-create]");
    if (createSalesSkillButton) {
      openSalesSkillModal();
      return;
    }

    const createSmartTagButton = event.target.closest("[data-smart-tag-create]");
    if (createSmartTagButton) {
      openSmartTagCreateModal();
      return;
    }

    const salesBasicOpen = event.target.closest("[data-sales-basic-open]");
    if (salesBasicOpen) {
      openSalesBasicModal();
      return;
    }

    const salesSkillCheckboxClick = event.target.closest("[data-sales-skill-checkbox], [data-sales-skill-select-all]");
    if (salesSkillCheckboxClick) {
      return;
    }

    const salesSkillBulkAction = event.target.closest("[data-sales-skill-bulk-action]");
    if (salesSkillBulkAction) {
      runSalesSkillBulkAction(salesSkillBulkAction.dataset.salesSkillBulkAction);
      return;
    }

    const salesSkillRow = event.target.closest("[data-sales-skill-row]");
    if (salesSkillRow) {
      selectSalesSkill(salesSkillRow.dataset.salesSkillRow);
      return;
    }

    const smartTagCategoryToggle = event.target.closest("[data-smart-tag-category-toggle]");
    if (smartTagCategoryToggle) {
      toggleSmartTagCategory(smartTagCategoryToggle.dataset.smartTagCategoryToggle);
      return;
    }

    const smartTagCategoryEdit = event.target.closest("[data-smart-tag-category-edit]");
    if (smartTagCategoryEdit) {
      openSmartTagCategoryModal(smartTagCategoryEdit.dataset.smartTagCategoryEdit);
      return;
    }

    const smartTagCategoryAdd = event.target.closest("[data-smart-tag-category-add]");
    if (smartTagCategoryAdd) {
      openSmartTagCreateModal(smartTagCategoryAdd.dataset.smartTagCategoryAdd);
      return;
    }

    const smartTagCategoryAction = event.target.closest("[data-smart-tag-category-action]");
    if (smartTagCategoryAction) {
      const [action, categoryId] = smartTagCategoryAction.dataset.smartTagCategoryAction.split("|");
      runSmartTagCategoryAction(action, categoryId);
      return;
    }

    const smartTagModalBack = event.target.closest("[data-smart-tag-modal-back]");
    if (smartTagModalBack?.dataset.smartTagModalBack) {
      event.preventDefault();
      openSmartTagCategoryModal(smartTagModalBack.dataset.smartTagModalBack);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (actionButton?.dataset.action === "studioGuide") {
      enterStudio();
      return;
    }

    if (actionButton?.dataset.action === "leaveStudio") {
      leaveStudio();
      showHome();
      return;
    }

    if (actionButton?.dataset.action === "newProcedure") {
      renderProcedureBuilder("choice");
      showToast("已进入新建工作流");
      return;
    }

    const procedureChoice = event.target.closest("[data-procedure-choice]");
    if (procedureChoice) {
      renderProcedureBuilder(procedureChoice.dataset.procedureChoice);
      return;
    }

    const procedureBack = event.target.closest("[data-procedure-back]");
    if (procedureBack) {
      renderProcedureBuilder(procedureBack.dataset.procedureBack);
      return;
    }

    const procedureNext = event.target.closest("[data-procedure-next]");
    if (procedureNext) {
      renderProcedureBuilder(procedureNext.dataset.procedureNext);
      showToast("已生成流程草稿");
      return;
    }

    const procedurePreview = event.target.closest("[data-procedure-preview]");
    if (procedurePreview) {
      renderProcedureBuilder("preview");
      showToast("已运行预览测试");
      return;
    }

    const procedureAddStep = event.target.closest("[data-procedure-add-step]");
    if (procedureAddStep) {
      procedureDraft.steps.push(["确认顾问跟进 SLA", "如果 5 分钟内没有顾问接入，自动提醒组长并保留用户上下文。"]);
      renderProcedureBuilder("editor");
      showToast("已添加步骤");
      return;
    }

    const procedureTemplate = event.target.closest("[data-procedure-template]");
    if (procedureTemplate) {
      const name = procedureTemplate.dataset.procedureTemplate;
      const textarea = $("#procedurePrompt");
      if (textarea) {
      textarea.value = `请为「${name}」生成工作流：识别触发意图，收集必要信息，调用客户系统或工单动作，并在敏感、投诉、价格特批或用户要求人工时转人工。`;
      }
      showToast(`已套用模板：${name}`);
      return;
    }

    const connectorAction = event.target.closest("[data-connector-action]");
    if (connectorAction) {
      const [action, stage, value] = connectorAction.dataset.connectorAction.split("|");
      if (action === "start") {
        if (value) connectorDraft.type = value;
        renderConnectorSetup(stage || "choose");
        showToast("已进入数据连接器配置流程");
        return;
      }
      if (action === "next") {
        if (value) connectorDraft.type = value;
        renderConnectorSetup(stage || "details");
        return;
      }
      if (action === "back") {
        renderConnectorSetup(stage || "choose");
        return;
      }
      if (action === "template") {
        connectorDraft.type = stage || "自定义 MCP";
        renderConnectorSetup("details");
        showToast(`已选择模板：${connectorDraft.type}`);
        return;
      }
      if (action === "detail") {
        renderConnectorDetail(stage || "health");
        return;
      }
      if (action === "askFin") {
        openDetail("询问智客更新内容", "智客总结：新的数据连接器提供重新设计的配置流程、报告、安全检查、版本历史，以及用于程序化管理的公开 API。", [
          ["新增", "新版配置流程"],
          ["检查", "健康状态 / 安全检查"],
          ["管理", "版本历史 / 公开 API"],
        ]);
        return;
      }
      if (action === "finish") {
        renderDataConnectorsPage();
        return;
      }
    }

    const connectorDetail = event.target.closest("[data-connector-detail]");
    if (connectorDetail) {
      const [type, label] = connectorDetail.dataset.connectorDetail.split("|");
      openDetail(label, `这是数据连接器页面里的「${type}」交互，按设置页还原为中文模拟内容。`, [
        ["模块", "数据连接器"],
        ["类型", type],
        ["对象", label],
      ]);
      return;
    }

    const workflowAction = event.target.closest("[data-workflow-action]");
    if (workflowAction) {
      const [action, value] = workflowAction.dataset.workflowAction.split("|");
      if (action === "templates") {
        renderWorkflowsPage("templates");
        return;
      }
      if (action === "editor") {
        renderWorkflowsPage("editor");
        showToast(value === "blank" ? "已创建空白工作流" : "已套用工作流模板");
        return;
      }
      renderWorkflowsPage("overview");
      return;
    }

    const pageActionButton = event.target.closest("[data-page-action]");
    if (pageActionButton) {
      const [section, action] = pageActionButton.dataset.pageAction.split("|");
      if (section === "n8n") {
        loadN8nLiveData();
        showToast(action === "同步 n8n" ? "正在同步本地 n8n 数据" : "正在检查 n8n 发布前状态");
        return;
      }
      const page = pageData[section] || intercomPages[section];
      openDetail(action, `这是「${page.title}」页面里的操作入口。点击后会进入对应的配置、预览或导出流程。`, [
        ["所属页面", page.title],
        ["操作", action],
        ["结果", "已生成前端模拟内容"],
      ]);
      return;
    }

    const detailButton = event.target.closest("[data-detail]");
    if (detailButton) {
      const [section, type, rawIndex] = detailButton.dataset.detail.split("|");
      const page = pageData[section];
      if (!page) {
        openDetail(rawIndex || type, `这是 Intercom 对应页面中的「${type}」内容。云梯智客演示中已改写为中文，并保留可点击查看的交互。`, [
          ["所属页面", intercomPages[section]?.title || section],
          ["类型", type],
          ["内容", rawIndex || "当前项"],
        ]);
        return;
      }
      const index = Number(rawIndex);
      if (type === "record") {
        const [title, status, desc, tags] = page.records[index];
        openDetail(title, desc, [
          ["状态", status],
          ["标签", tags.join(" / ")],
          ["所属页面", page.title],
        ]);
      } else {
        const row = page.table[index + 1];
        openDetail(`${page.tableTitle}：${row[0]}`, row.map((cell, cellIndex) => `${page.table[0][cellIndex]}：${cell}`).join("\n"), [
          ["所属页面", page.title],
          ["表格", page.tableTitle],
          ["操作", "打开行详情"],
        ]);
      }
      return;
    }

    const railDetailButton = event.target.closest("[data-rail-detail]");
    if (railDetailButton) {
      const [nav, type, label] = railDetailButton.dataset.railDetail.split("|");
      const page = railPages[nav];
      openDetail(label || page.title, `这是「${page.title}」里的${type}入口，已按 Intercom 后台常见交互做成中文前端模拟。`, [
        ["所属模块", page.title],
        ["交互类型", type],
        ["当前对象", label || page.title],
      ]);
      return;
    }

    const profileTab = event.target.closest("[data-profile-tab]");
    if (profileTab) {
      const target = profileTab.dataset.profileTab;
      const panel = profileTab.closest(".inbox-profile-panel");
      panel.querySelectorAll("[data-profile-tab]").forEach((item) => item.classList.toggle("active", item === profileTab));
      panel.querySelectorAll("[data-profile-panel]").forEach((item) => item.classList.toggle("active", item.dataset.profilePanel === target));
      return;
    }

    const operatorCollapse = event.target.closest("[data-operator-collapse]");
    if (operatorCollapse) {
      operatorCollapse.closest(".operator-procedure-panel")?.classList.add("collapsed");
      return;
    }

    const operatorExpand = event.target.closest("[data-operator-expand]");
    if (operatorExpand) {
      operatorExpand.closest(".operator-procedure-panel")?.classList.remove("collapsed");
      return;
    }

    const operatorNewChat = event.target.closest("[data-operator-new-chat]");
    if (operatorNewChat) {
      renderOperatorPage("new");
      return;
    }

    const operatorThread = event.target.closest("[data-operator-thread]");
    if (operatorThread) {
      renderOperatorPage(operatorThread.dataset.operatorThread);
      return;
    }

    const toastButton = event.target.closest("[data-toast]");
    if (toastButton) {
      showToast(toastButton.dataset.toast);
      return;
    }

    const knowledgeCreateButton = event.target.closest("[data-knowledge-resource-create]");
    if (knowledgeCreateButton) {
      activeKnowledgeResourceId = "";
      knowledgeResourceStep = 1;
      editingKnowledgeChunkId = "";
      pendingKnowledgeChunk = null;
      renderKnowledgeResourceBuilder();
      return;
    }

    const knowledgeResourceOpen = event.target.closest("[data-knowledge-resource-open]");
    if (knowledgeResourceOpen) {
      activeKnowledgeResourceId = knowledgeResourceOpen.dataset.knowledgeResourceOpen;
      knowledgeResourceStep = 3;
      editingKnowledgeChunkId = "";
      pendingKnowledgeChunk = null;
      renderKnowledgeResourceBuilder();
      return;
    }

    const knowledgeStepButton = event.target.closest("[data-knowledge-step]");
    if (knowledgeStepButton) {
      knowledgeResourceStep = Number(knowledgeStepButton.dataset.knowledgeStep);
      renderKnowledgeResourceBuilder();
      return;
    }

    const knowledgeBuilderStepButton = event.target.closest("[data-knowledge-builder-step]");
    if (knowledgeBuilderStepButton) {
      if (knowledgeBuilderStepButton.dataset.knowledgeBuilderStep === "prev") {
        knowledgeResourceStep = Math.max(1, knowledgeResourceStep - 1);
      } else if (knowledgeResourceStep < 3) {
        knowledgeResourceStep += 1;
      } else {
        const resource = {
          id: `kb-${Date.now()}`,
          name: "新建课程资料",
          type: "文本",
          enabled: true,
          createdAt: Date.now(),
        };
        knowledgeResourceStore.push(resource);
        renderKnowledgeBasePage();
        showToast("资源已保存");
        return;
      }
      renderKnowledgeResourceBuilder();
      return;
    }

    const knowledgeResourceToggle = event.target.closest("[data-knowledge-resource-toggle]");
    if (knowledgeResourceToggle) {
      toggleKnowledgeResource(knowledgeResourceToggle.dataset.knowledgeResourceToggle);
      return;
    }

    const knowledgeResourceDelete = event.target.closest("[data-knowledge-resource-delete]");
    if (knowledgeResourceDelete) {
      openKnowledgeResourceDeleteConfirm(knowledgeResourceDelete.dataset.knowledgeResourceDelete);
      return;
    }

    const knowledgeResourceDeleteDocument = event.target.closest("[data-knowledge-resource-delete-document]");
    if (knowledgeResourceDeleteDocument) {
      openKnowledgeResourceDeleteConfirm(knowledgeResourceDeleteDocument.dataset.knowledgeResourceDeleteDocument);
      return;
    }

    const knowledgeResourceDeleteCancel = event.target.closest("[data-knowledge-resource-delete-cancel]");
    if (knowledgeResourceDeleteCancel) {
      $("#modal").close();
      return;
    }

    const knowledgeResourceDeleteConfirm = event.target.closest("[data-knowledge-resource-delete-confirm]");
    if (knowledgeResourceDeleteConfirm) {
      $("#modal").close();
      deleteKnowledgeResource(knowledgeResourceDeleteConfirm.dataset.knowledgeResourceDeleteConfirm);
      return;
    }

    const knowledgeChunkAdd = event.target.closest("[data-knowledge-chunk-add]");
    if (knowledgeChunkAdd) {
      const [position, targetId = ""] = knowledgeChunkAdd.dataset.knowledgeChunkAdd.split("|");
      addKnowledgeChunk(position, targetId);
      return;
    }

    const knowledgeChunkEdit = event.target.closest("[data-knowledge-chunk-edit]");
    if (knowledgeChunkEdit) {
      toggleKnowledgeChunkEdit(knowledgeChunkEdit.dataset.knowledgeChunkEdit);
      return;
    }

    const knowledgeChunkDelete = event.target.closest("[data-knowledge-chunk-delete]");
    if (knowledgeChunkDelete) {
      openKnowledgeChunkDeleteConfirm(knowledgeChunkDelete.dataset.knowledgeChunkDelete);
      return;
    }

    const knowledgeChunkDeleteCancel = event.target.closest("[data-knowledge-chunk-delete-cancel]");
    if (knowledgeChunkDeleteCancel) {
      $("#modal").close();
      return;
    }

    const knowledgeChunkDeleteConfirm = event.target.closest("[data-knowledge-chunk-delete-confirm]");
    if (knowledgeChunkDeleteConfirm) {
      commitKnowledgeChunkDelete(knowledgeChunkDeleteConfirm.dataset.knowledgeChunkDeleteConfirm);
      return;
    }

    const answerTestSend = event.target.closest("[data-answer-test-send]");
    if (answerTestSend) {
      submitAnswerTestQuestion();
      return;
    }

    const answerTestNew = event.target.closest("[data-answer-test-new]");
    if (answerTestNew) {
      createAnswerTestThread();
      renderAnswerTestPage();
      showToast("已开启新的执行测试对话");
      return;
    }

    const answerTestAttach = event.target.closest("[data-answer-test-attach]");
    if (answerTestAttach) {
      $("#answerTestAttachmentInput")?.click();
      return;
    }

    const answerRemoveAttachment = event.target.closest("[data-answer-remove-attachment]");
    if (answerRemoveAttachment) {
      const index = Number(answerRemoveAttachment.dataset.answerRemoveAttachment);
      answerTestAttachments = answerTestAttachments.filter((_, itemIndex) => itemIndex !== index);
      renderAnswerTestPage();
      return;
    }

    const answerHistoryToggle = event.target.closest("[data-answer-history-toggle]");
    if (answerHistoryToggle) {
      answerHistoryCollapsed = !answerHistoryCollapsed;
      renderAnswerTestPage();
      return;
    }

    const answerThreadDelete = event.target.closest("[data-answer-thread-delete]");
    if (answerThreadDelete) {
      deleteAnswerTestThread(answerThreadDelete.dataset.answerThreadDelete);
      renderAnswerTestPage();
      showToast("已删除对话历史");
      return;
    }

    const answerTestRefresh = event.target.closest("[data-answer-test-refresh]");
    if (answerTestRefresh) {
      const thread = getActiveAnswerTestThread();
      if (!thread) {
        showToast("请输入测试内容后再刷新回答");
        return;
      }
      const latestQuestion = [...thread.messages].reverse().find((message) => message.role === "user")?.text || "有啥礼物";
      let latestAssistantIndex = -1;
      for (let index = thread.messages.length - 1; index >= 0; index -= 1) {
        if (thread.messages[index].role === "assistant") {
          latestAssistantIndex = index;
          break;
        }
      }
      if (latestAssistantIndex >= 0) {
        thread.messages[latestAssistantIndex] = buildAnswerTestResponse(latestQuestion);
      } else {
        thread.messages.push(buildAnswerTestResponse(latestQuestion));
      }
      renderAnswerTestPage();
      showToast("已刷新回答与引用来源");
      return;
    }

    const answerThreadButton = event.target.closest("[data-answer-thread]");
    if (answerThreadButton) {
      activeAnswerTestThreadId = answerThreadButton.dataset.answerThread;
      answerTestDraft = "";
      renderAnswerTestPage();
      return;
    }

    const answerSourceTarget = event.target.closest("[data-answer-source-target]");
    if (answerSourceTarget) {
      const route = answerSourceTarget.dataset.answerSourceTarget;
      renderAgentConfigPage(route);
      showToast("已跳转到可手动修改的配置位置");
      return;
    }

    const industryButton = event.target.closest("[data-industry]");
    if (industryButton) {
      activeIndustry = industryData.find((item) => item.id === industryButton.dataset.industry);
      renderIndustryTabs();
      renderOpportunity();
      showToast(`已切换到${activeIndustry.label}场景`);
      return;
    }

    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) {
      activeMode = modes.find((mode) => mode.id === modeButton.dataset.mode);
      activeQuestionIndex = 0;
      renderModeTabs();
      renderQuestions();
      renderChat();
      showToast(`预览已切换到${activeMode.label}`);
      return;
    }

    const questionButton = event.target.closest("[data-question]");
    if (questionButton) {
      activeQuestionIndex = Number(questionButton.dataset.question);
      renderQuestions();
      renderChat();
      return;
    }

    const toggleButton = event.target.closest("[data-toggle]");
    if (toggleButton) {
      const group = toggleButton.dataset.toggle;
      toggleButton.classList.toggle("open");
      $(`[data-group="${group}"]`).classList.toggle("collapsed");
      return;
    }

    const agentConfigRouteButton = event.target.closest("[data-agent-config-route]");
    if (agentConfigRouteButton) {
      const route = agentConfigRouteButton.dataset.agentConfigRoute;
      renderAgentConfigPage(route);
      return;
    }

    const agentConfigToggleButton = event.target.closest("[data-agent-config-toggle]");
    if (agentConfigToggleButton) {
      toggleAgentConfigSubnav(agentConfigToggleButton);
      return;
    }

    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton) {
      setActiveNav(sectionButton);
      const section = sectionButton.dataset.section;
      if (section === "get-started") {
        routeToAgentOSHome();
        return;
      }
      if (railPages[section]) {
        renderRailPage(section);
        return;
      }
      const rendered = renderPage(section);
      if (!rendered && section === "settings") openModal("settings");
      return;
    }

    const railButton = event.target.closest("[data-nav]");
    if (railButton) {
      activateRailNav(railButton.dataset.nav, railButton.getAttribute("aria-label"));
      return;
    }

    const collapseSidebarButton = event.target.closest("[data-toggle-agent-sidebar]");
    if (collapseSidebarButton) {
      const shell = $(".app-shell");
      const collapsed = shell?.classList.toggle("sidebar-collapsed");
      collapseSidebarButton.setAttribute("aria-label", collapsed ? "展开云梯智客侧栏" : "收起云梯智客侧栏");
      collapseSidebarButton.dataset.tooltip = collapsed ? "展开侧栏" : "收起侧栏";
      return;
    }

    const stepButton = event.target.closest("[data-step]");
    if (stepButton) {
      const delta = stepButton.dataset.step === "prev" ? -1 : 1;
      const length = activeMode.questions.length;
      activeQuestionIndex = (activeQuestionIndex + delta + length) % length;
      renderQuestions();
      renderChat();
    }
  });

  window.addEventListener("hashchange", () => {
    const section = location.hash.replace("#", "").split("/")[0];
    const agentConfigRoute = location.hash.replace("#agent-config/", "");
    if (!section || section === "get-started" || section === "workspace") {
      routeToAgentOSHome();
    } else if (section === "agentos") {
      showAgentOSHome();
    } else if (section === "agent-config") {
      renderAgentConfigPage(agentConfigRoute || "workflow-build");
    } else if (location.hash.startsWith("#procedures/new")) {
      renderProcedureBuilder("choice");
    } else if (location.hash.startsWith("#settings/data-connectors/detail/")) {
      renderConnectorDetail(location.hash.split("/").pop().replaceAll("-", " "));
    } else if (location.hash.startsWith("#settings/data-connectors/")) {
      renderConnectorSetup(location.hash.split("/").pop());
    } else if (railPages[section]) {
      renderRailPage(section);
    } else if (section) {
      renderPage(section);
    } else {
      showHome();
    }
  });

  $("[data-action='draft']").addEventListener("click", () => {
    const text = $("#replyInput").value.trim();
    if (!text) {
      showToast("请先输入要生成的回复目标");
      return;
    }
    const chat = $("#chatWindow");
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble agent";
    bubble.innerHTML = `<strong>销售建议</strong><br />可以回复：已了解您的情况，我先帮您把孩子年级、当前英语基础和可试听时间整理好，顾问会基于这些信息给出更准确的试听安排。`;
    chat.appendChild(bubble);
    chat.scrollTop = chat.scrollHeight;
    showToast("已生成销售跟进回复");
  });

  document.addEventListener("submit", (event) => {
    if (event.target.closest("[data-sales-skill-modal-form]")) {
      event.preventDefault();
      saveSalesSkillFromModal(event.target);
      return;
    }
    if (event.target.closest("[data-sales-basic-modal-form]")) {
      event.preventDefault();
      saveSalesBasicFromModal(event.target);
      return;
    }
    if (event.target.closest("[data-smart-tag-modal-form]")) {
      event.preventDefault();
      saveSmartTagFromModal(event.target);
      return;
    }
    if (event.target.closest("[data-smart-tag-category-modal-form]")) {
      event.preventDefault();
      saveSmartTagCategoryFromModal(event.target);
      return;
    }
    if (event.target.closest("[data-smart-tag-create-form]")) {
      event.preventDefault();
      saveSmartTagCreateFromModal(event.target);
      return;
    }
    if (event.target.closest("#aiMcpForm")) {
      event.preventDefault();
      submitAiMcpPrompt();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches?.("[data-knowledge-pending-text]")) {
      if (pendingKnowledgeChunk) pendingKnowledgeChunk.text = event.target.value;
      return;
    }
    if (event.target.matches?.("[data-knowledge-chunk-text]")) {
      const chunk = knowledgeChunkDrafts.find((item) => item.id === event.target.dataset.knowledgeChunkText);
      if (chunk) chunk.text = event.target.value;
      return;
    }
    if (event.target.matches?.("[data-knowledge-chunk-image]")) {
      const chunk = knowledgeChunkDrafts.find((item) => item.id === event.target.dataset.knowledgeChunkImage);
      if (chunk) chunk.image = event.target.value;
      return;
    }
    if (event.target.matches?.("[data-sales-skill-search]")) {
      salesSkillSearchTerm = event.target.value;
      renderSalesSkillsPage();
      $("[data-sales-skill-search]")?.focus();
      return;
    }
    if (event.target.matches?.("[data-smart-tag-search]")) {
      smartTagSearchTerm = event.target.value;
      renderSmartTagsPage();
      $("[data-smart-tag-search]")?.focus();
      return;
    }
    if (event.target.matches?.("[data-answer-test-input]")) {
      answerTestDraft = event.target.value;
      return;
    }
    if (event.target.matches?.("[data-answer-history-search]")) {
      answerTestSearchTerm = event.target.value;
      renderAnswerTestPage();
      $("[data-answer-history-search]")?.focus();
      return;
    }
  });

  document.addEventListener("paste", (event) => {
    if (event.target.matches?.("[data-knowledge-pending-text]")) {
      handlePendingKnowledgePaste(event);
    }
  });

  document.addEventListener("focusout", (event) => {
    if (!event.target.matches?.("[data-knowledge-pending-text]")) return;
    window.setTimeout(() => {
      if ($("[data-knowledge-pending-text]") === document.activeElement) return;
      discardEmptyPendingKnowledgeChunk();
    }, 80);
  });

  document.addEventListener("focusout", (event) => {
    const editingCard = event.target.closest?.("[data-knowledge-chunk].editing");
    if (!editingCard || editingCard.contains(event.relatedTarget)) return;
    const chunkId = editingCard.dataset.knowledgeChunk;
    window.setTimeout(() => {
      const currentCard = $(`[data-knowledge-chunk="${CSS.escape(chunkId)}"]`);
      if (currentCard?.contains(document.activeElement)) return;
      closeKnowledgeChunkEdit(chunkId);
    }, 80);
  });

  document.addEventListener("mouseover", (event) => {
    const editingCard = editingKnowledgeChunkId ? $(`[data-knowledge-chunk="${CSS.escape(editingKnowledgeChunkId)}"].editing`) : null;
    if (editingCard && !editingCard.contains(event.target)) closeKnowledgeChunkEdit(editingKnowledgeChunkId);
    const chunkCard = event.target.closest?.("[data-knowledge-chunk]");
    if (!chunkCard || chunkCard.contains(event.relatedTarget)) return;
    chunkCard.classList.add("hovering");
  });

  document.addEventListener("mouseout", (event) => {
    const chunkCard = event.target.closest?.("[data-knowledge-chunk]");
    if (!chunkCard || chunkCard.contains(event.relatedTarget)) return;
    chunkCard.classList.remove("hovering");
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches?.("[data-sales-skill-checkbox]")) {
      toggleSalesSkillSelection(event.target.dataset.salesSkillCheckbox, event.target.checked);
      return;
    }
    if (event.target.matches?.("[data-sales-skill-select-all]")) {
      toggleAllSalesSkillSelection(event.target.checked);
      return;
    }
    if (event.target.matches?.("#aiMcpAttachmentInput")) {
      processAiMcpAttachments(event.target.files);
      event.target.value = "";
    }
    if (event.target.matches?.("#answerTestAttachmentInput")) {
      processAnswerTestAttachments(event.target.files);
      event.target.value = "";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.matches?.("[data-answer-test-input]") && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitAnswerTestQuestion();
      return;
    }
    if (!event.target.matches?.("#aiMcpInput")) return;
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.target.closest("form")?.requestSubmit();
    }
  });

  document.addEventListener("dragstart", (event) => {
    const chip = event.target.closest("[data-business-node]");
    if (!chip) return;
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/plain", chip.dataset.businessNode);
    event.dataTransfer.setData("application/x-yunti-business-node", chip.dataset.businessNode);
    chip.classList.add("dragging");
  });

  document.addEventListener("dragend", (event) => {
    event.target.closest("[data-business-node]")?.classList.remove("dragging");
    $("[data-business-dropzone]")?.classList.remove("drag-over");
  });

  document.addEventListener("dragover", (event) => {
    const dropZone = event.target.closest("[data-business-dropzone]");
    if (!dropZone) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    dropZone.classList.add("drag-over");
  });

  document.addEventListener("dragleave", (event) => {
    const dropZone = event.target.closest("[data-business-dropzone]");
    if (!dropZone || dropZone.contains(event.relatedTarget)) return;
    dropZone.classList.remove("drag-over");
  });

  document.addEventListener("drop", (event) => {
    const dropZone = event.target.closest("[data-business-dropzone]");
    if (!dropZone) return;
    event.preventDefault();
    dropZone.classList.remove("drag-over");
    const nodeId = event.dataTransfer.getData("application/x-yunti-business-node") || event.dataTransfer.getData("text/plain");
    addDroppedBusinessNode(nodeId);
  });

  $("#agentosPrompt")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const value = event.currentTarget.value.trim();
    showToast(value ? "已开始创建销售智能体草稿" : "请输入产品介绍或上传工作流文件");
  });

  document.addEventListener("keydown", (event) => {
    const agentosProject = event.target.closest?.("[data-agentos-project]");
    if (!agentosProject || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    openAgentOSProject(agentosProject.dataset.agentosProject);
  });

  document.addEventListener("dblclick", (event) => {
    const projectNameButton = event.target.closest("[data-project-name-edit]");
    if (!projectNameButton) return;
    event.preventDefault();
    startProjectNameEdit(projectNameButton);
  });

  document.addEventListener("focusout", (event) => {
    if (!event.target.matches?.("[data-project-name-edit]")) return;
    finishProjectNameEdit(event.target);
  });

  document.addEventListener("keydown", (event) => {
    const projectNameButton = event.target.closest?.("[data-project-name-edit]");
    if (!projectNameButton || !projectNameButton.isContentEditable) return;
    if (event.key === "Enter") {
      event.preventDefault();
      finishProjectNameEdit(projectNameButton);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      projectNameButton.textContent = projectNameButton.dataset.previousName || "猿辅导课堂";
      finishProjectNameEdit(projectNameButton);
    }
  });
}

function init() {
  renderIndustryTabs();
  renderOpportunity();
  renderModeTabs();
  renderQuestions();
  renderChat();
  renderSteps();
  initEvents();
  const startSection = location.hash.replace("#", "").split("/")[0];
  if (!startSection) {
    routeToAgentOSHome();
  } else if (startSection === "agentos") {
    showAgentOSHome();
  } else if (startSection === "get-started") {
    routeToAgentOSHome();
  } else if (startSection === "workspace") {
    routeToAgentOSHome();
  } else if (startSection) {
    document.body.classList.remove("agentos-visible");
    if (startSection === "agent-config") {
      renderAgentConfigPage(location.hash.replace("#agent-config/", "") || "workflow-build");
    } else if (location.hash.startsWith("#procedures/new")) {
      renderProcedureBuilder("choice");
    } else if (location.hash.startsWith("#settings/data-connectors/detail/")) {
      renderConnectorDetail(location.hash.split("/").pop().replaceAll("-", " "));
    } else if (location.hash.startsWith("#settings/data-connectors/")) {
      renderConnectorSetup(location.hash.split("/").pop());
    } else if (railPages[startSection]) {
      renderRailPage(startSection);
    } else {
      renderPage(startSection);
    }
  }
}

init();
