// NERDC-Aligned Igbo Curriculum Bank (Mkpụrụedemede Igbo / Ọnwụ Orthography)
// 15 Units across 3 Levels (Beginner, Intermediate, Advanced)
// Exactly 20 Questions per Unit/Lesson = 300 Questions Total
// Fully conforms to NERDC standard benchmarks, Ọnwụ orthography, and QuizModal interactive schemas

export const igboAllUnits = [
  {
    "id": "ig-unit-1",
    "unitId": "ig-unit-1",
    "unitNumber": 1,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 1: The Igbo Alphabet and Vowels (Mkpụrụedemede na Ụdaume)",
    "subtitle": "The 36 letters of Ọnwụ orthography, digraphs, light vs. heavy vowels, vowel harmony, and tone marks.",
    "icon": "BookOpen",
    "color": "#16a34a",
    "lessons": [
      {
        "id": "ig-u1-l1",
        "title": "Lesson 1: Mkpụrụedemede, Ụdaume na Akara Ụda (Orthography & Phonetics)",
        "description": "Master the 36-letter standard Igbo alphabet, light vs. heavy vowel harmony sets, and phonemic tone levels.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "How many letters make up the standard Igbo alphabet (Mkpụrụedemede Igbo / Ọnwụ Orthography)?",
            "options": [
              "36 letters",
              "26 letters",
              "30 letters",
              "42 letters"
            ],
            "correctAnswer": "36 letters",
            "explanation": "The official 1961 Ọnwụ Orthography established 36 letters for standard Igbo: 8 vowels and 28 consonants (including digraphs)."
          },
          {
            "id": "ig-u1-l1-q2",
            "type": "matching",
            "prompt": "Match Igbo digraph consonants (mgbochiume mkpị) with example words:",
            "pairs": [
              {
                "native": "Gb",
                "english": "Gbaa (run / shoot)",
                "left": "Gb",
                "right": "Gbaa (run / shoot)"
              },
              {
                "native": "Gh",
                "english": "Gụgharia (re-read)",
                "left": "Gh",
                "right": "Gụgharia (re-read)"
              },
              {
                "native": "Kp",
                "english": "Kpoo (call / gather)",
                "left": "Kp",
                "right": "Kpoo (call / gather)"
              },
              {
                "native": "Nw",
                "english": "Nwa (child)",
                "left": "Nw",
                "right": "Nwa (child)"
              }
            ]
          },
          {
            "id": "ig-u1-l1-q3",
            "type": "fill_blank",
            "sentence": "In Igbo phonology, vowels are divided into light (mfe: a, e, i, o) and heavy (arọ: ___).",
            "missingWord": "ị, ọ, ụ, u",
            "options": [
              "ị, ọ, ụ, u",
              "b, d, g, k",
              "ch, gb, kp, nw",
              "m, n, ny, sh"
            ],
            "correctAnswer": "ị, ọ, ụ, u",
            "explanation": "The heavy/dotted group (ụdaume arọ) consists of dotted vowels ị, ọ, ụ plus u."
          },
          {
            "id": "ig-u1-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ụdaume Igbo dị asatọ' (Igbo vowels are eight):",
            "tokens": [
              "Ụdaume",
              "Igbo",
              "dị",
              "asatọ"
            ],
            "correctTokens": [
              "Ụdaume",
              "Igbo",
              "dị",
              "asatọ"
            ]
          },
          {
            "id": "ig-u1-l1-q5",
            "type": "audio_listen",
            "phrase": "Àkwà",
            "prompt": "Listen to the word with Low-Low tone (Àkwà). What does it mean?",
            "options": [
              "Bed / Bridge",
              "Egg",
              "Cloth",
              "To cry"
            ],
            "correctAnswer": "Bed / Bridge",
            "explanation": "In Igbo, tone determines meaning: 'àkwà' (Low-Low) = bed or bridge; 'àkwá' (Low-High) = egg; 'ákwà' (High-Low) = cloth; 'ákwá' (High-High) = crying."
          },
          {
            "id": "ig-u1-l1-q6",
            "type": "multiple_choice",
            "prompt": "Which vowel group does the vowel 'ọ' (dotted O) belong to?",
            "options": [
              "Ụdaume arọ (Heavy / Dotted vowel)",
              "Ụdaume mfe (Light vowel)",
              "Mgbochiume (Consonant)",
              "Ụdaume nwayọọ"
            ],
            "correctAnswer": "Ụdaume arọ (Heavy / Dotted vowel)",
            "explanation": "'Ọ' has a sub-dot and belongs to the heavy vowel group (otu arọ) alongside ị, ụ, and u."
          },
          {
            "id": "ig-u1-l1-q7",
            "type": "matching",
            "prompt": "Match the tone markings with their Igbo names and symbols:",
            "pairs": [
              {
                "native": "Ụdaelu",
                "english": "High tone (´)",
                "left": "Ụdaelu",
                "right": "High tone (´)"
              },
              {
                "native": "Ụdaala",
                "english": "Low tone (`)",
                "left": "Ụdaala",
                "right": "Low tone (`)"
              },
              {
                "native": "Nsụda",
                "english": "Downstep / Falling tone (-)",
                "left": "Nsụda",
                "right": "Downstep / Falling tone (-)"
              },
              {
                "native": "Akara ụda",
                "english": "Tone mark / Diacritic",
                "left": "Akara ụda",
                "right": "Tone mark / Diacritic"
              }
            ]
          },
          {
            "id": "ig-u1-l1-q8",
            "type": "fill_blank",
            "sentence": "Vowel harmony (Iwu nkwekọrịta ụdaume) states that light vowels usually harmonise with ___ vowels.",
            "missingWord": "light",
            "options": [
              "light",
              "heavy",
              "consonants",
              "tones"
            ],
            "correctAnswer": "light",
            "explanation": "Igbo vowel harmony dictates that light (mfe) vowels combine with other light vowels, and heavy (arọ) vowels combine with heavy vowels."
          },
          {
            "id": "ig-u1-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Asụsụ Igbo mara mma' (Igbo language is beautiful):",
            "tokens": [
              "Asụsụ",
              "Igbo",
              "mara",
              "mma"
            ],
            "correctTokens": [
              "Asụsụ",
              "Igbo",
              "mara",
              "mma"
            ]
          },
          {
            "id": "ig-u1-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does the word 'ákwá' (High-High tone) mean?",
            "options": [
              "Crying / Weeping",
              "Egg",
              "Bed",
              "Cloth"
            ],
            "correctAnswer": "Crying / Weeping",
            "explanation": "'Ákwá' with two high tones signifies crying or weeping."
          },
          {
            "id": "ig-u1-l1-q11",
            "type": "audio_listen",
            "phrase": "Àkwá",
            "prompt": "Listen to the word with Low-High tone (Àkwá). What does it mean?",
            "options": [
              "Egg",
              "Cloth",
              "Bed",
              "Bridge"
            ],
            "correctAnswer": "Egg",
            "explanation": "'Àkwá' (Low tone on 'À', High tone on 'wá') means an egg."
          },
          {
            "id": "ig-u1-l1-q12",
            "type": "matching",
            "prompt": "Match Igbo tone minimal pairs (akwa):",
            "pairs": [
              {
                "native": "Àkwà (Low-Low)",
                "english": "Bed / Bridge",
                "left": "Àkwà (Low-Low)",
                "right": "Bed / Bridge"
              },
              {
                "native": "Àkwá (Low-High)",
                "english": "Egg",
                "left": "Àkwá (Low-High)",
                "right": "Egg"
              },
              {
                "native": "Ákwà (High-Low)",
                "english": "Cloth / Fabric",
                "left": "Ákwà (High-Low)",
                "right": "Cloth / Fabric"
              },
              {
                "native": "Ákwá (High-High)",
                "english": "Crying / Tears",
                "left": "Ákwá (High-High)",
                "right": "Crying / Tears"
              }
            ]
          },
          {
            "id": "ig-u1-l1-q13",
            "type": "fill_blank",
            "sentence": "The digraph 'Ny' in Igbo is exemplified in the word '___' (give).",
            "missingWord": "nye",
            "options": [
              "nye",
              "rie",
              "gaa",
              "bịa"
            ],
            "correctAnswer": "nye",
            "explanation": "'Nye' (to give) uses the palatal nasal digraph 'Ny'."
          },
          {
            "id": "ig-u1-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Mkpurụedemede na-akụzi ọgụgụ' (Letters teach reading):",
            "tokens": [
              "Mkpurụedemede",
              "na-akụzi",
              "ọgụgụ"
            ],
            "correctTokens": [
              "Mkpurụedemede",
              "na-akụzi",
              "ọgụgụ"
            ]
          },
          {
            "id": "ig-u1-l1-q15",
            "type": "multiple_choice",
            "prompt": "Which of the following is a semi-vowel (myiriụdaume) in the Igbo alphabet?",
            "options": [
              "M and N (Syllabic nasals)",
              "B and D",
              "P and T",
              "G and K"
            ],
            "correctAnswer": "M and N (Syllabic nasals)",
            "explanation": "'M' and 'N' can carry tones and act as syllabic nasals (myiriụdaume) in words like 'mma' (beauty) and 'nna' (father)."
          },
          {
            "id": "ig-u1-l1-q16",
            "type": "audio_listen",
            "phrase": "Isi",
            "prompt": "Listen to the word 'Isi'. What is its most common physical meaning?",
            "options": [
              "Head",
              "Blindness",
              "Smell",
              "First"
            ],
            "correctAnswer": "Head",
            "explanation": "'Isi' means 'head' (as well as origin or first depending on context and tone)."
          },
          {
            "id": "ig-u1-l1-q17",
            "type": "multiple_choice",
            "prompt": "Which pair of vowels both belong to the Light (ụdaume mfe) group?",
            "options": [
              "A and E",
              "Ị and Ọ",
              "Ụ and U",
              "Ọ and E"
            ],
            "correctAnswer": "A and E",
            "explanation": "The 4 light vowels are a, e, i, and o. Thus 'A and E' are both light vowels."
          },
          {
            "id": "ig-u1-l1-q18",
            "type": "fill_blank",
            "sentence": "The 1961 committee that unified the standard Igbo alphabet was known as the ___ Committee.",
            "missingWord": "Ọnwụ",
            "options": [
              "Ọnwụ",
              "Ward",
              "Adams",
              "NERDC"
            ],
            "correctAnswer": "Ọnwụ",
            "explanation": "The Ọnwụ Committee established the standard 36-letter Igbo orthography in 1961."
          },
          {
            "id": "ig-u1-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does the sub-dot (akara ala) beneath 'ị, ọ, ụ' indicate phonetically?",
            "options": [
              "It represents retracted tongue root / heavy vowel resonance",
              "It makes the letter silent",
              "It doubles the consonant",
              "It indicates a question"
            ],
            "correctAnswer": "It represents retracted tongue root / heavy vowel resonance",
            "explanation": "The sub-dots in Ọnwụ orthography denote heavy vowel resonance / ATR (Advanced Tongue Root) distinction."
          },
          {
            "id": "ig-u1-l1-q20",
            "type": "matching",
            "prompt": "Match Igbo phonological terms with English definitions:",
            "pairs": [
              {
                "native": "Mgbochiume",
                "english": "Consonant",
                "left": "Mgbochiume",
                "right": "Consonant"
              },
              {
                "native": "Ụdaume",
                "english": "Vowel",
                "left": "Ụdaume",
                "right": "Vowel"
              },
              {
                "native": "Myiriụdaume",
                "english": "Syllabic nasal / Semi-vowel (m, n)",
                "left": "Myiriụdaume",
                "right": "Syllabic nasal / Semi-vowel (m, n)"
              },
              {
                "native": "Mkpọpụta",
                "english": "Pronunciation / Articulation",
                "left": "Mkpọpụta",
                "right": "Pronunciation / Articulation"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u1-l1-q1",
        "type": "multiple_choice",
        "prompt": "How many letters make up the standard Igbo alphabet (Mkpụrụedemede Igbo / Ọnwụ Orthography)?",
        "options": [
          "36 letters",
          "26 letters",
          "30 letters",
          "42 letters"
        ],
        "correctAnswer": "36 letters",
        "explanation": "The official 1961 Ọnwụ Orthography established 36 letters for standard Igbo: 8 vowels and 28 consonants (including digraphs)."
      },
      {
        "id": "ig-u1-l1-q2",
        "type": "matching",
        "prompt": "Match Igbo digraph consonants (mgbochiume mkpị) with example words:",
        "pairs": [
          {
            "native": "Gb",
            "english": "Gbaa (run / shoot)",
            "left": "Gb",
            "right": "Gbaa (run / shoot)"
          },
          {
            "native": "Gh",
            "english": "Gụgharia (re-read)",
            "left": "Gh",
            "right": "Gụgharia (re-read)"
          },
          {
            "native": "Kp",
            "english": "Kpoo (call / gather)",
            "left": "Kp",
            "right": "Kpoo (call / gather)"
          },
          {
            "native": "Nw",
            "english": "Nwa (child)",
            "left": "Nw",
            "right": "Nwa (child)"
          }
        ]
      },
      {
        "id": "ig-u1-l1-q3",
        "type": "fill_blank",
        "sentence": "In Igbo phonology, vowels are divided into light (mfe: a, e, i, o) and heavy (arọ: ___).",
        "missingWord": "ị, ọ, ụ, u",
        "options": [
          "ị, ọ, ụ, u",
          "b, d, g, k",
          "ch, gb, kp, nw",
          "m, n, ny, sh"
        ],
        "correctAnswer": "ị, ọ, ụ, u",
        "explanation": "The heavy/dotted group (ụdaume arọ) consists of dotted vowels ị, ọ, ụ plus u."
      },
      {
        "id": "ig-u1-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ụdaume Igbo dị asatọ' (Igbo vowels are eight):",
        "tokens": [
          "Ụdaume",
          "Igbo",
          "dị",
          "asatọ"
        ],
        "correctTokens": [
          "Ụdaume",
          "Igbo",
          "dị",
          "asatọ"
        ]
      },
      {
        "id": "ig-u1-l1-q5",
        "type": "audio_listen",
        "phrase": "Àkwà",
        "prompt": "Listen to the word with Low-Low tone (Àkwà). What does it mean?",
        "options": [
          "Bed / Bridge",
          "Egg",
          "Cloth",
          "To cry"
        ],
        "correctAnswer": "Bed / Bridge",
        "explanation": "In Igbo, tone determines meaning: 'àkwà' (Low-Low) = bed or bridge; 'àkwá' (Low-High) = egg; 'ákwà' (High-Low) = cloth; 'ákwá' (High-High) = crying."
      },
      {
        "id": "ig-u1-l1-q6",
        "type": "multiple_choice",
        "prompt": "Which vowel group does the vowel 'ọ' (dotted O) belong to?",
        "options": [
          "Ụdaume arọ (Heavy / Dotted vowel)",
          "Ụdaume mfe (Light vowel)",
          "Mgbochiume (Consonant)",
          "Ụdaume nwayọọ"
        ],
        "correctAnswer": "Ụdaume arọ (Heavy / Dotted vowel)",
        "explanation": "'Ọ' has a sub-dot and belongs to the heavy vowel group (otu arọ) alongside ị, ụ, and u."
      },
      {
        "id": "ig-u1-l1-q7",
        "type": "matching",
        "prompt": "Match the tone markings with their Igbo names and symbols:",
        "pairs": [
          {
            "native": "Ụdaelu",
            "english": "High tone (´)",
            "left": "Ụdaelu",
            "right": "High tone (´)"
          },
          {
            "native": "Ụdaala",
            "english": "Low tone (`)",
            "left": "Ụdaala",
            "right": "Low tone (`)"
          },
          {
            "native": "Nsụda",
            "english": "Downstep / Falling tone (-)",
            "left": "Nsụda",
            "right": "Downstep / Falling tone (-)"
          },
          {
            "native": "Akara ụda",
            "english": "Tone mark / Diacritic",
            "left": "Akara ụda",
            "right": "Tone mark / Diacritic"
          }
        ]
      },
      {
        "id": "ig-u1-l1-q8",
        "type": "fill_blank",
        "sentence": "Vowel harmony (Iwu nkwekọrịta ụdaume) states that light vowels usually harmonise with ___ vowels.",
        "missingWord": "light",
        "options": [
          "light",
          "heavy",
          "consonants",
          "tones"
        ],
        "correctAnswer": "light",
        "explanation": "Igbo vowel harmony dictates that light (mfe) vowels combine with other light vowels, and heavy (arọ) vowels combine with heavy vowels."
      },
      {
        "id": "ig-u1-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Asụsụ Igbo mara mma' (Igbo language is beautiful):",
        "tokens": [
          "Asụsụ",
          "Igbo",
          "mara",
          "mma"
        ],
        "correctTokens": [
          "Asụsụ",
          "Igbo",
          "mara",
          "mma"
        ]
      },
      {
        "id": "ig-u1-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does the word 'ákwá' (High-High tone) mean?",
        "options": [
          "Crying / Weeping",
          "Egg",
          "Bed",
          "Cloth"
        ],
        "correctAnswer": "Crying / Weeping",
        "explanation": "'Ákwá' with two high tones signifies crying or weeping."
      },
      {
        "id": "ig-u1-l1-q11",
        "type": "audio_listen",
        "phrase": "Àkwá",
        "prompt": "Listen to the word with Low-High tone (Àkwá). What does it mean?",
        "options": [
          "Egg",
          "Cloth",
          "Bed",
          "Bridge"
        ],
        "correctAnswer": "Egg",
        "explanation": "'Àkwá' (Low tone on 'À', High tone on 'wá') means an egg."
      },
      {
        "id": "ig-u1-l1-q12",
        "type": "matching",
        "prompt": "Match Igbo tone minimal pairs (akwa):",
        "pairs": [
          {
            "native": "Àkwà (Low-Low)",
            "english": "Bed / Bridge",
            "left": "Àkwà (Low-Low)",
            "right": "Bed / Bridge"
          },
          {
            "native": "Àkwá (Low-High)",
            "english": "Egg",
            "left": "Àkwá (Low-High)",
            "right": "Egg"
          },
          {
            "native": "Ákwà (High-Low)",
            "english": "Cloth / Fabric",
            "left": "Ákwà (High-Low)",
            "right": "Cloth / Fabric"
          },
          {
            "native": "Ákwá (High-High)",
            "english": "Crying / Tears",
            "left": "Ákwá (High-High)",
            "right": "Crying / Tears"
          }
        ]
      },
      {
        "id": "ig-u1-l1-q13",
        "type": "fill_blank",
        "sentence": "The digraph 'Ny' in Igbo is exemplified in the word '___' (give).",
        "missingWord": "nye",
        "options": [
          "nye",
          "rie",
          "gaa",
          "bịa"
        ],
        "correctAnswer": "nye",
        "explanation": "'Nye' (to give) uses the palatal nasal digraph 'Ny'."
      },
      {
        "id": "ig-u1-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Mkpurụedemede na-akụzi ọgụgụ' (Letters teach reading):",
        "tokens": [
          "Mkpurụedemede",
          "na-akụzi",
          "ọgụgụ"
        ],
        "correctTokens": [
          "Mkpurụedemede",
          "na-akụzi",
          "ọgụgụ"
        ]
      },
      {
        "id": "ig-u1-l1-q15",
        "type": "multiple_choice",
        "prompt": "Which of the following is a semi-vowel (myiriụdaume) in the Igbo alphabet?",
        "options": [
          "M and N (Syllabic nasals)",
          "B and D",
          "P and T",
          "G and K"
        ],
        "correctAnswer": "M and N (Syllabic nasals)",
        "explanation": "'M' and 'N' can carry tones and act as syllabic nasals (myiriụdaume) in words like 'mma' (beauty) and 'nna' (father)."
      },
      {
        "id": "ig-u1-l1-q16",
        "type": "audio_listen",
        "phrase": "Isi",
        "prompt": "Listen to the word 'Isi'. What is its most common physical meaning?",
        "options": [
          "Head",
          "Blindness",
          "Smell",
          "First"
        ],
        "correctAnswer": "Head",
        "explanation": "'Isi' means 'head' (as well as origin or first depending on context and tone)."
      },
      {
        "id": "ig-u1-l1-q17",
        "type": "multiple_choice",
        "prompt": "Which pair of vowels both belong to the Light (ụdaume mfe) group?",
        "options": [
          "A and E",
          "Ị and Ọ",
          "Ụ and U",
          "Ọ and E"
        ],
        "correctAnswer": "A and E",
        "explanation": "The 4 light vowels are a, e, i, and o. Thus 'A and E' are both light vowels."
      },
      {
        "id": "ig-u1-l1-q18",
        "type": "fill_blank",
        "sentence": "The 1961 committee that unified the standard Igbo alphabet was known as the ___ Committee.",
        "missingWord": "Ọnwụ",
        "options": [
          "Ọnwụ",
          "Ward",
          "Adams",
          "NERDC"
        ],
        "correctAnswer": "Ọnwụ",
        "explanation": "The Ọnwụ Committee established the standard 36-letter Igbo orthography in 1961."
      },
      {
        "id": "ig-u1-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does the sub-dot (akara ala) beneath 'ị, ọ, ụ' indicate phonetically?",
        "options": [
          "It represents retracted tongue root / heavy vowel resonance",
          "It makes the letter silent",
          "It doubles the consonant",
          "It indicates a question"
        ],
        "correctAnswer": "It represents retracted tongue root / heavy vowel resonance",
        "explanation": "The sub-dots in Ọnwụ orthography denote heavy vowel resonance / ATR (Advanced Tongue Root) distinction."
      },
      {
        "id": "ig-u1-l1-q20",
        "type": "matching",
        "prompt": "Match Igbo phonological terms with English definitions:",
        "pairs": [
          {
            "native": "Mgbochiume",
            "english": "Consonant",
            "left": "Mgbochiume",
            "right": "Consonant"
          },
          {
            "native": "Ụdaume",
            "english": "Vowel",
            "left": "Ụdaume",
            "right": "Vowel"
          },
          {
            "native": "Myiriụdaume",
            "english": "Syllabic nasal / Semi-vowel (m, n)",
            "left": "Myiriụdaume",
            "right": "Syllabic nasal / Semi-vowel (m, n)"
          },
          {
            "native": "Mkpọpụta",
            "english": "Pronunciation / Articulation",
            "left": "Mkpọpụta",
            "right": "Pronunciation / Articulation"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-2",
    "unitId": "ig-unit-2",
    "unitNumber": 2,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 2: Greetings and Courtesies (Ekele na Nsọpụrụ)",
    "subtitle": "Time-of-day greetings, polite inquiries, respectful titles (Nnà anyị, Deede), and social etiquette.",
    "icon": "Sun",
    "color": "#16a34a",
    "lessons": [
      {
        "id": "ig-u2-l1",
        "title": "Lesson 1: Ekele Oge Dị Iche Iche na Nsọpụrụ (Greetings & Etiquette)",
        "description": "Learn traditional Igbo greetings for morning, afternoon, and night, alongside honorific terms of respect for elders.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u2-l1-q1",
            "type": "multiple_choice",
            "prompt": "How do you say 'Good morning' in standard Igbo?",
            "options": [
              "Ụtụtụ ọma",
              "Ehihie ọma",
              "Mgbede ọma",
              "Ka chi foo"
            ],
            "correctAnswer": "Ụtụtụ ọma",
            "explanation": "'Ụtụtụ' means morning, and 'ọma' means good. 'Ụtụtụ ọma' = Good morning."
          },
          {
            "id": "ig-u2-l1-q2",
            "type": "matching",
            "prompt": "Match time-of-day Igbo greetings with English meanings:",
            "pairs": [
              {
                "native": "Ụtụtụ ọma",
                "english": "Good morning",
                "left": "Ụtụtụ ọma",
                "right": "Good morning"
              },
              {
                "native": "Ehihie ọma",
                "english": "Good afternoon",
                "left": "Ehihie ọma",
                "right": "Good afternoon"
              },
              {
                "native": "Mgbede ọma",
                "english": "Good evening",
                "left": "Mgbede ọma",
                "right": "Good evening"
              },
              {
                "native": "Ka chi foo",
                "english": "Good night / May dawn break favorably",
                "left": "Ka chi foo",
                "right": "Good night / May dawn break favorably"
              }
            ]
          },
          {
            "id": "ig-u2-l1-q3",
            "type": "fill_blank",
            "sentence": "When asking someone 'How are you?' in friendly conversation, you say: '___ kwanụ?'.",
            "missingWord": "Kedụ",
            "options": [
              "Kedụ",
              "Gịnị",
              "Ebee",
              "Olee"
            ],
            "correctAnswer": "Kedụ",
            "explanation": "'Kedụ?' or 'Kedụ kwanụ?' means 'How are you?'."
          },
          {
            "id": "ig-u2-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to respond: 'A dị m mma' (I am fine / well):",
            "tokens": [
              "A",
              "dị",
              "m",
              "mma"
            ],
            "correctTokens": [
              "A",
              "dị",
              "m",
              "mma"
            ]
          },
          {
            "id": "ig-u2-l1-q5",
            "type": "audio_listen",
            "phrase": "Daalụ nke ukwuu",
            "prompt": "Listen to the expression of gratitude. What does 'Daalụ nke ukwuu' mean?",
            "options": [
              "Thank you very much",
              "Good afternoon to you",
              "Please forgive me",
              "You are welcome"
            ],
            "correctAnswer": "Thank you very much",
            "explanation": "'Daalụ' = thank you; 'nke ukwuu' = very much."
          },
          {
            "id": "ig-u2-l1-q6",
            "type": "multiple_choice",
            "prompt": "Which respectful title is commonly used to address an elder brother or respected paternal uncle in many Igbo communities?",
            "options": [
              "Deede",
              "Dada",
              "Nwa m",
              "Ọgọ"
            ],
            "correctAnswer": "Deede",
            "explanation": "'Deede' is an affectionate and respectful honorific for an older brother, uncle, or respected male senior."
          },
          {
            "id": "ig-u2-l1-q7",
            "type": "matching",
            "prompt": "Match honorific titles with their social roles:",
            "pairs": [
              {
                "native": "Nnà anyị",
                "english": "Our father / Respected patriarch",
                "left": "Nnà anyị",
                "right": "Our father / Respected patriarch"
              },
              {
                "native": "Nnē anyị",
                "english": "Our mother / Respected matriarch",
                "left": "Nnē anyị",
                "right": "Our mother / Respected matriarch"
              },
              {
                "native": "Dada",
                "english": "Elder sister / Senior aunt",
                "left": "Dada",
                "right": "Elder sister / Senior aunt"
              },
              {
                "native": "Igwe / Eze",
                "english": "Traditional King / Monarch",
                "left": "Igwe / Eze",
                "right": "Traditional King / Monarch"
              }
            ]
          },
          {
            "id": "ig-u2-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'Please' when making a polite request, the Igbo word is '___'.",
            "missingWord": "Biko",
            "options": [
              "Biko",
              "Daalụ",
              "Nnọọ",
              "Ndo"
            ],
            "correctAnswer": "Biko",
            "explanation": "'Biko' is the standard polite word for 'please'."
          },
          {
            "id": "ig-u2-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Nnọọ n\\'ụlọ anyị' (Welcome to our house):",
            "tokens": [
              "Nnọọ",
              "n'ụlọ",
              "anyị"
            ],
            "correctTokens": [
              "Nnọọ",
              "n'ụlọ",
              "anyị"
            ]
          },
          {
            "id": "ig-u2-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Imeela' mean?",
            "options": [
              "Thank you / You have done well",
              "Come here",
              "Sit down",
              "Goodbye"
            ],
            "correctAnswer": "Thank you / You have done well",
            "explanation": "'Imeela' (literally: you have done well) is a widely used expression of heartfelt gratitude."
          },
          {
            "id": "ig-u2-l1-q11",
            "type": "audio_listen",
            "phrase": "Ka ọ dị echi",
            "prompt": "Listen to the parting farewell. What does 'Ka ọ dị echi' mean?",
            "options": [
              "Until tomorrow / See you tomorrow",
              "Good evening my friend",
              "Wake up early",
              "Safe journey home"
            ],
            "correctAnswer": "Until tomorrow / See you tomorrow",
            "explanation": "'Ka ọ dị...' means 'until/goodbye'; 'echi' means tomorrow."
          },
          {
            "id": "ig-u2-l1-q12",
            "type": "matching",
            "prompt": "Match parting phrases with English equivalents:",
            "pairs": [
              {
                "native": "Ka ọ dị",
                "english": "Goodbye / Until later",
                "left": "Ka ọ dị",
                "right": "Goodbye / Until later"
              },
              {
                "native": "Ije ọma",
                "english": "Safe journey / Travel well",
                "left": "Ije ọma",
                "right": "Safe journey / Travel well"
              },
              {
                "native": "Ka mesịa",
                "english": "See you later",
                "left": "Ka mesịa",
                "right": "See you later"
              },
              {
                "native": "Nwezie anwụrị",
                "english": "Have joy / Have a pleasant day",
                "left": "Nwezie anwụrị",
                "right": "Have joy / Have a pleasant day"
              }
            ]
          },
          {
            "id": "ig-u2-l1-q13",
            "type": "fill_blank",
            "sentence": "When sympathizing with someone who sneezes or suffers a mishap, you say: '___' (Sorry / Sympathy).",
            "missingWord": "Ndo",
            "options": [
              "Ndo",
              "Biko",
              "Daalụ",
              "Ehee"
            ],
            "correctAnswer": "Ndo",
            "explanation": "'Ndo' is the universal Igbo word for 'sorry' or condolence."
          },
          {
            "id": "ig-u2-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Kedụ ka ị mere?' (How are you doing?):",
            "tokens": [
              "Kedụ",
              "ka",
              "ị",
              "mere?"
            ],
            "correctTokens": [
              "Kedụ",
              "ka",
              "ị",
              "mere?"
            ]
          },
          {
            "id": "ig-u2-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Ndewoo' convey in general greeting?",
            "options": [
              "Greetings / Well done / Welcome",
              "Get out",
              "Be quiet",
              "Hurry up"
            ],
            "correctAnswer": "Greetings / Well done / Welcome",
            "explanation": "'Ndewoo' is a warm, general greeting expressing respect and well-wishes."
          },
          {
            "id": "ig-u2-l1-q16",
            "type": "audio_listen",
            "phrase": "Nnọọ nwa m",
            "prompt": "Listen to the elder's greeting. What does 'Nnọọ nwa m' mean?",
            "options": [
              "Welcome, my child",
              "Go home, my friend",
              "Come eat, my son",
              "Good morning, father"
            ],
            "correctAnswer": "Welcome, my child",
            "explanation": "'Nnọọ' = welcome; 'nwa m' = my child."
          },
          {
            "id": "ig-u2-l1-q17",
            "type": "multiple_choice",
            "prompt": "How does a younger person traditionally show physical deference when greeting an elder in Igbo culture?",
            "options": [
              "Bowing slightly or kneeling depending on community customs and using respectful two-handed gestures",
              "Snapping fingers in their face",
              "Looking over the elder's shoulder",
              "Remaining seated while the elder stands"
            ],
            "correctAnswer": "Bowing slightly or kneeling depending on community customs and using respectful two-handed gestures",
            "explanation": "Politeness in Igbo culture includes a slight bow, greeting with respectful posture, and using honorifics."
          },
          {
            "id": "ig-u2-l1-q18",
            "type": "fill_blank",
            "sentence": "When someone says 'Ndewoo', a common polite reply is: 'Ehee, ___' (Yes, greetings to you too).",
            "missingWord": "ndewo",
            "options": [
              "ndewo",
              "biko",
              "ndo",
              "ije ọma"
            ],
            "correctAnswer": "ndewo",
            "explanation": "'Ehee, ndewo' is the natural affirming response to 'Ndewoo'."
          },
          {
            "id": "ig-u2-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Ụmụakwụkwọ, nọdụ ala' mean in a classroom?",
            "options": [
              "Students, sit down!",
              "Students, stand up!",
              "Students, open your books!",
              "Students, go outside!"
            ],
            "correctAnswer": "Students, sit down!",
            "explanation": "'Ụmụakwụkwọ' = pupils/students; 'nọdụ ala' = sit down."
          },
          {
            "id": "ig-u2-l1-q20",
            "type": "matching",
            "prompt": "Match conversational responses in Igbo:",
            "pairs": [
              {
                "native": "Ọ dị mma",
                "english": "It is good / Alright",
                "left": "Ọ dị mma",
                "right": "It is good / Alright"
              },
              {
                "native": "Eziokwu",
                "english": "Truly / The truth",
                "left": "Eziokwu",
                "right": "Truly / The truth"
              },
              {
                "native": "Ee",
                "english": "Yes",
                "left": "Ee",
                "right": "Yes"
              },
              {
                "native": "Mba",
                "english": "No",
                "left": "Mba",
                "right": "No"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u2-l1-q1",
        "type": "multiple_choice",
        "prompt": "How do you say 'Good morning' in standard Igbo?",
        "options": [
          "Ụtụtụ ọma",
          "Ehihie ọma",
          "Mgbede ọma",
          "Ka chi foo"
        ],
        "correctAnswer": "Ụtụtụ ọma",
        "explanation": "'Ụtụtụ' means morning, and 'ọma' means good. 'Ụtụtụ ọma' = Good morning."
      },
      {
        "id": "ig-u2-l1-q2",
        "type": "matching",
        "prompt": "Match time-of-day Igbo greetings with English meanings:",
        "pairs": [
          {
            "native": "Ụtụtụ ọma",
            "english": "Good morning",
            "left": "Ụtụtụ ọma",
            "right": "Good morning"
          },
          {
            "native": "Ehihie ọma",
            "english": "Good afternoon",
            "left": "Ehihie ọma",
            "right": "Good afternoon"
          },
          {
            "native": "Mgbede ọma",
            "english": "Good evening",
            "left": "Mgbede ọma",
            "right": "Good evening"
          },
          {
            "native": "Ka chi foo",
            "english": "Good night / May dawn break favorably",
            "left": "Ka chi foo",
            "right": "Good night / May dawn break favorably"
          }
        ]
      },
      {
        "id": "ig-u2-l1-q3",
        "type": "fill_blank",
        "sentence": "When asking someone 'How are you?' in friendly conversation, you say: '___ kwanụ?'.",
        "missingWord": "Kedụ",
        "options": [
          "Kedụ",
          "Gịnị",
          "Ebee",
          "Olee"
        ],
        "correctAnswer": "Kedụ",
        "explanation": "'Kedụ?' or 'Kedụ kwanụ?' means 'How are you?'."
      },
      {
        "id": "ig-u2-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to respond: 'A dị m mma' (I am fine / well):",
        "tokens": [
          "A",
          "dị",
          "m",
          "mma"
        ],
        "correctTokens": [
          "A",
          "dị",
          "m",
          "mma"
        ]
      },
      {
        "id": "ig-u2-l1-q5",
        "type": "audio_listen",
        "phrase": "Daalụ nke ukwuu",
        "prompt": "Listen to the expression of gratitude. What does 'Daalụ nke ukwuu' mean?",
        "options": [
          "Thank you very much",
          "Good afternoon to you",
          "Please forgive me",
          "You are welcome"
        ],
        "correctAnswer": "Thank you very much",
        "explanation": "'Daalụ' = thank you; 'nke ukwuu' = very much."
      },
      {
        "id": "ig-u2-l1-q6",
        "type": "multiple_choice",
        "prompt": "Which respectful title is commonly used to address an elder brother or respected paternal uncle in many Igbo communities?",
        "options": [
          "Deede",
          "Dada",
          "Nwa m",
          "Ọgọ"
        ],
        "correctAnswer": "Deede",
        "explanation": "'Deede' is an affectionate and respectful honorific for an older brother, uncle, or respected male senior."
      },
      {
        "id": "ig-u2-l1-q7",
        "type": "matching",
        "prompt": "Match honorific titles with their social roles:",
        "pairs": [
          {
            "native": "Nnà anyị",
            "english": "Our father / Respected patriarch",
            "left": "Nnà anyị",
            "right": "Our father / Respected patriarch"
          },
          {
            "native": "Nnē anyị",
            "english": "Our mother / Respected matriarch",
            "left": "Nnē anyị",
            "right": "Our mother / Respected matriarch"
          },
          {
            "native": "Dada",
            "english": "Elder sister / Senior aunt",
            "left": "Dada",
            "right": "Elder sister / Senior aunt"
          },
          {
            "native": "Igwe / Eze",
            "english": "Traditional King / Monarch",
            "left": "Igwe / Eze",
            "right": "Traditional King / Monarch"
          }
        ]
      },
      {
        "id": "ig-u2-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'Please' when making a polite request, the Igbo word is '___'.",
        "missingWord": "Biko",
        "options": [
          "Biko",
          "Daalụ",
          "Nnọọ",
          "Ndo"
        ],
        "correctAnswer": "Biko",
        "explanation": "'Biko' is the standard polite word for 'please'."
      },
      {
        "id": "ig-u2-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Nnọọ n\\'ụlọ anyị' (Welcome to our house):",
        "tokens": [
          "Nnọọ",
          "n'ụlọ",
          "anyị"
        ],
        "correctTokens": [
          "Nnọọ",
          "n'ụlọ",
          "anyị"
        ]
      },
      {
        "id": "ig-u2-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Imeela' mean?",
        "options": [
          "Thank you / You have done well",
          "Come here",
          "Sit down",
          "Goodbye"
        ],
        "correctAnswer": "Thank you / You have done well",
        "explanation": "'Imeela' (literally: you have done well) is a widely used expression of heartfelt gratitude."
      },
      {
        "id": "ig-u2-l1-q11",
        "type": "audio_listen",
        "phrase": "Ka ọ dị echi",
        "prompt": "Listen to the parting farewell. What does 'Ka ọ dị echi' mean?",
        "options": [
          "Until tomorrow / See you tomorrow",
          "Good evening my friend",
          "Wake up early",
          "Safe journey home"
        ],
        "correctAnswer": "Until tomorrow / See you tomorrow",
        "explanation": "'Ka ọ dị...' means 'until/goodbye'; 'echi' means tomorrow."
      },
      {
        "id": "ig-u2-l1-q12",
        "type": "matching",
        "prompt": "Match parting phrases with English equivalents:",
        "pairs": [
          {
            "native": "Ka ọ dị",
            "english": "Goodbye / Until later",
            "left": "Ka ọ dị",
            "right": "Goodbye / Until later"
          },
          {
            "native": "Ije ọma",
            "english": "Safe journey / Travel well",
            "left": "Ije ọma",
            "right": "Safe journey / Travel well"
          },
          {
            "native": "Ka mesịa",
            "english": "See you later",
            "left": "Ka mesịa",
            "right": "See you later"
          },
          {
            "native": "Nwezie anwụrị",
            "english": "Have joy / Have a pleasant day",
            "left": "Nwezie anwụrị",
            "right": "Have joy / Have a pleasant day"
          }
        ]
      },
      {
        "id": "ig-u2-l1-q13",
        "type": "fill_blank",
        "sentence": "When sympathizing with someone who sneezes or suffers a mishap, you say: '___' (Sorry / Sympathy).",
        "missingWord": "Ndo",
        "options": [
          "Ndo",
          "Biko",
          "Daalụ",
          "Ehee"
        ],
        "correctAnswer": "Ndo",
        "explanation": "'Ndo' is the universal Igbo word for 'sorry' or condolence."
      },
      {
        "id": "ig-u2-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Kedụ ka ị mere?' (How are you doing?):",
        "tokens": [
          "Kedụ",
          "ka",
          "ị",
          "mere?"
        ],
        "correctTokens": [
          "Kedụ",
          "ka",
          "ị",
          "mere?"
        ]
      },
      {
        "id": "ig-u2-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Ndewoo' convey in general greeting?",
        "options": [
          "Greetings / Well done / Welcome",
          "Get out",
          "Be quiet",
          "Hurry up"
        ],
        "correctAnswer": "Greetings / Well done / Welcome",
        "explanation": "'Ndewoo' is a warm, general greeting expressing respect and well-wishes."
      },
      {
        "id": "ig-u2-l1-q16",
        "type": "audio_listen",
        "phrase": "Nnọọ nwa m",
        "prompt": "Listen to the elder's greeting. What does 'Nnọọ nwa m' mean?",
        "options": [
          "Welcome, my child",
          "Go home, my friend",
          "Come eat, my son",
          "Good morning, father"
        ],
        "correctAnswer": "Welcome, my child",
        "explanation": "'Nnọọ' = welcome; 'nwa m' = my child."
      },
      {
        "id": "ig-u2-l1-q17",
        "type": "multiple_choice",
        "prompt": "How does a younger person traditionally show physical deference when greeting an elder in Igbo culture?",
        "options": [
          "Bowing slightly or kneeling depending on community customs and using respectful two-handed gestures",
          "Snapping fingers in their face",
          "Looking over the elder's shoulder",
          "Remaining seated while the elder stands"
        ],
        "correctAnswer": "Bowing slightly or kneeling depending on community customs and using respectful two-handed gestures",
        "explanation": "Politeness in Igbo culture includes a slight bow, greeting with respectful posture, and using honorifics."
      },
      {
        "id": "ig-u2-l1-q18",
        "type": "fill_blank",
        "sentence": "When someone says 'Ndewoo', a common polite reply is: 'Ehee, ___' (Yes, greetings to you too).",
        "missingWord": "ndewo",
        "options": [
          "ndewo",
          "biko",
          "ndo",
          "ije ọma"
        ],
        "correctAnswer": "ndewo",
        "explanation": "'Ehee, ndewo' is the natural affirming response to 'Ndewoo'."
      },
      {
        "id": "ig-u2-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Ụmụakwụkwọ, nọdụ ala' mean in a classroom?",
        "options": [
          "Students, sit down!",
          "Students, stand up!",
          "Students, open your books!",
          "Students, go outside!"
        ],
        "correctAnswer": "Students, sit down!",
        "explanation": "'Ụmụakwụkwọ' = pupils/students; 'nọdụ ala' = sit down."
      },
      {
        "id": "ig-u2-l1-q20",
        "type": "matching",
        "prompt": "Match conversational responses in Igbo:",
        "pairs": [
          {
            "native": "Ọ dị mma",
            "english": "It is good / Alright",
            "left": "Ọ dị mma",
            "right": "It is good / Alright"
          },
          {
            "native": "Eziokwu",
            "english": "Truly / The truth",
            "left": "Eziokwu",
            "right": "Truly / The truth"
          },
          {
            "native": "Ee",
            "english": "Yes",
            "left": "Ee",
            "right": "Yes"
          },
          {
            "native": "Mba",
            "english": "No",
            "left": "Mba",
            "right": "No"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-3",
    "unitId": "ig-unit-3",
    "unitNumber": 3,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 3: Numerals and Colors (Ọnụọgụgụ na Agba)",
    "subtitle": "Counting from 1 to 50, identifying primary and secondary colors, and days of the modern week.",
    "icon": "Layers",
    "color": "#16a34a",
    "lessons": [
      {
        "id": "ig-u3-l1",
        "title": "Lesson 1: Ọnụọgụgụ 1-50, Agba Dị Iche Iche na Ụbọchị (Numbers & Colors)",
        "description": "Master counting in Igbo from 1 to 50, standard base-ten mathematics, primary colors (ọcha, oji, uhie), and weekly calendar names.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u3-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the number 'five' (5) in Igbo?",
            "options": [
              "Ise",
              "Atọ",
              "Isii",
              "Anọ"
            ],
            "correctAnswer": "Ise",
            "explanation": "1=Otu, 2=Abụọ, 3=Atọ, 4=Anọ, 5=Ise."
          },
          {
            "id": "ig-u3-l1-q2",
            "type": "matching",
            "prompt": "Match Igbo numerals 1 to 4 with their numeric digits:",
            "pairs": [
              {
                "native": "Otu",
                "english": "1 (One)",
                "left": "Otu",
                "right": "1 (One)"
              },
              {
                "native": "Abụọ",
                "english": "2 (Two)",
                "left": "Abụọ",
                "right": "2 (Two)"
              },
              {
                "native": "Atọ",
                "english": "3 (Three)",
                "left": "Atọ",
                "right": "3 (Three)"
              },
              {
                "native": "Anọ",
                "english": "4 (Four)",
                "left": "Anọ",
                "right": "4 (Four)"
              }
            ]
          },
          {
            "id": "ig-u3-l1-q3",
            "type": "fill_blank",
            "sentence": "Ten in Igbo is 'Iri'. Twenty (20) is constructed as 'Iri ___' (ten times two).",
            "missingWord": "abụọ",
            "options": [
              "abụọ",
              "atọ",
              "anọ",
              "ise"
            ],
            "correctAnswer": "abụọ",
            "explanation": "'Iri abụọ' literally means two tens (20)."
          },
          {
            "id": "ig-u3-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the numbers: 'Isii, asaa, asatọ, itoolu, iri' (6, 7, 8, 9, 10):",
            "tokens": [
              "Isii,",
              "asaa,",
              "asatọ,",
              "itoolu,",
              "iri"
            ],
            "correctTokens": [
              "Isii,",
              "asaa,",
              "asatọ,",
              "itoolu,",
              "iri"
            ]
          },
          {
            "id": "ig-u3-l1-q5",
            "type": "audio_listen",
            "phrase": "Uhie",
            "prompt": "Listen to the color word. What color is 'Uhie'?",
            "options": [
              "Red",
              "White",
              "Black",
              "Green"
            ],
            "correctAnswer": "Red",
            "explanation": "'Uhie' is red (also associated with camwood cosmetic dye)."
          },
          {
            "id": "ig-u3-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the Igbo color for 'White'?",
            "options": [
              "Ọcha",
              "Oji",
              "Edo",
              "Akwụkwọ ndụ"
            ],
            "correctAnswer": "Ọcha",
            "explanation": "'Ọcha' is white (symbol of purity and peace)."
          },
          {
            "id": "ig-u3-l1-q7",
            "type": "matching",
            "prompt": "Match Igbo colors with their English equivalents:",
            "pairs": [
              {
                "native": "Ọcha",
                "english": "White",
                "left": "Ọcha",
                "right": "White"
              },
              {
                "native": "Oji",
                "english": "Black / Dark",
                "left": "Oji",
                "right": "Black / Dark"
              },
              {
                "native": "Uhie",
                "english": "Red",
                "left": "Uhie",
                "right": "Red"
              },
              {
                "native": "Akwụkwọ ndụ",
                "english": "Green (leaf of life)",
                "left": "Akwụkwọ ndụ",
                "right": "Green (leaf of life)"
              }
            ]
          },
          {
            "id": "ig-u3-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'fifteen' (15) in Igbo, you say: 'Iri na ___'.",
            "missingWord": "ise",
            "options": [
              "ise",
              "anọ",
              "isii",
              "atọ"
            ],
            "correctAnswer": "ise",
            "explanation": "'Iri na ise' means ten and five (15)."
          },
          {
            "id": "ig-u3-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Uwe m dị ọcha' (My shirt/dress is white):",
            "tokens": [
              "Uwe",
              "m",
              "dị",
              "ọcha"
            ],
            "correctTokens": [
              "Uwe",
              "m",
              "dị",
              "ọcha"
            ]
          },
          {
            "id": "ig-u3-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is 'Fifty' (50) in Igbo?",
            "options": [
              "Iri ise",
              "Iri anọ",
              "Iri atọ",
              "Iri isii"
            ],
            "correctAnswer": "Iri ise",
            "explanation": "'Iri ise' = 10 × 5 = 50."
          },
          {
            "id": "ig-u3-l1-q11",
            "type": "audio_listen",
            "phrase": "Iri atọ na ise",
            "prompt": "Listen to the number. What numeral is 'Iri atọ na ise'?",
            "options": [
              "35",
              "53",
              "25",
              "45"
            ],
            "correctAnswer": "35",
            "explanation": "'Iri atọ' (30) + 'na ise' (5) = 35."
          },
          {
            "id": "ig-u3-l1-q12",
            "type": "matching",
            "prompt": "Match tens in Igbo with numeric values:",
            "pairs": [
              {
                "native": "Iri",
                "english": "10",
                "left": "Iri",
                "right": "10"
              },
              {
                "native": "Iri abụọ",
                "english": "20",
                "left": "Iri abụọ",
                "right": "20"
              },
              {
                "native": "Iri atọ",
                "english": "30",
                "left": "Iri atọ",
                "right": "30"
              },
              {
                "native": "Iri anọ",
                "english": "40",
                "left": "Iri anọ",
                "right": "40"
              }
            ]
          },
          {
            "id": "ig-u3-l1-q13",
            "type": "fill_blank",
            "sentence": "The color yellow in standard Igbo is often referred to as '___'.",
            "missingWord": "Edo",
            "options": [
              "Edo",
              "Oji",
              "Ọcha",
              "Uhie"
            ],
            "correctAnswer": "Edo",
            "explanation": "'Edo' is yellow."
          },
          {
            "id": "ig-u3-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Enwere m akwụkwọ anọ' (I have four books):",
            "tokens": [
              "Enwere",
              "m",
              "akwụkwọ",
              "anọ"
            ],
            "correctTokens": [
              "Enwere",
              "m",
              "akwụkwọ",
              "anọ"
            ]
          },
          {
            "id": "ig-u3-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is Sunday in the modern Igbo seven-day week?",
            "options": [
              "Ụbọchị Sọnde / Ụbọchị Ụka",
              "Mọnde",
              "Satọde",
              "Fraịde"
            ],
            "correctAnswer": "Ụbọchị Sọnde / Ụbọchị Ụka",
            "explanation": "Sunday is called 'Ụbọchị Sọnde' or 'Ụbọchị Ụka' (Church/worship day)."
          },
          {
            "id": "ig-u3-l1-q16",
            "type": "audio_listen",
            "phrase": "Ọnụọgụgụ",
            "prompt": "Listen to the educational term. What does 'Ọnụọgụgụ' mean?",
            "options": [
              "Numbers / Arithmetic / Numerals",
              "Letters of alphabet",
              "Stories",
              "Songs"
            ],
            "correctAnswer": "Numbers / Arithmetic / Numerals",
            "explanation": "'Ọnụọgụgụ' is the Igbo word for counting, numbers, and numerals."
          },
          {
            "id": "ig-u3-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'seven' in Igbo?",
            "options": [
              "Asaa",
              "Isii",
              "Asatọ",
              "Itoolu"
            ],
            "correctAnswer": "Asaa",
            "explanation": "'Asaa' is seven; 'isii' is six; 'asatọ' is eight."
          },
          {
            "id": "ig-u3-l1-q18",
            "type": "fill_blank",
            "sentence": "The number 9 in Igbo is known as 'Iteghịte' or '___'.",
            "missingWord": "Itoolu",
            "options": [
              "Itoolu",
              "Isii",
              "Asatọ",
              "Iri"
            ],
            "correctAnswer": "Itoolu",
            "explanation": "'Itoolu' or 'Iteghete' is nine."
          },
          {
            "id": "ig-u3-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Iri anọ na asatọ' represent in figures?",
            "options": [
              "48",
              "84",
              "38",
              "58"
            ],
            "correctAnswer": "48",
            "explanation": "'Iri anọ' (40) + 'na asatọ' (8) = 48."
          },
          {
            "id": "ig-u3-l1-q20",
            "type": "matching",
            "prompt": "Match calendar and measurement terms:",
            "pairs": [
              {
                "native": "Ụbọchị",
                "english": "Day",
                "left": "Ụbọchị",
                "right": "Day"
              },
              {
                "native": "Izu",
                "english": "Week",
                "left": "Izu",
                "right": "Week"
              },
              {
                "native": "Ọnwa",
                "english": "Month / Moon",
                "left": "Ọnwa",
                "right": "Month / Moon"
              },
              {
                "native": "Afọ",
                "english": "Year",
                "left": "Afọ",
                "right": "Afọ"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u3-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the number 'five' (5) in Igbo?",
        "options": [
          "Ise",
          "Atọ",
          "Isii",
          "Anọ"
        ],
        "correctAnswer": "Ise",
        "explanation": "1=Otu, 2=Abụọ, 3=Atọ, 4=Anọ, 5=Ise."
      },
      {
        "id": "ig-u3-l1-q2",
        "type": "matching",
        "prompt": "Match Igbo numerals 1 to 4 with their numeric digits:",
        "pairs": [
          {
            "native": "Otu",
            "english": "1 (One)",
            "left": "Otu",
            "right": "1 (One)"
          },
          {
            "native": "Abụọ",
            "english": "2 (Two)",
            "left": "Abụọ",
            "right": "2 (Two)"
          },
          {
            "native": "Atọ",
            "english": "3 (Three)",
            "left": "Atọ",
            "right": "3 (Three)"
          },
          {
            "native": "Anọ",
            "english": "4 (Four)",
            "left": "Anọ",
            "right": "4 (Four)"
          }
        ]
      },
      {
        "id": "ig-u3-l1-q3",
        "type": "fill_blank",
        "sentence": "Ten in Igbo is 'Iri'. Twenty (20) is constructed as 'Iri ___' (ten times two).",
        "missingWord": "abụọ",
        "options": [
          "abụọ",
          "atọ",
          "anọ",
          "ise"
        ],
        "correctAnswer": "abụọ",
        "explanation": "'Iri abụọ' literally means two tens (20)."
      },
      {
        "id": "ig-u3-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the numbers: 'Isii, asaa, asatọ, itoolu, iri' (6, 7, 8, 9, 10):",
        "tokens": [
          "Isii,",
          "asaa,",
          "asatọ,",
          "itoolu,",
          "iri"
        ],
        "correctTokens": [
          "Isii,",
          "asaa,",
          "asatọ,",
          "itoolu,",
          "iri"
        ]
      },
      {
        "id": "ig-u3-l1-q5",
        "type": "audio_listen",
        "phrase": "Uhie",
        "prompt": "Listen to the color word. What color is 'Uhie'?",
        "options": [
          "Red",
          "White",
          "Black",
          "Green"
        ],
        "correctAnswer": "Red",
        "explanation": "'Uhie' is red (also associated with camwood cosmetic dye)."
      },
      {
        "id": "ig-u3-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the Igbo color for 'White'?",
        "options": [
          "Ọcha",
          "Oji",
          "Edo",
          "Akwụkwọ ndụ"
        ],
        "correctAnswer": "Ọcha",
        "explanation": "'Ọcha' is white (symbol of purity and peace)."
      },
      {
        "id": "ig-u3-l1-q7",
        "type": "matching",
        "prompt": "Match Igbo colors with their English equivalents:",
        "pairs": [
          {
            "native": "Ọcha",
            "english": "White",
            "left": "Ọcha",
            "right": "White"
          },
          {
            "native": "Oji",
            "english": "Black / Dark",
            "left": "Oji",
            "right": "Black / Dark"
          },
          {
            "native": "Uhie",
            "english": "Red",
            "left": "Uhie",
            "right": "Red"
          },
          {
            "native": "Akwụkwọ ndụ",
            "english": "Green (leaf of life)",
            "left": "Akwụkwọ ndụ",
            "right": "Green (leaf of life)"
          }
        ]
      },
      {
        "id": "ig-u3-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'fifteen' (15) in Igbo, you say: 'Iri na ___'.",
        "missingWord": "ise",
        "options": [
          "ise",
          "anọ",
          "isii",
          "atọ"
        ],
        "correctAnswer": "ise",
        "explanation": "'Iri na ise' means ten and five (15)."
      },
      {
        "id": "ig-u3-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Uwe m dị ọcha' (My shirt/dress is white):",
        "tokens": [
          "Uwe",
          "m",
          "dị",
          "ọcha"
        ],
        "correctTokens": [
          "Uwe",
          "m",
          "dị",
          "ọcha"
        ]
      },
      {
        "id": "ig-u3-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is 'Fifty' (50) in Igbo?",
        "options": [
          "Iri ise",
          "Iri anọ",
          "Iri atọ",
          "Iri isii"
        ],
        "correctAnswer": "Iri ise",
        "explanation": "'Iri ise' = 10 × 5 = 50."
      },
      {
        "id": "ig-u3-l1-q11",
        "type": "audio_listen",
        "phrase": "Iri atọ na ise",
        "prompt": "Listen to the number. What numeral is 'Iri atọ na ise'?",
        "options": [
          "35",
          "53",
          "25",
          "45"
        ],
        "correctAnswer": "35",
        "explanation": "'Iri atọ' (30) + 'na ise' (5) = 35."
      },
      {
        "id": "ig-u3-l1-q12",
        "type": "matching",
        "prompt": "Match tens in Igbo with numeric values:",
        "pairs": [
          {
            "native": "Iri",
            "english": "10",
            "left": "Iri",
            "right": "10"
          },
          {
            "native": "Iri abụọ",
            "english": "20",
            "left": "Iri abụọ",
            "right": "20"
          },
          {
            "native": "Iri atọ",
            "english": "30",
            "left": "Iri atọ",
            "right": "30"
          },
          {
            "native": "Iri anọ",
            "english": "40",
            "left": "Iri anọ",
            "right": "40"
          }
        ]
      },
      {
        "id": "ig-u3-l1-q13",
        "type": "fill_blank",
        "sentence": "The color yellow in standard Igbo is often referred to as '___'.",
        "missingWord": "Edo",
        "options": [
          "Edo",
          "Oji",
          "Ọcha",
          "Uhie"
        ],
        "correctAnswer": "Edo",
        "explanation": "'Edo' is yellow."
      },
      {
        "id": "ig-u3-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Enwere m akwụkwọ anọ' (I have four books):",
        "tokens": [
          "Enwere",
          "m",
          "akwụkwọ",
          "anọ"
        ],
        "correctTokens": [
          "Enwere",
          "m",
          "akwụkwọ",
          "anọ"
        ]
      },
      {
        "id": "ig-u3-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is Sunday in the modern Igbo seven-day week?",
        "options": [
          "Ụbọchị Sọnde / Ụbọchị Ụka",
          "Mọnde",
          "Satọde",
          "Fraịde"
        ],
        "correctAnswer": "Ụbọchị Sọnde / Ụbọchị Ụka",
        "explanation": "Sunday is called 'Ụbọchị Sọnde' or 'Ụbọchị Ụka' (Church/worship day)."
      },
      {
        "id": "ig-u3-l1-q16",
        "type": "audio_listen",
        "phrase": "Ọnụọgụgụ",
        "prompt": "Listen to the educational term. What does 'Ọnụọgụgụ' mean?",
        "options": [
          "Numbers / Arithmetic / Numerals",
          "Letters of alphabet",
          "Stories",
          "Songs"
        ],
        "correctAnswer": "Numbers / Arithmetic / Numerals",
        "explanation": "'Ọnụọgụgụ' is the Igbo word for counting, numbers, and numerals."
      },
      {
        "id": "ig-u3-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'seven' in Igbo?",
        "options": [
          "Asaa",
          "Isii",
          "Asatọ",
          "Itoolu"
        ],
        "correctAnswer": "Asaa",
        "explanation": "'Asaa' is seven; 'isii' is six; 'asatọ' is eight."
      },
      {
        "id": "ig-u3-l1-q18",
        "type": "fill_blank",
        "sentence": "The number 9 in Igbo is known as 'Iteghịte' or '___'.",
        "missingWord": "Itoolu",
        "options": [
          "Itoolu",
          "Isii",
          "Asatọ",
          "Iri"
        ],
        "correctAnswer": "Itoolu",
        "explanation": "'Itoolu' or 'Iteghete' is nine."
      },
      {
        "id": "ig-u3-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Iri anọ na asatọ' represent in figures?",
        "options": [
          "48",
          "84",
          "38",
          "58"
        ],
        "correctAnswer": "48",
        "explanation": "'Iri anọ' (40) + 'na asatọ' (8) = 48."
      },
      {
        "id": "ig-u3-l1-q20",
        "type": "matching",
        "prompt": "Match calendar and measurement terms:",
        "pairs": [
          {
            "native": "Ụbọchị",
            "english": "Day",
            "left": "Ụbọchị",
            "right": "Day"
          },
          {
            "native": "Izu",
            "english": "Week",
            "left": "Izu",
            "right": "Week"
          },
          {
            "native": "Ọnwa",
            "english": "Month / Moon",
            "left": "Ọnwa",
            "right": "Month / Moon"
          },
          {
            "native": "Afọ",
            "english": "Year",
            "left": "Afọ",
            "right": "Afọ"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-4",
    "unitId": "ig-unit-4",
    "unitNumber": 4,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 4: Family and Immediate Environment (Ezinụlọ na Gburugburu)",
    "subtitle": "Kinship vocabulary (Nna, Nne, Nwanne), home life, and classroom objects.",
    "icon": "Shield",
    "color": "#16a34a",
    "lessons": [
      {
        "id": "ig-u4-l1",
        "title": "Lesson 1: Ezinụlọ, Ụlọ na Klas (Family, Home & School)",
        "description": "Master immediate and extended kinship terms in Igbo, rooms of the homestead, and common educational objects.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u4-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Igbo word for 'Mother'?",
            "options": [
              "Nne",
              "Nna",
              "Nwa",
              "Nwanne"
            ],
            "correctAnswer": "Nne",
            "explanation": "'Nne' is mother; 'Nna' is father."
          },
          {
            "id": "ig-u4-l1-q2",
            "type": "matching",
            "prompt": "Match immediate family members in Igbo:",
            "pairs": [
              {
                "native": "Nna",
                "english": "Father",
                "left": "Nna",
                "right": "Father"
              },
              {
                "native": "Nne",
                "english": "Mother",
                "left": "Nne",
                "right": "Mother"
              },
              {
                "native": "Nwa",
                "english": "Child",
                "left": "Nwa",
                "right": "Child"
              },
              {
                "native": "Nwanne",
                "english": "Sibling (brother or sister)",
                "left": "Nwanne",
                "right": "Sibling (brother or sister)"
              }
            ]
          },
          {
            "id": "ig-u4-l1-q3",
            "type": "fill_blank",
            "sentence": "To specifically identify a brother, you say: 'Nwanne ___' (sibling male).",
            "missingWord": "nwoke",
            "options": [
              "nwoke",
              "nwanyị",
              "nne",
              "nna"
            ],
            "correctAnswer": "nwoke",
            "explanation": "'Nwanne nwoke' means male sibling (brother)."
          },
          {
            "id": "ig-u4-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Nne m na-esi nri' (My mother is cooking food):",
            "tokens": [
              "Nne",
              "m",
              "na-esi",
              "nri"
            ],
            "correctTokens": [
              "Nne",
              "m",
              "na-esi",
              "nri"
            ]
          },
          {
            "id": "ig-u4-l1-q5",
            "type": "audio_listen",
            "phrase": "Nna ochie na nne ochie",
            "prompt": "Listen to the family phrase. Who are being referred to?",
            "options": [
              "Grandfather and grandmother",
              "Uncle and aunt",
              "Father and mother",
              "Brother and sister"
            ],
            "correctAnswer": "Grandfather and grandmother",
            "explanation": "'Nna ochie' = grandfather; 'Nne ochie' = grandmother."
          },
          {
            "id": "ig-u4-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is a 'Tebụl' in the home or classroom?",
            "options": [
              "Table",
              "Chair",
              "Bed",
              "Window"
            ],
            "correctAnswer": "Table",
            "explanation": "'Tebụl' is the Igbo loan-adaptation for table."
          },
          {
            "id": "ig-u4-l1-q7",
            "type": "matching",
            "prompt": "Match classroom objects with English words:",
            "pairs": [
              {
                "native": "Akwụkwọ",
                "english": "Book / Paper",
                "left": "Akwụkwọ",
                "right": "Book / Paper"
              },
              {
                "native": "Oche",
                "english": "Chair / Seat",
                "left": "Oche",
                "right": "Chair / Seat"
              },
              {
                "native": "Mkpịsịodee",
                "english": "Pen / Pencil (writing stick)",
                "left": "Mkpịsịodee",
                "right": "Pen / Pencil (writing stick)"
              },
              {
                "native": "Mbadamba ojii",
                "english": "Blackboard / Chalkboard",
                "left": "Mbadamba ojii",
                "right": "Blackboard / Chalkboard"
              }
            ]
          },
          {
            "id": "ig-u4-l1-q8",
            "type": "fill_blank",
            "sentence": "The Igbo word for 'House' or 'Building' is '___'.",
            "missingWord": "Ụlọ",
            "options": [
              "Ụlọ",
              "Obodo",
              "Ala",
              "Ilo"
            ],
            "correctAnswer": "Ụlọ",
            "explanation": "'Ụlọ' means house, home, or building."
          },
          {
            "id": "ig-u4-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Mepee ọnụ ụzọ' (Open the door):",
            "tokens": [
              "Mepee",
              "ọnụ",
              "ụzọ"
            ],
            "correctTokens": [
              "Mepee",
              "ọnụ",
              "ụzọ"
            ]
          },
          {
            "id": "ig-u4-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is 'Windo' in a room?",
            "options": [
              "Window",
              "Roof",
              "Floor",
              "Door"
            ],
            "correctAnswer": "Window",
            "explanation": "'Windo' is window."
          },
          {
            "id": "ig-u4-l1-q11",
            "type": "audio_listen",
            "phrase": "Ụlọ akwụkwọ anyị mara mma",
            "prompt": "Listen to the sentence. What does it describe?",
            "options": [
              "Our school is beautiful",
              "Our classroom is very big",
              "My teacher is kind",
              "Our books are clean"
            ],
            "correctAnswer": "Our school is beautiful",
            "explanation": "'Ụlọ akwụkwọ' = school; 'anyị' = our; 'mara mma' = is beautiful."
          },
          {
            "id": "ig-u4-l1-q12",
            "type": "matching",
            "prompt": "Match homestead areas in Igbo:",
            "pairs": [
              {
                "native": "Ilo",
                "english": "Front yard / Village square",
                "left": "Ilo",
                "right": "Front yard / Village square"
              },
              {
                "native": "Ọba ji",
                "english": "Yam barn",
                "left": "Ọba ji",
                "right": "Yam barn"
              },
              {
                "native": "Ụlọ nri",
                "english": "Kitchen / Cooking room",
                "left": "Ụlọ nri",
                "right": "Kitchen / Cooking room"
              },
              {
                "native": "Ime ụlọ",
                "english": "Bedroom / Interior room",
                "left": "Ime ụlọ",
                "right": "Ime ụlọ"
              }
            ]
          },
          {
            "id": "ig-u4-l1-q13",
            "type": "fill_blank",
            "sentence": "A teacher in Igbo is termed 'Onye ___' (one who teaches).",
            "missingWord": "nkụzi",
            "options": [
              "nkụzi",
              "ọrụ",
              "ahịa",
              "egwu"
            ],
            "correctAnswer": "nkụzi",
            "explanation": "'Onye nkụzi' is a teacher / instructor."
          },
          {
            "id": "ig-u4-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Nwanne m nwanyị na-amụ akwụkwọ' (My sister is studying):",
            "tokens": [
              "Nwanne",
              "m",
              "nwanyị",
              "na-amụ",
              "akwụkwọ"
            ],
            "correctTokens": [
              "Nwanne",
              "m",
              "nwanyị",
              "na-amụ",
              "akwụkwọ"
            ]
          },
          {
            "id": "ig-u4-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Ezinụlọ' mean?",
            "options": [
              "Family",
              "Friendship",
              "Village",
              "Market"
            ],
            "correctAnswer": "Family",
            "explanation": "'Ezinụlọ' means family / household."
          },
          {
            "id": "ig-u4-l1-q16",
            "type": "audio_listen",
            "phrase": "Nna m zụrụ m oche ọhụrụ",
            "prompt": "Listen to the sentence. What did the father buy?",
            "options": [
              "A new chair",
              "A new book",
              "A new table",
              "A new bicycle"
            ],
            "correctAnswer": "A new chair",
            "explanation": "'Oche ọhụrụ' = new chair."
          },
          {
            "id": "ig-u4-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Di na nwunye'?",
            "options": [
              "Husband and wife",
              "Brother and sister",
              "Mother and daughter",
              "Father and son"
            ],
            "correctAnswer": "Husband and wife",
            "explanation": "'Di' = husband, 'nwunye' = wife; 'Di na nwunye' = husband and wife."
          },
          {
            "id": "ig-u4-l1-q18",
            "type": "fill_blank",
            "sentence": "To say 'friend' in Igbo, you use the word '___'.",
            "missingWord": "Enyi",
            "options": [
              "Enyi",
              "Ọgọ",
              "Nwa",
              "Onye"
            ],
            "correctAnswer": "Enyi",
            "explanation": "'Enyi' means friend (or elephant, differentiated by context and tone)."
          },
          {
            "id": "ig-u4-l1-q19",
            "type": "multiple_choice",
            "prompt": "What is 'Ụmụntakịrị' in the village or school?",
            "options": [
              "Little children / Young ones",
              "Elders",
              "Traditional chiefs",
              "Hunters"
            ],
            "correctAnswer": "Little children / Young ones",
            "explanation": "'Ụmụntakịrị' refers to small children."
          },
          {
            "id": "ig-u4-l1-q20",
            "type": "matching",
            "prompt": "Match extended kinship terms:",
            "pairs": [
              {
                "native": "Ọgọ nwoke",
                "english": "Son-in-law / Father-in-law (male in-law)",
                "left": "Ọgọ nwoke",
                "right": "Son-in-law / Father-in-law (male in-law)"
              },
              {
                "native": "Ọgọ nwanyị",
                "english": "Daughter-in-law / Mother-in-law",
                "left": "Ọgọ nwanyị",
                "right": "Daughter-in-law / Mother-in-law"
              },
              {
                "native": "Nwadiana",
                "english": "Maternal grandchild / Nephew",
                "left": "Nwadiana",
                "right": "Maternal grandchild / Nephew"
              },
              {
                "native": "Ada",
                "english": "First-born daughter",
                "left": "Ada",
                "right": "First-born daughter"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u4-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Igbo word for 'Mother'?",
        "options": [
          "Nne",
          "Nna",
          "Nwa",
          "Nwanne"
        ],
        "correctAnswer": "Nne",
        "explanation": "'Nne' is mother; 'Nna' is father."
      },
      {
        "id": "ig-u4-l1-q2",
        "type": "matching",
        "prompt": "Match immediate family members in Igbo:",
        "pairs": [
          {
            "native": "Nna",
            "english": "Father",
            "left": "Nna",
            "right": "Father"
          },
          {
            "native": "Nne",
            "english": "Mother",
            "left": "Nne",
            "right": "Mother"
          },
          {
            "native": "Nwa",
            "english": "Child",
            "left": "Nwa",
            "right": "Child"
          },
          {
            "native": "Nwanne",
            "english": "Sibling (brother or sister)",
            "left": "Nwanne",
            "right": "Sibling (brother or sister)"
          }
        ]
      },
      {
        "id": "ig-u4-l1-q3",
        "type": "fill_blank",
        "sentence": "To specifically identify a brother, you say: 'Nwanne ___' (sibling male).",
        "missingWord": "nwoke",
        "options": [
          "nwoke",
          "nwanyị",
          "nne",
          "nna"
        ],
        "correctAnswer": "nwoke",
        "explanation": "'Nwanne nwoke' means male sibling (brother)."
      },
      {
        "id": "ig-u4-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Nne m na-esi nri' (My mother is cooking food):",
        "tokens": [
          "Nne",
          "m",
          "na-esi",
          "nri"
        ],
        "correctTokens": [
          "Nne",
          "m",
          "na-esi",
          "nri"
        ]
      },
      {
        "id": "ig-u4-l1-q5",
        "type": "audio_listen",
        "phrase": "Nna ochie na nne ochie",
        "prompt": "Listen to the family phrase. Who are being referred to?",
        "options": [
          "Grandfather and grandmother",
          "Uncle and aunt",
          "Father and mother",
          "Brother and sister"
        ],
        "correctAnswer": "Grandfather and grandmother",
        "explanation": "'Nna ochie' = grandfather; 'Nne ochie' = grandmother."
      },
      {
        "id": "ig-u4-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is a 'Tebụl' in the home or classroom?",
        "options": [
          "Table",
          "Chair",
          "Bed",
          "Window"
        ],
        "correctAnswer": "Table",
        "explanation": "'Tebụl' is the Igbo loan-adaptation for table."
      },
      {
        "id": "ig-u4-l1-q7",
        "type": "matching",
        "prompt": "Match classroom objects with English words:",
        "pairs": [
          {
            "native": "Akwụkwọ",
            "english": "Book / Paper",
            "left": "Akwụkwọ",
            "right": "Book / Paper"
          },
          {
            "native": "Oche",
            "english": "Chair / Seat",
            "left": "Oche",
            "right": "Chair / Seat"
          },
          {
            "native": "Mkpịsịodee",
            "english": "Pen / Pencil (writing stick)",
            "left": "Mkpịsịodee",
            "right": "Pen / Pencil (writing stick)"
          },
          {
            "native": "Mbadamba ojii",
            "english": "Blackboard / Chalkboard",
            "left": "Mbadamba ojii",
            "right": "Blackboard / Chalkboard"
          }
        ]
      },
      {
        "id": "ig-u4-l1-q8",
        "type": "fill_blank",
        "sentence": "The Igbo word for 'House' or 'Building' is '___'.",
        "missingWord": "Ụlọ",
        "options": [
          "Ụlọ",
          "Obodo",
          "Ala",
          "Ilo"
        ],
        "correctAnswer": "Ụlọ",
        "explanation": "'Ụlọ' means house, home, or building."
      },
      {
        "id": "ig-u4-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Mepee ọnụ ụzọ' (Open the door):",
        "tokens": [
          "Mepee",
          "ọnụ",
          "ụzọ"
        ],
        "correctTokens": [
          "Mepee",
          "ọnụ",
          "ụzọ"
        ]
      },
      {
        "id": "ig-u4-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is 'Windo' in a room?",
        "options": [
          "Window",
          "Roof",
          "Floor",
          "Door"
        ],
        "correctAnswer": "Window",
        "explanation": "'Windo' is window."
      },
      {
        "id": "ig-u4-l1-q11",
        "type": "audio_listen",
        "phrase": "Ụlọ akwụkwọ anyị mara mma",
        "prompt": "Listen to the sentence. What does it describe?",
        "options": [
          "Our school is beautiful",
          "Our classroom is very big",
          "My teacher is kind",
          "Our books are clean"
        ],
        "correctAnswer": "Our school is beautiful",
        "explanation": "'Ụlọ akwụkwọ' = school; 'anyị' = our; 'mara mma' = is beautiful."
      },
      {
        "id": "ig-u4-l1-q12",
        "type": "matching",
        "prompt": "Match homestead areas in Igbo:",
        "pairs": [
          {
            "native": "Ilo",
            "english": "Front yard / Village square",
            "left": "Ilo",
            "right": "Front yard / Village square"
          },
          {
            "native": "Ọba ji",
            "english": "Yam barn",
            "left": "Ọba ji",
            "right": "Yam barn"
          },
          {
            "native": "Ụlọ nri",
            "english": "Kitchen / Cooking room",
            "left": "Ụlọ nri",
            "right": "Kitchen / Cooking room"
          },
          {
            "native": "Ime ụlọ",
            "english": "Bedroom / Interior room",
            "left": "Ime ụlọ",
            "right": "Ime ụlọ"
          }
        ]
      },
      {
        "id": "ig-u4-l1-q13",
        "type": "fill_blank",
        "sentence": "A teacher in Igbo is termed 'Onye ___' (one who teaches).",
        "missingWord": "nkụzi",
        "options": [
          "nkụzi",
          "ọrụ",
          "ahịa",
          "egwu"
        ],
        "correctAnswer": "nkụzi",
        "explanation": "'Onye nkụzi' is a teacher / instructor."
      },
      {
        "id": "ig-u4-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Nwanne m nwanyị na-amụ akwụkwọ' (My sister is studying):",
        "tokens": [
          "Nwanne",
          "m",
          "nwanyị",
          "na-amụ",
          "akwụkwọ"
        ],
        "correctTokens": [
          "Nwanne",
          "m",
          "nwanyị",
          "na-amụ",
          "akwụkwọ"
        ]
      },
      {
        "id": "ig-u4-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Ezinụlọ' mean?",
        "options": [
          "Family",
          "Friendship",
          "Village",
          "Market"
        ],
        "correctAnswer": "Family",
        "explanation": "'Ezinụlọ' means family / household."
      },
      {
        "id": "ig-u4-l1-q16",
        "type": "audio_listen",
        "phrase": "Nna m zụrụ m oche ọhụrụ",
        "prompt": "Listen to the sentence. What did the father buy?",
        "options": [
          "A new chair",
          "A new book",
          "A new table",
          "A new bicycle"
        ],
        "correctAnswer": "A new chair",
        "explanation": "'Oche ọhụrụ' = new chair."
      },
      {
        "id": "ig-u4-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Di na nwunye'?",
        "options": [
          "Husband and wife",
          "Brother and sister",
          "Mother and daughter",
          "Father and son"
        ],
        "correctAnswer": "Husband and wife",
        "explanation": "'Di' = husband, 'nwunye' = wife; 'Di na nwunye' = husband and wife."
      },
      {
        "id": "ig-u4-l1-q18",
        "type": "fill_blank",
        "sentence": "To say 'friend' in Igbo, you use the word '___'.",
        "missingWord": "Enyi",
        "options": [
          "Enyi",
          "Ọgọ",
          "Nwa",
          "Onye"
        ],
        "correctAnswer": "Enyi",
        "explanation": "'Enyi' means friend (or elephant, differentiated by context and tone)."
      },
      {
        "id": "ig-u4-l1-q19",
        "type": "multiple_choice",
        "prompt": "What is 'Ụmụntakịrị' in the village or school?",
        "options": [
          "Little children / Young ones",
          "Elders",
          "Traditional chiefs",
          "Hunters"
        ],
        "correctAnswer": "Little children / Young ones",
        "explanation": "'Ụmụntakịrị' refers to small children."
      },
      {
        "id": "ig-u4-l1-q20",
        "type": "matching",
        "prompt": "Match extended kinship terms:",
        "pairs": [
          {
            "native": "Ọgọ nwoke",
            "english": "Son-in-law / Father-in-law (male in-law)",
            "left": "Ọgọ nwoke",
            "right": "Son-in-law / Father-in-law (male in-law)"
          },
          {
            "native": "Ọgọ nwanyị",
            "english": "Daughter-in-law / Mother-in-law",
            "left": "Ọgọ nwanyị",
            "right": "Daughter-in-law / Mother-in-law"
          },
          {
            "native": "Nwadiana",
            "english": "Maternal grandchild / Nephew",
            "left": "Nwadiana",
            "right": "Maternal grandchild / Nephew"
          },
          {
            "native": "Ada",
            "english": "First-born daughter",
            "left": "Ada",
            "right": "First-born daughter"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-5",
    "unitId": "ig-unit-5",
    "unitNumber": 5,
    "level": "Level 1: Beginner (Lower Basic / Primary 1–3)",
    "title": "Unit 5: Basic Action Verbs and Simple Sentences (Ngwaa na Ahịrịokwu Mfe)",
    "subtitle": "Root action verbs (bịa, gaa, rie, mụọ), Subject-Verb-Object (SVO) syntax, and imperative commands.",
    "icon": "Play",
    "color": "#16a34a",
    "lessons": [
      {
        "id": "ig-u5-l1",
        "title": "Lesson 1: Ngwaa Ndị Dị Mkpa na Iwu Ahịrịokwu (Action Verbs & SVO Sentences)",
        "description": "Master root action verbs, conjugate simple present actions, structure basic SVO declarative sentences, and issue polite commands.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u5-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the Igbo verb root for 'to come'?",
            "options": [
              "Bịa",
              "Gaa",
              "Rie",
              "Mụọ"
            ],
            "correctAnswer": "Bịa",
            "explanation": "'Bịa' means come; 'Gaa' means go."
          },
          {
            "id": "ig-u5-l1-q2",
            "type": "matching",
            "prompt": "Match basic Igbo verb roots with English actions:",
            "pairs": [
              {
                "native": "Bịa",
                "english": "To come",
                "left": "Bịa",
                "right": "To come"
              },
              {
                "native": "Gaa",
                "english": "To go",
                "left": "Gaa",
                "right": "To go"
              },
              {
                "native": "Rie",
                "english": "To eat",
                "left": "Rie",
                "right": "To eat"
              },
              {
                "native": "Ṅụọ",
                "english": "To drink",
                "left": "Ṅụọ",
                "right": "To drink"
              }
            ]
          },
          {
            "id": "ig-u5-l1-q3",
            "type": "fill_blank",
            "sentence": "To command someone 'Come here!', you say: 'Bịa ebe ___!'.",
            "missingWord": "a",
            "options": [
              "a",
              "ahụ",
              "ebe",
              "nọ"
            ],
            "correctAnswer": "a",
            "explanation": "'Ebe a' means here; 'Bịa ebe a!' = Come here!"
          },
          {
            "id": "ig-u5-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the SVO sentence: 'Ada na-eri nri' (Ada is eating food):",
            "tokens": [
              "Ada",
              "na-eri",
              "nri"
            ],
            "correctTokens": [
              "Ada",
              "na-eri",
              "nri"
            ]
          },
          {
            "id": "ig-u5-l1-q5",
            "type": "audio_listen",
            "phrase": "Gaa n'ụlọ gị",
            "prompt": "Listen to the command. What does 'Gaa n'ụlọ gị' mean?",
            "options": [
              "Go to your house",
              "Come inside the house",
              "Sit down in your seat",
              "Look at the window"
            ],
            "correctAnswer": "Go to your house",
            "explanation": "'Gaa' = go; 'n'ụlọ gị' = to your house."
          },
          {
            "id": "ig-u5-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does the auxiliary verb marker 'na-' indicate when attached to a verb (e.g., 'na-ede')?",
            "options": [
              "Ongoing continuous action (Present progressive)",
              "Completed past action",
              "Future action",
              "Negative command"
            ],
            "correctAnswer": "Ongoing continuous action (Present progressive)",
            "explanation": "'Na-' marks progressive/continuous aspect in Igbo (na-ede = writing, na-agụ = reading)."
          },
          {
            "id": "ig-u5-l1-q7",
            "type": "matching",
            "prompt": "Match educational action verbs:",
            "pairs": [
              {
                "native": "Mụọ",
                "english": "To learn",
                "left": "Mụọ",
                "right": "To learn"
              },
              {
                "native": "Kụzie",
                "english": "To teach",
                "left": "Kụzie",
                "right": "To teach"
              },
              {
                "native": "Gụọ",
                "english": "To read / count",
                "left": "Gụọ",
                "right": "To read / count"
              },
              {
                "native": "Dee",
                "english": "To write",
                "left": "Dee",
                "right": "To write"
              }
            ]
          },
          {
            "id": "ig-u5-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'I am drinking water', you say: 'M na-aṅụ ___'.",
            "missingWord": "mmiri",
            "options": [
              "mmiri",
              "nri",
              "ọkụ",
              "ite"
            ],
            "correctAnswer": "mmiri",
            "explanation": "'Mmiri' is water; 'na-aṅụ mmiri' = drinking water."
          },
          {
            "id": "ig-u5-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Chidi na-agụ akwụkwọ' (Chidi is reading a book):",
            "tokens": [
              "Chidi",
              "na-agụ",
              "akwụkwọ"
            ],
            "correctTokens": [
              "Chidi",
              "na-agụ",
              "akwụkwọ"
            ]
          },
          {
            "id": "ig-u5-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the standard canonical word order in an Igbo simple declarative sentence?",
            "options": [
              "Subject - Verb - Object (SVO)",
              "Verb - Subject - Object (VSO)",
              "Object - Subject - Verb (OSV)",
              "Subject - Object - Verb (SOV)"
            ],
            "correctAnswer": "Subject - Verb - Object (SVO)",
            "explanation": "Igbo adheres strictly to Subject - Verb - Object (SVO) syntax in declarative statements."
          },
          {
            "id": "ig-u5-l1-q11",
            "type": "audio_listen",
            "phrase": "Nọdụ ala ma gee ntị",
            "prompt": "Listen to the instruction. What does 'Nọdụ ala ma gee ntị' command?",
            "options": [
              "Sit down and listen attentively",
              "Stand up and clap hands",
              "Run quickly outside",
              "Write in your notebook"
            ],
            "correctAnswer": "Sit down and listen attentively",
            "explanation": "'Nọdụ ala' = sit down; 'ma gee ntị' = and listen."
          },
          {
            "id": "ig-u5-l1-q12",
            "type": "matching",
            "prompt": "Match physical movement verbs:",
            "pairs": [
              {
                "native": "Gbaa ọsọ",
                "english": "To run",
                "left": "Gbaa ọsọ",
                "right": "To run"
              },
              {
                "native": "Guzo ọtọ",
                "english": "To stand up",
                "left": "Guzo ọtọ",
                "right": "To stand up"
              },
              {
                "native": "Nọdụ ala",
                "english": "To sit down",
                "left": "Nọdụ ala",
                "right": "To sit down"
              },
              {
                "native": "Kwụsị",
                "english": "To stop / halt",
                "left": "Kwụsị",
                "right": "To stop / halt"
              }
            ]
          },
          {
            "id": "ig-u5-l1-q13",
            "type": "fill_blank",
            "sentence": "To form a negative command ('Do not go!'), Igbo uses the negative particle: '___ agala!'.",
            "missingWord": "Ejula / Adịla / Agala",
            "options": [
              "Agala",
              "Gaa",
              "Bịa",
              "Nọrọ"
            ],
            "correctAnswer": "Agala",
            "explanation": "The suffix '-la' attached to the harmonized verb stem forms the negative imperative: 'Agala!' (Do not go!)."
          },
          {
            "id": "ig-u5-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the command: 'Mechie akwụkwọ gị' (Close your book):",
            "tokens": [
              "Mechie",
              "akwụkwọ",
              "gị"
            ],
            "correctTokens": [
              "Mechie",
              "akwụkwọ",
              "gị"
            ]
          },
          {
            "id": "ig-u5-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Hụ' mean?",
            "options": [
              "To see / to perceive",
              "To hit",
              "To burn",
              "To cook"
            ],
            "correctAnswer": "To see / to perceive",
            "explanation": "'Hụ' means to see or notice (e.g. 'Ahụrụ m ya' = I saw it)."
          },
          {
            "id": "ig-u5-l1-q16",
            "type": "audio_listen",
            "phrase": "Anyị na-amụ asụsụ Igbo",
            "prompt": "Listen to the statement. What are we doing?",
            "options": [
              "We are learning the Igbo language",
              "We are speaking English",
              "We are dancing traditional dance",
              "We are cooking dinner"
            ],
            "correctAnswer": "We are learning the Igbo language",
            "explanation": "'Anyị' = we; 'na-amụ' = are learning; 'asụsụ Igbo' = Igbo language."
          },
          {
            "id": "ig-u5-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Nyere m aka'?",
            "options": [
              "Help me / Assist me (Give me a hand)",
              "Shake my hand",
              "Show me the way",
              "Give me money"
            ],
            "correctAnswer": "Help me / Assist me (Give me a hand)",
            "explanation": "'Nyere m aka' literally means 'give me a hand' (help me)."
          },
          {
            "id": "ig-u5-l1-q18",
            "type": "fill_blank",
            "sentence": "When commanding someone to listen, you say: '___ ntị!' (Pay ear).",
            "missingWord": "Gee",
            "options": [
              "Gee",
              "Rie",
              "Bịa",
              "Hụ"
            ],
            "correctAnswer": "Gee",
            "explanation": "'Gee ntị' means listen / pay ear."
          },
          {
            "id": "ig-u5-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Ụmụaka na-egwu egwu' mean?",
            "options": [
              "The children are playing / dancing",
              "The children are crying",
              "The children are sleeping",
              "The children are eating"
            ],
            "correctAnswer": "The children are playing / dancing",
            "explanation": "'Egwu' = play, music, or dance; 'na-egwu egwu' = playing or dancing."
          },
          {
            "id": "ig-u5-l1-q20",
            "type": "matching",
            "prompt": "Match sensory perception verbs in Igbo:",
            "pairs": [
              {
                "native": "Hụ",
                "english": "To see",
                "left": "Hụ",
                "right": "To see"
              },
              {
                "native": "Nụ",
                "english": "To hear / smell",
                "left": "Nụ",
                "right": "To hear / smell"
              },
              {
                "native": "Metụ",
                "english": "To touch",
                "left": "Metụ",
                "right": "To touch"
              },
              {
                "native": "Detụ ire",
                "english": "To taste (touch tongue)",
                "left": "Detụ ire",
                "right": "To taste (touch tongue)"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u5-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the Igbo verb root for 'to come'?",
        "options": [
          "Bịa",
          "Gaa",
          "Rie",
          "Mụọ"
        ],
        "correctAnswer": "Bịa",
        "explanation": "'Bịa' means come; 'Gaa' means go."
      },
      {
        "id": "ig-u5-l1-q2",
        "type": "matching",
        "prompt": "Match basic Igbo verb roots with English actions:",
        "pairs": [
          {
            "native": "Bịa",
            "english": "To come",
            "left": "Bịa",
            "right": "To come"
          },
          {
            "native": "Gaa",
            "english": "To go",
            "left": "Gaa",
            "right": "To go"
          },
          {
            "native": "Rie",
            "english": "To eat",
            "left": "Rie",
            "right": "To eat"
          },
          {
            "native": "Ṅụọ",
            "english": "To drink",
            "left": "Ṅụọ",
            "right": "To drink"
          }
        ]
      },
      {
        "id": "ig-u5-l1-q3",
        "type": "fill_blank",
        "sentence": "To command someone 'Come here!', you say: 'Bịa ebe ___!'.",
        "missingWord": "a",
        "options": [
          "a",
          "ahụ",
          "ebe",
          "nọ"
        ],
        "correctAnswer": "a",
        "explanation": "'Ebe a' means here; 'Bịa ebe a!' = Come here!"
      },
      {
        "id": "ig-u5-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the SVO sentence: 'Ada na-eri nri' (Ada is eating food):",
        "tokens": [
          "Ada",
          "na-eri",
          "nri"
        ],
        "correctTokens": [
          "Ada",
          "na-eri",
          "nri"
        ]
      },
      {
        "id": "ig-u5-l1-q5",
        "type": "audio_listen",
        "phrase": "Gaa n'ụlọ gị",
        "prompt": "Listen to the command. What does 'Gaa n'ụlọ gị' mean?",
        "options": [
          "Go to your house",
          "Come inside the house",
          "Sit down in your seat",
          "Look at the window"
        ],
        "correctAnswer": "Go to your house",
        "explanation": "'Gaa' = go; 'n'ụlọ gị' = to your house."
      },
      {
        "id": "ig-u5-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does the auxiliary verb marker 'na-' indicate when attached to a verb (e.g., 'na-ede')?",
        "options": [
          "Ongoing continuous action (Present progressive)",
          "Completed past action",
          "Future action",
          "Negative command"
        ],
        "correctAnswer": "Ongoing continuous action (Present progressive)",
        "explanation": "'Na-' marks progressive/continuous aspect in Igbo (na-ede = writing, na-agụ = reading)."
      },
      {
        "id": "ig-u5-l1-q7",
        "type": "matching",
        "prompt": "Match educational action verbs:",
        "pairs": [
          {
            "native": "Mụọ",
            "english": "To learn",
            "left": "Mụọ",
            "right": "To learn"
          },
          {
            "native": "Kụzie",
            "english": "To teach",
            "left": "Kụzie",
            "right": "To teach"
          },
          {
            "native": "Gụọ",
            "english": "To read / count",
            "left": "Gụọ",
            "right": "To read / count"
          },
          {
            "native": "Dee",
            "english": "To write",
            "left": "Dee",
            "right": "To write"
          }
        ]
      },
      {
        "id": "ig-u5-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'I am drinking water', you say: 'M na-aṅụ ___'.",
        "missingWord": "mmiri",
        "options": [
          "mmiri",
          "nri",
          "ọkụ",
          "ite"
        ],
        "correctAnswer": "mmiri",
        "explanation": "'Mmiri' is water; 'na-aṅụ mmiri' = drinking water."
      },
      {
        "id": "ig-u5-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Chidi na-agụ akwụkwọ' (Chidi is reading a book):",
        "tokens": [
          "Chidi",
          "na-agụ",
          "akwụkwọ"
        ],
        "correctTokens": [
          "Chidi",
          "na-agụ",
          "akwụkwọ"
        ]
      },
      {
        "id": "ig-u5-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the standard canonical word order in an Igbo simple declarative sentence?",
        "options": [
          "Subject - Verb - Object (SVO)",
          "Verb - Subject - Object (VSO)",
          "Object - Subject - Verb (OSV)",
          "Subject - Object - Verb (SOV)"
        ],
        "correctAnswer": "Subject - Verb - Object (SVO)",
        "explanation": "Igbo adheres strictly to Subject - Verb - Object (SVO) syntax in declarative statements."
      },
      {
        "id": "ig-u5-l1-q11",
        "type": "audio_listen",
        "phrase": "Nọdụ ala ma gee ntị",
        "prompt": "Listen to the instruction. What does 'Nọdụ ala ma gee ntị' command?",
        "options": [
          "Sit down and listen attentively",
          "Stand up and clap hands",
          "Run quickly outside",
          "Write in your notebook"
        ],
        "correctAnswer": "Sit down and listen attentively",
        "explanation": "'Nọdụ ala' = sit down; 'ma gee ntị' = and listen."
      },
      {
        "id": "ig-u5-l1-q12",
        "type": "matching",
        "prompt": "Match physical movement verbs:",
        "pairs": [
          {
            "native": "Gbaa ọsọ",
            "english": "To run",
            "left": "Gbaa ọsọ",
            "right": "To run"
          },
          {
            "native": "Guzo ọtọ",
            "english": "To stand up",
            "left": "Guzo ọtọ",
            "right": "To stand up"
          },
          {
            "native": "Nọdụ ala",
            "english": "To sit down",
            "left": "Nọdụ ala",
            "right": "To sit down"
          },
          {
            "native": "Kwụsị",
            "english": "To stop / halt",
            "left": "Kwụsị",
            "right": "To stop / halt"
          }
        ]
      },
      {
        "id": "ig-u5-l1-q13",
        "type": "fill_blank",
        "sentence": "To form a negative command ('Do not go!'), Igbo uses the negative particle: '___ agala!'.",
        "missingWord": "Ejula / Adịla / Agala",
        "options": [
          "Agala",
          "Gaa",
          "Bịa",
          "Nọrọ"
        ],
        "correctAnswer": "Agala",
        "explanation": "The suffix '-la' attached to the harmonized verb stem forms the negative imperative: 'Agala!' (Do not go!)."
      },
      {
        "id": "ig-u5-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the command: 'Mechie akwụkwọ gị' (Close your book):",
        "tokens": [
          "Mechie",
          "akwụkwọ",
          "gị"
        ],
        "correctTokens": [
          "Mechie",
          "akwụkwọ",
          "gị"
        ]
      },
      {
        "id": "ig-u5-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Hụ' mean?",
        "options": [
          "To see / to perceive",
          "To hit",
          "To burn",
          "To cook"
        ],
        "correctAnswer": "To see / to perceive",
        "explanation": "'Hụ' means to see or notice (e.g. 'Ahụrụ m ya' = I saw it)."
      },
      {
        "id": "ig-u5-l1-q16",
        "type": "audio_listen",
        "phrase": "Anyị na-amụ asụsụ Igbo",
        "prompt": "Listen to the statement. What are we doing?",
        "options": [
          "We are learning the Igbo language",
          "We are speaking English",
          "We are dancing traditional dance",
          "We are cooking dinner"
        ],
        "correctAnswer": "We are learning the Igbo language",
        "explanation": "'Anyị' = we; 'na-amụ' = are learning; 'asụsụ Igbo' = Igbo language."
      },
      {
        "id": "ig-u5-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Nyere m aka'?",
        "options": [
          "Help me / Assist me (Give me a hand)",
          "Shake my hand",
          "Show me the way",
          "Give me money"
        ],
        "correctAnswer": "Help me / Assist me (Give me a hand)",
        "explanation": "'Nyere m aka' literally means 'give me a hand' (help me)."
      },
      {
        "id": "ig-u5-l1-q18",
        "type": "fill_blank",
        "sentence": "When commanding someone to listen, you say: '___ ntị!' (Pay ear).",
        "missingWord": "Gee",
        "options": [
          "Gee",
          "Rie",
          "Bịa",
          "Hụ"
        ],
        "correctAnswer": "Gee",
        "explanation": "'Gee ntị' means listen / pay ear."
      },
      {
        "id": "ig-u5-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Ụmụaka na-egwu egwu' mean?",
        "options": [
          "The children are playing / dancing",
          "The children are crying",
          "The children are sleeping",
          "The children are eating"
        ],
        "correctAnswer": "The children are playing / dancing",
        "explanation": "'Egwu' = play, music, or dance; 'na-egwu egwu' = playing or dancing."
      },
      {
        "id": "ig-u5-l1-q20",
        "type": "matching",
        "prompt": "Match sensory perception verbs in Igbo:",
        "pairs": [
          {
            "native": "Hụ",
            "english": "To see",
            "left": "Hụ",
            "right": "To see"
          },
          {
            "native": "Nụ",
            "english": "To hear / smell",
            "left": "Nụ",
            "right": "To hear / smell"
          },
          {
            "native": "Metụ",
            "english": "To touch",
            "left": "Metụ",
            "right": "To touch"
          },
          {
            "native": "Detụ ire",
            "english": "To taste (touch tongue)",
            "left": "Detụ ire",
            "right": "To taste (touch tongue)"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-6",
    "unitId": "ig-unit-6",
    "unitNumber": 6,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 6: Pronouns and Possessives (Nnọchiaha na Enwene)",
    "subtitle": "Personal pronouns (Mu, Gị, Ya, Anyị, Unu, Ha), possessive qualifiers (nkem, nke gị), and pronominal clitics.",
    "icon": "Layers",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ig-u6-l1",
        "title": "Lesson 1: Nnọchiaha Ndị Dị Iche Iche na Enwene (Pronouns & Ownership)",
        "description": "Master subject and object pronouns, clitic prefixing, and expressing ownership with nkem, nke gị, and nke anyị.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u6-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the 1st person plural pronoun ('We / us') in standard Igbo?",
            "options": [
              "Anyị",
              "Unu",
              "Ha",
              "Ya"
            ],
            "correctAnswer": "Anyị",
            "explanation": "'Anyị' means 'we' or 'us'. 'Unu' is plural 'you', and 'Ha' is 'they/them'."
          },
          {
            "id": "ig-u6-l1-q2",
            "type": "matching",
            "prompt": "Match Igbo personal pronouns with English translations:",
            "pairs": [
              {
                "native": "Mu / M",
                "english": "I / me",
                "left": "Mu / M",
                "right": "I / me"
              },
              {
                "native": "Gị",
                "english": "You (singular)",
                "left": "Gị",
                "right": "You (singular)"
              },
              {
                "native": "Ya",
                "english": "He / she / him / her",
                "left": "Ya",
                "right": "He / she / him / her"
              },
              {
                "native": "Ha",
                "english": "They / them",
                "left": "Ha",
                "right": "They / them"
              }
            ]
          },
          {
            "id": "ig-u6-l1-q3",
            "type": "fill_blank",
            "sentence": "To say 'This book is mine', you say: 'Akwụkwọ a bụ ___'.",
            "missingWord": "nkem",
            "options": [
              "nkem",
              "nke gị",
              "nke ya",
              "nke ha"
            ],
            "correctAnswer": "nkem",
            "explanation": "'Nkem' (nke + m) means 'mine'."
          },
          {
            "id": "ig-u6-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Unu bụ ụmụakwụkwọ' (You all are students):",
            "tokens": [
              "Unu",
              "bụ",
              "ụmụakwụkwọ"
            ],
            "correctTokens": [
              "Unu",
              "bụ",
              "ụmụakwụkwọ"
            ]
          },
          {
            "id": "ig-u6-l1-q5",
            "type": "audio_listen",
            "phrase": "Ụlọ a bụ nke anyị",
            "prompt": "Listen to the statement. What does 'Ụlọ a bụ nke anyị' mean?",
            "options": [
              "This house is ours",
              "This house is yours",
              "This house is theirs",
              "Whose house is this?"
            ],
            "correctAnswer": "This house is ours",
            "explanation": "'Nke anyị' means 'ours'; 'Ụlọ a bụ nke anyị' = This house is ours."
          },
          {
            "id": "ig-u6-l1-q6",
            "type": "multiple_choice",
            "prompt": "How do you say 'your father' in Igbo using the possessive suffix?",
            "options": [
              "Nna gị",
              "Nna m",
              "Nna ya",
              "Nna anyị"
            ],
            "correctAnswer": "Nna gị",
            "explanation": "'Nna gị' means your father (gị = your)."
          },
          {
            "id": "ig-u6-l1-q7",
            "type": "matching",
            "prompt": "Match possessive qualifiers (enwene):",
            "pairs": [
              {
                "native": "Nke gị",
                "english": "Yours (singular)",
                "left": "Nke gị",
                "right": "Yours (singular)"
              },
              {
                "native": "Nke ya",
                "english": "His / hers",
                "left": "Nke ya",
                "right": "His / hers"
              },
              {
                "native": "Nke unu",
                "english": "Yours (plural)",
                "left": "Nke unu",
                "right": "Yours (plural)"
              },
              {
                "native": "Nke ha",
                "english": "Theirs",
                "left": "Nke ha",
                "right": "Theirs"
              }
            ]
          },
          {
            "id": "ig-u6-l1-q8",
            "type": "fill_blank",
            "sentence": "When asking 'Whose is this?', you ask: 'Nke ___ ka ọ bụ?'.",
            "missingWord": "onye",
            "options": [
              "onye",
              "ebe",
              "gịnị",
              "olee"
            ],
            "correctAnswer": "onye",
            "explanation": "'Nke onye' means 'whose' (literally: of who); 'onye' = person/who."
          },
          {
            "id": "ig-u6-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ha na-aga ahịa' (They are going to market):",
            "tokens": [
              "Ha",
              "na-aga",
              "ahịa"
            ],
            "correctTokens": [
              "Ha",
              "na-aga",
              "ahịa"
            ]
          },
          {
            "id": "ig-u6-l1-q10",
            "type": "multiple_choice",
            "prompt": "Which pair shows 3rd person singular subject clitic pronouns according to vowel harmony?",
            "options": [
              "Ọ and Ọ (ọ na-aga / o na-eje)",
              "M and Anyị",
              "Gị and Unu",
              "Ha and Mu"
            ],
            "correctAnswer": "Ọ and Ọ (ọ na-aga / o na-eje)",
            "explanation": "In standard Igbo, 'o' is used before light verb roots (o dere) and 'ọ' before heavy verb roots (ọ gara)."
          },
          {
            "id": "ig-u6-l1-q11",
            "type": "audio_listen",
            "phrase": "Onye kpọrọ m?",
            "prompt": "Listen to the question. What does 'Onye kpọrọ m?' ask?",
            "options": [
              "Who called me?",
              "Who saw you?",
              "Where are you going?",
              "Why are they here?"
            ],
            "correctAnswer": "Who called me?",
            "explanation": "'Onye' = who; 'kpọrọ' = called; 'm' = me: 'Who called me?'."
          },
          {
            "id": "ig-u6-l1-q12",
            "type": "matching",
            "prompt": "Match demonstrative qualifiers with English meanings:",
            "pairs": [
              {
                "native": "Nke a",
                "english": "This one",
                "left": "Nke a",
                "right": "This one"
              },
              {
                "native": "Nke ahụ",
                "english": "That one",
                "left": "Nke ahụ",
                "right": "That one"
              },
              {
                "native": "Ndị a",
                "english": "These ones",
                "left": "Ndị a",
                "right": "These ones"
              },
              {
                "native": "Ndị ahụ",
                "english": "Those ones",
                "left": "Ndị ahụ",
                "right": "Those ones"
              }
            ]
          },
          {
            "id": "ig-u6-l1-q13",
            "type": "fill_blank",
            "sentence": "To say 'my mother', you attach the first-person possessive clitic: 'Nne ___'.",
            "missingWord": "m",
            "options": [
              "m",
              "gị",
              "ya",
              "ha"
            ],
            "correctAnswer": "m",
            "explanation": "'Nne m' is my mother."
          },
          {
            "id": "ig-u6-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọ bụ enyi m' (He/She is my friend):",
            "tokens": [
              "Ọ",
              "bụ",
              "enyi",
              "m"
            ],
            "correctTokens": [
              "Ọ",
              "bụ",
              "enyi",
              "m"
            ]
          },
          {
            "id": "ig-u6-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Anyị niile' mean?",
            "options": [
              "All of us / We all",
              "Only them",
              "You and me alone",
              "Nobody"
            ],
            "correctAnswer": "All of us / We all",
            "explanation": "'Niile' = all; 'Anyị niile' = All of us."
          },
          {
            "id": "ig-u6-l1-q16",
            "type": "audio_listen",
            "phrase": "Ego a bụ nke ha",
            "prompt": "Listen to the phrase. What does 'Ego a bụ nke ha' mean?",
            "options": [
              "This money is theirs",
              "This money is mine",
              "Bring their money here",
              "Count your money"
            ],
            "correctAnswer": "This money is theirs",
            "explanation": "'Ego a' = this money; 'bụ nke ha' = is theirs."
          },
          {
            "id": "ig-u6-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'himself / herself' in reflexive Igbo?",
            "options": [
              "Onwe ya",
              "Onwe m",
              "Onwe gị",
              "Onwe anyị"
            ],
            "correctAnswer": "Onwe ya",
            "explanation": "'Onwe ya' means himself/herself (onwe = self)."
          },
          {
            "id": "ig-u6-l1-q18",
            "type": "fill_blank",
            "sentence": "The reflexive expression for 'myself' in Igbo is 'Onwe ___'.",
            "missingWord": "m",
            "options": [
              "m",
              "gị",
              "ya",
              "ha"
            ],
            "correctAnswer": "m",
            "explanation": "'Onwe m' means myself."
          },
          {
            "id": "ig-u6-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Gịnị ka ị chọrọ?' ask?",
            "options": [
              "What do you want?",
              "Where are you going?",
              "Who is speaking?",
              "When will you come?"
            ],
            "correctAnswer": "What do you want?",
            "explanation": "'Gịnị' = what; 'ka ị chọrọ' = that you want."
          },
          {
            "id": "ig-u6-l1-q20",
            "type": "matching",
            "prompt": "Match interrogative pronouns with English definitions:",
            "pairs": [
              {
                "native": "Onye?",
                "english": "Who?",
                "left": "Onye?",
                "right": "Who?"
              },
              {
                "native": "Gịnị?",
                "english": "What?",
                "left": "Gịnị?",
                "right": "What?"
              },
              {
                "native": "Ebee?",
                "english": "Where?",
                "left": "Ebee?",
                "right": "Where?"
              },
              {
                "native": "Ole / Olee?",
                "english": "Which / How many?",
                "left": "Ole / Olee?",
                "right": "Which / How many?"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u6-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the 1st person plural pronoun ('We / us') in standard Igbo?",
        "options": [
          "Anyị",
          "Unu",
          "Ha",
          "Ya"
        ],
        "correctAnswer": "Anyị",
        "explanation": "'Anyị' means 'we' or 'us'. 'Unu' is plural 'you', and 'Ha' is 'they/them'."
      },
      {
        "id": "ig-u6-l1-q2",
        "type": "matching",
        "prompt": "Match Igbo personal pronouns with English translations:",
        "pairs": [
          {
            "native": "Mu / M",
            "english": "I / me",
            "left": "Mu / M",
            "right": "I / me"
          },
          {
            "native": "Gị",
            "english": "You (singular)",
            "left": "Gị",
            "right": "You (singular)"
          },
          {
            "native": "Ya",
            "english": "He / she / him / her",
            "left": "Ya",
            "right": "He / she / him / her"
          },
          {
            "native": "Ha",
            "english": "They / them",
            "left": "Ha",
            "right": "They / them"
          }
        ]
      },
      {
        "id": "ig-u6-l1-q3",
        "type": "fill_blank",
        "sentence": "To say 'This book is mine', you say: 'Akwụkwọ a bụ ___'.",
        "missingWord": "nkem",
        "options": [
          "nkem",
          "nke gị",
          "nke ya",
          "nke ha"
        ],
        "correctAnswer": "nkem",
        "explanation": "'Nkem' (nke + m) means 'mine'."
      },
      {
        "id": "ig-u6-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Unu bụ ụmụakwụkwọ' (You all are students):",
        "tokens": [
          "Unu",
          "bụ",
          "ụmụakwụkwọ"
        ],
        "correctTokens": [
          "Unu",
          "bụ",
          "ụmụakwụkwọ"
        ]
      },
      {
        "id": "ig-u6-l1-q5",
        "type": "audio_listen",
        "phrase": "Ụlọ a bụ nke anyị",
        "prompt": "Listen to the statement. What does 'Ụlọ a bụ nke anyị' mean?",
        "options": [
          "This house is ours",
          "This house is yours",
          "This house is theirs",
          "Whose house is this?"
        ],
        "correctAnswer": "This house is ours",
        "explanation": "'Nke anyị' means 'ours'; 'Ụlọ a bụ nke anyị' = This house is ours."
      },
      {
        "id": "ig-u6-l1-q6",
        "type": "multiple_choice",
        "prompt": "How do you say 'your father' in Igbo using the possessive suffix?",
        "options": [
          "Nna gị",
          "Nna m",
          "Nna ya",
          "Nna anyị"
        ],
        "correctAnswer": "Nna gị",
        "explanation": "'Nna gị' means your father (gị = your)."
      },
      {
        "id": "ig-u6-l1-q7",
        "type": "matching",
        "prompt": "Match possessive qualifiers (enwene):",
        "pairs": [
          {
            "native": "Nke gị",
            "english": "Yours (singular)",
            "left": "Nke gị",
            "right": "Yours (singular)"
          },
          {
            "native": "Nke ya",
            "english": "His / hers",
            "left": "Nke ya",
            "right": "His / hers"
          },
          {
            "native": "Nke unu",
            "english": "Yours (plural)",
            "left": "Nke unu",
            "right": "Yours (plural)"
          },
          {
            "native": "Nke ha",
            "english": "Theirs",
            "left": "Nke ha",
            "right": "Theirs"
          }
        ]
      },
      {
        "id": "ig-u6-l1-q8",
        "type": "fill_blank",
        "sentence": "When asking 'Whose is this?', you ask: 'Nke ___ ka ọ bụ?'.",
        "missingWord": "onye",
        "options": [
          "onye",
          "ebe",
          "gịnị",
          "olee"
        ],
        "correctAnswer": "onye",
        "explanation": "'Nke onye' means 'whose' (literally: of who); 'onye' = person/who."
      },
      {
        "id": "ig-u6-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ha na-aga ahịa' (They are going to market):",
        "tokens": [
          "Ha",
          "na-aga",
          "ahịa"
        ],
        "correctTokens": [
          "Ha",
          "na-aga",
          "ahịa"
        ]
      },
      {
        "id": "ig-u6-l1-q10",
        "type": "multiple_choice",
        "prompt": "Which pair shows 3rd person singular subject clitic pronouns according to vowel harmony?",
        "options": [
          "Ọ and Ọ (ọ na-aga / o na-eje)",
          "M and Anyị",
          "Gị and Unu",
          "Ha and Mu"
        ],
        "correctAnswer": "Ọ and Ọ (ọ na-aga / o na-eje)",
        "explanation": "In standard Igbo, 'o' is used before light verb roots (o dere) and 'ọ' before heavy verb roots (ọ gara)."
      },
      {
        "id": "ig-u6-l1-q11",
        "type": "audio_listen",
        "phrase": "Onye kpọrọ m?",
        "prompt": "Listen to the question. What does 'Onye kpọrọ m?' ask?",
        "options": [
          "Who called me?",
          "Who saw you?",
          "Where are you going?",
          "Why are they here?"
        ],
        "correctAnswer": "Who called me?",
        "explanation": "'Onye' = who; 'kpọrọ' = called; 'm' = me: 'Who called me?'."
      },
      {
        "id": "ig-u6-l1-q12",
        "type": "matching",
        "prompt": "Match demonstrative qualifiers with English meanings:",
        "pairs": [
          {
            "native": "Nke a",
            "english": "This one",
            "left": "Nke a",
            "right": "This one"
          },
          {
            "native": "Nke ahụ",
            "english": "That one",
            "left": "Nke ahụ",
            "right": "That one"
          },
          {
            "native": "Ndị a",
            "english": "These ones",
            "left": "Ndị a",
            "right": "These ones"
          },
          {
            "native": "Ndị ahụ",
            "english": "Those ones",
            "left": "Ndị ahụ",
            "right": "Those ones"
          }
        ]
      },
      {
        "id": "ig-u6-l1-q13",
        "type": "fill_blank",
        "sentence": "To say 'my mother', you attach the first-person possessive clitic: 'Nne ___'.",
        "missingWord": "m",
        "options": [
          "m",
          "gị",
          "ya",
          "ha"
        ],
        "correctAnswer": "m",
        "explanation": "'Nne m' is my mother."
      },
      {
        "id": "ig-u6-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọ bụ enyi m' (He/She is my friend):",
        "tokens": [
          "Ọ",
          "bụ",
          "enyi",
          "m"
        ],
        "correctTokens": [
          "Ọ",
          "bụ",
          "enyi",
          "m"
        ]
      },
      {
        "id": "ig-u6-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Anyị niile' mean?",
        "options": [
          "All of us / We all",
          "Only them",
          "You and me alone",
          "Nobody"
        ],
        "correctAnswer": "All of us / We all",
        "explanation": "'Niile' = all; 'Anyị niile' = All of us."
      },
      {
        "id": "ig-u6-l1-q16",
        "type": "audio_listen",
        "phrase": "Ego a bụ nke ha",
        "prompt": "Listen to the phrase. What does 'Ego a bụ nke ha' mean?",
        "options": [
          "This money is theirs",
          "This money is mine",
          "Bring their money here",
          "Count your money"
        ],
        "correctAnswer": "This money is theirs",
        "explanation": "'Ego a' = this money; 'bụ nke ha' = is theirs."
      },
      {
        "id": "ig-u6-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'himself / herself' in reflexive Igbo?",
        "options": [
          "Onwe ya",
          "Onwe m",
          "Onwe gị",
          "Onwe anyị"
        ],
        "correctAnswer": "Onwe ya",
        "explanation": "'Onwe ya' means himself/herself (onwe = self)."
      },
      {
        "id": "ig-u6-l1-q18",
        "type": "fill_blank",
        "sentence": "The reflexive expression for 'myself' in Igbo is 'Onwe ___'.",
        "missingWord": "m",
        "options": [
          "m",
          "gị",
          "ya",
          "ha"
        ],
        "correctAnswer": "m",
        "explanation": "'Onwe m' means myself."
      },
      {
        "id": "ig-u6-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Gịnị ka ị chọrọ?' ask?",
        "options": [
          "What do you want?",
          "Where are you going?",
          "Who is speaking?",
          "When will you come?"
        ],
        "correctAnswer": "What do you want?",
        "explanation": "'Gịnị' = what; 'ka ị chọrọ' = that you want."
      },
      {
        "id": "ig-u6-l1-q20",
        "type": "matching",
        "prompt": "Match interrogative pronouns with English definitions:",
        "pairs": [
          {
            "native": "Onye?",
            "english": "Who?",
            "left": "Onye?",
            "right": "Who?"
          },
          {
            "native": "Gịnị?",
            "english": "What?",
            "left": "Gịnị?",
            "right": "What?"
          },
          {
            "native": "Ebee?",
            "english": "Where?",
            "left": "Ebee?",
            "right": "Where?"
          },
          {
            "native": "Ole / Olee?",
            "english": "Which / How many?",
            "left": "Ole / Olee?",
            "right": "Which / How many?"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-7",
    "unitId": "ig-unit-7",
    "unitNumber": 7,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 7: Time, Calendar, and the Four Market Days (Oge na Ahịa Anọ Nke Igbo)",
    "subtitle": "The 4-day Igbo market week (Eke, Orie, Afọ, Nkwọ), telling clock time, and environmental seasons.",
    "icon": "Sun",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ig-u7-l1",
        "title": "Lesson 1: Ahịa Anọ Nke Igbo, Elekere na Oge (Igbo Calendar & Time)",
        "description": "Learn the sacred four-day traditional cycle (Eke, Orie, Afọ, Nkwọ), telling time on the clock, and seasons (Ọkọchị, Udu mmiri).",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u7-l1-q1",
            "type": "multiple_choice",
            "prompt": "How many days constitute the traditional Igbo native market cycle (Izu nta)?",
            "options": [
              "4 days",
              "7 days",
              "10 days",
              "5 days"
            ],
            "correctAnswer": "4 days",
            "explanation": "The traditional Igbo week (Izu nta) has 4 sacred market days: Eke, Orie, Afọ, and Nkwọ."
          },
          {
            "id": "ig-u7-l1-q2",
            "type": "matching",
            "prompt": "Match the four traditional Igbo market days (Ahịa anọ) in sequential order:",
            "pairs": [
              {
                "native": "Eke",
                "english": "1st market day (associated with the Sun / Creation)",
                "left": "Eke",
                "right": "1st market day (associated with the Sun / Creation)"
              },
              {
                "native": "Orie",
                "english": "2nd market day",
                "left": "Orie",
                "right": "2nd market day"
              },
              {
                "native": "Afọ",
                "english": "3rd market day",
                "left": "Afọ",
                "right": "3rd market day"
              },
              {
                "native": "Nkwọ",
                "english": "4th market day (closing the 4-day cycle)",
                "left": "Nkwọ",
                "right": "4th market day (closing the 4-day cycle)"
              }
            ]
          },
          {
            "id": "ig-u7-l1-q3",
            "type": "fill_blank",
            "sentence": "In traditional Igbo naming conventions, a male born on Eke day is often named 'Nweke' or '___'.",
            "missingWord": "Okeke",
            "options": [
              "Okeke",
              "Okorie",
              "Okafor",
              "Okonkwo"
            ],
            "correctAnswer": "Okeke",
            "explanation": "Male market day names: Okeke/Nweke (Eke), Okorie/Nworie (Orie), Okafor/Nwafor (Afọ), Okonkwo/Nwankwo (Nkwọ)."
          },
          {
            "id": "ig-u7-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the four market days in cycle: 'Eke, Orie, Afọ, Nkwọ':",
            "tokens": [
              "Eke,",
              "Orie,",
              "Afọ,",
              "Nkwọ"
            ],
            "correctTokens": [
              "Eke,",
              "Orie,",
              "Afọ,",
              "Nkwọ"
            ]
          },
          {
            "id": "ig-u7-l1-q5",
            "type": "audio_listen",
            "phrase": "Udu mmiri na-ezo",
            "prompt": "Listen to the seasonal statement. What weather is being described?",
            "options": [
              "The rainy season is falling (Rain is pouring)",
              "Dry dust is blowing",
              "The sun is scorching hot",
              "Harmattan cold has arrived"
            ],
            "correctAnswer": "The rainy season is falling (Rain is pouring)",
            "explanation": "'Udu mmiri' = rainy season; 'na-ezo' = is raining/falling."
          },
          {
            "id": "ig-u7-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is the Igbo term for the dry season?",
            "options": [
              "Ọkọchị",
              "Udu mmiri",
              "Ụgụrụ",
              "Oge oyi"
            ],
            "correctAnswer": "Ọkọchị",
            "explanation": "'Ọkọchị' is the dry season, whereas 'Udu mmiri' is the rainy season."
          },
          {
            "id": "ig-u7-l1-q7",
            "type": "matching",
            "prompt": "Match seasons and meteorological phenomena in Igbo:",
            "pairs": [
              {
                "native": "Ọkọchị",
                "english": "Dry season",
                "left": "Ọkọchị",
                "right": "Dry season"
              },
              {
                "native": "Udu mmiri",
                "english": "Rainy season",
                "left": "Udu mmiri",
                "right": "Rainy season"
              },
              {
                "native": "Ụgụrụ",
                "english": "Harmattan (cool dusty dry wind)",
                "left": "Ụgụrụ",
                "right": "Harmattan (cool dusty dry wind)"
              },
              {
                "native": "Àmùmà",
                "english": "Lightning",
                "left": "Àmùmà",
                "right": "Lightning"
              }
            ]
          },
          {
            "id": "ig-u7-l1-q8",
            "type": "fill_blank",
            "sentence": "To say 'It is two o'clock' on the clock, you say: 'Ọ kụrụ elekere ___'.",
            "missingWord": "abụọ",
            "options": [
              "abụọ",
              "otu",
              "atọ",
              "anọ"
            ],
            "correctAnswer": "abụọ",
            "explanation": "'Elekere abụọ' = two o'clock (elekere = clock/hour)."
          },
          {
            "id": "ig-u7-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to ask: 'Elekere ole ka ọ kụrụ?' (What time is it?):",
            "tokens": [
              "Elekere",
              "ole",
              "ka",
              "ọ",
              "kụrụ?"
            ],
            "correctTokens": [
              "Elekere",
              "ole",
              "ka",
              "ọ",
              "kụrụ?"
            ]
          },
          {
            "id": "ig-u7-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Ọkara' mean when telling time (e.g. 'Elekere atọ na ọkara')?",
            "options": [
              "Half (Half past three / 3:30)",
              "Quarter to three",
              "Midnight",
              "Noon"
            ],
            "correctAnswer": "Half (Half past three / 3:30)",
            "explanation": "'Ọkara' means half; 'elekere atọ na ọkara' = 3:30 (half past three)."
          },
          {
            "id": "ig-u7-l1-q11",
            "type": "audio_listen",
            "phrase": "Anyị ga-aga ahịa n'ụbọchị Nkwọ",
            "prompt": "Listen to the plan. On which market day are we going to market?",
            "options": [
              "On Nkwọ day",
              "On Eke day",
              "On Orie day",
              "On Afọ day"
            ],
            "correctAnswer": "On Nkwọ day",
            "explanation": "'N'ụbọchị Nkwọ' = on Nkwọ day."
          },
          {
            "id": "ig-u7-l1-q12",
            "type": "matching",
            "prompt": "Match female market day names with market days:",
            "pairs": [
              {
                "native": "Mgbeke",
                "english": "Female born on Eke day",
                "left": "Mgbeke",
                "right": "Female born on Eke day"
              },
              {
                "native": "Mgborie",
                "english": "Female born on Orie day",
                "left": "Mgborie",
                "right": "Female born on Orie day"
              },
              {
                "native": "Mgbafor",
                "english": "Female born on Afọ day",
                "left": "Mgbafor",
                "right": "Female born on Afọ day"
              },
              {
                "native": "Mgbankwo",
                "english": "Female born on Nkwọ day",
                "left": "Mgbankwo",
                "right": "Female born on Nkwọ day"
              }
            ]
          },
          {
            "id": "ig-u7-l1-q13",
            "type": "fill_blank",
            "sentence": "Thunder in Igbo is called 'Egbe ___'.",
            "missingWord": "igwe",
            "options": [
              "igwe",
              "ala",
              "mmiri",
              "ọkụ"
            ],
            "correctAnswer": "igwe",
            "explanation": "'Egbe igwe' (literally: gun of the sky) is thunder."
          },
          {
            "id": "ig-u7-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Chi ejiela' (Night has fallen):",
            "tokens": [
              "Chi",
              "ejiela"
            ],
            "correctTokens": [
              "Chi",
              "ejiela"
            ]
          },
          {
            "id": "ig-u7-l1-q15",
            "type": "multiple_choice",
            "prompt": "How many market days (ahịa anọ) make up one traditional lunar month in the Igbo calendar?",
            "options": [
              "Seven 4-day cycles (28 days)",
              "Thirty days exactly",
              "Ten 4-day cycles",
              "Fourteen days"
            ],
            "correctAnswer": "Seven 4-day cycles (28 days)",
            "explanation": "An Igbo month (ọnwa) traditionally comprises seven 4-day weeks (izu asaa), equaling 28 days."
          },
          {
            "id": "ig-u7-l1-q16",
            "type": "audio_listen",
            "phrase": "Anwụ na-amụke nke ukwuu taa",
            "prompt": "Listen to the weather description. What is happening today?",
            "options": [
              "The sun is shining very brightly today",
              "Heavy rain is flooding the roads",
              "The harmattan dust is blinding",
              "Strong winds are blowing the trees"
            ],
            "correctAnswer": "The sun is shining very brightly today",
            "explanation": "'Anwụ' = sun/sunshine; 'na-amụke' = is shining brightly."
          },
          {
            "id": "ig-u7-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you say 'Yesterday' in Igbo?",
            "options": [
              "Nnyaahụ",
              "Taa",
              "Echi",
              "Nnọọ"
            ],
            "correctAnswer": "Nnyaahụ",
            "explanation": "'Nnyaahụ' = yesterday; 'Taa' = today; 'Echi' = tomorrow."
          },
          {
            "id": "ig-u7-l1-q18",
            "type": "fill_blank",
            "sentence": "The Igbo word for 'Tomorrow' is '___'.",
            "missingWord": "Echi",
            "options": [
              "Echi",
              "Taa",
              "Nnyaahụ",
              "Izu"
            ],
            "correctAnswer": "Echi",
            "explanation": "'Echi' means tomorrow."
          },
          {
            "id": "ig-u7-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Ehihie' refer to in the daily cycle?",
            "options": [
              "Afternoon / Midday",
              "Early dawn",
              "Midnight",
              "Sunset"
            ],
            "correctAnswer": "Afternoon / Midday",
            "explanation": "'Ehihie' is the afternoon or midday period."
          },
          {
            "id": "ig-u7-l1-q20",
            "type": "matching",
            "prompt": "Match temporal adverbs in Igbo:",
            "pairs": [
              {
                "native": "Taa",
                "english": "Today",
                "left": "Taa",
                "right": "Today"
              },
              {
                "native": "Nnyaahụ",
                "english": "Yesterday",
                "left": "Nnyaahụ",
                "right": "Yesterday"
              },
              {
                "native": "Echi",
                "english": "Tomorrow",
                "left": "Echi",
                "right": "Tomorrow"
              },
              {
                "native": "Ugbu a",
                "english": "Now / Right at this moment",
                "left": "Ugbu a",
                "right": "Now / Right at this moment"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u7-l1-q1",
        "type": "multiple_choice",
        "prompt": "How many days constitute the traditional Igbo native market cycle (Izu nta)?",
        "options": [
          "4 days",
          "7 days",
          "10 days",
          "5 days"
        ],
        "correctAnswer": "4 days",
        "explanation": "The traditional Igbo week (Izu nta) has 4 sacred market days: Eke, Orie, Afọ, and Nkwọ."
      },
      {
        "id": "ig-u7-l1-q2",
        "type": "matching",
        "prompt": "Match the four traditional Igbo market days (Ahịa anọ) in sequential order:",
        "pairs": [
          {
            "native": "Eke",
            "english": "1st market day (associated with the Sun / Creation)",
            "left": "Eke",
            "right": "1st market day (associated with the Sun / Creation)"
          },
          {
            "native": "Orie",
            "english": "2nd market day",
            "left": "Orie",
            "right": "2nd market day"
          },
          {
            "native": "Afọ",
            "english": "3rd market day",
            "left": "Afọ",
            "right": "3rd market day"
          },
          {
            "native": "Nkwọ",
            "english": "4th market day (closing the 4-day cycle)",
            "left": "Nkwọ",
            "right": "4th market day (closing the 4-day cycle)"
          }
        ]
      },
      {
        "id": "ig-u7-l1-q3",
        "type": "fill_blank",
        "sentence": "In traditional Igbo naming conventions, a male born on Eke day is often named 'Nweke' or '___'.",
        "missingWord": "Okeke",
        "options": [
          "Okeke",
          "Okorie",
          "Okafor",
          "Okonkwo"
        ],
        "correctAnswer": "Okeke",
        "explanation": "Male market day names: Okeke/Nweke (Eke), Okorie/Nworie (Orie), Okafor/Nwafor (Afọ), Okonkwo/Nwankwo (Nkwọ)."
      },
      {
        "id": "ig-u7-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the four market days in cycle: 'Eke, Orie, Afọ, Nkwọ':",
        "tokens": [
          "Eke,",
          "Orie,",
          "Afọ,",
          "Nkwọ"
        ],
        "correctTokens": [
          "Eke,",
          "Orie,",
          "Afọ,",
          "Nkwọ"
        ]
      },
      {
        "id": "ig-u7-l1-q5",
        "type": "audio_listen",
        "phrase": "Udu mmiri na-ezo",
        "prompt": "Listen to the seasonal statement. What weather is being described?",
        "options": [
          "The rainy season is falling (Rain is pouring)",
          "Dry dust is blowing",
          "The sun is scorching hot",
          "Harmattan cold has arrived"
        ],
        "correctAnswer": "The rainy season is falling (Rain is pouring)",
        "explanation": "'Udu mmiri' = rainy season; 'na-ezo' = is raining/falling."
      },
      {
        "id": "ig-u7-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is the Igbo term for the dry season?",
        "options": [
          "Ọkọchị",
          "Udu mmiri",
          "Ụgụrụ",
          "Oge oyi"
        ],
        "correctAnswer": "Ọkọchị",
        "explanation": "'Ọkọchị' is the dry season, whereas 'Udu mmiri' is the rainy season."
      },
      {
        "id": "ig-u7-l1-q7",
        "type": "matching",
        "prompt": "Match seasons and meteorological phenomena in Igbo:",
        "pairs": [
          {
            "native": "Ọkọchị",
            "english": "Dry season",
            "left": "Ọkọchị",
            "right": "Dry season"
          },
          {
            "native": "Udu mmiri",
            "english": "Rainy season",
            "left": "Udu mmiri",
            "right": "Rainy season"
          },
          {
            "native": "Ụgụrụ",
            "english": "Harmattan (cool dusty dry wind)",
            "left": "Ụgụrụ",
            "right": "Harmattan (cool dusty dry wind)"
          },
          {
            "native": "Àmùmà",
            "english": "Lightning",
            "left": "Àmùmà",
            "right": "Lightning"
          }
        ]
      },
      {
        "id": "ig-u7-l1-q8",
        "type": "fill_blank",
        "sentence": "To say 'It is two o'clock' on the clock, you say: 'Ọ kụrụ elekere ___'.",
        "missingWord": "abụọ",
        "options": [
          "abụọ",
          "otu",
          "atọ",
          "anọ"
        ],
        "correctAnswer": "abụọ",
        "explanation": "'Elekere abụọ' = two o'clock (elekere = clock/hour)."
      },
      {
        "id": "ig-u7-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to ask: 'Elekere ole ka ọ kụrụ?' (What time is it?):",
        "tokens": [
          "Elekere",
          "ole",
          "ka",
          "ọ",
          "kụrụ?"
        ],
        "correctTokens": [
          "Elekere",
          "ole",
          "ka",
          "ọ",
          "kụrụ?"
        ]
      },
      {
        "id": "ig-u7-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Ọkara' mean when telling time (e.g. 'Elekere atọ na ọkara')?",
        "options": [
          "Half (Half past three / 3:30)",
          "Quarter to three",
          "Midnight",
          "Noon"
        ],
        "correctAnswer": "Half (Half past three / 3:30)",
        "explanation": "'Ọkara' means half; 'elekere atọ na ọkara' = 3:30 (half past three)."
      },
      {
        "id": "ig-u7-l1-q11",
        "type": "audio_listen",
        "phrase": "Anyị ga-aga ahịa n'ụbọchị Nkwọ",
        "prompt": "Listen to the plan. On which market day are we going to market?",
        "options": [
          "On Nkwọ day",
          "On Eke day",
          "On Orie day",
          "On Afọ day"
        ],
        "correctAnswer": "On Nkwọ day",
        "explanation": "'N'ụbọchị Nkwọ' = on Nkwọ day."
      },
      {
        "id": "ig-u7-l1-q12",
        "type": "matching",
        "prompt": "Match female market day names with market days:",
        "pairs": [
          {
            "native": "Mgbeke",
            "english": "Female born on Eke day",
            "left": "Mgbeke",
            "right": "Female born on Eke day"
          },
          {
            "native": "Mgborie",
            "english": "Female born on Orie day",
            "left": "Mgborie",
            "right": "Female born on Orie day"
          },
          {
            "native": "Mgbafor",
            "english": "Female born on Afọ day",
            "left": "Mgbafor",
            "right": "Female born on Afọ day"
          },
          {
            "native": "Mgbankwo",
            "english": "Female born on Nkwọ day",
            "left": "Mgbankwo",
            "right": "Female born on Nkwọ day"
          }
        ]
      },
      {
        "id": "ig-u7-l1-q13",
        "type": "fill_blank",
        "sentence": "Thunder in Igbo is called 'Egbe ___'.",
        "missingWord": "igwe",
        "options": [
          "igwe",
          "ala",
          "mmiri",
          "ọkụ"
        ],
        "correctAnswer": "igwe",
        "explanation": "'Egbe igwe' (literally: gun of the sky) is thunder."
      },
      {
        "id": "ig-u7-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Chi ejiela' (Night has fallen):",
        "tokens": [
          "Chi",
          "ejiela"
        ],
        "correctTokens": [
          "Chi",
          "ejiela"
        ]
      },
      {
        "id": "ig-u7-l1-q15",
        "type": "multiple_choice",
        "prompt": "How many market days (ahịa anọ) make up one traditional lunar month in the Igbo calendar?",
        "options": [
          "Seven 4-day cycles (28 days)",
          "Thirty days exactly",
          "Ten 4-day cycles",
          "Fourteen days"
        ],
        "correctAnswer": "Seven 4-day cycles (28 days)",
        "explanation": "An Igbo month (ọnwa) traditionally comprises seven 4-day weeks (izu asaa), equaling 28 days."
      },
      {
        "id": "ig-u7-l1-q16",
        "type": "audio_listen",
        "phrase": "Anwụ na-amụke nke ukwuu taa",
        "prompt": "Listen to the weather description. What is happening today?",
        "options": [
          "The sun is shining very brightly today",
          "Heavy rain is flooding the roads",
          "The harmattan dust is blinding",
          "Strong winds are blowing the trees"
        ],
        "correctAnswer": "The sun is shining very brightly today",
        "explanation": "'Anwụ' = sun/sunshine; 'na-amụke' = is shining brightly."
      },
      {
        "id": "ig-u7-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you say 'Yesterday' in Igbo?",
        "options": [
          "Nnyaahụ",
          "Taa",
          "Echi",
          "Nnọọ"
        ],
        "correctAnswer": "Nnyaahụ",
        "explanation": "'Nnyaahụ' = yesterday; 'Taa' = today; 'Echi' = tomorrow."
      },
      {
        "id": "ig-u7-l1-q18",
        "type": "fill_blank",
        "sentence": "The Igbo word for 'Tomorrow' is '___'.",
        "missingWord": "Echi",
        "options": [
          "Echi",
          "Taa",
          "Nnyaahụ",
          "Izu"
        ],
        "correctAnswer": "Echi",
        "explanation": "'Echi' means tomorrow."
      },
      {
        "id": "ig-u7-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Ehihie' refer to in the daily cycle?",
        "options": [
          "Afternoon / Midday",
          "Early dawn",
          "Midnight",
          "Sunset"
        ],
        "correctAnswer": "Afternoon / Midday",
        "explanation": "'Ehihie' is the afternoon or midday period."
      },
      {
        "id": "ig-u7-l1-q20",
        "type": "matching",
        "prompt": "Match temporal adverbs in Igbo:",
        "pairs": [
          {
            "native": "Taa",
            "english": "Today",
            "left": "Taa",
            "right": "Today"
          },
          {
            "native": "Nnyaahụ",
            "english": "Yesterday",
            "left": "Nnyaahụ",
            "right": "Yesterday"
          },
          {
            "native": "Echi",
            "english": "Tomorrow",
            "left": "Echi",
            "right": "Tomorrow"
          },
          {
            "native": "Ugbu a",
            "english": "Now / Right at this moment",
            "left": "Ugbu a",
            "right": "Now / Right at this moment"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-8",
    "unitId": "ig-unit-8",
    "unitNumber": 8,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 8: Commerce and Market Interaction (Ịzụ Ahịa)",
    "subtitle": "Currency, food provisions, bargaining expressions (belata ego), and authentic transactional dialogue.",
    "icon": "ShoppingBag",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ig-u8-l1",
        "title": "Lesson 1: Azụmahịa, Ịzụ Ahịa na Ịrụ Ụka Ego (Market Transactions & Bargaining)",
        "description": "Master open-air market navigation, purchasing staples (ji, garri, azụ), negotiating polite discounts, and counting money.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u8-l1-q1",
            "type": "multiple_choice",
            "prompt": "How do you ask 'How much is this?' in an Igbo market?",
            "options": [
              "Ego ole ka ọ bụ?",
              "Kedụ aha gị?",
              "Ebee ka ị na-aga?",
              "Gịnị mere?"
            ],
            "correctAnswer": "Ego ole ka ọ bụ?",
            "explanation": "'Ego ole ka ọ bụ?' directly asks 'How much money is it?'."
          },
          {
            "id": "ig-u8-l1-q2",
            "type": "matching",
            "prompt": "Match market food commodities with English translations:",
            "pairs": [
              {
                "native": "Ji",
                "english": "Yam",
                "left": "Ji",
                "right": "Yam"
              },
              {
                "native": "Garri / Akpụ",
                "english": "Cassava flakes / Cassava fufu",
                "left": "Garri / Akpụ",
                "right": "Cassava flakes / Cassava fufu"
              },
              {
                "native": "Anụ",
                "english": "Meat / Beef",
                "left": "Anụ",
                "right": "Meat / Beef"
              },
              {
                "native": "Azụ",
                "english": "Fish",
                "left": "Azụ",
                "right": "Fish"
              }
            ]
          },
          {
            "id": "ig-u8-l1-q3",
            "type": "fill_blank",
            "sentence": "When asking the seller to reduce the price, you say: 'Biko ___ ego' (Please reduce the price).",
            "missingWord": "belata",
            "options": [
              "belata",
              "tinye",
              "nye",
              "zụta"
            ],
            "correctAnswer": "belata",
            "explanation": "'Belata' means reduce or discount; 'Belata ego' = reduce the price."
          },
          {
            "id": "ig-u8-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọ dị oke ọnụ' (It is too expensive):",
            "tokens": [
              "Ọ",
              "dị",
              "oke",
              "ọnụ"
            ],
            "correctTokens": [
              "Ọ",
              "dị",
              "oke",
              "ọnụ"
            ]
          },
          {
            "id": "ig-u8-l1-q5",
            "type": "audio_listen",
            "phrase": "Achọrọ m ịzụta ji atọ",
            "prompt": "Listen to the customer's request. What do they want to buy?",
            "options": [
              "I want to buy three yams",
              "I want to sell five fishes",
              "Give me three cups of rice",
              "Where are the yams kept?"
            ],
            "correctAnswer": "I want to buy three yams",
            "explanation": "'Ji atọ' = three yams; 'Achọrọ m ịzụta' = I want to buy."
          },
          {
            "id": "ig-u8-l1-q6",
            "type": "multiple_choice",
            "prompt": "What was the traditional historical currency used across Igboland before modern money?",
            "options": [
              "Ego ayo (Cowries)",
              "Gold bars",
              "Silver coins",
              "Paper checks"
            ],
            "correctAnswer": "Ego ayo (Cowries)",
            "explanation": "'Ego ayo' (cowry shells) was the indigenous pre-colonial currency in Igboland."
          },
          {
            "id": "ig-u8-l1-q7",
            "type": "matching",
            "prompt": "Match cooking staples sold in Igbo markets:",
            "pairs": [
              {
                "native": "Mmanụ nri",
                "english": "Cooking oil (palm oil or vegetable oil)",
                "left": "Mmanụ nri",
                "right": "Cooking oil (palm oil or vegetable oil)"
              },
              {
                "native": "Ose",
                "english": "Pepper",
                "left": "Ose",
                "right": "Pepper"
              },
              {
                "native": "Yabasị",
                "english": "Onion",
                "left": "Yabasị",
                "right": "Onion"
              },
              {
                "native": "Nnu",
                "english": "Salt",
                "left": "Nnu",
                "right": "Salt"
              }
            ]
          },
          {
            "id": "ig-u8-l1-q8",
            "type": "fill_blank",
            "sentence": "The Igbo word for 'money' is '___'.",
            "missingWord": "Ego",
            "options": [
              "Ego",
              "Ahịa",
              "Nri",
              "Ite"
            ],
            "correctAnswer": "Ego",
            "explanation": "'Ego' is the universal Igbo word for money."
          },
          {
            "id": "ig-u8-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ahịa a buru ibu' (This market is very big):",
            "tokens": [
              "Ahịa",
              "a",
              "buru",
              "ibu"
            ],
            "correctTokens": [
              "Ahịa",
              "a",
              "buru",
              "ibu"
            ]
          },
          {
            "id": "ig-u8-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Onye ahịa' mean?",
            "options": [
              "Trader / Merchant / Market customer",
              "School pupil",
              "Doctor",
              "Driver"
            ],
            "correctAnswer": "Onye ahịa / Trader / Merchant / Market customer",
            "explanation": "'Onye ahịa' refers to a market person, trader, or buyer."
          },
          {
            "id": "ig-u8-l1-q11",
            "type": "audio_listen",
            "phrase": "Nye m mgbanwe ego m",
            "prompt": "Listen to the customer. What are they demanding?",
            "options": [
              "Give me my balance / change",
              "Give me more yams",
              "Wrap my goods",
              "Take your money"
            ],
            "correctAnswer": "Give me my balance / change",
            "explanation": "'Mgbanwe ego' means change or balance from a transaction."
          },
          {
            "id": "ig-u8-l1-q12",
            "type": "matching",
            "prompt": "Match market roles and actions:",
            "pairs": [
              {
                "native": "Ịzụ",
                "english": "To buy / purchase",
                "left": "Ịzụ",
                "right": "To buy / purchase"
              },
              {
                "native": "Ire",
                "english": "To sell",
                "left": "Ire",
                "right": "To sell"
              },
              {
                "native": "Ịkwụ ụgwọ",
                "english": "To pay the bill / debt",
                "left": "Ịkwụ ụgwọ",
                "right": "To pay the bill / debt"
              },
              {
                "native": "Uru",
                "english": "Profit / Gain",
                "left": "Uru",
                "right": "Profit / Gain"
              }
            ]
          },
          {
            "id": "ig-u8-l1-q13",
            "type": "fill_blank",
            "sentence": "When goods are cheap, you say: 'Ọ dị ___' (It is cheap / light priced).",
            "missingWord": "ọnụ ala",
            "options": [
              "ọnụ ala",
              "oke ọnụ",
              "mma",
              "oji"
            ],
            "correctAnswer": "ọnụ ala",
            "explanation": "'Ọnụ ala' means cheap (literally: low price)."
          },
          {
            "id": "ig-u8-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'M ga-akwụ gị puku Naira abụọ' (I will pay you two thousand Naira):",
            "tokens": [
              "M",
              "ga-akwụ",
              "gị",
              "puku",
              "Naira",
              "abụọ"
            ],
            "correctTokens": [
              "M",
              "ga-akwụ",
              "gị",
              "puku",
              "Naira",
              "abụọ"
            ]
          },
          {
            "id": "ig-u8-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Ego ole ka ị ga-ere ya?'",
            "options": [
              "How much will you sell it for?",
              "How much did you buy it?",
              "Where did you sell it?",
              "Who sold this to you?"
            ],
            "correctAnswer": "How much will you sell it for?",
            "explanation": "'Ego ole ka ị ga-ere ya?' means 'For how much will you sell it?'."
          },
          {
            "id": "ig-u8-l1-q16",
            "type": "audio_listen",
            "phrase": "Naira narị ise",
            "prompt": "Listen to the monetary amount. How much is 'Naira narị ise'?",
            "options": [
              "500 Naira",
              "50 Naira",
              "5,000 Naira",
              "150 Naira"
            ],
            "correctAnswer": "500 Naira",
            "explanation": "'Narị ise' = five hundred (500)."
          },
          {
            "id": "ig-u8-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does 'Ụgwọ' mean?",
            "options": [
              "Debt / Bill / Payment due",
              "Profit",
              "Free gift",
              "Stolen goods"
            ],
            "correctAnswer": "Debt / Bill / Payment due",
            "explanation": "'Ụgwọ' means debt, wage, or payment obligation."
          },
          {
            "id": "ig-u8-l1-q18",
            "type": "fill_blank",
            "sentence": "One thousand in standard Igbo counting is 'Puku ___'.",
            "missingWord": "otu",
            "options": [
              "otu",
              "abụọ",
              "iri",
              "narị"
            ],
            "correctAnswer": "otu",
            "explanation": "'Puku otu' means one thousand."
          },
          {
            "id": "ig-u8-l1-q19",
            "type": "multiple_choice",
            "prompt": "If a seller says 'Enweghị m uru ọ bụla', what do they mean?",
            "options": [
              "I am making no profit at all",
              "I don't have goods",
              "I won't sell to you",
              "Come back tomorrow"
            ],
            "correctAnswer": "I am making no profit at all",
            "explanation": "'Uru' = profit; 'Enweghị m uru ọ bụla' = I have no profit whatsoever at this price."
          },
          {
            "id": "ig-u8-l1-q20",
            "type": "matching",
            "prompt": "Match Igbo financial quantities:",
            "pairs": [
              {
                "native": "Narị",
                "english": "Hundred",
                "left": "Narị",
                "right": "Hundred"
              },
              {
                "native": "Puku",
                "english": "Thousand",
                "left": "Puku",
                "right": "Thousand"
              },
              {
                "native": "Nde",
                "english": "Million",
                "left": "Nde",
                "right": "Million"
              },
              {
                "native": "Ijeri",
                "english": "Billion",
                "left": "Ijeri",
                "right": "Ijeri"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u8-l1-q1",
        "type": "multiple_choice",
        "prompt": "How do you ask 'How much is this?' in an Igbo market?",
        "options": [
          "Ego ole ka ọ bụ?",
          "Kedụ aha gị?",
          "Ebee ka ị na-aga?",
          "Gịnị mere?"
        ],
        "correctAnswer": "Ego ole ka ọ bụ?",
        "explanation": "'Ego ole ka ọ bụ?' directly asks 'How much money is it?'."
      },
      {
        "id": "ig-u8-l1-q2",
        "type": "matching",
        "prompt": "Match market food commodities with English translations:",
        "pairs": [
          {
            "native": "Ji",
            "english": "Yam",
            "left": "Ji",
            "right": "Yam"
          },
          {
            "native": "Garri / Akpụ",
            "english": "Cassava flakes / Cassava fufu",
            "left": "Garri / Akpụ",
            "right": "Cassava flakes / Cassava fufu"
          },
          {
            "native": "Anụ",
            "english": "Meat / Beef",
            "left": "Anụ",
            "right": "Meat / Beef"
          },
          {
            "native": "Azụ",
            "english": "Fish",
            "left": "Azụ",
            "right": "Fish"
          }
        ]
      },
      {
        "id": "ig-u8-l1-q3",
        "type": "fill_blank",
        "sentence": "When asking the seller to reduce the price, you say: 'Biko ___ ego' (Please reduce the price).",
        "missingWord": "belata",
        "options": [
          "belata",
          "tinye",
          "nye",
          "zụta"
        ],
        "correctAnswer": "belata",
        "explanation": "'Belata' means reduce or discount; 'Belata ego' = reduce the price."
      },
      {
        "id": "ig-u8-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọ dị oke ọnụ' (It is too expensive):",
        "tokens": [
          "Ọ",
          "dị",
          "oke",
          "ọnụ"
        ],
        "correctTokens": [
          "Ọ",
          "dị",
          "oke",
          "ọnụ"
        ]
      },
      {
        "id": "ig-u8-l1-q5",
        "type": "audio_listen",
        "phrase": "Achọrọ m ịzụta ji atọ",
        "prompt": "Listen to the customer's request. What do they want to buy?",
        "options": [
          "I want to buy three yams",
          "I want to sell five fishes",
          "Give me three cups of rice",
          "Where are the yams kept?"
        ],
        "correctAnswer": "I want to buy three yams",
        "explanation": "'Ji atọ' = three yams; 'Achọrọ m ịzụta' = I want to buy."
      },
      {
        "id": "ig-u8-l1-q6",
        "type": "multiple_choice",
        "prompt": "What was the traditional historical currency used across Igboland before modern money?",
        "options": [
          "Ego ayo (Cowries)",
          "Gold bars",
          "Silver coins",
          "Paper checks"
        ],
        "correctAnswer": "Ego ayo (Cowries)",
        "explanation": "'Ego ayo' (cowry shells) was the indigenous pre-colonial currency in Igboland."
      },
      {
        "id": "ig-u8-l1-q7",
        "type": "matching",
        "prompt": "Match cooking staples sold in Igbo markets:",
        "pairs": [
          {
            "native": "Mmanụ nri",
            "english": "Cooking oil (palm oil or vegetable oil)",
            "left": "Mmanụ nri",
            "right": "Cooking oil (palm oil or vegetable oil)"
          },
          {
            "native": "Ose",
            "english": "Pepper",
            "left": "Ose",
            "right": "Pepper"
          },
          {
            "native": "Yabasị",
            "english": "Onion",
            "left": "Yabasị",
            "right": "Onion"
          },
          {
            "native": "Nnu",
            "english": "Salt",
            "left": "Nnu",
            "right": "Salt"
          }
        ]
      },
      {
        "id": "ig-u8-l1-q8",
        "type": "fill_blank",
        "sentence": "The Igbo word for 'money' is '___'.",
        "missingWord": "Ego",
        "options": [
          "Ego",
          "Ahịa",
          "Nri",
          "Ite"
        ],
        "correctAnswer": "Ego",
        "explanation": "'Ego' is the universal Igbo word for money."
      },
      {
        "id": "ig-u8-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ahịa a buru ibu' (This market is very big):",
        "tokens": [
          "Ahịa",
          "a",
          "buru",
          "ibu"
        ],
        "correctTokens": [
          "Ahịa",
          "a",
          "buru",
          "ibu"
        ]
      },
      {
        "id": "ig-u8-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does 'Onye ahịa' mean?",
        "options": [
          "Trader / Merchant / Market customer",
          "School pupil",
          "Doctor",
          "Driver"
        ],
        "correctAnswer": "Onye ahịa / Trader / Merchant / Market customer",
        "explanation": "'Onye ahịa' refers to a market person, trader, or buyer."
      },
      {
        "id": "ig-u8-l1-q11",
        "type": "audio_listen",
        "phrase": "Nye m mgbanwe ego m",
        "prompt": "Listen to the customer. What are they demanding?",
        "options": [
          "Give me my balance / change",
          "Give me more yams",
          "Wrap my goods",
          "Take your money"
        ],
        "correctAnswer": "Give me my balance / change",
        "explanation": "'Mgbanwe ego' means change or balance from a transaction."
      },
      {
        "id": "ig-u8-l1-q12",
        "type": "matching",
        "prompt": "Match market roles and actions:",
        "pairs": [
          {
            "native": "Ịzụ",
            "english": "To buy / purchase",
            "left": "Ịzụ",
            "right": "To buy / purchase"
          },
          {
            "native": "Ire",
            "english": "To sell",
            "left": "Ire",
            "right": "To sell"
          },
          {
            "native": "Ịkwụ ụgwọ",
            "english": "To pay the bill / debt",
            "left": "Ịkwụ ụgwọ",
            "right": "To pay the bill / debt"
          },
          {
            "native": "Uru",
            "english": "Profit / Gain",
            "left": "Uru",
            "right": "Profit / Gain"
          }
        ]
      },
      {
        "id": "ig-u8-l1-q13",
        "type": "fill_blank",
        "sentence": "When goods are cheap, you say: 'Ọ dị ___' (It is cheap / light priced).",
        "missingWord": "ọnụ ala",
        "options": [
          "ọnụ ala",
          "oke ọnụ",
          "mma",
          "oji"
        ],
        "correctAnswer": "ọnụ ala",
        "explanation": "'Ọnụ ala' means cheap (literally: low price)."
      },
      {
        "id": "ig-u8-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'M ga-akwụ gị puku Naira abụọ' (I will pay you two thousand Naira):",
        "tokens": [
          "M",
          "ga-akwụ",
          "gị",
          "puku",
          "Naira",
          "abụọ"
        ],
        "correctTokens": [
          "M",
          "ga-akwụ",
          "gị",
          "puku",
          "Naira",
          "abụọ"
        ]
      },
      {
        "id": "ig-u8-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Ego ole ka ị ga-ere ya?'",
        "options": [
          "How much will you sell it for?",
          "How much did you buy it?",
          "Where did you sell it?",
          "Who sold this to you?"
        ],
        "correctAnswer": "How much will you sell it for?",
        "explanation": "'Ego ole ka ị ga-ere ya?' means 'For how much will you sell it?'."
      },
      {
        "id": "ig-u8-l1-q16",
        "type": "audio_listen",
        "phrase": "Naira narị ise",
        "prompt": "Listen to the monetary amount. How much is 'Naira narị ise'?",
        "options": [
          "500 Naira",
          "50 Naira",
          "5,000 Naira",
          "150 Naira"
        ],
        "correctAnswer": "500 Naira",
        "explanation": "'Narị ise' = five hundred (500)."
      },
      {
        "id": "ig-u8-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does 'Ụgwọ' mean?",
        "options": [
          "Debt / Bill / Payment due",
          "Profit",
          "Free gift",
          "Stolen goods"
        ],
        "correctAnswer": "Debt / Bill / Payment due",
        "explanation": "'Ụgwọ' means debt, wage, or payment obligation."
      },
      {
        "id": "ig-u8-l1-q18",
        "type": "fill_blank",
        "sentence": "One thousand in standard Igbo counting is 'Puku ___'.",
        "missingWord": "otu",
        "options": [
          "otu",
          "abụọ",
          "iri",
          "narị"
        ],
        "correctAnswer": "otu",
        "explanation": "'Puku otu' means one thousand."
      },
      {
        "id": "ig-u8-l1-q19",
        "type": "multiple_choice",
        "prompt": "If a seller says 'Enweghị m uru ọ bụla', what do they mean?",
        "options": [
          "I am making no profit at all",
          "I don't have goods",
          "I won't sell to you",
          "Come back tomorrow"
        ],
        "correctAnswer": "I am making no profit at all",
        "explanation": "'Uru' = profit; 'Enweghị m uru ọ bụla' = I have no profit whatsoever at this price."
      },
      {
        "id": "ig-u8-l1-q20",
        "type": "matching",
        "prompt": "Match Igbo financial quantities:",
        "pairs": [
          {
            "native": "Narị",
            "english": "Hundred",
            "left": "Narị",
            "right": "Hundred"
          },
          {
            "native": "Puku",
            "english": "Thousand",
            "left": "Puku",
            "right": "Thousand"
          },
          {
            "native": "Nde",
            "english": "Million",
            "left": "Nde",
            "right": "Million"
          },
          {
            "native": "Ijeri",
            "english": "Billion",
            "left": "Ijeri",
            "right": "Ijeri"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-9",
    "unitId": "ig-unit-9",
    "unitNumber": 9,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 9: Tenses and Verbal Extensions (Tensị na Nsokwunye)",
    "subtitle": "Past (-rV), present continuous (na-), future (ga-), and meaning-altering verbal suffixes (-kwa, -cha, -ba).",
    "icon": "Clock",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ig-u9-l1",
        "title": "Lesson 1: Tensị Dị Iche Iche na Nsokwunye Ngwaa (Tenses & Verb Suffixes)",
        "description": "Master the harmonizing past tense suffix (-rV), future aspect (ga-), progressive marker (na-), and verbal extenders.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u9-l1-q1",
            "type": "multiple_choice",
            "prompt": "How is the standard past tense formed on an Igbo verb root (e.g. 'gaa' [go])?",
            "options": [
              "By adding the harmonizing -rV suffix (gara)",
              "By adding 'na-' prefix",
              "By adding 'ga-' prefix",
              "By doubling the consonant"
            ],
            "correctAnswer": "By adding the harmonizing -rV suffix (gara)",
            "explanation": "The past tense uses the -rV suffix where V echoes the root vowel (gaa -> gara, rie -> riri, dee -> dere)."
          },
          {
            "id": "ig-u9-l1-q2",
            "type": "matching",
            "prompt": "Match verb roots with their past tense (-rV) forms:",
            "pairs": [
              {
                "native": "Gaa (go)",
                "english": "Gara (went)",
                "left": "Gaa (go)",
                "right": "Gara (went)"
              },
              {
                "native": "Rie (eat)",
                "english": "Riri (ate)",
                "left": "Rie (eat)",
                "right": "Riri (ate)"
              },
              {
                "native": "Dee (write)",
                "english": "Dere (wrote)",
                "left": "Dee (write)",
                "right": "Dere (wrote)"
              },
              {
                "native": "Hụ (see)",
                "english": "Hụrụ (saw)",
                "left": "Hụ (see)",
                "right": "Hụrụ (saw)"
              }
            ]
          },
          {
            "id": "ig-u9-l1-q3",
            "type": "fill_blank",
            "sentence": "To express future action ('I will go tomorrow'), Igbo uses the future marker 'ga-': 'M ___ echi'.",
            "missingWord": "ga-aga",
            "options": [
              "ga-aga",
              "na-aga",
              "gara",
              "agala"
            ],
            "correctAnswer": "ga-aga",
            "explanation": "'Ga-aga' expresses future action: will go."
          },
          {
            "id": "ig-u9-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Anyị ga-amụ akwụkwọ echi' (We will study tomorrow):",
            "tokens": [
              "Anyị",
              "ga-amụ",
              "akwụkwọ",
              "echi"
            ],
            "correctTokens": [
              "Anyị",
              "ga-amụ",
              "akwụkwọ",
              "echi"
            ]
          },
          {
            "id": "ig-u9-l1-q5",
            "type": "audio_listen",
            "phrase": "Emeka na-ede akwụkwọ ugbu a",
            "prompt": "Listen to the sentence. What tense/aspect is used?",
            "options": [
              "Present continuous ('Emeka is writing a book right now')",
              "Past completed ('Emeka wrote a book')",
              "Future ('Emeka will write a book')",
              "Habitual ('Emeka usually writes books')"
            ],
            "correctAnswer": "Present continuous ('Emeka is writing a book right now')",
            "explanation": "'Na-ede' indicates ongoing progressive action: is writing."
          },
          {
            "id": "ig-u9-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does the verbal extension suffix '-cha' convey (e.g. 'richaa' / 'mechaa')?",
            "options": [
              "Completion / Thoroughness (to do completely / finish doing)",
              "Inception / Beginning",
              "Negation",
              "Questioning"
            ],
            "correctAnswer": "Completion / Thoroughness (to do completely / finish doing)",
            "explanation": "The suffix '-cha' marks completive aspect: 'mechaa' = finish doing; 'richaa' = eat completely."
          },
          {
            "id": "ig-u9-l1-q7",
            "type": "matching",
            "prompt": "Match verbal extension suffixes (nsokwunye) with their functions:",
            "pairs": [
              {
                "native": "-cha (richaa)",
                "english": "Completive: to finish / do completely",
                "left": "-cha (richaa)",
                "right": "Completive: to finish / do completely"
              },
              {
                "native": "-kwa (bịakwa)",
                "english": "Additive / Emphatic: also / as well",
                "left": "-kwa (bịakwa)",
                "right": "Additive / Emphatic: also / as well"
              },
              {
                "native": "-wa / -ba (gaba)",
                "english": "Inceptive: begin to / start to go",
                "left": "-wa / -ba (gaba)",
                "right": "Inceptive: begin to / start to go"
              },
              {
                "native": "-tụ (detụ)",
                "english": "Diminutive / Experiential: taste a bit / try",
                "left": "-tụ (detụ)",
                "right": "Diminutive / Experiential: taste a bit / try"
              }
            ]
          },
          {
            "id": "ig-u9-l1-q8",
            "type": "fill_blank",
            "sentence": "The negative past marker in Igbo attaches '-ghi' or '-ro': 'Agaghị m' means 'I did ___ go'.",
            "missingWord": "not",
            "options": [
              "not",
              "also",
              "still",
              "will"
            ],
            "correctAnswer": "not",
            "explanation": "'-ghị' (harmonized with vowel sets) is the standard negative suffix: 'agaghị m' = I did not go / I will not go."
          },
          {
            "id": "ig-u9-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọ hụghị m' (He/She did not see me):",
            "tokens": [
              "Ọ",
              "hụghị",
              "m"
            ],
            "correctTokens": [
              "Ọ",
              "hụghị",
              "m"
            ]
          },
          {
            "id": "ig-u9-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is 'Anyị na-abịa'?",
            "options": [
              "We are coming",
              "We went",
              "We will go",
              "We did not come"
            ],
            "correctAnswer": "We are coming",
            "explanation": "'Anyị na-abịa' = We are coming (present continuous)."
          },
          {
            "id": "ig-u9-l1-q11",
            "type": "audio_listen",
            "phrase": "Ha eriela nri abalị",
            "prompt": "Listen to the sentence with perfective '-la'. What does it signify?",
            "options": [
              "They have eaten dinner (Perfective completed)",
              "They will cook dinner",
              "They are currently eating",
              "They refused to eat dinner"
            ],
            "correctAnswer": "They have eaten dinner (Perfective completed)",
            "explanation": "'-la' or '-le' marks the perfective aspect: 'eriela' = has/have eaten."
          },
          {
            "id": "ig-u9-l1-q12",
            "type": "matching",
            "prompt": "Match conjunctions connecting clauses in Igbo:",
            "pairs": [
              {
                "native": "Ma",
                "english": "And / But",
                "left": "Ma",
                "right": "And / But"
              },
              {
                "native": "Maka na / N'ihi na",
                "english": "Because / Since",
                "left": "Maka na / N'ihi na",
                "right": "Because / Since"
              },
              {
                "native": "Tupu",
                "english": "Before",
                "left": "Tupu",
                "right": "Before"
              },
              {
                "native": "Mgbe",
                "english": "When / While",
                "left": "Mgbe",
                "right": "When / While"
              }
            ]
          },
          {
            "id": "ig-u9-l1-q13",
            "type": "fill_blank",
            "sentence": "To say 'I went to Enugu yesterday', you say: 'M ___ Enugu nnyaahụ'.",
            "missingWord": "gara",
            "options": [
              "gara",
              "na-aga",
              "ga-aga",
              "aga"
            ],
            "correctAnswer": "gara",
            "explanation": "'Gara' is the past tense of 'gaa' (to go)."
          },
          {
            "id": "ig-u9-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Chidi rụrụ ọrụ nke ọma' (Chidi worked very well):",
            "tokens": [
              "Chidi",
              "rụrụ",
              "ọrụ",
              "nke",
              "ọma"
            ],
            "correctTokens": [
              "Chidi",
              "rụrụ",
              "ọrụ",
              "nke",
              "ọma"
            ]
          },
          {
            "id": "ig-u9-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does the extension suffix '-kọ' indicate in 'zukọọ' (meet together)?",
            "options": [
              "Joint action / Togetherness",
              "Separation",
              "Reversal",
              "Speed"
            ],
            "correctAnswer": "Joint action / Togetherness",
            "explanation": "'-kọ' implies collective or joined action: 'zukọọ' = assemble / meet together."
          },
          {
            "id": "ig-u9-l1-q16",
            "type": "audio_listen",
            "phrase": "Mgbe anyị ruru ụlọ, anyị riri nri",
            "prompt": "Listen to the narrative sentence. What does it describe?",
            "options": [
              "When we reached home, we ate food",
              "Before we went home, we bought food",
              "If we reach home, we will cook",
              "We stayed home without food"
            ],
            "correctAnswer": "When we reached home, we ate food",
            "explanation": "'Mgbe anyị ruru...' = When we reached...; 'anyị riri nri' = we ate food."
          },
          {
            "id": "ig-u9-l1-q17",
            "type": "multiple_choice",
            "prompt": "How do you conjugate 'drink' into past tense (root 'ṅụọ')?",
            "options": [
              "Ṅụrụ",
              "Ṅụọ",
              "Na-aṅụ",
              "Ga-aṅụ"
            ],
            "correctAnswer": "Ṅụrụ",
            "explanation": "The past tense of 'ṅụọ' is 'ṅụrụ' (following the harmonized -rV pattern with dotted ụ)."
          },
          {
            "id": "ig-u9-l1-q18",
            "type": "fill_blank",
            "sentence": "To say 'He is not eating', you say: 'Ọ naghị ___ nri'.",
            "missingWord": "eri",
            "options": [
              "eri",
              "gara",
              "riri",
              "richaa"
            ],
            "correctAnswer": "eri",
            "explanation": "'Ọ naghị eri nri' is the negative present continuous: He is not eating."
          },
          {
            "id": "ig-u9-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'Gawa!' mean with the inceptive suffix '-wa'?",
            "options": [
              "Start going! / Be on your way!",
              "Stop there!",
              "Sit down!",
              "Return!"
            ],
            "correctAnswer": "Start going! / Be on your way!",
            "explanation": "'-wa' in 'Gawa!' signifies beginning the action of going: 'Start going / proceed!'."
          },
          {
            "id": "ig-u9-l1-q20",
            "type": "matching",
            "prompt": "Match verb phrases with temporal aspects:",
            "pairs": [
              {
                "native": "O dere",
                "english": "He wrote (Past)",
                "left": "O dere",
                "right": "He wrote (Past)"
              },
              {
                "native": "Ọ na-ede",
                "english": "He is writing (Present Continuous)",
                "left": "Ọ na-ede",
                "right": "He is writing (Present Continuous)"
              },
              {
                "native": "Ọ ga-ede",
                "english": "He will write (Future)",
                "left": "Ọ ga-ede",
                "right": "He will write (Future)"
              },
              {
                "native": "O deela",
                "english": "He has written (Perfective)",
                "left": "O deela",
                "right": "He has written (Perfective)"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u9-l1-q1",
        "type": "multiple_choice",
        "prompt": "How is the standard past tense formed on an Igbo verb root (e.g. 'gaa' [go])?",
        "options": [
          "By adding the harmonizing -rV suffix (gara)",
          "By adding 'na-' prefix",
          "By adding 'ga-' prefix",
          "By doubling the consonant"
        ],
        "correctAnswer": "By adding the harmonizing -rV suffix (gara)",
        "explanation": "The past tense uses the -rV suffix where V echoes the root vowel (gaa -> gara, rie -> riri, dee -> dere)."
      },
      {
        "id": "ig-u9-l1-q2",
        "type": "matching",
        "prompt": "Match verb roots with their past tense (-rV) forms:",
        "pairs": [
          {
            "native": "Gaa (go)",
            "english": "Gara (went)",
            "left": "Gaa (go)",
            "right": "Gara (went)"
          },
          {
            "native": "Rie (eat)",
            "english": "Riri (ate)",
            "left": "Rie (eat)",
            "right": "Riri (ate)"
          },
          {
            "native": "Dee (write)",
            "english": "Dere (wrote)",
            "left": "Dee (write)",
            "right": "Dere (wrote)"
          },
          {
            "native": "Hụ (see)",
            "english": "Hụrụ (saw)",
            "left": "Hụ (see)",
            "right": "Hụrụ (saw)"
          }
        ]
      },
      {
        "id": "ig-u9-l1-q3",
        "type": "fill_blank",
        "sentence": "To express future action ('I will go tomorrow'), Igbo uses the future marker 'ga-': 'M ___ echi'.",
        "missingWord": "ga-aga",
        "options": [
          "ga-aga",
          "na-aga",
          "gara",
          "agala"
        ],
        "correctAnswer": "ga-aga",
        "explanation": "'Ga-aga' expresses future action: will go."
      },
      {
        "id": "ig-u9-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Anyị ga-amụ akwụkwọ echi' (We will study tomorrow):",
        "tokens": [
          "Anyị",
          "ga-amụ",
          "akwụkwọ",
          "echi"
        ],
        "correctTokens": [
          "Anyị",
          "ga-amụ",
          "akwụkwọ",
          "echi"
        ]
      },
      {
        "id": "ig-u9-l1-q5",
        "type": "audio_listen",
        "phrase": "Emeka na-ede akwụkwọ ugbu a",
        "prompt": "Listen to the sentence. What tense/aspect is used?",
        "options": [
          "Present continuous ('Emeka is writing a book right now')",
          "Past completed ('Emeka wrote a book')",
          "Future ('Emeka will write a book')",
          "Habitual ('Emeka usually writes books')"
        ],
        "correctAnswer": "Present continuous ('Emeka is writing a book right now')",
        "explanation": "'Na-ede' indicates ongoing progressive action: is writing."
      },
      {
        "id": "ig-u9-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does the verbal extension suffix '-cha' convey (e.g. 'richaa' / 'mechaa')?",
        "options": [
          "Completion / Thoroughness (to do completely / finish doing)",
          "Inception / Beginning",
          "Negation",
          "Questioning"
        ],
        "correctAnswer": "Completion / Thoroughness (to do completely / finish doing)",
        "explanation": "The suffix '-cha' marks completive aspect: 'mechaa' = finish doing; 'richaa' = eat completely."
      },
      {
        "id": "ig-u9-l1-q7",
        "type": "matching",
        "prompt": "Match verbal extension suffixes (nsokwunye) with their functions:",
        "pairs": [
          {
            "native": "-cha (richaa)",
            "english": "Completive: to finish / do completely",
            "left": "-cha (richaa)",
            "right": "Completive: to finish / do completely"
          },
          {
            "native": "-kwa (bịakwa)",
            "english": "Additive / Emphatic: also / as well",
            "left": "-kwa (bịakwa)",
            "right": "Additive / Emphatic: also / as well"
          },
          {
            "native": "-wa / -ba (gaba)",
            "english": "Inceptive: begin to / start to go",
            "left": "-wa / -ba (gaba)",
            "right": "Inceptive: begin to / start to go"
          },
          {
            "native": "-tụ (detụ)",
            "english": "Diminutive / Experiential: taste a bit / try",
            "left": "-tụ (detụ)",
            "right": "Diminutive / Experiential: taste a bit / try"
          }
        ]
      },
      {
        "id": "ig-u9-l1-q8",
        "type": "fill_blank",
        "sentence": "The negative past marker in Igbo attaches '-ghi' or '-ro': 'Agaghị m' means 'I did ___ go'.",
        "missingWord": "not",
        "options": [
          "not",
          "also",
          "still",
          "will"
        ],
        "correctAnswer": "not",
        "explanation": "'-ghị' (harmonized with vowel sets) is the standard negative suffix: 'agaghị m' = I did not go / I will not go."
      },
      {
        "id": "ig-u9-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọ hụghị m' (He/She did not see me):",
        "tokens": [
          "Ọ",
          "hụghị",
          "m"
        ],
        "correctTokens": [
          "Ọ",
          "hụghị",
          "m"
        ]
      },
      {
        "id": "ig-u9-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is 'Anyị na-abịa'?",
        "options": [
          "We are coming",
          "We went",
          "We will go",
          "We did not come"
        ],
        "correctAnswer": "We are coming",
        "explanation": "'Anyị na-abịa' = We are coming (present continuous)."
      },
      {
        "id": "ig-u9-l1-q11",
        "type": "audio_listen",
        "phrase": "Ha eriela nri abalị",
        "prompt": "Listen to the sentence with perfective '-la'. What does it signify?",
        "options": [
          "They have eaten dinner (Perfective completed)",
          "They will cook dinner",
          "They are currently eating",
          "They refused to eat dinner"
        ],
        "correctAnswer": "They have eaten dinner (Perfective completed)",
        "explanation": "'-la' or '-le' marks the perfective aspect: 'eriela' = has/have eaten."
      },
      {
        "id": "ig-u9-l1-q12",
        "type": "matching",
        "prompt": "Match conjunctions connecting clauses in Igbo:",
        "pairs": [
          {
            "native": "Ma",
            "english": "And / But",
            "left": "Ma",
            "right": "And / But"
          },
          {
            "native": "Maka na / N'ihi na",
            "english": "Because / Since",
            "left": "Maka na / N'ihi na",
            "right": "Because / Since"
          },
          {
            "native": "Tupu",
            "english": "Before",
            "left": "Tupu",
            "right": "Before"
          },
          {
            "native": "Mgbe",
            "english": "When / While",
            "left": "Mgbe",
            "right": "When / While"
          }
        ]
      },
      {
        "id": "ig-u9-l1-q13",
        "type": "fill_blank",
        "sentence": "To say 'I went to Enugu yesterday', you say: 'M ___ Enugu nnyaahụ'.",
        "missingWord": "gara",
        "options": [
          "gara",
          "na-aga",
          "ga-aga",
          "aga"
        ],
        "correctAnswer": "gara",
        "explanation": "'Gara' is the past tense of 'gaa' (to go)."
      },
      {
        "id": "ig-u9-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Chidi rụrụ ọrụ nke ọma' (Chidi worked very well):",
        "tokens": [
          "Chidi",
          "rụrụ",
          "ọrụ",
          "nke",
          "ọma"
        ],
        "correctTokens": [
          "Chidi",
          "rụrụ",
          "ọrụ",
          "nke",
          "ọma"
        ]
      },
      {
        "id": "ig-u9-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does the extension suffix '-kọ' indicate in 'zukọọ' (meet together)?",
        "options": [
          "Joint action / Togetherness",
          "Separation",
          "Reversal",
          "Speed"
        ],
        "correctAnswer": "Joint action / Togetherness",
        "explanation": "'-kọ' implies collective or joined action: 'zukọọ' = assemble / meet together."
      },
      {
        "id": "ig-u9-l1-q16",
        "type": "audio_listen",
        "phrase": "Mgbe anyị ruru ụlọ, anyị riri nri",
        "prompt": "Listen to the narrative sentence. What does it describe?",
        "options": [
          "When we reached home, we ate food",
          "Before we went home, we bought food",
          "If we reach home, we will cook",
          "We stayed home without food"
        ],
        "correctAnswer": "When we reached home, we ate food",
        "explanation": "'Mgbe anyị ruru...' = When we reached...; 'anyị riri nri' = we ate food."
      },
      {
        "id": "ig-u9-l1-q17",
        "type": "multiple_choice",
        "prompt": "How do you conjugate 'drink' into past tense (root 'ṅụọ')?",
        "options": [
          "Ṅụrụ",
          "Ṅụọ",
          "Na-aṅụ",
          "Ga-aṅụ"
        ],
        "correctAnswer": "Ṅụrụ",
        "explanation": "The past tense of 'ṅụọ' is 'ṅụrụ' (following the harmonized -rV pattern with dotted ụ)."
      },
      {
        "id": "ig-u9-l1-q18",
        "type": "fill_blank",
        "sentence": "To say 'He is not eating', you say: 'Ọ naghị ___ nri'.",
        "missingWord": "eri",
        "options": [
          "eri",
          "gara",
          "riri",
          "richaa"
        ],
        "correctAnswer": "eri",
        "explanation": "'Ọ naghị eri nri' is the negative present continuous: He is not eating."
      },
      {
        "id": "ig-u9-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'Gawa!' mean with the inceptive suffix '-wa'?",
        "options": [
          "Start going! / Be on your way!",
          "Stop there!",
          "Sit down!",
          "Return!"
        ],
        "correctAnswer": "Start going! / Be on your way!",
        "explanation": "'-wa' in 'Gawa!' signifies beginning the action of going: 'Start going / proceed!'."
      },
      {
        "id": "ig-u9-l1-q20",
        "type": "matching",
        "prompt": "Match verb phrases with temporal aspects:",
        "pairs": [
          {
            "native": "O dere",
            "english": "He wrote (Past)",
            "left": "O dere",
            "right": "He wrote (Past)"
          },
          {
            "native": "Ọ na-ede",
            "english": "He is writing (Present Continuous)",
            "left": "Ọ na-ede",
            "right": "He is writing (Present Continuous)"
          },
          {
            "native": "Ọ ga-ede",
            "english": "He will write (Future)",
            "left": "Ọ ga-ede",
            "right": "He will write (Future)"
          },
          {
            "native": "O deela",
            "english": "He has written (Perfective)",
            "left": "O deela",
            "right": "He has written (Perfective)"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-10",
    "unitId": "ig-unit-10",
    "unitNumber": 10,
    "level": "Level 2: Intermediate (Middle & Upper Basic / Primary 4 – JSS 3)",
    "title": "Unit 10: Folktales and Proverbs (Akụkọ Ifo na Ilu Mfe)",
    "subtitle": "Classic stories of Mbe (the tortoise), call-and-response storytelling, and foundational Igbo proverbs (Ilu).",
    "icon": "Feather",
    "color": "#0284c7",
    "lessons": [
      {
        "id": "ig-u10-l1",
        "title": "Lesson 1: Akụkọ Ifo Mbe na Ilu Igbo (Tortoise Tales & Proverbs)",
        "description": "Explore indigenous moral folktales starring Mbe the cunning tortoise, traditional formulaic openings, and classic proverbs.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u10-l1-q1",
            "type": "multiple_choice",
            "prompt": "Who is the legendary trickster protagonist of Igbo folktales (Akụkọ Ifo)?",
            "options": [
              "Mbe (Tortoise)",
              "Agu (Leopard)",
              "Ọdụm (Lion)",
              "Enwe (Monkey)"
            ],
            "correctAnswer": "Mbe (Tortoise)",
            "explanation": "Mbe (the tortoise, affectionately called Mbe Nwaniga or Tortoise the trickster) is the central figure in Igbo folktales."
          },
          {
            "id": "ig-u10-l1-q2",
            "type": "matching",
            "prompt": "Match characters in Igbo folktales with their typical personifications:",
            "pairs": [
              {
                "native": "Mbe",
                "english": "Cunning, gluttonous trickster tortoise",
                "left": "Mbe",
                "right": "Cunning, gluttonous trickster tortoise"
              },
              {
                "native": "Anịkọ",
                "english": "Mbe's long-suffering clever wife",
                "left": "Anịkọ",
                "right": "Mbe's long-suffering clever wife"
              },
              {
                "native": "Agu",
                "english": "Fierce leopard (often tricked by Mbe)",
                "left": "Agu",
                "right": "Fierce leopard (often tricked by Mbe)"
              },
              {
                "native": "Enyi",
                "english": "Mighty elephant",
                "left": "Enyi",
                "right": "Mighty elephant"
              }
            ]
          },
          {
            "id": "ig-u10-l1-q3",
            "type": "fill_blank",
            "sentence": "When an Igbo storyteller opens with the traditional call 'Chakpii!' (or Cakpii!), the listeners eagerly respond: '___!'.",
            "missingWord": "Woo / Oyoo",
            "options": [
              "Woo / Oyoo",
              "Mba",
              "Daalụ",
              "Ka chi foo"
            ],
            "correctAnswer": "Woo / Oyoo",
            "explanation": "The traditional call-and-response is 'Chakpii!' -> 'Woo!' or 'Oyoo!'."
          },
          {
            "id": "ig-u10-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the famous Chinua Achebe quote on proverbs: 'Ilu bụ mmanụ e ji eri okwu' (Proverbs are the palm oil with which words are eaten):",
            "tokens": [
              "Ilu",
              "bụ",
              "mmanụ",
              "e",
              "ji",
              "eri",
              "okwu"
            ],
            "correctTokens": [
              "Ilu",
              "bụ",
              "mmanụ",
              "e",
              "ji",
              "eri",
              "okwu"
            ]
          },
          {
            "id": "ig-u10-l1-q5",
            "type": "audio_listen",
            "phrase": "Onye kwe, chi ya ekwe",
            "prompt": "Listen to the famous Igbo proverb. What philosophical truth does it teach?",
            "options": [
              "If a person commits their will, their personal deity (Chi) affirms it (Determination brings destiny)",
              "Only rich people have a Chi",
              "Never speak to strangers at night",
              "A sleeping man catches fish"
            ],
            "correctAnswer": "If a person commits their will, their personal deity (Chi) affirms it (Determination brings destiny)",
            "explanation": "'Onye kwe, chi ya ekwe' is a core Igbo proverb asserting human agency, self-determination, and divine affirmation."
          },
          {
            "id": "ig-u10-l1-q6",
            "type": "multiple_choice",
            "prompt": "What moral flaw usually leads to Mbe the tortoise's downfall in Igbo folktales?",
            "options": [
              "Greed (Anya ukwu) and selfishness",
              "Lack of speed",
              "Being too kind to strangers",
              "Refusing to sleep"
            ],
            "correctAnswer": "Greed (Anya ukwu) and selfishness",
            "explanation": "Despite his cleverness, Mbe's insatiable greed ('anya ukwu') and hubris always precipitate his cracked shell or comical ruin."
          },
          {
            "id": "ig-u10-l1-q7",
            "type": "matching",
            "prompt": "Match profound Igbo proverbs with English translations:",
            "pairs": [
              {
                "native": "Gidi gidi bụ ugwu eze",
                "english": "Unity and solidarity are the dignity of a leader",
                "left": "Gidi gidi bụ ugwu eze",
                "right": "Unity and solidarity are the dignity of a leader"
              },
              {
                "native": "Ehi na-enweghị ọdụ, chi ya na-achụrụ ya ijiji",
                "english": "A tailless cow has its flies chased away by its God (God protects the helpless)",
                "left": "Ehi na-enweghị ọdụ, chi ya na-achụrụ ya ijiji",
                "right": "A tailless cow has its flies chased away by its God (God protects the helpless)"
              },
              {
                "native": "Nwayọọ nwayọọ ka e ji arị elu",
                "english": "Patience and steady pace are used to climb heights",
                "left": "Nwayọọ nwayọọ ka e ji arị elu",
                "right": "Patience and steady pace are used to climb heights"
              },
              {
                "native": "A naghị eji aka abụọ aracha mmiri ọkụ",
                "english": "One does not use two hands to lick boiling water (Caution in danger)",
                "left": "A naghị eji aka abụọ aracha mmiri ọkụ",
                "right": "A naghị eji aka abụọ aracha mmiri ọkụ"
              }
            ]
          },
          {
            "id": "ig-u10-l1-q8",
            "type": "fill_blank",
            "sentence": "Folktales traditionally conclude with the phrase: 'Akụkọ m kwụsịrị ebe ___' (My story stopped right here).",
            "missingWord": "a",
            "options": [
              "a",
              "ahụ",
              "nne",
              "mbe"
            ],
            "correctAnswer": "a",
            "explanation": "'Akụkọ m kwụsịrị ebe a' is the traditional storyteller's closing signoff."
          },
          {
            "id": "ig-u10-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the proverb: 'A gbaa aka na-azo ala, onye ji ji a gbaa aka' (If land disputes are contested empty-handed, only the yam owner prevails):",
            "tokens": [
              "A",
              "gbaa",
              "aka",
              "na-azo",
              "ala,",
              "onye",
              "ji",
              "ji",
              "a",
              "gbaa",
              "aka"
            ],
            "correctTokens": [
              "A",
              "gbaa",
              "aka",
              "na-azo",
              "ala,",
              "onye",
              "ji",
              "ji",
              "a",
              "gbaa",
              "aka"
            ]
          },
          {
            "id": "ig-u10-l1-q10",
            "type": "multiple_choice",
            "prompt": "Why does the tortoise (Mbe) have a cracked, patchwork shell in Igbo folklore?",
            "options": [
              "He fell from the sky onto rocks after deceiving the birds at their feast in the heavens",
              "He was hit by lightning during a thunderstorm",
              "He was born that way by nature",
              "A hunter stepped on him in the forest"
            ],
            "correctAnswer": "He fell from the sky onto rocks after deceiving the birds at their feast in the heavens",
            "explanation": "In the famous folktale, Mbe took the name 'All of You', ate all the sky food, and when the birds took back their feathers, fell and shattered his shell."
          },
          {
            "id": "ig-u10-l1-q11",
            "type": "audio_listen",
            "phrase": "Ihe ehihie hụrụ, abalị agaghị ahụ ya",
            "prompt": "Listen to the proverb. What wisdom does it express?",
            "options": [
              "What daylight observes, the night cannot comprehend (Truth is clearer in the light)",
              "Never travel after dark",
              "Cows prefer daylight grazing",
              "Sleep during the afternoon"
            ],
            "correctAnswer": "What daylight observes, the night cannot comprehend (Truth is clearer in the light)",
            "explanation": "This proverb underscores clarity of vision, honesty, and transparency over secrecy and darkness."
          },
          {
            "id": "ig-u10-l1-q12",
            "type": "matching",
            "prompt": "Match oral folklore genres in Igbo:",
            "pairs": [
              {
                "native": "Akụkọ ifo",
                "english": "Folk story / Fairy fable (told at night)",
                "left": "Akụkọ ifo",
                "right": "Folk story / Fairy fable (told at night)"
              },
              {
                "native": "Ilu",
                "english": "Proverb / Parable",
                "left": "Ilu",
                "right": "Proverb / Parable"
              },
              {
                "native": "Gwam gwam gwam",
                "english": "Riddle / Brainteaser ('Tell me tell me tell me')",
                "left": "Gwam gwam gwam",
                "right": "Riddle / Brainteaser ('Tell me tell me tell me')"
              },
              {
                "native": "Egwu ọnwa",
                "english": "Moonlight play / Song-dance games",
                "left": "Egwu ọnwa",
                "right": "Moonlight play / Song-dance games"
              }
            ]
          },
          {
            "id": "ig-u10-l1-q13",
            "type": "fill_blank",
            "sentence": "The Igbo riddle challenge begins with the formula: 'Gwam, gwam, ___' (Tell me, tell me, tell me).",
            "missingWord": "gwam",
            "options": [
              "gwam",
              "akụkọ",
              "mbe",
              "ilu"
            ],
            "correctAnswer": "gwam",
            "explanation": "'Gwam, gwam, gwam' is the iconic Igbo formula for proposing a riddle."
          },
          {
            "id": "ig-u10-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the riddle: 'Gwam: Nna m nwere obere mkpụrụ osisi nke juru ụlọ' (Riddle: My father has a small seed that fills the entire house — Lamp/Light):",
            "tokens": [
              "Nna",
              "m",
              "nwere",
              "obere",
              "mkpụrụ",
              "osisi",
              "nke",
              "juru",
              "ụlọ"
            ],
            "correctTokens": [
              "Nna",
              "m",
              "nwere",
              "obere",
              "mkpụrụ",
              "osisi",
              "nke",
              "juru",
              "ụlọ"
            ]
          },
          {
            "id": "ig-u10-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is the answer to the riddle: 'Gwam ihe na-agafe n\\'ihu eze na-adịghị ekele ya' (Tell me what passes before a king without greeting him)?",
            "options": [
              "Ijiji (A fly)",
              "Nkịta (A dog)",
              "Mmiri (Water)",
              "Anwụrụ ọkụ (Smoke)"
            ],
            "correctAnswer": "Ijiji (A fly)",
            "explanation": "Ijiji (a fly) flies past even the greatest monarch without bowing or greeting."
          },
          {
            "id": "ig-u10-l1-q16",
            "type": "audio_listen",
            "phrase": "Ụzọ dị ogologo ma nwee ngwụcha",
            "prompt": "Listen to the philosophical saying. What truth does it offer?",
            "options": [
              "The road is long but it has an end (Every journey and difficulty concludes)",
              "Never start a journey without water",
              "A short road is always the best",
              "Walk fast to avoid the rain"
            ],
            "correctAnswer": "The road is long but it has an end (Every journey and difficulty concludes)",
            "explanation": "This encourages endurance by reminding us that every hardship or path has an ultimate conclusion."
          },
          {
            "id": "ig-u10-l1-q17",
            "type": "multiple_choice",
            "prompt": "What does the proverb 'Onye na-amaghị ebe mmiri bidoro mawa ya, agaghị ama ebe ọ kwụsịrị' mean?",
            "options": [
              "If you do not know where the rain began to beat you, you will not know where you dried your body (Know your history)",
              "Always carry an umbrella during rainy season",
              "Rain brings prosperity to farmers",
              "Swimming in rivers is dangerous"
            ],
            "correctAnswer": "If you do not know where the rain began to beat you, you will not know where you dried your body (Know your history)",
            "explanation": "Made famous globally by Chinua Achebe, this emphasizes the supreme necessity of historical consciousness and root identity."
          },
          {
            "id": "ig-u10-l1-q18",
            "type": "fill_blank",
            "sentence": "Complete the proverb: 'E mee nwata ka e mere ibe ya, obi a dị ya ___' (If a child is treated like peers, their heart is glad).",
            "missingWord": "mma",
            "options": [
              "mma",
              "ọjọọ",
              "ndụ",
              "ọkụ"
            ],
            "correctAnswer": "mma",
            "explanation": "'Obi a dị ya mma' (their heart will be glad) — teaching equity, fair play, and justice among children."
          },
          {
            "id": "ig-u10-l1-q19",
            "type": "multiple_choice",
            "prompt": "Why were folktales (akụkọ ifo) strictly told at night under the moonlight (egwu ọnwa) in traditional Igbo society?",
            "options": [
              "To allow people to finish farmwork during the day, and use nocturnal relaxation for moral and cultural education",
              "Because spiders sleep during daytime",
              "Because talking in the afternoon was forbidden by law",
              "Because people could only see the moon at night"
            ],
            "correctAnswer": "To allow people to finish farmwork during the day, and use nocturnal relaxation for moral and cultural education",
            "explanation": "Taboos against telling folktales in the day preserved agrarian labor discipline, reserving the night for communal learning."
          },
          {
            "id": "ig-u10-l1-q20",
            "type": "matching",
            "prompt": "Match core values instilled through Igbo oral literature:",
            "pairs": [
              {
                "native": "Eziokwu",
                "english": "Truthfulness and moral righteousness",
                "left": "Eziokwu",
                "right": "Truthfulness and moral righteousness"
              },
              {
                "native": "Ịdị n'otu",
                "english": "Communal unity and collective solidarity",
                "left": "Ịdị n'otu",
                "right": "Communal unity and collective solidarity"
              },
              {
                "native": "Ike ọrụ",
                "english": "Diligence and hard work (condemning laziness)",
                "left": "Ike ọrụ",
                "right": "Diligence and hard work (condemning laziness)"
              },
              {
                "native": "Nsọpụrụ",
                "english": "Deference and honor to parents and elders",
                "left": "Nsọpụrụ",
                "right": "Deference and honor to parents and elders"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u10-l1-q1",
        "type": "multiple_choice",
        "prompt": "Who is the legendary trickster protagonist of Igbo folktales (Akụkọ Ifo)?",
        "options": [
          "Mbe (Tortoise)",
          "Agu (Leopard)",
          "Ọdụm (Lion)",
          "Enwe (Monkey)"
        ],
        "correctAnswer": "Mbe (Tortoise)",
        "explanation": "Mbe (the tortoise, affectionately called Mbe Nwaniga or Tortoise the trickster) is the central figure in Igbo folktales."
      },
      {
        "id": "ig-u10-l1-q2",
        "type": "matching",
        "prompt": "Match characters in Igbo folktales with their typical personifications:",
        "pairs": [
          {
            "native": "Mbe",
            "english": "Cunning, gluttonous trickster tortoise",
            "left": "Mbe",
            "right": "Cunning, gluttonous trickster tortoise"
          },
          {
            "native": "Anịkọ",
            "english": "Mbe's long-suffering clever wife",
            "left": "Anịkọ",
            "right": "Mbe's long-suffering clever wife"
          },
          {
            "native": "Agu",
            "english": "Fierce leopard (often tricked by Mbe)",
            "left": "Agu",
            "right": "Fierce leopard (often tricked by Mbe)"
          },
          {
            "native": "Enyi",
            "english": "Mighty elephant",
            "left": "Enyi",
            "right": "Mighty elephant"
          }
        ]
      },
      {
        "id": "ig-u10-l1-q3",
        "type": "fill_blank",
        "sentence": "When an Igbo storyteller opens with the traditional call 'Chakpii!' (or Cakpii!), the listeners eagerly respond: '___!'.",
        "missingWord": "Woo / Oyoo",
        "options": [
          "Woo / Oyoo",
          "Mba",
          "Daalụ",
          "Ka chi foo"
        ],
        "correctAnswer": "Woo / Oyoo",
        "explanation": "The traditional call-and-response is 'Chakpii!' -> 'Woo!' or 'Oyoo!'."
      },
      {
        "id": "ig-u10-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the famous Chinua Achebe quote on proverbs: 'Ilu bụ mmanụ e ji eri okwu' (Proverbs are the palm oil with which words are eaten):",
        "tokens": [
          "Ilu",
          "bụ",
          "mmanụ",
          "e",
          "ji",
          "eri",
          "okwu"
        ],
        "correctTokens": [
          "Ilu",
          "bụ",
          "mmanụ",
          "e",
          "ji",
          "eri",
          "okwu"
        ]
      },
      {
        "id": "ig-u10-l1-q5",
        "type": "audio_listen",
        "phrase": "Onye kwe, chi ya ekwe",
        "prompt": "Listen to the famous Igbo proverb. What philosophical truth does it teach?",
        "options": [
          "If a person commits their will, their personal deity (Chi) affirms it (Determination brings destiny)",
          "Only rich people have a Chi",
          "Never speak to strangers at night",
          "A sleeping man catches fish"
        ],
        "correctAnswer": "If a person commits their will, their personal deity (Chi) affirms it (Determination brings destiny)",
        "explanation": "'Onye kwe, chi ya ekwe' is a core Igbo proverb asserting human agency, self-determination, and divine affirmation."
      },
      {
        "id": "ig-u10-l1-q6",
        "type": "multiple_choice",
        "prompt": "What moral flaw usually leads to Mbe the tortoise's downfall in Igbo folktales?",
        "options": [
          "Greed (Anya ukwu) and selfishness",
          "Lack of speed",
          "Being too kind to strangers",
          "Refusing to sleep"
        ],
        "correctAnswer": "Greed (Anya ukwu) and selfishness",
        "explanation": "Despite his cleverness, Mbe's insatiable greed ('anya ukwu') and hubris always precipitate his cracked shell or comical ruin."
      },
      {
        "id": "ig-u10-l1-q7",
        "type": "matching",
        "prompt": "Match profound Igbo proverbs with English translations:",
        "pairs": [
          {
            "native": "Gidi gidi bụ ugwu eze",
            "english": "Unity and solidarity are the dignity of a leader",
            "left": "Gidi gidi bụ ugwu eze",
            "right": "Unity and solidarity are the dignity of a leader"
          },
          {
            "native": "Ehi na-enweghị ọdụ, chi ya na-achụrụ ya ijiji",
            "english": "A tailless cow has its flies chased away by its God (God protects the helpless)",
            "left": "Ehi na-enweghị ọdụ, chi ya na-achụrụ ya ijiji",
            "right": "A tailless cow has its flies chased away by its God (God protects the helpless)"
          },
          {
            "native": "Nwayọọ nwayọọ ka e ji arị elu",
            "english": "Patience and steady pace are used to climb heights",
            "left": "Nwayọọ nwayọọ ka e ji arị elu",
            "right": "Patience and steady pace are used to climb heights"
          },
          {
            "native": "A naghị eji aka abụọ aracha mmiri ọkụ",
            "english": "One does not use two hands to lick boiling water (Caution in danger)",
            "left": "A naghị eji aka abụọ aracha mmiri ọkụ",
            "right": "A naghị eji aka abụọ aracha mmiri ọkụ"
          }
        ]
      },
      {
        "id": "ig-u10-l1-q8",
        "type": "fill_blank",
        "sentence": "Folktales traditionally conclude with the phrase: 'Akụkọ m kwụsịrị ebe ___' (My story stopped right here).",
        "missingWord": "a",
        "options": [
          "a",
          "ahụ",
          "nne",
          "mbe"
        ],
        "correctAnswer": "a",
        "explanation": "'Akụkọ m kwụsịrị ebe a' is the traditional storyteller's closing signoff."
      },
      {
        "id": "ig-u10-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the proverb: 'A gbaa aka na-azo ala, onye ji ji a gbaa aka' (If land disputes are contested empty-handed, only the yam owner prevails):",
        "tokens": [
          "A",
          "gbaa",
          "aka",
          "na-azo",
          "ala,",
          "onye",
          "ji",
          "ji",
          "a",
          "gbaa",
          "aka"
        ],
        "correctTokens": [
          "A",
          "gbaa",
          "aka",
          "na-azo",
          "ala,",
          "onye",
          "ji",
          "ji",
          "a",
          "gbaa",
          "aka"
        ]
      },
      {
        "id": "ig-u10-l1-q10",
        "type": "multiple_choice",
        "prompt": "Why does the tortoise (Mbe) have a cracked, patchwork shell in Igbo folklore?",
        "options": [
          "He fell from the sky onto rocks after deceiving the birds at their feast in the heavens",
          "He was hit by lightning during a thunderstorm",
          "He was born that way by nature",
          "A hunter stepped on him in the forest"
        ],
        "correctAnswer": "He fell from the sky onto rocks after deceiving the birds at their feast in the heavens",
        "explanation": "In the famous folktale, Mbe took the name 'All of You', ate all the sky food, and when the birds took back their feathers, fell and shattered his shell."
      },
      {
        "id": "ig-u10-l1-q11",
        "type": "audio_listen",
        "phrase": "Ihe ehihie hụrụ, abalị agaghị ahụ ya",
        "prompt": "Listen to the proverb. What wisdom does it express?",
        "options": [
          "What daylight observes, the night cannot comprehend (Truth is clearer in the light)",
          "Never travel after dark",
          "Cows prefer daylight grazing",
          "Sleep during the afternoon"
        ],
        "correctAnswer": "What daylight observes, the night cannot comprehend (Truth is clearer in the light)",
        "explanation": "This proverb underscores clarity of vision, honesty, and transparency over secrecy and darkness."
      },
      {
        "id": "ig-u10-l1-q12",
        "type": "matching",
        "prompt": "Match oral folklore genres in Igbo:",
        "pairs": [
          {
            "native": "Akụkọ ifo",
            "english": "Folk story / Fairy fable (told at night)",
            "left": "Akụkọ ifo",
            "right": "Folk story / Fairy fable (told at night)"
          },
          {
            "native": "Ilu",
            "english": "Proverb / Parable",
            "left": "Ilu",
            "right": "Proverb / Parable"
          },
          {
            "native": "Gwam gwam gwam",
            "english": "Riddle / Brainteaser ('Tell me tell me tell me')",
            "left": "Gwam gwam gwam",
            "right": "Riddle / Brainteaser ('Tell me tell me tell me')"
          },
          {
            "native": "Egwu ọnwa",
            "english": "Moonlight play / Song-dance games",
            "left": "Egwu ọnwa",
            "right": "Moonlight play / Song-dance games"
          }
        ]
      },
      {
        "id": "ig-u10-l1-q13",
        "type": "fill_blank",
        "sentence": "The Igbo riddle challenge begins with the formula: 'Gwam, gwam, ___' (Tell me, tell me, tell me).",
        "missingWord": "gwam",
        "options": [
          "gwam",
          "akụkọ",
          "mbe",
          "ilu"
        ],
        "correctAnswer": "gwam",
        "explanation": "'Gwam, gwam, gwam' is the iconic Igbo formula for proposing a riddle."
      },
      {
        "id": "ig-u10-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the riddle: 'Gwam: Nna m nwere obere mkpụrụ osisi nke juru ụlọ' (Riddle: My father has a small seed that fills the entire house — Lamp/Light):",
        "tokens": [
          "Nna",
          "m",
          "nwere",
          "obere",
          "mkpụrụ",
          "osisi",
          "nke",
          "juru",
          "ụlọ"
        ],
        "correctTokens": [
          "Nna",
          "m",
          "nwere",
          "obere",
          "mkpụrụ",
          "osisi",
          "nke",
          "juru",
          "ụlọ"
        ]
      },
      {
        "id": "ig-u10-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is the answer to the riddle: 'Gwam ihe na-agafe n\\'ihu eze na-adịghị ekele ya' (Tell me what passes before a king without greeting him)?",
        "options": [
          "Ijiji (A fly)",
          "Nkịta (A dog)",
          "Mmiri (Water)",
          "Anwụrụ ọkụ (Smoke)"
        ],
        "correctAnswer": "Ijiji (A fly)",
        "explanation": "Ijiji (a fly) flies past even the greatest monarch without bowing or greeting."
      },
      {
        "id": "ig-u10-l1-q16",
        "type": "audio_listen",
        "phrase": "Ụzọ dị ogologo ma nwee ngwụcha",
        "prompt": "Listen to the philosophical saying. What truth does it offer?",
        "options": [
          "The road is long but it has an end (Every journey and difficulty concludes)",
          "Never start a journey without water",
          "A short road is always the best",
          "Walk fast to avoid the rain"
        ],
        "correctAnswer": "The road is long but it has an end (Every journey and difficulty concludes)",
        "explanation": "This encourages endurance by reminding us that every hardship or path has an ultimate conclusion."
      },
      {
        "id": "ig-u10-l1-q17",
        "type": "multiple_choice",
        "prompt": "What does the proverb 'Onye na-amaghị ebe mmiri bidoro mawa ya, agaghị ama ebe ọ kwụsịrị' mean?",
        "options": [
          "If you do not know where the rain began to beat you, you will not know where you dried your body (Know your history)",
          "Always carry an umbrella during rainy season",
          "Rain brings prosperity to farmers",
          "Swimming in rivers is dangerous"
        ],
        "correctAnswer": "If you do not know where the rain began to beat you, you will not know where you dried your body (Know your history)",
        "explanation": "Made famous globally by Chinua Achebe, this emphasizes the supreme necessity of historical consciousness and root identity."
      },
      {
        "id": "ig-u10-l1-q18",
        "type": "fill_blank",
        "sentence": "Complete the proverb: 'E mee nwata ka e mere ibe ya, obi a dị ya ___' (If a child is treated like peers, their heart is glad).",
        "missingWord": "mma",
        "options": [
          "mma",
          "ọjọọ",
          "ndụ",
          "ọkụ"
        ],
        "correctAnswer": "mma",
        "explanation": "'Obi a dị ya mma' (their heart will be glad) — teaching equity, fair play, and justice among children."
      },
      {
        "id": "ig-u10-l1-q19",
        "type": "multiple_choice",
        "prompt": "Why were folktales (akụkọ ifo) strictly told at night under the moonlight (egwu ọnwa) in traditional Igbo society?",
        "options": [
          "To allow people to finish farmwork during the day, and use nocturnal relaxation for moral and cultural education",
          "Because spiders sleep during daytime",
          "Because talking in the afternoon was forbidden by law",
          "Because people could only see the moon at night"
        ],
        "correctAnswer": "To allow people to finish farmwork during the day, and use nocturnal relaxation for moral and cultural education",
        "explanation": "Taboos against telling folktales in the day preserved agrarian labor discipline, reserving the night for communal learning."
      },
      {
        "id": "ig-u10-l1-q20",
        "type": "matching",
        "prompt": "Match core values instilled through Igbo oral literature:",
        "pairs": [
          {
            "native": "Eziokwu",
            "english": "Truthfulness and moral righteousness",
            "left": "Eziokwu",
            "right": "Truthfulness and moral righteousness"
          },
          {
            "native": "Ịdị n'otu",
            "english": "Communal unity and collective solidarity",
            "left": "Ịdị n'otu",
            "right": "Communal unity and collective solidarity"
          },
          {
            "native": "Ike ọrụ",
            "english": "Diligence and hard work (condemning laziness)",
            "left": "Ike ọrụ",
            "right": "Diligence and hard work (condemning laziness)"
          },
          {
            "native": "Nsọpụrụ",
            "english": "Deference and honor to parents and elders",
            "left": "Nsọpụrụ",
            "right": "Deference and honor to parents and elders"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-11",
    "unitId": "ig-unit-11",
    "unitNumber": 11,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 11: Complex Sentence Structures (Ahịrịokwu Mgbagwoju Anya)",
    "subtitle": "Clauses (Nkebiahịrị), subordinate conjunctions (n’ihi na, ọ bụrụ na), passive voice, and vowel assimilation/elision.",
    "icon": "Network",
    "color": "#059669",
    "lessons": [
      {
        "id": "ig-u11-l1",
        "title": "Lesson 1: Nkebiahịrị, Njikọ na Ndakọrịta Ụdaume (Syntax & Vowel Elision)",
        "description": "Master complex syntax, dependent clauses, passive voice markers (e/a), and vowel assimilation/elision in connected speech.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u11-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is an independent main clause called in Igbo grammar?",
            "options": [
              "Nkebiahịrị isi",
              "Nkebiahịrị nkwado",
              "Ahịrịokwu mfe",
              "Akpaalaokwu"
            ],
            "correctAnswer": "Nkebiahịrị isi",
            "explanation": "'Nkebiahịrị isi' is the main/independent clause that can stand alone with complete meaning."
          },
          {
            "id": "ig-u11-l1-q2",
            "type": "matching",
            "prompt": "Match clause types with grammatical functions in Igbo:",
            "pairs": [
              {
                "native": "Nkebiahịrị isi",
                "english": "Main / Independent clause",
                "left": "Nkebiahịrị isi",
                "right": "Main / Independent clause"
              },
              {
                "native": "Nkebiahịrị nkwado",
                "english": "Subordinate / Dependent clause",
                "left": "Nkebiahịrị nkwado",
                "right": "Subordinate / Dependent clause"
              },
              {
                "native": "Ahịrịokwu mgbagwoju anya",
                "english": "Complex sentence",
                "left": "Ahịrịokwu mgbagwoju anya",
                "right": "Complex sentence"
              },
              {
                "native": "Ahịrịokwu mfe",
                "english": "Simple sentence",
                "left": "Ahịrịokwu mfe",
                "right": "Simple sentence"
              }
            ]
          },
          {
            "id": "ig-u11-l1-q3",
            "type": "fill_blank",
            "sentence": "In conditional sentences ('If you study, you will pass'), the conjunction '___' is used: '___ ị mụọ akwụkwọ, ị ga-agafe'.",
            "missingWord": "Ọ bụrụ na",
            "options": [
              "Ọ bụrụ na",
              "N'ihi na",
              "Kama",
              "Tupu"
            ],
            "correctAnswer": "Ọ bụrụ na",
            "explanation": "'Ọ bụrụ na' introduces a conditional clause ('If / Provided that')."
          },
          {
            "id": "ig-u11-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Ọ bịaghị n'ihi na mmiri zoro' (He did not come because it rained):",
            "tokens": [
              "Ọ",
              "bịaghị",
              "n'ihi",
              "na",
              "mmiri",
              "zoro"
            ],
            "correctTokens": [
              "Ọ",
              "bịaghị",
              "n'ihi",
              "na",
              "mmiri",
              "zoro"
            ]
          },
          {
            "id": "ig-u11-l1-q5",
            "type": "audio_listen",
            "phrase": "E wuru ụlọ ahụ n'afọ gara aga",
            "prompt": "Listen to the passive statement. What does 'E wuru...' express?",
            "options": [
              "Passive voice: 'That house was built last year'",
              "Future plan: 'We will build that house next year'",
              "Negative statement: 'Nobody built that house'",
              "Question: 'Who built that house?'"
            ],
            "correctAnswer": "Passive voice: 'That house was built last year'",
            "explanation": "The impersonal prefix 'e-' or 'a-' marks the passive voice in Igbo ('E wuru' = was built)."
          },
          {
            "id": "ig-u11-l1-q6",
            "type": "multiple_choice",
            "prompt": "What phonological process occurs when 'na ụlọ' contracts into 'n'ụlọ'?",
            "options": [
              "Ndapụ ụdaume (Vowel elision)",
              "Nkwekọrịta ụdaume (Vowel harmony)",
              "Nkwụsị ụda (Glottalization)",
              "Mkpụrụedemede mkpị"
            ],
            "correctAnswer": "Ndapụ ụdaume (Vowel elision)",
            "explanation": "The omission or dropping of vowel 'a' in 'na' when preceding another vowel is vowel elision (ndapụ ụdaume)."
          },
          {
            "id": "ig-u11-l1-q7",
            "type": "matching",
            "prompt": "Match subordinating conjunctions with their English equivalents:",
            "pairs": [
              {
                "native": "N'ihi na / Maka na",
                "english": "Because / Since",
                "left": "N'ihi na / Maka na",
                "right": "Because / Since"
              },
              {
                "native": "Kama",
                "english": "Instead of / Rather than",
                "left": "Kama",
                "right": "Instead of / Rather than"
              },
              {
                "native": "N'agbanyeghị na",
                "english": "Although / Even though / Despite",
                "left": "N'agbanyeghị na",
                "right": "Although / Even though / Despite"
              },
              {
                "native": "Ka o wee",
                "english": "In order that / So that",
                "left": "Ka o wee",
                "right": "In order that / So that"
              }
            ]
          },
          {
            "id": "ig-u11-l1-q8",
            "type": "fill_blank",
            "sentence": "When two identical vowels blend together in rapid connected speech, the process is termed 'Ndakọrịta ___' (Vowel assimilation).",
            "missingWord": "ụdaume",
            "options": [
              "ụdaume",
              "mkpụrụ",
              "mgbochiume",
              "olu"
            ],
            "correctAnswer": "ụdaume",
            "explanation": "'Ndakọrịta ụdaume' is vowel assimilation."
          },
          {
            "id": "ig-u11-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Kama ị ga-anọ nkịtị, gaa rụọ ọrụ' (Instead of sitting idle, go and work):",
            "tokens": [
              "Kama",
              "ị",
              "ga-anọ",
              "nkịtị,",
              "gaa",
              "rụọ",
              "ọrụ"
            ],
            "correctTokens": [
              "Kama",
              "ị",
              "ga-anọ",
              "nkịtị,",
              "gaa",
              "rụọ",
              "ọrụ"
            ]
          },
          {
            "id": "ig-u11-l1-q10",
            "type": "multiple_choice",
            "prompt": "Which impersonal prefix harmonizes with a heavy root verb (e.g. 'gba' [shoot/run]) to form passive voice?",
            "options": [
              "A- (A gbara ya)",
              "E-",
              "I-",
              "Ọ-"
            ],
            "correctAnswer": "A- (A gbara ya)",
            "explanation": "Heavy vowel roots take the prefix 'A-' ('A gbara ya'), while light roots take 'E-' ('E gburu ya')."
          },
          {
            "id": "ig-u11-l1-q11",
            "type": "audio_listen",
            "phrase": "N'agbanyeghị na ike gwụrụ ya, ọ gụchara akwụkwọ ahụ",
            "prompt": "Listen to the concession sentence. What does it mean?",
            "options": [
              "Although he was exhausted, he finished reading that book",
              "Because he was tired, he threw away the book",
              "He could not read because the book was torn",
              "Whenever he reads books, he falls asleep"
            ],
            "correctAnswer": "Although he was exhausted, he finished reading that book",
            "explanation": "'N'agbanyeghị na...' = Although / Even though; 'ọ gụchara' = he finished reading."
          },
          {
            "id": "ig-u11-l1-q12",
            "type": "matching",
            "prompt": "Match syntactic clause markers:",
            "pairs": [
              {
                "native": "Nke na",
                "english": "Such that / Resulting in",
                "left": "Nke na",
                "right": "Nke na"
              },
              {
                "native": "Dị ka",
                "english": "Just as / In the manner of",
                "left": "Dị ka",
                "right": "Just as / In the manner of"
              },
              {
                "native": "Tupu",
                "english": "Prior to / Before",
                "left": "Tupu",
                "right": "Prior to / Before"
              },
              {
                "native": "Ebe ọ bụ na",
                "english": "Seeing that / Inasmuch as",
                "left": "Ebe ọ bụ na",
                "right": "Seeing that / Inasmuch as"
              }
            ]
          },
          {
            "id": "ig-u11-l1-q13",
            "type": "fill_blank",
            "sentence": "Relative clauses in Igbo are typically introduced by the relative particle '___' ('The man WHO came' = 'Nwoke ___ bịara').",
            "missingWord": "nke / ahụ / onye",
            "options": [
              "onye",
              "ebe",
              "gịnị",
              "olee"
            ],
            "correctAnswer": "onye",
            "explanation": "'Nwoke ahụ bịara' or 'Nwoke onye bịara' functions as a relative clause."
          },
          {
            "id": "ig-u11-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'A zụrụ azụ ahụ n'ahịa Eke' (That fish was bought at Eke market):",
            "tokens": [
              "A",
              "zụrụ",
              "azụ",
              "ahụ",
              "n'ahịa",
              "Eke"
            ],
            "correctTokens": [
              "A",
              "zụrụ",
              "azụ",
              "ahụ",
              "n'ahịa",
              "Eke"
            ]
          },
          {
            "id": "ig-u11-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does 'Ka o wee nwee ike ịga mahadum' mean?",
            "options": [
              "So that he might be able to attend university (Purpose clause)",
              "Because the university was closed",
              "After he graduated from university",
              "Unless he goes to university"
            ],
            "correctAnswer": "So that he might be able to attend university (Purpose clause)",
            "explanation": "'Ka o wee...' introduces a purpose clause meaning 'So that / In order to'."
          },
          {
            "id": "ig-u11-l1-q16",
            "type": "audio_listen",
            "phrase": "Ọ bụrụgodị na mmiri zoo, anyị ga-eje",
            "prompt": "Listen to the emphatic conditional sentence. What does it emphasize?",
            "options": [
              "Even if it rains, we will definitely go",
              "If it rains, we will stay indoors",
              "Rain will prevent us from going",
              "We hope it will rain tomorrow"
            ],
            "correctAnswer": "Even if it rains, we will definitely go",
            "explanation": "'Ọ bụrụgodị na...' conveys emphatic condition: 'Even if / Even supposing that'."
          },
          {
            "id": "ig-u11-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is an embedded clause called in Igbo linguistic analysis?",
            "options": [
              "Nkebiahịrị ntinye",
              "Ụdaume arọ",
              "Nkebiokwu",
              "Akara elu"
            ],
            "correctAnswer": "Nkebiahịrị ntinye",
            "explanation": "'Nkebiahịrị ntinye' refers to an embedded or inserted relative clause."
          },
          {
            "id": "ig-u11-l1-q18",
            "type": "fill_blank",
            "sentence": "When writing contractions created by vowel elision, an ___ (akara nsonso) is used (e.g. n'ụlọ).",
            "missingWord": "apostrophe",
            "options": [
              "apostrophe",
              "hyphen",
              "colon",
              "accent"
            ],
            "correctAnswer": "apostrophe",
            "explanation": "The apostrophe indicates the omission of the elided vowel in orthography."
          },
          {
            "id": "ig-u11-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does 'A mara ya ikpe' signify in judicial terminology?",
            "options": [
              "He was judged / sentenced / found guilty (Passive)",
              "He won the case",
              "He became a judge",
              "He withdrew the lawsuit"
            ],
            "correctAnswer": "He was judged / sentenced / found guilty (Passive)",
            "explanation": "'A mara ya ikpe' is the passive legal expression for being convicted / sentenced."
          },
          {
            "id": "ig-u11-l1-q20",
            "type": "matching",
            "prompt": "Match advanced syntactic transitions:",
            "pairs": [
              {
                "native": "N'agbanyeghị nke ahụ",
                "english": "Nevertheless / Despite that",
                "left": "N'agbanyeghị nke ahụ",
                "right": "Nevertheless / Despite that"
              },
              {
                "native": "N'otu aka ahụ",
                "english": "In the same vein / Similarly",
                "left": "N'otu aka ahụ",
                "right": "In the same vein / Similarly"
              },
              {
                "native": "N'aka nke ọzọ",
                "english": "On the other hand",
                "left": "N'aka nke ọzọ",
                "right": "On the other hand"
              },
              {
                "native": "N'ikpeazụ",
                "english": "Ultimately / In conclusion",
                "left": "N'ikpeazụ",
                "right": "Ultimately / In conclusion"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u11-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is an independent main clause called in Igbo grammar?",
        "options": [
          "Nkebiahịrị isi",
          "Nkebiahịrị nkwado",
          "Ahịrịokwu mfe",
          "Akpaalaokwu"
        ],
        "correctAnswer": "Nkebiahịrị isi",
        "explanation": "'Nkebiahịrị isi' is the main/independent clause that can stand alone with complete meaning."
      },
      {
        "id": "ig-u11-l1-q2",
        "type": "matching",
        "prompt": "Match clause types with grammatical functions in Igbo:",
        "pairs": [
          {
            "native": "Nkebiahịrị isi",
            "english": "Main / Independent clause",
            "left": "Nkebiahịrị isi",
            "right": "Main / Independent clause"
          },
          {
            "native": "Nkebiahịrị nkwado",
            "english": "Subordinate / Dependent clause",
            "left": "Nkebiahịrị nkwado",
            "right": "Subordinate / Dependent clause"
          },
          {
            "native": "Ahịrịokwu mgbagwoju anya",
            "english": "Complex sentence",
            "left": "Ahịrịokwu mgbagwoju anya",
            "right": "Complex sentence"
          },
          {
            "native": "Ahịrịokwu mfe",
            "english": "Simple sentence",
            "left": "Ahịrịokwu mfe",
            "right": "Simple sentence"
          }
        ]
      },
      {
        "id": "ig-u11-l1-q3",
        "type": "fill_blank",
        "sentence": "In conditional sentences ('If you study, you will pass'), the conjunction '___' is used: '___ ị mụọ akwụkwọ, ị ga-agafe'.",
        "missingWord": "Ọ bụrụ na",
        "options": [
          "Ọ bụrụ na",
          "N'ihi na",
          "Kama",
          "Tupu"
        ],
        "correctAnswer": "Ọ bụrụ na",
        "explanation": "'Ọ bụrụ na' introduces a conditional clause ('If / Provided that')."
      },
      {
        "id": "ig-u11-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words to say: 'Ọ bịaghị n'ihi na mmiri zoro' (He did not come because it rained):",
        "tokens": [
          "Ọ",
          "bịaghị",
          "n'ihi",
          "na",
          "mmiri",
          "zoro"
        ],
        "correctTokens": [
          "Ọ",
          "bịaghị",
          "n'ihi",
          "na",
          "mmiri",
          "zoro"
        ]
      },
      {
        "id": "ig-u11-l1-q5",
        "type": "audio_listen",
        "phrase": "E wuru ụlọ ahụ n'afọ gara aga",
        "prompt": "Listen to the passive statement. What does 'E wuru...' express?",
        "options": [
          "Passive voice: 'That house was built last year'",
          "Future plan: 'We will build that house next year'",
          "Negative statement: 'Nobody built that house'",
          "Question: 'Who built that house?'"
        ],
        "correctAnswer": "Passive voice: 'That house was built last year'",
        "explanation": "The impersonal prefix 'e-' or 'a-' marks the passive voice in Igbo ('E wuru' = was built)."
      },
      {
        "id": "ig-u11-l1-q6",
        "type": "multiple_choice",
        "prompt": "What phonological process occurs when 'na ụlọ' contracts into 'n'ụlọ'?",
        "options": [
          "Ndapụ ụdaume (Vowel elision)",
          "Nkwekọrịta ụdaume (Vowel harmony)",
          "Nkwụsị ụda (Glottalization)",
          "Mkpụrụedemede mkpị"
        ],
        "correctAnswer": "Ndapụ ụdaume (Vowel elision)",
        "explanation": "The omission or dropping of vowel 'a' in 'na' when preceding another vowel is vowel elision (ndapụ ụdaume)."
      },
      {
        "id": "ig-u11-l1-q7",
        "type": "matching",
        "prompt": "Match subordinating conjunctions with their English equivalents:",
        "pairs": [
          {
            "native": "N'ihi na / Maka na",
            "english": "Because / Since",
            "left": "N'ihi na / Maka na",
            "right": "Because / Since"
          },
          {
            "native": "Kama",
            "english": "Instead of / Rather than",
            "left": "Kama",
            "right": "Instead of / Rather than"
          },
          {
            "native": "N'agbanyeghị na",
            "english": "Although / Even though / Despite",
            "left": "N'agbanyeghị na",
            "right": "Although / Even though / Despite"
          },
          {
            "native": "Ka o wee",
            "english": "In order that / So that",
            "left": "Ka o wee",
            "right": "In order that / So that"
          }
        ]
      },
      {
        "id": "ig-u11-l1-q8",
        "type": "fill_blank",
        "sentence": "When two identical vowels blend together in rapid connected speech, the process is termed 'Ndakọrịta ___' (Vowel assimilation).",
        "missingWord": "ụdaume",
        "options": [
          "ụdaume",
          "mkpụrụ",
          "mgbochiume",
          "olu"
        ],
        "correctAnswer": "ụdaume",
        "explanation": "'Ndakọrịta ụdaume' is vowel assimilation."
      },
      {
        "id": "ig-u11-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Kama ị ga-anọ nkịtị, gaa rụọ ọrụ' (Instead of sitting idle, go and work):",
        "tokens": [
          "Kama",
          "ị",
          "ga-anọ",
          "nkịtị,",
          "gaa",
          "rụọ",
          "ọrụ"
        ],
        "correctTokens": [
          "Kama",
          "ị",
          "ga-anọ",
          "nkịtị,",
          "gaa",
          "rụọ",
          "ọrụ"
        ]
      },
      {
        "id": "ig-u11-l1-q10",
        "type": "multiple_choice",
        "prompt": "Which impersonal prefix harmonizes with a heavy root verb (e.g. 'gba' [shoot/run]) to form passive voice?",
        "options": [
          "A- (A gbara ya)",
          "E-",
          "I-",
          "Ọ-"
        ],
        "correctAnswer": "A- (A gbara ya)",
        "explanation": "Heavy vowel roots take the prefix 'A-' ('A gbara ya'), while light roots take 'E-' ('E gburu ya')."
      },
      {
        "id": "ig-u11-l1-q11",
        "type": "audio_listen",
        "phrase": "N'agbanyeghị na ike gwụrụ ya, ọ gụchara akwụkwọ ahụ",
        "prompt": "Listen to the concession sentence. What does it mean?",
        "options": [
          "Although he was exhausted, he finished reading that book",
          "Because he was tired, he threw away the book",
          "He could not read because the book was torn",
          "Whenever he reads books, he falls asleep"
        ],
        "correctAnswer": "Although he was exhausted, he finished reading that book",
        "explanation": "'N'agbanyeghị na...' = Although / Even though; 'ọ gụchara' = he finished reading."
      },
      {
        "id": "ig-u11-l1-q12",
        "type": "matching",
        "prompt": "Match syntactic clause markers:",
        "pairs": [
          {
            "native": "Nke na",
            "english": "Such that / Resulting in",
            "left": "Nke na",
            "right": "Nke na"
          },
          {
            "native": "Dị ka",
            "english": "Just as / In the manner of",
            "left": "Dị ka",
            "right": "Just as / In the manner of"
          },
          {
            "native": "Tupu",
            "english": "Prior to / Before",
            "left": "Tupu",
            "right": "Prior to / Before"
          },
          {
            "native": "Ebe ọ bụ na",
            "english": "Seeing that / Inasmuch as",
            "left": "Ebe ọ bụ na",
            "right": "Seeing that / Inasmuch as"
          }
        ]
      },
      {
        "id": "ig-u11-l1-q13",
        "type": "fill_blank",
        "sentence": "Relative clauses in Igbo are typically introduced by the relative particle '___' ('The man WHO came' = 'Nwoke ___ bịara').",
        "missingWord": "nke / ahụ / onye",
        "options": [
          "onye",
          "ebe",
          "gịnị",
          "olee"
        ],
        "correctAnswer": "onye",
        "explanation": "'Nwoke ahụ bịara' or 'Nwoke onye bịara' functions as a relative clause."
      },
      {
        "id": "ig-u11-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'A zụrụ azụ ahụ n'ahịa Eke' (That fish was bought at Eke market):",
        "tokens": [
          "A",
          "zụrụ",
          "azụ",
          "ahụ",
          "n'ahịa",
          "Eke"
        ],
        "correctTokens": [
          "A",
          "zụrụ",
          "azụ",
          "ahụ",
          "n'ahịa",
          "Eke"
        ]
      },
      {
        "id": "ig-u11-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does 'Ka o wee nwee ike ịga mahadum' mean?",
        "options": [
          "So that he might be able to attend university (Purpose clause)",
          "Because the university was closed",
          "After he graduated from university",
          "Unless he goes to university"
        ],
        "correctAnswer": "So that he might be able to attend university (Purpose clause)",
        "explanation": "'Ka o wee...' introduces a purpose clause meaning 'So that / In order to'."
      },
      {
        "id": "ig-u11-l1-q16",
        "type": "audio_listen",
        "phrase": "Ọ bụrụgodị na mmiri zoo, anyị ga-eje",
        "prompt": "Listen to the emphatic conditional sentence. What does it emphasize?",
        "options": [
          "Even if it rains, we will definitely go",
          "If it rains, we will stay indoors",
          "Rain will prevent us from going",
          "We hope it will rain tomorrow"
        ],
        "correctAnswer": "Even if it rains, we will definitely go",
        "explanation": "'Ọ bụrụgodị na...' conveys emphatic condition: 'Even if / Even supposing that'."
      },
      {
        "id": "ig-u11-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is an embedded clause called in Igbo linguistic analysis?",
        "options": [
          "Nkebiahịrị ntinye",
          "Ụdaume arọ",
          "Nkebiokwu",
          "Akara elu"
        ],
        "correctAnswer": "Nkebiahịrị ntinye",
        "explanation": "'Nkebiahịrị ntinye' refers to an embedded or inserted relative clause."
      },
      {
        "id": "ig-u11-l1-q18",
        "type": "fill_blank",
        "sentence": "When writing contractions created by vowel elision, an ___ (akara nsonso) is used (e.g. n'ụlọ).",
        "missingWord": "apostrophe",
        "options": [
          "apostrophe",
          "hyphen",
          "colon",
          "accent"
        ],
        "correctAnswer": "apostrophe",
        "explanation": "The apostrophe indicates the omission of the elided vowel in orthography."
      },
      {
        "id": "ig-u11-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does 'A mara ya ikpe' signify in judicial terminology?",
        "options": [
          "He was judged / sentenced / found guilty (Passive)",
          "He won the case",
          "He became a judge",
          "He withdrew the lawsuit"
        ],
        "correctAnswer": "He was judged / sentenced / found guilty (Passive)",
        "explanation": "'A mara ya ikpe' is the passive legal expression for being convicted / sentenced."
      },
      {
        "id": "ig-u11-l1-q20",
        "type": "matching",
        "prompt": "Match advanced syntactic transitions:",
        "pairs": [
          {
            "native": "N'agbanyeghị nke ahụ",
            "english": "Nevertheless / Despite that",
            "left": "N'agbanyeghị nke ahụ",
            "right": "Nevertheless / Despite that"
          },
          {
            "native": "N'otu aka ahụ",
            "english": "In the same vein / Similarly",
            "left": "N'otu aka ahụ",
            "right": "In the same vein / Similarly"
          },
          {
            "native": "N'aka nke ọzọ",
            "english": "On the other hand",
            "left": "N'aka nke ọzọ",
            "right": "On the other hand"
          },
          {
            "native": "N'ikpeazụ",
            "english": "Ultimately / In conclusion",
            "left": "N'ikpeazụ",
            "right": "Ultimately / In conclusion"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-12",
    "unitId": "ig-unit-12",
    "unitNumber": 12,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 12: Creative and Formal Composition (Edemede)",
    "subtitle": "Essay genres (narrative, expository, argumentative), epistolary correspondence (akwụkwọ ozi), and stylistic rhetoric.",
    "icon": "FileText",
    "color": "#059669",
    "lessons": [
      {
        "id": "ig-u12-l1",
        "title": "Lesson 1: Edemede Dị Iche Iche na Akwụkwọ Ozi (Essay Writing & Epistolary Arts)",
        "description": "Master formal business letters, narrative and argumentative essays, structure (mbido, isi, mmechi), and persuasive rhetoric.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u12-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is an argumentative / debate essay called in Igbo language curriculum?",
            "options": [
              "Edemede arụmụka",
              "Edemede akụkọ",
              "Edemede nkọwa",
              "Edemede uri"
            ],
            "correctAnswer": "Edemede arụmụka",
            "explanation": "'Edemede arụmụka' (or edemede arụmarụ) is an argumentative or debate essay."
          },
          {
            "id": "ig-u12-l1-q2",
            "type": "matching",
            "prompt": "Match Igbo essay types with their definitions:",
            "pairs": [
              {
                "native": "Edemede akụkọ",
                "english": "Narrative essay (storytelling / events)",
                "left": "Edemede akụkọ",
                "right": "Narrative essay (storytelling / events)"
              },
              {
                "native": "Edemede nkọwa",
                "english": "Expository essay (explaining a process/phenomenon)",
                "left": "Edemede nkọwa",
                "right": "Expository essay (explaining a process/phenomenon)"
              },
              {
                "native": "Edemede arụmụka",
                "english": "Argumentative / Persuasive debate essay",
                "left": "Edemede arụmụka",
                "right": "Argumentative / Persuasive debate essay"
              },
              {
                "native": "Edemede nkọwasị",
                "english": "Descriptive essay (vivid imagery of person/place)",
                "left": "Edemede nkọwasị",
                "right": "Descriptive essay (vivid imagery of person/place)"
              }
            ]
          },
          {
            "id": "ig-u12-l1-q3",
            "type": "fill_blank",
            "sentence": "The introductory paragraph of an essay is called '___' in Igbo literary writing.",
            "missingWord": "Mbido",
            "options": [
              "Mbido",
              "Mmechi",
              "Isiokwu",
              "Akụkọ"
            ],
            "correctAnswer": "Mbido",
            "explanation": "'Mbido' (the beginning) is the introductory paragraph of an essay."
          },
          {
            "id": "ig-u12-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the essay title: 'Uru Ọrụ Ugbo Bara n\\'Obodo Anyị' (The Benefits of Agriculture in Our Community):",
            "tokens": [
              "Uru",
              "Ọrụ",
              "Ugbo",
              "Bara",
              "n'Obodo",
              "Anyị"
            ],
            "correctTokens": [
              "Uru",
              "Ọrụ",
              "Ugbo",
              "Bara",
              "n'Obodo",
              "Anyị"
            ]
          },
          {
            "id": "ig-u12-l1-q5",
            "type": "audio_listen",
            "phrase": "Ezi enyi m na-akwanyere m ùgwù",
            "prompt": "Listen to the informal letter salutation. Who is being addressed?",
            "options": [
              "My dear friend whom I hold in high respect",
              "The village king",
              "My school principal",
              "My younger brother"
            ],
            "correctAnswer": "My dear friend whom I hold in high respect",
            "explanation": "'Ezi enyi m...' is a warm, polite salutation used in informal letters to friends."
          },
          {
            "id": "ig-u12-l1-q6",
            "type": "multiple_choice",
            "prompt": "How many addresses does an official / formal business letter (akwụkwọ ozi azụmahịa) contain in Igbo conventions?",
            "options": [
              "Two addresses (Sender's top right, Recipient's top left)",
              "Only one address",
              "Three addresses",
              "No address at all"
            ],
            "correctAnswer": "Two addresses (Sender's top right, Recipient's top left)",
            "explanation": "Formal letters feature two addresses: the writer's address on the top right, and the receiver's address on the top left."
          },
          {
            "id": "ig-u12-l1-q7",
            "type": "matching",
            "prompt": "Match components of an Igbo formal letter:",
            "pairs": [
              {
                "native": "Adreesị onye na-ede akwụkwọ",
                "english": "Sender's address (top right corner)",
                "left": "Adreesị onye na-ede akwụkwọ",
                "right": "Sender's address (top right corner)"
              },
              {
                "native": "Ụbọchị ọnwa",
                "english": "Date",
                "left": "Ụbọchị ọnwa",
                "right": "Date"
              },
              {
                "native": "Isiokwu akwụkwọ ozi",
                "english": "Letter subject / Title (capitalized/underlined)",
                "left": "Isiokwu akwụkwọ ozi",
                "right": "Letter subject / Title (capitalized/underlined)"
              },
              {
                "native": "Mmechi na mbinyeaka",
                "english": "Valediction closing and signature",
                "left": "Mmechi na mbinyeaka",
                "right": "Valediction closing and signature"
              }
            ]
          },
          {
            "id": "ig-u12-l1-q8",
            "type": "fill_blank",
            "sentence": "A formal letter signoff equivalent to 'Yours faithfully' is: 'Nke gị nke na-erubere gị ___' (Yours obediently).",
            "missingWord": "isi",
            "options": [
              "isi",
              "aka",
              "anya",
              "ụkwụ"
            ],
            "correctAnswer": "isi",
            "explanation": "'Na-erubere gị isi' literally means 'submitting/obedient to you' (Yours faithfully/obediently)."
          },
          {
            "id": "ig-u12-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the sentence: 'Mmụta akwụkwọ ụmụ nwaanyị dị oke mkpa' (Female education is of paramount importance):",
            "tokens": [
              "Mmụta",
              "akwụkwọ",
              "ụmụ",
              "nwaanyị",
              "dị",
              "oke",
              "mkpa"
            ],
            "correctTokens": [
              "Mmụta",
              "akwụkwọ",
              "ụmụ",
              "nwaanyị",
              "dị",
              "oke",
              "mkpa"
            ]
          },
          {
            "id": "ig-u12-l1-q10",
            "type": "multiple_choice",
            "prompt": "What is the concluding paragraph of an essay called in Igbo?",
            "options": [
              "Mmechi",
              "Mbido",
              "Isi edemede",
              "Ihe ngosi"
            ],
            "correctAnswer": "Mmechi",
            "explanation": "'Mmechi' (closing/conclusion) summarizes and wraps up the essay arguments."
          },
          {
            "id": "ig-u12-l1-q11",
            "type": "audio_listen",
            "phrase": "N'ikpeazụ, a na m agba gọọmenti ume ka ha wuo ụlọ ọgwụ",
            "prompt": "Listen to the concluding plea. What is the writer urging?",
            "options": [
              "In conclusion, I urge the government to build a hospital",
              "The government should build more markets",
              "Doctors should travel abroad",
              "Citizens should pay higher taxes"
            ],
            "correctAnswer": "In conclusion, I urge the government to build a hospital",
            "explanation": "'A na m agba gọọmenti ume...' = I urge the government to build a hospital (ụlọ ọgwụ)."
          },
          {
            "id": "ig-u12-l1-q12",
            "type": "matching",
            "prompt": "Match contemporary essay topics in Igbo:",
            "pairs": [
              {
                "native": "Nchekwa gburugburu ebe obibi",
                "english": "Environmental protection and ecological conservation",
                "left": "Nchekwa gburugburu ebe obibi",
                "right": "Environmental protection and ecological conservation"
              },
              {
                "native": "Nsogbu enweghị ọrụ n'etiti ndị ntorobịa",
                "english": "Youth unemployment challenges and solutions",
                "left": "Nsogbu enweghị ọrụ n'etiti ndị ntorobịa",
                "right": "Youth unemployment challenges and solutions"
              },
              {
                "native": "Uru teknụzụ bara n'oge ugbu a",
                "english": "The vital benefits of modern technology",
                "left": "Uru teknụzụ bara n'oge ugbu a",
                "right": "The vital benefits of modern technology"
              },
              {
                "native": "Ịdị n'otu nke obodo anyị",
                "english": "Unity and peacebuilding in our homeland",
                "left": "Ịdị n'otu nke obodo anyị",
                "right": "Unity and peacebuilding in our homeland"
              }
            ]
          },
          {
            "id": "ig-u12-l1-q13",
            "type": "fill_blank",
            "sentence": "The core body of an essay between introduction and conclusion is known as '___ edemede'.",
            "missingWord": "Isi",
            "options": [
              "Isi",
              "Ọnụ",
              "Ụkwụ",
              "Aka"
            ],
            "correctAnswer": "Isi",
            "explanation": "'Isi edemede' denotes the body paragraphs carrying the main substantive points."
          },
          {
            "id": "ig-u12-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the formal letter title: 'Akwụkwọ Ozi Maka Ntinye Akwụkwọ Ọrụ' (Application Letter for Employment):",
            "tokens": [
              "Akwụkwọ",
              "Ozi",
              "Maka",
              "Ntinye",
              "Akwụkwọ",
              "Ọrụ"
            ],
            "correctTokens": [
              "Akwụkwọ",
              "Ozi",
              "Maka",
              "Ntinye",
              "Akwụkwọ",
              "Ọrụ"
            ]
          },
          {
            "id": "ig-u12-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is an informal letter written to a family member called in Igbo?",
            "options": [
              "Akwụkwọ ozi nkeonwe / enyi",
              "Akwụkwọ ozi azụmahịa",
              "Akwụkwọ ozi ọrụ",
              "Iwu"
            ],
            "correctAnswer": "Akwụkwọ ozi nkeonwe / enyi",
            "explanation": "'Akwụkwọ ozi nkeonwe' or 'akwụkwọ ozi enyi' is a personal/informal letter."
          },
          {
            "id": "ig-u12-l1-q16",
            "type": "audio_listen",
            "phrase": "Ana m ede akwụkwọ ozi a iji gwa gị banyere ezumike m",
            "prompt": "Listen to the letter opening. What is the writer's stated purpose?",
            "options": [
              "I am writing this letter to tell you about my holiday / vacation",
              "I am demanding a refund of my debt",
              "I am informing you of my wedding date",
              "I cannot visit you next month"
            ],
            "correctAnswer": "I am writing this letter to tell you about my holiday / vacation",
            "explanation": "'Ezumike' means holiday / vacation / rest."
          },
          {
            "id": "ig-u12-l1-q17",
            "type": "multiple_choice",
            "prompt": "In a formal debate (arụmụka), what is the speaker who opposes the motion called?",
            "options": [
              "Onye na-emegide arụmụka",
              "Onye na-akwado arụmụka",
              "Onyeisi oche",
              "Onyeikpe"
            ],
            "correctAnswer": "Onye na-emegide arụmụka",
            "explanation": "'Onye na-emegide arụmụka' is the opponent/opposer of the debate motion."
          },
          {
            "id": "ig-u12-l1-q18",
            "type": "fill_blank",
            "sentence": "When opening a speech at a formal gathering, one addresses the chairman: 'Onyeisi ___ na ndị ọbịa' (Mr. Chairman and esteemed guests).",
            "missingWord": "oche",
            "options": [
              "oche",
              "ụlọ",
              "akwụkwọ",
              "ahịa"
            ],
            "correctAnswer": "oche",
            "explanation": "'Onyeisi oche' literally means 'head of the chair' (Chairman)."
          },
          {
            "id": "ig-u12-l1-q19",
            "type": "multiple_choice",
            "prompt": "What rhetorical function does 'Nke a na-egosi na...' serve in an expository essay?",
            "options": [
              "Presenting evidence: 'This demonstrates/shows that...'",
              "Expressing total doubt",
              "Apologizing to the reader",
              "Ending the paragraph without explanation"
            ],
            "correctAnswer": "Presenting evidence: 'This demonstrates/shows that...'",
            "explanation": "'Nke a na-egosi na...' connects empirical evidence with the thesis statement."
          },
          {
            "id": "ig-u12-l1-q20",
            "type": "matching",
            "prompt": "Match stylistic debate expressions:",
            "pairs": [
              {
                "native": "A na m akwado arụmụka a",
                "english": "I stand firmly in support of this motion",
                "left": "A na m akwado arụmụka a",
                "right": "I stand firmly in support of this motion"
              },
              {
                "native": "Ndị ọkaikpe a na-akwanyere ùgwù",
                "english": "Respected and honorable panel of judges",
                "left": "Ndị ọkaikpe a na-akwanyere ùgwù",
                "right": "Respected and honorable panel of judges"
              },
              {
                "native": "Onye na-edebe oge",
                "english": "Accurate timekeeper",
                "left": "Onye na-edebe oge",
                "right": "Onye na-edebe oge"
              },
              {
                "native": "Ọhaneze nọ ebe a",
                "english": "The entire distinguished audience gathered here",
                "left": "Ọhaneze nọ ebe a",
                "right": "The entire distinguished audience gathered here"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u12-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is an argumentative / debate essay called in Igbo language curriculum?",
        "options": [
          "Edemede arụmụka",
          "Edemede akụkọ",
          "Edemede nkọwa",
          "Edemede uri"
        ],
        "correctAnswer": "Edemede arụmụka",
        "explanation": "'Edemede arụmụka' (or edemede arụmarụ) is an argumentative or debate essay."
      },
      {
        "id": "ig-u12-l1-q2",
        "type": "matching",
        "prompt": "Match Igbo essay types with their definitions:",
        "pairs": [
          {
            "native": "Edemede akụkọ",
            "english": "Narrative essay (storytelling / events)",
            "left": "Edemede akụkọ",
            "right": "Narrative essay (storytelling / events)"
          },
          {
            "native": "Edemede nkọwa",
            "english": "Expository essay (explaining a process/phenomenon)",
            "left": "Edemede nkọwa",
            "right": "Expository essay (explaining a process/phenomenon)"
          },
          {
            "native": "Edemede arụmụka",
            "english": "Argumentative / Persuasive debate essay",
            "left": "Edemede arụmụka",
            "right": "Argumentative / Persuasive debate essay"
          },
          {
            "native": "Edemede nkọwasị",
            "english": "Descriptive essay (vivid imagery of person/place)",
            "left": "Edemede nkọwasị",
            "right": "Descriptive essay (vivid imagery of person/place)"
          }
        ]
      },
      {
        "id": "ig-u12-l1-q3",
        "type": "fill_blank",
        "sentence": "The introductory paragraph of an essay is called '___' in Igbo literary writing.",
        "missingWord": "Mbido",
        "options": [
          "Mbido",
          "Mmechi",
          "Isiokwu",
          "Akụkọ"
        ],
        "correctAnswer": "Mbido",
        "explanation": "'Mbido' (the beginning) is the introductory paragraph of an essay."
      },
      {
        "id": "ig-u12-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the essay title: 'Uru Ọrụ Ugbo Bara n\\'Obodo Anyị' (The Benefits of Agriculture in Our Community):",
        "tokens": [
          "Uru",
          "Ọrụ",
          "Ugbo",
          "Bara",
          "n'Obodo",
          "Anyị"
        ],
        "correctTokens": [
          "Uru",
          "Ọrụ",
          "Ugbo",
          "Bara",
          "n'Obodo",
          "Anyị"
        ]
      },
      {
        "id": "ig-u12-l1-q5",
        "type": "audio_listen",
        "phrase": "Ezi enyi m na-akwanyere m ùgwù",
        "prompt": "Listen to the informal letter salutation. Who is being addressed?",
        "options": [
          "My dear friend whom I hold in high respect",
          "The village king",
          "My school principal",
          "My younger brother"
        ],
        "correctAnswer": "My dear friend whom I hold in high respect",
        "explanation": "'Ezi enyi m...' is a warm, polite salutation used in informal letters to friends."
      },
      {
        "id": "ig-u12-l1-q6",
        "type": "multiple_choice",
        "prompt": "How many addresses does an official / formal business letter (akwụkwọ ozi azụmahịa) contain in Igbo conventions?",
        "options": [
          "Two addresses (Sender's top right, Recipient's top left)",
          "Only one address",
          "Three addresses",
          "No address at all"
        ],
        "correctAnswer": "Two addresses (Sender's top right, Recipient's top left)",
        "explanation": "Formal letters feature two addresses: the writer's address on the top right, and the receiver's address on the top left."
      },
      {
        "id": "ig-u12-l1-q7",
        "type": "matching",
        "prompt": "Match components of an Igbo formal letter:",
        "pairs": [
          {
            "native": "Adreesị onye na-ede akwụkwọ",
            "english": "Sender's address (top right corner)",
            "left": "Adreesị onye na-ede akwụkwọ",
            "right": "Sender's address (top right corner)"
          },
          {
            "native": "Ụbọchị ọnwa",
            "english": "Date",
            "left": "Ụbọchị ọnwa",
            "right": "Date"
          },
          {
            "native": "Isiokwu akwụkwọ ozi",
            "english": "Letter subject / Title (capitalized/underlined)",
            "left": "Isiokwu akwụkwọ ozi",
            "right": "Letter subject / Title (capitalized/underlined)"
          },
          {
            "native": "Mmechi na mbinyeaka",
            "english": "Valediction closing and signature",
            "left": "Mmechi na mbinyeaka",
            "right": "Valediction closing and signature"
          }
        ]
      },
      {
        "id": "ig-u12-l1-q8",
        "type": "fill_blank",
        "sentence": "A formal letter signoff equivalent to 'Yours faithfully' is: 'Nke gị nke na-erubere gị ___' (Yours obediently).",
        "missingWord": "isi",
        "options": [
          "isi",
          "aka",
          "anya",
          "ụkwụ"
        ],
        "correctAnswer": "isi",
        "explanation": "'Na-erubere gị isi' literally means 'submitting/obedient to you' (Yours faithfully/obediently)."
      },
      {
        "id": "ig-u12-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the sentence: 'Mmụta akwụkwọ ụmụ nwaanyị dị oke mkpa' (Female education is of paramount importance):",
        "tokens": [
          "Mmụta",
          "akwụkwọ",
          "ụmụ",
          "nwaanyị",
          "dị",
          "oke",
          "mkpa"
        ],
        "correctTokens": [
          "Mmụta",
          "akwụkwọ",
          "ụmụ",
          "nwaanyị",
          "dị",
          "oke",
          "mkpa"
        ]
      },
      {
        "id": "ig-u12-l1-q10",
        "type": "multiple_choice",
        "prompt": "What is the concluding paragraph of an essay called in Igbo?",
        "options": [
          "Mmechi",
          "Mbido",
          "Isi edemede",
          "Ihe ngosi"
        ],
        "correctAnswer": "Mmechi",
        "explanation": "'Mmechi' (closing/conclusion) summarizes and wraps up the essay arguments."
      },
      {
        "id": "ig-u12-l1-q11",
        "type": "audio_listen",
        "phrase": "N'ikpeazụ, a na m agba gọọmenti ume ka ha wuo ụlọ ọgwụ",
        "prompt": "Listen to the concluding plea. What is the writer urging?",
        "options": [
          "In conclusion, I urge the government to build a hospital",
          "The government should build more markets",
          "Doctors should travel abroad",
          "Citizens should pay higher taxes"
        ],
        "correctAnswer": "In conclusion, I urge the government to build a hospital",
        "explanation": "'A na m agba gọọmenti ume...' = I urge the government to build a hospital (ụlọ ọgwụ)."
      },
      {
        "id": "ig-u12-l1-q12",
        "type": "matching",
        "prompt": "Match contemporary essay topics in Igbo:",
        "pairs": [
          {
            "native": "Nchekwa gburugburu ebe obibi",
            "english": "Environmental protection and ecological conservation",
            "left": "Nchekwa gburugburu ebe obibi",
            "right": "Environmental protection and ecological conservation"
          },
          {
            "native": "Nsogbu enweghị ọrụ n'etiti ndị ntorobịa",
            "english": "Youth unemployment challenges and solutions",
            "left": "Nsogbu enweghị ọrụ n'etiti ndị ntorobịa",
            "right": "Youth unemployment challenges and solutions"
          },
          {
            "native": "Uru teknụzụ bara n'oge ugbu a",
            "english": "The vital benefits of modern technology",
            "left": "Uru teknụzụ bara n'oge ugbu a",
            "right": "The vital benefits of modern technology"
          },
          {
            "native": "Ịdị n'otu nke obodo anyị",
            "english": "Unity and peacebuilding in our homeland",
            "left": "Ịdị n'otu nke obodo anyị",
            "right": "Unity and peacebuilding in our homeland"
          }
        ]
      },
      {
        "id": "ig-u12-l1-q13",
        "type": "fill_blank",
        "sentence": "The core body of an essay between introduction and conclusion is known as '___ edemede'.",
        "missingWord": "Isi",
        "options": [
          "Isi",
          "Ọnụ",
          "Ụkwụ",
          "Aka"
        ],
        "correctAnswer": "Isi",
        "explanation": "'Isi edemede' denotes the body paragraphs carrying the main substantive points."
      },
      {
        "id": "ig-u12-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the formal letter title: 'Akwụkwọ Ozi Maka Ntinye Akwụkwọ Ọrụ' (Application Letter for Employment):",
        "tokens": [
          "Akwụkwọ",
          "Ozi",
          "Maka",
          "Ntinye",
          "Akwụkwọ",
          "Ọrụ"
        ],
        "correctTokens": [
          "Akwụkwọ",
          "Ozi",
          "Maka",
          "Ntinye",
          "Akwụkwọ",
          "Ọrụ"
        ]
      },
      {
        "id": "ig-u12-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is an informal letter written to a family member called in Igbo?",
        "options": [
          "Akwụkwọ ozi nkeonwe / enyi",
          "Akwụkwọ ozi azụmahịa",
          "Akwụkwọ ozi ọrụ",
          "Iwu"
        ],
        "correctAnswer": "Akwụkwọ ozi nkeonwe / enyi",
        "explanation": "'Akwụkwọ ozi nkeonwe' or 'akwụkwọ ozi enyi' is a personal/informal letter."
      },
      {
        "id": "ig-u12-l1-q16",
        "type": "audio_listen",
        "phrase": "Ana m ede akwụkwọ ozi a iji gwa gị banyere ezumike m",
        "prompt": "Listen to the letter opening. What is the writer's stated purpose?",
        "options": [
          "I am writing this letter to tell you about my holiday / vacation",
          "I am demanding a refund of my debt",
          "I am informing you of my wedding date",
          "I cannot visit you next month"
        ],
        "correctAnswer": "I am writing this letter to tell you about my holiday / vacation",
        "explanation": "'Ezumike' means holiday / vacation / rest."
      },
      {
        "id": "ig-u12-l1-q17",
        "type": "multiple_choice",
        "prompt": "In a formal debate (arụmụka), what is the speaker who opposes the motion called?",
        "options": [
          "Onye na-emegide arụmụka",
          "Onye na-akwado arụmụka",
          "Onyeisi oche",
          "Onyeikpe"
        ],
        "correctAnswer": "Onye na-emegide arụmụka",
        "explanation": "'Onye na-emegide arụmụka' is the opponent/opposer of the debate motion."
      },
      {
        "id": "ig-u12-l1-q18",
        "type": "fill_blank",
        "sentence": "When opening a speech at a formal gathering, one addresses the chairman: 'Onyeisi ___ na ndị ọbịa' (Mr. Chairman and esteemed guests).",
        "missingWord": "oche",
        "options": [
          "oche",
          "ụlọ",
          "akwụkwọ",
          "ahịa"
        ],
        "correctAnswer": "oche",
        "explanation": "'Onyeisi oche' literally means 'head of the chair' (Chairman)."
      },
      {
        "id": "ig-u12-l1-q19",
        "type": "multiple_choice",
        "prompt": "What rhetorical function does 'Nke a na-egosi na...' serve in an expository essay?",
        "options": [
          "Presenting evidence: 'This demonstrates/shows that...'",
          "Expressing total doubt",
          "Apologizing to the reader",
          "Ending the paragraph without explanation"
        ],
        "correctAnswer": "Presenting evidence: 'This demonstrates/shows that...'",
        "explanation": "'Nke a na-egosi na...' connects empirical evidence with the thesis statement."
      },
      {
        "id": "ig-u12-l1-q20",
        "type": "matching",
        "prompt": "Match stylistic debate expressions:",
        "pairs": [
          {
            "native": "A na m akwado arụmụka a",
            "english": "I stand firmly in support of this motion",
            "left": "A na m akwado arụmụka a",
            "right": "I stand firmly in support of this motion"
          },
          {
            "native": "Ndị ọkaikpe a na-akwanyere ùgwù",
            "english": "Respected and honorable panel of judges",
            "left": "Ndị ọkaikpe a na-akwanyere ùgwù",
            "right": "Respected and honorable panel of judges"
          },
          {
            "native": "Onye na-edebe oge",
            "english": "Accurate timekeeper",
            "left": "Onye na-edebe oge",
            "right": "Onye na-edebe oge"
          },
          {
            "native": "Ọhaneze nọ ebe a",
            "english": "The entire distinguished audience gathered here",
            "left": "Ọhaneze nọ ebe a",
            "right": "The entire distinguished audience gathered here"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-13",
    "unitId": "ig-unit-13",
    "unitNumber": 13,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 13: Customs and Traditional Institutions (Omenala na Emume)",
    "subtitle": "Rites of passage (Igu aha, Igbankwụ, Ozo titles), New Yam Festival (Iri Ji), and sacred kola nut communion (Ọjị).",
    "icon": "Award",
    "color": "#059669",
    "lessons": [
      {
        "id": "ig-u13-l1",
        "title": "Lesson 1: Omenala Igbo, Emume Iri Ji na Ọjị (Igbo Heritage & Institutions)",
        "description": "Explore sacred rites of passage, title-taking (Ọzọ/Ichie), New Yam agricultural festivals (Iri Ji), and kola nut rituals (Iwa ọjị).",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u13-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the famous philosophical aphorism associated with the sacred kola nut (Ọjị) in Igbo culture?",
            "options": [
              "Onye wetara ọjị, wetara ndụ (He who brings kola brings life)",
              "Ọjị bụ nri maka ndị okenye naanị",
              "A naghị ata ọjị n'abalị",
              "Ọjị dị ilu karịa ose"
            ],
            "correctAnswer": "Onye wetara ọjị, wetara ndụ (He who brings kola brings life)",
            "explanation": "'Onye wetara ọjị, wetara ndụ' (He who brings kola nut brings life) is the cornerstone hospitality maxim of Igbo civilisation."
          },
          {
            "id": "ig-u13-l1-q2",
            "type": "matching",
            "prompt": "Match the stages of the sacred Igbo kola nut communion:",
            "pairs": [
              {
                "native": "Iche ọjị",
                "english": "Presentation of kola nut to the guest",
                "left": "Iche ọjị",
                "right": "Presentation of kola nut to the guest"
              },
              {
                "native": "Igo ọjị",
                "english": "Invoking prayers, blessings, and peace over the kola",
                "left": "Igo ọjị",
                "right": "Invoking prayers, blessings, and peace over the kola"
              },
              {
                "native": "Iwa ọjị",
                "english": "Breaking the kola into lobes according to seniority",
                "left": "Iwa ọjị",
                "right": "Breaking the kola into lobes according to seniority"
              },
              {
                "native": "Iri ọjị",
                "english": "Communal eating and sharing of kola with alligator pepper",
                "left": "Iri ọjị",
                "right": "Communal eating and sharing of kola with alligator pepper"
              }
            ]
          },
          {
            "id": "ig-u13-l1-q3",
            "type": "fill_blank",
            "sentence": "The annual agricultural festival celebrating the harvest of the king of crops (Ji) is known as '___ Ji ọhụrụ'.",
            "missingWord": "Iri",
            "options": [
              "Iri",
              "Igu",
              "Igba",
              "Ichi"
            ],
            "correctAnswer": "Iri",
            "explanation": "'Iri Ji ọhụrụ' or 'Iwa Ji' is the sacred New Yam Festival celebrated across Igboland."
          },
          {
            "id": "ig-u13-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words of the blessing: 'Egbe bere ugo bere, nke si ibe ya ebela, nku kwaa ya' (Let the kite perch, let the eagle perch; whichever denies the other, let its wing break):",
            "tokens": [
              "Egbe",
              "bere",
              "ugo",
              "bere,",
              "nke",
              "si",
              "ibe",
              "ya",
              "ebela,",
              "nku",
              "kwaa",
              "ya"
            ],
            "correctTokens": [
              "Egbe",
              "bere",
              "ugo",
              "bere,",
              "nke",
              "si",
              "ibe",
              "ya",
              "ebela,",
              "nku",
              "kwaa",
              "ya"
            ]
          },
          {
            "id": "ig-u13-l1-q5",
            "type": "audio_listen",
            "phrase": "Igbankwụ nwaanyị bụ emume agbamakwụkwọ ọdịnala",
            "prompt": "Listen to the custom description. What is 'Igbankwụ'?",
            "options": [
              "The traditional Igbo wine-carrying wedding ceremony",
              "The initiation into manhood",
              "The coronation of a monarch",
              "The funeral of an elder"
            ],
            "correctAnswer": "The traditional Igbo wine-carrying wedding ceremony",
            "explanation": "'Igbankwụ nwaanyị' is the definitive traditional marriage rite where the bride carries palm wine to identify her groom."
          },
          {
            "id": "ig-u13-l1-q6",
            "type": "multiple_choice",
            "prompt": "What prestigious title represents the zenith of moral character, integrity, and social leadership in traditional Igbo society?",
            "options": [
              "Ọzọ / Nze na Ọzọ",
              "Onye uwe ojii",
              "Dọkịta",
              "Onye ahịa"
            ],
            "correctAnswer": "Ọzọ / Nze na Ọzọ",
            "explanation": "The Ọzọ title is a sacred institution conferring aristocratic prestige, strict dedication to truth, and an oath never to tell a lie."
          },
          {
            "id": "ig-u13-l1-q7",
            "type": "matching",
            "prompt": "Match Igbo social and lineage institutions:",
            "pairs": [
              {
                "native": "Ụmụnna",
                "english": "Patrilineal kinsmen / Clan brotherhood",
                "left": "Ụmụnna",
                "right": "Patrilineal kinsmen / Clan brotherhood"
              },
              {
                "native": "Ụmụada",
                "english": "Daughters of the lineage (powerful arbiters of peace)",
                "left": "Ụmụada",
                "right": "Daughters of the lineage (powerful arbiters of peace)"
              },
              {
                "native": "Ndị Nze na Ọzọ",
                "english": "Council of titled elders and moral guardians",
                "left": "Ndị Nze na Ọzọ",
                "right": "Council of titled elders and moral guardians"
              },
              {
                "native": "Ọgbọ / Ụke",
                "english": "Age grade society responsible for civic projects",
                "left": "Ọgbọ / Ụke",
                "right": "Age grade society responsible for civic projects"
              }
            ]
          },
          {
            "id": "ig-u13-l1-q8",
            "type": "fill_blank",
            "sentence": "The naming ceremony performed for a newborn child on the 7th, 8th, or 12th day is called '___ aha'.",
            "missingWord": "Ịgụ",
            "options": [
              "Ịgụ",
              "Iri",
              "Ichi",
              "Ịgba"
            ],
            "correctAnswer": "Ịgụ",
            "explanation": "'Ịgụ aha' (or 'Iku nwa') is the traditional naming ceremony."
          },
          {
            "id": "ig-u13-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Ji bụ eze ihe ubi' (Yam is the king of farm crops):",
            "tokens": [
              "Ji",
              "bụ",
              "eze",
              "ihe",
              "ubi"
            ],
            "correctTokens": [
              "Ji",
              "bụ",
              "eze",
              "ihe",
              "ubi"
            ]
          },
          {
            "id": "ig-u13-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does the 4-lobed kola nut (Ọjị gbara mkpụrụ anọ) symbolize when broken in ritual blessing?",
            "options": [
              "It represents the 4 sacred market days (Eke, Orie, Afọ, Nkwọ) and brings complete balance and peace",
              "It brings bad luck to the household",
              "It signifies that rain will fall",
              "It must be thrown into the bush"
            ],
            "correctAnswer": "It represents the 4 sacred market days (Eke, Orie, Afọ, Nkwọ) and brings complete balance and peace",
            "explanation": "A four-cotyledon kola corresponds perfectly to the four cosmological market days, symbolizing universal harmony."
          },
          {
            "id": "ig-u13-l1-q11",
            "type": "audio_listen",
            "phrase": "Onye na-eme omenala, omenala na-echebe ya",
            "prompt": "Listen to the cultural maxim. What does it state?",
            "options": [
              "Whoever upholds tradition and righteous custom, the tradition protects them",
              "Customs must be abandoned for foreign ways",
              "Traditions only belong to old people",
              "Never marry outside your home village"
            ],
            "correctAnswer": "Whoever upholds tradition and righteous custom, the tradition protects them",
            "explanation": "This principle affirms that moral fidelity to ancestral ethics ('Omenala') serves as a communal shield."
          },
          {
            "id": "ig-u13-l1-q12",
            "type": "matching",
            "prompt": "Match traditional regalia and symbols of authority:",
            "pairs": [
              {
                "native": "Ọdụ enyi",
                "english": "Elephant tusk horn (symbol of wealth and Ọzọ title)",
                "left": "Ọdụ enyi",
                "right": "Elephant tusk horn (symbol of wealth and Ọzọ title)"
              },
              {
                "native": "Okpu nchawa / Okpu mmee",
                "english": "Red cap of chieftaincy / aristocracy",
                "left": "Okpu nchawa / Okpu mmee",
                "right": "Red cap of chieftaincy / aristocracy"
              },
              {
                "native": "Nzu",
                "english": "Sacred white clay of purity, peace, and consecration",
                "left": "Nzu",
                "right": "Sacred white clay of purity, peace, and consecration"
              },
              {
                "native": "Ọfọ",
                "english": "Sacred staff of authority, truth, and cosmic justice",
                "left": "Ọfọ",
                "right": "Sacred staff of authority, truth, and cosmic justice"
              }
            ]
          },
          {
            "id": "ig-u13-l1-q13",
            "type": "fill_blank",
            "sentence": "The sacred staff of ancestral truth and moral justice held by clan patriarchs is called '___'.",
            "missingWord": "Ọfọ",
            "options": [
              "Ọfọ",
              "Ogu",
              "Eke",
              "Nzu"
            ],
            "correctAnswer": "Ọfọ",
            "explanation": "'Ọfọ' is the sacred emblem of authority, truth, and justice in Igbo philosophy."
          },
          {
            "id": "ig-u13-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Agbamakwụkwọ na-eweta ịdị n\\'otu n\\'etiti ezinụlọ abụọ' (Marriage brings unity between two families):",
            "tokens": [
              "Agbamakwụkwọ",
              "na-eweta",
              "ịdị",
              "n'otu",
              "n'etiti",
              "ezinụlọ",
              "abụọ"
            ],
            "correctTokens": [
              "Agbamakwụkwọ",
              "na-eweta",
              "ịdị",
              "n'otu",
              "n'etiti",
              "ezinụlọ",
              "abụọ"
            ]
          },
          {
            "id": "ig-u13-l1-q15",
            "type": "multiple_choice",
            "prompt": "What is 'Ichi' in pre-colonial Igbo history?",
            "options": [
              "Traditional facial scarification conferring noble aristocracy and courage",
              "A type of fishing boat",
              "A secret society for youths",
              "A wooden cooking pestle"
            ],
            "correctAnswer": "Traditional facial scarification conferring noble aristocracy and courage",
            "explanation": "'Ichi' marks were sacred geometric facial scarifications borne by Ọzọ aristocrats and leaders of society."
          },
          {
            "id": "ig-u13-l1-q16",
            "type": "audio_listen",
            "phrase": "Ụmụada nwere oke ikike n'idozi esemokwu",
            "prompt": "Listen to the role of women. What authority do Ụmụada possess?",
            "options": [
              "Ụmụada possess immense authority in settling disputes and peacemaking",
              "Ụmụada only prepare food at funerals",
              "Ụmụada must not speak in public meetings",
              "Ụmụada manage all farm yams"
            ],
            "correctAnswer": "Ụmụada possess immense authority in settling disputes and peacemaking",
            "explanation": "Ụmụada (lineage daughters) are supreme arbiters of peace and moral conduct across Igbo communities."
          },
          {
            "id": "ig-u13-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is 'Ibu mmanya' during marriage proceedings?",
            "options": [
              "Wine-carrying to the bride's family for inquiry and formal consent",
              "A drinking competition",
              "Planting palm trees",
              "Selling wine at the market"
            ],
            "correctAnswer": "Wine-carrying to the bride's family for inquiry and formal consent",
            "explanation": "'Ibu mmanya' (carrying wine) denotes the formal introductory visit to request a daughter's hand in marriage."
          },
          {
            "id": "ig-u13-l1-q18",
            "type": "fill_blank",
            "sentence": "The traditional masquerade festival connecting the living with ancestral spirits is known as 'Emume ___'.",
            "missingWord": "Mmanwụ",
            "options": [
              "Mmanwụ",
              "Ji",
              "Ọjị",
              "Ọzọ"
            ],
            "correctAnswer": "Mmanwụ",
            "explanation": "'Mmanwụ' is the sacred ancestral masquerade institution in Igbo culture."
          },
          {
            "id": "ig-u13-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does the 3-lobed kola nut (Ọjị gbara mkpụrụ atọ) signify in Igbo divination and tradition?",
            "options": [
              "Ọjị ike / Ọjị dike (Kola of the brave / warriors)",
              "An omen of famine",
              "Kola of children",
              "Kola meant only for women"
            ],
            "correctAnswer": "Ọjị ike / Ọjị dike (Kola of the brave / warriors)",
            "explanation": "A three-lobed kola nut is revered as 'Ọjị Ike' or 'Ọjị Dike' (the kola of valor and warriors)."
          },
          {
            "id": "ig-u13-l1-q20",
            "type": "matching",
            "prompt": "Match core Igbo philosophical concepts with definitions:",
            "pairs": [
              {
                "native": "Chi",
                "english": "Personal divine spark / Spiritual guardian",
                "left": "Chi",
                "right": "Personal divine spark / Spiritual guardian"
              },
              {
                "native": "Ala / Ani",
                "english": "The Earth goddess of morality, law, and fertility",
                "left": "Ala / Ani",
                "right": "The Earth goddess of morality, law, and fertility"
              },
              {
                "native": "Ikenga",
                "english": "Shrine and symbol of individual strength, right hand, and achievement",
                "left": "Ikenga",
                "right": "Shrine and symbol of individual strength, right hand, and achievement"
              },
              {
                "native": "Chukwu / Chineke",
                "english": "The Supreme Creator God Almighty",
                "left": "Chukwu / Chineke",
                "right": "The Supreme Creator God Almighty"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u13-l1-q1",
        "type": "multiple_choice",
        "prompt": "What is the famous philosophical aphorism associated with the sacred kola nut (Ọjị) in Igbo culture?",
        "options": [
          "Onye wetara ọjị, wetara ndụ (He who brings kola brings life)",
          "Ọjị bụ nri maka ndị okenye naanị",
          "A naghị ata ọjị n'abalị",
          "Ọjị dị ilu karịa ose"
        ],
        "correctAnswer": "Onye wetara ọjị, wetara ndụ (He who brings kola brings life)",
        "explanation": "'Onye wetara ọjị, wetara ndụ' (He who brings kola nut brings life) is the cornerstone hospitality maxim of Igbo civilisation."
      },
      {
        "id": "ig-u13-l1-q2",
        "type": "matching",
        "prompt": "Match the stages of the sacred Igbo kola nut communion:",
        "pairs": [
          {
            "native": "Iche ọjị",
            "english": "Presentation of kola nut to the guest",
            "left": "Iche ọjị",
            "right": "Presentation of kola nut to the guest"
          },
          {
            "native": "Igo ọjị",
            "english": "Invoking prayers, blessings, and peace over the kola",
            "left": "Igo ọjị",
            "right": "Invoking prayers, blessings, and peace over the kola"
          },
          {
            "native": "Iwa ọjị",
            "english": "Breaking the kola into lobes according to seniority",
            "left": "Iwa ọjị",
            "right": "Breaking the kola into lobes according to seniority"
          },
          {
            "native": "Iri ọjị",
            "english": "Communal eating and sharing of kola with alligator pepper",
            "left": "Iri ọjị",
            "right": "Communal eating and sharing of kola with alligator pepper"
          }
        ]
      },
      {
        "id": "ig-u13-l1-q3",
        "type": "fill_blank",
        "sentence": "The annual agricultural festival celebrating the harvest of the king of crops (Ji) is known as '___ Ji ọhụrụ'.",
        "missingWord": "Iri",
        "options": [
          "Iri",
          "Igu",
          "Igba",
          "Ichi"
        ],
        "correctAnswer": "Iri",
        "explanation": "'Iri Ji ọhụrụ' or 'Iwa Ji' is the sacred New Yam Festival celebrated across Igboland."
      },
      {
        "id": "ig-u13-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words of the blessing: 'Egbe bere ugo bere, nke si ibe ya ebela, nku kwaa ya' (Let the kite perch, let the eagle perch; whichever denies the other, let its wing break):",
        "tokens": [
          "Egbe",
          "bere",
          "ugo",
          "bere,",
          "nke",
          "si",
          "ibe",
          "ya",
          "ebela,",
          "nku",
          "kwaa",
          "ya"
        ],
        "correctTokens": [
          "Egbe",
          "bere",
          "ugo",
          "bere,",
          "nke",
          "si",
          "ibe",
          "ya",
          "ebela,",
          "nku",
          "kwaa",
          "ya"
        ]
      },
      {
        "id": "ig-u13-l1-q5",
        "type": "audio_listen",
        "phrase": "Igbankwụ nwaanyị bụ emume agbamakwụkwọ ọdịnala",
        "prompt": "Listen to the custom description. What is 'Igbankwụ'?",
        "options": [
          "The traditional Igbo wine-carrying wedding ceremony",
          "The initiation into manhood",
          "The coronation of a monarch",
          "The funeral of an elder"
        ],
        "correctAnswer": "The traditional Igbo wine-carrying wedding ceremony",
        "explanation": "'Igbankwụ nwaanyị' is the definitive traditional marriage rite where the bride carries palm wine to identify her groom."
      },
      {
        "id": "ig-u13-l1-q6",
        "type": "multiple_choice",
        "prompt": "What prestigious title represents the zenith of moral character, integrity, and social leadership in traditional Igbo society?",
        "options": [
          "Ọzọ / Nze na Ọzọ",
          "Onye uwe ojii",
          "Dọkịta",
          "Onye ahịa"
        ],
        "correctAnswer": "Ọzọ / Nze na Ọzọ",
        "explanation": "The Ọzọ title is a sacred institution conferring aristocratic prestige, strict dedication to truth, and an oath never to tell a lie."
      },
      {
        "id": "ig-u13-l1-q7",
        "type": "matching",
        "prompt": "Match Igbo social and lineage institutions:",
        "pairs": [
          {
            "native": "Ụmụnna",
            "english": "Patrilineal kinsmen / Clan brotherhood",
            "left": "Ụmụnna",
            "right": "Patrilineal kinsmen / Clan brotherhood"
          },
          {
            "native": "Ụmụada",
            "english": "Daughters of the lineage (powerful arbiters of peace)",
            "left": "Ụmụada",
            "right": "Daughters of the lineage (powerful arbiters of peace)"
          },
          {
            "native": "Ndị Nze na Ọzọ",
            "english": "Council of titled elders and moral guardians",
            "left": "Ndị Nze na Ọzọ",
            "right": "Council of titled elders and moral guardians"
          },
          {
            "native": "Ọgbọ / Ụke",
            "english": "Age grade society responsible for civic projects",
            "left": "Ọgbọ / Ụke",
            "right": "Age grade society responsible for civic projects"
          }
        ]
      },
      {
        "id": "ig-u13-l1-q8",
        "type": "fill_blank",
        "sentence": "The naming ceremony performed for a newborn child on the 7th, 8th, or 12th day is called '___ aha'.",
        "missingWord": "Ịgụ",
        "options": [
          "Ịgụ",
          "Iri",
          "Ichi",
          "Ịgba"
        ],
        "correctAnswer": "Ịgụ",
        "explanation": "'Ịgụ aha' (or 'Iku nwa') is the traditional naming ceremony."
      },
      {
        "id": "ig-u13-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Ji bụ eze ihe ubi' (Yam is the king of farm crops):",
        "tokens": [
          "Ji",
          "bụ",
          "eze",
          "ihe",
          "ubi"
        ],
        "correctTokens": [
          "Ji",
          "bụ",
          "eze",
          "ihe",
          "ubi"
        ]
      },
      {
        "id": "ig-u13-l1-q10",
        "type": "multiple_choice",
        "prompt": "What does the 4-lobed kola nut (Ọjị gbara mkpụrụ anọ) symbolize when broken in ritual blessing?",
        "options": [
          "It represents the 4 sacred market days (Eke, Orie, Afọ, Nkwọ) and brings complete balance and peace",
          "It brings bad luck to the household",
          "It signifies that rain will fall",
          "It must be thrown into the bush"
        ],
        "correctAnswer": "It represents the 4 sacred market days (Eke, Orie, Afọ, Nkwọ) and brings complete balance and peace",
        "explanation": "A four-cotyledon kola corresponds perfectly to the four cosmological market days, symbolizing universal harmony."
      },
      {
        "id": "ig-u13-l1-q11",
        "type": "audio_listen",
        "phrase": "Onye na-eme omenala, omenala na-echebe ya",
        "prompt": "Listen to the cultural maxim. What does it state?",
        "options": [
          "Whoever upholds tradition and righteous custom, the tradition protects them",
          "Customs must be abandoned for foreign ways",
          "Traditions only belong to old people",
          "Never marry outside your home village"
        ],
        "correctAnswer": "Whoever upholds tradition and righteous custom, the tradition protects them",
        "explanation": "This principle affirms that moral fidelity to ancestral ethics ('Omenala') serves as a communal shield."
      },
      {
        "id": "ig-u13-l1-q12",
        "type": "matching",
        "prompt": "Match traditional regalia and symbols of authority:",
        "pairs": [
          {
            "native": "Ọdụ enyi",
            "english": "Elephant tusk horn (symbol of wealth and Ọzọ title)",
            "left": "Ọdụ enyi",
            "right": "Elephant tusk horn (symbol of wealth and Ọzọ title)"
          },
          {
            "native": "Okpu nchawa / Okpu mmee",
            "english": "Red cap of chieftaincy / aristocracy",
            "left": "Okpu nchawa / Okpu mmee",
            "right": "Red cap of chieftaincy / aristocracy"
          },
          {
            "native": "Nzu",
            "english": "Sacred white clay of purity, peace, and consecration",
            "left": "Nzu",
            "right": "Sacred white clay of purity, peace, and consecration"
          },
          {
            "native": "Ọfọ",
            "english": "Sacred staff of authority, truth, and cosmic justice",
            "left": "Ọfọ",
            "right": "Sacred staff of authority, truth, and cosmic justice"
          }
        ]
      },
      {
        "id": "ig-u13-l1-q13",
        "type": "fill_blank",
        "sentence": "The sacred staff of ancestral truth and moral justice held by clan patriarchs is called '___'.",
        "missingWord": "Ọfọ",
        "options": [
          "Ọfọ",
          "Ogu",
          "Eke",
          "Nzu"
        ],
        "correctAnswer": "Ọfọ",
        "explanation": "'Ọfọ' is the sacred emblem of authority, truth, and justice in Igbo philosophy."
      },
      {
        "id": "ig-u13-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Agbamakwụkwọ na-eweta ịdị n\\'otu n\\'etiti ezinụlọ abụọ' (Marriage brings unity between two families):",
        "tokens": [
          "Agbamakwụkwọ",
          "na-eweta",
          "ịdị",
          "n'otu",
          "n'etiti",
          "ezinụlọ",
          "abụọ"
        ],
        "correctTokens": [
          "Agbamakwụkwọ",
          "na-eweta",
          "ịdị",
          "n'otu",
          "n'etiti",
          "ezinụlọ",
          "abụọ"
        ]
      },
      {
        "id": "ig-u13-l1-q15",
        "type": "multiple_choice",
        "prompt": "What is 'Ichi' in pre-colonial Igbo history?",
        "options": [
          "Traditional facial scarification conferring noble aristocracy and courage",
          "A type of fishing boat",
          "A secret society for youths",
          "A wooden cooking pestle"
        ],
        "correctAnswer": "Traditional facial scarification conferring noble aristocracy and courage",
        "explanation": "'Ichi' marks were sacred geometric facial scarifications borne by Ọzọ aristocrats and leaders of society."
      },
      {
        "id": "ig-u13-l1-q16",
        "type": "audio_listen",
        "phrase": "Ụmụada nwere oke ikike n'idozi esemokwu",
        "prompt": "Listen to the role of women. What authority do Ụmụada possess?",
        "options": [
          "Ụmụada possess immense authority in settling disputes and peacemaking",
          "Ụmụada only prepare food at funerals",
          "Ụmụada must not speak in public meetings",
          "Ụmụada manage all farm yams"
        ],
        "correctAnswer": "Ụmụada possess immense authority in settling disputes and peacemaking",
        "explanation": "Ụmụada (lineage daughters) are supreme arbiters of peace and moral conduct across Igbo communities."
      },
      {
        "id": "ig-u13-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is 'Ibu mmanya' during marriage proceedings?",
        "options": [
          "Wine-carrying to the bride's family for inquiry and formal consent",
          "A drinking competition",
          "Planting palm trees",
          "Selling wine at the market"
        ],
        "correctAnswer": "Wine-carrying to the bride's family for inquiry and formal consent",
        "explanation": "'Ibu mmanya' (carrying wine) denotes the formal introductory visit to request a daughter's hand in marriage."
      },
      {
        "id": "ig-u13-l1-q18",
        "type": "fill_blank",
        "sentence": "The traditional masquerade festival connecting the living with ancestral spirits is known as 'Emume ___'.",
        "missingWord": "Mmanwụ",
        "options": [
          "Mmanwụ",
          "Ji",
          "Ọjị",
          "Ọzọ"
        ],
        "correctAnswer": "Mmanwụ",
        "explanation": "'Mmanwụ' is the sacred ancestral masquerade institution in Igbo culture."
      },
      {
        "id": "ig-u13-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does the 3-lobed kola nut (Ọjị gbara mkpụrụ atọ) signify in Igbo divination and tradition?",
        "options": [
          "Ọjị ike / Ọjị dike (Kola of the brave / warriors)",
          "An omen of famine",
          "Kola of children",
          "Kola meant only for women"
        ],
        "correctAnswer": "Ọjị ike / Ọjị dike (Kola of the brave / warriors)",
        "explanation": "A three-lobed kola nut is revered as 'Ọjị Ike' or 'Ọjị Dike' (the kola of valor and warriors)."
      },
      {
        "id": "ig-u13-l1-q20",
        "type": "matching",
        "prompt": "Match core Igbo philosophical concepts with definitions:",
        "pairs": [
          {
            "native": "Chi",
            "english": "Personal divine spark / Spiritual guardian",
            "left": "Chi",
            "right": "Personal divine spark / Spiritual guardian"
          },
          {
            "native": "Ala / Ani",
            "english": "The Earth goddess of morality, law, and fertility",
            "left": "Ala / Ani",
            "right": "The Earth goddess of morality, law, and fertility"
          },
          {
            "native": "Ikenga",
            "english": "Shrine and symbol of individual strength, right hand, and achievement",
            "left": "Ikenga",
            "right": "Shrine and symbol of individual strength, right hand, and achievement"
          },
          {
            "native": "Chukwu / Chineke",
            "english": "The Supreme Creator God Almighty",
            "left": "Chukwu / Chineke",
            "right": "The Supreme Creator God Almighty"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-14",
    "unitId": "ig-unit-14",
    "unitNumber": 14,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 14: Igbo Literature: Prose, Poetry, and Drama (Agụmagụ Igbo)",
    "subtitle": "Classic prose (Omenuko, Ala Bingo), theatrical drama (Ọjaadịlị), oral chants (Abụ ọdịnala), and literary criticism.",
    "icon": "Book",
    "color": "#059669",
    "lessons": [
      {
        "id": "ig-u14-l1",
        "title": "Lesson 1: Agụmagụ Ederede na Agụmagụ Ọdịnala (Prose, Poetry & Theatre)",
        "description": "Analyze seminal literary works like Pita Nwana’s Omenuko, mythological drama (Ọjaadịlị), poetic meters, and heroic chants.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u14-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which classic novel, published in 1933 by Pita Nwana, is celebrated as the very first novel published in the Igbo language?",
            "options": [
              "Omenuko",
              "Ala Bingo",
              "Juochi",
              "Ije Odumodu Jere"
            ],
            "correctAnswer": "Omenuko",
            "explanation": "Pita Nwana's 'Omenuko' (1933) won the International Institute of African Languages and Cultures prize as the pioneer Igbo novel."
          },
          {
            "id": "ig-u14-l1-q2",
            "type": "matching",
            "prompt": "Match landmark Igbo literary works with their authors or genres:",
            "pairs": [
              {
                "native": "Omenuko (1933)",
                "english": "Pita Nwana's foundational tragic-heroic novel",
                "left": "Omenuko (1933)",
                "right": "Pita Nwana's foundational tragic-heroic novel"
              },
              {
                "native": "Ala Bingo",
                "english": "D.N. Achara's allegorical moral adventure tale",
                "left": "Ala Bingo",
                "right": "D.N. Achara's allegorical moral adventure tale"
              },
              {
                "native": "Ọjaadịlị",
                "english": "Legendary drama of the wrestler who challenged spirits",
                "left": "Ọjaadịlị",
                "right": "Legendary drama of the wrestler who challenged spirits"
              },
              {
                "native": "Udo Ka Mma",
                "english": "Tony Ubesie's celebrated social novel",
                "left": "Udo Ka Mma",
                "right": "Tony Ubesie's celebrated social novel"
              }
            ]
          },
          {
            "id": "ig-u14-l1-q3",
            "type": "fill_blank",
            "sentence": "Written literature in Igbo is called 'Agụmagụ ederede', while oral performance literature is termed 'Agụmagụ ___'.",
            "missingWord": "ọnụ / ọdịnala",
            "options": [
              "ọnụ / ọdịnala",
              "akwụkwọ",
              "egwu",
              "ilo"
            ],
            "correctAnswer": "ọnụ / ọdịnala",
            "explanation": "'Agụmagụ ọnụ' or 'agụmagụ ọdịnala' encompasses oral bards, folktales, dirges, and praise chants."
          },
          {
            "id": "ig-u14-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the words: 'Tony Ubesie bụ nnukwu odee akwụkwọ Igbo' (Tony Ubesie was a great Igbo literary writer):",
            "tokens": [
              "Tony",
              "Ubesie",
              "bụ",
              "nnukwu",
              "odee",
              "akwụkwọ",
              "Igbo"
            ],
            "correctTokens": [
              "Tony",
              "Ubesie",
              "bụ",
              "nnukwu",
              "odee",
              "akwụkwọ",
              "Igbo"
            ]
          },
          {
            "id": "ig-u14-l1-q5",
            "type": "audio_listen",
            "phrase": "Ọjaadịlị lụrụ ọgụ ma gbaa ndị mmadụ na ndị mụọ mgba",
            "prompt": "Listen to the dramatic synopsis. What did Ọjaadịlị accomplish before his hubris?",
            "options": [
              "Ọjaadịlị wrestled both humans and defeated spirits in the underworld",
              "He became the king of the sea",
              "He escaped from a burning forest",
              "He refused to fight anyone"
            ],
            "correctAnswer": "Ọjaadịlị wrestled both humans and defeated spirits in the underworld",
            "explanation": "Ọjaadịlị was the undefeated wrestler whose tragic arrogance drove him to fight his own personal Chi."
          },
          {
            "id": "ig-u14-l1-q6",
            "type": "multiple_choice",
            "prompt": "What is theatrical drama called in Igbo literature?",
            "options": [
              "Ejije / Wasan kwaikwayo",
              "Uri",
              "Ilu",
              "Akụkọ ifo"
            ],
            "correctAnswer": "Ejije / Wasan kwaikwayo",
            "explanation": "'Ejije' is the standard Igbo term for drama or a theatrical play."
          },
          {
            "id": "ig-u14-l1-q7",
            "type": "matching",
            "prompt": "Match traditional Igbo musical instruments with literary performance:",
            "pairs": [
              {
                "native": "Ọdụ / Ogene",
                "english": "Iron gong (rhythm keeper in poetry and news)",
                "left": "Ọdụ / Ogene",
                "right": "Iron gong (rhythm keeper in poetry and news)"
              },
              {
                "native": "Ọja",
                "english": "Wooden aerophone flute used to chant warrior praises",
                "left": "Ọja",
                "right": "Wooden aerophone flute used to chant warrior praises"
              },
              {
                "native": "Ekwe",
                "english": "Slit-wooden drum used for proclamation and alerts",
                "left": "Ekwe",
                "right": "Slit-wooden drum used for proclamation and alerts"
              },
              {
                "native": "Ụbọ aka",
                "english": "Thumb piano / Lamellophone for lyrical storytelling",
                "left": "Ụbọ aka",
                "right": "Thumb piano / Lamellophone for lyrical storytelling"
              }
            ]
          },
          {
            "id": "ig-u14-l1-q8",
            "type": "fill_blank",
            "sentence": "Poetry and verses in Igbo literature are termed '___'.",
            "missingWord": "Abụ",
            "options": [
              "Abụ",
              "Ejije",
              "Ilu",
              "Aha"
            ],
            "correctAnswer": "Abụ",
            "explanation": "'Abụ' is poetry / song / hymn."
          },
          {
            "id": "ig-u14-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Onye odee na-akụzi ezi omume' (A writer teaches righteous conduct):",
            "tokens": [
              "Onye",
              "odee",
              "na-akụzi",
              "ezi",
              "omume"
            ],
            "correctTokens": [
              "Onye",
              "odee",
              "na-akụzi",
              "ezi",
              "omume"
            ]
          },
          {
            "id": "ig-u14-l1-q10",
            "type": "multiple_choice",
            "prompt": "What tragic moral flaw does Omenuko commit in Pita Nwana's novel that forces his long exile?",
            "options": [
              "He sold his apprentices and neighbors' children into slavery after losing goods in a river crossing",
              "He burned the village yam barn",
              "He refused to go to war",
              "He insulted the village elders"
            ],
            "correctAnswer": "He sold his apprentices and neighbors' children into slavery after losing goods in a river crossing",
            "explanation": "Omenuko sells his young porters into slavery after his wares sink, sparking a profound lifetime journey of guilt, exile, and atonement."
          },
          {
            "id": "ig-u14-l1-q11",
            "type": "audio_listen",
            "phrase": "Abụ akwa arịrị bụ abụ e ji akwa ozu",
            "prompt": "Listen to the poetic genre description. What is 'Abụ akwa arịrị'?",
            "options": [
              "A funeral dirge / lamentation sung during mourning",
              "A joyous wedding praise chant",
              "A lullaby for putting babies to sleep",
              "A hunting victory song"
            ],
            "correctAnswer": "A funeral dirge / lamentation sung during mourning",
            "explanation": "'Abụ akwa arịrị' is an elegiac dirge or lamentation sung at the death of a revered person."
          },
          {
            "id": "ig-u14-l1-q12",
            "type": "matching",
            "prompt": "Match poetry classifications in Igbo:",
            "pairs": [
              {
                "native": "Abụ otuto",
                "english": "Praise poetry / Panegyric ode",
                "left": "Abụ otuto",
                "right": "Praise poetry / Panegyric ode"
              },
              {
                "native": "Abụ akwa arịrị",
                "english": "Funeral dirge / Elegy / Lamentation",
                "left": "Abụ akwa arịrị",
                "right": "Funeral dirge / Elegy / Lamentation"
              },
              {
                "native": "Abụ nwa",
                "english": "Lullaby for comforting an infant",
                "left": "Abụ nwa",
                "right": "Lullaby for comforting an infant"
              },
              {
                "native": "Abụ agha",
                "english": "War song and valor chant",
                "left": "Abụ agha",
                "right": "War song and valor chant"
              }
            ]
          },
          {
            "id": "ig-u14-l1-q13",
            "type": "fill_blank",
            "sentence": "The flute player who inspires dancers and wrestlers with spirited proverbs plays the '___'.",
            "missingWord": "Ọja",
            "options": [
              "Ọja",
              "Ogene",
              "Ekwe",
              "Igba"
            ],
            "correctAnswer": "Ọja",
            "explanation": "The 'Ọja' (wooden flute) is the soulful acoustic instrument of Igbo oral poetry."
          },
          {
            "id": "ig-u14-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the words: 'Agụmagụ na-egosipụta omenala ndị Igbo' (Literature reflects the culture of the Igbo people):",
            "tokens": [
              "Agụmagụ",
              "na-egosipụta",
              "omenala",
              "ndị",
              "Igbo"
            ],
            "correctTokens": [
              "Agụmagụ",
              "na-egosipụta",
              "omenala",
              "ndị",
              "Igbo"
            ]
          },
          {
            "id": "ig-u14-l1-q15",
            "type": "multiple_choice",
            "prompt": "Which literary device involves repeating the initial consonant sound across successive words (Alliteration)?",
            "options": [
              "Ndakọrịta mgbochiume",
              "Ilu",
              "Akpaalaokwu",
              "Mkpọpụta"
            ],
            "correctAnswer": "Ndakọrịta mgbochiume",
            "explanation": "'Ndakọrịta mgbochiume' is alliteration (the repetition of consonant sounds in poetic lines)."
          },
          {
            "id": "ig-u14-l1-q16",
            "type": "audio_listen",
            "phrase": "Ndị na-eme ejije na-anọ n'elu ikpo okwu",
            "prompt": "Listen to the theatrical description. Where do the actors perform?",
            "options": [
              "On the elevated stage / platform (elu ikpo okwu)",
              "Inside the farm barn",
              "Beside the village stream",
              "Inside the classroom cupboard"
            ],
            "correctAnswer": "On the elevated stage / platform (elu ikpo okwu)",
            "explanation": "'Elu ikpo okwu' is the theatrical stage or podium."
          },
          {
            "id": "ig-u14-l1-q17",
            "type": "multiple_choice",
            "prompt": "What is an antagonist / villain in an Igbo dramatic play called?",
            "options": [
              "Onye na-akpata nsogbu / Onye mgbochi",
              "Onye dike",
              "Onye isi",
              "Odee"
            ],
            "correctAnswer": "Onye na-akpata nsogbu / Onye mgbochi",
            "explanation": "'Onye mgbochi' or 'onye mmegide' is the antagonist opposing the protagonist."
          },
          {
            "id": "ig-u14-l1-q18",
            "type": "fill_blank",
            "sentence": "A stanza or line group in an Igbo poem is termed '___ abụ'.",
            "missingWord": "Nkeji",
            "options": [
              "Nkeji",
              "Isi",
              "Ọnụ",
              "Aka"
            ],
            "correctAnswer": "Nkeji",
            "explanation": "'Nkeji abụ' is a poetic stanza."
          },
          {
            "id": "ig-u14-l1-q19",
            "type": "multiple_choice",
            "prompt": "Who is the legendary protagonist of Tony Ubesie's celebrated novel 'Isi Akwụ Dara n'Ala'?",
            "options": [
              "A tragic drama reflecting the Biafran civil war experience and social upheaval",
              "A story about hunting leopards",
              "A guide to planting cassava",
              "A translation of Shakespeare"
            ],
            "correctAnswer": "A tragic drama reflecting the Biafran civil war experience and social upheaval",
            "explanation": "Tony Ubesie's 'Isi Akwụ Dara n'Ala' is a masterpiece analyzing the emotional and psychological trauma of the Nigerian-Biafran war."
          },
          {
            "id": "ig-u14-l1-q20",
            "type": "matching",
            "prompt": "Match dramatic and poetic analytical terms:",
            "pairs": [
              {
                "native": "Onye dike",
                "english": "Protagonist / Hero",
                "left": "Onye dike",
                "right": "Protagonist / Hero"
              },
              {
                "native": "Atụmatụ okwu",
                "english": "Figures of speech / Metaphorical imagery",
                "left": "Atụmatụ okwu",
                "right": "Figures of speech / Metaphorical imagery"
              },
              {
                "native": "Nchịkọta",
                "english": "Summary / Synopsis of plot",
                "left": "Nchịkọta",
                "right": "Summary / Synopsis of plot"
              },
              {
                "native": "Ọgụgụ aghọta",
                "english": "Reading comprehension and critical analysis",
                "left": "Ọgụgụ aghọta",
                "right": "Reading comprehension and critical analysis"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u14-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which classic novel, published in 1933 by Pita Nwana, is celebrated as the very first novel published in the Igbo language?",
        "options": [
          "Omenuko",
          "Ala Bingo",
          "Juochi",
          "Ije Odumodu Jere"
        ],
        "correctAnswer": "Omenuko",
        "explanation": "Pita Nwana's 'Omenuko' (1933) won the International Institute of African Languages and Cultures prize as the pioneer Igbo novel."
      },
      {
        "id": "ig-u14-l1-q2",
        "type": "matching",
        "prompt": "Match landmark Igbo literary works with their authors or genres:",
        "pairs": [
          {
            "native": "Omenuko (1933)",
            "english": "Pita Nwana's foundational tragic-heroic novel",
            "left": "Omenuko (1933)",
            "right": "Pita Nwana's foundational tragic-heroic novel"
          },
          {
            "native": "Ala Bingo",
            "english": "D.N. Achara's allegorical moral adventure tale",
            "left": "Ala Bingo",
            "right": "D.N. Achara's allegorical moral adventure tale"
          },
          {
            "native": "Ọjaadịlị",
            "english": "Legendary drama of the wrestler who challenged spirits",
            "left": "Ọjaadịlị",
            "right": "Legendary drama of the wrestler who challenged spirits"
          },
          {
            "native": "Udo Ka Mma",
            "english": "Tony Ubesie's celebrated social novel",
            "left": "Udo Ka Mma",
            "right": "Tony Ubesie's celebrated social novel"
          }
        ]
      },
      {
        "id": "ig-u14-l1-q3",
        "type": "fill_blank",
        "sentence": "Written literature in Igbo is called 'Agụmagụ ederede', while oral performance literature is termed 'Agụmagụ ___'.",
        "missingWord": "ọnụ / ọdịnala",
        "options": [
          "ọnụ / ọdịnala",
          "akwụkwọ",
          "egwu",
          "ilo"
        ],
        "correctAnswer": "ọnụ / ọdịnala",
        "explanation": "'Agụmagụ ọnụ' or 'agụmagụ ọdịnala' encompasses oral bards, folktales, dirges, and praise chants."
      },
      {
        "id": "ig-u14-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the words: 'Tony Ubesie bụ nnukwu odee akwụkwọ Igbo' (Tony Ubesie was a great Igbo literary writer):",
        "tokens": [
          "Tony",
          "Ubesie",
          "bụ",
          "nnukwu",
          "odee",
          "akwụkwọ",
          "Igbo"
        ],
        "correctTokens": [
          "Tony",
          "Ubesie",
          "bụ",
          "nnukwu",
          "odee",
          "akwụkwọ",
          "Igbo"
        ]
      },
      {
        "id": "ig-u14-l1-q5",
        "type": "audio_listen",
        "phrase": "Ọjaadịlị lụrụ ọgụ ma gbaa ndị mmadụ na ndị mụọ mgba",
        "prompt": "Listen to the dramatic synopsis. What did Ọjaadịlị accomplish before his hubris?",
        "options": [
          "Ọjaadịlị wrestled both humans and defeated spirits in the underworld",
          "He became the king of the sea",
          "He escaped from a burning forest",
          "He refused to fight anyone"
        ],
        "correctAnswer": "Ọjaadịlị wrestled both humans and defeated spirits in the underworld",
        "explanation": "Ọjaadịlị was the undefeated wrestler whose tragic arrogance drove him to fight his own personal Chi."
      },
      {
        "id": "ig-u14-l1-q6",
        "type": "multiple_choice",
        "prompt": "What is theatrical drama called in Igbo literature?",
        "options": [
          "Ejije / Wasan kwaikwayo",
          "Uri",
          "Ilu",
          "Akụkọ ifo"
        ],
        "correctAnswer": "Ejije / Wasan kwaikwayo",
        "explanation": "'Ejije' is the standard Igbo term for drama or a theatrical play."
      },
      {
        "id": "ig-u14-l1-q7",
        "type": "matching",
        "prompt": "Match traditional Igbo musical instruments with literary performance:",
        "pairs": [
          {
            "native": "Ọdụ / Ogene",
            "english": "Iron gong (rhythm keeper in poetry and news)",
            "left": "Ọdụ / Ogene",
            "right": "Iron gong (rhythm keeper in poetry and news)"
          },
          {
            "native": "Ọja",
            "english": "Wooden aerophone flute used to chant warrior praises",
            "left": "Ọja",
            "right": "Wooden aerophone flute used to chant warrior praises"
          },
          {
            "native": "Ekwe",
            "english": "Slit-wooden drum used for proclamation and alerts",
            "left": "Ekwe",
            "right": "Slit-wooden drum used for proclamation and alerts"
          },
          {
            "native": "Ụbọ aka",
            "english": "Thumb piano / Lamellophone for lyrical storytelling",
            "left": "Ụbọ aka",
            "right": "Thumb piano / Lamellophone for lyrical storytelling"
          }
        ]
      },
      {
        "id": "ig-u14-l1-q8",
        "type": "fill_blank",
        "sentence": "Poetry and verses in Igbo literature are termed '___'.",
        "missingWord": "Abụ",
        "options": [
          "Abụ",
          "Ejije",
          "Ilu",
          "Aha"
        ],
        "correctAnswer": "Abụ",
        "explanation": "'Abụ' is poetry / song / hymn."
      },
      {
        "id": "ig-u14-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Onye odee na-akụzi ezi omume' (A writer teaches righteous conduct):",
        "tokens": [
          "Onye",
          "odee",
          "na-akụzi",
          "ezi",
          "omume"
        ],
        "correctTokens": [
          "Onye",
          "odee",
          "na-akụzi",
          "ezi",
          "omume"
        ]
      },
      {
        "id": "ig-u14-l1-q10",
        "type": "multiple_choice",
        "prompt": "What tragic moral flaw does Omenuko commit in Pita Nwana's novel that forces his long exile?",
        "options": [
          "He sold his apprentices and neighbors' children into slavery after losing goods in a river crossing",
          "He burned the village yam barn",
          "He refused to go to war",
          "He insulted the village elders"
        ],
        "correctAnswer": "He sold his apprentices and neighbors' children into slavery after losing goods in a river crossing",
        "explanation": "Omenuko sells his young porters into slavery after his wares sink, sparking a profound lifetime journey of guilt, exile, and atonement."
      },
      {
        "id": "ig-u14-l1-q11",
        "type": "audio_listen",
        "phrase": "Abụ akwa arịrị bụ abụ e ji akwa ozu",
        "prompt": "Listen to the poetic genre description. What is 'Abụ akwa arịrị'?",
        "options": [
          "A funeral dirge / lamentation sung during mourning",
          "A joyous wedding praise chant",
          "A lullaby for putting babies to sleep",
          "A hunting victory song"
        ],
        "correctAnswer": "A funeral dirge / lamentation sung during mourning",
        "explanation": "'Abụ akwa arịrị' is an elegiac dirge or lamentation sung at the death of a revered person."
      },
      {
        "id": "ig-u14-l1-q12",
        "type": "matching",
        "prompt": "Match poetry classifications in Igbo:",
        "pairs": [
          {
            "native": "Abụ otuto",
            "english": "Praise poetry / Panegyric ode",
            "left": "Abụ otuto",
            "right": "Praise poetry / Panegyric ode"
          },
          {
            "native": "Abụ akwa arịrị",
            "english": "Funeral dirge / Elegy / Lamentation",
            "left": "Abụ akwa arịrị",
            "right": "Funeral dirge / Elegy / Lamentation"
          },
          {
            "native": "Abụ nwa",
            "english": "Lullaby for comforting an infant",
            "left": "Abụ nwa",
            "right": "Lullaby for comforting an infant"
          },
          {
            "native": "Abụ agha",
            "english": "War song and valor chant",
            "left": "Abụ agha",
            "right": "War song and valor chant"
          }
        ]
      },
      {
        "id": "ig-u14-l1-q13",
        "type": "fill_blank",
        "sentence": "The flute player who inspires dancers and wrestlers with spirited proverbs plays the '___'.",
        "missingWord": "Ọja",
        "options": [
          "Ọja",
          "Ogene",
          "Ekwe",
          "Igba"
        ],
        "correctAnswer": "Ọja",
        "explanation": "The 'Ọja' (wooden flute) is the soulful acoustic instrument of Igbo oral poetry."
      },
      {
        "id": "ig-u14-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the words: 'Agụmagụ na-egosipụta omenala ndị Igbo' (Literature reflects the culture of the Igbo people):",
        "tokens": [
          "Agụmagụ",
          "na-egosipụta",
          "omenala",
          "ndị",
          "Igbo"
        ],
        "correctTokens": [
          "Agụmagụ",
          "na-egosipụta",
          "omenala",
          "ndị",
          "Igbo"
        ]
      },
      {
        "id": "ig-u14-l1-q15",
        "type": "multiple_choice",
        "prompt": "Which literary device involves repeating the initial consonant sound across successive words (Alliteration)?",
        "options": [
          "Ndakọrịta mgbochiume",
          "Ilu",
          "Akpaalaokwu",
          "Mkpọpụta"
        ],
        "correctAnswer": "Ndakọrịta mgbochiume",
        "explanation": "'Ndakọrịta mgbochiume' is alliteration (the repetition of consonant sounds in poetic lines)."
      },
      {
        "id": "ig-u14-l1-q16",
        "type": "audio_listen",
        "phrase": "Ndị na-eme ejije na-anọ n'elu ikpo okwu",
        "prompt": "Listen to the theatrical description. Where do the actors perform?",
        "options": [
          "On the elevated stage / platform (elu ikpo okwu)",
          "Inside the farm barn",
          "Beside the village stream",
          "Inside the classroom cupboard"
        ],
        "correctAnswer": "On the elevated stage / platform (elu ikpo okwu)",
        "explanation": "'Elu ikpo okwu' is the theatrical stage or podium."
      },
      {
        "id": "ig-u14-l1-q17",
        "type": "multiple_choice",
        "prompt": "What is an antagonist / villain in an Igbo dramatic play called?",
        "options": [
          "Onye na-akpata nsogbu / Onye mgbochi",
          "Onye dike",
          "Onye isi",
          "Odee"
        ],
        "correctAnswer": "Onye na-akpata nsogbu / Onye mgbochi",
        "explanation": "'Onye mgbochi' or 'onye mmegide' is the antagonist opposing the protagonist."
      },
      {
        "id": "ig-u14-l1-q18",
        "type": "fill_blank",
        "sentence": "A stanza or line group in an Igbo poem is termed '___ abụ'.",
        "missingWord": "Nkeji",
        "options": [
          "Nkeji",
          "Isi",
          "Ọnụ",
          "Aka"
        ],
        "correctAnswer": "Nkeji",
        "explanation": "'Nkeji abụ' is a poetic stanza."
      },
      {
        "id": "ig-u14-l1-q19",
        "type": "multiple_choice",
        "prompt": "Who is the legendary protagonist of Tony Ubesie's celebrated novel 'Isi Akwụ Dara n'Ala'?",
        "options": [
          "A tragic drama reflecting the Biafran civil war experience and social upheaval",
          "A story about hunting leopards",
          "A guide to planting cassava",
          "A translation of Shakespeare"
        ],
        "correctAnswer": "A tragic drama reflecting the Biafran civil war experience and social upheaval",
        "explanation": "Tony Ubesie's 'Isi Akwụ Dara n'Ala' is a masterpiece analyzing the emotional and psychological trauma of the Nigerian-Biafran war."
      },
      {
        "id": "ig-u14-l1-q20",
        "type": "matching",
        "prompt": "Match dramatic and poetic analytical terms:",
        "pairs": [
          {
            "native": "Onye dike",
            "english": "Protagonist / Hero",
            "left": "Onye dike",
            "right": "Protagonist / Hero"
          },
          {
            "native": "Atụmatụ okwu",
            "english": "Figures of speech / Metaphorical imagery",
            "left": "Atụmatụ okwu",
            "right": "Figures of speech / Metaphorical imagery"
          },
          {
            "native": "Nchịkọta",
            "english": "Summary / Synopsis of plot",
            "left": "Nchịkọta",
            "right": "Summary / Synopsis of plot"
          },
          {
            "native": "Ọgụgụ aghọta",
            "english": "Reading comprehension and critical analysis",
            "left": "Ọgụgụ aghọta",
            "right": "Reading comprehension and critical analysis"
          }
        ]
      }
    ]
  },
  {
    "id": "ig-unit-15",
    "unitId": "ig-unit-15",
    "unitNumber": 15,
    "level": "Level 3: Advanced (Senior Secondary / SS 1–3)",
    "title": "Unit 15: Translation, Stylistics, and Idiomatic Mastery (Ntụgharị na Akpaalaokwu)",
    "subtitle": "Technical and literary translation, deep idioms (Akpaalaokwu), and regional dialectology (Olu mba).",
    "icon": "Globe",
    "color": "#059669",
    "lessons": [
      {
        "id": "ig-u15-l1",
        "title": "Lesson 1: Ntụgharị Asụsụ, Akpaalaokwu na Olu Mba Dị Iche Iche (Translation & Dialects)",
        "description": "Master dynamic translation methodologies, deep idioms (Akpaalaokwu), and dialect comparison across Onitsha, Owerri, Nsukka, and Central Igbo.",
        "xp": 20,
        "completed": false,
        "questions": [
          {
            "id": "ig-u15-l1-q1",
            "type": "multiple_choice",
            "prompt": "Which standardized dialect forms the foundation of official written Igbo (Igbo Izugbe)?",
            "options": [
              "Central Igbo (developed from Owerri-Umuahia core by F.C. Ogbalu and the SPILC)",
              "Calabar dialect",
              "Lagos dialect",
              "Kano dialect"
            ],
            "correctAnswer": "Central Igbo (developed from Owerri-Umuahia core by F.C. Ogbalu and the SPILC)",
            "explanation": "Standard Igbo (Igbo Izugbe) was built on Central Igbo dialects, codified under Dr. S.E. Onwu and F.C. Ogbalu's SPILC."
          },
          {
            "id": "ig-u15-l1-q2",
            "type": "matching",
            "prompt": "Match regional dialect words with their Standard Igbo (Igbo Izugbe) equivalents:",
            "pairs": [
              {
                "native": "Onitsha: 'Ife'",
                "english": "Standard: 'Ihe' (Thing)",
                "left": "Onitsha: 'Ife'",
                "right": "Standard: 'Ihe' (Thing)"
              },
              {
                "native": "Onitsha: 'Maka'",
                "english": "Standard: 'Gịnị' (What / Why)",
                "left": "Onitsha: 'Maka'",
                "right": "Standard: 'Gịnị' (What / Why)"
              },
              {
                "native": "Owerri: 'Ehu'",
                "english": "Standard: 'Ewu' (Goat)",
                "left": "Owerri: 'Ehu'",
                "right": "Standard: 'Ewu' (Goat)"
              },
              {
                "native": "Nsukka: 'Iva'",
                "english": "Standard: 'Ihe' (Thing / Substance)",
                "left": "Nsukka: 'Iva'",
                "right": "Standard: 'Ihe' (Thing / Substance)"
              }
            ]
          },
          {
            "id": "ig-u15-l1-q3",
            "type": "fill_blank",
            "sentence": "An idiom or figure of speech in Igbo is formally designated as '___'.",
            "missingWord": "Akpaalaokwu",
            "options": [
              "Akpaalaokwu",
              "Ilu",
              "Ahịrịokwu",
              "Ụdaume"
            ],
            "correctAnswer": "Akpaalaokwu",
            "explanation": "'Akpaalaokwu' is the technical grammatical term for idioms and figures of speech."
          },
          {
            "id": "ig-u15-l1-q4",
            "type": "scramble",
            "prompt": "Arrange the idiom: 'Ọ gbara aka pụọ' (He left empty-handed / without anything):",
            "tokens": [
              "Ọ",
              "gbara",
              "aka",
              "pụọ"
            ],
            "correctTokens": [
              "Ọ",
              "gbara",
              "aka",
              "pụọ"
            ]
          },
          {
            "id": "ig-u15-l1-q5",
            "type": "audio_listen",
            "phrase": "Ịgba n'anwụ na ịta ahụhụ",
            "prompt": "Listen to the idiomatic expression. What does 'ịgba n'anwụ' convey metaphorically?",
            "options": [
              "Enduring severe toil, suffering, and hardship in life",
              "Sunbathing at the beach",
              "Planting crops at midday",
              "Wearing yellow clothes"
            ],
            "correctAnswer": "Enduring severe toil, suffering, and hardship in life",
            "explanation": "'Ịgba n'anwụ' (standing in the scorching sun) metaphorically expresses rigorous suffering and labor."
          },
          {
            "id": "ig-u15-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does the idiom 'Imechi anya' mean when used euphemistically regarding human life?",
            "options": [
              "To pass away / die",
              "To blink",
              "To sleep for an hour",
              "To refuse to look"
            ],
            "correctAnswer": "To pass away / die",
            "explanation": "'Imechi anya' (closing eyes) is a respectful euphemism for death or passing away."
          },
          {
            "id": "ig-u15-l1-q7",
            "type": "matching",
            "prompt": "Match deep Igbo idioms (Akpaalaokwu) with metaphorical meanings:",
            "pairs": [
              {
                "native": "Ịgbaji ukwu",
                "english": "To dance with passionate vigor and agility",
                "left": "Ịgbaji ukwu",
                "right": "To dance with passionate vigor and agility"
              },
              {
                "native": "Ibu ọnụ",
                "english": "Fasting / Abstaining from food",
                "left": "Ibu ọnụ",
                "right": "Fasting / Abstaining from food"
              },
              {
                "native": "Iri ego",
                "english": "Taking a bribe / Embezzling funds",
                "left": "Iri ego",
                "right": "Taking a bribe / Embezzling funds"
              },
              {
                "native": "Ịgba aka",
                "english": "To be destitute / Empty-handed",
                "left": "Ịgba aka",
                "right": "To be destitute / Empty-handed"
              }
            ]
          },
          {
            "id": "ig-u15-l1-q8",
            "type": "fill_blank",
            "sentence": "When translating text, translation that captures the deeper contextual sense rather than word-for-word is 'Ntụgharị ___' (Sense-for-sense translation).",
            "missingWord": "nghọta",
            "options": [
              "nghọta",
              "okwu",
              "akwụkwọ",
              "ọsọ"
            ],
            "correctAnswer": "nghọta",
            "explanation": "'Ntụgharị nghọta' is dynamic/idiomatic translation prioritizing meaning over literal words."
          },
          {
            "id": "ig-u15-l1-q9",
            "type": "scramble",
            "prompt": "Arrange the words: 'Asụsụ Igbo nwere ọtụtụ olu mba' (The Igbo language has many regional dialects):",
            "tokens": [
              "Asụsụ",
              "Igbo",
              "nwere",
              "ọtụtụ",
              "olu",
              "mba"
            ],
            "correctTokens": [
              "Asụsụ",
              "Igbo",
              "nwere",
              "ọtụtụ",
              "olu",
              "mba"
            ]
          },
          {
            "id": "ig-u15-l1-q10",
            "type": "multiple_choice",
            "prompt": "How is 'Artificial Intelligence' (AI) accurately translated in contemporary technological Igbo?",
            "options": [
              "Amamihe Ngwa Kọmputa / Amamihe Nchịkọta Na-arụrụ Onwe Ya",
              "Igwe ọkụ",
              "Ego kọmputa",
              "Ụlọ akwụkwọ"
            ],
            "correctAnswer": "Amamihe Ngwa Kọmputa / Amamihe Nchịkọta Na-arụrụ Onwe Ya",
            "explanation": "'Amamihe Ngwa / Amamihe aka mere' is the standard modern technical term for Artificial Intelligence."
          },
          {
            "id": "ig-u15-l1-q11",
            "type": "audio_listen",
            "phrase": "Ụlọ ikpe kacha elu na Naịjirịa",
            "prompt": "Listen to the legal administrative phrase. What institution is this?",
            "options": [
              "The Supreme Court of Nigeria",
              "The Federal Police Headquarters",
              "The National Assembly",
              "The Ministry of Foreign Affairs"
            ],
            "correctAnswer": "The Supreme Court of Nigeria",
            "explanation": "'Ụlọ ikpe kacha elu' translates to the Supreme Court."
          },
          {
            "id": "ig-u15-l1-q12",
            "type": "matching",
            "prompt": "Match modern administrative translations in Igbo:",
            "pairs": [
              {
                "native": "Iwu nchịkwa ala / Usoro iwu",
                "english": "National Constitution",
                "left": "Iwu nchịkwa ala / Usoro iwu",
                "right": "National Constitution"
              },
              {
                "native": "Ụlọ omeiwu",
                "english": "Legislative Parliament / Assembly",
                "left": "Ụlọ omeiwu",
                "right": "Legislative Parliament / Assembly"
              },
              {
                "native": "Ọchịchị onye kwuo uche ya",
                "english": "Democracy (governance of free expression)",
                "left": "Ọchịchị onye kwuo uche ya",
                "right": "Democracy (governance of free expression)"
              },
              {
                "native": "Mgbasa ozi",
                "english": "Broadcasting / Mass media communication",
                "left": "Mgbasa ozi",
                "right": "Mgbasa ozi"
              }
            ]
          },
          {
            "id": "ig-u15-l1-q13",
            "type": "fill_blank",
            "sentence": "Literal word-for-word translation that often sounds unnatural is called 'Ntụgharị okwu na ___'.",
            "missingWord": "okwu",
            "options": [
              "okwu",
              "ilu",
              "akwụkwọ",
              "akpaalaokwu"
            ],
            "correctAnswer": "okwu",
            "explanation": "'Ntụgharị okwu na okwu' (word-for-word translation) often fails to convey idiomatic resonance."
          },
          {
            "id": "ig-u15-l1-q14",
            "type": "scramble",
            "prompt": "Arrange the headline: 'Gọvanọ steeti ahụ kwere nkwa iwuli akụ na ụba' (The state governor pledged to boost the economy):",
            "tokens": [
              "Gọvanọ",
              "steeti",
              "ahụ",
              "kwere",
              "nkwa",
              "iwuli",
              "akụ",
              "na",
              "ụba"
            ],
            "correctTokens": [
              "Gọvanọ",
              "steeti",
              "ahụ",
              "kwere",
              "nkwa",
              "iwuli",
              "akụ",
              "na",
              "ụba"
            ]
          },
          {
            "id": "ig-u15-l1-q15",
            "type": "multiple_choice",
            "prompt": "What does the idiom 'Imebi ihu' mean in interpersonal relations?",
            "options": [
              "To frown / scowl in anger",
              "To wash one's face",
              "To apply makeup",
              "To smile broadly"
            ],
            "correctAnswer": "To frown / scowl in anger",
            "explanation": "'Imebi ihu' (literally: to spoil face) means to scowl, frown, or show angry displeasure."
          },
          {
            "id": "ig-u15-l1-q16",
            "type": "audio_listen",
            "phrase": "Ọnọdụ akụ na ụba na-akawanye mma",
            "prompt": "Listen to the economic broadcast. What is reported?",
            "options": [
              "The economic situation is steadily improving",
              "Inflation has reached record levels",
              "The central bank has devalued the currency",
              "Markets are closed due to a strike"
            ],
            "correctAnswer": "The economic situation is steadily improving",
            "explanation": "'Akụ na ụba' = economy/wealth; 'na-akawanye mma' = is improving."
          },
          {
            "id": "ig-u15-l1-q17",
            "type": "multiple_choice",
            "prompt": "Which founding literary giant founded the Society for Promoting Igbo Language and Culture (SPILC) in 1949?",
            "options": [
              "Chief F.C. Ogbalu",
              "Chinua Achebe",
              "Cyprian Ekwensi",
              "Christopher Okigbo"
            ],
            "correctAnswer": "Chief F.C. Ogbalu",
            "explanation": "Chief Frederick Chidozie Ogbalu dedicated his life to standardizing, preserving, and popularizing Igbo literature through the SPILC."
          },
          {
            "id": "ig-u15-l1-q18",
            "type": "fill_blank",
            "sentence": "The phrase 'Olu mba' in Igbo linguistics refers to regional ___.",
            "missingWord": "dialects",
            "options": [
              "dialects",
              "towns",
              "kings",
              "markets"
            ],
            "correctAnswer": "dialects",
            "explanation": "'Olu mba' signifies regional dialects or local accents of the language."
          },
          {
            "id": "ig-u15-l1-q19",
            "type": "multiple_choice",
            "prompt": "What does the idiom 'Ihe mere n'abalị agaghị ezo n'ehihie' assert about justice?",
            "options": [
              "Secret deeds done under darkness will inevitably be revealed in the light of day",
              "Daytime is hotter than night",
              "Never sleep in the afternoon",
              "Night travel is dangerous"
            ],
            "correctAnswer": "Secret deeds done under darkness will inevitably be revealed in the light of day",
            "explanation": "This classic idiom underscores truth, accountability, and the impossibility of permanently concealing wrongdoing."
          },
          {
            "id": "ig-u15-l1-q20",
            "type": "matching",
            "prompt": "Match media broadcasting terms in Igbo journalism:",
            "pairs": [
              {
                "native": "Ụlọ ọrụ mgbasa ozi",
                "english": "Broadcasting station / Media corporation",
                "left": "Ụlọ ọrụ mgbasa ozi",
                "right": "Broadcasting station / Media corporation"
              },
              {
                "native": "Akụkọ ụwa",
                "english": "World news / International affairs",
                "left": "Akụkọ ụwa",
                "right": "World news / International affairs"
              },
              {
                "native": "Nchịkọta akụkọ",
                "english": "News bulletin / Summary",
                "left": "Nchịkọta akụkọ",
                "right": "News bulletin / Summary"
              },
              {
                "native": "Onye na-agụ akụkọ",
                "english": "News anchor / Broadcaster",
                "left": "Onye na-agụ akụkọ",
                "right": "News anchor / Broadcaster"
              }
            ]
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ig-u15-l1-q1",
        "type": "multiple_choice",
        "prompt": "Which standardized dialect forms the foundation of official written Igbo (Igbo Izugbe)?",
        "options": [
          "Central Igbo (developed from Owerri-Umuahia core by F.C. Ogbalu and the SPILC)",
          "Calabar dialect",
          "Lagos dialect",
          "Kano dialect"
        ],
        "correctAnswer": "Central Igbo (developed from Owerri-Umuahia core by F.C. Ogbalu and the SPILC)",
        "explanation": "Standard Igbo (Igbo Izugbe) was built on Central Igbo dialects, codified under Dr. S.E. Onwu and F.C. Ogbalu's SPILC."
      },
      {
        "id": "ig-u15-l1-q2",
        "type": "matching",
        "prompt": "Match regional dialect words with their Standard Igbo (Igbo Izugbe) equivalents:",
        "pairs": [
          {
            "native": "Onitsha: 'Ife'",
            "english": "Standard: 'Ihe' (Thing)",
            "left": "Onitsha: 'Ife'",
            "right": "Standard: 'Ihe' (Thing)"
          },
          {
            "native": "Onitsha: 'Maka'",
            "english": "Standard: 'Gịnị' (What / Why)",
            "left": "Onitsha: 'Maka'",
            "right": "Standard: 'Gịnị' (What / Why)"
          },
          {
            "native": "Owerri: 'Ehu'",
            "english": "Standard: 'Ewu' (Goat)",
            "left": "Owerri: 'Ehu'",
            "right": "Standard: 'Ewu' (Goat)"
          },
          {
            "native": "Nsukka: 'Iva'",
            "english": "Standard: 'Ihe' (Thing / Substance)",
            "left": "Nsukka: 'Iva'",
            "right": "Standard: 'Ihe' (Thing / Substance)"
          }
        ]
      },
      {
        "id": "ig-u15-l1-q3",
        "type": "fill_blank",
        "sentence": "An idiom or figure of speech in Igbo is formally designated as '___'.",
        "missingWord": "Akpaalaokwu",
        "options": [
          "Akpaalaokwu",
          "Ilu",
          "Ahịrịokwu",
          "Ụdaume"
        ],
        "correctAnswer": "Akpaalaokwu",
        "explanation": "'Akpaalaokwu' is the technical grammatical term for idioms and figures of speech."
      },
      {
        "id": "ig-u15-l1-q4",
        "type": "scramble",
        "prompt": "Arrange the idiom: 'Ọ gbara aka pụọ' (He left empty-handed / without anything):",
        "tokens": [
          "Ọ",
          "gbara",
          "aka",
          "pụọ"
        ],
        "correctTokens": [
          "Ọ",
          "gbara",
          "aka",
          "pụọ"
        ]
      },
      {
        "id": "ig-u15-l1-q5",
        "type": "audio_listen",
        "phrase": "Ịgba n'anwụ na ịta ahụhụ",
        "prompt": "Listen to the idiomatic expression. What does 'ịgba n'anwụ' convey metaphorically?",
        "options": [
          "Enduring severe toil, suffering, and hardship in life",
          "Sunbathing at the beach",
          "Planting crops at midday",
          "Wearing yellow clothes"
        ],
        "correctAnswer": "Enduring severe toil, suffering, and hardship in life",
        "explanation": "'Ịgba n'anwụ' (standing in the scorching sun) metaphorically expresses rigorous suffering and labor."
      },
      {
        "id": "ig-u15-l1-q6",
        "type": "multiple_choice",
        "prompt": "What does the idiom 'Imechi anya' mean when used euphemistically regarding human life?",
        "options": [
          "To pass away / die",
          "To blink",
          "To sleep for an hour",
          "To refuse to look"
        ],
        "correctAnswer": "To pass away / die",
        "explanation": "'Imechi anya' (closing eyes) is a respectful euphemism for death or passing away."
      },
      {
        "id": "ig-u15-l1-q7",
        "type": "matching",
        "prompt": "Match deep Igbo idioms (Akpaalaokwu) with metaphorical meanings:",
        "pairs": [
          {
            "native": "Ịgbaji ukwu",
            "english": "To dance with passionate vigor and agility",
            "left": "Ịgbaji ukwu",
            "right": "To dance with passionate vigor and agility"
          },
          {
            "native": "Ibu ọnụ",
            "english": "Fasting / Abstaining from food",
            "left": "Ibu ọnụ",
            "right": "Fasting / Abstaining from food"
          },
          {
            "native": "Iri ego",
            "english": "Taking a bribe / Embezzling funds",
            "left": "Iri ego",
            "right": "Taking a bribe / Embezzling funds"
          },
          {
            "native": "Ịgba aka",
            "english": "To be destitute / Empty-handed",
            "left": "Ịgba aka",
            "right": "To be destitute / Empty-handed"
          }
        ]
      },
      {
        "id": "ig-u15-l1-q8",
        "type": "fill_blank",
        "sentence": "When translating text, translation that captures the deeper contextual sense rather than word-for-word is 'Ntụgharị ___' (Sense-for-sense translation).",
        "missingWord": "nghọta",
        "options": [
          "nghọta",
          "okwu",
          "akwụkwọ",
          "ọsọ"
        ],
        "correctAnswer": "nghọta",
        "explanation": "'Ntụgharị nghọta' is dynamic/idiomatic translation prioritizing meaning over literal words."
      },
      {
        "id": "ig-u15-l1-q9",
        "type": "scramble",
        "prompt": "Arrange the words: 'Asụsụ Igbo nwere ọtụtụ olu mba' (The Igbo language has many regional dialects):",
        "tokens": [
          "Asụsụ",
          "Igbo",
          "nwere",
          "ọtụtụ",
          "olu",
          "mba"
        ],
        "correctTokens": [
          "Asụsụ",
          "Igbo",
          "nwere",
          "ọtụtụ",
          "olu",
          "mba"
        ]
      },
      {
        "id": "ig-u15-l1-q10",
        "type": "multiple_choice",
        "prompt": "How is 'Artificial Intelligence' (AI) accurately translated in contemporary technological Igbo?",
        "options": [
          "Amamihe Ngwa Kọmputa / Amamihe Nchịkọta Na-arụrụ Onwe Ya",
          "Igwe ọkụ",
          "Ego kọmputa",
          "Ụlọ akwụkwọ"
        ],
        "correctAnswer": "Amamihe Ngwa Kọmputa / Amamihe Nchịkọta Na-arụrụ Onwe Ya",
        "explanation": "'Amamihe Ngwa / Amamihe aka mere' is the standard modern technical term for Artificial Intelligence."
      },
      {
        "id": "ig-u15-l1-q11",
        "type": "audio_listen",
        "phrase": "Ụlọ ikpe kacha elu na Naịjirịa",
        "prompt": "Listen to the legal administrative phrase. What institution is this?",
        "options": [
          "The Supreme Court of Nigeria",
          "The Federal Police Headquarters",
          "The National Assembly",
          "The Ministry of Foreign Affairs"
        ],
        "correctAnswer": "The Supreme Court of Nigeria",
        "explanation": "'Ụlọ ikpe kacha elu' translates to the Supreme Court."
      },
      {
        "id": "ig-u15-l1-q12",
        "type": "matching",
        "prompt": "Match modern administrative translations in Igbo:",
        "pairs": [
          {
            "native": "Iwu nchịkwa ala / Usoro iwu",
            "english": "National Constitution",
            "left": "Iwu nchịkwa ala / Usoro iwu",
            "right": "National Constitution"
          },
          {
            "native": "Ụlọ omeiwu",
            "english": "Legislative Parliament / Assembly",
            "left": "Ụlọ omeiwu",
            "right": "Legislative Parliament / Assembly"
          },
          {
            "native": "Ọchịchị onye kwuo uche ya",
            "english": "Democracy (governance of free expression)",
            "left": "Ọchịchị onye kwuo uche ya",
            "right": "Democracy (governance of free expression)"
          },
          {
            "native": "Mgbasa ozi",
            "english": "Broadcasting / Mass media communication",
            "left": "Mgbasa ozi",
            "right": "Mgbasa ozi"
          }
        ]
      },
      {
        "id": "ig-u15-l1-q13",
        "type": "fill_blank",
        "sentence": "Literal word-for-word translation that often sounds unnatural is called 'Ntụgharị okwu na ___'.",
        "missingWord": "okwu",
        "options": [
          "okwu",
          "ilu",
          "akwụkwọ",
          "akpaalaokwu"
        ],
        "correctAnswer": "okwu",
        "explanation": "'Ntụgharị okwu na okwu' (word-for-word translation) often fails to convey idiomatic resonance."
      },
      {
        "id": "ig-u15-l1-q14",
        "type": "scramble",
        "prompt": "Arrange the headline: 'Gọvanọ steeti ahụ kwere nkwa iwuli akụ na ụba' (The state governor pledged to boost the economy):",
        "tokens": [
          "Gọvanọ",
          "steeti",
          "ahụ",
          "kwere",
          "nkwa",
          "iwuli",
          "akụ",
          "na",
          "ụba"
        ],
        "correctTokens": [
          "Gọvanọ",
          "steeti",
          "ahụ",
          "kwere",
          "nkwa",
          "iwuli",
          "akụ",
          "na",
          "ụba"
        ]
      },
      {
        "id": "ig-u15-l1-q15",
        "type": "multiple_choice",
        "prompt": "What does the idiom 'Imebi ihu' mean in interpersonal relations?",
        "options": [
          "To frown / scowl in anger",
          "To wash one's face",
          "To apply makeup",
          "To smile broadly"
        ],
        "correctAnswer": "To frown / scowl in anger",
        "explanation": "'Imebi ihu' (literally: to spoil face) means to scowl, frown, or show angry displeasure."
      },
      {
        "id": "ig-u15-l1-q16",
        "type": "audio_listen",
        "phrase": "Ọnọdụ akụ na ụba na-akawanye mma",
        "prompt": "Listen to the economic broadcast. What is reported?",
        "options": [
          "The economic situation is steadily improving",
          "Inflation has reached record levels",
          "The central bank has devalued the currency",
          "Markets are closed due to a strike"
        ],
        "correctAnswer": "The economic situation is steadily improving",
        "explanation": "'Akụ na ụba' = economy/wealth; 'na-akawanye mma' = is improving."
      },
      {
        "id": "ig-u15-l1-q17",
        "type": "multiple_choice",
        "prompt": "Which founding literary giant founded the Society for Promoting Igbo Language and Culture (SPILC) in 1949?",
        "options": [
          "Chief F.C. Ogbalu",
          "Chinua Achebe",
          "Cyprian Ekwensi",
          "Christopher Okigbo"
        ],
        "correctAnswer": "Chief F.C. Ogbalu",
        "explanation": "Chief Frederick Chidozie Ogbalu dedicated his life to standardizing, preserving, and popularizing Igbo literature through the SPILC."
      },
      {
        "id": "ig-u15-l1-q18",
        "type": "fill_blank",
        "sentence": "The phrase 'Olu mba' in Igbo linguistics refers to regional ___.",
        "missingWord": "dialects",
        "options": [
          "dialects",
          "towns",
          "kings",
          "markets"
        ],
        "correctAnswer": "dialects",
        "explanation": "'Olu mba' signifies regional dialects or local accents of the language."
      },
      {
        "id": "ig-u15-l1-q19",
        "type": "multiple_choice",
        "prompt": "What does the idiom 'Ihe mere n'abalị agaghị ezo n'ehihie' assert about justice?",
        "options": [
          "Secret deeds done under darkness will inevitably be revealed in the light of day",
          "Daytime is hotter than night",
          "Never sleep in the afternoon",
          "Night travel is dangerous"
        ],
        "correctAnswer": "Secret deeds done under darkness will inevitably be revealed in the light of day",
        "explanation": "This classic idiom underscores truth, accountability, and the impossibility of permanently concealing wrongdoing."
      },
      {
        "id": "ig-u15-l1-q20",
        "type": "matching",
        "prompt": "Match media broadcasting terms in Igbo journalism:",
        "pairs": [
          {
            "native": "Ụlọ ọrụ mgbasa ozi",
            "english": "Broadcasting station / Media corporation",
            "left": "Ụlọ ọrụ mgbasa ozi",
            "right": "Broadcasting station / Media corporation"
          },
          {
            "native": "Akụkọ ụwa",
            "english": "World news / International affairs",
            "left": "Akụkọ ụwa",
            "right": "World news / International affairs"
          },
          {
            "native": "Nchịkọta akụkọ",
            "english": "News bulletin / Summary",
            "left": "Nchịkọta akụkọ",
            "right": "News bulletin / Summary"
          },
          {
            "native": "Onye na-agụ akụkọ",
            "english": "News anchor / Broadcaster",
            "left": "Onye na-agụ akụkọ",
            "right": "News anchor / Broadcaster"
          }
        ]
      }
    ]
  }
];
