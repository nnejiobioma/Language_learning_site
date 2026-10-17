// =========================================================================
// MCER / ELE Spanish Curriculum — Instituto Cervantes Aligned
// Block 3: 🟠 Nivel B1: Umbral (Intermedio) — Units 9 to 12
// 2 Lessons per Unit • 10 Questions per Lesson = 80 Questions Total
// =========================================================================

export const spanishB1Units = [
  // =========================================================================
  // Unit 9: Experiencias y Recuerdos (Experiences and Memories)
  // =========================================================================
  {
    id: "es-unit-9",
    unitId: "es-unit-9",
    unitNumber: 9,
    level: "Nivel B1: Umbral (Intermedio)",
    title: "Unidad 9: Experiencias y Recuerdos (Experiences and Memories)",
    subtitle: "Pretérito Pluscuamperfecto, relatos autobiográficos y combinación avanzada de tiempos del pasado.",
    icon: "BookOpen",
    color: "#f97316",
    lessons: [
      {
        id: "es-u9-l1",
        title: "Lección 1: Pretérito Pluscuamperfecto (Había + Participio)",
        description: "Aprende a estructurar acciones anteriores a otro hecho pasado con el Pretérito Pluscuamperfecto y domina los participios irregulares.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u9-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cómo se compone el Pretérito Pluscuamperfecto de indicativo?",
            options: [
              "Haber en imperfecto (había, habías...) + participio invariable",
              "Haber en presente (he, has...) + participio",
              "Haber en indefinido (hube, hubiste...) + participio",
              "Verbo tener + infinitivo"
            ],
            correctAnswer: "Haber en imperfecto (había, habías...) + participio invariable",
            explanation: "El pluscuamperfecto se forma con el auxiliar 'haber' en pretérito imperfecto más el participio pasado (-ado/-ido)."
          },
          {
            id: "es-u9-l1-q2",
            type: "fill_blank",
            sentence: "Cuando llegamos a la estación, el tren ya ___ salido.",
            missingWord: "había",
            options: ["había", "ha", "hubo", "habría"],
            correctAnswer: "había",
            explanation: "Acción anterior a otra acción pasada ('llegamos'): pluscuamperfecto 'había salido'."
          },
          {
            id: "es-u9-l1-q3",
            type: "scramble",
            prompt: "Ordena las palabras para expresar una acción anterior a un hecho pasado:",
            tokens: ["Nunca", "había", "visto", "un", "paisaje", "tan", "hermoso."],
            correctTokens: ["Nunca", "había", "visto", "un", "paisaje", "tan", "hermoso."],
            explanation: "Estructura correcta: 'Nunca había visto...' indicando experiencia previa inédita."
          },
          {
            id: "es-u9-l1-q4",
            type: "matching",
            prompt: "Empareja los tiempos verbales del pasado con su función narrativa:",
            pairs: [
              { native: "Pretérito Indefinido", english: "Past simple / Main storyline", left: "Pretérito Indefinido", right: "Acciones puntuales que avanzan la trama" },
              { native: "Pretérito Imperfecto", english: "Past continuous / Background description", left: "Pretérito Imperfecto", right: "Descripciones, causas y hábitos de fondo" },
              { native: "Pretérito Pluscuamperfecto", english: "Past perfect / Anterior to another past", left: "Pluscuamperfecto", right: "Acción anterior a otro momento del pasado" },
              { native: "Pretérito Perfecto Compuesto", english: "Present perfect / Open time frame", left: "Perfecto Compuesto", right: "Acciones conectadas con el presente (hoy, esta semana)" }
            ]
          },
          {
            id: "es-u9-l1-q5",
            type: "multiple_choice",
            prompt: "¿Cuál es el participio irregular del verbo 'escribir'?",
            options: ["Escrito", "Escribido", "Escribiente", "Escriturado"],
            correctAnswer: "Escrito",
            explanation: "'Escribir' tiene participio irregular: 'escrito'."
          },
          {
            id: "es-u9-l1-q6",
            type: "matching",
            prompt: "Empareja los participios irregulares con su infinitivo:",
            pairs: [
              { native: "Abrir", english: "To open", left: "Abrir", right: "Abierto" },
              { native: "Romper", english: "To break", left: "Romper", right: "Roto" },
              { native: "Volver", english: "To return", left: "Volver", right: "Vuelto" },
              { native: "Morir", english: "To die", left: "Morir", right: "Muerto" }
            ]
          },
          {
            id: "es-u9-l1-q7",
            type: "fill_blank",
            sentence: "Antes de mudarse a Madrid, Laura ya ___ vivido tres años en Bogotá.",
            missingWord: "había",
            options: ["había", "hubo", "ha", "habría"],
            correctAnswer: "había",
            explanation: "Experiencia anterior a la mudanza: 'había vivido'."
          },
          {
            id: "es-u9-l1-q8",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma del pluscuamperfecto de 'decir' para 'Nosotros'?",
            options: ["Habíamos dicho", "Hemos dicho", "Hubiéramos dicho", "Habríamos dicho"],
            correctAnswer: "Habíamos dicho",
            explanation: "Conjunción: 'habíamos' + participio irregular 'dicho'."
          },
          {
            id: "es-u9-l1-q9",
            type: "fill_blank",
            sentence: "No pude comprar la entrada porque ya se ___ agotado.",
            missingWord: "habían",
            options: ["habían", "había", "hubieron", "han"],
            correctAnswer: "habían",
            explanation: "El sujeto 'las entradas' es plural, por lo que el verbo auxiliar concuerda: 'se habían agotado'."
          },
          {
            id: "es-u9-l1-q10",
            type: "multiple_choice",
            prompt: "¿Por qué es erróneo decir: 'Cuando llegué, ellos habían salidos'?",
            options: [
              "Porque el participio en los tiempos compuestos en español es invariable (termina en -o)",
              "Porque falta la 'a'",
              "Porque se debe usar gerundio",
              "Porque 'llegué' debe ser futuro"
            ],
            correctAnswer: "Porque el participio en los tiempos compuestos en español es invariable (termina en -o)",
            explanation: "En español, a diferencia de otras lenguas romances, el participio compuesto nunca concuerda en género ni número con el sujeto u objeto."
          }
        ]
      },
      {
        id: "es-u9-l2",
        title: "Lección 2: Relatos Autobiográficos y Combinación Avanzada del Pasado",
        description: "Aprende a narrar memorias complejas, marcar hitos biográficos y alternar con precisión los cuatro tiempos del pasado.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u9-l2-q1",
            type: "multiple_choice",
            prompt: "En un relato autobiográfico, ¿qué conector temporal marca un cambio de rumbo?",
            options: ["A partir de aquel momento", "Mientras tanto", "Todos los días", "Al principio de todo"],
            correctAnswer: "A partir de aquel momento",
            explanation: "'A partir de aquel momento' introduce un punto de inflexión en la cronología biográfica."
          },
          {
            id: "es-u9-l2-q2",
            type: "scramble",
            prompt: "Ordena las palabras para relatar una anécdota imprevista:",
            tokens: ["Cuando", "abrí", "la", "maleta,", "me", "di", "cuenta", "del", "error."],
            correctTokens: ["Cuando", "abrí", "la", "maleta,", "me", "di", "cuenta", "del", "error."],
            explanation: "Locución verbal 'darse cuenta de': percatarse de algo."
          },
          {
            id: "es-u9-l2-q3",
            type: "audio_listen",
            prompt: "Escucha el testimonio del autor y selecciona su profesión en el pasado:",
            audioText: "Antes de publicar mi primera novela, yo ya había trabajado durante una década como periodista de investigación.",
            options: ["Periodista de investigación", "Piloto de aviación", "Profesor de música", "Médico cirujano"],
            correctAnswer: "Periodista de investigación",
            explanation: "El autor declara: 'yo ya había trabajado durante una década como periodista de investigación'."
          },
          {
            id: "es-u9-l2-q4",
            type: "matching",
            prompt: "Empareja los marcadores de correlación temporal:",
            pairs: [
              { native: "Ya", english: "Already (completed before)", left: "Ya", right: "Indica acción consumada con anterioridad" },
              { native: "Todavía no / Aún no", english: "Not yet", left: "Todavía no", right: "Indica acción pendiente en ese punto" },
              { native: "Al cabo de unos años", english: "After a few years", left: "Al cabo de", right: "Transcurso de un período posterior" },
              { native: "Poco antes de", english: "Shortly before", left: "Poco antes de", right: "Inmediata anterioridad" }
            ]
          },
          {
            id: "es-u9-l2-q5",
            type: "multiple_choice",
            prompt: "¿Qué matiz aporta 'Ya lo sabía' frente a 'Lo supe ayer'?",
            options: [
              "'Ya lo sabía' expresa conocimiento continuo previo; 'Lo supe ayer' el momento exacto en que me enteré",
              "Ambas significan exactamente lo mismo",
              "'Ya lo sabía' es una orden",
              "'Lo supe ayer' se refiere al futuro"
            ],
            correctAnswer: "'Ya lo sabía' expresa conocimiento continuo previo; 'Lo supe ayer' el momento exacto en que me enteré",
            explanation: "Saber en imperfecto denota estado mental mantenido; en indefinido significa 'enterarse' o adquirir la información."
          },
          {
            id: "es-u9-l2-q6",
            type: "scramble",
            prompt: "Ordena las palabras para estructurar un relato autobiográfico:",
            tokens: ["A", "los", "veinte", "años", "decidió", "emigrar", "a", "Canadá."],
            correctTokens: ["A", "los", "veinte", "años", "decidió", "emigrar", "a", "Canadá."],
            explanation: "Estructura canónica de biografía: 'A los [edad] + verbo en indefinido'."
          },
          {
            id: "es-u9-l2-q7",
            type: "fill_blank",
            sentence: "¿Ustedes ya ___ leído esta novela de realismo mágico?",
            missingWord: "habían",
            options: ["habían", "habíais", "han", "habrás"],
            correctAnswer: "habían",
            explanation: "Sujeto formal plural 'ustedes habían leído'."
          },
          {
            id: "es-u9-l2-q8",
            type: "multiple_choice",
            prompt: "¿Cuál es el participio irregular de 'resolver'?",
            options: ["Resuelto", "Resolvido", "Resoluto", "Resolvente"],
            correctAnswer: "Resuelto",
            explanation: "El participio irregular de resolver es 'resuelto'."
          },
          {
            id: "es-u9-l2-q9",
            type: "matching",
            prompt: "Empareja los hitos biográficos con el vocabulario correspondiente:",
            pairs: [
              { native: "Licenciarse / Graduarse", english: "To graduate university", left: "Terminar los estudios", right: "Graduarse / Licenciarse" },
              { native: "Jubilarse", english: "To retire from workforce", left: "Dejar de trabajar por vejez", right: "Jubilarse" },
              { native: "Fundar una empresa", english: "To establish a business", left: "Crear una sociedad o negocio", right: "Fundar o emprender" },
              { native: "Conseguir un galardón", english: "To win an award", left: "Obtener un premio", right: "Ser galardonado" }
            ]
          },
          {
            id: "es-u9-l2-q10",
            type: "scramble",
            prompt: "Ordena las palabras para expresar una preparación completada antes de viajar:",
            tokens: ["Nosotros", "ya", "habíamos", "preparado", "todo", "el", "equipaje."],
            correctTokens: ["Nosotros", "ya", "habíamos", "preparado", "todo", "el", "equipaje."],
            explanation: "Uso del adverbio 'ya' intercalado o previo al pluscuamperfecto."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 10: Opiniones y Debates (Opinions and Debates)
  // =========================================================================
  {
    id: "es-unit-10",
    unitId: "es-unit-10",
    unitNumber: 10,
    level: "Nivel B1: Umbral (Intermedio)",
    title: "Unidad 10: Opiniones y Debates (Opinions and Debates)",
    subtitle: "Introducción al Presente de Subjuntivo, expresión de certeza, duda y discrepancia.",
    icon: "MessageSquare",
    color: "#f97316",
    lessons: [
      {
        id: "es-u10-l1",
        title: "Lección 1: Presente de Subjuntivo para Opinión y Certeza",
        description: "Aprende cuándo usar indicativo (creo que, pienso que) y cuándo se activa el subjuntivo (no creo que, dudo que) en la expresión de opiniones.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u10-l1-q1",
            type: "multiple_choice",
            prompt: "¿Qué modo verbal exige la matriz afirmativa 'Creo que...'?",
            options: ["Indicativo", "Subjuntivo", "Imperativo", "Condicional obligatorio"],
            correctAnswer: "Indicativo",
            explanation: "Las matrices de pensamiento o afirmación en afirmativo (creo que, pienso que, opino que) rigen indicativo."
          },
          {
            id: "es-u10-l1-q2",
            type: "multiple_choice",
            prompt: "¿Qué modo verbal exige la matriz negativa 'No creo que...'?",
            options: ["Subjuntivo", "Indicativo", "Infinitivo solo", "Futuro de indicativo"],
            correctAnswer: "Subjuntivo",
            explanation: "La negación de verbos de entendimiento u opinión (no creo que, no pienso que) introduce duda sobre la realidad y exige subjuntivo."
          },
          {
            id: "es-u10-l1-q3",
            type: "fill_blank",
            sentence: "No creo que Juan ___ razón en esta discusión.",
            missingWord: "tenga",
            options: ["tenga", "tiene", "tendrá", "tenía"],
            correctAnswer: "tenga",
            explanation: "Con 'No creo que' se usa el presente de subjuntivo: 'tenga'."
          },
          {
            id: "es-u10-l1-q4",
            type: "matching",
            prompt: "Empareja las matrices con el modo que seleccionan:",
            pairs: [
              { native: "Pienso que...", english: "I think that... -> Indicativo", left: "Pienso que...", right: "Indicativo (certeza / afirmación)" },
              { native: "No pienso que...", english: "I don't think that... -> Subjuntivo", left: "No pienso que...", right: "Subjuntivo (negación de opinión)" },
              { native: "Es verdad que...", english: "It is true that... -> Indicativo", left: "Es verdad que...", right: "Indicativo (hecho constatado)" },
              { native: "No es verdad que...", english: "It's not true that... -> Subjuntivo", left: "No es verdad que...", right: "Subjuntivo (falsedad o duda)" }
            ]
          },
          {
            id: "es-u10-l1-q5",
            type: "multiple_choice",
            prompt: "¿Cómo se conjuga el presente de subjuntivo de los verbos en -AR (ej. hablar)?",
            options: [
              "Con la vocal temática contraria -E (hable, hables, hable, hablemos, habléis, hablen)",
              "Con la vocal temática -A (hablo, hablas, habla)",
              "Con la desinencia -IR",
              "Igual que el pretérito indefinido"
            ],
            correctAnswer: "Con la vocal temática contraria -E (hable, hables, hable, hablemos, habléis, hablen)",
            explanation: "En subjuntivo los verbos en -ar adoptan la vocal temática contraria (-e-), y los verbos en -er/-ir adoptan (-a-)."
          },
          {
            id: "es-u10-l1-q6",
            type: "fill_blank",
            sentence: "Dudo mucho que el proyecto se ___ a tiempo.",
            missingWord: "termine",
            options: ["termine", "termina", "terminó", "terminará"],
            correctAnswer: "termine",
            explanation: "El verbo 'dudar que' expresa incertidumbre y siempre rige subjuntivo ('termine')."
          },
          {
            id: "es-u10-l1-q7",
            type: "matching",
            prompt: "Empareja los verbos irregulares con su primera persona de presente de subjuntivo:",
            pairs: [
              { native: "Ser", english: "To be", left: "Ser", right: "sea" },
              { native: "Ir", english: "To go", left: "Ir", right: "vaya" },
              { native: "Saber", english: "To know", left: "Saber", right: "sepa" },
              { native: "Haber", english: "There to be", left: "Haber", right: "haya" }
            ]
          },
          {
            id: "es-u10-l1-q8",
            type: "multiple_choice",
            prompt: "¿Cuál es el presente de subjuntivo de 'tener' para 'nosotros'?",
            options: ["Tengamos", "Tenemos", "Teniéramos", "Tengáis"],
            correctAnswer: "Tengamos",
            explanation: "A partir de la 1ª persona del presente (yo tengo) se forma el subjuntivo: teng- + amos = 'tengamos'."
          },
          {
            id: "es-u10-l1-q9",
            type: "fill_blank",
            sentence: "No está claro que esa política económica ___ eficaz.",
            missingWord: "sea",
            options: ["sea", "es", "fue", "será"],
            correctAnswer: "sea",
            explanation: "'No está claro que' niega la evidencia y por tanto rige subjuntivo ('sea')."
          },
          {
            id: "es-u10-l1-q10",
            type: "fill_blank",
            sentence: "A mí me parece que la medida ___ justa para todos.",
            missingWord: "es",
            options: ["es", "sea", "fuera", "sería"],
            correctAnswer: "es",
            explanation: "'Me parece que...' es afirmativo y rige indicativo ('es')."
          }
        ]
      },
      {
        id: "es-u10-l2",
        title: "Lección 2: Conectores Dialécticos, Duda y Argumentación en Debates",
        description: "Domina el arte de debatir con elegancia: matizar posturas, usar conectores adversativos (sin embargo, no obstante) y expresar duda (quizás).",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u10-l2-q1",
            type: "scramble",
            prompt: "Ordena las palabras para manifestar un desacuerdo cortés en un debate:",
            tokens: ["Entiendo", "tu", "postura,", "pero", "no", "la", "comparto."],
            correctTokens: ["Entiendo", "tu", "postura,", "pero", "no", "la", "comparto."],
            explanation: "Fórmula de cortesía dialéctica: reconocer el punto del interlocutor y formular la discrepancia."
          },
          {
            id: "es-u10-l2-q2",
            type: "scramble",
            prompt: "Ordena las palabras para defender una opinión fundamentada:",
            tokens: ["Desde", "mi", "punto", "de", "vista,", "debemos", "proteger", "el", "empleo."],
            correctTokens: ["Desde", "mi", "punto", "de", "vista,", "debemos", "proteger", "el", "empleo."],
            explanation: "Conector de punto de vista: 'Desde mi punto de vista' + proposición principal."
          },
          {
            id: "es-u10-l2-q3",
            type: "audio_listen",
            prompt: "Escucha el fragmento del debate y determina la postura del ponente:",
            audioText: "Es innegable que las nuevas tecnologías han transformado positivamente la educación moderna.",
            options: ["Está totalmente a favor del impacto positivo", "Rechaza el uso de pantallas en clase", "Niega que la tecnología exista", "Prefiere no opinar"],
            correctAnswer: "Está totalmente a favor del impacto positivo",
            explanation: "La expresión 'Es innegable que...' (con indicativo) constata un hecho favorable sin ninguna duda."
          },
          {
            id: "es-u10-l2-q4",
            type: "multiple_choice",
            prompt: "¿Qué conector argumentativo se utiliza para refutar una objeción?",
            options: ["Sin embargo / No obstante", "Además", "En primer lugar", "Por ejemplo"],
            correctAnswer: "Sin embargo / No obstante",
            explanation: "'Sin embargo' y 'no obstante' son conectores contraargumentativos o adversativos."
          },
          {
            id: "es-u10-l2-q5",
            type: "matching",
            prompt: "Empareja los conectores con su función en el discurso argumentativo:",
            pairs: [
              { native: "Por un lado... por otro lado", english: "On the one hand... on the other hand", left: "Por un lado / por otro", right: "Presentar dos perspectivas contrastadas" },
              { native: "En conclusión / En definitiva", english: "In conclusion", left: "En conclusión", right: "Cierre o síntesis final" },
              { native: "Asimismo / Además", english: "Likewise / Furthermore", left: "Asimismo", right: "Añadir nuevos argumentos acumulativos" },
              { native: "En efecto", english: "Indeed / In fact", left: "En efecto", right: "Confirmar una afirmación previa" }
            ]
          },
          {
            id: "es-u10-l2-q6",
            type: "scramble",
            prompt: "Ordena las palabras para formular una duda con 'quizás':",
            tokens: ["Quizás", "haya", "otra", "solución", "para", "este", "problema."],
            correctTokens: ["Quizás", "haya", "otra", "solución", "para", "este", "problema."],
            explanation: "Los adverbios de duda (quizás, tal vez) admiten subjuntivo cuando el hablante siente incertidumbre."
          },
          {
            id: "es-u10-l2-q7",
            type: "multiple_choice",
            prompt: "¿Cuál es el presente de subjuntivo de 'poner' para 'él'?",
            options: ["Ponga", "Pone", "Pondrá", "Pusiera"],
            correctAnswer: "Ponga",
            explanation: "La raíz de 1ª persona 'pong-' produce 'él ponga'."
          },
          {
            id: "es-u10-l2-q8",
            type: "multiple_choice",
            prompt: "Si en una pregunta te dicen: '¿Crees que lloverá mañana?', ¿cuál es una respuesta que utiliza correctamente el subjuntivo?",
            options: [
              "No creo que llueva.",
              "Sí, creo que llueva.",
              "Pienso que llueva mucho.",
              "Es seguro que llueva."
            ],
            correctAnswer: "No creo que llueva.",
            explanation: "Solo la negación de 'creer' activa el subjuntivo: 'No creo que llueva'."
          },
          {
            id: "es-u10-l2-q9",
            type: "scramble",
            prompt: "Ordena los elementos para expresar acuerdo parcial:",
            tokens: ["Estoy", "de", "acuerdo", "en", "parte", "con", "tu", "argumento."],
            correctTokens: ["Estoy", "de", "acuerdo", "en", "parte", "con", "tu", "argumento."],
            explanation: "Fórmula de matiz: 'Estar de acuerdo en parte con...'."
          },
          {
            id: "es-u10-l2-q10",
            type: "matching",
            prompt: "Empareja las frases de debate con su grado de certidumbre:",
            pairs: [
              { native: "Estoy convencido de que...", english: "Total certainty -> Indicativo", left: "Estoy convencido de que", right: "Certeza absoluta (indicativo)" },
              { native: "No estoy seguro de que...", english: "Uncertainty -> Subjuntivo", left: "No estoy seguro de que", right: "Incertidumbre (subjuntivo)" },
              { native: "Es evidente que...", english: "Obvious evidence -> Indicativo", left: "Es evidente que", right: "Evidencia manifiesta (indicativo)" },
              { native: "Es poco probable que...", english: "Low probability -> Subjuntivo", left: "Es poco probable que", right: "Baja probabilidad (subjuntivo)" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 11: Deseos y Emociones (Wishes and Emotions)
  // =========================================================================
  {
    id: "es-unit-11",
    unitId: "es-unit-11",
    unitNumber: 11,
    level: "Nivel B1: Umbral (Intermedio)",
    title: "Unidad 11: Deseos y Emociones (Wishes and Emotions)",
    subtitle: "Presente de Subjuntivo con verbos de voluntad, influencia, sentimiento y felicitaciones.",
    icon: "Smile",
    color: "#f97316",
    lessons: [
      {
        id: "es-u11-l1",
        title: "Lección 1: Verbos de Voluntad, Influencia y Subjuntivo",
        description: "Aprende la regla de cambio de sujeto con verbos de influencia y deseo (quiero que estudies vs quiero estudiar; te pido que escuches).",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u11-l1-q1",
            type: "multiple_choice",
            prompt: "Cuando el sujeto de la oración principal y el de la subordinada son DIFERENTES con verbos de deseo (ej. querer), ¿qué estructura se usa?",
            options: [
              "Verbo de deseo + que + Subjuntivo (Quiero que vengas)",
              "Verbo de deseo + Infinitivo (Quiero venir)",
              "Verbo de deseo + Indicativo (Quiero que vienes)",
              "Verbo de deseo + Gerundio (Quiero viniendo)"
            ],
            correctAnswer: "Verbo de deseo + que + Subjuntivo (Quiero que vengas)",
            explanation: "Cuando hay cambio de sujeto (Yo quiero / Tú vienes), se conecta obligatoriamente con 'que + subjuntivo'."
          },
          {
            id: "es-u11-l1-q2",
            type: "fill_blank",
            sentence: "Mis padres quieren que yo ___ medicina.",
            missingWord: "estudie",
            options: ["estudie", "estudio", "estudiar", "estudié"],
            correctAnswer: "estudie",
            explanation: "Sujetos distintos (mis padres / yo) rige presente de subjuntivo: 'estudie'."
          },
          {
            id: "es-u11-l1-q3",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma correcta si los dos sujetos son IDÉNTICOS: 'Yo quiero (yo) ir al concierto'?",
            options: [
              "Quiero ir al concierto (Infinitivo)",
              "Quiero que vaya al concierto",
              "Quiero que voy al concierto",
              "Quiero yendo al concierto"
            ],
            correctAnswer: "Quiero ir al concierto (Infinitivo)",
            explanation: "Con correferencia de sujetos (el mismo sujeto realiza ambas acciones), se emplea infinitivo directamente sin 'que'."
          },
          {
            id: "es-u11-l1-q4",
            type: "multiple_choice",
            prompt: "¿Cuál es el presente de subjuntivo de 'pedir' para 'tú'?",
            options: ["Pidas", "Pedes", "Pides", "Pidiéres"],
            correctAnswer: "Pidas",
            explanation: "El verbo de cambio vocálico pedir (e -> i) mantiene el cambio en subjuntivo: 'pidas'."
          },
          {
            id: "es-u11-l1-q5",
            type: "fill_blank",
            sentence: "Te aconsejo que ___ con calma antes de tomar una decisión.",
            missingWord: "pienses",
            options: ["pienses", "piensas", "pensar", "pensaste"],
            correctAnswer: "pienses",
            explanation: "Verbo de influencia ('aconsejar que') rige subjuntivo: 'pienses'."
          },
          {
            id: "es-u11-l1-q6",
            type: "fill_blank",
            sentence: "El profesor nos exige que ___ puntuales a clase.",
            missingWord: "seamos",
            options: ["seamos", "somos", "seremos", "siendo"],
            correctAnswer: "seamos",
            explanation: "Verbo de mandato/exigencia ('exigir que') + subjuntivo de ser para nosotros: 'seamos'."
          },
          {
            id: "es-u11-l1-q7",
            type: "matching",
            prompt: "Empareja los verbos de influencia con su significado:",
            pairs: [
              { native: "Prohibir que...", english: "To forbid that... (+ subj)", left: "Prohibir que", right: "Impedir una acción por norma" },
              { native: "Recomendar que...", english: "To recommend that... (+ subj)", left: "Recomendar que", right: "Sugerir una opción favorable" },
              { native: "Permitir que...", english: "To allow that... (+ subj)", left: "Permitir que", right: "Autorizar una acción" },
              { native: "Rogar que...", english: "To plead that... (+ subj)", left: "Rogar que", right: "Pedir con vehemencia o súplica" }
            ]
          },
          {
            id: "es-u11-l1-q8",
            type: "multiple_choice",
            prompt: "¿Cuál es el presente de subjuntivo de 'dormir' para 'nosotros'?",
            options: ["Durmamos", "Dormamos", "Duermamos", "Durmemos"],
            correctAnswer: "Durmamos",
            explanation: "Los verbos en -ir con diptongación (o -> ue) hacen cambio a 'u' en la 1ª persona plural de subjuntivo: 'durmamos'."
          },
          {
            id: "es-u11-l1-q9",
            type: "multiple_choice",
            prompt: "Identifica la opción gramaticalmente correcta:",
            options: [
              "Te pido que me escuches atentamente.",
              "Te pido que me escuchas atentamente.",
              "Te pido me escuchar atentamente.",
              "Te pido que me escucharás atentamente."
            ],
            correctAnswer: "Te pido que me escuches atentamente.",
            explanation: "Petición a otro interlocutor: 'pedir que + presente de subjuntivo (escuches)'."
          },
          {
            id: "es-u11-l1-q10",
            type: "matching",
            prompt: "Empareja los desencadenantes de emoción con su régimen:",
            pairs: [
              { native: "Me alegro de que...", english: "I am glad that... (+ subjuntivo)", left: "Me alegro de que", right: "Alegría (+ subjuntivo)" },
              { native: "Siento mucho que...", english: "I am very sorry that... (+ subjuntivo)", left: "Siento mucho que", right: "Lamento / Tristeza (+ subjuntivo)" },
              { native: "Me da miedo que...", english: "It scares me that... (+ subjuntivo)", left: "Me da miedo que", right: "Temor (+ subjuntivo)" },
              { native: "Me molesta que...", english: "It bothers me that... (+ subjuntivo)", left: "Me molesta que", right: "Enfado / Irritación (+ subjuntivo)" }
            ]
          }
        ]
      },
      {
        id: "es-u11-l2",
        title: "Lección 2: Reacciones Emocionales, Ojalá y Fórmulas Sociales de Felicitación",
        description: "Aprende a desear buenos augurios, redactar tarjetas de felicitación y usar 'ojalá' y las estructuras elípticas de deseo ('¡Que te mejores!').",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u11-l2-q1",
            type: "scramble",
            prompt: "Ordena las palabras para felicitar a alguien por un nuevo empleo:",
            tokens: ["¡Te", "deseo", "mucho", "éxito", "en", "tu", "nuevo", "trabajo!"],
            correctTokens: ["¡Te", "deseo", "mucho", "éxito", "en", "tu", "nuevo", "trabajo!"],
            explanation: "Fórmula de felicitación y buenos augurios: 'Te deseo + sustantivo'."
          },
          {
            id: "es-u11-l2-q2",
            type: "multiple_choice",
            prompt: "¿Qué fórmula se utiliza en español para brindar en celebraciones?",
            options: ["¡Salud! / ¡Por nosotros!", "¡Buen provecho!", "¡Buen viaje!", "¡Enhorabuena!"],
            correctAnswer: "¡Salud! / ¡Por nosotros!",
            explanation: "'¡Salud!' es el brindis tradicional en todos los países de habla hispana."
          },
          {
            id: "es-u11-l2-q3",
            type: "fill_blank",
            sentence: "Me alegro mucho de que te ___ bien en el examen.",
            missingWord: "vaya",
            options: ["vaya", "va", "fue", "yendo"],
            correctAnswer: "vaya",
            explanation: "Verbo de sentimiento ('alegrarse de que') con dos sujetos diferentes rige subjuntivo ('vaya')."
          },
          {
            id: "es-u11-l2-q4",
            type: "scramble",
            prompt: "Ordena los elementos para desear una pronta recuperación:",
            tokens: ["¡Espero", "que", "te", "mejores", "muy", "pronto!"],
            correctTokens: ["¡Espero", "que", "te", "mejores", "muy", "pronto!"],
            explanation: "Fórmula de empatía y salud: 'Espero que te mejores pronto'."
          },
          {
            id: "es-u11-l2-q5",
            type: "audio_listen",
            prompt: "Escucha el mensaje de la tarjeta de felicitación e identifica la ocasión:",
            audioText: "¡Feliz cumpleaños, amiga querida! Que todos tus sueños se cumplan en este nuevo año de vida.",
            options: ["Cumpleaños", "Boda", "Graduación", "Navidad"],
            correctAnswer: "Cumpleaños",
            explanation: "El mensaje dice explícitamente: '¡Feliz cumpleaños, amiga querida!'."
          },
          {
            id: "es-u11-l2-q6",
            type: "fill_blank",
            sentence: "¡Ojalá ___ mañana para ir a esquiar a la sierra!",
            missingWord: "nieve",
            options: ["nieve", "nieva", "nevar", "nevará"],
            correctAnswer: "nieve",
            explanation: "'Ojalá' (del árabe law sha' Allah) siempre va seguido de subjuntivo para expresar un deseo."
          },
          {
            id: "es-u11-l2-q7",
            type: "matching",
            prompt: "Empareja las fórmulas sociales de cortesía con su contexto:",
            pairs: [
              { native: "¡Que tengas buen viaje!", english: "Have a good trip! (departure)", left: "Antes de salir de viaje", right: "¡Que tengas buen viaje!" },
              { native: "¡Que aproveche! / ¡Buen provecho!", english: "Bon appétit! (before eating)", left: "Antes de comer", right: "¡Que aproveche!" },
              { native: "¡Enhorabuena por tu boda!", english: "Congratulations on wedding!", left: "Celebración nupcial", right: "¡Enhorabuena / Felicidades!" },
              { native: "Mi más sentido pésame", english: "My deepest condolences (funeral)", left: "Duelo o fallecimiento", right: "Mi más sentido pésame" }
            ]
          },
          {
            id: "es-u11-l2-q8",
            type: "scramble",
            prompt: "Ordena las palabras para redactar un deseo elíptico con 'Que':",
            tokens: ["¡Que", "pases", "un", "estupendo", "fin", "de", "semana!"],
            correctTokens: ["¡Que", "pases", "un", "estupendo", "fin", "de", "semana!"],
            explanation: "Estructura elíptica independiente de deseo: 'Que + subjuntivo' (omite 'deseo que')."
          },
          {
            id: "es-u11-l2-q9",
            type: "multiple_choice",
            prompt: "¿Qué expresa la frase: 'Me sorprende que todavía no haya llegado el paquete'?",
            options: [
              "Extrañeza o asombro ante una situación inesperada",
              "Una orden militar estricta",
              "Una certeza del pasado",
              "Un plan de compras para mañana"
            ],
            correctAnswer: "Extrañeza o asombro ante una situación inesperada",
            explanation: "'Me sorprende que...' es una matriz de reacción emocional y asombro que rige subjuntivo."
          },
          {
            id: "es-u11-l2-q10",
            type: "scramble",
            prompt: "Ordena las palabras para expresar alivio emocional:",
            tokens: ["Me", "tranquiliza", "que", "todo", "haya", "salido", "bien."],
            correctTokens: ["Me", "tranquiliza", "que", "todo", "haya", "salido", "bien."],
            explanation: "Emoción de serenidad: 'Me tranquiliza que...' + pretérito perfecto de subjuntivo."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 12: Hipótesis y Futuro (Hypothesis and Future)
  // =========================================================================
  {
    id: "es-unit-12",
    unitId: "es-unit-12",
    unitNumber: 12,
    level: "Nivel B1: Umbral (Intermedio)",
    title: "Unidad 12: Hipótesis y Futuro (Hypothesis and Future)",
    subtitle: "Condicional Simple, oraciones condicionales reales (si + presente) y pronóstico hipotético.",
    icon: "CloudRain",
    color: "#f97316",
    lessons: [
      {
        id: "es-u12-l1",
        title: "Lección 1: El Condicional Simple (Cortesía y Consejos)",
        description: "Aprende las desinencias regulares e irregulares del condicional simple y utilízalo para suavizar peticiones y dar consejos ('yo en tu lugar...').",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u12-l1-q1",
            type: "multiple_choice",
            prompt: "¿Cuáles son las terminaciones del Condicional Simple para todas las conjugaciones (-ar, -er, -ir)?",
            options: [
              "-ía, -ías, -ía, -íamos, -íais, -ían sobre el infinitivo completo",
              "-é, -ás, -á, -emos, -éis, -án",
              "-aba, -abas, -aba, -ábamos",
              "-ara, -aras, -ara, -áramos"
            ],
            correctAnswer: "-ía, -ías, -ía, -íamos, -íais, -ían sobre el infinitivo completo",
            explanation: "El condicional regular se forma añadiendo -ía, -ías, -ía, -íamos, -íais, -ían directamente al infinitivo completo."
          },
          {
            id: "es-u12-l1-q2",
            type: "scramble",
            prompt: "Ordena las palabras para pedir un favor con cortesía en condicional:",
            tokens: ["¿Podría", "usted", "ayudarme", "con", "esta", "maleta?"],
            correctTokens: ["¿Podría", "usted", "ayudarme", "con", "esta", "maleta?"],
            explanation: "El condicional de cortesía suaviza las peticiones formales: '¿Podría usted...?'."
          },
          {
            id: "es-u12-l1-q3",
            type: "matching",
            prompt: "Empareja los verbos irregulares con su raíz en futuro y condicional:",
            pairs: [
              { native: "Tener -> tendr-", english: "to have stem", left: "Tener", right: "tendr- (tendría)" },
              { native: "Poner -> pondr-", english: "to put stem", left: "Poner", right: "pondr- (pondría)" },
              { native: "Hacer -> har-", english: "to do / make stem", left: "Hacer", right: "har- (haría)" },
              { native: "Decir -> dir-", english: "to say stem", left: "Decir", right: "dir- (diría)" }
            ]
          },
          {
            id: "es-u12-l1-q4",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma del condicional simple de 'querer' para 'Yo'?",
            options: ["Querría", "Quería", "Querré", "Queriendo"],
            correctAnswer: "Querría",
            explanation: "El verbo 'querer' tiene raíz irregular con doble 'r': 'querría'."
          },
          {
            id: "es-u12-l1-q5",
            type: "fill_blank",
            sentence: "Yo en tu lugar ___ con el director inmediatamente.",
            missingWord: "hablaría",
            options: ["hablaría", "hablo", "hablé", "hablar"],
            correctAnswer: "hablaría",
            explanation: "Para dar consejos con la estructura 'Yo que tú...' o 'Yo en tu lugar...' se utiliza el condicional simple: 'hablaría'."
          },
          {
            id: "es-u12-l1-q6",
            type: "scramble",
            prompt: "Ordena las palabras para estructurar un consejo en condicional:",
            tokens: ["Yo", "en", "tu", "lugar", "descansaría", "este", "fin", "de", "semana."],
            correctTokens: ["Yo", "en", "tu", "lugar", "descansaría", "este", "fin", "de", "semana."],
            explanation: "Estructura de recomendación empática: 'Yo en tu lugar + condicional'."
          },
          {
            id: "es-u12-l1-q7",
            type: "multiple_choice",
            prompt: "¿Qué valor tiene el condicional en la frase: 'Serían las tres de la tarde cuando ocurrió'?",
            options: [
              "Probabilidad o aproximación en el pasado",
              "Una condición irrealizable",
              "Un mandato futuro",
              "Un saludo protocolario"
            ],
            correctAnswer: "Probabilidad o aproximación en el pasado",
            explanation: "El condicional simple se usa también para formular hipótesis o estimaciones sobre acontecimientos pasados."
          },
          {
            id: "es-u12-l1-q8",
            type: "matching",
            prompt: "Empareja los usos del Condicional Simple con su ejemplo representativo:",
            pairs: [
              { native: "Cortesía o atenuación", english: "Polite request", left: "¿Me pasaría la sal?", right: "Cortesía o atenuación" },
              { native: "Consejo personal", english: "Personal advice", left: "Deberías comer más fruta", right: "Consejo o sugerencia" },
              { native: "Hipótesis en el pasado", english: "Past probability", left: "Ayer tendría unos 40 años", right: "Estimación o probabilidad pasada" },
              { native: "Deseo o preferencia", english: "Wish / Preference", left: "Me encantaría viajar a Japón", right: "Expresión de deseo" }
            ]
          },
          {
            id: "es-u12-l1-q9",
            type: "fill_blank",
            sentence: "¿Usted ___ tan amable de explicarme este procedimiento?",
            missingWord: "sería",
            options: ["sería", "es", "era", "fuera"],
            correctAnswer: "sería",
            explanation: "Fórmula de máxima cortesía formal: '¿Sería tan amable de...?'."
          },
          {
            id: "es-u12-l1-q10",
            type: "multiple_choice",
            prompt: "¿Cuál es el condicional simple de 'saber' para 'Nosotros'?",
            options: ["Sabríamos", "Saberíamos", "Supiéramos", "Sabemos"],
            correctAnswer: "Sabríamos",
            explanation: "La raíz irregular es 'sabr-' + -íamos: 'sabríamos'."
          }
        ]
      },
      {
        id: "es-u12-l2",
        title: "Lección 2: Oraciones Condicionales Reales (Si + Presente) y Pronósticos",
        description: "Domina las estructuras de causa-efecto real ('Si estudias, aprobarás'), los pronósticos meteorológicos e hipótesis futuras.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u12-l2-q1",
            type: "fill_blank",
            sentence: "Si mañana hace buen tiempo, nosotros ___ a la playa.",
            missingWord: "iremos",
            options: ["iremos", "iríamos", "fuimos", "vayamos"],
            correctAnswer: "iremos",
            explanation: "En la condicional real (tipo 1): Si + presente de indicativo ('hace') -> futuro de indicativo ('iremos') o presente."
          },
          {
            id: "es-u12-l2-q2",
            type: "audio_listen",
            prompt: "Escucha el pronóstico meteorológico y selecciona la previsión climática:",
            audioText: "Si continúa bajando la temperatura esta noche, es muy probable que se produzcan heladas en la meseta central.",
            options: ["Heladas por el descenso de temperatura", "Ola de calor sofocante", "Cielos despejados y 35 grados", "Inundaciones tropicales"],
            correctAnswer: "Heladas por el descenso de temperatura",
            explanation: "El boletín advierte expresamente sobre la probabilidad de 'heladas en la meseta central'."
          },
          {
            id: "es-u12-l2-q3",
            type: "scramble",
            prompt: "Ordena las palabras para formar una oración condicional real:",
            tokens: ["Si", "estudias", "con", "constancia,", "aprobarás", "el", "examen."],
            correctTokens: ["Si", "estudias", "con", "constancia,", "aprobarás", "el", "examen."],
            explanation: "Estructura de condición real: Si + presente de indicativo ('estudias') + futuro ('aprobarás')."
          },
          {
            id: "es-u12-l2-q4",
            type: "multiple_choice",
            prompt: "En español, ¿se puede poner el presente de subjuntivo inmediatamente después de 'Si' condicional ('Si tengas tiempo...')?",
            options: [
              "No, es un error gramatical grave (el presente de subjuntivo nunca va con 'si')",
              "Sí, es obligatorio en B1",
              "Solo en España",
              "Solo con verbos reflexivos"
            ],
            correctAnswer: "No, es un error gramatical grave (el presente de subjuntivo nunca va con 'si')",
            explanation: "En la norma culta del español, 'si' condicional NUNCA rige presente de subjuntivo; exige presente de indicativo o imperfecto de subjuntivo."
          },
          {
            id: "es-u12-l2-q5",
            type: "fill_blank",
            sentence: "Nosotros ___ encantados de colaborar en vuestro proyecto benéfico.",
            missingWord: "estaríamos",
            options: ["estaríamos", "estaremos", "estuvimos", "estemos"],
            correctAnswer: "estaríamos",
            explanation: "Condicional simple de 'estar' para nosotros: 'estaríamos'."
          },
          {
            id: "es-u12-l2-q6",
            type: "matching",
            prompt: "Empareja los verbos irregulares de futuro y condicional con su infinitivo:",
            pairs: [
              { native: "Valdría", english: "Valer (to be worth)", left: "Valdría", right: "Valer" },
              { native: "Cabría", english: "Caber (to fit)", left: "Cabría", right: "Caber" },
              { native: "Habría", english: "Haber (there would be)", left: "Habría", right: "Haber" },
              { native: "Saldría", english: "Salir (to go out)", left: "Saldría", right: "Salir" }
            ]
          },
          {
            id: "es-u12-l2-q7",
            type: "scramble",
            prompt: "Ordena las palabras para plantear una conjetura sobre la hora:",
            tokens: ["¿Qué", "hora", "sería", "cuando", "empezó", "la", "película?"],
            correctTokens: ["¿Qué", "hora", "sería", "cuando", "empezó", "la", "película?"],
            explanation: "Pregunta conjetural sobre el pasado usando el condicional simple."
          },
          {
            id: "es-u12-l2-q8",
            type: "multiple_choice",
            prompt: "¿Cuál es la respuesta adecuada para expresar una preferencia con condicional?",
            options: [
              "Preferiría tomar un café solo, si es posible.",
              "Prefiero ayer.",
              "No he tomado nada el siglo pasado.",
              "Tome usted café."
            ],
            correctAnswer: "Preferiría tomar un café solo, si es posible.",
            explanation: "'Preferiría...' formula una inclinación o deseo atenuado de forma educada."
          },
          {
            id: "es-u12-l2-q9",
            type: "fill_blank",
            sentence: "¿Qué ___ tú si ganaras la lotería?",
            missingWord: "harías",
            options: ["harías", "haces", "hiciste", "harás"],
            correctAnswer: "harías",
            explanation: "En la prótasis hipotética con imperfecto de subjuntivo ('ganaras'), la apódosis se construye con condicional simple ('harías')."
          },
          {
            id: "es-u12-l2-q10",
            type: "multiple_choice",
            prompt: "Completa la regla: 'El condicional simple de los verbos regulares conserva el infinitivo entero como raíz y añade las desinencias de...'",
            options: [
              "El pretérito imperfecto de la 2ª y 3ª conjugación (-ía, -ías, -ía...)",
              "El presente de indicativo",
              "El pretérito indefinido",
              "El participio"
            ],
            correctAnswer: "El pretérito imperfecto de la 2ª y 3ª conjugación (-ía, -ías, -ía...)",
            explanation: "Históricamente, el condicional procede del infinitivo + imperfecto del verbo haber (cantar + había -> cantaría)."
          }
        ]
      }
    ]
  }
];
