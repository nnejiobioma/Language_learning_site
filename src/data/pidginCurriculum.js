// Nigerian Pidgin (West African Pidgin) Complete NERDC Standard Curriculum Bank
// Standardized according to the West African Pidgin literature standard (e.g. JW.org/wes-x-pgw, BBC News Pidgin)
// 10 Units, 21 Lessons, 20 Questions per Lesson (420 Questions Total)

export const pidginAllUnits = [
  {
    "unitId": "p-unit-1",
    "unitNumber": 1,
    "level": "Level 1: Beginner (Foundational Pikin)",
    "title": "Unit 1: Phonology & Sound Substitutions",
    "description": "Foundational phonetic shifts: dental fricative substitution (/θ/ and /ð/ to /t/ and /d/), initial /h/ dropping, 7-vowel orthography, and the core pronoun grid.",
    "lessons": [
      {
        "id": "p-u1-l1",
        "title": "Lesson 1: Dental Fricative Shift & Initial H Dropping",
        "description": "Master standard consonant sound substitutions (thing -> ting, them -> dem) and the dropping of initial 'h' (house -> ouse).",
        "completed": false,
        "questions": [
          {
            "id": "p-u1-l1-q1",
            "type": "multiple_choice",
            "prompt": "In Nigerian Pidgin phonology, how is the English voiceless dental fricative 'th' in 'thing' pronounced?",
            "options": [
              "'Ting' (the dental fricative /θ/ systematically becomes /t/)",
              "'Sing' (it turns into an /s/)",
              "'Fing' (it turns into an /f/)",
              "It remains identical to British English 'thing'"
            ],
            "correctAnswer": "'Ting' (the dental fricative /θ/ systematically becomes /t/)",
            "explanation": "West African Pidgin systematically replaces the voiceless dental fricative /θ/ with the alveolar plosive /t/ (thing -> ting, thank -> tank, three -> tree)."
          },
          {
            "id": "p-u1-l1-q2",
            "type": "multiple_choice",
            "prompt": "How does the voiced 'th' in 'them' or 'they' sound in standard Nigerian Pidgin?",
            "options": [
              "'Dem' (the voiced dental /ð/ becomes /d/)",
              "'Zem' (it becomes a /z/)",
              "'Vem' (it becomes a /v/)",
              "'Them' (no phonetic change)"
            ],
            "correctAnswer": "'Dem' (the voiced dental /ð/ becomes /d/)",
            "explanation": "The voiced dental fricative /ð/ systematically becomes /d/, producing 'dem' (them/they), 'dat' (that), and 'dis' (this)."
          },
          {
            "id": "p-u1-l1-q3",
            "type": "multiple_choice",
            "prompt": "What happens to the initial 'h' sound in words like 'house' or 'hospital' in everyday Pidgin speech?",
            "options": [
              "The initial /h/ is dropped ('ouse', 'ospital')",
              "The /h/ is intensified into a harsh guttural sound",
              "An extra 'k' is added before the /h/",
              "It is always pronounced with British RP precision"
            ],
            "correctAnswer": "The initial /h/ is dropped ('ouse', 'ospital')",
            "explanation": "NPE phonotactics frequently drops initial voiceless glottal fricatives /h/, yielding 'ouse' for house, 'ospital' for hospital, and 'ungry' for hungry."
          },
          {
            "id": "p-u1-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I want go back to my _____ (house).'",
            "options": [
              "ouse",
              "houze",
              "haus",
              "h-house"
            ],
            "correctAnswer": "ouse",
            "explanation": "With the initial /h/ dropped, 'house' is rendered as 'ouse'."
          },
          {
            "id": "p-u1-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'No worry yourself, na small _____ (thing) dey happen.'",
            "options": [
              "ting",
              "sing",
              "thingy",
              "tinng"
            ],
            "correctAnswer": "ting",
            "explanation": "'Thing' becomes 'ting' through dental fricative replacement /θ/ -> /t/."
          },
          {
            "id": "p-u1-l1-q6",
            "type": "multiple_choice",
            "prompt": "How is the English word 'three' pronounced in Pidgin when counting items?",
            "options": [
              "'Tree'",
              "'Free'",
              "'Sree'",
              "'Tiri'"
            ],
            "correctAnswer": "'Tree'",
            "explanation": "'Three' shifts phonetically to 'tree' (/θriː/ -> /tri/). E.g. 'Give me tree bottle of water.'"
          },
          {
            "id": "p-u1-l1-q7",
            "type": "multiple_choice",
            "prompt": "How does the English word 'think' appear in spoken Nigerian Pidgin?",
            "options": [
              "'Tink'",
              "'Fink'",
              "'Sink'",
              "'Chink'"
            ],
            "correctAnswer": "'Tink'",
            "explanation": "'Think' becomes 'tink' (e.g. 'Wetin you tink say make we do?')."
          },
          {
            "id": "p-u1-l1-q8",
            "type": "multiple_choice",
            "prompt": "How is 'thank you' typically rendered in natural Pidgin interaction?",
            "options": [
              "'Tank you' or 'Tank you well-well'",
              "'Sank you so much'",
              "'Fank you kindly'",
              "'Grace unto you'"
            ],
            "correctAnswer": "'Tank you' or 'Tank you well-well'",
            "explanation": "Voiceless /θ/ becomes /t/ ('tank you'), often doubled with 'well-well' for gratitude."
          },
          {
            "id": "p-u1-l1-q9",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Give _____ (them) their books.'",
            "options": [
              "dem",
              "zem",
              "dey",
              "dema"
            ],
            "correctAnswer": "dem",
            "explanation": "The object pronoun 'them' is rendered as 'dem'."
          },
          {
            "id": "p-u1-l1-q10",
            "type": "multiple_choice",
            "prompt": "In the word 'thief', how is the initial sound transformed in Pidgin?",
            "options": [
              "It becomes 'tief'",
              "It becomes 'fief'",
              "It becomes 'sief'",
              "It becomes 'lief'"
            ],
            "correctAnswer": "It becomes 'tief'",
            "explanation": "'Thief' is pronounced and written as 'tief' (/tiːf/)."
          },
          {
            "id": "p-u1-l1-q11",
            "type": "multiple_choice",
            "prompt": "Which of the following demonstrates initial /h/ dropping in the word 'heart'?",
            "options": [
              "'My art dey beat fast'",
              "'My hart is beating'",
              "'My kart dey go'",
              "'My spart dey run'"
            ],
            "correctAnswer": "'My art dey beat fast'",
            "explanation": "Initial /h/ dropping renders 'heart' as 'art'."
          },
          {
            "id": "p-u1-l1-q12",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I dey feel heavy _____ (hunger) for belly.'",
            "options": [
              "ungry",
              "hungar",
              "hangry",
              "onger"
            ],
            "correctAnswer": "ungry",
            "explanation": "'Hunger/hungry' drops initial /h/, frequently expressed as 'ungry dey catch me'."
          },
          {
            "id": "p-u1-l1-q13",
            "type": "multiple_choice",
            "prompt": "How is 'that' pronounced and spelled in standard West African Pidgin?",
            "options": [
              "'Dat'",
              "'Zat'",
              "'Vat'",
              "'That'"
            ],
            "correctAnswer": "'Dat'",
            "explanation": "'That' becomes 'dat' (e.g. 'Dat book wey dey table')."
          },
          {
            "id": "p-u1-l1-q14",
            "type": "multiple_choice",
            "prompt": "How is 'this' rendered in standard West African Pidgin?",
            "options": [
              "'Dis'",
              "'Zis'",
              "'Vis'",
              "'Thees'"
            ],
            "correctAnswer": "'Dis'",
            "explanation": "'This' becomes 'dis' (e.g. 'Dis lesson sweet well-well')."
          },
          {
            "id": "p-u1-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Give them that thing in the house.'",
            "tokens": [
              "the",
              "dat",
              "dem",
              "for",
              "Give",
              "ting",
              "ouse"
            ],
            "correctTokens": [
              "Give",
              "dem",
              "dat",
              "ting",
              "for",
              "the",
              "ouse"
            ],
            "explanation": "Standard word order with consonant shifts: 'Give dem dat ting for the ouse'."
          },
          {
            "id": "p-u1-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to form: 'Thank them for this good thing.'",
            "tokens": [
              "for",
              "dis",
              "Tank",
              "ting",
              "dem",
              "good"
            ],
            "correctTokens": [
              "Tank",
              "dem",
              "for",
              "dis",
              "good",
              "ting"
            ],
            "explanation": "Using 'Tank', 'dem', 'dis', and 'ting' demonstrates all primary phonetic shifts."
          },
          {
            "id": "p-u1-l1-q17",
            "type": "matching",
            "prompt": "Match the English word with its standard Nigerian Pidgin phonetic form:",
            "pairs": [
              {
                "left": "Thing",
                "right": "Ting"
              },
              {
                "left": "House",
                "right": "Ouse"
              },
              {
                "left": "Them",
                "right": "Dem"
              },
              {
                "left": "Three",
                "right": "Tree"
              }
            ],
            "explanation": "Phonological substitutions: /θ/ -> /t/, /ð/ -> /d/, and /h/-dropping."
          },
          {
            "id": "p-u1-l1-q18",
            "type": "matching",
            "prompt": "Match each English phrase to its authentic Pidgin equivalent:",
            "pairs": [
              {
                "left": "Thank you",
                "right": "Tank you"
              },
              {
                "left": "That house",
                "right": "Dat ouse"
              },
              {
                "left": "Catch thief",
                "right": "Catch tief"
              },
              {
                "left": "I am hungry",
                "right": "Ungry dey catch me"
              }
            ],
            "explanation": "Common everyday collocations exhibiting phonological shifts."
          },
          {
            "id": "p-u1-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Dat boy don run enter ouse.' What did the boy do?",
            "audioText": "Dat boy don run enter ouse.",
            "options": [
              "The boy ran into the house",
              "The boy built a new horse",
              "The boy climbed a tall tree",
              "The boy bought groceries"
            ],
            "correctAnswer": "The boy ran into the house",
            "explanation": "'Dat' = That, 'don run enter' = has run into, 'ouse' = house."
          },
          {
            "id": "p-u1-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'We get tree different-different ting to talk.' What does the speaker mean?",
            "audioText": "We get tree different-different ting to talk.",
            "options": [
              "We have three different matters to discuss",
              "We found three trees in the forest",
              "We are drinking three cups of tea",
              "We have no matters to discuss"
            ],
            "correctAnswer": "We have three different matters to discuss",
            "explanation": "'Tree' = three; 'different-different ting' = various distinct things/topics."
          }
        ]
      },
      {
        "id": "p-u1-l2",
        "title": "Lesson 2: Vowel Systems & Orthographic Precision",
        "description": "Understand the 7-vowel system of Nigerian Pidgin, vowel harmony, and standard written spellings (chop, wetin, commot, sabi).",
        "completed": false,
        "questions": [
          {
            "id": "p-u1-l2-q1",
            "type": "multiple_choice",
            "prompt": "How many vowel phonemes characterize the core Nigerian Pidgin sound system?",
            "options": [
              "7 vowels (/i, e, ɛ, a, ɔ, o, u/)",
              "5 vowels only (/a, e, i, o, u/)",
              "12 pure vowels like British Received Pronunciation",
              "20 vowels including diphthongs"
            ],
            "correctAnswer": "7 vowels (/i, e, ɛ, a, ɔ, o, u/)",
            "explanation": "Unlike English with 12 monopthongs, NPE uses a 7-vowel African substrate system including open /ɛ/ and open /ɔ/."
          },
          {
            "id": "p-u1-l2-q2",
            "type": "multiple_choice",
            "prompt": "What does the high-frequency verb 'chop' mean in Nigerian Pidgin?",
            "options": [
              "To eat / to consume food",
              "To cut wood with an axe only",
              "To sleep peacefully",
              "To travel abroad"
            ],
            "correctAnswer": "To eat / to consume food",
            "explanation": "'Chop' is the foundational verb meaning to eat, dine, or enjoy consumption."
          },
          {
            "id": "p-u1-l2-q3",
            "type": "multiple_choice",
            "prompt": "What is the meaning of the essential question word 'wetin'?",
            "options": [
              "What",
              "Where",
              "When",
              "Who"
            ],
            "correctAnswer": "What",
            "explanation": "'Wetin' is derived from 'what thing' and is the universal question word for 'what' (e.g. 'Wetin dey happen?')."
          },
          {
            "id": "p-u1-l2-q4",
            "type": "multiple_choice",
            "prompt": "What does the Portuguese-derived word 'sabi' mean?",
            "options": [
              "To know / to understand / to be skilled",
              "To run very fast",
              "To cook jollof rice",
              "To sing praises"
            ],
            "correctAnswer": "To know / to understand / to be skilled",
            "explanation": "'Sabi' comes from Portuguese 'saber' and means to know or possess competence."
          },
          {
            "id": "p-u1-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I no _____ (know) wetin you dey talk.'",
            "options": [
              "sabi",
              "chop",
              "commot",
              "gree"
            ],
            "correctAnswer": "sabi",
            "explanation": "'I no sabi' means 'I do not know' or 'I do not understand'."
          },
          {
            "id": "p-u1-l2-q6",
            "type": "multiple_choice",
            "prompt": "What does the action verb 'commot' mean?",
            "options": [
              "To leave, depart, or remove",
              "To come inside",
              "To laugh out loud",
              "To buy goods"
            ],
            "correctAnswer": "To leave, depart, or remove",
            "explanation": "'Commot' (from 'come out') means to leave, depart, step aside, or extract something."
          },
          {
            "id": "p-u1-l2-q7",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Come make we _____ (eat) correct rice.'",
            "options": [
              "chop",
              "slap",
              "dash",
              "gree"
            ],
            "correctAnswer": "chop",
            "explanation": "'Chop' is the verb for eating food."
          },
          {
            "id": "p-u1-l2-q8",
            "type": "multiple_choice",
            "prompt": "How is the question 'What is happening?' expressed most naturally in Nigerian Pidgin?",
            "options": [
              "'Wetin dey happen?' or 'Wetin dey sup?'",
              "'What is that thing moving?'",
              "'Happen wetin now?'",
              "'Who be you?'"
            ],
            "correctAnswer": "'Wetin dey happen?' or 'Wetin dey sup?'",
            "explanation": "'Wetin dey happen?' is the iconic everyday greeting and inquiry across Nigeria."
          },
          {
            "id": "p-u1-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does the word 'pikin' mean in West African Pidgin?",
            "options": [
              "Child / offspring",
              "Small fowl",
              "Money coin",
              "Bicycle wheel"
            ],
            "correctAnswer": "Child / offspring",
            "explanation": "'Pikin' (from Portuguese 'pequeno') means a child or young person."
          },
          {
            "id": "p-u1-l2-q10",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (What) you wan drink this afternoon?'",
            "options": [
              "Wetin",
              "Wia",
              "Who",
              "Wen"
            ],
            "correctAnswer": "Wetin",
            "explanation": "'Wetin' is the interrogative pronoun for 'what'."
          },
          {
            "id": "p-u1-l2-q11",
            "type": "multiple_choice",
            "prompt": "What does 'kulele' or 'soft' mean when describing an easy situation?",
            "options": [
              "Smooth, comfortable, or problem-free ('Soft life')",
              "Hard like rock",
              "Extremely bitter",
              "Expensive"
            ],
            "correctAnswer": "Smooth, comfortable, or problem-free ('Soft life')",
            "explanation": "'Soft' or 'kulele' describes a relaxed, enjoyable, trouble-free condition."
          },
          {
            "id": "p-u1-l2-q12",
            "type": "multiple_choice",
            "prompt": "What is the meaning of 'wahala'?",
            "options": [
              "Trouble, stress, or problem",
              "Delicious food",
              "A fast bus",
              "A wedding celebration"
            ],
            "correctAnswer": "Trouble, stress, or problem",
            "explanation": "'Wahala' (loanword from Yoruba/Hausa) universally denotes distress, trouble, or drama."
          },
          {
            "id": "p-u1-l2-q13",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'No _____ (trouble) at all, everything dey fine.'",
            "options": [
              "wahala",
              "chop",
              "sabi",
              "pikin"
            ],
            "correctAnswer": "wahala",
            "explanation": "'No wahala' is the universal response meaning 'No problem / No worries'."
          },
          {
            "id": "p-u1-l2-q14",
            "type": "multiple_choice",
            "prompt": "In JW.org West African Pidgin, how is 'different kinds of books' translated with authentic reduplication?",
            "options": [
              "'Different-different book'",
              "'Many kind of book'",
              "'Plenty books together'",
              "'Book wey get types'"
            ],
            "correctAnswer": "'Different-different book'",
            "explanation": "West African Pidgin uses reduplication ('different-different book') to denote variety and distribution."
          },
          {
            "id": "p-u1-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'I know what is happening here.'",
            "tokens": [
              "dey",
              "I",
              "happen",
              "wetin",
              "sabi",
              "here"
            ],
            "correctTokens": [
              "I",
              "sabi",
              "wetin",
              "dey",
              "happen",
              "here"
            ],
            "explanation": "'I sabi wetin dey happen here' forms the complete grammatical assertion."
          },
          {
            "id": "p-u1-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Come and eat food with us.'",
            "tokens": [
              "chop",
              "food",
              "we",
              "make",
              "Come",
              "with"
            ],
            "correctTokens": [
              "Come",
              "make",
              "we",
              "chop",
              "food",
              "with"
            ],
            "explanation": "'Come make we chop food...' is the standard invitation."
          },
          {
            "id": "p-u1-l2-q17",
            "type": "matching",
            "prompt": "Match the Pidgin vocabulary word with its English translation:",
            "pairs": [
              {
                "left": "Chop",
                "right": "Eat / food"
              },
              {
                "left": "Sabi",
                "right": "Know / understand"
              },
              {
                "left": "Wetin",
                "right": "What"
              },
              {
                "left": "Wahala",
                "right": "Trouble / stress"
              }
            ],
            "explanation": "Essential four pillars of everyday Nigerian Pidgin vocabulary."
          },
          {
            "id": "p-u1-l2-q18",
            "type": "matching",
            "prompt": "Match each Pidgin phrase to its everyday meaning:",
            "pairs": [
              {
                "left": "No wahala",
                "right": "No problem"
              },
              {
                "left": "Commot for road",
                "right": "Get out of the way"
              },
              {
                "left": "Wetin dey?",
                "right": "What is going on?"
              },
              {
                "left": "I don bellefull",
                "right": "I am full of food"
              }
            ],
            "explanation": "Everyday conversational collocations."
          },
          {
            "id": "p-u1-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'You sabi read this different-different book?' What is being asked?",
            "audioText": "You sabi read this different-different book?",
            "options": [
              "Do you know how to read these different books?",
              "Did you buy different books at the store?",
              "Are you writing a single book?",
              "Can you sell these books for money?"
            ],
            "correctAnswer": "Do you know how to read these different books?",
            "explanation": "'You sabi read...' = Do you know how to read; 'different-different book' = various books."
          },
          {
            "id": "p-u1-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'No wahala, we go chop when we reach ouse.' When will they eat?",
            "audioText": "No wahala, we go chop when we reach ouse.",
            "options": [
              "When they arrive at the house",
              "Immediately right now in the street",
              "Tomorrow morning at work",
              "They will not eat at all"
            ],
            "correctAnswer": "When they arrive at the house",
            "explanation": "'We go chop when we reach ouse' = We will eat when we arrive home."
          }
        ]
      },
      {
        "id": "p-u1-l3",
        "title": "Lesson 3: The Pronoun Grid (Pronominal Roots)",
        "description": "Master the complete NPE pronoun system: Subject pronouns (I, You, Im/E, We, Una, Dem) and the objective enclitic suffix '-am'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u1-l3-q1",
            "type": "multiple_choice",
            "prompt": "What is the 2nd person plural pronoun ('you all' / 'you people') in Nigerian Pidgin?",
            "options": [
              "'Una'",
              "'Y'all'",
              "'Dem'",
              "'Unas'"
            ],
            "correctAnswer": "'Una'",
            "explanation": "'Una' (derived from Igbo 'ụnụ') is the universal second person plural pronoun in Nigerian Pidgin."
          },
          {
            "id": "p-u1-l3-q2",
            "type": "multiple_choice",
            "prompt": "What pronoun is used for the 3rd person singular subject ('he' or 'she') in Nigerian Pidgin?",
            "options": [
              "'Im' or 'E'",
              "'She-he'",
              "'His'",
              "'It-man'"
            ],
            "correctAnswer": "'Im' or 'E'",
            "explanation": "NPE has no gender distinction in third person pronouns: 'Im' or 'E' stands for he, she, and it."
          },
          {
            "id": "p-u1-l3-q3",
            "type": "multiple_choice",
            "prompt": "In standard West African Pidgin (e.g. JW.org standard), what does the hyphenated suffix '-am' signify in 'use-am' or 'read-am'?",
            "options": [
              "The 3rd person singular object pronoun ('it' or 'him/her')",
              "A past tense suffix like English '-ed'",
              "A plural noun ending like '-s'",
              "A question mark particle"
            ],
            "correctAnswer": "The 3rd person singular object pronoun ('it' or 'him/her')",
            "explanation": "The enclitic pronominal suffix '-am' represents the direct or indirect object pronoun 'it', 'him', or 'her' (e.g. read-am = read it, see-am = see it, tell-am = tell him/her)."
          },
          {
            "id": "p-u1-l3-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (You all) welcome to our class today.'",
            "options": [
              "Una",
              "Dem",
              "Im",
              "We"
            ],
            "correctAnswer": "Una",
            "explanation": "'Una welcome' is the standard greeting to a group of people."
          },
          {
            "id": "p-u1-l3-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Take this book and read-_____ (it) well.'",
            "options": [
              "am",
              "it",
              "im",
              "dem"
            ],
            "correctAnswer": "am",
            "explanation": "The object pronoun attached to transitive verbs is '-am' (read-am = read it)."
          },
          {
            "id": "p-u1-l3-q6",
            "type": "multiple_choice",
            "prompt": "How do you say 'We are here' in Nigerian Pidgin?",
            "options": [
              "'We dey here'",
              "'Us is here'",
              "'Una dey here'",
              "'Dem dey here'"
            ],
            "correctAnswer": "'We dey here'",
            "explanation": "'We' is the first person plural subject pronoun; 'dey' is the locative/stative verb."
          },
          {
            "id": "p-u1-l3-q7",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'They told him the truth'?",
            "options": [
              "'Dem tell-am the truth'",
              "'Them told his truth'",
              "'Dem say him truth'",
              "'Una tell-am truth'"
            ],
            "correctAnswer": "'Dem tell-am the truth'",
            "explanation": "'Dem' = They; 'tell-am' = told him/her; 'the truth' = the truth."
          },
          {
            "id": "p-u1-l3-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (He/She) dey cook soup for kitchen.'",
            "options": [
              "Im",
              "Una",
              "Dem",
              "Me"
            ],
            "correctAnswer": "Im",
            "explanation": "'Im' or 'E' is the gender-neutral third person singular subject pronoun."
          },
          {
            "id": "p-u1-l3-q9",
            "type": "multiple_choice",
            "prompt": "What does the sentence 'See-am there!' mean?",
            "options": [
              "'Look at it/him over there!'",
              "'Sea water is there'",
              "'He is sleeping'",
              "'Go away from here'"
            ],
            "correctAnswer": "'Look at it/him over there!'",
            "explanation": "'See-am' = Look at it / Behold it."
          },
          {
            "id": "p-u1-l3-q10",
            "type": "multiple_choice",
            "prompt": "Which pronoun represents 1st person plural ('we' / 'us')?",
            "options": [
              "'We'",
              "'Una'",
              "'Dem'",
              "'Im'"
            ],
            "correctAnswer": "'We'",
            "explanation": "'We' serves as the first person plural pronoun in Pidgin."
          },
          {
            "id": "p-u1-l3-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Wetin _____ (you all) dey do here?'",
            "options": [
              "una",
              "im",
              "am",
              "me"
            ],
            "correctAnswer": "una",
            "explanation": "'Una' addresses multiple people ('you all')."
          },
          {
            "id": "p-u1-l3-q12",
            "type": "multiple_choice",
            "prompt": "How is 'Give it to me' rendered in Pidgin using the enclitic '-am'?",
            "options": [
              "'Give-am to me' or 'Give me am'",
              "'Give it at me'",
              "'Take me give'",
              "'Dash to me it'"
            ],
            "correctAnswer": "'Give-am to me' or 'Give me am'",
            "explanation": "'Give-am' attaches the object pronoun '-am' directly to the verb."
          },
          {
            "id": "p-u1-l3-q13",
            "type": "multiple_choice",
            "prompt": "In JW.org publications, which construction is used for 'Watch it now'?",
            "options": [
              "'Watch-am Now'",
              "'Watch it this time'",
              "'See that video'",
              "'Look it quick'"
            ],
            "correctAnswer": "'Watch-am Now'",
            "explanation": "JW.org West African Pidgin prominently uses 'Watch-am Now' on video action buttons."
          },
          {
            "id": "p-u1-l3-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If you get question, ask-_____ (him/her).'",
            "options": [
              "am",
              "im",
              "dem",
              "una"
            ],
            "correctAnswer": "am",
            "explanation": "'Ask-am' represents 'ask him/her/it'."
          },
          {
            "id": "p-u1-l3-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'You all should welcome them nicely.'",
            "tokens": [
              "Una",
              "well-well",
              "make",
              "welcome",
              "dem"
            ],
            "correctTokens": [
              "Make",
              "una",
              "welcome",
              "dem",
              "well-well"
            ],
            "explanation": "'Make una welcome dem well-well' is the standard polite subjunctive construction."
          },
          {
            "id": "p-u1-l3-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'He told me to watch it.'",
            "tokens": [
              "watch-am",
              "me",
              "tell",
              "make",
              "Im",
              "I"
            ],
            "correctTokens": [
              "Im",
              "tell",
              "me",
              "make",
              "I",
              "watch-am"
            ],
            "explanation": "'Im tell me make I watch-am' represents indirect speech with the enclitic '-am'."
          },
          {
            "id": "p-u1-l3-q17",
            "type": "matching",
            "prompt": "Match the Pidgin pronoun to its English meaning:",
            "pairs": [
              {
                "left": "Una",
                "right": "You all (plural)"
              },
              {
                "left": "Im / E",
                "right": "He / She / It"
              },
              {
                "left": "-am",
                "right": "Him / Her / It (object)"
              },
              {
                "left": "Dem",
                "right": "They / Them"
              }
            ],
            "explanation": "Fundamental pronominal mapping of West African Pidgin."
          },
          {
            "id": "p-u1-l3-q18",
            "type": "matching",
            "prompt": "Match the verb with its object suffix to its translation:",
            "pairs": [
              {
                "left": "Chop-am",
                "right": "Eat it"
              },
              {
                "left": "Read-am",
                "right": "Read it"
              },
              {
                "left": "Tell-am",
                "right": "Tell him/her"
              },
              {
                "left": "Watch-am",
                "right": "Watch it"
              }
            ],
            "explanation": "Enclitic pronominal attachment across transitive verbs."
          },
          {
            "id": "p-u1-l3-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Una fit use-am for study.' What does the speaker advise?",
            "audioText": "Una fit use-am for study.",
            "options": [
              "You all can use it for studying",
              "They should sell it for money",
              "He is studying alone in school",
              "Nobody can understand the material"
            ],
            "correctAnswer": "You all can use it for studying",
            "explanation": "Direct quote from JW.org Pidgin: 'Una fit use-am for study' = You all can use it for studying."
          },
          {
            "id": "p-u1-l3-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Im don tell dem say make dem come.' What message was sent?",
            "audioText": "Im don tell dem say make dem come.",
            "options": [
              "He/She told them that they should come",
              "They told him to go away",
              "We are going to meet them now",
              "Nobody is allowed to come"
            ],
            "correctAnswer": "He/She told them that they should come",
            "explanation": "'Im' = He/she; 'tell dem' = told them; 'make dem come' = to come."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-2",
    "unitNumber": 2,
    "level": "Level 1: Beginner (Foundational Pikin)",
    "title": "Unit 2: The Core Aspect Markers",
    "description": "Deep dive into the dual nature of 'Dey' (stative vs dynamic progressive) and the completive aspect marker 'Don' vs negative 'Never'.",
    "lessons": [
      {
        "id": "p-u2-l1",
        "title": "Lesson 1: Stative vs Dynamic Dey",
        "description": "Distinguish between stative 'dey' (location/existence) and dynamic 'dey' (ongoing progressive actions).",
        "completed": false,
        "questions": [
          {
            "id": "p-u2-l1-q1",
            "type": "multiple_choice",
            "prompt": "In the sentence 'I dey fine', what function does 'dey' perform?",
            "options": [
              "Stative verb expressing condition/well-being ('I am fine')",
              "Progressive aspect meaning 'I am fining'",
              "Future marker meaning 'I will be fine'",
              "Past marker meaning 'I was fine'"
            ],
            "correctAnswer": "Stative verb expressing condition/well-being ('I am fine')",
            "explanation": "When followed by an adjective or state, 'dey' functions as a stative copula denoting state or condition."
          },
          {
            "id": "p-u2-l1-q2",
            "type": "multiple_choice",
            "prompt": "In the sentence 'I dey read Bible', what function does 'dey' perform?",
            "options": [
              "Dynamic auxiliary marking continuous/progressive action ('I am reading the Bible')",
              "Stative verb of location",
              "Completed action marker",
              "Negative imperative"
            ],
            "correctAnswer": "Dynamic auxiliary marking continuous/progressive action ('I am reading the Bible')",
            "explanation": "When placed before an active verb, 'dey' (or 'de' in JW.org orthography) marks ongoing continuous aspect."
          },
          {
            "id": "p-u2-l1-q3",
            "type": "multiple_choice",
            "prompt": "How is 'Moses is at the burning bush' expressed in JW.org Pidgin?",
            "options": [
              "'Moses dey the bush wey fire dey'",
              "'Moses was inside bush of fire'",
              "'Moses go bush fire'",
              "'Fire catch Moses inside forest'"
            ],
            "correctAnswer": "'Moses dey the bush wey fire dey'",
            "explanation": "Authentic JW.org title: 'Moses dey the bush wey fire dey' demonstrates both locative 'dey' and relative 'wey'."
          },
          {
            "id": "p-u2-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'My brother _____ (is) for house now.'",
            "options": [
              "dey",
              "don",
              "go",
              "bin"
            ],
            "correctAnswer": "dey",
            "explanation": "Locative 'dey' indicates presence in a place ('dey for house')."
          },
          {
            "id": "p-u2-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We _____ (are reading) different-different book.'",
            "options": [
              "de read",
              "don read",
              "go read",
              "bin read"
            ],
            "correctAnswer": "de read",
            "explanation": "JW.org orthography uses 'de read' (or 'dey read') for the progressive action."
          },
          {
            "id": "p-u2-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does 'Wetin you dey do?' mean?",
            "options": [
              "What are you doing right now?",
              "What did you do yesterday?",
              "What will you do tomorrow?",
              "Where are you going?"
            ],
            "correctAnswer": "What are you doing right now?",
            "explanation": "'Wetin you dey do?' inquires about present ongoing activity."
          },
          {
            "id": "p-u2-l1-q7",
            "type": "multiple_choice",
            "prompt": "How do you say 'Water is inside the cup' in Nigerian Pidgin?",
            "options": [
              "'Water dey inside the cup'",
              "'Water has cup'",
              "'Water is cupside'",
              "'Cup dey water'"
            ],
            "correctAnswer": "'Water dey inside the cup'",
            "explanation": "'Dey inside' marks the spatial locative relationship."
          },
          {
            "id": "p-u2-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The food _____ (is) sweet well-well.'",
            "options": [
              "dey",
              "don",
              "go",
              "make"
            ],
            "correctAnswer": "dey",
            "explanation": "'Dey sweet' expresses the present stative taste sensation."
          },
          {
            "id": "p-u2-l1-q9",
            "type": "multiple_choice",
            "prompt": "How does Pidgin express habitual action (e.g. 'He always comes every day')?",
            "options": [
              "'Im dey come everyday' (habitual 'dey')",
              "'Im don come everyday'",
              "'Im will come everyday'",
              "'Im for come everyday'"
            ],
            "correctAnswer": "'Im dey come everyday' (habitual 'dey')",
            "explanation": "In addition to progressive aspect, 'dey' marks habitual occurrences when paired with time adverbs."
          },
          {
            "id": "p-u2-l1-q10",
            "type": "multiple_choice",
            "prompt": "How do you negate stative or dynamic 'dey'?",
            "options": [
              "Place 'no' before 'dey' ('I no dey sleep')",
              "Add 'not' at the end of the sentence",
              "Change 'dey' to 'dey-not'",
              "Remove the subject pronoun"
            ],
            "correctAnswer": "Place 'no' before 'dey' ('I no dey sleep')",
            "explanation": "The universal negator 'no' precedes 'dey': 'I no dey...' = 'I am not...'."
          },
          {
            "id": "p-u2-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I _____ (am not) fear anything.'",
            "options": [
              "no dey",
              "never dey",
              "don no",
              "go not"
            ],
            "correctAnswer": "no dey",
            "explanation": "'I no dey fear' = 'I am not afraid / I do not fear'."
          },
          {
            "id": "p-u2-l1-q12",
            "type": "multiple_choice",
            "prompt": "In 'Which new thing dey?', what does 'dey' mean?",
            "options": [
              "Exists / is available ('What new thing is there?')",
              "Walking slowly",
              "Ending soon",
              "Sleeping soundly"
            ],
            "correctAnswer": "Exists / is available ('What new thing is there?')",
            "explanation": "'Dey' here asserts existence (JW.org section: 'Which New Thing Dey?')."
          },
          {
            "id": "p-u2-l1-q13",
            "type": "multiple_choice",
            "prompt": "How do you say 'Peace is in this home'?",
            "options": [
              "'Peace dey this house'",
              "'House has peaceful'",
              "'Peace don house'",
              "'Dey peace house'"
            ],
            "correctAnswer": "'Peace dey this house'",
            "explanation": "Locative/existential 'dey': 'Peace dey this house'."
          },
          {
            "id": "p-u2-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We _____ (are happy) say we be Christian.'",
            "options": [
              "de happy",
              "don happy",
              "for happy",
              "happy-am"
            ],
            "correctAnswer": "de happy",
            "explanation": "JW.org standard text: 'we de happy say we be Christian'."
          },
          {
            "id": "p-u2-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'One man is inside the bus reading Bible.'",
            "tokens": [
              "bus",
              "One",
              "man",
              "Bible",
              "dey",
              "read",
              "inside",
              "de"
            ],
            "correctTokens": [
              "One",
              "man",
              "dey",
              "inside",
              "bus",
              "de",
              "read",
              "Bible"
            ],
            "explanation": "JW.org photo caption: 'One man dey inside bus de read Bible.'"
          },
          {
            "id": "p-u2-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'We are learning good things every day.'",
            "tokens": [
              "tings",
              "de",
              "every",
              "We",
              "good",
              "learn",
              "day"
            ],
            "correctTokens": [
              "We",
              "de",
              "learn",
              "good",
              "tings",
              "every",
              "day"
            ],
            "explanation": "'We de learn good tings every day' exemplifies habitual/progressive aspect."
          },
          {
            "id": "p-u2-l1-q17",
            "type": "matching",
            "prompt": "Match each sentence with the correct syntactic function of 'dey':",
            "pairs": [
              {
                "left": "I dey house",
                "right": "Locative (being in a place)"
              },
              {
                "left": "I dey chop rice",
                "right": "Progressive (action in progress)"
              },
              {
                "left": "E dey sick",
                "right": "Stative (physical condition)"
              },
              {
                "left": "I no dey lie",
                "right": "Habitual negative (general truth)"
              }
            ],
            "explanation": "Four core linguistic dimensions of the particle 'dey'."
          },
          {
            "id": "p-u2-l1-q18",
            "type": "matching",
            "prompt": "Match the Pidgin phrase with its English meaning:",
            "pairs": [
              {
                "left": "Wetin dey sup?",
                "right": "What's happening?"
              },
              {
                "left": "I dey kampe",
                "right": "I am strong and sound"
              },
              {
                "left": "E dey work",
                "right": "It is functional / working"
              },
              {
                "left": "Sun dey shine",
                "right": "The sun is shining"
              }
            ],
            "explanation": "Idiomatic uses of 'dey' in daily conversation."
          },
          {
            "id": "p-u2-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Religion wey de make people fight no fit bring peace.' What problem is described?",
            "audioText": "Religion wey de make people fight no fit bring peace.",
            "options": [
              "Religion that makes people fight cannot bring peace",
              "All religions bring peace to the whole world",
              "People should stop going to market on Sunday",
              "Religion is a sport where people wrestle"
            ],
            "correctAnswer": "Religion that makes people fight cannot bring peace",
            "explanation": "Direct quote from JW.org Pidgin: 'Religion wey de make people fight... no fit make peace dey this world.'"
          },
          {
            "id": "p-u2-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Two witness de preach to one man wey de farm.' What is taking place?",
            "audioText": "Two witness de preach to one man wey de farm.",
            "options": [
              "Two witnesses are preaching to a farmer",
              "Two men are buying farm produce",
              "A man is planting rice alone in the night",
              "The witnesses are harvesting cassava"
            ],
            "correctAnswer": "Two witnesses are preaching to a farmer",
            "explanation": "JW.org image alt text: 'Two Jehovah Witness de preach to one man wey de for rice farm.'"
          }
        ]
      },
      {
        "id": "p-u2-l2",
        "title": "Lesson 2: Completive Don & Imperfective Dey",
        "description": "Contrast the completive/perfective aspect marker 'Don' with ongoing 'Dey' and the negative perfective 'Never'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u2-l2-q1",
            "type": "multiple_choice",
            "prompt": "What does the auxiliary particle 'don' indicate in Nigerian Pidgin?",
            "options": [
              "Completive / perfective aspect (the action has finished / taken place)",
              "Future intention",
              "A question word",
              "An adjective of size"
            ],
            "correctAnswer": "Completive / perfective aspect (the action has finished / taken place)",
            "explanation": "'Don' marks completed actions, translating to English present perfect ('have done') or simple past."
          },
          {
            "id": "p-u2-l2-q2",
            "type": "multiple_choice",
            "prompt": "What does 'I don chop' mean?",
            "options": [
              "'I have eaten' / 'I have had my meal'",
              "'I am eating right now'",
              "'I will eat later'",
              "'I am hungry'"
            ],
            "correctAnswer": "'I have eaten' / 'I have had my meal'",
            "explanation": "'Don chop' indicates the eating event has reached completion."
          },
          {
            "id": "p-u2-l2-q3",
            "type": "multiple_choice",
            "prompt": "How do you negate 'don' to express 'I have not yet eaten'?",
            "options": [
              "'I never chop'",
              "'I no don chop'",
              "'I don not chop'",
              "'Chop no be me'"
            ],
            "correctAnswer": "'I never chop'",
            "explanation": "The negative counterpart of completive 'don' is 'never' (pronounced /nɛva/), meaning 'have not yet'."
          },
          {
            "id": "p-u2-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The meeting _____ (has finished) now.'",
            "options": [
              "don finish",
              "dey finish",
              "go finish",
              "never finish"
            ],
            "correctAnswer": "don finish",
            "explanation": "'Don finish' indicates completed closure."
          },
          {
            "id": "p-u2-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I _____ (have not yet) see the new video.'",
            "options": [
              "never",
              "no don",
              "did not",
              "not"
            ],
            "correctAnswer": "never",
            "explanation": "'Never' is the negative perfective marker ('have not yet')."
          },
          {
            "id": "p-u2-l2-q6",
            "type": "multiple_choice",
            "prompt": "In JW.org navigation, what does 'Things Wey Don Happen' mean?",
            "options": [
              "Current events / news of things that have occurred",
              "Things that will never occur",
              "Things we are planning to build",
              "Fictional stories"
            ],
            "correctAnswer": "Current events / news of things that have occurred",
            "explanation": "JW.org standard section: 'Things Wey Don Happen' translates 'News / Events that have taken place'."
          },
          {
            "id": "p-u2-l2-q7",
            "type": "multiple_choice",
            "prompt": "How do you say 'They have written many things' in Pidgin?",
            "options": [
              "'Dem don write plenty tings'",
              "'Dem dey write plenty tings'",
              "'Dem go write plenty tings'",
              "'Dem never write plenty tings'"
            ],
            "correctAnswer": "'Dem don write plenty tings'",
            "explanation": "'Dem don write' = They have written."
          },
          {
            "id": "p-u2-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Check the news wey we _____ (have added).'",
            "options": [
              "don add",
              "de add",
              "go add",
              "never add"
            ],
            "correctAnswer": "don add",
            "explanation": "JW.org Pidgin: 'news wey we don add' (news we have added)."
          },
          {
            "id": "p-u2-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does 'E don reach time' mean?",
            "options": [
              "The appointed time has arrived",
              "Time has run backward",
              "The clock is broken",
              "There is plenty of time left"
            ],
            "correctAnswer": "The appointed time has arrived",
            "explanation": "'E don reach' indicates a boundary or milestone has been achieved."
          },
          {
            "id": "p-u2-l2-q10",
            "type": "multiple_choice",
            "prompt": "What is the difference between 'I dey go' and 'I don go'?",
            "options": [
              "'I dey go' = I am going (ongoing); 'I don go' = I have gone / departed (completed)",
              "'I dey go' = I have arrived; 'I don go' = I am standing",
              "They mean the exact same thing",
              "'I don go' means I will never go"
            ],
            "correctAnswer": "'I dey go' = I am going (ongoing); 'I don go' = I have gone / departed (completed)",
            "explanation": "Crucial aspectual contrast: 'dey' is imperfective/continuous; 'don' is perfective/completive."
          },
          {
            "id": "p-u2-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The bus _____ (has left) the station.'",
            "options": [
              "don commot",
              "dey commot",
              "go commot",
              "never commot"
            ],
            "correctAnswer": "don commot",
            "explanation": "'Don commot' indicates completed departure."
          },
          {
            "id": "p-u2-l2-q12",
            "type": "multiple_choice",
            "prompt": "What does the expression 'E don do!' mean when someone is serving you food or pouring a drink?",
            "options": [
              "'It is enough! / That will suffice!'",
              "'Do it more quickly!'",
              "'It has spoiled!'",
              "'Bring another plate!'"
            ],
            "correctAnswer": "'It is enough! / That will suffice!'",
            "explanation": "'E don do' is the universal expression for 'It is sufficient / That's enough'."
          },
          {
            "id": "p-u2-l2-q13",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'We haven't reached the market yet'?",
            "options": [
              "'We never reach market'",
              "'We no don reach market'",
              "'We dey reach market'",
              "'Market don reach us'"
            ],
            "correctAnswer": "'We never reach market'",
            "explanation": "'Never reach' = have not yet arrived."
          },
          {
            "id": "p-u2-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'My money _____ (has completely finished).' ",
            "options": [
              "don finish kpata-kpata",
              "dey finish",
              "never finish",
              "go finish"
            ],
            "correctAnswer": "don finish kpata-kpata",
            "explanation": "'Don finish kpata-kpata' combines completive 'don' with the totalizing ideophone 'kpata-kpata'."
          },
          {
            "id": "p-u2-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Things that we have written in this book.'",
            "tokens": [
              "Things",
              "don",
              "write",
              "this",
              "inside",
              "book",
              "wey",
              "we"
            ],
            "correctTokens": [
              "Things",
              "wey",
              "we",
              "don",
              "write",
              "inside",
              "this",
              "book"
            ],
            "explanation": "JW.org phrasing: 'Things wey we don write inside this book'."
          },
          {
            "id": "p-u2-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'I have not yet heard that news.'",
            "tokens": [
              "never",
              "I",
              "dat",
              "hear",
              "news"
            ],
            "correctTokens": [
              "I",
              "never",
              "hear",
              "dat",
              "news"
            ],
            "explanation": "'I never hear dat news' uses negative completive 'never'."
          },
          {
            "id": "p-u2-l2-q17",
            "type": "matching",
            "prompt": "Match each sentence with its aspectual status:",
            "pairs": [
              {
                "left": "I dey sleep",
                "right": "Imperfective / Ongoing now"
              },
              {
                "left": "I don wake",
                "right": "Perfective / Completed"
              },
              {
                "left": "I never wake",
                "right": "Negative completive / Not yet"
              },
              {
                "left": "I go sleep",
                "right": "Future / Anticipated"
              }
            ],
            "explanation": "Mastery of the core aspectual quadrant."
          },
          {
            "id": "p-u2-l2-q18",
            "type": "matching",
            "prompt": "Match the Pidgin phrase to its English translation:",
            "pairs": [
              {
                "left": "E don set",
                "right": "Everything is prepared and ready"
              },
              {
                "left": "E don burst",
                "right": "The secret has leaked / trouble has started"
              },
              {
                "left": "E don do",
                "right": "It is enough"
              },
              {
                "left": "E never ready",
                "right": "It is not yet ready"
              }
            ],
            "explanation": "High-frequency completive and negative-completive idioms."
          },
          {
            "id": "p-u2-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Check the new things wey we don add for the website.' What is the user asked to do?",
            "audioText": "Check the new things wey we don add for the website.",
            "options": [
              "Look at the new items that have been added to the website",
              "Delete old items from the website",
              "Build a completely new website from scratch",
              "Turn off the computer screen"
            ],
            "correctAnswer": "Look at the new items that have been added to the website",
            "explanation": "JW.org Pidgin announcement: 'Check videos, music, things wey we don write, and news wey we don add.'"
          },
          {
            "id": "p-u2-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'You don chop afternoon food abi you never chop?' What is being inquired?",
            "audioText": "You don chop afternoon food abi you never chop?",
            "options": [
              "Have you eaten lunch or have you not yet eaten?",
              "What did you cook for yesterday's dinner?",
              "Are you going to the market to buy rice?",
              "Do you know how to bake bread?"
            ],
            "correctAnswer": "Have you eaten lunch or have you not yet eaten?",
            "explanation": "'You don chop... abi you never chop?' contrasts 'don' (completed) with 'never' (not yet)."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-3",
    "unitNumber": 3,
    "level": "Level 1: Beginner (Foundational Pikin)",
    "title": "Unit 3: Nouns, Pluralization & Ownership",
    "description": "Master post-nominal plural marker 'Dem', reduplication for variety (different-different, fine-fine), and possessive constructions with 'Get', 'For', and 'Own'.",
    "lessons": [
      {
        "id": "p-u3-l1",
        "title": "Lesson 1: Post-Nominal Pluralization Dem",
        "description": "Learn how Nigerian Pidgin forms plurals using the post-nominal marker 'dem' and uses reduplication for descriptive distribution.",
        "completed": false,
        "questions": [
          {
            "id": "p-u3-l1-q1",
            "type": "multiple_choice",
            "prompt": "How is the plural form of nouns created in standard Nigerian Pidgin?",
            "options": [
              "By placing 'dem' immediately after the noun ('book dem', 'boy dem')",
              "By adding an '-s' or '-es' suffix like English",
              "By doubling the first consonant",
              "By adding 'many' before every noun without exception"
            ],
            "correctAnswer": "By placing 'dem' immediately after the noun ('book dem', 'boy dem')",
            "explanation": "Nigerian Pidgin does not use plural inflections like '-s'. Instead, it uses the post-nominal marker 'dem' (e.g. 'pikin dem' = children)."
          },
          {
            "id": "p-u3-l1-q2",
            "type": "multiple_choice",
            "prompt": "In JW.org publications, how are the members called collectively in Pidgin?",
            "options": [
              "'Jehovah Witness people'",
              "'Witnesses of Jehovah'",
              "'Jehovah Witness dem'",
              "'The Witnessers'"
            ],
            "correctAnswer": "'Jehovah Witness people'",
            "explanation": "JW.org uses 'Jehovah Witness people' (e.g. 'Official Website for Jehovah Witness People'). 'Witness dem' is also standard in colloquial speech."
          },
          {
            "id": "p-u3-l1-q3",
            "type": "multiple_choice",
            "prompt": "What does reduplication like 'fine-fine' or 'big-big' express in Nigerian Pidgin?",
            "options": [
              "Plurality, intensity, or variety across items ('all kinds of beautiful / big things')",
              "Diminution (making something smaller)",
              "Negation (meaning not fine)",
              "Past tense"
            ],
            "correctAnswer": "Plurality, intensity, or variety across items ('all kinds of beautiful / big things')",
            "explanation": "Reduplication functions distributively and intensively: 'fine-fine cloth' = various lovely clothes."
          },
          {
            "id": "p-u3-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Call all the teacher _____ (plural marker) make they come.'",
            "options": [
              "dem",
              "s",
              "plural",
              "many"
            ],
            "correctAnswer": "dem",
            "explanation": "'Teacher dem' = the teachers."
          },
          {
            "id": "p-u3-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We dey for _____ (different kinds of) country.'",
            "options": [
              "different-different",
              "different dem",
              "diff-diff",
              "plenty"
            ],
            "correctAnswer": "different-different",
            "explanation": "JW.org standard text: 'We dey for different-different country, we de talk different-different language'."
          },
          {
            "id": "p-u3-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does 'The pikin dem dey play ball' mean?",
            "options": [
              "The children are playing soccer",
              "A single child bought a ball",
              "The ball is broken",
              "The father is playing with his child"
            ],
            "correctAnswer": "The children are playing soccer",
            "explanation": "'Pikin dem' = children; 'dey play ball' = are playing soccer."
          },
          {
            "id": "p-u3-l1-q7",
            "type": "multiple_choice",
            "prompt": "If someone says 'E pack plenty sweet-sweet mango', what does 'sweet-sweet' imply?",
            "options": [
              "Every single mango was exceptionally delicious and sweet",
              "The mangoes had sugar artificially added to them",
              "The mangoes were sour and unripe",
              "There was only one small mango"
            ],
            "correctAnswer": "Every single mango was exceptionally delicious and sweet",
            "explanation": "Adjectival reduplication distributes the sweetness across all the individual fruits."
          },
          {
            "id": "p-u3-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The student _____ (plural) don pass their exam.'",
            "options": [
              "dem",
              "s",
              "them",
              "all"
            ],
            "correctAnswer": "dem",
            "explanation": "'Student dem' indicates the group of students."
          },
          {
            "id": "p-u3-l1-q9",
            "type": "multiple_choice",
            "prompt": "Can a numeral make the plural explicit without 'dem', as in 'tree book'?",
            "options": [
              "Yes, when a cardinal number precedes the noun, 'dem' is optional ('tree book' or 'the tree book dem')",
              "No, 'dem' is strictly forbidden with numbers",
              "No, you must always add an English '-s'",
              "Only on Fridays"
            ],
            "correctAnswer": "Yes, when a cardinal number precedes the noun, 'dem' is optional ('tree book' or 'the tree book dem')",
            "explanation": "Numerals alone ('tree book') can carry plurality, but 'dem' may be added for definite specificity ('the tree book dem')."
          },
          {
            "id": "p-u3-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'quick-quick' mean in 'Make we go quick-quick'?",
            "options": [
              "Very rapidly / without delay",
              "Slowly like a tortoise",
              "Quietly without noise",
              "Later in the evening"
            ],
            "correctAnswer": "Very rapidly / without delay",
            "explanation": "Adverbial reduplication reinforces speed and urgency."
          },
          {
            "id": "p-u3-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Buy me two _____ (fresh) orange for road.'",
            "options": [
              "fresh-fresh",
              "fresh dem",
              "freshly",
              "freshest"
            ],
            "correctAnswer": "fresh-fresh",
            "explanation": "'Fresh-fresh orange' emphasizes freshness across the items."
          },
          {
            "id": "p-u3-l1-q12",
            "type": "multiple_choice",
            "prompt": "In Pidgin, how do you express associative plurality, like 'Chidi and his friends/family'?",
            "options": [
              "'Chidi dem'",
              "'Chidi and all'",
              "'The Chidis'",
              "'Group of Chidi'"
            ],
            "correctAnswer": "'Chidi dem'",
            "explanation": "'[Name] dem' is associative plural meaning that person together with their peers or household."
          },
          {
            "id": "p-u3-l1-q13",
            "type": "multiple_choice",
            "prompt": "What does 'small-small' mean in 'Take am small-small'?",
            "options": [
              "Gradually, gently, or step by step",
              "In miniature pieces",
              "Throw it away",
              "Drink it all at once"
            ],
            "correctAnswer": "Gradually, gently, or step by step",
            "explanation": "'Small-small' means bit by bit, gradually, or taking caution."
          },
          {
            "id": "p-u3-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The woman _____ (plural) dey cook for party.'",
            "options": [
              "dem",
              "s",
              "people",
              "group"
            ],
            "correctAnswer": "dem",
            "explanation": "'Woman dem' is the plural form for women."
          },
          {
            "id": "p-u3-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'We speak different languages as one people.'",
            "tokens": [
              "different-different",
              "language",
              "as",
              "one",
              "people",
              "talk",
              "We",
              "de"
            ],
            "correctTokens": [
              "We",
              "de",
              "talk",
              "different-different",
              "language",
              "as",
              "one",
              "people"
            ],
            "explanation": "JW.org statement: 'We de talk different-different language, even so, we de do all our thing as one people.'"
          },
          {
            "id": "p-u3-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'The children have gone to the house.'",
            "tokens": [
              "don",
              "house",
              "go",
              "The",
              "dem",
              "pikin"
            ],
            "correctTokens": [
              "The",
              "pikin",
              "dem",
              "don",
              "go",
              "house"
            ],
            "explanation": "'The pikin dem don go house' uses post-nominal 'dem'."
          },
          {
            "id": "p-u3-l1-q17",
            "type": "matching",
            "prompt": "Match the singular Pidgin noun to its plural post-nominal form:",
            "pairs": [
              {
                "left": "Pikin (child)",
                "right": "Pikin dem (children)"
              },
              {
                "left": "Motor (car)",
                "right": "Motor dem (cars)"
              },
              {
                "left": "Book (book)",
                "right": "Book dem (books)"
              },
              {
                "left": "Friend (friend)",
                "right": "Friend dem (friends)"
              }
            ],
            "explanation": "Pluralization with post-nominal 'dem'."
          },
          {
            "id": "p-u3-l1-q18",
            "type": "matching",
            "prompt": "Match the reduplicated Pidgin term with its communicative nuance:",
            "pairs": [
              {
                "left": "Well-well",
                "right": "Thoroughly / deeply"
              },
              {
                "left": "Quick-quick",
                "right": "Urgent / rapid speed"
              },
              {
                "left": "Small-small",
                "right": "Gradually / gently"
              },
              {
                "left": "Different-different",
                "right": "Assorted variety"
              }
            ],
            "explanation": "Core reduplicative patterns."
          },
          {
            "id": "p-u3-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'All the elder dem don enter hall.' Who entered the hall?",
            "audioText": "All the elder dem don enter hall.",
            "options": [
              "All the elders have entered the hall",
              "Only one elderly person entered",
              "A small child entered the hall",
              "The hall is completely empty"
            ],
            "correctAnswer": "All the elders have entered the hall",
            "explanation": "'Elder dem' = the elders; 'don enter' = have entered."
          },
          {
            "id": "p-u3-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Bring those clean-clean cup dem come.' Which cups should be brought?",
            "audioText": "Bring those clean-clean cup dem come.",
            "options": [
              "The sparkling clean cups",
              "The dirty cups from yesterday",
              "The broken clay pots",
              "Only one plastic bottle"
            ],
            "correctAnswer": "The sparkling clean cups",
            "explanation": "'Clean-clean cup dem' = the clean cups (plural & intensive)."
          }
        ]
      },
      {
        "id": "p-u3-l2",
        "title": "Lesson 2: Possession & Belonging (Get, For, Im)",
        "description": "Express ownership and possession using the verb 'Get' (to possess), prepositions 'For', possessive pronouns, and 'Own'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u3-l2-q1",
            "type": "multiple_choice",
            "prompt": "How does Nigerian Pidgin express 'to have' or 'to possess'?",
            "options": [
              "Using the verb 'get' ('I get money', 'We get Bible')",
              "Using the verb 'hold' only",
              "Using 'have-gotten'",
              "Using 'is with'"
            ],
            "correctAnswer": "Using the verb 'get' ('I get money', 'We get Bible')",
            "explanation": "'Get' is the standard verb of possession (e.g. JW.org: 'For this website, we de get Bible, we still get different-different book')."
          },
          {
            "id": "p-u3-l2-q2",
            "type": "multiple_choice",
            "prompt": "How do you say 'This car belongs to me' or 'This is my own car'?",
            "options": [
              "'Na my own car be dis' or 'Dis car na my own'",
              "'This car is owning me'",
              "'I am the car's ownering'",
              "'Car mine this'"
            ],
            "correctAnswer": "'Na my own car be dis' or 'Dis car na my own'",
            "explanation": "'Na my own' or possessive 'my own [noun]' asserts exclusive ownership."
          },
          {
            "id": "p-u3-l2-q3",
            "type": "multiple_choice",
            "prompt": "How is 'his book' or 'her book' expressed in Nigerian Pidgin?",
            "options": [
              "'Im book' or 'E book'",
              "'His-her book'",
              "'Book of him'",
              "'Its book'"
            ],
            "correctAnswer": "'Im book' or 'E book'",
            "explanation": "Pre-nominal 'Im' or 'E' functions as the gender-neutral possessive determiner."
          },
          {
            "id": "p-u3-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We still _____ (have) different-different book for study.'",
            "options": [
              "get",
              "hold",
              "take",
              "carry"
            ],
            "correctAnswer": "get",
            "explanation": "JW.org Pidgin: 'we still get different-different book and you fit use-am for study'."
          },
          {
            "id": "p-u3-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Dat house na for _____ (him/her).'",
            "options": [
              "im",
              "am",
              "he",
              "dem-own"
            ],
            "correctAnswer": "im",
            "explanation": "'Na for im' = It belongs to him/her."
          },
          {
            "id": "p-u3-l2-q6",
            "type": "multiple_choice",
            "prompt": "What does 'I no get wahala' mean?",
            "options": [
              "'I have no problems / I have no trouble'",
              "'I am causing trouble'",
              "'I bought trouble at the market'",
              "'Trouble has arrived'"
            ],
            "correctAnswer": "'I have no problems / I have no trouble'",
            "explanation": "'No get wahala' = do not have any trouble."
          },
          {
            "id": "p-u3-l2-q7",
            "type": "multiple_choice",
            "prompt": "How do you say 'Whose book is this?' in Nigerian Pidgin?",
            "options": [
              "'Who get this book?' or 'Na who get this book?'",
              "'Whose this book is?'",
              "'Book of whom?'",
              "'Who be the book?'"
            ],
            "correctAnswer": "'Who get this book?' or 'Na who get this book?'",
            "explanation": "'Who get [object]?' literally translates 'Who possesses / owns [object]?'."
          },
          {
            "id": "p-u3-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Na _____ (who) get this motor wey park here?'",
            "options": [
              "who",
              "wetin",
              "wia",
              "which"
            ],
            "correctAnswer": "who",
            "explanation": "'Na who get...' asks 'Who owns...'."
          },
          {
            "id": "p-u3-l2-q9",
            "type": "multiple_choice",
            "prompt": "How do you express 'our meetings' in standard Pidgin?",
            "options": [
              "'Our meeting' or 'Our meeting dem'",
              "'Us meeting'",
              "'We own meeting'",
              "'Meeting of us'"
            ],
            "correctAnswer": "'Our meeting' or 'Our meeting dem'",
            "explanation": "JW.org Pidgin: 'Learn about wetin we de do for our meetings'."
          },
          {
            "id": "p-u3-l2-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Mind your own business' translate to in common Pidgin idiom?",
            "options": [
              "'Face your own work' or 'Face your lane'",
              "'Look your eye'",
              "'Chop your business'",
              "'Carry your feet go'"
            ],
            "correctAnswer": "'Face your own work' or 'Face your lane'",
            "explanation": "'Face your lane' or 'face your own work' means mind your personal affairs."
          },
          {
            "id": "p-u3-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Every person get _____ (their own) talent.'",
            "options": [
              "im own",
              "dem own",
              "its",
              "am own"
            ],
            "correctAnswer": "im own",
            "explanation": "'Im own' refers to an individual's personal possession."
          },
          {
            "id": "p-u3-l2-q12",
            "type": "multiple_choice",
            "prompt": "What does 'E get sense' mean when describing a person?",
            "options": [
              "He/She is intelligent, wise, and sensible",
              "He has five sensory organs",
              "He has lost his way",
              "He is very stubborn"
            ],
            "correctAnswer": "He/She is intelligent, wise, and sensible",
            "explanation": "'Get sense' is high praise denoting intellect, common sense, and prudence."
          },
          {
            "id": "p-u3-l2-q13",
            "type": "multiple_choice",
            "prompt": "How do you say 'Their house is big'?",
            "options": [
              "'Their ouse big' or 'Dem ouse big'",
              "'Ouse of them big'",
              "'Them is ouse big'",
              "'Big ouse them'"
            ],
            "correctAnswer": "'Their ouse big' or 'Dem ouse big'",
            "explanation": "'Dem ouse' or 'Their ouse' expresses third person plural possession."
          },
          {
            "id": "p-u3-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Check the different parts wey the Bible _____ (has).'",
            "options": [
              "get",
              "hold",
              "take",
              "sabi"
            ],
            "correctAnswer": "get",
            "explanation": "JW.org Pidgin: 'Check the different parts wey the New World Translation get'."
          },
          {
            "id": "p-u3-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Who owns all this money on the table?'",
            "tokens": [
              "get",
              "money",
              "Na",
              "table?",
              "all",
              "dis",
              "who",
              "for"
            ],
            "correctTokens": [
              "Na",
              "who",
              "get",
              "all",
              "dis",
              "money",
              "for",
              "table?"
            ],
            "explanation": "'Na who get all dis money for table?' forms the natural possessive inquiry."
          },
          {
            "id": "p-u3-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'This house belongs to our family.'",
            "tokens": [
              "for",
              "our",
              "house",
              "na",
              "Dis",
              "family"
            ],
            "correctTokens": [
              "Dis",
              "house",
              "na",
              "for",
              "our",
              "family"
            ],
            "explanation": "'Dis house na for our family' establishes possessive attribution."
          },
          {
            "id": "p-u3-l2-q17",
            "type": "matching",
            "prompt": "Match the possessive construction with its meaning:",
            "pairs": [
              {
                "left": "Na my own",
                "right": "It is mine"
              },
              {
                "left": "Na your own",
                "right": "It is yours"
              },
              {
                "left": "Na im own",
                "right": "It is his / hers"
              },
              {
                "left": "Na our own",
                "right": "It is ours"
              }
            ],
            "explanation": "Independent possessive pronoun forms using 'own'."
          },
          {
            "id": "p-u3-l2-q18",
            "type": "matching",
            "prompt": "Match the 'get' idiom to its English translation:",
            "pairs": [
              {
                "left": "Get sense",
                "right": "Be wise and prudent"
              },
              {
                "left": "Get mouth",
                "right": "Be persuasive / talkative"
              },
              {
                "left": "Get head",
                "right": "Be lucky / fortunate"
              },
              {
                "left": "Get level",
                "right": "Have prestige / high status"
              }
            ],
            "explanation": "Somatic and social idioms formed with the verb 'get'."
          },
          {
            "id": "p-u3-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'For this website, we get Bible and we still get different books.' What does the website possess?",
            "audioText": "For this website, we get Bible and we still get different books.",
            "options": [
              "The Bible and different books",
              "Only commercial advertisements",
              "Movie tickets and sport shoes",
              "Nothing at all"
            ],
            "correctAnswer": "The Bible and different books",
            "explanation": "JW.org statement: 'we de get Bible, we still get different-different book'."
          },
          {
            "id": "p-u3-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'That big motor na my brother own.' Whose car is it?",
            "audioText": "That big motor na my brother own.",
            "options": [
              "It belongs to the speaker's brother",
              "It belongs to the taxi company",
              "The speaker found it on the road",
              "It belongs to the village chief"
            ],
            "correctAnswer": "It belongs to the speaker's brother",
            "explanation": "'Na my brother own' = It is my brother's property."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-4",
    "unitNumber": 4,
    "level": "Level 2: Intermediate (Wafarian/Street Smart)",
    "title": "Unit 4: Serial Verb Constructions (SVCs)",
    "description": "Chain multiple verbs without conjunctions to express complex direction, benefaction, cause-effect, and instrument: Take... Come, Carry... Go, Cook... Give.",
    "lessons": [
      {
        "id": "p-u4-l1",
        "title": "Lesson 1: Directional Serial Verbs (Take... Come/Go)",
        "description": "Master multi-verb serial sequences expressing transfer and movement: Take... Come ('bring'), Carry... Go ('take away'), and Run... Enter ('run into').",
        "completed": false,
        "questions": [
          {
            "id": "p-u4-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is a Serial Verb Construction (SVC) in Nigerian Pidgin?",
            "options": [
              "Two or more verbs chained together in a single clause under one subject without conjunctions",
              "A sentence with multiple commas and exclamation marks",
              "A list of irregular Latin verbs",
              "A verb followed by five adverbs"
            ],
            "correctAnswer": "Two or more verbs chained together in a single clause under one subject without conjunctions",
            "explanation": "Inherited from West African languages (Niger-Congo substrate), SVCs combine verbs like 'take', 'come', 'go', and 'give' into a single conceptual predicate."
          },
          {
            "id": "p-u4-l1-q2",
            "type": "multiple_choice",
            "prompt": "How do you say 'Bring that book here' using an SVC with 'take' and 'come'?",
            "options": [
              "'Take dat book come' or 'Take dat book come give me'",
              "'Bring book to here please'",
              "'Carrying book to me'",
              "'Take and come the book'"
            ],
            "correctAnswer": "'Take dat book come' or 'Take dat book come give me'",
            "explanation": "'Take [object] come' is the classic SVC structure replacing the single English verb 'bring'."
          },
          {
            "id": "p-u4-l1-q3",
            "type": "multiple_choice",
            "prompt": "What does 'Carry am go' mean in everyday Pidgin?",
            "options": [
              "'Take it away' / 'Remove it to another location'",
              "'Bring it here immediately'",
              "'Drop it on the ground'",
              "'Look at it carefully'"
            ],
            "correctAnswer": "'Take it away' / 'Remove it to another location'",
            "explanation": "'Carry [object] go' denotes movement away from the speaker ('take away')."
          },
          {
            "id": "p-u4-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (Take) the water come make I drink.'",
            "options": [
              "Take",
              "Bring",
              "Hold",
              "Fling"
            ],
            "correctAnswer": "Take",
            "explanation": "'Take [item] come' introduces the object in a directional SVC."
          },
          {
            "id": "p-u4-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The boy run _____ (enter) inside the room.'",
            "options": [
              "enter",
              "go-to",
              "in",
              "reach"
            ],
            "correctAnswer": "enter",
            "explanation": "'Run enter' chains the manner of motion ('run') with entry ('enter')."
          },
          {
            "id": "p-u4-l1-q6",
            "type": "multiple_choice",
            "prompt": "How does JW.org translate 'See how this video makes the story of Jesus real to us'?",
            "options": [
              "'See how this video take make the story about Jesus life dey real to us'",
              "'Look as video make Jesus real'",
              "'Video doing Jesus life real'",
              "'See the television story of Jesus'"
            ],
            "correctAnswer": "'See how this video take make the story about Jesus life dey real to us'",
            "explanation": "JW.org Pidgin: 'See how this sweet videos take make the story about Jesus Christ life dey real to us' ('take make' = instrumental causation)."
          },
          {
            "id": "p-u4-l1-q7",
            "type": "multiple_choice",
            "prompt": "What does the SVC 'E fly pass over the fence' signify?",
            "options": [
              "It flew completely over the fence",
              "It stopped before the fence",
              "It broke the fence down",
              "It perched on the fence"
            ],
            "correctAnswer": "It flew completely over the fence",
            "explanation": "'Fly pass' combines manner ('fly') with spatial traversal ('pass')."
          },
          {
            "id": "p-u4-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Pack all these plate _____ (go) kitchen.'",
            "options": [
              "go",
              "to",
              "at",
              "reach"
            ],
            "correctAnswer": "go",
            "explanation": "'Pack [items] go [place]' combines collecting with directional movement."
          },
          {
            "id": "p-u4-l1-q9",
            "type": "multiple_choice",
            "prompt": "In the sentence 'E climb tree fall down', how many verbs form the serial event?",
            "options": [
              "Three verbs ('climb', 'fall', 'down/drop')",
              "Only one verb",
              "Two adjectives and a noun",
              "No verbs at all"
            ],
            "correctAnswer": "Three verbs ('climb', 'fall', 'down/drop')",
            "explanation": "A classic narrative SVC depicting climbing followed immediately by falling."
          },
          {
            "id": "p-u4-l1-q10",
            "type": "multiple_choice",
            "prompt": "How do you translate 'He escaped by running into the bush'?",
            "options": [
              "'Im run enter bush'",
              "'He ran inside bush'",
              "'He runned to the bush'",
              "'Bush ran him'"
            ],
            "correctAnswer": "'Im run enter bush'",
            "explanation": "'Run enter' is the standard directional serial compound."
          },
          {
            "id": "p-u4-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Carry the heavy load _____ (come) house.'",
            "options": [
              "come",
              "reach",
              "towards",
              "at"
            ],
            "correctAnswer": "come",
            "explanation": "'Carry [object] come' indicates transporting something toward the speaker."
          },
          {
            "id": "p-u4-l1-q12",
            "type": "multiple_choice",
            "prompt": "Can you put the English conjunction 'and' between verbs in an authentic SVC?",
            "options": [
              "No, true serial verbs occur without 'and' ('Take am come', not 'Take am and come')",
              "Yes, 'and' must always be inserted between every word",
              "Only when speaking to older people",
              "Yes, but only in questions"
            ],
            "correctAnswer": "No, true serial verbs occur without 'and' ('Take am come', not 'Take am and come')",
            "explanation": "Serial verbs directly juxtapose bare verb stems without coordinating conjunctions."
          },
          {
            "id": "p-u4-l1-q13",
            "type": "multiple_choice",
            "prompt": "What does 'Wetin make you do am?' mean?",
            "options": [
              "'What caused / made you do it?'",
              "'Where did you do it?'",
              "'Who helped you do it?'",
              "'When will you do it?'"
            ],
            "correctAnswer": "'What caused / made you do it?'",
            "explanation": "'Make you do am' is a causative SVC sequence."
          },
          {
            "id": "p-u4-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Na your word _____ (caused) me happy.'",
            "options": [
              "take make",
              "bring make",
              "send make",
              "carry do"
            ],
            "correctAnswer": "take make",
            "explanation": "'Take make' is the standard instrumental-causative SVC in West African Pidgin."
          },
          {
            "id": "p-u4-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Take that chair and bring it here for me.'",
            "tokens": [
              "me",
              "chair",
              "come",
              "dat",
              "Take",
              "give"
            ],
            "correctTokens": [
              "Take",
              "dat",
              "chair",
              "come",
              "give",
              "me"
            ],
            "explanation": "Quintessential triple-verb SVC: 'Take... come... give me'."
          },
          {
            "id": "p-u4-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'The dog ran and entered the kitchen.'",
            "tokens": [
              "kitchen",
              "The",
              "enter",
              "run",
              "dog"
            ],
            "correctTokens": [
              "The",
              "dog",
              "run",
              "enter",
              "kitchen"
            ],
            "explanation": "'The dog run enter kitchen' links motion and direction serially."
          },
          {
            "id": "p-u4-l1-q17",
            "type": "matching",
            "prompt": "Match the serial verb construction with its English meaning:",
            "pairs": [
              {
                "left": "Take am come",
                "right": "Bring it here"
              },
              {
                "left": "Carry am go",
                "right": "Take it away"
              },
              {
                "left": "Run enter",
                "right": "Dash inside"
              },
              {
                "left": "Jump cross",
                "right": "Leap across"
              }
            ],
            "explanation": "Core directional serial verb pairs."
          },
          {
            "id": "p-u4-l1-q18",
            "type": "matching",
            "prompt": "Match the SVC sentence to its communicative goal:",
            "pairs": [
              {
                "left": "Take book come give me",
                "right": "Hand me the reading book"
              },
              {
                "left": "Carry dirt throway",
                "right": "Dispose of the trash"
              },
              {
                "left": "Climb ladder reach roof",
                "right": "Ascend to the ceiling"
              },
              {
                "left": "Drive motor go market",
                "right": "Travel by vehicle to trade"
              }
            ],
            "explanation": "Complex task serialization in everyday life."
          },
          {
            "id": "p-u4-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Take that cup of water come give your grandmama.' What instruction is given?",
            "audioText": "Take that cup of water come give your grandmama.",
            "options": [
              "Bring that cup of water to your grandmother",
              "Drink the water before grandmother arrives",
              "Pour the water on the floor outside",
              "Sell the cup at the market"
            ],
            "correctAnswer": "Bring that cup of water to your grandmother",
            "explanation": "'Take... come give...' instructs transferring the item to grandmother."
          },
          {
            "id": "p-u4-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'The thief run commot jump enter bus.' How did the thief escape?",
            "audioText": "The thief run commot jump enter bus.",
            "options": [
              "Ran out, leaped, and boarded a bus",
              "Walked calmly into a store",
              "Sat down on the roadside",
              "Drove away in a private car"
            ],
            "correctAnswer": "Ran out, leaped, and boarded a bus",
            "explanation": "Chained motion SVC: 'run commot' (ran out) + 'jump enter bus' (leaped into a bus)."
          }
        ]
      },
      {
        "id": "p-u4-l2",
        "title": "Lesson 2: Resultative & Benefactive Verbs (Do... Give/Kill)",
        "description": "Explore benefactive 'Give' (doing an action for someone) and resultative verb constructions ('beat kill', 'cook give', 'talk make I hear').",
        "completed": false,
        "questions": [
          {
            "id": "p-u4-l2-q1",
            "type": "multiple_choice",
            "prompt": "In Nigerian Pidgin, what verb acts as the benefactive marker ('for someone / to someone')?",
            "options": [
              "'Give' (e.g. 'Cook rice give am' = Cook rice for him)",
              "'Send' only",
              "'Dash' only",
              "'To' like standard English"
            ],
            "correctAnswer": "'Give' (e.g. 'Cook rice give am' = Cook rice for him)",
            "explanation": "Benefactive SVCs use 'give' as a serial verb indicating the recipient or beneficiary of an action."
          },
          {
            "id": "p-u4-l2-q2",
            "type": "multiple_choice",
            "prompt": "What does 'Buy bread give your sister' mean?",
            "options": [
              "Purchase bread for your sister",
              "Your sister should buy bread for you",
              "Sell bread to your sister",
              "Throw bread at your sister"
            ],
            "correctAnswer": "Purchase bread for your sister",
            "explanation": "'Buy [item] give [person]' is the benefactive serial structure."
          },
          {
            "id": "p-u4-l2-q3",
            "type": "multiple_choice",
            "prompt": "What is a resultative verb construction in Pidgin?",
            "options": [
              "A verb sequence where the second verb expresses the outcome or result of the first ('beat am die', 'wipe am clean')",
              "A sentence about examination results",
              "A question about mathematics",
              "A prayer for good fortune"
            ],
            "correctAnswer": "A verb sequence where the second verb expresses the outcome or result of the first ('beat am die', 'wipe am clean')",
            "explanation": "In resultative SVCs, the second verb encodes the state resulting from the primary action."
          },
          {
            "id": "p-u4-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Wash the plates _____ (clean) well-well.'",
            "options": [
              "clean",
              "give",
              "kill",
              "come"
            ],
            "correctAnswer": "clean",
            "explanation": "'Wash [item] clean' expresses the resultant spotless state."
          },
          {
            "id": "p-u4-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Sing one sweet song _____ (for) our visitors.'",
            "options": [
              "give",
              "for-am",
              "dash",
              "to"
            ],
            "correctAnswer": "give",
            "explanation": "Benefactive 'give' introduces the recipients: 'Sing song give our visitors'."
          },
          {
            "id": "p-u4-l2-q6",
            "type": "multiple_choice",
            "prompt": "What does the expression 'Talk make I hear' mean?",
            "options": [
              "'Speak up so that I can hear / Tell me your thoughts'",
              "'Be quiet immediately'",
              "'Go speak to a doctor'",
              "'Listen to music alone'"
            ],
            "correctAnswer": "'Speak up so that I can hear / Tell me your thoughts'",
            "explanation": "'Talk make I hear' invites clear communication or disclosure."
          },
          {
            "id": "p-u4-l2-q7",
            "type": "multiple_choice",
            "prompt": "In the idiom 'Laughter wan kill me', what does the resultative verb 'kill' mean?",
            "options": [
              "Intense, overwhelming figurative effect ('I am dying of laughter')",
              "Actual physical murder",
              "A medical disease",
              "A joke about hunting"
            ],
            "correctAnswer": "Intense, overwhelming figurative effect ('I am dying of laughter')",
            "explanation": "'Kill' is used hyperbole to express overpowering emotion or exhaustion."
          },
          {
            "id": "p-u4-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Explain this lesson _____ (to/for) me.'",
            "options": [
              "give",
              "at",
              "towards",
              "send"
            ],
            "correctAnswer": "give",
            "explanation": "'Explain give me' = Explain to me / for my benefit."
          },
          {
            "id": "p-u4-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does 'Do am well' signify in advice?",
            "options": [
              "Perform the task thoroughly and with high quality",
              "Do it in a rush",
              "Leave the job half-finished",
              "Delegate the work to a stranger"
            ],
            "correctAnswer": "Perform the task thoroughly and with high quality",
            "explanation": "'Do am well' is universal counsel for meticulous craftsmanship."
          },
          {
            "id": "p-u4-l2-q10",
            "type": "multiple_choice",
            "prompt": "How does JW.org Pidgin phrase: 'Follow the example that Jesus gave us'?",
            "options": [
              "'Follow the example wey Jesus Christ give us'",
              "'Follow Jesus Christ's gave'",
              "'Walk like Jesus was'",
              "'Copy Jesus by force'"
            ],
            "correctAnswer": "'Follow the example wey Jesus Christ give us'",
            "explanation": "JW.org text: 'We de do everything wey we fit do to follow the example wey Jesus Christ give us'."
          },
          {
            "id": "p-u4-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Na God _____ (gave) us life and health.'",
            "options": [
              "give",
              "dash-am",
              "handed",
              "blessed-with"
            ],
            "correctAnswer": "give",
            "explanation": "'Na God give us...' is the standard attribution of life."
          },
          {
            "id": "p-u4-l2-q12",
            "type": "multiple_choice",
            "prompt": "What does 'E shout make everybody hear' mean?",
            "options": [
              "He cried out loudly so that all within earshot would take notice",
              "He whispered quietly in someone's ear",
              "He wrote an email to everybody",
              "He went to sleep"
            ],
            "correctAnswer": "He cried out loudly so that all within earshot would take notice",
            "explanation": "'Shout make [subject] hear' expresses purpose and audible result."
          },
          {
            "id": "p-u4-l2-q13",
            "type": "multiple_choice",
            "prompt": "What does 'Tie the goat make e no run' mean?",
            "options": [
              "Tether the goat so that it does not escape",
              "Feed the goat grass",
              "Sell the goat at the market",
              "Chase the goat into the forest"
            ],
            "correctAnswer": "Tether the goat so that it does not escape",
            "explanation": "Preventive purposive serial construction."
          },
          {
            "id": "p-u4-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Sweep the whole parlor _____ (clean).' ",
            "options": [
              "clean",
              "give",
              "finish",
              "sweep"
            ],
            "correctAnswer": "clean",
            "explanation": "Resultative state: 'Sweep... clean'."
          },
          {
            "id": "p-u4-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Please cook good soup for your father.'",
            "tokens": [
              "soup",
              "good",
              "father",
              "Cook",
              "your",
              "give"
            ],
            "correctTokens": [
              "Cook",
              "good",
              "soup",
              "give",
              "your",
              "father"
            ],
            "explanation": "'Cook good soup give your father' uses benefactive 'give'."
          },
          {
            "id": "p-u4-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Explain that matter so that we can understand.'",
            "tokens": [
              "we",
              "matter",
              "sabi",
              "Explain",
              "make",
              "dat"
            ],
            "correctTokens": [
              "Explain",
              "dat",
              "matter",
              "make",
              "we",
              "sabi"
            ],
            "explanation": "'Explain dat matter make we sabi' expresses purpose and outcome."
          },
          {
            "id": "p-u4-l2-q17",
            "type": "matching",
            "prompt": "Match the Pidgin benefactive / resultative construction to its meaning:",
            "pairs": [
              {
                "left": "Cook give am",
                "right": "Prepare a meal for him/her"
              },
              {
                "left": "Wash clean",
                "right": "Cleanse until spotless"
              },
              {
                "left": "Talk make I hear",
                "right": "Speak so I can understand"
              },
              {
                "left": "Tie strong",
                "right": "Fasten securely"
              }
            ],
            "explanation": "Primary benefactive and resultative pairings."
          },
          {
            "id": "p-u4-l2-q18",
            "type": "matching",
            "prompt": "Match the idiom to its contextual meaning:",
            "pairs": [
              {
                "left": "Hunger wan kill me",
                "right": "I am extremely famished"
              },
              {
                "left": "Work wan break my back",
                "right": "I am exhausted from labor"
              },
              {
                "left": "Help am carry load",
                "right": "Assist with their burden"
              },
              {
                "left": "Tell am the truth",
                "right": "Disclose facts honestly"
              }
            ],
            "explanation": "Functional idiomatic usages."
          },
          {
            "id": "p-u4-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Help your sister carry that heavy bag give your mama.' What is the full instruction?",
            "audioText": "Help your sister carry that heavy bag give your mama.",
            "options": [
              "Help your sister transport the heavy bag to your mother",
              "Take your mother's bag and run away",
              "Ask your sister to cook food for mama",
              "Leave the heavy bag in the street"
            ],
            "correctAnswer": "Help your sister transport the heavy bag to your mother",
            "explanation": "Multi-verb sequence: 'Help... carry... give mama'."
          },
          {
            "id": "p-u4-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'The sweet story make all of us de smile.' What was the effect of the story?",
            "audioText": "The sweet story make all of us de smile.",
            "options": [
              "The enjoyable story caused all of us to smile",
              "The story made everyone cry with sorrow",
              "Nobody paid attention to the speaker",
              "The story was too difficult to understand"
            ],
            "correctAnswer": "The enjoyable story caused all of us to smile",
            "explanation": "Causative SVC: 'make all of us de smile'."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-5",
    "unitNumber": 5,
    "level": "Level 2: Intermediate (Wafarian/Street Smart)",
    "title": "Unit 5: Advanced Tense & Aspect Structuring",
    "description": "Explore the auxiliary timeline: Future marker 'Go', future perfect compound 'Go Don', remote past marker 'Bin', and habitual 'Dey'.",
    "lessons": [
      {
        "id": "p-u5-l1",
        "title": "Lesson 1: Future 'Go' & Compound 'Go Don'",
        "description": "Master the future auxiliary particle 'Go' and the future perfect compound construction 'Go Don' ('will have done').",
        "completed": false,
        "questions": [
          {
            "id": "p-u5-l1-q1",
            "type": "multiple_choice",
            "prompt": "What auxiliary particle marks future tense ('will' / 'shall') in Nigerian Pidgin?",
            "options": [
              "'Go' (e.g. 'I go come tomorrow')",
              "'Will' only",
              "'Shall' only",
              "'Dey' only"
            ],
            "correctAnswer": "'Go' (e.g. 'I go come tomorrow')",
            "explanation": "'Go' functions as the future tense auxiliary particle in Nigerian Pidgin."
          },
          {
            "id": "p-u5-l1-q2",
            "type": "multiple_choice",
            "prompt": "In JW.org video titles, what does 'Dey give and you go happy' promise?",
            "options": [
              "'Keep giving and you will be happy'",
              "'Go away and never return'",
              "'Give your money to the bank'",
              "'Happiness is difficult to find'"
            ],
            "correctAnswer": "'Keep giving and you will be happy'",
            "explanation": "JW.org title: 'Dey Give and You Go Happy' pairs continuous giving ('dey give') with future happiness ('you go happy')."
          },
          {
            "id": "p-u5-l1-q3",
            "type": "multiple_choice",
            "prompt": "How is the English Future Perfect tense 'I will have eaten by 4 PM' constructed in advanced Nigerian Pidgin?",
            "options": [
              "'By 4 o'clock, I go don chop' (compound auxiliary 'go' + 'don')",
              "'By 4 o'clock, I go will eat'",
              "'I go eating have finished by 4 o'clock'",
              "'4 o'clock shall meet my eating'"
            ],
            "correctAnswer": "'By 4 o'clock, I go don chop' (compound auxiliary 'go' + 'don')",
            "explanation": "The combination of 'go' (future) and 'don' (completive) represents future perfect aspect ('will have completed')."
          },
          {
            "id": "p-u5-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Tomorrow morning, we _____ (will go) to market.'",
            "options": [
              "go go",
              "dey go",
              "don go",
              "never go"
            ],
            "correctAnswer": "go go",
            "explanation": "'We go go' combines auxiliary future 'go' with the lexical verb 'go' (we will go)."
          },
          {
            "id": "p-u5-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'By next year, I _____ (will have built) my house.'",
            "options": [
              "go don build",
              "dey build",
              "don build",
              "for build"
            ],
            "correctAnswer": "go don build",
            "explanation": "'Go don build' = will have built."
          },
          {
            "id": "p-u5-l1-q6",
            "type": "multiple_choice",
            "prompt": "How do you negate future tense in Pidgin ('I will not go')?",
            "options": [
              "'I no go go'",
              "'I will no go'",
              "'I not go'",
              "'No go me'"
            ],
            "correctAnswer": "'I no go go'",
            "explanation": "Negator 'no' precedes future auxiliary 'go': 'I no go go' = I will not go."
          },
          {
            "id": "p-u5-l1-q7",
            "type": "multiple_choice",
            "prompt": "What does 'E go better' express in Nigerian popular culture and philosophy?",
            "options": [
              "An optimistic expression of resilient hope: 'Things will improve / It shall be well'",
              "Things are getting worse",
              "A request for more medicine",
              "A complaint about the weather"
            ],
            "correctAnswer": "An optimistic expression of resilient hope: 'Things will improve / It shall be well'",
            "explanation": "'E go better' is Nigeria's national motto of endurance and optimism."
          },
          {
            "id": "p-u5-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If you study hard, you _____ (will) pass your exam.'",
            "options": [
              "go",
              "don",
              "bin",
              "never"
            ],
            "correctAnswer": "go",
            "explanation": "'You go pass' expresses future consequence."
          },
          {
            "id": "p-u5-l1-q9",
            "type": "multiple_choice",
            "prompt": "What does 'By the time you reach there, the meeting go don start' mean?",
            "options": [
              "By the time you arrive, the meeting will have already begun",
              "The meeting will wait for your arrival",
              "The meeting is cancelled",
              "You arrived yesterday"
            ],
            "correctAnswer": "By the time you arrive, the meeting will have already begun",
            "explanation": "Compound future perfect 'go don start' = will have begun."
          },
          {
            "id": "p-u5-l1-q10",
            "type": "multiple_choice",
            "prompt": "How do you say 'We will see tomorrow'?",
            "options": [
              "'We go see tomorrow'",
              "'We are seeing tomorrow'",
              "'Tomorrow sees us'",
              "'We don see tomorrow'"
            ],
            "correctAnswer": "'We go see tomorrow'",
            "explanation": "'We go see tomorrow' is the standard parting farewell."
          },
          {
            "id": "p-u5-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'God _____ (will) bless the work of your hands.'",
            "options": [
              "go",
              "don",
              "never",
              "bin"
            ],
            "correctAnswer": "go",
            "explanation": "'God go bless...' expresses future benediction."
          },
          {
            "id": "p-u5-l1-q12",
            "type": "multiple_choice",
            "prompt": "In the sentence 'I go dey call you', what does 'go dey' express?",
            "options": [
              "Future continuous aspect ('I will be calling you continuously')",
              "Past completed action",
              "Negative refusal",
              "Physical walking"
            ],
            "correctAnswer": "Future continuous aspect ('I will be calling you continuously')",
            "explanation": "'Go' (future) + 'dey' (continuous) = future ongoing activity ('will be doing')."
          },
          {
            "id": "p-u5-l1-q13",
            "type": "multiple_choice",
            "prompt": "What does 'Nobody go fit stop us' mean?",
            "options": [
              "No one will be able to hinder or stop us",
              "Everyone will stop together",
              "We have already stopped",
              "Stopping is forbidden"
            ],
            "correctAnswer": "No one will be able to hinder or stop us",
            "explanation": "'Go fit' = will be able to."
          },
          {
            "id": "p-u5-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'By sunset, the rain _____ (will have stopped).' ",
            "options": [
              "go don stop",
              "dey stop",
              "don stop",
              "never stop"
            ],
            "correctAnswer": "go don stop",
            "explanation": "'Go don stop' = will have ceased."
          },
          {
            "id": "p-u5-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Give and you will surely be happy.'",
            "tokens": [
              "happy",
              "go",
              "you",
              "Dey",
              "give",
              "and"
            ],
            "correctTokens": [
              "Dey",
              "give",
              "and",
              "you",
              "go",
              "happy"
            ],
            "explanation": "JW.org standard theme: 'Dey give and you go happy'."
          },
          {
            "id": "p-u5-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'By 5 PM, they will have finished the work.'",
            "tokens": [
              "don",
              "work",
              "5",
              "By",
              "finish",
              "go",
              "PM,",
              "dem",
              "the"
            ],
            "correctTokens": [
              "By",
              "5",
              "PM,",
              "dem",
              "go",
              "don",
              "finish",
              "the",
              "work"
            ],
            "explanation": "Future perfect ordering: 'dem go don finish the work'."
          },
          {
            "id": "p-u5-l1-q17",
            "type": "matching",
            "prompt": "Match the auxiliary combination with its temporal interpretation:",
            "pairs": [
              {
                "left": "Go chop",
                "right": "Simple Future (will eat)"
              },
              {
                "left": "Go dey chop",
                "right": "Future Continuous (will be eating)"
              },
              {
                "left": "Go don chop",
                "right": "Future Perfect (will have eaten)"
              },
              {
                "left": "No go chop",
                "right": "Future Negative (will not eat)"
              }
            ],
            "explanation": "Complete paradigm of future aspectual combinations."
          },
          {
            "id": "p-u5-l1-q18",
            "type": "matching",
            "prompt": "Match the Pidgin phrase to its English translation:",
            "pairs": [
              {
                "left": "E go better",
                "right": "Things will improve"
              },
              {
                "left": "We go meet again",
                "right": "We shall meet another time"
              },
              {
                "left": "Rain go fall",
                "right": "It will rain"
              },
              {
                "left": "I go call you later",
                "right": "I will telephone you afterwards"
              }
            ],
            "explanation": "Everyday expressions featuring 'go'."
          },
          {
            "id": "p-u5-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'By the time the bus go arrive, we go don pack all our luggage.' What will be finished before the bus arrives?",
            "audioText": "By the time the bus go arrive, we go don pack all our luggage.",
            "options": [
              "All the luggage will have been packed",
              "The bus will leave without luggage",
              "They will still be looking for their bags",
              "The bus is broken"
            ],
            "correctAnswer": "All the luggage will have been packed",
            "explanation": "'We go don pack all our luggage' marks completion before the bus arrives."
          },
          {
            "id": "p-u5-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'No fear, tomorrow go bring better news.' What comfort is offered?",
            "audioText": "No fear, tomorrow go bring better news.",
            "options": [
              "Do not fear, tomorrow will bring better tidings",
              "Tomorrow will bring disaster",
              "Stay inside the house forever",
              "News broadcasts are turned off"
            ],
            "correctAnswer": "Do not fear, tomorrow will bring better tidings",
            "explanation": "'Tomorrow go bring better news' asserts confident future hope."
          }
        ]
      },
      {
        "id": "p-u5-l2",
        "title": "Lesson 2: Remote Past 'Bin' & Habitual 'Dey'",
        "description": "Explore anteriority and remote past marked by 'Bin', past habits with 'Bin dey', and distinct present habitual usages.",
        "completed": false,
        "questions": [
          {
            "id": "p-u5-l2-q1",
            "type": "multiple_choice",
            "prompt": "What auxiliary particle marks remote past or anteriority in Nigerian Pidgin?",
            "options": [
              "'Bin' (e.g. 'I bin tell you say make you no go')",
              "'Did' only",
              "'Was' only",
              "'Ago' only"
            ],
            "correctAnswer": "'Bin' (e.g. 'I bin tell you say make you no go')",
            "explanation": "'Bin' (derived from English 'been') marks anterior or remote past time relative to the moment of speaking."
          },
          {
            "id": "p-u5-l2-q2",
            "type": "multiple_choice",
            "prompt": "What does 'I bin think say you dey Lagos' mean?",
            "options": [
              "'I had previously thought you were in Lagos'",
              "'I am thinking about traveling to Lagos'",
              "'You must go to Lagos right now'",
              "'Lagos is a big city'"
            ],
            "correctAnswer": "'I had previously thought you were in Lagos'",
            "explanation": "'Bin think' sets the cognitive state firmly in past time."
          },
          {
            "id": "p-u5-l2-q3",
            "type": "multiple_choice",
            "prompt": "How is the Past Continuous ('was/were doing') formed in Nigerian Pidgin?",
            "options": [
              "By combining 'bin' + 'dey' ('We bin dey sleep when rain start')",
              "By adding '-ing' to the verb",
              "By saying 'was dey'",
              "By saying 'bin don'"
            ],
            "correctAnswer": "By combining 'bin' + 'dey' ('We bin dey sleep when rain start')",
            "explanation": "'Bin dey' pairs the remote past marker 'bin' with imperfective 'dey' to create past continuous aspect."
          },
          {
            "id": "p-u5-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I _____ (had) see that movie last year.'",
            "options": [
              "bin",
              "go",
              "dey",
              "never"
            ],
            "correctAnswer": "bin",
            "explanation": "'I bin see' marks past occurrence."
          },
          {
            "id": "p-u5-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We _____ (were living) for Warri before we move go Abuja.'",
            "options": [
              "bin dey stay",
              "go stay",
              "don stay",
              "never stay"
            ],
            "correctAnswer": "bin dey stay",
            "explanation": "'Bin dey stay' marks a past continuous habitual state."
          },
          {
            "id": "p-u5-l2-q6",
            "type": "multiple_choice",
            "prompt": "What does the sentence 'Im bin don finish the exam before teacher talk' mean?",
            "options": [
              "He had already finished the exam before the teacher spoke (Past Perfect)",
              "He will start the exam when the teacher speaks",
              "He failed the examination",
              "The teacher forgot the exam"
            ],
            "correctAnswer": "He had already finished the exam before the teacher spoke (Past Perfect)",
            "explanation": "'Bin don' (past + completive) functions as the past perfect tense ('had done')."
          },
          {
            "id": "p-u5-l2-q7",
            "type": "multiple_choice",
            "prompt": "In everyday narration, is simple past often expressed by bare verbs without 'bin' (e.g. 'I see am yesterday')?",
            "options": [
              "Yes, stative or active verbs with past context words can express past without explicit 'bin'",
              "No, a sentence without 'bin' is illegal in Pidgin",
              "Only when singing songs",
              "Never"
            ],
            "correctAnswer": "Yes, stative or active verbs with past context words can express past without explicit 'bin'",
            "explanation": "NPE verbs are uninflected; temporal adverbials like 'yesterday' frequently locate bare verbs in the past."
          },
          {
            "id": "p-u5-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Where you _____ (were) when I call you?'",
            "options": [
              "bin dey",
              "dey go",
              "go dey",
              "never"
            ],
            "correctAnswer": "bin dey",
            "explanation": "'Where you bin dey?' = Where were you located?"
          },
          {
            "id": "p-u5-l2-q9",
            "type": "multiple_choice",
            "prompt": "How do you negate past 'bin' in Pidgin ('I had not seen him')?",
            "options": [
              "'I no bin see am'",
              "'I bin not see am'",
              "'I did not been see'",
              "'No bin me see'"
            ],
            "correctAnswer": "'I no bin see am'",
            "explanation": "Negator 'no' precedes 'bin': 'I no bin see am' = I did not see him."
          },
          {
            "id": "p-u5-l2-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Old days wey we bin dey small' recall?",
            "options": [
              "The old days when we used to be little children",
              "When we grow old in the future",
              "A small house we built yesterday",
              "A story about dwarfs"
            ],
            "correctAnswer": "The old days when we used to be little children",
            "explanation": "'We bin dey small' = we were small/young (nostalgic reminiscence)."
          },
          {
            "id": "p-u5-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'She _____ (did not) know wetin happen.'",
            "options": [
              "no bin",
              "never go",
              "don no",
              "go not"
            ],
            "correctAnswer": "no bin",
            "explanation": "'No bin know' = did not know."
          },
          {
            "id": "p-u5-l2-q12",
            "type": "multiple_choice",
            "prompt": "What does 'I bin dey wait for you since morning' emphasize?",
            "options": [
              "Prolonged, patient waiting that persisted all morning",
              "Waiting for five seconds only",
              "Refusing to wait at all",
              "Arriving in the evening"
            ],
            "correctAnswer": "Prolonged, patient waiting that persisted all morning",
            "explanation": "'Bin dey wait... since morning' captures past continuous duration."
          },
          {
            "id": "p-u5-l2-q13",
            "type": "multiple_choice",
            "prompt": "Which sentence shows a habitual action in the present vs the past?",
            "options": [
              "Present: 'I dey pray everyday'; Past: 'I bin dey pray everyday'",
              "Both sentences are identical in time",
              "Pidgin cannot express habitual action",
              "'Everyday' only works for the future"
            ],
            "correctAnswer": "Present: 'I dey pray everyday'; Past: 'I bin dey pray everyday'",
            "explanation": "'Dey' alone is present habitual; 'bin dey' sets the habit in past time."
          },
          {
            "id": "p-u5-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The elders _____ (had gathered) before the rain fall.'",
            "options": [
              "bin don gather",
              "go gather",
              "never gather",
              "dey gather"
            ],
            "correctAnswer": "bin don gather",
            "explanation": "Past perfect: 'bin don gather' = had gathered."
          },
          {
            "id": "p-u5-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'I was thinking that you had traveled.'",
            "tokens": [
              "say",
              "you",
              "travel",
              "bin",
              "I",
              "dey",
              "think"
            ],
            "correctTokens": [
              "I",
              "bin",
              "dey",
              "think",
              "say",
              "you",
              "travel"
            ],
            "explanation": "'I bin dey think say you travel' marks continuous past deliberation."
          },
          {
            "id": "p-u5-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'We had already warned them before.'",
            "tokens": [
              "dem",
              "before",
              "We",
              "warn",
              "don",
              "bin"
            ],
            "correctTokens": [
              "We",
              "bin",
              "don",
              "warn",
              "dem",
              "before"
            ],
            "explanation": "'We bin don warn dem before' uses compound past perfect."
          },
          {
            "id": "p-u5-l2-q17",
            "type": "matching",
            "prompt": "Match the temporal particle structure to its linguistic label:",
            "pairs": [
              {
                "left": "Bin come",
                "right": "Remote Past (came / had come)"
              },
              {
                "left": "Bin dey come",
                "right": "Past Continuous (was coming)"
              },
              {
                "left": "Bin don come",
                "right": "Past Perfect (had arrived)"
              },
              {
                "left": "No bin come",
                "right": "Negative Past (did not come)"
              }
            ],
            "explanation": "Complete temporal past paradigm."
          },
          {
            "id": "p-u5-l2-q18",
            "type": "matching",
            "prompt": "Match the Pidgin phrase with its English equivalent:",
            "pairs": [
              {
                "left": "I bin tell you",
                "right": "I had told you earlier"
              },
              {
                "left": "Where you bin dey?",
                "right": "Where were you all this while?"
              },
              {
                "left": "We bin dey work",
                "right": "We were working previously"
              },
              {
                "left": "Im no bin sabi",
                "right": "He did not know then"
              }
            ],
            "explanation": "Colloquial past tense expressions."
          },
          {
            "id": "p-u5-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'When we bin dey young, our papa bin dey carry us go farm.' What memory is shared?",
            "audioText": "When we bin dey young, our papa bin dey carry us go farm.",
            "options": [
              "When we were young, our father used to take us to the farm",
              "Our father refused to allow children on the farm",
              "We bought a farm yesterday",
              "The speaker never knew their father"
            ],
            "correctAnswer": "When we were young, our father used to take us to the farm",
            "explanation": "'When we bin dey young...' describes a cherished childhood routine."
          },
          {
            "id": "p-u5-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'I no bin know say the road go bad like this.' What did the traveler not anticipate?",
            "audioText": "I no bin know say the road go bad like this.",
            "options": [
              "I did not know the road would be this poor",
              "The road is paved with smooth asphalt",
              "The vehicle broke down in the garage",
              "The trip was short and easy"
            ],
            "correctAnswer": "I did not know the road would be this poor",
            "explanation": "'I no bin know say...' = I didn't know that..."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-6",
    "unitNumber": 6,
    "level": "Level 2: Intermediate (Wafarian/Street Smart)",
    "title": "Unit 6: Comparisons & Functional Expressions",
    "description": "Express comparative and superlative degrees using the serial verb 'Pass' (surpass), and master modal auxiliaries: 'Fit' (can), 'Gats' (must), and counter-obligation 'For'.",
    "lessons": [
      {
        "id": "p-u6-l1",
        "title": "Lesson 1: Comparative & Superlative Pass",
        "description": "Learn how the verb 'Pass' (exceed/surpass) forms comparative ('big pass') and superlative ('sweet pass all of dem') degrees in NPE.",
        "completed": false,
        "questions": [
          {
            "id": "p-u6-l1-q1",
            "type": "multiple_choice",
            "prompt": "How does Nigerian Pidgin form comparative expressions like 'bigger than' or 'taller than'?",
            "options": [
              "Using the serial verb 'pass' ('big pass', 'tall pass')",
              "Adding '-er' suffix like 'bigger than'",
              "Adding 'more than' at the end of the clause",
              "Using 'exceedingly'"
            ],
            "correctAnswer": "Using the serial verb 'pass' ('big pass', 'tall pass')",
            "explanation": "West African languages use exceed-type comparative verbs: 'A big pass B' literally means 'A is big, surpassing B'."
          },
          {
            "id": "p-u6-l1-q2",
            "type": "multiple_choice",
            "prompt": "In JW.org official Pidgin, how is 'The thing we cherish the most is honoring God' translated?",
            "options": [
              "'The thing wey we like pass na to de honor Jehovah'",
              "'We like to honor Jehovah most'",
              "'Honoring Jehovah passes all things'",
              "'Jehovah is the most pass'"
            ],
            "correctAnswer": "'The thing wey we like pass na to de honor Jehovah'",
            "explanation": "JW.org Pidgin: 'The thing wey we like pass na to de honor Jehovah' ('like pass' = superlative preference)."
          },
          {
            "id": "p-u6-l1-q3",
            "type": "multiple_choice",
            "prompt": "How do you say 'She is the most beautiful girl in the room' in Nigerian Pidgin?",
            "options": [
              "'She fine pass all of dem for room'",
              "'She is finest inside the room'",
              "'Room gets her beautifulness'",
              "'Fine girl pass room'"
            ],
            "correctAnswer": "'She fine pass all of dem for room'",
            "explanation": "'Fine pass all of dem' constructs the absolute superlative ('surpassing all of them')."
          },
          {
            "id": "p-u6-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Sense big _____ (more than) money.'",
            "options": [
              "pass",
              "reach",
              "exceed",
              "more"
            ],
            "correctAnswer": "pass",
            "explanation": "Traditional Nigerian maxim: 'Sense big pass money' (Wisdom surpasses wealth)."
          },
          {
            "id": "p-u6-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'This soup sweet _____ (more than) the one you cook yesterday.'",
            "options": [
              "pass",
              "reach",
              "better",
              "over"
            ],
            "correctAnswer": "pass",
            "explanation": "'Sweet pass' expresses comparative taste."
          },
          {
            "id": "p-u6-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does 'E cost pass before' mean when shopping at the market?",
            "options": [
              "It is more expensive than it used to be",
              "The price has dropped significantly",
              "The item is free of charge",
              "The store is closed"
            ],
            "correctAnswer": "It is more expensive than it used to be",
            "explanation": "'Cost pass before' compares current inflation to former prices."
          },
          {
            "id": "p-u6-l1-q7",
            "type": "multiple_choice",
            "prompt": "How do you express equal comparison ('as big as' / 'as tall as')?",
            "options": [
              "Using the verb 'reach' ('E tall reach me' = He is as tall as I am)",
              "Using 'pass-pass'",
              "Using 'same-same like'",
              "Adding 'as... as'"
            ],
            "correctAnswer": "Using the verb 'reach' ('E tall reach me' = He is as tall as I am)",
            "explanation": "'Reach' marks equative comparison of degree: 'E strong reach lion' = It is as strong as a lion."
          },
          {
            "id": "p-u6-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'He no strong _____ (as much as) his elder brother.'",
            "options": [
              "reach",
              "pass",
              "like",
              "for"
            ],
            "correctAnswer": "reach",
            "explanation": "'No strong reach' denotes negative equative comparison."
          },
          {
            "id": "p-u6-l1-q9",
            "type": "multiple_choice",
            "prompt": "What does the expression 'No condition pass God' teach?",
            "options": [
              "No circumstance or hardship exceeds the sovereign power of God",
              "God does not care about conditions",
              "Weather conditions are unpredictable",
              "Do not go outside during rain"
            ],
            "correctAnswer": "No circumstance or hardship exceeds the sovereign power of God",
            "explanation": "A famous vehicular and cultural motto asserting divine supremacy over trials."
          },
          {
            "id": "p-u6-l1-q10",
            "type": "multiple_choice",
            "prompt": "How do you translate 'This car is faster than a bicycle'?",
            "options": [
              "'This motor fast pass bicycle'",
              "'Motor is fast than bicycle'",
              "'Motor fast bicycle reach'",
              "'Fast motor passes bicycle'"
            ],
            "correctAnswer": "'This motor fast pass bicycle'",
            "explanation": "'Fast pass' forms the comparative speed."
          },
          {
            "id": "p-u6-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The problem heavy _____ (more than) wetin we think.'",
            "options": [
              "pass",
              "reach",
              "over",
              "above"
            ],
            "correctAnswer": "pass",
            "explanation": "'Heavy pass' expresses comparative weight or severity."
          },
          {
            "id": "p-u6-l1-q12",
            "type": "multiple_choice",
            "prompt": "What does 'E sweet me pass mark' mean?",
            "options": [
              "It brought me joy beyond ordinary measure / I was thrilled beyond words",
              "I received zero marks in school",
              "The fruit had blemishes on the skin",
              "The teacher graded the paper strictly"
            ],
            "correctAnswer": "It brought me joy beyond ordinary measure / I was thrilled beyond words",
            "explanation": "'Pass mark' idiomatically means beyond normal limit or expectation."
          },
          {
            "id": "p-u6-l1-q13",
            "type": "multiple_choice",
            "prompt": "Which Pidgin word expresses superlative excellence meaning 'the very best'?",
            "options": [
              "'Number one' or 'pass all'",
              "'Second best'",
              "'Small pass'",
              "'Underneath'"
            ],
            "correctAnswer": "'Number one' or 'pass all'",
            "explanation": "'Number one' or '[adjective] pass all' designates top superlative standing."
          },
          {
            "id": "p-u6-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'That music sweet _____ (more than) all the others.'",
            "options": [
              "pass",
              "reach",
              "win",
              "beat"
            ],
            "correctAnswer": "pass",
            "explanation": "'Sweet pass all' = sweetest of all."
          },
          {
            "id": "p-u6-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Sense is greater than money.'",
            "tokens": [
              "pass",
              "Sense",
              "big",
              "money"
            ],
            "correctTokens": [
              "Sense",
              "big",
              "pass",
              "money"
            ],
            "explanation": "Classical comparative proverb: 'Sense big pass money'."
          },
          {
            "id": "p-u6-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'What we love most is the truth.'",
            "tokens": [
              "pass",
              "truth",
              "The",
              "na",
              "we",
              "like",
              "ting",
              "wey",
              "the"
            ],
            "correctTokens": [
              "The",
              "ting",
              "wey",
              "we",
              "like",
              "pass",
              "na",
              "the",
              "truth"
            ],
            "explanation": "Superlative topicalization: 'The ting wey we like pass na the truth'."
          },
          {
            "id": "p-u6-l1-q17",
            "type": "matching",
            "prompt": "Match each comparison structure to its English equivalent:",
            "pairs": [
              {
                "left": "Big pass me",
                "right": "Bigger than I am"
              },
              {
                "left": "Tall reach me",
                "right": "As tall as I am"
              },
              {
                "left": "Fine pass all",
                "right": "The most beautiful of all"
              },
              {
                "left": "Cost pass before",
                "right": "More expensive than before"
              }
            ],
            "explanation": "Core comparative and equative patterns."
          },
          {
            "id": "p-u6-l1-q18",
            "type": "matching",
            "prompt": "Match the Pidgin idiom to its comparative meaning:",
            "pairs": [
              {
                "left": "Pass mark",
                "right": "Beyond ordinary expectation"
              },
              {
                "left": "No condition pass God",
                "right": "God is greater than any crisis"
              },
              {
                "left": "Better pass yesterday",
                "right": "An improvement over the past"
              },
              {
                "left": "Sweet pass honey",
                "right": "Exceedingly delightful"
              }
            ],
            "explanation": "Idioms formed around the comparative verb 'pass'."
          },
          {
            "id": "p-u6-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'The thing wey we like pass na to de help people learn Bible.' What is prioritized above all?",
            "audioText": "The thing wey we like pass na to de help people learn Bible.",
            "options": [
              "Helping people learn the Bible",
              "Making financial profit in business",
              "Traveling on vacation abroad",
              "Watching television dramas"
            ],
            "correctAnswer": "Helping people learn the Bible",
            "explanation": "JW.org text: 'The thing wey we like pass na to de help people learn wetin dey for Bible'."
          },
          {
            "id": "p-u6-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'This your new motor fine pass the old one!' How do the two cars compare?",
            "audioText": "This your new motor fine pass the old one!",
            "options": [
              "The new car is more attractive and superior to the old one",
              "Both cars are old and rusty",
              "The old car was faster",
              "The speaker prefers the old car"
            ],
            "correctAnswer": "The new car is more attractive and superior to the old one",
            "explanation": "'Fine pass' marks positive comparative evaluation."
          }
        ]
      },
      {
        "id": "p-u6-l2",
        "title": "Lesson 2: Modal Auxiliaries (Fit, Gats, For)",
        "description": "Master essential modal verbs: 'Fit' (ability/permission), 'Gats/Must' (obligation/necessity), and 'For' (should/would unfulfilled duty).",
        "completed": false,
        "questions": [
          {
            "id": "p-u6-l2-q1",
            "type": "multiple_choice",
            "prompt": "What modal auxiliary expresses ability, possibility, or permission ('can' / 'may' / 'able to') in Pidgin?",
            "options": [
              "'Fit' (e.g. 'You fit use-am for study')",
              "'Can' only",
              "'Able' only",
              "'Do' only"
            ],
            "correctAnswer": "'Fit' (e.g. 'You fit use-am for study')",
            "explanation": "'Fit' (from English 'fit') functions as the universal modal verb for capability and possibility."
          },
          {
            "id": "p-u6-l2-q2",
            "type": "multiple_choice",
            "prompt": "What does 'You gats do am' or 'You must do am' express?",
            "options": [
              "Strong obligation or necessity ('You have to / You must do it')",
              "A casual suggestion you can ignore",
              "A past completed activity",
              "A question about ability"
            ],
            "correctAnswer": "Strong obligation or necessity ('You have to / You must do it')",
            "explanation": "'Gats' (from 'got to') or 'must' marks deontic necessity and obligation."
          },
          {
            "id": "p-u6-l2-q3",
            "type": "multiple_choice",
            "prompt": "In JW.org navigation, what does 'Things Wey We Fit Use Study Bible' translate?",
            "options": [
              "'Tools / Materials That We Can Use to Study the Bible'",
              "'Things that are forbidden to read'",
              "'Books that we already finished reading'",
              "'History of printing presses'"
            ],
            "correctAnswer": "'Tools / Materials That We Can Use to Study the Bible'",
            "explanation": "JW.org Pidgin: 'Things Wey We Fit Use Study Bible' ('fit use' = can use)."
          },
          {
            "id": "p-u6-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'You _____ (can) still learn about wetin we believe.'",
            "options": [
              "fit",
              "gats",
              "for",
              "bin"
            ],
            "correctAnswer": "fit",
            "explanation": "JW.org site description: 'You fit still learn about wetin we believe and about the organization'."
          },
          {
            "id": "p-u6-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We _____ (must) leave early before traffic start.'",
            "options": [
              "gats",
              "fit",
              "never",
              "no"
            ],
            "correctAnswer": "gats",
            "explanation": "'Gats' expresses urgent necessity to beat traffic."
          },
          {
            "id": "p-u6-l2-q6",
            "type": "multiple_choice",
            "prompt": "What does 'You for tell me' mean when someone reveals news after the fact?",
            "options": [
              "'You should have told me earlier (unfulfilled past obligation)'",
              "'You are going to tell me tomorrow'",
              "'Please do not tell me anything'",
              "'I already know everything'"
            ],
            "correctAnswer": "'You should have told me earlier (unfulfilled past obligation)'",
            "explanation": "'For' before a bare verb marks counterfactual advice or unfulfilled duty ('should have')."
          },
          {
            "id": "p-u6-l2-q7",
            "type": "multiple_choice",
            "prompt": "How do you say 'I cannot carry this heavy load'?",
            "options": [
              "'I no fit carry this heavy load'",
              "'I cannoted the load'",
              "'Heavy load is no-fitting me'",
              "'I fit not carry'"
            ],
            "correctAnswer": "'I no fit carry this heavy load'",
            "explanation": "Negation: 'no fit' = cannot / unable to."
          },
          {
            "id": "p-u6-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Nobody _____ (can) deceive God.'",
            "options": [
              "fit",
              "gats",
              "for",
              "bin"
            ],
            "correctAnswer": "fit",
            "explanation": "'Nobody fit deceive God' = No one can deceive God."
          },
          {
            "id": "p-u6-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does 'Man gats survive' reflect in Nigerian philosophy?",
            "options": [
              "Tenacious resilience and the inevitable daily hustle to make ends meet",
              "A biological lesson on mammals",
              "A warning to stay inside",
              "Giving up completely"
            ],
            "correctAnswer": "Tenacious resilience and the inevitable daily hustle to make ends meet",
            "explanation": "'Man gats survive' embodies the indefatigable spirit of perseverance."
          },
          {
            "id": "p-u6-l2-q10",
            "type": "multiple_choice",
            "prompt": "What does 'You for no go there' mean?",
            "options": [
              "'You should not have gone there'",
              "'You must go there now'",
              "'You will go there tomorrow'",
              "'You enjoy going there'"
            ],
            "correctAnswer": "'You should not have gone there'",
            "explanation": "'For no [verb]' expresses negative counterfactual advice ('should not have')."
          },
          {
            "id": "p-u6-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We _____ (should have) help that poor man.'",
            "options": [
              "for",
              "gats",
              "fit",
              "go"
            ],
            "correctAnswer": "for",
            "explanation": "'We for help...' expresses an unfulfilled moral obligation."
          },
          {
            "id": "p-u6-l2-q12",
            "type": "multiple_choice",
            "prompt": "How do you ask for permission politely: 'Can I enter?'",
            "options": [
              "'I fit enter?' or 'Make I enter?'",
              "'May I entering?'",
              "'Fit me enter please?'",
              "'Can of entrance?'"
            ],
            "correctAnswer": "'I fit enter?' or 'Make I enter?'",
            "explanation": "'I fit enter?' or hortative 'Make I enter?' asks permission."
          },
          {
            "id": "p-u6-l2-q13",
            "type": "multiple_choice",
            "prompt": "In JW.org video buttons, what does 'Different things wey you fit read' translate?",
            "options": [
              "'Various publications that you can read'",
              "'Books that you must not read'",
              "'Things that cannot be written'",
              "'Read only one article'"
            ],
            "correctAnswer": "'Various publications that you can read'",
            "explanation": "JW.org header: 'Different-Things Wey You Fit Read' ('fit read' = can read)."
          },
          {
            "id": "p-u6-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We de do everything wey we _____ (can) do to follow Jesus.'",
            "options": [
              "fit",
              "gats",
              "for",
              "bin"
            ],
            "correctAnswer": "fit",
            "explanation": "JW.org text: 'We de do everything wey we fit do to follow the example wey Jesus Christ give us'."
          },
          {
            "id": "p-u6-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'You can use it for study.'",
            "tokens": [
              "study",
              "fit",
              "use-am",
              "You",
              "for"
            ],
            "correctTokens": [
              "You",
              "fit",
              "use-am",
              "for",
              "study"
            ],
            "explanation": "JW.org Pidgin: 'You fit use-am for study'."
          },
          {
            "id": "p-u6-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'You should have told us the truth.'",
            "tokens": [
              "the",
              "for",
              "tell",
              "truth",
              "You",
              "us"
            ],
            "correctTokens": [
              "You",
              "for",
              "tell",
              "us",
              "the",
              "truth"
            ],
            "explanation": "'You for tell us the truth' marks past counterfactual obligation."
          },
          {
            "id": "p-u6-l2-q17",
            "type": "matching",
            "prompt": "Match the modal auxiliary to its semantic function:",
            "pairs": [
              {
                "left": "Fit",
                "right": "Ability / possibility (can)"
              },
              {
                "left": "Gats",
                "right": "Compelling necessity (must / have to)"
              },
              {
                "left": "For",
                "right": "Unfulfilled past obligation (should have)"
              },
              {
                "left": "No fit",
                "right": "Inability / prohibition (cannot)"
              }
            ],
            "explanation": "Primary modal auxiliary verbs in NPE."
          },
          {
            "id": "p-u6-l2-q18",
            "type": "matching",
            "prompt": "Match the modal phrase to its situational context:",
            "pairs": [
              {
                "left": "Man gats survive",
                "right": "Enduring economic hardship"
              },
              {
                "left": "You fit come tomorrow",
                "right": "Granting permission for a visit"
              },
              {
                "left": "I for buy am",
                "right": "Regret over a missed purchase"
              },
              {
                "left": "E no fit work",
                "right": "Declaring a plan unfeasible"
              }
            ],
            "explanation": "Functional communicative contexts for modals."
          },
          {
            "id": "p-u6-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'You fit still learn about wetin we believe for our website.' What invitation is made?",
            "audioText": "You fit still learn about wetin we believe for our website.",
            "options": [
              "You can learn about what we believe on our website",
              "You must pay money to visit our website",
              "You should shut down the website",
              "Nobody is allowed to learn our beliefs"
            ],
            "correctAnswer": "You can learn about what we believe on our website",
            "explanation": "JW.org text: 'You fit still learn about wetin we believe and about the organization'."
          },
          {
            "id": "p-u6-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'We gats wake up early make we no miss flight.' Why is waking early necessary?",
            "audioText": "We gats wake up early make we no miss flight.",
            "options": [
              "So that we do not miss our flight",
              "To wash clothes before morning",
              "Because the flight was cancelled yesterday",
              "To go jogging in the park"
            ],
            "correctAnswer": "So that we do not miss our flight",
            "explanation": "'We gats wake up early make we no miss...' expresses strict necessity."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-7",
    "unitNumber": 7,
    "level": "Level 3: Upper-Intermediate (Naija Flow)",
    "title": "Unit 7: Conditionals, Relatives & Linkers",
    "description": "Build sophisticated compound and complex sentences: the universal relative marker 'Wey', syntactic fronting with 'Na', and counterfactual conditionals ('If to say... For').",
    "lessons": [
      {
        "id": "p-u7-l1",
        "title": "Lesson 1: Relative Marker Wey & Topic Fronting",
        "description": "Master the all-purpose relative clause marker 'Wey' ('who', 'which', 'that') and syntactic topic fronting with the focus cleft particle 'Na'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u7-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the universal relative pronoun/marker ('who', 'whom', 'which', 'that') in Nigerian Pidgin?",
            "options": [
              "'Wey' (e.g. 'The man wey come', 'Bible wey dey correct')",
              "'Who' only",
              "'Which' only",
              "'That' only"
            ],
            "correctAnswer": "'Wey' (e.g. 'The man wey come', 'Bible wey dey correct')",
            "explanation": "'Wey' is the universal relative clause linker across all human and non-human antecedents."
          },
          {
            "id": "p-u7-l1-q2",
            "type": "multiple_choice",
            "prompt": "In JW.org official descriptions, how is 'A Bible that is accurate and easy to read' translated?",
            "options": [
              "'Bible wey dey correct and easy to read'",
              "'Bible that is corrected easily'",
              "'Bible which reads good'",
              "'The correctest Bible'"
            ],
            "correctAnswer": "'Bible wey dey correct and easy to read'",
            "explanation": "JW.org Pidgin: 'Check the different parts wey the New World Translation get, Bible wey dey correct and easy to read'."
          },
          {
            "id": "p-u7-l1-q3",
            "type": "multiple_choice",
            "prompt": "What syntactic function does 'Na' perform when placed at the beginning of a sentence ('Na me do am')?",
            "options": [
              "Focus cleft marker highlighting the emphasized constituent ('It was I who did it')",
              "A negative particle meaning 'No'",
              "An adverb of distance",
              "A future marker"
            ],
            "correctAnswer": "Focus cleft marker highlighting the emphasized constituent ('It was I who did it')",
            "explanation": "'Na' introduces focused constituents in cleft sentences to emphasize agency or thematic priority."
          },
          {
            "id": "p-u7-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The man _____ (who) help us yesterday don travel.'",
            "options": [
              "wey",
              "who",
              "which",
              "dat"
            ],
            "correctAnswer": "wey",
            "explanation": "'Wey' connects the head noun 'man' to the relative clause."
          },
          {
            "id": "p-u7-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (It was) my mother cook this delicious food.'",
            "options": [
              "Na",
              "Be",
              "No",
              "Dey"
            ],
            "correctAnswer": "Na",
            "explanation": "Focus fronting: 'Na my mother cook...' gives honor and emphasis to the mother."
          },
          {
            "id": "p-u7-l1-q6",
            "type": "multiple_choice",
            "prompt": "In JW.org Pidgin, what does 'Bible wey them read like drama' refer to?",
            "options": [
              "Dramatic audio Bible recordings",
              "A fictional theatrical play",
              "A movie theater ticket",
              "A debate between actors"
            ],
            "correctAnswer": "Dramatic audio Bible recordings",
            "explanation": "JW.org audio section: 'Bible Wey Them Read Like Drama' = Audio drama Bible productions."
          },
          {
            "id": "p-u7-l1-q7",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'The house that burned down has been rebuilt'?",
            "options": [
              "'The house wey burn don build back'",
              "'House that fire eat is built'",
              "'Burned house built again'",
              "'House wey dey burn back'"
            ],
            "correctAnswer": "'The house wey burn don build back'",
            "explanation": "'House wey burn' utilizes 'wey' to introduce the relative event."
          },
          {
            "id": "p-u7-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Find the place _____ (where) we de do our meeting.'",
            "options": [
              "wey",
              "wia",
              "which",
              "dat"
            ],
            "correctAnswer": "wey",
            "explanation": "JW.org Pidgin: 'Find the place wey we de do our meeting for your area'."
          },
          {
            "id": "p-u7-l1-q9",
            "type": "multiple_choice",
            "prompt": "What does 'Na so!' mean when responding to someone's accurate observation?",
            "options": [
              "'Exactly so! / That is precisely the truth!'",
              "'Never in this world!'",
              "'Speak in English!'",
              "'Where are you going?'"
            ],
            "correctAnswer": "'Exactly so! / That is precisely the truth!'",
            "explanation": "'Na so!' affirms agreement and validation of truth."
          },
          {
            "id": "p-u7-l1-q10",
            "type": "multiple_choice",
            "prompt": "In 'Na God make everything and na e give us Bible', what is the purpose of the two 'Na' markers?",
            "options": [
              "Double focus cleft attributing all creation and scripture definitively to God",
              "Accidental repetition of words",
              "A question particle",
              "Past tense inflections"
            ],
            "correctAnswer": "Double focus cleft attributing all creation and scripture definitively to God",
            "explanation": "JW.org text: '...because na e make everything and na e give us Bible' ('na' focuses divine attribution)."
          },
          {
            "id": "p-u7-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The money _____ (that) you give me don finish.'",
            "options": [
              "wey",
              "who",
              "which",
              "what"
            ],
            "correctAnswer": "wey",
            "explanation": "'Money wey you give me' uses 'wey' for inanimate relative clause."
          },
          {
            "id": "p-u7-l1-q12",
            "type": "multiple_choice",
            "prompt": "What does 'Na lie!' express in dialogue?",
            "options": [
              "'That is untrue! / That is a complete falsehood!'",
              "'Please lie down on the bed'",
              "'Tell me more lies'",
              "'The bed is soft'"
            ],
            "correctAnswer": "'That is untrue! / That is a complete falsehood!'",
            "explanation": "'Na lie!' directly refutes a claim as untruthful."
          },
          {
            "id": "p-u7-l1-q13",
            "type": "multiple_choice",
            "prompt": "Can 'wey' refer to human beings, inanimate objects, and abstract concepts alike?",
            "options": [
              "Yes, 'wey' is completely invariant across all noun classes",
              "No, it is only for animals",
              "No, human beings must use 'who-man'",
              "Only on formal occasions"
            ],
            "correctAnswer": "Yes, 'wey' is completely invariant across all noun classes",
            "explanation": "'Wey' is the invariant relative marker in West African Pidgin."
          },
          {
            "id": "p-u7-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (It is) peace we want for our country.'",
            "options": [
              "Na",
              "Be",
              "No",
              "Dey"
            ],
            "correctAnswer": "Na",
            "explanation": "Topic fronting: 'Na peace we want...' prioritizes peace over other desires."
          },
          {
            "id": "p-u7-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'The Bible that is correct and easy to read.'",
            "tokens": [
              "read",
              "wey",
              "easy",
              "to",
              "Bible",
              "dey",
              "and",
              "correct"
            ],
            "correctTokens": [
              "Bible",
              "wey",
              "dey",
              "correct",
              "and",
              "easy",
              "to",
              "read"
            ],
            "explanation": "JW.org description: 'Bible wey dey correct and easy to read'."
          },
          {
            "id": "p-u7-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'It was God that created everything in the world.'",
            "tokens": [
              "world",
              "God",
              "everything",
              "Na",
              "the",
              "make",
              "for"
            ],
            "correctTokens": [
              "Na",
              "God",
              "make",
              "everything",
              "for",
              "the",
              "world"
            ],
            "explanation": "'Na God make everything for the world' showcases focus clefting with 'Na'."
          },
          {
            "id": "p-u7-l1-q17",
            "type": "matching",
            "prompt": "Match the relative phrase to its English translation:",
            "pairs": [
              {
                "left": "Things wey we write",
                "right": "Things that we wrote"
              },
              {
                "left": "Man wey sabi road",
                "right": "A person who knows the way"
              },
              {
                "left": "Food wey sweet",
                "right": "Food that is delicious"
              },
              {
                "left": "Place wey we dey meet",
                "right": "The place where we assemble"
              }
            ],
            "explanation": "Versatile syntactic roles of the relative marker 'wey'."
          },
          {
            "id": "p-u7-l1-q18",
            "type": "matching",
            "prompt": "Match the focus 'Na' expression to its conversational role:",
            "pairs": [
              {
                "left": "Na so!",
                "right": "Emphatic agreement / That's right"
              },
              {
                "left": "Na true",
                "right": "Confirming factual truth"
              },
              {
                "left": "Na me",
                "right": "Self-identification / Claiming agency"
              },
              {
                "left": "Na wetin?",
                "right": "Interrogative focus: What is it?"
              }
            ],
            "explanation": "Everyday pragmatic uses of the cleft marker 'Na'."
          },
          {
            "id": "p-u7-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Check the video wey them do about Jesus life.' What video should be checked?",
            "audioText": "Check the video wey them do about Jesus life.",
            "options": [
              "The video produced about Jesus' life",
              "A sports game about basketball",
              "A political debate in the city",
              "A comedy show at the stadium"
            ],
            "correctAnswer": "The video produced about Jesus' life",
            "explanation": "'The video wey them do about Jesus life' describes the biographical video."
          },
          {
            "id": "p-u7-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Na only one person wey fit solve this matter, and na the king.' Who can resolve the problem?",
            "audioText": "Na only one person wey fit solve this matter, and na the king.",
            "options": [
              "Only the king can solve the matter",
              "Nobody in the whole village can help",
              "The soldiers solved the issue yesterday",
              "The matter does not need solving"
            ],
            "correctAnswer": "Only the king can solve the matter",
            "explanation": "'Na only one person... and na the king' applies dual focus clefting."
          }
        ]
      },
      {
        "id": "p-u7-l2",
        "title": "Lesson 2: Counterfactual Conditionals (If to say... For)",
        "description": "Form hypothetical and counterfactual conditional clauses using 'If to say' (had it been), 'If no be say' (except for), and resultant modal 'For'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u7-l2-q1",
            "type": "multiple_choice",
            "prompt": "How is the counterfactual premise 'Had I known / If I had known' expressed in standard Nigerian Pidgin?",
            "options": [
              "'If to say I know' (or 'If say I know')",
              "'If I known'",
              "'Knowing if so'",
              "'Had me knowing'"
            ],
            "correctAnswer": "'If to say I know' (or 'If say I know')",
            "explanation": "'If to say' introduces counterfactual or unfulfilled past premises."
          },
          {
            "id": "p-u7-l2-q2",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'Had I known, I would not have gone'?",
            "options": [
              "'If to say I know, I for no go'",
              "'If I know, I will no go'",
              "'Had I know, I won't go'",
              "'Suppose I know, me no went'"
            ],
            "correctAnswer": "'If to say I know, I for no go'",
            "explanation": "'If to say [condition], [subject] for [outcome]' is the universal counterfactual conditional frame."
          },
          {
            "id": "p-u7-l2-q3",
            "type": "multiple_choice",
            "prompt": "What does 'If no be God' mean in personal testimonies?",
            "options": [
              "'Were it not for God's divine grace and intervention'",
              "'If God does not exist'",
              "'God is not here'",
              "'Asking who God is'"
            ],
            "correctAnswer": "'Were it not for God's divine grace and intervention'",
            "explanation": "'If no be God' (short for 'If no be say God dey') attributes survival to divine mercy."
          },
          {
            "id": "p-u7-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: '_____ (Had it been) you arrive early, you for meet the food.'",
            "options": [
              "If to say",
              "Because",
              "Even though",
              "Whether"
            ],
            "correctAnswer": "If to say",
            "explanation": "'If to say' introduces the unrealized antecedent condition."
          },
          {
            "id": "p-u7-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If no be your help, water _____ (would have) carry me go.'",
            "options": [
              "for",
              "go",
              "don",
              "never"
            ],
            "correctAnswer": "for",
            "explanation": "Modal 'for' marks the counterfactual consequent outcome."
          },
          {
            "id": "p-u7-l2-q6",
            "type": "multiple_choice",
            "prompt": "What is the difference between 'If you come' and 'If to say you come'?",
            "options": [
              "'If you come' = Real future conditional; 'If to say you come' = Unrealized past counterfactual",
              "Both are identical in meaning",
              "'If to say' only applies to food",
              "'If you come' means you already left"
            ],
            "correctAnswer": "'If you come' = Real future conditional; 'If to say you come' = Unrealized past counterfactual",
            "explanation": "Real conditional: 'If you come, we go chop'. Counterfactual: 'If to say you come, we for don chop'."
          },
          {
            "id": "p-u7-l2-q7",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'Were it not for the heavy rain, we would have played football'?",
            "options": [
              "'If no be say rain fall, we for play ball'",
              "'Rain fell and we played ball'",
              "'Unless rain stops, we play'",
              "'Rain ball for us'"
            ],
            "correctAnswer": "'If no be say rain fall, we for play ball'",
            "explanation": "'If no be say [event], [subject] for [action]' expresses negative counterfactual exception."
          },
          {
            "id": "p-u7-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If you listen well, you _____ (will) understand the speech.'",
            "options": [
              "go",
              "for",
              "bin",
              "never"
            ],
            "correctAnswer": "go",
            "explanation": "In a real conditional clause, future 'go' completes the consequent."
          },
          {
            "id": "p-u7-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does the Nigerian proverb 'Had I known is always at the last' teach?",
            "options": [
              "Regret always comes too late after consequences unfold ('Had I known na last')",
              "Always arrive last to a meeting",
              "Never listen to advice",
              "Knowledge should be hidden"
            ],
            "correctAnswer": "Regret always comes too late after consequences unfold ('Had I known na last')",
            "explanation": "Universal proverb warning against reckless impetuous choices."
          },
          {
            "id": "p-u7-l2-q10",
            "type": "multiple_choice",
            "prompt": "How do you say 'Even if he begs me, I will not forgive him'?",
            "options": [
              "'Even if e beg me, I no go forgive am'",
              "'If begging happens, no forgive'",
              "'Begging him is not my own'",
              "'Even though he begged yesterday'"
            ],
            "correctAnswer": "'Even if e beg me, I no go forgive am'",
            "explanation": "'Even if...' introduces concessive conditional clauses."
          },
          {
            "id": "p-u7-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If to say money dey, I _____ (would have) buy that house.'",
            "options": [
              "for",
              "go",
              "don",
              "bin dey"
            ],
            "correctAnswer": "for",
            "explanation": "'I for buy' = I would have purchased."
          },
          {
            "id": "p-u7-l2-q12",
            "type": "multiple_choice",
            "prompt": "What does 'Unless you get pass, you no fit enter' mean?",
            "options": [
              "Unless you possess an official pass, you cannot enter",
              "Everyone is allowed inside without inspection",
              "Throw away your identity card",
              "Run into the building"
            ],
            "correctAnswer": "Unless you possess an official pass, you cannot enter",
            "explanation": "'Unless' sets the exclusive mandatory condition."
          },
          {
            "id": "p-u7-l2-q13",
            "type": "multiple_choice",
            "prompt": "How is 'Whether rain falls or sun shines' expressed in Pidgin?",
            "options": [
              "'Whether rain fall or sun shine'",
              "'Rain and sun are friends'",
              "'If sky water drops'",
              "'No weather at all'"
            ],
            "correctAnswer": "'Whether rain fall or sun shine'",
            "explanation": "'Whether... or...' sets the dual contingency."
          },
          {
            "id": "p-u7-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If no be say doctor quick treat am, the sick man _____ (would have) die.'",
            "options": [
              "for",
              "go",
              "never",
              "don"
            ],
            "correctAnswer": "for",
            "explanation": "'The sick man for die' = The patient would have perished."
          },
          {
            "id": "p-u7-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Had I known, I would not have gone with them.'",
            "tokens": [
              "I",
              "know,",
              "no",
              "dem",
              "If",
              "go",
              "with",
              "for",
              "say",
              "to"
            ],
            "correctTokens": [
              "If",
              "to",
              "say",
              "I",
              "know,",
              "I",
              "for",
              "no",
              "go",
              "with",
              "dem"
            ],
            "explanation": "Complete counterfactual formula: 'If to say I know, I for no go with dem'."
          },
          {
            "id": "p-u7-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'If not for God, where would we be today?'",
            "tokens": [
              "for",
              "we",
              "dey",
              "God,",
              "be",
              "no",
              "where",
              "today?",
              "If"
            ],
            "correctTokens": [
              "If",
              "no",
              "be",
              "God,",
              "where",
              "we",
              "for",
              "dey",
              "today?"
            ],
            "explanation": "Rhetorical thanksgiving idiom: 'If no be God, where we for dey today?'."
          },
          {
            "id": "p-u7-l2-q17",
            "type": "matching",
            "prompt": "Match the conditional marker with its syntactic category:",
            "pairs": [
              {
                "left": "If to say",
                "right": "Counterfactual premise (Had it been)"
              },
              {
                "left": "If no be say",
                "right": "Negative exception (Were it not that)"
              },
              {
                "left": "For",
                "right": "Unrealized outcome marker (would have)"
              },
              {
                "left": "Even if",
                "right": "Concessive condition (regardless whether)"
              }
            ],
            "explanation": "Taxonomy of NPE conditional syntax."
          },
          {
            "id": "p-u7-l2-q18",
            "type": "matching",
            "prompt": "Match each conditional statement with its true implication:",
            "pairs": [
              {
                "left": "If to say I know, I for come",
                "right": "I did not know, so I did not come"
              },
              {
                "left": "If you come, we go cook",
                "right": "If you arrive in the future, we will prepare food"
              },
              {
                "left": "If no be God, I for don die",
                "right": "God saved me from certain death"
              },
              {
                "left": "You for tell me before",
                "right": "You failed to inform me in advance"
              }
            ],
            "explanation": "Semantic presuppositions behind conditional utterances."
          },
          {
            "id": "p-u7-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'If to say we listen to warning, this big loss for no happen.' What does the speaker regret?",
            "audioText": "If to say we listen to warning, this big loss for no happen.",
            "options": [
              "Failing to heed warnings, which resulted in a major loss",
              "Listening to good advice that saved money",
              "Arriving early at the venue",
              "Refusing to make any financial investment"
            ],
            "correctAnswer": "Failing to heed warnings, which resulted in a major loss",
            "explanation": "'If to say we listen to warning, this big loss for no happen' conveys deep regret over ignored counsel."
          },
          {
            "id": "p-u7-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'If you want make your life better, study the good news wey dey inside Bible.' What path is advised?",
            "audioText": "If you want make your life better, study the good news wey dey inside Bible.",
            "options": [
              "Studying the good news in the Bible to improve one's life",
              "Ignoring religious guidance and traveling abroad",
              "Selling all personal property at the marketplace",
              "Stopping all study and work"
            ],
            "correctAnswer": "Studying the good news in the Bible to improve one's life",
            "explanation": "JW.org encouragement: 'If you want make your life better, study the good news wey dey inside Bible.'"
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-8",
    "unitNumber": 8,
    "level": "Level 3: Upper-Intermediate (Naija Flow)",
    "title": "Unit 8: Phrasal Idioms & Proverbs (Aproko Studies)",
    "description": "Master high-frequency urban street expressions (fall hand, shine your eye, ginger, japa) and classical philosophical proverbs (Monkey dey work baboon dey chop).",
    "lessons": [
      {
        "id": "p-u8-l1",
        "title": "Lesson 1: High-Frequency Urban Idioms & Slang Register",
        "description": "Deconstruct street vernacular, kinetic metaphors, and urban slangs: 'Fall hand', 'Carry first', 'Shine eye', 'Ginger', and 'Soft work'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u8-l1-q1",
            "type": "multiple_choice",
            "prompt": "What does the high-frequency idiom 'No fall my hand' mean?",
            "options": [
              "'Do not disappoint me / Do not let me down'",
              "'Do not trip me while walking'",
              "'Catch my arm before I stumble'",
              "'Wave your hands in the air'"
            ],
            "correctAnswer": "'Do not disappoint me / Do not let me down'",
            "explanation": "'Fall person hand' is the foundational somatic metaphor for betrayal, failure of expectations, or disappointment."
          },
          {
            "id": "p-u8-l1-q2",
            "type": "multiple_choice",
            "prompt": "What does 'Shine your eye' advise someone to do in a busy Nigerian city?",
            "options": [
              "'Be vigilant, perceptive, and street-smart against deception'",
              "'Put bright cosmetic drops into your eyes'",
              "'Stare at the sun without blinking'",
              "'Wear expensive sunglasses at night'"
            ],
            "correctAnswer": "'Be vigilant, perceptive, and street-smart against deception'",
            "explanation": "'Shine your eye' is universal counsel to remain acutely alert and avoid scams or street pitfalls."
          },
          {
            "id": "p-u8-l1-q3",
            "type": "multiple_choice",
            "prompt": "What does 'Ginger' mean when used as a dynamic slang verb or noun ('Ginger the team')?",
            "options": [
              "To motivate, invigorate, inspire, or energize with passion",
              "To cook food with spicy ginger roots",
              "To yellow the skin",
              "To plant crops in the rainy season"
            ],
            "correctAnswer": "To motivate, invigorate, inspire, or energize with passion",
            "explanation": "'Ginger' means infectious enthusiasm, adrenaline, and morale-boosting motivation."
          },
          {
            "id": "p-u8-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Bro, no worry at all, this task na _____ (effortless/easy task).' ",
            "options": [
              "soft work",
              "heavy stone",
              "iron hammer",
              "dry garri"
            ],
            "correctAnswer": "soft work",
            "explanation": "'Soft work' denotes tasks executed with ease, grace, and minimal stress."
          },
          {
            "id": "p-u8-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'My guy, _____ (be vigilant/alert), these boys dey find who dem go trick.'",
            "options": [
              "shine your eye",
              "close your mouth",
              "wash your foot",
              "bend your knee"
            ],
            "correctAnswer": "shine your eye",
            "explanation": "'Shine your eye' warns against impending trickery."
          },
          {
            "id": "p-u8-l1-q6",
            "type": "multiple_choice",
            "prompt": "What does the modern slang term 'Japa' mean in Nigerian discourse?",
            "options": [
              "To emigrate abroad or flee dangerous circumstances swiftly",
              "To dance cultural music",
              "To eat Japanese noodles",
              "To buy a brand new vehicle"
            ],
            "correctAnswer": "To emigrate abroad or flee dangerous circumstances swiftly",
            "explanation": "'Japa' (from Yoruba 'jàpá') means to escape, run away, or migrate abroad in pursuit of better opportunities."
          },
          {
            "id": "p-u8-l1-q7",
            "type": "multiple_choice",
            "prompt": "What does 'I no fit shout' signify when someone is confronted with shocking news?",
            "options": [
              "Speechless resignation or astonishment: 'I am so overwhelmed that words fail me'",
              "Losing one's physical vocal cords",
              "A medical throat ailment",
              "Whispering because baby is sleeping"
            ],
            "correctAnswer": "Speechless resignation or astonishment: 'I am so overwhelmed that words fail me'",
            "explanation": "'I no fit shout' captures quiet bewilderment and tired irony in the face of unbelievable absurdities."
          },
          {
            "id": "p-u8-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Why you dey _____ (boast/show off) like say you be king?'",
            "options": [
              "shakara",
              "sabi",
              "chop",
              "commot"
            ],
            "correctAnswer": "shakara",
            "explanation": "'Shakara' means flamboyant pretension, feigned disinterest, or showing off."
          },
          {
            "id": "p-u8-l1-q9",
            "type": "multiple_choice",
            "prompt": "What does 'Aproko' mean in community social dynamics?",
            "options": [
              "A chronic gossip / person obsessed with nosing into other people's affairs",
              "A traditional title for an elder",
              "A delicious type of pepper soup",
              "A merchant who sells fabrics"
            ],
            "correctAnswer": "A chronic gossip / person obsessed with nosing into other people's affairs",
            "explanation": "'Aproko' describes unsolicited curiosity and busybody tendencies."
          },
          {
            "id": "p-u8-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Carry first' mean in academic or professional achievement?",
            "options": [
              "To emerge in first place / champion top honors",
              "To carry baggage into an airplane",
              "To be the first person to arrive at a party",
              "To win a race by cheating"
            ],
            "correctAnswer": "To emerge in first place / champion top honors",
            "explanation": "'Carry first' (or 'take first') is the classic NPE expression for academic supremacy."
          },
          {
            "id": "p-u8-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Please no _____ (disappoint) me for this contract.'",
            "options": [
              "fall my hand",
              "break my leg",
              "slap my face",
              "kick my back"
            ],
            "correctAnswer": "fall my hand",
            "explanation": "'No fall my hand' = do not disappoint me."
          },
          {
            "id": "p-u8-l1-q12",
            "type": "multiple_choice",
            "prompt": "What does 'Vawulence' mean in social media street banter?",
            "options": [
              "Playful, chaotic trolling or savage back-and-forth drama online",
              "Actual armed robbery",
              "A peaceful academic symposium",
              "A botanical classification"
            ],
            "correctAnswer": "Playful, chaotic trolling or savage back-and-forth drama online",
            "explanation": "'Vawulence' (humorous spelling of violence) refers to intentional comedic roast drama."
          },
          {
            "id": "p-u8-l1-q13",
            "type": "multiple_choice",
            "prompt": "What does 'Over-sabi' mean when describing a coworker or student?",
            "options": [
              "A know-it-all whose unsolicited interference ruins or complicates simple tasks",
              "A certified university professor",
              "A person who cannot read",
              "A very polite guest"
            ],
            "correctAnswer": "A know-it-all whose unsolicited interference ruins or complicates simple tasks",
            "explanation": "'Over-sabi' combines 'over' with 'sabi' (knowledge) to diagnose self-important hubris."
          },
          {
            "id": "p-u8-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We go celebrate because my brother don _____ (emigrated/relocated) abroad.'",
            "options": [
              "japa",
              "commot",
              "chop",
              "run enter"
            ],
            "correctAnswer": "japa",
            "explanation": "'Japa' is the preeminent term for emigrating abroad."
          },
          {
            "id": "p-u8-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Please do not disappoint me on this matter.'",
            "tokens": [
              "dis",
              "hand",
              "my",
              "matter",
              "fall",
              "No",
              "for"
            ],
            "correctTokens": [
              "No",
              "fall",
              "my",
              "hand",
              "for",
              "dis",
              "matter"
            ],
            "explanation": "'No fall my hand for dis matter' is the standard plea against disappointment."
          },
          {
            "id": "p-u8-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Be alert in the market so they will not trick you.'",
            "tokens": [
              "dem",
              "eye",
              "no",
              "Shine",
              "make",
              "trick",
              "your",
              "you"
            ],
            "correctTokens": [
              "Shine",
              "your",
              "eye",
              "make",
              "dem",
              "no",
              "trick",
              "you"
            ],
            "explanation": "'Shine your eye make dem no trick you' counsels proactive vigilance."
          },
          {
            "id": "p-u8-l1-q17",
            "type": "matching",
            "prompt": "Match the urban Pidgin slang with its English translation:",
            "pairs": [
              {
                "left": "Fall hand",
                "right": "Disappoint / let down"
              },
              {
                "left": "Shine eye",
                "right": "Be vigilant and alert"
              },
              {
                "left": "Ginger",
                "right": "Energize / motivate"
              },
              {
                "left": "Japa",
                "right": "Emigrate / flee abroad"
              }
            ],
            "explanation": "Essential four urban slangs of modern Nigerian vernacular."
          },
          {
            "id": "p-u8-l1-q18",
            "type": "matching",
            "prompt": "Match the social label to its behavioral definition:",
            "pairs": [
              {
                "left": "Aproko",
                "right": "Chronic gossip / busybody"
              },
              {
                "left": "Over-sabi",
                "right": "Arrogant know-it-all"
              },
              {
                "left": "Ajebutter",
                "right": "Sheltered, pampered child"
              },
              {
                "left": "Street-smart",
                "right": "Savvy in navigating urban realities"
              }
            ],
            "explanation": "Sociological personality typologies in NPE."
          },
          {
            "id": "p-u8-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'My guy, this project sweet pass, na pure soft work.' How does the speaker describe the project?",
            "audioText": "My guy, this project sweet pass, na pure soft work.",
            "options": [
              "An enjoyable, smooth, and easily accomplished assignment",
              "A tortuous task that broke their tools",
              "A project that requires ten years of labor",
              "An unpaid punishment"
            ],
            "correctAnswer": "An enjoyable, smooth, and easily accomplished assignment",
            "explanation": "'Na pure soft work' describes effortless and rewarding execution."
          },
          {
            "id": "p-u8-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'When police arrive, all the bad boys just japa.' What happened when the police showed up?",
            "audioText": "When police arrive, all the bad boys just japa.",
            "options": [
              "All the hoodlums fled and scattered immediately",
              "They shook hands and had tea together",
              "They sat down to negotiate peace",
              "The hoodlums called a lawyer"
            ],
            "correctAnswer": "All the hoodlums fled and scattered immediately",
            "explanation": "'Just japa' indicates rapid, panicked flight from authority."
          }
        ]
      },
      {
        "id": "p-u8-l2",
        "title": "Lesson 2: Classical NPE Proverbs & Philosophical Maxims",
        "description": "Explore the deep oral literature and philosophy of Nigerian Pidgin: master allegorical proverbs and moral aphorisms.",
        "completed": false,
        "questions": [
          {
            "id": "p-u8-l2-q1",
            "type": "multiple_choice",
            "prompt": "What is the sociopolitical meaning of the famous Nigerian proverb: 'Monkey dey work, baboon dey chop'?",
            "options": [
              "One person toils and produces wealth while another unjustly exploits and consumes it",
              "Wild animals should be protected in nature reserves",
              "Hard work is always rewarded immediately without delay",
              "Monkeys and baboons belong to the same biological genus"
            ],
            "correctAnswer": "One person toils and produces wealth while another unjustly exploits and consumes it",
            "explanation": "It is the master metaphor for systemic labor exploitation, cronyism, and uncredited toil."
          },
          {
            "id": "p-u8-l2-q2",
            "type": "multiple_choice",
            "prompt": "What does 'Water don pass garri' indicate when discussing a community crisis?",
            "options": [
              "The crisis has escalated beyond repair or manageable control",
              "Clean drinking water has arrived in the village",
              "The price of cassava flour has dropped",
              "It is time to eat dinner"
            ],
            "correctAnswer": "The crisis has escalated beyond repair or manageable control",
            "explanation": "When water exceeds the optimal ratio for soaking garri, it is ruined; hence the situation is out of hand."
          },
          {
            "id": "p-u8-l2-q3",
            "type": "multiple_choice",
            "prompt": "What does 'Every day na for the thief, but one day na for the owner' teach about moral justice?",
            "options": [
              "A criminal may evade justice repeatedly, but eventual exposure and retribution are inevitable",
              "Thieves should be invited to parties",
              "Property should not be locked",
              "The calendar has too many days"
            ],
            "correctAnswer": "A criminal may evade justice repeatedly, but eventual exposure and retribution are inevitable",
            "explanation": "Traditional proverb warning that wrongdoing cannot evade justice indefinitely."
          },
          {
            "id": "p-u8-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'No matter how lizard run, e must still lie down for _____ (ground).' ",
            "options": [
              "ground",
              "tree",
              "wall",
              "sky"
            ],
            "correctAnswer": "ground",
            "explanation": "A maxim of humility reminding the arrogant that mortality and earth await everyone."
          },
          {
            "id": "p-u8-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Pikin wey say im mama no go sleep, im sef no go see _____ (sleep).' ",
            "options": [
              "sleep",
              "chop",
              "money",
              "house"
            ],
            "correctAnswer": "sleep",
            "explanation": "Proverb on mutual consequence: a child preventing its mother from resting will also stay awake."
          },
          {
            "id": "p-u8-l2-q6",
            "type": "multiple_choice",
            "prompt": "What does 'Khaki no be leather' mean when assessing quality and endurance?",
            "options": [
              "Surface appearances cannot substitute for genuine durability and true substance",
              "Soldiers should wear leather jackets",
              "Cloth is cheaper than cow skin",
              "Tailors should use real leather"
            ],
            "correctAnswer": "Surface appearances cannot substitute for genuine durability and true substance",
            "explanation": "'Khaki no be leather' contrasts cheap imitation with authentic, tested resilience."
          },
          {
            "id": "p-u8-l2-q7",
            "type": "multiple_choice",
            "prompt": "What does 'Person wey dey sell egg no dey start fight for market' advise?",
            "options": [
              "Those with delicate, fragile interests or reputations should avoid starting unnecessary confrontations",
              "Eggs are too expensive to throw",
              "Market fights are entertaining",
              "Egg sellers should learn wrestling"
            ],
            "correctAnswer": "Those with delicate, fragile interests or reputations should avoid starting unnecessary confrontations",
            "explanation": "Equivalent to 'People who live in glass houses should not throw stones'."
          },
          {
            "id": "p-u8-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Slow and steady dey win _____ (race).' ",
            "options": [
              "race",
              "money",
              "food",
              "cup"
            ],
            "correctAnswer": "race",
            "explanation": "A maxim praising consistency and patient persistence."
          },
          {
            "id": "p-u8-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does 'Soup wey sweet, na money kill am' mean?",
            "options": [
              "Superior, premium quality requires adequate investment, capital, and effort",
              "Cooks steal money from their employers",
              "Expensive soup gives stomach pain",
              "Money can be dissolved in hot broth"
            ],
            "correctAnswer": "Superior, premium quality requires adequate investment, capital, and effort",
            "explanation": "You get what you pay for; excellence requires sufficient resources."
          },
          {
            "id": "p-u8-l2-q10",
            "type": "multiple_choice",
            "prompt": "What does 'If breeze blow, foul yansh go open' mean in political discourse?",
            "options": [
              "When crisis or scrutiny arises, all hidden secrets and corrupt practices are laid bare",
              "Chickens dislike windy weather",
              "Birds fly when storm winds blow",
              "Farmers should lock their hen house"
            ],
            "correctAnswer": "When crisis or scrutiny arises, all hidden secrets and corrupt practices are laid bare",
            "explanation": "Sudden disruptions expose hypocrisies that were previously carefully concealed."
          },
          {
            "id": "p-u8-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Wetin elder see while sitting down, pikin no fit see am even if e climb _____ (tree).' ",
            "options": [
              "tree",
              "roof",
              "ladder",
              "mountain"
            ],
            "correctAnswer": "tree",
            "explanation": "Honors the irreplaceable wisdom, foresight, and experience of age."
          },
          {
            "id": "p-u8-l2-q12",
            "type": "multiple_choice",
            "prompt": "What does 'Follow who know road' teach the youth?",
            "options": [
              "Seek the mentorship and guidance of seasoned, knowledgeable veterans who know the path to success",
              "Never travel alone on dark highways",
              "Follow the GPS navigation map only",
              "Become a traffic warden"
            ],
            "correctAnswer": "Seek the mentorship and guidance of seasoned, knowledgeable veterans who know the path to success",
            "explanation": "'Follow who know road' advocates humility and learning from experienced pioneers."
          },
          {
            "id": "p-u8-l2-q13",
            "type": "multiple_choice",
            "prompt": "What does 'Dead body no dey fear grave' mean?",
            "options": [
              "Someone who has already hit rock bottom or lost everything has nothing left to fear",
              "Graveyards are peaceful places to visit",
              "Corpses have nervous systems",
              "Fear is an emotion of ghosts"
            ],
            "correctAnswer": "Someone who has already hit rock bottom or lost everything has nothing left to fear",
            "explanation": "Describes reckless courage born of absolute desperation."
          },
          {
            "id": "p-u8-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Monkey dey work, baboon dey _____ (chop).' ",
            "options": [
              "chop",
              "sleep",
              "sing",
              "run"
            ],
            "correctAnswer": "chop",
            "explanation": "Iconic proverb of labor exploitation."
          },
          {
            "id": "p-u8-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Monkey works while baboon eats the food.'",
            "tokens": [
              "chop",
              "dey",
              "work,",
              "baboon",
              "Monkey",
              "dey"
            ],
            "correctTokens": [
              "Monkey",
              "dey",
              "work,",
              "baboon",
              "dey",
              "chop"
            ],
            "explanation": "Master proverb: 'Monkey dey work, baboon dey chop'."
          },
          {
            "id": "p-u8-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'The water has exceeded the garri flour.'",
            "tokens": [
              "don",
              "garri",
              "pass",
              "Water"
            ],
            "correctTokens": [
              "Water",
              "don",
              "pass",
              "garri"
            ],
            "explanation": "'Water don pass garri' signifies a crisis beyond remediation."
          },
          {
            "id": "p-u8-l2-q17",
            "type": "matching",
            "prompt": "Match the Pidgin proverb to its core philosophical lesson:",
            "pairs": [
              {
                "left": "Monkey dey work baboon dey chop",
                "right": "Labor exploitation and injustice"
              },
              {
                "left": "Water don pass garri",
                "right": "Crisis has exceeded manageable bounds"
              },
              {
                "left": "Follow who know road",
                "right": "Value seasoned mentorship"
              },
              {
                "left": "Khaki no be leather",
                "right": "Appearance vs genuine substance"
              }
            ],
            "explanation": "Philosophical foundations of NPE oral wisdom."
          },
          {
            "id": "p-u8-l2-q18",
            "type": "matching",
            "prompt": "Match the proverb to its English equivalent:",
            "pairs": [
              {
                "left": "Egg seller no dey fight",
                "right": "People in glass houses shouldn't throw stones"
              },
              {
                "left": "Soup wey sweet na money kill am",
                "right": "You get what you pay for"
              },
              {
                "left": "Every day for thief, one day for owner",
                "right": "Crime does not pay in the long run"
              },
              {
                "left": "Dead body no dey fear grave",
                "right": "A desperate man has nothing to lose"
              }
            ],
            "explanation": "Cross-cultural proverbs and idioms."
          },
          {
            "id": "p-u8-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'My brother, follow who know road make your leg no hit stone.' What practical advice is offered?",
            "audioText": "My brother, follow who know road make your leg no hit stone.",
            "options": [
              "Follow knowledgeable mentors so you do not stumble into avoidable failure",
              "Always wear iron boots when walking",
              "Remove all stones from the village roads",
              "Travel only at night when roads are cool"
            ],
            "correctAnswer": "Follow knowledgeable mentors so you do not stumble into avoidable failure",
            "explanation": "'Follow who know road make your leg no hit stone' counsels seeking wise guidance."
          },
          {
            "id": "p-u8-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Remember say khaki no be leather, so no pretend pass your level.' What warning is given against pretension?",
            "audioText": "Remember say khaki no be leather, so no pretend pass your level.",
            "options": [
              "Do not live beyond your means or pretend to have substance you lack",
              "Khaki fabric makes superior raincoats",
              "Leather jackets are forbidden in school",
              "Cloth is more durable than genuine leather"
            ],
            "correctAnswer": "Do not live beyond your means or pretend to have substance you lack",
            "explanation": "Counsels humility and authenticity over fake lifestyle flexing."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-9",
    "unitNumber": 9,
    "level": "Level 4: Advanced (Yarn Specialist)",
    "title": "Unit 9: Sociolinguistic Code-Switching & Registers",
    "description": "Analyze the linguistic continuum from Basilect (deep street pidgin) through Mesolect to Acrolect (media standard), passive voice active inversion, and enclitic pronominals.",
    "lessons": [
      {
        "id": "p-u9-l1",
        "title": "Lesson 1: Code-Switching & Diglossia (Acrolect vs Basilect)",
        "description": "Navigate the NPE post-creole continuum: differentiate between the Basilect (broad street Pidgin), Mesolect (urban colloquial), and Acrolect (formal broadcast/publishing standard).",
        "completed": false,
        "questions": [
          {
            "id": "p-u9-l1-q1",
            "type": "multiple_choice",
            "prompt": "What is the 'post-creole continuum' in Nigerian Pidgin sociolinguistics?",
            "options": [
              "A spectrum of speech varieties ranging from the most colloquial basilect to formal media acrolect",
              "A test taken by ship captains",
              "A dictionary containing only French loanwords",
              "A railway connecting Lagos to Kano"
            ],
            "correctAnswer": "A spectrum of speech varieties ranging from the most colloquial basilect to formal media acrolect",
            "explanation": "Linguists identify the basilect (deep, substrate-heavy), mesolect (urban common), and acrolect (formal/educated media standard)."
          },
          {
            "id": "p-u9-l1-q2",
            "type": "multiple_choice",
            "prompt": "How does the Acrolect standard used by BBC News Pidgin and JW.org West African Pidgin differ from street Basilect?",
            "options": [
              "It uses standardized orthography, consistent syntax, and professional vocabulary accessible across West Africa",
              "It eliminates all African vocabulary and copies British English",
              "It is spoken only by infants",
              "It uses Shakespearean sonnets"
            ],
            "correctAnswer": "It uses standardized orthography, consistent syntax, and professional vocabulary accessible across West Africa",
            "explanation": "The acrolect maintains rigorous grammar (don, dey, wey, -am) while avoiding regional Delta or Lagos localized slang."
          },
          {
            "id": "p-u9-l1-q3",
            "type": "multiple_choice",
            "prompt": "What does 'code-switching' mean when a speaker moves between Nigerian Pidgin and Standard English?",
            "options": [
              "Fluidly shifting languages within a single conversation depending on social context, audience, and intimacy",
              "Translating computer programming code",
              "Speaking in Morse code over radio",
              "Forgetting how to speak one's mother tongue"
            ],
            "correctAnswer": "Fluidly shifting languages within a single conversation depending on social context, audience, and intimacy",
            "explanation": "Code-switching signals shared identity, solidarity, humorous commentary, or thematic authority."
          },
          {
            "id": "p-u9-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'In formal broadcasting, NPE serves as a national _____ (bridge language) uniting diverse ethnic groups.'",
            "options": [
              "lingua franca",
              "dead language",
              "secret code",
              "foreign tongue"
            ],
            "correctAnswer": "lingua franca",
            "explanation": "NPE is Nigeria's most widely spoken inter-ethnic lingua franca."
          },
          {
            "id": "p-u9-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The deepest, broad street variety of Pidgin is known linguistically as the _____ (basilect).'",
            "options": [
              "basilect",
              "acrolect",
              "mesolect",
              "dialect"
            ],
            "correctAnswer": "basilect",
            "explanation": "Basilect denotes the most divergent, grassroots variety on the continuum."
          },
          {
            "id": "p-u9-l1-q6",
            "type": "multiple_choice",
            "prompt": "When an educated Nigerian professional switches from English to Pidgin in an office, what interpersonal signal does it convey?",
            "options": [
              "Warmth, camaraderie, cultural solidarity, and leveling of formal hierarchical distance",
              "Illiteracy and ignorance",
              "An insult to the company director",
              "A request to stop working"
            ],
            "correctAnswer": "Warmth, camaraderie, cultural solidarity, and leveling of formal hierarchical distance",
            "explanation": "Pidgin serves as an egalitarian social lubricant dismantling rigid colonial pretension."
          },
          {
            "id": "p-u9-l1-q7",
            "type": "multiple_choice",
            "prompt": "Which register would you expect in a formal JW.org or BBC Pidgin health announcement?",
            "options": [
              "Clear, standardized Pidgin using terms like 'doctor dem', 'take care of your body', and 'things wey you fit do'",
              "Heavy Warri street slangs with profanity",
              "Latin medical terms without any explanation",
              "Broken nursery rhymes"
            ],
            "correctAnswer": "Clear, standardized Pidgin using terms like 'doctor dem', 'take care of your body', and 'things wey you fit do'",
            "explanation": "Standard media Pidgin prioritizes broad clarity, dignity, and inter-regional comprehension."
          },
          {
            "id": "p-u9-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Standard media Pidgin uses the enclitic pronoun _____ (it/him/her) with hyphens as in use-am, read-am.'",
            "options": [
              "-am",
              "-it",
              "-im",
              "-dem"
            ],
            "correctAnswer": "-am",
            "explanation": "Hyphenated enclitic '-am' is standard in JW.org and BBC orthography."
          },
          {
            "id": "p-u9-l1-q9",
            "type": "multiple_choice",
            "prompt": "How does the formal media register translate 'According to the Minister'?",
            "options": [
              "'As the Minister talk-am' or 'As the Minister talk'",
              "'Minister saying this'",
              "'From the mouth of government'",
              "'Minister was shouting'"
            ],
            "correctAnswer": "'As the Minister talk-am' or 'As the Minister talk'",
            "explanation": "'As [official] talk-am' is standard broadcast attribution."
          },
          {
            "id": "p-u9-l1-q10",
            "type": "multiple_choice",
            "prompt": "In diglossic code-switching, which particle is often inserted as an emphatic pragmatic discourse tag?",
            "options": [
              "'Abi?', 'Sha', or 'Jare'",
              "'Nevertheless'",
              "'Furthermore'",
              "'Heretofore'"
            ],
            "correctAnswer": "'Abi?', 'Sha', or 'Jare'",
            "explanation": "Discourse particles like 'sha' (in any case), 'abi' (isn't it?), and 'jare' add emotional resonance."
          },
          {
            "id": "p-u9-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'We agree with the plan, _____ (anyway/regardless) make we be careful.'",
            "options": [
              "sha",
              "abi",
              "jare",
              "kwanu"
            ],
            "correctAnswer": "sha",
            "explanation": "'Sha' serves as an assertive pragmatic concession marker ('anyway / all the same')."
          },
          {
            "id": "p-u9-l1-q12",
            "type": "multiple_choice",
            "prompt": "Why has Nigerian Pidgin gained popularity in banking apps, telecom USSD menus, and public health campaigns?",
            "options": [
              "Because it reaches millions of citizens across educational and regional divides with high emotional warmth",
              "Because English is banned by law",
              "Because it uses fewer letters of the alphabet",
              "Because foreign tourists requested it"
            ],
            "correctAnswer": "Because it reaches millions of citizens across educational and regional divides with high emotional warmth",
            "explanation": "NPE has unmatched demographic penetration and psychological resonance across Nigeria."
          },
          {
            "id": "p-u9-l1-q13",
            "type": "multiple_choice",
            "prompt": "How does a speaker indicate a shift to solemn gravity in a Pidgin address?",
            "options": [
              "Lowering pitch, using measured cadence, and opening with 'Make we talk the real truth now'",
              "Shouting loudly into a horn",
              "Singing reggae music",
              "Speaking in whispers"
            ],
            "correctAnswer": "Lowering pitch, using measured cadence, and opening with 'Make we talk the real truth now'",
            "explanation": "Rhetorical solemnity is established through discourse markers and deliberate pacing."
          },
          {
            "id": "p-u9-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'You go attend the meeting today, _____ (right / isn't it)?'",
            "options": [
              "abi",
              "sha",
              "jare",
              "sef"
            ],
            "correctAnswer": "abi",
            "explanation": "'Abi?' functions as the universal tag question ('right? / isn't it?')."
          },
          {
            "id": "p-u9-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'We speak standard Pidgin on the radio.'",
            "tokens": [
              "radio",
              "talk",
              "Pidgin",
              "for",
              "standard",
              "de",
              "We"
            ],
            "correctTokens": [
              "We",
              "de",
              "talk",
              "standard",
              "Pidgin",
              "for",
              "radio"
            ],
            "explanation": "'We de talk standard Pidgin for radio' represents professional broadcast register."
          },
          {
            "id": "p-u9-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'You know that the truth is bitter, right?'",
            "tokens": [
              "the",
              "sabi",
              "bitter,",
              "say",
              "truth",
              "You",
              "dey",
              "abi?"
            ],
            "correctTokens": [
              "You",
              "sabi",
              "say",
              "the",
              "truth",
              "dey",
              "bitter,",
              "abi?"
            ],
            "explanation": "'You sabi say the truth dey bitter, abi?' features the tag question 'abi?'."
          },
          {
            "id": "p-u9-l1-q17",
            "type": "matching",
            "prompt": "Match the sociolinguistic term to its definition in Nigerian Pidgin:",
            "pairs": [
              {
                "left": "Acrolect",
                "right": "Formal broadcast / written media standard"
              },
              {
                "left": "Mesolect",
                "right": "Everyday urban conversational Pidgin"
              },
              {
                "left": "Basilect",
                "right": "Deep street / regional grassroots vernacular"
              },
              {
                "left": "Code-Switching",
                "right": "Alternating between English and Pidgin in speech"
              }
            ],
            "explanation": "Sociolinguistic continuum concepts."
          },
          {
            "id": "p-u9-l1-q18",
            "type": "matching",
            "prompt": "Match the pragmatic discourse particle to its communicative role:",
            "pairs": [
              {
                "left": "Abi?",
                "right": "Confirmation seeking / Tag question (Right?)"
              },
              {
                "left": "Sha",
                "right": "Concessive marker (Anyway / In any case)"
              },
              {
                "left": "Sef",
                "right": "Emphatic intensifier (Even / In fact)"
              },
              {
                "left": "Jare",
                "right": "Dismissive or endearing particle"
              }
            ],
            "explanation": "Core pragmatic sentence-final particles."
          },
          {
            "id": "p-u9-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'BBC and JW.org de use standard Pidgin wey everybody across West Africa fit understand.' What is highlighted about standard Pidgin?",
            "audioText": "BBC and JW.org de use standard Pidgin wey everybody across West Africa fit understand.",
            "options": [
              "It is accessible and comprehensible across all of West Africa",
              "It is only understood by people living in one village",
              "It is too complicated for regular citizens to read",
              "It was invented yesterday"
            ],
            "correctAnswer": "It is accessible and comprehensible across all of West Africa",
            "explanation": "Broadcast standard Pidgin bridges national and regional dialectal variations."
          },
          {
            "id": "p-u9-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'No mind wetin people de talk jare, face your work sha.' What encouraging stance is expressed?",
            "audioText": "No mind wetin people de talk jare, face your work sha.",
            "options": [
              "Dismiss idle gossip and concentrate resolutely on your personal duties",
              "Engage in public arguments with critics",
              "Quit your employment immediately",
              "Invite gossips to a party"
            ],
            "correctAnswer": "Dismiss idle gossip and concentrate resolutely on your personal duties",
            "explanation": "Uses pragmatic particles 'jare' and 'sha' to counsel disciplined focus."
          }
        ]
      },
      {
        "id": "p-u9-l2",
        "title": "Lesson 2: Passive Voice Inversion & Enclitic Pronominal -am",
        "description": "Master syntactic active voice inversion (substituting English passive constructions) and the precise orthographic rules of enclitic '-am'.",
        "completed": false,
        "questions": [
          {
            "id": "p-u9-l2-q1",
            "type": "multiple_choice",
            "prompt": "How does Nigerian Pidgin syntactically render English passive sentences like 'The bread was eaten by them'?",
            "options": [
              "Active subject inversion using 'dem' and completive 'don' ('Dem don chop the bread')",
              "Direct translation with 'was' and '-ed' ('The bread was chopped by dem')",
              "Placing 'bread' as subject and adding 'by them'",
              "Pidgin cannot express passive events"
            ],
            "correctAnswer": "Active subject inversion using 'dem' and completive 'don' ('Dem don chop the bread')",
            "explanation": "NPE avoids morphological passive inflection by inverting the clause into an active construction using third-person plural 'Dem' as the agent."
          },
          {
            "id": "p-u9-l2-q2",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'The thief was arrested yesterday'?",
            "options": [
              "'Dem arrest the tief yesterday' (Active impersonal inversion)",
              "'The thief was arrested yesterday'",
              "'Tief arrested himself'",
              "'Arresting tief happened'"
            ],
            "correctAnswer": "'Dem arrest the tief yesterday' (Active impersonal inversion)",
            "explanation": "Impersonal active 'Dem [verb]' is the standard rendering for English agentless passives."
          },
          {
            "id": "p-u9-l2-q3",
            "type": "multiple_choice",
            "prompt": "In JW.org official translations, how is 'As it was said by Jesus' rendered?",
            "options": [
              "'As Jesus talk-am'",
              "'As it was spoken by Christ'",
              "'Jesus speech was made'",
              "'Talked by Jesus'"
            ],
            "correctAnswer": "'As Jesus talk-am'",
            "explanation": "JW.org video series title: 'Good News As Jesus Talk-Am' (The Good News as Jesus spoke it)."
          },
          {
            "id": "p-u9-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'My money _____ (was stolen) inside the bus.'",
            "options": [
              "Dem don tief",
              "Was tiefed",
              "Tief don steal",
              "Dem is stealing"
            ],
            "correctAnswer": "Dem don tief",
            "explanation": "'Dem don tief my money' is the active voice equivalent of 'My money was stolen'."
          },
          {
            "id": "p-u9-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'You fit gain from-_____ (it) if you study well.'",
            "options": [
              "am",
              "it",
              "im",
              "dem"
            ],
            "correctAnswer": "am",
            "explanation": "JW.org text: 'gain from-am' attaches '-am' as object of preposition."
          },
          {
            "id": "p-u9-l2-q6",
            "type": "multiple_choice",
            "prompt": "How is 'The road was repaired last month' expressed?",
            "options": [
              "'Dem repair the road last month'",
              "'Road was repaired by road people'",
              "'Road repair itself'",
              "'Repairing road is finished'"
            ],
            "correctAnswer": "'Dem repair the road last month'",
            "explanation": "'Dem repair the road' represents active inversion of the passive."
          },
          {
            "id": "p-u9-l2-q7",
            "type": "multiple_choice",
            "prompt": "Can the enclitic pronoun '-am' be attached to prepositions as well as verbs?",
            "options": [
              "Yes! As in 'from-am' (from it/him), 'with-am' (with it), 'give-am' (give it)",
              "No, it can only attach to nouns",
              "No, it can only attach to adjectives",
              "Only on Sundays"
            ],
            "correctAnswer": "Yes! As in 'from-am' (from it/him), 'with-am' (with it), 'give-am' (give it)",
            "explanation": "JW.org Pidgin demonstrates enclitic attachment to prepositions ('gain from-am', 'study with-am')."
          },
          {
            "id": "p-u9-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'If you see the brochure, take-_____ (it) home.'",
            "options": [
              "am",
              "it",
              "im",
              "dem"
            ],
            "correctAnswer": "am",
            "explanation": "'Take-am' represents transitive verb + direct object pronoun."
          },
          {
            "id": "p-u9-l2-q9",
            "type": "multiple_choice",
            "prompt": "What does 'Dem don sign the new law' translate?",
            "options": [
              "'The new law has been signed / enacted'",
              "'They refused to sign the law'",
              "'Laws are forbidden'",
              "'Sign a signature on the paper'"
            ],
            "correctAnswer": "'The new law has been signed / enacted'",
            "explanation": "Standard journalistic translation for passive enactment of legislation."
          },
          {
            "id": "p-u9-l2-q10",
            "type": "multiple_choice",
            "prompt": "In the sentence 'Dem born am for Port Harcourt', what does it mean?",
            "options": [
              "'He/She was born in Port Harcourt'",
              "'Port Harcourt gave birth to many children'",
              "'They are traveling to Port Harcourt'",
              "'A baby was lost in Port Harcourt'"
            ],
            "correctAnswer": "'He/She was born in Port Harcourt'",
            "explanation": "'Dem born am' is the universal NPE passive inversion for 'He/she was born'."
          },
          {
            "id": "p-u9-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Where _____ (were you born)?'",
            "options": [
              "dem born you",
              "were you borned",
              "you was born",
              "you borned"
            ],
            "correctAnswer": "dem born you",
            "explanation": "'Where dem born you?' = Where were you born?"
          },
          {
            "id": "p-u9-l2-q12",
            "type": "multiple_choice",
            "prompt": "How is 'The truth will be known' rendered naturally in Pidgin?",
            "options": [
              "'People go know the truth' or 'Truth go open'",
              "'Truth will be knowed'",
              "'Knowing of truth shall occur'",
              "'Truth is knowing'"
            ],
            "correctAnswer": "'People go know the truth' or 'Truth go open'",
            "explanation": "Active agentive expression: 'Truth go open' or 'People go know the truth'."
          },
          {
            "id": "p-u9-l2-q13",
            "type": "multiple_choice",
            "prompt": "Why does Nigerian Pidgin prefer active inversion over formal passive forms?",
            "options": [
              "Because Niger-Congo substrate grammar favors direct agency and dynamic event structure over passive nominalization",
              "Because speakers do not like passive verbs",
              "Because of a decree by the Ministry of Education",
              "To save ink when printing"
            ],
            "correctAnswer": "Because Niger-Congo substrate grammar favors direct agency and dynamic event structure over passive nominalization",
            "explanation": "West African syntax conceptualizes events as active agentive dynamics."
          },
          {
            "id": "p-u9-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'I hear the sound and I follow-_____ (it).' ",
            "options": [
              "am",
              "it",
              "im",
              "dem"
            ],
            "correctAnswer": "am",
            "explanation": "'Follow-am' = followed it."
          },
          {
            "id": "p-u9-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'He was born in Lagos in 1995.'",
            "tokens": [
              "for",
              "1995",
              "born",
              "Dem",
              "am",
              "Lagos",
              "for"
            ],
            "correctTokens": [
              "Dem",
              "born",
              "am",
              "for",
              "Lagos",
              "for",
              "1995"
            ],
            "explanation": "Standard passive inversion: 'Dem born am for Lagos for 1995'."
          },
          {
            "id": "p-u9-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'The good news as Jesus spoke it.'",
            "tokens": [
              "Jesus",
              "news",
              "talk-am",
              "Good",
              "as"
            ],
            "correctTokens": [
              "Good",
              "news",
              "as",
              "Jesus",
              "talk-am"
            ],
            "explanation": "JW.org series title: 'Good news as Jesus talk-am'."
          },
          {
            "id": "p-u9-l2-q17",
            "type": "matching",
            "prompt": "Match the English passive clause to its natural Pidgin active inversion:",
            "pairs": [
              {
                "left": "He was arrested",
                "right": "Dem arrest am"
              },
              {
                "left": "She was born here",
                "right": "Dem born am here"
              },
              {
                "left": "The car was stolen",
                "right": "Dem tief the motor"
              },
              {
                "left": "The road was built",
                "right": "Dem construct the road"
              }
            ],
            "explanation": "Systematic transformation from English passive to NPE active inversion."
          },
          {
            "id": "p-u9-l2-q18",
            "type": "matching",
            "prompt": "Match the verb/preposition + enclitic '-am' to its meaning:",
            "pairs": [
              {
                "left": "Gain from-am",
                "right": "Benefit from it"
              },
              {
                "left": "Study with-am",
                "right": "Learn using it"
              },
              {
                "left": "Watch-am",
                "right": "View it attentively"
              },
              {
                "left": "Hold-am",
                "right": "Grasp / retain it"
              }
            ],
            "explanation": "Enclitic pronominal suffix patterns in West African Pidgin literature."
          },
          {
            "id": "p-u9-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Dem don build new hospital for our town.' What community improvement took place?",
            "audioText": "Dem don build new hospital for our town.",
            "options": [
              "A new hospital was constructed in our town",
              "The old hospital was closed down",
              "Doctors went on strike",
              "A new marketplace was opened"
            ],
            "correctAnswer": "A new hospital was constructed in our town",
            "explanation": "'Dem don build new hospital...' represents the passive 'A new hospital has been built'."
          },
          {
            "id": "p-u9-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Read this publication and you go gain plenty things from-am.' What is the promised outcome of reading?",
            "audioText": "Read this publication and you go gain plenty things from-am.",
            "options": [
              "You will gain much valuable benefit from it",
              "You will lose your reading eyeglasses",
              "The publication is difficult to comprehend",
              "You must pay money for the publication"
            ],
            "correctAnswer": "You will gain much valuable benefit from it",
            "explanation": "JW.org Pidgin: 'gain plenty things from-am' (gain much from it)."
          }
        ]
      }
    ]
  },
  {
    "unitId": "p-unit-10",
    "unitNumber": 10,
    "level": "Level 4: Advanced (Yarn Specialist)",
    "title": "Unit 10: Rhetoric, Satire & Advanced Creative Arts",
    "description": "Explore the highest tier of Nigerian Pidgin mastery: stand-up comedy rhetoric, satirical political social critique, and formal translation of complex literature.",
    "lessons": [
      {
        "id": "p-u10-l1",
        "title": "Lesson 1: Stand-up Comedy & Satirical Discourse",
        "description": "Analyze the oral delivery, comedic timing, hyperbole, and socio-political satire that make Nigerian stand-up comedy world-renowned.",
        "completed": false,
        "questions": [
          {
            "id": "p-u10-l1-q1",
            "type": "multiple_choice",
            "prompt": "Why is Nigerian Pidgin the primary linguistic medium for stand-up comedy across Africa?",
            "options": [
              "Its tonal inflection, kinetic imagery, and universal inter-ethnic reach make it uniquely suited for humorous satire",
              "Comedians are not permitted to speak standard English",
              "Pidgin has no complex vocabulary",
              "English comedy has been banned by the government"
            ],
            "correctAnswer": "Its tonal inflection, kinetic imagery, and universal inter-ethnic reach make it uniquely suited for humorous satire",
            "explanation": "NPE possesses vibrant comedic elasticity, double entendre, and expressive ideophones that electrify audiences."
          },
          {
            "id": "p-u10-l1-q2",
            "type": "multiple_choice",
            "prompt": "What does 'I die hear!' or 'Laughter wan kill me!' express in the audience?",
            "options": [
              "Overwhelming comedic delight and uncontrollable laughter",
              "Physical medical distress",
              "Boredom and disgust",
              "A request for silence"
            ],
            "correctAnswer": "Overwhelming comedic delight and uncontrollable laughter",
            "explanation": "Hyperbolic kinetic idioms for intense amusement."
          },
          {
            "id": "p-u10-l1-q3",
            "type": "multiple_choice",
            "prompt": "What is 'Yab' in the context of Nigerian comedy and social discourse?",
            "options": [
              "To tease, roast, or satirize with witty, playful sarcasm",
              "To physically assault someone with a stick",
              "To bake cassava bread",
              "To cry bitterly over a loss"
            ],
            "correctAnswer": "To tease, roast, or satirize with witty, playful sarcasm",
            "explanation": "'Yab' (made famous by Fela Kuti's 'Yabis') is satirical critique, roasting, and political lampooning."
          },
          {
            "id": "p-u10-l1-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The comedian _____ (roasted/satirized) all the corrupt politicians on stage.'",
            "options": [
              "yab",
              "praise",
              "salute",
              "dash"
            ],
            "correctAnswer": "yab",
            "explanation": "'Yab' means to roast or humorously satirize."
          },
          {
            "id": "p-u10-l1-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Laughter wan _____ (overpower/kill) the audience with joy.'",
            "options": [
              "kill",
              "bite",
              "kick",
              "burn"
            ],
            "correctAnswer": "kill",
            "explanation": "'Laughter wan kill...' is the classic comedic hyperbole."
          },
          {
            "id": "p-u10-l1-q6",
            "type": "multiple_choice",
            "prompt": "What satirical role did Fela Anikulapo Kuti's Pidgin songs (like 'Suffering and Smiling') play?",
            "options": [
              "They exposed military corruption, public subservience, and economic exploitation in language all masses understood",
              "They were simple love songs for children",
              "They praised government officials",
              "They taught ballroom dancing"
            ],
            "correctAnswer": "They exposed military corruption, public subservience, and economic exploitation in language all masses understood",
            "explanation": "Fela used Pidgin as a revolutionary anti-colonial, anti-authoritarian pedagogical weapon."
          },
          {
            "id": "p-u10-l1-q7",
            "type": "multiple_choice",
            "prompt": "What does the satirical phrase 'Suffering and smiling' capture about Nigerian societal resilience?",
            "options": [
              "Enduring profound infrastructural hardship with outward cheerfulness and humorous grace",
              "Refusing to work while smiling",
              "Smiling makes suffering disappear immediately",
              "A medical psychiatric diagnosis"
            ],
            "correctAnswer": "Enduring profound infrastructural hardship with outward cheerfulness and humorous grace",
            "explanation": "Fela's master concept: coping with systemic systemic breakdown through irrepressible humor and stoicism."
          },
          {
            "id": "p-u10-l1-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Instead of make we cry, we decide to use _____ (humor/comedy) take comfort ourselves.'",
            "options": [
              "laugh",
              "fight",
              "sleep",
              "tears"
            ],
            "correctAnswer": "laugh",
            "explanation": "Comedic catharsis: using laughter as resilience."
          },
          {
            "id": "p-u10-l1-q9",
            "type": "multiple_choice",
            "prompt": "What rhetorical technique does a Pidgin comedian use when switching between deep Warri basilect and hyper-posh Queen's English?",
            "options": [
              "Stylistic contrast / incongruity humor (satirizing colonial affectation vs raw street reality)",
              "A sign that the comedian forgot their lines",
              "Accidental pronunciation errors",
              "A translation test for foreign judges"
            ],
            "correctAnswer": "Stylistic contrast / incongruity humor (satirizing colonial affectation vs raw street reality)",
            "explanation": "Code-switching between extremes creates humorous incongruity and social commentary."
          },
          {
            "id": "p-u10-l1-q10",
            "type": "multiple_choice",
            "prompt": "What does 'Crack joke' mean?",
            "options": [
              "To tell a funny, hilarious story or humorous punchline",
              "To break a wooden table while laughing",
              "To fail an examination",
              "To whisper a confidential secret"
            ],
            "correctAnswer": "To tell a funny, hilarious story or humorous punchline",
            "explanation": "'Crack joke' is the standard expression for delivering humor."
          },
          {
            "id": "p-u10-l1-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'That MC sabi _____ (tell jokes) well-well.'",
            "options": [
              "crack joke",
              "scatter head",
              "throway stone",
              "fall hand"
            ],
            "correctAnswer": "crack joke",
            "explanation": "'Sabi crack joke' = skilled at comedic delivery."
          },
          {
            "id": "p-u10-l1-q12",
            "type": "multiple_choice",
            "prompt": "What is 'Irony' in Nigerian street satire?",
            "options": [
              "Expressing harsh realities through playful understatement or paradoxical humor ('No light, but we buy refrigerator')",
              "A type of metal used in welding",
              "Pressing clothes with hot charcoal",
              "A speech given by soldiers"
            ],
            "correctAnswer": "Expressing harsh realities through playful understatement or paradoxical humor ('No light, but we buy refrigerator')",
            "explanation": "Street satire thrives on paradoxical observations of infrastructural ironies."
          },
          {
            "id": "p-u10-l1-q13",
            "type": "multiple_choice",
            "prompt": "What does 'Burst my brain' mean when reacting to an extraordinary comedic or artistic performance?",
            "options": [
              "'Blew my mind / Astounded me beyond comprehension'",
              "'Caused a medical brain injury'",
              "'I am experiencing a severe headache'",
              "'The music is too quiet to hear'"
            ],
            "correctAnswer": "'Blew my mind / Astounded me beyond comprehension'",
            "explanation": "'Burst my brain' is high praise for awe-inspiring genius or hilarious ingenuity."
          },
          {
            "id": "p-u10-l1-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The comedian performance _____ (blew our minds) completely.' ",
            "options": [
              "burst our brain",
              "fall our hand",
              "chop our money",
              "cool our temper"
            ],
            "correctAnswer": "burst our brain",
            "explanation": "'Burst our brain' = blew our minds."
          },
          {
            "id": "p-u10-l1-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Instead of crying, we use laughter to survive.'",
            "tokens": [
              "laugh",
              "we",
              "we",
              "crying,",
              "survive",
              "take",
              "Instead",
              "use",
              "of"
            ],
            "correctTokens": [
              "Instead",
              "of",
              "crying,",
              "we",
              "use",
              "laugh",
              "take",
              "survive"
            ],
            "explanation": "Philosophy of Nigerian satire: 'Instead of crying, we use laugh take survive'."
          },
          {
            "id": "p-u10-l1-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'That show was so funny that laughter almost killed us.'",
            "tokens": [
              "kill",
              "funny",
              "show",
              "Dat",
              "laugh",
              "make",
              "us",
              "wan"
            ],
            "correctTokens": [
              "Dat",
              "show",
              "funny",
              "make",
              "laugh",
              "wan",
              "kill",
              "us"
            ],
            "explanation": "Comedic appreciation: 'Dat show funny make laugh wan kill us'."
          },
          {
            "id": "p-u10-l1-q17",
            "type": "matching",
            "prompt": "Match the comedic slang to its dramatic function:",
            "pairs": [
              {
                "left": "Yab",
                "right": "Witty roasting / satirical teasing"
              },
              {
                "left": "Crack joke",
                "right": "Deliver humorous punchlines"
              },
              {
                "left": "Burst brain",
                "right": "Astound with brilliance"
              },
              {
                "left": "Laughter wan kill me",
                "right": "Uncontrollable amusement"
              }
            ],
            "explanation": "Taxonomy of Nigerian comedy performance terminology."
          },
          {
            "id": "p-u10-l1-q18",
            "type": "matching",
            "prompt": "Match the satirical theme to its famous NPE expression:",
            "pairs": [
              {
                "left": "Suffering and smiling",
                "right": "Resilience in the face of hardship"
              },
              {
                "left": "No light we buy fridge",
                "right": "Infrastructural paradox"
              },
              {
                "left": "Generator country",
                "right": "Alternative energy self-reliance"
              },
              {
                "left": "Vawulence everywhere",
                "right": "Playful internet roast culture"
              }
            ],
            "explanation": "Thematic topics in modern satirical critique."
          },
          {
            "id": "p-u10-l1-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'When the comedian yab the big man, the whole hall burst into sweet laughter.' What did the comedian do?",
            "audioText": "When the comedian yab the big man, the whole hall burst into sweet laughter.",
            "options": [
              "Roast a wealthy dignitary, making the whole audience roar with laughter",
              "Ask the wealthy man for financial donations",
              "Insult the audience and storm off the stage",
              "Sing a church hymn quietly"
            ],
            "correctAnswer": "Roast a wealthy dignitary, making the whole audience roar with laughter",
            "explanation": "Classic comedy dynamic: using 'yab' to speak truth to power."
          },
          {
            "id": "p-u10-l1-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'Laughter na the medicine wey our people de use overcome daily stress.' What role does laughter serve?",
            "audioText": "Laughter na the medicine wey our people de use overcome daily stress.",
            "options": [
              "A therapeutic balm used to conquer everyday anxiety and stress",
              "A commercial drug sold in pharmacies",
              "A disease that causes physical weakness",
              "A distraction that should be abolished"
            ],
            "correctAnswer": "A therapeutic balm used to conquer everyday anxiety and stress",
            "explanation": "Laughter as psychological resistance and social healing."
          }
        ]
      },
      {
        "id": "p-u10-l2",
        "title": "Lesson 2: Media Pidgin & Translation (BBC & JW Standard)",
        "description": "Master the art of translating complex socio-political news, legal documents, and theological literature into West African Standard Pidgin.",
        "completed": false,
        "questions": [
          {
            "id": "p-u10-l2-q1",
            "type": "multiple_choice",
            "prompt": "How does JW.org official West African Pidgin translate 'The Good News According to Jesus Christ'?",
            "options": [
              "'Good News as Jesus Talk-am'",
              "'The Jesus Christ News Story'",
              "'Holy Gospel as Jesus Spoke'",
              "'Book of Christian Drama'"
            ],
            "correctAnswer": "'Good News as Jesus Talk-am'",
            "explanation": "Official JW.org video and publication series title: 'Good News As Jesus Talk-Am'."
          },
          {
            "id": "p-u10-l2-q2",
            "type": "multiple_choice",
            "prompt": "How is 'Why is it good for us to study the Bible?' officially rendered on JW.org?",
            "options": [
              "'Why E Good Make We Study Bible?'",
              "'The Reasons of Bible Reading'",
              "'Bible Study Good for Everyone'",
              "'Make We Know Bible Book'"
            ],
            "correctAnswer": "'Why E Good Make We Study Bible?'",
            "explanation": "Official JW.org article headline: 'Why E Good Make We Study Bible?' (uses hortative 'make we' + stative 'good')."
          },
          {
            "id": "p-u10-l2-q3",
            "type": "multiple_choice",
            "prompt": "How does BBC News Pidgin translate 'The President has signed the Electoral Act Amendment Bill into law'?",
            "options": [
              "'President don sign the new election law make e turn law' or 'President don sign the new election law'",
              "'The presidency signed amendment bills yesterday'",
              "'Election paper was signed by president'",
              "'Signing of law happened by leader'"
            ],
            "correctAnswer": "'President don sign the new election law make e turn law' or 'President don sign the new election law'",
            "explanation": "Media Pidgin replaces bureaucratic jargon with clear, forceful aspectual verbs ('don sign the new election law')."
          },
          {
            "id": "p-u10-l2-q4",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Check the different-different parts wey the translation _____ (has).' ",
            "options": [
              "get",
              "hold",
              "carry",
              "take"
            ],
            "correctAnswer": "get",
            "explanation": "JW.org text: 'Check the different parts wey the New World Translation get'."
          },
          {
            "id": "p-u10-l2-q5",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Click here to _____ (watch it) now.'",
            "options": [
              "Watch-am",
              "Watch it",
              "See am",
              "Look it"
            ],
            "correctAnswer": "Watch-am",
            "explanation": "JW.org video button standard: 'Watch-am Now'."
          },
          {
            "id": "p-u10-l2-q6",
            "type": "multiple_choice",
            "prompt": "In professional journalism, how is 'The Ministry of Health announced that vaccination is free' translated?",
            "options": [
              "'Ministry of Health announce say vaccine na free, nobody go pay'",
              "'Health people talked about free injections'",
              "'No money vaccine has come from government'",
              "'Doctor dem say vaccination is zero naira'"
            ],
            "correctAnswer": "'Ministry of Health announce say vaccine na free, nobody go pay'",
            "explanation": "Broadcaster standard: 'announce say [clause]' translates 'announced that'."
          },
          {
            "id": "p-u10-l2-q7",
            "type": "multiple_choice",
            "prompt": "What does 'Things Wey Don Happen' mean as a media website category?",
            "options": [
              "News, current events, and historic milestones",
              "Future predictions",
              "Fairy tales and legends",
              "Personal diary entries"
            ],
            "correctAnswer": "News, current events, and historic milestones",
            "explanation": "JW.org and broadcast news section header for current events and reporting."
          },
          {
            "id": "p-u10-l2-q8",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'Find the place wey we de do our meeting for your _____ (local area).' ",
            "options": [
              "area",
              "corner",
              "street",
              "village"
            ],
            "correctAnswer": "area",
            "explanation": "JW.org text: 'Find the place wey we de do our meeting for your area'."
          },
          {
            "id": "p-u10-l2-q9",
            "type": "multiple_choice",
            "prompt": "How is 'Economic inflation has increased food prices across the country' rendered in journalistic Pidgin?",
            "options": [
              "'High cost of living don make food cost pass before for the whole country'",
              "'Inflation is beating market women'",
              "'Money is small and food is big'",
              "'Chop chop don costly'"
            ],
            "correctAnswer": "'High cost of living don make food cost pass before for the whole country'",
            "explanation": "Combines 'high cost of living' with causative 'make food cost pass before'."
          },
          {
            "id": "p-u10-l2-q10",
            "type": "multiple_choice",
            "prompt": "What is the primary translation rule for maintaining dignity and reverence in formal Pidgin literature?",
            "options": [
              "Avoid derogatory vulgarisms, maintain consistent orthography, and use established respectful vocabulary",
              "Insert as many English words as possible to seem educated",
              "Translate word-for-word from King James English",
              "Use emojis instead of nouns"
            ],
            "correctAnswer": "Avoid derogatory vulgarisms, maintain consistent orthography, and use established respectful vocabulary",
            "explanation": "JW.org and BBC establish high literary standards of respect, clarity, and grammatical precision."
          },
          {
            "id": "p-u10-l2-q11",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'As we de tell people about God, na e make we be _____ (Jehovah's Witnesses).' ",
            "options": [
              "Jehovah Witness",
              "Church people",
              "Christian group",
              "Bible reader"
            ],
            "correctAnswer": "Jehovah Witness",
            "explanation": "JW.org official confession: 'As we de tell people about Jehovah God and e Kingdom, na e make we be Jehovah Witness'."
          },
          {
            "id": "p-u10-l2-q12",
            "type": "multiple_choice",
            "prompt": "How do you translate: 'We do all our work as one united people'?",
            "options": [
              "'We de do all our thing as one people'",
              "'All our thing is one doing'",
              "'United we are working together'",
              "'One person does the work'"
            ],
            "correctAnswer": "'We de do all our thing as one people'",
            "explanation": "JW.org standard text: 'even so, we de do all our thing as one people'."
          },
          {
            "id": "p-u10-l2-q13",
            "type": "multiple_choice",
            "prompt": "How does BBC News Pidgin typically report breaking sports news like 'Nigeria qualified for the World Cup'?",
            "options": [
              "'Super Eagles don qualify for World Cup after dem beat their opponent'",
              "'Football players of Nigeria are going to international stadium'",
              "'Ball entered inside net for qualification'",
              "'World Cup invites Nigeria by letter'"
            ],
            "correctAnswer": "'Super Eagles don qualify for World Cup after dem beat their opponent'",
            "explanation": "Concise, vibrant reporting: 'Super Eagles don qualify...'."
          },
          {
            "id": "p-u10-l2-q14",
            "type": "fill_blank",
            "prompt": "Fill in the blank: 'The story make the life of Jesus dey _____ (real) to us.' ",
            "options": [
              "real",
              "true",
              "clear",
              "near"
            ],
            "correctAnswer": "real",
            "explanation": "JW.org text: 'make the story about Jesus Christ life dey real to us'."
          },
          {
            "id": "p-u10-l2-q15",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Why is it good for us to study the Bible?'",
            "tokens": [
              "study",
              "E",
              "Bible?",
              "Make",
              "We",
              "Good",
              "Why"
            ],
            "correctTokens": [
              "Why",
              "E",
              "Good",
              "Make",
              "We",
              "Study",
              "Bible?"
            ],
            "explanation": "JW.org article title: 'Why E Good Make We Study Bible?'."
          },
          {
            "id": "p-u10-l2-q16",
            "type": "scramble",
            "prompt": "Arrange the words to say: 'Things that we can use to study the Bible.'",
            "tokens": [
              "Things",
              "Fit",
              "Study",
              "Wey",
              "We",
              "Bible",
              "Use"
            ],
            "correctTokens": [
              "Things",
              "Wey",
              "We",
              "Fit",
              "Use",
              "Study",
              "Bible"
            ],
            "explanation": "JW.org publication category: 'Things Wey We Fit Use Study Bible'."
          },
          {
            "id": "p-u10-l2-q17",
            "type": "matching",
            "prompt": "Match the formal media headline to its Standard English meaning:",
            "pairs": [
              {
                "left": "Things wey don happen",
                "right": "News and current events"
              },
              {
                "left": "Why e good make we study Bible?",
                "right": "Why we should study the scriptures"
              },
              {
                "left": "Good news as Jesus talk-am",
                "right": "The Gospel according to Jesus"
              },
              {
                "left": "Watch-am now",
                "right": "Stream the video presentation"
              }
            ],
            "explanation": "Official media and publishing terminology."
          },
          {
            "id": "p-u10-l2-q18",
            "type": "matching",
            "prompt": "Match the news broadcast topic with its standard Pidgin phrasing:",
            "pairs": [
              {
                "left": "Health announcement",
                "right": "Doctor dem advise make people wash hand"
              },
              {
                "left": "Economic report",
                "right": "Inflation don make food cost pass before"
              },
              {
                "left": "Election update",
                "right": "INEC don release final list of candidates"
              },
              {
                "left": "Weather advisory",
                "right": "Heavy rain go fall for coastal areas"
              }
            ],
            "explanation": "Broadcast journalistic registers across domains."
          },
          {
            "id": "p-u10-l2-q19",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'For this website, we get Bible and you fit use-am for study.' What resources are available on the website?",
            "audioText": "For this website, we get Bible and you fit use-am for study.",
            "options": [
              "The Bible and study tools that you can use for personal learning",
              "Only audio music tracks for download",
              "A commercial store selling paper books",
              "No study tools are provided"
            ],
            "correctAnswer": "The Bible and study tools that you can use for personal learning",
            "explanation": "JW.org description: 'For this website, we de get Bible... and you fit use-am for study'."
          },
          {
            "id": "p-u10-l2-q20",
            "type": "audio_listen",
            "prompt": "Listen to the audio text: 'We de do everything wey we fit do to follow the example wey Jesus Christ give us.' What commitment is expressed?",
            "audioText": "We de do everything wey we fit do to follow the example wey Jesus Christ give us.",
            "options": [
              "Doing everything possible to follow the example that Jesus Christ provided",
              "Traveling to foreign countries every week",
              "Disregarding religious teachings in business",
              "Building statues in the town center"
            ],
            "correctAnswer": "Doing everything possible to follow the example that Jesus Christ provided",
            "explanation": "JW.org mission statement: 'We de do everything wey we fit do to follow the example wey Jesus Christ give us'."
          }
        ]
      }
    ]
  }
];
