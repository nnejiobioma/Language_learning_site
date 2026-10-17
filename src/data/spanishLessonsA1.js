// =========================================================================
// MCER / ELE Spanish Curriculum — Instituto Cervantes Aligned
// Block 1: 🟢 Nivel A1: Inicial (Principiante) — Units 1 to 4
// Exactly 20 Questions per Unit = 80 Questions Total
// =========================================================================

export const spanishA1Units = [
  // =========================================================================
  // Unit 1: Primeros Pasos (First Steps)
  // =========================================================================
  {
    id: "es-unit-1",
    unitId: "es-unit-1",
    unitNumber: 1,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 1: Primeros Pasos (First Steps)",
    subtitle: "Presente de indicativo (ser, estar, verbos regulares), saludos, alfabeto, números y países.",
    icon: "Sparkles",
    color: "#10b981",
    lessons: [
      {
        id: "es-u1-l1",
        title: "Lección 1: Presentaciones Personales y Verbos Esenciales",
        description: "Aprende a presentarte, deletrear, usar 'ser' y 'estar', y conjugar verbos regulares en presente.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta del verbo 'ser' para 'Yo'?",
            options: ["Soy", "Eres", "Es", "Somos"],
            correctAnswer: "Soy",
            explanation: "'Yo soy' es la primera persona del singular del verbo irregular 'ser'."
          },
          {
            id: "es-u1-q2",
            type: "matching",
            prompt: "Empareja los pronombres personales con la forma correcta de 'ser':",
            pairs: [
              { native: "Yo", english: "I am", left: "Yo", right: "soy" },
              { native: "Tú", english: "You are (informal)", left: "Tú", right: "eres" },
              { native: "Él / Ella / Usted", english: "He / She / You (formal) is", left: "Él / Ella / Usted", right: "es" },
              { native: "Nosotros / Nosotras", english: "We are", left: "Nosotros / Nosotras", right: "somos" }
            ]
          },
          {
            id: "es-u1-q3",
            type: "fill_blank",
            sentence: "Hola, me ___ Mateo y soy de España.",
            missingWord: "llamo",
            options: ["llamo", "llamas", "llama", "llamar"],
            correctAnswer: "llamo",
            explanation: "Para decir el nombre usamos 'me llamo' (del verbo reflexivo llamarse)."
          },
          {
            id: "es-u1-q4",
            type: "scramble",
            prompt: "Ordena las palabras para formar una presentación básica:",
            tokens: ["Hola,", "yo", "soy", "estudiante", "de", "español."],
            correctTokens: ["Hola,", "yo", "soy", "estudiante", "de", "español."],
            explanation: "Estructura correcta: Saludo + Sujeto + Verbo + Atributo."
          },
          {
            id: "es-u1-q5",
            type: "multiple_choice",
            prompt: "¿Cuándo se utiliza el verbo 'estar' en lugar de 'ser'?",
            options: [
              "Para ubicaciones geográficas y estados temporales o emocionales.",
              "Para definir la profesión y nacionalidad permanente.",
              "Para expresar la hora y el precio fijo.",
              "Para señalar relaciones de parentesco inmutables."
            ],
            correctAnswer: "Para ubicaciones geográficas y estados temporales o emocionales.",
            explanation: "'Estar' expresa localización ('Madrid está en España') y estados temporales ('Estoy cansado')."
          },
          {
            id: "es-u1-q6",
            type: "matching",
            prompt: "Empareja cada país con su nacionalidad correspondiente (masculina):",
            pairs: [
              { native: "España", english: "Spain -> Spanish", left: "España", right: "Español" },
              { native: "México", english: "Mexico -> Mexican", left: "México", right: "Mexicano" },
              { native: "Francia", english: "France -> French", left: "Francia", right: "Francés" },
              { native: "Alemania", english: "Germany -> German", left: "Alemania", right: "Alemán" }
            ]
          },
          {
            id: "es-u1-q7",
            type: "audio_listen",
            phrase: "¿Cómo te llamas y de dónde eres?",
            prompt: "Escucha la frase de presentación y selecciona su traducción:",
            options: [
              "What is your name and where are you from?",
              "Where do you work and how old are you?",
              "What language do you speak at home?",
              "How are you doing this morning?"
            ],
            correctAnswer: "What is your name and where are you from?",
            explanation: "'¿Cómo te llamas y de dónde eres?' pregunta por el nombre y la procedencia de una persona."
          },
          {
            id: "es-u1-q8",
            type: "fill_blank",
            sentence: "Carlos y Lucía ___ en la biblioteca de la universidad.",
            missingWord: "están",
            options: ["están", "son", "es", "está"],
            correctAnswer: "están",
            explanation: "Para indicar la localización de ellos (tercera persona del plural) usamos 'están'."
          },
          {
            id: "es-u1-q9",
            type: "multiple_choice",
            prompt: "¿Cómo se conjuga el verbo regular 'hablar' para 'Nosotros' en presente?",
            options: ["Hablamos", "Hablan", "Habláis", "Hablo"],
            correctAnswer: "Hablamos",
            explanation: "Los verbos terminados en -ar terminan en '-amos' para nosotros: hablamos."
          },
          {
            id: "es-u1-q10",
            type: "matching",
            prompt: "Empareja los números cardinales en español con sus dígitos:",
            pairs: [
              { native: "Quince", english: "15", left: "Quince", right: "15" },
              { native: "Veinte", english: "20", left: "Veinte", right: "20" },
              { native: "Cincuenta", english: "50", left: "Cincuenta", right: "50" },
              { native: "Cien", english: "100", left: "Cien", right: "100" }
            ]
          },
          {
            id: "es-u1-q11",
            type: "scramble",
            prompt: "Construye la oración interrogativa sobre el origen:",
            tokens: ["¿De", "dónde", "eres", "tú?", "bueno"],
            correctTokens: ["¿De", "dónde", "eres", "tú?"],
            explanation: "'¿De dónde eres tú?' pregunta por la procedencia o nacionalidad del interlocutor."
          },
          {
            id: "es-u1-q12",
            type: "multiple_choice",
            prompt: "La letra 'ñ' en el alfabeto español se pronuncia de forma similar a:",
            options: [
              "La 'gn' en francés o la 'ny' en catalán (sonido nasal palatal).",
              "La doble 'l' en inglés.",
              "La 'r' fuerte al principio de palabra.",
              "La 'ch' africada sorda."
            ],
            correctAnswer: "La 'gn' en francés o la 'ny' en catalán (sonido nasal palatal).",
            explanation: "La 'ñ' representa el fonema nasal palatal /ɲ/, como en 'España', 'año' o 'niño'."
          },
          {
            id: "es-u1-q13",
            type: "fill_blank",
            sentence: "Yo ___ en Madrid pero mis padres viven en Sevilla.",
            missingWord: "vivo",
            options: ["vivo", "vives", "vive", "vivimos"],
            correctAnswer: "vivo",
            explanation: "Primera persona del singular de 'vivir' en presente: yo vivo."
          },
          {
            id: "es-u1-q14",
            type: "matching",
            prompt: "Empareja los saludos y despedidas habituales con su contexto:",
            pairs: [
              { native: "Buenos días", english: "Good morning (until lunch)", left: "Buenos días", right: "Hasta el mediodía" },
              { native: "Buenas tardes", english: "Good afternoon (until dark)", left: "Buenas tardes", right: "Desde el almuerzo hasta la noche" },
              { native: "Buenas noches", english: "Good evening / night", left: "Buenas noches", right: "Por la noche o al despedirse para dormir" },
              { native: "Hasta luego", english: "See you later", left: "Hasta luego", right: "Despedida cotidiana" }
            ]
          },
          {
            id: "es-u1-q15",
            type: "multiple_choice",
            prompt: "En la frase 'Juan ___ médico en un hospital', ¿qué verbo corresponde?",
            options: ["es", "está", "son", "hay"],
            correctAnswer: "es",
            explanation: "Las profesiones e identidades se expresan con el verbo 'ser': Juan es médico."
          },
          {
            id: "es-u1-q16",
            type: "audio_listen",
            phrase: "Mucho gusto, encantado de conocerte.",
            prompt: "Escucha la fórmula de cortesía e identifica cuándo se usa:",
            options: [
              "Al conocer a alguien por primera vez.",
              "Al pedir la cuenta en un restaurante.",
              "Al despedirse por teléfono a medianoche.",
              "Al pedir indicaciones en el metro."
            ],
            correctAnswer: "Al conocer a alguien por primera vez.",
            explanation: "'Mucho gusto / Encantado' es la respuesta cordial estándar al ser presentado a alguien."
          },
          {
            id: "es-u1-q17",
            type: "fill_blank",
            sentence: "¿Cuántos años ___ tú?",
            missingWord: "tienes",
            options: ["tienes", "eres", "estás", "tienen"],
            correctAnswer: "tienes",
            explanation: "En español, la edad se expresa con el verbo 'tener', no con ser: 'tener X años'."
          },
          {
            id: "es-u1-q18",
            type: "scramble",
            prompt: "Ordena los elementos para indicar la edad:",
            tokens: ["Tengo", "veinticinco", "años", "de", "edad."],
            correctTokens: ["Tengo", "veinticinco", "años", "de", "edad."],
            explanation: "Formulación completa: Tengo + número + años + de edad."
          },
          {
            id: "es-u1-q19",
            type: "multiple_choice",
            prompt: "¿Cuál de estos sustantivos femeninos termina de forma irregular en '-o'?",
            options: ["La mano", "La casa", "La ventana", "La puerta"],
            correctAnswer: "La mano",
            explanation: "'La mano' es un sustantivo femenino que termina en '-o', una excepción clásica en español."
          },
          {
            id: "es-u1-q20",
            type: "matching",
            prompt: "Empareja los pronombres de cortesía con su tratamiento:",
            pairs: [
              { native: "Tú", english: "Informal singular", left: "Tú", right: "Familiar / Amigos" },
              { native: "Usted", english: "Formal singular", left: "Usted", right: "Respeto / Desconocidos" },
              { native: "Vosotros", english: "Informal plural (Spain)", left: "Vosotros", right: "Grupo de amigos en España" },
              { native: "Ustedes", english: "Formal plural (All Hispanic world)", left: "Ustedes", right: "Plural universal en América" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 2: Mi Día a Día (My Day-to-Day)
  // =========================================================================
  {
    id: "es-unit-2",
    unitId: "es-unit-2",
    unitNumber: 2,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 2: Mi Día a Día (My Day-to-Day)",
    subtitle: "Verbos reflexivos, verbos con diptongación (e➔ie, o➔ue), decir la hora, rutinas y días de la semana.",
    icon: "Clock",
    color: "#059669",
    lessons: [
      {
        id: "es-u2-l1",
        title: "Lección 1: Rutinas Diarias, Horarios y Cambios Vocálicos",
        description: "Domina los verbos reflexivos de aseo personal, los verbos con cambio de raíz y cómo expresar horarios.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u2-q1",
            type: "multiple_choice",
            prompt: "¿Cómo se conjuga el verbo reflexivo 'levantarse' para la primera persona singular (yo)?",
            options: ["Me levanto", "Te levantas", "Se levanta", "Nos levantamos"],
            correctAnswer: "Me levanto",
            explanation: "Los verbos reflexivos requieren el pronombre reflexivo átono correspondiente: yo me levanto."
          },
          {
            id: "es-u2-q2",
            type: "matching",
            prompt: "Empareja los pronombres reflexivos con sus sujetos:",
            pairs: [
              { native: "Yo", english: "me", left: "Yo", right: "me" },
              { native: "Tú", english: "te", left: "Tú", right: "te" },
              { native: "Él / Ella / Usted", english: "se", left: "Él / Ella / Usted", right: "se" },
              { native: "Nosotros", english: "nos", left: "Nosotros", right: "nos" }
            ]
          },
          {
            id: "es-u2-q3",
            type: "fill_blank",
            sentence: "Los fines de semana yo ___ (dormir, o➔ue) ocho horas seguidas.",
            missingWord: "duermo",
            options: ["duermo", "dormo", "duermes", "dormimos"],
            correctAnswer: "duermo",
            explanation: "El verbo 'dormir' tiene diptongación o➔ue en presente: yo duermo."
          },
          {
            id: "es-u2-q4",
            type: "scramble",
            prompt: "Ordena las palabras para decir la hora:",
            tokens: ["Son", "las", "ocho", "y", "media", "de", "la", "mañana."],
            correctTokens: ["Son", "las", "ocho", "y", "media", "de", "la", "mañana."],
            explanation: "Para decir las horas en plural usamos 'Son las' seguido de los minutos y la franja horaria."
          },
          {
            id: "es-u2-q5",
            type: "multiple_choice",
            prompt: "¿Cuál es la única hora del día que se introduce con 'Es la' en singular?",
            options: ["La una (1:00)", "Las dos (2:00)", "Las doce (12:00)", "Las seis (6:00)"],
            correctAnswer: "La una (1:00)",
            explanation: "La una es singular, por eso se dice: 'Es la una en punto / Es la una y cuarto'."
          },
          {
            id: "es-u2-q6",
            type: "matching",
            prompt: "Empareja los días de la semana con su significado:",
            pairs: [
              { native: "Lunes", english: "Monday", left: "Lunes", right: "Monday" },
              { native: "Miércoles", english: "Wednesday", left: "Miércoles", right: "Wednesday" },
              { native: "Viernes", english: "Friday", left: "Viernes", right: "Friday" },
              { native: "Domingo", english: "Sunday", left: "Domingo", right: "Sunday" }
            ]
          },
          {
            id: "es-u2-q7",
            type: "fill_blank",
            sentence: "La clase de español ___ (empezar, e➔ie) a las nueve en punto.",
            missingWord: "empieza",
            options: ["empieza", "empeza", "empezamos", "empiezan"],
            correctAnswer: "empieza",
            explanation: "'Empezar' diptonga e➔ie en las tres personas del singular y la tercera del plural: la clase empieza."
          },
          {
            id: "es-u2-q8",
            type: "audio_listen",
            phrase: "Normalmente me ducho, desayuno tostadas y salgo de casa a las ocho.",
            prompt: "Escucha la rutina matinal y determina a qué hora sale el hablante:",
            options: [
              "A las ocho de la mañana.",
              "A las siete y cuarto.",
              "A las nueve y media.",
              "A las diez en punto."
            ],
            correctAnswer: "A las ocho de la mañana.",
            explanation: "La frase especifica con precisión: 'salgo de casa a las ocho'."
          },
          {
            id: "es-u2-q9",
            type: "multiple_choice",
            prompt: "¿En qué personas NO cambia la raíz en los verbos diptongados en presente (e➔ie, o➔ue)?",
            options: [
              "Nosotros y vosotros (mantienen la vocal original sin diptongar).",
              "Yo y tú.",
              "Él y ellos.",
              "En ninguna, cambian en todas las personas."
            ],
            correctAnswer: "Nosotros y vosotros (mantienen la vocal original sin diptongar).",
            explanation: "'Nosotros' y 'vosotros' son formas llanas acentuadas en la desinencia: entendemos, dormimos."
          },
          {
            id: "es-u2-q10",
            type: "matching",
            prompt: "Empareja el verbo en infinitivo con su correspondiente cambio de raíz:",
            pairs: [
              { native: "Querer", english: "e ➔ ie (quiero)", left: "Querer", right: "e ➔ ie" },
              { native: "Poder", english: "o ➔ ue (puedo)", left: "Poder", right: "o ➔ ue" },
              { native: "Pedir", english: "e ➔ i (pido)", left: "Pedir", right: "e ➔ i" },
              { native: "Jugar", english: "u ➔ ue (juego)", left: "Jugar", right: "u ➔ ue" }
            ]
          },
          {
            id: "es-u2-q11",
            type: "scramble",
            prompt: "Ordena las partes de la rutina de noche:",
            tokens: ["Por", "la", "noche", "me", "acuesto", "a", "las", "once."],
            correctTokens: ["Por", "la", "noche", "me", "acuesto", "a", "las", "once."],
            explanation: "El orden habitual sitúa el complemento temporal seguido del verbo reflexivo y la hora."
          },
          {
            id: "es-u2-q12",
            type: "multiple_choice",
            prompt: "Para expresar una acción habitual repetida los sábados se dice:",
            options: ["Los sábados voy al gimnasio.", "En sábado voy al gimnasio.", "Por el sábado voy al gimnasio.", "A sábado voy al gimnasio."],
            correctAnswer: "Los sábados voy al gimnasio.",
            explanation: "Los días de la semana en español usan el artículo determinado plural para indicar hábito: 'los sábados'."
          },
          {
            id: "es-u2-q13",
            type: "fill_blank",
            sentence: "¿A qué hora ___ (despertarse, e➔ie) tú por las mañanas?",
            missingWord: "te despiertas",
            options: ["te despiertas", "despiertas", "te despiertes", "se despierta"],
            correctAnswer: "te despiertas",
            explanation: "Segunda persona de despertarse con pronombre y diptongación: tú te despiertas."
          },
          {
            id: "es-u2-q14",
            type: "matching",
            prompt: "Empareja las fracciones horarias en español con su equivalente:",
            pairs: [
              { native: "Y cuarto", english: "Quarter past (:15)", left: "Y cuarto", right: "15 minutos pasados" },
              { native: "Y media", english: "Half past (:30)", left: "Y media", right: "30 minutos pasados" },
              { native: "Menos cuarto", english: "Quarter to (:45)", left: "Menos cuarto", right: "Faltan 15 minutos" },
              { native: "En punto", english: "On the dot (:00)", left: "En punto", right: "Hora exacta" }
            ]
          },
          {
            id: "es-u2-q15",
            type: "multiple_choice",
            prompt: "¿Cuál es la diferencia entre 'despertarse' y 'levantarse'?",
            options: [
              "'Despertarse' es abrir los ojos y dejar de dormir; 'levantarse' es salir físicamente de la cama.",
              "Son sinónimos exactos intercambiables en cualquier contexto.",
              "'Levantarse' se usa solo para objetos pesados.",
              "'Despertarse' ocurre únicamente al atardecer."
            ],
            correctAnswer: "'Despertarse' es abrir los ojos y dejar de dormir; 'levantarse' es salir físicamente de la cama.",
            explanation: "Despertarse refiere a la vigilia cognitiva, mientras que levantarse implica ponerse de pie."
          },
          {
            id: "es-u2-q16",
            type: "audio_listen",
            phrase: "¿A qué hora almuerzas en el trabajo?",
            prompt: "Escucha la pregunta y señala de qué comida del día habla:",
            options: [
              "El almuerzo o comida del mediodía.",
              "El desayuno matutino.",
              "La merienda de la tarde.",
              "La cena nocturna."
            ],
            correctAnswer: "El almuerzo o comida del mediodía.",
            explanation: "'Almorzar' refiere a la comida principal que se toma al mediodía."
          },
          {
            id: "es-u2-q17",
            type: "fill_blank",
            sentence: "Nosotros ___ (volver, o➔ue) a casa a las siete de la tarde.",
            missingWord: "volvemos",
            options: ["volvemos", "vuelvemos", "vuelven", "volvéis"],
            correctAnswer: "volvemos",
            explanation: "La forma 'nosotros' de volver no diptonga: volvemos."
          },
          {
            id: "es-u2-q18",
            type: "scramble",
            prompt: "Construye la oración sobre la frecuencia de una acción:",
            tokens: ["Siempre", "desayuno", "café", "con", "leche.", "nunca"],
            correctTokens: ["Siempre", "desayuno", "café", "con", "leche."],
            explanation: "El adverbio de frecuencia 'siempre' precede o sigue naturalmente al verbo."
          },
          {
            id: "es-u2-q19",
            type: "multiple_choice",
            prompt: "¿Cuál de estos adverbios indica una frecuencia del 0%?",
            options: ["Nunca", "A veces", "A menudo", "Casi siempre"],
            correctAnswer: "Nunca",
            explanation: "'Nunca' o 'jamás' expresan la ausencia total de ocurrencia de un suceso."
          },
          {
            id: "es-u2-q20",
            type: "matching",
            prompt: "Empareja los adverbios de frecuencia de mayor a menor regularidad:",
            pairs: [
              { native: "Siempre", english: "100% of the time", left: "Siempre", right: "100%" },
              { native: "A menudo / Frecuentemente", english: "Frequently (~75%)", left: "A menudo", right: "75%" },
              { native: "A veces", english: "Sometimes (~50%)", left: "A veces", right: "50%" },
              { native: "Raras veces / Casi nunca", english: "Rarely (~10%)", left: "Raras veces", right: "10%" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 3: El Entorno Próximo (The Immediate Environment)
  // =========================================================================
  {
    id: "es-unit-3",
    unitId: "es-unit-3",
    unitNumber: 3,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 3: El Entorno Próximo (The Immediate Environment)",
    subtitle: "Preposiciones de lugar, artículos determinados e indeterminados, la casa, compras y direcciones.",
    icon: "Home",
    color: "#0d9488",
    lessons: [
      {
        id: "es-u3-l1",
        title: "Lección 1: La Vivienda, la Ciudad y Localizaciones Espaciales",
        description: "Describe las habitaciones del hogar, pide indicaciones para moverte por la ciudad y utiliza preposiciones de lugar.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u3-q1",
            type: "multiple_choice",
            prompt: "Para indicar que el gato está en la parte inferior de la mesa decimos:",
            options: [
              "El gato está debajo de la mesa.",
              "El gato está encima de la mesa.",
              "El gato está lejos de la mesa.",
              "El gato está enfrente de la mesa."
            ],
            correctAnswer: "El gato está debajo de la mesa.",
            explanation: "'Debajo de' sitúa un objeto en un plano inferior respecto a otro punto de referencia."
          },
          {
            id: "es-u3-q2",
            type: "matching",
            prompt: "Empareja las preposiciones y locuciones de lugar con su antónimo:",
            pairs: [
              { native: "Cerca de", english: "Close to <-> Far from", left: "Cerca de", right: "Lejos de" },
              { native: "Encima de", english: "On top of <-> Under", left: "Encima de", right: "Debajo de" },
              { native: "Delante de", english: "In front of <-> Behind", left: "Delante de", right: "Detrás de" },
              { native: "Dentro de", english: "Inside <-> Outside", left: "Dentro de", right: "Fuera de" }
            ]
          },
          {
            id: "es-u3-q3",
            type: "fill_blank",
            sentence: "La farmacia está al ___ del supermercado.",
            missingWord: "lado",
            options: ["lado", "fondo", "lejos", "arriba"],
            correctAnswer: "lado",
            explanation: "La locución preposicional 'al lado de' indica contigüidad física o proximidad inmediata."
          },
          {
            id: "es-u3-q4",
            type: "scramble",
            prompt: "Ordena las palabras para pedir una indicación en la calle:",
            tokens: ["¿Dónde", "está", "la", "estación", "de", "metro?", "tren"],
            correctTokens: ["¿Dónde", "está", "la", "estación", "de", "metro?"],
            explanation: "Fórmula cortés para preguntar por un punto de interés urbano."
          },
          {
            id: "es-u3-q5",
            type: "multiple_choice",
            prompt: "¿Cuál es el artículo indeterminado femenino plural?",
            options: ["Unas", "Unos", "Las", "Una"],
            correctAnswer: "Unas",
            explanation: "Los artículos indeterminados son: un (masc. sing.), una (fem. sing.), unos (masc. pl.), unas (fem. pl.)."
          },
          {
            id: "es-u3-q6",
            type: "matching",
            prompt: "Empareja las dependencias de una vivienda con su actividad principal:",
            pairs: [
              { native: "La cocina", english: "Cooking meals", left: "La cocina", right: "Preparar alimentos" },
              { native: "El dormitorio", english: "Sleeping and resting", left: "El dormitorio", right: "Dormir y descansar" },
              { native: "El cuarto de baño", english: "Personal hygiene", left: "El cuarto de baño", right: "Higiene personal" },
              { native: "El salón", english: "Socializing and relaxing", left: "El salón", right: "Ver la televisión y recibir visitas" }
            ]
          },
          {
            id: "es-u3-q7",
            type: "fill_blank",
            sentence: "Mi piso tiene ___ balcón muy luminoso hacia la calle.",
            missingWord: "un",
            options: ["un", "una", "unos", "el"],
            correctAnswer: "un",
            explanation: "'Balcón' es sustantivo masculino singular; por primera mención usamos el artículo indeterminado 'un'."
          },
          {
            id: "es-u3-q8",
            type: "audio_listen",
            phrase: "Siga todo recto y gire a la derecha en la segunda calle.",
            prompt: "Escucha la instrucción de dirección urbana y señala qué giro indica:",
            options: [
              "Girar a la derecha en la segunda calle.",
              "Girar a la izquierda en el semáforo.",
              "Cruzar el puente hacia el norte.",
              "Retroceder hasta la plaza principal."
            ],
            correctAnswer: "Girar a la derecha en la segunda calle.",
            explanation: "La grabación indica con precisión: 'gire a la derecha en la segunda calle'."
          },
          {
            id: "es-u3-q9",
            type: "multiple_choice",
            prompt: "En español, la contracción 'al' resulta de la unión obligatoria de:",
            options: ["a + el", "de + el", "en + el", "por + el"],
            correctAnswer: "a + el",
            explanation: "La preposición 'a' más el artículo determinado masculino 'el' forman siempre la contracción 'al'."
          },
          {
            id: "es-u3-q10",
            type: "matching",
            prompt: "Empareja los comercios de barrio con el producto que venden:",
            pairs: [
              { native: "La panadería", english: "Bread and pastries", left: "La panadería", right: "Pan y bollos" },
              { native: "La carnicería", english: "Fresh meat", left: "La carnicería", right: "Carne fresca" },
              { native: "La frutería", english: "Fruit and vegetables", left: "La frutería", right: "Frutas y verduras" },
              { native: "La pescadería", english: "Fish and seafood", left: "La pescadería", right: "Pescados y mariscos" }
            ]
          },
          {
            id: "es-u3-q11",
            type: "scramble",
            prompt: "Organiza una frase para comprar comida en el mercado:",
            tokens: ["Quisiera", "un", "kilo", "de", "manzanas,", "por", "favor."],
            correctTokens: ["Quisiera", "un", "kilo", "de", "manzanas,", "por", "favor."],
            explanation: "Estructura educada para pedir peso o cantidad de un alimento en una tienda."
          },
          {
            id: "es-u3-q12",
            type: "multiple_choice",
            prompt: "¿Cuál es la contracción obligatoria formada por 'de + el'?",
            options: ["Del", "Al", "Dele", "D'el"],
            correctAnswer: "Del",
            explanation: "Ejemplo: 'Vengo del supermercado' (de + el supermercado = del supermercado)."
          },
          {
            id: "es-u3-q13",
            type: "fill_blank",
            sentence: "El hospital está situado ___ del parque central.",
            missingWord: "enfrente",
            options: ["enfrente", "arriba", "dentro", "lado"],
            correctAnswer: "enfrente",
            explanation: "'Enfrente de' significa en la parte opuesta o de cara a un punto de referencia."
          },
          {
            id: "es-u3-q14",
            type: "matching",
            prompt: "Empareja las indicaciones de orientación con su significado en inglés:",
            pairs: [
              { native: "Todo recto", english: "Straight ahead", left: "Todo recto", right: "Straight ahead" },
              { native: "A la izquierda", english: "To the left", left: "A la izquierda", right: "To the left" },
              { native: "A la derecha", english: "To the right", left: "A la derecha", right: "To the right" },
              { native: "En la esquina", english: "On the corner", left: "En la esquina", right: "On the corner" }
            ]
          },
          {
            id: "es-u3-q15",
            type: "multiple_choice",
            prompt: "¿Cómo se pregunta de forma educada el precio de varios productos?",
            options: [
              "¿Cuánto cuestan estos tomates?",
              "¿Cuánto cuesta estos tomates?",
              "¿Qué precio tienen este tomate?",
              "¿Dónde vale estos tomates?"
            ],
            correctAnswer: "¿Cuánto cuestan estos tomates?",
            explanation: "Al concordar con un sujeto en plural ('estos tomates'), el verbo debe ir en plural: 'cuestan'."
          },
          {
            id: "es-u3-q16",
            type: "audio_listen",
            phrase: "¿Hay una parada de autobús cerca de aquí?",
            prompt: "Escucha la pregunta y determina qué servicio de transporte busca el usuario:",
            options: [
              "Una parada de autobús.",
              "Una estación de tren de cercanías.",
              "Un aparcamiento de bicicletas.",
              "Una parada de taxis nocturnos."
            ],
            correctAnswer: "Una parada de autobús.",
            explanation: "La locución pregunta específicamente por 'una parada de autobús'."
          },
          {
            id: "es-u3-q17",
            type: "fill_blank",
            sentence: "¿___ leche queda en la nevera?",
            missingWord: "Cuánta",
            options: ["Cuánta", "Cuánto", "Cuántos", "Cuántas"],
            correctAnswer: "Cuánta",
            explanation: "'Leche' es un sustantivo femenino incontable; concuerda con 'cuánta'."
          },
          {
            id: "es-u3-q18",
            type: "scramble",
            prompt: "Ordena la respuesta sobre la ubicación de una tienda:",
            tokens: ["La", "librería", "está", "entre", "el", "banco", "y", "el", "cine."],
            correctTokens: ["La", "librería", "está", "entre", "el", "banco", "y", "el", "cine."],
            explanation: "'Entre X e Y' describe una localización intermedia entre dos puntos."
          },
          {
            id: "es-u3-q19",
            type: "multiple_choice",
            prompt: "¿Cuál es la diferencia de uso entre 'hay' y 'está'?",
            options: [
              "'Hay' expresa existencia con elementos indeterminados; 'está' sitúa elementos específicos y determinados.",
              "'Hay' solo se usa para personas y 'está' solo para cosas.",
              "Son completamente idénticos y se pueden intercambiar siempre.",
              "'Está' se usa solo en pasado y 'hay' solo en futuro."
            ],
            correctAnswer: "'Hay' expresa existencia con elementos indeterminados; 'está' sitúa elementos específicos y determinados.",
            explanation: "Decimos 'Hay un banco cerca' (existencia indefinida) vs. 'El banco está al final de la calle' (ubicación determinada)."
          },
          {
            id: "es-u3-q20",
            type: "matching",
            prompt: "Empareja los adjetivos de descripción de vivienda con su cualidad opuesta:",
            pairs: [
              { native: "Luminoso", english: "Bright <-> Dark", left: "Luminoso", right: "Oscuro" },
              { native: "Amplio / Espacioso", english: "Spacious <-> Small / Narrow", left: "Amplio", right: "Estrecho / Pequeño" },
              { native: "Ruidoso", english: "Noisy <-> Quiet", left: "Ruidoso", right: "Tranquilo / Silencioso" },
              { native: "Amueblado", english: "Furnished <-> Unfurnished", left: "Amueblado", right: "Vacío / Sin muebles" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 4: Tiempo Libre (Free Time)
  // =========================================================================
  {
    id: "es-unit-4",
    unitId: "es-unit-4",
    unitNumber: 4,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 4: Tiempo Libre (Free Time)",
    subtitle: "Estructura de verbos tipo gustar (encantar, interesar, doler), aficiones, deportes y hacer planes.",
    icon: "Heart",
    color: "#0284c7",
    lessons: [
      {
        id: "es-u4-l1",
        title: "Lección 1: Gustos, Preferencias, Hobbies y Quedadas",
        description: "Expresa preferencias personales con 'gustar' y 'encantar', habla de deportes y propón planes a tus amigos.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u4-q1",
            type: "multiple_choice",
            prompt: "En la frase 'A mí me ___ los libros de aventuras', ¿qué forma de 'gustar' es la correcta?",
            options: ["gustan", "gusta", "gusto", "gustamos"],
            correctAnswer: "gustan",
            explanation: "El sujeto gramatical es 'los libros de aventuras' (plural), por lo que el verbo debe concordar en plural: gustan."
          },
          {
            id: "es-u4-q2",
            type: "matching",
            prompt: "Empareja los pronombres indirectos con el pronombre enfático de gustar:",
            pairs: [
              { native: "A mí", english: "me", left: "A mí", right: "me gusta" },
              { native: "A ti", english: "te", left: "A ti", right: "te gusta" },
              { native: "A él / A ella", english: "le", left: "A él / A ella", right: "le gusta" },
              { native: "A nosotros", english: "nos", left: "A nosotros", right: "nos gusta" }
            ]
          },
          {
            id: "es-u4-q3",
            type: "fill_blank",
            sentence: "A mis hermanos les ___ (encantar) viajar en tren.",
            missingWord: "encanta",
            options: ["encanta", "encantan", "encanto", "encantamos"],
            correctAnswer: "encanta",
            explanation: "Cuando lo que gusta es una acción en infinitivo ('viajar en tren'), el verbo va en singular: encanta."
          },
          {
            id: "es-u4-q4",
            type: "scramble",
            prompt: "Ordena las palabras para proponer un plan a un compañero:",
            tokens: ["¿Te", "apetece", "ir", "al", "cine", "esta", "tarde?"],
            correctTokens: ["¿Te", "apetece", "ir", "al", "cine", "esta", "tarde?"],
            explanation: "Fórmula coloquial y cortés para invitar a alguien a realizar una actividad de ocio."
          },
          {
            id: "es-u4-q5",
            type: "multiple_choice",
            prompt: "¿Cuál es la respuesta correcta para manifestar coincidencia afirmativa con 'A mí me encanta la música clásica'?",
            options: ["A mí también.", "A mí tampoco.", "Yo también.", "Yo tampoco."],
            correctAnswer: "A mí también.",
            explanation: "Con verbos de afecto psíquico como 'gustar' o 'encantar' la concordancia afirmativa se hace con 'A mí también'."
          },
          {
            id: "es-u4-q6",
            type: "matching",
            prompt: "Empareja cada deporte con el verbo habitual que le acompaña:",
            pairs: [
              { native: "Fútbol / Baloncesto", english: "Jugar al", left: "Fútbol / Baloncesto", right: "Jugar al" },
              { native: "Natación / Ciclismo", english: "Hacer / Practicar", left: "Natación / Ciclismo", right: "Practicar / Hacer" },
              { native: "Senderismo", english: "Ir de / Hacer", left: "Senderismo", right: "Ir de excursión / Hacer" },
              { native: "Yoga", english: "Hacer", left: "Yoga", right: "Hacer" }
            ]
          },
          {
            id: "es-u4-q7",
            type: "fill_blank",
            sentence: "A Laura no le gusta el café y a mí ___.",
            missingWord: "tampoco",
            options: ["tampoco", "también", "no", "nada"],
            correctAnswer: "tampoco",
            explanation: "Para coincidir con una opinión o gusto expresado en negativo usamos 'a mí tampoco'."
          },
          {
            id: "es-u4-q8",
            type: "audio_listen",
            phrase: "¿Quedamos el sábado a las seis en la plaza mayor?",
            prompt: "Escucha la propuesta de encuentro y elige qué sugiere el hablante:",
            options: [
              "Quedar el sábado a las seis en la plaza mayor.",
              "Comprar entradas para el teatro el domingo.",
              "Cenar en un restaurante el viernes noche.",
              "Ir de compras el lunes por la mañana."
            ],
            correctAnswer: "Quedar el sábado a las seis en la plaza mayor.",
            explanation: "El hablante propone día (sábado), hora (las seis) y lugar (plaza mayor)."
          },
          {
            id: "es-u4-q9",
            type: "multiple_choice",
            prompt: "El verbo 'interesar' funciona igual que 'gustar'. ¿Cuál de estas oraciones es gramaticalmente correcta?",
            options: [
              "A los estudiantes les interesa la historia del arte.",
              "Los estudiantes interesan la historia del arte.",
              "A los estudiantes interesan de la historia.",
              "Les interesa los historias del arte."
            ],
            correctAnswer: "A los estudiantes les interesa la historia del arte.",
            explanation: "'La historia del arte' es el sujeto singular, por eso el verbo va en singular: les interesa."
          },
          {
            id: "es-u4-q10",
            type: "matching",
            prompt: "Empareja los instrumentos musicales con la acción verbal precisa:",
            pairs: [
              { native: "Tocar la guitarra", english: "Play the guitar", left: "La guitarra", right: "Tocar" },
              { native: "Cantar en un coro", english: "Sing in a choir", left: "En un coro", right: "Cantar" },
              { native: "Bailar salsa", english: "Dance salsa", left: "Salsa y bachata", right: "Bailar" },
              { native: "Pintar acuarelas", english: "Paint watercolors", left: "Acuarelas", right: "Pintar" }
            ]
          },
          {
            id: "es-u4-q11",
            type: "scramble",
            prompt: "Ordena los elementos para expresar un rechazo amable de invitación:",
            tokens: ["Lo", "siento,", "no", "puedo,", "tengo", "que", "estudiar."],
            correctTokens: ["Lo", "siento,", "no", "puedo,", "tengo", "que", "estudiar."],
            explanation: "Estructura de declinación cortés: Disculpa + Imposibilidad + Justificación."
          },
          {
            id: "es-u4-q12",
            type: "multiple_choice",
            prompt: "¿Cuál es el significado del verbo 'quedar con amigos' en España?",
            options: [
              "Encontrarse o citarse con amigos para pasar tiempo juntos.",
              "Pelearse o discutir fuertemente.",
              "Olvidarse de las llaves en casa.",
              "Mudarse a otra ciudad lejana."
            ],
            correctAnswer: "Encontrarse o citarse con amigos para pasar tiempo juntos.",
            explanation: "'Quedar con alguien' es el verbo fundamental para concertar citas sociales o de ocio."
          },
          {
            id: "es-u4-q13",
            type: "fill_blank",
            sentence: "¿A vosotros os ___ el cine de ciencia ficción?",
            missingWord: "gusta",
            options: ["gusta", "gustan", "gustáis", "gusto"],
            correctAnswer: "gusta",
            explanation: "El sujeto es 'el cine de ciencia ficción' (singular), por lo que corresponde 'gusta'."
          },
          {
            id: "es-u4-q14",
            type: "matching",
            prompt: "Empareja las fórmulas de aceptación o rechazo de planes:",
            pairs: [
              { native: "¡Genial, me apunto!", english: "Great, count me in!", left: "¡Genial, me apunto!", right: "Aceptar con entusiasmo" },
              { native: "Me encantaría, pero tengo planes", english: "I'd love to, but I have plans", left: "Me encantaría, pero...", right: "Rechazar amablemente" },
              { native: "De acuerdo, ¿a qué hora?", english: "Agreed, what time?", left: "De acuerdo, ¿a qué hora?", right: "Aceptar y concretar detalles" },
              { native: "No me apetece mucho hoy", english: "I don't really feel like it today", left: "No me apetece hoy", right: "Rechazar por falta de ganas" }
            ]
          },
          {
            id: "es-u4-q15",
            type: "multiple_choice",
            prompt: "Para expresar un grado máximo de gusto por encima de 'gustar mucho' utilizamos:",
            options: ["Encantar (Me encanta)", "Odiar", "Detestar", "Doler"],
            correctAnswer: "Encantar (Me encanta)",
            explanation: "'Encantar' expresa entusiasmo o pasión extrema (equivalente a 'love' en inglés)."
          },
          {
            id: "es-u4-q16",
            type: "audio_listen",
            phrase: "Los domingos me gusta descansar, leer una novela y pasear por el parque.",
            prompt: "Escucha las aficiones dominicales y selecciona la que NO menciona:",
            options: [
              "Cocinar para una fiesta de cumpleaños.",
              "Leer una novela.",
              "Descansar plácidamente.",
              "Pasear por el parque."
            ],
            correctAnswer: "Cocinar para una fiesta de cumpleaños.",
            explanation: "Menciona descansar, leer y pasear, pero en ningún momento cocinar para una fiesta."
          },
          {
            id: "es-u4-q17",
            type: "fill_blank",
            sentence: "A ella le fascinan los animales; a mí, en cambio, no me gustan ___.",
            missingWord: "nada",
            options: ["nada", "mucho", "bien", "también"],
            correctAnswer: "nada",
            explanation: "'No me gusta / gustan nada' es la forma habitual de enfatizar el desagrado completo."
          },
          {
            id: "es-u4-q18",
            type: "scramble",
            prompt: "Ordena las palabras para manifestar un interés intelectual:",
            tokens: ["Nos", "interesa", "mucho", "aprender", "nuevas", "lenguas."],
            correctTokens: ["Nos", "interesa", "mucho", "aprender", "nuevas", "lenguas."],
            explanation: "Sujeto de infinitivo ('aprender nuevas lenguas') concuerda en singular con 'interesa'."
          },
          {
            id: "es-u4-q19",
            type: "multiple_choice",
            prompt: "Si alguien dice 'No me gusta nada madrugar', ¿cuál es la respuesta que indica desacuerdo (a ti sí te gusta)?",
            options: ["A mí sí.", "A mí también.", "A mí tampoco.", "A mí no."],
            correctAnswer: "A mí sí.",
            explanation: "Para mostrar discrepancia con una frase negativa se utiliza 'A mí sí'."
          },
          {
            id: "es-u4-q20",
            type: "matching",
            prompt: "Empareja las matrices de acuerdo y desacuerdo en gustos:",
            pairs: [
              { native: "Me gusta el fútbol -> A mí también", english: "Agreement with affirmative", left: "Afirmativo + Afirmativo", right: "A mí también" },
              { native: "Me gusta el fútbol -> A mí no", english: "Disagreement with affirmative", left: "Afirmativo + Negativo", right: "A mí no" },
              { native: "No me gusta el fútbol -> A mí tampoco", english: "Agreement with negative", left: "Negativo + Negativo", right: "A mí tampoco" },
              { native: "No me gusta el fútbol -> A mí sí", english: "Disagreement with negative", left: "Negativo + Afirmativo", right: "A mí sí" }
            ]
          }
        ]
      }
    ]
  }
];
