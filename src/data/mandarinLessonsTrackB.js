// =========================================================================
// Mandarin Chinese Curriculum — Track B: Intermediate & Advanced Stages
// Aligned with CLEC GF 0025-2021 Standards (HSK 4–9 & Cultural Codes)
// Units 4 to 6 • 4 Lessons per Unit = 12 Comprehensive Lessons Total
// =========================================================================

export const mandarinTrackBUnits = [
  {
    "id": "zh-unit-4",
    "unitId": "zh-unit-4",
    "unitNumber": 4,
    "level": "GF 0025-2021 中等四级 / HSK 4",
    "title": "Unit 4: Social Interface & Structural Precision (社会交际与核心句式解构)",
    "subtitle": "处置式'把'字句、被动式'被'字句、结构助词（的/地/得）精确辨析、可能补语（V得C / V不C）与职场协作。",
    "icon": "Layers",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "zh-u4-l1",
        "title": "Lesson 4.1: 处置式'把'字句语法解构 (The Disposal 'Ba' Construction)",
        "description": "系统掌握把字句黄金结构：主语 + 把 + 宾语 + 谓语动词 + 其他成分（结果/趋向/了），以及否定词和能愿动词置于'把'前的强制规则。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "zh-u4-l1-q1",
            "type": "multiple_choice",
            "prompt": "在现代汉语语法中，触发处置式'把'字句的核心交际动因是什么？",
            "options": [
              "强调施事者对受事客体施加了某种动作影响，使受事者发生位置移动、状态改变或产生某种处置结果",
              "仅仅为了将宾语提前，没有任何语法意义改变",
              "表示动作发生的被动受害色彩",
              "只用于否定句和疑问句中"
            ],
            "correctAnswer": "强调施事者对受事客体施加了某种动作影响，使受事者发生位置移动、状态改变或产生某种处置结果",
            "explanation": "'把'字句又称处置式（Disposal Construction）：主语对宾语加以积极处置，使客体产生实质性的处置结果（如：'我把作业写完了'、'他把咖啡喝了'）。"
          },
          {
            "id": "zh-u4-l1-q2",
            "type": "fill_blank",
            "sentence": "出门前，你一定要记得把门窗关 ___。",
            "missingWord": "好",
            "options": ["好", "在", "着", "把"],
            "correctAnswer": "好",
            "explanation": "把字句的谓语动词后面必须有'其他成分'（Other Element），不能是一个光秃秃的单个动词。'关好'中的'好'充当结果补语，满足完整处置要求。"
          },
          {
            "id": "zh-u4-l1-q3",
            "type": "scramble",
            "prompt": "连词成句：将词块排列成严格符合把字句否定规则的句子：",
            "tokens": ["你千万不要", "把这件事", "告诉别人。"],
            "correctAnswer": "你千万不要 把这件事 告诉别人。",
            "explanation": "把字句铁律：否定词（不、没、别、不要）以及能愿动词（想、应该、能）必须严格放在'把'字的前面！"
          },
          {
            "id": "zh-u4-l1-q4",
            "type": "matching",
            "prompt": "将下列把字句例句与对应的'其他成分'处置类型进行匹配：",
            "pairs": [
              { "native": "他把护照放进包里了 (Fàng jìn bāo lǐ)", "english": "Spatial relocation (动词+趋向/处所补语)" },
              { "native": "我把那个复杂问题解决了 (Jiějué le)", "english": "State transformation / completion (动词+结果/了)" },
              { "native": "请把这封邮件发给张总 (Fā gěi Zhāng zǒng)", "english": "Object transfer (动词+给+对象)" },
              { "native": "服务员把桌子擦得干干净净 (Cā de gāngānjìngjìng)", "english": "Degree assessment (动词+得+程度补语)" }
            ]
          },
          {
            "id": "zh-u4-l1-q5",
            "type": "multiple_choice",
            "prompt": "根据国家语委与CLEC考纲，下列哪类动词通常绝对不能用于'把'字句中？",
            "options": [
              "无处置性、感知心理或判断动词（如：是、有、在、喜欢、知道、看见）",
              "动作行为动词（如：搬、洗、打、卖、吃）",
              "位移动词（如：拿、寄、放）",
              "改变状态动词（如：弄坏、修好）"
            ],
            "correctAnswer": "无处置性、感知心理或判断动词（如：是、有、在、喜欢、知道、看见）",
            "explanation": "把字句要求动词具备处置能力。不能产生处置结果的动词（'有'、'是'、'认识'、'同意'、'觉得'）绝对不能构成把字句（如不能说'我把我妈妈喜欢'）。"
          },
          {
            "id": "zh-u4-l1-q6",
            "type": "fill_blank",
            "sentence": "小王，你能不能 ___ 刚才讨论的会议记录整理一下？",
            "missingWord": "把",
            "options": ["把", "被", "在", "给"],
            "correctAnswer": "把",
            "explanation": "'把 + 会议记录（确定宾语） + 整理一下（动作+其他成分）'是职场高效布置任务的标准把字句。"
          },
          {
            "id": "zh-u4-l1-q7",
            "type": "audio_listen",
            "audioPhrase": "请大家在下班之前，把今天统计好的数据报表发到总监的邮箱里。",
            "prompt": "听语音：说话人在下班前对部门员工提出的具体工作要求是什么？",
            "options": [
              "将统计好的数据报表发送至总监邮箱 (Email the finalized data reports to director's inbox)",
              "打印所有报表送至前台档案室",
              "删除今天所有统计的未定稿数据",
              "明天上午召开全体报表复核会"
            ],
            "correctAnswer": "将统计好的数据报表发送至总监邮箱 (Email the finalized data reports to director's inbox)",
            "explanation": "语音中的把字结构为：'把今天统计好的数据报表' + '发到总监的邮箱里'。"
          },
          {
            "id": "zh-u4-l1-q8",
            "type": "multiple_choice",
            "prompt": "在把字句中，被'把'字提前的宾语（受事对象）必须具备什么语义认知特征？",
            "options": [
              "必须是说话人和听话人双方已知、确指的具体事物 (Definite / Specific reference)",
              "必须是泛指的、不确定的任意未知事物 (Indefinite reference)",
              "必须是抽象名词，不能是具体物品",
              "必须是人，不能是事物"
            ],
            "correctAnswer": "必须是说话人和听话人双方已知、确指的具体事物 (Definite / Specific reference)",
            "explanation": "把字句的受事宾语具有定指性（Definiteness）：必须是上下文已知的特定事物。可以说'把我买的书看了'，但不能说'我把一本书看了'。"
          }
        ]
      },
      {
        "id": "zh-u4-l2",
        "title": "Lesson 4.2: 被动式'被'字句与被动语态 (The Passive 'Bei' Construction)",
        "description": "掌握被动句结构（受事主语 + 被/叫/让 + 施事 + 动词 + 其他成分）、不幸/损害语用色彩及现代中性被动态的发展。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "zh-u4-l2-q1",
            "type": "multiple_choice",
            "prompt": "传统汉语被动式'被'字句在情感语用色彩上最显著的历史特征是什么？",
            "options": [
              "多用于表达不愉快、遭受损失、不如意或受损害的消极事件 (Adversative / Malefactive passive)",
              "只用于表达极其高兴的喜庆吉利事件",
              "完全中立，没有任何情感偏向",
              "只能用于古汉语书面语，口语绝对不使用"
            ],
            "correctAnswer": "多用于表达不愉快、遭受损失、不如意或受损害的消极事件 (Adversative / Malefactive passive)",
            "explanation": "传统汉语'被'字句带有强烈的'受损/不如意'（Adversative）色彩（如'自行车被偷了'、'茶杯被打碎了'）。虽受翻译影响现代中文有中性被动句，但消极色彩依然高频。"
          },
          {
            "id": "zh-u4-l2-q2",
            "type": "fill_blank",
            "sentence": "放在桌子上的那块蛋糕 ___ 弟弟吃光了。",
            "missingWord": "被",
            "options": ["被", "把", "比", "向"],
            "correctAnswer": "被",
            "explanation": "'蛋糕（受事）+ 被 + 弟弟（施事）+ 吃光了（动词+补语）'构成标准被字句。"
          },
          {
            "id": "zh-u4-l2-q3",
            "type": "scramble",
            "prompt": "连词成句：将词块排列成'他的手机在地铁里被小偷偷走了'：",
            "tokens": ["他的手机在地铁里", "被小偷", "偷走了。"],
            "correctAnswer": "他的手机在地铁里 被小偷 偷走了。",
            "explanation": "典型被字句：主语(他的手机) + 地点(在地铁里) + 被 + 施事者(小偷) + 动词及补语(偷走了)。"
          },
          {
            "id": "zh-u4-l2-q4",
            "type": "matching",
            "prompt": "将下列不同语体的被动介词与其使用场合进行匹配：",
            "pairs": [
              { "native": "被 (Bèi)", "english": "Universal standard / Formal & Written (书籍被借走了)" },
              { "native": "叫 (Jiào) / 让 (Ràng)", "english": "Spoken colloquial — agent cannot be omitted (叫狗给咬了)" },
              { "native": "由 (Yóu)", "english": "Institutional assignment / responsibility (由专家委员会评审)" },
              { "native": "为……所…… (Wéi... suǒ...)", "english": "Classical / High written register (为大家所熟知)" }
            ]
          },
          {
            "id": "zh-u4-l2-q5",
            "type": "multiple_choice",
            "prompt": "在口语被动句中使用介词'让'或'叫'时，与'被'字句相比有一条强制性的语法约束是什么？",
            "options": [
              "'让'或'叫'的后面必须显式出现具体施事者，绝不能省略施事者（不能说'衣服叫淋湿了'，必须说'叫雨淋湿了'）",
              "'让'和'叫'后面绝对不能跟施事者",
              "'让'和'叫'不能带任何动词",
              "'让'和'叫'只能用于反问句"
            ],
            "correctAnswer": "'让'或'叫'的后面必须显式出现具体施事者，绝不能省略施事者（不能说'衣服叫淋湿了'，必须说'叫雨淋湿了'）",
            "explanation": "'被'字句的施事者可以省略（如'手机被偷了'）；但口语中的'让'和'叫'后面必须带出发出动作的人或物，若不知是谁也要加上'人'（如'叫人给拿走了'）。"
          },
          {
            "id": "zh-u4-l2-q6",
            "type": "fill_blank",
            "sentence": "这篇文章写得太深刻了，深深地 ___ 广大读者所喜爱。",
            "missingWord": "为",
            "options": ["为", "把", "跟", "在"],
            "correctAnswer": "为",
            "explanation": "'为……所……'（Wéi... suǒ...）是书面语高阶被动固定格式（如'为人所知'、'为读者所喜爱'）。"
          },
          {
            "id": "zh-u4-l2-q7",
            "type": "audio_listen",
            "audioPhrase": "这个极富创意的城市绿化方案最终被市政规划委员会一致通过了。",
            "prompt": "听语音：城市绿化方案在市政委员会获得了怎样的审批结果？",
            "options": [
              "被一致投票通过实施 (Unanimously approved by municipal planning committee)",
              "被彻底否决并取消立项",
              "需要延期到下半年重新论证",
              "委员会对其存在严重分歧"
            ],
            "correctAnswer": "被一致投票通过实施 (Unanimously approved by municipal planning committee)",
            "explanation": "语音中的中性褒义被动句：'最终被……一致通过了'。"
          },
          {
            "id": "zh-u4-l2-q8",
            "type": "multiple_choice",
            "prompt": "对于不需要突出施事者、客观事实显而易见的情境，汉语通常使用什么语法结构而不是'被'字句？",
            "options": [
              "无标志意义被动句（受事主语句，如'信寄了'、'衣服洗干净了'）",
              "倒装疑问句",
              "强制使用'把'字句",
              "在句首加助词'着'"
            ],
            "correctAnswer": "无标志意义被动句（受事主语句，如'信寄了'、'衣服洗干净了'）",
            "explanation": "汉语是意合语言。自然事理中物体不可能自己执行动作时，直接将受事作为主语（'作业写好了'、'饭做完了'），无需画蛇添足强行使用'被'字。"
          }
        ]
      },
      {
        "id": "zh-u4-l3",
        "title": "Lesson 4.3: 结构助词'的、地、得'精确辨析 (Discrimination of De, Di, De)",
        "description": "彻底攻克国际中文学习者的核心痛点：定语标记'的'、状语标记'地'、补语标记'得'的功能区分与书写规范。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "zh-u4-l3-q1",
            "type": "multiple_choice",
            "prompt": "现代汉语规范中，三个读音同为'de'的结构助词（的、地、得）的分工原则是什么？",
            "options": [
              "'的'修饰名词（定语标志）；'地'修饰动词/形容词（状语标志）；'得'引出动词/形容词后的评价补语（补语标志）",
              "'的'修饰动词，'地'修饰名词，'得'修饰介词",
              "三者只在古文中区分，现代普通话可以完全随机通用",
              "'得'放在句子开头，'的'放在句中，'地'放在句末"
            ],
            "correctAnswer": "'的'修饰名词（定语标志）；'地'修饰动词/形容词（状语标志）；'得'引出动词/形容词后的评价补语（补语标志）",
            "explanation": "记忆口诀：名词前面白勺'的'（漂亮的衣服）；动词前面土也'地'（飞快地跑）；动词形容词后面双人'得'（跑得飞快、累得很）。"
          },
          {
            "id": "zh-u4-l3-q2",
            "type": "fill_blank",
            "sentence": "听完这个感人的故事，大家都感动 ___ 流下了热泪。",
            "missingWord": "得",
            "options": ["得", "的", "地", "着"],
            "correctAnswer": "得",
            "explanation": "'感动'（形容词/心理动词）后引出情态程度补语'流下了热泪'，必须使用结构助词'得'（Dé）。"
          },
          {
            "id": "zh-u4-l3-q3",
            "type": "scramble",
            "prompt": "连词成句：将词块组合为正确运用'地'和'得'的句子：",
            "tokens": ["他认真地分析了数据，", "报告写得", "非常专业。"],
            "correctAnswer": "他认真地分析了数据， 报告写得 非常专业。",
            "explanation": "'认真地'（状语修饰分析），'写得非常专业'（得引出程度补语）。"
          },
          {
            "id": "zh-u4-l3-q4",
            "type": "matching",
            "prompt": "将下列短语与对应的结构助词功能进行精确匹配：",
            "pairs": [
              { "native": "盛开的花朵 (Shèngkāi de huāduǒ)", "english": "Attributive + Noun (的)" },
              { "native": "耐心地解释 (Nàixīn de jiěshì)", "english": "Adverbial + Verb (地)" },
              { "native": "说得流利 (Shuō de liúlì)", "english": "Verb + Complement (得)" },
              { "native": "红得很透 (Hóng de hěn tòu)", "english": "Adjective + Complement (得)" }
            ]
          },
          {
            "id": "zh-u4-l3-q5",
            "type": "multiple_choice",
            "prompt": "下列哪一个句子在'的/地/得'的使用上存在严重语法错误？",
            "options": [
              "他跑的太快了，我根本追不上。(错误：应使用'得')",
              "他跑得太快了，我根本追不上。(正确)",
              "她激动地流下了眼泪。(正确)",
              "这是一本非常有趣的书。(正确)"
            ],
            "correctAnswer": "他跑的太快了，我根本追不上。(错误：应使用'得')",
            "explanation": "动词'跑'后接程度评价'太快了'，属于补语结构，必须用'得'（跑得太快），写成'跑的'是典型的高频用字错误。"
          },
          {
            "id": "zh-u4-l3-q6",
            "type": "fill_blank",
            "sentence": "小鸟在树枝上快乐 ___ 唱着歌。",
            "missingWord": "地",
            "options": ["地", "的", "得", "在"],
            "correctAnswer": "地",
            "explanation": "形容词'快乐'作状语修饰谓语动词'唱'，必须使用状语标记词'地'（De）。"
          },
          {
            "id": "zh-u4-l3-q7",
            "type": "audio_listen",
            "audioPhrase": "面对突发技术故障，工程师沉着冷静地排查，系统很快恢复了稳定运行。",
            "prompt": "听语音：工程师是以怎样的状态处理突发故障的？",
            "options": [
              "沉着冷静地排查检修 (Calmly and composedly troubleshooting the issue)",
              "慌张失措地向外界求援",
              "草率地直接重启所有服务器",
              "推卸责任给其他同事"
            ],
            "correctAnswer": "沉着冷静地排查检修 (Calmly and composedly troubleshooting the issue)",
            "explanation": "语音中的状语结构为'沉着冷静地排查'。"
          },
          {
            "id": "zh-u4-l3-q8",
            "type": "multiple_choice",
            "prompt": "在'动词 + 得/不 + 补语'结构中，'得'扮演了什么特殊语法功能？",
            "options": [
              "作为可能补语的肯定标志（如'看得懂'表示具备看懂的客观条件或能力）",
              "表示动作已经完全结束",
              "表示动作的被动受损",
              "充当句子的主语"
            ],
            "correctAnswer": "作为可能补语的肯定标志（如'看得懂'表示具备看懂的客观条件或能力）",
            "explanation": "'V + 得 + C'是可能补语肯定式（如'做得了'、'听得清'），否定式则是将'得'替换为'不'（'做不了'、'听不清'）。"
          }
        ]
      },
      {
        "id": "zh-u4-l4",
        "title": "Lesson 4.4: 可能补语与职场谈判协作 (Potential Complements & Workplace Negotiation)",
        "description": "掌握可能补语（做得了/做不了、听得懂/听不懂、来得及/来不及）及职场沟通、任务排期与解决冲突表达。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "zh-u4-l4-q1",
            "type": "multiple_choice",
            "prompt": "在职场时间节点管理中，表达'距离会议开始还有足够时间，不会迟到'，最常用的可能补语短语是？",
            "options": [
              "来得及 (Lái de jí)",
              "来不及 (Lái bu jí)",
              "回得去 (Huí de qù)",
              "买得到 (Mǎi de dào)"
            ],
            "correctAnswer": "来得及 (Lái de jí)",
            "explanation": "'来得及'（There is still time / will make it）与'来不及'（Too late / won't make it）是衡量时间宽裕度的固定可能补语形态。"
          },
          {
            "id": "zh-u4-l4-q2",
            "type": "fill_blank",
            "sentence": "这个项目工期很紧，仅靠两个人根本做不 ___，必须增加人手。",
            "missingWord": "完",
            "options": ["完", "好", "走", "看"],
            "correctAnswer": "完",
            "explanation": "'做不完'（Cannot finish）为可能补语否定式，表示在客观限制下无法完成既定工作量。"
          },
          {
            "id": "zh-u4-l4-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'只要大家同心协力，困难就一定解决得了'：",
            "tokens": ["只要大家同心协力，", "困难就一定", "解决得了。"],
            "correctAnswer": "只要大家同心协力， 困难就一定 解决得了。",
            "explanation": "'解决得了'（Jiějué de liǎo）表示客观上具备克服困难的切实可行性。"
          },
          {
            "id": "zh-u4-l4-q4",
            "type": "matching",
            "prompt": "将下列常用可能补语与对应的职场实际含义进行匹配：",
            "pairs": [
              { "native": "吃得消 (Chī de xiāo)", "english": "Able to bear the physical/mental workload (吃得消/吃不消)" },
              { "native": "合得来 (Hé de lái)", "english": "Get along well with team members (和同事合得来)" },
              { "native": "靠得住 (Kào de zhù)", "english": "Trustworthy and reliable (这个人工作很靠得住)" },
              { "native": "顾得上 (Gù de shàng)", "english": "Able to attend to / take care of (太忙了顾不上)" }
            ]
          },
          {
            "id": "zh-u4-l4-q5",
            "type": "multiple_choice",
            "prompt": "当'把'字句与可能补语（如'看得完'）相遇时，现代汉语语法有何严格限制？",
            "options": [
              "把字句中通常绝对不能使用可能补语（不能说'我把书看得完'，必须说'我能把书看完'）",
              "把字句必须强制搭配可能补语",
              "两者可以自由拼贴组合",
              "只有否定时才可以结合"
            ],
            "correctAnswer": "把字句中通常绝对不能使用可能补语（不能说'我把书看得完'，必须说'我能把书看完'）",
            "explanation": "高级语法铁律：把字句表示既定处置，而可能补语表示未发生的可能性，两者语义存在冲突。如需表达可能性，应将能愿动词'能/可以'移到'把'字前（'我能把作业写完'）。"
          },
          {
            "id": "zh-u4-l4-q6",
            "type": "fill_blank",
            "sentence": "主讲人麦克风声音太小了，坐在最后一排的观众完全听不 ___。",
            "missingWord": "清",
            "options": ["清", "去", "开", "起"],
            "correctAnswer": "清",
            "explanation": "'听不清'（Tīng bu qīng）表示受外界声音阻隔无法清晰辨别话语。"
          },
          {
            "id": "zh-u4-l4-q7",
            "type": "audio_listen",
            "audioPhrase": "张经理，下周二的方案交付，如果今天能敲定设计图纸，我们组绝对赶得出来！",
            "prompt": "听语音：发言员工对方案交付给出的进度判断是什么？",
            "options": [
              "只要今天敲定图纸，下周二完全有把握按时赶出方案 (Will definitely deliver on time if designs approved today)",
              "即使图纸敲定也绝对来不及交付",
              "要求将交付延后到下个月末",
              "设计图纸存在重大缺陷无法继续"
            ],
            "correctAnswer": "只要今天敲定图纸，下周二完全有把握按时赶出方案 (Will definitely deliver on time if designs approved today)",
            "explanation": "语音核心可能补语为'绝对赶得出来'（Able to rush out and deliver on time）。"
          },
          {
            "id": "zh-u4-l4-q8",
            "type": "multiple_choice",
            "prompt": "可能补语'看得起 / 看不起'在现代汉语中的特化含义是？",
            "options": [
              "表示对某人的人格、能力重视尊重或傲慢轻视 (To think highly of / To look down upon)",
              "视力很好能看清远方",
              "门票价格太贵买不起",
              "看书看到早晨起床"
            ],
            "correctAnswer": "表示对某人的人格、能力重视尊重或傲慢轻视 (To think highly of / To look down upon)",
            "explanation": "'看得起'（敬重、器重）与'看不起'（藐视、轻视）是汉语中高度特化的心理评价类动补熟语。"
          }
        ]
      }
    ]
  },
  {
    "id": "zh-unit-5",
    "unitId": "zh-unit-5",
    "unitNumber": 5,
    "level": "GF 0025-2021 中等五/六级 / HSK 5-6",
    "title": "Unit 5: Discourse, Media & Expository Synthesis (新闻媒体、社会议题与深度阅读)",
    "subtitle": "数字经济与科技转型、绿色生态文明、高频成语四字格恰切运用、书面语语体标志与学术议论文结构剖析。",
    "icon": "FileText",
    "color": "#8b5cf6",
    "lessons": [
      {
        "id": "zh-u5-l1",
        "title": "Lesson 5.1: 数字经济与科技转型 (Digital Economy & Tech Transformation)",
        "description": "掌握移动互联、人工智能、产业升级、大数据及当代中国科技经济高频政经术语与图表分析表达。",
        "xp": 35,
        "completed": false,
        "questions": [
          {
            "id": "zh-u5-l1-q1",
            "type": "multiple_choice",
            "prompt": "在现代中国经贸报道中，'实体经济与数字技术深度融合'这一表述的核心内涵是？",
            "options": [
              "通过大数据、云计算与人工智能推动传统制造业、零售业的数字化智能化升级",
              "彻底取缔所有实体工厂，全盘转为虚拟元宇宙",
              "要求所有消费者只能在实体店用现金交易",
              "仅指开发更多的手机娱乐游戏应用"
            ],
            "correctAnswer": "通过大数据、云计算与人工智能推动传统制造业、零售业的数字化智能化升级",
            "explanation": "'数实融合'（数智化赋能实体经济）是国家中长期经济规划中促进高质量发展与产业转型升级的核心政策用语。"
          },
          {
            "id": "zh-u5-l1-q2",
            "type": "fill_blank",
            "sentence": "科技创新的核心在于突破关键核心技术的'卡脖子'瓶颈，实现高水平自立自 ___。",
            "missingWord": "强",
            "options": ["强", "高", "立", "主"],
            "correctAnswer": "强",
            "explanation": "'科技自立自强'（Self-reliance and strength in science and technology）是高级新闻政治文献高频固定成语化政经短语。"
          },
          {
            "id": "zh-u5-l1-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'移动支付的普及极大降低了社会交易成本'：",
            "tokens": ["移动支付的普及，", "极大降低了", "社会交易成本。"],
            "correctAnswer": "移动支付的普及， 极大降低了 社会交易成本。",
            "explanation": "标准的宏观经济社论语篇架构：主语(现象名词短语) + 状语 + 谓语(动宾结构)。"
          },
          {
            "id": "zh-u5-l1-q4",
            "type": "matching",
            "prompt": "将当代科技经济术语与对应的行业范畴进行匹配：",
            "pairs": [
              { "native": "算力基础设施 (Suànlì jǐchǔ shèshī)", "english": "Computing power & Cloud data centers" },
              { "native": "新质生产力 (Xīnzhì shēngchǎnlì)", "english": "New quality productive forces (Innovation-driven)" },
              { "native": "供应链韧性 (Gōngyìngliàn rènxìng)", "english": "Supply chain resilience & security" },
              { "native": "普惠金融 (Pǔhuì jǐnróng)", "english": "Inclusive finance for small businesses" }
            ]
          },
          {
            "id": "zh-u5-l1-q5",
            "type": "multiple_choice",
            "prompt": "在学术与经贸报道中，描述统计数据增长趋势时，'同比'与'环比'的精确统计学区别是？",
            "options": [
              "'同比'指与上一年同期相比；'环比'指与相邻的上一个统计周期（如上一月/上一季）相比",
              "'同比'指比同行业；'环比'指比全球平均",
              "两者完全相同，只是不同学派的翻译",
              "'同比'只看数量，'环比'只看金额"
            ],
            "correctAnswer": "'同比'指与上一年同期相比；'环比'指与相邻的上一个统计周期（如上一月/上一季）相比",
            "explanation": "HSK 5/6级图表阅读必考：'同比增长15%'（Year-on-Year vs same period last year）；'环比增长2%'（Month-on-Month vs previous contiguous cycle）。"
          },
          {
            "id": "zh-u5-l1-q6",
            "type": "fill_blank",
            "sentence": "电商平台通过算法推荐精准 ___ 消费者的潜在需求。",
            "missingWord": "匹配",
            "options": ["匹配", "对比", "反对", "拒绝"],
            "correctAnswer": "匹配",
            "explanation": "'精准匹配'（Accurately match / align）是现代商业科技报告的高频动宾搭档。"
          },
          {
            "id": "zh-u5-l1-q7",
            "type": "audio_listen",
            "audioPhrase": "我国新能源汽车产销量已连续多年位居全球首位，技术创新与完善的产业链成为出海的核心驱动力。",
            "prompt": "听语音：新能源汽车行业在全球保持领先的关键竞争优势是什么？",
            "options": [
              "技术自主创新与健全完善的产业链体系 (Technological innovation & complete industrial chains)",
              "主要依赖从国外大规模进口核心电池部件",
              "国内市场饱和已无法进行海外出口",
              "车辆生产成本居高不下"
            ],
            "correctAnswer": "技术自主创新与健全完善的产业链体系 (Technological innovation & complete industrial chains)",
            "explanation": "语音中的核心结论为：'技术创新与完善的产业链成为出海的核心驱动力'。"
          },
          {
            "id": "zh-u5-l1-q8",
            "type": "multiple_choice",
            "prompt": "动词'赋能'在当下中文商业科技文本中被极高频使用，它的核心含义最贴近于？",
            "options": [
              "赋予能力/技术支撑以推动其产出更大价值 (Empower / Enable)",
              "强制收取能源费用",
              "停止供应电力资源",
              "没收全部数字资产"
            ],
            "correctAnswer": "赋予能力/技术支撑以推动其产出更大价值 (Empower / Enable)",
            "explanation": "'数字技术为传统行业赋能'（Digital technologies empower traditional industries）是当下最典型的跨领域隐喻新词。"
          }
        ]
      },
      {
        "id": "zh-u5-l2",
        "title": "Lesson 5.2: 生态文明与可持续发展 (Ecological Conservation & Sustainability)",
        "description": "探讨碳达峰碳中和（双碳目标）、生物多样性、新能源体系建设及生态文明议论文的谋篇布局。",
        "xp": 35,
        "completed": false,
        "questions": [
          {
            "id": "zh-u5-l2-q1",
            "type": "multiple_choice",
            "prompt": "中国政府承诺的'双碳'战略目标，具体是指哪两个具有约束力的人类应对气候变化里程碑？",
            "options": [
              "力争2030年前实现碳达峰，2060年前实现碳中和 (Carbon Peak before 2030, Carbon Neutrality before 2060)",
              "2025年碳达峰，2035年碳中和",
              "2050年碳达峰，2100年碳中和",
              "立即全面停止一切碳排放工业"
            ],
            "correctAnswer": "力争2030年前实现碳达峰，2060年前实现碳中和 (Carbon Peak before 2030, Carbon Neutrality before 2060)",
            "explanation": "根据国家重大绿色战略部署：中国力争在2030年前二氧化碳排放达到峰值（碳达峰），努力争取在2060年前实现二氧化碳净零排放（碳中和）。"
          },
          {
            "id": "zh-u5-l2-q2",
            "type": "fill_blank",
            "sentence": "绿水青山就是金山银 ___，这生动阐释了生态保护与经济发展的辩证统一关系。",
            "missingWord": "山",
            "options": ["山", "矿", "海", "地"],
            "correctAnswer": "山",
            "explanation": "'绿水青山就是金山银山'（Lucid waters and lush mountains are invaluable assets）是当代生态文明思想的标志性理念。"
          },
          {
            "id": "zh-u5-l2-q3",
            "type": "scramble",
            "prompt": "连词成句：将词语排列成'保护生态环境就是保护生产力'：",
            "tokens": ["保护生态环境，", "就是", "保护生产力。"],
            "correctAnswer": "保护生态环境， 就是 保护生产力。",
            "explanation": "名言哲理型议论句：动宾短语充当主题主语，'就是'连接本质判断。"
          },
          {
            "id": "zh-u5-l2-q4",
            "type": "matching",
            "prompt": "将生态环保核心概念与对应的英文学术译法进行匹配：",
            "pairs": [
              { "native": "碳排放交易 (Tàn páifàng jiāoyì)", "english": "Carbon emissions trading / Cap-and-trade" },
              { "native": "生物多样性保护 (Shēngwù duōyàngxìng)", "english": "Biodiversity conservation" },
              { "native": "可再生清洁能源 (Kězàishēng néngyuán)", "english": "Renewable clean energy (solar/wind/hydro)" },
              { "native": "循环经济模式 (Xúnhuán jīngjì)", "english": "Circular economy model (reuse/recycle)" }
            ]
          },
          {
            "id": "zh-u5-l2-q5",
            "type": "multiple_choice",
            "prompt": "在阅读议论文时，作者为了驳斥'保护环境会阻碍经济发展'的错误观点，常使用什么论证逻辑？",
            "options": [
              "立破并举：通过绿色低碳新兴产业创造高附加值就业的客观数据，论证生态与经济的协同增效",
              "承认环境与经济绝对不相容，全盘放弃工业",
              "声称全球变暖纯属自然现象，与人类生产无关",
              "仅仅列举古代神话故事进行直觉辩护"
            ],
            "correctAnswer": "立破并举：通过绿色低碳新兴产业创造高附加值就业的客观数据，论证生态与经济的协同增效",
            "explanation": "中高级中文议论文（Dokkai / 议论文阅读）的核心思维特征是辩证统一：发展与保护不是零和博弈（Zero-sum game），而是绿色转型催生新增长动能。"
          },
          {
            "id": "zh-u5-l2-q6",
            "type": "fill_blank",
            "sentence": "治理水污染绝不能'头痛医头、脚痛医脚'，而必须坚持山水林田湖草沙的一体化保 ___ 与系统治理。",
            "missingWord": "护",
            "options": ["护", "持", "守", "管"],
            "correctAnswer": "护",
            "explanation": "'一体化保护与系统治理'是生态治理系统性思维的标准规范用语。"
          },
          {
            "id": "zh-u5-l2-q7",
            "type": "audio_listen",
            "audioPhrase": "沙漠化土地治理不仅改善了当地小气候，更为周边农牧民开辟了发展特色光伏与生态种植的增收新渠道。",
            "prompt": "听语音：防沙治沙工程带来了哪些综合效益？",
            "options": [
              "生态改善（气候）与民生增收（光伏及种植）的双重红利",
              "仅改善了旅游景观，造成当地农牧民收入大幅减少",
              "导致沙漠化进一步加剧恶化",
              "由于成本过高被迫停工"
            ],
            "correctAnswer": "生态改善（气候）与民生增收（光伏及种植）的双重红利",
            "explanation": "语音强调了治理的复合效益：'不仅改善了……更为……开辟了增收新渠道'。"
          },
          {
            "id": "zh-u5-l2-q8",
            "type": "multiple_choice",
            "prompt": "在书面社论中，成语'竭泽而渔'最常用于比喻和警戒什么样的发展行为？",
            "options": [
              "为了眼前片面微小利益而彻底透支摧毁赖以生存的长远自然资本",
              "在湖泊里捕捞大量肥鱼并进行分销",
              "修筑水坝水库阻断河流自然流淌",
              "科学家在深海进行鱼类基因测序"
            ],
            "correctAnswer": "为了眼前片面微小利益而彻底透支摧毁赖以生存的长远自然资本",
            "explanation": "'竭泽而渔'（Draining the pond to catch all the fish）是中文论述可持续发展时最经典的典故成语，斥责短视剥削自然的行为。"
          }
        ]
      },
      {
        "id": "zh-u5-l3",
        "title": "Lesson 5.3: 成语精髓与语境恰切运用 (Idiomatic Chengyu in Context)",
        "description": "精读并辨析HSK 5/6核心成语：举一反三、按部就班、饮水思源、半途而废、防患于未然在论述语境中的精准运用。",
        "xp": 35,
        "completed": false,
        "questions": [
          {
            "id": "zh-u5-l3-q1",
            "type": "multiple_choice",
            "prompt": "成语'举一反三'源自《论语》，在现代教育和思维训练中用来指代什么核心能力？",
            "options": [
              "从已知的一件事情中能够类推推知其他同类事物的规律，具有极强的触类旁通能力",
              "一个人做一道数学题需要反复演算三遍",
              "三个人共同合力完成一个工程项目",
              "只要反对别人的三次意见就可以通过方案"
            ],
            "correctAnswer": "从已知的一件事情中能够类推推知其他同类事物的规律，具有极强的触类旁通能力",
            "explanation": "'举一反三'（Draw inferences about other cases from one instance）是中文描述学习领悟力强、能触类旁通的最常用褒义成语。"
          },
          {
            "id": "zh-u5-l3-q2",
            "type": "fill_blank",
            "sentence": "科研攻关必须要有持之以恒的毅力，最忌讳的是三天打鱼两天晒网、半途而 ___。",
            "missingWord": "废",
            "options": ["废", "退", "弃", "止"],
            "correctAnswer": "废",
            "explanation": "'半途而废'（Bàn tú ér fèi）形容做事不能坚持到底，半路上就停止废弃（Give up halfway）。"
          },
          {
            "id": "zh-u5-l3-q3",
            "type": "scramble",
            "prompt": "连词成句：将成语与词语组合为'学习任何外语都必须循序渐进'：",
            "tokens": ["学习任何外语，", "都必须", "循序渐进。"],
            "correctAnswer": "学习任何外语， 都必须 循序渐进。",
            "explanation": "'循序渐进'（Xún xù jiàn jìn）指按照科学合理的次序步骤逐渐深入推进。"
          },
          {
            "id": "zh-u5-l3-q4",
            "type": "matching",
            "prompt": "将下列常用高频成语与对应的褒贬感情色彩及释义进行匹配：",
            "pairs": [
              { "native": "饮水思源 (Yǐn shuǐ sī yuán)", "english": "Commendatory (褒义): Never forget one's origins or benefactors" },
              { "native": "掩耳盗铃 (Yǎn ěr dào líng)", "english": "Derogatory (贬义): Deceiving oneself through foolish self-delusion" },
              { "native": "防患未然 (Fáng huàn wèi rán)", "english": "Neutral/Commendatory: Take preventative measures before disaster" },
              { "native": "画蛇添足 (Huà shé tiān zú)", "english": "Derogatory (贬义): Ruining the effect by adding redundant extras" }
            ]
          },
          {
            "id": "zh-u5-l3-q5",
            "type": "multiple_choice",
            "prompt": "成语'拔苗助长'在教育子女或制定企业战略时，通常用来告诫人们什么深刻教训？",
            "options": [
              "违反客观发展规律急于求成，反而会造成毁灭性的坏结果",
              "农民应该每天多给庄稼浇水施肥",
              "只要勤奋刻苦，禾苗就一定能提前长高",
              "要善于使用高科技手段改良农业品种"
            ],
            "correctAnswer": "违反客观发展规律急于求成，反而会造成毁灭性的坏结果",
            "explanation": "'拔苗助长'（Spoil things by excessive eagerness / pull up seedlings to help them grow）用来警示违背自然成长客观规律的急躁妄动。"
          },
          {
            "id": "zh-u5-l3-q6",
            "type": "fill_blank",
            "sentence": "这项重大科学成果的取得，是全体实验室科研人员多年通力合作、精益求 ___ 的结晶。",
            "missingWord": "精",
            "options": ["精", "高", "好", "善"],
            "correctAnswer": "精",
            "explanation": "'精益求精'（Constantly strive for perfection / excellence）形容对技术或成果已经很好但仍要求更好。"
          },
          {
            "id": "zh-u5-l3-q7",
            "type": "audio_listen",
            "audioPhrase": "面对瞬息万变的市场竞争，企业唯有未雨绸缪、勇于革新，方能在危机来临之际立于不败之地。",
            "prompt": "听语音：说话人引用成语'未雨绸缪'在此处的核心含义是？",
            "options": [
              "在困难发生之前提前做好充分的防范准备 (Prepare contingencies well in advance)",
              "下大雨之前必须要买一把结实的雨伞",
              "只要天气晴朗就可以高枕无忧",
              "企业应该立即放弃当前的所有业务"
            ],
            "correctAnswer": "在困难发生之前提前做好充分的防范准备 (Prepare contingencies well in advance)",
            "explanation": "'未雨绸缪'（Wèi yǔ chóumóu）本义是趁天没下雨先修缮房屋门窗，比喻事先做好充分防范准备。"
          },
          {
            "id": "zh-u5-l3-q8",
            "type": "multiple_choice",
            "prompt": "关于现代汉语成语的语法功能，下列描述哪一项是完全客观正确的？",
            "options": [
              "成语大多数为四字格，结构紧密定型，在句中可充当主语、谓语、定语、状语或补语",
              "成语只能作句子的主语，不能作谓语",
              "成语只能在诗歌中出现，现代报刊禁止使用成语",
              "成语字序可以根据押韵需要任意颠倒调换"
            ],
            "correctAnswer": "成语大多数为四字格，结构紧密定型，在句中可充当主语、谓语、定语、状语或补语",
            "explanation": "汉语成语凝练典雅，结构高度定型化（四字居多），语法功能齐备（如'他精益求精[谓语]'、'胸有成竹地走上台[状语]'）。"
          }
        ]
      },
      {
        "id": "zh-u5-l4",
        "title": "Lesson 5.4: 书面语体标记与学术议论架构 (Formal Register & Discourse Architecture)",
        "description": "掌握书面语单双音节转换（看→阅、买→购、去→赴）、高阶连接词（鉴于、从而、进而、毋庸置疑）与学术议论文段落组织。",
        "xp": 35,
        "completed": false,
        "questions": [
          {
            "id": "zh-u5-l4-q1",
            "type": "multiple_choice",
            "prompt": "在从日常口语过渡到高级学术书面语（Written / Formal register）时，动词呈现出什么显著的词汇化转变规律？",
            "options": [
              "由单音节口语动词转向双音节典雅书面语词（如：买 → 采购；看 → 审阅；给 → 赋予/提供；帮 → 协助）",
              "书面语一律只能使用单音节古汉语词",
              "书面语与口语词汇完全一模一样，没有任何文体区别",
              "书面语一律使用外来音译词"
            ],
            "correctAnswer": "由单音节口语动词转向双音节典雅书面语词（如：买 → 采购；看 → 审阅；给 → 赋予/提供；帮 → 协助）",
            "explanation": "普通话文体等级（Register）的阶梯标志之一就是由单音节白话词向双音节书面规范词汇的系统升级。"
          },
          {
            "id": "zh-u5-l4-q2",
            "type": "fill_blank",
            "sentence": "___ 国际市场原材料价格大幅上涨，公司决定调整下半年的产品生产计划。",
            "missingWord": "鉴于",
            "options": ["鉴于", "随便", "关于", "对于"],
            "correctAnswer": "鉴于",
            "explanation": "'鉴于'（Jiànyú，In view of / Seeing that）是正式公文、法令与学术分析中引出原因前置背景的高级书面介词。"
          },
          {
            "id": "zh-u5-l4-q3",
            "type": "scramble",
            "prompt": "连词成句：将书面语词汇排列成具有严谨逻辑论证风格的句子：",
            "tokens": ["毋庸置疑，", "科技创新乃是推动历史进步的", "核心驱动力。"],
            "correctAnswer": "毋庸置疑， 科技创新乃是推动历史进步的 核心驱动力。",
            "explanation": "'毋庸置疑'（Beyond all doubt / Needless to say）是议论文断定客观规律的权威书面语套语；'乃是'为书面系词。"
          },
          {
            "id": "zh-u5-l4-q4",
            "type": "matching",
            "prompt": "将日常口语词汇与对应的高阶公文/学术书面语词汇进行匹配：",
            "pairs": [
              { "native": "去北京开会 (Qù Běijīng)", "english": "Formal: 赴京参会 (Fù jīng cān huì)" },
              { "native": "给他们回封信 (Gěi huí xìn)", "english": "Formal: 予以函复 (Yǔyǐ hánfù)" },
              { "native": "把方案弄出来 (Nòng chūlai)", "english": "Formal: 拟定方案 (Nǐdìng fāng'àn)" },
              { "native": "问问老百姓怎么想 (Wènwèn)", "english": "Formal: 听取民意诉求 (Tīngqǔ mínyì)" }
            ]
          },
          {
            "id": "zh-u5-l4-q5",
            "type": "multiple_choice",
            "prompt": "连词'从而'与'进而'在高级句式连接中有何精密区别？",
            "options": [
              "'从而'表示上文导致了自然发生的结果或目的（Result/Consequence）；'进而'表示在已有基础上有更进一步的行动深化（Progressive step forward）",
              "'从而'表原因，'进而'表转折",
              "两者完全同义，没有任何语法差异",
              "'从而'只能用于否定，'进而'只能用于疑问"
            ],
            "correctAnswer": "'从而'表示上文导致了自然发生的结果或目的（Result/Consequence）；'进而'表示在已有基础上有更进一步的行动深化（Progressive step forward）",
            "explanation": "高阶考点辨析：'优化营商环境，[从而]吸引大量外资（结果）'；'企业先站稳国内市场，[进而]拓展海外业务（递进步伐）'。"
          },
          {
            "id": "zh-u5-l4-q6",
            "type": "fill_blank",
            "sentence": "实验数据显示该药物疗效显著，___ 不存在明显的毒副作用。",
            "missingWord": "且",
            "options": ["且", "并", "但", "而"],
            "correctAnswer": "且",
            "explanation": "单音节连词'且'（Qiě）在书面语中常连接并列或递进分句（相当于'而且'），语言极为凝练。"
          },
          {
            "id": "zh-u5-l4-q7",
            "type": "audio_listen",
            "audioPhrase": "本项研究基于跨学科视角，旨在系统探究人工智能对当代知识生产范式的影响机制。",
            "prompt": "听语音：该篇学术论文引言所明确的研究主旨是什么？",
            "options": [
              "基于跨学科视角系统探究人工智能对知识生产机制的影响 (Explore AI impact on knowledge production)",
              "呼吁停止一切与计算机相关的学术科研活动",
              "证明传统手工印刷术具有不可超越的优越性",
              "批判所有跨学科研究方法缺乏严谨性"
            ],
            "correctAnswer": "基于跨学科视角系统探究人工智能对知识生产机制的影响 (Explore AI impact on knowledge production)",
            "explanation": "语音展现了极为典雅的学术汉语结构：'基于……视角，旨在探究……影响机制'。"
          },
          {
            "id": "zh-u5-l4-q8",
            "type": "multiple_choice",
            "prompt": "在中文议论文标准段落结构中，最严密信服的三段式展开逻辑通常是？",
            "options": [
              "提出明确中心论点 (Thesis) → 列举多维度客观论据与实证数据 (Evidence) → 得出深化总结结论 (Conclusion)",
              "先罗列无关故事，最后一句点题",
              "只提出反对意见，不提供任何论据",
              "全篇只使用感叹句发泄情绪"
            ],
            "correctAnswer": "提出明确中心论点 (Thesis) → 列举多维度客观论据与实证数据 (Evidence) → 得出深化总结结论 (Conclusion)",
            "explanation": "学术与考试议论文写作标准的'总—分—总'结构：论点明确、论据充分、论证严密、结论有力。"
          }
        ]
      }
    ]
  },
  {
    "id": "zh-unit-6",
    "unitId": "zh-unit-6",
    "unitNumber": 6,
    "level": "GF 0025-2021 高等七至九级 / HSK 7-9 & Cultural Pragmatics",
    "title": "Unit 6: Classical Register, Pragmatics & Translation (典籍文化、语用潜规则与翻译)",
    "subtitle": "文言虚词（之/其/所/以/于）在现代汉语的积淀、面子人情与客套话语用得体性、传统节日与哲学思维、宏观政策双向翻译技巧。",
    "icon": "Scroll",
    "color": "#e11d48",
    "lessons": [
      {
        "id": "zh-u6-l1",
        "title": "Lesson 6.1: 文言虚词在现代书面语中的传承 (Classical Grammar Elements in Modern Prose)",
        "description": "系统剖析'之、其、所、以、于'五大核心文言虚词在现代汉语政论社论、法律公文与学术著作中的保留与活用。",
        "xp": 40,
        "completed": false,
        "questions": [
          {
            "id": "zh-u6-l1-q1",
            "type": "multiple_choice",
            "prompt": "在现代高阶书面语中，文言虚词'之'（如'发展之路'、'取之不尽'、'重中之重'）最主要扮演哪两种语法角色？",
            "options": [
              "充当结构助词相当于'的'（发展之路），或充当第三人称代词相当于'它/他'（取之不尽）",
              "只能表示疑问语气，相当于'吗'",
              "表示命令祈使，相当于'快一点'",
              "只充当数词'十'的意思"
            ],
            "correctAnswer": "充当结构助词相当于'的'（发展之路），或充当第三人称代词相当于'它/他'（取之不尽）",
            "explanation": "'之'是现代中文保留最广泛的文言虚词：作定语标记（相当于'的'，如'无价之宝'）；作动词宾语代词（代人或事物，如'求之不得'、'避之不及'）。"
          },
          {
            "id": "zh-u6-l2-q2",
            "type": "fill_blank",
            "sentence": "实践证明，该政策对于激发市场活力具有立竿见影 ___ 效。",
            "missingWord": "之",
            "options": ["之", "得", "的", "地"],
            "correctAnswer": "之",
            "explanation": "'立竿见影之效'（Immediate visible effect）为典型文言四字短语，'之'在此充当结构助词'的'。"
          },
          {
            "id": "zh-u6-l1-q3",
            "type": "scramble",
            "prompt": "连词成句：将文言虚词'以'排列成表达'以人为本，以德治国'的典雅政论名句：",
            "tokens": ["坚持以人为本，", "推进", "依法治国。"],
            "correctAnswer": "坚持以人为本， 推进 依法治国。",
            "explanation": "虚词'以'（Yǐ）在现代政论文中常充当介词（'拿/用/依凭'），引出治理的根本基准与出发点。"
          },
          {
            "id": "zh-u6-l1-q4",
            "type": "matching",
            "prompt": "将文言虚词在现代书面语中的用法与实例进行匹配：",
            "pairs": [
              { "native": "其 (Qí)", "english": "Possessive pronoun: his/its (其重要性不言而喻)" },
              { "native": "所 (Suǒ)", "english": "Nominalizing marker: that which (众所周知 / 所面临的挑战)" },
              { "native": "于 (Yú)", "english": "Preposition: in/at/from/than (生于斯长于斯 / 苛政猛于虎)" },
              { "native": "以 (Yǐ)", "english": "Preposition / Conjunction: in order to (以此证明 / 严以律己)" }
            ]
          },
          {
            "id": "zh-u6-l1-q5",
            "type": "multiple_choice",
            "prompt": "在高级书面语中，由'所'构成的'所 + 动词'结构（如'所见所闻'、'各尽所能'）整体在语法上相当于什么性质的短语？",
            "options": [
              "名词性短语（表示动作涉及的对象或内容，'所看到的、所能做到的'）",
              "形容词性短语，只能作状语",
              "副词性短语，表示速度极快",
              "拟声词短语"
            ],
            "correctAnswer": "名词性短语（表示动作涉及的对象或内容，'所看到的、所能做到的'）",
            "explanation": "古汉语'所字结构'（所+动词）直接名物化：'所见'即'看见的事物'；'所想'即'心里思考的事情'。"
          },
          {
            "id": "zh-u6-l1-q6",
            "type": "fill_blank",
            "sentence": "问渠那得清如许？为有源头活水 ___。",
            "missingWord": "来",
            "options": ["来", "去", "流", "在"],
            "correctAnswer": "来",
            "explanation": "南宋朱熹经典名篇《观书有感》千古绝句：比喻只有不断汲取新知识，思想才能永葆常新清澈。"
          },
          {
            "id": "zh-u6-l1-q7",
            "type": "audio_listen",
            "audioPhrase": "海纳百川，有容乃大；壁立千仞，无欲则刚。",
            "prompt": "听语音：林则徐这句著名自勉联所倡导的人格修养境界是什么？",
            "options": [
              "如大海般包容博大的宽阔胸襟与无私刚正的品格 (Broad-minded tolerance and upright integrity)",
              "呼吁多到海边修建堤坝防洪",
              "主张每个人都要满足于物质欲望",
              "认为只有高山才能称得上伟大"
            ],
            "correctAnswer": "如大海般包容博大的宽阔胸襟与无私刚正的品格 (Broad-minded tolerance and upright integrity)",
            "explanation": "语音为中华传统人格修养千古对联：'有容乃大'（Tolerance brings greatness）与'无欲则刚'（Selflessness brings integrity）。"
          },
          {
            "id": "zh-u6-l1-q8",
            "type": "multiple_choice",
            "prompt": "现代汉语中由介词'于'构成的比喻句（如'重于泰山，轻于鸿毛'），这里的'于'相当于现代汉语的哪一个词？",
            "options": [
              "相当于比较介词'比' (Than)",
              "相当于方位介词'在' (In/At)",
              "相当于动词'给' (Give)",
              "相当于副词'很' (Very)"
            ],
            "correctAnswer": "相当于比较介词'比' (Than)",
            "explanation": "古汉语中'形容词 + 于 + 比较对象'表示比较（A比B更...），如'重于泰山'（比泰山还重）、'深于大海'（比大海还深）。"
          }
        ]
      },
      {
        "id": "zh-u6-l2",
        "title": "Lesson 6.2: 人际语用潜规则：面子、人情与客套话 (Face, Guanxi & Modesty)",
        "description": "破译中国高语境社交密码：'给面子/丢面子'、'人情往来'、推脱辞令与谦虚自贬/尊称敬语的微妙社交心理。",
        "xp": 40,
        "completed": false,
        "questions": [
          {
            "id": "zh-u6-l2-q1",
            "type": "multiple_choice",
            "prompt": "在中国高语境文化（High-context culture）中，当别人当面热情盛赞你的才华或外貌时，最得体谦逊的传统回应方式是？",
            "options": [
              "说：'哪里哪里，您过奖了，我还要多向您学习。' (Humble deflection of praise)",
              "说：'是的，我确实比周围所有人都优秀。'",
              "默不作声立刻转身离开",
              "反问对方：'你为什么现在才发现？'"
            ],
            "correctAnswer": "说：'哪里哪里，您过奖了，我还要多向您学习。' (Humble deflection of praise)",
            "explanation": "中华文化讲究'满招损，谦受益'。面对赞誉时，以'哪里哪里'（Where where）或'您过奖了/愧不敢当'作为客气谦辞，是成熟优雅的情商体现。"
          },
          {
            "id": "zh-u6-l2-q2",
            "type": "fill_blank",
            "sentence": "这次合作承蒙您的关照，这个人 ___ 我一定记在心里，日后必当重谢。",
            "missingWord": "情",
            "options": ["情", "面", "心", "意"],
            "correctAnswer": "情",
            "explanation": "'欠人情/欠一个人情'（Owing a favor of human relationship）是中国熟人社会社交网络互惠伦理的核心机制。"
          },
          {
            "id": "zh-u6-l2-q3",
            "type": "scramble",
            "prompt": "连词成句：将委婉推脱的社交客套用语组合成句：",
            "tokens": ["这件事我原则上支持，", "但具体落实", "还要进一步研究研究。"],
            "correctAnswer": "这件事我原则上支持， 但具体落实 还要进一步研究研究。",
            "explanation": "典型的体制与公文软拒绝辞令：'原则上赞成，但还要研究研究'往往意味着现实中有较大阻力或暂不予批准。"
          },
          {
            "id": "zh-u6-l2-q4",
            "type": "matching",
            "prompt": "将下列'面子'相关的熟语与社交心理含义进行匹配：",
            "pairs": [
              { "native": "给面子 (Gěi miànzi)", "english": "Show respect / honor another person's social standing by attending/agreeing" },
              { "native": "丢面子 / 丢脸 (Diū miànzi)", "english": "Lose face / suffer public embarrassment and loss of prestige" },
              { "native": "看在……的面子上 (Kàn zài miànzi shàng)", "english": "Conceding or doing a favor for the sake of a mutual third party" },
              { "native": "死要面子活受罪", "english": "Stubbornly clinging to superficial vanity at great personal suffering" }
            ]
          },
          {
            "id": "zh-u6-l2-q5",
            "type": "multiple_choice",
            "prompt": "在商务饭局或拜访送礼时，受赠方初次推辞说'哎呀您太客气了，这怎么好意思，千万不能收'，根据中国传统'三辞三让'礼节，赠送方的正确得体应对是？",
            "options": [
              "继续真诚坚持相赠，解释这只是微薄心意，经过两三次客气推让后双方圆满达成礼尚往来",
              "立刻把礼物装回包里不再赠送，并责怪对方说话不算数",
              "大发雷霆斥责对方不给面子",
              "立即要求对方折合成现金转账"
            ],
            "correctAnswer": "继续真诚坚持相赠，解释这只是微薄心意，经过两三次客气推让后双方圆满达成礼尚往来",
            "explanation": "礼仪学中的'三辞三让'：受赠方的初次推辞通常是出于客套与修养，并非真正绝情拒斥，需要赠送方真诚坚持表态方显尊重。"
          },
          {
            "id": "zh-u6-l2-q6",
            "type": "fill_blank",
            "sentence": "大家都在同一个圈子里共事，抬头不见低头见，做事情可千万别把路走 ___ 了。",
            "missingWord": "绝",
            "options": ["绝", "通", "宽", "慢"],
            "correctAnswer": "绝",
            "explanation": "'把路走绝'（Burn bridges / act without leaving any leeway）形容做事过绝不留退路。中国为人处世哲学强调'做事留一线，日后好相见'。"
          },
          {
            "id": "zh-u6-l2-q7",
            "type": "audio_listen",
            "audioPhrase": "王处长，改天有空我做东，咱们一定要聚一聚，尝尝我们老家的土特产！",
            "prompt": "听语音：说话人所说的'改天有空我做东'在日常人际交往中通常表示什么？",
            "options": [
              "一种亲切热情的社交客套寒暄（具体聚会时间并未敲定） (A polite social pleasantry, date not yet fixed)",
              "已经预订好了今晚七点的豪华宴会包间",
              "严厉要求对方下周一必须到自己家做客",
              "向对方索要老家土特产的快递费"
            ],
            "correctAnswer": "一种亲切热情的社交客套寒暄（具体聚会时间并未敲定） (A polite social pleasantry, date not yet fixed)",
            "explanation": "'改天'（Another day）、'有空'（When free）是著名的弹性社交润滑剂，表达情谊与友好姿态，具体行程需日后专门正式确认。"
          },
          {
            "id": "zh-u6-l2-q8",
            "type": "multiple_choice",
            "prompt": "在传统书信和正式宴会请柬中，用来称呼对方家父和自己家父的专用谦敬辞对偶是？",
            "options": [
              "尊称对方父亲为'令尊'，谦称自己父亲为'家父'",
              "尊称对方父亲为'家父'，称自己父亲为'令尊'",
              "双方均称'舍父'",
              "双方均称'小父'"
            ],
            "correctAnswer": "尊称对方父亲为'令尊'，谦称自己父亲为'家父'",
            "explanation": "古代谦敬对偶铁律：'家大舍小令他人'。对人称自己的长辈用'家'（家父、家母）；称对方的尊亲用'令'（令尊、令堂、令郎、令爱）。"
          }
        ]
      },
      {
        "id": "zh-u6-l3",
        "title": "Lesson 6.3: 传统节日文化与哲学思维积淀 (Festivals & Philosophical Heritage)",
        "description": "探讨春节（除夕团圆）、清明（慎终追远）、端午（家国情怀）、中秋（天人合一）等核心传统节日背后的儒释道哲学思维。",
        "xp": 40,
        "completed": false,
        "questions": [
          {
            "id": "zh-u6-l3-q1",
            "type": "multiple_choice",
            "prompt": "在中国人最重要的传统节日'春节'（农历新年）中，除夕夜合家团圆必吃的'年夜饭'所蕴含的核心文化意象是？",
            "options": [
              "对家族血脉亲情的崇高凝聚、对劳作成果的感恩及祈求新年'岁岁平安、五谷丰登'的圆满期许",
              "纯粹为了测试厨师的烹饪技术水平",
              "为了响应地方商业街区的消费促销指标",
              "没有任何特定文化内涵，仅是一顿普通的晚饭"
            ],
            "correctAnswer": "对家族血脉亲情的崇高凝聚、对劳作成果的感恩及祈求新年'岁岁平安、五谷丰登'的圆满期许",
            "explanation": "除夕团圆饭（年夜饭）承载着数千年中华民族安土重迁、尊祖敬宗与家庭亲情团圆的至高文化心理诉求。"
          },
          {
            "id": "zh-u6-l3-q2",
            "type": "fill_blank",
            "sentence": "中秋佳节，人们赏月吃月饼，苏轼千古名句'但愿人长久，千里共 ___ 娟'寄托了对远方亲友的美好祈愿。",
            "missingWord": "婵",
            "options": ["婵", "月", "圆", "美"],
            "correctAnswer": "婵",
            "explanation": "'千里共婵娟'（May we share the beauty of the moon together even a thousand miles apart）中的'婵娟'代指明月与美好的姿态。"
          },
          {
            "id": "zh-u6-l3-q3",
            "type": "scramble",
            "prompt": "连词成句：将《论语》中关于人际与天下秩序的最高哲学命题组合成句：",
            "tokens": ["君子和而不同，", "小人", "同而不和。"],
            "correctAnswer": "君子和而不同， 小人 同而不和。",
            "explanation": "孔子著名论断：'和而不同'（Harmonious yet distinct / diversity in harmony）是中华文化处理文明多样性与人际差异的最高哲学智慧。"
          },
          {
            "id": "zh-u6-l3-q4",
            "type": "matching",
            "prompt": "将下列中华传统四大节日与标志性民俗活动进行匹配：",
            "pairs": [
              { "native": "春节 (Chūnjié - Spring Festival)", "english": "贴春联、吃饺子、拜年发红包 (Reunion & New Year)" },
              { "native": "清明节 (Qīngmíngjié - Tomb Sweeping)", "english": "扫墓祭祖、踏青插柳、慎终追远 (Memorial to ancestors)" },
              { "native": "端午节 (Duānwǔjié - Dragon Boat)", "english": "赛龙舟、包粽子、挂艾草 (Remembering Qu Yuan)" },
              { "native": "中秋节 (Zhōngqiūjié - Mid-Autumn)", "english": "赏明月、吃月饼、祈求合家团聚 (Moon appreciation)" }
            ]
          },
          {
            "id": "zh-u6-l3-q5",
            "type": "multiple_choice",
            "prompt": "道家哲学创始人老子在《道德经》中提出的核心哲学命题'道法自然'与'无为而无不为'，最切实的现代阐释是？",
            "options": [
              "顺应万事万物的内在客观规律，不妄加盲目的人为干预与主观强求，从而达成最自然的良性治理",
              "什么工作都不做，彻底躺平放弃思考",
              "所有大自然发生的事情都不需要关注",
              "鼓励人们破坏一切社会规则"
            ],
            "correctAnswer": "顺应万事万物的内在客观规律，不妄加盲目的人为干预与主观强求，从而达成最自然的良性治理",
            "explanation": "'无为'并非消极不作为，而是'不妄为'（Do not act against nature's laws）——遵循事物固有的内在法则行事。"
          },
          {
            "id": "zh-u6-l3-q6",
            "type": "fill_blank",
            "sentence": "儒家倡导'修身、齐家、治国、平 ___'，构建了古代读书人将个人内省道德与宏大社会担当融为一体的人生信仰。",
            "missingWord": "天下",
            "options": ["天下", "世界", "万物", "苍生"],
            "correctAnswer": "天下",
            "explanation": "出自《礼记·大学》：修身、齐家、治国、平天下，是儒家传统士大夫经世致用的终极政治伦理纲领。"
          },
          {
            "id": "zh-u6-l3-q7",
            "type": "audio_listen",
            "audioPhrase": "落红不是无情物，化作春泥更护花。",
            "prompt": "听语音：清代诗人龚自珍在这首诗中借落花表达了怎样崇高的奉献精神？",
            "options": [
              "即使自己离职凋零，也要化作养料继续培育滋养下一代新人 (Selfless dedication to nurturing the next generation)",
              "抱怨春天的鲜花太容易凋谢",
              "提醒园丁要定期清理花园里的泥土",
              "认为大自然中的花草毫无利用价值"
            ],
            "correctAnswer": "即使自己离职凋零，也要化作养料继续培育滋养下一代新人 (Selfless dedication to nurturing the next generation)",
            "explanation": "语音为中华民族传唱不息的奉献精神名句：'化作春泥更护花'。"
          },
          {
            "id": "zh-u6-l3-q8",
            "type": "multiple_choice",
            "prompt": "中医传统理论与中国饮食烹饪文化共同遵循的底层哲学根基是哪一学说？",
            "options": [
              "阴阳五行平衡学说与'药食同源'天人合一理念",
              "机械唯物还原论",
              "纯粹的卡路里热量计算法",
              "西方解剖病理学"
            ],
            "correctAnswer": "阴阳五行平衡学说与'药食同源'天人合一理念",
            "explanation": "中国饮食与医道同源（'药食同源'），注重四气五味（寒热温凉）、阴阳调和与天人应和，体现了深厚的系统论整体观。"
          }
        ]
      },
      {
        "id": "zh-u6-l4",
        "title": "Lesson 6.4: 宏观政策话语与汉英双向笔译技巧 (Macro Policy & Cross-Lingual Translation)",
        "description": "掌握高阶对外翻译技巧：中国特色政治经贸话语的英译策略（意译、省译、范畴词增补）、长句拆分与动态跨语言重构。",
        "xp": 40,
        "completed": false,
        "questions": [
          {
            "id": "zh-u6-l4-q1",
            "type": "multiple_choice",
            "prompt": "在汉英翻译实践中，中国政经文本中的'四个全面'、'放管服'等四字或多字缩略政策词汇，最规范的跨文化英译处理原则是？",
            "options": [
              "采用'核心语义功能意译 + 展开具体限定阐释'，避免孤立字面硬译导致外国受众产生认知困惑",
              "把每个汉字拼音首字母简单拼凑在一起即可",
              "直接删除不译，当作这些概念不存在",
              "把每个汉字按字面逐字查字典死板直译"
            ],
            "correctAnswer": "采用'核心语义功能意译 + 展开具体限定阐释'，避免孤立字面硬译导致外国受众产生认知困惑",
            "explanation": "对外翻译的核心原则是准确传达政经实质内涵（Functional Equivalence）。如'放管服'改革译为'streamline administration, delegate power, strengthen regulation, and improve government services'。"
          },
          {
            "id": "zh-u6-l4-q2",
            "type": "fill_blank",
            "sentence": "汉译英时，汉语常有大量范畴性虚泛词（如'做好……工作'、'开展……活动'），在英文中通常应当采取 ___ 译处理，直接保留核心实义动词。",
            "missingWord": "省",
            "options": ["省", "直", "硬", "死"],
            "correctAnswer": "省",
            "explanation": "汉译英修辞减词原则（Ellipsis / Pruning）：汉语习惯搭配'搞好经济建设工作'，英文只需简洁译为'develop the economy'，虚词'工作'应当省译。"
          },
          {
            "id": "zh-u6-l4-q3",
            "type": "scramble",
            "prompt": "连词成句：将经典对外外交政策宣言组合成句：",
            "tokens": ["中国始终坚持独立自主的", "和平外交政策，", "维护世界和平。"],
            "correctAnswer": "中国始终坚持独立自主的 和平外交政策， 维护世界和平。",
            "explanation": "中国对外和平外交核心表述：主谓宾层次分明，逻辑连贯紧凑。"
          },
          {
            "id": "zh-u6-l4-q4",
            "type": "matching",
            "prompt": "将中国特色重大倡议与官方规范英文译法进行匹配：",
            "pairs": [
              { "native": "一带一路倡议 (Yídài Yílù Chàngyì)", "english": "The Belt and Road Initiative (BRI)" },
              { "native": "人类命运共同体 (Rénlèi Mìngyùn Gòngtóngtǐ)", "english": "A community with a shared future for mankind" },
              { "native": "精准扶贫脱贫攻坚 (Jīngzhǔn Fúpín)", "english": "Targeted poverty alleviation strategy" },
              { "native": "高水平对外开放 (Gāoshuǐpíng Kāifàng)", "english": "High-standard opening up to the outside world" }
            ]
          },
          {
            "id": "zh-u6-l4-q5",
            "type": "multiple_choice",
            "prompt": "汉语是典型的'意合语言'（Parataxis），流水句较多；英语是典型的'形合语言'（Hypotaxis），树状从句较多。英译汉时最常用的句式转换策略是？",
            "options": [
              "拆译化整为零：将英语包含多个定语从句、状语从句的长难复合句，按照汉语时间与逻辑先后顺序拆分为若干紧凑简明的流水短句",
              "原样保留英语所有which、that从句结构，全部翻译成极长的'……的……的……的主语'",
              "随意删掉一半从句内容不翻译",
              "将整篇英文全部翻译为古文七言绝句"
            ],
            "correctAnswer": "拆译化整为零：将英语包含多个定语从句、状语从句的长难复合句，按照汉语时间与逻辑先后顺序拆分为若干紧凑简明的流水短句",
            "explanation": "英汉对比语言学精髓：英语句式如枝叶繁茂的大树（Hypotactic tree）；汉语句式如竹竿串连的竹节（Paratactic bamboo）。翻译时必须化繁为简、顺水推舟。"
          },
          {
            "id": "zh-u6-l4-q6",
            "type": "fill_blank",
            "sentence": "严复在《天演论》卷首提出的著名翻译三重评价标准是：'译事三难：信、___、雅。'",
            "missingWord": "达",
            "options": ["达", "通", "顺", "真"],
            "correctAnswer": "达",
            "explanation": "严复近代翻译三原则：'信'（忠实原意 Faithful）、'达'（畅达通顺 Expressive）、'雅'（典雅得体 Elegant）。"
          },
          {
            "id": "zh-u6-l4-q7",
            "type": "audio_listen",
            "audioPhrase": "文明因多样而交流，因交流而互鉴，因互鉴而发展。",
            "prompt": "听语音：这段文明互鉴论述所阐明的文明演进递进逻辑是？",
            "options": [
              "多样性触发交流，交流促进相互借鉴，相互借鉴推动人类整体繁荣发展 (Diversity -> Exchange -> Mutual learning -> Development)",
              "不同文明之间存在不可调和的冲突必然走向冷战",
              "所有弱小文明都会被强势文明同化合并",
              "人类不需要进行跨文化交流与翻译"
            ],
            "correctAnswer": "多样性触发交流，交流促进相互借鉴，相互借鉴推动人类整体繁荣发展 (Diversity -> Exchange -> Mutual learning -> Development)",
            "explanation": "语音展示了汉语排比递进顶针修辞构型：'因……而……，因……而……'。"
          },
          {
            "id": "zh-u6-l4-q8",
            "type": "multiple_choice",
            "prompt": "在中英同声传译与交替传译中，面对演讲者连续抛出的排比四字成语（如'齐心协力、众志成城、攻坚克难'），最高效严谨的口译策略是？",
            "options": [
              "合并同类项释义法：提炼其深层共同核心意涵（如 unite as one to tackle hardships），进行凝练有力的归纳传达",
              "逐字停顿查字典把十二个字逐一翻译",
              "直接静音放弃翻译",
              "随意翻译成完全不相干的天气话题"
            ],
            "correctAnswer": "合并同类项释义法：提炼其深层共同核心意涵（如 unite as one to tackle hardships），进行凝练有力的归纳传达",
            "explanation": "高级会议口译实践准则：汉语四字格连用重在气势韵律，语义常有重叠。口译员应迅速合并同类项，抓主干信息传达，避免冗余累赘拖慢节奏。"
          }
        ]
      }
    ]
  }
];
