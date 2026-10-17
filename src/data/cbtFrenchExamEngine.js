// CBT & CRT Dynamic French Examination Engine
// Grounded in official French language proficiency standards aligned with the CEFR (A1–C2):
// - DELF (Diplôme d'Études en Langue Française): A1, A2, B1, B2 (France Éducation International / Ministère de l'Éducation Nationale)
// - DALF (Diplôme Approfondi de Langue Française): C1, C2 (Academic & research mastery)
// - TCF (Test de Connaissance du Français): Standardized placement & evaluation (TCF Tout Public, TCF IRN pour naturalisation)
// - TEF (Test d'Évaluation de Français): CCI Paris Île-de-France (Immigration, Canada, Québec, profession)
// - DCL (Diplôme de Compétence en Langue): National vocational diploma for adult workplace skills
import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

// ============================================================================
// 1. POOL DELF A1–A2: UTILISATEUR ÉLÉMENTAIRE (SURVIVAL & EVERYDAY FRENCH)
// ============================================================================
export const frenchA1A2Reading = [
  {
    id: "fr-a1a2-r-1",
    subtest: "reading",
    title: "Annonce SNCF : Travaux en gare de Lyon et perturbations",
    passage: `SNCF VOYAGEURS — AVIS AUX USAGERS
En raison de travaux de modernisation des voies, le départ des trains en direction de Lyon et Marseille s'effectuera depuis le hall 2 du vendredi 18 octobre à 22h au dimanche 20 octobre à 16h.
Les voyageurs munis d'un billet sont priés de se présenter sur le quai 20 minutes avant le départ. Des agents d'accueil vêtus de gilets rouges sont présents dans le hall principal pour vous guider.
Le service d'assistance aux personnes à mobilité réduite reste accessible par le hall 1.`,
    prompt: "Où les voyageurs doivent-ils se rendre pour prendre leur train pendant le week-end des travaux ?",
    options: [
      "A) Dans le hall 1 uniquement",
      "B) Au guichet des réclamations",
      "C) Au hall 2 vingt minutes avant le départ",
      "D) À la gare Montparnasse"
    ],
    correctAnswer: "C) Au hall 2 vingt minutes avant le départ",
    explanation: "Le texte précise que 'le départ des trains... s'effectuera depuis le hall 2' et que les voyageurs doivent se présenter '20 minutes avant le départ'."
  },
  {
    id: "fr-a1a2-r-2",
    subtest: "reading",
    title: "Message de la Mairie : Inscriptions aux activités sportives",
    passage: `MAIRIE DU 11e ARRONDISSEMENT — SERVICE DES SPORTS
Les inscriptions pour les cours municipaux de natation et de tennis pour les enfants de 6 à 12 ans débuteront le lundi 2 septembre à 08h30 sur le portail internet de la ville.
Pièces justificatives à fournir :
- Un justificatif de domicile de moins de trois mois
- Une attestation d'assurance responsabilité civile
- Un certificat médical d'aptitude à la pratique sportive.
Tout dossier incomplet sera automatiquement refusé. Le paiement s'effectue en ligne par carte bancaire.`,
    prompt: "Quel document est indispensable pour inscrire un enfant aux activités sportives ?",
    options: [
      "A) Le livret de famille original uniquement",
      "B) Un certificat médical d'aptitude sportive et un justificatif de domicile",
      "C) Une autorisation de l'école primaire",
      "D) Un passeport en cours de validité"
    ],
    correctAnswer: "B) Un certificat médical d'aptitude sportive et un justificatif de domicile",
    explanation: "La liste des pièces justificatives mentionne explicitement le justificatif de domicile, l'assurance et le certificat médical."
  },
  {
    id: "fr-a1a2-r-3",
    subtest: "reading",
    title: "Courriel informel : Invitation à un anniversaire surprise",
    passage: `Salut Julien !
Avec Sophie et Marc, on organise une fête surprise pour les 30 ans de Thomas le samedi 14 juin chez ses parents à la campagne.
Chacun apporte quelque chose : Marc s'occupe des boissons et de la musique, et moi je prépare un grand buffet froid. Est-ce que tu pourrais apporter un gâteau ou un dessert pour 10 personnes ?
Merci de confirmer ta présence avant le 5 juin pour qu'on puisse s'organiser. N'en parle surtout pas à Thomas !
Bises, Claire.`,
    prompt: "Que demande Claire à Julien d'apporter pour la fête ?",
    options: [
      "A) Des boissons fraîches et des jus de fruits",
      "B) Une enceinte bluetooth pour la musique",
      "C) Un gâteau ou un dessert pour dix personnes",
      "D) De la viande pour le barbecue"
    ],
    correctAnswer: "C) Un gâteau ou un dessert pour dix personnes",
    explanation: "Claire écrit directement : 'Est-ce que tu pourrais apporter un gâteau ou un dessert pour 10 personnes ?'"
  },
  {
    id: "fr-a1a2-r-4",
    subtest: "reading",
    title: "Affiche de copropriété : Fermeture temporaire de l'eau",
    passage: `RÉSIDENCE LES ÉRABLES — COUPURE D'EAU CHAUDE
Chers résidents,
Pour permettre le remplacement de la chaudière collective, l'eau chaude sanitaire sera coupée dans l'ensemble des bâtiments A et B le mardi 12 novembre de 09h00 à 17h00.
L'eau froide continuera de fonctionner normalement. Nous vous recommandons de veiller à ce que tous vos robinets soient bien fermés pour éviter tout débordement lors de la remise en eau.
Le syndic de copropriété vous remercie de votre compréhension.`,
    prompt: "Quel service sera interrompu le mardi 12 novembre ?",
    options: [
      "A) L'électricité générale et les ascenseurs",
      "B) L'eau chaude sanitaire de 09h00 à 17h00",
      "C) La distribution de courrier postal",
      "D) Le chauffage pendant tout le mois"
    ],
    correctAnswer: "B) L'eau chaude sanitaire de 09h00 à 17h00",
    explanation: "Le communiqué indique : 'l'eau chaude sanitaire sera coupée dans l'ensemble des bâtiments A et B le mardi 12 novembre de 09h00 à 17h00'."
  },
  {
    id: "fr-a1a2-r-5",
    subtest: "reading",
    title: "Menu du jour et horaires du bistrot « Le Petit Paris »",
    passage: `BISTROT LE PETIT PARIS — FORMULES DU MIDI (du lundi au vendredi)
- Formule Express (14,50 €) : Plat du jour + Café gourmand
- Formule Complète (18,90 €) : Entrée + Plat du jour OU Plat du jour + Dessert
- Menu Gourmet (23,00 €) : Entrée + Plat + Dessert + Verre de vin
Le plat du jour change quotidiennement selon l'arrivage du marché. Service de 12h00 à 14h30. Réservation recommandée au 01 42 68 00 12 pour les groupes de plus de 4 personnes.`,
    prompt: "Combien coûte la formule comprenant un plat du jour et un café gourmand ?",
    options: [
      "A) 12,00 €",
      "B) 14,50 €",
      "C) 18,90 €",
      "D) 23,00 €"
    ],
    correctAnswer: "B) 14,50 €",
    explanation: "La Formule Express est affichée à 14,50 € et comprend le plat du jour et le café gourmand."
  },
  {
    id: "fr-a1a2-r-6",
    subtest: "reading",
    title: "Offre d'emploi : Vendeur / Vendeuse en boulangerie artisanale",
    passage: `BOULANGERIE DU CHÂTEAU — RECRUTEMENT
Nous recherchons un(e) vendeur/vendeuse souriant(e) et dynamique à temps partiel (24h/semaine).
Missions : accueil de la clientèle, vente de pains traditionnels et pâtisseries, encaissement, réassort des rayons et entretien de l'espace de vente.
Profil : première expérience en commerce appréciée, ponctualité exemplaire et excellent relationnel. Travail le week-end par roulement.
Envoyez votre CV à contact@boulangerieduchateau.fr ou présentez-vous directement à la boutique.`,
    prompt: "Quelle est la durée hebdomadaire de travail proposée pour ce poste ?",
    options: [
      "A) 35 heures à temps plein",
      "B) 24 heures à temps partiel",
      "C) Seulement le dimanche matin",
      "D) 10 heures par mois"
    ],
    correctAnswer: "B) 24 heures à temps partiel",
    explanation: "L'annonce stipule un contrat 'à temps partiel (24h/semaine)'."
  }
];

export const frenchA1A2Writing = [
  {
    id: "fr-a1a2-w-1",
    subtest: "writing",
    taskType: "message",
    title: "Message amical : Carte postale de vacances ou courriel de nouvelles",
    prompt: "Vous êtes en vacances dans une région francophone (en Bretagne, dans les Alpes ou sur la Côte d'Azur). Vous écrivez une carte postale ou un courriel à un ami français pour lui donner de vos nouvelles.\n\nDans votre texte (60–80 mots) :\n- Décrivez le lieu où vous logez et la météo qu'il fait\n- Racontez deux activités que vous avez faites hier\n- Donnez la date de votre retour et proposez de vous voir.",
    minWords: 60,
    modelResponse: "Salut Antoine,\n\nJe t'écris depuis Nice où je passe une semaine merveilleuse ! L'hôtel donne directement sur la mer et le soleil brille tous les jours.\n\nHier, j'ai visité le musée Matisse le matin, puis j'ai fait une longue promenade sur la Promenade des Anglais avant de goûter une socca délicieuse au marché.\n\nJe rentre à Paris dimanche prochain. Es-tu libre mardi soir pour boire un café et voir mes photos ?\n\nÀ très vite,\nLucas"
  },
  {
    id: "fr-a1a2-w-2",
    subtest: "writing",
    taskType: "message",
    title: "Courriel formel court : Demande de réservation d'un gîte rural",
    prompt: "Vous souhaitez réserver un hébergement pour 4 personnes pour un week-end en Normandie. Vous écrivez au propriétaire du gîte.\n\nDans votre courriel (60–80 mots) :\n- Précisez les dates d'arrivée et de départ\n- Indiquez le nombre de personnes (2 adultes et 2 enfants) et vos besoins (chambre familiale, lit bébé)\n- Demandez le tarif total et les modalités de paiement.",
    minWords: 60,
    modelResponse: "Bonjour Madame, Monsieur,\n\nJe vous contacte pour réserver votre gîte pour le week-end du 15 au 17 mai prochain.\n\nNous serons quatre personnes : deux adultes et deux enfants en bas âge. Pourriez-vous nous confirmer la disponibilité d'une chambre familiale avec un lit bébé ?\n\nPourriez-vous également m'indiquer le tarif global pour ces deux nuitées ainsi que les modalités de règlement (acompte, virement bancaire) ?\n\nEn vous remerciant d'avance,\nCordialement,\nMarc Dupont\nTél. 06 12 34 56 78"
  },
  {
    id: "fr-a1a2-w-3",
    subtest: "writing",
    taskType: "essay",
    title: "Court texte personnel : Décrivez votre routine quotidienne et vos loisirs",
    prompt: "Pour le journal de votre école de langue ou un forum international, vous écrivez un texte pour vous présenter et décrire votre journée habituelle.\n\nDans votre texte (80–100 mots) :\n- Présentez-vous brièvement (âge, ville, profession ou études)\n- Décrivez vos activités du matin au soir (horaires, transports, repas)\n- Expliquez ce que vous aimez faire pendant votre temps libre le week-end.",
    minWords: 80,
    modelResponse: "Bonjour à tous ! Je m'appelle Sarah, j'ai 28 ans et je travaille comme graphiste à Lyon. En semaine, ma journée commence tôt : je me lève à 07h00, je prends un bon café avec des tartines, puis je prends le métro pour aller au bureau. Je travaille de 09h00 à 17h30 avec mes collègues. Le soir, je cuisine souvent des plats sains ou je vais à la salle de sport. Le week-end, j'adore me promener dans le parc de la Tête d'Or, visiter des galeries d'art et retrouver mes amis au restaurant."
  }
];

export const frenchA1A2Listening = [
  {
    id: "fr-a1a2-l-1",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Mesdames et messieurs, votre attention s'il vous plaît. Le train TER numéro 85412 à destination de Strasbourg, départ prévu à 14 heures 25, partira exceptionnellement voie D. Veuillez emprunter le passage souterrain.",
    prompt: "Où les passagers pour Strasbourg doivent-ils se rendre pour prendre leur train ?",
    options: [
      "A) Voie A",
      "B) Voie D en passant par le passage souterrain",
      "C) Au guichet de vente",
      "D) À l'arrêt de bus extérieur"
    ],
    correctAnswer: "B) Voie D en passant par le passage souterrain",
    explanation: "L'annonce indique : 'partira exceptionnellement voie D. Veuillez emprunter le passage souterrain'."
  },
  {
    id: "fr-a1a2-l-2",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Bonjour Julien, c'est Marie. Je t'appelle parce que j'ai un petit contretemps au travail. Je ne pourrai pas arriver au cinéma avant 19 heures 45. Peux-tu acheter ma place pour le film de 20 heures ? Je te rembourserai en arrivant. À tout à l'heure !",
    prompt: "Pourquoi Marie appelle-t-elle Julien ?",
    options: [
      "A) Pour annuler définitivement la sortie au cinéma",
      "B) Pour lui demander d'acheter son billet car elle aura du retard",
      "C) Pour l'inviter à dîner au restaurant à 19 heures",
      "D) Pour lui donner les clés de son appartement"
    ],
    correctAnswer: "B) Pour lui demander d'acheter son billet car elle aura du retard",
    explanation: "Marie dit qu'elle arrivera vers 19h45 et demande : 'Peux-tu acheter ma place pour le film de 20 heures ? Je te rembourserai'."
  },
  {
    id: "fr-a1a2-l-3",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Bonjour madame. Pour la baguette tradition et les deux croissants au beurre, cela vous fera 3 euros et 80 centimes s'il vous plaît. Vous réglez par carte ou en espèces ?",
    prompt: "Combien la cliente doit-elle payer à la boulangerie ?",
    options: [
      "A) 2 euros et 50 centimes",
      "B) 3 euros et 80 centimes",
      "C) 4 euros et 20 centimes",
      "D) 5 euros tout rond"
    ],
    correctAnswer: "B) 3 euros et 80 centimes",
    explanation: "Le commerçant annonce clairement : 'cela vous fera 3 euros et 80 centimes'."
  },
  {
    id: "fr-a1a2-l-4",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Météo France pour la région parisienne : après dissipation des brouillards matinaux, un temps ensoleillé et doux s'installera cet après-midi avec des températures maximales atteignant 21 degrés. Un léger vent soufflera sur le nord.",
    prompt: "Quel temps est prévu pour l'après-midi selon le bulletin météo ?",
    options: [
      "A) De fortes averses orageuses",
      "B) Des chutes de neige abondantes",
      "C) Un temps ensoleillé et doux avec 21 degrés",
      "D) Une baisse brutale des températures sous zéro"
    ],
    correctAnswer: "C) Un temps ensoleillé et doux avec 21 degrés",
    explanation: "Le bulletin annonce : 'un temps ensoleillé et doux... températures maximales atteignant 21 degrés'."
  },
  {
    id: "fr-a1a2-l-5",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Pharmacie de garde, bonjour. Notre officine est ouverte du lundi au samedi de 08 heures 30 à 19 heures 30 sans interruption. Pour toute urgence médicale en dehors de ces horaires, veuillez composer le 15 pour joindre le SAMU.",
    prompt: "Quel numéro les usagers doivent-ils composer en cas d'urgence en dehors des heures d'ouverture ?",
    options: [
      "A) Le 112",
      "B) Le 15 (SAMU)",
      "C) Le 18 (Pompiers)",
      "D) Le 17 (Police)"
    ],
    correctAnswer: "B) Le 15 (SAMU)",
    explanation: "Le répondeur précise : 'veuillez composer le 15 pour joindre le SAMU'."
  },
  {
    id: "fr-a1a2-l-6",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Bonjour, cabinet du docteur Bernard. Je vous rappelle pour confirmer votre rendez-vous de consultation prévu le jeudi 24 octobre à 10 heures 15. N'oubliez pas d'apporter votre carte Vitale et votre carnet de santé.",
    prompt: "Quels documents le patient doit-il apporter lors de sa consultation médicale ?",
    options: [
      "A) Son passeport et une photo d'identité",
      "B) Sa carte Vitale et son carnet de santé",
      "C) Son contrat de travail uniquement",
      "D) Un justificatif de domicile"
    ],
    correctAnswer: "B) Sa carte Vitale et son carnet de santé",
    explanation: "Le message rappelle : 'N'oubliez pas d'apporter votre carte Vitale et votre carnet de santé'."
  }
];

export const frenchA1A2Speaking = [
  {
    id: "fr-a1a2-s-1",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Entretien dirigé : Présentation personnelle",
    audioPrompt: "Bonjour ! Bienvenue à votre épreuve de production orale. Pourriez-vous vous présenter, me dire d'où vous venez, ce que vous faites dans la vie et pourquoi vous apprenez le français ?",
    prepSeconds: 10,
    speakSeconds: 40,
    prompt: "Répondez à l'examinateur. Présentez votre nom, votre nationalité, votre métier ou vos études, et expliquez les raisons pour lesquelles vous apprenez le français.",
    modelAnswer: "Bonjour ! Je m'appelle David, j'ai 26 ans et je viens de Madrid en Espagne. Je vis à Paris depuis six mois et je travaille dans le secteur du marketing digital. J'apprends le français pour pouvoir communiquer facilement dans mon travail, pour m'intégrer dans la vie quotidienne et pour découvrir la culture et la gastronomie françaises."
  },
  {
    id: "fr-a1a2-s-2",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Jeu de rôle au marché : Commander des fruits et légumes",
    audioPrompt: "Bonjour monsieur, que puis-je vous servir aujourd'hui sur notre étal ? Nous avons de très belles pommes de Normandie et des fraises gariguettes très sucrées !",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Commandez 1 kilo de pommes et une barquette de fraises, demandez le prix total et payez avec un billet de 10 euros.",
    modelAnswer: "Bonjour ! Je voudrais s'il vous plaît un kilo de pommes de Normandie et une barquette de fraises gariguettes. Combien cela coûte-t-il au total ? Parfait, tenez, voici un billet de dix euros. Merci beaucoup et bonne journée !"
  },
  {
    id: "fr-a1a2-s-3",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Renseignements à l'office de tourisme",
    audioPrompt: "Bonjour madame, bienvenue à l'Office de tourisme de Bordeaux. Comment puis-je vous aider dans votre visite ?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Demandez un plan de la ville, des conseils pour visiter le centre historique en une journée, et le tarif d'une croisière sur la Garonne.",
    modelAnswer: "Bonjour ! Auriez-vous un plan de la ville s'il vous plaît ? Nous aimerions visiter les principaux monuments historiques aujourd'hui à pied. Que nous conseillez-vous en priorité ? Et pourriez-vous aussi me donner les horaires et le tarif pour la promenade en bateau sur la Garonne ?"
  },
  {
    id: "fr-a1a2-s-4",
    subtest: "speaking",
    taskType: "monologue",
    title: "Monologue suivi : Décrire son lieu de vie idéal",
    audioPrompt: "Parlez-moi de votre logement actuel ou de votre maison idéale. Préférez-vous vivre en plein centre-ville ou à la campagne ? Expliquez pourquoi.",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Exprimez-vous pendant 1 minute sur votre cadre de vie préféré (appartement ou maison, pièces, quartier, avantages et inconvénients).",
    modelAnswer: "Mon logement idéal est un appartement lumineux situé dans un quartier vivant du centre-ville, près des transports en commun et des commerces de proximité. J'aime pouvoir me déplacer à pied ou à vélo. J'aimerais avoir un grand salon avec un balcon pour cultiver des plantes, une cuisine ouverte conviviale et deux chambres calmes. Vivre en ville me permet de sortir facilement au cinéma, au théâtre et au restaurant avec mes amis sans dépendre de la voiture."
  }
];


// ============================================================================
// 2. POOL DELF B1–B2: UTILISATEUR INDÉPENDANT (NATURALISATION & ÉTUDES SUPÉRIEURES)
// ============================================================================
export const frenchB1B2Reading = [
  {
    id: "fr-b1b2-r-1",
    subtest: "reading",
    title: "Article de presse : Le développement du télétravail et l'équilibre de vie",
    passage: `SOCIÉTÉ — L'ÈRE DU TRAVAIL HYBRIDE EN FRANCE
Depuis la crise sanitaire, le travail hybride s'est durablement ancré dans les entreprises françaises. Selon une étude récente de la DARES, près d'un tiers des salariés du secteur privé exercent désormais en télétravail au moins un jour par semaine.
Pour les employés, les bénéfices sont manifestes : réduction substantielle du temps de trajet en transports en commun, baisse du stress et meilleure conciliation entre vie professionnelle et obligations familiales. Cependant, plusieurs sociologues du travail soulignent les dérives potentielles de cette pratique : risque d'effacement de la frontière entre sphère privée et professionnelle, affaiblissement de la cohésion d'équipe et sentiment d'isolement chez les plus jeunes recrues.
Face à ce constat, les partenaires sociaux négocient des chartes d'entreprise encadrant strictement le droit à la déconnexion et limitant généralement le télétravail à deux ou trois jours hebdomadaires pour maintenir un ancrage collectif.`,
    prompt: "D'après l'article, quel est l'un des risques majeurs associés au télétravail non encadré ?",
    options: [
      "A) Une augmentation irrémédiable du coût des transports pour l'employeur",
      "B) L'effacement de la frontière entre vie privée et professionnelle ainsi que l'isolement social",
      "C) L'interdiction légale du travail en équipe dans le secteur privé",
      "D) L'obligation de travailler exclusivement le week-end"
    ],
    correctAnswer: "B) L'effacement de la frontière entre vie privée et professionnelle ainsi que l'isolement social",
    explanation: "Le texte évoque expressément : 'risque d'effacement de la frontière entre sphère privée et professionnelle... et sentiment d'isolement chez les plus jeunes recrues'."
  },
  {
    id: "fr-b1b2-r-2",
    subtest: "reading",
    title: "Réglementation citoyenne : Les règles du tri sélectif et de la tarification incitative",
    passage: `COMMUNAUTÉ D'AGGLOMÉRATION — GESTION DES DÉCHETS MÉNAGERS
Dans le cadre de la transition écologique et des directives nationales sur l'économie circulaire, notre collectivité adopte à compter du 1er janvier la tarification incitative pour la collecte des ordures résiduelles (bacs noirs).
Désormais, la part variable de la taxe d'enlèvement des ordures ménagères sera calculée en fonction du nombre de fois où le bac noir est présenté à la collecte ou de son poids effectif. En revanche, le ramassage des bacs jaunes (emballages en plastique, cartons, conserves) et des bacs verts (biodéchets) demeure gratuit et illimité.
L'objectif fixé par les élus municipaux est de réduire de 30 % le volume d'ordures enfouies ou incinérées d'ici trois ans, tout en responsabilisant financièrement chaque foyer. Des composteurs individuels sont mis gratuitement à disposition des riverains sur simple demande en mairie.`,
    prompt: "Comment sera calculée la taxe d'enlèvement des ordures ménagères sous le nouveau système ?",
    options: [
      "A) Un montant fixe identique pour tous les habitants sans exception",
      "B) Une part variable dépendant du poids ou du nombre de levées du bac d'ordures résiduelles",
      "C) Uniquement selon la surface habitable du logement",
      "D) Une taxe obligatoire payante sur les bacs de recyclage jaune et vert"
    ],
    correctAnswer: "B) Une part variable dépendant du poids ou du nombre de levées du bac d'ordures résiduelles",
    explanation: "Le texte stipule que 'la part variable... sera calculée en fonction du nombre de fois où le bac noir est présenté à la collecte ou de son poids effectif'."
  },
  {
    id: "fr-b1b2-r-3",
    subtest: "reading",
    title: "Droit des consommateurs : Les garanties légales de conformité en France",
    passage: `INSTITUT NATIONAL DE LA CONSOMMATION (INC) — VOS DROITS
Lorsque vous achetez un produit neuf (électroménager, informatique, mobilier) auprès d'un vendeur professionnel établi dans l'Union européenne, vous bénéficiez automatiquement de la garantie légale de conformité d'une durée de deux ans à compter de la délivrance du bien.
Durant ces deux années, tout défaut apparaissant sur le produit est présumé exister dès l'achat, sauf preuve contraire apportée par le professionnel. Le consommateur a le droit d'exiger la réparation sans frais ou le remplacement du produit.
Si la réparation et le remplacement sont impossibles ou entraînent un coût manifestement disproportionné pour le vendeur, l'acheteur peut restituer le produit et se faire rembourser l'intégralité du prix, ou conserver le produit défectueux en obtenant une réduction tarifaire. La présentation du ticket de caisse ou de la facture d'achat est requise.`,
    prompt: "Pendant combien de temps un défaut apparaissant sur un appareil neuf est-il présumé avoir existé au moment de l'achat ?",
    options: [
      "A) Six mois",
      "B) Un an",
      "C) Deux ans",
      "D) Dix ans"
    ],
    correctAnswer: "C) Deux ans",
    explanation: "Le document affirme clairement : 'd'une durée de deux ans... tout défaut apparaissant sur le produit est présumé exister dès l'achat'."
  },
  {
    id: "fr-b1b2-r-4",
    subtest: "reading",
    title: "Politique de santé publique : Le déploiement de la télémédecine en zone rurale",
    passage: `SANTÉ PUBLIQUE — LUTTE CONTRE LES DÉSERTS MÉDICAUX
La désertification médicale touche désormais de nombreux territoires ruraux ainsi que certaines banlieues périphériques, où le délai moyen pour obtenir une consultation chez un spécialiste dépasse fréquemment six mois.
Pour pallier cette pénurie de praticiens, l'Assurance Maladie soutient activement le déploiement de cabines de téléconsultation connectées dans les pharmacies de village et les maisons France Services. Équipées de tensiomètres, d'otoscopes et de stéthoscopes numériques, ces cabines permettent aux patients d'échanger en visioconférence avec un médecin généraliste et d'obtenir une ordonnance sécurisée en temps réel.
Bien que cette innovation technique apporte un soulagement indiscutable pour le renouvellement de traitements chroniques, le Conseil de l'Ordre des Médecins rappelle qu'elle ne saurait remplacer l'examen clinique direct et la présence humaine indispensable au diagnostic complexe.`,
    prompt: "Quelle réserve principale est émise à propos des cabines de téléconsultation ?",
    options: [
      "A) Elles sont interdites par l'Union européenne",
      "B) Elles ne peuvent délivrer aucune ordonnance médicale",
      "C) Elles ne peuvent pas remplacer totalement l'examen clinique direct et le contact humain du médecin",
      "D) Leur coût est supérieur à celui d'une hospitalisation d'urgence"
    ],
    correctAnswer: "C) Elles ne peuvent pas remplacer totalement l'examen clinique direct et le contact humain du médecin",
    explanation: "Le texte conclut : 'le Conseil de l'Ordre... rappelle qu'elle ne saurait remplacer l'examen clinique direct et la présence humaine indispensable'."
  },
  {
    id: "fr-b1b2-r-5",
    subtest: "reading",
    title: "Éducation & Jeunesse : L'apprentissage et les filières professionnelles",
    passage: `MINISTÈRE DU TRAVAIL — LE BOOM DE L'APPRENTISSAGE
Avec plus d'un million de contrats signés l'an dernier, l'apprentissage connaît un essor sans précédent dans l'Hexagone. Longtemps perçue à tort comme une voie de garage par certains parents, l'alternance séduit désormais les étudiants du CAP jusqu'au diplôme d'ingénieur ou au Master universitaire.
Le modèle associe des périodes d'enseignement théorique en centre de formation (CFA) et une immersion rémunérée en entreprise sous la tutelle d'un maître d'apprentissage chevronné. Le taux d'insertion professionnelle six mois après l'obtention du diplôme dépasse les 70 %, un chiffre nettement supérieur à celui des filières académiques traditionnelles.
Les aides gouvernementales accordées aux employeurs pour la première année de contrat ont joué un rôle déterminant dans cette dynamique, incitant les PME à investir durablement dans la formation des jeunes talents.`,
    prompt: "Quel avantage majeur de l'apprentissage est mis en avant dans cet extrait ?",
    options: [
      "A) L'exonération totale de tous les examens écrits finaux",
      "B) Un taux d'insertion professionnelle supérieur à 70 % six mois après le diplôme",
      "C) L'obligation de travailler à l'étranger pendant deux ans",
      "D) La gratuité de tous les logements étudiants privés"
    ],
    correctAnswer: "B) Un taux d'insertion professionnelle supérieur à 70 % six mois après le diplôme",
    explanation: "Le texte met en avant : 'Le taux d'insertion professionnelle six mois après l'obtention du diplôme dépasse les 70 %, un chiffre nettement supérieur'."
  },
  {
    id: "fr-b1b2-r-6",
    subtest: "reading",
    title: "Urbanisme & Écologie : Les zones à faibles émissions (ZFE) dans les métropoles",
    passage: `ÉCOLOGIE URBAINE — LES ZONES À FAIBLES ÉMISSIONS EN DÉBAT
Afin d'améliorer la qualité de l'air respiré par les citadins et de se conformer aux normes européennes sur les particules fines et les oxydes d'azote, plusieurs grandes métropoles françaises ont instauré des Zones à Faibles Émissions mobilité (ZFE-m).
Dans ces périmètres délimités, la circulation des véhicules les plus anciens et les plus polluants (vignettes Crit'Air 4 et 5) est restreinte ou interdite en semaine durant la journée. Les contrevenants s'exposent à une amende forfaitaire de 68 euros.
Si l'impact sanitaire positif sur la baisse des affections respiratoires infantiles est salué par le corps médical, les associations de consommateurs alertent sur le risque d'exclusion sociale des ménages modestes résidant en grande couronne périurbaine, qui n'ont pas les moyens financiers d'acquérir un véhicule électrique ou hybride récent.`,
    prompt: "Quelle est la principale critique formulée par les associations contre les ZFE ?",
    options: [
      "A) Les ZFE augmentent la pollution sonore dans les centres historiques",
      "B) Elles risquent de pénaliser financièrement et d'exclure les ménages modestes qui dépendent de leur voiture ancienne",
      "C) Elles interdisent la circulation des vélos et des trottinettes électriques",
      "D) Les amendes sont versées directement aux constructeurs automobiles"
    ],
    correctAnswer: "B) Elles risquent de pénaliser financièrement et d'exclure les ménages modestes qui dépendent de leur voiture ancienne",
    explanation: "Le texte note que 'les associations de consommateurs alertent sur le risque d'exclusion sociale des ménages modestes résidant en grande couronne... qui n'ont pas les moyens'."
  }
  ,
  {
    id: "fr-b1b2-r-7",
    subtest: "reading",
    title: "Santé Publique : La prévention du burn-out et la santé mentale au travail",
    passage: `AGENCE NATIONALE POUR L'AMÉLIORATION DES CONDITIONS DE TRAVAIL (ANACT)
Le syndrome d'épuisement professionnel touche aujourd'hui un nombre croissant de cadres et d'employés dans les secteurs tertiaires et hospitaliers. Caractérisé par un épuisement émotionnel profond, une dépersonnalisation de la relation aux usagers et un sentiment d'inefficacité, le burn-out ne résulte pas d'une fragilité individuelle mais d'une surcharge structurelle de travail combinée à un manque d'autonomie décisionnelle.
L'ANACT préconise la mise en place d'audits organisationnels réguliers au sein des comités sociaux et économiques (CSE) et la formation obligatoire des managers de proximité à la détection précoce des signaux faibles d'anxiété. Des cellules d'écoute psychologique indépendantes doivent être garanties à chaque salarié avec anonymat complet.`,
    prompt: "Selon l'ANACT, quelle est la cause principale de l'épuisement professionnel ?",
    options: [
      "A) Une faiblesse psychologique innée et personnelle de l'employé",
      "B) Une surcharge de travail structurelle combinée à un manque d'autonomie",
      "C) Le refus systématique de prendre des congés payés annuels",
      "D) L'utilisation excessive des transports en commun"
    ],
    correctAnswer: "B) Une surcharge de travail structurelle combinée à un manque d'autonomie",
    explanation: "Le texte affirme que le burn-out 'ne résulte pas d'une fragilité individuelle mais d'une surcharge structurelle de travail combinée à un manque d'autonomie décisionnelle'."
  },
  {
    id: "fr-b1b2-r-8",
    subtest: "reading",
    title: "Consommation Responsable : L'essor du réemploi et des ressourceries de quartier",
    passage: `ÉCONOMIE SOCIALE ET SOLIDAIRE — LE SUCCÈS DES RESSOURCERIES
Dans le sillage de la loi anti-gaspillage pour une économie circulaire (AGEC), les ressourceries et recycleries citoyennes connaissent une fréquentation record dans toutes les régions de France. Ces structures associatives collectent chaque année des milliers de tonnes d'objets du quotidien (meubles, électroménager, vêtements, vaisselle) destinés à la déchetterie pour les réparer, les revaloriser et les revendre à prix solidaire.
Au-delà de leur impact écologique mesurable par l'évitement de l'enfouissement de déchets, ces ateliers jouent un rôle crucial d'insertion sociale en formant des personnes éloignées de l'emploi aux métiers de la réparation et de l'artisanat du réemploi.`,
    prompt: "Quel est le double impact des ressourceries décrit dans l'article ?",
    options: [
      "A) Augmenter la fabrication industrielle de biens neufs et fermer les marchés locaux",
      "B) Éviter l'enfouissement des déchets et favoriser l'insertion professionnelle de personnes en difficulté",
      "C) Supprimer totalement la taxe sur la valeur ajoutée pour les grandes enseignes",
      "D) Remplacer tous les services municipaux de propreté urbaine"
    ],
    correctAnswer: "B) Éviter l'enfouissement des déchets et favoriser l'insertion professionnelle de personnes en difficulté",
    explanation: "Le document souligne l'impact écologique (évitement de l'enfouissement de déchets) combiné au rôle d'insertion sociale en formant des personnes éloignées de l'emploi."
  },
  {
    id: "fr-b1b2-r-9",
    subtest: "reading",
    title: "Patrimoine & Tourisme : La régulation des meublés touristiques dans les centres historiques",
    passage: `TRIBUNAL ADMINISTRATIF — RÉGULATION LOCATIVE À SAINT-MALO ET PARIS
Afin d'enrayer la crise du logement qui pénalise durement les résidents permanents et les travailleurs saisonniers, plusieurs municipalités touristiques ont voté des règlements stricts de compensation pour la location de meublés touristiques de courte durée.
Tout propriétaire souhaitant louer une résidence secondaire sur des plateformes en ligne doit désormais acheter un local commercial d'une surface équivalente dans le même secteur pour le transformer en logement pérenne à bail classique. Par ailleurs, les quotas de résidences principales louées aux vacanciers sont plafonnés à 120 jours par an sous peine d'une amende civile pouvant atteindre 50 000 euros par infraction constatée par les agents de contrôle assermentés.`,
    prompt: "Que doit faire un propriétaire pour louer une résidence secondaire en meublé touristique ?",
    options: [
      "A) Obtenir l'accord unanime de tous les hôteliers de la commune",
      "B) Acheter et transformer un local commercial de surface équivalente en logement locatif classique (règle de compensation)",
      "C) Payer une taxe forfaitaire de 10 euros par nuitée sans autre obligation",
      "D) Faire construire une piscine municipale pour le quartier"
    ],
    correctAnswer: "B) Acheter et transformer un local commercial de surface équivalente en logement locatif classique (règle de compensation)",
    explanation: "Le texte précise que le propriétaire doit 'acheter un local commercial d'une surface équivalente... pour le transformer en logement pérenne à bail classique'."
  },
  {
    id: "fr-b1b2-r-10",
    subtest: "reading",
    title: "Innovation Technologique : L'intelligence artificielle dans le diagnostic médical hospitalier",
    passage: `CENTRE HOSPITALIER UNIVERSITAIRE — MÉDECINE DE PRÉCISION
Dans les services de radiologie et d'oncologie de plusieurs CHU français, des algorithmes d'apprentissage profond sont désormais déployés en appui des praticiens pour l'analyse des scanners thoraciques et des mammographies de dépistage.
Les études cliniques démontrent que cette double lecture automatisée permet de réduire de 20 % les faux négatifs lors de la détection précoce de micro-tumeurs pulmonaires. Cependant, le Collège national des radiologues insiste fermement : l'intelligence artificielle n'a pas vocation à se substituer au médecin. La décision thérapeutique finale et l'annonce diagnostique au patient demeurent sous la responsabilité déontologique exclusive du praticien hospitalier.`,
    prompt: "Quel est le rôle exact assigné aux algorithmes d'IA dans les hôpitaux selon cet extrait ?",
    options: [
      "A) Remplacer complètement les radiologues et décider seuls des traitements chirurgicaux",
      "B) Assister les médecins dans le dépistage précoce, la décision finale restant la responsabilité exclusive du médecin",
      "C) Interdire les examens de scanner pour des raisons de coût budgétaire",
      "D) Prendre en charge uniquement les dossiers administratifs de la sécurité sociale"
    ],
    correctAnswer: "B) Assister les médecins dans le dépistage précoce, la décision finale restant la responsabilité exclusive du médecin",
    explanation: "Le Collège insiste : 'l'intelligence artificielle n'a pas vocation à se substituer au médecin... La décision thérapeutique finale... demeure sous la responsabilité... du praticien'."
  },
  {
    id: "fr-b1b2-r-11",
    subtest: "reading",
    title: "Biodiversité : Le plan national de protection des abeilles et insectes pollinisateurs",
    passage: `MINISTÈRE DE L'AGRICULTURE ET DE LA SOUVERAINETÉ ALIMENTAIRE
Face au déclin alarmant des colonies d'abeilles sauvages et domestiques, indispensables à la pollinisation de plus de 80 % des cultures vivrières et des plantes à fleurs, le gouvernement a renforcé les mesures du Plan National Pollinisateurs.
Le texte interdit dorénavant l'épandage de tout produit phytosanitaire insecticide durant les périodes de floraison dans les deux heures précédant le lever du soleil et les trois heures suivant son coucher, moments où les butineuses sont les plus actives. De surcroît, les gestionnaires de voiries autoroutières et de voies ferrées ont l'obligation d'aménager des corridors écologiques et des bandes fleuries diversifiées sur leurs talus.`,
    prompt: "Quelle restriction est imposée sur les insecticides pour protéger les insectes butineurs ?",
    options: [
      "A) L'interdiction d'épandage durant la floraison pendant les plages horaires d'activité maximale des abeilles",
      "B) L'interdiction totale de l'agriculture biologique en milieu rural",
      "C) L'obligation de détruire tous les essaims sauvages situés près des routes",
      "D) L'interdiction de cultiver des plantes à fleurs dans les jardins privés"
    ],
    correctAnswer: "A) L'interdiction d'épandage durant la floraison pendant les plages horaires d'activité maximale des abeilles",
    explanation: "Le texte énonce l'interdiction de 'l'épandage de tout produit phytosanitaire insecticide durant les périodes de floraison dans les plages horaires où les butineuses sont les plus actives'."
  },
  {
    id: "fr-b1b2-r-12",
    subtest: "reading",
    title: "Démocratie Participative : Le budget participatif des arrondissements parisiens",
    passage: `VILLE DE PARIS — BUDGET PARTICIPATIF CITOYEN
Chaque année, la Ville consacre 5 % de son budget d'investissement communal, soit près de 100 millions d'euros, à des projets d'aménagement urbain imaginés et votés directement par les administrés.
Tout habitant, sans condition de nationalité ni d'âge minimal, peut déposer en ligne une proposition répondant aux critères d'intérêt général : verdissement de cours d'écoles, sécurisation de carrefours piétons, installation de bancs publics solaires ou création d'ateliers de bricolage partagés. Après instruction de la faisabilité technique par les services municipaux, les projets sont soumis au vote des riverains lors d'un scrutin citoyen organisé en mairie et sur internet.`,
    prompt: "Qui a le droit de voter pour les projets du budget participatif selon ce document ?",
    options: [
      "A) Seuls les propriétaires de logements âgés de plus de 30 ans",
      "B) Tous les habitants sans condition de nationalité ni d'âge minimal",
      "C) Uniquement les élus du Conseil de Paris",
      "D) Exclusivement les touristes titulaires d'un passeport européen"
    ],
    correctAnswer: "B) Tous les habitants sans condition de nationalité ni d'âge minimal",
    explanation: "Le texte précise sans équivoque : 'Tout habitant, sans condition de nationalité ni d'âge minimal, peut déposer... et voter lors d'un scrutin citoyen'."
  }
];

export const frenchB1B2Writing = [
  {
    id: "fr-b1b2-w-1",
    subtest: "writing",
    taskType: "message",
    title: "Courrier officiel de réclamation : Litige locatif et restitution de dépôt de garantie",
    prompt: "Vous avez quitté votre appartement de location il y a trois mois. L'état des lieux de sortie était conforme à l'état des lieux d'entrée. Cependant, le propriétaire ne vous a toujours pas restitué votre dépôt de garantie (caution) de 1 200 euros malgré vos relances téléphoniques.\n\nRédigez une lettre recommandée avec accusé de réception (120–160 mots) au propriétaire :\n- Rappelez les faits, l'adresse du logement et la date de remise des clés\n- Citez l'état des lieux de sortie sans dégradation constatée\n- Rappelez le délai légal maximal (1 mois en cas d'état des lieux conforme) et la majoration de 10% par mois de retard\n- Mettez-le en demeure de vous rembourser sous huitaine avant saisine de la commission de conciliation.",
    minWords: 120,
    modelResponse: "Madame, Monsieur,\n\nPar la présente, je vous mets en demeure de me restituer le dépôt de garantie relatif à la location de l'appartement situé au 14 rue Victor Hugo à Nantes, dont les clés vous ont été remises le 15 juillet dernier.\n\nLors de notre état des lieux de sortie contradictoire signé conjointement, aucune dégradation n'a été constatée par rapport à l'état des lieux d'entrée. Conformément aux dispositions de l'article 22 de la loi du 6 juillet 1989, le délai maximal de restitution du dépôt de garantie est fixé à un mois lorsque l'état des lieux est conforme.\n\nÀ ce jour, soit plus de deux mois après l'échéance légale, je n'ai toujours reçu aucun virement de votre part. Je vous rappelle que la loi prévoit une majoration de 10 % du loyer mensuel hors charges pour chaque mois de retard entamé.\n\nJe vous somme donc de me verser la somme de 1 200 euros assortie des pénalités légales sous un délai de huit jours à compter de la réception de cette lettre. À défaut, je porterai immédiatement le litige devant la Commission départementale de conciliation.\n\nVeuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nAlexandre Mercier"
  },
  {
    id: "fr-b1b2-w-2",
    subtest: "writing",
    taskType: "message",
    title: "Lettre de motivation professionnelle : Candidature pour un poste de coordinateur de projet",
    prompt: "Vous postulez pour un poste de coordinateur de projets multiculturels au sein d'une organisation non gouvernementale (ONG) ou d'une institution francophone.\n\nRédigez votre lettre de motivation (140–180 mots) :\n- Présentez votre parcours académique et vos expériences professionnelles antérieures\n- Mettez en avant vos compétences linguistiques, relationnelles et organisationnelles\n- Exprimez vos motivations précises pour rejoindre cette structure et ses valeurs\n- Sollicitez un entretien d'embauche dans les formules de politesse protocolaires.",
    minWords: 140,
    modelResponse: "À l'attention de la Direction des Ressources Humaines,\n\nTitulaire d'un Master en Relations Internationales et fort d'une expérience de trois ans en gestion de projets associatifs, je vous adresse avec un vif intérêt ma candidature au poste de Coordinateur de Projets au sein de votre organisation.\n\nAu cours de mes précédentes missions, j'ai piloté des initiatives d'intégration sociale et culturelle réunissant des équipes pluridisciplinaires et des partenaires institutionnels variés. Mon aisance en français et en anglais, alliée à une solide maîtrise de la gestion budgétaire et du suivi logistique, m'a permis de mener à bien des actions humanitaires exigeantes tout en respectant des calendriers serrés.\n\nProfondément attaché aux valeurs de solidarité et d'émancipation portées par votre structure, je souhaite mettre ma rigueur méthodologique, mon sens de l'écoute et mon dynamisme au service de vos programmes sur le terrain.\n\nJe me tiens à votre entière disposition pour convenir d'un entretien afin d'approfondir l'adéquation de mon profil avec vos attentes.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de ma très haute considération.\n\nCamille Martin"
  },
  {
    id: "fr-b1b2-w-3",
    subtest: "writing",
    taskType: "essay",
    title: "Essai argumenté citoyen : Faut-il interdire totalement les smartphones dans les collèges et lycées ?",
    prompt: "Vous participez à un débat public citoyen ou à un forum éducatif sur l'impact des écrans et des réseaux sociaux chez les adolescents en milieu scolaire.\n\nRédigez un texte argumenté et structuré (160–220 mots) dans lequel vous exposez votre point de vue :\n- Introduction introduisant la problématique contemporaine\n- Arguments en faveur de la restriction (concentration en classe, prévention du cyberharcèlement, sociabilité réelle)\n- Nuances ou alternatives (usage pédagogique encadré, éducation aux médias numériques plutôt que prohibition aveugle)\n- Conclusion résumant votre position pour concilier bien-être scolaire et modernité technologique.",
    minWords: 160,
    modelResponse: "L'omniprésence des téléphones portables chez les adolescents suscite de vifs débats quant à leur place au sein des établissements scolaires. Si certains prônent une interdiction totale et sans concession, la question mérite d'être examinée sous plusieurs angles.\n\nD'un côté, bannir le smartphone des salles de cours et des cours de récréation présente des bénéfices incontestables pour les élèves. D'une part, cela favorise une attention soutenue en éliminant les notifications incessantes qui fragmentent la concentration intellectuelle. D'autre part, cette mesure limite considérablement les dérives du cyberharcèlement instantané et encourage des interactions directes et spontanées entre camarades pendant les pauses.\n\nCependant, une interdiction purement répressive risque de méconnaître la réalité numérique de notre siècle. Les outils connectés offrent également d'immenses opportunités pédagogiques lorsqu'ils sont intégrés intelligemment dans des projets d'apprentissage guidés par les professeurs. De surcroît, le rôle primordial de l'école républicaine n'est pas d'ignorer la technologie, mais d'éduquer les futurs citoyens à un usage critique, raisonné et responsable des réseaux.\n\nEn conclusion, plutôt qu'une prohibition dogmatique et difficile à faire respecter, je préconise un cadre strict fondé sur le dépôt des téléphones dans des casiers sécurisés durant les cours, combiné à des modules d'éducation numérique citoyenne tout au long de la scolarité."
  }
  ,
  {
    id: "fr-b1b2-w-4",
    subtest: "writing",
    taskType: "message",
    title: "Courriel officiel d'inscription : Demande de place en crèche municipale",
    prompt: "Vous venez d'emménager dans une nouvelle commune avec votre enfant en bas âge. Vous écrivez au service de la Petite Enfance de la mairie pour solliciter une place en crèche municipale à temps plein dès la rentrée prochaine.\n\nRédigez votre demande formelle (120–160 mots) :\n- Présentez votre situation familiale et professionnelle (reprise d'activité professionnelle des deux parents)\n- Indiquez la date souhaitée d'entrée et le rythme d'accueil hebdomadaire\n- Joignez les pièces justificatives d'état civil et de domicile\n- Soulignez l'importance de ce mode d'accueil pour la socialisation de votre enfant.",
    minWords: 120,
    modelResponse: "Madame, Monsieur le Responsable du Service Petite Enfance,\n\nNouveaux résidents au sein de votre commune depuis le mois dernier, mon conjoint et moi-même sollicitons par la présente l'attribution d'une place en crèche municipale pour notre fille Léa, âgée de dix mois, à compter du 1er septembre prochain.\n\nNous reprenons tous les deux notre activité professionnelle à temps complet dès cette rentrée, ce qui nécessite un accueil régulier du lundi au vendredi de 8h00 à 18h00. Nous attachons une grande importance à la socialisation en collectivité et aux activités d'éveil coordonnées par votre équipe d'éducateurs qualifiés.\n\nVous trouverez en pièces jointes à ce courriel notre livret de famille, notre justificatif de domicile récent ainsi que nos contrats de travail respectifs.\n\nNous nous tenons à votre entière disposition pour tout renseignement complémentaire lors de la prochaine commission d'attribution.\n\nVeuillez agréer, Madame, Monsieur, l'expression de nos salutations distinguées.\n\nMarc et Sophie Dupuis"
  },
  {
    id: "fr-b1b2-w-5",
    subtest: "writing",
    taskType: "message",
    title: "Demande d'aménagement d'horaires : Lettre au directeur des ressources humaines",
    prompt: "Pour préparer un concours administratif ou suivre une formation certifiante en cours du soir, vous demandez à votre DRH un aménagement de vos horaires hebdomadaires (décalage de 30 minutes et télétravail un jour fixe).\n\nRédigez votre demande professionnelle (130–170 mots) :\n- Rappelez votre poste, votre ancienneté et vos bons résultats récents\n- Détaillez la formation visée et son bénéfice pour votre évolution au sein de l'entreprise\n- Précisez l'aménagement d'horaires sollicité en assurant la continuité de service\n- Proposez un point d'étape d'évaluation après trois mois d'expérimentation.",
    minWords: 130,
    modelResponse: "Monsieur le Directeur des Ressources Humaines,\n\nEn poste depuis quatre ans au sein du service logistique de notre entreprise, je vous sollicite afin d'examiner la possibilité d'un aménagement ponctuel de mes horaires hebdomadaires à compter du mois d'octobre.\n\nJ'ai en effet été admis à une formation certifiante en management de la chaîne d'approvisionnement durable dispensée par le Conservatoire National des Arts et Métiers (CNAM). L'acquisition de ces compétences permettra d'optimiser directement nos processus d'expédition et de décarbonation du transport.\n\nAfin de pouvoir assister aux cours du soir, je souhaiterais avancer ma prise de poste quotidienne à 8h00 au lieu de 8h30 et bénéficier d'une journée de télétravail fixe le jeudi. Cet aménagement garantira l'intégralité de mon volume d'heures contractuel et la continuité sans faille de mes missions.\n\nJe vous propose d'expérimenter cette organisation pendant un trimestre et de faire un bilan d'évaluation ensemble.\n\nJe vous remercie par avance de l'attention que vous porterez à ma démarche et vous prie d'agréer mes salutations respectueuses.\n\nJulien Lefèvre"
  },
  {
    id: "fr-b1b2-w-6",
    subtest: "writing",
    taskType: "essay",
    title: "Essai argumenté : Faut-il instaurer la gratuité totale des transports en commun dans les métropoles ?",
    prompt: "Dans le cadre d'une consultation citoyenne sur la transition écologique métropolitaine, vous rédigez un texte argumentatif (160–220 mots) pour exprimer votre point de vue sur la gratuité des bus, trams et métros pour tous les usagers.\n\n- Présentez les avantages socio-écologiques de la gratuité (report modal depuis la voiture individuelle, justice sociale, réduction des émissions polluantes)\n- Analysez les limites financières et opérationnelles (manque à gagner sur les investissements de modernisation, risque de saturation des lignes)\n- Proposez une solution équilibrée ou ciblée (tarification solidaire selon le quotient familial ou gratuité les week-ends).",
    minWords: 160,
    modelResponse: "La question de la gratuité universelle des transports collectifs urbains est au cœur des débats sur la ville durable. Si cette mesure séduit par sa portée sociale et écologique immédiate, son opportunité économique doit être mesurée avec discernement.\n\nIndéniablement, la gratuité des bus et tramways constitue un levier puissant d'équité sociale. Elle allège le budget des ménages précaires et encourage un report modal salutaire de l'automobile vers les transports décarbonés, contribuant directement à l'assainissement de l'air urbain. Des agglomérations pionnières comme Dunkerque ont prouvé l'efficacité de ce modèle pour dynamiser les centres-villes.\n\nNéanmoins, la suppression des recettes tarifaires représente un manque à gagner substantiel pour les collectivités. Privé de ces financements réguliers, le réseau risque de peiner à investir dans le renouvellement des rames, l'extension des lignes de banlieue et le maintien d'une fréquence élevée aux heures de pointe, conduisant paradoxalement à une dégradation du service perçu par les usagers.\n\nDès lors, une tarification progressive et solidaire calculée selon le quotient familial, combinée à une gratuité ciblée pour les jeunes de moins de 25 ans et durant les week-ends, apparaît comme un compromis équilibré entre justice sociale et pérennité des infrastructures publiques."
  }
];

export const frenchB1B2Listening = [
  {
    id: "fr-b1b2-l-1",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Journal de France Info : À compter du 1er novembre, le barème du bonus écologique évoluera pour favoriser l'acquisition de véhicules électriques dont l'empreinte carbone de fabrication respecte les critères environnementaux européens. Les ministères de la Transition écologique et de l'Économie confirment que cette mesure vise à soutenir l'industrie automobile locale tout en accélérant la décarbonation des transports.",
    prompt: "Quel est l'objectif principal de l'évolution du bonus écologique annoncée aux informations ?",
    options: [
      "A) Encourager l'achat de voitures à essence de forte cylindrée",
      "B) Favoriser les véhicules électriques écologiquement vertueux et soutenir l'industrie locale",
      "C) Supprimer toute aide financière pour les ménages modestes",
      "D) Rendre le permis de conduire obligatoire pour les cyclistes"
    ],
    correctAnswer: "B) Favoriser les véhicules électriques écologiquement vertueux et soutenir l'industrie locale",
    explanation: "Le bulletin d'information précise que la mesure favorise les véhicules 'dont l'empreinte carbone... respecte les critères' et 'vise à soutenir l'industrie automobile locale'."
  },
  {
    id: "fr-b1b2-l-2",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Chers auditeurs de France Culture, notre invité le sociologue Pierre Durand nous rappelle : Les tiers-lieux, tels que les ateliers partagés et les espaces de travail coopératifs en milieu semi-rural, redynamisent profondément la vie de quartier. Ils brisent la solitude du télétravailleur isolé et recréent une solidarité intergénérationnelle que l'urbanisation rapide avait peu à peu fait disparaître.",
    prompt: "D'après le sociologue interviewé, quel impact positif ont les tiers-lieux sur les territoires ?",
    options: [
      "A) Ils augmentent le coût des loyers commerciaux",
      "B) Ils brisent la solitude des télétravailleurs et recréent de la solidarité intergénérationnelle",
      "C) Ils imposent des horaires de travail stricts à tous les résidents",
      "D) Ils remplacent les mairies et les services postaux"
    ],
    correctAnswer: "B) Ils brisent la solitude des télétravailleurs et recréent de la solidarité intergénérationnelle",
    explanation: "L'invité insiste sur le fait qu'ils 'brisent la solitude du télétravailleur isolé et recréent une solidarité intergénérationnelle'."
  },
  {
    id: "fr-b1b2-l-3",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Débat radiophonique : La semaine de quatre jours sans baisse de salaire a été expérimentée dans une cinquantaine d'entreprises de la région lyonnaise. Les bilans préliminaires indiquent une réduction de 35 % de l'absentéisme pour maladie et une hausse mesurable de la productivité horaire, sans impacter la satisfaction des clients.",
    prompt: "Quels résultats ont été constatés suite à l'expérimentation de la semaine de 4 jours ?",
    options: [
      "A) Une faillite généralisée des entreprises participantes",
      "B) Une diminution de 35 % de l'absentéisme et une augmentation de la productivité horaire",
      "C) Une baisse de salaire obligatoire de 20 % pour tous les employés",
      "D) Une démission collective des cadres supérieurs"
    ],
    correctAnswer: "B) Une diminution de 35 % de l'absentéisme et une augmentation de la productivité horaire",
    explanation: "Le compte-rendu évoque 'une réduction de 35 % de l'absentéisme pour maladie et une hausse mesurable de la productivité'."
  },
  {
    id: "fr-b1b2-l-4",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Préfecture de police, message de sécurité routière : Avec le passage à l'heure d'hiver et la baisse de la luminosité en fin de journée, le nombre d'accidents impliquant des piétons et des usagers de trottinettes augmente de près de 40 %. Nous rappelons l'obligation de porter des équipements rétro-réfléchissants et d'allumer les feux avant et arrière dès la tombée de la nuit.",
    prompt: "Quel comportement de sécurité la préfecture rappelle-t-elle instamment aux usagers vulnérables ?",
    options: [
      "A) Interdiction totale de circuler après 17 heures",
      "B) Port d'équipements rétro-réfléchissants et éclairage fonctionnel dès la tombée de la nuit",
      "C) Obligation de rouler exclusivement sur les autoroutes",
      "D) Remplacement des vélos par des voitures individuelles"
    ],
    correctAnswer: "B) Port d'équipements rétro-réfléchissants et éclairage fonctionnel dès la tombée de la nuit",
    explanation: "Le message rappelle : 'l'obligation de porter des équipements rétro-réfléchissants et d'allumer les feux avant et arrière'."
  },
  {
    id: "fr-b1b2-l-5",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Message sur répondeur d'assurance : Bonjour monsieur Mercier, c'est votre conseiller Macif. Nous avons bien reçu votre déclaration de dégât des eaux ainsi que le constat amiable signé avec votre voisin du dessus. L'expert passera à votre domicile le jeudi 18 novembre entre 14 heures et 16 heures. Veuillez conserver les factures des biens endommagés pour accélérer votre indemnisation.",
    prompt: "Que doit faire monsieur Mercier en prévision de la visite de l'expert d'assurance ?",
    options: [
      "A) Réparer lui-même immédiatement la plomberie",
      "B) Conserver les factures des biens endommagés pour le dossier d'indemnisation",
      "C) Porter plainte au commissariat de police",
      "D) Vendre son appartement avant jeudi"
    ],
    correctAnswer: "B) Conserver les factures des biens endommagés pour le dossier d'indemnisation",
    explanation: "Le conseiller demande : 'Veuillez conserver les factures des biens endommagés pour accélérer votre indemnisation'."
  },
  {
    id: "fr-b1b2-l-6",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Émission littéraire sur RFI : L'écrivain met en garde contre l'appauvrissement du vocabulaire à l'ère des messageries instantanées. Pour lui, la langue n'est pas seulement un vecteur d'information rapide, c'est la structure même de la pensée nuancée et de la délibération démocratique. Quand le vocabulaire se réduit, notre capacité à formuler des désaccords constructifs s'affaiblit.",
    prompt: "Selon l'auteur, quel rôle fondamental joue la richesse du vocabulaire dans une société ?",
    options: [
      "A) Elle permet de taper plus rapidement sur un smartphone",
      "B) Elle structure la pensée nuancée et permet le débat démocratique constructif",
      "C) Elle sert uniquement à réussir des concours d'orthographe",
      "D) Elle divise les classes sociales sans intérêt pratique"
    ],
    correctAnswer: "B) Elle structure la pensée nuancée et permet le débat démocratique constructif",
    explanation: "L'auteur affirme que la langue est 'la structure même de la pensée nuancée et de la délibération démocratique'."
  }
  ,
  {
    id: "fr-b1b2-l-7",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Chers auditeurs, bienvenue dans notre émission économique. Le gouvernement annonce aujourd'hui la prolongation du chèque énergie exceptionnel pour les ménages modestes jusqu'au printemps prochain. Cette aide, d'un montant moyen de cent cinquante euros, sera versée automatiquement sans aucune démarche administrative préalable aux foyers éligibles sur la base de leur dernière déclaration fiscale.",
    prompt: "Comment les bénéficiaires recevront-ils le chèque énergie selon la chronique économique ?",
    options: [
      "A) En remplissant un formulaire papier complexe en mairie",
      "B) Automatiquement et sans démarche préalable d'après leur déclaration fiscale",
      "C) Uniquement s'ils souscrivent un contrat d'électricité payant",
      "D) Par tirage au sort chaque premier lundi du mois"
    ],
    correctAnswer: "B) Automatiquement et sans démarche préalable d'après leur déclaration fiscale",
    explanation: "La chronique précise expressément : 'versée automatiquement sans aucune démarche administrative préalable aux foyers éligibles'."
  },
  {
    id: "fr-b1b2-l-8",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Avis à tous les usagers de l'aéroport Roissy-Charles de Gaulle. En raison d'un mouvement de grève interprofessionnel des contrôleurs aériens pour la journée de demain, la Direction générale de l'aviation civile demande aux compagnies de réduire leur programme de vols de trente pour cent. Les passagers sont invités à vérifier le statut de leur vol auprès de leur transporteur avant de se déplacer à l'aéroport.",
    prompt: "Que doivent faire impérativement les passagers avant de se rendre à l'aéroport ?",
    options: [
      "A) Annuler définitivement leur voyage sans remboursement",
      "B) Vérifier le maintien et le statut de leur vol auprès de leur compagnie aérienne",
      "C) Se présenter quarante-huit heures à l'avance au terminal",
      "D) Changer immédiatement de destination par téléphone"
    ],
    correctAnswer: "B) Vérifier le maintien et le statut de leur vol auprès de leur compagnie aérienne",
    explanation: "L'annonce indique clairement : 'Les passagers sont invités à vérifier le statut de leur vol auprès de leur transporteur avant de se déplacer'."
  },
  {
    id: "fr-b1b2-l-9",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Bonjour monsieur. Je suis le technicien mandaté par le distributeur Enedis pour le remplacement de votre ancien compteur électrique par un modèle communicant Linky. L'intervention dure environ trente minutes, durant lesquelles une brève coupure de courant sera nécessaire. Vos appareils électroménagers sensibles ne risquent rien, mais je vous conseille d'éteindre vos ordinateurs au préalable.",
    prompt: "Quelle précaution le technicien conseille-t-il au résident avant la coupure ?",
    options: [
      "A) Quitter l'appartement pour toute la journée",
      "B) Éteindre ses ordinateurs avant l'intervention d'environ trente minutes",
      "C) Remplacer tous les fusibles du tableau électrique",
      "D) Débrancher le réfrigérateur pendant quarante-huit heures"
    ],
    correctAnswer: "B) Éteindre ses ordinateurs avant l'intervention d'environ trente minutes",
    explanation: "Le technicien recommande : 'je vous conseille d'éteindre vos ordinateurs au préalable'."
  },
  {
    id: "fr-b1b2-l-10",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Flash info France Culture : l'UNESCO vient de classer la tradition de la baguette de pain artisanale et la culture du bistrot parisien au patrimoine culturel immatériel de l'humanité. Cette reconnaissance salue le savoir-faire des boulangers indépendants face à l'industrialisation alimentaire et consacre les bistrots comme des lieux irremplaçables de convivialité citoyenne.",
    prompt: "Pourquoi l'UNESCO a-t-elle distingué la baguette et le bistrot d'après le flash info ?",
    options: [
      "A) Pour interdire l'ouverture de nouvelles boulangeries industrielles",
      "B) Pour saluer le savoir-faire artisanal traditionnel et des lieux d'échange social citoyen",
      "C) Pour subventionner le prix de la farine à l'échelle européenne",
      "D) Pour créer une nouvelle taxe touristique sur la restauration"
    ],
    correctAnswer: "B) Pour saluer le savoir-faire artisanal traditionnel et des lieux d'échange social citoyen",
    explanation: "Le bulletin explique que cela 'salue le savoir-faire des boulangers indépendants... et consacre les bistrots comme des lieux irremplaçables de convivialité citoyenne'."
  },
  {
    id: "fr-b1b2-l-11",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Message de prévention de l'Assurance Maladie : la campagne de vaccination conjointe contre la grippe saisonnière et la Covid-19 est désormais ouverte pour toutes les personnes âgées de soixante-cinq ans et plus, ainsi que pour les personnes souffrant de maladies chroniques. L'injection peut être réalisée sans prescription médicale chez votre pharmacien, votre médecin traitant ou une infirmière libérale.",
    prompt: "Où les personnes éligibles peuvent-elles se faire vacciner sans ordonnance médicale préalable ?",
    options: [
      "A) Uniquement au sein des urgences hospitalières de nuit",
      "B) Chez leur pharmacien, médecin traitant ou infirmière libérale",
      "C) Exclusivement auprès des services de police municipale",
      "D) Dans les centres de recherche universitaire par tirage au sort"
    ],
    correctAnswer: "B) Chez leur pharmacien, médecin traitant ou infirmière libérale",
    explanation: "Le message précise que l'injection peut être faite 'sans prescription médicale chez votre pharmacien, votre médecin traitant ou une infirmière libérale'."
  },
  {
    id: "fr-b1b2-l-12",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Bonjour madame, agence immobilière Century 21. Je vous rappelle au sujet de l'appartement trois pièces que vous avez visité hier rue Nationale. Le propriétaire a accepté votre dossier de candidature. Il conviendra de venir signer le bail en agence vendredi matin à dix heures en apportant un chèque de caution et votre première attestation d'assurance habitation multirisque.",
    prompt: "Que doit fournir la future locataire lors de la signature du bail vendredi matin ?",
    options: [
      "A) Une photocopie de son casier judiciaire",
      "B) Un chèque de caution et une attestation d'assurance habitation multirisque",
      "C) Un certificat de scolarité délivré par la mairie",
      "D) Les clés de son ancien logement de location"
    ],
    correctAnswer: "B) Un chèque de caution et une attestation d'assurance habitation multirisque",
    explanation: "L'agent immobilier demande d'apporter 'un chèque de caution et votre première attestation d'assurance habitation multirisque'."
  }
];

export const frenchB1B2Speaking = [
  {
    id: "fr-b1b2-s-1",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Entretien de naturalisation ou préfecture : Les valeurs de la République",
    audioPrompt: "Bonjour. Dans le cadre de l'évaluation linguistique et civique pour l'accès à la nationalité ou au titre de résident de longue durée, pourriez-vous m'expliquer ce que représente pour vous la devise républicaine « Liberté, Égalité, Fraternité » et comment vous vivez la laïcité au quotidien ?",
    prepSeconds: 15,
    speakSeconds: 50,
    prompt: "Répondez avec clarté et conviction. Commentez les trois termes de la devise de la République française et expliquez le principe de laïcité garantissant la liberté de conscience et le vivre-ensemble.",
    modelAnswer: "Pour moi, la devise « Liberté, Égalité, Fraternité » est le fondement vivant de la société française. La liberté permet à chacun d'exprimer ses opinions et de choisir sa voie sans oppression. L'égalité garantit que chaque individu jouit des mêmes droits fondamentaux devant la loi, sans distinction d'origine, de genre ou de croyance. Enfin, la fraternité est la solidarité collective qui protège les plus vulnérables à travers notre système social. Quant à la laïcité, elle n'est pas une négation des religions, mais un principe d'émancipation et de neutralité de l'État qui garantit la liberté de croire ou de ne pas croire dans le respect des lois communes."
  },
  {
    id: "fr-b1b2-s-2",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Réclamation en face à face : Contester une surfacturation chez l'opérateur",
    audioPrompt: "Bonjour monsieur, je suis le responsable de l'agence de télécommunication. Vous m'avez demandé de vous recevoir pour une réclamation concernant votre dernière facture mensuelle. De quoi s'agit-il exactement ?",
    prepSeconds: 10,
    speakSeconds: 40,
    prompt: "Expliquez calmement mais fermement que votre facture comporte 60 euros d'options payantes non souscrites. Exigez l'annulation immédiate de ces options et le remboursement sur votre prochain prélèvement.",
    modelAnswer: "Bonjour monsieur. J'ai constaté sur ma dernière facture de téléphonie un prélèvement anormal de 95 euros au lieu des 35 euros de mon forfait initial. En vérifiant le détail, j'ai découvert que des options de jeux et de chaînes premium ont été activées sans mon consentement explicite. Je viens demander la résiliation immédiate de ces services non sollicités ainsi qu'un avoir de soixante euros déductible sur mon prochain prélèvement, sans quoi je serai contraint de saisir le médiateur des communications électroniques."
  },
  {
    id: "fr-b1b2-s-3",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Négociation avec son employeur : Demande d'aménagement d'horaires pour formation",
    audioPrompt: "Entrez, asseyez-vous. Vous vouliez me parler d'un projet professionnel personnel pour l'année prochaine. De quoi s'agit-il et quel aménagement de temps de travail souhaiteriez-vous proposer ?",
    prepSeconds: 12,
    speakSeconds: 45,
    prompt: "Présentez à votre supérieur votre projet de suivre une formation certifiante en gestion de projet (une journée par semaine) et expliquez les bénéfices directs que l'entreprise en retirera.",
    modelAnswer: "Merci de me recevoir. J'ai été accepté dans une formation certifiante en gestion de projet agile, dispensée par le CNAM chaque vendredi pendant six mois. Afin de mener à bien ce perfectionnement, je sollicite un aménagement de mon temps de travail sous forme de temps partiel à 80 % ou de modulation horaire sur les quatre autres jours. Cette montée en compétences sera un atout direct pour notre département, car elle me permettra d'optimiser nos plannings de livraison et d'encadrer nos nouveaux juniors avec des méthodes modernes."
  },
  {
    id: "fr-b1b2-s-4",
    subtest: "speaking",
    taskType: "monologue",
    title: "Exposé d'opinion (Monologue argumenté) : Faut-il rendre les transports en commun gratuits dans les grandes agglomérations ?",
    audioPrompt: "À partir du thème de la gratuité des transports publics urbains, présentez votre point de vue argumenté. Analysez les bénéfices écologiques et sociaux, mais aussi les contraintes de financement pour les collectivités territoriales.",
    prepSeconds: 20,
    speakSeconds: 90,
    prompt: "Développez un discours oral structuré de 90 secondes avec introduction, arguments pour (écologie, pouvoir d'achat), arguments contre ou réserves (coût budgétaire, investissements matériels), et une proposition équilibrée.",
    modelAnswer: "La gratuité des transports publics est une initiative audacieuse qui suscite de vifs débats dans les métropoles européennes. D'un côté, ses partisans soulignent à juste titre des avantages majeurs : rendre le bus et le tramway gratuits incite les automobilistes à laisser leur véhicule au garage, ce qui réduit drastiquement les embouteillages et la pollution de l'air. De surcroît, c'est une mesure de justice sociale indéniable qui redonne du pouvoir d'achat aux familles modestes et aux étudiants. Néanmoins, les détracteurs soulignent un obstacle économique de taille : sans les recettes de billetterie qui représentent souvent 30 à 40 % du budget des régies de transport, comment financer l'extension des lignes, la sécurité et la maintenance des rames ? Ne risque-t-on pas une dégradation du service ? Pour ma part, je préconise une approche ciblée : une gratuité intégrale réservée aux jeunes, aux demandeurs d'emploi et aux retraités, combinée à une tarification solidaire indexée sur les revenus pour le reste des usagers, afin de préserver les capacités d'investissement indispensables au réseau."
  },
  {
    id: "fr-b1b2-s-5",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Entretien d'embauche : Négociation de responsabilités professionnelles",
    audioPrompt: "Nous avons retenu votre candidature car vos compétences techniques correspondent parfaitement. Cependant, ce poste implique la gestion d'une équipe de six personnes. Comment concevez-vous votre management au quotidien ?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Répondez au responsable du recrutement. Expliquez votre style de management basé sur l'écoute active, la délégation et la fixation d'objectifs clairs.",
    modelAnswer: "Pour moi, le management d'équipe repose avant tout sur la confiance mutuelle et la clarté des objectifs partagés. J'accorde une grande importance à l'autonomie de mes collaborateurs : plutôt que d'effectuer un contrôle systématique, je préfère définir des indicateurs de réussite précis et organiser des points d'étape réguliers. Mon rôle de manager consiste à faciliter le travail quotidien de chacun, à lever les blocages opérationnels et à valoriser les initiatives individuelles et collectives pour préserver une motivation durable."
  },
  {
    id: "fr-b1b2-s-6",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Débat de copropriété : Rénovation thermique de l'immeuble",
    audioPrompt: "Je m'oppose au vote de ces travaux d'isolation par l'extérieur. La dépense est exorbitante et nous impose un emprunt collectif sur quinze ans !",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Prenez la parole lors de l'assemblée générale des copropriétaires. Argumentez en faveur de la rénovation thermique en évoquant les aides de l'État (MaPrimeRénov') et la valorisation patrimoniale.",
    modelAnswer: "Je comprends parfaitement votre inquiétude face au montant initial des devis. Toutefois, il convient de souligner que nous bénéficions d'aides publiques substantielles avec MaPrimeRénov' Copropriété qui couvrent jusqu'à 40 % du coût total des travaux. De plus, isoler la façade réduira immédiatement nos charges de chauffage collectif de 35 % chaque hiver et évitera que nos appartements ne soient classés en passoire thermique, ce qui déprécierait considérablement leur valeur à la revente."
  },
  {
    id: "fr-b1b2-s-7",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Médiation de voisinage : Nuisances sonores récurrentes",
    audioPrompt: "Bonjour voisin. J'ai vu votre mot dans l'ascenseur concernant le bruit de ma musique en soirée le week-end dernier.",
    prepSeconds: 12,
    speakSeconds: 50,
    prompt: "Exprimez-vous calmement mais fermement auprès de votre voisin. Expliquez l'impact des nuisances nocturnes sur votre sommeil et convenez d'un horaire limite de tolérance.",
    modelAnswer: "Bonjour. Je vous remercie de venir m'en parler directement. Effectivement, le week-end dernier la musique avec des basses très fortes a duré jusqu'à trois heures du matin. Nous habitons un vieil immeuble où l'isolation phonique est faible. J'ai des enfants en bas âge et je dois moi-même me lever tôt. Je ne vous demande pas de vivre dans un silence absolu, mais serait-il possible de baisser le volume à partir de 22 heures ou de prévenir les voisins si vous organisez une fête exceptionnelle ?"
  },
  {
    id: "fr-b1b2-s-8",
    subtest: "speaking",
    taskType: "monologue",
    title: "Exposé argumenté : L'impact de la surconsommation vestimentaire (Fast fashion)",
    audioPrompt: "Présentez une réflexion argumentée sur les conséquences environnementales et sociales de la mode éphémère (fast fashion) et les alternatives éco-responsables à développer.",
    prepSeconds: 30,
    speakSeconds: 90,
    prompt: "Exposez votre point de vue structuré (problématique, impacts écologiques et humains, solutions citoyennes et réglementaires).",
    modelAnswer: "L'industrie textile de la mode éphémère s'est imposée à l'échelle mondiale en multipliant les collections hebdomadaires à très bas prix. Cependant, ce modèle économique repose sur un coût écologique et humain insoutenable : consommation astronomique d'eau douce, pollution des cours d'eau par les teintures toxiques et précarité extrême de millions de travailleurs du textile dans les pays du Sud. Pour contrer ce désastre, il est urgent de transformer nos modes de consommation. Nous devons privilégier la seconde main, réparer nos vêtements au lieu de les jeter et exiger une traçabilité rigoureuse ainsi qu'un affichage environnemental obligatoire de la part des marques afin de responsabiliser les consommateurs."
  }
];

// ============================================================================
// 3. POOL DALF C1–C2: UTILISATEUR EXPÉRIMENTÉ (ACADÉMIQUE, RECHERCHE & AUTONOMIE)
// ============================================================================
export const frenchC1C2Reading = [
  {
    id: "fr-c1c2-r-1",
    subtest: "reading",
    title: "Essai philosophique & sociologique : La société de l'hyper-accélération et le temps critique",
    passage: `L'IMPERATIF DE L'IMMÉDIATETÉ ET LA DÉPOSSESSION DU TEMPS
Dans ses réflexions sur la modernité tardive, le sociologue et philosophe Hartmut Rosa conceptualise l'aliénation contemporaine non plus principalement à travers la dépossession des moyens de production, mais à travers la logique structurelle de l'accélération sociale.
Cette accélération opère sur trois dimensions distinctes mais interdépendantes : l'accélération technique (essor fulgurant des technologies d'information et de logistique), l'accélération du changement social (caducité rapide des connaissances, des métiers et des formes familiales) et l'accélération du rythme de vie quotidien (sensation permanente d'urgence et de déficit temporel).
Paradoxalement, alors que les innovations techniques avaient pour promesse libératrice de faire gagner du temps à l'humanité, les individus éprouvent plus que jamais le sentiment anxiogène d'une pénurie chronique d'heures disponibles. La vitesse d'accroissement de la quantité de tâches à accomplir surpasse la cadence des gains d'efficacité technologique, créant une spirale infernale d'épuisement psychologique et une incapacité collective à concevoir des projets politiques au long cours.`,
    prompt: "D'après l'analyse sociologique exposée, quel est le paradoxe central de l'accélération technique moderne ?",
    options: [
      "A) Les technologies modernes sont moins rapides que celles du dix-neuvième siècle",
      "B) Malgré les gains de temps théoriques procurés par la technologie, le sentiment de pénurie temporelle et d'urgence s'accroît",
      "C) Le temps de sommeil biologique a augmenté au détriment de l'activité économique",
      "D) L'accélération des transports a entraîné la disparition des métropoles industrielles"
    ],
    correctAnswer: "B) Malgré les gains de temps théoriques procurés par la technologie, le sentiment de pénurie temporelle et d'urgence s'accroît",
    explanation: "Le texte démontre que bien que les innovations aient promis d'économiser du temps, 'les individus éprouvent plus que jamais le sentiment anxiogène d'une pénurie chronique d'heures disponibles'."
  },
  {
    id: "fr-c1c2-r-2",
    subtest: "reading",
    title: "Droit constitutionnel & Science politique : La démocratie délibérative face aux algorithmes",
    passage: `L'ÉPREUVE DU DÉBAT PUBLIC À L'ÈRE DE LA POLARISATION NUMÉRIQUE
L'espace public tel que le théorisait Jürgen Habermas — une arène rationnelle où des citoyens libres confrontent des arguments étayés pour dégager un consensus éclairé — traverse une crise épistémique sans précédent sous l'influence des architectures algorithmiques prédictives.
Les plateformes numériques marchandes fondent leur modèle économique sur la captation maximale de l'attention utilisateur. Or, les sciences cognitives démontrent que les contenus véhiculant l'indignation morale, la controverse binaire et l'émotion brute génèrent des taux d'engagement bien supérieurs aux analyses pondérées et nuancées. En enfermant progressivement les internautes dans des « bulles de filtres » hermétiques et auto-confirmatoires, les réseaux sociaux minent la prémisse même de la délibération démocratique : le partage d'une réalité factuelle commune.
Face à cette balkanisation du corps social, juristes et constitutionnalistes s'interrogent sur l'opportunité de réguler les algorithmes de recommandation sans attenter à la liberté fondamentale d'expression, en exigeant un devoir de transparence publique sur les critères de mise en visibilité des contenus politiques.`,
    prompt: "Selon l'auteur, comment le modèle économique des réseaux sociaux compromet-il la délibération démocratique ?",
    options: [
      "A) En rendant l'accès à internet excessivement coûteux pour les citoyens ordinaires",
      "B) En privilégiant les contenus émotionnels et polarisants pour maximiser l'attention, ce qui fragmente la réalité factuelle commune",
      "C) En interdisant aux constitutionnalistes de publier des analyses critiques",
      "D) En remplaçant les tribunaux traditionnels par des intelligences artificielles souveraines"
    ],
    correctAnswer: "B) En privilégiant les contenus émotionnels et polarisants pour maximiser l'attention, ce qui fragmente la réalité factuelle commune",
    explanation: "Le texte démontre que la captation de l'attention privilégie 'l'indignation morale et l'émotion brute', enfermant les citoyens dans des bulles et minant 'le partage d'une réalité factuelle commune'."
  },
  {
    id: "fr-c1c2-r-3",
    subtest: "reading",
    title: "Économie & Écologie : Les théories de la post-croissance face aux limites planétaires",
    passage: `DÉCOUPLAGE ÉCONOMIQUE ET MATÉRIALITÉ BIOSPHÉRIQUE
La controverse contemporaine sur la transition écologique oppose fondamentalement deux paradigmes macroéconomiques : la croissance verte fondée sur le découplage absolu entre produit intérieur brut (PIB) et consommation de ressources, et les approches hétérodoxes de la post-croissance ou décroissance choisie.
Les partisans de la croissance verte soutiennent que l'innovation technologique, l'électrification massive et l'économie circulaire permettront d'étendre la prospérité matérielle tout en réduisant drastiquement les émissions de gaz à effet de serre. À l'inverse, les écologues de l'école biophysique rappellent que l'histoire industrielle n'a jamais documenté de découplage absolu et global à l'échelle requise par l'accord de Paris.
Chaque saut technologique entraîne au contraire des effets rebonds (le paradoxe de Jevons) : les gains d'efficacité unitaire conduisent à une baisse des coûts et à une démultiplication de la demande agrégée en métaux rares et énergie. Dès lors, pour les théoriciens de la soutenabilité forte, seule une sobriété structurelle repensant les finalités sociales de la production permettra d'éviter le dépassement irréversible des points de bascule écosystémiques.`,
    prompt: "Qu'est-ce que l'effet rebond (paradoxe de Jevons) mentionné dans le texte ?",
    options: [
      "A) Une crise financière survenant tous les dix ans de manière inévitable",
      "B) Le fait que les gains d'efficacité technologique conduisent souvent à une augmentation globale de la consommation de ressources",
      "C) La substitution spontanée des énergies fossiles par l'énergie solaire",
      "D) La baisse automatique du pouvoir d'achat des classes moyennes"
    ],
    correctAnswer: "B) Le fait que les gains d'efficacité technologique conduisent souvent à une augmentation globale de la consommation de ressources",
    explanation: "Le texte explicite : 'les gains d'efficacité unitaire conduisent à une baisse des coûts et à une démultiplication de la demande agrégée en métaux rares et énergie'."
  }
];

export const frenchC1C2Writing = [
  {
    id: "fr-c1c2-w-1",
    subtest: "writing",
    taskType: "essay",
    title: "Synthèse de documents & Essai académique : L'intelligence artificielle générative et l'avenir de la création intellectuelle",
    prompt: "Dans le cadre d'un colloque universitaire ou d'un rapport prospectif de haut niveau, vous devez rédiger une contribution argumentée et académique (220–300 mots) sur l'avènement des modèles d'IA générative dans les métiers de la création et du savoir.\n\nVotre texte doit comporter :\n- Une problématisation conceptuelle des notions d'originalité, d'auctorialité et de propriété intellectuelle\n- Une analyse dialectique des bénéfices (augmentation des facultés créatives, démocratisation de la production) et des risques majeurs (plagiat systémique, standardisation stylistique, précarisation des créateurs)\n- Des propositions juridiques et éthiques pour instaurer une gouvernance transparente du patrimoine culturel et scientifique.",
    minWords: 220,
    modelResponse: "L'irruption fulgurante des modèles d'intelligence artificielle générative dans le champ de la création littéraire, artistique et scientifique constitue une rupture anthropologique majeure qui ébranle les fondements mêmes de notre droit d'auteur hérité des Lumières. En automatisant l'agencement symbolique de textes, d'images et de codes sources à partir de corpus massifs d'œuvres préexistantes, ces architectures algorithmiques brouillent la frontière séculaire entre invention singulière et compilation probabiliste.\n\nD'un point de vue praxéologique, il serait stérile de nier l'apport potentiel de ces instruments : ils constituent de puissants amplificateurs de cognition, capables d'accélérer la recherche exploratoire, de démocratiser le prototypage artistique et de décharger les créateurs des tâches itératives les plus chronophages. Cependant, cette promesse d'abondance s'accompagne de périls substantiels. L'aspiration non consentie du patrimoine intellectuel mondial sans rémunération équitable des auteurs d'origine menace d'assécher économiquement les viviers de la création vivante. Plus insidieuse encore est la standardisation esthétique et rhétorique qu'induit la prédiction statistique, risquant de reléguer les marges fécondes et les dissonances critiques au profit d'un conformisme lissé.\n\nFace à ce défi de civilisation, il est impératif d'édifier un cadre normatif robuste. Cela requiert en premier lieu une transparence algorithmique intégrale sur les données d'entraînement, assortie d'un mécanisme de rémunération pour copie privée numérique. En second lieu, il convient de consacrer un principe intangible d'auctorialité humaine, affirmant que seule l'intentionnalité consciente d'un être moral peut prétendre au statut d'œuvre de l'esprit."
  }
];

export const frenchC1C2Listening = [
  {
    id: "fr-c1c2-l-1",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Conférence au Collège de France : L'intervenant souligne que la crise écologique ne se réduit pas à un simple dérèglement technique de nos bilans thermiques, mais procède d'une ontologie naturaliste occidentale qui a érigé la nature en décor passif, extérieur à la subjectivité humaine. Retisser des liens d'interdépendance avec le vivant exige donc une refondation épistémologique où le droit reconnaît la personnalité juridique d'écosystèmes vulnérables.",
    prompt: "Quelle est la thèse centrale développée par le conférencier ?",
    options: [
      "A) La crise écologique n'est qu'un phénomène passager sans gravité historique",
      "B) La crise trouve sa racine dans une conception occidentale séparant radicalement l'homme d'une nature passive, appelant à repenser le statut juridique du vivant",
      "C) Le réchauffement climatique peut être résolu exclusivement par le marché des quotas carbone",
      "D) Il faut interdire l'enseignement de la philosophie dans les universités"
    ],
    correctAnswer: "B) La crise trouve sa racine dans une conception occidentale séparant radicalement l'homme d'une nature passive, appelant à repenser le statut juridique du vivant",
    explanation: "Le conférencier critique l'ontologie naturaliste qui fait de la nature un 'décor passif' et préconise de 'retisser des liens d'interdépendance avec le vivant' via la personnalité juridique des écosystèmes."
  }
];

export const frenchC1C2Speaking = [
  {
    id: "fr-c1c2-s-1",
    subtest: "speaking",
    taskType: "monologue",
    title: "Soutenance académique & Débat de haut niveau : Plaidoyer pour la préservation du plurilinguisme dans la recherche scientifique",
    audioPrompt: "Vous participez à une commission internationale sur la politique linguistique universitaire. Présentez un plaidoyer rigoureux de 2 minutes en faveur du plurilinguisme académique contre l'hégémonie du tout-anglais dans les publications scientifiques.",
    prepSeconds: 30,
    speakSeconds: 120,
    prompt: "Prononcez une allocution académique structurée (exorde, argumentation conceptuelle sur le lien langue/pensée, contre-argument sur l'universalité de la communication, péroraison mobilisatrice).",
    modelAnswer: "Madame la Présidente, Mesdames et Messieurs les membres de la Commission,\n\nC'est avec une vive préoccupation mais une détermination inébranlable que je prends la parole devant vous pour défendre la vitalité du plurilinguisme dans la recherche scientifique contemporaine. La tentation croissante de soumettre l'intégralité de la production universitaire mondiale à un idiome unique et standardisé procède d'une illusion d'efficacité qui dissimule un appauvrissement épistémologique désastreux.\n\nUne langue n'est jamais un simple instrument neutre et interchangeable de transmission de données ; elle véhicule une vision du monde, une architecture conceptuelle et des nuances herméneutiques irremplaçables. En sciences humaines, en philosophie, en droit, mais tout autant dans les sciences fondamentales, la diversité des langues est le garant indispensable de la fécondité des hypothèses et de la multiplicité des perspectives théoriques.\n\nAbandonner le français et les autres langues nationales dans les revues d'excellence au profit exclusif d'un 'globish' appauvri crée un fossé infranchissable entre la recherche de pointe et les citoyens qui la financent, affaiblissant par là même le contrat républicain entre la science et la démocratie. C'est pourquoi nous devons instaurer des politiques audacieuses de traduction automatique intelligente et valoriser les publications plurilingues dans l'évaluation des carrières universitaires."
  }
];


// ============================================================================
// 4. POOL TCF / TEF / DCL: STANDARDIZED PLACEMENT & VOCATIONAL BUSINESS SKILLS
// ============================================================================
export const frenchTcfTefReading = [
  {
    id: "fr-tcf-r-1",
    subtest: "reading",
    title: "TCF / TEF Structure de la langue : Choix du temps et du mode grammatical",
    prompt: "Choisissez la forme correcte pour compléter la phrase : « Bien qu'il ___ beaucoup d'efforts lors de ses révisions, le candidat a éprouvé des difficultés le jour de l'examen. »",
    options: [
      "A) a fait (passé composé)",
      "B) ait fait (subjonctif passé)",
      "C) faisait (imparfait)",
      "D) fera (futur simple)"
    ],
    correctAnswer: "B) ait fait (subjonctif passé)",
    explanation: "La conjonction concessive 'bien que' exige rigoureusement le mode subjonctif. Pour une action antérieure, on emploie le subjonctif passé : 'bien qu'il ait fait'."
  },
  {
    id: "fr-tcf-r-2",
    subtest: "reading",
    title: "TCF / TEF Maîtrise des pronoms : Les pronoms relatifs composés",
    prompt: "Complétez la proposition : « L'entreprise pour ___ il travaille depuis dix ans vient d'ouvrir une filiale à Montréal. »",
    options: [
      "A) laquelle",
      "B) lequel",
      "C) duquel",
      "D) auquel"
    ],
    correctAnswer: "A) laquelle",
    explanation: "L'antécédent 'l'entreprise' est féminin singulier. Avec la préposition 'pour', on utilise le pronom relatif composé féminin singulier 'laquelle'."
  },
  {
    id: "fr-dcl-r-1",
    subtest: "reading",
    title: "DCL Français Professionnel : Note de service sur les audits de conformité ISO",
    passage: `DIRECTION DES OPÉRATIONS — NOTE DE SERVICE INTERNE
À l'attention de tous les chefs de département :
L'audit de renouvellement de notre certification ISO 9001 se tiendra du mardi 15 au jeudi 17 avril sur l'ensemble de notre site logistique de Saint-Quentin.
Chaque responsable de service est tenu de s'assurer de la mise à jour des fiches de procédures opérationnelles avant le vendredi 4 avril à midi. Une revue documentaire préliminaire sera effectuée par le pôle Qualité.
Durant l'audit, les auditeurs externes pourront interroger tout collaborateur sur son poste de travail. Nous comptons sur le professionnalisme de chacun pour expliciter avec rigueur les protocoles de traçabilité et de sécurité en vigueur.`,
    prompt: "Quelle obligation impérative incombe aux chefs de département avant le 4 avril ?",
    options: [
      "A) Fermer temporairement le site logistique",
      "B) Mettre à jour les fiches de procédures opérationnelles pour la revue documentaire",
      "C) Remplacer tous les auditeurs externes",
      "D) Organiser une réception festive pour les clients"
    ],
    correctAnswer: "B) Mettre à jour les fiches de procédures opérationnelles pour la revue documentaire",
    explanation: "La note spécifie : 'Chaque responsable de service est tenu de s'assurer de la mise à jour des fiches de procédures opérationnelles avant le vendredi 4 avril à midi'."
  }
];

export const frenchTcfTefListening = [
  {
    id: "fr-tcf-l-1",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Question de compréhension orale TCF : Écoutez attentivement le message téléphonique. « Bonjour madame Lemercier, cabinet d'expertise comptable Audit & Associés. Nous avons clôturé votre exercice fiscal annuel. Il apparaît un crédit d'impôt recherche de 15 000 euros en faveur de votre société. Veuillez nous contacter pour valider la déclaration télématique avant vendredi 18 heures. »",
    prompt: "Quelle information essentielle le cabinet comptable transmet-il à sa cliente ?",
    options: [
      "A) L'entreprise doit payer une pénalité fiscale de 15 000 euros",
      "B) L'exercice fiscal fait apparaître un crédit d'impôt recherche de 15 000 euros à valider avant vendredi",
      "C) Le cabinet d'expertise ferme définitivement ses bureaux",
      "D) Le dossier d'audit a été rejeté par l'administration"
    ],
    correctAnswer: "B) L'exercice fiscal fait apparaître un crédit d'impôt recherche de 15 000 euros à valider avant vendredi",
    explanation: "Le message indique qu'il 'apparaît un crédit d'impôt recherche de 15 000 euros en faveur de votre société' à valider avant vendredi."
  }
  ,
  {
    id: "fr-b1b2-s-5",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Entretien d'embauche : Négociation de responsabilités professionnelles",
    audioPrompt: "Nous avons retenu votre candidature car vos compétences techniques correspondent parfaitement. Cependant, ce poste implique la gestion d'une équipe de six personnes. Comment concevez-vous votre management au quotidien ?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Répondez au responsable du recrutement. Expliquez votre style de management basé sur l'écoute active, la délégation et la fixation d'objectifs clairs.",
    modelAnswer: "Pour moi, le management d'équipe repose avant tout sur la confiance mutuelle et la clarté des objectifs partagés. J'accorde une grande importance à l'autonomie de mes collaborateurs : plutôt que d'effectuer un contrôle systématique, je préfère définir des indicateurs de réussite précis et organiser des points d'étape réguliers. Mon rôle de manager consiste à faciliter le travail quotidien de chacun, à lever les blocages opérationnels et à valoriser les initiatives individuelles et collectives pour préserver une motivation durable."
  },
  {
    id: "fr-b1b2-s-6",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Débat de copropriété : Rénovation thermique de l'immeuble",
    audioPrompt: "Je m'oppose au vote de ces travaux d'isolation par l'extérieur. La dépense est exorbitante et nous impose un emprunt collectif sur quinze ans !",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Prenez la parole lors de l'assemblée générale des copropriétaires. Argumentez en faveur de la rénovation thermique en évoquant les aides de l'État (MaPrimeRénov') et la valorisation patrimoniale.",
    modelAnswer: "Je comprends parfaitement votre inquiétude face au montant initial des devis. Toutefois, il convient de souligner que nous bénéficions d'aides publiques substantielles avec MaPrimeRénov' Copropriété qui couvrent jusqu'à 40 % du coût total des travaux. De plus, isoler la façade réduira immédiatement nos charges de chauffage collectif de 35 % chaque hiver et évitera que nos appartements ne soient classés en passoire thermique, ce qui déprécierait considérablement leur valeur à la revente."
  },
  {
    id: "fr-b1b2-s-7",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Médiation de voisinage : Nuisances sonores récurrentes",
    audioPrompt: "Bonjour voisin. J'ai vu votre mot dans l'ascenseur concernant le bruit de ma musique en soirée le week-end dernier.",
    prepSeconds: 12,
    speakSeconds: 50,
    prompt: "Exprimez-vous calmement mais fermement auprès de votre voisin. Expliquez l'impact des nuisances nocturnes sur votre sommeil et convenez d'un horaire limite de tolérance.",
    modelAnswer: "Bonjour. Je vous remercie de venir m'en parler directement. Effectivement, le week-end dernier la musique avec des basses très fortes a duré jusqu'à trois heures du matin. Nous habitons un vieil immeuble où l'isolation phonique est faible. J'ai des enfants en bas âge et je dois moi-même me lever tôt. Je ne vous demande pas de vivre dans un silence absolu, mais serait-il possible de baisser le volume à partir de 22 heures ou de prévenir les voisins si vous organisez une fête exceptionnelle ?"
  },
  {
    id: "fr-b1b2-s-8",
    subtest: "speaking",
    taskType: "monologue",
    title: "Exposé argumenté : L'impact de la surconsommation vestimentaire (Fast fashion)",
    audioPrompt: "Présentez une réflexion argumentée sur les conséquences environnementales et sociales de la mode éphémère (fast fashion) et les alternatives éco-responsables à développer.",
    prepSeconds: 30,
    speakSeconds: 90,
    prompt: "Exposez votre point de vue structuré (problématique, impacts écologiques et humains, solutions citoyennes et réglementaires).",
    modelAnswer: "L'industrie textile de la mode éphémère s'est imposée à l'échelle mondiale en multipliant les collections hebdomadaires à très bas prix. Cependant, ce modèle économique repose sur un coût écologique et humain insoutenable : consommation astronomique d'eau douce, pollution des cours d'eau par les teintures toxiques et précarité extrême de millions de travailleurs du textile dans les pays du Sud. Pour contrer ce désastre, il est urgent de transformer nos modes de consommation. Nous devons privilégier la seconde main, réparer nos vêtements au lieu de les jeter et exiger une traçabilité rigoureuse ainsi qu'un affichage environnemental obligatoire de la part des marques afin de responsabiliser les consommateurs."
  }
];

// ============================================================================
// EXAM POOLS STRUCTURE FOR FRENCH CRT / CBT ENGINE
// ============================================================================
export const frenchExamPools = {
  delfA1A2: {
    levelKey: "delfA1A2",
    title: "DELF A1–A2 (CEFR Basic User / Utilisateur Élémentaire)",
    badge: "DELF A1–A2 • Survie & Quotidien",
    description: "Official French Ministry of Education diploma standard: understand familiar everyday expressions, basic sentences, shopping, directions & routine travel.",
    reading: frenchA1A2Reading,
    writing: frenchA1A2Writing,
    listening: frenchA1A2Listening,
    speaking: frenchA1A2Speaking
  },
  delfB1B2: {
    levelKey: "delfB1B2",
    title: "DELF B1–B2 (CEFR Independent User / Naturalisation & Études)",
    badge: "DELF B1–B2 • Nationalité & Séjour",
    description: "Official standard required for French residency & nationality (naturalisation française) and French university bachelor degrees: complaint letters, opinion essays, media debates & administrative procedures.",
    reading: frenchB1B2Reading,
    writing: frenchB1B2Writing,
    listening: frenchB1B2Listening,
    speaking: frenchB1B2Speaking
  },
  dalfC1C2: {
    levelKey: "dalfC1C2",
    title: "DALF C1–C2 (CEFR Proficient User / Maîtrise & Recherche)",
    badge: "DALF C1–C2 • Autonomie & Recherche",
    description: "Highest level of French linguistic excellence issued by France Éducation International: master's degrees, doctorates, legal-philosophical essays & advanced academic conferences.",
    reading: frenchC1C2Reading,
    writing: frenchC1C2Writing,
    listening: frenchC1C2Listening,
    speaking: frenchC1C2Speaking
  },
  tcfTefDcl: {
    levelKey: "tcfTefDcl",
    title: "TCF, TEF & DCL (Standardized Placement & Adult Vocational)",
    badge: "TCF • TEF Canada • DCL Affaires",
    description: "Standardized evaluation tests by France Éducation International and CCI Paris Île-de-France (TCF IRN, TEF Canada/Québec) + DCL national vocational diploma for workplace skills.",
    reading: [...frenchB1B2Reading, ...frenchTcfTefReading],
    writing: frenchB1B2Writing,
    listening: [...frenchB1B2Listening, ...frenchTcfTefListening],
    speaking: frenchB1B2Speaking
  }
};

/**
 * Generates an authentic, fresh French CRT / CBT exam session prioritizing unseen questions for the logged-in user.
 * @param {string} levelKey - 'delfA1A2' | 'delfB1B2' | 'dalfC1C2' | 'tcfTefDcl'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @param {Set<string>} seenQuestionIds - IDs of questions previously attempted by the user
 * @returns {object} Randomized French exam session object
 */
export function generateFrenchDynamicExam(levelKey = "delfB1B2", subtestFilter = "all", seenQuestionIds = new Set()) {
  const pool = frenchExamPools[levelKey] || frenchExamPools.delfB1B2;

  // 1. Reading exercises
  const readingResult = selectBrandNewSet(pool.reading, Math.min(6, pool.reading.length), seenQuestionIds);
  const selectedReading = readingResult.selected;

  // 2. Writing tasks: message + essay
  const messagesResult = selectBrandNewSet(pool.writing, Math.min(2, pool.writing.length), seenQuestionIds, item => item.taskType === "message");
  const essaysResult = selectBrandNewSet(pool.writing, Math.min(1, pool.writing.length), seenQuestionIds, item => item.taskType === "essay");
  const selectedWriting = [...messagesResult.selected, ...essaysResult.selected];

  // 3. Listening recordings
  const listeningResult = selectBrandNewSet(pool.listening, Math.min(6, pool.listening.length), seenQuestionIds);
  const selectedListening = listeningResult.selected;

  // 4. Speaking tasks: dialogues + monologue
  const dialoguesResult = selectBrandNewSet(pool.speaking, Math.min(3, pool.speaking.length), seenQuestionIds, item => item.taskType === "dialogue");
  const monologuesResult = selectBrandNewSet(pool.speaking, Math.min(1, pool.speaking.length), seenQuestionIds, item => item.taskType === "monologue");
  const selectedSpeaking = [...dialoguesResult.selected, ...monologuesResult.selected];

  // Assemble question stream based on chosen subtest
  let questions = [];
  let durationMinutes = 0;
  let subtestLabel = "Simulation Complète CRT Français (4 Épreuves Officielles)";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = 60;
    subtestLabel = "Compréhension des écrits (6 documents authentiques • 60 min)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = 60;
    subtestLabel = "Production écrite (Courrier formel + Essai argumenté • 60 min)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = 35;
    subtestLabel = "Compréhension de l'oral (Enregistrements audio en français • 35 min)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = 20;
    subtestLabel = "Production orale (Dialogues simulés & Monologue • 20 min)";
  } else {
    // "all" - Full official simulation
    questions = [
      ...selectedReading,
      ...selectedWriting,
      ...selectedListening,
      ...selectedSpeaking
    ];
    durationMinutes = 175; // 60 + 60 + 35 + 20 = 175 min
    subtestLabel = "Épreuve Complète DELF / DALF / TCF (Toutes les 4 compétences)";
  }

  const sessionId = `fr-${levelKey}-${subtestFilter}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

  return {
    sessionId,
    generatedAt: new Date().toISOString(),
    levelKey,
    title: pool.title,
    badge: pool.badge,
    subtestFilter,
    subtestLabel,
    durationMinutes,
    totalQuestions: questions.length,
    counts: {
      reading: subtestFilter === "all" || subtestFilter === "reading" ? selectedReading.length : 0,
      writing: subtestFilter === "all" || subtestFilter === "writing" ? selectedWriting.length : 0,
      listening: subtestFilter === "all" || subtestFilter === "listening" ? selectedListening.length : 0,
      speaking: subtestFilter === "all" || subtestFilter === "speaking" ? selectedSpeaking.length : 0
    },
    questions
  };
}
