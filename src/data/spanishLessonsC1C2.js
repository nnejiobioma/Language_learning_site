// =========================================================================
// MCER / ELE Spanish Curriculum — Instituto Cervantes Aligned
// Block 5: 🔴 Nivel C1/C2: Dominio Operativo Eficaz y Maestría — Units 17 to 20
// 2 Lessons per Unit • 10 Questions per Lesson = 80 Questions Total
// =========================================================================

export const spanishC1C2Units = [
  // =========================================================================
  // Unit 17: Variedades del Español (Varieties of Spanish)
  // =========================================================================
  {
    id: "es-unit-17",
    unitId: "es-unit-17",
    unitNumber: 17,
    level: "Nivel C1/C2: Maestría (Avanzado Superior)",
    title: "Unidad 17: Variedades del Español (Varieties of Spanish)",
    subtitle: "Dialectología panhispánica, reglas del voseo, arcaísmos y acentos del mundo hispano.",
    icon: "Globe",
    color: "#ef4444",
    lessons: [
      {
        id: "es-u17-l1",
        title: "Lección 1: Dialectología Panhispánica, Voseo y Fonética",
        description: "Comprende el voseo pronominal y verbal (Río de la Plata, Centroamérica), el seseo mayoritario y el rehilamiento fonético.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u17-l1-q1",
            type: "multiple_choice",
            prompt: "¿En qué consiste el fenómeno del 'voseo' en el español de América?",
            options: [
              "En el uso del pronombre 'vos' en lugar de 'tú' para la segunda persona singular de confianza",
              "En hablar siempre en tono poético",
              "En sustituir 'nosotros' por 'vosotros'",
              "En eliminar las consonantes finales"
            ],
            correctAnswer: "En el uso del pronombre 'vos' en lugar de 'tú' para la segunda persona singular de confianza",
            explanation: "El voseo pronominal y verbal es la norma culta en el Río de la Plata (Argentina y Uruguay) y se extiende por amplias zonas de Centroamérica, Colombia y los Andes."
          },
          {
            id: "es-u17-l1-q2",
            type: "fill_blank",
            sentence: "En Argentina, en lugar de 'tú tienes', se conjuga habitualmente: 'vos ___'.",
            missingWord: "tenés",
            options: ["tenés", "tienes", "tenéis", "tengas"],
            correctAnswer: "tenés",
            explanation: "El voseo verbal rioplatense conserva el acento en la última sílaba: vos tenés, vos hablás, vos vivís."
          },
          {
            id: "es-u17-l1-q3",
            type: "matching",
            prompt: "Empareja las formas verbales de 'tú' con sus equivalentes de 'vos' en presente:",
            pairs: [
              { native: "Tú cantas -> Vos cantás", english: "You sing (voseo)", left: "Tú cantas", right: "Vos cantás" },
              { native: "Tú comes -> Vos comés", english: "You eat (voseo)", left: "Tú comes", right: "Vos comés" },
              { native: "Tú sales -> Vos salís", english: "You go out (voseo)", left: "Tú sales", right: "Vos salís" },
              { native: "Tú puedes -> Vos podés", english: "You can (voseo)", left: "Tú puedes", right: "Vos podés" }
            ]
          },
          {
            id: "es-u17-l1-q4",
            type: "multiple_choice",
            prompt: "¿Cuál es el imperativo de 'venir' con voseo rioplatense?",
            options: ["Vení", "Ven", "Venga", "Venid"],
            correctAnswer: "Vení",
            explanation: "El imperativo de voseo pierde la -d final de vosotros y mantiene la fuerza en la última vocal: vení, sentate, mirá."
          },
          {
            id: "es-u17-l1-q5",
            type: "scramble",
            prompt: "Ordena las palabras para formar una frase coloquial con voseo:",
            tokens: ["Che,", "¿vos", "sabés", "adónde", "vamos", "esta", "noche?"],
            correctTokens: ["Che,", "¿vos", "sabés", "adónde", "vamos", "esta", "noche?"],
            explanation: "Interjección rioplatense prototípica 'che' con voseo verbal ('vos sabés')."
          },
          {
            id: "es-u17-l1-q6",
            type: "multiple_choice",
            prompt: "¿Qué rasgo fonético comparten prácticamente todos los hispanohablantes de América y de las Islas Canarias?",
            options: [
              "El seseo (pronunciar 'c' ante e/i y 'z' con el sonido /s/)",
              "El uso del pronombre vosotros",
              "El ceceo andaluz estricto",
              "La desaparición total de las vocales"
            ],
            correctAnswer: "El seseo (pronunciar 'c' ante e/i y 'z' con el sonido /s/)",
            explanation: "El seseo es la norma lingüística compartida por más del 90% de los más de 500 millones de hispanohablantes del planeta."
          },
          {
            id: "es-u17-l1-q7",
            type: "fill_blank",
            sentence: "En el español andaluz y caribeño es muy común la ___ de la 's' al final de sílaba (ej. 'loh niñoh').",
            missingWord: "aspiración",
            options: ["aspiración", "duplicación", "vocalización", "pérdida"],
            correctAnswer: "aspiración",
            explanation: "La aspiración fonética de la -s implosiva (/h/) es un rasgo señero de las hablas meridionales y caribeñas."
          },
          {
            id: "es-u17-l1-q8",
            type: "audio_listen",
            prompt: "Escucha el testimonio y determina la procedencia dialectal del hablante:",
            audioText: "Parce, nosotros nos fuimos a dar una vuelta por el parque antes de empezar a camellar en la oficina.",
            options: [
              "Colombia (español paisa / andino)",
              "Castilla y León (España)",
              "Galicia rural",
              "Guinea Ecuatorial"
            ],
            correctAnswer: "Colombia (español paisa / andino)",
            explanation: "Términos como 'parce' (amigo) y 'camellar' (trabajar) son inequívocamente colombianos."
          },
          {
            id: "es-u17-l1-q9",
            type: "multiple_choice",
            prompt: "¿Qué es el 'yeísmo rehilado' característico del Río de la Plata?",
            options: [
              "La pronunciación de 'll' e 'y' con fricativa posalveolar sonora o sorda (como 'sh' o 'zh')",
              "La eliminación completa de la letra 'y'",
              "Pronunciar la 'r' como una 'l'",
              "Hablar cantando ópera"
            ],
            correctAnswer: "La pronunciación de 'll' e 'y' con fricativa posalveolar sonora o sorda (como 'sh' o 'zh')",
            explanation: "El rehilamiento porteño y uruguayo convierte 'calle' o 'yo' en sonidos fricativos similares a /ʃ/ o /ʒ/."
          },
          {
            id: "es-u17-l1-q10",
            type: "fill_blank",
            sentence: "El fonema interdental fricativo sordo /θ/ (distinción entre 'caza' y 'casa') es característico del centro y norte de ___.",
            missingWord: "España",
            options: ["España", "México", "Argentina", "Chile"],
            correctAnswer: "España",
            explanation: "La distinción fonológica entre /s/ y /θ/ es propia del español peninsular septentrional y central."
          }
        ]
      },
      {
        id: "es-u17-l2",
        title: "Lección 2: Léxico Regional Comparado y Norma Culta Policéntrica",
        description: "Aprende las diferencias léxicas panhispánicas (guagua, colectivo, camión), indigenismos universales y el papel de la ASALE.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u17-l2-q1",
            type: "matching",
            prompt: "Empareja el léxico regional para referirse al 'autobús público':",
            pairs: [
              { native: "España", english: "Autobús", left: "España", right: "Autobús" },
              { native: "México", english: "Camión", left: "México", right: "Camión" },
              { native: "Argentina", english: "Colectivo", left: "Argentina", right: "Colectivo" },
              { native: "Cuba / Canarias", english: "Guagua", left: "Cuba y Canarias", right: "Guagua" }
            ]
          },
          {
            id: "es-u17-l2-q2",
            type: "scramble",
            prompt: "Ordena las palabras para formular una expresión con léxico mexicano:",
            tokens: ["Esa", "película", "estuvo", "muy", "padre", "y", "divertida."],
            correctTokens: ["Esa", "película", "estuvo", "muy", "padre", "y", "divertida."],
            explanation: "En México, 'estar padre' significa ser excelente o genial."
          },
          {
            id: "es-u17-l2-q3",
            type: "fill_blank",
            sentence: "En gran parte de Hispanoamérica, para la segunda persona plural nunca se usa 'vosotros', sino '___'.",
            missingWord: "ustedes",
            options: ["ustedes", "vos", "ellos", "nosotros"],
            correctAnswer: "ustedes",
            explanation: "'Ustedes' sustituye íntegramente a 'vosotros' en América, Canarias y parte de Andalucía, tanto formal como informalmente."
          },
          {
            id: "es-u17-l2-q4",
            type: "matching",
            prompt: "Empareja los términos para 'dinero' en distintas jergas hispanas:",
            pairs: [
              { native: "España (coloquial)", english: "Pasta / Pasta gansa", left: "España", right: "Pasta / Pasta gansa" },
              { native: "México (coloquial)", english: "Lana / Varos", left: "México", right: "Lana / Varos" },
              { native: "Argentina (lunfardo)", english: "Guita / Mango", left: "Argentina", right: "Guita / Mango" },
              { native: "Chile (coloquial)", english: "Plata / Lucas", left: "Chile", right: "Plata / Lucas" }
            ]
          },
          {
            id: "es-u17-l2-q5",
            type: "scramble",
            prompt: "Ordena los elementos para analizar una estructura arcaica conservada en zonas rurales:",
            tokens: ["¿Ha", "habido", "vastedad", "de", "tierras", "en", "esta", "comarca?"],
            correctTokens: ["¿Ha", "habido", "vastedad", "de", "tierras", "en", "esta", "comarca?"],
            explanation: "Léxico de filología hispánica clásica."
          },
          {
            id: "es-u17-l2-q6",
            type: "multiple_choice",
            prompt: "¿Qué institución coordina la política lingüística panhispánica junto a las 23 academias de la lengua en todo el mundo?",
            options: [
              "La ASALE (Asociación de Academias de la Lengua Española)",
              "La UNESCO únicamente",
              "El Banco Mundial",
              "El Parlamento Europeo"
            ],
            correctAnswer: "La ASALE (Asociación de Academias de la Lengua Española)",
            explanation: "La ASALE congrega a la RAE y a todas las academias hispanoamericanas, filipina y ecuatoguineana en pie de igualdad."
          },
          {
            id: "es-u17-l2-q7",
            type: "matching",
            prompt: "Empareja los indigenismos incorporados al léxico español universal con su lengua de origen:",
            pairs: [
              { native: "Tomate, chocolate, aguacate", english: "Náhuatl (Mesoamérica)", left: "Náhuatl", right: "Tomate, chocolate, aguacate" },
              { native: "Canoa, huracán, colibrí, maíz", english: "Taíno (Caribe)", left: "Taíno", right: "Canoa, huracán, colibrí, maíz" },
              { native: "Cóndor, llama, papa, pampa", english: "Quechua (Andes)", left: "Quechua", right: "Cóndor, llama, papa, pampa" },
              { native: "Jaguar, tapioca, maraca", english: "Guaraní / Tupí", left: "Guaraní", right: "Jaguar, tapioca, maraca" }
            ]
          },
          {
            id: "es-u17-l2-q8",
            type: "scramble",
            prompt: "Ordena las palabras para explicar el concepto de norma culta policéntrica:",
            tokens: ["El", "español", "posee", "una", "norma", "culta", "policéntrica", "y", "plural."],
            correctTokens: ["El", "español", "posee", "una", "norma", "culta", "policéntrica", "y", "plural."],
            explanation: "Principio lingüístico moderno panhispánico."
          },
          {
            id: "es-u17-l2-q9",
            type: "multiple_choice",
            prompt: "¿Qué significa el término 'lunfardo' en el contexto sociocultural rioplatense?",
            options: [
              "Una jerga popular originada en los barrios y orillas de Buenos Aires y Montevideo vinculada al tango",
              "Un tipo de danza folclórica andina",
              "Una ley constitucional de 1810",
              "Un instrumento de viento indígena"
            ],
            correctAnswer: "Una jerga popular originada en los barrios y orillas de Buenos Aires y Montevideo vinculada al tango",
            explanation: "El lunfardo nutrió el argot popular, la literatura y las letras inmortales del tango."
          },
          {
            id: "es-u17-l2-q10",
            type: "multiple_choice",
            prompt: "Si un amigo chileno te dice 'Al tiro voy', ¿qué está indicando?",
            options: [
              "Que va de inmediato o al instante",
              "Que va a disparar un rifle",
              "Que no tiene ganas de ir",
              "Que llegará mañana"
            ],
            correctAnswer: "Que va de inmediato o al instante",
            explanation: "'Al tiro' es el modismo chileno por excelencia para decir 'inmediatamente / enseguida'."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 18: Análisis Crítico (Critical Analysis)
  // =========================================================================
  {
    id: "es-unit-18",
    unitId: "es-unit-18",
    unitNumber: 18,
    level: "Nivel C1/C2: Maestría (Avanzado Superior)",
    title: "Unidad 18: Análisis Crítico (Critical Analysis)",
    subtitle: "Estructuras enfáticas, inversión sintáctica, doble negación y retórica editorial.",
    icon: "FileText",
    color: "#ef4444",
    lessons: [
      {
        id: "es-u18-l1",
        title: "Lección 1: Estructuras Enfáticas Hendidas e Inversión Sintáctica",
        description: "Domina las oraciones escindidas ('Fue entonces cuando...', 'Es por eso por lo que...') y las inversiones de alta prosa argumentativa.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u18-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes es una oración escindida o focalizadora (oración hendida) que enfatiza el sujeto?",
            options: [
              "Fue el ministro de Hacienda quien redactó personalmente la enmienda presupuestaria.",
              "El ministro de Hacienda redactó la enmienda.",
              "La enmienda fue redactada ayer.",
              "Se redactó una enmienda presupuestaria."
            ],
            correctAnswer: "Fue el ministro de Hacienda quien redactó personalmente la enmienda presupuestaria.",
            explanation: "La estructura 'Ser (conjugado) + elemento focalizado + quien/que...' es la fórmula canónica de focalización enfática."
          },
          {
            id: "es-u18-l1-q2",
            type: "fill_blank",
            sentence: "No fue por casualidad, ___ por pura perseverancia, como logró alcanzar la cima.",
            missingWord: "sino",
            options: ["sino", "pero", "aunque", "mas"],
            correctAnswer: "sino",
            explanation: "La correlación restrictivo-adversativa tras negación ('no X, sino Y') exige la conjunción 'sino'."
          },
          {
            id: "es-u18-l1-q3",
            type: "scramble",
            prompt: "Ordena las palabras para formar una oración con inversión sintáctica culta:",
            tokens: ["Raras", "veces", "se", "ha", "presenciado", "semejante", "despliegue", "de", "talento."],
            correctTokens: ["Raras", "veces", "se", "ha", "presenciado", "semejante", "despliegue", "de", "talento."],
            explanation: "Inversión sintáctica de estilo elevado anteponiendo el cuantificador negativo/restrictivo 'Raras veces'."
          },
          {
            id: "es-u18-l1-q4",
            type: "matching",
            prompt: "Empareja los esquemas enfáticos con su ejemplo de alta prosa:",
            pairs: [
              { native: "Focalización temporal", english: "Time clefting", left: "Fue en 1939 cuando...", right: "Focalización de marco temporal histórico" },
              { native: "Focalización causal", english: "Causal clefting", left: "Es por ese motivo por el que...", right: "Subrayado de la causa determinante" },
              { native: "Focalización modal", english: "Manner clefting", left: "Fue así como...", right: "Énfasis en el procedimiento o modo" },
              { native: "Tematización con infinitivo", english: "Infinitive topicalization", left: "Llegar, seguro que llegará", right: "Énfasis de certeza o reiteración verbal" }
            ]
          },
          {
            id: "es-u18-l1-q5",
            type: "fill_blank",
            sentence: "Apenas ___ el sol en el horizonte, cuando el ejército emprendió la marcha.",
            missingWord: "había despuntado",
            options: ["había despuntado", "ha despuntado", "despuntaba", "despuntaría"],
            correctAnswer: "había despuntado",
            explanation: "Estructura temporal literaria de inmediatez anterior: 'Apenas había despuntado... cuando'."
          },
          {
            id: "es-u18-l1-q6",
            type: "scramble",
            prompt: "Ordena las palabras para enfatizar el objeto mediante duplicación pronominal:",
            tokens: ["A", "ese", "autor", "lo", "conozco", "desde", "hace", "décadas."],
            correctTokens: ["A", "ese", "autor", "lo", "conozco", "desde", "hace", "décadas."],
            explanation: "Topicalización de complemento directo antepuesto con duplicación pronominal ('A ese autor lo conozco')."
          },
          {
            id: "es-u18-l1-q7",
            type: "multiple_choice",
            prompt: "¿Cuál es la función del conector 'en resumidas cuentas' en una columna de opinión?",
            options: [
              "Recapitular y condensar la tesis principal tras la argumentación previa",
              "Introducir una contradicción insalvable",
              "Iniciar un relato de ficción",
              "Preguntar la hora al lector"
            ],
            correctAnswer: "Recapitular y condensar la tesis principal tras la argumentación previa",
            explanation: "'En resumidas cuentas' (o en suma, en síntesis) es un operador discursivo de recapitulación conclusiva."
          },
          {
            id: "es-u18-l1-q8",
            type: "audio_listen",
            prompt: "Escucha el fragmento del editorial y señala la tesis crítica sustentada:",
            audioText: "No es la falta de recursos económicos lo que lastra la investigación científica, sino la burocracia asfixiante que paraliza la gestión cotidiana.",
            options: [
              "La traba principal es la hipertrofia burocrática, no el dinero en sí",
              "Sobran científicos y falta dinero",
              "La burocracia es la solución a todos los problemas",
              "La ciencia carece de interés para la sociedad"
            ],
            correctAnswer: "La traba principal es la hipertrofia burocrática, no el dinero en sí",
            explanation: "El texto focaliza con claridad: 'No es la falta de recursos... sino la burocracia asfixiante'."
          },
          {
            id: "es-u18-l1-q9",
            type: "fill_blank",
            sentence: "Por más que ___ el informe, no encontrarás ninguna irregularidad contable.",
            missingWord: "examines",
            options: ["examines", "examinas", "examinar", "examinaste"],
            correctAnswer: "examines",
            explanation: "'Por más que + subjuntivo' encabeza una cláusula concesiva intensiva orientada al futuro o hipotética."
          },
          {
            id: "es-u18-l1-q10",
            type: "multiple_choice",
            prompt: "¿Qué matiz semántico aporta la inversión: 'Mucho me temo que...'?",
            options: [
              "Presagio o sospecha pesimista fundamentada y atenuada",
              "Un ataque de pánico físico",
              "Alegría incontenible",
              "Una burla cómica"
            ],
            correctAnswer: "Presagio o sospecha pesimista fundamentada y atenuada",
            explanation: "'Mucho me temo que...' es una fórmula dialéctica culta para anunciar una realidad adversa."
          }
        ]
      },
      {
        id: "es-u18-l2",
        title: "Lección 2: Concordancia Negativa, Figuras Retóricas y Ensayo de Opinión",
        description: "Aprende las reglas de doble negación estricta (no vino nadie vs nadie vino), oxímoron, paralelismos y argumentación ensayística.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u18-l2-q1",
            type: "multiple_choice",
            prompt: "En la norma culta del español, ¿cómo funciona la 'doble negación'?",
            options: [
              "Si el elemento negativo (nada, nadie, nunca) va DESPUÉS del verbo, es OBLIGATORIO que el verbo vaya precedido por 'no' ('No vino nadie')",
              "Dos negaciones siempre se cancelan y afirman la frase",
              "Está prohibida en cualquier circunstancia",
              "Solo se usa en poesía medieval"
            ],
            correctAnswer: "Si el elemento negativo (nada, nadie, nunca) va DESPUÉS del verbo, es OBLIGATORIO que el verbo vaya precedido por 'no' ('No vino nadie')",
            explanation: "El español es una lengua de concordancia negativa obligatoria: 'No vi a nadie' (correcto); pero si va antes: 'Nadie vino' (sin 'no')."
          },
          {
            id: "es-u18-l2-q2",
            type: "matching",
            prompt: "Empareja las estrategias retóricas con su propósito argumentativo:",
            pairs: [
              { native: "Pregunta retórica", english: "Rhetorical question", left: "Interrogación retórica", right: "Provocar la reflexión del lector sin esperar respuesta" },
              { native: "Ironía fina", english: "Subtle irony", left: "Ironía sutil", right: "Dar a entender lo contrario de lo que se dice formalmente" },
              { native: "Antítesis", english: "Antithesis", left: "Antítesis conceptual", right: "Contraponer dos ideas antagónicas para resaltar un contraste" },
              { native: "Gradación ascendente", english: "Climax / gradation", left: "Gradación o clímax", right: "Escala progresiva de intensidad en los argumentos" }
            ]
          },
          {
            id: "es-u18-l2-q3",
            type: "matching",
            prompt: "Empareja los operadores discursivos de distanciamiento y matización:",
            pairs: [
              { native: "Hasta cierto punto", english: "Up to a certain point", left: "Hasta cierto punto", right: "Limitación cuantitativa de la afirmación" },
              { native: "Por así decirlo", english: "So to speak", left: "Por así decirlo", right: "Atenuación metafórica de un término atrevido" },
              { native: "Dicho con la debida cautela", english: "Said with caution", left: "Con debida cautela", right: "Prevención frente a interpretaciones apresuradas" },
              { native: "En rigor de verdad", english: "Strictly speaking", left: "En rigor de verdad", right: "Exigencia de máxima precisión objetiva" }
            ]
          },
          {
            id: "es-u18-l2-q4",
            type: "scramble",
            prompt: "Ordena las palabras de una oración con negación expletiva o enfática:",
            tokens: ["Nadie", "en", "su", "sano", "juicio", "apoyaría", "semejante", "despropósito."],
            correctTokens: ["Nadie", "en", "su", "sano", "juicio", "apoyaría", "semejante", "despropósito."],
            explanation: "Estructura contundente de juicio crítico descalificador."
          },
          {
            id: "es-u18-l2-q5",
            type: "multiple_choice",
            prompt: "Identifica la opción gramaticalmente correcta respecto al uso de 'nadie':",
            options: [
              "Nadie sabía nada del asunto.",
              "No nadie sabía nada del asunto.",
              "Nadie no sabía nada del asunto.",
              "Sabía nadie nada del asunto."
            ],
            correctAnswer: "Nadie sabía nada del asunto.",
            explanation: "Cuando el pronombre indefinido negativo encabeza la oración antepuesto al verbo, no admite la partícula 'no'."
          },
          {
            id: "es-u18-l2-q6",
            type: "fill_blank",
            sentence: "Lejos de amedrentarse, el periodista continuó ___ sobre la trama corrupta.",
            missingWord: "indagando",
            options: ["indagando", "indagado", "indagar", "indague"],
            correctAnswer: "indagando",
            explanation: "Perífrasis de continuidad aspectual: 'continuar + gerundio (indagando)'."
          },
          {
            id: "es-u18-l2-q7",
            type: "scramble",
            prompt: "Ordena los elementos para expresar una contraposición valorativa formal:",
            tokens: ["Mientras", "unos", "clamaban", "justicia,", "otros", "guardaban", "un", "silencio", "cómplice."],
            correctTokens: ["Mientras", "unos", "clamaban", "justicia,", "otros", "guardaban", "un", "silencio", "cómplice."],
            explanation: "Conector de contraste distributivo 'Mientras unos... otros'."
          },
          {
            id: "es-u18-l2-q8",
            type: "multiple_choice",
            prompt: "¿Qué figura retórica se aprecia en: 'Es un secreto a voces'?",
            options: ["Oxímoron o paradoja", "Metonimia", "Eufemismo", "Pleonasmo"],
            correctAnswer: "Oxímoron o paradoja",
            explanation: "Un oxímoron combina dos palabras de significado opuesto (secreto / a voces) para crear un nuevo sentido expresivo."
          },
          {
            id: "es-u18-l2-q9",
            type: "fill_blank",
            sentence: "Cuanto más se dilate la reforma, tanto ___ será el descontento de la ciudadanía.",
            missingWord: "mayor",
            options: ["mayor", "mejor", "menos", "pequeño"],
            correctAnswer: "mayor",
            explanation: "Estructura proporcional correlativa: 'Cuanto más... tanto mayor'."
          },
          {
            id: "es-u18-l2-q10",
            type: "matching",
            prompt: "Empareja los recursos de elocuencia y estilo en prosa culta:",
            pairs: [
              { native: "Hipérbaton", english: "Hyperbaton (syntactic rearrangement)", left: "Hipérbaton", right: "Alteración premeditada del orden sintáctico habitual" },
              { native: "Pleonasmo deliberado", english: "Deliberate pleonasm", left: "Pleonasmo", right: "Uso de palabras redundantes para intensificar la expresión" },
              { native: "Asíndeton", english: "Asyndeton (omission of conjunctions)", left: "Asíndeton", right: "Supresión de conjunciones para dar dinamismo al texto" },
              { native: "Polisíndeton", english: "Polysyndeton (repetition of conjunctions)", left: "Polisíndeton", right: "Repetición insistente de nexos para marcar gravedad" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 19: El Lenguaje Formal (Formal Language)
  // =========================================================================
  {
    id: "es-unit-19",
    unitId: "es-unit-19",
    unitNumber: 19,
    level: "Nivel C1/C2: Maestría (Avanzado Superior)",
    title: "Unidad 19: El Lenguaje Formal (Formal Language)",
    subtitle: "Jerga jurídica y administrativa, recursos institucionales y fórmulas de protocolo legal.",
    icon: "Shield",
    color: "#ef4444",
    lessons: [
      {
        id: "es-u19-l1",
        title: "Lección 1: Prosa Jurídica, Administrativa y Fórmulas Protocolarias",
        description: "Aprende el lenguaje de instancias oficiales ('el abajo firmante', 'expone/solicita'), latinismos forenses y tratamientos honoríficos.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u19-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es el significado de la fórmula administrativa 'El abajo firmante' o 'El que suscribe'?",
            options: [
              "La persona física o jurídica que firma y asume la autoría del documento",
              "El secretario del tribunal",
              "El acusado en un juicio penal",
              "El testigo ocular ausente"
            ],
            correctAnswer: "La persona física o jurídica que firma y asume la autoría del documento",
            explanation: "'El abajo firmante' o 'el suscrito' es la fórmula canónica de apertura en instancias e instancias administrativas."
          },
          {
            id: "es-u19-l1-q2",
            type: "scramble",
            prompt: "Ordena las partes tradicionales de una instancia administrativa formal:",
            tokens: ["EXPONE:", "Que", "reúne", "los", "requisitos.", "SOLICITA:", "Ser", "admitido", "al", "concurso."],
            correctTokens: ["EXPONE:", "Que", "reúne", "los", "requisitos.", "SOLICITA:", "Ser", "admitido", "al", "concurso."],
            explanation: "Estructura canónica bipartita obligatoria en la administración hispana: HECHOS (EXPONE) y PETICIÓN (SOLICITA)."
          },
          {
            id: "es-u19-l1-q3",
            type: "matching",
            prompt: "Empareja los latinismos jurídicos usuales en el español formal con su traducción:",
            pairs: [
              { native: "De facto", english: "In practice / in fact", left: "De facto", right: "De hecho o en la práctica, sin reconocimiento legal formal" },
              { native: "De iure", english: "By right / by law", left: "De iure", right: "De derecho, con plena validez jurídica legal" },
              { native: "Habeas corpus", english: "Right against unlawful detention", left: "Habeas corpus", right: "Derecho del detenido a comparecer de inmediato ante el juez" },
              { native: "In dubio pro reo", english: "When in doubt, in favor of the accused", left: "In dubio pro reo", right: "Principio de que la duda beneficia siempre al acusado" }
            ]
          },
          {
            id: "es-u19-l1-q4",
            type: "multiple_choice",
            prompt: "¿Qué tiempo verbal arcaico se conserva casi exclusivamente en textos jurídicos y notariales (ej. 'El que cometiere delito...')?",
            options: [
              "Futuro de Subjuntivo (cantare, comiere, fuere)",
              "Pretérito anterior (hube cantado)",
              "Condicional compuesto",
              "Imperfecto de indicativo"
            ],
            correctAnswer: "Futuro de Subjuntivo (cantare, comiere, fuere)",
            explanation: "El futuro de subjuntivo desapareció del habla cotidiana, pero sobrevive en el Código Civil, la Constitución y los contratos mercantiles."
          },
          {
            id: "es-u19-l1-q5",
            type: "fill_blank",
            sentence: "Las partes contratantes se comprometen a ___ estrictamente las cláusulas suscritas.",
            missingWord: "acatar",
            options: ["acatar", "romper", "ignorar", "desviar"],
            correctAnswer: "acatar",
            explanation: "'Acatar' significa aceptar y cumplir formalmente una ley, orden o disposición contractual."
          },
          {
            id: "es-u19-l1-q6",
            type: "scramble",
            prompt: "Ordena las palabras para redactar el cierre protocolario de una solicitud oficial:",
            tokens: ["Es", "justicia", "que", "pido", "en", "Madrid", "a", "doce", "de", "octubre."],
            correctTokens: ["Es", "justicia", "que", "pido", "en", "Madrid", "a", "doce", "de", "octubre."],
            explanation: "Fórmula procesal de cierre: 'Es justicia que pido en [lugar] a [fecha]'."
          },
          {
            id: "es-u19-l1-q7",
            type: "multiple_choice",
            prompt: "¿Cuál es el tratamiento honorífico protocolario tradicional que corresponde a los magistrados de tribunales superiores en el ámbito hispánico?",
            options: ["Ilustrísimo Señor / Excelentísimo Señor", "Vuestra Majestad", "Estimado camarada", "Señorito"],
            correctAnswer: "Ilustrísimo Señor / Excelentísimo Señor",
            explanation: "En los protocolos administrativos hispanos, los cargos jurisdiccionales ostentan los tratamientos de Ilmo. Sr. o Excmo. Sr."
          },
          {
            id: "es-u19-l1-q8",
            type: "scramble",
            prompt: "Ordena las palabras para formular una cláusula de confidencialidad estricta:",
            tokens: ["Las", "partes", "guardarán", "secreto", "profesional", "sobre", "toda", "información", "sensible."],
            correctTokens: ["Las", "partes", "guardarán", "secreto", "profesional", "sobre", "toda", "información", "sensible."],
            explanation: "Obligación de sigilo formal en contratos mercantiles."
          },
          {
            id: "es-u19-l1-q9",
            type: "scramble",
            prompt: "Ordena las palabras para redactar el encabezamiento de una carta protocolaria:",
            tokens: ["A", "la", "atención", "del", "Excelentísimo", "Señor", "Rector", "Magnífico:"],
            correctTokens: ["A", "la", "atención", "del", "Excelentísimo", "Señor", "Rector", "Magnífico:"],
            explanation: "Fórmula de tratamiento universitario solemne."
          },
          {
            id: "es-u19-l1-q10",
            type: "multiple_choice",
            prompt: "Identifica la fórmula canónica de salutación inicial en comunicaciones institucionales formales:",
            options: [
              "Distinguidos señores / Muy señores míos:",
              "¿Qué tal, gente?",
              "Hola a todos y todas,",
              "Buenos días colegas,"
            ],
            correctAnswer: "Distinguidos señores / Muy señores míos:",
            explanation: "Fórmula de respeto protocolario impersonal idónea para iniciar correspondencia institucional."
          }
        ]
      },
      {
        id: "es-u19-l2",
        title: "Lección 2: Redacción de Instancias, Recursos Oficiales y Tecnicismos Legales",
        description: "Domina la tramitación procesal: recurso de alzada, plazos de firmeza administrativa, documentos notariales y cláusulas contractuales.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u19-l2-q1",
            type: "fill_blank",
            sentence: "Por medio de la presente, interpongo recurso de ___ contra la resolución dictada el pasado 4 de mayo.",
            missingWord: "alzada",
            options: ["alzada", "desalojo", "despido", "renuncia"],
            correctAnswer: "alzada",
            explanation: "El 'recurso de alzada' es el medio de impugnación formal ante el órgano administrativo jerárquicamente superior."
          },
          {
            id: "es-u19-l2-q2",
            type: "matching",
            prompt: "Empareja el léxico contractual con su definición exacta:",
            pairs: [
              { native: "Cláusula de rescisión", english: "Termination / severance clause", left: "Cláusula rescisoria", right: "Condición que permite anular o finalizar el contrato" },
              { native: "Fuerza mayor", english: "Force majeure", left: "Fuerza mayor", right: "Acontecimiento imprevisible e inevitable que exime de culpa" },
              { native: "Vicios ocultos", english: "Hidden defects", left: "Vicios ocultos", right: "Defectos graves no perceptibles a simple vista en una compra" },
              { native: "Daños y perjuicios", english: "Damages and losses", left: "Daños y perjuicios", right: "Perjuicio material o moral evaluable para indemnización" }
            ]
          },
          {
            id: "es-u19-l2-q3",
            type: "audio_listen",
            prompt: "Escucha el fallo judicial y determina el veredicto del tribunal:",
            audioText: "El tribunal falla desestimar íntegramente la demanda interpuesta y condenar a la parte actora al pago de las costas procesales.",
            options: [
              "Desestimación de la demanda y condena en costas procesales",
              "Aceptación plena de todas las pretensiones",
              "Suspensión provisional del juicio",
              "Nulidad absoluta de las actuaciones previas"
            ],
            correctAnswer: "Desestimación de la demanda y condena en costas procesales",
            explanation: "El fallo es rotundo: 'desestimar íntegramente la demanda... y condenar en costas'."
          },
          {
            id: "es-u19-l2-q4",
            type: "fill_blank",
            sentence: "El contrato quedará rescindido de pleno ___ si se incumple el plazo fijado.",
            missingWord: "derecho",
            options: ["derecho", "hecho", "vigor", "oficio"],
            correctAnswer: "derecho",
            explanation: "'De pleno derecho' es la locución jurídica que indica que una consecuencia se produce automáticamente por imperio de la ley."
          },
          {
            id: "es-u19-l2-q5",
            type: "multiple_choice",
            prompt: "¿Qué expresa la locución 'Sin perjuicio de' en un texto legislativo?",
            options: [
              "Que lo dispuesto se aplica sin menoscabo o anulación de lo previsto en otra norma",
              "Que no habrá daños a la naturaleza",
              "Que el documento queda anulado",
              "Que se declara culpable al acusado"
            ],
            correctAnswer: "Que lo dispuesto se aplica sin menoscabo o anulación de lo previsto en otra norma",
            explanation: "'Sin perjuicio de...' preserva la plena vigencia de preceptos concurrentes o superiores."
          },
          {
            id: "es-u19-l2-q6",
            type: "matching",
            prompt: "Empareja los documentos notariales con su función pública:",
            pairs: [
              { native: "Poder notarial", english: "Power of attorney", left: "Poder notarial", right: "Facultad legal otorgada a un tercero para actuar en su nombre" },
              { native: "Escritura pública", english: "Public deed", left: "Escritura pública", right: "Documento oficial redactado y fedatado por notario" },
              { native: "Testamento ológrafo", english: "Holographic will", left: "Testamento ológrafo", right: "Testamento redactado a mano de puño y letra por el testador" },
              { native: "Acta de notoriedad", english: "Notarial certificate of fact", left: "Acta de notoriedad", right: "Constatación notarial de hechos públicos conocidos" }
            ]
          },
          {
            id: "es-u19-l2-q7",
            type: "multiple_choice",
            prompt: "¿Por qué en la prosa administrativa se desaconseja el abuso del gerundio de posterioridad ('Sufrió un accidente siendo trasladado al hospital')?",
            options: [
              "Porque es una incorrección sintáctica: el gerundio solo denota simultaneidad o anterioridad",
              "Porque suena grosero",
              "Porque el gerundio está prohibido en las leyes",
              "Porque es una palabra demasiado corta"
            ],
            correctAnswer: "Porque es una incorrección sintáctica: el gerundio solo denota simultaneidad o anterioridad",
            explanation: "La norma académica censura el 'gerundio de posterioridad'; debe escribirse: 'Sufrió un accidente y fue trasladado al hospital'."
          },
          {
            id: "es-u19-l2-q8",
            type: "fill_blank",
            sentence: "La presente notificación surtirá efectos a partir del día ___ a su recepción fehaciente.",
            missingWord: "siguiente",
            options: ["siguiente", "anterior", "mismo", "último"],
            correctAnswer: "siguiente",
            explanation: "Regla canónica de cómputo de plazos administrativos: 'a partir del día siguiente a su notificación'."
          },
          {
            id: "es-u19-l2-q9",
            type: "matching",
            prompt: "Empareja los términos de derecho procesal:",
            pairs: [
              { native: "Parte actora / demandante", english: "Plaintiff / claimant", left: "Demandante", right: "Sujeto que inicia la acción judicial y ejercita la pretensión" },
              { native: "Parte demandada", english: "Defendant", left: "Demandado", right: "Sujeto contra quien se dirige la acción procesal" },
              { native: "Medidas cautelares", english: "Precautionary / injunctive measures", left: "Medidas cautelares", right: "Garantías provisionales para asegurar el cumplimiento del fallo" },
              { native: "Cosa juzgada", english: "Res judicata (final binding judgement)", left: "Cosa juzgada", right: "Efecto definitivo que impide reabrir un pleito ya resuelto" }
            ]
          },
          {
            id: "es-u19-l2-q10",
            type: "multiple_choice",
            prompt: "¿Qué significa que una resolución administrativa ha ganado firmeza ('es firme')?",
            options: [
              "Que contra ella ya no cabe ningún recurso ordinario en vía administrativa",
              "Que el documento fue firmado con tinta indeleble",
              "Que el funcionario ha cambiado de opinión",
              "Que se archiva sin leer"
            ],
            correctAnswer: "Que contra ella ya no cabe ningún recurso ordinario en vía administrativa",
            explanation: "Un acto administrativo es firme cuando han expirado los plazos legales de recurso o ha sido confirmado irrevocablemente."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 20: Alta Literatura y Ensayo (High Literature and Essay)
  // =========================================================================
  {
    id: "es-unit-20",
    unitId: "es-unit-20",
    unitNumber: 20,
    level: "Nivel C1/C2: Maestría (Avanzado Superior)",
    title: "Unidad 20: Alta Literatura y Ensayo (High Literature and Essay)",
    subtitle: "Figuras retóricas avanzadas, estilística barroca, lírica moderna y hermenéutica del texto clásico.",
    icon: "Award",
    color: "#ef4444",
    lessons: [
      {
        id: "es-u20-l1",
        title: "Lección 1: Canon Clásico (Cervantes, Siglo de Oro y Realismo Mágico)",
        description: "Analiza el arranque cumbre del Quijote, la dialéctica quijotesca, la prolepsis de Cien años de soledad y la dualidad conceptismo/culteranismo.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u20-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la célebre frase con la que da comienzo 'Don Quijote de la Mancha' de Miguel de Cervantes (1605)?",
            options: [
              "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
              "Muchos años después, frente al pelotón de fusilamiento...",
              "Canta, oh musa, la cólera del pélida Aquiles...",
              "En el principio creó Dios los cielos y la tierra..."
            ],
            correctAnswer: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
            explanation: "Es el arranque cumbre de la literatura universal en español que inaugura la novela moderna polifónica."
          },
          {
            id: "es-u20-l1-q2",
            type: "fill_blank",
            sentence: "En 'Cien años de soledad', la ciudad imaginaria fundada por la estirpe Buendía recibe el nombre de ___.",
            missingWord: "Macondo",
            options: ["Macondo", "Comala", "Santa María", "Vetusta"],
            correctAnswer: "Macondo",
            explanation: "Macondo es el mítico territorio alegórico del Realismo Mágico creado por Gabriel García Márquez."
          },
          {
            id: "es-u20-l1-q3",
            type: "matching",
            prompt: "Empareja las obras cumbres con sus autores fundamentales:",
            pairs: [
              { native: "El ingenioso hidalgo Don Quijote de la Mancha", english: "Miguel de Cervantes", left: "Don Quijote de la Mancha", right: "Miguel de Cervantes" },
              { native: "Cien años de soledad", english: "Gabriel García Márquez", left: "Cien años de soledad", right: "Gabriel García Márquez" },
              { native: "Ficciones / El Aleph", english: "Jorge Luis Borges", left: "El Aleph y Ficciones", right: "Jorge Luis Borges" },
              { native: "Romancero Gitano / Poeta en Nueva York", english: "Federico García Lorca", left: "Poeta en Nueva York", right: "Federico García Lorca" }
            ]
          },
          {
            id: "es-u20-l1-q4",
            type: "scramble",
            prompt: "Ordena las palabras del célebre arranque de 'Cien años de soledad':",
            tokens: ["Muchos", "años", "después,", "frente", "al", "pelotón", "de", "fusilamiento..."],
            correctTokens: ["Muchos", "años", "después,", "frente", "al", "pelotón", "de", "fusilamiento..."],
            explanation: "El arranque maestro de prolepsis narrativa más celebrado de la narrativa hispanoamericana."
          },
          {
            id: "es-u20-l1-q5",
            type: "multiple_choice",
            prompt: "¿En qué consiste la técnica narrativa de la 'prolepsis' o anticipación?",
            options: [
              "En relatar acontecimientos futuros adelantándose al orden cronológico de la historia",
              "En retroceder a la infancia del personaje",
              "En describir una batalla naval",
              "En utilizar únicamente versos alejandrinos"
            ],
            correctAnswer: "En relatar acontecimientos futuros adelantándose al orden cronológico de la historia",
            explanation: "La prolepsis (flash-forward) rompe la secuencia cronológica anticipando desenlaces que se explicarán después."
          },
          {
            id: "es-u20-l1-q6",
            type: "fill_blank",
            sentence: "La corriente barroca del Siglo de Oro liderada por Luis de Góngora, centrada en la forma poética y el hipérbaton, se denomina ___.",
            missingWord: "Culteranismo",
            options: ["Culteranismo", "Conceptismo", "Romanticismo", "Costumbrismo"],
            correctAnswer: "Culteranismo",
            explanation: "El Culteranismo (o Gongorismo) intensifica la metáfora sensorial, los latinismos léxicos y la sintaxis oracional compleja."
          },
          {
            id: "es-u20-l1-q7",
            type: "matching",
            prompt: "Empareja los dos polos estéticos del Barroco español:",
            pairs: [
              { native: "Culteranismo (Luis de Góngora)", english: "Ornamental, sensory, complex syntax", left: "Culteranismo", right: "Exuberancia formal, mitología y latinismos sintácticos" },
              { native: "Conceptismo (Francisco de Quevedo)", english: "Witty concision, double meanings", left: "Conceptismo", right: "Agudeza mental, concisión, polisemia y juego de ideas" },
              { native: "Mística (San Juan de la Cruz)", english: "Spiritual union of the soul", left: "Poesía Mística", right: "Unión extática del alma con la divinidad" },
              { native: "Teatro Nacional (Lope de Vega)", english: "Tragicomedy breaking Aristotelian rules", left: "Comedia Nueva", right: "Ruptura de las tres unidades clásicas en verso polimétrico" }
            ]
          },
          {
            id: "es-u20-l1-q8",
            type: "scramble",
            prompt: "Ordena los versos de Francisco de Quevedo sobre la eternidad del amor más allá de la muerte:",
            tokens: ["Polvo", "serán,", "mas", "polvo", "enamorado."],
            correctTokens: ["Polvo", "serán,", "mas", "polvo", "enamorado."],
            explanation: "El verso final del soneto 'Amor constante más allá de la muerte', cumbre del Barroco español."
          },
          {
            id: "es-u20-l1-q9",
            type: "multiple_choice",
            prompt: "¿Qué rasgo caracteriza fundamentalmente al 'Realismo Mágico' hispanoamericano?",
            options: [
              "La integración de elementos sobrenaturales o inverosímiles con absoluta naturalidad en la realidad cotidiana",
              "La descripción científica exacta y fría de experimentos",
              "El rechazo absoluto de las metáforas",
              "La ambientación en naves espaciales del futuro"
            ],
            correctAnswer: "La integración de elementos sobrenaturales o inverosímiles con absoluta naturalidad en la realidad cotidiana",
            explanation: "En el Realismo Mágico lo insólito y portentoso se percibe y narra sin asombro por los personajes y el narrador."
          },
          {
            id: "es-u20-l1-q10",
            type: "multiple_choice",
            prompt: "¿Qué representa la figura de Sancho Panza en dialéctica con Don Quijote?",
            options: [
              "El apego a la realidad empírica, el sentido común y la sabiduría popular frente al idealismo trascendente",
              "Un enemigo que intenta destruir al caballero andante",
              "Un comerciante que solo busca dinero",
              "El narrador omnisciente de la historia"
            ],
            correctAnswer: "El apego a la realidad empírica, el sentido común y la sabiduría popular frente al idealismo trascendente",
            explanation: "La 'quijotización' de Sancho y la 'sanchificación' de Don Quijote constituyen uno de los diálogos humanos más ricos de la historia de la literatura."
          }
        ]
      },
      {
        id: "es-u20-l2",
        title: "Lección 2: Vanguardias, Lírica Moderna y Hermenéutica Textual",
        description: "Explora la revolución de Cortázar (Rayuela), la metafísica de Borges, el simbolismo lírico de Lorca y las figuras retóricas avanzadas.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u20-l2-q1",
            type: "audio_listen",
            prompt: "Escucha el poema lírico y selecciona la metáfora nuclear de la composición:",
            audioText: "Nuestras vidas son los ríos que van a dar en la mar, que es el morir.",
            options: [
              "La vida entendida como un río que desemboca inexorablemente en la muerte",
              "El mar como fuente inagotable de riqueza pesquera",
              "La velocidad del agua en los arroyos de montaña",
              "Un viaje en barco de vapor por el Guadalquivir"
            ],
            correctAnswer: "La vida entendida como un río que desemboca inexorablemente en la muerte",
            explanation: "Versos inmortales de Jorge Manrique en las 'Coplas a la muerte de su padre' (siglo XV)."
          },
          {
            id: "es-u20-l2-q2",
            type: "fill_blank",
            sentence: "El ensayo literario se define por su voluntad de estilo, libertad temática y carácter ___ y no dogmático.",
            missingWord: "reflexivo",
            options: ["reflexivo", "matemático", "jurídico", "anónimo"],
            correctAnswer: "reflexivo",
            explanation: "El ensayo es un género humanístico libre, dialógico, reflexivo e interpretativo."
          },
          {
            id: "es-u20-l2-q3",
            type: "multiple_choice",
            prompt: "¿A qué autor argentino pertenece el cuento 'El jardín de senderos que se bifurcan', precursor conceptual del hipertexto y los laberintos temporales?",
            options: ["Jorge Luis Borges", "Julio Cortázar", "Ernesto Sabato", "Adolfo Bioy Casares"],
            correctAnswer: "Jorge Luis Borges",
            explanation: "Borges concibió universos laberínticos, bibliotecas infinitas y bifurcaciones temporales con rigor metafísico deslumbrante."
          },
          {
            id: "es-u20-l2-q4",
            type: "matching",
            prompt: "Empareja las figuras poéticas avanzadas con su definición filológica:",
            pairs: [
              { native: "Sinestesia", english: "Synesthesia (cross-sensory imagery)", left: "Sinestesia", right: "Cruce de impresiones sensoriales distintas ('dulce fragancia dorada')" },
              { native: "Encabalgamiento", english: "Enjambment (overflow of verse line)", left: "Encabalgamiento", right: "Desajuste entre la pausa versal y la sintaxis gramatical" },
              { native: "Metonimia", english: "Metonymy (part for whole / cause for effect)", left: "Metonimia", right: "Designar una realidad con el nombre de otra contigua" },
              { native: "Anáfora", english: "Anaphora (repetition at start of clauses)", left: "Anáfora", right: "Repetición intencionada de palabras al inicio de verso o frase" }
            ]
          },
          {
            id: "es-u20-l2-q5",
            type: "scramble",
            prompt: "Ordena los versos de Federico García Lorca en 'Romancero Gitano':",
            tokens: ["Verde", "que", "te", "quiero", "verde.", "Verde", "viento.", "Verdes", "ramas."],
            correctTokens: ["Verde", "que", "te", "quiero", "verde.", "Verde", "viento.", "Verdes", "ramas."],
            explanation: "Comienzo del legendario 'Romance Sonámbulo' lorquiano impregnado de simbolismo vanguardista."
          },
          {
            id: "es-u20-l2-q6",
            type: "multiple_choice",
            prompt: "¿Qué obra revolucionó la novela vanguardista en español en 1963 proponiendo un 'tablero de dirección' para ser leída en múltiples órdenes?",
            options: ["Rayuela de Julio Cortázar", "La colmena de Camilo José Cela", "Pedro Páramo de Juan Rulfo", "Sobre héroes y tumbas de Ernesto Sabato"],
            correctAnswer: "Rayuela de Julio Cortázar",
            explanation: "'Rayuela' de Cortázar dinamitó la linealidad de la lectura convirtiendo al lector en cómplice activo."
          },
          {
            id: "es-u20-l2-q7",
            type: "fill_blank",
            sentence: "La gran novela del escritor mexicano Juan Rulfo que transcurre en el pueblo fantasmal de Comala se titula 'Pedro ___'.",
            missingWord: "Páramo",
            options: ["Páramo", "Martínez", "Crespo", "Navarro"],
            correctAnswer: "Páramo",
            explanation: "'Pedro Páramo' (1955) es una de las obras maestras absolutas de la literatura universal en español."
          },
          {
            id: "es-u20-l2-q8",
            type: "matching",
            prompt: "Empareja los Premios Nobel de Literatura en lengua española con su nacionalidad:",
            pairs: [
              { native: "Gabriela Mistral (1945)", english: "Chilean poet", left: "Gabriela Mistral", right: "Chile (Primera escritora latinoamericana galardonada)" },
              { native: "Octavio Paz (1990)", english: "Mexican essayist and poet", left: "Octavio Paz", right: "México (El laberinto de la soledad)" },
              { native: "Mario Vargas Llosa (2010)", english: "Peruvian novelist", left: "Mario Vargas Llosa", right: "Perú / España (La fiesta del Chivo)" },
              { native: "Vicente Aleixandre (1977)", english: "Spanish Generation of '27 poet", left: "Vicente Aleixandre", right: "España (Generación del 27)" }
            ]
          },
          {
            id: "es-u20-l2-q9",
            type: "scramble",
            prompt: "Ordena las palabras para sintetizar una conclusión de crítica hermenéutica:",
            tokens: ["El", "texto", "abre", "múltiples", "lecturas", "interpretativas", "en", "el", "lector."],
            correctTokens: ["El", "texto", "abre", "múltiples", "lecturas", "interpretativas", "en", "el", "lector."],
            explanation: "Concepto de polisemia y apertura estética en la hermenéutica literaria contemporánea."
          },
          {
            id: "es-u20-l2-q10",
            type: "multiple_choice",
            prompt: "¿Cuál es el tema primordial del ensayo 'El laberinto de la soledad' de Octavio Paz?",
            options: [
              "La indagación ontológica, psicológica e histórica sobre la identidad y máscaras del mexicano",
              "Un estudio botánico sobre la selva de Yucatán",
              "Un recetario de gastronomía prehispánica",
              "La historia del ferrocarril en Norteamérica"
            ],
            correctAnswer: "La indagación ontológica, psicológica e histórica sobre la identidad y máscaras del mexicano",
            explanation: "Paz desentraña el alma colectiva, las heridas de la Conquista y los ritos de la mexicanidad con excelsa prosa ensayística."
          }
        ]
      }
    ]
  }
];
