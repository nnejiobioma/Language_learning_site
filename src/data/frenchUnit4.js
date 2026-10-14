// =========================================================================
// French Level A1 - Unit 4: Food & Shopping
// Lesson 1: Café Culture & Ordering (20 questions)
// Lesson 2: Groceries & Partitive Articles (20 questions)
// Lesson 3: Handling Currency & Paying (20 questions)
// =========================================================================

export const frenchUnit4 = {
  id: "fr-unit-4",
  cefrLevel: "A1",
  title: "Unit 4 (A1): Food & Shopping",
  subtitle: "Ordering food in a café, buying groceries, expressing quantities, and handling basic currency.",
  icon: "Utensils",
  color: "#ec4899",
  lessons: [
    {
      id: "fr-u4-l1",
      title: "Lesson 1: Café Culture & Ordering",
      description: "Experience Parisian café culture: order drinks, pastries, specify indoor or terrace seating, and request the bill politely.",
      xp: 20,
      questions: [
        {
          id: "fr-u4-l1-q1",
          type: "multiple_choice",
          prompt: "How do you politely order a coffee with milk and a croissant in a French café?",
          options: [
            "Un café au lait et un croissant, s'il vous plaît",
            "Je veux café et croissant immédiatement",
            "Donne-moi un café et un pain",
            "Prenez un café avec du pain"
          ],
          correctAnswer: "Un café au lait et un croissant, s'il vous plaît",
          explanation: "'Un café au lait et un croissant, s'il vous plaît' is polite, natural, and standard."
        },
        {
          id: "fr-u4-l1-q2",
          type: "matching",
          prompt: "Match French café beverages with their English translations:",
          pairs: [
            { native: "Un café noir / un expresso", english: "Black coffee / espresso" },
            { native: "Un café crème", english: "Coffee with steamed milk" },
            { native: "Un chocolat chaud", english: "Hot chocolate" },
            { native: "Une tisane / une infusion", english: "Herbal tea" }
          ]
        },
        {
          id: "fr-u4-l1-q3",
          type: "audio_listen",
          phrase: "L'addition, s'il vous plaît.",
          prompt: "Listen to the customer speaking to the server. What are they asking for?",
          options: ["The check / bill", "More sugar", "A glass of wine", "The dessert menu"],
          correctAnswer: "The check / bill",
          explanation: "'L'addition, s'il vous plaît' means 'The bill, please'."
        },
        {
          id: "fr-u4-l1-q4",
          type: "fill_blank",
          sentence: "Bonjour, je ___ un thé à la menthe, s'il vous plaît.",
          missingWord: "voudrais",
          options: ["voudrais", "suis", "fais", "vais"],
          correctAnswer: "voudrais",
          explanation: "'Je voudrais' (I would like) is the classic polite formula for ordering in French."
        },
        {
          id: "fr-u4-l1-q5",
          type: "scramble",
          prompt: "Assemble the polite request: 'Pour moi, un verre d'eau'",
          tokens: ["Pour", "moi,", "un", "verre", "d'eau"],
          correctTokens: ["Pour", "moi,", "un", "verre", "d'eau"],
          explanation: "'Pour moi, un verre d'eau' means 'For me, a glass of water'."
        },
        {
          id: "fr-u4-l1-q6",
          type: "multiple_choice",
          prompt: "If you want free tap water at a French café, what specific phrase do you use?",
          options: [
            "Une carafe d'eau, s'il vous plaît",
            "Une bouteille d'eau minérale",
            "Un verre de bière",
            "De l'eau gazeuse payante"
          ],
          correctAnswer: "Une carafe d'eau, s'il vous plaît",
          explanation: "In France, 'une carafe d'eau' is a pitcher of tap water provided free of charge by law with meals/orders."
        },
        {
          id: "fr-u4-l1-q7",
          type: "matching",
          prompt: "Match French café seating & service terms:",
          pairs: [
            { native: "En terrasse", english: "On the outdoor terrace / patio" },
            { native: "En salle", english: "Indoors / inside the dining room" },
            { native: "Au comptoir / au bar", english: "At the bar / counter (often cheaper)" },
            { native: "À emporter", english: "To go / takeaway" }
          ]
        },
        {
          id: "fr-u4-l1-q8",
          type: "audio_listen",
          phrase: "Deux personnes en terrasse, s'il vous plaît.",
          prompt: "Listen to the customer entering the restaurant. What seating do they request?",
          options: [
            "Table for two outside on the terrace",
            "Table for two indoors near the window",
            "Table for four in the back",
            "A seat at the bar"
          ],
          correctAnswer: "Table for two outside on the terrace",
          explanation: "'En terrasse' means on the outdoor terrace."
        },
        {
          id: "fr-u4-l1-q9",
          type: "multiple_choice",
          prompt: "What is 'un pain au chocolat' also called in Southwestern France?",
          options: ["Une chocolatine", "Un pain doré", "Un beignet", "Une baguette sucrée"],
          correctAnswer: "Une chocolatine",
          explanation: "In Southwestern France, a pain au chocolat is famously called 'une chocolatine'."
        },
        {
          id: "fr-u4-l1-q10",
          type: "fill_blank",
          sentence: "Est-ce que le service est ___ dans l'addition ?",
          missingWord: "compris",
          options: ["compris", "fermé", "chaud", "cher"],
          correctAnswer: "compris",
          explanation: "'Service compris' means the service tip is already included in the bill in France."
        },
        {
          id: "fr-u4-l1-q11",
          type: "matching",
          prompt: "Match popular breakfast bakery items in France:",
          pairs: [
            { native: "Le croissant au beurre", english: "Butter croissant" },
            { native: "Le pain aux raisins", english: "Raisin pastry / swirl" },
            { native: "La tartine", english: "Slice of baguette with butter and jam" },
            { native: "La brioche", english: "Sweet egg-and-butter enriched bread" }
          ]
        },
        {
          id: "fr-u4-l1-q12",
          type: "audio_listen",
          phrase: "Vous désirez autre chose ?",
          prompt: "Listen to the waiter's question. What are they asking you?",
          options: [
            "Would you like anything else?",
            "Are you ready to pay?",
            "Where do you come from?",
            "Do you like your food?"
          ],
          correctAnswer: "Would you like anything else?",
          explanation: "'Vous désirez autre chose ?' means 'Would you like anything else?'."
        },
        {
          id: "fr-u4-l1-q13",
          type: "scramble",
          prompt: "Assemble: 'Ce sera tout, merci beaucoup'",
          tokens: ["Ce", "sera", "tout,", "merci", "beaucoup"],
          correctTokens: ["Ce", "sera", "tout,", "merci", "beaucoup"],
          explanation: "'Ce sera tout, merci beaucoup' means 'That will be all, thank you very much'."
        },
        {
          id: "fr-u4-l1-q14",
          type: "multiple_choice",
          prompt: "How do you ask for still water versus sparkling water?",
          options: [
            "De l'eau plate vs de l'eau gazeuse / pétillante",
            "De l'eau douce vs de l'eau dure",
            "De l'eau blanche vs de l'eau noire",
            "De l'eau chaude vs de l'eau tiède"
          ],
          correctAnswer: "De l'eau plate vs de l'eau gazeuse / pétillante",
          explanation: "'Eau plate' is still (non-carbonated) water, while 'eau gazeuse' or 'pétillante' is sparkling."
        },
        {
          id: "fr-u4-l1-q15",
          type: "fill_blank",
          sentence: "Garçon ! Une ___ d'eau fraîche, s'il vous plaît.",
          missingWord: "carafe",
          options: ["carafe", "cuillère", "serviette", "fourchette"],
          correctAnswer: "carafe",
          explanation: "'Une carafe d'eau' is a jug or carafe of water."
        },
        {
          id: "fr-u4-l1-q16",
          type: "audio_listen",
          phrase: "Quel est le plat du jour aujourd'hui ?",
          prompt: "What does this restaurant inquiry ask?",
          options: [
            "What is today's daily special?",
            "What time does lunch end?",
            "Is the kitchen still open?",
            "Can I order a sandwich?"
          ],
          correctAnswer: "What is today's daily special?",
          explanation: "'Le plat du jour' is the dish of the day / daily special in French bistros."
        },
        {
          id: "fr-u4-l1-q17",
          type: "matching",
          prompt: "Match French restaurant courses with English equivalents:",
          pairs: [
            { native: "L'entrée", english: "Appetizer / starter" },
            { native: "Le plat principal", english: "Main course" },
            { native: "Le fromage", english: "Cheese course (before dessert)" },
            { native: "Le dessert", english: "Dessert" }
          ]
        },
        {
          id: "fr-u4-l1-q18",
          type: "multiple_choice",
          prompt: "How do French people say 'Enjoy your meal!' before eating?",
          options: ["Bon appétit !", "Bon voyage !", "Bonne nuit !", "Bonne chance !"],
          correctAnswer: "Bon appétit !",
          explanation: "'Bon appétit !' means 'Enjoy your meal!'."
        },
        {
          id: "fr-u4-l1-q19",
          type: "fill_blank",
          sentence: "Je prends le menu à midi : entrée, plat et ___.",
          missingWord: "dessert",
          options: ["dessert", "chapeau", "voiture", "crayon"],
          correctAnswer: "dessert",
          explanation: "A standard French set menu includes entrée, plat, and dessert."
        },
        {
          id: "fr-u4-l1-q20",
          type: "scramble",
          prompt: "Assemble: 'Une table pour deux personnes, s'il vous plaît'",
          tokens: ["Une", "table", "pour", "deux", "personnes,", "s'il", "vous", "plaît"],
          correctTokens: ["Une", "table", "pour", "deux", "personnes,", "s'il", "vous", "plaît"],
          explanation: "'Une table pour deux personnes, s'il vous plaît' = 'A table for two, please'."
        }
      ]
    },
    {
      id: "fr-u4-l2",
      title: "Lesson 2: Groceries & Partitive Articles",
      description: "Shop at the bakery, butcher, market, and supermarket using partitive articles (du, de la, de l', des) and expressions of quantity.",
      xp: 25,
      questions: [
        {
          id: "fr-u4-l2-q1",
          type: "multiple_choice",
          prompt: "Which partitive article is used before a masculine singular uncountable food like 'pain' (bread)?",
          options: ["Du", "De la", "Des", "De l'"],
          correctAnswer: "Du",
          explanation: "'Du' (de + le) is used with masculine singular nouns: 'du pain' (some bread), 'du fromage' (some cheese)."
        },
        {
          id: "fr-u4-l2-q2",
          type: "matching",
          prompt: "Match French partitive articles with correct food combinations:",
          pairs: [
            { native: "du fromage / du lait", english: "some cheese / milk (masculine singular)" },
            { native: "de la viande / de la confiture", english: "some meat / jam (feminine singular)" },
            { native: "de l'eau / de l'huile", english: "some water / oil (starts with vowel / silent h)" },
            { native: "des fruits / des légumes", english: "some fruits / vegetables (plural)" }
          ]
        },
        {
          id: "fr-u4-l2-q3",
          type: "audio_listen",
          phrase: "Je voudrais un kilo de tomates et deux baguettes, s'il vous plaît.",
          prompt: "Listen to the grocery shopper. What two items are they purchasing?",
          options: [
            "1 kilo of tomatoes and 2 baguettes",
            "2 kilos of potatoes and 1 baguette",
            "1 kilo of apples and 2 croissants",
            "3 cucumbers and a loaf of sourdough"
          ],
          correctAnswer: "1 kilo of tomatoes and 2 baguettes",
          explanation: "'Un kilo de tomates et deux baguettes' = '1 kilo of tomatoes and 2 baguettes'."
        },
        {
          id: "fr-u4-l2-q4",
          type: "multiple_choice",
          prompt: "In a negative sentence, what do partitive articles (du, de la, des) turn into?",
          options: [
            "de / d' (Je ne mange pas de viande)",
            "le / la (Je ne mange le viande)",
            "un / une (Je ne mange une viande)",
            "They remain unchanged"
          ],
          correctAnswer: "de / d' (Je ne mange pas de viande)",
          explanation: "In negative sentences, partitive articles become 'de' (or 'd'' before a vowel): 'Je ne mange pas de viande'."
        },
        {
          id: "fr-u4-l2-q5",
          type: "fill_blank",
          sentence: "Elle ne boit pas ___ café le soir.",
          missingWord: "de",
          options: ["de", "du", "le", "des"],
          correctAnswer: "de",
          explanation: "After negation 'ne ... pas', 'du café' becomes 'de café'."
        },
        {
          id: "fr-u4-l2-q6",
          type: "matching",
          prompt: "Match French food shops with what you buy there:",
          pairs: [
            { native: "La boulangerie", english: "Bakery (bread, baguettes, croissants)" },
            { native: "La boucherie", english: "Butcher shop (beef, chicken, meat)" },
            { native: "La poissonnerie", english: "Fishmonger (fish, seafood)" },
            { native: "L'épicerie / Le supermarché", english: "Grocery store / supermarket (general dry goods)" }
          ]
        },
        {
          id: "fr-u4-l2-q7",
          type: "audio_listen",
          phrase: "À la boulangerie, j'achète une baguette tradition bien cuite.",
          prompt: "Listen to the customer at the bakery. How do they like their baguette?",
          options: [
            "Bien cuite (well-baked / crusty)",
            "Pas trop cuite (soft / lightly baked)",
            "Gluten-free",
            "Pre-sliced into toast"
          ],
          correctAnswer: "Bien cuite (well-baked / crusty)",
          explanation: "'Bien cuite' means well-baked and crusty in French bakery lingo."
        },
        {
          id: "fr-u4-l2-q8",
          type: "scramble",
          prompt: "Assemble: 'Combien coûte un kilo de pommes ?'",
          tokens: ["Combien", "coûte", "un", "kilo", "de", "pommes", "?"],
          correctTokens: ["Combien", "coûte", "un", "kilo", "de", "pommes", "?"],
          explanation: "'Combien coûte un kilo de pommes ?' means 'How much does a kilo of apples cost?'."
        },
        {
          id: "fr-u4-l2-q9",
          type: "matching",
          prompt: "Match French quantity containers with English:",
          pairs: [
            { native: "Une bouteille de", english: "A bottle of (e.g. wine, water)" },
            { native: "Un paquet de", english: "A packet / box of (e.g. pasta, biscuits)" },
            { native: "Un morceau de", english: "A piece of (e.g. cheese)" },
            { native: "Une tranche de", english: "A slice of (e.g. ham)" }
          ]
        },
        {
          id: "fr-u4-l2-q10",
          type: "fill_blank",
          sentence: "Donnez-moi trois ___ de jambon blanc, s'il vous plaît.",
          missingWord: "tranches",
          options: ["tranches", "bouteilles", "litres", "verres"],
          correctAnswer: "tranches",
          explanation: "'Tranches' means slices (slices of ham)."
        },
        {
          id: "fr-u4-l2-q11",
          type: "multiple_choice",
          prompt: "Which expression means 'a lot of' and always takes 'de'?",
          options: ["Beaucoup de", "Un peu de", "Trop de", "All of the above"],
          correctAnswer: "All of the above",
          explanation: "Quantity adverbs like 'beaucoup de' (a lot of), 'un peu de' (a little), and 'trop de' (too much) all take invariable 'de'."
        },
        {
          id: "fr-u4-l2-q12",
          type: "audio_listen",
          phrase: "Il me faut un litre de lait et cinq cents grammes de fraises.",
          prompt: "Listen to the shopping list. What quantity of strawberries does the speaker need?",
          options: ["500 grams (cinq cents grammes)", "1 kilogram", "250 grams", "5 strawberries"],
          correctAnswer: "500 grams (cinq cents grammes)",
          explanation: "'Cinq cents grammes de fraises' = 500 grams of strawberries."
        },
        {
          id: "fr-u4-l2-q13",
          type: "scramble",
          prompt: "Assemble: 'Je mange du pain avec du beurre'",
          tokens: ["Je", "mange", "du", "pain", "avec", "du", "beurre"],
          correctTokens: ["Je", "mange", "du", "pain", "avec", "du", "beurre"],
          explanation: "'Je mange du pain avec du beurre' means 'I eat bread with butter'."
        },
        {
          id: "fr-u4-l2-q14",
          type: "fill_blank",
          sentence: "Au petit déjeuner, il boit ___ jus d'orange.",
          missingWord: "du",
          options: ["du", "de la", "des", "une"],
          correctAnswer: "du",
          explanation: "'Jus' is masculine singular, so 'du jus d'orange' (some orange juice) is required."
        },
        {
          id: "fr-u4-l2-q15",
          type: "matching",
          prompt: "Match French vegetables with English:",
          pairs: [
            { native: "La carotte", english: "Carrot" },
            { native: "La pomme de terre", english: "Potato (apple of the earth)" },
            { native: "L'oignon", english: "Onion" },
            { native: "La salade / La laitue", english: "Lettuce / salad" }
          ]
        },
        {
          id: "fr-u4-l2-q16",
          type: "multiple_choice",
          prompt: "How do you ask a merchant 'Is that everything?' in French?",
          options: ["Et avec ceci ?", "Où allez-vous ?", "C'est fini ?", "Quelle est l'heure ?"],
          correctAnswer: "Et avec ceci ?",
          explanation: "Shopkeepers in France famously ask 'Et avec ceci ?' meaning 'And with this? / Anything else?'."
        },
        {
          id: "fr-u4-l2-q17",
          type: "audio_listen",
          phrase: "Les fraises sont très fraîches et de saison.",
          prompt: "What does the market vendor say about the strawberries?",
          options: [
            "They are very fresh and in season",
            "They are on discount today",
            "They were imported from far away",
            "They are out of stock"
          ],
          correctAnswer: "They are very fresh and in season",
          explanation: "'Très fraîches et de saison' means very fresh and in season."
        },
        {
          id: "fr-u4-l2-q18",
          type: "fill_blank",
          sentence: "Il achète une douzaine ___ œufs au marché.",
          missingWord: "d'",
          options: ["d'", "des", "du", "de la"],
          correctAnswer: "d'",
          explanation: "'Une douzaine d'œufs' (a dozen eggs): before a vowel, 'de' elides to 'd''."
        },
        {
          id: "fr-u4-l2-q19",
          type: "matching",
          prompt: "Match French dairy and pantry items:",
          pairs: [
            { native: "Le beurre", english: "Butter" },
            { native: "Le yaourt", english: "Yogurt" },
            { native: "L'huile d'olive", english: "Olive oil" },
            { native: "Le sel et le poivre", english: "Salt and pepper" }
          ]
        },
        {
          id: "fr-u4-l2-q20",
          type: "scramble",
          prompt: "Assemble: 'Il n'y a plus de fromage dans le réfrigérateur'",
          tokens: ["Il", "n'y", "a", "plus", "de", "fromage", "dans", "le", "réfrigérateur"],
          correctTokens: ["Il", "n'y", "a", "plus", "de", "fromage", "dans", "le", "réfrigérateur"],
          explanation: "'Il n'y a plus de fromage dans le réfrigérateur' means 'There is no more cheese in the fridge'."
        }
      ]
    },
    {
      id: "fr-u4-l3",
      title: "Lesson 3: Handling Currency & Paying",
      description: "Ask prices, pay in euros and centimes, understand change, receipts, and choose payment methods.",
      xp: 20,
      questions: [
        {
          id: "fr-u4-l3-q1",
          type: "matching",
          prompt: "Match French payment terms with their English meanings:",
          pairs: [
            { native: "En espèces / en liquide", english: "In cash" },
            { native: "Par carte bancaire", english: "By debit / credit card" },
            { native: "Sans contact", english: "Contactless payment" },
            { native: "Par chèque", english: "By cheque" }
          ]
        },
        {
          id: "fr-u4-l3-q2",
          type: "audio_listen",
          phrase: "Ça fait quinze euros et cinquante centimes.",
          prompt: "Listen to the cashier. What is the total price?",
          options: ["€15.50", "€50.15", "€15.05", "€5.50"],
          correctAnswer: "€15.50",
          explanation: "'Quinze euros et cinquante centimes' = €15.50."
        },
        {
          id: "fr-u4-l3-q3",
          type: "multiple_choice",
          prompt: "How do you ask 'How much does this cost?' in French?",
          options: [
            "Combien ça coûte ?",
            "Quand ça coûte ?",
            "Où ça coûte ?",
            "Pourquoi ça coûte ?"
          ],
          correctAnswer: "Combien ça coûte ?",
          explanation: "'Combien ça coûte ?' is the direct and standard question for 'How much does this cost?'."
        },
        {
          id: "fr-u4-l3-q4",
          type: "fill_blank",
          sentence: "Est-ce que vous acceptez la ___ bancaire ?",
          missingWord: "carte",
          options: ["carte", "banque", "facture", "monnaie"],
          correctAnswer: "carte",
          explanation: "'La carte bancaire' (or 'CB') is the bank/credit card."
        },
        {
          id: "fr-u4-l3-q5",
          type: "scramble",
          prompt: "Assemble: 'Ça fait combien au total ?'",
          tokens: ["Ça", "fait", "combien", "au", "total", "?"],
          correctTokens: ["Ça", "fait", "combien", "au", "total", "?"],
          explanation: "'Ça fait combien au total ?' means 'How much does that come to in total?'."
        },
        {
          id: "fr-u4-l3-q6",
          type: "matching",
          prompt: "Match French transaction expressions with English:",
          pairs: [
            { native: "Voici votre monnaie", english: "Here is your change (coins/notes returned)" },
            { native: "Le ticket de caisse", english: "The receipt / register slip" },
            { native: "Avez-vous de la monnaie ?", english: "Do you have smaller coins/change?" },
            { native: "Vous avez l'appoint ?", english: "Do you have exact change?" }
          ]
        },
        {
          id: "fr-u4-l3-q7",
          type: "audio_listen",
          phrase: "Tapez votre code secret, s'il vous plaît.",
          prompt: "What is the cashier or card machine asking you to do?",
          options: [
            "Enter your PIN / secret code",
            "Show your identity card",
            "Sign the paper receipt",
            "Tap your card again"
          ],
          correctAnswer: "Enter your PIN / secret code",
          explanation: "'Tapez votre code secret' means 'Enter your PIN / secret code'."
        },
        {
          id: "fr-u4-l3-q8",
          type: "multiple_choice",
          prompt: "How is the currency amount '24,90 €' pronounced in French?",
          options: [
            "Vingt-quatre euros quatre-vingt-dix",
            "Vingt-quatre et neuf",
            "Quarante-deux euros neuf",
            "Vingt-quatre centimes quatre-vingt-dix"
          ],
          correctAnswer: "Vingt-quatre euros quatre-vingt-dix",
          explanation: "In French, €24.90 is read 'vingt-quatre euros quatre-vingt-dix'."
        },
        {
          id: "fr-u4-l3-q9",
          type: "fill_blank",
          sentence: "Voulez-vous un ___ pour vos courses ?",
          missingWord: "sac",
          options: ["sac", "lit", "verre", "train"],
          correctAnswer: "sac",
          explanation: "'Un sac' (bag) is asked at the checkout for carrying groceries."
        },
        {
          id: "fr-u4-l3-q10",
          type: "matching",
          prompt: "Match monetary denominations and parts:",
          pairs: [
            { native: "Un billet de dix euros", english: "A 10 euro banknote" },
            { native: "Une pièce de deux euros", english: "A 2 euro coin" },
            { native: "Cinquante centimes", english: "50 cents" },
            { native: "Le distributeur automatique (DAB)", english: "ATM / cash machine" }
          ]
        },
        {
          id: "fr-u4-l3-q11",
          type: "audio_listen",
          phrase: "Désolé, nous ne prenons pas la carte en dessous de dix euros.",
          prompt: "Listen to the store clerk. What is the store policy?",
          options: [
            "Card payments are not accepted below 10 euros",
            "Card payments are completely forbidden",
            "Cash is not accepted under 10 euros",
            "They only accept bank checks"
          ],
          correctAnswer: "Card payments are not accepted below 10 euros",
          explanation: "'En dessous de dix euros' means below 10 euros (minimum card limit)."
        },
        {
          id: "fr-u4-l3-q12",
          type: "scramble",
          prompt: "Assemble: 'Je peux payer par carte bancaire ?'",
          tokens: ["Je", "peux", "payer", "par", "carte", "bancaire", "?"],
          correctTokens: ["Je", "peux", "payer", "par", "carte", "bancaire", "?"],
          explanation: "'Je peux payer par carte bancaire ?' means 'Can I pay by credit/debit card?'."
        },
        {
          id: "fr-u4-l3-q13",
          type: "multiple_choice",
          prompt: "What does 'Garder la monnaie' mean when tipping in France?",
          options: [
            "Keep the change",
            "Return the coins",
            "Count the cash",
            "Exchange the banknotes"
          ],
          correctAnswer: "Keep the change",
          explanation: "'Gardez la monnaie' tells the taxi driver or waiter to keep the change as a tip."
        },
        {
          id: "fr-u4-l3-q14",
          type: "fill_blank",
          sentence: "Vous désirez votre ___ de caisse ?",
          missingWord: "ticket",
          options: ["ticket", "billet", "carte", "livre"],
          correctAnswer: "ticket",
          explanation: "'Ticket de caisse' is the till receipt."
        },
        {
          id: "fr-u4-l3-q15",
          type: "matching",
          prompt: "Match shopping bargain terms with English:",
          pairs: [
            { native: "En solde / Les soldes", english: "On sale / The official sales" },
            { native: "Une réduction / Une remise", english: "A discount" },
            { native: "C'est bon marché", english: "It is cheap / inexpensive" },
            { native: "C'est trop cher", english: "It is too expensive" }
          ]
        },
        {
          id: "fr-u4-l3-q16",
          type: "audio_listen",
          phrase: "Il y a une remise de vingt pour cent sur cet article.",
          prompt: "What discount applies according to the clerk?",
          options: ["20% discount", "50% discount", "10% discount", "Buy one get one free"],
          correctAnswer: "20% discount",
          explanation: "'Une remise de vingt pour cent' = a discount of 20%."
        },
        {
          id: "fr-u4-l3-q17",
          type: "multiple_choice",
          prompt: "Where can you withdraw cash in France?",
          options: [
            "Au distributeur automatique de billets (DAB)",
            "À la pharmacie",
            "À la bibliothèque municipale",
            "Au musée d'art"
          ],
          correctAnswer: "Au distributeur automatique de billets (DAB)",
          explanation: "'Le distributeur automatique de billets' (DAB) is an ATM."
        },
        {
          id: "fr-u4-l3-q18",
          type: "fill_blank",
          sentence: "Je vais payer en ___ (cash).",
          missingWord: "espèces",
          options: ["espèces", "papier", "lettres", "carte"],
          correctAnswer: "espèces",
          explanation: "'Payer en espèces' means to pay in cash."
        },
        {
          id: "fr-u4-l3-q19",
          type: "scramble",
          prompt: "Assemble: 'Voici un billet de vingt euros'",
          tokens: ["Voici", "un", "billet", "de", "vingt", "euros"],
          correctTokens: ["Voici", "un", "billet", "de", "vingt", "euros"],
          explanation: "'Voici un billet de vingt euros' means 'Here is a twenty euro note'."
        },
        {
          id: "fr-u4-l3-q20",
          type: "matching",
          prompt: "Match currency symbols and figures with French words:",
          pairs: [
            { native: "1,50 €", english: "Un euro cinquante" },
            { native: "100 €", english: "Cent euros" },
            { native: "0,20 €", english: "Vingt centimes" },
            { native: "10,00 €", english: "Dix euros pile" }
          ]
        }
      ]
    }
  ]
};
