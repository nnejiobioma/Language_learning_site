// =========================================================================
// French Level A1: Discovery (Absolute Beginner)
// Units 1 to 5: First Contact, Personal Universe, Daily Life & Routines,
// Food & Shopping, Housing & Environment
// =========================================================================

export const frenchA1Units = [
  // -----------------------------------------------------------------------
  // Unit 1: First Contact
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-1",
    cefrLevel: "A1",
    title: "Unit 1 (A1): First Contact",
    subtitle: "Salutations, introducing yourself and others, spelling your name, and numbers 0–100.",
    icon: "Sun",
    color: "#2563eb",
    lessons: [
      {
        id: "fr-u1-l1",
        title: "Lesson 1: French Alphabet, Accents & Sounds",
        description: "Master the French alphabet, essential accents (é, è, ê, ç), and key pronunciation secrets like silent final letters.",
        xp: 20,
        questions: [
          {
            id: "fr-u1-l1-q1",
            type: "multiple_choice",
            prompt: "How is the acute accent (l'accent aigu: 'é') pronounced in French?",
            options: [
              "Like 'ay' in 'say' / closed 'e'",
              "Like 'e' in 'bed'",
              "Like 'ee' in 'see'",
              "It is completely silent"
            ],
            correctAnswer: "Like 'ay' in 'say' / closed 'e'",
            explanation: "The accent aigu ('é') produces a crisp, closed sound like 'ay' in English (e.g. 'café', 'été')."
          },
          {
            id: "fr-u1-l1-q2",
            type: "matching",
            prompt: "Match the French accents with their names:",
            pairs: [
              { native: "é (café)", english: "Accent aigu" },
              { native: "è (père)", english: "Accent grave" },
              { native: "ê (fête)", english: "Accent circonflexe" },
              { native: "ç (français)", english: "Cédille (makes 'c' sound like 's')" }
            ]
          },
          {
            id: "fr-u1-l1-q3",
            type: "audio_listen",
            phrase: "Français",
            prompt: "Listen to the word 'Français'. Why does the 'c' have a cedilla (ç)?",
            options: [
              "To make the 'c' sound like a soft 's' before 'a'",
              "To make the 'c' sound like 'k'",
              "To indicate a silent letter",
              "To show the word is plural"
            ],
            correctAnswer: "To make the 'c' sound like a soft 's' before 'a'",
            explanation: "The cédille ('ç') softens the letter 'C' to an 'S' sound in front of A, O, or U."
          },
          {
            id: "fr-u1-l1-q4",
            type: "multiple_choice",
            prompt: "In general, what happens to final consonants (like -d, -s, -t, -x) in French words?",
            options: [
              "They are usually silent",
              "They are pronounced extra loudly",
              "They are swapped with vowels",
              "They turn into nasal vowels"
            ],
            correctAnswer: "They are usually silent",
            explanation: "In French, final consonants like 's' in 'Paris' or 't' in 'chat' are usually silent unless liaison occurs."
          },
          {
            id: "fr-u1-l1-q5",
            type: "audio_listen",
            phrase: "Paris",
            prompt: "Listen to the pronunciation of 'Paris'. How is it pronounced?",
            options: ["Pah-ree (silent 's')", "Pah-reess (loud 's')", "Pay-riss", "Pahr-eye"],
            correctAnswer: "Pah-ree (silent 's')",
            explanation: "The final 's' in 'Paris' is silent: pronounced 'Pah-ree'."
          },
          {
            id: "fr-u1-l1-q6",
            type: "fill_blank",
            sentence: "Le mot 'garçon' prend une ___ sous le c.",
            missingWord: "cédille",
            options: ["cédille", "apostrophe", "virgule", "accent"],
            correctAnswer: "cédille",
            explanation: "'Garçon' takes a cédille (ç) so it is pronounced 'gar-sohn' instead of 'gar-kohn'."
          },
          {
            id: "fr-u1-l1-q7",
            type: "matching",
            prompt: "Match French vowel combinations with their sounds:",
            pairs: [
              { native: "ou (vous)", english: "Pronounced 'oo' like in 'soup'" },
              { native: "eau / au (beau)", english: "Pronounced 'oh' like in 'boat'" },
              { native: "oi (moi)", english: "Pronounced 'wah' like in 'water'" },
              { native: "ai (j'ai)", english: "Pronounced 'eh' like in 'bed'" }
            ]
          },
          {
            id: "fr-u1-l1-q8",
            type: "scramble",
            prompt: "Arrange the words to say: 'The French alphabet'",
            tokens: ["L'alphabet", "français", "est", "beau"],
            correctTokens: ["L'alphabet", "français"],
            explanation: "'L'alphabet français' means 'The French alphabet'."
          }
        ]
      },
      {
        id: "fr-u1-l2",
        title: "Lesson 2: Salutations & Courtesies",
        description: "Master essential greetings, polite requests, and daily social etiquette in France.",
        xp: 20,
        questions: [
          {
            id: "fr-u1-l2-q1",
            type: "multiple_choice",
            prompt: "What is the universal French greeting used throughout the day?",
            options: ["Bonjour", "Bonsoir", "Bonne nuit", "Au revoir"],
            correctAnswer: "Bonjour",
            explanation: "'Bonjour' (Good day / Hello) is the fundamental polite greeting in France."
          },
          {
            id: "fr-u1-l2-q2",
            type: "matching",
            prompt: "Match French greetings with their English meanings:",
            pairs: [
              { native: "Bonjour", english: "Hello / Good morning" },
              { native: "Bonsoir", english: "Good evening" },
              { native: "Bonne nuit", english: "Good night (before sleep)" },
              { native: "Salut", english: "Hi / Bye (informal with friends)" }
            ]
          },
          {
            id: "fr-u1-l2-q3",
            type: "audio_listen",
            phrase: "S'il vous plaît",
            prompt: "Listen to the phrase. What does it mean?",
            options: ["Please (formal/polite)", "Thank you very much", "Excuse me", "You're welcome"],
            correctAnswer: "Please (formal/polite)",
            explanation: "'S'il vous plaît' is the polite form of 'Please'."
          },
          {
            id: "fr-u1-l2-q4",
            type: "fill_blank",
            sentence: "Merci beaucoup ! — De ___ !",
            missingWord: "rien",
            options: ["rien", "bonjour", "salut", "plaisir"],
            correctAnswer: "rien",
            explanation: "'De rien' is the most common way to say 'You're welcome' in French."
          },
          {
            id: "fr-u1-l2-q5",
            type: "matching",
            prompt: "Match French courtesies with English:",
            pairs: [
              { native: "Merci beaucoup", english: "Thank you very much" },
              { native: "De rien", english: "You're welcome" },
              { native: "Pardon / Excusez-moi", english: "Excuse me / Sorry" },
              { native: "À bientôt", english: "See you soon" }
            ]
          },
          {
            id: "fr-u1-l2-q6",
            type: "multiple_choice",
            prompt: "How do you politely ask 'How are you?' to an adult stranger or professor?",
            options: ["Comment allez-vous ?", "Ça va ?", "Comment vas-tu ?", "Quoi de neuf ?"],
            correctAnswer: "Comment allez-vous ?",
            explanation: "'Comment allez-vous ?' uses the formal 'vous' to show respect."
          },
          {
            id: "fr-u1-l2-q7",
            type: "audio_listen",
            phrase: "Ça va bien, merci !",
            prompt: "What does this response express?",
            options: ["I'm doing well, thank you!", "I am very tired", "No, I disagree", "Where are you going?"],
            correctAnswer: "I'm doing well, thank you!",
            explanation: "'Ça va bien, merci !' means 'I am doing well, thank you!'."
          },
          {
            id: "fr-u1-l2-q8",
            type: "scramble",
            prompt: "Put together: 'Very good, thank you, and you?'",
            tokens: ["Très", "bien,", "merci,", "et", "vous ?"],
            correctTokens: ["Très", "bien,", "merci,", "et", "vous ?"],
            explanation: "'Très bien, merci, et vous ?' is a polite reply."
          }
        ]
      },
      {
        id: "fr-u1-l3",
        title: "Lesson 3: Introducing Yourself & Others",
        description: "Introduce your name, ask for someone's identity, and spell your name in French.",
        xp: 20,
        questions: [
          {
            id: "fr-u1-l3-q1",
            type: "multiple_choice",
            prompt: "How do you say 'My name is Lucas' in French?",
            options: ["Je m'appelle Lucas", "Je suis Lucas nom", "J'ai Lucas", "Mon nom est Lucas"],
            correctAnswer: "Je m'appelle Lucas",
            explanation: "'Je m'appelle...' literally means 'I call myself...' and is the standard way to state your name."
          },
          {
            id: "fr-u1-l3-q2",
            type: "audio_listen",
            phrase: "Comment vous appelez-vous ?",
            prompt: "Listen to the question. What is being asked?",
            options: ["What is your name? (formal)", "Where do you live?", "How old are you?", "What do you do?"],
            correctAnswer: "What is your name? (formal)",
            explanation: "'Comment vous appelez-vous ?' is the formal question asking for someone's name."
          },
          {
            id: "fr-u1-l3-q3",
            type: "fill_blank",
            sentence: "Bonjour, je ___ Marc.",
            missingWord: "m'appelle",
            options: ["m'appelle", "suis", "t'appelles", "ai"],
            correctAnswer: "m'appelle",
            explanation: "'Je m'appelle Marc' means 'My name is Marc'."
          },
          {
            id: "fr-u1-l3-q4",
            type: "matching",
            prompt: "Match the introduction phrases:",
            pairs: [
              { native: "Je m'appelle", english: "My name is" },
              { native: "Tu t'appelles comment ?", english: "What is your name? (informal)" },
              { native: "Enchanté / Enchantée", english: "Delighted / Nice to meet you" },
              { native: "Voici mon ami", english: "This is my friend" }
            ]
          },
          {
            id: "fr-u1-l3-q5",
            type: "multiple_choice",
            prompt: "What is the meaning of 'Enchanté' when meeting someone?",
            options: ["Nice to meet you / Delighted", "Goodbye", "I'm sorry", "Please repeat"],
            correctAnswer: "Nice to meet you / Delighted",
            explanation: "'Enchanté(e)' literally means enchanted/delighted to meet you."
          },
          {
            id: "fr-u1-l3-q6",
            type: "audio_listen",
            phrase: "C'est un plaisir de faire votre connaissance.",
            prompt: "Listen to the sentence. What polite phrase is this?",
            options: [
              "It's a pleasure to make your acquaintance.",
              "I have to leave now.",
              "Could you please speak slower?",
              "Do you speak English?"
            ],
            correctAnswer: "It's a pleasure to make your acquaintance.",
            explanation: "'C'est un plaisir de faire votre connaissance' is an elegant formal introduction."
          },
          {
            id: "fr-u1-l3-q7",
            type: "scramble",
            prompt: "Assemble: 'Je m'appelle Marie et voici Paul'",
            tokens: ["Je", "m'appelle", "Marie", "et", "voici", "Paul"],
            correctTokens: ["Je", "m'appelle", "Marie", "et", "voici", "Paul"],
            explanation: "'Je m'appelle Marie et voici Paul' means 'My name is Marie and this is Paul'."
          }
        ]
      },
      {
        id: "fr-u1-l4",
        title: "Lesson 4: Numbers 0 to 100 & Counting",
        description: "Learn French numbers from zero to one hundred, including the unique counting logic of 70, 80, and 90.",
        xp: 25,
        questions: [
          {
            id: "fr-u1-l4-q1",
            type: "matching",
            prompt: "Match French numbers 0 to 5 with their digits:",
            pairs: [
              { native: "Zéro", english: "0" },
              { native: "Un", english: "1" },
              { native: "Deux", english: "2" },
              { native: "Trois", english: "3" }
            ]
          },
          {
            id: "fr-u1-l4-q2",
            type: "matching",
            prompt: "Match French numbers 4 to 7 with digits:",
            pairs: [
              { native: "Quatre", english: "4" },
              { native: "Cinq", english: "5" },
              { native: "Six", english: "6" },
              { native: "Sept", english: "7" }
            ]
          },
          {
            id: "fr-u1-l4-q3",
            type: "matching",
            prompt: "Match French numbers 8 to 10 and 20:",
            pairs: [
              { native: "Huit", english: "8" },
              { native: "Neuf", english: "9" },
              { native: "Dix", english: "10" },
              { native: "Vingt", english: "20" }
            ]
          },
          {
            id: "fr-u1-l4-q4",
            type: "audio_listen",
            phrase: "Dix",
            prompt: "Listen to the number. What digit is 'Dix'?",
            options: ["10", "2", "6", "100"],
            correctAnswer: "10",
            explanation: "'Dix' is the number 10."
          },
          {
            id: "fr-u1-l4-q5",
            type: "multiple_choice",
            prompt: "How is the number 70 ('soixante-dix') formed in standard French?",
            options: [
              "Sixty plus ten (60 + 10)",
              "Seven tens",
              "Fifty plus twenty",
              "Half of 140"
            ],
            correctAnswer: "Sixty plus ten (60 + 10)",
            explanation: "'Soixante-dix' literally calculates as 60 + 10 = 70!"
          },
          {
            id: "fr-u1-l4-q6",
            type: "multiple_choice",
            prompt: "How is the number 80 ('quatre-vingts') formed in French?",
            options: [
              "Four twenties (4 × 20)",
              "Eight tens",
              "One hundred minus twenty",
              "Seventy plus ten"
            ],
            correctAnswer: "Four twenties (4 × 20)",
            explanation: "'Quatre-vingts' is literally 'four twenties' (4 × 20 = 80)."
          },
          {
            id: "fr-u1-l4-q7",
            type: "multiple_choice",
            prompt: "What is the number 90 ('quatre-vingt-dix') in French?",
            options: [
              "(4 × 20) + 10 = 90",
              "9 × 10",
              "100 - 10",
              "80 + 20"
            ],
            correctAnswer: "(4 × 20) + 10 = 90",
            explanation: "'Quatre-vingt-dix' means four-twenties-ten: (4 × 20) + 10 = 90."
          },
          {
            id: "fr-u1-l4-q8",
            type: "fill_blank",
            sentence: "Après quatre-vingt-dix-neuf (99), vient ___ (100).",
            missingWord: "cent",
            options: ["cent", "mille", "zéro", "dix"],
            correctAnswer: "cent",
            explanation: "'Cent' is the French word for one hundred (100)."
          },
          {
            id: "fr-u1-l4-q9",
            type: "audio_listen",
            phrase: "Cinquante",
            prompt: "Listen to the audio. Which number is 'Cinquante'?",
            options: ["50", "15", "5", "500"],
            correctAnswer: "50",
            explanation: "'Cinquante' is fifty (50)."
          },
          {
            id: "fr-u1-l4-q10",
            type: "scramble",
            prompt: "Order from 1 to 3 in French:",
            tokens: ["trois", "un", "deux"],
            correctTokens: ["un", "deux", "trois"],
            explanation: "1 (un), 2 (deux), 3 (trois)."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 2: Personal Universe
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-2",
    cefrLevel: "A1",
    title: "Unit 2 (A1): Personal Universe",
    subtitle: "Talking about your age, nationality, profession, family, and hobbies.",
    icon: "Smile",
    color: "#059669",
    lessons: [
      {
        id: "fr-u2-l1",
        title: "Lesson 1: Age & The Verb 'Avoir'",
        description: "Learn to express age and possession using the essential irregular verb 'avoir'.",
        xp: 20,
        questions: [
          {
            id: "fr-u2-l1-q1",
            type: "multiple_choice",
            prompt: "Which verb is used to express age in French (e.g. 'I am 20 years old')?",
            options: ["Avoir (to have)", "Être (to be)", "Faire (to make)", "Aller (to go)"],
            correctAnswer: "Avoir (to have)",
            explanation: "French uses 'avoir' (to have) for age: 'J'ai 20 ans' (literally: I have 20 years)."
          },
          {
            id: "fr-u2-l1-q2",
            type: "matching",
            prompt: "Match the conjugations of 'avoir' (to have):",
            pairs: [
              { native: "J'ai", english: "I have" },
              { native: "Tu as", english: "You have (informal)" },
              { native: "Il / Elle a", english: "He / She has" },
              { native: "Nous avons", english: "We have" }
            ]
          },
          {
            id: "fr-u2-l1-q3",
            type: "fill_blank",
            sentence: "J'___ vingt-cinq ans.",
            missingWord: "ai",
            options: ["ai", "suis", "as", "a"],
            correctAnswer: "ai",
            explanation: "'J'ai 25 ans' means 'I am 25 years old'."
          },
          {
            id: "fr-u2-l1-q4",
            type: "audio_listen",
            phrase: "Quel âge as-tu ?",
            prompt: "Listen to the question. What does it ask?",
            options: ["How old are you?", "Where do you live?", "What is your profession?", "What time is it?"],
            correctAnswer: "How old are you?",
            explanation: "'Quel âge as-tu ?' asks 'How old are you?'."
          },
          {
            id: "fr-u2-l1-q5",
            type: "scramble",
            prompt: "Assemble: 'Mon frère a dix-huit ans'",
            tokens: ["Mon", "frère", "a", "dix-huit", "ans"],
            correctTokens: ["Mon", "frère", "a", "dix-huit", "ans"],
            explanation: "'Mon frère a dix-huit ans' means 'My brother is 18 years old'."
          }
        ]
      },
      {
        id: "fr-u2-l2",
        title: "Lesson 2: Nationalities, Countries & 'Être'",
        description: "Talk about where you are from, masculine and feminine nationality forms, and countries.",
        xp: 20,
        questions: [
          {
            id: "fr-u2-l2-q1",
            type: "matching",
            prompt: "Match masculine and feminine nationalities:",
            pairs: [
              { native: "Français -> Française", english: "French (m -> f)" },
              { native: "Canadien -> Canadienne", english: "Canadian (m -> f)" },
              { native: "Espagnol -> Espagnole", english: "Spanish (m -> f)" },
              { native: "Américain -> Américaine", english: "American (m -> f)" }
            ]
          },
          {
            id: "fr-u2-l2-q2",
            type: "multiple_choice",
            prompt: "How do you say 'I am French' as a female speaker?",
            options: ["Je suis française", "Je suis français", "J'ai française", "Je m'appelle français"],
            correctAnswer: "Je suis française",
            explanation: "Adjectives and nationalities agree with gender: feminine adds an '-e' -> 'française'."
          },
          {
            id: "fr-u2-l2-q3",
            type: "audio_listen",
            phrase: "Je viens du Canada et j'habite en France.",
            prompt: "Listen to the sentence. What does the speaker state?",
            options: [
              "I come from Canada and I live in France.",
              "I am traveling to Canada from France.",
              "I speak French in Canada.",
              "I like France and Canada."
            ],
            correctAnswer: "I come from Canada and I live in France.",
            explanation: "'Je viens du Canada et j'habite en France' = 'I come from Canada and I live in France'."
          },
          {
            id: "fr-u2-l2-q4",
            type: "fill_blank",
            sentence: "Elle est ___ (Spanish).",
            missingWord: "espagnole",
            options: ["espagnole", "espagnol", "espagne", "madrid"],
            correctAnswer: "espagnole",
            explanation: "For a female subject ('Elle'), the feminine form is 'espagnole'."
          }
        ]
      },
      {
        id: "fr-u2-l3",
        title: "Lesson 3: Professions & Work",
        description: "Learn profession titles, how to ask what someone does, and omission of articles with professions.",
        xp: 20,
        questions: [
          {
            id: "fr-u2-l3-q1",
            type: "matching",
            prompt: "Match French professions with English:",
            pairs: [
              { native: "Médecin", english: "Doctor" },
              { native: "Professeur / Enseignant", english: "Teacher / Professor" },
              { native: "Avocat / Avocate", english: "Lawyer" },
              { native: "Ingénieur", english: "Engineer" }
            ]
          },
          {
            id: "fr-u2-l3-q2",
            type: "multiple_choice",
            prompt: "When stating your profession in French ('Je suis médecin'), do you use an article ('un' / 'une')?",
            options: [
              "No, articles are omitted with 'être' + profession",
              "Yes, always say 'Je suis un médecin'",
              "Only for women",
              "Only in plural"
            ],
            correctAnswer: "No, articles are omitted with 'être' + profession",
            explanation: "In French, when using 'être' directly with a profession, the indefinite article is dropped: 'Je suis médecin'."
          },
          {
            id: "fr-u2-l3-q3",
            type: "audio_listen",
            phrase: "Qu'est-ce que vous faites dans la vie ?",
            prompt: "Listen to the question. What does it ask?",
            options: ["What do you do for a living?", "Where do you live?", "What is your hobby?", "How was your day?"],
            correctAnswer: "What do you do for a living?",
            explanation: "'Qu'est-ce que vous faites dans la vie ?' means 'What do you do for a living?'."
          },
          {
            id: "fr-u2-l3-q4",
            type: "fill_blank",
            sentence: "Mon père est ___ (architect).",
            missingWord: "architecte",
            options: ["architecte", "avocat", "médecin", "étudiant"],
            correctAnswer: "architecte",
            explanation: "'Mon père est architecte' means 'My father is an architect'."
          }
        ]
      },
      {
        id: "fr-u2-l4",
        title: "Lesson 4: Family & Hobbies",
        description: "Describe your family members (parents, siblings) and talk about your favorite leisure activities.",
        xp: 25,
        questions: [
          {
            id: "fr-u2-l4-q1",
            type: "matching",
            prompt: "Match French family members with English:",
            pairs: [
              { native: "Le père et la mère", english: "Father and mother" },
              { native: "Le frère et la sœur", english: "Brother and sister" },
              { native: "Les grands-parents", english: "Grandparents" },
              { native: "Le fils et la fille", english: "Son and daughter" }
            ]
          },
          {
            id: "fr-u2-l4-q2",
            type: "matching",
            prompt: "Match French hobbies with English:",
            pairs: [
              { native: "Lire des livres", english: "Reading books" },
              { native: "Faire du vélo", english: "Riding a bicycle" },
              { native: "Écouter de la musique", english: "Listening to music" },
              { native: "Jouer au football", english: "Playing soccer/football" }
            ]
          },
          {
            id: "fr-u2-l4-q3",
            type: "audio_listen",
            phrase: "J'adore voyager et découvrir de nouvelles cultures.",
            prompt: "What hobby does the speaker express a passion for?",
            options: [
              "Traveling and discovering new cultures",
              "Cooking and baking French pastries",
              "Watching movies at the cinema",
              "Playing tennis on weekends"
            ],
            correctAnswer: "Traveling and discovering new cultures",
            explanation: "'J'adore voyager et découvrir de nouvelles cultures' means 'I love traveling and discovering new cultures'."
          },
          {
            id: "fr-u2-l4-q4",
            type: "scramble",
            prompt: "Assemble: 'Pendant mon temps libre, je fais du sport'",
            tokens: ["Pendant", "mon", "temps", "libre,", "je", "fais", "du", "sport"],
            correctTokens: ["Pendant", "mon", "temps", "libre,", "je", "fais", "du", "sport"],
            explanation: "'Pendant mon temps libre, je fais du sport' = 'In my free time, I do sports'."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 3: Daily Life & Routines
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-3",
    cefrLevel: "A1",
    title: "Unit 3 (A1): Daily Life & Routines",
    subtitle: "Telling time, describing your daily routine (using reflexive verbs), and talking about the weather.",
    icon: "Flame",
    color: "#f59e0b",
    lessons: [
      {
        id: "fr-u3-l1",
        title: "Lesson 1: Telling Time in French",
        description: "Ask for and tell the time accurately (hours, half-hours, quarters, and 24-hour schedules).",
        xp: 20,
        questions: [
          {
            id: "fr-u3-l1-q1",
            type: "multiple_choice",
            prompt: "How do you ask 'What time is it?' in French?",
            options: ["Quelle heure est-il ?", "Quel temps fait-il ?", "Combien coûte l'heure ?", "Où est l'heure ?"],
            correctAnswer: "Quelle heure est-il ?",
            explanation: "'Quelle heure est-il ?' is the standard way to ask 'What time is it?'."
          },
          {
            id: "fr-u3-l1-q2",
            type: "matching",
            prompt: "Match French time expressions with English:",
            pairs: [
              { native: "Il est huit heures", english: "It is eight o'clock (8:00)" },
              { native: "Il est huit heures et demie", english: "It is half past eight (8:30)" },
              { native: "Il est huit heures et quart", english: "It is a quarter past eight (8:15)" },
              { native: "Il est neuf heures moins le quart", english: "It is a quarter to nine (8:45)" }
            ]
          },
          {
            id: "fr-u3-l1-q3",
            type: "audio_listen",
            phrase: "Il est midi et demi.",
            prompt: "What time does this indicate?",
            options: ["12:30 PM (Midday and a half)", "12:30 AM (Midnight)", "1:30 PM", "11:30 AM"],
            correctAnswer: "12:30 PM (Midday and a half)",
            explanation: "'Midi' is noon (12:00 PM), so 'midi et demi' is 12:30 PM."
          },
          {
            id: "fr-u3-l1-q4",
            type: "fill_blank",
            sentence: "Le train part à dix heures ___ quart.",
            missingWord: "et",
            options: ["et", "moins", "avec", "dans"],
            correctAnswer: "et",
            explanation: "'Dix heures et quart' means 10:15 (ten and a quarter)."
          }
        ]
      },
      {
        id: "fr-u3-l2",
        title: "Lesson 2: Reflexive Verbs & Morning Routine",
        description: "Master daily reflexive actions: waking up, washing, dressing, and having breakfast.",
        xp: 25,
        questions: [
          {
            id: "fr-u3-l2-q1",
            type: "matching",
            prompt: "Match reflexive verbs with English actions:",
            pairs: [
              { native: "Se réveiller", english: "To wake up" },
              { native: "Se lever", english: "To get out of bed" },
              { native: "Se doucher / Se laver", english: "To shower / wash oneself" },
              { native: "S'habiller", english: "To get dressed" }
            ]
          },
          {
            id: "fr-u3-l2-q2",
            type: "multiple_choice",
            prompt: "How do you say 'I wake up at seven o'clock' in French?",
            options: [
              "Je me réveille à sept heures",
              "Je réveille à sept heures",
              "Je suis réveillé sept heures",
              "Moi réveiller à sept"
            ],
            correctAnswer: "Je me réveille à sept heures",
            explanation: "Reflexive verbs take reflexive pronouns: 'Je me réveille' (I wake [myself] up)."
          },
          {
            id: "fr-u3-l2-q3",
            type: "audio_listen",
            phrase: "Chaque matin, je me brosse les dents après le petit déjeuner.",
            prompt: "Listen to the morning routine statement. What does the speaker do?",
            options: [
              "Brushes teeth after breakfast",
              "Drinks coffee before dressing",
              "Takes a walk before eating",
              "Goes to sleep late"
            ],
            correctAnswer: "Brushes teeth after breakfast",
            explanation: "'Se brosser les dents' means to brush one's teeth."
          },
          {
            id: "fr-u3-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'Je me lève à six heures et demie'",
            tokens: ["Je", "me", "lève", "à", "six", "heures", "et", "demie"],
            correctTokens: ["Je", "me", "lève", "à", "six", "heures", "et", "demie"],
            explanation: "'Je me lève à six heures et demie' means 'I get up at 6:30'."
          }
        ]
      },
      {
        id: "fr-u3-l3",
        title: "Lesson 3: Weather, Seasons & Climate",
        description: "Discuss daily weather conditions ('Il fait beau', 'Il pleut') and the four seasons.",
        xp: 20,
        questions: [
          {
            id: "fr-u3-l3-q1",
            type: "multiple_choice",
            prompt: "How do you ask 'What is the weather like?' in French?",
            options: ["Quel temps fait-il ?", "Quelle heure est-il ?", "Où est le soleil ?", "Comment va la pluie ?"],
            correctAnswer: "Quel temps fait-il ?",
            explanation: "'Quel temps fait-il ?' is the standard question to ask about the weather."
          },
          {
            id: "fr-u3-l3-q2",
            type: "matching",
            prompt: "Match French weather phrases with English:",
            pairs: [
              { native: "Il fait beau", english: "The weather is beautiful/nice" },
              { native: "Il fait froid", english: "It is cold" },
              { native: "Il pleut", english: "It is raining" },
              { native: "Il y a du soleil", english: "It is sunny" }
            ]
          },
          {
            id: "fr-u3-l3-q3",
            type: "audio_listen",
            phrase: "En hiver, il neige souvent dans les montagnes.",
            prompt: "What weather happens in the mountains during winter?",
            options: ["It often snows", "It is very hot", "It never rains", "The sun is burning"],
            correctAnswer: "It often snows",
            explanation: "'Il neige' means 'it snows' ('la neige' = snow)."
          },
          {
            id: "fr-u3-l3-q4",
            type: "fill_blank",
            sentence: "En été, il fait très ___ (hot).",
            missingWord: "chaud",
            options: ["chaud", "froid", "beau", "gris"],
            correctAnswer: "chaud",
            explanation: "'Il fait chaud' means 'it is hot'."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 4: Food & Shopping
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-4",
    cefrLevel: "A1",
    title: "Unit 4 (A1): Food & Shopping",
    subtitle: "Ordering food in a café, buying groceries, expressing quantities, and handling basic currency.",
    icon: "Utensils",
    color: "#ec4899",
    lessons: [
      {
        id: "fr-u1-l1-cafe",
        title: "Lesson 1: Café Culture & Ordering",
        description: "Experience the Parisian café: order coffee, croissants, water, and ask for the bill politely.",
        xp: 20,
        questions: [
          {
            id: "fr-u4-l1-q1",
            type: "multiple_choice",
            prompt: "How do you order a coffee with milk and a croissant in a French café?",
            options: [
              "Un café au lait et un croissant, s'il vous plaît",
              "Je veux café et croissant",
              "Donne-moi café et pain",
              "Un thé noir avec sucre"
            ],
            correctAnswer: "Un café au lait et un croissant, s'il vous plaît",
            explanation: "'Un café au lait et un croissant, s'il vous plaît' is polite and natural."
          },
          {
            id: "fr-u4-l1-q2",
            type: "matching",
            prompt: "Match French café items with English:",
            pairs: [
              { native: "Un café express / Un expresso", english: "Single espresso" },
              { native: "Un croissant au beurre", english: "Butter croissant" },
              { native: "Une carafe d'eau", english: "Free jug of tap water" },
              { native: "L'addition, s'il vous plaît", english: "The bill / check, please" }
            ]
          },
          {
            id: "fr-u4-l1-q3",
            type: "audio_listen",
            phrase: "L'addition, s'il vous plaît.",
            prompt: "Listen to the customer. What are they asking for?",
            options: ["The check / bill", "More bread", "The restroom", "Another coffee"],
            correctAnswer: "The check / bill",
            explanation: "'L'addition' is the restaurant or café bill."
          },
          {
            id: "fr-u4-l1-q4",
            type: "fill_blank",
            sentence: "Vous désirez un café ou un ___ (tea) ?",
            missingWord: "thé",
            options: ["thé", "eau", "jus", "lait"],
            correctAnswer: "thé",
            explanation: "'Thé' means tea in French."
          }
        ]
      },
      {
        id: "fr-u4-l2",
        title: "Lesson 2: Groceries & Partitive Articles",
        description: "Shop at the bakery, market, and supermarket using partitive articles (du, de la, de l', des).",
        xp: 25,
        questions: [
          {
            id: "fr-u4-l2-q1",
            type: "multiple_choice",
            prompt: "Which partitive article is used before a masculine singular food like 'pain' (bread)?",
            options: ["Du", "De la", "Des", "De l'"],
            correctAnswer: "Du",
            explanation: "'Du' (de + le) is used for masculine singular uncountable nouns: 'du pain' (some bread)."
          },
          {
            id: "fr-u4-l2-q2",
            type: "matching",
            prompt: "Match French partitive articles with example foods:",
            pairs: [
              { native: "Du fromage", english: "Some cheese (masculine)" },
              { native: "De la confiture", english: "Some jam (feminine)" },
              { native: "De l'eau", english: "Some water (vowel start)" },
              { native: "Des pommes", english: "Some apples (plural)" }
            ]
          },
          {
            id: "fr-u4-l2-q3",
            type: "audio_listen",
            phrase: "Je voudrais un kilo de tomates et deux baguettes.",
            prompt: "Listen to the shopper. What items are they purchasing?",
            options: [
              "One kilo of tomatoes and two baguettes",
              "Two kilos of apples and one baguette",
              "One bottle of milk and cheese",
              "Three oranges and butter"
            ],
            correctAnswer: "One kilo of tomatoes and two baguettes",
            explanation: "'Un kilo de tomates et deux baguettes' = 'One kilo of tomatoes and two baguettes'."
          },
          {
            id: "fr-u4-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'Combien coûte un kilo de pommes ?'",
            tokens: ["Combien", "coûte", "un", "kilo", "de", "pommes", "?"],
            correctTokens: ["Combien", "coûte", "un", "kilo", "de", "pommes", "?"],
            explanation: "'Combien coûte un kilo de pommes ?' means 'How much does a kilo of apples cost?'."
          }
        ]
      },
      {
        id: "fr-u4-l3",
        title: "Lesson 3: Handling Currency & Paying",
        description: "Pay for items in euros, ask prices, understand change, and pay with cash or card.",
        xp: 20,
        questions: [
          {
            id: "fr-u4-l3-q1",
            type: "matching",
            prompt: "Match payment methods and financial terms:",
            pairs: [
              { native: "En espèces / En liquide", english: "In cash" },
              { native: "Par carte bancaire", english: "By credit / debit card" },
              { native: "Ça fait combien ?", english: "How much is that in total?" },
              { native: "Voici votre monnaie", english: "Here is your change" }
            ]
          },
          {
            id: "fr-u4-l3-q2",
            type: "audio_listen",
            phrase: "Ça fait quinze euros et cinquante centimes.",
            prompt: "How much is the total price announced by the cashier?",
            options: ["€15.50", "€50.15", "€15.00", "€5.50"],
            correctAnswer: "€15.50",
            explanation: "'Quinze euros et cinquante centimes' = €15.50."
          },
          {
            id: "fr-u4-l3-q3",
            type: "fill_blank",
            sentence: "Est-ce que vous acceptez la ___ bancaire ?",
            missingWord: "carte",
            options: ["carte", "banque", "facture", "monnaie"],
            correctAnswer: "carte",
            explanation: "'La carte bancaire' is the French term for bank / debit / credit card."
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // Unit 5: Housing & Environment
  // -----------------------------------------------------------------------
  {
    id: "fr-unit-5",
    cefrLevel: "A1",
    title: "Unit 5 (A1): Housing & Environment",
    subtitle: "Describing your home, rooms, furniture, and giving basic directions in a city.",
    icon: "ShoppingBag",
    color: "#8b5cf6",
    lessons: [
      {
        id: "fr-u5-l1",
        title: "Lesson 1: Rooms of the House & Furniture",
        description: "Describe apartments, houses, rooms (kitchen, salon, bedroom), and essential furniture.",
        xp: 20,
        questions: [
          {
            id: "fr-u5-l1-q1",
            type: "matching",
            prompt: "Match French rooms with their English translations:",
            pairs: [
              { native: "Le salon", english: "Living room" },
              { native: "La cuisine", english: "Kitchen" },
              { native: "La chambre", english: "Bedroom" },
              { native: "La salle de bain", english: "Bathroom" }
            ]
          },
          {
            id: "fr-u5-l1-q2",
            type: "matching",
            prompt: "Match French furniture with English:",
            pairs: [
              { native: "Le canapé", english: "Sofa / Couch" },
              { native: "Le lit", english: "Bed" },
              { native: "La table et les chaises", english: "Table and chairs" },
              { native: "L'armoire", english: "Wardrobe / Closet" }
            ]
          },
          {
            id: "fr-u5-l1-q3",
            type: "audio_listen",
            phrase: "Mon appartement a deux chambres et un grand balcon.",
            prompt: "Listen to the description of the apartment. What does it feature?",
            options: [
              "Two bedrooms and a large balcony",
              "Three bedrooms and a small kitchen",
              "One bedroom and a garden",
              "No balcony and four rooms"
            ],
            correctAnswer: "Two bedrooms and a large balcony",
            explanation: "'Mon appartement a deux chambres et un grand balcon' = 'My apartment has two bedrooms and a large balcony'."
          },
          {
            id: "fr-u5-l1-q4",
            type: "fill_blank",
            sentence: "Nous mangeons le dîner dans la ___.",
            missingWord: "cuisine",
            options: ["cuisine", "douche", "porte", "fenêtre"],
            correctAnswer: "cuisine",
            explanation: "'Dans la cuisine' means 'in the kitchen'."
          }
        ]
      },
      {
        id: "fr-u5-l2",
        title: "Lesson 2: City Navigation & Asking for Directions",
        description: "Ask where landmarks are, follow directional instructions, and navigate city streets.",
        xp: 25,
        questions: [
          {
            id: "fr-u5-l2-q1",
            type: "matching",
            prompt: "Match French directional instructions with English:",
            pairs: [
              { native: "Tournez à droite", english: "Turn right" },
              { native: "Tournez à gauche", english: "Turn left" },
              { native: "Allez tout droit", english: "Go straight ahead" },
              { native: "C'est juste en face", english: "It is right across / opposite" }
            ]
          },
          {
            id: "fr-u5-l2-q2",
            type: "multiple_choice",
            prompt: "How do you ask 'Excuse me, where is the train station?' in French?",
            options: [
              "Pardon, où est la gare ?",
              "Où va le train ?",
              "Combien pour la gare ?",
              "Est-ce que le train arrive ?"
            ],
            correctAnswer: "Pardon, où est la gare ?",
            explanation: "'Pardon, où est la gare ?' is the standard polite inquiry."
          },
          {
            id: "fr-u5-l2-q3",
            type: "audio_listen",
            phrase: "Prenez la première rue à droite, puis allez tout droit.",
            prompt: "Listen to the directions given. What should you do first?",
            options: [
              "Take the first street on the right",
              "Take the second street on the left",
              "Stop at the traffic light",
              "Turn around immediately"
            ],
            correctAnswer: "Take the first street on the right",
            explanation: "'Prenez la première rue à droite' means 'Take the first street on the right'."
          },
          {
            id: "fr-u5-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'Le musée est à côté de la pharmacie'",
            tokens: ["Le", "musée", "est", "à", "côté", "de", "la", "pharmacie"],
            correctTokens: ["Le", "musée", "est", "à", "côté", "de", "la", "pharmacie"],
            explanation: "'Le musée est à côté de la pharmacie' means 'The museum is next to the pharmacy'."
          }
        ]
      }
    ]
  }
];
