// =========================================================================
// MCER / ELE Spanish Curriculum — Instituto Cervantes Aligned
// Block 1: 🟢 Nivel A1: Inicial (Principiante) — Units 1 to 4
// 2 Lessons per Unit • 10 Questions per Lesson = 80 Questions Total
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
        title: "Lección 1: Saludos, Alfabeto y Verbos Esenciales (Ser vs. Estar)",
        description: "Aprende los saludos básicos, el alfabeto en español y la conjugación en presente de los verbos 'ser' y 'estar'.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u1-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta del verbo 'ser' para 'Yo'?",
            options: ["Soy", "Eres", "Es", "Somos"],
            correctAnswer: "Soy",
            explanation: "'Yo soy' es la primera persona del singular del verbo irregular 'ser'."
          },
          {
            id: "es-u1-l1-q2",
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
            id: "es-u1-l1-q3",
            type: "fill_blank",
            sentence: "Hola, me ___ Mateo y soy de España.",
            missingWord: "llamo",
            options: ["llamo", "llamas", "llama", "llamar"],
            correctAnswer: "llamo",
            explanation: "Para decir el nombre usamos 'me llamo' (del verbo reflexivo llamarse)."
          },
          {
            id: "es-u1-l1-q4",
            type: "scramble",
            prompt: "Ordena las palabras para formar una presentación básica:",
            tokens: ["Hola,", "yo", "soy", "estudiante", "de", "español."],
            correctTokens: ["Hola,", "yo", "soy", "estudiante", "de", "español."],
            explanation: "Estructura canónica: Saludo + sujeto + verbo ser + atributo + complemento."
          },
          {
            id: "es-u1-l1-q5",
            type: "multiple_choice",
            prompt: "¿Cuál es la diferencia principal entre 'ser' y 'estar' en nivel inicial?",
            options: [
              "'Ser' describe identidad, origen y profesión; 'Estar' expresa ubicación y estados temporales",
              "'Estar' solo se usa para el clima",
              "'Ser' es un verbo regular en presente",
              "Significan exactamente lo mismo sin distinción"
            ],
            correctAnswer: "'Ser' describe identidad, origen y profesión; 'Estar' expresa ubicación y estados temporales",
            explanation: "'Ser' define características intrínsecas (origen, ocupación, identidad), mientras que 'estar' sitúa en el espacio o indica estados anímicos o físicos transitorios."
          },
          {
            id: "es-u1-l1-q6",
            type: "fill_blank",
            sentence: "¿Cómo ___ tú hoy? —Muy bien, gracias.",
            missingWord: "estás",
            options: ["estás", "eres", "somos", "estoy"],
            correctAnswer: "estás",
            explanation: "Para preguntar por el estado de salud o ánimo se usa el verbo estar: '¿Cómo estás?'."
          },
          {
            id: "es-u1-l1-q7",
            type: "audio_listen",
            prompt: "Escucha el saludo y elige el momento adecuado del día para usarlo:",
            audioText: "¡Buenos días! ¿Cómo amaneció hoy?",
            options: ["Por la mañana", "Por la noche antes de dormir", "A medianoche", "Durante la cena"],
            correctAnswer: "Por la mañana",
            explanation: "'¡Buenos días!' se emplea tradicionalmente desde el amanecer hasta el mediodía."
          },
          {
            id: "es-u1-l1-q8",
            type: "matching",
            prompt: "Empareja los saludos con su respuesta protocolaria habitual:",
            pairs: [
              { native: "Mucho gusto", english: "Encantado / El gusto es mío", left: "Mucho gusto", right: "Encantado / Igualmente" },
              { native: "¿Qué tal?", english: "Bien, ¿y tú?", left: "¿Qué tal?", right: "Bien, ¿y tú?" },
              { native: "Buenas noches", english: "Buenas noches / Que descanses", left: "Buenas noches", right: "Que descanses" },
              { native: "Hasta luego", english: "Nos vemos / Adiós", left: "Hasta luego", right: "Nos vemos pronto" }
            ]
          },
          {
            id: "es-u1-l1-q9",
            type: "multiple_choice",
            prompt: "¿Cuál es la terminación regular de primera persona singular (yo) para el presente de indicativo en las tres conjugaciones (-ar, -er, -ir)?",
            options: ["-o", "-as", "-e", "-en"],
            correctAnswer: "-o",
            explanation: "Prácticamente todos los verbos regulares en presente terminan en '-o' para 'yo': hablo, como, vivo."
          },
          {
            id: "es-u1-l1-q10",
            type: "fill_blank",
            sentence: "Nosotros ___ en una empresa internacional.",
            missingWord: "trabajamos",
            options: ["trabajamos", "trabajan", "trabajas", "trabajo"],
            correctAnswer: "trabajamos",
            explanation: "Para 'nosotros' en los verbos terminados en -ar la terminación es '-amos': trabajamos."
          }
        ]
      },
      {
        id: "es-u1-l2",
        title: "Lección 2: Presentaciones, Países, Nacionalidades y Números",
        description: "Aprende a indicar tu procedencia, expresar nacionalidades con concordancia de género y dominar los números del 0 al 100.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u1-l2-q1",
            type: "scramble",
            prompt: "Ordena las palabras para indicar país de origen:",
            tokens: ["Mi", "profesor", "es", "de", "Colombia."],
            correctTokens: ["Mi", "profesor", "es", "de", "Colombia."],
            explanation: "Para expresar procedencia se usa 'ser + de + país': Mi profesor es de Colombia."
          },
          {
            id: "es-u1-l2-q2",
            type: "matching",
            prompt: "Empareja cada país con la nacionalidad correspondiente (masculino):",
            pairs: [
              { native: "España", english: "Spanish", left: "España", right: "español" },
              { native: "Alemania", english: "German", left: "Alemania", right: "alemán" },
              { native: "Francia", english: "French", left: "Francia", right: "francés" },
              { native: "Japón", english: "Japanese", left: "Japón", right: "japonés" }
            ]
          },
          {
            id: "es-u1-l2-q3",
            type: "multiple_choice",
            prompt: "Si María nació en México, ¿cuál es su nacionalidad en femenino?",
            options: ["Mexicana", "Mexicano", "Mexicanas", "México"],
            correctAnswer: "Mexicana",
            explanation: "Las nacionalidades concuerdan en género con el sujeto: María es mexicana."
          },
          {
            id: "es-u1-l2-q4",
            type: "fill_blank",
            sentence: "Tengo ___ años y mi hermano tiene quince.",
            missingWord: "veinte",
            options: ["veinte", "veinti", "veintes", "vigésimo"],
            correctAnswer: "veinte",
            explanation: "El número cardinal para 20 es 'veinte'. La edad en español se expresa con el verbo 'tener'."
          },
          {
            id: "es-u1-l2-q5",
            type: "scramble",
            prompt: "Ordena los números de menor a mayor:",
            tokens: ["diez,", "veinte,", "treinta,", "cuarenta."],
            correctTokens: ["diez,", "veinte,", "treinta,", "cuarenta."],
            explanation: "Serie de decenas: 10, 20, 30, 40."
          },
          {
            id: "es-u1-l2-q6",
            type: "multiple_choice",
            prompt: "¿Cuál es la letra característica del alfabeto español que no existe en el alfabeto inglés básico?",
            options: ["Ñ / ñ", "W / w", "K / k", "H / h"],
            correctAnswer: "Ñ / ñ",
            explanation: "La 'eñe' (Ñ, ñ) con virgulilla es la letra distintiva del alfabeto español y representa el fonema nasal palatal /ɲ/."
          },
          {
            id: "es-u1-l2-q7",
            type: "fill_blank",
            sentence: "Disculpe, ¿cómo se ___ su apellido? —G-A-R-C-Í-A.",
            missingWord: "deletrea",
            options: ["deletrea", "escribe", "pronuncia", "llama"],
            correctAnswer: "deletrea",
            explanation: "'Deletrear' significa decir una a una las letras de una palabra."
          },
          {
            id: "es-u1-l2-q8",
            type: "matching",
            prompt: "Empareja los números escritos con sus cifras:",
            pairs: [
              { native: "Doce", english: "12", left: "Doce", right: "12" },
              { native: "Quince", english: "15", left: "Quince", right: "15" },
              { native: "Cincuenta", english: "50", left: "Cincuenta", right: "50" },
              { native: "Cien", english: "100", left: "Cien", right: "100" }
            ]
          },
          {
            id: "es-u1-l2-q9",
            type: "audio_listen",
            prompt: "Escucha el diálogo y selecciona la profesión correcta:",
            audioText: "Soy Laura, soy médica y trabajo en el hospital central de Madrid.",
            options: ["Médica en un hospital", "Profesora en una escuela", "Abogada en un bufete", "Ingeniera de sistemas"],
            correctAnswer: "Médica en un hospital",
            explanation: "Laura indica con claridad su profesión: 'soy médica y trabajo en el hospital central'."
          },
          {
            id: "es-u1-l2-q10",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta de preguntar la procedencia de alguien de manera formal (usted)?",
            options: ["¿De dónde es usted?", "¿De dónde eres tú?", "¿Dónde estás?", "¿Cómo te llamas?"],
            correctAnswer: "¿De dónde es usted?",
            explanation: "Para dirigirse a alguien con respeto formal se utiliza 'usted' con el verbo en tercera persona: '¿De dónde es usted?'."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 2: Mi Día a Día (My Day-to-Day Life)
  // =========================================================================
  {
    id: "es-unit-2",
    unitId: "es-unit-2",
    unitNumber: 2,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 2: Mi Día a Día (My Day-to-Day Life)",
    subtitle: "Verbos reflexivos, verbos con cambio de raíz (e➔ie, o➔ue), la hora y rutinas cotidianas.",
    icon: "Sun",
    color: "#10b981",
    lessons: [
      {
        id: "es-u2-l1",
        title: "Lección 1: La Hora, Días de la Semana y Verbos Reflexivos",
        description: "Aprende a decir la hora, los días de la semana y a conjugar verbos reflexivos como levantarse, ducharse y vestirse.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u2-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuáles son los pronombres reflexivos correspondientes a 'yo', 'tú', 'él/ella' y 'nosotros'?",
            options: ["Me, te, se, nos", "Mi, tu, su, nuestro", "Lo, la, le, les", "Yo, tú, él, nosotros"],
            correctAnswer: "Me, te, se, nos",
            explanation: "Los pronombres reflexivos para las personas gramaticales son: me, te, se, nos, os, se."
          },
          {
            id: "es-u2-l1-q2",
            type: "fill_blank",
            sentence: "Todas las mañanas yo ___ levanto a las siete.",
            missingWord: "me",
            options: ["me", "te", "se", "nos"],
            correctAnswer: "me",
            explanation: "Con el pronombre sujeto 'yo' el pronombre reflexivo obligatorio es 'me': 'yo me levanto'."
          },
          {
            id: "es-u2-l1-q3",
            type: "matching",
            prompt: "Empareja la rutina diaria con el verbo reflexivo:",
            pairs: [
              { native: "Ducharse", english: "To shower", left: "Ducharse", right: "Lavar el cuerpo con agua" },
              { native: "Peinarse", english: "To comb one's hair", left: "Peinarse", right: "Arreglar el cabello" },
              { native: "Cepillarse los dientes", english: "To brush teeth", left: "Cepillarse", right: "Limpiar los dientes con cepillo" },
              { native: "Acostarse", english: "To go to bed", left: "Acostarse", right: "Ir a la cama a dormir" }
            ]
          },
          {
            id: "es-u2-l1-q4",
            type: "scramble",
            prompt: "Ordena las palabras para decir la hora en español:",
            tokens: ["Son", "las", "ocho", "y", "media", "de", "la", "mañana."],
            correctTokens: ["Son", "las", "ocho", "y", "media", "de", "la", "mañana."],
            explanation: "Fórmula de la hora: Son las + hora + y + minutos + momento del día (de la mañana)."
          },
          {
            id: "es-u2-l1-q5",
            type: "multiple_choice",
            prompt: "¿Cómo se dice la 1:00 en punto?",
            options: ["Es la una en punto", "Son las una en punto", "Son los una en punto", "Está la una"],
            correctAnswer: "Es la una en punto",
            explanation: "Para la 1:00 se usa singular: 'Es la una'. Para las demás horas se usa plural: 'Son las dos, son las tres...'."
          },
          {
            id: "es-u2-l1-q6",
            type: "fill_blank",
            sentence: "¿A qué hora ___ acuestas habitualmente?",
            missingWord: "te",
            options: ["te", "se", "me", "le"],
            correctAnswer: "te",
            explanation: "La segunda persona informal ('tú') usa el pronombre reflexivo 'te': '¿A qué hora te acuestas?'."
          },
          {
            id: "es-u2-l1-q7",
            type: "matching",
            prompt: "Empareja los días de la semana con su orden cronológico:",
            pairs: [
              { native: "Lunes", english: "Monday (1st day)", left: "Lunes", right: "Primer día laboral" },
              { native: "Miércoles", english: "Wednesday (midweek)", left: "Miércoles", right: "Mitad de semana" },
              { native: "Viernes", english: "Friday (end of work week)", left: "Viernes", right: "Último día laboral" },
              { native: "Domingo", english: "Sunday (rest day)", left: "Domingo", right: "Día de descanso" }
            ]
          },
          {
            id: "es-u2-l1-q8",
            type: "scramble",
            prompt: "Ordena los elementos para estructurar una rutina matutina:",
            tokens: ["Primero", "me", "ducho", "y", "luego", "desayuno."],
            correctTokens: ["Primero", "me", "ducho", "y", "luego", "desayuno."],
            explanation: "Conectores de secuencia temporal: Primero... luego..."
          },
          {
            id: "es-u2-l1-q9",
            type: "multiple_choice",
            prompt: "¿Cuál es el artículo correcto antes de los días de la semana en español?",
            options: ["El / Los (El lunes tengo reunión)", "En (En lunes tengo reunión)", "A (A lunes tengo reunión)", "De (De lunes tengo reunión)"],
            correctAnswer: "El / Los (El lunes tengo reunión)",
            explanation: "En español se usa el artículo determinado masculino 'el' para un día específico y 'los' para hábitos: 'El lunes voy al médico; los sábados descanso'."
          },
          {
            id: "es-u2-l1-q10",
            type: "audio_listen",
            prompt: "Escucha la hora mencionada en el anuncio y elígela:",
            audioText: "El tren de cercanías con destino a Toledo saldrá a las cuatro menos cuarto.",
            options: ["3:45 (cuatro menos cuarto)", "4:15 (cuatro y cuarto)", "4:00 en punto", "3:30 (tres y media)"],
            correctAnswer: "3:45 (cuatro menos cuarto)",
            explanation: "'Las cuatro menos cuarto' equivale a las 3:45 (faltan quince minutos para las cuatro)."
          }
        ]
      },
      {
        id: "es-u2-l2",
        title: "Lección 2: Hábitos Cotidianos y Verbos con Cambio de Raíz (e➔ie, o➔ue)",
        description: "Domina las irregularidades vocálicas del presente indicativo (empezar, volver, poder, dormir) y describe tus hábitos con marcadores de frecuencia.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u2-l2-q1",
            type: "multiple_choice",
            prompt: "En el verbo con cambio de raíz 'empezar' (e ➔ ie), ¿cuál es la conjugación de 'Él'?",
            options: ["Empieza", "Empeza", "Empezará", "Empiezo"],
            correctAnswer: "Empieza",
            explanation: "El verbo empezar diptonga en presente en todas las personas excepto nosotros y vosotros: él empieza."
          },
          {
            id: "es-u2-l2-q2",
            type: "fill_blank",
            sentence: "La clase de español ___ a las nueve en punto.",
            missingWord: "empieza",
            options: ["empieza", "empeza", "empezamos", "empezar"],
            correctAnswer: "empieza",
            explanation: "Tercera persona singular con cambio vocálico e ➔ ie: 'empieza'."
          },
          {
            id: "es-u2-l2-q3",
            type: "matching",
            prompt: "Empareja los verbos diptongados con su cambio de raíz característico:",
            pairs: [
              { native: "Querer (yo quiero)", english: "e ➔ ie", left: "Querer", right: "e ➔ ie" },
              { native: "Dormir (yo duermo)", english: "o ➔ ue", left: "Dormir", right: "o ➔ ue" },
              { native: "Poder (yo puedo)", english: "o ➔ ue", left: "Poder", right: "o ➔ ue" },
              { native: "Pedir (yo pido)", english: "e ➔ i", left: "Pedir", right: "e ➔ i" }
            ]
          },
          {
            id: "es-u2-l2-q4",
            type: "multiple_choice",
            prompt: "¿Qué personas gramaticales NUNCA cambian la raíz en los verbos con diptongación en presente de indicativo?",
            options: ["Nosotros y vosotros", "Yo y tú", "Él y ellos", "Solo ellos"],
            correctAnswer: "Nosotros y vosotros",
            explanation: "En 'nosotros' y 'vosotros' el acento prosódico recae sobre la desinencia, por lo que se mantiene la raíz regular (ej. queremos, queréis; dormimos, dormís)."
          },
          {
            id: "es-u2-l2-q5",
            type: "fill_blank",
            sentence: "Nosotros ___ ocho horas cada noche.",
            missingWord: "dormimos",
            options: ["dormimos", "duermimos", "duermen", "duermo"],
            correctAnswer: "dormimos",
            explanation: "'Nosotros' mantiene la vocal original sin diptongar: 'dormimos'."
          },
          {
            id: "es-u2-l2-q6",
            type: "scramble",
            prompt: "Ordena las palabras para expresar frecuencia de una actividad:",
            tokens: ["Siempre", "desayuno", "café", "con", "tostadas."],
            correctTokens: ["Siempre", "desayuno", "café", "con", "tostadas."],
            explanation: "El adverbio de frecuencia 'siempre' suele situarse al inicio o tras el verbo."
          },
          {
            id: "es-u2-l2-q7",
            type: "matching",
            prompt: "Empareja los marcadores de frecuencia de mayor a menor intensidad:",
            pairs: [
              { native: "Siempre", english: "100% of the time", left: "Siempre", right: "Todos los días sin excepción" },
              { native: "A menudo / Frecuentemente", english: "Frequently / Often", left: "A menudo", right: "Con bastante regularidad" },
              { native: "A veces", english: "Sometimes", left: "A veces", right: "En algunas ocasiones" },
              { native: "Nunca", english: "Never (0%)", left: "Nunca", right: "En ninguna ocasión" }
            ]
          },
          {
            id: "es-u2-l2-q8",
            type: "fill_blank",
            sentence: "¿A qué hora ___ tú del trabajo a casa?",
            missingWord: "vuelves",
            options: ["vuelves", "volves", "volver", "vuelve"],
            correctAnswer: "vuelves",
            explanation: "El verbo 'volver' cambia o ➔ ue en segunda persona singular: 'tú vuelves'."
          },
          {
            id: "es-u2-l2-q9",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta para decir: 'I cannot go tonight'?",
            options: ["No puedo ir esta noche", "No podo ir esta noche", "No pudir esta noche", "No poder ir esta noche"],
            correctAnswer: "No puedo ir esta noche",
            explanation: "Poder es irregular (o ➔ ue) en primera persona: 'yo puedo'."
          },
          {
            id: "es-u2-l2-q10",
            type: "scramble",
            prompt: "Ordena las palabras para describir un hábito vespertino:",
            tokens: ["Por", "las", "tardes", "hago", "deporte", "en", "el", "parque."],
            correctTokens: ["Por", "las", "tardes", "hago", "deporte", "en", "el", "parque."],
            explanation: "Expresión temporal habitual: 'Por las tardes + verbo conjugado + complemento'."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 3: El Entorno Próximo (My Immediate Environment)
  // =========================================================================
  {
    id: "es-unit-3",
    unitId: "es-unit-3",
    unitNumber: 3,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 3: El Entorno Próximo (My Immediate Environment)",
    subtitle: "Preposiciones de lugar, artículos, descripción de la vivienda y pedir/dar direcciones.",
    icon: "Home",
    color: "#10b981",
    lessons: [
      {
        id: "es-u3-l1",
        title: "Lección 1: La Casa, el Barrio y Preposiciones de Lugar",
        description: "Aprende el vocabulario de las estancias de una vivienda, el mobiliario y las preposiciones espaciales (encima, debajo, al lado).",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u3-l1-q1",
            type: "multiple_choice",
            prompt: "¿Qué preposición compuesta significa 'on top of'?",
            options: ["Encima de", "Debajo de", "Al lado de", "Detrás de"],
            correctAnswer: "Encima de",
            explanation: "'Encima de' indica contacto o posición superior sobre una superficie."
          },
          {
            id: "es-u3-l1-q2",
            type: "fill_blank",
            sentence: "Las llaves están ___ de la mesa del comedor.",
            missingWord: "encima",
            options: ["encima", "sobre de", "arriba", "dentro"],
            correctAnswer: "encima",
            explanation: "La locución correcta es 'encima de'."
          },
          {
            id: "es-u3-l1-q3",
            type: "matching",
            prompt: "Empareja los opuestos espaciales:",
            pairs: [
              { native: "Encima de", english: "Above / on top of", left: "Encima de", right: "Debajo de" },
              { native: "Delante de", english: "In front of", left: "Delante de", right: "Detrás de" },
              { native: "Cerca de", english: "Near", left: "Cerca de", right: "Lejos de" },
              { native: "Dentro de", english: "Inside of", left: "Dentro de", right: "Fuera de" }
            ]
          },
          {
            id: "es-u3-l1-q4",
            type: "scramble",
            prompt: "Ordena las palabras para ubicar un objeto en la habitación:",
            tokens: ["La", "cama", "está", "al", "lado", "de", "la", "ventana."],
            correctTokens: ["La", "cama", "está", "al", "lado", "de", "la", "ventana."],
            explanation: "Estructura de ubicación espacial: Sujeto + está + locución preposicional (al lado de) + referencia."
          },
          {
            id: "es-u3-l1-q5",
            type: "multiple_choice",
            prompt: "¿Cuáles son las formas del artículo indeterminado (indefinido) en español?",
            options: ["Un, una, unos, unas", "El, la, los, las", "Lo, los, las", "Este, esta, estos, estas"],
            correctAnswer: "Un, una, unos, unas",
            explanation: "Los artículos indeterminados son: un (masc. sing.), una (fem. sing.), unos (masc. pl.), unas (fem. pl.)."
          },
          {
            id: "es-u3-l1-q6",
            type: "fill_blank",
            sentence: "Mi piso tiene ___ salón muy luminoso y tres dormitorios.",
            missingWord: "un",
            options: ["un", "una", "el", "unos"],
            correctAnswer: "un",
            explanation: "'Salón' es un sustantivo masculino singular, por lo que requiere el artículo indeterminado 'un'."
          },
          {
            id: "es-u3-l1-q7",
            type: "matching",
            prompt: "Empareja las habitaciones de la casa con su función habitual:",
            pairs: [
              { native: "La cocina", english: "Kitchen", left: "La cocina", right: "Preparar alimentos y cocinar" },
              { native: "El dormitorio", english: "Bedroom", left: "El dormitorio", right: "Dormir y descansar" },
              { native: "El cuarto de baño", english: "Bathroom", left: "El cuarto de baño", right: "Aseo personal e higiene" },
              { native: "El salón", english: "Living room", left: "El salón", right: "Reunirse y ver televisión" }
            ]
          },
          {
            id: "es-u3-l1-q8",
            type: "multiple_choice",
            prompt: "¿Cuándo se usa 'Hay' frente a 'Está / Están'?",
            options: [
              "'Hay' expresa existencia de elementos indeterminados o cantidades; 'Está/Están' localiza elementos específicos conocidos",
              "'Hay' solo se usa para personas",
              "'Está' solo se usa para el pasado",
              "Son completamente intercambiables"
            ],
            correctAnswer: "'Hay' expresa existencia de elementos indeterminados o cantidades; 'Está/Están' localiza elementos específicos conocidos",
            explanation: "Regla fundamental: 'Hay un hospital cerca' (existencia de elemento no concreto) vs. 'El hospital está en la calle Mayor' (ubicación de elemento concreto)."
          },
          {
            id: "es-u3-l1-q9",
            type: "scramble",
            prompt: "Ordena los elementos para describir un piso céntrico:",
            tokens: ["En", "mi", "barrio", "hay", "muchas", "tiendas", "antiguas."],
            correctTokens: ["En", "mi", "barrio", "hay", "muchas", "tiendas", "antiguas."],
            explanation: "Uso de 'hay' para existencia indeterminada con cuantificador ('muchas tiendas')."
          },
          {
            id: "es-u3-l1-q10",
            type: "audio_listen",
            prompt: "Escucha la descripción del piso y selecciona el número de habitaciones:",
            audioText: "Es un apartamento moderno en la tercera planta con dos dormitorios y un balcón soleado.",
            options: ["Dos dormitorios", "Cuatro dormitorios", "Un solo dormitorio", "Cinco dormitorios"],
            correctAnswer: "Dos dormitorios",
            explanation: "El audio menciona con nitidez: 'dos dormitorios y un balcón soleado'."
          }
        ]
      },
      {
        id: "es-u3-l2",
        title: "Lección 2: Tiendas de Barrio, Comestibles y Direcciones Urbanas",
        description: "Aprende a pedir productos en tiendas de comestibles, consultar precios y pedir y dar indicaciones para moverte por la ciudad.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u3-l2-q1",
            type: "multiple_choice",
            prompt: "¿Dónde compras pan fresco cada mañana en el barrio?",
            options: ["En la panadería", "En la farmacia", "En la librería", "En la zapatería"],
            correctAnswer: "En la panadería",
            explanation: "El sufijo '-ería' en español indica frecuentemente el establecimiento de venta: panadería, carnicería, pescadería, frutería."
          },
          {
            id: "es-u3-l2-q2",
            type: "fill_blank",
            sentence: "¿Cuánto ___ este kilo de manzanas? —Cuesta dos euros.",
            missingWord: "cuesta",
            options: ["cuesta", "cuestan", "vale", "precio"],
            correctAnswer: "cuesta",
            explanation: "'Este kilo de manzanas' es singular, por tanto el verbo concuerda en singular: 'cuesta'."
          },
          {
            id: "es-u3-l2-q3",
            type: "matching",
            prompt: "Empareja las tiendas con los productos que venden:",
            pairs: [
              { native: "Carnicería", english: "Butcher shop", left: "Carnicería", right: "Filetes de ternera y pollo" },
              { native: "Pescadería", english: "Fish market", left: "Pescadería", right: "Merluza, salmón y marisco" },
              { native: "Frutería", english: "Greengrocer", left: "Frutería", right: "Naranjas, plátanos y lechugas" },
              { native: "Farmacia", english: "Pharmacy", left: "Farmacia", right: "Medicamentos y tiritas" }
            ]
          },
          {
            id: "es-u3-l2-q4",
            type: "scramble",
            prompt: "Ordena las palabras para pedir un alimento con cortesía:",
            tokens: ["Quisiera", "un", "kilo", "de", "tomates,", "por", "favor."],
            correctTokens: ["Quisiera", "un", "kilo", "de", "tomates,", "por", "favor."],
            explanation: "La fórmula 'quisiera + sustantivo' es la forma habitual y educada de pedir algo en comercios."
          },
          {
            id: "es-u3-l2-q5",
            type: "fill_blank",
            sentence: "Disculpe, ¿para ir a la estación de tren se sigue todo ___?",
            missingWord: "recto",
            options: ["recto", "derecho", "enfrente", "izquierda"],
            correctAnswer: "recto",
            explanation: "Para indicar que no se doble ni se gire, se dice 'todo recto' (o 'todo derecho' en Hispanoamérica)."
          },
          {
            id: "es-u3-l2-q6",
            type: "matching",
            prompt: "Empareja las instrucciones de orientación en la calle:",
            pairs: [
              { native: "Gira a la derecha", english: "Turn right", left: "A la derecha", right: "Girar hacia la mano derecha" },
              { native: "Gira a la izquierda", english: "Turn left", left: "A la izquierda", right: "Girar hacia la mano izquierda" },
              { native: "Sigue todo recto", english: "Go straight on", left: "Todo recto", right: "Continuar hacia adelante sin desviarse" },
              { native: "Cruza la calle", english: "Cross the street", left: "Cruzar", right: "Pasar de una acera a otra" }
            ]
          },
          {
            id: "es-u3-l2-q7",
            type: "scramble",
            prompt: "Ordena las palabras para pedir una dirección a un transeúnte:",
            tokens: ["¿Dónde", "está", "la", "boca", "de", "metro", "más", "cercana?"],
            correctTokens: ["¿Dónde", "está", "la", "boca", "de", "metro", "más", "cercana?"],
            explanation: "Estructura interrogativa de localización: ¿Dónde está + el lugar?"
          },
          {
            id: "es-u3-l2-q8",
            type: "multiple_choice",
            prompt: "En la contracción gramatical obligatoria en español: 'a + el' y 'de + el', ¿cuáles son los resultados?",
            options: ["Al y del", "Ael y deel", "A el y de el", "Ál y dél"],
            correctAnswer: "Al y del",
            explanation: "En español es preceptivo contraer la preposición y el artículo masculino: a + el = al; de + el = del ('Voy al supermercado')."
          },
          {
            id: "es-u3-l2-q9",
            type: "fill_blank",
            sentence: "Por las mañanas voy ___ mercado a comprar pescado fresco.",
            missingWord: "al",
            options: ["al", "a el", "del", "en el"],
            correctAnswer: "al",
            explanation: "Contracción de 'a' + 'el' = 'al mercado'."
          },
          {
            id: "es-u3-l2-q10",
            type: "multiple_choice",
            prompt: "¿Cuál es la respuesta idónea cuando el dependiente pregunta: '¿Desea alguna cosa más?'?",
            options: ["Nada más, gracias; ¿cuánto es?", "Buenos días, soy María", "Tengo dos hermanos", "Vivo en el segundo piso"],
            correctAnswer: "Nada más, gracias; ¿cuánto es?",
            explanation: "Fórmula habitual para cerrar la compra y solicitar el importe total."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 4: Tiempo Libre (Leisure Time)
  // =========================================================================
  {
    id: "es-unit-4",
    unitId: "es-unit-4",
    unitNumber: 4,
    level: "Nivel A1: Inicial (Principiante)",
    title: "Unidad 4: Tiempo Libre (Leisure Time)",
    subtitle: "Estructuración de verbos como gustar, encantar, interesar, deportes, hobbies y planes con amigos.",
    icon: "Smile",
    color: "#10b981",
    lessons: [
      {
        id: "es-u4-l1",
        title: "Lección 1: Aficiones, Deportes y la Estructura de 'Gustar'",
        description: "Comprende la sintaxis especial del verbo gustar (me/te/le gusta/gustan), encantar, interesar y describe tus pasatiempos favoritos.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u4-l1-q1",
            type: "multiple_choice",
            prompt: "¿Por qué se dice 'Me gustan los deportes' y no 'Me gusta los deportes'?",
            options: [
              "Porque el verbo concuerda con el sujeto pospuesto ('los deportes' es plural)",
              "Porque 'me' es plural",
              "Porque es una excepción sin regla",
              "Porque es una orden"
            ],
            correctAnswer: "Porque el verbo concuerda con el sujeto pospuesto ('los deportes' es plural)",
            explanation: "En la construcción con el verbo gustar, lo que agrada es el sujeto gramatical. Al ser plural ('los deportes'), el verbo adopta forma plural: 'gustan'."
          },
          {
            id: "es-u4-l1-q2",
            type: "fill_blank",
            sentence: "A mí me ___ mucho leer novelas históricas.",
            missingWord: "gusta",
            options: ["gusta", "gustan", "gusto", "gustas"],
            correctAnswer: "gusta",
            explanation: "Cuando lo que gusta es una acción en infinitivo ('leer novelas'), el verbo gustar siempre permanece en singular: 'gusta'."
          },
          {
            id: "es-u4-l1-q3",
            type: "matching",
            prompt: "Empareja los pronombres de objeto indirecto con las personas a las que corresponden:",
            pairs: [
              { native: "A mí", english: "Me gusta", left: "A mí", right: "me" },
              { native: "A ti", english: "Te gusta", left: "A ti", right: "te" },
              { native: "A él / ella / usted", english: "Le gusta", left: "A él / ella", right: "le" },
              { native: "A nosotros / nosotras", english: "Nos gusta", left: "A nosotros", right: "nos" }
            ]
          },
          {
            id: "es-u4-l1-q4",
            type: "scramble",
            prompt: "Ordena las palabras para expresar un gran entusiasmo por el arte:",
            tokens: ["A", "mi", "hermana", "le", "encanta", "la", "música", "clásica."],
            correctTokens: ["A", "mi", "hermana", "le", "encanta", "la", "música", "clásica."],
            explanation: "Estructura completa de énfasis: A + persona ('A mi hermana') + pronombre ('le') + verbo ('encanta') + sujeto ('la música clásica')."
          },
          {
            id: "es-u4-l1-q5",
            type: "multiple_choice",
            prompt: "¿Qué verbo funciona exactamente con la misma estructura que 'gustar'?",
            options: ["Encantar / Interesar", "Comer / Beber", "Hacer / Salir", "Escribir / Leer"],
            correctAnswer: "Encantar / Interesar",
            explanation: "Verbos afectivos y de interés como encantar, interesar, fascinar o molestar se construyen idénticamente a gustar."
          },
          {
            id: "es-u4-l1-q6",
            type: "fill_blank",
            sentence: "A mis amigos no les ___ los videojuegos de acción.",
            missingWord: "interesan",
            options: ["interesan", "interesa", "intereso", "interesar"],
            correctAnswer: "interesan",
            explanation: "'Los videojuegos' es sujeto plural, por lo que exige 'interesan'."
          },
          {
            id: "es-u4-l1-q7",
            type: "matching",
            prompt: "Empareja los deportes con el verbo adecuado ('jugar a' vs. 'hacer'):",
            pairs: [
              { native: "Fútbol / Baloncesto / Tenis", english: "Play a sport with ball", left: "Deportes de pelota / equipo", right: "Jugar al (fútbol, tenis...)" },
              { native: "Natación / Atletismo / Senderismo", english: "Do an exercise", left: "Actividades físicas individuales", right: "Hacer (natación, yoga...)" },
              { native: "Montar en bicicleta", english: "Ride a bicycle", left: "Ciclismo", right: "Montar en bici" },
              { native: "Tocar la guitarra", english: "Play an instrument", left: "Instrumentos musicales", right: "Tocar (el piano, la guitarra...)" }
            ]
          },
          {
            id: "es-u4-l1-q8",
            type: "multiple_choice",
            prompt: "En español, para los instrumentos musicales, ¿qué verbo se utiliza?",
            options: ["Tocar (Toco la guitarra)", "Jugar (Juego la guitarra)", "Hacer (Hago la guitarra)", "Dar (Doy la guitarra)"],
            correctAnswer: "Tocar (Toco la guitarra)",
            explanation: "En español nunca se dice 'jugar' para instrumentos musicales; se usa el verbo 'tocar'."
          },
          {
            id: "es-u4-l1-q9",
            type: "fill_blank",
            sentence: "¿A ti te gusta ___ al tenis los fines de semana?",
            missingWord: "jugar",
            options: ["jugar", "tocar", "hacer", "correr"],
            correctAnswer: "jugar",
            explanation: "Con deportes de pelota como el tenis se usa 'jugar al tenis'."
          },
          {
            id: "es-u4-l1-q10",
            type: "audio_listen",
            prompt: "Escucha el pasatiempo favorito de Javier y selecciónalo:",
            audioText: "En mi tiempo libre me encanta salir a la montaña y hacer senderismo con mis amigos.",
            options: ["Hacer senderismo en la montaña", "Jugar a videojuegos en el salón", "Ver partidos de fútbol en televisión", "Ir de compras al centro comercial"],
            correctAnswer: "Hacer senderismo en la montaña",
            explanation: "Javier declara: 'me encanta salir a la montaña y hacer senderismo'."
          }
        ]
      },
      {
        id: "es-u4-l2",
        title: "Lección 2: Hacer Planes, Acordar Encuentros y Grados de Preferencia",
        description: "Aprende a invitar, proponer planes de ocio, acordar fechas y expresar acuerdo o desacuerdo en gustos (a mí también, a mí tampoco).",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u4-l2-q1",
            type: "scramble",
            prompt: "Ordena las palabras para proponer un plan de cine a un amigo:",
            tokens: ["¿Quieres", "venir", "al", "cine", "este", "viernes?"],
            correctTokens: ["¿Quieres", "venir", "al", "cine", "este", "viernes?"],
            explanation: "Fórmula de invitación: '¿Quieres + infinitivo + momento?'."
          },
          {
            id: "es-u4-l2-q2",
            type: "fill_blank",
            sentence: "¿Qué te ___ si quedamos mañana a las cinco?",
            missingWord: "parece",
            options: ["parece", "gusta", "piensas", "haces"],
            correctAnswer: "parece",
            explanation: "'¿Qué te parece si...?' es la fórmula conversacional por excelencia para sugerir un plan."
          },
          {
            id: "es-u4-l2-q3",
            type: "matching",
            prompt: "Empareja las propuestas de planes con su respuesta de aceptación:",
            pairs: [
              { native: "¿Vamos a cenar unas tapas?", english: "Great idea!", left: "¿Vamos a tomar algo?", right: "¡Vale, me parece genial!" },
              { native: "¿Te apetece ver una película?", english: "I'd love to!", left: "¿Te apetece una peli?", right: "¡Me encantaría, de acuerdo!" },
              { native: "¿Nos vemos a las ocho en la plaza?", english: "Perfect, see you there", left: "¿A las ocho en la plaza?", right: "Perfecto, allí nos vemos." },
              { native: "¿Vienes al concierto de rock?", english: "I can't, I have to work", left: "¿Vienes al concierto?", right: "Lo siento, tengo que trabajar." }
            ]
          },
          {
            id: "es-u4-l2-q4",
            type: "multiple_choice",
            prompt: "Si alguien dice 'Me encanta el cine español' y tú compartes el mismo gusto afirmativo, ¿qué respondes?",
            options: ["A mí también", "A mí tampoco", "A mí no", "Yo no"],
            correctAnswer: "A mí también",
            explanation: "Para coincidir con una afirmación sobre gustos se dice 'A mí también'."
          },
          {
            id: "es-u4-l2-q5",
            type: "multiple_choice",
            prompt: "Si alguien dice 'No me gusta nada el frío' y tú estás de acuerdo con esa frase negativa, ¿qué respondes?",
            options: ["A mí tampoco", "A mí también", "A mí sí", "Yo tampoco no"],
            correctAnswer: "A mí tampoco",
            explanation: "Para coincidir con una negación sobre gustos se dice 'A mí tampoco'."
          },
          {
            id: "es-u4-l2-q6",
            type: "fill_blank",
            sentence: "A mí no me gusta el té. —A mí ___, prefiero el café.",
            missingWord: "tampoco",
            options: ["tampoco", "también", "sí", "no"],
            correctAnswer: "tampoco",
            explanation: "Coincidencia negativa: 'A mí tampoco'."
          },
          {
            id: "es-u4-l2-q7",
            type: "scramble",
            prompt: "Ordena las palabras para expresar un gran interés por aprender lenguas:",
            tokens: ["Nos", "interesa", "mucho", "aprender", "nuevas", "lenguas."],
            correctTokens: ["Nos", "interesa", "mucho", "aprender", "nuevas", "lenguas."],
            explanation: "Sujeto de infinitivo ('aprender nuevas lenguas') concuerda en singular con 'interesa'."
          },
          {
            id: "es-u4-l2-q8",
            type: "multiple_choice",
            prompt: "Si alguien dice 'No me gusta nada madrugar', ¿cuál es la respuesta que indica desacuerdo (a ti sí te gusta)?",
            options: ["A mí sí.", "A mí también.", "A mí tampoco.", "A mí no."],
            correctAnswer: "A mí sí.",
            explanation: "Para mostrar discrepancia con una frase negativa se utiliza 'A mí sí'."
          },
          {
            id: "es-u4-l2-q9",
            type: "matching",
            prompt: "Empareja las matrices de acuerdo y desacuerdo en gustos:",
            pairs: [
              { native: "Me gusta el fútbol -> A mí también", english: "Agreement with affirmative", left: "Afirmativo + Afirmativo", right: "A mí también" },
              { native: "Me gusta el fútbol -> A mí no", english: "Disagreement with affirmative", left: "Afirmativo + Negativo", right: "A mí no" },
              { native: "No me gusta el fútbol -> A mí tampoco", english: "Agreement with negative", left: "Negativo + Negativo", right: "A mí tampoco" },
              { native: "No me gusta el fútbol -> A mí sí", english: "Disagreement with negative", left: "Negativo + Afirmativo", right: "A mí sí" }
            ]
          },
          {
            id: "es-u4-l2-q10",
            type: "fill_blank",
            sentence: "¿A vosotros ___ gusta viajar al extranjero durante las vacaciones?",
            missingWord: "os",
            options: ["os", "les", "nos", "te"],
            correctAnswer: "os",
            explanation: "El pronombre correspondiente a 'vosotros' es 'os': '¿A vosotros os gusta...?'."
          }
        ]
      }
    ]
  }
];
