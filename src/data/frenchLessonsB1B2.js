// =========================================================================
// French Levels B1 & B2: Intermediate & Vantage
// Level B1: Units 11 to 15 (Professional Life, Media, Conditionnel, Subjonctif, Environment)
// Level B2: Units 16 to 20 (Debate, Culture & History, Expressing Nuance, Arts & Aesthetics, Politics & Economics)
// =========================================================================

export const frenchB1B2Units = [
  // -----------------------------------------------------------------------
  // Unit 11 (B1 Unit 1): Professional Life
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-11",
    cefrLevel: "B1",
    title: "Unit 11 (B1): Professional Life",
    subtitle: "Job interviews, writing a basic CV, and describing workplace tasks and responsibilities.",
    icon: "Award",
    color: "#2563eb",
    lessons: [
      {
        id: "fr-u11-l1",
        title: "Lesson 1: The French Job Interview & CV",
        description: "Articulate work experience, competencies, motivation letters, and answer interview questions with poise.",
        xp: 30,
        questions: [
          {
            id: "fr-u11-l1-q1",
            type: "matching",
            prompt: "Match French professional recruitment terms with English:",
            pairs: [
              { native: "Un entretien d'embauche", english: "A job interview" },
              { native: "La lettre de motivation", english: "Cover letter" },
              { native: "Le curriculum vitae (CV)", english: "Resume / CV" },
              { native: "Les compétences clés", english: "Key skills / competencies" }
            ]
          },
          {
            id: "fr-u11-l1-q2",
            type: "multiple_choice",
            prompt: "How do you state: 'I have five years of experience in project management'?",
            options: [
              "J'ai cinq ans d'expérience en gestion de projet",
              "Je suis cinq années expérimenté gestion",
              "J'ai fait cinq ans pour les projets",
              "Mon travail est cinq ans projet"
            ],
            correctAnswer: "J'ai cinq ans d'expérience en gestion de projet",
            explanation: "'J'ai cinq ans d'expérience en...' is the professional standard formula."
          },
          {
            id: "fr-u11-l1-q3",
            type: "audio_listen",
            phrase: "Quels sont vos principaux points forts et vos axes d'amélioration ?",
            prompt: "Listen to the recruiter's question. What are they inquiring about?",
            options: [
              "Main strengths and areas for improvement",
              "Salary expectations and vacation days",
              "Commute duration and transport preference",
              "University graduation year"
            ],
            correctAnswer: "Main strengths and areas for improvement",
            explanation: "'Points forts' = strengths; 'axes d'amélioration' = areas for improvement."
          },
          {
            id: "fr-u11-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'Je suis dynamique, rigoureux et autonome'",
            tokens: ["Je", "suis", "dynamique,", "rigoureux", "et", "autonome"],
            correctTokens: ["Je", "suis", "dynamique,", "rigoureux", "et", "autonome"],
            explanation: "'Je suis dynamique, rigoureux et autonome' highlights key professional qualities."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 12 (B1 Unit 2): Media & Current Events
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-12",
    cefrLevel: "B1",
    title: "Unit 12 (B1): Media & Current Events",
    subtitle: "Understanding news headlines, discussing television, radio, and social media trends.",
    icon: "Sparkles",
    color: "#0891b2",
    lessons: [
      {
        id: "fr-u12-l1",
        title: "Lesson 1: Headlines & Information Streams",
        description: "Analyze news articles, press releases, broadcast headlines, and evaluate media objectivity.",
        xp: 30,
        questions: [
          {
            id: "fr-u12-l1-q1",
            type: "matching",
            prompt: "Match French journalism terms with English:",
            pairs: [
              { native: "Faire la une", english: "To make the front page headline" },
              { native: "Les actualités / Les infos", english: "The news" },
              { native: "Un envoyé spécial", english: "A special correspondent" },
              { native: "Les réseaux sociaux", english: "Social media" }
            ]
          },
          {
            id: "fr-u12-l1-q2",
            type: "audio_listen",
            phrase: "Cette nouvelle découverte scientifique fait la une des journaux ce matin.",
            prompt: "Listen to the broadcast. What is making the morning headlines?",
            options: [
              "A new scientific discovery",
              "A political election result",
              "A sports championship final",
              "A traffic disruption update"
            ],
            correctAnswer: "A new scientific discovery",
            explanation: "'Nouvelle découverte scientifique' = new scientific discovery."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 13 (B1 Unit 3): Hypotheticals & Desires
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-13",
    cefrLevel: "B1",
    title: "Unit 13 (B1): Hypotheticals & Desires",
    subtitle: "Expressing wishes, regrets, and hypothetical situations using the Conditionnel.",
    icon: "Flame",
    color: "#7c3aed",
    lessons: [
      {
        id: "fr-u13-l1",
        title: "Lesson 1: The Conditionnel Présent & Polite Requests",
        description: "Master polite formula ('Je voudrais', 'Pourriez-vous') and hypothetical 'Si' clauses (Si + Imparfait -> Conditionnel).",
        xp: 30,
        questions: [
          {
            id: "fr-u13-l1-q1",
            type: "multiple_choice",
            prompt: "What is the correct conditional formula for 'If I had time, I would travel around the world'?",
            options: [
              "Si j'avais le temps, je ferais le tour du monde",
              "Si j'ai le temps, je ferais",
              "Si j'aurais le temps, je fais",
              "Si j'avais le temps, j'ai fait"
            ],
            correctAnswer: "Si j'avais le temps, je ferais le tour du monde",
            explanation: "The rule is: Si + Imparfait ('avais') -> Conditionnel présent ('ferais')."
          },
          {
            id: "fr-u13-l1-q2",
            type: "matching",
            prompt: "Match polite Conditionnel requests with English:",
            pairs: [
              { native: "Je voudrais un renseignement", english: "I would like some information" },
              { native: "Pourriez-vous m'aider ?", english: "Could you please help me?" },
              { native: "J'aimerais savoir si...", english: "I would like to know if..." },
              { native: "Il faudrait réserver", english: "One ought to / should reserve" }
            ]
          },
          {
            id: "fr-u13-l1-q3",
            type: "audio_listen",
            phrase: "Si je gagnais à la loterie, j'achèterais une librairie à Paris.",
            prompt: "What hypothetical dream does the speaker express?",
            options: [
              "Buying a bookstore in Paris if winning the lottery",
              "Opening a bakery in Lyon",
              "Buying an apartment in Marseille",
              "Traveling without working"
            ],
            correctAnswer: "Buying a bookstore in Paris if winning the lottery",
            explanation: "'J'achèterais une librairie à Paris' = I would buy a bookstore in Paris."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 14 (B1 Unit 4): Rules, Feelings, & Doubt
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-14",
    cefrLevel: "B1",
    title: "Unit 14 (B1): Rules, Feelings, & Doubt",
    subtitle: "Expressing necessity, obligation, and emotion using the Subjonctif mood.",
    icon: "Shield",
    color: "#db2777",
    lessons: [
      {
        id: "fr-u14-l1",
        title: "Lesson 1: The Subjonctif Présent (Necessity & Emotion)",
        description: "Express obligations ('Il faut que...'), desires ('Je veux que...'), and emotional reactions requiring the subjunctive mood.",
        xp: 30,
        questions: [
          {
            id: "fr-u14-l1-q1",
            type: "multiple_choice",
            prompt: "Which trigger phrase requires the Subjonctif mood in French?",
            options: [
              "Il faut que... (It is necessary that...)",
              "Je pense que... (in affirmative statement)",
              "Il est évident que...",
              "Je sais que..."
            ],
            correctAnswer: "Il faut que... (It is necessary that...)",
            explanation: "'Il faut que' expresses necessity/obligation and mandates the Subjonctif: 'Il faut que tu fasses tes devoirs'."
          },
          {
            id: "fr-u14-l1-q2",
            type: "matching",
            prompt: "Match irregular Subjonctif verbs with their forms:",
            pairs: [
              { native: "Faire -> Que je fasse", english: "That I do / make" },
              { native: "Être -> Que tu sois", english: "That you be" },
              { native: "Avoir -> Qu'il ait", english: "That he have" },
              { native: "Aller -> Que nous allions", english: "That we go" }
            ]
          },
          {
            id: "fr-u14-l1-q3",
            type: "audio_listen",
            phrase: "Je suis ravi que vous soyez venus nous rendre visite.",
            prompt: "Listen to the host's sentence. What feeling is expressed?",
            options: [
              "Delight that the guests came to visit",
              "Regret that the meeting was canceled",
              "Surprise at an unexpected bill",
              "Anger about being delayed"
            ],
            correctAnswer: "Delight that the guests came to visit",
            explanation: "'Je suis ravi que vous soyez venus' expresses joyful appreciation."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 15 (B1 Unit 5): Society & Environment
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-15",
    cefrLevel: "B1",
    title: "Unit 15 (B1): Society & Environment",
    subtitle: "Discussing ecology, climate change, and civic duties in modern society.",
    icon: "Sun",
    color: "#16a34a",
    lessons: [
      {
        id: "fr-u15-l1",
        title: "Lesson 1: Ecological Actions & Climate Debate",
        description: "Discuss renewable energy, recycling, carbon footprint reduction, and citizen initiatives.",
        xp: 30,
        questions: [
          {
            id: "fr-u15-l1-q1",
            type: "matching",
            prompt: "Match French environmental vocabulary:",
            pairs: [
              { native: "Le réchauffement climatique", english: "Global warming" },
              { native: "Les énergies renouvelables", english: "Renewable energy" },
              { native: "Le tri sélectif / Le recyclage", english: "Waste sorting / recycling" },
              { native: "L'empreinte carbone", english: "Carbon footprint" }
            ]
          },
          {
            id: "fr-u15-l1-q2",
            type: "scramble",
            prompt: "Assemble: 'Il faut protéger notre planète pour les générations futures'",
            tokens: ["Il", "faut", "protéger", "notre", "planète", "pour", "les", "générations", "futures"],
            correctTokens: ["Il", "faut", "protéger", "notre", "planète", "pour", "les", "générations", "futures"],
            explanation: "'Il faut protéger notre planète pour les générations futures' highlights civic responsibility."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 16 (B2 Unit 1): Debate & Argumentation
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-16",
    cefrLevel: "B2",
    title: "Unit 16 (B2): Debate & Argumentation",
    subtitle: "Structuring a formal argument, defending a viewpoint, and agreeing/disagreeing politely.",
    icon: "Award",
    color: "#b91c1c",
    lessons: [
      {
        id: "fr-u16-l1",
        title: "Lesson 1: Formal Rhetoric & Debate Formulations",
        description: "Construct logical transitions (D'une part... d'autre part), nuanced concessions, and defend points of view diplomatically.",
        xp: 35,
        questions: [
          {
            id: "fr-u16-l1-q1",
            type: "matching",
            prompt: "Match French rhetorical discourse connectors with English:",
            pairs: [
              { native: "D'une part... d'autre part", english: "On the one hand... on the other hand" },
              { native: "En ce qui concerne...", english: "As far as ... is concerned" },
              { native: "Je partage entièrement votre avis", english: "I entirely share your opinion" },
              { native: "Permettez-moi de nuancer ce point", english: "Allow me to nuance this point" }
            ]
          },
          {
            id: "fr-u16-l1-q2",
            type: "audio_listen",
            phrase: "Bien que votre argument soit pertinent, il convient de considérer les retombées économiques.",
            prompt: "Listen to the debating speaker. How do they respond to the argument?",
            options: [
              "Acknowledge the argument's relevance while calling for economic consideration",
              "Reject the point completely as irrelevant",
              "Agree wholeheartedly with no reservations",
              "Change the subject to cultural history"
            ],
            correctAnswer: "Acknowledge the argument's relevance while calling for economic consideration",
            explanation: "'Bien que votre argument soit pertinent...' introduces a classic concession."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 17 (B2 Unit 2): French Culture & History
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-17",
    cefrLevel: "B2",
    title: "Unit 17 (B2): French Culture & History",
    subtitle: "Exploring French literature, cinema, historical milestones, and regional cultures.",
    icon: "BookOpen",
    color: "#4f46e5",
    lessons: [
      {
        id: "fr-u17-l1",
        title: "Lesson 1: Historical Milestones & Cultural Legacy",
        description: "Analyze the Enlightenment (Les Lumières), the 1789 Revolution, New Wave cinema (Nouvelle Vague), and regional heritage.",
        xp: 35,
        questions: [
          {
            id: "fr-u17-l1-q1",
            type: "matching",
            prompt: "Match French cultural movements and milestones with descriptions:",
            pairs: [
              { native: "Le Siècle des Lumières", english: "18th-century Enlightenment (Voltaire, Rousseau)" },
              { native: "La Nouvelle Vague", english: "Influential 1960s cinematic revolution (Godard, Truffaut)" },
              { native: "Le patrimoine immatériel", english: "Intangible cultural heritage (e.g. French gastronomy)" },
              { native: "La Francophonie", english: "Global community of French-speaking nations" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 18 (B2 Unit 3): Expressing Nuance
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-18",
    cefrLevel: "B2",
    title: "Unit 18 (B2): Expressing Nuance",
    subtitle: "Mastering complex connectors (bien que, malgré, en effet) and passive voice to refine speech.",
    icon: "Sparkles",
    color: "#059669",
    lessons: [
      {
        id: "fr-u18-l1",
        title: "Lesson 1: Complex Concessions & The Passive Voice",
        description: "Utilize 'bien que + subjonctif', 'malgré + nom', 'en revanche', and journalistic passive constructions.",
        xp: 35,
        questions: [
          {
            id: "fr-u18-l1-q1",
            type: "multiple_choice",
            prompt: "Which conjunction of opposition takes the Subjonctif mood?",
            options: ["Bien que (although)", "Pourtant (yet)", "Cependant (however)", "Malgré (despite)"],
            correctAnswer: "Bien que (although)",
            explanation: "'Bien que' always requires the Subjonctif: 'Bien qu'il fasse froid, nous marchons'."
          },
          {
            id: "fr-u18-l1-q2",
            type: "matching",
            prompt: "Match French connectors with their precise logical functions:",
            pairs: [
              { native: "En effet", english: "Indeed / In fact (confirmation)" },
              { native: "Néanmoins / Toutefois", english: "Nevertheless (nuanced contrast)" },
              { native: "Par conséquent", english: "Consequently / Therefore (result)" },
              { native: "Malgré ses efforts", english: "Despite his/her efforts (preposition + noun)" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 19 (B2 Unit 4): The Arts & Aesthetics
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-19",
    cefrLevel: "B2",
    title: "Unit 19 (B2): The Arts & Aesthetics",
    subtitle: "Critiquing a book, evaluating a movie, or discussing art exhibitions.",
    icon: "Smile",
    color: "#ea580c",
    lessons: [
      {
        id: "fr-u19-l1",
        title: "Lesson 1: Critical Review of Literature & Cinema",
        description: "Evaluate narrative arcs, cinematography, emotional resonance, and compose critical reviews.",
        xp: 35,
        questions: [
          {
            id: "fr-u19-l1-q1",
            type: "matching",
            prompt: "Match film and literary review terms:",
            pairs: [
              { native: "Un chef-d'œuvre", english: "A masterpiece" },
              { native: "L'intrigue / Le dénouement", english: "The plot / The climax and resolution" },
              { native: "Un jeu d'acteur remarquable", english: "Remarkable acting performance" },
              { native: "Une mise en scène poignante", english: "A poignant artistic direction / staging" }
            ]
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 20 (B2 Unit 5): Politics & Global Economics
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-20",
    cefrLevel: "B2",
    title: "Unit 20 (B2): Politics & Global Economics",
    subtitle: "Understanding French political structures, international relations, and socio-economic debates.",
    icon: "GraduationCap",
    color: "#334155",
    lessons: [
      {
        id: "fr-u20-l1",
        title: "Lesson 1: Institutions & Socio-Economic Dynamics",
        description: "Analyze the Fifth Republic's governance (Président, Premier ministre, Assemblée nationale) and economic policies.",
        xp: 35,
        questions: [
          {
            id: "fr-u20-l1-q1",
            type: "matching",
            prompt: "Match French political institutions with roles:",
            pairs: [
              { native: "L'Assemblée nationale", english: "Lower chamber of the French Parliament" },
              { native: "Le Palais de l'Élysée", english: "Official residence of the French President" },
              { native: "Le pouvoir exécutif", english: "Executive power (President & Cabinet)" },
              { native: "Le pouvoir législatif", english: "Legislative branch" }
            ]
          }
        ]
      }
    ]
  }
];
