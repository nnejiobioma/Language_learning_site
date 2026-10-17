// =========================================================================
// MCER / ELE Spanish Curriculum — Instituto Cervantes Aligned
// Block 4: 🔵 Nivel B2: Avanzado (Intermedio Alto) — Units 13 to 16
// Exactly 20 Questions per Unit = 80 Questions Total
// =========================================================================

export const spanishB2Units = [
  // =========================================================================
  // Unit 13: El Mundo del Trabajo (The World of Work)
  // =========================================================================
  {
    id: "es-unit-13",
    unitId: "es-unit-13",
    unitNumber: 13,
    level: "Nivel B2: Avanzado (Intermedio Alto)",
    title: "Unidad 13: El Mundo del Trabajo (The World of Work)",
    subtitle: "Voz pasiva perifrástica y pasiva refleja, estilo indirecto y jerarquías laborales.",
    icon: "Briefcase",
    color: "#3b82f6",
    lessons: [
      {
        id: "es-u13-l1",
        title: "Lección 1: Entorno Laboral, Pasivas y Estilo Indirecto",
        description: "Domina la pasiva refleja ('se buscan programadores'), la transformación al estilo indirecto y el léxico de contratación y currículum.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u13-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la estructura de la pasiva refleja en español?",
            options: [
              "Se + verbo en 3ª persona (singular/plural) + sujeto paciente concordado",
              "Verbo ser + gerundio",
              "Haber + participio pasivo",
              "Se + pronombre de objeto directo"
            ],
            correctAnswer: "Se + verbo en 3ª persona (singular/plural) + sujeto paciente concordado",
            explanation: "La pasiva refleja se forma con la partícula 'se' seguida de un verbo en 3ª persona singular o plural según concuerde con el sujeto paciente: 'Se venden pisos'."
          },
          {
            id: "es-u13-q2",
            type: "fill_blank",
            sentence: "En nuestra empresa se ___ ingenieros de software con experiencia.",
            missingWord: "necesitan",
            options: ["necesitan", "necesita", "necesitando", "necesitar"],
            correctAnswer: "necesitan",
            explanation: "'Ingenieros de software' es un sujeto paciente plural, por lo que el verbo debe concordar en plural: 'se necesitan'."
          },
          {
            id: "es-u13-q3",
            type: "scramble",
            prompt: "Ordena las palabras para redactar un anuncio laboral formal:",
            tokens: ["Se", "requiere", "disponibilidad", "para", "viajar", "al", "extranjero."],
            correctTokens: ["Se", "requiere", "disponibilidad", "para", "viajar", "al", "extranjero."],
            explanation: "Estructura impersonal / pasiva refleja común en ofertas de empleo."
          },
          {
            id: "es-u13-q4",
            type: "matching",
            prompt: "Empareja los cambios verbales al pasar de estilo directo al indirecto en pasado:",
            pairs: [
              { native: "Presente ('Trabajo aquí')", english: "Imperfecto ('Dijo que trabajaba allí')", left: "Presente de indicativo", right: "Pretérito Imperfecto" },
              { native: "Pretérito Indefinido ('Llegué tarde')", english: "Pluscuamperfecto ('Dijo que había llegado')", left: "Pretérito Indefinido", right: "Pretérito Pluscuamperfecto" },
              { native: "Futuro Simple ('Firmaré el contrato')", english: "Condicional ('Dijo que firmaría')", left: "Futuro Simple", right: "Condicional Simple" },
              { native: "Presente Subjuntivo ('Estudie más')", english: "Imperfecto Subjuntivo ('Dijo que estudiara')", left: "Presente de Subjuntivo", right: "Imperfecto de Subjuntivo" }
            ]
          },
          {
            id: "es-u13-q5",
            type: "multiple_choice",
            prompt: "Si el candidato dijo: 'Tengo cinco años de experiencia', ¿cómo se traslada al estilo indirecto tras 'El candidato afirmó que...'?",
            options: [
              "tenía cinco años de experiencia",
              "tendrá cinco años de experiencia",
              "tenga cinco años de experiencia",
              "hubo tenido cinco años de experiencia"
            ],
            correctAnswer: "tenía cinco años de experiencia",
            explanation: "El presente de indicativo ('tengo') pasa a pretérito imperfecto ('tenía') cuando el verbo principal introductorio está en pasado."
          },
          {
            id: "es-u13-q6",
            type: "fill_blank",
            sentence: "El informe de auditoría fue ___ por un comité externo independiente.",
            missingWord: "redactado",
            options: ["redactado", "redactada", "redactando", "redactar"],
            correctAnswer: "redactado",
            explanation: "En la pasiva perifrástica (ser + participio), el participio concuerda en género y número con el sujeto paciente masculino singular ('el informe fue redactado')."
          },
          {
            id: "es-u13-q7",
            type: "matching",
            prompt: "Empareja el léxico de recursos humanos y empleo con su definición:",
            pairs: [
              { native: "Puesto vacante", english: "Job vacancy", left: "Puesto vacante", right: "Empleo libre disponible para contratación" },
              { native: "Indemnización por despido", english: "Severance pay", left: "Indemnización", right: "Compensación económica al cesar el contrato" },
              { native: "Período de prueba", english: "Probationary period", left: "Período de prueba", right: "Fase inicial evaluativa antes de la fijeza" },
              { native: "Nómina mensual", english: "Monthly payslip", left: "La nómina", right: "Documento oficial del salario devengado" }
            ]
          },
          {
            id: "es-u13-q8",
            type: "scramble",
            prompt: "Ordena las palabras para formular una respuesta en una entrevista de trabajo:",
            tokens: ["Poseo", "una", "amplia", "experiencia", "en", "la", "gestión", "de", "equipos."],
            correctTokens: ["Poseo", "una", "amplia", "experiencia", "en", "la", "gestión", "de", "equipos."],
            explanation: "Registro profesional elevado con el verbo 'poseer'."
          },
          {
            id: "es-u13-q9",
            type: "multiple_choice",
            prompt: "¿Cuál es el sujeto agente en: 'El nuevo convenio fue ratificado por el sindicato de trabajadores'?",
            options: [
              "El sindicato de trabajadores (introducido por 'por')",
              "El nuevo convenio",
              "Fue ratificado",
              "No hay sujeto"
            ],
            correctAnswer: "El sindicato de trabajadores (introducido por 'por')",
            explanation: "En las oraciones pasivas perifrásticas, el complemento agente que realiza la acción va introducido por la preposición 'por'."
          },
          {
            id: "es-u13-q10",
            type: "audio_listen",
            prompt: "Escucha la declaración del director y selecciona la resolución comunicada:",
            audioText: "El director general anunció que la compañía abrirá una nueva sede operativa en Buenos Aires durante el primer trimestre.",
            options: [
              "Apertura de una nueva sede en Buenos Aires",
              "Cierre inmediato de todas las filiales",
              "Despido de la mitad de la plantilla",
              "Cancelación de inversiones en Sudamérica"
            ],
            correctAnswer: "Apertura de una nueva sede en Buenos Aires",
            explanation: "El audio comunica la apertura de una sede operativa en Buenos Aires."
          },
          {
            id: "es-u13-q11",
            type: "fill_blank",
            sentence: "Durante la pandemia, la empresa implementó el ___ para garantizar la seguridad de la plantilla.",
            missingWord: "teletrabajo",
            options: ["teletrabajo", "desempleo", "ascenso", "recorte"],
            correctAnswer: "teletrabajo",
            explanation: "'Teletrabajo' es el término estándar para el trabajo a distancia."
          },
          {
            id: "es-u13-q12",
            type: "multiple_choice",
            prompt: "Transforma al estilo indirecto: La directora dijo: 'Envíenme el balance contable antes de las cinco'.",
            options: [
              "La directora nos pidió que le enviáramos el balance contable antes de las cinco.",
              "La directora dijo que nos enviaba el balance contable.",
              "La directora dijo enviarme el balance.",
              "La directora pidió que enviaremos el balance."
            ],
            correctAnswer: "La directora nos pidió que le enviáramos el balance contable antes de las cinco.",
            explanation: "Una orden en imperativo se traslada al estilo indirecto mediante 'pedir/ordenar que' + imperfecto de subjuntivo ('enviáramos')."
          },
          {
            id: "es-u13-q13",
            type: "matching",
            prompt: "Empareja los tipos de contrato laboral con su naturaleza jurídica:",
            pairs: [
              { native: "Contrato indefinido", english: "Permanent contract", left: "Contrato indefinido", right: "Sin fecha de finalización predeterminada" },
              { native: "Contrato temporal / por obra", english: "Fixed-term contract", left: "Contrato temporal", right: "Vinculado a un proyecto de duración determinada" },
              { native: "Contrato de prácticas", english: "Internship / traineeship contract", left: "Contrato en prácticas", right: "Orientado a titulados recién graduados" },
              { native: "Jornada parcial", english: "Part-time schedule", left: "Jornada a tiempo parcial", right: "Menos horas que la jornada completa estándar" }
            ]
          },
          {
            id: "es-u13-q14",
            type: "scramble",
            prompt: "Ordena los elementos para indicar una pasiva refleja en un entorno de conferencias:",
            tokens: ["Se", "celebraron", "las", "jornadas", "empresariales", "con", "gran", "éxito."],
            correctTokens: ["Se", "celebraron", "las", "jornadas", "empresariales", "con", "gran", "éxito."],
            explanation: "Concordancia obligada plural: se celebraron + las jornadas empresariales."
          },
          {
            id: "es-u13-q15",
            type: "fill_blank",
            sentence: "El jefe me preguntó si yo ___ hablar con el cliente ayer por la tarde.",
            missingWord: "había podido",
            options: ["había podido", "pude", "puedo", "podré"],
            correctAnswer: "había podido",
            explanation: "Pregunta indirecta en pasado sobre una acción anterior ('pudo' -> 'había podido')."
          },
          {
            id: "es-u13-q16",
            type: "multiple_choice",
            prompt: "¿Cuál es la diferencia entre pasiva refleja ('Se firmó el acuerdo') y pasiva perifrástica ('El acuerdo fue firmado')?",
            options: [
              "La pasiva refleja es la más habitual y natural en el español hablado y escrito ordinario; la perifrástica es más formal y de registro periodístico/jurídico",
              "Significan cosas opuestas",
              "La pasiva refleja solo se usa en el futuro",
              "La perifrástica no lleva verbo ser"
            ],
            correctAnswer: "La pasiva refleja es la más habitual y natural en el español hablado y escrito ordinario; la perifrástica es más formal y de registro periodístico/jurídico",
            explanation: "La lengua española prefiere abrumadoramente las construcciones con 'se' frente a la pasiva con ser, que suena más forzada si no es en textos periodísticos o notariales."
          },
          {
            id: "es-u13-q17",
            type: "scramble",
            prompt: "Ordena las palabras para destacar un logro profesional en el CV:",
            tokens: ["Lideré", "la", "expansión", "comercial", "hacia", "los", "mercados", "emergentes."],
            correctTokens: ["Lideré", "la", "expansión", "comercial", "hacia", "los", "mercados", "emergentes."],
            explanation: "Verbo de acción en primera persona del pasado: 'Lideré la expansión...'."
          },
          {
            id: "es-u13-q18",
            type: "matching",
            prompt: "Empareja los departamentos corporativos con su función:",
            pairs: [
              { native: "Departamento de Recursos Humanos (RRHH)", english: "Human Resources", left: "Recursos Humanos", right: "Contratación, nóminas y bienestar del personal" },
              { native: "Departamento de I+D (Investigación y Desarrollo)", english: "R&D", left: "I+D", right: "Innovación científica y diseño de productos" },
              { native: "Departamento Financiero / Contabilidad", english: "Finance / Accounting", left: "Finanzas", right: "Gestión de presupuestos, balance y liquidez" },
              { native: "Departamento de Mercadotecnia / Marketing", english: "Marketing Department", left: "Marketing", right: "Estrategias de marca, publicidad y posicionamiento" }
            ]
          },
          {
            id: "es-u13-q19",
            type: "fill_blank",
            sentence: "Las actas de la junta directiva ___ archivadas bajo estricta confidencialidad.",
            missingWord: "fueron",
            options: ["fueron", "estuvieron", "hubieron", "eran"],
            correctAnswer: "fueron",
            explanation: "Pasiva perifrástica puntual de evento oficial concluido: 'fueron archivadas'."
          },
          {
            id: "es-u13-q20",
            type: "multiple_choice",
            prompt: "En una carta de presentación formal, ¿cuál es la despedida más adecuada para un responsable de selección?",
            options: [
              "Quedo a su entera disposición para cualquier aclaración y les saluda atentamente,",
              "Un abrazo y nos vemos el lunes,",
              "Chao bacano,",
              "Hasta la próxima vez,"
            ],
            correctAnswer: "Quedo a su entera disposición para cualquier aclaración y les saluda atentamente,",
            explanation: "Fórmula de registro formal y protocolario para el cierre de cartas de candidatura."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 14: Medios y Sociedad (Media and Society)
  // =========================================================================
  {
    id: "es-unit-14",
    unitId: "es-unit-14",
    unitNumber: 14,
    level: "Nivel B2: Avanzado (Intermedio Alto)",
    title: "Unidad 14: Medios y Sociedad (Media and Society)",
    subtitle: "Pretérito Imperfecto de Subjuntivo, concordancia temporal y análisis de la actualidad.",
    icon: "Tv",
    color: "#3b82f6",
    lessons: [
      {
        id: "es-u14-l1",
        title: "Lección 1: Prensa, Juicio Crítico y el Imperfecto de Subjuntivo",
        description: "Aprende las desinencias del imperfecto de subjuntivo (-ra / -se), la correlación de tiempos con el pasado y el lenguaje periodístico y cívico.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u14-q1",
            type: "multiple_choice",
            prompt: "¿Cómo se obtiene la raíz para conjugar el Pretérito Imperfecto de Subjuntivo de CUALQUIER verbo?",
            options: [
              "A partir de la 3ª persona del plural del Pretérito Indefinido (quitando -ron)",
              "A partir del infinitivo",
              "A partir de la primera persona del presente",
              "A partir del gerundio"
            ],
            correctAnswer: "A partir de la 3ª persona del plural del Pretérito Indefinido (quitando -ron)",
            explanation: "Regla universal: tomar la 3ª persona plural del indefinido (ellos hablaron -> habla-; ellos tuvieron -> tuvie-) y añadir las desinencias -ra/-se."
          },
          {
            id: "es-u14-q2",
            type: "multiple_choice",
            prompt: "¿Cuáles son las dos series de desinencias intercambiables del imperfecto de subjuntivo?",
            options: [
              "-ra, -ras, -ra, -ramos, -rais, -ran Y -se, -ses, -se, -semos, -seis, -sen",
              "-ba, -bas, -ba Y -ía, -ías, -ía",
              "-ría, -rías, -ría Y -ré, -rás, -rá",
              "-ndo, -nda, -ndos Y -do, -da, -dos"
            ],
            correctAnswer: "-ra, -ras, -ra, -ramos, -rais, -ran Y -se, -ses, -se, -semos, -seis, -sen",
            explanation: "Ambas formas (ej. hablara / hablase) son equivalentes y legítimas en toda la comunidad hispanohablante."
          },
          {
            id: "es-u14-q3",
            type: "fill_blank",
            sentence: "Me pareció indignante que los medios no ___ la verdad.",
            missingWord: "dijeran",
            options: ["dijeran", "digan", "dijeron", "dirían"],
            correctAnswer: "dijeran",
            explanation: "Matriz valorativa en pasado ('me pareció indignante que') rige imperfecto de subjuntivo: 'dijeran' (o dijesen)."
          },
          {
            id: "es-u14-q4",
            type: "matching",
            prompt: "Empareja los verbos en 3ª persona plural del indefinido con su imperfecto de subjuntivo (forma en -ra):",
            pairs: [
              { native: "Tuvieron", english: "They had -> Tuviera", left: "Tuvieron", right: "Tuviera / Tuviese" },
              { native: "Fueron", english: "They went/were -> Fuera", left: "Fueron", right: "Fuera / Fuese" },
              { native: "Pusieron", english: "They put -> Pusiera", left: "Pusieron", right: "Pusiera / Pusiese" },
              { native: "Supieron", english: "They knew -> Supiera", left: "Supieron", right: "Supiera / Supiese" }
            ]
          },
          {
            id: "es-u14-q5",
            type: "scramble",
            prompt: "Ordena las palabras para expresar indignación cívica ante una noticia:",
            tokens: ["Es", "inaceptable", "que", "se", "toleren", "semejantes", "actos", "de", "corrupción."],
            correctTokens: ["Es", "inaceptable", "que", "se", "toleren", "semejantes", "actos", "de", "corrupción."],
            explanation: "Matriz valorativa impersonal de juicio social: 'Es inaceptable que + subjuntivo'."
          },
          {
            id: "es-u14-q6",
            type: "fill_blank",
            sentence: "La ciudadanía exigió que el gobierno ___ medidas urgentes contra la inflación.",
            missingWord: "tomara",
            options: ["tomara", "toma", "tomaría", "tomará"],
            correctAnswer: "tomara",
            explanation: "Verbo de influencia en pasado ('exigió que') rige imperfecto de subjuntivo: 'tomara' (o tomase)."
          },
          {
            id: "es-u14-q7",
            type: "multiple_choice",
            prompt: "En la secuencia de tiempos (consecutio temporum), si el verbo principal está en pretérito indefinido o imperfecto, ¿qué subjuntivo corresponde a una acción simultánea o posterior?",
            options: [
              "Pretérito Imperfecto de Subjuntivo (cantara / cantase)",
              "Presente de Subjuntivo (cante)",
              "Pretérito Perfecto de Subjuntivo (haya cantado)",
              "Futuro de Subjuntivo (cantare)"
            ],
            correctAnswer: "Pretérito Imperfecto de Subjuntivo (cantara / cantase)",
            explanation: "La correspondencia temporal exige el imperfecto de subjuntivo tras un tiempo del ámbito del pasado en la cláusula principal."
          },
          {
            id: "es-u14-q8",
            type: "matching",
            prompt: "Empareja los géneros periodísticos con sus características:",
            pairs: [
              { native: "Editorial", english: "Editorial opinion piece (institutional)", left: "El editorial", right: "Artículo de opinión que refleja la postura del diario" },
              { native: "Reportaje de investigación", english: "Investigative report", left: "Reportaje a fondo", right: "Investigación exhaustiva y contrastada" },
              { native: "Columna de opinión", english: "Opinion column (signed by writer)", left: "Columna de opinión", right: "Texto firmado con la visión subjetiva del autor" },
              { native: "Crónica", english: "Chronicle / event narrative", left: "La crónica", right: "Narración cronológica valorativa de un acontecimiento" }
            ]
          },
          {
            id: "es-u14-q9",
            type: "scramble",
            prompt: "Ordena las palabras para advertir sobre la desinformación en redes:",
            tokens: ["Debemos", "contrastar", "las", "fuentes", "para", "evitar", "las", "noticias", "falsas."],
            correctTokens: ["Debemos", "contrastar", "las", "fuentes", "para", "evitar", "las", "noticias", "falsas."],
            explanation: "Estructura de alfabetización mediática: verbo modal + infinitivo."
          },
          {
            id: "es-u14-q10",
            type: "audio_listen",
            prompt: "Escucha el titular informativo y selecciona el tema central de la emisión:",
            audioText: "El parlamento aprobó anoche por unanimidad la nueva ley de protección de datos y transparencia informativa.",
            options: [
              "Aprobación unánime de la ley de protección de datos",
              "Disolución del parlamento por desacuerdos",
              "Aumento masivo de impuestos sobre la prensa",
              "Cierre temporal de canales de televisión"
            ],
            correctAnswer: "Aprobación unánime de la ley de protección de datos",
            explanation: "El titular destaca con nitidez la aprobación de la ley de protección de datos."
          },
          {
            id: "es-u14-q11",
            type: "multiple_choice",
            prompt: "¿Cuál es el imperfecto de subjuntivo de 'hacer' para 'nosotros'?",
            options: ["Hiciéramos / Hiciésemos", "Hicieron", "Hagamos", "Hacíamos"],
            correctAnswer: "Hiciéramos / Hiciésemos",
            explanation: "De 'hicieron' -> raíz 'hicie-' + -ramos: 'hiciéramos' (con tilde esdrújula obligatoria)."
          },
          {
            id: "es-u14-q12",
            type: "fill_blank",
            sentence: "Dudaba mucho que los portavoces ___ la verdad en la rueda de prensa.",
            missingWord: "supieran",
            options: ["supieran", "sepan", "sabían", "sabrán"],
            correctAnswer: "supieran",
            explanation: "Verbo de duda en imperfecto ('dudaba que') + imperfecto de subjuntivo: 'supieran'."
          },
          {
            id: "es-u14-q13",
            type: "matching",
            prompt: "Empareja los términos de sociología y comunicación:",
            pairs: [
              { native: "Cámara de eco", english: "Echo chamber (social media)", left: "Cámara de eco", right: "Entorno donde solo se refuerzan opiniones afines" },
              { native: "Sesgo de confirmación", english: "Confirmation bias", left: "Sesgo de confirmación", right: "Tendencia a aceptar solo datos que respaldan prejuicios" },
              { native: "Libertad de prensa", english: "Freedom of the press", left: "Libertad de prensa", right: "Derecho fundamental a difundir información veraz" },
              { native: "Polarización social", english: "Social polarization", left: "Polarización social", right: "División extrema de la opinión pública en bandos" }
            ]
          },
          {
            id: "es-u14-q14",
            type: "scramble",
            prompt: "Ordena los elementos de una condicional irreal en presente con imperfecto de subjuntivo:",
            tokens: ["Si", "tuviera", "más", "tiempo,", "leería", "los", "periódicos", "a", "diario."],
            correctTokens: ["Si", "tuviera", "más", "tiempo,", "leería", "los", "periódicos", "a", "diario."],
            explanation: "Estructura de condición potencial/irreal: Si + imperfecto de subjuntivo ('tuviera') + condicional simple ('leería')."
          },
          {
            id: "es-u14-q15",
            type: "multiple_choice",
            prompt: "¿Cuál es la tildación obligatoria en la forma de 'nosotros' en el imperfecto de subjuntivo?",
            options: [
              "Siempre lleva tilde por ser palabra esdrújula (cantáramos, tuviéramos)",
              "Nunca lleva tilde",
              "Solo lleva tilde si termina en consonante",
              "Es opcional"
            ],
            correctAnswer: "Siempre lleva tilde por ser palabra esdrújula (cantáramos, tuviéramos)",
            explanation: "En la 1ª persona plural de ambas formas (-áramos / -ásemos, -iéramos / -iésemos), la palabra siempre es esdrújula y lleva tilde gráfica."
          },
          {
            id: "es-u14-q16",
            type: "fill_blank",
            sentence: "Habría sido deseable que los ministros ___ a una rueda de preguntas abierta.",
            missingWord: "comparecieran",
            options: ["comparecieran", "comparezcan", "comparecerían", "comparecían"],
            correctAnswer: "comparecieran",
            explanation: "Estructura de pretérito ('Habría sido deseable que') + imperfecto de subjuntivo: 'comparecieran'."
          },
          {
            id: "es-u14-q17",
            type: "multiple_choice",
            prompt: "¿Qué significa la locución 'dar la cara' en el ámbito público?",
            options: [
              "Asumir la responsabilidad públicamente ante un problema",
              "Operarse estéticamente el rostro",
              "Esconderse de los periodistas",
              "Pintar un retrato al óleo"
            ],
            correctAnswer: "Asumir la responsabilidad públicamente ante un problema",
            explanation: "'Dar la cara' es una locución idiomática de madurez y responsabilidad pública."
          },
          {
            id: "es-u14-q18",
            type: "matching",
            prompt: "Empareja las locuciones periodísticas de citación:",
            pairs: [
              { native: "Según fuentes gubernamentales", english: "According to governmental sources", left: "Según fuentes oficiales", right: "Cita respaldada por portavoces autorizados" },
              { native: "Bajo condición de anonimato", english: "Off the record / under anonymity", left: "Bajo anonimato", right: "Testimonio con reserva estricta de identidad" },
              { native: "En declaraciones exclusivas", english: "In exclusive statements", left: "En exclusiva", right: "Información otorgada únicamente a ese medio" },
              { native: "Al cierre de esta edición", english: "At press time", left: "Al cierre de edición", right: "Última hora antes de imprimir o emitir" }
            ]
          },
          {
            id: "es-u14-q19",
            type: "scramble",
            prompt: "Ordena las palabras para expresar un deseo hipotético con 'Ojalá':",
            tokens: ["¡Ojalá", "hubiera", "mayor", "consenso", "entre", "las", "fuerzas", "políticas!"],
            correctTokens: ["¡Ojalá", "hubiera", "mayor", "consenso", "entre", "las", "fuerzas", "políticas!"],
            explanation: "Ojalá + imperfecto de subjuntivo expresa un deseo de difícil o improbable consecución."
          },
          {
            id: "es-u14-q20",
            type: "multiple_choice",
            prompt: "Identifica la forma verbal correcta: 'El moderador no permitió que los ponentes se ___ durante el debate'.",
            options: ["interrumpieran", "interrumpan", "interrumpieron", "interrumpirían"],
            correctAnswer: "interrumpieran",
            explanation: "Verbo en pasado ('no permitió que') rige imperfecto de subjuntivo: 'se interrumpieran'."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 15: Arte y Literatura (Art and Literature)
  // =========================================================================
  {
    id: "es-unit-15",
    unitId: "es-unit-15",
    unitNumber: 15,
    level: "Nivel B2: Avanzado (Intermedio Alto)",
    title: "Unidad 15: Arte y Literatura (Art and Literature)",
    subtitle: "Contraste avanzado de 'por' vs. 'para', conectores discursivos complejos y crítica cultural.",
    icon: "Palette",
    color: "#3b82f6",
    lessons: [
      {
        id: "es-u15-l1",
        title: "Lección 1: Crítica Artística, 'Por' vs 'Para' y Cohesión Textual",
        description: "Domina todos los matices causales y finales de 'por' y 'para', analiza movimientos estéticos y utiliza conectores discursivos de alto nivel.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u15-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es el valor fundamental que distingue a 'por' frente a 'para'?",
            options: [
              "'Por' expresa fundamentalmente causa, motivo o medio; 'para' expresa finalidad, destinatario o meta",
              "'Por' es solo de futuro y 'para' de pasado",
              "Son completamente sinónimos en todas las frases",
              "'Para' no se puede usar con personas"
            ],
            correctAnswer: "'Por' expresa fundamentalmente causa, motivo o medio; 'para' expresa finalidad, destinatario o meta",
            explanation: "La distinción matriz: 'por' mira hacia el origen/causa que impulsa la acción; 'para' mira hacia el objetivo/propósito hacia el que avanza."
          },
          {
            id: "es-u15-q2",
            type: "fill_blank",
            sentence: "El pintor fue premiado ___ su extraordinaria técnica del claroscuro.",
            missingWord: "por",
            options: ["por", "para", "de", "con"],
            correctAnswer: "por",
            explanation: "Causa o motivo de la condecoración: 'por su extraordinaria técnica'."
          },
          {
            id: "es-u15-q3",
            type: "fill_blank",
            sentence: "El autor escribió esta obra de teatro ___ concienciar sobre la justicia social.",
            missingWord: "para",
            options: ["para", "por", "en", "hacia"],
            correctAnswer: "para",
            explanation: "Finalidad u objetivo de la escritura: 'para concienciar'."
          },
          {
            id: "es-u15-q4",
            type: "matching",
            prompt: "Empareja los usos específicos de 'por' y 'para':",
            pairs: [
              { native: "Autor de una obra de arte", english: "Author by -> Por", left: "Pintado / Escrito por...", right: "Agente de la creación artística (por)" },
              { native: "Plazo límite temporal", english: "Deadline -> Para", left: "El cuadro estará listo para el viernes", right: "Fecha límite o término (para)" },
              { native: "Espacio indeterminado de paso", english: "Through / around -> Por", left: "Pasear por el museo", right: "Tránsito o espacio aproximado (por)" },
              { native: "Destinatario del homenaje", english: "Recipient -> Para", left: "Un poema para su musa", right: "Destinatario final (para)" }
            ]
          },
          {
            id: "es-u15-q5",
            type: "scramble",
            prompt: "Ordena las palabras para redactar una crítica cinematográfica:",
            tokens: ["La", "película", "destaca", "por", "su", "fotografía", "y", "banda", "sonora."],
            correctTokens: ["La", "película", "destaca", "por", "su", "fotografía", "y", "banda", "sonora."],
            explanation: "Régimen verbal: 'destacar por + motivo o cualidad'."
          },
          {
            id: "es-u15-q6",
            type: "multiple_choice",
            prompt: "¿A qué movimiento artístico pertenece la obra 'Guernica' de Pablo Picasso?",
            options: ["Cubismo", "Romanticismo", "Impresionismo", "Barroco"],
            correctAnswer: "Cubismo",
            explanation: "Picasso sintetizó elementos del cubismo y el expresionismo dramático en su célebre lienzo de denuncia de 1937."
          },
          {
            id: "es-u15-q7",
            type: "matching",
            prompt: "Empareja los grandes autores en español con su corriente o época literaria:",
            pairs: [
              { native: "Miguel de Cervantes", english: "Golden Age (Siglo de Oro)", left: "Miguel de Cervantes", right: "Siglo de Oro (Barroco / Renacimiento)" },
              { native: "Gabriel García Márquez", english: "Realismo Mágico (Boom Latinoamericano)", left: "Gabriel García Márquez", right: "Realismo Mágico / Boom Latinoamericano" },
              { native: "Federico García Lorca", english: "Generación del 27", left: "Federico García Lorca", right: "Generación del 27 (Vanguardias y tradición lírica)" },
              { native: "Benito Pérez Galdós", english: "Realismo español del siglo XIX", left: "Benito Pérez Galdós", right: "Realismo y naturalismo decimonónico" }
            ]
          },
          {
            id: "es-u15-q8",
            type: "fill_blank",
            sentence: "___ su avanzada edad, el novelista conserva una prodigiosa agilidad mental.",
            missingWord: "Para",
            options: ["Para", "Por", "Hacia", "Mediante"],
            correctAnswer: "Para",
            explanation: "'Para' expresa relación de norma o comparación atípica ('Para la edad que tiene, está muy activo')."
          },
          {
            id: "es-u15-q9",
            type: "scramble",
            prompt: "Ordena las palabras con un conector discursivo de consecuencia formal:",
            tokens: ["El", "guion", "es", "brillante;", "por", "consiguiente,", "obtendrá", "el", "galardón."],
            correctTokens: ["El", "guion", "es", "brillante;", "por", "consiguiente,", "obtendrá", "el", "galardón."],
            explanation: "'Por consiguiente' es un conector consecutivo de registro culto."
          },
          {
            id: "es-u15-q10",
            type: "audio_listen",
            prompt: "Escucha el comentario estético y señala la valoración del crítico:",
            audioText: "El uso del claroscuro en esta pintura barroca logra una atmósfera envolvente de una tensión sobrecogedora.",
            options: [
              "Elogia la maestría técnica del claroscuro y la atmósfera",
              "Critica la falta de color y luz en el cuadro",
              "Opina que la obra carece de técnica",
              "Recomienda quemar el cuadro"
            ],
            correctAnswer: "Elogia la maestría técnica del claroscuro y la atmósfera",
            explanation: "El crítico resalta la 'atmósfera envolvente de una tensión sobrecogedora' lograda mediante el claroscuro."
          },
          {
            id: "es-u15-q11",
            type: "multiple_choice",
            prompt: "¿Qué matiz tiene la expresión: 'Estar por + infinitivo' (ej. 'La escultura está por terminar')?",
            options: [
              "Acción pendiente o inacabada que aún falta por realizar",
              "Acción ya finalizada con éxito",
              "Deseo de viajar",
              "Una prohibición legal"
            ],
            correctAnswer: "Acción pendiente o inacabada que aún falta por realizar",
            explanation: "'Estar por + infinitivo' indica que algo todavía no se ha hecho o está incompleto."
          },
          {
            id: "es-u15-q12",
            type: "matching",
            prompt: "Empareja las perífrasis con 'por' y 'para':",
            pairs: [
              { native: "Estar para + infinitivo", english: "To be about to / ready to", left: "El tren está para salir", right: "A punto de suceder de forma inminente" },
              { native: "Estar por + infinitivo (persona)", english: "To be in favor of doing", left: "Estoy por irme a casa", right: "Inclinación o voluntad subjetiva" },
              { native: "Por si acaso", english: "Just in case", left: "Por si las moscas / acaso", right: "Precaución ante posible contingencia" },
              { native: "Para colmo", english: "To make matters worse", left: "Para colmo de males", right: "Añadido que empeora la situación" }
            ]
          },
          {
            id: "es-u15-q13",
            type: "fill_blank",
            sentence: "La obra maestra 'Las Meninas' fue pintada ___ Diego Velázquez en 1656.",
            missingWord: "por",
            options: ["por", "para", "desde", "en"],
            correctAnswer: "por",
            explanation: "Complemento agente de autoría en voz pasiva: 'pintada por Diego Velázquez'."
          },
          {
            id: "es-u15-q14",
            type: "scramble",
            prompt: "Ordena las palabras para articular un conector de reformulación explicativa:",
            tokens: ["Es", "una", "alegoría;", "es", "decir,", "representa", "una", "idea", "abstracta."],
            correctTokens: ["Es", "una", "alegoría;", "es", "decir,", "representa", "una", "idea", "abstracta."],
            explanation: "'Es decir' introduce la explicación o paráfrasis conceptual."
          },
          {
            id: "es-u15-q15",
            type: "multiple_choice",
            prompt: "¿Qué figura literaria consiste en atribuir cualidades humanas a objetos inanimados o animales?",
            options: ["Personificación o prosopopeya", "Hipérbole", "Metáfora pura", "Oxímoron"],
            correctAnswer: "Personificación o prosopopeya",
            explanation: "La prosopopeya o personificación dota de rasgos anímicos o humanos a elementos naturales o abstractos."
          },
          {
            id: "es-u15-q16",
            type: "fill_blank",
            sentence: "No fuimos al festival de cine no ___ falta de interés, sino por escasez de presupuesto.",
            missingWord: "por",
            options: ["por", "para", "ante", "hacia"],
            correctAnswer: "por",
            explanation: "Causa negada: 'no por falta de interés, sino por...'."
          },
          {
            id: "es-u15-q17",
            type: "matching",
            prompt: "Empareja los conectores opositivos y concesivos según su registro:",
            pairs: [
              { native: "A pesar de que...", english: "Although / Despite (+ indicativo o subjuntivo)", left: "A pesar de que", right: "Conector concesivo común" },
              { native: "Pese a...", english: "In spite of (+ sustantivo / infinitivo)", left: "Pese a sus esfuerzos", right: "Concesión de registro elevado" },
              { native: "No obstante", english: "Nevertheless", left: "No obstante,", right: "Adversativo formal sinónimo de sin embargo" },
              { native: "Por el contrario", english: "On the contrary", left: "Por el contrario,", right: "Contraste polar antagónico" }
            ]
          },
          {
            id: "es-u15-q18",
            type: "scramble",
            prompt: "Ordena las palabras para calificar el desenlace de una novela dramática:",
            tokens: ["El", "desenlace", "trágico", "conmovió", "profundamente", "a", "todos", "los", "lectores."],
            correctTokens: ["El", "desenlace", "trágico", "conmovió", "profundamente", "a", "todos", "los", "lectores."],
            explanation: "Estructura canónica de análisis de recepción estética."
          },
          {
            id: "es-u15-q19",
            type: "multiple_choice",
            prompt: "¿Qué significa 'leer entre líneas' en el análisis literario?",
            options: [
              "Descubrir el sentido implícito o subyacente que no está escrito explícitamente",
              "Leer saltándose una línea de cada dos",
              "Corregir erratas tipográficas en imprenta",
              "Memorizar una poesía de memoria"
            ],
            correctAnswer: "Descubrir el sentido implícito o subyacente que no está escrito explícitamente",
            explanation: "'Leer entre líneas' alude a la interpretación de la ironía, el subtexto y las intenciones veladas del creador."
          },
          {
            id: "es-u15-q20",
            type: "multiple_choice",
            prompt: "Completa la frase con el conector de finalidad correcto: 'El museo amplió sus salas ___ que los visitantes pudieran contemplar las esculturas con mayor comodidad'.",
            options: ["para", "por", "de modo", "porque"],
            correctAnswer: "para",
            explanation: "'Para que + subjuntivo' es la locución final por excelencia cuando los sujetos de la oración son distintos."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 16: Ciencia y Sostenibilidad (Science and Sustainability)
  // =========================================================================
  {
    id: "es-unit-16",
    unitId: "es-unit-16",
    unitNumber: 16,
    level: "Nivel B2: Avanzado (Intermedio Alto)",
    title: "Unidad 16: Ciencia y Sostenibilidad (Science and Sustainability)",
    subtitle: "Condicional Compuesto, estructuras contrafácticas y debate medioambiental.",
    icon: "Leaf",
    color: "#3b82f6",
    lessons: [
      {
        id: "es-u16-l1",
        title: "Lección 1: Ecología, Hipótesis del Pasado y el Condicional Compuesto",
        description: "Aprende el condicional compuesto (habría + participio), las condiciones irreales del pasado (si hubiera... habría...) y el discurso de innovación tecnológica.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u16-q1",
            type: "multiple_choice",
            prompt: "¿Cómo se compone el Condicional Compuesto de indicativo?",
            options: [
              "Verbo haber en condicional simple (habría, habrías...) + participio invariable",
              "Verbo haber en presente (he, has...) + participio",
              "Verbo estar en condicional + gerundio",
              "Verbo haber en pluscuamperfecto + infinitivo"
            ],
            correctAnswer: "Verbo haber en condicional simple (habría, habrías...) + participio invariable",
            explanation: "El condicional compuesto o perfecto se forma con 'habría / habrías / habría / habríamos / habríais / habrían' + participio terminado en -ado/-ido."
          },
          {
            id: "es-u16-q2",
            type: "fill_blank",
            sentence: "Si los países hubieran firmado el tratado antes, se ___ evitado catástrofes climáticas.",
            missingWord: "habrían",
            options: ["habrían", "habrán", "habían", "hayan"],
            correctAnswer: "habrían",
            explanation: "En la condicional contrafáctica del pasado (tipo 3): Si + pluscuamperfecto de subjuntivo ('hubieran firmado') -> condicional compuesto ('habrían evitado')."
          },
          {
            id: "es-u16-q3",
            type: "scramble",
            prompt: "Ordena las palabras para formular una hipótesis irreal sobre el pasado científico:",
            tokens: ["Habríamos", "descubierto", "la", "cura", "con", "mayor", "financiación."],
            correctTokens: ["Habríamos", "descubierto", "la", "cura", "con", "mayor", "financiación."],
            explanation: "Condicional compuesto expresando un resultado que no llegó a consumarse por falta de medios."
          },
          {
            id: "es-u16-q4",
            type: "matching",
            prompt: "Empareja los términos de ecología y cambio climático con su definición:",
            pairs: [
              { native: "Huella de carbono", english: "Carbon footprint", left: "Huella de carbono", right: "Volumen de gases de efecto invernadero emitidos" },
              { native: "Energías renovables", english: "Renewable energy", left: "Fuentes limpias", right: "Energía solar, eólica, geotérmica e hidráulica" },
              { native: "Biodiversidad", english: "Biodiversity", left: "Biodiversidad", right: "Variedad de especies biológicas en un ecosistema" },
              { native: "Economía circular", english: "Circular economy", left: "Economía circular", right: "Modelo de reciclaje, reutilización y residuo cero" }
            ]
          },
          {
            id: "es-u16-q5",
            type: "multiple_choice",
            prompt: "¿Qué expresa la estructura: 'Si hubieras venido a la conferencia, habrías aprendido mucho'?",
            options: [
              "Una condición irreal en el pasado: la persona no fue a la conferencia y por tanto no aprendió",
              "Una orden que debe cumplirse mañana",
              "Un hecho real que está ocurriendo hoy",
              "Una certeza científica inmutable"
            ],
            correctAnswer: "Una condición irreal en el pasado: la persona no fue a la conferencia y por tanto no aprendió",
            explanation: "Las oraciones condicionales tipo 3 plantean situaciones contrafácticas: hechos pasados que ya no pueden modificarse."
          },
          {
            id: "es-u16-q6",
            type: "fill_blank",
            sentence: "De haberlo sabido antes, yo te ___ acompañado a la manifestación ecologista.",
            missingWord: "habría",
            options: ["habría", "había", "haya", "hubiese"],
            correctAnswer: "habría",
            explanation: "'De + infinitivo compuesto (haberlo sabido)' equivale a 'Si lo hubiera sabido', pidiendo en la apódosis condicional compuesto: 'habría acompañado'."
          },
          {
            id: "es-u16-q7",
            type: "matching",
            prompt: "Empareja las tres estructuras condicionales en español con sus fórmulas canónicas:",
            pairs: [
              { native: "Condición Real (Tipo 1)", english: "Real / Probable future", left: "Si estudias...", right: "...aprobarás el examen (Presente + Futuro)" },
              { native: "Condición Potencial (Tipo 2)", english: "Hypothetical present", left: "Si estudiaras...", right: "...aprobarías el examen (Imperfecto Subj + Condicional)" },
              { native: "Condición Irreal (Tipo 3)", english: "Counterfactual past", left: "Si hubieras estudiado...", right: "...habrías aprobado (Pluscuamperfecto Subj + Condicional Compuesto)" },
              { native: "Condición Mixta", english: "Past cause, present effect", left: "Si hubieras nacido allí...", right: "...ahora hablarías dos lenguas" }
            ]
          },
          {
            id: "es-u16-q8",
            type: "scramble",
            prompt: "Ordena las palabras para alertar sobre el calentamiento global:",
            tokens: ["El", "deshielo", "de", "los", "glaciares", "amenaza", "el", "equilibrio", "planetario."],
            correctTokens: ["El", "deshielo", "de", "los", "glaciares", "amenaza", "el", "equilibrio", "planetario."],
            explanation: "Estructura temática de divulgación científica medioambiental."
          },
          {
            id: "es-u16-q9",
            type: "multiple_choice",
            prompt: "¿Cuál es el valor del condicional compuesto en: 'Ayer Juan no vino al laboratorio; ¿se habría quedado dormido?'?",
            options: [
              "Hipótesis o conjetura explicativa referida a un hecho pasado",
              "Una confirmación documentada",
              "Una promesa futura",
              "Un mandato imperativo"
            ],
            correctAnswer: "Hipótesis o conjetura explicativa referida a un hecho pasado",
            explanation: "El condicional compuesto sirve para formular suposiciones o deducciones sobre acciones pasadas."
          },
          {
            id: "es-u16-q10",
            type: "audio_listen",
            prompt: "Escucha el fragmento de la cumbre sobre el clima y selecciona la meta propuesta:",
            audioText: "Los delegados acordaron reducir las emisiones netas de carbono a cero para el año 2050 mediante la inversión en energías limpias.",
            options: [
              "Emisiones netas cero para el año 2050",
              "Aumentar el uso de centrales de carbón",
              "Suspender los acuerdos medioambientales",
              "Trasladar las industrias a zonas protegidas"
            ],
            correctAnswer: "Emisiones netas cero para el año 2050",
            explanation: "La cumbre suscribe el objetivo de neutralidad climática: 'emisiones netas de carbono a cero para el año 2050'."
          },
          {
            id: "es-u16-q11",
            type: "fill_blank",
            sentence: "¿Ustedes habrían ___ la inversión en paneles solares de haber tenido los fondos?",
            missingWord: "hecho",
            options: ["hecho", "hacido", "haciendo", "hicieron"],
            correctAnswer: "hecho",
            explanation: "Participio irregular del verbo hacer: 'hecho'."
          },
          {
            id: "es-u16-q12",
            type: "multiple_choice",
            prompt: "¿Qué término describe el fenómeno por el cual la temperatura media de la Tierra se eleva por la acumulación de gases?",
            options: ["Efecto invernadero", "Lluvia ácida", "Falla geológica", "Erosión marina"],
            correctAnswer: "Efecto invernadero",
            explanation: "El 'efecto invernadero' (greenhouse effect) retiene la radiación térmica en la atmósfera."
          },
          {
            id: "es-u16-q13",
            type: "matching",
            prompt: "Empareja los desafíos tecnológicos contemporáneos con sus ámbitos:",
            pairs: [
              { native: "Inteligencia Artificial generativa", english: "Generative AI", left: "IA generativa", right: "Modelos neuronales de procesamiento de lenguaje y datos" },
              { native: "Transición energética", english: "Energy transition", left: "Descarbonización", right: "Abandono de combustibles fósiles por energías limpias" },
              { native: "Gestión de residuos nucleares", english: "Nuclear waste management", left: "Residuos radiactivos", right: "Almacenamiento geológico profundo seguro" },
              { native: "Desertificación del suelo", english: "Soil desertification", left: "Degradación de tierras fértiles", right: "Pérdida de cubierta vegetal por sequías y sobreexplotación" }
            ]
          },
          {
            id: "es-u16-q14",
            type: "scramble",
            prompt: "Ordena los elementos para expresar una condición irreal mixta:",
            tokens: ["Si", "hubiéramos", "ahorrado", "agua,", "hoy", "no", "tendríamos", "restricciones."],
            correctTokens: ["Si", "hubiéramos", "ahorrado", "agua,", "hoy", "no", "tendríamos", "restricciones."],
            explanation: "Condición mixta: prótasis en pasado (hubiéramos ahorrado) con consecuencia en presente (hoy no tendríamos)."
          },
          {
            id: "es-u16-q15",
            type: "fill_blank",
            sentence: "Nosotros ___ presentado la tesis doctoral el mes pasado, pero el laboratorio estuvo cerrado.",
            missingWord: "habríamos",
            options: ["habríamos", "habremos", "hayamos", "éramos"],
            correctAnswer: "habríamos",
            explanation: "Intención no completada en el pasado por un impedimento: condicional compuesto 'habríamos presentado'."
          },
          {
            id: "es-u16-q16",
            type: "multiple_choice",
            prompt: "En la lengua culta, en la consecuencia (apódosis) de una condición contrafáctica, ¿qué forma alternativa al condicional compuesto está admitida?",
            options: [
              "El pretérito pluscuamperfecto de subjuntivo en -ra ('Si hubiera venido, te lo hubiera dicho')",
              "El presente de indicativo",
              "El futuro simple",
              "El imperativo negativo"
            ],
            correctAnswer: "El pretérito pluscuamperfecto de subjuntivo en -ra ('Si hubiera venido, te lo hubiera dicho')",
            explanation: "La RAE admite y reconoce el uso del pluscuamperfecto de subjuntivo en -ra (hubiera dicho) en la apódosis como sinónimo exacto del condicional compuesto (habría dicho)."
          },
          {
            id: "es-u16-q17",
            type: "scramble",
            prompt: "Ordena las palabras para destacar una ventaja de la movilidad eléctrica:",
            tokens: ["El", "vehículo", "eléctrico", "reduce", "las", "emisiones", "contaminantes", "urbanas."],
            correctTokens: ["El", "vehículo", "eléctrico", "reduce", "las", "emisiones", "contaminantes", "urbanas."],
            explanation: "Sintaxis declarativa de rigor técnico y expositivo."
          },
          {
            id: "es-u16-q18",
            type: "matching",
            prompt: "Empareja los verbos de cambio de estado medioambiental:",
            pairs: [
              { native: "Extinguirse", english: "To become extinct", left: "Extinguirse", right: "Desaparición total e irreversible de una especie" },
              { native: "Regenerarse", english: "To regenerate", left: "Regenerarse", right: "Recuperación natural de un bosque o hábitat" },
              { native: "Contaminar", english: "To pollute / contaminate", left: "Contaminar", right: "Introducir agentes nocivos en un medio físico" },
              { native: "Mitigar", english: "To mitigate / alleviate", left: "Mitigar", right: "Atenuar o suavizar la gravedad de un impacto" }
            ]
          },
          {
            id: "es-u16-q19",
            type: "fill_blank",
            sentence: "¿Por qué no me llamaste? Te ___ ayudado con el experimento con mucho gusto.",
            missingWord: "habría",
            options: ["habría", "habré", "haya", "he"],
            correctAnswer: "habría",
            explanation: "Disposición en el pasado frustrada por falta de aviso: 'te habría ayudado'."
          },
          {
            id: "es-u16-q20",
            type: "multiple_choice",
            prompt: "Identifica la frase que respeta las normas de corrección académica:",
            options: [
              "Si hubiera tenido presupuesto, habría comprado el microscopio electrónico.",
              "Si tendría dinero, compraría el microscopio.",
              "Si hubiera tenido dinero, compraré el microscopio.",
              "Si tendré dinero, he comprado el microscopio."
            ],
            correctAnswer: "Si hubiera tenido presupuesto, habría comprado el microscopio electrónico.",
            explanation: "Estructura contrafáctica canónica correcta: Si + pluscuamperfecto de subjuntivo ('hubiera tenido') + condicional compuesto ('habría comprado')."
          }
        ]
      }
    ]
  }
];
