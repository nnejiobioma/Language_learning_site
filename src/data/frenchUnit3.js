// =========================================================================
// French Level A1 - Unit 3: Daily Life & Routines
// Lesson 1: Telling Time in French (20 questions)
// Lesson 2: Reflexive Verbs & Morning Routine (20 questions)
// Lesson 3: Weather, Seasons & Climate (20 questions)
// =========================================================================

export const frenchUnit3 = {
  id: "fr-unit-3",
  cefrLevel: "A1",
  title: "Unit 3 (A1): Daily Life & Routines",
  subtitle: "Telling time, describing your daily routine (using reflexive verbs), and talking about the weather.",
  icon: "Clock",
  color: "#10b981",
  lessons: [
    {
      id: "fr-u3-l1",
      title: "Lesson 1: Telling Time in French",
      description: "Ask for and tell the time using the 12-hour and 24-hour official clock, fractions (et quart, et demie), and parts of the day.",
      xp: 20,
      questions: [
        {
          id: "fr-u3-l1-q1",
          type: "multiple_choice",
          prompt: "How do you ask 'What time is it?' in standard French?",
          options: ["Quelle heure est-il ?", "Quel temps fait-il ?", "Combien d'heures avez-vous ?", "Où est l'heure ?"],
          correctAnswer: "Quelle heure est-il ?",
          explanation: "'Quelle heure est-il ?' (or casually 'Il est quelle heure ?') means 'What time is it?'."
        },
        {
          id: "fr-u3-l1-q2",
          type: "audio_listen",
          phrase: "Il est huit heures.",
          prompt: "Listen to the audio. What time is it?",
          options: ["8:00 (It is eight o'clock)", "7:00", "18:00", "8:30"],
          correctAnswer: "8:00 (It is eight o'clock)",
          explanation: "'Huit heures' means 8 o'clock."
        },
        {
          id: "fr-u3-l1-q3",
          type: "matching",
          prompt: "Match French time fractions with English:",
          pairs: [
            { native: "et quart", english: "quarter past (:15)" },
            { native: "et demie", english: "half past (:30)" },
            { native: "moins le quart", english: "quarter to (:45)" },
            { native: "pile", english: "on the dot / sharp" }
          ]
        },
        {
          id: "fr-u3-l1-q4",
          type: "fill_blank",
          sentence: "Il est midi ___ (12:30).",
          missingWord: "et demi",
          options: ["et demi", "et quart", "moins vingt", "pile"],
          correctAnswer: "et demi",
          explanation: "With 'midi' (masculine), half past is 'midi et demi' (12:30 PM)."
        },
        {
          id: "fr-u3-l1-q5",
          type: "multiple_choice",
          prompt: "How do you say 12:00 noon vs 12:00 midnight in French?",
          options: [
            "Midi (noon) and Minuit (midnight)",
            "Douze heures and Zéro heure",
            "Matin and Soir",
            "Jour and Nuit"
          ],
          correctAnswer: "Midi (noon) and Minuit (midnight)",
          explanation: "'Il est midi' = 12:00 PM; 'Il est minuit' = 12:00 AM."
        },
        {
          id: "fr-u3-l1-q6",
          type: "audio_listen",
          phrase: "Il est dix heures moins le quart.",
          prompt: "Listen to the time. What clock time is stated?",
          options: ["9:45 (A quarter to ten)", "10:15", "10:45", "9:15"],
          correctAnswer: "9:45 (A quarter to ten)",
          explanation: "'Dix heures moins le quart' = 10 hours minus a quarter = 9:45."
        },
        {
          id: "fr-u3-l1-q7",
          type: "scramble",
          prompt: "Assemble: 'Il est sept heures et quart'",
          tokens: ["Il", "est", "sept", "heures", "et", "quart"],
          correctTokens: ["Il", "est", "sept", "heures", "et", "quart"],
          explanation: "'Il est sept heures et quart' means 'It is 7:15'."
        },
        {
          id: "fr-u3-l1-q8",
          type: "multiple_choice",
          prompt: "In train stations, airports, and official schedules in France, which clock system is universally used?",
          options: [
            "The 24-hour clock (e.g. 14h30, 19h15)",
            "AM / PM only",
            "Roman numerals",
            "Solar hours"
          ],
          correctAnswer: "The 24-hour clock (e.g. 14h30, 19h15)",
          explanation: "France uses the 24-hour military clock for all transport, television schedules, and official notices."
        },
        {
          id: "fr-u3-l1-q9",
          type: "matching",
          prompt: "Match 24-hour official times to their standard readings:",
          pairs: [
            { native: "14h00", english: "Quatorze heures (2:00 PM)" },
            { native: "16h30", english: "Seize heures trente (4:30 PM)" },
            { native: "20h00", english: "Vingt heures (8:00 PM - news time)" },
            { native: "22h15", english: "Vingt-deux heures quinze (10:15 PM)" }
          ]
        },
        {
          id: "fr-u3-l1-q10",
          type: "audio_listen",
          phrase: "Le train part à dix-huit heures quarante.",
          prompt: "What time does the train depart?",
          options: ["18:40 (6:40 PM)", "16:40", "18:14", "8:40 AM"],
          correctAnswer: "18:40 (6:40 PM)",
          explanation: "'Dix-huit heures quarante' is 18:40."
        },
        {
          id: "fr-u3-l1-q11",
          type: "fill_blank",
          sentence: "Le cours commence ___ neuf heures du matin.",
          missingWord: "à",
          options: ["à", "en", "de", "pour"],
          correctAnswer: "à",
          explanation: "At a specific time takes the preposition 'à': 'à neuf heures'."
        },
        {
          id: "fr-u3-l1-q12",
          type: "matching",
          prompt: "Match parts of the day:",
          pairs: [
            { native: "du matin", english: "in the morning (AM)" },
            { native: "de l'après-midi", english: "in the afternoon" },
            { native: "du soir", english: "in the evening" },
            { native: "de la nuit", english: "at night" }
          ]
        },
        {
          id: "fr-u3-l1-q13",
          type: "scramble",
          prompt: "Assemble: 'À quelle heure ouvrez-vous ?'",
          tokens: ["À", "quelle", "heure", "ouvrez-vous", "?"],
          correctTokens: ["À", "quelle", "heure", "ouvrez-vous", "?"],
          explanation: "'À quelle heure ouvrez-vous ?' asks 'What time do you open?'."
        },
        {
          id: "fr-u3-l1-q14",
          type: "multiple_choice",
          prompt: "Why does 'une heure' NOT have an 's' at the end, while 'deux heures' does?",
          options: [
            "Because 'une' is singular (1 hour); 'deux' is plural (hours)",
            "It is a dialect difference",
            "Silent letters are optional in French",
            "Only morning hours take 's'"
          ],
          correctAnswer: "Because 'une' is singular (1 hour); 'deux' is plural (hours)",
          explanation: "'Il est une heure' (singular); 'Il est deux heures' (plural with 's')."
        },
        {
          id: "fr-u3-l1-q15",
          type: "audio_listen",
          phrase: "Il est presque six heures.",
          prompt: "Listen to the phrase. What does 'presque' mean?",
          options: ["Almost (It is almost 6:00)", "Exactly", "Never", "Already past"],
          correctAnswer: "Almost (It is almost 6:00)",
          explanation: "'Presque' means almost / nearly."
        },
        {
          id: "fr-u3-l1-q16",
          type: "fill_blank",
          sentence: "Il est trois heures moins ___ (2:50).",
          missingWord: "dix",
          options: ["dix", "cinq", "vingt", "quart"],
          correctAnswer: "dix",
          explanation: "3 hours minus 10 minutes = 2:50 ('trois heures moins dix')."
        },
        {
          id: "fr-u3-l1-q17",
          type: "multiple_choice",
          prompt: "How do you say 'It's time to go' in colloquial French?",
          options: ["C'est l'heure d'y aller !", "Quelle heure va ?", "Il est le temps", "Nous allons heure"],
          correctAnswer: "C'est l'heure d'y aller !",
          explanation: "'C'est l'heure d'y aller !' means 'It's time to go!'."
        },
        {
          id: "fr-u3-l1-q18",
          type: "matching",
          prompt: "Match duration words with English:",
          pairs: [
            { native: "Une minute", english: "A minute" },
            { native: "Une seconde", english: "A second" },
            { native: "Une demi-heure", english: "Half an hour (30 mins)" },
            { native: "Deux heures", english: "Two hours" }
          ]
        },
        {
          id: "fr-u3-l1-q19",
          type: "audio_listen",
          phrase: "Je serai là dans une demi-heure.",
          prompt: "When will the speaker arrive?",
          options: ["In half an hour (30 minutes)", "In one hour", "Tomorrow", "In two minutes"],
          correctAnswer: "In half an hour (30 minutes)",
          explanation: "'Une demi-heure' means half an hour."
        },
        {
          id: "fr-u3-l1-q20",
          type: "scramble",
          prompt: "Assemble: 'Il est minuit pile'",
          tokens: ["Il", "est", "minuit", "pile"],
          correctTokens: ["Il", "est", "minuit", "pile"],
          explanation: "'Il est minuit pile' means 'It is midnight on the dot'."
        }
      ]
    },
    {
      id: "fr-u3-l2",
      title: "Lesson 2: Reflexive Verbs & Morning Routine",
      description: "Describe daily routines using reflexive verbs (se lever, se laver, s'habiller) and adverbs of frequency.",
      xp: 20,
      questions: [
        {
          id: "fr-u3-l2-q1",
          type: "multiple_choice",
          prompt: "What marks a reflexive verb in French (e.g. 'se lever')?",
          options: [
            "The reflexive pronoun 'se' showing that the subject performs the action on themselves",
            "An accent on the final vowel",
            "It must end in -oir",
            "It is only used in the past tense"
          ],
          correctAnswer: "The reflexive pronoun 'se' showing that the subject performs the action on themselves",
          explanation: "Reflexive verbs use pronouns matching the subject (me, te, se, nous, vous, se)."
        },
        {
          id: "fr-u3-l2-q2",
          type: "matching",
          prompt: "Match reflexive pronouns with subject pronouns:",
          pairs: [
            { native: "Je", english: "me (m')" },
            { native: "Tu", english: "te (t')" },
            { native: "Il / Elle", english: "se (s')" },
            { native: "Nous", english: "nous" }
          ]
        },
        {
          id: "fr-u3-l2-q3",
          type: "audio_listen",
          phrase: "Je me réveille à sept heures.",
          prompt: "Listen to the sentence. What time does the speaker wake up?",
          options: ["7:00 AM", "6:00 AM", "8:00 AM", "7:30 AM"],
          correctAnswer: "7:00 AM",
          explanation: "'Se réveiller' means to wake up: 'Je me réveille à 7h'."
        },
        {
          id: "fr-u3-l2-q4",
          type: "fill_blank",
          sentence: "Après le réveil, je me ___ du lit. (I get up)",
          missingWord: "lève",
          options: ["lève", "couche", "dors", "promène"],
          correctAnswer: "lève",
          explanation: "'Se lever' means to get out of bed / get up: 'je me lève'."
        },
        {
          id: "fr-u3-l2-q5",
          type: "matching",
          prompt: "Match morning routine actions:",
          pairs: [
            { native: "se laver", english: "to wash oneself" },
            { native: "se brosser les dents", english: "to brush one's teeth" },
            { native: "s'habiller", english: "to get dressed" },
            { native: "se coiffer", english: "to do/brush one's hair" }
          ]
        },
        {
          id: "fr-u3-l2-q6",
          type: "multiple_choice",
          prompt: "What is the difference between 'se réveiller' and 'se lever'?",
          options: [
            "'Se réveiller' is waking up; 'Se lever' is physically getting out of bed",
            "'Se réveiller' is getting dressed; 'Se lever' is taking a shower",
            "They are exact synonyms with no difference",
            "'Se lever' is only for the evening"
          ],
          correctAnswer: "'Se réveiller' is waking up; 'Se lever' is physically getting out of bed",
          explanation: "You can wake up ('se réveiller') at 7:00 but stay in bed until you get up ('se lever') at 7:15."
        },
        {
          id: "fr-u3-l2-q7",
          type: "audio_listen",
          phrase: "Je prends mon petit déjeuner.",
          prompt: "What routine step is this?",
          options: ["Having breakfast", "Eating dinner", "Going to sleep", "Brushing teeth"],
          correctAnswer: "Having breakfast",
          explanation: "'Prendre le petit déjeuner' means to eat breakfast."
        },
        {
          id: "fr-u3-l2-q8",
          type: "scramble",
          prompt: "Assemble: 'Elle se brosse les dents'",
          tokens: ["Elle", "se", "brosse", "les", "dents"],
          correctTokens: ["Elle", "se", "brosse", "les", "dents"],
          explanation: "'Elle se brosse les dents' means 'She brushes her teeth'."
        },
        {
          id: "fr-u3-l2-q9",
          type: "fill_blank",
          sentence: "Tu te ___ à quelle heure le matin ? (What time do you get up?)",
          missingWord: "lèves",
          options: ["lèves", "lève", "levez", "levons"],
          correctAnswer: "lèves",
          explanation: "With 'tu', the ending is -es: 'Tu te lèves'."
        },
        {
          id: "fr-u3-l2-q10",
          type: "matching",
          prompt: "Match evening routine actions:",
          pairs: [
            { native: "rentrer à la maison", english: "to return home" },
            { native: "dîner", english: "to eat dinner" },
            { native: "se déshabiller", english: "to undress" },
            { native: "se coucher", english: "to go to bed" }
          ]
        },
        {
          id: "fr-u3-l2-q11",
          type: "multiple_choice",
          prompt: "How do you say 'I go to bed at 11:00 PM'?",
          options: [
            "Je me couche à vingt-trois heures",
            "Je me lève à onze heures",
            "Je me réveille à minuit",
            "Je dors à la maison"
          ],
          correctAnswer: "Je me couche à vingt-trois heures",
          explanation: "'Se coucher' is the verb for going to bed: 'Je me couche à 23h'."
        },
        {
          id: "fr-u3-l2-q12",
          type: "audio_listen",
          phrase: "Nous nous préparons pour partir.",
          prompt: "Listen to the audio. What are they doing?",
          options: ["Getting ready to leave", "Going to sleep", "Eating lunch", "Cleaning the house"],
          correctAnswer: "Getting ready to leave",
          explanation: "'Se préparer' means to get ready."
        },
        {
          id: "fr-u3-l2-q13",
          type: "matching",
          prompt: "Match frequency adverbs with English:",
          pairs: [
            { native: "toujours", english: "always" },
            { native: "souvent", english: "often" },
            { native: "d'habitude", english: "usually / typically" },
            { native: "jamais", english: "never" }
          ]
        },
        {
          id: "fr-u3-l2-q14",
          type: "fill_blank",
          sentence: "Je ne me lève ___ avant huit heures le dimanche.",
          missingWord: "jamais",
          options: ["jamais", "toujours", "souvent", "tôt"],
          correctAnswer: "jamais",
          explanation: "Negative frequency: 'ne... jamais' means 'never' ('I never get up before 8:00')."
        },
        {
          id: "fr-u3-l2-q15",
          type: "scramble",
          prompt: "Assemble: 'D'habitude, je prends le métro'",
          tokens: ["D'habitude,", "je", "prends", "le", "métro"],
          correctTokens: ["D'habitude,", "je", "prends", "le", "métro"],
          explanation: "'D'habitude, je prends le métro' means 'Usually, I take the subway'."
        },
        {
          id: "fr-u3-l2-q16",
          type: "multiple_choice",
          prompt: "How is negation formed with a reflexive verb in the present tense?",
          options: [
            "ne + reflexive pronoun + verb + pas (e.g. 'Je ne me lave pas')",
            "reflexive pronoun + ne + verb + pas",
            "verb + ne + pas",
            "pas + reflexive verb"
          ],
          correctAnswer: "ne + reflexive pronoun + verb + pas (e.g. 'Je ne me lave pas')",
          explanation: "'Ne' comes before the reflexive pronoun, and 'pas' comes after the verb: 'Je ne me lève pas'."
        },
        {
          id: "fr-u3-l2-q17",
          type: "audio_listen",
          phrase: "Il s'endort rapidement.",
          prompt: "What does 's'endormir' mean?",
          options: ["To fall asleep", "To wake up", "To get up", "To dream"],
          correctAnswer: "To fall asleep",
          explanation: "'S'endormir' means to fall asleep."
        },
        {
          id: "fr-u3-l2-q18",
          type: "matching",
          prompt: "Match daily transport routine verbs:",
          pairs: [
            { native: "partir au travail", english: "to leave for work" },
            { native: "prendre le bus", english: "to take the bus" },
            { native: "marcher à pied", english: "to walk on foot" },
            { native: "arriver au bureau", english: "to arrive at the office" }
          ]
        },
        {
          id: "fr-u3-l2-q19",
          type: "fill_blank",
          sentence: "Vous vous ___ à quelle heure le soir ? (What time do you go to bed?)",
          missingWord: "couchez",
          options: ["couchez", "levez", "lavez", "habillez"],
          correctAnswer: "couchez",
          explanation: "'Se coucher' is the verb for going to bed: 'Vous vous couchez'."
        },
        {
          id: "fr-u3-l2-q20",
          type: "multiple_choice",
          prompt: "Which sentence correctly says 'I hurry up'?",
          options: ["Je me dépêche", "Je dépêche moi", "Je suis dépêché", "Je fais dépêche"],
          correctAnswer: "Je me dépêche",
          explanation: "'Se dépêcher' is reflexive: 'Je me dépêche' (I am hurrying up)."
        }
      ]
    },
    {
      id: "fr-u3-l3",
      title: "Lesson 3: Weather, Seasons & Climate",
      description: "Discuss weather forecasts with 'faire', describe rain and snow, and talk about the four seasons.",
      xp: 20,
      questions: [
        {
          id: "fr-u3-l3-q1",
          type: "multiple_choice",
          prompt: "Which verb is used for most weather expressions in French (e.g. 'It is sunny / cold')?",
          options: ["Faire (Il fait beau, Il fait froid)", "Être (Il est beau)", "Avoir (Il a froid)", "Aller (Il va pleuvoir)"],
          correctAnswer: "Faire (Il fait beau, Il fait froid)",
          explanation: "French uses the impersonal 'Il fait + adjective/noun': 'Il fait beau', 'Il fait chaud'."
        },
        {
          id: "fr-u3-l3-q2",
          type: "matching",
          prompt: "Match French weather phrases with English:",
          pairs: [
            { native: "Il fait beau", english: "The weather is nice / sunny" },
            { native: "Il fait mauvais", english: "The weather is bad" },
            { native: "Il fait chaud", english: "It is hot / warm" },
            { native: "Il fait froid", english: "It is cold" }
          ]
        },
        {
          id: "fr-u3-l3-q3",
          type: "audio_listen",
          phrase: "Il pleut aujourd'hui.",
          prompt: "Listen to the audio. What is happening outside?",
          options: ["It is raining", "It is snowing", "It is very windy", "It is freezing"],
          correctAnswer: "It is raining",
          explanation: "'Il pleut' comes from the verb 'pleuvoir' (to rain)."
        },
        {
          id: "fr-u3-l3-q4",
          type: "fill_blank",
          sentence: "En hiver dans les Alpes, il ___ beaucoup. (It snows)",
          missingWord: "neige",
          options: ["neige", "pleut", "fait", "vent"],
          correctAnswer: "neige",
          explanation: "'Il neige' means 'It snows / It is snowing'."
        },
        {
          id: "fr-u3-l3-q5",
          type: "matching",
          prompt: "Match the four seasons in French:",
          pairs: [
            { native: "Le printemps", english: "Spring" },
            { native: "L'été", english: "Summer" },
            { native: "L'automne", english: "Autumn / Fall" },
            { native: "L'hiver", english: "Winter" }
          ]
        },
        {
          id: "fr-u3-l3-q6",
          type: "multiple_choice",
          prompt: "Which season uses the preposition 'au' instead of 'en'?",
          options: [
            "Au printemps (Spring - begins with a consonant)",
            "En été",
            "En automne",
            "En hiver"
          ],
          correctAnswer: "Au printemps (Spring - begins with a consonant)",
          explanation: "'Au printemps' takes 'au', while summer, autumn, and winter take 'en' (en été, en automne, en hiver) because they begin with vowels!"
        },
        {
          id: "fr-u3-l3-q7",
          type: "audio_listen",
          phrase: "Quel temps fait-il ?",
          prompt: "What does this common question mean?",
          options: ["What is the weather like?", "What time is it?", "How is your day?", "Where are you going?"],
          correctAnswer: "What is the weather like?",
          explanation: "'Quel temps fait-il ?' asks 'What's the weather like?'."
        },
        {
          id: "fr-u3-l3-q8",
          type: "scramble",
          prompt: "Assemble: 'Il fait du soleil et du vent'",
          tokens: ["Il", "fait", "du", "soleil", "et", "du", "vent"],
          correctTokens: ["Il", "fait", "du", "soleil", "et", "du", "vent"],
          explanation: "'Il fait du soleil et du vent' means 'It is sunny and windy'."
        },
        {
          id: "fr-u3-l3-q9",
          type: "matching",
          prompt: "Match sky conditions with English:",
          pairs: [
            { native: "Le ciel est bleu", english: "The sky is blue / clear" },
            { native: "Il y a des nuages", english: "There are clouds / It is cloudy" },
            { native: "Il y a du brouillard", english: "It is foggy" },
            { native: "Il y a un orage", english: "There is a thunderstorm" }
          ]
        },
        {
          id: "fr-u3-l3-q10",
          type: "fill_blank",
          sentence: "Prends ton parapluie, il y a de l'___ dehors. (storm)",
          missingWord: "orage",
          options: ["orage", "soleil", "chaleur", "été"],
          correctAnswer: "orage",
          explanation: "'Un orage' is a thunderstorm."
        },
        {
          id: "fr-u3-l3-q11",
          type: "multiple_choice",
          prompt: "How do you say 'The temperature is 20 degrees'?",
          options: ["Il fait vingt degrés", "Il est vingt degrés", "La température a vingt", "Il fait vingt heures"],
          correctAnswer: "Il fait vingt degrés",
          explanation: "'Il fait vingt degrés' (Celsius) expresses temperature."
        },
        {
          id: "fr-u3-l3-q12",
          type: "audio_listen",
          phrase: "Il gèle ce matin.",
          prompt: "Listen to the statement. What is the condition?",
          options: ["It is freezing", "It is raining", "It is very sunny", "It is humid"],
          correctAnswer: "It is freezing",
          explanation: "'Geler' means to freeze: 'Il gèle' = it is freezing."
        },
        {
          id: "fr-u3-l3-q13",
          type: "matching",
          prompt: "Match weather items with English:",
          pairs: [
            { native: "Le parapluie", english: "Umbrella" },
            { native: "L'imperméable", english: "Raincoat" },
            { native: "Les lunettes de soleil", english: "Sunglasses" },
            { native: "L'écharpe", english: "Scarf" }
          ]
        },
        {
          id: "fr-u3-l3-q14",
          type: "scramble",
          prompt: "Assemble: 'En été, il fait très chaud'",
          tokens: ["En", "été,", "il", "fait", "très", "chaud"],
          correctTokens: ["En", "été,", "il", "fait", "très", "chaud"],
          explanation: "'En été, il fait très chaud' means 'In summer, it is very hot'."
        },
        {
          id: "fr-u3-l3-q15",
          type: "fill_blank",
          sentence: "Les feuilles tombent en ___ (Autumn).",
          missingWord: "automne",
          options: ["automne", "été", "printemps", "hiver"],
          correctAnswer: "automne",
          explanation: "'En automne' means in autumn."
        },
        {
          id: "fr-u3-l3-q16",
          type: "multiple_choice",
          prompt: "What does 'un temps de chien' mean idiomatically in French?",
          options: ["Horrible, miserable weather", "Weather suitable for pets", "Sunny and warm", "Snowy weather"],
          correctAnswer: "Horrible, miserable weather",
          explanation: "'Un temps de chien' is a colorful idiom for dreadful, rainy weather."
        },
        {
          id: "fr-u3-l3-q17",
          type: "audio_listen",
          phrase: "Il y a beaucoup de vent sur la côte.",
          prompt: "Listen to the weather report. What is occurring on the coast?",
          options: ["A lot of wind", "Heavy snow", "A heatwave", "Dense fog"],
          correctAnswer: "A lot of wind",
          explanation: "'Beaucoup de vent' means a lot of wind."
        },
        {
          id: "fr-u3-l3-q18",
          type: "matching",
          prompt: "Match climate terms:",
          pairs: [
            { native: "Une canicule", english: "A heatwave" },
            { native: "Une averse", english: "A rain shower / downpour" },
            { native: "La météo", english: "The weather forecast" },
            { native: "Le degré Celsius", english: "Degree Celsius" }
          ]
        },
        {
          id: "fr-u3-l3-q19",
          type: "fill_blank",
          sentence: "Regarde le bulletin ___ à la télévision.",
          missingWord: "météo",
          options: ["météo", "heure", "temps", "soleil"],
          correctAnswer: "météo",
          explanation: "'Le bulletin météo' is the weather forecast report."
        },
        {
          id: "fr-u3-l3-q20",
          type: "multiple_choice",
          prompt: "When the sky is completely grey and covered with clouds, the French say:",
          options: ["Le ciel est couvert / gris", "Il fait nuit", "Il fait chaud", "Le soleil brille"],
          correctAnswer: "Le ciel est couvert / gris",
          explanation: "'Le ciel est couvert' means the sky is overcast."
        }
      ]
    }
  ]
};
