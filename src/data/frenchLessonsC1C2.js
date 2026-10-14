// =========================================================================
// French Levels C1 & C2: Autonomous & Mastery
// Level C1: Units 21 to 24 (Idiomatic Mastery, Academic Writing, Abstract Concepts, Negotiation)
// Level C2: Units 25 to 27 (Linguistic Flexibility, Literary Appreciation, Simultaneous Interpretation)
// =========================================================================

export const frenchC1C2Units = [
  // -----------------------------------------------------------------------
  // Unit 21 (C1 Unit 1): Idiomatic Mastery
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-21",
    cefrLevel: "C1",
    title: "Unit 21 (C1): Idiomatic Mastery",
    subtitle: "Understanding and using colloquialisms, slang (argot), and subtle cultural metaphors.",
    icon: "Sparkles",
    color: "#7e22ce",
    lessons: [
      {
        id: "fr-u21-l1",
        title: "Lesson 1: French Idioms, Verlan & Everyday Argot",
        description: "Decipher iconic colloquialisms ('poser un lapin', 'avoir le coup de foudre', 'tomber dans les pommes') and modern urban verlan ('chelou', 'ouf', 'relou').",
        xp: 40,
        questions: [
          {
            id: "fr-u21-l1-q1",
            type: "matching",
            prompt: "Match colorful French idioms with their true meanings:",
            pairs: [
              { native: "Poser un lapin à quelqu'un", english: "To stand someone up / not show up to a date" },
              { native: "Tomber dans les pommes", english: "To faint / pass out" },
              { native: "Avoir le cafard", english: "To feel depressed / have the blues" },
              { native: "Coûter les yeux de la tête", english: "To cost an arm and a leg / extremely expensive" }
            ]
          },
          {
            id: "fr-u21-l1-q2",
            type: "matching",
            prompt: "Match French verlan (inverted slang) words with standard French:",
            pairs: [
              { native: "C'est ouf (fou)", english: "That's crazy / incredible" },
              { native: "C'est chelou (louche)", english: "That's sketchy / suspicious / weird" },
              { native: "C'est relou (lourd)", english: "That's annoying / burdensome" },
              { native: "Une meuf (femme)", english: "A woman / girl" }
            ]
          },
          {
            id: "fr-u21-l1-q3",
            type: "audio_listen",
            phrase: "Ne t'inquiète pas, c'est simple comme bonjour !",
            prompt: "What does the idiom 'simple comme bonjour' mean?",
            options: [
              "As easy as pie / very simple",
              "Complicated and polite",
              "Takes all morning to do",
              "Requires a formal greeting"
            ],
            correctAnswer: "As easy as pie / very simple",
            explanation: "'Simple comme bonjour' is the French equivalent of 'as easy as pie'."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 22 (C1 Unit 2): Formal & Academic Writing
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-22",
    cefrLevel: "C1",
    title: "Unit 22 (C1): Formal & Academic Writing",
    subtitle: "Mastering the traditional French synthèse de documents and formal letter writing.",
    icon: "BookOpen",
    color: "#1e3a8a",
    lessons: [
      {
        id: "fr-u22-l1",
        title: "Lesson 1: The French Synthèse & Diplomatic Correspondence",
        description: "Master objective synthesis of contrasting texts, problematique design, and refined closing formulas of courtesy.",
        xp: 40,
        questions: [
          {
            id: "fr-u22-l1-q1",
            type: "matching",
            prompt: "Match formal French letter closing formulas with contexts:",
            pairs: [
              { native: "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées", english: "Most standard formal professional closing" },
              { native: "Je vous prie d'agréer l'assurance de ma parfaite considération", english: "High executive or administrative deference" },
              { native: "Dans l'attente de votre réponse bienveillante", english: "Awaiting your kind reply" },
              { native: "Bien cordialement", english: "Warm regards (semi-formal business)" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 23 (C1 Unit 3): Abstract Concepts
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-23",
    cefrLevel: "C1",
    title: "Unit 23 (C1): Abstract Concepts",
    subtitle: "Discussing philosophy, ethics, psychology, and complex societal shifts.",
    icon: "GraduationCap",
    color: "#4338ca",
    lessons: [
      {
        id: "fr-u23-l1",
        title: "Lesson 1: Philosophical Inquiry & Ethical Dilemmas",
        description: "Explore existentialism (Sartre, Camus), bioethics, artificial intelligence governance, and societal paradigms.",
        xp: 40,
        questions: [
          {
            id: "fr-u23-l1-q1",
            type: "matching",
            prompt: "Match philosophical concepts with French definitions:",
            pairs: [
              { native: "L'existentialisme (L'existence précède l'essence)", english: "Existentialism: existence precedes essence (Sartre)" },
              { native: "L'éthique déontologique", english: "Duty-based / deontological ethics" },
              { native: "L'aliénation sociale", english: "Social alienation / estrangement" },
              { native: "La quête de sens", english: "The quest for meaning" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 24 (C1 Unit 4): Professional Negotiation
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-24",
    cefrLevel: "C1",
    title: "Unit 24 (C1): Professional Negotiation",
    subtitle: "Conducting business meetings, diplomatic nuance, and persuasive corporate communication.",
    icon: "Award",
    color: "#0f766e",
    lessons: [
      {
        id: "fr-u24-l1",
        title: "Lesson 1: Diplomatic Compromise & Strategic Bargaining",
        description: "Navigate high-stakes commercial disputes, find middle ground (trouver un compromis), and close contracts.",
        xp: 40,
        questions: [
          {
            id: "fr-u24-l1-q1",
            type: "matching",
            prompt: "Match negotiation strategies in French:",
            pairs: [
              { native: "Trouver un terrain d'entente", english: "To find common ground" },
              { native: "Faire des concessions mutuelles", english: "To make mutual concessions" },
              { native: "Un accord gagnant-gagnant", english: "A win-win agreement" },
              { native: "La clause résolutoire", english: "Termination / cancellation clause" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 25 (C2 Unit 1): Linguistic Flexibility
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-25",
    cefrLevel: "C2",
    title: "Unit 25 (C2): Linguistic Flexibility",
    subtitle: "Adjusting tone instantly from street slang to high-level academic registers.",
    icon: "Flame",
    color: "#b45309",
    lessons: [
      {
        id: "fr-u25-l1",
        title: "Lesson 1: Registers of Language (Familier, Courant, Soutenu)",
        description: "Translate thoughts seamlessly across familiar, standard, and elevated (soutenu) literary registers.",
        xp: 50,
        questions: [
          {
            id: "fr-u25-l1-q1",
            type: "matching",
            prompt: "Match the three registers for the word 'money':",
            pairs: [
              { native: "Le fric / La thune", english: "Familiar / Slang" },
              { native: "L'argent", english: "Standard (Courant)" },
              { native: "Les deniers / Les émoluments", english: "Elevated / Literary (Soutenu)" },
              { native: "Pécuniaire", english: "Formal adjective relating to money" }
            ]
          },
          {
            id: "fr-u25-l1-q2",
            type: "matching",
            prompt: "Match the three registers for 'car':",
            pairs: [
              { native: "La bagnole / La caisse", english: "Slang (Familier)" },
              { native: "La voiture", english: "Standard (Courant)" },
              { native: "Le véhicule automobile", english: "Formal / Administrative" },
              { native: "Le bolide", english: "Poetic / Racing car" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 26 (C2 Unit 2): Literary Appreciation
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-26",
    cefrLevel: "C2",
    title: "Unit 26 (C2): Literary Appreciation",
    subtitle: "Analyzing classical and contemporary French literature, poetry, and philosophy.",
    icon: "BookOpen",
    color: "#991b1b",
    lessons: [
      {
        id: "fr-u26-l1",
        title: "Lesson 1: French Literary Stylistics & Poetics",
        description: "Analyze Baudelaire's alexandrines, Proust's involuntary memory (la madeleine de Proust), and stylistic figures (chiasme, litote).",
        xp: 50,
        questions: [
          {
            id: "fr-u26-l1-q1",
            type: "matching",
            prompt: "Match French literary stylistic figures with definitions:",
            pairs: [
              { native: "La litote (ex: 'Va, je ne te hais point')", english: "Understatement expressing more by saying less (Corneille)" },
              { native: "L'alexandrin", english: "Classical 12-syllable French poetic verse" },
              { native: "L'anaphore", english: "Repetition of a word at the beginning of successive clauses" },
              { native: "Le chiasme", english: "Crossed structural arrangement (ABBA)" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 27 (C2 Unit 3): Simultaneous Interpretation
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-27",
    cefrLevel: "C2",
    title: "Unit 27 (C2): Simultaneous Interpretation",
    subtitle: "Processing and discussing rapid, overlapping native speech, dialects, and accents.",
    icon: "Shield",
    color: "#1e1b4b",
    lessons: [
      {
        id: "fr-u27-l1",
        title: "Lesson 1: Native Rapid Speech & Global Francophone Dialects",
        description: "Master rapid liaisons, elisions ('t'as vu' -> 'ta vu'), Canadian Québécois, Belgian/Swiss French, and West African idioms.",
        xp: 50,
        questions: [
          {
            id: "fr-u27-l1-q1",
            type: "matching",
            prompt: "Match global Francophone regional expressions with standard equivalents:",
            pairs: [
              { native: "C'est le fun / Magasiner (Québec)", english: "It's fun / To go shopping" },
              { native: "Septante et Nonante (Suisse & Belgique)", english: "70 and 90 (simpler decimal counting)" },
              { native: "S'enjailler (Côte d'Ivoire)", english: "To have fun / party / enjoy oneself" },
              { native: "Avoir bon (Belgique)", english: "To feel comfortable / enjoy a pleasant situation" }
            ]
          },
          {
            id: "fr-u27-l1-q2",
            type: "audio_listen",
            phrase: "La maîtrise totale d'une langue réside dans la capacité à en saisir les silences et les sous-entendus.",
            prompt: "Listen to the philosophical maxim on bilingual proficiency. What embodies total mastery?",
            options: [
              "The ability to grasp its silences and underlying subtleties",
              "Knowing every word in the dictionary",
              "Speaking without any accent at all times",
              "Translating word for word immediately"
            ],
            correctAnswer: "The ability to grasp its silences and underlying subtleties",
            explanation: "'La maîtrise totale d'une langue réside dans la capacité à en saisir les silences et les sous-entendus'."
          }
        ]
      }
    ]
  }
];
