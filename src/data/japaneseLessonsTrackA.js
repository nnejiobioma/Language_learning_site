// =========================================================================
// Japanese Curriculum — Track A: Foundational Literacy & Everyday Autonomy
// (JF Standard A1/A2/B1 & JLPT N5, N4, N3 Framework under Japan Foundation & MEXT)
// Units 1 to 3 • 4 Lessons per Unit = 12 Comprehensive Lessons Total
// =========================================================================

export const japaneseTrackAUnits = [
  {
    "id": "ja-unit-1",
    "unitId": "ja-unit-1",
    "unitNumber": 1,
    "level": "JF Standard A1 / JLPT N5",
    "title": "Unit 1: Foundational Literacy & Daily Routines (入門・生活の基本)",
    "subtitle": "自己紹介、ひらがな・カタカナ、基本助詞（は・が・を・に・で）、時間、移動動詞、買い物と願望表現（〜たい）。",
    "icon": "Sparkles",
    "color": "#ec4899",
    "lessons": [
      {
        "id": "ja-u1-l1",
        "title": "Lesson 1.1: 自己紹介と教室の日本語 (Self-Introductions & Basic Particles)",
        "description": "丁寧体（です・ます）、主題の助詞「は」、対象の助詞「を」、挨拶（おはようございます・こんにちは）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "日本語の自己紹介で「私は田中です」という文の助詞「は」の正しい発音と文法的役割は何ですか？",
            "options": [
              "発音は「わ」で、文の主題（トピック）を示す",
              "発音は「は」で、直接目的語を示す",
              "発音は「ふぁ」で、主語の所有を示す",
              "発音は「お」で、過去形を示す"
            ],
            "correctAnswer": "発音は「わ」で、文の主題（トピック）を示す",
            "explanation": "助詞「は」は文字としては「ha」と書きますが、助詞として機能するときは発音「wa」となります。文の主題（〜について言えば）を取り立てます。"
          },
          {
            "id": "ja-u1-l1-q2",
            "type": "fill_blank",
            "sentence": "初めまして、スミスです。アメリカから ___。よろしくお願いします。",
            "missingWord": "来ました",
            "options": [
              "来ました",
              "行きます",
              "帰ります",
              "食べます"
            ],
            "correctAnswer": "来ました",
            "explanation": "出身国を述べるときは動詞「来る」の過去形「来ました (kimashita)」を用います。「〜から来ました」で「〜の出身です」を表します。"
          },
          {
            "id": "ja-u1-l1-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「毎朝、日本語を勉強します」という自然な日本語の文を作ってください：",
            "tokens": [
              "毎朝",
              "日本語を",
              "勉強します。"
            ],
            "correctTokens": [
              "毎朝",
              "日本語を",
              "勉強します。"
            ],
            "explanation": "日本語の標準語順は【時間】＋【目的語（名詞＋を）】＋【動詞】です：毎朝 (maiasa) 日本語を (nihongo o) 勉強します (benkyō shimasu)。"
          },
          {
            "id": "ja-u1-l1-q4",
            "type": "matching",
            "prompt": "基本的な挨拶と意味を正しく結びつけてください：",
            "pairs": [
              {
                "native": "おはようございます",
                "english": "Good morning (Polite)"
              },
              {
                "native": "こんにちは",
                "english": "Hello / Good afternoon"
              },
              {
                "native": "こんばんは",
                "english": "Good evening"
              },
              {
                "native": "失礼します",
                "english": "Excuse me / Goodbye (Formal)"
              }
            ]
          },
          {
            "id": "ja-u1-l1-q5",
            "type": "audio_listen",
            "phrase": "はじめまして、どうぞよろしくおねがいします。",
            "prompt": "音声を聞いて、発話者が行っているコミュニケーションの場面として最も適切なものを選んでください：",
            "options": [
              "初対面の相手への自己紹介と今後の良好な関係を願う挨拶",
              "レストランで店員を呼ぶときの挨拶",
              "夜寝る前に家族に交わす挨拶",
              "電車を降りるときの挨拶"
            ],
            "correctAnswer": "初対面の相手への自己紹介と今後の良好な関係を願う挨拶",
            "explanation": "「はじめまして、どうぞよろしくお願いします」は初対面（自己紹介）における最も基本的で丁寧な定型表現です。"
          },
          {
            "id": "ja-u1-l1-q6",
            "type": "multiple_choice",
            "prompt": "「水を飲みます」の助詞「を」の役割として正しいものはどれですか？",
            "options": [
              "他動詞の直接目的語（動作が及ぶ対象）を示す",
              "動作が行われる場所を示す",
              "動作が行われる時間を示す",
              "比較の基準を示す"
            ],
            "correctAnswer": "他動詞の直接目的語（動作が及ぶ対象）を示す",
            "explanation": "助詞「を」は他動詞が及ぶ直接の対象（飲む、食べる、読む等の対象）を表します。"
          },
          {
            "id": "ja-u1-l1-q7",
            "type": "fill_blank",
            "sentence": "これは私のノートです。それは ___ の辞書ですか？",
            "missingWord": "だれ",
            "options": [
              "だれ",
              "どこ",
              "いつ",
              "なん"
            ],
            "correctAnswer": "だれ",
            "explanation": "人物の所有を尋ねる疑問詞は「だれ (who)」です。「だれの辞書 (whose dictionary)」となります。"
          },
          {
            "id": "ja-u1-l1-q8",
            "type": "audio_listen",
            "phrase": "すみません、おなまえは？",
            "prompt": "音声を聞いて、この質問に対する適切な答えを選んでください：",
            "options": [
              "ケンジです。どうぞよろしく。",
              "午後三時です。",
              "東京に行きます。",
              "パンを食べました。"
            ],
            "correctAnswer": "ケンジです。どうぞよろしく。",
            "explanation": "「お名前は？」は相手の名前を丁寧に尋ねる表現なので、自身の名前を名乗る「ケンジです」が適切です。"
          }
        ]
      },
      {
        "id": "ja-u1-l2",
        "title": "Lesson 1.2: 時間・日常スケジュールと移動 (Time, Routine & Motion Verbs)",
        "description": "時刻（時・分）、曜日、助詞「に・で・へ」、移動動詞（行く・来る・帰る）の文型。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u1-l2-q1",
            "type": "multiple_choice",
            "prompt": "「毎朝七時【 に 】起きます」のように、特定の時刻を表す名詞につく正しい助詞はどれですか？",
            "options": [
              "に",
              "で",
              "を",
              "から"
            ],
            "correctAnswer": "に",
            "explanation": "具体的な数字を含む特定の時刻や曜日には助詞「に」を用います（例：7時に、月曜日に）。毎朝や今日などの相対的名詞には「に」はつきません。"
          },
          {
            "id": "ja-u1-l2-q2",
            "type": "fill_blank",
            "sentence": "私は明日、新幹線 ___ 京都へ行きます。",
            "missingWord": "で",
            "options": [
              "で",
              "に",
              "を",
              "へ"
            ],
            "correctAnswer": "で",
            "explanation": "交通手段や道具・手段を表す助詞は「で」です（例：電車で、車で、箸で）。"
          },
          {
            "id": "ja-u1-l2-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「日曜日に図書館で本を読みます」という文を作ってください：",
            "tokens": [
              "日曜日に",
              "図書館で",
              "本を",
              "読みます。"
            ],
            "correctTokens": [
              "日曜日に",
              "図書館で",
              "本を",
              "読みます。"
            ],
            "explanation": "場所で動作が行われる場合は【場所＋で】を用います：日曜日に (time) 図書館で (location of action) 本を (object) 読みます (verb)。"
          },
          {
            "id": "ja-u1-l2-q4",
            "type": "matching",
            "prompt": "助詞とその典型的な文法的機能を正しく結びつけてください：",
            "pairs": [
              {
                "native": "〜へ (e)",
                "english": "Direction / Destination of motion"
              },
              {
                "native": "〜で (de)",
                "english": "Means / Transport or action location"
              },
              {
                "native": "〜に (ni)",
                "english": "Specific point in time or target arrival"
              },
              {
                "native": "〜から (kara)",
                "english": "Starting point in time or place"
              }
            ]
          },
          {
            "id": "ja-u1-l2-q5",
            "type": "audio_listen",
            "phrase": "まいにち、なんじにおきますか。",
            "prompt": "音声の質問に対する自然な返答を選んでください：",
            "options": [
              "午前六時半に起きます。",
              "地下鉄で行きます。",
              "本を読みます。",
              "学校が好きです。"
            ],
            "correctAnswer": "午前六時半に起きます。",
            "explanation": "「何時に起きますか (What time do you wake up?)」と時間を尋ねているため、時刻を答えている「午前六時半に起きます」が正解です。"
          },
          {
            "id": "ja-u1-l2-q6",
            "type": "multiple_choice",
            "prompt": "移動動詞「行く」「来る」「帰る」の目的地を表す助詞として正しい組み合わせはどれですか？",
            "options": [
              "「へ」または「に」",
              "「で」または「を」",
              "「より」または「まで」",
              "「から」のみ"
            ],
            "correctAnswer": "「へ」または「に」",
            "explanation": "目的地・到達点を表す助詞には「へ (he, pronounced e)」または「に (ni)」が用いられます（例：東京へ行く／東京に行く）。"
          },
          {
            "id": "ja-u1-l2-q7",
            "type": "fill_blank",
            "sentence": "銀行の休みは土曜日 ___ 日曜日です。",
            "missingWord": "と",
            "options": [
              "と",
              "や",
              "も",
              "で"
            ],
            "correctAnswer": "と",
            "explanation": "名詞と名詞を並列（〜と〜）で完全に列挙する場合、助詞「と」を用います。"
          },
          {
            "id": "ja-u1-l2-q8",
            "type": "audio_listen",
            "phrase": "いっしょにきょうとへいきませんか。",
            "prompt": "音声の表現が意図しているコミュニケーション機能は何ですか：",
            "options": [
              "相手を旅行や同行に誘う勧誘表現（〜ませんか）",
              "過去の旅行の経験を自慢する表現",
              "相手の出身地を尋ねる質問",
              "電車の時刻表を確認する依頼"
            ],
            "correctAnswer": "相手を旅行や同行に誘う勧誘表現（〜ませんか）",
            "explanation": "動詞の否定疑問形「〜ませんか (-masen ka)」は、相手を食事や外出などに誘う最も標準的な勧誘表現です。"
          }
        ]
      },
      {
        "id": "ja-u1-l3",
        "title": "Lesson 1.3: 買い物・値段と願望表現 (Shopping, Counters & Desires)",
        "description": "助数詞（つ・個・本・枚）、値段の尋ね方（いくら）、願望表現（〜が欲しい／〜たい）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u1-l3-q1",
            "type": "multiple_choice",
            "prompt": "紙やシャツ、チケットなど「薄くて平たいもの」を数える助数詞はどれですか？",
            "options": [
              "枚（まい）",
              "本（ほん）",
              "冊（さつ）",
              "台（だい）"
            ],
            "correctAnswer": "枚（まい）",
            "explanation": "「枚 (mai)」は切手、シャツ、紙、皿など薄く平たい物を数える助数詞です。細長い物は「本」、本やノートは「冊」、機械や車は「台」です。"
          },
          {
            "id": "ja-u1-l3-q2",
            "type": "fill_blank",
            "sentence": "喉が渇きました。冷たいお茶が ___ です。",
            "missingWord": "飲みたい",
            "options": [
              "飲みたい",
              "飲む",
              "飲まない",
              "飲みます"
            ],
            "correctAnswer": "飲みたい",
            "explanation": "動詞ます形の語幹＋「たい」で話者の動作願望（〜したい）を表します。「飲みます」→「飲みたい」。"
          },
          {
            "id": "ja-u1-l3-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「りんごを三つください」という注文の文を作ってください：",
            "tokens": [
              "りんごを",
              "三つ",
              "ください。"
            ],
            "correctTokens": [
              "りんごを",
              "三つ",
              "ください。"
            ],
            "explanation": "日本語では数詞（個数）は通常、助詞の直後・動詞の直前に置かれます：りんごを (apples) 三つ (three items) ください (please give me)。"
          },
          {
            "id": "ja-u1-l3-q4",
            "type": "matching",
            "prompt": "数える対象と正しい助数詞を結びつけてください：",
            "pairs": [
              {
                "native": "ペン・傘・映画",
                "english": "本（ほん・ぼん・ぽん）"
              },
              {
                "native": "車・パソコン",
                "english": "台（だい）"
              },
              {
                "native": "本・雑誌",
                "english": "冊（さつ）"
              },
              {
                "native": "犬・猫（小動物）",
                "english": "匹（ひき・びき・ぴき）"
              }
            ]
          },
          {
            "id": "ja-u1-l3-q5",
            "type": "audio_listen",
            "phrase": "すみません、このくつはいくらですか。",
            "prompt": "音声の質問に対する自然な店員の返答を選んでください：",
            "options": [
              "八千五百円でございます。",
              "明日行きます。",
              "二足あります。",
              "赤が好きです。"
            ],
            "correctAnswer": "八千五百円でございます。",
            "explanation": "「いくらですか (How much is it?)」と値段を尋ねられているため、金額を答える「八千五百円でございます」が正解です。"
          },
          {
            "id": "ja-u1-l3-q6",
            "type": "multiple_choice",
            "prompt": "「新しいパソコンが欲しいです」という文における「欲しい」の文法的な性質として正しいものはどれですか？",
            "options": [
              "欲しい対象を助詞「が」でとるイ形容詞である",
              "目的語に「を」をとる動詞である",
              "名詞を修飾できないナ形容詞である",
              "過去形が存在しない不変化詞である"
            ],
            "correctAnswer": "欲しい対象を助詞「が」でとるイ形容詞である",
            "explanation": "「欲しい」はイ形容詞であり、対象を助詞「が」で示します（例：車が欲しい）。否定形は「欲しくない」、過去形は「欲しかった」となります。"
          },
          {
            "id": "ja-u1-l3-q7",
            "type": "fill_blank",
            "sentence": "映画館へ映画を ___ に行きます。",
            "missingWord": "見",
            "options": [
              "見",
              "見る",
              "見て",
              "見ます"
            ],
            "correctAnswer": "見",
            "explanation": "移動の目的を表す文型「動詞ます形語幹＋に行きます」：見ます →「見に行きます (go to watch)」。"
          },
          {
            "id": "ja-u1-l3-q8",
            "type": "audio_listen",
            "phrase": "ぜんぶでさんぜんえんになります。",
            "prompt": "音声の意味として正しいものを選んでください：",
            "options": [
              "合計で三千円になります。",
              "三時にお越しください。",
              "三階へどうぞ。",
              "三名様でよろしいですか。"
            ],
            "correctAnswer": "合計で三千円になります。",
            "explanation": "「全部で三千円になります (That will be 3,000 yen in total)」はレジ会計時の標準的な店員の表現です。"
          }
        ]
      },
      {
        "id": "ja-u1-l4",
        "title": "Lesson 1.4: JLPT N5 文字・語彙・文法 総合試験対策 (JLPT N5 Comprehensive Review)",
        "description": "基本漢字100字の音訓読み、助詞の総合ドロップ問題、文の骨格と日常会話の定着演習。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "ja-u1-l4-q1",
            "type": "multiple_choice",
            "prompt": "下線部の言葉の漢字の正しい読み方を選んでください：『きのうの【友だち】と会いました』",
            "options": [
              "ともだち",
              "こもだち",
              "ゆうだち",
              "まえだち"
            ],
            "correctAnswer": "ともだち",
            "explanation": "「友だち」の漢字「友」の訓読みは「とも (tomo)」です。「友達」と書いて「ともだち」と読みます。"
          },
          {
            "id": "ja-u1-l4-q2",
            "type": "fill_blank",
            "sentence": "日曜日はどこ ___ 行きませんでした。家で休みました。",
            "missingWord": "へも",
            "options": [
              "へも",
              "にも",
              "でも",
              "をも"
            ],
            "correctAnswer": "へも",
            "explanation": "疑問詞＋助詞＋も＋否定（どこへも行きませんでした）で「どこにも行かなかった（全面否定）」を表します。"
          },
          {
            "id": "ja-u1-l4-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「田中さんは英語を上手に話すことができます」という文を作ってください：",
            "tokens": [
              "田中さんは",
              "英語を上手に",
              "話すことが",
              "できます。"
            ],
            "correctTokens": [
              "田中さんは",
              "英語を上手に",
              "話すことが",
              "できます。"
            ],
            "explanation": "能力を表す文型【動詞辞書形＋ことができる】：話す (辞書形) ＋ ことができる。"
          },
          {
            "id": "ja-u1-l4-q4",
            "type": "matching",
            "prompt": "N5最重要漢字の訓読みと意味を結びつけてください：",
            "pairs": [
              {
                "native": "日（ひ・び・か）",
                "english": "Sun / Day"
              },
              {
                "native": "月（つき・げつ・がつ）",
                "english": "Moon / Month"
              },
              {
                "native": "水（みず・すい）",
                "english": "Water"
              },
              {
                "native": "火（ひ・か）",
                "english": "Fire"
              }
            ]
          },
          {
            "id": "ja-u1-l4-q5",
            "type": "audio_listen",
            "phrase": "きょうのてんきはとてもいいですね。",
            "prompt": "音声が述べている内容として正しいものを選んでください：",
            "options": [
              "今日の天気がとても良いことへの共感・同意の求め",
              "明日は雨が降るという天気予報の報告",
              "昨日寒かったことへの不満",
              "傘を忘れたことへの謝罪"
            ],
            "correctAnswer": "今日の天気がとても良いことへの共感・同意の求め",
            "explanation": "「今日の天気はとてもいいですね」の終助詞「ね」は、相手への同意や共感を求める働きをします。"
          },
          {
            "id": "ja-u1-l4-q6",
            "type": "multiple_choice",
            "prompt": "次の文の（ ★ ）に入る最も適切な言葉はどれですか：『机の（　）（ ★ ）（　）（　）あります。』 [1:の上 2:猫 3:に 4:が]",
            "options": [
              "に",
              "の上",
              "猫",
              "が"
            ],
            "correctAnswer": "に",
            "explanation": "文の語順は「机の【1:上】【3:に】★【2:猫】【4:が】あります」となります。したがって星印の位置に入る語は「に」です。"
          },
          {
            "id": "ja-u1-l4-q7",
            "type": "fill_blank",
            "sentence": "山田さんは毎朝、新聞を ___ から、会社へ行きます。",
            "missingWord": "読んで",
            "options": [
              "読んで",
              "読む",
              "読んだ",
              "読みます"
            ],
            "correctAnswer": "読んで",
            "explanation": "ある動作を行った後に別の動作をすることを示す文型は「動詞て形＋から (after doing ~)」です。「読む」のて形は「読んで」。"
          },
          {
            "id": "ja-u1-l4-q8",
            "type": "audio_listen",
            "phrase": "きのう、どこでばんごはんをたべましたか。",
            "prompt": "音声の質問に対する文法的に最も自然な返答を選んでください：",
            "options": [
              "駅前のレストランで食べました。",
              "魚を食べました。",
              "七時半に食べました。",
              "一人で食べたいです。"
            ],
            "correctAnswer": "駅前のレストランで食べました。",
            "explanation": "「どこで (where)」と場所を尋ねられているため、場所を示す「駅前のレストランで食べました」が正しい返答です。"
          }
        ]
      }
    ]
  },
  {
    "id": "ja-unit-2",
    "unitId": "ja-unit-2",
    "unitNumber": 2,
    "level": "JF Standard A2 / JLPT N4",
    "title": "Unit 2: Social Interactions & Verb Conjugation Paths (初級・動詞活用と社会生活)",
    "subtitle": "て形（接続・依頼）、ない形（否定・義務・禁止）、可能形、た形（経験・〜ことがある）、道案内と病院の表現。",
    "icon": "Compass",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "ja-u2-l1",
        "title": "Lesson 2.1: て形（接続・依頼）と道案内 (Te-Form & Giving Directions)",
        "description": "第1類・第2類・第3類動詞のて形活用規則、〜てください、道案内（右へ曲がる・橋を渡る）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u2-l1-q1",
            "type": "multiple_choice",
            "prompt": "第1グループ（五段動詞）「書く (kaku)」の正しい「て形」はどれですか？",
            "options": [
              "書いて (kaite)",
              "書きて (kakite)",
              "書って (katte)",
              "書いで (kaide)"
            ],
            "correctAnswer": "書いて (kaite)",
            "explanation": "語幹が「く」で終わる動詞のて形はイ音便となり「〜いて」に変化します（書く → 書いて）。※例外：「行く」は「行って」。"
          },
          {
            "id": "ja-u2-l1-q2",
            "type": "fill_blank",
            "sentence": "次の交差点を右へ ___ 、まっすぐ行ってください。",
            "missingWord": "曲がって",
            "options": [
              "曲がって",
              "曲がる",
              "曲がり",
              "曲がった"
            ],
            "correctAnswer": "曲がって",
            "explanation": "複数の動作を連続して述べる、または案内を接続するときは動詞の「て形」を用います（曲がって、まっすぐ行ってください）。"
          },
          {
            "id": "ja-u2-l1-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「窓を開けてもいいですか」という許可を求める文を作ってください：",
            "tokens": [
              "窓を",
              "開けても",
              "いいですか。"
            ],
            "correctTokens": [
              "窓を",
              "開けても",
              "いいですか。"
            ],
            "explanation": "許可を求める文型は【動詞て形＋もいいですか】：開けて (te-form) ＋ もいいですか (may I)。"
          },
          {
            "id": "ja-u2-l1-q4",
            "type": "matching",
            "prompt": "動詞の辞書形と対応する「て形」を正しく結びつけてください：",
            "pairs": [
              {
                "native": "待つ（まつ）",
                "english": "待って（促音便）"
              },
              {
                "native": "飲む（のむ）",
                "english": "飲んで（撥音便）"
              },
              {
                "native": "話す（はなす）",
                "english": "話して（サ行）"
              },
              {
                "native": "食べる（たべる）",
                "english": "食べて（一段動詞）"
              }
            ]
          },
          {
            "id": "ja-u2-l1-q5",
            "type": "audio_listen",
            "phrase": "すみませんが、もういちどゆっくりいってください。",
            "prompt": "音声の依頼表現に対する適切な対応を選んでください：",
            "options": [
              "もう一度、よりゆっくりと話す",
              "部屋を出ていく",
              "お金を支払う",
              "名前を紙に書く"
            ],
            "correctAnswer": "もう一度、よりゆっくりと話す",
            "explanation": "「もう一度ゆっくり言ってください (Please say it once again slowly)」は理解できなかった際の重要な聞き返し表現です。"
          },
          {
            "id": "ja-u2-l1-q6",
            "type": "multiple_choice",
            "prompt": "「〜てはいけません」という文型の表す意味として正しいものはどれですか？",
            "options": [
              "規則や法律による禁止（〜してはだめだ）",
              "相手への優しい提案や誘い",
              "過去に完了した動作",
              "能力やスキルの欠如"
            ],
            "correctAnswer": "規則や法律による禁止（〜してはだめだ）",
            "explanation": "「動詞て形＋はいけません」は強い禁止（〜してはならない）を表します（例：ここでタバコを吸ってはいけません）。"
          },
          {
            "id": "ja-u2-l1-q7",
            "type": "fill_blank",
            "sentence": "今、田中さんは会議室で資料を ___ います。",
            "missingWord": "読んで",
            "options": [
              "読んで",
              "読む",
              "読まない",
              "読み"
            ],
            "correctAnswer": "読んで",
            "explanation": "動作が現在進行中であることを表す文型は「動詞て形＋いる／います」です（資料を読んでいます）。"
          },
          {
            "id": "ja-u2-l1-q8",
            "type": "audio_listen",
            "phrase": "このバスはびょういんのまえをとおりますか。",
            "prompt": "音声の質問の意図として最も適切なものを選んでください：",
            "options": [
              "バスが病院の前を経由するかどうかの確認",
              "病院の診察時間を尋ねる質問",
              "バスの料金の割引について尋ねる質問",
              "運転手の名前を尋ねる質問"
            ],
            "correctAnswer": "バスが病院の前を経由するかどうかの確認",
            "explanation": "「このバスは病院の前を通りますか (Does this bus pass in front of the hospital?)」は経路確認の表現です。"
          }
        ]
      },
      {
        "id": "ja-u2-l2",
        "title": "Lesson 2.2: ない形（否定・義務・禁止）と健康・病院 (Nai-Form & Health Care)",
        "description": "ない形の活用規則、〜なければなりません（義務）、〜ないでください、病気の症状（頭痛・熱）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u2-l2-q1",
            "type": "multiple_choice",
            "prompt": "五段動詞「行く」と「話す」の正しい「ない形」の組み合わせはどれですか？",
            "options": [
              "行かない (ikanai) / 話さない (hanasanai)",
              "行かない (ikanai) / 話しない (hanashinai)",
              "行けない (ikenai) / 話せない (hanasenai)",
              "行かぬ (ikanu) / 話しぬ (hanashinu)"
            ],
            "correctAnswer": "行かない (ikanai) / 話さない (hanasanai)",
            "explanation": "五段動詞のない形は語尾の「う段」の音を「あ段」に変えて「ない」を接続します（行く → 行かない、話す → 話さない）。"
          },
          {
            "id": "ja-u2-l2-q2",
            "type": "fill_blank",
            "sentence": "熱がありますから、今日はお風呂に ___ ください。",
            "missingWord": "入らないで",
            "options": [
              "入らないで",
              "入る",
              "入って",
              "入れば"
            ],
            "correctAnswer": "入らないで",
            "explanation": "「動詞ない形＋でください」で相手に「〜しないでください (Please do not ~)」という指示・忠告を表します。"
          },
          {
            "id": "ja-u2-l2-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「明日までに薬を飲まなければなりません」という義務の文を作ってください：",
            "tokens": [
              "明日までに",
              "薬を",
              "飲まなければ",
              "なりません。"
            ],
            "correctTokens": [
              "明日までに",
              "薬を",
              "飲まなければ",
              "なりません。"
            ],
            "explanation": "義務や必然性を表す文型は【動詞ない形（ない→なければ）＋ならない／なりません】です。"
          },
          {
            "id": "ja-u2-l2-q4",
            "type": "matching",
            "prompt": "病院や体調不良で用いられる症状表現と日本語を結びつけてください：",
            "pairs": [
              {
                "native": "頭が痛いです",
                "english": "I have a headache"
              },
              {
                "native": "熱があります",
                "english": "I have a fever"
              },
              {
                "native": "お腹が痛いです",
                "english": "I have a stomachache"
              },
              {
                "native": "風邪を引きました",
                "english": "I caught a cold"
              }
            ]
          },
          {
            "id": "ja-u2-l2-q5",
            "type": "audio_listen",
            "phrase": "いちにちさんかい、しょくごにこのくすりをのんでください。",
            "prompt": "医師または薬剤師の指示として正しいものを選んでください：",
            "options": [
              "1日3回、食後にこの薬を服用すること",
              "1日1回、就寝前に薬を服用すること",
              "薬を飲まずに安静にすること",
              "食前に運動を行うこと"
            ],
            "correctAnswer": "1日3回、食後にこの薬を服用すること",
            "explanation": "「1日3回 (three times a day)、食後に (after meals) この薬を飲んでください」という標準的な服薬指導です。"
          },
          {
            "id": "ja-u2-l2-q6",
            "type": "multiple_choice",
            "prompt": "「パスポートを見せなくてもいいです」の「〜なくてもいい」が表す意味は何ですか？",
            "options": [
              "不要・免除（〜する必要がない）",
              "強い禁止（〜してはならない）",
              "過去の習慣",
              "未来の予測"
            ],
            "correctAnswer": "不要・免除（〜する必要がない）",
            "explanation": "「動詞ない形（ない→なくても）＋いい」は、義務の免除（〜しなくても構わない、しなくてよい）を表します。"
          },
          {
            "id": "ja-u2-l2-q7",
            "type": "fill_blank",
            "sentence": "美術館の中では、写真を ___ はいけません。",
            "missingWord": "撮って",
            "options": [
              "撮って",
              "撮る",
              "撮らない",
              "撮れば"
            ],
            "correctAnswer": "撮って",
            "explanation": "禁止表現「〜てはいけません」には動詞の「て形」を接続します（写真を撮ってはいけません）。"
          },
          {
            "id": "ja-u2-l2-q8",
            "type": "audio_listen",
            "phrase": "ほけんしょうをみせてください。",
            "prompt": "音声を聞いて、提出を求められている書類として正しいものを選んでください：",
            "options": [
              "健康保険証 (Health Insurance Card)",
              "運転免許証 (Driver's License)",
              "クレジットカード (Credit Card)",
              "パスポート (Passport)"
            ],
            "correctAnswer": "健康保険証 (Health Insurance Card)",
            "explanation": "「保険証 (hokenshō)」は日本の医療機関の受付で必ず提示が求められる国民健康保険証のことです。"
          }
        ]
      },
      {
        "id": "ja-u2-l3",
        "title": "Lesson 2.3: た形（経験）と可能形（能力） (Ta-Form & Potential Form)",
        "description": "た形（〜たことがある）、可能動詞の形成規則（〜える／〜られる）、助詞「が」の変化。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u2-l3-q1",
            "type": "multiple_choice",
            "prompt": "動詞「食べる (taberu)」と「行く (iku)」の可能形（〜できる）として正しい組み合わせはどれですか？",
            "options": [
              "食べられる (taberareru) / 行ける (ikeru)",
              "食べれる (tabereru) / 行かられる (ikarareru)",
              "食べられる (taberareru) / 行きできる (ikidekiru)",
              "食べたできる (tabetadekiru) / 行ける (ikeru)"
            ],
            "correctAnswer": "食べられる (taberareru) / 行ける (ikeru)",
            "explanation": "一段動詞（グループ2）は「る」を「られる」に変え（食べられる）、五段動詞（グループ1）は語尾の「う段」を「え段」に変えて「る」をつけます（行く → 行ける）。"
          },
          {
            "id": "ja-u2-l3-q2",
            "type": "fill_blank",
            "sentence": "日本で富士山に ___ ことがありますか？",
            "missingWord": "登った",
            "options": [
              "登った",
              "登る",
              "登り",
              "登って"
            ],
            "correctAnswer": "登った",
            "explanation": "過去の経験（〜したことがある）を表す文型は【動詞た形＋ことがある】です。「登る」のた形は促音便で「登った」。"
          },
          {
            "id": "ja-u2-l3-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「私は漢字を少し読むことができます」という文を作ってください：",
            "tokens": [
              "私は",
              "漢字を少し",
              "読むことが",
              "できます。"
            ],
            "correctTokens": [
              "私は",
              "漢字を少し",
              "読むことが",
              "できます。"
            ],
            "explanation": "能力表現「動詞辞書形＋ことができる」：読むことができる (can read)。"
          },
          {
            "id": "ja-u2-l3-q4",
            "type": "matching",
            "prompt": "動詞の可能形と原形のペアを正しく結びつけてください：",
            "pairs": [
              {
                "native": "話せる（はなせる）",
                "english": "話す（Can speak）"
              },
              {
                "native": "泳げる（およげる）",
                "english": "泳ぐ（Can swim）"
              },
              {
                "native": "来られる（こられる）",
                "english": "来る（Can come）"
              },
              {
                "native": "できる",
                "english": "する（Can do）"
              }
            ]
          },
          {
            "id": "ja-u2-l3-q5",
            "type": "audio_listen",
            "phrase": "なっとうをたべたことがありますか。",
            "prompt": "音声の質問に対する自然な返答を選んでください：",
            "options": [
              "いいえ、一度もありません。",
              "はい、明日食べます。",
              "いいえ、食べたいです。",
              "納豆は安いです。"
            ],
            "correctAnswer": "いいえ、一度もありません。",
            "explanation": "「〜たことがありますか」という経験の有無を問う質問に対し、一度もない場合は「いいえ、一度もありません (No, not even once)」と答えます。"
          },
          {
            "id": "ja-u2-l3-q6",
            "type": "multiple_choice",
            "prompt": "可能動詞（例：日本語が話せる）を用いる際、目的語の助詞「を」は通常どの助詞に変化しますか？",
            "options": [
              "が",
              "に",
              "で",
              "へ"
            ],
            "correctAnswer": "が",
            "explanation": "可能動詞文では、通常他動詞の直接目的語をとる助詞「を」が、能力の対象を表す助詞「が」に替わるのが標準的です（例：日本語を話す → 日本語が話せる）。"
          },
          {
            "id": "ja-u2-l3-q7",
            "type": "fill_blank",
            "sentence": "週末は部屋を掃除したり、洗濯を ___ します。",
            "missingWord": "したり",
            "options": [
              "したり",
              "して",
              "する",
              "した"
            ],
            "correctAnswer": "したり",
            "explanation": "複数の動作を例示して列挙する文型は【動詞た形＋り、動詞た形＋りする】です（掃除したり、洗濯をしたりします）。"
          },
          {
            "id": "ja-u2-l3-q8",
            "type": "audio_listen",
            "phrase": "あしたのパーティーにこられますか。",
            "prompt": "音声で使われている動詞の活用形として正しいものを選んでください：",
            "options": [
              "「来る」の可能形（来られる）",
              "「来る」の受身形（来られる）",
              "「帰る」の命令形",
              "「行く」の過去形"
            ],
            "correctAnswer": "「来る」の可能形（来られる）",
            "explanation": "「来る (kuru)」の可能形は「来られる (korareru)」です。「明日のパーティーに来られますか (Can you come to tomorrow's party?)」。"
          }
        ]
      },
      {
        "id": "ja-u2-l4",
        "title": "Lesson 2.4: JLPT N4 文の組み立てと読解演習 (N4 Text Scramble & Reading)",
        "description": "星印（★）文の組み立て攻略、街の掲示板・回覧板の読み解き、300字漢字の定着。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "ja-u2-l4-q1",
            "type": "multiple_choice",
            "prompt": "次の文の（ ★ ）に入る最も適切な言葉はどれですか：『図書館で（　）（ ★ ）（　）（　）いけません。』 [1:大きな 2:声を 3:出しては 4:話して]",
            "options": [
              "声を",
              "大きな",
              "出しては",
              "話して"
            ],
            "correctAnswer": "声を",
            "explanation": "語順は「図書館で【1:大きな】【2:声を】★【3:出しては】【4:話して】（※または声を出して話しては）いけません」となります。★は「声を」です。"
          },
          {
            "id": "ja-u2-l4-q2",
            "type": "fill_blank",
            "sentence": "【マンションの掲示板】ゴミは決められた日の朝八時までに ___ 出してください。",
            "missingWord": "必ず",
            "options": [
              "必ず",
              "たぶん",
              "ぜんぜん",
              "あまり"
            ],
            "correctAnswer": "必ず",
            "explanation": "「必ず (kanarazu - without fail / definitely)」は規則や指示を厳格に伝える公共の掲示板で頻出する副詞です。"
          },
          {
            "id": "ja-u2-l4-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「雨が降ったので、試合は中止になりました」という文を作ってください：",
            "tokens": [
              "雨が降ったので、",
              "試合は",
              "中止に",
              "なりました。"
            ],
            "correctTokens": [
              "雨が降ったので、",
              "試合は",
              "中止に",
              "なりました。"
            ],
            "explanation": "客観的な理由を表す接続助詞「〜ので」：雨が降ったので (because it rained)、中止になりました (was cancelled)。"
          },
          {
            "id": "ja-u2-l4-q4",
            "type": "matching",
            "prompt": "N4レベルの公共標識・掲示と意味を結びつけてください：",
            "pairs": [
              {
                "native": "使用禁止（しようきんし）",
                "english": "Do Not Use / Out of Order"
              },
              {
                "native": "非常口（ひじょうぐち）",
                "english": "Emergency Exit"
              },
              {
                "native": "立入禁止（たちいりきんし）",
                "english": "Keep Out / Authorized Personnel Only"
              },
              {
                "native": "年中無休（ねんじゅうむきゅう）",
                "english": "Open 365 Days / No Holidays"
              }
            ]
          },
          {
            "id": "ja-u2-l4-q5",
            "type": "audio_listen",
            "phrase": "でんしゃのおくれにより、かいぎのじかんをさんじゅうぷんくりさげます。",
            "prompt": "アナウンスを聞いて、決定された事項として正しいものを選んでください：",
            "options": [
              "電車の遅延のため、会議の開始時間を30分遅らせる",
              "会議を完全に中止する",
              "会議の場所を駅前に変更する",
              "会議時間を30分短縮する"
            ],
            "correctAnswer": "電車の遅延のため、会議の開始時間を30分遅らせる",
            "explanation": "「繰り下げる (kurisageru)」は時間を後へ遅らせることを意味します。電車の遅れにより開始時間が30分遅くなります。"
          },
          {
            "id": "ja-u2-l4-q6",
            "type": "multiple_choice",
            "prompt": "「〜つもりです」という文型の文法的な役割として正しいものはどれですか？",
            "options": [
              "話者の意志や計画（〜する予定・心づもりだ）を表す",
              "他人の行動に対する義務を命令する",
              "過去に後悔した事柄を振り返る",
              "天候などの自然現象を客観的に報告する"
            ],
            "correctAnswer": "話者の意志や計画（〜する予定・心づもりだ）を表す",
            "explanation": "「動詞辞書形／ない形＋つもりです」は、話者が前もって決めている意志や計画を表します（例：来年日本へ行くつもりです）。"
          },
          {
            "id": "ja-u2-l4-q7",
            "type": "fill_blank",
            "sentence": "山田さんは英語だけでなく、中国語 ___ 話せます。",
            "missingWord": "も",
            "options": [
              "も",
              "が",
              "を",
              "に"
            ],
            "correctAnswer": "も",
            "explanation": "「〜だけでなく〜も」で「〜のみならず〜もまた (not only A but also B)」という累加を表します。"
          },
          {
            "id": "ja-u2-l4-q8",
            "type": "audio_listen",
            "phrase": "きけんがおよぶおそれがありますので、きいろいせんのうらがわまでおさがりください。",
            "prompt": "駅のホームのアナウンスを聞いて、乗客が取るべき行動として正しいものを選んでください：",
            "options": [
              "黄色い点字ブロックの内側まで下がる",
              "すぐに電車に飛び乗る",
              "線路に降りて確認する",
              "車掌に切符を渡す"
            ],
            "correctAnswer": "黄色い点字ブロックの内側まで下がる",
            "explanation": "「危険が及ぶ恐れがありますので、黄色い線の内側（裏側）までお下がりください」は列車接近時の標準的安全放送です。"
          }
        ]
      }
    ]
  },
  {
    "id": "ja-unit-3",
    "unitId": "ja-unit-3",
    "unitNumber": 3,
    "level": "JF Standard B1 / JLPT N3",
    "title": "Unit 3: Everyday Autonomy, Nuance & Conditional Rigor (中級・条件表現と自他動詞)",
    "subtitle": "自動詞と他動詞のペア（〜が開く／〜を開ける）、4大条件表現（〜と・〜ば・〜たら・〜なら）、授受動詞（あげる・くれる・もらう）、読解・情報検索。",
    "icon": "BookOpen",
    "color": "#10b981",
    "lessons": [
      {
        "id": "ja-u3-l1",
        "title": "Lesson 3.1: 自動詞と他動詞の完全攻略 (Transitive vs. Intransitive Verbs)",
        "description": "自他動詞の対応ペア、助詞「が」と「を」の峻別、〜てある（意図的結果）と〜ている（状態継続）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u3-l1-q1",
            "type": "multiple_choice",
            "prompt": "「ドアが（　）」と「ドアを（　）」の括弧に入る正しい動詞ペアはどれですか？",
            "options": [
              "ドアが開く（自動詞） / ドアを開ける（他動詞）",
              "ドアを開ける（自動詞） / ドアが開く（他動詞）",
              "ドアが閉める（自動詞） / ドアを閉まる（他動詞）",
              "ドアが消す（自動詞） / ドアを消える（他動詞）"
            ],
            "correctAnswer": "ドアが開く（自動詞） / ドアを開ける（他動詞）",
            "explanation": "主語自体の自然な変化・状態を表す自動詞には「が」がつき（ドアが開く）、人の意志による動作が及ぶ他動詞には「を」がつきます（ドアを開ける）。"
          },
          {
            "id": "ja-u3-l1-q2",
            "type": "fill_blank",
            "sentence": "壁に来月のカレンダーが ___ あります。",
            "missingWord": "掛けて",
            "options": [
              "掛けて",
              "掛かって",
              "掛ける",
              "掛かる"
            ],
            "correctAnswer": "掛けて",
            "explanation": "誰かが意図的に行った行為の結果の状態が残っていることを表す文型は【他動詞て形＋ある】です（掛ける [他動詞] → 掛けてある）。"
          },
          {
            "id": "ja-u3-l1-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「電気が消えていますから、留守のようです」という文を作ってください：",
            "tokens": [
              "電気が消えていますから、",
              "留守の",
              "ようです。"
            ],
            "correctTokens": [
              "電気が消えていますから、",
              "留守の",
              "ようです。"
            ],
            "explanation": "自動詞のて形＋いる（消えている）は現在の結果・状態を表します：電気が消えていますから、留守のようです。"
          },
          {
            "id": "ja-u3-l1-q4",
            "type": "matching",
            "prompt": "自動詞と他動詞の代表的な対照ペアを結びつけてください：",
            "pairs": [
              {
                "native": "壊れる（こわれる）[自動詞]",
                "english": "壊す（こわす）[他動詞]"
              },
              {
                "native": "落ちる（おちる）[自動詞]",
                "english": "落とす（おとす）[他動詞]"
              },
              {
                "native": "消える（きえる）[自動詞]",
                "english": "消す（けす）[他動詞]"
              },
              {
                "native": "止まる（とまる）[自動詞]",
                "english": "止める（とめる）[他動詞]"
              }
            ]
          },
          {
            "id": "ja-u3-l1-q5",
            "type": "audio_listen",
            "phrase": "エアコンがついていますから、へやがすずしいですね。",
            "prompt": "音声の描写している状況として正しいものを選んでください：",
            "options": [
              "エアコンが稼働状態にあるため、部屋が涼しく快適である",
              "エアコンが故障して部屋が猛暑である",
              "エアコンを今から買いに行く予定である",
              "部屋の窓が開いているので寒い"
            ],
            "correctAnswer": "エアコンが稼働状態にあるため、部屋が涼しく快適である",
            "explanation": "自動詞「つく」のて形＋いる（ついています）はスイッチが入った状態が継続していることを表します。"
          },
          {
            "id": "ja-u3-l1-q6",
            "type": "multiple_choice",
            "prompt": "「〜てしまう」が表す2つの主なニュアンスとして適切な組み合わせはどれですか？",
            "options": [
              "動作の完全な完了（すっかり〜した）と、意図しない失敗・後悔",
              "相手への丁寧な依頼と、未来の仮定",
              "受身の被害と、敬語の尊敬",
              "能力の可能と、命令の義務"
            ],
            "correctAnswer": "動作の完全な完了（すっかり〜した）と、意図しない失敗・後悔",
            "explanation": "「動詞て形＋しまう」は【完了】（宿題をやってしまった）と【後悔・遺憾】（財布を落としてしまった）を表します。"
          },
          {
            "id": "ja-u3-l1-q7",
            "type": "fill_blank",
            "sentence": "旅行の前に、ホテルの予約を ___ おきます。",
            "missingWord": "して",
            "options": [
              "して",
              "する",
              "した",
              "しない"
            ],
            "correctAnswer": "して",
            "explanation": "将来の目的のための事前準備を表す文型は【動詞て形＋おく】です（予約をしておきます）。"
          },
          {
            "id": "ja-u3-l1-q8",
            "type": "audio_listen",
            "phrase": "たいせつなしょるいなので、つくえのひきだしにいれておきました。",
            "prompt": "音声の発話者が行った行動とその目的として正しいものを選んでください：",
            "options": [
              "重要書類なので、紛失しないよう事前に引き出しに保管した",
              "書類をゴミ箱に捨ててしまった",
              "書類が見つからずに探している",
              "書類を他人に手渡した"
            ],
            "correctAnswer": "重要書類なので、紛失しないよう事前に引き出しに保管した",
            "explanation": "他動詞「入れる」＋て形＋おく（入れておきました）は、事前の対策・保管措置を表します。"
          }
        ]
      },
      {
        "id": "ja-u3-l2",
        "title": "Lesson 3.2: 条件表現の徹底比較（〜と・〜ば・〜たら・〜なら） (Conditional Triggers)",
        "description": "4つの条件表現の文法的制約とニュアンスの違い（恒常的必然・論理的前提・時間的前後・助言や仮定）。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u3-l2-q1",
            "type": "multiple_choice",
            "prompt": "「春になる【 と 】、桜が咲きます」のように、自然現象や機械の操作など『必然的・恒常的な結果』を導く条件表現はどれですか？",
            "options": [
              "〜と",
              "〜なら",
              "〜たら",
              "〜ても"
            ],
            "correctAnswer": "〜と",
            "explanation": "条件表現「〜と」は、前件が起こると100%必然的に後件が起こる自然法則、恒常的現象、機械操作（ボタンを押すと水が出る）に最も適しています。"
          },
          {
            "id": "ja-u3-l2-q2",
            "type": "fill_blank",
            "sentence": "ゴミをきちんと分別 ___ 、地域の環境を守ることができます。",
            "missingWord": "すれば",
            "options": [
              "すれば",
              "すると",
              "したなら",
              "して"
            ],
            "correctAnswer": "すれば",
            "explanation": "好ましい結果を生むための必要条件や論理的仮定を提示する際、仮定形「〜ば (sureba)」が最も自然です。"
          },
          {
            "id": "ja-u3-l2-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「授業が終わったら、図書館で作文を書きます」という文を作ってください：",
            "tokens": [
              "授業が",
              "終わったら、",
              "図書館で",
              "作文を書きます。"
            ],
            "correctTokens": [
              "授業が",
              "終わったら、",
              "図書館で",
              "作文を書きます。"
            ],
            "explanation": "前件の完了後に後件を行う時間的順序（〜した後に）を表す条件は「〜たら」が適しています。"
          },
          {
            "id": "ja-u3-l2-q4",
            "type": "matching",
            "prompt": "条件表現とその典型的な語用論的特徴を結びつけてください：",
            "pairs": [
              {
                "native": "〜と",
                "english": "Inevitable natural results & machine operations"
              },
              {
                "native": "〜ば",
                "english": "Logical prerequisite & hypothetical necessity"
              },
              {
                "native": "〜たら",
                "english": "Sequential timing & conversational general conditionals"
              },
              {
                "native": "〜なら",
                "english": "Contextual topic assumption & advice/recommendations"
              }
            ]
          },
          {
            "id": "ja-u3-l2-q5",
            "type": "audio_listen",
            "phrase": "にほんへいくなら、あきがいちばんおすすめですよ。",
            "prompt": "音声の条件表現「〜なら」が果たしている役割として正しいものを選んでください：",
            "options": [
              "相手の意図（日本に行くこと）を前提とした助言や提案",
              "過去の確定した事実の報告",
              "自然現象による不可避な気候変動の警告",
              "相手に対する強い命令と禁止"
            ],
            "correctAnswer": "相手の意図（日本に行くこと）を前提とした助言や提案",
            "explanation": "「〜なら (nara)」は相手が出した話題や前提を受け止め、「それなら〜がおすすめだ」と助言・アドバイスを与える際に最適です。"
          },
          {
            "id": "ja-u3-l2-q6",
            "type": "multiple_choice",
            "prompt": "後件に「意志・依頼・命令・勧誘」（〜してください、〜しましょう）を置くことが文法的に禁止されている条件表現はどれですか？",
            "options": [
              "〜と",
              "〜たら",
              "〜なら",
              "〜ば（状態性述語の場合）"
            ],
            "correctAnswer": "〜と",
            "explanation": "条件表現「〜と」の後件には、話者の意志、命令、依頼、勧誘の表現（〜てください、〜しよう、〜たい）を持ってくることはできません（×東京へ行くと、電話してください）。"
          },
          {
            "id": "ja-u3-l2-q7",
            "type": "fill_blank",
            "sentence": "安くても、品質が ___ 買いません。",
            "missingWord": "悪ければ",
            "options": [
              "悪ければ",
              "悪いと",
              "悪かったら",
              "悪いのなら"
            ],
            "correctAnswer": "悪ければ",
            "explanation": "形容詞の仮定形：悪い →「悪ければ (if it is bad)」。イ形容詞の語尾「い」を「ければ」に変えます。"
          },
          {
            "id": "ja-u3-l2-q8",
            "type": "audio_listen",
            "phrase": "あしたあめがふったら、バーベキューはちゅうしにしましょう。",
            "prompt": "音声の意図として最も適切なものを選んでください：",
            "options": [
              "明日雨天だった場合の対応方針（中止）の提案",
              "雨が降ることを願う発言",
              "雨の中でも決行するという決意",
              "過去の天候不良への不満"
            ],
            "correctAnswer": "明日雨天だった場合の対応方針（中止）の提案",
            "explanation": "「降ったら〜中止にしましょう」は仮定の条件に基づく提案（〜たら＋勧誘）です。"
          }
        ]
      },
      {
        "id": "ja-u3-l3",
        "title": "Lesson 3.3: 授受動詞（あげる・くれる・もらう）と敬意 (Giving & Receiving)",
        "description": "物の移動と恩恵の授受（〜てあげる／〜てくれる／〜てもらう）、ウチとソトの人間関係。",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "ja-u3-l3-q1",
            "type": "multiple_choice",
            "prompt": "「友人が私に傘を（　）」という文で、他者が『私（または身内）』に何かを授ける場合に用いる動詞はどれですか？",
            "options": [
              "くれました",
              "あげました",
              "もらいました",
              "やりました"
            ],
            "correctAnswer": "くれました",
            "explanation": "他人が「私」または「私のウチ（身内）」に物や恩恵を与える方向の動作には「くれる／くれます」を用います。「あげる」は私から他者、または第三者間の授与です。"
          },
          {
            "id": "ja-u3-l3-q2",
            "type": "fill_blank",
            "sentence": "私は日本語の先生に推薦状を書いて ___ 。",
            "missingWord": "いただきました",
            "options": [
              "いただきました",
              "あげました",
              "やりました",
              "くれました"
            ],
            "correctAnswer": "いただきました",
            "explanation": "目上の人から行為（恩恵）を受ける場合、「もらう」の謙譲表現である「いただく／いただきました」を用います。"
          },
          {
            "id": "ja-u3-l3-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「同僚が親切に駅まで車で送ってくれました」という文を作ってください：",
            "tokens": [
              "同僚が親切に",
              "駅まで車で",
              "送って",
              "くれました。"
            ],
            "correctTokens": [
              "同僚が親切に",
              "駅まで車で",
              "送って",
              "くれました。"
            ],
            "explanation": "他者が私に好意で何かをしてくれた時は【動詞て形＋くれる】：送ってくれました。"
          },
          {
            "id": "ja-u3-l3-q4",
            "type": "matching",
            "prompt": "授受動詞の基本形と目上・敬語ペアを結びつけてください：",
            "pairs": [
              {
                "native": "あげる",
                "english": "さしあげる（謙譲）"
              },
              {
                "native": "もらう",
                "english": "いただく（謙譲）"
              },
              {
                "native": "くれる",
                "english": "くださる（尊敬）"
              },
              {
                "native": "やる",
                "english": "あげる（動物や植物への水やり）"
              }
            ]
          },
          {
            "id": "ja-u3-l3-q5",
            "type": "audio_listen",
            "phrase": "せんせいがわかりやすくぶんぽうをせつめいしてくださいました。",
            "prompt": "音声の文が伝えている事実として最も正確なものを選んでください：",
            "options": [
              "先生が（私・私たちに）分かりやすく文法を説明してくださった",
              "自分が先生に文法の説明をしてあげた",
              "先生に文法を説明するよう厳しく命じた",
              "先生が誰にも文法を教えてくれなかった"
            ],
            "correctAnswer": "先生が（私・私たちに）分かりやすく文法を説明してくださった",
            "explanation": "「〜てくださる」は目上の人が自分に恩恵を授ける敬語表現（〜てくれるの尊敬語）です。"
          },
          {
            "id": "ja-u3-l3-q6",
            "type": "multiple_choice",
            "prompt": "「〜ていただく」の構文で、恩恵の提供者（〜に書いてもらう等の相手）を示す助詞は何ですか？",
            "options": [
              "に",
              "を",
              "で",
              "へ"
            ],
            "correctAnswer": "に",
            "explanation": "「私は［人に］〜てもらう／ていただく」の構文において、行為をしてくれた相手は助詞「に」で表します（例：田中先生に教えていただきました）。"
          },
          {
            "id": "ja-u3-l3-q7",
            "type": "fill_blank",
            "sentence": "重そうな荷物ですね。お持ち ___ しょうか？",
            "missingWord": "しま",
            "options": [
              "しま",
              "されま",
              "なさ",
              "になりま"
            ],
            "correctAnswer": "しま",
            "explanation": "相手に対して自分の手助けを申し出る謙譲表現は「お＋動詞語幹＋しましょうか」（お持ちしましょうか = Shall I carry it for you?）です。"
          },
          {
            "id": "ja-u3-l3-q8",
            "type": "audio_listen",
            "phrase": "このコピーき、つかいかたをおしえてもらえませんか。",
            "prompt": "音声の依頼表現の丁寧さのレベルとして正しいものを選んでください：",
            "options": [
              "同僚や親しい人に親切に教えを乞う丁寧な依頼（〜てもらえませんか）",
              "上司に対する絶対的な命令",
              "店員を怒鳴りつける粗暴な物言い",
              "独り言の疑問"
            ],
            "correctAnswer": "同僚や親しい人に親切に教えを乞う丁寧な依頼（〜てもらえませんか）",
            "explanation": "「〜てもらえませんか (Could you please ~ for me?)」は、相手に負担をかけすぎず丁寧に行為を依頼する日常・職場の必須表現です。"
          }
        ]
      },
      {
        "id": "ja-u3-l4",
        "title": "Lesson 3.4: JLPT N3 読解・情報検索（告知・メール・意見文） (Contextual Reading & Extraction)",
        "description": "実用的なチラシ・マンション掲示板・ビジネス連絡文からの特定情報検索、650字漢字の定着。",
        "xp": 30,
        "completed": false,
        "questions": [
          {
            "id": "ja-u3-l4-q1",
            "type": "multiple_choice",
            "prompt": "【地域の回覧板】『来週月曜日の午前9時から12時まで、水道管の工事に伴い断水いたします。各自で飲料水を確保してください。』この告知が伝えている最も重要な注意点は何ですか？",
            "options": [
              "月曜日の午前中に水が出なくなるため、事前に飲み水を備えること",
              "月曜日に水道料金の集金が行われること",
              "水道工事のため月曜日は外出が禁止されること",
              "月曜日はゴミの回収時間が早まること"
            ],
            "correctAnswer": "月曜日の午前中に水が出なくなるため、事前に飲み水を備えること",
            "explanation": "「断水 (dansui)」は水道の供給が一時的に停止することです。飲料水の事前確保が指示されています。"
          },
          {
            "id": "ja-u3-l4-q2",
            "type": "fill_blank",
            "sentence": "この商品は性能が優れている ___ 、価格も手頃で人気がある。",
            "missingWord": "だけでなく",
            "options": [
              "だけでなく",
              "にかけて",
              "に反して",
              "にすぎず"
            ],
            "correctAnswer": "だけでなく",
            "explanation": "「〜だけでなく (not only ~ but also)」は複数の長所や要素を累加して述べる論理接続表現です。"
          },
          {
            "id": "ja-u3-l4-q3",
            "type": "scramble",
            "prompt": "単語を並べ替えて「健康のために、毎日野菜を食べるようにしています」という文を作ってください：",
            "tokens": [
              "健康のために、",
              "毎日野菜を",
              "食べるように",
              "しています。"
            ],
            "correctTokens": [
              "健康のために、",
              "毎日野菜を",
              "食べるように",
              "しています。"
            ],
            "explanation": "習慣的な努力や心がけを表す文型は【動詞辞書形／ない形＋ようにしている】です。"
          },
          {
            "id": "ja-u3-l4-q4",
            "type": "matching",
            "prompt": "N3読解で頻出する論理接続詞とその機能をつなげてください：",
            "pairs": [
              {
                "native": "しかし / だが",
                "english": "逆接 (Contrast / However)"
              },
              {
                "native": "したがって / そのため",
                "english": "順接・結果 (Therefore / Consequently)"
              },
              {
                "native": "例えば（たとえば）",
                "english": "例示 (For example / Illustration)"
              },
              {
                "native": "つまり / 要するに",
                "english": "要約・換言 (In short / In other words)"
              }
            ]
          },
          {
            "id": "ja-u3-l4-q5",
            "type": "audio_listen",
            "phrase": "らいしゅうのしんせいしょのていしゅつきげんは、きんようびのじゅうななじひっち着となっております。",
            "prompt": "申請書の提出期限について正しく述べているものを選んでください：",
            "options": [
              "来週金曜日の午後5時までに必ず届いていなければならない",
              "来週金曜日の消印であれば何時に出してもよい",
              "来週の金曜日から受付が始まる",
              "来週月曜日の午前中に手渡しする"
            ],
            "correctAnswer": "来週金曜日の午後5時までに必ず届いていなければならない",
            "explanation": "「必着 (hitchaku)」は締切日時までに指定の場所に書類が『必ず到着していなければならない』ことを意味します。17時は午後5時です。"
          },
          {
            "id": "ja-u3-l4-q6",
            "type": "multiple_choice",
            "prompt": "「〜はずです」という文型の意味として正しいものはどれですか？",
            "options": [
              "確たる根拠や論理に基づく強い確信や推測（〜であるはずだ）",
              "単なる当て推量や夢",
              "他者への命令や指示",
              "過去の習慣的な行動"
            ],
            "correctAnswer": "確たる根拠や論理に基づく強い確信や推測（〜であるはずだ）",
            "explanation": "「動詞普通形＋はずです」は、理由や根拠から客観的に考えて当然そうなるはずだという論理的確信を表します。"
          },
          {
            "id": "ja-u3-l4-q7",
            "type": "fill_blank",
            "sentence": "急な出張が入った ___ 、明日のゼミに参加できなくなりました。",
            "missingWord": "ため",
            "options": [
              "ため",
              "つもり",
              "ように",
              "とおり"
            ],
            "correctAnswer": "ため",
            "explanation": "客観的な原因・理由を表すフォーマルな表現は「名詞＋の / 動詞普通形＋ため (because of / due to)」です。"
          },
          {
            "id": "ja-u3-l4-q8",
            "type": "audio_listen",
            "phrase": "あいにくですが、ごきぼうのしょうひんはただいまいちじてきにざいこぎれとなっております。",
            "prompt": "店員のアナウンスが意味している内容として正しいものを選んでください：",
            "options": [
              "希望された商品は現在、一時的に売り切れて在庫がない",
              "商品は大量に入荷したばかりである",
              "商品は半額セール中である",
              "商品はすでに製造中止となった"
            ],
            "correctAnswer": "希望された商品は現在、一時的に売り切れて在庫がない",
            "explanation": "「あいにく（残念ながら）」＋「在庫切れ（品切れ）」は、顧客の要望に添えず在庫がないことを丁寧に詫びる商用慣用表現です。"
          }
        ]
      }
    ]
  }
];

export default japaneseTrackAUnits;
