// =========================================================================
// Official Mandarin Chinese CBT Examination Simulation Engine (HSK & HSKK 3.0)
// Conforming to Ministry of Education (PRC) & CLEC GF 0025-2021 Standards
// Dual-Track Testing: Written Examination (笔试) & Oral Examination (HSKK 口试)
// =========================================================================

export const userHistoryStore = {
  getAttemptedIds: (userEmail, levelKey, subtest) => {
    if (typeof window === 'undefined' || !userEmail) return new Set();
    try {
      const storageKey = `cbt_mandarin_history_${userEmail}_${levelKey}_${subtest}`;
      const raw = localStorage.getItem(storageKey);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw);
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  },

  recordAttemptedIds: (userEmail, levelKey, subtest, questionIds) => {
    if (typeof window === 'undefined' || !userEmail || !questionIds || questionIds.length === 0) return;
    try {
      const storageKey = `cbt_mandarin_history_${userEmail}_${levelKey}_${subtest}`;
      const current = userHistoryStore.getAttemptedIds(userEmail, levelKey, subtest);
      questionIds.forEach(id => current.add(id));
      localStorage.setItem(storageKey, JSON.stringify(Array.from(current)));
    } catch (e) {
      console.warn("Could not save attempted question history:", e);
    }
  },

  resetHistory: (userEmail, levelKey) => {
    if (typeof window === 'undefined' || !userEmail) return;
    try {
      const subtests = ['reading', 'writing', 'listening', 'speaking', 'all'];
      subtests.forEach(sub => {
        localStorage.removeItem(`cbt_mandarin_history_${userEmail}_${levelKey}_${sub}`);
      });
    } catch (e) {
      console.warn("Could not reset question history:", e);
    }
  }
};

export function selectBrandNewSet(pool, requestedCount, attemptedIds = new Set()) {
  if (!pool || pool.length === 0) return [];
  const unseen = pool.filter(q => !attemptedIds.has(q.id));
  
  const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  if (unseen.length >= requestedCount) {
    return shuffle(unseen).slice(0, requestedCount);
  }
  const unseenShuffled = shuffle(unseen);
  const remainingNeeded = requestedCount - unseenShuffled.length;
  const seenShuffled = shuffle(pool.filter(q => attemptedIds.has(q.id)));
  return [...unseenShuffled, ...seenShuffled.slice(0, remainingNeeded)];
}

export const mandarinExamPools = {
  hsk1_2: {
    id: "hsk1_2",
    level: "GF 0025-2021 初等 / HSK 1-2 (CEFR A1–A2)",
    title: "HSK 1-2 国际中文水平初等测试 (CLEC / 国家语委)",
    subtitle: "针对汉语初学者的基础语言知识与实际交际能力测评（声调、文字、日常问候、购物交通与点餐）。",
    targetCohort: "HSK 1-2 Level Candidate • 基础日常生活与课堂交际",
    durationMinutes: 80,
    passingScorePercentage: 60,
    subtestsTiming: {
      reading: 35,
      writing: 15,
      listening: 20,
      speaking: 10
    },

    readingPool: [
      {
        id: "zh-hsk12-rd-1",
        subtest: "reading",
        title: "阅读理解 — 留学生宿舍生活公约 (Dormitory Notice)",
        passage: "留学生宿舍管理通知：\n各位国际学生：为了营造安全舒适的居住环境，请大家严格遵守以下宿舍规定：\n一、宿舍大门每晚十一点准时关闭。十一点后回来的同学，请在门卫处登记姓名和房间号。\n二、每间宿舍的公共厨房在二楼和四楼，做完饭后请务必及时关好炉火，把垃圾分类扔进垃圾桶。\n三、宿舍内严禁使用大功率电器（如电炉、大功率电暖气）。\n四、如果房间内的水管、空调或网络出现故障，请到一楼服务台填写维修登记表。\n宿舍管理办公室",
        prompt: "根据宿舍管理通知，晚上超过十一点回到宿舍的学生必须做哪一件事？",
        options: [
          "在门卫处登记姓名和房间号 (Sign name and room number at security desk)",
          "直接在宿舍大厅过夜，不能回房间",
          "缴纳五十元人民币的晚归罚款",
          "向校长办公室提交书面道歉信"
        ],
        correctAnswer: "在门卫处登记姓名和房间号 (Sign name and room number at security desk)",
        explanation: "公约第一条明确规定：'十一点后回来的同学，请在门卫处登记姓名和房间号。'"
      },
      {
        id: "zh-hsk12-rd-2",
        subtest: "reading",
        title: "阅读理解 — 留学生宿舍公共厨房管理 (Kitchen Rules)",
        passage: "二楼和四楼的公共厨房是大家做饭交流的温馨场所。为了保证卫生与消防安全：\n1. 做完饭后必须立即关闭燃气灶，防止发生意外；\n2. 自己的餐具和锅碗瓢盆在清洗干净后必须放回个人储物柜，不得堆放在水槽中；\n3. 冰箱里的食品请贴上写有名字和日期的便签，每周五下午五点保洁阿姨会统一清理过期无名物品。",
        prompt: "留学生存放在公共厨房冰箱里的食物，应该如何规范管理以防被清理？",
        options: [
          "贴上写有自己名字和日期的便签 (Label with one's name and date)",
          "不能在冰箱存放任何新鲜水果蔬菜",
          "必须上锁存放在保险箱里",
          "只能存放三天以内的瓶装饮料"
        ],
        correctAnswer: "贴上写有自己名字和日期的便签 (Label with one's name and date)",
        explanation: "文中明确指出：'冰箱里的食品请贴上写有名字和日期的便签，每周五下午五点保洁阿姨会统一清理过期无名物品。'"
      },
      {
        id: "zh-hsk12-rd-3",
        subtest: "reading",
        title: "阅读选词填空 — 汉语语法结构 (Sentence Completion)",
        passage: "小王今天生病发烧了，头疼得厉害。医生建议他多喝热水，按时吃药，在宿舍静养两天。所以他今天 ___ 来上中文课了。",
        prompt: "根据上下文逻辑，横线处应填入哪一个最合适的动词词组？",
        options: [
          "不能 (Cannot / unable due to physical condition)",
          "不会 (Doesn't know how to)",
          "不要 (Don't want to)",
          "敢 (Dare to)"
        ],
        correctAnswer: "不能 (Cannot / unable due to physical condition)",
        explanation: "因身体发烧客观条件限制导致无法来上课，应使用'不能'表示客观能力的限制。"
      },
      {
        id: "zh-hsk12-rd-4",
        subtest: "reading",
        title: "阅读理解 — 城市交通问路指导 (Asking Transit Directions)",
        passage: "问路对话：\n游客：'您好！请问去国家博物馆怎么走？'\n市民：'国家博物馆离这里不远。你从这儿一直往前走大概三百米，到了十字路口往左拐，就能看到地铁二号线的东单站。坐地铁二号线坐一站，在天安门东站下车，从D出口出来就是国家博物馆正门了。'\n游客：'非常感谢您！'",
        prompt: "游客到达天安门东站后，应该从哪一个出口出站到达国家博物馆正门？",
        options: [
          "D出口 (Exit D)",
          "A出口 (Exit A)",
          "B出口 (Exit B)",
          "C出口 (Exit C)"
        ],
        correctAnswer: "D出口 (Exit D)",
        explanation: "对话中市民明确指示：'从D出口出来就是国家博物馆正门了。'"
      },
      {
        id: "zh-hsk12-rd-5",
        subtest: "reading",
        title: "阅读理解 — 超市优惠促销海报 (Supermarket Discount Poster)",
        passage: "阳光生鲜超市周末感恩大酬宾：\n全场新鲜水果八折优惠！优质红富士苹果每斤只要四块五毛钱，香蕉每斤两块八毛钱。\n凡单笔消费满88元的顾客，凭收银小票可在一楼服务台免费领取一瓶特级大豆食用油或一盒新鲜鸡蛋。\n活动时间：本周六至周日早8:00至晚21:00。欢迎广大市民光临选购！",
        prompt: "顾客想要获得免费领取的食用油或鸡蛋，需要满足什么消费条件？",
        options: [
          "单笔购物消费金额满88元 (Single purchase over 88 RMB)",
          "必须购买十斤以上的红富士苹果",
          "必须在周一早晨八点之前到店排队",
          "必须办理超市的年费会员卡"
        ],
        correctAnswer: "单笔购物消费金额满88元 (Single purchase over 88 RMB)",
        explanation: "海报明确规定：'凡单笔消费满88元的顾客，凭收银小票可在一楼服务台免费领取……'"
      },
      {
        id: "zh-hsk12-rd-6",
        subtest: "reading",
        title: "阅读句子排序 — 连贯叙事逻辑 (Sentence Ordering)",
        passage: "句子排序题：\n① 吃了热腾腾的晚饭，我的身体暖和多了。\n② 昨天下午放学时突然下起了大雪，气温骤降。\n③ 回到宿舍后，室友小李为我煮了一碗姜糖水。\n④ 我没有带伞，顶着风雪走回了宿舍。",
        prompt: "将以上四句话按照事情发展的先后逻辑顺序排列，最连贯合理的是？",
        options: [
          "② ④ ③ ①",
          "② ① ③ ④",
          "④ ② ① ③",
          "③ ① ② ④"
        ],
        correctAnswer: "② ④ ③ ①",
        explanation: "按时间因果顺序：放学遇雪(②) → 冒雪回宿舍(④) → 室友煮姜水(③) → 喝完身体变暖(①)。"
      }
    ],

    writingPool: [
      {
        id: "zh-hsk12-wr-1",
        subtest: "writing",
        title: "HSK 连词成句 (Scrambled Sentence Optimization)",
        prompt: "请将下列词语排列成一个语法正确、通顺完整的现代汉语句子：\n【图书借阅证 / 办了一张 / 在图书馆 / 他 / 昨天】",
        minWords: 10,
        sampleAnswer: "他昨天在图书馆办了一张图书借阅证。",
        scoringRubric: "语序正确（主语+时间+地点+谓语动词+数量定语+宾语），无错别字得满分。"
      },
      {
        id: "zh-hsk12-wr-2",
        subtest: "writing",
        title: "看图写话 / 日常便签 (Message Note to Roommate)",
        prompt: "你的中国室友小王出门前还在睡觉。你今天下午两点要去参加学院的汉语演讲比赛，晚上六点半在学生活动中心和留学生朋友一起包饺子聚餐。请给小王写一张50字左右的便条，说明你的日程安排并邀请他晚上一起吃饺子。",
        minWords: 35,
        sampleAnswer: "小王：我今天下午两点去参加汉语演讲比赛。晚上六点半我们在学生活动中心包饺子聚餐，如果你有空，欢迎一起来吃热腾腾的饺子！",
        scoringRubric: "要素完整（演讲比赛时间、包饺子时间地点、热情邀请），用词得体，拼写规范。"
      },
      {
        id: "zh-hsk12-wr-3",
        subtest: "writing",
        title: "应用文请假条 (Formal Leave Application Note)",
        prompt: "你因为身体受凉发烧38.5度，医生建议你在宿舍卧床休息两天。请用规范的中文格式给你的任课老师张老师写一张请假条，说明病因、请假天数并附上补交作业的诚恳态度。",
        minWords: 40,
        sampleAnswer: "尊敬的张老师：您好！我昨晚因受凉发高烧，医生建议我卧床休息两天。特向您请假两天（周四至周五），作业病愈后马上补交，望您批准！学生：大卫。2026年10月19日。",
        scoringRubric: "具备规范请假条抬头称呼、事由、请假起止时间、落款签名与日期。"
      }
    ],

    listeningPool: [
      {
        id: "zh-hsk12-ls-1",
        subtest: "listening",
        title: "听力理解 — 机场到站广播 (Airport Announcement)",
        audioPhrase: "各位旅客请注意：由上海虹桥飞往北京首都国际机场的CA1502次航班已经安全降落，请您拿好随身行李，前往三号行李转盘提取托运行李。",
        prompt: "乘坐CA1502次航班到达北京的旅客，应当去几号转盘提取托运行李？",
        options: [
          "三号行李转盘 (Luggage Carousel 3)",
          "一号行李转盘",
          "二号行李转盘",
          "五号行李转盘"
        ],
        correctAnswer: "三号行李转盘 (Luggage Carousel 3)",
        explanation: "语音明确播报：'请您拿好随身行李，前往三号行李转盘提取托运行李。'",
        maxPlays: 2
      },
      {
        id: "zh-hsk12-ls-2",
        subtest: "listening",
        title: "听力理解 — 餐厅订座电话 (Restaurant Reservation Call)",
        audioPhrase: "您好，这里是全聚德烤鸭店。请问您今晚一共几位？我们晚上六点半在大厅还有一张四人餐桌，需要为您预留吗？",
        prompt: "烤鸭店服务人员为顾客预留的餐桌时间与人数规格是什么？",
        options: [
          "今晚6:30的大厅四人餐桌 (Tonight 6:30, 4-person table in dining hall)",
          "今晚8:00的二楼豪华大包间",
          "明天中午12:00的二人小方桌",
          "下周五晚上的六人桌"
        ],
        correctAnswer: "今晚6:30的大厅四人餐桌 (Tonight 6:30, 4-person table in dining hall)",
        explanation: "服务员清晰说明：'我们晚上六点半在大厅还有一张四人餐桌'。",
        maxPlays: 2
      },
      {
        id: "zh-hsk12-ls-3",
        subtest: "listening",
        title: "听力理解 — 天气预报与出行建议 (Weather Broadcast)",
        audioPhrase: "中央气象台今日傍晚发布强冷空气蓝色预警：受冷空气南下影响，明天气温将骤降八到十度，并伴有五级阵风。请广大市民外出时及时添衣保暖，谨防感冒。",
        prompt: "气象台针对明天的气温骤降向市民提出了什么最直接的生活建议？",
        options: [
          "外出时及时添加衣服保暖谨防感冒 (Wear warm clothing to prevent colds)",
          "全天关闭门窗不要出门",
          "携带雨伞防备特大暴雨",
          "停止所有公共交通运行"
        ],
        correctAnswer: "外出时及时添加衣服保暖谨防感冒 (Wear warm clothing to prevent colds)",
        explanation: "广播提示关键句：'请广大市民外出时及时添衣保暖，谨防感冒。'",
        maxPlays: 2
      },
      {
        id: "zh-hsk12-ls-4",
        subtest: "listening",
        title: "听力即时对话 — 购买高铁票 (High-Speed Rail Ticket Dialogue)",
        audioPhrase: "售票员：'您好，去南京的高铁上午九点有一趟G101次，还有二等座，票价是一百八十块。' 乘客：'好的，请给我来一张G101次二等座，这是现金两百块。'",
        prompt: "售票员收取乘客两百元现金后，应该找给乘客多少零钱？",
        options: [
          "找零二十块钱 (20 RMB change)",
          "找零五十块钱",
          "找零十块钱",
          "正好付清不需要找零"
        ],
        correctAnswer: "找零二十块钱 (20 RMB change)",
        explanation: "车票价格为180元，乘客支付200元，200 - 180 = 20元。"
      }
    ],

    speakingPool: [
      {
        id: "zh-hsk12-sp-1",
        subtest: "speaking",
        title: "HSKK 初级口试 — 听后重复 (Listen and Repeat)",
        prompt: "仔细聆听录音中的中文句子，在倒计时结束后清晰准确地复述出来：",
        audioPrompt: "我每天早上七点半起床，先去操场跑步，然后去食堂吃早餐。",
        prepSeconds: 8,
        speakSeconds: 15,
        modelSpeech: "我每天早上七点半起床，先去操场跑步，然后去食堂吃早餐。",
        rubric: "发音准确、声调清晰完整（特别是七点半、跑步、早餐的声调），语速适中无停顿。"
      },
      {
        id: "zh-hsk12-sp-2",
        subtest: "speaking",
        title: "HSKK 初级口试 — 自我介绍与爱好表达 (Self-Introduction & Hobbies)",
        prompt: "请用中文做一个1分钟的自我介绍。内容包括：你的名字、国籍、学习中文的时间与原因、你最喜欢的一道中国菜以及你的业余爱好。",
        audioPrompt: "请开始你的自我介绍，时间一分钟。",
        prepSeconds: 15,
        speakSeconds: 45,
        modelSpeech: "大家好！我叫大卫，来自瑞典。我学习汉语已经半年了。因为我很喜欢中国博大的历史文化，所以来北京留学。我最喜欢吃的中国菜是西红柿炒鸡蛋和北京烤鸭。我的业余爱好是踢足球和听中国古典音乐。很高兴认识大家，谢谢！",
        rubric: "涵盖所有引导要点，声调规范流畅，词汇丰富，无严重语序倒装。"
      }
    ]
  },

  hsk3_4: {
    id: "hsk3_4",
    level: "GF 0025-2021 中等 / HSK 3-4 (CEFR B1–B2)",
    title: "HSK 3-4 国际中文水平中等测试 (CLEC / 国家语委)",
    subtitle: "评估复杂社会生活交际、职场办公协调、把字句被字句精确驾驭及短文书面表达。",
    targetCohort: "HSK 3-4 Candidate • 社会生活自理与职场商务沟通",
    durationMinutes: 105,
    passingScorePercentage: 65,
    subtestsTiming: {
      reading: 45,
      writing: 25,
      listening: 25,
      speaking: 10
    },

    readingPool: [
      {
        id: "zh-hsk34-rd-1",
        subtest: "reading",
        title: "中等阅读 — 绿色低碳生活与垃圾分类 (Ecological Notice)",
        passage: "社区生活垃圾分类倡议书：\n全体居民朋友们：垃圾分类是一场关乎文明与生态的社会变革。为贯彻绿色发展理念，我社区已全面实行生活垃圾四分类制度：\n一、可回收物（蓝色桶）：包括废纸张、废塑料瓶、废金属及旧衣服，清洗干净后投放。\n二、厨余垃圾（绿色桶）：剩菜剩饭、果皮菜叶等有机质，投放前请务必沥干水分，严禁连同塑料袋一起丢入。\n三、有害垃圾（红色桶）：废旧电池、荧光灯管、过期药品等，请单独密封投放。\n四、其他垃圾（灰色桶）：受污染的卫生纸、破旧陶瓷等难以回收物。\n让我们共同把生活环境打造得更加整洁美好！",
        prompt: "根据垃圾分类倡议书，居民在往绿色垃圾桶投放厨余垃圾时，必须注意什么细节？",
        options: [
          "务必沥干水分，不能将塑料袋一起丢入 (Drain water, do not toss plastic bags along)",
          "必须先用清水将所有蔬菜残渣反复冲洗三次",
          "只能在每天清晨六点前投放",
          "必须把电池和过期药品放在一起"
        ],
        correctAnswer: "务必沥干水分，不能将塑料袋一起丢入 (Drain water, do not toss plastic bags along)",
        explanation: "倡议书明确规定：'厨余垃圾（绿色桶）……投放前请务必沥干水分，严禁连同塑料袋一起丢入。'"
      },
      {
        id: "zh-hsk34-rd-2",
        subtest: "reading",
        title: "中等阅读 — 职场把字句与沟通管理 (Workplace Management)",
        passage: "在现代企业团队协作中，沟通不仅仅是把想法说出来，更重要的是达成共识。优秀的管理者在分配任务时，总是会把项目的核心目标、交付期限和具体责任人讲得一清二楚。如果遇到突发危机，他们不会互相推诿责任，而是迅速把所有技术骨干召集到一起，制定针对性的应急预案。实践证明，善于把复杂问题分解为小目标的团队，其执行力和抗风险能力往往高出同行很多。",
        prompt: "优秀管理者在面临突发危机时，最显著的行动特征是什么？",
        options: [
          "不推诿责任，迅速召集技术骨干制定应急预案 (Gather key engineers to formulate contingency plans without dodging)",
          "立即解雇负责具体环节的项目员工",
          "将危机消息隐瞒不报等待自然解决",
          "彻底放弃原有项目并全额退款"
        ],
        correctAnswer: "不推诿责任，迅速召集技术骨干制定应急预案 (Gather key engineers to formulate contingency plans without dodging)",
        explanation: "文中指出：'如果遇到突发危机，他们不会互相推诿责任，而是迅速把所有技术骨干召集到一起，制定针对性的应急预案。'"
      },
      {
        id: "zh-hsk34-rd-3",
        subtest: "reading",
        title: "中等阅读选词填空 — 结构助词与连词辨析 (Syntax Cloze)",
        passage: "面对日益激烈的国际市场竞争，这家年轻的科技企业没有退缩，___ 迎难而上。研发团队夜以继日 ___ 攻坚克难，终于把最核心的算法模型研发 ___ 非常完善，成功打破了国外巨头的长期垄断。",
        prompt: "按顺序在横线处填入三组最恰当的词语：",
        options: [
          "而是 / 地 / 得 (érshì / de / de)",
          "但是 / 的 / 地",
          "并且 / 得 / 的",
          "因为 / 着 / 了"
        ],
        correctAnswer: "而是 / 地 / 得 (érshì / de / de)",
        explanation: "'没有退缩，[而是]迎难而上'（不是...而是...）；修饰动词攻坚克难用状语标记'[地]'；研发后引出评价补语用'[得]'（研发得非常完善）。"
      },
      {
        id: "zh-hsk34-rd-4",
        subtest: "reading",
        title: "中等阅读 — 移动互联网与老龄化社会 (Social Trends)",
        passage: "数字化浪潮席卷全球的同时，我们不能忽视老年人面临的'数字鸿沟'。许多老人不会使用智能手机打车、挂号看病甚至扫码付款。为此，国家工信部明确要求所有公共政务APP必须进行适老化改造：推出大字体、高对比度、去除诱导广告的'长辈模式'；同时，各大医院和银行必须保留人工现金服务窗口。这不仅展现了技术创新的温度，更彰显了社会的公平与包容。",
        prompt: "国家要求公共政务APP进行适老化改造并保留人工窗口，根本目的是？",
        options: [
          "消除老年人面临的数字鸿沟，展现社会包容关怀 (Bridge the digital divide for seniors and ensure inclusion)",
          "彻底取缔年轻人的智能移动支付模式",
          "增加医院挂号窗口的排队等待时间",
          "削减移动互联网科技企业的软件利润"
        ],
        correctAnswer: "消除老年人面临的数字鸿沟，展现社会包容关怀 (Bridge the digital divide for seniors and ensure inclusion)",
        explanation: "短文开篇点明主旨：'数字化浪潮席卷全球的同时，我们不能忽视老年人面临的数字鸿沟……展现了社会的公平与包容。'"
      }
    ],

    writingPool: [
      {
        id: "zh-hsk34-wr-1",
        subtest: "writing",
        title: "HSK 4 书写第一部分 — 把字句整理优化 (Ba-Sentence Formulation)",
        prompt: "请使用【把】字将给出的词语重组成一个符合语法规范的标准汉语句子：\n【工程师 / 那个复杂的技术漏洞 / 经过三天努力 / 终于 / 彻底修好了】",
        minWords: 15,
        sampleAnswer: "经过三天努力，工程师终于把那个复杂的技术漏洞彻底修好了。",
        scoringRubric: "准确使用'主语+时间状语+副词+把+宾语+状语+动词+补语'，无语序颠倒或漏字。"
      },
      {
        id: "zh-hsk34-wr-2",
        subtest: "writing",
        title: "HSK 4 书写第二部分 — 职场正式邮件 (Formal Business Coordination Email)",
        prompt: "你是跨国公司的项目协调员小李。请给合作方的张经理写一封80字左右的正式工作邮件。内容包括：感谢对方上次会议提供的数据；告知己方的改进方案已经通过审核；约定下周三上午十点在公司会议室进行面对面合同签署。",
        minWords: 60,
        sampleAnswer: "尊敬的张经理：您好！非常感谢贵司在上次项目协调会上提供的详细数据支持。经过技术委员会严格评审，我方最新修订的技术改进方案已全票通过审核。为了加快项目落地，特邀请您于下周三上午十点莅临我司A座会议室，进行正式商务合同的签署。顺祝商祺！小李。2026年10月19日。",
        scoringRubric: "具备规范商业邮件格式，语气得体礼貌，逻辑清晰，涵盖所有交际要件。"
      }
    ],

    listeningPool: [
      {
        id: "zh-hsk34-ls-1",
        subtest: "listening",
        title: "中等听力 — 商务合同洽谈 (Contract Negotiation Audio)",
        audioPhrase: "张总，对于贵公司提出的付款方式，我们董事会昨晚进行了认真评估。如果贵方能够把首付款比例从百分之二十提高到百分之三十，并在合同生效后七个工作日内电汇到位，我们就可以同意在最终单价上给予三个百分点的优惠折扣。",
        prompt: "说话人提出给予3%单价优惠的明确前提条件是什么？",
        options: [
          "首付款比例提高至30%并在7个工作日内电汇到位 (Increase down payment to 30% via wire transfer within 7 days)",
          "必须全额一次性现金付清货款",
          "将交货周期缩短至三天以内",
          "必须由第三方国际银行提供全额担保"
        ],
        correctAnswer: "首付款比例提高至30%并在7个工作日内电汇到位 (Increase down payment to 30% via wire transfer within 7 days)",
        explanation: "语音清晰陈述条件：'把首付款比例从百分之二十提高到百分之三十，并在合同生效后七个工作日内电汇到位'。",
        maxPlays: 2
      },
      {
        id: "zh-hsk34-ls-2",
        subtest: "listening",
        title: "中等听力 — 文化讲座新闻报道 (Cultural Lecture Excerpt)",
        audioPhrase: "在今天下午举办的传统非遗文化讲座上，剪纸大师李老先生指出，中国传统剪纸绝非简单的图样裁剪，其背后蕴藏着阴阳相生的造型智慧。每一刀剪下去，虚实相间，方寸之间展现出劳动人民对美好吉祥生活的无限向往。",
        prompt: "根据民间剪纸大师的讲解，中国传统剪纸的核心造型哲学是什么？",
        options: [
          "阴阳相生、虚实相间的造型智慧 (Yin-Yang harmony and intertwining of void and solid)",
          "完全依靠现代激光设备自动化加工",
          "必须使用金银等贵重金属材料制作",
          "只用于宫廷祭祀而远离百姓日常生活"
        ],
        correctAnswer: "阴阳相生、虚实相间的造型智慧 (Yin-Yang harmony and intertwining of void and solid)",
        explanation: "语音核心原话：'其背后蕴藏着阴阳相生的造型智慧。每一刀剪下去，虚实相间……'"
      }
    ],

    speakingPool: [
      {
        id: "zh-hsk34-sp-1",
        subtest: "speaking",
        title: "HSKK 中级口试 — 朗读与简述 (Read Aloud & Paraphrase)",
        prompt: "请在规定时间内大声朗读下列短文，注意断句停顿与语调自然：",
        audioPrompt: "俗话说：'水滴石穿，绳锯木断。' 任何伟大事业的铸就，都离不开日复一日的积累。在漫长的跋涉中，最考验人的往往不是起跑时的速度，而是面对挫折与孤独时能否坚守初心。只要目标明确，每一步都算数。",
        prepSeconds: 15,
        speakSeconds: 30,
        modelSpeech: "俗话说：'水滴石穿，绳锯木断。' 任何伟大事业的铸就，都离不开日复一日的积累。在漫长的跋涉中，最考验人的往往不是起跑时的速度，而是面对挫折与孤独时能否坚守初心。只要目标明确，每一步都算数。",
        rubric: "字音精准，四声变调无误，断句逻辑严密，语速自然流畅。"
      },
      {
        id: "zh-hsk34-sp-2",
        subtest: "speaking",
        title: "HSKK 中级口试 — 表达观点与建议 (Expressing Opinions: AI & Human Labor)",
        prompt: "题目：有人认为'人工智能的发展会让很多人失去工作'，也有人认为'人工智能会创造更多高价值的新就业'。请就这一话题发表你的看法（时间两分钟），并给出具体理由。",
        audioPrompt: "请阐述你对人工智能与未来就业关系的看法。",
        prepSeconds: 30,
        speakSeconds: 60,
        modelSpeech: "我认为人工智能对人类就业的影响是一把双刃剑，但从长远来看，机遇大于挑战。首先，AI确实会淘汰部分高重复性、低技能的机械劳动岗位。然而，历史上的历次工业革命证明，新技术的诞生必然会催生更大规模的新产业，如AI提示词工程师、数据标注师和机器人维护师。因此，面对AI浪潮，我们不应恐慌，而应主动拥抱变化，终身学习，提升自身的创造力与跨学科综合素养。",
        rubric: "观点明确辩证，论据层次清晰，运用恰当的书面语和逻辑连接词（首先、然而、因此）。"
      }
    ]
  },

  hsk5_6: {
    id: "hsk5_6",
    level: "GF 0025-2021 高等 / HSK 5-6 (CEFR C1–C2)",
    title: "HSK 5-6 国际中文水平高等测试 (CLEC / 国家语委)",
    subtitle: "针对学术研究、国际商务谈判、宏观社论阅读与高级小论文写作的国家级最高 proficiency 认证考试。",
    targetCohort: "HSK 5-6 Candidate • 高等教育专业学习与涉外经贸法律实务",
    durationMinutes: 135,
    passingScorePercentage: 70,
    subtestsTiming: {
      reading: 55,
      writing: 35,
      listening: 30,
      speaking: 15
    },

    readingPool: [
      {
        id: "zh-hsk56-rd-1",
        subtest: "reading",
        title: "高等政经社论阅读 — 新发展格局与高质量发展 (Macroeconomic Discourse)",
        passage: "加快构建以国内大循环为主体、国内国际双循环相互促进的新发展格局，是把握未来发展主动权的战略性布局。纵观全球主要经济体演进历史，当一国迈入高收入发展阶段，其经济增长动能必然由依靠要素投入与外需拉动，向依靠全要素生产率跃升和庞大国内统一大市场内生需求转变。\n构建新发展格局绝非自我封闭的单机循环，而是以高水平对外开放依托超大规模市场优势，深度参与全球产业分工与合作，增强国内国际两个市场两种资源的联动效应。我们要以科技创新催生新产业、新模式、新动能，破除地方保护与市场壁垒，为全球经济注入稳定性和新增长动力。",
        prompt: "文章深入论述'新发展格局'，其核心内涵为何'绝非自我封闭'？",
        options: [
          "它依托国内超大规模市场实行高水平对外开放，实现国内国际两个市场资源的联动互促 (Relies on vast domestic market for high-level openness and dual-market linkage)",
          "它计划在未来五年内全盘取缔所有外商投资企业",
          "它要求所有高科技产业彻底停止技术自立自强",
          "它单纯为了削减国内消费总额"
        ],
        correctAnswer: "它依托国内超大规模市场实行高水平对外开放，实现国内国际两个市场资源的联动互促 (Relies on vast domestic market for high-level openness and dual-market linkage)",
        explanation: "第二段深刻阐明：'构建新发展格局绝非自我封闭的单机循环，而是以高水平对外开放依托超大规模市场优势……增强国内国际两个市场两种资源的联动效应。'"
      },
      {
        id: "zh-hsk56-rd-2",
        subtest: "reading",
        title: "高等社科论文阅读 — 中华文明的包容性与现代价值 (Civilization & Philosophy)",
        passage: "中华文明之所以能历经数千年风雨沧桑而绵延不绝，其深层基因在于'和而不同'的博大包容性。在长期的历史演进中，儒家的经世致用与仁政民本、道家的顺应自然与无为而治、佛家的内省慈悲相互激荡融会，共同铸就了中国古代士大夫'穷则独善其身，达则兼济天下'的精神气象。\n这种包容性反映在对外关系上，便是'以和为贵'、'亲仁善邻'的和平主义传统。在当今全球面临单边主义与文明冲突假说的复杂多极格局下，汲取中华文明和合智慧，对于推动构建公平正义的人类命运共同体具有深远的世界历史意义。",
        prompt: "根据文章论述，中华文明历经数千年绵延不绝的深层内在基因是什么？",
        options: [
          "'和而不同'的博大包容性与三教融通的和合智慧 ('Diversity in harmony' and cultural inclusiveness)",
          "古代严格实行闭关锁国政策切断与外部交往",
          "纯粹依靠强大的武力对周边诸国进行军事扩张",
          "对所有外来文明与思想采取绝对排斥的立场"
        ],
        correctAnswer: "'和而不同'的博大包容性与三教融通的和合智慧 ('Diversity in harmony' and cultural inclusiveness)",
        explanation: "首段首句明确提出核心论点：'其深层基因在于和而不同的博大包容性'。"
      },
      {
        id: "zh-hsk56-rd-3",
        subtest: "reading",
        title: "高等综合完形填空 — 书面语体虚词与逻辑关联 (Advanced Discourse Cloze)",
        passage: "科学探索之路从来不是一马平川。___ 面对浩瀚未知的深空奥秘，人类唯有秉持'虽千万人吾往矣'的气魄，___ 能穿透认知的迷雾。毋庸置疑，基础研究的突破往往需要数十载如一日的甘坐冷板凳，切不可急功近利、___；唯有厚积薄发，方能迎来科学成果井喷 ___ 辉煌时刻。",
        prompt: "在四处空白中按顺序填入的最恰当书面语词汇组是？",
        options: [
          "鉴于 / 方 / 竭泽而渔 / 之 (Jiànyú / fāng / jié zé ér yú / zhī)",
          "因为 / 就 / 饮水思源 / 得",
          "虽然 / 便 / 画龙点睛 / 的",
          "如果 / 才 / 拔苗助长 / 地"
        ],
        correctAnswer: "鉴于 / 方 / 竭泽而渔 / 之 (Jiànyú / fāng / jié zé ér yú / zhī)",
        explanation: "'鉴于'引出宏观情境，'方'（才）与'唯有'呼应；成语'竭泽而渔'形容短视急功近利；文言助词'之'修饰'辉煌时刻'。"
      }
    ],

    writingPool: [
      {
        id: "zh-hsk56-wr-1",
        subtest: "writing",
        title: "HSK 6 缩写与学术短文 (Article Condensation & Essay Synthesis)",
        prompt: "阅读一段关于'人工智能伦理规范与立法'的长篇综述（约1000字），在35分钟内将其改写压缩为一篇约400字的规范议论性缩写文。要求：保留原文全部核心论点（技术造福人类、算法透明度、隐私侵犯风险、全球协同治理）；语言凝练，层次清晰，一律使用规范学术书面语，不得加入个人主观臆想。",
        minWords: 300,
        sampleAnswer: "当前，生成式人工智能的爆发式演进在赋能千行百业的同时，亦引发了数据隐私泄露、算法黑箱偏见及深度伪造滥用等伦理法律挑战。如何实现科技向善与安全可控，成为国际社会亟待破解的时代命题。\n首先，必须强化源头治理，确保算法机制的公平透明，严防技术反噬人类价值基座；其次，应完善数据合规与隐私保护法律底线，明确数字资产权属与侵权责任界定；最后，人工智能的无国界属性决定了其治理不可能由单国独善其身，国际社会当深化多边对话，构建具有普遍共识的人工智能全球治理框架。唯有统筹发展与安全，方能确保人工智能始终沿着造福人类文明的轨道健康发展。",
        scoringRubric: "结构严谨，提炼出原论点精髓，语法词汇达C1/C2高水准，字数在350-450字之间。"
      }
    ],

    listeningPool: [
      {
        id: "zh-hsk56-ls-1",
        subtest: "listening",
        title: "高等听力 — 宏观经济形势专家访谈 (Macroeconomic Expert Analysis)",
        audioPhrase: "当前我国经济正处于由高速增长阶段向高质量发展阶段转变的关键跨越期。短期内虽然受制于外需波动和有效需求不足的双重挑战，但从全要素生产率潜能、高素质劳动力红利以及庞大国内市场的规模效应来看，我国经济长期向好的基本面并未改变。宏观政策应继续在扩内需、促转型与稳预期上协同发力，牢牢守住不发生系统性金融风险的底线。",
        prompt: "受访经济学家对当前宏观经济基本面做出的权威定性判断是？",
        options: [
          "短期面临内外需挑战，但长期向好的宏观基本面并未改变 (Short-term hurdles, but long-term positive fundamentals unchanged)",
          "宏观经济已经彻底陷入无可逆转的长期全面衰退",
          "外需增长成为当前国民经济增长的唯一绝对支柱",
          "建议全面取消所有宏观调控与金融监管"
        ],
        correctAnswer: "短期面临内外需挑战，但长期向好的宏观基本面并未改变 (Short-term hurdles, but long-term positive fundamentals unchanged)",
        explanation: "专家分析核心结论：'短期内虽然受制于外需波动……但从全要素生产率潜能看，我国经济长期向好的基本面并未改变。'",
        maxPlays: 1
      }
    ],

    speakingPool: [
      {
        id: "zh-hsk56-sp-1",
        subtest: "speaking",
        title: "HSKK 高级口试 — 观点论辩与即兴演讲 (Impromptu Academic Speech)",
        prompt: "题目：'天下之达道五，所以行之者三。' 中华传统文化重视'修身齐家治国平天下'的道德实践。请结合现代社会公民责任与专业职业伦理，谈谈你对'德才兼备、以德为先'的理解（演讲时间三分钟）。",
        audioPrompt: "请开始你的即兴学术演讲。",
        prepSeconds: 60,
        speakSeconds: 120,
        modelSpeech: "各位评委老师好。今天我演讲的主题是'德才兼备、以德为先的当代价值'。古人云：'才者，德之资也；德者，才之帅也。' 在知识经济与科技飞速迭代的今天，专业才干固然是解决技术瓶颈的利器，但若是缺乏高尚崇高的道德底线与人文情怀作为统帅，高深的才智反倒可能异化为危害社会的工具。无论是在人工智能算法开发中坚持'科技向善'，还是在金融法治领域恪守契约诚信，'德'始终是立人之基、兴业之魂。当代青年唯有把深厚的专业素养与高尚的人格操守熔铸在一起，方能在时代浪潮中担当起兼济天下的栋梁重任。谢谢大家！",
        rubric: "观点深刻高远，引经据典贴切，逻辑层层递进，普通话字正腔圆，展现卓越口语表达能力。"
      }
    ]
  }
};

export function generateMandarinDynamicExam(levelKey = 'hsk3_4', subtestFilter = 'all', userEmail = null) {
  const poolData = mandarinExamPools[levelKey] || mandarinExamPools.hsk3_4;
  let finalQuestions = [];

  const subtestsToInclude = subtestFilter === 'all'
    ? ['reading', 'writing', 'listening', 'speaking']
    : [subtestFilter];

  const subtestTargetCounts = {
    reading: 4,
    writing: 2,
    listening: 3,
    speaking: 2
  };

  subtestsToInclude.forEach(sub => {
    let pool = [];
    if (sub === 'reading') pool = poolData.readingPool || [];
    else if (sub === 'writing') pool = poolData.writingPool || [];
    else if (sub === 'listening') pool = poolData.listeningPool || [];
    else if (sub === 'speaking') pool = poolData.speakingPool || [];

    const count = subtestFilter === 'all' ? (subtestTargetCounts[sub] || 3) : Math.min(pool.length, 6);
    const attemptedIds = userHistoryStore.getAttemptedIds(userEmail, levelKey, sub);
    const selected = selectBrandNewSet(pool, count, attemptedIds);

    const stamped = selected.map(q => ({
      ...q,
      subtest: sub
    }));

    finalQuestions = finalQuestions.concat(stamped);
  });

  const timeMap = {
    all: poolData.durationMinutes || 90,
    reading: poolData.subtestsTiming?.reading || 40,
    writing: poolData.subtestsTiming?.writing || 25,
    listening: poolData.subtestsTiming?.listening || 25,
    speaking: poolData.subtestsTiming?.speaking || 10
  };

  return {
    examId: `mandarin_${levelKey}_${subtestFilter}_${Date.now()}`,
    levelKey,
    title: poolData.title,
    badge: poolData.level,
    targetCohort: poolData.targetCohort,
    subtestFilter,
    subtestLabel: subtestFilter === 'all' ? '全科目综合模拟考试' : subtestFilter.toUpperCase(),
    totalQuestions: finalQuestions.length,
    timeLimitMinutes: timeMap[subtestFilter] || 45,
    questions: finalQuestions,
    isBrandNewSession: Boolean(userEmail)
  };
}
