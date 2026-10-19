// =========================================================================
// CBT & JLPT / MEXT Dynamic Japanese Examination Engine
// Grounded in official Japanese government and institutional standards:
// - Japan Foundation & MEXT: JF Standard for Japanese-Language Education
// - JLPT (Japanese-Language Proficiency Test) N5, N3, and N2 Official Matrices
// - Three Pillars: 言語知識 (Language Knowledge), 読解 (Reading), 聴解 (Listening),
//   plus Interactive Writing and Speaking Lab Simulations.
// Guarantees a BRAND NEW set of test questions on every attempt for logged-in users!
// =========================================================================

import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

// =========================================================================
// 1. POOL JLPT N5 (JF LEVEL A1 • FOUNDATIONAL LITERACY & ROUTINES)
// =========================================================================
export const japaneseN5Reading = [
  {
    id: "ja-n5-r-01",
    subtest: "reading",
    title: "駅の案内：地下鉄の乗り方と切符売り場",
    passage: `【地下鉄 さくら駅の ごあんない】
きっぷうりばは、かいさつぐちの みぎがわに あります。
とうきょうえきまでの きっぷは、おとな 200えん、こども 100えんです。
1ばんせんの でんしゃは、しんじゅく・しぶや ゆきです。
2ばんせんの でんしゃは、とうきょう・うえの ゆきです。
でんしゃの なかでは、でんわを かけないで ください。`,
    prompt: "東京駅へ行きたい大人は、どこでいくらの切符を買って、何番線の電車に乗りますか？",
    options: [
      "A) 改札の右側で200円の切符を買い、2番線の電車に乗る",
      "B) 改札の左側で100円の切符を買い、1番線の電車に乗る",
      "C) ホームで500円の切符を買い、1番線の電車に乗る",
      "D) 切符を買わずに2番線の電車に乗る"
    ],
    correctAnswer: "A) 改札の右側で200円の切符を買い、2番線の電車に乗る",
    explanation: "案内文によると、切符売り場は改札口の右側にあり、東京駅までは大人200円、東京行きの電車は2番線です。"
  },
  {
    id: "ja-n5-r-02",
    subtest: "reading",
    title: "留学生センターの掲示：日本語スピーチ大会",
    passage: `【りゅうがくせいセンターからのおしらせ】
第10回 にほんごスピーチたいかい
・日時：12月15日（日曜日）ごご 1じ〜4じ
・場所：こくさいホール 3かい
・テーマ：「わたしが すきな にほんの ぶんか」
・さんかできる人：にほんごを べんきょうしている りゅうがくせい
スピーチを したい人は、11月20日までに じむしつへ もうしこんで ください。`,
    prompt: "スピーチ大会で発表したい留学生は、いつまでに何をしなければなりませんか？",
    options: [
      "A) 11月20日までに事務室へ申し込む",
      "B) 12月15日に国際ホールへ行く",
      "C) 3階で200円を支払う",
      "D) 先生にスピーチ原稿を郵送する"
    ],
    correctAnswer: "A) 11月20日までに事務室へ申し込む",
    explanation: "「スピーチを したい人は、11月20日までに じむしつへ もうしこんで ください」と明確に記載されています。"
  },
  {
    id: "ja-n5-r-03",
    subtest: "reading",
    title: "図書館の利用案内：本とDVDの貸出ルール",
    passage: `【みどり市 としょかん りようあんない】
本は 一人 5さつまで、2しゅうかん かりることが できます。
DVDや CDは 一人 2まいまで、1しゅうかん かりることが できます。
・休館日：まいしゅう げつようび（月曜日が しゅくじつの ときは かようび）
・あいている時間：ごぜん 9じ〜ごご 7じ
ほんを かえすときは、としょかんの カードは いりません。`,
    prompt: "図書館のルールとして正しいものはどれですか？",
    options: [
      "A) 本は一人5冊まで、2週間借りることができる",
      "B) DVDは一人5枚まで借りることができる",
      "C) 毎週日曜日は休みである",
      "D) 本を返すとき、必ずカードが必要である"
    ],
    correctAnswer: "A) 本は一人5冊まで、2週間借りることができる",
    explanation: "「本は 一人 5さつまで、2しゅうかん かりることが できます」と書かれています。DVDは2枚まで、休館日は月曜日です。"
  },
  {
    id: "ja-n5-r-04",
    subtest: "reading",
    title: "アパートのゴミ出しカレンダー",
    passage: `【ハイツさくら ゴミの だしかた】
・もえるゴミ：かようび・きんようび
・もえないゴミ：第2・第4 すいようび
・ペットボトル・びん・かん：もくようび
※ゴミは あさ 8じまでに、アパートの まえの ゴミステーションへ だしてください。
ぜんじつの よるに ゴミを だしては いけません。`,
    prompt: "ペットボトルを捨てたいときは、いつ出さなければなりませんか？",
    options: [
      "A) 木曜日の朝8時まで",
      "B) 火曜日の夜9時",
      "C) 水曜日の午後3時",
      "D) 金曜日の朝9時以降"
    ],
    correctAnswer: "A) 木曜日の朝8時まで",
    explanation: "「ペットボトル・びん・かん：木曜日」「朝8時までにゴミステーションへ出してください」と指定されています。"
  }
];

export const japaneseN5Writing = [
  {
    id: "ja-n5-w-01",
    subtest: "writing",
    title: "自己紹介と学習目標のメール (Self-Introduction Email)",
    prompt: "日本語学校のクラスメイトに向けて、ひらがな・簡単な漢字を使って自己紹介のメッセージを書いてください。（お名前、出身国、好きなこと、これからの目標を含めること。目安：60〜80字）",
    minWords: 30,
    guidelines: "です・ます調を使用し、名前、出身、趣味や好きな日本文化、挨拶（よろしくお願いします）を明記すること。",
    modelResponse: "初めまして。私の名前はマイケルです。アメリカから来ました。日本のアニメと寿司が大好きです。毎日日本語を勉強して、来年JLPT N4に合格したいです。どうぞよろしくお願いします。"
  },
  {
    id: "ja-n5-w-02",
    subtest: "writing",
    title: "週末の予定と友達へのメッセージ (Weekend Invitation)",
    prompt: "友達のタナカさんを今度の日曜日の買い物や食事に誘う短いメッセージを書いてください。（日時、場所、何をしたいか、待ち合わせ時刻を含めること。目安：50〜70字）",
    minWords: 25,
    guidelines: "丁寧な提案表現（〜ませんか、〜ましょう）を用い、集合時間と場所を分かりやすく書くこと。",
    modelResponse: "田中さん、こんにちは。今度の日曜日に時間がありますか。一緒に渋谷へ行って、ラーメンを食べませんか。午後一時にハチ公の前で会いましょう。お返事を待っています。"
  }
];

export const japaneseN5Listening = [
  {
    id: "ja-n5-l-01",
    subtest: "listening",
    maxPlays: 2,
    title: "駅の改札前での会話：待ち合わせ場所と時間",
    audioPhrase: "すみません、あしたはなんじにどこであいましょうか。えきのひがしぐちのかいさつに、じゅうじはどうですか。はい、わかりました。じゃあ、じゅうじにひがしぐちで。",
    prompt: "二人は明日、何時にどこで会いますか？",
    options: [
      "A) 10時に駅の東口で会う",
      "B) 9時に駅の西口で会う",
      "C) 12時に喫茶店で会う",
      "D) 10時に改札の中の売店で会う"
    ],
    correctAnswer: "A) 10時に駅の東口で会う",
    explanation: "「東口の改札に、10時はどうですか」「じゃあ、10時に東口で」と合意しています。"
  },
  {
    id: "ja-n5-l-02",
    subtest: "listening",
    maxPlays: 2,
    title: "パン屋での買い物：代金の支払い",
    audioPhrase: "いらっしゃいませ。メロンパンふたつと、サンドイッチひとつですね。ぜんぶでろっぴゃくごじゅうえんになります。せんえんからでよろしいですか。さんびゃくごじゅうえんのおかえしです。",
    prompt: "客が受け取ったおつりはいくらですか？",
    options: [
      "A) 350円",
      "B) 650円",
      "C) 1,000円",
      "D) 300円"
    ],
    correctAnswer: "A) 350円",
    explanation: "店員が「350円のお返しです (Your change is 350 yen)」と明言しています。"
  }
];

export const japaneseN5Speaking = [
  {
    id: "ja-n5-s-01",
    subtest: "speaking",
    title: "日常の自己紹介と日課の質疑応答",
    prompt: "試験官からの質問に対して、自分の出身、普段の起床時間、週末によくすることを日本語で答えてください。",
    audioPrompt: "初めまして。お名前と、毎朝何時に起きるか教えてください。",
    prepSeconds: 10,
    speakSeconds: 25,
    modelAnswer: "初めまして。私はデビッドです。毎朝七時に起きて、朝ご飯を食べます。週末は友だちと公園を散歩します。どうぞよろしくお願いします。"
  },
  {
    id: "ja-n5-s-02",
    subtest: "speaking",
    title: "コンビニ・店舗での簡単な注文と尋ね方",
    prompt: "コンビニで温かいお茶を買いたいと店員に伝え、お弁当を温めてほしいとお願いしてください。",
    audioPrompt: "いらっしゃいませ！ご注文はお決まりですか？",
    prepSeconds: 10,
    speakSeconds: 25,
    modelAnswer: "温かいお茶を一つください。それから、このお弁当を温めてください。袋も一枚お願いします。"
  }
];

// =========================================================================
// 2. POOL JLPT N3 (JF LEVEL B1 • EVERYDAY AUTONOMY & SOCIETY)
// =========================================================================
export const japaneseN3Reading = [
  {
    id: "ja-n3-r-01",
    subtest: "reading",
    title: "環境コラム：地域のリサイクルとプラスチック削減",
    passage: `近年、海洋プラスチック問題が国際的な議論を呼んでいる。日本国内の自治体でも、ゴミの分別基準をより厳格化する動きが広がってきた。
例えば、A市では今年度から、プラスチック製品を「資源」として一括回収する新システムを導入した。住民からは当初、「分別の手間が増えて面倒だ」という戸惑いの声も聞かれた。しかし、市が丁寧な説明会を重ね、分別すれば年間約30%のゴミ処理費用が削減され、環境保護に直結することが理解されるにつれて、協力率は急速に向上した。
一人ひとりの些細な努力であっても、市民全体が継続すれば巨大な成果を生み出すことができるのである。`,
    prompt: "A市で住民のゴミ分別への協力率が向上した主な理由は何ですか？",
    options: [
      "A) 市の説明会を通じて、分別が経費削減と環境保護に繋がると理解されたから",
      "B) 分別しない住民に高額な罰金が科されるようになったから",
      "C) すべてのプラスチック製品の販売が市内で禁止されたから",
      "D) ボランティアが全家庭のゴミを代わりに分別してくれるようになったから"
    ],
    correctAnswer: "A) 市の説明会を通じて、分別が経費削減と環境保護に繋がると理解されたから",
    explanation: "本文第2段落に「分別すれば年間約30%のゴミ処理費用が削減され、環境保護に直結することが理解されるにつれて、協力率は急速に向上した」とあります。"
  },
  {
    id: "ja-n3-r-02",
    subtest: "reading",
    title: "職場メール：社内勉強会の開催と出欠連絡",
    passage: `社員各位
総務部研修課より、来月の「生成AI活用スキルアップ勉強会」についてご案内いたします。
業務の効率化を図るため、専門の外部講師をお招きし、実践的なプロンプト作成や著作権上の留意点について解説していただきます。
・日時：11月18日（月）15:00〜16:30（オンライン配信併用）
・対象：全社員（受講料無料）
参加を希望される方は、業務の都合を上司とご相談の上、11月10日（日）までに社内ポータルサイトの専用フォームより出欠をご登録ください。定員（50名）になり次第、締め切らせていただきます。`,
    prompt: "この社内勉強会に参加したい社員は、どのように手続きを行う必要がありますか？",
    options: [
      "A) 上司と相談の上、11月10日までに社内ポータルの専用フォームから登録する",
      "B) 11月18日当日に研修課へ直接電話して受講料を支払う",
      "C) 外部講師にメールで推薦状を送付する",
      "D) 50名以上の署名を集めて総務部に提出する"
    ],
    correctAnswer: "A) 上司と相談の上、11月10日までに社内ポータルの専用フォームから登録する",
    explanation: "「業務の都合を上司とご相談の上、11月10日（日）までに社内ポータルサイトの専用フォームより出欠をご登録ください」と指定されています。"
  },
  {
    id: "ja-n3-r-03",
    subtest: "reading",
    title: "生活案内：災害発生時の避難場所と防災アプリの活用",
    passage: `日本は地震や台風などの自然災害が多い国です。万が一の大規模災害に備えて、日頃から最寄りの「指定緊急避難場所」を確認しておくことが命を守る鍵となります。
避難所は通常、地域の小学校や中学校、市民センターなどが指定されています。ただし、洪水や土砂災害の危険がある地域では、高台や頑丈な鉄筋コンクリート造の建物の3階以上へ避難する「垂直避難」が推奨される場合もあります。
市が配信する防災アプリに登録しておけば、スマートフォンのGPS機能により、オフライン時でも安全な避難ルートが地図上に表示されます。`,
    prompt: "本文の内容と合致している記述はどれですか？",
    options: [
      "A) 洪水の恐れがある地域では、建物の3階以上へ避難する垂直避難が推奨されることもある",
      "B) 避難場所は警察署と消防署の屋上だけに限られている",
      "C) 防災アプリはインターネットに接続していなければ一切使えない",
      "D) 自然災害が起きた時は、必ず小学校の校庭に集まらなければならない"
    ],
    correctAnswer: "A) 洪水の恐れがある地域では、建物の3階以上へ避難する垂直避難が推奨されることもある",
    explanation: "第2段落に「洪水や土砂災害の危険がある地域では、高台や頑丈な鉄筋コンクリート造の建物の3階以上へ避難する垂直避難が推奨される場合もあります」と記載されています。"
  }
];

export const japaneseN3Writing = [
  {
    id: "ja-n3-w-01",
    subtest: "writing",
    title: "地域の自治会・ゴミ回収ルール改善の提案文",
    prompt: "アパートのゴミ収集所でカラスや動物がゴミを散らかす問題について、管理会社へネットの設置や回収時間の変更を提案する要望文を書いてください。（現状の問題、理由、改善案、結び。目安：150〜200字）",
    minWords: 80,
    guidelines: "「〜て困っています」「〜ようにしていただけないでしょうか」等の丁寧な依頼表現を用い、建設的な解決策を提示すること。",
    modelResponse: "ハイツ桜201号室のジョンソンです。いつもお世話になっております。ゴミステーションのカラス被害について相談申し上げます。最近、朝のゴミがカラスに荒らされ、道路に散乱して異臭がし、近隣住民が大変困っております。つきましては、防鳥ネットを設置するか、鍵付きのボックスに変更していただけないでしょうか。ご検討のほど、何卒よろしくお願い申し上げます。"
  },
  {
    id: "ja-n3-w-02",
    subtest: "writing",
    title: "職場での有給休暇申請と業務引き継ぎ連絡",
    prompt: "来月家族の私用で3日間の有給休暇を取得するため、直属の上司へ事前申請と業務引き継ぎ体制を報告するビジネスメールを書いてください。（目的、休暇日程、引き継ぎ担当者、緊急連絡先。目安：150〜200字）",
    minWords: 80,
    guidelines: "社内ビジネスメールのマナー（件名、宛名、挨拶、本題、結び）を守り、丁寧体で記述すること。",
    modelResponse: "件名：有給休暇取得のお願い（佐藤）\n山田課長\nお疲れ様です。営業部の佐藤です。私事で大変恐縮ですが、来月12月5日から7日までの3日間、家族の私用のため有給休暇をいただきたく存じます。休暇中の進行案件につきましては、同僚の木村さんに全て引き継ぎを完了しております。緊急の用件がございましたら、私の携帯電話（090-XXXX-XXXX）までご連絡ください。ご迷惑をおかけしますが、よろしくお願いいたします。"
  }
];

export const japaneseN3Listening = [
  {
    id: "ja-n3-l-01",
    subtest: "listening",
    maxPlays: 2,
    title: "職場での業務指示：新商品のパンフレット校正",
    audioPhrase: "佐藤さん、来週印刷に回す新商品のパンフレットだけど、デザイン会社から修正データが届いたよ。まず価格の表記に誤りがないか確認して、それから営業部の田中課長に最終確認のサインをもらってくれる？そのあと印刷会社に送ってね。",
    prompt: "佐藤さんは、まず一番最初に何をしなければなりませんか？",
    options: [
      "A) パンフレットの価格表記に誤りがないか確認する",
      "B) 田中課長に最終サインをもらう",
      "C) 印刷会社にデータを直接送信する",
      "D) デザイン会社に再修正を依頼する"
    ],
    correctAnswer: "A) パンフレットの価格表記に誤りがないか確認する",
    explanation: "「まず価格の表記に誤りがないか確認して、それから田中課長にサインをもらって...」という順序が明示されています。"
  },
  {
    id: "ja-n3-l-02",
    subtest: "listening",
    maxPlays: 2,
    title: "公共交通機関の運行乱れアナウンス",
    audioPhrase: "お客様にお知らせいたします。ただいま強風の影響により、中央線は上下線ともに運転を見合わせております。運転再開は午後3時頃を見込んでおりますが、状況により前後する場合がございます。お急ぎのお客様は、地下鉄線への振替輸送をご利用ください。",
    prompt: "アナウンスを聞いて、急いでいる乗客が取るべき行動は何ですか？",
    options: [
      "A) 地下鉄線への振替輸送を利用する",
      "B) 中央線のホームで午後5時まで待つ",
      "C) 新幹線に乗り換える",
      "D) タクシーを呼んで待機する"
    ],
    correctAnswer: "A) 地下鉄線への振替輸送を利用する",
    explanation: "「お急ぎのお客様は、地下鉄線への振替輸送をご利用ください」と案内されています。"
  }
];

export const japaneseN3Speaking = [
  {
    id: "ja-n3-s-01",
    subtest: "speaking",
    title: "日本の職場での状況説明と相談（アポイントメント変更）",
    prompt: "突然の体調不良または交通機関の乱れにより、取引先との面談時間に30分遅れそうな状況です。電話で丁寧に事情を説明し、時間の変更を相談してください。",
    audioPrompt: "ABC物産の鈴木でございます。お電話ありがとうございます。",
    prepSeconds: 15,
    speakSeconds: 35,
    modelAnswer: "いつもお世話になっております。XYZ商事の田中と申します。本日14時からのお約束でお伺いする予定でしたが、利用している電車の遅延により、到着が30分ほど遅れてしまいそうです。大変申し訳ございません。もしよろしければ、開始時間を14時30分に変更していただけないでしょうか。"
  },
  {
    id: "ja-n3-s-02",
    subtest: "speaking",
    title: "地域社会・環境への取り組みに関する意見表明",
    prompt: "地域のプラスチックゴミ削減について、あなたの意見と母国での取り組みを比較しながら述べてください。",
    audioPrompt: "プラスチックゴミを減らすために、私たちは普段の生活でどんな工夫ができると思いますか？",
    prepSeconds: 15,
    speakSeconds: 35,
    modelAnswer: "私はマイバッグやマイボトルを常に持ち歩くことが大切だと思います。使い捨てのプラスチック製品を断る習慣をつければ、個人のゴミは確実に減らせます。私の国でもレジ袋の有料化が進んでおり、一人ひとりの意識改革が重要だと考えています。"
  }
];

// =========================================================================
// 3. POOL JLPT N2 (JF LEVEL B2 • WORKPLACE RIGOR & ACADEMIC DOKKAI)
// =========================================================================
export const japaneseN2Reading = [
  {
    id: "ja-n2-r-01",
    subtest: "reading",
    title: "論説文：AI時代の労働観と『余白』の重要性",
    passage: `情報技術や人工知能（AI）の急速な発展に伴い、ビジネス現場における「効率性」と「生産性の最大化」が過度なまでに叫ばれるようになった。定型業務の自動化は確かに労働時間の短縮に寄与したものの、その空いた時間に新たな業務が詰め込まれ、結果として人間が情報処理の歯車として疲弊する逆転現象が生じている。
しかし、真のイノベーションや独創的な着想は、過密なスケジュールの中から生まれるわけではない。一見すると無駄や非効率に思える「余白の時間」——思索にふけり、他愛のない雑談を交わし、目的のない読書に没頭する時間こそが、既存の枠組みを揺さぶる創発的知性の苗床となるのである。
効率を追求するあまり余白を削ぎ落とす社会は、自らの創造性の源泉を枯渇させているに等しいのではないだろうか。`,
    prompt: "筆者がこの文章で最も主張したい論点は何ですか？",
    options: [
      "A) 効率性の過度な追求を戒め、無駄に見える余白の時間こそが創造的知性に不可欠であるということ",
      "B) AIの進化は直ちに禁止すべきであり、全ての自動化技術は廃止されるべきであるということ",
      "C) 定型業務の効率化によってすべての労働者が完全な幸福を手に入れたということ",
      "D) 読書や雑談は生産性を低下させるため職場から排除すべきであるということ"
    ],
    correctAnswer: "A) 効率性の過度な追求を戒め、無駄に見える余白の時間こそが創造的知性に不可欠であるということ",
    explanation: "筆者は第2・第3段落で、無駄に見える「余白の時間」こそが真のイノベーションや創造性の源泉であり、効率化ばかりでそれを削ぎ落とすべきではないと強調しています。"
  },
  {
    id: "ja-n2-r-02",
    subtest: "reading",
    title: "ビジネス論説：伝統工芸の承継とグローバル市場への適応",
    passage: `日本の伝統工芸産業は、後継者不足と国内需要の縮小により存続の危機に瀕している。古来の製法と意匠を厳格に守り続けることは文化財保護の観点からは極めて尊い。しかし、生活様式が欧米化した現代社会において、かつてと同じ用途・価格帯のままでは市場の支持を得ることは困難を極める。
近年注目を集めている成功例は、技術の核心を守りつつも、現代のライフスタイルに合わせて用途を再定義した工房である。例えば、伝統的な西陣織の技術を高級ホテルのインテリア壁材やスマートフォンのカバーへと展開した事例が挙げられる。
伝統とは固定された遺物ではなく、時代の変化を貪欲に吸収し、更新し続ける動的なプロセスにほかならない。`,
    prompt: "筆者によると、伝統工芸が生き残るために最も重要とされる姿勢は何ですか？",
    options: [
      "A) 伝統の技術的本質を守りつつ、時代の生活様式や用途に合わせて柔軟に更新し続けること",
      "B) 江戸時代の製法と用途を寸分違わず完全に固執し、一切の変更を拒絶すること",
      "C) 伝統工芸をすべて海外の工場へ外注して低価格で大量生産すること",
      "D) 伝統産業の存続を諦め、最新のデジタル技術開発へ全面的に転換すること"
    ],
    correctAnswer: "A) 伝統の技術的本質を守りつつ、時代の生活様式や用途に合わせて柔軟に更新し続けること",
    explanation: "「技術の核心を守りつつも、現代のライフスタイルに合わせて用途を再定義した工房」「伝統とは...更新し続ける動的なプロセスにほかならない」と述べています。"
  }
];

export const japaneseN2Writing = [
  {
    id: "ja-n2-w-01",
    subtest: "writing",
    title: "取引先への納期遅延に関する公式謝罪と善処策の提示",
    prompt: "海外サプライヤーからの部品調達の遅延により、貴社が納入予定であった製品の納期が2週間遅れる見込みとなりました。取引先の購買部長宛てに、遅延の客観的経緯、心からの謝罪、品質管理を維持した上での最短リカバリー計画、および今後の再発防止策を盛り込んだ格調高いビジネス謝罪状（書簡）を作成してください。（目安：250〜350字）",
    minWords: 150,
    guidelines: "厳格なビジネス敬語（貴社、弊社、拝啓・敬具、恐縮、誠に遺憾、善処等）を用い、客観的かつ誠実な文章を構築すること。",
    modelResponse: "拝啓\n貴社におかれましては、ますますご清栄のこととお慶び申し上げます。平素は格別のご高配を賜り、厚く御礼申し上げます。\nさて、来る12月1日に納入を予定しておりました新製品「αシリーズ」につきまして、大変遺憾ながら納期の延期をお願いせざるを得ない事態となりました。海外提携工場における突発的な資材輸送遅延が発生し、弊社規定の厳格な品質検査工程を満たすために、約2週間の追加日程を要する見込みでございます。\n多大なるご迷惑をおかけしますことを、深くお詫び申し上げます。弊社といたしましては、最優先ラインにて検査を完了させ、12月15日までに全数納品を完遂することをお約束いたします。再発防止に向けサプライチェーンの見直しを徹底いたします。略儀ながら書中をもちまして陳謝申し上げます。\n敬具"
  }
];

export const japaneseN2Listening = [
  {
    id: "ja-n2-l-01",
    subtest: "listening",
    maxPlays: 1,
    title: "役員会議における新規海外進出戦略の討議",
    audioPhrase: "東南アジア市場への新規進出についてですが、現地競合他社との価格競争に巻き込まれるリスクを避けるため、単独出資での工場建設ではなく、現地有力コングロマリットとの合弁会社設立を優先すべきだという意見が多数を占めています。まずは合弁比率の交渉に入り、ブランド管理権を弊社が握ることを最優先とします。",
    prompt: "役員会議で合意された東南アジア市場への進出方針として正しいものはどれですか？",
    options: [
      "A) 単独出資を避け、ブランド管理権を保持した上で現地大手と合弁会社を設立する",
      "B) 価格競争に勝つため、全額自社出資で大規模工場を即座に建設する",
      "C) 東南アジア市場への進出を完全に断念し、北米市場に注力する",
      "D) 現地企業の全株式を友好的に買収して完全子会社化する"
    ],
    correctAnswer: "A) 単独出資を避け、ブランド管理権を保持した上で現地大手と合弁会社を設立する",
    explanation: "「単独出資での工場建設ではなく、現地有力コングロマリットとの合弁会社設立を優先」「ブランド管理権を弊社が握ることを最優先」と明言されています。"
  }
];

export const japaneseN2Speaking = [
  {
    id: "ja-n2-s-01",
    subtest: "speaking",
    title: "大学院・就職採用面接：研究テーマと社会的意義の口頭試問",
    prompt: "あなたの専門分野または関心のある社会課題について、なぜその研究・事業が必要なのか、どのような社会的インパクトをもたらすかを、論理的かつ説得力を持って説明してください。",
    audioPrompt: "あなたが本学（弊社）で最も力を入れて追究したいテーマと、その社会的意義についてお聞かせください。",
    prepSeconds: 20,
    speakSeconds: 45,
    modelAnswer: "私が最も注力したいテーマは、多文化共生社会における行政情報アクセスのデジタル最適化です。現在、在留外国人の増加に伴い、防災や医療などの重要情報伝達が課題となっています。単なる機械翻訳に頼るのではなく、文化的文脈を考慮した「やさしい日本語」とAIを融合させた情報基盤を構築することで、誰一人取り残されないインクルーシブな社会インフラの実現に寄与したいと考えております。"
  }
];

// =========================================================================
// 4. EXAM POOLS REGISTRY & EXAM GENERATOR
// =========================================================================
export const japaneseExamPools = {
  jlptN5: {
    reading: japaneseN5Reading,
    writing: japaneseN5Writing,
    listening: japaneseN5Listening,
    speaking: japaneseN5Speaking
  },
  jlptN3: {
    reading: japaneseN3Reading,
    writing: japaneseN3Writing,
    listening: japaneseN3Listening,
    speaking: japaneseN3Speaking
  },
  jlptN2: {
    reading: japaneseN2Reading,
    writing: japaneseN2Writing,
    listening: japaneseN2Listening,
    speaking: japaneseN2Speaking
  }
};

/**
 * Generate a dynamic Japanese CBT Exam Session.
 * Follows official JLPT & MEXT structures and enforces unseen question delivery!
 */
export function generateJapaneseDynamicExam(levelKey = "jlptN3", subtestFilter = null, userId = null) {
  const pool = japaneseExamPools[levelKey] || japaneseExamPools.jlptN3;

  const readingItems = pool.reading || [];
  const writingItems = pool.writing || [];
  const listeningItems = pool.listening || [];
  const speakingItems = pool.speaking || [];

  let combined = [];

  if (subtestFilter) {
    if (subtestFilter === 'reading') combined = readingItems;
    else if (subtestFilter === 'writing') combined = writingItems;
    else if (subtestFilter === 'listening') combined = listeningItems;
    else if (subtestFilter === 'speaking') combined = speakingItems;
  } else {
    // Full Comprehensive Exam Simulation
    combined = [
      ...readingItems,
      ...writingItems,
      ...listeningItems,
      ...speakingItems
    ];
  }

  // Enforce unseen questions using selectBrandNewSet
  const freshSession = selectBrandNewSet(userId, `japanese_${levelKey}_${subtestFilter || 'full'}`, combined, combined.length);

  const levelTitles = {
    jlptN5: "JLPT N5 模擬試験 (Foundational Literacy & Routines)",
    jlptN3: "JLPT N3 模擬試験 (Everyday Autonomy & Conditional Rigor)",
    jlptN2: "JLPT N2 模擬試験 (Workplace Rigor & Academic Dokkai)"
  };

  const levelBadges = {
    jlptN5: "JLPT N5 / JF A1",
    jlptN3: "JLPT N3 / JF B1",
    jlptN2: "JLPT N2 / JF B2"
  };

  const subtestTimes = {
    jlptN5: { reading: 3000, writing: 1200, listening: 1800, speaking: 900, full: 6300 },
    jlptN3: { reading: 4200, writing: 1800, listening: 2400, speaking: 1200, full: 8400 },
    jlptN2: { reading: 6300, writing: 2100, listening: 3000, speaking: 1500, full: 11400 }
  };

  const allottedSeconds = subtestTimes[levelKey]?.[subtestFilter || 'full'] || 5400;

  return {
    examId: `ja-${levelKey}-${Date.now()}`,
    levelKey,
    title: levelTitles[levelKey] || "JLPT Japanese Examination",
    badge: levelBadges[levelKey] || "JLPT",
    subtestFilter,
    subtestLabel: subtestFilter 
      ? (subtestFilter === 'reading' ? '読解 (Reading)' : subtestFilter === 'writing' ? '記述 (Writing)' : subtestFilter === 'listening' ? '聴解 (Listening)' : '口頭 (Speaking)')
      : '全科目総合試験 (Full Comprehensive Exam)',
    totalSeconds: allottedSeconds,
    isBrandNewSession: freshSession.isBrandNew,
    questions: freshSession.questions
  };
}

export default {
  japaneseExamPools,
  generateJapaneseDynamicExam
};
