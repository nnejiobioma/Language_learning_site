// =========================================================================
// Portuguese Curriculum — Track B: Primary & Secondary School Syllabus
// (Direção-Geral da Educação DGE Standard)
// Units 4 to 6 • 5 Lessons per Unit = 15 Comprehensive Academic Lessons Total
// =========================================================================

export const portugueseTrackBUnits = [
  // =========================================================================
  // UNIT 4: A Comunidade Escolar e Relações Interpessoais (Nível Iniciação)
  // DGE Ensino Básico Standard
  // =========================================================================
  {
    id: "pt-unit-4",
    unitId: "pt-unit-4",
    unitNumber: 4,
    level: "Track B: DGE Ensino Básico (Iniciação A1–A2)",
    title: "Unit 4: A Comunidade Escolar e Relações Interpessoais",
    subtitle: "Espaços da escola, cantina, biblioteca, horários, disciplinas, regras de conduta e interação com professores.",
    icon: "GraduationCap",
    color: "#8b5cf6",
    lessons: [
      {
        id: "pt-u2-l1",
        title: "Lesson 4.1: Boas-vindas e Espaços da Escola",
        description: "Identificação das zonas escolares (cantina, biblioteca, pavilhão gimnodesportivo, secretaria). Pronomes interrogativos (onde, quem, o quê).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u4-l1-q1",
            type: "multiple_choice",
            prompt: "Onde se dirigem os alunos em Portugal para requisitar livros de leitura ou estudar em silêncio?",
            options: [
              "À Biblioteca Escolar / Centro de Recursos (BE/CRE)",
              "À Reprografia para comprar senhas",
              "Ao Pavilhão Gimnodesportivo",
              "Ao Bar dos Professores"
            ],
            correctAnswer: "À Biblioteca Escolar / Centro de Recursos (BE/CRE)",
            explanation: "A Biblioteca Escolar (integrada na Rede de Bibliotecas Escolares) é o espaço dedicado à leitura, pesquisa e estudo autónomo."
          },
          {
            id: "pt-u4-l1-q2",
            type: "fill_blank",
            sentence: "— ___ fica o gabinete do Diretor de Turma? — Fica no primeiro piso, à esquerda.",
            missingWord: "Onde",
            options: ["Onde", "Quem", "Quanto", "Quando"],
            correctAnswer: "Onde",
            explanation: "O pronome interrogativo 'onde' é utilizado para inquirir sobre localização física ou espacial."
          },
          {
            id: "pt-u4-l1-q3",
            type: "scramble",
            prompt: "Ordene a pergunta sobre o horário de almoço no refeitório escolar:",
            tokens: ["A", "que", "horas", "abre", "a", "cantina", "escolar?"],
            correctTokens: ["A", "que", "horas", "abre", "a", "cantina", "escolar?"],
            explanation: "Fórmula interrogativa temporal padrão em contexto escolar: 'A que horas abre a cantina escolar?'."
          },
          {
            id: "pt-u4-l1-q4",
            type: "matching",
            prompt: "Associe as instalações escolares às suas funções específicas:",
            pairs: [
              { native: "Cantina / Refeitório", english: "Almoço diário e refeições escolares", left: "Cantina / Refeitório", right: "Almoço diário e refeições escolares" },
              { native: "Pavilhão gimnodesportivo", english: "Aulas de Educação Física e torneios", left: "Pavilhão gimnodesportivo", right: "Aulas de Educação Física e torneios" },
              { native: "Secretaria / Serviços Administrativos", english: "Matrículas, certificados e passes escolares", left: "Secretaria / Serviços Administrativos", right: "Matrículas, certificados e passes escolares" },
              { native: "Reprografia / Papelaria", english: "Fotocópias, cadernos e material escolar", left: "Reprografia / Papelaria", right: "Fotocópias, cadernos e material escolar" }
            ]
          },
          {
            id: "pt-u4-l1-q5",
            type: "multiple_choice",
            prompt: "Quem é a figura do 'Diretor de Turma' (DT) numa escola básica ou secundária em Portugal?",
            options: [
              "O professor responsável por coordenar a turma e fazer a ponte com os pais e encarregados de educação",
              "O motorista do autocarro que transporta os alunos",
              "O aluno mais velho da sala escolhido para limpar o quadro",
              "O vigilante do portão de entrada"
            ],
            correctAnswer: "O professor responsável por coordenar a turma e fazer a ponte com os pais e encarregados de educação",
            explanation: "O Diretor de Turma é o docente coordenador que acompanha o percurso pedagógico, disciplinar e pessoal de cada turma."
          },
          {
            id: "pt-u4-l1-q6",
            type: "audio_listen",
            prompt: "Ouça o anúncio sonoro da campainha e selecione a informação veiculada:",
            audioText: "Atenção alunos: o toque assinala o fim do intervalo de almoço. Devem dirigir-se imediatamente às respetivas salas de aula para o terceiro bloco.",
            options: [
              "O intervalo terminou e todos devem ir para as salas de aula",
              "A escola encerrou para o resto da semana",
              "É hora de almoço no refeitório",
              "Todos os testes foram adiados"
            ],
            correctAnswer: "O intervalo terminou e todos devem ir para as salas de aula",
            explanation: "A comunicação avisa sobre o termo do intervalo e o início imediato do bloco letivo."
          },
          {
            id: "pt-u4-l1-q7",
            type: "fill_blank",
            sentence: "— ___ é o delegado de turma este ano letivo? — É o Tiago.",
            missingWord: "Quem",
            options: ["Quem", "O quê", "Como", "Qual"],
            correctAnswer: "Quem",
            explanation: "'Quem' interroga especificamente sobre a identidade de uma pessoa."
          },
          {
            id: "pt-u4-l1-q8",
            type: "matching",
            prompt: "Associe os pronomes interrogativos às respostas pretendidas:",
            pairs: [
              { native: "O que tens na mochila?", english: "Livros, estojo e a sebenta", left: "O que tens na mochila?", right: "Livros, estojo e a sebenta" },
              { native: "Onde fica o laboratório?", english: "No Bloco C, sala 12", left: "Onde fica o laboratório?", right: "No Bloco C, sala 12" },
              { native: "Quando é o teste de História?", english: "Na próxima sexta-feira de manhã", left: "Quando é o teste de História?", right: "Na próxima sexta-feira de manhã" },
              { native: "Quantos alunos há na turma?", english: "Vinte e quatro colegas", left: "Quantos alunos há na turma?", right: "Vinte e quatro colegas" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l2",
        title: "Lesson 4.2: O Horário Escolar e Disciplinas",
        description: "Expressão de preferências académicas, nomes das disciplinas (Português, Matemática, Ciências). Artigos definidos/indefinidos e concordância nominal.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u4-l2-q1",
            type: "multiple_choice",
            prompt: "Em Portugal, como são designados os dias úteis da semana no horário escolar?",
            options: [
              "Segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira",
              "Lunes, martes, miércoles, jueves, viernes",
              "Primeira-feira a quinta-feira sem sexta",
              "Dia útil 1 a dia útil 5"
            ],
            correctAnswer: "Segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira",
            explanation: "O português é a única língua românica ocidental que utiliza o sistema numérico eclesiástico para os dias de trabalho."
          },
          {
            id: "pt-u4-l2-q2",
            type: "fill_blank",
            sentence: "A disciplina de ___ é a minha favorita porque aprendo sobre o corpo humano e a natureza.",
            missingWord: "Ciências Naturais",
            options: ["Ciências Naturais", "Educação Física", "Matemática", "Inglês"],
            correctAnswer: "Ciências Naturais",
            explanation: "Ciências Naturais leciona conteúdos de biologia, anatomia, geologia e ecologia no 2.º e 3.º ciclos."
          },
          {
            id: "pt-u4-l2-q3",
            type: "scramble",
            prompt: "Ordene a frase que demonstra concordância de género e número:",
            tokens: ["As", "novas", "salas", "de", "informática", "são", "espaçosas."],
            correctTokens: ["As", "novas", "salas", "de", "informática", "são", "espaçosas."],
            explanation: "Concordância nominal no feminino plural: 'As novas salas (...) são espaçosas'."
          },
          {
            id: "pt-u4-l2-q4",
            type: "matching",
            prompt: "Ligue as siglas das disciplinas curriculares aos seus nomes completos em Portugal:",
            pairs: [
              { native: "HGP", english: "História e Geografia de Portugal", left: "HGP", right: "História e Geografia de Portugal" },
              { native: "TIC", english: "Tecnologias da Informação e Comunicação", left: "TIC", right: "Tecnologias da Informação e Comunicação" },
              { native: "EV / ET", english: "Educação Visual / Educação Tecnológica", left: "EV / ET", right: "Educação Visual / Educação Tecnológica" },
              { native: "EF", english: "Educação Física", left: "EF", right: "Educação Física" }
            ]
          },
          {
            id: "pt-u4-l2-q5",
            type: "multiple_choice",
            prompt: "Qual frase apresenta correta concordância de adjetivo com substantivos de géneros diferentes?",
            options: [
              "O livro e a régua são novos.",
              "O livro e a régua são novas.",
              "O livro e a régua é novo.",
              "Os livro e as régua são novo."
            ],
            correctAnswer: "O livro e a régua são novos.",
            explanation: "Quando um adjetivo qualifica substantivos de géneros distintos, prevalece a forma do masculino plural ('novos')."
          },
          {
            id: "pt-u4-l2-q6",
            type: "audio_listen",
            prompt: "Ouça o aluno a ler o seu horário de terça-feira e assinale o que tem de levar:",
            audioText: "Na terça-feira de manhã temos dois tempos de Educação Física e depois Matemática. Não te esqueças de trazer o equipamento de desporto e a calculadora científica.",
            options: [
              "Fato de treino / equipamento desportivo e calculadora científica",
              "Apenas tintas e pincéis para Educação Visual",
              "O dicionário de Latim antigo",
              "Uma guitarra para Educação Musical"
            ],
            correctAnswer: "Fato de treino / equipamento desportivo e calculadora científica",
            explanation: "O aluno relembra o material obrigatório para as aulas de Educação Física e Matemática."
          },
          {
            id: "pt-u4-l2-q7",
            type: "fill_blank",
            sentence: "O aluno comprou ___ caderno quadriculado para os exercícios de geometria.",
            missingWord: "um",
            options: ["um", "uma", "uns", "umas"],
            correctAnswer: "um",
            explanation: "Artigo indefinido masculino singular concordando com 'caderno': 'um caderno'."
          },
          {
            id: "pt-u4-l2-q8",
            type: "matching",
            prompt: "Associe o material escolar às respetivas disciplinas curriculares:",
            pairs: [
              { native: "Compasso e esquadro", english: "Geometria e Matemática", left: "Compasso e esquadro", right: "Geometria e Matemática" },
              { native: "Flauta de bisel e pauta", english: "Educação Musical", left: "Flauta de bisel e pauta", right: "Educação Musical" },
              { native: "Bata branca e tubos de ensaio", english: "Laboratório de Físico-Química", left: "Bata branca e tubos de ensaio", right: "Laboratório de Físico-Química" },
              { native: "Dicionário de Língua Portuguesa", english: "Gramática e Estudo da Língua", left: "Dicionário de Língua Portuguesa", right: "Gramática e Estudo da Língua" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l3",
        title: "Lesson 4.3: Regras da Sala de Aula",
        description: "Regulamento interno da escola, códigos de conduta e segurança. Estruturas negativas (não, nunca, nada, ninguém) e conjugação no presente.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u4-l3-q1",
            type: "multiple_choice",
            prompt: "De acordo com o Estatuto do Aluno e Ética Escolar em Portugal, qual é a regra quanto ao uso de telemóveis durante a aula?",
            options: [
              "Devem estar desligados ou no silêncio e guardados na mochila, exceto quando autorizados expressamente pelo professor para fins pedagógicos",
              "Os alunos podem atender chamadas em alta voz a qualquer instante",
              "É obrigatório gravar em vídeo os colegas e o professor",
              "Podem jogar videojogos sempre que terminarem os exercícios"
            ],
            correctAnswer: "Devem estar desligados ou no silêncio e guardados na mochila, exceto quando autorizados expressamente pelo professor para fins pedagógicos",
            explanation: "A lei e os regulamentos internos das escolas portuguesas proíbem a utilização de telemóveis sem autorização pedagógica prévia."
          },
          {
            id: "pt-u4-l3-q2",
            type: "fill_blank",
            sentence: "Durante as provas de avaliação, os alunos ___ podem consultar os cadernos ou comunicar com os colegas.",
            missingWord: "não",
            options: ["não", "sempre", "talvez", "muito"],
            correctAnswer: "não",
            explanation: "Advérbio de negação estrita para proibições regulamentares: 'não podem consultar'."
          },
          {
            id: "pt-u4-l3-q3",
            type: "scramble",
            prompt: "Ordene o princípio cívico fundamental de convivência escolar:",
            tokens: ["Devemos", "respeitar", "as", "opiniões", "de", "todos", "os", "colegas."],
            correctTokens: ["Devemos", "respeitar", "as", "opiniões", "de", "todos", "os", "colegas."],
            explanation: "Construção com verbo modal 'dever' no plural exprimindo compromisso cívico partilhado."
          },
          {
            id: "pt-u4-l3-q4",
            type: "matching",
            prompt: "Associe as palavras negativas em português aos seus contextos de uso:",
            pairs: [
              { native: "Ninguém", english: "Refere-se a pessoas (negação total)", left: "Ninguém", right: "Refere-se a pessoas (negação total)" },
              { native: "Nada", english: "Refere-se a coisas ou objetos", left: "Nada", right: "Refere-se a coisas ou objetos" },
              { native: "Nunca / Jamais", english: "Refere-se ao tempo e frequência nula", left: "Nunca / Jamais", right: "Refere-se ao tempo e frequência nula" },
              { native: "Nenhum / Nenhuma", english: "Determinante indefinido negativo", left: "Nenhum / Nenhuma", right: "Determinante indefinido negativo" }
            ]
          },
          {
            id: "pt-u4-l3-q5",
            type: "multiple_choice",
            prompt: "Em caso de simulacro de incêndio ou emergência na escola, como devem agir os alunos?",
            options: [
              "Manter a calma, seguir o delegado de turma e o professor em fila ordenada até ao Ponto de Encontro",
              "Correr em pânico pelos corredores aos gritos",
              "Recolher todos os computadores portáteis pesados",
              "Esconder-se dentro dos armários da sala"
            ],
            correctAnswer: "Manter a calma, seguir o delegado de turma e o professor em fila ordenada até ao Ponto de Encontro",
            explanation: "O plano de evacuação escolar prescreve evacuação serena em fila indiana guiada até ao Ponto de Encontro exterior."
          },
          {
            id: "pt-u4-l3-q6",
            type: "audio_listen",
            prompt: "Ouça a professora a relembrar uma regra de participação e selecione-a:",
            audioText: "Meninos, lembrem-se: para falar na sala de aula devemos levantar o braço e esperar que o professor nos dê a palavra.",
            options: [
              "Levantar o braço e aguardar a palavra antes de falar",
              "Falar ao mesmo tempo que o professor",
              "Gritar da última fila para se fazer ouvir",
              "Escrever apenas mensagens de texto no quadro"
            ],
            correctAnswer: "Levantar o braço e aguardar a palavra antes de falar",
            explanation: "A professora reforça o princípio da cortesia e da vez de intervenção através do levantamento do braço."
          },
          {
            id: "pt-u4-l3-q7",
            type: "fill_blank",
            sentence: "Na nossa escola, ___ aluno pode sair do recinto sem autorização escrita do encarregado de educação.",
            missingWord: "nenhum",
            options: ["nenhum", "algum", "todo", "outro"],
            correctAnswer: "nenhum",
            explanation: "Determinante negativo: 'nenhum aluno pode sair'."
          },
          {
            id: "pt-u4-l3-q8",
            type: "matching",
            prompt: "Faça corresponder as atitudes cívicas às respetivas infrações no ambiente escolar:",
            pairs: [
              { native: "Assiduidade e pontualidade", english: "Chegar a horas sem atrasos injustificados", left: "Assiduidade e pontualidade", right: "Chegar a horas sem atrasos injustificados" },
              { native: "Zelo pelo património", english: "Não riscar as carteiras nem danificar manuais", left: "Zelo pelo património", right: "Não riscar as carteiras nem danificar manuais" },
              { native: "Recusa do bullying", english: "Não tolerar provocações, ofensas ou exclusão de pares", left: "Recusa do bullying", right: "Não tolerar provocações, ofensas ou exclusão de pares" },
              { native: "Limpeza do espaço", english: "Colocar o lixo nos ecopontos da sala de aula", left: "Limpeza do espaço", right: "Colocar o lixo nos ecopontos da sala de aula" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l4",
        title: "Lesson 4.4: Interação com Pares e Professores",
        description: "Pedidos de esclarecimento, partilha de materiais escolares e fórmulas de delicadeza. Pronomes de cortesia (o professor, a senhora professora).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u4-l4-q1",
            type: "multiple_choice",
            prompt: "Em Portugal, como se dirigem os alunos do ensino básico e secundário aos seus docentes de forma respeitosa?",
            options: [
              "— 'O senhor professor' / 'A senhora professora' (ou 'Professor(a)' seguido do nome)",
              "— 'Tu, ó amigo'",
              "— 'Ei, senhor'",
              "— Pelo primeiro nome sem qualquer título"
            ],
            correctAnswer: "— 'O senhor professor' / 'A senhora professora' (ou 'Professor(a)' seguido do nome)",
            explanation: "A norma cultural portuguesa de respeito académico utiliza a 3.ª pessoa: 'A senhora professora importa-se de repetir?'."
          },
          {
            id: "pt-u4-l4-q2",
            type: "fill_blank",
            sentence: "Desculpe, professor, ___ explicar novamente este exercício de gramática?",
            missingWord: "pode",
            options: ["pode", "podes", "posso", "podemos"],
            correctAnswer: "pode",
            explanation: "Forma de 3.ª pessoa singular de delicadeza com o título implícito: 'o senhor professor pode'."
          },
          {
            id: "pt-u4-l4-q3",
            type: "scramble",
            prompt: "Ordene o pedido cortês de empréstimo de material a um colega:",
            tokens: ["Importas-te", "de", "me", "emprestar", "uma", "borracha,", "por", "favor?"],
            correctTokens: ["Importas-te", "de", "me", "emprestar", "uma", "borracha,", "por", "favor?"],
            explanation: "Entre colegas usa-se a 2.ª pessoa ('tu') com a fórmula de delicadeza: 'Importas-te de me emprestar...?'."
          },
          {
            id: "pt-u4-l4-q4",
            type: "matching",
            prompt: "Associe os pedidos na aula às intenções comunicativas dos alunos:",
            pairs: [
              { native: "Não percebi, pode repetir?", english: "Pedido de clarificação de uma explicação", left: "Não percebi, pode repetir?", right: "Pedido de clarificação de uma explicação" },
              { native: "Posso ir ao quadro resolver?", english: "Iniciativa para participar na resolução de um problema", left: "Posso ir ao quadro resolver?", right: "Iniciativa para participar na resolução de um problema" },
              { native: "Posso ir à casa de banho?", english: "Pedido de autorização para saída pontual urgente", left: "Posso ir à casa de banho?", right: "Pedido de autorização para saída pontual urgente" },
              { native: "Em que página estamos?", english: "Orientação na leitura do manual escolar", left: "Em que página estamos?", right: "Orientação na leitura do manual escolar" }
            ]
          },
          {
            id: "pt-u4-l4-q5",
            type: "multiple_choice",
            prompt: "Qual das opções representa uma colaboração saudável num trabalho de grupo escolar?",
            options: [
              "Dividir equitativamente as tarefas, debater ideias com respeito e juntar as conclusões num relatório único",
              "Deixar que apenas um aluno faça todo o trabalho sozinho",
              "Copiar um texto integral da internet sem ler nem citar a fonte",
              "Recusar falar com os outros colegas de equipa"
            ],
            correctAnswer: "Dividir equitativamente as tarefas, debater ideias com respeito e juntar as conclusões num relatório único",
            explanation: "O trabalho em equipa promove competências sociais, distribuição justa de responsabilidade e síntese crítica."
          },
          {
            id: "pt-u4-l4-q6",
            type: "audio_listen",
            prompt: "Ouça a questão colocada pelo aluno e selecione o assunto correspondente:",
            audioText: "Senhor professor, temos de entregar o trabalho sobre a expansão marítima impresso em papel ou podemos submetê-lo no Google Classroom?",
            options: [
              "Dúvida sobre o formato de entrega do trabalho escolar (papel ou plataforma digital)",
              "Pedido para cancelar a disciplina de História",
              "Reclamação sobre a comida da cantina",
              "Convite para uma festa de aniversário"
            ],
            correctAnswer: "Dúvida sobre o formato de entrega do trabalho escolar (papel ou plataforma digital)",
            explanation: "O aluno questiona a modalidade de entrega do trabalho de grupo."
          },
          {
            id: "pt-u4-l4-q7",
            type: "fill_blank",
            sentence: "— Muito obrigado pelo teu apontamento. — De ___, sempre que precisares!",
            missingWord: "nada",
            options: ["nada", "tudo", "nunca", "coisa"],
            correctAnswer: "nada",
            explanation: "'De nada' é a réplica clássica e educada a 'muito obrigado'."
          },
          {
            id: "pt-u4-l4-q8",
            type: "matching",
            prompt: "Associe as saudações ao grau de formalidade adequado:",
            pairs: [
              { native: "Bom dia, senhor professor.", english: "Formal (dirigido ao docente)", left: "Bom dia, senhor professor.", right: "Formal (dirigido ao docente)" },
              { native: "Olá malta, tudo bem?", english: "Informal (dirigido ao grupo de amigos e colegas)", left: "Olá malta, tudo bem?", right: "Informal (dirigido ao grupo de amigos e colegas)" },
              { native: "Até amanhã e bom descanso.", english: "Despedida cortês ao final do dia letivo", left: "Até amanhã e bom descanso.", right: "Despedida cortês ao final do dia letivo" },
              { native: "Com licença, posso entrar?", english: "Fórmula de cortesia ao entrar numa sala ocupada", left: "Com licença, posso entrar?", right: "Fórmula de cortesia ao entrar numa sala ocupada" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l5",
        title: "Lesson 4.5: Ficha de Avaliação Sumativa",
        description: "Compreensão de leitura, descrição visual do espaço escolar e conformidade com regras disciplinares.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "pt-u4-l5-q1",
            type: "multiple_choice",
            prompt: "Num teste de compreensão escrita de Português no Ensino Básico, a questão pede para 'identificar a ideia principal do texto'. O que deve fazer?",
            options: [
              "Sintetizar o tema nuclear desenvolvido ao longo dos parágrafos, sem se focar em detalhes secundários",
              "Copiar apenas a primeira e última palavra do texto",
              "Contar o número exato de letras maiúsculas",
              "Inventar uma história diferente da do autor"
            ],
            correctAnswer: "Sintetizar o tema nuclear desenvolvido ao longo dos parágrafos, sem se focar em detalhes secundários",
            explanation: "A identificação da ideia principal testa a capacidade de apreensão global do sentido do texto."
          },
          {
            id: "pt-u4-l5-q2",
            type: "fill_blank",
            sentence: "O texto lido na avaliação classifica-se como narrativo porque relata uma sucessão de ___ protagonizada por personagens.",
            missingWord: "acontecimentos",
            options: ["acontecimentos", "números", "leis", "receitas"],
            correctAnswer: "acontecimentos",
            explanation: "O texto narrativo estrutura-se em ação, personagens, tempo e espaço."
          },
          {
            id: "pt-u4-l5-q3",
            type: "scramble",
            prompt: "Ordene a regra de realização de provas formais na escola:",
            tokens: ["Leia", "atentamente", "as", "questões", "antes", "de", "responder."],
            correctTokens: ["Leia", "atentamente", "as", "questões", "antes", "de", "responder."],
            explanation: "Conselho metodológico essencial para evitar erros por precipitação nos testes."
          },
          {
            id: "pt-u4-l5-q4",
            type: "matching",
            prompt: "Associe as partes da estrutura de um texto descritivo às suas características:",
            pairs: [
              { native: "Enquadramento espacial", english: "Localização da cena (ex: 'No pátio central da escola')", left: "Enquadramento espacial", right: "Localização da cena (ex: 'No pátio central da escola')" },
              { native: "Caracterização visual", english: "Uso de adjetivos de cor, forma e luminosidade", left: "Caracterização visual", right: "Uso de adjetivos de cor, forma e luminosidade" },
              { native: "Sensações auditivas", english: "Referência a sons, risos, vozes e campainhas", left: "Sensações auditivas", right: "Referência a sons, risos, vozes e campainhas" },
              { native: "Conclusão e impressão", english: "Apreciação pessoal ou atmosfera geral do ambiente", left: "Conclusão e impressão", right: "Apreciação pessoal ou atmosfera geral do ambiente" }
            ]
          },
          {
            id: "pt-u4-l5-q5",
            type: "multiple_choice",
            prompt: "Como é expressa a classificação sumativa no final de cada período letivo no ensino básico português (2.º e 3.º ciclos)?",
            options: [
              "Numa escala quantitativa de 1 a 5 níveis (sendo 3 o patamar mínimo de suficiência)",
              "Em percentagens de 0% a 1000%",
              "Com letras de A até Z",
              "Apenas como 'apto' ou 'não apto' sem notas"
            ],
            correctAnswer: "Numa escala quantitativa de 1 a 5 níveis (sendo 3 o patamar mínimo de suficiência)",
            explanation: "Nos 2.º e 3.º ciclos em Portugal, as notas vão de nível 1 a nível 5 (nível 1 e 2 são negativas; 3, 4 e 5 são positivas)."
          },
          {
            id: "pt-u4-l5-q6",
            type: "audio_listen",
            prompt: "Ouça a apreciação final do professor sobre a prova:",
            audioText: "Parabéns a todos pelo empenho demonstrado nesta ficha de avaliação. A maioria dos alunos respondeu com precisão e cumpriu as regras de pontuação.",
            options: [
              "O professor elogiou o rigor e o respeito pelas regras de pontuação",
              "Nenhum aluno conseguiu nota positiva",
              "O teste terá de ser repetido amanhã de manhã",
              "O professor esqueceu-se de corrigir os exercícios"
            ],
            correctAnswer: "O professor elogiou o rigor e o respeito pelas regras de pontuação",
            explanation: "O feedback do professor é francamente positivo, realçando o bom desempenho da turma."
          },
          {
            id: "pt-u4-l5-q7",
            type: "fill_blank",
            sentence: "Para obter uma boa classificação, é indispensável rever a ___ do texto antes de entregar a folha.",
            missingWord: "ortografia",
            options: ["ortografia", "cor", "caneta", "mesa"],
            correctAnswer: "ortografia",
            explanation: "A correção ortográfica e a acentuação são critérios de avaliação rigorosos no programa de Português."
          },
          {
            id: "pt-u4-l5-q8",
            type: "matching",
            prompt: "Faça corresponder as menções qualitativas aos níveis correspondentes:",
            pairs: [
              { native: "Nível 5", english: "Excelente / Muito Bom (desempenho exemplar)", left: "Nível 5", right: "Excelente / Muito Bom (desempenho exemplar)" },
              { native: "Nível 4", english: "Bom (domínio consistente da matéria)", left: "Nível 4", right: "Bom (domínio consistente da matéria)" },
              { native: "Nível 3", english: "Suficiente (atinge as aprendizagens essenciais mínimas)", left: "Nível 3", right: "Suficiente (atinge as aprendizagens essenciais mínimas)" },
              { native: "Nível 1–2", english: "Insuficiente (necessita de plano de apoio pedagógico)", left: "Nível 1–2", right: "Insuficiente (necessita de plano de apoio pedagógico)" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 5: Textos Científicos, História e Cidadania (Nível Intermédio)
  // DGE 3.º Ciclo Standard
  // =========================================================================
  {
    id: "pt-unit-5",
    unitId: "pt-unit-5",
    unitNumber: 5,
    level: "Track B: DGE Ensino Básico (Intermédio B1–B2)",
    title: "Unit 5: Textos Científicos, História e Cidadania",
    subtitle: "Textos expositivo-informativos, conectores de causa, hipóteses científicas com condicional e debate sociocultural.",
    icon: "Compass",
    color: "#0284c7",
    lessons: [
      {
        id: "pt-u2-l6",
        title: "Lesson 5.1: O Texto Expositivo-Informativo",
        description: "Leitura e análise de excertos de manuais escolares (Ciências e História de Portugal). Conectores lógicos de causa e consequência (porque, visto que, dado que).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u5-l1-q1",
            type: "multiple_choice",
            prompt: "Qual é o principal objetivo comunicativo de um texto expositivo-informativo num manual escolar de História?",
            options: [
              "Transmitir conhecimentos de forma clara, objetiva e fundamentada em factos documentados",
              "Divertir o leitor com anedotas inventadas",
              "Convencer o leitor a comprar um produto comercial",
              "Descrever emoções poéticas e sentimentais do autor"
            ],
            correctAnswer: "Transmitir conhecimentos de forma clara, objetiva e fundamentada em factos documentados",
            explanation: "O texto expositivo-informativo visa instruir e esclarecer o leitor com rigor conceptual e neutralidade enunciativa."
          },
          {
            id: "pt-u5-l1-q2",
            type: "fill_blank",
            sentence: "D. Afonso Henriques conquistou Lisboa em 1147, ___ contou com o auxílio crucial dos cruzados nórdicos.",
            missingWord: "dado que",
            options: ["dado que", "embora", "portanto", "para que"],
            correctAnswer: "dado que",
            explanation: "'Dado que' é uma locução conjuncional causal equivalente a 'visto que' ou 'porque'."
          },
          {
            id: "pt-u5-l1-q3",
            type: "scramble",
            prompt: "Ordene a explicação histórica sobre a expansão marítima portuguesa:",
            tokens: ["Portugal", "iniciou", "as", "navegações", "devido", "à", "sua", "posição", "geográfica."],
            correctTokens: ["Portugal", "iniciou", "as", "navegações", "devido", "à", "sua", "posição", "geográfica."],
            explanation: "Uso do conector causal 'devido a' para justificar o pioneirismo marítimo nacional."
          },
          {
            id: "pt-u5-l1-q4",
            type: "matching",
            prompt: "Associe os conectores causais e explicativos às respetivas frases de ligação lógica:",
            pairs: [
              { native: "Visto que", english: "Visto que a temperatura subiu, a água evaporou rapidamente.", left: "Visto que", right: "Visto que a temperatura subiu, a água evaporou rapidamente." },
              { native: "Por conseguinte", english: "Houve seca severa; por conseguinte, a colheita diminuiu.", left: "Por conseguinte", right: "Houve seca severa; por conseguinte, a colheita diminuiu." },
              { native: "Já que", english: "Já que terminámos a experiência, vamos limpar o laboratório.", left: "Já que", right: "Já que terminámos a experiência, vamos limpar o laboratório." },
              { native: "Por causa de", english: "O caminho marítimo foi explorado por causa da rota das especiarias.", left: "Por causa de", right: "O caminho marítimo foi explorado por causa da rota das especiarias." }
            ]
          },
          {
            id: "pt-u5-l1-q5",
            type: "multiple_choice",
            prompt: "Em que ano ocorreu a Revolução dos Cravos que restaurou a Democracia em Portugal?",
            options: [
              "25 de abril de 1974",
              "5 de outubro de 1910",
              "1 de dezembro de 1640",
              "10 de junho de 1986"
            ],
            correctAnswer: "25 de abril de 1974",
            explanation: "O 25 de Abril de 1974 assinala a Revolução dos Cravos, que pôs fim a 48 anos de ditadura do Estado Novo e instituiu a democracia constitucional."
          },
          {
            id: "pt-u5-l1-q6",
            type: "audio_listen",
            prompt: "Ouça o resumo histórico e aponte a data fundamental mencionada:",
            audioText: "Em 1290, o Rei D. Dinis fundou o primeiro Estudo Geral português, que viria a dar origem à prestigiada Universidade de Coimbra.",
            options: [
              "A fundação da primeira Universidade portuguesa em 1290 por D. Dinis",
              "A coroação do primeiro rei no castelo de Guimarães",
              "O terramoto que destruiu a Baixa de Lisboa",
              "A entrada de Portugal na União Europeia"
            ],
            correctAnswer: "A fundação da primeira Universidade portuguesa em 1290 por D. Dinis",
            explanation: "O texto refere a fundação do Estudo Geral em 1290 pelo 'Rei Lavrador' D. Dinis."
          },
          {
            id: "pt-u5-l1-q7",
            type: "fill_blank",
            sentence: "As plantas realizam a fotossíntese ___ absorvem a luz solar através da clorofila.",
            missingWord: "porque",
            options: ["porque", "embora", "contudo", "ainda"],
            correctAnswer: "porque",
            explanation: "'Porque' introduz a oração causal que explica o mecanismo da fotossíntese."
          },
          {
            id: "pt-u5-l1-q8",
            type: "matching",
            prompt: "Associe as datas históricas marcantes aos acontecimentos em Portugal:",
            pairs: [
              { native: "1143", english: "Tratado de Zamora e reconhecimento da independência do reino", left: "1143", right: "Tratado de Zamora e reconhecimento da independência do reino" },
              { native: "1498", english: "Vasco da Gama descobre o caminho marítimo para a Índia", left: "1498", right: "Vasco da Gama descobre o caminho marítimo para a Índia" },
              { native: "1755", english: "Grande Terramoto de Lisboa e reconstrução pombalina", left: "1755", right: "Grande Terramoto de Lisboa e reconstrução pombalina" },
              { native: "1986", english: "Adesão de Portugal à CEE (Comunidade Económica Europeia)", left: "1986", right: "Adesão de Portugal à CEE (Comunidade Económica Europeia)" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l7",
        title: "Lesson 5.2: Resumos e Tomada de Notas",
        description: "Transformação de textos extensos de manuais em resumos estruturados por tópicos. Palavras-chave e nominalização.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u5-l2-q1",
            type: "multiple_choice",
            prompt: "Qual das seguintes regras é crucial na elaboração de um bom resumo escolar?",
            options: [
              "Eliminar pormenores redundantes, transcrições e adjetivação excessiva, mantendo a fidedignidade ao pensamento do texto-fonte",
              "Escrever o dobro das palavras do texto original",
              "Substituir todos os factos históricos por opiniões pessoais",
              "Utilizar apenas frases copiadas literalmente entre aspas"
            ],
            correctAnswer: "Eliminar pormenores redundantes, transcrições e adjetivação excessiva, mantendo a fidedignidade ao pensamento do texto-fonte",
            explanation: "O resumo exige capacidade de síntese, supressão de redundâncias e fidelidade conceptual."
          },
          {
            id: "pt-u5-l2-q2",
            type: "fill_blank",
            sentence: "A ___ do verbo 'evaporar' no resumo científico é 'a evaporação'.",
            missingWord: "nominalização",
            options: ["nominalização", "conjugação", "tradução", "inversão"],
            correctAnswer: "nominalização",
            explanation: "A nominalização é a transformação de verbos ou adjetivos em substantivos, recurso típico da síntese textual."
          },
          {
            id: "pt-u5-l2-q3",
            type: "scramble",
            prompt: "Ordene o passo metodológico para tomar notas em aula teórica:",
            tokens: ["Registe", "as", "ideias", "principais", "através", "de", "esquemas", "visuais."],
            correctTokens: ["Registe", "as", "ideias", "principais", "através", "de", "esquemas", "visuais."],
            explanation: "Uso de mapas conceptuais e tópicos sintéticos para otimização da retenção da matéria."
          },
          {
            id: "pt-u5-l2-q4",
            type: "matching",
            prompt: "Ligue os verbos às suas respetivas formas de nominalização em textos expositivos:",
            pairs: [
              { native: "Descobrir", english: "A descoberta", left: "Descobrir", right: "A descoberta" },
              { native: "Poluir", english: "A poluição", left: "Poluir", right: "A poluição" },
              { native: "Construir", english: "A construção", left: "Construir", right: "A construção" },
              { native: "Aquecer", english: "O aquecimento", left: "Aquecer", right: "O aquecimento" }
            ]
          },
          {
            id: "pt-u5-l2-q5",
            type: "multiple_choice",
            prompt: "Como deve proceder ao resumir um capítulo longo de História antes de um teste sumativo?",
            options: [
              "Sublinhar as ideias-chave de cada parágrafo e redigir um texto corrido unindo os tópicos essenciais com articuladores do discurso",
              "Decorar todas as palavras sem compreender o significado",
              "Ler o sumário uma vez no próprio dia do teste",
              "Apagar todas as datas com corretor branco"
            ],
            correctAnswer: "Sublinhar as ideias-chave de cada parágrafo e redigir um texto corrido unindo os tópicos essenciais com articuladores do discurso",
            explanation: "O método de sublinhado seletivo seguido de redação com articuladores garante memorização ativa e estruturada."
          },
          {
            id: "pt-u5-l2-q6",
            type: "audio_listen",
            prompt: "Ouça o professor a ditar os pontos essenciais do resumo e aponte a conclusão:",
            audioText: "Em conclusão das notas de Ciências: a biodiversidade nos ecossistemas fluviais portugueses encontra-se ameaçada pelas espécies invasoras e pela escassez de água.",
            options: [
              "A biodiversidade dos rios está sob ameaça devido a espécies invasoras e seca",
              "Os rios de Portugal não têm qualquer tipo de peixe",
              "A água dos rios aumentou 500% nos últimos meses",
              "Todas as barragens foram completamente desativadas"
            ],
            correctAnswer: "A biodiversidade dos rios está sob ameaça devido a espécies invasoras e seca",
            explanation: "O professor resume o impacto ambiental das espécies exóticas e da crise hídrica nas bacias hidrográficas."
          },
          {
            id: "pt-u5-l2-q7",
            type: "fill_blank",
            sentence: "Num esquema síntese, as setas e marcadores gráficos facilitam a visualização da relação de causa e ___.",
            missingWord: "efeito",
            options: ["efeito", "cor", "palavra", "letra"],
            correctAnswer: "efeito",
            explanation: "A relação de causa e efeito (ou causa-consequência) é o eixo de raciocínio de resumos analíticos."
          },
          {
            id: "pt-u5-l2-q8",
            type: "matching",
            prompt: "Associe as técnicas de estudo aos respetivos benefícios pedagógicos:",
            pairs: [
              { native: "Mapa mental / conceptual", english: "Visualização espacial das conexões entre conceitos", left: "Mapa mental / conceptual", right: "Visualização espacial das conexões entre conceitos" },
              { native: "Flashcards / Cartões de revisão", english: "Memorização ativa de vocabulário, datas e fórmulas", left: "Flashcards / Cartões de revisão", right: "Memorização ativa de vocabulário, datas e fórmulas" },
              { native: "Autoexplicação oral", english: "Verificação da capacidade de explicar a matéria por palavras próprias", left: "Autoexplicação oral", right: "Verificação da capacidade de explicar a matéria por palavras próprias" },
              { native: "Linha do tempo cronológica", english: "Ordenação dos reinados, tratados e batalhas no tempo histórico", left: "Linha do tempo cronológica", right: "Ordenação dos reinados, tratados e batalhas no tempo histórico" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l8",
        title: "Lesson 5.3: Expressão de Hipóteses Científicas",
        description: "Formulação de hipóteses laboratoriais no método científico. Frases condicionais (se + Pretérito Imperfeito do Indicativo / Conjuntivo).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u5-l3-q1",
            type: "multiple_choice",
            prompt: "No método científico escolar, como se define uma 'hipótese'?",
            options: [
              "Uma suposição explicativa provisória que necessita de ser testada e comprovada experimentalmente",
              "Uma certeza absoluta que nunca pode ser questionada",
              "Uma mentira deliberada inventada pelo cientista",
              "O resultado final que consta da enciclopédia"
            ],
            correctAnswer: "Uma suposição explicativa provisória que necessita de ser testada e comprovada experimentalmente",
            explanation: "A hipótese é uma tentativa de resposta lógica a um problema que a experimentação irá validar ou refutar."
          },
          {
            id: "pt-u5-l3-q2",
            type: "fill_blank",
            sentence: "Se aumentássemos a temperatura do reator químico, a velocidade da reação ___ mais rápida.",
            missingWord: "seria",
            options: ["seria", "é", "foi", "será"],
            correctAnswer: "seria",
            explanation: "Correlação condicional: 'Se aumentássemos' (Imperfeito do Conjuntivo) pede 'seria' (Condicional presente)."
          },
          {
            id: "pt-u5-l3-q3",
            type: "scramble",
            prompt: "Ordene a formulação de uma hipótese experimental de biologia:",
            tokens: ["Se", "a", "planta", "não", "receber", "luz,", "ela", "não", "crescerá."],
            correctTokens: ["Se", "a", "planta", "não", "receber", "luz,", "ela", "não", "crescerá."],
            explanation: "Condicional real: 'Se' + Futuro do Conjuntivo ('receber') + Futuro do Indicativo ('não crescerá')."
          },
          {
            id: "pt-u5-l3-q4",
            type: "matching",
            prompt: "Associe os tipos de condição aos respetivos tempos verbais em português:",
            pairs: [
              { native: "Condição real / provável", english: "Se estudares (Futuro Conjuntivo), terás sucesso (Futuro Indicativo).", left: "Condição real / provável", right: "Se estudares (Futuro Conjuntivo), terás sucesso (Futuro Indicativo)." },
              { native: "Condição hipotética / incerta", english: "Se tivéssemos recursos (Imperfeito Conj.), criaríamos o projeto (Condicional).", left: "Condição hipotética / incerta", right: "Se tivéssemos recursos (Imperfeito Conj.), criaríamos o projeto (Condicional)." },
              { native: "Condição irreal no passado", english: "Se tivesses avisado (Mais-que-perfeito), eu teria ido (Condicional composto).", left: "Condição irreal no passado", right: "Se tivesses avisado (Mais-que-perfeito), eu teria ido (Condicional composto)." },
              { native: "Condição habitual no presente", english: "Se chove (Presente Indicativo), a terra fica húmida (Presente Indicativo).", left: "Condição habitual no presente", right: "Se chove (Presente Indicativo), a terra fica húmida (Presente Indicativo)." }
            ]
          },
          {
            id: "pt-u5-l3-q5",
            type: "multiple_choice",
            prompt: "Num relatório de laboratório de Ciências, qual secção descreve passo a passo a forma como o ensaio foi realizado?",
            options: [
              "Procedimento experimental / Metodologia",
              "Agradecimentos aos colegas de carteira",
              "Índice de figuras decorativas",
              "Preço dos reagentes químicos"
            ],
            correctAnswer: "Procedimento experimental / Metodologia",
            explanation: "O procedimento experimental relata a sequência rigorosa de etapas, materiais e variáveis manipuladas."
          },
          {
            id: "pt-u5-l3-q6",
            type: "audio_listen",
            prompt: "Ouça a conclusão do relatório de Físico-Química e identifique a confirmação:",
            audioText: "Os resultados obtidos no ensaio corroboram integralmente a hipótese inicial: a densidade do líquido varia na razão inversa da sua temperatura.",
            options: [
              "Os resultados experimentais confirmaram a hipótese inicial formulada pelos alunos",
              "A experiência correu mal e todos os tubos partiram",
              "Não foi possível medir nenhuma temperatura",
              "A hipótese foi refutada e o líquido congelou de imediato"
            ],
            correctAnswer: "Os resultados experimentais confirmaram a hipótese inicial formulada pelos alunos",
            explanation: "O verbo 'corroborar' significa confirmar ou validar com provas a hipótese previamente avançada."
          },
          {
            id: "pt-u5-l3-q7",
            type: "fill_blank",
            sentence: "Caso a experiência ___ negativa, teremos de reformular a hipótese de partida.",
            missingWord: "seja",
            options: ["seja", "é", "foi", "será"],
            correctAnswer: "seja",
            explanation: "A conjunção 'caso' exige obrigatoriamente o modo Conjuntivo: 'Caso a experiência seja negativa'."
          },
          {
            id: "pt-u5-l3-q8",
            type: "matching",
            prompt: "Ligue as etapas do método científico à sua ordem sequencial:",
            pairs: [
              { native: "1.º Passo", english: "Observação de um fenómeno natural e formulação do problema", left: "1.º Passo", right: "Observação de um fenómeno natural e formulação do problema" },
              { native: "2.º Passo", english: "Formulação de uma hipótese explicativa", left: "2.º Passo", right: "Formulação de uma hipótese explicativa" },
              { native: "3.º Passo", english: "Realização da experiência e recolha de dados quantitativos", left: "3.º Passo", right: "Realização da experiência e recolha de dados quantitativos" },
              { native: "4.º Passo", english: "Análise dos resultados e conclusão / teorização", left: "4.º Passo", right: "Análise dos resultados e conclusão / teorização" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l9",
        title: "Lesson 5.4: O Debate Sociocultural",
        description: "Expressão de opiniões críticas sobre sustentabilidade, alterações climáticas e cidadania europeia. Presente do Conjuntivo de apreciação e dúvida.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u5-l4-q1",
            type: "multiple_choice",
            prompt: "Qual expressão introduz uma opinião pessoal sustentada com civilidade num debate de turma?",
            options: [
              "Do meu ponto de vista, considero que devemos apostar nas energias renováveis...",
              "Cala-te que tu não sabes nada!",
              "A tua opinião não interessa para o tema.",
              "Vou embora porque não quero ouvir ninguém."
            ],
            correctAnswer: "Do meu ponto de vista, considero que devemos apostar nas energias renováveis...",
            explanation: "No debate democrático escolar, valoriza-se o uso de marcadores de perspetiva ('Do meu ponto de vista', 'Na minha perspetiva')."
          },
          {
            id: "pt-u5-l4-q2",
            type: "fill_blank",
            sentence: "Duvido que a meta de descarbonização ___ atingida sem o compromisso de toda a sociedade.",
            missingWord: "seja",
            options: ["seja", "é", "foi", "será"],
            correctAnswer: "seja",
            explanation: "O verbo 'duvidar' exprime incerteza e rege orações subordinadas no Conjuntivo: 'Duvido que (...) seja atingida'."
          },
          {
            id: "pt-u5-l4-q3",
            type: "scramble",
            prompt: "Ordene a argumentação sobre cidadania ecológica:",
            tokens: ["Acho", "bem", "que", "a", "escola", "promova", "a", "separação", "de", "resíduos."],
            correctTokens: ["Acho", "bem", "que", "a", "escola", "promova", "a", "separação", "de", "resíduos."],
            explanation: "'Acho bem que' é uma expressão de valor moral positivo que exige o Presente do Conjuntivo ('promova')."
          },
          {
            id: "pt-u5-l4-q4",
            type: "matching",
            prompt: "Associe os verbos de apreciação aos modos verbais correspondentes na oração subordinada:",
            pairs: [
              { native: "Penso que", english: "Modo Indicativo de certeza (Penso que temos razão)", left: "Penso que", right: "Modo Indicativo de certeza (Penso que temos razão)" },
              { native: "Não creio que", english: "Modo Conjuntivo de dúvida (Não creio que seja suficiente)", left: "Não creio que", right: "Modo Conjuntivo de dúvida (Não creio que seja suficiente)" },
              { native: "É urgente que", english: "Modo Conjuntivo de necessidade (É urgente que atuemos)", left: "É urgente que", right: "Modo Conjuntivo de necessidade (É urgente que atuemos)" },
              { native: "É evidente que", english: "Modo Indicativo de certeza factual (É evidente que o clima mudou)", left: "É evidente que", right: "Modo Indicativo de certeza factual (É evidente que o clima mudou)" }
            ]
          },
          {
            id: "pt-u5-l4-q5",
            type: "multiple_choice",
            prompt: "Num debate com regras parlamentares, como deve um interveniente refutar um argumento do colega sem agressividade?",
            options: [
              "Reconhecer a validade parcial da ideia do colega e contrapor dados estatísticos ou perspetivas alternativas ('Compreendo o seu ponto, contudo...')",
              "Interromper o colega aos berros e não o deixar terminar",
              "Atacar a vida pessoal do orador",
              "Rir-se de forma sarcástica durante a exposição do outro"
            ],
            correctAnswer: "Reconhecer a validade parcial da ideia do colega e contrapor dados estatísticos ou perspetivas alternativas ('Compreendo o seu ponto, contudo...')",
            explanation: "A contra-argumentação civilizada utiliza concessões corteses ('Compreendo, porém...') sustentadas em factos."
          },
          {
            id: "pt-u5-l4-q6",
            type: "audio_listen",
            prompt: "Ouça a intervenção da aluna delegada no Clube Europeu da escola:",
            audioText: "É fundamental que os jovens portugueses exerçam o seu direito cívico de voto nas eleições do Parlamento Europeu para moldar o futuro verde e tecnológico da União.",
            options: [
              "A importância da participação dos jovens e do exercício do voto democrático na União Europeia",
              "Um apelo para que os jovens deixem de estudar línguas",
              "Uma queixa sobre o preço das viagens de comboio em Portugal",
              "A proposta de encerrar os clubes escolares"
            ],
            correctAnswer: "A importância da participação dos jovens e do exercício do voto democrático na União Europeia",
            explanation: "A oradora apela ao envolvimento cívico juvenil e à participação eleitoral no quadro das instituições europeias."
          },
          {
            id: "pt-u5-l4-q7",
            type: "fill_blank",
            sentence: "Embora ___ opiniões divergentes no debate, o respeito mútuo prevaleceu entre os alunos.",
            missingWord: "existissem",
            options: ["existissem", "existem", "existiam", "existirão"],
            correctAnswer: "existissem",
            explanation: "'Embora' seguido de oração subordinada concessiva no passado exige o Pretérito Imperfeito do Conjuntivo ('existissem')."
          },
          {
            id: "pt-u5-l4-q8",
            type: "matching",
            prompt: "Associe os articuladores de contraste aos respetivos valores discursivos:",
            pairs: [
              { native: "Contudo / No entanto", english: "Oposição forte entre duas ideias no mesmo plano", left: "Contudo / No entanto", right: "Oposição forte entre duas ideias no mesmo plano" },
              { native: "Por um lado... por outro lado", english: "Ponderação comparativa de duas perspetivas opostas", left: "Por um lado... por outro lado", right: "Ponderação comparativa de duas perspetivas opostas" },
              { native: "Apesar de / Não obstante", english: "Relação de concessão a um facto incontornável", left: "Apesar de / Não obstante", right: "Relação de concessão a um facto incontornável" },
              { native: "Em contrapartida", english: "Apresentação de uma contrapartida ou benefício compensatório", left: "Em contrapartida", right: "Apresentação de uma contrapartida ou benefício compensatório" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l10",
        title: "Lesson 5.5: Teste Temático Escrito",
        description: "Produção de um pequeno ensaio analítico e expositivo avaliando um marco histórico ou ambiental contemporâneo.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "pt-u5-l5-q1",
            type: "multiple_choice",
            prompt: "Qual é a estrutura canónica tripartida exigida para uma dissertação ou ensaio expositivo no 3.º Ciclo em Portugal?",
            options: [
              "Introdução (apresentação do tema/tese), Desenvolvimento (argumentação e exemplos) e Conclusão (síntese e balanço)",
              "Apenas um longo parágrafo sem pontuação nem quebras",
              "Uma lista de perguntas sem respostas",
              "Cópia de artigos de jornal sem comentários"
            ],
            correctAnswer: "Introdução (apresentação do tema/tese), Desenvolvimento (argumentação e exemplos) e Conclusão (síntese e balanço)",
            explanation: "A estrutura clássica de introdução, desenvolvimento e conclusão é o modelo obrigatório das matrizes do IAVE e DGE."
          },
          {
            id: "pt-u5-l5-q2",
            type: "fill_blank",
            sentence: "Na introdução do ensaio, o aluno deve formular com clareza a ___ que irá defender com argumentos ao longo do texto.",
            missingWord: "tese",
            options: ["tese", "letra", "dúvida", "piada"],
            correctAnswer: "tese",
            explanation: "A tese é a proposição ou ponto de vista fundamental que norteia todo o desenvolvimento argumentativo."
          },
          {
            id: "pt-u5-l5-q3",
            type: "scramble",
            prompt: "Ordene a frase de transição para a conclusão analítica:",
            tokens: ["Em", "suma,", "a", "transição", "energética", "é", "um", "dever", "geracional."],
            correctTokens: ["Em", "suma,", "a", "transição", "energética", "é", "um", "dever", "geracional."],
            explanation: "'Em suma' é um articulador conclusivo de excelência para sintetizar ensaios temáticos."
          },
          {
            id: "pt-u5-l5-q4",
            type: "matching",
            prompt: "Associe as funções dos parágrafos à estrutura do ensaio temático:",
            pairs: [
              { native: "Parágrafo 1 (Introdução)", english: "Contextualização histórica e anúncio da tese", left: "Parágrafo 1 (Introdução)", right: "Contextualização histórica e anúncio da tese" },
              { native: "Parágrafo 2 (Argumento 1)", english: "Apresentação da causa ambiental e dados científicos", left: "Parágrafo 2 (Argumento 1)", right: "Apresentação da causa ambiental e dados científicos" },
              { native: "Parágrafo 3 (Argumento 2)", english: "Reflexão sobre as consequências sociais e económicas", left: "Parágrafo 3 (Argumento 2)", right: "Reflexão sobre as consequências sociais e económicas" },
              { native: "Parágrafo 4 (Conclusão)", english: "Recapitulação crítica e perspetiva de futuro", left: "Parágrafo 4 (Conclusão)", right: "Recapitulação crítica e perspetiva de futuro" }
            ]
          },
          {
            id: "pt-u5-l5-q5",
            type: "multiple_choice",
            prompt: "Para enriquecer o estilo ensaístico num teste formal, o que se deve evitar rigorosamente?",
            options: [
              "Gírias populares, repetições de vocabulário básico ('coisa', 'fazer') e abreviaturas de mensagens digitais ('pq', 'tbm')",
              "Utilizar pontuação correta com vírgulas e pontos finais",
              "Parágrafos organizados com avanço inicial",
              "Sinónimos eruditos e vocabulário técnico"
            ],
            correctAnswer: "Gírias populares, repetições de vocabulário básico ('coisa', 'fazer') e abreviaturas de mensagens digitais ('pq', 'tbm')",
            explanation: "O registo culto formal sanciona penalizações pesadas pelo recurso a linguagem coloquial ou calão das redes sociais."
          },
          {
            id: "pt-u5-l5-q6",
            type: "audio_listen",
            prompt: "Ouça as instruções de cotação transmitidas pelo júri examinador:",
            audioText: "Atenção aos critérios de classificação do IAVE: a extensão do texto deve situar-se entre cento e quarenta e duzentas palavras. Desvios aos limites de palavras implicam penalizações na nota global.",
            options: [
              "O texto deve respeitar os limites de 140 a 200 palavras para não sofrer penalização",
              "Os alunos devem escrever pelo menos duas mil páginas",
              "Qualquer número de palavras é aceite sem penalização",
              "Não é permitida a consulta do rascunho"
            ],
            correctAnswer: "O texto deve respeitar os limites de 140 a 200 palavras para não sofrer penalização",
            explanation: "As matrizes de exames do ensino português exigem o cumprimento rigoroso dos limites mínimo e máximo de palavras estipulados."
          },
          {
            id: "pt-u5-l5-q7",
            type: "fill_blank",
            sentence: "O aluno utilizou ___ de citação entre aspas para integrar a frase célebre do historiador no seu texto.",
            missingWord: "marcas",
            options: ["marcas", "cores", "linhas", "pontos"],
            correctAnswer: "marcas",
            explanation: "As aspas constituem marcas gráficas de citação que respeitam a integridade da voz alheia."
          },
          {
            id: "pt-u5-l5-q8",
            type: "matching",
            prompt: "Ligue os conectores discursivos à sua função na redação do ensaio:",
            pairs: [
              { native: "Primeiramente / Em primeiro lugar", english: "Ordenação do primeiro argumento de peso", left: "Primeiramente / Em primeiro lugar", right: "Ordenação do primeiro argumento de peso" },
              { native: "Além disso / Acresce que", english: "Adição cumulativa de um novo dado analítico", left: "Além disso / Acresce que", right: "Adição cumulativa de um novo dado analítico" },
              { native: "Por conseguinte / Deste modo", english: "Dedução lógica de uma consequência necessária", left: "Por conseguinte / Deste modo", right: "Dedução lógica de uma consequência necessária" },
              { native: "Em conclusão / Por último", english: "Remate final e fecho do raciocínio global", left: "Em conclusão / Por último", right: "Remate final e fecho do raciocínio global" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 6: Literatura Portuguesa e Ensaio Crítico (Nível Avançado)
  // DGE Ensino Secundário Standard
  // =========================================================================
  {
    id: "pt-unit-6",
    unitId: "pt-unit-6",
    unitNumber: 6,
    level: "Track B: DGE Ensino Secundário (Avançado C1–C2)",
    title: "Unit 6: Literatura Portuguesa e Ensaio Crítico",
    subtitle: "A Épica Camoniana (Os Lusíadas), Fernando Pessoa e heterónimos, Saramago, Sophia, mesóclise e ensaio para o Exame Nacional.",
    icon: "BookOpen",
    color: "#dc2626",
    lessons: [
      {
        id: "pt-u2-l11",
        title: "Lesson 6.1: A Épica Camoniana",
        description: "Decodificação textual de estrofes de 'Os Lusíadas' de Luís de Camões. Oitava rima, inversões sintáticas (hipérbato) e mitologia clássica.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u6-l1-q1",
            type: "multiple_choice",
            prompt: "Qual é a estrutura estrófica e métrica imutável de 'Os Lusíadas' (1572) de Luís Vaz de Camões?",
            options: [
              "Estrofes de oito versos decassilábicos heroicos (oitava rima) com esquema rimático cruzado e emparelhado (ABABABCC)",
              "Verso livre contemporâneo sem métrica nem rima",
              "Quadras populares em redondilha maior",
              "Sonetos alexandrinos de catorze versos"
            ],
            correctAnswer: "Estrofes de oito versos decassilábicos heroicos (oitava rima) com esquema rimático cruzado e emparelhado (ABABABCC)",
            explanation: "A epopeia renascentista camoniana é integralmente composta em oitavas rimas decassilábicas (1102 estrofes divididas em 10 cantos)."
          },
          {
            id: "pt-u6-l1-q2",
            type: "fill_blank",
            sentence: "As armas e os barões assinalados, que da ocidental praia ___...",
            missingWord: "lusitana",
            options: ["lusitana", "romana", "grega", "hispânica"],
            correctAnswer: "lusitana",
            explanation: "Primeiro verso imortal do Canto I de 'Os Lusíadas': 'As armas e os barões assinalados, / Que da ocidental praia lusitana...'."
          },
          {
            id: "pt-u6-l1-q3",
            type: "scramble",
            prompt: "Ordene o célebre hipérbato camoniano sobre o herói coletivo português:",
            tokens: ["Cessem", "do", "sábio", "Grego", "e", "do", "Troiano", "as", "navegações."],
            correctTokens: ["Cessem", "do", "sábio", "Grego", "e", "do", "Troiano", "as", "navegações."],
            explanation: "Camões proclama a superioridade dos navegadores portugueses face aos heróis homéricos Ulisses e Eneias."
          },
          {
            id: "pt-u6-l1-q4",
            type: "matching",
            prompt: "Associe os episódios emblemáticos de 'Os Lusíadas' ao seu significado simbólico no poema:",
            pairs: [
              { native: "O Gigante Adamastor (Canto V)", english: "A superação do Cabo das Tormentas e dos limites do desconhecido", left: "O Gigante Adamastor (Canto V)", right: "A superação do Cabo das Tormentas e dos limites do desconhecido" },
              { native: "Inês de Castro (Canto III)", english: "O lirismo trágico e o amor que depois de ser morta foi rainha", left: "Inês de Castro (Canto III)", right: "O lirismo trágico e o amor que depois de ser morta foi rainha" },
              { native: "O Velho do Restelo (Canto IV)", english: "A voz profética e prudente contra a desmedida cobiça imperial", left: "O Velho do Restelo (Canto IV)", right: "A voz profética e prudente contra a desmedida cobiça imperial" },
              { native: "A Ilha dos Amores (Canto IX)", english: "A apoteose e divinização mitológica dos navegadores heróis", left: "A Ilha dos Amores (Canto IX)", right: "A apoteose e divinização mitológica dos navegadores heróis" }
            ]
          },
          {
            id: "pt-u6-l1-q5",
            type: "multiple_choice",
            prompt: "O que é a figura de estilo do 'hipérbato', tão frequente na sintaxe camoniana?",
            options: [
              "A inversão deliberada da ordem direta e natural das palavras na frase para fins poéticos e métricos",
              "A repetição insistente da mesma vogal no verso",
              "A comparação explícita com a conjunção 'como'",
              "O exagero dramático da realidade"
            ],
            correctAnswer: "A inversão deliberada da ordem direta e natural das palavras na frase para fins poéticos e métricos",
            explanation: "O hipérbato emula a sintaxe latina clássica, conferindo majestade épica e ritmo estrófico."
          },
          {
            id: "pt-u6-l1-q6",
            type: "audio_listen",
            prompt: "Ouça a declamação das palavras do Velho do Restelo e identifique o seu aviso:",
            audioText: "Ó glória de mandar, ó vã cobiça desta vaidade a quem chamamos Fama! A que novos desastres determinas de levar estes reinos e esta gente?",
            options: [
              "Uma denúncia contundente da ambição imperial desmedida que despovoa o reino de Portugal",
              "Um elogio sem reservas à conquista de territórios tropicais",
              "Uma ordem militar para disparar os canhões das caravelas",
              "Um pedido de orações para a chuva chegar aos campos"
            ],
            correctAnswer: "Uma denúncia contundente da ambição imperial desmedida que despovoa o reino de Portugal",
            explanation: "O Velho do Restelo encarna a voz crítica da prudência perante o sacrifício e perda de vidas na expansão ultra-marina."
          },
          {
            id: "pt-u6-l1-q7",
            type: "fill_blank",
            sentence: "No plano mitológico de Os Lusíadas, a deusa romana ___ protege os navegadores portugueses contra as ciladas de Baco.",
            missingWord: "Vénus",
            options: ["Vénus", "Minerva", "Juno", "Diana"],
            correctAnswer: "Vénus",
            explanation: "Vénus defende os portugueses no Consílio dos Deuses do Olimpo pela sua semelhança com a valentia e língua dos romanos."
          },
          {
            id: "pt-u6-l1-q8",
            type: "matching",
            prompt: "Ligue os quatro planos narrativos estruturais da epopeia de Camões:",
            pairs: [
              { native: "Plano da Viagem", english: "A travessia marítima de Vasco da Gama de Lisboa a Calecute", left: "Plano da Viagem", right: "A travessia marítima de Vasco da Gama de Lisboa a Calecute" },
              { native: "Plano da História de Portugal", english: "As narrativas dos reis e batalhas contadas ao Rei de Melinde", left: "Plano da História de Portugal", right: "As narrativas dos reis e batalhas contadas ao Rei de Melinde" },
              { native: "Plano dos Deuses / Mitológico", english: "O conflito olímpico entre Baco (opositor) e Vénus e Marte (protetores)", left: "Plano dos Deuses / Mitológico", right: "O conflito olímpico entre Baco (opositor) e Vénus e Marte (protetores)" },
              { native: "Plano do Poeta / Considerações", english: "As lamentações de Camões no final dos cantos sobre a pátria e a ingratidão", left: "Plano do Poeta / Considerações", right: "As lamentações de Camões no final dos cantos sobre a pátria e a ingratidão" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l12",
        title: "Lesson 6.2: A Lírica e o Modernismo",
        description: "Fernando Pessoa ortónimo e a heteronímia (Álvaro de Campos, Alberto Caeiro, Ricardo Reis). O Infinitivo Pessoal e a dor de pensar.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u6-l2-q1",
            type: "multiple_choice",
            prompt: "Qual é o traço genial e ímpar da criação poética de Fernando Pessoa no Modernismo universal?",
            options: [
              "A heteronímia: a criação de poetas fictícios com biografias, filosofias, estilos literários e personalidades autónomas e completas",
              "A publicação exclusiva de poemas anónimos em jornais",
              "Ter escrito apenas em verso rimado infantil",
              "A recusa de qualquer reflexão filosófica"
            ],
            correctAnswer: "A heteronímia: a criação de poetas fictícios com biografias, filosofias, estilos literários e personalidades autónomas e completas",
            explanation: "Ao contrário de meros pseudónimos, os heterónimos pessoanos possuem identidade psicológica, estilo e mundividência filosófica próprias."
          },
          {
            id: "pt-u6-l2-q2",
            type: "fill_blank",
            sentence: "O poeta é um ___. Finge tão completamente que chega a fingir que é dor a dor que deveras sente.",
            missingWord: "fingidor",
            options: ["fingidor", "sonhador", "lutador", "viajante"],
            correctAnswer: "fingidor",
            explanation: "Célebre estrofe de 'Autopsicografia' de Fernando Pessoa ortónimo sobre a intelectualização das emoções na criação artística."
          },
          {
            id: "pt-u6-l2-q3",
            type: "scramble",
            prompt: "Ordene a famosa máxima bucólica e sensualista do heterónimo Alberto Caeiro:",
            tokens: ["O", "meu", "olhar", "é", "nítido", "como", "um", "girassol."],
            correctTokens: ["O", "meu", "olhar", "é", "nítido", "como", "um", "girassol."],
            explanation: "Alberto Caeiro, o mestre guardador de rebanhos, privilegia o ver e a comunhão imediata das sensações sem dor de pensar."
          },
          {
            id: "pt-u6-l2-q4",
            type: "matching",
            prompt: "Associe os heterónimos de Fernando Pessoa às suas matrizes estéticas nucleares:",
            pairs: [
              { native: "Alberto Caeiro", english: "Mestre da Natureza, poeta das sensações puras ('O Guardador de Rebanhos')", left: "Alberto Caeiro", right: "Mestre da Natureza, poeta das sensações puras ('O Guardador de Rebanhos')" },
              { native: "Ricardo Reis", english: "Neoclássico, latinista estóico e epicurista ('Carpe diem')", left: "Ricardo Reis", right: "Neoclássico, latinista estóico e epicurista ('Carpe diem')" },
              { native: "Álvaro de Campos", english: "Engenheiro naval, futurista, cantor da máquina e melancolia decadente", left: "Álvaro de Campos", right: "Engenheiro naval, futurista, cantor da máquina e melancolia decadente" },
              { native: "Bernardo Soares", english: "Ajudante de guarda-livros na Baixa de Lisboa, autor do 'Livro do Desassossego'", left: "Bernardo Soares", right: "Ajudante de guarda-livros na Baixa de Lisboa, autor do 'Livro do Desassossego'" }
            ]
          },
          {
            id: "pt-u6-l2-q5",
            type: "multiple_choice",
            prompt: "O que é o 'Infinitivo Pessoal' (ou infinitivo flexionado), uma das grandes especificidades sintáticas da língua portuguesa?",
            options: [
              "Uma forma infinita do verbo que admite desinências pessoais de número e pessoa (ex: para nós fazermos, por eles estarem)",
              "Um verbo que só se usa no singular",
              "Uma conjugação herdada do árabe medieval",
              "Um tempo verbal que só existe no poema 'Mensagem'"
            ],
            correctAnswer: "Uma forma infinita do verbo que admite desinências pessoais de número e pessoa (ex: para nós fazermos, por eles estarem)",
            explanation: "O infinitivo pessoal permite identificar o sujeito em orações reduzidas e dependentes com elegância e clareza sintática."
          },
          {
            id: "pt-u6-l2-q6",
            type: "audio_listen",
            prompt: "Ouça o início do magistral poema 'Tabacaria' de Álvaro de Campos:",
            audioText: "Não sou nada. Nunca serei nada. Não posso querer ser nada. À parte isso, tenho em mim todos os sonhos do mundo.",
            options: [
              "A confissão existencial de desencanto e desolação ontológica aliada ao infinito dos sonhos humanos",
              "Um elogio ao comércio de tabaco na rua dos Douradores",
              "Um manifesto político a favor da revolução industrial",
              "Uma carta formal ao presidente da câmara de Lisboa"
            ],
            correctAnswer: "A confissão existencial de desencanto e desolação ontológica aliada ao infinito dos sonhos humanos",
            explanation: "'Tabacaria' exprime o paradoxo modernista entre o nada exterior e a imensidão imaginária interior."
          },
          {
            id: "pt-u6-l2-q7",
            type: "fill_blank",
            sentence: "O livro 'Mensagem' (1934) é a única obra poética em língua portuguesa que Fernando Pessoa publicou em ___ durante a sua vida.",
            missingWord: "vida",
            options: ["vida", "inglês", "prosa", "teatro"],
            correctAnswer: "vida",
            explanation: "'Mensagem' foi o único livro em português dado à estampa pelo próprio autor antes da sua morte prematura em 1935."
          },
          {
            id: "pt-u6-l2-q8",
            type: "matching",
            prompt: "Associe os versos imortais aos respetivos autores e heterónimos:",
            pairs: [
              { native: "Tudo vale a pena se a alma não é pequena.", english: "Fernando Pessoa (Mensagem)", left: "Tudo vale a pena se a alma não é pequena.", right: "Fernando Pessoa (Mensagem)" },
              { native: "Para ser grande, sê inteiro: nada teu exagera ou exclui.", english: "Ricardo Reis", left: "Para ser grande, sê inteiro: nada teu exagera ou exclui.", right: "Ricardo Reis" },
              { native: "Sentir tudo de todas as maneiras!", english: "Álvaro de Campos (Passagem das Horas)", left: "Sentir tudo de todas as maneiras!", right: "Álvaro de Campos (Passagem das Horas)" },
              { native: "O Tejo é mais belo que o rio que corre pela minha aldeia...", english: "Alberto Caeiro", left: "O Tejo é mais belo que o rio que corre pela minha aldeia...", right: "Alberto Caeiro" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l13",
        title: "Lesson 6.3: A Prosa Contemporânea",
        description: "Análise estilística de José Saramago (Memorial do Convento) e Sophia de Mello Breyner Andresen. Pontuação saramaguiana e voz do narrador.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u6-l3-q1",
            type: "multiple_choice",
            prompt: "Qual inovação formal revolucionária na pontuação caracteriza os romances de José Saramago (Prémio Nobel da Literatura de 1998)?",
            options: [
              "A supressão dos travessões de diálogo, aspas e pontos de interrogação, assinalando a mudança de falas apenas por maiúsculas a seguir a vírgulas",
              "A ausência total de vogais nos nomes das personagens",
              "A utilização exclusiva de versos rimados nas descrições",
              "Escrever todo o texto em caixa alta sem espaços"
            ],
            correctAnswer: "A supressão dos travessões de diálogo, aspas e pontos de interrogação, assinalando a mudança de falas apenas por maiúsculas a seguir a vírgulas",
            explanation: "O estilo saramaguiano reproduz o fluxo da oralidade humana através da cadência de vírgulas e pontos finais."
          },
          {
            id: "pt-u6-l3-q2",
            type: "fill_blank",
            sentence: "No romance 'Memorial do Convento', a passarola voadora foi concebida pelo Padre Bartolomeu Lourenço de ___ com o auxílio de Baltasar e Blimunda.",
            missingWord: "Gusmão",
            options: ["Gusmão", "Herculano", "Queirós", "Pessoa"],
            correctAnswer: "Gusmão",
            explanation: "O Padre Bartolomeu de Gusmão inventa a máquina voadora sustentada pelo éter recolhido pelas vontades humanas que Blimunda enxerga."
          },
          {
            id: "pt-u6-l3-q3",
            type: "scramble",
            prompt: "Ordene a reflexão poética de Sophia de Mello Breyner sobre a justiça e a liberdade:",
            tokens: ["A", "poesia", "é", "uma", "relação", "profunda", "com", "a", "verdade."],
            correctTokens: ["A", "poesia", "é", "uma", "relação", "profunda", "com", "a", "verdade."],
            explanation: "Em Sophia, a palavra poética é um ato de inteireza moral, limpidez e denúncia da opressão política."
          },
          {
            id: "pt-u6-l3-q4",
            type: "matching",
            prompt: "Associe as personagens icónicas de 'Memorial do Convento' aos seus papéis narrativos:",
            pairs: [
              { native: "Baltasar Sete-Sóis", english: "Soldado maneta da Guerra da Sucessão e trabalhador da passarola", left: "Baltasar Sete-Sóis", right: "Soldado maneta da Guerra da Sucessão e trabalhador da passarola" },
              { native: "Blimunda Sete-Luas", english: "Mulher visionária dotada do poder de ver por dentro das pessoas em jejum", left: "Blimunda Sete-Luas", right: "Mulher visionária dotada do poder de ver por dentro das pessoas em jejum" },
              { native: "D. João V", english: "Monarca absolutista que manda erguer o Convento de Mafra para cumprir promessa", left: "D. João V", right: "Monarca absolutista que manda erguer o Convento de Mafra para cumprir promessa" },
              { native: "Domenico Scarlatti", english: "Músico italiano que cura as dores com o cravo no palácio e no monte", left: "Domenico Scarlatti", right: "Músico italiano que cura as dores com o cravo no palácio e no monte" }
            ]
          },
          {
            id: "pt-u6-l3-q5",
            type: "multiple_choice",
            prompt: "Qual tema transversal domina a lírica e a prosa de Sophia de Mello Breyner Andresen?",
            options: [
              "O mar, a luz mediterrânica, a Grécia clássica e o combate cívico contra a injustiça",
              "A tecnologia futurista e os robôs",
              "Histórias policiais de detetives em Nova Iorque",
              "Tratados científicos de astronomia quântica"
            ],
            correctAnswer: "O mar, a luz mediterrânica, a Grécia clássica e o combate cívico contra a injustiça",
            explanation: "Sophia uniu a limpidez sensorial da paisagem marítima à intransigência ética pela dignidade humana."
          },
          {
            id: "pt-u6-l3-q6",
            type: "audio_listen",
            prompt: "Ouça o excerto da narrativa de Saramago sobre os trabalhadores da pedra de Mafra:",
            audioText: "Mais de cinquenta mil homens passaram por aqui, arrastando pedras colossais com as próprias mãos e o suor do seu sangue para que a corte tivesse o seu palácio e a sua basílica.",
            options: [
              "A denúncia do sofrimento e exploração desumana do povo anónimo que ergueu o monumento de Mafra",
              "O elogio à facilidade e conforto dos operários da construção",
              "A celebração das riquezas inesgotáveis da monarquia",
              "Um relato sobre a inauguração de uma autoestrada moderna"
            ],
            correctAnswer: "A denúncia do sofrimento e exploração desumana do povo anónimo que ergueu o monumento de Mafra",
            explanation: "Saramago inverte a história oficial para resgatar a dignidade dos milhares de operários anónimos esmagados pelo fausto régio."
          },
          {
            id: "pt-u6-l3-q7",
            type: "fill_blank",
            sentence: "José Saramago foi o primeiro escritor de língua portuguesa a ser galardoado com o Prémio ___ de Literatura.",
            missingWord: "Nobel",
            options: ["Nobel", "Camões", "Cervantes", "Goncourt"],
            correctAnswer: "Nobel",
            explanation: "Em 1998, a Academia Sueca atribuiu a Saramago o Prémio Nobel da Literatura pela universalidade da sua prosa."
          },
          {
            id: "pt-u6-l3-q8",
            type: "matching",
            prompt: "Associe as obras marcantes da literatura portuguesa moderna aos respetivos autores:",
            pairs: [
              { native: "O Ano da Morte de Ricardo Reis", english: "José Saramago", left: "O Ano da Morte de Ricardo Reis", right: "José Saramago" },
              { native: "Contos Exemplares / O Cavaleiro da Dinamarca", english: "Sophia de Mello Breyner Andresen", left: "Contos Exemplares / O Cavaleiro da Dinamarca", right: "Sophia de Mello Breyner Andresen" },
              { native: "Os Maias / O Primo Basílio", english: "Eça de Queirós", left: "Os Maias / O Primo Basílio", right: "Eça de Queirós" },
              { native: "Amor de Perdição", english: "Camilo Castelo Branco", left: "Amor de Perdição", right: "Camilo Castelo Branco" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l14",
        title: "Lesson 6.4: O Ensaio de Opinião Académico",
        description: "Redação formal de ensaios de opinião para o Exame Nacional de Português (12.º ano). Mesóclise (dar-se-á, dir-se-ia) e citação crítica.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "pt-u6-l4-q1",
            type: "multiple_choice",
            prompt: "O que é a 'Mesóclise' na colocação pronominal do português europeu culto e quando se aplica?",
            options: [
              "A inserção do pronome clítico no interior da forma verbal no Futuro do Indicativo ou no Condicional sem atração prévia (ex: far-se-á, dir-se-ia)",
              "A colocação do pronome no início absoluto da frase",
              "A exclusão de todos os pronomes nas orações relativas",
              "Uma regra exclusiva do calão do Porto"
            ],
            correctAnswer: "A inserção do pronome clítico no interior da forma verbal no Futuro do Indicativo ou no Condicional sem atração prévia (ex: far-se-á, dir-se-ia)",
            explanation: "A mesóclise (partição do infinitivo da terminação) é um refinamento distintivo do português culto: dar-lhe-ei, explicar-se-á, lembrar-nos-íamos."
          },
          {
            id: "pt-u6-l4-q2",
            type: "fill_blank",
            sentence: "Se a proposta for aprovada, realizar-___-á o congresso internacional em Coimbra no próximo ano.",
            missingWord: "se",
            options: ["se", "lhe", "me", "nos"],
            correctAnswer: "se",
            explanation: "Futuro do indicativo com pronome passivo/reflexo em mesóclise: 'realizar-se-á'."
          },
          {
            id: "pt-u6-l4-q3",
            type: "scramble",
            prompt: "Ordene a frase em mesóclise no condicional culto:",
            tokens: ["Dir-se-ia", "que", "o", "tempo", "parou", "naquele", "mosteiro."],
            correctTokens: ["Dir-se-ia", "que", "o", "tempo", "parou", "naquele", "mosteiro."],
            explanation: "Uso culto da mesóclise no condicional: 'Dir-se-ia que...' (One would say that...)."
          },
          {
            id: "pt-u6-l4-q4",
            type: "matching",
            prompt: "Associe as frases em mesóclise às respetivas equivalências semânticas:",
            pairs: [
              { native: "Entregar-te-ei os documentos.", english: "Eu vou entregar-te os documentos no futuro.", left: "Entregar-te-ei os documentos.", right: "Eu vou entregar-te os documentos no futuro." },
              { native: "Falar-lhe-íamos com agrado.", english: "Nós falaríamos com ele com satisfação caso fosse possível.", left: "Falar-lhe-íamos com agrado.", right: "Nós falaríamos com ele com satisfação caso fosse possível." },
              { native: "Pedir-se-á mais tempo.", english: "Será solicitado mais prazo à comissão examinadora.", left: "Pedir-se-á mais tempo.", right: "Será solicitado mais prazo à comissão examinadora." },
              { native: "Ver-nos-emos em breve.", english: "Havemos de nos encontrar novamente muito em breve.", left: "Ver-nos-emos em breve.", right: "Havemos de nos encontrar novamente muito em breve." }
            ]
          },
          {
            id: "pt-u6-l4-q5",
            type: "multiple_choice",
            prompt: "Quando ocorre próclise (pronome antes do verbo) e a mesóclise é expressamente proibida em português?",
            options: [
              "Quando existem palavras atrativas antes do verbo (palavras negativas como 'não', advérbios como 'já', pronomes relativos como 'que' ou pronomes indefinidos)",
              "Apenas ao fim de semana",
              "Sempre que o sujeito for uma pessoa conhecida",
              "Não há casos em que a mesóclise seja proibida"
            ],
            correctAnswer: "Quando existem palavras atrativas antes do verbo (palavras negativas como 'não', advérbios como 'já', pronomes relativos como 'que' ou pronomes indefinidos)",
            explanation: "A presença de termos atrativos suprime a mesóclise e exige próclise: 'Não se fará' (e nunca 'Não far-se-á')."
          },
          {
            id: "pt-u6-l4-q6",
            type: "audio_listen",
            prompt: "Ouça a formulação acadêmica e aponte a tese defendida pelo ensaísta:",
            audioText: "Considerar-se-á legítimo concluir que a literatura constitui um espelho crítico e insubstituível das contradições éticas de qualquer época civilizacional.",
            options: [
              "A literatura é um instrumento crítico essencial para compreender os dilemas éticos da humanidade",
              "Os livros de literatura devem ser eliminados dos exames nacionais",
              "A ciência substitui inteiramente a necessidade de reflexão filosófica",
              "O ensaísta recusa qualquer valor à criação artística"
            ],
            correctAnswer: "A literatura é um instrumento crítico essencial para compreender os dilemas éticos da humanidade",
            explanation: "A frase sustenta o papel fundamental da literatura como testemunho e reflexão sobre a condição ética humana."
          },
          {
            id: "pt-u6-l4-q7",
            type: "fill_blank",
            sentence: "No Exame Nacional de Português (código 639), o Grupo III avalia a produção de um texto de opinião com extensão entre duzentas e ___ palavras.",
            missingWord: "trezentas",
            options: ["trezentas", "cem", "mil", "cinquenta"],
            correctAnswer: "trezentas",
            explanation: "A matriz oficial do IAVE para o Exame Nacional de 12.º ano prescreve entre 200 e 300 palavras no ensaio dissertativo."
          },
          {
            id: "pt-u6-l4-q8",
            type: "matching",
            prompt: "Associe as dimensões de avaliação da prova de Exame Nacional aos critérios oficiais do IAVE:",
            pairs: [
              { native: "Estruturação temática e discursiva (ETD)", english: "Pertinência dos argumentos, progressão temática e coesão textual", left: "Estruturação temática e discursiva (ETD)", right: "Pertinência dos argumentos, progressão temática e coesão textual" },
              { native: "Correção linguística (CL)", english: "Sintaxe, pontuação, propriedade vocabular e ortografia", left: "Correção linguística (CL)", right: "Sintaxe, pontuação, propriedade vocabular e ortografia" },
              { native: "Grupo I (Educação Literária)", english: "Interpretação de excertos das obras obrigatórias do programa", left: "Grupo I (Educação Literária)", right: "Interpretação de excertos das obras obrigatórias do programa" },
              { native: "Grupo II (Gramática e Leitura)", english: "Análise sintática, orações subordinadas e semântica lexical", left: "Grupo II (Gramática e Leitura)", right: "Análise sintática, orações subordinadas e semântica lexical" }
            ]
          }
        ]
      },

      {
        id: "pt-u2-l15",
        title: "Lesson 6.5: Ensaio de Avaliação Final",
        description: "Composição dissertativa avançada e cronometrada segundo a matriz oficial do Ministério da Educação e IAVE (Exame Nacional de Português).",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "pt-u6-l5-q1",
            type: "multiple_choice",
            prompt: "Na resolução do Exame Nacional de Português, como se classifica sintaticamente a oração sublinhada na frase: 'Embora a civilização tecnológica progrida, o ser humano continua a questionar o sentido da vida'?",
            options: [
              "Oração subordinada adverbial concessiva",
              "Oração coordenada sindética adversativa",
              "Oração subordinada substantiva relativa",
              "Oração subordinada adjetiva explicativa"
            ],
            correctAnswer: "Oração subordinada adverbial concessiva",
            explanation: "'Embora' introduz uma oração subordinada adverbial concessiva que expressa um facto que admitidamente contrasta com a subordinante."
          },
          {
            id: "pt-u6-l5-q2",
            type: "fill_blank",
            sentence: "No Grupo de Gramática, a função sintática desempenhada pelo termo 'a Camões' em 'Os portugueses ergueram um monumento a Camões' é de complemento ___.",
            missingWord: "indireto",
            options: ["indireto", "direto", "agente da passiva", "oblíquo"],
            correctAnswer: "indireto",
            explanation: "O constituinte preposicionado introduzido por 'a' e substituível pelo pronome 'lhe' ('ergueram-lhe um monumento') é complemento indireto."
          },
          {
            id: "pt-u6-l5-q3",
            type: "scramble",
            prompt: "Ordene a síntese conclusiva de elevada maturidade ensaística:",
            tokens: ["A", "cultura", "humanista", "constitui", "o", "alicerce", "da", "dignidade."],
            correctTokens: ["A", "cultura", "humanista", "constitui", "o", "alicerce", "da", "dignidade."],
            explanation: "Remate reflexivo de excelência adequado a provas de nível C1/C2 e acesso ao ensino superior."
          },
          {
            id: "pt-u6-l5-q4",
            type: "matching",
            prompt: "Associe as funções sintáticas aos respetivos constituintes frásicos (Dicionário Terminológico / DT):",
            pairs: [
              { native: "Modificador da frase", english: "Felizmente, todos concluíram a prova a tempo.", left: "Modificador da frase", right: "Felizmente, todos concluíram a prova a tempo." },
              { native: "Predicativo do sujeito", english: "Fernando Pessoa era um génio universal.", left: "Predicativo do sujeito", right: "Fernando Pessoa era um génio universal." },
              { native: "Complemento oblíquo", english: "Os navegadores partiram de Belém rumo ao Índico.", left: "Complemento oblíquo", right: "Os navegadores partiram de Belém rumo ao Índico." },
              { native: "Complemento do nome", english: "A leitura dos Lusíadas é memorável.", left: "Complemento do nome", right: "A leitura dos Lusíadas é memorável." }
            ]
          },
          {
            id: "pt-u6-l5-q5",
            type: "multiple_choice",
            prompt: "No Exame Nacional, qual a consequência regulamentar caso um candidato copie integralmente um texto não da sua autoria ou consulte cábulas?",
            options: [
              "Anulação imediata da prova com classificação de zero pontos e participação disciplinar",
              "Apenas um aviso verbal do professor vigilante",
              "Desconto de dois valores na nota final",
              "Pode continuar o exame na sala ao lado"
            ],
            correctAnswer: "Anulação imediata da prova com classificação de zero pontos e participação disciplinar",
            explanation: "O Regulamento das Provas de Avaliação Externa estipula anulação sem recurso e penalização severa em caso de fraude."
          },
          {
            id: "pt-u6-l5-q6",
            type: "audio_listen",
            prompt: "Ouça a proclamação das pautas de exame na escola secundária:",
            audioText: "Informa-se que as pautas definitivas do Exame Nacional de Português foram afixadas no átrio principal. Os alunos admitidos obtiveram a qualificação necessária para a candidatura ao Ensino Superior.",
            options: [
              "As pautas finais foram afixadas e conferem acesso ao Ensino Superior",
              "O ano letivo foi anulado pelo Ministério da Educação",
              "Os alunos devem matricular-se noutra escola do país",
              "As notas só serão reveladas no próximo ano civil"
            ],
            correctAnswer: "As pautas finais foram afixadas e conferem acesso ao Ensino Superior",
            explanation: "A mensagem confirma o encerramento do processo de avaliação externa e a habilitação académica dos estudantes."
          },
          {
            id: "pt-u6-l5-q7",
            type: "fill_blank",
            sentence: "A aprovação no Exame Nacional de Português abre as portas para o ingresso nas ___ públicas e politécnicos de Portugal.",
            missingWord: "universidades",
            options: ["universidades", "empresas", "fábricas", "lojas"],
            correctAnswer: "universidades",
            explanation: "O exame de Português é uma das principais provas de ingresso (PI) exigidas no Concurso Nacional de Acesso ao Ensino Superior."
          },
          {
            id: "pt-u6-l5-q8",
            type: "matching",
            prompt: "Associe as classificações quantitativas do ensino secundário aos respetivos escalões de mérito (escala 0 a 20 valores):",
            pairs: [
              { native: "18 a 20 valores", english: "Excelente / Notável (nota de elite para cursos de alta competitividade)", left: "18 a 20 valores", right: "Excelente / Notável (nota de elite para cursos de alta competitividade)" },
              { native: "14 a 17 valores", english: "Bom a Muito Bom (sólida aprovação com folga académica)", left: "14 a 17 valores", right: "Bom a Muito Bom (sólida aprovação com folga académica)" },
              { native: "10 a 13 valores", english: "Suficiente (nota mínima positiva para aprovação e diploma)", left: "10 a 13 valores", right: "Suficiente (nota mínima positiva para aprovação e diploma)" },
              { native: "0 a 9 valores", english: "Insuficiente / Reprovado (obriga a recurso na 2.ª fase de exames)", left: "0 a 9 valores", right: "Insuficiente / Reprovado (obriga a recurso na 2.ª fase de exames)" }
            ]
          }
        ]
      }
    ]
  }
];
