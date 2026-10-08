// 20 rich, interactive questions per lesson for Finnish Unit 1: "Introduce yourself"

export const finnishUnit1Lessons = [
  {
    id: "fi-u1-l1",
    title: "Lesson 1. Vocabulary Building",
    description: "Learn essential Finnish foundation words: food, drinks, animals, nature, and everyday objects.",
    xp: 20,
    questions: [
      {
        id: "fi-l1-q1",
        type: "multiple_choice",
        prompt: "What does the Finnish word 'vesi' mean?",
        options: ["Water", "Bread", "House", "Book"],
        correctAnswer: "Water",
        explanation: "'Vesi' means water in Finnish."
      },
      {
        id: "fi-l1-q2",
        type: "matching",
        prompt: "Match the Finnish vocabulary with English:",
        pairs: [
          { native: "Leipä", english: "Bread" },
          { native: "Kirja", english: "Book" },
          { native: "Talo", english: "House" },
          { native: "Auto", english: "Car" }
        ]
      },
      {
        id: "fi-l1-q3",
        type: "audio_listen",
        phrase: "Koira",
        prompt: "Listen to the word and select what it means:",
        options: ["Dog", "Cat", "Horse", "Bird"],
        correctAnswer: "Dog",
        explanation: "'Koira' is dog, while 'kissa' is cat."
      },
      {
        id: "fi-l1-q4",
        type: "fill_blank",
        sentence: "Minulla on ___.",
        missingWord: "kissa",
        options: ["kissa", "kyllä", "kiitos", "hyvä"],
        correctAnswer: "kissa",
        explanation: "'Minulla on kissa' means 'I have a cat'."
      },
      {
        id: "fi-l1-q5",
        type: "multiple_choice",
        prompt: "What is 'kahvi' in Finnish?",
        options: ["Coffee", "Tea", "Milk", "Juice"],
        correctAnswer: "Coffee",
        explanation: "'Kahvi' means coffee. Finns are world-famous coffee lovers!"
      },
      {
        id: "fi-l1-q6",
        type: "matching",
        prompt: "Match food and drink words:",
        pairs: [
          { native: "Maito", english: "Milk" },
          { native: "Omena", english: "Apple" },
          { native: "Kala", english: "Fish" },
          { native: "Liha", english: "Meat" }
        ]
      },
      {
        id: "fi-l1-q7",
        type: "audio_listen",
        phrase: "Tee",
        prompt: "Listen to the word and select what it means:",
        options: ["Tea", "Tree", "Road", "Table"],
        correctAnswer: "Tea",
        explanation: "'Tee' means tea in Finnish."
      },
      {
        id: "fi-l1-q8",
        type: "scramble",
        prompt: "Assemble: 'I drink cold water'",
        tokens: ["Juon", "kylmää", "vettä", "leipää"],
        correctTokens: ["Juon", "kylmää", "vettä"],
        explanation: "'Juon kylmää vettä' means 'I drink cold water'."
      },
      {
        id: "fi-l1-q9",
        type: "multiple_choice",
        prompt: "What does 'puhelin' mean?",
        options: ["Phone", "Book", "Computer", "Radio"],
        correctAnswer: "Phone",
        explanation: "'Puhelin' means phone/telephone, originating from 'puhe' (speech)."
      },
      {
        id: "fi-l1-q10",
        type: "fill_blank",
        sentence: "Pöydällä on ___.",
        missingWord: "kirja",
        options: ["kirja", "auto", "talo", "metsä"],
        correctAnswer: "kirja",
        explanation: "'Pöydällä on kirja' means 'On the table is a book'."
      },
      {
        id: "fi-l1-q11",
        type: "matching",
        prompt: "Match nature elements:",
        pairs: [
          { native: "Kukka", english: "Flower" },
          { native: "Puu", english: "Tree" },
          { native: "Joki", english: "River" },
          { native: "Aurinko", english: "Sun" }
        ]
      },
      {
        id: "fi-l1-q12",
        type: "audio_listen",
        phrase: "Raha",
        prompt: "Listen to the word and select what it means:",
        options: ["Money", "Time", "Ticket", "Bag"],
        correctAnswer: "Money",
        explanation: "'Raha' means money in Finnish."
      },
      {
        id: "fi-l1-q13",
        type: "multiple_choice",
        prompt: "What does 'kuppi' mean?",
        options: ["Cup", "Plate", "Fork", "Spoon"],
        correctAnswer: "Cup",
        explanation: "'Kuppi' means cup (e.g., 'kuppi kahvia' = a cup of coffee)."
      },
      {
        id: "fi-l1-q14",
        type: "scramble",
        prompt: "Assemble: 'I eat fresh bread'",
        tokens: ["Syön", "tuoretta", "leipää", "juon"],
        correctTokens: ["Syön", "tuoretta", "leipää"],
        explanation: "'Syön tuoretta leipää' means 'I eat fresh bread'."
      },
      {
        id: "fi-l1-q15",
        type: "fill_blank",
        sentence: "Juon aamulla ___.",
        missingWord: "kahvia",
        options: ["kahvia", "kirjaa", "taloa", "koiraa"],
        correctAnswer: "kahvia",
        explanation: "'Juon aamulla kahvia' means 'I drink coffee in the morning'."
      },
      {
        id: "fi-l1-q16",
        type: "matching",
        prompt: "Match clothing and accessory words:",
        pairs: [
          { native: "Kenkä", english: "Shoe" },
          { native: "Takki", english: "Jacket" },
          { native: "Hattu", english: "Hat" },
          { native: "Laukku", english: "Bag" }
        ]
      },
      {
        id: "fi-l1-q17",
        type: "audio_listen",
        phrase: "Pallo",
        prompt: "Listen to the word and select what it means:",
        options: ["Ball", "Wheel", "Bell", "Pencil"],
        correctAnswer: "Ball",
        explanation: "'Pallo' is the Finnish word for ball."
      },
      {
        id: "fi-l1-q18",
        type: "multiple_choice",
        prompt: "What is 'veitsi'?",
        options: ["Knife", "Fork", "Spoon", "Glass"],
        correctAnswer: "Knife",
        explanation: "'Veitsi' is knife, while 'haarukka' is fork."
      },
      {
        id: "fi-l1-q19",
        type: "fill_blank",
        sentence: "Tämä on iso ___.",
        missingWord: "talo",
        options: ["talo", "vettä", "leipää", "kyllä"],
        correctAnswer: "talo",
        explanation: "'Tämä on iso talo' means 'This is a big house'."
      },
      {
        id: "fi-l1-q20",
        type: "matching",
        prompt: "Match breakfast items:",
        pairs: [
          { native: "Juusto", english: "Cheese" },
          { native: "Muna", english: "Egg" },
          { native: "Voi", english: "Butter" },
          { native: "Suola", english: "Salt" }
        ]
      }
    ]
  },

  {
    id: "fi-u1-l2",
    title: "Lesson 2. Use Common Phrases",
    description: "Master polite greetings, courtesies, introductions, questions, and daily social phrases.",
    xp: 25,
    questions: [
      {
        id: "fi-l2-q1",
        type: "multiple_choice",
        prompt: "How do you say 'My name is Anna' in Finnish?",
        options: ["Minun nimeni on Anna", "Mitä kuuluu Anna", "Kiitos Anna", "Anna on hyvä"],
        correctAnswer: "Minun nimeni on Anna",
        explanation: "'Minun nimeni on...' means 'My name is...'."
      },
      {
        id: "fi-l2-q2",
        type: "scramble",
        prompt: "Assemble: 'Do you speak English?'",
        tokens: ["Puhutko", "englantia?", "suomea", "kiitos"],
        correctTokens: ["Puhutko", "englantia?"],
        explanation: "'Puhutko englantia?' asks 'Do you speak English?'."
      },
      {
        id: "fi-l2-q3",
        type: "audio_listen",
        phrase: "Anteeksi",
        prompt: "Listen to the word and select what it means:",
        options: ["Excuse me / Sorry", "Thank you very much", "Good night", "Goodbye"],
        correctAnswer: "Excuse me / Sorry",
        explanation: "'Anteeksi' is used for apologies and to politely get someone's attention."
      },
      {
        id: "fi-l2-q4",
        type: "matching",
        prompt: "Match the Finnish greetings and courtesies:",
        pairs: [
          { native: "Hyvää huomenta", english: "Good morning" },
          { native: "Hyvää yötä", english: "Good night" },
          { native: "En ymmärrä", english: "I don't understand" },
          { native: "Ole hyvä", english: "You're welcome" }
        ]
      },
      {
        id: "fi-l2-q5",
        type: "multiple_choice",
        prompt: "What does 'Mitä kuuluu?' mean?",
        options: ["How are you?", "Where are you?", "Who is that?", "What is this?"],
        correctAnswer: "How are you?",
        explanation: "'Mitä kuuluu?' literally translates to 'What is heard?' and means 'How are you?'."
      },
      {
        id: "fi-l2-q6",
        type: "fill_blank",
        sentence: "Kiitos, minulle kuuluu ___.",
        missingWord: "hyvää",
        options: ["hyvää", "huono", "kyllä", "näkemiin"],
        correctAnswer: "hyvää",
        explanation: "'Minulle kuuluu hyvää' means 'I am doing well'."
      },
      {
        id: "fi-l2-q7",
        type: "audio_listen",
        phrase: "Näkemiin",
        prompt: "Listen to the word and select what it means:",
        options: ["Goodbye", "Good morning", "Hello", "Please"],
        correctAnswer: "Goodbye",
        explanation: "'Näkemiin' is the polite standard way to say goodbye."
      },
      {
        id: "fi-l2-q8",
        type: "matching",
        prompt: "Match common Finnish conversational responses:",
        pairs: [
          { native: "Kiitos paljon", english: "Thank you very much" },
          { native: "Ei se mitään", english: "No problem / Never mind" },
          { native: "Nähdään huomenna", english: "See you tomorrow" },
          { native: "Totta kai", english: "Of course / Absolutely" }
        ]
      },
      {
        id: "fi-l2-q9",
        type: "multiple_choice",
        prompt: "How do you say 'Nice to meet you'?",
        options: ["Hauska tutustua", "Hyvää iltaa", "Mitä kuuluu", "Ole hyvä"],
        correctAnswer: "Hauska tutustua",
        explanation: "'Hauska tutustua' means 'Nice to meet you'."
      },
      {
        id: "fi-l2-q10",
        type: "scramble",
        prompt: "Assemble: 'How much does this cost?'",
        tokens: ["Mitä", "tämä", "maksaa?", "kello"],
        correctTokens: ["Mitä", "tämä", "maksaa?"],
        explanation: "'Mitä tämä maksaa?' is the universal phrase for asking prices."
      },
      {
        id: "fi-l2-q11",
        type: "fill_blank",
        sentence: "Anteeksi, missä on ___?",
        missingWord: "vessa",
        options: ["vessa", "leipä", "kyllä", "päivä"],
        correctAnswer: "vessa",
        explanation: "'Missä on vessa?' means 'Where is the restroom?'."
      },
      {
        id: "fi-l2-q12",
        type: "audio_listen",
        phrase: "Kyllä kiitos",
        prompt: "Listen to the phrase and select what it means:",
        options: ["Yes please", "No thank you", "You are welcome", "Goodbye"],
        correctAnswer: "Yes please",
        explanation: "'Kyllä kiitos' means 'Yes please'."
      },
      {
        id: "fi-l2-q13",
        type: "multiple_choice",
        prompt: "How do you say 'No thank you'?",
        options: ["Ei kiitos", "Kyllä kiitos", "Ole hyvä", "Anteeksi"],
        correctAnswer: "Ei kiitos",
        explanation: "'Ei kiitos' politely declines an offer."
      },
      {
        id: "fi-l2-q14",
        type: "scramble",
        prompt: "Assemble: 'Good day to everyone!'",
        tokens: ["Hyvää", "päivää", "kaikille!", "yötä"],
        correctTokens: ["Hyvää", "päivää", "kaikille!"],
        explanation: "'Hyvää päivää kaikille!' means 'Good day to everyone!'."
      },
      {
        id: "fi-l2-q15",
        type: "matching",
        prompt: "Match friendly social phrases:",
        pairs: [
          { native: "Moi moi", english: "Bye bye" },
          { native: "Tervetuloa", english: "Welcome" },
          { native: "Onnea", english: "Congratulations / Good luck" },
          { native: "Olkaa hyvä", english: "Here you go (Polite/Plural)" }
        ]
      },
      {
        id: "fi-l2-q16",
        type: "fill_blank",
        sentence: "Voitko auttaa ___?",
        missingWord: "minua",
        options: ["minua", "talo", "leipä", "auto"],
        correctAnswer: "minua",
        explanation: "'Voitko auttaa minua?' means 'Can you help me?'."
      },
      {
        id: "fi-l2-q17",
        type: "audio_listen",
        phrase: "Hyvää iltaa",
        prompt: "Listen to the phrase and select what it means:",
        options: ["Good evening", "Good morning", "Good night", "Good luck"],
        correctAnswer: "Good evening",
        explanation: "'Hyvää iltaa' is said in the evening."
      },
      {
        id: "fi-l2-q18",
        type: "multiple_choice",
        prompt: "How do you ask 'What time is it?'?",
        options: ["Paljonko kello on?", "Mitä kuuluu?", "Kuka sinä olet?", "Missä asut?"],
        correctAnswer: "Paljonko kello on?",
        explanation: "'Paljonko kello on?' asks what the time is."
      },
      {
        id: "fi-l2-q19",
        type: "scramble",
        prompt: "Assemble: 'I do not speak Finnish well'",
        tokens: ["En", "puhu", "suomea", "hyvin", "paljon"],
        correctTokens: ["En", "puhu", "suomea", "hyvin"],
        explanation: "'En puhu suomea hyvin' means 'I do not speak Finnish well'."
      },
      {
        id: "fi-l2-q20",
        type: "matching",
        prompt: "Match celebration and travel wishes:",
        pairs: [
          { native: "Hyvää ruokahalua", english: "Bon appetit" },
          { native: "Kippis", english: "Cheers" },
          { native: "Hyvää matkaa", english: "Have a nice trip" },
          { native: "Kaikkea hyvää", english: "All the best" }
        ]
      }
    ]
  },

  {
    id: "fi-u1-l3",
    title: "Lesson 3. Talk about people",
    description: "Describe family members, relationships, pronouns, and introduce friends and companions.",
    xp: 25,
    questions: [
      {
        id: "fi-l3-q1",
        type: "multiple_choice",
        prompt: "What does 'äiti' mean?",
        options: ["Mother", "Father", "Sister", "Friend"],
        correctAnswer: "Mother",
        explanation: "'Äiti' is mother; 'isä' is father."
      },
      {
        id: "fi-l3-q2",
        type: "matching",
        prompt: "Match the family and friend terms:",
        pairs: [
          { native: "Veli", english: "Brother" },
          { native: "Sisko", english: "Sister" },
          { native: "Ystävä", english: "Friend" },
          { native: "Lapsi", english: "Child" }
        ]
      },
      {
        id: "fi-l3-q3",
        type: "scramble",
        prompt: "Assemble: 'He/She is my friend'",
        tokens: ["Hän", "on", "minun", "ystäväni", "talo"],
        correctTokens: ["Hän", "on", "minun", "ystäväni"],
        explanation: "Finnish 'hän' is gender-neutral and means both 'he' and 'she'."
      },
      {
        id: "fi-l3-q4",
        type: "fill_blank",
        sentence: "Minä ___ opettaja.",
        missingWord: "olen",
        options: ["olen", "olet", "on", "ovat"],
        correctAnswer: "olen",
        explanation: "'Minä olen opettaja' means 'I am a teacher'."
      },
      {
        id: "fi-l3-q5",
        type: "multiple_choice",
        prompt: "What does 'isä' mean?",
        options: ["Father", "Uncle", "Brother", "Grandfather"],
        correctAnswer: "Father",
        explanation: "'Isä' is father in Finnish."
      },
      {
        id: "fi-l3-q6",
        type: "matching",
        prompt: "Match relatives and people:",
        pairs: [
          { native: "Isoisä", english: "Grandfather" },
          { native: "Isoäiti", english: "Grandmother" },
          { native: "Poika", english: "Boy / Son" },
          { native: "Tyttö", english: "Girl / Daughter" }
        ]
      },
      {
        id: "fi-l3-q7",
        type: "audio_listen",
        phrase: "Ihminen",
        prompt: "Listen to the word and select what it means:",
        options: ["Person / Human", "Animal", "Name", "City"],
        correctAnswer: "Person / Human",
        explanation: "'Ihminen' means person or human being."
      },
      {
        id: "fi-l3-q8",
        type: "multiple_choice",
        prompt: "What is unique about the Finnish pronoun 'hän'?",
        options: [
          "It refers to both 'he' and 'she' with no gender distinction",
          "It is only used for children",
          "It only means 'they'",
          "It is never spoken out loud"
        ],
        correctAnswer: "It refers to both 'he' and 'she' with no gender distinction",
        explanation: "Finnish grammar has no grammatical gender: 'hän' serves for all people."
      },
      {
        id: "fi-l3-q9",
        type: "fill_blank",
        sentence: "Sinä ___ minun ystäväni.",
        missingWord: "olet",
        options: ["olet", "olen", "on", "ovat"],
        correctAnswer: "olet",
        explanation: "'Sinä olet' is the second person form ('You are my friend')."
      },
      {
        id: "fi-l3-q10",
        type: "scramble",
        prompt: "Assemble: 'Who is that woman?'",
        tokens: ["Kuka", "tuo", "nainen", "on?", "mies"],
        correctTokens: ["Kuka", "tuo", "nainen", "on?"],
        explanation: "'Kuka tuo nainen on?' means 'Who is that woman?'."
      },
      {
        id: "fi-l3-q11",
        type: "matching",
        prompt: "Match people categories:",
        pairs: [
          { native: "Mies", english: "Man" },
          { native: "Nainen", english: "Woman" },
          { native: "Vauva", english: "Baby" },
          { native: "Perhe", english: "Family" }
        ]
      },
      {
        id: "fi-l3-q12",
        type: "audio_listen",
        phrase: "Opiskelija",
        prompt: "Listen to the word and select what it means:",
        options: ["Student", "Teacher", "Doctor", "Engineer"],
        correctAnswer: "Student",
        explanation: "'Opiskelija' means student."
      },
      {
        id: "fi-l3-q13",
        type: "multiple_choice",
        prompt: "What profession is 'lääkäri'?",
        options: ["Doctor", "Nurse", "Chef", "Pilot"],
        correctAnswer: "Doctor",
        explanation: "'Lääkäri' means medical doctor."
      },
      {
        id: "fi-l3-q14",
        type: "fill_blank",
        sentence: "He ovat mukavia ___.",
        missingWord: "ihmisiä",
        options: ["ihmisiä", "taloja", "kirjoja", "autoja"],
        correctAnswer: "ihmisiä",
        explanation: "'He ovat mukavia ihmisiä' means 'They are nice people'."
      },
      {
        id: "fi-l3-q15",
        type: "scramble",
        prompt: "Assemble: 'I have two brothers'",
        tokens: ["Minulla", "on", "kaksi", "veljeä", "siskoa"],
        correctTokens: ["Minulla", "on", "kaksi", "veljeä"],
        explanation: "Numbers in Finnish require the partitive singular: 'kaksi veljeä'."
      },
      {
        id: "fi-l3-q16",
        type: "matching",
        prompt: "Match extended family words:",
        pairs: [
          { native: "Serkku", english: "Cousin" },
          { native: "Täti", english: "Aunt" },
          { native: "Setä", english: "Uncle" },
          { native: "Naapuri", english: "Neighbour" }
        ]
      },
      {
        id: "fi-l3-q17",
        type: "audio_listen",
        phrase: "Kollega",
        prompt: "Listen to the word and select what it means:",
        options: ["Colleague", "Customer", "Boss", "Friend"],
        correctAnswer: "Colleague",
        explanation: "'Kollega' means colleague/co-worker."
      },
      {
        id: "fi-l3-q18",
        type: "multiple_choice",
        prompt: "How do you say 'He/She is young'?",
        options: ["Hän on nuori", "Hän on vanha", "Hän on iso", "Hän on nopea"],
        correctAnswer: "Hän on nuori",
        explanation: "'Nuori' means young."
      },
      {
        id: "fi-l3-q19",
        type: "fill_blank",
        sentence: "Me olemme hyviä ___.",
        missingWord: "ystäviä",
        options: ["ystäviä", "ystävä", "talot", "koirat"],
        correctAnswer: "ystäviä",
        explanation: "'Me olemme hyviä ystäviä' means 'We are good friends'."
      },
      {
        id: "fi-l3-q20",
        type: "scramble",
        prompt: "Assemble: 'My father is at work'",
        tokens: ["Isäni", "on", "töissä", "kotona"],
        correctTokens: ["Isäni", "on", "töissä"],
        explanation: "'Isäni on töissä' means 'My father is at work'."
      }
    ]
  },

  {
    id: "fi-u1-l4",
    title: "Lesson 4. Describe things",
    description: "Use descriptive adjectives: size, age, aesthetics, temperature, colors, and quality.",
    xp: 25,
    questions: [
      {
        id: "fi-l4-q1",
        type: "multiple_choice",
        prompt: "What does 'kaunis' mean in Finnish?",
        options: ["Beautiful", "Cold", "Small", "Old"],
        correctAnswer: "Beautiful",
        explanation: "'Kaunis' means beautiful or lovely."
      },
      {
        id: "fi-l4-q2",
        type: "matching",
        prompt: "Match Finnish descriptive opposites:",
        pairs: [
          { native: "Iso", english: "Big" },
          { native: "Pieni", english: "Small" },
          { native: "Uusi", english: "New" },
          { native: "Vanha", english: "Old" }
        ]
      },
      {
        id: "fi-l4-q3",
        type: "audio_listen",
        phrase: "Kylmä",
        prompt: "Listen to the word and select what it means:",
        options: ["Cold", "Hot", "New", "Big"],
        correctAnswer: "Cold",
        explanation: "'Kylmä' means cold. 'Kuuma' means hot."
      },
      {
        id: "fi-l4-q4",
        type: "scramble",
        prompt: "Assemble: 'The car is new'",
        tokens: ["Auto", "on", "uusi", "vanha"],
        correctTokens: ["Auto", "on", "uusi"],
        explanation: "'Auto on uusi' translates to 'The car is new'."
      },
      {
        id: "fi-l4-q5",
        type: "multiple_choice",
        prompt: "What does 'kuuma' mean?",
        options: ["Hot", "Cold", "Warm", "Dark"],
        correctAnswer: "Hot",
        explanation: "'Kuuma' means hot (e.g., 'kuuma sauna' = hot sauna)."
      },
      {
        id: "fi-l4-q6",
        type: "matching",
        prompt: "Match speed and difficulty adjectives:",
        pairs: [
          { native: "Nopea", english: "Fast" },
          { native: "Hidas", english: "Slow" },
          { native: "Helppo", english: "Easy" },
          { native: "Vaikea", english: "Difficult" }
        ]
      },
      {
        id: "fi-l4-q7",
        type: "audio_listen",
        phrase: "Kallis",
        prompt: "Listen to the word and select what it means:",
        options: ["Expensive", "Cheap", "Free", "New"],
        correctAnswer: "Expensive",
        explanation: "'Kallis' means expensive."
      },
      {
        id: "fi-l4-q8",
        type: "fill_blank",
        sentence: "Tämä kirja on hyvin ___.",
        missingWord: "mielenkiintoinen",
        options: ["mielenkiintoinen", "kylmä", "kuuma", "nopea"],
        correctAnswer: "mielenkiintoinen",
        explanation: "'Mielenkiintoinen' means interesting."
      },
      {
        id: "fi-l4-q9",
        type: "multiple_choice",
        prompt: "What is the opposite of 'kallis' (expensive)?",
        options: ["Halpa", "Iso", "Uusi", "Vaikea"],
        correctAnswer: "Halpa",
        explanation: "'Halpa' means cheap or inexpensive."
      },
      {
        id: "fi-l4-q10",
        type: "matching",
        prompt: "Match Finnish primary colors:",
        pairs: [
          { native: "Punainen", english: "Red" },
          { native: "Sininen", english: "Blue" },
          { native: "Vihreä", english: "Green" },
          { native: "Keltainen", english: "Yellow" }
        ]
      },
      {
        id: "fi-l4-q11",
        type: "audio_listen",
        phrase: "Valkoinen",
        prompt: "Listen to the word and select what it means:",
        options: ["White", "Black", "Grey", "Blue"],
        correctAnswer: "White",
        explanation: "'Valkoinen' means white."
      },
      {
        id: "fi-l4-q12",
        type: "scramble",
        prompt: "Assemble: 'The house is very big'",
        tokens: ["Talo", "on", "hyvin", "iso", "pieni"],
        correctTokens: ["Talo", "on", "hyvin", "iso"],
        explanation: "'Hyvin' means 'very' ('Talo on hyvin iso')."
      },
      {
        id: "fi-l4-q13",
        type: "multiple_choice",
        prompt: "What color is 'musta'?",
        options: ["Black", "White", "Red", "Brown"],
        correctAnswer: "Black",
        explanation: "'Musta' means black (e.g., 'musta kahvi' = black coffee)."
      },
      {
        id: "fi-l4-q14",
        type: "fill_blank",
        sentence: "Kahvi on liian ___.",
        missingWord: "kuumaa",
        options: ["kuumaa", "kylmää", "uusi", "vanha"],
        correctAnswer: "kuumaa",
        explanation: "'Kahvi on liian kuumaa' means 'The coffee is too hot'."
      },
      {
        id: "fi-l4-q15",
        type: "matching",
        prompt: "Match physical dimension adjectives:",
        pairs: [
          { native: "Pitkä", english: "Long / Tall" },
          { native: "Lyhyt", english: "Short" },
          { native: "Painava", english: "Heavy" },
          { native: "Kevyt", english: "Light (weight)" }
        ]
      },
      {
        id: "fi-l4-q16",
        type: "audio_listen",
        phrase: "Makea",
        prompt: "Listen to the word and select what it means:",
        options: ["Sweet", "Sour", "Bitter", "Salty"],
        correctAnswer: "Sweet",
        explanation: "'Makea' means sweet."
      },
      {
        id: "fi-l4-q17",
        type: "multiple_choice",
        prompt: "What does 'hiljainen' mean?",
        options: ["Quiet / Silent", "Noisy", "Crowded", "Busy"],
        correctAnswer: "Quiet / Silent",
        explanation: "'Hiljainen' means quiet or silent."
      },
      {
        id: "fi-l4-q18",
        type: "scramble",
        prompt: "Assemble: 'The weather is warm today'",
        tokens: ["Ilma", "on", "tänään", "lämmin", "kylmä"],
        correctTokens: ["Ilma", "on", "tänään", "lämmin"],
        explanation: "'Ilma on tänään lämmin' means 'The weather is warm today'."
      },
      {
        id: "fi-l4-q19",
        type: "fill_blank",
        sentence: "Tämä tehtävä on ___.",
        missingWord: "helppo",
        options: ["helppo", "vaikea", "kallis", "musta"],
        correctAnswer: "helppo",
        explanation: "'Tämä tehtävä on helppo' means 'This task is easy'."
      },
      {
        id: "fi-l4-q20",
        type: "matching",
        prompt: "Match environment adjectives:",
        pairs: [
          { native: "Puhdas", english: "Clean" },
          { native: "Likainen", english: "Dirty" },
          { native: "Valoisa", english: "Bright" },
          { native: "Pimeä", english: "Dark" }
        ]
      }
    ]
  },

  {
    id: "fi-u1-l5",
    title: "Lesson 5. House hold",
    description: "Explore rooms, furniture, home appliances, household objects, and the Finnish sauna.",
    xp: 25,
    questions: [
      {
        id: "fi-l5-q1",
        type: "multiple_choice",
        prompt: "What room is 'keittiö'?",
        options: ["Kitchen", "Bedroom", "Bathroom", "Balcony"],
        correctAnswer: "Kitchen",
        explanation: "'Keittiö' is the kitchen."
      },
      {
        id: "fi-l5-q2",
        type: "matching",
        prompt: "Match fundamental household objects:",
        pairs: [
          { native: "Ovi", english: "Door" },
          { native: "Ikkuna", english: "Window" },
          { native: "Pöytä", english: "Table" },
          { native: "Sänky", english: "Bed" }
        ]
      },
      {
        id: "fi-l5-q3",
        type: "audio_listen",
        phrase: "Tuoli",
        prompt: "Listen to the word and select what it means:",
        options: ["Chair", "Table", "Door", "Bed"],
        correctAnswer: "Chair",
        explanation: "'Tuoli' means chair in Finnish."
      },
      {
        id: "fi-l5-q4",
        type: "scramble",
        prompt: "Assemble: 'Where is the kitchen?'",
        tokens: ["Missä", "keittiö", "on?", "ovi"],
        correctTokens: ["Missä", "keittiö", "on?"],
        explanation: "'Missä keittiö on?' asks 'Where is the kitchen?'."
      },
      {
        id: "fi-l5-q5",
        type: "multiple_choice",
        prompt: "What room is 'makuuhuone'?",
        options: ["Bedroom", "Living room", "Kitchen", "Hallway"],
        correctAnswer: "Bedroom",
        explanation: "'Makuuhuone' is composed of 'makuu' (sleeping/lying) and 'huone' (room)."
      },
      {
        id: "fi-l5-q6",
        type: "matching",
        prompt: "Match rooms and spaces in a home:",
        pairs: [
          { native: "Olohuone", english: "Living room" },
          { native: "Kylpyhuone", english: "Bathroom" },
          { native: "Parveke", english: "Balcony" },
          { native: "Sauna", english: "Sauna" }
        ]
      },
      {
        id: "fi-l5-q7",
        type: "audio_listen",
        phrase: "Sohva",
        prompt: "Listen to the word and select what it means:",
        options: ["Sofa / Couch", "Chair", "Bed", "Table"],
        correctAnswer: "Sofa / Couch",
        explanation: "'Sohva' is sofa or couch."
      },
      {
        id: "fi-l5-q8",
        type: "fill_blank",
        sentence: "Menen lauantaina ___.",
        missingWord: "saunaan",
        options: ["saunaan", "sänkyyn", "ovelle", "parvekkeelle"],
        correctAnswer: "saunaan",
        explanation: "'Menen lauantaina saunaan' means 'I go to the sauna on Saturday'."
      },
      {
        id: "fi-l5-q9",
        type: "multiple_choice",
        prompt: "What does 'kaappi' mean?",
        options: ["Cupboard / Closet", "Desk", "Lamp", "Rug"],
        correctAnswer: "Cupboard / Closet",
        explanation: "'Kaappi' means cupboard, closet, or cabinet."
      },
      {
        id: "fi-l5-q10",
        type: "scramble",
        prompt: "Assemble: 'Open the window, please'",
        tokens: ["Avaa", "ikkuna,", "kiitos", "sulje"],
        correctTokens: ["Avaa", "ikkuna,", "kiitos"],
        explanation: "'Avaa ikkuna, kiitos' means 'Open the window, please'."
      },
      {
        id: "fi-l5-q11",
        type: "matching",
        prompt: "Match kitchen appliances:",
        pairs: [
          { native: "Jääkaappi", english: "Refrigerator" },
          { native: "Uuni", english: "Oven" },
          { native: "Tiskikone", english: "Dishwasher" },
          { native: "Mikrouuni", english: "Microwave" }
        ]
      },
      {
        id: "fi-l5-q12",
        type: "audio_listen",
        phrase: "Avain",
        prompt: "Listen to the word and select what it means:",
        options: ["Key", "Lock", "Door", "Bell"],
        correctAnswer: "Key",
        explanation: "'Avain' means key in Finnish."
      },
      {
        id: "fi-l5-q13",
        type: "multiple_choice",
        prompt: "What is 'peili'?",
        options: ["Mirror", "Clock", "Lamp", "Painting"],
        correctAnswer: "Mirror",
        explanation: "'Peili' means mirror."
      },
      {
        id: "fi-l5-q14",
        type: "fill_blank",
        sentence: "Istun mukavalla ___.",
        missingWord: "tuolilla",
        options: ["tuolilla", "pöydällä", "ovella", "ikkunalla"],
        correctAnswer: "tuolilla",
        explanation: "'Istun mukavalla tuolilla' means 'I sit on a comfortable chair'."
      },
      {
        id: "fi-l5-q15",
        type: "scramble",
        prompt: "Assemble: 'Close the door when leaving'",
        tokens: ["Sulje", "ovi", "mennessäsi", "avaa"],
        correctTokens: ["Sulje", "ovi", "mennessäsi"],
        explanation: "'Sulje ovi mennessäsi' means 'Close the door when leaving'."
      },
      {
        id: "fi-l5-q16",
        type: "matching",
        prompt: "Match decorative and household fixtures:",
        pairs: [
          { native: "Lamppu", english: "Lamp / Light" },
          { native: "Matto", english: "Carpet / Rug" },
          { native: "Kello", english: "Clock" },
          { native: "Verhot", english: "Curtains" }
        ]
      },
      {
        id: "fi-l5-q17",
        type: "audio_listen",
        phrase: "Lattia",
        prompt: "Listen to the word and select what it means:",
        options: ["Floor", "Roof", "Wall", "Door"],
        correctAnswer: "Floor",
        explanation: "'Lattia' means floor in Finnish."
      },
      {
        id: "fi-l5-q18",
        type: "multiple_choice",
        prompt: "What does 'seinä' mean?",
        options: ["Wall", "Ceiling", "Floor", "Stairs"],
        correctAnswer: "Wall",
        explanation: "'Seinä' means wall."
      },
      {
        id: "fi-l5-q19",
        type: "fill_blank",
        sentence: "Pöytä on keskellä ___.",
        missingWord: "huonetta",
        options: ["huonetta", "tuolia", "ovea", "avainta"],
        correctAnswer: "huonetta",
        explanation: "'Pöytä on keskellä huonetta' means 'The table is in the middle of the room'."
      },
      {
        id: "fi-l5-q20",
        type: "scramble",
        prompt: "Assemble: 'The dishwasher is in the kitchen'",
        tokens: ["Tiskikone", "on", "keittiössä", "saunassa"],
        correctTokens: ["Tiskikone", "on", "keittiössä"],
        explanation: "'Tiskikone on keittiössä' means 'The dishwasher is in the kitchen'."
      }
    ]
  },

  {
    id: "fi-u1-l6",
    title: "Lesson 6. Using verbs",
    description: "Practice essential core action verbs: speaking, eating, drinking, moving, living, and desiring.",
    xp: 30,
    questions: [
      {
        id: "fi-l6-q1",
        type: "multiple_choice",
        prompt: "What does 'syödä' mean?",
        options: ["To eat", "To drink", "To go", "To speak"],
        correctAnswer: "To eat",
        explanation: "'Syödä' is the infinitive verb meaning 'to eat'."
      },
      {
        id: "fi-l6-q2",
        type: "matching",
        prompt: "Match core Finnish verbs:",
        pairs: [
          { native: "Mennä", english: "To go" },
          { native: "Juoda", english: "To drink" },
          { native: "Puhua", english: "To speak" },
          { native: "Asua", english: "To live / dwell" }
        ]
      },
      {
        id: "fi-l6-q3",
        type: "scramble",
        prompt: "Assemble: 'I speak Finnish'",
        tokens: ["Minä", "puhun", "suomea", "puhut"],
        correctTokens: ["Minä", "puhun", "suomea"],
        explanation: "'Puhun' is 'I speak'. 'Suomea' is the partitive form of suomi."
      },
      {
        id: "fi-l6-q4",
        type: "fill_blank",
        sentence: "Minä ___ vettä.",
        missingWord: "juon",
        options: ["juon", "syön", "menen", "asun"],
        correctAnswer: "juon",
        explanation: "'Minä juon vettä' means 'I drink water'."
      },
      {
        id: "fi-l6-q5",
        type: "multiple_choice",
        prompt: "What verb means 'to sleep'?",
        options: ["Nukkua", "Herätä", "Syödä", "Juoda"],
        correctAnswer: "Nukkua",
        explanation: "'Nukkua' means to sleep ('Minä nukun' = I sleep)."
      },
      {
        id: "fi-l6-q6",
        type: "matching",
        prompt: "Match activity verbs:",
        pairs: [
          { native: "Lukea", english: "To read" },
          { native: "Kirjoittaa", english: "To write" },
          { native: "Ostaa", english: "To buy" },
          { native: "Katsoa", english: "To watch / look" }
        ]
      },
      {
        id: "fi-l6-q7",
        type: "audio_listen",
        phrase: "Kuunnella",
        prompt: "Listen to the verb and select what it means:",
        options: ["To listen", "To hear", "To speak", "To sing"],
        correctAnswer: "To listen",
        explanation: "'Kuunnella' means to listen ('Kuuntelen musiikkia' = I listen to music)."
      },
      {
        id: "fi-l6-q8",
        type: "fill_blank",
        sentence: "Minä ___ Helsingissä.",
        missingWord: "asun",
        options: ["asun", "syön", "juon", "nukun"],
        correctAnswer: "asun",
        explanation: "'Minä asun Helsingissä' means 'I live in Helsinki'."
      },
      {
        id: "fi-l6-q9",
        type: "multiple_choice",
        prompt: "What does 'tulla' mean?",
        options: ["To come", "To leave", "To run", "To stay"],
        correctAnswer: "To come",
        explanation: "'Tulla' means to come ('Tulen huomenna' = I will come tomorrow)."
      },
      {
        id: "fi-l6-q10",
        type: "scramble",
        prompt: "Assemble: 'Do you want to eat an apple?'",
        tokens: ["Haluatko", "syödä", "omenan?", "juoda"],
        correctTokens: ["Haluatko", "syödä", "omenan?"],
        explanation: "'Haluatko syödä omenan?' means 'Do you want to eat an apple?'."
      },
      {
        id: "fi-l6-q11",
        type: "matching",
        prompt: "Match cognitive and communication verbs:",
        pairs: [
          { native: "Ymmärtää", english: "To understand" },
          { native: "Tietää", english: "To know" },
          { native: "Oppia", english: "To learn" },
          { native: "Auttaa", english: "To help" }
        ]
      },
      {
        id: "fi-l6-q12",
        type: "audio_listen",
        phrase: "Laulaa",
        prompt: "Listen to the verb and select what it means:",
        options: ["To sing", "To play", "To dance", "To laugh"],
        correctAnswer: "To sing",
        explanation: "'Laulaa' means to sing."
      },
      {
        id: "fi-l6-q13",
        type: "multiple_choice",
        prompt: "What does 'kävellä' mean?",
        options: ["To walk", "To run", "To drive", "To swim"],
        correctAnswer: "To walk",
        explanation: "'Kävellä' means to walk."
      },
      {
        id: "fi-l6-q14",
        type: "fill_blank",
        sentence: "Minä ___ uuden kirjan.",
        missingWord: "ostan",
        options: ["ostan", "menen", "asun", "nukun"],
        correctAnswer: "ostan",
        explanation: "'Minä ostan uuden kirjan' means 'I buy a new book'."
      },
      {
        id: "fi-l6-q15",
        type: "scramble",
        prompt: "Assemble: 'I go to work tomorrow'",
        tokens: ["Menen", "huomenna", "töihin", "eilen"],
        correctTokens: ["Menen", "huomenna", "töihin"],
        explanation: "'Menen huomenna töihin' means 'I go to work tomorrow'."
      },
      {
        id: "fi-l6-q16",
        type: "matching",
        prompt: "Match action verbs:",
        pairs: [
          { native: "Avata", english: "To open" },
          { native: "Sulkea", english: "To close" },
          { native: "Tavata", english: "To meet" },
          { native: "Soittaa", english: "To call / play instrument" }
        ]
      },
      {
        id: "fi-l6-q17",
        type: "audio_listen",
        phrase: "Ajaa",
        prompt: "Listen to the verb and select what it means:",
        options: ["To drive", "To walk", "To fly", "To cycle"],
        correctAnswer: "To drive",
        explanation: "'Ajaa' means to drive (e.g., 'ajaa autoa' = drive a car)."
      },
      {
        id: "fi-l6-q18",
        type: "multiple_choice",
        prompt: "How do you say 'I love' in Finnish?",
        options: ["Minä rakastan", "Minä tykkään", "Minä haluan", "Minä tiedän"],
        correctAnswer: "Minä rakastan",
        explanation: "'Minä rakastan' means 'I love' ('Rakastan sinua' = I love you)."
      },
      {
        id: "fi-l6-q19",
        type: "fill_blank",
        sentence: "Me ___ kaunista musiikkia.",
        missingWord: "kuuntelemme",
        options: ["kuuntelemme", "syömme", "asumme", "menemme"],
        correctAnswer: "kuuntelemme",
        explanation: "'Me kuuntelemme kaunista musiikkia' means 'We listen to beautiful music'."
      },
      {
        id: "fi-l6-q20",
        type: "scramble",
        prompt: "Assemble: 'I read a book in the evening'",
        tokens: ["Luen", "kirjaa", "illalla", "aamulla"],
        correctTokens: ["Luen", "kirjaa", "illalla"],
        explanation: "'Luen kirjaa illalla' means 'I read a book in the evening'."
      }
    ]
  },

  {
    id: "fi-u1-l7",
    title: "Lesson 7: Discussion about past tense",
    description: "Narrate past events, yesterday's activities, and master the Finnish imperfect/past tense.",
    xp: 30,
    questions: [
      {
        id: "fi-l7-q1",
        type: "multiple_choice",
        prompt: "How do you say 'I was' in Finnish past tense?",
        options: ["Minä olin", "Minä olen", "Minä olet", "Minä oli"],
        correctAnswer: "Minä olin",
        explanation: "The past tense of 'olla' (to be) for 'minä' is 'olin'."
      },
      {
        id: "fi-l7-q2",
        type: "matching",
        prompt: "Match the first-person past tense forms:",
        pairs: [
          { native: "Söin", english: "I ate" },
          { native: "Join", english: "I drank" },
          { native: "Menin", english: "I went" },
          { native: "Puhuin", english: "I spoke" }
        ]
      },
      {
        id: "fi-l7-q3",
        type: "scramble",
        prompt: "Assemble: 'Yesterday I went to the store'",
        tokens: ["Eilen", "menin", "kauppaan", "menen"],
        correctTokens: ["Eilen", "menin", "kauppaan"],
        explanation: "'Eilen' means yesterday; 'kauppaan' is the illative form (into the store)."
      },
      {
        id: "fi-l7-q4",
        type: "fill_blank",
        sentence: "Eilen minä ___ kahvia.",
        missingWord: "join",
        options: ["join", "juon", "juot", "juo"],
        correctAnswer: "join",
        explanation: "'Join' is the past form of 'juoda' for 'I'."
      },
      {
        id: "fi-l7-q5",
        type: "multiple_choice",
        prompt: "What does 'Mitä teit eilen?' mean?",
        options: ["What did you do yesterday?", "Where did you go?", "Who did you meet?", "When did you leave?"],
        correctAnswer: "What did you do yesterday?",
        explanation: "'Mitä teit eilen?' asks 'What did you do yesterday?'."
      },
      {
        id: "fi-l7-q6",
        type: "matching",
        prompt: "Match past action verbs (Minä...):",
        pairs: [
          { native: "Luin", english: "I read" },
          { native: "Ostin", english: "I bought" },
          { native: "Nukuin", english: "I slept" },
          { native: "Katsoin", english: "I watched" }
        ]
      },
      {
        id: "fi-l7-q7",
        type: "audio_listen",
        phrase: "Olin kotona",
        prompt: "Listen to the phrase and select what it means:",
        options: ["I was at home", "I am going home", "I stayed at work", "I was in the city"],
        correctAnswer: "I was at home",
        explanation: "'Olin kotona' means 'I was at home'."
      },
      {
        id: "fi-l7-q8",
        type: "fill_blank",
        sentence: "Viime viikolla me ___ mökillä.",
        missingWord: "olimme",
        options: ["olimme", "olin", "olit", "olivat"],
        correctAnswer: "olimme",
        explanation: "'Olimme' is the 'me' (we) past tense form of 'olla'."
      },
      {
        id: "fi-l7-q9",
        type: "multiple_choice",
        prompt: "What does 'Hän tuli eilen' mean?",
        options: ["He/She came yesterday", "He/She left yesterday", "He/She slept yesterday", "He/She called yesterday"],
        correctAnswer: "He/She came yesterday",
        explanation: "'Tuli' is the past form of 'tulla' (to come)."
      },
      {
        id: "fi-l7-q10",
        type: "scramble",
        prompt: "Assemble: 'Yesterday I was very tired'",
        tokens: ["Olin", "eilen", "hyvin", "väsynyt", "iloinen"],
        correctTokens: ["Olin", "eilen", "hyvin", "väsynyt"],
        explanation: "'Väsynyt' means tired ('Olin eilen hyvin väsynyt')."
      },
      {
        id: "fi-l7-q11",
        type: "matching",
        prompt: "Match past tense communicative verbs:",
        pairs: [
          { native: "Kirjoitin", english: "I wrote" },
          { native: "Tapasin", english: "I met" },
          { native: "Kävelin", english: "I walked" },
          { native: "Kuuntelin", english: "I listened" }
        ]
      },
      {
        id: "fi-l7-q12",
        type: "audio_listen",
        phrase: "Toissapäivänä",
        prompt: "Listen to the word and select what it means:",
        options: ["The day before yesterday", "Yesterday", "Tomorrow", "Next week"],
        correctAnswer: "The day before yesterday",
        explanation: "'Toissapäivänä' means the day before yesterday."
      },
      {
        id: "fi-l7-q13",
        type: "multiple_choice",
        prompt: "What is the past tense form of 'sanoa' (to say) for 'hän'?",
        options: ["Sanoi", "Sanoo", "Sanoit", "Sanoimme"],
        correctAnswer: "Sanoi",
        explanation: "'Hän sanoi' means 'He/She said'."
      },
      {
        id: "fi-l7-q14",
        type: "fill_blank",
        sentence: "Mitä sinä ___ illalla?",
        missingWord: "teit",
        options: ["teit", "teet", "teki", "teimme"],
        correctAnswer: "teit",
        explanation: "'Mitä sinä teit illalla?' means 'What did you do in the evening?'."
      },
      {
        id: "fi-l7-q15",
        type: "scramble",
        prompt: "Assemble: 'We ate dinner together'",
        tokens: ["Söimme", "illallista", "yhdessä", "aamiaista"],
        correctTokens: ["Söimme", "illallista", "yhdessä"],
        explanation: "'Söimme' is 'we ate' and 'yhdessä' means 'together'."
      },
      {
        id: "fi-l7-q16",
        type: "matching",
        prompt: "Match life and daily routine past verbs:",
        pairs: [
          { native: "Asuin", english: "I lived" },
          { native: "Opin", english: "I learned" },
          { native: "Soitin", english: "I phoned / called" },
          { native: "Heräsin", english: "I woke up" }
        ]
      },
      {
        id: "fi-l7-q17",
        type: "audio_listen",
        phrase: "Viime vuonna",
        prompt: "Listen to the phrase and select what it means:",
        options: ["Last year", "Last week", "Last month", "Yesterday"],
        correctAnswer: "Last year",
        explanation: "'Viime vuonna' means last year."
      },
      {
        id: "fi-l7-q18",
        type: "multiple_choice",
        prompt: "How is negative past tense formed for 'me' (we did not go)?",
        options: ["Emme menneet", "Emme mene", "Ei mennyt", "Ette menneet"],
        correctAnswer: "Emme menneet",
        explanation: "Negative past uses the negative verb + past participle: 'Emme menneet'."
      },
      {
        id: "fi-l7-q19",
        type: "fill_blank",
        sentence: "Hän ___ minulle eilen.",
        missingWord: "soitti",
        options: ["soitti", "soittaa", "soitan", "soitit"],
        correctAnswer: "soitti",
        explanation: "'Hän soitti minulle eilen' means 'He/She phoned me yesterday'."
      },
      {
        id: "fi-l7-q20",
        type: "scramble",
        prompt: "Assemble: 'I bought a new jacket yesterday'",
        tokens: ["Ostin", "uuden", "takin", "eilen", "vanhan"],
        correctTokens: ["Ostin", "uuden", "takin", "eilen"],
        explanation: "'Ostin uuden takin eilen' means 'I bought a new jacket yesterday'."
      }
    ]
  },

  {
    id: "fi-u1-l9",
    title: "Lesson 9: Present tense",
    description: "Master Finnish present tense verb endings across all pronouns, question forms, and negatives.",
    xp: 30,
    questions: [
      {
        id: "fi-l9-q1",
        type: "multiple_choice",
        prompt: "How do you say 'We speak' in present tense?",
        options: ["Me puhumme", "Me puhun", "Me puhuu", "Me puhuvat"],
        correctAnswer: "Me puhumme",
        explanation: "The 1st person plural ('me') takes the personal ending '-mme': 'Me puhumme'."
      },
      {
        id: "fi-l9-q2",
        type: "matching",
        prompt: "Match present tense forms of 'olla' (to be):",
        pairs: [
          { native: "Minä olen", english: "I am" },
          { native: "Sinä olet", english: "You are" },
          { native: "Hän on", english: "He / She is" },
          { native: "He ovat", english: "They are" }
        ]
      },
      {
        id: "fi-l9-q3",
        type: "fill_blank",
        sentence: "Hän ___ suomea.",
        missingWord: "puhuu",
        options: ["puhuu", "puhun", "puhut", "puhumme"],
        correctAnswer: "puhuu",
        explanation: "Third person singular lengthens the vowel: 'Hän puhuu suomea'."
      },
      {
        id: "fi-l9-q4",
        type: "scramble",
        prompt: "Assemble: 'We live in Finland'",
        tokens: ["Me", "asumme", "Suomessa", "asun"],
        correctTokens: ["Me", "asumme", "Suomessa"],
        explanation: "'Me asumme Suomessa' means 'We live in Finland'."
      },
      {
        id: "fi-l9-q5",
        type: "multiple_choice",
        prompt: "What does 'He syövät' mean?",
        options: ["They eat", "We eat", "You eat", "He eats"],
        correctAnswer: "They eat",
        explanation: "The 3rd person plural ending is '-vat/-vät': 'He syövät' = 'They eat'."
      },
      {
        id: "fi-l9-q6",
        type: "matching",
        prompt: "Match verb conjugations for 'lukea' (to read):",
        pairs: [
          { native: "Minä luen", english: "I read" },
          { native: "Sinä luet", english: "You read" },
          { native: "Hän lukee", english: "He/She reads" },
          { native: "Me luemme", english: "We read" }
        ]
      },
      {
        id: "fi-l9-q7",
        type: "audio_listen",
        phrase: "En puhu",
        prompt: "Listen to the phrase and select what it means:",
        options: ["I do not speak", "You do not speak", "He does not speak", "We do not speak"],
        correctAnswer: "I do not speak",
        explanation: "In Finnish, negation is a verb: 'En puhu' = 'I do not speak'."
      },
      {
        id: "fi-l9-q8",
        type: "fill_blank",
        sentence: "Sinä ___ hyvää suomea.",
        missingWord: "puhut",
        options: ["puhut", "puhun", "puhuu", "puhutte"],
        correctAnswer: "puhut",
        explanation: "The second person singular takes ending '-t': 'Sinä puhut'."
      },
      {
        id: "fi-l9-q9",
        type: "multiple_choice",
        prompt: "Which word represents 'they do not' in Finnish?",
        options: ["Eivät", "Emme", "Ette", "Ei"],
        correctAnswer: "Eivät",
        explanation: "Negative verb forms: en, et, ei, emme, ette, eivät."
      },
      {
        id: "fi-l9-q10",
        type: "scramble",
        prompt: "Assemble: 'Do you speak English?'",
        tokens: ["Puhutko", "sinä", "englantia?", "suomea"],
        correctTokens: ["Puhutko", "sinä", "englantia?"],
        explanation: "Attaching '-ko/-kö' forms a yes/no question: 'Puhutko sinä englantia?'."
      },
      {
        id: "fi-l9-q11",
        type: "matching",
        prompt: "Match negative present forms of 'tietää' (to know):",
        pairs: [
          { native: "En tiedä", english: "I don't know" },
          { native: "Et tiedä", english: "You don't know" },
          { native: "Ei tiedä", english: "He/She doesn't know" },
          { native: "Emme tiedä", english: "We don't know" }
        ]
      },
      {
        id: "fi-l9-q12",
        type: "audio_listen",
        phrase: "Missä sinä asut?",
        prompt: "Listen to the question and select what it means:",
        options: ["Where do you live?", "Where are you going?", "Who are you?", "What do you do?"],
        correctAnswer: "Where do you live?",
        explanation: "'Missä sinä asut?' means 'Where do you live?'."
      },
      {
        id: "fi-l9-q13",
        type: "multiple_choice",
        prompt: "What does 'Te opiskelette' mean?",
        options: ["You (plural/polite) study", "They study", "We study", "I study"],
        correctAnswer: "You (plural/polite) study",
        explanation: "'-tte' is the 2nd person plural personal ending."
      },
      {
        id: "fi-l9-q14",
        type: "fill_blank",
        sentence: "He ___ paljon vettä.",
        missingWord: "juovat",
        options: ["juovat", "juo", "juomme", "juotte"],
        correctAnswer: "juovat",
        explanation: "'He juovat paljon vettä' means 'They drink a lot of water'."
      },
      {
        id: "fi-l9-q15",
        type: "scramble",
        prompt: "Assemble: 'I am going home now'",
        tokens: ["Menen", "nyt", "kotiin", "huomenna"],
        correctTokens: ["Menen", "nyt", "kotiin"],
        explanation: "'Menen nyt kotiin' means 'I am going home now'."
      },
      {
        id: "fi-l9-q16",
        type: "matching",
        prompt: "Match forms of 'tulla' (to come):",
        pairs: [
          { native: "Minä tulen", english: "I come" },
          { native: "Sinä tulet", english: "You come" },
          { native: "Me tulemme", english: "We come" },
          { native: "He tulevat", english: "They come" }
        ]
      },
      {
        id: "fi-l9-q17",
        type: "audio_listen",
        phrase: "Hän nukkuu",
        prompt: "Listen to the phrase and select what it means:",
        options: ["He/She is sleeping", "He/She is eating", "He/She is reading", "He/She is working"],
        correctAnswer: "He/She is sleeping",
        explanation: "'Hän nukkuu' means 'He/She is sleeping'."
      },
      {
        id: "fi-l9-q18",
        type: "multiple_choice",
        prompt: "What does 'Ette ymmärrä' mean?",
        options: ["You (plural) do not understand", "We do not understand", "They do not understand", "I do not understand"],
        correctAnswer: "You (plural) do not understand",
        explanation: "'Ette ymmärrä' addresses plural you in negative form."
      },
      {
        id: "fi-l9-q19",
        type: "fill_blank",
        sentence: "Me ___ uutta kieltä.",
        missingWord: "opimme",
        options: ["opimme", "opin", "oppii", "opitte"],
        correctAnswer: "opimme",
        explanation: "'Me opimme uutta kieltä' means 'We are learning a new language'."
      },
      {
        id: "fi-l9-q20",
        type: "scramble",
        prompt: "Assemble: 'Today is a beautiful day'",
        tokens: ["Tänään", "on", "kaunis", "päivä", "yö"],
        correctTokens: ["Tänään", "on", "kaunis", "päivä"],
        explanation: "'Tänään on kaunis päivä' means 'Today is a beautiful day'."
      }
    ]
  },

  {
    id: "fi-u1-l10",
    title: "Lesson 10 : talk about places",
    description: "Explore cities, schools, nature, transit, and master Finnish location cases (-ssa, -lla, -lle, -on).",
    xp: 30,
    questions: [
      {
        id: "fi-l10-q1",
        type: "multiple_choice",
        prompt: "What is 'kirjasto'?",
        options: ["Library", "School", "Train station", "Forest"],
        correctAnswer: "Library",
        explanation: "'Kirjasto' means library, derived from 'kirja' (book)."
      },
      {
        id: "fi-l10-q2",
        type: "matching",
        prompt: "Match places in Finnish:",
        pairs: [
          { native: "Kaupunki", english: "City / Town" },
          { native: "Koulu", english: "School" },
          { native: "Järvi", english: "Lake" },
          { native: "Metsä", english: "Forest" }
        ]
      },
      {
        id: "fi-l10-q3",
        type: "scramble",
        prompt: "Assemble: 'Where is the library?'",
        tokens: ["Missä", "on", "kirjasto?", "koulu"],
        correctTokens: ["Missä", "on", "kirjasto?"],
        explanation: "'Missä on kirjasto?' translates to 'Where is the library?'."
      },
      {
        id: "fi-l10-q4",
        type: "fill_blank",
        sentence: "Minä olen ___.",
        missingWord: "koulussa",
        options: ["koulussa", "kouluun", "koulu", "koulusta"],
        correctAnswer: "koulussa",
        explanation: "The inessive suffix '-ssa' expresses being inside/at: 'koulussa' = 'at school'."
      },
      {
        id: "fi-l10-q5",
        type: "multiple_choice",
        prompt: "What place is 'sairaala'?",
        options: ["Hospital", "Police station", "Hotel", "Post office"],
        correctAnswer: "Hospital",
        explanation: "'Sairaala' means hospital (from 'sairas' = sick)."
      },
      {
        id: "fi-l10-q6",
        type: "matching",
        prompt: "Match city spots and nature:",
        pairs: [
          { native: "Ravintola", english: "Restaurant" },
          { native: "Kauppa", english: "Store / Shop" },
          { native: "Puisto", english: "Park" },
          { native: "Meri", english: "Sea" }
        ]
      },
      {
        id: "fi-l10-q7",
        type: "audio_listen",
        phrase: "Juna-asema",
        prompt: "Listen to the word and select what it means:",
        options: ["Train station", "Airport", "Bus stop", "Harbor"],
        correctAnswer: "Train station",
        explanation: "'Juna-asema' is the train station ('juna' = train, 'asema' = station)."
      },
      {
        id: "fi-l10-q8",
        type: "fill_blank",
        sentence: "Menemme huomenna ___.",
        missingWord: "kaupunkiin",
        options: ["kaupunkiin", "kaupungissa", "kaupungista", "kaupunki"],
        correctAnswer: "kaupunkiin",
        explanation: "Illative case '-Vn' shows motion into: 'kaupunkiin' = 'into the city'."
      },
      {
        id: "fi-l10-q9",
        type: "multiple_choice",
        prompt: "What is 'lentokenttä'?",
        options: ["Airport", "Runway", "Train station", "Bus terminal"],
        correctAnswer: "Airport",
        explanation: "'Lentokenttä' means airport ('lento' = flight, 'kenttä' = field)."
      },
      {
        id: "fi-l10-q10",
        type: "scramble",
        prompt: "Assemble: 'There are many lakes in Finland'",
        tokens: ["Suomessa", "on", "paljon", "järviä", "metsiä"],
        correctTokens: ["Suomessa", "on", "paljon", "järviä"],
        explanation: "'Suomessa on paljon järviä' means 'In Finland there are many lakes'."
      },
      {
        id: "fi-l10-q11",
        type: "matching",
        prompt: "Match urban attractions:",
        pairs: [
          { native: "Tori", english: "Market square" },
          { native: "Ranta", english: "Beach / Shore" },
          { native: "Museo", english: "Museum" },
          { native: "Kirkko", english: "Church" }
        ]
      },
      {
        id: "fi-l10-q12",
        type: "audio_listen",
        phrase: "Pysäkki",
        prompt: "Listen to the word and select what it means:",
        options: ["Bus stop", "Crossroad", "Parking lot", "Traffic light"],
        correctAnswer: "Bus stop",
        explanation: "'Pysäkki' is a bus/tram stop."
      },
      {
        id: "fi-l10-q13",
        type: "multiple_choice",
        prompt: "What does 'hotelli' mean?",
        options: ["Hotel", "Hostel", "Restaurant", "Apartment"],
        correctAnswer: "Hotel",
        explanation: "'Hotelli' means hotel in Finnish."
      },
      {
        id: "fi-l10-q14",
        type: "fill_blank",
        sentence: "Olen nyt ___.",
        missingWord: "kirjastossa",
        options: ["kirjastossa", "kirjastoon", "kirjastosta", "kirjasto"],
        correctAnswer: "kirjastossa",
        explanation: "'-ssa' indicates location: 'kirjastossa' = 'in/at the library'."
      },
      {
        id: "fi-l10-q15",
        type: "scramble",
        prompt: "Assemble: 'The school is near the park'",
        tokens: ["Koulu", "on", "lähellä", "puistoa", "järveä"],
        correctTokens: ["Koulu", "on", "lähellä", "puistoa"],
        explanation: "'Lähellä' takes the partitive: 'Koulu on lähellä puistoa'."
      },
      {
        id: "fi-l10-q16",
        type: "matching",
        prompt: "Match geography and pathway words:",
        pairs: [
          { native: "Katu", english: "Street" },
          { native: "Silta", english: "Bridge" },
          { native: "Vuori", english: "Mountain" },
          { native: "Saari", english: "Island" }
        ]
      },
      {
        id: "fi-l10-q17",
        type: "audio_listen",
        phrase: "Apteekki",
        prompt: "Listen to the word and select what it means:",
        options: ["Pharmacy / Chemist", "Supermarket", "Bakery", "Clinic"],
        correctAnswer: "Pharmacy / Chemist",
        explanation: "'Apteekki' means pharmacy or chemist's."
      },
      {
        id: "fi-l10-q18",
        type: "multiple_choice",
        prompt: "What is 'kahvila'?",
        options: ["Cafe / Coffee shop", "Bar", "Bakery", "Kitchen"],
        correctAnswer: "Cafe / Coffee shop",
        explanation: "'Kahvila' means cafe or coffee shop."
      },
      {
        id: "fi-l10-q19",
        type: "fill_blank",
        sentence: "Istumme kauniissa ___.",
        missingWord: "puistossa",
        options: ["puistossa", "puistoon", "puistosta", "puisto"],
        correctAnswer: "puistossa",
        explanation: "Adjective and noun agree in case: 'kauniissa puistossa' = 'in a beautiful park'."
      },
      {
        id: "fi-l10-q20",
        type: "scramble",
        prompt: "Assemble: 'The train station is over there'",
        tokens: ["Juna-asema", "on", "tuolla", "täällä"],
        correctTokens: ["Juna-asema", "on", "tuolla"],
        explanation: "'Tuolla' indicates over there: 'Juna-asema on tuolla'."
      }
    ]
  }
];
