// =========================================================================
// CBT & SIELE Dynamic Spanish Examination Engine
// Grounded in official Instituto Cervantes DELE & SIELE standards:
// - DELE A1-A2 (Usuario Básico: Acceso y Plataforma)
// - DELE B1-B2 (Usuario Independiente: Umbral y Avanzado - Requisito de Nacionalidad)
// - DELE / SIELE C1-C2 (Usuario Competente: Dominio Operativo Eficaz y Maestría)
// Guarantees a BRAND NEW set of test questions on every attempt for logged-in users!
// =========================================================================

import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

export const spanishA1A2Reading = [
  {
    "id": "es-a1a2-r-1",
    "subtest": "reading",
    "title": "Aviso de la Comunidad: Mantenimiento del ascensor",
    "passage": "COMUNIDAD DE VECINOS — CALLE MAYOR 14\nSe informa a todos los residentes que el próximo martes 12 de noviembre el ascensor principal estará fuera de servicio entre las 09:00 y las 14:00 por labores de mantenimiento reglamentario.\nRogamos a las personas con movilidad reducida que planifiquen sus desplazamientos con antelación o soliciten asistencia al conserje.",
    "prompt": "¿En qué horario no se podrá utilizar el ascensor el martes?",
    "options": [
      "A) Durante toda la noche",
      "B) De 09:00 a 14:00 horas",
      "C) Únicamente los fines de semana",
      "D) Solo por la tarde después de las 18:00"
    ],
    "correctAnswer": "B) De 09:00 a 14:00 horas",
    "explanation": "El texto especifica con claridad: 'el ascensor principal estará fuera de servicio entre las 09:00 y las 14:00'."
  },
  {
    "id": "es-a1a2-r-2",
    "subtest": "reading",
    "title": "Oferta de Empleo: Dependiente de librería en el centro",
    "passage": "LIBRERÍA CERVANTES — SE BUSCA PERSONAL\nBuscamos dependiente a media jornada (20 horas semanales) para los turnos de tarde de lunes a viernes.\nRequisitos mínimos:\n- Nivel medio de inglés para atención a turistas\n- Experiencia demostrable en comercio\n- Buen trato y pasión por la lectura.",
    "prompt": "¿Cuál es una condición obligatoria para optar al puesto?",
    "options": [
      "A) Saber hablar cuatro idiomas extranjeros",
      "B) Trabajar los fines de semana a tiempo completo",
      "C) Nivel medio de inglés y experiencia en comercio",
      "D) Vivir fuera de la ciudad"
    ],
    "correctAnswer": "C) Nivel medio de inglés y experiencia en comercio",
    "explanation": "Los requisitos mínimos estipulan: 'Nivel medio de inglés para atención a turistas' y 'Experiencia demostrable en comercio'."
  },
  {
    "id": "es-a1a2-r-3",
    "subtest": "reading",
    "title": "Cartel del Centro de Salud: Vacunación contra la gripe",
    "passage": "CONSEJERÍA DE SANIDAD — CAMPAÑA DE VACUNACIÓN ANTIGRIPAL\nA partir del 15 de octubre comienza la vacunación estacional para mayores de 65 años, mujeres embarazadas y personas con patologías respiratorias crónicas.\nLa cita previa se puede solicitar en la app móvil de salud o llamando al 900 123 456.",
    "prompt": "¿Quiénes tienen prioridad en la campaña según el anuncio?",
    "options": [
      "A) Exclusivamente niños menores de tres años",
      "B) Mayores de 65 años, embarazadas y personas con patologías crónicas",
      "C) Solo deportistas profesionales",
      "D) Turistas sin cita previa"
    ],
    "correctAnswer": "B) Mayores de 65 años, embarazadas y personas con patologías crónicas",
    "explanation": "El cartel cita como grupos prioritarios a 'mayores de 65 años, mujeres embarazadas y personas con patologías respiratorias crónicas'."
  },
  {
    "id": "es-a1a2-r-4",
    "subtest": "reading",
    "title": "Normativa de la Biblioteca Municipal: Préstamo",
    "passage": "BIBLIOTECA PÚBLICA MUNICIPAL\nCada usuario con carné activo puede retirar en préstamo hasta un máximo de cuatro libros durante un periodo de veintiún días naturales.\nSi el libro se devuelve con retraso, se aplicará una sanción de suspensión del carné de un día por cada día de demora.",
    "prompt": "¿Qué ocurre si un lector devuelve un libro fuera de plazo?",
    "options": [
      "A) Debe comprar dos libros nuevos",
      "B) Se suspende su carné un día por cada día de retraso",
      "C) No ocurre nada si avisa por teléfono",
      "D) Se le prohíbe la entrada de por vida"
    ],
    "correctAnswer": "B) Se suspende su carné un día por cada día de retraso",
    "explanation": "La normativa estipula claramente: 'sanción de suspensión del carné de un día por cada día de demora'."
  },
  {
    "id": "es-a1a2-r-5",
    "subtest": "reading",
    "title": "Aviso de Cercanías: Modificación de andenes",
    "passage": "RENFE CERCANÍAS\nPor obras de mejora en la catenaria, los trenes de la línea C-3 con destino a El Escorial saldrán temporalmente de la vía 4 en lugar de la habitual vía 2 desde las 10:00 hasta las 17:00 de hoy.",
    "prompt": "¿De qué vía saldrán los trenes hacia El Escorial durante las obras?",
    "options": [
      "A) De la vía 2 habitual",
      "B) De la vía 4",
      "C) De la estación central de autobuses",
      "D) De la vía subterránea 8"
    ],
    "correctAnswer": "B) De la vía 4",
    "explanation": "El texto indica: 'saldrán temporalmente de la vía 4 en lugar de la habitual vía 2'."
  },
  {
    "id": "es-a1a2-r-6",
    "subtest": "reading",
    "title": "Instrucciones de reciclaje: Punto limpio móvil",
    "passage": "AYUNTAMIENTO — SERVICIO DE LIMPIEZA\nEl Punto Limpio móvil se instalará en la plaza Mayor los martes y jueves de 08:30 a 13:00.\nSe pueden depositar pequeños electrodomésticos, pilas usadas, aceite vegetal en botellas y radiografías.",
    "prompt": "¿Qué objeto se permite depositar en el Punto Limpio móvil?",
    "options": [
      "A) Sofás y colchones viejos",
      "B) Pequeños electrodomésticos, pilas y aceite vegetal en botellas",
      "C) Escombros de obra",
      "D) Restos orgánicos de comida"
    ],
    "correctAnswer": "B) Pequeños electrodomésticos, pilas y aceite vegetal en botellas",
    "explanation": "El folleto detalla: 'pequeños electrodomésticos, pilas usadas, aceite de cocina vegetal en botellas de plástico'."
  },
  {
    "id": "es-a1a2-r-7",
    "subtest": "reading",
    "title": "Billete de autobús interurbano",
    "passage": "CONFIRMACIÓN DE RESERVA — ALSA\nOrigen: Madrid | Destino: Granada\nFecha: Viernes, 18 de julio | Salida: 15:30 h | Llegada estimada: 20:45 h\nAsiento: 14A. Se incluye una maleta en bodega de hasta 20 kg y un bulto de mano.",
    "prompt": "¿Qué equipaje está autorizado en el billete sin coste adicional?",
    "options": [
      "A) Solo un bolso pequeño de mano",
      "B) Tres maletas de 30 kg",
      "C) Una maleta en bodega de hasta 20 kg y un bulto de mano",
      "D) Ningún equipaje"
    ],
    "correctAnswer": "C) Una maleta en bodega de hasta 20 kg y un bulto de mano",
    "explanation": "La confirmación estipula: 'Se incluye una maleta en bodega de hasta 20 kg y un bulto de mano'."
  },
  {
    "id": "es-a1a2-r-8",
    "subtest": "reading",
    "title": "Menú del Día: Restaurante Casa Paco",
    "passage": "CASA PACO — MENÚ DEL DÍA (12,50 €)\nPrimeros: Ensalada mixta, Gazpacho, Lentejas estofadas.\nSegundos: Pechuga de pollo con patatas, Merluza al horno.\nIncluye pan, una bebida y postre o café. De lunes a viernes de 13:00 a 16:00.",
    "prompt": "¿Qué elementos incluye el precio del menú del día?",
    "options": [
      "A) Solo el plato principal",
      "B) Primer plato, segundo plato, pan, una bebida y postre o café",
      "C) Bebidas alcohólicas ilimitadas",
      "D) Solo comida para llevar"
    ],
    "correctAnswer": "B) Primer plato, segundo plato, pan, una bebida y postre o café",
    "explanation": "El anuncio aclara: 'Postre o café incluido, pan y una bebida'."
  },
  {
    "id": "es-a1a2-r-9",
    "subtest": "reading",
    "title": "Cursos de natación en el polideportivo municipal",
    "passage": "POLIDEPORTIVO MUNICIPAL\nInscripciones abiertas del 1 al 10 de septiembre para clases de natación.\nHorarios: Lunes y miércoles de 19:30 a 20:30 h.\nEs obligatorio el uso de gorro de baño, chanclas y bañador deportivo.",
    "prompt": "¿Qué indumentaria es obligatoria en la piscina?",
    "options": [
      "A) Traje de neopreno",
      "B) Gorro de baño, chanclas y bañador deportivo",
      "C) Camiseta de algodón",
      "D) Aletas y gafas de buceo"
    ],
    "correctAnswer": "B) Gorro de baño, chanclas y bañador deportivo",
    "explanation": "El cartel indica: 'Es obligatorio el uso de gorro de baño, chanclas y bañador deportivo'."
  },
  {
    "id": "es-a1a2-r-10",
    "subtest": "reading",
    "title": "Revisión pre-ITV en taller mecánico",
    "passage": "TALLERES HERNÁNDEZ\nRevisión oficial de 25 puntos de seguridad antes de pasar la ITV por 49 euros.\nIncluye cambio de aceite sintético (hasta 4 litros) y comprobación de frenos, neumáticos y alumbrado.",
    "prompt": "¿Qué incluye la revisión promocional por 49 euros?",
    "options": [
      "A) Cambio total del motor",
      "B) Revisión de 25 puntos y cambio de aceite sintético hasta 4 litros",
      "C) Pintura de la carrocería",
      "D) Pago de la tasa estatal"
    ],
    "correctAnswer": "B) Revisión de 25 puntos y cambio de aceite sintético hasta 4 litros",
    "explanation": "La promoción detalla: 'revisión de 25 puntos de seguridad... cambio de aceite sintético (hasta 4 litros)'."
  },
  {
    "id": "es-a1a2-r-11",
    "subtest": "reading",
    "title": "Aviso de llegada de paquete en Correos",
    "passage": "CORREOS Y TELÉGRAFOS\nEnvío certificado intentado entregar sin éxito en su domicilio.\nPuede retirarlo en la oficina central durante quince días naturales aportando este aviso y su documento de identidad.",
    "prompt": "¿De cuánto tiempo dispone el cliente para recoger su paquete?",
    "options": [
      "A) 24 horas",
      "B) Quince días naturales",
      "C) Dos meses",
      "D) Un año"
    ],
    "correctAnswer": "B) Quince días naturales",
    "explanation": "El resguardo estipula: 'a su disposición... durante quince días naturales'."
  },
  {
    "id": "es-a1a2-r-12",
    "subtest": "reading",
    "title": "Horario gratuito en el Museo del Prado",
    "passage": "MUSEO DEL PRADO\nHorario gratuito general: De lunes a sábado de 18:00 a 20:00 h; domingos y festivos de 17:00 a 19:00 h.\nEl acceso a las salas se cierra 30 minutos antes de la hora de cierre.",
    "prompt": "¿A qué hora es la entrada gratuita los días laborables?",
    "options": [
      "A) De 10:00 a 14:00 h",
      "B) De 18:00 a 20:00 h",
      "C) Todo el día",
      "D) No hay entrada gratuita"
    ],
    "correctAnswer": "B) De 18:00 a 20:00 h",
    "explanation": "El texto especifica: 'De lunes a sábado de 18:00 a 20:00 h'."
  },
  {
    "id": "es-a1a2-r-13",
    "subtest": "reading",
    "title": "Salida escolar al Parque Natural",
    "passage": "COLEGIO PÚBLICO\nExcursión al Parque Natural el viernes 24 de mayo. Salida a las 08:45 h desde el colegio y regreso a las 17:30 h.\nEs indispensable entregar la autorización paterna firmada antes del martes 21.",
    "prompt": "¿Qué requisito es indispensable para asistir a la excursión?",
    "options": [
      "A) Comprar un uniforme nuevo",
      "B) Entregar la autorización paterna firmada antes del martes 21",
      "C) Pagar 200 euros en metálico",
      "D) Aprobar un examen especial"
    ],
    "correctAnswer": "B) Entregar la autorización paterna firmada antes del martes 21",
    "explanation": "El aviso recalca: 'indispensable entregar la autorización paterna firmada antes del martes 21'."
  },
  {
    "id": "es-a1a2-r-14",
    "subtest": "reading",
    "title": "Tarifa móvil sin permanencia",
    "passage": "OPERADOR MÓVIL\nTarifa de llamadas ilimitadas y 50 GB de datos por 14,99 euros al mes.\nSin contrato de permanencia: cancele o cambie de tarifa cuando desee sin gastos adicionales.",
    "prompt": "¿Qué ventaja tiene el cliente según el contrato?",
    "options": [
      "A) Permanencia obligatoria de dos años",
      "B) Libertad para cancelar o cambiar de tarifa sin penalización",
      "C) Solo se puede llamar los domingos",
      "D) Cobro de 100 euros por baja"
    ],
    "correctAnswer": "B) Libertad para cancelar o cambiar de tarifa sin penalización",
    "explanation": "Se indica: 'Sin contrato de permanencia: cancele o cambie de tarifa cuando desee sin gastos adicionales'."
  },
  {
    "id": "es-a1a2-r-15",
    "subtest": "reading",
    "title": "Plan de evacuación en caso de incendio en hotel",
    "passage": "HOTEL REAL\nEn caso de alarma de incendios:\n- No utilice en ningún caso los ascensores.\n- Descienda por las escaleras señalizadas en verde hasta el punto de encuentro exterior.",
    "prompt": "¿Qué elemento está prohibido utilizar durante la evacuación?",
    "options": [
      "A) Las escaleras protegidas",
      "B) Los ascensores",
      "C) Las puertas de salida",
      "D) El punto de encuentro"
    ],
    "correctAnswer": "B) Los ascensores",
    "explanation": "La norma de seguridad advierte: 'No utilice en ningún caso los ascensores'."
  },
  {
    "id": "es-a1a2-r-16",
    "subtest": "reading",
    "title": "Taller gastronómico de tapas",
    "passage": "ESCUELA DE COCINA\nTaller práctico de tres horas los sábados por la mañana (11:00 a 14:00 h).\nAprenda a cocinar tortilla española y croquetas caseras. Incluye ingredientes y degustación.",
    "prompt": "¿Qué duración tiene el taller culinario?",
    "options": [
      "A) Un fin de semana completo",
      "B) Tres horas en la mañana del sábado (11:00 a 14:00 h)",
      "C) 15 minutos",
      "D) Cuatro tardes consecutivas"
    ],
    "correctAnswer": "B) Tres horas en la mañana del sábado (11:00 a 14:00 h)",
    "explanation": "El texto especifica: 'Taller práctico de tres horas los sábados por la mañana (11:00 a 14:00 h)'."
  },
  {
    "id": "es-a1a2-r-17",
    "subtest": "reading",
    "title": "Identificación de mascotas con microchip",
    "passage": "CLÍNICA VETERINARIA\nLa normativa legal obliga a identificar a perros y gatos mediante microchip antes de que alcancen los tres meses de edad.\nCampaña de descuento este mes en nuestra clínica.",
    "prompt": "¿Cuál es el plazo legal máximo para implantar el microchip a la mascota?",
    "options": [
      "A) Antes de los tres meses de edad",
      "B) Al cumplir dos años",
      "C) Solo si el animal viaja al extranjero",
      "D) No es obligatorio por ley"
    ],
    "correctAnswer": "A) Antes de los tres meses de edad",
    "explanation": "El texto señala la obligación legal 'antes de que alcancen los tres meses de edad'."
  },
  {
    "id": "es-a1a2-r-18",
    "subtest": "reading",
    "title": "Dispensación en farmacia de guardia",
    "passage": "FARMACIA DE GUARDIA\nPara retirar medicamentos que requieren prescripción médica durante el horario nocturno de guardia, es imprescindible presentar la receta médica física o electrónica en vigor.",
    "prompt": "¿Qué se requiere para retirar medicamentos sujetos a prescripción de noche?",
    "options": [
      "A) Pagar el triple del precio",
      "B) Presentar la receta médica física o electrónica en vigor",
      "C) Llevar dos acompañantes",
      "D) Ser residente del edificio de la farmacia"
    ],
    "correctAnswer": "B) Presentar la receta médica física o electrónica en vigor",
    "explanation": "El aviso recalca: 'es imprescindible presentar la receta médica física o electrónica en vigor'."
  }
];
export const spanishB1B2Reading = [
  {
    "id": "es-b1b2-r-1",
    "subtest": "reading",
    "title": "El impacto del teletrabajo en los hábitos de consumo urbano",
    "passage": "EL PERIÓDICO ECONÓMICO\nCinco años después de la generalización del trabajo a distancia, los restaurantes del distrito financiero han experimentado una reducción del 25% en menús diarios, mientras que los comercios de proximidad en barrios residenciales han florecido notablemente.",
    "prompt": "¿Cuál ha sido una consecuencia destacada del teletrabajo en las ciudades?",
    "options": [
      "A) El cierre total de tiendas de alimentación",
      "B) El auge de comercios de barrio frente al descenso en áreas de oficinas",
      "C) La eliminación de contratos laborales",
      "D) La prohibición de trabajar en el hogar"
    ],
    "correctAnswer": "B) El auge de comercios de barrio frente al descenso en áreas de oficinas",
    "explanation": "El texto contrapone la caída del 25% en áreas financieras con el florecimiento del comercio de barrio."
  },
  {
    "id": "es-b1b2-r-2",
    "subtest": "reading",
    "title": "Devolución de la fianza en la Ley de Arrendamientos Urbanos",
    "passage": "MINISTERIO DE VIVIENDA\nA la extinción del contrato de alquiler, el arrendador dispone de un plazo legal de treinta días para restituir el importe íntegro de la fianza, deduciendo solo los desperfectos justificados documentalmente.",
    "prompt": "¿De qué plazo dispone el arrendador para devolver la fianza?",
    "options": [
      "A) De 24 horas",
      "B) De treinta días naturales",
      "C) De seis meses",
      "D) No tiene obligación de devolverla"
    ],
    "correctAnswer": "B) De treinta días naturales",
    "explanation": "La ley concede 'un plazo legal de treinta días para restituir el importe íntegro'."
  },
  {
    "id": "es-b1b2-r-3",
    "subtest": "reading",
    "title": "Comunidades energéticas locales y placas solares",
    "passage": "REVISTA MEDIOAMBIENTE\nLas comunidades solares permiten compartir la electricidad de paneles fotovoltaicos en cubiertas a vecinos en un radio de dos kilómetros, reduciendo su factura entre un 30% y un 45% sin necesidad de tejado propio.",
    "prompt": "¿Qué beneficio clave aportan estas comunidades a los vecinos de pisos antiguos?",
    "options": [
      "A) Acceder a energía solar compartida sin tener tejado propio",
      "B) Eliminar la red eléctrica pública",
      "C) Recibir dinero en efectivo del ayuntamiento",
      "D) Prohibir el consumo nocturno"
    ],
    "correctAnswer": "A) Acceder a energía solar compartida sin tener tejado propio",
    "explanation": "El artículo resalta que acceden a energía renovable 'sin necesidad de tejado propio'."
  },
  {
    "id": "es-b1b2-r-4",
    "subtest": "reading",
    "title": "Relevo generacional en la llamada España vaciada",
    "passage": "ANÁLISIS SOCIODEMOGRÁFICO\nEl envejecimiento en el medio rural comienza a estabilizarse en ciertos municipios gracias a cooperativas agroalimentarias sostenibles e incentivos fiscales para jóvenes teletrabajadores que fijan su residencia en pueblos.",
    "prompt": "¿Qué factores han contribuido a mitigar la despoblación en algunos pueblos?",
    "options": [
      "A) La clausura de colegios urbanos",
      "B) Cooperativas agroalimentarias, incentivos fiscales y teletrabajadores",
      "C) Prohibir residir en capitales",
      "D) La minería de carbón intensiva"
    ],
    "correctAnswer": "B) Cooperativas agroalimentarias, incentivos fiscales y teletrabajadores",
    "explanation": "El informe atribuye la estabilización a cooperativas ecológicas, incentivos fiscales y teletrabajadores."
  },
  {
    "id": "es-b1b2-r-5",
    "subtest": "reading",
    "title": "Compensaciones por cancelación de vuelos comerciales",
    "passage": "DERECHO AERONÁUTICO\nEl reglamento comunitario estipula compensaciones de entre 250 y 600 euros si el vuelo se cancela con menos de 14 días de aviso, salvo que la aerolínea acredite circunstancias extraordinarias imprevisibles como tormentas severas.",
    "prompt": "¿En qué circunstancia queda eximida la compañía del pago de la indemnización?",
    "options": [
      "A) Si el billete fue económico",
      "B) Si demuestra circunstancias extraordinarias imprevisibles inevitables",
      "C) Si el viaje era en verano",
      "D) Si el avión no despegó"
    ],
    "correctAnswer": "B) Si demuestra circunstancias extraordinarias imprevisibles inevitables",
    "explanation": "La normativa exime a la empresa si acredita 'circunstancias extraordinarias imprevisibles'."
  },
  {
    "id": "es-b1b2-r-6",
    "subtest": "reading",
    "title": "Fusión de artesanía tradicional y diseño de vanguardia",
    "passage": "PATRIMONIO INMATERIAL\nOficios tradicionales como la cerámica de Talavera o la marroquinería de Ubrique han cobrado nuevo vigor al incorporar diseños vanguardistas y canales digitales de comercio justo internacional.",
    "prompt": "¿Cómo ha revitalizado el sector artesanal sus productos?",
    "options": [
      "A) Produciendo plástico barato en serie",
      "B) Combinando técnicas históricas con diseño moderno y canales de comercio justo",
      "C) Vendiendo solo en mercados medievales",
      "D) Copiando productos asiáticos"
    ],
    "correctAnswer": "B) Combinando técnicas históricas con diseño moderno y canales de comercio justo",
    "explanation": "El texto cita la integración de 'diseños vanguardistas y canales digitales de comercio justo'."
  },
  {
    "id": "es-b1b2-r-7",
    "subtest": "reading",
    "title": "La huella hídrica en la agricultura de regadío",
    "passage": "INGENIERÍA AGRÓNOMA\nLa modernización de regadíos tradicionales mediante riego por goteo monitorizado por sensores de humedad ha permitido ahorrar hasta un 40% de caudal hídrico en las cuencas del Ebro y del Segura.",
    "prompt": "¿Qué tecnología ha propiciado el ahorro de agua en los cultivos?",
    "options": [
      "A) El riego por inundación constante",
      "B) El riego por goteo automatizado con sensores de humedad en el suelo",
      "C) La siembra exclusiva de maíz transgénico",
      "D) El secado de acuíferos"
    ],
    "correctAnswer": "B) El riego por goteo automatizado con sensores de humedad en el suelo",
    "explanation": "El informe técnico destaca el 'riego por goteo monitorizado por sensores de humedad'."
  },
  {
    "id": "es-b1b2-r-8",
    "subtest": "reading",
    "title": "La educación financiera básica en la enseñanza secundaria",
    "passage": "INFORME EDUCATIVO\nExpertos aconsejan incorporar nociones de tipos de interés, hipotecas y endeudamiento responsable en el currículo de secundaria para prevenir el sobreendeudamiento juvenil.",
    "prompt": "¿Qué objetivo persigue la propuesta de educación financiera en las escuelas?",
    "options": [
      "A) Hacer que los jóvenes inviertan en bolsa obligatoriamente",
      "B) Prevenir el sobreendeudamiento juvenil mediante comprensión de créditos e hipotecas",
      "C) Eliminar las asignaturas de humanidades",
      "D) Cerrar las entidades bancarias"
    ],
    "correctAnswer": "B) Prevenir el sobreendeudamiento juvenil mediante comprensión de créditos e hipotecas",
    "explanation": "El informe busca 'prevenir el sobreendeudamiento juvenil' comprendiendo conceptos de crédito."
  },
  {
    "id": "es-b1b2-r-9",
    "subtest": "reading",
    "title": "El derecho a la desconexión digital de los trabajadores",
    "passage": "LEGISLACIÓN LABORAL\nEl Estatuto de los Trabajadores ampara el derecho a no responder llamadas ni correos corporativos fuera de la jornada contractual pactada, garantizando el descanso efectivo y la conciliación familiar.",
    "prompt": "¿Qué garantiza el derecho a la desconexión digital según la ley?",
    "options": [
      "A) Que no se puedan usar ordenadores en la empresa",
      "B) No atender comunicaciones laborales fuera de la jornada de trabajo",
      "C) Cobrar el doble por contestar mensajes",
      "D) Trabajar sin horario fijo"
    ],
    "correctAnswer": "B) No atender comunicaciones laborales fuera de la jornada de trabajo",
    "explanation": "El texto explicita el 'derecho a no responder llamadas ni correos corporativos fuera de la jornada'."
  },
  {
    "id": "es-b1b2-r-10",
    "subtest": "reading",
    "title": "La digitalización de los servicios de la administración pública",
    "passage": "BRECHA DIGITAL Y CIUDADANÍA\nSi bien la sede electrónica agiliza gestiones tributarias y censales, colectivos de mayores denuncian la exclusión que genera la eliminación de la atención presencial personalizada.",
    "prompt": "¿Qué reclaman los colectivos de personas mayores frente a la sede electrónica?",
    "options": [
      "A) Eliminar por completo los ordenadores del Estado",
      "B) Mantener la atención presencial personalizada sin depender exclusivamente de trámites digitales",
      "C) Que los trámites sean solo por teléfono",
      "D) Pagar menos impuestos"
    ],
    "correctAnswer": "B) Mantener la atención presencial personalizada sin depender exclusivamente de trámites digitales",
    "explanation": "Se señala la 'exclusión que genera la eliminación de la atención presencial personalizada'."
  },
  {
    "id": "es-b1b2-r-11",
    "subtest": "reading",
    "title": "La economía circular en el reciclaje de baterías de vehículos eléctricos",
    "passage": "TRANSICIÓN ECOLÓGICA\nLas plantas de reciclaje de segunda vida recuperan hasta el 95% de litio, cobalto y níquel de acumuladores gastados de automoción, reduciendo la dependencia de la minería extractiva.",
    "prompt": "¿Qué ventaja ofrece el reciclaje de baterías de tracción eléctrica?",
    "options": [
      "A) Fabricar gasolina sintética de bajo coste",
      "B) Recuperar hasta el 95% de metales críticos disminuyendo la necesidad de minería",
      "C) Descartar el uso de vehículos eléctricos",
      "D) Usar plomo en vez de litio"
    ],
    "correctAnswer": "B) Recuperar hasta el 95% de metales críticos disminuyendo la necesidad de minería",
    "explanation": "El texto cita la recuperación del '95% de litio, cobalto y níquel... reduciendo la dependencia de la minería extractiva'."
  },
  {
    "id": "es-b1b2-r-12",
    "subtest": "reading",
    "title": "La preservación de los centros históricos frente a la franquicia global",
    "passage": "URBANISMO Y COMERCIO\nPlanes municipales de dinamización protegen los comercios tradicionales de artesanía, zapatería y librerías declarándolos patrimonio comercial protegido para frenar la uniformidad de las cadenas globales.",
    "prompt": "¿Qué medida emplean algunos ayuntamientos para conservar tiendas históricas?",
    "options": [
      "A) Prohibir la entrada de peatones a las calles céntricas",
      "B) Declarar los comercios tradicionales patrimonio protegido frente a franquicias impersonales",
      "C) Subir los impuestos a librerías locales",
      "D) Obligar a vender solo por internet"
    ],
    "correctAnswer": "B) Declarar los comercios tradicionales patrimonio protegido frente a franquicias impersonales",
    "explanation": "El plan consiste en 'proteger los comercios tradicionales... declarándolos patrimonio comercial protegido'."
  },
  {
    "id": "es-b1b2-r-13",
    "subtest": "reading",
    "title": "El bilingüismo precoz y el desarrollo de funciones ejecutivas",
    "passage": "NEUROCIENCIA DEL LENGUAJE\nInvestigaciones longitudinales constatan que niños educados en entornos bilingües demuestran mayor plasticidad cognitiva y capacidad para alternar tareas abstractas con menor gasto atencional.",
    "prompt": "¿Qué beneficio neurocognitivo se atribuye al aprendizaje de dos lenguas en la infancia?",
    "options": [
      "A) Pérdida de memoria a largo plazo",
      "B) Mayor plasticidad cognitiva y agilidad en la alternancia de tareas",
      "C) Dificultad para razonar matemáticamente",
      "D) Imposibilidad de aprender una tercera lengua"
    ],
    "correctAnswer": "B) Mayor plasticidad cognitiva y agilidad en la alternancia de tareas",
    "explanation": "El estudio constata 'mayor plasticidad cognitiva y capacidad para alternar tareas abstractas'."
  },
  {
    "id": "es-b1b2-r-14",
    "subtest": "reading",
    "title": "La cláusula suelo en los préstamos hipotecarios según el Tribunal Supremo",
    "passage": "JURISPRUDENCIA BANCARIA\nEl Tribunal Supremo sentenció la nulidad de las cláusulas suelo que no superen el doble control de transparencia material, obligando a las entidades de crédito a restituir lo cobrado en exceso.",
    "prompt": "¿Por qué motivo son declaradas nulas ciertas cláusulas suelo?",
    "options": [
      "A) Por ser contratos firmados en el extranjero",
      "B) Por falta de transparencia e información clara al consumidor sobre el riesgo asumido",
      "C) Porque los tipos de interés subieron de repente",
      "D) Porque los clientes no tenían cuenta corriente"
    ],
    "correctAnswer": "B) Por falta de transparencia e información clara al consumidor sobre el riesgo asumido",
    "explanation": "La jurisprudencia exige el 'doble control de transparencia material', anulando cláusulas opacas."
  },
  {
    "id": "es-b1b2-r-15",
    "subtest": "reading",
    "title": "La dieta mediterránea y la reducción del riesgo cardiovascular",
    "passage": "EPIDEMIOLOGÍA CLÍNICA\nEl consumo diario de aceite de oliva virgen extra, frutos secos, legumbres y hortalizas frescas reduce en un 30% la incidencia de eventos coronarios según el ensayo PREDIMED.",
    "prompt": "¿Qué efecto protector comprobó el ensayo clínico sobre la dieta mediterránea?",
    "options": [
      "A) Aumento de la tensión arterial",
      "B) Reducción del 30% en episodios coronarios y cardiovasculares",
      "C) La necesidad de eliminar el pescado",
      "D) Efecto nulo en el metabolismo lipídico"
    ],
    "correctAnswer": "B) Reducción del 30% en episodios coronarios y cardiovasculares",
    "explanation": "El ensayo PREDIMED demostró que 'reduce en un 30% la incidencia de eventos coronarios'."
  },
  {
    "id": "es-b1b2-r-16",
    "subtest": "reading",
    "title": "El impacto del turismo de congresos en la economía de servicios",
    "passage": "ESTUDIOS TURÍSTICOS\nEl viajero de negocios gasta en promedio un triple diario respecto al turista vacacional y contribuye a desestacionalizar la demanda en hoteles y transportes fuera de la temporada estival.",
    "prompt": "¿Qué rasgo positivo aporta el turismo de negocios frente al vacacional?",
    "options": [
      "A) Que solo viajan en autobuses de cercanías",
      "B) Mayor gasto medio diario y desestacionalización de la ocupación hotelera",
      "C) Que no utilizan restaurantes ni taxis",
      "D) Que saturan las playas en agosto"
    ],
    "correctAnswer": "B) Mayor gasto medio diario y desestacionalización de la ocupación hotelera",
    "explanation": "Se enfatiza su 'gasto triple diario' y que 'contribuye a desestacionalizar la demanda'."
  },
  {
    "id": "es-b1b2-r-17",
    "subtest": "reading",
    "title": "La mediación vecinal como alternativa a la vía judicial",
    "passage": "JUSTICIA DE PAZ\nLos servicios municipales de mediación resuelven pacíficamente más del 70% de disputas por linderos, humedades y ruidos, ahorrando costes y descongestionando los juzgados de primera instancia.",
    "prompt": "¿Qué logro acredita la mediación comunitaria?",
    "options": [
      "A) Imponer penas de cárcel automáticas",
      "B) Resolver pacíficamente más del 70% de conflictos vecinales sin juicio",
      "C) Duplicar los costes judiciales",
      "D) Obligar a los vecinos a mudarse"
    ],
    "correctAnswer": "B) Resolver pacíficamente más del 70% de conflictos vecinales sin juicio",
    "explanation": "El servicio municipal 'resuelve pacíficamente más del 70% de disputas... descongestionando los juzgados'."
  },
  {
    "id": "es-b1b2-r-18",
    "subtest": "reading",
    "title": "La certificación de origen protegido (DOP) en los alimentos de calidad",
    "passage": "CONSEJO REGULADOR\nEl sello DOP garantiza que tanto la materia prima como la elaboración se realizan en una zona geográfica delimitada bajo estrictos parámetros de control y tradición secular.",
    "prompt": "¿Qué garantiza el distintivo de Denominación de Origen Protegida?",
    "options": [
      "A) Que el producto es importado de ultramar",
      "B) Que materia prima y producción se circunscriben a una comarca con controles estrictos",
      "C) Que el alimento tiene conservantes químicos",
      "D) Que el precio es el más bajo del mercado"
    ],
    "correctAnswer": "B) Que materia prima y producción se circunscriben a una comarca con controles estrictos",
    "explanation": "El sello certifica que 'tanto la materia prima como la elaboración se realizan en una zona geográfica delimitada'."
  }
];
export const spanishC1C2Reading = [
  {
    "id": "es-c1c2-r-1",
    "subtest": "reading",
    "title": "Ortega y Gasset: La dialéctica de la razón vital",
    "passage": "JOSÉ ORTEGA Y GASSET — MEDITACIONES DEL QUIJOTE\n«Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo». La vida humana no es una sustancia abstracta ni una conciencia cartesiana desvinculada del entorno, sino un quehacer constante que se despliega ineludiblemente en una circunstancia histórica y física.",
    "prompt": "¿Qué postula la «razón vital» orteguiana frente al idealismo cartesiano?",
    "options": [
      "A) La supremacía de la razón matemática pura",
      "B) Que la vida humana en su circunstancia concreta es la realidad radical",
      "C) La imposibilidad de discernir la verdad",
      "D) El aislamiento absoluto de la conciencia"
    ],
    "correctAnswer": "B) Que la vida humana en su circunstancia concreta es la realidad radical",
    "explanation": "La filosofía orteguiana sitúa la vida circunstancial e histórica como realidad radical originaria."
  },
  {
    "id": "es-c1c2-r-2",
    "subtest": "reading",
    "title": "La norma panhispánica policéntrica y la ASALE",
    "passage": "POLÍTICA LINGÜÍSTICA PANHISPÁNICA\nLa RAE y las 23 academias hermanas de la ASALE asumieron un modelo policéntrico que desmantela el viejo criterio monocéntrico peninsular. El reconocimiento formal del voseo culto rioplatense y de los léxicos americanos refuerza la cohesión idiomática universal.",
    "prompt": "¿Cuál es el núcleo de la política lingüística panhispánica contemporánea?",
    "options": [
      "A) Imponer la fonética castellana del norte peninsular",
      "B) Un modelo policéntrico que reconoce el valor normativo de todas las variedades cultas",
      "C) Rechazar el voseo en la literatura",
      "D) Sustituir el español por el latín"
    ],
    "correctAnswer": "B) Un modelo policéntrico que reconoce el valor normativo de todas las variedades cultas",
    "explanation": "La política de la ASALE es policéntrica y respeta la validez paritaria de los estándares hispánicos."
  },
  {
    "id": "es-c1c2-r-3",
    "subtest": "reading",
    "title": "Perspectivismo y mediaciones narrativas en Cervantes",
    "passage": "TEORÍA NOVELESCA CERVANTINA\nAl delegar la autoría en Cide Hamete Benengeli y traducir el texto mediante un morisco anónimo, Cervantes introduce un juego de espejos que desmonta la infalibilidad del narrador omnisciente tradicional.",
    "prompt": "¿Cómo subvierte Cervantes la autoridad del narrador dogmático?",
    "options": [
      "A) Empleando un único punto de vista rígido",
      "B) Mediante múltiples capas de mediación narrativa y distanciamiento irónico",
      "C) Copiando la épica medieval francesa",
      "D) Suprimiendo el humor en la narración"
    ],
    "correctAnswer": "B) Mediante múltiples capas de mediación narrativa y distanciamiento irónico",
    "explanation": "El autor introduce mediadores (Cide Hamete, morisco traductor) para crear distanciamiento y polifonía."
  },
  {
    "id": "es-c1c2-r-4",
    "subtest": "reading",
    "title": "La tutela judicial efectiva y el principio de proporcionalidad",
    "passage": "TRIBUNAL CONSTITUCIONAL\nLa tutela judicial efectiva exige una ponderación estricta del principio de proporcionalidad en su triple vertiente: idoneidad de la medida restrictiva, necesidad indiscutible y proporcionalidad en sentido estricto.",
    "prompt": "¿Qué exige el juicio de proporcionalidad en el control judicial?",
    "options": [
      "A) Arbitrariedad sin fundamentación",
      "B) Acreditar idoneidad, necesidad por ausencia de medida menos gravosa y proporcionalidad estricta",
      "C) La pena más severa posible",
      "D) Ignorar los derechos del reo"
    ],
    "correctAnswer": "B) Acreditar idoneidad, necesidad por ausencia de medida menos gravosa y proporcionalidad estricta",
    "explanation": "La doctrina constitucional desglosa la proporcionalidad en idoneidad, necesidad y proporcionalidad estricta."
  },
  {
    "id": "es-c1c2-r-5",
    "subtest": "reading",
    "title": "El conceptismo borgeano y la metafísica del laberinto",
    "passage": "JORGE LUIS BORGES — FICCIÓN Y FILOSOFÍA\nPara Borges, la literatura es una rama de la metafísica fantástica. El laberinto, el espejo y la biblioteca de Babel representan la finitud de la razón humana frente al infinito inabarcable del universo.",
    "prompt": "¿Qué función simbólica desempeña el laberinto en la poética de Borges?",
    "options": [
      "A) Un simple juego topográfico sin significado",
      "B) La alegoría del cosmos infinito y el desconcierto del intelecto humano",
      "C) Una crítica a la arquitectura moderna",
      "D) Una burla al idioma castellano"
    ],
    "correctAnswer": "B) La alegoría del cosmos infinito y el desconcierto del intelecto humano",
    "explanation": "El laberinto borgeano encarna el enigma ontológico del universo frente al entendimiento humano."
  },
  {
    "id": "es-c1c2-r-6",
    "subtest": "reading",
    "title": "La teoría del «Duende» en la estética de Federico García Lorca",
    "passage": "FEDERICO GARCÍA LORCA — JUEGO Y TEORÍA DEL DUENDE\nEl duende no es el ángel que ilumina desde arriba ni la musa que dicta con compás geométrico; el duende es una fuerza telúrica y oscura que sube desde las plantas de los pies cuando el artista roza el abismo de la muerte.",
    "prompt": "¿Cómo distingue Lorca el «duende» del ángel y de la musa?",
    "options": [
      "A) Es un concepto derivado del cálculo matemático",
      "B) Es una pulsión telúrica nacida de la lucha interior y la cercanía a la muerte",
      "C) Es la repetición mecánica de reglas académicas",
      "D) Es un sinónimo de técnica virtuosa sin emoción"
    ],
    "correctAnswer": "B) Es una pulsión telúrica nacida de la lucha interior y la cercanía a la muerte",
    "explanation": "Lorca define el duende como un poder misterioso que nace del combate interior frente al misterio de la muerte."
  },
  {
    "id": "es-c1c2-r-7",
    "subtest": "reading",
    "title": "La hermenéutica de la sospecha en el análisis del discurso",
    "passage": "CRÍTICA DEL DISCURSO POLÍTICO\nDesentrañar los implícitos ideológicos exige una lectura atenta que no acepte la literalidad neutral de los significantes, sino que devele las relaciones asimétricas de poder encubiertas en la naturalización léxica.",
    "prompt": "¿Qué propósito persigue el análisis crítico del discurso?",
    "options": [
      "A) Aprender reglas de puntuación ortográfica",
      "B) Desvelar las asimetrías de poder y las ideologías naturalizadas tras la aparente neutralidad",
      "C) Elogiar el estilo oratorio oficial",
      "D) Prohibir el uso de metáforas"
    ],
    "correctAnswer": "B) Desvelar las asimetrías de poder y las ideologías naturalizadas tras la aparente neutralidad",
    "explanation": "El análisis crítico busca descubrir cómo el lenguaje perpetúa estructuras de poder y dominación implícitas."
  },
  {
    "id": "es-c1c2-r-8",
    "subtest": "reading",
    "title": "El culteranismo gongorino como latinización de la lengua poética",
    "passage": "ESTILÍSTICA DEL SIGLO DE ORO\nLuis de Góngora extremó el hipérbaton y los acusativos griegos no para oscurecer vanamente el verso, sino para forzar la sintaxis del castellano hacia la plasticidad y la dignidad sublime del latín clásico de Virgilio.",
    "prompt": "¿Cuál era la pretensión artística del culteranismo gongorino?",
    "options": [
      "A) Escribir en latín macarrónico",
      "B) Elevar la expresividad poética del español emulando la sintaxis y riqueza del latín clásico",
      "C) Eliminar la rima y la métrica métrica",
      "D) Ridiculizar a los poetas humanistas"
    ],
    "correctAnswer": "B) Elevar la expresividad poética del español emulando la sintaxis y riqueza del latín clásico",
    "explanation": "Góngora pretendía dotar a la lengua castellana de la densidad conceptual y plasticidad del latín virgiliano."
  },
  {
    "id": "es-c1c2-r-9",
    "subtest": "reading",
    "title": "La tipicidad y la antijuridicidad en la dogmática penal",
    "passage": "DERECHO PENAL SUSTANTIVO\nPara que una conducta resulte penalmente punible no basta con que encaje formalmente en la descripción de un tipo delictivo; se requiere además constatar la antijuridicidad material mediante la lesión efectiva de un bien jurídico protegido.",
    "prompt": "¿Qué condición adicional exige el principio de antijuridicidad material?",
    "options": [
      "A) La simpatía del jurado popular",
      "B) La lesión efectiva o puesta en peligro relevante de un bien jurídico tutelado",
      "C) Que el acusado admita los hechos",
      "D) Que el delito se cometa en flagrancia"
    ],
    "correctAnswer": "B) La lesión efectiva o puesta en peligro relevante de un bien jurídico tutelado",
    "explanation": "La antijuridicidad material demanda que la acción vulnere o amenace gravemente el bien jurídico protegido por la norma."
  },
  {
    "id": "es-c1c2-r-10",
    "subtest": "reading",
    "title": "El concepto de «Lo real maravilloso» de Alejo Carpentier",
    "passage": "LITERATURA LATINOAMERICANA\nFrente al surrealismo europeo basado en trucos oníricos manufacturados, Carpentier postula que América posee una naturaleza desmesurada y una historia sincrética donde lo milagroso convive cotidianamente con la realidad tangible.",
    "prompt": "¿Cómo concibe Carpentier la génesis de lo real maravilloso en América?",
    "options": [
      "A) Como una copia mimética del dadaísmo parisino",
      "B) Como una propiedad ontológica de la exuberancia geográfica e histórica del continente mestizo",
      "C) Como un género exclusivo de ciencia ficción",
      "D) Como una técnica para turistas extranjeros"
    ],
    "correctAnswer": "B) Como una propiedad ontológica de la exuberancia geográfica e histórica del continente mestizo",
    "explanation": "Carpentier afirma que la maravillosa hibridación de América brota de su propia realidad telúrica y cultural."
  },
  {
    "id": "es-c1c2-r-11",
    "subtest": "reading",
    "title": "La desconstrucción derridiana del logocentrismo",
    "passage": "FILOSOFÍA POSMODERNA\nJacques Derrida demuestra que el pensamiento occidental ha privilegiado la voz viva sobre la escritura bajo la ilusión de una presencia originaria inmediata, desestimando la condición de suplemento incesante de todo signo lingüístico.",
    "prompt": "¿Qué ilusión crítica denuncia la desconstrucción del logocentrismo?",
    "options": [
      "A) Que los libros impresos son superiores a los digitales",
      "B) El espejismo de una presencia plena o significado trascendental previo a la mediación del signo",
      "C) La utilidad del diccionario",
      "D) El aprendizaje de la gramática"
    ],
    "correctAnswer": "B) El espejismo de una presencia plena o significado trascendental previo a la mediación del signo",
    "explanation": "Derrida deconstruye la creencia en un sentido originario y transparente anterior al diferir del lenguaje."
  },
  {
    "id": "es-c1c2-r-12",
    "subtest": "reading",
    "title": "La función performativa del lenguaje según John L. Austin",
    "passage": "PRAGMÁTICA LINGÜÍSTICA\nLos enunciados realizativos o performativos (como «prometo», «declaro la sesión inaugurada») no describen un estado de cosas previo susceptible de verdad o falsedad, sino que ejecutan la acción misma en el instante de su enunciación feliz.",
    "prompt": "¿Cuál es la característica distintiva de un acto de habla performativo?",
    "options": [
      "A) Que describe un hecho histórico del pasado",
      "B) Que realiza la acción jurídica o social en el propio acto de su emisión",
      "C) Que carece de sujeto y predicado",
      "D) Que solo funciona en poemas líricos"
    ],
    "correctAnswer": "B) Que realiza la acción jurídica o social en el propio acto de su emisión",
    "explanation": "El enunciado performativo hace cosas con palabras: ejecuta la acción misma al pronunciarse bajo las condiciones debidas."
  },
  {
    "id": "es-c1c2-r-13",
    "subtest": "reading",
    "title": "El laberinto de la soledad y la dialéctica de la máscara en Octavio Paz",
    "passage": "ENSAYO MEXICANO\nOctavio Paz sostiene que el mexicano recurre a la máscara del hermetismo y del pudor como una coraza defensiva frente a una historia de conquistas y rupturas traumáticas, abriéndose únicamente en el desgarro extático de la fiesta.",
    "prompt": "¿Qué función antropológica atribuye Octavio Paz a la máscara en su ensayo?",
    "options": [
      "A) Un disfraz carnavalesco sin trascendencia",
      "B) Un dispositivo de reserva y protección psicológica frente a un entorno adverso",
      "C) Una costumbre impuesta por el turismo internacional",
      "D) Una moda importada de Europa"
    ],
    "correctAnswer": "B) Un dispositivo de reserva y protección psicológica frente a un entorno adverso",
    "explanation": "Paz analiza el hermetismo y la máscara como escudo ante la intemperie histórica y existencial."
  },
  {
    "id": "es-c1c2-r-14",
    "subtest": "reading",
    "title": "El principio de primacía del Derecho Comunitario Europeo",
    "passage": "DERECHO DE LA UNIÓN EUROPEA\nEl principio de primacía, consagrado por el Tribunal de Justicia en la histórica sentencia Costa contra ENEL de 1964, establece que el ordenamiento de la Unión prevalece sobre cualquier norma de derecho interno, incluso de rango constitucional.",
    "prompt": "¿Qué alcance tiene el principio de primacía europea según la jurisprudencia del TJUE?",
    "options": [
      "A) Se aplica solo a convenios comerciales menores",
      "B) Prevalece sobre cualquier norma nacional discrepante de los Estados miembros",
      "C) Exige la aprobación unánime de los parlamentos regionales",
      "D) Fue derogado en el año 2000"
    ],
    "correctAnswer": "B) Prevalece sobre cualquier norma nacional discrepante de los Estados miembros",
    "explanation": "El principio impone la inaplicación de cualquier precepto interno que contradiga el Derecho Comunitario vinculante."
  },
  {
    "id": "es-c1c2-r-15",
    "subtest": "reading",
    "title": "El concepto de campo social en la sociología de Pierre Bourdieu",
    "passage": "SOCIOLOGÍA CULTURAL\nUn campo social es un microcosmos autónomo dotado de sus propias reglas de juego donde los agentes rivalizan por la posesión y el monopolio de un capital específico (económico, cultural o simbólico).",
    "prompt": "¿Cómo define Bourdieu la dinámica interna de un campo social?",
    "options": [
      "A) Como una reunión amistosa sin jerarquías",
      "B) Como un espacio estructurado de conflicto y competición por el capital específico del ámbito",
      "C) Como una empresa con fines de lucro",
      "D) Como una ley matemática universal"
    ],
    "correctAnswer": "B) Como un espacio estructurado de conflicto y competición por el capital específico del ámbito",
    "explanation": "Para Bourdieu, el campo es un terreno de lucha donde los agentes compiten según el volumen de capital que poseen."
  },
  {
    "id": "es-c1c2-r-16",
    "subtest": "reading",
    "title": "La estética del esperpento en Luces de Bohemia de Valle-Inclán",
    "passage": "TEATRO ESPAÑOL DEL SIGLO XX\nValle-Inclán proclamó que «el sentido trágico de la vida española solo puede darse con una estética sistemáticamente deformada». El esperpento proyecta a los héroes clásicos en el espejo cóncavo del callejón del Gato para desnudar la farsa nacional.",
    "prompt": "¿Cuál es el sentido ético del esperpento valle-inclanesco?",
    "options": [
      "A) Entretener con chistes superficiales",
      "B) Deformar satíricamente la realidad para revelar la grotesca decadencia moral de la época",
      "C) Celebrar las glorias militares del pasado",
      "D) Escribir obras sin acotaciones"
    ],
    "correctAnswer": "B) Deformar satíricamente la realidad para revelar la grotesca decadencia moral de la época",
    "explanation": "La deformación sistemática esperpéntica persigue una crítica demoledora de la hipocresía social y política."
  },
  {
    "id": "es-c1c2-r-17",
    "subtest": "reading",
    "title": "El concepto de «sociedad líquida» de Zygmunt Bauman",
    "passage": "SOCIOLOGÍA CONTEMPORÁNEA\nEn la modernidad líquida, las instituciones sólidas de pertenencia duradera se disuelven en flujos precarios y transitorios. El individuo pasa de la condición de ciudadano con deberes cívicos a la de consumidor voraz de identidades desechables.",
    "prompt": "¿Qué rasgo caracteriza la liquidez moderna según Bauman?",
    "options": [
      "A) El fortalecimiento de pactos comunitarios permanentes",
      "B) La transitoriedad de los vínculos humanos y la primacía del consumo efímero",
      "C) La industrialización pesada del siglo XIX",
      "D) El aislamiento absoluto sin tecnología"
    ],
    "correctAnswer": "B) La transitoriedad de los vínculos humanos y la primacía del consumo efímero",
    "explanation": "Bauman describe la fragilidad de las estructuras sociales y el predominio de compromisos fugaces y consumistas."
  },
  {
    "id": "es-c1c2-r-18",
    "subtest": "reading",
    "title": "El giro lingüístico en la filosofía de Ludwig Wittgenstein",
    "passage": "FILOSOFÍA DEL LENGUAJE\nEn sus Investigaciones Filosóficas, Wittgenstein abandona la teoría especular del lenguaje para sostener que «el significado de una palabra es su uso en el lenguaje». Los juegos de lenguaje se entrelazan indisolublemente con formas de vida concretas.",
    "prompt": "¿Cómo redefine Wittgenstein el significado léxico en su segunda etapa filosófica?",
    "options": [
      "A) Como la correspondencia unívoca con un objeto empírico",
      "B) Como la función y el uso pragmático que la palabra desempeña dentro de una forma de vida",
      "C) Como una ilusión gramatical prescindible",
      "D) Como una invención de los diccionarios formales"
    ],
    "correctAnswer": "B) Como la función y el uso pragmático que la palabra desempeña dentro de una forma de vida",
    "explanation": "El segundo Wittgenstein identifica el significado con el uso operativo y las reglas del juego de lenguaje compartido."
  }
];

export const spanishA1A2Writing = [
  {
    "id": "es-a1a2-w-1",
    "subtest": "writing",
    "taskType": "message",
    "title": "Mensaje al casero: Reparación del termo eléctrico",
    "prompt": "El calentador de agua de tu piso de alquiler no funciona desde ayer y solo sale agua fría. Escribe un correo formal y breve a tu casero, el Sr. Martínez, indicando a qué hora estás en casa para el técnico.",
    "minWords": 40,
    "modelResponse": "Estimado Sr. Martínez:\n\nLe escribo porque desde ayer por la mañana el termo de agua no calienta y solo sale agua fría en la ducha y en la cocina. Estaré en el piso hoy y mañana a partir de las 16:30 h para que pueda venir el técnico.\n\nLe ruego me confirme su visita.\n\nUn cordial saludo,\nLucas Silva"
  },
  {
    "id": "es-a1a2-w-2",
    "subtest": "writing",
    "taskType": "message",
    "title": "Invitación a un amigo para pasar el sábado en la sierra",
    "prompt": "Escribe a tu amigo Carlos proponiéndole hacer una ruta de senderismo este sábado por la mañana. Diles la hora y punto de encuentro y recuérdale qué ropa y comida llevar.",
    "minWords": 40,
    "modelResponse": "¡Hola, Carlos!\n\n¿Qué tal todo? Este sábado hace muy buen tiempo y quiero ir a la sierra a caminar. ¿Te apetece venir? Quedamos a las 09:30 h en la estación de tren. Recuerda traer botas cómodas, una gorra, agua y un bocadillo.\n\n¡Dime si te viene bien!\nUn abrazo."
  },
  {
    "id": "es-a1a2-w-3",
    "subtest": "writing",
    "taskType": "message",
    "title": "Mensaje de disculpa al profesor de español",
    "prompt": "Escribe un correo breve a tu profesor de español, D. Antonio, explicando por qué no pudiste asistir a la clase de ayer por motivos médicos y pidiendo los ejercicios del día.",
    "minWords": 40,
    "modelResponse": "Estimado profesor Antonio:\n\nLe escribo para disculparme por no haber podido asistir a la clase de español de ayer por la tarde, ya que tuve una cita médica imprevista. ¿Podría indicarme qué páginas del libro trabajaron y qué tareas hay para el próximo lunes?\n\nMuchas gracias por su ayuda.\nAtentamente,\nSofía Martín"
  },
  {
    "id": "es-a1a2-w-4",
    "subtest": "writing",
    "taskType": "message",
    "title": "Reserva de mesa en un restaurante tradicional",
    "prompt": "Escribe un correo al restaurante Mesón del Sol para reservar una mesa para cuatro personas el próximo viernes por la noche para celebrar un cumpleaños.",
    "minWords": 40,
    "modelResponse": "Buenas tardes:\n\nQuisiera reservar una mesa para cuatro personas para este viernes 15 a las 21:30 h en el comedor principal. Celebramos un cumpleaños familiar y una de las personas es celíaca, por lo que necesitaríamos opciones sin gluten.\n\nQuedo a la espera de su confirmación.\nUn saludo,\nRaúl Gómez"
  },
  {
    "id": "es-a1a2-w-5",
    "subtest": "writing",
    "taskType": "message",
    "title": "Aviso al vecino de celebración de cumpleaños",
    "prompt": "Vas a celebrar tu cumpleaños este sábado en tu piso con unos amigos. Escribe una nota educada para colocar en el tablón de anuncios del edificio disculpándote de antemano por las posibles molestias.",
    "minWords": 40,
    "modelResponse": "Estimados vecinos del edificio:\n\nLes escribo desde el 2º B para avisarles de que este sábado por la noche celebraré una pequeña cena con familiares por mi cumpleaños. Procuraremos mantener el volumen bajo y finalizar antes de las doce de la noche. Les pido disculpas por adelantado por cualquier molestia puntual.\n\nGracias por su comprensión.\nUn saludo cordial,\nElena"
  },
  {
    "id": "es-a1a2-w-6",
    "subtest": "writing",
    "taskType": "message",
    "title": "Consulta sobre un curso de idiomas en la academia",
    "prompt": "Escribe a la secretaría de la escuela oficial de idiomas preguntando por el horario, el precio y los plazos de inscripción de los cursos intensivos de verano de nivel A2.",
    "minWords": 40,
    "modelResponse": "A la atención de la Secretaría de la Escuela:\n\nMe pongo en contacto con ustedes para solicitar información sobre los cursos intensivos de español nivel A2 programados para el mes de julio. ¿Podrían informarme sobre los horarios disponibles, el coste de la matrícula y la fecha límite de inscripción?\n\nAgradeciendo de antemano su atención,\nAtentamente,\nDavid Miller"
  },
  {
    "id": "es-a1a2-w-7",
    "subtest": "writing",
    "taskType": "essay",
    "title": "Descripción personal: Mi rutina diaria y aficiones",
    "prompt": "Escribe una composición para la revista de estudiantes describiendo cómo es tu jornada típica entre semana y qué actividades de ocio practicas los fines de semana.",
    "minWords": 60,
    "modelResponse": "Entre semana mi jornada comienza a las siete de la mañana. Me ducho, preparo un café con leche y salgo hacia la oficina a las ocho en metro. Trabajo como administrativo hasta las cinco de la tarde. Por las tardes me gusta ir al gimnasio o pasear por el parque del Retiro.\n\nLos fines de semana descanso, cocino platos elaborados para mis amigos y visito museos o pueblos cercanos. Me apasiona la fotografía y aprender nuevas culturas."
  },
  {
    "id": "es-a1a2-w-8",
    "subtest": "writing",
    "taskType": "essay",
    "title": "Mi viaje soñado a un país hispanohablante",
    "prompt": "Redacta un texto para el blog del aula explicando qué país hispanohablante te gustaría visitar, qué lugares te interesan más y por qué motivo te atrae su gastronomía y cultura.",
    "minWords": 60,
    "modelResponse": "Mi gran sueño es viajar a Perú durante tres semanas. Deseo conocer la histórica ciudad de Cuzco y recorrer el Camino Inca hasta las ruinas legendarias de Machu Picchu al amanecer. También me fascina la gastronomía limeña: quiero probar el auténtico ceviche fresco en el puerto del Callao y aprender sobre las civilizaciones preincaicas.\n\nCreo que este viaje me permitiría mejorar mi español y comprender la inmensa diversidad del mundo andino."
  },
  {
    "id": "es-a1a2-w-9",
    "subtest": "writing",
    "taskType": "essay",
    "title": "Las ventajas del transporte público en la ciudad",
    "prompt": "Escribe un artículo breve sobre por qué consideras que el uso del metro y del autobús es preferible al vehículo privado en los centros urbanos.",
    "minWords": 60,
    "modelResponse": "El transporte público ofrece múltiples ventajas frente al uso del coche particular en las grandes ciudades. En primer lugar, utilizar el metro o el autobús es mucho más ecológico, ya que reduce notablemente las emisiones de gases contaminantes y la polución atmosférica.\n\nAdemás, es una alternativa más económica porque evita pagar gasolina, parkings caros e impuestos de circulación. Por último, nos ahorra el estrés de los atascos matutinos y permite leer o escuchar música durante el trayecto."
  }
];
export const spanishB1B2Writing = [
  {
    "id": "es-b1b2-w-1",
    "subtest": "writing",
    "taskType": "message",
    "title": "Reclamación a la compañía eléctrica por sobrefacturación",
    "prompt": "Has recibido una factura eléctrica de importe cuatro veces superior al habitual mientras tu vivienda estaba deshabitada. Redacta una carta de reclamación formal exigiendo rectificación.",
    "minWords": 80,
    "modelResponse": "A la atención del Departamento de Reclamaciones de Iberluz:\n\nPor la presente formulo reclamación formal respecto a la factura nº FC-2026/89 vinculada a mi contrato #CT-774920 de calle Alcalá 45, cuyo importe asciende a 438,50 euros. Dicha suma cuadruplica mi media histórica de 95 euros, resultando absurda dado que el inmueble estuvo desocupado dos semanas.\n\nSOLICITO la suspensión cautelar del cobro, la inspección técnica del contador y la emisión de una factura rectificativa conforme al consumo real. De no recibir respuesta en diez días hábiles, acudiré a la OMIC.\n\nAtentamente,\nClara Méndez Gómez"
  },
  {
    "id": "es-b1b2-w-2",
    "subtest": "writing",
    "taskType": "message",
    "title": "Carta de motivación para admisión en máster universitario",
    "prompt": "Solicitas plaza en un Máster Oficial en Cooperación Internacional y Políticas de Sostenibilidad. Expón tu formación, tu experiencia práctica previa y tus aspiraciones profesionales.",
    "minWords": 80,
    "modelResponse": "Estimados miembros del Comité de Admisiones:\n\nPresento mi candidatura al Máster Universitario en Cooperación Internacional y Sostenibilidad para el próximo curso académico. Graduada en Ciencias Políticas, he coordinado proyectos de desarrollo comunitario y soberanía alimentaria en ONG sobre el terreno durante tres años.\n\nEl enfoque interdisciplinar de su prestigioso programa me brindará las herramientas metodológicas para diseñar políticas públicas humanitarias con evaluación de impacto contrastada. Quedo a su disposición para cualquier entrevista personal.\n\nAtentamente,\nMariana Ríos Peralta"
  },
  {
    "id": "es-b1b2-w-3",
    "subtest": "writing",
    "taskType": "message",
    "title": "Petición formal a la dirección de empresa: Jornada laboral híbrida",
    "prompt": "Escribe a la dirección de recursos humanos de tu empresa solicitando acogerte a dos días de teletrabajo semanal amparándote en el convenio colectivo y en la conciliación familiar.",
    "minWords": 80,
    "modelResponse": "Estimada Dirección de Recursos Humanos:\n\nMe dirijo a ustedes para solicitar formalmente la adhesión al protocolo de teletrabajo híbrido establecido en el artículo 24 de nuestro convenio colectivo, con una distribución de dos jornadas en remoto (martes y jueves) y tres presenciales en sede central.\n\nEsta medida permitirá conciliar de forma equilibrada mis responsabilidades familiares con la atención a clientes internacionales, garantizando el pleno cumplimiento de los indicadores de productividad acordados.\n\nAgradeciendo su favorable acogida, les saluda atentamente,\nSergio Navarro"
  },
  {
    "id": "es-b1b2-w-4",
    "subtest": "writing",
    "taskType": "message",
    "title": "Instancia ante el ayuntamiento: Reparación urgente del alumbrado público",
    "prompt": "Redacta una instancia formal dirigida a la Concejalía de Urbanismo y Mantenimiento denunciando que las farolas de tu calle llevan dos semanas apagadas, generando inseguridad vecinal.",
    "minWords": 80,
    "modelResponse": "A LA CONCEJALÍA DE MANTENIMIENTO URBANO DEL EXCMO. AYUNTAMIENTO:\n\nEl abajo firmante, don Álvaro Peña, vecino de la calle Cantabria nº 12, EXPONE que desde hace catorce días la totalidad de las luminarias públicas del tramo comprendido entre los números 8 y 24 se encuentran inoperativas, dejando la vía en absoluta oscuridad y propiciando incidentes viales e inseguridad ciudadana.\n\nPor todo ello, SOLICITA el envío urgente de una brigada técnica municipal para restablecer el suministro del alumbrado público a la mayor brevedad posible.\n\nEn Madrid, a 18 de octubre de 2026.\nFdo.: Álvaro Peña Ruiz"
  },
  {
    "id": "es-b1b2-w-5",
    "subtest": "writing",
    "taskType": "message",
    "title": "Reclamación a agencia de viajes por incumplimiento de categoría hotelera",
    "prompt": "Contrataste un viaje con hotel de cuatro estrellas céntrico pero fuiste alojado en un establecimiento de dos estrellas a las afueras sin previo aviso. Exige indemnización compensatoria.",
    "minWords": 80,
    "modelResponse": "A la atención de Viajes Horizonte S.L.:\n\nPor medio del presente escrito interpongo reclamación formal relativa a la reserva de viaje con localizador #VH-88201. El contrato estipulaba expresamente alojamiento en hotel de cuatro estrellas céntrico, habiendo sido desviado sin previo aviso a un hotel de dos estrellas en un polígono industrial periférico, carente de los servicios contratados.\n\nExijo el reembolso de la diferencia de categoría hotelera y los gastos sobrevenidos de transporte, advirtiéndoles de que elevaré denuncia a Consumo de no satisfacerse mi reclamo.\n\nAtentamente,\nBeatriz Lozano"
  },
  {
    "id": "es-b1b2-w-6",
    "subtest": "writing",
    "taskType": "message",
    "title": "Renuncia voluntaria a puesto laboral con preaviso contractual",
    "prompt": "Comunica formalmente a tu empleador tu renuncia voluntaria al puesto de trabajo con los quince días reglamentarios de preaviso, agradeciendo el trato recibido y ofreciendo facilitar el relevo.",
    "minWords": 80,
    "modelResponse": "Estimada Dirección de Logística Moderna:\n\nPor la presente comunico mi decisión de extinguir voluntariamente mi relación laboral con esta mercantil con efectos a partir del próximo 5 de noviembre, cumpliendo escrupulosamente con el plazo legal de quince días de preaviso fijado en mi contrato.\n\nAgradezco sinceramente las oportunidades de aprendizaje y el excelente trato dispensado por todo el equipo durante estos tres años. Quedo a su disposición para traspasar mis proyectos en curso al compañero que asuma el puesto.\n\nUn cordial saludo,\nGuillermo Prieto"
  },
  {
    "id": "es-b1b2-w-7",
    "subtest": "writing",
    "taskType": "essay",
    "title": "¿Debe regularse el turismo masivo en los cascos históricos?",
    "prompt": "Escribe un ensayo equilibrado analizando los beneficios económicos del turismo frente a los problemas de encarecimiento del alquiler y saturación de servicios, proponiendo medidas sostenibles.",
    "minWords": 100,
    "modelResponse": "La presión turística en los cascos históricos plantea uno de los mayores dilemas urbanos actuales. Resulta indudable que el turismo es un puntal de la economía española, pues sostiene miles de empleos directos y dinamiza el comercio tradicional y la hostelería local.\n\nSin embargo, la masificación desregulada genera externalidades nocivas de hondo calado. La multiplicación de pisos turísticos dispara el coste de los alquileres residenciales, expulsando a los vecinos y convirtiendo barrios con identidad propia en parques temáticos desprovistos de vida cotidiana.\n\nA mi entender, la solución exige una regulación valiente: fijar moratorias a nuevas plazas turísticas, descentralizar las rutas de ocio y reinvertir las tasas del sector en vivienda pública accesible."
  },
  {
    "id": "es-b1b2-w-8",
    "subtest": "writing",
    "taskType": "essay",
    "title": "El impacto de las redes sociales en el bienestar psicológico juvenil",
    "prompt": "Analiza críticamente en un ensayo el papel de las redes sociales en la juventud: conectividad y aprendizaje versus aislamiento, adicción algorítmica y trastornos de imagen corporal.",
    "minWords": 100,
    "modelResponse": "La omnipresencia de las redes sociales ha transformado radicalmente la socialización de los adolescentes. Desde una perspectiva positiva, brindan canales inmediatos de comunicación comunitaria, facilitan el acceso a contenidos formativos y permiten a minorías hallar redes de apoyo solidario más allá de su entorno geográfico inmediato.\n\nNo obstante, su diseño basado en la captación compulsiva de atención algorítmica encierra riesgos severos. La comparación constante frente a estándares de belleza inalcanzables fomenta dismorfias corporales, mientras que la gratificación instantánea de los 'me gusta' precipita cuadros de ansiedad y dependencia digital.\n\nResulta imperativo implementar programas de alfabetización digital crítica en las escuelas y exigir a las plataformas mayores salvaguardas de protección para menores."
  },
  {
    "id": "es-b1b2-w-9",
    "subtest": "writing",
    "taskType": "essay",
    "title": "La transición energética: ¿Es viable prescindir de la energía nuclear?",
    "prompt": "Desarrolla un ensayo fundamentado discutiendo el calendario de cierre nuclear frente a los objetivos de descarbonización y la intermitencia de las energías renovables como la solar y la eólica.",
    "minWords": 100,
    "modelResponse": "El debate sobre la energía nuclear suscita discrepancias estratégicas de calado en plena emergencia climática. Quienes propugnan su cierre definitivo señalan con rigor el peligro irresoluble de los residuos radiactivos de larga vida y el catastrófico impacto ambiental en caso de contingencia mayor.\n\nPor contrapartida, los partidarios de prorrogar su vida útil argumentan que la energía atómica no genera emisiones de gases de efecto invernadero y aporta una generación de base continua que compensa la intermitencia de las fuentes solares y eólicas hasta que existan baterías a gran escala.\n\nUna postura sensata debe priorizar una inversión masiva en almacenamiento renovable e hidrógeno verde para sustituir progresivamente las térmicas y nucleares con solvencia."
  }
];
export const spanishC1C2Writing = [
  {
    "id": "es-c1c2-w-1",
    "subtest": "writing",
    "taskType": "message",
    "title": "Recurso de alzada administrativo ante una resolución ministerial",
    "prompt": "Has participado en un proceso selectivo estatal y tu baremación ha omitido indebidamente dos publicaciones científicas indexadas. Redacta el cuerpo de un Recurso de Alzada formal dirigido al Ministro.",
    "minWords": 100,
    "modelResponse": "AL EXCMO. SR. MINISTRO DE CIENCIA, INNOVACIÓN Y UNIVERSIDADES:\n\nDoña Carmen Navarro Soto, con DNI 48765432K, con domicilio en calle Serrano 102 de Madrid, comparece y EXPONE:\n\nPRIMERO. Que en fecha 14 de mayo fue publicada la baremación provisional del proceso selectivo para plazas de Profesores Titulares de Universidad.\nSEGUNDO. Que se constata un manifiesto error de hecho al omitir la puntuación de dos monografías indexadas debidamente acreditadas en plazo.\n\nFUNDAMENTOS DE DERECHO:\nI. Vulneración del derecho fundamental a la igualdad bajo principios de mérito y capacidad (art. 23.2 CE).\nII. Concurrencia de error de hecho subsanable ex artículo 109.2 de la Ley 39/2015 del Procedimiento Administrativo Común.\n\nSOLICITA: Tenga por presentado este RECURSO DE ALZADA, revocando el acto impugnado y asignando los 4,5 puntos omitidos.\n\nFdo.: Carmen Navarro Soto"
  },
  {
    "id": "es-c1c2-w-2",
    "subtest": "writing",
    "taskType": "message",
    "title": "Carta de rectificación formal ante el director de un diario de tirada nacional",
    "prompt": "Un artículo periodístico ha atribuido a tu institución académica irregularidades financieras falsas. Redacta una carta de rectificación formal exigiendo su publicación íntegra según la Ley Orgánica reguladora.",
    "minWords": 100,
    "modelResponse": "AL DIRECTOR DEL DIARIO EL INDEPENDIENTE:\n\nEn mi condición de representante legal del Instituto de Investigación Biomédica, al amparo de la Ley Orgánica 2/1984 reguladora del Derecho de Rectificación, me dirijo a usted con relación a la noticia publicada el 12 de junio bajo el titular 'Presuntas irregularidades contables en el centro biomédico'.\n\nLas afirmaciones vertidas son rotundamente falsas: la auditoría oficial del Tribunal de Cuentas aprobó sin reservas nuestras cuentas anuales, sin que conste reparo alguno. EXIJO la publicación íntegra y gratuita de este texto de rectificación con relevancia semejante en el plazo improrrogable de tres días naturales, reservándome las acciones penales por calumnias e injurias que en Derecho correspondan.\n\nAtentamente,\nDr. Fernando Soler"
  },
  {
    "id": "es-c1c2-w-3",
    "subtest": "writing",
    "taskType": "message",
    "title": "Dictamen pericial consultivo sobre rescisión contractual por fuerza mayor",
    "prompt": "Redacta las conclusiones de un dictamen jurídico asesorando a una empresa constructora sobre si la rotura global de la cadena de suministro por conflicto bélico exime de indemnizar la demora.",
    "minWords": 100,
    "modelResponse": "CONCLUSIONES DEL DICTAMEN JURÍDICO-PERICIAL:\n\nPRIMERA. El desabastecimiento sobrevenido de acero corrugado provocado por el embargo bélico internacional reúne las notas de imprevisibilidad e inevitabilidad consustanciales a la fuerza mayor ex artículo 1105 del Código Civil.\n\nSEGUNDA. Se constata la inexistencia de dolo o negligencia culpable imputable a la contratista, quien notificó fehacientemente la contingencia a la promotora con acreditación documental exhaustiva.\n\nTERCERA. Procede la exoneración de la cláusula penal por retraso y la concesión de una prórroga equivalente al periodo de paralización objetiva del suministro.\n\nEn Madrid, a 4 de noviembre de 2026.\nFdo.: Bufete Jurídico Asociado"
  },
  {
    "id": "es-c1c2-w-4",
    "subtest": "writing",
    "taskType": "message",
    "title": "Alegaciones ante la Agencia Española de Protección de Datos (AEPD)",
    "prompt": "Tu cliente ha sido expedientado por una presunta brecha de seguridad en servidores de correo. Redacta el escrito de alegaciones acreditando la adopción de medidas técnicas homologadas.",
    "minWords": 100,
    "modelResponse": "A LA DIRECCIÓN DE LA AGENCIA ESPAÑOLA DE PROTECCIÓN DE DATOS:\n\nDon Marcos Valls, en nombre de CloudSecure Ibérica S.L., formula ALEGACIONES frente al pliego de cargos del procedimiento sancionador PS/0045/2026:\n\nPRIMERO. Mi representada implementó protocolos de cifrado de extremo a extremo conformes al estándar ISO/IEC 27001, lo cual impidió el acceso no autorizado a los datos identificativos de los usuarios.\n\nSEGUNDO. La incidencia fue notificada a la autoridad de control en un plazo inferior a las 72 horas estipuladas en el art. 33 del RGPD, mitigando de forma diligente cualquier riesgo potencial.\n\nPor lo expuesto, SOLICITA el sobreseimiento y archivo de las actuaciones sancionadoras por ausencia de culpabilidad.\n\nFdo.: Marcos Valls"
  },
  {
    "id": "es-c1c2-w-5",
    "subtest": "writing",
    "taskType": "message",
    "title": "Carta de renuncia protocolar a un patronato cultural honorífico",
    "prompt": "Presentas tu renuncia protocolar e irrevocable a la presidencia de honor de una prestigiosa fundación artística debido a incompatibilidades éticas con nuevos patrocinadores comerciales.",
    "minWords": 100,
    "modelResponse": "A LOS MIEMBROS DEL PATRONATO DE LA FUNDACIÓN ARTE Y MEMORIA:\n\nCon hondo pesar pero con absoluta lealtad a los principios que han regido mi trayectoria académica, presento mi renuncia irrevocable a la Presidencia de Honor de esta institución.\n\nLa reciente admisión de patrocinios procedentes de conglomerados corporativos implicados en litigios medioambientales internacionales contraviene de raíz el código ético fundacional suscrito en 1998, desvirtuando el prestigio humanístico que con tanto esmero forjamos. Agradezco a los patronos su estima durante estas décadas de fecunda colaboración cívica.\n\nLes saluda con consideración distinguida,\nProf. Emérito Jaime Balmes"
  },
  {
    "id": "es-c1c2-w-6",
    "subtest": "writing",
    "taskType": "message",
    "title": "Propuesta de enmienda legislativa en sede parlamentaria",
    "prompt": "Redacta el texto de una enmienda a la totalidad de devolución sobre un proyecto de ley de mecenazgo cultural, justificando la insuficiencia de los incentivos fiscales previstos.",
    "minWords": 100,
    "modelResponse": "A LA MESA DEL CONGRESO DE LOS DIPUTADOS:\n\nEl Grupo Parlamentario Popular, al amparo del Reglamento de la Cámara, presenta ENMIENDA A LA TOTALIDAD con propuesta de devolución al Proyecto de Ley de Fomento del Mecenazgo Cultural.\n\nJUSTIFICACIÓN: El articulado propuesto por el Ejecutivo carece de la ambición fiscal requerida para homologar el modelo español a las normativas de mecenazgo vigentes en Francia o Italia. La cicatera deducción del 15% desincentiva la filantropía privada y perpetúa la dependencia del sector artístico respecto a las subvenciones discrecionales del Estado. Procede devolver el texto para articular un marco verdaderamente transformador.\n\nFdo.: El Portavoz Parlamentario"
  },
  {
    "id": "es-c1c2-w-7",
    "subtest": "writing",
    "taskType": "essay",
    "title": "El impacto de la globalización algorítmica en la pluralidad lingüística",
    "prompt": "Los grandes modelos de IA concentran su corpus en unas pocas lenguas hegemónicas. Analiza si esto amenaza a las lenguas minoritarias con la glotofagia digital o si la IA puede ser vehículo de rescate patrimonial.",
    "minWords": 120,
    "modelResponse": "La arquitectura digital contemporánea encierra una paradójica encrucijada para la diversidad glotológica. Por un lado, la concentración hegemónica de los modelos masivos de lenguaje en torno al inglés y unos pocos estándares consolidados amenaza con perpetuar una insidiosa glotofagia digital: los algoritmos de recomendación marginan a las lenguas con menor densidad económica, abocándolas al desuso.\n\nEmpero, postular un determinismo tecnológico ciego pecaría de reduccionismo. Con una gobernanza ética y financiación pública descolonizadora, la inteligencia artificial brinda herramientas inéditas de rescate patrimonial: la transcripción automática de hablas indígenas en riesgo y la traducción contextualizada comunitaria permiten revitalizar lenguas ancestrales.\n\nEl dilema, en suma, radica en la soberanía tecnológica: debemos garantizar que el ciberespacio sea un ágora plurilingüe y no un páramo uniforme."
  },
  {
    "id": "es-c1c2-w-8",
    "subtest": "writing",
    "taskType": "essay",
    "title": "La deshumanización del arte y el estatuto del creador en la era digital",
    "prompt": "A la luz del célebre ensayo orteguiano 'La deshumanización del arte', reflexiona sobre el arte generativo sintético: ¿supone la culminación de la pureza estética desprovista de emoción humana o la disolución de la autoría?",
    "minWords": 120,
    "modelResponse": "Un siglo después de que Ortega y Gasset formulara su tesis sobre la deshumanización del arte, el advenimiento de la síntesis algorítmica reabre el debate sobre la ontología de la creación estética. Ortega vislumbró un arte nuevo que renunciaba a la empatía sentimental para contemplar las formas puras del lenguaje plástico sin la interferencia del dolor humano contingente.\n\nSin embargo, la imaginería sintética de los transformadores generativos no brota de una vanguardia lúcida, sino de la recombinación probabilística de millones de obras pretéritas vaciadas de intencionalidad consciente. Al cercenar el vínculo ético y existencial entre el sufrimiento del creador y su obra, el artefacto resultante deviene en un simulacro hiperrealista carente de misterio.\n\nLa verdadera vanguardia hoy consiste en reivindicar la falibilidad, la huella artesanal y la finitud de la experiencia como bastiones irreductibles del espíritu."
  },
  {
    "id": "es-c1c2-w-9",
    "subtest": "writing",
    "taskType": "essay",
    "title": "La crisis de la democracia deliberativa frente a la polarización algorítmica",
    "prompt": "Analiza el declive de la deliberación racional pública habermasiana ante las cámaras de eco de las redes sociales y la monetización del encono político, formulando propuestas de regeneración institucional.",
    "minWords": 120,
    "modelResponse": "El ideal de la democracia deliberativa preconizado por Jürgen Habermas descansaba en la premisa ilustrada de que el mejor argumento racional se impondría en una esfera pública abierta al escrutinio colectivo. No obstante, las redes sociales han dinamitado este postulado al sustituir el ágora deliberativa por cámaras de eco diseñadas para rentabilizar la indignación tribal mediante incentivos de dopamina algorítmica.\n\nLa polarización sectaria devalúa el pacto constitucional transformando al adversario ideológico en un enemigo existencial con el que cualquier compromiso ético se juzga traición. Recomponer el tejido cívico demanda reformular la gobernanza de las plataformas, someter los algoritmos de recomendación a auditorías públicas independientes y refundar asambleas ciudadanas deliberativas por sorteo que devuelvan a la política su dimensión de escucha sosegada."
  }
];

export const spanishA1A2Listening = [
  {
    "id": "es-a1a2-l-1",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Atención señores viajeros: el tren de alta velocidad con destino a Sevilla Santa Justa va a efectuar su salida de forma inminente por la vía número 7. Por favor tengan a mano su billete.",
    "prompt": "¿Por cuál vía va a salir el tren con destino a Sevilla?",
    "options": [
      "A) Vía 3",
      "B) Vía 7",
      "C) Vía 12",
      "D) Vía 1"
    ],
    "correctAnswer": "B) Vía 7",
    "explanation": "El anuncio indica: 'salida de forma inminente por la vía número 7'."
  },
  {
    "id": "es-a1a2-l-2",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Buenos días, le llamo de la farmacia central. Ya hemos recibido las gotas oftálmicas que nos encargó. Puede pasar a recogerlas hoy hasta las ocho y media de la tarde con su receta médica.",
    "prompt": "¿Hasta qué hora puede pasar el cliente a recoger su encargo?",
    "options": [
      "A) Hasta las doce del mediodía",
      "B) Hasta las ocho y media de la tarde (20:30)",
      "C) Mañana por la mañana",
      "D) La farmacia está cerrada"
    ],
    "correctAnswer": "B) Hasta las ocho y media de la tarde (20:30)",
    "explanation": "La farmacéutica indica: 'hasta las ocho y media de la tarde'."
  },
  {
    "id": "es-a1a2-l-3",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Hola, soy Marta. Al final no puedo ir al cine esta tarde porque tengo que quedarme en la oficina preparando un informe urgente. ¿Podemos vernos mejor mañana domingo a la misma hora?",
    "prompt": "¿Por qué motivo no puede ir Marta al cine esta tarde?",
    "options": [
      "A) Ha perdido las llaves",
      "B) Debe quedarse en la oficina preparando un informe urgente",
      "C) No le gusta la película",
      "D) Está enferma con fiebre"
    ],
    "correctAnswer": "B) Debe quedarse en la oficina preparando un informe urgente",
    "explanation": "Marta explica: 'tengo que quedarme en la oficina preparando un informe urgente'."
  },
  {
    "id": "es-a1a2-l-4",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "El pronóstico del tiempo para Baleares anuncia cielos despejados con temperaturas máximas de 28 grados en Palma y Menorca. Soplará viento suave de levante.",
    "prompt": "¿Qué tiempo se pronostica para las Islas Baleares?",
    "options": [
      "A) Fuertes tormentas",
      "B) Cielos despejados con temperaturas de 28 grados",
      "C) Nieve en cotas bajas",
      "D) Viento huracanado"
    ],
    "correctAnswer": "B) Cielos despejados con temperaturas de 28 grados",
    "explanation": "El pronóstico anuncia: 'cielos despejados con temperaturas máximas de 28 grados'."
  },
  {
    "id": "es-a1a2-l-5",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "En el supermercado: Estimados clientes, hoy tenemos una oferta especial en la pescadería: todo el salmón fresco y la merluza tienen un veinte por ciento de descuento al pasar por caja.",
    "prompt": "¿Qué sección tiene un descuento especial del 20%?",
    "options": [
      "A) La panadería",
      "B) La pescadería (salmón y merluza)",
      "C) La droguería",
      "D) Las bebidas refrescantes"
    ],
    "correctAnswer": "B) La pescadería (salmón y merluza)",
    "explanation": "La megafonía avisa: 'oferta especial en la pescadería: todo el salmón fresco y la merluza... 20%'."
  },
  {
    "id": "es-a1a2-l-6",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Hola, Javier, te llamo de la clínica dental. El doctor tiene una urgencia y necesita adelantar tu cita de las cinco a las cuatro de la tarde. Llámanos para confirmar.",
    "prompt": "¿Qué cambio propone la clínica dental?",
    "options": [
      "A) Cancelar el tratamiento",
      "B) Adelantar la cita de las 17:00 a las 16:00",
      "C) Retrasar la cita tres horas",
      "D) Cambiar de clínica"
    ],
    "correctAnswer": "B) Adelantar la cita de las 17:00 a las 16:00",
    "explanation": "El mensaje propone: 'adelantar tu cita de las cinco a las cuatro de la tarde'."
  },
  {
    "id": "es-a1a2-l-7",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Pasajeros con destino a Barcelona: el vuelo IB-3012 comenzará el embarque por la puerta B24. Rogamos a los pasajeros con niños y personas que requieran asistencia que acudan en primer lugar.",
    "prompt": "¿Quiénes deben acudir en primer lugar a la puerta de embarque?",
    "options": [
      "A) Quienes viajen sin equipaje de mano",
      "B) Pasajeros con niños y personas que requieran asistencia",
      "C) Todos los pasajeros sin orden de fila",
      "D) Los miembros de la tripulación"
    ],
    "correctAnswer": "B) Pasajeros con niños y personas que requieran asistencia",
    "explanation": "El anuncio solicita que embarquen primero 'pasajeros con niños y personas que requieran asistencia'."
  },
  {
    "id": "es-a1a2-l-8",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Aviso del centro cívico: Las inscripciones para los cursos de yoga y pintura al óleo comienzan mañana a las nueve de la mañana en la recepción o en la página web oficial del distrito.",
    "prompt": "¿A partir de qué hora se puede inscribir la gente en los talleres?",
    "options": [
      "A) A partir de las nueve de la mañana",
      "B) A las dos de la tarde",
      "C) Solo por la noche",
      "D) El mes que viene"
    ],
    "correctAnswer": "A) A partir de las nueve de la mañana",
    "explanation": "El aviso fija el inicio de inscripciones 'mañana a las nueve de la mañana'."
  },
  {
    "id": "es-a1a2-l-9",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Hola, mamá, soy Carlos. He perdido el tren de las tres porque había mucho tráfico en la autopista, pero he comprado billete para el siguiente que sale a las cuatro y cuarto. Llegaré para cenar.",
    "prompt": "¿A qué hora sale el nuevo tren que va a tomar Carlos?",
    "options": [
      "A) A las dos y media",
      "B) A las cuatro y cuarto (16:15)",
      "C) A las seis de la tarde",
      "D) Mañana por la mañana"
    ],
    "correctAnswer": "B) A las cuatro y cuarto (16:15)",
    "explanation": "Carlos aclara que 'sale a las cuatro y cuarto'."
  },
  {
    "id": "es-a1a2-l-10",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "En el restaurante: El camarero informa: Hoy se nos ha terminado el pescado del día, pero tenemos ternera asada con patatas panaderas o arroz con verduras de la huerta muy sabroso.",
    "prompt": "¿Qué plato ya no está disponible en la cocina?",
    "options": [
      "A) La ternera asada",
      "B) El pescado del día",
      "C) El arroz con verduras",
      "D) El postre casero"
    ],
    "correctAnswer": "B) El pescado del día",
    "explanation": "El camarero confirma: 'Hoy se nos ha terminado el pescado del día'."
  },
  {
    "id": "es-a1a2-l-11",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Aviso de la compañía de aguas: Debido a la reparación de una tubería en la avenida principal, se suspenderá el suministro de agua potable mañana miércoles de nueve a una del mediodía.",
    "prompt": "¿Qué suministro se interrumpirá temporalmente mañana?",
    "options": [
      "A) La conexión a internet",
      "B) El suministro de agua potable de 09:00 a 13:00",
      "C) La electricidad comunitaria",
      "D) El gas natural"
    ],
    "correctAnswer": "B) El suministro de agua potable de 09:00 a 13:00",
    "explanation": "Se anuncia: 'se suspenderá el suministro de agua potable mañana miércoles de nueve a una'."
  },
  {
    "id": "es-a1a2-l-12",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "En la tienda de calzado: La dependienta dice: Esos zapatos en color marrón solo nos quedan en el número 42, pero si quiere en color negro tenemos todos los números del 38 al 45.",
    "prompt": "¿En qué color tienen disponible una variedad amplia de números?",
    "options": [
      "A) En color blanco",
      "B) En color negro",
      "C) En color marrón",
      "D) En color rojo"
    ],
    "correctAnswer": "B) En color negro",
    "explanation": "La dependienta afirma: 'en color negro tenemos todos los números del 38 al 45'."
  },
  {
    "id": "es-a1a2-l-13",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Llamada telefónica: Buenas tardes, soy David de Correos Express. Estoy en el portal de su edificio para entregarle un paquete que requiere firma. ¿Hay alguien en casa ahora mismo?",
    "prompt": "¿Quién está llamando al teléfono del destinatario?",
    "options": [
      "A) Un agente de policía",
      "B) Un repartidor de Correos Express que tiene un paquete",
      "C) El administrador de la comunidad",
      "D) Un vendedor de seguros"
    ],
    "correctAnswer": "B) Un repartidor de Correos Express que tiene un paquete",
    "explanation": "El interlocutor se identifica: 'soy David de Correos Express. Estoy en el portal... para entregarle un paquete'."
  },
  {
    "id": "es-a1a2-l-14",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Información municipal: Para renovar el permiso de estacionamiento para residentes en la zona verde, los vecinos deben presentar el recibo del impuesto de circulación al día antes del 31 de marzo.",
    "prompt": "¿Hasta qué fecha límite se puede renovar el permiso de aparcamiento?",
    "options": [
      "A) Hasta el 15 de enero",
      "B) Hasta el 31 de marzo",
      "C) En cualquier fecha del verano",
      "D) Solo en noviembre"
    ],
    "correctAnswer": "B) Hasta el 31 de marzo",
    "explanation": "La información municipal estipula: 'antes del 31 de marzo'."
  },
  {
    "id": "es-a1a2-l-15",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "En la taquilla del teatro: Las entradas para la función de las ocho de la tarde están totalmente agotadas, pero aún quedan seis butacas libres para la sesión matinal de mañana domingo a las doce.",
    "prompt": "¿Para cuál función quedan todavía butacas disponibles?",
    "options": [
      "A) Para la función de hoy a las ocho",
      "B) Para la sesión matinal de mañana domingo a las doce",
      "C) Para el próximo fin de semana",
      "D) No quedan entradas para ninguna función"
    ],
    "correctAnswer": "B) Para la sesión matinal de mañana domingo a las doce",
    "explanation": "El taquillero dice: 'quedan seis butacas libres para la sesión matinal de mañana domingo a las doce'."
  },
  {
    "id": "es-a1a2-l-16",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "En el metro: Por motivos técnicos de señalización, los trenes de la línea 1 circulan con intervalos de paso superiores a los habituales. Disculpen las demoras.",
    "prompt": "¿Qué incidencia se comunica por la megafonía del metro?",
    "options": [
      "A) La estación está cerrada",
      "B) Los trenes de la línea 1 circulan con intervalos superiores a los habituales",
      "C) El billete de metro es gratuito hoy",
      "D) La huelga general de conductores"
    ],
    "correctAnswer": "B) Los trenes de la línea 1 circulan con intervalos superiores a los habituales",
    "explanation": "La megafonía informa: 'los trenes de la línea 1 circulan con intervalos de paso superiores a los habituales'."
  },
  {
    "id": "es-a1a2-l-17",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "En la biblioteca: Recordamos a todos los usuarios que la sala de estudio cerrará excepcionalmente hoy a las siete de la tarde debido a la presentación de un libro con el autor.",
    "prompt": "¿Por qué motivo cerrará antes hoy la sala de estudio?",
    "options": [
      "A) Por obras de pintura",
      "B) Por la presentación de un libro con su autor",
      "C) Por falta de electricidad",
      "D) Por un simulacro de evacuación"
    ],
    "correctAnswer": "B) Por la presentación de un libro con su autor",
    "explanation": "Se aclara que el cierre anticipado es 'debido a la presentación de un libro con el autor'."
  },
  {
    "id": "es-a1a2-l-18",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Aviso meteorológico de montaña: Se recomienda extremar la precaución a los excursionistas en la sierra debido a la presencia de niebla densa y placas de hielo en senderos por encima de los 1.800 metros.",
    "prompt": "¿Qué peligros meteorológicos se advierten en la sierra?",
    "options": [
      "A) Temperaturas caniculares extremas",
      "B) Niebla densa y placas de hielo en cotas altas",
      "C) Caída de árboles por incendio",
      "D) Viento en calma absoluta"
    ],
    "correctAnswer": "B) Niebla densa y placas de hielo en cotas altas",
    "explanation": "El parte alerta de 'niebla densa y placas de hielo en senderos por encima de los 1.800 metros'."
  }
];
export const spanishB1B2Listening = [
  {
    "id": "es-b1b2-l-1",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Radio Nacional de España: El Banco de España revisó al alza el crecimiento económico al 2,4%, impulsado por las exportaciones de servicios no turísticos y el consumo interno robusto.",
    "prompt": "¿Qué elemento impulsó la revisión favorable del crecimiento?",
    "options": [
      "A) La venta de reservas auríferas",
      "B) Las exportaciones de servicios no turísticos y el consumo interno",
      "C) La caída del empleo",
      "D) La subida de impuestos"
    ],
    "correctAnswer": "B) Las exportaciones de servicios no turísticos y el consumo interno",
    "explanation": "El informe atribuye la subida a 'las exportaciones de servicios no turísticos y el consumo interno'."
  },
  {
    "id": "es-b1b2-l-2",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Reunión de propietarios: El administrador aclara que para optar a la subvención europea de fachadas del 70% se exige el voto favorable de las tres quintas partes de las cuotas antes de fin de año.",
    "prompt": "¿Qué mayoría se exige para solicitar la ayuda europea?",
    "options": [
      "A) Unanimidad del 100%",
      "B) Las tres quintas partes de las cuotas de participación",
      "C) Solo la firma del presidente",
      "D) El 10% de los vecinos"
    ],
    "correctAnswer": "B) Las tres quintas partes de las cuotas de participación",
    "explanation": "El administrador especifica: 'el voto favorable de las tres quintas partes de las cuotas'."
  },
  {
    "id": "es-b1b2-l-3",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Entrevista lingüística: La catedrática destaca que no existe un español superior; el español es policéntrico y todas las variedades cultas en América y España gozan de la misma legitimidad.",
    "prompt": "¿Qué tesis defiende la filóloga respecto a las variedades del idioma?",
    "options": [
      "A) Solo el habla peninsular es correcta",
      "B) El español es policéntrico y todas las normas cultas poseen igual legitimidad",
      "C) Deben eliminarse los modismos",
      "D) El desuso del voseo"
    ],
    "correctAnswer": "B) El español es policéntrico y todas las normas cultas poseen igual legitimidad",
    "explanation": "La especialista postula que 'todas las variedades cultas en América y España gozan de la misma legitimidad'."
  },
  {
    "id": "es-b1b2-l-4",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Policía Nacional: Para renovar el DNI o pasaporte es obligatorio personarse con cita previa, fotografía reciente con fondo blanco y el importe de la tasa en efectivo o justificante telemático.",
    "prompt": "¿Qué documentos y elementos se exigen para la renovación presencial?",
    "options": [
      "A) Dos testigos notariales",
      "B) Cita previa, fotografía reciente en fondo blanco y abono de tasas",
      "C) El título universitario",
      "D) Una carta del ayuntamiento"
    ],
    "correctAnswer": "B) Cita previa, fotografía reciente en fondo blanco y abono de tasas",
    "explanation": "El cuerpo policial cita: 'cita previa, fotografía reciente con fondo blanco y el importe de la tasa'."
  },
  {
    "id": "es-b1b2-l-5",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Comisión parlamentaria de sanidad: La ley aprobada incorporará a más de mil quinientos psicólogos clínicos en atención primaria para reducir las listas de espera en salud mental.",
    "prompt": "¿Qué medida principal contempla la ley sanitaria aprobada?",
    "options": [
      "A) Cerrar centros de salud periféricos",
      "B) Incorporar a más de mil quinientos psicólogos clínicos en atención primaria",
      "C) Privatizar los hospitales",
      "D) Cobrar copagos por consulta"
    ],
    "correctAnswer": "B) Incorporar a más de mil quinientos psicólogos clínicos en atención primaria",
    "explanation": "El ponente señala: 'incorporará a más de mil quinientos psicólogos clínicos en atención primaria'."
  },
  {
    "id": "es-b1b2-l-6",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Jornada de ciberseguridad: La gran mayoría de intrusiones corporativas no proceden de fallos de software sino de descuidos humanos al pulsar enlaces fraudulentos en correos de phishing.",
    "prompt": "¿A qué causa atribuyen los expertos la mayor parte de brechas de seguridad?",
    "options": [
      "A) Cortes de luz",
      "B) Descuidos humanos al abrir enlaces engañosos de phishing",
      "C) Robos nocturnos",
      "D) Defectos de los teclados"
    ],
    "correctAnswer": "B) Descuidos humanos al abrir enlaces engañosos de phishing",
    "explanation": "El conferenciante advierte que se deben a 'descuidos humanos al pulsar enlaces fraudulentos'."
  },
  {
    "id": "es-b1b2-l-7",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Informativo agrario: La sequía prolongada ha mermado la cosecha de aceituna en Jaén un 40%, lo que provocará tensiones inflacionarias en los precios del aceite de oliva virgen extra en origen.",
    "prompt": "¿Qué consecuencia directa causará la menor producción de aceituna?",
    "options": [
      "A) La caída drástica del precio del aceite",
      "B) Tensiones al alza en los precios del aceite de oliva virgen extra",
      "C) La importación masiva de vino",
      "D) La desaparición de los olivares"
    ],
    "correctAnswer": "B) Tensiones al alza en los precios del aceite de oliva virgen extra",
    "explanation": "Se anuncia que 'provocará tensiones inflacionarias en los precios del aceite de oliva'."
  },
  {
    "id": "es-b1b2-l-8",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Universidad Politécnica: El decano anuncia que las asignaturas optativas sobre computación cuántica e inteligencia artificial aplicada contarán con prácticas remuneradas en centros de I+D.",
    "prompt": "¿Qué incentivo ofrecen las nuevas asignaturas optativas tecnológicas?",
    "options": [
      "A) Exención de pagar matrícula universitaria",
      "B) Prácticas remuneradas en centros punteros de investigación y desarrollo",
      "C) La entrega de ordenadores cuánticos personales",
      "D) Viajes turísticos a congresos"
    ],
    "correctAnswer": "B) Prácticas remuneradas en centros punteros de investigación y desarrollo",
    "explanation": "El decano promete que 'contarán con prácticas remuneradas en centros de I+D'."
  },
  {
    "id": "es-b1b2-l-9",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Dirección General de Tráfico: La nueva campaña estival reforzará los controles de alcoholemia y sustancias en carreteras secundarias, donde se concentran tres de cada cuatro fallecimientos.",
    "prompt": "¿Dónde concentrará la DGT los controles especiales durante el verano?",
    "options": [
      "A) Únicamente en las autopistas de peaje",
      "B) En carreteras secundarias donde se produce el mayor índice de siniestralidad",
      "C) En las calles peatonales de las capitales",
      "D) En las estaciones de servicio"
    ],
    "correctAnswer": "B) En carreteras secundarias donde se produce el mayor índice de siniestralidad",
    "explanation": "El portavoz indica: 'en carreteras secundarias, donde se concentran tres de cada cuatro fallecimientos'."
  },
  {
    "id": "es-b1b2-l-10",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Encuentro de emprendedores: La ponente subraya que la viabilidad de una startup no depende solo del capital semilla inicial, sino de la capacidad del equipo para iterar el modelo de negocio con clientes reales.",
    "prompt": "¿Cuál es el factor determinante para la supervivencia de una empresa emergente?",
    "options": [
      "A) Disponer de una sede lujosa en la capital",
      "B) La capacidad del equipo para adaptar el producto según la respuesta de usuarios reales",
      "C) Gastar todo el presupuesto en anuncios televisivos",
      "D) No contratar a ningún empleado externo"
    ],
    "correctAnswer": "B) La capacidad del equipo para adaptar el producto según la respuesta de usuarios reales",
    "explanation": "Se enfatiza 'la capacidad del equipo para iterar el modelo de negocio con clientes reales'."
  },
  {
    "id": "es-b1b2-l-11",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Protección Civil: Ante el riesgo extremo de incendios forestales, queda prohibida cualquier quema de rastrojos, el encendido de barbacoas en áreas recreativas y el tránsito con maquinaria agrícola.",
    "prompt": "¿Qué actividad queda terminantemente vetada durante la alerta por incendios?",
    "options": [
      "A) Caminar por sendas señalizadas a pie",
      "B) Quemas de rastrojos, barbacoas recreativas y uso de maquinaria en el campo",
      "C) Beber agua en botellas reutilizables",
      "D) Llevar sombreros en la montaña"
    ],
    "correctAnswer": "B) Quemas de rastrojos, barbacoas recreativas y uso de maquinaria en el campo",
    "explanation": "La directiva prohíbe 'quema de rastrojos, el encendido de barbacoas... y el tránsito con maquinaria'."
  },
  {
    "id": "es-b1b2-l-12",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Congreso de nutrición comunitaria: Los especialistas advierten de que el consumo desmedido de alimentos ultraprocesados ricos en azúcares refinados y grasas trans es el primer factor de obesidad infantil.",
    "prompt": "¿Cuál es el principal causante dietético de la obesidad pediátrica?",
    "options": [
      "A) El consumo de fruta fresca de temporada",
      "B) La proliferación de ultraprocesados con azúcares y grasas trans",
      "C) La práctica de deportes escolares al aire libre",
      "D) El consumo de pan integral artesano"
    ],
    "correctAnswer": "B) La proliferación de ultraprocesados con azúcares y grasas trans",
    "explanation": "Los nutricionistas alertan de que 'los alimentos ultraprocesados... son el primer factor'."
  },
  {
    "id": "es-b1b2-l-13",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Agencia Tributaria: Los contribuyentes que hayan percibido rendimientos del trabajo de dos o más pagadores tienen la obligación de presentar la declaración de la renta si la cuantía del segundo supera 1.500 euros anuales.",
    "prompt": "¿En qué circunstancia están obligados a declarar quienes tienen dos pagadores?",
    "options": [
      "A) Siempre que tengan más de sesenta años",
      "B) Si la cuantía percibida del segundo pagador supera 1.500 euros anuales",
      "C) Solo si residen en el extranjero",
      "D) Nunca están obligados si trabajan por cuenta ajena"
    ],
    "correctAnswer": "B) Si la cuantía percibida del segundo pagador supera 1.500 euros anuales",
    "explanation": "La norma tributaria estipula el umbral de obligación si 'la cuantía del segundo supera 1.500 euros'."
  },
  {
    "id": "es-b1b2-l-14",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Instituto Geográfico Nacional: Se ha registrado un sismo de magnitud 4,1 en la escala de Richter con epicentro en el mar de Alborán, sentido de forma leve en varias localidades costeras sin causar daños estructurales.",
    "prompt": "¿Qué consecuencias materiales ocasionó el seísmo registrado?",
    "options": [
      "A) Destrucción masiva de carreteras y puentes",
      "B) Fue percibido de forma leve sin producir daños estructurales",
      "C) La evacuación urgente de ciudades enteras",
      "D) Un maremoto de gran altura"
    ],
    "correctAnswer": "B) Fue percibido de forma leve sin producir daños estructurales",
    "explanation": "El parte oficial confirma que fue 'sentido de forma leve... sin causar daños estructurales'."
  },
  {
    "id": "es-b1b2-l-15",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Debate sobre movilidad urbana: El concejal de urbanismo defiende la ampliación de carriles bici segregados argumentando que reducen un 18% las emisiones contaminantes y disminuyen la siniestralidad de los ciclistas.",
    "prompt": "¿Qué dos beneficios atribuye el concejal a los carriles bici protegidos?",
    "options": [
      "A) Aumento de plazas de aparcamiento para camiones",
      "B) Reducción de emisiones contaminantes y mayor seguridad ciclista",
      "C) La eliminación de los autobuses urbanos",
      "D) El encarecimiento del transporte público"
    ],
    "correctAnswer": "B) Reducción de emisiones contaminantes y mayor seguridad ciclista",
    "explanation": "El edil cita: 'reducen un 18% las emisiones... y disminuyen la siniestralidad de los ciclistas'."
  },
  {
    "id": "es-b1b2-l-16",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Feria del Libro de Madrid: La presidenta del gremio de libreros celebra que las ventas han crecido un 7% respecto al ejercicio anterior, destacando el tirón de la novela gráfica y el ensayo de divulgación entre lectores jóvenes.",
    "prompt": "¿Qué géneros literarios han impulsado las ventas entre el público joven?",
    "options": [
      "A) Los tratados de botánica medieval",
      "B) La novela gráfica y el ensayo de divulgación científica y social",
      "C) Las enciclopedias en tomos de papel",
      "D) Los poemarios en latín"
    ],
    "correctAnswer": "B) La novela gráfica y el ensayo de divulgación científica y social",
    "explanation": "Se recalca 'el tirón de la novela gráfica y el ensayo de divulgación entre lectores jóvenes'."
  },
  {
    "id": "es-b1b2-l-17",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Servicio Meteorológico de Cataluña: Se activa el aviso naranja por precipitaciones torrenciales que podrían superar los 40 litros por metro cuadrado en tan solo media hora en comarcas litorales.",
    "prompt": "¿Cuál es la intensidad prevista de las lluvias torrenciales?",
    "options": [
      "A) Cuatro litros al día",
      "B) Más de 40 litros por metro cuadrado en 30 minutos",
      "C) Llovizna intermitente sin peligro",
      "D) Nevada persistente"
    ],
    "correctAnswer": "B) Más de 40 litros por metro cuadrado en 30 minutos",
    "explanation": "El aviso meteorológico alerta de precipitaciones de 'más de 40 litros por metro cuadrado en media hora'."
  },
  {
    "id": "es-b1b2-l-18",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Museo Reina Sofía: La comisaria de la exposición temporal explica que el cuadro Guernica de Picasso fue pintado en plena Guerra Civil como alegato contra la barbarie del bombardeo nazi y la defensa de la República.",
    "prompt": "¿Qué significado histórico y ético encarna el Guernica según la comisaria?",
    "options": [
      "A) Una celebración pacífica del campo español",
      "B) Un alegato universal contra la barbarie de los bombardeos bélicos",
      "C) Un encargo decorativo para un palacio real",
      "D) Un retrato mitológico de dioses griegos"
    ],
    "correctAnswer": "B) Un alegato universal contra la barbarie de los bombardeos bélicos",
    "explanation": "La comisaria expone que la obra fue concebida como 'alegato contra la barbarie del bombardeo'."
  }
];
export const spanishC1C2Listening = [
  {
    "id": "es-c1c2-l-1",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Discurso en la RAE: La simplificación sintáctica bajo la inmediatez telegráfica empobrece el intelecto; cuando se pierde el período complejo y la subordinación, se amputa la capacidad de formular pensamientos matizados y detectar falacias.",
    "prompt": "¿Qué efecto cognitivo censura el académico respecto al abandono de la sintaxis compleja?",
    "options": [
      "A) Una mejora de la retención mnemotécnica",
      "B) La merma del pensamiento matizado y la indefensión frente a la demagogia",
      "C) La mayor claridad expositiva",
      "D) El auge de la elocuencia oral"
    ],
    "correctAnswer": "B) La merma del pensamiento matizado y la indefensión frente a la demagogia",
    "explanation": "El académico denuncia que se amputa la capacidad de formular razonamientos matizados y discernir falacias."
  },
  {
    "id": "es-c1c2-l-2",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Seminario de Derecho Penal Internacional: La jurisdicción universal no es patente de injerencia judicial arbitraria, sino un resorte subsidiario de cierre que exige constatar la inacción cómplice del Estado territorial ante crímenes contra la humanidad.",
    "prompt": "¿Bajo qué principio opera la jurisdicción universal según la magistrada?",
    "options": [
      "A) Como mecanismo primario de usurpación competencial",
      "B) Con carácter rigurosamente subsidiario ante la pasividad flagrante del fuero territorial",
      "C) Únicamente para litigios mercantiles transfronterizos",
      "D) Como tribunal de arbitraje diplomático"
    ],
    "correctAnswer": "B) Con carácter rigurosamente subsidiario ante la pasividad flagrante del fuero territorial",
    "explanation": "La magistrada insiste en que actúa con carácter subsidiario ante la inacción o complicidad territorial."
  },
  {
    "id": "es-c1c2-l-3",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Conferencia de epistemología: Karl Popper demostró que una teoría solo adquiere estatuto genuinamente científico si es falsable; los sistemas conceptuales que se blindan ante cualquier refutación empírica pertenecen a la metafísica o al dogma.",
    "prompt": "¿Cuál es el criterio popperiano de demarcación entre ciencia y dogma?",
    "options": [
      "A) La corroboración inductiva reiterada",
      "B) La falsabilidad y la susceptibilidad de refutación empírica",
      "C) La aprobación unánime de la sociedad",
      "D) El principio de autoridad dogmática"
    ],
    "correctAnswer": "B) La falsabilidad y la susceptibilidad de refutación empírica",
    "explanation": "Popper sitúa la falsabilidad como criterio demarcatorio imprescindible de las teorías científicas."
  },
  {
    "id": "es-c1c2-l-4",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Coloquio cervantino: Don Quijote no encarna la simple locura burlesca, sino el conflicto ontológico entre la pureza del ideal ético y la mezquindad de un mundo desmitificado donde el heroísmo es tachado de demencia.",
    "prompt": "¿Qué tensión fundamental simboliza la figura de Don Quijote en la ponencia?",
    "options": [
      "A) Un cuadro clínico de demencia senil sin trascendencia",
      "B) La colisión trágica entre la fidelidad ética al idealismo y la prosaica mediocridad circundante",
      "C) La defensa de las monarquías absolutistas",
      "D) El elogio de la picaresca materialista"
    ],
    "correctAnswer": "B) La colisión trágica entre la fidelidad ética al idealismo y la prosaica mediocridad circundante",
    "explanation": "El crítico subraya la dialéctica entre el imperativo moral quijotesco y el pragmatismo desalmado de la realidad."
  },
  {
    "id": "es-c1c2-l-5",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Debate sobre soberanía digital: Los macrodatos acumulados por oligopolios tecnológicos foráneos configuran una nueva servidumbre colonial, expropiando a las democracias su capacidad para fiscalizar algoritmos que modelan la opinión pública.",
    "prompt": "¿Qué amenaza geopolítica denuncia la socióloga respecto a las grandes plataformas?",
    "options": [
      "A) El abaratamiento excesivo de los teléfonos inteligentes",
      "B) Un colonialismo algorítmico que sustrae la gobernanza democrática de la opinión pública",
      "C) El aumento de impuestos al software libre",
      "D) La desaparición de las universidades"
    ],
    "correctAnswer": "B) Un colonialismo algorítmico que sustrae la gobernanza democrática de la opinión pública",
    "explanation": "La experta advierte del riesgo de una 'nueva servidumbre colonial' que evade la fiscalización democrática."
  },
  {
    "id": "es-c1c2-l-6",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Ateneo de Madrid — Filosofía política: Hannah Arendt deslindó el poder de la violencia; mientras la violencia surge de la fuerza coercitiva instrumental de un mando, el poder brota del concierto voluntario de ciudadanos deliberando en la esfera pública.",
    "prompt": "¿Cómo distingue Arendt el poder genuino de la mera violencia coactiva?",
    "options": [
      "A) El poder exige arsenales militares pesados",
      "B) El poder nace de la acción concertada y libre en el espacio cívico deliberativo",
      "C) La violencia es siempre legítima en el Estado",
      "D) El poder es sinónimo de imposición dictatorial"
    ],
    "correctAnswer": "B) El poder nace de la acción concertada y libre en el espacio cívico deliberativo",
    "explanation": "Arendt fundamenta el poder en la capacidad humana de actuar concertadamente mediante la palabra y el acuerdo."
  },
  {
    "id": "es-c1c2-l-7",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Simposio de bioética: La investigación con células madre pluripotenciales no vulnera la dignidad ontológica cuando se canaliza hacia la terapia regenerativa de tejidos, debiendo evitarse la mercantilización de linajes genéticos patentables.",
    "prompt": "¿Qué límite ético enfatiza la bioeticista sobre la biomedicina celular?",
    "options": [
      "A) Prohibir cualquier tipo de trasplante de órganos",
      "B) Salvaguardar el fin terapéutico evitando la privatización comercial de líneas genéticas patentadas",
      "C) Detener los ensayos clínicos en hospitales públicos",
      "D) Obligar al pago de cánones genéticos"
    ],
    "correctAnswer": "B) Salvaguardar el fin terapéutico evitando la privatización comercial de líneas genéticas patentadas",
    "explanation": "El criterio ético conjuga la investigación terapéutica con la proscripción de la mercantilización de la vida."
  },
  {
    "id": "es-c1c2-l-8",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Cátedra de literatura barroca: Las Soledades de Góngora dinamitan la narrativa lineal para erigir un templo verbal deslumbrante donde la agudeza metafórica suspende el tiempo en un éxtasis sensorial y hermético sin parangón.",
    "prompt": "¿Qué rasgo formal singulariza la poética de las Soledades gongorinas?",
    "options": [
      "A) La sencillez popular de coplas breves",
      "B) La suspensión del tiempo lineal en favor de una arquitectura verbal metafórica de alta densidad",
      "C) La ausencia deliberada de adjetivos",
      "D) La subordinación estricta a la moral contrarreformista"
    ],
    "correctAnswer": "B) La suspensión del tiempo lineal en favor de una arquitectura verbal metafórica de alta densidad",
    "explanation": "Se elogia la construcción de un espacio poético hipérbata donde la audacia sensorial prevalece sobre la anécdota."
  },
  {
    "id": "es-c1c2-l-9",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Tribunal Supremo — Sala de lo Contencioso: La potestad discrecional de la Administración no equivale a arbitrariedad impune; la desviación de poder se consuma cuando el acto administrativo persigue fines distintos de los fijados por la norma habilitante.",
    "prompt": "¿Cuándo se produce el vicio jurídico de desviación de poder en un acto público?",
    "options": [
      "A) Cuando el funcionario firma con retraso justificado",
      "B) Cuando la potestad se ejerce para una finalidad ajena a la prevista en el ordenamiento rector",
      "C) Cuando el ciudadano rechaza la notificación oficial",
      "D) En cualquier decisión tributaria automática"
    ],
    "correctAnswer": "B) Cuando la potestad se ejerce para una finalidad ajena a la prevista en el ordenamiento rector",
    "explanation": "La desviación de poder concurre al desviar el ejercicio formal de competencias hacia fines espurios o no previstos."
  },
  {
    "id": "es-c1c2-l-10",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Mesa redonda sobre psicoanálisis y cultura: Jacques Lacan reformuló a Freud aseverando que el inconsciente está estructurado como un lenguaje, gobernado por las figuras retóricas de la metáfora y la metonimia como condensación y desplazamiento.",
    "prompt": "¿Qué homología lingüística postula Lacan en la estructura del inconsciente?",
    "options": [
      "A) Que el inconsciente es un mecanismo químico puramente biológico",
      "B) Que opera mediante las leyes del significante lingüístico a través de la metáfora y la metonimia",
      "C) Que carece de articulación simbólica",
      "D) Que solo se manifiesta en la escritura fonética"
    ],
    "correctAnswer": "B) Que opera mediante las leyes del significante lingüístico a través de la metáfora y la metonimia",
    "explanation": "Lacan asimila los mecanismos de condensación y desplazamiento del sueño a la metáfora y la metonimia jakobsonianas."
  },
  {
    "id": "es-c1c2-l-11",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Seminario de teoría sociológica: La anomia durkheimiana no denota ausencia total de leyes, sino el colapso del marco normativo integrador cuando las transformaciones económicas vertiginosas desbordan la cohesión moral colectiva.",
    "prompt": "¿Cómo conceptualiza Émile Durkheim el estado de anomia social?",
    "options": [
      "A) Como una rebelión anarquista violenta",
      "B) Como la desregulación moral derivada del desfase entre vertiginosos cambios económicos e instituciones normativas",
      "C) Como un exceso de leyes represivas",
      "D) Como una patología individual sin arraigo social"
    ],
    "correctAnswer": "B) Como la desregulación moral derivada del desfase entre vertiginosos cambios económicos e instituciones normativas",
    "explanation": "La anomia emerge cuando la rápida mutación estructural deja a los individuos sin referentes morales compartidos."
  },
  {
    "id": "es-c1c2-l-12",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Círculo de Bellas Artes — Crítica estética: Walter Benjamin advirtió que la reproductibilidad técnica del arte liquida el «aura» de la obra única, pero abre simultáneamente el potencial emancipador de una recepción crítica masiva.",
    "prompt": "¿Qué doble consecuencia estética diagnosticó Benjamin ante la reproducción masiva del arte?",
    "options": [
      "A) La desaparición de los museos de pintura clásica",
      "B) La disolución del aura de irrepetibilidad cultual unida a la politización democrática del arte",
      "C) La decadencia irreparable de toda sensibilidad poética",
      "D) El encarecimiento exponencial de las copias"
    ],
    "correctAnswer": "B) La disolución del aura de irrepetibilidad cultual unida a la politización democrática del arte",
    "explanation": "Benjamin contrasta la pérdida de la lejanía aurática con la apertura a una experiencia receptiva comunitaria."
  },
  {
    "id": "es-c1c2-l-13",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Congreso de sociolingüística: La alternancia de código en hablantes bilingües de comunidades de contacto no obedece a deficiencias léxicas, sino a una sofisticada competencia pragmática que modula la cercanía identitaria y la ironía discursiva.",
    "prompt": "¿Qué valoración sociolingüística merece el fenómeno del code-switching?",
    "options": [
      "A) Un síntoma de deterioro lingüístico que debe sancionarse",
      "B) Un recurso pragmático de gran complejidad que vehicula matices identitarios y estilísticos",
      "C) Una dificultad para traducir al idioma materno",
      "D) Un error gramatical involuntario"
    ],
    "correctAnswer": "B) Un recurso pragmático de gran complejidad que vehicula matices identitarios y estilísticos",
    "explanation": "La investigación contemporánea reivindica el cambio de código como destreza comunicativa avanzada."
  },
  {
    "id": "es-c1c2-l-14",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Conferencia de historia contemporánea: La transición democrática española no fue ni una claudicación sumisa ni una ruptura épica, sino una compleja transacción jurídica sustentada en el desmantelamiento de la legalidad franquista desde sus propios resortes formales.",
    "prompt": "¿Cómo sintetiza el historiador la singularidad jurídica de la Transición de 1978?",
    "options": [
      "A) Como una victoria militar de los ejércitos aliados",
      "B) Como una reforma pactada que transitó de la ley a la ley mediante mecanismos del propio régimen anterior",
      "C) Como un decreto impuesto por organismos internacionales",
      "D) Como una insurrección armada revolucionaria"
    ],
    "correctAnswer": "B) Como una reforma pactada que transitó de la ley a la ley mediante mecanismos del propio régimen anterior",
    "explanation": "Torcuato Fernández-Miranda acuñó la fórmula de 'de la ley a la ley pasando por la ley' para evitar el vacío de legalidad."
  },
  {
    "id": "es-c1c2-l-15",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Coloquio de física teórica: La paradoja del gato de Schrödinger no postula que un felino macroscópico esté vivo y muerto a la vez, sino que satiriza la extrapolación irreflexiva de la superposición cuántica a los estados macroscópicos del observador.",
    "prompt": "¿Qué propósito epistemológico tenía el experimento mental de Erwin Schrödinger?",
    "options": [
      "A) Experimentar con la toxicidad de gases en animales",
      "B) Cuestionar las interpretaciones que extrapolaban alegremente el indeterminismo cuántico al mundo macroscópico",
      "C) Demostrar que los gatos poseen facultades cuánticas",
      "D) Refutar la teoría de la relatividad general"
    ],
    "correctAnswer": "B) Cuestionar las interpretaciones que extrapolaban alegremente el indeterminismo cuántico al mundo macroscópico",
    "explanation": "El experimento mental fue una reducción al absurdo contra las paradojas de la interpretación de Copenhague."
  },
  {
    "id": "es-c1c2-l-16",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Instituto de Filosofía del CSIC: Jürgen Habermas fundamenta la ética del discurso en el principio de que solo son válidas aquellas normas morales que puedan gozar de la aprobación de todos los afectados tras un diálogo racional libre de coacción.",
    "prompt": "¿Cuál es la premisa de validez moral en la ética comunicativa habermasiana?",
    "options": [
      "A) La imposición por mayoría parlamentaria simple",
      "B) El asentimiento libre y no coaccionado de todos los posibles afectados en un discurso deliberativo ideal",
      "C) La concordancia con dogmas teológicos tradicionales",
      "D) El cálculo utilitarista de costes económicos"
    ],
    "correctAnswer": "B) El asentimiento libre y no coaccionado de todos los posibles afectados en un discurso deliberativo ideal",
    "explanation": "El principio 'D' de Habermas supedita la validez moral al consenso racional de los participantes en la deliberación."
  },
  {
    "id": "es-c1c2-l-17",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Encuentro de juristas constitucionales: El control de convencionalidad vincula a los jueces nacionales a interpretar el derecho interno de conformidad con los tratados internacionales de derechos humanos suscritos por el Estado soberano.",
    "prompt": "¿Qué imperativo procesal impone el control de convencionalidad a la judicatura?",
    "options": [
      "A) Desoír las sentencias del Tribunal de Estrasburgo",
      "B) Armonizar la aplicación de la ley nacional con la jurisprudencia de los tratados internacionales suscritos",
      "C) Renunciar al ejercicio de la función judicial en casos complejos",
      "D) Consultar al parlamento antes de cada sentencia"
    ],
    "correctAnswer": "B) Armonizar la aplicación de la ley nacional con la jurisprudencia de los tratados internacionales suscritos",
    "explanation": "El control de convencionalidad exige a los tribunales domésticos garantizar la primacía de los derechos humanos tutelados internacionalmente."
  },
  {
    "id": "es-c1c2-l-18",
    "subtest": "listening",
    "maxPlays": 2,
    "audioPhrase": "Debate sobre alta literatura hispanoamericana: En Cien años de soledad, el tiempo no transcurre rectilíneo hacia el progreso, sino que gira en una noria circular asfixiante donde los descendientes repiten inexorablemente los mismos errores y nombres de sus ancestros.",
    "prompt": "¿Qué concepción temporal vertebra la saga de Macondo según el ponente?",
    "options": [
      "A) Un progreso tecnológico lineal imparable",
      "B) Una temporalidad mítica circular y reiterativa que condena a la estirpe a la fatalidad",
      "C) Un salto al futuro post-apocalíptico",
      "D) Una crónica histórica documental sin metáforas"
    ],
    "correctAnswer": "B) Una temporalidad mítica circular y reiterativa que condena a la estirpe a la fatalidad",
    "explanation": "García Márquez plasma el tiempo circular y repetitivo donde cada generación revive el destino de soledad de la anterior."
  }
];

export const spanishA1A2Speaking = [
  {
    "id": "es-sp-a1a2-01",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 1: En la recepción del hotel",
    "prompt": "Está usted registrándose en un hotel en Salamanca. Responda al recepcionista indicando su nombre, número de noches y pregunte por el desayuno.",
    "context": "Llegada al hotel después de un viaje en tren. Situación cotidiana formal de cortesía básica.",
    "audioPrompt": "Buenas tardes, bienvenido al Hotel Roma. ¿Tiene una reserva a su nombre?",
    "prepSeconds": 15,
    "speakSeconds": 40,
    "modelAnswer": "Buenas tardes. Sí, tengo una reserva a nombre de Juan Pérez por tres noches. ¿A qué hora se sirve el desayuno mañana por la mañana?",
    "criteria": "Saludos formales, identificación clara, concordancia temporal básica."
  },
  {
    "id": "es-sp-a1a2-02",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 2: Comprar billetes de tren",
    "prompt": "En la taquilla de la estación de Atocha. Pida dos billetes de ida y vuelta para Toledo para este fin de semana.",
    "context": "Interacción de compra de servicios de transporte público.",
    "audioPrompt": "Siguiente, por favor. ¿En qué puedo ayudarle hoy?",
    "prepSeconds": 15,
    "speakSeconds": 40,
    "modelAnswer": "Hola, buenos días. Quisiera dos billetes de ida y vuelta para Toledo para el sábado por la mañana. ¿Cuánto cuesta cada billete?",
    "criteria": "Uso de fórmulas de cortesía ('quisiera', 'por favor'), precisión numérica y destino."
  },
  {
    "id": "es-sp-a1a2-03",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 3: Pedir en una cafetería",
    "prompt": "Pida una bebida y algo para comer en una terraza tradicional de Madrid. Pregunte el precio final.",
    "context": "Servicio de restauración informal.",
    "audioPrompt": "¿Qué van a tomar los señores?",
    "prepSeconds": 10,
    "speakSeconds": 35,
    "modelAnswer": "Para mí un café con leche templada y una tostada con tomate y aceite de oliva, por favor. ¿Cuánto es todo?",
    "criteria": "Vocabulario de alimentos y bebidas, fórmulas para ordenar comida."
  },
  {
    "id": "es-sp-a1a2-04",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 4: Preguntar una dirección en la calle",
    "prompt": "Está perdido en Valencia y busca el Museo de Bellas Artes. Detenga a un transeúnte amablemente y pida indicaciones.",
    "context": "Orientación espacial urbana básica.",
    "audioPrompt": "Disculpe, ¿me decía algo a mí?",
    "prepSeconds": 15,
    "speakSeconds": 40,
    "modelAnswer": "Perdón por molestarle. ¿Podría decirme cómo llegar al Museo de Bellas Artes? ¿Está muy lejos de aquí o se puede ir a pie?",
    "criteria": "Disculpas corteses, preguntas indirectas sencillas, orientación espacial."
  },
  {
    "id": "es-sp-a1a2-05",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 5: En una tienda de ropa",
    "prompt": "Le gusta una camisa pero necesita otra talla y otro color. Hable con la dependienta.",
    "context": "Comercio minorista y especificaciones de prendas.",
    "audioPrompt": "¿Le queda bien la camisa que se ha probado en el probador?",
    "prepSeconds": 15,
    "speakSeconds": 40,
    "modelAnswer": "Me gusta mucho el modelo, pero me queda un poco estrecha. ¿Tiene una talla mediana en color azul oscuro, por favor?",
    "criteria": "Adjetivos calificativos de tamaño y color, uso de pronombres de objeto directo."
  },
  {
    "id": "es-sp-a1a2-06",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 6: Cita médica en el centro de salud",
    "prompt": "Explique al médico de cabecera qué síntomas tiene desde hace dos días (dolor de cabeza y fiebre leve).",
    "context": "Consulta sanitaria primaria.",
    "audioPrompt": "Pase y tome asiento. Cuénteme, ¿qué le ocurre?",
    "prepSeconds": 15,
    "speakSeconds": 45,
    "modelAnswer": "Buenos días, doctor. Desde hace dos días me duele mucho la cabeza y tengo un poco de fiebre y dolor de garganta. No he podido dormir bien.",
    "criteria": "Uso de verbos de afección física ('doler', 'tener fiebre'), marcadores temporales ('desde hace...')."
  },
  {
    "id": "es-sp-a1a2-07",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 7: Llamada para alquilar una habitación",
    "prompt": "Llama a un anuncio de piso compartido de estudiantes. Pregunte por el precio del alquiler y si los gastos están incluidos.",
    "context": "Alojamiento compartido y gestión doméstica.",
    "audioPrompt": "Dígame, hablo con el anunciante de la habitación en calle Mayor.",
    "prepSeconds": 15,
    "speakSeconds": 40,
    "modelAnswer": "Hola, llamo por el anuncio de la habitación en alquiler. Quería saber si todavía está libre, cuál es el precio mensual y si los gastos de agua e internet están incluidos.",
    "criteria": "Claridad interrogativa, vocabulario de vivienda y contratos básicos."
  },
  {
    "id": "es-sp-a1a2-08",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 8: Devolución de un producto defectuoso",
    "prompt": "Compró unos auriculares que no funcionan. Vaya al servicio de atención al cliente con el tique de compra.",
    "context": "Reclamación básica y derechos del consumidor.",
    "audioPrompt": "Buenas tardes, ¿en qué podemos atenderle en atención al cliente?",
    "prepSeconds": 15,
    "speakSeconds": 45,
    "modelAnswer": "Buenas tardes. Ayer compré estos auriculares aquí, pero no se conectan con el teléfono móvil. Aquí tengo el tique de compra. Quisiera cambiarlos por otros o pedir la devolución.",
    "criteria": "Expresión de problemas técnicos simples, pretérito indefinido y justificación con comprobante."
  },
  {
    "id": "es-sp-a1a2-09",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 9: Planificar una salida con un amigo",
    "prompt": "Un amigo le propone ir al cine el viernes pero usted tiene que estudiar. Proponga una alternativa para el domingo por la tarde.",
    "context": "Interacción informal entre iguales y negociación de horarios.",
    "audioPrompt": "Oye, ¿te apetece que vayamos al cine este viernes a ver la nueva película de Almodóvar?",
    "prepSeconds": 10,
    "speakSeconds": 40,
    "modelAnswer": "El viernes me resulta imposible porque tengo un examen el lunes y tengo que estudiar. ¿Por qué no vamos el domingo por la tarde y luego tomamos algo en la plaza?",
    "criteria": "Rechazo cortés, justificación causal y propuesta de alternativa con '¿por qué no...?'."
  },
  {
    "id": "es-sp-a1a2-10",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 1: Mi rutina diaria y fines de semana",
    "prompt": "Describa su día a día habitual: a qué hora se levanta, qué desayuna, sus actividades principales de trabajo o estudio y qué le gusta hacer en su tiempo libre los fines de semana.",
    "context": "Exposición descriptiva individual de la vida cotidiana.",
    "audioPrompt": null,
    "prepSeconds": 30,
    "speakSeconds": 75,
    "modelAnswer": "Normalmente me despierto a las siete de la mañana. Me ducho, preparo un café con leche y tostadas, y salgo hacia la oficina a las ocho en metro. Trabajo de nueve a cinco de la tarde. Por las tardes me gusta hacer deporte en el parque o leer novelas en casa. Los fines de semana salgo con mis amigos a comer fuera, visito museos o voy de excursión a la montaña si hace buen tiempo.",
    "criteria": "Coherencia cronológica, verbos reflexivos, conectores cotidianos (normalmente, luego, los fines de semana)."
  },
  {
    "id": "es-sp-a1a2-11",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 2: Descripción de mi ciudad natal",
    "prompt": "Hable sobre su ciudad o pueblo: ubicación geográfica, clima, lugares turísticos o emblemáticos que recomienda visitar y las costumbres de su gente.",
    "context": "Presentación monologada descriptiva geográfica y cultural.",
    "audioPrompt": null,
    "prepSeconds": 30,
    "speakSeconds": 75,
    "modelAnswer": "Mi ciudad está situada cerca de la costa, en una región rodeada de montañas verdes. Es un lugar con un clima templado en primavera y veranos muy soleados. Recomiendo visitar el casco histórico, que tiene una catedral muy antigua y calles peatonales llenas de tiendas artesanales. La gente es muy acogedora y simpática; por las tardes siempre hay mucho ambiente en las terrazas del centro.",
    "criteria": "Adjetivación descriptiva, ubicación con 'estar situado', recomendaciones con 'recomiendo + infinitivo'."
  },
  {
    "id": "es-sp-a1a2-12",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 3: Mis últimas vacaciones inolvidables",
    "prompt": "Narre un viaje que hizo en el pasado: adónde fue, con quién, qué medios de transporte utilizó, qué actividades realizó y qué fue lo que más le impresionó.",
    "context": "Narración en pasado de experiencias personales.",
    "audioPrompt": null,
    "prepSeconds": 30,
    "speakSeconds": 75,
    "modelAnswer": "El verano pasado viajé con mi familia a Andalucía durante dos semanas. Fuimos en tren de alta velocidad desde Madrid hasta Sevilla. Allí visitamos la Plaza de España y el Real Alcázar, que me pareció impresionante por su arquitectura morisca. Luego alquilamos un coche para ir a Granada y conocer la Alhambra. La gastronomía local, especialmente las tapas de pescado y el gazpacho, fue deliciosa.",
    "criteria": "Dominio de tiempos de pasado (pretérito indefinido e imperfecto), alternancia narrativa y valoración personal."
  }
];
export const spanishB1B2Speaking = [
  {
    "id": "es-sp-b1b2-01",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 1: Entrevista de nacionalidad y arraigo",
    "prompt": "En una entrevista oficial para la nacionalidad española. Justifique su integración en la sociedad española, su conocimiento de las instituciones y su participación en la comunidad local.",
    "context": "Examen de ciudadanía y arraigo social ante el Registro Civil.",
    "audioPrompt": "Buenos días. Explíquenos por qué desea adquirir la nacionalidad española y de qué manera contribuye activamente a su barrio o municipio.",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Buenos días. Llevo más de cinco años residiendo legalmente en España, donde he establecido mi hogar y mi vida laboral como desarrollador de software. Me siento plenamente integrado: participo en la asociación vecinal de mi distrito, pago mis impuestos con puntualidad y comparto los valores cívicos y constitucionales de tolerancia y solidaridad que caracterizan a esta sociedad. Deseo adquirir la nacionalidad para consolidar mi compromiso cívico definitivo.",
    "criteria": "Elocuencia formal, léxico cívico (integración, valores constitucionales, arraigo), subordinación argumentativa."
  },
  {
    "id": "es-sp-b1b2-02",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 2: Negociación de teletrabajo con el supervisor",
    "prompt": "Solicite a su responsable de departamento una jornada híbrida de dos días de teletrabajo semanal. Presente argumentos de productividad y equilibrio personal.",
    "context": "Ámbito laboral corporativo y negociación asertiva.",
    "audioPrompt": "Hola, me comentaste que querías hablar conmigo sobre la organización de tus jornadas de trabajo presenciales.",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Hola, gracias por reunirte conmigo. Quería plantear la posibilidad de adoptar un modelo de trabajo híbrido con dos días de teletrabajo a la semana. En los últimos trimestres he demostrado que el trabajo remoto me permite concentrarme mejor en tareas analíticas complejas sin interrupciones, además de optimizar las dos horas diarias que invierto en desplazamientos. Por supuesto, garantizaría mi presencia los días de reuniones clave de equipo.",
    "criteria": "Asertividad laboral, conectores concesivos y causales ('además de', 'por supuesto que'), argumentación orientada a resultados."
  },
  {
    "id": "es-sp-b1b2-03",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 3: Junta de propietarios y obras comunitarias",
    "prompt": "En la reunión de vecinos del edificio, defienda la instalación de placas solares frente a un vecino que se opone alegando un coste inicial excesivo.",
    "context": "Debate comunitario de propietarios y toma de decisiones colectivas.",
    "audioPrompt": "Yo creo que gastar dinero en placas solares en el tejado es un despilfarro innecesario que nos subirá la cuota mensual a todos.",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Entiendo perfectamente tu preocupación por la derrama inicial, vecino; sin embargo, conviene recordar que la Unión Europea y el Ayuntamiento ofrecen subvenciones que financian hasta el 50% de la instalación. Además, según los estudios técnicos, el ahorro en la factura de la luz común compensará la inversión en menos de cuatro años, aumentando a su vez el valor de reventa de todas nuestras viviendas.",
    "criteria": "Contraargumentación respetuosa ('entiendo pero...'), justificación con datos verosímiles, léxico económico comunitario."
  },
  {
    "id": "es-sp-b1b2-04",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 4: Reclamación formal por cancelación de vuelo",
    "prompt": "En el mostrador de la aerolínea en el aeropuerto de Barajas tras la cancelación de un vuelo internacional de negocios. Exija alojamiento y compensación conforme al reglamento europeo.",
    "context": "Gestión de incidencias graves de consumo en transportes.",
    "audioPrompt": "Lamentamos las molestias, pero el vuelo ha sido cancelado por razones operativas de la compañía y no saldrá hasta mañana a mediodía.",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Comprendo el imprevisto, pero de acuerdo con el Reglamento Europeo 261/2004, al tratarse de una causa operativa imputable a la aerolínea, exijo que se me proporcione inmediatamente un vale para hotel con traslados y manutención incluidos, así como la hoja oficial de reclamaciones para solicitar la indemnización económica correspondiente a este retraso.",
    "criteria": "Firmeza cortés sin agresividad, referencia normativa, vocabulario jurídico-administrativo."
  },
  {
    "id": "es-sp-b1b2-05",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 5: Asesoría bancaria para préstamo hipotecario",
    "prompt": "Pregunte al asesor financiero de un banco sobre las ventajas e inconvenientes de una hipoteca a tipo fijo frente a una a tipo variable en el contexto económico actual.",
    "context": "Transacción financiera y toma de decisiones informada.",
    "audioPrompt": "Buenos días. Hemos analizado su perfil financiero y podemos ofrecerle ambas modalidades de hipoteca. ¿Qué dudas tiene al respecto?",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Buenos días. Me gustaría conocer con exactitud el diferencial aplicable al Euríbor en la modalidad variable y qué cláusulas suelo o techo contemplan. Asimismo, quisiera saber qué vinculaciones de productos, como seguros de vida o planes de pensiones, me exigirían para bonificar el tipo de interés en la opción a tipo fijo y tener mayor certeza mensual en mis gastos.",
    "criteria": "Terminología bancaria especializada (Euríbor, tipo fijo/variable, bonificación, vinculación), precisión sintáctica."
  },
  {
    "id": "es-sp-b1b2-06",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 6: Entrevista laboral para un puesto de gestión",
    "prompt": "Explique al director de recursos humanos cómo resolvió con éxito un conflicto entre miembros de su equipo en su empleo anterior.",
    "context": "Entrevista competencial de selección de personal.",
    "audioPrompt": "En un puesto de liderazgo surgen desacuerdos continuos. ¿Podría relatarnos una situación en la que haya mediado con éxito en su equipo?",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Por supuesto. En mi anterior empresa, dos especialistas tenían visiones opuestas sobre la arquitectura técnica de un proyecto urgente, lo que estaba paralizando las entregas. En lugar de imponer una decisión unilateral, convoqué reuniones individuales para escuchar sus inquietudes técnicas y luego organicé una sesión conjunta de diseño donde definimos criterios objetivos de rendimiento. Logramos consensuar una solución híbrida que cumplió los plazos sin deteriorar el clima laboral.",
    "criteria": "Habilidades directivas, uso magistral del pretérito perfecto simple e imperfecto de subjuntivo, coherencia narrativa."
  },
  {
    "id": "es-sp-b1b2-07",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 7: Consulta con un arquitecto de reformas",
    "prompt": "Discuta la redistribución de tabiques de un piso antiguo respetando las estructuras de carga y buscando mayor eficiencia energética.",
    "context": "Planificación técnica de obras y sostenibilidad.",
    "audioPrompt": "He revisado los planos originales del piso. Si derribamos este tabique comunicamos el salón con la cocina, pero debemos verificar si es muro de carga.",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Coincido en que abrir el espacio potenciará la iluminación natural; sin embargo, no debemos comprometer en ningún caso la integridad estructural del inmueble. Si el informe del perito confirma que es muro de carga, preferiría colocar una viga de refuerzo o sustituir parte de la pared por una cristalera de doble acristalamiento con rotura de puente térmico para no perder aislamiento.",
    "criteria": "Vocabulario de construcción y arquitectura, subordinación condicional ('si confirma... preferiría')."
  },
  {
    "id": "es-sp-b1b2-08",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 8: Debate universitario sobre inteligencia artificial en la docencia",
    "prompt": "En un seminario académico, debata con un profesor sobre si la inteligencia artificial generativa debería prohibirse o integrarse en las evaluaciones de los estudiantes.",
    "context": "Ámbito universitario e innovación pedagógica.",
    "audioPrompt": "Considero que permitir herramientas de IA en los exámenes universitarios destruye la capacidad de razonamiento crítico del alumnado.",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Comprendo el riesgo de plagio y dependencia cognitiva, profesor; no obstante, prohibir estas herramientas resulta anacrónico e inviable en el mundo profesional moderno. En mi opinión, el desafío reside en transformar las pruebas evaluativas: en lugar de exigir memorización pasiva, deberíamos evaluar la capacidad del estudiante para contrastar las respuestas generadas por los algoritmos, detectar sesgos éticos y aportar juicios críticos originales.",
    "criteria": "Registro formal académico, contraposición retórica ('no obstante', 'en lugar de'), articulación de tesis sólida."
  },
  {
    "id": "es-sp-b1b2-09",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 9: Mediación escolar ante tutor de curso",
    "prompt": "Como padre/madre o tutor de un alumno, hable con el tutor del colegio para buscar medidas contra un caso incipiente de acoso escolar en el recreo.",
    "context": "Comunidad educativa y resolución de conflictos interpersonales.",
    "audioPrompt": "Gracias por solicitar esta tutoría. ¿Qué situación concreta ha detectado que requiera nuestra intervención docente?",
    "prepSeconds": 20,
    "speakSeconds": 60,
    "modelAnswer": "Buenas tardes. He notado en mi hijo una renuencia creciente a asistir a clase y aislamiento durante los periodos de patio debido a comentarios despectivos reiterados de un grupo de compañeros. Solicito que el equipo de orientación active el protocolo de convivencia del centro escolar, supervisando con mayor celo los recreos y trabajando dinámicas de empatía grupal en el aula para atajar esta conducta antes de que escale.",
    "criteria": "Tono constructivo y firme, terminología pedagógica oficial (protocolo de convivencia, equipo de orientación)."
  },
  {
    "id": "es-sp-b1b2-10",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 1: El reto demográfico y la despoblación rural en España",
    "prompt": "Exponga el fenómeno de la 'España vaciada': causas del éxodo juvenil a las grandes urbes, consecuencias económicas y propuestas viables para revitalizar los pueblos mediante conectividad digital e incentivos fiscales.",
    "context": "Presentación oral argumentativa de análisis socioeconómico.",
    "audioPrompt": null,
    "prepSeconds": 45,
    "speakSeconds": 120,
    "modelAnswer": "El fenómeno de la despoblación rural, comúnmente denominado la 'España vaciada', constituye uno de los desafíos estructurales más apremiantes de nuestra época. Durante décadas, la concentración de servicios educativos, sanitarios y oportunidades laborales en metrópolis como Madrid o Barcelona ha provocado un éxodo continuado de las generaciones jóvenes, envejeciendo la población rural y abandonando infraestructuras productivas primordiales. Para revertir esta tendencia no bastan las subvenciones asistenciales: es imprescindible garantizar una conectividad de fibra óptica ultrarrápida que permita el teletrabajo de profesionales cualificados, implementar una fiscalidad diferenciada con deducciones sustanciales para autónomos que se radiquen en estos municipios y recuperar los servicios sanitarios y de transporte público esenciales.",
    "criteria": "Estructura discursiva tripartita (introducción, análisis de causas, batería de soluciones), riqueza léxica y prosodia madura."
  },
  {
    "id": "es-sp-b1b2-11",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 2: Transición energética y soberanía alimentaria",
    "prompt": "Analice el dilema existente entre la proliferación masiva de parques fotovoltaicos y eólicos en terrenos agrícolas y la preservación de la superficie cultivable para la soberanía alimentaria.",
    "context": "Exposición monologada de equilibrio medioambiental y productivo.",
    "audioPrompt": null,
    "prepSeconds": 45,
    "speakSeconds": 120,
    "modelAnswer": "La descarbonización de la economía constituye un imperativo incuestionable para mitigar el cambio climático; sin embargo, la implantación desordenada de macroparques solares y eólicos sobre suelo agrícola de alto rendimiento está generando una notable inquietud en el sector primario. Al ocupar miles de hectáreas destinadas tradicionalmente al cultivo de cereal, olivar o frutales, se corre el riesgo de menoscabar la soberanía alimentaria y erosionar el modo de vida de comunidades campesinas históricas. Una solución equilibrada exige una ordenación territorial rigurosa que priorice la instalación de paneles en cubiertas urbanas, polígonos industriales y tierras yermas no cultivables, fomentando simultáneamente proyectos de agrivoltaica donde la generación de energía limpia coexista de manera sinérgica con la producción agrícola.",
    "criteria": "Discurso argumentativo matizado, conectores contrastivos ('sin embargo', 'al menoscabar', 'exige priorizar'), tecnicismos del sector."
  },
  {
    "id": "es-sp-b1b2-12",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 3: La influencia de las redes sociales en el bienestar psicológico juvenil",
    "prompt": "Hable sobre el impacto de los algoritmos de recomendación y las pantallas en la salud mental de los adolescentes: trastornos del sueño, hipercomparación estética y necesidad de alfabetización digital en las escuelas.",
    "context": "Discurso oral analítico sobre sociedad digital y psicología contemporánea.",
    "audioPrompt": null,
    "prepSeconds": 45,
    "speakSeconds": 120,
    "modelAnswer": "La omnipresencia de las redes sociales ha reconfigurado sustancialmente los patrones de socialización de los adolescentes. Si bien estas plataformas facilitan la comunicación instantánea y el acceso al conocimiento, diversos estudios psiquiátricos advierten de una correlación directa entre el uso intensivo de pantallas y el incremento de cuadros de ansiedad, insomnio y dismorfia corporal alimentada por ideales estéticos irreales filtrados por algoritmos opacos. Frente a este panorama, las respuestas meramente prohibitivas resultan insuficientes; se precisa una auténtica alfabetización digital transversal en el currículo escolar que dote a los menores de pensamiento crítico frente a la gratificación instantánea, junto con una regulación europea estricta que obligue a las tecnológicas a implementar diseños por defecto éticos y protectores.",
    "criteria": "Argumentación fluida con períodos sintácticos complejos, variedad léxica (omnipresencia, reconfigurar, gratificación instantánea, dismorfia)."
  }
];
export const spanishC1C2Speaking = [
  {
    "id": "es-sp-c1c2-01",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 1: Comité de Bioética e Ingeniería Genética",
    "prompt": "Ante una comisión parlamentaria de bioética, debata con un catedrático sobre los límites legales y deontológicos de la edición genómica embrionaria (CRISPR-Cas9).",
    "context": "Deliberación científica, jurídica y filosófica al más alto nivel académico.",
    "audioPrompt": "La erradicación de patologías monogénicas hereditarias justifica plenamente la alteración del genoma en línea germinal, relegando cualquier recelo moral a un oscurantismo retrógrado.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Disiento de su planteamiento por considerarlo reduccionista en su dimensión axiológica, colega. Nadie cuestiona la nobleza terapéutica de erradicar enfermedades devastadoras; empero, la intervención en la línea germinal trasciende la beneficencia individual para conculcar el principio de precaución biológica y equidad intergeneracional. Abrir la compuerta a modificaciones genéticas hereditarias entraña el riesgo inmanente de deslizarse hacia una eugenesia de consumo donde la desigualdad socioeconómica cristalice en disparidades biológicas irreversibles.",
    "criteria": "Léxico erudito de alta precisión, empleo de figuras retóricas y conectores de alta gama ('empero', 'axiológica', 'conculcar')."
  },
  {
    "id": "es-sp-c1c2-02",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 2: Defensa procesal ante un tribunal de apelación",
    "prompt": "Actuando como letrado en un recurso contencioso-administrativo, alegue la nulidad de pleno derecho de una sanción ambiental por vulneración del principio de tipicidad.",
    "context": "Ejercicio del derecho procesal superior.",
    "audioPrompt": "Letrado, la Sala considera que el texto de la ordenanza municipal amparaba tácitamente la imposición de la multa impuesta a su representada.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Con la debida venia de la Sala, esta parte discrepa categóricamente de tal interpretación. El artículo 25 de la Carta Magna consagra sin ambages el principio de legalidad y tipicidad en su vertiente sancionadora, vedando de manera taxativa la analogía in peius. Pretender que una vaga ordenanza municipal ampare tácitamente la restricción de derechos patrimoniales sin un mandato habilitante explícito en sede legislativa conculca las garantías procesales más elementales del administrado, lo que aboca ineluctablemente a la declaración de nulidad radical de la resolución recurrida.",
    "criteria": "Registro forense impecable ('con la debida venia', 'analogía in peius', 'taxativa', 'ineluctablemente')."
  },
  {
    "id": "es-sp-c1c2-03",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 3: Consejo editorial y canon literario panhispánico",
    "prompt": "En el consejo de una editorial de prestigio, argumente a favor de editar una antología crítica de literatura indigenista frente a la preferencia de publicar autores consolidados del canon comercial.",
    "context": "Crítica literaria, filología y sociología de la cultura.",
    "audioPrompt": "Publicar textos indigenistas decimonónicos es un riesgo comercial; nuestro balance económico exige centrarnos en novelistas contemporáneos de éxito probado.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Si bien salvaguardar la viabilidad financiera de nuestro sello es una premisa ineludible, reducir nuestra política editorial al mero seguidismo de los vaivenes mercantilistas implicaría una abdicación flagrante de nuestra responsabilidad cultural. La literatura indigenista panhispánica encierra un valor testimonial y polifónico cuya rescritura crítica resulta hoy imprescindible para resignificar el canon hispánico. Lejos de ser un lastre deficitario, una edición rigurosamente prologada y anotada posee vocación de texto de referencia académico con ventas sostenidas a largo plazo.",
    "criteria": "Riqueza léxica humanística ('abdicación flagrante', 'polifónico', 'resignificar'), argumentación de fondo con visión estratégica."
  },
  {
    "id": "es-sp-c1c2-04",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 4: Comisión de política monetaria y riesgo sistémico",
    "prompt": "Debata sobre la pertinencia de mantener tipos de interés elevados para controlar la inflación subyacente a expensas de la desaceleración del crédito a pequeñas y medianas empresas.",
    "context": "Macroeconomía aplicada y deliberación de banca central.",
    "audioPrompt": "La persistencia de la inflación en el sector servicios nos obliga a prolongar el endurecimiento monetario sin concesiones temporales.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Coincido en que desanclar las expectativas de inflación acarrearía costes lesivos; no obstante, una calibración dogmática de los tipos de interés desprovista de flexibilidad sectorial corre el riesgo de asfixiar innecesariamente el tejido productivo de las pymes, cuya dependencia del crédito bancario a corto plazo es crítica. Un exceso de celo contractivo podría desencadenar una espiral de morosidad y destrucción de capital fijo que supere con creces las presuntas ganancias en estabilidad de precios.",
    "criteria": "Dominio de la jerga macrofinanciera ('desanclar expectativas', 'calibración dogmática', 'capital fijo'), retórica equilibrada."
  },
  {
    "id": "es-sp-c1c2-05",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 5: Negociación de un tratado de repatriación patrimonial",
    "prompt": "Como representante diplomático de un museo nacional, negocie la restitución de piezas arqueológicas prehispánicas expuestas en el extranjero conciliando el acceso público universal con la legitimidad de origen.",
    "context": "Diplomacia cultural y patrimonio histórico internacional.",
    "audioPrompt": "Nuestras instituciones han custodiado, preservado y divulgado estas piezas durante más de un siglo con rigor museístico innegable.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Reconocemos y encomiamos la pulcritud conservatoria desplegada por su institución a lo largo de décadas; no obstante, el imperativo ético contemporáneo exige superar los paradigmas decimonónicos de acumulación patrimonial. Proponemos un marco cooperativo de copropiedad y custodias itinerantes compartidas que honre la legitimidad inalienable del país de origen sin privar a la comunidad internacional del acceso pedagógico a este acervo milenario.",
    "criteria": "Diplomacia de alta cortesía, léxico jurídico-museográfico ('pulcritud conservatoria', 'inalienable', 'acervo')."
  },
  {
    "id": "es-sp-c1c2-06",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 6: Conferencia sobre lingüística computacional y sesgos algorítmicos",
    "prompt": "Contraste la hipótesis de que los modelos fundacionales de lenguaje reproducen y amplifican asimetrías sociolingüísticas en las variedades dialectales periféricas del español.",
    "context": "Filología computacional e inteligencia artificial.",
    "audioPrompt": "Los modelos de lenguaje actuales son completamente neutros; se limitan a reflejar distribuciones probabilísticas matemáticas del corpus textual global.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Argüir que un modelo probabilístico es aséptico soslaya el hecho epistemológico de que todo corpus textual es tributario de relaciones históricas de poder y visibilidad hegemónica. Al sobreindexar variedades peninsulares estandarizadas y literatura corporativa, los algoritmos desatienden la sintaxis y el caudal léxico de las variantes dialectales andinas, rioplatenses o antillanas, generando una retroalimentación que estigmatiza tácitamente la riqueza pluricéntrica de nuestra lengua común.",
    "criteria": "Sustentación teórica impecable, léxico lingüístico preciso ('corpus textual', 'soslaya', 'pluricéntrica', 'epistemológico')."
  },
  {
    "id": "es-sp-c1c2-07",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 7: Tribunal de tesis doctoral en filosofía política",
    "prompt": "Responda a la objeción del presidente del tribunal sobre la supuesta incompatibilidad teórica entre cosmopolitismo republicano y soberanía popular local.",
    "context": "Defensa doctoral universitaria del máximo rigor.",
    "audioPrompt": "Su tesis sostiene un cosmopolitismo universal que, a mi juicio, vacía de contenido la potestad soberana del demos delimitado territorialmente.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Agradezco profundamente la perspicaz objeción del ilustre presidente del tribunal. Lejos de disolver el demos local, el republicanismo cosmopolita que postulo concibe la soberanía no como un coto cerrado de discrecionalidad autárquica, sino como un entramado de instituciones federadas orientadas a impedir la dominación transnacional. La legitimidad de la deliberación interna se robustece, precisamente, cuando se articula en congruencia con estándares universales de no-dominación y derechos inmanentes.",
    "criteria": "Tratamiento protocolario universitario, solidez conceptual y dialéctica kantiano-republicana fluida."
  },
  {
    "id": "es-sp-c1c2-08",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 8: Panel consultivo sobre transición agroecológica y mercados de futuros",
    "prompt": "Exponga cómo la especulación financiera en los mercados de derivados de materias primas agrarias desvirtúa los precios de referencia para los pequeños agricultores.",
    "context": "Geopolítica agraria y análisis de mercados financieros.",
    "audioPrompt": "Los mercados de futuros agrícolas son herramientas imprescindibles de cobertura de riesgo que proporcionan liquidez y estabilidad al sistema.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "En su génesis teórica, la cobertura de riesgo es un mecanismo plausible; empero, la hiperfinanciarización de los derivados sobre alimentos ha desvinculado las cotizaciones bursátiles de las variables físicas de oferta y demanda reales. La intromisión de fondos de inversión indexados de alta frecuencia genera una volatilidad artificial que arruina las expectativas de siembra del campesinado tradicional, al tiempo que encarece los productos de primera necesidad en los países más vulnerables.",
    "criteria": "Rigor analítico interdisciplinar, riqueza oratoria y dominio de estructuras sintácticas complejas."
  },
  {
    "id": "es-sp-c1c2-09",
    "type": "speaking",
    "section": "speaking",
    "taskType": "dialogue",
    "title": "Diálogo 9: Debate sobre bioarquitectura y preservación del paisaje histórico",
    "prompt": "Defienda ante la comisión de urbanismo la integración de un edificio vanguardista de madera contralaminada en el entorno protegido de una plaza mayor barroca.",
    "context": "Urbanismo contemporáneo y tutela patrimonial.",
    "audioPrompt": "Construir con formas abstractas y maderas modernas en este entorno monumental supone un atentado visual flagrante contra la coherencia estilística barroca.",
    "prepSeconds": 25,
    "speakSeconds": 75,
    "modelAnswer": "Comprendo la cautela de la comisión, mas rechazo la premisa de que la tutela del patrimonio deba cristalizar en un historicismo mimético y estéril. La verdadera vitalidad de la historia urbana radica en el diálogo dialéctico entre épocas. Este proyecto no disimula su contemporaneidad; honra la escala volumétrica y las alineaciones visuales de la plaza barroca preexistente, empleando materiales biológicos de huella de carbono negativa que dialogan con sobriedad y reverencia hacia el legado pretérito.",
    "criteria": "Persuasión estética de elevado vuelo intelectual, conceptos de conservación arquitectónica y retórica pulida."
  },
  {
    "id": "es-sp-c1c2-10",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 1: El panhispanismo y la norma policéntrica en la RAE e Instituto Cervantes",
    "prompt": "Diserte sobre la transición de un modelo lingüístico monocéntrico tutelado por la Península Ibérica hacia una concepción policéntrica panhispánica sustentada en la igualdad sociolingüística de las academias de América, Filipinas y Guinea Ecuatorial.",
    "context": "Disertación magistral de sociolingüística y política lingüística panhispánica.",
    "audioPrompt": null,
    "prepSeconds": 60,
    "speakSeconds": 150,
    "modelAnswer": "La evolución de la política lingüística panhispánica a lo largo de las últimas décadas representa un hito epistemológico y cultural de primer orden. Durante siglos, la norma académica operó bajo una inercia monocéntrica implícita que confería primacía tácita al estándar castellano septentrional. La formulación de la Nueva Gramática y la Ortografía consensuadas por la Asociación de Academias de la Lengua Española consumó una ruptura fecunda con este paradigma: consagró el reconocimiento formal de que no existe una variedad geográfica intrínsecamente superior o más pura que otra. El español contemporáneo se articula como una constelación policéntrica donde la norma culta de Bogotá, Buenos Aires, Ciudad de México o Madrid posee idéntica legitimidad intrínseca. Esta democratización idiomática no solo desarticula anacrónicos complejos coloniales, sino que proyecta hacia el escenario geopolítico global la imagen de una lengua cohesionada en su diversidad viva y exuberante.",
    "criteria": "Elocuencia académica superior, ilación discursiva impecable, riqueza conceptual y prosodia natural culta."
  },
  {
    "id": "es-sp-c1c2-11",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 2: Paradojas de la hiperconectividad y erosión de la esfera pública habermasiana",
    "prompt": "Analice cómo la balcanización algorítmica de la información en entornos digitales disuelve el consenso deliberativo indispensable para el funcionamiento de las democracias constitucionales representativas.",
    "context": "Ensayo oral de teoría política y sociología de la comunicación.",
    "audioPrompt": null,
    "prepSeconds": 60,
    "speakSeconds": 150,
    "modelAnswer": "En su célebre formulación sobre la transformación estructural de la esfera pública, Jürgen Habermas concebía el espacio comunicativo como un foro regido por la fuerza del mejor argumento, donde ciudadanos racionales contrastaban pareceres en pos del interés general. Paradójicamente, la era de la supuesta democratización informática absoluta ha precipitado una fragmentación cognitiva sin precedentes. Mediante algoritmos de optimización del engagement diseñados para monetizar el ultraje y la polarización afectiva, el ágora compartida ha quedado suplantada por cámaras de eco herméticas y tribus epistémicas impermeables a la evidencia fáctica. Cuando los ciudadanos ya no comparten un suelo común de hechos contrastados, el sustrato mismo de la deliberación democrática se evapora, cediendo su lugar a un maniqueísmo tribal donde el adversario legítimo es deshumanizado como enemigo existencial. Reconstruir este tejido cívico demanda no solo cortapisas antimonopolísticas a las grandes plataformas, sino refundar una pedagogía ciudadana de la lentitud y la escucha reflexiva.",
    "criteria": "Profundidad analítica sobresaliente, concatenación de períodos complejos, brillantez expresiva y dominio conceptual."
  },
  {
    "id": "es-sp-c1c2-12",
    "type": "speaking",
    "section": "speaking",
    "taskType": "monologue",
    "title": "Monólogo 3: La encrucijada ontológica de la inteligencia artificial y la creatividad artística",
    "prompt": "Reflexione sobre si la capacidad de los modelos de inteligencia artificial para componer sinfonías, redactar literatura o generar arte visual cuestiona la singularidad inalienable del espíritu humano o constituye un mero ejercicio combinatorio desprovisto de intencionalidad afectiva.",
    "context": "Disertación filosófica y estética contemporánea.",
    "audioPrompt": null,
    "prepSeconds": 60,
    "speakSeconds": 150,
    "modelAnswer": "La irrupción de sistemas generativos capaces de emular con virtuosismo asombroso el estilo de los grandes maestros de la pintura o la pluma nos sitúa ante una encrucijada ontológica ineludible. Sin embargo, equiparar la pericia mimética de un algoritmo estadístico con el acto creador humano dimana de una confusión categorial profunda. El arte genuino jamás ha sido un mero juego combinatorio de sintagmas o patrones cromáticos; es el testimonio indeleble de una conciencia encarnada que experimenta la contingencia de la muerte, el desgarro de la pérdida, la epifanía del amor y la angustia temporal. La máquina carece constitutivamente de vulnerabilidad biológica, de biografía existencial y de intencionalidad ética. Lo que engendra la inteligencia artificial es un simulacro formal fascinante, mas desprovisto de alma comunicante; el arte verdadero seguirá siendo siempre el abismo palpitante en el que un ser humano finito interpela a sus semejantes.",
    "criteria": "Capacidad de abstracción filosófica sublime, recursos estilísticos y oratorios del más alto nivel de dominio C2."
  }
];

export const spanishExamPools = {
  deleA1A2: {
    levelKey: "deleA1A2",
    title: "DELE A1–A2 (Inicial & Plataforma • Instituto Cervantes)",
    badge: "DELE A1–A2 • Inicial",
    description: "Evaluación de supervivencia y vida cotidiana: intercambios de compras, transporte, notas breves, audios cotidianos y presentaciones orales.",
    reading: spanishA1A2Reading,
    writing: spanishA1A2Writing,
    listening: spanishA1A2Listening,
    speaking: spanishA1A2Speaking
  },
  deleB1B2: {
    levelKey: "deleB1B2",
    title: "DELE B1–B2 (Ciudadanía Española, Laboral & Académico Oficial)",
    badge: "DELE B1–B2 • Ciudadanía & Pro",
    description: "Nivel oficial requerido por el Ministerio de Justicia para la nacionalidad española por residencia (B1) y para el ejercicio profesional/universitario (B2).",
    reading: spanishB1B2Reading,
    writing: spanishB1B2Writing,
    listening: spanishB1B2Listening,
    speaking: spanishB1B2Speaking
  },
  deleC1C2: {
    levelKey: "deleC1C2",
    title: "DELE / SIELE C1–C2 (Superior & Dominio Operativo Eficaz)",
    badge: "DELE C1–C2 • Maestría",
    description: "Máxima solvencia lingüística: análisis crítico, derecho procesal, discurso ensayístico, sociolingüística panhispánica y elocuencia académica.",
    reading: spanishC1C2Reading,
    writing: spanishC1C2Writing,
    listening: spanishC1C2Listening,
    speaking: spanishC1C2Speaking
  }
};

/**
 * Generates an authentic, fresh Spanish DELE / SIELE CBT exam session
 * prioritizing unseen questions for the logged-in user on every attempt.
 * 
 * @param {string} levelKey - 'deleA1A2' | 'deleB1B2' | 'deleC1C2'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @param {Set<string>} seenQuestionIds - IDs of questions previously attempted by the user
 * @returns {object} Randomized Spanish exam session object
 */
export function generateSpanishDynamicExam(levelKey = "deleB1B2", subtestFilter = "all", seenQuestionIds = new Set()) {
  const pool = spanishExamPools[levelKey] || spanishExamPools.deleB1B2;

  // 1. Reading exercises (prioritizing brand new items)
  const readingResult = selectBrandNewSet(pool.reading, Math.min(6, pool.reading.length), seenQuestionIds);
  const selectedReading = readingResult.selected;

  // 2. Writing tasks: message + essay (prioritizing brand new items)
  const messagesResult = selectBrandNewSet(pool.writing, Math.min(2, pool.writing.length), seenQuestionIds, item => item.taskType === "message");
  const essaysResult = selectBrandNewSet(pool.writing, Math.min(1, pool.writing.length), seenQuestionIds, item => item.taskType === "essay");
  const selectedWriting = [...messagesResult.selected, ...essaysResult.selected];

  // 3. Listening recordings (prioritizing brand new items)
  const listeningResult = selectBrandNewSet(pool.listening, Math.min(6, pool.listening.length), seenQuestionIds);
  const selectedListening = listeningResult.selected;

  // 4. Speaking tasks: dialogues + monologue (prioritizing brand new items)
  const dialoguesResult = selectBrandNewSet(pool.speaking, Math.min(3, pool.speaking.length), seenQuestionIds, item => item.taskType === "dialogue");
  const monologuesResult = selectBrandNewSet(pool.speaking, Math.min(1, pool.speaking.length), seenQuestionIds, item => item.taskType === "monologue");
  const selectedSpeaking = [...dialoguesResult.selected, ...monologuesResult.selected];

  // Assemble question stream based on chosen subtest
  let questions = [];
  let durationMinutes = 0;
  let subtestLabel = "Simulación Oficial DELE Completa (4 Pruebas)";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = 60;
    subtestLabel = "Comprensión de lectura (6 Documentos auténticos • 60 min)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = 60;
    subtestLabel = "Expresión e interacción escritas (2 Mensajes + 1 Ensayo • 60 min)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = 35;
    subtestLabel = "Comprensión auditiva (6 Audios oficiales en español • 35 min)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = 20;
    subtestLabel = "Expresión e interacción orales (3 Diálogos + 1 Monólogo • 20 min)";
  } else {
    // "all" - Full official simulation
    questions = [
      ...selectedReading,
      ...selectedWriting,
      ...selectedListening,
      ...selectedSpeaking
    ];
    durationMinutes = 175;
    subtestLabel = "Examen Completo DELE / SIELE (4 Competencias Oficiales • 19 Tareas)";
  }

  const isBrandNewSession = 
    (subtestFilter === "reading" && readingResult.isBrandNew) ||
    (subtestFilter === "writing" && messagesResult.isBrandNew && essaysResult.isBrandNew) ||
    (subtestFilter === "listening" && listeningResult.isBrandNew) ||
    (subtestFilter === "speaking" && dialoguesResult.isBrandNew && monologuesResult.isBrandNew) ||
    (subtestFilter === "all" && readingResult.isBrandNew && messagesResult.isBrandNew && listeningResult.isBrandNew);

  const sessionId = `es-${levelKey}-${subtestFilter}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

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
    isBrandNewSession,
    counts: {
      reading: subtestFilter === "all" || subtestFilter === "reading" ? selectedReading.length : 0,
      writing: subtestFilter === "all" || subtestFilter === "writing" ? selectedWriting.length : 0,
      listening: subtestFilter === "all" || subtestFilter === "listening" ? selectedListening.length : 0,
      speaking: subtestFilter === "all" || subtestFilter === "speaking" ? selectedSpeaking.length : 0
    },
    questions
  };
}
