import { finnishUnit1Lessons } from './finnishLessons';

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
    description: "Discover Spanish with cheerful everyday greetings, tapas dining culture, flamenco rhythm, and practical travel phrases.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Dime con quién andas, y te diré quién eres.",
        translation: "Tell me who you walk with, and I will tell you who you are.",
        context: "A classic Hispanic proverb teaching that the company we keep shapes our character and reputation."
      },
      slangs: [
        { term: "¡Qué chulo!", meaning: "How cool! / So lovely! (Widely used in Spain)", example: "Esa chaqueta está genial, ¡qué chulo!" },
        { term: "Buena onda", meaning: "Good vibes / friendly person (Popular across Latin America)", example: "El nuevo profesor tiene muy buena onda." },
        { term: "Vale", meaning: "Okay / Alright / Agreed (Spain's most frequent word)", example: "¿Nos vemos a las ocho? — ¡Vale!" },
        { term: "Pura vida", meaning: "Pure life / Everything is great (Costa Rica's iconic philosophy)", example: "¿Cómo te va? — ¡Pura vida!" },
        { term: "Estar en las nubes", meaning: "Daydreaming / Having one's head in the clouds", example: "Presta atención en clase, estás en las nubes." }
      ],
      cultureTips: [
        { title: "The Art of 'La Sobremesa'", description: "In Spain and Latin America, meals don't end when the food is finished. 'La sobremesa' is the relaxed, cherished conversation with friends and family around the table for hours." },
        { title: "Formal 'Usted' vs Casual 'Tú'", description: "Always use 'Usted' when speaking with elderly people, professors, or formal professionals to express respect, and 'Tú' with friends and peers." },
        { title: "The Double Exclamation & Question Marks", description: "Spanish uniquely opens sentences with inverted punctuation: '¿' and '¡' so the reader knows the tone before speaking the sentence." }
      ]
    },
    flashcards: [
      { id: "es-fc-1", front: "¡Hola!", phonetic: "OH-lah", back: "Hello!", category: "Greetings", example: "¡Hola! Buenos días a todos." },
      { id: "es-fc-2", front: "¿Cómo estás?", phonetic: "KOH-moh es-TAHS", back: "How are you?", category: "Greetings", example: "¿Cómo estás hoy, amigo?" },
      { id: "es-fc-3", front: "Mucho gusto", phonetic: "MOO-choh GOOS-toh", back: "Nice to meet you", category: "Courtesy", example: "Me llamo Sofia, mucho gusto." },
      { id: "es-fc-4", front: "Por favor", phonetic: "por fah-VOR", back: "Please", category: "Courtesy", example: "Un café con leche, por favor." },
      { id: "es-fc-5", front: "Gracias", phonetic: "GRAH-syahs", back: "Thank you", category: "Courtesy", example: "Muchas gracias por tu ayuda." },
      { id: "es-fc-6", front: "¿Cuánto cuesta?", phonetic: "KWAHN-toh KWEHS-tah", back: "How much does it cost?", category: "Market", example: "¿Cuánto cuesta esta camiseta?" },
      { id: "es-fc-7", front: "La cuenta", phonetic: "lah KWEHN-tah", back: "The bill / check", category: "Dining", example: "Camarero, ¿nos trae la cuenta, por favor?" }
    ],
    units: [
      {
        id: "es-unit-1",
        title: "Unit 1: Essential Salutations & First Steps",
        subtitle: "Greet locals warmly, introduce yourself, and master polite social etiquette.",
        icon: "Sun",
        color: "#ef4444",
        lessons: [
          {
            id: "es-u1-l1",
            title: "Friendly Salutations",
            description: "Learn how to say hello, good morning, and ask how someone is doing.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "How do you say 'Good morning' in Spanish?",
                options: ["Buenos días", "Buenas noches", "Hasta luego", "Mucho gusto"],
                correctAnswer: "Buenos días",
                explanation: "'Buenos días' is the standard polite greeting used until the afternoon."
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Assemble: 'How are you?'",
                tokens: ["¿Cómo", "estás", "tú?", "muy", "bien"],
                correctTokens: ["¿Cómo", "estás", "tú?"],
                explanation: "'¿Cómo estás tú?' (or simply '¿Cómo estás?') asks 'How are you?'"
              },
              {
                id: "q3",
                type: "audio_listen",
                phrase: "Mucho gusto",
                prompt: "Listen to the phrase and select what it means:",
                options: ["Nice to meet you", "Where is the bathroom?", "Good evening", "I want dessert"],
                correctAnswer: "Nice to meet you",
                explanation: "'Mucho gusto' literally means 'Much pleasure' — expressing delight at meeting someone."
              },
              {
                id: "q4",
                type: "matching",
                prompt: "Match the Spanish terms with their English meanings:",
                pairs: [
                  { native: "Por favor", english: "Please" },
                  { native: "Gracias", english: "Thank you" },
                  { native: "De nada", english: "You're welcome" },
                  { native: "Adiós", english: "Goodbye" }
                ]
              },
              {
                id: "q5",
                type: "fill_blank",
                sentence: "Hola, me ___ Carlos.",
                missingWord: "llamo",
                options: ["llamo", "tengo", "soy", "estoy"],
                correctAnswer: "llamo",
                explanation: "'Me llamo' translates to 'My name is' (literally: 'I call myself')."
              }
            ]
          },
          {
            id: "es-u1-l2",
            title: "Tapas & Cafe Dining",
            description: "Order coffee, delicious tapas, and ask for the check.",
            xp: 25,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "How do you politely ask for the check at a restaurant?",
                options: ["La cuenta, por favor", "El menú, por favor", "Quiero agua", "Dónde está el tren"],
                correctAnswer: "La cuenta, por favor",
                explanation: "'La cuenta, por favor' means 'The bill, please.'"
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Order: 'Un café solo, por favor'",
                tokens: ["Un", "café", "solo,", "por", "favor", "rico"],
                correctTokens: ["Un", "café", "solo,", "por", "favor"],
                explanation: "'Un café solo' is an espresso in Spain."
              },
              {
                id: "q3",
                type: "matching",
                prompt: "Match these food items:",
                pairs: [
                  { native: "El agua", english: "Water" },
                  { native: "El pan", english: "Bread" },
                  { native: "El queso", english: "Cheese" },
                  { native: "La fruta", english: "Fruit" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    cultureVault: {
      proverbOfDay: {
        proverb: "Petit à petit, l'oiseau fait son nid.",
        translation: "Little by little, the bird builds its nest.",
        context: "A lovely French saying about patience, consistency, and steady progress in learning."
      },
      slangs: [
        { term: "C'est la vie", meaning: "That's life / Such is life", example: "J'ai raté le bus, mais c'est la vie !" },
        { term: "Coup de foudre", meaning: "Love at first sight (literally: thunderbolt)", example: "Dès que je l'ai vu, ce fut le coup de foudre." },
        { term: "Bof", meaning: "Meh / I don't care / So-so", example: "Tu aimes ce film ? — Bof, pas vraiment." },
        { term: "Nickel", meaning: "Spotless / Perfect / Awesome", example: "Le rapport est terminé ? — Oui, tout est nickel !" },
        { term: "Avoir le cafard", meaning: "To feel down / blue (literally: to have the cockroach)", example: "Aujourd'hui il pleut, j'ai un peu le cafard." }
      ],
      cultureTips: [
        { title: "The Sacred Greeting: Always Say 'Bonjour'", description: "In France, entering any bakery, shop, or elevator without saying 'Bonjour' is considered impolite. Always open every interaction with a warm 'Bonjour'!" },
        { title: "The Difference: 'Tu' vs 'Vous'", description: "Use 'Vous' with anyone you don't know well, elders, and service staff. Reserve 'Tu' for friends, classmates, children, and close family." },
        { title: "The Silent Letters", description: "French is famous for final consonants often being silent (e.g., 'Paris' is pronounced 'Pah-ree')." }
      ]
    },
    flashcards: [
      { id: "fr-fc-1", front: "Bonjour", phonetic: "bohn-ZHOOR", back: "Hello / Good day", category: "Greetings", example: "Bonjour monsieur, comment allez-vous ?" },
      { id: "fr-fc-2", front: "S'il vous plaît", phonetic: "seel voo PLEH", back: "Please (Formal / Polite)", category: "Courtesy", example: "Une baguette, s'il vous plaît." },
      { id: "fr-fc-3", front: "Merci beaucoup", phonetic: "mehr-SEE boh-KOO", back: "Thank you very much", category: "Courtesy", example: "Merci beaucoup pour votre aide !" },
      { id: "fr-fc-4", front: "Enchanté(e)", phonetic: "ahn-shahn-TAY", back: "Delighted to meet you", category: "Courtesy", example: "Je m'appelle Claire. Enchantée !" },
      { id: "fr-fc-5", front: "L'addition", phonetic: "lah-dee-SYOHN", back: "The bill / check", category: "Dining", example: "L'addition, s'il vous plaît." },
      { id: "fr-fc-6", front: "Où est... ?", phonetic: "oo EH", back: "Where is... ?", category: "Travel", example: "Où est la station de métro ?" }
    ],
    units: [
      {
        id: "fr-unit-1",
        title: "Unit 1: Parisian Greetings & Etiquette",
        subtitle: "Polite salutations, café etiquette, and essential travel courtesies.",
        icon: "BookOpen",
        color: "#2563eb",
        lessons: [
          {
            id: "fr-u1-l1",
            title: "Polite French Salutations",
            description: "Master 'Bonjour', 'Merci', and asking how someone is doing.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the polite phrase for 'Thank you very much' in French?",
                options: ["Merci beaucoup", "S'il vous plaît", "Bonsoir", "Au revoir"],
                correctAnswer: "Merci beaucoup",
                explanation: "'Merci beaucoup' is the heartfelt expression for 'Thank you very much'."
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Build: 'Je m'appelle Sophie' (My name is Sophie)",
                tokens: ["Je", "m'appelle", "Sophie", "suis", "bien"],
                correctTokens: ["Je", "m'appelle", "Sophie"],
                explanation: "'Je m'appelle...' is how you introduce your name in French."
              },
              {
                id: "q3",
                type: "audio_listen",
                phrase: "Enchanté",
                prompt: "What does this phrase mean when someone introduces themselves?",
                options: ["Delighted to meet you", "Where are you going?", "Excuse me", "Good evening"],
                correctAnswer: "Delighted to meet you",
                explanation: "'Enchanté' signifies pleasure at making someone's acquaintance."
              },
              {
                id: "q4",
                type: "matching",
                prompt: "Match French courtesies with English:",
                pairs: [
                  { native: "Bonjour", english: "Hello / Good morning" },
                  { native: "Au revoir", english: "Goodbye" },
                  { native: "S'il vous plaît", english: "Please" },
                  { native: "De rien", english: "You're welcome" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    description: "Explore German with precision grammar, friendly Bavarian greetings, Berlin cafe culture, and travel mastery.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Übung macht den Meister.",
        translation: "Practice makes the master (Practice makes perfect).",
        context: "The quintessential German reminder that discipline, deliberate practice, and repetition yield true expertise."
      },
      slangs: [
        { term: "Alles klar!", meaning: "All clear / Everything is good / Got it!", example: "¿Können wir losgehen? — Alles klar!" },
        { term: "Feierabend", meaning: "The glorious end of the workday / time to relax", example: "Endlich 17 Uhr, Zeit für den Feierabend!" },
        { term: "Na?", meaning: "The most versatile German greeting: 'How are you?' / 'Well?'", example: "Na, wie läuft die Arbeit heute?" },
        { term: "Kummerspeck", meaning: "Weight gained from emotional overeating (literally: grief bacon)", example: "Nach den Prüfungen hatte ich etwas Kummerspeck." }
      ],
      cultureTips: [
        { title: "Punctuality (Pünktlichkeit)", description: "In Germany, arriving 5 minutes early is considered on time. Arriving late without notice is seen as unprofessional." },
        { title: "Capitalizing All Nouns", description: "In written German, EVERY noun begins with a capital letter (e.g., der Hund, das Haus, die Sprache)." }
      ]
    },
    flashcards: [
      { id: "de-fc-1", front: "Guten Morgen", phonetic: "GOO-ten MOR-gen", back: "Good morning", category: "Greetings", example: "Guten Morgen! Haben Sie gut geschlafen?" },
      { id: "de-fc-2", front: "Danke schön", phonetic: "DAHN-kuh shurn", back: "Thank you very much", category: "Courtesy", example: "Vielen Dank für Ihre Unterstützung!" },
      { id: "de-fc-3", front: "Bitte sehr", phonetic: "BIT-tuh zayr", back: "You're very welcome / Here you go", category: "Courtesy", example: "Bitte sehr, nehmen Sie Platz." },
      { id: "de-fc-4", front: "Wie geht's?", phonetic: "vee gayts", back: "How's it going? (Casual)", category: "Greetings", example: "Hallo Peter, wie geht's dir?" },
      { id: "de-fc-5", front: "Tschüss", phonetic: "chooss", back: "Bye / See you (Casual)", category: "Farewell", example: "Bis morgen, tschüss!" }
    ],
    units: [
      {
        id: "de-unit-1",
        title: "Unit 1: Everyday German Greetings",
        subtitle: "Learn essential phrases for meeting colleagues, neighbors, and friends in Germany.",
        icon: "Sun",
        color: "#f59e0b",
        lessons: [
          {
            id: "de-u1-l1",
            title: "First Encounters in German",
            description: "Learn how to greet someone and introduce your name politely.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "How do you say 'Good morning' in German?",
                options: ["Guten Morgen", "Gute Nacht", "Auf Wiedersehen", "Bitte"],
                correctAnswer: "Guten Morgen",
                explanation: "'Guten Morgen' is spoken in the early hours until noon."
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Assemble: 'Ich heiße Lukas' (My name is Lukas)",
                tokens: ["Ich", "heiße", "Lukas", "bin", "sehr"],
                correctTokens: ["Ich", "heiße", "Lukas"],
                explanation: "'Ich heiße...' means 'My name is...' (literally 'I am called...')."
              },
              {
                id: "q3",
                type: "matching",
                pairs: [
                  { native: "Danke", english: "Thanks" },
                  { native: "Bitte", english: "Please / You're welcome" },
                  { native: "Hallo", english: "Hello" },
                  { native: "Tschüss", english: "Bye" }
                ],
                prompt: "Match the German words with English:"
              }
            ]
          }
        ]
      }
    ]
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
    description: "Learn the vibrant language spoken by over 75 million people across Nigeria, West Africa, and global Afrobeat culture.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Monkey dey work, baboon dey chop.",
        translation: "One person toils while someone else reaps the benefits unjustly.",
        context: "Used in everyday conversations when highlighting unfair labour distribution or unfair credit."
      },
      slangs: [
        { term: "Dey play!", meaning: "Keep wasting time or being careless (a viral playful warning).", example: "You never read for exam and you dey scroll TikTok? Dey play!" },
        { term: "I dey kampe", meaning: "I am doing very well, strong and unaffected.", example: "No worry about me, my brother, I dey kampe." },
        { term: "No wahala", meaning: "No problem, everything is cool.", example: "You wan borrow my pen? No wahala at all." },
        { term: "Chop life", meaning: "Enjoy life to the fullest.", example: "Weekend don land, make we chop life small." },
        { term: "Wetin dey?", meaning: "What's happening? / What's up?", example: "Bros, wetin dey happen for this area?" },
        { term: "Oya", meaning: "Come on / Let's go / Hurry up.", example: "Oya now, make we leave before hold-up start!" }
      ],
      cultureTips: [
        { title: "The Lagos 'Hold-Up' & Danfo Code", description: "Traffic in Lagos is called 'hold-up'. When riding the iconic yellow Danfo buses, always know the exact phrase 'Owa o!' to tell the conductor you want to disembark." },
        { title: "Food Courtesy: 'Come and Chop'", description: "Whenever someone in Nigeria is eating in your presence, etiquette dictates they invite you warmly by saying 'Come and chop!' (Polite response: 'Thank you, I dey alright')." },
        { title: "The Magic of 'Abeg'", description: "'Abeg' translates to 'I beg you' or 'Please'. Adding 'Abeg' instantly softens any request and displays high warmth." }
      ]
    },
    flashcards: [
      { id: "p-fc-1", front: "How you dey?", phonetic: "How-yoo-dey", back: "How are you? / How are things going?", category: "Greetings", example: "Bros, how you dey today?" },
      { id: "p-fc-2", front: "I dey kampe", phonetic: "Eye-dey-kam-peh", back: "I am doing great / feeling strong", category: "Greetings", example: "I dey kampe, no shaking." },
      { id: "p-fc-3", front: "Wetin be your name?", phonetic: "Weh-tin-bee-your-name", back: "What is your name?", category: "Basics", example: "Wetin be your name, my friend?" },
      { id: "p-fc-4", front: "Abeg", phonetic: "Ah-beg", back: "Please / I beg you", category: "Courtesy", example: "Abeg pass me the bottle of water." },
      { id: "p-fc-5", front: "No wahala", phonetic: "No-wah-hah-lah", back: "No problem / It's fine", category: "Expressions", example: "No wahala, see you tomorrow." },
      { id: "p-fc-6", front: "Chop", phonetic: "Chawp", back: "To eat / Food", category: "Food & Dining", example: "You don chop this afternoon?" },
      { id: "p-fc-7", front: "Hold-up", phonetic: "Hold-up", back: "Traffic jam", category: "Transit", example: "Hold-up too much for third mainland bridge." }
    ],
    units: [
      {
        id: "p-unit-1",
        title: "Unit 1: Street Greetings & First Vibe",
        subtitle: "Master the essential salutations, friendly check-ins, and polite warmth.",
        icon: "Sun",
        color: "#10b981",
        lessons: [
          {
            id: "p-u1-l1",
            title: "Everyday Greetings",
            description: "Learn how to greet anyone from friends to elders in Pidgin.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the most popular way to say 'How are you?' in Pidgin?",
                options: ["How you dey?", "Wetin you chop?", "Where you dey go?", "Which day you come?"],
                correctAnswer: "How you dey?",
                explanation: "'How you dey?' is the universal Pidgin greeting for 'How are you?' or 'How are you doing?'"
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Assemble the sentence: 'I am doing very well'",
                tokens: ["I", "dey", "kampe", "too", "much"],
                correctTokens: ["I", "dey", "kampe"],
                explanation: "'I dey kampe' means 'I am strong, sound, and doing well.'"
              },
              {
                id: "q3",
                type: "audio_listen",
                phrase: "No wahala",
                prompt: "Listen to the phrase and choose its English meaning:",
                options: ["No problem / Everything is good", "Where are you?", "Hurry up please", "I am very hungry"],
                correctAnswer: "No problem / Everything is good",
                explanation: "'Wahala' means trouble or stress. 'No wahala' means zero worries or no problem."
              },
              {
                id: "q4",
                type: "matching",
                prompt: "Match the Pidgin words with their meanings:",
                pairs: [
                  { native: "Abeg", english: "Please" },
                  { native: "Wetin", english: "What" },
                  { native: "Chop", english: "Eat" },
                  { native: "Wahala", english: "Trouble" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    units: [
      {
        id: "y-unit-1",
        title: "Unit 1: Respectful Greetings (Ìkíni)",
        subtitle: "Unlock the polite, honorific salutations for morning, afternoon, and night.",
        icon: "Sun",
        color: "#3b82f6",
        lessons: [
          {
            id: "y-u1-l1",
            title: "Morning & Friendly Salutations",
            description: "Learn 'Báwo ni' and 'Ẹ kú àárọ̀' with proper honorific etiquette.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "How do you ask 'How are you?' casually to a friend in Yoruba?",
                options: ["Báwo ni?", "Èló ni?", "Ta ni?", "Nibo ni?"],
                correctAnswer: "Báwo ni?",
                explanation: "'Báwo ni?' literally means 'How is it?' and is the standard friendly greeting."
              },
              {
                id: "q2",
                type: "multiple_choice",
                prompt: "What is the respectful greeting for 'Good morning' to an elder?",
                options: ["Ẹ kú àárọ̀", "Ẹ kú ìrọ̀lẹ́", "O dábọ̀", "Káàsán"],
                correctAnswer: "Ẹ kú àárọ̀",
                explanation: "'Ẹ kú àárọ̀' is used in the morning, with 'Ẹ' showing honor and deference to elders."
              },
              {
                id: "q3",
                type: "matching",
                prompt: "Match the Yoruba greetings with English:",
                pairs: [
                  { native: "Báwo ni?", english: "How are you?" },
                  { native: "Ẹ kú àárọ̀", english: "Good morning" },
                  { native: "Ẹ ṣeé", english: "Thank you" },
                  { native: "O dábọ̀", english: "Goodbye" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    greeting: "Olá! Como vai você?",
    description: "Learn Portuguese with sunny Lisbon cafe culture, Brazilian warmth, and practical travel dialogues.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Quem não arrisca, não petisca.",
        translation: "Those who do not take risks do not snack (Fortune favors the bold).",
        context: "A classic Portuguese proverb encouraging learners to speak up courageously without fear of mistakes."
      },
      slangs: [
        { term: "Legal!", meaning: "Cool! / Great! / Nice! (Universal across Brazil)", example: "Esse curso é muito legal!" },
        { term: "Beleza", meaning: "Awesome / All good (literally: beauty)", example: "E aí, tudo beleza?" },
        { term: "Saudade", meaning: "A profound longing for someone or somewhere deeply missed", example: "Tenho muita saudade do Brasil." },
        { term: "Tudo bem?", meaning: "Is everything good? (The default friendly check-in)", example: "Oi amigos, tudo bem com vocês?" },
        { term: "Valeu!", meaning: "Thanks a lot! / Cheers! (Casual)", example: "Valeu pela ajuda hoje!" }
      ],
      cultureTips: [
        { title: "The Untranslatable 'Saudade'", description: "Portuguese possesses the poetic word 'Saudade', expressing a mixture of affection, nostalgia, and yearning for a person, memory, or home far away." },
        { title: "Brazilian vs European Portuguese", description: "While mutually intelligible, Brazilian Portuguese tends to be melodically open with vowels, whereas European Portuguese clips certain unstressed vowels." }
      ]
    },
    flashcards: [
      { id: "pt-fc-1", front: "Olá!", phonetic: "oh-LAH", back: "Hello / Hi!", category: "Greetings", example: "Olá, bom dia!" },
      { id: "pt-fc-2", front: "Tudo bem?", phonetic: "TOO-doo bayng", back: "How are you? / Everything good?", category: "Greetings", example: "Oi Maria, tudo bem?" },
      { id: "pt-fc-3", front: "Muito obrigado(a)", phonetic: "MOO-ee-toh oh-bree-GAH-doo", back: "Thank you very much", category: "Courtesy", example: "Muito obrigado por sua ajuda!" },
      { id: "pt-fc-4", front: "Por favor", phonetic: "poor fah-VOR", back: "Please", category: "Courtesy", example: "Um café, por favor." },
      { id: "pt-fc-5", front: "A conta", phonetic: "ah KOHN-tah", back: "The bill / check", category: "Dining", example: "Garçom, a conta, por favor." },
      { id: "pt-fc-6", front: "Tchau!", phonetic: "CHOW", back: "Bye! / See you!", category: "Farewell", example: "Até logo, tchau!" }
    ],
    units: [
      {
        id: "pt-unit-1",
        title: "Unit 1: First Steps in Lisbon & Rio (Primeiros Passos)",
        subtitle: "Master essential greetings, café courtesies, and friendly introductions.",
        icon: "Sun",
        color: "#059669",
        lessons: [
          {
            id: "pt-u1-l1",
            title: "Friendly Portuguese Greetings",
            description: "Learn how to say Olá, Tudo bem, and Obrigado with native warmth.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the most popular way to ask 'How are you?' in Portuguese?",
                options: ["Tudo bem?", "Onde fica?", "Quanto custa?", "Até amanhã"],
                correctAnswer: "Tudo bem?",
                explanation: "'Tudo bem?' literally means 'Everything well?' and is spoken millions of times daily."
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Assemble: 'Meu nome é Lucas' (My name is Lucas)",
                tokens: ["Meu", "nome", "é", "Lucas", "muito"],
                correctTokens: ["Meu", "nome", "é", "Lucas"],
                explanation: "'Meu nome é...' is the standard way to introduce your name."
              },
              {
                id: "q3",
                type: "matching",
                prompt: "Match Portuguese phrases with English:",
                pairs: [
                  { native: "Olá", english: "Hello" },
                  { native: "Obrigado", english: "Thank you" },
                  { native: "Por favor", english: "Please" },
                  { native: "Tchau", english: "Bye" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    description: "Explore Swedish with Stockholm cafe fika, balanced lifestyle phrases, and melodic pitch accent.",
    cultureVault: {
      proverbOfDay: {
        proverb: "Finns det hjärterum så finns det stjärterum.",
        translation: "If there is room in the heart, there is room to sit.",
        context: "A heartwarming Swedish hospitality saying: you can always welcome one more friend to your home."
      },
      slangs: [
        { term: "Fika", meaning: "A cherished social coffee and pastry break with friends or colleagues", example: "Ska vi ta en fika tillsammans?" },
        { term: "Lagom", meaning: "Not too little, not too much — just the perfect right amount", example: "Det här kaffet är helt lagom varmt." },
        { term: "Tack så mycket", meaning: "Thank you very much", example: "Tack så mycket för hjälpen!" },
        { term: "Skål!", meaning: "Cheers! (Always maintain eye contact while toasting in Sweden)", example: "Trevlig helg, skål!" },
        { term: "Tjena!", meaning: "Hey! / Hi there! (Casual friendly greeting)", example: "Tjena Erik! Hur är läget?" }
      ],
      cultureTips: [
        { title: "The Sacred Ritual of 'Fika'", description: "In Sweden, 'Fika' is an essential cultural institution. It is a dedicated pause to relax, drink coffee, enjoy a fresh cinnamon bun (kanelbulle), and connect." },
        { title: "The Concept of 'Lagom'", description: "Lagom is the Swedish life philosophy of moderation, equilibrium, and harmony without excess." }
      ]
    },
    flashcards: [
      { id: "sv-fc-1", front: "Hej!", phonetic: "hay", back: "Hello / Hi!", category: "Greetings", example: "Hej och välkommen!" },
      { id: "sv-fc-2", front: "Hur mår du?", phonetic: "hoor mohr doo", back: "How are you?", category: "Greetings", example: "Hej Sara, hur mår du idag?" },
      { id: "sv-fc-3", front: "Tack så mycket", phonetic: "tahk soh MEW-keh", back: "Thank you very much", category: "Courtesy", example: "Tack så mycket för maten!" },
      { id: "sv-fc-4", front: "Varsågod", phonetic: "VAHR-shoh-good", back: "You're welcome / Here you go", category: "Courtesy", example: "Här är ditt kaffe, varsågod!" },
      { id: "sv-fc-5", front: "Hejdå!", phonetic: "hay-DOH", back: "Goodbye!", category: "Farewell", example: "Vi ses imorgon, hejdå!" }
    ],
    units: [
      {
        id: "sv-unit-1",
        title: "Unit 1: Welcome to Sweden (Välkommen till Sverige)",
        subtitle: "Learn essential greetings, cafe ordering, and friendly conversational phrases.",
        icon: "Sun",
        color: "#0284c7",
        lessons: [
          {
            id: "sv-u1-l1",
            title: "Everyday Swedish Greetings",
            description: "Master Hej, Hur mår du, and Tack så mycket.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the universal friendly greeting for 'Hello' in Swedish?",
                options: ["Hej", "Hejdå", "Nej", "Ja"],
                correctAnswer: "Hej",
                explanation: "'Hej' is the classic, universally used Swedish greeting."
              },
              {
                id: "q2",
                type: "matching",
                prompt: "Match Swedish words with English:",
                pairs: [
                  { native: "Hej", english: "Hello" },
                  { native: "Tack", english: "Thank you" },
                  { native: "Ja", english: "Yes" },
                  { native: "Hejdå", english: "Goodbye" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    cultureVault: {
      proverbOfDay: {
        proverb: "Alku aina hankalaa, lopussa kiitos seisoo.",
        translation: "The beginning is always difficult, but at the end gratitude stands.",
        context: "Encouragement for learners navigating Finnish grammar: persistence leads to immense triumph."
      },
      slangs: [
        { term: "Sisu", meaning: "Extraordinary determination, grit, and resilience in the face of adversity", example: "Suomalaisilla on paljon sisua!" },
        { term: "Kiitos", meaning: "Thank you", example: "Kiitos paljon avustasi!" },
        { term: "Ole hyvä", meaning: "You're welcome / Please / Here you go", example: "Tässä on kahvisi, ole hyvä." },
        { term: "Moi moi!", meaning: "Bye bye! (Casual and cheerful)", example: "Nähdään huomenna, moi moi!" },
        { term: "Totta kai", meaning: "Of course / Absolutely", example: "Tuletko mukaan? — Totta kai!" }
      ],
      cultureTips: [
        { title: "The Spirit of 'Sisu'", description: "Sisu is a uniquely Finnish cultural concept embodying stoic determination, bravery, and grit against any odds." },
        { title: "The Sauna Sanctuary", description: "Finland has over 3 million saunas for 5.5 million citizens. It is a tranquil sanctuary for relaxation, purification, and community bonding." }
      ]
    },
    flashcards: [
      // Lesson 1: Vocabulary building
      { id: "fi-fc-l1-1", front: "Vesi", phonetic: "VEH-see", back: "Water", category: "Lesson 1: Vocabulary building", example: "Juon lasillisen vettä." },
      { id: "fi-fc-l1-2", front: "Leipä", phonetic: "LAY-pah", back: "Bread", category: "Lesson 1: Vocabulary building", example: "Tuoretta leipää, kiitos." },
      { id: "fi-fc-l1-3", front: "Kirja", phonetic: "KEER-yah", back: "Book", category: "Lesson 1: Vocabulary building", example: "Luen mielenkiintoista kirjaa." },
      { id: "fi-fc-l1-4", front: "Talo", phonetic: "TAH-loh", back: "House / Building", category: "Lesson 1: Vocabulary building", example: "Tämä on kaunis talo." },

      // Lesson 2: Use Common Phrases
      { id: "fi-fc-l2-1", front: "Minun nimeni on...", phonetic: "MEE-noon NEE-meh-nee on...", back: "My name is...", category: "Lesson 2: Common Phrases", example: "Minun nimeni on Matti." },
      { id: "fi-fc-l2-2", front: "Anteeksi", phonetic: "AHN-tehk-see", back: "Excuse me / Sorry", category: "Lesson 2: Common Phrases", example: "Anteeksi, missä juna-asema on?" },
      { id: "fi-fc-l2-3", front: "Puhutko englantia?", phonetic: "POO-hoot-koh ENG-lahn-tee-ah", back: "Do you speak English?", category: "Lesson 2: Common Phrases", example: "Anteeksi, puhutko englantia?" },
      { id: "fi-fc-l2-4", front: "Ole hyvä", phonetic: "OH-leh HEW-vah", back: "You're welcome / Here you go", category: "Lesson 2: Common Phrases", example: "Kiitos! — Ole hyvä!" },

      // Lesson 3: Talk about people
      { id: "fi-fc-l3-1", front: "Äiti & Isä", phonetic: "EYE-tee & EE-sah", back: "Mother & Father", category: "Lesson 3: Talk about people", example: "Äitini ja isäni asuvat täällä." },
      { id: "fi-fc-l3-2", front: "Ystävä", phonetic: "EWS-tah-vah", back: "Friend", category: "Lesson 3: Talk about people", example: "Hän on paras ystäväni." },
      { id: "fi-fc-l3-3", front: "Hän", phonetic: "HAN", back: "He / She (Gender-neutral in Finnish)", category: "Lesson 3: Talk about people", example: "Hän on mukava ihminen." },
      { id: "fi-fc-l3-4", front: "Lapsi", phonetic: "LAHP-see", back: "Child", category: "Lesson 3: Talk about people", example: "Lapset leikkivät ulkona." },

      // Lesson 4: Describe things
      { id: "fi-fc-l4-1", front: "Kaunis", phonetic: "KOW-nees", back: "Beautiful", category: "Lesson 4: Describe things", example: "Suomen luonto on kaunis." },
      { id: "fi-fc-l4-2", front: "Iso & Pieni", phonetic: "EE-soh & PEE-eh-nee", back: "Big & Small", category: "Lesson 4: Describe things", example: "Iso järvi, pieni saari." },
      { id: "fi-fc-l4-3", front: "Uusi & Vanha", phonetic: "OO-see & VAHN-hah", back: "New & Old", category: "Lesson 4: Describe things", example: "Uusi auto ja vanha kirja." },
      { id: "fi-fc-l4-4", front: "Kylmä & Kuuma", phonetic: "KEWL-mah & KOO-mah", back: "Cold & Hot", category: "Lesson 4: Describe things", example: "Talvella on kylmä, saunassa kuuma." },

      // Lesson 5: House hold
      { id: "fi-fc-l5-1", front: "Keittiö", phonetic: "KAYT-tee-ur", back: "Kitchen", category: "Lesson 5: House hold", example: "Keittiössä tuoksuu kahvi." },
      { id: "fi-fc-l5-2", front: "Pöytä & Tuoli", phonetic: "POY-tah & TOO-oh-lee", back: "Table & Chair", category: "Lesson 5: House hold", example: "Istun tuolilla pöydän ääressä." },
      { id: "fi-fc-l5-3", front: "Ovi & Ikkuna", phonetic: "OH-vee & EEK-koo-nah", back: "Door & Window", category: "Lesson 5: House hold", example: "Sulje ovi ja avaa ikkuna." },
      { id: "fi-fc-l5-4", front: "Sauna", phonetic: "SOW-nah", back: "Sauna", category: "Lesson 5: House hold", example: "Menen saunaan joka lauantai." },

      // Lesson 6: Using verbs
      { id: "fi-fc-l6-1", front: "Puhua (Puhun)", phonetic: "POO-hoo-ah (POO-hoon)", back: "To speak (I speak)", category: "Lesson 6: Using verbs", example: "Puhun vähän suomea." },
      { id: "fi-fc-l6-2", front: "Syödä (Syön)", phonetic: "SEW-ur-dah (SEW-ern)", back: "To eat (I eat)", category: "Lesson 6: Using verbs", example: "Syön aamiaista keittiössä." },
      { id: "fi-fc-l6-3", front: "Juoda (Juon)", phonetic: "YOO-oh-dah (YOO-ohn)", back: "To drink (I drink)", category: "Lesson 6: Using verbs", example: "Juon mustaa kahvia." },
      { id: "fi-fc-l6-4", front: "Mennä (Menen)", phonetic: "MEN-nah (MEH-nen)", back: "To go (I go)", category: "Lesson 6: Using verbs", example: "Menen huomenna kouluun." },

      // Lesson 7: Discussion about past tense
      { id: "fi-fc-l7-1", front: "Minä olin", phonetic: "MEE-nah OH-leen", back: "I was (Past tense of olla)", category: "Lesson 7: Discussion about past tense", example: "Eilen olin kotona." },
      { id: "fi-fc-l7-2", front: "Minä söin", phonetic: "MEE-nah SER-een", back: "I ate (Past tense of syödä)", category: "Lesson 7: Discussion about past tense", example: "Söin hyvää kalaa illalla." },
      { id: "fi-fc-l7-3", front: "Minä menin", phonetic: "MEE-nah MEH-neen", back: "I went (Past tense of mennä)", category: "Lesson 7: Discussion about past tense", example: "Menin kauppaan eilen." },
      { id: "fi-fc-l7-4", front: "Eilen", phonetic: "AY-len", back: "Yesterday", category: "Lesson 7: Discussion about past tense", example: "Mitä teit eilen?" },

      // Lesson 9: Present tense
      { id: "fi-fc-l9-1", front: "Minä olen / Sinä olet", phonetic: "MEE-nah OH-len / SEE-nah OH-let", back: "I am / You are (Present)", category: "Lesson 9: Present tense", example: "Minä olen iloinen, sinä olet ystävällinen." },
      { id: "fi-fc-l9-2", front: "Hän on / He ovat", phonetic: "HAN on / HEH OH-vaht", back: "He/She is / They are (Present)", category: "Lesson 9: Present tense", example: "Hän on opettaja, he ovat opiskelijoita." },
      { id: "fi-fc-l9-3", front: "Me asumme", phonetic: "MEH AH-soom-meh", back: "We live / reside", category: "Lesson 9: Present tense", example: "Me asumme Suomessa." },
      { id: "fi-fc-l9-4", front: "Puhutko suomea?", phonetic: "POO-hoot-koh SOO-oh-meh-ah", back: "Do you speak Finnish? (Present question)", category: "Lesson 9: Present tense", example: "Kyllä, puhun suomea joka päivä." },

      // Lesson 10: Talk about places
      { id: "fi-fc-l10-1", front: "Kaupunki", phonetic: "KOW-poon-kee", back: "City / Town", category: "Lesson 10: Talk about places", example: "Helsinki on kaunis kaupunki." },
      { id: "fi-fc-l10-2", front: "Kirjasto & Koulu", phonetic: "KEER-yahs-toh & KOH-oo-loo", back: "Library & School", category: "Lesson 10: Talk about places", example: "Opiskelen kirjastossa ja koulussa." },
      { id: "fi-fc-l10-3", front: "Järvi & Metsä", phonetic: "YAR-vee & MET-sah", back: "Lake & Forest", category: "Lesson 10: Talk about places", example: "Suomessa on tuhat järveä ja vihreää metsää." },
      { id: "fi-fc-l10-4", front: "Koulussa / Kaupungissa", phonetic: "KOH-oo-loos-sah / KOW-poon-gees-sah", back: "At school / In the city (-ssa case)", category: "Lesson 10: Talk about places", example: "Olen nyt kaupungissa." }
    ],
    units: [
      {
        id: "fi-unit-1",
        title: "Introduce yourself",
        subtitle: "Build foundational vocabulary, common phrases, describe people, places and homes, and master verb tenses with 20 questions per lesson.",
        icon: "Sun",
        color: "#0ea5e9",
        lessons: finnishUnit1Lessons
      }
    ]
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
    units: [
      {
        id: "ig-unit-1",
        title: "Unit 1: Warm Igbo Greetings (Ekele)",
        subtitle: "Learn essential salutations, friendly check-ins, and polite respect.",
        icon: "Sun",
        color: "#16a34a",
        lessons: [
          {
            id: "ig-u1-l1",
            title: "Everyday Igbo Salutations",
            description: "Learn Kedụ, Ndewoo, and Daalụ with heartfelt warmth.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the universal Igbo greeting for 'How are you?'",
                options: ["Kedụ?", "Èló ni?", "Báwo ni?", "Sannu"],
                correctAnswer: "Kedụ?",
                explanation: "'Kedụ?' (or 'Kedụ kwanụ?') translates to 'How are you?' in Igbo."
              },
              {
                id: "q2",
                type: "scramble",
                prompt: "Assemble: 'Aha m bụ Emeka' (My name is Emeka)",
                tokens: ["Aha", "m", "bụ", "Emeka", "nri"],
                correctTokens: ["Aha", "m", "bụ", "Emeka"],
                explanation: "'Aha m bụ...' means 'My name is...' in Igbo."
              },
              {
                id: "q3",
                type: "matching",
                prompt: "Match Igbo words with English:",
                pairs: [
                  { native: "Kedụ?", english: "How are you?" },
                  { native: "Daalụ", english: "Thank you" },
                  { native: "Ndewoo", english: "Greetings" },
                  { native: "Ka ọ dị", english: "Goodbye" }
                ]
              }
            ]
          }
        ]
      }
    ]
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
    units: [
      {
        id: "ha-unit-1",
        title: "Unit 1: First Greetings in Kano (Gaisuwar Farko)",
        subtitle: "Learn essential Hausa salutations, courtesy responses, and friendly inquiries.",
        icon: "Sun",
        color: "#b45309",
        lessons: [
          {
            id: "ha-u1-l1",
            title: "Everyday Hausa Salutations",
            description: "Master Sannu, Nagode, and Lafiya lau.",
            xp: 20,
            questions: [
              {
                id: "q1",
                type: "multiple_choice",
                prompt: "What is the universal Hausa greeting for 'Hello / Well done'?",
                options: ["Sannu", "Nagode", "A'a", "Ee"],
                correctAnswer: "Sannu",
                explanation: "'Sannu' is the standard warm greeting in Hausa."
              },
              {
                id: "q2",
                type: "matching",
                prompt: "Match Hausa words with English:",
                pairs: [
                  { native: "Sannu", english: "Hello" },
                  { native: "Nagode", english: "Thank you" },
                  { native: "Lafiya", english: "Peace / Health" },
                  { native: "Sai an jima", english: "See you later" }
                ]
              }
            ]
          }
        ]
      }
    ]
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

