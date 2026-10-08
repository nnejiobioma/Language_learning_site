import { finnishUnit1Lessons } from './finnishLessons.js';

export const finnishAllUnits = [
  // =========================================================================
  // Level A1.1: Foundations & Phonetics (Introduce Yourself)
  // =========================================================================
  {
    id: "fi-unit-1",
    cefrLevel: "A1.1",
    title: "Unit 1 (A1.1): Foundations & Phonetics (Introduce Yourself)",
    subtitle: "Vowel harmony, k-p-t gradation, pronouns, greetings, numbers, family, and survival courtesy phrases.",
    icon: "Sun",
    color: "#0ea5e9",
    lessons: finnishUnit1Lessons
  },

  // =========================================================================
  // Level A1.2: Essential Everyday Life
  // =========================================================================
  {
    id: "fi-unit-2",
    cefrLevel: "A1.2",
    title: "Unit 2 (A1.2): Essential Everyday Life",
    subtitle: "Partitive singular, local cases (missä, mistä, mihin), café dining, groceries, telling time, and city navigation.",
    icon: "Utensils",
    color: "#10b981",
    lessons: [
      {
        id: "fi-u2-l1",
        title: "Lesson 1: Partitive Singular (Partitiivi)",
        description: "Form and use the partitive case for indefinite amounts, food, beverages, and after numbers.",
        xp: 25,
        questions: [
          {
            id: "fi-u2-l1-q1",
            type: "multiple_choice",
            prompt: "What is the partitive singular form of 'kahvi'?",
            options: ["kahvia", "kahvin", "kahvissa", "kahville"],
            correctAnswer: "kahvia",
            explanation: "Nouns ending in a single vowel typically add '-a/-ä': 'kahvi' -> 'kahvia' ('Juon kahvia' = I drink coffee)."
          },
          {
            id: "fi-u2-l1-q2",
            type: "matching",
            prompt: "Match nominative nouns with their partitive forms:",
            pairs: [
              { native: "Maito -> Maitoa", english: "Milk (partitive)" },
              { native: "Leipä -> Leipää", english: "Bread (partitive)" },
              { native: "Vesi -> Vettä", english: "Water (partitive)" },
              { native: "Tee -> Teetä", english: "Tea (partitive)" }
            ]
          },
          {
            id: "fi-u2-l1-q3",
            type: "fill_blank",
            sentence: "Pöydällä on kolme ___.",
            missingWord: "omenaa",
            options: ["omenaa", "omena", "omenat", "omenassa"],
            correctAnswer: "omenaa",
            explanation: "All numbers greater than 1 require the partitive singular: 'kolme omenaa' (three apples)."
          },
          {
            id: "fi-u2-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'I don't have money'",
            tokens: ["Minulla", "ei", "ole", "rahaa", "raha"],
            correctTokens: ["Minulla", "ei", "ole", "rahaa"],
            explanation: "Negative existence sentences require the partitive: 'Minulla ei ole rahaa'."
          },
          {
            id: "fi-u2-l1-q5",
            type: "audio_listen",
            phrase: "Haluaisin lasin vettä",
            prompt: "Listen to the phrase and select what it means:",
            options: ["I would like a glass of water", "I would like a cup of tea", "I want bread", "Where is the water?"],
            correctAnswer: "I would like a glass of water",
            explanation: "'Haluaisin lasin vettä' uses partitive 'vettä' for the quantity."
          }
        ]
      },
      {
        id: "fi-u2-l2",
        title: "Lesson 2: Local Cases (Missä, Mistä, Mihin)",
        description: "Master Finnish internal location cases: Inessive (-ssa), Elative (-sta), and Illative (-Vn/-hVn).",
        xp: 25,
        questions: [
          {
            id: "fi-u2-l2-q1",
            type: "multiple_choice",
            prompt: "Which case ending answers the question 'Missä?' (Where / inside)?",
            options: ["-ssa / -ssä (Inessive)", "-sta / -stä (Elative)", "-Vn (Illative)", "-lle (Allative)"],
            correctAnswer: "-ssa / -ssä (Inessive)",
            explanation: "Inessive (-ssa/-ssä) means 'in/at' (e.g., 'talossa' = in the house)."
          },
          {
            id: "fi-u2-l2-q2",
            type: "matching",
            prompt: "Match local cases with their question meaning:",
            pairs: [
              { native: "Missä? (Koulussa)", english: "Where? (At school)" },
              { native: "Mistä? (Koulusta)", english: "From where? (From school)" },
              { native: "Mihin? (Kouluun)", english: "To where? (Into school)" },
              { native: "Millä? (Bussilla)", english: "By what? (By bus)" }
            ]
          },
          {
            id: "fi-u2-l2-q3",
            type: "fill_blank",
            sentence: "Tulen huomenna ___ (from Helsinki).",
            missingWord: "Helsingistä",
            options: ["Helsingistä", "Helsingissä", "Helsinkiin", "Helsingille"],
            correctAnswer: "Helsingistä",
            explanation: "The elative ending '-sta/-stä' means 'from inside/out of': 'Helsingistä'."
          },
          {
            id: "fi-u2-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'I am going into the library'",
            tokens: ["Menen", "nyt", "kirjastoon", "kirjastossa"],
            correctTokens: ["Menen", "nyt", "kirjastoon"],
            explanation: "Illative lengthens the vowel + n: 'kirjasto' -> 'kirjastoon'."
          },
          {
            id: "fi-u2-l2-q5",
            type: "audio_listen",
            phrase: "Olen nyt kaupassa",
            prompt: "Listen to the phrase and select what it means:",
            options: ["I am now in the shop", "I am going to the shop", "I came from the shop", "The shop is closed"],
            correctAnswer: "I am now in the shop",
            explanation: "'Kaupassa' is inessive (-ssa): 'I am in the shop'."
          }
        ]
      },
      {
        id: "fi-u2-l3",
        title: "Lesson 3: Food, Café Dining & Grocery Shopping",
        description: "Order coffee and pastries at a kahvila, ask prices, and navigate supermarkets.",
        xp: 25,
        questions: [
          {
            id: "fi-u2-l3-q1",
            type: "multiple_choice",
            prompt: "How do you say 'A coffee and a cinnamon roll, please' in a Finnish café?",
            options: [
              "Kahvi ja korvapuusti, kiitos",
              "Missä on juna-asema?",
              "En halua mitään",
              "Paljon kello on?"
            ],
            correctAnswer: "Kahvi ja korvapuusti, kiitos",
            explanation: "'Korvapuusti' is Finland's iconic cinnamon cardamon roll!"
          },
          {
            id: "fi-u2-l3-q2",
            type: "matching",
            prompt: "Match shopping terms:",
            pairs: [
              { native: "Ostoskori", english: "Shopping basket" },
              { native: "Kuitti", english: "Receipt" },
              { native: "Alennus", english: "Discount / Sale" },
              { native: "Kassa", english: "Cash register / Checkout" }
            ]
          },
          {
            id: "fi-u2-l3-q3",
            type: "scramble",
            prompt: "Assemble: 'I pay by card'",
            tokens: ["Maksan", "kortilla,", "kiitos", "käteisellä"],
            correctTokens: ["Maksan", "kortilla,", "kiitos"],
            explanation: "The adessive case '-lla' marks instrument: 'kortilla' (by card)."
          },
          {
            id: "fi-u2-l3-q4",
            type: "fill_blank",
            sentence: "Paljonko tämä leipä ___?",
            missingWord: "maksaa",
            options: ["maksaa", "maksu", "ostaa", "juo"],
            correctAnswer: "maksaa",
            explanation: "'Paljonko tämä leipä maksaa?' means 'How much does this bread cost?'."
          },
          {
            id: "fi-u2-l3-q5",
            type: "audio_listen",
            phrase: "Tarvitsetko kuittia?",
            prompt: "Listen to the cashier's question and select what it means:",
            options: ["Do you need a receipt?", "Do you have a card?", "Is that all?", "Do you want a bag?"],
            correctAnswer: "Do you need a receipt?",
            explanation: "'Tarvitsetko kuittia?' is the standard Finnish cashier question."
          }
        ]
      },
      {
        id: "fi-u2-l4",
        title: "Lesson 4: Time, Weather & City Directions",
        description: "Tell the time, discuss seasonal weather, and give simple walking directions in town.",
        xp: 25,
        questions: [
          {
            id: "fi-u2-l4-q1",
            type: "multiple_choice",
            prompt: "What time is 'Kello on puoli kolme'?",
            options: ["2:30 (half past two)", "3:30 (half past three)", "3:00 (three o'clock)", "2:15 (quarter past two)"],
            correctAnswer: "2:30 (half past two)",
            explanation: "In Finnish, 'puoli kolme' means half on the way to three (i.e. 2:30)."
          },
          {
            id: "fi-u2-l4-q2",
            type: "matching",
            prompt: "Match weather conditions in Finnish:",
            pairs: [
              { native: "Aurinko paistaa", english: "The sun is shining" },
              { native: "Sataa vettä", english: "It is raining" },
              { native: "Sataa lunta", english: "It is snowing" },
              { native: "Tuulee kovaa", english: "The wind is blowing hard" }
            ]
          },
          {
            id: "fi-u2-l4-q3",
            type: "scramble",
            prompt: "Assemble: 'Turn left at the church'",
            tokens: ["Käänny", "vasemmalle", "kirkon", "kohdalla", "oikealle"],
            correctTokens: ["Käänny", "vasemmalle", "kirkon", "kohdalla"],
            explanation: "'Vasemmalle' = to the left; 'oikealle' = to the right."
          },
          {
            id: "fi-u2-l4-q4",
            type: "fill_blank",
            sentence: "Tänään ulkona on kymmenen astetta ___.",
            missingWord: "pakkasta",
            options: ["pakkasta", "lämmintä", "aurinkoa", "sadetta"],
            correctAnswer: "pakkasta",
            explanation: "'Pakkasta' means sub-zero freezing temperature in Finnish."
          },
          {
            id: "fi-u2-l4-q5",
            type: "audio_listen",
            phrase: "Mene suoraan eteenpäin",
            prompt: "Listen to the directions and select what it means:",
            options: ["Go straight ahead", "Turn right", "Stop here", "Cross the street"],
            correctAnswer: "Go straight ahead",
            explanation: "'Mene suoraan eteenpäin' instructs you to go straight ahead."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level A1.3: Expanding Daily Routines
  // =========================================================================
  {
    id: "fi-unit-3",
    cefrLevel: "A1.3",
    title: "Unit 3 (A1.3): Expanding Daily Routines",
    subtitle: "The 5 Finnish verb types, basic object rules, hobbies, apartment living, and schedule planning.",
    icon: "ShoppingBag",
    color: "#f59e0b",
    lessons: [
      {
        id: "fi-u3-l1",
        title: "Lesson 1: The 5 Finnish Verb Types (Verbityypit 1–5)",
        description: "Classify verbs by infinitive endings and conjugate their stems systematically.",
        xp: 30,
        questions: [
          {
            id: "fi-u3-l1-q1",
            type: "multiple_choice",
            prompt: "Which verb type does 'puhua' (ending in two vowels: -ua) belong to?",
            options: ["Verbityyppi 1", "Verbityyppi 2", "Verbityyppi 3", "Verbityyppi 4"],
            correctAnswer: "Verbityyppi 1",
            explanation: "Type 1 verbs end in two vowels (-aa/-ää, -oa/-öä, -ua/-yä) like puhua, asua, tietää."
          },
          {
            id: "fi-u3-l1-q2",
            type: "matching",
            prompt: "Match verb types with their infinitive ending patterns:",
            pairs: [
              { native: "Tyyppi 1: Asua, Puhua", english: "Ends in -Va / -Vä" },
              { native: "Tyyppi 2: Syödä, Juoda", english: "Ends in -da / -dä" },
              { native: "Tyyppi 3: Tulla, Mennä", english: "Ends in consonant + -la/-na/-ra/-sta" },
              { native: "Tyyppi 4: Haluta, Tavata", english: "Ends in -ata / -ota / -uta" }
            ]
          },
          {
            id: "fi-u3-l1-q3",
            type: "fill_blank",
            sentence: "Minä ___ (haluta) matkustaa Lappiin.",
            missingWord: "haluan",
            options: ["haluan", "haluta", "haluut", "haluamme"],
            correctAnswer: "haluan",
            explanation: "Type 4 verbs drop -t- and add personal endings: haluta -> halua- + n = haluan."
          },
          {
            id: "fi-u3-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'I come from work at five'",
            tokens: ["Tulen", "töistä", "kello", "viisi", "menen"],
            correctTokens: ["Tulen", "töistä", "kello", "viisi"],
            explanation: "'Tulla' (Type 3) conjugates as: minä tulen, sinä tulet, hän tulee."
          },
          {
            id: "fi-u3-l1-q5",
            type: "audio_listen",
            phrase: "Mitä sinä haluat tehdä tänään?",
            prompt: "Listen to the question and select what it means:",
            options: ["What do you want to do today?", "Where are you going today?", "Who are you meeting?", "What time do you wake up?"],
            correctAnswer: "What do you want to do today?",
            explanation: "'Mitä sinä haluat tehdä tänään?' asks what you want to do today."
          }
        ]
      },
      {
        id: "fi-u3-l2",
        title: "Lesson 2: Object Rules (Accusative vs Partitive Basics)",
        description: "Understand when Finnish direct objects require the partitive vs total accusative.",
        xp: 30,
        questions: [
          {
            id: "fi-u3-l2-q1",
            type: "multiple_choice",
            prompt: "Why does the object in 'En osta autoa' take the partitive case?",
            options: [
              "Because the sentence is negative",
              "Because cars are always partitive",
              "Because of vowel harmony",
              "Because it is in the past tense"
            ],
            correctAnswer: "Because the sentence is negative",
            explanation: "Rule #1 of Finnish objects: The direct object of any negative sentence is ALWAYS partitive!"
          },
          {
            id: "fi-u3-l2-q2",
            type: "matching",
            prompt: "Match sentence types with object case requirements:",
            pairs: [
              { native: "Luen kirjaa (In progress)", english: "Partitive (uncompleted action)" },
              { native: "Luen kirjan (Complete)", english: "Total accusative -n (finished whole)" },
              { native: "En syö omenaa (Negative)", english: "Partitive (always in negative)" },
              { native: "Juon maitoa (Substance)", english: "Partitive (uncountable matter)" }
            ]
          },
          {
            id: "fi-u3-l2-q3",
            type: "fill_blank",
            sentence: "Ostan huomenna uuden ___ (a whole phone).",
            missingWord: "puhelimen",
            options: ["puhelimen", "puhelinta", "puhelin", "puhelimessa"],
            correctAnswer: "puhelimen",
            explanation: "Completed countable affirmative object takes the -n genitive/accusative ending: 'puhelimen'."
          },
          {
            id: "fi-u3-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'She is writing an email'",
            tokens: ["Hän", "kirjoittaa", "sähköpostia", "kirjeen"],
            correctTokens: ["Hän", "kirjoittaa", "sähköpostia"],
            explanation: "Ongoing unfinished action takes the partitive: 'sähköpostia'."
          },
          {
            id: "fi-u3-l2-q5",
            type: "audio_listen",
            phrase: "Avasin oven",
            prompt: "Listen to the phrase and select what it means:",
            options: ["I opened the door (completed)", "I am opening the door", "I did not open the door", "The door is open"],
            correctAnswer: "I opened the door (completed)",
            explanation: "'Oven' is total accusative (-n), signifying the action is completely done."
          }
        ]
      },
      {
        id: "fi-u3-l3",
        title: "Lesson 3: Hobbies & Schedule Planning",
        description: "Talk about leisure pastimes, sports, music, and making weekend plans with friends.",
        xp: 30,
        questions: [
          {
            id: "fi-u3-l3-q1",
            type: "multiple_choice",
            prompt: "How do you say 'I play the guitar' in Finnish?",
            options: ["Soitan kitaraa", "Pelaan kitaran", "Uin kitarassa", "Laulan kitara"],
            correctAnswer: "Soitan kitaraa",
            explanation: "Musical instruments use 'soittaa' + partitive: 'soitan kitaraa' (or 'soitan pianoa')."
          },
          {
            id: "fi-u3-l3-q2",
            type: "matching",
            prompt: "Match Finnish hobbies:",
            pairs: [
              { native: "Hiihto", english: "Cross-country skiing" },
              { native: "Uinti", english: "Swimming" },
              { native: "Valokuvaus", english: "Photography" },
              { native: "Pyöräily", english: "Cycling / Biking" }
            ]
          },
          {
            id: "fi-u3-l3-q3",
            type: "scramble",
            prompt: "Assemble: 'Do you want to play tennis on Saturday?'",
            tokens: ["Haluatko", "pelata", "tennistä", "lauantaina?", "jalkapalloa"],
            correctTokens: ["Haluatko", "pelata", "tennistä", "lauantaina?"],
            explanation: "Sports use 'pelata' + partitive: 'pelata tennistä'."
          },
          {
            id: "fi-u3-l3-q4",
            type: "fill_blank",
            sentence: "Vapaa-ajalla harrastan ___ (reading).",
            missingWord: "lukemista",
            options: ["lukemista", "kirja", "lukea", "luen"],
            correctAnswer: "lukemista",
            explanation: "Verb 'harrastaa' requires partitive noun: 'harrastan lukemista'."
          },
          {
            id: "fi-u3-l3-q5",
            type: "audio_listen",
            phrase: "Menemmekö viikonloppuna elokuviin?",
            prompt: "Listen to the invitation and select what it means:",
            options: ["Shall we go to the cinema on the weekend?", "Shall we go to the museum?", "Are you busy on Saturday?", "Do you like movies?"],
            correctAnswer: "Shall we go to the cinema on the weekend?",
            explanation: "'Menemmekö elokuviin?' invites someone to the movies."
          }
        ]
      },
      {
        id: "fi-u3-l4",
        title: "Lesson 4: Apartment Living & Postposition Adverbs",
        description: "Describe rental apartments and use spatial postpositions (päällä, alla, vieressä, edessä).",
        xp: 30,
        questions: [
          {
            id: "fi-u3-l4-q1",
            type: "multiple_choice",
            prompt: "What does 'pöydän alla' mean?",
            options: ["Under the table", "On top of the table", "Next to the table", "Behind the table"],
            correctAnswer: "Under the table",
            explanation: "Postposition 'alla' means 'under' and requires a genitive noun: 'pöydän alla'."
          },
          {
            id: "fi-u3-l4-q2",
            type: "matching",
            prompt: "Match spatial postpositions (with genitive):",
            pairs: [
              { native: "Päällä", english: "On top of" },
              { native: "Vieressä", english: "Beside / Next to" },
              { native: "Edessä", english: "In front of" },
              { native: "Takana", english: "Behind" }
            ]
          },
          {
            id: "fi-u3-l4-q3",
            type: "scramble",
            prompt: "Assemble: 'The cat is sleeping under the bed'",
            tokens: ["Kissa", "nukkuu", "sängyn", "alla", "päällä"],
            correctTokens: ["Kissa", "nukkuu", "sängyn", "alla"],
            explanation: "'Sängyn alla' places the cat underneath the bed."
          },
          {
            id: "fi-u3-l4-q4",
            type: "fill_blank",
            sentence: "Asuntoni on valoisa ___ (two-room apartment).",
            missingWord: "kaksio",
            options: ["kaksio", "yksiö", "kolmio", "talo"],
            correctAnswer: "kaksio",
            explanation: "In Finland, 'yksiö' = studio/1-room, 'kaksio' = 2-room apartment, 'kolmio' = 3-room."
          },
          {
            id: "fi-u3-l4-q5",
            type: "audio_listen",
            phrase: "Avaimet ovat laukun sisällä",
            prompt: "Listen to the sentence and select what it means:",
            options: ["The keys are inside the bag", "The keys are under the bag", "The keys are lost", "The bag is on the table"],
            correctAnswer: "The keys are inside the bag",
            explanation: "'Sisällä' means 'inside of'."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level A2.1: Practical Errands & Services
  // =========================================================================
  {
    id: "fi-unit-4",
    cefrLevel: "A2.1",
    title: "Unit 4 (A2.1): Practical Errands & Services",
    subtitle: "Past tense (imperfekti) negation, necessity modal verbs (täytyy/pitää), healthcare visits, and transit errands.",
    icon: "HandMetal",
    color: "#3b82f6",
    lessons: [
      {
        id: "fi-u4-l1",
        title: "Lesson 1: Past Tense Negation & Complex Imperfect",
        description: "Master negative past sentences using 'en / et / ei / emme... -nut/-neet' participles.",
        xp: 35,
        questions: [
          {
            id: "fi-u4-l1-q1",
            type: "multiple_choice",
            prompt: "How do you say 'I did not speak' in Finnish past tense?",
            options: ["En puhunut", "En puhu", "En puhun", "Ei puhunut"],
            correctAnswer: "En puhunut",
            explanation: "Negative past = negative verb + nut/nyt participle: 'En puhunut'."
          },
          {
            id: "fi-u4-l1-q2",
            type: "matching",
            prompt: "Match plural negative past forms:",
            pairs: [
              { native: "Emme menneet", english: "We did not go (-neet)" },
              { native: "Ette tienneet", english: "You (pl) did not know (-neet)" },
              { native: "He eivät ostaneet", english: "They did not buy (-neet)" },
              { native: "En nukkunut", english: "I did not sleep (-nut)" }
            ]
          },
          {
            id: "fi-u4-l1-q3",
            type: "fill_blank",
            sentence: "Eilen hän ei ___ (syödä) aamiaista.",
            missingWord: "syönyt",
            options: ["syönyt", "söi", "syö", "syöneet"],
            correctAnswer: "syönyt",
            explanation: "Third person singular negative past of 'syödä' is 'ei syönyt'."
          },
          {
            id: "fi-u4-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'We did not see him yesterday'",
            tokens: ["Emme", "nähneet", "häntä", "eilen", "nähnyt"],
            correctTokens: ["Emme", "nähneet", "häntä", "eilen"],
            explanation: "Negative verb 'emme' takes plural participle 'nähneet'."
          },
          {
            id: "fi-u4-l1-q5",
            type: "audio_listen",
            phrase: "En tiennyt sitä eilen",
            prompt: "Listen to the phrase and select what it means:",
            options: ["I did not know that yesterday", "I knew that yesterday", "I don't know it now", "Nobody told me"],
            correctAnswer: "I did not know that yesterday",
            explanation: "'En tiennyt sitä eilen' means 'I did not know that yesterday'."
          }
        ]
      },
      {
        id: "fi-u4-l2",
        title: "Lesson 2: Necessity Modal Verbs (Täytyy, Pitää, Voi)",
        description: "Express obligation and requirement with genitive subjects ('Minun täytyy lähteä').",
        xp: 35,
        questions: [
          {
            id: "fi-u4-l2-q1",
            type: "multiple_choice",
            prompt: "In necessity sentences with 'täytyy' (must/have to), what case does the subject take?",
            options: ["Genitiivi (-n ending)", "Nominatiivi (basic form)", "Partitiivi (-a/-ä)", "Illatiivi (-Vn)"],
            correctAnswer: "Genitiivi (-n ending)",
            explanation: "Necessity structures require genitive subjects: 'Minun täytyy' (literally: 'of me is necessary')."
          },
          {
            id: "fi-u4-l2-q2",
            type: "matching",
            prompt: "Match modal expressions:",
            pairs: [
              { native: "Minun täytyy opiskella", english: "I must / have to study" },
              { native: "Sinun pitää levätä", english: "You ought to / should rest" },
              { native: "Hän voi auttaa", english: "He/She can help (possibility)" },
              { native: "Ei tarvitse herätä", english: "No need to wake up" }
            ]
          },
          {
            id: "fi-u4-l3-q3",
            type: "fill_blank",
            sentence: "___ (Me) täytyy ostaa junaliput.",
            missingWord: "Meidän",
            options: ["Meidän", "Me", "Meitä", "Meille"],
            correctAnswer: "Meidän",
            explanation: "'Me' becomes genitive 'Meidän' in a necessity sentence: 'Meidän täytyy ostaa'."
          },
          {
            id: "fi-u4-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'You must drink a lot of water'",
            tokens: ["Sinun", "täytyy", "juoda", "paljon", "vettä"],
            correctTokens: ["Sinun", "täytyy", "juoda", "paljon", "vettä"],
            explanation: "'Sinun täytyy juoda paljon vettä' expresses medical or health necessity."
          },
          {
            id: "fi-u4-l2-q5",
            type: "audio_listen",
            phrase: "Minun on pakko lähteä nyt",
            prompt: "Listen to the sentence and select what it means:",
            options: ["I have to leave right now (urgent)", "I can leave later", "I want to stay", "Why are you leaving?"],
            correctAnswer: "I have to leave right now (urgent)",
            explanation: "'On pakko' indicates strong imperative obligation: 'I have to leave now'."
          }
        ]
      },
      {
        id: "fi-u4-l3",
        title: "Lesson 3: Healthcare, Symptoms & Doctor Appointments",
        description: "Explain illness, describe body aches, and consult a doctor or pharmacist.",
        xp: 35,
        questions: [
          {
            id: "fi-u4-l3-q1",
            type: "multiple_choice",
            prompt: "How do you say 'My head hurts' (I have a headache) in Finnish?",
            options: ["Päätäni särkee", "Pääni on kylmä", "Minulla on jalka", "Pää puhuu"],
            correctAnswer: "Päätäni särkee",
            explanation: "'Päätä särkee' or 'Päätäni särkee' uses partitive for the aching body part."
          },
          {
            id: "fi-u4-l3-q2",
            type: "matching",
            prompt: "Match health symptoms:",
            pairs: [
              { native: "Kuume", english: "Fever" },
              { native: "Yskä", english: "Cough" },
              { native: "Kurkkukipu", english: "Sore throat" },
              { native: "Nuha", english: "Runny nose / Cold" }
            ]
          },
          {
            id: "fi-u4-l3-q3",
            type: "fill_blank",
            sentence: "Haluaisin varata ajan ___ (to the doctor).",
            missingWord: "lääkärille",
            options: ["lääkärille", "lääkäriin", "lääkäristä", "lääkäri"],
            correctAnswer: "lääkärille",
            explanation: "Allative case '-lle' is used when booking an appointment with a person/professional."
          },
          {
            id: "fi-u4-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'Take this medicine three times a day'",
            tokens: ["Ota", "tätä", "lääkettä", "kolme", "kertaa", "päivässä"],
            correctTokens: ["Ota", "tätä", "lääkettä", "kolme", "kertaa", "päivässä"],
            explanation: "'Päivässä' = per day (inessive frequency)."
          },
          {
            id: "fi-u4-l3-q5",
            type: "audio_listen",
            phrase: "Parane pian!",
            prompt: "Listen to the well-wish and select what it means:",
            options: ["Get well soon!", "Have a nice trip!", "Good luck!", "See you soon!"],
            correctAnswer: "Get well soon!",
            explanation: "'Parane pian!' means 'Get well soon!'."
          }
        ]
      },
      {
        id: "fi-u4-l4",
        title: "Lesson 4: Public Transport, Train Tickets & Postal Services",
        description: "Purchase tickets via VR/HSL apps, inquire about delays, and handle postal parcels.",
        xp: 35,
        questions: [
          {
            id: "fi-u4-l4-q1",
            type: "multiple_choice",
            prompt: "What does 'menopaluulippu' mean?",
            options: ["Round-trip ticket", "One-way ticket", "Monthly pass", "Bus stop"],
            correctAnswer: "Round-trip ticket",
            explanation: "'Meno-paluu-lippu' literally means 'go-return-ticket'."
          },
          {
            id: "fi-u4-l4-q2",
            type: "matching",
            prompt: "Match transit vocabulary:",
            pairs: [
              { native: "Laituri", english: "Platform / Pier" },
              { native: "Myöhässä", english: "Delayed / Late" },
              { native: "Aikataulu", english: "Timetable / Schedule" },
              { native: "Vaihto", english: "Transfer / Change of train" }
            ]
          },
          {
            id: "fi-u4-l4-q3",
            type: "fill_blank",
            sentence: "Juna Tampereelle lähtee ___ kaksi (platform 2).",
            missingWord: "laiturilta",
            options: ["laiturilta", "laituriin", "laiturissa", "laituri"],
            correctAnswer: "laiturilta",
            explanation: "Ablative '-lta' expresses departure from an open platform: 'laiturilta'."
          },
          {
            id: "fi-u4-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'Where can I pick up the parcel?'",
            tokens: ["Mistä", "voin", "noutaa", "paketin?", "kaupasta"],
            correctTokens: ["Mistä", "voin", "noutaa", "paketin?"],
            explanation: "'Noutaa paketti' = pick up a parcel."
          },
          {
            id: "fi-u4-l4-q5",
            type: "audio_listen",
            phrase: "Seuraava asema on Pasila",
            prompt: "Listen to the train announcement and select what it means:",
            options: ["The next station is Pasila", "This train terminates at Pasila", "Pasila platform 3", "Doors open on the right"],
            correctAnswer: "The next station is Pasila",
            explanation: "'Seuraava asema on...' is heard on all Finnish trains."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level A2.2: Narrative & Description
  // =========================================================================
  {
    id: "fi-unit-5",
    cefrLevel: "A2.2",
    title: "Unit 5 (A2.2): Narrative & Description",
    subtitle: "Plural cases, conditional mood (-isi-), comparatives/superlatives, and career experience narratives.",
    icon: "Award",
    color: "#8b5cf6",
    lessons: [
      {
        id: "fi-u5-l1",
        title: "Lesson 1: Plural Cases (Nominatiivi & Partitiivi Pluraali)",
        description: "Form plural nominatives (-t) and partitive plurals (-ja/-jä, -ita/-itä) for complex descriptions.",
        xp: 40,
        questions: [
          {
            id: "fi-u5-l1-q1",
            type: "multiple_choice",
            prompt: "What is the partitive plural of 'kirja' (book)?",
            options: ["kirjoja", "kirjat", "kirjoille", "kirjojen"],
            correctAnswer: "kirjoja",
            explanation: "Vowel change -a -> -o- + -ja: 'kirja' -> 'kirjoja' (e.g. 'Luen kirjoja' = I read books)."
          },
          {
            id: "fi-u5-l1-q2",
            type: "matching",
            prompt: "Match singular nouns with their partitive plurals:",
            pairs: [
              { native: "Talo -> Taloja", english: "Houses (partitive pl)" },
              { native: "Omena -> Omenoita", english: "Apples (partitive pl)" },
              { native: "Kukka -> Kukkia", english: "Flowers (partitive pl)" },
              { native: "Kaupunki -> Kaupunkeja", english: "Cities (partitive pl)" }
            ]
          },
          {
            id: "fi-u5-l1-q3",
            type: "fill_blank",
            sentence: "Suomessa on paljon vanhoja ___ (churches).",
            missingWord: "kirkkoja",
            options: ["kirkkoja", "kirkot", "kirkko", "kirkossa"],
            correctAnswer: "kirkkoja",
            explanation: "'Paljon' requires partitive plural for countable items: 'paljon vanhoja kirkkoja'."
          },
          {
            id: "fi-u5-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'The children are playing outside'",
            tokens: ["Lapset", "leikkivät", "ulkona", "lapsia"],
            correctTokens: ["Lapset", "leikkivät", "ulkona"],
            explanation: "Subject plural takes -t: 'Lapsi' -> 'Lapset'."
          },
          {
            id: "fi-u5-l1-q5",
            type: "audio_listen",
            phrase: "Ostin torilta tuoreita marjoja",
            prompt: "Listen to the sentence and select what it means:",
            options: ["I bought fresh berries from the market", "I picked berries in the forest", "Are these berries fresh?", "There are berries on the table"],
            correctAnswer: "I bought fresh berries from the market",
            explanation: "'Tuoreita marjoja' is partitive plural."
          }
        ]
      },
      {
        id: "fi-u5-l2",
        title: "Lesson 2: The Conditional Mood (Konditionaali: -isi-)",
        description: "Express wishes, polite requests, and hypothetical scenarios using the '-isi-' marker.",
        xp: 40,
        questions: [
          {
            id: "fi-u5-l2-q1",
            type: "multiple_choice",
            prompt: "What suffix signals the conditional mood in Finnish verbs?",
            options: ["-isi-", "-nut-", "-vat-", "-mme-"],
            correctAnswer: "-isi-",
            explanation: "'-isi-' marks the conditional: olla -> ol-isi-n (I would be), haluta -> halua-isi-n (I would like)."
          },
          {
            id: "fi-u5-l2-q2",
            type: "matching",
            prompt: "Match conditional verbs with their English translations:",
            pairs: [
              { native: "Haluaisin", english: "I would like" },
              { native: "Olisin iloinen", english: "I would be happy" },
              { native: "Voisitko auttaa?", english: "Could you help?" },
              { native: "Menisin, jos voisin", english: "I would go if I could" }
            ]
          },
          {
            id: "fi-u5-l2-q3",
            type: "fill_blank",
            sentence: "Jos minulla olisi rahaa, ___ (matkustaa) maailman ympäri.",
            missingWord: "matkustaisin",
            options: ["matkustaisin", "matkustan", "matkusti", "matkustaa"],
            correctAnswer: "matkustaisin",
            explanation: "Hypothetical condition matches: 'Jos olisi..., matkustaisin...'."
          },
          {
            id: "fi-u5-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'Could you please repeat?'",
            tokens: ["Voisitko", "toistaa,", "ole", "hyvä?", "puhua"],
            correctTokens: ["Voisitko", "toistaa,", "ole", "hyvä?"],
            explanation: "'Voisitko toistaa, ole hyvä?' is the polite classroom/meeting phrase."
          },
          {
            id: "fi-u5-l2-q5",
            type: "audio_listen",
            phrase: "Haluaisin varata pöydän kahdelle",
            prompt: "Listen to the polite request and select what it means:",
            options: ["I would like to book a table for two", "We are two people", "Is this table free?", "Can we have the bill?"],
            correctAnswer: "I would like to book a table for two",
            explanation: "'Haluaisin varata...' is polite conditional."
          }
        ]
      },
      {
        id: "fi-u5-l3",
        title: "Lesson 3: Comparing Things (Komparatiivi & Superlatiivi)",
        description: "Form comparatives (-mpi) and superlatives (-in) to evaluate and contrast people and items.",
        xp: 40,
        questions: [
          {
            id: "fi-u5-l3-q1",
            type: "multiple_choice",
            prompt: "What is the comparative form of 'nopea' (fast)?",
            options: ["nopeampi", "nopein", "nopeasti", "nopean"],
            correctAnswer: "nopeampi",
            explanation: "Comparatives add '-mpi': 'nopea' -> 'nopeampi' (faster)."
          },
          {
            id: "fi-u5-l3-q2",
            type: "matching",
            prompt: "Match irregular comparison degrees:",
            pairs: [
              { native: "Hyvä", english: "Good" },
              { native: "Parempi", english: "Better" },
              { native: "Paras", english: "Best" },
              { native: "Suurin", english: "Biggest / Largest" }
            ]
          },
          {
            id: "fi-u5-l3-q3",
            type: "fill_blank",
            sentence: "Tämä talvi on paljon ___ (kylmä) kuin viime talvi.",
            missingWord: "kylmempi",
            options: ["kylmempi", "kylmin", "kylmää", "kylmä"],
            correctAnswer: "kylmempi",
            explanation: "Comparative comparison with 'kuin' (than): 'kylmempi kuin' (colder than)."
          },
          {
            id: "fi-u5-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'Helsinki is the biggest city in Finland'",
            tokens: ["Helsinki", "on", "Suomen", "suurin", "kaupunki", "pienin"],
            correctTokens: ["Helsinki", "on", "Suomen", "suurin", "kaupunki"],
            explanation: "'Suurin' is the superlative form of 'suuri' (big)."
          },
          {
            id: "fi-u5-l3-q5",
            type: "audio_listen",
            phrase: "Tämä vaihtoehto on huomattavasti halvempi",
            prompt: "Listen to the evaluation and select what it means:",
            options: ["This option is considerably cheaper", "This option is more expensive", "Both options are equal", "This is the best option"],
            correctAnswer: "This option is considerably cheaper",
            explanation: "'Halvempi' is comparative cheap."
          }
        ]
      },
      {
        id: "fi-u5-l4",
        title: "Lesson 4: Career Experience, CV & Personality Traits",
        description: "Describe previous employment, career achievements, and professional character traits.",
        xp: 40,
        questions: [
          {
            id: "fi-u5-l4-q1",
            type: "multiple_choice",
            prompt: "What does 'työkokemus' mean in Finnish?",
            options: ["Work experience", "Job interview", "Salary", "Contract"],
            correctAnswer: "Work experience",
            explanation: "'Työ' (work) + 'kokemus' (experience) = 'työkokemus'."
          },
          {
            id: "fi-u5-l4-q2",
            type: "matching",
            prompt: "Match professional character traits:",
            pairs: [
              { native: "Tunnollinen", english: "Conscientious / Diligent" },
              { native: "Joustava", english: "Flexible" },
              { native: "Luotettava", english: "Reliable / Trustworthy" },
              { native: "Oma-aloitteinen", english: "Proactive / Self-starter" }
            ]
          },
          {
            id: "fi-u5-l4-q3",
            type: "fill_blank",
            sentence: "Olen työskennellyt kolme vuotta ___ (as an engineer).",
            missingWord: "insinöörinä",
            options: ["insinöörinä", "insinööri", "insinöörille", "insinööriksi"],
            correctAnswer: "insinöörinä",
            explanation: "The essive case '-na/-nä' denotes role/capacity: 'insinöörinä' (working as an engineer)."
          },
          {
            id: "fi-u5-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'I am used to team work'",
            tokens: ["Olen", "tottunut", "tiimityöhön", "yksintyöhön"],
            correctTokens: ["Olen", "tottunut", "tiimityöhön"],
            explanation: "'Tottunut' takes illative: 'tottunut tiimityöhön'."
          },
          {
            id: "fi-u5-l4-q5",
            type: "audio_listen",
            phrase: "Odotan innolla uusia haasteita",
            prompt: "Listen to the cover letter phrase and select what it means:",
            options: ["I look forward to new challenges", "I am tired of my current job", "I have finished the project", "When can I start?"],
            correctAnswer: "I look forward to new challenges",
            explanation: "'Odotan innolla uusia haasteita' is a classic Finnish cover-letter sign-off."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level B1.1: Workplace & Social Integration (The YKI Threshold Part 1)
  // =========================================================================
  {
    id: "fi-unit-6",
    cefrLevel: "B1.1",
    title: "Unit 6 (B1.1): Workplace & Social Integration (YKI Threshold)",
    subtitle: "Passive voice (puhutaan/tehtiin), perfect tenses, workplace meetings, news headlines, and expressing opinions.",
    icon: "Compass",
    color: "#ec4899",
    lessons: [
      {
        id: "fi-u6-l1",
        title: "Lesson 1: The Passive Voice (Passiivi: Puhutaan, Tehtiin)",
        description: "Form and deploy the Finnish passive voice for general statements and colloquial 'we' speech.",
        xp: 45,
        questions: [
          {
            id: "fi-u6-l1-q1",
            type: "multiple_choice",
            prompt: "What does 'Suomessa juodaan paljon kahvia' mean?",
            options: [
              "In Finland a lot of coffee is drunk (people drink)",
              "I drink a lot of coffee in Finland",
              "We drank coffee yesterday",
              "Who drinks coffee?"
            ],
            correctAnswer: "In Finland a lot of coffee is drunk (people drink)",
            explanation: "'Juodaan' is the present passive of 'juoda' (it is drunk / one drinks)."
          },
          {
            id: "fi-u6-l1-q2",
            type: "matching",
            prompt: "Match active verbs with their present passives:",
            pairs: [
              { native: "Puhua -> Puhutaan", english: "To speak -> Is spoken" },
              { native: "Tehdä -> Tehdään", english: "To do -> Is done" },
              { native: "Syödä -> Syödään", english: "To eat -> Is eaten" },
              { native: "Mennä -> Mennään", english: "To go -> Let's go / Is gone" }
            ]
          },
          {
            id: "fi-u6-l1-q3",
            type: "fill_blank",
            sentence: "Eilisessä kokouksessa ___ (päättää) uudesta strategiasta.",
            missingWord: "päätettiin",
            options: ["päätettiin", "päätetään", "päätti", "päättivät"],
            correctAnswer: "päätettiin",
            explanation: "Past passive uses '-ttiin': 'päätettiin' (it was decided)."
          },
          {
            id: "fi-u6-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'Shall we go to lunch together?' (Spoken passive 'we')",
            tokens: ["Mennäänkö", "yhdessä", "lounaalle?", "syödään"],
            correctTokens: ["Mennäänkö", "yhdessä", "lounaalle?"],
            explanation: "In spoken Finnish, 'me mennään' / 'mennäänkö' replaces 'me menemme'."
          },
          {
            id: "fi-u6-l1-q5",
            type: "audio_listen",
            phrase: "Täällä puhutaan useita kieliä",
            prompt: "Listen to the sentence and select what it means:",
            options: ["Multiple languages are spoken here", "We speak only Finnish here", "Do you speak languages?", "I study several languages"],
            correctAnswer: "Multiple languages are spoken here",
            explanation: "'Puhutaan' is the impersonal passive."
          }
        ]
      },
      {
        id: "fi-u6-l2",
        title: "Lesson 2: Perfect & Pluperfect Tenses (Perfekti & Pluskvamperfekti)",
        description: "Express completed actions connected to the present ('olen asunut') or prior past ('olin tehnyt').",
        xp: 45,
        questions: [
          {
            id: "fi-u6-l2-q1",
            type: "multiple_choice",
            prompt: "How is the present perfect formed in Finnish?",
            options: [
              "Present of olla (olen/olet/on...) + nut/nyt/neet participle",
              "Imperfect verb + kin",
              "Verb stem + -nut",
              "Olin + infinitive"
            ],
            correctAnswer: "Present of olla (olen/olet/on...) + nut/nyt/neet participle",
            explanation: "'Olen asunut' = I have lived; 'He ovat nähneet' = They have seen."
          },
          {
            id: "fi-u6-l2-q2",
            type: "matching",
            prompt: "Match compound past tenses:",
            pairs: [
              { native: "Olen oppinut", english: "I have learned (Perfekti)" },
              { native: "En ole käynyt", english: "I have not visited (Neg. Perfekti)" },
              { native: "Olin jo syönyt", english: "I had already eaten (Pluskvamperfekti)" },
              { native: "Emme olleet nähneet", english: "We had not seen (Neg. Pluskvamperfekti)" }
            ]
          },
          {
            id: "fi-u6-l2-q3",
            type: "fill_blank",
            sentence: "Kuinka kauan olet ___ (asua) Suomessa?",
            missingWord: "asunut",
            options: ["asunut", "asui", "asua", "asut"],
            correctAnswer: "asunut",
            explanation: "'Olet asunut' is the 2nd person present perfect."
          },
          {
            id: "fi-u6-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'I have never been to Lapland'",
            tokens: ["En", "ole", "koskaan", "käynyt", "Lapissa", "olin"],
            correctTokens: ["En", "ole", "koskaan", "käynyt", "Lapissa"],
            explanation: "Negative perfect uses 'en ole' + participle: 'En ole käynyt'."
          },
          {
            id: "fi-u6-l2-q5",
            type: "audio_listen",
            phrase: "Olen asunut täällä viisi vuotta",
            prompt: "Listen to the statement and select what it means:",
            options: ["I have lived here for five years", "I lived here five years ago", "I will stay for five years", "Five years passed quickly"],
            correctAnswer: "I have lived here for five years",
            explanation: "'Olen asunut täällä viisi vuotta' denotes an ongoing span since the past."
          }
        ]
      },
      {
        id: "fi-u6-l3",
        title: "Lesson 3: Workplace Meetings & Expressing Opinions",
        description: "Contribute to office discussions, state opinions politely, and agree or disagree constructively.",
        xp: 45,
        questions: [
          {
            id: "fi-u6-l3-q1",
            type: "multiple_choice",
            prompt: "How do you start an opinion with 'In my opinion' in Finnish?",
            options: ["Minun mielestäni...", "Minun mielestä...", "Olen mieltä...", "Minulle mieli..."],
            correctAnswer: "Minun mielestäni...",
            explanation: "'Minun mielestäni...' (or 'Mielestäni...') is the standard polite opener for opinions."
          },
          {
            id: "fi-u6-l3-q2",
            type: "matching",
            prompt: "Match meeting phrases:",
            pairs: [
              { native: "Olen samaa mieltä", english: "I agree / I am of the same opinion" },
              { native: "Olen eri mieltä", english: "I disagree / I am of a different opinion" },
              { native: "Haluaisin lisätä, että...", english: "I would like to add that..." },
              { native: "Mitä mieltä olet?", english: "What is your opinion?" }
            ]
          },
          {
            id: "fi-u6-l3-q3",
            type: "fill_blank",
            sentence: "Mielestäni tämä ehdotus on erittäin ___ (hyvä).",
            missingWord: "hyvä",
            options: ["hyvä", "hyvää", "hyvän", "hyvässä"],
            correctAnswer: "hyvä",
            explanation: "Predicative agreement: 'ehdotus on erittäin hyvä'."
          },
          {
            id: "fi-u6-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'Can we agree on the deadline?'",
            tokens: ["Voimmeko", "sopia", "aikataulusta?", "kokouksesta"],
            correctTokens: ["Voimmeko", "sopia", "aikataulusta?"],
            explanation: "'Sopia' + elative (-sta): 'sopia aikataulusta'."
          },
          {
            id: "fi-u6-l3-q5",
            type: "audio_listen",
            phrase: "Tämä on tärkeä huomio",
            prompt: "Listen to the meeting comment and select what it means:",
            options: ["This is an important point/observation", "We disagree completely", "The meeting is over", "Please take notes"],
            correctAnswer: "This is an important point/observation",
            explanation: "'Tärkeä huomio' acknowledges an insightful contribution."
          }
        ]
      },
      {
        id: "fi-u6-l4",
        title: "Lesson 4: News Headlines & Reading Media Texts",
        description: "Analyze Finnish news items (Yle Uutiset selkosuomeksi), public announcements, and society briefs.",
        xp: 45,
        questions: [
          {
            id: "fi-u6-l4-q1",
            type: "multiple_choice",
            prompt: "What does 'eduskunta' mean in Finnish news?",
            options: ["The Finnish Parliament", "The City Council", "The Prime Minister", "The Supreme Court"],
            correctAnswer: "The Finnish Parliament",
            explanation: "'Eduskunta' is the Parliament of Finland (200 representatives)."
          },
          {
            id: "fi-u6-l4-q2",
            type: "matching",
            prompt: "Match news headline terms:",
            pairs: [
              { native: "Pääministeri", english: "Prime Minister" },
              { native: "Työttömyys", english: "Unemployment" },
              { native: "Ilmastonmuutos", english: "Climate change" },
              { native: "Talouden kasvu", english: "Economic growth" }
            ]
          },
          {
            id: "fi-u6-l4-q3",
            type: "fill_blank",
            sentence: "Uutiset kertovat, että inflaatio on ___ (laskea).",
            missingWord: "laskenut",
            options: ["laskenut", "laskee", "laski", "laskea"],
            correctAnswer: "laskenut",
            explanation: "Perfect participle: 'on laskenut' (has decreased)."
          },
          {
            id: "fi-u6-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'The government made a new decision'",
            tokens: ["Hallitus", "teki", "uuden", "päätöksen", "vanhan"],
            correctTokens: ["Hallitus", "teki", "uuden", "päätöksen"],
            explanation: "Total accusative object: 'uuden päätöksen'."
          },
          {
            id: "fi-u6-l4-q5",
            type: "audio_listen",
            phrase: "Ylen uutiset selkosuomeksi",
            prompt: "Listen to the media intro and select what it means:",
            options: ["Yle News in Plain Finnish", "Morning paper headlines", "Radio music broadcast", "Weather bulletin"],
            correctAnswer: "Yle News in Plain Finnish",
            explanation: "'Uutiset selkosuomeksi' is simplified Finnish news for learners."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level B1.2: Fluency in Familiar Domains (The YKI Threshold Part 2)
  // =========================================================================
  {
    id: "fi-unit-7",
    cefrLevel: "B1.2",
    title: "Unit 7 (B1.2): Fluency in Familiar Domains (YKI Threshold)",
    subtitle: "Relative clauses (joka/mikä), imperative mood, administrative phone calls (Kela/Vero), and formal letters.",
    icon: "Shield",
    color: "#6366f1",
    lessons: [
      {
        id: "fi-u7-l1",
        title: "Lesson 1: Complex Clauses & Relative Pronouns (Joka vs Mikä)",
        description: "Form subordinate clauses using connectors (että, koska, vaikka, jotta) and declensions of 'joka'.",
        xp: 45,
        questions: [
          {
            id: "fi-u7-l1-q1",
            type: "multiple_choice",
            prompt: "When is 'joka' used instead of 'mikä' as a relative pronoun?",
            options: [
              "When referring to a specific preceding noun",
              "When referring to a whole preceding clause or sentence",
              "Only in questions",
              "Only in past tense"
            ],
            correctAnswer: "When referring to a specific preceding noun",
            explanation: "'Joka' refers to a specific preceding head noun; 'mikä' refers to an entire preceding statement or superlative."
          },
          {
            id: "fi-u7-l1-q2",
            type: "matching",
            prompt: "Match conjunctions with their meanings:",
            pairs: [
              { native: "Koska", english: "Because / Since" },
              { native: "Vaikka", english: "Although / Even though" },
              { native: "Jotta", english: "In order that / So that" },
              { native: "Että", english: "That (conjunction)" }
            ]
          },
          {
            id: "fi-u7-l1-q3",
            type: "fill_blank",
            sentence: "Tämä on se kirja, ___ (which/that) luin eilen.",
            missingWord: "jonka",
            options: ["jonka", "joka", "jossa", "johon"],
            correctAnswer: "jonka",
            explanation: "Genitive/accusative of 'joka' is 'jonka' (the book that I read as a completed object)."
          },
          {
            id: "fi-u7-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'Although it is cold, we go for a walk'",
            tokens: ["Vaikka", "on", "kylmä,", "menemme", "kävelylle", "koska"],
            correctTokens: ["Vaikka", "on", "kylmä,", "menemme", "kävelylle"],
            explanation: "'Vaikka on kylmä' starts a concessive clause."
          },
          {
            id: "fi-u7-l1-q5",
            type: "audio_listen",
            phrase: "Hän sanoi, että tulee huomenna",
            prompt: "Listen to the indirect speech and select what it means:",
            options: ["He/She said that they will come tomorrow", "He/She asked if I will come", "Nobody is coming tomorrow", "I hope you come tomorrow"],
            correctAnswer: "He/She said that they will come tomorrow",
            explanation: "'että' introduces the indirect quotation."
          }
        ]
      },
      {
        id: "fi-u7-l2",
        title: "Lesson 2: The Imperative Mood (Käskymuoto: Tule! Tehkää!)",
        description: "Give polite instructions, workplace directives, and handle prohibitions ('Älä tee!').",
        xp: 45,
        questions: [
          {
            id: "fi-u7-l2-q1",
            type: "multiple_choice",
            prompt: "How do you form the negative command 'Don't do that!' to one person?",
            options: ["Älä tee sitä!", "Ei tee sitä!", "En tee sitä!", "Älkää tehkö sitä!"],
            correctAnswer: "Älä tee sitä!",
            explanation: "'Älä' + basic imperative stem: 'Älä tee!' ('Älkää tehkö!' is for plural/formal)."
          },
          {
            id: "fi-u7-l2-q2",
            type: "matching",
            prompt: "Match imperative forms:",
            pairs: [
              { native: "Tule tänne!", english: "Come here! (Singular)" },
              { native: "Tulkaa sisään!", english: "Come in! (Plural / Polite)" },
              { native: "Olkaa hyvä ja istukaa", english: "Please be seated" },
              { native: "Älkää unohtako", english: "Do not forget (Plural)" }
            ]
          },
          {
            id: "fi-u7-l2-q3",
            type: "fill_blank",
            sentence: "___ (Muistaa) ottaa passi mukaan!",
            missingWord: "Muista",
            options: ["Muista", "Muistat", "Muistakaa", "Muistatko"],
            correctAnswer: "Muista",
            explanation: "2nd person singular imperative drops the personal ending: muistaa -> 'Muista!'."
          },
          {
            id: "fi-u7-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'Please close the door after you'",
            tokens: ["Sulje", "ovi", "jälkeesi,", "ole", "hyvä", "avaa"],
            correctTokens: ["Sulje", "ovi", "jälkeesi,", "ole", "hyvä"],
            explanation: "'Sulje ovi jälkeesi' is polite imperative instruction."
          },
          {
            id: "fi-u7-l2-q5",
            type: "audio_listen",
            phrase: "Olkaa hyvät ja ottakaa vuoronumero",
            prompt: "Listen to the service instruction and select what it means:",
            options: ["Please take a queue number", "Please show your ID", "The office is now closed", "Wait outside"],
            correctAnswer: "Please take a queue number",
            explanation: "'Vuoronumero' is a queue number in Finnish public offices."
          }
        ]
      },
      {
        id: "fi-u7-l3",
        title: "Lesson 3: Administrative Services (Kela, Vero & DVV)",
        description: "Communicate with authorities, discuss benefits, tax cards, and municipal registration.",
        xp: 45,
        questions: [
          {
            id: "fi-u7-l3-q1",
            type: "multiple_choice",
            prompt: "What is 'verokortti' in Finland?",
            options: ["Tax card (specifying your withholding rate)", "Social security card", "Bank debit card", "Driver's license"],
            correctAnswer: "Tax card (specifying your withholding rate)",
            explanation: "'Verokortti' is delivered to your employer to calculate tax withholding."
          },
          {
            id: "fi-u7-l3-q2",
            type: "matching",
            prompt: "Match administrative terms:",
            pairs: [
              { native: "Kela", english: "Social Insurance Institution" },
              { native: "Henkilötunnus (hetu)", english: "Personal identity code" },
              { native: "Oleskelulupa", english: "Residence permit" },
              { native: "Vakituinen osoite", english: "Permanent address" }
            ]
          },
          {
            id: "fi-u7-l3-q3",
            type: "fill_blank",
            sentence: "Olen jättänyt hakemuksen ___ (for a residence permit).",
            missingWord: "oleskeluluvasta",
            options: ["oleskeluluvasta", "oleskelulupa", "oleskelulupaan", "oleskeluluvalla"],
            correctAnswer: "oleskeluluvasta",
            explanation: "'Hakemus' takes the elative case (-sta): 'hakemus oleskeluluvasta'."
          },
          {
            id: "fi-u7-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'I am calling regarding my application'",
            tokens: ["Soitan", "koskien", "omaa", "hakemustani", "taloa"],
            correctTokens: ["Soitan", "koskien", "omaa", "hakemustani"],
            explanation: "'Koskien' + partitive = concerning/regarding."
          },
          {
            id: "fi-u7-l3-q5",
            type: "audio_listen",
            phrase: "Päätös lähetetään teille postitse",
            prompt: "Listen to the official notice and select what it means:",
            options: ["The decision will be sent to you by mail", "Your application was rejected", "Please call us next week", "You must visit our office"],
            correctAnswer: "The decision will be sent to you by mail",
            explanation: "'Päätös lähetetään postitse' = the decision will be mailed."
          }
        ]
      },
      {
        id: "fi-u7-l4",
        title: "Lesson 4: Formal Email Writing & YKI Essay Structure",
        description: "Draft official emails, letters of complaint, and opinion essays required for YKI examination.",
        xp: 45,
        questions: [
          {
            id: "fi-u7-l4-q1",
            type: "multiple_choice",
            prompt: "What is the standard formal opening greeting for a Finnish official email?",
            options: ["Hei / Hyvää päivää", "Moi bro", "Kultaseni", "Morjens kaikille"],
            correctAnswer: "Hei / Hyvää päivää",
            explanation: "'Hei' followed by the recipient's name or title is standard in modern Finnish business correspondence."
          },
          {
            id: "fi-u7-l4-q2",
            type: "matching",
            prompt: "Match formal letter formulas:",
            pairs: [
              { native: "Ystävällisin terveisin", english: "Best regards / Sincerely" },
              { native: "Kirjoitan tiedustellakseni...", english: "I am writing to inquire..." },
              { native: "Ohessa on liitetiedosto", english: "Attached is the file" },
              { native: "Kiitos etukäteen avustanne", english: "Thank you in advance for your assistance" }
            ]
          },
          {
            id: "fi-u7-l4-q3",
            type: "fill_blank",
            sentence: "Vastaan mielelläni mahdollisiin ___ (questions).",
            missingWord: "kysymyksiin",
            options: ["kysymyksiin", "kysymys", "kysymyksiä", "kysymyksissä"],
            correctAnswer: "kysymyksiin",
            explanation: "'Vastata' takes illative: 'vastata kysymyksiin' (reply to questions)."
          },
          {
            id: "fi-u7-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'I would like to complain about the service'",
            tokens: ["Haluaisin", "valittaa", "saamastani", "palvelusta", "autosta"],
            correctTokens: ["Haluaisin", "valittaa", "saamastani", "palvelusta"],
            explanation: "'Valittaa' takes elative: 'valittaa palvelusta'."
          },
          {
            id: "fi-u7-l4-q5",
            type: "audio_listen",
            phrase: "Odotan vastaustanne mahdollisimman pian",
            prompt: "Listen to the closing line and select what it means:",
            options: ["I look forward to your reply as soon as possible", "I have not received any reply", "Please do not reply to this email", "Thank you for meeting me"],
            correctAnswer: "I look forward to your reply as soon as possible",
            explanation: "'Mahdollisimman pian' = as soon as possible."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level B2.1: Academic & Professional Discourse
  // =========================================================================
  {
    id: "fi-unit-8",
    cefrLevel: "B2.1",
    title: "Unit 8 (B2.1): Academic & Professional Discourse",
    subtitle: "Nominal style (substantiivityyli), advanced participles, politics, economics, and argumentative debates.",
    icon: "Flame",
    color: "#f43f5e",
    lessons: [
      {
        id: "fi-u8-l1",
        title: "Lesson 1: The Finnish Nominal Style (Substantiivityyli)",
        description: "Transform verbal actions into formal noun chains typical of legal and academic bureaucracy.",
        xp: 50,
        questions: [
          {
            id: "fi-u8-l1-q1",
            type: "multiple_choice",
            prompt: "What noun is formed from the verb 'osallistua' (to participate)?",
            options: ["Osallistuminen", "Osallisuus", "Osallinen", "Osallistus"],
            correctAnswer: "Osallistuminen",
            explanation: "Verb action nouns in Finnish are formed with the '-minen' suffix: osallistua -> osallistuminen."
          },
          {
            id: "fi-u8-l1-q2",
            type: "matching",
            prompt: "Match verbs with their formal action nouns (-minen):",
            pairs: [
              { native: "Kehittää -> Kehittäminen", english: "To develop -> Development" },
              { native: "Soveltaa -> Soveltaminen", english: "To apply -> Application" },
              { native: "Arvioida -> Arvioiminen", english: "To evaluate -> Evaluation" },
              { native: "Toteuttaa -> Toteuttaminen", english: "To implement -> Implementation" }
            ]
          },
          {
            id: "fi-u8-l1-q3",
            type: "fill_blank",
            sentence: "Hankkeen ___ (toteuttaa) aloitetaan ensi kuussa.",
            missingWord: "toteuttaminen",
            options: ["toteuttaminen", "toteuttaa", "toteutus", "toteutettu"],
            correctAnswer: "toteuttaminen",
            explanation: "Action noun: 'Hankkeen toteuttaminen aloitetaan...' (The implementation of the project begins...)."
          },
          {
            id: "fi-u8-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'Increasing efficiency is necessary'",
            tokens: ["Tehokkuuden", "lisääminen", "on", "välttämätöntä", "pieni"],
            correctTokens: ["Tehokkuuden", "lisääminen", "on", "välttämätöntä"],
            explanation: "Genitive modifier + -minen subject: 'Tehokkuuden lisääminen'."
          },
          {
            id: "fi-u8-l1-q5",
            type: "audio_listen",
            phrase: "Tutkimuksen tavoitteena on tulosten analysointi",
            prompt: "Listen to the research goal and select what it means:",
            options: ["The objective of the research is the analysis of the results", "The research has concluded", "The results are published", "The research lacks funding"],
            correctAnswer: "The objective of the research is the analysis of the results",
            explanation: "'Tavoitteena on...' is typical academic nominal style."
          }
        ]
      },
      {
        id: "fi-u8-l2",
        title: "Lesson 2: Advanced Participles as Modifiers (Partisiipit)",
        description: "Deploy present and past active/passive participles as pre-modifiers (tekevä, tehty, tekemä).",
        xp: 50,
        questions: [
          {
            id: "fi-u8-l2-q1",
            type: "multiple_choice",
            prompt: "What does the agent participle structure 'äidin leipoma leipä' mean?",
            options: ["The bread baked by mother", "Mother is baking bread", "The bread for mother", "Mother likes bread"],
            correctAnswer: "The bread baked by mother",
            explanation: "The agent participle '-mA' indicates who performed the passive action: 'äidin leipoma leipä'."
          },
          {
            id: "fi-u8-l2-q2",
            type: "matching",
            prompt: "Match participle structures:",
            pairs: [
              { native: "Tuleva vuosi", english: "The coming year (1st participle -vA)" },
              { native: "Päättynyt kausi", english: "The ended season (2nd participle -nUt)" },
              { native: "Käsitelty asia", english: "The handled matter (past passive -tU)" },
              { native: "Opettajan suosittelema kirja", english: "The book recommended by teacher (agent -mA)" }
            ]
          },
          {
            id: "fi-u8-l2-q3",
            type: "fill_blank",
            sentence: "Tämä on hallituksen ___ (tehdä) päätös.",
            missingWord: "tekemä",
            options: ["tekemä", "tehty", "tekevä", "tekee"],
            correctAnswer: "tekemä",
            explanation: "Agent participle with genitive 'hallituksen': 'hallituksen tekemä päätös'."
          },
          {
            id: "fi-u8-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'The meeting scheduled for next week is cancelled'",
            tokens: ["Ensi", "viikolle", "suunniteltu", "kokous", "on", "peruttu"],
            correctTokens: ["Ensi", "viikolle", "suunniteltu", "kokous", "on", "peruttu"],
            explanation: "'Suunniteltu' (past passive participle) acts as pre-modifier."
          },
          {
            id: "fi-u8-l2-q5",
            type: "audio_listen",
            phrase: "Kaikki saapuneet hakemukset käsitellään",
            prompt: "Listen to the administrative phrase and select what it means:",
            options: ["All received applications will be processed", "Applications are no longer accepted", "Some applications were lost", "The deadline is extended"],
            correctAnswer: "All received applications will be processed",
            explanation: "'Saapuneet' is active past participle of 'saapua'."
          }
        ]
      },
      {
        id: "fi-u8-l3",
        title: "Lesson 3: Economics, Technology & Environmental Policy",
        description: "Engage in discourse regarding circular economy, sustainability, AI, and Nordic tech.",
        xp: 50,
        questions: [
          {
            id: "fi-u8-l3-q1",
            type: "multiple_choice",
            prompt: "What does 'kiertotalous' mean in Finnish policy?",
            options: ["Circular economy", "Free market", "Inflation", "Tax revenue"],
            correctAnswer: "Circular economy",
            explanation: "'Kierto' (circulation/cycle) + 'talous' (economy) = 'kiertotalous'."
          },
          {
            id: "fi-u8-l3-q2",
            type: "matching",
            prompt: "Match sustainability and tech terms:",
            pairs: [
              { native: "Uusiutuva energia", english: "Renewable energy" },
              { native: "Tekoäly", english: "Artificial intelligence" },
              { native: "Hiilijalanjälki", english: "Carbon footprint" },
              { native: "Kestävä kehitys", english: "Sustainable development" }
            ]
          },
          {
            id: "fi-u8-l3-q3",
            type: "fill_blank",
            sentence: "Tavoitteena on saavuttaa ___ (carbon neutrality) vuoteen 2035 mennessä.",
            missingWord: "hiilineutraalius",
            options: ["hiilineutraalius", "hiilijalanjälki", "ympäristö", "energia"],
            correctAnswer: "hiilineutraalius",
            explanation: "Finland has a statutory goal of 'hiilineutraalius' by 2035."
          },
          {
            id: "fi-u8-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'Technological development creates new opportunities'",
            tokens: ["Teknologinen", "kehitys", "luo", "uusia", "mahdollisuuksia"],
            correctTokens: ["Teknologinen", "kehitys", "luo", "uusia", "mahdollisuuksia"],
            explanation: "'Luo uusia mahdollisuuksia' = creates new opportunities."
          },
          {
            id: "fi-u8-l3-q5",
            type: "audio_listen",
            phrase: "Vihreä siirtymä vaatii merkittäviä investointeja",
            prompt: "Listen to the economic statement and select what it means:",
            options: ["The green transition requires significant investments", "Energy prices are dropping", "The transition has stalled", "New taxes are introduced"],
            correctAnswer: "The green transition requires significant investments",
            explanation: "'Vihreä siirtymä' = the green transition."
          }
        ]
      },
      {
        id: "fi-u8-l4",
        title: "Lesson 4: Academic Debate & Structured Argumentation",
        description: "Deploy discourse connectors (toisaalta... toisaalta, sen sijaan, siitä huolimatta) in debates.",
        xp: 50,
        questions: [
          {
            id: "fi-u8-l4-q1",
            type: "multiple_choice",
            prompt: "How do you say 'On one hand... on the other hand' in Finnish?",
            options: ["Toisaalta... toisaalta", "Yhtäältä... myös", "Ehkä... mutta", "Ensin... sitten"],
            correctAnswer: "Toisaalta... toisaalta",
            explanation: "'Toisaalta... toisaalta' introduces counterbalancing points in formal argumentation."
          },
          {
            id: "fi-u8-l4-q2",
            type: "matching",
            prompt: "Match discourse connectors:",
            pairs: [
              { native: "Sen sijaan", english: "Instead / On the contrary" },
              { native: "Siitä huolimatta", english: "Nevertheless / Despite that" },
              { native: "Erityisesti", english: "Particularly / Especially" },
              { native: "Yhteenvetona", english: "In conclusion / In summary" }
            ]
          },
          {
            id: "fi-u8-l4-q3",
            type: "fill_blank",
            sentence: "Kustannukset kasvoivat, mutta ___ (siitä huolimatta) projekti valmistui ajallaan.",
            missingWord: "siitä huolimatta",
            options: ["siitä huolimatta", "koska", "vaikka", "jotta"],
            correctAnswer: "siitä huolimatta",
            explanation: "'Siitä huolimatta' = despite that / nevertheless."
          },
          {
            id: "fi-u8-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'The research provides strong evidence for the claim'",
            tokens: ["Tutkimus", "tarjoaa", "vahvoja", "todisteita", "väitteen", "tueksi"],
            correctTokens: ["Tutkimus", "tarjoaa", "vahvoja", "todisteita", "väitteen", "tueksi"],
            explanation: "'Väitteen tueksi' = in support of the assertion."
          },
          {
            id: "fi-u8-l4-q5",
            type: "audio_listen",
            phrase: "Tarkastellaan asiaa toisesta näkökulmasta",
            prompt: "Listen to the debate pivot and select what it means:",
            options: ["Let us examine the issue from another perspective", "This concludes the argument", "Nobody agrees with this", "Please rephrase your claim"],
            correctAnswer: "Let us examine the issue from another perspective",
            explanation: "'Toisesta näkökulmasta' = from another perspective."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level B2.2: Nuance & Precision (Colloquial & Dialects)
  // =========================================================================
  {
    id: "fi-unit-9",
    cefrLevel: "B2.2",
    title: "Unit 9 (B2.2): Nuance & Precision (Colloquial & Dialects)",
    subtitle: "Rare grammatical cases (abessiivi, komitatiivi), spoken puhekieli vs kirjakieli, regional dialects, and deadpan irony.",
    icon: "Smile",
    color: "#a855f7",
    lessons: [
      {
        id: "fi-u9-l1",
        title: "Lesson 1: Rare Finnish Cases (Abessiivi, Komitatiivi, Instruktiivi)",
        description: "Master marginal literary cases: Abessive (-tta, without), Comitative (-ine, with), Instructive (-in, by means of).",
        xp: 50,
        questions: [
          {
            id: "fi-u9-l1-q1",
            type: "multiple_choice",
            prompt: "What does the abessive case (-tta/-ttä) express?",
            options: ["Without something (lack / absence)", "Together with", "Inside", "Towards"],
            correctAnswer: "Without something (lack / absence)",
            explanation: "Abessive means 'without': 'rahatta' = without money; 'syyttä' = without reason."
          },
          {
            id: "fi-u9-l2-q2",
            type: "matching",
            prompt: "Match rare Finnish cases with examples:",
            pairs: [
              { native: "Rahatta (Abessiivi)", english: "Without money (-tta)" },
              { native: "Lapsineen (Komitatiivi)", english: "With his/her children (-ine + px)" },
              { native: "Omin silmin (Instruktiivi)", english: "With one's own eyes (-in)" },
              { native: "Päättäväisin mielin (Instruktiivi)", english: "With determined minds (-in)" }
            ]
          },
          {
            id: "fi-u9-l1-q3",
            type: "fill_blank",
            sentence: "Näin tapahtuman omin ___ (eyes, instructive).",
            missingWord: "silmin",
            options: ["silmin", "silmillä", "silmissä", "silmät"],
            correctAnswer: "silmin",
            explanation: "Instructive plural '-in': 'omin silmin' (with my own eyes)."
          },
          {
            id: "fi-u9-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'President arrived with his spouse'",
            tokens: ["Presidentti", "saapui", "puolisoineen", "yksin"],
            correctTokens: ["Presidentti", "saapui", "puolisoineen"],
            explanation: "Comitative case: 'puoliso-ine-en' = with his/her spouse."
          },
          {
            id: "fi-u9-l1-q5",
            type: "audio_listen",
            phrase: "Hän joutui lähtemään tyhjin käsin",
            prompt: "Listen to the idiom and select what it means:",
            options: ["He/She had to leave empty-handed", "He/She left quickly", "He/She brought many gifts", "He/She forgot their keys"],
            correctAnswer: "He/She had to leave empty-handed",
            explanation: "'Tyhjin käsin' = empty-handed (instructive case)."
          }
        ]
      },
      {
        id: "fi-u9-l2",
        title: "Lesson 2: Spoken vs Written Finnish (Puhekieli vs Kirjakieli)",
        description: "Navigate natural reductions in everyday speech (mä/sä, oon/oot, tuun, meen, toi, noi).",
        xp: 50,
        questions: [
          {
            id: "fi-u9-l2-q1",
            type: "multiple_choice",
            prompt: "What is the standard written equivalent (kirjakieli) of spoken 'Mä tuun huomenna'?",
            options: ["Minä tulen huomenna", "Me tulemme huomenna", "Minä menen huomenna", "Hän tulee huomenna"],
            correctAnswer: "Minä tulen huomenna",
            explanation: "In puhekieli: 'minä' -> 'mä' and 'tulen' -> 'tuun'."
          },
          {
            id: "fi-u9-l2-q2",
            type: "matching",
            prompt: "Match spoken Finnish with formal written equivalents:",
            pairs: [
              { native: "Mä oon / Sä oot", english: "Minä olen / Sinä olet" },
              { native: "Me mennään", english: "Me menemme" },
              { native: "Toi / Noi", english: "Tuo (that) / Nuo (those)" },
              { native: "Ei tartte", english: "Ei tarvitse (no need)" }
            ]
          },
          {
            id: "fi-u9-l2-q3",
            type: "fill_blank",
            sentence: "Tiedätkö sä, missä ___ (ne / he ovat) nyt?",
            missingWord: "ne",
            options: ["ne", "he", "nämä", "tämä"],
            correctAnswer: "ne",
            explanation: "In spoken Finnish, people are almost universally referred to as 'ne' rather than 'he'."
          },
          {
            id: "fi-u9-l2-q4",
            type: "scramble",
            prompt: "Assemble spoken: 'I can't come today'",
            tokens: ["Mä", "en", "pääse", "tänään", "tule"],
            correctTokens: ["Mä", "en", "pääse", "tänään"],
            explanation: "'Päästä' = to be able to make it / reach somewhere."
          },
          {
            id: "fi-u9-l2-q5",
            type: "audio_listen",
            phrase: "Ootsä nähny mun puhelinta?",
            prompt: "Listen to the casual spoken question and select what it means:",
            options: ["Have you seen my phone?", "Where is your phone?", "Did you buy a phone?", "My phone is ringing"],
            correctAnswer: "Have you seen my phone?",
            explanation: "'Ootsä nähny mun puhelinta?' = 'Oletko sinä nähnyt minun puhelintani?'."
          }
        ]
      },
      {
        id: "fi-u9-l3",
        title: "Lesson 3: Regional Dialects of Finland (Murteet)",
        description: "Recognize phonetic and lexical shifts across Helsinki slang, Savo, Ostrobothnia, and Turku.",
        xp: 50,
        questions: [
          {
            id: "fi-u9-l3-q1",
            type: "multiple_choice",
            prompt: "Which Finnish dialect region is famous for using 'mie' and 'sie' instead of 'minä' and 'sinä'?",
            options: ["Eastern dialects (Karjala / Kaakkoismurteet)", "Turku south-western", "Helsinki Stadi slang", "Vaasa coastal"],
            correctAnswer: "Eastern dialects (Karjala / Kaakkoismurteet)",
            explanation: "'Mie' and 'sie' are characteristic of southeastern/Karelian dialects."
          },
          {
            id: "fi-u9-l3-q2",
            type: "matching",
            prompt: "Match dialect words with standard Finnish:",
            pairs: [
              { native: "Fiksu (Stadi slang)", english: "Älykäs / Smart" },
              { native: "Morjens (Tampere)", english: "Hei / Hello" },
              { native: "Katoppa (Pohjanmaa)", english: "Katsohan / Look at that" },
              { native: "Kyllähän se (Savo)", english: "Niinpä / Indeed" }
            ]
          },
          {
            id: "fi-u9-l3-q3",
            type: "fill_blank",
            sentence: "Stadin slangissa spora tarkoittaa ___ (tram).",
            missingWord: "raitiovaunua",
            options: ["raitiovaunua", "bussia", "junaa", "laivaa"],
            correctAnswer: "raitiovaunua",
            explanation: "In Helsinki slang, 'spora' is a tram / streetcar."
          },
          {
            id: "fi-u9-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'Are you coming with us?' (Eastern dialect mie/sie)",
            tokens: ["Tuukko", "sie", "meijän", "mukkaan?", "minä"],
            correctTokens: ["Tuukko", "sie", "meijän", "mukkaan?"],
            explanation: "Dialectal lengthening and 'sie' pronoun."
          },
          {
            id: "fi-u9-l3-q5",
            type: "audio_listen",
            phrase: "Terveisiä Tampereelta nääs!",
            prompt: "Listen to the famous regional greeting and identify the city:",
            options: ["Tampere", "Turku", "Oulu", "Rovaniemi"],
            correctAnswer: "Tampere",
            explanation: "'Nääs' is the iconic particle of the Tampere dialect."
          }
        ]
      },
      {
        id: "fi-u9-l4",
        title: "Lesson 4: Deadpan Irony, Humor & Understatement",
        description: "Grasp subtle Finnish conversational irony, dry humor, and cultural understatement.",
        xp: 50,
        questions: [
          {
            id: "fi-u9-l4-q1",
            type: "multiple_choice",
            prompt: "If a Finn looks at a blizzard outside and mutters 'Keli kohdillaan' (weather is spot-on), what does it mean?",
            options: [
              "Sarcastic irony: the weather is awful",
              "Genuine joy: they love blizzards",
              "They are predicting sunshine",
              "They are canceling work"
            ],
            correctAnswer: "Sarcastic irony: the weather is awful",
            explanation: "Finnish deadpan humor relies heavily on stating the absolute opposite with an unblinking straight face."
          },
          {
            id: "fi-u9-l4-q2",
            type: "matching",
            prompt: "Match ironic expressions with their actual intended meanings:",
            pairs: [
              { native: "'Ei mennyt ihan putkeen'", english: "It was a total disaster" },
              { native: "'Ihan kelpo suoritus'", english: "Incredible, flawless job" },
              { native: "'Pikkusen viileä'", english: "It is -25°C freezing cold" },
              { native: "'Onhan tässä nähty'", english: "I am fed up with this" }
            ]
          },
          {
            id: "fi-u9-l4-q3",
            type: "fill_blank",
            sentence: "Kun projekti epäonnistui täysin, hän sanoi: 'No, eipä mennyt kuin ___ (Strömsössä)'.",
            missingWord: "Strömsössä",
            options: ["Strömsössä", "Helsingissä", "saunassa", "metsässä"],
            correctAnswer: "Strömsössä",
            explanation: "'Ei mennyt niin kuin Strömsössä' is a legendary idiom meaning 'It didn't go smoothly like on the idyllic TV cooking show'."
          },
          {
            id: "fi-u9-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'Well, look at that, it started raining'",
            tokens: ["No", "niin,", "sieltähän", "se", "sade", "tuli"],
            correctTokens: ["No", "niin,", "sieltähän", "se", "sade", "tuli"],
            explanation: "Classic fatalistic Finnish acceptance of weather."
          },
          {
            id: "fi-u9-l4-q5",
            type: "audio_listen",
            phrase: "Tässäpä vasta mukava yllätys",
            prompt: "Listen to the ironic tone and determine what happened:",
            options: ["Something went unexpectedly wrong", "They received a wonderful birthday gift", "The sun came out", "They won the lottery"],
            correctAnswer: "Something went unexpectedly wrong",
            explanation: "'Vasta mukava yllätys' is almost always sarcastic in difficult situations."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Level C1 & C2: Advanced & Proficient Mastery
  // =========================================================================
  {
    id: "fi-unit-10",
    cefrLevel: "C1-C2",
    title: "Unit 10 (C1–C2): Advanced Mastery & Literary Fluency",
    subtitle: "Complex participial shortenings (lauseenvastikkeet), legal syntax, public lectures, and native cultural mastery.",
    icon: "GraduationCap",
    color: "#e11d48",
    lessons: [
      {
        id: "fi-u10-l1",
        title: "Lesson 1: Participial Replacements (Lauseenvastikkeet)",
        description: "Master temporal, final, and modal clause shortenings (-essaan, -akseen, -en).",
        xp: 60,
        questions: [
          {
            id: "fi-u10-l1-q1",
            type: "multiple_choice",
            prompt: "What does the temporal construction 'Hänen saapuessaan' replace?",
            options: [
              "'Kun hän saapui' (When he/she arrived)",
              "'Jotta hän saapuu' (So that he/she arrives)",
              "'Koska hän saapui' (Because he/she arrived)",
              "'Jos hän saapuu' (If he/she arrives)"
            ],
            correctAnswer: "'Kun hän saapui' (When he/she arrived)",
            explanation: "The inessive 2nd infinitive replacement 'tehdessä' replaces a temporal 'kun' clause."
          },
          {
            id: "fi-u10-l1-q2",
            type: "matching",
            prompt: "Match participial clause contractions:",
            pairs: [
              { native: "Tullessaan kotiin", english: "When arriving home (-essA)" },
              { native: "Saavuttaakseen tavoitteen", english: "In order to reach the goal (-Akseen)" },
              { native: "Juosten", english: "By running (1st inf instructive -en)" },
              { native: "Muistaakseni", english: "As far as I remember (-kseni)" }
            ]
          },
          {
            id: "fi-u10-l1-q3",
            type: "fill_blank",
            sentence: "Hän heräsi aikaisin ___ (saada) junan kiinni.",
            missingWord: "saadakseen",
            options: ["saadakseen", "saada", "sai", "saadessaan"],
            correctAnswer: "saadakseen",
            explanation: "Final clause contraction: 'saada' + -kseen = 'saadakseen' (in order to catch)."
          },
          {
            id: "fi-u10-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'As far as I know, the decision has been made'",
            tokens: ["Tietääkseni", "päätös", "on", "jo", "tehty", "tietäen"],
            correctTokens: ["Tietääkseni", "päätös", "on", "jo", "tehty"],
            explanation: "'Tietääkseni' = as far as I know."
          },
          {
            id: "fi-u10-l1-q5",
            type: "audio_listen",
            phrase: "Kävelin kotiin laulellen",
            prompt: "Listen to the modal shortening and select what it means:",
            options: ["I walked home while singing (singingly)", "I sang because I was home", "I walked home quietly", "I will sing at home"],
            correctAnswer: "I walked home while singing (singingly)",
            explanation: "'-llen' expresses simultaneous modal manner."
          }
        ]
      },
      {
        id: "fi-u10-l2",
        title: "Lesson 2: Legal, Legislative & Scientific Terminology",
        description: "Analyze statutory legislation, administrative acts, constitutional statutes, and peer-reviewed papers.",
        xp: 60,
        questions: [
          {
            id: "fi-u10-l2-q1",
            type: "multiple_choice",
            prompt: "What does 'perustuslaki' mean in Finnish legal framework?",
            options: ["The Constitution of Finland", "Criminal Code", "Civil Law", "Municipal By-law"],
            correctAnswer: "The Constitution of Finland",
            explanation: "'Perustuslaki' is the fundamental constitutional law of the state."
          },
          {
            id: "fi-u10-l2-q2",
            type: "matching",
            prompt: "Match advanced statutory terms:",
            pairs: [
              { native: "Lainsäädäntö", english: "Legislation" },
              { native: "Valituskelpoinen", english: "Appealable (legal decision)" },
              { native: "Oikeusturva", english: "Legal protection / Due process" },
              { native: "Sovellettava laki", english: "Applicable law" }
            ]
          },
          {
            id: "fi-u10-l2-q3",
            type: "fill_blank",
            sentence: "Päätös tulee voimaan heti sen ___ (publish/promulgation) jälkeen.",
            missingWord: "julkistamisen",
            options: ["julkistamisen", "julkistaa", "julkaistu", "julki"],
            correctAnswer: "julkistamisen",
            explanation: "Genitive action noun: 'julkistamisen jälkeen' (after promulgation)."
          },
          {
            id: "fi-u10-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'The law guarantees equal treatment for all citizens'",
            tokens: ["Laki", "takaa", "yhdenvertaisen", "kohtelun", "kaikille", "kansalaisille"],
            correctTokens: ["Laki", "takaa", "yhdenvertaisen", "kohtelun", "kaikille", "kansalaisille"],
            explanation: "'Yhdenvertainen kohtelu' = equal treatment under the law."
          },
          {
            id: "fi-u10-l2-q5",
            type: "audio_listen",
            phrase: "Tämä asetus astuu voimaan ensi vuoden alusta",
            prompt: "Listen to the statutory announcement and select what it means:",
            options: ["This decree enters into force from the beginning of next year", "The decree was repealed", "The law was submitted for debate", "The proposal was postponed"],
            correctAnswer: "This decree enters into force from the beginning of next year",
            explanation: "'Asetus astuu voimaan...' is standard legal decree enactment phrasing."
          }
        ]
      },
      {
        id: "fi-u10-l3",
        title: "Lesson 3: Rhetorical Public Speaking & Keynote Delivery",
        description: "Craft persuasive speeches, handle media inquiries at press conferences, and deliver academic keynotes.",
        xp: 60,
        questions: [
          {
            id: "fi-u10-l3-q1",
            type: "multiple_choice",
            prompt: "What is an impactful Finnish phrase to mark an imperative milestone in a keynote address?",
            options: [
              "Olemme saapuneet merkittävään käännekohtaan",
              "Moi kaikki, mitä kuuluu?",
              "En tiedä mitä sanoa",
              "Lopetetaanpa tähän"
            ],
            correctAnswer: "Olemme saapuneet merkittävään käännekohtaan",
            explanation: "'Merkittävä käännekohta' = a significant turning point."
          },
          {
            id: "fi-u10-l3-q2",
            type: "matching",
            prompt: "Match rhetorical oratory phrases:",
            pairs: [
              { native: "Arvoisa yleisö", english: "Honored audience / Distinguished guests" },
              { native: "Haluaisin tähdentää", english: "I would like to emphasize" },
              { native: "Kiistaton tosiasia", english: "An indisputable fact" },
              { native: "Kaiken kaikkiaan", english: "All things considered" }
            ]
          },
          {
            id: "fi-u3-l3-q3",
            type: "fill_blank",
            sentence: "Arvoisat kuulijat, kiitän teitä saamastani ___ (honor/kunnia).",
            missingWord: "kunniasta",
            options: ["kunniasta", "kunnia", "kunnian", "kunniaa"],
            correctAnswer: "kunniasta",
            explanation: "'Kiittää' takes the elative case: 'kiitän kunniasta' (thank you for the honor)."
          },
          {
            id: "fi-u10-l3-q4",
            type: "scramble",
            prompt: "Assemble: 'We must face these challenges together with courage'",
            tokens: ["Meidän", "on", "kohdattava", "nämä", "haasteet", "yhdessä", "rohkeasti"],
            correctTokens: ["Meidän", "on", "kohdattava", "nämä", "haasteet", "yhdessä", "rohkeasti"],
            explanation: "Passive 1st participle necessity structure: 'on kohdattava'."
          },
          {
            id: "fi-u10-l3-q5",
            type: "audio_listen",
            phrase: "Sallikaa minun esittää vilpittömät kiitokseni",
            prompt: "Listen to the formal speech line and select what it means:",
            options: ["Allow me to express my sincere gratitude", "I must decline this request", "Please stop applauding", "I will now introduce our next speaker"],
            correctAnswer: "Allow me to express my sincere gratitude",
            explanation: "'Sallikaa minun esittää...' = Allow me to present/express..."
          }
        ]
      },
      {
        id: "fi-u10-l4",
        title: "Lesson 4: Native-Equivalent Cultural & Creative Mastery (C2)",
        description: "Analyze classical literature (Kalevala, Aleksis Kivi, Väinö Linna) and achieve effortless stylistic command.",
        xp: 60,
        questions: [
          {
            id: "fi-u10-l4-q1",
            type: "multiple_choice",
            prompt: "Who wrote the foundational modern Finnish novel 'Seitsemän veljestä' (Seven Brothers)?",
            options: ["Aleksis Kivi", "Mika Waltari", "Väinö Linna", "Tove Jansson"],
            correctAnswer: "Aleksis Kivi",
            explanation: "Aleksis Kivi published 'Seitsemän veljestä' in 1870, cementing Finnish as a literary language."
          },
          {
            id: "fi-u10-l4-q2",
            type: "matching",
            prompt: "Match Finnish literary masterpieces with their authors:",
            pairs: [
              { native: "Kalevala", english: "Elias Lönnrot (National Epic)" },
              { native: "Tuntematon sotilas", english: "Väinö Linna" },
              { native: "Sinuhe egyptiläinen", english: "Mika Waltari" },
              { native: "Muumit", english: "Tove Jansson" }
            ]
          },
          {
            id: "fi-u10-l4-q3",
            type: "fill_blank",
            sentence: "'Alussa olivat suo, kuokka ja ___' (Väinö Linna's legendary opening).",
            missingWord: "Jussi",
            options: ["Jussi", "Matti", "Suomi", "metsä"],
            correctAnswer: "Jussi",
            explanation: "The iconic opening line of 'Täällä Pohjantähden alla': 'In the beginning there were the swamp, the hoe—and Jussi'."
          },
          {
            id: "fi-u10-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'Language is the mirror of culture and people'",
            tokens: ["Kieli", "on", "kulttuurin", "ja", "kansan", "peili"],
            correctTokens: ["Kieli", "on", "kulttuurin", "ja", "kansan", "peili"],
            explanation: "Literary philosophical synthesis: 'Kieli on kulttuurin ja kansan peili'."
          },
          {
            id: "fi-u10-l4-q5",
            type: "audio_listen",
            phrase: "Onnellinen on se, joka osaa arvostaa hiljaisuutta",
            prompt: "Listen to the philosophical thought and select what it means:",
            options: ["Happy is the one who knows how to appreciate silence", "Silence is golden in the forest", "One must never remain silent", "The happiest people live in Finland"],
            correctAnswer: "Happy is the one who knows how to appreciate silence",
            explanation: "Reflects the quintessential Finnish cultural valuation of peace and quiet."
          }
        ]
      }
    ]
  }
];
