// NERDC-Aligned Hausa Curriculum Bank
// 15 Units across 3 Levels (Beginner, Intermediate, Advanced)
// Exactly 20 Questions per Unit/Lesson = 300 Questions Total
// Fully conforms to NERDC standard benchmarks, Boko orthography, and QuizModal interactive schemas

export const hausaAllUnits = [
  {
    "id": "ha-unit-1",
    "unitId": "ha-unit-1",
    "unitNumber": 1,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 1: The Hausa Alphabet and Vowels (Bakaken Da Wasula)",
    "subtitle": "Consonants, hook letters (ɓ, ɗ, ƙ, ʼy), glottal stop, vowel length, and tonal drills.",
    "icon": "BookOpen",
    "color": "#b45309",
    "lessons": [
      {
        "id": "ha-u1-l1",
        "title": "Lesson 1: Boko Orthography, Hook Letters & Tonal System",
        "description": "Master standard Hausa Latin (Boko) characters, unique hooked consonants, and short vs. long vowel distinctions.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which of the following is a special hooked consonant (bàƙin ƙirƙira) in the Hausa Boko alphabet?",
            "options": [
              "Ɗ (hooked D)",
              "Z",
              "M",
              "T"
            ],
            "correctAnswer": "Ɗ (hooked D)",
            "explanation": "Hausa features distinctive implosive and ejective consonants written with hooked letters: Ɓ/ɓ, Ɗ/ɗ, Ƙ/ƙ, and ʼY/ʼy."
          },
          {
            "id": "ha-u1-l1-q2",
            "type": "matching",
            "prompt": "Match the Hausa hooked letter with its phonetic description:",
            "pairs": [
              {
                "native": "Ɓ / ɓ",
                "english": "Voiced bilabial implosive",
                "left": "Ɓ / ɓ",
                "right": "Voiced bilabial implosive"
              },
              {
                "native": "Ɗ / ɗ",
                "english": "Voiced alveolar implosive",
                "left": "Ɗ / ɗ",
                "right": "Voiced alveolar implosive"
              },
              {
                "native": "Ƙ / ƙ",
                "english": "Velar ejective consonant",
                "left": "Ƙ / ƙ",
                "right": "Velar ejective consonant"
              },
              {
                "native": "ʼY / ʼy",
                "english": "Glottalized palatal approximant",
                "left": "ʼY / ʼy",
                "right": "Glottalized palatal approximant"
              }
            ]
          },
          {
            "id": "ha-u1-l1-q3",
            "type": "fill_blank",
            "sentence": "In Hausa, vowel length changes meaning: 'fari' means white, while 'faari' means ___.",
            "missingWord": "drought",
            "options": [
              "drought",
              "rain",
              "horse",
              "market"
            ],
            "correctAnswer": "drought",
            "explanation": "Vowel length is phonemic in Hausa: short vowel 'fari' (white) contrasts with long vowel 'faari' (drought/famine)."
          },
          {
            "id": "ha-u1-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Hausa alphabet has vowels' (Bakaken Hausa suna da wasula):",
            "tokens": [
              "Bakaken",
              "Hausa",
              "suna",
              "da",
              "wasula"
            ],
            "correctTokens": [
              "Bakaken",
              "Hausa",
              "suna",
              "da",
              "wasula"
            ]
          },
          {
            "id": "ha-u1-l1-q5",
            "type": "audio_listen",
            "phrase": "Ɓarawo",
            "prompt": "Listen to the word with the hooked consonant 'Ɓ'. What does 'Ɓarawo' mean?",
            "options": [
              "Thief",
              "Friend",
              "Teacher",
              "Doctor"
            ],
            "correctAnswer": "Thief",
            "explanation": "'Ɓarawo' (thief/robber) begins with the voiced bilabial implosive Ɓ."
          },
          {
            "id": "ha-u1-l1-q6",
            "type": "multiple_choice",
            "prompt": "How many primary vowels exist in standard Hausa phonology?",
            "options": [
              "5 vowels (a, e, i, o, u)",
              "3 vowels",
              "7 vowels",
              "10 vowels"
            ],
            "correctAnswer": "5 vowels (a, e, i, o, u)",
            "explanation": "Hausa has 5 basic vowel qualities (a, e, i, o, u), each occurring in phonemic short and long variants."
          },
          {
            "id": "ha-u1-l1-q7",
            "type": "multiple_choice",
            "prompt": "What is the Hausa term for the Latin script used to write modern Hausa?",
            "options": [
              "Boko",
              "Ajami",
              "Naskh",
              "Tifinagh"
            ],
            "correctAnswer": "Boko",
            "explanation": "'Boko' refers to the Latin orthography officially adopted for Hausa in the early 20th century."
          },
          {
            "id": "ha-u1-l1-q8",
            "type": "matching",
            "prompt": "Match the Hausa linguistic terms with their English meanings:",
            "pairs": [
              {
                "native": "Bakake",
                "english": "Consonants",
                "left": "Bakake",
                "right": "Consonants"
              },
              {
                "native": "Wasula",
                "english": "Vowels",
                "left": "Wasula",
                "right": "Vowels"
              },
              {
                "native": "Haruffa",
                "english": "Letters / Alphabet",
                "left": "Haruffa",
                "right": "Letters / Alphabet"
              },
              {
                "native": "Kalami",
                "english": "Speech / Utterance",
                "left": "Kalami",
                "right": "Speech / Utterance"
              }
            ]
          },
          {
            "id": "ha-u1-l1-q9",
            "type": "fill_blank",
            "sentence": "The word 'ɗa' (with hooked ɗ) means ___ in Hausa.",
            "missingWord": "son / child",
            "options": [
              "son / child",
              "water",
              "fire",
              "house"
            ],
            "correctAnswer": "son / child",
            "explanation": "'Ɗa' means son or child, distinct from plain 'da' which functions as the preposition 'with / and'."
          },
          {
            "id": "ha-u1-l1-q10",
            "type": "multiple_choice",
            "prompt": "Which tones are systematically present in Hausa speech work?",
            "options": [
              "High tone, Low tone, and Falling tone",
              "High tone and Click tone only",
              "Monotone pitch without pitch contrasts",
              "Rising tone only"
            ],
            "correctAnswer": "High tone, Low tone, and Falling tone",
            "explanation": "Hausa is a tonal language utilizing High (á), Low (à), and Falling (â) tones that distinguish word meanings and grammatical aspects."
          },
          {
            "id": "ha-u1-l1-q11",
            "type": "multiple_choice",
            "prompt": "What does the glottal consonant 'Ƙ' represent in a word like 'ƙofa'?",
            "options": [
              "Door",
              "Window",
              "Wall",
              "Road"
            ],
            "correctAnswer": "Door",
            "explanation": "'Ƙofa' (door / entrance / gate) begins with the ejective velar consonant Ƙ."
          },
          {
            "id": "ha-u1-l1-q12",
            "type": "matching",
            "prompt": "Match the Hausa word with its hooked initial letter:",
            "pairs": [
              {
                "native": "Ɗaki",
                "english": "Room",
                "left": "Ɗaki",
                "right": "Room"
              },
              {
                "native": "Ƙasa",
                "english": "Earth / Country / Down",
                "left": "Ƙasa",
                "right": "Earth / Country / Down"
              },
              {
                "native": "Ɓauna",
                "english": "Bush cow / Buffalo",
                "left": "Ɓauna",
                "right": "Bush cow / Buffalo"
              },
              {
                "native": "ʼYar uwa",
                "english": "Sister / Female relative",
                "left": "ʼYar uwa",
                "right": "Sister / Female relative"
              }
            ]
          },
          {
            "id": "ha-u1-l1-q13",
            "type": "fill_blank",
            "sentence": "The letter 'ʼy' in 'ʼyaʼya' represents the sound for ___.",
            "missingWord": "children / fruits",
            "options": [
              "children / fruits",
              "houses",
              "kings",
              "rivers"
            ],
            "correctAnswer": "children / fruits",
            "explanation": "'ʼYaʼya' translates to children or fruits, featuring the glottalized 'ʼy' digraph."
          },
          {
            "id": "ha-u1-l1-q14",
            "type": "multiple_choice",
            "prompt": "In Hausa phonology, diphthongs include which of the following pairs?",
            "options": [
              "ai and au",
              "oi and ui",
              "ei and eu",
              "ae and ao"
            ],
            "correctAnswer": "ai and au",
            "explanation": "Standard Hausa features two primary diphthongs: 'ai' (as in 'kai' - head) and 'au' (as in 'sau' - times/footprint)."
          },
          {
            "id": "ha-u1-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the tokens to form: 'Kai ne abokina' (You are my friend):",
            "tokens": [
              "Kai",
              "ne",
              "abokina"
            ],
            "correctTokens": [
              "Kai",
              "ne",
              "abokina"
            ]
          },
          {
            "id": "ha-u1-l1-q16",
            "type": "audio_listen",
            "phrase": "Manya da ƙanana",
            "prompt": "Listen to the phrase. What does 'Manya da ƙanana' mean?",
            "options": [
              "Old and young (Great and small)",
              "Rich and poor",
              "Near and far",
              "Day and night"
            ],
            "correctAnswer": "Old and young (Great and small)",
            "explanation": "'Manya' (adults/great ones) and 'ƙanana' (little ones/children) is a common inclusive social phrase."
          },
          {
            "id": "ha-u1-l1-q17",
            "type": "multiple_choice",
            "prompt": "Which pair demonstrates that tone alone changes meaning in Hausa?",
            "options": [
              "fàrī (high tone on ri = drought) vs fárì (low tone on ri = white)",
              "motà vs kekè",
              "gida vs daki",
              "boko vs ajami"
            ],
            "correctAnswer": "fàrī (high tone on ri = drought) vs fárì (low tone on ri = white)",
            "explanation": "Tone is lexical in Hausa: identical spelling can yield completely different words based on high and low pitches."
          },
          {
            "id": "ha-u1-l1-q18",
            "type": "fill_blank",
            "sentence": "When writing long vowels in standard educational linguistic transcription, the vowel is written ___.",
            "missingWord": "double (e.g., aa, ee)",
            "options": [
              "double (e.g., aa, ee)",
              "with a question mark",
              "capitalized",
              "italicized"
            ],
            "correctAnswer": "double (e.g., aa, ee)",
            "explanation": "In linguistic texts, vowel length is marked by doubling the letter (aa, ee, ii, oo, uu) or using a macron (ā)."
          },
          {
            "id": "ha-u1-l1-q19",
            "type": "multiple_choice",
            "prompt": "What sound does the apostrophe (hamza) represent in words like 'aʼa' (no)?",
            "options": [
              "A glottal stop",
              "A nasalized hiss",
              "A silent vowel",
              "A rolling R"
            ],
            "correctAnswer": "A glottal stop",
            "explanation": "The apostrophe represents the glottal stop (hamza), a distinct consonant produced by closing the vocal cords."
          },
          {
            "id": "ha-u1-l1-q20",
            "type": "matching",
            "prompt": "Match the vowel types with their example words:",
            "pairs": [
              {
                "native": "Short /a/",
                "english": "fari (white)",
                "left": "Short /a/",
                "right": "fari (white)"
              },
              {
                "native": "Long /aa/",
                "english": "faari (drought)",
                "left": "Long /aa/",
                "right": "faari (drought)"
              },
              {
                "native": "Diphthong /ai/",
                "english": "kai (head / you)",
                "left": "Diphthong /ai/",
                "right": "kai (head / you)"
              },
              {
                "native": "Diphthong /au/",
                "english": "dare da rana (night and day)",
                "left": "Diphthong /au/",
                "right": "dare da rana (night and day)"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u1-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which of the following is a special hooked consonant (bàƙin ƙirƙira) in the Hausa Boko alphabet?",
        "options": [
          "Ɗ (hooked D)",
          "Z",
          "M",
          "T"
        ],
        "correctAnswer": "Ɗ (hooked D)",
        "explanation": "Hausa features distinctive implosive and ejective consonants written with hooked letters: Ɓ/ɓ, Ɗ/ɗ, Ƙ/ƙ, and ʼY/ʼy."
      },
      {
        "id": "ha-u1-l1-q2",
        "type": "matching",
        "prompt": "Match the Hausa hooked letter with its phonetic description:",
        "pairs": [
          {
            "native": "Ɓ / ɓ",
            "english": "Voiced bilabial implosive",
            "left": "Ɓ / ɓ",
            "right": "Voiced bilabial implosive"
          },
          {
            "native": "Ɗ / ɗ",
            "english": "Voiced alveolar implosive",
            "left": "Ɗ / ɗ",
            "right": "Voiced alveolar implosive"
          },
          {
            "native": "Ƙ / ƙ",
            "english": "Velar ejective consonant",
            "left": "Ƙ / ƙ",
            "right": "Velar ejective consonant"
          },
          {
            "native": "ʼY / ʼy",
            "english": "Glottalized palatal approximant",
            "left": "ʼY / ʼy",
            "right": "Glottalized palatal approximant"
          }
        ]
      },
      {
        "id": "ha-u1-l1-q3",
        "type": "fill_blank",
        "sentence": "In Hausa, vowel length changes meaning: 'fari' means white, while 'faari' means ___.",
        "missingWord": "drought",
        "options": [
          "drought",
          "rain",
          "horse",
          "market"
        ],
        "correctAnswer": "drought",
        "explanation": "Vowel length is phonemic in Hausa: short vowel 'fari' (white) contrasts with long vowel 'faari' (drought/famine)."
      },
      {
        "id": "ha-u1-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Hausa alphabet has vowels' (Bakaken Hausa suna da wasula):",
        "tokens": [
          "Bakaken",
          "Hausa",
          "suna",
          "da",
          "wasula"
        ],
        "correctTokens": [
          "Bakaken",
          "Hausa",
          "suna",
          "da",
          "wasula"
        ]
      },
      {
        "id": "ha-u1-l1-q5",
        "type": "audio_listen",
        "phrase": "Ɓarawo",
        "prompt": "Listen to the word with the hooked consonant 'Ɓ'. What does 'Ɓarawo' mean?",
        "options": [
          "Thief",
          "Friend",
          "Teacher",
          "Doctor"
        ],
        "correctAnswer": "Thief",
        "explanation": "'Ɓarawo' (thief/robber) begins with the voiced bilabial implosive Ɓ."
      },
      {
        "id": "ha-u1-l1-q6",
        "type": "multiple_choice",
        "prompt": "How many primary vowels exist in standard Hausa phonology?",
        "options": [
          "5 vowels (a, e, i, o, u)",
          "3 vowels",
          "7 vowels",
          "10 vowels"
        ],
        "correctAnswer": "5 vowels (a, e, i, o, u)",
        "explanation": "Hausa has 5 basic vowel qualities (a, e, i, o, u), each occurring in phonemic short and long variants."
      },
      {
        "id": "ha-u1-l1-q7",
        "type": "multiple_choice",
        "prompt": "What is the Hausa term for the Latin script used to write modern Hausa?",
        "options": [
          "Boko",
          "Ajami",
          "Naskh",
          "Tifinagh"
        ],
        "correctAnswer": "Boko",
        "explanation": "'Boko' refers to the Latin orthography officially adopted for Hausa in the early 20th century."
      },
      {
        "id": "ha-u1-l1-q8",
        "type": "matching",
        "prompt": "Match the Hausa linguistic terms with their English meanings:",
        "pairs": [
          {
            "native": "Bakake",
            "english": "Consonants",
            "left": "Bakake",
            "right": "Consonants"
          },
          {
            "native": "Wasula",
            "english": "Vowels",
            "left": "Wasula",
            "right": "Vowels"
          },
          {
            "native": "Haruffa",
            "english": "Letters / Alphabet",
            "left": "Haruffa",
            "right": "Letters / Alphabet"
          },
          {
            "native": "Kalami",
            "english": "Speech / Utterance",
            "left": "Kalami",
            "right": "Speech / Utterance"
          }
        ]
      },
      {
        "id": "ha-u1-l1-q9",
        "type": "fill_blank",
        "sentence": "The word 'ɗa' (with hooked ɗ) means ___ in Hausa.",
        "missingWord": "son / child",
        "options": [
          "son / child",
          "water",
          "fire",
          "house"
        ],
        "correctAnswer": "son / child",
        "explanation": "'Ɗa' means son or child, distinct from plain 'da' which functions as the preposition 'with / and'."
      },
      {
        "id": "ha-u1-l1-q10",
        "type": "multiple_choice",
        "prompt": "Which tones are systematically present in Hausa speech work?",
        "options": [
          "High tone, Low tone, and Falling tone",
          "High tone and Click tone only",
          "Monotone pitch without pitch contrasts",
          "Rising tone only"
        ],
        "correctAnswer": "High tone, Low tone, and Falling tone",
        "explanation": "Hausa is a tonal language utilizing High (á), Low (à), and Falling (â) tones that distinguish word meanings and grammatical aspects."
      },
      {
        "id": "ha-u1-l1-q11",
        "type": "multiple_choice",
        "prompt": "What does the glottal consonant 'Ƙ' represent in a word like 'ƙofa'?",
        "options": [
          "Door",
          "Window",
          "Wall",
          "Road"
        ],
        "correctAnswer": "Door",
        "explanation": "'Ƙofa' (door / entrance / gate) begins with the ejective velar consonant Ƙ."
      },
      {
        "id": "ha-u1-l1-q12",
        "type": "matching",
        "prompt": "Match the Hausa word with its hooked initial letter:",
        "pairs": [
          {
            "native": "Ɗaki",
            "english": "Room",
            "left": "Ɗaki",
            "right": "Room"
          },
          {
            "native": "Ƙasa",
            "english": "Earth / Country / Down",
            "left": "Ƙasa",
            "right": "Earth / Country / Down"
          },
          {
            "native": "Ɓauna",
            "english": "Bush cow / Buffalo",
            "left": "Ɓauna",
            "right": "Bush cow / Buffalo"
          },
          {
            "native": "ʼYar uwa",
            "english": "Sister / Female relative",
            "left": "ʼYar uwa",
            "right": "Sister / Female relative"
          }
        ]
      },
      {
        "id": "ha-u1-l1-q13",
        "type": "fill_blank",
        "sentence": "The letter 'ʼy' in 'ʼyaʼya' represents the sound for ___.",
        "missingWord": "children / fruits",
        "options": [
          "children / fruits",
          "houses",
          "kings",
          "rivers"
        ],
        "correctAnswer": "children / fruits",
        "explanation": "'ʼYaʼya' translates to children or fruits, featuring the glottalized 'ʼy' digraph."
      },
      {
        "id": "ha-u1-l1-q14",
        "type": "multiple_choice",
        "prompt": "In Hausa phonology, diphthongs include which of the following pairs?",
        "options": [
          "ai and au",
          "oi and ui",
          "ei and eu",
          "ae and ao"
        ],
        "correctAnswer": "ai and au",
        "explanation": "Standard Hausa features two primary diphthongs: 'ai' (as in 'kai' - head) and 'au' (as in 'sau' - times/footprint)."
      },
      {
        "id": "ha-u1-l1-q15",
        "type": "scramble",
        "prompt": "Arrange the tokens to form: 'Kai ne abokina' (You are my friend):",
        "tokens": [
          "Kai",
          "ne",
          "abokina"
        ],
        "correctTokens": [
          "Kai",
          "ne",
          "abokina"
        ]
      },
      {
        "id": "ha-u1-l1-q16",
        "type": "audio_listen",
        "phrase": "Manya da ƙanana",
        "prompt": "Listen to the phrase. What does 'Manya da ƙanana' mean?",
        "options": [
          "Old and young (Great and small)",
          "Rich and poor",
          "Near and far",
          "Day and night"
        ],
        "correctAnswer": "Old and young (Great and small)",
        "explanation": "'Manya' (adults/great ones) and 'ƙanana' (little ones/children) is a common inclusive social phrase."
      },
      {
        "id": "ha-u1-l1-q17",
        "type": "multiple_choice",
        "prompt": "Which pair demonstrates that tone alone changes meaning in Hausa?",
        "options": [
          "fàrī (high tone on ri = drought) vs fárì (low tone on ri = white)",
          "motà vs kekè",
          "gida vs daki",
          "boko vs ajami"
        ],
        "correctAnswer": "fàrī (high tone on ri = drought) vs fárì (low tone on ri = white)",
        "explanation": "Tone is lexical in Hausa: identical spelling can yield completely different words based on high and low pitches."
      },
      {
        "id": "ha-u1-l1-q18",
        "type": "fill_blank",
        "sentence": "When writing long vowels in standard educational linguistic transcription, the vowel is written ___.",
        "missingWord": "double (e.g., aa, ee)",
        "options": [
          "double (e.g., aa, ee)",
          "with a question mark",
          "capitalized",
          "italicized"
        ],
        "correctAnswer": "double (e.g., aa, ee)",
        "explanation": "In linguistic texts, vowel length is marked by doubling the letter (aa, ee, ii, oo, uu) or using a macron (ā)."
      },
      {
        "id": "ha-u1-l1-q19",
        "type": "multiple_choice",
        "prompt": "What sound does the apostrophe (hamza) represent in words like 'aʼa' (no)?",
        "options": [
          "A glottal stop",
          "A nasalized hiss",
          "A silent vowel",
          "A rolling R"
        ],
        "correctAnswer": "A glottal stop",
        "explanation": "The apostrophe represents the glottal stop (hamza), a distinct consonant produced by closing the vocal cords."
      },
      {
        "id": "ha-u1-l1-q20",
        "type": "matching",
        "prompt": "Match the vowel types with their example words:",
        "pairs": [
          {
            "native": "Short /a/",
            "english": "fari (white)",
            "left": "Short /a/",
            "right": "fari (white)"
          },
          {
            "native": "Long /aa/",
            "english": "faari (drought)",
            "left": "Long /aa/",
            "right": "faari (drought)"
          },
          {
            "native": "Diphthong /ai/",
            "english": "kai (head / you)",
            "left": "Diphthong /ai/",
            "right": "kai (head / you)"
          },
          {
            "native": "Diphthong /au/",
            "english": "dare da rana (night and day)",
            "left": "Diphthong /au/",
            "right": "dare da rana (night and day)"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-2",
    "unitId": "ha-unit-2",
    "unitNumber": 2,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 2: Greetings and Social Courtesies (Gaisuwa)",
    "subtitle": "Time-of-day salutations, formal honorifics, and Islamic-cultural courtesy responses.",
    "icon": "MessageCircle",
    "color": "#d97706",
    "lessons": [
      {
        "id": "ha-u2-l1",
        "title": "Lesson 1: Gaisuwar Hausa & Respectful Salutations",
        "description": "Master daily greetings from morning to night and formal courtesies like Ranki ya dade.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u2-l1-q1",
            "type": "multiple_choice",
            "prompt": "How do you say 'Good morning' in Hausa?",
            "options": [
              "Ina kwana? / Barka da safiya",
              "Barka da yamma",
              "Barka da dare",
              "Sai an jima"
            ],
            "correctAnswer": "Ina kwana? / Barka da safiya",
            "explanation": "'Ina kwana?' (How did you sleep?) and 'Barka da safiya' (Blessings of the morning) are the standard morning salutations."
          },
          {
            "id": "ha-u2-l1-q2",
            "type": "matching",
            "prompt": "Match the Hausa greetings with their time of day:",
            "pairs": [
              {
                "native": "Barka da safiya",
                "english": "Good morning",
                "left": "Barka da safiya",
                "right": "Good morning"
              },
              {
                "native": "Barka da rana",
                "english": "Good afternoon (midday)",
                "left": "Barka da rana",
                "right": "Good afternoon (midday)"
              },
              {
                "native": "Barka da yamma",
                "english": "Good evening",
                "left": "Barka da yamma",
                "right": "Good evening"
              },
              {
                "native": "Mu kwana lafiya",
                "english": "Good night / Sleep peacefully",
                "left": "Mu kwana lafiya",
                "right": "Good night / Sleep peacefully"
              }
            ]
          },
          {
            "id": "ha-u2-l1-q3",
            "type": "fill_blank",
            "sentence": "When someone asks 'Ina kwana?', the polite answer is '___' (In good peace).",
            "missingWord": "Lafiya lau",
            "options": [
              "Lafiya lau",
              "A'a",
              "Komi",
              "Gobe"
            ],
            "correctAnswer": "Lafiya lau",
            "explanation": "'Lafiya lau' (in perfect peace/health) is the universal respectful response to greeting inquiries."
          },
          {
            "id": "ha-u2-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'May your life be prolonged' (Royal/Formal title):",
            "tokens": [
              "Ranki",
              "ya",
              "daɗe"
            ],
            "correctTokens": [
              "Ranki",
              "ya",
              "daɗe"
            ]
          },
          {
            "id": "ha-u2-l1-q5",
            "type": "audio_listen",
            "phrase": "Sannu da aiki",
            "prompt": "Listen to the audio. What does 'Sannu da aiki' mean?",
            "options": [
              "Well done with your work!",
              "Welcome home!",
              "Have a safe trip!",
              "Thank you for the gift!"
            ],
            "correctAnswer": "Well done with your work!",
            "explanation": "'Sannu da aiki' is warmly used to greet anyone currently working or performing tasks."
          },
          {
            "id": "ha-u2-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the respectful greeting addressed specifically to an esteemed woman or mother?",
            "options": [
              "Hajiya / Iya",
              "Mallam",
              "Yaro",
              "Aboki"
            ],
            "correctAnswer": "Hajiya / Iya",
            "explanation": "'Hajiya' or 'Iya' expresses deep honor and filial courtesy towards an elder woman or mother."
          },
          {
            "id": "ha-u2-l1-q7",
            "type": "multiple_choice",
            "prompt": "What does 'Yaya kake?' mean when greeting someone?",
            "options": [
              "How are you? (To a male)",
              "Where are you going?",
              "What is your name?",
              "How much is this?"
            ],
            "correctAnswer": "How are you? (To a male)",
            "explanation": "'Yaya kake?' asks 'How are you?' to a male, while 'Yaya kike?' is used when addressing a female."
          },
          {
            "id": "ha-u2-l1-q8",
            "type": "matching",
            "prompt": "Match the gendered Hausa greeting phrases:",
            "pairs": [
              {
                "native": "Yaya kake?",
                "english": "How are you? (Male)",
                "left": "Yaya kake?",
                "right": "How are you? (Male)"
              },
              {
                "native": "Yaya kike?",
                "english": "How are you? (Female)",
                "left": "Yaya kike?",
                "right": "How are you? (Female)"
              },
              {
                "native": "Yaya kuke?",
                "english": "How are you all? (Plural)",
                "left": "Yaya kuke?",
                "right": "How are you all? (Plural)"
              },
              {
                "native": "Yaya gida?",
                "english": "How is the household/family?",
                "left": "Yaya gida?",
                "right": "How is the household/family?"
              }
            ]
          },
          {
            "id": "ha-u2-l1-q9",
            "type": "fill_blank",
            "sentence": "To express sincere gratitude in Hausa, one says '___' (Thank you very much).",
            "missingWord": "Nagode sosai",
            "options": [
              "Nagode sosai",
              "Kada ka damu",
              "Babu komi",
              "Zo nan"
            ],
            "correctAnswer": "Nagode sosai",
            "explanation": "'Nagode' means thank you; adding 'sosai' intensifies it to 'thank you very much'."
          },
          {
            "id": "ha-u2-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the common parting phrase meaning 'Until later / Goodbye'?",
            "options": [
              "Sai an jima",
              "Sannu",
              "Barka",
              "Gaisuwa"
            ],
            "correctAnswer": "Sai an jima",
            "explanation": "'Sai an jima' means 'Until later' or 'See you in a bit', signaling a warm departure."
          },
          {
            "id": "ha-u2-l1-q11",
            "type": "multiple_choice",
            "prompt": "If you are leaving someone until tomorrow, what do you say?",
            "options": [
              "Sai gobe",
              "Sai an jima",
              "Sai mako mai zuwa",
              "Ina kwana"
            ],
            "correctAnswer": "Sai gobe",
            "explanation": "'Sai gobe' literally means 'Until tomorrow' ('gobe' = tomorrow)."
          },
          {
            "id": "ha-u2-l1-q12",
            "type": "matching",
            "prompt": "Match the courtesy responses with their English meanings:",
            "pairs": [
              {
                "native": "Maraba da zuwa",
                "english": "Welcome (on arrival)",
                "left": "Maraba da zuwa",
                "right": "Welcome (on arrival)"
              },
              {
                "native": "Babu damuwa",
                "english": "No problem / No worries",
                "left": "Babu damuwa",
                "right": "No problem / No worries"
              },
              {
                "native": "Kada ka damu",
                "english": "Do not worry",
                "left": "Kada ka damu",
                "right": "Do not worry"
              },
              {
                "native": "Haba mana!",
                "english": "Come on! / Naturally!",
                "left": "Haba mana!",
                "right": "Come on! / Naturally!"
              }
            ]
          },
          {
            "id": "ha-u2-l1-q13",
            "type": "fill_blank",
            "sentence": "When a guest enters the home, the host warmly says '___' (Welcome!).",
            "missingWord": "Barka da zuwa",
            "options": [
              "Barka da zuwa",
              "Sai wata rana",
              "Ina gajiya",
              "Komi da komi"
            ],
            "correctAnswer": "Barka da zuwa",
            "explanation": "'Barka da zuwa' is the premier welcoming formula for visitors and travelers."
          },
          {
            "id": "ha-u2-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'How is the tiredness?' (Ina gajiya?):",
            "tokens": [
              "Ina",
              "gajiya",
              "?"
            ],
            "correctTokens": [
              "Ina",
              "gajiya",
              "?"
            ]
          },
          {
            "id": "ha-u2-l1-q15",
            "type": "multiple_choice",
            "prompt": "How does one reply to 'Ina gajiya?' (How is the fatigue/tiredness)?",
            "options": [
              "Babu gajiya (No tiredness at all)",
              "Ina gajiya sosai",
              "A'a ba haka ba",
              "Ban sani ba"
            ],
            "correctAnswer": "Babu gajiya (No tiredness at all)",
            "explanation": "Politeness dictates minimizing fatigue by cheerfully responding 'Babu gajiya' (No tiredness / We are energized)."
          },
          {
            "id": "ha-u2-l1-q16",
            "type": "audio_listen",
            "phrase": "Allah ya ba da sa'a",
            "prompt": "Listen to the blessing. What does 'Allah ya ba da sa'a' mean?",
            "options": [
              "May God grant success / good fortune",
              "May God bring rain",
              "May God heal the sick",
              "May God forgive us"
            ],
            "correctAnswer": "May God grant success / good fortune",
            "explanation": "'Allah ya ba da sa'a' is a traditional prayer/benediction wishing someone divine favor and triumph."
          },
          {
            "id": "ha-u2-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Barka da hutawa' mean?",
            "options": [
              "Happy relaxing / Happy weekend or rest!",
              "Welcome to town!",
              "Happy birthday!",
              "Safe journey!"
            ],
            "correctAnswer": "Happy relaxing / Happy weekend or rest!",
            "explanation": "'Hutawa' means resting; 'Barka da hutawa' wishes someone a refreshing rest or holiday."
          },
          {
            "id": "ha-u2-l1-q18",
            "type": "fill_blank",
            "sentence": "The phrase 'Don Allah' is used to politely say '___'.",
            "missingWord": "Please / For God's sake",
            "options": [
              "Please / For God's sake",
              "Thank you",
              "Goodbye",
              "Excuse me"
            ],
            "correctAnswer": "Please / For God's sake",
            "explanation": "'Don Allah' (for the sake of God) is the customary polite term for 'please'."
          },
          {
            "id": "ha-u2-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is the polite title for an Islamic scholar, respected teacher, or gentleman?",
            "options": [
              "Mallam",
              "Sarki",
              "Yaro",
              "Kani"
            ],
            "correctAnswer": "Mallam",
            "explanation": "'Mallam' (from Arabic mu'allim) is the distinguished title for teachers, scholars, and gentlemen."
          },
          {
            "id": "ha-u2-l1-q20",
            "type": "matching",
            "prompt": "Match the traditional Hausa titles with their roles:",
            "pairs": [
              {
                "native": "Sarki",
                "english": "King / Emir",
                "left": "Sarki",
                "right": "King / Emir"
              },
              {
                "native": "Mai gida",
                "english": "Head of household / Landlord",
                "left": "Mai gida",
                "right": "Head of household / Landlord"
              },
              {
                "native": "Aboki",
                "english": "Friend (Male)",
                "left": "Aboki",
                "right": "Friend (Male)"
              },
              {
                "native": "Kawa",
                "english": "Female friend (used by females)",
                "left": "Kawa",
                "right": "Female friend (used by females)"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u2-l1-q1",
        "type": "multiple_choice",
        "prompt": "How do you say 'Good morning' in Hausa?",
        "options": [
          "Ina kwana? / Barka da safiya",
          "Barka da yamma",
          "Barka da dare",
          "Sai an jima"
        ],
        "correctAnswer": "Ina kwana? / Barka da safiya",
        "explanation": "'Ina kwana?' (How did you sleep?) and 'Barka da safiya' (Blessings of the morning) are the standard morning salutations."
      },
      {
        "id": "ha-u2-l1-q2",
        "type": "matching",
        "prompt": "Match the Hausa greetings with their time of day:",
        "pairs": [
          {
            "native": "Barka da safiya",
            "english": "Good morning",
            "left": "Barka da safiya",
            "right": "Good morning"
          },
          {
            "native": "Barka da rana",
            "english": "Good afternoon (midday)",
            "left": "Barka da rana",
            "right": "Good afternoon (midday)"
          },
          {
            "native": "Barka da yamma",
            "english": "Good evening",
            "left": "Barka da yamma",
            "right": "Good evening"
          },
          {
            "native": "Mu kwana lafiya",
            "english": "Good night / Sleep peacefully",
            "left": "Mu kwana lafiya",
            "right": "Good night / Sleep peacefully"
          }
        ]
      },
      {
        "id": "ha-u2-l1-q3",
        "type": "fill_blank",
        "sentence": "When someone asks 'Ina kwana?', the polite answer is '___' (In good peace).",
        "missingWord": "Lafiya lau",
        "options": [
          "Lafiya lau",
          "A'a",
          "Komi",
          "Gobe"
        ],
        "correctAnswer": "Lafiya lau",
        "explanation": "'Lafiya lau' (in perfect peace/health) is the universal respectful response to greeting inquiries."
      },
      {
        "id": "ha-u2-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'May your life be prolonged' (Royal/Formal title):",
        "tokens": [
          "Ranki",
          "ya",
          "daɗe"
        ],
        "correctTokens": [
          "Ranki",
          "ya",
          "daɗe"
        ]
      },
      {
        "id": "ha-u2-l1-q5",
        "type": "audio_listen",
        "phrase": "Sannu da aiki",
        "prompt": "Listen to the audio. What does 'Sannu da aiki' mean?",
        "options": [
          "Well done with your work!",
          "Welcome home!",
          "Have a safe trip!",
          "Thank you for the gift!"
        ],
        "correctAnswer": "Well done with your work!",
        "explanation": "'Sannu da aiki' is warmly used to greet anyone currently working or performing tasks."
      },
      {
        "id": "ha-u2-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the respectful greeting addressed specifically to an esteemed woman or mother?",
        "options": [
          "Hajiya / Iya",
          "Mallam",
          "Yaro",
          "Aboki"
        ],
        "correctAnswer": "Hajiya / Iya",
        "explanation": "'Hajiya' or 'Iya' expresses deep honor and filial courtesy towards an elder woman or mother."
      },
      {
        "id": "ha-u2-l1-q7",
        "type": "multiple_choice",
        "prompt": "What does 'Yaya kake?' mean when greeting someone?",
        "options": [
          "How are you? (To a male)",
          "Where are you going?",
          "What is your name?",
          "How much is this?"
        ],
        "correctAnswer": "How are you? (To a male)",
        "explanation": "'Yaya kake?' asks 'How are you?' to a male, while 'Yaya kike?' is used when addressing a female."
      },
      {
        "id": "ha-u2-l1-q8",
        "type": "matching",
        "prompt": "Match the gendered Hausa greeting phrases:",
        "pairs": [
          {
            "native": "Yaya kake?",
            "english": "How are you? (Male)",
            "left": "Yaya kake?",
            "right": "How are you? (Male)"
          },
          {
            "native": "Yaya kike?",
            "english": "How are you? (Female)",
            "left": "Yaya kike?",
            "right": "How are you? (Female)"
          },
          {
            "native": "Yaya kuke?",
            "english": "How are you all? (Plural)",
            "left": "Yaya kuke?",
            "right": "How are you all? (Plural)"
          },
          {
            "native": "Yaya gida?",
            "english": "How is the household/family?",
            "left": "Yaya gida?",
            "right": "How is the household/family?"
          }
        ]
      },
      {
        "id": "ha-u2-l1-q9",
        "type": "fill_blank",
        "sentence": "To express sincere gratitude in Hausa, one says '___' (Thank you very much).",
        "missingWord": "Nagode sosai",
        "options": [
          "Nagode sosai",
          "Kada ka damu",
          "Babu komi",
          "Zo nan"
        ],
        "correctAnswer": "Nagode sosai",
        "explanation": "'Nagode' means thank you; adding 'sosai' intensifies it to 'thank you very much'."
      },
      {
        "id": "ha-u2-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the common parting phrase meaning 'Until later / Goodbye'?",
        "options": [
          "Sai an jima",
          "Sannu",
          "Barka",
          "Gaisuwa"
        ],
        "correctAnswer": "Sai an jima",
        "explanation": "'Sai an jima' means 'Until later' or 'See you in a bit', signaling a warm departure."
      },
      {
        "id": "ha-u2-l1-q11",
        "type": "multiple_choice",
        "prompt": "If you are leaving someone until tomorrow, what do you say?",
        "options": [
          "Sai gobe",
          "Sai an jima",
          "Sai mako mai zuwa",
          "Ina kwana"
        ],
        "correctAnswer": "Sai gobe",
        "explanation": "'Sai gobe' literally means 'Until tomorrow' ('gobe' = tomorrow)."
      },
      {
        "id": "ha-u2-l1-q12",
        "type": "matching",
        "prompt": "Match the courtesy responses with their English meanings:",
        "pairs": [
          {
            "native": "Maraba da zuwa",
            "english": "Welcome (on arrival)",
            "left": "Maraba da zuwa",
            "right": "Welcome (on arrival)"
          },
          {
            "native": "Babu damuwa",
            "english": "No problem / No worries",
            "left": "Babu damuwa",
            "right": "No problem / No worries"
          },
          {
            "native": "Kada ka damu",
            "english": "Do not worry",
            "left": "Kada ka damu",
            "right": "Do not worry"
          },
          {
            "native": "Haba mana!",
            "english": "Come on! / Naturally!",
            "left": "Haba mana!",
            "right": "Come on! / Naturally!"
          }
        ]
      },
      {
        "id": "ha-u2-l1-q13",
        "type": "fill_blank",
        "sentence": "When a guest enters the home, the host warmly says '___' (Welcome!).",
        "missingWord": "Barka da zuwa",
        "options": [
          "Barka da zuwa",
          "Sai wata rana",
          "Ina gajiya",
          "Komi da komi"
        ],
        "correctAnswer": "Barka da zuwa",
        "explanation": "'Barka da zuwa' is the premier welcoming formula for visitors and travelers."
      },
      {
        "id": "ha-u2-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'How is the tiredness?' (Ina gajiya?):",
        "tokens": [
          "Ina",
          "gajiya",
          "?"
        ],
        "correctTokens": [
          "Ina",
          "gajiya",
          "?"
        ]
      },
      {
        "id": "ha-u2-l1-q15",
        "type": "multiple_choice",
        "prompt": "How does one reply to 'Ina gajiya?' (How is the fatigue/tiredness)?",
        "options": [
          "Babu gajiya (No tiredness at all)",
          "Ina gajiya sosai",
          "A'a ba haka ba",
          "Ban sani ba"
        ],
        "correctAnswer": "Babu gajiya (No tiredness at all)",
        "explanation": "Politeness dictates minimizing fatigue by cheerfully responding 'Babu gajiya' (No tiredness / We are energized)."
      },
      {
        "id": "ha-u2-l1-q16",
        "type": "audio_listen",
        "phrase": "Allah ya ba da sa'a",
        "prompt": "Listen to the blessing. What does 'Allah ya ba da sa'a' mean?",
        "options": [
          "May God grant success / good fortune",
          "May God bring rain",
          "May God heal the sick",
          "May God forgive us"
        ],
        "correctAnswer": "May God grant success / good fortune",
        "explanation": "'Allah ya ba da sa'a' is a traditional prayer/benediction wishing someone divine favor and triumph."
      },
      {
        "id": "ha-u2-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Barka da hutawa' mean?",
        "options": [
          "Happy relaxing / Happy weekend or rest!",
          "Welcome to town!",
          "Happy birthday!",
          "Safe journey!"
        ],
        "correctAnswer": "Happy relaxing / Happy weekend or rest!",
        "explanation": "'Hutawa' means resting; 'Barka da hutawa' wishes someone a refreshing rest or holiday."
      },
      {
        "id": "ha-u2-l1-q18",
        "type": "fill_blank",
        "sentence": "The phrase 'Don Allah' is used to politely say '___'.",
        "missingWord": "Please / For God's sake",
        "options": [
          "Please / For God's sake",
          "Thank you",
          "Goodbye",
          "Excuse me"
        ],
        "correctAnswer": "Please / For God's sake",
        "explanation": "'Don Allah' (for the sake of God) is the customary polite term for 'please'."
      },
      {
        "id": "ha-u2-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is the polite title for an Islamic scholar, respected teacher, or gentleman?",
        "options": [
          "Mallam",
          "Sarki",
          "Yaro",
          "Kani"
        ],
        "correctAnswer": "Mallam",
        "explanation": "'Mallam' (from Arabic mu'allim) is the distinguished title for teachers, scholars, and gentlemen."
      },
      {
        "id": "ha-u2-l1-q20",
        "type": "matching",
        "prompt": "Match the traditional Hausa titles with their roles:",
        "pairs": [
          {
            "native": "Sarki",
            "english": "King / Emir",
            "left": "Sarki",
            "right": "King / Emir"
          },
          {
            "native": "Mai gida",
            "english": "Head of household / Landlord",
            "left": "Mai gida",
            "right": "Head of household / Landlord"
          },
          {
            "native": "Aboki",
            "english": "Friend (Male)",
            "left": "Aboki",
            "right": "Friend (Male)"
          },
          {
            "native": "Kawa",
            "english": "Female friend (used by females)",
            "left": "Kawa",
            "right": "Female friend (used by females)"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-3",
    "unitId": "ha-unit-3",
    "unitNumber": 3,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 3: Numbers, Colors, and Days (Lambar Lamba da Launuka)",
    "subtitle": "Counting 1 to 50, basic chromatic terms, and the seven days of the week.",
    "icon": "Hash",
    "color": "#059669",
    "lessons": [
      {
        "id": "ha-u3-l1",
        "title": "Lesson 1: Ƙidaya, Ranaku da Launuka",
        "description": "Master counting from 1 to 50, days from Litinin to Lahadi, and core descriptive colors.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u3-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Hausa number for 'One' and 'Two'?",
            "options": [
              "Ɗaya da Biyu",
              "Uku da Huɗu",
              "Biyar da Shida",
              "Goma da Ashirin"
            ],
            "correctAnswer": "Ɗaya da Biyu",
            "explanation": "In Hausa: 1 = Ɗaya, 2 = Biyu."
          },
          {
            "id": "ha-u3-l1-q2",
            "type": "matching",
            "prompt": "Match the Hausa numerals from 1 to 5:",
            "pairs": [
              {
                "native": "Ɗaya",
                "english": "1 (One)",
                "left": "Ɗaya",
                "right": "1 (One)"
              },
              {
                "native": "Biyu",
                "english": "2 (Two)",
                "left": "Biyu",
                "right": "2 (Two)"
              },
              {
                "native": "Uku",
                "english": "3 (Three)",
                "left": "Uku",
                "right": "3 (Three)"
              },
              {
                "native": "Huɗu",
                "english": "4 (Four)",
                "left": "Huɗu",
                "right": "4 (Four)"
              }
            ]
          },
          {
            "id": "ha-u3-l1-q3",
            "type": "fill_blank",
            "sentence": "The number 5 in Hausa is '___', and 10 is 'goma'.",
            "missingWord": "biyar",
            "options": [
              "biyar",
              "shida",
              "bakwai",
              "tara"
            ],
            "correctAnswer": "biyar",
            "explanation": "1 to 5: ɗaya, biyu, uku, huɗu, biyar. 10 is goma."
          },
          {
            "id": "ha-u3-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the numbers in order from 6 to 8 (Shida, Bakwai, Takwas):",
            "tokens": [
              "Shida",
              "Bakwai",
              "Takwas"
            ],
            "correctTokens": [
              "Shida",
              "Bakwai",
              "Takwas"
            ]
          },
          {
            "id": "ha-u3-l1-q5",
            "type": "audio_listen",
            "phrase": "Ashirin da biyar",
            "prompt": "Listen to the number. What is 'Ashirin da biyar'?",
            "options": [
              "25",
              "20",
              "15",
              "50"
            ],
            "correctAnswer": "25",
            "explanation": "'Ashirin' = 20, 'da biyar' = and five, totaling 25."
          },
          {
            "id": "ha-u3-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the Hausa word for 'Twenty' and 'Thirty'?",
            "options": [
              "Ashirin da Talatin",
              "Goma da Biyar",
              "Hamsin da Saba'in",
              "Ɗari da Dubu"
            ],
            "correctAnswer": "Ashirin da Talatin",
            "explanation": "Tens: 10 = Goma, 20 = Ashirin, 30 = Talatin, 40 = Arba'in, 50 = Hamsin."
          },
          {
            "id": "ha-u3-l1-q7",
            "type": "multiple_choice",
            "prompt": "What is the Hausa number for 50?",
            "options": [
              "Hamsin",
              "Arba'in",
              "Talatin",
              "Ɗari"
            ],
            "correctAnswer": "Hamsin",
            "explanation": "50 is 'Hamsin', derived from the Afroasiatic/Arabic root for five."
          },
          {
            "id": "ha-u3-l1-q8",
            "type": "matching",
            "prompt": "Match the primary Hausa colors with their English equivalents:",
            "pairs": [
              {
                "native": "Ja",
                "english": "Red",
                "left": "Ja",
                "right": "Red"
              },
              {
                "native": "Fari",
                "english": "White",
                "left": "Fari",
                "right": "White"
              },
              {
                "native": "Baƙi",
                "english": "Black",
                "left": "Baƙi",
                "right": "Black"
              },
              {
                "native": "Kore",
                "english": "Green",
                "left": "Kore",
                "right": "Green"
              }
            ]
          },
          {
            "id": "ha-u3-l1-q9",
            "type": "fill_blank",
            "sentence": "The color yellow is called '___' in Hausa.",
            "missingWord": "rawaya",
            "options": [
              "rawaya",
              "ja",
              "kore",
              "shudi"
            ],
            "correctAnswer": "rawaya",
            "explanation": "'Rawaya' is the standard Hausa term for the color yellow."
          },
          {
            "id": "ha-u3-l1-q10",
            "type": "multiple_choice",
            "prompt": "What color is 'shudi' in Hausa?",
            "options": [
              "Blue",
              "Yellow",
              "Orange",
              "Pink"
            ],
            "correctAnswer": "Blue",
            "explanation": "'Shudi' represents blue, often associated with sky and traditional indigo dye."
          },
          {
            "id": "ha-u3-l1-q11",
            "type": "multiple_choice",
            "prompt": "Which day of the week is 'Ranar Litinin'?",
            "options": [
              "Monday",
              "Friday",
              "Sunday",
              "Wednesday"
            ],
            "correctAnswer": "Monday",
            "explanation": "'Litinin' corresponds to Monday (from the Arabic root al-Ithnayn)."
          },
          {
            "id": "ha-u3-l1-q12",
            "type": "matching",
            "prompt": "Match the Hausa days of the week:",
            "pairs": [
              {
                "native": "Litinin",
                "english": "Monday",
                "left": "Litinin",
                "right": "Monday"
              },
              {
                "native": "Talata",
                "english": "Tuesday",
                "left": "Talata",
                "right": "Tuesday"
              },
              {
                "native": "Laraba",
                "english": "Wednesday",
                "left": "Laraba",
                "right": "Wednesday"
              },
              {
                "native": "Alhamis",
                "english": "Thursday",
                "left": "Alhamis",
                "right": "Thursday"
              }
            ]
          },
          {
            "id": "ha-u3-l1-q13",
            "type": "fill_blank",
            "sentence": "The sacred Muslim congregational prayer day on Friday is called 'Ranar ___'.",
            "missingWord": "Juma'a",
            "options": [
              "Juma'a",
              "Asabar",
              "Lahadi",
              "Talata"
            ],
            "correctAnswer": "Juma'a",
            "explanation": "Friday is 'Ranar Juma'a', the day of the weekly Friday congregational prayer."
          },
          {
            "id": "ha-u3-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the weekend days: 'Saturday and Sunday' (Asabar da Lahadi):",
            "tokens": [
              "Asabar",
              "da",
              "Lahadi"
            ],
            "correctTokens": [
              "Asabar",
              "da",
              "Lahadi"
            ]
          },
          {
            "id": "ha-u3-l1-q15",
            "type": "audio_listen",
            "phrase": "Kwanaki bakwai a mako",
            "prompt": "Listen to the phrase. What does 'Kwanaki bakwai a mako' mean?",
            "options": [
              "Seven days in a week",
              "Five hours in a day",
              "Twelve months in a year",
              "Four seasons in time"
            ],
            "correctAnswer": "Seven days in a week",
            "explanation": "'Kwanaki' = days, 'bakwai' = seven, 'a mako' = in a week."
          },
          {
            "id": "ha-u3-l1-q16",
            "type": "multiple_choice",
            "prompt": "How do you say 'Forty' in Hausa?",
            "options": [
              "Arba'in",
              "Talatin",
              "Hamsin",
              "Ashirin"
            ],
            "correctAnswer": "Arba'in",
            "explanation": "40 is 'Arba'in'."
          },
          {
            "id": "ha-u3-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Yau wace rana ce?' ask?",
            "options": [
              "What day is today?",
              "What time is it?",
              "How much does it cost?",
              "Where is the road?"
            ],
            "correctAnswer": "What day is today?",
            "explanation": "'Yau wace rana ce?' translates directly to 'What day is today?' ('yau' = today)."
          },
          {
            "id": "ha-u3-l1-q18",
            "type": "fill_blank",
            "sentence": "To say 'Tomorrow is Wednesday', you say: 'Gobe Ranar ___ ce'.",
            "missingWord": "Laraba",
            "options": [
              "Laraba",
              "Litinin",
              "Alhamis",
              "Asabar"
            ],
            "correctAnswer": "Laraba",
            "explanation": "'Laraba' is Wednesday."
          },
          {
            "id": "ha-u3-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is 'Ɗari' in Hausa numbering?",
            "options": [
              "100 (One Hundred)",
              "1,000",
              "50",
              "10"
            ],
            "correctAnswer": "100 (One Hundred)",
            "explanation": "'Ɗari' = 100, while 'Dubu' = 1,000."
          },
          {
            "id": "ha-u3-l1-q20",
            "type": "matching",
            "prompt": "Match the complex numerals with their digits:",
            "pairs": [
              {
                "native": "Goma sha ɗaya",
                "english": "11 (Eleven)",
                "left": "Goma sha ɗaya",
                "right": "11 (Eleven)"
              },
              {
                "native": "Goma sha biyar",
                "english": "15 (Fifteen)",
                "left": "Goma sha biyar",
                "right": "15 (Fifteen)"
              },
              {
                "native": "Ashirin da tara",
                "english": "29 (Twenty-nine)",
                "left": "Ashirin da tara",
                "right": "29 (Twenty-nine)"
              },
              {
                "native": "Talatin da biyu",
                "english": "32 (Thirty-two)",
                "left": "Talatin da biyu",
                "right": "32 (Thirty-two)"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u3-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Hausa number for 'One' and 'Two'?",
        "options": [
          "Ɗaya da Biyu",
          "Uku da Huɗu",
          "Biyar da Shida",
          "Goma da Ashirin"
        ],
        "correctAnswer": "Ɗaya da Biyu",
        "explanation": "In Hausa: 1 = Ɗaya, 2 = Biyu."
      },
      {
        "id": "ha-u3-l1-q2",
        "type": "matching",
        "prompt": "Match the Hausa numerals from 1 to 5:",
        "pairs": [
          {
            "native": "Ɗaya",
            "english": "1 (One)",
            "left": "Ɗaya",
            "right": "1 (One)"
          },
          {
            "native": "Biyu",
            "english": "2 (Two)",
            "left": "Biyu",
            "right": "2 (Two)"
          },
          {
            "native": "Uku",
            "english": "3 (Three)",
            "left": "Uku",
            "right": "3 (Three)"
          },
          {
            "native": "Huɗu",
            "english": "4 (Four)",
            "left": "Huɗu",
            "right": "4 (Four)"
          }
        ]
      },
      {
        "id": "ha-u3-l1-q3",
        "type": "fill_blank",
        "sentence": "The number 5 in Hausa is '___', and 10 is 'goma'.",
        "missingWord": "biyar",
        "options": [
          "biyar",
          "shida",
          "bakwai",
          "tara"
        ],
        "correctAnswer": "biyar",
        "explanation": "1 to 5: ɗaya, biyu, uku, huɗu, biyar. 10 is goma."
      },
      {
        "id": "ha-u3-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the numbers in order from 6 to 8 (Shida, Bakwai, Takwas):",
        "tokens": [
          "Shida",
          "Bakwai",
          "Takwas"
        ],
        "correctTokens": [
          "Shida",
          "Bakwai",
          "Takwas"
        ]
      },
      {
        "id": "ha-u3-l1-q5",
        "type": "audio_listen",
        "phrase": "Ashirin da biyar",
        "prompt": "Listen to the number. What is 'Ashirin da biyar'?",
        "options": [
          "25",
          "20",
          "15",
          "50"
        ],
        "correctAnswer": "25",
        "explanation": "'Ashirin' = 20, 'da biyar' = and five, totaling 25."
      },
      {
        "id": "ha-u3-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the Hausa word for 'Twenty' and 'Thirty'?",
        "options": [
          "Ashirin da Talatin",
          "Goma da Biyar",
          "Hamsin da Saba'in",
          "Ɗari da Dubu"
        ],
        "correctAnswer": "Ashirin da Talatin",
        "explanation": "Tens: 10 = Goma, 20 = Ashirin, 30 = Talatin, 40 = Arba'in, 50 = Hamsin."
      },
      {
        "id": "ha-u3-l1-q7",
        "type": "multiple_choice",
        "prompt": "What is the Hausa number for 50?",
        "options": [
          "Hamsin",
          "Arba'in",
          "Talatin",
          "Ɗari"
        ],
        "correctAnswer": "Hamsin",
        "explanation": "50 is 'Hamsin', derived from the Afroasiatic/Arabic root for five."
      },
      {
        "id": "ha-u3-l1-q8",
        "type": "matching",
        "prompt": "Match the primary Hausa colors with their English equivalents:",
        "pairs": [
          {
            "native": "Ja",
            "english": "Red",
            "left": "Ja",
            "right": "Red"
          },
          {
            "native": "Fari",
            "english": "White",
            "left": "Fari",
            "right": "White"
          },
          {
            "native": "Baƙi",
            "english": "Black",
            "left": "Baƙi",
            "right": "Black"
          },
          {
            "native": "Kore",
            "english": "Green",
            "left": "Kore",
            "right": "Green"
          }
        ]
      },
      {
        "id": "ha-u3-l1-q9",
        "type": "fill_blank",
        "sentence": "The color yellow is called '___' in Hausa.",
        "missingWord": "rawaya",
        "options": [
          "rawaya",
          "ja",
          "kore",
          "shudi"
        ],
        "correctAnswer": "rawaya",
        "explanation": "'Rawaya' is the standard Hausa term for the color yellow."
      },
      {
        "id": "ha-u3-l1-q10",
        "type": "multiple_choice",
        "prompt": "What color is 'shudi' in Hausa?",
        "options": [
          "Blue",
          "Yellow",
          "Orange",
          "Pink"
        ],
        "correctAnswer": "Blue",
        "explanation": "'Shudi' represents blue, often associated with sky and traditional indigo dye."
      },
      {
        "id": "ha-u3-l1-q11",
        "type": "multiple_choice",
        "prompt": "Which day of the week is 'Ranar Litinin'?",
        "options": [
          "Monday",
          "Friday",
          "Sunday",
          "Wednesday"
        ],
        "correctAnswer": "Monday",
        "explanation": "'Litinin' corresponds to Monday (from the Arabic root al-Ithnayn)."
      },
      {
        "id": "ha-u3-l1-q12",
        "type": "matching",
        "prompt": "Match the Hausa days of the week:",
        "pairs": [
          {
            "native": "Litinin",
            "english": "Monday",
            "left": "Litinin",
            "right": "Monday"
          },
          {
            "native": "Talata",
            "english": "Tuesday",
            "left": "Talata",
            "right": "Tuesday"
          },
          {
            "native": "Laraba",
            "english": "Wednesday",
            "left": "Laraba",
            "right": "Wednesday"
          },
          {
            "native": "Alhamis",
            "english": "Thursday",
            "left": "Alhamis",
            "right": "Thursday"
          }
        ]
      },
      {
        "id": "ha-u3-l1-q13",
        "type": "fill_blank",
        "sentence": "The sacred Muslim congregational prayer day on Friday is called 'Ranar ___'.",
        "missingWord": "Juma'a",
        "options": [
          "Juma'a",
          "Asabar",
          "Lahadi",
          "Talata"
        ],
        "correctAnswer": "Juma'a",
        "explanation": "Friday is 'Ranar Juma'a', the day of the weekly Friday congregational prayer."
      },
      {
        "id": "ha-u3-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the weekend days: 'Saturday and Sunday' (Asabar da Lahadi):",
        "tokens": [
          "Asabar",
          "da",
          "Lahadi"
        ],
        "correctTokens": [
          "Asabar",
          "da",
          "Lahadi"
        ]
      },
      {
        "id": "ha-u3-l1-q15",
        "type": "audio_listen",
        "phrase": "Kwanaki bakwai a mako",
        "prompt": "Listen to the phrase. What does 'Kwanaki bakwai a mako' mean?",
        "options": [
          "Seven days in a week",
          "Five hours in a day",
          "Twelve months in a year",
          "Four seasons in time"
        ],
        "correctAnswer": "Seven days in a week",
        "explanation": "'Kwanaki' = days, 'bakwai' = seven, 'a mako' = in a week."
      },
      {
        "id": "ha-u3-l1-q16",
        "type": "multiple_choice",
        "prompt": "How do you say 'Forty' in Hausa?",
        "options": [
          "Arba'in",
          "Talatin",
          "Hamsin",
          "Ashirin"
        ],
        "correctAnswer": "Arba'in",
        "explanation": "40 is 'Arba'in'."
      },
      {
        "id": "ha-u3-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Yau wace rana ce?' ask?",
        "options": [
          "What day is today?",
          "What time is it?",
          "How much does it cost?",
          "Where is the road?"
        ],
        "correctAnswer": "What day is today?",
        "explanation": "'Yau wace rana ce?' translates directly to 'What day is today?' ('yau' = today)."
      },
      {
        "id": "ha-u3-l1-q18",
        "type": "fill_blank",
        "sentence": "To say 'Tomorrow is Wednesday', you say: 'Gobe Ranar ___ ce'.",
        "missingWord": "Laraba",
        "options": [
          "Laraba",
          "Litinin",
          "Alhamis",
          "Asabar"
        ],
        "correctAnswer": "Laraba",
        "explanation": "'Laraba' is Wednesday."
      },
      {
        "id": "ha-u3-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is 'Ɗari' in Hausa numbering?",
        "options": [
          "100 (One Hundred)",
          "1,000",
          "50",
          "10"
        ],
        "correctAnswer": "100 (One Hundred)",
        "explanation": "'Ɗari' = 100, while 'Dubu' = 1,000."
      },
      {
        "id": "ha-u3-l1-q20",
        "type": "matching",
        "prompt": "Match the complex numerals with their digits:",
        "pairs": [
          {
            "native": "Goma sha ɗaya",
            "english": "11 (Eleven)",
            "left": "Goma sha ɗaya",
            "right": "11 (Eleven)"
          },
          {
            "native": "Goma sha biyar",
            "english": "15 (Fifteen)",
            "left": "Goma sha biyar",
            "right": "15 (Fifteen)"
          },
          {
            "native": "Ashirin da tara",
            "english": "29 (Twenty-nine)",
            "left": "Ashirin da tara",
            "right": "29 (Twenty-nine)"
          },
          {
            "native": "Talatin da biyu",
            "english": "32 (Thirty-two)",
            "left": "Talatin da biyu",
            "right": "32 (Thirty-two)"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-4",
    "unitId": "ha-unit-4",
    "unitNumber": 4,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 4: Family and Home (Iyali da Gida)",
    "subtitle": "Kinship nomenclature, domestic living spaces, furniture, and household objects.",
    "icon": "Home",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ha-u4-l1",
        "title": "Lesson 1: Iyalin Hausa & Sashen Gida",
        "description": "Learn words for immediate family relations (Uba, Uwa, Dan) and domestic household spaces.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u4-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Hausa word for 'Father'?",
            "options": [
              "Uba / Baba",
              "Uwa / Mama",
              "Ɗan uwa",
              "Kaka"
            ],
            "correctAnswer": "Uba / Baba",
            "explanation": "'Uba' is the formal term for father, commonly addressed colloquially as 'Baba'."
          },
          {
            "id": "ha-u4-l1-q2",
            "type": "matching",
            "prompt": "Match the immediate nuclear family members:",
            "pairs": [
              {
                "native": "Uba",
                "english": "Father",
                "left": "Uba",
                "right": "Father"
              },
              {
                "native": "Uwa",
                "english": "Mother",
                "left": "Uwa",
                "right": "Mother"
              },
              {
                "native": "Ɗa",
                "english": "Son",
                "left": "Ɗa",
                "right": "Son"
              },
              {
                "native": "Ɗiya / ʼYa",
                "english": "Daughter",
                "left": "Ɗiya / ʼYa",
                "right": "Daughter"
              }
            ]
          },
          {
            "id": "ha-u4-l1-q3",
            "type": "fill_blank",
            "sentence": "Grandmother or grandfather in Hausa is called '___'.",
            "missingWord": "kaka",
            "options": [
              "kaka",
              "aboki",
              "baba",
              "yayya"
            ],
            "correctAnswer": "kaka",
            "explanation": "'Kaka' is the reciprocal term for grandparent."
          },
          {
            "id": "ha-u4-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'This is my home' (Wannan gida na ne):",
            "tokens": [
              "Wannan",
              "gida",
              "na",
              "ne"
            ],
            "correctTokens": [
              "Wannan",
              "gida",
              "na",
              "ne"
            ]
          },
          {
            "id": "ha-u4-l1-q5",
            "type": "audio_listen",
            "phrase": "Babban yaya da ƙani",
            "prompt": "Listen to the phrase. What does it describe?",
            "options": [
              "Elder brother and younger brother",
              "Father and mother",
              "Uncle and aunt",
              "Teacher and student"
            ],
            "correctAnswer": "Elder brother and younger brother",
            "explanation": "'Yaya' = older sibling, 'ƙani' = younger brother."
          },
          {
            "id": "ha-u4-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the Hausa word for 'Younger sister'?",
            "options": [
              "Ƙanwa",
              "Yaya",
              "Anti",
              "Mace"
            ],
            "correctAnswer": "Ƙanwa",
            "explanation": "'Ƙanwa' is younger sister, while 'ƙani' is younger brother."
          },
          {
            "id": "ha-u4-l1-q7",
            "type": "multiple_choice",
            "prompt": "What is the kitchen called in a traditional Hausa household?",
            "options": [
              "Ɗakin girki",
              "Ɗakin kwana",
              "Zaure",
              "Tsakar gida"
            ],
            "correctAnswer": "Ɗakin girki",
            "explanation": "'Ɗakin girki' literally means 'room of cooking' (kitchen)."
          },
          {
            "id": "ha-u4-l1-q8",
            "type": "matching",
            "prompt": "Match the rooms and spaces of a Hausa house:",
            "pairs": [
              {
                "native": "Ɗakin kwana",
                "english": "Bedroom",
                "left": "Ɗakin kwana",
                "right": "Bedroom"
              },
              {
                "native": "Tsakar gida",
                "english": "Courtyard / Compound center",
                "left": "Tsakar gida",
                "right": "Courtyard / Compound center"
              },
              {
                "native": "Zaure",
                "english": "Entrance vestibule / Reception hut",
                "left": "Zaure",
                "right": "Entrance vestibule / Reception hut"
              },
              {
                "native": "Bayan gida",
                "english": "Restroom / Latrine",
                "left": "Bayan gida",
                "right": "Restroom / Latrine"
              }
            ]
          },
          {
            "id": "ha-u4-l1-q9",
            "type": "fill_blank",
            "sentence": "The entrance room where visitors are formally received is called the '___'.",
            "missingWord": "zaure",
            "options": [
              "zaure",
              "dakin kwana",
              "kicin",
              "bayan gida"
            ],
            "correctAnswer": "zaure",
            "explanation": "The 'zaure' is the cultural entrance porch where guests are greeted to preserve household privacy."
          },
          {
            "id": "ha-u4-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is a 'kujera'?",
            "options": [
              "Chair",
              "Table",
              "Bed",
              "Door"
            ],
            "correctAnswer": "Chair",
            "explanation": "'Kujera' means chair, borrowed from Arabic 'kursi'."
          },
          {
            "id": "ha-u4-l1-q11",
            "type": "multiple_choice",
            "prompt": "What does 'gado' mean in a bedroom context?",
            "options": [
              "Bed",
              "Pillow",
              "Mirror",
              "Curtain"
            ],
            "correctAnswer": "Bed",
            "explanation": "'Gado' translates to bed."
          },
          {
            "id": "ha-u4-l1-q12",
            "type": "matching",
            "prompt": "Match household furniture and items:",
            "pairs": [
              {
                "native": "Tebur",
                "english": "Table",
                "left": "Tebur",
                "right": "Table"
              },
              {
                "native": "Kujera",
                "english": "Chair",
                "left": "Kujera",
                "right": "Chair"
              },
              {
                "native": "Gado",
                "english": "Bed",
                "left": "Gado",
                "right": "Bed"
              },
              {
                "native": "Tabarma",
                "english": "Woven mat",
                "left": "Tabarma",
                "right": "Woven mat"
              }
            ]
          },
          {
            "id": "ha-u4-l1-q13",
            "type": "fill_blank",
            "sentence": "A traditional grass or plastic woven mat used for sitting and prayer is called '___'.",
            "missingWord": "tabarma",
            "options": [
              "tabarma",
              "tebur",
              "kujera",
              "tagar"
            ],
            "correctAnswer": "tabarma",
            "explanation": "'Tabarma' is the ubiquitous mat found in Northern homes for sitting and hospitality."
          },
          {
            "id": "ha-u4-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the tokens to form: 'Mahaifina yana gida' (My father is at home):",
            "tokens": [
              "Mahaifina",
              "yana",
              "gida"
            ],
            "correctTokens": [
              "Mahaifina",
              "yana",
              "gida"
            ]
          },
          {
            "id": "ha-u4-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is the Hausa term for maternal uncle?",
            "options": [
              "Kawu",
              "Baffa",
              "Gwaggo",
              "Inna"
            ],
            "correctAnswer": "Kawu",
            "explanation": "'Kawu' is the maternal uncle, while 'Baffa' refers to the paternal uncle."
          },
          {
            "id": "ha-u4-l1-q16",
            "type": "audio_listen",
            "phrase": "Barka da zuwa gidanmu",
            "prompt": "Listen to the host's greeting. What does it mean?",
            "options": [
              "Welcome to our home!",
              "Goodbye to our village!",
              "Please sit down on the chair!",
              "Where is your house located?"
            ],
            "correctAnswer": "Welcome to our home!",
            "explanation": "'Gidanmu' means 'our house/home'."
          },
          {
            "id": "ha-u4-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Tagari / Taga' in a room?",
            "options": [
              "Window",
              "Roof",
              "Floor",
              "Key"
            ],
            "correctAnswer": "Window",
            "explanation": "'Taga' is the window."
          },
          {
            "id": "ha-u4-l1-q18",
            "type": "fill_blank",
            "sentence": "The door or entrance gate of a house is called '___'.",
            "missingWord": "ƙofa",
            "options": [
              "ƙofa",
              "gado",
              "zaure",
              "tabarma"
            ],
            "correctAnswer": "ƙofa",
            "explanation": "'Ƙofa' means door or portal."
          },
          {
            "id": "ha-u4-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is 'makwabci'?",
            "options": [
              "Neighbor",
              "Stranger",
              "Soldier",
              "Tailor"
            ],
            "correctAnswer": "Neighbor",
            "explanation": "'Makwabci' is the neighbor; good neighborliness ('makwabtaka') is deeply valued in Hausa culture."
          },
          {
            "id": "ha-u4-l1-q20",
            "type": "matching",
            "prompt": "Match extended kinship terms:",
            "pairs": [
              {
                "native": "Miji",
                "english": "Husband",
                "left": "Miji",
                "right": "Husband"
              },
              {
                "native": "Mata",
                "english": "Wife / Woman",
                "left": "Mata",
                "right": "Wife / Woman"
              },
              {
                "native": "Baffa",
                "english": "Paternal uncle",
                "left": "Baffa",
                "right": "Paternal uncle"
              },
              {
                "native": "Gwaggo",
                "english": "Paternal aunt",
                "left": "Gwaggo",
                "right": "Paternal aunt"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u4-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Hausa word for 'Father'?",
        "options": [
          "Uba / Baba",
          "Uwa / Mama",
          "Ɗan uwa",
          "Kaka"
        ],
        "correctAnswer": "Uba / Baba",
        "explanation": "'Uba' is the formal term for father, commonly addressed colloquially as 'Baba'."
      },
      {
        "id": "ha-u4-l1-q2",
        "type": "matching",
        "prompt": "Match the immediate nuclear family members:",
        "pairs": [
          {
            "native": "Uba",
            "english": "Father",
            "left": "Uba",
            "right": "Father"
          },
          {
            "native": "Uwa",
            "english": "Mother",
            "left": "Uwa",
            "right": "Mother"
          },
          {
            "native": "Ɗa",
            "english": "Son",
            "left": "Ɗa",
            "right": "Son"
          },
          {
            "native": "Ɗiya / ʼYa",
            "english": "Daughter",
            "left": "Ɗiya / ʼYa",
            "right": "Daughter"
          }
        ]
      },
      {
        "id": "ha-u4-l1-q3",
        "type": "fill_blank",
        "sentence": "Grandmother or grandfather in Hausa is called '___'.",
        "missingWord": "kaka",
        "options": [
          "kaka",
          "aboki",
          "baba",
          "yayya"
        ],
        "correctAnswer": "kaka",
        "explanation": "'Kaka' is the reciprocal term for grandparent."
      },
      {
        "id": "ha-u4-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'This is my home' (Wannan gida na ne):",
        "tokens": [
          "Wannan",
          "gida",
          "na",
          "ne"
        ],
        "correctTokens": [
          "Wannan",
          "gida",
          "na",
          "ne"
        ]
      },
      {
        "id": "ha-u4-l1-q5",
        "type": "audio_listen",
        "phrase": "Babban yaya da ƙani",
        "prompt": "Listen to the phrase. What does it describe?",
        "options": [
          "Elder brother and younger brother",
          "Father and mother",
          "Uncle and aunt",
          "Teacher and student"
        ],
        "correctAnswer": "Elder brother and younger brother",
        "explanation": "'Yaya' = older sibling, 'ƙani' = younger brother."
      },
      {
        "id": "ha-u4-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the Hausa word for 'Younger sister'?",
        "options": [
          "Ƙanwa",
          "Yaya",
          "Anti",
          "Mace"
        ],
        "correctAnswer": "Ƙanwa",
        "explanation": "'Ƙanwa' is younger sister, while 'ƙani' is younger brother."
      },
      {
        "id": "ha-u4-l1-q7",
        "type": "multiple_choice",
        "prompt": "What is the kitchen called in a traditional Hausa household?",
        "options": [
          "Ɗakin girki",
          "Ɗakin kwana",
          "Zaure",
          "Tsakar gida"
        ],
        "correctAnswer": "Ɗakin girki",
        "explanation": "'Ɗakin girki' literally means 'room of cooking' (kitchen)."
      },
      {
        "id": "ha-u4-l1-q8",
        "type": "matching",
        "prompt": "Match the rooms and spaces of a Hausa house:",
        "pairs": [
          {
            "native": "Ɗakin kwana",
            "english": "Bedroom",
            "left": "Ɗakin kwana",
            "right": "Bedroom"
          },
          {
            "native": "Tsakar gida",
            "english": "Courtyard / Compound center",
            "left": "Tsakar gida",
            "right": "Courtyard / Compound center"
          },
          {
            "native": "Zaure",
            "english": "Entrance vestibule / Reception hut",
            "left": "Zaure",
            "right": "Entrance vestibule / Reception hut"
          },
          {
            "native": "Bayan gida",
            "english": "Restroom / Latrine",
            "left": "Bayan gida",
            "right": "Restroom / Latrine"
          }
        ]
      },
      {
        "id": "ha-u4-l1-q9",
        "type": "fill_blank",
        "sentence": "The entrance room where visitors are formally received is called the '___'.",
        "missingWord": "zaure",
        "options": [
          "zaure",
          "dakin kwana",
          "kicin",
          "bayan gida"
        ],
        "correctAnswer": "zaure",
        "explanation": "The 'zaure' is the cultural entrance porch where guests are greeted to preserve household privacy."
      },
      {
        "id": "ha-u4-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is a 'kujera'?",
        "options": [
          "Chair",
          "Table",
          "Bed",
          "Door"
        ],
        "correctAnswer": "Chair",
        "explanation": "'Kujera' means chair, borrowed from Arabic 'kursi'."
      },
      {
        "id": "ha-u4-l1-q11",
        "type": "multiple_choice",
        "prompt": "What does 'gado' mean in a bedroom context?",
        "options": [
          "Bed",
          "Pillow",
          "Mirror",
          "Curtain"
        ],
        "correctAnswer": "Bed",
        "explanation": "'Gado' translates to bed."
      },
      {
        "id": "ha-u4-l1-q12",
        "type": "matching",
        "prompt": "Match household furniture and items:",
        "pairs": [
          {
            "native": "Tebur",
            "english": "Table",
            "left": "Tebur",
            "right": "Table"
          },
          {
            "native": "Kujera",
            "english": "Chair",
            "left": "Kujera",
            "right": "Chair"
          },
          {
            "native": "Gado",
            "english": "Bed",
            "left": "Gado",
            "right": "Bed"
          },
          {
            "native": "Tabarma",
            "english": "Woven mat",
            "left": "Tabarma",
            "right": "Woven mat"
          }
        ]
      },
      {
        "id": "ha-u4-l1-q13",
        "type": "fill_blank",
        "sentence": "A traditional grass or plastic woven mat used for sitting and prayer is called '___'.",
        "missingWord": "tabarma",
        "options": [
          "tabarma",
          "tebur",
          "kujera",
          "tagar"
        ],
        "correctAnswer": "tabarma",
        "explanation": "'Tabarma' is the ubiquitous mat found in Northern homes for sitting and hospitality."
      },
      {
        "id": "ha-u4-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the tokens to form: 'Mahaifina yana gida' (My father is at home):",
        "tokens": [
          "Mahaifina",
          "yana",
          "gida"
        ],
        "correctTokens": [
          "Mahaifina",
          "yana",
          "gida"
        ]
      },
      {
        "id": "ha-u4-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is the Hausa term for maternal uncle?",
        "options": [
          "Kawu",
          "Baffa",
          "Gwaggo",
          "Inna"
        ],
        "correctAnswer": "Kawu",
        "explanation": "'Kawu' is the maternal uncle, while 'Baffa' refers to the paternal uncle."
      },
      {
        "id": "ha-u4-l1-q16",
        "type": "audio_listen",
        "phrase": "Barka da zuwa gidanmu",
        "prompt": "Listen to the host's greeting. What does it mean?",
        "options": [
          "Welcome to our home!",
          "Goodbye to our village!",
          "Please sit down on the chair!",
          "Where is your house located?"
        ],
        "correctAnswer": "Welcome to our home!",
        "explanation": "'Gidanmu' means 'our house/home'."
      },
      {
        "id": "ha-u4-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Tagari / Taga' in a room?",
        "options": [
          "Window",
          "Roof",
          "Floor",
          "Key"
        ],
        "correctAnswer": "Window",
        "explanation": "'Taga' is the window."
      },
      {
        "id": "ha-u4-l1-q18",
        "type": "fill_blank",
        "sentence": "The door or entrance gate of a house is called '___'.",
        "missingWord": "ƙofa",
        "options": [
          "ƙofa",
          "gado",
          "zaure",
          "tabarma"
        ],
        "correctAnswer": "ƙofa",
        "explanation": "'Ƙofa' means door or portal."
      },
      {
        "id": "ha-u4-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is 'makwabci'?",
        "options": [
          "Neighbor",
          "Stranger",
          "Soldier",
          "Tailor"
        ],
        "correctAnswer": "Neighbor",
        "explanation": "'Makwabci' is the neighbor; good neighborliness ('makwabtaka') is deeply valued in Hausa culture."
      },
      {
        "id": "ha-u4-l1-q20",
        "type": "matching",
        "prompt": "Match extended kinship terms:",
        "pairs": [
          {
            "native": "Miji",
            "english": "Husband",
            "left": "Miji",
            "right": "Husband"
          },
          {
            "native": "Mata",
            "english": "Wife / Woman",
            "left": "Mata",
            "right": "Wife / Woman"
          },
          {
            "native": "Baffa",
            "english": "Paternal uncle",
            "left": "Baffa",
            "right": "Paternal uncle"
          },
          {
            "native": "Gwaggo",
            "english": "Paternal aunt",
            "left": "Gwaggo",
            "right": "Paternal aunt"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-5",
    "unitId": "ha-unit-5",
    "unitNumber": 5,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 5: Basic Action Verbs and Commands (Ayyuka)",
    "subtitle": "High-frequency verbs of motion, consumption, state, and imperative commands.",
    "icon": "Zap",
    "color": "#7c3aed",
    "lessons": [
      {
        "id": "ha-u5-l1",
        "title": "Lesson 1: Fi'ili & Umarni (Verbs & Imperatives)",
        "description": "Master foundational verbs (zo, tafi, ci, sha) and construct immediate action commands.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u5-l1-q1",
            "type": "multiple_choice",
            "prompt": "What does the action verb 'Zo' mean in Hausa?",
            "options": [
              "Come",
              "Go",
              "Eat",
              "Sleep"
            ],
            "correctAnswer": "Come",
            "explanation": "'Zo' is the imperative/verb meaning 'Come' (e.g., 'Zo nan' = Come here)."
          },
          {
            "id": "ha-u5-l1-q2",
            "type": "matching",
            "prompt": "Match the basic Hausa verbs of movement and action:",
            "pairs": [
              {
                "native": "Zo",
                "english": "Come",
                "left": "Zo",
                "right": "Come"
              },
              {
                "native": "Tafi",
                "english": "Go / Travel",
                "left": "Tafi",
                "right": "Go / Travel"
              },
              {
                "native": "Ci",
                "english": "Eat",
                "left": "Ci",
                "right": "Eat"
              },
              {
                "native": "Sha",
                "english": "Drink",
                "left": "Sha",
                "right": "Drink"
              }
            ]
          },
          {
            "id": "ha-u5-l1-q3",
            "type": "fill_blank",
            "sentence": "The command 'Zo ___' means 'Come here'.",
            "missingWord": "nan",
            "options": [
              "nan",
              "can",
              "bayan",
              "ciki"
            ],
            "correctAnswer": "nan",
            "explanation": "'Nan' = here, so 'Zo nan!' means 'Come here!'."
          },
          {
            "id": "ha-u5-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to command: 'Tafi gida yanzu' (Go home now):",
            "tokens": [
              "Tafi",
              "gida",
              "yanzu"
            ],
            "correctTokens": [
              "Tafi",
              "gida",
              "yanzu"
            ]
          },
          {
            "id": "ha-u5-l1-q5",
            "type": "audio_listen",
            "phrase": "Zauna a kan kujera",
            "prompt": "Listen to the instruction. What is the listener asked to do?",
            "options": [
              "Sit down on the chair",
              "Stand up quickly",
              "Wash your hands",
              "Close the window"
            ],
            "correctAnswer": "Sit down on the chair",
            "explanation": "'Zauna' = sit down; 'a kan kujera' = upon the chair."
          },
          {
            "id": "ha-u5-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does 'Tashi' mean when instructing someone?",
            "options": [
              "Stand up / Wake up",
              "Lie down",
              "Run fast",
              "Drink water"
            ],
            "correctAnswer": "Stand up / Wake up",
            "explanation": "'Tashi' means to stand up, rise, or wake up."
          },
          {
            "id": "ha-u5-l1-q7",
            "type": "multiple_choice",
            "prompt": "What is the verb for 'To read' in Hausa?",
            "options": [
              "Karanta",
              "Rubuta",
              "Gani",
              "Ji"
            ],
            "correctAnswer": "Karanta",
            "explanation": "'Karanta' means to read or study."
          },
          {
            "id": "ha-u5-l1-q8",
            "type": "matching",
            "prompt": "Match the literacy and sensory verbs:",
            "pairs": [
              {
                "native": "Rubuta",
                "english": "To write",
                "left": "Rubuta",
                "right": "To write"
              },
              {
                "native": "Karanta",
                "english": "To read",
                "left": "Karanta",
                "right": "To read"
              },
              {
                "native": "Gani",
                "english": "To see",
                "left": "Gani",
                "right": "To see"
              },
              {
                "native": "Ji",
                "english": "To hear / feel",
                "left": "Ji",
                "right": "To hear / feel"
              }
            ]
          },
          {
            "id": "ha-u5-l1-q9",
            "type": "fill_blank",
            "sentence": "To command someone to 'Listen carefully', one says: '___ da kyau'.",
            "missingWord": "Ji",
            "options": [
              "Ji",
              "Gani",
              "Ci",
              "Tafi"
            ],
            "correctAnswer": "Ji",
            "explanation": "'Ji' means hear/listen; 'da kyau' = well/carefully."
          },
          {
            "id": "ha-u5-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the verb for 'To wash' in 'Wanke hannu' (Wash your hands)?",
            "options": [
              "Wanke",
              "Share",
              "Goge",
              "Gyara"
            ],
            "correctAnswer": "Wanke",
            "explanation": "'Wanke' means to wash with water."
          },
          {
            "id": "ha-u5-l1-q11",
            "type": "multiple_choice",
            "prompt": "What does 'Bude kofa' mean?",
            "options": [
              "Open the door",
              "Close the door",
              "Paint the wall",
              "Lock the gate"
            ],
            "correctAnswer": "Open the door",
            "explanation": "'Bude' = open; 'kofa' = door."
          },
          {
            "id": "ha-u5-l1-q12",
            "type": "matching",
            "prompt": "Match opposite imperative commands:",
            "pairs": [
              {
                "native": "Bude",
                "english": "Open",
                "left": "Bude",
                "right": "Open"
              },
              {
                "native": "Rufe",
                "english": "Close / Shut",
                "left": "Rufe",
                "right": "Close / Shut"
              },
              {
                "native": "Zauna",
                "english": "Sit down",
                "left": "Zauna",
                "right": "Sit down"
              },
              {
                "native": "Tashi",
                "english": "Stand up",
                "left": "Tashi",
                "right": "Stand up"
              }
            ]
          },
          {
            "id": "ha-u5-l1-q13",
            "type": "fill_blank",
            "sentence": "To tell someone 'Do not go!', you use the negative imperative particle: '___ tafi!'.",
            "missingWord": "Kada ka",
            "options": [
              "Kada ka",
              "Babu",
              "Ba za ka",
              "Barka da"
            ],
            "correctAnswer": "Kada ka",
            "explanation": "'Kada ka' (to a male) or 'Kada ki' (to a female) forms the negative command 'Do not'."
          },
          {
            "id": "ha-u5-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ci abinci yanzu' (Eat food now):",
            "tokens": [
              "Ci",
              "abinci",
              "yanzu"
            ],
            "correctTokens": [
              "Ci",
              "abinci",
              "yanzu"
            ]
          },
          {
            "id": "ha-u5-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Kawo ruwa'?",
            "options": [
              "Bring water",
              "Drink water",
              "Pour water",
              "Buy water"
            ],
            "correctAnswer": "Bring water",
            "explanation": "'Kawo' means bring/fetch."
          },
          {
            "id": "ha-u5-l1-q16",
            "type": "audio_listen",
            "phrase": "Tsaya a nan",
            "prompt": "Listen to the command. What does 'Tsaya a nan' mean?",
            "options": [
              "Stop / Wait right here",
              "Run to the field",
              "Come inside quickly",
              "Sleep in peace"
            ],
            "correctAnswer": "Stop / Wait right here",
            "explanation": "'Tsaya' = stop/wait; 'a nan' = right here."
          },
          {
            "id": "ha-u5-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Gudu' mean?",
            "options": [
              "To run",
              "To jump",
              "To swim",
              "To crawl"
            ],
            "correctAnswer": "To run",
            "explanation": "'Gudu' means to run or flee."
          },
          {
            "id": "ha-u5-l1-q18",
            "type": "fill_blank",
            "sentence": "When asking someone to give you something, you say: '___ mini' (Give me).",
            "missingWord": "Ba",
            "options": [
              "Ba",
              "Zo",
              "Ji",
              "Sha"
            ],
            "correctAnswer": "Ba",
            "explanation": "'Ba' is the verb 'give'; 'Ba ni' or 'Ba mini' = give me."
          },
          {
            "id": "ha-u5-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Koyi' mean in an educational setting?",
            "options": [
              "To learn",
              "To teach",
              "To forget",
              "To examine"
            ],
            "correctAnswer": "To learn",
            "explanation": "'Koyi' means to learn, while 'koyar' means to teach."
          },
          {
            "id": "ha-u5-l1-q20",
            "type": "matching",
            "prompt": "Match transactional and cooperative verbs:",
            "pairs": [
              {
                "native": "Saya",
                "english": "To buy",
                "left": "Saya",
                "right": "To buy"
              },
              {
                "native": "Sayar",
                "english": "To sell",
                "left": "Sayar",
                "right": "To sell"
              },
              {
                "native": "Taimaka",
                "english": "To help / assist",
                "left": "Taimaka",
                "right": "To help / assist"
              },
              {
                "native": "Tambaya",
                "english": "To ask a question",
                "left": "Tambaya",
                "right": "To ask a question"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u5-l1-q1",
        "type": "multiple_choice",
        "prompt": "What does the action verb 'Zo' mean in Hausa?",
        "options": [
          "Come",
          "Go",
          "Eat",
          "Sleep"
        ],
        "correctAnswer": "Come",
        "explanation": "'Zo' is the imperative/verb meaning 'Come' (e.g., 'Zo nan' = Come here)."
      },
      {
        "id": "ha-u5-l1-q2",
        "type": "matching",
        "prompt": "Match the basic Hausa verbs of movement and action:",
        "pairs": [
          {
            "native": "Zo",
            "english": "Come",
            "left": "Zo",
            "right": "Come"
          },
          {
            "native": "Tafi",
            "english": "Go / Travel",
            "left": "Tafi",
            "right": "Go / Travel"
          },
          {
            "native": "Ci",
            "english": "Eat",
            "left": "Ci",
            "right": "Eat"
          },
          {
            "native": "Sha",
            "english": "Drink",
            "left": "Sha",
            "right": "Drink"
          }
        ]
      },
      {
        "id": "ha-u5-l1-q3",
        "type": "fill_blank",
        "sentence": "The command 'Zo ___' means 'Come here'.",
        "missingWord": "nan",
        "options": [
          "nan",
          "can",
          "bayan",
          "ciki"
        ],
        "correctAnswer": "nan",
        "explanation": "'Nan' = here, so 'Zo nan!' means 'Come here!'."
      },
      {
        "id": "ha-u5-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to command: 'Tafi gida yanzu' (Go home now):",
        "tokens": [
          "Tafi",
          "gida",
          "yanzu"
        ],
        "correctTokens": [
          "Tafi",
          "gida",
          "yanzu"
        ]
      },
      {
        "id": "ha-u5-l1-q5",
        "type": "audio_listen",
        "phrase": "Zauna a kan kujera",
        "prompt": "Listen to the instruction. What is the listener asked to do?",
        "options": [
          "Sit down on the chair",
          "Stand up quickly",
          "Wash your hands",
          "Close the window"
        ],
        "correctAnswer": "Sit down on the chair",
        "explanation": "'Zauna' = sit down; 'a kan kujera' = upon the chair."
      },
      {
        "id": "ha-u5-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does 'Tashi' mean when instructing someone?",
        "options": [
          "Stand up / Wake up",
          "Lie down",
          "Run fast",
          "Drink water"
        ],
        "correctAnswer": "Stand up / Wake up",
        "explanation": "'Tashi' means to stand up, rise, or wake up."
      },
      {
        "id": "ha-u5-l1-q7",
        "type": "multiple_choice",
        "prompt": "What is the verb for 'To read' in Hausa?",
        "options": [
          "Karanta",
          "Rubuta",
          "Gani",
          "Ji"
        ],
        "correctAnswer": "Karanta",
        "explanation": "'Karanta' means to read or study."
      },
      {
        "id": "ha-u5-l1-q8",
        "type": "matching",
        "prompt": "Match the literacy and sensory verbs:",
        "pairs": [
          {
            "native": "Rubuta",
            "english": "To write",
            "left": "Rubuta",
            "right": "To write"
          },
          {
            "native": "Karanta",
            "english": "To read",
            "left": "Karanta",
            "right": "To read"
          },
          {
            "native": "Gani",
            "english": "To see",
            "left": "Gani",
            "right": "To see"
          },
          {
            "native": "Ji",
            "english": "To hear / feel",
            "left": "Ji",
            "right": "To hear / feel"
          }
        ]
      },
      {
        "id": "ha-u5-l1-q9",
        "type": "fill_blank",
        "sentence": "To command someone to 'Listen carefully', one says: '___ da kyau'.",
        "missingWord": "Ji",
        "options": [
          "Ji",
          "Gani",
          "Ci",
          "Tafi"
        ],
        "correctAnswer": "Ji",
        "explanation": "'Ji' means hear/listen; 'da kyau' = well/carefully."
      },
      {
        "id": "ha-u5-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the verb for 'To wash' in 'Wanke hannu' (Wash your hands)?",
        "options": [
          "Wanke",
          "Share",
          "Goge",
          "Gyara"
        ],
        "correctAnswer": "Wanke",
        "explanation": "'Wanke' means to wash with water."
      },
      {
        "id": "ha-u5-l1-q11",
        "type": "multiple_choice",
        "prompt": "What does 'Bude kofa' mean?",
        "options": [
          "Open the door",
          "Close the door",
          "Paint the wall",
          "Lock the gate"
        ],
        "correctAnswer": "Open the door",
        "explanation": "'Bude' = open; 'kofa' = door."
      },
      {
        "id": "ha-u5-l1-q12",
        "type": "matching",
        "prompt": "Match opposite imperative commands:",
        "pairs": [
          {
            "native": "Bude",
            "english": "Open",
            "left": "Bude",
            "right": "Open"
          },
          {
            "native": "Rufe",
            "english": "Close / Shut",
            "left": "Rufe",
            "right": "Close / Shut"
          },
          {
            "native": "Zauna",
            "english": "Sit down",
            "left": "Zauna",
            "right": "Sit down"
          },
          {
            "native": "Tashi",
            "english": "Stand up",
            "left": "Tashi",
            "right": "Stand up"
          }
        ]
      },
      {
        "id": "ha-u5-l1-q13",
        "type": "fill_blank",
        "sentence": "To tell someone 'Do not go!', you use the negative imperative particle: '___ tafi!'.",
        "missingWord": "Kada ka",
        "options": [
          "Kada ka",
          "Babu",
          "Ba za ka",
          "Barka da"
        ],
        "correctAnswer": "Kada ka",
        "explanation": "'Kada ka' (to a male) or 'Kada ki' (to a female) forms the negative command 'Do not'."
      },
      {
        "id": "ha-u5-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ci abinci yanzu' (Eat food now):",
        "tokens": [
          "Ci",
          "abinci",
          "yanzu"
        ],
        "correctTokens": [
          "Ci",
          "abinci",
          "yanzu"
        ]
      },
      {
        "id": "ha-u5-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Kawo ruwa'?",
        "options": [
          "Bring water",
          "Drink water",
          "Pour water",
          "Buy water"
        ],
        "correctAnswer": "Bring water",
        "explanation": "'Kawo' means bring/fetch."
      },
      {
        "id": "ha-u5-l1-q16",
        "type": "audio_listen",
        "phrase": "Tsaya a nan",
        "prompt": "Listen to the command. What does 'Tsaya a nan' mean?",
        "options": [
          "Stop / Wait right here",
          "Run to the field",
          "Come inside quickly",
          "Sleep in peace"
        ],
        "correctAnswer": "Stop / Wait right here",
        "explanation": "'Tsaya' = stop/wait; 'a nan' = right here."
      },
      {
        "id": "ha-u5-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Gudu' mean?",
        "options": [
          "To run",
          "To jump",
          "To swim",
          "To crawl"
        ],
        "correctAnswer": "To run",
        "explanation": "'Gudu' means to run or flee."
      },
      {
        "id": "ha-u5-l1-q18",
        "type": "fill_blank",
        "sentence": "When asking someone to give you something, you say: '___ mini' (Give me).",
        "missingWord": "Ba",
        "options": [
          "Ba",
          "Zo",
          "Ji",
          "Sha"
        ],
        "correctAnswer": "Ba",
        "explanation": "'Ba' is the verb 'give'; 'Ba ni' or 'Ba mini' = give me."
      },
      {
        "id": "ha-u5-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Koyi' mean in an educational setting?",
        "options": [
          "To learn",
          "To teach",
          "To forget",
          "To examine"
        ],
        "correctAnswer": "To learn",
        "explanation": "'Koyi' means to learn, while 'koyar' means to teach."
      },
      {
        "id": "ha-u5-l1-q20",
        "type": "matching",
        "prompt": "Match transactional and cooperative verbs:",
        "pairs": [
          {
            "native": "Saya",
            "english": "To buy",
            "left": "Saya",
            "right": "To buy"
          },
          {
            "native": "Sayar",
            "english": "To sell",
            "left": "Sayar",
            "right": "To sell"
          },
          {
            "native": "Taimaka",
            "english": "To help / assist",
            "left": "Taimaka",
            "right": "To help / assist"
          },
          {
            "native": "Tambaya",
            "english": "To ask a question",
            "left": "Tambaya",
            "right": "To ask a question"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-6",
    "unitId": "ha-unit-6",
    "unitNumber": 6,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 6: Pronouns and Possessives (Wakilan Suna)",
    "subtitle": "Subject pronouns, independent vs. pronominal affixes, and expressing possession with nawa/naka/nata.",
    "icon": "Layers",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ha-u6-l1",
        "title": "Lesson 1: Wakilan Suna da Mallaka (Pronouns & Ownership)",
        "description": "Master Hausa independent pronouns, person-aspect prefixes, and possessive suffixes (-na, -ka, -ki, -sa, -ta).",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u6-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Hausa independent first-person singular pronoun ('I / me')?",
            "options": [
              "Ni",
              "Kai",
              "Shi",
              "Mu"
            ],
            "correctAnswer": "Ni",
            "explanation": "'Ni' is the independent pronoun for 'I/me'. 'Kai' is 'you (male)', 'Shi' is 'he', and 'Mu' is 'we'."
          },
          {
            "id": "ha-u6-l1-q2",
            "type": "matching",
            "prompt": "Match independent Hausa pronouns with their English equivalents:",
            "pairs": [
              {
                "native": "Kai",
                "english": "You (singular masculine)",
                "left": "Kai",
                "right": "You (singular masculine)"
              },
              {
                "native": "Ke",
                "english": "You (singular feminine)",
                "left": "Ke",
                "right": "You (singular feminine)"
              },
              {
                "native": "Shi",
                "english": "He / him",
                "left": "Shi",
                "right": "He / him"
              },
              {
                "native": "Ita",
                "english": "She / her",
                "left": "Ita",
                "right": "She / her"
              }
            ]
          },
          {
            "id": "ha-u6-l1-q3",
            "type": "fill_blank",
            "sentence": "To say 'This book is mine', you say: 'Wannan littafi ___ ne'.",
            "missingWord": "nawa",
            "options": [
              "nawa",
              "naka",
              "nata",
              "nasu"
            ],
            "correctAnswer": "nawa",
            "explanation": "'Nawa' means 'mine' for a masculine noun (littafi). 'Tawa' would be used for a feminine noun."
          },
          {
            "id": "ha-u6-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Mu ne dalibai' (We are students):",
            "tokens": [
              "Mu",
              "ne",
              "dalibai"
            ],
            "correctTokens": [
              "Mu",
              "ne",
              "dalibai"
            ]
          },
          {
            "id": "ha-u6-l1-q5",
            "type": "audio_listen",
            "phrase": "Wannan motar tawa ce",
            "prompt": "Listen to the phrase. What does 'Wannan motar tawa ce' mean?",
            "options": [
              "This car is mine",
              "This car is broken",
              "That car belongs to him",
              "Who owns this car?"
            ],
            "correctAnswer": "This car is mine",
            "explanation": "'Mota' is feminine, so the feminine possessive 'tawa' and stabilizer 'ce' are used: 'Wannan motar tawa ce'."
          },
          {
            "id": "ha-u6-l1-q6",
            "type": "multiple_choice",
            "prompt": "How do you say 'your house' speaking to a male?",
            "options": [
              "Gidanka",
              "Gidanki",
              "Gidansa",
              "Gidanmu"
            ],
            "correctAnswer": "Gidanka",
            "explanation": "The masculine possessive suffix attached to a masculine noun is '-nka': 'Gidanka'."
          },
          {
            "id": "ha-u6-l1-q7",
            "type": "matching",
            "prompt": "Match the attached possessive forms (masculine noun root 'Gida'):",
            "pairs": [
              {
                "native": "Gidanki",
                "english": "Your house (to a female)",
                "left": "Gidanki",
                "right": "Your house (to a female)"
              },
              {
                "native": "Gidansa",
                "english": "His house",
                "left": "Gidansa",
                "right": "His house"
              },
              {
                "native": "Gidanta",
                "english": "Her house",
                "left": "Gidanta",
                "right": "Her house"
              },
              {
                "native": "Gidanmu",
                "english": "Our house",
                "left": "Gidanmu",
                "right": "Our house"
              }
            ]
          },
          {
            "id": "ha-u6-l1-q8",
            "type": "fill_blank",
            "sentence": "The independent pronoun for 'They / them' in Hausa is '___'.",
            "missingWord": "Su",
            "options": [
              "Su",
              "Ku",
              "Mu",
              "Shi"
            ],
            "correctAnswer": "Su",
            "explanation": "'Su' means 'they' or 'them', while 'Ku' is plural 'you all'."
          },
          {
            "id": "ha-u6-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Kudi naku ne' (The money is yours [plural]):",
            "tokens": [
              "Kudi",
              "naku",
              "ne"
            ],
            "correctTokens": [
              "Kudi",
              "naku",
              "ne"
            ]
          },
          {
            "id": "ha-u6-l1-q10",
            "type": "multiple_choice",
            "prompt": "Which pair shows the difference between masculine 'ne' and feminine 'ce' stabilization?",
            "options": [
              "Littafi ne / Hula ce",
              "Littafi ce / Hula ne",
              "Kudi ce / Ruwa ce",
              "Nama ce / Kifi ce"
            ],
            "correctAnswer": "Littafi ne / Hula ce",
            "explanation": "In Hausa, 'ne' stabilizes masculine nouns (littafi ne), and 'ce' stabilizes feminine nouns (hula ce)."
          },
          {
            "id": "ha-u6-l1-q11",
            "type": "audio_listen",
            "phrase": "Wa ya kira ni?",
            "prompt": "Listen to the question. What does 'Wa ya kira ni?' ask?",
            "options": [
              "Who called me?",
              "Where did you go?",
              "Who is coming?",
              "Why did you call them?"
            ],
            "correctAnswer": "Who called me?",
            "explanation": "'Wa' = who; 'ya kira' = he called; 'ni' = me: 'Who called me?'."
          },
          {
            "id": "ha-u6-l1-q12",
            "type": "matching",
            "prompt": "Match plural subject pronouns with English meanings:",
            "pairs": [
              {
                "native": "Mu",
                "english": "We / us",
                "left": "Mu",
                "right": "We / us"
              },
              {
                "native": "Ku",
                "english": "You all (plural)",
                "left": "Ku",
                "right": "You all (plural)"
              },
              {
                "native": "Su",
                "english": "They / them",
                "left": "Su",
                "right": "They / them"
              },
              {
                "native": "Ku duka",
                "english": "All of you",
                "left": "Ku duka",
                "right": "All of you"
              }
            ]
          },
          {
            "id": "ha-u6-l1-q13",
            "type": "fill_blank",
            "sentence": "When asking 'Whose pencil is this?', you say: 'Alkalami na ___ ne wannan?'.",
            "missingWord": "wa",
            "options": [
              "wa",
              "ina",
              "yaushe",
              "me"
            ],
            "correctAnswer": "wa",
            "explanation": "'Na wa' means 'whose' (literally: of whom); 'wa' means who."
          },
          {
            "id": "ha-u6-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ita ce kawata' (She is my friend [female]):",
            "tokens": [
              "Ita",
              "ce",
              "kawata"
            ],
            "correctTokens": [
              "Ita",
              "ce",
              "kawata"
            ]
          },
          {
            "id": "ha-u6-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is the meaning of 'Namu ne'?",
            "options": [
              "It is ours",
              "It is yours",
              "It is theirs",
              "It is his"
            ],
            "correctAnswer": "It is ours",
            "explanation": "'Namu' = ours; 'Namu ne' = It is ours."
          },
          {
            "id": "ha-u6-l1-q16",
            "type": "audio_listen",
            "phrase": "Wannan babban gidan nasu ne",
            "prompt": "Listen to the phrase. What does 'Wannan babban gidan nasu ne' mean?",
            "options": [
              "This big house is theirs",
              "This big house is mine",
              "Our house is very big",
              "Their house is far away"
            ],
            "correctAnswer": "This big house is theirs",
            "explanation": "'Gidan nasu' = their house; 'Wannan babban gidan nasu ne' = This big house is theirs."
          },
          {
            "id": "ha-u6-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'My father' in Hausa using possessive suffixing?",
            "options": [
              "Ubana / Babana",
              "Ubanka",
              "Ubanta",
              "Ubansu"
            ],
            "correctAnswer": "Ubana / Babana",
            "explanation": "'-na' attached to Uba/Baba signifies first person singular: 'Ubana' or 'Babana' = my father."
          },
          {
            "id": "ha-u6-l1-q18",
            "type": "fill_blank",
            "sentence": "For feminine possession, 'tawa' means 'mine', while '___' means 'hers'.",
            "missingWord": "tata",
            "options": [
              "tata",
              "taka",
              "taki",
              "tasu"
            ],
            "correctAnswer": "tata",
            "explanation": "'Tata' is the feminine independent possessive pronoun for 'hers'."
          },
          {
            "id": "ha-u6-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Ku saurara' mean?",
            "options": [
              "You all listen!",
              "We are going",
              "They arrived",
              "He is singing"
            ],
            "correctAnswer": "You all listen!",
            "explanation": "'Ku' is 2nd person plural, and 'saurara' means listen: 'You all listen!'."
          },
          {
            "id": "ha-u6-l1-q20",
            "type": "matching",
            "prompt": "Match demonstrative pronouns with their meanings:",
            "pairs": [
              {
                "native": "Wannan",
                "english": "This / this one",
                "left": "Wannan",
                "right": "This / this one"
              },
              {
                "native": "Wancan",
                "english": "That (masculine over there)",
                "left": "Wancan",
                "right": "That (masculine over there)"
              },
              {
                "native": "Waccan",
                "english": "That (feminine over there)",
                "left": "Waccan",
                "right": "That (feminine over there)"
              },
              {
                "native": "Waɗannan",
                "english": "These ones",
                "left": "Waɗannan",
                "right": "These ones"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u6-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Hausa independent first-person singular pronoun ('I / me')?",
        "options": [
          "Ni",
          "Kai",
          "Shi",
          "Mu"
        ],
        "correctAnswer": "Ni",
        "explanation": "'Ni' is the independent pronoun for 'I/me'. 'Kai' is 'you (male)', 'Shi' is 'he', and 'Mu' is 'we'."
      },
      {
        "id": "ha-u6-l1-q2",
        "type": "matching",
        "prompt": "Match independent Hausa pronouns with their English equivalents:",
        "pairs": [
          {
            "native": "Kai",
            "english": "You (singular masculine)",
            "left": "Kai",
            "right": "You (singular masculine)"
          },
          {
            "native": "Ke",
            "english": "You (singular feminine)",
            "left": "Ke",
            "right": "You (singular feminine)"
          },
          {
            "native": "Shi",
            "english": "He / him",
            "left": "Shi",
            "right": "He / him"
          },
          {
            "native": "Ita",
            "english": "She / her",
            "left": "Ita",
            "right": "She / her"
          }
        ]
      },
      {
        "id": "ha-u6-l1-q3",
        "type": "fill_blank",
        "sentence": "To say 'This book is mine', you say: 'Wannan littafi ___ ne'.",
        "missingWord": "nawa",
        "options": [
          "nawa",
          "naka",
          "nata",
          "nasu"
        ],
        "correctAnswer": "nawa",
        "explanation": "'Nawa' means 'mine' for a masculine noun (littafi). 'Tawa' would be used for a feminine noun."
      },
      {
        "id": "ha-u6-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Mu ne dalibai' (We are students):",
        "tokens": [
          "Mu",
          "ne",
          "dalibai"
        ],
        "correctTokens": [
          "Mu",
          "ne",
          "dalibai"
        ]
      },
      {
        "id": "ha-u6-l1-q5",
        "type": "audio_listen",
        "phrase": "Wannan motar tawa ce",
        "prompt": "Listen to the phrase. What does 'Wannan motar tawa ce' mean?",
        "options": [
          "This car is mine",
          "This car is broken",
          "That car belongs to him",
          "Who owns this car?"
        ],
        "correctAnswer": "This car is mine",
        "explanation": "'Mota' is feminine, so the feminine possessive 'tawa' and stabilizer 'ce' are used: 'Wannan motar tawa ce'."
      },
      {
        "id": "ha-u6-l1-q6",
        "type": "multiple_choice",
        "prompt": "How do you say 'your house' speaking to a male?",
        "options": [
          "Gidanka",
          "Gidanki",
          "Gidansa",
          "Gidanmu"
        ],
        "correctAnswer": "Gidanka",
        "explanation": "The masculine possessive suffix attached to a masculine noun is '-nka': 'Gidanka'."
      },
      {
        "id": "ha-u6-l1-q7",
        "type": "matching",
        "prompt": "Match the attached possessive forms (masculine noun root 'Gida'):",
        "pairs": [
          {
            "native": "Gidanki",
            "english": "Your house (to a female)",
            "left": "Gidanki",
            "right": "Your house (to a female)"
          },
          {
            "native": "Gidansa",
            "english": "His house",
            "left": "Gidansa",
            "right": "His house"
          },
          {
            "native": "Gidanta",
            "english": "Her house",
            "left": "Gidanta",
            "right": "Her house"
          },
          {
            "native": "Gidanmu",
            "english": "Our house",
            "left": "Gidanmu",
            "right": "Our house"
          }
        ]
      },
      {
        "id": "ha-u6-l1-q8",
        "type": "fill_blank",
        "sentence": "The independent pronoun for 'They / them' in Hausa is '___'.",
        "missingWord": "Su",
        "options": [
          "Su",
          "Ku",
          "Mu",
          "Shi"
        ],
        "correctAnswer": "Su",
        "explanation": "'Su' means 'they' or 'them', while 'Ku' is plural 'you all'."
      },
      {
        "id": "ha-u6-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Kudi naku ne' (The money is yours [plural]):",
        "tokens": [
          "Kudi",
          "naku",
          "ne"
        ],
        "correctTokens": [
          "Kudi",
          "naku",
          "ne"
        ]
      },
      {
        "id": "ha-u6-l1-q10",
        "type": "multiple_choice",
        "prompt": "Which pair shows the difference between masculine 'ne' and feminine 'ce' stabilization?",
        "options": [
          "Littafi ne / Hula ce",
          "Littafi ce / Hula ne",
          "Kudi ce / Ruwa ce",
          "Nama ce / Kifi ce"
        ],
        "correctAnswer": "Littafi ne / Hula ce",
        "explanation": "In Hausa, 'ne' stabilizes masculine nouns (littafi ne), and 'ce' stabilizes feminine nouns (hula ce)."
      },
      {
        "id": "ha-u6-l1-q11",
        "type": "audio_listen",
        "phrase": "Wa ya kira ni?",
        "prompt": "Listen to the question. What does 'Wa ya kira ni?' ask?",
        "options": [
          "Who called me?",
          "Where did you go?",
          "Who is coming?",
          "Why did you call them?"
        ],
        "correctAnswer": "Who called me?",
        "explanation": "'Wa' = who; 'ya kira' = he called; 'ni' = me: 'Who called me?'."
      },
      {
        "id": "ha-u6-l1-q12",
        "type": "matching",
        "prompt": "Match plural subject pronouns with English meanings:",
        "pairs": [
          {
            "native": "Mu",
            "english": "We / us",
            "left": "Mu",
            "right": "We / us"
          },
          {
            "native": "Ku",
            "english": "You all (plural)",
            "left": "Ku",
            "right": "You all (plural)"
          },
          {
            "native": "Su",
            "english": "They / them",
            "left": "Su",
            "right": "They / them"
          },
          {
            "native": "Ku duka",
            "english": "All of you",
            "left": "Ku duka",
            "right": "All of you"
          }
        ]
      },
      {
        "id": "ha-u6-l1-q13",
        "type": "fill_blank",
        "sentence": "When asking 'Whose pencil is this?', you say: 'Alkalami na ___ ne wannan?'.",
        "missingWord": "wa",
        "options": [
          "wa",
          "ina",
          "yaushe",
          "me"
        ],
        "correctAnswer": "wa",
        "explanation": "'Na wa' means 'whose' (literally: of whom); 'wa' means who."
      },
      {
        "id": "ha-u6-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ita ce kawata' (She is my friend [female]):",
        "tokens": [
          "Ita",
          "ce",
          "kawata"
        ],
        "correctTokens": [
          "Ita",
          "ce",
          "kawata"
        ]
      },
      {
        "id": "ha-u6-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is the meaning of 'Namu ne'?",
        "options": [
          "It is ours",
          "It is yours",
          "It is theirs",
          "It is his"
        ],
        "correctAnswer": "It is ours",
        "explanation": "'Namu' = ours; 'Namu ne' = It is ours."
      },
      {
        "id": "ha-u6-l1-q16",
        "type": "audio_listen",
        "phrase": "Wannan babban gidan nasu ne",
        "prompt": "Listen to the phrase. What does 'Wannan babban gidan nasu ne' mean?",
        "options": [
          "This big house is theirs",
          "This big house is mine",
          "Our house is very big",
          "Their house is far away"
        ],
        "correctAnswer": "This big house is theirs",
        "explanation": "'Gidan nasu' = their house; 'Wannan babban gidan nasu ne' = This big house is theirs."
      },
      {
        "id": "ha-u6-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'My father' in Hausa using possessive suffixing?",
        "options": [
          "Ubana / Babana",
          "Ubanka",
          "Ubanta",
          "Ubansu"
        ],
        "correctAnswer": "Ubana / Babana",
        "explanation": "'-na' attached to Uba/Baba signifies first person singular: 'Ubana' or 'Babana' = my father."
      },
      {
        "id": "ha-u6-l1-q18",
        "type": "fill_blank",
        "sentence": "For feminine possession, 'tawa' means 'mine', while '___' means 'hers'.",
        "missingWord": "tata",
        "options": [
          "tata",
          "taka",
          "taki",
          "tasu"
        ],
        "correctAnswer": "tata",
        "explanation": "'Tata' is the feminine independent possessive pronoun for 'hers'."
      },
      {
        "id": "ha-u6-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Ku saurara' mean?",
        "options": [
          "You all listen!",
          "We are going",
          "They arrived",
          "He is singing"
        ],
        "correctAnswer": "You all listen!",
        "explanation": "'Ku' is 2nd person plural, and 'saurara' means listen: 'You all listen!'."
      },
      {
        "id": "ha-u6-l1-q20",
        "type": "matching",
        "prompt": "Match demonstrative pronouns with their meanings:",
        "pairs": [
          {
            "native": "Wannan",
            "english": "This / this one",
            "left": "Wannan",
            "right": "This / this one"
          },
          {
            "native": "Wancan",
            "english": "That (masculine over there)",
            "left": "Wancan",
            "right": "That (masculine over there)"
          },
          {
            "native": "Waccan",
            "english": "That (feminine over there)",
            "left": "Waccan",
            "right": "That (feminine over there)"
          },
          {
            "native": "Waɗannan",
            "english": "These ones",
            "left": "Waɗannan",
            "right": "These ones"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-7",
    "unitId": "ha-unit-7",
    "unitNumber": 7,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 7: Time, Seasons, and Weather (Lokaci da Yanayi)",
    "subtitle": "Dry season (Rani), rainy season (Damina), harmattan (Kaka/Bazara), telling time, and daily routines.",
    "icon": "Sun",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ha-u7-l1",
        "title": "Lesson 1: Lokaci, Yanayi da Yanayin Rana (Time & Meteorology)",
        "description": "Learn the agricultural seasons of Northern Nigeria, telling clock time, and describing meteorological conditions.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u7-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Hausa term for the rainy season?",
            "options": [
              "Damina",
              "Rani",
              "Kaka",
              "Bazara"
            ],
            "correctAnswer": "Damina",
            "explanation": "'Damina' is the rainy/wet farming season, whereas 'Rani' is the dry season."
          },
          {
            "id": "ha-u7-l1-q2",
            "type": "matching",
            "prompt": "Match the Northern Nigerian ecological seasons:",
            "pairs": [
              {
                "native": "Damina",
                "english": "Rainy season (planting & heavy rain)",
                "left": "Damina",
                "right": "Rainy season (planting & heavy rain)"
              },
              {
                "native": "Kaka",
                "english": "Harvest season (autumn bounty)",
                "left": "Kaka",
                "right": "Harvest season (autumn bounty)"
              },
              {
                "native": "Rani",
                "english": "Cool dry / harmattan season",
                "left": "Rani",
                "right": "Cool dry / harmattan season"
              },
              {
                "native": "Bazara",
                "english": "Hot transition season just before rain",
                "left": "Bazara",
                "right": "Hot transition season just before rain"
              }
            ]
          },
          {
            "id": "ha-u7-l1-q3",
            "type": "fill_blank",
            "sentence": "To say 'It is two o'clock', you say: 'Karfe ___ ne'.",
            "missingWord": "biyu",
            "options": [
              "biyu",
              "daya",
              "uku",
              "hudu"
            ],
            "correctAnswer": "biyu",
            "explanation": "'Karfe biyu' literally translates to 'clock two' (two o'clock)."
          },
          {
            "id": "ha-u7-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ana ruwa sosai yau' (It is raining heavily today):",
            "tokens": [
              "Ana",
              "ruwa",
              "sosai",
              "yau"
            ],
            "correctTokens": [
              "Ana",
              "ruwa",
              "sosai",
              "yau"
            ]
          },
          {
            "id": "ha-u7-l1-q5",
            "type": "audio_listen",
            "phrase": "Yau akwai zafi sosai",
            "prompt": "Listen to the weather report. What does 'Yau akwai zafi sosai' mean?",
            "options": [
              "Today is very hot",
              "Today is very cold",
              "Heavy rain is falling today",
              "The wind is blowing hard"
            ],
            "correctAnswer": "Today is very hot",
            "explanation": "'Zafi' means heat; 'Yau akwai zafi sosai' = Today is very hot."
          },
          {
            "id": "ha-u7-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the Hausa word for 'cold' (temperature/weather)?",
            "options": [
              "Sanyi",
              "Zafi",
              "Hazo",
              "Iskoki"
            ],
            "correctAnswer": "Sanyi",
            "explanation": "'Sanyi' means cold or chill, prominent during the harmattan season."
          },
          {
            "id": "ha-u7-l1-q7",
            "type": "matching",
            "prompt": "Match clock time phrases:",
            "pairs": [
              {
                "native": "Karfe uku da rabi",
                "english": "Half past three (3:30)",
                "left": "Karfe uku da rabi",
                "right": "Half past three (3:30)"
              },
              {
                "native": "Karfe hudu saura kwata",
                "english": "Quarter to four (3:45)",
                "left": "Karfe hudu saura kwata",
                "right": "Quarter to four (3:45)"
              },
              {
                "native": "Karfe biyar da kwata",
                "english": "Quarter past five (5:15)",
                "left": "Karfe biyar da kwata",
                "right": "Quarter past five (5:15)"
              },
              {
                "native": "Tsakar rana",
                "english": "Midday / Noon",
                "left": "Tsakar rana",
                "right": "Midday / Noon"
              }
            ]
          },
          {
            "id": "ha-u7-l1-q8",
            "type": "fill_blank",
            "sentence": "Dusty harmattan haze typical of the northern dry season is known as '___'.",
            "missingWord": "Hazo",
            "options": [
              "Hazo",
              "Ruwa",
              "Walkiya",
              "Tsawa"
            ],
            "correctAnswer": "Hazo",
            "explanation": "'Hazo' refers to fog, haze, or the harmattan dust shroud."
          },
          {
            "id": "ha-u7-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Karfe shida na safe' (Six o'clock in the morning):",
            "tokens": [
              "Karfe",
              "shida",
              "na",
              "safe"
            ],
            "correctTokens": [
              "Karfe",
              "shida",
              "na",
              "safe"
            ]
          },
          {
            "id": "ha-u7-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Tsawa' mean?",
            "options": [
              "Thunder",
              "Lightning",
              "Cloud",
              "Rainbow"
            ],
            "correctAnswer": "Thunder",
            "explanation": "'Tsawa' is thunder; 'walkiya' is lightning."
          },
          {
            "id": "ha-u7-l1-q11",
            "type": "audio_listen",
            "phrase": "Rana ta fito",
            "prompt": "Listen to the phrase. What does 'Rana ta fito' mean?",
            "options": [
              "The sun has risen / come out",
              "The rain has stopped",
              "Night has fallen",
              "The wind is whistling"
            ],
            "correctAnswer": "The sun has risen / come out",
            "explanation": "'Rana' = sun/day; 'fito' = emerge: 'The sun has risen / come out'."
          },
          {
            "id": "ha-u7-l1-q12",
            "type": "matching",
            "prompt": "Match parts of the 24-hour cycle:",
            "pairs": [
              {
                "native": "Safe",
                "english": "Morning",
                "left": "Safe",
                "right": "Morning"
              },
              {
                "native": "Rana",
                "english": "Daytime / Afternoon",
                "left": "Rana",
                "right": "Daytime / Afternoon"
              },
              {
                "native": "Yamma",
                "english": "Late afternoon / Evening",
                "left": "Yamma",
                "right": "Late afternoon / Evening"
              },
              {
                "native": "Dare",
                "english": "Night",
                "left": "Dare",
                "right": "Night"
              }
            ]
          },
          {
            "id": "ha-u7-l1-q13",
            "type": "fill_blank",
            "sentence": "When asking what time it is, you ask: 'Karfe ___ ne yanzu?'.",
            "missingWord": "nawa",
            "options": [
              "nawa",
              "wane",
              "ina",
              "yaushe"
            ],
            "correctAnswer": "nawa",
            "explanation": "'Karfe nawa ne yanzu?' translates to 'What time is it now?'."
          },
          {
            "id": "ha-u7-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Dare ya yi' (Night has fallen):",
            "tokens": [
              "Dare",
              "ya",
              "yi"
            ],
            "correctTokens": [
              "Dare",
              "ya",
              "yi"
            ]
          },
          {
            "id": "ha-u7-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Wata' in the context of time and astronomy?",
            "options": [
              "Month or Moon",
              "Year or Century",
              "Hour or Minute",
              "Star or Comet"
            ],
            "correctAnswer": "Month or Moon",
            "explanation": "'Wata' signifies both the moon and a calendar month."
          },
          {
            "id": "ha-u7-l1-q16",
            "type": "audio_listen",
            "phrase": "Iskanci da guguwa na kadawa",
            "prompt": "Listen to the phrase. What natural phenomenon does 'guguwa' describe?",
            "options": [
              "Whirlwind / Dust storm",
              "Gentle ocean breeze",
              "Snowfall",
              "Sunny skies"
            ],
            "correctAnswer": "Whirlwind / Dust storm",
            "explanation": "'Guguwa' means a whirlwind or dust storm in Hausa."
          },
          {
            "id": "ha-u7-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'Last year' in Hausa?",
            "options": [
              "Bara",
              "Bana",
              "Badi",
              "Gobe"
            ],
            "correctAnswer": "Bara",
            "explanation": "'Bara' = last year; 'Bana' = this year; 'Badi' = next year."
          },
          {
            "id": "ha-u7-l1-q18",
            "type": "fill_blank",
            "sentence": "To say 'this year', the Hausa expression is '___'.",
            "missingWord": "Bana",
            "options": [
              "Bana",
              "Bara",
              "Badi",
              "Jiya"
            ],
            "correctAnswer": "Bana",
            "explanation": "'Bana' is this year; 'Bara' was last year."
          },
          {
            "id": "ha-u7-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Hadari' signify when looking at the sky?",
            "options": [
              "Gathering storm clouds",
              "Bright clear sunshine",
              "Full moon night",
              "A shooting star"
            ],
            "correctAnswer": "Gathering storm clouds",
            "explanation": "'Hadari' refers to a gathering rainstorm or threatening storm clouds."
          },
          {
            "id": "ha-u7-l1-q20",
            "type": "matching",
            "prompt": "Match temporal adverbs:",
            "pairs": [
              {
                "native": "Kullum",
                "english": "Always / Every day",
                "left": "Kullum",
                "right": "Always / Every day"
              },
              {
                "native": "Wani lokaci",
                "english": "Sometimes",
                "left": "Wani lokaci",
                "right": "Sometimes"
              },
              {
                "native": "Nan da nan",
                "english": "Immediately / Right now",
                "left": "Nan da nan",
                "right": "Immediately / Right now"
              },
              {
                "native": "Har abada",
                "english": "Forever / Eternally",
                "left": "Har abada",
                "right": "Forever / Eternally"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u7-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Hausa term for the rainy season?",
        "options": [
          "Damina",
          "Rani",
          "Kaka",
          "Bazara"
        ],
        "correctAnswer": "Damina",
        "explanation": "'Damina' is the rainy/wet farming season, whereas 'Rani' is the dry season."
      },
      {
        "id": "ha-u7-l1-q2",
        "type": "matching",
        "prompt": "Match the Northern Nigerian ecological seasons:",
        "pairs": [
          {
            "native": "Damina",
            "english": "Rainy season (planting & heavy rain)",
            "left": "Damina",
            "right": "Rainy season (planting & heavy rain)"
          },
          {
            "native": "Kaka",
            "english": "Harvest season (autumn bounty)",
            "left": "Kaka",
            "right": "Harvest season (autumn bounty)"
          },
          {
            "native": "Rani",
            "english": "Cool dry / harmattan season",
            "left": "Rani",
            "right": "Cool dry / harmattan season"
          },
          {
            "native": "Bazara",
            "english": "Hot transition season just before rain",
            "left": "Bazara",
            "right": "Hot transition season just before rain"
          }
        ]
      },
      {
        "id": "ha-u7-l1-q3",
        "type": "fill_blank",
        "sentence": "To say 'It is two o'clock', you say: 'Karfe ___ ne'.",
        "missingWord": "biyu",
        "options": [
          "biyu",
          "daya",
          "uku",
          "hudu"
        ],
        "correctAnswer": "biyu",
        "explanation": "'Karfe biyu' literally translates to 'clock two' (two o'clock)."
      },
      {
        "id": "ha-u7-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ana ruwa sosai yau' (It is raining heavily today):",
        "tokens": [
          "Ana",
          "ruwa",
          "sosai",
          "yau"
        ],
        "correctTokens": [
          "Ana",
          "ruwa",
          "sosai",
          "yau"
        ]
      },
      {
        "id": "ha-u7-l1-q5",
        "type": "audio_listen",
        "phrase": "Yau akwai zafi sosai",
        "prompt": "Listen to the weather report. What does 'Yau akwai zafi sosai' mean?",
        "options": [
          "Today is very hot",
          "Today is very cold",
          "Heavy rain is falling today",
          "The wind is blowing hard"
        ],
        "correctAnswer": "Today is very hot",
        "explanation": "'Zafi' means heat; 'Yau akwai zafi sosai' = Today is very hot."
      },
      {
        "id": "ha-u7-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the Hausa word for 'cold' (temperature/weather)?",
        "options": [
          "Sanyi",
          "Zafi",
          "Hazo",
          "Iskoki"
        ],
        "correctAnswer": "Sanyi",
        "explanation": "'Sanyi' means cold or chill, prominent during the harmattan season."
      },
      {
        "id": "ha-u7-l1-q7",
        "type": "matching",
        "prompt": "Match clock time phrases:",
        "pairs": [
          {
            "native": "Karfe uku da rabi",
            "english": "Half past three (3:30)",
            "left": "Karfe uku da rabi",
            "right": "Half past three (3:30)"
          },
          {
            "native": "Karfe hudu saura kwata",
            "english": "Quarter to four (3:45)",
            "left": "Karfe hudu saura kwata",
            "right": "Quarter to four (3:45)"
          },
          {
            "native": "Karfe biyar da kwata",
            "english": "Quarter past five (5:15)",
            "left": "Karfe biyar da kwata",
            "right": "Quarter past five (5:15)"
          },
          {
            "native": "Tsakar rana",
            "english": "Midday / Noon",
            "left": "Tsakar rana",
            "right": "Midday / Noon"
          }
        ]
      },
      {
        "id": "ha-u7-l1-q8",
        "type": "fill_blank",
        "sentence": "Dusty harmattan haze typical of the northern dry season is known as '___'.",
        "missingWord": "Hazo",
        "options": [
          "Hazo",
          "Ruwa",
          "Walkiya",
          "Tsawa"
        ],
        "correctAnswer": "Hazo",
        "explanation": "'Hazo' refers to fog, haze, or the harmattan dust shroud."
      },
      {
        "id": "ha-u7-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Karfe shida na safe' (Six o'clock in the morning):",
        "tokens": [
          "Karfe",
          "shida",
          "na",
          "safe"
        ],
        "correctTokens": [
          "Karfe",
          "shida",
          "na",
          "safe"
        ]
      },
      {
        "id": "ha-u7-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Tsawa' mean?",
        "options": [
          "Thunder",
          "Lightning",
          "Cloud",
          "Rainbow"
        ],
        "correctAnswer": "Thunder",
        "explanation": "'Tsawa' is thunder; 'walkiya' is lightning."
      },
      {
        "id": "ha-u7-l1-q11",
        "type": "audio_listen",
        "phrase": "Rana ta fito",
        "prompt": "Listen to the phrase. What does 'Rana ta fito' mean?",
        "options": [
          "The sun has risen / come out",
          "The rain has stopped",
          "Night has fallen",
          "The wind is whistling"
        ],
        "correctAnswer": "The sun has risen / come out",
        "explanation": "'Rana' = sun/day; 'fito' = emerge: 'The sun has risen / come out'."
      },
      {
        "id": "ha-u7-l1-q12",
        "type": "matching",
        "prompt": "Match parts of the 24-hour cycle:",
        "pairs": [
          {
            "native": "Safe",
            "english": "Morning",
            "left": "Safe",
            "right": "Morning"
          },
          {
            "native": "Rana",
            "english": "Daytime / Afternoon",
            "left": "Rana",
            "right": "Daytime / Afternoon"
          },
          {
            "native": "Yamma",
            "english": "Late afternoon / Evening",
            "left": "Yamma",
            "right": "Late afternoon / Evening"
          },
          {
            "native": "Dare",
            "english": "Night",
            "left": "Dare",
            "right": "Night"
          }
        ]
      },
      {
        "id": "ha-u7-l1-q13",
        "type": "fill_blank",
        "sentence": "When asking what time it is, you ask: 'Karfe ___ ne yanzu?'.",
        "missingWord": "nawa",
        "options": [
          "nawa",
          "wane",
          "ina",
          "yaushe"
        ],
        "correctAnswer": "nawa",
        "explanation": "'Karfe nawa ne yanzu?' translates to 'What time is it now?'."
      },
      {
        "id": "ha-u7-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Dare ya yi' (Night has fallen):",
        "tokens": [
          "Dare",
          "ya",
          "yi"
        ],
        "correctTokens": [
          "Dare",
          "ya",
          "yi"
        ]
      },
      {
        "id": "ha-u7-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Wata' in the context of time and astronomy?",
        "options": [
          "Month or Moon",
          "Year or Century",
          "Hour or Minute",
          "Star or Comet"
        ],
        "correctAnswer": "Month or Moon",
        "explanation": "'Wata' signifies both the moon and a calendar month."
      },
      {
        "id": "ha-u7-l1-q16",
        "type": "audio_listen",
        "phrase": "Iskanci da guguwa na kadawa",
        "prompt": "Listen to the phrase. What natural phenomenon does 'guguwa' describe?",
        "options": [
          "Whirlwind / Dust storm",
          "Gentle ocean breeze",
          "Snowfall",
          "Sunny skies"
        ],
        "correctAnswer": "Whirlwind / Dust storm",
        "explanation": "'Guguwa' means a whirlwind or dust storm in Hausa."
      },
      {
        "id": "ha-u7-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'Last year' in Hausa?",
        "options": [
          "Bara",
          "Bana",
          "Badi",
          "Gobe"
        ],
        "correctAnswer": "Bara",
        "explanation": "'Bara' = last year; 'Bana' = this year; 'Badi' = next year."
      },
      {
        "id": "ha-u7-l1-q18",
        "type": "fill_blank",
        "sentence": "To say 'this year', the Hausa expression is '___'.",
        "missingWord": "Bana",
        "options": [
          "Bana",
          "Bara",
          "Badi",
          "Jiya"
        ],
        "correctAnswer": "Bana",
        "explanation": "'Bana' is this year; 'Bara' was last year."
      },
      {
        "id": "ha-u7-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Hadari' signify when looking at the sky?",
        "options": [
          "Gathering storm clouds",
          "Bright clear sunshine",
          "Full moon night",
          "A shooting star"
        ],
        "correctAnswer": "Gathering storm clouds",
        "explanation": "'Hadari' refers to a gathering rainstorm or threatening storm clouds."
      },
      {
        "id": "ha-u7-l1-q20",
        "type": "matching",
        "prompt": "Match temporal adverbs:",
        "pairs": [
          {
            "native": "Kullum",
            "english": "Always / Every day",
            "left": "Kullum",
            "right": "Always / Every day"
          },
          {
            "native": "Wani lokaci",
            "english": "Sometimes",
            "left": "Wani lokaci",
            "right": "Sometimes"
          },
          {
            "native": "Nan da nan",
            "english": "Immediately / Right now",
            "left": "Nan da nan",
            "right": "Immediately / Right now"
          },
          {
            "native": "Har abada",
            "english": "Forever / Eternally",
            "left": "Har abada",
            "right": "Forever / Eternally"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-8",
    "unitId": "ha-unit-8",
    "unitNumber": 8,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 8: Market and Shopping (A Kasuwa)",
    "subtitle": "Currency, food provisions, bargaining vocabulary, and authentic commerce dialogues.",
    "icon": "ShoppingBag",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ha-u8-l1",
        "title": "Lesson 1: Kasuwanci, Ciniki da Siyayya (Market & Bargaining)",
        "description": "Navigate open-air markets, negotiate prices politely, purchase staples, and handle Nigerian currency.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u8-l1-q1",
            "type": "multiple_choice",
            "prompt": "How do you ask 'How much is this?' in a Hausa market?",
            "options": [
              "Nawa ne kudin wannan?",
              "Ina kasuwa take?",
              "Me kake so?",
              "Wane ne wannan?"
            ],
            "correctAnswer": "Nawa ne kudin wannan?",
            "explanation": "'Nawa ne kudin wannan?' directly asks 'How much is the cost of this?'."
          },
          {
            "id": "ha-u8-l1-q2",
            "type": "matching",
            "prompt": "Match market food items with English translations:",
            "pairs": [
              {
                "native": "Shinkafa",
                "english": "Rice",
                "left": "Shinkafa",
                "right": "Rice"
              },
              {
                "native": "Doya",
                "english": "Yam",
                "left": "Doya",
                "right": "Yam"
              },
              {
                "native": "Wake",
                "english": "Beans",
                "left": "Wake",
                "right": "Beans"
              },
              {
                "native": "Tumatir",
                "english": "Tomatoes",
                "left": "Tumatir",
                "right": "Tomatoes"
              }
            ]
          },
          {
            "id": "ha-u8-l1-q3",
            "type": "fill_blank",
            "sentence": "When the price is too high and you want a discount, you say: 'Don Allah ___ min kudi'.",
            "missingWord": "rage",
            "options": [
              "rage",
              "kara",
              "ba",
              "karba"
            ],
            "correctAnswer": "rage",
            "explanation": "'Rage min kudi' means 'Reduce the price/money for me'."
          },
          {
            "id": "ha-u8-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Wannan ya yi tsada sosai' (This is too expensive):",
            "tokens": [
              "Wannan",
              "ya",
              "yi",
              "tsada",
              "sosai"
            ],
            "correctTokens": [
              "Wannan",
              "ya",
              "yi",
              "tsada",
              "sosai"
            ]
          },
          {
            "id": "ha-u8-l1-q5",
            "type": "audio_listen",
            "phrase": "Zan ba ka Naira dari biyar",
            "prompt": "Listen to the buyer. What offer is being made?",
            "options": [
              "I will give you 500 Naira",
              "I will buy five tubers",
              "Bring me 100 Naira change",
              "I want to sell for 200 Naira"
            ],
            "correctAnswer": "I will give you 500 Naira",
            "explanation": "'Naira dari biyar' = 500 Naira ('dari' = 100, 'biyar' = 5)."
          },
          {
            "id": "ha-u8-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does 'Ciniki' mean in Hausa culture?",
            "options": [
              "Bargaining / Trade transaction",
              "Free gift giving",
              "Stealing goods",
              "Farming harvest"
            ],
            "correctAnswer": "Bargaining / Trade transaction",
            "explanation": "'Ciniki' refers to trade, bargaining, or doing business."
          },
          {
            "id": "ha-u8-l1-q7",
            "type": "matching",
            "prompt": "Match cooking ingredients sold at kasuwa:",
            "pairs": [
              {
                "native": "Albasa",
                "english": "Onion",
                "left": "Albasa",
                "right": "Onion"
              },
              {
                "native": "Barkono",
                "english": "Pepper / chili",
                "left": "Barkono",
                "right": "Pepper / chili"
              },
              {
                "native": "Man ja",
                "english": "Palm oil",
                "left": "Man ja",
                "right": "Palm oil"
              },
              {
                "native": "Gishiri",
                "english": "Salt",
                "left": "Gishiri",
                "right": "Salt"
              }
            ]
          },
          {
            "id": "ha-u8-l1-q8",
            "type": "fill_blank",
            "sentence": "The general Hausa word for 'money' is '___'.",
            "missingWord": "Kudi",
            "options": [
              "Kudi",
              "Kayan",
              "Dukiya",
              "Kasuwa"
            ],
            "correctAnswer": "Kudi",
            "explanation": "'Kudi' is money or currency."
          },
          {
            "id": "ha-u8-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ina son in sayi nama' (I want to buy meat):",
            "tokens": [
              "Ina",
              "son",
              "in",
              "sayi",
              "nama"
            ],
            "correctTokens": [
              "Ina",
              "son",
              "in",
              "sayi",
              "nama"
            ]
          },
          {
            "id": "ha-u8-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Mai shago' mean?",
            "options": [
              "Shopkeeper / Store owner",
              "Customer / Buyer",
              "Night guard",
              "Market porter"
            ],
            "correctAnswer": "Shopkeeper / Store owner",
            "explanation": "'Mai shago' translates to the owner/operator of a shop (shago)."
          },
          {
            "id": "ha-u8-l1-q11",
            "type": "audio_listen",
            "phrase": "Ina canjin kudi na?",
            "prompt": "Listen to the customer. What are they requesting?",
            "options": [
              "Where is my change (balance)?",
              "Where is my shopping bag?",
              "Do you accept card payment?",
              "Where is the exit?"
            ],
            "correctAnswer": "Where is my change (balance)?",
            "explanation": "'Canji' means change/balance from a cash transaction."
          },
          {
            "id": "ha-u8-l1-q12",
            "type": "matching",
            "prompt": "Match market roles and locations:",
            "pairs": [
              {
                "native": "Kasuwa",
                "english": "Marketplace",
                "left": "Kasuwa",
                "right": "Marketplace"
              },
              {
                "native": "Mai sayarwa",
                "english": "Seller / Vendor",
                "left": "Mai sayarwa",
                "right": "Seller / Vendor"
              },
              {
                "native": "Mai siye",
                "english": "Buyer / Customer",
                "left": "Mai siye",
                "right": "Buyer / Customer"
              },
              {
                "native": "Dillali",
                "english": "Broker / Middleman",
                "left": "Dillali",
                "right": "Broker / Middleman"
              }
            ]
          },
          {
            "id": "ha-u8-l1-q13",
            "type": "fill_blank",
            "sentence": "If an item is cheap and affordable, you say: 'Wannan yana da ___' (It is cheap).",
            "missingWord": "sauki",
            "options": [
              "sauki",
              "tsada",
              "nauyi",
              "haske"
            ],
            "correctAnswer": "sauki",
            "explanation": "'Sauki' means easiness or cheapness/affordability."
          },
          {
            "id": "ha-u8-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Kasuwa tana cike da mutane' (The market is full of people):",
            "tokens": [
              "Kasuwa",
              "tana",
              "cike",
              "da",
              "mutane"
            ],
            "correctTokens": [
              "Kasuwa",
              "tana",
              "cike",
              "da",
              "mutane"
            ]
          },
          {
            "id": "ha-u8-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is a 'Mudu' in traditional markets across Northern Nigeria?",
            "options": [
              "A standardized grain bowl measuring unit",
              "A large transport truck",
              "A receipt booklet",
              "A type of leather purse"
            ],
            "correctAnswer": "A standardized grain bowl measuring unit",
            "explanation": "A 'mudu' is a widespread dry-measure bowl used to sell grains like rice, millet, and beans."
          },
          {
            "id": "ha-u8-l1-q16",
            "type": "audio_listen",
            "phrase": "Bani mudu biyu na shinkafa",
            "prompt": "Listen to the order. What is the customer buying?",
            "options": [
              "Two mudu measures of rice",
              "Two baskets of yams",
              "Two cups of red oil",
              "Two sacks of groundnuts"
            ],
            "correctAnswer": "Two mudu measures of rice",
            "explanation": "'Mudu biyu na shinkafa' = two mudu measures of rice."
          },
          {
            "id": "ha-u8-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Aljihu' mean?",
            "options": [
              "Pocket",
              "Wallet",
              "Basket",
              "Umbrella"
            ],
            "correctAnswer": "Pocket",
            "explanation": "'Aljihu' is pocket (where one puts money or small belongings)."
          },
          {
            "id": "ha-u8-l1-q18",
            "type": "fill_blank",
            "sentence": "When asking to weigh or measure something, you use the verb '___' (to measure/weigh).",
            "missingWord": "auna",
            "options": [
              "auna",
              "zuba",
              "yankewa",
              "dauka"
            ],
            "correctAnswer": "auna",
            "explanation": "'Auna' means to weigh or measure (volume/weight)."
          },
          {
            "id": "ha-u8-l1-q19",
            "type": "multiple_choice",
            "prompt": "If a merchant says 'Babu riba', what does he claim?",
            "options": [
              "There is no profit in this price",
              "There are no goods left",
              "No customers today",
              "I do not know you"
            ],
            "correctAnswer": "There is no profit in this price",
            "explanation": "'Riba' means profit; 'Babu riba' is a classic bargaining phrase meaning 'There is no profit left'."
          },
          {
            "id": "ha-u8-l1-q20",
            "type": "matching",
            "prompt": "Match monetary denominations and terms:",
            "pairs": [
              {
                "native": "Naira dubu daya",
                "english": "One thousand Naira (₦1,000)",
                "left": "Naira dubu daya",
                "right": "One thousand Naira (₦1,000)"
              },
              {
                "native": "Naira dari biyar",
                "english": "Five hundred Naira (₦500)",
                "left": "Naira dari biyar",
                "right": "Five hundred Naira (₦500)"
              },
              {
                "native": "Bashi",
                "english": "Credit / Debt",
                "left": "Bashi",
                "right": "Credit / Debt"
              },
              {
                "native": "Biya",
                "english": "To pay",
                "left": "Biya",
                "right": "To pay"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u8-l1-q1",
        "type": "multiple_choice",
        "prompt": "How do you ask 'How much is this?' in a Hausa market?",
        "options": [
          "Nawa ne kudin wannan?",
          "Ina kasuwa take?",
          "Me kake so?",
          "Wane ne wannan?"
        ],
        "correctAnswer": "Nawa ne kudin wannan?",
        "explanation": "'Nawa ne kudin wannan?' directly asks 'How much is the cost of this?'."
      },
      {
        "id": "ha-u8-l1-q2",
        "type": "matching",
        "prompt": "Match market food items with English translations:",
        "pairs": [
          {
            "native": "Shinkafa",
            "english": "Rice",
            "left": "Shinkafa",
            "right": "Rice"
          },
          {
            "native": "Doya",
            "english": "Yam",
            "left": "Doya",
            "right": "Yam"
          },
          {
            "native": "Wake",
            "english": "Beans",
            "left": "Wake",
            "right": "Beans"
          },
          {
            "native": "Tumatir",
            "english": "Tomatoes",
            "left": "Tumatir",
            "right": "Tomatoes"
          }
        ]
      },
      {
        "id": "ha-u8-l1-q3",
        "type": "fill_blank",
        "sentence": "When the price is too high and you want a discount, you say: 'Don Allah ___ min kudi'.",
        "missingWord": "rage",
        "options": [
          "rage",
          "kara",
          "ba",
          "karba"
        ],
        "correctAnswer": "rage",
        "explanation": "'Rage min kudi' means 'Reduce the price/money for me'."
      },
      {
        "id": "ha-u8-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Wannan ya yi tsada sosai' (This is too expensive):",
        "tokens": [
          "Wannan",
          "ya",
          "yi",
          "tsada",
          "sosai"
        ],
        "correctTokens": [
          "Wannan",
          "ya",
          "yi",
          "tsada",
          "sosai"
        ]
      },
      {
        "id": "ha-u8-l1-q5",
        "type": "audio_listen",
        "phrase": "Zan ba ka Naira dari biyar",
        "prompt": "Listen to the buyer. What offer is being made?",
        "options": [
          "I will give you 500 Naira",
          "I will buy five tubers",
          "Bring me 100 Naira change",
          "I want to sell for 200 Naira"
        ],
        "correctAnswer": "I will give you 500 Naira",
        "explanation": "'Naira dari biyar' = 500 Naira ('dari' = 100, 'biyar' = 5)."
      },
      {
        "id": "ha-u8-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does 'Ciniki' mean in Hausa culture?",
        "options": [
          "Bargaining / Trade transaction",
          "Free gift giving",
          "Stealing goods",
          "Farming harvest"
        ],
        "correctAnswer": "Bargaining / Trade transaction",
        "explanation": "'Ciniki' refers to trade, bargaining, or doing business."
      },
      {
        "id": "ha-u8-l1-q7",
        "type": "matching",
        "prompt": "Match cooking ingredients sold at kasuwa:",
        "pairs": [
          {
            "native": "Albasa",
            "english": "Onion",
            "left": "Albasa",
            "right": "Onion"
          },
          {
            "native": "Barkono",
            "english": "Pepper / chili",
            "left": "Barkono",
            "right": "Pepper / chili"
          },
          {
            "native": "Man ja",
            "english": "Palm oil",
            "left": "Man ja",
            "right": "Palm oil"
          },
          {
            "native": "Gishiri",
            "english": "Salt",
            "left": "Gishiri",
            "right": "Salt"
          }
        ]
      },
      {
        "id": "ha-u8-l1-q8",
        "type": "fill_blank",
        "sentence": "The general Hausa word for 'money' is '___'.",
        "missingWord": "Kudi",
        "options": [
          "Kudi",
          "Kayan",
          "Dukiya",
          "Kasuwa"
        ],
        "correctAnswer": "Kudi",
        "explanation": "'Kudi' is money or currency."
      },
      {
        "id": "ha-u8-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ina son in sayi nama' (I want to buy meat):",
        "tokens": [
          "Ina",
          "son",
          "in",
          "sayi",
          "nama"
        ],
        "correctTokens": [
          "Ina",
          "son",
          "in",
          "sayi",
          "nama"
        ]
      },
      {
        "id": "ha-u8-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Mai shago' mean?",
        "options": [
          "Shopkeeper / Store owner",
          "Customer / Buyer",
          "Night guard",
          "Market porter"
        ],
        "correctAnswer": "Shopkeeper / Store owner",
        "explanation": "'Mai shago' translates to the owner/operator of a shop (shago)."
      },
      {
        "id": "ha-u8-l1-q11",
        "type": "audio_listen",
        "phrase": "Ina canjin kudi na?",
        "prompt": "Listen to the customer. What are they requesting?",
        "options": [
          "Where is my change (balance)?",
          "Where is my shopping bag?",
          "Do you accept card payment?",
          "Where is the exit?"
        ],
        "correctAnswer": "Where is my change (balance)?",
        "explanation": "'Canji' means change/balance from a cash transaction."
      },
      {
        "id": "ha-u8-l1-q12",
        "type": "matching",
        "prompt": "Match market roles and locations:",
        "pairs": [
          {
            "native": "Kasuwa",
            "english": "Marketplace",
            "left": "Kasuwa",
            "right": "Marketplace"
          },
          {
            "native": "Mai sayarwa",
            "english": "Seller / Vendor",
            "left": "Mai sayarwa",
            "right": "Seller / Vendor"
          },
          {
            "native": "Mai siye",
            "english": "Buyer / Customer",
            "left": "Mai siye",
            "right": "Buyer / Customer"
          },
          {
            "native": "Dillali",
            "english": "Broker / Middleman",
            "left": "Dillali",
            "right": "Broker / Middleman"
          }
        ]
      },
      {
        "id": "ha-u8-l1-q13",
        "type": "fill_blank",
        "sentence": "If an item is cheap and affordable, you say: 'Wannan yana da ___' (It is cheap).",
        "missingWord": "sauki",
        "options": [
          "sauki",
          "tsada",
          "nauyi",
          "haske"
        ],
        "correctAnswer": "sauki",
        "explanation": "'Sauki' means easiness or cheapness/affordability."
      },
      {
        "id": "ha-u8-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Kasuwa tana cike da mutane' (The market is full of people):",
        "tokens": [
          "Kasuwa",
          "tana",
          "cike",
          "da",
          "mutane"
        ],
        "correctTokens": [
          "Kasuwa",
          "tana",
          "cike",
          "da",
          "mutane"
        ]
      },
      {
        "id": "ha-u8-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is a 'Mudu' in traditional markets across Northern Nigeria?",
        "options": [
          "A standardized grain bowl measuring unit",
          "A large transport truck",
          "A receipt booklet",
          "A type of leather purse"
        ],
        "correctAnswer": "A standardized grain bowl measuring unit",
        "explanation": "A 'mudu' is a widespread dry-measure bowl used to sell grains like rice, millet, and beans."
      },
      {
        "id": "ha-u8-l1-q16",
        "type": "audio_listen",
        "phrase": "Bani mudu biyu na shinkafa",
        "prompt": "Listen to the order. What is the customer buying?",
        "options": [
          "Two mudu measures of rice",
          "Two baskets of yams",
          "Two cups of red oil",
          "Two sacks of groundnuts"
        ],
        "correctAnswer": "Two mudu measures of rice",
        "explanation": "'Mudu biyu na shinkafa' = two mudu measures of rice."
      },
      {
        "id": "ha-u8-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Aljihu' mean?",
        "options": [
          "Pocket",
          "Wallet",
          "Basket",
          "Umbrella"
        ],
        "correctAnswer": "Pocket",
        "explanation": "'Aljihu' is pocket (where one puts money or small belongings)."
      },
      {
        "id": "ha-u8-l1-q18",
        "type": "fill_blank",
        "sentence": "When asking to weigh or measure something, you use the verb '___' (to measure/weigh).",
        "missingWord": "auna",
        "options": [
          "auna",
          "zuba",
          "yankewa",
          "dauka"
        ],
        "correctAnswer": "auna",
        "explanation": "'Auna' means to weigh or measure (volume/weight)."
      },
      {
        "id": "ha-u8-l1-q19",
        "type": "multiple_choice",
        "prompt": "If a merchant says 'Babu riba', what does he claim?",
        "options": [
          "There is no profit in this price",
          "There are no goods left",
          "No customers today",
          "I do not know you"
        ],
        "correctAnswer": "There is no profit in this price",
        "explanation": "'Riba' means profit; 'Babu riba' is a classic bargaining phrase meaning 'There is no profit left'."
      },
      {
        "id": "ha-u8-l1-q20",
        "type": "matching",
        "prompt": "Match monetary denominations and terms:",
        "pairs": [
          {
            "native": "Naira dubu daya",
            "english": "One thousand Naira (₦1,000)",
            "left": "Naira dubu daya",
            "right": "One thousand Naira (₦1,000)"
          },
          {
            "native": "Naira dari biyar",
            "english": "Five hundred Naira (₦500)",
            "left": "Naira dari biyar",
            "right": "Five hundred Naira (₦500)"
          },
          {
            "native": "Bashi",
            "english": "Credit / Debt",
            "left": "Bashi",
            "right": "Credit / Debt"
          },
          {
            "native": "Biya",
            "english": "To pay",
            "left": "Biya",
            "right": "To pay"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-9",
    "unitId": "ha-unit-9",
    "unitNumber": 9,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 9: Narrative Tenses and Aspects (Al'amuran Lokaci)",
    "subtitle": "Continuous, future, completive (perfective) aspects, and conjunctions (kuma, amma, domin).",
    "icon": "Clock",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ha-u9-l1",
        "title": "Lesson 1: Lokuta da Hadin Jumla (Tenses, Aspects & Conjunctions)",
        "description": "Master the aspectual markers in Hausa (progressive yana/tana, future zai/za ta, perfective ya/ta) and narrative conjunctions.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u9-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which marker indicates the continuous (progressive) aspect for a 3rd person masculine subject ('he is doing')?",
            "options": [
              "Yana",
              "Zai",
              "Ya",
              "Ya kan"
            ],
            "correctAnswer": "Yana",
            "explanation": "'Yana' denotes progressive/continuous aspect for 3rd person masculine ('Yana tafiya' = He is walking)."
          },
          {
            "id": "ha-u9-l1-q2",
            "type": "matching",
            "prompt": "Match the 3rd person masculine aspectual pronoun markers:",
            "pairs": [
              {
                "native": "Yana karatu",
                "english": "He is reading (Continuous)",
                "left": "Yana karatu",
                "right": "He is reading (Continuous)"
              },
              {
                "native": "Ya karanta",
                "english": "He read / has read (Completive / Perfective)",
                "left": "Ya karanta",
                "right": "He read / has read (Completive / Perfective)"
              },
              {
                "native": "Zai karanta",
                "english": "He will read (Future I)",
                "left": "Zai karanta",
                "right": "He will read (Future I)"
              },
              {
                "native": "Ya kan karanta",
                "english": "He usually reads (Habitual)",
                "left": "Ya kan karanta",
                "right": "He usually reads (Habitual)"
              }
            ]
          },
          {
            "id": "ha-u9-l1-q3",
            "type": "fill_blank",
            "sentence": "To express the future for a female subject ('She will come tomorrow'), you say: '___ zo gobe'.",
            "missingWord": "Za ta",
            "options": [
              "Za ta",
              "Tana",
              "Ta",
              "Za su"
            ],
            "correctAnswer": "Za ta",
            "explanation": "'Za ta' is the future aspect marker for 3rd person feminine singular."
          },
          {
            "id": "ha-u9-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Sun tafi makaranta da safe' (They went to school in the morning):",
            "tokens": [
              "Sun",
              "tafi",
              "makaranta",
              "da",
              "safe"
            ],
            "correctTokens": [
              "Sun",
              "tafi",
              "makaranta",
              "da",
              "safe"
            ]
          },
          {
            "id": "ha-u9-l1-q5",
            "type": "audio_listen",
            "phrase": "Ina aiki a asibiti amma ina zaune a gida",
            "prompt": "Listen to the complex statement. What does the conjunction 'amma' express?",
            "options": [
              "Contrast / 'But'",
              "Addition / 'And'",
              "Reason / 'Because'",
              "Condition / 'If'"
            ],
            "correctAnswer": "Contrast / 'But'",
            "explanation": "'Amma' means 'but' and introduces a contrasting clause."
          },
          {
            "id": "ha-u9-l1-q6",
            "type": "multiple_choice",
            "prompt": "Which conjunction means 'because' or 'in order that' in Hausa?",
            "options": [
              "Domin / Saboda",
              "Kuma",
              "Amma",
              "Kafin"
            ],
            "correctAnswer": "Domin / Saboda",
            "explanation": "'Domin' and 'Saboda' both mean 'because / in order to'."
          },
          {
            "id": "ha-u9-l1-q7",
            "type": "matching",
            "prompt": "Match Hausa coordinating and subordinating conjunctions:",
            "pairs": [
              {
                "native": "Kuma",
                "english": "And / also",
                "left": "Kuma",
                "right": "And / also"
              },
              {
                "native": "Amma",
                "english": "But / however",
                "left": "Amma",
                "right": "But / however"
              },
              {
                "native": "Domin / Don",
                "english": "Because / so that",
                "left": "Domin / Don",
                "right": "Because / so that"
              },
              {
                "native": "Kafin",
                "english": "Before",
                "left": "Kafin",
                "right": "Before"
              }
            ]
          },
          {
            "id": "ha-u9-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'After we ate, we slept', you say: '___ mun ci abinci, muka kwanta'.",
            "missingWord": "Bayan",
            "options": [
              "Bayan",
              "Kafin",
              "Domin",
              "Amma"
            ],
            "correctAnswer": "Bayan",
            "explanation": "'Bayan' means 'after' in narrative sequencing."
          },
          {
            "id": "ha-u9-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Zan tafi gida saboda na gaji' (I will go home because I am tired):",
            "tokens": [
              "Zan",
              "tafi",
              "gida",
              "saboda",
              "na",
              "gaji"
            ],
            "correctTokens": [
              "Zan",
              "tafi",
              "gida",
              "saboda",
              "na",
              "gaji"
            ]
          },
          {
            "id": "ha-u9-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the negative completive particle in Hausa (e.g., 'He did not go')?",
            "options": [
              "Ba ya tafi ba",
              "Bai tafi ba",
              "Ba zai tafi ba",
              "Kada ya tafi"
            ],
            "correctAnswer": "Bai tafi ba",
            "explanation": "'Bai ... ba' is the discontinuous negative completive/past marker for 3rd person masculine."
          },
          {
            "id": "ha-u9-l1-q11",
            "type": "audio_listen",
            "phrase": "Ba za su zo ba gobe",
            "prompt": "Listen to the sentence. What tense/aspect and polarity is expressed?",
            "options": [
              "Negative future ('They will not come tomorrow')",
              "Positive past ('They came yesterday')",
              "Present continuous ('They are coming')",
              "Past habitual ('They used to come')"
            ],
            "correctAnswer": "Negative future ('They will not come tomorrow')",
            "explanation": "'Ba za su ... ba' indicates negative future: 'They will not come tomorrow'."
          },
          {
            "id": "ha-u9-l1-q12",
            "type": "matching",
            "prompt": "Match negative aspect markers:",
            "pairs": [
              {
                "native": "Ba na so",
                "english": "I do not want / like (Neg. Continuous/State)",
                "left": "Ba na so",
                "right": "I do not want / like (Neg. Continuous/State)"
              },
              {
                "native": "Ban sani ba",
                "english": "I did not know / do not know (Neg. Completive)",
                "left": "Ban sani ba",
                "right": "I did not know / do not know (Neg. Completive)"
              },
              {
                "native": "Ba zan je ba",
                "english": "I will not go (Neg. Future)",
                "left": "Ba zan je ba",
                "right": "I will not go (Neg. Future)"
              },
              {
                "native": "Kada ka yi",
                "english": "Do not do it! (Negative Imperative)",
                "left": "Kada ka yi",
                "right": "Do not do it! (Negative Imperative)"
              }
            ]
          },
          {
            "id": "ha-u9-l1-q13",
            "type": "fill_blank",
            "sentence": "In relative narrative past (used in storytelling), 3rd person singular masculine 'ya' changes to '___'.",
            "missingWord": "ya",
            "options": [
              "ya",
              "yana",
              "zai",
              "sun"
            ],
            "correctAnswer": "ya",
            "explanation": "In historical narration, relative past (preterite) forms carry specific tonal patterns."
          },
          {
            "id": "ha-u9-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ali yana rubuta wasika' (Ali is writing a letter):",
            "tokens": [
              "Ali",
              "yana",
              "rubuta",
              "wasika"
            ],
            "correctTokens": [
              "Ali",
              "yana",
              "rubuta",
              "wasika"
            ]
          },
          {
            "id": "ha-u9-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Har yanzu' mean in time reference?",
            "options": [
              "Still / Up until now / Yet",
              "Long ago",
              "Tomorrow morning",
              "Never again"
            ],
            "correctAnswer": "Still / Up until now / Yet",
            "explanation": "'Har yanzu' means 'still' or 'even now'."
          },
          {
            "id": "ha-u9-l1-q16",
            "type": "audio_listen",
            "phrase": "Lokacin da na isa gida, ruwa ya dauke",
            "prompt": "Listen to the temporal sentence. What does it mean?",
            "options": [
              "When I arrived home, the rain had stopped",
              "When I left home, the sun was shining",
              "Before I reached home, rain was pouring",
              "I stayed home until the rain started"
            ],
            "correctAnswer": "When I arrived home, the rain had stopped",
            "explanation": "'Lokacin da...' = When / At the time that; 'ruwa ya dauke' = the rain stopped."
          },
          {
            "id": "ha-u9-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'We will learn together' in Hausa?",
            "options": [
              "Za mu koya tare",
              "Mun koya tare",
              "Muna koya jiya",
              "Ba za mu koya ba"
            ],
            "correctAnswer": "Za mu koya tare",
            "explanation": "'Za mu' = we will; 'koya tare' = learn together."
          },
          {
            "id": "ha-u9-l1-q18",
            "type": "fill_blank",
            "sentence": "To express habitual action ('Birds fly in the sky'), Hausa uses the habitual aspect: 'Tsuntsaye ___ tashi a sama'.",
            "missingWord": "kan",
            "options": [
              "kan",
              "za",
              "ba",
              "amma"
            ],
            "correctAnswer": "kan",
            "explanation": "'Su kan' or 'kan' expresses the habitual aspect (tend to / customarily do)."
          },
          {
            "id": "ha-u9-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Tun da' indicate in a narrative sentence?",
            "options": [
              "Since / Ever since",
              "Later on",
              "Immediately after",
              "Without delay"
            ],
            "correctAnswer": "Since / Ever since",
            "explanation": "'Tun da' signifies 'since' (e.g. 'Tun da safe' = since morning)."
          },
          {
            "id": "ha-u9-l1-q20",
            "type": "matching",
            "prompt": "Match time clauses with logical transitions:",
            "pairs": [
              {
                "native": "Tun da safe",
                "english": "Ever since morning",
                "left": "Tun da safe",
                "right": "Ever since morning"
              },
              {
                "native": "Daga baya",
                "english": "Later on / Afterwards",
                "left": "Daga baya",
                "right": "Later on / Afterwards"
              },
              {
                "native": "A karshe",
                "english": "Finally / In the end",
                "left": "A karshe",
                "right": "Finally / In the end"
              },
              {
                "native": "A halin yanzu",
                "english": "Currently / At present",
                "left": "A halin yanzu",
                "right": "Currently / At present"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u9-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which marker indicates the continuous (progressive) aspect for a 3rd person masculine subject ('he is doing')?",
        "options": [
          "Yana",
          "Zai",
          "Ya",
          "Ya kan"
        ],
        "correctAnswer": "Yana",
        "explanation": "'Yana' denotes progressive/continuous aspect for 3rd person masculine ('Yana tafiya' = He is walking)."
      },
      {
        "id": "ha-u9-l1-q2",
        "type": "matching",
        "prompt": "Match the 3rd person masculine aspectual pronoun markers:",
        "pairs": [
          {
            "native": "Yana karatu",
            "english": "He is reading (Continuous)",
            "left": "Yana karatu",
            "right": "He is reading (Continuous)"
          },
          {
            "native": "Ya karanta",
            "english": "He read / has read (Completive / Perfective)",
            "left": "Ya karanta",
            "right": "He read / has read (Completive / Perfective)"
          },
          {
            "native": "Zai karanta",
            "english": "He will read (Future I)",
            "left": "Zai karanta",
            "right": "He will read (Future I)"
          },
          {
            "native": "Ya kan karanta",
            "english": "He usually reads (Habitual)",
            "left": "Ya kan karanta",
            "right": "He usually reads (Habitual)"
          }
        ]
      },
      {
        "id": "ha-u9-l1-q3",
        "type": "fill_blank",
        "sentence": "To express the future for a female subject ('She will come tomorrow'), you say: '___ zo gobe'.",
        "missingWord": "Za ta",
        "options": [
          "Za ta",
          "Tana",
          "Ta",
          "Za su"
        ],
        "correctAnswer": "Za ta",
        "explanation": "'Za ta' is the future aspect marker for 3rd person feminine singular."
      },
      {
        "id": "ha-u9-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Sun tafi makaranta da safe' (They went to school in the morning):",
        "tokens": [
          "Sun",
          "tafi",
          "makaranta",
          "da",
          "safe"
        ],
        "correctTokens": [
          "Sun",
          "tafi",
          "makaranta",
          "da",
          "safe"
        ]
      },
      {
        "id": "ha-u9-l1-q5",
        "type": "audio_listen",
        "phrase": "Ina aiki a asibiti amma ina zaune a gida",
        "prompt": "Listen to the complex statement. What does the conjunction 'amma' express?",
        "options": [
          "Contrast / 'But'",
          "Addition / 'And'",
          "Reason / 'Because'",
          "Condition / 'If'"
        ],
        "correctAnswer": "Contrast / 'But'",
        "explanation": "'Amma' means 'but' and introduces a contrasting clause."
      },
      {
        "id": "ha-u9-l1-q6",
        "type": "multiple_choice",
        "prompt": "Which conjunction means 'because' or 'in order that' in Hausa?",
        "options": [
          "Domin / Saboda",
          "Kuma",
          "Amma",
          "Kafin"
        ],
        "correctAnswer": "Domin / Saboda",
        "explanation": "'Domin' and 'Saboda' both mean 'because / in order to'."
      },
      {
        "id": "ha-u9-l1-q7",
        "type": "matching",
        "prompt": "Match Hausa coordinating and subordinating conjunctions:",
        "pairs": [
          {
            "native": "Kuma",
            "english": "And / also",
            "left": "Kuma",
            "right": "And / also"
          },
          {
            "native": "Amma",
            "english": "But / however",
            "left": "Amma",
            "right": "But / however"
          },
          {
            "native": "Domin / Don",
            "english": "Because / so that",
            "left": "Domin / Don",
            "right": "Because / so that"
          },
          {
            "native": "Kafin",
            "english": "Before",
            "left": "Kafin",
            "right": "Before"
          }
        ]
      },
      {
        "id": "ha-u9-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'After we ate, we slept', you say: '___ mun ci abinci, muka kwanta'.",
        "missingWord": "Bayan",
        "options": [
          "Bayan",
          "Kafin",
          "Domin",
          "Amma"
        ],
        "correctAnswer": "Bayan",
        "explanation": "'Bayan' means 'after' in narrative sequencing."
      },
      {
        "id": "ha-u9-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Zan tafi gida saboda na gaji' (I will go home because I am tired):",
        "tokens": [
          "Zan",
          "tafi",
          "gida",
          "saboda",
          "na",
          "gaji"
        ],
        "correctTokens": [
          "Zan",
          "tafi",
          "gida",
          "saboda",
          "na",
          "gaji"
        ]
      },
      {
        "id": "ha-u9-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the negative completive particle in Hausa (e.g., 'He did not go')?",
        "options": [
          "Ba ya tafi ba",
          "Bai tafi ba",
          "Ba zai tafi ba",
          "Kada ya tafi"
        ],
        "correctAnswer": "Bai tafi ba",
        "explanation": "'Bai ... ba' is the discontinuous negative completive/past marker for 3rd person masculine."
      },
      {
        "id": "ha-u9-l1-q11",
        "type": "audio_listen",
        "phrase": "Ba za su zo ba gobe",
        "prompt": "Listen to the sentence. What tense/aspect and polarity is expressed?",
        "options": [
          "Negative future ('They will not come tomorrow')",
          "Positive past ('They came yesterday')",
          "Present continuous ('They are coming')",
          "Past habitual ('They used to come')"
        ],
        "correctAnswer": "Negative future ('They will not come tomorrow')",
        "explanation": "'Ba za su ... ba' indicates negative future: 'They will not come tomorrow'."
      },
      {
        "id": "ha-u9-l1-q12",
        "type": "matching",
        "prompt": "Match negative aspect markers:",
        "pairs": [
          {
            "native": "Ba na so",
            "english": "I do not want / like (Neg. Continuous/State)",
            "left": "Ba na so",
            "right": "I do not want / like (Neg. Continuous/State)"
          },
          {
            "native": "Ban sani ba",
            "english": "I did not know / do not know (Neg. Completive)",
            "left": "Ban sani ba",
            "right": "I did not know / do not know (Neg. Completive)"
          },
          {
            "native": "Ba zan je ba",
            "english": "I will not go (Neg. Future)",
            "left": "Ba zan je ba",
            "right": "I will not go (Neg. Future)"
          },
          {
            "native": "Kada ka yi",
            "english": "Do not do it! (Negative Imperative)",
            "left": "Kada ka yi",
            "right": "Do not do it! (Negative Imperative)"
          }
        ]
      },
      {
        "id": "ha-u9-l1-q13",
        "type": "fill_blank",
        "sentence": "In relative narrative past (used in storytelling), 3rd person singular masculine 'ya' changes to '___'.",
        "missingWord": "ya",
        "options": [
          "ya",
          "yana",
          "zai",
          "sun"
        ],
        "correctAnswer": "ya",
        "explanation": "In historical narration, relative past (preterite) forms carry specific tonal patterns."
      },
      {
        "id": "ha-u9-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ali yana rubuta wasika' (Ali is writing a letter):",
        "tokens": [
          "Ali",
          "yana",
          "rubuta",
          "wasika"
        ],
        "correctTokens": [
          "Ali",
          "yana",
          "rubuta",
          "wasika"
        ]
      },
      {
        "id": "ha-u9-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Har yanzu' mean in time reference?",
        "options": [
          "Still / Up until now / Yet",
          "Long ago",
          "Tomorrow morning",
          "Never again"
        ],
        "correctAnswer": "Still / Up until now / Yet",
        "explanation": "'Har yanzu' means 'still' or 'even now'."
      },
      {
        "id": "ha-u9-l1-q16",
        "type": "audio_listen",
        "phrase": "Lokacin da na isa gida, ruwa ya dauke",
        "prompt": "Listen to the temporal sentence. What does it mean?",
        "options": [
          "When I arrived home, the rain had stopped",
          "When I left home, the sun was shining",
          "Before I reached home, rain was pouring",
          "I stayed home until the rain started"
        ],
        "correctAnswer": "When I arrived home, the rain had stopped",
        "explanation": "'Lokacin da...' = When / At the time that; 'ruwa ya dauke' = the rain stopped."
      },
      {
        "id": "ha-u9-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'We will learn together' in Hausa?",
        "options": [
          "Za mu koya tare",
          "Mun koya tare",
          "Muna koya jiya",
          "Ba za mu koya ba"
        ],
        "correctAnswer": "Za mu koya tare",
        "explanation": "'Za mu' = we will; 'koya tare' = learn together."
      },
      {
        "id": "ha-u9-l1-q18",
        "type": "fill_blank",
        "sentence": "To express habitual action ('Birds fly in the sky'), Hausa uses the habitual aspect: 'Tsuntsaye ___ tashi a sama'.",
        "missingWord": "kan",
        "options": [
          "kan",
          "za",
          "ba",
          "amma"
        ],
        "correctAnswer": "kan",
        "explanation": "'Su kan' or 'kan' expresses the habitual aspect (tend to / customarily do)."
      },
      {
        "id": "ha-u9-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Tun da' indicate in a narrative sentence?",
        "options": [
          "Since / Ever since",
          "Later on",
          "Immediately after",
          "Without delay"
        ],
        "correctAnswer": "Since / Ever since",
        "explanation": "'Tun da' signifies 'since' (e.g. 'Tun da safe' = since morning)."
      },
      {
        "id": "ha-u9-l1-q20",
        "type": "matching",
        "prompt": "Match time clauses with logical transitions:",
        "pairs": [
          {
            "native": "Tun da safe",
            "english": "Ever since morning",
            "left": "Tun da safe",
            "right": "Ever since morning"
          },
          {
            "native": "Daga baya",
            "english": "Later on / Afterwards",
            "left": "Daga baya",
            "right": "Later on / Afterwards"
          },
          {
            "native": "A karshe",
            "english": "Finally / In the end",
            "left": "A karshe",
            "right": "Finally / In the end"
          },
          {
            "native": "A halin yanzu",
            "english": "Currently / At present",
            "left": "A halin yanzu",
            "right": "Currently / At present"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-10",
    "unitId": "ha-unit-10",
    "unitNumber": 10,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 10: Cultural Proverbs and Folktales (Karin Magana da Tatsuniya)",
    "subtitle": "Classic Hausa proverbs (Karin magana), oral folklore conventions, and Gizo the trickster spider tales.",
    "icon": "Feather",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ha-u10-l1",
        "title": "Lesson 1: Tatsuniyoyin Gizo da Hikimar Karin Magana (Spider Tales & Proverbs)",
        "description": "Explore indigenous storytelling formulas (Ga ta nan ga ta nanku), moral allegories, and timeless Hausa philosophical proverbs.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u10-l1-q1",
            "type": "multiple_choice",
            "prompt": "Who is the legendary trickster spider at the center of Hausa oral folktales (Tatsuniyoyi)?",
            "options": [
              "Gizo",
              "Koki",
              "Dila",
              "Zaki"
            ],
            "correctAnswer": "Gizo",
            "explanation": "Gizo is the famous sly trickster spider in Hausa folklore, known for his cunning wit and comical greed."
          },
          {
            "id": "ha-u10-l1-q2",
            "type": "matching",
            "prompt": "Match characters in Hausa folktales with their typical traits:",
            "pairs": [
              {
                "native": "Gizo",
                "english": "Cunning trickster spider",
                "left": "Gizo",
                "right": "Cunning trickster spider"
              },
              {
                "native": "Koki",
                "english": "Gizo's patient long-suffering wife",
                "left": "Koki",
                "right": "Gizo's patient long-suffering wife"
              },
              {
                "native": "Zaki",
                "english": "King of the beasts (Lion)",
                "left": "Zaki",
                "right": "King of the beasts (Lion)"
              },
              {
                "native": "Dila",
                "english": "Wily jackal / fox",
                "left": "Dila",
                "right": "Wily jackal / fox"
              }
            ]
          },
          {
            "id": "ha-u10-l1-q3",
            "type": "fill_blank",
            "sentence": "The traditional opening call of a Hausa storyteller is 'Ga ta ga ta nan', to which the audience responds: 'Ta zo mu ___'.",
            "missingWord": "ji ta",
            "options": [
              "ji ta",
              "gani",
              "koma",
              "tafi"
            ],
            "correctAnswer": "ji ta",
            "explanation": "The traditional call and response is: 'Ga ta ga ta nan' (Here it comes, here it is) -> 'Ta zo mu ji ta' (Let it come so we may hear it)."
          },
          {
            "id": "ha-u10-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words of the famous proverb: 'Hankuri maganin zaman duniya' (Patience is the remedy for living in this world):",
            "tokens": [
              "Hankuri",
              "maganin",
              "zaman",
              "duniya"
            ],
            "correctTokens": [
              "Hankuri",
              "maganin",
              "zaman",
              "duniya"
            ]
          },
          {
            "id": "ha-u10-l1-q5",
            "type": "audio_listen",
            "phrase": "Kowa ya tuna bara, ya manta bana",
            "prompt": "Listen to the famous Hausa proverb. What does it teach about life?",
            "options": [
              "Whoever reminisces excessively about last year forgets to live in this year",
              "Only farmers remember the dry season",
              "Poverty comes from sleeping late",
              "A fast runner always wins the race"
            ],
            "correctAnswer": "Whoever reminisces excessively about last year forgets to live in this year",
            "explanation": "'Kowa ya tuna bara, ya manta bana' warns against being trapped in the past at the expense of the present."
          },
          {
            "id": "ha-u10-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does the proverb 'Kaza mai 'ya'ya ba ta raba kwana da dusa' mean metaphorically?",
            "options": [
              "A mother with children never rests from striving to provide",
              "Chickens enjoy eating grain at night",
              "Rich people should share with neighbors",
              "Do not count your chickens before they hatch"
            ],
            "correctAnswer": "A mother with children never rests from striving to provide",
            "explanation": "The hen with chicks never sleeps away from bran/feed—a devoted caregiver never stops working for dependants."
          },
          {
            "id": "ha-u10-l1-q7",
            "type": "matching",
            "prompt": "Match profound Hausa proverbs with their English meanings:",
            "pairs": [
              {
                "native": "Zaman lafiya ya fi zama dan sarki",
                "english": "Peaceful living is better than being a prince",
                "left": "Zaman lafiya ya fi zama dan sarki",
                "right": "Peaceful living is better than being a prince"
              },
              {
                "native": "Ilimi garkuwar dan Adam",
                "english": "Education / Knowledge is the shield of humanity",
                "left": "Ilimi garkuwar dan Adam",
                "right": "Education / Knowledge is the shield of humanity"
              },
              {
                "native": "Kada ka yanke kauna",
                "english": "Never sever hope (Never despair)",
                "left": "Kada ka yanke kauna",
                "right": "Never sever hope (Never despair)"
              },
              {
                "native": "Aiki da ilimi",
                "english": "Action guided by knowledge",
                "left": "Aiki da ilimi",
                "right": "Action guided by knowledge"
              }
            ]
          },
          {
            "id": "ha-u10-l1-q8",
            "type": "fill_blank",
            "sentence": "The traditional formula used to conclude a Hausa folktale is: 'Kunkurmin kunkus, kunkus ta ___'.",
            "missingWord": "kare",
            "options": [
              "kare",
              "fara",
              "tafi",
              "mutu"
            ],
            "correctAnswer": "kare",
            "explanation": "'Kunkurmin kunkus, kunkus ta kare' is the ritual signoff meaning 'The story has ended, off it goes'."
          },
          {
            "id": "ha-u9-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Gizo ya yaudari zaki' (Gizo deceived the lion):",
            "tokens": [
              "Gizo",
              "ya",
              "yaudari",
              "zaki"
            ],
            "correctTokens": [
              "Gizo",
              "ya",
              "yaudari",
              "zaki"
            ]
          },
          {
            "id": "ha-u10-l1-q10",
            "type": "multiple_choice",
            "prompt": "What moral lesson does Gizo's character typically convey in Hausa folklore?",
            "options": [
              "Greed, arrogance, and dishonesty ultimately bring shame and defeat",
              "Strength is always better than intelligence",
              "Spiders are holy animals",
              "Only kings should rule the forest"
            ],
            "correctAnswer": "Greed, arrogance, and dishonesty ultimately bring shame and defeat",
            "explanation": "Though clever, Gizo's unbridled greed (kwadayi) always catches up with him, teaching children modesty and honesty."
          },
          {
            "id": "ha-u10-l1-q11",
            "type": "audio_listen",
            "phrase": "Kowa ya debi da zafi, bakinsa",
            "prompt": "Listen to the proverb. What is the implied consequence?",
            "options": [
              "Whoever scoops boiling hot food burns their own mouth (Reaping consequences)",
              "Hot food should be given to travelers",
              "Never cook without enough firewood",
              "A generous host cooks boiling meat"
            ],
            "correctAnswer": "Whoever scoops boiling hot food burns their own mouth (Reaping consequences)",
            "explanation": "'Kowa ya debi da zafi, bakinsa' means whoever hastily takes boiling porridge will burn their own mouth—one bears the consequences of one's rash actions."
          },
          {
            "id": "ha-u10-l1-q12",
            "type": "matching",
            "prompt": "Match literary folklore genres in Hausa culture:",
            "pairs": [
              {
                "native": "Tatsuniya",
                "english": "Folktale / Fable / Fairy tale",
                "left": "Tatsuniya",
                "right": "Folktale / Fable / Fairy tale"
              },
              {
                "native": "Karin magana",
                "english": "Proverb / Wise adage",
                "left": "Karin magana",
                "right": "Proverb / Wise adage"
              },
              {
                "native": "Kacici-kacici",
                "english": "Riddle / Brainteaser",
                "left": "Kacici-kacici",
                "right": "Riddle / Brainteaser"
              },
              {
                "native": "Hikaya",
                "english": "Legend / Historical myth",
                "left": "Hikaya",
                "right": "Legend / Historical myth"
              }
            ]
          },
          {
            "id": "ha-u10-l1-q13",
            "type": "fill_blank",
            "sentence": "A Hausa riddle (kacici-kacici) usually begins with the phrase: 'Kacici-kacici, ka ___' (Guess what it is).",
            "missingWord": "gano",
            "options": [
              "gano",
              "ji",
              "fada",
              "rubuta"
            ],
            "correctAnswer": "gano",
            "explanation": "'Ka gano' means 'figure it out / discover it / guess'."
          },
          {
            "id": "ha-u10-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the proverb: 'Duk mai rai zai dandani mutuwa' (Every living soul shall taste death):",
            "tokens": [
              "Duk",
              "mai",
              "rai",
              "zai",
              "dandani",
              "mutuwa"
            ],
            "correctTokens": [
              "Duk",
              "mai",
              "rai",
              "zai",
              "dandani",
              "mutuwa"
            ]
          },
          {
            "id": "ha-u10-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does the proverb 'Gani ya kori ji' emphasize?",
            "options": [
              "Seeing dispels hearing (Seeing is believing)",
              "Listening is better than watching",
              "Blindness is cured by patience",
              "Never believe what you touch"
            ],
            "correctAnswer": "Seeing dispels hearing (Seeing is believing)",
            "explanation": "'Gani ya kori ji' literally means 'Seeing chases away hearing'—eyewitness truth supersedes hearsay."
          },
          {
            "id": "ha-u10-l1-q16",
            "type": "audio_listen",
            "phrase": "Bakin da ya ci gishiri, zai sha ruwa",
            "prompt": "Listen to the proverb. What principle does it express?",
            "options": [
              "Actions inevitably carry repercussions (Cause and effect)",
              "Too much salt spoils soup",
              "Water is the best medicine",
              "Always wash your mouth before eating"
            ],
            "correctAnswer": "Actions inevitably carry repercussions (Cause and effect)",
            "explanation": "'The mouth that eats salt will inevitably drink water'—you must bear the natural consequences of what you do."
          },
          {
            "id": "ha-u10-l1-q17",
            "type": "multiple_choice",
            "prompt": "In Hausa riddles, what is: 'Wani abu a sama yana gudu ba kafa' (Something up in the sky running without legs)?",
            "options": [
              "Gira / Gizagizai (Cloud)",
              "Tsuntsu (Bird)",
              "Jirgi (Airplane)",
              "Rana (Sun)"
            ],
            "correctAnswer": "Gira / Gizagizai (Cloud)",
            "explanation": "Gizagizai (Clouds) move across the heavens without legs."
          },
          {
            "id": "ha-u10-l1-q18",
            "type": "fill_blank",
            "sentence": "Complete the proverb: 'Wanda bai san gari ba, yana kiran babba da ___'.",
            "missingWord": "yaro",
            "options": [
              "yaro",
              "dattijo",
              "sarki",
              "aboki"
            ],
            "correctAnswer": "yaro",
            "explanation": "'Wanda bai san gari ba, yana kiran babba da yaro' (A stranger in town mistakenly addresses an elder as a child)."
          },
          {
            "id": "ha-u10-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Hikima' mean in Hausa philosophy?",
            "options": [
              "Wisdom / Deep intellect",
              "Wealth / Coins",
              "Physical power",
              "Speed in running"
            ],
            "correctAnswer": "Wisdom / Deep intellect",
            "explanation": "'Hikima' is wisdom, sagacity, and philosophical discernment."
          },
          {
            "id": "ha-u10-l1-q20",
            "type": "matching",
            "prompt": "Match moral virtues celebrated in Hausa oral literature:",
            "pairs": [
              {
                "native": "Kunya",
                "english": "Modesty, decency and respect",
                "left": "Kunya",
                "right": "Modesty, decency and respect"
              },
              {
                "native": "Karamci",
                "english": "Generosity and hospitality to guests",
                "left": "Karamci",
                "right": "Generosity and hospitality to guests"
              },
              {
                "native": "Gaskiya",
                "english": "Truthfulness and integrity",
                "left": "Gaskiya",
                "right": "Truthfulness and integrity"
              },
              {
                "native": "Amana",
                "english": "Trust and inviolable fidelity",
                "left": "Amana",
                "right": "Trust and inviolable fidelity"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u10-l1-q1",
        "type": "multiple_choice",
        "prompt": "Who is the legendary trickster spider at the center of Hausa oral folktales (Tatsuniyoyi)?",
        "options": [
          "Gizo",
          "Koki",
          "Dila",
          "Zaki"
        ],
        "correctAnswer": "Gizo",
        "explanation": "Gizo is the famous sly trickster spider in Hausa folklore, known for his cunning wit and comical greed."
      },
      {
        "id": "ha-u10-l1-q2",
        "type": "matching",
        "prompt": "Match characters in Hausa folktales with their typical traits:",
        "pairs": [
          {
            "native": "Gizo",
            "english": "Cunning trickster spider",
            "left": "Gizo",
            "right": "Cunning trickster spider"
          },
          {
            "native": "Koki",
            "english": "Gizo's patient long-suffering wife",
            "left": "Koki",
            "right": "Gizo's patient long-suffering wife"
          },
          {
            "native": "Zaki",
            "english": "King of the beasts (Lion)",
            "left": "Zaki",
            "right": "King of the beasts (Lion)"
          },
          {
            "native": "Dila",
            "english": "Wily jackal / fox",
            "left": "Dila",
            "right": "Wily jackal / fox"
          }
        ]
      },
      {
        "id": "ha-u10-l1-q3",
        "type": "fill_blank",
        "sentence": "The traditional opening call of a Hausa storyteller is 'Ga ta ga ta nan', to which the audience responds: 'Ta zo mu ___'.",
        "missingWord": "ji ta",
        "options": [
          "ji ta",
          "gani",
          "koma",
          "tafi"
        ],
        "correctAnswer": "ji ta",
        "explanation": "The traditional call and response is: 'Ga ta ga ta nan' (Here it comes, here it is) -> 'Ta zo mu ji ta' (Let it come so we may hear it)."
      },
      {
        "id": "ha-u10-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words of the famous proverb: 'Hankuri maganin zaman duniya' (Patience is the remedy for living in this world):",
        "tokens": [
          "Hankuri",
          "maganin",
          "zaman",
          "duniya"
        ],
        "correctTokens": [
          "Hankuri",
          "maganin",
          "zaman",
          "duniya"
        ]
      },
      {
        "id": "ha-u10-l1-q5",
        "type": "audio_listen",
        "phrase": "Kowa ya tuna bara, ya manta bana",
        "prompt": "Listen to the famous Hausa proverb. What does it teach about life?",
        "options": [
          "Whoever reminisces excessively about last year forgets to live in this year",
          "Only farmers remember the dry season",
          "Poverty comes from sleeping late",
          "A fast runner always wins the race"
        ],
        "correctAnswer": "Whoever reminisces excessively about last year forgets to live in this year",
        "explanation": "'Kowa ya tuna bara, ya manta bana' warns against being trapped in the past at the expense of the present."
      },
      {
        "id": "ha-u10-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does the proverb 'Kaza mai 'ya'ya ba ta raba kwana da dusa' mean metaphorically?",
        "options": [
          "A mother with children never rests from striving to provide",
          "Chickens enjoy eating grain at night",
          "Rich people should share with neighbors",
          "Do not count your chickens before they hatch"
        ],
        "correctAnswer": "A mother with children never rests from striving to provide",
        "explanation": "The hen with chicks never sleeps away from bran/feed—a devoted caregiver never stops working for dependants."
      },
      {
        "id": "ha-u10-l1-q7",
        "type": "matching",
        "prompt": "Match profound Hausa proverbs with their English meanings:",
        "pairs": [
          {
            "native": "Zaman lafiya ya fi zama dan sarki",
            "english": "Peaceful living is better than being a prince",
            "left": "Zaman lafiya ya fi zama dan sarki",
            "right": "Peaceful living is better than being a prince"
          },
          {
            "native": "Ilimi garkuwar dan Adam",
            "english": "Education / Knowledge is the shield of humanity",
            "left": "Ilimi garkuwar dan Adam",
            "right": "Education / Knowledge is the shield of humanity"
          },
          {
            "native": "Kada ka yanke kauna",
            "english": "Never sever hope (Never despair)",
            "left": "Kada ka yanke kauna",
            "right": "Never sever hope (Never despair)"
          },
          {
            "native": "Aiki da ilimi",
            "english": "Action guided by knowledge",
            "left": "Aiki da ilimi",
            "right": "Action guided by knowledge"
          }
        ]
      },
      {
        "id": "ha-u10-l1-q8",
        "type": "fill_blank",
        "sentence": "The traditional formula used to conclude a Hausa folktale is: 'Kunkurmin kunkus, kunkus ta ___'.",
        "missingWord": "kare",
        "options": [
          "kare",
          "fara",
          "tafi",
          "mutu"
        ],
        "correctAnswer": "kare",
        "explanation": "'Kunkurmin kunkus, kunkus ta kare' is the ritual signoff meaning 'The story has ended, off it goes'."
      },
      {
        "id": "ha-u9-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Gizo ya yaudari zaki' (Gizo deceived the lion):",
        "tokens": [
          "Gizo",
          "ya",
          "yaudari",
          "zaki"
        ],
        "correctTokens": [
          "Gizo",
          "ya",
          "yaudari",
          "zaki"
        ]
      },
      {
        "id": "ha-u10-l1-q10",
        "type": "multiple_choice",
        "prompt": "What moral lesson does Gizo's character typically convey in Hausa folklore?",
        "options": [
          "Greed, arrogance, and dishonesty ultimately bring shame and defeat",
          "Strength is always better than intelligence",
          "Spiders are holy animals",
          "Only kings should rule the forest"
        ],
        "correctAnswer": "Greed, arrogance, and dishonesty ultimately bring shame and defeat",
        "explanation": "Though clever, Gizo's unbridled greed (kwadayi) always catches up with him, teaching children modesty and honesty."
      },
      {
        "id": "ha-u10-l1-q11",
        "type": "audio_listen",
        "phrase": "Kowa ya debi da zafi, bakinsa",
        "prompt": "Listen to the proverb. What is the implied consequence?",
        "options": [
          "Whoever scoops boiling hot food burns their own mouth (Reaping consequences)",
          "Hot food should be given to travelers",
          "Never cook without enough firewood",
          "A generous host cooks boiling meat"
        ],
        "correctAnswer": "Whoever scoops boiling hot food burns their own mouth (Reaping consequences)",
        "explanation": "'Kowa ya debi da zafi, bakinsa' means whoever hastily takes boiling porridge will burn their own mouth—one bears the consequences of one's rash actions."
      },
      {
        "id": "ha-u10-l1-q12",
        "type": "matching",
        "prompt": "Match literary folklore genres in Hausa culture:",
        "pairs": [
          {
            "native": "Tatsuniya",
            "english": "Folktale / Fable / Fairy tale",
            "left": "Tatsuniya",
            "right": "Folktale / Fable / Fairy tale"
          },
          {
            "native": "Karin magana",
            "english": "Proverb / Wise adage",
            "left": "Karin magana",
            "right": "Proverb / Wise adage"
          },
          {
            "native": "Kacici-kacici",
            "english": "Riddle / Brainteaser",
            "left": "Kacici-kacici",
            "right": "Riddle / Brainteaser"
          },
          {
            "native": "Hikaya",
            "english": "Legend / Historical myth",
            "left": "Hikaya",
            "right": "Legend / Historical myth"
          }
        ]
      },
      {
        "id": "ha-u10-l1-q13",
        "type": "fill_blank",
        "sentence": "A Hausa riddle (kacici-kacici) usually begins with the phrase: 'Kacici-kacici, ka ___' (Guess what it is).",
        "missingWord": "gano",
        "options": [
          "gano",
          "ji",
          "fada",
          "rubuta"
        ],
        "correctAnswer": "gano",
        "explanation": "'Ka gano' means 'figure it out / discover it / guess'."
      },
      {
        "id": "ha-u10-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the proverb: 'Duk mai rai zai dandani mutuwa' (Every living soul shall taste death):",
        "tokens": [
          "Duk",
          "mai",
          "rai",
          "zai",
          "dandani",
          "mutuwa"
        ],
        "correctTokens": [
          "Duk",
          "mai",
          "rai",
          "zai",
          "dandani",
          "mutuwa"
        ]
      },
      {
        "id": "ha-u10-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does the proverb 'Gani ya kori ji' emphasize?",
        "options": [
          "Seeing dispels hearing (Seeing is believing)",
          "Listening is better than watching",
          "Blindness is cured by patience",
          "Never believe what you touch"
        ],
        "correctAnswer": "Seeing dispels hearing (Seeing is believing)",
        "explanation": "'Gani ya kori ji' literally means 'Seeing chases away hearing'—eyewitness truth supersedes hearsay."
      },
      {
        "id": "ha-u10-l1-q16",
        "type": "audio_listen",
        "phrase": "Bakin da ya ci gishiri, zai sha ruwa",
        "prompt": "Listen to the proverb. What principle does it express?",
        "options": [
          "Actions inevitably carry repercussions (Cause and effect)",
          "Too much salt spoils soup",
          "Water is the best medicine",
          "Always wash your mouth before eating"
        ],
        "correctAnswer": "Actions inevitably carry repercussions (Cause and effect)",
        "explanation": "'The mouth that eats salt will inevitably drink water'—you must bear the natural consequences of what you do."
      },
      {
        "id": "ha-u10-l1-q17",
        "type": "multiple_choice",
        "prompt": "In Hausa riddles, what is: 'Wani abu a sama yana gudu ba kafa' (Something up in the sky running without legs)?",
        "options": [
          "Gira / Gizagizai (Cloud)",
          "Tsuntsu (Bird)",
          "Jirgi (Airplane)",
          "Rana (Sun)"
        ],
        "correctAnswer": "Gira / Gizagizai (Cloud)",
        "explanation": "Gizagizai (Clouds) move across the heavens without legs."
      },
      {
        "id": "ha-u10-l1-q18",
        "type": "fill_blank",
        "sentence": "Complete the proverb: 'Wanda bai san gari ba, yana kiran babba da ___'.",
        "missingWord": "yaro",
        "options": [
          "yaro",
          "dattijo",
          "sarki",
          "aboki"
        ],
        "correctAnswer": "yaro",
        "explanation": "'Wanda bai san gari ba, yana kiran babba da yaro' (A stranger in town mistakenly addresses an elder as a child)."
      },
      {
        "id": "ha-u10-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Hikima' mean in Hausa philosophy?",
        "options": [
          "Wisdom / Deep intellect",
          "Wealth / Coins",
          "Physical power",
          "Speed in running"
        ],
        "correctAnswer": "Wisdom / Deep intellect",
        "explanation": "'Hikima' is wisdom, sagacity, and philosophical discernment."
      },
      {
        "id": "ha-u10-l1-q20",
        "type": "matching",
        "prompt": "Match moral virtues celebrated in Hausa oral literature:",
        "pairs": [
          {
            "native": "Kunya",
            "english": "Modesty, decency and respect",
            "left": "Kunya",
            "right": "Modesty, decency and respect"
          },
          {
            "native": "Karamci",
            "english": "Generosity and hospitality to guests",
            "left": "Karamci",
            "right": "Generosity and hospitality to guests"
          },
          {
            "native": "Gaskiya",
            "english": "Truthfulness and integrity",
            "left": "Gaskiya",
            "right": "Truthfulness and integrity"
          },
          {
            "native": "Amana",
            "english": "Trust and inviolable fidelity",
            "left": "Amana",
            "right": "Trust and inviolable fidelity"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-11",
    "unitId": "ha-unit-11",
    "unitNumber": 11,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 11: Complex Sentence Structures and Subordination (Tsarin Jumla Mai Haɗa-haɗa)",
    "subtitle": "Relative clauses (wanda, wadda, waɗanda), conditionals (Idan... to...), passive voice, and causative verbs.",
    "icon": "Network",
    "color": "#059669",
    "lessons": [
      {
        "id": "ha-u11-l1",
        "title": "Lesson 1: Tsarin Jumla Mai Sarƙaƙiya (Complex Syntax & Conditionals)",
        "description": "Master Hausa relative pronouns, subjunctive clauses, conditional hypotheticals, and causative/passive transformations.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u11-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which relative pronoun refers to a masculine singular antecedent ('the boy WHO came')?",
            "options": [
              "Wanda",
              "Wadda",
              "Waɗanda",
              "Wace"
            ],
            "correctAnswer": "Wanda",
            "explanation": "'Wanda' is the masculine singular relative pronoun ('yaron da ya zo' or 'yaro wanda ya zo'). 'Wadda' is feminine singular, and 'Waɗanda' is plural."
          },
          {
            "id": "ha-u11-l1-q2",
            "type": "matching",
            "prompt": "Match Hausa relative pronouns with their grammatical agreement:",
            "pairs": [
              {
                "native": "Wanda",
                "english": "Who / which (Masculine Singular)",
                "left": "Wanda",
                "right": "Who / which (Masculine Singular)"
              },
              {
                "native": "Wadda",
                "english": "Who / which (Feminine Singular)",
                "left": "Wadda",
                "right": "Who / which (Feminine Singular)"
              },
              {
                "native": "Waɗanda",
                "english": "Who / which (Plural all genders)",
                "left": "Waɗanda",
                "right": "Who / which (Plural all genders)"
              },
              {
                "native": "Abin da",
                "english": "That which / What (Neuter / Thing)",
                "left": "Abin da",
                "right": "That which / What (Neuter / Thing)"
              }
            ]
          },
          {
            "id": "ha-u11-l1-q3",
            "type": "fill_blank",
            "sentence": "In conditional sentences ('If it rains, we will stay home'), Hausa pairs 'Idan' with '___': 'Idan ruwa ya yi, ___ za mu zauna a gida'.",
            "missingWord": "to",
            "options": [
              "to",
              "kuma",
              "amma",
              "saboda"
            ],
            "correctAnswer": "to",
            "explanation": "'Idan ... to' or 'In ... to' is the standard correlative conditional construction ('If ... then')."
          },
          {
            "id": "ha-u11-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Idan ka yi karatu sosai, to za ka ci jarrabawa' (If you study well, then you will pass the exam):",
            "tokens": [
              "Idan",
              "ka",
              "yi",
              "karatu",
              "sosai,",
              "to",
              "za",
              "ka",
              "ci",
              "jarrabawa"
            ],
            "correctTokens": [
              "Idan",
              "ka",
              "yi",
              "karatu",
              "sosai,",
              "to",
              "za",
              "ka",
              "ci",
              "jarrabawa"
            ]
          },
          {
            "id": "ha-u11-l1-q5",
            "type": "audio_listen",
            "phrase": "An gina sabuwar asibiti a cikin garinmu",
            "prompt": "Listen to the passive construction. What does 'An gina...' express?",
            "options": [
              "Passive voice: 'A new hospital was built in our town'",
              "Future plan: 'We will build a new hospital'",
              "Past habitual: 'They used to build hospitals'",
              "Negative statement: 'No hospital was built'"
            ],
            "correctAnswer": "Passive voice: 'A new hospital was built in our town'",
            "explanation": "The impersonal/passive subject marker 'An' (or 'Aka') marks the passive voice ('An gina' = was built)."
          },
          {
            "id": "ha-u11-l1-q6",
            "type": "multiple_choice",
            "prompt": "How does Hausa derive a causative verb (e.g., 'to cause to enter / bring in' from 'shiga' [enter])?",
            "options": [
              "Shigar da",
              "Shigowa",
              "Shigewa",
              "Shigi"
            ],
            "correctAnswer": "Shigar da",
            "explanation": "Adding '-r da' to the verb root creates the causative/transitive grade (grade 5): 'shiga' (enter) -> 'shigar da' (bring in / introduce)."
          },
          {
            "id": "ha-u11-l1-q7",
            "type": "matching",
            "prompt": "Match simple verbs with their causative (-r da) derivations:",
            "pairs": [
              {
                "native": "Fita (go out)",
                "english": "Fitar da (bring out / expel / export)",
                "left": "Fita (go out)",
                "right": "Fitar da (bring out / expel / export)"
              },
              {
                "native": "Koma (return)",
                "english": "Mayar da (return something / restore)",
                "left": "Koma (return)",
                "right": "Mayar da (return something / restore)"
              },
              {
                "native": "Tashi (rise)",
                "english": "Tashar da (awaken / cause to rise)",
                "left": "Tashi (rise)",
                "right": "Tashar da (awaken / cause to rise)"
              },
              {
                "native": "Ci (eat)",
                "english": "Ciyar da (feed / provide sustenance)",
                "left": "Ci (eat)",
                "right": "Ciyar da (feed / provide sustenance)"
              }
            ]
          },
          {
            "id": "ha-u11-l1-q8",
            "type": "fill_blank",
            "sentence": "To express hypothetical unfulfilled condition ('Had I known, I would not have gone'), Hausa uses 'Da': 'Da na sani, ___ ban je ba'.",
            "missingWord": "da",
            "options": [
              "da",
              "to",
              "kuma",
              "idan"
            ],
            "correctAnswer": "da",
            "explanation": "Counterfactual hypothetical conditionals use 'Da ... da ...' ('Da na sani, da ban je ba')."
          },
          {
            "id": "ha-u11-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Wannan ita ce matar da ta taimake mu' (This is the woman who helped us):",
            "tokens": [
              "Wannan",
              "ita",
              "ce",
              "matar",
              "da",
              "ta",
              "taimake",
              "mu"
            ],
            "correctTokens": [
              "Wannan",
              "ita",
              "ce",
              "matar",
              "da",
              "ta",
              "taimake",
              "mu"
            ]
          },
          {
            "id": "ha-u11-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the function of the subjunctive particle (e.g., 'Ina son ya tafi')?",
            "options": [
              "To express desire, necessity, or purpose in subordinate clauses",
              "To mark completed historical events",
              "To express negative physical actions",
              "To ask mathematical questions"
            ],
            "correctAnswer": "To express desire, necessity, or purpose in subordinate clauses",
            "explanation": "The subjunctive (ya/ta/su without tense aspect auxiliaries) expresses modal subordination: wishes, commands, and intentions."
          },
          {
            "id": "ha-u11-l1-q11",
            "type": "audio_listen",
            "phrase": "Dole ne mu kare muhallinmu",
            "prompt": "Listen to the statement of necessity. What does it urge?",
            "options": [
              "It is necessary that we protect our environment",
              "We must clean our bedrooms",
              "We should plant trees tomorrow",
              "The environment is clean and safe"
            ],
            "correctAnswer": "It is necessary that we protect our environment",
            "explanation": "'Dole ne...' expresses strict necessity/obligation: 'It is necessary that we protect our environment (muhalli)'."
          },
          {
            "id": "ha-u11-l1-q12",
            "type": "matching",
            "prompt": "Match modal expressions of obligation and permission:",
            "pairs": [
              {
                "native": "Dole ne",
                "english": "It is mandatory / necessary",
                "left": "Dole ne",
                "right": "It is mandatory / necessary"
              },
              {
                "native": "Ya kamata",
                "english": "It is proper / appropriate / ought to",
                "left": "Ya kamata",
                "right": "It is proper / appropriate / ought to"
              },
              {
                "native": "Za a iya",
                "english": "It is possible / One can",
                "left": "Za a iya",
                "right": "It is possible / One can"
              },
              {
                "native": "Bai halatta ba",
                "english": "It is forbidden / unlawful",
                "left": "Bai halatta ba",
                "right": "Bai halatta ba"
              }
            ]
          },
          {
            "id": "ha-u11-l1-q13",
            "type": "fill_blank",
            "sentence": "To say 'Although it was late, he came', Hausa uses 'Ko da yake': '___ dare ya yi, ya zo'.",
            "missingWord": "Ko da yake",
            "options": [
              "Ko da yake",
              "Domin",
              "Kafin",
              "Bayan"
            ],
            "correctAnswer": "Ko da yake",
            "explanation": "'Ko da yake' introduces a concession clause meaning 'Although / Even though'."
          },
          {
            "id": "ha-u11-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Aka zabi sabon shugaba' (A new leader was elected):",
            "tokens": [
              "Aka",
              "zabi",
              "sabon",
              "shugaba"
            ],
            "correctTokens": [
              "Aka",
              "zabi",
              "sabon",
              "shugaba"
            ]
          },
          {
            "id": "ha-u11-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does the connective 'koda shike' or 'koda yake' express syntactically?",
            "options": [
              "Concession (Although / Even though)",
              "Strict condition (Only if)",
              "Cause (Because)",
              "Time (While)"
            ],
            "correctAnswer": "Concession (Although / Even though)",
            "explanation": "'Ko da yake' functions as a concessive subordinator equivalent to 'although / albeit'."
          },
          {
            "id": "ha-u11-l1-q16",
            "type": "audio_listen",
            "phrase": "Ba wai don kudi ba, sai don gaskiya",
            "prompt": "Listen to the sophisticated clause. What is the speaker emphasizing?",
            "options": [
              "Not for the sake of money, but solely for truth",
              "Money cannot buy truth",
              "We spent all the money honestly",
              "Whoever has money knows the truth"
            ],
            "correctAnswer": "Not for the sake of money, but solely for truth",
            "explanation": "'Ba wai don... ba, sai don...' is an advanced rhetorical pattern: 'Not because of X, but rather for Y'."
          },
          {
            "id": "ha-u11-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is the meaning of 'Kada a manta' in formal discourse?",
            "options": [
              "Lest it be forgotten / Let it not be forgotten",
              "Never speak aloud",
              "Remember everything",
              "Do not write down"
            ],
            "correctAnswer": "Lest it be forgotten / Let it not be forgotten",
            "explanation": "'Kada a manta' is an impersonal negative subjunctive meaning 'Let it not be forgotten / Lest we forget'."
          },
          {
            "id": "ha-u11-l1-q18",
            "type": "fill_blank",
            "sentence": "When connecting two simultaneous actions ('While he was singing, she danced'), Hausa uses: '___ yana waka, tana rawa'.",
            "missingWord": "Yayin da",
            "options": [
              "Yayin da",
              "Amma",
              "Domin",
              "Koda"
            ],
            "correctAnswer": "Yayin da",
            "explanation": "'Yayin da' or 'A lokacin da' introduces simultaneous ongoing clauses ('While / During the time that')."
          },
          {
            "id": "ha-u11-l1-q19",
            "type": "multiple_choice",
            "prompt": "In Hausa linguistic terminology, what is a complex sentence called?",
            "options": [
              "Jumla mai haɗa-haɗa / Jumla mai sarƙaƙiya",
              "Jumla maras tushe",
              "Kalma daya",
              "Haruffa"
            ],
            "correctAnswer": "Jumla mai haɗa-haɗa / Jumla mai sarƙaƙiya",
            "explanation": "'Jumla mai haɗa-haɗa' or 'jumla sarƙaƙƙiya' designates a complex or compound-complex sentence structure."
          },
          {
            "id": "ha-u11-l1-q20",
            "type": "matching",
            "prompt": "Match Hausa subordinating expressions with their meanings:",
            "pairs": [
              {
                "native": "Matukar",
                "english": "As long as / Provided that",
                "left": "Matukar",
                "right": "As long as / Provided that"
              },
              {
                "native": "Maimakon",
                "english": "Instead of / In lieu of",
                "left": "Maimakon",
                "right": "Instead of / In lieu of"
              },
              {
                "native": "Tamkar",
                "english": "Just like / As if",
                "left": "Tamkar",
                "right": "Just like / As if"
              },
              {
                "native": "Har ila yau",
                "english": "Furthermore / Moreover / In addition",
                "left": "Har ila yau",
                "right": "Furthermore / Moreover / In addition"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u11-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which relative pronoun refers to a masculine singular antecedent ('the boy WHO came')?",
        "options": [
          "Wanda",
          "Wadda",
          "Waɗanda",
          "Wace"
        ],
        "correctAnswer": "Wanda",
        "explanation": "'Wanda' is the masculine singular relative pronoun ('yaron da ya zo' or 'yaro wanda ya zo'). 'Wadda' is feminine singular, and 'Waɗanda' is plural."
      },
      {
        "id": "ha-u11-l1-q2",
        "type": "matching",
        "prompt": "Match Hausa relative pronouns with their grammatical agreement:",
        "pairs": [
          {
            "native": "Wanda",
            "english": "Who / which (Masculine Singular)",
            "left": "Wanda",
            "right": "Who / which (Masculine Singular)"
          },
          {
            "native": "Wadda",
            "english": "Who / which (Feminine Singular)",
            "left": "Wadda",
            "right": "Who / which (Feminine Singular)"
          },
          {
            "native": "Waɗanda",
            "english": "Who / which (Plural all genders)",
            "left": "Waɗanda",
            "right": "Who / which (Plural all genders)"
          },
          {
            "native": "Abin da",
            "english": "That which / What (Neuter / Thing)",
            "left": "Abin da",
            "right": "That which / What (Neuter / Thing)"
          }
        ]
      },
      {
        "id": "ha-u11-l1-q3",
        "type": "fill_blank",
        "sentence": "In conditional sentences ('If it rains, we will stay home'), Hausa pairs 'Idan' with '___': 'Idan ruwa ya yi, ___ za mu zauna a gida'.",
        "missingWord": "to",
        "options": [
          "to",
          "kuma",
          "amma",
          "saboda"
        ],
        "correctAnswer": "to",
        "explanation": "'Idan ... to' or 'In ... to' is the standard correlative conditional construction ('If ... then')."
      },
      {
        "id": "ha-u11-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Idan ka yi karatu sosai, to za ka ci jarrabawa' (If you study well, then you will pass the exam):",
        "tokens": [
          "Idan",
          "ka",
          "yi",
          "karatu",
          "sosai,",
          "to",
          "za",
          "ka",
          "ci",
          "jarrabawa"
        ],
        "correctTokens": [
          "Idan",
          "ka",
          "yi",
          "karatu",
          "sosai,",
          "to",
          "za",
          "ka",
          "ci",
          "jarrabawa"
        ]
      },
      {
        "id": "ha-u11-l1-q5",
        "type": "audio_listen",
        "phrase": "An gina sabuwar asibiti a cikin garinmu",
        "prompt": "Listen to the passive construction. What does 'An gina...' express?",
        "options": [
          "Passive voice: 'A new hospital was built in our town'",
          "Future plan: 'We will build a new hospital'",
          "Past habitual: 'They used to build hospitals'",
          "Negative statement: 'No hospital was built'"
        ],
        "correctAnswer": "Passive voice: 'A new hospital was built in our town'",
        "explanation": "The impersonal/passive subject marker 'An' (or 'Aka') marks the passive voice ('An gina' = was built)."
      },
      {
        "id": "ha-u11-l1-q6",
        "type": "multiple_choice",
        "prompt": "How does Hausa derive a causative verb (e.g., 'to cause to enter / bring in' from 'shiga' [enter])?",
        "options": [
          "Shigar da",
          "Shigowa",
          "Shigewa",
          "Shigi"
        ],
        "correctAnswer": "Shigar da",
        "explanation": "Adding '-r da' to the verb root creates the causative/transitive grade (grade 5): 'shiga' (enter) -> 'shigar da' (bring in / introduce)."
      },
      {
        "id": "ha-u11-l1-q7",
        "type": "matching",
        "prompt": "Match simple verbs with their causative (-r da) derivations:",
        "pairs": [
          {
            "native": "Fita (go out)",
            "english": "Fitar da (bring out / expel / export)",
            "left": "Fita (go out)",
            "right": "Fitar da (bring out / expel / export)"
          },
          {
            "native": "Koma (return)",
            "english": "Mayar da (return something / restore)",
            "left": "Koma (return)",
            "right": "Mayar da (return something / restore)"
          },
          {
            "native": "Tashi (rise)",
            "english": "Tashar da (awaken / cause to rise)",
            "left": "Tashi (rise)",
            "right": "Tashar da (awaken / cause to rise)"
          },
          {
            "native": "Ci (eat)",
            "english": "Ciyar da (feed / provide sustenance)",
            "left": "Ci (eat)",
            "right": "Ciyar da (feed / provide sustenance)"
          }
        ]
      },
      {
        "id": "ha-u11-l1-q8",
        "type": "fill_blank",
        "sentence": "To express hypothetical unfulfilled condition ('Had I known, I would not have gone'), Hausa uses 'Da': 'Da na sani, ___ ban je ba'.",
        "missingWord": "da",
        "options": [
          "da",
          "to",
          "kuma",
          "idan"
        ],
        "correctAnswer": "da",
        "explanation": "Counterfactual hypothetical conditionals use 'Da ... da ...' ('Da na sani, da ban je ba')."
      },
      {
        "id": "ha-u11-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Wannan ita ce matar da ta taimake mu' (This is the woman who helped us):",
        "tokens": [
          "Wannan",
          "ita",
          "ce",
          "matar",
          "da",
          "ta",
          "taimake",
          "mu"
        ],
        "correctTokens": [
          "Wannan",
          "ita",
          "ce",
          "matar",
          "da",
          "ta",
          "taimake",
          "mu"
        ]
      },
      {
        "id": "ha-u11-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the function of the subjunctive particle (e.g., 'Ina son ya tafi')?",
        "options": [
          "To express desire, necessity, or purpose in subordinate clauses",
          "To mark completed historical events",
          "To express negative physical actions",
          "To ask mathematical questions"
        ],
        "correctAnswer": "To express desire, necessity, or purpose in subordinate clauses",
        "explanation": "The subjunctive (ya/ta/su without tense aspect auxiliaries) expresses modal subordination: wishes, commands, and intentions."
      },
      {
        "id": "ha-u11-l1-q11",
        "type": "audio_listen",
        "phrase": "Dole ne mu kare muhallinmu",
        "prompt": "Listen to the statement of necessity. What does it urge?",
        "options": [
          "It is necessary that we protect our environment",
          "We must clean our bedrooms",
          "We should plant trees tomorrow",
          "The environment is clean and safe"
        ],
        "correctAnswer": "It is necessary that we protect our environment",
        "explanation": "'Dole ne...' expresses strict necessity/obligation: 'It is necessary that we protect our environment (muhalli)'."
      },
      {
        "id": "ha-u11-l1-q12",
        "type": "matching",
        "prompt": "Match modal expressions of obligation and permission:",
        "pairs": [
          {
            "native": "Dole ne",
            "english": "It is mandatory / necessary",
            "left": "Dole ne",
            "right": "It is mandatory / necessary"
          },
          {
            "native": "Ya kamata",
            "english": "It is proper / appropriate / ought to",
            "left": "Ya kamata",
            "right": "It is proper / appropriate / ought to"
          },
          {
            "native": "Za a iya",
            "english": "It is possible / One can",
            "left": "Za a iya",
            "right": "It is possible / One can"
          },
          {
            "native": "Bai halatta ba",
            "english": "It is forbidden / unlawful",
            "left": "Bai halatta ba",
            "right": "Bai halatta ba"
          }
        ]
      },
      {
        "id": "ha-u11-l1-q13",
        "type": "fill_blank",
        "sentence": "To say 'Although it was late, he came', Hausa uses 'Ko da yake': '___ dare ya yi, ya zo'.",
        "missingWord": "Ko da yake",
        "options": [
          "Ko da yake",
          "Domin",
          "Kafin",
          "Bayan"
        ],
        "correctAnswer": "Ko da yake",
        "explanation": "'Ko da yake' introduces a concession clause meaning 'Although / Even though'."
      },
      {
        "id": "ha-u11-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Aka zabi sabon shugaba' (A new leader was elected):",
        "tokens": [
          "Aka",
          "zabi",
          "sabon",
          "shugaba"
        ],
        "correctTokens": [
          "Aka",
          "zabi",
          "sabon",
          "shugaba"
        ]
      },
      {
        "id": "ha-u11-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does the connective 'koda shike' or 'koda yake' express syntactically?",
        "options": [
          "Concession (Although / Even though)",
          "Strict condition (Only if)",
          "Cause (Because)",
          "Time (While)"
        ],
        "correctAnswer": "Concession (Although / Even though)",
        "explanation": "'Ko da yake' functions as a concessive subordinator equivalent to 'although / albeit'."
      },
      {
        "id": "ha-u11-l1-q16",
        "type": "audio_listen",
        "phrase": "Ba wai don kudi ba, sai don gaskiya",
        "prompt": "Listen to the sophisticated clause. What is the speaker emphasizing?",
        "options": [
          "Not for the sake of money, but solely for truth",
          "Money cannot buy truth",
          "We spent all the money honestly",
          "Whoever has money knows the truth"
        ],
        "correctAnswer": "Not for the sake of money, but solely for truth",
        "explanation": "'Ba wai don... ba, sai don...' is an advanced rhetorical pattern: 'Not because of X, but rather for Y'."
      },
      {
        "id": "ha-u11-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is the meaning of 'Kada a manta' in formal discourse?",
        "options": [
          "Lest it be forgotten / Let it not be forgotten",
          "Never speak aloud",
          "Remember everything",
          "Do not write down"
        ],
        "correctAnswer": "Lest it be forgotten / Let it not be forgotten",
        "explanation": "'Kada a manta' is an impersonal negative subjunctive meaning 'Let it not be forgotten / Lest we forget'."
      },
      {
        "id": "ha-u11-l1-q18",
        "type": "fill_blank",
        "sentence": "When connecting two simultaneous actions ('While he was singing, she danced'), Hausa uses: '___ yana waka, tana rawa'.",
        "missingWord": "Yayin da",
        "options": [
          "Yayin da",
          "Amma",
          "Domin",
          "Koda"
        ],
        "correctAnswer": "Yayin da",
        "explanation": "'Yayin da' or 'A lokacin da' introduces simultaneous ongoing clauses ('While / During the time that')."
      },
      {
        "id": "ha-u11-l1-q19",
        "type": "multiple_choice",
        "prompt": "In Hausa linguistic terminology, what is a complex sentence called?",
        "options": [
          "Jumla mai haɗa-haɗa / Jumla mai sarƙaƙiya",
          "Jumla maras tushe",
          "Kalma daya",
          "Haruffa"
        ],
        "correctAnswer": "Jumla mai haɗa-haɗa / Jumla mai sarƙaƙiya",
        "explanation": "'Jumla mai haɗa-haɗa' or 'jumla sarƙaƙƙiya' designates a complex or compound-complex sentence structure."
      },
      {
        "id": "ha-u11-l1-q20",
        "type": "matching",
        "prompt": "Match Hausa subordinating expressions with their meanings:",
        "pairs": [
          {
            "native": "Matukar",
            "english": "As long as / Provided that",
            "left": "Matukar",
            "right": "As long as / Provided that"
          },
          {
            "native": "Maimakon",
            "english": "Instead of / In lieu of",
            "left": "Maimakon",
            "right": "Instead of / In lieu of"
          },
          {
            "native": "Tamkar",
            "english": "Just like / As if",
            "left": "Tamkar",
            "right": "Just like / As if"
          },
          {
            "native": "Har ila yau",
            "english": "Furthermore / Moreover / In addition",
            "left": "Har ila yau",
            "right": "Furthermore / Moreover / In addition"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-12",
    "unitId": "ha-unit-12",
    "unitNumber": 12,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 12: Introduction to Ajami Script (Rubutun Ajami)",
    "subtitle": "History, reading/writing Hausa in Arabic-derived script (Ajami), and Boko vs. Ajami orthographic comparison.",
    "icon": "Edit3",
    "color": "#059669",
    "lessons": [
      {
        "id": "ha-u12-l1",
        "title": "Lesson 1: Tarihi da Ka'idojin Rubutun Ajami (Ajami Paleography & Orthography)",
        "description": "Explore centuries of indigenous Hausa literary tradition written in Ajami, letter modifications for ɓ, ɗ, ƙ, and text transcription.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u12-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the historical 'Ajami' script used in Northern Nigeria?",
            "options": [
              "Writing the Hausa language using modified Arabic script",
              "An ancient Egyptian hieroglyphic script",
              "A Latin shorthand system invented by colonial officers",
              "A pictographic wall-painting code"
            ],
            "correctAnswer": "Writing the Hausa language using modified Arabic script",
            "explanation": "Ajami refers to writing indigenous African languages (such as Hausa, Fula, and Wolof) using adapted Arabic characters."
          },
          {
            "id": "ha-u12-l1-q2",
            "type": "matching",
            "prompt": "Match the writing systems of the Hausa language with their historical contexts:",
            "pairs": [
              {
                "native": "Rubutun Ajami",
                "english": "Arabic-derived script (pre-colonial to present, religious & literary poetry)",
                "left": "Rubutun Ajami",
                "right": "Arabic-derived script (pre-colonial to present, religious & literary poetry)"
              },
              {
                "native": "Rubutun Boko",
                "english": "Latin-based script (introduced early 20th century, official national orthography)",
                "left": "Rubutun Boko",
                "right": "Latin-based script (introduced early 20th century, official national orthography)"
              },
              {
                "native": "Waka a Ajami",
                "english": "Classical manuscripts and scholarly poetic commentaries in Ajami",
                "left": "Waka a Ajami",
                "right": "Classical manuscripts and scholarly poetic commentaries in Ajami"
              },
              {
                "native": "Takardar kudi",
                "english": "Nigerian Naira notes featuring Ajami script for vernacular financial inclusion",
                "left": "Takardar kudi",
                "right": "Nigerian Naira notes featuring Ajami script for vernacular financial inclusion"
              }
            ]
          },
          {
            "id": "ha-u12-l1-q3",
            "type": "fill_blank",
            "sentence": "Because standard Arabic lacks consonants like 'ɓ', 'ɗ', and 'ts', Hausa scribes modified characters by adding ___.",
            "missingWord": "dots (nuqta)",
            "options": [
              "dots (nuqta)",
              "vowels",
              "circles",
              "hyphens"
            ],
            "correctAnswer": "dots (nuqta)",
            "explanation": "Scribes systematically added extra diacritic dots (e.g. 3 dots above or beneath letters) to represent unique Hausa phonemes."
          },
          {
            "id": "ha-u12-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words: 'Ajami tsohon rubutu ne a kasar Hausa' (Ajami is an ancient script in Hausaland):",
            "tokens": [
              "Ajami",
              "tsohon",
              "rubutu",
              "ne",
              "a",
              "kasar",
              "Hausa"
            ],
            "correctTokens": [
              "Ajami",
              "tsohon",
              "rubutu",
              "ne",
              "a",
              "kasar",
              "Hausa"
            ]
          },
          {
            "id": "ha-u12-l1-q5",
            "type": "audio_listen",
            "phrase": "Wali Danmasani da Danmarina sun rubuta kasidu a Ajami",
            "prompt": "Listen to the historical fact. Who were Danmasani and Danmarina?",
            "options": [
              "Renowned 17th-century Katsina scholars and poets who wrote in Ajami",
              "Colonial administrators in Zaria",
              "Traditional drum makers of Kano",
              "Merchant traders from the Sahara"
            ],
            "correctAnswer": "Renowned 17th-century Katsina scholars and poets who wrote in Ajami",
            "explanation": "Wali Danmasani and Danmarina were pioneer 17th-century scholars in Katsina who composed foundational poetry in Ajami."
          },
          {
            "id": "ha-u12-l1-q6",
            "type": "multiple_choice",
            "prompt": "In which direction is Hausa Ajami script read and written?",
            "options": [
              "Right to left (Dama zuwa hagu)",
              "Left to right (Hagu zuwa dama)",
              "Top to bottom vertically",
              "Bottom to top"
            ],
            "correctAnswer": "Right to left (Dama zuwa hagu)",
            "explanation": "Like the Arabic script from which it derives, Ajami is written and read from right to left (Dama zuwa hagu)."
          },
          {
            "id": "ha-u12-l1-q7",
            "type": "matching",
            "prompt": "Match how Hausa vowels are represented in Ajami manuscripts:",
            "pairs": [
              {
                "native": "Fatha (Wasali a sama)",
                "english": "Short vowel 'a'",
                "left": "Fatha (Wasali a sama)",
                "right": "Short vowel 'a'"
              },
              {
                "native": "Kasra (Wasali a kasa)",
                "english": "Short vowel 'i'",
                "left": "Kasra (Wasali a kasa)",
                "right": "Short vowel 'i'"
              },
              {
                "native": "Damma (Lankwasa a sama)",
                "english": "Short vowel 'u'",
                "left": "Damma (Lankwasa a sama)",
                "right": "Short vowel 'u'"
              },
              {
                "native": "Imala (Digon karkata)",
                "english": "Vowel 'e' or 'o' (vowel tilting)",
                "left": "Imala (Digon karkata)",
                "right": "Vowel 'e' or 'o' (vowel tilting)"
              }
            ]
          },
          {
            "id": "ha-u12-l1-q8",
            "type": "fill_blank",
            "sentence": "The Latin-based orthography implemented in the early 20th century in Nigeria is formally known as '___'.",
            "missingWord": "Boko",
            "options": [
              "Boko",
              "Ajami",
              "Naskh",
              "Thuluth"
            ],
            "correctAnswer": "Boko",
            "explanation": "'Boko' designates western/Latin script education and orthography in Hausa."
          },
          {
            "id": "ha-u12-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Malamai suna karanta rubutun Ajami' (Scholars read Ajami manuscripts):",
            "tokens": [
              "Malamai",
              "suna",
              "karanta",
              "rubutun",
              "Ajami"
            ],
            "correctTokens": [
              "Malamai",
              "suna",
              "karanta",
              "rubutun",
              "Ajami"
            ]
          },
          {
            "id": "ha-u12-l1-q10",
            "type": "multiple_choice",
            "prompt": "Why was Ajami preserved on Nigerian currency (Naira banknotes)?",
            "options": [
              "To allow millions of non-Western literate citizens to identify currency values",
              "As a decorative watermark pattern",
              "Because Latin script was banned",
              "To satisfy international banks in Cairo"
            ],
            "correctAnswer": "To allow millions of non-Western literate citizens to identify currency values",
            "explanation": "Ajami on Naira banknotes ensures financial inclusion for citizens literate in Ajami rather than Latin Boko script."
          },
          {
            "id": "ha-u12-l1-q11",
            "type": "audio_listen",
            "phrase": "Rubutun Ajami babban gado ne na ilimin gargajiya",
            "prompt": "Listen to the statement. What does it say about Ajami?",
            "options": [
              "Ajami script is a monumental heritage of traditional scholarship",
              "Ajami is no longer used by anyone",
              "Ajami was brought from South America",
              "Ajami can only be read with special glasses"
            ],
            "correctAnswer": "Ajami script is a monumental heritage of traditional scholarship",
            "explanation": "'Rubutun Ajami babban gado ne na ilimin gargajiya' = Ajami is a great heritage of indigenous education."
          },
          {
            "id": "ha-u12-l1-q12",
            "type": "matching",
            "prompt": "Match Hausa phonemes with their Ajami orthographic representations:",
            "pairs": [
              {
                "native": "Ƙ (ejective)",
                "english": "Represented using the Arabic Qaf (ق)",
                "left": "Ƙ (ejective)",
                "right": "Represented using the Arabic Qaf (ق)"
              },
              {
                "native": "Ts (ejective sibilant)",
                "english": "Represented using Arabic Ta or Sad with added diacritics",
                "left": "Ts (ejective sibilant)",
                "right": "Represented using Arabic Ta or Sad with added diacritics"
              },
              {
                "native": "G (voiced velar plosive)",
                "english": "Represented using Kaf with three dots or Jim variants",
                "left": "G (voiced velar plosive)",
                "right": "Represented using Kaf with three dots or Jim variants"
              },
              {
                "native": "C (voiceless palatal)",
                "english": "Represented using Jim (ج) or Shin (ش) modified",
                "left": "C (voiceless palatal)",
                "right": "Represented using Jim (ج) or Shin (ش) modified"
              }
            ]
          },
          {
            "id": "ha-u12-l1-q13",
            "type": "fill_blank",
            "sentence": "The calligraphic style most commonly used in West African and Hausa Ajami manuscripts is the ___ script.",
            "missingWord": "Maghribi",
            "options": [
              "Maghribi",
              "Kufic",
              "Diwani",
              "Nastaliq"
            ],
            "correctAnswer": "Maghribi",
            "explanation": "West African Ajami and Quranic manuscripts predominantly employ variants of the Maghribi / Sudani calligraphic hand."
          },
          {
            "id": "ha-u12-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Akwai rubuce-rubucen wakoki a Ajami' (There are written poems in Ajami):",
            "tokens": [
              "Akwai",
              "rubuce-rubucen",
              "wakoki",
              "a",
              "Ajami"
            ],
            "correctTokens": [
              "Akwai",
              "rubuce-rubucen",
              "wakoki",
              "a",
              "Ajami"
            ]
          },
          {
            "id": "ha-u12-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is the primary academic benefit of transcribing historical Ajami texts into Boko?",
            "options": [
              "It makes centuries of historical, medical, and legal documents accessible to modern researchers worldwide",
              "It permanently erases the original manuscripts",
              "It proves that Hausa has no grammar",
              "It replaces the need to teach language"
            ],
            "correctAnswer": "It makes centuries of historical, medical, and legal documents accessible to modern researchers worldwide",
            "explanation": "Transliteration preserves historical memory and unlocks pre-colonial African intellectual archives."
          },
          {
            "id": "ha-u12-l1-q16",
            "type": "audio_listen",
            "phrase": "Wakar Ya Yabon Ubangiji",
            "prompt": "Listen to the genre title. What kind of Ajami poem is this?",
            "options": [
              "A poem in praise of God Almighty",
              "A wedding song for youth",
              "A warrior war chant",
              "A song about horse riding"
            ],
            "correctAnswer": "A poem in praise of God Almighty",
            "explanation": "'Wakar yabon Ubangiji' is a hymn/poem of devotion and praise of God, commonly penned in Ajami."
          },
          {
            "id": "ha-u12-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is an inkhorn or traditional ink called in northern manuscript culture?",
            "options": [
              "Tadawa (Ink)",
              "Alkalami (Reed pen)",
              "Takarda (Paper)",
              "Alli (Chalk)"
            ],
            "correctAnswer": "Tadawa (Ink)",
            "explanation": "'Tadawa' is traditional soot/gum ink used by scholars; 'alkalami' is the reed pen."
          },
          {
            "id": "ha-u12-l1-q18",
            "type": "fill_blank",
            "sentence": "The wooden slate used by traditional students to practice writing Ajami is called '___'.",
            "missingWord": "Allo",
            "options": [
              "Allo",
              "Tebur",
              "Kujera",
              "Daki"
            ],
            "correctAnswer": "Allo",
            "explanation": "'Allo' is the wooden tablet (slate) used by pupils to write and wash away daily texts."
          },
          {
            "id": "ha-u12-l1-q19",
            "type": "multiple_choice",
            "prompt": "Which 19th-century female scholar, daughter of Usman dan Fodio, composed prolific poetry in Hausa Ajami, Fula, and Arabic?",
            "options": [
              "Nana Asma'u",
              "Queen Amina",
              "Daurama",
              "Gimbia"
            ],
            "correctAnswer": "Nana Asma'u",
            "explanation": "Nana Asma'u (1793–1864) was a celebrated educator, poet, and scholar who composed vital educational literature in Ajami."
          },
          {
            "id": "ha-u12-l1-q20",
            "type": "matching",
            "prompt": "Match paleographic terminology used in Hausa manuscript studies:",
            "pairs": [
              {
                "native": "Allo",
                "english": "Wooden study tablet",
                "left": "Allo",
                "right": "Wooden study tablet"
              },
              {
                "native": "Tadawa",
                "english": "Soot-based writing ink",
                "left": "Tadawa",
                "right": "Soot-based writing ink"
              },
              {
                "native": "Alkalami",
                "english": "Carved reed writing pen",
                "left": "Alkalami",
                "right": "Carved reed writing pen"
              },
              {
                "native": "Fassara",
                "english": "Translation / Exegesis",
                "left": "Fassara",
                "right": "Translation / Exegesis"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u12-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the historical 'Ajami' script used in Northern Nigeria?",
        "options": [
          "Writing the Hausa language using modified Arabic script",
          "An ancient Egyptian hieroglyphic script",
          "A Latin shorthand system invented by colonial officers",
          "A pictographic wall-painting code"
        ],
        "correctAnswer": "Writing the Hausa language using modified Arabic script",
        "explanation": "Ajami refers to writing indigenous African languages (such as Hausa, Fula, and Wolof) using adapted Arabic characters."
      },
      {
        "id": "ha-u12-l1-q2",
        "type": "matching",
        "prompt": "Match the writing systems of the Hausa language with their historical contexts:",
        "pairs": [
          {
            "native": "Rubutun Ajami",
            "english": "Arabic-derived script (pre-colonial to present, religious & literary poetry)",
            "left": "Rubutun Ajami",
            "right": "Arabic-derived script (pre-colonial to present, religious & literary poetry)"
          },
          {
            "native": "Rubutun Boko",
            "english": "Latin-based script (introduced early 20th century, official national orthography)",
            "left": "Rubutun Boko",
            "right": "Latin-based script (introduced early 20th century, official national orthography)"
          },
          {
            "native": "Waka a Ajami",
            "english": "Classical manuscripts and scholarly poetic commentaries in Ajami",
            "left": "Waka a Ajami",
            "right": "Classical manuscripts and scholarly poetic commentaries in Ajami"
          },
          {
            "native": "Takardar kudi",
            "english": "Nigerian Naira notes featuring Ajami script for vernacular financial inclusion",
            "left": "Takardar kudi",
            "right": "Nigerian Naira notes featuring Ajami script for vernacular financial inclusion"
          }
        ]
      },
      {
        "id": "ha-u12-l1-q3",
        "type": "fill_blank",
        "sentence": "Because standard Arabic lacks consonants like 'ɓ', 'ɗ', and 'ts', Hausa scribes modified characters by adding ___.",
        "missingWord": "dots (nuqta)",
        "options": [
          "dots (nuqta)",
          "vowels",
          "circles",
          "hyphens"
        ],
        "correctAnswer": "dots (nuqta)",
        "explanation": "Scribes systematically added extra diacritic dots (e.g. 3 dots above or beneath letters) to represent unique Hausa phonemes."
      },
      {
        "id": "ha-u12-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words: 'Ajami tsohon rubutu ne a kasar Hausa' (Ajami is an ancient script in Hausaland):",
        "tokens": [
          "Ajami",
          "tsohon",
          "rubutu",
          "ne",
          "a",
          "kasar",
          "Hausa"
        ],
        "correctTokens": [
          "Ajami",
          "tsohon",
          "rubutu",
          "ne",
          "a",
          "kasar",
          "Hausa"
        ]
      },
      {
        "id": "ha-u12-l1-q5",
        "type": "audio_listen",
        "phrase": "Wali Danmasani da Danmarina sun rubuta kasidu a Ajami",
        "prompt": "Listen to the historical fact. Who were Danmasani and Danmarina?",
        "options": [
          "Renowned 17th-century Katsina scholars and poets who wrote in Ajami",
          "Colonial administrators in Zaria",
          "Traditional drum makers of Kano",
          "Merchant traders from the Sahara"
        ],
        "correctAnswer": "Renowned 17th-century Katsina scholars and poets who wrote in Ajami",
        "explanation": "Wali Danmasani and Danmarina were pioneer 17th-century scholars in Katsina who composed foundational poetry in Ajami."
      },
      {
        "id": "ha-u12-l1-q6",
        "type": "multiple_choice",
        "prompt": "In which direction is Hausa Ajami script read and written?",
        "options": [
          "Right to left (Dama zuwa hagu)",
          "Left to right (Hagu zuwa dama)",
          "Top to bottom vertically",
          "Bottom to top"
        ],
        "correctAnswer": "Right to left (Dama zuwa hagu)",
        "explanation": "Like the Arabic script from which it derives, Ajami is written and read from right to left (Dama zuwa hagu)."
      },
      {
        "id": "ha-u12-l1-q7",
        "type": "matching",
        "prompt": "Match how Hausa vowels are represented in Ajami manuscripts:",
        "pairs": [
          {
            "native": "Fatha (Wasali a sama)",
            "english": "Short vowel 'a'",
            "left": "Fatha (Wasali a sama)",
            "right": "Short vowel 'a'"
          },
          {
            "native": "Kasra (Wasali a kasa)",
            "english": "Short vowel 'i'",
            "left": "Kasra (Wasali a kasa)",
            "right": "Short vowel 'i'"
          },
          {
            "native": "Damma (Lankwasa a sama)",
            "english": "Short vowel 'u'",
            "left": "Damma (Lankwasa a sama)",
            "right": "Short vowel 'u'"
          },
          {
            "native": "Imala (Digon karkata)",
            "english": "Vowel 'e' or 'o' (vowel tilting)",
            "left": "Imala (Digon karkata)",
            "right": "Vowel 'e' or 'o' (vowel tilting)"
          }
        ]
      },
      {
        "id": "ha-u12-l1-q8",
        "type": "fill_blank",
        "sentence": "The Latin-based orthography implemented in the early 20th century in Nigeria is formally known as '___'.",
        "missingWord": "Boko",
        "options": [
          "Boko",
          "Ajami",
          "Naskh",
          "Thuluth"
        ],
        "correctAnswer": "Boko",
        "explanation": "'Boko' designates western/Latin script education and orthography in Hausa."
      },
      {
        "id": "ha-u12-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Malamai suna karanta rubutun Ajami' (Scholars read Ajami manuscripts):",
        "tokens": [
          "Malamai",
          "suna",
          "karanta",
          "rubutun",
          "Ajami"
        ],
        "correctTokens": [
          "Malamai",
          "suna",
          "karanta",
          "rubutun",
          "Ajami"
        ]
      },
      {
        "id": "ha-u12-l1-q10",
        "type": "multiple_choice",
        "prompt": "Why was Ajami preserved on Nigerian currency (Naira banknotes)?",
        "options": [
          "To allow millions of non-Western literate citizens to identify currency values",
          "As a decorative watermark pattern",
          "Because Latin script was banned",
          "To satisfy international banks in Cairo"
        ],
        "correctAnswer": "To allow millions of non-Western literate citizens to identify currency values",
        "explanation": "Ajami on Naira banknotes ensures financial inclusion for citizens literate in Ajami rather than Latin Boko script."
      },
      {
        "id": "ha-u12-l1-q11",
        "type": "audio_listen",
        "phrase": "Rubutun Ajami babban gado ne na ilimin gargajiya",
        "prompt": "Listen to the statement. What does it say about Ajami?",
        "options": [
          "Ajami script is a monumental heritage of traditional scholarship",
          "Ajami is no longer used by anyone",
          "Ajami was brought from South America",
          "Ajami can only be read with special glasses"
        ],
        "correctAnswer": "Ajami script is a monumental heritage of traditional scholarship",
        "explanation": "'Rubutun Ajami babban gado ne na ilimin gargajiya' = Ajami is a great heritage of indigenous education."
      },
      {
        "id": "ha-u12-l1-q12",
        "type": "matching",
        "prompt": "Match Hausa phonemes with their Ajami orthographic representations:",
        "pairs": [
          {
            "native": "Ƙ (ejective)",
            "english": "Represented using the Arabic Qaf (ق)",
            "left": "Ƙ (ejective)",
            "right": "Represented using the Arabic Qaf (ق)"
          },
          {
            "native": "Ts (ejective sibilant)",
            "english": "Represented using Arabic Ta or Sad with added diacritics",
            "left": "Ts (ejective sibilant)",
            "right": "Represented using Arabic Ta or Sad with added diacritics"
          },
          {
            "native": "G (voiced velar plosive)",
            "english": "Represented using Kaf with three dots or Jim variants",
            "left": "G (voiced velar plosive)",
            "right": "Represented using Kaf with three dots or Jim variants"
          },
          {
            "native": "C (voiceless palatal)",
            "english": "Represented using Jim (ج) or Shin (ش) modified",
            "left": "C (voiceless palatal)",
            "right": "Represented using Jim (ج) or Shin (ش) modified"
          }
        ]
      },
      {
        "id": "ha-u12-l1-q13",
        "type": "fill_blank",
        "sentence": "The calligraphic style most commonly used in West African and Hausa Ajami manuscripts is the ___ script.",
        "missingWord": "Maghribi",
        "options": [
          "Maghribi",
          "Kufic",
          "Diwani",
          "Nastaliq"
        ],
        "correctAnswer": "Maghribi",
        "explanation": "West African Ajami and Quranic manuscripts predominantly employ variants of the Maghribi / Sudani calligraphic hand."
      },
      {
        "id": "ha-u12-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Akwai rubuce-rubucen wakoki a Ajami' (There are written poems in Ajami):",
        "tokens": [
          "Akwai",
          "rubuce-rubucen",
          "wakoki",
          "a",
          "Ajami"
        ],
        "correctTokens": [
          "Akwai",
          "rubuce-rubucen",
          "wakoki",
          "a",
          "Ajami"
        ]
      },
      {
        "id": "ha-u12-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is the primary academic benefit of transcribing historical Ajami texts into Boko?",
        "options": [
          "It makes centuries of historical, medical, and legal documents accessible to modern researchers worldwide",
          "It permanently erases the original manuscripts",
          "It proves that Hausa has no grammar",
          "It replaces the need to teach language"
        ],
        "correctAnswer": "It makes centuries of historical, medical, and legal documents accessible to modern researchers worldwide",
        "explanation": "Transliteration preserves historical memory and unlocks pre-colonial African intellectual archives."
      },
      {
        "id": "ha-u12-l1-q16",
        "type": "audio_listen",
        "phrase": "Wakar Ya Yabon Ubangiji",
        "prompt": "Listen to the genre title. What kind of Ajami poem is this?",
        "options": [
          "A poem in praise of God Almighty",
          "A wedding song for youth",
          "A warrior war chant",
          "A song about horse riding"
        ],
        "correctAnswer": "A poem in praise of God Almighty",
        "explanation": "'Wakar yabon Ubangiji' is a hymn/poem of devotion and praise of God, commonly penned in Ajami."
      },
      {
        "id": "ha-u12-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is an inkhorn or traditional ink called in northern manuscript culture?",
        "options": [
          "Tadawa (Ink)",
          "Alkalami (Reed pen)",
          "Takarda (Paper)",
          "Alli (Chalk)"
        ],
        "correctAnswer": "Tadawa (Ink)",
        "explanation": "'Tadawa' is traditional soot/gum ink used by scholars; 'alkalami' is the reed pen."
      },
      {
        "id": "ha-u12-l1-q18",
        "type": "fill_blank",
        "sentence": "The wooden slate used by traditional students to practice writing Ajami is called '___'.",
        "missingWord": "Allo",
        "options": [
          "Allo",
          "Tebur",
          "Kujera",
          "Daki"
        ],
        "correctAnswer": "Allo",
        "explanation": "'Allo' is the wooden tablet (slate) used by pupils to write and wash away daily texts."
      },
      {
        "id": "ha-u12-l1-q19",
        "type": "multiple_choice",
        "prompt": "Which 19th-century female scholar, daughter of Usman dan Fodio, composed prolific poetry in Hausa Ajami, Fula, and Arabic?",
        "options": [
          "Nana Asma'u",
          "Queen Amina",
          "Daurama",
          "Gimbia"
        ],
        "correctAnswer": "Nana Asma'u",
        "explanation": "Nana Asma'u (1793–1864) was a celebrated educator, poet, and scholar who composed vital educational literature in Ajami."
      },
      {
        "id": "ha-u12-l1-q20",
        "type": "matching",
        "prompt": "Match paleographic terminology used in Hausa manuscript studies:",
        "pairs": [
          {
            "native": "Allo",
            "english": "Wooden study tablet",
            "left": "Allo",
            "right": "Wooden study tablet"
          },
          {
            "native": "Tadawa",
            "english": "Soot-based writing ink",
            "left": "Tadawa",
            "right": "Soot-based writing ink"
          },
          {
            "native": "Alkalami",
            "english": "Carved reed writing pen",
            "left": "Alkalami",
            "right": "Carved reed writing pen"
          },
          {
            "native": "Fassara",
            "english": "Translation / Exegesis",
            "left": "Fassara",
            "right": "Translation / Exegesis"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-13",
    "unitId": "ha-unit-13",
    "unitNumber": 13,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 13: Formal and Creative Composition (Rubutun Wasika da Zance)",
    "subtitle": "Writing formal (aiki) and informal letters, salutations, essay organization, and contemporary discursive themes.",
    "icon": "FileText",
    "color": "#059669",
    "lessons": [
      {
        "id": "ha-u13-l1",
        "title": "Lesson 1: Insha'i, Wasikun Aiki da Mukalu (Formal Insha & Epistolary Writing)",
        "description": "Master formal business correspondence (Wasikar Aiki), standard civic essays (Insha'i), debate structure, and editorial rhetoric.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u13-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the standard formal opening salutation in an official Hausa business letter?",
            "options": [
              "Zuwa ga Mai Girma...",
              "Sannu abokina!",
              "Ina kwana kawata?",
              "Barka da yamma dai"
            ],
            "correctAnswer": "Zuwa ga Mai Girma...",
            "explanation": "'Zuwa ga Mai Girma...' (To the Honorable / Respected...) is the standard formal opening in Hausa epistolary conventions."
          },
          {
            "id": "ha-u13-l1-q2",
            "type": "matching",
            "prompt": "Match epistolary components in Hausa letter writing:",
            "pairs": [
              {
                "native": "Adireshi",
                "english": "Address (top right for writer, top left for recipient in formal letters)",
                "left": "Adireshi",
                "right": "Address (top right for writer, top left for recipient in formal letters)"
              },
              {
                "native": "Kwanan wata",
                "english": "Date",
                "left": "Kwanan wata",
                "right": "Date"
              },
              {
                "native": "Taken wasika",
                "english": "Letter subject / Title (bolded/underlined)",
                "left": "Taken wasika",
                "right": "Letter subject / Title (bolded/underlined)"
              },
              {
                "native": "Kammalawa",
                "english": "Formal valediction and signature signoff",
                "left": "Kammalawa",
                "right": "Formal valediction and signature signoff"
              }
            ]
          },
          {
            "id": "ha-u13-l1-q3",
            "type": "fill_blank",
            "sentence": "A formal signoff formula for an official letter is: 'Ni ne naku mai biyayya, ___' (Yours faithfully / obediently).",
            "missingWord": "mai biyayya",
            "options": [
              "mai biyayya",
              "aboki",
              "baba",
              "bako"
            ],
            "correctAnswer": "mai biyayya",
            "explanation": "'Ni ne naku mai biyayya' is the traditional formal closing equivalent to 'Yours obediently / faithfully'."
          },
          {
            "id": "ha-u13-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the title: 'Neman Aikin Koyarwa a Makarantar Sakandare' (Application for a Teaching Position in Secondary School):",
            "tokens": [
              "Neman",
              "Aikin",
              "Koyarwa",
              "a",
              "Makarantar",
              "Sakandare"
            ],
            "correctTokens": [
              "Neman",
              "Aikin",
              "Koyarwa",
              "a",
              "Makarantar",
              "Sakandare"
            ]
          },
          {
            "id": "ha-u13-l1-q5",
            "type": "audio_listen",
            "phrase": "Bayan gaisuwa mai tarin yawa da fatan alheri",
            "prompt": "Listen to the opening formula. What does it convey?",
            "options": [
              "After abundant greetings and wishing you every good fortune",
              "I am demanding immediate payment of my debts",
              "We regret to inform you that the meeting is cancelled",
              "Please return my book by tomorrow"
            ],
            "correctAnswer": "After abundant greetings and wishing you every good fortune",
            "explanation": "'Bayan gaisuwa mai tarin yawa da fatan alheri' is the classic polite opening formula in Hausa letter composition."
          },
          {
            "id": "ha-u13-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is an essay called in Hausa curriculum standards?",
            "options": [
              "Insha'i",
              "Tatsuniya",
              "Wakar baka",
              "Almara"
            ],
            "correctAnswer": "Insha'i",
            "explanation": "'Insha'i' (from Arabic Insha) is the formal term for an essay or continuous written composition."
          },
          {
            "id": "ha-u13-l1-q7",
            "type": "matching",
            "prompt": "Match essay composition genres (Nau'o'in Insha'i):",
            "pairs": [
              {
                "native": "Insha'i mai bayani",
                "english": "Expository / Explanatory essay",
                "left": "Insha'i mai bayani",
                "right": "Expository / Explanatory essay"
              },
              {
                "native": "Insha'i mai siffantawa",
                "english": "Descriptive essay",
                "left": "Insha'i mai siffantawa",
                "right": "Descriptive essay"
              },
              {
                "native": "Insha'i mai labari",
                "english": "Narrative essay",
                "left": "Insha'i mai labari",
                "right": "Narrative essay"
              },
              {
                "native": "Insha'i mai gardama / muhawara",
                "english": "Argumentative / Persuasive / Debate essay",
                "left": "Insha'i mai gardama / muhawara",
                "right": "Argumentative / Persuasive / Debate essay"
              }
            ]
          },
          {
            "id": "ha-u13-l1-q8",
            "type": "fill_blank",
            "sentence": "The introductory paragraph of an essay is called '___' in Hausa literary analysis.",
            "missingWord": "Shimfida",
            "options": [
              "Shimfida",
              "Kammalawa",
              "Karewa",
              "Tsakiya"
            ],
            "correctAnswer": "Shimfida",
            "explanation": "'Shimfida' (literally: laying out the carpet / foundation) is the introduction of an essay or discourse."
          },
          {
            "id": "ha-u13-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the sentence: 'Ilimin 'ya'ya mata yana da muhimmanci sosai' (Female child education is extremely important):",
            "tokens": [
              "Ilimin",
              "'ya'ya",
              "mata",
              "yana",
              "da",
              "muhimmanci",
              "sosai"
            ],
            "correctTokens": [
              "Ilimin",
              "'ya'ya",
              "mata",
              "yana",
              "da",
              "muhimmanci",
              "sosai"
            ]
          },
          {
            "id": "ha-u13-l1-q10",
            "type": "multiple_choice",
            "prompt": "How do you say 'In conclusion / To sum up' in a formal Hausa essay?",
            "options": [
              "A karshe / A taƙaice",
              "A farko",
              "Ba shakka",
              "Kafin nan"
            ],
            "correctAnswer": "A karshe / A taƙaice",
            "explanation": "'A karshe' (In the end) or 'A taƙaice' (In summary / briefly) introduces the conclusion paragraph."
          },
          {
            "id": "ha-u13-l1-q11",
            "type": "audio_listen",
            "phrase": "Wannan matsala tana barazana ga ci gaban al'umma",
            "prompt": "Listen to the thesis sentence. What does it argue?",
            "options": [
              "This problem poses a threat to the development of society",
              "Our community has solved all its problems",
              "Development requires buying more cars",
              "Young people are traveling abroad"
            ],
            "correctAnswer": "This problem poses a threat to the development of society",
            "explanation": "'Barazana' means threat; 'ci gaban al'umma' means social development."
          },
          {
            "id": "ha-u13-l1-q12",
            "type": "matching",
            "prompt": "Match contemporary civic essay themes in Hausa:",
            "pairs": [
              {
                "native": "Kare muhalli da tsafta",
                "english": "Environmental protection and public sanitation",
                "left": "Kare muhalli da tsafta",
                "right": "Environmental protection and public sanitation"
              },
              {
                "native": "Tattalin arziki da noma",
                "english": "Economy and modern agriculture",
                "left": "Tattalin arziki da noma",
                "right": "Economy and modern agriculture"
              },
              {
                "native": "Hanyoyin magance rashin aikin yi",
                "english": "Strategies for curbing youth unemployment",
                "left": "Hanyoyin magance rashin aikin yi",
                "right": "Strategies for curbing youth unemployment"
              },
              {
                "native": "Tasirin fasahar zamani",
                "english": "The impact of modern information technology",
                "left": "Tasirin fasahar zamani",
                "right": "The impact of modern information technology"
              }
            ]
          },
          {
            "id": "ha-u13-l1-q13",
            "type": "fill_blank",
            "sentence": "When writing an informal letter to an intimate friend, one addresses them warmly as: 'Zuwa ga babban ___' (To my dear friend).",
            "missingWord": "abokina",
            "options": [
              "abokina",
              "shugabana",
              "gwamna",
              "sarki"
            ],
            "correctAnswer": "abokina",
            "explanation": "'Zuwa ga babban abokina' (To my dear/great friend) is standard in informal letters (wasikar sada zumunci)."
          },
          {
            "id": "ha-u13-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Ina rubuta wannan wasika domin sanar da kai' (I am writing this letter to notify you):",
            "tokens": [
              "Ina",
              "rubuta",
              "wannan",
              "wasika",
              "domin",
              "sanar",
              "da",
              "kai"
            ],
            "correctTokens": [
              "Ina",
              "rubuta",
              "wannan",
              "wasika",
              "domin",
              "sanar",
              "da",
              "kai"
            ]
          },
          {
            "id": "ha-u13-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Muhawara' mean in school curriculum activities?",
            "options": [
              "Debate / Formal argumentation",
              "Song competition",
              "Football tournament",
              "Dramatized comedy"
            ],
            "correctAnswer": "Debate / Formal argumentation",
            "explanation": "'Muhawara' is a formal debate between proposing and opposing sides."
          },
          {
            "id": "ha-u13-l1-q16",
            "type": "audio_listen",
            "phrase": "Ina goyon bayan wannan batu saboda dalilai kamar haka",
            "prompt": "Listen to the debater. What stance are they taking?",
            "options": [
              "I support this motion because of the following reasons",
              "I vehemently reject this false motion",
              "I am neutral and do not wish to speak",
              "The debate should be postponed till next week"
            ],
            "correctAnswer": "I support this motion because of the following reasons",
            "explanation": "'Ina goyon bayan...' = I support/stand with this motion; 'dalilai' = reasons."
          },
          {
            "id": "ha-u13-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Wasiƙar neman aiki'?",
            "options": [
              "Job application letter",
              "Resignation letter",
              "Love letter",
              "Invitation to a birthday party"
            ],
            "correctAnswer": "Job application letter",
            "explanation": "'Wasiƙar neman aiki' is an employment application letter."
          },
          {
            "id": "ha-u13-l1-q18",
            "type": "fill_blank",
            "sentence": "The core body paragraphs of an essay containing arguments and examples are termed '___ insha'i'.",
            "missingWord": "Gangar jikin",
            "options": [
              "Gangar jikin",
              "Farkon",
              "Kan",
              "Karshen"
            ],
            "correctAnswer": "Gangar jikin",
            "explanation": "'Gangar jiki' (literally: the torso / main trunk) designates the body paragraphs."
          },
          {
            "id": "ha-u13-l1-q19",
            "type": "multiple_choice",
            "prompt": "Which connective should be used to introduce an opposing perspective ('On the contrary / On the other hand')?",
            "options": [
              "Akasin haka",
              "Haka kuma",
              "Kamar yadda aka sani",
              "Bisa ga dukkan alamu"
            ],
            "correctAnswer": "Akasin haka",
            "explanation": "'Akasin haka' means 'on the contrary / on the other hand'."
          },
          {
            "id": "ha-u13-l1-q20",
            "type": "matching",
            "prompt": "Match formal letter expressions with English equivalents:",
            "pairs": [
              {
                "native": "Ina mai mika godiyata",
                "english": "I hereby express my profound gratitude",
                "left": "Ina mai mika godiyata",
                "right": "I hereby express my profound gratitude"
              },
              {
                "native": "Ina fatan za a duba bukatata",
                "english": "I hope my request will be favorably considered",
                "left": "Ina fatan za a duba bukatata",
                "right": "I hope my request will be favorably considered"
              },
              {
                "native": "Bisa umarnin",
                "english": "Under the directive / order of",
                "left": "Bisa umarnin",
                "right": "Under the directive / order of"
              },
              {
                "native": "Takardar shaidar karatu",
                "english": "Academic credential / Certificate",
                "left": "Takardar shaidar karatu",
                "right": "Academic credential / Certificate"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u13-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the standard formal opening salutation in an official Hausa business letter?",
        "options": [
          "Zuwa ga Mai Girma...",
          "Sannu abokina!",
          "Ina kwana kawata?",
          "Barka da yamma dai"
        ],
        "correctAnswer": "Zuwa ga Mai Girma...",
        "explanation": "'Zuwa ga Mai Girma...' (To the Honorable / Respected...) is the standard formal opening in Hausa epistolary conventions."
      },
      {
        "id": "ha-u13-l1-q2",
        "type": "matching",
        "prompt": "Match epistolary components in Hausa letter writing:",
        "pairs": [
          {
            "native": "Adireshi",
            "english": "Address (top right for writer, top left for recipient in formal letters)",
            "left": "Adireshi",
            "right": "Address (top right for writer, top left for recipient in formal letters)"
          },
          {
            "native": "Kwanan wata",
            "english": "Date",
            "left": "Kwanan wata",
            "right": "Date"
          },
          {
            "native": "Taken wasika",
            "english": "Letter subject / Title (bolded/underlined)",
            "left": "Taken wasika",
            "right": "Letter subject / Title (bolded/underlined)"
          },
          {
            "native": "Kammalawa",
            "english": "Formal valediction and signature signoff",
            "left": "Kammalawa",
            "right": "Formal valediction and signature signoff"
          }
        ]
      },
      {
        "id": "ha-u13-l1-q3",
        "type": "fill_blank",
        "sentence": "A formal signoff formula for an official letter is: 'Ni ne naku mai biyayya, ___' (Yours faithfully / obediently).",
        "missingWord": "mai biyayya",
        "options": [
          "mai biyayya",
          "aboki",
          "baba",
          "bako"
        ],
        "correctAnswer": "mai biyayya",
        "explanation": "'Ni ne naku mai biyayya' is the traditional formal closing equivalent to 'Yours obediently / faithfully'."
      },
      {
        "id": "ha-u13-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the title: 'Neman Aikin Koyarwa a Makarantar Sakandare' (Application for a Teaching Position in Secondary School):",
        "tokens": [
          "Neman",
          "Aikin",
          "Koyarwa",
          "a",
          "Makarantar",
          "Sakandare"
        ],
        "correctTokens": [
          "Neman",
          "Aikin",
          "Koyarwa",
          "a",
          "Makarantar",
          "Sakandare"
        ]
      },
      {
        "id": "ha-u13-l1-q5",
        "type": "audio_listen",
        "phrase": "Bayan gaisuwa mai tarin yawa da fatan alheri",
        "prompt": "Listen to the opening formula. What does it convey?",
        "options": [
          "After abundant greetings and wishing you every good fortune",
          "I am demanding immediate payment of my debts",
          "We regret to inform you that the meeting is cancelled",
          "Please return my book by tomorrow"
        ],
        "correctAnswer": "After abundant greetings and wishing you every good fortune",
        "explanation": "'Bayan gaisuwa mai tarin yawa da fatan alheri' is the classic polite opening formula in Hausa letter composition."
      },
      {
        "id": "ha-u13-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is an essay called in Hausa curriculum standards?",
        "options": [
          "Insha'i",
          "Tatsuniya",
          "Wakar baka",
          "Almara"
        ],
        "correctAnswer": "Insha'i",
        "explanation": "'Insha'i' (from Arabic Insha) is the formal term for an essay or continuous written composition."
      },
      {
        "id": "ha-u13-l1-q7",
        "type": "matching",
        "prompt": "Match essay composition genres (Nau'o'in Insha'i):",
        "pairs": [
          {
            "native": "Insha'i mai bayani",
            "english": "Expository / Explanatory essay",
            "left": "Insha'i mai bayani",
            "right": "Expository / Explanatory essay"
          },
          {
            "native": "Insha'i mai siffantawa",
            "english": "Descriptive essay",
            "left": "Insha'i mai siffantawa",
            "right": "Descriptive essay"
          },
          {
            "native": "Insha'i mai labari",
            "english": "Narrative essay",
            "left": "Insha'i mai labari",
            "right": "Narrative essay"
          },
          {
            "native": "Insha'i mai gardama / muhawara",
            "english": "Argumentative / Persuasive / Debate essay",
            "left": "Insha'i mai gardama / muhawara",
            "right": "Argumentative / Persuasive / Debate essay"
          }
        ]
      },
      {
        "id": "ha-u13-l1-q8",
        "type": "fill_blank",
        "sentence": "The introductory paragraph of an essay is called '___' in Hausa literary analysis.",
        "missingWord": "Shimfida",
        "options": [
          "Shimfida",
          "Kammalawa",
          "Karewa",
          "Tsakiya"
        ],
        "correctAnswer": "Shimfida",
        "explanation": "'Shimfida' (literally: laying out the carpet / foundation) is the introduction of an essay or discourse."
      },
      {
        "id": "ha-u13-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the sentence: 'Ilimin 'ya'ya mata yana da muhimmanci sosai' (Female child education is extremely important):",
        "tokens": [
          "Ilimin",
          "'ya'ya",
          "mata",
          "yana",
          "da",
          "muhimmanci",
          "sosai"
        ],
        "correctTokens": [
          "Ilimin",
          "'ya'ya",
          "mata",
          "yana",
          "da",
          "muhimmanci",
          "sosai"
        ]
      },
      {
        "id": "ha-u13-l1-q10",
        "type": "multiple_choice",
        "prompt": "How do you say 'In conclusion / To sum up' in a formal Hausa essay?",
        "options": [
          "A karshe / A taƙaice",
          "A farko",
          "Ba shakka",
          "Kafin nan"
        ],
        "correctAnswer": "A karshe / A taƙaice",
        "explanation": "'A karshe' (In the end) or 'A taƙaice' (In summary / briefly) introduces the conclusion paragraph."
      },
      {
        "id": "ha-u13-l1-q11",
        "type": "audio_listen",
        "phrase": "Wannan matsala tana barazana ga ci gaban al'umma",
        "prompt": "Listen to the thesis sentence. What does it argue?",
        "options": [
          "This problem poses a threat to the development of society",
          "Our community has solved all its problems",
          "Development requires buying more cars",
          "Young people are traveling abroad"
        ],
        "correctAnswer": "This problem poses a threat to the development of society",
        "explanation": "'Barazana' means threat; 'ci gaban al'umma' means social development."
      },
      {
        "id": "ha-u13-l1-q12",
        "type": "matching",
        "prompt": "Match contemporary civic essay themes in Hausa:",
        "pairs": [
          {
            "native": "Kare muhalli da tsafta",
            "english": "Environmental protection and public sanitation",
            "left": "Kare muhalli da tsafta",
            "right": "Environmental protection and public sanitation"
          },
          {
            "native": "Tattalin arziki da noma",
            "english": "Economy and modern agriculture",
            "left": "Tattalin arziki da noma",
            "right": "Economy and modern agriculture"
          },
          {
            "native": "Hanyoyin magance rashin aikin yi",
            "english": "Strategies for curbing youth unemployment",
            "left": "Hanyoyin magance rashin aikin yi",
            "right": "Strategies for curbing youth unemployment"
          },
          {
            "native": "Tasirin fasahar zamani",
            "english": "The impact of modern information technology",
            "left": "Tasirin fasahar zamani",
            "right": "The impact of modern information technology"
          }
        ]
      },
      {
        "id": "ha-u13-l1-q13",
        "type": "fill_blank",
        "sentence": "When writing an informal letter to an intimate friend, one addresses them warmly as: 'Zuwa ga babban ___' (To my dear friend).",
        "missingWord": "abokina",
        "options": [
          "abokina",
          "shugabana",
          "gwamna",
          "sarki"
        ],
        "correctAnswer": "abokina",
        "explanation": "'Zuwa ga babban abokina' (To my dear/great friend) is standard in informal letters (wasikar sada zumunci)."
      },
      {
        "id": "ha-u13-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Ina rubuta wannan wasika domin sanar da kai' (I am writing this letter to notify you):",
        "tokens": [
          "Ina",
          "rubuta",
          "wannan",
          "wasika",
          "domin",
          "sanar",
          "da",
          "kai"
        ],
        "correctTokens": [
          "Ina",
          "rubuta",
          "wannan",
          "wasika",
          "domin",
          "sanar",
          "da",
          "kai"
        ]
      },
      {
        "id": "ha-u13-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Muhawara' mean in school curriculum activities?",
        "options": [
          "Debate / Formal argumentation",
          "Song competition",
          "Football tournament",
          "Dramatized comedy"
        ],
        "correctAnswer": "Debate / Formal argumentation",
        "explanation": "'Muhawara' is a formal debate between proposing and opposing sides."
      },
      {
        "id": "ha-u13-l1-q16",
        "type": "audio_listen",
        "phrase": "Ina goyon bayan wannan batu saboda dalilai kamar haka",
        "prompt": "Listen to the debater. What stance are they taking?",
        "options": [
          "I support this motion because of the following reasons",
          "I vehemently reject this false motion",
          "I am neutral and do not wish to speak",
          "The debate should be postponed till next week"
        ],
        "correctAnswer": "I support this motion because of the following reasons",
        "explanation": "'Ina goyon bayan...' = I support/stand with this motion; 'dalilai' = reasons."
      },
      {
        "id": "ha-u13-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Wasiƙar neman aiki'?",
        "options": [
          "Job application letter",
          "Resignation letter",
          "Love letter",
          "Invitation to a birthday party"
        ],
        "correctAnswer": "Job application letter",
        "explanation": "'Wasiƙar neman aiki' is an employment application letter."
      },
      {
        "id": "ha-u13-l1-q18",
        "type": "fill_blank",
        "sentence": "The core body paragraphs of an essay containing arguments and examples are termed '___ insha'i'.",
        "missingWord": "Gangar jikin",
        "options": [
          "Gangar jikin",
          "Farkon",
          "Kan",
          "Karshen"
        ],
        "correctAnswer": "Gangar jikin",
        "explanation": "'Gangar jiki' (literally: the torso / main trunk) designates the body paragraphs."
      },
      {
        "id": "ha-u13-l1-q19",
        "type": "multiple_choice",
        "prompt": "Which connective should be used to introduce an opposing perspective ('On the contrary / On the other hand')?",
        "options": [
          "Akasin haka",
          "Haka kuma",
          "Kamar yadda aka sani",
          "Bisa ga dukkan alamu"
        ],
        "correctAnswer": "Akasin haka",
        "explanation": "'Akasin haka' means 'on the contrary / on the other hand'."
      },
      {
        "id": "ha-u13-l1-q20",
        "type": "matching",
        "prompt": "Match formal letter expressions with English equivalents:",
        "pairs": [
          {
            "native": "Ina mai mika godiyata",
            "english": "I hereby express my profound gratitude",
            "left": "Ina mai mika godiyata",
            "right": "I hereby express my profound gratitude"
          },
          {
            "native": "Ina fatan za a duba bukatata",
            "english": "I hope my request will be favorably considered",
            "left": "Ina fatan za a duba bukatata",
            "right": "I hope my request will be favorably considered"
          },
          {
            "native": "Bisa umarnin",
            "english": "Under the directive / order of",
            "left": "Bisa umarnin",
            "right": "Under the directive / order of"
          },
          {
            "native": "Takardar shaidar karatu",
            "english": "Academic credential / Certificate",
            "left": "Takardar shaidar karatu",
            "right": "Academic credential / Certificate"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-14",
    "unitId": "ha-unit-14",
    "unitNumber": 14,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 14: Literature, Poetry, and Drama (Adabi da Waka)",
    "subtitle": "Written & oral poetry (Waka), literary masterworks (Magana Jari Ce, Ruwan Bagaja), drama, and metric structures.",
    "icon": "Book",
    "color": "#059669",
    "lessons": [
      {
        "id": "ha-u14-l1",
        "title": "Lesson 1: Adabin Hausa, Wakoki da Wasannin Kwaikwayo (Literature, Poetry & Theatre)",
        "description": "Analyze legendary literary texts (Abubakar Imam), classical poetry meters (wazan), oral bardic praise, and theatrical plays.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u14-l1-q1",
            "type": "multiple_choice",
            "prompt": "Who authored the monumental Hausa prose trilogy 'Magana Jari Ce' published in 1937?",
            "options": [
              "Alhaji Abubakar Imam",
              "Sa'adu Zungur",
              "Mu'azu Hadejia",
              "Mamman Shata"
            ],
            "correctAnswer": "Alhaji Abubakar Imam",
            "explanation": "Alhaji Abubakar Imam is the titan of modern Hausa prose literature, authoring 'Magana Jari Ce' and 'Ruwan Bagaja'."
          },
          {
            "id": "ha-u14-l1-q2",
            "type": "matching",
            "prompt": "Match classic Hausa literary works with their authors or genres:",
            "pairs": [
              {
                "native": "Magana Jari Ce",
                "english": "Abubakar Imam's three-volume storytelling masterpiece",
                "left": "Magana Jari Ce",
                "right": "Abubakar Imam's three-volume storytelling masterpiece"
              },
              {
                "native": "Ruwan Bagaja",
                "english": "Abubakar Imam's famous picaresque quest novel",
                "left": "Ruwan Bagaja",
                "right": "Abubakar Imam's famous picaresque quest novel"
              },
              {
                "native": "Arewa Jamhuriyya Ko Mulkiya",
                "english": "Sa'adu Zungur's seminal political reform poem",
                "left": "Arewa Jamhuriyya Ko Mulkiya",
                "right": "Sa'adu Zungur's seminal political reform poem"
              },
              {
                "native": "Kulba Na Barna",
                "english": "Umaru Danjuma Katsina's celebrated social drama play",
                "left": "Kulba Na Barna",
                "right": "Umaru Danjuma Katsina's celebrated social drama play"
              }
            ]
          },
          {
            "id": "ha-u14-l1-q3",
            "type": "fill_blank",
            "sentence": "Written poetry in Hausa is called 'Wakar rubutu', while oral sung poetry performed by bards is called 'Wakar ___'.",
            "missingWord": "baka",
            "options": [
              "baka",
              "allo",
              "littafi",
              "wasika"
            ],
            "correctAnswer": "baka",
            "explanation": "'Wakar baka' (oral / mouth song) denotes sung/chanted oral poetry performed with traditional instruments."
          },
          {
            "id": "ha-u14-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words: 'Adabi madubin rayuwar al'umma ne' (Literature is the mirror of society's life):",
            "tokens": [
              "Adabi",
              "madubin",
              "rayuwar",
              "al'umma",
              "ne"
            ],
            "correctTokens": [
              "Adabi",
              "madubin",
              "rayuwar",
              "al'umma",
              "ne"
            ]
          },
          {
            "id": "ha-u14-l1-q5",
            "type": "audio_listen",
            "phrase": "Mamman Shata Katsina shahararren mawakin baka ne",
            "prompt": "Listen to the biographical statement. Who was Alhaji (Dr.) Mamman Shata?",
            "options": [
              "The most iconic and renowned oral poet/musician in Hausa history",
              "A colonial surveyor in Kano",
              "The first printer of newspapers in Kaduna",
              "A classical Arabic calligrapher"
            ],
            "correctAnswer": "The most iconic and renowned oral poet/musician in Hausa history",
            "explanation": "Mamman Shata was a legendary griot and musical philosopher awarded an honorary doctorate for his poetic contributions."
          },
          {
            "id": "ha-u14-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is 'Wasan kwaikwayo' in Hausa cultural arts?",
            "options": [
              "Drama / Theatrical play",
              "Horse racing",
              "Archery contest",
              "Drum beating"
            ],
            "correctAnswer": "Drama / Theatrical play",
            "explanation": "'Wasan kwaikwayo' (literally: play of imitation/acting) is theatrical drama."
          },
          {
            "id": "ha-u14-l1-q7",
            "type": "matching",
            "prompt": "Match traditional Hausa musical instruments with their classifications:",
            "pairs": [
              {
                "native": "Kalangu",
                "english": "Talking drum (hourglass shaped, tension pitch drum)",
                "left": "Kalangu",
                "right": "Talking drum (hourglass shaped, tension pitch drum)"
              },
              {
                "native": "Kakaki",
                "english": "Long ceremonial brass trumpet of royalty and emirs",
                "left": "Kakaki",
                "right": "Long ceremonial brass trumpet of royalty and emirs"
              },
              {
                "native": "Kuntigi",
                "english": "Single-stringed plucked lute (used by Dan Maraya Jos)",
                "left": "Kuntigi",
                "right": "Single-stringed plucked lute (used by Dan Maraya Jos)"
              },
              {
                "native": "Algaita",
                "english": "Double-reed oboe-like wind instrument",
                "left": "Algaita",
                "right": "Double-reed oboe-like wind instrument"
              }
            ]
          },
          {
            "id": "ha-u14-l1-q8",
            "type": "fill_blank",
            "sentence": "The metric rhythm and poetic cadence in classical written Hausa poetry is termed '___' (meter/prosody).",
            "missingWord": "wazan",
            "options": [
              "wazan",
              "sauti",
              "haruffa",
              "kalmomi"
            ],
            "correctAnswer": "wazan",
            "explanation": "'Wazan' (from Arabic wazn) designates the poetic meter and syllable balance in classical verses."
          },
          {
            "id": "ha-u14-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Dan Maraya Jos ya shahara wajen kidan kuntigi' (Dan Maraya Jos was famous for playing the kuntigi lute):",
            "tokens": [
              "Dan",
              "Maraya",
              "Jos",
              "ya",
              "shahara",
              "wajen",
              "kidan",
              "kuntigi"
            ],
            "correctTokens": [
              "Dan",
              "Maraya",
              "Jos",
              "ya",
              "shahara",
              "wajen",
              "kidan",
              "kuntigi"
            ]
          },
          {
            "id": "ha-u14-l1-q10",
            "type": "multiple_choice",
            "prompt": "In the famous book 'Ruwan Bagaja', what does the protagonist travel across continents to find?",
            "options": [
              "The miraculous healing water (Ruwan Bagaja)",
              "A buried golden crown",
              "A lost talking horse",
              "A magical sword"
            ],
            "correctAnswer": "The miraculous healing water (Ruwan Bagaja)",
            "explanation": "The novel revolves around the quest to fetch 'Ruwan Bagaja' (the healing waters) amidst thrilling adventures."
          },
          {
            "id": "ha-u14-l1-q11",
            "type": "audio_listen",
            "phrase": "Baitin waka yana dauke da amshi da wazani",
            "prompt": "Listen to the literary analysis. What components of poetry are named?",
            "options": [
              "Poetic verse (baiti) contains a chorus/rhyme (amshi) and meter (wazan)",
              "Poetry only speaks about nature",
              "Writers should not sing in public",
              "All poems must be printed in books"
            ],
            "correctAnswer": "Poetic verse (baiti) contains a chorus/rhyme (amshi) and meter (wazan)",
            "explanation": "'Baiti' is a stanza/couplet, 'amshi' is rhyme/chorus refrain, and 'wazan' is poetic meter."
          },
          {
            "id": "ha-u14-l1-q12",
            "type": "matching",
            "prompt": "Match poetic terminology in Hausa literary criticism:",
            "pairs": [
              {
                "native": "Baiti",
                "english": "Stanza / Couplet",
                "left": "Baiti",
                "right": "Stanza / Couplet"
              },
              {
                "native": "Kafiya",
                "english": "Rhyme scheme / End-rhyme",
                "left": "Kafiya",
                "right": "Rhyme scheme / End-rhyme"
              },
              {
                "native": "Amshi",
                "english": "Chorus / Audience refrain",
                "left": "Amshi",
                "right": "Chorus / Audience refrain"
              },
              {
                "native": "Mawaki",
                "english": "Poet / Singer / Bard",
                "left": "Mawaki",
                "right": "Poet / Singer / Bard"
              }
            ]
          },
          {
            "id": "ha-u14-l1-q13",
            "type": "fill_blank",
            "sentence": "The historic Hausa poetic chronicle of Kano kings composed across centuries is known as 'Wakar ___'.",
            "missingWord": "Bagauda",
            "options": [
              "Bagauda",
              "Gizo",
              "Kano",
              "Rano"
            ],
            "correctAnswer": "Bagauda",
            "explanation": "'Wakar Bagauda' is an epic historic poem detailing the reigns and deeds of Kano rulers."
          },
          {
            "id": "ha-u14-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Wasan kwaikwayo yana ilmantar da mutane' (Drama educates the populace):",
            "tokens": [
              "Wasan",
              "kwaikwayo",
              "yana",
              "ilmantar",
              "da",
              "mutane"
            ],
            "correctTokens": [
              "Wasan",
              "kwaikwayo",
              "yana",
              "ilmantar",
              "da",
              "mutane"
            ]
          },
          {
            "id": "ha-u14-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is the central theme of Sa'adu Zungur's classic poem 'Maraba da Soja'?",
            "options": [
              "Welcoming Northern soldiers returning from World War II in Burma and India",
              "Celebrating a royal wedding",
              "Building railway tracks to the coast",
              "Farming cotton in Katsina"
            ],
            "correctAnswer": "Welcoming Northern soldiers returning from World War II in Burma and India",
            "explanation": "Sa'adu Zungur composed 'Maraba da Soja' to welcome demobilized soldiers who fought in the Burma campaign."
          },
          {
            "id": "ha-u14-l1-q16",
            "type": "audio_listen",
            "phrase": "Wasan kwaikwayo yana bukatar 'yan wasa da dandamali",
            "prompt": "Listen to the theatrical requirements. What are the two vital components mentioned?",
            "options": [
              "Actors ('yan wasa) and a stage/platform (dandamali)",
              "Horses and warriors",
              "Cameras and microphones",
              "Tickets and cash registers"
            ],
            "correctAnswer": "Actors ('yan wasa) and a stage/platform (dandamali)",
            "explanation": "'Yan wasa' means actors/players, and 'dandamali' means stage or podium."
          },
          {
            "id": "ha-u14-l1-q17",
            "type": "multiple_choice",
            "prompt": "Which northern printing and publishing corporation founded in 1930 sparked the modern literary renaissance?",
            "options": [
              "Gaskiya Ta Fi Kwabo / NORLA (Northern Regional Literature Agency)",
              "Lagos Weekly Record",
              "Daily Times Publishing",
              "Cairo University Press"
            ],
            "correctAnswer": "Gaskiya Ta Fi Kwabo / NORLA (Northern Regional Literature Agency)",
            "explanation": "Gaskiya Corporation and NORLA produced pioneering Hausa newspapers, novels, primers, and pamphlets."
          },
          {
            "id": "ha-u14-l1-q18",
            "type": "fill_blank",
            "sentence": "A dramatic character who plays the villain or antagonist in Hausa plays is described as: 'Mai ___ barna'.",
            "missingWord": "kullawa",
            "options": [
              "kullawa",
              "son",
              "kare",
              "gani"
            ],
            "correctAnswer": "kullawa",
            "explanation": "'Mai kullawa / mai haddasa barna' is the antagonist who plots mischief."
          },
          {
            "id": "ha-u14-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is 'Adabin baka'?",
            "options": [
              "Oral literature (Folklore, bards, songs, proverbs)",
              "Written school textbooks",
              "Government gazettes",
              "Medical prescription charts"
            ],
            "correctAnswer": "Oral literature (Folklore, bards, songs, proverbs)",
            "explanation": "'Adabin baka' encompasses all oral literary arts passed from mouth to ear across generations."
          },
          {
            "id": "ha-u14-l1-q20",
            "type": "matching",
            "prompt": "Match contemporary Hausa literary mediums:",
            "pairs": [
              {
                "native": "Littattafan Soyayya",
                "english": "Kano Market literature (popular romantic and social novella genre)",
                "left": "Littattafan Soyayya",
                "right": "Kano Market literature (popular romantic and social novella genre)"
              },
              {
                "native": "Kannywood",
                "english": "The vibrant Hausa-language film industry centered in Kano",
                "left": "Kannywood",
                "right": "The vibrant Hausa-language film industry centered in Kano"
              },
              {
                "native": "Wasan rediyo",
                "english": "Radio drama series (popularized by BBC Hausa & FRCN)",
                "left": "Wasan rediyo",
                "right": "Radio drama series (popularized by BBC Hausa & FRCN)"
              },
              {
                "native": "Zubin labari",
                "english": "Plot structure and narrative pacing",
                "left": "Zubin labari",
                "right": "Plot structure and narrative pacing"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u14-l1-q1",
        "type": "multiple_choice",
        "prompt": "Who authored the monumental Hausa prose trilogy 'Magana Jari Ce' published in 1937?",
        "options": [
          "Alhaji Abubakar Imam",
          "Sa'adu Zungur",
          "Mu'azu Hadejia",
          "Mamman Shata"
        ],
        "correctAnswer": "Alhaji Abubakar Imam",
        "explanation": "Alhaji Abubakar Imam is the titan of modern Hausa prose literature, authoring 'Magana Jari Ce' and 'Ruwan Bagaja'."
      },
      {
        "id": "ha-u14-l1-q2",
        "type": "matching",
        "prompt": "Match classic Hausa literary works with their authors or genres:",
        "pairs": [
          {
            "native": "Magana Jari Ce",
            "english": "Abubakar Imam's three-volume storytelling masterpiece",
            "left": "Magana Jari Ce",
            "right": "Abubakar Imam's three-volume storytelling masterpiece"
          },
          {
            "native": "Ruwan Bagaja",
            "english": "Abubakar Imam's famous picaresque quest novel",
            "left": "Ruwan Bagaja",
            "right": "Abubakar Imam's famous picaresque quest novel"
          },
          {
            "native": "Arewa Jamhuriyya Ko Mulkiya",
            "english": "Sa'adu Zungur's seminal political reform poem",
            "left": "Arewa Jamhuriyya Ko Mulkiya",
            "right": "Sa'adu Zungur's seminal political reform poem"
          },
          {
            "native": "Kulba Na Barna",
            "english": "Umaru Danjuma Katsina's celebrated social drama play",
            "left": "Kulba Na Barna",
            "right": "Umaru Danjuma Katsina's celebrated social drama play"
          }
        ]
      },
      {
        "id": "ha-u14-l1-q3",
        "type": "fill_blank",
        "sentence": "Written poetry in Hausa is called 'Wakar rubutu', while oral sung poetry performed by bards is called 'Wakar ___'.",
        "missingWord": "baka",
        "options": [
          "baka",
          "allo",
          "littafi",
          "wasika"
        ],
        "correctAnswer": "baka",
        "explanation": "'Wakar baka' (oral / mouth song) denotes sung/chanted oral poetry performed with traditional instruments."
      },
      {
        "id": "ha-u14-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words: 'Adabi madubin rayuwar al'umma ne' (Literature is the mirror of society's life):",
        "tokens": [
          "Adabi",
          "madubin",
          "rayuwar",
          "al'umma",
          "ne"
        ],
        "correctTokens": [
          "Adabi",
          "madubin",
          "rayuwar",
          "al'umma",
          "ne"
        ]
      },
      {
        "id": "ha-u14-l1-q5",
        "type": "audio_listen",
        "phrase": "Mamman Shata Katsina shahararren mawakin baka ne",
        "prompt": "Listen to the biographical statement. Who was Alhaji (Dr.) Mamman Shata?",
        "options": [
          "The most iconic and renowned oral poet/musician in Hausa history",
          "A colonial surveyor in Kano",
          "The first printer of newspapers in Kaduna",
          "A classical Arabic calligrapher"
        ],
        "correctAnswer": "The most iconic and renowned oral poet/musician in Hausa history",
        "explanation": "Mamman Shata was a legendary griot and musical philosopher awarded an honorary doctorate for his poetic contributions."
      },
      {
        "id": "ha-u14-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is 'Wasan kwaikwayo' in Hausa cultural arts?",
        "options": [
          "Drama / Theatrical play",
          "Horse racing",
          "Archery contest",
          "Drum beating"
        ],
        "correctAnswer": "Drama / Theatrical play",
        "explanation": "'Wasan kwaikwayo' (literally: play of imitation/acting) is theatrical drama."
      },
      {
        "id": "ha-u14-l1-q7",
        "type": "matching",
        "prompt": "Match traditional Hausa musical instruments with their classifications:",
        "pairs": [
          {
            "native": "Kalangu",
            "english": "Talking drum (hourglass shaped, tension pitch drum)",
            "left": "Kalangu",
            "right": "Talking drum (hourglass shaped, tension pitch drum)"
          },
          {
            "native": "Kakaki",
            "english": "Long ceremonial brass trumpet of royalty and emirs",
            "left": "Kakaki",
            "right": "Long ceremonial brass trumpet of royalty and emirs"
          },
          {
            "native": "Kuntigi",
            "english": "Single-stringed plucked lute (used by Dan Maraya Jos)",
            "left": "Kuntigi",
            "right": "Single-stringed plucked lute (used by Dan Maraya Jos)"
          },
          {
            "native": "Algaita",
            "english": "Double-reed oboe-like wind instrument",
            "left": "Algaita",
            "right": "Double-reed oboe-like wind instrument"
          }
        ]
      },
      {
        "id": "ha-u14-l1-q8",
        "type": "fill_blank",
        "sentence": "The metric rhythm and poetic cadence in classical written Hausa poetry is termed '___' (meter/prosody).",
        "missingWord": "wazan",
        "options": [
          "wazan",
          "sauti",
          "haruffa",
          "kalmomi"
        ],
        "correctAnswer": "wazan",
        "explanation": "'Wazan' (from Arabic wazn) designates the poetic meter and syllable balance in classical verses."
      },
      {
        "id": "ha-u14-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Dan Maraya Jos ya shahara wajen kidan kuntigi' (Dan Maraya Jos was famous for playing the kuntigi lute):",
        "tokens": [
          "Dan",
          "Maraya",
          "Jos",
          "ya",
          "shahara",
          "wajen",
          "kidan",
          "kuntigi"
        ],
        "correctTokens": [
          "Dan",
          "Maraya",
          "Jos",
          "ya",
          "shahara",
          "wajen",
          "kidan",
          "kuntigi"
        ]
      },
      {
        "id": "ha-u14-l1-q10",
        "type": "multiple_choice",
        "prompt": "In the famous book 'Ruwan Bagaja', what does the protagonist travel across continents to find?",
        "options": [
          "The miraculous healing water (Ruwan Bagaja)",
          "A buried golden crown",
          "A lost talking horse",
          "A magical sword"
        ],
        "correctAnswer": "The miraculous healing water (Ruwan Bagaja)",
        "explanation": "The novel revolves around the quest to fetch 'Ruwan Bagaja' (the healing waters) amidst thrilling adventures."
      },
      {
        "id": "ha-u14-l1-q11",
        "type": "audio_listen",
        "phrase": "Baitin waka yana dauke da amshi da wazani",
        "prompt": "Listen to the literary analysis. What components of poetry are named?",
        "options": [
          "Poetic verse (baiti) contains a chorus/rhyme (amshi) and meter (wazan)",
          "Poetry only speaks about nature",
          "Writers should not sing in public",
          "All poems must be printed in books"
        ],
        "correctAnswer": "Poetic verse (baiti) contains a chorus/rhyme (amshi) and meter (wazan)",
        "explanation": "'Baiti' is a stanza/couplet, 'amshi' is rhyme/chorus refrain, and 'wazan' is poetic meter."
      },
      {
        "id": "ha-u14-l1-q12",
        "type": "matching",
        "prompt": "Match poetic terminology in Hausa literary criticism:",
        "pairs": [
          {
            "native": "Baiti",
            "english": "Stanza / Couplet",
            "left": "Baiti",
            "right": "Stanza / Couplet"
          },
          {
            "native": "Kafiya",
            "english": "Rhyme scheme / End-rhyme",
            "left": "Kafiya",
            "right": "Rhyme scheme / End-rhyme"
          },
          {
            "native": "Amshi",
            "english": "Chorus / Audience refrain",
            "left": "Amshi",
            "right": "Chorus / Audience refrain"
          },
          {
            "native": "Mawaki",
            "english": "Poet / Singer / Bard",
            "left": "Mawaki",
            "right": "Poet / Singer / Bard"
          }
        ]
      },
      {
        "id": "ha-u14-l1-q13",
        "type": "fill_blank",
        "sentence": "The historic Hausa poetic chronicle of Kano kings composed across centuries is known as 'Wakar ___'.",
        "missingWord": "Bagauda",
        "options": [
          "Bagauda",
          "Gizo",
          "Kano",
          "Rano"
        ],
        "correctAnswer": "Bagauda",
        "explanation": "'Wakar Bagauda' is an epic historic poem detailing the reigns and deeds of Kano rulers."
      },
      {
        "id": "ha-u14-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Wasan kwaikwayo yana ilmantar da mutane' (Drama educates the populace):",
        "tokens": [
          "Wasan",
          "kwaikwayo",
          "yana",
          "ilmantar",
          "da",
          "mutane"
        ],
        "correctTokens": [
          "Wasan",
          "kwaikwayo",
          "yana",
          "ilmantar",
          "da",
          "mutane"
        ]
      },
      {
        "id": "ha-u14-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is the central theme of Sa'adu Zungur's classic poem 'Maraba da Soja'?",
        "options": [
          "Welcoming Northern soldiers returning from World War II in Burma and India",
          "Celebrating a royal wedding",
          "Building railway tracks to the coast",
          "Farming cotton in Katsina"
        ],
        "correctAnswer": "Welcoming Northern soldiers returning from World War II in Burma and India",
        "explanation": "Sa'adu Zungur composed 'Maraba da Soja' to welcome demobilized soldiers who fought in the Burma campaign."
      },
      {
        "id": "ha-u14-l1-q16",
        "type": "audio_listen",
        "phrase": "Wasan kwaikwayo yana bukatar 'yan wasa da dandamali",
        "prompt": "Listen to the theatrical requirements. What are the two vital components mentioned?",
        "options": [
          "Actors ('yan wasa) and a stage/platform (dandamali)",
          "Horses and warriors",
          "Cameras and microphones",
          "Tickets and cash registers"
        ],
        "correctAnswer": "Actors ('yan wasa) and a stage/platform (dandamali)",
        "explanation": "'Yan wasa' means actors/players, and 'dandamali' means stage or podium."
      },
      {
        "id": "ha-u14-l1-q17",
        "type": "multiple_choice",
        "prompt": "Which northern printing and publishing corporation founded in 1930 sparked the modern literary renaissance?",
        "options": [
          "Gaskiya Ta Fi Kwabo / NORLA (Northern Regional Literature Agency)",
          "Lagos Weekly Record",
          "Daily Times Publishing",
          "Cairo University Press"
        ],
        "correctAnswer": "Gaskiya Ta Fi Kwabo / NORLA (Northern Regional Literature Agency)",
        "explanation": "Gaskiya Corporation and NORLA produced pioneering Hausa newspapers, novels, primers, and pamphlets."
      },
      {
        "id": "ha-u14-l1-q18",
        "type": "fill_blank",
        "sentence": "A dramatic character who plays the villain or antagonist in Hausa plays is described as: 'Mai ___ barna'.",
        "missingWord": "kullawa",
        "options": [
          "kullawa",
          "son",
          "kare",
          "gani"
        ],
        "correctAnswer": "kullawa",
        "explanation": "'Mai kullawa / mai haddasa barna' is the antagonist who plots mischief."
      },
      {
        "id": "ha-u14-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is 'Adabin baka'?",
        "options": [
          "Oral literature (Folklore, bards, songs, proverbs)",
          "Written school textbooks",
          "Government gazettes",
          "Medical prescription charts"
        ],
        "correctAnswer": "Oral literature (Folklore, bards, songs, proverbs)",
        "explanation": "'Adabin baka' encompasses all oral literary arts passed from mouth to ear across generations."
      },
      {
        "id": "ha-u14-l1-q20",
        "type": "matching",
        "prompt": "Match contemporary Hausa literary mediums:",
        "pairs": [
          {
            "native": "Littattafan Soyayya",
            "english": "Kano Market literature (popular romantic and social novella genre)",
            "left": "Littattafan Soyayya",
            "right": "Kano Market literature (popular romantic and social novella genre)"
          },
          {
            "native": "Kannywood",
            "english": "The vibrant Hausa-language film industry centered in Kano",
            "left": "Kannywood",
            "right": "The vibrant Hausa-language film industry centered in Kano"
          },
          {
            "native": "Wasan rediyo",
            "english": "Radio drama series (popularized by BBC Hausa & FRCN)",
            "left": "Wasan rediyo",
            "right": "Radio drama series (popularized by BBC Hausa & FRCN)"
          },
          {
            "native": "Zubin labari",
            "english": "Plot structure and narrative pacing",
            "left": "Zubin labari",
            "right": "Plot structure and narrative pacing"
          }
        ]
      }
    ]
  },
  {
    "id": "ha-unit-15",
    "unitId": "ha-unit-15",
    "unitNumber": 15,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 15: Specialized Vocabulary and Translation (Fassara da Fassara Na Fasaha)",
    "subtitle": "Technical translation, media journalism registers (BBC/VOA/DW Hausa), deep idioms, and dialect nuances.",
    "icon": "Globe",
    "color": "#059669",
    "lessons": [
      {
        "id": "ha-u15-l1",
        "title": "Lesson 1: Fassara, Harshen Watsa Labarai da Karuruwan Hausa (Translation & Dialectology)",
        "description": "Master media journalism translation, constitutional/legal terms, idiomatic nuances, and dialectal variations (Kano, Sokoto, Katsina, Zaria).",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ha-u15-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which Hausa dialect serves as the standard linguistic benchmark for official broadcasting, orthography, and education?",
            "options": [
              "Kananci (Kano dialect)",
              "Sakkwatanci (Sokoto dialect)",
              "Katsinanci (Katsina dialect)",
              "Zazzaganci (Zaria dialect)"
            ],
            "correctAnswer": "Kananci (Kano dialect)",
            "explanation": "Kananci (the Kano dialect) is widely adopted as standard Hausa (Hausar boko) for national media, curricula, and literature."
          },
          {
            "id": "ha-u15-l1-q2",
            "type": "matching",
            "prompt": "Match regional dialect words with their standard Kano Hausa equivalents:",
            "pairs": [
              {
                "native": "Sakkwatanci: 'Shina'",
                "english": "Standard Kananci: 'Yana' (He is / progressive)",
                "left": "Sakkwatanci: 'Shina'",
                "right": "Standard Kananci: 'Yana' (He is / progressive)"
              },
              {
                "native": "Sakkwatanci: 'Dumi'",
                "english": "Standard Kananci: 'Wani' (A certain / Someone)",
                "left": "Sakkwatanci: 'Dumi'",
                "right": "Standard Kananci: 'Wani' (A certain / Someone)"
              },
              {
                "native": "Katsinanci: 'Yaya'",
                "english": "Standard Kananci: 'Kamar yaya' (How / In what way)",
                "left": "Katsinanci: 'Yaya'",
                "right": "Standard Kananci: 'Kamar yaya' (How / In what way)"
              },
              {
                "native": "Guddiranci: 'Wanga'",
                "english": "Standard Kananci: 'Wannan' (This one)",
                "left": "Guddiranci: 'Wanga'",
                "right": "Standard Kananci: 'Wannan' (This one)"
              }
            ]
          },
          {
            "id": "ha-u15-l1-q3",
            "type": "fill_blank",
            "sentence": "In journalistic broadcasting, the United Nations is translated as 'Majalisar Dinkin ___'.",
            "missingWord": "Duniya",
            "options": [
              "Duniya",
              "Kasa",
              "Gari",
              "Afirka"
            ],
            "correctAnswer": "Duniya",
            "explanation": "'Majalisar Dinkin Duniya' literally translates to 'The council that sews the world together' (The United Nations)."
          },
          {
            "id": "ha-u15-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the news headline: 'Gwamnati ta kaddamar da sabon shirin ilimi' (The government launched a new education programme):",
            "tokens": [
              "Gwamnati",
              "ta",
              "kaddamar",
              "da",
              "sabon",
              "shirin",
              "ilimi"
            ],
            "correctTokens": [
              "Gwamnati",
              "ta",
              "kaddamar",
              "da",
              "sabon",
              "shirin",
              "ilimi"
            ]
          },
          {
            "id": "ha-u15-l1-q5",
            "type": "audio_listen",
            "phrase": "Watsa labarai daga sashen Hausa na BBC a birnin Landan",
            "prompt": "Listen to the famous radio intro. What station is broadcasting?",
            "options": [
              "BBC Hausa Service broadcasting from London",
              "Radio France Internationale broadcasting from Paris",
              "Voice of America broadcasting from Washington",
              "Deutsche Welle broadcasting from Bonn"
            ],
            "correctAnswer": "BBC Hausa Service broadcasting from London",
            "explanation": "'Watsa labarai daga sashen Hausa na BBC a birnin Landan' is the iconic sign-on of the BBC Hausa service."
          },
          {
            "id": "ha-u15-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the standard translation for 'Constitution' in Nigerian political governance?",
            "options": [
              "Kundin Tsarin Mulki",
              "Takardar Gwamna",
              "Dokar Daji",
              "Shari'ar Kasuwa"
            ],
            "correctAnswer": "Kundin Tsarin Mulki",
            "explanation": "'Kundin Tsarin Mulki' (literally: The tome of the structure of governance) is the Constitution."
          },
          {
            "id": "ha-u15-l1-q7",
            "type": "matching",
            "prompt": "Match technical democratic and legal terms in Hausa:",
            "pairs": [
              {
                "native": "Kundin Tsarin Mulki",
                "english": "National Constitution",
                "left": "Kundin Tsarin Mulki",
                "right": "National Constitution"
              },
              {
                "native": "Kotu ta koli",
                "english": "Supreme Court",
                "left": "Kotu ta koli",
                "right": "Supreme Court"
              },
              {
                "native": "Majalisar Dokoki",
                "english": "Legislative Assembly / Parliament",
                "left": "Majalisar Dokoki",
                "right": "Legislative Assembly / Parliament"
              },
              {
                "native": "Zaben fid-da-gwani",
                "english": "Primary elections",
                "left": "Zaben fid-da-gwani",
                "right": "Zaben fid-da-gwani"
              }
            ]
          },
          {
            "id": "ha-u15-l1-q8",
            "type": "fill_blank",
            "sentence": "In medical and scientific translation, 'Infection' or 'Disease epidemic' is termed 'Cutar ___'.",
            "missingWord": "bannadanci",
            "options": [
              "annoba",
              "ciwon kai",
              "zazzabi",
              "sanyi"
            ],
            "correctAnswer": "annoba",
            "explanation": "'Annoba' is epidemic / plague / pandemic outbreak."
          },
          {
            "id": "ha-u15-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'An rantsar da sabon shugaban kasa' (The new President of the nation was sworn in):",
            "tokens": [
              "An",
              "rantsar",
              "da",
              "sabon",
              "shugaban",
              "kasa"
            ],
            "correctTokens": [
              "An",
              "rantsar",
              "da",
              "sabon",
              "shugaban",
              "kasa"
            ]
          },
          {
            "id": "ha-u15-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does the idiom 'Cizon yatsa' signify in emotional expression?",
            "options": [
              "Regret / Remorse",
              "Physical injury",
              "Eating voraciously",
              "Signing a contract"
            ],
            "correctAnswer": "Regret / Remorse",
            "explanation": "'Cizon yatsa' (biting one's finger) is a deep idiom meaning remorse or bitter regret."
          },
          {
            "id": "ha-u15-l1-q11",
            "type": "audio_listen",
            "phrase": "Bisa dukkan alamu, tattalin arzikin duniya na farfadowa",
            "prompt": "Listen to the financial report. What trend is reported?",
            "options": [
              "By all indications, the global economy is recovering",
              "The world economy has collapsed completely",
              "Inflation has doubled overnight",
              "Stock markets have closed worldwide"
            ],
            "correctAnswer": "By all indications, the global economy is recovering",
            "explanation": "'Farfadowa' means reviving / recovering from adversity or illness."
          },
          {
            "id": "ha-u15-l1-q12",
            "type": "matching",
            "prompt": "Match advanced economic and financial vocabulary:",
            "pairs": [
              {
                "native": "Hauhawar farashi",
                "english": "Inflation (Rising cost of goods and services)",
                "left": "Hauhawar farashi",
                "right": "Inflation (Rising cost of goods and services)"
              },
              {
                "native": "Kudin shiga",
                "english": "Revenue / Inward earnings",
                "left": "Kudin shiga",
                "right": "Revenue / Inward earnings"
              },
              {
                "native": "Kasuwar hannun jari",
                "english": "Stock exchange / Capital market",
                "left": "Kasuwar hannun jari",
                "right": "Stock exchange / Capital market"
              },
              {
                "native": "Kudin musaya",
                "english": "Foreign exchange rate",
                "left": "Kudin musaya",
                "right": "Foreign exchange rate"
              }
            ]
          },
          {
            "id": "ha-u15-l1-q13",
            "type": "fill_blank",
            "sentence": "The idiom 'Kulle baki' means to 'remain silent', while 'Budadden baki' means to speak with ___.",
            "missingWord": "freedom / frankness",
            "options": [
              "freedom / frankness",
              "anger",
              "laughter",
              "fear"
            ],
            "correctAnswer": "freedom / frankness",
            "explanation": "'Bude baki' signifies opening one's speech candidly and courageously."
          },
          {
            "id": "ha-u15-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the idiom: 'Kifi na ganin mai jawo raga' (The fish sees the one pulling the net):",
            "tokens": [
              "Kifi",
              "na",
              "ganin",
              "mai",
              "jawo",
              "raga"
            ],
            "correctTokens": [
              "Kifi",
              "na",
              "ganin",
              "mai",
              "jawo",
              "raga"
            ]
          },
          {
            "id": "ha-u15-l1-q15",
            "type": "multiple_choice",
            "prompt": "How does Sokoto dialect (Sakkwatanci) pronounce the word 'ruwa' (water) in classical vernacular speech?",
            "options": [
              "Ruwa (frequently with vowel elision 'ruwa')",
              "Liyo",
              "Kogi",
              "Bulu"
            ],
            "correctAnswer": "Ruwa (frequently with vowel elision 'ruwa')",
            "explanation": "Sakkwatanci preserves distinct archaisms like /hw/ for /f/ ('hwan' for 'fara') and distinct nominal suffixes."
          },
          {
            "id": "ha-u15-l1-q16",
            "type": "audio_listen",
            "phrase": "Tsaro da zaman lafiya sune ginshikin ci gaba",
            "prompt": "Listen to the policy maxim. What are described as the bedrock of progress?",
            "options": [
              "Security and peaceful coexistence are the pillars of progress",
              "Building roads is the only duty of state",
              "Money and silver surpass all wisdom",
              "Soldiers should manage every market"
            ],
            "correctAnswer": "Security and peaceful coexistence are the pillars of progress",
            "explanation": "'Ginshiki' = pillar / cornerstone; 'Tsaro da zaman lafiya' = security and peace."
          },
          {
            "id": "ha-u15-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is the translation for 'Artificial Intelligence' (AI) in modern tech terminology?",
            "options": [
              "Basirar Na'ura Mai Kwakwalwa",
              "Hasken Wuta",
              "Wayar Salula",
              "Saurin Karatu"
            ],
            "correctAnswer": "Basirar Na'ura Mai Kwakwalwa",
            "explanation": "'Basirar Na'ura' or 'Hankali na wucin gadi / Basirar kwamfuta' denotes Artificial Intelligence."
          },
          {
            "id": "ha-u15-l1-q18",
            "type": "fill_blank",
            "sentence": "When translating between English and Hausa, translating word-for-word without cultural context is called 'Fassaran kalma-da-___'.",
            "missingWord": "kalma",
            "options": [
              "kalma",
              "jumla",
              "rubutu",
              "baki"
            ],
            "correctAnswer": "kalma",
            "explanation": "'Fassara kalma-da-kalma' (word-for-word / literal translation) often distorts idiomatic meaning."
          },
          {
            "id": "ha-u15-l1-q19",
            "type": "multiple_choice",
            "prompt": "In diplomatic protocol, what is an 'Ambassador' called in Hausa?",
            "options": [
              "Jakada",
              "Gwamna",
              "Mai Unguwa",
              "Kwamishina"
            ],
            "correctAnswer": "Jakada",
            "explanation": "'Jakada' is an envoy, delegate, or diplomatic ambassador."
          },
          {
            "id": "ha-u15-l1-q20",
            "type": "matching",
            "prompt": "Match deep idioms (Karin magana mai zurfi) with metaphorical meanings:",
            "pairs": [
              {
                "native": "Kafa ta ɗauki kafa",
                "english": "Fleeing in utter panic / Running for dear life",
                "left": "Kafa ta ɗauki kafa",
                "right": "Fleeing in utter panic / Running for dear life"
              },
              {
                "native": "Jan kunne",
                "english": "Stern warning / Admonition (pulling the ear)",
                "left": "Jan kunne",
                "right": "Stern warning / Admonition (pulling the ear)"
              },
              {
                "native": "Zuba ido",
                "english": "Waiting with watchful patience / Observing closely",
                "left": "Zuba ido",
                "right": "Waiting with watchful patience / Observing closely"
              },
              {
                "native": "Sauke nauyi",
                "english": "Discharging an onerous civic or parental duty",
                "left": "Sauke nauyi",
                "right": "Discharging an onerous civic or parental duty"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ha-u15-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which Hausa dialect serves as the standard linguistic benchmark for official broadcasting, orthography, and education?",
        "options": [
          "Kananci (Kano dialect)",
          "Sakkwatanci (Sokoto dialect)",
          "Katsinanci (Katsina dialect)",
          "Zazzaganci (Zaria dialect)"
        ],
        "correctAnswer": "Kananci (Kano dialect)",
        "explanation": "Kananci (the Kano dialect) is widely adopted as standard Hausa (Hausar boko) for national media, curricula, and literature."
      },
      {
        "id": "ha-u15-l1-q2",
        "type": "matching",
        "prompt": "Match regional dialect words with their standard Kano Hausa equivalents:",
        "pairs": [
          {
            "native": "Sakkwatanci: 'Shina'",
            "english": "Standard Kananci: 'Yana' (He is / progressive)",
            "left": "Sakkwatanci: 'Shina'",
            "right": "Standard Kananci: 'Yana' (He is / progressive)"
          },
          {
            "native": "Sakkwatanci: 'Dumi'",
            "english": "Standard Kananci: 'Wani' (A certain / Someone)",
            "left": "Sakkwatanci: 'Dumi'",
            "right": "Standard Kananci: 'Wani' (A certain / Someone)"
          },
          {
            "native": "Katsinanci: 'Yaya'",
            "english": "Standard Kananci: 'Kamar yaya' (How / In what way)",
            "left": "Katsinanci: 'Yaya'",
            "right": "Standard Kananci: 'Kamar yaya' (How / In what way)"
          },
          {
            "native": "Guddiranci: 'Wanga'",
            "english": "Standard Kananci: 'Wannan' (This one)",
            "left": "Guddiranci: 'Wanga'",
            "right": "Standard Kananci: 'Wannan' (This one)"
          }
        ]
      },
      {
        "id": "ha-u15-l1-q3",
        "type": "fill_blank",
        "sentence": "In journalistic broadcasting, the United Nations is translated as 'Majalisar Dinkin ___'.",
        "missingWord": "Duniya",
        "options": [
          "Duniya",
          "Kasa",
          "Gari",
          "Afirka"
        ],
        "correctAnswer": "Duniya",
        "explanation": "'Majalisar Dinkin Duniya' literally translates to 'The council that sews the world together' (The United Nations)."
      },
      {
        "id": "ha-u15-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the news headline: 'Gwamnati ta kaddamar da sabon shirin ilimi' (The government launched a new education programme):",
        "tokens": [
          "Gwamnati",
          "ta",
          "kaddamar",
          "da",
          "sabon",
          "shirin",
          "ilimi"
        ],
        "correctTokens": [
          "Gwamnati",
          "ta",
          "kaddamar",
          "da",
          "sabon",
          "shirin",
          "ilimi"
        ]
      },
      {
        "id": "ha-u15-l1-q5",
        "type": "audio_listen",
        "phrase": "Watsa labarai daga sashen Hausa na BBC a birnin Landan",
        "prompt": "Listen to the famous radio intro. What station is broadcasting?",
        "options": [
          "BBC Hausa Service broadcasting from London",
          "Radio France Internationale broadcasting from Paris",
          "Voice of America broadcasting from Washington",
          "Deutsche Welle broadcasting from Bonn"
        ],
        "correctAnswer": "BBC Hausa Service broadcasting from London",
        "explanation": "'Watsa labarai daga sashen Hausa na BBC a birnin Landan' is the iconic sign-on of the BBC Hausa service."
      },
      {
        "id": "ha-u15-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the standard translation for 'Constitution' in Nigerian political governance?",
        "options": [
          "Kundin Tsarin Mulki",
          "Takardar Gwamna",
          "Dokar Daji",
          "Shari'ar Kasuwa"
        ],
        "correctAnswer": "Kundin Tsarin Mulki",
        "explanation": "'Kundin Tsarin Mulki' (literally: The tome of the structure of governance) is the Constitution."
      },
      {
        "id": "ha-u15-l1-q7",
        "type": "matching",
        "prompt": "Match technical democratic and legal terms in Hausa:",
        "pairs": [
          {
            "native": "Kundin Tsarin Mulki",
            "english": "National Constitution",
            "left": "Kundin Tsarin Mulki",
            "right": "National Constitution"
          },
          {
            "native": "Kotu ta koli",
            "english": "Supreme Court",
            "left": "Kotu ta koli",
            "right": "Supreme Court"
          },
          {
            "native": "Majalisar Dokoki",
            "english": "Legislative Assembly / Parliament",
            "left": "Majalisar Dokoki",
            "right": "Legislative Assembly / Parliament"
          },
          {
            "native": "Zaben fid-da-gwani",
            "english": "Primary elections",
            "left": "Zaben fid-da-gwani",
            "right": "Zaben fid-da-gwani"
          }
        ]
      },
      {
        "id": "ha-u15-l1-q8",
        "type": "fill_blank",
        "sentence": "In medical and scientific translation, 'Infection' or 'Disease epidemic' is termed 'Cutar ___'.",
        "missingWord": "bannadanci",
        "options": [
          "annoba",
          "ciwon kai",
          "zazzabi",
          "sanyi"
        ],
        "correctAnswer": "annoba",
        "explanation": "'Annoba' is epidemic / plague / pandemic outbreak."
      },
      {
        "id": "ha-u15-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'An rantsar da sabon shugaban kasa' (The new President of the nation was sworn in):",
        "tokens": [
          "An",
          "rantsar",
          "da",
          "sabon",
          "shugaban",
          "kasa"
        ],
        "correctTokens": [
          "An",
          "rantsar",
          "da",
          "sabon",
          "shugaban",
          "kasa"
        ]
      },
      {
        "id": "ha-u15-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does the idiom 'Cizon yatsa' signify in emotional expression?",
        "options": [
          "Regret / Remorse",
          "Physical injury",
          "Eating voraciously",
          "Signing a contract"
        ],
        "correctAnswer": "Regret / Remorse",
        "explanation": "'Cizon yatsa' (biting one's finger) is a deep idiom meaning remorse or bitter regret."
      },
      {
        "id": "ha-u15-l1-q11",
        "type": "audio_listen",
        "phrase": "Bisa dukkan alamu, tattalin arzikin duniya na farfadowa",
        "prompt": "Listen to the financial report. What trend is reported?",
        "options": [
          "By all indications, the global economy is recovering",
          "The world economy has collapsed completely",
          "Inflation has doubled overnight",
          "Stock markets have closed worldwide"
        ],
        "correctAnswer": "By all indications, the global economy is recovering",
        "explanation": "'Farfadowa' means reviving / recovering from adversity or illness."
      },
      {
        "id": "ha-u15-l1-q12",
        "type": "matching",
        "prompt": "Match advanced economic and financial vocabulary:",
        "pairs": [
          {
            "native": "Hauhawar farashi",
            "english": "Inflation (Rising cost of goods and services)",
            "left": "Hauhawar farashi",
            "right": "Inflation (Rising cost of goods and services)"
          },
          {
            "native": "Kudin shiga",
            "english": "Revenue / Inward earnings",
            "left": "Kudin shiga",
            "right": "Revenue / Inward earnings"
          },
          {
            "native": "Kasuwar hannun jari",
            "english": "Stock exchange / Capital market",
            "left": "Kasuwar hannun jari",
            "right": "Stock exchange / Capital market"
          },
          {
            "native": "Kudin musaya",
            "english": "Foreign exchange rate",
            "left": "Kudin musaya",
            "right": "Foreign exchange rate"
          }
        ]
      },
      {
        "id": "ha-u15-l1-q13",
        "type": "fill_blank",
        "sentence": "The idiom 'Kulle baki' means to 'remain silent', while 'Budadden baki' means to speak with ___.",
        "missingWord": "freedom / frankness",
        "options": [
          "freedom / frankness",
          "anger",
          "laughter",
          "fear"
        ],
        "correctAnswer": "freedom / frankness",
        "explanation": "'Bude baki' signifies opening one's speech candidly and courageously."
      },
      {
        "id": "ha-u15-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the idiom: 'Kifi na ganin mai jawo raga' (The fish sees the one pulling the net):",
        "tokens": [
          "Kifi",
          "na",
          "ganin",
          "mai",
          "jawo",
          "raga"
        ],
        "correctTokens": [
          "Kifi",
          "na",
          "ganin",
          "mai",
          "jawo",
          "raga"
        ]
      },
      {
        "id": "ha-u15-l1-q15",
        "type": "multiple_choice",
        "prompt": "How does Sokoto dialect (Sakkwatanci) pronounce the word 'ruwa' (water) in classical vernacular speech?",
        "options": [
          "Ruwa (frequently with vowel elision 'ruwa')",
          "Liyo",
          "Kogi",
          "Bulu"
        ],
        "correctAnswer": "Ruwa (frequently with vowel elision 'ruwa')",
        "explanation": "Sakkwatanci preserves distinct archaisms like /hw/ for /f/ ('hwan' for 'fara') and distinct nominal suffixes."
      },
      {
        "id": "ha-u15-l1-q16",
        "type": "audio_listen",
        "phrase": "Tsaro da zaman lafiya sune ginshikin ci gaba",
        "prompt": "Listen to the policy maxim. What are described as the bedrock of progress?",
        "options": [
          "Security and peaceful coexistence are the pillars of progress",
          "Building roads is the only duty of state",
          "Money and silver surpass all wisdom",
          "Soldiers should manage every market"
        ],
        "correctAnswer": "Security and peaceful coexistence are the pillars of progress",
        "explanation": "'Ginshiki' = pillar / cornerstone; 'Tsaro da zaman lafiya' = security and peace."
      },
      {
        "id": "ha-u15-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is the translation for 'Artificial Intelligence' (AI) in modern tech terminology?",
        "options": [
          "Basirar Na'ura Mai Kwakwalwa",
          "Hasken Wuta",
          "Wayar Salula",
          "Saurin Karatu"
        ],
        "correctAnswer": "Basirar Na'ura Mai Kwakwalwa",
        "explanation": "'Basirar Na'ura' or 'Hankali na wucin gadi / Basirar kwamfuta' denotes Artificial Intelligence."
      },
      {
        "id": "ha-u15-l1-q18",
        "type": "fill_blank",
        "sentence": "When translating between English and Hausa, translating word-for-word without cultural context is called 'Fassaran kalma-da-___'.",
        "missingWord": "kalma",
        "options": [
          "kalma",
          "jumla",
          "rubutu",
          "baki"
        ],
        "correctAnswer": "kalma",
        "explanation": "'Fassara kalma-da-kalma' (word-for-word / literal translation) often distorts idiomatic meaning."
      },
      {
        "id": "ha-u15-l1-q19",
        "type": "multiple_choice",
        "prompt": "In diplomatic protocol, what is an 'Ambassador' called in Hausa?",
        "options": [
          "Jakada",
          "Gwamna",
          "Mai Unguwa",
          "Kwamishina"
        ],
        "correctAnswer": "Jakada",
        "explanation": "'Jakada' is an envoy, delegate, or diplomatic ambassador."
      },
      {
        "id": "ha-u15-l1-q20",
        "type": "matching",
        "prompt": "Match deep idioms (Karin magana mai zurfi) with metaphorical meanings:",
        "pairs": [
          {
            "native": "Kafa ta ɗauki kafa",
            "english": "Fleeing in utter panic / Running for dear life",
            "left": "Kafa ta ɗauki kafa",
            "right": "Fleeing in utter panic / Running for dear life"
          },
          {
            "native": "Jan kunne",
            "english": "Stern warning / Admonition (pulling the ear)",
            "left": "Jan kunne",
            "right": "Stern warning / Admonition (pulling the ear)"
          },
          {
            "native": "Zuba ido",
            "english": "Waiting with watchful patience / Observing closely",
            "left": "Zuba ido",
            "right": "Waiting with watchful patience / Observing closely"
          },
          {
            "native": "Sauke nauyi",
            "english": "Discharging an onerous civic or parental duty",
            "left": "Sauke nauyi",
            "right": "Discharging an onerous civic or parental duty"
          }
        ]
      }
    ]
  }
];
