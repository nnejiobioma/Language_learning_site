// =========================================================================
// French Level A1 - Unit 2: Personal Universe
// Lesson 1: Age & The Verb 'Avoir' (20 questions)
// Lesson 2: Nationalities, Countries & 'Être' (20 questions)
// Lesson 3: Professions & Work (20 questions)
// Lesson 4: Family & Hobbies (20 questions)
// =========================================================================

export const frenchUnit2 = {
  id: "fr-unit-2",
  cefrLevel: "A1",
  title: "Unit 2 (A1): Personal Universe",
  subtitle: "Talking about your age, nationality, profession, family, and hobbies.",
  icon: "User",
  color: "#3b82f6",
  lessons: [
    {
      id: "fr-u2-l1",
      title: "Lesson 1: Age & The Verb 'Avoir'",
      description: "Master the essential irregular verb 'Avoir' (to have) and express age, possession, and bodily sensations.",
      xp: 20,
      questions: [
        {
          id: "fr-u2-l1-q1",
          type: "multiple_choice",
          prompt: "Which auxiliary verb is used to express age in French (e.g. 'I am 25 years old')?",
          options: ["Avoir (to have)", "Être (to be)", "Faire (to do/make)", "Aller (to go)"],
          correctAnswer: "Avoir (to have)",
          explanation: "In French, you 'have years' using avoir: 'J'ai 25 ans' (literally: I have 25 years)."
        },
        {
          id: "fr-u2-l1-q2",
          type: "matching",
          prompt: "Match subject pronouns with 'Avoir' conjugations:",
          pairs: [
            { native: "J' (Je)", english: "ai" },
            { native: "Tu", english: "as" },
            { native: "Il / Elle / On", english: "a" },
            { native: "Nous", english: "avons" }
          ]
        },
        {
          id: "fr-u2-l1-q3",
          type: "matching",
          prompt: "Match plural subject pronouns with 'Avoir':",
          pairs: [
            { native: "Vous", english: "avez" },
            { native: "Ils / Elles", english: "ont" },
            { native: "J'", english: "ai" },
            { native: "Nous", english: "avons" }
          ]
        },
        {
          id: "fr-u2-l1-q4",
          type: "audio_listen",
          phrase: "J'ai trente ans.",
          prompt: "Listen to the audio. How old is the speaker?",
          options: ["30 years old", "13 years old", "3 years old", "33 years old"],
          correctAnswer: "30 years old",
          explanation: "'Trente' means 30: 'J'ai trente ans' = I am 30 years old."
        },
        {
          id: "fr-u2-l1-q5",
          type: "fill_blank",
          sentence: "Quel âge ___-tu ?",
          missingWord: "as",
          options: ["as", "es", "ai", "a"],
          correctAnswer: "as",
          explanation: "With 'tu', the verb avoir is 'as': 'Quel âge as-tu ?' (How old are you?)."
        },
        {
          id: "fr-u2-l1-q6",
          type: "multiple_choice",
          prompt: "How do you say 'We are hungry' using the verb avoir?",
          options: ["Nous avons faim", "Nous sommes faim", "Nous faisons faim", "Nous avons soif"],
          correctAnswer: "Nous avons faim",
          explanation: "'Avoir faim' expresses hunger in French: 'Nous avons faim'."
        },
        {
          id: "fr-u2-l1-q7",
          type: "matching",
          prompt: "Match French bodily sensations using 'Avoir':",
          pairs: [
            { native: "Avoir faim", english: "To be hungry" },
            { native: "Avoir soif", english: "To be thirsty" },
            { native: "Avoir chaud", english: "To be hot / warm" },
            { native: "Avoir froid", english: "To be cold" }
          ]
        },
        {
          id: "fr-u2-l1-q8",
          type: "audio_listen",
          phrase: "Il a soif.",
          prompt: "Listen to the sentence. What does he need?",
          options: ["Something to drink (he is thirsty)", "Something to eat", "A warm jacket", "A place to sleep"],
          correctAnswer: "Something to drink (he is thirsty)",
          explanation: "'Avoir soif' means to be thirsty."
        },
        {
          id: "fr-u2-l1-q9",
          type: "scramble",
          prompt: "Assemble: 'Quel âge avez-vous ?' (formal)",
          tokens: ["Quel", "âge", "avez-vous", "?"],
          correctTokens: ["Quel", "âge", "avez-vous", "?"],
          explanation: "'Quel âge avez-vous ?' is the polite way to ask someone's age."
        },
        {
          id: "fr-u2-l1-q10",
          type: "fill_blank",
          sentence: "Elle ___ un beau chat noir.",
          missingWord: "a",
          options: ["a", "est", "as", "ont"],
          correctAnswer: "a",
          explanation: "With 'Elle', the present tense of avoir is 'a': 'Elle a un chat'."
        },
        {
          id: "fr-u2-l1-q11",
          type: "multiple_choice",
          prompt: "How do you say 'I am sleepy' in French?",
          options: ["J'ai sommeil", "Je suis dormi", "J'ai nuit", "Je fais sommeil"],
          correctAnswer: "J'ai sommeil",
          explanation: "'Avoir sommeil' means to feel sleepy/tired."
        },
        {
          id: "fr-u2-l1-q12",
          type: "matching",
          prompt: "Match idiomatic expressions with 'Avoir':",
          pairs: [
            { native: "Avoir peur", english: "To be afraid / scared" },
            { native: "Avoir besoin de", english: "To need" },
            { native: "Avoir envie de", english: "To feel like / fancy" },
            { native: "Avoir raison", english: "To be right" }
          ]
        },
        {
          id: "fr-u2-l1-q13",
          type: "audio_listen",
          phrase: "Nous avons besoin d'aide.",
          prompt: "Listen to the phrase. What do they need?",
          options: ["They need help", "They want money", "They are cold", "They are leaving"],
          correctAnswer: "They need help",
          explanation: "'Avoir besoin d'aide' means to need assistance/help."
        },
        {
          id: "fr-u2-l1-q14",
          type: "multiple_choice",
          prompt: "What happens to indefinite articles (un, une, des) in a negative sentence with 'avoir'?",
          options: [
            "They turn into 'de' or 'd'' (e.g. 'Je n'ai pas de voiture')",
            "They double in length",
            "They remain unchanged",
            "They turn into 'le' or 'la'"
          ],
          correctAnswer: "They turn into 'de' or 'd'' (e.g. 'Je n'ai pas de voiture')",
          explanation: "In negative sentences, un/une/des become 'de' (or 'd'' before vowels)."
        },
        {
          id: "fr-u2-l1-q15",
          type: "fill_blank",
          sentence: "Je n'ai pas ___ frères ni sœurs.",
          missingWord: "de",
          options: ["de", "des", "un", "le"],
          correctAnswer: "de",
          explanation: "Negative form: 'pas de' replaces 'des': 'Je n'ai pas de frères'."
        },
        {
          id: "fr-u2-l1-q16",
          type: "scramble",
          prompt: "Assemble: 'Ils ont deux enfants'",
          tokens: ["Ils", "ont", "deux", "enfants"],
          correctTokens: ["Ils", "ont", "deux", "enfants"],
          explanation: "'Ils ont deux enfants' means 'They have two children'."
        },
        {
          id: "fr-u2-l1-q17",
          type: "multiple_choice",
          prompt: "How do you say 'You are lucky' in French?",
          options: ["Tu as de la chance", "Tu es chance", "Tu fais de la chance", "Tu as heureux"],
          correctAnswer: "Tu as de la chance",
          explanation: "'Avoir de la chance' is the idiom for being lucky."
        },
        {
          id: "fr-u2-l1-q18",
          type: "audio_listen",
          phrase: "Vous avez quel âge ?",
          prompt: "Listen to the question. What does it ask?",
          options: ["How old are you?", "What time is it?", "How many children do you have?", "Where are you going?"],
          correctAnswer: "How old are you?",
          explanation: "'Vous avez quel âge ?' asks someone their age."
        },
        {
          id: "fr-u2-l1-q19",
          type: "fill_blank",
          sentence: "Mon fils ___ huit ans aujourd'hui.",
          missingWord: "a",
          options: ["a", "est", "ont", "as"],
          correctAnswer: "a",
          explanation: "Subject is 'Mon fils' (he) -> 'a': 'Mon fils a huit ans'."
        },
        {
          id: "fr-u2-l1-q20",
          type: "multiple_choice",
          prompt: "Which sentence is grammatically INCORRECT in French?",
          options: [
            "Je suis vingt ans (Incorrect - must use 'avoir')",
            "J'ai vingt ans",
            "Elle a faim",
            "Nous avons chaud"
          ],
          correctAnswer: "Je suis vingt ans (Incorrect - must use 'avoir')",
          explanation: "Saying 'Je suis vingt ans' is a classic mistake. You must say 'J'ai vingt ans'."
        }
      ]
    },
    {
      id: "fr-u2-l2",
      title: "Lesson 2: Nationalities, Countries & 'Être'",
      description: "Master the verb 'Être' (to be), express country origins, and form masculine and feminine nationalities.",
      xp: 20,
      questions: [
        {
          id: "fr-u2-l2-q1",
          type: "multiple_choice",
          prompt: "What is the conjugation of 'Être' for 'Je' (I)?",
          options: ["Je suis", "J'ai", "Je fais", "Je vais"],
          correctAnswer: "Je suis",
          explanation: "'Je suis' means 'I am'."
        },
        {
          id: "fr-u2-l2-q2",
          type: "matching",
          prompt: "Match subject pronouns with 'Être':",
          pairs: [
            { native: "Je", english: "suis" },
            { native: "Tu", english: "es" },
            { native: "Il / Elle", english: "est" },
            { native: "Nous", english: "sommes" }
          ]
        },
        {
          id: "fr-u2-l2-q3",
          type: "matching",
          prompt: "Match plural pronouns with 'Être':",
          pairs: [
            { native: "Vous", english: "êtes" },
            { native: "Ils / Elles", english: "sont" },
            { native: "C'", english: "est" },
            { native: "Ce", english: "sont" }
          ]
        },
        {
          id: "fr-u2-l2-q4",
          type: "audio_listen",
          phrase: "Je suis français.",
          prompt: "Listen to the speaker. What nationality is he stating?",
          options: ["French (masculine)", "English", "Italian", "Spanish"],
          correctAnswer: "French (masculine)",
          explanation: "'Je suis français' means 'I am French'."
        },
        {
          id: "fr-u2-l2-q5",
          type: "multiple_choice",
          prompt: "How does the nationality 'français' change when referring to a woman?",
          options: ["française (adds 'e')", "françaises", "français", "françoi"],
          correctAnswer: "française (adds 'e')",
          explanation: "In feminine form, an 'e' is added: 'Elle est française'."
        },
        {
          id: "fr-u2-l2-q6",
          type: "matching",
          prompt: "Match masculine and feminine nationalities:",
          pairs: [
            { native: "américain", english: "américaine" },
            { native: "espagnol", english: "espagnole" },
            { native: "italien", english: "italienne (doubles 'n')" },
            { native: "canadien", english: "canadienne" }
          ]
        },
        {
          id: "fr-u2-l2-q7",
          type: "fill_blank",
          sentence: "Marie habite à Paris, elle est ___.",
          missingWord: "française",
          options: ["française", "français", "france", "francophone"],
          correctAnswer: "française",
          explanation: "Marie is female, so the feminine agreement 'française' is required."
        },
        {
          id: "fr-u2-l2-q8",
          type: "multiple_choice",
          prompt: "Which preposition is used for feminine countries (ending in -e, e.g. France, Italie)?",
          options: ["en (en France, en Italie)", "au", "aux", "à"],
          correctAnswer: "en (en France, en Italie)",
          explanation: "Feminine countries take the preposition 'en': 'J'habite en France'."
        },
        {
          id: "fr-u2-l2-q9",
          type: "matching",
          prompt: "Match country prepositions:",
          pairs: [
            { native: "en France (fem)", english: "in / to France" },
            { native: "au Japon (masc)", english: "in / to Japan" },
            { native: "aux États-Unis (plural)", english: "in / to the United States" },
            { native: "à Paris (city)", english: "in / to Paris" }
          ]
        },
        {
          id: "fr-u2-l2-q10",
          type: "audio_listen",
          phrase: "Nous sommes au Canada.",
          prompt: "Listen to the sentence. Where are they located?",
          options: ["In Canada", "In France", "In Cameroon", "In Switzerland"],
          correctAnswer: "In Canada",
          explanation: "Canada is masculine, so it takes 'au': 'Nous sommes au Canada'."
        },
        {
          id: "fr-u2-l2-q11",
          type: "fill_blank",
          sentence: "Ils ___ japonais.",
          missingWord: "sont",
          options: ["sont", "ont", "sommes", "êtes"],
          correctAnswer: "sont",
          explanation: "With 'Ils', the conjugation of être is 'sont': 'Ils sont japonais'."
        },
        {
          id: "fr-u2-l2-q12",
          type: "scramble",
          prompt: "Assemble: 'Elle est allemande et il est italien'",
          tokens: ["Elle", "est", "allemande", "et", "il", "est", "italien"],
          correctTokens: ["Elle", "est", "allemande", "et", "il", "est", "italien"],
          explanation: "'Elle est allemande et il est italien' (She is German and he is Italian)."
        },
        {
          id: "fr-u2-l2-q13",
          type: "multiple_choice",
          prompt: "What preposition is used before cities in French (e.g. Nice, Lyon, Tokyo)?",
          options: ["à (à Nice, à Lyon)", "en", "au", "dans"],
          correctAnswer: "à (à Nice, à Lyon)",
          explanation: "Cities always take the preposition 'à': 'J'habite à Lyon'."
        },
        {
          id: "fr-u2-l2-q14",
          type: "audio_listen",
          phrase: "Tu es d'accord ?",
          prompt: "Listen to the idiom. What does 'Être d'accord' mean?",
          options: ["To agree", "To be late", "To be ready", "To be happy"],
          correctAnswer: "To agree",
          explanation: "'Être d'accord' means to agree: 'Tu es d'accord ?' (Do you agree?)."
        },
        {
          id: "fr-u2-l2-q15",
          type: "matching",
          prompt: "Match expressions with 'Être':",
          pairs: [
            { native: "Être en retard", english: "To be late" },
            { native: "Être en avance", english: "To be early" },
            { native: "Être à l'heure", english: "To be on time" },
            { native: "Être fatigué(e)", english: "To be tired" }
          ]
        },
        {
          id: "fr-u2-l2-q16",
          type: "fill_blank",
          sentence: "Dépêche-toi, nous sommes en ___ ! (We are late!)",
          missingWord: "retard",
          options: ["retard", "avance", "heure", "train"],
          correctAnswer: "retard",
          explanation: "'Être en retard' means to be late."
        },
        {
          id: "fr-u2-l2-q17",
          type: "multiple_choice",
          prompt: "How do you ask someone 'Where are you from?' politely?",
          options: ["D'où venez-vous ?", "Où allez-vous ?", "Comment vous appelez-vous ?", "Qui êtes-vous ?"],
          correctAnswer: "D'où venez-vous ?",
          explanation: "'D'où venez-vous ?' asks 'Where do you come from?'."
        },
        {
          id: "fr-u2-l2-q18",
          type: "audio_listen",
          phrase: "Je viens du Nigéria.",
          prompt: "Listen to the audio. Where does the speaker come from?",
          options: ["Nigeria", "Niger", "Norway", "Nicaragua"],
          correctAnswer: "Nigeria",
          explanation: "'Je viens du Nigéria' means 'I come from Nigeria'."
        },
        {
          id: "fr-u2-l2-q19",
          type: "scramble",
          prompt: "Assemble: 'Vous êtes prêt ?' (Are you ready?)",
          tokens: ["Vous", "êtes", "prêt", "?"],
          correctTokens: ["Vous", "êtes", "prêt", "?"],
          explanation: "'Vous êtes prêt ?' asks 'Are you ready?'."
        },
        {
          id: "fr-u2-l2-q20",
          type: "multiple_choice",
          prompt: "Are nationality adjectives capitalized in French when modifying a noun (e.g. 'un livre français')?",
          options: [
            "No, nationality adjectives are in lowercase (français, anglais)",
            "Yes, they must always be capitalized like in English",
            "Only on weekends",
            "Only if they refer to food"
          ],
          correctAnswer: "No, nationality adjectives are in lowercase (français, anglais)",
          explanation: "In French, nationality adjectives take a lowercase letter ('un vin français'), while proper nouns for people take a capital ('les Français')."
        }
      ]
    },
    {
      id: "fr-u2-l3",
      title: "Lesson 3: Professions & Work",
      description: "Talk about occupations, workplace environments, and master the no-article rule with jobs.",
      xp: 20,
      questions: [
        {
          id: "fr-u2-l3-q1",
          type: "multiple_choice",
          prompt: "In French, what is the grammatical rule when stating your profession with 'être'?",
          options: [
            "Do NOT use an article (say 'Je suis médecin', NOT 'Je suis un médecin')",
            "Always use a definite article ('Je suis le médecin')",
            "Always use an indefinite article ('Je suis un médecin')",
            "Professions cannot be used with être"
          ],
          correctAnswer: "Do NOT use an article (say 'Je suis médecin', NOT 'Je suis un médecin')",
          explanation: "French omits the article when stating professions directly after être: 'Je suis avocat'."
        },
        {
          id: "fr-u2-l3-q2",
          type: "matching",
          prompt: "Match masculine and feminine professions:",
          pairs: [
            { native: "un infirmier", english: "une infirmière (nurse)" },
            { native: "un boulanger", english: "une boulangère (baker)" },
            { native: "un cuisinier", english: "une cuisinière (cook/chef)" },
            { native: "un enseignant", english: "une enseignante (teacher)" }
          ]
        },
        {
          id: "fr-u2-l3-q3",
          type: "audio_listen",
          phrase: "Elle est avocate.",
          prompt: "Listen to the sentence. What is her profession?",
          options: ["Lawyer (female)", "Doctor", "Architect", "Accountant"],
          correctAnswer: "Lawyer (female)",
          explanation: "'Avocate' is a female lawyer (masculine: 'avocat')."
        },
        {
          id: "fr-u2-l3-q4",
          type: "fill_blank",
          sentence: "Mon père travaille à l'hôpital, il est ___.",
          missingWord: "médecin",
          options: ["médecin", "boulanger", "étudiant", "chanteur"],
          correctAnswer: "médecin",
          explanation: "Someone working at a hospital is a 'médecin' (doctor)."
        },
        {
          id: "fr-u2-l3-q5",
          type: "matching",
          prompt: "Match common professions with their English meaning:",
          pairs: [
            { native: "Ingénieur", english: "Engineer" },
            { native: "Journaliste", english: "Journalist" },
            { native: "Artiste", english: "Artist" },
            { native: "Comptable", english: "Accountant" }
          ]
        },
        {
          id: "fr-u2-l3-q6",
          type: "multiple_choice",
          prompt: "How do you ask 'What is your job / What do you do for a living?' in polite French?",
          options: [
            "Que faites-vous dans la vie ?",
            "Où allez-vous ?",
            "Comment mangez-vous ?",
            "Combien coûte le travail ?"
          ],
          correctAnswer: "Que faites-vous dans la vie ?",
          explanation: "'Que faites-vous dans la vie ?' translates to 'What do you do in life?'."
        },
        {
          id: "fr-u2-l3-q7",
          type: "audio_listen",
          phrase: "Je suis étudiant à l'université.",
          prompt: "What is the speaker's status?",
          options: ["University student", "University professor", "High school janitor", "Company director"],
          correctAnswer: "University student",
          explanation: "'Je suis étudiant à l'université' means 'I am a university student'."
        },
        {
          id: "fr-u2-l3-q8",
          type: "scramble",
          prompt: "Assemble: 'Il travaille dans un bureau'",
          tokens: ["Il", "travaille", "dans", "un", "bureau"],
          correctTokens: ["Il", "travaille", "dans", "un", "bureau"],
          explanation: "'Il travaille dans un bureau' means 'He works in an office'."
        },
        {
          id: "fr-u2-l3-q9",
          type: "matching",
          prompt: "Match workplace locations:",
          pairs: [
            { native: "Dans une école", english: "In a school" },
            { native: "Dans un restaurant", english: "In a restaurant" },
            { native: "Dans une entreprise", english: "In a company / firm" },
            { native: "En télétravail", english: "Working remotely / from home" }
          ]
        },
        {
          id: "fr-u2-l3-q10",
          type: "fill_blank",
          sentence: "Elle prépare le pain dans la boulangerie, elle est ___.",
          missingWord: "boulangère",
          options: ["boulangère", "serveuse", "médecin", "avocate"],
          correctAnswer: "boulangère",
          explanation: "A woman who bakes and sells bread is a 'boulangère'."
        },
        {
          id: "fr-u2-l3-q11",
          type: "multiple_choice",
          prompt: "What is the feminine form of 'directeur' (director/manager)?",
          options: ["directrice", "directeuse", "directeure", "directore"],
          correctAnswer: "directrice",
          explanation: "Nouns ending in -teur often become -trice: 'directrice', 'actrice'."
        },
        {
          id: "fr-u2-l3-q12",
          type: "audio_listen",
          phrase: "Mon frère est pharmacien.",
          prompt: "Listen to the phrase. What is the brother's profession?",
          options: ["Pharmacist", "Physician", "Farmer", "Photographer"],
          correctAnswer: "Pharmacist",
          explanation: "'Pharmacien' is a pharmacist (feminine: 'pharmacienne')."
        },
        {
          id: "fr-u2-l3-q13",
          type: "matching",
          prompt: "Match service professions with English:",
          pairs: [
            { native: "un serveur / une serveuse", english: "waiter / waitress" },
            { native: "un coiffeur / une coiffeuse", english: "hairdresser / barber" },
            { native: "un vendeur / une vendeuse", english: "salesperson / shop clerk" },
            { native: "un policier / une policière", english: "police officer" }
          ]
        },
        {
          id: "fr-u2-l3-q14",
          type: "scramble",
          prompt: "Assemble: 'Quel est votre métier ?' (What is your occupation?)",
          tokens: ["Quel", "est", "votre", "métier", "?"],
          correctTokens: ["Quel", "est", "votre", "métier", "?"],
          explanation: "'Quel est votre métier ?' asks for someone's occupation."
        },
        {
          id: "fr-u2-l3-q15",
          type: "fill_blank",
          sentence: "Je cherche du ___ depuis deux mois. (I am looking for work)",
          missingWord: "travail",
          options: ["travail", "métier", "poste", "profession"],
          correctAnswer: "travail",
          explanation: "'Chercher du travail' is the standard expression for job hunting."
        },
        {
          id: "fr-u2-l3-q16",
          type: "multiple_choice",
          prompt: "How do you say 'She is retired' in French?",
          options: ["Elle est à la retraite / retraitée", "Elle est fatiguée", "Elle est au chômage", "Elle est en vacances"],
          correctAnswer: "Elle est à la retraite / retraitée",
          explanation: "'Être à la retraite' means to be retired."
        },
        {
          id: "fr-u2-l3-q17",
          type: "audio_listen",
          phrase: "Il est au chômage.",
          prompt: "Listen to the phrase. What is his employment situation?",
          options: ["He is currently unemployed", "He works full time", "He received a promotion", "He is on sick leave"],
          correctAnswer: "He is currently unemployed",
          explanation: "'Être au chômage' means to be unemployed."
        },
        {
          id: "fr-u2-l3-q18",
          type: "matching",
          prompt: "Match employment terms:",
          pairs: [
            { native: "Un contrat de travail", english: "Employment contract" },
            { native: "Le salaire", english: "Salary / Wage" },
            { native: "Un collègue", english: "A colleague / Coworker" },
            { native: "L'employeur", english: "The employer / Boss" }
          ]
        },
        {
          id: "fr-u2-l3-q19",
          type: "fill_blank",
          sentence: "Sophie adore dessiner, elle veut être ___.",
          missingWord: "architecte",
          options: ["architecte", "comptable", "boulangère", "serveuse"],
          correctAnswer: "architecte",
          explanation: "Someone who loves drawing and designing structures wants to be an 'architecte'."
        },
        {
          id: "fr-u2-l3-q20",
          type: "multiple_choice",
          prompt: "Which pair correctly matches masculine and feminine forms?",
          options: [
            "un musicien / une musicienne",
            "un musicien / une musiciene",
            "un musicien / une musicie",
            "un musicien / une musicia"
          ],
          correctAnswer: "un musicien / une musicienne",
          explanation: "Words ending in -ien double the 'n' and add 'e': 'musicien' -> 'musicienne'."
        }
      ]
    },
    {
      id: "fr-u2-l4",
      title: "Lesson 4: Family & Hobbies",
      description: "Describe family members, possessive adjectives (mon/ma/mes), and express favorite hobbies and sports.",
      xp: 20,
      questions: [
        {
          id: "fr-u2-l4-q1",
          type: "matching",
          prompt: "Match immediate family members:",
          pairs: [
            { native: "Le père", english: "Father" },
            { native: "La mère", english: "Mother" },
            { native: "Le frère", english: "Brother" },
            { native: "La sœur", english: "Sister" }
          ]
        },
        {
          id: "fr-u2-l4-q2",
          type: "matching",
          prompt: "Match extended family members:",
          pairs: [
            { native: "Le grand-père", english: "Grandfather" },
            { native: "La grand-mère", english: "Grandmother" },
            { native: "L'oncle", english: "Uncle" },
            { native: "La tante", english: "Aunt" }
          ]
        },
        {
          id: "fr-u2-l4-q3",
          type: "multiple_choice",
          prompt: "Which possessive adjectives correspond to 'my' in French?",
          options: [
            "mon (masc), ma (fem), mes (plural)",
            "ton, ta, tes",
            "son, sa, ses",
            "notre, nos"
          ],
          correctAnswer: "mon (masc), ma (fem), mes (plural)",
          explanation: "Possessives agree with the possessed noun: 'mon frère', 'ma sœur', 'mes parents'."
        },
        {
          id: "fr-u2-l4-q4",
          type: "audio_listen",
          phrase: "Voici mon frère et ma sœur.",
          prompt: "Listen to the sentence. Who is being presented?",
          options: [
            "My brother and my sister",
            "My mother and my father",
            "My uncle and my aunt",
            "My cousins"
          ],
          correctAnswer: "My brother and my sister",
          explanation: "'Voici mon frère et ma sœur' means 'Here are my brother and my sister'."
        },
        {
          id: "fr-u2-l4-q5",
          type: "fill_blank",
          sentence: "C'est ___ amie Sophie. (She is my friend)",
          missingWord: "mon",
          options: ["mon", "ma", "mes", "sa"],
          correctAnswer: "mon",
          explanation: "Rule: Before a feminine noun starting with a vowel ('amie'), use 'mon' instead of 'ma' for sound flow!"
        },
        {
          id: "fr-u2-l4-q6",
          type: "multiple_choice",
          prompt: "Why do we say 'mon école' (my school) even though 'école' is feminine?",
          options: [
            "To avoid a harsh hiatus between two vowels ('ma école' sounds awkward)",
            "Because école is secretly masculine",
            "It is a spelling error",
            "Only teachers say 'mon école'"
          ],
          correctAnswer: "To avoid a harsh hiatus between two vowels ('ma école' sounds awkward)",
          explanation: "'Mon', 'ton', 'son' are used before feminine words starting with a vowel or silent h (mon école, ton amie, son histoire)."
        },
        {
          id: "fr-u2-l4-q7",
          type: "matching",
          prompt: "Match possessive adjectives for 'your' (informal):",
          pairs: [
            { native: "Ton", english: "Your (masculine singular)" },
            { native: "Ta", english: "Your (feminine singular)" },
            { native: "Tes", english: "Your (plural)" },
            { native: "Votre", english: "Your (formal or plural)" }
          ]
        },
        {
          id: "fr-u2-l4-q8",
          type: "audio_listen",
          phrase: "J'aime jouer au football.",
          prompt: "Listen to the hobby. What does the speaker enjoy doing?",
          options: ["Playing soccer / football", "Playing the piano", "Reading novels", "Cooking dinner"],
          correctAnswer: "Playing soccer / football",
          explanation: "'Jouer au football' means playing soccer."
        },
        {
          id: "fr-u2-l4-q9",
          type: "multiple_choice",
          prompt: "What is the key preposition difference between playing sports vs musical instruments with 'jouer'?",
          options: [
            "'Jouer à' for sports/games (jouer au tennis); 'Jouer de' for instruments (jouer du piano)",
            "There is no difference, both use 'avec'",
            "'Jouer de' for sports; 'Jouer à' for music",
            "Instruments require the verb 'faire'"
          ],
          correctAnswer: "'Jouer à' for sports/games (jouer au tennis); 'Jouer de' for instruments (jouer du piano)",
          explanation: "French uses 'jouer à + sport' (au football) and 'jouer de + instrument' (du violon, de la guitare)."
        },
        {
          id: "fr-u2-l4-q10",
          type: "fill_blank",
          sentence: "Elle joue ___ guitare tous les soirs.",
          missingWord: "de la",
          options: ["de la", "à la", "du", "au"],
          correctAnswer: "de la",
          explanation: "Musical instrument (feminine: la guitare) -> 'jouer de la guitare'."
        },
        {
          id: "fr-u2-l4-q11",
          type: "scramble",
          prompt: "Assemble: 'Mon passe-temps préféré est la lecture'",
          tokens: ["Mon", "passe-temps", "préféré", "est", "la", "lecture"],
          correctTokens: ["Mon", "passe-temps", "préféré", "est", "la", "lecture"],
          explanation: "'Mon passe-temps préféré est la lecture' means 'My favorite hobby is reading'."
        },
        {
          id: "fr-u2-l4-q12",
          type: "matching",
          prompt: "Match hobbies with English:",
          pairs: [
            { native: "Faire du vélo", english: "Cycling / Riding a bike" },
            { native: "Faire de la natation", english: "Swimming" },
            { native: "Regarder des films", english: "Watching movies" },
            { native: "Écouter de la musique", english: "Listening to music" }
          ]
        },
        {
          id: "fr-u2-l4-q13",
          type: "audio_listen",
          phrase: "Mes parents habitent à Bordeaux.",
          prompt: "Listen to the sentence. Who lives in Bordeaux?",
          options: ["My parents", "My grandparents", "My cousins", "My friends"],
          correctAnswer: "My parents",
          explanation: "'Mes parents habitent à Bordeaux' means 'My parents live in Bordeaux'."
        },
        {
          id: "fr-u2-l4-q14",
          type: "fill_blank",
          sentence: "Il a deux ___ : un fils et une fille.",
          missingWord: "enfants",
          options: ["enfants", "parents", "frères", "amis"],
          correctAnswer: "enfants",
          explanation: "'Enfants' means children (a son and a daughter)."
        },
        {
          id: "fr-u2-l4-q15",
          type: "multiple_choice",
          prompt: "How do you say 'My husband' and 'My wife' in French?",
          options: [
            "Mon mari et ma femme",
            "Mon homme et ma fille",
            "Mon père et ma mère",
            "Mon cousin et ma cousine"
          ],
          correctAnswer: "Mon mari et ma femme",
          explanation: "'Mon mari' is my husband and 'ma femme' is my wife."
        },
        {
          id: "fr-u2-l4-q16",
          type: "matching",
          prompt: "Match family relations:",
          pairs: [
            { native: "Le fils", english: "Son" },
            { native: "La fille", english: "Daughter" },
            { native: "Le cousin", english: "Male cousin" },
            { native: "La cousine", english: "Female cousin" }
          ]
        },
        {
          id: "fr-u2-l4-q17",
          type: "scramble",
          prompt: "Assemble: 'J'aime voyager et cuisiner'",
          tokens: ["J'aime", "voyager", "et", "cuisiner"],
          correctTokens: ["J'aime", "voyager", "et", "cuisiner"],
          explanation: "'J'aime voyager et cuisiner' means 'I like traveling and cooking'."
        },
        {
          id: "fr-u2-l4-q18",
          type: "audio_listen",
          phrase: "Quel est ton loisir préféré ?",
          prompt: "What is this question asking?",
          options: ["What is your favorite hobby?", "What is your father's name?", "Where do you work?", "How many pets do you have?"],
          correctAnswer: "What is your favorite hobby?",
          explanation: "'Loisir' is a synonym of hobby or pastime."
        },
        {
          id: "fr-u2-l4-q19",
          type: "fill_blank",
          sentence: "Nous adorons nous promener en ___ (nature).",
          missingWord: "forêt",
          options: ["forêt", "bureau", "cuisine", "garage"],
          correctAnswer: "forêt",
          explanation: "'Se promener en forêt' means walking in the forest/woods."
        },
        {
          id: "fr-u2-l4-q20",
          type: "multiple_choice",
          prompt: "Which possessive adjective is used for 'their' with plural nouns (e.g. 'their books')?",
          options: ["Leurs (leurs livres)", "Leur", "Ses", "Nos"],
          correctAnswer: "Leurs (leurs livres)",
          explanation: "'Leurs' with an 's' is used for plural possessed nouns ('leurs enfants', 'leurs livres')."
        }
      ]
    }
  ]
};
