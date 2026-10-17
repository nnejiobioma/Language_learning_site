// =========================================================================
// MCER / ELE Spanish Curriculum — Instituto Cervantes Aligned
// Block 2: 🟡 Nivel A2: Plataforma (Elemental) — Units 5 to 8
// Exactly 20 Questions per Unit = 80 Questions Total
// =========================================================================

export const spanishA2Units = [
  // =========================================================================
  // Unit 5: Historias del Pasado (Stories of the Past)
  // =========================================================================
  {
    id: "es-unit-5",
    unitId: "es-unit-5",
    unitNumber: 5,
    level: "Nivel A2: Plataforma (Elemental)",
    title: "Unidad 5: Historias del Pasado (Stories of the Past)",
    subtitle: "Contraste entre Pretérito Indefinido y Pretérito Imperfecto, anécdotas y hechos históricos.",
    icon: "Clock",
    color: "#f59e0b",
    lessons: [
      {
        id: "es-u5-l1",
        title: "Lección 1: Narración en Pasado: Indefinido vs Imperfecto",
        description: "Domina la distinción entre acciones puntuales concluidas (indefinido) y descripciones o hábitos pasados (imperfecto).",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u5-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma del pretérito indefinido de 'hablar' para 'Yo'?",
            options: ["Hablé", "Hablaba", "Hablo", "Hablaré"],
            correctAnswer: "Hablé",
            explanation: "El pretérito indefinido regular de la 1ª persona singular para verbos en -ar termina en -é: 'yo hablé'."
          },
          {
            id: "es-u5-q2",
            type: "multiple_choice",
            prompt: "¿Qué tiempo verbal describe acciones habituales o repetitivas en el pasado ('Cuando era niño, siempre...')?",
            options: ["Pretérito Imperfecto", "Pretérito Indefinido", "Presente de Subjuntivo", "Futuro Simple"],
            correctAnswer: "Pretérito Imperfecto",
            explanation: "El pretérito imperfecto expresa acciones habituales, descripciones de personas, lugares o estados continuos en el pasado."
          },
          {
            id: "es-u5-q3",
            type: "fill_blank",
            sentence: "Ayer a las siete de la tarde ___ una fuerte tormenta.",
            missingWord: "empezó",
            options: ["empezó", "empezaba", "empieza", "empezado"],
            correctAnswer: "empezó",
            explanation: "Acción puntual completada en un momento determinado del pasado ('ayer a las siete') requiere indefinido."
          },
          {
            id: "es-u5-q4",
            type: "matching",
            prompt: "Empareja los marcadores temporales con el tiempo verbal correspondiente:",
            pairs: [
              { native: "Ayer / Anoche", english: "Yesterday / Last night -> Indefinido", left: "Ayer / El año pasado", right: "Pretérito Indefinido" },
              { native: "Siempre / Todos los días", english: "Always / Everyday -> Imperfecto", left: "Siempre / De niño", right: "Pretérito Imperfecto" },
              { native: "De repente / En ese momento", english: "Suddenly / At that moment -> Indefinido", left: "De repente", right: "Pretérito Indefinido" },
              { native: "Mientras", english: "While (simultaneous background) -> Imperfecto", left: "Mientras", right: "Pretérito Imperfecto" }
            ]
          },
          {
            id: "es-u5-q5",
            type: "multiple_choice",
            prompt: "¿Cuáles son los únicos tres verbos irregulares en el pretérito imperfecto?",
            options: ["Ser, ir, ver", "Tener, estar, hacer", "Poder, poner, saber", "Decir, querer, venir"],
            correctAnswer: "Ser, ir, ver",
            explanation: "En imperfecto solo son irregulares 'ser' (era), 'ir' (iba) y 'ver' (veía)."
          },
          {
            id: "es-u5-q6",
            type: "scramble",
            prompt: "Ordena las palabras para formar una frase que combina acción e interrupción en el pasado:",
            tokens: ["Yo", "dormía", "cuando", "sonó", "el", "teléfono."],
            correctTokens: ["Yo", "dormía", "cuando", "sonó", "el", "teléfono."],
            explanation: "La acción en desarrollo va en imperfecto ('dormía') y la acción repentina que interrumpe en indefinido ('sonó')."
          },
          {
            id: "es-u5-q7",
            type: "fill_blank",
            sentence: "Cuando nosotros éramos jóvenes, ___ mucho en bicicleta.",
            missingWord: "montábamos",
            options: ["montábamos", "montamos", "montaremos", "montan"],
            correctAnswer: "montábamos",
            explanation: "Hábito reiterado en el pasado en una etapa vital ('cuando éramos jóvenes') pide imperfecto."
          },
          {
            id: "es-u5-q8",
            type: "multiple_choice",
            prompt: "¿Cuál es el pretérito indefinido irregular de 'hacer' para 'Él / Ella / Usted'?",
            options: ["Hizo", "Hizó", "Hacia", "Hicieron"],
            correctAnswer: "Hizo",
            explanation: "El verbo 'hacer' en 3ª persona del singular cambia 'c' por 'z' para mantener el sonido /θ/ o /s/: 'él hizo'."
          },
          {
            id: "es-u5-q9",
            type: "matching",
            prompt: "Empareja los verbos irregulares en indefinido con su raíz:",
            pairs: [
              { native: "Tener -> tuv-", english: "to have past stem", left: "Tener", right: "tuv-" },
              { native: "Estar -> estuv-", english: "to be past stem", left: "Estar", right: "estuv-" },
              { native: "Poner -> pus-", english: "to put past stem", left: "Poner", right: "pus-" },
              { native: "Saber -> sup-", english: "to know past stem", left: "Saber", right: "sup-" }
            ]
          },
          {
            id: "es-u5-q10",
            type: "multiple_choice",
            prompt: "En la frase: 'La casa era blanca y tenía dos pisos', ¿por qué se utiliza el imperfecto?",
            options: [
              "Porque es una descripción estática del pasado",
              "Porque es una acción que comenzó ayer",
              "Porque es una orden cortés",
              "Porque es una duda hipotética"
            ],
            correctAnswer: "Porque es una descripción estática del pasado",
            explanation: "Las descripciones físicas, psicológicas y del entorno en el pasado siempre van en pretérito imperfecto."
          },
          {
            id: "es-u5-q11",
            type: "fill_blank",
            sentence: "En 1492, Cristóbal Colón ___ a América.",
            missingWord: "llegó",
            options: ["llegó", "llegaba", "llega", "llegará"],
            correctAnswer: "llegó",
            explanation: "Hecho histórico fijado en un año exacto concluido: pretérito indefinido ('llegó')."
          },
          {
            id: "es-u5-q12",
            type: "scramble",
            prompt: "Ordena las palabras para formar una oración biográfica:",
            tokens: ["Frida", "Kahlo", "nació", "en", "México", "en", "1907."],
            correctTokens: ["Frida", "Kahlo", "nació", "en", "México", "en", "1907."],
            explanation: "Estructura canónica de fechas biográficas con pretérito indefinido."
          },
          {
            id: "es-u5-q13",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma del pretérito imperfecto de 'ir' para 'Nosotros'?",
            options: ["Íbamos", "Fuimos", "Ibamos", "Vamos"],
            correctAnswer: "Íbamos",
            explanation: "'Íbamos' lleva tilde en la 'í' por ser palabra esdrújula."
          },
          {
            id: "es-u5-q14",
            type: "audio_listen",
            prompt: "Escucha la narración histórica y selecciona el verbo correcto:",
            audioText: "El año pasado viajé por primera vez a los Andes peruanos.",
            options: ["viajé", "viajaba", "viajo", "viajaré"],
            correctAnswer: "viajé",
            explanation: "'El año pasado viajé' señala un evento completado de viaje."
          },
          {
            id: "es-u5-q15",
            type: "multiple_choice",
            prompt: "Completa el contraste: 'Mientras mi madre ___ la cena, mi padre ___ del trabajo.'",
            options: [
              "cocinaba / llegó",
              "cocinó / llegaba",
              "cocina / llega",
              "cocinaba / llegaba"
            ],
            correctAnswer: "cocinaba / llegó",
            explanation: "La acción continua de fondo se expresa en imperfecto ('cocinaba') y el suceso puntual en indefinido ('llegó')."
          },
          {
            id: "es-u5-q16",
            type: "fill_blank",
            sentence: "El sábado pasado mis amigos y yo ___ al cine.",
            missingWord: "fuimos",
            options: ["fuimos", "íbamos", "vamos", "fueron"],
            correctAnswer: "fuimos",
            explanation: "'Mis amigos y yo' (nosotros) en pretérito indefinido del verbo ir es 'fuimos'."
          },
          {
            id: "es-u5-q17",
            type: "matching",
            prompt: "Empareja las formas del verbo 'ser' en pretérito imperfecto:",
            pairs: [
              { native: "Yo", english: "I was", left: "Yo", right: "era" },
              { native: "Tú", english: "You were", left: "Tú", right: "eras" },
              { native: "Nosotros", english: "We were", left: "Nosotros", right: "éramos" },
              { native: "Ellos", english: "They were", left: "Ellos", right: "eran" }
            ]
          },
          {
            id: "es-u5-q18",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma del pretérito indefinido de 'decir' para 'Ellos'?",
            options: ["Dijeron", "Dijieron", "Decían", "Dirán"],
            correctAnswer: "Dijeron",
            explanation: "En los verbos con raíz en -j (como decir -> dij-), la terminación de 3ª persona plural es -eron (no -ieron): 'dijeron'."
          },
          {
            id: "es-u5-q19",
            type: "scramble",
            prompt: "Ordena los elementos para describir el clima de ayer:",
            tokens: ["Ayer", "hacía", "mucho", "frío", "por", "la", "mañana."],
            correctTokens: ["Ayer", "hacía", "mucho", "frío", "por", "la", "mañana."],
            explanation: "El estado atmosférico continuo o descriptivo en el pasado se formula con imperfecto ('hacía frío')."
          },
          {
            id: "es-u5-q20",
            type: "multiple_choice",
            prompt: "¿Qué significa 'conocí a Pedro en Madrid en 2020'?",
            options: [
              "Me presentaron o me encontré por primera vez con Pedro en 2020",
              "Ya era muy amigo de Pedro desde hace años",
              "Solía visitar a Pedro a menudo",
              "No sabía quién era Pedro"
            ],
            correctAnswer: "Me presentaron o me encontré por primera vez con Pedro en 2020",
            explanation: "En pretérito indefinido, 'conocer' adquiere el valor puntual de 'encontrarse con alguien por primera vez'."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 6: Planes y Proyectos (Plans and Projects)
  // =========================================================================
  {
    id: "es-unit-6",
    unitId: "es-unit-6",
    unitNumber: 6,
    level: "Nivel A2: Plataforma (Elemental)",
    title: "Unidad 6: Planes y Proyectos (Plans and Projects)",
    subtitle: "El futuro inmediato (ir a + infinitivo), marcadores temporales y proyectos personales.",
    icon: "Compass",
    color: "#f59e0b",
    lessons: [
      {
        id: "es-u6-l1",
        title: "Lección 1: Futuro Próximo, Horarios y Planes",
        description: "Aprende a formular intenciones con 'ir a + infinitivo', organizar agendas, viajes y usar marcadores temporales de futuro.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u6-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la estructura gramatical de la perífrasis de futuro inmediato?",
            options: ["Ir (en presente) + a + infinitivo", "Ir + gerundio", "Tener + que + infinitivo", "Estar + participio"],
            correctAnswer: "Ir (en presente) + a + infinitivo",
            explanation: "El futuro perifrástico o inmediato se forma con el presente del verbo ir + preposición 'a' + infinitivo."
          },
          {
            id: "es-u6-q2",
            type: "fill_blank",
            sentence: "Este fin de semana nosotros ___ a descansar en el campo.",
            missingWord: "vamos",
            options: ["vamos", "va", "van", "voy"],
            correctAnswer: "vamos",
            explanation: "Con el sujeto 'nosotros' se conjuga: 'vamos a descansar'."
          },
          {
            id: "es-u6-q3",
            type: "scramble",
            prompt: "Ordena las palabras para formular una intención de estudio:",
            tokens: ["Mañana", "voy", "a", "estudiar", "para", "el", "examen."],
            correctTokens: ["Mañana", "voy", "a", "estudiar", "para", "el", "examen."],
            explanation: "Estructura correcta: Temporal + verbo auxiliar (voy) + a + verbo principal en infinitivo (estudiar) + complemento."
          },
          {
            id: "es-u6-q4",
            type: "matching",
            prompt: "Empareja los marcadores temporales de futuro con su traducción:",
            pairs: [
              { native: "Pasado mañana", english: "The day after tomorrow", left: "Pasado mañana", right: "The day after tomorrow" },
              { native: "El mes que viene", english: "Next month", left: "El mes que viene", right: "Next month" },
              { native: "Dentro de dos semanas", english: "In two weeks", left: "Dentro de dos semanas", right: "In two weeks" },
              { native: "Pronto", english: "Soon", left: "Pronto", right: "Soon" }
            ]
          },
          {
            id: "es-u6-q5",
            type: "multiple_choice",
            prompt: "¿Qué opción expresa un plan seguro o intención programada?",
            options: ["El próximo viernes voy a viajar a Sevilla.", "Ayer viajé a Sevilla.", "Viajaba a Sevilla frecuentemente.", "Ojalá viaje a Sevilla."],
            correctAnswer: "El próximo viernes voy a viajar a Sevilla.",
            explanation: "'El próximo viernes voy a viajar...' expresa un plan futuro ya organizado o decidido."
          },
          {
            id: "es-u6-q6",
            type: "fill_blank",
            sentence: "¿Qué vas a ___ después de clase?",
            missingWord: "hacer",
            options: ["hacer", "haces", "hiciste", "hecho"],
            correctAnswer: "hacer",
            explanation: "Tras la preposición 'a' en la perífrasis obligatoriamente se utiliza infinitivo ('hacer')."
          },
          {
            id: "es-u6-q7",
            type: "multiple_choice",
            prompt: "Si vas a viajar en tren, ¿dónde compras el billete si no lo haces por internet?",
            options: ["En la taquilla o ventanilla de la estación", "En la farmacia", "En la biblioteca", "En la panadería"],
            correctAnswer: "En la taquilla o ventanilla de la estación",
            explanation: "Los billetes físicos se compran en la taquilla (o ventanilla) de la estación de tren o autobús."
          },
          {
            id: "es-u6-q8",
            type: "matching",
            prompt: "Empareja el vocabulario de viajes con su definición:",
            pairs: [
              { native: "Andén", english: "Platform where train arrives", left: "El andén", right: "Platform" },
              { native: "Vuelo de ida y vuelta", english: "Round-trip flight", left: "Ida y vuelta", right: "Round trip" },
              { native: "Equipaje de mano", english: "Carry-on luggage", left: "Equipaje de mano", right: "Carry-on" },
              { native: "Hacer transbordo", english: "To transfer / change train or flight", left: "Hacer transbordo", right: "To transfer / switch" }
            ]
          },
          {
            id: "es-u6-q9",
            type: "scramble",
            prompt: "Ordena las palabras para preguntar por un horario de salida:",
            tokens: ["¿A", "qué", "hora", "sale", "el", "primer", "tren?"],
            correctTokens: ["¿A", "qué", "hora", "sale", "el", "primer", "tren?"],
            explanation: "Fórmula interrogativa: ¿A qué hora sale + sujeto?"
          },
          {
            id: "es-u6-q10",
            type: "fill_blank",
            sentence: "Ellos van a ___ un hotel cerca de la playa.",
            missingWord: "reservar",
            options: ["reservar", "reservan", "reservado", "reservaron"],
            correctAnswer: "reservar",
            explanation: "Forma infinitiva tras 'van a'."
          },
          {
            id: "es-u6-q11",
            type: "multiple_choice",
            prompt: "¿Cuál es la respuesta adecuada para confirmar una cita profesional: '¿Nos vemos el martes a las 10:00?'?",
            options: [
              "Perfecto, nos vemos el martes a esa hora.",
              "Ayer estuve allí.",
              "No me gusta el martes pasado.",
              "Yo soy médico."
            ],
            correctAnswer: "Perfecto, nos vemos el martes a esa hora.",
            explanation: "Fórmula estándar de confirmación de acuerdos de calendario."
          },
          {
            id: "es-u6-q12",
            type: "multiple_choice",
            prompt: "¿Cuál de estos verbos expresa la intención de comenzar un hábito futuro?",
            options: ["Voy a empezar a", "Dejé de", "Suelo", "Acabo de"],
            correctAnswer: "Voy a empezar a",
            explanation: "'Empezar a + infinitivo' es la perífrasis incoativa para iniciar una acción."
          },
          {
            id: "es-u6-q13",
            type: "audio_listen",
            prompt: "Escucha el anuncio de viaje y elige el destino mencionado:",
            audioText: "Atención señores pasajeros: el vuelo con destino a Valencia va a despegar por la puerta cuatro.",
            options: ["Valencia", "Barcelona", "Madrid", "Bilbao"],
            correctAnswer: "Valencia",
            explanation: "El anuncio especifica claramente 'destino a Valencia'."
          },
          {
            id: "es-u6-q14",
            type: "fill_blank",
            sentence: "El año que viene mi hermana va a ___ en la universidad.",
            missingWord: "ingresar",
            options: ["ingresar", "ingreso", "ingresó", "ingresaba"],
            correctAnswer: "ingresar",
            explanation: "Infinitivo tras perífrasis de futuro."
          },
          {
            id: "es-u6-q15",
            type: "matching",
            prompt: "Empareja las preguntas con sus respuestas lógicas de agenda:",
            pairs: [
              { native: "¿Qué vas a hacer este verano?", english: "What will you do this summer?", left: "¿Qué planes tienes?", right: "Voy a viajar a México." },
              { native: "¿Cuándo es la reunión?", english: "When is the meeting?", left: "¿Cuándo nos vemos?", right: "El jueves por la mañana." },
              { native: "¿Cómo vas a ir al aeropuerto?", english: "How will you go to airport?", left: "¿En qué vas?", right: "Voy a tomar el metro." },
              { native: "¿Cuánto tiempo te vas a quedar?", english: "How long staying?", left: "¿Cuánto dura el viaje?", right: "Unos diez días." }
            ]
          },
          {
            id: "es-u6-q16",
            type: "scramble",
            prompt: "Ordena los elementos para expresar un plan en negativo:",
            tokens: ["Nosotros", "no", "vamos", "a", "trabajar", "el", "domingo."],
            correctTokens: ["Nosotros", "no", "vamos", "a", "trabajar", "el", "domingo."],
            explanation: "La partícula negativa 'no' precede al verbo auxiliar conjugado ('no vamos a trabajar')."
          },
          {
            id: "es-u6-q17",
            type: "multiple_choice",
            prompt: "¿Qué significa 'dentro de poco'?",
            options: ["En un breve espacio de tiempo futuro", "Hace mucho tiempo", "Nunca", "En este preciso segundo"],
            correctAnswer: "En un breve espacio de tiempo futuro",
            explanation: "'Dentro de poco' es sinónimo de 'pronto' o 'en breve'."
          },
          {
            id: "es-u6-q18",
            type: "fill_blank",
            sentence: "¿Tú ___ a venir a la fiesta de graduación?",
            missingWord: "vas",
            options: ["vas", "va", "voy", "vamos"],
            correctAnswer: "vas",
            explanation: "Conjunción de 2ª persona singular 'tú vas'."
          },
          {
            id: "es-u6-q19",
            type: "multiple_choice",
            prompt: "Al hablar de horarios públicos (trenes, aviones, comercios), ¿qué tiempo del presente se usa a menudo con valor de futuro?",
            options: [
              "Presente de indicativo ('El tren sale a las diez')",
              "Pretérito perfecto compuesto",
              "Pretérito pluscuamperfecto",
              "Condicional compuesto"
            ],
            correctAnswer: "Presente de indicativo ('El tren sale a las diez')",
            explanation: "El presente de indicativo con marcador temporal se usa habitualmente para horarios fijados o eventos programados."
          },
          {
            id: "es-u6-q20",
            type: "matching",
            prompt: "Empareja los documentos necesarios para viajar con su uso:",
            pairs: [
              { native: "Pasaporte en regla", english: "Valid passport", left: "El pasaporte", right: "Identificación internacional" },
              { native: "Tarjeta de embarque", english: "Boarding pass", left: "Tarjeta de embarque", right: "Acceso al avión" },
              { native: "Seguro de viaje", english: "Travel insurance", left: "Póliza médica", right: "Cobertura sanitaria" },
              { native: "Visado de turista", english: "Tourist visa", left: "El visado", right: "Permiso de entrada al país" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 7: Cuerpo y Mente (Body and Mind)
  // =========================================================================
  {
    id: "es-unit-7",
    unitId: "es-unit-7",
    unitNumber: 7,
    level: "Nivel A2: Plataforma (Elemental)",
    title: "Unidad 7: Cuerpo y Mente (Body and Mind)",
    subtitle: "Imperativo afirmativo (tú, vosotros), partes del cuerpo, síntomas y consejos de salud.",
    icon: "Heart",
    color: "#f59e0b",
    lessons: [
      {
        id: "es-u7-l1",
        title: "Lección 1: Salud, Partes del Cuerpo e Imperativo",
        description: "Aprende a describir dolores y síntomas médicos ('me duele/duelen'), dar consejos saludables y utilizar el imperativo afirmativo.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u7-q1",
            type: "multiple_choice",
            prompt: "¿Cuál es la forma del imperativo afirmativo del verbo 'beber' para 'tú'?",
            options: ["Bebe", "Bebas", "Bebes", "Beba"],
            correctAnswer: "Bebe",
            explanation: "El imperativo afirmativo regular de 'tú' coincide con la 3ª persona del singular del presente de indicativo: 'tú bebe'."
          },
          {
            id: "es-u7-q2",
            type: "fill_blank",
            sentence: "Me ___ mucho la cabeza hoy.",
            missingWord: "duele",
            options: ["duele", "duelen", "dolor", "doler"],
            correctAnswer: "duele",
            explanation: "'La cabeza' es singular, por tanto el verbo doler concuerda en 3ª persona del singular: 'me duele'."
          },
          {
            id: "es-u7-q3",
            type: "fill_blank",
            sentence: "Después de correr me ___ las piernas.",
            missingWord: "duelen",
            options: ["duelen", "duele", "dolieron", "duelo"],
            correctAnswer: "duelen",
            explanation: "'Las piernas' es un sujeto plural, requiriendo 'me duelen'."
          },
          {
            id: "es-u7-q4",
            type: "matching",
            prompt: "Empareja las partes del cuerpo con su traducción:",
            pairs: [
              { native: "La garganta", english: "Throat", left: "La garganta", right: "Throat" },
              { native: "La espalda", english: "Back", left: "La espalda", right: "Back" },
              { native: "El estómago / La barriga", english: "Stomach", left: "El estómago", right: "Stomach" },
              { native: "El tobillo", english: "Ankle", left: "El tobillo", right: "Ankle" }
            ]
          },
          {
            id: "es-u7-q5",
            type: "multiple_choice",
            prompt: "¿Cómo se forma el imperativo afirmativo regular para 'vosotros'?",
            options: [
              "Cambiando la -r final del infinitivo por una -d (hablar -> hablad)",
              "Añadiendo -en al infinitivo",
              "Igual que el presente de subjuntivo",
              "Quitando la primera vocal"
            ],
            correctAnswer: "Cambiando la -r final del infinitivo por una -d (hablar -> hablad)",
            explanation: "La regla de oro del imperativo de 'vosotros' es sustituir la -r del infinitivo por -d: comer -> comed; vivir -> vivid."
          },
          {
            id: "es-u7-q6",
            type: "scramble",
            prompt: "Ordena las palabras para dar un consejo médico con imperativo:",
            tokens: ["Toma", "este", "medicamento", "cada", "ocho", "horas."],
            correctTokens: ["Toma", "este", "medicamento", "cada", "ocho", "horas."],
            explanation: "Imperativo 'Toma' + objeto directo + pauta temporal."
          },
          {
            id: "es-u7-q7",
            type: "multiple_choice",
            prompt: "¿Cuál es el imperativo afirmativo irregular de 'hacer' para 'tú'?",
            options: ["Haz", "Hace", "Hagas", "Haga"],
            correctAnswer: "Haz",
            explanation: "El imperativo de 'tú' para el verbo hacer es irregular monosílabo: 'haz'."
          },
          {
            id: "es-u7-q8",
            type: "matching",
            prompt: "Empareja los imperativos irregulares para 'tú':",
            pairs: [
              { native: "Poner", english: "Put (tú)", left: "Poner", right: "Pon" },
              { native: "Salir", english: "Leave / Go out (tú)", left: "Salir", right: "Sal" },
              { native: "Tener", english: "Have (tú)", left: "Tener", right: "Ten" },
              { native: "Venir", english: "Come (tú)", left: "Venir", right: "Ven" }
            ]
          },
          {
            id: "es-u7-q9",
            type: "fill_blank",
            sentence: "Para estar en forma, ___ deporte regularmente.",
            missingWord: "haz",
            options: ["haz", "haces", "haga", "haciendo"],
            correctAnswer: "haz",
            explanation: "Imperativo afirmativo informal 'haz'."
          },
          {
            id: "es-u7-q10",
            type: "multiple_choice",
            prompt: "¿Qué síntoma describe 'tengo tos y fiebre alta de 39 grados'?",
            options: ["Gripe o infección respiratoria", "Una quemadura de sol", "Una fractura en el pie", "Hambre"],
            correctAnswer: "Gripe o infección respiratoria",
            explanation: "La combinación de fiebre elevada y tos es el cuadro típico de un estado gripal."
          },
          {
            id: "es-u7-q11",
            type: "scramble",
            prompt: "Ordena las palabras para expresar un malestar físico:",
            tokens: ["Me", "siento", "mareado", "y", "tengo", "náuseas."],
            correctTokens: ["Me", "siento", "mareado", "y", "tengo", "náuseas."],
            explanation: "Construcción habitual: sentirse + adjetivo + y + tener + síntoma."
          },
          {
            id: "es-u7-q12",
            type: "audio_listen",
            prompt: "Escucha la recomendación del doctor y elige la acción indicada:",
            audioText: "Guarda reposo en cama durante tres días y bebe mucha agua.",
            options: ["Guardar reposo y beber agua", "Ir al gimnasio inmediatamente", "Comer comida chatarra", "Caminar 20 kilómetros"],
            correctAnswer: "Guardar reposo y beber agua",
            explanation: "La recomendación prescribe expresamente reposo y abundante hidratación."
          },
          {
            id: "es-u7-q13",
            type: "multiple_choice",
            prompt: "En el imperativo con pronombres reflexivos o de objeto, ¿dónde se colocan los pronombres?",
            options: [
              "Unidos al final del verbo en una sola palabra (enclíticos: 'lávate')",
              "Antes del verbo siempre ('te lava')",
              "En medio del verbo",
              "No se pueden usar pronombres con imperativo"
            ],
            correctAnswer: "Unidos al final del verbo en una sola palabra (enclíticos: 'lávate')",
            explanation: "En imperativo afirmativo los pronombres se posponen obligatoriamente unidos al verbo: lávate, cómetelo, escúchame."
          },
          {
            id: "es-u7-q14",
            type: "fill_blank",
            sentence: "Hijos, ___ las manos antes de comer.",
            missingWord: "lavaos",
            options: ["lavaos", "lavad", "lávense", "lavas"],
            correctAnswer: "lavaos",
            explanation: "Al añadir 'os' a la forma 'lavad' de vosotros, se elide la 'd': lavad + os = 'lavaos'."
          },
          {
            id: "es-u7-q15",
            type: "matching",
            prompt: "Empareja los remedios con las dolencias correspondientes:",
            pairs: [
              { native: "Dolor de cabeza", english: "Headache", left: "Cefalea / Jaqueca", right: "Tomar un analgésico" },
              { native: "Corte en el dedo", english: "Cut on finger", left: "Herida leve", right: "Poner una tirita" },
              { native: "Quemadura solar", english: "Sunburn", left: "Piel enrojecida", right: "Aplicar crema hidratante" },
              { native: "Esguince de tobillo", english: "Sprained ankle", left: "Hinchazón articular", right: "Poner hielo y vendar" }
            ]
          },
          {
            id: "es-u7-q16",
            type: "multiple_choice",
            prompt: "¿Cuál es el imperativo de 'ir' para 'tú'?",
            options: ["Ve", "Va", "Vaya", "Vete"],
            correctAnswer: "Ve",
            explanation: "El imperativo afirmativo simple del verbo 'ir' para tú es 've' (o 'vete' en su forma reflexiva irse)."
          },
          {
            id: "es-u7-q17",
            type: "scramble",
            prompt: "Ordena las palabras para pedir cita médica en recepción:",
            tokens: ["Quisiera", "pedir", "cita", "con", "el", "médico", "de", "cabecera."],
            correctTokens: ["Quisiera", "pedir", "cita", "con", "el", "médico", "de", "cabecera."],
            explanation: "Fórmula de cortesía educada con 'quisiera'."
          },
          {
            id: "es-u7-q18",
            type: "fill_blank",
            sentence: "Por favor, doctor, ¿me puede dar una ___ para la farmacia?",
            missingWord: "receta",
            options: ["receta", "factura", "carta", "cuenta"],
            correctAnswer: "receta",
            explanation: "El documento médico que prescribe fármacos es la 'receta médica'."
          },
          {
            id: "es-u7-q19",
            type: "multiple_choice",
            prompt: "¿Cuál es el imperativo de 'decir' para 'tú'?",
            options: ["Di", "Dice", "Diga", "Dices"],
            correctAnswer: "Di",
            explanation: "El imperativo irregular de 'decir' para 'tú' es 'di' ('Dime la verdad')."
          },
          {
            id: "es-u7-q20",
            type: "multiple_choice",
            prompt: "¿Qué estructura se usa para dar recomendaciones generales impersonales sobre hábitos saludables?",
            options: [
              "Hay que + infinitivo ('Hay que dormir 8 horas')",
              "Yo tuve que + infinitivo",
              "Nosotros quisimos",
              "Había una vez"
            ],
            correctAnswer: "Hay que + infinitivo ('Hay que dormir 8 horas')",
            explanation: "'Hay que + infinitivo' es la perífrasis impersonal por excelencia para pautas y consejos generales."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // Unit 8: De Compras y Viajes (Shopping and Travel)
  // =========================================================================
  {
    id: "es-unit-8",
    unitId: "es-unit-8",
    unitNumber: 8,
    level: "Nivel A2: Plataforma (Elemental)",
    title: "Unidad 8: De Compras y Viajes (Shopping and Travel)",
    subtitle: "Pronombres de objeto directo e indirecto (lo, la, los, las, le, les), compras y reservas.",
    icon: "ShoppingBag",
    color: "#f59e0b",
    lessons: [
      {
        id: "es-u8-l1",
        title: "Lección 1: Pronombres de Objeto, Tiendas y Hoteles",
        description: "Domina el uso de los pronombres de complemento directo (OD) e indirecto (OI), la sustitución combinada y el lenguaje de compras y hostelería.",
        xp: 20,
        completed: false,
        questions: [
          {
            id: "es-u8-q1",
            type: "multiple_choice",
            prompt: "¿Cuáles son los pronombres de Objeto Directo (OD) de tercera persona?",
            options: ["Lo, la, los, las", "Le, les", "Me, te, nos, os", "Se, sí, consigo"],
            correctAnswer: "Lo, la, los, las",
            explanation: "Los pronombres de complemento directo en 3ª persona concuerdan en género y número: lo (masc. sing.), la (fem. sing.), los (masc. pl.), las (fem. pl.)."
          },
          {
            id: "es-u8-q2",
            type: "fill_blank",
            sentence: "¿Has comprado la camisa nueva? Sí, ya ___ he comprado.",
            missingWord: "la",
            options: ["la", "lo", "le", "las"],
            correctAnswer: "la",
            explanation: "'La camisa' es femenino singular, sustituido por el pronombre 'la'."
          },
          {
            id: "es-u8-q3",
            type: "multiple_choice",
            prompt: "¿Cuáles son los pronombres de Objeto Indirecto (OI) de tercera persona?",
            options: ["Le, les", "Lo, la, los, las", "Mío, tuyo, suyo", "Este, ese, aquel"],
            correctAnswer: "Le, les",
            explanation: "El objeto indirecto de tercera persona es 'le' (singular) y 'les' (plural), invariables en cuanto al género."
          },
          {
            id: "es-u8-q4",
            type: "fill_blank",
            sentence: "¿Escribiste a tus abuelos? Sí, ___ escribí una carta ayer.",
            missingWord: "les",
            options: ["les", "los", "las", "le"],
            correctAnswer: "les",
            explanation: "'A tus abuelos' es destinatario (objeto indirecto plural) -> 'les'."
          },
          {
            id: "es-u8-q5",
            type: "matching",
            prompt: "Empareja la frase con su equivalente con pronombre de OD:",
            pairs: [
              { native: "Compro el pan", english: "I buy the bread -> I buy it", left: "Compro el pan", right: "Lo compro" },
              { native: "Veo las películas", english: "I watch the movies -> I watch them", left: "Veo las películas", right: "Las veo" },
              { native: "Leo el libro", english: "I read the book -> I read it", left: "Leo el libro", right: "Lo leo" },
              { native: "Bebo agua", english: "I drink water -> I drink it", left: "Bebo la limonada", right: "La bebo" }
            ]
          },
          {
            id: "es-u8-q6",
            type: "multiple_choice",
            prompt: "Cuando coinciden dos pronombres de 3ª persona (le/les + lo/la/los/las), ¿en qué se transforma 'le/les'?",
            options: ["Se", "Me", "Te", "Nos"],
            correctAnswer: "Se",
            explanation: "Por eufonía, 'le lo' o 'les la' se transforman en 'se lo' o 'se la' ('Se lo dije')."
          },
          {
            id: "es-u8-q7",
            type: "scramble",
            prompt: "Ordena los pronombres y el verbo para decir 'I give it to him':",
            tokens: ["Yo", "se", "lo", "doy", "ahora", "mismo."],
            correctTokens: ["Yo", "se", "lo", "doy", "ahora", "mismo."],
            explanation: "Orden de pronombres: OI transformado ('se') + OD ('lo') + verbo ('doy')."
          },
          {
            id: "es-u8-q8",
            type: "multiple_choice",
            prompt: "En una tienda de ropa, ¿cómo preguntas al dependiente por tu tamaño adecuado?",
            options: ["¿Tiene este pantalón en la talla 40?", "¿Cuánto pesa este abrigo?", "¿A qué hora cierra el tren?", "¿Dónde está la autopista?"],
            correctAnswer: "¿Tiene este pantalón en la talla 40?",
            explanation: "Para la ropa se pregunta por la 'talla' (para calzado, 'número')."
          },
          {
            id: "es-u8-q9",
            type: "fill_blank",
            sentence: "¿Dónde están los ___ para probarme esta chaqueta?",
            missingWord: "probadores",
            options: ["probadores", "mostradores", "cajeros", "escaparates"],
            correctAnswer: "probadores",
            explanation: "El espacio para probarse prendas en una tienda de ropa son los 'probadores'."
          },
          {
            id: "es-u8-q10",
            type: "matching",
            prompt: "Empareja el vocabulario de hostelería con su descripción:",
            pairs: [
              { native: "Habitación individual", english: "Single room", left: "Habitación individual", right: "Para un solo huésped" },
              { native: "Media pensión", english: "Half board", left: "Media pensión", right: "Alojamiento, desayuno y una comida" },
              { native: "Pensión completa", english: "Full board", left: "Pensión completa", right: "Desayuno, almuerzo y cena incluidos" },
              { native: "Hacer el check-out", english: "Check out", left: "Dejar la habitación", right: "Salida formal del hotel" }
            ]
          },
          {
            id: "es-u8-q11",
            type: "scramble",
            prompt: "Ordena las palabras para solicitar la cuenta en un restaurante:",
            tokens: ["Camarero,", "¿nos", "trae", "la", "cuenta,", "por", "favor?"],
            correctTokens: ["Camarero,", "¿nos", "trae", "la", "cuenta,", "por", "favor?"],
            explanation: "Fórmula cortés estándar en restaurantes hispanohablantes."
          },
          {
            id: "es-u8-q12",
            type: "audio_listen",
            prompt: "Escucha el diálogo en la recepción del hotel y selecciona el tipo de habitación solicitada:",
            audioText: "Buenas tardes, tenemos una reserva para una habitación doble con vistas al mar.",
            options: ["Habitación doble con vistas al mar", "Habitación individual interior", "Suite presidencial con jardín", "Cama supletoria en el pasillo"],
            correctAnswer: "Habitación doble con vistas al mar",
            explanation: "El cliente especifica claramente 'habitación doble con vistas al mar'."
          },
          {
            id: "es-u8-q13",
            type: "multiple_choice",
            prompt: "Con verbos conjugados que llevan un infinitivo (perífrasis como 'querer comprar'), ¿dónde se pueden colocar los pronombres?",
            options: [
              "Antes del verbo conjugado O unidos al final del infinitivo",
              "Únicamente antes del verbo conjugado",
              "Únicamente después del infinitivo",
              "Entre el verbo y el infinitivo"
            ],
            correctAnswer: "Antes del verbo conjugado O unidos al final del infinitivo",
            explanation: "Hay doble posibilidad: 'Lo quiero comprar' o 'Quiero comprarlo'. Ambas son 100% correctas."
          },
          {
            id: "es-u8-q14",
            type: "fill_blank",
            sentence: "¿Le diste el regalo a María? Sí, ___ lo di esta mañana.",
            missingWord: "se",
            options: ["se", "le", "la", "me"],
            correctAnswer: "se",
            explanation: "Al confluir con 'lo', el pronombre de indirecto 'le' se convierte en 'se'."
          },
          {
            id: "es-u8-q15",
            type: "multiple_choice",
            prompt: "¿Cómo se llama el período comercial en el que las tiendas ofrecen descuentos de precio significativos?",
            options: ["Las rebajas", "Las propinas", "Las fianzas", "Las subastas"],
            correctAnswer: "Las rebajas",
            explanation: "'Las rebajas' (sales / discounts) ocurren habitualmente en enero e invierno o en verano."
          },
          {
            id: "es-u8-q16",
            type: "matching",
            prompt: "Empareja las formas de pago con su expresión cotidiana:",
            pairs: [
              { native: "Pagar en efectivo / en metálico", english: "Pay in cash", left: "Con billetes y monedas", right: "Pagar en efectivo" },
              { native: "Pagar con tarjeta de crédito", english: "Pay by credit card", left: "Con plástico / TPV", right: "Pagar con tarjeta" },
              { native: "Pagar a plazos", english: "Pay in installments", left: "En cuotas mensuales", right: "Pagar a plazos" },
              { native: "Dejar propina", english: "Leave a tip", left: "Dinero extra al camarero", right: "Dejar propina" }
            ]
          },
          {
            id: "es-u8-q17",
            type: "scramble",
            prompt: "Ordena las palabras para preguntar por el precio de una prenda:",
            tokens: ["¿Cuánto", "cuestan", "estos", "zapatos", "negros?"],
            correctTokens: ["¿Cuánto", "cuestan", "estos", "zapatos", "negros?"],
            explanation: "Fórmula de precio con sujeto plural: ¿Cuánto cuestan + sustantivo plural?"
          },
          {
            id: "es-u8-q18",
            type: "fill_blank",
            sentence: "Esta falda me queda muy estrecha; necesito una talla más ___.",
            missingWord: "grande",
            options: ["grande", "pequeña", "cara", "vieja"],
            correctAnswer: "grande",
            explanation: "Si queda estrecha, se necesita una talla mayor o 'más grande'."
          },
          {
            id: "es-u8-q19",
            type: "multiple_choice",
            prompt: "¿Cuál es la respuesta del camarero al preguntar '¿Qué nos recomienda de primero?'?",
            options: [
              "Les recomiendo la sopa de marisco de la casa.",
              "Cobramos con datáfono.",
              "La habitación tiene llave.",
              "Son las tres de la tarde."
            ],
            correctAnswer: "Les recomiendo la sopa de marisco de la casa.",
            explanation: "Respuesta culinaria adecuada recomendando un plato del menú."
          },
          {
            id: "es-u8-q20",
            type: "multiple_choice",
            prompt: "Identifica la frase gramaticalmente INCORRECTA:",
            options: [
              "Le lo dije ayer",
              "Se lo dije ayer",
              "Se la compré a mi madre",
              "Nos lo enviaron por correo"
            ],
            correctAnswer: "Le lo dije ayer",
            explanation: "'Le lo' es agramatical en español; la cacofonía exige 'se lo'."
          }
        ]
      }
    ]
  }
];
