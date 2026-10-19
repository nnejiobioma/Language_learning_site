// =========================================================================
// Swedish Curriculum — Track A: Adult Municipal Education & Integration
// (SFI Kurs B–D, SVA & Tisus Standard under Skollagen & Skolverket)
// Units 1 to 3 • 4 Lessons per Unit = 12 Comprehensive Lessons Total
// =========================================================================

export const swedishTrackAUnits = [
  // =========================================================================
  // UNIT 1: Foundational Daily Interactions & SFI Course B (SeQF 1 / CEFR A1)
  // =========================================================================
  {
    id: "sv-unit-1",
    unitId: "sv-unit-1",
    unitNumber: 1,
    level: "Track A: SFI Kurs B (SeQF 1 / CEFR A1)",
    title: "Unit 1: Foundational Daily Interactions & SFI Course B Exam Prep",
    subtitle: "Personnummer, personuppgifter, bostad, tidsuttryck, V2-regeln, en/ett-ord och kollektivtrafik (SL/Västtrafik).",
    icon: "Sparkles",
    color: "#0284c7",
    lessons: [
      {
        id: "sv-u1-l1",
        title: "Lesson 1.1: Personal Identification & Demographics",
        description: "Hälsningsfraser, personnummer, folkbokföring hos Skatteverket och vokalernas längd (långa vs. korta vokaler).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l1-q1",
            type: "multiple_choice",
            prompt: "Vad är det svenska personnumret och varför är det centralt i samhället?",
            options: [
              "Ett tiosiffrigt identifikationsnummer från Skatteverket som krävs för vård, bank och bostad",
              "Ett tillfälligt busskort i Stockholm",
              "En fyrsiffrig kod till porttelefonen",
              "Numret på bibliotekslånekortet"
            ],
            correctAnswer: "Ett tiosiffrigt identifikationsnummer från Skatteverket som krävs för vård, bank och bostad",
            explanation: "Personnumret (ÅÅMMDD-XXXX) utfärdas av Skatteverket vid folkbokföring och är navet för alla myndighets- och vardagskontakter i Sverige."
          },
          {
            id: "sv-u1-l1-q2",
            type: "fill_blank",
            sentence: "Hej! Jag ___ från Syrien och jag ___ i Göteborg.",
            missingWord: "kommer",
            options: ["kommer", "kom", "komma", "kommit"],
            correctAnswer: "kommer",
            explanation: "Presensformen av verbet 'komma' är 'kommer': 'Jag kommer från...'."
          },
          {
            id: "sv-u1-l1-q3",
            type: "scramble",
            prompt: "Ordna orden till en korrekt presentation på svenska (subjekt + verb + predikativ):",
            tokens: ["Jag", "heter", "Amina", "och", "talar", "tre", "språk."],
            correctTokens: ["Jag", "heter", "Amina", "och", "talar", "tre", "språk."],
            explanation: "I en vanlig svensk påståendesats står verbet på andra plats: 'Jag heter Amina'."
          },
          {
            id: "sv-u1-l1-q4",
            type: "matching",
            prompt: "Para ihop de svenska personliga pronomina i subjektsform med motsvarande i objektsform:",
            pairs: [
              { native: "jag", english: "mig", left: "jag", right: "mig" },
              { native: "du", english: "dig", left: "du", right: "dig" },
              { native: "han", english: "honom", left: "han", right: "honom" },
              { native: "hon", english: "henne", left: "hon", right: "henne" }
            ]
          },
          {
            id: "sv-u1-l1-q5",
            type: "multiple_choice",
            prompt: "Vilken vokalregel avgör om en svensk vokal uttalas lång eller kort?",
            options: [
              "Vokalen är lång om den följs av en konsonant; kort om den följs av två eller fler konsonanter",
              "Alla vokaler i början av ett ord är alltid korta",
              "Vokalens längd beror enbart på hur högt man talar",
              "Det finns ingen skillnad mellan långa och korta vokaler i svenskan"
            ],
            correctAnswer: "Vokalen är lång om den följs av en konsonant; kort om den följs av två eller fler konsonanter",
            explanation: "Huvudregeln i svensk fonologi: vokal + en konsonant = lång vokal (t.ex. 'mat'); vokal + dubbla konsonanter = kort vokal (t.ex. 'matt')."
          },
          {
            id: "sv-u1-l1-q6",
            type: "audio_listen",
            prompt: "Lyssna på handläggaren på Skatteverket och identifiera frågan:",
            audioText: "Hej! Kan du vara snäll och uppge ditt fullständiga namn och personnummer?",
            options: [
              "Handläggaren ber om fullständigt namn och personnummer",
              "Handläggaren frågar efter klockslaget",
              "Handläggaren vill beställa kaffe och bulle",
              "Handläggaren undrar var närmaste busshållplats ligger"
            ],
            correctAnswer: "Handläggaren ber om fullständigt namn och personnummer",
            explanation: "Standardfrasen vid legitimering hos myndigheter är att uppge namn och personnummer."
          },
          {
            id: "sv-u1-l1-q7",
            type: "fill_blank",
            sentence: "Vad har du för ___? — Jag är ogift.",
            missingWord: "civilstånd",
            options: ["civilstånd", "yrke", "adress", "telefonnummer"],
            correctAnswer: "civilstånd",
            explanation: "'Civilstånd' anger om en person är gift, ogift, skild eller änka/änkling."
          },
          {
            id: "sv-u1-l1-q8",
            type: "matching",
            prompt: "Koppla ihop myndigheterna med deras huvudsakliga ansvarsområde i Sverige:",
            pairs: [
              { native: "Skatteverket", english: "Folkbokföring, personnummer och ID-kort", left: "Skatteverket", right: "Folkbokföring, personnummer och ID-kort" },
              { native: "Migrationsverket", english: "Uppehållstillstånd, medborgarskap och asyl", left: "Migrationsverket", right: "Uppehållstillstånd, medborgarskap och asyl" },
              { native: "Försäkringskassan", english: "Barnbidrag, föräldrapenning och sjukpenning", left: "Försäkringskassan", right: "Barnbidrag, föräldrapenning och sjukpenning" },
              { native: "Arbetsförmedlingen", english: "Jobbsökande och etableringsprogram", left: "Arbetsförmedlingen", right: "Jobbsökande och etableringsprogram" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l2",
        title: "Lesson 1.2: Housing, Domestic Life & Time Expressions",
        description: "Bostadens planlösning, hyreskontrakt, klockan och tidsuttryck. V2-regeln i huvudsats.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l2-q1",
            type: "multiple_choice",
            prompt: "Vad innebär den fundamentala V2-regeln (verb på andra plats) i en svensk påståendesats?",
            options: [
              "Det finita verbet ska alltid stå på andra plats, även om satsen inleds med ett tids- eller platsuttryck (inversion)",
              "Varje mening måste innehålla minst två verb",
              "Verbet placeras alltid allra sist i satsen",
              "Verbet används bara på tisdagar"
            ],
            correctAnswer: "Det finita verbet ska alltid stå på andra plats, även om satsen inleds med ett tids- eller platsuttryck (inversion)",
            explanation: "V2-regeln är svenskans striktaste syntaktiska regel: 'Idag *vaknar* jag tidigt' (inte: 'Idag jag vaknar')."
          },
          {
            id: "sv-u1-l2-q2",
            type: "fill_blank",
            sentence: "Klockan är kvart ___ sju (06:45).",
            missingWord: "i",
            options: ["i", "över", "halv", "på"],
            correctAnswer: "i",
            explanation: "I svenskan uttrycks minuter före hel timme med 'i': 'kvart i sju' betyder 06:45."
          },
          {
            id: "sv-u1-l2-q3",
            type: "scramble",
            prompt: "Bygg meningen med tidsadverbial först och tillämpa V2-inversion:",
            tokens: ["På", "morgonen", "dricker", "jag", "en", "kopp", "kaffe."],
            correctTokens: ["På", "morgonen", "dricker", "jag", "en", "kopp", "kaffe."],
            explanation: "Efter tidsuttrycket 'På morgonen' kommer verbet 'dricker' på position 2, följt av subjektet 'jag'."
          },
          {
            id: "sv-u1-l2-q4",
            type: "matching",
            prompt: "Para ihop rummen i en svensk lägenhet med typiska inventarier:",
            pairs: [
              { native: "Kök", english: "Kylskåp, frys och spis", left: "Kök", right: "Kylskåp, frys och spis" },
              { native: "Vardagsrum", english: "Soffa, soffbord och bokhylla", left: "Vardagsrum", right: "Soffa, soffbord och bokhylla" },
              { native: "Badrum", english: "Dusch, handfat och toalett", left: "Badrum", right: "Dusch, handfat och toalett" },
              { native: "Sovrum", english: "Dubbelsäng och garderob", left: "Sovrum", right: "Dubbelsäng och garderob" }
            ]
          },
          {
            id: "sv-u1-l2-q5",
            type: "multiple_choice",
            prompt: "Vad menas med att hyra en lägenhet i 'andra hand' i Sverige?",
            options: [
              "Att hyra lägenheten av någon som i sin tur har förstahandskontraktet eller äger bostadsrätten",
              "Att bostaden har två ingångar och två nycklar",
              "Att kontraktet endast är giltigt i två månader",
              "Att man måste städa lägenheten två gånger per dag"
            ],
            correctAnswer: "Att hyra lägenheten av någon som i sin tur har förstahandskontraktet eller äger bostadsrätten",
            explanation: "Ett andrahandskontrakt är ett tidsbegränsat hyresavtal som tecknas med primärhyresgästen med hyresvärdens godkännande."
          },
          {
            id: "sv-u1-l2-q6",
            type: "audio_listen",
            prompt: "Lyssna på meddelandet från hyresvärden och ange tvättiden:",
            audioText: "Hej! Du har bokat tvättstugan i källaren på torsdag mellan klockan sju och elva på förmiddagen.",
            options: [
              "Torsdag klockan 07:00–11:00 i tvättstugan",
              "Fredag kväll klockan 20:00",
              "Lördag morgon klockan 06:00",
              "Måndag eftermiddag i cykelrummet"
            ],
            correctAnswer: "Torsdag klockan 07:00–11:00 i tvättstugan",
            explanation: "Meddelandet bekräftar bokningen av tvättstugan på torsdag förmiddag (07:00–11:00)."
          },
          {
            id: "sv-u1-l2-q7",
            type: "fill_blank",
            sentence: "Hyran för lägenheten ska ___ senast den sista vardagen i månaden.",
            missingWord: "betalas",
            options: ["betalas", "betala", "betalade", "betalat"],
            correctAnswer: "betalas",
            explanation: "S-passiv i infinitiv efter hjälpverbet 'ska': 'hyran ska betalas'."
          },
          {
            id: "sv-u1-l2-q8",
            type: "matching",
            prompt: "Koppla klockslagen till deras digitala tidsangivelser:",
            pairs: [
              { native: "Halv åtta", english: "07:30", left: "Halv åtta", right: "07:30" },
              { native: "Tio över fyra", english: "16:10", left: "Tio över fyra", right: "16:10" },
              { native: "Fem i halv två", english: "13:25", left: "Fem i halv två", right: "13:25" },
              { native: "Kvart över nio", english: "09:15", left: "Kvart över nio", right: "09:15" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l3",
        title: "Lesson 1.3: Everyday Public Spaces & Directions",
        description: "Inköp på mataffären, beställa på café, fråga om vägen i kollektivtrafiken (SL/Västtrafik). Substantivens genus (en vs. ett) och bestämd form.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l3-q1",
            type: "multiple_choice",
            prompt: "Hur bildas bestämd form singularis av de allra flesta 'en'-ord (utrum) i svenskan?",
            options: [
              "Man lägger till ändelsen -en eller -n i slutet av ordet (t.ex. en buss -> bussen)",
              "Man sätter ordet 'the' framför substantivet",
              "Man ändrar alltid vokalen i ordets stam",
              "En-ord kan inte ha bestämd form"
            ],
            correctAnswer: "Man lägger till ändelsen -en eller -n i slutet av ordet (t.ex. en buss -> bussen)",
            explanation: "I svenskan är bestämd form en suffiksändelse: en stol -> stolen; ett bord -> bordet."
          },
          {
            id: "sv-u1-l3-q2",
            type: "fill_blank",
            sentence: "Ursäkta, ___ tunnelbanan mot T-Centralen från det här spåret?",
            missingWord: "går",
            options: ["går", "åker", "springer", "flyger"],
            correctAnswer: "går",
            explanation: "Om tåg, bussar och tunnelbana används verbet 'gå': 'Tåget går från spår 2'."
          },
          {
            id: "sv-u1-l3-q3",
            type: "scramble",
            prompt: "Ordna den artiga frågan om vägbeskrivning i kollektivtrafiken:",
            tokens: ["Hur", "kommer", "jag", "enklast", "till", "stadsbiblioteket?"],
            correctTokens: ["Hur", "kommer", "jag", "enklast", "till", "stadsbiblioteket?"],
            explanation: "Standardfras: 'Hur kommer jag enklast till...' följt av destinationen i bestämd form."
          },
          {
            id: "sv-u1-l3-q4",
            type: "matching",
            prompt: "Para ihop substantiven med deras korrekta grammatiska genus (en/ett):",
            pairs: [
              { native: "En kopp kaffe", english: "Utrum (en-ord)", left: "En kopp kaffe", right: "Utrum (en-ord)" },
              { native: "Ett äpple", english: "Neutrum (ett-ord)", left: "Ett äpple", right: "Neutrum (ett-ord)" },
              { native: "En biljett", english: "Utrum (en-ord)", left: "En biljett", right: "Utrum (en-ord)" },
              { native: "Ett apotek", english: "Neutrum (ett-ord)", left: "Ett apotek", right: "Neutrum (ett-ord)" }
            ]
          },
          {
            id: "sv-u1-l3-q5",
            type: "multiple_choice",
            prompt: "Hur betalar man i regel för varor och kollektivtrafik i Sverige idag?",
            options: [
              "Kontaktlöst med betalkort, SL-app/Västtrafik To Go eller Swish (Sverige är i princip kontantlöst)",
              "Endast med kontanta sedlar och mynt i kassan",
              "Med checkar som postas till banken",
              "Genom att byta varor mot potatis"
            ],
            correctAnswer: "Kontaktlöst med betalkort, SL-app/Västtrafik To Go eller Swish (Sverige är i princip kontantlöst)",
            explanation: "Sverige är ett av världens mest kontantlösa samhällen där bankkort, mobilappar och Swish dominerar totalt."
          },
          {
            id: "sv-u1-l3-q6",
            type: "audio_listen",
            prompt: "Lyssna på utropet i tunnelbanan och ange nästa station:",
            audioText: "Nästa: Odenplan. Byte till pendeltåg och stadsbussar. Dörrarna öppnas på höger sida.",
            options: [
              "Station Odenplan med byte till pendeltåg och bussar",
              "Slutstation Mörby centrum",
              "Tekniska högskolan",
              "Tåget stannar inte vid nästa station"
            ],
            correctAnswer: "Station Odenplan med byte till pendeltåg och bussar",
            explanation: "Det klassiska SL-utropet annonserar station Odenplan och byten till pendeltåg och buss."
          },
          {
            id: "sv-u1-l3-q7",
            type: "fill_blank",
            sentence: "Vill du ha kvitto på köpet? — Nej tack, det är bra ___.",
            missingWord: "så",
            options: ["så", "mycket", "ja", "inte"],
            correctAnswer: "så",
            explanation: "'Det är bra så' är ett mycket vanligt idiomatiskt svar i svenska butiker när man avböjer kvitto eller påse."
          },
          {
            id: "sv-u1-l3-q8",
            type: "matching",
            prompt: "Koppla vägbeskrivningsuttrycken till deras betydelse:",
            pairs: [
              { native: "Ta till höger", english: "Sväng höger i korsningen", left: "Ta till höger", right: "Sväng höger i korsningen" },
              { native: "Gå rakt fram", english: "Fortsätt längs samma gata utan att svänga", left: "Gå rakt fram", right: "Fortsätt längs samma gata utan att svänga" },
              { native: "På andra sidan gatan", english: "Mittemot på motsatt trottoar", left: "På andra sidan gatan", right: "Mittemot på motsatt trottoar" },
              { native: "Vid trafikljusen", english: "Där signalerna reglerar biltrafiken", left: "Vid trafikljusen", right: "Där signalerna reglerar biltrafiken" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l4",
        title: "Lesson 1.4: SFI Course B National Test Simulation",
        description: "Nationella provet i SFI Kurs B (Skolverkets kriterier). Läsförståelse av korta vardagstexter, hörförståelse och enkel skriftlig produktion.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "sv-u1-l4-q1",
            type: "multiple_choice",
            prompt: "Vad prövas framför allt i delprovet 'Läsa' i det nationella provet för SFI Kurs B?",
            options: [
              "Förmågan att förstå enkla, vardagliga texter som skyltar, korta meddelanden och öppettider",
              "Kunskap om Sveriges grundlag och 1700-talslitteratur",
              "Skriva vetenskapliga uppsatser med källhänvisningar",
              "Översätta latinska dikter till svenska"
            ],
            correctAnswer: "Förmågan att förstå enkla, vardagliga texter som skyltar, korta meddelanden och öppettider",
            explanation: "SFI Kurs B (SeQF 1 / A1) fokuserar på elementär språkförståelse i bekanta vardagssituationer."
          },
          {
            id: "sv-u1-l4-q2",
            type: "fill_blank",
            sentence: "Vårdcentralen har öppet måndag till fredag mellan klockan 08.00 ___ 17.00.",
            missingWord: "och",
            options: ["och", "med", "till", "i"],
            correctAnswer: "och",
            explanation: "Tillsammans med prepositionen 'mellan' används konjunktionen 'och': 'mellan klockan 08.00 och 17.00'."
          },
          {
            id: "sv-u1-l4-q3",
            type: "scramble",
            prompt: "Ordna meningen från en enkel vardagsbeskrivning på provet:",
            tokens: ["Varje", "dag", "åker", "jag", "buss", "till", "skolan."],
            correctTokens: ["Varje", "dag", "åker", "jag", "buss", "till", "skolan."],
            explanation: "Inversion efter inledande tidsuttryck 'Varje dag': verb 'åker' på plats 2."
          },
          {
            id: "sv-u1-l4-q4",
            type: "matching",
            prompt: "Para ihop vanliga skyltar i svenska trappuppgångar och lokaler med deras innebörd:",
            pairs: [
              { native: "Vänligen stäng dörren ordentligt", english: "Se till att porten går i lås", left: "Vänligen stäng dörren ordentligt", right: "Se till att porten går i lås" },
              { native: "Rökning förbjuden", english: "Det är inte tillåtet att röka i lokalen", left: "Rökning förbjuden", right: "Det är inte tillåtet att röka i lokalen" },
              { native: "Nödutgång får ej blockeras", english: "Utrymningsvägen måste hållas fri från cyklar och vagnar", left: "Nödutgång får ej blockeras", right: "Utrymningsvägen måste hållas fri från cyklar och vagnar" },
              { native: "Tystnad råder efter kl. 22.00", english: "Visa hänsyn och dämpa ljudnivån under natten", left: "Tystnad råder efter kl. 22.00", right: "Visa hänsyn och dämpa ljudnivån under natten" }
            ]
          },
          {
            id: "sv-u1-l4-q5",
            type: "multiple_choice",
            prompt: "Hur avslutas ett kort, vänligt vardagsmeddelande till en lärare eller granne på svenskt manér?",
            options: [
              "Vänliga hälsningar, / Mvh",
              "Er ödmjuke tjänare för evigt,",
              "Adios kompis,",
              "Ingen avslutning behövs"
            ],
            correctAnswer: "Vänliga hälsningar, / Mvh",
            explanation: "'Vänliga hälsningar' (eller förkortningen 'Mvh' för Med vänlig hälsning) är standardfrasen i skriftliga vardagsmeddelanden."
          },
          {
            id: "sv-u1-l4-q6",
            type: "audio_listen",
            prompt: "Lyssna på sjukanmälan på telefonsvararen och ange elevens orsak:",
            audioText: "Hej läraren! Det här är Omar i grupp B2. Jag har feber och ont i halsen idag, så jag kan tyvärr inte komma till lektionen.",
            options: [
              "Omar är sjuk med feber och halsont och kan inte komma till skolan",
              "Omar har glömt sina läxböcker på bussen",
              "Omar vill bjuda läraren på fika",
              "Omar har flyttat till en annan stad"
            ],
            correctAnswer: "Omar är sjuk med feber och halsont och kan inte komma till skolan",
            explanation: "Omar sjukanmäler sig med tydlig motivering: feber och ont i halsen."
          },
          {
            id: "sv-u1-l4-q7",
            type: "fill_blank",
            sentence: "På helgen brukar jag träffa mina vänner och ___ på bio.",
            missingWord: "gå",
            options: ["gå", "gick", "går", "gått"],
            correctAnswer: "gå",
            explanation: "Efter hjälpverbet 'brukar' står huvudverbet i infinitiv utan att: 'brukar gå'."
          },
          {
            id: "sv-u1-l4-q8",
            type: "matching",
            prompt: "Koppla ihop delproven i SFI:s nationella prov med deras kompetensområden:",
            pairs: [
              { native: "Läsförståelse (Läsa)", english: "Förstå instruktioner, information och korta berättelser", left: "Läsförståelse (Läsa)", right: "Förstå instruktioner, information och korta berättelser" },
              { native: "Hörförståelse (Höra)", english: "Uppfatta budskap i vardagliga samtal och meddelanden", left: "Hörförståelse (Höra)", right: "Uppfatta budskap i vardagliga samtal och meddelanden" },
              { native: "Skriftlig produktion (Skriva)", english: "Formulera enkla sammanhängande meningar om sig själv", left: "Skriftlig produktion (Skriva)", right: "Formulera enkla sammanhängande meningar om sig själv" },
              { native: "Muntlig interaktion (Tala)", english: "Kommunicera i ett enkelt tvåvägssamtal med läraren", left: "Muntlig interaktion (Tala)", right: "Kommunicera i ett enkelt tvåvägssamtal med läraren" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 2: Professional Routines & SFI Course D Exam Prep (SeQF 3 / CEFR B1)
  // =========================================================================
  {
    id: "sv-unit-2",
    unitId: "sv-unit-2",
    unitNumber: 2,
    level: "Track A: SFI Kurs D (SeQF 3 / CEFR B1)",
    title: "Unit 2: Professional Routines, Workplace Integration & SFI Course D",
    subtitle: "Arbetsmarknad, Arbetsförmedlingen, BIFF-regeln, fika på jobbet, Försäkringskassan, s-passiv och formell skriftlig produktion.",
    icon: "Briefcase",
    color: "#10b981",
    lessons: [
      {
        id: "sv-u1-l5",
        title: "Lesson 2.1: Job Search & The Swedish Labor Market Blueprint",
        description: "Arbetsannonser, Platsbanken hos Arbetsförmedlingen, personligt brev och bisatsordföljd (BIFF-regeln: Bisats Inte Före Finita verbet).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l5-q1",
            type: "multiple_choice",
            prompt: "Vad innebär den välkända 'BIFF-regeln' i svensk grammatik?",
            options: [
              "I Bisats kommer ordet 'Inte' Före det Finita verbet (t.ex. '...eftersom jag inte förstod frågan')",
              "Att man alltid ska äta biff till lunch på fredagar",
              "Att alla verb i bisatser slutar på bokstaven b",
              "Att verbet alltid placeras först i bisatsen"
            ],
            correctAnswer: "I Bisats kommer ordet 'Inte' Före det Finita verbet (t.ex. '...eftersom jag inte förstod frågan')",
            explanation: "BIFF-regeln: Bisats -> 'Inte' Före Finit verb. I huvudsats kommer 'inte' efter verbet ('Jag förstod inte')."
          },
          {
            id: "sv-u1-l5-q2",
            type: "fill_blank",
            sentence: "Hon sökte tjänsten eftersom hon ___ hade rätt utbildning.",
            missingWord: "inte",
            options: ["inte", "aldrig", "redan", "alltid"],
            correctAnswer: "inte",
            explanation: "I bisatsen inledd av underordnande konjunktionen 'eftersom' placeras satsadverbialet före det finita verbet: 'eftersom hon inte hade'."
          },
          {
            id: "sv-u1-l5-q3",
            type: "scramble",
            prompt: "Bygg en bisats med korrekt ordföljd enligt BIFF-regeln:",
            tokens: ["...eftersom", "han", "inte", "hittade", "några", "lediga", "jobb."],
            correctTokens: ["...eftersom", "han", "inte", "hittade", "några", "lediga", "jobb."],
            explanation: "Subjunktion (eftersom) + subjekt (han) + satsadverbial (inte) + finit verb (hittade) + objekt."
          },
          {
            id: "sv-u1-l5-q4",
            type: "matching",
            prompt: "Para ihop arbetsmarknadstermerna med deras förklaringar:",
            pairs: [
              { native: "Tillsvidareanställning", english: "Fast anställning utan slutdatum", left: "Tillsvidareanställning", right: "Fast anställning utan slutdatum" },
              { native: "Provanställning", english: "Prövoperiod på högst sex månader", left: "Provanställning", right: "Prövoperiod på högst sex månader" },
              { native: "Timanställning / Vid behov", english: "Arbete som bokas per timme vid behov", left: "Timanställning / Vid behov", right: "Arbete som bokas per timme vid behov" },
              { native: "Kollektivavtal", english: "Avtal mellan fackförbund och arbetsgivarorganisation om lön och villkor", left: "Kollektivavtal", right: "Avtal mellan fackförbund och arbetsgivarorganisation om lön och villkor" }
            ]
          },
          {
            id: "sv-u1-l5-q5",
            type: "multiple_choice",
            prompt: "Vad är ett 'personligt brev' i en svensk jobbansökan?",
            options: [
              "Ett riktat brev där den sökande förklarar varför man passar för tjänsten och lyfter fram relevanta styrkor och motivation",
              "Ett personligt kärleksbrev till chefen",
              "En kopia av ens pass och vaccinationskort",
              "En lista över alla släktingars telefonnummer"
            ],
            correctAnswer: "Ett riktat brev där den sökande förklarar varför man passar för tjänsten och lyfter fram relevanta styrkor och motivation",
            explanation: "Ett personligt brev kompletterar CV:t genom att motivera varför sökandens kompetens och personlighet matchar den utlysta rollen."
          },
          {
            id: "sv-u1-l5-q6",
            type: "audio_listen",
            prompt: "Lyssna på rekryteraren och notera vad som krävs för tjänsten:",
            audioText: "För den här tjänsten som undersköterska krävs godkänd yrkesexamen, B-körkort samt goda kunskaper i svenska i både tal och skrift.",
            options: [
              "Yrkesexamen som undersköterska, B-körkort och god svenska",
              "Endast truckkort och ingen erfarenhet alls",
              "Att man kan tala fem olika språk flytande",
              "Att man har egen bil med släpvagn"
            ],
            correctAnswer: "Yrkesexamen som undersköterska, B-körkort och god svenska",
            explanation: "Rekryteraren nämner tre konkreta krav: yrkesexamen, körkort och svenskkunskaper i tal och skrift."
          },
          {
            id: "sv-u1-l5-q7",
            type: "fill_blank",
            sentence: "Arbetsgivaren kallade tre kandidater till ___ på kontoret nästa vecka.",
            missingWord: "anställningsintervju",
            options: ["anställningsintervju", "fest", "kurs", "semester"],
            correctAnswer: "anställningsintervju",
            explanation: "När CV och personligt brev gallrats kallas utvalda kandidater till anställningsintervju."
          },
          {
            id: "sv-u1-l5-q8",
            type: "matching",
            prompt: "Koppla ihop underordnande biskatsinledare (subjunktioner) med deras funktion:",
            pairs: [
              { native: "Eftersom / Då", english: "Orsak och kausalitet (anledning)", left: "Eftersom / Då", right: "Orsak och kausalitet (anledning)" },
              { native: "Trots att / Fastän", english: "Medgivande och kontrast (motsättning)", left: "Trots att / Fastän", right: "Medgivande och kontrast (motsättning)" },
              { native: "Om / Ifall", english: "Villkor och förutsättning", left: "Om / Ifall", right: "Villkor och förutsättning" },
              { native: "För att", english: "Avsikt och syfte", left: "För att", right: "Avsikt och syfte" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l6",
        title: "Lesson 2.2: Workplace Safety & Employee Interaction",
        description: "Skyddsombud, sjukanmälan till arbetsgivaren, fika-kulturen på jobbet och modala hjälpverb (måste, bör, ska).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l6-q1",
            type: "multiple_choice",
            prompt: "Vad är ett 'skyddsombud' på en svensk arbetsplats?",
            options: [
              "En representant vald av de anställda som bevakar arbetsmiljön och har laglig rätt att stoppa farligt arbete",
              "En väktare vid huvudentrén som kollar ID-kort",
              "En extern konsult som räknar ut företagets skatter",
              "En person som serverar kaffe i personalrummet"
            ],
            correctAnswer: "En representant vald av de anställda som bevakar arbetsmiljön och har laglig rätt att stoppa farligt arbete",
            explanation: "Skyddsombudet representerar arbetstagarna i arbetsmiljöfrågor och kan enligt Arbetsmiljölagen lägga ett skyddsombudsstopp vid omedelbar fara."
          },
          {
            id: "sv-u1-l6-q2",
            type: "fill_blank",
            sentence: "Om du blir sjuk på morgonen ___ du ringa och sjukanmäla dig till din närmaste chef innan passet börjar.",
            missingWord: "måste",
            options: ["måste", "vill", "fick", "orkade"],
            correctAnswer: "måste",
            explanation: "'Måste' uttrycker strikt skyldighet och plikt enligt anställningsavtalet."
          },
          {
            id: "sv-u1-l6-q3",
            type: "scramble",
            prompt: "Ordna den svenska fika-frasen till kollegorna i personalrummet:",
            tokens: ["Ska", "vi", "ta", "en", "gemensam", "fika", "klockan", "tio?"],
            correctTokens: ["Ska", "vi", "ta", "en", "gemensam", "fika", "klockan", "tio?"],
            explanation: "Fika-pausen klockan 09:30–10:00 är en central social och professionell institution på svenska arbetsplatser."
          },
          {
            id: "sv-u1-l6-q4",
            type: "matching",
            prompt: "Para ihop modala hjälpverb med deras modalitetsbetydelse:",
            pairs: [
              { native: "Måste", english: "Nödvändighet och absolut krav", left: "Måste", right: "Nödvändighet och absolut krav" },
              { native: "Bör", english: "Rekommendation och lämplighet", left: "Bör", right: "Rekommendation och lämplighet" },
              { native: "Får", english: "Tillåtelse och lov", left: "Får", right: "Tillåtelse och lov" },
              { native: "Kan", english: "Möjlighet eller förmåga", left: "Kan", right: "Möjlighet eller förmåga" }
            ]
          },
          {
            id: "sv-u1-l6-q5",
            type: "multiple_choice",
            prompt: "Vilken funktion fyller den gemensamma förmiddags- och eftermiddagsfikan på svenska arbetsplatser?",
            options: [
              "Den främjar platta hierarkier, öppen dialog mellan chefer och medarbetare samt gemenskap och informationsutbyte",
              "Den är ett obligatoriskt straff för nyanställda",
              "Man får absolut inte prata om arbete under fikan",
              "Den ersätter helt och hållet månadslönen"
            ],
            correctAnswer: "Den främjar platta hierarkier, öppen dialog mellan chefer och medarbetare samt gemenskap och informationsutbyte",
            explanation: "Fikan i Sverige river hierarkier och är ofta platsen där viktiga idéer och konsensusbeslut formas informellt."
          },
          {
            id: "sv-u1-l6-q6",
            type: "audio_listen",
            prompt: "Lyssna på instruktionen från teamledaren och identifiera regeln:",
            audioText: "Påminnelse till alla montörer i verkstaden: hörselskydd och skyddsglasögon ska alltid bäras i hall två.",
            options: [
              "Hörselskydd och skyddsglasögon är obligatoriska i hall två",
              "Man får inte vistas i hall två efter lunch",
              "Alla montörer har fått löneförhöjning",
              "Hörselskydd behövs inte längre"
            ],
            correctAnswer: "Hörselskydd och skyddsglasögon är obligatoriska i hall två",
            explanation: "Instruktionen fastställer kravet på personlig skyddsutrustning i hall två."
          },
          {
            id: "sv-u1-l6-q7",
            type: "fill_blank",
            sentence: "Från och med dag åtta av sjukperioden krävs ett ___ från läkare.",
            missingWord: "läkarintyg",
            options: ["läkarintyg", "brev", "kvitto", "betyg"],
            correctAnswer: "läkarintyg",
            explanation: "I Sverige har man rätt till sjuklön från arbetsgivaren upp till 7 dagar utan läkarintyg; från dag 8 krävs läkarintyg."
          },
          {
            id: "sv-u1-l6-q8",
            type: "matching",
            prompt: "Koppla begreppen kring sjukdom och frånvaro till deras innebörd:",
            pairs: [
              { native: "Karensavdrag", english: "Avdrag från sjuklönen för den första sjukdagen (f.d. karensdag)", left: "Karensavdrag", right: "Avdrag från sjuklönen för den första sjukdagen (f.d. karensdag)" },
              { native: "Sjuklön", english: "Ersättning (80 %) betald av arbetsgivaren dag 1–14", left: "Sjuklön", right: "Ersättning (80 %) betald av arbetsgivaren dag 1–14" },
              { native: "Sjukpenning", english: "Ersättning utbetald av Försäkringskassan från dag 15", left: "Sjukpenning", right: "Ersättning utbetald av Försäkringskassan från dag 15" },
              { native: "Friskanmälan", english: "Meddelande till chefen när man är frisk och återgår i tjänst", left: "Friskanmälan", right: "Meddelande till chefen när man är frisk och återgår i tjänst" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l7",
        title: "Lesson 2.3: Swedish Welfare Institutions & Lifelong Learning",
        description: "Försäkringskassan, föräldrapenning, VAB (vård av barn), SeQF-ramverket och s-passiv i institutionell text.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l7-q1",
            type: "multiple_choice",
            prompt: "Vad innebär begreppet 'VAB' (vård av sjukt barn) i det svenska välfärdssystemet?",
            options: [
              "Att föräldrar har lagstadgad rätt att stanna hemma från jobbet med tillfällig föräldrapenning från Försäkringskassan när barnet är sjukt",
              "En extra semestervecka varje vår",
              "Gratis leksaker från kommunen",
              "Att barnet måste byta förskola"
            ],
            correctAnswer: "Att föräldrar har lagstadgad rätt att stanna hemma från jobbet med tillfällig föräldrapenning från Försäkringskassan när barnet är sjukt",
            explanation: "VAB (vård av barn) ger föräldrar ca 80 % av inkomsten via Försäkringskassan vid barns sjukdom upp till 12 års ålder."
          },
          {
            id: "sv-u1-l7-q2",
            type: "fill_blank",
            sentence: "Ansökan om föräldrapenning ___ enklast digitalt via Försäkringskassans e-tjänst med BankID.",
            missingWord: "lämnas",
            options: ["lämnas", "lämna", "lämnat", "lämnade"],
            correctAnswer: "lämnas",
            explanation: "S-passiv i presens: 'ansökan lämnas' (the application is submitted)."
          },
          {
            id: "sv-u1-l7-q3",
            type: "scramble",
            prompt: "Ordna meningen om hur beslut fattas hos myndigheter:",
            tokens: ["Beslutet", "skickas", "till", "din", "digitala", "brevlåda", "Kivra."],
            correctTokens: ["Beslutet", "skickas", "till", "din", "digitala", "brevlåda", "Kivra."],
            explanation: "Passiv konstruktion med s-passiv 'skickas' följt av prepositionellt objekt."
          },
          {
            id: "sv-u1-l7-q4",
            type: "matching",
            prompt: "Para ihop välfärdsförmånerna med deras målgrupp:",
            pairs: [
              { native: "Barnbidrag", english: "Generellt månatligt bidrag till alla barn upp till 16 år", left: "Barnbidrag", right: "Generellt månatligt bidrag till alla barn upp till 16 år" },
              { native: "Bostadsbidrag", english: "Behovsprövat stöd för barnfamiljer och unga med låg inkomst", left: "Bostadsbidrag", right: "Behovsprövat stöd för barnfamiljer och unga med låg inkomst" },
              { native: "Föräldrapenning", english: "Ersättning i 480 dagar per barn för att vara hemma med spädbarn", left: "Föräldrapenning", right: "Ersättning i 480 dagar per barn för att vara hemma med spädbarn" },
              { native: "CSN (studiemedel)", english: "Statligt bidrag och fördelaktigt lån för högskole- och komvuxstudier", left: "CSN (studiemedel)", right: "Statligt bidrag och fördelaktigt lån för högskole- och komvuxstudier" }
            ]
          },
          {
            id: "sv-u1-l7-q5",
            type: "multiple_choice",
            prompt: "Vad är SeQF (Sveriges referensram för kvalifikationer)?",
            options: [
              "En nationell åttanivåers skala kopplad till EQF som synliggör och jämför kunskaper från SFI till doktorsexamen",
              "Ett hemligt militärt lösenord",
              "Ett dataspel för skolungdomar",
              "Ett nytt bilmärke från Göteborg"
            ],
            correctAnswer: "En nationell åttanivåers skala kopplad till EQF som synliggör och jämför kunskaper från SFI till doktorsexamen",
            explanation: "SeQF speglar den europeiska EQF-modellen och klassificerar kvalifikationer på nivå 1 (SFI B) till nivå 8 (forskarutbildning)."
          },
          {
            id: "sv-u1-l7-q6",
            type: "audio_listen",
            prompt: "Lyssna på handläggaren från Försäkringskassan och identifiera beslutet:",
            audioText: "Ditt ärende har nu handlagts och beslutet är godkänt. Ersättningen för vård av barn kommer att betalas ut till ditt bankkonto den tjugofemte denna månad.",
            options: [
              "VAB-ärendet är godkänt och betalas ut den 25:e",
              "Ansökan avslogs på grund av bristande underlag",
              "Utbetalningen sker i kontanter på postkontoret",
              "Ärendet har skickats till Skatteverket för granskning"
            ],
            correctAnswer: "VAB-ärendet är godkänt och betalas ut den 25:e",
            explanation: "Handläggaren bekräftar att ärendet godkänts och att utbetalning sker den 25:e."
          },
          {
            id: "sv-u1-l7-q7",
            type: "fill_blank",
            sentence: "Kvinnan, ___ barn var sjukt, ansökte om tillfällig föräldrapenning.",
            missingWord: "vars",
            options: ["vars", "som", "där", "vilket"],
            correctAnswer: "vars",
            explanation: "Genitivt relativpronomen: 'vars' (whose): 'kvinnan, vars barn...'."
          },
          {
            id: "sv-u1-l7-q8",
            type: "matching",
            prompt: "Koppla aktiva satser till deras s-passiva motsvarigheter:",
            pairs: [
              { native: "Läkaren undersöker patienten.", english: "Patienten undersöks av läkaren.", left: "Läkaren undersöker patienten.", right: "Patienten undersöks av läkaren." },
              { native: "Myndigheten fattade beslutet.", english: "Beslutet fattades av myndigheten.", left: "Myndigheten fattade beslutet.", right: "Beslutet fattades av myndigheten." },
              { native: "Arbetsgivaren betalar lönen.", english: "Lönen betalas av arbetsgivaren.", left: "Arbetsgivaren betalar lönen.", right: "Lönen betalas av arbetsgivaren." },
              { native: "Vi bygger ett nytt sjukhus.", english: "Ett nytt sjukhus byggs.", left: "Vi bygger ett nytt sjukhus.", right: "Ett nytt sjukhus byggs." }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l8",
        title: "Lesson 2.4: SFI Course D Standard National Examination",
        description: "Nationella provet i SFI Kurs D (SeQF 3 / CEFR B1). Formell skriftlig produktion (reklamation, insändare, argumenterande brev) och muntlig interaktion.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "sv-u1-l8-q1",
            type: "multiple_choice",
            prompt: "Vilken texttyp är vanligast på Skrivdelen i nationella provet för SFI Kurs D?",
            options: [
              "Formellt brev (klagobrev/reklamation, ansökan) eller en argumenterande insändare till en lokaltidning",
              "En kriminalroman på 300 sidor",
              "Ett SMS med bara smileys och förkortningar",
              "En teknisk ritning av en bilmotor"
            ],
            correctAnswer: "Formellt brev (klagobrev/reklamation, ansökan) eller en argumenterande insändare till en lokaltidning",
            explanation: "Kurs D prövar förmågan att argumentera, motivera sin åsikt och anpassa språket till mottagaren i formella sammanhang."
          },
          {
            id: "sv-u1-l8-q2",
            type: "fill_blank",
            sentence: "Jag skriver till er för att ___ på en felaktig faktura som jag mottog i fredags.",
            missingWord: "reklamera",
            options: ["reklamera", "reklamerade", "reklamation", "reklamerar"],
            correctAnswer: "reklamera",
            explanation: "Efter preposition + att ('för att') står verbet i infinitiv: 'för att reklamera'."
          },
          {
            id: "sv-u1-l8-q3",
            type: "scramble",
            prompt: "Ordna den formella inledningen på en insändare till tidningen:",
            tokens: ["Jag", "anser", "att", "busstrafiken", "i", "kommunen", "måste", "förbättras."],
            correctTokens: ["Jag", "anser", "att", "busstrafiken", "i", "kommunen", "måste", "förbättras."],
            explanation: "'Jag anser att...' är en utmärkt tesformulering i en argumenterande text."
          },
          {
            id: "sv-u1-l8-q4",
            type: "matching",
            prompt: "Para ihop argumenterande textbindare med deras funktion:",
            pairs: [
              { native: "För det första / För det andra", english: "Strukturerar och ordnar argument i nummerföljd", left: "För det första / För det andra", right: "Strukturerar och ordnar argument i nummerföljd" },
              { native: "Dessutom / Ytterligare en aspekt är", english: "Lägger till ytterligare ett stödjande argument", left: "Dessutom / Ytterligare en aspekt är", right: "Lägger till ytterligare ett stödjande argument" },
              { native: "Å ena sidan... å andra sidan", english: "Belyser en fråga från två kontrasterande perspektiv", left: "Å ena sidan... å andra sidan", right: "Belyser en fråga från två kontrasterande perspektiv" },
              { native: "Sammanfattningsvis vill jag betona", english: "Avrundar och förstärker huvudtesen i slutsatsen", left: "Sammanfattningsvis vill jag betona", right: "Avrundar och förstärker huvudtesen i slutsatsen" }
            ]
          },
          {
            id: "sv-u1-l8-q5",
            type: "multiple_choice",
            prompt: "Hur bedöms den muntliga delen (delprov Tala) i SFI Kurs D?",
            options: [
              "Eleven samtalar och diskuterar i par med en klasskamrat utifrån ett givet ämne, med fokus på flyt, ordförråd och interaktion",
              "Eleven läser upp en telefonkatalog utantill",
              "Endast felfri grammatik utan minsta brytning godkänns",
              "Läraren pratar hela tiden och eleven nickar bara"
            ],
            correctAnswer: "Eleven samtalar och diskuterar i par med en klasskamrat utifrån ett givet ämne, med fokus på flyt, ordförråd och interaktion",
            explanation: "Skolverkets bedömningsmatris betonar förmågan att föra samtalet framåt, ställa följdfrågor och motivera ståndpunkter."
          },
          {
            id: "sv-u1-l8-q6",
            type: "audio_listen",
            prompt: "Lyssna på provledarens instruktion och notera skrivtiden:",
            audioText: "Välkomna till delprov Skriva i SFI Kurs D. Ni har sammanlagt två timmar på er att läsa instruktionen, skriva ert textutkast och renskriva den slutliga texten.",
            options: [
              "Skrivtiden är 2 timmar (120 minuter)",
              "Skrivtiden är 15 minuter",
              "Provet pågår i ett dygn",
              "Det finns ingen tidsbegränsning"
            ],
            correctAnswer: "Skrivtiden är 2 timmar (120 minuter)",
            explanation: "Provledaren anger den officiella provtiden på 2 timmar."
          },
          {
            id: "sv-u1-l8-q7",
            type: "fill_blank",
            sentence: "Avslutningsvis vill jag be er att ___ felet snarast möjligt.",
            missingWord: "åtgärda",
            options: ["åtgärda", "åtgärdade", "åtgärdat", "åtgärder"],
            correctAnswer: "åtgärda",
            explanation: "Infinitiv efter 'att': 'att åtgärda felet' (to rectify the error)."
          },
          {
            id: "sv-u1-l8-q8",
            type: "matching",
            prompt: "Koppla bedömningskriterierna från Skolverkets matris till deras innebörd:",
            pairs: [
              { native: "Kommunikativ funktion", english: "Passar texten till syftet och mottagaren?", left: "Kommunikativ funktion", right: "Passar texten till syftet och mottagaren?" },
              { native: "Textbindning och struktur", english: "Hänger styckena ihop logiskt med sambandsord?", left: "Textbindning och struktur", right: "Hänger styckena ihop logiskt med sambandsord?" },
              { native: "Ordförråd och fraser", english: "Används ett varierat och precist ordförråd?", left: "Ordförråd och fraser", right: "Används ett varierat och precist ordförråd?" },
              { native: "Grammatisk korrekthet", english: "Följs ordföljdsregler, böjningar och tempus?", left: "Grammatisk korrekthet", right: "Följs ordföljdsregler, böjningar och tempus?" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 3: Academic Expression & The National Tisus Exam (SeQF 6 / CEFR C1)
  // =========================================================================
  {
    id: "sv-unit-3",
    unitId: "sv-unit-3",
    unitNumber: 3,
    level: "Track A: Tisus / SVA 3 (SeQF 6 / CEFR C1)",
    title: "Unit 3: Academic Expression, Nuance & The National Tisus Examination",
    subtitle: "Universitetsnivå (Stockholms universitet), nominalisering, hypotaktisk meningsbyggnad, seminariediskussion och 'Sverige i fokus'.",
    icon: "Award",
    color: "#dc2626",
    lessons: [
      {
        id: "sv-u1-l9",
        title: "Lesson 3.1: Academic Synthesis & Macro-Textual Reading",
        description: "Textanalys på avancerad nivå (UHR:s texter). Nominaliseringsstrategier, passiva konstruktioner och komplexa prepositionssyntaxer.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l9-q1",
            type: "multiple_choice",
            prompt: "Vad är Tisus (Test i svenska för universitets- och högskolestudier)?",
            options: [
              "Det nationella behörighetsprovet i svenska på C1-nivå som administreras av Stockholms universitet för högskolestudier och Socialstyrelsens legitimationsyrken",
              "Ett enkelt quiz på internet",
              "Ett körkortsprov på svenska",
              "Ett medborgarskapstest för grundskoleelever"
            ],
            correctAnswer: "Det nationella behörighetsprovet i svenska på C1-nivå som administreras av Stockholms universitet för högskolestudier och Socialstyrelsens legitimationsyrken",
            explanation: "Tisus prövar akademisk svenska på SeQF 6 / C1 och ger formell behörighet för universitetsstudier och legitimation som läkare, sjuksköterska och jurist."
          },
          {
            id: "sv-u1-l9-q2",
            type: "fill_blank",
            sentence: "Den snabba ___ av städerna medförde stora påfrestningar på infrastrukturen (av verbet 'urbanisera').",
            missingWord: "urbaniseringen",
            options: ["urbaniseringen", "urbanisera", "urbaniserad", "urban"],
            correctAnswer: "urbaniseringen",
            explanation: "Nominalisering förvandlar verbala händelseförlopp till abstrakta substantiv med hög informationstäthet: 'urbaniseringen'."
          },
          {
            id: "sv-u1-l9-q3",
            type: "scramble",
            prompt: "Ordna den akademiska syntesen med partikelkonstruktion och nominalisering:",
            tokens: ["Rapporten", "belyser", "sambandet", "mellan", "utbildningsnivå", "och", "livskvalitet."],
            correctTokens: ["Rapporten", "belyser", "sambandet", "mellan", "utbildningsnivå", "och", "livskvalitet."],
            explanation: "Akademiskt skriftspråk kännetecknas av täta nominalfraser och precisa prepositionsattribut."
          },
          {
            id: "sv-u1-l9-q4",
            type: "matching",
            prompt: "Para ihop verb med deras akademiska nominaliseringar:",
            pairs: [
              { native: "Undersöka", english: "Undersökningen / Forskningen", left: "Undersöka", right: "Undersökningen / Forskningen" },
              { native: "Genomföra", english: "Genomförandet / Implementeringen", left: "Genomföra", right: "Genomförandet / Implementeringen" },
              { native: "Utveckla", english: "Utvecklingen / Expansionen", left: "Utveckla", right: "Utvecklingen / Expansionen" },
              { native: "Förändra", english: "Förändringen / Transformationen", left: "Förändra", right: "Förändringen / Transformationen" }
            ]
          },
          {
            id: "sv-u1-l9-q5",
            type: "multiple_choice",
            prompt: "Vad kännetecknar makrotextuell läsning i delprovet Läsförståelse på Tisus?",
            options: [
              "Att snabbt och träffsäkert syntetisera teser, underliggande premisser och retoriska grepp i facktexter och samhällsdebatter",
              "Att översätta varje enskilt ord med ordbok",
              "Att bara läsa rubrikerna på första sidan",
              "Att räkna hur många punkter det finns i artikeln"
            ],
            correctAnswer: "Att snabbt och träffsäkert syntetisera teser, underliggande premisser och retoriska grepp i facktexter och samhällsdebatter",
            explanation: "Tisus läsförståelse testar avancerad förståelse av sakprosa och debattartiklar på universitetsnivå under hård tidspress."
          },
          {
            id: "sv-u1-l9-q6",
            type: "audio_listen",
            prompt: "Lyssna på föreläsaren och identifiera kärnan i den demografiska utmaningen:",
            audioText: "Sveriges åldrande befolkning i kombination med urbaniseringen ställer kommunerna inför exceptionella utmaningar när det gäller välfärdens långsiktiga finansiering.",
            options: [
              "En åldrande befolkning och urbanisering utmanar välfärdens finansiering",
              "Befolkningen minskar drastiskt i alla storstäder",
              "Universiteten planerar att avskaffa alla examina",
              "Kommunerna har överskott på arbetskraft"
            ],
            correctAnswer: "En åldrande befolkning och urbanisering utmanar välfärdens finansiering",
            explanation: "Föreläsaren formulerar sambandet mellan demografi, urbanisering och kommunal välfärdsfinansiering."
          },
          {
            id: "sv-u1-l9-q7",
            type: "fill_blank",
            sentence: "Forskarna ställde sig tveksamma ___ studiens metodologiska validitet.",
            missingWord: "till",
            options: ["till", "på", "om", "för"],
            correctAnswer: "till",
            explanation: "Adjektivet 'tveksam' styr prepositionen 'till': 'tveksam till något'."
          },
          {
            id: "sv-u1-l9-q8",
            type: "matching",
            prompt: "Koppla de akademiska sambandsorden till deras diskursfunktion:",
            pairs: [
              { native: "Följaktligen / Således", english: "Logisk slutsats och konklusion", left: "Följaktligen / Således", right: "Logisk slutsats och konklusion" },
              { native: "Icke desto mindre", english: "Starkt medgivande och motargument (likväl)", left: "Icke desto mindre", right: "Starkt medgivande och motargument (likväl)" },
              { native: "I synnerhet / Framför allt", english: "Precision och särskilt framhävande", left: "I synnerhet / Framför allt", right: "Precision och särskilt framhävande" },
              { native: "Vad beträffar / Rörande", english: "Temaväxling och fokusering", left: "Vad beträffar / Rörande", right: "Temaväxling och fokusering" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l10",
        title: "Lesson 3.2: Argumentative Discursive Writing",
        description: "Författande av akademiska essäer för Tisus Skriftlig produktion (minst 400 ord). Hypotesprövning, retorisk balans och nyanserade bindeord.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l10-q1",
            type: "multiple_choice",
            prompt: "Vilka formkrav gäller för delprovet 'Skriftlig färdighet' på Tisus?",
            options: [
              "Skriva en sammanhängande, välstrukturerad argumenterande eller utredande text på minst 400 ord utifrån ett givet bakgrundsmaterial",
              "Skriva en dikt på rimmad hexameter",
              "Skriva tre korta vykort till vänner",
              "Kopiera texten ordagrant utan egna formuleringar"
            ],
            correctAnswer: "Skriva en sammanhängande, välstrukturerad argumenterande eller utredande text på minst 400 ord utifrån ett givet bakgrundsmaterial",
            explanation: "Tisus skriftliga delprov kräver minst 400 ord med stringent styckeindelning, nyanserat ordförråd och korrekt meningsbyggnad."
          },
          {
            id: "sv-u1-l10-q2",
            type: "fill_blank",
            sentence: "___ reformen genomfördes med goda intentioner, uteblev de förväntade resultaten.",
            missingWord: "Trots att",
            options: ["Trots att", "Eftersom", "Därför att", "Så att"],
            correctAnswer: "Trots att",
            explanation: "'Trots att' är en medgivande konjunktion som ställer intentionen mot det uteblivna resultatet."
          },
          {
            id: "sv-u1-l10-q3",
            type: "scramble",
            prompt: "Ordna den akademiska invändningsfrasen i en vetenskaplig debatt:",
            tokens: ["Mot", "detta", "kan", "dock", "invändas", "att", "kostnaderna", "är", "höga."],
            correctTokens: ["Mot", "detta", "kan", "dock", "invändas", "att", "kostnaderna", "är", "höga."],
            explanation: "Inledande prepositionellt led följt av finita hjälpverbet 'kan', adverbialet 'dock' och passivt infinitiv 'invändas'."
          },
          {
            id: "sv-u1-l10-q4",
            type: "matching",
            prompt: "Para ihop retoriska stilfigurer med deras funktion i en akademisk essä:",
            pairs: [
              { native: "Antites", english: "Ställer två kontrasterande idéer mot varandra för skärpa", left: "Antites", right: "Ställer två kontrasterande idéer mot varandra för skärpa" },
              { native: "Retorisk fråga", english: "En fråga som inte kräver svar men väcker eftertanke", left: "Retorisk fråga", right: "En fråga som inte kräver svar men väcker eftertanke" },
              { native: "Treklingande upprepning (Trikolon)", english: "Tre parallella led som bygger upp rytm och tyngd", left: "Treklingande upprepning (Trikolon)", right: "Tre parallella led som bygger upp rytm och tyngd" },
              { native: "Koncession", english: "Erkänner motståndarens poäng innan den vederläggs", left: "Koncession", right: "Erkänner motståndarens poäng innan den vederläggs" }
            ]
          },
          {
            id: "sv-u1-l10-q5",
            type: "multiple_choice",
            prompt: "Hur upprätthålls objektivitet och akademisk ton i en text på C1-nivå?",
            options: [
              "Genom att undvika talspråkliga uttryck, använda sakliga argument, garderingar (modalitet) och källkritiska referenser",
              "Genom att skriva 'jag tycker' i varje mening",
              "Genom att använda så många utropstecken som möjligt",
              "Genom att skriva i versaler för att övertyga"
            ],
            correctAnswer: "Genom att undvika talspråkliga uttryck, använda sakliga argument, garderingar (modalitet) och källkritiska referenser",
            explanation: "Akademisk stil undviker emfatiska personliga tyckanden till förmån för sakliga belägg och nyanserade analyser."
          },
          {
            id: "sv-u1-l10-q6",
            type: "audio_listen",
            prompt: "Lyssna på essäns slutsats och notera rekommendationen:",
            audioText: "Sammanfattningsvis talar övervägande skäl för att en omställning till cirkulär ekonomi inte enbart är en ekologisk nödvändighet utan jämväl en ekonomisk möjlighet för svensk industri.",
            options: [
              "Cirkulär ekonomi är både en ekologisk nödvändighet och en ekonomisk möjlighet",
              "Cirkulär ekonomi är alldeles för dyr och bör avbrytas",
              "Industrin i Sverige bör flytta utomlands",
              "Ekologi och ekonomi kan aldrig förenas"
            ],
            correctAnswer: "Cirkulär ekonomi är både en ekologisk nödvändighet och en ekonomisk möjlighet",
            explanation: "Slutsatsen sammanför det ekologiska och det ekonomiska perspektivet i en balanserad syntes."
          },
          {
            id: "sv-u1-l10-q7",
            type: "fill_blank",
            sentence: "Resultatet av undersökningen bör emellertid tolkas med viss ___.",
            missingWord: "försiktighet",
            options: ["försiktighet", "glädje", "ilska", "brådska"],
            correctAnswer: "försiktighet",
            explanation: "'Tolkas med försiktighet' är en standardmässig akademisk gardering (hedging) vid slutsatser."
          },
          {
            id: "sv-u1-l10-q8",
            type: "matching",
            prompt: "Koppla talspråkliga ord till deras skriftspråkliga akademiska synonymer:",
            pairs: [
              { native: "Kolla", english: "Granska / Undersöka", left: "Kolla", right: "Granska / Undersöka" },
              { native: "Fatta", english: "Begripa / Förstå", left: "Fatta", right: "Begripa / Förstå" },
              { native: "Grej / Sak", english: "Aspekt / Företeelse / Fenomen", left: "Grej / Sak", right: "Aspekt / Företeelse / Fenomen" },
              { native: "Jobba med", english: "Bedriva / Ägna sig åt", left: "Jobba med", right: "Bedriva / Ägna sig åt" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l11",
        title: "Lesson 3.3: Structured Advanced Seminars",
        description: "Muntlig interaktion på Tisus (Pratdelen). Den svenska välfärdsmodellen, försvara ståndpunkter, akademisk turtagning och modala nyanser.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "sv-u1-l11-q1",
            type: "multiple_choice",
            prompt: "Hur går det muntliga delprovet (Prat) till vid den officiella Tisus-examinationen?",
            options: [
              "Ett individuellt samtal och en diskussion med två examinatorer utifrån ett avancerat samhälls- eller kulturämne med förberedelsetid",
              "Ett sångprov där man sjunger Sveriges nationalsång",
              "Ett skriftligt grammatiktest med flervalsfrågor",
              "Ett samtal där man endast svarar ja eller nej"
            ],
            correctAnswer: "Ett individuellt samtal och en diskussion med två examinatorer utifrån ett avancerat samhälls- eller kulturämne med förberedelsetid",
            explanation: "På Tisus muntliga prov bedömer två examinatorer kandidatens förmåga att spontant och nyanserat utveckla och fördjupa resonemang."
          },
          {
            id: "sv-u1-l11-q2",
            type: "fill_blank",
            sentence: "Får jag be om ordet och göra ett kort ___ till det som nyss sades?",
            missingWord: "inlägg",
            options: ["inlägg", "brev", "samtal", "hopp"],
            correctAnswer: "inlägg",
            explanation: "I akademiska seminarier ber man om ordet för att göra 'ett inlägg' i debatten."
          },
          {
            id: "sv-u1-l11-q3",
            type: "scramble",
            prompt: "Ordna den eleganta frasen för att invända artigt i ett seminarium:",
            tokens: ["Jag", "delar", "inte", "helt", "och", "hållet", "den", "uppfattningen."],
            correctTokens: ["Jag", "delar", "inte", "helt", "och", "hållet", "den", "uppfattningen."],
            explanation: "Diplomatiskt akademiskt bemötande av en motståndares ståndpunkt."
          },
          {
            id: "sv-u1-l11-q4",
            type: "matching",
            prompt: "Para ihop begrepp ur den svenska samhällsmodellen med deras innebörd:",
            pairs: [
              { native: "Den svenska modellen", english: "Parterna på arbetsmarknaden sluter kollektivavtal utan statlig lagstiftning om minimilöner", left: "Den svenska modellen", right: "Parterna på arbetsmarknaden sluter kollektivavtal utan statlig lagstiftning om minimilöner" },
              { native: "Folkhemmet", english: "Den politiska visionen om ett jämlikt samhälle byggt på trygghet och samförstånd", left: "Folkhemmet", right: "Den politiska visionen om ett jämlikt samhälle byggt på trygghet och samförstånd" },
              { native: "Offentlighetsprincipen", english: "Rätten för alla medborgare att ta del av allmänna handlingar hos myndigheter", left: "Offentlighetsprincipen", right: "Rätten för alla medborgare att ta del av allmänna handlingar hos myndigheter" },
              { native: "Allemansrätten", english: "Den unika lagstadgade rätten att vistas fritt i naturen under ansvar ('inte störa, inte förstöra')", left: "Allemansrätten", right: "Den unika lagstadgade rätten att vistas fritt i naturen under ansvar ('inte störa, inte förstöra')" }
            ]
          },
          {
            id: "sv-u1-l11-q5",
            type: "multiple_choice",
            prompt: "Vad innebär 'turtagning' i ett seminarium på C1-nivå?",
            options: [
              "Förmågan att smidigt ta ordet, bjuda in andra och bygga vidare på andras inlägg utan att avbryta bryskt",
              "Att man måste vänta på sin tur i 48 timmar",
              "Att bara den äldsta deltagaren får tala",
              "Att man byter stol efter varje inlägg"
            ],
            correctAnswer: "Förmågan att smidigt ta ordet, bjuda in andra och bygga vidare på andras inlägg utan att avbryta bryskt",
            explanation: "Smidig samtalsdynamik, aktivt lyssnande och följsam turtagning premieras högt i Tisus matris."
          },
          {
            id: "sv-u1-l11-q6",
            type: "audio_listen",
            prompt: "Lyssna på examinatorns fråga och välj det bäst strukturerade svaret:",
            audioText: "Hur anser du att digitaliseringen påverkar det personliga mötet i framtidens hälso- och sjukvård?",
            options: [
              "Kandidaten belyser både tillgänglighetsvinster med digitala vårdmöten och risker för äldre patienter",
              "Kandidaten säger bara att datorer är bra",
              "Kandidaten byter ämne och pratar om fotboll",
              "Kandidaten förblir tyst"
            ],
            correctAnswer: "Kandidaten belyser både tillgänglighetsvinster med digitala vårdmöten och risker för äldre patienter",
            explanation: "Ett godkänt Tisus-svar väger för- och nackdelar mot varandra på ett reflekterat sätt."
          },
          {
            id: "sv-u1-l11-q7",
            type: "fill_blank",
            sentence: "Låt mig få ___ detta med ett konkret exempel från den senaste rapporten.",
            missingWord: "illustrera",
            options: ["illustrera", "rita", "måla", "skrika"],
            correctAnswer: "illustrera",
            explanation: "Att 'illustrera' ett argument innebär att exemplifiera och åskådliggöra med fakta."
          },
          {
            id: "sv-u1-l11-q8",
            type: "matching",
            prompt: "Koppla seminariefraser till deras funktion i samtalet:",
            pairs: [
              { native: "Om jag förstår dig rätt menar du att...", english: "Spegling och kontroll av samtalspartnerns ståndpunkt", left: "Om jag förstår dig rätt menar du att...", right: "Spegling och kontroll av samtalspartnerns ståndpunkt" },
              { native: "Det ligger mycket i det du säger, men...", english: "Delvis medhåll följt av invändning", left: "Det ligger mycket i det du säger, men...", right: "Delvis medhåll följt av invändning" },
              { native: "För att återknyta till den ursprungliga frågan...", english: "Styr diskussionen tillbaka till huvudspåret", left: "För att återknyta till den ursprungliga frågan...", right: "Styr diskussionen tillbaka till huvudspåret" },
              { native: "Hur ställer du dig till påståendet att...", english: "Inbjudan av motparten till fördjupat resonemang", left: "Hur ställer du dig till påståendet att...", right: "Inbjudan av motparten till fördjupat resonemang" }
            ]
          }
        ]
      },

      {
        id: "sv-u1-l12",
        title: "Lesson 3.4: Proctored Tisus Simulation",
        description: "Fullskalig simulering av Tisus (Läsa, Skriva och Tala) kalibrerad efter Stockholms universitets bedömningsmatris och Socialstyrelsens krav.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "sv-u1-l12-q1",
            type: "multiple_choice",
            prompt: "Vilket betygssystem tillämpas vid Tisus-examinationen vid Stockholms universitet?",
            options: [
              "Endast betygen 'Godkänd' (G) eller 'Underkänd' (U) på samtliga tre delprov för slutgiltigt certifikat",
              "Betygsskalan A till F som i gymnasiet",
              "Procentpoäng från 0 till 100",
              "Man får guld-, silver- eller bronsmedalj"
            ],
            correctAnswer: "Endast betygen 'Godkänd' (G) eller 'Underkänd' (U) på samtliga tre delprov för slutgiltigt certifikat",
            explanation: "Tisus tillämpar enbart tvågradig skala (Godkänd/Underkänd). Samtliga tre delprov måste vara godkända för intyg."
          },
          {
            id: "sv-u1-l12-q2",
            type: "fill_blank",
            sentence: "För att erhålla läkarlegitimation kräver Socialstyrelsen godkänt resultat på Tisus eller Svenska som andraspråk ___.",
            missingWord: "3",
            options: ["3", "1", "2", "grundläggande"],
            correctAnswer: "3",
            explanation: "Kravet för Socialstyrelsens yrkeslegitimation är C1-nivå, motsvarande Tisus eller SVA 3."
          },
          {
            id: "sv-u1-l12-q3",
            type: "scramble",
            prompt: "Ordna den sammanfattande slutsatsen i en Tisus-uppsats:",
            tokens: ["Avslutningsvis", "kan", "konstateras", "att", "frågan", "kräver", "ytterligare", "belysning."],
            correctTokens: ["Avslutningsvis", "kan", "konstateras", "att", "frågan", "kräver", "ytterligare", "belysning."],
            explanation: "Slutsats med opersonligt s-passiv: 'Avslutningsvis kan konstateras att...'."
          },
          {
            id: "sv-u1-l12-q4",
            type: "matching",
            prompt: "Para ihop delproven på Tisus med deras respektive provtid och omfattning:",
            pairs: [
              { native: "Delprov 1: Läsförståelse", english: "75 minuter (omfattande sakprosa och flervalsfrågor)", left: "Delprov 1: Läsförståelse", right: "75 minuter (omfattande sakprosa och flervalsfrågor)" },
              { native: "Delprov 2: Skriftlig färdighet", english: "150 minuter (akademisk essä på minst 400 ord)", left: "Delprov 2: Skriftlig färdighet", right: "150 minuter (akademisk essä på minst 400 ord)" },
              { native: "Delprov 3: Muntlig färdighet", english: "Ca 30 minuter (individuell presentation och samtal)", left: "Delprov 3: Muntlig färdighet", right: "Ca 30 minuter (individuell presentation och samtal)" },
              { native: "Restprov", english: "Möjlighet att göra om ett underkänt delprov inom ett år", left: "Restprov", right: "Möjlighet att göra om ett underkänt delprov inom ett år" }
            ]
          },
          {
            id: "sv-u1-l12-q5",
            type: "multiple_choice",
            prompt: "Vad händer om en kandidat blir godkänd på två delprov men underkänd på ett delprov på Tisus?",
            options: [
              "Kandidaten har rätt att genomföra ett så kallat 'restprov' på det underkända delprovet inom tolv månader",
              "Alla delprov stryks för all framtid",
              "Kandidaten stängs av från alla universitet i Sverige",
              "Man måste gå om grundskolan från årskurs 1"
            ],
            correctAnswer: "Kandidaten har rätt att genomföra ett så kallat 'restprov' på det underkända delprovet inom tolv månader",
            explanation: "Tisus medger restprov för det enskilda delprov som inte nådde godkänd nivå inom ett år från ordinarie provtillfälle."
          },
          {
            id: "sv-u1-l12-q6",
            type: "audio_listen",
            prompt: "Lyssna på bedömningen från betygsnämnden vid Tisus:",
            audioText: "Efter samlad bedömning finner examinatorerna att kandidatens skriftliga produktion uppvisar erforderlig språklig stringens, precision och stilistisk mognad för betyget Godkänd.",
            options: [
              "Kandidaten har erhållit betyget Godkänd på Tisus skriftliga delprov",
              "Kandidaten måste skriva om uppsatsen omedelbart",
              "Texten var för kort och saknade innehåll",
              "Examinatorerna kunde inte enas om ett beslut"
            ],
            correctAnswer: "Kandidaten har erhållit betyget Godkänd på Tisus skriftliga delprov",
            explanation: "Beskedet intygar att uppsatsen uppfyller kriterierna för betyget Godkänd."
          },
          {
            id: "sv-u1-l12-q7",
            type: "fill_blank",
            sentence: "Tisus-intyget öppnar vägen för antagning till alla universitet och ___ i Sverige.",
            missingWord: "högskolor",
            options: ["högskolor", "förskolor", "fabriker", "butiker"],
            correctAnswer: "högskolor",
            explanation: "Tisus ger generell behörighet i svenska för studier vid universitet och högskolor."
          },
          {
            id: "sv-u1-l12-q8",
            type: "matching",
            prompt: "Koppla examensnivåerna i svenska till deras respektive utbildningsmål:",
            pairs: [
              { native: "SFI Kurs D (SeQF 3 / B1)", english: "Basal självständighet i vardag, samhälle och enklare arbetsliv", left: "SFI Kurs D (SeQF 3 / B1)", right: "Basal självständighet i vardag, samhälle och enklare arbetsliv" },
              { native: "SVA 1–2 (SeQF 4–5 / B2)", english: "Gymnasial nivå med god förmåga att uttrycka sig i tal och skrift", left: "SVA 1–2 (SeQF 4–5 / B2)", right: "Gymnasial nivå med god förmåga att uttrycka sig i tal och skrift" },
              { native: "Tisus / SVA 3 (SeQF 6 / C1)", english: "Akademisk nivå för högskolestudier och Socialstyrelsens legitimation", left: "Tisus / SVA 3 (SeQF 6 / C1)", right: "Akademisk nivå för högskolestudier och Socialstyrelsens legitimation" },
              { native: "Modersmålsnivå (C2)", english: "Fullständig idiomatisering och stilistisk virtuositet i alla register", left: "Modersmålsnivå (C2)", right: "Fullständig idiomatisering och stilistisk virtuositet i alla register" }
            ]
          }
        ]
      }
    ]
  }
];
