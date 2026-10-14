// =========================================================================
// French Level A2: Intermediate Beginner (Survival French)
// Units 6 to 10: Past Memories, Biography & Childhood, Travel & Transport,
// Health & Body, Future Plans
// =========================================================================

export const frenchA2Units = [
  // -----------------------------------------------------------------------
  // Unit 6 (A2 Unit 1): Past Memories
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-6",
    cefrLevel: "A2",
    title: "Unit 6 (A2): Past Memories",
    subtitle: "Talking about your weekend and past events using the Passé Composé.",
    icon: "BookOpen",
    color: "#0284c7",
    lessons: [
      {
        id: "fr-u6-l1",
        title: "Lesson 1: Passé Composé with 'Avoir'",
        description: "Form the compound past with auxiliary 'avoir' and regular/irregular past participles (-é, -i, -u).",
        xp: 25,
        questions: [
          {
            id: "fr-u6-l1-q1",
            type: "multiple_choice",
            prompt: "How is the Passé Composé structured for most French verbs?",
            options: [
              "Auxiliary 'avoir' (present tense) + Past Participle",
              "Verb in infinitive + 'hier'",
              "Auxiliary 'être' + future stem",
              "Verb root + '-ait'"
            ],
            correctAnswer: "Auxiliary 'avoir' (present tense) + Past Participle",
            explanation: "Most French verbs take 'avoir' as auxiliary: 'J'ai mangé' (I ate / I have eaten)."
          },
          {
            id: "fr-u6-l1-q2",
            type: "matching",
            prompt: "Match infinitives with their past participles:",
            pairs: [
              { native: "Parler -> Parlé", english: "Spoken (regular -er -> -é)" },
              { native: "Finir -> Fini", english: "Finished (regular -ir -> -i)" },
              { native: "Prendre -> Pris", english: "Taken (irregular)" },
              { native: "Faire -> Fait", english: "Done / Made (irregular)" }
            ]
          },
          {
            id: "fr-u6-l1-q3",
            type: "audio_listen",
            phrase: "Hier soir, j'ai regardé un film magnifique avec mes amis.",
            prompt: "What activity did the speaker do yesterday evening?",
            options: [
              "Watched a magnificent movie with friends",
              "Read a book alone at home",
              "Played football in the park",
              "Cooked dinner for family"
            ],
            correctAnswer: "Watched a magnificent movie with friends",
            explanation: "'J'ai regardé un film magnifique' = 'I watched a magnificent movie'."
          },
          {
            id: "fr-u6-l1-q4",
            type: "fill_blank",
            sentence: "Nous ___ mangé dans un excellent restaurant parisien.",
            missingWord: "avons",
            options: ["avons", "sommes", "ont", "avez"],
            correctAnswer: "avons",
            explanation: "The auxiliary with 'nous' is 'avons': 'Nous avons mangé'."
          }
        ]
      },
      {
        id: "fr-u6-l2",
        title: "Lesson 2: Passé Composé with 'Être' & Movement",
        description: "Master movement verbs (aller, venir, partir, arriver...) and agreement of past participles.",
        xp: 25,
        questions: [
          {
            id: "fr-u6-l2-q1",
            type: "multiple_choice",
            prompt: "Which auxiliary verb do verbs of movement and change of state (like 'aller', 'venir', 'partir') use in Passé Composé?",
            options: ["Être", "Avoir", "Faire", "Aller"],
            correctAnswer: "Être",
            explanation: "Movement verbs (often remembered by DR & MRS VANDERTRAMP) take 'être': 'Je suis allé'."
          },
          {
            id: "fr-u6-l2-q2",
            type: "matching",
            prompt: "Match movement verbs in Passé Composé:",
            pairs: [
              { native: "Je suis allé(e)", english: "I went" },
              { native: "Elle est venue", english: "She came" },
              { native: "Ils sont partis", english: "They left" },
              { native: "Nous sommes arrivés", english: "We arrived" }
            ]
          },
          {
            id: "fr-u6-l2-q3",
            type: "audio_listen",
            phrase: "Dimanche dernier, je suis parti tôt le matin pour visiter Nice.",
            prompt: "When did the speaker leave to visit Nice?",
            options: [
              "Early in the morning last Sunday",
              "Late in the afternoon yesterday",
              "Next weekend",
              "On Friday evening"
            ],
            correctAnswer: "Early in the morning last Sunday",
            explanation: "'Je suis parti tôt le matin' = 'I left early in the morning'."
          },
          {
            id: "fr-u6-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'Elle est allée à Paris en train'",
            tokens: ["Elle", "est", "allée", "à", "Paris", "en", "train"],
            correctTokens: ["Elle", "est", "allée", "à", "Paris", "en", "train"],
            explanation: "'Elle est allée à Paris en train' means 'She went to Paris by train'."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 7 (A2 Unit 2): Biography & Childhood
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-7",
    cefrLevel: "A2",
    title: "Unit 7 (A2): Biography & Childhood",
    subtitle: "Describing how things used to be, childhood memories, and habits using the Imparfait.",
    icon: "GraduationCap",
    color: "#6366f1",
    lessons: [
      {
        id: "fr-u7-l1",
        title: "Lesson 1: The Imparfait (Formation & Habits)",
        description: "Form the imperfect tense (-ais, -ais, -ait, -ions, -iez, -aient) to express past habits and ongoing states.",
        xp: 25,
        questions: [
          {
            id: "fr-u7-l1-q1",
            type: "matching",
            prompt: "Match the Imparfait endings with subject pronouns:",
            pairs: [
              { native: "Je / Tu", english: "-ais" },
              { native: "Il / Elle / On", english: "-ait" },
              { native: "Nous", english: "-ions" },
              { native: "Vous", english: "-iez" }
            ]
          },
          {
            id: "fr-u7-l1-q2",
            type: "multiple_choice",
            prompt: "How do you say 'When I was little, I lived in the countryside'?",
            options: [
              "Quand j'étais petit, j'habitais à la campagne",
              "Quand je suis petit, j'ai habité",
              "Quand je serai petit, j'habite",
              "Quand j'ai été petit, je vis"
            ],
            correctAnswer: "Quand j'étais petit, j'habitais à la campagne",
            explanation: "The Imparfait ('étais', 'habitais') describes continuous states and habits in the past."
          },
          {
            id: "fr-u7-l1-q3",
            type: "audio_listen",
            phrase: "Chaque été, nous allions à la plage avec nos grands-parents.",
            prompt: "Listen to the childhood memory. What did they do every summer?",
            options: [
              "Went to the beach with grandparents",
              "Stayed in Paris for summer school",
              "Traveled across Europe by train",
              "Played video games at home"
            ],
            correctAnswer: "Went to the beach with grandparents",
            explanation: "'Nous allions à la plage' expresses a habitual summer tradition."
          },
          {
            id: "fr-u7-l1-q4",
            type: "fill_blank",
            sentence: "Mon grand-père ___ (aimer) lire le journal chaque matin.",
            missingWord: "aimait",
            options: ["aimait", "aimé", "aime", "aimera"],
            correctAnswer: "aimait",
            explanation: "Imparfait for 'il' (mon grand-père) is 'aimait'."
          }
        ]
      },
      {
        id: "fr-u7-l2",
        title: "Lesson 2: Passé Composé vs Imparfait",
        description: "Master the subtle contrast between background descriptions (Imparfait) and completed interrupting actions (Passé Composé).",
        xp: 25,
        questions: [
          {
            id: "fr-u7-l2-q1",
            type: "multiple_choice",
            prompt: "In the sentence: 'Je dormais quand le téléphone a sonné', which verb is the background state?",
            options: [
              "Je dormais (Imparfait)",
              "Le téléphone a sonné (Passé Composé)",
              "Both are background states",
              "Neither"
            ],
            correctAnswer: "Je dormais (Imparfait)",
            explanation: "The ongoing background action is in the Imparfait ('dormais'), while the sudden interruption is in Passé Composé ('a sonné')."
          },
          {
            id: "fr-u7-l2-q2",
            type: "scramble",
            prompt: "Assemble: 'Il pleuvait quand je suis sorti'",
            tokens: ["Il", "pleuvait", "quand", "je", "suis", "sorti"],
            correctTokens: ["Il", "pleuvait", "quand", "je", "suis", "sorti"],
            explanation: "'Il pleuvait quand je suis sorti' = 'It was raining when I went out'."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 8 (A2 Unit 3): Travel & Transport
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-8",
    cefrLevel: "A2",
    title: "Unit 8 (A2): Travel & Transport",
    subtitle: "Booking train/plane tickets, navigating transport, and describing a past vacation.",
    icon: "Compass",
    color: "#0d9488",
    lessons: [
      {
        id: "fr-u8-l1",
        title: "Lesson 1: Booking Train & Flight Tickets",
        description: "Book tickets at the station (SNCF) or airport: round-trip, departure time, seat class, and platform.",
        xp: 25,
        questions: [
          {
            id: "fr-u8-l1-q1",
            type: "matching",
            prompt: "Match French travel booking terms with English:",
            pairs: [
              { native: "Un aller-retour", english: "A round-trip ticket" },
              { native: "Un aller simple", english: "A one-way ticket" },
              { native: "Le quai de départ", english: "Departure platform" },
              { native: "La correspondance", english: "Connection / Transfer" }
            ]
          },
          {
            id: "fr-u8-l1-q2",
            type: "audio_listen",
            phrase: "Le train à destination de Lyon partira voie C à quatorze heures.",
            prompt: "Listen to the train announcement. Where and when does the train depart?",
            options: [
              "Track C at 2:00 PM (14h) for Lyon",
              "Track B at 4:00 PM for Marseille",
              "Track A at 1:00 PM for Paris",
              "Delayed until 6:00 PM"
            ],
            correctAnswer: "Track C at 2:00 PM (14h) for Lyon",
            explanation: "'Voie C à quatorze heures' = Track C at 14:00 (2:00 PM)."
          },
          {
            id: "fr-u8-l1-q3",
            type: "fill_blank",
            sentence: "Je voudrais réserver un billet en seconde ___.",
            missingWord: "classe",
            options: ["classe", "voiture", "gare", "voie"],
            correctAnswer: "classe",
            explanation: "'En seconde classe' means in second class."
          }
        ]
      },
      {
        id: "fr-u8-l2",
        title: "Lesson 2: Describing a Vacation Journey",
        description: "Narrate an itinerary, describe hotel accommodations, sightseeing, and cultural highlights.",
        xp: 25,
        questions: [
          {
            id: "fr-u8-l2-q1",
            type: "matching",
            prompt: "Match French vacation vocabulary:",
            pairs: [
              { native: "Faire les valises", english: "To pack suitcases" },
              { native: "Une chambre d'hôtel", english: "A hotel room" },
              { native: "Visiter des monuments", english: "To visit monuments" },
              { native: "Prendre des photos", english: "To take photos" }
            ]
          },
          {
            id: "fr-u8-l2-q2",
            type: "scramble",
            prompt: "Assemble: 'Notre voyage en Provence était inoubliable'",
            tokens: ["Notre", "voyage", "en", "Provence", "était", "inoubliable"],
            correctTokens: ["Notre", "voyage", "en", "Provence", "était", "inoubliable"],
            explanation: "'Notre voyage en Provence était inoubliable' = 'Our trip to Provence was unforgettable'."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 9 (A2 Unit 4): Health & Body
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-9",
    cefrLevel: "A2",
    title: "Unit 9 (A2): Health & Body",
    subtitle: "Expressing physical pain (avoir mal à), describing symptoms to a doctor, and parts of the body.",
    icon: "Shield",
    color: "#e11d48",
    lessons: [
      {
        id: "fr-u9-l1",
        title: "Lesson 1: Parts of the Body & Expressing Pain",
        description: "Master body parts and express discomfort using the essential structure 'avoir mal à'.",
        xp: 25,
        questions: [
          {
            id: "fr-u9-l1-q1",
            type: "matching",
            prompt: "Match parts of the body with English:",
            pairs: [
              { native: "La tête", english: "Head" },
              { native: "Le dos", english: "Back" },
              { native: "Le ventre / L'estomac", english: "Stomach / Belly" },
              { native: "Les yeux et les dents", english: "Eyes and teeth" }
            ]
          },
          {
            id: "fr-u9-l1-q2",
            type: "multiple_choice",
            prompt: "How do you say 'I have a headache' in French?",
            options: [
              "J'ai mal à la tête",
              "Je suis mal tête",
              "J'ai douleur de tête",
              "Ma tête est malade"
            ],
            correctAnswer: "J'ai mal à la tête",
            explanation: "The French structure is 'avoir mal à + [part of the body]': 'J'ai mal à la tête'."
          },
          {
            id: "fr-u9-l1-q3",
            type: "fill_blank",
            sentence: "J'ai trop mangé, j'ai mal au ___.",
            missingWord: "ventre",
            options: ["ventre", "bras", "pied", "nez"],
            correctAnswer: "ventre",
            explanation: "'J'ai mal au ventre' means 'I have a stomach ache'."
          },
          {
            id: "fr-u9-l1-q4",
            type: "audio_listen",
            phrase: "Vous avez de la fièvre et une toux sèche. Prenez ce médicament.",
            prompt: "What symptoms does the doctor mention?",
            options: [
              "Fever and a dry cough",
              "Broken leg and sprain",
              "Sore eyes and allergy",
              "Ear ache only"
            ],
            correctAnswer: "Fever and a dry cough",
            explanation: "'De la fièvre et une toux sèche' = fever and a dry cough."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 10 (A2 Unit 5): Future Plans
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-10",
    cefrLevel: "A2",
    title: "Unit 10 (A2): Future Plans",
    subtitle: "Discussing projects, future intentions, and making predictions using the Futur Simple.",
    icon: "Sparkles",
    color: "#f59e0b",
    lessons: [
      {
        id: "fr-u10-l1",
        title: "Lesson 1: Le Futur Simple (Endings & Irregular Stems)",
        description: "Form the future simple tense (-ai, -as, -a, -ons, -ez, -ont) with regular and irregular verbs (être -> ser-, avoir -> aur-, aller -> ir-).",
        xp: 25,
        questions: [
          {
            id: "fr-u10-l1-q1",
            type: "matching",
            prompt: "Match Futur Simple irregular stems with their verbs:",
            pairs: [
              { native: "Être -> Je serai", english: "I will be" },
              { native: "Avoir -> J'aurai", english: "I will have" },
              { native: "Aller -> J'irai", english: "I will go" },
              { native: "Faire -> Je ferai", english: "I will do / make" }
            ]
          },
          {
            id: "fr-u10-l1-q2",
            type: "multiple_choice",
            prompt: "How do you say 'Next year, I will travel to France' in Futur Simple?",
            options: [
              "L'année prochaine, je voyagerai en France",
              "L'année prochaine, je voyage",
              "L'année dernière, j'ai voyagé",
              "Je vais voyager hier"
            ],
            correctAnswer: "L'année prochaine, je voyagerai en France",
            explanation: "'Je voyagerai' is the 1st person singular Futur Simple form."
          },
          {
            id: "fr-u10-l1-q3",
            type: "audio_listen",
            phrase: "Dans dix ans, nous habiterons dans une grande maison au bord de la mer.",
            prompt: "What long-term prediction does the speaker share?",
            options: [
              "In ten years, we will live in a big house by the sea.",
              "Ten years ago, we left our seaside home.",
              "We are buying a seaside apartment next month.",
              "We prefer living in a bustling city center."
            ],
            correctAnswer: "In ten years, we will live in a big house by the sea.",
            explanation: "'Dans dix ans, nous habiterons dans une grande maison au bord de la mer' expresses a future life vision."
          },
          {
            id: "fr-u10-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'Demain, tout ira très bien'",
            tokens: ["Demain,", "tout", "ira", "très", "bien"],
            correctTokens: ["Demain,", "tout", "ira", "très", "bien"],
            explanation: "'Demain, tout ira très bien' = 'Tomorrow, everything will go very well'."
          }
        ]
      }
    ]
  }
];
