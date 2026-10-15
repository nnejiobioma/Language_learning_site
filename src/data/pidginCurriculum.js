// =========================================================================
// Nigerian Pidgin English (NPE) - Complete NERDC 10-Unit Master Curriculum
// Structured Across 4 Progressive Levels:
// - Level 1: Beginner (Foundational Pikin) — Units 1 to 3
// - Level 2: Intermediate (Wafarian/Street Smart) — Units 4 to 6
// - Level 3: Upper-Intermediate (Naija Flow) — Units 7 to 8
// - Level 4: Advanced (Yarn Specialist) — Units 9 to 10
//
// 5 Language Strands in each unit:
// 1. Speech Work (Phonetics/Oracy)
// 2. Grammatical Accuracy
// 3. Comprehension
// 4. Composition/Creative Expression
// 5. Oral Literature & Idioms
// =========================================================================

export const pidginAllUnits = [
  // =========================================================================
  // LEVEL 1: BEGINNER (FOUNDATIONAL PIKIN)
  // =========================================================================

  // -------------------------------------------------------------------------
  // Unit 1: Phonology & Sound Substitutions
  // -------------------------------------------------------------------------
  {
    id: "p-unit-1",
    level: "Level 1: Beginner (Foundational Pikin)",
    title: "Unit 1: Phonology & Sound Substitutions",
    subtitle: "Dropping dental fricatives (th → t/d), initial /h/ dropping, and essential subject pronouns.",
    icon: "Sun",
    color: "#10b981",
    lessons: [
      {
        id: "p-u1-l1",
        title: "Lesson 1: Dental Fricative Swaps (th → t/d)",
        description: "Learn how the English sounds /θ/ and /ð/ transform into crisp /t/ and /d/ in Nigerian Pidgin.",
        xp: 20,
        questions: [
          {
            id: "p-u1-l1-q1",
            type: "multiple_choice",
            prompt: "In Nigerian Pidgin phonology, how does the English dental fricative 'th' in 'thing' sound?",
            options: [
              "'Ting' (the dental fricative /θ/ becomes /t/)",
              "'Sing' (it turns into an /s/)",
              "'Fing' (it turns into an /f/)",
              "It remains identical to British English 'thing'"
            ],
            correctAnswer: "'Ting' (the dental fricative /θ/ becomes /t/)",
            explanation: "Nigerian Pidgin drops the dental fricative /θ/, replacing it systematically with /t/ (e.g. thing → ting, thank → tank)."
          },
          {
            id: "p-u1-l1-q2",
            type: "multiple_choice",
            prompt: "How does the voiced 'th' in 'them' or 'they' sound in Nigerian Pidgin?",
            options: [
              "'Dem' (the voiced dental /ð/ becomes /d/)",
              "'Zem' (it becomes a /z/)",
              "'Vem' (it becomes a /v/)",
              "'Them' (no phonetic change)"
            ],
            correctAnswer: "'Dem' (the voiced dental /ð/ becomes /d/)",
            explanation: "The voiced dental fricative /ð/ systematically becomes /d/, producing 'dem' (them/they)."
          },
          {
            id: "p-u1-l1-q3",
            type: "matching",
            prompt: "Match the Standard English words with their Nigerian Pidgin phonetic sound substitutions:",
            pairs: [
              { native: "Ting", english: "Thing (/θ/ → /t/)" },
              { native: "Tank you", english: "Thank you (/θ/ → /t/)" },
              { native: "Dat", english: "That (/ð/ → /d/)" },
              { native: "Dis", english: "This (/ð/ → /d/)" }
            ]
          },
          {
            id: "p-u1-l1-q4",
            type: "audio_listen",
            phrase: "Dat ting wey you talk",
            prompt: "Listen to the phrase. What does it translate to in Standard English?",
            options: [
              "That thing which you said",
              "The food that you cooked",
              "Where did you go yesterday?",
              "Who is that person speaking?"
            ],
            correctAnswer: "That thing which you said",
            explanation: "'Dat ting' = That thing; 'wey you talk' = which/that you said."
          },
          {
            id: "p-u1-l1-q5",
            type: "fill_blank",
            sentence: "Make you take ___ book give me. (that book)",
            missingWord: "dat",
            options: ["dat", "zat", "fat", "vat"],
            correctAnswer: "dat",
            explanation: "In NPE, 'that' is pronounced and written as 'dat'."
          }
        ]
      },
      {
        id: "p-u1-l2",
        title: "Lesson 2: Initial /h/ Dropping & Core Pronouns",
        description: "Master initial /h/-dropping (house → ouse) and the personal pronouns: Me, You, Im, We, Una, Dem.",
        xp: 25,
        questions: [
          {
            id: "p-u1-l2-q1",
            type: "multiple_choice",
            prompt: "What happens to the initial /h/ in words like 'house' or 'hear' in everyday NPE speech?",
            options: [
              "The /h/ is dropped (house → ouse, hear → ear)",
              "The /h/ is doubled into a heavy guttural sound",
              "The /h/ becomes a 'w' sound",
              "The /h/ is pronounced like a whistle"
            ],
            correctAnswer: "The /h/ is dropped (house → ouse, hear → ear)",
            explanation: "NPE oracy features common initial /h/-dropping, so 'house' becomes 'ouse' and 'hungry' becomes 'ungry'."
          },
          {
            id: "p-u1-l2-q2",
            type: "multiple_choice",
            prompt: "Which NPE pronoun means 'You all' / 'You (plural)'?",
            options: ["Una", "Dem", "Im", "We"],
            correctAnswer: "Una",
            explanation: "'Una' (derived from Igbo 'únù') is the universal second-person plural pronoun in NPE meaning 'all of you'."
          },
          {
            id: "p-u1-l2-q3",
            type: "matching",
            prompt: "Match the NPE pronouns with their English equivalents:",
            pairs: [
              { native: "Me / I", english: "I / Me" },
              { native: "Im", english: "He / She / It / His / Her" },
              { native: "Una", english: "You all (plural you)" },
              { native: "Dem", english: "They / Them" }
            ]
          },
          {
            id: "p-u1-l2-q4",
            type: "scramble",
            prompt: "Assemble: 'You all are welcome'",
            tokens: ["Una", "welcome", "well", "well", "dey"],
            correctTokens: ["Una", "welcome", "well", "well"],
            explanation: "'Una welcome well well' expresses a warm communal greeting to a group."
          },
          {
            id: "p-u1-l2-q5",
            type: "multiple_choice",
            prompt: "How does NPE express gender in third-person singular pronouns ('he' vs 'she')?",
            options: [
              "It uses 'Im' neutrally for both he, she, and it without gender distinction",
              "It adds '-a' for females and '-o' for males",
              "It borrows French 'il' and 'elle'",
              "It only has male pronouns"
            ],
            correctAnswer: "It uses 'Im' neutrally for both he, she, and it without gender distinction",
            explanation: "Like many indigenous West African languages, NPE is gender-neutral in its 3rd-person pronoun: 'Im' refers to he, she, or it."
          }
        ]
      },
      {
        id: "p-u1-l3",
        title: "Lesson 3: The Big Three Markers: No, Sabi & Dey",
        description: "Anchor your foundation with the primary markers: No (negation), Sabi (know-how), and Dey (presence/state).",
        xp: 25,
        questions: [
          {
            id: "p-u1-l3-q1",
            type: "multiple_choice",
            prompt: "What does the core verb 'Sabi' mean in Nigerian Pidgin?",
            options: [
              "To know / To understand / To have expertise",
              "To buy at the market",
              "To run very fast",
              "To argue loudly"
            ],
            correctAnswer: "To know / To understand / To have expertise",
            explanation: "'Sabi' (from Portuguese 'saber') means to know, understand, or possess skill."
          },
          {
            id: "p-u1-l3-q2",
            type: "fill_blank",
            sentence: "I ___ sabi that place at all. (I do not know)",
            missingWord: "no",
            options: ["no", "never", "not", "none"],
            correctAnswer: "no",
            explanation: "'No' is the universal negation particle: 'I no sabi' = I do not know."
          },
          {
            id: "p-u1-l3-q3",
            type: "matching",
            prompt: "Match the sentences with their English meanings:",
            pairs: [
              { native: "I dey house", english: "I am at home (location)" },
              { native: "I no sabi", english: "I do not know (negation)" },
              { native: "Im sabi speak well", english: "She/He knows how to speak fluently" },
              { native: "Una dey fine?", english: "Are you all doing well?" }
            ]
          },
          {
            id: "p-u1-l3-q4",
            type: "audio_listen",
            phrase: "I sabi am well well",
            prompt: "Listen to the phrase. What is being expressed?",
            options: [
              "I know it/him/her thoroughly well",
              "I am looking for my shoes",
              "Please give me some water",
              "Let us go to the market"
            ],
            correctAnswer: "I know it/him/her thoroughly well",
            explanation: "'Well well' is reduplication for emphasis, meaning 'thoroughly' or 'very well'."
          },
          {
            id: "p-u1-l3-q5",
            type: "scramble",
            prompt: "Assemble: 'I do not know what happened'",
            tokens: ["I", "no", "sabi", "wetin", "happen", "dey"],
            correctTokens: ["I", "no", "sabi", "wetin", "happen"],
            explanation: "'I no sabi wetin happen' = I do not know what took place."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Unit 2: The Core Aspect Markers
  // -------------------------------------------------------------------------
  {
    id: "p-unit-2",
    level: "Level 1: Beginner (Foundational Pikin)",
    title: "Unit 2: The Core Aspect Markers",
    subtitle: "Vowel leveling, the present progressive marker 'Dey', and uninflected past tense.",
    icon: "BookOpen",
    color: "#059669",
    lessons: [
      {
        id: "p-u2-l1",
        title: "Lesson 1: Present Progressive with 'Dey + Verb'",
        description: "Express ongoing actions in real-time using the vital auxiliary particle 'Dey'.",
        xp: 20,
        questions: [
          {
            id: "p-u2-l1-q1",
            type: "multiple_choice",
            prompt: "How do you say 'I am eating' in Nigerian Pidgin?",
            options: [
              "I dey chop",
              "I don chop",
              "I go chop",
              "I chop finish"
            ],
            correctAnswer: "I dey chop",
            explanation: "'Dey + verb' forms the continuous/progressive aspect: 'I dey chop' = I am currently eating."
          },
          {
            id: "p-u2-l1-q2",
            type: "multiple_choice",
            prompt: "How does NPE express past tense for simple action events without changing the verb root?",
            options: [
              "By using the uninflected root form directly (e.g. 'I go' = I went, 'I see am' = I saw him)",
              "By adding '-ed' to every single word",
              "By reversing the letters of the verb",
              "By adding 'yesterday' at the end of every sentence"
            ],
            correctAnswer: "By using the uninflected root form directly (e.g. 'I go' = I went, 'I see am' = I saw him)",
            explanation: "NPE verbs do not conjugate with tense endings like '-ed'; context and uninflected roots represent past actions naturally."
          },
          {
            id: "p-u2-l1-q3",
            type: "matching",
            prompt: "Match the aspect constructions with their meanings:",
            pairs: [
              { native: "I dey come", english: "I am coming (on my way right now)" },
              { native: "Im dey sleep", english: "He/She is sleeping right now" },
              { native: "Dem dey read", english: "They are reading currently" },
              { native: "We dey work", english: "We are actively working" }
            ]
          },
          {
            id: "p-u2-l1-q4",
            type: "fill_blank",
            sentence: "Listen, the baby ___ cry. (is crying right now)",
            missingWord: "dey",
            options: ["dey", "don", "go", "for"],
            correctAnswer: "dey",
            explanation: "'Dey cry' indicates that the baby is crying at this very moment."
          },
          {
            id: "p-u2-l1-q5",
            type: "scramble",
            prompt: "Assemble: 'She is cooking rice'",
            tokens: ["Im", "dey", "cook", "rice", "chop"],
            correctTokens: ["Im", "dey", "cook", "rice"],
            explanation: "'Im dey cook rice' = She/He is currently cooking rice."
          }
        ]
      },
      {
        id: "p-u2-l2",
        title: "Lesson 2: Decoding Market & Street Salutations",
        description: "Engage in authentic 2-person street dialogues: 'How you dey?', 'Body dey inside clothes', and greetings.",
        xp: 25,
        questions: [
          {
            id: "p-u2-l2-q1",
            type: "multiple_choice",
            prompt: "When someone asks you 'How body?', what does the phrase mean?",
            options: [
              "How are you feeling? / How is your physical health?",
              "What type of clothes are you wearing?",
              "Where is the nearest hospital?",
              "Can I take your photograph?"
            ],
            correctAnswer: "How are you feeling? / How is your physical health?",
            explanation: "'How body?' is an affectionate check-in asking about your health and overall wellbeing."
          },
          {
            id: "p-u2-l2-q2",
            type: "multiple_choice",
            prompt: "What does the iconic idiomatic response 'Body dey inside clothes' signify?",
            options: [
              "I am surviving and persevering despite life's challenges",
              "I need to go shopping for new suits",
              "The weather is extremely cold",
              "I am angry with everyone"
            ],
            correctAnswer: "I am surviving and persevering despite life's challenges",
            explanation: "'Body dey inside clothes' is a humble, witty reply indicating that one is holding up well."
          },
          {
            id: "p-u2-l2-q3",
            type: "matching",
            prompt: "Match the NPE greetings with their typical responses:",
            pairs: [
              { native: "How you dey?", english: "I dey fine, thank God." },
              { native: "How body?", english: "Body dey inside clothes." },
              { native: "Wetin dey happen?", english: "Nothing much, we dey push am." },
              { native: "Kedu? / Bawo ni?", english: "Everything dey alright." }
            ]
          },
          {
            id: "p-u2-l2-q4",
            type: "audio_listen",
            phrase: "How market today?",
            prompt: "Listen to the merchant greeting. What is the speaker inquiring about?",
            options: [
              "How are business and sales going today?",
              "What time does the supermarket close?",
              "Where can I buy fresh tomatoes?",
              "Who owns this marketplace?"
            ],
            correctAnswer: "How are business and sales going today?",
            explanation: "'How market?' is universally asked of traders to check on their sales volume."
          },
          {
            id: "p-u2-l2-q5",
            type: "scramble",
            prompt: "Assemble: 'Everything is fine, no trouble'",
            tokens: ["Everything", "dey", "fine,", "no", "wahala", "at", "all"],
            correctTokens: ["Everything", "dey", "fine,", "no", "wahala"],
            explanation: "'Everything dey fine, no wahala' is the ultimate peaceful status update."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Unit 3: Nouns, Pluralization & Ownership
  // -------------------------------------------------------------------------
  {
    id: "p-unit-3",
    level: "Level 1: Beginner (Foundational Pikin)",
    title: "Unit 3: Nouns, Pluralization & Ownership",
    subtitle: "Pluralizing with post-nominal 'dem', expressing possession with 'im' or 'get', and oral self-introductions.",
    icon: "Shield",
    color: "#047857",
    lessons: [
      {
        id: "p-u3-l1",
        title: "Lesson 1: Pluralization with 'Dem'",
        description: "Learn how Nigerian Pidgin forms plurals by placing 'dem' directly after the noun.",
        xp: 20,
        questions: [
          {
            id: "p-u3-l1-q1",
            type: "multiple_choice",
            prompt: "How does Nigerian Pidgin make a noun plural (e.g. 'the children' or 'the cars')?",
            options: [
              "By adding 'dem' after the noun (e.g. 'the pikin dem', 'the motor dem')",
              "By adding '-s' or '-es' like in English",
              "By repeating the word three times",
              "Nouns can never be pluralized in Pidgin"
            ],
            correctAnswer: "By adding 'dem' after the noun (e.g. 'the pikin dem', 'the motor dem')",
            explanation: "Post-nominal 'dem' acts as the universal pluralizer in NPE (e.g. the book dem = the books)."
          },
          {
            id: "p-u3-l1-q2",
            type: "fill_blank",
            sentence: "All the teacher ___ don go meeting. (plural teachers)",
            missingWord: "dem",
            options: ["dem", "una", "dey", "im"],
            correctAnswer: "dem",
            explanation: "'Teacher dem' means 'the teachers'."
          },
          {
            id: "p-u3-l1-q3",
            type: "matching",
            prompt: "Match the singular and plural forms:",
            pairs: [
              { native: "The pikin (singular child)", english: "The pikin dem (the children)" },
              { native: "The chair (singular)", english: "The chair dem (the chairs)" },
              { native: "The friend (singular)", english: "My friend dem (my friends)" },
              { native: "The motor (singular car)", english: "The motor dem (the cars)" }
            ]
          },
          {
            id: "p-u3-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'The girls have gone home'",
            tokens: ["The", "girl", "dem", "don", "go", "house", "dey"],
            correctTokens: ["The", "girl", "dem", "don", "go", "house"],
            explanation: "'The girl dem' (plural) + 'don go house' (have gone home)."
          },
          {
            id: "p-u3-l1-q5",
            type: "multiple_choice",
            prompt: "Can 'dem' also indicate an associate group, such as 'John and his friends'?",
            options: [
              "Yes! 'John dem' means John and his crew/associates",
              "No, it can only apply to inanimate objects",
              "It only applies to numbers greater than one hundred",
              "It is considered an insult to names"
            ],
            correctAnswer: "Yes! 'John dem' means John and his crew/associates",
            explanation: "Associative pluralization: 'John dem' means John and the people with him."
          }
        ]
      },
      {
        id: "p-u3-l2",
        title: "Lesson 2: Possession & Personal Introduction",
        description: "Express ownership using 'im' or 'get' and deliver a complete 4-sentence oral introduction of yourself.",
        xp: 25,
        questions: [
          {
            id: "p-u3-l2-q1",
            type: "multiple_choice",
            prompt: "How do you say 'John's car' in Nigerian Pidgin?",
            options: [
              "John im car (or 'The car wey John get')",
              "John's car with apostrophe",
              "Car of John person",
              "John car-ship"
            ],
            correctAnswer: "John im car (or 'The car wey John get')",
            explanation: "NPE expresses possession with the possessive pronoun 'im' (e.g. John im car) or via the verb 'get' (have/own)."
          },
          {
            id: "p-u3-l2-q2",
            type: "scramble",
            prompt: "Assemble your intro: 'My name is Chidi and I live in Lagos'",
            tokens: ["My", "name", "na", "Chidi,", "I", "dey", "stay", "for", "Lagos"],
            correctTokens: ["My", "name", "na", "Chidi,", "I", "dey", "stay", "for", "Lagos"],
            explanation: "'My name na...' + 'I dey stay for...' is the standard self-introduction formula."
          },
          {
            id: "p-u3-l2-q3",
            type: "matching",
            prompt: "Match the possessive phrases with their meanings:",
            pairs: [
              { native: "My mama im food", english: "My mother's cooking / food" },
              { native: "The house wey I get", english: "The house that I own" },
              { native: "Our school bus", english: "The bus belonging to our school" },
              { native: "Im phone don lost", english: "His / Her phone is lost" }
            ]
          },
          {
            id: "p-u3-l2-q4",
            type: "fill_blank",
            sentence: "My brother ___ two motor. (owns / has)",
            missingWord: "get",
            options: ["get", "dey", "make", "take"],
            correctAnswer: "get",
            explanation: "'Get' functions as 'have/possess' in NPE."
          },
          {
            id: "p-u3-l2-q5",
            type: "audio_listen",
            phrase: "I dey work for bank",
            prompt: "Listen to the introduction. What does the speaker do?",
            options: [
              "I work at a bank",
              "I am walking along the river bank",
              "I want to withdraw cash",
              "The bank is currently closed"
            ],
            correctAnswer: "I work at a bank",
            explanation: "'I dey work for bank' = I work at a financial institution."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // LEVEL 2: INTERMEDIATE (WAFARIAN / STREET SMART)
  // =========================================================================

  // -------------------------------------------------------------------------
  // Unit 4: Serial Verb Constructions (SVCs)
  // -------------------------------------------------------------------------
  {
    id: "p-unit-4",
    level: "Level 2: Intermediate (Wafarian/Street Smart)",
    title: "Unit 4: Serial Verb Constructions (SVCs)",
    subtitle: "Eliminating word-final consonant clusters, multi-verb action serialization, and high-frequency roots.",
    icon: "Compass",
    color: "#2563eb",
    lessons: [
      {
        id: "p-u4-l1",
        title: "Lesson 1: Stacking Verbs (Take... Come & Run... Go)",
        description: "Master Serial Verb Constructions (SVCs) where multiple verbs chain together without conjunctions to express a single event.",
        xp: 20,
        questions: [
          {
            id: "p-u4-l1-q1",
            type: "multiple_choice",
            prompt: "How does Nigerian Pidgin express 'Bring the chair' using a Serial Verb Construction?",
            options: [
              "Take the chair come (literally: Take the chair and come)",
              "Bringify the chair here",
              "Carry chair to here please",
              "Make you bring chair come"
            ],
            correctAnswer: "Take the chair come (literally: Take the chair and come)",
            explanation: "SVCs chain verbs together: 'Take + object + come' = Bring."
          },
          {
            id: "p-u4-l1-q2",
            type: "multiple_choice",
            prompt: "What does the serial verb phrase 'Run go' convey?",
            options: [
              "To escape or run away in a hurry",
              "To exercise slowly in the stadium",
              "To run in a circle",
              "To buy shoes"
            ],
            correctAnswer: "To escape or run away in a hurry",
            explanation: "'Run go' serializes 'run' and 'go' into a single action meaning 'escape / flee'."
          },
          {
            id: "p-u4-l1-q3",
            type: "matching",
            prompt: "Match the serial verb phrases with their English equivalents:",
            pairs: [
              { native: "Carry am go", english: "Take it away / Remove it" },
              { native: "Take am come", english: "Bring it here" },
              { native: "Throw am wey", english: "Throw it away / Discard it" },
              { native: "Talk am give am", english: "Tell him / Relay the message to him" }
            ]
          },
          {
            id: "p-u4-l1-q4",
            type: "scramble",
            prompt: "Assemble: 'Bring that food to me'",
            tokens: ["Take", "dat", "food", "come", "give", "me"],
            correctTokens: ["Take", "dat", "food", "come", "give", "me"],
            explanation: "'Take dat food come give me' is a classic 3-verb serial chain: Take + Come + Give."
          },
          {
            id: "p-u4-l1-q5",
            type: "fill_blank",
            sentence: "Abeg carry this dirty ___ wey. (throw away)",
            missingWord: "throw",
            options: ["throw", "drop", "keep", "hide"],
            correctAnswer: "throw",
            explanation: "'Carry... throw wey' = Discard/throw away."
          }
        ]
      },
      {
        id: "p-u4-l2",
        title: "Lesson 2: Consonant Cluster Reduction & High-Frequency Roots",
        description: "Understand phonological reduction (Past → Pas, Hand → Han) and street vocabulary (Gbege, Motto, Vamoose).",
        xp: 25,
        questions: [
          {
            id: "p-u4-l2-q1",
            type: "multiple_choice",
            prompt: "What happens to word-final consonant clusters like '-st' in 'past' or '-nd' in 'hand' in casual NPE?",
            options: [
              "The final consonant is dropped (past → pas, hand → han, first → fust)",
              "An extra 'o' vowel is added to both consonants",
              "The whole word is replaced by French",
              "The word is whispered"
            ],
            correctAnswer: "The final consonant is dropped (past → pas, hand → han, first → fust)",
            explanation: "NPE phonotactics disfavor heavy syllable-final consonant clusters, simplifying them to single consonants."
          },
          {
            id: "p-u4-l2-q2",
            type: "multiple_choice",
            prompt: "What does the high-frequency word 'Gbege' mean in street parlance?",
            options: [
              "Serious trouble, fight, or complicated dispute",
              "Delicious spicy jollof rice",
              "A brand new pair of sneakers",
              "An easy exam with high marks"
            ],
            correctAnswer: "Serious trouble, fight, or complicated dispute",
            explanation: "'Gbege' (also 'wahala' or 'palava') signifies major trouble or turmoil."
          },
          {
            id: "p-u4-l2-q3",
            type: "matching",
            prompt: "Match the street roots with their meanings:",
            pairs: [
              { native: "Gbege", english: "Trouble / Big issue" },
              { native: "Motto", english: "Vehicle / Car" },
              { native: "Vamoose", english: "Depart quickly / Disperse" },
              { native: "Chop", english: "Eat / Embezzle funds" }
            ]
          },
          {
            id: "p-u4-l2-q4",
            type: "audio_listen",
            phrase: "Oya make we vamoose",
            prompt: "Listen to the phrase. What is being urged?",
            options: [
              "Let us hurry and leave this location immediately",
              "Let us order some cold drinks",
              "Please turn down the music volume",
              "Wait for the next bus to arrive"
            ],
            correctAnswer: "Let us hurry and leave this location immediately",
            explanation: "'Oya make we vamoose' urges prompt departure."
          },
          {
            id: "p-u4-l2-q5",
            type: "fill_blank",
            sentence: "Big ___ don burst for the party! (trouble)",
            missingWord: "gbege",
            options: ["gbege", "motto", "pas", "han"],
            correctAnswer: "gbege",
            explanation: "'Gbege don burst' = Catastrophic trouble has erupted."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Unit 5: Advanced Tense & Aspect Structuring
  // -------------------------------------------------------------------------
  {
    id: "p-unit-5",
    level: "Level 2: Intermediate (Wafarian/Street Smart)",
    title: "Unit 5: Advanced Tense & Aspect Structuring",
    subtitle: "Future marker 'Go', perfective completion 'Don', habitual 'Dey always', and market banter comprehension.",
    icon: "Utensils",
    color: "#3b82f6",
    lessons: [
      {
        id: "p-u5-l1",
        title: "Lesson 1: Mastering 'Don' (Perfective) & 'Go' (Future)",
        description: "Differentiate between completed actions with 'Don' and anticipated events with 'Go'.",
        xp: 20,
        questions: [
          {
            id: "p-u5-l1-q1",
            type: "multiple_choice",
            prompt: "What does the sentence 'I don chop' mean in Nigerian Pidgin?",
            options: [
              "I have eaten (the action is already completed)",
              "I will eat later tonight",
              "I am currently eating right now",
              "I don't like food"
            ],
            correctAnswer: "I have eaten (the action is already completed)",
            explanation: "'Don' marks the perfective aspect, showing an action is completed."
          },
          {
            id: "p-u2-l1-q2-dup",
            type: "multiple_choice",
            prompt: "How do you say 'I will see you tomorrow' using the future marker?",
            options: [
              "I go see you tomorrow",
              "I don see you tomorrow",
              "I dey see you tomorrow",
              "I see you finish tomorrow"
            ],
            correctAnswer: "I go see you tomorrow",
            explanation: "'Go' marks future tense: 'I go see you' = I shall see you."
          },
          {
            id: "p-u5-l1-q3",
            type: "matching",
            prompt: "Match the temporal markers with their functions:",
            pairs: [
              { native: "Dey (I dey read)", english: "Present continuous (I am reading)" },
              { native: "Don (I don read)", english: "Perfective completed (I have read)" },
              { native: "Go (I go read)", english: "Future auxiliary (I will read)" },
              { native: "Dey always (I dey always read)", english: "Habitual regular action (I always read)" }
            ]
          },
          {
            id: "p-u5-l1-q4",
            type: "fill_blank",
            sentence: "We ___ travel to Abuja next Monday. (future: will)",
            missingWord: "go",
            options: ["go", "don", "dey", "been"],
            correctAnswer: "go",
            explanation: "'Go' indicates future intention."
          },
          {
            id: "p-u5-l1-q5",
            type: "scramble",
            prompt: "Assemble: 'The food has finished completely'",
            tokens: ["The", "food", "don", "finish", "kpata-kpata", "go"],
            correctTokens: ["The", "food", "don", "finish", "kpata-kpata"],
            explanation: "'Don finish' + ideophone 'kpata-kpata' = finished completely."
          }
        ]
      },
      {
        id: "p-u5-l2",
        title: "Lesson 2: Decoding Radio Commentary & Market Banter",
        description: "Analyze rapid everyday market interactions, price negotiations, and street commentary.",
        xp: 25,
        questions: [
          {
            id: "p-u5-l2-q1",
            type: "multiple_choice",
            prompt: "In market negotiation, what does the buyer mean when they say 'Customer, cut the price small for me'?",
            options: [
              "Please give me a small discount on the item",
              "Please slice the fruit into small pieces",
              "Cut the currency note in half",
              "I am not interested in buying"
            ],
            correctAnswer: "Please give me a small discount on the item",
            explanation: "'Cut the price' is standard marketplace idiom for discounting."
          },
          {
            id: "p-u5-l2-q2",
            type: "multiple_choice",
            prompt: "What is the meaning of 'Dey play!' when uttered playfully in commentary?",
            options: [
              "Continue taking things lightly and you will face the harsh consequences",
              "Please start the video game match now",
              "Listen to the musical instrument",
              "You are playing football very well"
            ],
            correctAnswer: "Continue taking things lightly and you will face the harsh consequences",
            explanation: "'Dey play!' is a modern idiom warning against complacency."
          },
          {
            id: "p-u5-l2-q3",
            type: "matching",
            prompt: "Match market phrases with their interpretations:",
            pairs: [
              { native: "How much last?", english: "What is your final rock-bottom price?" },
              { native: "Add jara give me", english: "Add a free extra bonus on top of my purchase" },
              { native: "Market dry today", english: "Sales and foot traffic are slow today" },
              { native: "Your money complete", english: "Your payment is fully settled" }
            ]
          },
          {
            id: "p-u5-l2-q4",
            type: "audio_listen",
            phrase: "Madam, add jara for me abeg",
            prompt: "Listen to the customer at the vegetable stall. What are they requesting?",
            options: [
              "Add an extra bonus handful of peppers as courtesy",
              "Wrap the items in two plastic bags",
              "Call the manager of the stall",
              "Give me a receipt for taxes"
            ],
            correctAnswer: "Add an extra bonus handful of peppers as courtesy",
            explanation: "'Jara' means an extra complimentary portion added to a purchase."
          },
          {
            id: "p-u5-l2-q5",
            type: "fill_blank",
            sentence: "Madam, how much ___ for this basket of tomatoes? (final price)",
            missingWord: "last",
            options: ["last", "first", "big", "small"],
            correctAnswer: "last",
            explanation: "'How much last' asks for the definitive bottom price."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Unit 6: Comparisons & Functional Expressions
  // -------------------------------------------------------------------------
  {
    id: "p-unit-6",
    level: "Level 2: Intermediate (Wafarian/Street Smart)",
    title: "Unit 6: Comparisons & Functional Expressions",
    subtitle: "Comparative degrees using 'Pass', regional accents (Warri, Lagos, PH), and composing social captions.",
    icon: "GraduationCap",
    color: "#6366f1",
    lessons: [
      {
        id: "p-u6-l1",
        title: "Lesson 1: Comparative Degrees with 'Pass'",
        description: "Express superiority, size, and comparative traits using the versatile verb 'Pass'.",
        xp: 20,
        questions: [
          {
            id: "p-u6-l1-q1",
            type: "multiple_choice",
            prompt: "How does Nigerian Pidgin express 'I am taller than him'?",
            options: [
              "I tall pass am",
              "I tall more than him",
              "I am taller to him",
              "Me tall over am"
            ],
            correctAnswer: "I tall pass am",
            explanation: "'Pass' functions as the comparative marker: Adjective + 'pass' + object (e.g. tall pass am = taller than him)."
          },
          {
            id: "p-u6-l1-q2",
            type: "multiple_choice",
            prompt: "How would you express 'This phone is more expensive than that one'?",
            options: [
              "This phone cost pass that one",
              "This phone expensive past that one",
              "This phone get money pass",
              "This phone high more"
            ],
            correctAnswer: "This phone cost pass that one",
            explanation: "'Cost pass' = More expensive than."
          },
          {
            id: "p-u6-l1-q3",
            type: "matching",
            prompt: "Match the comparisons with their English meanings:",
            pairs: [
              { native: "Im sweet pass honey", english: "It is sweeter than honey" },
              { native: "This car fast pass that one", english: "This car is faster than that one" },
              { native: "E heavy pass my power", english: "It is heavier than my strength can carry" },
              { native: "She sabi cook pass everybody", english: "She cooks better than everyone else" }
            ]
          },
          {
            id: "p-u6-l1-q4",
            type: "fill_blank",
            sentence: "My new school fine ___ the former one. (more beautiful than)",
            missingWord: "pass",
            options: ["pass", "cross", "over", "jump"],
            correctAnswer: "pass",
            explanation: "'Fine pass' = prettier/more beautiful than."
          },
          {
            id: "p-u6-l1-q5",
            type: "scramble",
            prompt: "Assemble: 'Wisdom is greater than money'",
            tokens: ["Sense", "big", "pass", "money", "well"],
            correctTokens: ["Sense", "big", "pass", "money"],
            explanation: "'Sense big pass money' translates directly to 'Wisdom surpasses wealth'."
          }
        ]
      },
      {
        id: "p-u6-l2",
        title: "Lesson 2: Regional Accents & Social Media Composition",
        description: "Distinguish between Lagos, Warri, and Port Harcourt cadences, and compose standardized intermediate captions.",
        xp: 25,
        questions: [
          {
            id: "p-u6-l2-q1",
            type: "multiple_choice",
            prompt: "Which Nigerian city is famed as the undisputed capital of lightning-fast, highly metaphorical, expressive Pidgin?",
            options: [
              "Warri (Delta State)",
              "London",
              "Pretoria",
              "Kano"
            ],
            correctAnswer: "Warri (Delta State)",
            explanation: "Warri is culturally celebrated as the cradle of vibrant, rapid-fire, metaphor-rich Nigerian Pidgin (Waffi)."
          },
          {
            id: "p-u6-l2-q2",
            type: "multiple_choice",
            prompt: "Which phrase is common in Port Harcourt (PH) street speech to express genuine surprise or affirmation?",
            options: [
              "'No be small ting!' / 'As in ehn!'",
              "'Cheerio mate!'",
              "'Oui bien sûr!'",
              "'Very well sir!'"
            ],
            correctAnswer: "'No be small ting!' / 'As in ehn!'",
            explanation: "'No be small ting' emphasizes that an occurrence is momentous."
          },
          {
            id: "p-u6-l2-q3",
            type: "matching",
            prompt: "Match the popular social media captions with their meanings:",
            pairs: [
              { native: "Soft work only, no stress", english: "Effortless success, zero unnecessary stress" },
              { native: "We outside!", english: "We are actively out in public enjoying nightlife" },
              { native: "God don do am", english: "God has brought this triumph to pass" },
              { native: "Who dey check am?", english: "Nobody can challenge our standard!" }
            ]
          },
          {
            id: "p-u6-l2-q4",
            type: "audio_listen",
            phrase: "Waffi no dey carry last",
            prompt: "Listen to the famous regional maxim. What does it proudly assert?",
            options: [
              "Warri people never come last; they are always resilient winners",
              "The train to Warri is delayed",
              "Everyone must carry their own luggage",
              "Do not forget your ticket"
            ],
            correctAnswer: "Warri people never come last; they are always resilient winners",
            explanation: "'No dey carry last' is the premier Nigerian anthem of excellence and resilience."
          },
          {
            id: "p-u6-l2-q5",
            type: "scramble",
            prompt: "Assemble caption: 'Hard work brings good results'",
            tokens: ["Hard", "work", "dey", "bring", "better", "result"],
            correctTokens: ["Hard", "work", "dey", "bring", "better", "result"],
            explanation: "'Hard work dey bring better result' is an uplifting motivational caption."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // LEVEL 3: UPPER-INTERMEDIATE (NAIJA FLOW)
  // =========================================================================

  // -------------------------------------------------------------------------
  // Unit 7: Conditionals, Relatives & Linkers
  // -------------------------------------------------------------------------
  {
    id: "p-unit-7",
    level: "Level 3: Upper-Intermediate (Naija Flow)",
    title: "Unit 7: Conditionals, Relatives & Linkers",
    subtitle: "Complex conditionals ('If to say'), the universal relative pronoun 'Wey', and Afrobeat lyric poetry analysis.",
    icon: "Layers",
    color: "#8b5cf6",
    lessons: [
      {
        id: "p-u7-l1",
        title: "Lesson 1: Complex Conditionals ('If to say...')",
        description: "Form hypothetical past and counterfactual conditionals using 'If to say' and modal 'for'.",
        xp: 20,
        questions: [
          {
            id: "p-u7-l1-q1",
            type: "multiple_choice",
            prompt: "How does Nigerian Pidgin express 'Had I known, I would not have gone'?",
            options: [
              "If to say I know, I for no go",
              "If I knowing, I no go go",
              "If had I known, me no would go",
              "Suppose I know, I did not went"
            ],
            correctAnswer: "If to say I know, I for no go",
            explanation: "'If to say' (counterfactual conditional) + 'for no go' (would not have gone) is the standard structure."
          },
          {
            id: "p-u7-l1-q2",
            type: "multiple_choice",
            prompt: "What is the function of the relative pronoun 'Wey' in Nigerian Pidgin?",
            options: [
              "It serves as an all-inclusive relative pronoun replacing who, which, that, and whom",
              "It only means 'Where'",
              "It is an exclamation of grief",
              "It asks for the time"
            ],
            correctAnswer: "It serves as an all-inclusive relative pronoun replacing who, which, that, and whom",
            explanation: "'Wey' universally introduces relative clauses: 'The motor wey I buy' = The car that I bought."
          },
          {
            id: "p-u7-l1-q3",
            type: "matching",
            prompt: "Match the relative sentences with their English equivalents:",
            pairs: [
              { native: "The boy wey score goal", english: "The boy who scored the goal" },
              { native: "The house wey burn", english: "The house which caught fire" },
              { native: "The person wey call me", english: "The person who telephoned me" },
              { native: "The food wey you cook", english: "The food that you prepared" }
            ]
          },
          {
            id: "p-u7-l1-q4",
            type: "fill_blank",
            sentence: "If to say rain no fall, we ___ play ball. (would have)",
            missingWord: "for",
            options: ["for", "dey", "make", "take"],
            correctAnswer: "for",
            explanation: "'For + verb' expresses conditional modal outcome (would have played)."
          },
          {
            id: "p-u7-l1-q5",
            type: "scramble",
            prompt: "Assemble: 'The man who came yesterday is my brother'",
            tokens: ["The", "man", "wey", "come", "yesterday", "na", "my", "brother"],
            correctTokens: ["The", "man", "wey", "come", "yesterday", "na", "my", "brother"],
            explanation: "'The man wey come yesterday na my brother' combines relative 'wey' with equative 'na'."
          }
        ]
      },
      {
        id: "p-u7-l2",
        title: "Lesson 2: Afrobeat Lyricism & Literary Analysis",
        description: "Analyze the social and political poetic structures of iconic Nigerian Pidgin lyrics from Fela Kuti to modern Afrobeats.",
        xp: 25,
        questions: [
          {
            id: "p-u7-l2-q1",
            type: "multiple_choice",
            prompt: "In Fela Anikulapo Kuti's iconic song 'Zombie', how is Pidgin used as a tool of social critique?",
            options: [
              "To satirize mindless obedience to authoritarian orders ('Zombie no go go unless you tell am to go')",
              "To teach biology and anatomy to children",
              "To praise corrupt politicians",
              "To advertise foreign luxury products"
            ],
            correctAnswer: "To satirize mindless obedience to authoritarian orders ('Zombie no go go unless you tell am to go')",
            explanation: "Fela utilized Pidgin to communicate biting sociopolitical satire universally understood across classes."
          },
          {
            id: "p-u7-l2-q2",
            type: "multiple_choice",
            prompt: "In Burna Boy's lyrics 'Suffering and smiling', which historical Pidgin literary tradition does he invoke?",
            options: [
              "Fela Kuti's classic critique of public complacency amid hardship",
              "Victorian Elizabethan drama",
              "American country music tropes",
              "Ancient Roman poetry"
            ],
            correctAnswer: "Fela Kuti's classic critique of public complacency amid hardship",
            explanation: "'Suffer suffer for world, enjoy for heaven' is rooted in Fela's 1978 critique 'Shuffering and Shmiling'."
          },
          {
            id: "p-u7-l2-q3",
            type: "matching",
            prompt: "Match the musical lines with their philosophical messages:",
            pairs: [
              { native: "Water, e no get enemy", english: "Water is indispensable; everyone needs it to survive" },
              { native: "Trouble sleep, yanga go wake am", english: "Unprovoked meddling causes dangerous retaliation" },
              { native: "No agreement today, no agreement tomorrow", english: "Uncompromising refusal to accept injustice" },
              { native: "I dey on my lane", english: "Mindful focus on one's own affairs and destiny" }
            ]
          },
          {
            id: "p-u7-l2-q4",
            type: "audio_listen",
            phrase: "Trouble sleep, yanga go wake am",
            prompt: "Listen to the proverbial lyric. What wisdom is being conveyed?",
            options: [
              "Do not go looking for unnecessary trouble when things are peaceful",
              "You must set an alarm to wake up early",
              "Always sleep with one eye open",
              "Do not dance late into the night"
            ],
            correctAnswer: "Do not go looking for unnecessary trouble when things are peaceful",
            explanation: "'Yanga' (pride/provocation) waking sleeping trouble means inviting unnecessary conflict."
          },
          {
            id: "p-u7-l2-q5",
            type: "fill_blank",
            sentence: "Water, e ___ get enemy. (does not have)",
            missingWord: "no",
            options: ["no", "never", "not", "none"],
            correctAnswer: "no",
            explanation: "Fela's classic: 'Water, e no get enemy'."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Unit 8: Phrasal Idioms & Proverbs (Aproko Studies)
  // -------------------------------------------------------------------------
  {
    id: "p-unit-8",
    level: "Level 3: Upper-Intermediate (Naija Flow)",
    title: "Unit 8: Phrasal Idioms & Proverbs (Aproko Studies)",
    subtitle: "Focus marking with 'Na', sentence clefting for emphasis, and deep classical proverbs.",
    icon: "Flame",
    color: "#ec4899",
    lessons: [
      {
        id: "p-u8-l1",
        title: "Lesson 1: Focus Marking & Clefting with 'Na'",
        description: "Emphasize specific sentence elements (subjects, objects, or actions) using the powerful focus marker 'Na'.",
        xp: 20,
        questions: [
          {
            id: "p-u8-l1-q1",
            type: "multiple_choice",
            prompt: "What is the role of the particle 'Na' in 'Na me do am'?",
            options: [
              "It functions as a cleft focus marker meaning 'It was I who did it'",
              "It asks an angry question",
              "It indicates future possibility",
              "It means 'No'"
            ],
            correctAnswer: "It functions as a cleft focus marker meaning 'It was I who did it'",
            explanation: "'Na' introduces focused elements in cleft sentences (e.g. Na yesterday = It was yesterday; Na John = It was John)."
          },
          {
            id: "p-u8-l1-q2",
            type: "multiple_choice",
            prompt: "How would you cleft the sentence 'We bought the car' to emphasize 'the car'?",
            options: [
              "Na the car wey we buy",
              "The car was bought by we",
              "We car-buying do",
              "Car is what we buyed"
            ],
            correctAnswer: "Na the car wey we buy",
            explanation: "'Na [Object] wey [Subject] [Verb]' is the quintessential clefting pattern in NPE."
          },
          {
            id: "p-u8-l1-q3",
            type: "matching",
            prompt: "Match the clefted focus sentences with their meanings:",
            pairs: [
              { native: "Na today?", english: "Has this just begun today? (No, it is an old habit)" },
              { native: "Na so life be", english: "That is simply how life is" },
              { native: "Na you sabi", english: "That is your own concern / decision" },
              { native: "Na God get power", english: "Only God possesses ultimate power" }
            ]
          },
          {
            id: "p-u8-l1-q4",
            type: "fill_blank",
            sentence: "___ my mother cook this sweet jollof rice! (It was)",
            missingWord: "Na",
            options: ["Na", "Dey", "No", "So"],
            correctAnswer: "Na",
            explanation: "'Na' focuses the subject: 'Na my mother cook...' = It was my mother who cooked."
          },
          {
            id: "p-u8-l1-q5",
            type: "scramble",
            prompt: "Assemble: 'It is truth that I am speaking'",
            tokens: ["Na", "truth", "I", "dey", "talk", "so", "well"],
            correctTokens: ["Na", "truth", "I", "dey", "talk"],
            explanation: "'Na truth I dey talk' = It is the plain truth that I am uttering."
          }
        ]
      },
      {
        id: "p-u8-l2",
        title: "Lesson 2: Deep Idiomatic Proverbs (Aproko Studies)",
        description: "Decode timeless Nigerian proverbs and analyze socio-political commentary from Pidgin news broadcasts.",
        xp: 25,
        questions: [
          {
            id: "p-u8-l2-q1",
            type: "multiple_choice",
            prompt: "What is the deep philosophical meaning of the proverb 'Water don pass garri'?",
            options: [
              "A crisis has escalated beyond repair or manageable control",
              "There is too much water in the kitchen kettle",
              "Dinner is ready to be served",
              "The cost of food has dropped"
            ],
            correctAnswer: "A crisis has escalated beyond repair or manageable control",
            explanation: "When you pour too much water into garri (cassava flakes), it turns into watery soup; thus, matters are out of hand."
          },
          {
            id: "p-u8-l2-q2",
            type: "multiple_choice",
            prompt: "What does the proverb 'Cow wey no get tail, na God dey drive fly for am' mean?",
            options: [
              "God protects and provides for the helpless and defenseless",
              "Farmers should buy cows with long tails",
              "Insects are dangerous to livestock",
              "It is going to rain heavily today"
            ],
            correctAnswer: "God protects and provides for the helpless and defenseless",
            explanation: "This classic proverb assures that divine providence watches over the vulnerable."
          },
          {
            id: "p-u8-l2-q3",
            type: "matching",
            prompt: "Match the iconic proverbs with their English interpretations:",
            pairs: [
              { native: "Monkey dey work, baboon dey chop", english: "One toils while another unfairly profits" },
              { native: "No hurry in life", english: "Patience and steady work yield lasting success" },
              { native: "Every day na for thief, one day for owner", english: "Wrongdoers will inevitably be caught" },
              { native: "Pikin wey say im mama no go sleep...", english: "Troublemakers will also find no rest" }
            ]
          },
          {
            id: "p-u8-l2-q4",
            type: "audio_listen",
            phrase: "Every day na for the thief, one day na for owner",
            prompt: "Listen to the radio moral proverb. What ethical lesson does it impart?",
            options: [
              "Justice is inevitable; impunity will eventually end in exposure",
              "Always lock your gate at night",
              "Thieves operate only on weekdays",
              "Police work requires daily patrols"
            ],
            correctAnswer: "Justice is inevitable; impunity will eventually end in exposure",
            explanation: "The thief may have many days of luck, but the rightful owner will triumph eventually."
          },
          {
            id: "p-u8-l2-q5",
            type: "scramble",
            prompt: "Assemble: 'One person toils while another person eats'",
            tokens: ["Monkey", "dey", "work,", "baboon", "dey", "chop"],
            correctTokens: ["Monkey", "dey", "work,", "baboon", "dey", "chop"],
            explanation: "'Monkey dey work, baboon dey chop' is the master proverb of economic injustice."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // LEVEL 4: ADVANCED (YARN SPECIALIST)
  // =========================================================================

  // -------------------------------------------------------------------------
  // Unit 9: Sociolinguistic Code-Switching & Registers
  // -------------------------------------------------------------------------
  {
    id: "p-unit-9",
    level: "Level 4: Advanced (Yarn Specialist)",
    title: "Unit 9: Sociolinguistic Code-Switching & Registers",
    subtitle: "Moving seamlessly between English and NPE registers; translating political, economic, and legal discourse.",
    icon: "Award",
    color: "#f59e0b",
    lessons: [
      {
        id: "p-u9-l1",
        title: "Lesson 1: Code-Switching & Diglossic Fluency",
        description: "Master the art of alternating between formal English and NPE based on audience, social setting, and emotional intent.",
        xp: 20,
        questions: [
          {
            id: "p-u9-l1-q1",
            type: "multiple_choice",
            prompt: "What is 'Code-switching' in the context of Nigerian linguistic dynamics?",
            options: [
              "Seamlessly alternating between Standard English and Nigerian Pidgin depending on the conversational register and audience",
              "Changing your internet Wi-Fi password frequently",
              "Speaking in Morse code over the radio",
              "Translating Russian into Spanish"
            ],
            correctAnswer: "Seamlessly alternating between Standard English and Nigerian Pidgin depending on the conversational register and audience",
            explanation: "Educated speakers use code-switching to navigate formal institutions while maintaining authentic grassroots warmth."
          },
          {
            id: "p-u9-l1-q2",
            type: "multiple_choice",
            prompt: "How does an executive or politician establish instant rapport with a grassroots audience after delivering a formal speech?",
            options: [
              "By transitioning with a warm Pidgin ice-breaker like: 'Make I yarn una the real truth now...'",
              "By speaking Latin quotes",
              "By speaking complete silence",
              "By leaving the podium without waving"
            ],
            correctAnswer: "By transitioning with a warm Pidgin ice-breaker like: 'Make I yarn una the real truth now...'",
            explanation: "Switching to Pidgin conveys sincerity, empathy, and shared cultural identity."
          },
          {
            id: "p-u9-l1-q3",
            type: "matching",
            prompt: "Match the formal English concepts with their eloquent NPE translations:",
            pairs: [
              { native: "National Budget Allocation", english: "How government share the country money" },
              { native: "Subsidies have been removed", english: "Government don remove hand from fuel subsidy" },
              { native: "Gross Domestic Product growth", english: "How the country economy dey grow well" },
              { native: "Electoral tribunal verdict", english: "Court judgment on who win election" }
            ]
          },
          {
            id: "p-u9-l1-q4",
            type: "scramble",
            prompt: "Assemble economic news: 'The inflation has caused food prices to rise'",
            tokens: ["Inflation", "don", "make", "food", "cost", "pass", "before"],
            correctTokens: ["Inflation", "don", "make", "food", "cost", "pass", "before"],
            explanation: "'Inflation don make food cost pass before' translates complex economic strain into lucid Pidgin."
          },
          {
            id: "p-u9-l1-q5",
            type: "fill_blank",
            sentence: "Make we discuss this matter ___ on facts. (based on)",
            missingWord: "base",
            options: ["base", "stand", "sit", "look"],
            correctAnswer: "base",
            explanation: "'Base on...' is common argumentative phrasing in formal NPE."
          }
        ]
      },
      {
        id: "p-u9-l2",
        title: "Lesson 2: Broadcast News Translation (Wazobia Standard)",
        description: "Translate formal journalistic reports into standardized, accessible, respectful Nigerian Pidgin broadcasts.",
        xp: 25,
        questions: [
          {
            id: "p-u9-l2-q1",
            type: "multiple_choice",
            prompt: "How does Wazobia FM or BBC News Pidgin translate: 'The Central Bank has raised the interest rate'?",
            options: [
              "'Central Bank don increase the interest rate wey banks dey charge'",
              "'Bank people don take all the money travel'",
              "'Dollar don beat Naira for market'",
              "'Nobody fit borrow money again'"
            ],
            correctAnswer: "'Central Bank don increase the interest rate wey banks dey charge'",
            explanation: "BBC News Pidgin utilizes lucid, standardized NPE that preserves technical precision without jargon."
          },
          {
            id: "p-u9-l2-q2",
            type: "multiple_choice",
            prompt: "How do you translate: 'The suspects were apprehended by law enforcement officers'?",
            options: [
              "'Police don arrest the people wey dem suspect say do the crime'",
              "'Police run go market go buy shoe'",
              "'The thieves jump fence enter forest'",
              "'Government say everybody must sleep'"
            ],
            correctAnswer: "'Police don arrest the people wey dem suspect say do the crime'",
            explanation: "Active inversion turns passive voice ('were apprehended') into direct, punchy NPE syntax."
          },
          {
            id: "p-u9-l2-q3",
            type: "matching",
            prompt: "Match the legal/news terms with their NPE definitions:",
            pairs: [
              { native: "Suspect dem", english: "Accused persons under investigation" },
              { native: "Court order", english: "Wetin judge talk say must happen" },
              { native: "Public holiday", english: "Day wey government say make nobody go work" },
              { native: "Peace accord", english: "Agreement say no fight or war go happen" }
            ]
          },
          {
            id: "p-u9-l2-q4",
            type: "audio_listen",
            phrase: "BBC News Pidgin: Make we take a look at the headline dem",
            prompt: "Listen to the news bulletin opening. What is being introduced?",
            options: [
              "Let us review the major news headlines of the day",
              "Let us read a short bedtime story",
              "The television broadcast has ended",
              "Music will play for the next one hour"
            ],
            correctAnswer: "Let us review the major news headlines of the day",
            explanation: "'Headline dem' (plural headlines) signals the top news summary."
          },
          {
            id: "p-u9-l2-q5",
            type: "scramble",
            prompt: "Assemble news line: 'The President has signed the new education bill'",
            tokens: ["President", "don", "sign", "the", "new", "law", "for", "school"],
            correctTokens: ["President", "don", "sign", "the", "new", "law", "for", "school"],
            explanation: "Direct translation of presidential assent into clear NPE."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------------------
  // Unit 10: Rhetoric, Satire & Advanced Creative Arts
  // -------------------------------------------------------------------------
  {
    id: "p-unit-10",
    level: "Level 4: Advanced (Yarn Specialist)",
    title: "Unit 10: Rhetoric, Satire & Advanced Creative Arts",
    subtitle: "High oratorical debate, stand-up comedy inflection, drama scripting, and comprehensive summative exam.",
    icon: "Crown",
    color: "#d97706",
    lessons: [
      {
        id: "p-u1-l1-rev",
        title: "Lesson 1: Public Oratory, Satire & Stand-up Delivery",
        description: "Analyze how comic masters and dramatists use timing, pitch variation, and rhetorical devices in NPE.",
        xp: 25,
        questions: [
          {
            id: "p-u10-l1-q1",
            type: "multiple_choice",
            prompt: "What makes Nigerian Pidgin stand-up comedy (e.g. Basketmouth, Bovi, Ali Baba) so intellectually compelling across Africa?",
            options: [
              "Its ability to deliver razor-sharp societal critiques through nuanced rhythm, self-deprecating humor, and shared cultural archetypes",
              "Because it uses no words at all",
              "Because comedians only speak French",
              "Because it only discusses cooking recipes"
            ],
            correctAnswer: "Its ability to deliver razor-sharp societal critiques through nuanced rhythm, self-deprecating humor, and shared cultural archetypes",
            explanation: "NPE oratory uses sophisticated timing, hyperbole, and sharp social commentary."
          },
          {
            id: "p-u10-l1-q2",
            type: "multiple_choice",
            prompt: "What does the rhetorical tag 'I beg you, no be so?' accomplish at the conclusion of an argument?",
            options: [
              "It invites unanimous consensus and affirms the obvious truth of the speaker's premise",
              "It insults the audience",
              "It shows that the speaker is confused",
              "It signals that the debate has been cancelled"
            ],
            correctAnswer: "It invites unanimous consensus and affirms the obvious truth of the speaker's premise",
            explanation: "'No be so?' (Is it not so?) invites active affirmation from listeners."
          },
          {
            id: "p-u10-l1-q3",
            type: "matching",
            prompt: "Match the rhetorical expressions with their debate functions:",
            pairs: [
              { native: "Look am well well...", english: "Examine the evidence closely and objectively" },
              { native: "Base on logic...", english: "Arguing from rational, structured deductions" },
              { native: "Make we talk true...", english: "Let us dispense with pretenses and speak plainly" },
              { native: "The matter clear...", english: "The conclusion is self-evident and unambiguous" }
            ]
          },
          {
            id: "p-u10-l1-q4",
            type: "scramble",
            prompt: "Assemble oratorical appeal: 'Let us join hands together to build our nation'",
            tokens: ["Make", "we", "join", "hands", "together", "build", "our", "country"],
            correctTokens: ["Make", "we", "join", "hands", "together", "build", "our", "country"],
            explanation: "High civic oratory rendered in moving, unifying Pidgin."
          },
          {
            id: "p-u10-l1-q5",
            type: "fill_blank",
            sentence: "If we no work together, ___ go burst for all of us. (calamity/trouble)",
            missingWord: "gbege",
            options: ["gbege", "water", "food", "danfo"],
            correctAnswer: "gbege",
            explanation: "'Gbege go burst' = Catastrophic consequence."
          }
        ]
      },
      {
        id: "p-u10-l2",
        title: "Lesson 2: Summative Master Review & Fluency Checkpoint",
        description: "Synthesize phonetics, tense markers, serial verbs, conditionals, and proverbs in this comprehensive capstone.",
        xp: 30,
        isReview: true,
        questions: [
          {
            id: "p-u10-l2-q1",
            type: "multiple_choice",
            prompt: "Which pair correctly demonstrates active subject inversion for English passive voice 'The bread was eaten by them'?",
            options: [
              "'Dem don chop the bread.'",
              "'The bread was chop by dem.'",
              "'Bread eating happen by them.'",
              "'Dem dey bread chop.'"
            ],
            correctAnswer: "'Dem don chop the bread.'",
            explanation: "As established in the NERDC mapping table, NPE turns passive voice into active subject inversion with 'don'."
          },
          {
            id: "p-u10-l2-q2",
            type: "multiple_choice",
            prompt: "How does Nigerian Pidgin express future perfect tense 'I will have eaten by 4 o'clock'?",
            options: [
              "By 4 o'clock, I go don chop.",
              "By 4 o'clock, I will had chop.",
              "I go eating finish by 4 o'clock.",
              "4 o'clock go see my food."
            ],
            correctAnswer: "By 4 o'clock, I go don chop.",
            explanation: "The combination of 'Go' (future) + 'Don' (perfective completion) creates future perfect aspect."
          },
          {
            id: "p-u10-l2-q3",
            type: "matching",
            prompt: "Master Checkpoint: Match each English structure with its equivalent NPE standard:",
            pairs: [
              { native: "Active Subject Inversion", english: "Dem don chop the bread (Passive equivalent)" },
              { native: "Go don combination", english: "By 4 PM, I go don chop (Future Perfect)" },
              { native: "Universal particle 'Wey'", english: "The motto wey I buy (Relative Pronoun)" },
              { native: "Sentence tag 'Base on what?'", english: "Why did you do that? (Interrogative Marker)" }
            ]
          },
          {
            id: "p-u10-l2-q4",
            type: "audio_listen",
            phrase: "You don graduate, you be real Yarn Specialist now!",
            prompt: "Listen to your course completion conferment. What achievement is being celebrated?",
            options: [
              "You have graduated and are now an authenticated master of Nigerian Pidgin!",
              "Your library card has expired",
              "You need to pay exam fees",
              "Please repeat Level 1"
            ],
            correctAnswer: "You have graduated and are now an authenticated master of Nigerian Pidgin!",
            explanation: "'Yarn Specialist' designates Level 4 mastery of the highest order in NPE."
          },
          {
            id: "p-u10-l2-q5",
            type: "scramble",
            prompt: "Assemble final certification statement: 'I can speak and understand Pidgin very well'",
            tokens: ["I", "sabi", "speak", "and", "understand", "Pidgin", "well", "well"],
            correctTokens: ["I", "sabi", "speak", "and", "understand", "Pidgin", "well", "well"],
            explanation: "'I sabi speak and understand Pidgin well well' marks complete linguistic confidence."
          }
        ]
      }
    ]
  }
];
