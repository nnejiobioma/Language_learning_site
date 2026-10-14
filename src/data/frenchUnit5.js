// =========================================================================
// French Level A1 - Unit 5: Housing & Environment
// Lesson 1: Rooms of the House & Furniture (20 questions)
// Lesson 2: City Navigation & Asking for Directions (20 questions)
// =========================================================================

export const frenchUnit5 = {
  id: "fr-unit-5",
  cefrLevel: "A1",
  title: "Unit 5 (A1): Housing & Environment",
  subtitle: "Describing your home, rooms, furniture, and giving basic directions in a city.",
  icon: "Home",
  color: "#8b5cf6",
  lessons: [
    {
      id: "fr-u5-l1",
      title: "Lesson 1: Rooms of the House & Furniture",
      description: "Describe apartments and houses: identify rooms (salon, cuisine, chambre), furniture, household appliances, and spatial locations.",
      xp: 20,
      questions: [
        {
          id: "fr-u5-l1-q1",
          type: "matching",
          prompt: "Match French rooms with their English translations:",
          pairs: [
            { native: "Le salon / la salle de séjour", english: "Living room / sitting room" },
            { native: "La cuisine", english: "Kitchen" },
            { native: "La chambre à coucher", english: "Bedroom" },
            { native: "La salle de bains", english: "Bathroom" }
          ]
        },
        {
          id: "fr-u5-l1-q2",
          type: "matching",
          prompt: "Match French furniture items with English:",
          pairs: [
            { native: "Le canapé et les fauteuils", english: "Sofa and armchairs" },
            { native: "Le lit et la table de chevet", english: "Bed and bedside table" },
            { native: "L'armoire et la penderie", english: "Wardrobe and clothes closet" },
            { native: "La table et les chaises", english: "Table and chairs" }
          ]
        },
        {
          id: "fr-u5-l1-q3",
          type: "audio_listen",
          phrase: "Mon appartement a deux chambres lumineuses et un grand balcon.",
          prompt: "Listen to the description of the home. What features does it have?",
          options: [
            "Two bright bedrooms and a large balcony",
            "One small bedroom and a garden",
            "Three bedrooms and no balcony",
            "A studio with a dark kitchen"
          ],
          correctAnswer: "Two bright bedrooms and a large balcony",
          explanation: "'Deux chambres lumineuses et un grand balcon' = 'Two bright bedrooms and a large balcony'."
        },
        {
          id: "fr-u5-l1-q4",
          type: "fill_blank",
          sentence: "Nous préparons le dîner dans la ___.",
          missingWord: "cuisine",
          options: ["cuisine", "douche", "porte", "fenêtre"],
          correctAnswer: "cuisine",
          explanation: "'Dans la cuisine' means 'in the kitchen'."
        },
        {
          id: "fr-u5-l1-q5",
          type: "scramble",
          prompt: "Assemble: 'J'habite dans un bel appartement au troisième étage'",
          tokens: ["J'habite", "dans", "un", "bel", "appartement", "au", "troisième", "étage"],
          correctTokens: ["J'habite", "dans", "un", "bel", "appartement", "au", "troisième", "étage"],
          explanation: "'J'habite dans un bel appartement au troisième étage' = 'I live in a beautiful apartment on the third floor'."
        },
        {
          id: "fr-u5-l1-q6",
          type: "multiple_choice",
          prompt: "In French buildings, what is the ground floor (street level) called?",
          options: ["Le rez-de-chaussée", "Le premier étage", "Le sous-sol", "Le grenier"],
          correctAnswer: "Le rez-de-chaussée",
          explanation: "In France, ground level is 'le rez-de-chaussée' (RDC), and 'le premier étage' is the first floor above ground."
        },
        {
          id: "fr-u5-l1-q7",
          type: "matching",
          prompt: "Match French appliances with English terms:",
          pairs: [
            { native: "Le réfrigérateur / le frigo", english: "Refrigerator / fridge" },
            { native: "Le four et les plaques", english: "Oven and stove / hob" },
            { native: "Le lave-linge / la machine à laver", english: "Washing machine" },
            { native: "Le lave-vaisselle", english: "Dishwasher" }
          ]
        },
        {
          id: "fr-u5-l1-q8",
          type: "audio_listen",
          phrase: "Le chat dort sur le canapé dans le salon.",
          prompt: "Listen to the sentence. Where is the cat sleeping?",
          options: [
            "On the sofa in the living room",
            "Under the bed in the bedroom",
            "Behind the door in the hallway",
            "On the table in the kitchen"
          ],
          correctAnswer: "On the sofa in the living room",
          explanation: "'Sur le canapé dans le salon' means on the couch in the living room."
        },
        {
          id: "fr-u5-l1-q9",
          type: "multiple_choice",
          prompt: "Which spatial preposition means 'under' in French?",
          options: ["Sous", "Sur", "Dans", "Devant"],
          correctAnswer: "Sous",
          explanation: "'Sous' means under (e.g. 'sous la table' = under the table), whereas 'sur' means on/upon."
        },
        {
          id: "fr-u5-l1-q10",
          type: "fill_blank",
          sentence: "Mes livres sont rangés ___ l'étagère.",
          missingWord: "sur",
          options: ["sur", "entre", "sans", "vers"],
          correctAnswer: "sur",
          explanation: "'Sur l'étagère' means 'on the shelf'."
        },
        {
          id: "fr-u5-l1-q11",
          type: "matching",
          prompt: "Match French prepositions of place:",
          pairs: [
            { native: "Devant la maison", english: "In front of the house" },
            { native: "Derrière l'immeuble", english: "Behind the building" },
            { native: "À côté du lit", english: "Next to the bed" },
            { native: "Entre les deux fenêtres", english: "Between the two windows" }
          ]
        },
        {
          id: "fr-u5-l1-q12",
          type: "scramble",
          prompt: "Assemble: 'Il y a un grand miroir dans l'entrée'",
          tokens: ["Il", "y", "a", "un", "grand", "miroir", "dans", "l'entrée"],
          correctTokens: ["Il", "y", "a", "un", "grand", "miroir", "dans", "l'entrée"],
          explanation: "'Il y a un grand miroir dans l'entrée' means 'There is a large mirror in the entryway'."
        },
        {
          id: "fr-u5-l1-q13",
          type: "multiple_choice",
          prompt: "What does 'un logement meublé' mean in French real estate?",
          options: [
            "A furnished accommodation",
            "An empty/unfurnished house",
            "A house under construction",
            "A shared student dormitory"
          ],
          correctAnswer: "A furnished accommodation",
          explanation: "'Meublé' means furnished (fitted with furniture and essentials)."
        },
        {
          id: "fr-u5-l1-q14",
          type: "audio_listen",
          phrase: "Notre maison a un joli jardin avec des fleurs et un garage.",
          prompt: "What outdoor features does the house have?",
          options: [
            "A pretty garden with flowers and a garage",
            "A swimming pool and a tennis court",
            "A balcony facing the main street",
            "A courtyard without plants"
          ],
          correctAnswer: "A pretty garden with flowers and a garage",
          explanation: "'Un joli jardin avec des fleurs et un garage' = a pretty garden with flowers and a garage."
        },
        {
          id: "fr-u5-l1-q15",
          type: "fill_blank",
          sentence: "Il monte au quatrième étage avec l'___ (elevator).",
          missingWord: "ascenseur",
          options: ["ascenseur", "escalier", "armoire", "auto"],
          correctAnswer: "ascenseur",
          explanation: "'L'ascenseur' is the lift / elevator in French."
        },
        {
          id: "fr-u5-l1-q16",
          type: "matching",
          prompt: "Match parts of an apartment building with English:",
          pairs: [
            { native: "L'escalier", english: "The stairs / staircase" },
            { native: "Le couloir", english: "The hallway / corridor" },
            { native: "La cave", english: "The cellar / basement storage" },
            { native: "Le grenier / les combles", english: "The attic" }
          ]
        },
        {
          id: "fr-u5-l1-q17",
          type: "multiple_choice",
          prompt: "How do you say 'My room is quiet and sunny' in French?",
          options: [
            "Ma chambre est calme et ensoleillée",
            "Mon salon est bruyant et sombre",
            "Ma cuisine est petite et froide",
            "Mon lit est propre et doux"
          ],
          correctAnswer: "Ma chambre est calme et ensoleillée",
          explanation: "'Calme' = quiet; 'ensoleillée' = sunny (feminine agreeing with 'chambre')."
        },
        {
          id: "fr-u5-l1-q18",
          type: "audio_listen",
          phrase: "Combien coûte le loyer par mois ?",
          prompt: "Listen to the tenant's question. What are they inquiring about?",
          options: [
            "How much is the rent per month?",
            "How many rooms are in the apartment?",
            "When can I move into the flat?",
            "Are pets allowed in the building?"
          ],
          correctAnswer: "How much is the rent per month?",
          explanation: "'Le loyer' is the monthly rent."
        },
        {
          id: "fr-u5-l1-q19",
          type: "fill_blank",
          sentence: "Dans ma chambre, je travaille à mon ___ (desk).",
          missingWord: "bureau",
          options: ["bureau", "lit", "lavabo", "four"],
          correctAnswer: "bureau",
          explanation: "'Le bureau' is the study desk or office."
        },
        {
          id: "fr-u5-l1-q20",
          type: "scramble",
          prompt: "Assemble: 'La salle de bains est en face de la chambre'",
          tokens: ["La", "salle", "de", "bains", "est", "en", "face", "de", "la", "chambre"],
          correctTokens: ["La", "salle", "de", "bains", "est", "en", "face", "de", "la", "chambre"],
          explanation: "'La salle de bains est en face de la chambre' means 'The bathroom is opposite the bedroom'."
        }
      ]
    },
    {
      id: "fr-u5-l2",
      title: "Lesson 2: City Navigation & Asking for Directions",
      description: "Ask where landmarks are located, understand directions (tournez, tout droit, traversez), and navigate streets.",
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
          prompt: "How do you politely ask 'Excuse me, where is the train station?' in French?",
          options: [
            "Pardon, où est la gare, s'il vous plaît ?",
            "Où va le train maintenant ?",
            "Combien pour le train ?",
            "Est-ce que la gare est ouverte ?"
          ],
          correctAnswer: "Pardon, où est la gare, s'il vous plaît ?",
          explanation: "'Pardon, où est la gare, s'il vous plaît ?' is the polite standard way to ask for the railway station."
        },
        {
          id: "fr-u5-l2-q3",
          type: "audio_listen",
          phrase: "Prenez la première rue à droite, puis allez tout droit.",
          prompt: "Listen to the directions given. What should you do first?",
          options: [
            "Take the first street on the right",
            "Take the second street on the left",
            "Cross the street at the red light",
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
        },
        {
          id: "fr-u5-l2-q5",
          type: "matching",
          prompt: "Match city landmarks with their English translations:",
          pairs: [
            { native: "La mairie / L'hôtel de ville", english: "City hall / town hall" },
            { native: "Le bureau de poste", english: "Post office" },
            { native: "L'hôpital", english: "Hospital" },
            { native: "La station de métro", english: "Metro / subway station" }
          ]
        },
        {
          id: "fr-u5-l2-q6",
          type: "multiple_choice",
          prompt: "What does the verb 'Traverser' mean when following directions?",
          options: ["To cross (e.g. cross the street / bridge)", "To stop", "To enter", "To look for"],
          correctAnswer: "To cross (e.g. cross the street / bridge)",
          explanation: "'Traverser' means to cross: 'Traversez le boulevard' = Cross the boulevard."
        },
        {
          id: "fr-u5-l2-q7",
          type: "fill_blank",
          sentence: "Continuez jusqu'au feu ___ (traffic light).",
          missingWord: "rouge",
          options: ["rouge", "vert", "bleu", "noir"],
          correctAnswer: "rouge",
          explanation: "In France, traffic lights are commonly called 'les feux rouges'."
        },
        {
          id: "fr-u5-l2-q8",
          type: "audio_listen",
          phrase: "La pharmacie est au coin de la rue, à côté de la boulangerie.",
          prompt: "Where is the pharmacy located according to the speaker?",
          options: [
            "At the corner of the street, next to the bakery",
            "Inside the train station",
            "Far outside the city center",
            "Across the river on the left"
          ],
          correctAnswer: "At the corner of the street, next to the bakery",
          explanation: "'Au coin de la rue, à côté de la boulangerie' = At the corner of the street, next to the bakery."
        },
        {
          id: "fr-u5-l2-q9",
          type: "matching",
          prompt: "Match French road and transit words:",
          pairs: [
            { native: "Le carrefour / le rond-point", english: "Crossroads / roundabout" },
            { native: "Le pont", english: "Bridge" },
            { native: "Le trottoir", english: "Sidewalk / pavement" },
            { native: "Le passage piéton", english: "Pedestrian crossing / zebra crossing" }
          ]
        },
        {
          id: "fr-u5-l2-q10",
          type: "scramble",
          prompt: "Assemble: 'Est-ce que c'est loin d'ici ?'",
          tokens: ["Est-ce", "que", "c'est", "loin", "d'ici", "?"],
          correctTokens: ["Est-ce", "que", "c'est", "loin", "d'ici", "?"],
          explanation: "'Est-ce que c'est loin d'ici ?' means 'Is it far from here?'."
        },
        {
          id: "fr-u5-l2-q11",
          type: "multiple_choice",
          prompt: "How do you say 'It is very close, five minutes on foot'?",
          options: [
            "C'est tout près, à cinq minutes à pied",
            "C'est très loin, à trois heures de vol",
            "C'est fermé pour le week-end",
            "C'est derrière la montagne"
          ],
          correctAnswer: "C'est tout près, à cinq minutes à pied",
          explanation: "'Tout près' = very close; 'à pied' = on foot."
        },
        {
          id: "fr-u5-l2-q12",
          type: "fill_blank",
          sentence: "Pour aller au musée, prenez la deuxième rue à ___ (left).",
          missingWord: "gauche",
          options: ["gauche", "droite", "demie", "loin"],
          correctAnswer: "gauche",
          explanation: "'À gauche' means on/to the left."
        },
        {
          id: "fr-u5-l2-q13",
          type: "audio_listen",
          phrase: "Vous devez descendre à la troisième station de métro.",
          prompt: "What does this metro instruction instruct you to do?",
          options: [
            "Get off at the third subway station",
            "Change trains at the central station",
            "Buy three metro tickets",
            "Stay on the train until the terminus"
          ],
          correctAnswer: "Get off at the third subway station",
          explanation: "'Descendre à la troisième station' means get off at the 3rd station."
        },
        {
          id: "fr-u5-l2-q14",
          type: "matching",
          prompt: "Match French prepositions indicating distance & location:",
          pairs: [
            { native: "Près de", english: "Near / close to" },
            { native: "Loin de", english: "Far from" },
            { native: "Au bout de la rue", english: "At the end of the street" },
            { native: "En face de", english: "Facing / opposite" }
          ]
        },
        {
          id: "fr-u5-l2-q15",
          type: "multiple_choice",
          prompt: "What is 'l'arrêt de bus'?",
          options: ["The bus stop", "The train platform", "The bicycle rental rack", "The taxi rank"],
          correctAnswer: "The bus stop",
          explanation: "'L'arrêt de bus' is the bus stop."
        },
        {
          id: "fr-u5-l2-q16",
          type: "fill_blank",
          sentence: "Pour aller à la cathédrale, ___ le pont au-dessus du fleuve.",
          missingWord: "traversez",
          options: ["traversez", "mangez", "écoutez", "dormez"],
          correctAnswer: "traversez",
          explanation: "'Traversez le pont' means 'Cross the bridge'."
        },
        {
          id: "fr-u5-l2-q17",
          type: "audio_listen",
          phrase: "Au rond-point, prenez la deuxième sortie vers le centre-ville.",
          prompt: "Listen to the navigation prompt. What action should the driver take?",
          options: [
            "At the roundabout, take the second exit towards downtown",
            "At the crossroads, turn left immediately",
            "Park near the roundabout",
            "Make a U-turn at the traffic light"
          ],
          correctAnswer: "At the roundabout, take the second exit towards downtown",
          explanation: "'Au rond-point, prenez la deuxième sortie' = At the roundabout, take the second exit."
        },
        {
          id: "fr-u5-l2-q18",
          type: "scramble",
          prompt: "Assemble: 'L'hôtel de ville se trouve au bout de l'avenue'",
          tokens: ["L'hôtel", "de", "ville", "se", "trouve", "au", "bout", "de", "l'avenue"],
          correctTokens: ["L'hôtel", "de", "ville", "se", "trouve", "au", "bout", "de", "l'avenue"],
          explanation: "'L'hôtel de ville se trouve au bout de l'avenue' = 'The city hall is at the end of the avenue'."
        },
        {
          id: "fr-u5-l2-q19",
          type: "matching",
          prompt: "Match French city public transport vocabulary:",
          pairs: [
            { native: "Le ticket de métro", english: "Subway / transit ticket" },
            { native: "La correspondance", english: "Transfer / connection (between lines)" },
            { native: "Le quai", english: "Train / metro platform" },
            { native: "La voie", english: "Track (e.g. Voie A / Track 1)" }
          ]
        },
        {
          id: "fr-u5-l2-q20",
          type: "multiple_choice",
          prompt: "How do you say 'You cannot miss it!' when giving directions in French?",
          options: [
            "Vous ne pouvez pas le rater !",
            "Vous devez partir !",
            "Ne marchez pas là !",
            "C'est impossible à voir !"
          ],
          correctAnswer: "Vous ne pouvez pas le rater !",
          explanation: "'Vous ne pouvez pas le rater !' (or 'Vous ne pouvez pas le manquer !') means 'You can't miss it!'."
        }
      ]
    }
  ]
};
