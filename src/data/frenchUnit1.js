// =========================================================================
// French Level A1 - Unit 1: First Contact
// Lesson 1: French Alphabet, Accents & Sounds (Introductory phonetics)
// Lesson 2: Salutations & Courtesies (20 questions)
// Lesson 3: Introducing Yourself & Others (20 questions)
// Lesson 4: Numbers 0 to 100 & Counting (20 questions)
// =========================================================================

export const frenchUnit1 = {
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
        },
        {
          id: "fr-u1-l2-q9",
          type: "multiple_choice",
          prompt: "When parting from someone in the afternoon, which wish is most appropriate?",
          options: ["Bonne journée !", "Bonne nuit !", "Bon appétit !", "Joyeux Noël !"],
          correctAnswer: "Bonne journée !",
          explanation: "'Bonne journée !' means 'Have a good day!'."
        },
        {
          id: "fr-u1-l2-q10",
          type: "audio_listen",
          phrase: "Au revoir et à bientôt !",
          prompt: "Listen to the farewell phrase. What does it mean?",
          options: ["Goodbye and see you soon!", "Good evening and welcome!", "Excuse me please!", "Hello my friend!"],
          correctAnswer: "Goodbye and see you soon!",
          explanation: "'Au revoir et à bientôt !' translates to 'Goodbye and see you soon!'."
        },
        {
          id: "fr-u1-l2-q11",
          type: "fill_blank",
          sentence: "Passez une excellente ___ ! (Have a great evening!)",
          missingWord: "soirée",
          options: ["soirée", "nuit", "matin", "semaine"],
          correctAnswer: "soirée",
          explanation: "'Bonne soirée' or 'une excellente soirée' wishes a good evening."
        },
        {
          id: "fr-u1-l2-q12",
          type: "multiple_choice",
          prompt: "What is the difference between 'Tu' and 'Vous' in French?",
          options: [
            "'Tu' is informal (friends, children, family); 'Vous' is polite/formal or plural",
            "'Tu' is only for women; 'Vous' is for men",
            "'Tu' is used in the morning; 'Vous' at night",
            "They are completely interchangeable in all contexts"
          ],
          correctAnswer: "'Tu' is informal (friends, children, family); 'Vous' is polite/formal or plural",
          explanation: "Using 'vous' with strangers, elders, and professionals shows essential respect (vouvoiement)."
        },
        {
          id: "fr-u1-l2-q13",
          type: "matching",
          prompt: "Match the farewell expressions:",
          pairs: [
            { native: "À plus tard", english: "See you later" },
            { native: "À demain", english: "See you tomorrow" },
            { native: "À tout à l'heure", english: "See you in a little while" },
            { native: "Bon week-end", english: "Have a good weekend" }
          ]
        },
        {
          id: "fr-u1-l2-q14",
          type: "audio_listen",
          phrase: "Je vous en prie",
          prompt: "Listen to the phrase. In what context is 'Je vous en prie' used?",
          options: [
            "As a courteous formal response to 'Merci' (You're welcome)",
            "To order food in a restaurant",
            "To apologize for spilling water",
            "To ask what time it is"
          ],
          correctAnswer: "As a courteous formal response to 'Merci' (You're welcome)",
          explanation: "'Je vous en prie' (formal) or 'Je t'en prie' (informal) is a refined way to say 'You are very welcome'."
        },
        {
          id: "fr-u1-l2-q15",
          type: "fill_blank",
          sentence: "Pardon madame, ___ -moi de vous déranger.",
          missingWord: "excusez",
          options: ["excusez", "merci", "bonjour", "salut"],
          correctAnswer: "excusez",
          explanation: "'Excusez-moi' means 'Excuse me'."
        },
        {
          id: "fr-u1-l2-q16",
          type: "scramble",
          prompt: "Assemble: 'S'il vous plaît, monsieur'",
          tokens: ["S'il", "vous", "plaît,", "monsieur"],
          correctTokens: ["S'il", "vous", "plaît,", "monsieur"],
          explanation: "'S'il vous plaît, monsieur' means 'Please, sir'."
        },
        {
          id: "fr-u1-l2-q17",
          type: "multiple_choice",
          prompt: "What is the traditional French physical greeting among friends and relatives called?",
          options: ["La bise (cheek kisses)", "Un grand câlin obligatoire", "Une poignée de main militaire", "Un signe de tête silencieux"],
          correctAnswer: "La bise (cheek kisses)",
          explanation: "'La bise' is the customary exchange of light kisses on the cheeks between close acquaintances."
        },
        {
          id: "fr-u1-l2-q18",
          type: "audio_listen",
          phrase: "Comment vas-tu ?",
          prompt: "How is 'Comment vas-tu ?' used compared to 'Comment allez-vous ?'?",
          options: [
            "It is informal, addressed to a friend or child",
            "It is formal, addressed to a boss",
            "It is plural, addressed to a group",
            "It is used only in emails"
          ],
          correctAnswer: "It is informal, addressed to a friend or child",
          explanation: "'Comment vas-tu ?' uses the informal pronoun 'tu'."
        },
        {
          id: "fr-u1-l2-q19",
          type: "matching",
          prompt: "Match the polite social titles:",
          pairs: [
            { native: "Monsieur (M.)", english: "Mister / Sir" },
            { native: "Madame (Mme)", english: "Madam / Mrs." },
            { native: "Mademoiselle (Mlle)", english: "Miss (young woman)" },
            { native: "Docteur (Dr)", english: "Doctor" }
          ]
        },
        {
          id: "fr-u1-l2-q20",
          type: "multiple_choice",
          prompt: "When someone says 'Merci beaucoup', which of the following is NOT an appropriate reply?",
          options: ["Au revoir !", "De rien.", "Je vous en prie.", "Il n'y a pas de quoi."],
          correctAnswer: "Au revoir !",
          explanation: "'Au revoir' means goodbye, whereas 'De rien', 'Je vous en prie', and 'Il n'y a pas de quoi' all mean you're welcome."
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
        },
        {
          id: "fr-u1-l3-q8",
          type: "multiple_choice",
          prompt: "If a woman is writing 'Nice to meet you', how should she spell 'Enchanté'?",
          options: ["Enchantée (with extra 'e')", "Enchanté", "Enchantés", "Enchantement"],
          correctAnswer: "Enchantée (with extra 'e')",
          explanation: "In writing, a female speaker adds an agreement 'e': 'Enchantée'."
        },
        {
          id: "fr-u1-l3-q9",
          type: "fill_blank",
          sentence: "Comment ça s'___ ? (How do you spell that?)",
          missingWord: "écrit",
          options: ["écrit", "appelle", "écoute", "parle"],
          correctAnswer: "écrit",
          explanation: "'Comment ça s'écrit ?' asks 'How is that written / spelled?'."
        },
        {
          id: "fr-u1-l3-q10",
          type: "audio_listen",
          phrase: "Je vous présente madame Dupont.",
          prompt: "Listen to the sentence. What action is taking place?",
          options: [
            "Introducing Mrs. Dupont to someone",
            "Saying goodbye to Mrs. Dupont",
            "Asking for Mrs. Dupont's address",
            "Inviting Mrs. Dupont to lunch"
          ],
          correctAnswer: "Introducing Mrs. Dupont to someone",
          explanation: "'Je vous présente...' means 'I introduce to you / This is...'."
        },
        {
          id: "fr-u1-l3-q11",
          type: "matching",
          prompt: "Match identity terms with English:",
          pairs: [
            { native: "Le prénom", english: "First name / Given name" },
            { native: "Le nom de famille", english: "Last name / Surname" },
            { native: "La signature", english: "Signature" },
            { native: "L'identité", english: "Identity" }
          ]
        },
        {
          id: "fr-u1-l3-q12",
          type: "multiple_choice",
          prompt: "How do you ask someone to spell their surname in French?",
          options: [
            "Pouvez-vous épeler votre nom s'il vous plaît ?",
            "Où est votre nom ?",
            "Quel est votre chien ?",
            "Combien coûte votre prénom ?"
          ],
          correctAnswer: "Pouvez-vous épeler votre nom s'il vous plaît ?",
          explanation: "The verb 'épeler' means 'to spell out letter by letter'."
        },
        {
          id: "fr-u1-l3-q13",
          type: "scramble",
          prompt: "Arrange: 'Quel est votre nom de famille ?'",
          tokens: ["Quel", "est", "votre", "nom", "de", "famille ?"],
          correctTokens: ["Quel", "est", "votre", "nom", "de", "famille ?"],
          explanation: "'Quel est votre nom de famille ?' asks 'What is your last name?'."
        },
        {
          id: "fr-u1-l3-q14",
          type: "audio_listen",
          phrase: "Je m'appelle Thomas, T-H-O-M-A-S.",
          prompt: "What is Thomas doing in this audio?",
          options: [
            "Stating and spelling his first name",
            "Giving his phone number",
            "Saying where he lives",
            "Complaining about the weather"
          ],
          correctAnswer: "Stating and spelling his first name",
          explanation: "Thomas states his name and spells each letter: T-H-O-M-A-S."
        },
        {
          id: "fr-u1-l3-q15",
          type: "fill_blank",
          sentence: "Je te ___ mon collègue Alexandre.",
          missingWord: "présente",
          options: ["présente", "donne", "appelle", "écris"],
          correctAnswer: "présente",
          explanation: "'Je te présente...' is used to introduce someone informally."
        },
        {
          id: "fr-u1-l3-q16",
          type: "multiple_choice",
          prompt: "How do you say 'He is called Pierre' in French?",
          options: ["Il s'appelle Pierre", "Elle s'appelle Pierre", "Je m'appelle Pierre", "Tu t'appelles Pierre"],
          correctAnswer: "Il s'appelle Pierre",
          explanation: "'Il s'appelle...' is the third person singular masculine ('He is called...')."
        },
        {
          id: "fr-u1-l3-q17",
          type: "matching",
          prompt: "Match subject pronouns with 's'appeler' conjugations:",
          pairs: [
            { native: "Je", english: "m'appelle" },
            { native: "Tu", english: "t'appelles" },
            { native: "Il / Elle", english: "s'appelle" },
            { native: "Nous", english: "nous appelons" }
          ]
        },
        {
          id: "fr-u1-l3-q18",
          type: "audio_listen",
          phrase: "Ravi de vous rencontrer !",
          prompt: "Listen to the phrase. What does it mean?",
          options: [
            "Delighted to meet you! / Pleased to meet you!",
            "Thank you for the meal!",
            "I need some assistance!",
            "Where is the train station?"
          ],
          correctAnswer: "Delighted to meet you! / Pleased to meet you!",
          explanation: "'Ravi de vous rencontrer !' expresses delight in meeting someone."
        },
        {
          id: "fr-u1-l3-q19",
          type: "fill_blank",
          sentence: "Elles ___ Sophie et Camille.",
          missingWord: "s'appellent",
          options: ["s'appellent", "m'appelle", "s'appelle", "t'appelles"],
          correctAnswer: "s'appellent",
          explanation: "Third person plural feminine takes 's'appellent'."
        },
        {
          id: "fr-u1-l3-q20",
          type: "multiple_choice",
          prompt: "Which answer correctly answers 'Qui est-ce ?' (Who is this?)?",
          options: [
            "C'est mon ami Nicolas.",
            "Il est cinq heures.",
            "Il fait beau.",
            "Merci beaucoup."
          ],
          correctAnswer: "C'est mon ami Nicolas.",
          explanation: "'C'est mon ami Nicolas' (This is my friend Nicolas) directly identifies a person."
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
          prompt: "Match French numbers 0 to 3 with their digits:",
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
          explanation: "'Un, deux, trois' means 'One, two, three'."
        },
        {
          id: "fr-u1-l4-q11",
          type: "matching",
          prompt: "Match teens numbers (11 to 14):",
          pairs: [
            { native: "Onze", english: "11" },
            { native: "Douze", english: "12" },
            { native: "Treize", english: "13" },
            { native: "Quatorze", english: "14" }
          ]
        },
        {
          id: "fr-u1-l4-q12",
          type: "matching",
          prompt: "Match teens numbers (15 to 19):",
          pairs: [
            { native: "Quinze", english: "15" },
            { native: "Seize", english: "16" },
            { native: "Dix-sept", english: "17" },
            { native: "Dix-neuf", english: "19" }
          ]
        },
        {
          id: "fr-u1-l4-q13",
          type: "multiple_choice",
          prompt: "How is 21 written in French?",
          options: ["Vingt et un", "Vingt-un", "Vingt un", "Vingt et une"],
          correctAnswer: "Vingt et un",
          explanation: "In 21, 31, 41, 51, 61, the conjunction 'et' is used: 'vingt et un'."
        },
        {
          id: "fr-u1-l4-q14",
          type: "audio_listen",
          phrase: "Quarante-deux",
          prompt: "Listen to the audio. What number is 'Quarante-deux'?",
          options: ["42", "24", "14", "40"],
          correctAnswer: "42",
          explanation: "'Quarante-deux' is 42."
        },
        {
          id: "fr-u1-l4-q15",
          type: "fill_blank",
          sentence: "Trente plus trente égale ___ (60).",
          missingWord: "soixante",
          options: ["soixante", "cinquante", "soixante-dix", "cent"],
          correctAnswer: "soixante",
          explanation: "30 + 30 = 60 ('soixante')."
        },
        {
          id: "fr-u1-l4-q16",
          type: "multiple_choice",
          prompt: "How do you say 75 in French?",
          options: ["Soixante-quinze (60 + 15)", "Septante-cinq", "Soixante-cinq", "Quatre-vingt-cinq"],
          correctAnswer: "Soixante-quinze (60 + 15)",
          explanation: "75 is calculated as 60 + 15 = 'soixante-quinze'."
        },
        {
          id: "fr-u1-l4-q17",
          type: "audio_listen",
          phrase: "Quatre-vingt-huit",
          prompt: "Listen to the number. What is 'Quatre-vingt-huit'?",
          options: ["88", "98", "78", "80"],
          correctAnswer: "88",
          explanation: "'Quatre-vingt-huit' is 88 ((4 × 20) + 8)."
        },
        {
          id: "fr-u1-l4-q18",
          type: "fill_blank",
          sentence: "Quatre-vingt-dix plus cinq égale ___ (95).",
          missingWord: "quatre-vingt-quinze",
          options: ["quatre-vingt-quinze", "quatre-vingt-cinq", "soixante-quinze", "cent"],
          correctAnswer: "quatre-vingt-quinze",
          explanation: "90 + 5 = 95 ('quatre-vingt-quinze')."
        },
        {
          id: "fr-u1-l4-q19",
          type: "scramble",
          prompt: "Arrange in French: 'soixante-dix-sept' (77)",
          tokens: ["soixante-dix-sept", "quarante", "dix"],
          correctTokens: ["soixante-dix-sept"],
          explanation: "'Soixante-dix-sept' is 77 (60 + 17)."
        },
        {
          id: "fr-u1-l4-q20",
          type: "multiple_choice",
          prompt: "How are French telephone numbers (e.g. 06 12 34 56 78) typically read?",
          options: [
            "In 2-digit pairs: zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit",
            "Single digits one by one",
            "All as one giant number",
            "Backwards from the end"
          ],
          correctAnswer: "In 2-digit pairs: zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit",
          explanation: "In France, phone numbers are almost universally read in two-digit blocks."
        }
      ]
    }
  ]
};
