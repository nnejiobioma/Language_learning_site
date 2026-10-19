import { spanishAllUnits } from './spanishCurriculum';
import { spanishFlashcards } from './spanishFlashcards';
import { spanishCultureVault } from './spanishCultureVault';
import { finnishAllUnits } from './finnishCurriculum';
import { finnishFlashcards } from './finnishFlashcards';
import { finnishCultureVault } from './finnishCultureVault';
import { frenchAllUnits } from './frenchCurriculum';
import { frenchFlashcards } from './frenchFlashcards';
import { frenchCultureVault } from './frenchCultureVault';
import { pidginAllUnits } from './pidginCurriculum';
import { pidginFlashcards } from './pidginFlashcards';
import { pidginCultureVault } from './pidginCultureVault';
import { hausaAllUnits } from './hausaCurriculum';
import { igboAllUnits } from './igboCurriculum';
import { yorubaAllUnits } from './yorubaCurriculum';
import { germanAllUnits } from './germanCurriculum';
import { germanFlashcards } from './germanFlashcards';
import { germanCultureVault } from './germanCultureVault';
import { portugueseAllUnits } from './portugueseCurriculum';
import { portugueseFlashcards } from './portugueseFlashcards';
import { portugueseCultureVault } from './portugueseCultureVault';
import { swedishAllUnits } from './swedishCurriculum';
import { swedishFlashcards } from './swedishFlashcards';
import { swedishCultureVault } from './swedishCultureVault';

export const LANGUAGES = {
  spanish: {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    motto: "The vibrant language of Cervantes, spoken across 20+ countries and 500M+ people worldwide.",
    flag: "🇪🇸",
    badge: "/images/spanish_badge.jpg",
    accentColor: "#ef4444", // vibrant crimson
    secondaryColor: "#f59e0b", // warm gold
    greeting: "¡Hola! ¿Cómo estás?",
    description: "Master Spanish through the official MCER / Instituto Cervantes curriculum spanning 20 leveled units across A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate), and C1/C2 (Mastery).",
    cultureVault: spanishCultureVault,
    flashcards: spanishFlashcards,
    units: spanishAllUnits
  },

  french: {
    id: "french",
    name: "French",
    nativeName: "Français",
    motto: "The language of diplomacy, romance, gastronomy, and international arts.",
    flag: "🇫🇷",
    badge: "/images/french_badge.jpg",
    accentColor: "#2563eb", // royal Paris blue
    secondaryColor: "#f43f5e", // chic rose
    greeting: "Bonjour ! Comment allez-vous ?",
    description: "Immerse yourself in French culture with Parisian elegance, café dialogue, and fluent pronunciation secrets.",
    cultureVault: frenchCultureVault,
    flashcards: frenchFlashcards,
    units: frenchAllUnits
  },

  german: {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    motto: "The powerhouse language of engineering, philosophy, literature, and European commerce.",
    flag: "🇩🇪",
    badge: "/images/german_badge.jpg",
    accentColor: "#f59e0b", // warm amber gold
    secondaryColor: "#1e293b", // slate black
    greeting: "Guten Tag! Wie geht es Ihnen?",
    description: "Master German through the official BAMF Rahmencurriculum (Integrationskurs DaZ) and DeuFöV Berufssprachkurse spanning 10 leveled units across A1, A2, B1, B2, and C1/C2 (TestDaF/DSH).",
    cultureVault: germanCultureVault,
    flashcards: germanFlashcards,
    units: germanAllUnits
  },

  japanese: {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語 (Nihongo)",
    motto: "The graceful language of harmony, anime, ancient Shinto shrines, and cutting-edge innovation.",
    flag: "🇯🇵",
    badge: "/images/japanese_badge.jpg",
    accentColor: "#ec4899", // sakura pink
    secondaryColor: "#dc2626", // torii crimson
    greeting: "こんにちは！お元気ですか？",
    description: "Learn Japanese greetings, polite honorifics, essential travel phrases, and cultural nuances of respect (Reigi).",
    cultureVault: {
      proverbOfDay: {
        proverb: "七転び八起き (Nana korobi ya oki)",
        translation: "Fall seven times, stand up eight.",
        context: "The revered Japanese principle of resilience, perseverance, and indomitable spirit through adversity."
      },
      slangs: [
        { term: "すごい (Sugoi!)", meaning: "Amazing! / Incredible! / Wow!", example: "日本語がとても上手ですね、すごい！" },
        { term: "いただきます (Itadakimasu)", meaning: "Grateful phrase spoken before eating (Humbly receiving this food)", example: "テーブルに座って、『いただきます！』と言いました。" },
        { term: "お疲れ様です (Otsukaresama desu)", meaning: "Thank you for your hard work / great effort today", example: "今日の会議、お疲れ様でした！" },
        { term: "やばい (Yabai)", meaning: "Crazy / Insane / Incredibly cool (or terribly dangerous, depending on context)", example: "このラーメン、美味しすぎてやばい！" }
      ],
      cultureTips: [
        { title: "The Art of the Bow (お辞儀 - Ojigi)", description: "In Japan, bowing replaces shaking hands. A 15-degree bow serves for casual greetings, while a 30-degree bow conveys polite deference to elders or customers." },
        { title: "Honorific Suffixes (-san, -sensei)", description: "Never refer to someone by their bare last name without adding '-san' (e.g. Tanaka-san). Never use honorifics on yourself!" }
      ]
    },
    flashcards: [
      { id: "ja-fc-1", front: "こんにちは (Konnichiwa)", phonetic: "kohn-nee-chee-wah", back: "Hello / Good afternoon", category: "Greetings", example: "皆さん、こんにちは！" },
      { id: "ja-fc-2", front: "ありがとう (Arigatou)", phonetic: "ah-ree-gah-toh", back: "Thank you", category: "Courtesy", example: "手伝ってくれてありがとう。" },
      { id: "ja-fc-3", front: "すみません (Sumimasen)", phonetic: "soo-mee-mah-sen", back: "Excuse me / I'm sorry", category: "Courtesy", example: "すみません、駅はどこですか？" },
      { id: "ja-fc-4", front: "はい (Hai)", phonetic: "high", back: "Yes", category: "Basics", example: "はい、分かりました。" },
      { id: "ja-fc-5", front: "いいえ (Iie)", phonetic: "ee-eh", back: "No", category: "Basics", example: "いいえ、大丈夫です。" },
      { id: "ja-fc-6", front: "さようなら (Sayounara)", phonetic: "sah-yoh-nah-rah", back: "Goodbye", category: "Farewell", example: "また明日、さようなら。" }
    ],
    units: [
      {
        id: "ja-unit-1",
        title: "Unit 1: First Steps in Tokyo (最初の挨拶)",
        subtitle: "Essential Japanese greetings, polite responses, and meeting new people.",
        icon: "Sun",
        color: "#ec4899",
        lessons: [
          {
            id: "ja-u1-l1",
            title: "Everyday Japanese Salutations",
            description: "Learn Konnichiwa, Arigatou, and Sumimasen with proper bowing etiquette.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the universal Japanese greeting for 'Hello / Good afternoon'?",
                options: ["こんにちは (Konnichiwa)", "さようなら (Sayounara)", "ありがとう (Arigatou)", "いただきます (Itadakimasu)"],
                correctAnswer: "こんにちは (Konnichiwa)",
                explanation: "'Konnichiwa' is the standard polite daytime greeting."
              },
              {
                id: "q2",
                type: "audio_listen",
                phrase: "ありがとう",
                prompt: "Listen to the word and select what it expresses:",
                options: ["Thank you", "Goodbye", "Where is the train?", "Please wait"],
                correctAnswer: "Thank you",
                explanation: "'Arigatou' is the expression of heartfelt thanks in Japanese."
              },
              {
                id: "q3",
                type: "matching",
                prompt: "Match the Japanese expressions:",
                pairs: [
                  { native: "Konnichiwa", english: "Hello" },
                  { native: "Sumimasen", english: "Excuse me / Sorry" },
                  { native: "Arigatou", english: "Thank you" },
                  { native: "Sayounara", english: "Goodbye" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  mandarin: {
    id: "mandarin",
    name: "Mandarin Chinese",
    nativeName: "中文 (Zhōngwén)",
    motto: "The profound language of ancient dynasties, modern global trade, and over 1.1 billion speakers.",
    flag: "🇨🇳",
    badge: "/images/mandarin_badge.jpg",
    accentColor: "#dc2626", // imperial red
    secondaryColor: "#eab308", // dragon gold
    greeting: "你好！你吃了吗？(Nǐ hǎo!)",
    description: "Learn Mandarin with tonal pronunciation mastery (Pinyin), tea ceremony etiquette, and friendly daily greetings.",
    cultureVault: {
      proverbOfDay: {
        proverb: "千里之行，始于足下 (Qiān lǐ zhī xíng, shǐ yú zú xià)",
        translation: "A journey of a thousand miles begins with a single step.",
        context: "Laozi's timeless Daoist wisdom reminding learners that every great accomplishment starts with humble daily practice."
      },
      slangs: [
        { term: "加筋 (Jiāyóu!)", meaning: "Keep going! / Add oil! / You can do it!", example: "考试要加油哦！(Keep pushing for the exam!)" },
        { term: "给力 (Gěilì)", meaning: "Awesome / Impactful / Cool (literally: giving power)", example: "这个功能太给力了！" },
        { term: "牛 (Niú)", meaning: "Brilliant / Badass / Super capable (literally: ox)", example: "你真牛！(You are truly impressive!)" }
      ],
      cultureTips: [
        { title: "The Warmest Greeting: 'Have you eaten?' (你吃了吗？)", description: "In Chinese culture, asking 'Nǐ chī le ma?' (Have you eaten?) is an affectionate way of saying 'How are you?' showing that you care about the person's wellbeing." },
        { title: "The Four Tones of Pinyin", description: "Mandarin is tonal: 1st tone (flat high - mā), 2nd tone (rising - má), 3rd tone (dip & rise - mǎ), 4th tone (sharp drop - mà). Tones define the word completely: 'mā' (mother) vs 'mǎ' (horse)!" }
      ]
    },
    flashcards: [
      { id: "zh-fc-1", front: "你好 (Nǐ hǎo)", phonetic: "nee-HOW", back: "Hello!", category: "Greetings", example: "你好！很高兴认识你。" },
      { id: "zh-fc-2", front: "谢谢 (Xièxie)", phonetic: "shyeh-shyeh", back: "Thank you", category: "Courtesy", example: "非常感谢你的帮助。" },
      { id: "zh-fc-3", front: "不客气 (Bú kèqi)", phonetic: "boo kuh-chee", back: "You're welcome", category: "Courtesy", example: "不客气，随时为你服务。" },
      { id: "zh-fc-4", front: "对不起 (Duìbuqǐ)", phonetic: "dway-boo-chee", back: "I am sorry", category: "Courtesy", example: "对不起，我迟到了。" },
      { id: "zh-fc-5", front: "再见 (Zàijiàn)", phonetic: "zeye-jyen", back: "Goodbye / See you again", category: "Farewell", example: "明天见，再见！" }
    ],
    units: [
      {
        id: "zh-unit-1",
        title: "Unit 1: Essential Mandarin Greetings (问候)",
        subtitle: "Learn Nǐ hǎo, polite acknowledgments, and basic conversational tone.",
        icon: "Sun",
        color: "#dc2626",
        lessons: [
          {
            id: "zh-u1-l1",
            title: "First Words in Mandarin",
            description: "Master 'Nǐ hǎo', 'Xièxie', and respectful tones.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "How do you say 'Hello' in Mandarin Chinese?",
                options: ["你好 (Nǐ hǎo)", "谢谢 (Xièxie)", "再见 (Zàijiàn)", "请 (Qǐng)"],
                correctAnswer: "你好 (Nǐ hǎo)",
                explanation: "'你好' (Nǐ hǎo) is the universal greeting meaning 'You are good / Hello'."
              },
              {
                id: "q2",
                type: "matching",
                prompt: "Match Chinese words with their meanings:",
                pairs: [
                  { native: "Nǐ hǎo", english: "Hello" },
                  { native: "Xièxie", english: "Thank you" },
                  { native: "Zàijiàn", english: "Goodbye" },
                  { native: "Duìbuqǐ", english: "Sorry" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  pidgin: {
    id: "pidgin",
    name: "Nigerian Pidgin",
    nativeName: "Naija Pidgin",
    motto: "The most expressive, energetic lingua franca across West Africa!",
    flag: "🇳🇬",
    badge: "/images/pidgin_badge.jpg",
    accentColor: "#10b981", // vibrant emerald
    secondaryColor: "#f59e0b", // warm yellow bus gold
    greeting: "How you dey!",
    description: "Learn the vibrant language spoken by over 75 million people across Nigeria, West Africa, and global Afrobeat culture — structured with the NERDC 4-Tier Oracy, Grammar, and Literature framework.",
    cultureVault: pidginCultureVault,
    flashcards: pidginFlashcards,
    units: pidginAllUnits
  },

  yoruba: {
    id: "yoruba",
    name: "Yoruba",
    nativeName: "Èdè Yorùbá",
    motto: "A tonal, poetic language of royal traditions, respect, and ancient wisdom.",
    flag: "👑",
    badge: "/images/yoruba_badge.jpg",
    accentColor: "#3b82f6", // royal blue
    secondaryColor: "#eab308", // regal gold
    greeting: "Báwo ni o!",
    description: "Discover one of Africa's most influential languages, renowned for its melodic tones, respect systems (ọ̀wọ̀), and rich philosophical proverbs.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Ilé l’à ń wò k’á tó sọmọ l’órúkọ.",
        translation: "One must consider family lineage, circumstances and character before giving a child a name.",
        context: "Yoruba names always have deep spiritual and contextual meanings that tell a story of the family's journey."
      },
      slangs: [
        { term: "Ṣe dáadáa ni?", meaning: "Is everything good with you? (Warm, standard check-in)", example: "Ẹ kú àárọ̀, ṣe dáadáa ni gbogbo nǹkan?" },
        { term: "O jẹ́ gbà!", meaning: "You nailed it! / You are unbeatable! (Expression of praise)", example: "Bí o ṣe kọrin yẹn, o jẹ́ gbà púpọ̀!" },
        { term: "Kò sí wàhálà", meaning: "There is no trouble / No problem whatsoever.", example: "Kò sí wàhálà rárá, màá wá lọ́la." },
        { term: "Mo dúpẹ́", meaning: "I thank you / Gratitude.", example: "Mo dúpẹ́ púpọ̀ fún oúnjẹ dídùn yìí." }
      ],
      cultureTips: [
        { title: "The Honorific 'Ẹ' vs Casual 'O'", description: "In Yoruba culture, respect (Ọ̀wọ̀) is supreme. When speaking to an elder, prefix with 'Ẹ' (plural/honorific), e.g. 'Ẹ kú àárọ̀' rather than 'O kú àárọ̀'." },
        { title: "The Tones: Do - Re - Mi", description: "Yoruba is a tonal language with three musical pitches: Low (À), Mid (A), and High (Á)." }
      ]
    },
    flashcards: [
      { id: "y-fc-1", front: "Báwo ni?", phonetic: "BAA-woh-nee", back: "How are you? / How are things?", category: "Greetings", example: "Ọ̀rẹ́ mi, báwo ni?" },
      { id: "y-fc-2", front: "Ẹ kú àárọ̀", phonetic: "Eh-koo-ah-rahn", back: "Good morning (Respectful / Plural)", category: "Greetings", example: "Ẹ kú àárọ̀ mà/sà." },
      { id: "y-fc-3", front: "Ẹ ṣeé púpọ̀", phonetic: "Eh-shay-POO-paw", back: "Thank you very much (Respectful)", category: "Courtesy", example: "Ẹ ṣeé púpọ̀ fún ìrànwọ́ yín." },
      { id: "y-fc-4", front: "Orúkọ mi ni...", phonetic: "Oh-roo-kaw-mee-nee", back: "My name is...", category: "Identity", example: "Orúkọ mi ni Fémi." },
      { id: "y-fc-5", front: "O dábọ̀", phonetic: "Oh-DAH-baw", back: "Goodbye / Until we meet again", category: "Farewell", example: "O dábọ̀, títí di ìgbà mìíràn." }
    ],
    units: yorubaAllUnits
  },

  portuguese: {
    id: "portuguese",
    name: "Portuguese",
    nativeName: "Português",
    motto: "The melodic language of maritime explorers, fado ballads, and 260M+ speakers worldwide.",
    flag: "🇵🇹",
    badge: "/images/portuguese_badge.jpg",
    accentColor: "#059669",
    secondaryColor: "#dc2626",
    greeting: "Olá! Como está?",
    description: "Master Portuguese through the official Adult Vocational Syllabus (PLA / IEFP Standard) and Primary/Secondary School Syllabus (DGE Standard) across 6 units (30 lessons), 240 flashcards, and CAPLE CIPLE/DIPLE CBT exam simulations.",
    cultureVault: portugueseCultureVault,
    flashcards: portugueseFlashcards,
    units: portugueseAllUnits
  },

  swedish: {
    id: "swedish",
    name: "Swedish",
    nativeName: "Svenska",
    motto: "The harmonious Nordic tongue of balance (Lagom), archipelago islands, and innovation.",
    flag: "🇸🇪",
    badge: "/images/swedish_badge.jpg",
    accentColor: "#0284c7",
    secondaryColor: "#eab308",
    greeting: "Hej! Hur mår du?",
    description: "Master Swedish through official Skolverket and UHR curricula: Track A (SFI Kurs B–D, SVA & Tisus Standard) and Track B (Grundskolan Lgr22 & Gymnasiet SVA 3) across 6 units (24 lessons), 240 flashcards, culture vault, and CBT exam simulations.",
    cultureVault: swedishCultureVault,
    flashcards: swedishFlashcards,
    units: swedishAllUnits
  },

  finnish: {
    id: "finnish",
    name: "Finnish",
    nativeName: "Suomi",
    motto: "The mystical Uralic language of resilient grit (Sisu), midnight suns, and thousand lakes.",
    flag: "🇫🇮",
    badge: "/images/finnish_badge.jpg",
    accentColor: "#0ea5e9",
    secondaryColor: "#64748b",
    greeting: "Hei! Mitä kuuluu?",
    description: "Discover Finnish with Northern Lights wonders, sauna etiquette, and unique phonetic harmony.",
    cultureVault: finnishCultureVault,
    flashcards: finnishFlashcards,
    units: finnishAllUnits
  },

  igbo: {
    id: "igbo",
    name: "Igbo",
    nativeName: "Asụsụ Igbo",
    motto: "The entrepreneurial, rhythmic tonal language of southeastern Nigeria and rich masquerade heritage.",
    flag: "🦅",
    badge: "/images/igbo_badge.jpg",
    accentColor: "#16a34a",
    secondaryColor: "#b91c1c",
    greeting: "Kedụ kwanụ! Ị dị mma?",
    description: "Master Igbo greetings, respect for elders, vibrant commercial trade phrases, and deep philosophical proverbs.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Onye na-amaghị ebe mmiri si mawa ya agaghị ama ebe ọ ga-akwụsị ịma ya.",
        translation: "One who does not know where rain began beating him will not know where it stopped beating him.",
        context: "Chinua Achebe's iconic Igbo proverb reminding one to understand their history, identity, and beginnings."
      },
      slangs: [
        { term: "Kedụ?", meaning: "How are you? / What's happening? (The universal greeting)", example: "Nwanna, kedụ kwanụ?" },
        { term: "Daalụ", meaning: "Thank you / Well done", example: "Daalụ nke ukwuu maka enyemaka gị." },
        { term: "Ọfụma", meaning: "Fine / Good / Well", example: "Adị m ọfụma, daalụ." },
        { term: "Ndewoo", meaning: "Respectful polite greeting to someone arriving or working", example: "Ndewoo nne m, kedu ka ị mere?" },
        { term: "Nwanna", meaning: "Brother / Kinsman / Friend", example: "Nwanna, bia ka anyị rie nri." }
      ],
      cultureTips: [
        { title: "The Sacred Kola Nut (Ọjị)", description: "In Igbo culture: 'Onye wetara ọjị, wetara ndụ' (He who brings kola brings life). Presenting kola nut to a guest is the ultimate sign of hospitality, blessing, and good faith." },
        { title: "The Tones in Igbo", description: "Igbo is a tonal language. High, low, and downstepped tones create completely different meanings for words with identical spelling!" }
      ]
    },
    flashcards: [
      { id: "ig-fc-1", front: "Kedụ?", phonetic: "keh-DOO", back: "How are you? / How is it?", category: "Greetings", example: "Kedụ kwanụ, nwanne m?" },
      { id: "ig-fc-2", front: "Ndewoo", phonetic: "n-deh-WOH", back: "Greetings / Hello (Polite)", category: "Greetings", example: "Ndewoo, unu anwụla." },
      { id: "ig-fc-3", front: "Daalụ rinne", phonetic: "DAH-loo REEN-neh", back: "Thank you very much", category: "Courtesy", example: "Daalụ rinne maka nri a." },
      { id: "ig-fc-4", front: "Aha m bụ...", phonetic: "AH-hah m BOO", back: "My name is...", category: "Identity", example: "Aha m bụ Chidi." },
      { id: "ig-fc-5", front: "Ka ọ dị", phonetic: "KAH oh DEE", back: "Goodbye / Until later", category: "Farewell", example: "Ka ọ dị, ka chi foo." }
    ],
    units: igboAllUnits
  },

  hausa: {
    id: "hausa",
    name: "Hausa",
    nativeName: "Harshen Hausa",
    motto: "The major Afroasiatic trade language spoken by 80M+ people across West & Central Africa.",
    flag: "🌍",
    badge: "/images/hausa_badge.jpg",
    accentColor: "#b45309",
    secondaryColor: "#1d4ed8",
    greeting: "Sannu! Yaya kake?",
    description: "Discover Hausa with trans-Saharan trade warmth, royal Emirates greetings, and market eloquence.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Komi ya yi nisa, zai dawo kusa.",
        translation: "However far a journey or circumstance goes, it will eventually return near.",
        context: "A proverb counseling patience, endurance, and knowing that events run full circles."
      },
      slangs: [
        { term: "Sannu", meaning: "Hello / Well done / Greetings", example: "Sannu da aiki! (Well done with your work!)" },
        { term: "Nagode", meaning: "Thank you / Gratitude", example: "Nagode sosai da taimakonka." },
        { term: "Lafiya lau", meaning: "Very well / In peace / Fine", example: "Yaya gida? — Lafiya lau!" },
        { term: "Yauwa!", meaning: "Great! / Exactly! / That's right!", example: "Yauwa, kin yi daidai!" },
        { term: "Sai an jima", meaning: "See you later / Goodbye", example: "Sai an jima, mu kwana lafiya." }
      ],
      cultureTips: [
        { title: "The Respectful 'Gaisuwa' Salutation", description: "In Hausa culture, greetings are comprehensive and cordial, inquiring about health ('lafiya'), family, and work before moving to any business." },
        { title: "Trans-Saharan Trade Heritage", description: "Hausa has functioned as the primary mercantile language across West and Central Africa from Niger to Cameroon for over seven centuries." }
      ]
    },
    flashcards: [
      { id: "ha-fc-1", front: "Sannu", phonetic: "SAHN-noo", back: "Hello / Greetings / Well done", category: "Greetings", example: "Sannu abokina!" },
      { id: "ha-fc-2", front: "Yaya kake?", phonetic: "YAH-yah KAH-keh", back: "How are you? (To a male)", category: "Greetings", example: "Sannu Aminu, yaya kake?" },
      { id: "ha-fc-3", front: "Nagode", phonetic: "nah-GOH-day", back: "Thank you", category: "Courtesy", example: "Nagode kwarai da gaske." },
      { id: "ha-fc-4", front: "Lafiya lau", phonetic: "lah-FEE-yah low", back: "Fine / Very well / Peace", category: "Basics", example: "Ina lafiya lau, alhamdulillah." },
      { id: "ha-fc-5", front: "Sai an jima", phonetic: "sigh ahn JEE-mah", back: "See you later / Goodbye", category: "Farewell", example: "To, sai an jima!" }
    ],
    units: hausaAllUnits
  }
};

export const LEADERBOARD_DATA = [
  { rank: 1, name: "Sofia Rodriguez", avatar: "💃", xp: 1940, streak: 26, language: "Spanish", tier: "Diamond" },
  { rank: 2, name: "Lucas Silva", avatar: "⚽", xp: 1780, streak: 22, language: "Portuguese", tier: "Diamond" },
  { rank: 3, name: "Chinedu Okafor", avatar: "🦅", xp: 1650, streak: 19, language: "Naija Pidgin", tier: "Diamond" },
  { rank: 4, name: "Astrid Lindgren", avatar: "🇸🇪", xp: 1510, streak: 17, language: "Swedish", tier: "Gold" },
  { rank: 5, name: "Kenji Sato", avatar: "🌸", xp: 1450, streak: 16, language: "Japanese", tier: "Gold" },
  { rank: 6, name: "Folashade Adeleke", avatar: "👑", xp: 1390, streak: 14, language: "Yoruba", tier: "Gold" },
  { rank: 7, name: "Matti Virtanen", avatar: "❄️", xp: 1310, streak: 13, language: "Finnish", tier: "Gold" },
  { rank: 8, name: "Ibrahim Danladi", avatar: "🌍", xp: 1240, streak: 12, language: "Hausa", tier: "Gold" },
  { rank: 9, name: "Ngozi Achebe", avatar: "🦁", xp: 1190, streak: 11, language: "Igbo", tier: "Silver" },
  { rank: 10, name: "Claire Dupont", avatar: "🥐", xp: 1120, streak: 10, language: "French", tier: "Silver" },
  { rank: 11, name: "Maximilian Weber", avatar: "🥨", xp: 1040, streak: 9, language: "German", tier: "Silver" },
  { rank: 12, name: "Li Wei", avatar: "🐉", xp: 950, streak: 8, language: "Mandarin Chinese", tier: "Silver" }
];

