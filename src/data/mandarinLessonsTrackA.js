// =========================================================================
// Mandarin Chinese Curriculum — Track A: Elementary Stage (初等 1–3级)
// Aligned with Ministry of Education (PRC) & CLEC GF 0025-2021 Standards (HSK 1-3)
// Units 1 to 3 • 4 Lessons per Unit = 12 Comprehensive Lessons Total
// =========================================================================

export const mandarinTrackAUnits = [
  {
    "id": "zh-unit-1",
    "unitId": "zh-unit-1",
    "unitNumber": 1,
    "level": "GF 0025-2021 初等一级 / HSK 1",
    "title": "Unit 1: Pinyin Foundations, Greetings & Personal Profile (拼音入门、问候与个人信息)",
    "subtitle": "汉语拼音声母韵母与四声声调、三声变调规则、基础问候（你好/您好）、数字时间与基础主谓宾句型。",
    "icon": "Sparkles",
    "color": "#dc2626",
    "lessons": [
      {
        "id": "zh-u1-l1",
        "title": "Lesson 1.1: 汉语拼音声调与礼貌问候 (Pinyin Tones & Polite Greetings)",
        "description": "掌握汉语四个基本声调、轻声、三声变调规律以及'你好'、'您好'、'谢谢'等日常交际用语。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "在普通话语音规则中，两个第三声音节相连时（如'你好 nǐ hǎo'），第一个第三声应该如何变调？",
            "options": [
              "变为第二声（阳平，升调），读作 'ní hǎo'",
              "变为第一声（阴平，高平调），读作 'nī hǎo'",
              "变为第四声（去声，降调），读作 'nì hǎo'",
              "保持不变，依然读完整的第三声"
            ],
            "correctAnswer": "变为第二声（阳平，升调），读作 'ní hǎo'",
            "explanation": "根据普通话三声变调规律（3-3变调）：两个第三声音节连续出现时，前一个音节变为第二声（升调），但拼写通常保持原调标。因此'你好'实际读作 'ní hǎo'。"
          },
          {
            "id": "zh-u1-l1-q2",
            "type": "fill_blank",
            "sentence": "老师，早上好！___ 辛苦了！",
            "missingWord": "您",
            "options": ["您", "你", "他", "谁"],
            "correctAnswer": "您",
            "explanation": "称呼长辈、老师或上级时，应使用尊称代词'您'（nín），以表达崇敬与客气礼貌。"
          },
          {
            "id": "zh-u1-l1-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'很高兴认识你'的标准句子：",
            "tokens": ["很高兴", "认识", "你。"],
            "correctAnswer": "很高兴 认识 你。",
            "explanation": "'很高兴认识你' (Hěn gāoxìng rènshi nǐ) 是初次结识朋友时最标准的礼貌表达。"
          },
          {
            "id": "zh-u1-l1-q4",
            "type": "matching",
            "prompt": "将日常礼貌用语与对应的汉语拼音和释义进行匹配：",
            "pairs": [
              { "native": "谢谢 (Xièxie)", "english": "Thank you" },
              { "native": "不客气 (Bú kèqi)", "english": "You're welcome" },
              { "native": "对不起 (Duìbuqǐ)", "english": "I am sorry" },
              { "native": "没关系 (Méi guānxi)", "english": "It doesn't matter / That's okay" }
            ]
          },
          {
            "id": "zh-u1-l1-q5",
            "type": "multiple_choice",
            "prompt": "下列关于汉语拼音四声声调特征的描述，哪一项是完全正确的？",
            "options": [
              "第一声为高平调(55)，第二声为高升调(35)，第三声为降升调(214)，第四声为全降调(51)",
              "第一声为全降调(51)，第四声为高平调(55)",
              "普通话所有音节都必须标注声调，不存在轻声音节",
              "声调只影响语调，不影响汉字词语的实际意义"
            ],
            "correctAnswer": "第一声为高平调(55)，第二声为高升调(35)，第三声为降升调(214)，第四声为全降调(51)",
            "explanation": "普通话的四声对应五度标记法：第一声(55)、第二声(35)、第三声(214)、第四声(51)。汉语是声调语言，声调具有直接区别词义的决定性作用（如 mā 妈 vs mǎ 马）。"
          },
          {
            "id": "zh-u1-l1-q6",
            "type": "fill_blank",
            "sentence": "当别人向你说'对不起'时，最得体自然的回应是：'___。'",
            "missingWord": "没关系",
            "options": ["没关系", "不客气", "很好", "再见"],
            "correctAnswer": "没关系",
            "explanation": "'对不起'（抱歉）的标准应答是'没关系'（Méi guānxi）；而'谢谢'（致谢）的标准应答是'不客气'（Bú kèqi）。两者语用情境不可混淆。"
          },
          {
            "id": "zh-u1-l1-q7",
            "type": "audio_listen",
            "audioPhrase": "再见，明天见！",
            "prompt": "听语音：说话人在道别时表达的具体时间约定是什么？",
            "options": [
              "明天再相见 (See you tomorrow)",
              "下周再相见 (See you next week)",
              "今晚再相见 (See you tonight)",
              "一会儿再相见 (See you in a bit)"
            ],
            "correctAnswer": "明天再相见 (See you tomorrow)",
            "explanation": "语音中的'明天见'（Míngtiān jiàn）明确约定了次日相见。"
          },
          {
            "id": "zh-u1-l1-q8",
            "type": "multiple_choice",
            "prompt": "当'不 (bù)'后面紧跟第四声（去声）字时，如'不客气'或'不是'，'不'字的读音会发生什么变调？",
            "options": [
              "变为第二声（升调），读作 'bú'",
              "变为第一声（平调），读作 'bū'",
              "变为第三声，读作 'bǔ'",
              "保持第四声原调不变"
            ],
            "correctAnswer": "变为第二声（升调），读作 'bú'",
            "explanation": "根据'不'字变调规则：'不'单字读第四声(bù)，在第一、二、三声字前仍读第四声，但在第四声字前必须变为第二声(bú)，例如'bú shì'（不是）、'bú kèqi'（不客气）。"
          }
        ]
      },
      {
        "id": "zh-u1-l2",
        "title": "Lesson 1.2: 数字、日期与时间表达 (Numbers, Dates & Time Expressions)",
        "description": "掌握汉字基数词1–100、大写数字认识、年月日、星期表达以及钟点几点几分的表达规则。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u1-l2-q1",
            "type": "multiple_choice",
            "prompt": "在中文中，表达日期时间的顺序原则与西方语言有何核心不同？",
            "options": [
              "中文遵循'从大到小'的层级结构：年 → 月 → 日/号 → 星期 → 上午/下午 → 点 → 分",
              "中文遵循'从小到大'的层级结构：分 → 点 → 日 → 月 → 年",
              "中文必须将星期放在年份之前",
              "中文没有固定的时间词排列顺序"
            ],
            "correctAnswer": "中文遵循'从大到小'的层级结构：年 → 月 → 日/号 → 星期 → 上午/下午 → 点 → 分",
            "explanation": "汉语的时空认知思维遵循'整体到局部、从大到小'的层级原则：例如'2026年10月19日星期一上午九点三十分'。"
          },
          {
            "id": "zh-u1-l2-q2",
            "type": "fill_blank",
            "sentence": "请问现在是 ___ 点三刻？也就是八点四十五分。",
            "missingWord": "八",
            "options": ["八", "十", "七", "六"],
            "correctAnswer": "八",
            "explanation": "中文中'一刻'代表15分钟，'三刻'代表45分钟。'八点三刻'即8:45。"
          },
          {
            "id": "zh-u1-l2-q3",
            "type": "scramble",
            "prompt": "连词成句：将词块组合为'今天星期三，明天是我的生日'：",
            "tokens": ["今天星期三，", "明天是", "我的生日。"],
            "correctAnswer": "今天星期三， 明天是 我的生日。",
            "explanation": "中文表述中'今天星期...'属于名词谓语句，语序自然流畅。"
          },
          {
            "id": "zh-u1-l2-q4",
            "type": "matching",
            "prompt": "将下列中文时间表达与对应的英文钟点进行匹配：",
            "pairs": [
              { "native": "两点整 (Liǎng diǎn zhěng)", "english": "2:00 sharp" },
              { "native": "三点半 (Sān diǎn bàn)", "english": "3:30" },
              { "native": "差五分七点 (Chà wǔ fēn qī diǎn)", "english": "6:55 (Five to seven)" },
              { "native": "十二点一刻 (Shí'èr diǎn yí kè)", "english": "12:15 (Quarter past twelve)" }
            ]
          },
          {
            "id": "zh-u1-l2-q5",
            "type": "multiple_choice",
            "prompt": "在表示时间量或钟点时，数字'2'在'___点'前应当使用哪一个字？",
            "options": [
              "使用'两' (Liǎng)，说'两点'",
              "使用'二' (Èr)，说'二点'",
              "使用'俩' (Liǎ)，说'俩点'",
              "两者完全随意互换"
            ],
            "correctAnswer": "使用'两' (Liǎng)，说'两点'",
            "explanation": "在量词或计量单位（如'点'、'个'、'块'）前表示基数'二'时，通常规范使用'两'（Liǎng diǎn，两点；liǎng gè，两个）。只有在序数（第二）、号码或算术中才使用'二'。"
          },
          {
            "id": "zh-u1-l2-q6",
            "type": "fill_blank",
            "sentence": "今天是十月十九号，那么昨天是十月 ___ 号。",
            "missingWord": "十八",
            "options": ["十八", "二十", "十九", "十七"],
            "correctAnswer": "十八",
            "explanation": "今天(19号)的前一天为昨天(18号)。中文口语中常用'号'表示日期，书面语常用'日'。"
          },
          {
            "id": "zh-u1-l2-q7",
            "type": "audio_listen",
            "audioPhrase": "我们下午两点半在图书馆见面。",
            "prompt": "听语音：双方约定的见面具体时间是什么？",
            "options": [
              "下午2:30 (2:30 PM)",
              "上午2:30 (2:30 AM)",
              "下午3:30 (3:30 PM)",
              "中午12:00 (12:00 PM)"
            ],
            "correctAnswer": "下午2:30 (2:30 PM)",
            "explanation": "语音中的'下午两点半'即 2:30 PM。"
          },
          {
            "id": "zh-u1-l2-q8",
            "type": "multiple_choice",
            "prompt": "在中文星期体系中，从'星期一'到'星期六'都以数字命名，那么'Sunday'在汉语中最规范的对应词是什么？",
            "options": [
              "星期天 或 星期日 (不使用'星期七')",
              "星期七 (按数字顺序类推)",
              "礼拜七",
              "周七"
            ],
            "correctAnswer": "星期天 或 星期日 (不使用'星期七')",
            "explanation": "现代汉语星期表达不使用'星期七'，而统一使用'星期天'（口语常用）或'星期日'（正式书面语）。同理，'周日'、'礼拜天'亦然。"
          }
        ]
      },
      {
        "id": "zh-u1-l3",
        "title": "Lesson 1.3: 自我介绍、国籍与家庭 (Self-Introduction, Nationality & Family)",
        "description": "掌握判断动词'是'、国籍表达（国家+人）、家庭成员称谓及量词'口'和'个'的正确用法。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u1-l3-q1",
            "type": "multiple_choice",
            "prompt": "表达'我是中国人 / 我是美国人'时，动词'是'构成的句型在汉语语法中称为什么？",
            "options": [
              "判断句（主语 + 是 + 宾语）",
              "存现句",
              "连动句",
              "兼语句"
            ],
            "correctAnswer": "判断句（主语 + 是 + 宾语）",
            "explanation": "动词'是'连接主语和名词性成分，表明主语的身份、属性或类别，构成典型的汉语判断句。"
          },
          {
            "id": "zh-u1-l3-q2",
            "type": "fill_blank",
            "sentence": "我家有五 ___ 人：爸爸、妈妈、哥哥、姐姐和我。",
            "missingWord": "口",
            "options": ["口", "个", "只", "位"],
            "correctAnswer": "口",
            "explanation": "在计算家庭全体人口总数时，传统规范专属量词为'口'（如'我家有五口人'）。"
          },
          {
            "id": "zh-u1-l3-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'她是我们的中文老师'：",
            "tokens": ["她是", "我们的", "中文老师。"],
            "correctAnswer": "她是 我们的 中文老师。",
            "explanation": "标准判断句结构：主语 (她) + 是 + 定语 (我们的) + 宾语中心语 (中文老师)。"
          },
          {
            "id": "zh-u1-l3-q4",
            "type": "matching",
            "prompt": "将家庭成员亲属称谓与对应的拼音和身份进行匹配：",
            "pairs": [
              { "native": "爸爸 (Bàba) / 妈妈 (Māma)", "english": "Father / Mother" },
              { "native": "哥哥 (Gēge) / 弟弟 (Dìdi)", "english": "Elder Brother / Younger Brother" },
              { "native": "姐姐 (Jiějie) / 妹妹 (Mèimei)", "english": "Elder Sister / Younger Sister" },
              { "native": "爷爷 (Yéye) / 奶奶 (Nǎinai)", "english": "Paternal Grandfather / Grandmother" }
            ]
          },
          {
            "id": "zh-u1-l3-q5",
            "type": "multiple_choice",
            "prompt": "在询问对方国籍时，最规范自然的提问方式是哪一句？",
            "options": [
              "你是哪国人？ (Nǐ shì nǎ guó rén?)",
              "你是谁的人？ (Nǐ shì shéi de rén?)",
              "你的国家怎么走？ (Nǐ de guójiā zěnme zǒu?)",
              "你在哪国工作吗？ (Nǐ zài nǎ guó gōngzuò ma?)"
            ],
            "correctAnswer": "你是哪国人？ (Nǐ shì nǎ guó rén?)",
            "explanation": "'你是哪国人？' 是询问他人国籍或国籍归属的经典标准疑问句。"
          },
          {
            "id": "zh-u1-l3-q6",
            "type": "fill_blank",
            "sentence": "我不是学生，我 ___ 一名医生。",
            "missingWord": "是",
            "options": ["是", "在", "有", "去"],
            "correctAnswer": "是",
            "explanation": "否定用'不是'，肯定承接用'是'表示职业身份归属。"
          },
          {
            "id": "zh-u1-l3-q7",
            "type": "audio_listen",
            "audioPhrase": "这是我哥哥，他是一名大学教授。",
            "prompt": "听语音：说话人所介绍的家庭成员是什么职业？",
            "options": [
              "大学教授 (University Professor)",
              "中学生 (High School Student)",
              "医院医生 (Hospital Doctor)",
              "公司经理 (Company Manager)"
            ],
            "correctAnswer": "大学教授 (University Professor)",
            "explanation": "语音中的关键词为'大学教授' (Dàxué jiàoshòu)。"
          },
          {
            "id": "zh-u1-l3-q8",
            "type": "multiple_choice",
            "prompt": "汉语中表达所属关系的结构助词'的'（如'我的书'、'学校的图书馆'）在何种情况下可以习惯性省略？",
            "options": [
              "当修饰关系极亲密的家庭成员或固定所属单位时（如'我妈妈'、'我学校'）",
              "在任何情况下都必须严格写出，绝对不可省略",
              "只有在主语是复数时才可以省略",
              "只有在形容词修饰名词时才可以省略"
            ],
            "correctAnswer": "当修饰关系极亲密的家庭成员或固定所属单位时（如'我妈妈'、'我学校'）",
            "explanation": "在人称代词后接紧密亲属称谓（我爸爸、我弟弟）或关系密切的所属单位（我班、我校）时，'的'常可省略，语言显得更加紧凑亲昵。"
          }
        ]
      },
      {
        "id": "zh-u1-l4",
        "title": "Lesson 1.4: 疑问句型系统与基础语序 (Question Particle Systems & SVO)",
        "description": "掌握汉语是非问句（吗）、省略回问句（呢）、特指疑问词（什么、谁、哪儿、怎么）及基本语序规律。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u1-l4-q1",
            "type": "multiple_choice",
            "prompt": "在将肯定陈述句转换为是非疑问句时，最常用的语法手段是什么？",
            "options": [
              "在陈述句句末直接加上疑问语气助词'吗'，语序完全保持不变",
              "将动词和主语的位置进行倒装颠倒",
              "必须在句首加上助动词'Do'或'Does'",
              "将句子最后一个音节变为升调即可，不能加任何字"
            ],
            "correctAnswer": "在陈述句句末直接加上疑问语气助词'吗'，语序完全保持不变",
            "explanation": "汉语是非疑问句最大的特点是语序不颠倒：在陈述句（'你是老师'）末尾直接附加上助词'吗'（'你是老师吗？'）即可。"
          },
          {
            "id": "zh-u1-l4-q2",
            "type": "fill_blank",
            "sentence": "我喝茶，你 ___？我也喝茶。",
            "missingWord": "呢",
            "options": ["呢", "吗", "吧", "啊"],
            "correctAnswer": "呢",
            "explanation": "语气助词'呢'用于承接上文的省略问句（相当于'And you? / What about you?'）。"
          },
          {
            "id": "zh-u1-l4-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'请问洗手间在哪儿？'的标准问路句：",
            "tokens": ["请问", "洗手间", "在哪儿？"],
            "correctAnswer": "请问 洗手间 在哪儿？",
            "explanation": "'请问'（Excuse me）常置于句首，后跟主语（洗手间）和疑问处所谓语（在哪儿）。"
          },
          {
            "id": "zh-u1-l4-q4",
            "type": "matching",
            "prompt": "将下列疑问代词与对应的疑问范畴进行匹配：",
            "pairs": [
              { "native": "什么 (Shénme)", "english": "What (Things / Objects)" },
              { "native": "谁 (Shéi / Shuí)", "english": "Who (Person)" },
              { "native": "哪儿 / 哪里 (Nǎr / Nǎlǐ)", "english": "Where (Location)" },
              { "native": "怎么 (Zěnme)", "english": "How / In what way (Manner)" }
            ]
          },
          {
            "id": "zh-u1-l4-q5",
            "type": "multiple_choice",
            "prompt": "下列哪一个句子是正确的正反疑问句（A-not-A）结构？",
            "options": [
              "你今天去不去图书馆？",
              "你今天去图书馆吗去？",
              "你去不去吗图书馆？",
              "你是不是去图书馆吗？"
            ],
            "correctAnswer": "你今天去不去图书馆？",
            "explanation": "正反疑问句将动词/形容词的肯定形式与否定形式并列（'去不去'、'好不好'）。注意：正反疑问句句尾绝对不能再加'吗'！"
          },
          {
            "id": "zh-u1-l4-q6",
            "type": "fill_blank",
            "sentence": "请问这本书 ___ 谁的书？是王老师的。",
            "missingWord": "是",
            "options": ["是", "在", "有", "看"],
            "correctAnswer": "是",
            "explanation": "'是谁的书'构成判断疑问句，询问所属关系。"
          },
          {
            "id": "zh-u1-l4-q7",
            "type": "audio_listen",
            "audioPhrase": "你喜欢吃中国菜吗？",
            "prompt": "听语音：说话人在询问什么爱好倾向？",
            "options": [
              "是否喜欢吃中国菜 (Whether you like Chinese food)",
              "是否会做中国菜 (Whether you know how to cook Chinese food)",
              "什么时候吃中国菜 (When to eat Chinese food)",
              "今天想去哪里吃晚饭 (Where to eat dinner today)"
            ],
            "correctAnswer": "是否喜欢吃中国菜 (Whether you like Chinese food)",
            "explanation": "语音核心为'喜欢吃中国菜吗' (Xǐhuan chī Zhōngguó cài ma)。"
          },
          {
            "id": "zh-u1-l4-q8",
            "type": "multiple_choice",
            "prompt": "在汉语特指疑问句中，疑问词（如'什么'、'谁'、'哪儿'）在句中的位置遵循什么法则？",
            "options": [
              "'疑问词位置保留'原则：疑问词直接放在所询问成分在陈述句中的对应位置，不提前倒装",
              "疑问词必须一律提前移动到整个句子的最前面",
              "疑问词必须置于主语之后、动词之前",
              "疑问词必须置于句末"
            ],
            "correctAnswer": "'疑问词位置保留'原则：疑问词直接放在所询问成分在陈述句中的对应位置，不提前倒装",
            "explanation": "与印欧语不同，汉语是'疑问词原位语言'（wh-in-situ）：问什么就替换什么位置。例如：'你买苹果' → '你买什么？'（宾语位置原封不动）。"
          }
        ]
      }
    ]
  },
  {
    "id": "zh-unit-2",
    "unitId": "zh-unit-2",
    "unitNumber": 2,
    "level": "GF 0025-2021 初等二级 / HSK 2",
    "title": "Unit 2: Socializing, Public Logistics & Daily Life (社交生活、公共出行与消费)",
    "subtitle": "问路与交通方式、购物量词与议价、餐厅点餐与饮食文化、能愿动词（想/会/能）与状语语序（主语+时间+地点+动词）。",
    "icon": "Compass",
    "color": "#f97316",
    "lessons": [
      {
        "id": "zh-u2-l1",
        "title": "Lesson 2.1: 问路与城市交通出行 (Asking Directions & Urban Transit)",
        "description": "掌握方位词（前/后/左/右/旁/对过）、'离...远/近'句型、'往...拐'与乘坐地铁公共汽车表达法。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u2-l1-q1",
            "type": "multiple_choice",
            "prompt": "在中文中，表示空间距离的距离句型'A 离 B 很远/很近'中，介词'离'的核心作用是什么？",
            "options": [
              "引出衡量空间或时间距离的参照点基准 (Distance benchmark)",
              "表示离开或者出发的动作",
              "表示朝向某个方向前进",
              "表示终点目的地"
            ],
            "correctAnswer": "引出衡量空间或时间距离的参照点基准 (Distance benchmark)",
            "explanation": "介词'离'用于引出距离衡量的基准点，公式：A + 离 + B + (很)远/近。例如：'我家离公司很近'。"
          },
          {
            "id": "zh-u2-l1-q2",
            "type": "fill_blank",
            "sentence": "从这里一直往前走，到了红绿灯往右 ___ 就到了。",
            "missingWord": "拐",
            "options": ["拐", "坐", "站", "看"],
            "correctAnswer": "拐",
            "explanation": "表示转弯时，北方口语及标准语常用'拐'（guǎi，如往左拐、往右拐），南方常用'转'（zhuǎn）。"
          },
          {
            "id": "zh-u2-l1-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'我每天坐地铁去上班'：",
            "tokens": ["我每天", "坐地铁", "去上班。"],
            "correctAnswer": "我每天 坐地铁 去上班。",
            "explanation": "典型的连动句结构：主语 + 时间状语 + 动作一(交通方式:坐地铁) + 动作二(目的:去上班)。"
          },
          {
            "id": "zh-u2-l1-q4",
            "type": "matching",
            "prompt": "将城市交通方式与对应的中文表达进行匹配：",
            "pairs": [
              { "native": "坐地铁 (Zuò dìtiě)", "english": "Take the subway / metro" },
              { "native": "乘公共汽车 (Chéng gōnggòng qìchē)", "english": "Take the city bus" },
              { "native": "打车 / 乘出租车 (Dǎchē)", "english": "Take a taxi / cab" },
              { "native": "骑自行车 (Qí zìxíngchē)", "english": "Ride a bicycle" }
            ]
          },
          {
            "id": "zh-u2-l1-q5",
            "type": "multiple_choice",
            "prompt": "在指路表达中，'向/往'引导方向状语，下列哪一个搭配完全符合规范？",
            "options": [
              "向前走，往左拐 (Walk forward, turn left)",
              "走前向，拐往左",
              "往前向走，向拐左",
              "在前走，在左拐"
            ],
            "correctAnswer": "向前走，往左拐 (Walk forward, turn left)",
            "explanation": "'往/向 + 方向方位词 + 动词'是固定成套的方向动向结构（如'往前走'、'往东开'、'向左拐'）。"
          },
          {
            "id": "zh-u2-l1-q6",
            "type": "fill_blank",
            "sentence": "地铁站就在中国银行的 ___，中间隔着一条马路。",
            "missingWord": "对面",
            "options": ["对面", "上面", "里面", "下面"],
            "correctAnswer": "对面",
            "explanation": "中间隔着马路、正对相望的方位词是'对面' (Duìmiàn)。"
          },
          {
            "id": "zh-u2-l1-q7",
            "type": "audio_listen",
            "audioPhrase": "请问，去高铁站坐几号线地铁？",
            "prompt": "听语音：提问者正在向路人咨询什么信息？",
            "options": [
              "去高铁站的地铁线路号 (Subway line number to High-Speed Rail Station)",
              "高铁票的价格 (High-speed train ticket price)",
              "高铁还有几分钟开车 (Departure time of train)",
              "高铁站的行李寄存处 (Luggage storage at the station)"
            ],
            "correctAnswer": "去高铁站的地铁线路号 (Subway line number to High-Speed Rail Station)",
            "explanation": "提问核心为'坐几号线地铁'（Which subway line to take）。"
          },
          {
            "id": "zh-u2-l1-q8",
            "type": "multiple_choice",
            "prompt": "关于介词'从'与'到'构成的起点终点结构'从 A 到 B'，下列描述哪一项是正确的？",
            "options": [
              "既可以表示空间起止点，也可以表示时间起止点",
              "只能用于表示空间距离，不能用于时间",
              "只能用于表示时间段，不能用于地理空间",
              "'从'必须放在动词后面"
            ],
            "correctAnswer": "既可以表示空间起止点，也可以表示时间起止点",
            "explanation": "'从...到...'是极具通适性的起止框架：既可表空间（'从北京到上海'），也可表时间（'从八点到十二点'）。"
          }
        ]
      },
      {
        "id": "zh-u2-l2",
        "title": "Lesson 2.2: 购物消费与量词搭配体系 (Shopping, Currency & Measure Words)",
        "description": "掌握人民币货币单位（元/块、角/毛、分）、常用量词系统（个、件、条、本、张、杯、瓶）与询价还价技巧。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u2-l2-q1",
            "type": "multiple_choice",
            "prompt": "在中国日常口语消费中，人民币的基本货币单位'元'和'角'最通俗普遍的口语称呼是什么？",
            "options": [
              "元称作'块' (Kuài)，角称作'毛' (Máo)",
              "元称作'文'，角称作'分'",
              "元称作'斤'，角称作'两'",
              "直接称作'金'和'银'"
            ],
            "correctAnswer": "元称作'块' (Kuài)，角称作'毛' (Máo)",
            "explanation": "人民币书面语为'元、角、分'，但在民间日常口语交易中普遍使用'块、毛、分'（如'五块五毛'即5.50元）。"
          },
          {
            "id": "zh-u2-l2-q2",
            "type": "fill_blank",
            "sentence": "服务员，请给我拿一 ___ 绿茶，谢谢。",
            "missingWord": "瓶",
            "options": ["瓶", "张", "本", "条"],
            "correctAnswer": "瓶",
            "explanation": "瓶装液体饮料应选用容器量词'瓶'（Píng，如一瓶水、一瓶绿茶）或'杯'（Bēi，一杯茶）。"
          },
          {
            "id": "zh-u2-l2-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'这件衣服有点儿贵，能便宜一点儿吗？'：",
            "tokens": ["这件衣服有点儿贵，", "能便宜", "一点儿吗？"],
            "correctAnswer": "这件衣服有点儿贵， 能便宜 一点儿吗？",
            "explanation": "口语还价经典句型：'有点儿 + 形容词'表示不顺心或略微过分；'形容词 + 一点儿'表示期望的改变幅度。"
          },
          {
            "id": "zh-u2-l2-q4",
            "type": "matching",
            "prompt": "将下列汉语量词与对应的名词搭配进行匹配：",
            "pairs": [
              { "native": "一件衣服 / 一件大衣 (Jiàn)", "english": "Upper garments / coats / sweaters" },
              { "native": "一条裤子 / 一条鱼 (Tiáo)", "english": "Long, narrow items (trousers, fish, rivers)" },
              { "native": "一本书 / 一本词典 (Běn)", "english": "Bound paper volumes (books, dictionaries)" },
              { "native": "一张纸 / 一张桌子 (Zhāng)", "english": "Flat surface items (paper, tickets, tables)" }
            ]
          },
          {
            "id": "zh-u2-l2-q5",
            "type": "multiple_choice",
            "prompt": "关于'有点儿'与'一点儿'的语法分布位置与情感色彩，下列哪项分析是绝对精准的？",
            "options": [
              "'有点儿'放在形容词前，通常带有不合意或负面语气（有点儿冷）；'一点儿'放在形容词后或名词前，表示少量（便宜一点儿 / 喝一点儿水）",
              "'有点儿'放在形容词后，'一点儿'放在形容词前",
              "两者语法位置完全相同，可以任意互换",
              "'有点儿'只能修饰褒义形容词，'一点儿'只能修饰贬义形容词"
            ],
            "correctAnswer": "'有点儿'放在形容词前，通常带有不合意或负面语气（有点儿冷）；'一点儿'放在形容词后或名词前，表示少量（便宜一点儿 / 喝一点儿水）",
            "explanation": "这是CLEC与HSK考试高频必考点：'有点儿 + Adj'（常表不如意，如'有点儿累'、'有点儿贵'）；'Adj + 一点儿'（表比较幅度，如'快一点儿'、'大一点儿'）。"
          },
          {
            "id": "zh-u2-l2-q6",
            "type": "fill_blank",
            "sentence": "这本书一共 ___ 钱？五十八块钱。",
            "missingWord": "多少",
            "options": ["多少", "几个", "怎么", "什么"],
            "correctAnswer": "多少",
            "explanation": "询问价格固定句型：'一共多少钱？'或'这个怎么卖？'。"
          },
          {
            "id": "zh-u2-l2-q7",
            "type": "audio_listen",
            "audioPhrase": "老板，请问可以用微信或者支付宝付款吗？",
            "prompt": "听语音：顾客在结账时询问什么现代支付方式？",
            "options": [
              "移动支付方式（微信支付或支付宝）",
              "只使用现金钞票付款",
              "刷国际信用卡",
              "是否可以下个月再付款"
            ],
            "correctAnswer": "移动支付方式（微信支付或支付宝）",
            "explanation": "语音中的'微信' (WeChat Pay) 与'支付宝' (Alipay) 是当代中国最核心的移动数字支付方式。"
          },
          {
            "id": "zh-u2-l2-q8",
            "type": "multiple_choice",
            "prompt": "在汉语数词与名词之间，量词（Measure Word / Classifier）的出现规律是什么？",
            "options": [
              "数词或指示代词修饰名词时，中间通常必须使用相应的量词（如'一个人'、'这本书'）",
              "量词是可有可无的修饰成分，日常说话通常省略",
              "只有表示大数量时才用量词，数字1到10不用量词",
              "名词自身可以充当量词，所以不需要额外的字"
            ],
            "correctAnswer": "数词或指示代词修饰名词时，中间通常必须使用相应的量词（如'一个人'、'这本书'）",
            "explanation": "汉语属于量词丰富型语言。'数词/指示代词 + 量词 + 名词'是现代汉语强制性的语法形态特征（如'三只猫'、'那张票'）。"
          }
        ]
      },
      {
        "id": "zh-u2-l3",
        "title": "Lesson 2.3: 餐厅点餐与饮食文化 (Dining Out, Menu Ordering & Culture)",
        "description": "掌握餐厅点菜词汇、口味倾向（酸甜苦辣咸）、饮食禁忌表达与结账买单的文化礼仪。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u2-l3-q1",
            "type": "multiple_choice",
            "prompt": "在餐厅点菜时，向服务员表达'我们需要一份宫保鸡丁和一碗米饭'，最地道得体的动词通常使用哪一个？",
            "options": [
              "使用动词'来' (Lái)，说：'来一份宫保鸡丁，来一碗米饭'",
              "使用动词'做' (Zuò)，说：'做一份宫保鸡丁'",
              "使用动词'去' (Qù)，说：'去一份宫保鸡丁'",
              "使用动词'吃' (Chī)，说：'吃一份宫保鸡丁'"
            ],
            "correctAnswer": "使用动词'来' (Lái)，说：'来一份宫保鸡丁，来一碗米饭'",
            "explanation": "在点餐场景中，动词'来'（Lái）具有广泛的语用替代功能，用于请求服务员呈上菜品，非常地道自然（如'来一壶茶'、'再来两碗饭'）。"
          },
          {
            "id": "zh-u2-l3-q2",
            "type": "fill_blank",
            "sentence": "我不习惯吃辣，请师傅做菜时千万 ___ 放辣椒。",
            "missingWord": "别",
            "options": ["别", "没", "不", "好"],
            "correctAnswer": "别",
            "explanation": "'别'（Bié）表示禁止或祈使性劝阻，'千万别...'是固定高频祈使结构。"
          },
          {
            "id": "zh-u2-l3-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'服务员，请给我们拿一下菜单'：",
            "tokens": ["服务员，", "请给我们", "拿一下菜单。"],
            "correctAnswer": "服务员， 请给我们 拿一下菜单。",
            "explanation": "礼貌求助句式：呼语 + 请 + 给 + 间接宾语 + 动词 + 数量补语 + 直接宾语。"
          },
          {
            "id": "zh-u2-l3-q4",
            "type": "matching",
            "prompt": "将中国饮食中的'五味'与对应的味觉感知进行匹配：",
            "pairs": [
              { "native": "酸 (Suān)", "english": "Sour (Vinegar / Lemon)" },
              { "native": "甜 (Tián)", "english": "Sweet (Sugar / Honey)" },
              { "native": "苦 (Kǔ)", "english": "Bitter (Bitter melon / Coffee)" },
              { "native": "辣 (Là) / 咸 (Xián)", "english": "Spicy / Salty" }
            ]
          },
          {
            "id": "zh-u2-l3-q5",
            "type": "multiple_choice",
            "prompt": "在中国餐桌文化中，用餐完毕要结账时，通常如何招呼服务员？",
            "options": [
              "说：'服务员，买单！' 或 '结账！'",
              "大声敲击碗筷引起注意",
              "说：'收税！'",
              "直接离席等待餐厅寄账单"
            ],
            "correctAnswer": "说：'服务员，买单！' 或 '结账！'",
            "explanation": "'买单'（源自粤语，现已通行全国）或'结账'（Jiézhàng）是现代中国社会最规范的结账称呼。在中国文化中敲击碗筷被视为极不礼貌（乞丐习俗禁忌）。"
          },
          {
            "id": "zh-u2-l3-q6",
            "type": "fill_blank",
            "sentence": "服务员，今天的菜很好吃，我们都吃 ___ 了！",
            "missingWord": "饱",
            "options": ["饱", "饿", "累", "忙"],
            "correctAnswer": "饱",
            "explanation": "'吃饱'（Chī bǎo）为结果补语结构，表示进食达到充分饱足状态。"
          },
          {
            "id": "zh-u2-l3-q7",
            "type": "audio_listen",
            "audioPhrase": "服务员，这桌菜我来买单，千万别跟我抢！",
            "prompt": "听语音：说话人在表达中国餐桌上的哪一种典型文化现象？",
            "options": [
              "热情抢着替大家结账买单 (Enthusiastically insisting on paying the bill for everyone)",
              "投诉菜品质量不符合要求",
              "要求把剩下的饭菜打包带走",
              "要求餐厅给予打折优惠"
            ],
            "correctAnswer": "热情抢着替大家结账买单 (Enthusiastically insisting on paying the bill for everyone)",
            "explanation": "'抢着买单'（抢单）是中国亲朋好友宴饮聚餐时体现热情好客、重视人情与面子的经典社交文化。"
          },
          {
            "id": "zh-u2-l3-q8",
            "type": "multiple_choice",
            "prompt": "在就餐时如果因饮食习惯或信仰不能吃某种食材，正确的中文表达是哪一种？",
            "options": [
              "我吃素 / 我对海鲜过敏 / 我不吃牛肉 (Clear specific dietary constraints)",
              "我不喜欢你做的饭",
              "我是没有肉的人",
              "我反对吃蔬菜"
            ],
            "correctAnswer": "我吃素 / 我对海鲜过敏 / 我不吃牛肉 (Clear specific dietary constraints)",
            "explanation": "'吃素'（vegetarian）、'对...过敏'（allergic to...）、'不吃...'是表达饮食偏好与禁忌的最严谨规范句式。"
          }
        ]
      },
      {
        "id": "zh-u2-l4",
        "title": "Lesson 2.4: 能愿动词与核心状语语序 (Modal Verbs & S+T+P+V Syntax)",
        "description": "系统掌握能愿动词（想/要、会、能、可以）的语用区别，以及汉语最重要的核心语序规则：主语 + 时间状语 + 地点状语 + 方式 + 谓语动词 + 宾语。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u2-l4-q1",
            "type": "multiple_choice",
            "prompt": "汉语中最核心的句子骨架语序规则是以下哪一个黄金公式？",
            "options": [
              "主语 + [时间状语] + [地点状语] + 谓语动词 + 宾语 (Subject + Time + Place + Verb + Object)",
              "主语 + 谓语动词 + 宾语 + [地点状语] + [时间状语]",
              "[时间状语] + 谓语动词 + 主语 + 宾语 + [地点状语]",
              "谓语动词 + 主语 + [地点状语] + 宾语"
            ],
            "correctAnswer": "主语 + [时间状语] + [地点状语] + 谓语动词 + 宾语 (Subject + Time + Place + Verb + Object)",
            "explanation": "这是对外汉语教学最根本的语序法则（S+T+P+V）：时间状语和地点状语必须放在主要动作动词的前面修饰动作。如：'我[明天][在学校]看书'（不能说'我看书在学校明天'）。"
          },
          {
            "id": "zh-u2-l4-q2",
            "type": "fill_blank",
            "sentence": "小时候我学过游泳，所以我 ___ 游泳。",
            "missingWord": "会",
            "options": ["会", "想", "敢", "要"],
            "correctAnswer": "会",
            "explanation": "能愿动词'会'（Huì）在此表示'通过后天学习掌握某种技能'（如会游泳、会开车、会说汉语）。"
          },
          {
            "id": "zh-u2-l4-q3",
            "type": "scramble",
            "prompt": "连词成句：将词块排列成严格符合标准中文语序的句子：",
            "tokens": ["我们明天上午", "在会议室", "开会。"],
            "correctAnswer": "我们明天上午 在会议室 开会。",
            "explanation": "严格遵循：主语(我们) + 时间(明天上午) + 地点(在会议室) + 动词(开会)。"
          },
          {
            "id": "zh-u2-l4-q4",
            "type": "matching",
            "prompt": "将下列能愿动词的核心语意与例句进行匹配：",
            "pairs": [
              { "native": "会 (Huì)", "english": "Acquired skill through learning (我会弹钢琴)" },
              { "native": "能 (Néng)", "english": "Physical capability or capacity (我今天身体好，能跑五公里)" },
              { "native": "可以 (Kěyǐ)", "english": "Permission or rule allowance (这里可以拍照吗)" },
              { "native": "想 (Xiǎng)", "english": "Subjective desire or wish (我想去中国留学)" }
            ]
          },
          {
            "id": "zh-u2-l4-q5",
            "type": "multiple_choice",
            "prompt": "下列哪一个句子的语序是完全错误的（受英语语序负迁移影响）？",
            "options": [
              "我学习汉语在大学。(错误：将地点状语置于动词后)",
              "我今天在大学学习汉语。(正确)",
              "今天我在大学学习汉语。(正确)",
              "我们在图书馆看书。(正确)"
            ],
            "correctAnswer": "我学习汉语在大学。(错误：将地点状语置于动词后)",
            "explanation": "英语中习惯将地点状语置于句末（I study Chinese at university），但在普通话中介词短语'在大学'必须置于谓语'学习'之前。"
          },
          {
            "id": "zh-u2-l4-q6",
            "type": "fill_blank",
            "sentence": "我生病发烧了，今天不 ___ 去上课了。",
            "missingWord": "能",
            "options": ["能", "会", "要", "爱"],
            "correctAnswer": "能",
            "explanation": "因身体状况或客观条件限制导致无法进行动作，否定通常用'不能'（Bù néng）。"
          },
          {
            "id": "zh-u2-l4-q7",
            "type": "audio_listen",
            "audioPhrase": "你明天晚上想不想和我一起去看电影？",
            "prompt": "听语音：说话人发出的社交邀请是什么？",
            "options": [
              "明天晚上一起看电影 (Watch a movie together tomorrow night)",
              "明天上午一起去图书馆 (Go to library tomorrow morning)",
              "下周末一起去郊游 (Go hiking next weekend)",
              "今晚一起在宿舍做饭 (Cook dinner in the dorm tonight)"
            ],
            "correctAnswer": "明天晚上一起看电影 (Watch a movie together tomorrow night)",
            "explanation": "语音中的核心信息是'明天晚上'与'看电影'。"
          },
          {
            "id": "zh-u2-l4-q8",
            "type": "multiple_choice",
            "prompt": "在时间状语的位置安排上，时间词除了放在主语之后（如'我明天去'），还可以放在什么位置？",
            "options": [
              "直接放在整个句子的最前面（如'明天我去'），起到设定全局时间背景的作用",
              "只能放在动词和宾语之间",
              "必须放在句末",
              "必须紧跟在宾语之后"
            ],
            "correctAnswer": "直接放在整个句子的最前面（如'明天我去'），起到设定全局时间背景的作用",
            "explanation": "时间状语具有灵活性：既可置于主语后（'我明天...'），也可置于句首（'明天我...'）作为话语主题框架。但绝不能像英语一样习惯性丢到句尾。"
          }
        ]
      }
    ]
  },
  {
    "id": "zh-unit-3",
    "unitId": "zh-unit-3",
    "unitNumber": 3,
    "level": "GF 0025-2021 初等三级 / HSK 3",
    "title": "Unit 3: Everyday Autonomy, Experiences & Health (生活自理、经历与身心健康)",
    "subtitle": "动态助词（了/着/过）区分、趋向补语与结果补语、比较句（A比B）、健康就医就诊、逻辑复句关联词。",
    "icon": "HeartHandshake",
    "color": "#10b981",
    "lessons": [
      {
        "id": "zh-u3-l1",
        "title": "Lesson 3.1: 动态助词体系——了、着、过 (Aspect Particles: Le, Zhe, Guo)",
        "description": "深入解析汉语核心体貌系统：'了'表示动作完成或状态改变，'着'表示状态持续，'过'表示过去的经验经历。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u3-l1-q1",
            "type": "multiple_choice",
            "prompt": "在动态助词中，动词后附着'过'（如'我去过中国'、'我吃过烤鸭'）的核心语法意义是什么？",
            "options": [
              "表示该动作在过去曾经发生过，强调某种人生阅历或经验 (Experiential aspect)",
              "表示动作正在持续进行中",
              "表示动作即将发生",
              "表示动作遇到了挫折"
            ],
            "correctAnswer": "表示该动作在过去曾经发生过，强调某种人生阅历或经验 (Experiential aspect)",
            "explanation": "助词'过'（Guo）表示经验体：强调过去的某种经历，该动作在当前已经结束，并且留下了经验体验。"
          },
          {
            "id": "zh-u3-l1-q2",
            "type": "fill_blank",
            "sentence": "外面下着雪，屋里的门一直开 ___。",
            "missingWord": "着",
            "options": ["着", "了", "过", "在"],
            "correctAnswer": "着",
            "explanation": "'着'（Zhe）附在动词后表示动作行为或状态的静态持续（如'门开着'、'穿戴着'、'墙上挂着画'）。"
          },
          {
            "id": "zh-u3-l1-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'吃了晚饭以后，我们去公园散步了'：",
            "tokens": ["吃了晚饭以后，", "我们去公园", "散步了。"],
            "correctAnswer": "吃了晚饭以后， 我们去公园 散步了。",
            "explanation": "句中第一个'了'表示完成伴随（吃了晚饭），句末的'了'表示事态发生并进入新状态。"
          },
          {
            "id": "zh-u3-l1-q4",
            "type": "matching",
            "prompt": "将下列包含助词的句子与对应的语法体貌类型进行匹配：",
            "pairs": [
              { "native": "他喝了一杯咖啡 (Tā hē le yí bēi kāfēi)", "english": "Completed action (实现/完成体)" },
              { "native": "他戴着一副眼镜 (Tā dài zhe yí fù yǎnjìng)", "english": "Continuous state (状态持续体)" },
              { "native": "我从来没去过长城 (Wǒ cónglái méi qù guo)", "english": "Past experience (过去经历体)" },
              { "native": "春天了，天气暖和了 (Nuǎnhuo le)", "english": "Change of state (事态变化体)" }
            ]
          },
          {
            "id": "zh-u3-l1-q5",
            "type": "multiple_choice",
            "prompt": "句末语气助词'了'（如'下雨了'、'我不买了'）与动词后的动态助词'了'（如'我买了一本书'）有何本质区别？",
            "options": [
              "句末'了'表示新情况的出现或事态转变（Change of state）；动词后'了'表示动作行为的实现或完成（Completion）",
              "两者完全相同，没有任何区别",
              "句末'了'表示过去，动词后'了'表示将来",
              "句末'了'只能用于疑问句"
            ],
            "correctAnswer": "句末'了'表示新情况的出现或事态转变（Change of state）；动词后'了'表示动作行为的实现或完成（Completion）",
            "explanation": "句末'了'（语气助词）功能在于指明新信息产生、局面更新（如'降温了'原来不冷现在冷）；动词后'了'（动态助词）紧跟动词指明该行为动作已达成。"
          },
          {
            "id": "zh-u3-l1-q6",
            "type": "fill_blank",
            "sentence": "我从来没有 ___ 这么地道的中国菜。",
            "missingWord": "吃过",
            "options": ["吃过", "吃着", "吃了", "吃在"],
            "correctAnswer": "吃过",
            "explanation": "'从来没有 + V + 过'是表达'从未经历过某事'的经典最高频句式。"
          },
          {
            "id": "zh-u3-l1-q7",
            "type": "audio_listen",
            "audioPhrase": "会议室里坐着很多来自各国的专家。",
            "prompt": "听语音：说话人正在描述会议室里的什么存在状态？",
            "options": [
              "专家们正坐在会议室里（存在状态的持续）",
              "专家们刚刚全部离开了会议室",
              "专家们正在从外面走进来",
              "会议室内空无一人"
            ],
            "correctAnswer": "专家们正坐在会议室里（存在状态的持续）",
            "explanation": "'处所词 + 动词 + 着 + 名词'是现代汉语典型的存现句（存在态）。"
          },
          {
            "id": "zh-u3-l1-q8",
            "type": "multiple_choice",
            "prompt": "对于含有经验助词'过'的句子，正确的否定形式是使用哪一个副词？",
            "options": [
              "使用'没'或'没有'（如'我没去过'），句尾仍保留'过'",
              "使用'不'（如'我不去过'）",
              "使用'别'（如'别去过'）",
              "否定时必须去掉'过'字"
            ],
            "correctAnswer": "使用'没'或'没有'（如'我没去过'），句尾仍保留'过'",
            "explanation": "动作或经验在过去未曾发生，必须用'没/没有'进行否定，且'过'继续保留（'没看过'、'没听过'）。绝不能用'不'！"
          }
        ]
      },
      {
        "id": "zh-u3-l2",
        "title": "Lesson 3.2: 趋向补语与结果补语系统 (Directional & Resultative Complements)",
        "description": "掌握简单趋向补语（来/去）、复合趋向补语（进来/出去/站起来）以及结果补语（看懂、听清、做好、找到）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u3-l2-q1",
            "type": "multiple_choice",
            "prompt": "在趋向补语'动词 + 来/去'中，选择'来'还是'去'的决定性标准是什么？",
            "options": [
              "动作朝向说话人所在位置移动用'来'；动作背离说话人所在位置移动用'去'",
              "动作朝向过去用'去'；朝向未来用'来'",
              "主语是男性用'去'；主语是女性用'来'",
              "两者无规律，可随意替换"
            ],
            "correctAnswer": "动作朝向说话人所在位置移动用'来'；动作背离说话人所在位置移动用'去'",
            "explanation": "'来/去'体现了强烈的视点（Point of View）：朝向说话人视点移动为'来'（如你在屋里对外面人说'快进来'）；背离说话人视点移动为'去'（你在屋里指外面说'你出去'）。"
          },
          {
            "id": "zh-u3-l2-q2",
            "type": "fill_blank",
            "sentence": "老师讲得很清楚，大家都听 ___ 了。",
            "missingWord": "懂",
            "options": ["懂", "看", "去", "往"],
            "correctAnswer": "懂",
            "explanation": "'听懂'（Tīng dǒng）中，'懂'充当听这一行为动作的结果补语，表示理解掌握。"
          },
          {
            "id": "zh-u3-l2-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'请大家把书包拿出来'：",
            "tokens": ["请大家", "把书包", "拿出来。"],
            "correctAnswer": "请大家 把书包 拿出来。",
            "explanation": "'拿出来'为复合趋向补语：动作(拿) + 方向(出) + 视点朝向说话人(来)。"
          },
          {
            "id": "zh-u3-l2-q4",
            "type": "matching",
            "prompt": "将动词短语与对应的补语类型及意义进行匹配：",
            "pairs": [
              { "native": "做好饭 (Zuò hǎo fàn)", "english": "Result: successfully completed and ready (做好)" },
              { "native": "找到钥匙 (Zhǎo dào yàoshi)", "english": "Result: objective attained (找到)" },
              { "native": "站起来 (Zhàn qǐlai)", "english": "Directional: upward movement initiated (站起来)" },
              { "native": "走过去 (Zǒu guòqu)", "english": "Directional: moving away across space (走过去)" }
            ]
          },
          {
            "id": "zh-u3-l2-q5",
            "type": "multiple_choice",
            "prompt": "当动作涉及具体处所名词（如'家'、'教室'）作为复合趋向补语的宾语时，该处所名词必须置于何处？",
            "options": [
              "必须置于'来/去'的前面（如：'回 家 去'，不能说'回去家'）",
              "必须置于整个句子的最前面",
              "必须置于'来/去'的后面",
              "可以随意放置"
            ],
            "correctAnswer": "必须置于'来/去'的前面（如：'回 家 去'，不能说'回去家'）",
            "explanation": "汉语铁律规则：表示处所的名词作宾语时，必须插在趋向词内部，即'动词 + 上/下/进/出/回/过 + 处所名词 + 来/去'（如'进教室来'、'回家去'），绝对不能说'进来到教室'或'回去家'。"
          },
          {
            "id": "zh-u3-l2-q6",
            "type": "fill_blank",
            "sentence": "我找了半天，终于把护照找 ___ 了！",
            "missingWord": "到",
            "options": ["到", "去", "出", "着"],
            "correctAnswer": "到",
            "explanation": "'找到'中的'到'作结果补语，表示搜寻动作达成了既定目标。"
          },
          {
            "id": "zh-u3-l2-q7",
            "type": "audio_listen",
            "audioPhrase": "请同学们翻开课本，跟我读起来！",
            "prompt": "听语音：老师要求学生执行什么课堂动作？",
            "options": [
              "翻开课本并开始跟着老师朗读 (Open textbooks and start reading along)",
              "合上课本准备独立闭卷考试",
              "站起来朗诵黑板上的古诗",
              "离开教室去操场做早操"
            ],
            "correctAnswer": "翻开课本并开始跟着老师朗读 (Open textbooks and start reading along)",
            "explanation": "语音中的'翻开课本'与引申趋向补语'读起来'（表示动作开始并延续）。"
          },
          {
            "id": "zh-u3-l2-q8",
            "type": "multiple_choice",
            "prompt": "趋向补语'起来'除了表示向上动作（如'站起来'）外，常用于引申含义，它的最主要引申意义是什么？",
            "options": [
              "表示动作或状态的开始并继续（如'笑了起来'、'天气暖和起来了'）",
              "表示动作彻底失败",
              "表示动作在很远的地方发生",
              "表示回忆过去的事情"
            ],
            "correctAnswer": "表示动作或状态的开始并继续（如'笑了起来'、'天气暖和起来了'）",
            "explanation": "'V/Adj + 起来'常用作引申补语，表达动作的开启或新状态的展开发展（如'唱起来'、'热闹起来'）。"
          }
        ]
      },
      {
        "id": "zh-u3-l3",
        "title": "Lesson 3.3: 比较句结构与看病就诊 (Comparative 'Bi' & Health Symptoms)",
        "description": "掌握'A 比 B + 形容词'及其扩展结构（大两岁/得多/一点儿），以及医院就诊、身体部位与症状描述表达。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u3-l3-q1",
            "type": "multiple_choice",
            "prompt": "在中文核心比较句'A 比 B + 形容词'中，如果要表达程度很大（如'哥哥比我高得多'），程度补语应当放在何处？",
            "options": [
              "必须放在形容词后面（如：A 比 B 高得多 / 高很多）",
              "放在形容词前面（如：A 比 B 很高级）",
              "必须紧跟在主语后面",
              "放在句末加疑问助词"
            ],
            "correctAnswer": "必须放在形容词后面（如：A 比 B 高得多 / 高很多）",
            "explanation": "比字句铁律：比字句中的谓语形容词前面绝对不能使用程度副词'很'、'非常'、'太'；表示差距很大必须将'得多'、'很多'放在形容词之后作补语（如'大得多'）。"
          },
          {
            "id": "zh-u3-l3-q2",
            "type": "fill_blank",
            "sentence": "医生，我从昨天开始发高烧，嗓子也很 ___。",
            "missingWord": "疼",
            "options": ["疼", "高", "冷", "硬"],
            "correctAnswer": "疼",
            "explanation": "就医问诊中'嗓子疼'（喉咙疼痛，Sǎngzi téng）是上呼吸道感染的常见典型症状。"
          },
          {
            "id": "zh-u3-l3-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'上海的冬天下雪比北京少一点儿'：",
            "tokens": ["上海的冬天", "下雪比北京", "少一点儿。"],
            "correctAnswer": "上海的冬天 下雪比北京 少一点儿。",
            "explanation": "比字句比较幅度表达：A + 比 + B + 谓语形容词 + 数量补语(一点儿)。"
          },
          {
            "id": "zh-u3-l3-q4",
            "type": "matching",
            "prompt": "将下列健康症状与对应的中文诊断建议进行匹配：",
            "pairs": [
              { "native": "感冒发烧 (Gǎnmào fāshāo)", "english": "Catch a cold with fever (多喝水，吃退烧药)" },
              { "native": "胃疼肚子不舒服 (Wèiténg)", "english": "Stomachache (去消化科检查，注意清淡饮食)" },
              { "native": "头晕头痛 (Tóuyūn tóutòng)", "english": "Dizziness and headache (多休息，保证睡眠)" },
              { "native": "按时吃药 (Ànshí chīyào)", "english": "Take medication on schedule (一日三次，饭后服用)" }
            ]
          },
          {
            "id": "zh-u3-l3-q5",
            "type": "multiple_choice",
            "prompt": "比字句的否定形式通常有两种：'A 不比 B...' 与 'A 没有 B...'，两者在语用含义上有何微妙区别？",
            "options": [
              "'A 没有 B...'表示A不如B（A < B）；'A 不比 B...'常用于反驳或持平辩解（A ≥ B 或差距不大）",
              "两者完全相同，没有任何语义区别",
              "'A 没有 B'只能用于金钱数量，不能用于人的特质",
              "'A 不比 B'是病句，普通话没有这种说法"
            ],
            "correctAnswer": "'A 没有 B...'表示A不如B（A < B）；'A 不比 B...'常用于反驳或持平辩解（A ≥ B 或差距不大）",
            "explanation": "这是HSK 3–4级高级辨析点：'我没有他高'明确表示我比他矮（A < B）；而'我不比他差'意在反驳，表示我不比他逊色，甚至比他更强。"
          },
          {
            "id": "zh-u3-l3-q6",
            "type": "fill_blank",
            "sentence": "这个西瓜比那个西瓜 ___ 两公斤。",
            "missingWord": "重",
            "options": ["重", "贵", "大", "长"],
            "correctAnswer": "重",
            "explanation": "与单位'公斤'（重量）搭配的最佳形容词是'重'（Zhòng）。"
          },
          {
            "id": "zh-u3-l3-q7",
            "type": "audio_listen",
            "audioPhrase": "医生诊断说你只是普通流感，按时吃药多休息，过两天就会好起来的。",
            "prompt": "听语音：医生给出的诊断与康复建议是什么？",
            "options": [
              "普通流感，需按时服药休息即可痊愈 (Ordinary flu, rest and take medicine to recover)",
              "严重骨折，需要立即办理住院手术",
              "食物中毒，必须马上进行胃镜检查",
              "没有生病，完全不需要任何调养"
            ],
            "correctAnswer": "普通流感，需按时服药休息即可痊愈 (Ordinary flu, rest and take medicine to recover)",
            "explanation": "语音核心诊断为'普通流感'（Ordinary flu），建议为'按时吃药多休息'。"
          },
          {
            "id": "zh-u3-l3-q8",
            "type": "multiple_choice",
            "prompt": "在中文中表达两者相同时，使用'A 跟/和 B 一样 (+ 形容词)'。如果表示'我和他一样喜欢音乐'，句型中'一样'的位置是？",
            "options": [
              "置于谓语动词或形容词的前面充当状语（如：A 和 B 一样 + 动词/形容词）",
              "必须放在句末",
              "必须放在主语前面",
              "只能用于两个名词并列，不能接动词"
            ],
            "correctAnswer": "置于谓语动词或形容词的前面充当状语（如：A 和 B 一样 + 动词/形容词）",
            "explanation": "公式：A + 和/跟 + B + 一样 (+ Adj/Verb)。例如：'小张和我一样高'、'弟弟跟我一样喜欢打篮球'。"
          }
        ]
      },
      {
        "id": "zh-u3-l4",
        "title": "Lesson 3.4: 逻辑复句关联词与叙事衔接 (Discourse Connectors & Complex Opinions)",
        "description": "掌握转折复句（虽然...但是...）、因果复句（因为...所以...）、递进复句（不但...而且...）与承接连词（先...然后...）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "zh-u3-l4-q1",
            "type": "multiple_choice",
            "prompt": "在现代汉语转折复句中，最经典的成套关联词搭配是哪一组？",
            "options": [
              "虽然……但是/可是…… (Suīrán... dànshì... Although... yet...)",
              "因为……所以…… (Yīnwèi... suǒyǐ...)",
              "如果……就…… (Rúguǒ... jiù...)",
              "只有……才…… (Zhǐyǒu... cái...)"
            ],
            "correctAnswer": "虽然……但是/可是…… (Suīrán... dànshì... Although... yet...)",
            "explanation": "'虽然……但是……'是现代汉语转折关系最规范的核心标志，前句让步，后句转折强调真实意图。"
          },
          {
            "id": "zh-u3-l4-q2",
            "type": "fill_blank",
            "sentence": "他 ___ 聪明，而且学习态度非常刻苦认真。",
            "missingWord": "不但",
            "options": ["不但", "虽然", "因为", "只要"],
            "correctAnswer": "不但",
            "explanation": "'不但……而且……'构成递进复句，后分句的语意在前分句的基础上有更深一层的递进。"
          },
          {
            "id": "zh-u3-l4-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'因为今天下大雨，所以运动会推迟了'：",
            "tokens": ["因为今天下大雨，", "所以运动会", "推迟了。"],
            "correctAnswer": "因为今天下大雨， 所以运动会 推迟了。",
            "explanation": "'因为……所以……'是严格的因果逻辑框架（前因后果）。"
          },
          {
            "id": "zh-u3-l4-q4",
            "type": "matching",
            "prompt": "将下列汉语关联词组合与对应的逻辑关系进行匹配：",
            "pairs": [
              { "native": "因为……所以…… (Yīnwèi... suǒyǐ...)", "english": "Causal relationship (Cause & Effect)" },
              { "native": "虽然……但是…… (Suīrán... dànshì...)", "english": "Adversative relationship (Concession & Contrast)" },
              { "native": "如果……就…… (Rúguǒ... jiù...)", "english": "Conditional hypothesis (Hypothetical condition)" },
              { "native": "不但……而且…… (Búdàn... érqiě...)", "english": "Progressive relationship (Step further / not only... but also)" }
            ]
          },
          {
            "id": "zh-u3-l4-q5",
            "type": "multiple_choice",
            "prompt": "在叙述多项连续发生的事件顺序时，最自然流畅的时间顺承关联词是哪一组？",
            "options": [
              "先……然后……最后…… (First... then... finally...)",
              "如果……因为……虽然……",
              "不但……但是……而且……",
              "一边……一边……一律……"
            ],
            "correctAnswer": "先……然后……最后…… (First... then... finally...)",
            "explanation": "'先……然后……最后……'是口语叙事与写作中理清先后动作承接链条最核心的标准句式。"
          },
          {
            "id": "zh-u3-l4-q6",
            "type": "fill_blank",
            "sentence": "明天的登山活动，___ 下大雨，我们就不去了。",
            "missingWord": "如果",
            "options": ["如果", "虽然", "因为", "不但"],
            "correctAnswer": "如果",
            "explanation": "'如果……就……'用于提出假设条件及相应推论。"
          },
          {
            "id": "zh-u3-l4-q7",
            "type": "audio_listen",
            "audioPhrase": "虽然汉语声调比较难学，但是只要每天坚持开口练习，就一定能说得很流利。",
            "prompt": "听语音：说话人对学习汉语表达的核心观点是什么？",
            "options": [
              "虽然声调难，但只要坚持练习就一定能学好流利 (Tones are tricky, but persistence brings fluency)",
              "汉语太难了，应该尽早放弃",
              "声调完全不重要，不需要练习",
              "只有中国人才能掌握汉语声调"
            ],
            "correctAnswer": "虽然声调难，但只要坚持练习就一定能学好流利 (Tones are tricky, but persistence brings fluency)",
            "explanation": "说话人运用'虽然……但是……只要……就……'表达了辩证乐观的励志观点。"
          },
          {
            "id": "zh-u3-l4-q8",
            "type": "multiple_choice",
            "prompt": "在关联词使用规则中，当前后分句的主语相同时，前关联词（如'因为'、'虽然'）与主语的位置关系是？",
            "options": [
              "主语既可以放在关联词前面，也可以放在关联词后面（如'他虽然忙……'或'虽然他忙……'）",
              "关联词必须一律放在句末",
              "主语必须一律被强制省略",
              "关联词只能出现在偶数句中"
            ],
            "correctAnswer": "主语既可以放在关联词前面，也可以放在关联词后面（如'他虽然忙……'或'虽然他忙……'）",
            "explanation": "前后主语相同时，主语位置相对自由：'虽然他……他还是……'与'他虽然……还是……'均属规范用法。"
          }
        ]
      }
    ]
  }
];
