// =========================================================================
// CBT & CAPLE Dynamic Portuguese Examination Engine
// Grounded in official Portuguese government and institutional standards:
// - CAPLE CIPLE (A2: Certificado Inicial — Nacionalidade Portuguesa & Residência)
// - CAPLE DIPLE / IEFP (B2: Diploma Intermédio — Habilitação Profissional)
// - DGE / IAVE (Exame Nacional de Português — Acesso ao Ensino Superior)
// Guarantees a BRAND NEW set of test questions on every attempt for logged-in users!
// =========================================================================

import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

// =========================================================================
// 1. POOL CIPLE A2 (CAPLE / PLA NACIONALIDADE & RESIDÊNCIA)
// =========================================================================
export const portugueseCipleReading = [
  {
    id: "pt-ciple-r-01",
    subtest: "reading",
    title: "Aviso da Hausverwaltung / Condomínio: Manutenção dos Elevadores",
    passage: `ADMINISTRAÇÃO DE CONDOMÍNIO — EDIFÍCIO TEJO
Exmos. Senhores Condóminos e Moradores,
Informamos que na próxima terça-feira, dia 12 de novembro, entre as 09:00 e as 13:00, os dois elevadores do edifício estarão temporariamente fora de serviço para manutenção preventiva obrigatória e inspeção periódica anual.
Pedimos a máxima colaboração de todos no sentido de planearem as vossas deslocações antecipadamente.
Em caso de urgência médica, o piquete de assistência pode ser contactado pelo número afixado na entrada principal.`,
    prompt: "O que devem os moradores do edifício ter em atenção na terça-feira de manhã?",
    options: [
      "A) Os dois elevadores estarão desligados entre as 09:00 e as 13:00 para manutenção",
      "B) Todos os moradores têm de abandonar o prédio durante toda a manhã",
      "C) O fornecimento de água quente e gás será cortado pela empresa",
      "D) Terão de pagar uma taxa extraordinária de condomínio em numerário"
    ],
    correctAnswer: "A) Os dois elevadores estarão desligados entre as 09:00 e as 13:00 para manutenção",
    explanation: "O comunicado informa claramente que 'os dois elevadores do edifício estarão temporariamente fora de serviço'."
  },
  {
    id: "pt-ciple-r-02",
    subtest: "reading",
    title: "Comunicado da Junta de Freguesia: Vacinação e Atestados",
    passage: `JUNTA DE FREGUESIA DE SANTA MARIA MAIOR
Avisam-se todos os recenseados e cidadãos residentes na freguesia de que o posto de vacinação sazonal contra a gripe e a COVID-19 funcionará no salão nobre da Junta todas as quartas-feiras, das 14:00 às 18:00.
Para aceder à vacinação e à renovação de atestados de residência é estritamente obrigatória a apresentação do Cartão de Cidadão ou Título de Residência e do Número de Utente do SNS.
As senhas de atendimento serão distribuídas a partir das 13:30 por ordem de chegada.`,
    prompt: "Quais documentos devem ser apresentados para ser atendido na Junta de Freguesia?",
    options: [
      "A) Cartão de Cidadão / Título de Residência e Número de Utente do SNS",
      "B) Apenas a certidão de casamento e o passe social do metro",
      "C) Um extrato bancário dos últimos seis meses com carimbo",
      "D) O contrato de compra e venda de um automóvel ligeiro"
    ],
    correctAnswer: "A) Cartão de Cidadão / Título de Residência e Número de Utente do SNS",
    explanation: "O aviso refere expressamente que é obrigatória a apresentação do documento de identificação legal e do número de utente."
  },
  {
    id: "pt-ciple-r-03",
    subtest: "reading",
    title: "Oferta de Emprego do IEFP: Operador de Armazém e Logística",
    passage: `CENTRO DE EMPREGO E FORMAÇÃO PROFISSIONAL DO PORTO
Empresa de distribuição alimentar sediada na Maia recruta Operadores de Logística (M/F) para entrada imediata em regime de tempo inteiro (40h semanais).
Requisitos: 9.º ano de escolaridade completo, facilidade no manuseamento de leitores óticos de código de barras e disponibilidade para turnos rotativos diurnos.
Oferece-se: Contrato de trabalho sem termo após período experimental de 90 dias, vencimento base compatível com a função e subsídio de refeição pago em cartão eletrónico.`,
    prompt: "Qual benefício contratual é formalmente oferecido nesta proposta de emprego?",
    options: [
      "A) Contrato de trabalho sem termo após o período experimental de noventa dias",
      "B) Vencimento pago exclusivamente em senhas de supermercado",
      "C) Dispensa total de cumprir qualquer horário de trabalho",
      "D) Uma viatura de serviço topo de gama com combustível pago"
    ],
    correctAnswer: "A) Contrato de trabalho sem termo após o período experimental de noventa dias",
    explanation: "A proposta garante a passagem a 'contrato de trabalho sem termo após período experimental de 90 dias'."
  },
  {
    id: "pt-ciple-r-04",
    subtest: "reading",
    title: "Aviso do Serviço Nacional de Saúde: Consulta de Triagem na USF",
    passage: `UNIDADE DE SAÚDE FAMILIAR (USF) LISBOA OCIDENTAL
Estimado Utente,
Para marcação de consultas de vigilância e renovação de medicação crónica, deve recorrer preferencialmente ao portal 'SNS 24' ou ao email da sua equipa de saúde de família.
As consultas de doença aguda do próprio dia destinam-se unicamente a situações súbitas iniciadas nas últimas 48 horas (como febre alta, dores agudas ou crises respiratórias).
A triagem clínica é realizada por um enfermeiro antes do atendimento médico.`,
    prompt: "A quem se destinam as consultas do próprio dia na Unidade de Saúde Familiar?",
    options: [
      "A) A doentes com situações agudas e súbitas iniciadas nas últimas 48 horas",
      "B) Apenas a pessoas que pretendem pedir certidões de nascimento",
      "C) A todos os cidadãos que desejem apenas uma massagem de relaxamento",
      "D) Exclusivamente a turistas estrangeiros sem seguro de viagem"
    ],
    correctAnswer: "A) A doentes com situações agudas e súbitas iniciadas nas últimas 48 horas",
    explanation: "O regulamento da USF explicita que as vagas diárias são para sintomas agudos surgidos nas últimas 48 horas."
  },
  {
    id: "pt-ciple-r-05",
    subtest: "reading",
    title: "Regulamento da CP (Comboios de Portugal): Validação de Títulos",
    passage: `CP — COMBOIOS URBANOS DE LISBOA
Avisam-se todos os passageiros de que o título de transporte deve ser validado obrigatoriamente nos validadores das estações antes do embarque na composição.
A simples posse do cartão sem validação registada não confere direito ao transporte e constitui infração punível com coima entre cem e duzentos e cinquenta euros.
Os passageiros que pretendam viajar com bicicletas podem fazê-lo gratuitamente nas carruagens identificadas com o símbolo respetivo fora das horas de ponta.`,
    prompt: "Qual é a penalização prevista para quem viajar no comboio sem validar previamente o título de transporte?",
    options: [
      "A) Aplicação de uma coima entre 100 e 250 euros",
      "B) Prisão preventiva de trinta dias",
      "C) Apreensão definitiva do telemóvel do passageiro",
      "D) Obrigatoriedade de conduzir o comboio até à paragem seguinte"
    ],
    correctAnswer: "A) Aplicação de uma coima entre 100 e 250 euros",
    explanation: "O aviso da transportadora estipula a coima no valor entre 100€ e 250€ para passageiros sem validação regular."
  },
  {
    id: "pt-ciple-r-06",
    subtest: "reading",
    title: "Portal e-Fatura: Validação de Despesas para o IRS",
    passage: `AUTORIDADE TRIBUTÁRIA — PORTAL DAS FINANÇAS
Atenção contribuinte: termina no próximo dia 25 de fevereiro o prazo legal para a verificação e classificação das faturas pendentes no portal e-Fatura.
Deverá aceder com a sua senha de acesso ou Chave Móvel Digital e associar as faturas aos setores de dedução corretos (Saúde, Educação, Imóveis, Lares ou Exigência de Fatura com NIF).
As despesas não validadas no prazo legal perderão o benefício de abatimento à coleta do imposto.`,
    prompt: "O que acontece às faturas com NIF que não forem confirmadas até 25 de fevereiro?",
    options: [
      "A) Perdem o benefício de dedução fiscal no cálculo final do IRS",
      "B) O contribuinte é obrigado a fechar a sua conta bancária",
      "C) O Estado devolve automaticamente todo o dinheiro das faturas",
      "D) As faturas são enviadas por correio para a Junta de Freguesia"
    ],
    correctAnswer: "A) Perdem o benefício de dedução fiscal no cálculo final do IRS",
    explanation: "A Autoridade Tributária adverte que 'as despesas não validadas no prazo legal perderão o benefício de abatimento à coleta'."
  }
];

export const portugueseCipleWriting = [
  {
    id: "pt-ciple-w-01",
    subtest: "writing",
    taskType: "message",
    title: "Comunicação Formal: Pedido de Atestado de Residência à Junta de Freguesia",
    prompt: "Escreva um email formal (mínimo de 30 palavras) dirigido ao Presidente da Junta de Freguesia da sua área de residência. Indique a sua morada completa, mencione o seu NIF e o motivo pelo qual necessita do atestado com brevidade.",
    minWords: 30,
    modelAnswer: "Exmo. Senhor Presidente da Junta de Freguesia, venho por este meio requerer a emissão com urgência de um atestado de residência para efeitos de renovação do meu título de residência junto da AIMA. Resido na Rua das Flores, n.º 15, 2.º Direito, e o meu número de identificação fiscal é o 299123456. Agradeço desde já a atenção dispensada. Com os melhores cumprimentos, Carlos Silva.",
    criteria: "Correção formal de saudação, inclusão de morada e NIF, clareza do pedido e despedida protocolar."
  },
  {
    id: "pt-ciple-w-02",
    subtest: "writing",
    taskType: "message",
    title: "Justificação de Ausência ao Trabalho por Doença Súbita",
    prompt: "Redija uma mensagem eletrónica (mínimo de 30 palavras) dirigida ao departamento de Recursos Humanos da sua entidade empregadora. Comunique que não poderá comparecer ao turno de trabalho de hoje por motivo de doença súbita e confirme que enviará a respetiva justificação médica.",
    minWords: 30,
    modelAnswer: "Exma. Senhora Diretora de Recursos Humanos, comunico que me encontro impossibilitado de comparecer ao meu posto de trabalho hoje devido a doença súbita e febre alta. Irei ao Centro de Saúde durante a manhã e remeterei o respetivo Certificado de Incapacidade Temporária por correio eletrónico assim que me for emitido. Apresento os meus respeitosos cumprimentos, Sofia Santos.",
    criteria: "Formalismo no tratamento, explicação do impedimento de saúde, compromisso de envio do documento e cortesia."
  },
  {
    id: "pt-ciple-w-03",
    subtest: "writing",
    taskType: "essay",
    title: "Reclamação Formal no Livro de Reclamações contra Prestador de Serviços",
    prompt: "Elabore um texto formal de reclamação fundamentada (mínimo de 60 palavras) para inserção no Livro de Reclamações Eletrónico. Exponha o caso de uma fatura de telecomunicações com cobrança indevida de serviços nunca solicitados. Exija o cancelamento imediato dos valores e a respetiva nota de crédito.",
    minWords: 60,
    modelAnswer: "Venho por este meio manifestar a minha profunda indignação e apresentar reclamação formal contra a operadora de telecomunicações relativamente à fatura do corrente mês. Foi-me faturada uma quantia indevida de quarenta e cinco euros referente a serviços de subscrição adicional que jamais contratei nem autorizei expressamente por escrito. Já contactei por duas ocasiões o apoio ao cliente sem que o problema fosse solucionado com eficácia. É inaceitável este tipo de cobrança arbitrária e abusiva. Deste modo, exijo nos termos da lei a emissão de nota de crédito retificativa e o reembolso imediato do valor cobrado na minha conta bancária, reservando-me o direito de denunciar a situação à ANACOM caso não obtenha resposta no prazo legal de quinze dias úteis.",
    criteria: "Fundamentação objetiva dos factos, clareza reivindicativa, vocabulário formal de reclamação e exigência de retificação legal."
  },
  {
    id: "pt-ciple-w-04",
    subtest: "writing",
    taskType: "essay",
    title: "Carta de Motivação para Candidatura a Vaga de Emprego",
    prompt: "Redija uma carta de motivação (mínimo de 60 palavras) dirigida ao Diretor-Geral de uma empresa hoteleira em Lisboa. Apresente o seu percurso profissional, destaque as suas principais competências técnicas e interpessoais (assiduidade, simpatia, flexibilidade de horários) e explique por que razão gostaria de integrar a equipa.",
    minWords: 60,
    modelAnswer: "Exmo. Senhor Diretor de Recursos Humanos, tomo a liberdade de me dirigir a V. Exa. para apresentar a minha candidatura à função de rececionista na vossa prestigiada unidade hoteleira. Ao longo dos últimos quatro anos desempenhei funções de atendimento ao público no setor do turismo, onde desenvolvi uma sólida capacidade de comunicação em português e inglês e grande facilidade de relacionamento interpessoal. Destaco como pontos fortes da minha conduta profissional a assiduidade exemplar, o rigor no tratamento de dados e uma elevada disponibilidade para trabalhar em regime de turnos rotativos. Acredito que o meu empenho e postura proativa serão uma mais-valia para manter o padrão de excelência que caracteriza a vossa organização. Fico ao inteiro dispor de V. Exa. para a realização de uma entrevista presencial. Com os meus melhores cumprimentos.",
    criteria: "Estrutura epistolar clássica, valorização curricular consistente, adequação do registo formal de cortesia e fecho profissional."
  }
];

export const portugueseCipleListening = [
  {
    id: "pt-ciple-l-01",
    subtest: "listening",
    title: "Aviso Sonoro no Metropolitano de Lisboa: Perturbação na Linha Azul",
    audioText: "Atenção passageiros: devido a uma ocorrência com um passageiro na estação da Baixa-Chiado, a circulação na Linha Azul encontra-se temporariamente interrompida entre a Praça de Espanha e Santa Apolónia. Para os seus trajetos alternativos, recomendamos o transbordo para a Linha Verde ou o recurso às carreiras de autocarros da Carris. Lamentamos o incómodo causado.",
    prompt: "Qual a razão e a extensão do corte temporário no metro comunicado na mensagem sonora?",
    options: [
      "A) Interrupção na Linha Azul entre Praça de Espanha e Santa Apolónia devido a ocorrência na Baixa-Chiado",
      "B) Encerramento definitivo de todas as linhas de metro por greve geral",
      "C) Obras de pavimentação durante a noite de domingo",
      "D) Falha de eletricidade geral que afeta exclusivamente a Linha Vermelha"
    ],
    correctAnswer: "A) Interrupção na Linha Azul entre Praça de Espanha e Santa Apolónia devido a ocorrência na Baixa-Chiado",
    explanation: "O anúncio detalha que a Linha Azul está interrompida no troço Praça de Espanha - Santa Apolónia."
  },
  {
    id: "pt-ciple-l-02",
    subtest: "listening",
    title: "Chamada Automática de Confirmação do Hospital Distrital",
    audioText: "Guten Tag... ou melhor, bom dia. Contactamos do secretariado de consultas externas do Hospital de São João. Lembramos que a sua consulta de oftalmologia está agendada para amanhã, às dez e meia da manhã, na sala vinte e quatro do piso três. Não se esqueça de trazer o seu documento de identificação e os exames de diagnóstico anteriores. Prima um para confirmar a sua presença ou dois para reagendar.",
    prompt: "Para que dia e hora está marcada a consulta hospitalar confirmada na chamada?",
    options: [
      "A) Para o dia seguinte às 10:30 no piso três",
      "B) Para o mês seguinte às 18:00 na urgência",
      "C) Para daqui a cinco minutos no rés do chão",
      "D) A consulta foi anulada pelo médico de serviço"
    ],
    correctAnswer: "A) Para o dia seguinte às 10:30 no piso três",
    explanation: "A mensagem informa a realização da consulta 'amanhã, às dez e meia da manhã, na sala vinte e quatro do piso três'."
  },
  {
    id: "pt-ciple-l-03",
    subtest: "listening",
    title: "Mensagem Telefónica do Serviço de Atendimento da Segurança Social",
    audioText: "Bem-vindo ao serviço de atendimento telefónico da Segurança Social. Informamos que para requerer o subsídio de parentalidade ou consultar o estado do seu processo de abono de família deve utilizar preferencialmente a Segurança Social Direta através do seu número da segurança social e palavra-passe pessoal. Para falar com um assistente sobre pensões ou subsídio de desemprego, por favor aguarde na linha.",
    prompt: "Qual canal prioritário recomenda a gravação telefónica para consultar o processo de abono?",
    options: [
      "A) A plataforma online da Segurança Social Direta",
      "B) Uma ida obrigatória à Conservatória do Registo Civil",
      "C) Enviar uma carta manuscrita à sede das Nações Unidas",
      "D) Comparecer pessoalmente na esquadra da polícia mais próxima"
    ],
    correctAnswer: "A) A plataforma online da Segurança Social Direta",
    explanation: "A mensagem aconselha a utilização da plataforma web 'Segurança Social Direta'."
  },
  {
    id: "pt-ciple-l-04",
    subtest: "listening",
    title: "Noticiário da Rádio Nacional (Antena 1): Previsão do Tempo e Risco de Incêndio",
    audioText: "Síntese informativa da Antena 1: o Instituto Português do Mar e da Atmosfera emitiu aviso amarelo para sete distritos do interior centro e sul do país devido à subida acentuada das temperaturas máximas, que poderão atingir os trinta e oito graus Celsius. A Autoridade Nacional de Emergência e Proteção Civil recorda a proibição absoluta de queimadas e de lançamento de foguetes em espaço rural durante o fim de semana.",
    prompt: "Que restrição de segurança é destacada pela Proteção Civil para o fim de semana?",
    options: [
      "A) Proibição absoluta de realizar queimadas e lançar foguetes em áreas rurais",
      "B) Proibição de circulação de comboios de alta velocidade",
      "C) Encerramento obrigatório de todos os hospitais e farmácias",
      "D) Obrigatoriedade de permanecer dentro de água nos rios"
    ],
    correctAnswer: "A) Proibição absoluta de realizar queimadas e lançar foguetes em áreas rurais",
    explanation: "A rádio alerta expressamente para a 'proibição absoluta de queimadas e de lançamento de foguetes em espaço rural'."
  },
  {
    id: "pt-ciple-l-05",
    subtest: "listening",
    title: "Mensagem do Correio de Voz da Farmácia de Serviço",
    audioText: "Está a ligar para a Farmácia Central de Cascais. Informamos que encerramos o horário normal às vinte horas, mas mantemo-nos em regime de serviço permanente de escala de piquete noturno até às oito da manhã. Para atendimento durante a noite deve tocar à campainha junto à porta lateral e apresentar a receita médica obrigatória.",
    prompt: "Como funciona o atendimento na farmácia durante o período noturno?",
    options: [
      "A) Funciona em regime de piquete permanente mediante campainha na porta lateral",
      "B) A farmácia fecha completamente sem possibilidade de atendimento",
      "C) Apenas vende produtos de cosmética e perfumaria",
      "D) O pagamento só pode ser efetuado em moedas de ouro"
    ],
    correctAnswer: "A) Funciona em regime de piquete permanente mediante campainha na porta lateral",
    explanation: "A mensagem elucida que o serviço de noite exige 'tocar à campainha junto à porta lateral'."
  },
  {
    id: "pt-ciple-l-06",
    subtest: "listening",
    title: "Anúncio nas Compras: Promoções e Faturação no Hipermercado",
    audioText: "Estimados clientes do hipermercado: lembramos que para beneficiar dos descontos imediatos em cartão de cliente e do desconto de dez cêntimos por litro no combustível do posto associado deve apresentar o seu cartão no ato de pagamento na caixa. Se desejar fatura com NIF, por favor indique o seu número de contribuinte antes da passagem do primeiro artigo.",
    prompt: "Em que momento deve o cliente indicar o NIF para a emissão da fatura?",
    options: [
      "A) Antes do registo e passagem do primeiro artigo na caixa",
      "B) Três semanas após o pagamento da compra",
      "C) Apenas na saída do parque de estacionamento",
      "D) No dia seguinte através do correio tradicional"
    ],
    correctAnswer: "A) Antes do registo e passagem do primeiro artigo na caixa",
    explanation: "O anúncio indica aos clientes para fornecerem o número de contribuinte 'antes da passagem do primeiro artigo'."
  }
];

export const portugueseCipleSpeaking = [
  {
    id: "pt-ciple-s-01",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Simulação de Diálogo: Inscrição e Pedido de Informações no Centro de Saúde",
    audioPrompt: "Bom dia, com certeza. Diga-me por favor: reside nesta freguesia há quanto tempo e tem consigo os documentos necessários para a inscrição como utente?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Responda ao funcionário do Centro de Saúde: apresente-se com o seu nome, explique que reside na freguesia há seis meses e mencione que tem consigo o Título de Residência, o NIF e o comprovativo de morada emitido pela Junta.",
    modelAnswer: "Bom dia. Chamo-me Roberto Fernandes e resido nesta freguesia há cerca de seis meses com a minha família. Venho solicitar a minha inscrição e a atribuição de médico de família nesta Unidade de Saúde. Trago comigo toda a documentação solicitada: o meu Título de Residência válido, a folha de atribuição do NIF e a certidão de residência emitida pela Junta de Freguesia local.",
    criteria: "Fluência articulada, cortesia institucional no tratamento da 3.ª pessoa e clareza nos dados burocráticos fornecidos."
  },
  {
    id: "pt-ciple-s-02",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Simulação de Entrevista: Apresentação de Competências no Centro de Emprego",
    audioPrompt: "Muito obrigado por comparecer a esta sessão de acompanhamento vocacional do IEFP. Pode descrever sucintamente a sua formação profissional e a sua experiência anterior no país de origem?",
    prepSeconds: 20,
    speakSeconds: 70,
    prompt: "Explique à técnica do IEFP a sua profissão, os anos de experiência que possui e o seu objetivo profissional em Portugal. Refira que frequentou o curso de Português Língua de Acolhimento (PLA).",
    modelAnswer: "Com certeza, com muito gosto. Eu sou técnico de eletricidade e instalações com mais de sete anos de experiência profissional em obras residenciais e industriais no meu país de origem. Desde que cheguei a Portugal, tive como prioridade aprender a língua e concluí recentemente o curso de Português Língua de Acolhimento nível A2 com aproveitamento. O meu objetivo é conseguir a equivalência formal das minhas carteiras técnicas junto da entidade reguladora e integrar uma equipa de instalações elétricas a tempo inteiro.",
    criteria: "Discurso estruturado, recurso a tempos do pretérito simples e conjuntivo, e valorização curricular realista."
  },
  {
    id: "pt-ciple-s-03",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Resolução de Problema: Contactar o Senhorio sobre Infiltração no Teto",
    audioPrompt: "Estou sim? Fala o senhor Pereira, o proprietário do apartamento. Diga-me, o que se passa com a casa que me ligou com tanta urgência?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Comunique com respeito e firmeza ao senhorio que há uma fuga grave de água no teto da casa de banho vinda do andar de cima. Solicite a presença imediata de um canalizador para evitar danos maiores.",
    modelAnswer: "Bom dia, senhor Pereira. Peço desculpa por ligar com tanta urgência, mas temos uma situação séria no apartamento. Desde ontem à noite que começou a pingar água com intensidade do teto da casa de banho, que já está a ficar com manchas e humidade provocadas aparentemente pelo andar de cima. Peço-lhe que envie um canalizador ou venha ao prédio o mais rapidamente possível para averiguar a origem da fuga antes que a água danifique o estuque e as paredes.",
    criteria: "Equilíbrio entre cortesia e urgência, descrição precisa do problema doméstico e proposição de solução prática."
  },
  {
    id: "pt-ciple-s-04",
    subtest: "speaking",
    taskType: "monologue",
    title: "Monólogo Temático: A Minha Integração e Vida Quotidiana em Portugal",
    audioPrompt: null,
    prepSeconds: 30,
    speakSeconds: 90,
    prompt: "Fale durante um minuto e meio sobre o seu percurso de vida em Portugal: a sua rotina diária, os hábitos gastronómicos e sociais que mais aprecia, as amizades que construiu e os seus planos futuros no país.",
    modelAnswer: "Viver em Portugal tem sido uma experiência muito enriquecedora e acolhedora para mim e para a minha família. No meu quotidiano, acordo habitualmente cedo, tomo uma bica rápida no café da esquina e desloco-me de comboio para o trabalho. O que mais aprecio na cultura portuguesa é a serenidade das pessoas, a segurança nas ruas e a gastronomia fantástica — tornei-me um fã incondicional do bacalhau à Brás e dos pastéis de nata. Nos fins de semana gosto de passear à beira-rio ou visitar museus e monumentos históricos como Belém e Sintra. Tenho feito grandes progressos na aprendizagem do português porque me esforço por falar diariamente com os meus vizinhos e colegas de trabalho. O meu grande plano de futuro é consolidar a minha carreira profissional e obter a nacionalidade portuguesa por naturalização, retribuindo a este país com trabalho honesto e dedicação à comunidade.",
    criteria: "Discurso coeso de 90 segundos, conectores discursivos, riqueza lexical cultural e pronúncia inteligível."
  }
];

export const portugueseExamPools = {
  cipleA2: {
    levelKey: "cipleA2",
    title: "CAPLE CIPLE (A2 • Certificado de Língua Portuguesa — Nacionalidade & Residência)",
    badge: "CAPLE CIPLE • Nacionalidade",
    description: "Exame oficial de proficiência exigido pelo Governo português para aquisição da Nacionalidade por Naturalização e Título de Residência Permanente (Dec.-Lei n.º 237-A/2006 e normas PLA/IEFP).",
    reading: portugueseCipleReading,
    writing: portugueseCipleWriting,
    listening: portugueseCipleListening,
    speaking: portugueseCipleSpeaking
  }
};

/**
 * Generates an authentic, fresh Portuguese CAPLE & DGE CBT exam session
 * prioritizing unseen questions for the logged-in user on every attempt.
 * 
 * @param {string} levelKey - 'cipleA2'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @param {Set<string>} seenQuestionIds - IDs of questions previously attempted by the user
 * @returns {object} Randomized Portuguese exam session object
 */
export function generatePortugueseDynamicExam(levelKey = "cipleA2", subtestFilter = "all", seenQuestionIds = new Set()) {
  const pool = portugueseExamPools[levelKey] || portugueseExamPools.cipleA2;

  // 1. Reading Selection: Target 6 documents
  const readingResult = selectBrandNewSet(pool.reading, Math.min(6, pool.reading.length), seenQuestionIds);
  const selectedReading = readingResult.selected;

  // 2. Writing Selection: 1 message + 1 essay
  const messages = pool.writing.filter(w => w.taskType === "message");
  const essays = pool.writing.filter(w => w.taskType === "essay");
  const messagesResult = selectBrandNewSet(messages, 1, seenQuestionIds);
  const essaysResult = selectBrandNewSet(essays, 1, seenQuestionIds);
  const selectedWriting = [...messagesResult.selected, ...essaysResult.selected];

  // 3. Listening Selection: Target 6 audio tracks
  const listeningResult = selectBrandNewSet(pool.listening, Math.min(6, pool.listening.length), seenQuestionIds);
  const selectedListening = listeningResult.selected.map(item => ({
    ...item,
    maxPlays: 2
  }));

  // 4. Speaking Selection: 2 dialogues + 1 monologue
  const dialogues = pool.speaking.filter(s => s.taskType === "dialogue");
  const monologues = pool.speaking.filter(s => s.taskType === "monologue");
  const dialoguesResult = selectBrandNewSet(dialogues, Math.min(2, dialogues.length), seenQuestionIds);
  const monologuesResult = selectBrandNewSet(monologues, Math.min(1, monologues.length), seenQuestionIds);
  const selectedSpeaking = [...dialoguesResult.selected, ...monologuesResult.selected];

  // Assemble question stream based on chosen subtest
  let questions = [];
  let durationMinutes = 0;
  let subtestLabel = "Simulação Oficial Completa CAPLE CIPLE (4 Componentes)";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = 45;
    subtestLabel = "Compreensão da Leitura (Documentos Autênticos • 45 min)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = 45;
    subtestLabel = "Produção e Interação Escritas (Mensagens e Reclamação • 45 min)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = 30;
    subtestLabel = "Compreensão do Oral (Áudios Institucionais e Notícias • 30 min)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = 15;
    subtestLabel = "Expressão Oral (Laboratório de Voz • 15 min)";
  } else {
    // "all" - Full official simulation
    questions = [
      ...selectedReading,
      ...selectedWriting,
      ...selectedListening,
      ...selectedSpeaking
    ];
    durationMinutes = 120;
    subtestLabel = "Exame Geral CAPLE CIPLE / PLA (4 Componentes • 15 Tarefas)";
  }

  const isBrandNewSession = 
    (subtestFilter === "reading" && readingResult.isBrandNew) ||
    (subtestFilter === "writing" && messagesResult.isBrandNew && essaysResult.isBrandNew) ||
    (subtestFilter === "listening" && listeningResult.isBrandNew) ||
    (subtestFilter === "speaking" && dialoguesResult.isBrandNew && monologuesResult.isBrandNew) ||
    (subtestFilter === "all" && readingResult.isBrandNew && messagesResult.isBrandNew && listeningResult.isBrandNew);

  const sessionId = `pt-${levelKey}-${subtestFilter}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

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
