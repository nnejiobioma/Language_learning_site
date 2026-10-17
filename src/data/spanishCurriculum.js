// LOMLOE & Real Decreto 217/2022 Aligned Spanish Curriculum
// Lengua Castellana y Literatura — 1º de ESO (Educación Secundaria Obligatoria)
// 5 Core Units • 10 Targeted Lessons • Exactly 20 Questions per Lesson = 200 Questions Total
// Structured around: Situaciones de aprendizaje, Competencias clave & Saberes básicos
// Blocks: Las lenguas y sus hablantes, Comunicación, Educación literaria, Reflexión sobre la lengua

export const spanishAllUnits = [
  {
    id: "es-unit-1",
    unitId: "es-unit-1",
    unitNumber: 1,
    level: "1º ESO — Bloque 1",
    title: "Unidad 1: Voces de mi entorno (Voices of My Environment)",
    subtitle: "Situación de aprendizaje: Mapa lingüístico y podcast autobiográfico. Diversidad lingüística, comunicación y clases de palabras.",
    icon: "Globe2",
    color: "#ef4444",
    lessons: [
      {
        id: "es-u1-l1",
        title: "Lección 1.1–1.3: Diversidad Lingüística y Comunicación Humana",
        description: "¿Quiénes somos y cómo hablamos?, los elementos del circuito comunicativo y las normas de la interacción oral.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u1-l1-q1",
            type: "multiple_choice",
            prompt: "Según la Constitución Española de 1978 y el RD 217/2022, ¿cuál es el estatus lingüístico del castellano en todo el Estado?",
            options: [
              "Es la lengua española oficial del Estado que todos los españoles tienen el deber de conocer y el derecho a usar.",
              "Es una lengua cooficial solo en las comunidades autónomas del centro peninsular.",
              "Es una lengua de uso optativo en las instituciones públicas.",
              "Es una lengua extranjera de origen romance no oficial."
            ],
            correctAnswer: "Es la lengua española oficial del Estado que todos los españoles tienen el deber de conocer y el derecho a usar.",
            explanation: "El artículo 3 de la Constitución establece que el castellano es la lengua oficial del Estado, junto con las demás lenguas españolas cooficiales en sus respectivas Comunidades Autónomas."
          },
          {
            id: "es-u1-l1-q2",
            type: "matching",
            prompt: "Empareja cada lengua cooficial de España con su respectiva comunidad autónoma:",
            pairs: [
              { native: "Gallego", english: "Galicia", left: "Gallego", right: "Galicia" },
              { native: "Euskera / Vascuence", english: "País Vasco y Navarra", left: "Euskera / Vascuence", right: "País Vasco y Navarra" },
              { native: "Catalán / Valenciano", english: "Cataluña, C. Valenciana, Baleares", left: "Catalán / Valenciano", right: "Cataluña, C. Valenciana, Baleares" },
              { native: "Castellano", english: "Oficial en toda España", left: "Castellano", right: "Oficial en toda España" }
            ]
          },
          {
            id: "es-u1-l1-q3",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes lenguas de España NO procede del latín (no es una lengua romance)?",
            options: ["Euskera", "Castellano", "Gallego", "Catalán"],
            correctAnswer: "Euskera",
            explanation: "El euskera es una lengua prerromana de origen incierto y no emparentada con la familia indoeuropea; las demás proceden del latín vulgar."
          },
          {
            id: "es-u1-l1-q4",
            type: "fill_blank",
            sentence: "En el esquema de la comunicación humana, el medio físico por el cual viaja el mensaje (el aire, el papel, la pantalla) se denomina ___.",
            missingWord: "canal",
            options: ["canal", "código", "emisor", "contexto"],
            correctAnswer: "canal",
            explanation: "El canal es el soporte material o medio físico a través del cual se transmite el mensaje desde el emisor hasta el receptor."
          },
          {
            id: "es-u1-l1-q5",
            type: "scramble",
            prompt: "Ordena los seis elementos esenciales del circuito de la comunicación:",
            tokens: ["Emisor,", "receptor,", "mensaje,", "código,", "canal", "y", "contexto."],
            correctTokens: ["Emisor,", "receptor,", "mensaje,", "código,", "canal", "y", "contexto."],
            explanation: "El modelo clásico de la comunicación humana se fundamenta en estos seis factores interactivos."
          },
          {
            id: "es-u1-l1-q6",
            type: "multiple_choice",
            prompt: "Si dos amigos conversan por WhatsApp utilizando palabras y emoticonos en español, ¿cuál es el código empleado?",
            options: [
              "La lengua española y los signos gráficos convencionales de los emoticonos.",
              "El teléfono móvil de última generación.",
              "La red de fibra óptica o señal satelital.",
              "La habitación en la que se encuentra cada uno."
            ],
            correctAnswer: "La lengua española y los signos gráficos convencionales de los emoticonos.",
            explanation: "El código es el sistema organizado de signos y reglas que emisor y receptor comparten para cifrar y descifrar la información."
          },
          {
            id: "es-u1-l1-q7",
            type: "matching",
            prompt: "Relaciona cada elemento comunicativo con su función en el diálogo:",
            pairs: [
              { native: "Emisor", english: "Elabora y emite el mensaje", left: "Emisor", right: "Elabora y emite el mensaje" },
              { native: "Receptor", english: "Recibe e interpreta el mensaje", left: "Receptor", right: "Recibe e interpreta el mensaje" },
              { native: "Contexto / Situación", english: "Circunstancias temporales y espaciales", left: "Contexto / Situación", right: "Circunstancias temporales y espaciales" },
              { native: "Mensaje", english: "Contenido o información transmitida", left: "Mensaje", right: "Contenido o información transmitida" }
            ]
          },
          {
            id: "es-u1-l1-q8",
            type: "fill_blank",
            sentence: "En una conversación cotidiana respetuosa, respetar los ___ de palabra evita las interrupciones y garantiza una escucha activa.",
            missingWord: "turnos",
            options: ["turnos", "gritos", "monólogos", "mensajes"],
            correctAnswer: "turnos",
            explanation: "El turno de palabra es la unidad básica de interacción dialogada que regula la alternancia de los interlocutores."
          },
          {
            id: "es-u1-l1-q9",
            type: "audio_listen",
            phrase: "Buenos días a todos, es un placer presentarme ante vosotros.",
            prompt: "¿A qué registro lingüístico y situación comunicativa corresponde este enunciado oral?",
            options: [
              "Registro formal en una presentación pública o escolar.",
              "Registro coloquial vulgar entre amigos íntimos en el recreo.",
              "Monólogo interior no dirigido a ningún interlocutor.",
              "Conversación telegráfica de urgencia."
            ],
            correctAnswer: "Registro formal en una presentación pública o escolar.",
            explanation: "El empleo de fórmulas de cortesía ('Buenos días', 'es un placer') denota un registro formal adecuado para una situación pública o académica."
          },
          {
            id: "es-u1-l1-q10",
            type: "multiple_choice",
            prompt: "¿Qué rasgo lingüístico caracteriza a las variedades meridionales del español (como el andaluz o el canario)?",
            options: [
              "El seseo (pronunciar la 'c/z' como 's') y la aspiración de la 's' al final de sílaba.",
              "La desaparición total de las vocales en posición inicial.",
              "El uso del infinitivo en lugar del imperativo en todos los casos.",
              "La sustitución de los verbos por sustantivos abstractos."
            ],
            correctAnswer: "El seseo (pronunciar la 'c/z' como 's') y la aspiración de la 's' al final de sílaba.",
            explanation: "El seseo y la aspiración de implosivas son rasgos fonéticos ampliamente documentados en el sur de España y en el español de América."
          },
          {
            id: "es-u1-l1-q11",
            type: "scramble",
            prompt: "Forma el principio básico de tolerancia lingüística del currículo LOMLOE:",
            tokens: ["Todas", "las", "lenguas", "poseen", "el", "mismo", "valor", "cultural."],
            correctTokens: ["Todas", "las", "lenguas", "poseen", "el", "mismo", "valor", "cultural."],
            explanation: "La lingüística moderna y la LOMLOE enseñan que ninguna lengua o variedad dialectal es intrínsecamente superior a otra."
          },
          {
            id: "es-u1-l1-q12",
            type: "matching",
            prompt: "Empareja el fenómeno dialectal con su definición descriptiva:",
            pairs: [
              { native: "Seseo", english: "Pronunciar 'z' y 'c' ante e/i con sonido /s/", left: "Seseo", right: "Pronunciar 'z' y 'c' ante e/i con sonido /s/" },
              { native: "Ceceo", english: "Pronunciar la 's' con articulación interdental /θ/", left: "Ceceo", right: "Pronunciar la 's' con articulación interdental /θ/" },
              { native: "Yeísmo", english: "Pronunciar el dígrafo 'll' con el sonido de la 'y'", left: "Yeísmo", right: "Pronunciar el dígrafo 'll' con el sonido de la 'y'" },
              { native: "Leísmo", english: "Uso de 'le/les' en función de complemento directo de persona", left: "Leísmo", right: "Uso de 'le/les' en función de complemento directo de persona" }
            ]
          },
          {
            id: "es-u1-l1-q13",
            type: "fill_blank",
            sentence: "La capacidad de ponerse en el lugar del interlocutor y prestar atención plena a lo que expresa sin juzgar precipitadamente se llama escucha ___.",
            missingWord: "activa",
            options: ["activa", "pasiva", "distraída", "interrumpida"],
            correctAnswer: "activa",
            explanation: "La escucha activa es una competencia comunicativa esencial que implica atender, procesar y manifestar comprensión durante el diálogo."
          },
          {
            id: "es-u1-l1-q14",
            type: "multiple_choice",
            prompt: "En una situación comunicativa oral, los gestos, la mirada y la postura corporal forman parte de:",
            options: [
              "La comunicación no verbal o paralingüística.",
              "El código alfabético estricto de la Real Academia.",
              "El canal auditivo exclusively.",
              "La sintaxis oracional compleja."
            ],
            correctAnswer: "La comunicación no verbal o paralingüística.",
            explanation: "Los elementos kinésicos (gestos, posturas) y paralingüísticos complementan y modulan el significado del mensaje verbal."
          },
          {
            id: "es-u1-l1-q15",
            type: "multiple_choice",
            prompt: "¿Qué variedad del español cuenta con más de 450 millones de hablantes y una riquísima diversidad léxica y fonética?",
            options: [
              "El español de América (Hispanoamérica).",
              "El español medieval alfonsí.",
              "El dialecto mozárabe extinguido.",
              "El latín arcaico peninsular."
            ],
            correctAnswer: "El español de América (Hispanoamérica).",
            explanation: "Hispanoamérica concentra más del 90% de los hispanohablantes del planeta, conformando una comunidad lingüística de extraordinaria vitalidad."
          },
          {
            id: "es-u1-l1-q16",
            type: "matching",
            prompt: "Empareja cada americanismo incorporado al español general con su concepto:",
            pairs: [
              { native: "Chocolate", english: "Voz de origen náhuatl (xocoatl)", left: "Chocolate", right: "Voz de origen náhuatl (xocoatl)" },
              { native: "Canoa", english: "Primer americanismo recogido por Colón (taíno)", left: "Canoa", right: "Primer americanismo recogido por Colón (taíno)" },
              { native: "Patata / Papa", english: "Voz de origen quechua / taíno", left: "Patata / Papa", right: "Voz de origen quechua / taíno" },
              { native: "Hamaca", english: "Red para dormir de origen taíno", left: "Hamaca", right: "Red para dormir de origen taíno" }
            ]
          },
          {
            id: "es-u1-l1-q17",
            type: "fill_blank",
            sentence: "Cuando un semáforo se pone en rojo para los conductores, actúa como un emisor que transmite un mensaje visual mediante un código ___.",
            missingWord: "no verbal",
            options: ["no verbal", "verbal escrito", "sonoro acústico", "literario"],
            correctAnswer: "no verbal",
            explanation: "Las señales de tráfico, luces y colores son códigos no verbales consensuados universalmente para regular acciones sociales."
          },
          {
            id: "es-u1-l1-q18",
            type: "scramble",
            prompt: "Ordena los elementos para definir la adecuación lingüística:",
            tokens: ["Adaptar", "el", "registro", "a", "la", "situación", "comunicativa."],
            correctTokens: ["Adaptar", "el", "registro", "a", "la", "situación", "comunicativa."],
            explanation: "La adecuación es la propiedad textual por la que el emisor escoge el lenguaje oportuno al contexto y destinatario."
          },
          {
            id: "es-u1-l1-q19",
            type: "multiple_choice",
            prompt: "Durante la grabación del podcast del aula, ¿cuál de las siguientes recomendaciones técnicas y lingüísticas es correcta?",
            options: [
              "Modular el volumen de voz, vocalizar con claridad y evitar muletillas constantes como 'ehhh' o 'o sea'.",
              "Gritar lo más fuerte posible para que el micrófono sature la señal.",
              "Leer un texto ajeno a toda velocidad sin respetar los signos de puntuación.",
              "Improvisar sin haber redactado previamente un guion o escaleta."
            ],
            correctAnswer: "Modular el volumen de voz, vocalizar con claridad y evitar muletillas constantes como 'ehhh' o 'o sea'.",
            explanation: "La oratoria y la grabación de podcasts requieren prosodia cuidada, ritmo pausado, buena vocalización y preparación mediante guion."
          },
          {
            id: "es-u1-l1-q20",
            type: "audio_listen",
            phrase: "¡Che, qué lindo verte de nuevo después de tanto tiempo!",
            prompt: "¿De qué variante geográfica del español es característico el vocativo 'Che' y la entonación rioplatense?",
            options: [
              "Español rioplatense (Argentina y Uruguay).",
              "Español septentrional de Castilla y León.",
              "Español caribeño de Cuba y Puerto Rico.",
              "Dialecto canario insular."
            ],
            correctAnswer: "Español rioplatense (Argentina y Uruguay).",
            explanation: "'Che' es un rasgo léxico y discursivo emblemático del español hablado en el Cono Sur (Argentina y Uruguay)."
          }
        ]
      },
      {
        id: "es-u1-l2",
        title: "Lección 1.4–1.6: Taller Autobiográfico y Clases de Palabras",
        description: "Redacción autobiográfica, morfología del sustantivo y adjetivo, y concordancia gramatical.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u1-l2-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la función semántica principal de la categoría gramatical del sustantivo o nombre?",
            options: [
              "Nombrar seres, objetos, lugares, ideas, sentimientos o conceptos.",
              "Indicar la acción o proceso temporal realizado por el sujeto.",
              "Unir oraciones independientes entre sí.",
              "Sustituir a los verbos en el predicado."
            ],
            correctAnswer: "Nombrar seres, objetos, lugares, ideas, sentimientos o conceptos.",
            explanation: "El sustantivo es la palabra nuclear que designa entidades de la realidad física (mesa, perro) o del pensamiento (libertad, esperanza)."
          },
          {
            id: "es-u1-l2-q2",
            type: "matching",
            prompt: "Clasifica cada sustantivo según su tipología semántica:",
            pairs: [
              { native: "Jauría", english: "Sustantivo colectivo", left: "Jauría", right: "Sustantivo colectivo" },
              { native: "Madrid", english: "Sustantivo propio", left: "Madrid", right: "Sustantivo propio" },
              { native: "Alegría", english: "Sustantivo abstracto", left: "Alegría", right: "Sustantivo abstracto" },
              { native: "Lápiz", english: "Sustantivo concreto e individual", left: "Lápiz", right: "Sustantivo concreto e individual" }
            ]
          },
          {
            id: "es-u1-l2-q3",
            type: "fill_blank",
            sentence: "Un sustantivo que en singular nombra a un conjunto de seres de la misma especie (como 'rebaño', 'enjambre' o 'bosque') es un sustantivo ___.",
            missingWord: "colectivo",
            options: ["colectivo", "individual", "propio", "incontable"],
            correctAnswer: "colectivo",
            explanation: "Los sustantivos colectivos expresan en singular una pluralidad o conjunto homogéneo de elementos."
          },
          {
            id: "es-u1-l2-q4",
            type: "multiple_choice",
            prompt: "¿Qué regla de concordancia básica rige entre el sustantivo y el adjetivo que lo acompaña?",
            options: [
              "Deben concordar obligatoriamente en género (masculino/femenino) y número (singular/plural).",
              "El adjetivo siempre permanece invariable en masculino singular.",
              "Solo concuerdan en número pero nunca en género.",
              "El sustantivo adopta el tiempo y el modo del adjetivo."
            ],
            correctAnswer: "Deben concordar obligatoriamente en género (masculino/femenino) y número (singular/plural).",
            explanation: "La concordancia nominal exige igualdad formal de morfemas de género y número: 'gatas blancas', 'ríos caudalosos'."
          },
          {
            id: "es-u1-l2-q5",
            type: "scramble",
            prompt: "Ordena los elementos para construir una oración autobiográfica concordada:",
            tokens: ["Nací", "en", "una", "hermosa", "ciudad", "mediterránea."],
            correctTokens: ["Nací", "en", "una", "hermosa", "ciudad", "mediterránea."],
            explanation: "La oración sitúa temporal y espacialmente el relato autobiográfico con concordancia femenina singular: 'una hermosa ciudad mediterránea'."
          },
          {
            id: "es-u1-l2-q6",
            type: "matching",
            prompt: "Empareja cada adjetivo con su grado de significación correspondiente:",
            pairs: [
              { native: "Buenísimo / Muy bueno", english: "Grado superlativo", left: "Buenísimo / Muy bueno", right: "Grado superlativo" },
              { native: "Más alto que", english: "Grado comparativo de superioridad", left: "Más alto que", right: "Grado comparativo de superioridad" },
              { native: "Tan alegre como", english: "Grado comparativo de igualdad", left: "Tan alegre como", right: "Grado comparativo de igualdad" },
              { native: "Grande", english: "Grado positivo", left: "Grande", right: "Grado positivo" }
            ]
          },
          {
            id: "es-u1-l2-q7",
            type: "multiple_choice",
            prompt: "¿Cuál de los siguientes pares de palabras ejemplifica sustantivos heterónimos (que cambian de raíz para el masculino y femenino)?",
            options: [
              "Caballo / Yegua (o Toro / Vaca)",
              "Niño / Niña",
              "Gato / Gata",
              "Profesor / Profesora"
            ],
            correctAnswer: "Caballo / Yegua (o Toro / Vaca)",
            explanation: "Los heterónimos utilizan lexemas completamente distintos para diferenciar el sexo biológico en lugar de morfemas flexivos (-o/-a)."
          },
          {
            id: "es-u1-l2-q8",
            type: "fill_blank",
            sentence: "En la frase 'Los alumnos inteligentes participaron con entusiasmo', la palabra 'inteligentes' es un adjetivo calificativo de ___ terminación para el género.",
            missingWord: "una",
            options: ["una", "dos", "tres", "cero"],
            correctAnswer: "una",
            explanation: "Los adjetivos de una sola terminación ('inteligente', 'feliz', 'amable') no cambian formalmente entre masculino y femenino."
          },
          {
            id: "es-u1-l2-q9",
            type: "multiple_choice",
            prompt: "En un texto autobiográfico, ¿qué persona gramatical y tiempos verbales suelen predominar?",
            options: [
              "Primera persona ('yo') combinando el presente de indicativo y tiempos de pasado (pretéritos).",
              "Segunda persona del imperativo ('haz', 'mira').",
              "Tercera persona del plural exclusivamente en futuro imperfecto.",
              "Voz pasiva con infinitivos continuos."
            ],
            correctAnswer: "Primera persona ('yo') combinando el presente de indicativo y tiempos de pasado (pretéritos).",
            explanation: "La autobiografía es un texto autorreferencial narrado en 1ª persona donde el emisor relata su propia trayectoria vital."
          },
          {
            id: "es-u1-l2-q10",
            type: "audio_listen",
            phrase: "Mi infancia transcurrió en un pueblo tranquilo rodeado de montañas verdes.",
            prompt: "¿Cuáles son los dos sustantivos acompañados de adjetivos calificativos en la frase escuchada?",
            options: [
              "'Pueblo tranquilo' y 'montañas verdes'.",
              "'Infancia transcurrió' y 'rodeado de'.",
              "'Tranquilo verdes' y 'un pueblo'.",
              "'Mi infancia' y 'de montañas'."
            ],
            correctAnswer: "'Pueblo tranquilo' y 'montañas verdes'.",
            explanation: "'Pueblo' (sustantivo) está modificado por 'tranquilo' (adjetivo), y 'montañas' (sustantivo) por 'verdes' (adjetivo)."
          },
          {
            id: "es-u1-l2-q11",
            type: "scramble",
            prompt: "Ordena los elementos para definir el concepto de adjetivo explicativo o epíteto:",
            tokens: ["Destaca", "una", "cualidad", "propia", "e", "intrínseca", "del", "sustantivo."],
            correctTokens: ["Destaca", "una", "cualidad", "propia", "e", "intrínseca", "del", "sustantivo."],
            explanation: "El epíteto (como 'blanca nieve' o 'fiero león') resalta un rasgo connatural al ser sin restringir su extensión."
          },
          {
            id: "es-u1-l2-q12",
            type: "matching",
            prompt: "Identifica la regla de formación del plural en estos sustantivos españoles:",
            pairs: [
              { native: "Casa -> Casas", english: "Termina en vocal átona: añade -s", left: "Casa -> Casas", right: "Termina en vocal átona: añade -s" },
              { native: "Árbol -> Árboles", english: "Termina en consonante: añade -es", left: "Árbol -> Árboles", right: "Termina en consonante: añade -es" },
              { native: "Rubí -> Rubíes / Rubís", english: "Termina en vocal tónica: admite -es / -s", left: "Rubí -> Rubíes / Rubís", right: "Termina en vocal tónica: admite -es / -s" },
              { native: "El lunes -> Los lunes", english: "Palabra llana terminada en -s: invariable", left: "El lunes -> Los lunes", right: "Palabra llana terminada en -s: invariable" }
            ]
          },
          {
            id: "es-u1-l2-q13",
            type: "fill_blank",
            sentence: "Los sustantivos como 'el calor / la calor' o 'el mar / la mar' que pueden usarse indistintamente en masculino o femenino se llaman sustantivos ___.",
            missingWord: "ambiguos",
            options: ["ambiguos", "epicenos", "heterónimos", "comunes en cuanto al género"],
            correctAnswer: "ambiguos",
            explanation: "Los sustantivos ambiguos en cuanto al género admiten ambos géneros sin que ello implique una variación en su significado referencial."
          },
          {
            id: "es-u1-l2-q14",
            type: "multiple_choice",
            prompt: "Sustantivos como 'el águila real' o 'la jirafa macho' que tienen un único género gramatical para ambos sexos biológicos se denominan:",
            options: [
              "Sustantivos epicenos.",
              "Sustantivos ambiguos.",
              "Sustantivos heterónimos.",
              "Sustantivos homónimos."
            ],
            correctAnswer: "Sustantivos epicenos.",
            explanation: "Los sustantivos epicenos poseen un género gramatical inherente fijo y requieren añadir 'macho' o 'hembra' para precisar el sexo."
          },
          {
            id: "es-u1-l2-q15",
            type: "multiple_choice",
            prompt: "¿Cuál de los siguientes adjetivos presenta una forma sintética irregular en grado superlativo absoluto culto?",
            options: [
              "Paupérrimo (de pobre).",
              "Pobrísimo (única forma admitida).",
              "Superpobre.",
              "Más que pobre."
            ],
            correctAnswer: "Paupérrimo (de pobre).",
            explanation: "Del latín paupérrimus procede el superlativo culto 'paupérrimo', al igual que 'celebérrimo' (de célebre) o 'misérrimo' (de mísero)."
          },
          {
            id: "es-u1-l2-q16",
            type: "matching",
            prompt: "Relaciona el adjetivo en grado comparativo sintético con su positivo correspondiente:",
            pairs: [
              { native: "Mejor", english: "Comparativo de 'bueno'", left: "Mejor", right: "Comparativo de 'bueno'" },
              { native: "Peor", english: "Comparativo de 'malo'", left: "Peor", right: "Comparativo de 'malo'" },
              { native: "Mayor", english: "Comparativo de 'grande' o de edad", left: "Mayor", right: "Comparativo de 'grande' o de edad" },
              { native: "Menor", english: "Comparativo de 'pequeño' o de edad", left: "Menor", right: "Comparativo de 'pequeño' o de edad" }
            ]
          },
          {
            id: "es-u1-l2-q17",
            type: "fill_blank",
            sentence: "En el taller de escritura, la fase de ___ consiste en revisar la ortografía, la coherencia de los párrafos y la riqueza del léxico antes de publicar.",
            missingWord: "edición",
            options: ["edición", "improvisación", "olvido", "destrucción"],
            correctAnswer: "edición",
            explanation: "El proceso escritor consta de planificación (lluvia de ideas), textualización (borrador) y revisión/edición final."
          },
          {
            id: "es-u1-l2-q18",
            type: "scramble",
            prompt: "Ordena los pasos del proceso de escritura según la metodología LOMLOE:",
            tokens: ["Planificar,", "redactar", "el", "borrador,", "revisar", "y", "publicar."],
            correctTokens: ["Planificar,", "redactar", "el", "borrador,", "revisar", "y", "publicar."],
            explanation: "Las directrices educativas enfatizan la escritura procesual reflexiva frente al producto espontáneo sin pulir."
          },
          {
            id: "es-u1-l2-q19",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta del femenino plural para el sustantivo compuesto 'el paraguas'?",
            options: [
              "Los paraguas (es invariable en número, y gramaticalmente masculino).",
              "Las paraguas.",
              "Los paraguases.",
              "Las paraguases."
            ],
            correctAnswer: "Los paraguas (es invariable en número, y gramaticalmente masculino).",
            explanation: "'Paraguas' es una palabra compuesta de género masculino invariable en plural: 'el paraguas / los paraguas'."
          },
          {
            id: "es-u1-l2-q20",
            type: "audio_listen",
            phrase: "Soy una estudiante responsable y me apasiona la lectura.",
            prompt: "¿Cuál es el adjetivo calificativo y qué función sintáctica y morfológica cumple?",
            options: [
              "'Responsable' (adjetivo de una terminación concordado en femenino singular con 'estudiante').",
              "'Lectura' (verbo en forma no personal).",
              "'Apasiona' (sustantivo colectivo abstracto).",
              "'Una' (adjetivo superlativo absoluto)."
            ],
            correctAnswer: "'Responsable' (adjetivo de una terminación concordado en femenino singular con 'estudiante').",
            explanation: "'Responsable' es un adjetivo que concuerda en género femenino y número singular con el sustantivo común en cuanto al género 'estudiante'."
          }
        ]
      }
    ]
  },
  {
    id: "es-unit-2",
    unitId: "es-unit-2",
    unitNumber: 2,
    level: "1º ESO — Bloque 2",
    title: "Unidad 2: Historias que cuentan (Stories That Tell)",
    subtitle: "Situación de aprendizaje: Creación de un microrrelato o cómic digital. Estructuras narrativas, tiempos del pasado y sistema verbal.",
    icon: "BookOpen",
    color: "#f59e0b",
    lessons: [
      {
        id: "es-u2-l1",
        title: "Lección 2.1–2.3: Estructura Narrativa y Tiempos del Pasado",
        description: "Partes del relato (planteamiento, nudo, desenlace), tipos de narrador y el contraste indefinido/imperfecto.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u2-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuáles son las tres partes canónicas que componen la estructura lineal de un texto narrativo?",
            options: [
              "Planteamiento (introducción), nudo (conflicto) y desenlace (resolución).",
              "Tesis, argumentos y antítesis.",
              "Portada, contraportada y lomo.",
              "Índice, bibliografía y glosario."
            ],
            correctAnswer: "Planteamiento (introducción), nudo (conflicto) y desenlace (resolución).",
            explanation: "La narración tradicional articula la historia desde la presentación de personajes y marco (planteamiento), el clímax o conflicto (nudo) hasta el desenlace."
          },
          {
            id: "es-u2-l1-q2",
            type: "matching",
            prompt: "Relaciona cada elemento estructural del relato con su contenido específico:",
            pairs: [
              { native: "Planteamiento", english: "Presenta personajes, espacio y tiempo inicial", left: "Planteamiento", right: "Presenta personajes, espacio y tiempo inicial" },
              { native: "Nudo", english: "Acontece el conflicto central y su clímax", left: "Nudo", right: "Acontece el conflicto central y su clímax" },
              { native: "Desenlace", english: "Resolución final favorable o desfavorable", left: "Desenlace", right: "Resolución final favorable o desfavorable" },
              { native: "Marco narrativo", english: "Coordenadas de tiempo y espacio de la trama", left: "Marco narrativo", right: "Coordenadas de tiempo y espacio de la trama" }
            ]
          },
          {
            id: "es-u2-l1-q3",
            type: "multiple_choice",
            prompt: "Un narrador que conoce los pensamientos íntimos, secretos y sentimientos de todos los personajes sin participar en la trama es un narrador:",
            options: [
              "Tercera persona omnisciente.",
              "Primera persona protagonista.",
              "Primera persona testigo.",
              "Segunda persona epistolar."
            ],
            correctAnswer: "Tercera persona omnisciente.",
            explanation: "El narrador omnisciente actúa como un 'dios' del relato que todo lo sabe (lo visible y lo psicológico invisible)."
          },
          {
            id: "es-u2-l1-q4",
            type: "fill_blank",
            sentence: "En el relato en pasado, el pretérito ___ se utiliza para describir escenarios, estados de ánimo o acciones habituales continuas.",
            missingWord: "imperfecto",
            options: ["imperfecto", "indefinido", "pluscuamperfecto", "anterior"],
            correctAnswer: "imperfecto",
            explanation: "El pretérito imperfecto ('hacía frío', 'caminaba todos los días') expresa el fondo descriptivo y la duración sin marcar el inicio ni el fin de la acción."
          },
          {
            id: "es-u2-l1-q5",
            type: "scramble",
            prompt: "Ordena los verbos en una clásica alternancia de imperfecto e indefinido:",
            tokens: ["Llovía", "fuertemente", "cuando", "de", "pronto", "sonó", "el", "teléfono."],
            correctTokens: ["Llovía", "fuertemente", "cuando", "de", "pronto", "sonó", "el", "teléfono."],
            explanation: "'Llovía' (imperfecto) describe la acción durativa de fondo, y 'sonó' (indefinido) la acción puntual que interrumpe."
          },
          {
            id: "es-u2-l1-q6",
            type: "matching",
            prompt: "Diferencia el valor aspectual de estos dos pretéritos narrativos:",
            pairs: [
              { native: "Pretérito perfecto simple (indefinido)", english: "Acción terminada, puntual, hace avanzar la historia", left: "Pretérito perfecto simple (indefinido)", right: "Acción terminada, puntual, hace avanzar la historia" },
              { native: "Pretérito imperfecto", english: "Acción en curso, descriptiva, habitual en el pasado", left: "Pretérito imperfecto", right: "Acción en curso, descriptiva, habitual en el pasado" },
              { native: "Pretérito pluscuamperfecto", english: "Acción pasada anterior a otra también pasada", left: "Pretérito pluscuamperfecto", right: "Acción pasada anterior a otra también pasada" },
              { native: "Presente histórico", english: "Actualiza hechos del pasado para dar viveza", left: "Presente histórico", right: "Actualiza hechos del pasado para dar viveza" }
            ]
          },
          {
            id: "es-u2-l1-q7",
            type: "multiple_choice",
            prompt: "En la frase: 'Ayer Juan llegó a su casa, abrió la puerta y vio la sorpresa', los tres verbos conjugados están en:",
            options: [
              "Pretérito perfecto simple (pretérito indefinido).",
              "Pretérito imperfecto de subjuntivo.",
              "Futuro compuesto de indicativo.",
              "Condicional simple."
            ],
            correctAnswer: "Pretérito perfecto simple (pretérito indefinido).",
            explanation: "'Llegó', 'abrió' y 'vio' son acciones perfectivas concluidas y secuenciales que hacen avanzar el hilo narrativo."
          },
          {
            id: "es-u2-l1-q8",
            type: "fill_blank",
            sentence: "Cuando una narración comienza directamente en el medio de la acción o conflicto se dice que comienza 'in media ___'.",
            missingWord: "res",
            options: ["res", "mente", "causa", "fide"],
            correctAnswer: "res",
            explanation: "La locución latina 'in media res' designa la técnica narrativa de situar al lector en pleno desarrollo del conflicto inicial."
          },
          {
            id: "es-u2-l1-q9",
            type: "audio_listen",
            phrase: "El viento soplaba entre las ramas mientras el detective examinaba la extraña huella en el suelo.",
            prompt: "¿Qué tipo de escena narrativa se establece con el uso combinado de 'soplaba' y 'examinaba'?",
            options: [
              "Una escena descriptiva de suspense y observación simultánea en pasado.",
              "Un diálogo teatral acelerado entre dos personajes.",
              "Una conclusión definitiva con desenlace cerrado.",
              "Una receta de instrucciones técnicas."
            ],
            correctAnswer: "Una escena descriptiva de suspense y observación simultánea en pasado.",
            explanation: "La simultaneidad en pretérito imperfecto genera la ambientación descriptiva ideal para el género detectivesco o de misterio."
          },
          {
            id: "es-u2-l1-q10",
            type: "multiple_choice",
            prompt: "¿Cuál de los siguientes verbos denota una acción de habla que introduce estilo directo en una narración?",
            options: [
              "Exclamó / susurró / contestó (verbos de decir o dicendi).",
              "Dormía plácidamente.",
              "Brillaban las estrellas.",
              "Lentamente amanecía."
            ],
            correctAnswer: "Exclamó / susurró / contestó (verbos de decir o dicendi).",
            explanation: "Los verba dicendi o verbos de habla sirven para introducir los parlamentos de los personajes en estilo directo tras raya de diálogo."
          },
          {
            id: "es-u2-l1-q11",
            type: "scramble",
            prompt: "Construye una réplica dialogada con raya de diálogo y acotación:",
            tokens: ["—¡No", "te", "rindas", "jamás!—", "animó", "el", "anciano", "maestro."],
            correctTokens: ["—¡No", "te", "rindas", "jamás!—", "animó", "el", "anciano", "maestro."],
            explanation: "En la normativa tipográfica del español, las intervenciones de diálogo se abren con raya larga (—) sin espacio respecto a la primera letra."
          },
          {
            id: "es-u2-l1-q12",
            type: "matching",
            prompt: "Empareja cada subgénero narrativo con su característica distintiva:",
            pairs: [
              { native: "Mito", english: "Relato sagrado sobre el origen del mundo o dioses", left: "Mito", right: "Relato sagrado sobre el origen del mundo o dioses" },
              { native: "Leyenda", english: "Relato tradicional con base histórica y elementos sobrenaturales", left: "Leyenda", right: "Relato tradicional con base histórica y elementos sobrenaturales" },
              { native: "Fábula", english: "Narración breve con animales y moraleja final explícita", left: "Fábula", right: "Narración breve con animales y moraleja final explícita" },
              { native: "Microrrelato", english: "Narración brevísima de gran condensación e impacto", left: "Microrrelato", right: "Narración brevísima de gran condensación e impacto" }
            ]
          },
          {
            id: "es-u2-l1-q13",
            type: "fill_blank",
            sentence: "El famoso texto 'Cuando despertó, el dinosaurio todavía estaba allí', escrito por Augusto Monterroso, es la obra cumbre del ___ hispanoamericano.",
            missingWord: "microrrelato",
            options: ["microrrelato", "teatro clásico", "ensayo filosófico", "soneto épico"],
            correctAnswer: "microrrelato",
            explanation: "El dinosaurio de Monterroso es considerado uno de los microrrelatos más célebres y estudiados de la literatura en español."
          },
          {
            id: "es-u2-l1-q14",
            type: "multiple_choice",
            prompt: "En el relato literario, el personaje que se opone directamente a las metas del protagonista se denomina:",
            options: ["Antagonista", "Narrador testigo", "Deuteragonista secundario", "Autor implícito"],
            correctAnswer: "Antagonista",
            explanation: "El antagonista encarna la fuerza de oposición que genera el conflicto central frente a los deseos del protagonista."
          },
          {
            id: "es-u2-l1-q15",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta de primera persona del singular en pretérito perfecto simple del verbo 'conducir'?",
            options: ["Conduje", "Conducí", "Condují", "Condujera"],
            correctAnswer: "Conduje",
            explanation: "Los verbos terminados en -ducir tienen un pretérito fuerte irregular con 'j' y desinencias átonas: conduje, condujiste, condujo."
          },
          {
            id: "es-u2-l1-q16",
            type: "matching",
            prompt: "Empareja cada verbo con su irregularidad propia en pretérito indefinido:",
            pairs: [
              { native: "Poner", english: "Puse, pusiste, puso...", left: "Poner", right: "Puse, pusiste, puso..." },
              { native: "Tener", english: "Tuve, tuviste, tuvo...", left: "Tener", right: "Tuve, tuviste, tuvo..." },
              { native: "Decir", english: "Dije, dijiste, dijo...", left: "Decir", right: "Dije, dijiste, dijo..." },
              { native: "Saber", english: "Supe, supiste, supo...", left: "Saber", right: "Supe, supiste, supo..." }
            ]
          },
          {
            id: "es-u2-l1-q17",
            type: "fill_blank",
            sentence: "Un salto temporal hacia el pasado dentro de la narración para evocar un recuerdo o acontecimiento previo se conoce como analepsis o ___.",
            missingWord: "flashback",
            options: ["flashback", "prolepsis", "elipsis", "suspense"],
            correctAnswer: "flashback",
            explanation: "La analepsis (o flashback) rompe la cronología lineal hacia atrás para explicar antecedentes esenciales de la historia."
          },
          {
            id: "es-u2-l1-q18",
            type: "scramble",
            prompt: "Ordena los elementos para definir el narrador protagonista:",
            tokens: ["Cuenta", "su", "propia", "historia", "en", "primera", "persona."],
            correctTokens: ["Cuenta", "su", "propia", "historia", "en", "primera", "persona."],
            explanation: "El narrador protagonista coincide con el personaje principal del argumento y relata desde su propia perspectiva subjetiva."
          },
          {
            id: "es-u2-l1-q19",
            type: "multiple_choice",
            prompt: "¿Qué conector temporal es idóneo para indicar la aparición sorpresiva del clímax en un relato?",
            options: [
              "De repente / súbitamente / de forma inesperada.",
              "En primer lugar.",
              "En conclusión.",
              "Por otra parte."
            ],
            correctAnswer: "De repente / súbitamente / de forma inesperada.",
            explanation: "Los conectores de inmediatez y sorpresa introducen la quiebra del equilibrio inicial que detona el nudo narrativo."
          },
          {
            id: "es-u2-l1-q20",
            type: "audio_listen",
            phrase: "Hacía años que nadie visitaba el castillo, hasta que una tarde de tormenta alguien llamó a la pesada puerta de roble.",
            prompt: "¿Cuál es la transición temporal y funcional de los dos verbos principales escuchados?",
            options: [
              "De estado continuado en imperfecto ('hacía') a evento puntual que detona la acción en indefinido ('llamó').",
              "Ambos verbos expresan acciones futuras improbables.",
              "Son dos formas imperativas de mandato escolar.",
              "Indican duda y vacilación en modo subjuntivo."
            ],
            correctAnswer: "De estado continuado en imperfecto ('hacía') a evento puntual que detona la acción en indefinido ('llamó').",
            explanation: "'Hacía' crea el marco durativo misterioso y 'llamó' desencadena la peripecia narrativa."
          }
        ]
      },
      {
        id: "es-u2-l2",
        title: "Lección 2.4–2.6: Creación Literaria y Sistema Verbal",
        description: "Análisis de relatos hispánicos, verbos de alternancia vocálica y taller del microrrelato o cómic.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u2-l2-q1",
            type: "multiple_choice",
            prompt: "En la morfología flexiva verbal del español, el verbo consta morfológicamente de:",
            options: [
              "Raíz o lexema (significado léxico) + desinencias verbales (tiempo, modo, aspecto, número y persona).",
              "Sustantivo común + adjetivo calificativo.",
              "Prefijo privativo + sufijo despectivo exclusivamente.",
              "Monema independiente invariable."
            ],
            correctAnswer: "Raíz o lexema (significado léxico) + desinencias verbales (tiempo, modo, aspecto, número y persona).",
            explanation: "El verbo es la palabra más rica morfológicamente: su raíz aporta la idea conceptual y las desinencias expresan los valores gramaticales."
          },
          {
            id: "es-u2-l2-q2",
            type: "matching",
            prompt: "Empareja cada conjugación regular con su vocal temática característica:",
            pairs: [
              { native: "Primera conjugación (-ar)", english: "Vocal temática 'a' (cantar, amar)", left: "Primera conjugación (-ar)", right: "Vocal temática 'a' (cantar, amar)" },
              { native: "Segunda conjugación (-er)", english: "Vocal temática 'e' (temer, comer)", left: "Segunda conjugación (-er)", right: "Vocal temática 'e' (temer, comer)" },
              { native: "Tercera conjugación (-ir)", english: "Vocal temática 'i' (partir, vivir)", left: "Tercera conjugación (-ir)", right: "Vocal temática 'i' (partir, vivir)" },
              { native: "Formas no personales", english: "Infinitivo, gerundio y participio", left: "Formas no personales", right: "Formas no personales" }
            ]
          },
          {
            id: "es-u2-l2-q3",
            type: "multiple_choice",
            prompt: "¿Qué tipo de irregularidad presenta el verbo 'pensar' en la forma 'pienso' del presente de indicativo?",
            options: [
              "Diptongación vocálica (la 'e' de la raíz tónica pasa a diptongo 'ie').",
              "Pérdida de la desinencia personal.",
              "Sustitución de la raíz por un término germánico.",
              "Epéntesis de consonante gutural."
            ],
            correctAnswer: "Diptongación vocálica (la 'e' de la raíz tónica pasa a diptongo 'ie').",
            explanation: "Es una irregularidad vocálica sistemática en español: cuando la sílaba radical recibe el acento prosódico, la 'e' diptonga en 'ie' (pensar -> pienso) o la 'o' en 'ue' (contar -> cuento)."
          },
          {
            id: "es-u2-l2-q4",
            type: "fill_blank",
            sentence: "Las tres formas no personales del verbo son el infinitivo (cantar), el participio (cantado) y el ___ (cantando).",
            missingWord: "gerundio",
            options: ["gerundio", "condicional", "imperativo", "subjuntivo"],
            correctAnswer: "gerundio",
            explanation: "Las formas no personales carecen de desinencia de persona y número gramatical."
          },
          {
            id: "es-u2-l2-q5",
            type: "scramble",
            prompt: "Ordena los modos verbales según la actitud del hablante:",
            tokens: ["Indicativo", "para", "la", "realidad,", "subjuntivo", "para", "el", "deseo."],
            correctTokens: ["Indicativo", "para", "la", "realidad,", "subjuntivo", "para", "el", "deseo."],
            explanation: "El indicativo enuncia hechos objetivos o ciertos; el subjuntivo expresa deseo, duda, posibilidad o hipótesis."
          },
          {
            id: "es-u2-l2-q6",
            type: "matching",
            prompt: "Identifica el modo verbal de cada una de estas oraciones:",
            pairs: [
              { native: "Estudio todos los días", english: "Modo indicativo (hecho real)", left: "Estudio todos los días", right: "Modo indicativo (hecho real)" },
              { native: "Ojalá llueva mañana", english: "Modo subjuntivo (deseo)", left: "Ojalá llueva mañana", right: "Modo subjuntivo (deseo)" },
              { native: "¡Cierra la ventana ahora!", english: "Modo imperativo (orden directa)", left: "¡Cierra la ventana ahora!", right: "Modo imperativo (orden directa)" },
              { native: "Si tuviera tiempo, viajaría", english: "Subjuntivo + condicional", left: "Si tuviera tiempo, viajaría", right: "Subjuntivo + condicional" }
            ]
          },
          {
            id: "es-u2-l2-q7",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta de participio irregular para el verbo 'escribir'?",
            options: ["Escrito", "Escribido", "Escribado", "Escripto"],
            correctAnswer: "Escrito",
            explanation: "'Escribir' forma un participio irregular irregular consagrado en la norma: 'escrito'."
          },
          {
            id: "es-u2-l2-q8",
            type: "fill_blank",
            sentence: "En el cómic o historieta, el espacio gráfico delimitado donde se integran las ilustraciones y los bocadillos de diálogo se denomina ___.",
            missingWord: "viñeta",
            options: ["viñeta", "párrafo", "verso", "capítulo"],
            correctAnswer: "viñeta",
            explanation: "La viñeta es la unidad mínima de significación y montaje temporal en el lenguaje secuencial del cómic."
          },
          {
            id: "es-u2-l2-q9",
            type: "audio_listen",
            phrase: "Si queremos que el cómic funcione, debemos cuidar el diálogo en los bocadillos y las onomatopeyas visuales.",
            prompt: "¿Qué recurso sonoro y visual característico del cómic se menciona expresamente?",
            options: [
              "Las onomatopeyas (como '¡Bum!', '¡Crash!', '¡Zzz!').",
              "Los endecasílabos solemnes.",
              "Los pies de página académicos.",
              "Las gráficas estadísticas en barras."
            ],
            correctAnswer: "Las onomatopeyas (como '¡Bum!', '¡Crash!', '¡Zzz!').",
            explanation: "La onomatopeya gráfica recrea ruidos de la realidad física de forma icónica y cinética en las viñetas."
          },
          {
            id: "es-u2-l2-q10",
            type: "multiple_choice",
            prompt: "En un microrrelato, ¿cuál es el papel esencial que desempeña el lector?",
            options: [
              "Un papel activo que deduce e interpreta los sobreentendidos y el final elíptico.",
              "Un papel meramente pasivo que memoriza fechas biográficas.",
              "No participa en absoluto en la interpretación.",
              "Debe corregir los errores ortográficos del autor."
            ],
            correctAnswer: "Un papel activo que deduce e interpreta los sobreentendidos y el final elíptico.",
            explanation: "Por su extrema brevedad, el microrrelato se apoya en la complicidad del lector y en la elipsis sugestiva."
          },
          {
            id: "es-u2-l2-q11",
            type: "scramble",
            prompt: "Ordena los elementos para definir el cartucho o cartela en el cómic:",
            tokens: ["Recuadro", "donde", "aparece", "la", "voz", "del", "narrador."],
            correctTokens: ["Recuadro", "donde", "aparece", "la", "voz", "del", "narrador."],
            explanation: "La cartela o cartucho es el recuadro rectangular donde el narrador introduce contextualizaciones al margen de los bocadillos de los personajes."
          },
          {
            id: "es-u2-l2-q12",
            type: "matching",
            prompt: "Empareja cada forma de bocadillo o globo de cómic con su significado:",
            pairs: [
              { native: "Bocadillo con línea continua", english: "Conversación en tono de voz normal", left: "Bocadillo con línea continua", right: "Conversación en tono de voz normal" },
              { native: "Bocadillo con forma de nube", english: "Pensamiento interior del personaje", left: "Bocadillo con forma de nube", right: "Pensamiento interior del personaje" },
              { native: "Bocadillo con bordes en picos", english: "Grito, explosión o volumen muy alto", left: "Bocadillo con bordes en picos", right: "Grito, explosión o volumen muy alto" },
              { native: "Bocadillo con línea discontinua", english: "Susurro o voz baja en secreto", left: "Bocadillo con línea discontinua", right: "Susurro o voz baja en secreto" }
            ]
          },
          {
            id: "es-u2-l2-q13",
            type: "fill_blank",
            sentence: "El verbo 'ir' y el verbo 'ser' comparten exactamente las mismas formas en el tiempo pretérito perfecto simple: yo ___, tú fuiste, él fue...",
            missingWord: "fui",
            options: ["fui", "iba", "era", "fuese"],
            correctAnswer: "fui",
            explanation: "Tanto 'ir' como 'ser' convergen etimológicamente en el mismo paradigma de pretérito indefinido: fui, fuiste, fue, fuimos, fuisteis, fueron."
          },
          {
            id: "es-u2-l2-q14",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes oraciones contiene un verbo transitivo que exige la presencia de un complemento directo?",
            options: [
              "Marina redactó un magnífico microrrelato sobre la luna.",
              "El perro corrió por el bosque durante horas.",
              "Los abuelos descansan en el jardín.",
              "El tren llegó puntualmente a las diez."
            ],
            correctAnswer: "Marina redactó un magnífico microrrelato sobre la luna.",
            explanation: "'Redactó' es un verbo transitivo que requiere un objeto que complete su significado: 'un magnífico microrrelato' (CD)."
          },
          {
            id: "es-u2-l2-q15",
            type: "multiple_choice",
            prompt: "En la frase 'El mago hizo desaparecer el conejo', ¿cuál es el tiempo y persona del verbo irregular 'hizo'?",
            options: [
              "Tercera persona del singular del pretérito perfecto simple de indicativo.",
              "Primera persona del singular del presente de subjuntivo.",
              "Segunda persona del plural del pretérito imperfecto.",
              "Tercera persona del singular del condicional simple."
            ],
            correctAnswer: "Tercera persona del singular del pretérito perfecto simple de indicativo.",
            explanation: "'Hizo' (del verbo hacer) cambia la 'c' radical por 'z' ante 'o' en la 3ª persona del singular del pretérito indefinido."
          },
          {
            id: "es-u2-l2-q16",
            type: "matching",
            prompt: "Identifica la persona y número del verbo en cada oración:",
            pairs: [
              { native: "Cantábamos bajo la lluvia", english: "Primera persona del plural (nosotros)", left: "Cantábamos bajo la lluvia", right: "Primera persona del plural (nosotros)" },
              { native: "Escribiste una carta emotiva", english: "Segunda persona del singular (tú)", left: "Escribiste una carta emotiva", right: "Segunda persona del singular (tú)" },
              { native: "Comprendieron la lección", english: "Tercera persona del plural (ellos/ellas)", left: "Comprendieron la lección", right: "Tercera persona del plural (ellos/ellas)" },
              { native: "Leo todos los días", english: "Primera persona del singular (yo)", left: "Leo todos los días", right: "Primera persona del singular (yo)" }
            ]
          },
          {
            id: "es-u2-l2-q17",
            type: "fill_blank",
            sentence: "La voz pasiva en español se construye mediante el verbo auxiliar ___ conjugado más el participio del verbo principal.",
            missingWord: "ser",
            options: ["ser", "estar", "haber", "tener"],
            correctAnswer: "ser",
            explanation: "Ejemplo: 'El libro fue escrito por Cervantes'; el verbo auxiliar 'ser' concuerda con el sujeto paciente."
          },
          {
            id: "es-u2-l2-q18",
            type: "scramble",
            prompt: "Ordena los elementos para construir una oración en voz pasiva analítica:",
            tokens: ["La", "noticia", "fue", "difundida", "por", "todos", "los", "periódicos."],
            correctTokens: ["La", "noticia", "fue", "difundida", "por", "todos", "los", "periódicos."],
            explanation: "Sujeto paciente ('la noticia') + verbo ser ('fue') + participio ('difundida') + complemento agente ('por todos los periódicos')."
          },
          {
            id: "es-u2-l2-q19",
            type: "multiple_choice",
            prompt: "¿Qué autor hispanoamericano universal escribió la extraordinaria colección de relatos 'Ficciones' y 'El Aleph'?",
            options: [
              "Jorge Luis Borges (Argentina).",
              "Miguel de Cervantes (España).",
              "Federico García Lorca (España).",
              "Pablo Neruda (Chile)."
            ],
            correctAnswer: "Jorge Luis Borges (Argentina).",
            explanation: "Jorge Luis Borges es uno de los maestros universales del relato corto, los laberintos temporales y la ficción filosófica."
          },
          {
            id: "es-u2-l2-q20",
            type: "audio_listen",
            phrase: "El microrrelato triunfó gracias a su final sorpresivo que desconcertó a los lectores.",
            prompt: "¿Cuál es el núcleo verbal de la oración principal y en qué aspecto temporal se encuentra?",
            options: [
              "'Triunfó', en aspecto perfectivo del pretérito indefinido.",
              "'Lectores', en infinitivo continuo.",
              "'Sorpresivo', en participio irregular.",
              "'Desconcertó', en futuro de probabilidad."
            ],
            correctAnswer: "'Triunfó', en aspecto perfectivo del pretérito indefinido.",
            explanation: "'Triunfó' es el núcleo del predicado que expresa una acción consumada en el pasado de indicativo."
          }
        ]
      }
    ]
  },
  {
    id: "es-unit-3",
    unitId: "es-unit-3",
    unitNumber: 3,
    level: "1º ESO — Bloque 3",
    title: "Unidad 3: La red de la información (The Information Network)",
    subtitle: "Situación de aprendizaje: Periódico digital escolar. Textos expositivos, conectores textuales, acentuación y pronombres.",
    icon: "Layers",
    color: "#3b82f6",
    lessons: [
      {
        id: "es-u3-l1",
        title: "Lección 3.1–3.3: El Texto Expositivo y Búsqueda Crítica",
        description: "Diferencia entre hechos y opiniones, estructura de la noticia (las 6 W), conectores y alfabetización digital contra bulos.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u3-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es el objetivo comunicativo primordial de un texto expositivo o explicativo?",
            options: [
              "Transmitir información clara y objetiva para hacer comprender un tema al destinatario.",
              "Contar historias fantásticas con personajes míticos.",
              "Convencer al lector de una opinión política sin aportar datos.",
              "Rimar palabras al final de cada línea para conmover el ánimo."
            ],
            correctAnswer: "Transmitir información clara y objetiva para hacer comprender un tema al destinatario.",
            explanation: "El texto expositivo tiene como función primordial la divulgación pedagógica y rigurosa de conocimientos objetivos."
          },
          {
            id: "es-u3-l1-q2",
            type: "matching",
            prompt: "Diferencia un hecho objetivo de una opinión subjetiva:",
            pairs: [
              { native: "El agua hierve a 100 ºC al nivel del mar", english: "Hecho objetivo verificable empíricamente", left: "El agua hierve a 100 ºC al nivel del mar", right: "Hecho objetivo verificable empíricamente" },
              { native: "Esa película me pareció muy aburrida", english: "Opinión personal o juicio de valor subjetivo", left: "Esa película me pareció muy aburrida", right: "Opinión personal o juicio de valor subjetivo" },
              { native: "Cervantes publicó el Quijote en 1605", english: "Dato histórico contrastado", left: "Cervantes publicó el Quijote en 1605", right: "Dato histórico contrastado" },
              { native: "El invierno es la mejor estación del año", english: "Gusto o preferencia individual", left: "El invierno es la mejor estación del año", right: "Gusto o preferencia individual" }
            ]
          },
          {
            id: "es-u3-l1-q3",
            type: "multiple_choice",
            prompt: "¿Cómo se denomina la técnica periodística clásica en la que la información más importante se coloca al principio de la noticia?",
            options: [
              "Estructura de pirámide invertida.",
              "Estructura circular envolvente.",
              "Estructura de clímax final teatral.",
              "Estructura dialógica libre."
            ],
            correctAnswer: "Estructura de pirámide invertida.",
            explanation: "La pirámide invertida organiza la noticia desde lo más relevante (titular y entradilla) hacia los detalles secundarios al final."
          },
          {
            id: "es-u3-l1-q4",
            type: "fill_blank",
            sentence: "El primer párrafo de una noticia que responde a las preguntas clave (qué, quién, cuándo, dónde) se denomina entradilla o ___.",
            missingWord: "lead",
            options: ["lead", "epígrafe", "pie", "editorial"],
            correctAnswer: "lead",
            explanation: "La entradilla (o lead en terminología periodística internacional) sintetiza los datos esenciales de la información."
          },
          {
            id: "es-u3-l1-q5",
            type: "scramble",
            prompt: "Ordena las partes esenciales de la cabecera de una noticia impresa o digital:",
            tokens: ["Antetítulo,", "titular", "principal", "y", "subtítulo", "o", "bajada."],
            correctTokens: ["Antetítulo,", "titular", "principal", "y", "subtítulo", "o", "bajada."],
            explanation: "Los titulares periodísticos pueden componerse de antetítulo informativo, título atrayente y subtítulo ampliador."
          },
          {
            id: "es-u3-l1-q6",
            type: "matching",
            prompt: "Empareja cada conector discursivo con su función de cohesión textual:",
            pairs: [
              { native: "Además / Asimismo", english: "Conector aditivo (añade información)", left: "Además / Asimismo", right: "Conector aditivo (añade información)" },
              { native: "Sin embargo / No obstante", english: "Conector contraargumentativo (oposición)", left: "Sin embargo / No obstante", right: "Conector contraargumentativo (oposición)" },
              { native: "Por lo tanto / Por consiguiente", english: "Conector consecutivo (efecto o conclusión)", left: "Por lo tanto / Por consiguiente", right: "Conector consecutivo (efecto o conclusión)" },
              { native: "En primer lugar / Finalmente", english: "Conector ordenador del discurso", left: "En primer lugar / Finalmente", right: "Conector ordenador del discurso" }
            ]
          },
          {
            id: "es-u3-l1-q7",
            type: "multiple_choice",
            prompt: "En la frase: 'Estudiamos con mucha disciplina; por lo tanto, obtuvimos excelentes calificaciones', el conector 'por lo tanto' expresa:",
            options: [
              "Consecuencia o efecto lógico.",
              "Contradicción o dificultad superada.",
              "Duda o incertidumbre.",
              "Finalidad o meta futura."
            ],
            correctAnswer: "Consecuencia o efecto lógico.",
            explanation: "'Por lo tanto' introduce el resultado o consecuencia necesaria que se desprende de la premisa anterior."
          },
          {
            id: "es-u3-l1-q8",
            type: "fill_blank",
            sentence: "Las noticias falsas que se difunden intencionadamente por redes sociales para desinformar o engañar se denominan bulos o ___ news.",
            missingWord: "fake",
            options: ["fake", "hard", "soft", "clean"],
            correctAnswer: "fake",
            explanation: "La alfabetización mediática LOMLOE instruye al alumnado en la detección crítica de bulos (fake news) y manipulación digital."
          },
          {
            id: "es-u3-l1-q9",
            type: "audio_listen",
            phrase: "Antes de compartir cualquier noticia en redes, debemos verificar la fecha, comprobar la fuente oficial y no dejarnos llevar solo por titulares escandalosos.",
            prompt: "¿Cuál es el principio deontológico de alfabetización digital que resume este mensaje?",
            options: [
              "Verificación crítica y contraste de fuentes informativas.",
              "Difundir de inmediato rumores sin contrastar.",
              "Prohibir el uso de internet en el aula.",
              "Creer ciegamente todo lo que aparezca en buscadores."
            ],
            correctAnswer: "Verificación crítica y contraste de fuentes informativas.",
            explanation: "Contrastar las fuentes, evaluar la autoría y comprobar la veracidad de los datos son competencias digitales básicas del RD 217/2022."
          },
          {
            id: "es-u3-l1-q10",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes fuentes de información digital resulta más fiable para documentar un trabajo escolar sobre cambio climático?",
            options: [
              "Un informe oficial de la ONU o de una universidad pública científica revisado por pares.",
              "Un comentario anónimo en un foro de videojuegos.",
              "Un meme sin autor publicado en una red social.",
              "Un anuncio comercial que intenta vender un producto energético."
            ],
            correctAnswer: "Un informe oficial de la ONU o de una universidad pública científica revisado por pares.",
            explanation: "Los organismos científicos e instituciones académicas aplican criterios de revisión rigurosa que garantizan la fiabilidad empírica."
          },
          {
            id: "es-u3-l1-q11",
            type: "scramble",
            prompt: "Ordena los pasos del método de verificación de noticias digitales:",
            tokens: ["Comprobar", "la", "fuente,", "contrastar", "datos", "y", "confirmar", "la", "fecha."],
            correctTokens: ["Comprobar", "la", "fuente,", "contrastar", "datos", "y", "confirmar", "la", "fecha."],
            explanation: "Estos tres pasos previenen la propagación de desinformación obsoleta o malintencionada."
          },
          {
            id: "es-u3-l1-q12",
            type: "matching",
            prompt: "Empareja cada género periodístico con su intención comunicativa:",
            pairs: [
              { native: "Noticia", english: "Información objetiva sobre un suceso reciente", left: "Noticia", right: "Información objetiva sobre un suceso reciente" },
              { native: "Artículo de opinión", english: "Valoración subjetiva firmada por un articulista", left: "Artículo de opinión", right: "Valoración subjetiva firmada por un articulista" },
              { native: "Entrevista", english: "Diálogo formal entre periodista y personalidad", left: "Entrevista", right: "Diálogo formal entre periodista y personalidad" },
              { native: "Editorial", english: "Postura ideológica del medio de comunicación", left: "Editorial", right: "Postura ideológica del medio de comunicación" }
            ]
          },
          {
            id: "es-u3-l1-q13",
            type: "fill_blank",
            sentence: "La combinación de texto escrito, imágenes, gráficos estadísticos e iconos para resumir visualmente una información compleja se llama ___.",
            missingWord: "infografía",
            options: ["infografía", "novela", "poema", "epopeya"],
            correctAnswer: "infografía",
            explanation: "Las infografías son textos multimodales de gran eficacia divulgativa en la sociedad del conocimiento actual."
          },
          {
            id: "es-u3-l1-q14",
            type: "multiple_choice",
            prompt: "En un texto expositivo divulgativo, ¿qué registro lingüístico y persona gramatical se emplean preferentemente?",
            options: [
              "Registro formal culto o estándar en tercera persona objetiva.",
              "Registro coloquial con jergas juveniles en primera persona singular.",
              "Poesía rimada con metáforas oscuras.",
              "Diálogo desordenado sin nexos."
            ],
            correctAnswer: "Registro formal culto o estándar en tercera persona objetiva.",
            explanation: "La objetividad divulgativa precisa claridad léxica, tecnicismos definidos y distanciamiento en 3ª persona ('se observa', 'los datos demuestran')."
          },
          {
            id: "es-u3-l1-q15",
            type: "multiple_choice",
            prompt: "¿Qué conector textual utilizarías para introducir una objeción que no impide el cumplimiento de la acción principal?",
            options: [
              "Aunque / a pesar de que (conector concesivo).",
              "Porque (conector causal).",
              "Para que (conector final).",
              "Es decir (conector explicativo)."
            ],
            correctAnswer: "Aunque / a pesar de que (conector concesivo).",
            explanation: "'Aunque' y 'a pesar de que' introducen una dificultad u objeción que resulta ineficaz para cancelar el verbo principal."
          },
          {
            id: "es-u3-l1-q16",
            type: "matching",
            prompt: "Relaciona el conector de orden con su posición en el texto:",
            pairs: [
              { native: "Para comenzar / Inicialmente", english: "Introducción del tema", left: "Para comenzar / Inicialmente", right: "Introducción del tema" },
              { native: "Por otra parte / A continuación", english: "Transición en el desarrollo", left: "Por otra parte / A continuación", right: "Transición en el desarrollo" },
              { native: "En conclusión / Para finalizar", english: "Cierre o recapitulación", left: "En conclusión / Para finalizar", right: "Cierre o recapitulación" },
              { native: "O sea / Es decir", english: "Aclaración o reformulación", left: "O sea / Es decir", right: "Aclaración o reformulación" }
            ]
          },
          {
            id: "es-u3-l1-q17",
            type: "fill_blank",
            sentence: "La propiedad de un texto por la cual todas las ideas se relacionan con un tema global central sin salirse de él se llama ___.",
            missingWord: "coherencia",
            options: ["coherencia", "rimas", "longitud", "métrica"],
            correctAnswer: "coherencia",
            explanation: "La coherencia garantiza la unidad temática global y la progresión lógica de la información en el texto."
          },
          {
            id: "es-u3-l1-q18",
            type: "scramble",
            prompt: "Ordena los elementos para expresar las tres grandes propiedades del texto bien construido:",
            tokens: ["Adecuación,", "coherencia", "y", "cohesión", "gramatical."],
            correctTokens: ["Adecuación,", "coherencia", "y", "cohesión", "gramatical."],
            explanation: "Todo texto eficaz debe ser adecuado a la situación, coherente en su contenido y cohesionado en sus nexos lingüísticos."
          },
          {
            id: "es-u3-l1-q19",
            type: "multiple_choice",
            prompt: "Al diseñar el periódico digital escolar, ¿por qué es importante citar siempre la autoría de las imágenes y textos ajenos?",
            options: [
              "Por ética académica, respeto a los derechos de propiedad intelectual y cumplimiento de la legalidad.",
              "Solo si el autor es un familiar nuestro.",
              "Para rellenar espacio en blanco que haya sobrado.",
              "No tiene ninguna importancia en internet."
            ],
            correctAnswer: "Por ética académica, respeto a los derechos de propiedad intelectual y cumplimiento de la legalidad.",
            explanation: "Citar las fuentes y respetar las licencias (como Creative Commons o Copyright) es un aprendizaje cívico indispensable en el ámbito digital."
          },
          {
            id: "es-u3-l1-q20",
            type: "audio_listen",
            phrase: "El equipo científico descubrió una nueva especie marina; sin embargo, advierten de que su hábitat corre grave peligro.",
            prompt: "¿Qué relación lógica establece el conector 'sin embargo' entre las dos partes del enunciado?",
            options: [
              "Contraste u oposición entre un hallazgo positivo y un riesgo medioambiental.",
              "Causa justificada de la creación del mar.",
              "Condición indispensable para bucear.",
              "Finalidad para conseguir una beca."
            ],
            correctAnswer: "Contraste u oposición entre un hallazgo positivo y un riesgo medioambiental.",
            explanation: "'Sin embargo' opone la alegría del descubrimiento a la preocupación por la vulnerabilidad de la especie."
          }
        ]
      },
      {
        id: "es-u3-l2",
        title: "Lección 3.4–3.6: Acentuación y Clases de Palabras",
        description: "Reglas de acentuación (agudas, llanas, esdrújulas), tilde diacrítica, determinantes y pronombres.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u3-l2-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la regla ortográfica general para la acentuación de las palabras agudas?",
            options: [
              "Llevan tilde cuando terminan en vocal, en 'n' o en 's'.",
              "Llevan tilde siempre, sin importar su letra final.",
              "Solo llevan tilde cuando terminan en consonante distinta de 'n' o 's'.",
              "Nunca llevan tilde en ningún caso."
            ],
            correctAnswer: "Llevan tilde cuando terminan en vocal, en 'n' o en 's'.",
            explanation: "Las palabras agudas (con acento prosódico en la última sílaba) llevan tilde gráfica cuando terminan en vocal, -n o -s: 'café', 'canción', 'compás'."
          },
          {
            id: "es-u3-l2-q2",
            type: "matching",
            prompt: "Clasifica cada palabra según la posición de su sílaba tónica:",
            pairs: [
              { native: "Corazón", english: "Palabra aguda (acento en última sílaba)", left: "Corazón", right: "Palabra aguda (acento en última sílaba)" },
              { native: "Árbol", english: "Palabra llana o grave (acento en penúltima)", left: "Árbol", right: "Palabra llana o grave (acento en penúltima)" },
              { native: "Música", english: "Palabra esdrújula (acento en antepenúltima)", left: "Música", right: "Palabra esdrújula (acento en antepenúltima)" },
              { native: "Dígaselo", english: "Palabra sobresdrújula (anterior a antepenúltima)", left: "Dígaselo", right: "Palabra sobresdrújula (anterior a antepenúltima)" }
            ]
          },
          {
            id: "es-u3-l2-q3",
            type: "multiple_choice",
            prompt: "¿Cuándo llevan tilde las palabras esdrújulas en la ortografía española?",
            options: [
              "Se acentúan gráficamente siempre, sin excepción.",
              "Solo si terminan en vocal.",
              "Solo si terminan en consonante que no sea 's'.",
              "Únicamente cuando van al inicio de una oración."
            ],
            correctAnswer: "Se acentúan gráficamente siempre, sin excepción.",
            explanation: "Todas las palabras esdrújulas y sobresdrújulas llevan tilde en español: 'pájaro', 'teléfono', 'lámpara'."
          },
          {
            id: "es-u3-l2-q4",
            type: "fill_blank",
            sentence: "Las palabras llanas o graves llevan tilde cuando terminan en una consonante que ___ sea ni 'n' ni 's' (ni vocal).",
            missingWord: "no",
            options: ["no", "siempre", "nunca", "también"],
            correctAnswer: "no",
            explanation: "Regla inversa a las agudas: las llanas llevan tilde si acaban en consonante distinta de 'n' o 's': 'fácil', 'lápiz', 'césped'."
          },
          {
            id: "es-u3-l2-q5",
            type: "scramble",
            prompt: "Ordena los términos para definir la función de la tilde diacrítica:",
            tokens: ["Diferenciar", "palabras", "con", "idéntica", "forma", "pero", "distinto", "significado."],
            correctTokens: ["Diferenciar", "palabras", "con", "idéntica", "forma", "pero", "distinto", "significado."],
            explanation: "La tilde diacrítica distingue palabras tónicas de átonas con idéntica grafía: 'él' (pronombre) vs 'el' (artículo)."
          },
          {
            id: "es-u3-l2-q6",
            type: "matching",
            prompt: "Empareja cada monosílabo con su significado según lleve o no tilde diacrítica:",
            pairs: [
              { native: "Tú", english: "Pronombre personal ('Tú eres mi amigo')", left: "Tú", right: "Pronombre personal ('Tú eres mi amigo')" },
              { native: "Tu", english: "Determinante posesivo ('Tu mochila está allí')", left: "Tu", right: "Determinante posesivo ('Tu mochila está allí')" },
              { native: "Té", english: "Sustantivo infusión ('Me gusta el té caliente')", left: "Té", right: "Sustantivo infusión ('Me gusta el té caliente')" },
              { native: "Te", english: "Pronombre átono ('Te acompaño a casa')", left: "Te", right: "Pronombre átono ('Te acompaño a casa')" }
            ]
          },
          {
            id: "es-u3-l2-q7",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes oraciones utiliza correctamente la tilde diacrítica en 'sí' y 'si'?",
            options: [
              "Si estudias con constancia, sí aprobarás el examen con brillantez.",
              "Sí estudias con constancia, si aprobarás el examen.",
              "Si vienes, si quiero un helado.",
              "Sí Dios quiere, si iremos al cine."
            ],
            correctAnswer: "Si estudias con constancia, sí aprobarás el examen con brillantez.",
            explanation: "'Si' condicional átono va sin tilde; 'sí' adverbio de afirmación tónico lleva tilde diacrítica obligatoria."
          },
          {
            id: "es-u3-l2-q8",
            type: "fill_blank",
            sentence: "La unión de dos vocales contiguas que se pronuncian en una misma sílaba (como en 'fuego' o 'aire') forma un ___.",
            missingWord: "diptongo",
            options: ["diptongo", "hiato", "triptongo", "acento"],
            correctAnswer: "diptongo",
            explanation: "El diptongo une vocal abierta (a, e, o) + cerrada átona (i, u), o dos cerradas distintas (ui, iu) en la misma sílaba."
          },
          {
            id: "es-u3-l2-q9",
            type: "multiple_choice",
            prompt: "Cuando dos vocales contiguas pertenecen a sílabas distintas (como en 'pa-ís', 'ma-íz' o 'te-a-tro'), se produce un:",
            options: ["Hiato", "Diptongo decreciente", "Triptongo continuo", "Monoptongo"],
            correctAnswer: "Hiato",
            explanation: "El hiato es la secuencia de dos vocales que se articulan en sílabas diferentes."
          },
          {
            id: "es-u3-l2-q10",
            type: "audio_listen",
            phrase: "Mi tía María tenía un baúl antiguo lleno de libros fascinantes.",
            prompt: "¿Por qué llevan tilde palabras como 'tía', 'María', 'tenía' y 'baúl'?",
            options: [
              "Por contener un hiato de vocal cerrada tónica (í/ú) junto a vocal abierta átona, rompiendo el diptongo.",
              "Porque son palabras esdrújulas todas ellas.",
              "Por ser nombres propios sin regla definida.",
              "Es un error ortográfico en todas esas palabras."
            ],
            correctAnswer: "Por contener un hiato de vocal cerrada tónica (í/ú) junto a vocal abierta átona, rompiendo el diptongo.",
            explanation: "La vocal cerrada tónica junto a abierta siempre lleva tilde para marcar el hiato, independientemente de las reglas generales."
          },
          {
            id: "es-u3-l2-q11",
            type: "scramble",
            prompt: "Ordena los demostrativos según su grado de cercanía o distancia:",
            tokens: ["Este", "(aquí),", "ese", "(ahí)", "y", "aquel", "(allí)."],
            correctTokens: ["Este", "(aquí),", "ese", "(ahí)", "y", "aquel", "(allí)."],
            explanation: "Los demostrativos señalan distancia espacial o temporal respecto a los interlocutores."
          },
          {
            id: "es-u3-l2-q12",
            type: "matching",
            prompt: "Identifica si la palabra destacada funciona como determinante o como pronombre:",
            pairs: [
              { native: "Aquella casa es antigua", english: "Determinante demostrativo (acompaña al sustantivo)", left: "Aquella casa es antigua", right: "Determinante demostrativo (acompaña al sustantivo)" },
              { native: "Aquella es la más antigua", english: "Pronombre demostrativo (sustituye al sustantivo)", left: "Aquella es la más antigua", right: "Pronombre demostrativo (sustituye al sustantivo)" },
              { native: "Nuestra escuela ganó el premio", english: "Determinante posesivo", left: "Nuestra escuela ganó el premio", right: "Determinante posesivo" },
              { native: "La nuestra ganó el premio", english: "Pronombre posesivo", left: "La nuestra ganó el premio", right: "Pronombre posesivo" }
            ]
          },
          {
            id: "es-u3-l2-q13",
            type: "fill_blank",
            sentence: "Un determinante acompaña al sustantivo y concuerda con él en género y número, mientras que un pronombre ___ al sustantivo en la oración.",
            missingWord: "sustituye",
            options: ["sustituye", "destruye", "contradice", "ignora"],
            correctAnswer: "sustituye",
            explanation: "La distinción funcional básica en morfología: el determinante actualiza al sustantivo y el pronombre ocupa su lugar sintáctico."
          },
          {
            id: "es-u3-l2-q14",
            type: "multiple_choice",
            prompt: "En la frase: 'Varios ciclistas llegaron en primer lugar', ¿qué clases de determinantes son 'varios' y 'primer'?",
            options: [
              "'Varios' es indefinido y 'primer' es numeral ordinal.",
              "'Varios' es artículo determinado y 'primer' es posesivo.",
              "'Varios' es demostrativo y 'primer' es adverbio de modo.",
              "Ambos son adjetivos superlativos."
            ],
            correctAnswer: "'Varios' es indefinido y 'primer' es numeral ordinal.",
            explanation: "'Varios' cuantifica de forma imprecisa (indefinido) y 'primer' expresa orden o posición numérica (numeral ordinal)."
          },
          {
            id: "es-u3-l2-q15",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes palabras es un numeral cardinal?",
            options: ["Tres", "Tercero", "Triple", "Tercio"],
            correctAnswer: "Tres",
            explanation: "'Tres' indica cantidad exacta (cardinal), 'tercero' orden (ordinal), 'triple' multiplicación (multiplicativo) y 'tercio' división (partitivo)."
          },
          {
            id: "es-u3-l2-q16",
            type: "matching",
            prompt: "Empareja cada tipo de numeral con su ejemplo correspondiente:",
            pairs: [
              { native: "Cinco", english: "Numeral cardinal (cantidad exacta)", left: "Cinco", right: "Numeral cardinal (cantidad exacta)" },
              { native: "Quinto", english: "Numeral ordinal (orden sucesivo)", left: "Quinto", right: "Numeral ordinal (orden sucesivo)" },
              { native: "Doble", english: "Numeral multiplicativo", left: "Doble", right: "Numeral multiplicativo" },
              { native: "Medio / Mitad", english: "Numeral partitivo o fraccionario", left: "Medio / Mitad", right: "Numeral partitivo o fraccionario" }
            ]
          },
          {
            id: "es-u3-l2-q17",
            type: "fill_blank",
            sentence: "Las palabras interrogativas y exclamativas (qué, quién, cómo, cuándo, dónde, cuánto) llevan tilde ___ cuando introducen preguntas directas o indirectas.",
            missingWord: "diacrítica",
            options: ["diacrítica", "opcional", "antigua", "ninguna"],
            correctAnswer: "diacrítica",
            explanation: "Los pronombres y adverbios interrogativos y exclamativos son palabras tónicas que llevan tilde diacrítica enfática."
          },
          {
            id: "es-u3-l2-q18",
            type: "scramble",
            prompt: "Ordena los elementos para formular una pregunta indirecta bien acentuada:",
            tokens: ["Dime", "cuándo", "llegará", "el", "tren", "a", "la", "estación."],
            correctTokens: ["Dime", "cuándo", "llegará", "el", "tren", "a", "la", "estación."],
            explanation: "'Cuándo' lleva tilde diacrítica por ser interrogativo indirecto, y 'llegará' y 'estación' por ser agudas acabadas en vocal y -n."
          },
          {
            id: "es-u3-l2-q19",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes parejas de palabras contiene una palabra aguda con tilde y otra llana con tilde?",
            options: [
              "Compás (aguda) y cárcel (llana).",
              "Café (aguda) y camión (aguda).",
              "Árbol (llana) y lápiz (llana).",
              "Pájaro (esdrújula) y sol (monosílabo)."
            ],
            correctAnswer: "Compás (aguda) y cárcel (llana).",
            explanation: "'Compás' es aguda acabada en -s; 'cárcel' es llana acabada en consonante distinta de -n o -s."
          },
          {
            id: "es-u3-l2-q20",
            type: "audio_listen",
            phrase: "¿Por qué no me dijiste cuánto costaba aquel billete de tren?",
            prompt: "¿Qué dos palabras llevan tilde diacrítica enfática en la oración escuchada?",
            options: [
              "'Qué' y 'cuánto' (interrogativos tónicos).",
              "'Dijiste' y 'aquel'.",
              "'Costaba' y 'tren'.",
              "'Billete' y 'no'."
            ],
            correctAnswer: "'Qué' y 'cuánto' (interrogativos tónicos).",
            explanation: "Tanto 'qué' (en la locución 'por qué') como 'cuánto' son formas interrogativas que requieren tilde diacrítica obligatoria."
          }
        ]
      }
    ]
  },
  {
    id: "es-unit-4",
    unitId: "es-unit-4",
    unitNumber: 4,
    level: "1º ESO — Bloque 4",
    title: "Unidad 4: El espejo de la poesía (The Mirror of Poetry)",
    subtitle: "Situación de aprendizaje: Recital lírico y antología poética digital. Métrica, rima, recursos retóricos y declamación.",
    icon: "Sparkles",
    color: "#8b5cf6",
    lessons: [
      {
        id: "es-u4-l1",
        title: "Lección 4.1–4.3: El Verso, Métrica y Rima",
        description: "Diferencia prosa/verso, cómputo silábico (sinalefa y ley del acento final), rima asonante y consonante.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u4-l1-q1",
            type: "multiple_choice",
            prompt: "¿Qué diferencia fundamental existe entre la prosa y el verso en la tradición literaria?",
            options: [
              "El verso está sujeto a un ritmo medido, cadencia musical y cómputo silábico; la prosa no se sujeta a medida silábica fija.",
              "El verso nunca utiliza palabras en español.",
              "La prosa solo habla de animales y el verso de ciencias naturales.",
              "No existe ninguna diferencia; son términos sinónimos."
            ],
            correctAnswer: "El verso está sujeto a un ritmo medido, cadencia musical y cómputo silábico; la prosa no se sujeta a medida silábica fija.",
            explanation: "El verso es cada una de las líneas que componen un poema, organizadas mediante pautas de ritmo, rima y medida silábica."
          },
          {
            id: "es-u4-l1-q2",
            type: "matching",
            prompt: "Empareja cada licencia métrica con su regla de cómputo silábico:",
            pairs: [
              { native: "Sinalefa", english: "Une la vocal final de una palabra con la inicial de la siguiente", left: "Sinalefa", right: "Une la vocal final de una palabra con la inicial de la siguiente" },
              { native: "Palabra final aguda", english: "Se suma una sílaba métrica (+1)", left: "Palabra final aguda", right: "Se suma una sílaba métrica (+1)" },
              { native: "Palabra final esdrújula", english: "Se resta una sílaba métrica (-1)", left: "Palabra final esdrújula", right: "Se resta una sílaba métrica (-1)" },
              { native: "Palabra final llana", english: "El número de sílabas se mantiene igual (0)", left: "Palabra final llana", right: "El número de sílabas se mantiene igual (0)" }
            ]
          },
          {
            id: "es-u4-l1-q3",
            type: "multiple_choice",
            prompt: "Si un verso termina en una palabra aguda y tiene 7 sílabas fonéticas reales, ¿cuántas sílabas métricas tiene?",
            options: [
              "8 sílabas métricas (7 + 1 por terminar en aguda, formando un octosílabo).",
              "6 sílabas métricas (7 - 1).",
              "7 sílabas invariables.",
              "14 sílabas alejandrinas."
            ],
            correctAnswer: "8 sílabas métricas (7 + 1 por terminar en aguda, formando un octosílabo).",
            explanation: "La ley del acento final establece que la pausa versal tras palabra aguda suma obligatoriamente una sílaba métrica: 7 + 1 = 8."
          },
          {
            id: "es-u4-l1-q4",
            type: "fill_blank",
            sentence: "Cuando la vocal final de una palabra se une con la vocal inicial de la siguiente formando una sola sílaba métrica, se produce una ___.",
            missingWord: "sinalefa",
            options: ["sinalefa", "diéresis", "sinéresis", "rima"],
            correctAnswer: "sinalefa",
            explanation: "La sinalefa es el fenómeno rítmico natural más frecuente en la poesía lírica española: 'vi-no_a_e-lla'."
          },
          {
            id: "es-u4-l1-q5",
            type: "scramble",
            prompt: "Ordena los términos que diferencian arte menor y arte mayor:",
            tokens: ["Arte", "menor", "hasta", "ocho", "sílabas;", "arte", "mayor", "nueve", "o", "más."],
            correctTokens: ["Arte", "menor", "hasta", "ocho", "sílabas;", "arte", "mayor", "nueve", "o", "más."],
            explanation: "Los versos de 2 a 8 sílabas se designan con letras minúsculas (a, b) y los de 9 o más con mayúsculas (A, B)."
          },
          {
            id: "es-u4-l1-q6",
            type: "matching",
            prompt: "Relaciona el número de sílabas métricas con el nombre del verso:",
            pairs: [
              { native: "8 sílabas", english: "Octosílabo (el verso rey del romance popular)", left: "8 sílabas", right: "Octosílabo (el verso rey del romance popular)" },
              { native: "11 sílabas", english: "Endecasílabo (verso culto renacentista)", left: "11 sílabas", right: "Endecasílabo (verso culto renacentista)" },
              { native: "7 sílabas", english: "Heptasílabo", left: "7 sílabas", right: "Heptasílabo" },
              { native: "14 sílabas", english: "Alejandrino (verso medieval y modernista)", left: "14 sílabas", right: "Alejandrino (verso medieval y modernista)" }
            ]
          },
          {
            id: "es-u4-l1-q7",
            type: "multiple_choice",
            prompt: "¿Cuándo se produce una rima consonante o perfecta entre dos versos?",
            options: [
              "Cuando coinciden vocales y consonantes a partir de la última vocal acentuada.",
              "Cuando solo coinciden las vocales, quedando las consonantes libres.",
              "Cuando los versos no riman en absoluto.",
              "Cuando ambos versos empiezan por la misma letra del abecedario."
            ],
            correctAnswer: "Cuando coinciden vocales y consonantes a partir de la última vocal acentuada.",
            explanation: "En la rima consonante la igualdad fónica es total desde la última vocal tónica (ejemplo: can-CIÓN / cora-ZÓN)."
          },
          {
            id: "es-u4-l1-q8",
            type: "fill_blank",
            sentence: "En la rima ___, a partir de la última vocal tónica solo coinciden los sonidos vocálicos (como en 'barco' y 'plata').",
            missingWord: "asonante",
            options: ["asonante", "consonante", "blanca", "libre"],
            correctAnswer: "asonante",
            explanation: "La rima asonante es la característica del romance tradicional español: riman las vocales (a-o) sin importar las consonantes intermedias."
          },
          {
            id: "es-u4-l1-q9",
            type: "audio_listen",
            phrase: "Verde que te quiero verde. Verde viento. Verdes ramas.",
            prompt: "¿A qué famoso poema de Federico García Lorca corresponde este célebre verso octosílabo?",
            options: [
              "Romance sonámbulo (del 'Romancero gitano').",
              "Cantar de mio Cid.",
              "Coplas a la muerte de su padre de Jorge Manrique.",
              "Campos de Castilla de Antonio Machado."
            ],
            correctAnswer: "Romance sonámbulo (del 'Romancero gitano').",
            explanation: "Es uno de los versos más universales de Federico García Lorca en su Romancero gitano (1928)."
          },
          {
            id: "es-u4-l1-q10",
            type: "multiple_choice",
            prompt: "Una estrofa de cuatro versos de arte menor (normalmente octosílabos) con rima consonante abrazada abba se denomina:",
            options: ["Redondilla", "Cuarteto", "Serventesio", "Terceto"],
            correctAnswer: "Redondilla",
            explanation: "La redondilla se compone de versos octosílabos (8a 8b 8b 8a); si fuera de arte mayor endecasílabo (11A 11B 11B 11A) sería un cuarteto."
          },
          {
            id: "es-u4-l1-q11",
            type: "scramble",
            prompt: "Ordena los versos del célebre pareado popular de Antonio Machado:",
            tokens: ["Caminante,", "no", "hay", "camino,", "se", "hace", "camino", "al", "andar."],
            correctTokens: ["Caminante,", "no", "hay", "camino,", "se", "hace", "camino", "al", "andar."],
            explanation: "Verso inmortal de Proverbios y cantares de Antonio Machado que enseña que la vida se construye con cada paso."
          },
          {
            id: "es-u4-l1-q12",
            type: "matching",
            prompt: "Empareja cada esquema estrófico con su nombre métrico:",
            pairs: [
              { native: "aa o AA", english: "Pareado (estrofa de dos versos rimados)", left: "aa o AA", right: "Pareado (estrofa de dos versos rimados)" },
              { native: "ABA", english: "Terceto encadenado", left: "ABA", right: "Terceto encadenado" },
              { native: "ABBA", english: "Cuarteto (cuatro versos de arte mayor con rima abrazada)", left: "ABBA", right: "Cuarteto (cuatro versos de arte mayor con rima abrazada)" },
              { native: "ABAB", english: "Serventesio (cuatro versos de arte mayor con rima cruzada)", left: "ABAB", right: "Serventesio (cuatro versos de arte mayor con rima cruzada)" }
            ]
          },
          {
            id: "es-u4-l1-q13",
            type: "fill_blank",
            sentence: "El poema estrófico clásico compuesto por catorce versos endecasílabos distribuidos en dos cuartetos y dos tercetos se llama ___.",
            missingWord: "soneto",
            options: ["soneto", "romance", "zéjel", "oda"],
            correctAnswer: "soneto",
            explanation: "El soneto es la estructura poética de origen italiano más perfecta y cultivada en el Siglo de Oro español por Garcilaso, Lope y Quevedo."
          },
          {
            id: "es-u4-l1-q14",
            type: "multiple_choice",
            prompt: "¿Cómo se llama el poema de extensión variable formado por versos octosílabos donde riman en asonante los pares y quedan sueltos los impares?",
            options: ["Romance", "Soneto", "Madrigal", "Villancico"],
            correctAnswer: "Romance",
            explanation: "El romance (8- 8a 8- 8a 8- 8a...) es la composición tradicional y popular más representativa de la lírica hispánica."
          },
          {
            id: "es-u4-l1-q15",
            type: "multiple_choice",
            prompt: "Al medir el verso '¿Qué es po-e-sí-a?, di-ces', ¿cuántas sílabas métricas resultan considerando la sinalefa y el acento final llano?",
            options: [
              "7 sílabas métricas ('¿Qué_es / po-e-sí-a / di-ces').",
              "11 sílabas.",
              "4 sílabas.",
              "9 sílabas."
            ],
            correctAnswer: "7 sílabas métricas ('¿Qué_es / po-e-sí-a / di-ces').",
            explanation: "La sinalefa une 'Qué' con 'es' (1), po (2), e (3), sí (4), a (5), di (6), ces (7); palabra final llana no suma ni resta."
          },
          {
            id: "es-u4-l1-q16",
            type: "matching",
            prompt: "Empareja cada poeta español universal con su obra o época:",
            pairs: [
              { native: "Gustavo Adolfo Bécquer", english: "Rimas y leyendas (Romanticismo)", left: "Gustavo Adolfo Bécquer", right: "Rimas y leyendas (Romanticismo)" },
              { native: "Federico García Lorca", english: "Generación del 27 / Romancero gitano", left: "Federico García Lorca", right: "Generación del 27 / Romancero gitano" },
              { native: "Lope de Vega", english: "Monstruo de la Naturaleza / Siglo de Oro", left: "Lope de Vega", right: "Monstruo de la Naturaleza / Siglo de Oro" },
              { native: "Gloria Fuertes", english: "Poesía infantil, social y pacifista contemporánea", left: "Gloria Fuertes", right: "Poesía infantil, social y pacifista contemporánea" }
            ]
          },
          {
            id: "es-u4-l1-q17",
            type: "fill_blank",
            sentence: "Los versos que no tienen rima fija ni medida silábica regular pero mantienen ritmo fónico interior se denominan versos ___.",
            missingWord: "libres",
            options: ["libres", "rimados", "consonantes", "octosílabos"],
            correctAnswer: "libres",
            explanation: "El verso libre floreció en el siglo XX como ruptura con las ataduras métricas clásicas en favor de un ritmo expresivo autónomo."
          },
          {
            id: "es-u4-l1-q18",
            type: "scramble",
            prompt: "Ordena los versos de la famosa Rima XXI de Gustavo Adolfo Bécquer:",
            tokens: ["¿Qué", "es", "poesía?", "Poesía...", "eres", "tú."],
            correctTokens: ["¿Qué", "es", "poesía?", "Poesía...", "eres", "tú."],
            explanation: "Uno de los poemas breves más recitados y emblemáticos del Romanticismo íntimo español."
          },
          {
            id: "es-u4-l1-q19",
            type: "multiple_choice",
            prompt: "Si dos versos riman en las palabras 'espejo' y 'viejo', ¿qué tipo de rima comparten?",
            options: [
              "Rima consonante en -ejo.",
              "Rima asonante en e-o únicamente.",
              "Versos blancos sin rima.",
              "Rima arromanzada."
            ],
            correctAnswer: "Rima consonante en -ejo.",
            explanation: "Coinciden todas las vocales y consonantes a partir de la vocal tónica 'e': -ejo."
          },
          {
            id: "es-u4-l1-q20",
            type: "audio_listen",
            phrase: "Cultivo una rosa blanca en junio como en enero para el amigo sincero que me da su mano franca.",
            prompt: "¿Cuál es el esquema métrico de esta hermosa estrofa del poeta José Martí?",
            options: [
              "Redondilla octosílabo con rima consonante abba (blanca/franca, enero/sincero).",
              "Soneto alejandrino en prosa.",
              "Poema en verso libre sin rimas.",
              "Romance épico de gesta medieval."
            ],
            correctAnswer: "Redondilla octosílabo con rima consonante abba (blanca/franca, enero/sincero).",
            explanation: "José Martí utiliza la redondilla octosílaba con rima consonante abrazada para cantar a la amistad y al perdón."
          }
        ]
      },
      {
        id: "es-u4-l2",
        title: "Lección 4.4–4.6: Figuras Retóricas y Declamación",
        description: "Metáfora, comparación, personificación, anáfora, hipérbole y el recital poético del aula.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u4-l2-q1",
            type: "multiple_choice",
            prompt: "¿En qué consiste la figura retórica de la metáfora?",
            options: [
              "Identificar dos realidades distintas basándose en una relación de semejanza ('sus ojos son dos luceros').",
              "Contar el número de letras de un verso.",
              "Traducir un texto de un idioma a otro.",
              "Copiar un fragmento de una enciclopedia."
            ],
            correctAnswer: "Identificar dos realidades distintas basándose en una relación de semejanza ('sus ojos son dos luceros').",
            explanation: "La metáfora traslada el significado de un término real a otro imaginario mediante una analogía estética implícita."
          },
          {
            id: "es-u4-l2-q2",
            type: "matching",
            prompt: "Identifica la figura literaria en cada ejemplo célebre:",
            pairs: [
              { native: "Tus dientes son perlas", english: "Metáfora (identificación directa)", left: "Tus dientes son perlas", right: "Metáfora (identificación directa)" },
              { native: "El río canta entre las piedras", english: "Personificación (atribuye rasgos humanos)", left: "El río canta entre las piedras", right: "Personificación (atribuye rasgos humanos)" },
              { native: "Tenía tanta hambre que me comería una vaca", english: "Hipérbole (exageración desmesurada)", left: "Tenía tanta hambre que me comería una vaca", right: "Hipérbole (exageración desmesurada)" },
              { native: "Sus manos eran frías como el hielo", english: "Símil o comparación (con nexo 'como')", left: "Sus manos eran frías como el hielo", right: "Símil o comparación (con nexo 'como')" }
            ]
          },
          {
            id: "es-u4-l2-q3",
            type: "multiple_choice",
            prompt: "¿Cuál es la diferencia entre el símil (o comparación) y la metáfora?",
            options: [
              "El símil utiliza un nexo comparativo explícito ('como', 'parece', 'igual que'); la metáfora identifica los dos términos directamente.",
              "La metáfora solo existe en prosa y el símil en teatro.",
              "El símil es siempre un error de ortografía.",
              "No hay ninguna diferencia; son exactamente lo mismo."
            ],
            correctAnswer: "El símil utiliza un nexo comparativo explícito ('como', 'parece', 'igual que'); la metáfora identifica los dos términos directamente.",
            explanation: "En 'sus labios son como rubíes' hay símil (nexo 'como'); en 'los rubíes de sus labios' hay metáfora pura."
          },
          {
            id: "es-u4-l2-q4",
            type: "fill_blank",
            sentence: "La repetición intencionada de una o varias palabras al comienzo de versos sucesivos se denomina ___.",
            missingWord: "anáfora",
            options: ["anáfora", "aliteración", "antítesis", "elipsis"],
            correctAnswer: "anáfora",
            explanation: "La anáfora genera una honda cadencia musical: 'Por ti el silencio de la selva umbrosa, / por ti la esquividad...'."
          },
          {
            id: "es-u4-l2-q5",
            type: "scramble",
            prompt: "Ordena los elementos para definir la personificación o prosopopeya:",
            tokens: ["Atribuir", "cualidades", "humanas", "a", "objetos", "o", "animales."],
            correctTokens: ["Atribuir", "cualidades", "humanas", "a", "objetos", "o", "animales."],
            explanation: "La personificación dota de voz, emociones o intenciones conscientes a seres inanimados o a la naturaleza."
          },
          {
            id: "es-u4-l2-q6",
            type: "matching",
            prompt: "Empareja cada recurso fónico y sintáctico con su descripción:",
            pairs: [
              { native: "Aliteración", english: "Repetición de sonidos consonánticos para evocar sensaciones", left: "Aliteración", right: "Repetición de sonidos consonánticos para evocar sensaciones" },
              { native: "Hipérbaton", english: "Alteración del orden sintáctico habitual de la oración", left: "Hipérbaton", right: "Alteración del orden sintáctico habitual de la oración" },
              { native: "Antítesis", english: "Contraposición de dos ideas o palabras contrarias", left: "Antítesis", right: "Contraposición de dos ideas o palabras contrarias" },
              { native: "Paralelismo", english: "Repetición de una misma estructura sintáctica", left: "Paralelismo", right: "Repetición de una misma estructura sintáctica" }
            ]
          },
          {
            id: "es-u4-l2-q7",
            type: "multiple_choice",
            prompt: "En el verso de Góngora: 'En el silencio solo se escuchaba / un susurro de abejas que sonaba', ¿qué figura fónica resalta?",
            options: [
              "Aliteración del sonido /s/ para evocar el zumbido de las abejas.",
              "Hipérbole de tamaño astronómico.",
              "Metáfora náutica.",
              "Uso de mayúsculas medievales."
            ],
            correctAnswer: "Aliteración del sonido /s/ para evocar el zumbido de las abejas.",
            explanation: "La reiteración de la sibilante /s/ ('silencio solo se escuchaba / un susurro... sonaba') imita acústicamente el rumor del insecto."
          },
          {
            id: "es-u4-l2-q8",
            type: "fill_blank",
            sentence: "El verso de Bécquer 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar' contiene un claro ___ por invertir el orden sintáctico natural.",
            missingWord: "hipérbaton",
            options: ["hipérbaton", "diálogo", "monólogo", "insulto"],
            correctAnswer: "hipérbaton",
            explanation: "El orden habitual sería: 'Las oscuras golondrinas volverán a colgar sus nidos en tu balcón'; el hipérbaton embellece el ritmo poético."
          },
          {
            id: "es-u4-l2-q9",
            type: "audio_listen",
            phrase: "Es tan corto el amor y es tan largo el olvido.",
            prompt: "¿Qué célebre figura retórica de contraposición empleó Pablo Neruda en este verso?",
            options: [
              "Antítesis (corto amor frente a largo olvido).",
              "Pleonasmo innecesario.",
              "Definición de diccionario técnico.",
              "Fórmula matemática algebraica."
            ],
            correctAnswer: "Antítesis (corto amor frente a largo olvido).",
            explanation: "La antítesis contrapone nociones opuestas ('corto / largo', 'amor / olvido') potenciando la hondura del sentimiento nostálgico."
          },
          {
            id: "es-u4-l2-q10",
            type: "multiple_choice",
            prompt: "Al declamar un poema en el recital del aula, ¿qué factor prosódico es fundamental para transmitir la emoción poética?",
            options: [
              "Respetar las pausas versales, variar la entonación con expresividad y mirar al público con convicción.",
              "Hablar en un tono monótono como un robot programado.",
              "Tapar la cara con la hoja de papel sin levantar la vista.",
              "Gritar a la máxima potencia sin pausas ni modulaciones."
            ],
            correctAnswer: "Respetar las pausas versales, variar la entonación con expresividad y mirar al público con convicción.",
            explanation: "La declamación lírica es una interpretación artística oral donde el ritmo, las pausas y la prosodia dan vida física al texto escrito."
          },
          {
            id: "es-u4-l2-q11",
            type: "scramble",
            prompt: "Ordena los elementos de la definición de declamación poética:",
            tokens: ["Interpretar", "oralmente", "un", "poema", "con", "voz", "y", "expresión."],
            correctTokens: ["Interpretar", "oralmente", "un", "poema", "con", "voz", "y", "expresión."],
            explanation: "La declamación poética aúna la palabra, la prosodia y la sensibilidad corporal ante un auditorio."
          },
          {
            id: "es-u4-l2-q12",
            type: "matching",
            prompt: "Identifica la figura retórica de cada verso:",
            pairs: [
              { native: "Tanto dolor se agrupa en mi costado / que por doler me duele hasta el aliento", english: "Hipérbole (Miguel Hernández)", left: "Tanto dolor se agrupa en mi costado / que por doler me duele hasta el aliento", right: "Hipérbole (Miguel Hernández)" },
              { native: "La luna vino a la fragua / con su polisón de nardos", english: "Personificación (Lorca)", left: "La luna vino a la fragua / con su polisón de nardos", right: "Personificación (Lorca)" },
              { native: "Nuestras vidas son los ríos / que van a dar en la mar", english: "Metáfora (Jorge Manrique)", left: "Nuestras vidas son los ríos / que van a dar en la mar", right: "Metáfora (Jorge Manrique)" },
              { native: "Temprano levantó la muerte el vuelo / temprano madrugó la madrugada", english: "Anáfora (Miguel Hernández)", left: "Temprano levantó la muerte el vuelo / temprano madrugó la madrugada", right: "Anáfora (Miguel Hernández)" }
            ]
          },
          {
            id: "es-u4-l2-q13",
            type: "fill_blank",
            sentence: "El fenómeno por el cual una frase u oración poética no termina en el verso donde empieza sino que continúa en el siguiente se llama ___.",
            missingWord: "encabalgamiento",
            options: ["encabalgamiento", "rima", "estrofa", "sinalefa"],
            correctAnswer: "encabalgamiento",
            explanation: "El encabalgamiento desajusta la pausa métrica y la pausa sintáctica, creando un efecto de tensión y aceleración emocional."
          },
          {
            id: "es-u4-l2-q14",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes figuras retóricas consiste en asociar sensaciones pertenecientes a sentidos corporales diferentes (como 'voz dulce' o 'silencio negro')?",
            options: ["Sinestesia", "Metonimia", "Epanadiplosis", "Asíndeton"],
            correctAnswer: "Sinestesia",
            explanation: "La sinestesia cruza percepciones de sentidos distintos (oído, gusto, vista, tacto): 'amarillo chillón', 'cálido abrazo'."
          },
          {
            id: "es-u4-l2-q15",
            type: "multiple_choice",
            prompt: "En la evaluación compartida o coevaluación del recital poético, ¿qué actitud deben adoptar los compañeros de clase?",
            options: [
              "Crítica constructiva, respetuosa, fundamentada en criterios claros y reconociendo el esfuerzo y la expresividad del orador.",
              "Burlarse de los posibles tropiezos de dicción de los demás.",
              "Ignorar por completo la actuación y mirar el móvil.",
              "Asignar notas numéricas al azar sin escuchar."
            ],
            correctAnswer: "Crítica constructiva, respetuosa, fundamentada en criterios claros y reconociendo el esfuerzo y la expresividad del orador.",
            explanation: "La coevaluación fomenta la empatía, el juicio crítico ponderado y el aprendizaje cooperativo según los preceptos de la LOMLOE."
          },
          {
            id: "es-u4-l2-q16",
            type: "matching",
            prompt: "Empareja cada recurso con el nivel lingüístico al que pertenece:",
            pairs: [
              { native: "Aliteración y rima", english: "Nivel fónico (sonidos del lenguaje)", left: "Aliteración y rima", right: "Nivel fónico (sonidos del lenguaje)" },
              { native: "Anáfora y paralelismo", english: "Nivel morfosintáctico (estructura de oraciones)", left: "Anáfora y paralelismo", right: "Nivel morfosintáctico (estructura de oraciones)" },
              { native: "Metáfora y personificación", english: "Nivel léxico-semántico (significado de palabras)", left: "Metáfora y personificación", right: "Nivel léxico-semántico (significado de palabras)" },
              { native: "Encabalgamiento", english: "Nivel rítmico-métrico versal", left: "Encabalgamiento", right: "Nivel rítmico-métrico versal" }
            ]
          },
          {
            id: "es-u4-l2-q17",
            type: "fill_blank",
            sentence: "Una antología poética es una selección cuidada de los mejores ___ elegidos bajo un criterio temático, de época o de autoría.",
            missingWord: "poemas",
            options: ["poemas", "artículos", "noticias", "anuncios"],
            correctAnswer: "poemas",
            explanation: "La antología compila textos selectos para poner en valor la excelencia y representatividad de una corriente o grupo lírico."
          },
          {
            id: "es-u4-l2-q18",
            type: "scramble",
            prompt: "Ordena los versos de este cuarteto rimado sobre la creación literaria:",
            tokens: ["Las", "palabras", "despiertan", "en", "el", "alma", "la", "emoción."],
            correctTokens: ["Las", "palabras", "despiertan", "en", "el", "alma", "la", "emoción."],
            explanation: "El lenguaje poético trasciende la función informativa para despertar la dimensión estética y afectiva en el lector."
          },
          {
            id: "es-u4-l2-q19",
            type: "multiple_choice",
            prompt: "¿Cuál de los siguientes fragmentos contiene una personificación evidente de la naturaleza?",
            options: [
              "Las estrellas temblaban de miedo ante el rugido del mar.",
              "El sol tiene una temperatura de millones de grados centígrados.",
              "Compramos tres kilogramos de manzanas rojas en el mercado.",
              "El avión aterrizó en la pista número cuatro."
            ],
            correctAnswer: "Las estrellas temblaban de miedo ante el rugido del mar.",
            explanation: "Las estrellas no sienten 'miedo' ni el mar 'ruge' literalmente; son atribuciones afectivas animadas propias de la poesía."
          },
          {
            id: "es-u4-l2-q20",
            type: "audio_listen",
            phrase: "Sus lágrimas eran ríos cristalinos que descendían silenciosos por sus mejillas.",
            prompt: "¿Qué recurso retórico predomina al equiparar directamente las lágrimas con 'ríos cristalinos'?",
            options: [
              "Una metáfora poética basada en la semejanza del fluir continuo del agua.",
              "Un informe forense administrativo.",
              "Una orden militar imperativa.",
              "Un refrán meteorológico del campo."
            ],
            correctAnswer: "Una metáfora poética basada en la semejanza del fluir continuo del agua.",
            explanation: "Identificar las lágrimas con 'ríos cristalinos' magnifica poéticamente la intensidad y el dolor del llanto mediante una metáfora."
          }
        ]
      }
    ]
  },
  {
    id: "es-unit-5",
    unitId: "es-unit-5",
    unitNumber: 5,
    level: "1º ESO — Bloque 5",
    title: "Unidad 5: Convivir con palabras (Living Together with Words)",
    subtitle: "Situación de aprendizaje: Debate moderado y asamblea escolar. Argumentación, léxico, puntuación y morfología léxica.",
    icon: "GraduationCap",
    color: "#10b981",
    lessons: [
      {
        id: "es-u5-l1",
        title: "Lección 5.1–5.3: Argumentación y Debate Oral",
        description: "Estructura del texto argumentativo (tesis, argumentos, contraargumentos), el debate reglado y asamblea de consenso.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u5-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es el propósito comunicativo fundamental de un texto argumentativo?",
            options: [
              "Defender una postura o tesis razonada para convencer o persuadir al destinatario.",
              "Explicar una fórmula química sin opinar.",
              "Recitar un poema lírico de amor.",
              "Dar los buenos días cordialmente al entrar al autobús."
            ],
            correctAnswer: "Defender una postura o tesis razonada para convencer o persuadir al destinatario.",
            explanation: "La argumentación busca la adhesión del receptor mediante el empleo ordenado de argumentos racionales, ejemplos y datos contrastados."
          },
          {
            id: "es-u5-l1-q2",
            type: "matching",
            prompt: "Empareja cada parte del texto argumentativo con su función:",
            pairs: [
              { native: "Tesis", english: "Postura o idea principal que el emisor defiende", left: "Tesis", right: "Postura o idea principal que el emisor defiende" },
              { native: "Cuerpo argumentativo", english: "Razones, evidencias, ejemplos y datos de apoyo", left: "Cuerpo argumentativo", right: "Razones, evidencias, ejemplos y datos de apoyo" },
              { native: "Contraargumento", english: "Objeción razonada para refutar la postura opuesta", left: "Contraargumento", right: "Objeción razonada para refutar la postura opuesta" },
              { native: "Conclusión", english: "Síntesis final que reafirma la tesis inicial", left: "Conclusión", right: "Síntesis final que reafirma la tesis inicial" }
            ]
          },
          {
            id: "es-u5-l1-q3",
            type: "multiple_choice",
            prompt: "Si en un debate sobre el uso de uniformes escolares citas un informe científico de la Universidad de Salamanca, estás usando un argumento de:",
            options: [
              "Argumento de autoridad (respaldado por expertos o instituciones solventes).",
              "Argumento falaz de ataque personal (ad hominem).",
              "Argumento cómico de burla.",
              "Argumento de superstición popular."
            ],
            correctAnswer: "Argumento de autoridad (respaldado por expertos o instituciones solventes).",
            explanation: "El argumento de autoridad recurre al juicio ponderado de especialistas u organismos cualificados para dar solidez a la tesis."
          },
          {
            id: "es-u5-l1-q4",
            type: "fill_blank",
            sentence: "En un debate reglado, la persona encargada de presentar el tema, conceder los turnos de palabra y vigilar el tiempo asignado es el ___.",
            missingWord: "moderador",
            options: ["moderador", "público", "adversario", "cronista"],
            correctAnswer: "moderador",
            explanation: "El moderador actúa como árbitro imparcial que garantiza la fluidez, el orden y el respeto mutuo durante el debate."
          },
          {
            id: "es-u5-l1-q5",
            type: "scramble",
            prompt: "Ordena las tres reglas de oro para un debate cívico y democrático:",
            tokens: ["Escuchar", "con", "atención,", "argumentar", "con", "respeto", "y", "no", "insultar."],
            correctTokens: ["Escuchar", "con", "atención,", "argumentar", "con", "respeto", "y", "no", "insultar."],
            explanation: "El debate formativo enseña a disentir de las ideas de los demás sin atacar jamás la dignidad de las personas."
          },
          {
            id: "es-u5-l1-q6",
            type: "matching",
            prompt: "Identifica el tipo de argumento empleado en cada caso:",
            pairs: [
              { native: "La Organización Mundial de la Salud recomienda hacer deporte", english: "Argumento de autoridad", left: "La Organización Mundial de la Salud recomienda hacer deporte", right: "Argumento de autoridad" },
              { native: "Ayer mi hermano mejoró sus notas tras dedicar una hora a la lectura", english: "Argumento de experiencia o ejemplo personal", left: "Ayer mi hermano mejoró sus notas tras dedicar una hora a la lectura", right: "Argumento de experiencia o ejemplo personal" },
              { native: "El 85 % de los estudiantes aprueba cuando descansa 8 horas diarias", english: "Argumento de datos estadísticos objetivos", left: "El 85 % de los estudiantes aprueba cuando descansa 8 horas diarias", right: "Argumento de datos estadísticos objetivos" },
              { native: "Si no cuidamos el agua dulce, sufriremos graves sequías en el futuro", english: "Argumento de causa y consecuencia", left: "Si no cuidamos el agua dulce, sufriremos graves sequías en el futuro", right: "Argumento de causa y consecuencia" }
            ]
          },
          {
            id: "es-u5-l1-q7",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes intervenciones constituye una falacia ad hominem (inaceptable en un debate constructivo)?",
            options: [
              "'Tu propuesta no tiene valor porque eres demasiado joven y no entiendes nada'.",
              "'Los datos del instituto meteorológico contradicen esa afirmación'.",
              "'Entiendo tu punto de vista, pero los costes económicos son muy elevados'.",
              "'Propongo una alternativa que contempla ambas necesidades'."
            ],
            correctAnswer: "'Tu propuesta no tiene valor porque eres demasiado joven y no entiendes nada'.",
            explanation: "La falacia ad hominem ataca despectivamente a la persona que habla en lugar de rebatir sus razonamientos con argumentos."
          },
          {
            id: "es-u5-l1-q8",
            type: "fill_blank",
            sentence: "El acuerdo conjunto alcanzado por todos los miembros de una asamblea o debate mediante concesiones mutuas se llama ___.",
            missingWord: "consenso",
            options: ["consenso", "veto", "guerra", "conflicto"],
            correctAnswer: "consenso",
            explanation: "El consenso es el fruto del diálogo democrático que busca puntos de encuentro en beneficio de la convivencia colectiva."
          },
          {
            id: "es-u5-l1-q9",
            type: "audio_listen",
            phrase: "Estoy de acuerdo con la necesidad de reciclar, pero considero que deben instalarse más contenedores amarillos cerca de las aulas.",
            prompt: "¿Qué estrategia comunicativa argumentativa se manifiesta en esta intervención?",
            options: [
              "Aceptación parcial de la tesis ajena seguida de una propuesta constructiva de mejora.",
              "Rechazo absoluto e insultante sin alternativas.",
              "Negación de la existencia del reciclaje.",
              "Un poema satírico sobre la basura."
            ],
            correctAnswer: "Aceptación parcial de la tesis ajena seguida de una propuesta constructiva de mejora.",
            explanation: "La concesión argumentativa ('estoy de acuerdo con... pero') legitima al interlocutor y construye un diálogo eficaz."
          },
          {
            id: "es-u5-l1-q10",
            type: "multiple_choice",
            prompt: "¿Cuál de los siguientes conectores oracionales es característico de la conclusión en un ensayo argumentativo?",
            options: [
              "En conclusión / en definitiva / por todas las razones expuestas.",
              "Érase una vez en un lejano país.",
              "Por el contrario de repente.",
              "Había una vez un barco chiquito."
            ],
            correctAnswer: "En conclusión / en definitiva / por todas las razones expuestas.",
            explanation: "Los conectores conclusivos clausuran la argumentación recapitulando la evidencia acumulada."
          },
          {
            id: "es-u5-l1-q11",
            type: "scramble",
            prompt: "Ordena los elementos para formular una propuesta de consenso asambleario:",
            tokens: ["Proponemos", "establecer", "un", "calendario", "rotativo", "para", "la", "cancha."],
            correctTokens: ["Proponemos", "establecer", "un", "calendario", "rotativo", "para", "la", "cancha."],
            explanation: "Una asamblea escolar resuelve conflictos sobre el uso del patio mediando soluciones equitativas."
          },
          {
            id: "es-u5-l1-q12",
            type: "matching",
            prompt: "Empareja cada fórmula lingüística con su función en el debate oral:",
            pairs: [
              { native: "Desde mi punto de vista...", english: "Introducir la propia opinión con cortesía", left: "Desde mi punto de vista...", right: "Introducir la propia opinión con cortesía" },
              { native: "¿Podrías aclarar a qué te refieres?", english: "Pedir una aclaración sobre un dato", left: "¿Podrías aclarar a qué te refieres?", right: "Pedir una aclaración sobre un dato" },
              { native: "Comparto tu idea; no obstante...", english: "Realizar una objeción razonada", left: "Comparto tu idea; no obstante...", right: "Realizar una objeción razonada" },
              { native: "Para sintetizar lo acordado...", english: "Recapitular los puntos en común", left: "Para sintetizar lo acordado...", right: "Recapitular los puntos en común" }
            ]
          },
          {
            id: "es-u5-l1-q13",
            type: "fill_blank",
            sentence: "La respuesta que da un orador para invalidar o debilitar el argumento del equipo contrario se llama réplica o ___.",
            missingWord: "refutación",
            options: ["refutación", "aplauso", "insulto", "pregunta"],
            correctAnswer: "refutación",
            explanation: "La refutación demuestra la inconsistencia o debilidad lógica de los argumentos contrarios mediante datos y lógica."
          },
          {
            id: "es-u5-l1-q14",
            type: "multiple_choice",
            prompt: "En un texto de opinión periodístico, ¿dónde se sitúa habitualmente la tesis si el autor utiliza una estructura inductiva?",
            options: [
              "Al final del texto, como conclusión deducida tras examinar varios ejemplos.",
              "En la primera línea del titular.",
              "En la firma al pie de la foto.",
              "No aparece en ningún lugar."
            ],
            correctAnswer: "Al final del texto, como conclusión deducida tras examinar varios ejemplos.",
            explanation: "En la estructura inductiva se parte de casos particulares para llegar a la tesis final; en la deductiva, la tesis abre el texto."
          },
          {
            id: "es-u5-l1-q15",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes afirmaciones define la empatía en la comunicación interpersonal?",
            options: [
              "La capacidad de comprender los sentimientos y perspectivas de la otra persona.",
              "La imposición de la fuerza bruta para silenciar a los demás.",
              "Hablar sin parar durante dos horas sin dejar intervenir a nadie.",
              "El desprecio hacia las opiniones que no coinciden con las nuestras."
            ],
            correctAnswer: "La capacidad de comprender los sentimientos y perspectivas de la otra persona.",
            explanation: "La empatía es una competencia socioemocional clave para la convivencia pacífica y el aprendizaje dialógico."
          },
          {
            id: "es-u5-l1-q16",
            type: "matching",
            prompt: "Empareja cada término con su significado cívico:",
            pairs: [
              { native: "Diálogo", english: "Conversación razonada para buscar el entendimiento mutuo", left: "Diálogo", right: "Conversación razonada para buscar el entendimiento mutuo" },
              { native: "Asamblea", english: "Reunión de personas para deliberar y tomar decisiones comunes", left: "Asamblea", right: "Reunión de personas para deliberar y tomar decisiones comunes" },
              { native: "Norma de convivencia", english: "Regla aceptada por la comunidad para garantizar el respeto", left: "Norma de convivencia", right: "Regla aceptada por la comunidad para garantizar el respeto" },
              { native: "Votación democrática", english: "Procedimiento para elegir opciones por mayoría", left: "Votación democrática", right: "Procedimiento para elegir opciones por mayoría" }
            ]
          },
          {
            id: "es-u5-l1-q17",
            type: "fill_blank",
            sentence: "En la oratoria, el tiempo que se otorga a cada interlocutor antes de que intervenga el siguiente se llama turno de ___.",
            missingWord: "palabra",
            options: ["palabra", "recreo", "espera", "juego"],
            correctAnswer: "palabra",
            explanation: "Respetar los turnos de palabra es la regla primordial de la cortesía conversacional reglada."
          },
          {
            id: "es-u5-l1-q18",
            type: "scramble",
            prompt: "Ordena los elementos para defender el valor del respeto en el debate:",
            tokens: ["Podemos", "discrepar", "de", "las", "opiniones", "sin", "faltar", "al", "respeto."],
            correctTokens: ["Podemos", "discrepar", "de", "las", "opiniones", "sin", "faltar", "al", "respeto."],
            explanation: "La divergencia ideológica y la confrontación dialéctica son perfectamente compatibles con la cortesía y la dignidad."
          },
          {
            id: "es-u5-l1-q19",
            type: "multiple_choice",
            prompt: "¿Qué documento formal registra por escrito los acuerdos alcanzados y los temas tratados en una asamblea o reunión?",
            options: ["El acta de la reunión.", "La novela policíaca.", "El recibo de compra.", "La partitura musical."],
            correctAnswer: "El acta de la reunión.",
            explanation: "El acta es el documento institucional que da fe de los asistentes, deliberaciones y acuerdos adoptados en asambleas."
          },
          {
            id: "es-u5-l1-q20",
            type: "audio_listen",
            phrase: "Para concluir este debate, queremos agradecer la participación de todos los equipos y destacar los tres acuerdos consensuados.",
            prompt: "¿Qué función cumple esta intervención final del moderador?",
            options: [
              "Cierre formal del debate con gratitud protocolaria y resumen de los consensos logrados.",
              "Inicio de un nuevo conflicto violento.",
              "Expulsión inmediata de todos los participantes del aula.",
              "Lectura de un examen de matemáticas."
            ],
            correctAnswer: "Cierre formal del debate con gratitud protocolaria y resumen de los consensos logrados.",
            explanation: "El cierre del moderador sintetiza los logros del debate y agradece el clima constructivo de convivencia."
          }
        ]
      },
      {
        id: "es-u5-l2",
        title: "Lección 5.4–5.6: Semántica, Puntuación y Morfología Léxica",
        description: "Sinonimia, antonimia, polisemia, puntuación normativa y formación de palabras (prefijación, sufijación y composición).",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u5-l2-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la relación semántica que une a las palabras 'docente', 'profesor' y 'maestro'?",
            options: [
              "Sinonimia (comparten un significado idéntico o muy afín).",
              "Antonimia (tienen significados opuestos).",
              "Polisemia accidental.",
              "Homonimia fónica no relacionada."
            ],
            correctAnswer: "Sinonimia (comparten un significado idéntico o muy afín).",
            explanation: "Las palabras sinónimas permiten evitar repeticiones en el texto y matizar con precisión los registros."
          },
          {
            id: "es-u5-l2-q2",
            type: "matching",
            prompt: "Empareja cada par de términos con su relación semántica:",
            pairs: [
              { native: "Paz / Guerra", english: "Antonimia (significados contrarios)", left: "Paz / Guerra", right: "Antonimia (significados contrarios)" },
              { native: "Banco (asiento) / Banco (entidad)", english: "Polisemia / Homonimia", left: "Banco (asiento) / Banco (entidad)", right: "Polisemia / Homonimia" },
              { native: "Veloz / Rápido", english: "Sinonimia (significados afines)", left: "Veloz / Rápido", right: "Sinonimia (significados afines)" },
              { native: "Perro, gato, león -> Mamífero", english: "Hiponimia respecto a hiperónimo 'animal'", left: "Perro, gato, león -> Mamífero", right: "Hiponimia respecto a hiperónimo 'animal'" }
            ]
          },
          {
            id: "es-u5-l2-q3",
            type: "multiple_choice",
            prompt: "Cuando una misma palabra posee varios significados que guardan cierta relación entre sí (como 'ojo' de la cara y 'ojo' de la aguja), se trata de:",
            options: ["Polisemia", "Homonimia absoluta", "Antonimia gradual", "Paronimia"],
            correctAnswer: "Polisemia",
            explanation: "La polisemia se da cuando un único significante adquiere múltiples acepciones emparentadas por analogía o metáfora."
          },
          {
            id: "es-u5-l2-q4",
            type: "fill_blank",
            sentence: "El signo de puntuación que separa oraciones sintácticamente independientes pero estrechamente unidas por el sentido es el punto y ___.",
            missingWord: "coma",
            options: ["coma", "seguido", "aparte", "final"],
            correctAnswer: "coma",
            explanation: "El punto y coma (;) marca una pausa mayor que la coma y menor que el punto entre enunciados íntimamente relacionados."
          },
          {
            id: "es-u5-l2-q5",
            type: "scramble",
            prompt: "Ordena los elementos para formular la regla del uso de la coma en el vocativo:",
            tokens: ["El", "vocativo", "siempre", "se", "aísla", "mediante", "comas."],
            correctTokens: ["El", "vocativo", "siempre", "se", "aísla", "mediante", "comas."],
            explanation: "El vocativo es la palabra con la que llamamos al interlocutor: 'Carlos, ven aquí' o 'Ven aquí, Carlos'."
          },
          {
            id: "es-u5-l2-q6",
            type: "matching",
            prompt: "Empareja cada signo de puntuación con su regla normativa:",
            pairs: [
              { native: "Coma (,)", english: "Separa elementos de una enumeración o incisos", left: "Coma (,)", right: "Separa elementos de una enumeración o incisos" },
              { native: "Dos puntos (:)", english: "Preceden a una cita textual o enumeración anunciada", left: "Dos puntos (:)", right: "Preceden a una cita textual o enumeración anunciada" },
              { native: "Puntos suspensivos (...)", english: "Indican interrupción, suspense o enumeración abierta", left: "Puntos suspensivos (...)", right: "Indican interrupción, suspense o enumeración abierta" },
              { native: "Punto y seguido (.)", english: "Separa oraciones distintas dentro de un mismo párrafo", left: "Punto y seguido (.)", right: "Separa oraciones distintas dentro de un mismo párrafo" }
            ]
          },
          {
            id: "es-u5-l2-q7",
            type: "multiple_choice",
            prompt: "En la formación de palabras, ¿qué elemento morfológico se añade DELANTE de la raíz para crear un nuevo término?",
            options: [
              "Un prefijo (como 'des-' en 'deshacer' o 'in-' en 'intolerable').",
              "Un sufijo flexivo de persona.",
              "Una desinencia de gerundio.",
              "Un punto ortográfico."
            ],
            correctAnswer: "Un prefijo (como 'des-' en 'deshacer' o 'in-' en 'intolerable').",
            explanation: "Los prefijos se anteponen a la base léxica para modificar su significado (submarino, prehistoria, descontento)."
          },
          {
            id: "es-u5-l2-q8",
            type: "fill_blank",
            sentence: "La unión de dos o más palabras o lexemas simples independientes para crear un nuevo vocablo (como 'abrelatas' o 'sacapuntas') se llama ___.",
            missingWord: "composición",
            options: ["composición", "prefijación", "derivación", "parasíntesis"],
            correctAnswer: "composición",
            explanation: "Las palabras compuestas fusionan dos raíces existentes en la lengua: abrir + latas = abrelatas."
          },
          {
            id: "es-u5-l2-q9",
            type: "audio_listen",
            phrase: "El respeto, la empatía y la solidaridad son valores imprescindibles para una convivencia armoniosa.",
            prompt: "¿Qué dos signos de puntuación se emplean en esta enumeración escuchada?",
            options: [
              "La coma separando los elementos de la serie y el punto final cerrando el enunciado.",
              "Signos de exclamación y comillas dobles.",
              "Paréntesis redondos y puntos suspensivos.",
              "Barras oblicuas y asteriscos."
            ],
            correctAnswer: "La coma separando los elementos de la serie y el punto final cerrando el enunciado.",
            explanation: "En las enumeraciones simples, los miembros se coordinan con coma, reservando la conjunción 'y' para el último elemento."
          },
          {
            id: "es-u5-l2-q10",
            type: "multiple_choice",
            prompt: "¿Cuál de los siguientes términos es una palabra derivada por sufijación a partir de un sustantivo?",
            options: [
              "Librería (de libro + sufijo '-ería').",
              "Mesa.",
              "Sol.",
              "Baloncesto (balón + cesto)."
            ],
            correctAnswer: "Librería (de libro + sufijo '-ería').",
            explanation: "Los sufijos se posponen a la raíz creando nuevos sustantivos (librería, panadería), adjetivos (amable) o adverbios (-mente)."
          },
          {
            id: "es-u5-l2-q11",
            type: "scramble",
            prompt: "Ordena los elementos para construir una palabra derivada con prefijo y sufijo:",
            tokens: ["In-", "just-", "icia", "forma", "la", "palabra", "derivada", "'injusticia'."],
            correctTokens: ["In-", "just-", "icia", "forma", "la", "palabra", "derivada", "'injusticia'."],
            explanation: "A partir de la raíz 'just-' se añade el prefijo negativo 'in-' y el sufijo sustantivador '-icia'."
          },
          {
            id: "es-u5-l2-q12",
            type: "matching",
            prompt: "Empareja cada prefijo con el significado que aporta a la palabra:",
            pairs: [
              { native: "Sub- (submarino, subterráneo)", english: "Debajo o inferioridad", left: "Sub- (submarino, subterráneo)", right: "Debajo o inferioridad" },
              { native: "Re- (rehacer, releer)", english: "Repetición o intensidad", left: "Re- (rehacer, releer)", right: "Repetición o intensidad" },
              { native: "Pre- (prehistoria, prever)", english: "Antes o anterioridad", left: "Pre- (prehistoria, prever)", right: "Antes o anterioridad" },
              { native: "Anti- (antivirus, antibelicista)", english: "Oposición o contra", left: "Anti- (antivirus, antibelicista)", right: "Oposición o contra" }
            ]
          },
          {
            id: "es-u5-l2-q13",
            type: "fill_blank",
            sentence: "Las palabras como 'tubo' (pieza cilíndrica hueca) y 'tuvo' (del verbo tener) que suenan exactamente igual pero se escriben de manera distinta son ___.",
            missingWord: "homófonas",
            options: ["homófonas", "sinónimas", "antónimas", "parónimas"],
            correctAnswer: "homófonas",
            explanation: "Las palabras homófonas coinciden en su pronunciación acústica pero difieren en su grafía ortográfica y significado."
          },
          {
            id: "es-u5-l2-q14",
            type: "multiple_choice",
            prompt: "¿Cuál de las siguientes oraciones comete una incorrección ortográfica con la coma entre sujeto y predicado (la llamada 'coma asesina')?",
            options: [
              "Los alumnos de primero de secundaria, visitaron el museo ayer. (Incorrecto)",
              "Los alumnos de primero de secundaria visitaron el museo ayer. (Correcto)",
              "Ayer, los alumnos de primero visitaron el museo. (Correcto)",
              "Visitaron el museo ayer los alumnos de primero. (Correcto)"
            ],
            correctAnswer: "Los alumnos de primero de secundaria, visitaron el museo ayer. (Incorrecto)",
            explanation: "La RAE prohíbe taxativamente colocar coma entre el sujeto ('Los alumnos...') y el verbo principal ('visitaron') aunque en la lectura oral se haga una pausa."
          },
          {
            id: "es-u5-l2-q15",
            type: "multiple_choice",
            prompt: "Un conjunto de palabras de distinta categoría gramatical que comparten la misma raíz o lexema (como flor, florista, florecer, florero) forman una:",
            options: ["Familia de palabras o familia léxica.", "Campo semántico.", "Oración compuesta copulativa.", "Rima asonante."],
            correctAnswer: "Familia de palabras o familia léxica.",
            explanation: "La familia léxica agrupa todos los vocablos derivados y compuestos que provienen de una misma raíz común."
          },
          {
            id: "es-u5-l2-q16",
            type: "matching",
            prompt: "Diferencia una familia léxica de un campo semántico:",
            pairs: [
              { native: "Pan, panadero, panadería, empanar", english: "Familia léxica (misma raíz 'pan-')", left: "Pan, panadero, panadería, empanar", right: "Familia léxica (misma raíz 'pan-')" },
              { native: "Fútbol, baloncesto, tenis, natación", english: "Campo semántico (deportes, misma categoría)", left: "Fútbol, baloncesto, tenis, natación", right: "Campo semántico (deportes, misma categoría)" },
              { native: "Médico, enfermero, hospital, jeringuilla", english: "Campo asociativo de la sanidad", left: "Médico, enfermero, hospital, jeringuilla", right: "Campo asociativo de la sanidad" },
              { native: "Casa, casita, casona, casero", english: "Familia léxica (misma raíz 'cas-')", left: "Casa, casita, casona, casero", right: "Familia léxica (misma raíz 'cas-')" }
            ]
          },
          {
            id: "es-u5-l2-q17",
            type: "fill_blank",
            sentence: "Las palabras formadas simultáneamente por composición y derivación o por prefijación y sufijación sin que exista la forma intermedia (como 'quinceañero' o 'envejecer') se llaman ___.",
            missingWord: "parasintéticas",
            options: ["parasintéticas", "simples", "primitivas", "invariables"],
            correctAnswer: "parasintéticas",
            explanation: "La parasíntesis combina prefijo + raíz + sufijo de manera indisociable (no existe *enveje ni *vejecer)."
          },
          {
            id: "es-u5-l2-q18",
            type: "scramble",
            prompt: "Ordena los elementos para formular la regla del sufijo adverbial '-mente':",
            tokens: ["Se", "añade", "a", "la", "forma", "femenina", "del", "adjetivo."],
            correctTokens: ["Se", "añade", "a", "la", "forma", "femenina", "del", "adjetivo."],
            explanation: "Los adverbios en '-mente' se forman sobre la forma femenina del adjetivo (rápida -> rápidamente) conservando su tilde original."
          },
          {
            id: "es-u5-l2-q19",
            type: "multiple_choice",
            prompt: "¿Cuál es la puntuación correcta para introducir una cita textual literal en español?",
            options: [
              "Dos puntos y comillas dobles: El profesor dijo: 'Abrid el libro en la página doce'.",
              "Paréntesis y punto y coma.",
              "Signos de interrogación inversos únicamente.",
              "Puntos suspensivos sin comillas."
            ],
            correctAnswer: "Dos puntos y comillas dobles: El profesor dijo: 'Abrid el libro en la página doce'.",
            explanation: "Las citas textuales se anuncian con dos puntos y se encierran entre comillas latinas (« ») o inglesas (\" \")."
          },
          {
            id: "es-u5-l2-q20",
            type: "audio_listen",
            phrase: "Hablar bien no significa usar palabras difíciles, sino expresar ideas claras con respeto y precisión.",
            prompt: "¿Cuál es el mensaje cívico y lingüístico que concluye el currículo de Lengua Castellana y Literatura?",
            options: [
              "La verdadera competencia comunicativa une la claridad de pensamiento con el respeto cívico y la convivencia democrática.",
              "Hay que memorizar diccionarios enteros para hablar con pedantería.",
              "El lenguaje sirve para engañar a los demás en las asambleas.",
              "No debemos hablar nunca en público."
            ],
            correctAnswer: "La verdadera competencia comunicativa une la claridad de pensamiento con el respeto cívico y la convivencia democrática.",
            explanation: "El fin último de la LOMLOE en Lengua Castellana es formar ciudadanos libres, críticos y tolerantes capaces de convivir con la palabra."
          }
        ]
      }
    ]
  }
];
