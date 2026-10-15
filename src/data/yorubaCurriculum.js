// NERDC-Aligned Yoruba Curriculum Bank (Álífábẹ́ẹ̀tì àti Àmì Ohùn Yorùbá)
// 15 Units across 3 Levels (Beginner, Intermediate, Advanced)
// Exactly 20 Questions per Unit/Lesson = 300 Questions Total
// Fully conforms to NERDC standard benchmarks, Ọmọlúwàbí cultural ethics, and QuizModal interactive schemas

export const yorubaAllUnits = [
  {
    "id": "y-unit-1",
    "unitId": "y-unit-1",
    "unitNumber": 1,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 1: The Yoruba Alphabet and Vowel System (Álífábẹ́ẹ̀tì àti Fáwẹ́lì)",
    "subtitle": "The 25 letters of Álífábẹ́ẹ̀tì Yorùbá, oral vs. nasal vowels, sub-dots (ẹ, ọ, ṣ), and the three tones (Dó, Re, Mì).",
    "icon": "BookOpen",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "y-u1-l1",
        "title": "Lesson 1: Álífábẹ́ẹ̀tì, Fáwẹ́lì àti Àmì Ohùn (Alphabet, Vowels & Tonal System)",
        "description": "Master the 25 letters of standard Yoruba, sub-dotted vowels and consonants (ẹ, ọ, ṣ), nasal vowels, and tone identification.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "How many letters are in the standard Yoruba alphabet (Álífábẹ́ẹ̀tì Yorùbá)?",
            "options": [
              "25 letters",
              "26 letters",
              "36 letters",
              "20 letters"
            ],
            "correctAnswer": "25 letters",
            "explanation": "The standard Yoruba alphabet has 25 letters: 7 oral vowels and 18 consonants (letters c, q, v, x, z are not included)."
          },
          {
            "id": "y-u1-l1-q2",
            "type": "matching",
            "prompt": "Match the sub-dotted Yoruba letters with their phonetic descriptions:",
            "pairs": [
              {
                "native": "Ẹ / ẹ",
                "english": "Open-mid front unrounded vowel (/ɛ/ as in 'get')",
                "left": "Ẹ / ẹ",
                "right": "Open-mid front unrounded vowel (/ɛ/ as in 'get')"
              },
              {
                "native": "Ọ / ọ",
                "english": "Open-mid back rounded vowel (/ɔ/ as in 'saw')",
                "left": "Ọ / ọ",
                "right": "Open-mid back rounded vowel (/ɔ/ as in 'saw')"
              },
              {
                "native": "Ṣ / ṣ",
                "english": "Voiceless postalveolar fricative (/ʃ/ as 'sh' in 'shoe')",
                "left": "Ṣ / ṣ",
                "right": "Voiceless postalveolar fricative (/ʃ/ as 'sh' in 'shoe')"
              },
              {
                "native": "Gb / gb",
                "english": "Voiced labial-velar stop consonant",
                "left": "Gb / gb",
                "right": "Voiced labial-velar stop consonant"
              }
            ]
          },
          {
            "id": "y-u1-l1-q3",
            "type": "fill_blank",
            "sentence": "The three fundamental tones in Yoruba are High (Dó), Mid (Re), and Low (___).",
            "missingWord": "Mì",
            "options": [
              "Mì",
              "Fá",
              "Sól",
              "Lá"
            ],
            "correctAnswer": "Mì",
            "explanation": "Yoruba has 3 musical register tones: Dó (High tone /), Re (Mid tone - unmarked), and Mì (Low tone \\)."
          },
          {
            "id": "y-u1-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Èdè Yorùbá ní àmì ohùn mẹ́ta' (Yoruba language has three tones):",
            "tokens": [
              "Èdè",
              "Yorùbá",
              "ní",
              "àmì",
              "ohùn",
              "mẹ́ta"
            ],
            "correctTokens": [
              "Èdè",
              "Yorùbá",
              "ní",
              "àmì",
              "ohùn",
              "mẹ́ta"
            ]
          },
          {
            "id": "y-u1-l1-q5",
            "type": "audio_listen",
            "phrase": "Ọwọ́",
            "prompt": "Listen to the word with High tone (Ọwọ́). What does it mean?",
            "options": [
              "Hand",
              "Money",
              "Respect",
              "Broom"
            ],
            "correctAnswer": "Hand",
            "explanation": "Tone changes meaning in Yoruba: 'ọwọ́' (High) = hand; 'owó' = money; 'ọ̀wọ̀' (Low-Low) = respect; 'ọ̀wọ́' = broom."
          },
          {
            "id": "y-u1-l1-q6",
            "type": "multiple_choice",
            "prompt": "Which of the following is a nasal vowel (fáwẹ́lì àránmú) in Yoruba?",
            "options": [
              "An",
              "E",
              "O",
              "Ba"
            ],
            "correctAnswer": "An",
            "explanation": "The 5 Yoruba nasal vowels end with 'n': an, ẹn, in, ọn, un."
          },
          {
            "id": "y-u1-l1-q7",
            "type": "matching",
            "prompt": "Match the three Yoruba tone marks with their symbols and names:",
            "pairs": [
              {
                "native": "Dó",
                "english": "High tone (/) acute accent",
                "left": "Dó",
                "right": "High tone (/) acute accent"
              },
              {
                "native": "Re",
                "english": "Mid tone (unmarked neutral pitch)",
                "left": "Re",
                "right": "Mid tone (unmarked neutral pitch)"
              },
              {
                "native": "Mì",
                "english": "Low tone (\\) grave accent",
                "left": "Mì",
                "right": "Low tone (\\) grave accent"
              },
              {
                "native": "Àmì ohùn",
                "english": "Tone mark / Pitch accent",
                "left": "Àmì ohùn",
                "right": "Tone mark / Pitch accent"
              }
            ]
          },
          {
            "id": "y-u1-l1-q8",
            "type": "fill_blank",
            "sentence": "The word for 'Money' in Yoruba with Mid-High tone is '___'.",
            "missingWord": "Owó",
            "options": [
              "Owó",
              "Ọ̀wọ̀",
              "Ọwọ́",
              "Ọ̀wọ́"
            ],
            "correctAnswer": "Owó",
            "explanation": "'Owó' (O-mid, wó-high) means money."
          },
          {
            "id": "y-u1-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Fáwẹ́lì orí ahọ́n jẹ́ méje' (Oral vowels are seven):",
            "tokens": [
              "Fáwẹ́lì",
              "orí",
              "ahọ́n",
              "jẹ́",
              "méje"
            ],
            "correctTokens": [
              "Fáwẹ́lì",
              "orí",
              "ahọ́n",
              "jẹ́",
              "méje"
            ]
          },
          {
            "id": "y-u1-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does the word 'ọ̀wọ̀' (Low-Low tone) mean?",
            "options": [
              "Respect / Honor",
              "Hand",
              "Money",
              "Broom"
            ],
            "correctAnswer": "Respect / Honor",
            "explanation": "'Ọ̀wọ̀' (with two low grave accents) means respect and honor."
          },
          {
            "id": "y-u1-l1-q11",
            "type": "audio_listen",
            "phrase": "Àkùkọ kọ lárọ̀",
            "prompt": "Listen to the sentence. What creature is crowing in the morning?",
            "options": [
              "The rooster / cock",
              "The goat",
              "The dog",
              "The bird"
            ],
            "correctAnswer": "The rooster / cock",
            "explanation": "'Àkùkọ' means rooster / cock; 'kọ lárọ̀' = crows in the morning."
          },
          {
            "id": "y-u1-l1-q12",
            "type": "matching",
            "prompt": "Match Yoruba tone minimal pairs (owo):",
            "pairs": [
              {
                "native": "Ọwọ́ (Mid-High)",
                "english": "Hand",
                "left": "Ọwọ́ (Mid-High)",
                "right": "Hand"
              },
              {
                "native": "Owó (Mid-High)",
                "english": "Money",
                "left": "Owó (Mid-High)",
                "right": "Money"
              },
              {
                "native": "Ọ̀wọ̀ (Low-Low)",
                "english": "Respect / Honor",
                "left": "Ọ̀wọ̀ (Low-Low)",
                "right": "Respect / Honor"
              },
              {
                "native": "Ọ̀wọ́ (Low-High)",
                "english": "Broom / Bunch / Cohort",
                "left": "Ọ̀wọ́ (Low-High)",
                "right": "Broom / Bunch / Cohort"
              }
            ]
          },
          {
            "id": "y-u1-l1-q13",
            "type": "fill_blank",
            "sentence": "In Yoruba consonants, the letter 'P' is not pronounced like English /p/ but as a voiceless ___ plosive (/kp/).",
            "missingWord": "labial-velar",
            "options": [
              "labial-velar",
              "dental",
              "glottal",
              "nasal"
            ],
            "correctAnswer": "labial-velar",
            "explanation": "Yoruba 'P' is phonetically a co-articulated voiceless labial-velar plosive /kp/ (as in 'púpọ̀')."
          },
          {
            "id": "y-u1-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the letters of the sub-dotted set: 'ẹ, ọ, ṣ':",
            "tokens": [
              "ẹ,",
              "ọ,",
              "ṣ"
            ],
            "correctTokens": [
              "ẹ,",
              "ọ,",
              "ṣ"
            ]
          },
          {
            "id": "y-u1-l1-q15",
            "type": "multiple_choice",
            "prompt": "Which letter among these does NOT exist in the standard 25-letter Yoruba alphabet?",
            "options": [
              "C",
              "Ẹ",
              "Ọ",
              "Ṣ"
            ],
            "correctAnswer": "C",
            "explanation": "Letters C, Q, V, X, and Z are omitted from the Yoruba alphabet. Words with 'sh' use 'Ṣ', and /k/ sounds use 'K'."
          },
          {
            "id": "y-u1-l1-q16",
            "type": "audio_listen",
            "phrase": "Ṣe dáadáa ni?",
            "prompt": "Listen to the question. What does 'Ṣe dáadáa ni?' ask?",
            "options": [
              "Is everything good with you?",
              "Where are you going?",
              "Who are you?",
              "What did you buy?"
            ],
            "correctAnswer": "Is everything good with you?",
            "explanation": "'Ṣe dáadáa ni?' is a very common warm conversational check-in meaning 'Is all well with you?'."
          },
          {
            "id": "y-u1-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is a syllable that carries a tone without a consonant called in Yoruba phonology?",
            "options": [
              "Sílébù fáwẹ́lì nìkan (Vocalic syllable)",
              "Mgbochiume",
              "Kọnsónáǹtì",
              "Àpólà"
            ],
            "correctAnswer": "Sílébù fáwẹ́lì nìkan (Vocalic syllable)",
            "explanation": "Vowels in Yoruba can stand alone as complete tone-bearing syllables (e.g. 'ó' in 'ó lọ')."
          },
          {
            "id": "y-u1-l1-q18",
            "type": "fill_blank",
            "sentence": "The sub-dot diacritic placed beneath ẹ, ọ, and ṣ in Yoruba orthography is called 'àmì ___'.",
            "missingWord": "ìsàlẹ̀",
            "options": [
              "ìsàlẹ̀",
              "òkè",
              "ohùn",
              "àárín"
            ],
            "correctAnswer": "ìsàlẹ̀",
            "explanation": "'Àmì ìsàlẹ̀' or 'àmì abẹ́' refers to the sub-dot placed beneath letters."
          },
          {
            "id": "y-u1-l1-q19",
            "type": "multiple_choice",
            "prompt": "Which pair represents nasal vowels in Yoruba?",
            "options": [
              "An and In",
              "Ba and Da",
              "La and Ra",
              "Ọ and O"
            ],
            "correctAnswer": "An and In",
            "explanation": "'An' and 'In' are two of the 5 nasal vowels (fáwẹ́lì àránmúpe) in Yoruba."
          },
          {
            "id": "y-u1-l1-q20",
            "type": "matching",
            "prompt": "Match grammatical terminology in Yoruba linguistic studies:",
            "pairs": [
              {
                "native": "Fáwẹ́lì",
                "english": "Vowel",
                "left": "Fáwẹ́lì",
                "right": "Vowel"
              },
              {
                "native": "Kọ́nsónáǹtì",
                "english": "Consonant",
                "left": "Kọ́nsónáǹtì",
                "right": "Consonant"
              },
              {
                "native": "Àmì ohùn",
                "english": "Tone mark",
                "left": "Àmì ohùn",
                "right": "Tone mark"
              },
              {
                "native": "Sílébù",
                "english": "Syllable",
                "left": "Sílébù",
                "right": "Sílébù"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u1-l1-q1",
        "type": "multiple_choice",
        "prompt": "How many letters are in the standard Yoruba alphabet (Álífábẹ́ẹ̀tì Yorùbá)?",
        "options": [
          "25 letters",
          "26 letters",
          "36 letters",
          "20 letters"
        ],
        "correctAnswer": "25 letters",
        "explanation": "The standard Yoruba alphabet has 25 letters: 7 oral vowels and 18 consonants (letters c, q, v, x, z are not included)."
      },
      {
        "id": "y-u1-l1-q2",
        "type": "matching",
        "prompt": "Match the sub-dotted Yoruba letters with their phonetic descriptions:",
        "pairs": [
          {
            "native": "Ẹ / ẹ",
            "english": "Open-mid front unrounded vowel (/ɛ/ as in 'get')",
            "left": "Ẹ / ẹ",
            "right": "Open-mid front unrounded vowel (/ɛ/ as in 'get')"
          },
          {
            "native": "Ọ / ọ",
            "english": "Open-mid back rounded vowel (/ɔ/ as in 'saw')",
            "left": "Ọ / ọ",
            "right": "Open-mid back rounded vowel (/ɔ/ as in 'saw')"
          },
          {
            "native": "Ṣ / ṣ",
            "english": "Voiceless postalveolar fricative (/ʃ/ as 'sh' in 'shoe')",
            "left": "Ṣ / ṣ",
            "right": "Voiceless postalveolar fricative (/ʃ/ as 'sh' in 'shoe')"
          },
          {
            "native": "Gb / gb",
            "english": "Voiced labial-velar stop consonant",
            "left": "Gb / gb",
            "right": "Voiced labial-velar stop consonant"
          }
        ]
      },
      {
        "id": "y-u1-l1-q3",
        "type": "fill_blank",
        "sentence": "The three fundamental tones in Yoruba are High (Dó), Mid (Re), and Low (___).",
        "missingWord": "Mì",
        "options": [
          "Mì",
          "Fá",
          "Sól",
          "Lá"
        ],
        "correctAnswer": "Mì",
        "explanation": "Yoruba has 3 musical register tones: Dó (High tone /), Re (Mid tone - unmarked), and Mì (Low tone \\)."
      },
      {
        "id": "y-u1-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Èdè Yorùbá ní àmì ohùn mẹ́ta' (Yoruba language has three tones):",
        "tokens": [
          "Èdè",
          "Yorùbá",
          "ní",
          "àmì",
          "ohùn",
          "mẹ́ta"
        ],
        "correctTokens": [
          "Èdè",
          "Yorùbá",
          "ní",
          "àmì",
          "ohùn",
          "mẹ́ta"
        ]
      },
      {
        "id": "y-u1-l1-q5",
        "type": "audio_listen",
        "phrase": "Ọwọ́",
        "prompt": "Listen to the word with High tone (Ọwọ́). What does it mean?",
        "options": [
          "Hand",
          "Money",
          "Respect",
          "Broom"
        ],
        "correctAnswer": "Hand",
        "explanation": "Tone changes meaning in Yoruba: 'ọwọ́' (High) = hand; 'owó' = money; 'ọ̀wọ̀' (Low-Low) = respect; 'ọ̀wọ́' = broom."
      },
      {
        "id": "y-u1-l1-q6",
        "type": "multiple_choice",
        "prompt": "Which of the following is a nasal vowel (fáwẹ́lì àránmú) in Yoruba?",
        "options": [
          "An",
          "E",
          "O",
          "Ba"
        ],
        "correctAnswer": "An",
        "explanation": "The 5 Yoruba nasal vowels end with 'n': an, ẹn, in, ọn, un."
      },
      {
        "id": "y-u1-l1-q7",
        "type": "matching",
        "prompt": "Match the three Yoruba tone marks with their symbols and names:",
        "pairs": [
          {
            "native": "Dó",
            "english": "High tone (/) acute accent",
            "left": "Dó",
            "right": "High tone (/) acute accent"
          },
          {
            "native": "Re",
            "english": "Mid tone (unmarked neutral pitch)",
            "left": "Re",
            "right": "Mid tone (unmarked neutral pitch)"
          },
          {
            "native": "Mì",
            "english": "Low tone (\\) grave accent",
            "left": "Mì",
            "right": "Low tone (\\) grave accent"
          },
          {
            "native": "Àmì ohùn",
            "english": "Tone mark / Pitch accent",
            "left": "Àmì ohùn",
            "right": "Tone mark / Pitch accent"
          }
        ]
      },
      {
        "id": "y-u1-l1-q8",
        "type": "fill_blank",
        "sentence": "The word for 'Money' in Yoruba with Mid-High tone is '___'.",
        "missingWord": "Owó",
        "options": [
          "Owó",
          "Ọ̀wọ̀",
          "Ọwọ́",
          "Ọ̀wọ́"
        ],
        "correctAnswer": "Owó",
        "explanation": "'Owó' (O-mid, wó-high) means money."
      },
      {
        "id": "y-u1-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Fáwẹ́lì orí ahọ́n jẹ́ méje' (Oral vowels are seven):",
        "tokens": [
          "Fáwẹ́lì",
          "orí",
          "ahọ́n",
          "jẹ́",
          "méje"
        ],
        "correctTokens": [
          "Fáwẹ́lì",
          "orí",
          "ahọ́n",
          "jẹ́",
          "méje"
        ]
      },
      {
        "id": "y-u1-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does the word 'ọ̀wọ̀' (Low-Low tone) mean?",
        "options": [
          "Respect / Honor",
          "Hand",
          "Money",
          "Broom"
        ],
        "correctAnswer": "Respect / Honor",
        "explanation": "'Ọ̀wọ̀' (with two low grave accents) means respect and honor."
      },
      {
        "id": "y-u1-l1-q11",
        "type": "audio_listen",
        "phrase": "Àkùkọ kọ lárọ̀",
        "prompt": "Listen to the sentence. What creature is crowing in the morning?",
        "options": [
          "The rooster / cock",
          "The goat",
          "The dog",
          "The bird"
        ],
        "correctAnswer": "The rooster / cock",
        "explanation": "'Àkùkọ' means rooster / cock; 'kọ lárọ̀' = crows in the morning."
      },
      {
        "id": "y-u1-l1-q12",
        "type": "matching",
        "prompt": "Match Yoruba tone minimal pairs (owo):",
        "pairs": [
          {
            "native": "Ọwọ́ (Mid-High)",
            "english": "Hand",
            "left": "Ọwọ́ (Mid-High)",
            "right": "Hand"
          },
          {
            "native": "Owó (Mid-High)",
            "english": "Money",
            "left": "Owó (Mid-High)",
            "right": "Money"
          },
          {
            "native": "Ọ̀wọ̀ (Low-Low)",
            "english": "Respect / Honor",
            "left": "Ọ̀wọ̀ (Low-Low)",
            "right": "Respect / Honor"
          },
          {
            "native": "Ọ̀wọ́ (Low-High)",
            "english": "Broom / Bunch / Cohort",
            "left": "Ọ̀wọ́ (Low-High)",
            "right": "Broom / Bunch / Cohort"
          }
        ]
      },
      {
        "id": "y-u1-l1-q13",
        "type": "fill_blank",
        "sentence": "In Yoruba consonants, the letter 'P' is not pronounced like English /p/ but as a voiceless ___ plosive (/kp/).",
        "missingWord": "labial-velar",
        "options": [
          "labial-velar",
          "dental",
          "glottal",
          "nasal"
        ],
        "correctAnswer": "labial-velar",
        "explanation": "Yoruba 'P' is phonetically a co-articulated voiceless labial-velar plosive /kp/ (as in 'púpọ̀')."
      },
      {
        "id": "y-u1-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the letters of the sub-dotted set: 'ẹ, ọ, ṣ':",
        "tokens": [
          "ẹ,",
          "ọ,",
          "ṣ"
        ],
        "correctTokens": [
          "ẹ,",
          "ọ,",
          "ṣ"
        ]
      },
      {
        "id": "y-u1-l1-q15",
        "type": "multiple_choice",
        "prompt": "Which letter among these does NOT exist in the standard 25-letter Yoruba alphabet?",
        "options": [
          "C",
          "Ẹ",
          "Ọ",
          "Ṣ"
        ],
        "correctAnswer": "C",
        "explanation": "Letters C, Q, V, X, and Z are omitted from the Yoruba alphabet. Words with 'sh' use 'Ṣ', and /k/ sounds use 'K'."
      },
      {
        "id": "y-u1-l1-q16",
        "type": "audio_listen",
        "phrase": "Ṣe dáadáa ni?",
        "prompt": "Listen to the question. What does 'Ṣe dáadáa ni?' ask?",
        "options": [
          "Is everything good with you?",
          "Where are you going?",
          "Who are you?",
          "What did you buy?"
        ],
        "correctAnswer": "Is everything good with you?",
        "explanation": "'Ṣe dáadáa ni?' is a very common warm conversational check-in meaning 'Is all well with you?'."
      },
      {
        "id": "y-u1-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is a syllable that carries a tone without a consonant called in Yoruba phonology?",
        "options": [
          "Sílébù fáwẹ́lì nìkan (Vocalic syllable)",
          "Mgbochiume",
          "Kọnsónáǹtì",
          "Àpólà"
        ],
        "correctAnswer": "Sílébù fáwẹ́lì nìkan (Vocalic syllable)",
        "explanation": "Vowels in Yoruba can stand alone as complete tone-bearing syllables (e.g. 'ó' in 'ó lọ')."
      },
      {
        "id": "y-u1-l1-q18",
        "type": "fill_blank",
        "sentence": "The sub-dot diacritic placed beneath ẹ, ọ, and ṣ in Yoruba orthography is called 'àmì ___'.",
        "missingWord": "ìsàlẹ̀",
        "options": [
          "ìsàlẹ̀",
          "òkè",
          "ohùn",
          "àárín"
        ],
        "correctAnswer": "ìsàlẹ̀",
        "explanation": "'Àmì ìsàlẹ̀' or 'àmì abẹ́' refers to the sub-dot placed beneath letters."
      },
      {
        "id": "y-u1-l1-q19",
        "type": "multiple_choice",
        "prompt": "Which pair represents nasal vowels in Yoruba?",
        "options": [
          "An and In",
          "Ba and Da",
          "La and Ra",
          "Ọ and O"
        ],
        "correctAnswer": "An and In",
        "explanation": "'An' and 'In' are two of the 5 nasal vowels (fáwẹ́lì àránmúpe) in Yoruba."
      },
      {
        "id": "y-u1-l1-q20",
        "type": "matching",
        "prompt": "Match grammatical terminology in Yoruba linguistic studies:",
        "pairs": [
          {
            "native": "Fáwẹ́lì",
            "english": "Vowel",
            "left": "Fáwẹ́lì",
            "right": "Vowel"
          },
          {
            "native": "Kọ́nsónáǹtì",
            "english": "Consonant",
            "left": "Kọ́nsónáǹtì",
            "right": "Consonant"
          },
          {
            "native": "Àmì ohùn",
            "english": "Tone mark",
            "left": "Àmì ohùn",
            "right": "Tone mark"
          },
          {
            "native": "Sílébù",
            "english": "Syllable",
            "left": "Sílébù",
            "right": "Sílébù"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-2",
    "unitId": "y-unit-2",
    "unitNumber": 2,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 2: Greetings and Etiquette (Ìkíni àti Ìwà Ọmọlúwàbí)",
    "subtitle": "Time-of-day greetings (Ẹ kárọ̀, Ẹ káàsán), situational greetings, prostrating (ìdọ̀bálẹ̀), and Ọmọlúwàbí ethics.",
    "icon": "Sun",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "y-u2-l1",
        "title": "Lesson 1: Ìkíni, Ọ̀wọ̀ àti Ìwà Ọmọlúwàbí (Greetings, Respect & Character)",
        "description": "Master respectful time-of-day greetings, situational courtesies (ẹ kú iṣẹ́), honorific \"Ẹ\", and physical postures of respect.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the respectful Yoruba greeting for 'Good morning' addressed to an elder?",
            "options": [
              "Ẹ kú àárọ̀ / Ẹ kárọ̀",
              "Ẹ káàsán",
              "Ẹ kúalẹ́",
              "O dábọ̀"
            ],
            "correctAnswer": "Ẹ kú àárọ̀ / Ẹ kárọ̀",
            "explanation": "'Ẹ kú àárọ̀' (shortened as 'Ẹ kárọ̀') is the respectful morning greeting, with 'Ẹ' honoring the senior."
          },
          {
            "id": "y-u1-l1-q2",
            "type": "matching",
            "prompt": "Match time-of-day Yoruba greetings with English periods:",
            "pairs": [
              {
                "native": "Ẹ kú àárọ̀",
                "english": "Good morning",
                "left": "Ẹ kú àárọ̀",
                "right": "Good morning"
              },
              {
                "native": "Ẹ káàsán",
                "english": "Good afternoon (midday)",
                "left": "Ẹ káàsán",
                "right": "Good afternoon (midday)"
              },
              {
                "native": "Ẹ kú ìrọ̀lẹ́",
                "english": "Good evening",
                "left": "Ẹ kú ìrọ̀lẹ́",
                "right": "Good evening"
              },
              {
                "native": "Ẹ kú alẹ́",
                "english": "Good night",
                "left": "Ẹ kú alẹ́",
                "right": "Good night"
              }
            ]
          },
          {
            "id": "y-u1-l1-q3",
            "type": "fill_blank",
            "sentence": "The physical gesture of respect where a male prostrates completely on the ground before elders is called '___'.",
            "missingWord": "Ìdọ̀bálẹ̀",
            "options": [
              "Ìdọ̀bálẹ̀",
              "Ìkúnlẹ̀",
              "Ìkíni",
              "Ẹsẹ"
            ],
            "correctAnswer": "Ìdọ̀bálẹ̀",
            "explanation": "'Ìdọ̀bálẹ̀' is the quintessential traditional Yoruba gesture of male prostration before elders."
          },
          {
            "id": "y-u1-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ẹ kú iṣẹ́ o' (Well done with your work):",
            "tokens": [
              "Ẹ",
              "kú",
              "iṣẹ́",
              "o"
            ],
            "correctTokens": [
              "Ẹ",
              "kú",
              "iṣẹ́",
              "o"
            ]
          },
          {
            "id": "y-u1-l1-q5",
            "type": "audio_listen",
            "phrase": "Ẹ kú àbọ̀ sí ilé wa",
            "prompt": "Listen to the warm welcome. What does 'Ẹ kú àbọ̀ sí ilé wa' mean?",
            "options": [
              "Welcome to our home",
              "Goodbye, travel safely",
              "Good morning my brother",
              "Come and eat our food"
            ],
            "correctAnswer": "Welcome to our home",
            "explanation": "'Ẹ kú àbọ̀' = Welcome; 'sí ilé wa' = to our home."
          },
          {
            "id": "y-u1-l1-q6",
            "type": "multiple_choice",
            "prompt": "What physical posture of respect is traditionally performed by females when greeting elders in Yoruba culture?",
            "options": [
              "Ìkúnlẹ̀ (Kneeling down on both knees)",
              "Ìdọ̀bálẹ̀ (Prostrating flat)",
              "Waving from a distance",
              "High-fiving"
            ],
            "correctAnswer": "Ìkúnlẹ̀ (Kneeling down on both knees)",
            "explanation": "'Ìkúnlẹ̀' is the respectful traditional posture of kneeling down performed by females."
          },
          {
            "id": "y-u1-l1-q7",
            "type": "matching",
            "prompt": "Match situational greetings in Yoruba with occasions:",
            "pairs": [
              {
                "native": "Ẹ kú iṣẹ́",
                "english": "Greeting someone working / Well done",
                "left": "Ẹ kú iṣẹ́",
                "right": "Greeting someone working / Well done"
              },
              {
                "native": "Ẹ kú àbọ̀",
                "english": "Welcome back from a journey",
                "left": "Ẹ kú àbọ̀",
                "right": "Welcome back from a journey"
              },
              {
                "native": "Ẹ kú ilé",
                "english": "Greeting those met at home when arriving",
                "left": "Ẹ kú ilé",
                "right": "Greeting those met at home when arriving"
              },
              {
                "native": "Ẹ kú oríire",
                "english": "Congratulations on a triumph or good fortune",
                "left": "Ẹ kú oríire",
                "right": "Congratulations on a triumph or good fortune"
              }
            ]
          },
          {
            "id": "y-u1-l1-q8",
            "type": "fill_blank",
            "sentence": "When speaking to an elder or person of status, the honorific pronoun '___' must replace the casual 'O'.",
            "missingWord": "Ẹ",
            "options": [
              "Ẹ",
              "A",
              "Ó",
              "Wọ́n"
            ],
            "correctAnswer": "Ẹ",
            "explanation": "'Ẹ' is the 2nd person plural pronoun used honorifically to address individual elders with supreme respect."
          },
          {
            "id": "y-u1-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ẹ ṣeé púpọ̀ fún oúnjẹ' (Thank you very much for the food):",
            "tokens": [
              "Ẹ",
              "ṣeé",
              "púpọ̀",
              "fún",
              "oúnjẹ"
            ],
            "correctTokens": [
              "Ẹ",
              "ṣeé",
              "púpọ̀",
              "fún",
              "oúnjẹ"
            ]
          },
          {
            "id": "y-u1-l1-q10",
            "type": "multiple_choice",
            "prompt": "What philosophical concept embodies the ideal Yoruba persona of integrity, honor, benevolence, and humility?",
            "options": [
              "Ọmọlúwàbí",
              "Ọlọ́rọ̀",
              "Jagunjagun",
              "Oníṣòwò"
            ],
            "correctAnswer": "Ọmọlúwàbí",
            "explanation": "'Ọmọlúwàbí' (Ọmọ tí Olú-ìwà bí: child of character) is the philosophical epitome of moral rectitude."
          },
          {
            "id": "y-u1-l1-q11",
            "type": "audio_listen",
            "phrase": "O dábọ̀, títí di ọ̀la",
            "prompt": "Listen to the parting phrase. What does 'O dábọ̀, títí di ọ̀la' mean?",
            "options": [
              "Goodbye, until tomorrow",
              "Good evening, sleep well",
              "Welcome, come inside",
              "Have a blessed journey"
            ],
            "correctAnswer": "Goodbye, until tomorrow",
            "explanation": "'O dábọ̀' = Goodbye; 'títí di ọ̀la' = until tomorrow."
          },
          {
            "id": "y-u1-l1-q12",
            "type": "matching",
            "prompt": "Match responses to common Yoruba greetings:",
            "pairs": [
              {
                "native": "Ẹ kú àárọ̀ ->",
                "english": "Oòjíire bi? (Did you awake well?)",
                "left": "Ẹ kú àárọ̀ ->",
                "right": "Oòjíire bi? (Did you awake well?)"
              },
              {
                "native": "Ẹ kú iṣẹ́ ->",
                "english": "Ẹ ṣé o / Oòkú (Thank you)",
                "left": "Ẹ kú iṣẹ́ ->",
                "right": "Ẹ ṣé o / Oòkú (Thank you)"
              },
              {
                "native": "Báwo ni? ->",
                "english": "Àlàáfíà ni / Mo wà dáadáa (Peace / I am well)",
                "left": "Báwo ni? ->",
                "right": "Àlàáfíà ni / Mo wà dáadáa (Peace / I am well)"
              },
              {
                "native": "Ẹ kú àbọ̀ ->",
                "english": "Ẹ kú ilé (Greeting you who are at home)",
                "left": "Ẹ kú àbọ̀ ->",
                "right": "Ẹ kú ilé (Greeting you who are at home)"
              }
            ]
          },
          {
            "id": "y-u1-l1-q13",
            "type": "fill_blank",
            "sentence": "To say 'Please' when making a polite request, the Yoruba word is 'Ẹ ___'.",
            "missingWord": "dákun",
            "options": [
              "dákun",
              "kú",
              "ṣeé",
              "bọ̀"
            ],
            "correctAnswer": "dákun",
            "explanation": "'Ẹ dákun' (or casually 'Dákun') means 'Please'."
          },
          {
            "id": "y-u1-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ẹ má bínú sí mi' (Do not be angry with me / Pardon me):",
            "tokens": [
              "Ẹ",
              "má",
              "bínú",
              "sí",
              "mi"
            ],
            "correctTokens": [
              "Ẹ",
              "má",
              "bínú",
              "sí",
              "mi"
            ]
          },
          {
            "id": "y-u1-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Pẹ̀lẹ́ o' express when someone stumbles, feels unwell, or works hard?",
            "options": [
              "Sorry / Take heart / Sympathy / Gentle greeting",
              "Hurry up quickly",
              "Get out of the way",
              "Stand up immediately"
            ],
            "correctAnswer": "Sorry / Take heart / Sympathy / Gentle greeting",
            "explanation": "'Pẹ̀lẹ́' expresses empathy, soothing sympathy, and gentle courtesy."
          },
          {
            "id": "y-u1-l1-q16",
            "type": "audio_listen",
            "phrase": "Àlàáfíà kọ́ lẹ wà?",
            "prompt": "Listen to the polite inquiry. What does 'Àlàáfíà kọ́ lẹ wà?' mean?",
            "options": [
              "Are you in good health and peace?",
              "Where did you buy your clothes?",
              "Who cooked this meal?",
              "What is your name?"
            ],
            "correctAnswer": "Are you in good health and peace?",
            "explanation": "'Àlàáfíà' means peace/good health; 'Àlàáfíà kọ́ lẹ wà?' = Are you in good health?"
          },
          {
            "id": "y-u1-l1-q17",
            "type": "multiple_choice",
            "prompt": "How does one say 'Thank you' in standard Yoruba?",
            "options": [
              "Ẹ ṣeé / Mo dúpẹ́",
              "O dábọ̀",
              "Ẹ kú iṣẹ́",
              "Ẹ kárọ̀"
            ],
            "correctAnswer": "Ẹ ṣeé / Mo dúpẹ́",
            "explanation": "'Ẹ ṣeé' (Thank you) or 'Mo dúpẹ́' (I give thanks) express gratitude."
          },
          {
            "id": "y-u1-l1-q18",
            "type": "fill_blank",
            "sentence": "When someone suffers a bereavement, the appropriate condolence greeting is: 'Ẹ kú ___' (May you bear the loss).",
            "missingWord": "ọ̀fọ̀",
            "options": [
              "ọ̀fọ̀",
              "iṣẹ́",
              "ilé",
              "àbọ̀"
            ],
            "correctAnswer": "ọ̀fọ̀",
            "explanation": "'Ẹ kú ọ̀fọ̀' is the condolence greeting for bereavement/mourning."
          },
          {
            "id": "y-u1-l1-q19",
            "type": "multiple_choice",
            "prompt": "Why is greeting so elaborate and omnipresent in Yoruba daily life?",
            "options": [
              "It establishes social harmony, affirms humanity, and demonstrates upbringing (Ẹ̀kọ́ ilé)",
              "It is a legal penalty if you don't greet",
              "Because people have nothing else to say",
              "To know who has money"
            ],
            "correctAnswer": "It establishes social harmony, affirms humanity, and demonstrates upbringing (Ẹ̀kọ́ ilé)",
            "explanation": "In Yoruba culture, greeting is the foundational pillar of communal harmony and good breeding (Ẹ̀kọ́ ilé)."
          },
          {
            "id": "y-u1-l1-q20",
            "type": "matching",
            "prompt": "Match core moral pillars of Ọmọlúwàbí character:",
            "pairs": [
              {
                "native": "Ọ̀wọ̀",
                "english": "Respect and deference to seniors and elders",
                "left": "Ọ̀wọ̀",
                "right": "Respect and deference to seniors and elders"
              },
              {
                "native": "Òtítọ́",
                "english": "Truthfulness and unbending honesty",
                "left": "Òtítọ́",
                "right": "Truthfulness and unbending honesty"
              },
              {
                "native": "Ìrẹ̀lẹ̀",
                "english": "Humility and modest deportment",
                "left": "Ìrẹ̀lẹ̀",
                "right": "Humility and modest deportment"
              },
              {
                "native": "Inú rere",
                "english": "Kindness, generosity, and pure goodwill",
                "left": "Inú rere",
                "right": "Kindness, generosity, and pure goodwill"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u1-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the respectful Yoruba greeting for 'Good morning' addressed to an elder?",
        "options": [
          "Ẹ kú àárọ̀ / Ẹ kárọ̀",
          "Ẹ káàsán",
          "Ẹ kúalẹ́",
          "O dábọ̀"
        ],
        "correctAnswer": "Ẹ kú àárọ̀ / Ẹ kárọ̀",
        "explanation": "'Ẹ kú àárọ̀' (shortened as 'Ẹ kárọ̀') is the respectful morning greeting, with 'Ẹ' honoring the senior."
      },
      {
        "id": "y-u1-l1-q2",
        "type": "matching",
        "prompt": "Match time-of-day Yoruba greetings with English periods:",
        "pairs": [
          {
            "native": "Ẹ kú àárọ̀",
            "english": "Good morning",
            "left": "Ẹ kú àárọ̀",
            "right": "Good morning"
          },
          {
            "native": "Ẹ káàsán",
            "english": "Good afternoon (midday)",
            "left": "Ẹ káàsán",
            "right": "Good afternoon (midday)"
          },
          {
            "native": "Ẹ kú ìrọ̀lẹ́",
            "english": "Good evening",
            "left": "Ẹ kú ìrọ̀lẹ́",
            "right": "Good evening"
          },
          {
            "native": "Ẹ kú alẹ́",
            "english": "Good night",
            "left": "Ẹ kú alẹ́",
            "right": "Good night"
          }
        ]
      },
      {
        "id": "y-u1-l1-q3",
        "type": "fill_blank",
        "sentence": "The physical gesture of respect where a male prostrates completely on the ground before elders is called '___'.",
        "missingWord": "Ìdọ̀bálẹ̀",
        "options": [
          "Ìdọ̀bálẹ̀",
          "Ìkúnlẹ̀",
          "Ìkíni",
          "Ẹsẹ"
        ],
        "correctAnswer": "Ìdọ̀bálẹ̀",
        "explanation": "'Ìdọ̀bálẹ̀' is the quintessential traditional Yoruba gesture of male prostration before elders."
      },
      {
        "id": "y-u1-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ẹ kú iṣẹ́ o' (Well done with your work):",
        "tokens": [
          "Ẹ",
          "kú",
          "iṣẹ́",
          "o"
        ],
        "correctTokens": [
          "Ẹ",
          "kú",
          "iṣẹ́",
          "o"
        ]
      },
      {
        "id": "y-u1-l1-q5",
        "type": "audio_listen",
        "phrase": "Ẹ kú àbọ̀ sí ilé wa",
        "prompt": "Listen to the warm welcome. What does 'Ẹ kú àbọ̀ sí ilé wa' mean?",
        "options": [
          "Welcome to our home",
          "Goodbye, travel safely",
          "Good morning my brother",
          "Come and eat our food"
        ],
        "correctAnswer": "Welcome to our home",
        "explanation": "'Ẹ kú àbọ̀' = Welcome; 'sí ilé wa' = to our home."
      },
      {
        "id": "y-u1-l1-q6",
        "type": "multiple_choice",
        "prompt": "What physical posture of respect is traditionally performed by females when greeting elders in Yoruba culture?",
        "options": [
          "Ìkúnlẹ̀ (Kneeling down on both knees)",
          "Ìdọ̀bálẹ̀ (Prostrating flat)",
          "Waving from a distance",
          "High-fiving"
        ],
        "correctAnswer": "Ìkúnlẹ̀ (Kneeling down on both knees)",
        "explanation": "'Ìkúnlẹ̀' is the respectful traditional posture of kneeling down performed by females."
      },
      {
        "id": "y-u1-l1-q7",
        "type": "matching",
        "prompt": "Match situational greetings in Yoruba with occasions:",
        "pairs": [
          {
            "native": "Ẹ kú iṣẹ́",
            "english": "Greeting someone working / Well done",
            "left": "Ẹ kú iṣẹ́",
            "right": "Greeting someone working / Well done"
          },
          {
            "native": "Ẹ kú àbọ̀",
            "english": "Welcome back from a journey",
            "left": "Ẹ kú àbọ̀",
            "right": "Welcome back from a journey"
          },
          {
            "native": "Ẹ kú ilé",
            "english": "Greeting those met at home when arriving",
            "left": "Ẹ kú ilé",
            "right": "Greeting those met at home when arriving"
          },
          {
            "native": "Ẹ kú oríire",
            "english": "Congratulations on a triumph or good fortune",
            "left": "Ẹ kú oríire",
            "right": "Congratulations on a triumph or good fortune"
          }
        ]
      },
      {
        "id": "y-u1-l1-q8",
        "type": "fill_blank",
        "sentence": "When speaking to an elder or person of status, the honorific pronoun '___' must replace the casual 'O'.",
        "missingWord": "Ẹ",
        "options": [
          "Ẹ",
          "A",
          "Ó",
          "Wọ́n"
        ],
        "correctAnswer": "Ẹ",
        "explanation": "'Ẹ' is the 2nd person plural pronoun used honorifically to address individual elders with supreme respect."
      },
      {
        "id": "y-u1-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ẹ ṣeé púpọ̀ fún oúnjẹ' (Thank you very much for the food):",
        "tokens": [
          "Ẹ",
          "ṣeé",
          "púpọ̀",
          "fún",
          "oúnjẹ"
        ],
        "correctTokens": [
          "Ẹ",
          "ṣeé",
          "púpọ̀",
          "fún",
          "oúnjẹ"
        ]
      },
      {
        "id": "y-u1-l1-q10",
        "type": "multiple_choice",
        "prompt": "What philosophical concept embodies the ideal Yoruba persona of integrity, honor, benevolence, and humility?",
        "options": [
          "Ọmọlúwàbí",
          "Ọlọ́rọ̀",
          "Jagunjagun",
          "Oníṣòwò"
        ],
        "correctAnswer": "Ọmọlúwàbí",
        "explanation": "'Ọmọlúwàbí' (Ọmọ tí Olú-ìwà bí: child of character) is the philosophical epitome of moral rectitude."
      },
      {
        "id": "y-u1-l1-q11",
        "type": "audio_listen",
        "phrase": "O dábọ̀, títí di ọ̀la",
        "prompt": "Listen to the parting phrase. What does 'O dábọ̀, títí di ọ̀la' mean?",
        "options": [
          "Goodbye, until tomorrow",
          "Good evening, sleep well",
          "Welcome, come inside",
          "Have a blessed journey"
        ],
        "correctAnswer": "Goodbye, until tomorrow",
        "explanation": "'O dábọ̀' = Goodbye; 'títí di ọ̀la' = until tomorrow."
      },
      {
        "id": "y-u1-l1-q12",
        "type": "matching",
        "prompt": "Match responses to common Yoruba greetings:",
        "pairs": [
          {
            "native": "Ẹ kú àárọ̀ ->",
            "english": "Oòjíire bi? (Did you awake well?)",
            "left": "Ẹ kú àárọ̀ ->",
            "right": "Oòjíire bi? (Did you awake well?)"
          },
          {
            "native": "Ẹ kú iṣẹ́ ->",
            "english": "Ẹ ṣé o / Oòkú (Thank you)",
            "left": "Ẹ kú iṣẹ́ ->",
            "right": "Ẹ ṣé o / Oòkú (Thank you)"
          },
          {
            "native": "Báwo ni? ->",
            "english": "Àlàáfíà ni / Mo wà dáadáa (Peace / I am well)",
            "left": "Báwo ni? ->",
            "right": "Àlàáfíà ni / Mo wà dáadáa (Peace / I am well)"
          },
          {
            "native": "Ẹ kú àbọ̀ ->",
            "english": "Ẹ kú ilé (Greeting you who are at home)",
            "left": "Ẹ kú àbọ̀ ->",
            "right": "Ẹ kú ilé (Greeting you who are at home)"
          }
        ]
      },
      {
        "id": "y-u1-l1-q13",
        "type": "fill_blank",
        "sentence": "To say 'Please' when making a polite request, the Yoruba word is 'Ẹ ___'.",
        "missingWord": "dákun",
        "options": [
          "dákun",
          "kú",
          "ṣeé",
          "bọ̀"
        ],
        "correctAnswer": "dákun",
        "explanation": "'Ẹ dákun' (or casually 'Dákun') means 'Please'."
      },
      {
        "id": "y-u1-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ẹ má bínú sí mi' (Do not be angry with me / Pardon me):",
        "tokens": [
          "Ẹ",
          "má",
          "bínú",
          "sí",
          "mi"
        ],
        "correctTokens": [
          "Ẹ",
          "má",
          "bínú",
          "sí",
          "mi"
        ]
      },
      {
        "id": "y-u1-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Pẹ̀lẹ́ o' express when someone stumbles, feels unwell, or works hard?",
        "options": [
          "Sorry / Take heart / Sympathy / Gentle greeting",
          "Hurry up quickly",
          "Get out of the way",
          "Stand up immediately"
        ],
        "correctAnswer": "Sorry / Take heart / Sympathy / Gentle greeting",
        "explanation": "'Pẹ̀lẹ́' expresses empathy, soothing sympathy, and gentle courtesy."
      },
      {
        "id": "y-u1-l1-q16",
        "type": "audio_listen",
        "phrase": "Àlàáfíà kọ́ lẹ wà?",
        "prompt": "Listen to the polite inquiry. What does 'Àlàáfíà kọ́ lẹ wà?' mean?",
        "options": [
          "Are you in good health and peace?",
          "Where did you buy your clothes?",
          "Who cooked this meal?",
          "What is your name?"
        ],
        "correctAnswer": "Are you in good health and peace?",
        "explanation": "'Àlàáfíà' means peace/good health; 'Àlàáfíà kọ́ lẹ wà?' = Are you in good health?"
      },
      {
        "id": "y-u1-l1-q17",
        "type": "multiple_choice",
        "prompt": "How does one say 'Thank you' in standard Yoruba?",
        "options": [
          "Ẹ ṣeé / Mo dúpẹ́",
          "O dábọ̀",
          "Ẹ kú iṣẹ́",
          "Ẹ kárọ̀"
        ],
        "correctAnswer": "Ẹ ṣeé / Mo dúpẹ́",
        "explanation": "'Ẹ ṣeé' (Thank you) or 'Mo dúpẹ́' (I give thanks) express gratitude."
      },
      {
        "id": "y-u1-l1-q18",
        "type": "fill_blank",
        "sentence": "When someone suffers a bereavement, the appropriate condolence greeting is: 'Ẹ kú ___' (May you bear the loss).",
        "missingWord": "ọ̀fọ̀",
        "options": [
          "ọ̀fọ̀",
          "iṣẹ́",
          "ilé",
          "àbọ̀"
        ],
        "correctAnswer": "ọ̀fọ̀",
        "explanation": "'Ẹ kú ọ̀fọ̀' is the condolence greeting for bereavement/mourning."
      },
      {
        "id": "y-u1-l1-q19",
        "type": "multiple_choice",
        "prompt": "Why is greeting so elaborate and omnipresent in Yoruba daily life?",
        "options": [
          "It establishes social harmony, affirms humanity, and demonstrates upbringing (Ẹ̀kọ́ ilé)",
          "It is a legal penalty if you don't greet",
          "Because people have nothing else to say",
          "To know who has money"
        ],
        "correctAnswer": "It establishes social harmony, affirms humanity, and demonstrates upbringing (Ẹ̀kọ́ ilé)",
        "explanation": "In Yoruba culture, greeting is the foundational pillar of communal harmony and good breeding (Ẹ̀kọ́ ilé)."
      },
      {
        "id": "y-u1-l1-q20",
        "type": "matching",
        "prompt": "Match core moral pillars of Ọmọlúwàbí character:",
        "pairs": [
          {
            "native": "Ọ̀wọ̀",
            "english": "Respect and deference to seniors and elders",
            "left": "Ọ̀wọ̀",
            "right": "Respect and deference to seniors and elders"
          },
          {
            "native": "Òtítọ́",
            "english": "Truthfulness and unbending honesty",
            "left": "Òtítọ́",
            "right": "Truthfulness and unbending honesty"
          },
          {
            "native": "Ìrẹ̀lẹ̀",
            "english": "Humility and modest deportment",
            "left": "Ìrẹ̀lẹ̀",
            "right": "Humility and modest deportment"
          },
          {
            "native": "Inú rere",
            "english": "Kindness, generosity, and pure goodwill",
            "left": "Inú rere",
            "right": "Kindness, generosity, and pure goodwill"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-3",
    "unitId": "y-unit-3",
    "unitNumber": 3,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 3: Numerals and Colors (Àwọn Nọ́mbà àti Àwọ̀)",
    "subtitle": "Counting from 1 to 50 (Oókan, Èéjì, Ẹ́ta), primary colors (Funfun, Dúdú, Pupa), and the seven days of the week.",
    "icon": "Layers",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "y-u3-l1",
        "title": "Lesson 1: Ọ̀nà Ìkàwé 1-50, Àwọ̀ àti Ọjọ́ Ọ̀sẹ̀ (Numbers, Colors & Days)",
        "description": "Master counting from 1 to 50 in standard Yoruba, naming primary colors (funfun, dúdú, pupa), and the 7 days of the week.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u3-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the number 'three' (3) in Yoruba?",
            "options": [
              "Ẹ́ta",
              "Oókan",
              "Èéjì",
              "Ẹ́rin"
            ],
            "correctAnswer": "Ẹ́ta",
            "explanation": "1=Oókan, 2=Èéjì, 3=Ẹ́ta, 4=Ẹ́rin, 5=Àrún."
          },
          {
            "id": "y-u3-l1-q2",
            "type": "matching",
            "prompt": "Match Yoruba numerals 1 to 4 with their digits:",
            "pairs": [
              {
                "native": "Oókan / Ení",
                "english": "1 (One)",
                "left": "Oókan / Ení",
                "right": "1 (One)"
              },
              {
                "native": "Èéjì",
                "english": "2 (Two)",
                "left": "Èéjì",
                "right": "2 (Two)"
              },
              {
                "native": "Ẹ́ta",
                "english": "3 (Three)",
                "left": "Ẹ́ta",
                "right": "3 (Three)"
              },
              {
                "native": "Ẹ́rin",
                "english": "4 (Four)",
                "left": "Ẹ́rin",
                "right": "4 (Four)"
              }
            ]
          },
          {
            "id": "y-u3-l1-q3",
            "type": "fill_blank",
            "sentence": "The number ten in Yoruba is 'Ẹ̀wá'. Twenty (20) is '___'.",
            "missingWord": "Ogun",
            "options": [
              "Ogun",
              "Ọgbọ̀n",
              "Àádọ́ta",
              "Ọgọ́rùn-ún"
            ],
            "correctAnswer": "Ogun",
            "explanation": "'Ogun' is twenty (20) in Yoruba."
          },
          {
            "id": "y-u3-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the numbers: 'Ẹ̀fà, èje, ẹ̀jọ, ẹ̀sán, ẹ̀wá' (6, 7, 8, 9, 10):",
            "tokens": [
              "Ẹ̀fà,",
              "èje,",
              "ẹ̀jọ,",
              "ẹ̀sán,",
              "ẹ̀wá"
            ],
            "correctTokens": [
              "Ẹ̀fà,",
              "èje,",
              "ẹ̀jọ,",
              "ẹ̀sán,",
              "ẹ̀wá"
            ]
          },
          {
            "id": "y-u3-l1-q5",
            "type": "audio_listen",
            "phrase": "Àwọ̀ funfun títí",
            "prompt": "Listen to the color description. What color is 'Funfun'?",
            "options": [
              "White",
              "Black",
              "Red",
              "Green"
            ],
            "correctAnswer": "White",
            "explanation": "'Funfun' is white (symbolic of peace, Orisa Obatala, and purity)."
          },
          {
            "id": "y-u3-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the Yoruba color for 'Red'?",
            "options": [
              "Pupa",
              "Dúdú",
              "Funfun",
              "Àwọ̀ ewé"
            ],
            "correctAnswer": "Pupa",
            "explanation": "'Pupa' is red (also used for light/fair skin tones: 'ẹni pupa')."
          },
          {
            "id": "y-u3-l1-q7",
            "type": "matching",
            "prompt": "Match Yoruba color terms with English meanings:",
            "pairs": [
              {
                "native": "Funfun",
                "english": "White",
                "left": "Funfun",
                "right": "White"
              },
              {
                "native": "Dúdú",
                "english": "Black / Dark",
                "left": "Dúdú",
                "right": "Black / Dark"
              },
              {
                "native": "Pupa",
                "english": "Red / Fair complexioned",
                "left": "Pupa",
                "right": "Red / Fair complexioned"
              },
              {
                "native": "Àwọ̀ ewé",
                "english": "Green (leaf color)",
                "left": "Àwọ̀ ewé",
                "right": "Green (leaf color)"
              }
            ]
          },
          {
            "id": "y-u3-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'eleven' (11) in Yoruba, you say: 'Mọ́kànlá' (oókan lé ní ___).",
            "missingWord": "ẹ̀wá",
            "options": [
              "ẹ̀wá",
              "ogun",
              "ọgbọ̀n",
              "ẹ́ta"
            ],
            "correctAnswer": "ẹ̀wá",
            "explanation": "'Mọ́kànlá' is contracted from 'oókan lé ní ẹ̀wá' (one on top of ten = 11)."
          },
          {
            "id": "y-u3-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Aṣọ mi jẹ́ funfun' (My cloth/dress is white):",
            "tokens": [
              "Aṣọ",
              "mi",
              "jẹ́",
              "funfun"
            ],
            "correctTokens": [
              "Aṣọ",
              "mi",
              "jẹ́",
              "funfun"
            ]
          },
          {
            "id": "y-u3-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is 'Thirty' (30) in Yoruba?",
            "options": [
              "Ọgbọ̀n",
              "Ogun",
              "Àádọ́ta",
              "Àádọ́rin"
            ],
            "correctAnswer": "Ọgbọ̀n",
            "explanation": "'Ọgbọ̀n' is thirty (30); 'Ogun' is 20; 'Àádọ́ta' is 50."
          },
          {
            "id": "y-u3-l1-q11",
            "type": "audio_listen",
            "phrase": "Ọjọ́ Ajé ni ọjọ́ àkọ́kọ́ nínú ọ̀sẹ̀ iṣẹ́",
            "prompt": "Listen to the calendar statement. What day is 'Ọjọ́ Ajé'?",
            "options": [
              "Monday (Day of commerce/wealth)",
              "Friday",
              "Sunday",
              "Wednesday"
            ],
            "correctAnswer": "Monday (Day of commerce/wealth)",
            "explanation": "'Ọjọ́ Ajé' is Monday (Ajé = wealth/commerce)."
          },
          {
            "id": "y-u3-l1-q12",
            "type": "matching",
            "prompt": "Match days of the week in Yoruba:",
            "pairs": [
              {
                "native": "Ọjọ́ Ajé",
                "english": "Monday (Commerce)",
                "left": "Ọjọ́ Ajé",
                "right": "Monday (Commerce)"
              },
              {
                "native": "Ọjọ́ Ìṣẹ́gun",
                "english": "Tuesday (Victory)",
                "left": "Ọjọ́ Ìṣẹ́gun",
                "right": "Tuesday (Victory)"
              },
              {
                "native": "Ọjọ́rú",
                "english": "Wednesday",
                "left": "Ọjọ́rú",
                "right": "Wednesday"
              },
              {
                "native": "Ọjọ́bọ̀",
                "english": "Thursday",
                "left": "Ọjọ́bọ̀",
                "right": "Thursday"
              }
            ]
          },
          {
            "id": "y-u3-l1-q13",
            "type": "fill_blank",
            "sentence": "Sunday in Yoruba is known as 'Ọjọ́ ___' (The Day of Immortality/Life).",
            "missingWord": "Àìkú",
            "options": [
              "Àìkú",
              "Ẹtì",
              "Àbámẹ́ta",
              "Ajé"
            ],
            "correctAnswer": "Àìkú",
            "explanation": "'Ọjọ́ Àìkú' (the day that does not die) is Sunday."
          },
          {
            "id": "y-u3-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the days: 'Ọjọ́ Ẹtì, Ọjọ́ Àbámẹ́ta, Ọjọ́ Àìkú' (Friday, Saturday, Sunday):",
            "tokens": [
              "Ọjọ́",
              "Ẹtì,",
              "Ọjọ́",
              "Àbámẹ́ta,",
              "Ọjọ́",
              "Àìkú"
            ],
            "correctTokens": [
              "Ọjọ́",
              "Ẹtì,",
              "Ọjọ́",
              "Àbámẹ́ta,",
              "Ọjọ́",
              "Àìkú"
            ]
          },
          {
            "id": "y-u3-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Fifty' (50) in Yoruba?",
            "options": [
              "Àádọ́ta",
              "Ọgbọ̀n",
              "Ogun",
              "Ọgọ́ta"
            ],
            "correctAnswer": "Àádọ́ta",
            "explanation": "'Àádọ́ta' is fifty (literally: 10 deducted from 60 [ẹ̀wá dín nínú ọgọ́ta])."
          },
          {
            "id": "y-u3-l1-q16",
            "type": "audio_listen",
            "phrase": "Ìwé mẹ́ẹ̀dọ́gbọ̀n",
            "prompt": "Listen to the numerical quantity. How many books is 'Ìwé mẹ́ẹ̀dọ́gbọ̀n'?",
            "options": [
              "25 books",
              "15 books",
              "35 books",
              "50 books"
            ],
            "correctAnswer": "25 books",
            "explanation": "'Mẹ́ẹ̀dọ́gbọ̀n' is twenty-five (5 deducted from 30)."
          },
          {
            "id": "y-u3-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Àwọ̀ oòrùn' describe visually?",
            "options": [
              "Yellow / Sun-gold color",
              "Pitch black",
              "Blood red",
              "Ocean blue"
            ],
            "correctAnswer": "Yellow / Sun-gold color",
            "explanation": "'Àwọ̀ oòrùn' (color of the sun) is yellow or gold."
          },
          {
            "id": "y-u3-l1-q18",
            "type": "fill_blank",
            "sentence": "The number 15 in Yoruba counting is 'Ẹ́ẹ́dógún' (five subtracted from ___).",
            "missingWord": "twenty (ogun)",
            "options": [
              "twenty (ogun)",
              "ten (ẹ̀wá)",
              "thirty (ọgbọ̀n)",
              "forty (ogójì)"
            ],
            "correctAnswer": "twenty (ogun)",
            "explanation": "'Ẹ́ẹ́dógún' derives from 'àrún dín ní ogun' (five less than twenty = 15)."
          },
          {
            "id": "y-u3-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is 'Ọjọ́ Ẹtì'?",
            "options": [
              "Friday",
              "Monday",
              "Saturday",
              "Thursday"
            ],
            "correctAnswer": "Friday",
            "explanation": "'Ọjọ́ Ẹtì' is Friday."
          },
          {
            "id": "y-u3-l1-q20",
            "type": "matching",
            "prompt": "Match higher numbers in Yoruba with figures:",
            "pairs": [
              {
                "native": "Ogójì",
                "english": "40 (20 × 2)",
                "left": "Ogójì",
                "right": "40 (20 × 2)"
              },
              {
                "native": "Àádọ́ta",
                "english": "50",
                "left": "Àádọ́ta",
                "right": "50"
              },
              {
                "native": "Ọgọ́ta",
                "english": "60 (20 × 3)",
                "left": "Ọgọ́ta",
                "right": "60 (20 × 3)"
              },
              {
                "native": "Ọgọ́rùn-ún",
                "english": "100",
                "left": "Ọgọ́rùn-ún",
                "right": "100"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u3-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the number 'three' (3) in Yoruba?",
        "options": [
          "Ẹ́ta",
          "Oókan",
          "Èéjì",
          "Ẹ́rin"
        ],
        "correctAnswer": "Ẹ́ta",
        "explanation": "1=Oókan, 2=Èéjì, 3=Ẹ́ta, 4=Ẹ́rin, 5=Àrún."
      },
      {
        "id": "y-u3-l1-q2",
        "type": "matching",
        "prompt": "Match Yoruba numerals 1 to 4 with their digits:",
        "pairs": [
          {
            "native": "Oókan / Ení",
            "english": "1 (One)",
            "left": "Oókan / Ení",
            "right": "1 (One)"
          },
          {
            "native": "Èéjì",
            "english": "2 (Two)",
            "left": "Èéjì",
            "right": "2 (Two)"
          },
          {
            "native": "Ẹ́ta",
            "english": "3 (Three)",
            "left": "Ẹ́ta",
            "right": "3 (Three)"
          },
          {
            "native": "Ẹ́rin",
            "english": "4 (Four)",
            "left": "Ẹ́rin",
            "right": "4 (Four)"
          }
        ]
      },
      {
        "id": "y-u3-l1-q3",
        "type": "fill_blank",
        "sentence": "The number ten in Yoruba is 'Ẹ̀wá'. Twenty (20) is '___'.",
        "missingWord": "Ogun",
        "options": [
          "Ogun",
          "Ọgbọ̀n",
          "Àádọ́ta",
          "Ọgọ́rùn-ún"
        ],
        "correctAnswer": "Ogun",
        "explanation": "'Ogun' is twenty (20) in Yoruba."
      },
      {
        "id": "y-u3-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the numbers: 'Ẹ̀fà, èje, ẹ̀jọ, ẹ̀sán, ẹ̀wá' (6, 7, 8, 9, 10):",
        "tokens": [
          "Ẹ̀fà,",
          "èje,",
          "ẹ̀jọ,",
          "ẹ̀sán,",
          "ẹ̀wá"
        ],
        "correctTokens": [
          "Ẹ̀fà,",
          "èje,",
          "ẹ̀jọ,",
          "ẹ̀sán,",
          "ẹ̀wá"
        ]
      },
      {
        "id": "y-u3-l1-q5",
        "type": "audio_listen",
        "phrase": "Àwọ̀ funfun títí",
        "prompt": "Listen to the color description. What color is 'Funfun'?",
        "options": [
          "White",
          "Black",
          "Red",
          "Green"
        ],
        "correctAnswer": "White",
        "explanation": "'Funfun' is white (symbolic of peace, Orisa Obatala, and purity)."
      },
      {
        "id": "y-u3-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the Yoruba color for 'Red'?",
        "options": [
          "Pupa",
          "Dúdú",
          "Funfun",
          "Àwọ̀ ewé"
        ],
        "correctAnswer": "Pupa",
        "explanation": "'Pupa' is red (also used for light/fair skin tones: 'ẹni pupa')."
      },
      {
        "id": "y-u3-l1-q7",
        "type": "matching",
        "prompt": "Match Yoruba color terms with English meanings:",
        "pairs": [
          {
            "native": "Funfun",
            "english": "White",
            "left": "Funfun",
            "right": "White"
          },
          {
            "native": "Dúdú",
            "english": "Black / Dark",
            "left": "Dúdú",
            "right": "Black / Dark"
          },
          {
            "native": "Pupa",
            "english": "Red / Fair complexioned",
            "left": "Pupa",
            "right": "Red / Fair complexioned"
          },
          {
            "native": "Àwọ̀ ewé",
            "english": "Green (leaf color)",
            "left": "Àwọ̀ ewé",
            "right": "Green (leaf color)"
          }
        ]
      },
      {
        "id": "y-u3-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'eleven' (11) in Yoruba, you say: 'Mọ́kànlá' (oókan lé ní ___).",
        "missingWord": "ẹ̀wá",
        "options": [
          "ẹ̀wá",
          "ogun",
          "ọgbọ̀n",
          "ẹ́ta"
        ],
        "correctAnswer": "ẹ̀wá",
        "explanation": "'Mọ́kànlá' is contracted from 'oókan lé ní ẹ̀wá' (one on top of ten = 11)."
      },
      {
        "id": "y-u3-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Aṣọ mi jẹ́ funfun' (My cloth/dress is white):",
        "tokens": [
          "Aṣọ",
          "mi",
          "jẹ́",
          "funfun"
        ],
        "correctTokens": [
          "Aṣọ",
          "mi",
          "jẹ́",
          "funfun"
        ]
      },
      {
        "id": "y-u3-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is 'Thirty' (30) in Yoruba?",
        "options": [
          "Ọgbọ̀n",
          "Ogun",
          "Àádọ́ta",
          "Àádọ́rin"
        ],
        "correctAnswer": "Ọgbọ̀n",
        "explanation": "'Ọgbọ̀n' is thirty (30); 'Ogun' is 20; 'Àádọ́ta' is 50."
      },
      {
        "id": "y-u3-l1-q11",
        "type": "audio_listen",
        "phrase": "Ọjọ́ Ajé ni ọjọ́ àkọ́kọ́ nínú ọ̀sẹ̀ iṣẹ́",
        "prompt": "Listen to the calendar statement. What day is 'Ọjọ́ Ajé'?",
        "options": [
          "Monday (Day of commerce/wealth)",
          "Friday",
          "Sunday",
          "Wednesday"
        ],
        "correctAnswer": "Monday (Day of commerce/wealth)",
        "explanation": "'Ọjọ́ Ajé' is Monday (Ajé = wealth/commerce)."
      },
      {
        "id": "y-u3-l1-q12",
        "type": "matching",
        "prompt": "Match days of the week in Yoruba:",
        "pairs": [
          {
            "native": "Ọjọ́ Ajé",
            "english": "Monday (Commerce)",
            "left": "Ọjọ́ Ajé",
            "right": "Monday (Commerce)"
          },
          {
            "native": "Ọjọ́ Ìṣẹ́gun",
            "english": "Tuesday (Victory)",
            "left": "Ọjọ́ Ìṣẹ́gun",
            "right": "Tuesday (Victory)"
          },
          {
            "native": "Ọjọ́rú",
            "english": "Wednesday",
            "left": "Ọjọ́rú",
            "right": "Wednesday"
          },
          {
            "native": "Ọjọ́bọ̀",
            "english": "Thursday",
            "left": "Ọjọ́bọ̀",
            "right": "Thursday"
          }
        ]
      },
      {
        "id": "y-u3-l1-q13",
        "type": "fill_blank",
        "sentence": "Sunday in Yoruba is known as 'Ọjọ́ ___' (The Day of Immortality/Life).",
        "missingWord": "Àìkú",
        "options": [
          "Àìkú",
          "Ẹtì",
          "Àbámẹ́ta",
          "Ajé"
        ],
        "correctAnswer": "Àìkú",
        "explanation": "'Ọjọ́ Àìkú' (the day that does not die) is Sunday."
      },
      {
        "id": "y-u3-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the days: 'Ọjọ́ Ẹtì, Ọjọ́ Àbámẹ́ta, Ọjọ́ Àìkú' (Friday, Saturday, Sunday):",
        "tokens": [
          "Ọjọ́",
          "Ẹtì,",
          "Ọjọ́",
          "Àbámẹ́ta,",
          "Ọjọ́",
          "Àìkú"
        ],
        "correctTokens": [
          "Ọjọ́",
          "Ẹtì,",
          "Ọjọ́",
          "Àbámẹ́ta,",
          "Ọjọ́",
          "Àìkú"
        ]
      },
      {
        "id": "y-u3-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Fifty' (50) in Yoruba?",
        "options": [
          "Àádọ́ta",
          "Ọgbọ̀n",
          "Ogun",
          "Ọgọ́ta"
        ],
        "correctAnswer": "Àádọ́ta",
        "explanation": "'Àádọ́ta' is fifty (literally: 10 deducted from 60 [ẹ̀wá dín nínú ọgọ́ta])."
      },
      {
        "id": "y-u3-l1-q16",
        "type": "audio_listen",
        "phrase": "Ìwé mẹ́ẹ̀dọ́gbọ̀n",
        "prompt": "Listen to the numerical quantity. How many books is 'Ìwé mẹ́ẹ̀dọ́gbọ̀n'?",
        "options": [
          "25 books",
          "15 books",
          "35 books",
          "50 books"
        ],
        "correctAnswer": "25 books",
        "explanation": "'Mẹ́ẹ̀dọ́gbọ̀n' is twenty-five (5 deducted from 30)."
      },
      {
        "id": "y-u3-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Àwọ̀ oòrùn' describe visually?",
        "options": [
          "Yellow / Sun-gold color",
          "Pitch black",
          "Blood red",
          "Ocean blue"
        ],
        "correctAnswer": "Yellow / Sun-gold color",
        "explanation": "'Àwọ̀ oòrùn' (color of the sun) is yellow or gold."
      },
      {
        "id": "y-u3-l1-q18",
        "type": "fill_blank",
        "sentence": "The number 15 in Yoruba counting is 'Ẹ́ẹ́dógún' (five subtracted from ___).",
        "missingWord": "twenty (ogun)",
        "options": [
          "twenty (ogun)",
          "ten (ẹ̀wá)",
          "thirty (ọgbọ̀n)",
          "forty (ogójì)"
        ],
        "correctAnswer": "twenty (ogun)",
        "explanation": "'Ẹ́ẹ́dógún' derives from 'àrún dín ní ogun' (five less than twenty = 15)."
      },
      {
        "id": "y-u3-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is 'Ọjọ́ Ẹtì'?",
        "options": [
          "Friday",
          "Monday",
          "Saturday",
          "Thursday"
        ],
        "correctAnswer": "Friday",
        "explanation": "'Ọjọ́ Ẹtì' is Friday."
      },
      {
        "id": "y-u3-l1-q20",
        "type": "matching",
        "prompt": "Match higher numbers in Yoruba with figures:",
        "pairs": [
          {
            "native": "Ogójì",
            "english": "40 (20 × 2)",
            "left": "Ogójì",
            "right": "40 (20 × 2)"
          },
          {
            "native": "Àádọ́ta",
            "english": "50",
            "left": "Àádọ́ta",
            "right": "50"
          },
          {
            "native": "Ọgọ́ta",
            "english": "60 (20 × 3)",
            "left": "Ọgọ́ta",
            "right": "60 (20 × 3)"
          },
          {
            "native": "Ọgọ́rùn-ún",
            "english": "100",
            "left": "Ọgọ́rùn-ún",
            "right": "100"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-4",
    "unitId": "y-unit-4",
    "unitNumber": 4,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 4: Family and the Home (Ẹbí àti Ilé)",
    "subtitle": "Kinship hierarchy (Bàbá, Ìyá, Ẹ̀gbọ́n, Àbúrò), domestic environment, and household furnishings.",
    "icon": "Shield",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "y-u4-l1",
        "title": "Lesson 1: Àwọn Ẹbí, Ilé àti Ohun Èlò Ilé (Family, Kinship & Homestead)",
        "description": "Master Yoruba immediate kinship terms, seniority distinctions (ẹ̀gbọ́n vs. àbúrò), and parts of the home.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u4-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Yoruba word for 'Father'?",
            "options": [
              "Bàbá",
              "Ìyá",
              "Ẹ̀gbọ́n",
              "Àbúrò"
            ],
            "correctAnswer": "Bàbá",
            "explanation": "'Bàbá' is father; 'Ìyá' is mother."
          },
          {
            "id": "y-u4-l1-q2",
            "type": "matching",
            "prompt": "Match immediate family members in Yoruba:",
            "pairs": [
              {
                "native": "Bàbá",
                "english": "Father",
                "left": "Bàbá",
                "right": "Father"
              },
              {
                "native": "Ìyá",
                "english": "Mother",
                "left": "Ìyá",
                "right": "Mother"
              },
              {
                "native": "Ẹ̀gbọ́n",
                "english": "Elder sibling (brother or sister)",
                "left": "Ẹ̀gbọ́n",
                "right": "Elder sibling (brother or sister)"
              },
              {
                "native": "Àbúrò",
                "english": "Younger sibling",
                "left": "Àbúrò",
                "right": "Younger sibling"
              }
            ]
          },
          {
            "id": "y-u4-l1-q3",
            "type": "fill_blank",
            "sentence": "To specifically identify an older brother, you say: 'Ẹ̀gbọ́n ___' (senior male).",
            "missingWord": "ọkùnrin",
            "options": [
              "ọkùnrin",
              "obìnrin",
              "ọmọ",
              "bàbá"
            ],
            "correctAnswer": "ọkùnrin",
            "explanation": "'Ọkùnrin' means male; 'Ẹ̀gbọ́n ọkùnrin' = elder brother."
          },
          {
            "id": "y-u4-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ìyá mi ń dáná oúnjẹ' (My mother is cooking food):",
            "tokens": [
              "Ìyá",
              "mi",
              "ń",
              "dáná",
              "oúnjẹ"
            ],
            "correctTokens": [
              "Ìyá",
              "mi",
              "ń",
              "dáná",
              "oúnjẹ"
            ]
          },
          {
            "id": "y-u4-l1-q5",
            "type": "audio_listen",
            "phrase": "Bàbá àgbà àti Ìyá àgbà",
            "prompt": "Listen to the family phrase. Who are being described?",
            "options": [
              "Grandfather and grandmother",
              "Uncle and aunt",
              "Father and mother",
              "Brother and sister"
            ],
            "correctAnswer": "Grandfather and grandmother",
            "explanation": "'Bàbá àgbà' = grandfather; 'Ìyá àgbà' = grandmother."
          },
          {
            "id": "y-u4-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is an 'Àga' in the house?",
            "options": [
              "Chair",
              "Table",
              "Bed",
              "Door"
            ],
            "correctAnswer": "Chair",
            "explanation": "'Àga' is a chair; 'Tábìlì' is a table."
          },
          {
            "id": "y-u4-l1-q7",
            "type": "matching",
            "prompt": "Match parts of the home with English words:",
            "pairs": [
              {
                "native": "Ilẹ̀kùn",
                "english": "Door",
                "left": "Ilẹ̀kùn",
                "right": "Door"
              },
              {
                "native": "Fèrèsé",
                "english": "Window",
                "left": "Fèrèsé",
                "right": "Window"
              },
              {
                "native": "Yàrá",
                "english": "Room / Bedroom",
                "left": "Yàrá",
                "right": "Room / Bedroom"
              },
              {
                "native": "Ilé ìdáná",
                "english": "Kitchen",
                "left": "Ilé ìdáná",
                "right": "Kitchen"
              }
            ]
          },
          {
            "id": "y-u4-l1-q8",
            "type": "fill_blank",
            "sentence": "A book or written paper in Yoruba is termed '___'.",
            "missingWord": "Ìwé",
            "options": [
              "Ìwé",
              "Àga",
              "Ilé",
              "Oúnjẹ"
            ],
            "correctAnswer": "Ìwé",
            "explanation": "'Ìwé' means book, letter, or document."
          },
          {
            "id": "y-u4-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the command: 'Ṣí ilẹ̀kùn yẹn' (Open that door):",
            "tokens": [
              "Ṣí",
              "ilẹ̀kùn",
              "yẹn"
            ],
            "correctTokens": [
              "Ṣí",
              "ilẹ̀kùn",
              "yẹn"
            ]
          },
          {
            "id": "y-u4-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Ọmọbìnrin' mean?",
            "options": [
              "Daughter / Female child",
              "Son",
              "Mother",
              "Aunt"
            ],
            "correctAnswer": "Daughter / Female child",
            "explanation": "'Ọmọ' (child) + 'obìnrin' (female) = 'Ọmọbìnrin' (daughter)."
          },
          {
            "id": "y-u4-l1-q11",
            "type": "audio_listen",
            "phrase": "Ilé wa tóbí púpọ̀",
            "prompt": "Listen to the description. What is said about the house?",
            "options": [
              "Our house is very big",
              "Our house is painted blue",
              "Our house is far away",
              "Our house has two doors"
            ],
            "correctAnswer": "Our house is very big",
            "explanation": "'Ilé wa' = our house; 'tóbí púpọ̀' = is very big."
          },
          {
            "id": "y-u4-l1-q12",
            "type": "matching",
            "prompt": "Match extended family terms in Yoruba:",
            "pairs": [
              {
                "native": "Ọkọ",
                "english": "Husband",
                "left": "Ọkọ",
                "right": "Husband"
              },
              {
                "native": "Aya / Ìyàwó",
                "english": "Wife",
                "left": "Aya / Ìyàwó",
                "right": "Wife"
              },
              {
                "native": "Ànàmọ́ / Àna",
                "english": "In-law",
                "left": "Ànàmọ́ / Àna",
                "right": "In-law"
              },
              {
                "native": "Ọ̀rẹ́",
                "english": "Friend",
                "left": "Ọ̀rẹ́",
                "right": "Friend"
              }
            ]
          },
          {
            "id": "y-u4-l1-q13",
            "type": "fill_blank",
            "sentence": "The head of the family compound or lineage is known as the '___' (Bàbá ilé).",
            "missingWord": "Baálé",
            "options": [
              "Baálé",
              "Ọba",
              "Ọmọ",
              "Àbúrò"
            ],
            "correctAnswer": "Baálé",
            "explanation": "'Baálé' (Bàbá ilé) is the patriarch and head of the household."
          },
          {
            "id": "y-u4-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Àbúrò mi ń kàwé' (My younger sibling is reading a book):",
            "tokens": [
              "Àbúrò",
              "mi",
              "ń",
              "kàwé"
            ],
            "correctTokens": [
              "Àbúrò",
              "mi",
              "ń",
              "kàwé"
            ]
          },
          {
            "id": "y-u4-l1-q15",
            "type": "multiple_choice",
            "prompt": "Why does Yoruba culture distinguish between 'Ẹ̀gbọ́n' (elder) and 'Àbúrò' (junior) instead of a generic 'brother/sister'?",
            "options": [
              "Seniority (ọjọ́ orí) dictates speech register, respect, and family obligations",
              "Because brothers don't speak to sisters",
              "Because they live in different rooms",
              "It has no cultural significance"
            ],
            "correctAnswer": "Seniority (ọjọ́ orí) dictates speech register, respect, and family obligations",
            "explanation": "Age seniority strictly shapes Yoruba social hierarchy and respectful address."
          },
          {
            "id": "y-u4-l1-q16",
            "type": "audio_listen",
            "phrase": "Bàbá mi ra tábìlì tuntun",
            "prompt": "Listen to the statement. What did my father buy?",
            "options": [
              "A new table",
              "A new car",
              "A new book",
              "A new house"
            ],
            "correctAnswer": "A new table",
            "explanation": "'Tábìlì tuntun' = a new table."
          },
          {
            "id": "y-u4-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Àgbàlá' in a traditional compound?",
            "options": [
              "Courtyard / Backyard compound",
              "Living room",
              "Attic",
              "Roof"
            ],
            "correctAnswer": "Courtyard / Backyard compound",
            "explanation": "'Àgbàlá' is the courtyard or open compound area."
          },
          {
            "id": "y-u4-l1-q18",
            "type": "fill_blank",
            "sentence": "The bed on which one sleeps in the bedroom is called '___'.",
            "missingWord": "Ibùsùn / Bẹ́ẹ̀dì",
            "options": [
              "Ibùsùn",
              "Àga",
              "Tábìlì",
              "Ilẹ̀kùn"
            ],
            "correctAnswer": "Ibùsùn",
            "explanation": "'Ibùsùn' (from sùn = to sleep) is a bed."
          },
          {
            "id": "y-u4-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Ọmọkùnrin' mean?",
            "options": [
              "Son / Boy",
              "Daughter",
              "Uncle",
              "Father"
            ],
            "correctAnswer": "Son / Boy",
            "explanation": "'Ọmọkùnrin' is a boy or son."
          },
          {
            "id": "y-u4-l1-q20",
            "type": "matching",
            "prompt": "Match classroom and learning objects in Yoruba:",
            "pairs": [
              {
                "native": "Ìwé",
                "english": "Book",
                "left": "Ìwé",
                "right": "Book"
              },
              {
                "native": "Kálàmù / Tégídì",
                "english": "Pen / Pencil",
                "left": "Kálàmù / Tégídì",
                "right": "Pen / Pencil"
              },
              {
                "native": "Pátákó",
                "english": "Writing board / Chalkboard",
                "left": "Pátákó",
                "right": "Writing board / Chalkboard"
              },
              {
                "native": "Olùkọ́",
                "english": "Teacher / Instructor",
                "left": "Olùkọ́",
                "right": "Teacher / Instructor"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u4-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Yoruba word for 'Father'?",
        "options": [
          "Bàbá",
          "Ìyá",
          "Ẹ̀gbọ́n",
          "Àbúrò"
        ],
        "correctAnswer": "Bàbá",
        "explanation": "'Bàbá' is father; 'Ìyá' is mother."
      },
      {
        "id": "y-u4-l1-q2",
        "type": "matching",
        "prompt": "Match immediate family members in Yoruba:",
        "pairs": [
          {
            "native": "Bàbá",
            "english": "Father",
            "left": "Bàbá",
            "right": "Father"
          },
          {
            "native": "Ìyá",
            "english": "Mother",
            "left": "Ìyá",
            "right": "Mother"
          },
          {
            "native": "Ẹ̀gbọ́n",
            "english": "Elder sibling (brother or sister)",
            "left": "Ẹ̀gbọ́n",
            "right": "Elder sibling (brother or sister)"
          },
          {
            "native": "Àbúrò",
            "english": "Younger sibling",
            "left": "Àbúrò",
            "right": "Younger sibling"
          }
        ]
      },
      {
        "id": "y-u4-l1-q3",
        "type": "fill_blank",
        "sentence": "To specifically identify an older brother, you say: 'Ẹ̀gbọ́n ___' (senior male).",
        "missingWord": "ọkùnrin",
        "options": [
          "ọkùnrin",
          "obìnrin",
          "ọmọ",
          "bàbá"
        ],
        "correctAnswer": "ọkùnrin",
        "explanation": "'Ọkùnrin' means male; 'Ẹ̀gbọ́n ọkùnrin' = elder brother."
      },
      {
        "id": "y-u4-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ìyá mi ń dáná oúnjẹ' (My mother is cooking food):",
        "tokens": [
          "Ìyá",
          "mi",
          "ń",
          "dáná",
          "oúnjẹ"
        ],
        "correctTokens": [
          "Ìyá",
          "mi",
          "ń",
          "dáná",
          "oúnjẹ"
        ]
      },
      {
        "id": "y-u4-l1-q5",
        "type": "audio_listen",
        "phrase": "Bàbá àgbà àti Ìyá àgbà",
        "prompt": "Listen to the family phrase. Who are being described?",
        "options": [
          "Grandfather and grandmother",
          "Uncle and aunt",
          "Father and mother",
          "Brother and sister"
        ],
        "correctAnswer": "Grandfather and grandmother",
        "explanation": "'Bàbá àgbà' = grandfather; 'Ìyá àgbà' = grandmother."
      },
      {
        "id": "y-u4-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is an 'Àga' in the house?",
        "options": [
          "Chair",
          "Table",
          "Bed",
          "Door"
        ],
        "correctAnswer": "Chair",
        "explanation": "'Àga' is a chair; 'Tábìlì' is a table."
      },
      {
        "id": "y-u4-l1-q7",
        "type": "matching",
        "prompt": "Match parts of the home with English words:",
        "pairs": [
          {
            "native": "Ilẹ̀kùn",
            "english": "Door",
            "left": "Ilẹ̀kùn",
            "right": "Door"
          },
          {
            "native": "Fèrèsé",
            "english": "Window",
            "left": "Fèrèsé",
            "right": "Window"
          },
          {
            "native": "Yàrá",
            "english": "Room / Bedroom",
            "left": "Yàrá",
            "right": "Room / Bedroom"
          },
          {
            "native": "Ilé ìdáná",
            "english": "Kitchen",
            "left": "Ilé ìdáná",
            "right": "Kitchen"
          }
        ]
      },
      {
        "id": "y-u4-l1-q8",
        "type": "fill_blank",
        "sentence": "A book or written paper in Yoruba is termed '___'.",
        "missingWord": "Ìwé",
        "options": [
          "Ìwé",
          "Àga",
          "Ilé",
          "Oúnjẹ"
        ],
        "correctAnswer": "Ìwé",
        "explanation": "'Ìwé' means book, letter, or document."
      },
      {
        "id": "y-u4-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the command: 'Ṣí ilẹ̀kùn yẹn' (Open that door):",
        "tokens": [
          "Ṣí",
          "ilẹ̀kùn",
          "yẹn"
        ],
        "correctTokens": [
          "Ṣí",
          "ilẹ̀kùn",
          "yẹn"
        ]
      },
      {
        "id": "y-u4-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Ọmọbìnrin' mean?",
        "options": [
          "Daughter / Female child",
          "Son",
          "Mother",
          "Aunt"
        ],
        "correctAnswer": "Daughter / Female child",
        "explanation": "'Ọmọ' (child) + 'obìnrin' (female) = 'Ọmọbìnrin' (daughter)."
      },
      {
        "id": "y-u4-l1-q11",
        "type": "audio_listen",
        "phrase": "Ilé wa tóbí púpọ̀",
        "prompt": "Listen to the description. What is said about the house?",
        "options": [
          "Our house is very big",
          "Our house is painted blue",
          "Our house is far away",
          "Our house has two doors"
        ],
        "correctAnswer": "Our house is very big",
        "explanation": "'Ilé wa' = our house; 'tóbí púpọ̀' = is very big."
      },
      {
        "id": "y-u4-l1-q12",
        "type": "matching",
        "prompt": "Match extended family terms in Yoruba:",
        "pairs": [
          {
            "native": "Ọkọ",
            "english": "Husband",
            "left": "Ọkọ",
            "right": "Husband"
          },
          {
            "native": "Aya / Ìyàwó",
            "english": "Wife",
            "left": "Aya / Ìyàwó",
            "right": "Wife"
          },
          {
            "native": "Ànàmọ́ / Àna",
            "english": "In-law",
            "left": "Ànàmọ́ / Àna",
            "right": "In-law"
          },
          {
            "native": "Ọ̀rẹ́",
            "english": "Friend",
            "left": "Ọ̀rẹ́",
            "right": "Friend"
          }
        ]
      },
      {
        "id": "y-u4-l1-q13",
        "type": "fill_blank",
        "sentence": "The head of the family compound or lineage is known as the '___' (Bàbá ilé).",
        "missingWord": "Baálé",
        "options": [
          "Baálé",
          "Ọba",
          "Ọmọ",
          "Àbúrò"
        ],
        "correctAnswer": "Baálé",
        "explanation": "'Baálé' (Bàbá ilé) is the patriarch and head of the household."
      },
      {
        "id": "y-u4-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Àbúrò mi ń kàwé' (My younger sibling is reading a book):",
        "tokens": [
          "Àbúrò",
          "mi",
          "ń",
          "kàwé"
        ],
        "correctTokens": [
          "Àbúrò",
          "mi",
          "ń",
          "kàwé"
        ]
      },
      {
        "id": "y-u4-l1-q15",
        "type": "multiple_choice",
        "prompt": "Why does Yoruba culture distinguish between 'Ẹ̀gbọ́n' (elder) and 'Àbúrò' (junior) instead of a generic 'brother/sister'?",
        "options": [
          "Seniority (ọjọ́ orí) dictates speech register, respect, and family obligations",
          "Because brothers don't speak to sisters",
          "Because they live in different rooms",
          "It has no cultural significance"
        ],
        "correctAnswer": "Seniority (ọjọ́ orí) dictates speech register, respect, and family obligations",
        "explanation": "Age seniority strictly shapes Yoruba social hierarchy and respectful address."
      },
      {
        "id": "y-u4-l1-q16",
        "type": "audio_listen",
        "phrase": "Bàbá mi ra tábìlì tuntun",
        "prompt": "Listen to the statement. What did my father buy?",
        "options": [
          "A new table",
          "A new car",
          "A new book",
          "A new house"
        ],
        "correctAnswer": "A new table",
        "explanation": "'Tábìlì tuntun' = a new table."
      },
      {
        "id": "y-u4-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Àgbàlá' in a traditional compound?",
        "options": [
          "Courtyard / Backyard compound",
          "Living room",
          "Attic",
          "Roof"
        ],
        "correctAnswer": "Courtyard / Backyard compound",
        "explanation": "'Àgbàlá' is the courtyard or open compound area."
      },
      {
        "id": "y-u4-l1-q18",
        "type": "fill_blank",
        "sentence": "The bed on which one sleeps in the bedroom is called '___'.",
        "missingWord": "Ibùsùn / Bẹ́ẹ̀dì",
        "options": [
          "Ibùsùn",
          "Àga",
          "Tábìlì",
          "Ilẹ̀kùn"
        ],
        "correctAnswer": "Ibùsùn",
        "explanation": "'Ibùsùn' (from sùn = to sleep) is a bed."
      },
      {
        "id": "y-u4-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Ọmọkùnrin' mean?",
        "options": [
          "Son / Boy",
          "Daughter",
          "Uncle",
          "Father"
        ],
        "correctAnswer": "Son / Boy",
        "explanation": "'Ọmọkùnrin' is a boy or son."
      },
      {
        "id": "y-u4-l1-q20",
        "type": "matching",
        "prompt": "Match classroom and learning objects in Yoruba:",
        "pairs": [
          {
            "native": "Ìwé",
            "english": "Book",
            "left": "Ìwé",
            "right": "Book"
          },
          {
            "native": "Kálàmù / Tégídì",
            "english": "Pen / Pencil",
            "left": "Kálàmù / Tégídì",
            "right": "Pen / Pencil"
          },
          {
            "native": "Pátákó",
            "english": "Writing board / Chalkboard",
            "left": "Pátákó",
            "right": "Writing board / Chalkboard"
          },
          {
            "native": "Olùkọ́",
            "english": "Teacher / Instructor",
            "left": "Olùkọ́",
            "right": "Teacher / Instructor"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-5",
    "unitId": "y-unit-5",
    "unitNumber": 5,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 5: Basic Action Verbs and Simple Commands (Àwọn Ọ̀rọ̀-Ìṣe àti Àṣẹ Mọ́kànlá)",
    "subtitle": "High-frequency root verbs (wá, lọ, jẹ, sùn), Subject-Verb-Object (SVO) syntax, and polite imperatives.",
    "icon": "Play",
    "color": "#3b82f6",
    "lessons": [
      {
        "id": "y-u5-l1",
        "title": "Lesson 1: Àwọn Ọ̀rọ̀-Ìṣe Gbogbogbò àti Ìkọ́lé Gbólóhùn (Verbs & SVO Sentences)",
        "description": "Master essential action verbs, construct canonical SVO sentences, issue polite imperatives, and conjugate basic actions.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u5-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Yoruba root verb for 'to come'?",
            "options": [
              "Wá",
              "Lọ",
              "Jẹ",
              "Sùn"
            ],
            "correctAnswer": "Wá",
            "explanation": "'Wá' means come; 'Lọ' means go."
          },
          {
            "id": "y-u5-l1-q2",
            "type": "matching",
            "prompt": "Match essential Yoruba action verbs with English meanings:",
            "pairs": [
              {
                "native": "Wá",
                "english": "To come",
                "left": "Wá",
                "right": "To come"
              },
              {
                "native": "Lọ",
                "english": "To go",
                "left": "Lọ",
                "right": "To go"
              },
              {
                "native": "Jẹ",
                "english": "To eat",
                "left": "Jẹ",
                "right": "To eat"
              },
              {
                "native": "Mu",
                "english": "To drink",
                "left": "Mu",
                "right": "To drink"
              }
            ]
          },
          {
            "id": "y-u5-l1-q3",
            "type": "fill_blank",
            "sentence": "To command someone politely 'Come here!', you say: '___ síbí!'.",
            "missingWord": "Wá",
            "options": [
              "Wá",
              "Lọ",
              "Jẹ",
              "Sùn"
            ],
            "correctAnswer": "Wá",
            "explanation": "'Wá síbí' means 'Come here!'."
          },
          {
            "id": "y-u5-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the SVO sentence: 'Adé ń jẹ oúnjẹ' (Ade is eating food):",
            "tokens": [
              "Adé",
              "ń",
              "jẹ",
              "oúnjẹ"
            ],
            "correctTokens": [
              "Adé",
              "ń",
              "jẹ",
              "oúnjẹ"
            ]
          },
          {
            "id": "y-u5-l1-q5",
            "type": "audio_listen",
            "phrase": "Lọ sí ilé rẹ",
            "prompt": "Listen to the command. What does 'Lọ sí ilé rẹ' mean?",
            "options": [
              "Go to your house",
              "Come inside the classroom",
              "Sit down quietly",
              "Open your book"
            ],
            "correctAnswer": "Go to your house",
            "explanation": "'Lọ' = go; 'sí ilé rẹ' = to your house."
          },
          {
            "id": "y-u5-l1-q6",
            "type": "multiple_choice",
            "prompt": "Which particle marks continuous ongoing action (progressive aspect) in Yoruba (e.g. 'ń kàwé')?",
            "options": [
              "ń",
              "ti",
              "yóò",
              "kò"
            ],
            "correctAnswer": "ń",
            "explanation": "The nasal prefix 'ń' marks present progressive/continuous action ('ń jẹ' = eating, 'ń lọ' = going)."
          },
          {
            "id": "y-u5-l1-q7",
            "type": "matching",
            "prompt": "Match school and study verbs in Yoruba:",
            "pairs": [
              {
                "native": "Kà",
                "english": "To read / count",
                "left": "Kà",
                "right": "To read / count"
              },
              {
                "native": "Kọ",
                "english": "To write",
                "left": "Kọ",
                "right": "To write"
              },
              {
                "native": "Kọ́",
                "english": "To learn / teach",
                "left": "Kọ́",
                "right": "To learn / teach"
              },
              {
                "native": "Gbọ́",
                "english": "To hear / understand",
                "left": "Gbọ́",
                "right": "To hear / understand"
              }
            ]
          },
          {
            "id": "y-u5-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'I am drinking water', you say: 'Mo ń mu ___'.",
            "missingWord": "omi",
            "options": [
              "omi",
              "oúnjẹ",
              "iná",
              "ìwé"
            ],
            "correctAnswer": "omi",
            "explanation": "'Omi' is water; 'Mo ń mu omi' = I am drinking water."
          },
          {
            "id": "y-u5-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Bọ́lá ń kọ lẹ́tà' (Bola is writing a letter):",
            "tokens": [
              "Bọ́lá",
              "ń",
              "kọ",
              "lẹ́tà"
            ],
            "correctTokens": [
              "Bọ́lá",
              "ń",
              "kọ",
              "lẹ́tà"
            ]
          },
          {
            "id": "y-u5-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the canonical word order of a simple declarative sentence in Yoruba?",
            "options": [
              "Subject - Verb - Object (SVO)",
              "Verb - Subject - Object (VSO)",
              "Object - Verb - Subject (OVS)",
              "Subject - Object - Verb (SOV)"
            ],
            "correctAnswer": "Subject - Verb - Object (SVO)",
            "explanation": "Yoruba strictly follows Subject - Verb - Object (SVO) sentence structure."
          },
          {
            "id": "y-u5-l1-q11",
            "type": "audio_listen",
            "phrase": "Jókòó sórí àga kí o sì dákẹ́",
            "prompt": "Listen to the classroom instruction. What does it command?",
            "options": [
              "Sit on the chair and be quiet",
              "Stand up and sing a song",
              "Run outside to play",
              "Write on the chalkboard"
            ],
            "correctAnswer": "Sit on the chair and be quiet",
            "explanation": "'Jókòó sórí àga' = sit on the chair; 'kí o sì dákẹ́' = and keep quiet."
          },
          {
            "id": "y-u5-l1-q12",
            "type": "matching",
            "prompt": "Match bodily movement verbs in Yoruba:",
            "pairs": [
              {
                "native": "Dìde",
                "english": "To stand up / rise",
                "left": "Dìde",
                "right": "To stand up / rise"
              },
              {
                "native": "Jókòó",
                "english": "To sit down",
                "left": "Jókòó",
                "right": "To sit down"
              },
              {
                "native": "Sáré",
                "english": "To run",
                "left": "Sáré",
                "right": "To run"
              },
              {
                "native": "Rìn",
                "english": "To walk",
                "left": "Rìn",
                "right": "To walk"
              }
            ]
          },
          {
            "id": "y-u5-l1-q13",
            "type": "fill_blank",
            "sentence": "To form a negative command ('Do not do it!'), Yoruba uses the particle 'Má': 'Má ___!'.",
            "missingWord": "ṣe e",
            "options": [
              "ṣe e",
              "wá",
              "lọ",
              "jẹ"
            ],
            "correctAnswer": "ṣe e",
            "explanation": "'Má ṣe e' means 'Do not do it!'."
          },
          {
            "id": "y-u5-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the command: 'Ti ilẹ̀kùn yẹn pa' (Shut that door close):",
            "tokens": [
              "Ti",
              "ilẹ̀kùn",
              "yẹn",
              "pa"
            ],
            "correctTokens": [
              "Ti",
              "ilẹ̀kùn",
              "yẹn",
              "pa"
            ]
          },
          {
            "id": "y-u5-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Sùn' mean?",
            "options": [
              "To sleep",
              "To jump",
              "To laugh",
              "To cry"
            ],
            "correctAnswer": "To sleep",
            "explanation": "'Sùn' is the verb to sleep."
          },
          {
            "id": "y-u5-l1-q16",
            "type": "audio_listen",
            "phrase": "A ń kọ́ èdè Yorùbá",
            "prompt": "Listen to the statement. What are we doing?",
            "options": [
              "We are learning the Yoruba language",
              "We are speaking English",
              "We are dancing at a wedding",
              "We are cooking lunch"
            ],
            "correctAnswer": "We are learning the Yoruba language",
            "explanation": "'A ń kọ́' = we are learning; 'èdè Yorùbá' = Yoruba language."
          },
          {
            "id": "y-u5-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Ran mi lọ́wọ́'?",
            "options": [
              "Help me / Assist me (lend me a hand)",
              "Shake my hand",
              "Look at my face",
              "Follow me home"
            ],
            "correctAnswer": "Help me / Assist me (lend me a hand)",
            "explanation": "'Ran mi lọ́wọ́' (from ràn... lọ́wọ́) means 'help me'."
          },
          {
            "id": "y-u5-l1-q18",
            "type": "fill_blank",
            "sentence": "When asking someone to listen attentively, you say: 'Ẹ gbọ́ ___!' (Hear with ear / Listen!).",
            "missingWord": "ọ̀rọ̀ / etí",
            "options": [
              "etí",
              "ojú",
              "ẹsẹ",
              "ọwọ́"
            ],
            "correctAnswer": "etí",
            "explanation": "'Tẹ́tí' or 'Gbọ́ etí' means listen with the ears."
          },
          {
            "id": "y-u5-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Àwọn ọmọdé ń gbá bọ́ọ̀lù' mean?",
            "options": [
              "The children are playing football",
              "The children are crying",
              "The children are sleeping",
              "The children are eating"
            ],
            "correctAnswer": "The children are playing football",
            "explanation": "'Gbá bọ́ọ̀lù' means to play/kick football."
          },
          {
            "id": "y-u5-l1-q20",
            "type": "matching",
            "prompt": "Match sensory perception verbs in Yoruba:",
            "pairs": [
              {
                "native": "Rí",
                "english": "To see",
                "left": "Rí",
                "right": "To see"
              },
              {
                "native": "Gbọ́",
                "english": "To hear / smell / perceive",
                "left": "Gbọ́",
                "right": "To hear / smell / perceive"
              },
              {
                "native": "Fọwọ́kan",
                "english": "To touch with hands",
                "left": "Fọwọ́kan",
                "right": "To touch with hands"
              },
              {
                "native": "Tọ́wò",
                "english": "To taste",
                "left": "Tọ́wò",
                "right": "To taste"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u5-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Yoruba root verb for 'to come'?",
        "options": [
          "Wá",
          "Lọ",
          "Jẹ",
          "Sùn"
        ],
        "correctAnswer": "Wá",
        "explanation": "'Wá' means come; 'Lọ' means go."
      },
      {
        "id": "y-u5-l1-q2",
        "type": "matching",
        "prompt": "Match essential Yoruba action verbs with English meanings:",
        "pairs": [
          {
            "native": "Wá",
            "english": "To come",
            "left": "Wá",
            "right": "To come"
          },
          {
            "native": "Lọ",
            "english": "To go",
            "left": "Lọ",
            "right": "To go"
          },
          {
            "native": "Jẹ",
            "english": "To eat",
            "left": "Jẹ",
            "right": "To eat"
          },
          {
            "native": "Mu",
            "english": "To drink",
            "left": "Mu",
            "right": "To drink"
          }
        ]
      },
      {
        "id": "y-u5-l1-q3",
        "type": "fill_blank",
        "sentence": "To command someone politely 'Come here!', you say: '___ síbí!'.",
        "missingWord": "Wá",
        "options": [
          "Wá",
          "Lọ",
          "Jẹ",
          "Sùn"
        ],
        "correctAnswer": "Wá",
        "explanation": "'Wá síbí' means 'Come here!'."
      },
      {
        "id": "y-u5-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the SVO sentence: 'Adé ń jẹ oúnjẹ' (Ade is eating food):",
        "tokens": [
          "Adé",
          "ń",
          "jẹ",
          "oúnjẹ"
        ],
        "correctTokens": [
          "Adé",
          "ń",
          "jẹ",
          "oúnjẹ"
        ]
      },
      {
        "id": "y-u5-l1-q5",
        "type": "audio_listen",
        "phrase": "Lọ sí ilé rẹ",
        "prompt": "Listen to the command. What does 'Lọ sí ilé rẹ' mean?",
        "options": [
          "Go to your house",
          "Come inside the classroom",
          "Sit down quietly",
          "Open your book"
        ],
        "correctAnswer": "Go to your house",
        "explanation": "'Lọ' = go; 'sí ilé rẹ' = to your house."
      },
      {
        "id": "y-u5-l1-q6",
        "type": "multiple_choice",
        "prompt": "Which particle marks continuous ongoing action (progressive aspect) in Yoruba (e.g. 'ń kàwé')?",
        "options": [
          "ń",
          "ti",
          "yóò",
          "kò"
        ],
        "correctAnswer": "ń",
        "explanation": "The nasal prefix 'ń' marks present progressive/continuous action ('ń jẹ' = eating, 'ń lọ' = going)."
      },
      {
        "id": "y-u5-l1-q7",
        "type": "matching",
        "prompt": "Match school and study verbs in Yoruba:",
        "pairs": [
          {
            "native": "Kà",
            "english": "To read / count",
            "left": "Kà",
            "right": "To read / count"
          },
          {
            "native": "Kọ",
            "english": "To write",
            "left": "Kọ",
            "right": "To write"
          },
          {
            "native": "Kọ́",
            "english": "To learn / teach",
            "left": "Kọ́",
            "right": "To learn / teach"
          },
          {
            "native": "Gbọ́",
            "english": "To hear / understand",
            "left": "Gbọ́",
            "right": "To hear / understand"
          }
        ]
      },
      {
        "id": "y-u5-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'I am drinking water', you say: 'Mo ń mu ___'.",
        "missingWord": "omi",
        "options": [
          "omi",
          "oúnjẹ",
          "iná",
          "ìwé"
        ],
        "correctAnswer": "omi",
        "explanation": "'Omi' is water; 'Mo ń mu omi' = I am drinking water."
      },
      {
        "id": "y-u5-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Bọ́lá ń kọ lẹ́tà' (Bola is writing a letter):",
        "tokens": [
          "Bọ́lá",
          "ń",
          "kọ",
          "lẹ́tà"
        ],
        "correctTokens": [
          "Bọ́lá",
          "ń",
          "kọ",
          "lẹ́tà"
        ]
      },
      {
        "id": "y-u5-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the canonical word order of a simple declarative sentence in Yoruba?",
        "options": [
          "Subject - Verb - Object (SVO)",
          "Verb - Subject - Object (VSO)",
          "Object - Verb - Subject (OVS)",
          "Subject - Object - Verb (SOV)"
        ],
        "correctAnswer": "Subject - Verb - Object (SVO)",
        "explanation": "Yoruba strictly follows Subject - Verb - Object (SVO) sentence structure."
      },
      {
        "id": "y-u5-l1-q11",
        "type": "audio_listen",
        "phrase": "Jókòó sórí àga kí o sì dákẹ́",
        "prompt": "Listen to the classroom instruction. What does it command?",
        "options": [
          "Sit on the chair and be quiet",
          "Stand up and sing a song",
          "Run outside to play",
          "Write on the chalkboard"
        ],
        "correctAnswer": "Sit on the chair and be quiet",
        "explanation": "'Jókòó sórí àga' = sit on the chair; 'kí o sì dákẹ́' = and keep quiet."
      },
      {
        "id": "y-u5-l1-q12",
        "type": "matching",
        "prompt": "Match bodily movement verbs in Yoruba:",
        "pairs": [
          {
            "native": "Dìde",
            "english": "To stand up / rise",
            "left": "Dìde",
            "right": "To stand up / rise"
          },
          {
            "native": "Jókòó",
            "english": "To sit down",
            "left": "Jókòó",
            "right": "To sit down"
          },
          {
            "native": "Sáré",
            "english": "To run",
            "left": "Sáré",
            "right": "To run"
          },
          {
            "native": "Rìn",
            "english": "To walk",
            "left": "Rìn",
            "right": "To walk"
          }
        ]
      },
      {
        "id": "y-u5-l1-q13",
        "type": "fill_blank",
        "sentence": "To form a negative command ('Do not do it!'), Yoruba uses the particle 'Má': 'Má ___!'.",
        "missingWord": "ṣe e",
        "options": [
          "ṣe e",
          "wá",
          "lọ",
          "jẹ"
        ],
        "correctAnswer": "ṣe e",
        "explanation": "'Má ṣe e' means 'Do not do it!'."
      },
      {
        "id": "y-u5-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the command: 'Ti ilẹ̀kùn yẹn pa' (Shut that door close):",
        "tokens": [
          "Ti",
          "ilẹ̀kùn",
          "yẹn",
          "pa"
        ],
        "correctTokens": [
          "Ti",
          "ilẹ̀kùn",
          "yẹn",
          "pa"
        ]
      },
      {
        "id": "y-u5-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Sùn' mean?",
        "options": [
          "To sleep",
          "To jump",
          "To laugh",
          "To cry"
        ],
        "correctAnswer": "To sleep",
        "explanation": "'Sùn' is the verb to sleep."
      },
      {
        "id": "y-u5-l1-q16",
        "type": "audio_listen",
        "phrase": "A ń kọ́ èdè Yorùbá",
        "prompt": "Listen to the statement. What are we doing?",
        "options": [
          "We are learning the Yoruba language",
          "We are speaking English",
          "We are dancing at a wedding",
          "We are cooking lunch"
        ],
        "correctAnswer": "We are learning the Yoruba language",
        "explanation": "'A ń kọ́' = we are learning; 'èdè Yorùbá' = Yoruba language."
      },
      {
        "id": "y-u5-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Ran mi lọ́wọ́'?",
        "options": [
          "Help me / Assist me (lend me a hand)",
          "Shake my hand",
          "Look at my face",
          "Follow me home"
        ],
        "correctAnswer": "Help me / Assist me (lend me a hand)",
        "explanation": "'Ran mi lọ́wọ́' (from ràn... lọ́wọ́) means 'help me'."
      },
      {
        "id": "y-u5-l1-q18",
        "type": "fill_blank",
        "sentence": "When asking someone to listen attentively, you say: 'Ẹ gbọ́ ___!' (Hear with ear / Listen!).",
        "missingWord": "ọ̀rọ̀ / etí",
        "options": [
          "etí",
          "ojú",
          "ẹsẹ",
          "ọwọ́"
        ],
        "correctAnswer": "etí",
        "explanation": "'Tẹ́tí' or 'Gbọ́ etí' means listen with the ears."
      },
      {
        "id": "y-u5-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Àwọn ọmọdé ń gbá bọ́ọ̀lù' mean?",
        "options": [
          "The children are playing football",
          "The children are crying",
          "The children are sleeping",
          "The children are eating"
        ],
        "correctAnswer": "The children are playing football",
        "explanation": "'Gbá bọ́ọ̀lù' means to play/kick football."
      },
      {
        "id": "y-u5-l1-q20",
        "type": "matching",
        "prompt": "Match sensory perception verbs in Yoruba:",
        "pairs": [
          {
            "native": "Rí",
            "english": "To see",
            "left": "Rí",
            "right": "To see"
          },
          {
            "native": "Gbọ́",
            "english": "To hear / smell / perceive",
            "left": "Gbọ́",
            "right": "To hear / smell / perceive"
          },
          {
            "native": "Fọwọ́kan",
            "english": "To touch with hands",
            "left": "Fọwọ́kan",
            "right": "To touch with hands"
          },
          {
            "native": "Tọ́wò",
            "english": "To taste",
            "left": "Tọ́wò",
            "right": "To taste"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-6",
    "unitId": "y-unit-6",
    "unitNumber": 6,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 6: Pronouns and Possessives (Àwọn Ọ̀rọ̀-Arọ́pò-Orúkọ)",
    "subtitle": "Emphatic vs. clitic subject pronouns (Èmi/Mo, Ìwọ/O, Òun/Ó), honorific Ẹ and Wọ́n, and possessives (tèmi, tìrẹ).",
    "icon": "Layers",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "y-u6-l1",
        "title": "Lesson 1: Ọ̀rọ̀-Arọ́pò-Orúkọ àti Ti-ẹnikọ̀ọ̀kan (Pronouns & Ownership)",
        "description": "Master emphatic and clitic pronouns, honorific pronouns of respect (Ẹ / Wọ́n for elders), and possessive forms.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u6-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the 1st person plural subject pronoun ('We / us') in Yoruba?",
            "options": [
              "Àwa / A",
              "Èmi / Mo",
              "Àwọn / Wọ́n",
              "Ẹyin / Ẹ"
            ],
            "correctAnswer": "Àwa / A",
            "explanation": "'Àwa' is the emphatic pronoun, and 'A' is the clitic subject pronoun for 'we/us'."
          },
          {
            "id": "y-u6-l1-q2",
            "type": "matching",
            "prompt": "Match Yoruba emphatic pronouns with their short clitic subject forms:",
            "pairs": [
              {
                "native": "Èmi",
                "english": "Mo (I)",
                "left": "Èmi",
                "right": "Mo (I)"
              },
              {
                "native": "Ìwọ",
                "english": "O (You singular)",
                "left": "Ìwọ",
                "right": "O (You singular)"
              },
              {
                "native": "Òun",
                "english": "Ó (He / She / It)",
                "left": "Òun",
                "right": "Ó (He / She / It)"
              },
              {
                "native": "Àwọn",
                "english": "Wọ́n (They)",
                "left": "Àwọn",
                "right": "Wọ́n (They)"
              }
            ]
          },
          {
            "id": "y-u6-l1-q3",
            "type": "fill_blank",
            "sentence": "To say 'This book is mine', you say: 'Ìwé yìí jẹ́ ___'.",
            "missingWord": "tèmi",
            "options": [
              "tèmi",
              "tìrẹ",
              "tirẹ̀",
              "tiwa"
            ],
            "correctAnswer": "tèmi",
            "explanation": "'Tèmi' (ti + èmi) means 'mine'."
          },
          {
            "id": "y-u6-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Àwa ni akẹ́kọ̀ọ́' (We are students):",
            "tokens": [
              "Àwa",
              "ni",
              "akẹ́kọ̀ọ́"
            ],
            "correctTokens": [
              "Àwa",
              "ni",
              "akẹ́kọ̀ọ́"
            ]
          },
          {
            "id": "y-u6-l1-q5",
            "type": "audio_listen",
            "phrase": "Ilé yìí jẹ́ tiwa",
            "prompt": "Listen to the statement. What does 'Ilé yìí jẹ́ tiwa' mean?",
            "options": [
              "This house is ours",
              "This house is yours",
              "This house is theirs",
              "Whose house is this?"
            ],
            "correctAnswer": "This house is ours",
            "explanation": "'Tiwa' means 'ours'; 'Ilé yìí jẹ́ tiwa' = This house is ours."
          },
          {
            "id": "y-u6-l1-q6",
            "type": "multiple_choice",
            "prompt": "How does one respectfully refer to a single elder in the 3rd person ('He/She is resting')?",
            "options": [
              "Wọ́n ń sinmi (Using 3rd person plural 'Wọ́n' as an honorific of respect)",
              "Ó ń sinmi (Using singular ó)",
              "Mo ń sinmi",
              "O ń sinmi"
            ],
            "correctAnswer": "Wọ́n ń sinmi (Using 3rd person plural 'Wọ́n' as an honorific of respect)",
            "explanation": "In Yoruba culture, 'Wọ́n' is strictly used to refer to a senior or respected person in the third person."
          },
          {
            "id": "y-u6-l1-q7",
            "type": "matching",
            "prompt": "Match possessive qualifiers in Yoruba:",
            "pairs": [
              {
                "native": "Tèmi",
                "english": "Mine",
                "left": "Tèmi",
                "right": "Mine"
              },
              {
                "native": "Tìrẹ",
                "english": "Yours (singular casual)",
                "left": "Tìrẹ",
                "right": "Yours (singular casual)"
              },
              {
                "native": "Tirẹ̀",
                "english": "His / hers",
                "left": "Tirẹ̀",
                "right": "His / hers"
              },
              {
                "native": "Tiyín",
                "english": "Yours (plural / honorific)",
                "left": "Tiyín",
                "right": "Yours (plural / honorific)"
              }
            ]
          },
          {
            "id": "y-u6-l1-q8",
            "type": "fill_blank",
            "sentence": "When asking 'Whose is this?', you ask: 'Ti ___ ni èyí?'.",
            "missingWord": "ta",
            "options": [
              "ta",
              "kí",
              "ibo",
              "èwo"
            ],
            "correctAnswer": "ta",
            "explanation": "'Ti ta' means 'whose' (literally: of whom); 'ta ni' = who."
          },
          {
            "id": "y-u6-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Wọ́n ń lọ sí ọjà' (They / The elder is going to market):",
            "tokens": [
              "Wọ́n",
              "ń",
              "lọ",
              "sí",
              "ọjà"
            ],
            "correctTokens": [
              "Wọ́n",
              "ń",
              "lọ",
              "sí",
              "ọjà"
            ]
          },
          {
            "id": "y-u6-l1-q10",
            "type": "multiple_choice",
            "prompt": "Which pair shows the casual 'you' vs the respectful/plural 'you'?",
            "options": [
              "Ìwọ / O (Casual) and Ẹyin / Ẹ (Respectful)",
              "Èmi and Àwa",
              "Òun and Wọ́n",
              "Mi and Rẹ"
            ],
            "correctAnswer": "Ìwọ / O (Casual) and Ẹyin / Ẹ (Respectful)",
            "explanation": "Yoruba strictly differentiates between casual singular 'O/Ìwọ' and honorific/plural 'Ẹ/Ẹyin'."
          },
          {
            "id": "y-u6-l1-q11",
            "type": "audio_listen",
            "phrase": "Ta ni ó pè mí?",
            "prompt": "Listen to the question. What does 'Ta ni ó pè mí?' ask?",
            "options": [
              "Who called me?",
              "Who saw you?",
              "Where are you coming from?",
              "Why are they laughing?"
            ],
            "correctAnswer": "Who called me?",
            "explanation": "'Ta ni' = who; 'ó pè mí' = called me."
          },
          {
            "id": "y-u6-l1-q12",
            "type": "matching",
            "prompt": "Match demonstrative qualifiers with English translations:",
            "pairs": [
              {
                "native": "Èyí",
                "english": "This / This one",
                "left": "Èyí",
                "right": "This / This one"
              },
              {
                "native": "Ìyẹn",
                "english": "That / That one",
                "left": "Ìyẹn",
                "right": "That / That one"
              },
              {
                "native": "Àwọn wọ̀nyí",
                "english": "These ones",
                "left": "Àwọn wọ̀nyí",
                "right": "These ones"
              },
              {
                "native": "Àwọn wọ̀nyẹn",
                "english": "Those ones",
                "left": "Àwọn wọ̀nyẹn",
                "right": "Those ones"
              }
            ]
          },
          {
            "id": "y-u6-l1-q13",
            "type": "fill_blank",
            "sentence": "To say 'my mother', you attach the possessive pronoun: 'Ìyá ___'.",
            "missingWord": "mi",
            "options": [
              "mi",
              "rẹ",
              "rẹ̀",
              "wa"
            ],
            "correctAnswer": "mi",
            "explanation": "'Ìyá mi' means my mother."
          },
          {
            "id": "y-u6-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Òun ni ọ̀rẹ́ mi' (He/She is my friend):",
            "tokens": [
              "Òun",
              "ni",
              "ọ̀rẹ́",
              "mi"
            ],
            "correctTokens": [
              "Òun",
              "ni",
              "ọ̀rẹ́",
              "mi"
            ]
          },
          {
            "id": "y-u6-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Gbogbo wa' mean?",
            "options": [
              "All of us",
              "Only them",
              "You alone",
              "Nobody"
            ],
            "correctAnswer": "All of us",
            "explanation": "'Gbogbo wa' translates to 'All of us'."
          },
          {
            "id": "y-u6-l1-q16",
            "type": "audio_listen",
            "phrase": "Owó yìí jẹ́ tiwọn",
            "prompt": "Listen to the statement. What does 'Owó yìí jẹ́ tiwọn' mean?",
            "options": [
              "This money is theirs",
              "This money is mine",
              "Bring your money",
              "Count the money"
            ],
            "correctAnswer": "This money is theirs",
            "explanation": "'Tiwọn' = theirs; 'Owó yìí jẹ́ tiwọn' = This money is theirs."
          },
          {
            "id": "y-u6-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'himself / herself' in reflexive Yoruba?",
            "options": [
              "Ara rẹ̀",
              "Ara mi",
              "Ara rẹ",
              "Ara wa"
            ],
            "correctAnswer": "Ara rẹ̀",
            "explanation": "'Ara rẹ̀' (ara = body/self) means himself/herself."
          },
          {
            "id": "y-u6-l1-q18",
            "type": "fill_blank",
            "sentence": "The reflexive expression for 'myself' in Yoruba is 'Ara ___'.",
            "missingWord": "mi",
            "options": [
              "mi",
              "rẹ",
              "rẹ̀",
              "wọn"
            ],
            "correctAnswer": "mi",
            "explanation": "'Ara mi' means myself."
          },
          {
            "id": "y-u6-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Kí ni o fẹ́?' ask casually?",
            "options": [
              "What do you want?",
              "Where are you going?",
              "Who is calling?",
              "When will you arrive?"
            ],
            "correctAnswer": "What do you want?",
            "explanation": "'Kí ni' = what; 'o fẹ́' = you want."
          },
          {
            "id": "y-u6-l1-q20",
            "type": "matching",
            "prompt": "Match interrogative pronouns in Yoruba:",
            "pairs": [
              {
                "native": "Ta ni?",
                "english": "Who?",
                "left": "Ta ni?",
                "right": "Who?"
              },
              {
                "native": "Kí ni?",
                "english": "What?",
                "left": "Kí ni?",
                "right": "What?"
              },
              {
                "native": "Níbo ni?",
                "english": "Where?",
                "left": "Níbo ni?",
                "right": "Where?"
              },
              {
                "native": "Èló ni?",
                "english": "How much?",
                "left": "Èló ni?",
                "right": "How much?"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u6-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the 1st person plural subject pronoun ('We / us') in Yoruba?",
        "options": [
          "Àwa / A",
          "Èmi / Mo",
          "Àwọn / Wọ́n",
          "Ẹyin / Ẹ"
        ],
        "correctAnswer": "Àwa / A",
        "explanation": "'Àwa' is the emphatic pronoun, and 'A' is the clitic subject pronoun for 'we/us'."
      },
      {
        "id": "y-u6-l1-q2",
        "type": "matching",
        "prompt": "Match Yoruba emphatic pronouns with their short clitic subject forms:",
        "pairs": [
          {
            "native": "Èmi",
            "english": "Mo (I)",
            "left": "Èmi",
            "right": "Mo (I)"
          },
          {
            "native": "Ìwọ",
            "english": "O (You singular)",
            "left": "Ìwọ",
            "right": "O (You singular)"
          },
          {
            "native": "Òun",
            "english": "Ó (He / She / It)",
            "left": "Òun",
            "right": "Ó (He / She / It)"
          },
          {
            "native": "Àwọn",
            "english": "Wọ́n (They)",
            "left": "Àwọn",
            "right": "Wọ́n (They)"
          }
        ]
      },
      {
        "id": "y-u6-l1-q3",
        "type": "fill_blank",
        "sentence": "To say 'This book is mine', you say: 'Ìwé yìí jẹ́ ___'.",
        "missingWord": "tèmi",
        "options": [
          "tèmi",
          "tìrẹ",
          "tirẹ̀",
          "tiwa"
        ],
        "correctAnswer": "tèmi",
        "explanation": "'Tèmi' (ti + èmi) means 'mine'."
      },
      {
        "id": "y-u6-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Àwa ni akẹ́kọ̀ọ́' (We are students):",
        "tokens": [
          "Àwa",
          "ni",
          "akẹ́kọ̀ọ́"
        ],
        "correctTokens": [
          "Àwa",
          "ni",
          "akẹ́kọ̀ọ́"
        ]
      },
      {
        "id": "y-u6-l1-q5",
        "type": "audio_listen",
        "phrase": "Ilé yìí jẹ́ tiwa",
        "prompt": "Listen to the statement. What does 'Ilé yìí jẹ́ tiwa' mean?",
        "options": [
          "This house is ours",
          "This house is yours",
          "This house is theirs",
          "Whose house is this?"
        ],
        "correctAnswer": "This house is ours",
        "explanation": "'Tiwa' means 'ours'; 'Ilé yìí jẹ́ tiwa' = This house is ours."
      },
      {
        "id": "y-u6-l1-q6",
        "type": "multiple_choice",
        "prompt": "How does one respectfully refer to a single elder in the 3rd person ('He/She is resting')?",
        "options": [
          "Wọ́n ń sinmi (Using 3rd person plural 'Wọ́n' as an honorific of respect)",
          "Ó ń sinmi (Using singular ó)",
          "Mo ń sinmi",
          "O ń sinmi"
        ],
        "correctAnswer": "Wọ́n ń sinmi (Using 3rd person plural 'Wọ́n' as an honorific of respect)",
        "explanation": "In Yoruba culture, 'Wọ́n' is strictly used to refer to a senior or respected person in the third person."
      },
      {
        "id": "y-u6-l1-q7",
        "type": "matching",
        "prompt": "Match possessive qualifiers in Yoruba:",
        "pairs": [
          {
            "native": "Tèmi",
            "english": "Mine",
            "left": "Tèmi",
            "right": "Mine"
          },
          {
            "native": "Tìrẹ",
            "english": "Yours (singular casual)",
            "left": "Tìrẹ",
            "right": "Yours (singular casual)"
          },
          {
            "native": "Tirẹ̀",
            "english": "His / hers",
            "left": "Tirẹ̀",
            "right": "His / hers"
          },
          {
            "native": "Tiyín",
            "english": "Yours (plural / honorific)",
            "left": "Tiyín",
            "right": "Yours (plural / honorific)"
          }
        ]
      },
      {
        "id": "y-u6-l1-q8",
        "type": "fill_blank",
        "sentence": "When asking 'Whose is this?', you ask: 'Ti ___ ni èyí?'.",
        "missingWord": "ta",
        "options": [
          "ta",
          "kí",
          "ibo",
          "èwo"
        ],
        "correctAnswer": "ta",
        "explanation": "'Ti ta' means 'whose' (literally: of whom); 'ta ni' = who."
      },
      {
        "id": "y-u6-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Wọ́n ń lọ sí ọjà' (They / The elder is going to market):",
        "tokens": [
          "Wọ́n",
          "ń",
          "lọ",
          "sí",
          "ọjà"
        ],
        "correctTokens": [
          "Wọ́n",
          "ń",
          "lọ",
          "sí",
          "ọjà"
        ]
      },
      {
        "id": "y-u6-l1-q10",
        "type": "multiple_choice",
        "prompt": "Which pair shows the casual 'you' vs the respectful/plural 'you'?",
        "options": [
          "Ìwọ / O (Casual) and Ẹyin / Ẹ (Respectful)",
          "Èmi and Àwa",
          "Òun and Wọ́n",
          "Mi and Rẹ"
        ],
        "correctAnswer": "Ìwọ / O (Casual) and Ẹyin / Ẹ (Respectful)",
        "explanation": "Yoruba strictly differentiates between casual singular 'O/Ìwọ' and honorific/plural 'Ẹ/Ẹyin'."
      },
      {
        "id": "y-u6-l1-q11",
        "type": "audio_listen",
        "phrase": "Ta ni ó pè mí?",
        "prompt": "Listen to the question. What does 'Ta ni ó pè mí?' ask?",
        "options": [
          "Who called me?",
          "Who saw you?",
          "Where are you coming from?",
          "Why are they laughing?"
        ],
        "correctAnswer": "Who called me?",
        "explanation": "'Ta ni' = who; 'ó pè mí' = called me."
      },
      {
        "id": "y-u6-l1-q12",
        "type": "matching",
        "prompt": "Match demonstrative qualifiers with English translations:",
        "pairs": [
          {
            "native": "Èyí",
            "english": "This / This one",
            "left": "Èyí",
            "right": "This / This one"
          },
          {
            "native": "Ìyẹn",
            "english": "That / That one",
            "left": "Ìyẹn",
            "right": "That / That one"
          },
          {
            "native": "Àwọn wọ̀nyí",
            "english": "These ones",
            "left": "Àwọn wọ̀nyí",
            "right": "These ones"
          },
          {
            "native": "Àwọn wọ̀nyẹn",
            "english": "Those ones",
            "left": "Àwọn wọ̀nyẹn",
            "right": "Those ones"
          }
        ]
      },
      {
        "id": "y-u6-l1-q13",
        "type": "fill_blank",
        "sentence": "To say 'my mother', you attach the possessive pronoun: 'Ìyá ___'.",
        "missingWord": "mi",
        "options": [
          "mi",
          "rẹ",
          "rẹ̀",
          "wa"
        ],
        "correctAnswer": "mi",
        "explanation": "'Ìyá mi' means my mother."
      },
      {
        "id": "y-u6-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Òun ni ọ̀rẹ́ mi' (He/She is my friend):",
        "tokens": [
          "Òun",
          "ni",
          "ọ̀rẹ́",
          "mi"
        ],
        "correctTokens": [
          "Òun",
          "ni",
          "ọ̀rẹ́",
          "mi"
        ]
      },
      {
        "id": "y-u6-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Gbogbo wa' mean?",
        "options": [
          "All of us",
          "Only them",
          "You alone",
          "Nobody"
        ],
        "correctAnswer": "All of us",
        "explanation": "'Gbogbo wa' translates to 'All of us'."
      },
      {
        "id": "y-u6-l1-q16",
        "type": "audio_listen",
        "phrase": "Owó yìí jẹ́ tiwọn",
        "prompt": "Listen to the statement. What does 'Owó yìí jẹ́ tiwọn' mean?",
        "options": [
          "This money is theirs",
          "This money is mine",
          "Bring your money",
          "Count the money"
        ],
        "correctAnswer": "This money is theirs",
        "explanation": "'Tiwọn' = theirs; 'Owó yìí jẹ́ tiwọn' = This money is theirs."
      },
      {
        "id": "y-u6-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'himself / herself' in reflexive Yoruba?",
        "options": [
          "Ara rẹ̀",
          "Ara mi",
          "Ara rẹ",
          "Ara wa"
        ],
        "correctAnswer": "Ara rẹ̀",
        "explanation": "'Ara rẹ̀' (ara = body/self) means himself/herself."
      },
      {
        "id": "y-u6-l1-q18",
        "type": "fill_blank",
        "sentence": "The reflexive expression for 'myself' in Yoruba is 'Ara ___'.",
        "missingWord": "mi",
        "options": [
          "mi",
          "rẹ",
          "rẹ̀",
          "wọn"
        ],
        "correctAnswer": "mi",
        "explanation": "'Ara mi' means myself."
      },
      {
        "id": "y-u6-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Kí ni o fẹ́?' ask casually?",
        "options": [
          "What do you want?",
          "Where are you going?",
          "Who is calling?",
          "When will you arrive?"
        ],
        "correctAnswer": "What do you want?",
        "explanation": "'Kí ni' = what; 'o fẹ́' = you want."
      },
      {
        "id": "y-u6-l1-q20",
        "type": "matching",
        "prompt": "Match interrogative pronouns in Yoruba:",
        "pairs": [
          {
            "native": "Ta ni?",
            "english": "Who?",
            "left": "Ta ni?",
            "right": "Who?"
          },
          {
            "native": "Kí ni?",
            "english": "What?",
            "left": "Kí ni?",
            "right": "What?"
          },
          {
            "native": "Níbo ni?",
            "english": "Where?",
            "left": "Níbo ni?",
            "right": "Where?"
          },
          {
            "native": "Èló ni?",
            "english": "How much?",
            "left": "Èló ni?",
            "right": "How much?"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-7",
    "unitId": "y-unit-7",
    "unitNumber": 7,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 7: Time, Weather, and Seasons (Àkókò àti Àwọn Ìgbà)",
    "subtitle": "Telling time (Agogo mélòó ni?), dry season (Ẹ̀rùn), harmattan (Oyé), and rainy season (Òjò).",
    "icon": "Sun",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "y-u7-l1",
        "title": "Lesson 1: Agogo, Ọjọ́, Òjò àti Àwọn Ìgbà Ọdún (Time, Clock & Meteorology)",
        "description": "Learn telling time on the clock, daily schedules, seasons of Southwestern Nigeria (Ẹ̀rùn, Oyé, Òjò), and weather conditions.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u7-l1-q1",
            "type": "multiple_choice",
            "prompt": "How do you ask 'What time is it?' in standard Yoruba?",
            "options": [
              "Agogo mélòó ni?",
              "Èló ni owó rẹ̀?",
              "Níbo ni o ń lọ?",
              "Ta ni ó wà níbẹ̀?"
            ],
            "correctAnswer": "Agogo mélòó ni?",
            "explanation": "'Agogo' means clock/bell; 'Agogo mélòó ni?' = What time is it?"
          },
          {
            "id": "y-u7-l1-q2",
            "type": "matching",
            "prompt": "Match ecological seasons of Yorubaland with English descriptions:",
            "pairs": [
              {
                "native": "Ẹ̀rùn",
                "english": "Dry season (hot dry sun)",
                "left": "Ẹ̀rùn",
                "right": "Dry season (hot dry sun)"
              },
              {
                "native": "Oyé",
                "english": "Harmattan (cool, dusty northeastern haze)",
                "left": "Oyé",
                "right": "Harmattan (cool, dusty northeastern haze)"
              },
              {
                "native": "Òjò",
                "english": "Rainy / Wet season",
                "left": "Òjò",
                "right": "Rainy / Wet season"
              },
              {
                "native": "Àkókò ìkórè",
                "english": "Harvest season",
                "left": "Àkókò ìkórè",
                "right": "Harvest season"
              }
            ]
          },
          {
            "id": "y-u7-l1-q3",
            "type": "fill_blank",
            "sentence": "To say 'It is two o'clock', you say: 'Agogo ___ ni'.",
            "missingWord": "méjì",
            "options": [
              "méjì",
              "kan",
              "mẹ́ta",
              "mẹ́rin"
            ],
            "correctAnswer": "méjì",
            "explanation": "'Agogo méjì ni' means 'It is two o'clock'."
          },
          {
            "id": "y-u7-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Òjò ń rọ̀ púpọ̀ lónìí' (It is raining heavily today):",
            "tokens": [
              "Òjò",
              "ń",
              "rọ̀",
              "púpọ̀",
              "lónìí"
            ],
            "correctTokens": [
              "Òjò",
              "ń",
              "rọ̀",
              "púpọ̀",
              "lónìí"
            ]
          },
          {
            "id": "y-u7-l1-q5",
            "type": "audio_listen",
            "phrase": "Oòrùn mú lónìí gidigidi",
            "prompt": "Listen to the weather description. What is happening today?",
            "options": [
              "The sun is blazing hot today",
              "A heavy rainstorm is falling",
              "The harmattan dust is cold",
              "A strong wind blew away roofs"
            ],
            "correctAnswer": "The sun is blazing hot today",
            "explanation": "'Oòrùn mú' = the sun is hot/blazing; 'gidigidi' = intensely/greatly."
          },
          {
            "id": "y-u7-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does 'Àbọ̀' mean when telling clock time (e.g. 'Agogo mẹ́ta àbọ̀')?",
            "options": [
              "Half past three (3:30)",
              "Quarter to three",
              "Midnight",
              "Noon"
            ],
            "correctAnswer": "Half past three (3:30)",
            "explanation": "'Àbọ̀' means half; 'Agogo mẹ́ta àbọ̀' = 3:30 (half past three)."
          },
          {
            "id": "y-u7-l1-q7",
            "type": "matching",
            "prompt": "Match meteorological phenomena in Yoruba:",
            "pairs": [
              {
                "native": "Ààrá",
                "english": "Thunder",
                "left": "Ààrá",
                "right": "Thunder"
              },
              {
                "native": "Mọ̀nàmọ́ná",
                "english": "Lightning",
                "left": "Mọ̀nàmọ́ná",
                "right": "Lightning"
              },
              {
                "native": "Ẹ̀fúùfù / Afẹ́fẹ́",
                "english": "Wind / Breeze",
                "left": "Ẹ̀fúùfù / Afẹ́fẹ́",
                "right": "Wind / Breeze"
              },
              {
                "native": "Ìkùukùu",
                "english": "Fog / Clouds / Mist",
                "left": "Ìkùukùu",
                "right": "Fog / Clouds / Mist"
              }
            ]
          },
          {
            "id": "y-u7-l1-q8",
            "type": "fill_blank",
            "sentence": "The cool dusty wind that blows across West Africa from the Sahara is called '___'.",
            "missingWord": "Oyé",
            "options": [
              "Oyé",
              "Òjò",
              "Ẹ̀rùn",
              "Iná"
            ],
            "correctAnswer": "Oyé",
            "explanation": "'Oyé' is the harmattan season and wind."
          },
          {
            "id": "y-u7-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Agogo mẹ́fà ìdájí' (Six o'clock in the morning):",
            "tokens": [
              "Agogo",
              "mẹ́fà",
              "ìdájí"
            ],
            "correctTokens": [
              "Agogo",
              "mẹ́fà",
              "ìdájí"
            ]
          },
          {
            "id": "y-u7-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is 'Ìṣẹ́jú' in measuring time?",
            "options": [
              "Minute",
              "Hour",
              "Second",
              "Day"
            ],
            "correctAnswer": "Minute",
            "explanation": "'Ìṣẹ́jú' is a minute (e.g. 'ìṣẹ́jú mẹ́wàá' = 10 minutes)."
          },
          {
            "id": "y-u7-l1-q11",
            "type": "audio_listen",
            "phrase": "Ilẹ̀ ti ṣú",
            "prompt": "Listen to the phrase. What time of the cycle has arrived?",
            "options": [
              "Dusk has fallen / Night has arrived",
              "Dawn has broken",
              "It is noon",
              "The rain has stopped"
            ],
            "correctAnswer": "Dusk has fallen / Night has arrived",
            "explanation": "'Ilẹ̀ ti ṣú' literally means darkness has fallen (night has arrived)."
          },
          {
            "id": "y-u7-l1-q12",
            "type": "matching",
            "prompt": "Match divisions of the day in Yoruba:",
            "pairs": [
              {
                "native": "Àárọ̀",
                "english": "Morning",
                "left": "Àárọ̀",
                "right": "Morning"
              },
              {
                "native": "Ọ̀sán",
                "english": "Afternoon",
                "left": "Ọ̀sán",
                "right": "Afternoon"
              },
              {
                "native": "Ìrọ̀lẹ́",
                "english": "Late afternoon / Sunset",
                "left": "Ìrọ̀lẹ́",
                "right": "Late afternoon / Sunset"
              },
              {
                "native": "Alẹ́",
                "english": "Night",
                "left": "Alẹ́",
                "right": "Night"
              }
            ]
          },
          {
            "id": "y-u7-l1-q13",
            "type": "fill_blank",
            "sentence": "When minutes remain until the next hour ('quarter to four'), Yoruba uses 'kù': 'Agogo mẹ́rin ___ sí ìṣẹ́jú mẹ́ẹ̀dógún'.",
            "missingWord": "kù",
            "options": [
              "kù",
              "kọjá",
              "wà",
              "ní"
            ],
            "correctAnswer": "kù",
            "explanation": "'Kù sí' means 'remaining until' (e.g. remaining 15 minutes to 4)."
          },
          {
            "id": "y-u7-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ilẹ̀ ti mọ́' (Dawn has broken / Day has dawned):",
            "tokens": [
              "Ilẹ̀",
              "ti",
              "mọ́"
            ],
            "correctTokens": [
              "Ilẹ̀",
              "ti",
              "mọ́"
            ]
          },
          {
            "id": "y-u7-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Ọdún' in Yoruba calendar reckoning?",
            "options": [
              "Year / Annual festival",
              "Month",
              "Week",
              "Hour"
            ],
            "correctAnswer": "Year / Annual festival",
            "explanation": "'Ọdún' signifies both a calendar year and an annual celebration/festival."
          },
          {
            "id": "y-u7-l1-q16",
            "type": "audio_listen",
            "phrase": "Afẹ́fẹ́ tútù ń fẹ́ láti òkè",
            "prompt": "Listen to the description. What kind of breeze is blowing?",
            "options": [
              "A cold wind is blowing from above",
              "A hot breeze is blowing",
              "Dust is blinding the travelers",
              "Heavy rain has stopped"
            ],
            "correctAnswer": "A cold wind is blowing from above",
            "explanation": "'Afẹ́fẹ́ tútù' = cold wind / cool breeze; 'ń fẹ́' = is blowing."
          },
          {
            "id": "y-u7-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'Yesterday' in Yoruba?",
            "options": [
              "Àná",
              "Lónìí",
              "Ọ̀la",
              "Èsì"
            ],
            "correctAnswer": "Àná",
            "explanation": "'Àná' = yesterday; 'Lónìí' = today; 'Ọ̀la' = tomorrow."
          },
          {
            "id": "y-u7-l1-q18",
            "type": "fill_blank",
            "sentence": "To say 'Tomorrow' in Yoruba, the word is '___'.",
            "missingWord": "Ọ̀la",
            "options": [
              "Ọ̀la",
              "Àná",
              "Lónìí",
              "Ọ̀sẹ̀"
            ],
            "correctAnswer": "Ọ̀la",
            "explanation": "'Ọ̀la' is tomorrow."
          },
          {
            "id": "y-u7-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Ọ̀sán gangan' mean?",
            "options": [
              "High noon / Midday exact",
              "Midnight",
              "Early dawn",
              "Sunset"
            ],
            "correctAnswer": "High noon / Midday exact",
            "explanation": "'Ọ̀sán gangan' specifies the peak midday sun / high noon."
          },
          {
            "id": "y-u7-l1-q20",
            "type": "matching",
            "prompt": "Match temporal adverbs in Yoruba:",
            "pairs": [
              {
                "native": "Nígbà gbogbo",
                "english": "Always / At all times",
                "left": "Nígbà gbogbo",
                "right": "Always / At all times"
              },
              {
                "native": "Nígbà mìíràn",
                "english": "Sometimes / Occasionally",
                "left": "Nígbà mìíràn",
                "right": "Sometimes / Occasionally"
              },
              {
                "native": "Nísinsìnyí",
                "english": "Right now / Immediately",
                "left": "Nísinsìnyí",
                "right": "Right now / Immediately"
              },
              {
                "native": "Títí láéláé",
                "english": "Forever / Eternally",
                "left": "Títí láéláé",
                "right": "Títí láéláé"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u7-l1-q1",
        "type": "multiple_choice",
        "prompt": "How do you ask 'What time is it?' in standard Yoruba?",
        "options": [
          "Agogo mélòó ni?",
          "Èló ni owó rẹ̀?",
          "Níbo ni o ń lọ?",
          "Ta ni ó wà níbẹ̀?"
        ],
        "correctAnswer": "Agogo mélòó ni?",
        "explanation": "'Agogo' means clock/bell; 'Agogo mélòó ni?' = What time is it?"
      },
      {
        "id": "y-u7-l1-q2",
        "type": "matching",
        "prompt": "Match ecological seasons of Yorubaland with English descriptions:",
        "pairs": [
          {
            "native": "Ẹ̀rùn",
            "english": "Dry season (hot dry sun)",
            "left": "Ẹ̀rùn",
            "right": "Dry season (hot dry sun)"
          },
          {
            "native": "Oyé",
            "english": "Harmattan (cool, dusty northeastern haze)",
            "left": "Oyé",
            "right": "Harmattan (cool, dusty northeastern haze)"
          },
          {
            "native": "Òjò",
            "english": "Rainy / Wet season",
            "left": "Òjò",
            "right": "Rainy / Wet season"
          },
          {
            "native": "Àkókò ìkórè",
            "english": "Harvest season",
            "left": "Àkókò ìkórè",
            "right": "Harvest season"
          }
        ]
      },
      {
        "id": "y-u7-l1-q3",
        "type": "fill_blank",
        "sentence": "To say 'It is two o'clock', you say: 'Agogo ___ ni'.",
        "missingWord": "méjì",
        "options": [
          "méjì",
          "kan",
          "mẹ́ta",
          "mẹ́rin"
        ],
        "correctAnswer": "méjì",
        "explanation": "'Agogo méjì ni' means 'It is two o'clock'."
      },
      {
        "id": "y-u7-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Òjò ń rọ̀ púpọ̀ lónìí' (It is raining heavily today):",
        "tokens": [
          "Òjò",
          "ń",
          "rọ̀",
          "púpọ̀",
          "lónìí"
        ],
        "correctTokens": [
          "Òjò",
          "ń",
          "rọ̀",
          "púpọ̀",
          "lónìí"
        ]
      },
      {
        "id": "y-u7-l1-q5",
        "type": "audio_listen",
        "phrase": "Oòrùn mú lónìí gidigidi",
        "prompt": "Listen to the weather description. What is happening today?",
        "options": [
          "The sun is blazing hot today",
          "A heavy rainstorm is falling",
          "The harmattan dust is cold",
          "A strong wind blew away roofs"
        ],
        "correctAnswer": "The sun is blazing hot today",
        "explanation": "'Oòrùn mú' = the sun is hot/blazing; 'gidigidi' = intensely/greatly."
      },
      {
        "id": "y-u7-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does 'Àbọ̀' mean when telling clock time (e.g. 'Agogo mẹ́ta àbọ̀')?",
        "options": [
          "Half past three (3:30)",
          "Quarter to three",
          "Midnight",
          "Noon"
        ],
        "correctAnswer": "Half past three (3:30)",
        "explanation": "'Àbọ̀' means half; 'Agogo mẹ́ta àbọ̀' = 3:30 (half past three)."
      },
      {
        "id": "y-u7-l1-q7",
        "type": "matching",
        "prompt": "Match meteorological phenomena in Yoruba:",
        "pairs": [
          {
            "native": "Ààrá",
            "english": "Thunder",
            "left": "Ààrá",
            "right": "Thunder"
          },
          {
            "native": "Mọ̀nàmọ́ná",
            "english": "Lightning",
            "left": "Mọ̀nàmọ́ná",
            "right": "Lightning"
          },
          {
            "native": "Ẹ̀fúùfù / Afẹ́fẹ́",
            "english": "Wind / Breeze",
            "left": "Ẹ̀fúùfù / Afẹ́fẹ́",
            "right": "Wind / Breeze"
          },
          {
            "native": "Ìkùukùu",
            "english": "Fog / Clouds / Mist",
            "left": "Ìkùukùu",
            "right": "Fog / Clouds / Mist"
          }
        ]
      },
      {
        "id": "y-u7-l1-q8",
        "type": "fill_blank",
        "sentence": "The cool dusty wind that blows across West Africa from the Sahara is called '___'.",
        "missingWord": "Oyé",
        "options": [
          "Oyé",
          "Òjò",
          "Ẹ̀rùn",
          "Iná"
        ],
        "correctAnswer": "Oyé",
        "explanation": "'Oyé' is the harmattan season and wind."
      },
      {
        "id": "y-u7-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Agogo mẹ́fà ìdájí' (Six o'clock in the morning):",
        "tokens": [
          "Agogo",
          "mẹ́fà",
          "ìdájí"
        ],
        "correctTokens": [
          "Agogo",
          "mẹ́fà",
          "ìdájí"
        ]
      },
      {
        "id": "y-u7-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is 'Ìṣẹ́jú' in measuring time?",
        "options": [
          "Minute",
          "Hour",
          "Second",
          "Day"
        ],
        "correctAnswer": "Minute",
        "explanation": "'Ìṣẹ́jú' is a minute (e.g. 'ìṣẹ́jú mẹ́wàá' = 10 minutes)."
      },
      {
        "id": "y-u7-l1-q11",
        "type": "audio_listen",
        "phrase": "Ilẹ̀ ti ṣú",
        "prompt": "Listen to the phrase. What time of the cycle has arrived?",
        "options": [
          "Dusk has fallen / Night has arrived",
          "Dawn has broken",
          "It is noon",
          "The rain has stopped"
        ],
        "correctAnswer": "Dusk has fallen / Night has arrived",
        "explanation": "'Ilẹ̀ ti ṣú' literally means darkness has fallen (night has arrived)."
      },
      {
        "id": "y-u7-l1-q12",
        "type": "matching",
        "prompt": "Match divisions of the day in Yoruba:",
        "pairs": [
          {
            "native": "Àárọ̀",
            "english": "Morning",
            "left": "Àárọ̀",
            "right": "Morning"
          },
          {
            "native": "Ọ̀sán",
            "english": "Afternoon",
            "left": "Ọ̀sán",
            "right": "Afternoon"
          },
          {
            "native": "Ìrọ̀lẹ́",
            "english": "Late afternoon / Sunset",
            "left": "Ìrọ̀lẹ́",
            "right": "Late afternoon / Sunset"
          },
          {
            "native": "Alẹ́",
            "english": "Night",
            "left": "Alẹ́",
            "right": "Night"
          }
        ]
      },
      {
        "id": "y-u7-l1-q13",
        "type": "fill_blank",
        "sentence": "When minutes remain until the next hour ('quarter to four'), Yoruba uses 'kù': 'Agogo mẹ́rin ___ sí ìṣẹ́jú mẹ́ẹ̀dógún'.",
        "missingWord": "kù",
        "options": [
          "kù",
          "kọjá",
          "wà",
          "ní"
        ],
        "correctAnswer": "kù",
        "explanation": "'Kù sí' means 'remaining until' (e.g. remaining 15 minutes to 4)."
      },
      {
        "id": "y-u7-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ilẹ̀ ti mọ́' (Dawn has broken / Day has dawned):",
        "tokens": [
          "Ilẹ̀",
          "ti",
          "mọ́"
        ],
        "correctTokens": [
          "Ilẹ̀",
          "ti",
          "mọ́"
        ]
      },
      {
        "id": "y-u7-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Ọdún' in Yoruba calendar reckoning?",
        "options": [
          "Year / Annual festival",
          "Month",
          "Week",
          "Hour"
        ],
        "correctAnswer": "Year / Annual festival",
        "explanation": "'Ọdún' signifies both a calendar year and an annual celebration/festival."
      },
      {
        "id": "y-u7-l1-q16",
        "type": "audio_listen",
        "phrase": "Afẹ́fẹ́ tútù ń fẹ́ láti òkè",
        "prompt": "Listen to the description. What kind of breeze is blowing?",
        "options": [
          "A cold wind is blowing from above",
          "A hot breeze is blowing",
          "Dust is blinding the travelers",
          "Heavy rain has stopped"
        ],
        "correctAnswer": "A cold wind is blowing from above",
        "explanation": "'Afẹ́fẹ́ tútù' = cold wind / cool breeze; 'ń fẹ́' = is blowing."
      },
      {
        "id": "y-u7-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'Yesterday' in Yoruba?",
        "options": [
          "Àná",
          "Lónìí",
          "Ọ̀la",
          "Èsì"
        ],
        "correctAnswer": "Àná",
        "explanation": "'Àná' = yesterday; 'Lónìí' = today; 'Ọ̀la' = tomorrow."
      },
      {
        "id": "y-u7-l1-q18",
        "type": "fill_blank",
        "sentence": "To say 'Tomorrow' in Yoruba, the word is '___'.",
        "missingWord": "Ọ̀la",
        "options": [
          "Ọ̀la",
          "Àná",
          "Lónìí",
          "Ọ̀sẹ̀"
        ],
        "correctAnswer": "Ọ̀la",
        "explanation": "'Ọ̀la' is tomorrow."
      },
      {
        "id": "y-u7-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Ọ̀sán gangan' mean?",
        "options": [
          "High noon / Midday exact",
          "Midnight",
          "Early dawn",
          "Sunset"
        ],
        "correctAnswer": "High noon / Midday exact",
        "explanation": "'Ọ̀sán gangan' specifies the peak midday sun / high noon."
      },
      {
        "id": "y-u7-l1-q20",
        "type": "matching",
        "prompt": "Match temporal adverbs in Yoruba:",
        "pairs": [
          {
            "native": "Nígbà gbogbo",
            "english": "Always / At all times",
            "left": "Nígbà gbogbo",
            "right": "Always / At all times"
          },
          {
            "native": "Nígbà mìíràn",
            "english": "Sometimes / Occasionally",
            "left": "Nígbà mìíràn",
            "right": "Sometimes / Occasionally"
          },
          {
            "native": "Nísinsìnyí",
            "english": "Right now / Immediately",
            "left": "Nísinsìnyí",
            "right": "Right now / Immediately"
          },
          {
            "native": "Títí láéláé",
            "english": "Forever / Eternally",
            "left": "Títí láéláé",
            "right": "Títí láéláé"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-8",
    "unitId": "y-unit-8",
    "unitNumber": 8,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 8: Market Transactions and Commerce (Ní Ọjà)",
    "subtitle": "Currency denominations, bargaining dialogues (Ẹ dín owó rẹ̀ kù), and purchasing household provisions.",
    "icon": "ShoppingBag",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "y-u8-l1",
        "title": "Lesson 1: Ìnáwó, Ọjà àti Ìbánisọ̀rọ̀ Ìṣòwò (Market Commerce & Bargaining)",
        "description": "Navigate traditional open-air markets (ọjà), negotiate polite discounts, purchase provisions (iṣu, gàrí, epo), and calculate currency.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u8-l1-q1",
            "type": "multiple_choice",
            "prompt": "How do you ask 'How much is it?' in a Yoruba marketplace?",
            "options": [
              "Èló ni?",
              "Báwo ni?",
              "Níbo ni?",
              "Ta ni?"
            ],
            "correctAnswer": "Èló ni?",
            "explanation": "'Èló ni?' (or 'Èló ni owó rẹ̀?') directly asks 'How much is it?'."
          },
          {
            "id": "y-u8-l1-q2",
            "type": "matching",
            "prompt": "Match common Yoruba market food items with English translations:",
            "pairs": [
              {
                "native": "Iṣu",
                "english": "Yam",
                "left": "Iṣu",
                "right": "Yam"
              },
              {
                "native": "Gàrí",
                "english": "Processed cassava flakes",
                "left": "Gàrí",
                "right": "Processed cassava flakes"
              },
              {
                "native": "Ẹran",
                "english": "Meat / Beef",
                "left": "Ẹran",
                "right": "Meat / Beef"
              },
              {
                "native": "Ẹja",
                "english": "Fish",
                "left": "Ẹja",
                "right": "Fish"
              }
            ]
          },
          {
            "id": "y-u8-l1-q3",
            "type": "fill_blank",
            "sentence": "When asking the seller to reduce the price, you say: 'Ẹ dákun, ẹ dín owó rẹ̀ ___' (Please reduce the price).",
            "missingWord": "kù",
            "options": [
              "kù",
              "pọ̀",
              "wá",
              "lọ"
            ],
            "correctAnswer": "kù",
            "explanation": "'Dín... kù' is the phrasal verb meaning reduce/discount."
          },
          {
            "id": "y-u8-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ó wọ́n jù' (It is too expensive):",
            "tokens": [
              "Ó",
              "wọ́n",
              "jù"
            ],
            "correctTokens": [
              "Ó",
              "wọ́n",
              "jù"
            ]
          },
          {
            "id": "y-u8-l1-q5",
            "type": "audio_listen",
            "phrase": "Mo fẹ́ ra iṣu mẹ́ta",
            "prompt": "Listen to the customer's request. What do they want to buy?",
            "options": [
              "I want to buy three yams",
              "I want to sell five fishes",
              "Give me a cup of rice",
              "Where is the yam seller?"
            ],
            "correctAnswer": "I want to buy three yams",
            "explanation": "'Iṣu mẹ́ta' = three yams; 'Mo fẹ́ ra' = I want to buy."
          },
          {
            "id": "y-u8-l1-q6",
            "type": "multiple_choice",
            "prompt": "What was the pre-colonial currency shell used in Yoruba markets called?",
            "options": [
              "Owó ẹyọ (Cowries)",
              "Owó fadaka",
              "Kọ́bọ̀",
              "Naira"
            ],
            "correctAnswer": "Owó ẹyọ (Cowries)",
            "explanation": "'Owó ẹyọ' (cowry shells) was the historical currency of commerce in Yorubaland."
          },
          {
            "id": "y-u8-l1-q7",
            "type": "matching",
            "prompt": "Match market condiments and ingredients in Yoruba:",
            "pairs": [
              {
                "native": "Epo pupa",
                "english": "Red palm oil",
                "left": "Epo pupa",
                "right": "Red palm oil"
              },
              {
                "native": "Ata",
                "english": "Pepper",
                "left": "Ata",
                "right": "Pepper"
              },
              {
                "native": "Àlùbọ́sà",
                "english": "Onion",
                "left": "Àlùbọ́sà",
                "right": "Àlùbọ́sà"
              },
              {
                "native": "Iyọ̀",
                "english": "Salt",
                "left": "Iyọ̀",
                "right": "Salt"
              }
            ]
          },
          {
            "id": "y-u8-l1-q8",
            "type": "fill_blank",
            "sentence": "The Yoruba word for 'Money' is '___'.",
            "missingWord": "Owó",
            "options": [
              "Owó",
              "Ọjà",
              "Ọ̀rọ̀",
              "Oúnjẹ"
            ],
            "correctAnswer": "Owó",
            "explanation": "'Owó' means money."
          },
          {
            "id": "y-u8-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọjà kún fún ènìyàn' (The market is full of people):",
            "tokens": [
              "Ọjà",
              "kún",
              "fún",
              "ènìyàn"
            ],
            "correctTokens": [
              "Ọjà",
              "kún",
              "fún",
              "ènìyàn"
            ]
          },
          {
            "id": "y-u8-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Oníbàárà' mean in market commerce?",
            "options": [
              "Customer / Client",
              "Shopkeeper",
              "Market security",
              "Porter"
            ],
            "correctAnswer": "Customer / Client",
            "explanation": "'Oníbàárà' is the customer or client."
          },
          {
            "id": "y-u8-l1-q11",
            "type": "audio_listen",
            "phrase": "Fún mi ní owó orí mi",
            "prompt": "Listen to the customer. What are they demanding?",
            "options": [
              "Give me my balance / change",
              "Bring more meat",
              "Pack my goods",
              "Take your money"
            ],
            "correctAnswer": "Give me my balance / change",
            "explanation": "'Owó orí' (or owó èlédà / owó tó kù) refers to change or balance from a transaction."
          },
          {
            "id": "y-u8-l1-q12",
            "type": "matching",
            "prompt": "Match commercial roles and actions in Yoruba:",
            "pairs": [
              {
                "native": "Rà",
                "english": "To buy / purchase",
                "left": "Rà",
                "right": "To buy / purchase"
              },
              {
                "native": "Tà",
                "english": "To sell",
                "left": "Tà",
                "right": "To sell"
              },
              {
                "native": "Sanwó",
                "english": "To pay money",
                "left": "Sanwó",
                "right": "To pay money"
              },
              {
                "native": "Èrè",
                "english": "Profit / Gain",
                "left": "Èrè",
                "right": "Èrè"
              }
            ]
          },
          {
            "id": "y-u8-l1-q13",
            "type": "fill_blank",
            "sentence": "When an item is very cheap, you say: 'Ó rọrùn' or 'Ó ___ púpọ̀'.",
            "missingWord": "pọ̀ / pọ́nkú",
            "options": [
              "pọ̀",
              "wọ́n",
              "dúdú",
              "tóbi"
            ],
            "correctAnswer": "pọ̀",
            "explanation": "'Owó rẹ̀ pọ̀' or 'kò wọ́n' means it is inexpensive."
          },
          {
            "id": "y-u8-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Màá fún ọ ní ẹgbẹ̀rún kan Naira' (I will give you one thousand Naira):",
            "tokens": [
              "Màá",
              "fún",
              "ọ",
              "ní",
              "ẹgbẹ̀rún",
              "kan",
              "Naira"
            ],
            "correctTokens": [
              "Màá",
              "fún",
              "ọ",
              "ní",
              "ẹgbẹ̀rún",
              "kan",
              "Naira"
            ]
          },
          {
            "id": "y-u8-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Èló ni wàá tà á?'",
            "options": [
              "How much will you sell it for?",
              "Where did you buy it?",
              "Who sold this to you?",
              "When did you bring it?"
            ],
            "correctAnswer": "How much will you sell it for?",
            "explanation": "'Èló ni wàá tà á?' means 'How much will you sell it for?'."
          },
          {
            "id": "y-u8-l1-q16",
            "type": "audio_listen",
            "phrase": "Ẹgbẹ̀rún kan Naira",
            "prompt": "Listen to the amount. How much is 'Ẹgbẹ̀rún kan Naira'?",
            "options": [
              "1,000 Naira",
              "100 Naira",
              "10,000 Naira",
              "500 Naira"
            ],
            "correctAnswer": "1,000 Naira",
            "explanation": "'Ẹgbẹ̀rún kan' = one thousand (1,000)."
          },
          {
            "id": "y-u8-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Gbèsè' mean in commercial life?",
            "options": [
              "Debt / Financial liability",
              "Huge profit",
              "Free gift",
              "Stolen goods"
            ],
            "correctAnswer": "Debt / Financial liability",
            "explanation": "'Gbèsè' means debt."
          },
          {
            "id": "y-u8-l1-q18",
            "type": "fill_blank",
            "sentence": "Five hundred Naira in Yoruba is 'Ọ̀ọ́dúnrún' or 'Ọgọ́rùn-ún ___ Naira'.",
            "missingWord": "márùn-ún",
            "options": [
              "márùn-ún",
              "méjì",
              "mẹ́rin",
              "mẹ́ta"
            ],
            "correctAnswer": "márùn-ún",
            "explanation": "'Ọgọ́rùn-ún márùn-ún' = 100 × 5 = 500 Naira."
          },
          {
            "id": "y-u8-l1-q19",
            "type": "multiple_choice",
            "prompt": "If a merchant says 'Kò sí èrè ńbẹ̀', what are they claiming?",
            "options": [
              "There is no profit margin in this offered price",
              "I have no goods left",
              "I will close the shop",
              "I don't know you"
            ],
            "correctAnswer": "There is no profit margin in this offered price",
            "explanation": "'Èrè' = profit; 'Kò sí èrè ńbẹ̀' = There is no profit in that price."
          },
          {
            "id": "y-u8-l1-q20",
            "type": "matching",
            "prompt": "Match monetary figures in Yoruba:",
            "pairs": [
              {
                "native": "Ọgọ́rùn-ún",
                "english": "100",
                "left": "Ọgọ́rùn-ún",
                "right": "100"
              },
              {
                "native": "Ẹgbẹ̀rún",
                "english": "1,000",
                "left": "Ẹgbẹ̀rún",
                "right": "1,000"
              },
              {
                "native": "Àádọ́ta Naira",
                "english": "50 Naira",
                "left": "Àádọ́ta Naira",
                "right": "50 Naira"
              },
              {
                "native": "Mílíọ̀nù",
                "english": "Million",
                "left": "Mílíọ̀nù",
                "right": "Mílíọ̀nù"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u8-l1-q1",
        "type": "multiple_choice",
        "prompt": "How do you ask 'How much is it?' in a Yoruba marketplace?",
        "options": [
          "Èló ni?",
          "Báwo ni?",
          "Níbo ni?",
          "Ta ni?"
        ],
        "correctAnswer": "Èló ni?",
        "explanation": "'Èló ni?' (or 'Èló ni owó rẹ̀?') directly asks 'How much is it?'."
      },
      {
        "id": "y-u8-l1-q2",
        "type": "matching",
        "prompt": "Match common Yoruba market food items with English translations:",
        "pairs": [
          {
            "native": "Iṣu",
            "english": "Yam",
            "left": "Iṣu",
            "right": "Yam"
          },
          {
            "native": "Gàrí",
            "english": "Processed cassava flakes",
            "left": "Gàrí",
            "right": "Processed cassava flakes"
          },
          {
            "native": "Ẹran",
            "english": "Meat / Beef",
            "left": "Ẹran",
            "right": "Meat / Beef"
          },
          {
            "native": "Ẹja",
            "english": "Fish",
            "left": "Ẹja",
            "right": "Fish"
          }
        ]
      },
      {
        "id": "y-u8-l1-q3",
        "type": "fill_blank",
        "sentence": "When asking the seller to reduce the price, you say: 'Ẹ dákun, ẹ dín owó rẹ̀ ___' (Please reduce the price).",
        "missingWord": "kù",
        "options": [
          "kù",
          "pọ̀",
          "wá",
          "lọ"
        ],
        "correctAnswer": "kù",
        "explanation": "'Dín... kù' is the phrasal verb meaning reduce/discount."
      },
      {
        "id": "y-u8-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ó wọ́n jù' (It is too expensive):",
        "tokens": [
          "Ó",
          "wọ́n",
          "jù"
        ],
        "correctTokens": [
          "Ó",
          "wọ́n",
          "jù"
        ]
      },
      {
        "id": "y-u8-l1-q5",
        "type": "audio_listen",
        "phrase": "Mo fẹ́ ra iṣu mẹ́ta",
        "prompt": "Listen to the customer's request. What do they want to buy?",
        "options": [
          "I want to buy three yams",
          "I want to sell five fishes",
          "Give me a cup of rice",
          "Where is the yam seller?"
        ],
        "correctAnswer": "I want to buy three yams",
        "explanation": "'Iṣu mẹ́ta' = three yams; 'Mo fẹ́ ra' = I want to buy."
      },
      {
        "id": "y-u8-l1-q6",
        "type": "multiple_choice",
        "prompt": "What was the pre-colonial currency shell used in Yoruba markets called?",
        "options": [
          "Owó ẹyọ (Cowries)",
          "Owó fadaka",
          "Kọ́bọ̀",
          "Naira"
        ],
        "correctAnswer": "Owó ẹyọ (Cowries)",
        "explanation": "'Owó ẹyọ' (cowry shells) was the historical currency of commerce in Yorubaland."
      },
      {
        "id": "y-u8-l1-q7",
        "type": "matching",
        "prompt": "Match market condiments and ingredients in Yoruba:",
        "pairs": [
          {
            "native": "Epo pupa",
            "english": "Red palm oil",
            "left": "Epo pupa",
            "right": "Red palm oil"
          },
          {
            "native": "Ata",
            "english": "Pepper",
            "left": "Ata",
            "right": "Pepper"
          },
          {
            "native": "Àlùbọ́sà",
            "english": "Onion",
            "left": "Àlùbọ́sà",
            "right": "Àlùbọ́sà"
          },
          {
            "native": "Iyọ̀",
            "english": "Salt",
            "left": "Iyọ̀",
            "right": "Salt"
          }
        ]
      },
      {
        "id": "y-u8-l1-q8",
        "type": "fill_blank",
        "sentence": "The Yoruba word for 'Money' is '___'.",
        "missingWord": "Owó",
        "options": [
          "Owó",
          "Ọjà",
          "Ọ̀rọ̀",
          "Oúnjẹ"
        ],
        "correctAnswer": "Owó",
        "explanation": "'Owó' means money."
      },
      {
        "id": "y-u8-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọjà kún fún ènìyàn' (The market is full of people):",
        "tokens": [
          "Ọjà",
          "kún",
          "fún",
          "ènìyàn"
        ],
        "correctTokens": [
          "Ọjà",
          "kún",
          "fún",
          "ènìyàn"
        ]
      },
      {
        "id": "y-u8-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Oníbàárà' mean in market commerce?",
        "options": [
          "Customer / Client",
          "Shopkeeper",
          "Market security",
          "Porter"
        ],
        "correctAnswer": "Customer / Client",
        "explanation": "'Oníbàárà' is the customer or client."
      },
      {
        "id": "y-u8-l1-q11",
        "type": "audio_listen",
        "phrase": "Fún mi ní owó orí mi",
        "prompt": "Listen to the customer. What are they demanding?",
        "options": [
          "Give me my balance / change",
          "Bring more meat",
          "Pack my goods",
          "Take your money"
        ],
        "correctAnswer": "Give me my balance / change",
        "explanation": "'Owó orí' (or owó èlédà / owó tó kù) refers to change or balance from a transaction."
      },
      {
        "id": "y-u8-l1-q12",
        "type": "matching",
        "prompt": "Match commercial roles and actions in Yoruba:",
        "pairs": [
          {
            "native": "Rà",
            "english": "To buy / purchase",
            "left": "Rà",
            "right": "To buy / purchase"
          },
          {
            "native": "Tà",
            "english": "To sell",
            "left": "Tà",
            "right": "To sell"
          },
          {
            "native": "Sanwó",
            "english": "To pay money",
            "left": "Sanwó",
            "right": "To pay money"
          },
          {
            "native": "Èrè",
            "english": "Profit / Gain",
            "left": "Èrè",
            "right": "Èrè"
          }
        ]
      },
      {
        "id": "y-u8-l1-q13",
        "type": "fill_blank",
        "sentence": "When an item is very cheap, you say: 'Ó rọrùn' or 'Ó ___ púpọ̀'.",
        "missingWord": "pọ̀ / pọ́nkú",
        "options": [
          "pọ̀",
          "wọ́n",
          "dúdú",
          "tóbi"
        ],
        "correctAnswer": "pọ̀",
        "explanation": "'Owó rẹ̀ pọ̀' or 'kò wọ́n' means it is inexpensive."
      },
      {
        "id": "y-u8-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Màá fún ọ ní ẹgbẹ̀rún kan Naira' (I will give you one thousand Naira):",
        "tokens": [
          "Màá",
          "fún",
          "ọ",
          "ní",
          "ẹgbẹ̀rún",
          "kan",
          "Naira"
        ],
        "correctTokens": [
          "Màá",
          "fún",
          "ọ",
          "ní",
          "ẹgbẹ̀rún",
          "kan",
          "Naira"
        ]
      },
      {
        "id": "y-u8-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Èló ni wàá tà á?'",
        "options": [
          "How much will you sell it for?",
          "Where did you buy it?",
          "Who sold this to you?",
          "When did you bring it?"
        ],
        "correctAnswer": "How much will you sell it for?",
        "explanation": "'Èló ni wàá tà á?' means 'How much will you sell it for?'."
      },
      {
        "id": "y-u8-l1-q16",
        "type": "audio_listen",
        "phrase": "Ẹgbẹ̀rún kan Naira",
        "prompt": "Listen to the amount. How much is 'Ẹgbẹ̀rún kan Naira'?",
        "options": [
          "1,000 Naira",
          "100 Naira",
          "10,000 Naira",
          "500 Naira"
        ],
        "correctAnswer": "1,000 Naira",
        "explanation": "'Ẹgbẹ̀rún kan' = one thousand (1,000)."
      },
      {
        "id": "y-u8-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Gbèsè' mean in commercial life?",
        "options": [
          "Debt / Financial liability",
          "Huge profit",
          "Free gift",
          "Stolen goods"
        ],
        "correctAnswer": "Debt / Financial liability",
        "explanation": "'Gbèsè' means debt."
      },
      {
        "id": "y-u8-l1-q18",
        "type": "fill_blank",
        "sentence": "Five hundred Naira in Yoruba is 'Ọ̀ọ́dúnrún' or 'Ọgọ́rùn-ún ___ Naira'.",
        "missingWord": "márùn-ún",
        "options": [
          "márùn-ún",
          "méjì",
          "mẹ́rin",
          "mẹ́ta"
        ],
        "correctAnswer": "márùn-ún",
        "explanation": "'Ọgọ́rùn-ún márùn-ún' = 100 × 5 = 500 Naira."
      },
      {
        "id": "y-u8-l1-q19",
        "type": "multiple_choice",
        "prompt": "If a merchant says 'Kò sí èrè ńbẹ̀', what are they claiming?",
        "options": [
          "There is no profit margin in this offered price",
          "I have no goods left",
          "I will close the shop",
          "I don't know you"
        ],
        "correctAnswer": "There is no profit margin in this offered price",
        "explanation": "'Èrè' = profit; 'Kò sí èrè ńbẹ̀' = There is no profit in that price."
      },
      {
        "id": "y-u8-l1-q20",
        "type": "matching",
        "prompt": "Match monetary figures in Yoruba:",
        "pairs": [
          {
            "native": "Ọgọ́rùn-ún",
            "english": "100",
            "left": "Ọgọ́rùn-ún",
            "right": "100"
          },
          {
            "native": "Ẹgbẹ̀rún",
            "english": "1,000",
            "left": "Ẹgbẹ̀rún",
            "right": "1,000"
          },
          {
            "native": "Àádọ́ta Naira",
            "english": "50 Naira",
            "left": "Àádọ́ta Naira",
            "right": "50 Naira"
          },
          {
            "native": "Mílíọ̀nù",
            "english": "Million",
            "left": "Mílíọ̀nù",
            "right": "Mílíọ̀nù"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-9",
    "unitId": "y-unit-9",
    "unitNumber": 9,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 9: Tenses and Aspect Markers (Àwọn Àsìkò Ìṣẹ̀lẹ̀)",
    "subtitle": "Past (ti), continuous (ń), future (yóò / á), negatives (kò, kì í, má), and conjunctions (àti, ṣùgbọ́n, nítorí).",
    "icon": "Clock",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "y-u9-l1",
        "title": "Lesson 1: Àsìkò Ìṣẹ̀lẹ̀, Ọ̀rọ̀-Àsopọ̀ àti Ìbámu (Tenses, Negation & Conjunctions)",
        "description": "Master past perfective marker (ti), progressive aspect (ń), future tense (yóò / màá), negatives (kò, kì í), and connectors.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u9-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which particle indicates completed / perfective action ('has done / already') in Yoruba?",
            "options": [
              "Ti",
              "Ń",
              "Yóò",
              "Kò"
            ],
            "correctAnswer": "Ti",
            "explanation": "'Ti' indicates completed past/perfective aspect (e.g. 'Mo ti jẹun' = I have eaten)."
          },
          {
            "id": "y-u9-l1-q2",
            "type": "matching",
            "prompt": "Match Yoruba aspect markers with English grammatical functions:",
            "pairs": [
              {
                "native": "Ti (Mo ti lọ)",
                "english": "Perfective past: I have gone",
                "left": "Ti (Mo ti lọ)",
                "right": "Perfective past: I have gone"
              },
              {
                "native": "Ń (Mo ń lọ)",
                "english": "Present progressive: I am going",
                "left": "Ń (Mo ń lọ)",
                "right": "Present progressive: I am going"
              },
              {
                "native": "Yóò / Á (Mo yóò lọ)",
                "english": "Future: I will go",
                "left": "Yóò / Á (Mo yóò lọ)",
                "right": "Future: I will go"
              },
              {
                "native": "Kò (Kò lọ)",
                "english": "Negative: Did not go / Does not go",
                "left": "Kò (Kò lọ)",
                "right": "Negative: Did not go / Does not go"
              }
            ]
          },
          {
            "id": "y-u9-l1-q3",
            "type": "fill_blank",
            "sentence": "To express the future ('We will go tomorrow'), Yoruba uses 'yóò': 'A ___ lọ lọ́la'.",
            "missingWord": "yóò",
            "options": [
              "yóò",
              "ti",
              "ń",
              "kò"
            ],
            "correctAnswer": "yóò",
            "explanation": "'Yóò' marks future tense: 'A yóò lọ lọ́la' = We will go tomorrow."
          },
          {
            "id": "y-u9-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Wọ́n ti dé sí ilé' (They have arrived home):",
            "tokens": [
              "Wọ́n",
              "ti",
              "dé",
              "sí",
              "ilé"
            ],
            "correctTokens": [
              "Wọ́n",
              "ti",
              "dé",
              "sí",
              "ilé"
            ]
          },
          {
            "id": "y-u9-l1-q5",
            "type": "audio_listen",
            "phrase": "Mo ń kàwé ṣùgbọ́n arákùnrin mi ń sùn",
            "prompt": "Listen to the complex statement. What does the conjunction 'ṣùgbọ́n' express?",
            "options": [
              "Contrast / 'But'",
              "Addition / 'And'",
              "Reason / 'Because'",
              "Condition / 'If'"
            ],
            "correctAnswer": "Contrast / 'But'",
            "explanation": "'Ṣùgbọ́n' means 'but' and introduces a contrasting clause."
          },
          {
            "id": "y-u9-l1-q6",
            "type": "multiple_choice",
            "prompt": "Which conjunction means 'because / since' in Yoruba?",
            "options": [
              "Nítorí / Nítorí pé",
              "Ṣùgbọ́n",
              "Àti",
              "Kí tó"
            ],
            "correctAnswer": "Nítorí / Nítorí pé",
            "explanation": "'Nítorí pé' means 'because' or 'for the reason that'."
          },
          {
            "id": "y-u9-l1-q7",
            "type": "matching",
            "prompt": "Match coordinating and subordinating conjunctions in Yoruba:",
            "pairs": [
              {
                "native": "Àti",
                "english": "And (joining nouns/phrases)",
                "left": "Àti",
                "right": "And (joining nouns/phrases)"
              },
              {
                "native": "Ṣùgbọ́n",
                "english": "But / However",
                "left": "Ṣùgbọ́n",
                "right": "But / However"
              },
              {
                "native": "Nítorí pé",
                "english": "Because / Since",
                "left": "Nítorí pé",
                "right": "Because / Since"
              },
              {
                "native": "Kí tó",
                "english": "Before",
                "left": "Kí tó",
                "right": "Before"
              }
            ]
          },
          {
            "id": "y-u9-l1-q8",
            "type": "fill_blank",
            "sentence": "The negative marker used to negate past and present indicative statements is '___' ('Kò lọ' = He did not go).",
            "missingWord": "Kò",
            "options": [
              "Kò",
              "Má",
              "Ti",
              "Ń"
            ],
            "correctAnswer": "Kò",
            "explanation": "'Kò' negates indicative statements: 'Kò wá' = He did not come."
          },
          {
            "id": "y-u9-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Màá wá sí ilé rẹ lọ́la' (I will come to your house tomorrow):",
            "tokens": [
              "Màá",
              "wá",
              "sí",
              "ilé",
              "rẹ",
              "lọ́la"
            ],
            "correctTokens": [
              "Màá",
              "wá",
              "sí",
              "ilé",
              "rẹ",
              "lọ́la"
            ]
          },
          {
            "id": "y-u9-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does the negative habitual marker 'kì í' mean in 'Kì í purọ́'?",
            "options": [
              "He/She does not customarily lie (Habitual negative)",
              "He lied yesterday",
              "He will lie tomorrow",
              "Stop lying right now"
            ],
            "correctAnswer": "He/She does not customarily lie (Habitual negative)",
            "explanation": "'Kì í' expresses habitual negation (does not habitually/customarily do)."
          },
          {
            "id": "y-u9-l1-q11",
            "type": "audio_listen",
            "phrase": "Kò sí ẹni tí kò mọ̀ ọ́",
            "prompt": "Listen to the negative relative statement. What does it mean?",
            "options": [
              "There is no one who does not know him/her (Everyone knows him/her)",
              "Nobody knows where he went",
              "He knows nobody in this town",
              "We do not know the answer"
            ],
            "correctAnswer": "There is no one who does not know him/her (Everyone knows him/her)",
            "explanation": "'Kò sí ẹni tí...' = There is no person that does not know him/her."
          },
          {
            "id": "y-u9-l1-q12",
            "type": "matching",
            "prompt": "Match negative particles in Yoruba:",
            "pairs": [
              {
                "native": "Kò",
                "english": "General indicative negation (did not / does not)",
                "left": "Kò",
                "right": "General indicative negation (did not / does not)"
              },
              {
                "native": "Kì í",
                "english": "Habitual negation (does not usually)",
                "left": "Kì í",
                "right": "Habitual negation (does not usually)"
              },
              {
                "native": "Má",
                "english": "Negative imperative (Do not!)",
                "left": "Má",
                "right": "Negative imperative (Do not!)"
              },
              {
                "native": "Kọ́",
                "english": "Nominal negation (It is not / Not this)",
                "left": "Kọ́",
                "right": "Nominal negation (It is not / Not this)"
              }
            ]
          },
          {
            "id": "y-u9-l1-q13",
            "type": "fill_blank",
            "sentence": "To say 'After we ate, we slept', Yoruba uses: '___ tí a jẹun tán, a sùn'.",
            "missingWord": "Lẹ́yìn",
            "options": [
              "Lẹ́yìn",
              "Kí",
              "Nítorí",
              "Ṣùgbọ́n"
            ],
            "correctAnswer": "Lẹ́yìn",
            "explanation": "'Lẹ́yìn tí...' means 'After...'."
          },
          {
            "id": "y-u9-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọ̀rọ̀ yìí kì í ṣe irọ́' (This matter is not a lie):",
            "tokens": [
              "Ọ̀rọ̀",
              "yìí",
              "kì",
              "í",
              "ṣe",
              "irọ́"
            ],
            "correctTokens": [
              "Ọ̀rọ̀",
              "yìí",
              "kì",
              "í",
              "ṣe",
              "irọ́"
            ]
          },
          {
            "id": "y-u9-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is the meaning of 'Títí di ìsinsìnyí'?",
            "options": [
              "Until now / Up to this present moment",
              "Long ago",
              "Tomorrow morning",
              "Never again"
            ],
            "correctAnswer": "Until now / Up to this present moment",
            "explanation": "'Títí di ìsinsìnyí' means 'until now / up to the present'."
          },
          {
            "id": "y-u9-l1-q16",
            "type": "audio_listen",
            "phrase": "Nígbà tí a dé ọjà, ó ti ti ilẹ̀kùn",
            "prompt": "Listen to the narrative sequence. What happened when we reached the market?",
            "options": [
              "When we arrived at the market, he had already shut the door",
              "Before we went to market, it rained",
              "The market was open all night",
              "We could not find the market"
            ],
            "correctAnswer": "When we arrived at the market, he had already shut the door",
            "explanation": "'Nígbà tí a dé...' = When we arrived; 'ó ti ti...' = he had already shut."
          },
          {
            "id": "y-u9-l1-q17",
            "type": "multiple_choice",
            "prompt": "How is 'I will learn' contracted casually from 'Èmi yóò kọ́'?",
            "options": [
              "Màá kọ́",
              "Mo ti kọ́",
              "Mo ń kọ́",
              "Kò kọ́"
            ],
            "correctAnswer": "Màá kọ́",
            "explanation": "'Èmi yóò' colloquially contracts into 'Màá' ('Màá kọ́' = I will learn)."
          },
          {
            "id": "y-u9-l1-q18",
            "type": "fill_blank",
            "sentence": "When joining two clauses with 'and', Yoruba uses 'sì': 'Ó wá ___ ó jẹun' (He came AND he ate).",
            "missingWord": "ó",
            "options": [
              "ó",
              "ti",
              "kò",
              "má"
            ],
            "correctAnswer": "ó",
            "explanation": "'Ó sì...' connects two verbal clauses meaning 'and he/she...'."
          },
          {
            "id": "y-u9-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Bí ó tilẹ̀ jẹ́ pé' introduce in complex sentences?",
            "options": [
              "Concession (Even though / Although)",
              "Reason (Because)",
              "Time (Before)",
              "Place (Where)"
            ],
            "correctAnswer": "Concession (Even though / Although)",
            "explanation": "'Bí ó tilẹ̀ jẹ́ pé' means 'Even though / Although'."
          },
          {
            "id": "y-u9-l1-q20",
            "type": "matching",
            "prompt": "Match temporal connectors with English definitions:",
            "pairs": [
              {
                "native": "Lẹ́yìn náà",
                "english": "After that / Afterwards",
                "left": "Lẹ́yìn náà",
                "right": "After that / Afterwards"
              },
              {
                "native": "Nígbà tí",
                "english": "When / While",
                "left": "Nígbà tí",
                "right": "When / While"
              },
              {
                "native": "Kí ó tó di pé",
                "english": "Before that time / Prior to",
                "left": "Kí ó tó di pé",
                "right": "Before that time / Prior to"
              },
              {
                "native": "Nígbẹ̀yìn-gbẹ́yín",
                "english": "Eventually / In the long run",
                "left": "Nígbẹ̀yìn-gbẹ́yín",
                "right": "Eventually / In the long run"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u9-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which particle indicates completed / perfective action ('has done / already') in Yoruba?",
        "options": [
          "Ti",
          "Ń",
          "Yóò",
          "Kò"
        ],
        "correctAnswer": "Ti",
        "explanation": "'Ti' indicates completed past/perfective aspect (e.g. 'Mo ti jẹun' = I have eaten)."
      },
      {
        "id": "y-u9-l1-q2",
        "type": "matching",
        "prompt": "Match Yoruba aspect markers with English grammatical functions:",
        "pairs": [
          {
            "native": "Ti (Mo ti lọ)",
            "english": "Perfective past: I have gone",
            "left": "Ti (Mo ti lọ)",
            "right": "Perfective past: I have gone"
          },
          {
            "native": "Ń (Mo ń lọ)",
            "english": "Present progressive: I am going",
            "left": "Ń (Mo ń lọ)",
            "right": "Present progressive: I am going"
          },
          {
            "native": "Yóò / Á (Mo yóò lọ)",
            "english": "Future: I will go",
            "left": "Yóò / Á (Mo yóò lọ)",
            "right": "Future: I will go"
          },
          {
            "native": "Kò (Kò lọ)",
            "english": "Negative: Did not go / Does not go",
            "left": "Kò (Kò lọ)",
            "right": "Negative: Did not go / Does not go"
          }
        ]
      },
      {
        "id": "y-u9-l1-q3",
        "type": "fill_blank",
        "sentence": "To express the future ('We will go tomorrow'), Yoruba uses 'yóò': 'A ___ lọ lọ́la'.",
        "missingWord": "yóò",
        "options": [
          "yóò",
          "ti",
          "ń",
          "kò"
        ],
        "correctAnswer": "yóò",
        "explanation": "'Yóò' marks future tense: 'A yóò lọ lọ́la' = We will go tomorrow."
      },
      {
        "id": "y-u9-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Wọ́n ti dé sí ilé' (They have arrived home):",
        "tokens": [
          "Wọ́n",
          "ti",
          "dé",
          "sí",
          "ilé"
        ],
        "correctTokens": [
          "Wọ́n",
          "ti",
          "dé",
          "sí",
          "ilé"
        ]
      },
      {
        "id": "y-u9-l1-q5",
        "type": "audio_listen",
        "phrase": "Mo ń kàwé ṣùgbọ́n arákùnrin mi ń sùn",
        "prompt": "Listen to the complex statement. What does the conjunction 'ṣùgbọ́n' express?",
        "options": [
          "Contrast / 'But'",
          "Addition / 'And'",
          "Reason / 'Because'",
          "Condition / 'If'"
        ],
        "correctAnswer": "Contrast / 'But'",
        "explanation": "'Ṣùgbọ́n' means 'but' and introduces a contrasting clause."
      },
      {
        "id": "y-u9-l1-q6",
        "type": "multiple_choice",
        "prompt": "Which conjunction means 'because / since' in Yoruba?",
        "options": [
          "Nítorí / Nítorí pé",
          "Ṣùgbọ́n",
          "Àti",
          "Kí tó"
        ],
        "correctAnswer": "Nítorí / Nítorí pé",
        "explanation": "'Nítorí pé' means 'because' or 'for the reason that'."
      },
      {
        "id": "y-u9-l1-q7",
        "type": "matching",
        "prompt": "Match coordinating and subordinating conjunctions in Yoruba:",
        "pairs": [
          {
            "native": "Àti",
            "english": "And (joining nouns/phrases)",
            "left": "Àti",
            "right": "And (joining nouns/phrases)"
          },
          {
            "native": "Ṣùgbọ́n",
            "english": "But / However",
            "left": "Ṣùgbọ́n",
            "right": "But / However"
          },
          {
            "native": "Nítorí pé",
            "english": "Because / Since",
            "left": "Nítorí pé",
            "right": "Because / Since"
          },
          {
            "native": "Kí tó",
            "english": "Before",
            "left": "Kí tó",
            "right": "Before"
          }
        ]
      },
      {
        "id": "y-u9-l1-q8",
        "type": "fill_blank",
        "sentence": "The negative marker used to negate past and present indicative statements is '___' ('Kò lọ' = He did not go).",
        "missingWord": "Kò",
        "options": [
          "Kò",
          "Má",
          "Ti",
          "Ń"
        ],
        "correctAnswer": "Kò",
        "explanation": "'Kò' negates indicative statements: 'Kò wá' = He did not come."
      },
      {
        "id": "y-u9-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Màá wá sí ilé rẹ lọ́la' (I will come to your house tomorrow):",
        "tokens": [
          "Màá",
          "wá",
          "sí",
          "ilé",
          "rẹ",
          "lọ́la"
        ],
        "correctTokens": [
          "Màá",
          "wá",
          "sí",
          "ilé",
          "rẹ",
          "lọ́la"
        ]
      },
      {
        "id": "y-u9-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does the negative habitual marker 'kì í' mean in 'Kì í purọ́'?",
        "options": [
          "He/She does not customarily lie (Habitual negative)",
          "He lied yesterday",
          "He will lie tomorrow",
          "Stop lying right now"
        ],
        "correctAnswer": "He/She does not customarily lie (Habitual negative)",
        "explanation": "'Kì í' expresses habitual negation (does not habitually/customarily do)."
      },
      {
        "id": "y-u9-l1-q11",
        "type": "audio_listen",
        "phrase": "Kò sí ẹni tí kò mọ̀ ọ́",
        "prompt": "Listen to the negative relative statement. What does it mean?",
        "options": [
          "There is no one who does not know him/her (Everyone knows him/her)",
          "Nobody knows where he went",
          "He knows nobody in this town",
          "We do not know the answer"
        ],
        "correctAnswer": "There is no one who does not know him/her (Everyone knows him/her)",
        "explanation": "'Kò sí ẹni tí...' = There is no person that does not know him/her."
      },
      {
        "id": "y-u9-l1-q12",
        "type": "matching",
        "prompt": "Match negative particles in Yoruba:",
        "pairs": [
          {
            "native": "Kò",
            "english": "General indicative negation (did not / does not)",
            "left": "Kò",
            "right": "General indicative negation (did not / does not)"
          },
          {
            "native": "Kì í",
            "english": "Habitual negation (does not usually)",
            "left": "Kì í",
            "right": "Habitual negation (does not usually)"
          },
          {
            "native": "Má",
            "english": "Negative imperative (Do not!)",
            "left": "Má",
            "right": "Negative imperative (Do not!)"
          },
          {
            "native": "Kọ́",
            "english": "Nominal negation (It is not / Not this)",
            "left": "Kọ́",
            "right": "Nominal negation (It is not / Not this)"
          }
        ]
      },
      {
        "id": "y-u9-l1-q13",
        "type": "fill_blank",
        "sentence": "To say 'After we ate, we slept', Yoruba uses: '___ tí a jẹun tán, a sùn'.",
        "missingWord": "Lẹ́yìn",
        "options": [
          "Lẹ́yìn",
          "Kí",
          "Nítorí",
          "Ṣùgbọ́n"
        ],
        "correctAnswer": "Lẹ́yìn",
        "explanation": "'Lẹ́yìn tí...' means 'After...'."
      },
      {
        "id": "y-u9-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọ̀rọ̀ yìí kì í ṣe irọ́' (This matter is not a lie):",
        "tokens": [
          "Ọ̀rọ̀",
          "yìí",
          "kì",
          "í",
          "ṣe",
          "irọ́"
        ],
        "correctTokens": [
          "Ọ̀rọ̀",
          "yìí",
          "kì",
          "í",
          "ṣe",
          "irọ́"
        ]
      },
      {
        "id": "y-u9-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is the meaning of 'Títí di ìsinsìnyí'?",
        "options": [
          "Until now / Up to this present moment",
          "Long ago",
          "Tomorrow morning",
          "Never again"
        ],
        "correctAnswer": "Until now / Up to this present moment",
        "explanation": "'Títí di ìsinsìnyí' means 'until now / up to the present'."
      },
      {
        "id": "y-u9-l1-q16",
        "type": "audio_listen",
        "phrase": "Nígbà tí a dé ọjà, ó ti ti ilẹ̀kùn",
        "prompt": "Listen to the narrative sequence. What happened when we reached the market?",
        "options": [
          "When we arrived at the market, he had already shut the door",
          "Before we went to market, it rained",
          "The market was open all night",
          "We could not find the market"
        ],
        "correctAnswer": "When we arrived at the market, he had already shut the door",
        "explanation": "'Nígbà tí a dé...' = When we arrived; 'ó ti ti...' = he had already shut."
      },
      {
        "id": "y-u9-l1-q17",
        "type": "multiple_choice",
        "prompt": "How is 'I will learn' contracted casually from 'Èmi yóò kọ́'?",
        "options": [
          "Màá kọ́",
          "Mo ti kọ́",
          "Mo ń kọ́",
          "Kò kọ́"
        ],
        "correctAnswer": "Màá kọ́",
        "explanation": "'Èmi yóò' colloquially contracts into 'Màá' ('Màá kọ́' = I will learn)."
      },
      {
        "id": "y-u9-l1-q18",
        "type": "fill_blank",
        "sentence": "When joining two clauses with 'and', Yoruba uses 'sì': 'Ó wá ___ ó jẹun' (He came AND he ate).",
        "missingWord": "ó",
        "options": [
          "ó",
          "ti",
          "kò",
          "má"
        ],
        "correctAnswer": "ó",
        "explanation": "'Ó sì...' connects two verbal clauses meaning 'and he/she...'."
      },
      {
        "id": "y-u9-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Bí ó tilẹ̀ jẹ́ pé' introduce in complex sentences?",
        "options": [
          "Concession (Even though / Although)",
          "Reason (Because)",
          "Time (Before)",
          "Place (Where)"
        ],
        "correctAnswer": "Concession (Even though / Although)",
        "explanation": "'Bí ó tilẹ̀ jẹ́ pé' means 'Even though / Although'."
      },
      {
        "id": "y-u9-l1-q20",
        "type": "matching",
        "prompt": "Match temporal connectors with English definitions:",
        "pairs": [
          {
            "native": "Lẹ́yìn náà",
            "english": "After that / Afterwards",
            "left": "Lẹ́yìn náà",
            "right": "After that / Afterwards"
          },
          {
            "native": "Nígbà tí",
            "english": "When / While",
            "left": "Nígbà tí",
            "right": "When / While"
          },
          {
            "native": "Kí ó tó di pé",
            "english": "Before that time / Prior to",
            "left": "Kí ó tó di pé",
            "right": "Before that time / Prior to"
          },
          {
            "native": "Nígbẹ̀yìn-gbẹ́yín",
            "english": "Eventually / In the long run",
            "left": "Nígbẹ̀yìn-gbẹ́yín",
            "right": "Eventually / In the long run"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-10",
    "unitId": "y-unit-10",
    "unitNumber": 10,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 10: Folktales and Riddles (Àlọ́ Àpagbè àti Àlọ́ Àpamọ̀)",
    "subtitle": "Riddles (Àlọ́ àpamọ̀), story songs (Àlọ́ àpagbè), Ìjàpá the trickster tortoise tales, and moral lessons.",
    "icon": "Feather",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "y-u10-l1",
        "title": "Lesson 1: Àlọ́ Ní Ilẹ̀ Yorùbá, Ìtàn Ìjàpá àti Àpamọ̀ (Folktales & Riddles)",
        "description": "Explore indigenous storytelling formulas (Àlọ́ o! - Ààlọ̀!), moral fables starring Ìjàpá the tortoise, riddle wit, and ethical philosophy.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u10-l1-q1",
            "type": "multiple_choice",
            "prompt": "Who is the legendary trickster tortoise character in Yoruba folktales (Àlọ́)?",
            "options": [
              "Ìjàpá (Ìjàpá Tiróko)",
              "Kìnìún (Lion)",
              "Ẹkùn (Leopard)",
              "Àdán (Bat)"
            ],
            "correctAnswer": "Ìjàpá (Ìjàpá Tiróko)",
            "explanation": "Ìjàpá (Ìjàpá Tiróko, ọkọ Yánníbo) is the cunning, sly trickster tortoise central to Yoruba oral fables."
          },
          {
            "id": "y-u10-l1-q2",
            "type": "matching",
            "prompt": "Match characters in Yoruba folklore with their attributes:",
            "pairs": [
              {
                "native": "Ìjàpá",
                "english": "Cunning, gluttonous trickster tortoise",
                "left": "Ìjàpá",
                "right": "Cunning, gluttonous trickster tortoise"
              },
              {
                "native": "Yánníbo",
                "english": "Ìjàpá's clever and patient wife",
                "left": "Yánníbo",
                "right": "Ìjàpá's clever and patient wife"
              },
              {
                "native": "Kìnìún",
                "english": "King of the jungle (Lion)",
                "left": "Kìnìún",
                "right": "King of the jungle (Lion)"
              },
              {
                "native": "Erin / Àjànàkú",
                "english": "Mighty elephant of immense strength",
                "left": "Erin / Àjànàkú",
                "right": "Mighty elephant of immense strength"
              }
            ]
          },
          {
            "id": "y-u10-l1-q3",
            "type": "fill_blank",
            "sentence": "When the storyteller calls 'Àlọ́ o!', the gathered audience responds in chorus: '___!'.",
            "missingWord": "Ààlọ̀",
            "options": [
              "Ààlọ̀",
              "O dábọ̀",
              "Ẹ kú iṣẹ́",
              "Àṣẹ"
            ],
            "correctAnswer": "Ààlọ̀",
            "explanation": "The ritual storytelling opening is 'Àlọ́ o!' -> 'Ààlọ̀!'."
          },
          {
            "id": "y-u10-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the famous proverb: 'Òwe lẹṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sọnù, òwe la fi ń wá a' (Proverbs are the horse of speech; when speech is lost, proverbs are used to find it):",
            "tokens": [
              "Òwe",
              "lẹṣin",
              "ọ̀rọ̀,",
              "bí",
              "ọ̀rọ̀",
              "bá",
              "sọnù,",
              "òwe",
              "la",
              "fi",
              "ń",
              "wá",
              "a"
            ],
            "correctTokens": [
              "Òwe",
              "lẹṣin",
              "ọ̀rọ̀,",
              "bí",
              "ọ̀rọ̀",
              "bá",
              "sọnù,",
              "òwe",
              "la",
              "fi",
              "ń",
              "wá",
              "a"
            ]
          },
          {
            "id": "y-u10-l1-q5",
            "type": "audio_listen",
            "phrase": "Àgbájọ ọwọ́ la fi ń sọ̀yà",
            "prompt": "Listen to the famous proverb. What virtue does it praise?",
            "options": [
              "Unity and collective strength (A single finger cannot lift a burden)",
              "Wealth is better than health",
              "Working alone is faster",
              "Farming during the dry season"
            ],
            "correctAnswer": "Unity and collective strength (A single finger cannot lift a burden)",
            "explanation": "'Àgbájọ ọwọ́ la fi ń sọ̀yà' means solidarity and bunching hands together gives power to strike the chest."
          },
          {
            "id": "y-u10-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is a riddle called in Yoruba literary traditions?",
            "options": [
              "Àlọ́ Àpamọ̀",
              "Àlọ́ Àpagbè",
              "Oríkì",
              "Ìjálá"
            ],
            "correctAnswer": "Àlọ́ Àpamọ̀",
            "explanation": "'Àlọ́ Àpamọ̀' is a riddle or guessing brainteaser; 'Àlọ́ Àpagbè' is a story with songs."
          },
          {
            "id": "y-u10-l1-q7",
            "type": "matching",
            "prompt": "Match profound Yoruba proverbs with English translations:",
            "pairs": [
              {
                "native": "Ilé l'à ń wò k'á tó sọmọ l'órúkọ",
                "english": "One considers family lineage and character before naming a child",
                "left": "Ilé l'à ń wò k'á tó sọmọ l'órúkọ",
                "right": "One considers family lineage and character before naming a child"
              },
              {
                "native": "Àìtètèmọ̀lẹ, olè ń mú olóko",
                "english": "Due to lack of early detection, the thief apprehends the real farm owner",
                "left": "Àìtètèmọ̀lẹ, olè ń mú olóko",
                "right": "Due to lack of early detection, the thief apprehends the real farm owner"
              },
              {
                "native": "Bí ẹ̀mí bá wà, ìrètí ń bẹ",
                "english": "As long as there is life, there is hope",
                "left": "Bí ẹ̀mí bá wà, ìrètí ń bẹ",
                "right": "Bí ẹ̀mí bá wà, ìrètí ń bẹ"
              },
              {
                "native": "A kì í fi iná sórí òrùlé sùn",
                "english": "One does not go to sleep with fire burning on the roof (Urgent action needed)",
                "left": "A kì í fi iná sórí òrùlé sùn",
                "right": "A kì í fi iná sórí òrùlé sùn"
              }
            ]
          },
          {
            "id": "y-u10-l1-q8",
            "type": "fill_blank",
            "sentence": "When opening a riddle, the speaker says: 'Àlọ́ o!', to which the listeners respond: '___!' before the riddle is posed.",
            "missingWord": "Ààlọ̀",
            "options": [
              "Ààlọ̀",
              "Gbà",
              "Ẹ kú iṣẹ́",
              "Ó dára"
            ],
            "correctAnswer": "Ààlọ̀",
            "explanation": "The formulaic riddle opening is 'Àlọ́ o!' -> 'Ààlọ̀!'."
          },
          {
            "id": "y-u10-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the riddle: 'Kí ni ń bẹ lẹ́gbẹ̀ẹ́ tẹ́ńpìlì tí a kò lè rí?' (What is beside the temple that we cannot see? — Ear/Etí):",
            "tokens": [
              "Kí",
              "ni",
              "ń",
              "bẹ",
              "lẹ́gbẹ̀ẹ́",
              "tẹ́ńpìlì",
              "tí",
              "a",
              "kò",
              "lè",
              "rí?"
            ],
            "correctTokens": [
              "Kí",
              "ni",
              "ń",
              "bẹ",
              "lẹ́gbẹ̀ẹ́",
              "tẹ́ńpìlì",
              "tí",
              "a",
              "kò",
              "lè",
              "rí?"
            ]
          },
          {
            "id": "y-u10-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the answer to the classic Yoruba riddle: 'Ọmọ kékeré kan tí ń kan ọba láyà' (A tiny child who beats against the king's chest)?",
            "options": [
              "Kùkùté (A small tree stump on the path)",
              "Ọmọ ọba",
              "Aṣọ",
              "Fìlà"
            ],
            "correctAnswer": "Kùkùté (A small tree stump on the path)",
            "explanation": "A tree stump (kùkùté) trips even the mightiest monarch without fear or reverence."
          },
          {
            "id": "y-u10-l1-q11",
            "type": "audio_listen",
            "phrase": "Ọ̀kánjúwà ènìyàn kì í rí èrè",
            "prompt": "Listen to the moral teaching. What flaw prevents a person from prospering?",
            "options": [
              "Greed / Inordinate covetousness (ọ̀kánjúwà)",
              "Laziness",
              "Excessive sleeping",
              "Speaking too much"
            ],
            "correctAnswer": "Greed / Inordinate covetousness (ọ̀kánjúwà)",
            "explanation": "'Ọ̀kánjúwà' (greed / unbridled avarice) is the tragic flaw highlighted in Ìjàpá tales."
          },
          {
            "id": "y-u10-l1-q12",
            "type": "matching",
            "prompt": "Match oral folklore categories in Yoruba culture:",
            "pairs": [
              {
                "native": "Àlọ́ Àpagbè",
                "english": "Folktale with communal chorus singing",
                "left": "Àlọ́ Àpagbè",
                "right": "Folktale with communal chorus singing"
              },
              {
                "native": "Àlọ́ Àpamọ̀",
                "english": "Riddle / Enigma to test wit and intellect",
                "left": "Àlọ́ Àpamọ̀",
                "right": "Riddle / Enigma to test wit and intellect"
              },
              {
                "native": "Ìtàn Àtẹnudẹ́nu",
                "english": "Oral historical legend transmitted across generations",
                "left": "Ìtàn Àtẹnudẹ́nu",
                "right": "Oral historical legend transmitted across generations"
              },
              {
                "native": "Òwe",
                "english": "Proverb / Philosophical maxim",
                "left": "Òwe",
                "right": "Proverb / Philosophical maxim"
              }
            ]
          },
          {
            "id": "y-u10-l1-q13",
            "type": "fill_blank",
            "sentence": "A folktale traditionally concludes with the formula: 'Ìdí àlọ́ mi rèé gbáñgbálákà, ìdí àlọ́ mi rèé ___'.",
            "missingWord": "gbàñgbàlàkà",
            "options": [
              "gbàñgbàlàkà",
              "ọba",
              "ìjàpá",
              "ilé"
            ],
            "correctAnswer": "gbàñgbàlàkà",
            "explanation": "The ritual concluding rhyme of Yoruba storytelling is '...gbáñgbálákà, ...gbàñgbàlàkà'."
          },
          {
            "id": "y-u10-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the proverb: 'Ọmọ tí a kò kọ́, ni yóò gbé ilé tí a kọ́ tà' (The child who is not educated/disciplined will sell the house that was built):",
            "tokens": [
              "Ọmọ",
              "tí",
              "a",
              "kò",
              "kọ́,",
              "ni",
              "yóò",
              "gbé",
              "ilé",
              "tí",
              "a",
              "kọ́",
              "tà"
            ],
            "correctTokens": [
              "Ọmọ",
              "tí",
              "a",
              "kò",
              "kọ́,",
              "ni",
              "yóò",
              "gbé",
              "ilé",
              "tí",
              "a",
              "kọ́",
              "tà"
            ]
          },
          {
            "id": "y-u10-l1-q15",
            "type": "multiple_choice",
            "prompt": "Why does Ìjàpá have a bald head in Yoruba mythology?",
            "options": [
              "He hid boiling hot yam porridge inside his cap to steal it, scalding his hair off",
              "He was born that way",
              "He shaved his head for chieftaincy",
              "He fell into cold water"
            ],
            "correctAnswer": "He hid boiling hot yam porridge inside his cap to steal it, scalding his hair off",
            "explanation": "In the famous fable, Ìjàpá hid stolen hot bean/yam paste in his cap; when caught, the boiling food scalded his head permanently."
          },
          {
            "id": "y-u10-l1-q16",
            "type": "audio_listen",
            "phrase": "Ẹni tí ó gbin ẹ̀bùrú, yóò kórè ibi",
            "prompt": "Listen to the moral proverb. What does it teach about cause and consequence?",
            "options": [
              "Whoever sows evil and deceit will inevitably reap calamity",
              "Farmers must plant yams in rainy season",
              "Hard work brings wealth",
              "Children must respect their elders"
            ],
            "correctAnswer": "Whoever sows evil and deceit will inevitably reap calamity",
            "explanation": "This proverb asserts moral karma: sowing wickedness produces a harvest of misfortune."
          },
          {
            "id": "y-u10-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is the answer to the riddle: 'Mo ní púpọ̀ nínú ilé mi, ṣùgbọ́n n kò lè kà wọ́n' (I have many in my house, but I cannot count them — Hair/Irun)?",
            "options": [
              "Irun orí (Hair on the head)",
              "Ènìyàn",
              "Ilẹ̀kùn",
              "Àga"
            ],
            "correctAnswer": "Irun orí (Hair on the head)",
            "explanation": "Irun orí (hair) is countless and covers the human head."
          },
          {
            "id": "y-u10-l1-q18",
            "type": "fill_blank",
            "sentence": "Complete the proverb: 'Àgbà kì í wà lọ́jà kí orí ọmọ tuntun ___'.",
            "missingWord": "wọ́",
            "options": [
              "wọ́",
              "sunkun",
              "sùn",
              "dúró"
            ],
            "correctAnswer": "wọ́",
            "explanation": "'Àgbà kì í wà lọ́jà k'órí ọmọ tuntun wọ́' (An elder does not stand in the market while a newborn's head dangles improperly) — elders must exercise responsibility."
          },
          {
            "id": "y-u10-l1-q19",
            "type": "multiple_choice",
            "prompt": "Why were folktales traditionally prohibited during the daytime in Yorubaland?",
            "options": [
              "To enforce daytime agricultural work and ensure communal fireside storytelling as nocturnal education",
              "Because tortoises sleep all day",
              "Because it was against royal law",
              "Because the moon only shines at night"
            ],
            "correctAnswer": "To enforce daytime agricultural work and ensure communal fireside storytelling as nocturnal education",
            "explanation": "Daytime folktales were discouraged to protect agrarian discipline and productivity."
          },
          {
            "id": "y-u10-l1-q20",
            "type": "matching",
            "prompt": "Match core moral values in Yoruba folklore:",
            "pairs": [
              {
                "native": "Sùúrù",
                "english": "Patience (Sùúrù baba ìwà: Patience is the father of character)",
                "left": "Sùúrù",
                "right": "Patience (Sùúrù baba ìwà: Patience is the father of character)"
              },
              {
                "native": "Ìfọwọ́sowọ́pọ̀",
                "english": "Cooperation and collective mutual assistance",
                "left": "Ìfọwọ́sowọ́pọ̀",
                "right": "Cooperation and collective mutual assistance"
              },
              {
                "native": "Ìtẹ́lọ́rùn",
                "english": "Contentment (freedom from greed and envy)",
                "left": "Ìtẹ́lọ́rùn",
                "right": "Contentment (freedom from greed and envy)"
              },
              {
                "native": "Ẹ̀kọ́ ilé",
                "english": "Home training, good breeding, and family honor",
                "left": "Ẹ̀kọ́ ilé",
                "right": "Home training, good breeding, and family honor"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u10-l1-q1",
        "type": "multiple_choice",
        "prompt": "Who is the legendary trickster tortoise character in Yoruba folktales (Àlọ́)?",
        "options": [
          "Ìjàpá (Ìjàpá Tiróko)",
          "Kìnìún (Lion)",
          "Ẹkùn (Leopard)",
          "Àdán (Bat)"
        ],
        "correctAnswer": "Ìjàpá (Ìjàpá Tiróko)",
        "explanation": "Ìjàpá (Ìjàpá Tiróko, ọkọ Yánníbo) is the cunning, sly trickster tortoise central to Yoruba oral fables."
      },
      {
        "id": "y-u10-l1-q2",
        "type": "matching",
        "prompt": "Match characters in Yoruba folklore with their attributes:",
        "pairs": [
          {
            "native": "Ìjàpá",
            "english": "Cunning, gluttonous trickster tortoise",
            "left": "Ìjàpá",
            "right": "Cunning, gluttonous trickster tortoise"
          },
          {
            "native": "Yánníbo",
            "english": "Ìjàpá's clever and patient wife",
            "left": "Yánníbo",
            "right": "Ìjàpá's clever and patient wife"
          },
          {
            "native": "Kìnìún",
            "english": "King of the jungle (Lion)",
            "left": "Kìnìún",
            "right": "King of the jungle (Lion)"
          },
          {
            "native": "Erin / Àjànàkú",
            "english": "Mighty elephant of immense strength",
            "left": "Erin / Àjànàkú",
            "right": "Mighty elephant of immense strength"
          }
        ]
      },
      {
        "id": "y-u10-l1-q3",
        "type": "fill_blank",
        "sentence": "When the storyteller calls 'Àlọ́ o!', the gathered audience responds in chorus: '___!'.",
        "missingWord": "Ààlọ̀",
        "options": [
          "Ààlọ̀",
          "O dábọ̀",
          "Ẹ kú iṣẹ́",
          "Àṣẹ"
        ],
        "correctAnswer": "Ààlọ̀",
        "explanation": "The ritual storytelling opening is 'Àlọ́ o!' -> 'Ààlọ̀!'."
      },
      {
        "id": "y-u10-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the famous proverb: 'Òwe lẹṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sọnù, òwe la fi ń wá a' (Proverbs are the horse of speech; when speech is lost, proverbs are used to find it):",
        "tokens": [
          "Òwe",
          "lẹṣin",
          "ọ̀rọ̀,",
          "bí",
          "ọ̀rọ̀",
          "bá",
          "sọnù,",
          "òwe",
          "la",
          "fi",
          "ń",
          "wá",
          "a"
        ],
        "correctTokens": [
          "Òwe",
          "lẹṣin",
          "ọ̀rọ̀,",
          "bí",
          "ọ̀rọ̀",
          "bá",
          "sọnù,",
          "òwe",
          "la",
          "fi",
          "ń",
          "wá",
          "a"
        ]
      },
      {
        "id": "y-u10-l1-q5",
        "type": "audio_listen",
        "phrase": "Àgbájọ ọwọ́ la fi ń sọ̀yà",
        "prompt": "Listen to the famous proverb. What virtue does it praise?",
        "options": [
          "Unity and collective strength (A single finger cannot lift a burden)",
          "Wealth is better than health",
          "Working alone is faster",
          "Farming during the dry season"
        ],
        "correctAnswer": "Unity and collective strength (A single finger cannot lift a burden)",
        "explanation": "'Àgbájọ ọwọ́ la fi ń sọ̀yà' means solidarity and bunching hands together gives power to strike the chest."
      },
      {
        "id": "y-u10-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is a riddle called in Yoruba literary traditions?",
        "options": [
          "Àlọ́ Àpamọ̀",
          "Àlọ́ Àpagbè",
          "Oríkì",
          "Ìjálá"
        ],
        "correctAnswer": "Àlọ́ Àpamọ̀",
        "explanation": "'Àlọ́ Àpamọ̀' is a riddle or guessing brainteaser; 'Àlọ́ Àpagbè' is a story with songs."
      },
      {
        "id": "y-u10-l1-q7",
        "type": "matching",
        "prompt": "Match profound Yoruba proverbs with English translations:",
        "pairs": [
          {
            "native": "Ilé l'à ń wò k'á tó sọmọ l'órúkọ",
            "english": "One considers family lineage and character before naming a child",
            "left": "Ilé l'à ń wò k'á tó sọmọ l'órúkọ",
            "right": "One considers family lineage and character before naming a child"
          },
          {
            "native": "Àìtètèmọ̀lẹ, olè ń mú olóko",
            "english": "Due to lack of early detection, the thief apprehends the real farm owner",
            "left": "Àìtètèmọ̀lẹ, olè ń mú olóko",
            "right": "Due to lack of early detection, the thief apprehends the real farm owner"
          },
          {
            "native": "Bí ẹ̀mí bá wà, ìrètí ń bẹ",
            "english": "As long as there is life, there is hope",
            "left": "Bí ẹ̀mí bá wà, ìrètí ń bẹ",
            "right": "Bí ẹ̀mí bá wà, ìrètí ń bẹ"
          },
          {
            "native": "A kì í fi iná sórí òrùlé sùn",
            "english": "One does not go to sleep with fire burning on the roof (Urgent action needed)",
            "left": "A kì í fi iná sórí òrùlé sùn",
            "right": "A kì í fi iná sórí òrùlé sùn"
          }
        ]
      },
      {
        "id": "y-u10-l1-q8",
        "type": "fill_blank",
        "sentence": "When opening a riddle, the speaker says: 'Àlọ́ o!', to which the listeners respond: '___!' before the riddle is posed.",
        "missingWord": "Ààlọ̀",
        "options": [
          "Ààlọ̀",
          "Gbà",
          "Ẹ kú iṣẹ́",
          "Ó dára"
        ],
        "correctAnswer": "Ààlọ̀",
        "explanation": "The formulaic riddle opening is 'Àlọ́ o!' -> 'Ààlọ̀!'."
      },
      {
        "id": "y-u10-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the riddle: 'Kí ni ń bẹ lẹ́gbẹ̀ẹ́ tẹ́ńpìlì tí a kò lè rí?' (What is beside the temple that we cannot see? — Ear/Etí):",
        "tokens": [
          "Kí",
          "ni",
          "ń",
          "bẹ",
          "lẹ́gbẹ̀ẹ́",
          "tẹ́ńpìlì",
          "tí",
          "a",
          "kò",
          "lè",
          "rí?"
        ],
        "correctTokens": [
          "Kí",
          "ni",
          "ń",
          "bẹ",
          "lẹ́gbẹ̀ẹ́",
          "tẹ́ńpìlì",
          "tí",
          "a",
          "kò",
          "lè",
          "rí?"
        ]
      },
      {
        "id": "y-u10-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the answer to the classic Yoruba riddle: 'Ọmọ kékeré kan tí ń kan ọba láyà' (A tiny child who beats against the king's chest)?",
        "options": [
          "Kùkùté (A small tree stump on the path)",
          "Ọmọ ọba",
          "Aṣọ",
          "Fìlà"
        ],
        "correctAnswer": "Kùkùté (A small tree stump on the path)",
        "explanation": "A tree stump (kùkùté) trips even the mightiest monarch without fear or reverence."
      },
      {
        "id": "y-u10-l1-q11",
        "type": "audio_listen",
        "phrase": "Ọ̀kánjúwà ènìyàn kì í rí èrè",
        "prompt": "Listen to the moral teaching. What flaw prevents a person from prospering?",
        "options": [
          "Greed / Inordinate covetousness (ọ̀kánjúwà)",
          "Laziness",
          "Excessive sleeping",
          "Speaking too much"
        ],
        "correctAnswer": "Greed / Inordinate covetousness (ọ̀kánjúwà)",
        "explanation": "'Ọ̀kánjúwà' (greed / unbridled avarice) is the tragic flaw highlighted in Ìjàpá tales."
      },
      {
        "id": "y-u10-l1-q12",
        "type": "matching",
        "prompt": "Match oral folklore categories in Yoruba culture:",
        "pairs": [
          {
            "native": "Àlọ́ Àpagbè",
            "english": "Folktale with communal chorus singing",
            "left": "Àlọ́ Àpagbè",
            "right": "Folktale with communal chorus singing"
          },
          {
            "native": "Àlọ́ Àpamọ̀",
            "english": "Riddle / Enigma to test wit and intellect",
            "left": "Àlọ́ Àpamọ̀",
            "right": "Riddle / Enigma to test wit and intellect"
          },
          {
            "native": "Ìtàn Àtẹnudẹ́nu",
            "english": "Oral historical legend transmitted across generations",
            "left": "Ìtàn Àtẹnudẹ́nu",
            "right": "Oral historical legend transmitted across generations"
          },
          {
            "native": "Òwe",
            "english": "Proverb / Philosophical maxim",
            "left": "Òwe",
            "right": "Proverb / Philosophical maxim"
          }
        ]
      },
      {
        "id": "y-u10-l1-q13",
        "type": "fill_blank",
        "sentence": "A folktale traditionally concludes with the formula: 'Ìdí àlọ́ mi rèé gbáñgbálákà, ìdí àlọ́ mi rèé ___'.",
        "missingWord": "gbàñgbàlàkà",
        "options": [
          "gbàñgbàlàkà",
          "ọba",
          "ìjàpá",
          "ilé"
        ],
        "correctAnswer": "gbàñgbàlàkà",
        "explanation": "The ritual concluding rhyme of Yoruba storytelling is '...gbáñgbálákà, ...gbàñgbàlàkà'."
      },
      {
        "id": "y-u10-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the proverb: 'Ọmọ tí a kò kọ́, ni yóò gbé ilé tí a kọ́ tà' (The child who is not educated/disciplined will sell the house that was built):",
        "tokens": [
          "Ọmọ",
          "tí",
          "a",
          "kò",
          "kọ́,",
          "ni",
          "yóò",
          "gbé",
          "ilé",
          "tí",
          "a",
          "kọ́",
          "tà"
        ],
        "correctTokens": [
          "Ọmọ",
          "tí",
          "a",
          "kò",
          "kọ́,",
          "ni",
          "yóò",
          "gbé",
          "ilé",
          "tí",
          "a",
          "kọ́",
          "tà"
        ]
      },
      {
        "id": "y-u10-l1-q15",
        "type": "multiple_choice",
        "prompt": "Why does Ìjàpá have a bald head in Yoruba mythology?",
        "options": [
          "He hid boiling hot yam porridge inside his cap to steal it, scalding his hair off",
          "He was born that way",
          "He shaved his head for chieftaincy",
          "He fell into cold water"
        ],
        "correctAnswer": "He hid boiling hot yam porridge inside his cap to steal it, scalding his hair off",
        "explanation": "In the famous fable, Ìjàpá hid stolen hot bean/yam paste in his cap; when caught, the boiling food scalded his head permanently."
      },
      {
        "id": "y-u10-l1-q16",
        "type": "audio_listen",
        "phrase": "Ẹni tí ó gbin ẹ̀bùrú, yóò kórè ibi",
        "prompt": "Listen to the moral proverb. What does it teach about cause and consequence?",
        "options": [
          "Whoever sows evil and deceit will inevitably reap calamity",
          "Farmers must plant yams in rainy season",
          "Hard work brings wealth",
          "Children must respect their elders"
        ],
        "correctAnswer": "Whoever sows evil and deceit will inevitably reap calamity",
        "explanation": "This proverb asserts moral karma: sowing wickedness produces a harvest of misfortune."
      },
      {
        "id": "y-u10-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is the answer to the riddle: 'Mo ní púpọ̀ nínú ilé mi, ṣùgbọ́n n kò lè kà wọ́n' (I have many in my house, but I cannot count them — Hair/Irun)?",
        "options": [
          "Irun orí (Hair on the head)",
          "Ènìyàn",
          "Ilẹ̀kùn",
          "Àga"
        ],
        "correctAnswer": "Irun orí (Hair on the head)",
        "explanation": "Irun orí (hair) is countless and covers the human head."
      },
      {
        "id": "y-u10-l1-q18",
        "type": "fill_blank",
        "sentence": "Complete the proverb: 'Àgbà kì í wà lọ́jà kí orí ọmọ tuntun ___'.",
        "missingWord": "wọ́",
        "options": [
          "wọ́",
          "sunkun",
          "sùn",
          "dúró"
        ],
        "correctAnswer": "wọ́",
        "explanation": "'Àgbà kì í wà lọ́jà k'órí ọmọ tuntun wọ́' (An elder does not stand in the market while a newborn's head dangles improperly) — elders must exercise responsibility."
      },
      {
        "id": "y-u10-l1-q19",
        "type": "multiple_choice",
        "prompt": "Why were folktales traditionally prohibited during the daytime in Yorubaland?",
        "options": [
          "To enforce daytime agricultural work and ensure communal fireside storytelling as nocturnal education",
          "Because tortoises sleep all day",
          "Because it was against royal law",
          "Because the moon only shines at night"
        ],
        "correctAnswer": "To enforce daytime agricultural work and ensure communal fireside storytelling as nocturnal education",
        "explanation": "Daytime folktales were discouraged to protect agrarian discipline and productivity."
      },
      {
        "id": "y-u10-l1-q20",
        "type": "matching",
        "prompt": "Match core moral values in Yoruba folklore:",
        "pairs": [
          {
            "native": "Sùúrù",
            "english": "Patience (Sùúrù baba ìwà: Patience is the father of character)",
            "left": "Sùúrù",
            "right": "Patience (Sùúrù baba ìwà: Patience is the father of character)"
          },
          {
            "native": "Ìfọwọ́sowọ́pọ̀",
            "english": "Cooperation and collective mutual assistance",
            "left": "Ìfọwọ́sowọ́pọ̀",
            "right": "Cooperation and collective mutual assistance"
          },
          {
            "native": "Ìtẹ́lọ́rùn",
            "english": "Contentment (freedom from greed and envy)",
            "left": "Ìtẹ́lọ́rùn",
            "right": "Contentment (freedom from greed and envy)"
          },
          {
            "native": "Ẹ̀kọ́ ilé",
            "english": "Home training, good breeding, and family honor",
            "left": "Ẹ̀kọ́ ilé",
            "right": "Home training, good breeding, and family honor"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-11",
    "unitId": "y-unit-11",
    "unitNumber": 11,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 11: Complex Sentence Structures and Syntax (Àwọn Gbólóhùn Alákànpọ̀)",
    "subtitle": "Subordinate clauses, relative pronoun \"tí\", nominalization (ìṣẹ̀dá ọ̀rọ̀), and vowel contraction (ìsunkì fáwẹ́lì).",
    "icon": "Network",
    "color": "#059669",
    "lessons": [
      {
        "id": "y-u11-l1",
        "title": "Lesson 1: Gbólóhùn Alákànpọ̀, Ìṣẹ̀dá Ọ̀rọ̀ àti Ìsunkì Fáwẹ́lì (Complex Syntax & Morphology)",
        "description": "Master complex subordinate clauses with \"tí\", noun derivation through vowel prefixation and reduplication, and vowel elision/contraction rules.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u11-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which universal relative pronoun introduces relative subordinate clauses ('the boy WHO came') in Yoruba?",
            "options": [
              "Tí",
              "Nígbà",
              "Bí",
              "Ṣùgbọ́n"
            ],
            "correctAnswer": "Tí",
            "explanation": "'Tí' is the relative marker equivalent to who, which, or that (e.g. 'ọmọkùnrin tí ó wá' = the boy who came)."
          },
          {
            "id": "y-u11-l1-q2",
            "type": "matching",
            "prompt": "Match Yoruba morphological derivation (ìṣẹ̀dá ọ̀rọ̀) examples with processes:",
            "pairs": [
              {
                "native": "Lọ (verb: to go)",
                "english": "Ilọ (noun: departure / going)",
                "left": "Lọ (verb: to go)",
                "right": "Ilọ (noun: departure / going)"
              },
              {
                "native": "Kọ̀wé (verb: write)",
                "english": "Ìkọ̀wé (noun: writing / orthography)",
                "left": "Kọ̀wé (verb: write)",
                "right": "Ìkọ̀wé (noun: writing / orthography)"
              },
              {
                "native": "Jẹ (verb: eat)",
                "english": "Jíjẹ (noun: eating / edible - Reduplication)",
                "left": "Jẹ (verb: eat)",
                "right": "Jíjẹ (noun: eating / edible - Reduplication)"
              },
              {
                "native": "Ṣe (verb: do)",
                "english": "Ìṣe (noun: deed / action / conduct)",
                "left": "Ṣe (verb: do)",
                "right": "Ìṣe (noun: deed / action / conduct)"
              }
            ]
          },
          {
            "id": "y-u11-l1-q3",
            "type": "fill_blank",
            "sentence": "When the verb 'ra' (buy) combines with 'ẹja' (fish), vowel contraction (ìsunkì fáwẹ́lì) produces '___'.",
            "missingWord": "rẹja",
            "options": [
              "rẹja",
              "raẹja",
              "jaẹra",
              "raja"
            ],
            "correctAnswer": "rẹja",
            "explanation": "'Ra ẹja' contracts through vowel elision of the first vowel into 'rẹja' (buy fish)."
          },
          {
            "id": "y-u11-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọkùnrin tí ó ra mọ́tò ti dé' (The man who bought a car has arrived):",
            "tokens": [
              "Ọkùnrin",
              "tí",
              "ó",
              "ra",
              "mọ́tò",
              "ti",
              "dé"
            ],
            "correctTokens": [
              "Ọkùnrin",
              "tí",
              "ó",
              "ra",
              "mọ́tò",
              "ti",
              "dé"
            ]
          },
          {
            "id": "y-u11-l1-q5",
            "type": "audio_listen",
            "phrase": "Bí o bá kẹ́kọ̀ọ́ dáadáa, wàá yege nínú ìdánwò",
            "prompt": "Listen to the conditional sentence. What does it guarantee?",
            "options": [
              "If you study very well, you will pass the examination",
              "Unless you wake up early, you will be late",
              "Because the exam was difficult, students wept",
              "The teacher will postpone the examination"
            ],
            "correctAnswer": "If you study very well, you will pass the examination",
            "explanation": "'Bí... bá...' forms the conditional clause: 'If you study well, you will succeed (yege)'."
          },
          {
            "id": "y-u11-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is vowel contraction called in Yoruba phonology?",
            "options": [
              "Ìsunkì fáwẹ́lì",
              "Àmì ohùn",
              "Àpólà ọ̀rọ̀",
              "Gbólóhùn àbùdá"
            ],
            "correctAnswer": "Ìsunkì fáwẹ́lì",
            "explanation": "'Ìsunkì fáwẹ́lì' refers to vowel contraction or coalescence when two vowels meet across morpheme boundaries."
          },
          {
            "id": "y-u11-l1-q7",
            "type": "matching",
            "prompt": "Match vowel contraction examples in everyday Yoruba:",
            "pairs": [
              {
                "native": "Kọ + ìwé",
                "english": "Kọ̀wé (To write / Write a letter)",
                "left": "Kọ + ìwé",
                "right": "Kọ̀wé (To write / Write a letter)"
              },
              {
                "native": "Mu + omi",
                "english": "Mumi (To drink water)",
                "left": "Mu + omi",
                "right": "Mumi (To drink water)"
              },
              {
                "native": "Wọ + aṣọ",
                "english": "Wọṣọ (To wear clothes)",
                "left": "Wọ + aṣọ",
                "right": "Wọṣọ (To wear clothes)"
              },
              {
                "native": "Gbé + ìyàwó",
                "english": "Gbéyàwó (To take a bride / Marry)",
                "left": "Gbé + ìyàwó",
                "right": "Gbéyàwó (To take a bride / Marry)"
              }
            ]
          },
          {
            "id": "y-u11-l1-q8",
            "type": "fill_blank",
            "sentence": "A complex sentence containing a main clause and one or more subordinate clauses is termed 'Gbólóhùn ___'.",
            "missingWord": "Alákànpọ̀",
            "options": [
              "Alákànpọ̀",
              "Mọ́kànlá",
              "Kékeré",
              "Àìkú"
            ],
            "correctAnswer": "Alákànpọ̀",
            "explanation": "'Gbólóhùn alákànpọ̀' is a complex or compound-complex sentence structure."
          },
          {
            "id": "y-u11-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'A kọ́ ilé tuntun sí etí odò' (We built a new house beside the river):",
            "tokens": [
              "A",
              "kọ́",
              "ilé",
              "tuntun",
              "sí",
              "etí",
              "odò"
            ],
            "correctTokens": [
              "A",
              "kọ́",
              "ilé",
              "tuntun",
              "sí",
              "etí",
              "odò"
            ]
          },
          {
            "id": "y-u11-l1-q10",
            "type": "multiple_choice",
            "prompt": "How is a noun derived from the verb 'ṣiṣẹ́' (to work) using the agentive prefix 'Olú-' or 'Oní-'?",
            "options": [
              "Oníṣẹ́ (Worker / Messenger)",
              "Ilọsíwájú",
              "Àìṣiṣẹ́",
              "Ibiṣẹ́"
            ],
            "correctAnswer": "Oníṣẹ́ (Worker / Messenger)",
            "explanation": "'Oní-' attaches to nouns to signify the owner, bearer, or agent of an action: Oníṣẹ́ = worker/messenger."
          },
          {
            "id": "y-u11-l1-q11",
            "type": "audio_listen",
            "phrase": "Kò sí ohun tí ó ṣòro fún Ọlọ́run",
            "prompt": "Listen to the complex relative clause. What truth does it assert?",
            "options": [
              "There is nothing that is impossible for God",
              "Everything in this world is difficult",
              "Work hard before you ask for help",
              "God loves those who worship in truth"
            ],
            "correctAnswer": "There is nothing that is impossible for God",
            "explanation": "'Kò sí ohun tí ó ṣòro...' = There is nothing that is difficult/impossible for God."
          },
          {
            "id": "y-u11-l1-q12",
            "type": "matching",
            "prompt": "Match grammatical terms in Yoruba syntax:",
            "pairs": [
              {
                "native": "Gbólóhùn àbùdá",
                "english": "Subordinate / Dependent clause",
                "left": "Gbólóhùn àbùdá",
                "right": "Subordinate / Dependent clause"
              },
              {
                "native": "Gbólóhùn pọ́nńbélé",
                "english": "Simple independent sentence",
                "left": "Gbólóhùn pọ́nńbélé",
                "right": "Simple independent sentence"
              },
              {
                "native": "Àpólà ọ̀rọ̀-orúkọ",
                "english": "Noun phrase",
                "left": "Àpólà ọ̀rọ̀-orúkọ",
                "right": "Noun phrase"
              },
              {
                "native": "Àpólà ọ̀rọ̀-ìṣe",
                "english": "Verb phrase",
                "left": "Àpólà ọ̀rọ̀-ìṣe",
                "right": "Verb phrase"
              }
            ]
          },
          {
            "id": "y-u11-l1-q13",
            "type": "fill_blank",
            "sentence": "When deriving the gerund of 'wá' (to come) through partial reduplication, the resulting noun is '___'.",
            "missingWord": "Wíwá",
            "options": [
              "Wíwá",
              "Ìwá",
              "Wáwá",
              "Ọ̀wá"
            ],
            "correctAnswer": "Wíwá",
            "explanation": "Verbal reduplication attaches a high-toned CV prefix with 'í': wá -> wíwá (coming / arrival)."
          },
          {
            "id": "y-u11-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Ilé tí a kọ́ ti bàjẹ́' (The house that was built has decayed):",
            "tokens": [
              "Ilé",
              "tí",
              "a",
              "kọ́",
              "ti",
              "bàjẹ́"
            ],
            "correctTokens": [
              "Ilé",
              "tí",
              "a",
              "kọ́",
              "ti",
              "bàjẹ́"
            ]
          },
          {
            "id": "y-u11-l1-q15",
            "type": "multiple_choice",
            "prompt": "What happens to tone during vowel contraction when a low tone verb meets a mid tone noun (e.g. 'fẹ́' [high] + 'iyàwó' [mid])?",
            "options": [
              "The tone of the surviving vowel is preserved or takes a glide depending on syllable weight",
              "All tones become low",
              "All tones become high",
              "Tones disappear completely"
            ],
            "correctAnswer": "The tone of the surviving vowel is preserved or takes a glide depending on syllable weight",
            "explanation": "Yoruba tone preservation rules dictate whether tones assimilate or form gliding contours during contraction."
          },
          {
            "id": "y-u11-l1-q16",
            "type": "audio_listen",
            "phrase": "Nítorí pé ó ṣiṣẹ́ kára, ó ní owó púpọ̀",
            "prompt": "Listen to the causal sentence. Why does he/she have plenty of money?",
            "options": [
              "Because he/she worked diligently (ṣiṣẹ́ kára)",
              "Because he won a lottery",
              "Because his father gave him an inheritance",
              "Because he saved money in the bank"
            ],
            "correctAnswer": "Because he/she worked diligently (ṣiṣẹ́ kára)",
            "explanation": "'Nítorí pé ó ṣiṣẹ́ kára...' = Because he worked hard, he has plenty of money."
          },
          {
            "id": "y-u11-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is an appositive clause in Yoruba grammar?",
            "options": [
              "Àpólà àpèjúwe àfikún",
              "Kọ́nsónáǹtì",
              "Sílébù",
              "Àmì ìsàlẹ̀"
            ],
            "correctAnswer": "Àpólà àpèjúwe àfikún",
            "explanation": "'Àpólà àpèjúwe àfikún' functions as an appositive descriptive expansion."
          },
          {
            "id": "y-u11-l1-q18",
            "type": "fill_blank",
            "sentence": "The negative prefix used to form antonymous nouns ('Àì-') turns 'mọ̀' (to know) into '___' (ignorance).",
            "missingWord": "Àìmọ̀",
            "options": [
              "Àìmọ̀",
              "Ìmọ̀",
              "Mímọ̀",
              "Olùmọ̀"
            ],
            "correctAnswer": "Àìmọ̀",
            "explanation": "'Àì-' is the negative nominalizing prefix: àìmọ̀ = ignorance / lack of knowledge."
          },
          {
            "id": "y-u11-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Àìlera' mean, derived from 'lera' (to be healthy/strong)?",
            "options": [
              "Illness / Infirmity / Weakness",
              "Physical power",
              "Speed",
              "Wealth"
            ],
            "correctAnswer": "Illness / Infirmity / Weakness",
            "explanation": "'Àì-' (not) + 'lera' (strong body) = 'Àìlera' (illness, infirmity, bodily weakness)."
          },
          {
            "id": "y-u11-l1-q20",
            "type": "matching",
            "prompt": "Match derived negative nouns with English meanings:",
            "pairs": [
              {
                "native": "Àìsùn",
                "english": "Sleeplessness / Vigil",
                "left": "Àìsùn",
                "right": "Sleeplessness / Vigil"
              },
              {
                "native": "Àìsotítọ́",
                "english": "Dishonesty / Untruthfulness",
                "left": "Àìsotítọ́",
                "right": "Dishonesty / Untruthfulness"
              },
              {
                "native": "Àìríran",
                "english": "Blindness / Inability to see",
                "left": "Àìríran",
                "right": "Blindness / Inability to see"
              },
              {
                "native": "Àìgbọ́ràn",
                "english": "Disobedience / Refusal to heed advice",
                "left": "Àìgbọ́ràn",
                "right": "Disobedience / Refusal to heed advice"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u11-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which universal relative pronoun introduces relative subordinate clauses ('the boy WHO came') in Yoruba?",
        "options": [
          "Tí",
          "Nígbà",
          "Bí",
          "Ṣùgbọ́n"
        ],
        "correctAnswer": "Tí",
        "explanation": "'Tí' is the relative marker equivalent to who, which, or that (e.g. 'ọmọkùnrin tí ó wá' = the boy who came)."
      },
      {
        "id": "y-u11-l1-q2",
        "type": "matching",
        "prompt": "Match Yoruba morphological derivation (ìṣẹ̀dá ọ̀rọ̀) examples with processes:",
        "pairs": [
          {
            "native": "Lọ (verb: to go)",
            "english": "Ilọ (noun: departure / going)",
            "left": "Lọ (verb: to go)",
            "right": "Ilọ (noun: departure / going)"
          },
          {
            "native": "Kọ̀wé (verb: write)",
            "english": "Ìkọ̀wé (noun: writing / orthography)",
            "left": "Kọ̀wé (verb: write)",
            "right": "Ìkọ̀wé (noun: writing / orthography)"
          },
          {
            "native": "Jẹ (verb: eat)",
            "english": "Jíjẹ (noun: eating / edible - Reduplication)",
            "left": "Jẹ (verb: eat)",
            "right": "Jíjẹ (noun: eating / edible - Reduplication)"
          },
          {
            "native": "Ṣe (verb: do)",
            "english": "Ìṣe (noun: deed / action / conduct)",
            "left": "Ṣe (verb: do)",
            "right": "Ìṣe (noun: deed / action / conduct)"
          }
        ]
      },
      {
        "id": "y-u11-l1-q3",
        "type": "fill_blank",
        "sentence": "When the verb 'ra' (buy) combines with 'ẹja' (fish), vowel contraction (ìsunkì fáwẹ́lì) produces '___'.",
        "missingWord": "rẹja",
        "options": [
          "rẹja",
          "raẹja",
          "jaẹra",
          "raja"
        ],
        "correctAnswer": "rẹja",
        "explanation": "'Ra ẹja' contracts through vowel elision of the first vowel into 'rẹja' (buy fish)."
      },
      {
        "id": "y-u11-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọkùnrin tí ó ra mọ́tò ti dé' (The man who bought a car has arrived):",
        "tokens": [
          "Ọkùnrin",
          "tí",
          "ó",
          "ra",
          "mọ́tò",
          "ti",
          "dé"
        ],
        "correctTokens": [
          "Ọkùnrin",
          "tí",
          "ó",
          "ra",
          "mọ́tò",
          "ti",
          "dé"
        ]
      },
      {
        "id": "y-u11-l1-q5",
        "type": "audio_listen",
        "phrase": "Bí o bá kẹ́kọ̀ọ́ dáadáa, wàá yege nínú ìdánwò",
        "prompt": "Listen to the conditional sentence. What does it guarantee?",
        "options": [
          "If you study very well, you will pass the examination",
          "Unless you wake up early, you will be late",
          "Because the exam was difficult, students wept",
          "The teacher will postpone the examination"
        ],
        "correctAnswer": "If you study very well, you will pass the examination",
        "explanation": "'Bí... bá...' forms the conditional clause: 'If you study well, you will succeed (yege)'."
      },
      {
        "id": "y-u11-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is vowel contraction called in Yoruba phonology?",
        "options": [
          "Ìsunkì fáwẹ́lì",
          "Àmì ohùn",
          "Àpólà ọ̀rọ̀",
          "Gbólóhùn àbùdá"
        ],
        "correctAnswer": "Ìsunkì fáwẹ́lì",
        "explanation": "'Ìsunkì fáwẹ́lì' refers to vowel contraction or coalescence when two vowels meet across morpheme boundaries."
      },
      {
        "id": "y-u11-l1-q7",
        "type": "matching",
        "prompt": "Match vowel contraction examples in everyday Yoruba:",
        "pairs": [
          {
            "native": "Kọ + ìwé",
            "english": "Kọ̀wé (To write / Write a letter)",
            "left": "Kọ + ìwé",
            "right": "Kọ̀wé (To write / Write a letter)"
          },
          {
            "native": "Mu + omi",
            "english": "Mumi (To drink water)",
            "left": "Mu + omi",
            "right": "Mumi (To drink water)"
          },
          {
            "native": "Wọ + aṣọ",
            "english": "Wọṣọ (To wear clothes)",
            "left": "Wọ + aṣọ",
            "right": "Wọṣọ (To wear clothes)"
          },
          {
            "native": "Gbé + ìyàwó",
            "english": "Gbéyàwó (To take a bride / Marry)",
            "left": "Gbé + ìyàwó",
            "right": "Gbéyàwó (To take a bride / Marry)"
          }
        ]
      },
      {
        "id": "y-u11-l1-q8",
        "type": "fill_blank",
        "sentence": "A complex sentence containing a main clause and one or more subordinate clauses is termed 'Gbólóhùn ___'.",
        "missingWord": "Alákànpọ̀",
        "options": [
          "Alákànpọ̀",
          "Mọ́kànlá",
          "Kékeré",
          "Àìkú"
        ],
        "correctAnswer": "Alákànpọ̀",
        "explanation": "'Gbólóhùn alákànpọ̀' is a complex or compound-complex sentence structure."
      },
      {
        "id": "y-u11-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'A kọ́ ilé tuntun sí etí odò' (We built a new house beside the river):",
        "tokens": [
          "A",
          "kọ́",
          "ilé",
          "tuntun",
          "sí",
          "etí",
          "odò"
        ],
        "correctTokens": [
          "A",
          "kọ́",
          "ilé",
          "tuntun",
          "sí",
          "etí",
          "odò"
        ]
      },
      {
        "id": "y-u11-l1-q10",
        "type": "multiple_choice",
        "prompt": "How is a noun derived from the verb 'ṣiṣẹ́' (to work) using the agentive prefix 'Olú-' or 'Oní-'?",
        "options": [
          "Oníṣẹ́ (Worker / Messenger)",
          "Ilọsíwájú",
          "Àìṣiṣẹ́",
          "Ibiṣẹ́"
        ],
        "correctAnswer": "Oníṣẹ́ (Worker / Messenger)",
        "explanation": "'Oní-' attaches to nouns to signify the owner, bearer, or agent of an action: Oníṣẹ́ = worker/messenger."
      },
      {
        "id": "y-u11-l1-q11",
        "type": "audio_listen",
        "phrase": "Kò sí ohun tí ó ṣòro fún Ọlọ́run",
        "prompt": "Listen to the complex relative clause. What truth does it assert?",
        "options": [
          "There is nothing that is impossible for God",
          "Everything in this world is difficult",
          "Work hard before you ask for help",
          "God loves those who worship in truth"
        ],
        "correctAnswer": "There is nothing that is impossible for God",
        "explanation": "'Kò sí ohun tí ó ṣòro...' = There is nothing that is difficult/impossible for God."
      },
      {
        "id": "y-u11-l1-q12",
        "type": "matching",
        "prompt": "Match grammatical terms in Yoruba syntax:",
        "pairs": [
          {
            "native": "Gbólóhùn àbùdá",
            "english": "Subordinate / Dependent clause",
            "left": "Gbólóhùn àbùdá",
            "right": "Subordinate / Dependent clause"
          },
          {
            "native": "Gbólóhùn pọ́nńbélé",
            "english": "Simple independent sentence",
            "left": "Gbólóhùn pọ́nńbélé",
            "right": "Simple independent sentence"
          },
          {
            "native": "Àpólà ọ̀rọ̀-orúkọ",
            "english": "Noun phrase",
            "left": "Àpólà ọ̀rọ̀-orúkọ",
            "right": "Noun phrase"
          },
          {
            "native": "Àpólà ọ̀rọ̀-ìṣe",
            "english": "Verb phrase",
            "left": "Àpólà ọ̀rọ̀-ìṣe",
            "right": "Verb phrase"
          }
        ]
      },
      {
        "id": "y-u11-l1-q13",
        "type": "fill_blank",
        "sentence": "When deriving the gerund of 'wá' (to come) through partial reduplication, the resulting noun is '___'.",
        "missingWord": "Wíwá",
        "options": [
          "Wíwá",
          "Ìwá",
          "Wáwá",
          "Ọ̀wá"
        ],
        "correctAnswer": "Wíwá",
        "explanation": "Verbal reduplication attaches a high-toned CV prefix with 'í': wá -> wíwá (coming / arrival)."
      },
      {
        "id": "y-u11-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Ilé tí a kọ́ ti bàjẹ́' (The house that was built has decayed):",
        "tokens": [
          "Ilé",
          "tí",
          "a",
          "kọ́",
          "ti",
          "bàjẹ́"
        ],
        "correctTokens": [
          "Ilé",
          "tí",
          "a",
          "kọ́",
          "ti",
          "bàjẹ́"
        ]
      },
      {
        "id": "y-u11-l1-q15",
        "type": "multiple_choice",
        "prompt": "What happens to tone during vowel contraction when a low tone verb meets a mid tone noun (e.g. 'fẹ́' [high] + 'iyàwó' [mid])?",
        "options": [
          "The tone of the surviving vowel is preserved or takes a glide depending on syllable weight",
          "All tones become low",
          "All tones become high",
          "Tones disappear completely"
        ],
        "correctAnswer": "The tone of the surviving vowel is preserved or takes a glide depending on syllable weight",
        "explanation": "Yoruba tone preservation rules dictate whether tones assimilate or form gliding contours during contraction."
      },
      {
        "id": "y-u11-l1-q16",
        "type": "audio_listen",
        "phrase": "Nítorí pé ó ṣiṣẹ́ kára, ó ní owó púpọ̀",
        "prompt": "Listen to the causal sentence. Why does he/she have plenty of money?",
        "options": [
          "Because he/she worked diligently (ṣiṣẹ́ kára)",
          "Because he won a lottery",
          "Because his father gave him an inheritance",
          "Because he saved money in the bank"
        ],
        "correctAnswer": "Because he/she worked diligently (ṣiṣẹ́ kára)",
        "explanation": "'Nítorí pé ó ṣiṣẹ́ kára...' = Because he worked hard, he has plenty of money."
      },
      {
        "id": "y-u11-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is an appositive clause in Yoruba grammar?",
        "options": [
          "Àpólà àpèjúwe àfikún",
          "Kọ́nsónáǹtì",
          "Sílébù",
          "Àmì ìsàlẹ̀"
        ],
        "correctAnswer": "Àpólà àpèjúwe àfikún",
        "explanation": "'Àpólà àpèjúwe àfikún' functions as an appositive descriptive expansion."
      },
      {
        "id": "y-u11-l1-q18",
        "type": "fill_blank",
        "sentence": "The negative prefix used to form antonymous nouns ('Àì-') turns 'mọ̀' (to know) into '___' (ignorance).",
        "missingWord": "Àìmọ̀",
        "options": [
          "Àìmọ̀",
          "Ìmọ̀",
          "Mímọ̀",
          "Olùmọ̀"
        ],
        "correctAnswer": "Àìmọ̀",
        "explanation": "'Àì-' is the negative nominalizing prefix: àìmọ̀ = ignorance / lack of knowledge."
      },
      {
        "id": "y-u11-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Àìlera' mean, derived from 'lera' (to be healthy/strong)?",
        "options": [
          "Illness / Infirmity / Weakness",
          "Physical power",
          "Speed",
          "Wealth"
        ],
        "correctAnswer": "Illness / Infirmity / Weakness",
        "explanation": "'Àì-' (not) + 'lera' (strong body) = 'Àìlera' (illness, infirmity, bodily weakness)."
      },
      {
        "id": "y-u11-l1-q20",
        "type": "matching",
        "prompt": "Match derived negative nouns with English meanings:",
        "pairs": [
          {
            "native": "Àìsùn",
            "english": "Sleeplessness / Vigil",
            "left": "Àìsùn",
            "right": "Sleeplessness / Vigil"
          },
          {
            "native": "Àìsotítọ́",
            "english": "Dishonesty / Untruthfulness",
            "left": "Àìsotítọ́",
            "right": "Dishonesty / Untruthfulness"
          },
          {
            "native": "Àìríran",
            "english": "Blindness / Inability to see",
            "left": "Àìríran",
            "right": "Blindness / Inability to see"
          },
          {
            "native": "Àìgbọ́ràn",
            "english": "Disobedience / Refusal to heed advice",
            "left": "Àìgbọ́ràn",
            "right": "Disobedience / Refusal to heed advice"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-12",
    "unitId": "y-unit-12",
    "unitNumber": 12,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 12: Continuous Composition and Essays (Àkọsílẹ̀ àti Àròkọ)",
    "subtitle": "Essay genres (narrative, descriptive, argumentative), formal & informal correspondence (kíkọ lẹ́tà), and debate rhetoric.",
    "icon": "FileText",
    "color": "#059669",
    "lessons": [
      {
        "id": "y-u12-l1",
        "title": "Lesson 1: Kíkọ Àròkọ Dára Dára àti Lẹ́tà (Essay Drafting & Epistolary Composition)",
        "description": "Master essay structure (Àkọlé, Ìfáàrà, Agbedeméjì, Ìparí), formal business correspondence (Lẹ́tà Àìgbẹ̀fẹ́), and argumentative debates.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u12-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is an argumentative / debate essay called in Yoruba language curricula?",
            "options": [
              "Àròkọ ariyiyan / aṣàríyànjiyàn",
              "Àròkọ asọ̀tàn",
              "Àròkọ alálàyé",
              "Oríkì"
            ],
            "correctAnswer": "Àròkọ ariyiyan / aṣàríyànjiyàn",
            "explanation": "'Àròkọ ariyiyan' is an argumentative or debate essay."
          },
          {
            "id": "y-u12-l1-q2",
            "type": "matching",
            "prompt": "Match essay composition genres (Oríṣiríṣi Àròkọ) in Yoruba:",
            "pairs": [
              {
                "native": "Àròkọ asọ̀tàn",
                "english": "Narrative essay (storytelling / chronological events)",
                "left": "Àròkọ asọ̀tàn",
                "right": "Narrative essay (storytelling / chronological events)"
              },
              {
                "native": "Àròkọ alálàyé",
                "english": "Expository essay (factual explanation of a process/topic)",
                "left": "Àròkọ alálàyé",
                "right": "Expository essay (factual explanation of a process/topic)"
              },
              {
                "native": "Àròkọ ariyiyan",
                "english": "Argumentative / Debate essay",
                "left": "Àròkọ ariyiyan",
                "right": "Argumentative / Debate essay"
              },
              {
                "native": "Àròkọ aṣàpèjúwe",
                "english": "Descriptive essay (vivid sensory imagery of person/scene)",
                "left": "Àròkọ aṣàpèjúwe",
                "right": "Descriptive essay (vivid sensory imagery of person/scene)"
              }
            ]
          },
          {
            "id": "y-u12-l1-q3",
            "type": "fill_blank",
            "sentence": "The title or heading of an essay or letter in Yoruba is called '___'.",
            "missingWord": "Àkọlé",
            "options": [
              "Àkọlé",
              "Ìfáàrà",
              "Ìparí",
              "Àròkọ"
            ],
            "correctAnswer": "Àkọlé",
            "explanation": "'Àkọlé' is the title or heading."
          },
          {
            "id": "y-u12-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the essay title: 'Àkọlé: Ànfààní tí Ọ̀gbìn Ń ṣe fún Orílẹ̀-èdè Wa' (The Benefits Agriculture Renders to Our Nation):",
            "tokens": [
              "Àkọlé:",
              "Ànfààní",
              "tí",
              "Ọ̀gbìn",
              "Ń",
              "ṣe",
              "fún",
              "Orílẹ̀-èdè",
              "Wa"
            ],
            "correctTokens": [
              "Àkọlé:",
              "Ànfààní",
              "tí",
              "Ọ̀gbìn",
              "Ń",
              "ṣe",
              "fún",
              "Orílẹ̀-èdè",
              "Wa"
            ]
          },
          {
            "id": "y-u12-l1-q5",
            "type": "audio_listen",
            "phrase": "Ọ̀rẹ́ mi ọ̀wọ́n tí mo nífẹ̀ẹ́ sí",
            "prompt": "Listen to the letter salutation. What type of letter is this?",
            "options": [
              "An informal personal letter to a cherished friend (Lẹ́tà gbẹ̀fẹ́)",
              "A formal business letter to a bank manager",
              "A query letter from an employer",
              "A government proclamation"
            ],
            "correctAnswer": "An informal personal letter to a cherished friend (Lẹ́tà gbẹ̀fẹ́)",
            "explanation": "'Ọ̀rẹ́ mi ọ̀wọ́n...' is an intimate salutation characteristic of an informal letter (Lẹ́tà gbẹ̀fẹ́)."
          },
          {
            "id": "y-u12-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is an official / formal business letter called in Yoruba epistolary writing?",
            "options": [
              "Lẹ́tà Àìgbẹ̀fẹ́ / Lẹ́tà Iṣẹ́",
              "Lẹ́tà Gbẹ̀fẹ́",
              "Oríkì",
              "Àlọ́"
            ],
            "correctAnswer": "Lẹ́tà Àìgbẹ̀fẹ́ / Lẹ́tà Iṣẹ́",
            "explanation": "'Lẹ́tà Àìgbẹ̀fẹ́' (formal letter) requires strict protocol, two addresses, formal salutations, and official signoffs."
          },
          {
            "id": "y-u12-l1-q7",
            "type": "matching",
            "prompt": "Match components of a formal Yoruba letter:",
            "pairs": [
              {
                "native": "Àdírẹ́sì olùkọ̀wé",
                "english": "Sender's address (top right corner)",
                "left": "Àdírẹ́sì olùkọ̀wé",
                "right": "Sender's address (top right corner)"
              },
              {
                "native": "Déètì / Ọjọ́",
                "english": "Date beneath sender's address",
                "left": "Déètì / Ọjọ́",
                "right": "Date beneath sender's address"
              },
              {
                "native": "Àdírẹ́sì olùgbà",
                "english": "Recipient's address (top left corner)",
                "left": "Àdírẹ́sì olùgbà",
                "right": "Recipient's address (top left corner)"
              },
              {
                "native": "Ìparí àti ìtọwọ́bọ̀wé",
                "english": "Formal valediction and signature",
                "left": "Ìparí àti ìtọwọ́bọ̀wé",
                "right": "Formal valediction and signature"
              }
            ]
          },
          {
            "id": "y-u12-l1-q8",
            "type": "fill_blank",
            "sentence": "The formal closing signoff of an official letter in Yoruba is: 'Èmi ni tiyín tòótọ́, ___' (Yours faithfully).",
            "missingWord": "tiyín tòótọ́",
            "options": [
              "tiyín tòótọ́",
              "ọ̀rẹ́ rẹ",
              "bàbá rẹ",
              "àbúrò"
            ],
            "correctAnswer": "tiyín tòótọ́",
            "explanation": "'Èmi ni tiyín tòótọ́' is the standard formal closing equivalent to 'Yours faithfully'."
          },
          {
            "id": "y-u12-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the sentence: 'Ẹ̀kọ́ ọmọbìnrin ṣe pàtàkì púpọ̀ sí àwùjọ' (Female education is extremely vital to society):",
            "tokens": [
              "Ẹ̀kọ́",
              "ọmọbìnrin",
              "ṣe",
              "pàtàkì",
              "púpọ̀",
              "sí",
              "àwùjọ"
            ],
            "correctTokens": [
              "Ẹ̀kọ́",
              "ọmọbìnrin",
              "ṣe",
              "pàtàkì",
              "púpọ̀",
              "sí",
              "àwùjọ"
            ]
          },
          {
            "id": "y-u12-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the concluding paragraph of an essay called in Yoruba?",
            "options": [
              "Ìparí",
              "Ìfáàrà",
              "Agbedeméjì",
              "Àkọlé"
            ],
            "correctAnswer": "Ìparí",
            "explanation": "'Ìparí' (the conclusion/ending) wraps up the central arguments of an essay."
          },
          {
            "id": "y-u12-l1-q11",
            "type": "audio_listen",
            "phrase": "Ní àkótán, mo gba ìjọba níyànjú láti pèsè iná mànàmáná",
            "prompt": "Listen to the concluding thesis. What is the writer urging the government to provide?",
            "options": [
              "In conclusion, I urge the government to provide stable electricity",
              "The government should build new farm markets",
              "Doctors should be paid higher salaries",
              "Roads should be expanded immediately"
            ],
            "correctAnswer": "In conclusion, I urge the government to provide stable electricity",
            "explanation": "'Ní àkótán' = In conclusion / summary; 'iná mànàmáná' = electrical power."
          },
          {
            "id": "y-u12-l1-q12",
            "type": "matching",
            "prompt": "Match contemporary civic essay topics in Yoruba:",
            "pairs": [
              {
                "native": "Ìfọwọ́sowọ́pọ̀ fún àlàáfíà orílẹ̀-èdè",
                "english": "Cooperation for national peace and harmony",
                "left": "Ìfọwọ́sowọ́pọ̀ fún àlàáfíà orílẹ̀-èdè",
                "right": "Cooperation for national peace and harmony"
              },
              {
                "native": "Ìtọ́jú àyíká àti ìmọ́tótó",
                "english": "Environmental care and public sanitation",
                "left": "Ìtọ́jú àyíká àti ìmọ́tótó",
                "right": "Environmental care and public sanitation"
              },
              {
                "native": "Ipa tí ẹ̀rọ ayélujára ń kò nínú ẹ̀kọ́",
                "english": "The impact of the internet on education",
                "left": "Ipa tí ẹ̀rọ ayélujára ń kò nínú ẹ̀kọ́",
                "right": "The impact of the internet on education"
              },
              {
                "native": "Bí a ṣe lè dẹ́kun àìríṣẹ́ṣe àwọn ọ̀dọ́",
                "english": "How to curb youth unemployment",
                "left": "Bí a ṣe lè dẹ́kun àìríṣẹ́ṣe àwọn ọ̀dọ́",
                "right": "How to curb youth unemployment"
              }
            ]
          },
          {
            "id": "y-u12-l1-q13",
            "type": "fill_blank",
            "sentence": "The introductory paragraph of an essay is formally designated as '___'.",
            "missingWord": "Ìfáàrà",
            "options": [
              "Ìfáàrà",
              "Ìparí",
              "Àkọlé",
              "Ọ̀rọ̀"
            ],
            "correctAnswer": "Ìfáàrà",
            "explanation": "'Ìfáàrà' is the introduction."
          },
          {
            "id": "y-u12-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the formal title: 'Lẹ́tà Sí Alákòóso Ilé-ìwé fún Ìgbàwọlé' (Letter to the School Principal for Admission):",
            "tokens": [
              "Lẹ́tà",
              "Sí",
              "Alákòóso",
              "Ilé-ìwé",
              "fún",
              "Ìgbàwọlé"
            ],
            "correctTokens": [
              "Lẹ́tà",
              "Sí",
              "Alákòóso",
              "Ilé-ìwé",
              "fún",
              "Ìgbàwọlé"
            ]
          },
          {
            "id": "y-u12-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is an informal letter called in Yoruba?",
            "options": [
              "Lẹ́tà Gbẹ̀fẹ́",
              "Lẹ́tà Àìgbẹ̀fẹ́",
              "Àròkọ ariyiyan",
              "Iwe iroyin"
            ],
            "correctAnswer": "Lẹ́tà Gbẹ̀fẹ́",
            "explanation": "'Lẹ́tà Gbẹ̀fẹ́' is an informal/friendly letter."
          },
          {
            "id": "y-u12-l1-q16",
            "type": "audio_listen",
            "phrase": "Mo kọ lẹ́tà yìí láti sọ fún ọ nípa ìdánwò mi",
            "prompt": "Listen to the letter sentence. What is the writer's topic?",
            "options": [
              "I am writing this letter to inform you about my examination",
              "I am asking you to lend me money",
              "I am traveling to Ibadan next week",
              "My family is moving to another town"
            ],
            "correctAnswer": "I am writing this letter to inform you about my examination",
            "explanation": "'Nípa ìdánwò mi' = about my examination."
          },
          {
            "id": "y-u12-l1-q17",
            "type": "multiple_choice",
            "prompt": "In a formal school debate, what is the motion supporter called?",
            "options": [
              "Olùtìlẹ́yìn àbá (Proposer / Supporter)",
              "Olùkọ̀jú àbá (Opposer)",
              "Adájọ́ (Judge)",
              "Akọ̀wé"
            ],
            "correctAnswer": "Olùtìlẹ́yìn àbá (Proposer / Supporter)",
            "explanation": "'Olùtìlẹ́yìn àbá' is the proposer or supporter of the motion in a debate."
          },
          {
            "id": "y-u12-l1-q18",
            "type": "fill_blank",
            "sentence": "When opening a speech at a formal gathering, one addresses the chairman: 'Àgùnbánirọ̀ Alága, àwọn ___ àti ọlọ́jọ́ ìbínú' (Mr. Chairman, esteemed judges and audience).",
            "missingWord": "adájọ́",
            "options": [
              "adájọ́",
              "akẹ́kọ̀ọ́",
              "olóko",
              "oníṣòwò"
            ],
            "correctAnswer": "adájọ́",
            "explanation": "'Àwọn adájọ́' refers to the judges of the competition/debate."
          },
          {
            "id": "y-u12-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is the core middle body of an essay called in Yoruba?",
            "options": [
              "Agbedeméjì àròkọ / Kókó ọ̀rọ̀",
              "Ìparí",
              "Ìfáàrà",
              "Àkọlé"
            ],
            "correctAnswer": "Agbedeméjì àròkọ / Kókó ọ̀rọ̀",
            "explanation": "'Agbedeméjì' (the middle) contains the main substantive paragraphs."
          },
          {
            "id": "y-u12-l1-q20",
            "type": "matching",
            "prompt": "Match formal debate formulas in Yoruba:",
            "pairs": [
              {
                "native": "Mo fẹsẹ̀ múlẹ̀ láti ti àbá yìí lẹ́yìn",
                "english": "I stand firmly to support this motion",
                "left": "Mo fẹsẹ̀ múlẹ̀ láti ti àbá yìí lẹ́yìn",
                "right": "I stand firmly to support this motion"
              },
              {
                "native": "Àwọn adájọ́ olódodo",
                "english": "Righteous and impartial panel of judges",
                "left": "Àwọn adájọ́ olódodo",
                "right": "Righteous and impartial panel of judges"
              },
              {
                "native": "Olùtọ́jú àkókò",
                "english": "The official timekeeper",
                "left": "Olùtọ́jú àkókò",
                "right": "The official timekeeper"
              },
              {
                "native": "Gbogbo ẹ̀yin olùgbọ́ ọ̀wọ́n",
                "english": "All of you esteemed and honored listeners",
                "left": "Gbogbo ẹ̀yin olùgbọ́ ọ̀wọ́n",
                "right": "All of you esteemed and honored listeners"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u12-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is an argumentative / debate essay called in Yoruba language curricula?",
        "options": [
          "Àròkọ ariyiyan / aṣàríyànjiyàn",
          "Àròkọ asọ̀tàn",
          "Àròkọ alálàyé",
          "Oríkì"
        ],
        "correctAnswer": "Àròkọ ariyiyan / aṣàríyànjiyàn",
        "explanation": "'Àròkọ ariyiyan' is an argumentative or debate essay."
      },
      {
        "id": "y-u12-l1-q2",
        "type": "matching",
        "prompt": "Match essay composition genres (Oríṣiríṣi Àròkọ) in Yoruba:",
        "pairs": [
          {
            "native": "Àròkọ asọ̀tàn",
            "english": "Narrative essay (storytelling / chronological events)",
            "left": "Àròkọ asọ̀tàn",
            "right": "Narrative essay (storytelling / chronological events)"
          },
          {
            "native": "Àròkọ alálàyé",
            "english": "Expository essay (factual explanation of a process/topic)",
            "left": "Àròkọ alálàyé",
            "right": "Expository essay (factual explanation of a process/topic)"
          },
          {
            "native": "Àròkọ ariyiyan",
            "english": "Argumentative / Debate essay",
            "left": "Àròkọ ariyiyan",
            "right": "Argumentative / Debate essay"
          },
          {
            "native": "Àròkọ aṣàpèjúwe",
            "english": "Descriptive essay (vivid sensory imagery of person/scene)",
            "left": "Àròkọ aṣàpèjúwe",
            "right": "Descriptive essay (vivid sensory imagery of person/scene)"
          }
        ]
      },
      {
        "id": "y-u12-l1-q3",
        "type": "fill_blank",
        "sentence": "The title or heading of an essay or letter in Yoruba is called '___'.",
        "missingWord": "Àkọlé",
        "options": [
          "Àkọlé",
          "Ìfáàrà",
          "Ìparí",
          "Àròkọ"
        ],
        "correctAnswer": "Àkọlé",
        "explanation": "'Àkọlé' is the title or heading."
      },
      {
        "id": "y-u12-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the essay title: 'Àkọlé: Ànfààní tí Ọ̀gbìn Ń ṣe fún Orílẹ̀-èdè Wa' (The Benefits Agriculture Renders to Our Nation):",
        "tokens": [
          "Àkọlé:",
          "Ànfààní",
          "tí",
          "Ọ̀gbìn",
          "Ń",
          "ṣe",
          "fún",
          "Orílẹ̀-èdè",
          "Wa"
        ],
        "correctTokens": [
          "Àkọlé:",
          "Ànfààní",
          "tí",
          "Ọ̀gbìn",
          "Ń",
          "ṣe",
          "fún",
          "Orílẹ̀-èdè",
          "Wa"
        ]
      },
      {
        "id": "y-u12-l1-q5",
        "type": "audio_listen",
        "phrase": "Ọ̀rẹ́ mi ọ̀wọ́n tí mo nífẹ̀ẹ́ sí",
        "prompt": "Listen to the letter salutation. What type of letter is this?",
        "options": [
          "An informal personal letter to a cherished friend (Lẹ́tà gbẹ̀fẹ́)",
          "A formal business letter to a bank manager",
          "A query letter from an employer",
          "A government proclamation"
        ],
        "correctAnswer": "An informal personal letter to a cherished friend (Lẹ́tà gbẹ̀fẹ́)",
        "explanation": "'Ọ̀rẹ́ mi ọ̀wọ́n...' is an intimate salutation characteristic of an informal letter (Lẹ́tà gbẹ̀fẹ́)."
      },
      {
        "id": "y-u12-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is an official / formal business letter called in Yoruba epistolary writing?",
        "options": [
          "Lẹ́tà Àìgbẹ̀fẹ́ / Lẹ́tà Iṣẹ́",
          "Lẹ́tà Gbẹ̀fẹ́",
          "Oríkì",
          "Àlọ́"
        ],
        "correctAnswer": "Lẹ́tà Àìgbẹ̀fẹ́ / Lẹ́tà Iṣẹ́",
        "explanation": "'Lẹ́tà Àìgbẹ̀fẹ́' (formal letter) requires strict protocol, two addresses, formal salutations, and official signoffs."
      },
      {
        "id": "y-u12-l1-q7",
        "type": "matching",
        "prompt": "Match components of a formal Yoruba letter:",
        "pairs": [
          {
            "native": "Àdírẹ́sì olùkọ̀wé",
            "english": "Sender's address (top right corner)",
            "left": "Àdírẹ́sì olùkọ̀wé",
            "right": "Sender's address (top right corner)"
          },
          {
            "native": "Déètì / Ọjọ́",
            "english": "Date beneath sender's address",
            "left": "Déètì / Ọjọ́",
            "right": "Date beneath sender's address"
          },
          {
            "native": "Àdírẹ́sì olùgbà",
            "english": "Recipient's address (top left corner)",
            "left": "Àdírẹ́sì olùgbà",
            "right": "Recipient's address (top left corner)"
          },
          {
            "native": "Ìparí àti ìtọwọ́bọ̀wé",
            "english": "Formal valediction and signature",
            "left": "Ìparí àti ìtọwọ́bọ̀wé",
            "right": "Formal valediction and signature"
          }
        ]
      },
      {
        "id": "y-u12-l1-q8",
        "type": "fill_blank",
        "sentence": "The formal closing signoff of an official letter in Yoruba is: 'Èmi ni tiyín tòótọ́, ___' (Yours faithfully).",
        "missingWord": "tiyín tòótọ́",
        "options": [
          "tiyín tòótọ́",
          "ọ̀rẹ́ rẹ",
          "bàbá rẹ",
          "àbúrò"
        ],
        "correctAnswer": "tiyín tòótọ́",
        "explanation": "'Èmi ni tiyín tòótọ́' is the standard formal closing equivalent to 'Yours faithfully'."
      },
      {
        "id": "y-u12-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the sentence: 'Ẹ̀kọ́ ọmọbìnrin ṣe pàtàkì púpọ̀ sí àwùjọ' (Female education is extremely vital to society):",
        "tokens": [
          "Ẹ̀kọ́",
          "ọmọbìnrin",
          "ṣe",
          "pàtàkì",
          "púpọ̀",
          "sí",
          "àwùjọ"
        ],
        "correctTokens": [
          "Ẹ̀kọ́",
          "ọmọbìnrin",
          "ṣe",
          "pàtàkì",
          "púpọ̀",
          "sí",
          "àwùjọ"
        ]
      },
      {
        "id": "y-u12-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the concluding paragraph of an essay called in Yoruba?",
        "options": [
          "Ìparí",
          "Ìfáàrà",
          "Agbedeméjì",
          "Àkọlé"
        ],
        "correctAnswer": "Ìparí",
        "explanation": "'Ìparí' (the conclusion/ending) wraps up the central arguments of an essay."
      },
      {
        "id": "y-u12-l1-q11",
        "type": "audio_listen",
        "phrase": "Ní àkótán, mo gba ìjọba níyànjú láti pèsè iná mànàmáná",
        "prompt": "Listen to the concluding thesis. What is the writer urging the government to provide?",
        "options": [
          "In conclusion, I urge the government to provide stable electricity",
          "The government should build new farm markets",
          "Doctors should be paid higher salaries",
          "Roads should be expanded immediately"
        ],
        "correctAnswer": "In conclusion, I urge the government to provide stable electricity",
        "explanation": "'Ní àkótán' = In conclusion / summary; 'iná mànàmáná' = electrical power."
      },
      {
        "id": "y-u12-l1-q12",
        "type": "matching",
        "prompt": "Match contemporary civic essay topics in Yoruba:",
        "pairs": [
          {
            "native": "Ìfọwọ́sowọ́pọ̀ fún àlàáfíà orílẹ̀-èdè",
            "english": "Cooperation for national peace and harmony",
            "left": "Ìfọwọ́sowọ́pọ̀ fún àlàáfíà orílẹ̀-èdè",
            "right": "Cooperation for national peace and harmony"
          },
          {
            "native": "Ìtọ́jú àyíká àti ìmọ́tótó",
            "english": "Environmental care and public sanitation",
            "left": "Ìtọ́jú àyíká àti ìmọ́tótó",
            "right": "Environmental care and public sanitation"
          },
          {
            "native": "Ipa tí ẹ̀rọ ayélujára ń kò nínú ẹ̀kọ́",
            "english": "The impact of the internet on education",
            "left": "Ipa tí ẹ̀rọ ayélujára ń kò nínú ẹ̀kọ́",
            "right": "The impact of the internet on education"
          },
          {
            "native": "Bí a ṣe lè dẹ́kun àìríṣẹ́ṣe àwọn ọ̀dọ́",
            "english": "How to curb youth unemployment",
            "left": "Bí a ṣe lè dẹ́kun àìríṣẹ́ṣe àwọn ọ̀dọ́",
            "right": "How to curb youth unemployment"
          }
        ]
      },
      {
        "id": "y-u12-l1-q13",
        "type": "fill_blank",
        "sentence": "The introductory paragraph of an essay is formally designated as '___'.",
        "missingWord": "Ìfáàrà",
        "options": [
          "Ìfáàrà",
          "Ìparí",
          "Àkọlé",
          "Ọ̀rọ̀"
        ],
        "correctAnswer": "Ìfáàrà",
        "explanation": "'Ìfáàrà' is the introduction."
      },
      {
        "id": "y-u12-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the formal title: 'Lẹ́tà Sí Alákòóso Ilé-ìwé fún Ìgbàwọlé' (Letter to the School Principal for Admission):",
        "tokens": [
          "Lẹ́tà",
          "Sí",
          "Alákòóso",
          "Ilé-ìwé",
          "fún",
          "Ìgbàwọlé"
        ],
        "correctTokens": [
          "Lẹ́tà",
          "Sí",
          "Alákòóso",
          "Ilé-ìwé",
          "fún",
          "Ìgbàwọlé"
        ]
      },
      {
        "id": "y-u12-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is an informal letter called in Yoruba?",
        "options": [
          "Lẹ́tà Gbẹ̀fẹ́",
          "Lẹ́tà Àìgbẹ̀fẹ́",
          "Àròkọ ariyiyan",
          "Iwe iroyin"
        ],
        "correctAnswer": "Lẹ́tà Gbẹ̀fẹ́",
        "explanation": "'Lẹ́tà Gbẹ̀fẹ́' is an informal/friendly letter."
      },
      {
        "id": "y-u12-l1-q16",
        "type": "audio_listen",
        "phrase": "Mo kọ lẹ́tà yìí láti sọ fún ọ nípa ìdánwò mi",
        "prompt": "Listen to the letter sentence. What is the writer's topic?",
        "options": [
          "I am writing this letter to inform you about my examination",
          "I am asking you to lend me money",
          "I am traveling to Ibadan next week",
          "My family is moving to another town"
        ],
        "correctAnswer": "I am writing this letter to inform you about my examination",
        "explanation": "'Nípa ìdánwò mi' = about my examination."
      },
      {
        "id": "y-u12-l1-q17",
        "type": "multiple_choice",
        "prompt": "In a formal school debate, what is the motion supporter called?",
        "options": [
          "Olùtìlẹ́yìn àbá (Proposer / Supporter)",
          "Olùkọ̀jú àbá (Opposer)",
          "Adájọ́ (Judge)",
          "Akọ̀wé"
        ],
        "correctAnswer": "Olùtìlẹ́yìn àbá (Proposer / Supporter)",
        "explanation": "'Olùtìlẹ́yìn àbá' is the proposer or supporter of the motion in a debate."
      },
      {
        "id": "y-u12-l1-q18",
        "type": "fill_blank",
        "sentence": "When opening a speech at a formal gathering, one addresses the chairman: 'Àgùnbánirọ̀ Alága, àwọn ___ àti ọlọ́jọ́ ìbínú' (Mr. Chairman, esteemed judges and audience).",
        "missingWord": "adájọ́",
        "options": [
          "adájọ́",
          "akẹ́kọ̀ọ́",
          "olóko",
          "oníṣòwò"
        ],
        "correctAnswer": "adájọ́",
        "explanation": "'Àwọn adájọ́' refers to the judges of the competition/debate."
      },
      {
        "id": "y-u12-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is the core middle body of an essay called in Yoruba?",
        "options": [
          "Agbedeméjì àròkọ / Kókó ọ̀rọ̀",
          "Ìparí",
          "Ìfáàrà",
          "Àkọlé"
        ],
        "correctAnswer": "Agbedeméjì àròkọ / Kókó ọ̀rọ̀",
        "explanation": "'Agbedeméjì' (the middle) contains the main substantive paragraphs."
      },
      {
        "id": "y-u12-l1-q20",
        "type": "matching",
        "prompt": "Match formal debate formulas in Yoruba:",
        "pairs": [
          {
            "native": "Mo fẹsẹ̀ múlẹ̀ láti ti àbá yìí lẹ́yìn",
            "english": "I stand firmly to support this motion",
            "left": "Mo fẹsẹ̀ múlẹ̀ láti ti àbá yìí lẹ́yìn",
            "right": "I stand firmly to support this motion"
          },
          {
            "native": "Àwọn adájọ́ olódodo",
            "english": "Righteous and impartial panel of judges",
            "left": "Àwọn adájọ́ olódodo",
            "right": "Righteous and impartial panel of judges"
          },
          {
            "native": "Olùtọ́jú àkókò",
            "english": "The official timekeeper",
            "left": "Olùtọ́jú àkókò",
            "right": "The official timekeeper"
          },
          {
            "native": "Gbogbo ẹ̀yin olùgbọ́ ọ̀wọ́n",
            "english": "All of you esteemed and honored listeners",
            "left": "Gbogbo ẹ̀yin olùgbọ́ ọ̀wọ́n",
            "right": "All of you esteemed and honored listeners"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-13",
    "unitId": "y-unit-13",
    "unitNumber": 13,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 13: Customs, Rites, and Governance (Àṣà àti Ìṣe Yorùbá)",
    "subtitle": "Rites of passage (Ìkómọjáde, Ìgbéyàwó, Ìsìnkú), monarchical institutions (Ọba, Baálẹ̀, Ọ̀yọ́ Mèsì), and age-grades (Ẹgbẹ́).",
    "icon": "Award",
    "color": "#059669",
    "lessons": [
      {
        "id": "y-u13-l1",
        "title": "Lesson 1: Àṣà Ìkómọjáde, Ìgbéyàwó àti Ìjọba Ọba (Customs, Rites & Royal Institutions)",
        "description": "Explore sacred naming rites and symbolic communion items, traditional marriage (Ìdána/Ìgbéyàwó), monarchical governance, and age groups.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u13-l1-q1",
            "type": "multiple_choice",
            "prompt": "On which day after birth is a newborn infant's traditional naming ceremony (Ìkómọjáde / Ìsọmọlórúkọ) customarily conducted for a boy in Yoruba culture?",
            "options": [
              "On the 9th day (ọjọ́ kẹsàn-án)",
              "On the 7th day (for a girl)",
              "On the 8th day (for twins)",
              "On the 30th day"
            ],
            "correctAnswer": "On the 9th day (ọjọ́ kẹsàn-án)",
            "explanation": "Traditionally, boys were named on the 9th day, girls on the 7th day, and twins on the 8th day (though many modern families celebrate on the 8th day generally)."
          },
          {
            "id": "y-u13-l1-q2",
            "type": "matching",
            "prompt": "Match symbolic items used in Yoruba baby naming (Ìkómọjáde) with their spiritual significances:",
            "pairs": [
              {
                "native": "Oyin (Honey)",
                "english": "Sweetness and joy free of bitterness throughout life",
                "left": "Oyin (Honey)",
                "right": "Sweetness and joy free of bitterness throughout life"
              },
              {
                "native": "Orógbó (Bitter kola)",
                "english": "Longevity, endurance, and flourishing into old age",
                "left": "Orógbó (Bitter kola)",
                "right": "Longevity, endurance, and flourishing into old age"
              },
              {
                "native": "Ataare (Alligator pepper)",
                "english": "Fruitfulness, fecundity, and abundant offspring",
                "left": "Ataare (Alligator pepper)",
                "right": "Fruitfulness, fecundity, and abundant offspring"
              },
              {
                "native": "Omi (Pure water)",
                "english": "Peace, purity, and freedom from enemies (nobody hates water)",
                "left": "Omi (Pure water)",
                "right": "Peace, purity, and freedom from enemies (nobody hates water)"
              }
            ]
          },
          {
            "id": "y-u13-l1-q3",
            "type": "fill_blank",
            "sentence": "The royal sovereign and monarch of an ancient Yoruba kingdom is designated as the '___'.",
            "missingWord": "Ọba",
            "options": [
              "Ọba",
              "Baálẹ̀",
              "Ìjòyè",
              "Ẹgbẹ́"
            ],
            "correctAnswer": "Ọba",
            "explanation": "'Ọba' is the sacred king/monarch in Yoruba kingdoms (e.g. Ọọ̀ni of Ifẹ, Aláàfin of Ọ̀yọ́, Awùjalẹ̀ of Ìjẹ̀bú)."
          },
          {
            "id": "y-u13-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the royal greeting: 'Káábíyèsí, k’ádé pẹ́ lórí, kí bàtà pẹ́ lẹ́sẹ̀' (Your Royal Majesty, may the crown rest long on your head, and shoes on your feet):",
            "tokens": [
              "Káábíyèsí,",
              "k’ádé",
              "pẹ́",
              "lórí,",
              "kí",
              "bàtà",
              "pẹ́",
              "lẹ́sẹ̀"
            ],
            "correctTokens": [
              "Káábíyèsí,",
              "k’ádé",
              "pẹ́",
              "lórí,",
              "kí",
              "bàtà",
              "pẹ́",
              "lẹ́sẹ̀"
            ]
          },
          {
            "id": "y-u13-l1-q5",
            "type": "audio_listen",
            "phrase": "Ìdána jẹ́ apá pàtàkì nínú ìgbéyàwó Yorùbá",
            "prompt": "Listen to the custom description. What is 'Ìdána'?",
            "options": [
              "The traditional engagement and dowry presentation ceremony",
              "The naming ceremony of a child",
              "The coronation of a monarch",
              "A funeral mourning feast"
            ],
            "correctAnswer": "The traditional engagement and dowry presentation ceremony",
            "explanation": "'Ìdána' is the formal engagement ceremony where the groom's family presents traditional dowry gifts and yam tubers."
          },
          {
            "id": "y-u13-l1-q6",
            "type": "multiple_choice",
            "prompt": "Who were the legendary Ọ̀yọ́ Mèsì in the ancient Ọ̀yọ́ Empire?",
            "options": [
              "The supreme Council of Kingmakers and constitutional council of state headed by the Baṣọ̀run",
              "The palace drum players",
              "A merchant guild in Lagos",
              "The imperial army scouts"
            ],
            "correctAnswer": "The supreme Council of Kingmakers and constitutional council of state headed by the Baṣọ̀run",
            "explanation": "The Ọ̀yọ́ Mèsì were the seven noble kingmakers who checked royal power and maintained constitutional equilibrium in Ọ̀yọ́."
          },
          {
            "id": "y-u13-l1-q7",
            "type": "matching",
            "prompt": "Match Yoruba traditional leadership offices:",
            "pairs": [
              {
                "native": "Ọba",
                "english": "Sovereign Crowned Monarch",
                "left": "Ọba",
                "right": "Sovereign Crowned Monarch"
              },
              {
                "native": "Baálẹ̀",
                "english": "Village head / Ruler of an un-crowned town",
                "left": "Baálẹ̀",
                "right": "Village head / Ruler of an un-crowned town"
              },
              {
                "native": "Ìjòyè",
                "english": "Chieftain / Palace cabinet minister",
                "left": "Ìjòyè",
                "right": "Chieftain / Palace cabinet minister"
              },
              {
                "native": "Ìyálójà",
                "english": "Mother of the Market / Head of market women",
                "left": "Ìyálójà",
                "right": "Mother of the Market / Head of market women"
              }
            ]
          },
          {
            "id": "y-u13-l1-q8",
            "type": "fill_blank",
            "sentence": "Names given to children based on the natural circumstances of their birth (like Ìdòwú, Táíwò, Kẹ́hìndé) are called 'Orúkọ ___'.",
            "missingWord": "Àmútọ̀runwá",
            "options": [
              "Àmútọ̀runwá",
              "Àbísọ",
              "Oríkì",
              "Ìnágijẹ"
            ],
            "correctAnswer": "Àmútọ̀runwá",
            "explanation": "'Orúkọ Àmútọ̀runwá' (names brought from heaven) are dictated by circumstantial birth (e.g. twins Táíwò and Kẹ́hìndé)."
          },
          {
            "id": "y-u13-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Táíwò ni àkọ́kọ́ nínú àwọn ìbejì' (Taiwo is the first to arrive among twins):",
            "tokens": [
              "Táíwò",
              "ni",
              "àkọ́kọ́",
              "nínú",
              "àwọn",
              "ìbejì"
            ],
            "correctTokens": [
              "Táíwò",
              "ni",
              "àkọ́kọ́",
              "nínú",
              "àwọn",
              "ìbejì"
            ]
          },
          {
            "id": "y-u13-l1-q10",
            "type": "multiple_choice",
            "prompt": "In Yoruba twin culture (Ìbejì), although Táíwò comes out of the womb first, why is Kẹ́hìndé considered the elder?",
            "options": [
              "Tradition states Kẹ́hìndé sent Táíwò ahead as a scout to inspect the world before coming out",
              "Because Kẹ́hìndé cries louder",
              "Because Táíwò is always shorter",
              "It is determined by a wrestling match"
            ],
            "correctAnswer": "Tradition states Kẹ́hìndé sent Táíwò ahead as a scout to inspect the world before coming out",
            "explanation": "Yoruba philosophy teaches that Kẹ́hìndé sends Táíwò ahead ('tọ́ ayé wò': taste the world), establishing Kẹ́hìndé as the senior."
          },
          {
            "id": "y-u13-l1-q11",
            "type": "audio_listen",
            "phrase": "Ẹgbẹ́ àwọn ọmọdé ni ń ṣe ìmọ́tótó ilú",
            "prompt": "Listen to the civic custom. What responsibility do youth age-grades (Ẹgbẹ́) carry out?",
            "options": [
              "Youth age-grades perform civic sanitation and community town cleaning",
              "Youth age-grades only attend weddings",
              "Youth age-grades are not allowed outside",
              "Youth age-grades crown the king"
            ],
            "correctAnswer": "Youth age-grades perform civic sanitation and community town cleaning",
            "explanation": "Age-grades (Ẹgbẹ́) historically performed essential civic duties: defense, road building, and public sanitation."
          },
          {
            "id": "y-u13-l1-q12",
            "type": "matching",
            "prompt": "Match royal regalia of a Yoruba Ọba:",
            "pairs": [
              {
                "native": "Adé Adéwà (Adé Ilẹ̀kẹ̀)",
                "english": "Beaded Crown with fringe veil shielding the royal face",
                "left": "Adé Adéwà (Adé Ilẹ̀kẹ̀)",
                "right": "Beaded Crown with fringe veil shielding the royal face"
              },
              {
                "native": "Ìrùkẹ̀rẹ̀",
                "english": "Horse-tail flywhisk of majesty and blessing",
                "left": "Ìrùkẹ̀rẹ̀",
                "right": "Horse-tail flywhisk of majesty and blessing"
              },
              {
                "native": "Ọ̀pá Àṣẹ",
                "english": "Royal staff of sovereign authority",
                "left": "Ọ̀pá Àṣẹ",
                "right": "Royal staff of sovereign authority"
              },
              {
                "native": "Bàtà Ilẹ̀kẹ̀",
                "english": "Beaded royal slippers / footwear",
                "left": "Bàtà Ilẹ̀kẹ̀",
                "right": "Beaded royal slippers / footwear"
              }
            ]
          },
          {
            "id": "y-u13-l1-q13",
            "type": "fill_blank",
            "sentence": "Praise poetry celebrating family heritage and personal ancestral valor is termed '___'.",
            "missingWord": "Oríkì",
            "options": [
              "Oríkì",
              "Àlọ́",
              "Ilu",
              "Òwe"
            ],
            "correctAnswer": "Oríkì",
            "explanation": "'Oríkì' is panegyric praise poetry embodying ancestral history, traits, and pride."
          },
          {
            "id": "y-u13-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Aṣọ òkè jẹ́ aṣọ ìbílẹ̀ Yorùbá' (Aso-Oke is the indigenous textile of the Yoruba):",
            "tokens": [
              "Aṣọ",
              "òkè",
              "jẹ́",
              "aṣọ",
              "ìbílẹ̀",
              "Yorùbá"
            ],
            "correctTokens": [
              "Aṣọ",
              "òkè",
              "jẹ́",
              "aṣọ",
              "ìbílẹ̀",
              "Yorùbá"
            ]
          },
          {
            "id": "y-u13-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Egúngún' in traditional Yoruba cultural heritage?",
            "options": [
              "Ancestral masquerade festival commemorating departed forebears and communal blessings",
              "A type of vegetable soup",
              "A wedding ring",
              "A hunting weapon"
            ],
            "correctAnswer": "Ancestral masquerade festival commemorating departed forebears and communal blessings",
            "explanation": "'Egúngún' is the sacred ancestral masquerade institution bridging ancestors (*ará ọ̀run*) with the living."
          },
          {
            "id": "y-u13-l1-q16",
            "type": "audio_listen",
            "phrase": "Aláàfin Ọ̀yọ́ jẹ́ ọba aládé ní ilẹ̀ Yorùbá",
            "prompt": "Listen to the historical statement. Who is the Aláàfin of Ọ̀yọ́?",
            "options": [
              "A paramount crowned monarch of high prestige in Yorubaland",
              "A modern civil court magistrate",
              "A merchant guild leader in Epe",
              "A traditional blacksmith"
            ],
            "correctAnswer": "A paramount crowned monarch of high prestige in Yorubaland",
            "explanation": "The Aláàfin of Ọ̀yọ́ is the imperial crowned sovereign of the historic Ọ̀yọ́ Kingdom."
          },
          {
            "id": "y-u13-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is an 'Orúkọ Ìnágijẹ'?",
            "options": [
              "An affectionate nickname or sobriquet earned through prowess or behavior",
              "A baptismal name",
              "A secret family password",
              "A surname"
            ],
            "correctAnswer": "An affectionate nickname or sobriquet earned through prowess or behavior",
            "explanation": "'Orúkọ Ìnágijẹ' is an earned nickname or alias reflecting notable habits, valor, or personality."
          },
          {
            "id": "y-u13-l1-q18",
            "type": "fill_blank",
            "sentence": "The traditional textile hand-woven on indigenous looms for weddings and coronations is called 'Aṣọ-___'.",
            "missingWord": "Òkè",
            "options": [
              "Òkè",
              "Adirẹ",
              "Ankara",
              "Lace"
            ],
            "correctAnswer": "Òkè",
            "explanation": "'Aṣọ-Òkè' (e.g. Ẹtù, Sányán, Àlàárì) is the classic handwoven textile of prestige."
          },
          {
            "id": "y-u13-l1-q19",
            "type": "multiple_choice",
            "prompt": "What do the bitter kola nuts (orógbó) presented during engagement and naming ceremonies symbolize?",
            "options": [
              "Longevity and thriving into sweet old age",
              "Wealth in currency",
              "Speed in running",
              "Agricultural fertility only"
            ],
            "correctAnswer": "Longevity and thriving into sweet old age",
            "explanation": "'Orógbó gbó k'ólógbó tó kú' — bitter kola symbolizes resilience and ripe old age."
          },
          {
            "id": "y-u13-l1-q20",
            "type": "matching",
            "prompt": "Match varieties of prestigious Aṣọ-Òkè textiles:",
            "pairs": [
              {
                "native": "Sányán",
                "english": "Shimmering silk-cotton khaki textile (the king of Aṣọ-Òkè)",
                "left": "Sányán",
                "right": "Shimmering silk-cotton khaki textile (the king of Aṣọ-Òkè)"
              },
              {
                "native": "Àlàárì",
                "english": "Deep crimson / scarlet woven cloth",
                "left": "Àlàárì",
                "right": "Deep crimson / scarlet woven cloth"
              },
              {
                "native": "Ẹtù",
                "english": "Deep indigo blue/black cloth resembling guinea-fowl feathers",
                "left": "Ẹtù",
                "right": "Deep indigo blue/black cloth resembling guinea-fowl feathers"
              },
              {
                "native": "Adirẹ",
                "english": "Indigo-resist patterned dyed textile of Abeokuta",
                "left": "Adirẹ",
                "right": "Indigo-resist patterned dyed textile of Abeokuta"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u13-l1-q1",
        "type": "multiple_choice",
        "prompt": "On which day after birth is a newborn infant's traditional naming ceremony (Ìkómọjáde / Ìsọmọlórúkọ) customarily conducted for a boy in Yoruba culture?",
        "options": [
          "On the 9th day (ọjọ́ kẹsàn-án)",
          "On the 7th day (for a girl)",
          "On the 8th day (for twins)",
          "On the 30th day"
        ],
        "correctAnswer": "On the 9th day (ọjọ́ kẹsàn-án)",
        "explanation": "Traditionally, boys were named on the 9th day, girls on the 7th day, and twins on the 8th day (though many modern families celebrate on the 8th day generally)."
      },
      {
        "id": "y-u13-l1-q2",
        "type": "matching",
        "prompt": "Match symbolic items used in Yoruba baby naming (Ìkómọjáde) with their spiritual significances:",
        "pairs": [
          {
            "native": "Oyin (Honey)",
            "english": "Sweetness and joy free of bitterness throughout life",
            "left": "Oyin (Honey)",
            "right": "Sweetness and joy free of bitterness throughout life"
          },
          {
            "native": "Orógbó (Bitter kola)",
            "english": "Longevity, endurance, and flourishing into old age",
            "left": "Orógbó (Bitter kola)",
            "right": "Longevity, endurance, and flourishing into old age"
          },
          {
            "native": "Ataare (Alligator pepper)",
            "english": "Fruitfulness, fecundity, and abundant offspring",
            "left": "Ataare (Alligator pepper)",
            "right": "Fruitfulness, fecundity, and abundant offspring"
          },
          {
            "native": "Omi (Pure water)",
            "english": "Peace, purity, and freedom from enemies (nobody hates water)",
            "left": "Omi (Pure water)",
            "right": "Peace, purity, and freedom from enemies (nobody hates water)"
          }
        ]
      },
      {
        "id": "y-u13-l1-q3",
        "type": "fill_blank",
        "sentence": "The royal sovereign and monarch of an ancient Yoruba kingdom is designated as the '___'.",
        "missingWord": "Ọba",
        "options": [
          "Ọba",
          "Baálẹ̀",
          "Ìjòyè",
          "Ẹgbẹ́"
        ],
        "correctAnswer": "Ọba",
        "explanation": "'Ọba' is the sacred king/monarch in Yoruba kingdoms (e.g. Ọọ̀ni of Ifẹ, Aláàfin of Ọ̀yọ́, Awùjalẹ̀ of Ìjẹ̀bú)."
      },
      {
        "id": "y-u13-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the royal greeting: 'Káábíyèsí, k’ádé pẹ́ lórí, kí bàtà pẹ́ lẹ́sẹ̀' (Your Royal Majesty, may the crown rest long on your head, and shoes on your feet):",
        "tokens": [
          "Káábíyèsí,",
          "k’ádé",
          "pẹ́",
          "lórí,",
          "kí",
          "bàtà",
          "pẹ́",
          "lẹ́sẹ̀"
        ],
        "correctTokens": [
          "Káábíyèsí,",
          "k’ádé",
          "pẹ́",
          "lórí,",
          "kí",
          "bàtà",
          "pẹ́",
          "lẹ́sẹ̀"
        ]
      },
      {
        "id": "y-u13-l1-q5",
        "type": "audio_listen",
        "phrase": "Ìdána jẹ́ apá pàtàkì nínú ìgbéyàwó Yorùbá",
        "prompt": "Listen to the custom description. What is 'Ìdána'?",
        "options": [
          "The traditional engagement and dowry presentation ceremony",
          "The naming ceremony of a child",
          "The coronation of a monarch",
          "A funeral mourning feast"
        ],
        "correctAnswer": "The traditional engagement and dowry presentation ceremony",
        "explanation": "'Ìdána' is the formal engagement ceremony where the groom's family presents traditional dowry gifts and yam tubers."
      },
      {
        "id": "y-u13-l1-q6",
        "type": "multiple_choice",
        "prompt": "Who were the legendary Ọ̀yọ́ Mèsì in the ancient Ọ̀yọ́ Empire?",
        "options": [
          "The supreme Council of Kingmakers and constitutional council of state headed by the Baṣọ̀run",
          "The palace drum players",
          "A merchant guild in Lagos",
          "The imperial army scouts"
        ],
        "correctAnswer": "The supreme Council of Kingmakers and constitutional council of state headed by the Baṣọ̀run",
        "explanation": "The Ọ̀yọ́ Mèsì were the seven noble kingmakers who checked royal power and maintained constitutional equilibrium in Ọ̀yọ́."
      },
      {
        "id": "y-u13-l1-q7",
        "type": "matching",
        "prompt": "Match Yoruba traditional leadership offices:",
        "pairs": [
          {
            "native": "Ọba",
            "english": "Sovereign Crowned Monarch",
            "left": "Ọba",
            "right": "Sovereign Crowned Monarch"
          },
          {
            "native": "Baálẹ̀",
            "english": "Village head / Ruler of an un-crowned town",
            "left": "Baálẹ̀",
            "right": "Village head / Ruler of an un-crowned town"
          },
          {
            "native": "Ìjòyè",
            "english": "Chieftain / Palace cabinet minister",
            "left": "Ìjòyè",
            "right": "Chieftain / Palace cabinet minister"
          },
          {
            "native": "Ìyálójà",
            "english": "Mother of the Market / Head of market women",
            "left": "Ìyálójà",
            "right": "Mother of the Market / Head of market women"
          }
        ]
      },
      {
        "id": "y-u13-l1-q8",
        "type": "fill_blank",
        "sentence": "Names given to children based on the natural circumstances of their birth (like Ìdòwú, Táíwò, Kẹ́hìndé) are called 'Orúkọ ___'.",
        "missingWord": "Àmútọ̀runwá",
        "options": [
          "Àmútọ̀runwá",
          "Àbísọ",
          "Oríkì",
          "Ìnágijẹ"
        ],
        "correctAnswer": "Àmútọ̀runwá",
        "explanation": "'Orúkọ Àmútọ̀runwá' (names brought from heaven) are dictated by circumstantial birth (e.g. twins Táíwò and Kẹ́hìndé)."
      },
      {
        "id": "y-u13-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Táíwò ni àkọ́kọ́ nínú àwọn ìbejì' (Taiwo is the first to arrive among twins):",
        "tokens": [
          "Táíwò",
          "ni",
          "àkọ́kọ́",
          "nínú",
          "àwọn",
          "ìbejì"
        ],
        "correctTokens": [
          "Táíwò",
          "ni",
          "àkọ́kọ́",
          "nínú",
          "àwọn",
          "ìbejì"
        ]
      },
      {
        "id": "y-u13-l1-q10",
        "type": "multiple_choice",
        "prompt": "In Yoruba twin culture (Ìbejì), although Táíwò comes out of the womb first, why is Kẹ́hìndé considered the elder?",
        "options": [
          "Tradition states Kẹ́hìndé sent Táíwò ahead as a scout to inspect the world before coming out",
          "Because Kẹ́hìndé cries louder",
          "Because Táíwò is always shorter",
          "It is determined by a wrestling match"
        ],
        "correctAnswer": "Tradition states Kẹ́hìndé sent Táíwò ahead as a scout to inspect the world before coming out",
        "explanation": "Yoruba philosophy teaches that Kẹ́hìndé sends Táíwò ahead ('tọ́ ayé wò': taste the world), establishing Kẹ́hìndé as the senior."
      },
      {
        "id": "y-u13-l1-q11",
        "type": "audio_listen",
        "phrase": "Ẹgbẹ́ àwọn ọmọdé ni ń ṣe ìmọ́tótó ilú",
        "prompt": "Listen to the civic custom. What responsibility do youth age-grades (Ẹgbẹ́) carry out?",
        "options": [
          "Youth age-grades perform civic sanitation and community town cleaning",
          "Youth age-grades only attend weddings",
          "Youth age-grades are not allowed outside",
          "Youth age-grades crown the king"
        ],
        "correctAnswer": "Youth age-grades perform civic sanitation and community town cleaning",
        "explanation": "Age-grades (Ẹgbẹ́) historically performed essential civic duties: defense, road building, and public sanitation."
      },
      {
        "id": "y-u13-l1-q12",
        "type": "matching",
        "prompt": "Match royal regalia of a Yoruba Ọba:",
        "pairs": [
          {
            "native": "Adé Adéwà (Adé Ilẹ̀kẹ̀)",
            "english": "Beaded Crown with fringe veil shielding the royal face",
            "left": "Adé Adéwà (Adé Ilẹ̀kẹ̀)",
            "right": "Beaded Crown with fringe veil shielding the royal face"
          },
          {
            "native": "Ìrùkẹ̀rẹ̀",
            "english": "Horse-tail flywhisk of majesty and blessing",
            "left": "Ìrùkẹ̀rẹ̀",
            "right": "Horse-tail flywhisk of majesty and blessing"
          },
          {
            "native": "Ọ̀pá Àṣẹ",
            "english": "Royal staff of sovereign authority",
            "left": "Ọ̀pá Àṣẹ",
            "right": "Royal staff of sovereign authority"
          },
          {
            "native": "Bàtà Ilẹ̀kẹ̀",
            "english": "Beaded royal slippers / footwear",
            "left": "Bàtà Ilẹ̀kẹ̀",
            "right": "Beaded royal slippers / footwear"
          }
        ]
      },
      {
        "id": "y-u13-l1-q13",
        "type": "fill_blank",
        "sentence": "Praise poetry celebrating family heritage and personal ancestral valor is termed '___'.",
        "missingWord": "Oríkì",
        "options": [
          "Oríkì",
          "Àlọ́",
          "Ilu",
          "Òwe"
        ],
        "correctAnswer": "Oríkì",
        "explanation": "'Oríkì' is panegyric praise poetry embodying ancestral history, traits, and pride."
      },
      {
        "id": "y-u13-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Aṣọ òkè jẹ́ aṣọ ìbílẹ̀ Yorùbá' (Aso-Oke is the indigenous textile of the Yoruba):",
        "tokens": [
          "Aṣọ",
          "òkè",
          "jẹ́",
          "aṣọ",
          "ìbílẹ̀",
          "Yorùbá"
        ],
        "correctTokens": [
          "Aṣọ",
          "òkè",
          "jẹ́",
          "aṣọ",
          "ìbílẹ̀",
          "Yorùbá"
        ]
      },
      {
        "id": "y-u13-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Egúngún' in traditional Yoruba cultural heritage?",
        "options": [
          "Ancestral masquerade festival commemorating departed forebears and communal blessings",
          "A type of vegetable soup",
          "A wedding ring",
          "A hunting weapon"
        ],
        "correctAnswer": "Ancestral masquerade festival commemorating departed forebears and communal blessings",
        "explanation": "'Egúngún' is the sacred ancestral masquerade institution bridging ancestors (*ará ọ̀run*) with the living."
      },
      {
        "id": "y-u13-l1-q16",
        "type": "audio_listen",
        "phrase": "Aláàfin Ọ̀yọ́ jẹ́ ọba aládé ní ilẹ̀ Yorùbá",
        "prompt": "Listen to the historical statement. Who is the Aláàfin of Ọ̀yọ́?",
        "options": [
          "A paramount crowned monarch of high prestige in Yorubaland",
          "A modern civil court magistrate",
          "A merchant guild leader in Epe",
          "A traditional blacksmith"
        ],
        "correctAnswer": "A paramount crowned monarch of high prestige in Yorubaland",
        "explanation": "The Aláàfin of Ọ̀yọ́ is the imperial crowned sovereign of the historic Ọ̀yọ́ Kingdom."
      },
      {
        "id": "y-u13-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is an 'Orúkọ Ìnágijẹ'?",
        "options": [
          "An affectionate nickname or sobriquet earned through prowess or behavior",
          "A baptismal name",
          "A secret family password",
          "A surname"
        ],
        "correctAnswer": "An affectionate nickname or sobriquet earned through prowess or behavior",
        "explanation": "'Orúkọ Ìnágijẹ' is an earned nickname or alias reflecting notable habits, valor, or personality."
      },
      {
        "id": "y-u13-l1-q18",
        "type": "fill_blank",
        "sentence": "The traditional textile hand-woven on indigenous looms for weddings and coronations is called 'Aṣọ-___'.",
        "missingWord": "Òkè",
        "options": [
          "Òkè",
          "Adirẹ",
          "Ankara",
          "Lace"
        ],
        "correctAnswer": "Òkè",
        "explanation": "'Aṣọ-Òkè' (e.g. Ẹtù, Sányán, Àlàárì) is the classic handwoven textile of prestige."
      },
      {
        "id": "y-u13-l1-q19",
        "type": "multiple_choice",
        "prompt": "What do the bitter kola nuts (orógbó) presented during engagement and naming ceremonies symbolize?",
        "options": [
          "Longevity and thriving into sweet old age",
          "Wealth in currency",
          "Speed in running",
          "Agricultural fertility only"
        ],
        "correctAnswer": "Longevity and thriving into sweet old age",
        "explanation": "'Orógbó gbó k'ólógbó tó kú' — bitter kola symbolizes resilience and ripe old age."
      },
      {
        "id": "y-u13-l1-q20",
        "type": "matching",
        "prompt": "Match varieties of prestigious Aṣọ-Òkè textiles:",
        "pairs": [
          {
            "native": "Sányán",
            "english": "Shimmering silk-cotton khaki textile (the king of Aṣọ-Òkè)",
            "left": "Sányán",
            "right": "Shimmering silk-cotton khaki textile (the king of Aṣọ-Òkè)"
          },
          {
            "native": "Àlàárì",
            "english": "Deep crimson / scarlet woven cloth",
            "left": "Àlàárì",
            "right": "Deep crimson / scarlet woven cloth"
          },
          {
            "native": "Ẹtù",
            "english": "Deep indigo blue/black cloth resembling guinea-fowl feathers",
            "left": "Ẹtù",
            "right": "Deep indigo blue/black cloth resembling guinea-fowl feathers"
          },
          {
            "native": "Adirẹ",
            "english": "Indigo-resist patterned dyed textile of Abeokuta",
            "left": "Adirẹ",
            "right": "Indigo-resist patterned dyed textile of Abeokuta"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-14",
    "unitId": "y-unit-14",
    "unitNumber": 14,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 14: Yoruba Literature: Prose, Drama, and Poetry (Lítíréṣọ̀ Yorùbá)",
    "subtitle": "Classic prose (D.O. Fagunwa, Adebayo Faleti), oral poetry (Oríkì, Ẹsẹ Ifá, Ìjálá Ọdẹ), and theatrical drama.",
    "icon": "Book",
    "color": "#059669",
    "lessons": [
      {
        "id": "y-u14-l1",
        "title": "Lesson 1: Lítíréṣọ̀ Aláfọwọ́kọ àti Ti-Ẹnu (Written & Oral Literary Masterpieces)",
        "description": "Analyze seminal fantasy epics by D.O. Fagunwa, historical drama (Ẹfúnṣetán Aníwúrà), hunters’ poetry (Ìjálá), and divination verses (Ẹsẹ Ifá).",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u14-l1-q1",
            "type": "multiple_choice",
            "prompt": "Who authored the monumental fantasy-quest epic 'Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀' published in 1938?",
            "options": [
              "Chief D.O. Fagunwa",
              "Adebayo Faleti",
              "Akinwumi Isola",
              "Wole Soyinka"
            ],
            "correctAnswer": "Chief D.O. Fagunwa",
            "explanation": "Chief Daniel Olorunfemi Fagunwa wrote 'Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀' (translated by Wole Soyinka as 'The Forest of a Thousand Daemons')."
          },
          {
            "id": "y-u14-l1-q2",
            "type": "matching",
            "prompt": "Match classic Yoruba literary masterworks with their celebrated authors:",
            "pairs": [
              {
                "native": "Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀",
                "english": "D.O. Fagunwa's pioneer mythological adventure epic",
                "left": "Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀",
                "right": "D.O. Fagunwa's pioneer mythological adventure epic"
              },
              {
                "native": "Ọmọ Olókùn Ẹṣin",
                "english": "Adebayo Faleti's novel of freedom and resistance against oppression",
                "left": "Ọmọ Olókùn Ẹṣin",
                "right": "Adebayo Faleti's novel of freedom and resistance against oppression"
              },
              {
                "native": "Ẹfúnṣetán Aníwúrà",
                "english": "Prof. Akinwumi Isola's powerful historical tragedy play",
                "left": "Ẹfúnṣetán Aníwúrà",
                "right": "Prof. Akinwumi Isola's powerful historical tragedy play"
              },
              {
                "native": "Àyànmọ́",
                "english": "D.O. Fagunwa's celebrated philosophical novel of human destiny",
                "left": "Àyànmọ́",
                "right": "D.O. Fagunwa's celebrated philosophical novel of human destiny"
              }
            ]
          },
          {
            "id": "y-u14-l1-q3",
            "type": "fill_blank",
            "sentence": "Hunters' specialized oral poetry chanted in adoration of Ògún and heroic forest exploits is known as '___'.",
            "missingWord": "Ìjálá",
            "options": [
              "Ìjálá",
              "Ẹsẹ Ifá",
              "Rárà",
              "Àlọ́"
            ],
            "correctAnswer": "Ìjálá",
            "explanation": "'Ìjálá' (or Ìjálá Ọdẹ) is the energetic poetic chant of Yoruba guild hunters."
          },
          {
            "id": "y-u14-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words: 'D.O. Fagunwa jẹ́ aṣáájú nínú ìwé àròsọ Yorùbá' (D.O. Fagunwa is a pioneer in Yoruba prose fiction):",
            "tokens": [
              "D.O.",
              "Fagunwa",
              "jẹ́",
              "aṣáájú",
              "nínú",
              "ìwé",
              "àròsọ",
              "Yorùbá"
            ],
            "correctTokens": [
              "D.O.",
              "Fagunwa",
              "jẹ́",
              "aṣáájú",
              "nínú",
              "ìwé",
              "àròsọ",
              "Yorùbá"
            ]
          },
          {
            "id": "y-u14-l1-q5",
            "type": "audio_listen",
            "phrase": "Ẹsẹ Ifá jẹ́ ọ̀rọ̀ ọgbọ́n àti ìmọ̀ àtijọ́",
            "prompt": "Listen to the genre description. What is 'Ẹsẹ Ifá'?",
            "options": [
              "The sacred divination poetic corpus containing ancient wisdom, philosophy, and history",
              "War songs sung by youths",
              "Lullabies sung to babies",
              "Market bargaining songs"
            ],
            "correctAnswer": "The sacred divination poetic corpus containing ancient wisdom, philosophy, and history",
            "explanation": "Ẹsẹ Ifá is a monumental encyclopedic oral poetry corpus recognized by UNESCO as intangible cultural heritage."
          },
          {
            "id": "y-u14-l1-q6",
            "type": "multiple_choice",
            "prompt": "What historical title did Ẹfúnṣetán Aníwúrà hold in 19th-century Ibadan before her tragic defiance of Ààrẹ Látòósà?",
            "options": [
              "Ìyálójà of Ibadan",
              "Iyalode of Ibadan (Supreme leader of women)",
              "Ọba",
              "Balógun"
            ],
            "correctAnswer": "Iyalode of Ibadan (Supreme leader of women)",
            "explanation": "Ẹfúnṣetán Aníwúrà was the formidable, wealthy second Iyalode of Ibadan dramatized in Akinwumi Isola's classic play."
          },
          {
            "id": "y-u14-l1-q7",
            "type": "matching",
            "prompt": "Match Yoruba traditional musical and poetic drums with descriptions:",
            "pairs": [
              {
                "native": "Dùndún (Gángan)",
                "english": "Talking drum capable of mimicking speech tones and singing proverbs",
                "left": "Dùndún (Gángan)",
                "right": "Talking drum capable of mimicking speech tones and singing proverbs"
              },
              {
                "native": "Bàtá",
                "english": "Athletic sacred conico-cylindrical drums of Ṣàngó and Egúngún",
                "left": "Bàtá",
                "right": "Athletic sacred conico-cylindrical drums of Ṣàngó and Egúngún"
              },
              {
                "native": "Gbedu",
                "english": "Gigantic state drum reserved strictly for the Ọba and Ògbóni royal council",
                "left": "Gbedu",
                "right": "Gigantic state drum reserved strictly for the Ọba and Ògbóni royal council"
              },
              {
                "native": "Sẹ̀kẹ̀rẹ̀",
                "english": "Beaded gourd rattle producing bright shaking percussive polyrhythms",
                "left": "Sẹ̀kẹ̀rẹ̀",
                "right": "Beaded gourd rattle producing bright shaking percussive polyrhythms"
              }
            ]
          },
          {
            "id": "y-u14-l1-q8",
            "type": "fill_blank",
            "sentence": "The foundational matrix of the Ifá literary divination corpus consists of ___ principal Odù (Odù Méjì).",
            "missingWord": "16 (Mẹ́rìndínlógún)",
            "options": [
              "16 (Mẹ́rìndínlógún)",
              "256",
              "10",
              "4"
            ],
            "correctAnswer": "16 (Mẹ́rìndínlógún)",
            "explanation": "There are 16 major Odù (Òjìyàkò / Ojú Odù), which combine to form the 256 Odù Ifá."
          },
          {
            "id": "y-u14-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Akárínbàbá jẹ́ akọni nínú ìwé Fagunwa' (Akárínbàbá is a hero in Fagunwa's novel):",
            "tokens": [
              "Akárínbàbá",
              "jẹ́",
              "akọni",
              "nínú",
              "ìwé",
              "Fagunwa"
            ],
            "correctTokens": [
              "Akárínbàbá",
              "jẹ́",
              "akọni",
              "nínú",
              "ìwé",
              "Fagunwa"
            ]
          },
          {
            "id": "y-u14-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is 'Oríkì' in Yoruba oral poetry?",
            "options": [
              "Praise poetry and ancestral panegyrics celebrating an individual, lineage, town, or Orisa",
              "A bedtime ghost story",
              "A funeral prayer book",
              "A political newspaper"
            ],
            "correctAnswer": "Praise poetry and ancestral panegyrics celebrating an individual, lineage, town, or Orisa",
            "explanation": "'Oríkì' is the most ubiquitous and emotionally powerful genre of Yoruba praise chanting."
          },
          {
            "id": "y-u14-l1-q11",
            "type": "audio_listen",
            "phrase": "Ẹni tí ń gbọ́ oríkì rẹ̀, orí rẹ̀ a wú",
            "prompt": "Listen to the saying. How does a person feel when their Oríkì (praise poetry) is chanted?",
            "options": [
              "Their inner head/spirit swells with profound ancestral pride and valor",
              "They become confused and angry",
              "They fall asleep immediately",
              "They forget their home town"
            ],
            "correctAnswer": "Their inner head/spirit swells with profound ancestral pride and valor",
            "explanation": "'Orí rẹ̀ a wú' (their head swells) metaphorically describes being transported with pride and inspiration."
          },
          {
            "id": "y-u14-l1-q12",
            "type": "matching",
            "prompt": "Match Yoruba poetic classifications:",
            "pairs": [
              {
                "native": "Oríkì",
                "english": "Panegyric praise chanting",
                "left": "Oríkì",
                "right": "Panegyric praise chanting"
              },
              {
                "native": "Ìjálá",
                "english": "Hunters' heroic chants to Ògún",
                "left": "Ìjálá",
                "right": "Hunters' heroic chants to Ògún"
              },
              {
                "native": "Ẹsẹ Ifá",
                "english": "Divination verses of Ọ̀rúnmìlà",
                "left": "Ẹsẹ Ifá",
                "right": "Divination verses of Ọ̀rúnmìlà"
              },
              {
                "native": "Ẹwì",
                "english": "Modern written and spoken word poetry",
                "left": "Ẹwì",
                "right": "Modern written and spoken word poetry"
              }
            ]
          },
          {
            "id": "y-u14-l1-q13",
            "type": "fill_blank",
            "sentence": "The talking drum whose pitch mimics human speech to chant Oríkì and royal proverbs is the '___'.",
            "missingWord": "Gángan / Dùndún",
            "options": [
              "Gángan / Dùndún",
              "Bàtá",
              "Sẹ̀kẹ̀rẹ̀",
              "Ọ̀pá"
            ],
            "correctAnswer": "Gángan / Dùndún",
            "explanation": "The 'Dùndún' or 'Gángan' tension hourglass drum talks by tightening strings to adjust pitch."
          },
          {
            "id": "y-u14-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Akinwumi Isọla kọ eré oníṣe tó gbajúmọ̀' (Akinwumi Isola wrote famous theatrical plays):",
            "tokens": [
              "Akinwumi",
              "Isọla",
              "kọ",
              "eré",
              "oníṣe",
              "tó",
              "gbajúmọ̀"
            ],
            "correctTokens": [
              "Akinwumi",
              "Isọla",
              "kọ",
              "eré",
              "oníṣe",
              "tó",
              "gbajúmọ̀"
            ]
          },
          {
            "id": "y-u14-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is theatrical drama called in Yoruba literary studies?",
            "options": [
              "Eré oníṣe / Tíátà",
              "Ìtàn àròsọ",
              "Ẹwì",
              "Àlọ́"
            ],
            "correctAnswer": "Eré oníṣe / Tíátà",
            "explanation": "'Eré oníṣe' (literally: play of actors) is theatrical drama."
          },
          {
            "id": "y-u14-l1-q16",
            "type": "audio_listen",
            "phrase": "Àwọn òṣèré orí ìtàgé ń ṣe eré oníṣe",
            "prompt": "Listen to the description. Who are performing on stage?",
            "options": [
              "Actors and performers on the theatrical stage",
              "Hunters chasing wild animals in the forest",
              "Market women selling fruits",
              "Fishermen mending nets by the sea"
            ],
            "correctAnswer": "Actors and performers on the theatrical stage",
            "explanation": "'Àwọn òṣèré orí ìtàgé' = stage actors/performers; 'eré oníṣe' = theatrical drama."
          },
          {
            "id": "y-u14-l1-q17",
            "type": "multiple_choice",
            "prompt": "Who was the renowned pioneering father of modern Yoruba travelling theatre (Alárìnjó) and folk opera?",
            "options": [
              "Chief Hubert Ogunde",
              "D.O. Fagunwa",
              "Kola Ogunmola",
              "Duro Ladipo"
            ],
            "correctAnswer": "Chief Hubert Ogunde",
            "explanation": "Chief Hubert Ogunde (1916–1990) was the legendary founder of modern professional Nigerian and Yoruba theatre."
          },
          {
            "id": "y-u14-l1-q18",
            "type": "fill_blank",
            "sentence": "In literature, the main hero or central protagonist of a story is termed '___' (akọni).",
            "missingWord": "Olú-ẹ̀dá",
            "options": [
              "Olú-ẹ̀dá",
              "Oǹkọ̀wé",
              "Adájọ́",
              "Ọ̀tá"
            ],
            "correctAnswer": "Olú-ẹ̀dá",
            "explanation": "'Olú-ẹ̀dá' is the central character/protagonist of a literary work."
          },
          {
            "id": "y-u14-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is Duro Ladipo's internationally acclaimed classical tragic drama that won the Berlin Commonwealth Arts Festival?",
            "options": [
              "Ọba Kò So (The King Did Not Hang)",
              "Ẹfúnṣetán Aníwúrà",
              "Ògbójú Ọdẹ",
              "Aiye"
            ],
            "correctAnswer": "Ọba Kò So (The King Did Not Hang)",
            "explanation": "Duro Ladipo's masterwork 'Ọba Kò So' portrays the tragic apotheosis of Alaafin Ṣàngó into the thunder divinity."
          },
          {
            "id": "y-u14-l1-q20",
            "type": "matching",
            "prompt": "Match literary critical terms in Yoruba:",
            "pairs": [
              {
                "native": "Olú-ẹ̀dá",
                "english": "Protagonist / Central character",
                "left": "Olú-ẹ̀dá",
                "right": "Protagonist / Central character"
              },
              {
                "native": "Ẹ̀dá-ìtàn",
                "english": "Characters in a play or novel",
                "left": "Ẹ̀dá-ìtàn",
                "right": "Characters in a play or novel"
              },
              {
                "native": "Ibùdó ìtàn",
                "english": "Setting of the story (time and place)",
                "left": "Ibùdó ìtàn",
                "right": "Setting of the story (time and place)"
              },
              {
                "native": "Kókó ọ̀rọ̀",
                "english": "Central theme / Moral motif",
                "left": "Kókó ọ̀rọ̀",
                "right": "Central theme / Moral motif"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u14-l1-q1",
        "type": "multiple_choice",
        "prompt": "Who authored the monumental fantasy-quest epic 'Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀' published in 1938?",
        "options": [
          "Chief D.O. Fagunwa",
          "Adebayo Faleti",
          "Akinwumi Isola",
          "Wole Soyinka"
        ],
        "correctAnswer": "Chief D.O. Fagunwa",
        "explanation": "Chief Daniel Olorunfemi Fagunwa wrote 'Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀' (translated by Wole Soyinka as 'The Forest of a Thousand Daemons')."
      },
      {
        "id": "y-u14-l1-q2",
        "type": "matching",
        "prompt": "Match classic Yoruba literary masterworks with their celebrated authors:",
        "pairs": [
          {
            "native": "Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀",
            "english": "D.O. Fagunwa's pioneer mythological adventure epic",
            "left": "Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀",
            "right": "D.O. Fagunwa's pioneer mythological adventure epic"
          },
          {
            "native": "Ọmọ Olókùn Ẹṣin",
            "english": "Adebayo Faleti's novel of freedom and resistance against oppression",
            "left": "Ọmọ Olókùn Ẹṣin",
            "right": "Adebayo Faleti's novel of freedom and resistance against oppression"
          },
          {
            "native": "Ẹfúnṣetán Aníwúrà",
            "english": "Prof. Akinwumi Isola's powerful historical tragedy play",
            "left": "Ẹfúnṣetán Aníwúrà",
            "right": "Prof. Akinwumi Isola's powerful historical tragedy play"
          },
          {
            "native": "Àyànmọ́",
            "english": "D.O. Fagunwa's celebrated philosophical novel of human destiny",
            "left": "Àyànmọ́",
            "right": "D.O. Fagunwa's celebrated philosophical novel of human destiny"
          }
        ]
      },
      {
        "id": "y-u14-l1-q3",
        "type": "fill_blank",
        "sentence": "Hunters' specialized oral poetry chanted in adoration of Ògún and heroic forest exploits is known as '___'.",
        "missingWord": "Ìjálá",
        "options": [
          "Ìjálá",
          "Ẹsẹ Ifá",
          "Rárà",
          "Àlọ́"
        ],
        "correctAnswer": "Ìjálá",
        "explanation": "'Ìjálá' (or Ìjálá Ọdẹ) is the energetic poetic chant of Yoruba guild hunters."
      },
      {
        "id": "y-u14-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words: 'D.O. Fagunwa jẹ́ aṣáájú nínú ìwé àròsọ Yorùbá' (D.O. Fagunwa is a pioneer in Yoruba prose fiction):",
        "tokens": [
          "D.O.",
          "Fagunwa",
          "jẹ́",
          "aṣáájú",
          "nínú",
          "ìwé",
          "àròsọ",
          "Yorùbá"
        ],
        "correctTokens": [
          "D.O.",
          "Fagunwa",
          "jẹ́",
          "aṣáájú",
          "nínú",
          "ìwé",
          "àròsọ",
          "Yorùbá"
        ]
      },
      {
        "id": "y-u14-l1-q5",
        "type": "audio_listen",
        "phrase": "Ẹsẹ Ifá jẹ́ ọ̀rọ̀ ọgbọ́n àti ìmọ̀ àtijọ́",
        "prompt": "Listen to the genre description. What is 'Ẹsẹ Ifá'?",
        "options": [
          "The sacred divination poetic corpus containing ancient wisdom, philosophy, and history",
          "War songs sung by youths",
          "Lullabies sung to babies",
          "Market bargaining songs"
        ],
        "correctAnswer": "The sacred divination poetic corpus containing ancient wisdom, philosophy, and history",
        "explanation": "Ẹsẹ Ifá is a monumental encyclopedic oral poetry corpus recognized by UNESCO as intangible cultural heritage."
      },
      {
        "id": "y-u14-l1-q6",
        "type": "multiple_choice",
        "prompt": "What historical title did Ẹfúnṣetán Aníwúrà hold in 19th-century Ibadan before her tragic defiance of Ààrẹ Látòósà?",
        "options": [
          "Ìyálójà of Ibadan",
          "Iyalode of Ibadan (Supreme leader of women)",
          "Ọba",
          "Balógun"
        ],
        "correctAnswer": "Iyalode of Ibadan (Supreme leader of women)",
        "explanation": "Ẹfúnṣetán Aníwúrà was the formidable, wealthy second Iyalode of Ibadan dramatized in Akinwumi Isola's classic play."
      },
      {
        "id": "y-u14-l1-q7",
        "type": "matching",
        "prompt": "Match Yoruba traditional musical and poetic drums with descriptions:",
        "pairs": [
          {
            "native": "Dùndún (Gángan)",
            "english": "Talking drum capable of mimicking speech tones and singing proverbs",
            "left": "Dùndún (Gángan)",
            "right": "Talking drum capable of mimicking speech tones and singing proverbs"
          },
          {
            "native": "Bàtá",
            "english": "Athletic sacred conico-cylindrical drums of Ṣàngó and Egúngún",
            "left": "Bàtá",
            "right": "Athletic sacred conico-cylindrical drums of Ṣàngó and Egúngún"
          },
          {
            "native": "Gbedu",
            "english": "Gigantic state drum reserved strictly for the Ọba and Ògbóni royal council",
            "left": "Gbedu",
            "right": "Gigantic state drum reserved strictly for the Ọba and Ògbóni royal council"
          },
          {
            "native": "Sẹ̀kẹ̀rẹ̀",
            "english": "Beaded gourd rattle producing bright shaking percussive polyrhythms",
            "left": "Sẹ̀kẹ̀rẹ̀",
            "right": "Beaded gourd rattle producing bright shaking percussive polyrhythms"
          }
        ]
      },
      {
        "id": "y-u14-l1-q8",
        "type": "fill_blank",
        "sentence": "The foundational matrix of the Ifá literary divination corpus consists of ___ principal Odù (Odù Méjì).",
        "missingWord": "16 (Mẹ́rìndínlógún)",
        "options": [
          "16 (Mẹ́rìndínlógún)",
          "256",
          "10",
          "4"
        ],
        "correctAnswer": "16 (Mẹ́rìndínlógún)",
        "explanation": "There are 16 major Odù (Òjìyàkò / Ojú Odù), which combine to form the 256 Odù Ifá."
      },
      {
        "id": "y-u14-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Akárínbàbá jẹ́ akọni nínú ìwé Fagunwa' (Akárínbàbá is a hero in Fagunwa's novel):",
        "tokens": [
          "Akárínbàbá",
          "jẹ́",
          "akọni",
          "nínú",
          "ìwé",
          "Fagunwa"
        ],
        "correctTokens": [
          "Akárínbàbá",
          "jẹ́",
          "akọni",
          "nínú",
          "ìwé",
          "Fagunwa"
        ]
      },
      {
        "id": "y-u14-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is 'Oríkì' in Yoruba oral poetry?",
        "options": [
          "Praise poetry and ancestral panegyrics celebrating an individual, lineage, town, or Orisa",
          "A bedtime ghost story",
          "A funeral prayer book",
          "A political newspaper"
        ],
        "correctAnswer": "Praise poetry and ancestral panegyrics celebrating an individual, lineage, town, or Orisa",
        "explanation": "'Oríkì' is the most ubiquitous and emotionally powerful genre of Yoruba praise chanting."
      },
      {
        "id": "y-u14-l1-q11",
        "type": "audio_listen",
        "phrase": "Ẹni tí ń gbọ́ oríkì rẹ̀, orí rẹ̀ a wú",
        "prompt": "Listen to the saying. How does a person feel when their Oríkì (praise poetry) is chanted?",
        "options": [
          "Their inner head/spirit swells with profound ancestral pride and valor",
          "They become confused and angry",
          "They fall asleep immediately",
          "They forget their home town"
        ],
        "correctAnswer": "Their inner head/spirit swells with profound ancestral pride and valor",
        "explanation": "'Orí rẹ̀ a wú' (their head swells) metaphorically describes being transported with pride and inspiration."
      },
      {
        "id": "y-u14-l1-q12",
        "type": "matching",
        "prompt": "Match Yoruba poetic classifications:",
        "pairs": [
          {
            "native": "Oríkì",
            "english": "Panegyric praise chanting",
            "left": "Oríkì",
            "right": "Panegyric praise chanting"
          },
          {
            "native": "Ìjálá",
            "english": "Hunters' heroic chants to Ògún",
            "left": "Ìjálá",
            "right": "Hunters' heroic chants to Ògún"
          },
          {
            "native": "Ẹsẹ Ifá",
            "english": "Divination verses of Ọ̀rúnmìlà",
            "left": "Ẹsẹ Ifá",
            "right": "Divination verses of Ọ̀rúnmìlà"
          },
          {
            "native": "Ẹwì",
            "english": "Modern written and spoken word poetry",
            "left": "Ẹwì",
            "right": "Modern written and spoken word poetry"
          }
        ]
      },
      {
        "id": "y-u14-l1-q13",
        "type": "fill_blank",
        "sentence": "The talking drum whose pitch mimics human speech to chant Oríkì and royal proverbs is the '___'.",
        "missingWord": "Gángan / Dùndún",
        "options": [
          "Gángan / Dùndún",
          "Bàtá",
          "Sẹ̀kẹ̀rẹ̀",
          "Ọ̀pá"
        ],
        "correctAnswer": "Gángan / Dùndún",
        "explanation": "The 'Dùndún' or 'Gángan' tension hourglass drum talks by tightening strings to adjust pitch."
      },
      {
        "id": "y-u14-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Akinwumi Isọla kọ eré oníṣe tó gbajúmọ̀' (Akinwumi Isola wrote famous theatrical plays):",
        "tokens": [
          "Akinwumi",
          "Isọla",
          "kọ",
          "eré",
          "oníṣe",
          "tó",
          "gbajúmọ̀"
        ],
        "correctTokens": [
          "Akinwumi",
          "Isọla",
          "kọ",
          "eré",
          "oníṣe",
          "tó",
          "gbajúmọ̀"
        ]
      },
      {
        "id": "y-u14-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is theatrical drama called in Yoruba literary studies?",
        "options": [
          "Eré oníṣe / Tíátà",
          "Ìtàn àròsọ",
          "Ẹwì",
          "Àlọ́"
        ],
        "correctAnswer": "Eré oníṣe / Tíátà",
        "explanation": "'Eré oníṣe' (literally: play of actors) is theatrical drama."
      },
      {
        "id": "y-u14-l1-q16",
        "type": "audio_listen",
        "phrase": "Àwọn òṣèré orí ìtàgé ń ṣe eré oníṣe",
        "prompt": "Listen to the description. Who are performing on stage?",
        "options": [
          "Actors and performers on the theatrical stage",
          "Hunters chasing wild animals in the forest",
          "Market women selling fruits",
          "Fishermen mending nets by the sea"
        ],
        "correctAnswer": "Actors and performers on the theatrical stage",
        "explanation": "'Àwọn òṣèré orí ìtàgé' = stage actors/performers; 'eré oníṣe' = theatrical drama."
      },
      {
        "id": "y-u14-l1-q17",
        "type": "multiple_choice",
        "prompt": "Who was the renowned pioneering father of modern Yoruba travelling theatre (Alárìnjó) and folk opera?",
        "options": [
          "Chief Hubert Ogunde",
          "D.O. Fagunwa",
          "Kola Ogunmola",
          "Duro Ladipo"
        ],
        "correctAnswer": "Chief Hubert Ogunde",
        "explanation": "Chief Hubert Ogunde (1916–1990) was the legendary founder of modern professional Nigerian and Yoruba theatre."
      },
      {
        "id": "y-u14-l1-q18",
        "type": "fill_blank",
        "sentence": "In literature, the main hero or central protagonist of a story is termed '___' (akọni).",
        "missingWord": "Olú-ẹ̀dá",
        "options": [
          "Olú-ẹ̀dá",
          "Oǹkọ̀wé",
          "Adájọ́",
          "Ọ̀tá"
        ],
        "correctAnswer": "Olú-ẹ̀dá",
        "explanation": "'Olú-ẹ̀dá' is the central character/protagonist of a literary work."
      },
      {
        "id": "y-u14-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is Duro Ladipo's internationally acclaimed classical tragic drama that won the Berlin Commonwealth Arts Festival?",
        "options": [
          "Ọba Kò So (The King Did Not Hang)",
          "Ẹfúnṣetán Aníwúrà",
          "Ògbójú Ọdẹ",
          "Aiye"
        ],
        "correctAnswer": "Ọba Kò So (The King Did Not Hang)",
        "explanation": "Duro Ladipo's masterwork 'Ọba Kò So' portrays the tragic apotheosis of Alaafin Ṣàngó into the thunder divinity."
      },
      {
        "id": "y-u14-l1-q20",
        "type": "matching",
        "prompt": "Match literary critical terms in Yoruba:",
        "pairs": [
          {
            "native": "Olú-ẹ̀dá",
            "english": "Protagonist / Central character",
            "left": "Olú-ẹ̀dá",
            "right": "Protagonist / Central character"
          },
          {
            "native": "Ẹ̀dá-ìtàn",
            "english": "Characters in a play or novel",
            "left": "Ẹ̀dá-ìtàn",
            "right": "Characters in a play or novel"
          },
          {
            "native": "Ibùdó ìtàn",
            "english": "Setting of the story (time and place)",
            "left": "Ibùdó ìtàn",
            "right": "Setting of the story (time and place)"
          },
          {
            "native": "Kókó ọ̀rọ̀",
            "english": "Central theme / Moral motif",
            "left": "Kókó ọ̀rọ̀",
            "right": "Central theme / Moral motif"
          }
        ]
      }
    ]
  },
  {
    "id": "y-unit-15",
    "unitId": "y-unit-15",
    "unitNumber": 15,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 15: Translation, Proverbs, and Idiomatic Expressions (Òwe àti Àkànlò Èdè)",
    "subtitle": "Proverbial eloquence (Òwe lẹṣin ọ̀rọ̀), deep idioms (Àkànlò Èdè), and technical translation registers.",
    "icon": "Globe",
    "color": "#059669",
    "lessons": [
      {
        "id": "y-u15-l1",
        "title": "Lesson 1: Ìtumọ̀ Èdè, Òwe àti Àkànlò Èdè Yorùbá (Translation, Proverbs & Idioms)",
        "description": "Master dynamic translation methodologies, deep idioms (Àkànlò Èdè), philosophical proverbs (Òwe), and modern media/tech registers.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "y-u15-l1-q1",
            "type": "multiple_choice",
            "prompt": "What does the iconic proverb 'Òwe lẹṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sọnù, òwe la fi ń wá a' establish about Yoruba discourse?",
            "options": [
              "Proverbs are the horse of speech; when communication is lost or unclear, proverbs illuminate and recover the true meaning",
              "Horses are sacred animals that must be praised",
              "Never speak when riding a horse",
              "Speech without grammar cannot be understood"
            ],
            "correctAnswer": "Proverbs are the horse of speech; when communication is lost or unclear, proverbs illuminate and recover the true meaning",
            "explanation": "This classic proverb defines the supreme philosophical and communicative status of proverbs in Yoruba eloquence."
          },
          {
            "id": "y-u15-l1-q2",
            "type": "matching",
            "prompt": "Match deep idioms (Àkànlò Èdè) with their metaphorical meanings:",
            "pairs": [
              {
                "native": "Tẹrígàsàn",
                "english": "To die / Pass away",
                "left": "Tẹrígàsàn",
                "right": "To die / Pass away"
              },
              {
                "native": "Ṣojú kòkòrò",
                "english": "To be excessively greedy / Covetous",
                "left": "Ṣojú kòkòrò",
                "right": "To be excessively greedy / Covetous"
              },
              {
                "native": "Fẹsẹ̀ fẹ́ẹ",
                "english": "To flee rapidly in fear / Run for dear life",
                "left": "Fẹsẹ̀ fẹ́ẹ",
                "right": "To flee rapidly in fear / Run for dear life"
              },
              {
                "native": "Fọwọ́ rọ́rí",
                "english": "To be plunged into destitution / Deep grief",
                "left": "Fọwọ́ rọ́rí",
                "right": "To be plunged into destitution / Deep grief"
              }
            ]
          },
          {
            "id": "y-u15-l1-q3",
            "type": "fill_blank",
            "sentence": "An idiom or figurative speech form in Yoruba is designated as '___'.",
            "missingWord": "Àkànlò Èdè",
            "options": [
              "Àkànlò Èdè",
              "Òwe",
              "Àlọ́",
              "Álífábẹ́ẹ̀tì"
            ],
            "correctAnswer": "Àkànlò Èdè",
            "explanation": "'Àkànlò Èdè' is the technical term for an idiomatic expression."
          },
          {
            "id": "y-u15-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the idiom: 'Ó gbé owó lé orí' (He placed hands on his head in loud lamentation/grief):",
            "tokens": [
              "Ó",
              "gbé",
              "owó",
              "lé",
              "orí"
            ],
            "correctTokens": [
              "Ó",
              "gbé",
              "owó",
              "lé",
              "orí"
            ]
          },
          {
            "id": "y-u15-l1-q5",
            "type": "audio_listen",
            "phrase": "Kò sí ohun tí ó wà lẹ́yìn ọ̀rọ̀ yìí mọ́",
            "prompt": "Listen to the statement. What does it emphasize?",
            "options": [
              "There is no hidden secret remaining behind this matter (The full truth is out)",
              "The speaker is telling a lie",
              "The matter will be settled tomorrow",
              "Nobody knows what happened"
            ],
            "correctAnswer": "There is no hidden secret remaining behind this matter (The full truth is out)",
            "explanation": "'Kò sí ohun tí ó wà lẹ́yìn...' = There is nothing left hidden behind this matter."
          },
          {
            "id": "y-u15-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does the idiom 'Gbé orí bẹ́rẹ́' mean in behavioral etiquette?",
            "options": [
              "To humble oneself / Bow modestly",
              "To get a haircut",
              "To wear a heavy crown",
              "To sleep face down"
            ],
            "correctAnswer": "To humble oneself / Bow modestly",
            "explanation": "'Gbé orí bẹ́rẹ́' (lowering one's head) metaphorically means adopting a humble, respectful posture."
          },
          {
            "id": "y-u15-l1-q7",
            "type": "matching",
            "prompt": "Match deep idioms related to social behavior:",
            "pairs": [
              {
                "native": "Gbéni gúbú",
                "english": "To mislead someone completely / Deceive into error",
                "left": "Gbéni gúbú",
                "right": "To mislead someone completely / Deceive into error"
              },
              {
                "native": "Fa etí rẹ",
                "english": "To caution someone sternly / Warn by pulling the ear",
                "left": "Fa etí rẹ",
                "right": "To caution someone sternly / Warn by pulling the ear"
              },
              {
                "native": "Pa ohùn pọ̀",
                "english": "To speak with unanimous consensus / Agreement",
                "left": "Pa ohùn pọ̀",
                "right": "To speak with unanimous consensus / Agreement"
              },
              {
                "native": "Rẹ́rìn-ín ẹ̀wẹ̀kà",
                "english": "To smile deceitfully / Mocking grin",
                "left": "Rẹ́rìn-ín ẹ̀wẹ̀kà",
                "right": "To smile deceitfully / Mocking grin"
              }
            ]
          },
          {
            "id": "y-u15-l1-q8",
            "type": "fill_blank",
            "sentence": "When translating text, dynamic translation that conveys the authentic cultural meaning is termed 'Ìtumọ̀ ___' (Sense-for-sense translation).",
            "missingWord": "àgbọ́yé",
            "options": [
              "àgbọ́yé",
              "ọ̀rọ̀-sí-ọ̀rọ̀",
              "àkọlé",
              "ìwé"
            ],
            "correctAnswer": "àgbọ́yé",
            "explanation": "'Ìtumọ̀ àgbọ́yé' is sense-for-sense translation capturing true cultural comprehension."
          },
          {
            "id": "y-u15-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Èdè Yorùbá kún fún ọ̀pọ̀lọpọ̀ ọgbọ́n' (The Yoruba language is replete with abundant wisdom):",
            "tokens": [
              "Èdè",
              "Yorùbá",
              "kún",
              "fún",
              "ọ̀pọ̀lọpọ̀",
              "ọgbọ́n"
            ],
            "correctTokens": [
              "Èdè",
              "Yorùbá",
              "kún",
              "fún",
              "ọ̀pọ̀lọpọ̀",
              "ọgbọ́n"
            ]
          },
          {
            "id": "y-u15-l1-q10",
            "type": "multiple_choice",
            "prompt": "How is 'Artificial Intelligence' (AI) appropriately translated into contemporary technical Yoruba?",
            "options": [
              "Ọpọlọ Àtọwọ́dá Ẹ̀rọ / Ìmọ̀ Ẹ̀rọ Tó Lóye Nǹkan",
              "Iná mànàmáná",
              "Àlọ́ kọ̀mpútà",
              "Ẹ̀rọ ìbánisọ̀rọ̀"
            ],
            "correctAnswer": "Ọpọlọ Àtọwọ́dá Ẹ̀rọ / Ìmọ̀ Ẹ̀rọ Tó Lóye Nǹkan",
            "explanation": "'Ọpọlọ Àtọwọ́dá' (artificial brain / intelligence) is the standard modern technical term for AI."
          },
          {
            "id": "y-u15-l1-q11",
            "type": "audio_listen",
            "phrase": "Ilé ẹjọ́ gíga jùlọ ní orílẹ̀-èdè Naìjíríà",
            "prompt": "Listen to the legal phrase. Which institution is being referred to?",
            "options": [
              "The Supreme Court of the Federal Republic of Nigeria",
              "The Federal Ministry of Finance",
              "The National Assembly in Abuja",
              "The Central Police Headquarters"
            ],
            "correctAnswer": "The Supreme Court of the Federal Republic of Nigeria",
            "explanation": "'Ilé ẹjọ́ gíga jùlọ' directly translates to the Supreme Court."
          },
          {
            "id": "y-u15-l1-q12",
            "type": "matching",
            "prompt": "Match modern democratic and civic terminology in Yoruba:",
            "pairs": [
              {
                "native": "Ìwé Òfin Orílẹ̀-èdè",
                "english": "National Constitution",
                "left": "Ìwé Òfin Orílẹ̀-èdè",
                "right": "National Constitution"
              },
              {
                "native": "Ilé Ìgbìmọ̀ Aṣòfin",
                "english": "Legislative Parliament / House of Assembly",
                "left": "Ilé Ìgbìmọ̀ Aṣòfin",
                "right": "Legislative Parliament / House of Assembly"
              },
              {
                "native": "Ìjọba tiwa-n-tiwa",
                "english": "Democracy (governance of the people by the people)",
                "left": "Ìjọba tiwa-n-tiwa",
                "right": "Democracy (governance of the people by the people)"
              },
              {
                "native": "Ìbò",
                "english": "Vote / Ballot / Democratic election",
                "left": "Ìbò",
                "right": "Vote / Ballot / Democratic election"
              }
            ]
          },
          {
            "id": "y-u15-l1-q13",
            "type": "fill_blank",
            "sentence": "Literal word-for-word translation that produces awkward mechanical phrasing is called 'Ìtumọ̀ ọ̀rọ̀-sí-___'.",
            "missingWord": "ọ̀rọ̀",
            "options": [
              "ọ̀rọ̀",
              "òwe",
              "ìwé",
              "ilú"
            ],
            "correctAnswer": "ọ̀rọ̀",
            "explanation": "'Ìtumọ̀ ọ̀rọ̀-sí-ọ̀rọ̀' (word-for-word translation) often destroys natural idiomatic flow."
          },
          {
            "id": "y-u15-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the headline: 'Gómìnà kéde ètò tuntun fún ẹ̀kọ́ ọ̀fẹ́' (The governor announced a new free education programme):",
            "tokens": [
              "Gómìnà",
              "kéde",
              "ètò",
              "tuntun",
              "fún",
              "ẹ̀kọ́",
              "ọ̀fẹ́"
            ],
            "correctTokens": [
              "Gómìnà",
              "kéde",
              "ètò",
              "tuntun",
              "fún",
              "ẹ̀kọ́",
              "ọ̀fẹ́"
            ]
          },
          {
            "id": "y-u15-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does the idiom 'Fi ọwọ́ mú iná' mean?",
            "options": [
              "To court extreme danger / Play with fire",
              "To cook food on the stove",
              "To build a furnace",
              "To ignite a torch"
            ],
            "correctAnswer": "To court extreme danger / Play with fire",
            "explanation": "'Fi ọwọ́ mú iná' (holding fire with bare hands) is an idiom for recklessly courting peril."
          },
          {
            "id": "y-u15-l1-q16",
            "type": "audio_listen",
            "phrase": "Ọ̀rọ̀ ajé orílẹ̀-èdè ń gbé pẹ́rẹ́",
            "prompt": "Listen to the economic report. What trend is described?",
            "options": [
              "The national economy is steadily stabilizing and rebounding",
              "Inflation has broken all records",
              "Commercial banks have ceased operations",
              "All markets have closed due to strikes"
            ],
            "correctAnswer": "The national economy is steadily stabilizing and rebounding",
            "explanation": "'Ọ̀rọ̀ ajé' = economy; 'ń gbé pẹ́rẹ́' = is stabilizing / regaining strength."
          },
          {
            "id": "y-u15-l1-q17",
            "type": "multiple_choice",
            "prompt": "Who was Bishop Samuel Ajayi Crowther in the history of standard Yoruba literature and translation?",
            "options": [
              "The pioneer scholar who reduced standard Yoruba to writing and translated the Holy Bible into Yoruba in the 19th century",
              "A traditional hunter of Ibadan",
              "A colonial railway engineer",
              "A 20th-century radio broadcaster"
            ],
            "correctAnswer": "The pioneer scholar who reduced standard Yoruba to writing and translated the Holy Bible into Yoruba in the 19th century",
            "explanation": "Bishop Samuel Ajayi Crowther (1809–1891) codified standard Yoruba grammar, vocabulary, and translated the Bible (*Bíbélì Mímọ́*)."
          },
          {
            "id": "y-u15-l1-q18",
            "type": "fill_blank",
            "sentence": "In journalistic broadcasting, the United Nations is translated as 'Àjọ Ìṣọ̀kan Àwọn Orílẹ̀-èdè ___'.",
            "missingWord": "Àgbáyé",
            "options": [
              "Àgbáyé",
              "Nàìjíríà",
              "Adúláwọ̀",
              "Ẹgbẹ́"
            ],
            "correctAnswer": "Àgbáyé",
            "explanation": "'Àjọ Ìṣọ̀kan Àwọn Orílẹ̀-èdè Àgbáyé' is the official translation for the United Nations."
          },
          {
            "id": "y-u15-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does the proverb 'Àgbájọ ọwọ́ la fi ń sọ̀yà, àjèjì ọwọ́ kan kò lè gbé ẹrù dé orí' teach?",
            "options": [
              "Collective community solidarity is required to overcome massive burdens",
              "One should carry loads on the head",
              "Rich people should buy trucks",
              "Never carry goods without help"
            ],
            "correctAnswer": "Collective community solidarity is required to overcome massive burdens",
            "explanation": "This classic proverb counsels that solitary effort cannot lift overwhelming civic burdens without communal unity."
          },
          {
            "id": "y-u15-l1-q20",
            "type": "matching",
            "prompt": "Match modern economic vocabulary in Yoruba journalism:",
            "pairs": [
              {
                "native": "Gọ́bọ̀i ètò ọ̀rọ̀-ajé",
                "english": "Inflation (Skyrocketing cost of goods and services)",
                "left": "Gọ́bọ̀i ètò ọ̀rọ̀-ajé",
                "right": "Inflation (Skyrocketing cost of goods and services)"
              },
              {
                "native": "Owó tí ń wọlé",
                "english": "Public revenue / Income earnings",
                "left": "Owó tí ń wọlé",
                "right": "Public revenue / Income earnings"
              },
              {
                "native": "Ọjà àkópọ̀ iṣòwò",
                "english": "Stock exchange / Capital market",
                "left": "Ọjà àkópọ̀ iṣòwò",
                "right": "Ọjà àkópọ̀ iṣòwò"
              },
              {
                "native": "Owó pàṣípààrọ̀",
                "english": "Foreign currency exchange rate",
                "left": "Owó pàṣípààrọ̀",
                "right": "Foreign currency exchange rate"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "y-u15-l1-q1",
        "type": "multiple_choice",
        "prompt": "What does the iconic proverb 'Òwe lẹṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sọnù, òwe la fi ń wá a' establish about Yoruba discourse?",
        "options": [
          "Proverbs are the horse of speech; when communication is lost or unclear, proverbs illuminate and recover the true meaning",
          "Horses are sacred animals that must be praised",
          "Never speak when riding a horse",
          "Speech without grammar cannot be understood"
        ],
        "correctAnswer": "Proverbs are the horse of speech; when communication is lost or unclear, proverbs illuminate and recover the true meaning",
        "explanation": "This classic proverb defines the supreme philosophical and communicative status of proverbs in Yoruba eloquence."
      },
      {
        "id": "y-u15-l1-q2",
        "type": "matching",
        "prompt": "Match deep idioms (Àkànlò Èdè) with their metaphorical meanings:",
        "pairs": [
          {
            "native": "Tẹrígàsàn",
            "english": "To die / Pass away",
            "left": "Tẹrígàsàn",
            "right": "To die / Pass away"
          },
          {
            "native": "Ṣojú kòkòrò",
            "english": "To be excessively greedy / Covetous",
            "left": "Ṣojú kòkòrò",
            "right": "To be excessively greedy / Covetous"
          },
          {
            "native": "Fẹsẹ̀ fẹ́ẹ",
            "english": "To flee rapidly in fear / Run for dear life",
            "left": "Fẹsẹ̀ fẹ́ẹ",
            "right": "To flee rapidly in fear / Run for dear life"
          },
          {
            "native": "Fọwọ́ rọ́rí",
            "english": "To be plunged into destitution / Deep grief",
            "left": "Fọwọ́ rọ́rí",
            "right": "To be plunged into destitution / Deep grief"
          }
        ]
      },
      {
        "id": "y-u15-l1-q3",
        "type": "fill_blank",
        "sentence": "An idiom or figurative speech form in Yoruba is designated as '___'.",
        "missingWord": "Àkànlò Èdè",
        "options": [
          "Àkànlò Èdè",
          "Òwe",
          "Àlọ́",
          "Álífábẹ́ẹ̀tì"
        ],
        "correctAnswer": "Àkànlò Èdè",
        "explanation": "'Àkànlò Èdè' is the technical term for an idiomatic expression."
      },
      {
        "id": "y-u15-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the idiom: 'Ó gbé owó lé orí' (He placed hands on his head in loud lamentation/grief):",
        "tokens": [
          "Ó",
          "gbé",
          "owó",
          "lé",
          "orí"
        ],
        "correctTokens": [
          "Ó",
          "gbé",
          "owó",
          "lé",
          "orí"
        ]
      },
      {
        "id": "y-u15-l1-q5",
        "type": "audio_listen",
        "phrase": "Kò sí ohun tí ó wà lẹ́yìn ọ̀rọ̀ yìí mọ́",
        "prompt": "Listen to the statement. What does it emphasize?",
        "options": [
          "There is no hidden secret remaining behind this matter (The full truth is out)",
          "The speaker is telling a lie",
          "The matter will be settled tomorrow",
          "Nobody knows what happened"
        ],
        "correctAnswer": "There is no hidden secret remaining behind this matter (The full truth is out)",
        "explanation": "'Kò sí ohun tí ó wà lẹ́yìn...' = There is nothing left hidden behind this matter."
      },
      {
        "id": "y-u15-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does the idiom 'Gbé orí bẹ́rẹ́' mean in behavioral etiquette?",
        "options": [
          "To humble oneself / Bow modestly",
          "To get a haircut",
          "To wear a heavy crown",
          "To sleep face down"
        ],
        "correctAnswer": "To humble oneself / Bow modestly",
        "explanation": "'Gbé orí bẹ́rẹ́' (lowering one's head) metaphorically means adopting a humble, respectful posture."
      },
      {
        "id": "y-u15-l1-q7",
        "type": "matching",
        "prompt": "Match deep idioms related to social behavior:",
        "pairs": [
          {
            "native": "Gbéni gúbú",
            "english": "To mislead someone completely / Deceive into error",
            "left": "Gbéni gúbú",
            "right": "To mislead someone completely / Deceive into error"
          },
          {
            "native": "Fa etí rẹ",
            "english": "To caution someone sternly / Warn by pulling the ear",
            "left": "Fa etí rẹ",
            "right": "To caution someone sternly / Warn by pulling the ear"
          },
          {
            "native": "Pa ohùn pọ̀",
            "english": "To speak with unanimous consensus / Agreement",
            "left": "Pa ohùn pọ̀",
            "right": "To speak with unanimous consensus / Agreement"
          },
          {
            "native": "Rẹ́rìn-ín ẹ̀wẹ̀kà",
            "english": "To smile deceitfully / Mocking grin",
            "left": "Rẹ́rìn-ín ẹ̀wẹ̀kà",
            "right": "To smile deceitfully / Mocking grin"
          }
        ]
      },
      {
        "id": "y-u15-l1-q8",
        "type": "fill_blank",
        "sentence": "When translating text, dynamic translation that conveys the authentic cultural meaning is termed 'Ìtumọ̀ ___' (Sense-for-sense translation).",
        "missingWord": "àgbọ́yé",
        "options": [
          "àgbọ́yé",
          "ọ̀rọ̀-sí-ọ̀rọ̀",
          "àkọlé",
          "ìwé"
        ],
        "correctAnswer": "àgbọ́yé",
        "explanation": "'Ìtumọ̀ àgbọ́yé' is sense-for-sense translation capturing true cultural comprehension."
      },
      {
        "id": "y-u15-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Èdè Yorùbá kún fún ọ̀pọ̀lọpọ̀ ọgbọ́n' (The Yoruba language is replete with abundant wisdom):",
        "tokens": [
          "Èdè",
          "Yorùbá",
          "kún",
          "fún",
          "ọ̀pọ̀lọpọ̀",
          "ọgbọ́n"
        ],
        "correctTokens": [
          "Èdè",
          "Yorùbá",
          "kún",
          "fún",
          "ọ̀pọ̀lọpọ̀",
          "ọgbọ́n"
        ]
      },
      {
        "id": "y-u15-l1-q10",
        "type": "multiple_choice",
        "prompt": "How is 'Artificial Intelligence' (AI) appropriately translated into contemporary technical Yoruba?",
        "options": [
          "Ọpọlọ Àtọwọ́dá Ẹ̀rọ / Ìmọ̀ Ẹ̀rọ Tó Lóye Nǹkan",
          "Iná mànàmáná",
          "Àlọ́ kọ̀mpútà",
          "Ẹ̀rọ ìbánisọ̀rọ̀"
        ],
        "correctAnswer": "Ọpọlọ Àtọwọ́dá Ẹ̀rọ / Ìmọ̀ Ẹ̀rọ Tó Lóye Nǹkan",
        "explanation": "'Ọpọlọ Àtọwọ́dá' (artificial brain / intelligence) is the standard modern technical term for AI."
      },
      {
        "id": "y-u15-l1-q11",
        "type": "audio_listen",
        "phrase": "Ilé ẹjọ́ gíga jùlọ ní orílẹ̀-èdè Naìjíríà",
        "prompt": "Listen to the legal phrase. Which institution is being referred to?",
        "options": [
          "The Supreme Court of the Federal Republic of Nigeria",
          "The Federal Ministry of Finance",
          "The National Assembly in Abuja",
          "The Central Police Headquarters"
        ],
        "correctAnswer": "The Supreme Court of the Federal Republic of Nigeria",
        "explanation": "'Ilé ẹjọ́ gíga jùlọ' directly translates to the Supreme Court."
      },
      {
        "id": "y-u15-l1-q12",
        "type": "matching",
        "prompt": "Match modern democratic and civic terminology in Yoruba:",
        "pairs": [
          {
            "native": "Ìwé Òfin Orílẹ̀-èdè",
            "english": "National Constitution",
            "left": "Ìwé Òfin Orílẹ̀-èdè",
            "right": "National Constitution"
          },
          {
            "native": "Ilé Ìgbìmọ̀ Aṣòfin",
            "english": "Legislative Parliament / House of Assembly",
            "left": "Ilé Ìgbìmọ̀ Aṣòfin",
            "right": "Legislative Parliament / House of Assembly"
          },
          {
            "native": "Ìjọba tiwa-n-tiwa",
            "english": "Democracy (governance of the people by the people)",
            "left": "Ìjọba tiwa-n-tiwa",
            "right": "Democracy (governance of the people by the people)"
          },
          {
            "native": "Ìbò",
            "english": "Vote / Ballot / Democratic election",
            "left": "Ìbò",
            "right": "Vote / Ballot / Democratic election"
          }
        ]
      },
      {
        "id": "y-u15-l1-q13",
        "type": "fill_blank",
        "sentence": "Literal word-for-word translation that produces awkward mechanical phrasing is called 'Ìtumọ̀ ọ̀rọ̀-sí-___'.",
        "missingWord": "ọ̀rọ̀",
        "options": [
          "ọ̀rọ̀",
          "òwe",
          "ìwé",
          "ilú"
        ],
        "correctAnswer": "ọ̀rọ̀",
        "explanation": "'Ìtumọ̀ ọ̀rọ̀-sí-ọ̀rọ̀' (word-for-word translation) often destroys natural idiomatic flow."
      },
      {
        "id": "y-u15-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the headline: 'Gómìnà kéde ètò tuntun fún ẹ̀kọ́ ọ̀fẹ́' (The governor announced a new free education programme):",
        "tokens": [
          "Gómìnà",
          "kéde",
          "ètò",
          "tuntun",
          "fún",
          "ẹ̀kọ́",
          "ọ̀fẹ́"
        ],
        "correctTokens": [
          "Gómìnà",
          "kéde",
          "ètò",
          "tuntun",
          "fún",
          "ẹ̀kọ́",
          "ọ̀fẹ́"
        ]
      },
      {
        "id": "y-u15-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does the idiom 'Fi ọwọ́ mú iná' mean?",
        "options": [
          "To court extreme danger / Play with fire",
          "To cook food on the stove",
          "To build a furnace",
          "To ignite a torch"
        ],
        "correctAnswer": "To court extreme danger / Play with fire",
        "explanation": "'Fi ọwọ́ mú iná' (holding fire with bare hands) is an idiom for recklessly courting peril."
      },
      {
        "id": "y-u15-l1-q16",
        "type": "audio_listen",
        "phrase": "Ọ̀rọ̀ ajé orílẹ̀-èdè ń gbé pẹ́rẹ́",
        "prompt": "Listen to the economic report. What trend is described?",
        "options": [
          "The national economy is steadily stabilizing and rebounding",
          "Inflation has broken all records",
          "Commercial banks have ceased operations",
          "All markets have closed due to strikes"
        ],
        "correctAnswer": "The national economy is steadily stabilizing and rebounding",
        "explanation": "'Ọ̀rọ̀ ajé' = economy; 'ń gbé pẹ́rẹ́' = is stabilizing / regaining strength."
      },
      {
        "id": "y-u15-l1-q17",
        "type": "multiple_choice",
        "prompt": "Who was Bishop Samuel Ajayi Crowther in the history of standard Yoruba literature and translation?",
        "options": [
          "The pioneer scholar who reduced standard Yoruba to writing and translated the Holy Bible into Yoruba in the 19th century",
          "A traditional hunter of Ibadan",
          "A colonial railway engineer",
          "A 20th-century radio broadcaster"
        ],
        "correctAnswer": "The pioneer scholar who reduced standard Yoruba to writing and translated the Holy Bible into Yoruba in the 19th century",
        "explanation": "Bishop Samuel Ajayi Crowther (1809–1891) codified standard Yoruba grammar, vocabulary, and translated the Bible (*Bíbélì Mímọ́*)."
      },
      {
        "id": "y-u15-l1-q18",
        "type": "fill_blank",
        "sentence": "In journalistic broadcasting, the United Nations is translated as 'Àjọ Ìṣọ̀kan Àwọn Orílẹ̀-èdè ___'.",
        "missingWord": "Àgbáyé",
        "options": [
          "Àgbáyé",
          "Nàìjíríà",
          "Adúláwọ̀",
          "Ẹgbẹ́"
        ],
        "correctAnswer": "Àgbáyé",
        "explanation": "'Àjọ Ìṣọ̀kan Àwọn Orílẹ̀-èdè Àgbáyé' is the official translation for the United Nations."
      },
      {
        "id": "y-u15-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does the proverb 'Àgbájọ ọwọ́ la fi ń sọ̀yà, àjèjì ọwọ́ kan kò lè gbé ẹrù dé orí' teach?",
        "options": [
          "Collective community solidarity is required to overcome massive burdens",
          "One should carry loads on the head",
          "Rich people should buy trucks",
          "Never carry goods without help"
        ],
        "correctAnswer": "Collective community solidarity is required to overcome massive burdens",
        "explanation": "This classic proverb counsels that solitary effort cannot lift overwhelming civic burdens without communal unity."
      },
      {
        "id": "y-u15-l1-q20",
        "type": "matching",
        "prompt": "Match modern economic vocabulary in Yoruba journalism:",
        "pairs": [
          {
            "native": "Gọ́bọ̀i ètò ọ̀rọ̀-ajé",
            "english": "Inflation (Skyrocketing cost of goods and services)",
            "left": "Gọ́bọ̀i ètò ọ̀rọ̀-ajé",
            "right": "Inflation (Skyrocketing cost of goods and services)"
          },
          {
            "native": "Owó tí ń wọlé",
            "english": "Public revenue / Income earnings",
            "left": "Owó tí ń wọlé",
            "right": "Public revenue / Income earnings"
          },
          {
            "native": "Ọjà àkópọ̀ iṣòwò",
            "english": "Stock exchange / Capital market",
            "left": "Ọjà àkópọ̀ iṣòwò",
            "right": "Ọjà àkópọ̀ iṣòwò"
          },
          {
            "native": "Owó pàṣípààrọ̀",
            "english": "Foreign currency exchange rate",
            "left": "Owó pàṣípààrọ̀",
            "right": "Foreign currency exchange rate"
          }
        ]
      }
    ]
  }
];
