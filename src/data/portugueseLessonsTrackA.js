// =========================================================================
// Portuguese Curriculum — Track A: Adult Vocational Syllabus
// (Português Língua de Acolhimento PLA / IEFP Standard)
// Units 1 to 3 • 5 Lessons per Unit = 15 Comprehensive Lessons Total
// =========================================================================

export const portugueseTrackAUnits = [
  // =========================================================================
  // UNIT 1: Identificação, Burocracia e Direitos de Cidadania (25h)
  // UFCD 10373 Standard
  // =========================================================================
  {
    id: "pt-unit-1",
    unitId: "pt-unit-1",
    unitNumber: 1,
    level: "Track A: PLA / IEFP A1–A2 (Vocacional)",
    title: "Unit 1: Identificação, Burocracia e Direitos de Cidadania",
    subtitle: "NIF, NISS, Número de Utente, habitação, agendamentos no Portal das Finanças e direitos cívicos.",
    icon: "ShieldCheck",
    color: "#059669",
    lessons: [
      {
        id: "pt-u1-l1",
        title: "Lesson 1.1: O Registo do Cidadão",
        description: "Preenchimento de dados administrativos (NIF, NISS, Utente). Apresentações com ser, ter e chamar-se.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u1-l1-q1",
            type: "multiple_choice",
            prompt: "Qual é o documento fiscal essencial em Portugal para assinar um contrato ou abrir conta bancária?",
            options: [
              "O NIF (Número de Identificação Fiscal)",
              "O Passe Social de metro",
              "O Bilhete de Comboio",
              "A Carta de Condução internacional"
            ],
            correctAnswer: "O NIF (Número de Identificação Fiscal)",
            explanation: "O NIF (Número de Contribuinte) é atribuído pela Autoridade Tributária e é indispensável para qualquer ato económico e jurídico em Portugal."
          },
          {
            id: "pt-u1-l1-q2",
            type: "matching",
            prompt: "Associe as siglas administrativas aos respetivos serviços públicos em Portugal:",
            pairs: [
              { native: "NIF", english: "Autoridade Tributária (Finanças)", left: "NIF", right: "Autoridade Tributária (Finanças)" },
              { native: "NISS", english: "Segurança Social (Trabalho)", left: "NISS", right: "Segurança Social (Trabalho)" },
              { native: "Utente", english: "Serviço Nacional de Saúde (SNS)", left: "Utente", right: "Serviço Nacional de Saúde (SNS)" },
              { native: "AIMA", english: "Agência para a Integração e Migrações", left: "AIMA", right: "Agência para a Integração e Migrações" }
            ]
          },
          {
            id: "pt-u1-l1-q3",
            type: "fill_blank",
            sentence: "Bom dia. Eu ___ Manuel e ___ residente em Lisboa.",
            missingWord: "chamo-me",
            options: ["chamo-me", "chama-se", "chamam-se", "chamar"],
            correctAnswer: "chamo-me",
            explanation: "Em português europeu, a primeira pessoa do presente reflexo é 'eu chamo-me'."
          },
          {
            id: "pt-u1-l1-q4",
            type: "scramble",
            prompt: "Ordene os elementos para formar a apresentação formal com o NISS:",
            tokens: ["Eu", "tenho", "o", "número", "de", "segurança", "social."],
            correctTokens: ["Eu", "tenho", "o", "número", "de", "segurança", "social."],
            explanation: "A estrutura de identificação pessoal segue: Sujeito + verbo ter + objeto direto."
          },
          {
            id: "pt-u1-l1-q5",
            type: "multiple_choice",
            prompt: "Como deve responder à pergunta formal: 'Qual é o seu estado civil?'",
            options: [
              "Sou casado / solteiro / divorciado.",
              "Tenho vinte e cinco anos.",
              "Moro no Porto.",
              "Sou engenheiro técnico."
            ],
            correctAnswer: "Sou casado / solteiro / divorciado.",
            explanation: "O estado civil define a situação jurídica conjugal (solteiro, casado, divorciado, viúvo)."
          },
          {
            id: "pt-u1-l1-q6",
            type: "audio_listen",
            prompt: "Ouça a solicitação ao balcão e identifique o número mencionado:",
            audioText: "Para o seu processo no Centro de Saúde, necessito do seu Número de Utente do SNS.",
            options: [
              "Número de Utente do SNS",
              "Código PIN do telemóvel",
              "Matrícula do automóvel",
              "Número do bilhete de avião"
            ],
            correctAnswer: "Número de Utente do SNS",
            explanation: "O Número de Utente é o identificador único para consultas e prescrições médicas nos Centros de Saúde portugueses."
          },
          {
            id: "pt-u1-l1-q7",
            type: "fill_blank",
            sentence: "O senhor Silva ___ cidadão português e ___ passaporte europeu.",
            missingWord: "é",
            options: ["é", "está", "temos", "sou"],
            correctAnswer: "é",
            explanation: "Usa-se o verbo 'ser' para nacionalidade e identidade permanente: 'O senhor Silva é cidadão português'."
          },
          {
            id: "pt-u1-l1-q8",
            type: "matching",
            prompt: "Ligue os pronomes pessoais às respetivas formas do verbo 'ter':",
            pairs: [
              { native: "Eu", english: "tenho", left: "Eu", right: "tenho" },
              { native: "Tu", english: "tens", left: "Tu", right: "tens" },
              { native: "Você / Ele", english: "tem", left: "Você / Ele", right: "tem" },
              { native: "Nós", english: "temos", left: "Nós", right: "temos" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l2",
        title: "Lesson 1.2: A Habitação e Contratos",
        description: "Leitura de anúncios imobiliários e faturas de serviços essenciais (água, luz, gás). Presente do indicativo e preposições de lugar.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u1-l2-q1",
            type: "multiple_choice",
            prompt: "Num anúncio imobiliário em Portugal, o que significa a sigla 'T2'?",
            options: [
              "Apartamento com dois quartos",
              "Apartamento no segundo andar",
              "Casa com dois terraços",
              "Moradia com duas garagens"
            ],
            correctAnswer: "Apartamento com dois quartos",
            explanation: "A tipologia 'T' indica o número de quartos: T0 (estúdio), T1 (um quarto), T2 (dois quartos), etc."
          },
          {
            id: "pt-u1-l2-q2",
            type: "fill_blank",
            sentence: "A farmácia fica ___ do supermercado e ao lado da paragem de autocarro.",
            missingWord: "em frente",
            options: ["em frente", "para", "com", "sob"],
            correctAnswer: "em frente",
            explanation: "'Em frente de / do' é a locução prepositiva correta para indicar localização frontal oposta."
          },
          {
            id: "pt-u1-l2-q3",
            type: "scramble",
            prompt: "Ordene os termos para formar a frase sobre pagamento da renda:",
            tokens: ["O", "inquilino", "paga", "a", "renda", "ao", "senhorio."],
            correctTokens: ["O", "inquilino", "paga", "a", "renda", "ao", "senhorio."],
            explanation: "Em Portugal, quem aluga o imóvel é o inquilino e o proprietário é o senhorio."
          },
          {
            id: "pt-u1-l2-q4",
            type: "matching",
            prompt: "Associe os termos da fatura de serviços básicos à sua tradução funcional:",
            pairs: [
              { native: "Fatura da eletricidade", english: "Conta de luz (EDP / Endesa)", left: "Fatura da eletricidade", right: "Conta de luz (EDP / Endesa)" },
              { native: "Consumo de água", english: "Medição em m³ (SMAS / EPAL)", left: "Consumo de água", right: "Medição em m³ (SMAS / EPAL)" },
              { native: "Prazo de pagamento", english: "Data limite de liquidação", left: "Prazo de pagamento", right: "Data limite de liquidação" },
              { native: "Débito direto", english: "Cobrança bancária automática", left: "Débito direto", right: "Cobrança bancária automática" }
            ]
          },
          {
            id: "pt-u1-l2-q5",
            type: "multiple_choice",
            prompt: "O que exige habitualmente o senhorio como garantia na assinatura de um contrato de arrendamento?",
            options: [
              "Meses de caução e fiador",
              "Fotocópia do cartão de crédito com CVV",
              "Um exame médico obrigatório",
              "Pagamento integral de cinco anos antecipados"
            ],
            correctAnswer: "Meses de caução e fiador",
            explanation: "A caução (depósito de segurança contra danos) e um fiador (garante financeiro) são requisitos padrão em Portugal."
          },
          {
            id: "pt-u1-l2-q6",
            type: "audio_listen",
            prompt: "Ouça a descrição do imóvel e identifique a despesa incluída:",
            audioText: "Arrenda-se quarto mobilado em Coimbra com despesas de água, luz e internet incluídas na mensalidade.",
            options: [
              "Água, eletricidade e internet incluídas",
              "Apenas lugar de garagem coberto",
              "Limpeza diária de hotel",
              "Refeições no restaurante do condomínio"
            ],
            correctAnswer: "Água, eletricidade e internet incluídas",
            explanation: "No anúncio, as despesas básicas essenciais já constam da mensalidade estabelecida."
          },
          {
            id: "pt-u1-l2-q7",
            type: "fill_blank",
            sentence: "Nós ___ num prédio antigo no centro histórico do Porto.",
            missingWord: "moramos",
            options: ["moramos", "moram", "moro", "moras"],
            correctAnswer: "moramos",
            explanation: "Conjugação regular do verbo morar na 1.ª pessoa do plural: 'nós moramos'."
          },
          {
            id: "pt-u1-l2-q8",
            type: "matching",
            prompt: "Faça corresponder as divisões da casa aos móveis adequados:",
            pairs: [
              { native: "Quarto", english: "Cama e roupeiro", left: "Quarto", right: "Cama e roupeiro" },
              { native: "Cozinha", english: "Fogão e frigorífico", left: "Cozinha", right: "Fogão e frigorífico" },
              { native: "Sala de estar", english: "Sofá e mesa de centro", left: "Sala de estar", right: "Sofá e mesa de centro" },
              { native: "Casa de banho", english: "Poliban e lavatório", left: "Casa de banho", right: "Poliban e lavatório" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l3",
        title: "Lesson 1.3: Interação com a Administração Pública",
        description: "Agendamentos online (Siga / Portal das Finanças / ePortugal). Verbos irregulares de alta frequência (ir, vir, fazer).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u1-l3-q1",
            type: "multiple_choice",
            prompt: "Qual plataforma oficial do governo português é utilizada para agendar atendimentos com senha nos balcões públicos?",
            options: [
              "Portal Siga / ePortugal",
              "WhatsApp do Governo",
              "Facebook Messenger da Junta",
              "Correio Azul dos CTT"
            ],
            correctAnswer: "Portal Siga / ePortugal",
            explanation: "A plataforma Siga (siga.marcacaodeatendimento.pt) e o ePortugal são os canais centrais de agendamento presencial nos serviços do Estado."
          },
          {
            id: "pt-u1-l3-q2",
            type: "fill_blank",
            sentence: "Amanhã nós ___ às Finanças para entregar a declaração anual.",
            missingWord: "vamos",
            options: ["vamos", "vai", "vou", "vão"],
            correctAnswer: "vamos",
            explanation: "Presente do indicativo do verbo irregular 'ir' para nós: 'nós vamos'."
          },
          {
            id: "pt-u1-l3-q3",
            type: "scramble",
            prompt: "Ordene as palavras para solicitar atendimento com cortesia:",
            tokens: ["Eu", "gostaria", "de", "fazer", "uma", "marcação", "presencial."],
            correctTokens: ["Eu", "gostaria", "de", "fazer", "uma", "marcação", "presencial."],
            explanation: "O condicional de cortesia 'gostaria de' é a forma educada para pedir serviços na administração pública."
          },
          {
            id: "pt-u1-l3-q4",
            type: "matching",
            prompt: "Associe os verbos irregulares à sua conjugação na 1.ª pessoa do singular (eu):",
            pairs: [
              { native: "Fazer", english: "faço", left: "Fazer", right: "faço" },
              { native: "Ir", english: "vou", left: "Ir", right: "vou" },
              { native: "Vir", english: "venho", left: "Vir", right: "venho" },
              { native: "Poder", english: "posso", left: "Poder", right: "posso" }
            ]
          },
          {
            id: "pt-u1-l3-q5",
            type: "multiple_choice",
            prompt: "Ao entrar num balcão de atendimento com dispensador de senhas, qual opção deve escolher se tiver marcação prévia?",
            options: [
              "Atendimento com Agendamento / Marcação",
              "Informações Gerais sem triagem",
              "Reclamações imediatas",
              "Atendimento prioritário sem justificação"
            ],
            correctAnswer: "Atendimento com Agendamento / Marcação",
            explanation: "Quem faz marcação prévia online tira a senha específica de 'Agendamento', sendo chamado à hora combinada."
          },
          {
            id: "pt-u1-l3-q6",
            type: "audio_listen",
            prompt: "Ouça a informação da funcionária pública e selecione o documento em falta:",
            audioText: "Para concluirmos a sua alteração de morada, tem de apresentar o comprovativo de domicílio emitido pela Junta de Freguesia.",
            options: [
              "Atestado de residência da Junta de Freguesia",
              "Certificado escolar do ensino básico",
              "Bilhete de transporte metropolitano",
              "Extrato de conta poupança"
            ],
            correctAnswer: "Atestado de residência da Junta de Freguesia",
            explanation: "A Junta de Freguesia é a autarquia local competente para emitir certidões e atestados de residência comprovados por testemunhas ou contrato."
          },
          {
            id: "pt-u1-l3-q7",
            type: "fill_blank",
            sentence: "O funcionário ___ o carimbo oficial no formulário de inscrição.",
            missingWord: "põe",
            options: ["põe", "ponho", "pomos", "põem"],
            correctAnswer: "põe",
            explanation: "Verbo 'pôr' na terceira pessoa do singular: ele 'põe'."
          },
          {
            id: "pt-u1-l3-q8",
            type: "matching",
            prompt: "Ligue os serviços públicos às respetivas competências funcionais:",
            pairs: [
              { native: "Espaço Cidadão", english: "Renovação de cartas e certidões concentradas", left: "Espaço Cidadão", right: "Renovação de cartas e certidões concentradas" },
              { native: "Conservatória do Registo Civil", english: "Nascimentos, casamentos e nacionalidade", left: "Conservatória do Registo Civil", right: "Nascimentos, casamentos e nacionalidade" },
              { native: "Serviço de Finanças", english: "Emissão de NIF e liquidação de impostos", left: "Serviço de Finanças", right: "Emissão de NIF e liquidação de impostos" },
              { native: "Segurança Social", english: "Abonos, subsídios e proteção no desemprego", left: "Segurança Social", right: "Abonos, subsídios e proteção no desemprego" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l4",
        title: "Lesson 1.4: Direitos Cívicos e Deveres Fiscais",
        description: "Introdução à entrega do IRS (Imposto sobre o Rendimento de Pessoas Singulares), números ordinais/cardinais e calendário fiscal.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u1-l4-q1",
            type: "multiple_choice",
            prompt: "Em Portugal, em que período decorre anualmente a entrega da declaração do IRS pela internet?",
            options: [
              "Entre 1 de abril e 30 de junho",
              "Em qualquer dia do mês de janeiro",
              "Apenas nas duas primeiras semanas de dezembro",
              "Exclusivamente durante as férias de agosto"
            ],
            correctAnswer: "Entre 1 de abril e 30 de junho",
            explanation: "O calendário fiscal português estipula o período de 1 de abril a 30 de junho para validação e submissão do IRS no Portal das Finanças."
          },
          {
            id: "pt-u1-l4-q2",
            type: "fill_blank",
            sentence: "Para deduzir despesas de saúde e educação no IRS, é obrigatório pedir fatura com o seu ___.",
            missingWord: "NIF",
            options: ["NIF", "NISS", "IBAN", "E-mail"],
            correctAnswer: "NIF",
            explanation: "As faturas no portal 'e-Fatura' só são contabilizadas para dedução fiscal se tiverem o NIF do consumidor associado."
          },
          {
            id: "pt-u1-l4-q3",
            type: "scramble",
            prompt: "Ordene os números ordinais para indicar a ordem da fila de espera:",
            tokens: ["O", "senhor", "Pereira", "é", "o", "terceiro", "da", "fila."],
            correctTokens: ["O", "senhor", "Pereira", "é", "o", "terceiro", "da", "fila."],
            explanation: "Uso correto do número ordinal: primeiro, segundo, terceiro, quarto, quinto..."
          },
          {
            id: "pt-u1-l4-q4",
            type: "matching",
            prompt: "Correlacione os números cardinais com a escrita por extenso em português:",
            pairs: [
              { native: "50", english: "Cinquenta", left: "50", right: "Cinquenta" },
              { native: "100", english: "Cem", left: "100", right: "Cem" },
              { native: "500", english: "Quinhentos", left: "500", right: "Quinhentos" },
              { native: "1000", english: "Mil", left: "1000", right: "Mil" }
            ]
          },
          {
            id: "pt-u1-l4-q5",
            type: "multiple_choice",
            prompt: "O que é o 'IRS Automático' no Portal das Finanças?",
            options: [
              "Uma declaração provisória pré-preenchida pelo Fisco para trabalhadores por conta de outrem",
              "Um imposto obrigatório pago por ter automóvel ligeiro",
              "Um desconto imediato nas portagens das autoestradas",
              "Uma devolução de compras em dinheiro vivo no multibanco"
            ],
            correctAnswer: "Uma declaração provisória pré-preenchida pelo Fisco para trabalhadores por conta de outrem",
            explanation: "O IRS Automático facilita a entrega ao carregar previamente todos os rendimentos e deduções comunicados pelas entidades patronais."
          },
          {
            id: "pt-u1-l4-q6",
            type: "audio_listen",
            prompt: "Ouça o aviso fiscal e anote a data limite comunicada:",
            audioText: "Atenção: o prazo limite para confirmação das faturas pendentes no portal e-Fatura termina no dia vinte e cinco de fevereiro.",
            options: [
              "25 de fevereiro",
              "15 de janeiro",
              "30 de março",
              "1 de julho"
            ],
            correctAnswer: "25 de fevereiro",
            explanation: "O prazo fixado pelo Ministério das Finanças para validar setores de faturas termina a 25 de fevereiro."
          },
          {
            id: "pt-u1-l4-q7",
            type: "fill_blank",
            sentence: "O mês de ___ é o quarto mês do ano civil.",
            missingWord: "abril",
            options: ["abril", "março", "maio", "fevereiro"],
            correctAnswer: "abril",
            explanation: "A sequência anual dos meses: janeiro, fevereiro, março, abril (4.º mês)."
          },
          {
            id: "pt-u1-l4-q8",
            type: "matching",
            prompt: "Associe as categorias de dedução fiscal às despesas correspondentes:",
            pairs: [
              { native: "Saúde", english: "Consultas médicas e medicamentos com receita (IVA a 6%)", left: "Saúde", right: "Consultas médicas e medicamentos com receita (IVA a 6%)" },
              { native: "Educação", english: "Livros escolares, propinas e creches", left: "Educação", right: "Livros escolares, propinas e creches" },
              { native: "Habitação", english: "Juros de crédito à habitação e rendas de casa", left: "Habitação", right: "Juros de crédito à habitação e rendas de casa" },
              { native: "Gerais Familiares", english: "Supermercado, combustível e telecomunicações", left: "Gerais Familiares", right: "Supermercado, combustível e telecomunicações" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l5",
        title: "Lesson 1.5: Avaliação Prática UFCD 10373",
        description: "Simulação prática: preenchimento autónomo de perfis de saúde pública, requerimentos e dados fiscais.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "pt-u1-l5-q1",
            type: "multiple_choice",
            prompt: "Num formulário oficial da Administração Pública, o campo 'Morada de Domicílio Fiscal' refere-se:",
            options: [
              "À residência habitual registada nas Finanças para efeitos de correspondência legal",
              "Ao endereço da empresa onde pretende trabalhar no futuro",
              "Ao hotel onde passou as últimas férias de verão",
              "Ao endereço de email pessoal"
            ],
            correctAnswer: "À residência habitual registada nas Finanças para efeitos de correspondência legal",
            explanation: "O domicílio fiscal é a morada jurídica oficial do contribuinte perante o Estado português."
          },
          {
            id: "pt-u1-l5-q2",
            type: "fill_blank",
            sentence: "No campo 'Código Postal', o formato numérico em Portugal é constituído por ___ dígitos (exemplo: 1000-001).",
            missingWord: "sete",
            options: ["sete", "quatro", "nove", "dez"],
            correctAnswer: "sete",
            explanation: "Os códigos postais portugueses possuem 4 dígitos no primeiro bloco e 3 dígitos no segundo (total 7)."
          },
          {
            id: "pt-u1-l5-q3",
            type: "scramble",
            prompt: "Monte a frase de declaração de responsabilidade num formulário público:",
            tokens: ["Declaro", "por", "minha", "honra", "que", "as", "informações", "são", "verdadeiras."],
            correctTokens: ["Declaro", "por", "minha", "honra", "que", "as", "informações", "são", "verdadeiras."],
            explanation: "Esta é a fórmula jurídica padrão que encerra requerimentos e formulários perante o Estado português."
          },
          {
            id: "pt-u1-l5-q4",
            type: "matching",
            prompt: "Ligue as secções do formulário médico aos respetivos dados do cidadão:",
            pairs: [
              { native: "Alergias conhecidas", english: "Penicilina ou pólen", left: "Alergias conhecidas", right: "Penicilina ou pólen" },
              { native: "Contacto de emergência", english: "Grau de parentesco e número telefónico", left: "Contacto de emergência", right: "Grau de parentesco e número telefónico" },
              { native: "Médico de família", english: "Clínico geral atribuído na USF", left: "Médico de família", right: "Clínico geral atribuído na USF" },
              { native: "Isenção de taxa moderadora", english: "Beneficiário de insuficiência económica", left: "Isenção de taxa moderadora", right: "Beneficiário de insuficiência económica" }
            ]
          },
          {
            id: "pt-u1-l5-q5",
            type: "multiple_choice",
            prompt: "Qual é o valor legal da Chave Móvel Digital (CMD) em Portugal?",
            options: [
              "Permite autenticação segura e assinatura digital qualificada em portais públicos e privados",
              "Serve apenas para comprar bilhetes de cinema online com desconto",
              "É uma palavra-passe única para aceder ao Wi-Fi nos aeroportos",
              "Funciona como cartão de crédito bancário sem juros"
            ],
            correctAnswer: "Permite autenticação segura e assinatura digital qualificada em portais públicos e privados",
            explanation: "A Chave Móvel Digital associa o telemóvel ao cartão de cidadão/título de residência, tendo pleno valor legal de assinatura."
          },
          {
            id: "pt-u1-l5-q6",
            type: "audio_listen",
            prompt: "Ouça a confirmação do balcão e assinale o procedimento final:",
            audioText: "O seu registo no Centro de Saúde foi concluído com sucesso. Guarde o comprovativo carimbado com o seu número provisório de utente.",
            options: [
              "O registo no Centro de Saúde está concluído e tem comprovativo",
              "O pedido foi recusado por falta de passaporte",
              "Terá de regressar daqui a seis meses",
              "É necessário pagar uma multa imediatamente"
            ],
            correctAnswer: "O registo no Centro de Saúde está concluído e tem comprovativo",
            explanation: "A mensagem confirma a conclusão bem-sucedida da inscrição e a entrega do documento carimbado."
          },
          {
            id: "pt-u1-l5-q7",
            type: "fill_blank",
            sentence: "Para validar a submissão do formulário, deve assinar no campo reservado à ___ do requerente.",
            missingWord: "assinatura",
            options: ["assinatura", "profissão", "nacionalidade", "altura"],
            correctAnswer: "assinatura",
            explanation: "A assinatura valida a conformidade e veracidade dos dados apostos no requerimento."
          },
          {
            id: "pt-u1-l5-q8",
            type: "matching",
            prompt: "Associe o tipo de documento à respetiva validade de conservação pessoal:",
            pairs: [
              { native: "Declaração de IRS submetida", english: "Guardar durante 4 a 5 anos", left: "Declaração de IRS submetida", right: "Guardar durante 4 a 5 anos" },
              { native: "Comprovativo de renda", english: "Guardar durante o período contratual", left: "Comprovativo de renda", right: "Guardar durante o período contratual" },
              { native: "Título de Residência / Cartão", english: "Renovar antes da data de caducidade", left: "Título de Residência / Cartão", right: "Renovar antes da data de caducidade" },
              { native: "Faturas de eletricidade pagas", english: "Conservar por um período mínimo de 6 meses", left: "Faturas de eletricidade pagas", right: "Conservar por um período mínimo de 6 meses" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 2: O Mercado de Trabalho e Rotinas Profissionais (25h)
  // UFCD 10374 Standard
  // =========================================================================
  {
    id: "pt-unit-2",
    unitId: "pt-unit-2",
    unitNumber: 2,
    level: "Track A: PLA / IEFP A1–A2 (Vocacional)",
    title: "Unit 2: O Mercado de Trabalho e Rotinas Profissionais",
    subtitle: "Anúncios de emprego, horários por turnos, EPI, Pretérito Perfeito Simples e justificação de faltas.",
    icon: "Briefcase",
    color: "#2563eb",
    lessons: [
      {
        id: "pt-u1-l6",
        title: "Lesson 2.1: Procura de Emprego e Anúncios",
        description: "Interpretação de ofertas de emprego e requisitos do IEFP. Verbos modais de obrigação (ter de, dever).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u2-l1-q1",
            type: "multiple_choice",
            prompt: "O que significa a sigla IEFP em Portugal?",
            options: [
              "Instituto do Emprego e Formação Profissional",
              "Inspeção Europeia de Fronteiras e Portos",
              "Instituto Económico Financeiro Privado",
              "Imposto Extraordinário sobre Fornecedores Públicos"
            ],
            correctAnswer: "Instituto do Emprego e Formação Profissional",
            explanation: "O IEFP é o organismo público responsável pelas políticas de emprego, bolsas de estágio e centros de formação profissional em Portugal."
          },
          {
            id: "pt-u2-l1-q2",
            type: "fill_blank",
            sentence: "Para concorrer a esta vaga de eletricista, o candidato ___ apresentar carteira profissional e certificado.",
            missingWord: "deve",
            options: ["deve", "devia", "deveram", "devas"],
            correctAnswer: "deve",
            explanation: "O verbo modal 'dever' exprime dever/obrigação regulamentar no presente: ele 'deve apresentar'."
          },
          {
            id: "pt-u2-l1-q3",
            type: "scramble",
            prompt: "Ordene a frase de candidatura a uma vaga de emprego:",
            tokens: ["Eu", "enviei", "o", "meu", "currículo", "para", "o", "anúncio."],
            correctTokens: ["Eu", "enviei", "o", "meu", "currículo", "para", "o", "anúncio."],
            explanation: "Estrutura correta: Sujeito + verbo no Pretérito Perfeito Simples + objeto direto + complemento."
          },
          {
            id: "pt-u2-l1-q4",
            type: "matching",
            prompt: "Associe as exigências profissionais aos seus significados nos anúncios de trabalho:",
            pairs: [
              { native: "Disponibilidade imediata", english: "Pode começar a trabalhar sem pré-aviso longo", left: "Disponibilidade imediata", right: "Pode começar a trabalhar sem pré-aviso longo" },
              { native: "Trabalho por turnos rotativos", english: "Horários variáveis (manhã, tarde ou noite)", left: "Trabalho por turnos rotativos", right: "Horários variáveis (manhã, tarde ou noite)" },
              { native: "Experiência comprovada", english: "Declaração ou histórico de trabalho anterior", left: "Experiência comprovada", right: "Declaração ou histórico de trabalho anterior" },
              { native: "Vencimento compatível", english: "Salário de acordo com a função e o setor", left: "Vencimento compatível", right: "Salário de acordo com a função e o setor" }
            ]
          },
          {
            id: "pt-u2-l1-q5",
            type: "multiple_choice",
            prompt: "Qual das opções exprime obrigação estrita usando a locução 'ter de'?",
            options: [
              "Todos os funcionários têm de registar o ponto biométrico à entrada.",
              "Os funcionários podem chegar a qualquer hora.",
              "Talvez o diretor venha mais tarde.",
              "Gostávamos de ter mais dias de férias."
            ],
            correctAnswer: "Todos os funcionários têm de registar o ponto biométrico à entrada.",
            explanation: "'Ter de + infinitivo' é a construção idiomática por excelência para exprimir obrigação objetiva em português europeu."
          },
          {
            id: "pt-u2-l1-q6",
            type: "audio_listen",
            prompt: "Ouça a chamada de recrutamento e selecione a área profissional indicada:",
            audioText: "Estamos a contactá-lo do departamento de recursos humanos da cadeia hoteleira. Analisámos o seu perfil e gostaríamos de agendar uma entrevista para rececionista.",
            options: [
              "Hotelaria e Turismo (Rececionista)",
              "Construção civil pesada",
              "Agricultura biológica",
              "Pesca marítima costeira"
            ],
            correctAnswer: "Hotelaria e Turismo (Rececionista)",
            explanation: "O interlocutor menciona a cadeia hoteleira e convoca o candidato para a função de rececionista."
          },
          {
            id: "pt-u2-l1-q7",
            type: "fill_blank",
            sentence: "Nós ___ cumprir o regulamento interno da empresa.",
            missingWord: "temos de",
            options: ["temos de", "temos que", "vamos", "somos"],
            correctAnswer: "temos de",
            explanation: "Em português padrão europeu, a regra gramatical prescreve 'ter de' para exprimir obrigação necessária."
          },
          {
            id: "pt-u2-l1-q8",
            type: "matching",
            prompt: "Associe as funções aos respetivos setores profissionais em Portugal:",
            pairs: [
              { native: "Empregado de mesa", english: "Restauração e Catering", left: "Empregado de mesa", right: "Restauração e Catering" },
              { native: "Operador de empilhador", english: "Logística e Armazenagem", left: "Operador de empilhador", right: "Logística e Armazenagem" },
              { native: "Pedreiro / Trolha", english: "Construção Civil e Obras", left: "Pedreiro / Trolha", right: "Construção Civil e Obras" },
              { native: "Auxiliar de geriatria", english: "Apoio a Lares e Terceira Idade", left: "Auxiliar de geriatria", right: "Apoio a Lares e Terceira Idade" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l7",
        title: "Lesson 2.2: A Rotina na Empresa",
        description: "Horários de trabalho, turnos, pausas de refeição e organização de fábricas/escritórios. Verbos reflexos (levantar-se, deslocar-se).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u2-l2-q1",
            type: "multiple_choice",
            prompt: "Em Portugal, qual é a duração legal máxima da semana normal de trabalho para a generalidade dos trabalhadores do setor privado?",
            options: [
              "40 horas semanais (8 horas diárias)",
              "55 horas semanais sem limite",
              "25 horas semanais com horas extra",
              "70 horas semanais no verão"
            ],
            correctAnswer: "40 horas semanais (8 horas diárias)",
            explanation: "O Código do Trabalho português estabelece um limite de 40 horas semanais, distribuídas por 8 horas diárias em tempo completo."
          },
          {
            id: "pt-u2-l2-q2",
            type: "fill_blank",
            sentence: "Eu ___ às seis da manhã todos os dias para apanhar o primeiro comboio.",
            missingWord: "levanto-me",
            options: ["levanto-me", "me levanto", "levanta-se", "levantamos"],
            correctAnswer: "levanto-me",
            explanation: "Em português europeu padrão, a próclise só ocorre com palavras atrativas; na frase afirmativa simples, usa-se a ênclise: 'levanto-me'."
          },
          {
            id: "pt-u2-l2-q3",
            type: "scramble",
            prompt: "Ordene os elementos sobre a rotina de deslocação matinal:",
            tokens: ["Ele", "desloca-se", "de", "metro", "para", "a", "fábrica."],
            correctTokens: ["Ele", "desloca-se", "de", "metro", "para", "a", "fábrica."],
            explanation: "Uso do verbo reflexo 'deslocar-se' com preposição de meio de transporte ('de metro')."
          },
          {
            id: "pt-u2-l2-q4",
            type: "matching",
            prompt: "Associe as partes do dia aos respetivos turnos laborais:",
            pairs: [
              { native: "Turno da manhã", english: "08:00 às 16:00", left: "Turno da manhã", right: "08:00 às 16:00" },
              { native: "Turno da tarde", english: "16:00 às 00:00", left: "Turno da tarde", right: "16:00 às 00:00" },
              { native: "Turno da noite / Noturno", english: "00:00 às 08:00 (com subsídio noturno)", left: "Turno da noite / Noturno", right: "00:00 às 08:00 (com subsídio noturno)" },
              { native: "Pausa de almoço", english: "Intervalo obrigatório de 1 a 2 horas", left: "Pausa de almoço", right: "Intervalo obrigatório de 1 a 2 horas" }
            ]
          },
          {
            id: "pt-u2-l2-q5",
            type: "multiple_choice",
            prompt: "Como se chama o ato de registar a entrada e saída do local de trabalho no relógio de controlo?",
            options: [
              "Picar o ponto / Registar o ponto",
              "Bater à porta do chefe",
              "Ligar para a receção",
              "Assinar o livro de honra"
            ],
            correctAnswer: "Picar o ponto / Registar o ponto",
            explanation: "'Picar o ponto' ou 'picar o cartão' é a expressão corrente em Portugal para a validação eletrónica de presenças."
          },
          {
            id: "pt-u2-l2-q6",
            type: "audio_listen",
            prompt: "Ouça o encarregado a explicar a regra do refeitório:",
            audioText: "Todos os trabalhadores têm direito a uma hora de pausa para refeição entre o meio-dia e as duas da tarde no refeitório da empresa.",
            options: [
              "Uma hora de almoço entre as 12:00 e as 14:00 no refeitório",
              "Não é permitida qualquer pausa durante todo o dia",
              "O almoço deve ser tomado no posto de montagem da fábrica",
              "A pausa de almoço dura três horas e meia"
            ],
            correctAnswer: "Uma hora de almoço entre as 12:00 e as 14:00 no refeitório",
            explanation: "O anúncio estabelece claramente o intervalo de 60 minutos entre as 12h e as 14h nas instalações do refeitório."
          },
          {
            id: "pt-u2-l2-q7",
            type: "fill_blank",
            sentence: "Os operários ___ no balneário antes de iniciarem o trabalho na linha.",
            missingWord: "fardam-se",
            options: ["fardam-se", "fardo", "fardas", "fardar"],
            correctAnswer: "fardam-se",
            explanation: "'Fardar-se' significa vestir a farda ou uniforme profissional: 'os operários fardam-se'."
          },
          {
            id: "pt-u2-l2-q8",
            type: "matching",
            prompt: "Ligue os espaços empresariais às suas funções práticas:",
            pairs: [
              { native: "Balneários", english: "Vestiários para troca de roupa e cacifos", left: "Balneários", right: "Vestiários para troca de roupa e cacifos" },
              { native: "Refeitório", english: "Zona de alimentação equipada com micro-ondas", left: "Refeitório", right: "Zona de alimentação equipada com micro-ondas" },
              { native: "Armazém", english: "Guarda e expedição de mercadorias", left: "Armazém", right: "Guarda e expedição de mercadorias" },
              { native: "Gabinete de RH", english: "Gestão de contratos e folhas de pagamento", left: "Gabinete de RH", right: "Gestão de contratos e folhas de pagamento" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l8",
        title: "Lesson 2.3: Ausências e Justificações",
        description: "Comunicação de faltas, baixa médica e licença de parentalidade aos superiores. Pretérito Perfeito Simples de verbos regulares e irregulares.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u2-l3-q1",
            type: "multiple_choice",
            prompt: "Qual documento emitido pelo médico de família do SNS justifica a ausência laboral por motivo de doença?",
            options: [
              "O Certificado de Incapacidade Temporária (CIT / Baixa Médica)",
              "A receita de antibióticos da farmácia",
              "O talão de pagamento da taxa moderadora",
              "Uma declaração da Junta de Freguesia"
            ],
            correctAnswer: "O Certificado de Incapacidade Temporária (CIT / Baixa Médica)",
            explanation: "O CIT é enviado eletronicamente pelo médico para a Segurança Social e entidade empregadora comprovando a incapacidade para o trabalho."
          },
          {
            id: "pt-u2-l3-q2",
            type: "fill_blank",
            sentence: "Ontem eu não ___ trabalhar porque ___ com febre alta.",
            missingWord: "pude",
            options: ["pude", "posso", "podia", "puder"],
            correctAnswer: "pude",
            explanation: "Pretérito Perfeito Simples do verbo irregular 'poder' na 1.ª pessoa do singular: 'eu pude'."
          },
          {
            id: "pt-u2-l3-q3",
            type: "scramble",
            prompt: "Ordene o aviso urgente ao responsável da equipa:",
            tokens: ["Comunico", "que", "estou", "impossibilitado", "de", "comparecer", "ao", "serviço."],
            correctTokens: ["Comunico", "que", "estou", "impossibilitado", "de", "comparecer", "ao", "serviço."],
            explanation: "Comunicação formal de ausência: verbo de comunicação + que + adjetivo de incapacidade + infinitivo."
          },
          {
            id: "pt-u2-l3-q4",
            type: "matching",
            prompt: "Associe os verbos no infinitivo às suas formas no Pretérito Perfeito Simples (eu):",
            pairs: [
              { native: "Estar", english: "estive", left: "Estar", right: "estive" },
              { native: "Ter", english: "tive", left: "Ter", right: "tive" },
              { native: "Fazer", english: "fiz", left: "Fazer", right: "fiz" },
              { native: "Ir", english: "fui", left: "Ir", right: "fui" }
            ]
          },
          {
            id: "pt-u2-l3-q5",
            type: "multiple_choice",
            prompt: "Em Portugal, com que antecedência mínima deve o trabalhador avisar o empregador de uma ausência previsível?",
            options: [
              "Com a antecedência mínima de 5 dias",
              "Dois meses antes sem exceção",
              "Não precisa de avisar com antecedência",
              "Apenas depois de regressar de férias"
            ],
            correctAnswer: "Com a antecedência mínima de 5 dias",
            explanation: "Nos termos do Código do Trabalho (art. 253.º), a ausência previsível deve ser comunicada com a antecedência mínima de 5 dias."
          },
          {
            id: "pt-u2-l3-q6",
            type: "audio_listen",
            prompt: "Ouça a justificação deixada no correio de voz do supervisor:",
            audioText: "Bom dia, senhor Engenheiro Ferreira. O meu filho adoeceu durante a noite e tive de levá-lo ao hospital pediátrico. Logo que possível enviarei a declaração médica.",
            options: [
              "Falta para assistência inadiável a filho doente no hospital",
              "Atraso devido ao trânsito na autoestrada",
              "Pedido de demissão com efeitos imediatos",
              "Comemoração do aniversário em família"
            ],
            correctAnswer: "Falta para assistência inadiável a filho doente no hospital",
            explanation: "O trabalhador comunica falta justificada por motivo de assistência a filho menor com ida à urgência hospitalar."
          },
          {
            id: "pt-u2-l3-q7",
            type: "fill_blank",
            sentence: "A colega Marta ___ baixa por maternidade durante seis meses.",
            missingWord: "esteve de",
            options: ["esteve de", "estava de", "estará de", "ficou a"],
            correctAnswer: "esteve de",
            explanation: "Pretérito Perfeito Simples do verbo estar para indicar ação concluída no passado: ela 'esteve de'."
          },
          {
            id: "pt-u2-l3-q8",
            type: "matching",
            prompt: "Faça corresponder o tipo de falta ao enquadramento legal português:",
            pairs: [
              { native: "Falta justificada remunerada", english: "Falecimento de familiar direto (luto parental/conjugal)", left: "Falta justificada remunerada", right: "Falecimento de familiar direto (luto parental/conjugal)" },
              { native: "Baixa médica SNS", english: "Subsídio pago pela Segurança Social a partir do 4.º dia", left: "Baixa médica SNS", right: "Subsídio pago pela Segurança Social a partir do 4.º dia" },
              { native: "Falta injustificada", english: "Origina perda de retribuição e eventual infração disciplinar", left: "Falta injustificada", right: "Origina perda de retribuição e eventual infração disciplinar" },
              { native: "Casamento do próprio", english: "Direito a 15 dias seguidos de licença matrimonial", left: "Casamento do próprio", right: "Direito a 15 dias seguidos de licença matrimonial" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l9",
        title: "Lesson 2.4: Segurança no Trabalho (EPI)",
        description: "Equipamentos de Proteção Individual (EPI), sinalética de segurança e prevenção de riscos industriais. Formas do imperativo e proibições.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u2-l4-q1",
            type: "multiple_choice",
            prompt: "O que significa a sigla EPI no contexto laboral português?",
            options: [
              "Equipamento de Proteção Individual",
              "Empresa Pública de Investimento",
              "Exame Preventivo de Imunização",
              "Escola Profissional de Informática"
            ],
            correctAnswer: "Equipamento de Proteção Individual",
            explanation: "EPIs são os equipamentos destinados a serem utilizados pelo trabalhador para sua salvaguarda contra riscos profissionais (capacete, luvas, óculos)."
          },
          {
            id: "pt-u2-l4-q2",
            type: "fill_blank",
            sentence: "Por razões de segurança nesta obra, ___ o capacete de proteção e as botas de biqueira de aço.",
            missingWord: "use",
            options: ["use", "usa", "usar", "usado"],
            correctAnswer: "use",
            explanation: "Forma de imperativo afirmativo formal (você): 'use o capacete'."
          },
          {
            id: "pt-u2-l4-q3",
            type: "scramble",
            prompt: "Ordene o aviso sonoro e visual de perigo numa instalação fabril:",
            tokens: ["Não", "toque", "nas", "máquinas", "sem", "autorização", "prévia."],
            correctTokens: ["Não", "toque", "nas", "máquinas", "sem", "autorização", "prévia."],
            explanation: "No imperativo negativo em português, usa-se 'não' + presente do conjuntivo ('não toque')."
          },
          {
            id: "pt-u2-l4-q4",
            type: "matching",
            prompt: "Associe as cores da sinalética de segurança ao seu significado regulamentar (norma ISO):",
            pairs: [
              { native: "Vermelho (sinal redondo barrado)", english: "Proibição (Não fumar / Não entrar)", left: "Vermelho (sinal redondo barrado)", right: "Proibição (Não fumar / Não entrar)" },
              { native: "Azul (sinal redondo)", english: "Obrigação (Uso obrigatório de óculos)", left: "Azul (sinal redondo)", right: "Obrigação (Uso obrigatório de óculos)" },
              { native: "Amarelo (sinal triangular)", english: "Aviso de perigo (Risco elétrico / Substâncias tóxicas)", left: "Amarelo (sinal triangular)", right: "Aviso de perigo (Risco elétrico / Substâncias tóxicas)" },
              { native: "Verde (sinal retangular)", english: "Salvamento e primeiros socorros (Saída de emergência)", left: "Verde (sinal retangular)", right: "Salvamento e primeiros socorros (Saída de emergência)" }
            ]
          },
          {
            id: "pt-u2-l4-q5",
            type: "multiple_choice",
            prompt: "Qual é o procedimento obrigatório em caso de acidente de trabalho em Portugal?",
            options: [
              "Prestar primeiros socorros e comunicar de imediato à chefia e à seguradora de acidentes de trabalho",
              "Ir para casa descansar sem informar ninguém",
              "Tirar fotografias para publicar nas redes sociais",
              "Continuar a trabalhar para não perder o bónus"
            ],
            correctAnswer: "Prestar primeiros socorros e comunicar de imediato à chefia e à seguradora de acidentes de trabalho",
            explanation: "Todas as empresas em Portugal são obrigadas por lei a ter seguro de acidentes de trabalho ativo para todos os colaboradores."
          },
          {
            id: "pt-u2-l4-q6",
            type: "audio_listen",
            prompt: "Ouça o anúncio do técnico de segurança e assinale a instrução dada:",
            audioText: "Atenção a todos os operários: durante a manutenção da caldeira é obrigatório desligar o quadro elétrico geral e usar luvas térmicas ignífugas.",
            options: [
              "Desligar o quadro elétrico e utilizar luvas térmicas ignífugas",
              "Aumentar a velocidade das caldeiras a vapor",
              "Trabalhar sem luvas para maior precisão manual",
              "Ignorar o alarme de sobreaquecimento"
            ],
            correctAnswer: "Desligar o quadro elétrico e utilizar luvas térmicas ignífugas",
            explanation: "O técnico determina expressamente o corte da corrente no quadro e a colocação de luvas de proteção contra calor e chamas."
          },
          {
            id: "pt-u2-l4-q7",
            type: "fill_blank",
            sentence: "Em caso de alarme de incêndio, não utilize os elevadores e ___ as escadas de emergência.",
            missingWord: "desça",
            options: ["desça", "desce", "descer", "descido"],
            correctAnswer: "desça",
            explanation: "Imperativo formal do verbo descer: você 'desça as escadas'."
          },
          {
            id: "pt-u2-l4-q8",
            type: "matching",
            prompt: "Faça corresponder o equipamento de proteção à parte do corpo protegida:",
            pairs: [
              { native: "Abafadores / Tampões auditivos", english: "Proteção contra ruído excessivo (ouvidos)", left: "Abafadores / Tampões auditivos", right: "Proteção contra ruído excessivo (ouvidos)" },
              { native: "Máscara com filtro FFP2/FFP3", english: "Vias respiratórias contra poeiras e fumos", left: "Máscara com filtro FFP2/FFP3", right: "Vias respiratórias contra poeiras e fumos" },
              { native: "Colete retrorrefletor", english: "Visibilidade em estaleiros e estradas", left: "Colete retrorrefletor", right: "Visibilidade em estaleiros e estradas" },
              { native: "Arnês de segurança", english: "Prevenção de quedas em trabalhos em altura", left: "Arnês de segurança", right: "Prevenção de quedas em trabalhos em altura" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l10",
        title: "Lesson 2.5: Avaliação Prática UFCD 10374",
        description: "Redação de email formal com justificação de ausência imprevista por doença e cumprimento dos requisitos da empresa.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "pt-u2-l5-q1",
            type: "multiple_choice",
            prompt: "Qual fórmula de saudação inicial é a mais adequada para um email formal dirigido ao diretor de recursos humanos em Portugal?",
            options: [
              "Exmo. Senhor Diretor de Recursos Humanos,",
              "Olá amigo, tudo bem?",
              "E aí chefe, como vão as coisas?",
              "Boas tardes maltinha,"
            ],
            correctAnswer: "Exmo. Senhor Diretor de Recursos Humanos,",
            explanation: "'Exmo.(a) Senhor(a)' (Excelentíssimo Senhor) é a saudação protocolar padrão em correspondência profissional formal em Portugal."
          },
          {
            id: "pt-u2-l5-q2",
            type: "fill_blank",
            sentence: "Venho por este meio comunicar que me encontro ___ por motivos de doença súbita.",
            missingWord: "impossibilitado",
            options: ["impossibilitado", "feliz", "cansado", "atrasado"],
            correctAnswer: "impossibilitado",
            explanation: "'Encontro-me impossibilitado de comparecer' é a fórmula culta consagrada para justificação de ausências."
          },
          {
            id: "pt-u2-l5-q3",
            type: "scramble",
            prompt: "Ordene a frase que anuncia o envio do comprovativo médico em anexo:",
            tokens: ["Remeto", "em", "anexo", "a", "declaração", "médica", "comprovativa."],
            correctTokens: ["Remeto", "em", "anexo", "a", "declaração", "médica", "comprovativa."],
            explanation: "Frase formal típica: 'Remeto em anexo a declaração médica comprovativa'."
          },
          {
            id: "pt-u2-l5-q4",
            type: "matching",
            prompt: "Associe as partes do email formal de trabalho à sua função estrutural:",
            pairs: [
              { native: "Assunto / Subject", english: "Comunicação de Ausência — [Nome do Colaborador]", left: "Assunto / Subject", right: "Comunicação de Ausência — [Nome do Colaborador]" },
              { native: "Corpo do texto", english: "Exposição sucinta do motivo e data de regresso prevista", left: "Corpo do texto", right: "Exposição sucinta do motivo e data de regresso prevista" },
              { native: "Anexo documental", english: "Cópia digitalizada do CIT ou declaração hospitalar", left: "Anexo documental", right: "Cópia digitalizada do CIT ou declaração hospitalar" },
              { native: "Fórmula de fecho", english: "Com os melhores cumprimentos / Atenciosamente", left: "Fórmula de fecho", right: "Com os melhores cumprimentos / Atenciosamente" }
            ]
          },
          {
            id: "pt-u2-l5-q5",
            type: "multiple_choice",
            prompt: "Como deve encerrar formalmente uma mensagem eletrónica de cariz institucional em Portugal?",
            options: [
              "Com os melhores cumprimentos, / Apresento os meus respeitosos cumprimentos,",
              "Beijinhos grandes e até já,",
              "Fica bem e liga-me depois,",
              "Valeu, fui!"
            ],
            correctAnswer: "Com os melhores cumprimentos, / Apresento os meus respeitosos cumprimentos,",
            explanation: "As fórmulas de encerramento formais exigem sobriedade e respeito hierárquico."
          },
          {
            id: "pt-u2-l5-q6",
            type: "audio_listen",
            prompt: "Ouça o email de confirmação e verifique o procedimento de receção:",
            audioText: "Confirmamos a receção do seu email e do respetivo certificado médico. Informamos que a sua ausência de três dias foi devidamente justificada no portal interno.",
            options: [
              "A empresa confirmou a receção e a ausência está devidamente justificada",
              "A empresa rejeitou o documento e vai aplicar uma penalização",
              "O trabalhador deve apresentar-se no próprio dia às Finanças",
              "O email não continha nenhum ficheiro anexo"
            ],
            correctAnswer: "A empresa confirmou a receção e a ausência está devidamente justificada",
            explanation: "O departamento de recursos humanos valida a receção do documento e confirma a justificação das faltas."
          },
          {
            id: "pt-u2-l5-q7",
            type: "fill_blank",
            sentence: "Prevejo retomar as minhas funções laborais no próximo dia ___ de outubro.",
            missingWord: "vinte",
            options: ["vinte", "hora", "tarde", "ontem"],
            correctAnswer: "vinte",
            explanation: "Indicação da data prevista de regresso ao trabalho (ex: dia vinte de outubro)."
          },
          {
            id: "pt-u2-l5-q8",
            type: "matching",
            prompt: "Associe as expressões formais aos seus equivalentes informais:",
            pairs: [
              { native: "Venho por este meio solicitar", english: "Queria pedir-lhe", left: "Venho por este meio solicitar", right: "Queria pedir-lhe" },
              { native: "Fico ao dispor para esclarecimentos", english: "Se tiver dúvidas pode ligar-me", left: "Fico ao dispor para esclarecimentos", right: "Se tiver dúvidas pode ligar-me" },
              { native: "Agradeço desde já a atenção dispensada", english: "Muito obrigado por ver isto", left: "Agradeço desde já a atenção dispensada", right: "Muito obrigado por ver isto" },
              { native: "Logo que oportuno", english: "Assim que puder", left: "Logo que oportuno", right: "Assim que puder" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 3: Relações Laborais, Contratos e Fiscalidade Avançada (25h)
  // UFCD 10375 Standard
  // =========================================================================
  {
    id: "pt-unit-3",
    unitId: "pt-unit-3",
    unitNumber: 3,
    level: "Track A: PLA / IEFP B1–B2 (Vocacional)",
    title: "Unit 3: Relações Laborais, Contratos e Fiscalidade Avançada",
    subtitle: "Contratos sem termo, recibo de vencimento, subsídio de alimentação, Livro de Reclamações e simulação de entrevista.",
    icon: "FileCheck2",
    color: "#f59e0b",
    lessons: [
      {
        id: "pt-u1-l11",
        title: "Lesson 3.1: Análise do Contrato de Trabalho",
        description: "Tipos de contrato (Sem termo / A termo certo ou incerto), período experimental e voz passiva.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u3-l1-q1",
            type: "multiple_choice",
            prompt: "Qual é a diferença jurídica entre um contrato de trabalho 'A termo certo' e 'Sem termo' em Portugal?",
            options: [
              "O contrato a termo tem data pré-fixada de término; o sem termo é o contrato por tempo indeterminado (efetivo)",
              "O contrato a termo é voluntário e o sem termo é obrigatório",
              "O contrato sem termo só dura seis semanas",
              "Não existe qualquer diferença remuneratória ou jurídica"
            ],
            correctAnswer: "O contrato a termo tem data pré-fixada de término; o sem termo é o contrato por tempo indeterminado (efetivo)",
            explanation: "O contrato 'sem termo' confere estabilidade permanente ('efetivo'), enquanto o contrato 'a termo certo' cessa no prazo acordado."
          },
          {
            id: "pt-u3-l1-q2",
            type: "fill_blank",
            sentence: "O trabalhador ___ contratado pela empresa de engenharia após o período experimental.",
            missingWord: "foi",
            options: ["foi", "esteve", "teve", "havia"],
            correctAnswer: "foi",
            explanation: "Voz passiva no passado com o verbo ser: o trabalhador 'foi contratado'."
          },
          {
            id: "pt-u3-l1-q3",
            type: "scramble",
            prompt: "Ordene os termos relativos ao período experimental inicial do contrato:",
            tokens: ["O", "período", "experimental", "permite", "avaliar", "o", "desempenho."],
            correctTokens: ["O", "período", "experimental", "permite", "avaliar", "o", "desempenho."],
            explanation: "O período experimental destina-se à mútua adaptação e avaliação de competências de parte a parte."
          },
          {
            id: "pt-u3-l1-q4",
            type: "matching",
            prompt: "Associe as cláusulas contratuais essenciais às suas definições:",
            pairs: [
              { native: "Retribuição base", english: "Valor salarial ilíquido acordado por mês de trabalho", left: "Retribuição base", right: "Valor salarial ilíquido acordado por mês de trabalho" },
              { native: "Local de trabalho", english: "Instalações onde o trabalhador desempenha funções", left: "Local de trabalho", right: "Instalações onde o trabalhador desempenha funções" },
              { native: "Período experimental", english: "Tempo inicial em que qualquer das partes pode rescindir sem indemnização", left: "Período experimental", right: "Tempo inicial em que qualquer das partes pode rescindir sem indemnização" },
              { native: "Cláusula de confidencialidade", english: "Dever de guardar segredo sobre dados e clientes da entidade patronal", left: "Cláusula de confidencialidade", right: "Dever de guardar segredo sobre dados e clientes da entidade patronal" }
            ]
          },
          {
            id: "pt-u3-l1-q5",
            type: "multiple_choice",
            prompt: "Qual a duração padrão do período experimental num contrato de trabalho sem termo para a generalidade dos trabalhadores?",
            options: [
              "90 dias para trabalhadores comuns (ou 180 a 240 dias para quadros e cargos de confiança)",
              "Três anos sem possibilidade de saída",
              "Apenas dois dias úteis",
              "Não existe período experimental em Portugal"
            ],
            correctAnswer: "90 dias para trabalhadores comuns (ou 180 a 240 dias para quadros e cargos de confiança)",
            explanation: "O art. 112.º do Código do Trabalho prevê 90 dias para a generalidade dos trabalhadores e prazos mais longos para cargos técnicos e de chefia."
          },
          {
            id: "pt-u3-l1-q6",
            type: "audio_listen",
            prompt: "Ouça a leitura da cláusula rescisória pelo advogado da empresa:",
            audioText: "Em caso de denúncia do contrato pelo trabalhador com mais de dois anos de antiguidade, este obriga-se a cumprir o pré-aviso de sessenta dias.",
            options: [
              "O pré-aviso de rescisão pelo trabalhador com mais de dois anos é de 60 dias",
              "O trabalhador tem de pagar uma coima à Segurança Social",
              "O contrato não pode ser denunciado em nenhuma circunstância",
              "A empresa pode despedir o funcionário em 24 horas"
            ],
            correctAnswer: "O pré-aviso de rescisão pelo trabalhador com mais de dois anos é de 60 dias",
            explanation: "O Código do Trabalho fixa em 60 dias o aviso prévio quando a antiguidade do colaborador ultrapassa os 24 meses."
          },
          {
            id: "pt-u3-l1-q7",
            type: "fill_blank",
            sentence: "As horas extraordinárias são ___ com um acréscimo legal sobre a retribuição horária normal.",
            missingWord: "pagas",
            options: ["pagas", "pago", "pagam", "pagar"],
            correctAnswer: "pagas",
            explanation: "Concordância da forma passiva no particípio: 'as horas extraordinárias são pagas'."
          },
          {
            id: "pt-u3-l1-q8",
            type: "matching",
            prompt: "Associe a denominação do contrato à respetiva modalidade de trabalho:",
            pairs: [
              { native: "Trabalho a tempo parcial (Part-time)", english: "Carga horária inferior às 40 horas semanais", left: "Trabalho a tempo parcial (Part-time)", right: "Carga horária inferior às 40 horas semanais" },
              { native: "Teletrabalho", english: "Prestação de trabalho com recurso a meios telemáticos a partir do domicílio", left: "Teletrabalho", right: "Prestação de trabalho com recurso a meios telemáticos a partir do domicílio" },
              { native: "Trabalho temporário", english: "Cedência de colaborador através de agência certificada", left: "Trabalho temporário", right: "Cedência de colaborador através de agência certificada" },
              { native: "Prestação de serviços (Recibos Verdes)", english: "Trabalhador independente com regime fiscal próprio", left: "Prestação de serviços (Recibos Verdes)", right: "Trabalhador independente com regime fiscal próprio" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l12",
        title: "Lesson 3.2: O Recibo de Vencimento",
        description: "Cálculo do salário ilíquido vs. líquido, descontos para a Segurança Social (TSU 11%), retenção na fonte de IRS e subsídio de alimentação.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u3-l2-q1",
            type: "multiple_choice",
            prompt: "Qual é a taxa percentual de desconto obrigatório para a Segurança Social que é deduzida diretamente do salário do trabalhador por conta de outrem?",
            options: [
              "11% (Onze por cento)",
              "23% (Taxa normal do IVA)",
              "50% do vencimento total",
              "Não há descontos para a Segurança Social"
            ],
            correctAnswer: "11% (Onze por cento)",
            explanation: "O trabalhador desconta 11% do seu salário base para a Segurança Social, cabendo à entidade empregadora pagar 23,75% adicionais (TSU)."
          },
          {
            id: "pt-u3-l2-q2",
            type: "fill_blank",
            sentence: "O vencimento ___ é o valor total antes de descontos; o vencimento ___ é a quantia que entra na conta bancária.",
            missingWord: "ilíquido",
            options: ["ilíquido", "líquido", "mínimo", "anual"],
            correctAnswer: "ilíquido",
            explanation: "Salário ilíquido (bruto) subtraído de IRS e Segurança Social resulta no salário líquido (disponível)."
          },
          {
            id: "pt-u3-l2-q3",
            type: "scramble",
            prompt: "Ordene os elementos do cálculo da remuneração disponível:",
            tokens: ["O", "salário", "líquido", "é", "depositado", "por", "transferência", "bancária."],
            correctTokens: ["O", "salário", "líquido", "é", "depositado", "por", "transferência", "bancária."],
            explanation: "A empresa é obrigada a pagar a retribuição por transferência para o IBAN indicado pelo trabalhador."
          },
          {
            id: "pt-u3-l2-q4",
            type: "matching",
            prompt: "Associe as rubricas do recibo de ordenado às respetivas descrições financeiras:",
            pairs: [
              { native: "Vencimento base", english: "Retribuição nuclear mensal", left: "Vencimento base", right: "Retribuição nuclear mensal" },
              { native: "Subsídio de refeição / alimentação", english: "Compensação diária paga por cada dia de trabalho efetivo", left: "Subsídio de refeição / alimentação", right: "Compensação diária paga por cada dia de trabalho efetivo" },
              { native: "Retenção na fonte de IRS", english: "Adiantamento do imposto sobre rendimento retido pelo patrão", left: "Retenção na fonte de IRS", right: "Adiantamento do imposto sobre rendimento retido pelo patrão" },
              { native: "Taxa Social Única (11%)", english: "Quota do trabalhador para pensões, doença e desemprego", left: "Taxa Social Única (11%)", right: "Quota do trabalhador para pensões, doença e desemprego" }
            ]
          },
          {
            id: "pt-u3-l2-q5",
            type: "multiple_choice",
            prompt: "Em Portugal, a quantos subsídios extraordinários anuais têm direito os trabalhadores por conta de outrem (regime geral de 14 meses)?",
            options: [
              "Dois subsídios: Subsídio de Férias e Subsídio de Natal (13.º e 14.º mês)",
              "Apenas um subsídio de Páscoa",
              "Não existem subsídios extraordinários por lei",
              "Quatro subsídios trimestrais sem impostos"
            ],
            correctAnswer: "Dois subsídios: Subsídio de Férias e Subsídio de Natal (13.º e 14.º mês)",
            explanation: "O regime laboral português contempla 14 pagamentos anuais: os 12 meses correntes acrescidos do subsídio de férias e do subsídio de Natal."
          },
          {
            id: "pt-u3-l2-q6",
            type: "audio_listen",
            prompt: "Ouça a explicação do contabilista sobre o cartão de refeição:",
            audioText: "Se o subsídio de alimentação for pago em cartão eletrónico de refeição, o valor fica isento de IRS e Segurança Social até ao limite legal diário fixado em Diário da República.",
            options: [
              "O subsídio pago em cartão de refeição beneficia de maior isenção fiscal do que em numerário",
              "O subsídio de refeição só pode ser gasto em viagens ao estrangeiro",
              "O cartão de refeição retira 20% do salário todos os meses",
              "É proibido pagar o subsídio através de cartões eletrónicos"
            ],
            correctAnswer: "O subsídio pago em cartão de refeição beneficia de maior isenção fiscal do que em numerário",
            explanation: "A lei portuguesa confere um teto de isenção de IRS e TSU significativamente superior quando o subsídio é liquidado em cartão/vales."
          },
          {
            id: "pt-u3-l2-q7",
            type: "fill_blank",
            sentence: "No recibo de vencimento, o montante total auferido em duodécimos ___ o valor mensal dos subsídios diluídos.",
            missingWord: "inclui",
            options: ["inclui", "exclui", "retira", "deve"],
            correctAnswer: "inclui",
            explanation: "O pagamento em 'duodécimos' significa que os subsídios de férias e Natal são pagos parcelados a cada mês."
          },
          {
            id: "pt-u3-l2-q8",
            type: "matching",
            prompt: "Ligue os conceitos fiscais aos seus impactos no recibo de vencimento:",
            pairs: [
              { native: "Tabela de retenção de IRS", english: "Varia consoante o número de dependentes e estado civil", left: "Tabela de retenção de IRS", right: "Varia consoante o número de dependentes e estado civil" },
              { native: "Subsídio de turno", english: "Acréscimo compensatório por horários rotativos", left: "Subsídio de turno", right: "Acréscimo compensatório por horários rotativos" },
              { native: "Horas noturnas (22h às 07h)", english: "Majoração salarial de 25%", left: "Horas noturnas (22h às 07h)", right: "Majoração salarial de 25%" },
              { native: "Isenção de horário de trabalho (IHT)", english: "Suplemento para cargos sem controlo de picagem de ponto", left: "Isenção de horário de trabalho (IHT)", right: "Suplemento para cargos sem controlo de picagem de ponto" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l13",
        title: "Lesson 3.3: Entrevistas de Emprego Vocacionais",
        description: "Apresentação de perfis técnicos e competências (hard/soft skills). Condicional de cortesia (gostaria de, pedia, poderia) e vocabulário de especialidade.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u3-l3-q1",
            type: "multiple_choice",
            prompt: "Numa entrevista de emprego em Portugal, qual é a forma verbal mais cortês para apresentar a sua pretensão salarial?",
            options: [
              "Gostaria de auferir uma remuneração de acordo com a tabela do setor.",
              "Eu quero muito dinheiro agora.",
              "Paguem-me o que quiserem porque não me importo.",
              "Exijo ser o funcionário mais bem pago."
            ],
            correctAnswer: "Gostaria de auferir uma remuneração de acordo com a tabela do setor.",
            explanation: "O uso do condicional de cortesia ('gostaria de') demonstra moderação, respeito e profissionalismo nas negociações contratuais."
          },
          {
            id: "pt-u3-l3-q2",
            type: "fill_blank",
            sentence: "Se for selecionado para a função, ___ iniciar funções já no próximo mês.",
            missingWord: "poderia",
            options: ["poderia", "posso", "podia", "pude"],
            correctAnswer: "poderia",
            explanation: "O condicional 'poderia' harmoniza com o tom hipotético formal da entrevista de trabalho."
          },
          {
            id: "pt-u3-l3-q3",
            type: "scramble",
            prompt: "Ordene a apresentação da experiência profissional prévia:",
            tokens: ["Tenho", "cinco", "anos", "de", "experiência", "na", "área", "industrial."],
            correctTokens: ["Tenho", "cinco", "anos", "de", "experiência", "na", "área", "industrial."],
            explanation: "Estrutura clássica de valorização curricular em entrevistas técnicas."
          },
          {
            id: "pt-u3-l3-q4",
            type: "matching",
            prompt: "Associe as perguntas clássicas de entrevista de emprego às melhores estratégias de resposta:",
            pairs: [
              { native: "Fale-me um pouco sobre si e o seu percurso.", english: "Resumo sucinto de formações, funções desempenhadas e conquistas", left: "Fale-me um pouco sobre si e o seu percurso.", right: "Resumo sucinto de formações, funções desempenhadas e conquistas" },
              { native: "Quais são os seus pontos fortes?", english: "Pontualidade, capacidade de trabalho em equipa e rigor", left: "Quais são os seus pontos fortes?", right: "Pontualidade, capacidade de trabalho em equipa e rigor" },
              { native: "Como gere situações de pressão ou conflito?", english: "Manter a calma, dialogar e focar na resolução do problema", left: "Como gere situações de pressão ou conflito?", right: "Manter a calma, dialogar e focar na resolução do problema" },
              { native: "Tem alguma questão para nos colocar?", english: "Perguntar sobre perspetivas de evolução e integração na equipa", left: "Tem alguma questão para nos colocar?", right: "Perguntar sobre perspetivas de evolução e integração na equipa" }
            ]
          },
          {
            id: "pt-u3-l3-q5",
            type: "multiple_choice",
            prompt: "Como deve cumprimentar o júri ou o recrutador ao entrar na sala de entrevista presencial?",
            options: [
              "Um aperto de mão firme com contacto visual direto e uma saudação formal ('Bom dia / Boa tarde, muito gosto')",
              "Dar dois beijinhos na cara do recrutador de imediato",
              "Entrar sem olhar nos olhos e sentar-se sem ser convidado",
              "Cumprimentar com um toque de cotovelo informal"
            ],
            correctAnswer: "Um aperto de mão firme com contacto visual direto e uma saudação formal ('Bom dia / Boa tarde, muito gosto')",
            explanation: "O aperto de mão profissional com sorriso discreto e contacto visual transmite confiança e etiqueta corporativa em Portugal."
          },
          {
            id: "pt-u3-l3-q6",
            type: "audio_listen",
            prompt: "Ouça a pergunta do entrevistador e identifique a competência requerida:",
            audioText: "Para esta posição técnica, valorizamos muito a facilidade de adaptação a novos softwares de gestão e a capacidade de comunicação com fornecedores.",
            options: [
              "Flexibilidade informática e facilidade de comunicação interpessoal",
              "Apenas força física para transporte de materiais",
              "Disponibilidade para trabalhar sem salário nos primeiros meses",
              "Capacidade para conduzir camiões pesados de mercadorias"
            ],
            correctAnswer: "Flexibilidade informática e facilidade de comunicação interpessoal",
            explanation: "O recrutador destaca a proficiência digital em softwares e as competências relacionais com terceiros."
          },
          {
            id: "pt-u3-l3-q7",
            type: "fill_blank",
            sentence: "Eu ___ grato se me pudessem dar um feedback sobre a decisão do processo de seleção.",
            missingWord: "ficaria",
            options: ["ficaria", "ficou", "fico", "ficado"],
            correctAnswer: "ficaria",
            explanation: "Condicional do verbo ficar: 'ficaria grato' (I would be grateful)."
          },
          {
            id: "pt-u3-l3-q8",
            type: "matching",
            prompt: "Ligue os termos de competência técnica às respetivas descrições em português:",
            pairs: [
              { native: "Polivalência", english: "Capacidade de executar tarefas de diferentes áreas com eficácia", left: "Polivalência", right: "Capacidade de executar tarefas de diferentes áreas com eficácia" },
              { native: "Assiduidade", english: "Não faltar ao trabalho salvo motivo de força maior", left: "Assiduidade", right: "Não faltar ao trabalho salvo motivo de força maior" },
              { native: "Proatividade", english: "Tomar iniciativa própria para resolver desafios sem esperar ordens", left: "Proatividade", right: "Tomar iniciativa própria para resolver desafios sem esperar ordens" },
              { native: "Resiliência", english: "Capacidade de manter a compostura e superar contratempos", left: "Resiliência", right: "Capacidade de manter a compostura e superar contratempos" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l14",
        title: "Lesson 3.4: Resolução de Conflitos e Reclamações",
        description: "O Livro de Reclamações (físico e eletrónico), direitos do consumidor e do trabalhador. Presente do Conjuntivo (é necessário que, exijo que).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u3-l4-q1",
            type: "multiple_choice",
            prompt: "Em Portugal, o que é o 'Livro de Reclamações' e onde é obrigatório existir?",
            options: [
              "É um instrumento oficial e obrigatório em todos os estabelecimentos com atendimento ao público e plataformas digitais",
              "É um caderno escolar onde os clientes escrevem sugestões de poesia",
              "É um documento facultativo que só existe nas lojas de luxo",
              "É um registo privado que a polícia nunca pode consultar"
            ],
            correctAnswer: "É um instrumento oficial e obrigatório em todos os estabelecimentos com atendimento ao público e plataformas digitais",
            explanation: "O Livro de Reclamações (Dec.-Lei n.º 156/2005) é de disponibilização obrigatória e fiscalizado pela ASAE e entidades reguladoras setoriais."
          },
          {
            id: "pt-u3-l4-q2",
            type: "fill_blank",
            sentence: "É indispensável que o gerente ___ a situação com a máxima brevidade.",
            missingWord: "resolva",
            options: ["resolva", "resolve", "resolver", "resolvido"],
            correctAnswer: "resolva",
            explanation: "Expressões impessoais de necessidade ('é indispensável que') exigem o Presente do Conjuntivo: 'ele resolva'."
          },
          {
            id: "pt-u3-l4-q3",
            type: "scramble",
            prompt: "Ordene os termos para exigir legalmente o formulário de reclamação:",
            tokens: ["Peço-lhe", "que", "me", "entregue", "o", "Livro", "de", "Reclamações."],
            correctTokens: ["Peço-lhe", "que", "me", "entregue", "o", "Livro", "de", "Reclamações."],
            explanation: "Frase formal com verbo no conjuntivo após 'peço-lhe que'."
          },
          {
            id: "pt-u3-l4-q4",
            type: "matching",
            prompt: "Associe os organismos de fiscalização às suas áreas de intervenção:",
            pairs: [
              { native: "ASAE", english: "Segurança alimentar e fiscalização económica comercial", left: "ASAE", right: "Segurança alimentar e fiscalização económica comercial" },
              { native: "ACT", english: "Autoridade para as Condições do Trabalho (direitos laborais)", left: "ACT", right: "Autoridade para as Condições do Trabalho (direitos laborais)" },
              { native: "ANACOM", english: "Regulação do setor das telecomunicações e correios", left: "ANACOM", right: "Regulação do setor das telecomunicações e correios" },
              { native: "ERS", english: "Entidade Reguladora da Saúde (hospitais e clínicas)", left: "ERS", right: "Entidade Reguladora da Saúde (hospitais e clínicas)" }
            ]
          },
          {
            id: "pt-u3-l4-q5",
            type: "multiple_choice",
            prompt: "O que deve fazer o consumidor caso um comerciante se recuse ilegalmente a fornecer o Livro de Reclamações?",
            options: [
              "Contactar as autoridades policiais (PSP ou GNR) para comparecerem no local e lavrarem auto",
              "Desistir imediatamente e ir embora",
              "Destruir produtos da loja como retaliação",
              "Publicar insultos online sem provas"
            ],
            correctAnswer: "Contactar as autoridades policiais (PSP ou GNR) para comparecerem no local e lavrarem auto",
            explanation: "A recusa de entrega do Livro de Reclamações constitui contraordenação grave, devendo ser chamada a autoridade policial."
          },
          {
            id: "pt-u3-l4-q6",
            type: "audio_listen",
            prompt: "Ouça a resposta da entidade reguladora após a receção da queixa:",
            audioText: "Exmo. Senhor: informamos que a sua reclamação no Livro Eletrónico foi remetida ao operador económico para resposta no prazo de quinze dias úteis.",
            options: [
              "A reclamação foi registada e a empresa tem 15 dias úteis para responder",
              "O processo foi arquivado sem qualquer consequência",
              "O reclamante terá de pagar uma taxa processual",
              "A empresa encerrou definitivamente a sua atividade"
            ],
            correctAnswer: "A reclamação foi registada e a empresa tem 15 dias úteis para responder",
            explanation: "A lei fixa o prazo de 15 dias úteis para a entidade reclamada prestar os devidos esclarecimentos ao consumidor e regulador."
          },
          {
            id: "pt-u3-l4-q7",
            type: "fill_blank",
            sentence: "Exijo que a empresa me ___ o valor cobrado indevidamente na fatura.",
            missingWord: "restitua",
            options: ["restitua", "restitui", "restituir", "restituído"],
            correctAnswer: "restitua",
            explanation: "Verbo exigir seguido de que pede o Presente do Conjuntivo: 'que a empresa me restitua'."
          },
          {
            id: "pt-u3-l4-q8",
            type: "matching",
            prompt: "Conecte as fórmulas do Conjuntivo às suas funções pragmáticas:",
            pairs: [
              { native: "É necessário que compreenda", english: "Expressão impessoal de necessidade urgente", left: "É necessário que compreenda", right: "Expressão impessoal de necessidade urgente" },
              { native: "Duvido que cumpram o prazo", english: "Expressão de dúvida e incerteza", left: "Duvido que cumpram o prazo", right: "Expressão de dúvida e incerteza" },
              { native: "Espero que tudo se resolva", english: "Expressão de desejo e expectativa positiva", left: "Espero que tudo se resolva", right: "Expressão de desejo e expectativa positiva" },
              { native: "Embora seja difícil", english: "Concessão através de oração subordinada concessiva", left: "Embora seja difícil", right: "Concessão através de oração subordinada concessiva" }
            ]
          }
        ]
      },

      {
        id: "pt-u1-l15",
        title: "Lesson 3.5: Avaliação Prática UFCD 10375",
        description: "Avaliação oral e prática: simulação integral de entrevista vocacional adaptada ao percurso do formando e debate profissional.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "pt-u3-l5-q1",
            type: "multiple_choice",
            prompt: "Como deve fundamentar a sua motivação ao responder à pergunta: 'Porque escolheu candidatar-se à nossa empresa?'",
            options: [
              "Destacando o alinhamento entre a reputação e valores da empresa e as suas competências técnicas e ambição profissional",
              "Dizendo que aceita qualquer coisa porque não tem dinheiro",
              "Afirmando que a empresa fica perto de sua casa e assim não precisa de acordar cedo",
              "Criticando a sua antiga empresa de forma agressiva"
            ],
            correctAnswer: "Destacando o alinhamento entre a reputação e valores da empresa e as suas competências técnicas e ambição profissional",
            explanation: "A resposta deve demonstrar conhecimento prévio da organização e demonstrar valor acrescentado mútuo."
          },
          {
            id: "pt-u3-l5-q2",
            type: "fill_blank",
            sentence: "Durante a prova de avaliação, os formandos têm de demonstrar fluência verbal e domínio dos termos ___ da profissão.",
            missingWord: "técnicos",
            options: ["técnicos", "simples", "gírias", "breves"],
            correctAnswer: "técnicos",
            explanation: "Na avaliação vocacional UFCD, a precisão do vocabulário técnico da profissão é determinante para a nota."
          },
          {
            id: "pt-u3-l5-q3",
            type: "scramble",
            prompt: "Ordene a síntese de apresentação das suas mais-valias profissionais:",
            tokens: ["Apresento", "capacidade", "de", "liderança", "e", "respeito", "pelas", "normas."],
            correctTokens: ["Apresento", "capacidade", "de", "liderança", "e", "respeito", "pelas", "normas."],
            explanation: "Construção equilibrada de valorização profissional perante uma banca de examinadores."
          },
          {
            id: "pt-u3-l5-q4",
            type: "matching",
            prompt: "Associe os critérios de avaliação da prova oral às suas descrições pedagógicas:",
            pairs: [
              { native: "Correção gramatical", english: "Uso rigoroso dos tempos verbais e regências preposicionais", left: "Correção gramatical", right: "Uso rigoroso dos tempos verbais e regências preposicionais" },
              { native: "Riqueza vocabular", english: "Mobilização de vocabulário específico do setor profissional", left: "Riqueza vocabular", right: "Mobilização de vocabulário específico do setor profissional" },
              { native: "Coerência discursiva", english: "Estruturação lógica com introdução, desenvolvimento e conclusão", left: "Coerência discursiva", right: "Estruturação lógica com introdução, desenvolvimento e conclusão" },
              { native: "Postura e interação", english: "Escuta ativa, clareza na dicção e respeito pelos interlocutores", left: "Postura e interação", right: "Escuta ativa, clareza na dicção e respeito pelos interlocutores" }
            ]
          },
          {
            id: "pt-u3-l5-q5",
            type: "multiple_choice",
            prompt: "Qual é a melhor resposta para a questão sobre pretensões futuras de progressão na carreira?",
            options: [
              "Consolidar a minha eficiência na função inicial e investir em formação contínua para assumir maiores responsabilidades",
              "Não tenho qualquer interesse em aprender coisas novas",
              "Pretendo substituir o diretor-geral no prazo de três semanas",
              "Trabalhar apenas o mínimo estritamente exigido sem nunca fazer formação"
            ],
            correctAnswer: "Consolidar a minha eficiência na função inicial e investir em formação contínua para assumir maiores responsabilidades",
            explanation: "Demonstra maturidade, humildade inicial e compromisso com o desenvolvimento técnico contínuo."
          },
          {
            id: "pt-u3-l5-q6",
            type: "audio_listen",
            prompt: "Ouça o veredito final da comissão de avaliação vocacional:",
            audioText: "Após deliberação da comissão avaliadora, consideramos que o candidato demonstrou sólida competência comunicativa em contexto profissional, obtendo aproveitamento com distinção.",
            options: [
              "O candidato foi aprovado com aproveitamento e distinção na avaliação",
              "O candidato terá de repetir todo o curso vocacional",
              "A comissão não conseguiu chegar a qualquer decisão",
              "A prova foi cancelada por motivos técnicos"
            ],
            correctAnswer: "O candidato foi aprovado com aproveitamento e distinção na avaliação",
            explanation: "A comissão valida formalmente a aptidão profissional do candidato com menção honrosa de distinção."
          },
          {
            id: "pt-u3-l5-q7",
            type: "fill_blank",
            sentence: "O certificado de qualificações emitido pelo IEFP atesta o nível de competência no Quadro Nacional de ___ (QNQ).",
            missingWord: "Qualificações",
            options: ["Qualificações", "Salários", "Empregos", "Diplomas"],
            correctAnswer: "Qualificações",
            explanation: "QNQ significa Quadro Nacional de Qualificações, articulado com o Quadro Europeu (QEQ)."
          },
          {
            id: "pt-u3-l5-q8",
            type: "matching",
            prompt: "Ligue os níveis do QNQ / CEFR aos seus patamares de autonomia laboral:",
            pairs: [
              { native: "Nível 1–2 (A1–A2)", english: "Utilizador elementar em tarefas rotineiras sob supervisão", left: "Nível 1–2 (A1–A2)", right: "Utilizador elementar em tarefas rotineiras sob supervisão" },
              { native: "Nível 3–4 (B1–B2)", english: "Técnico qualificado com autonomia executiva e comunicação clara", left: "Nível 3–4 (B1–B2)", right: "Técnico qualificado com autonomia executiva e comunicação clara" },
              { native: "Nível 5–6 (C1 / Licenciatura)", english: "Gestão de equipas, elaboração de relatórios complexos e planeamento", left: "Nível 5–6 (C1 / Licenciatura)", right: "Gestão de equipas, elaboração de relatórios complexos e planeamento" },
              { native: "Nível 7–8 (C2 / Mestrado/Doutoramento)", english: "Investigação avançada, perícia de topo e direção estratégica", left: "Nível 7–8 (C2 / Mestrado/Doutoramento)", right: "Investigação avançada, perícia de topo e direção estratégica" }
            ]
          }
        ]
      }
    ]
  }
];
