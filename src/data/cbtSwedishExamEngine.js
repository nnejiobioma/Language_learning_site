// =========================================================================
// CBT & Skolverket / Tisus Dynamic Swedish Examination Engine
// Grounded in official Swedish government, agency, and institutional standards:
// - Skolverket SFI Kurs D (Nationellt prov • SeQF 3 / CEFR B1: Medborgarskap & Arbetsliv)
// - Stockholms universitet & UHR Tisus (SeQF 6 / CEFR C1: Universitetsbehörighet & Socialstyrelsen)
// Guarantees a BRAND NEW set of test questions on every attempt for logged-in users!
// =========================================================================

import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

// =========================================================================
// 1. POOL SFI KURS D (SKOLVERKET NATIONELLT PROV • CEFR B1)
// =========================================================================
export const swedishSfiDReading = [
  {
    id: "sv-sfid-r-01",
    subtest: "reading",
    title: "Meddelande från Hyresvärden: Stamspolning och Vattenavstängning",
    passage: `BOSTADSBOLAGET MITTHEM — INFORMATION TILL HYRESGÄSTERNA
Bästa hyresgäst,
Onsdagen den 22 november mellan kl. 08:00 och 16:00 kommer fastighetens avloppsstammar att spolas och rengöras för att förebygga framtida vattenskador.
Under denna tid är vattnet i kök och badrum helt avstängt.
Teknikerna måste ha tillträde till samtliga lägenheter. Om du inte är hemma under dagen ber vi dig sätta låset i serviceläge (klockan 10) eller lämna extranyckeln i fastighetskontorets nyckelinkast senast tisdag kl. 17:00.
Underlåtenhet att bereda tillträde kan medföra att du debiteras för en förgäves framkörning.`,
    prompt: "Vad måste hyresgästen göra om man inte kan vara hemma på onsdagen?",
    options: [
      "A) Sätta dörrlåset i serviceläge eller lämna nyckeln i nyckelinkastet",
      "B) Köpa nya vattenrör och installera dem själv",
      "C) Stänga av all elektricitet i fastigheten",
      "D) Flytta till ett hotell under hela veckan på egen bekostnad"
    ],
    correctAnswer: "A) Sätta dörrlåset i serviceläge eller lämna nyckeln i nyckelinkastet",
    explanation: "Informationsbladet anger uttryckligen att hyresgästen ska 'sätta låset i serviceläge (klockan 10) eller lämna extranyckeln i fastighetskontorets nyckelinkast'."
  },
  {
    id: "sv-sfid-r-02",
    subtest: "reading",
    title: "Arbetsmiljöverkets Föreskrifter: Skyddsombudets Befogenheter",
    passage: `ARBETSMILJÖVERKET — SAMVERKAN PÅ ARBETSPLATSEN
På varje arbetsplats med minst fem anställda ska det finnas ett eller flera skyddsombud (arbetsmiljöombud) som utses av de anställda eller fackförbundet.
Skyddsombudet har laglig rätt att delta vid planering av nya lokaler, förändrade arbetsprocesser och riskbedömningar.
Om ett arbete innebär omedelbar och allvarlig fara för arbetstagares liv eller hälsa och arbetsgivaren inte rättar till bristen, har skyddsombudet rätt att med omedelbar verkan avbryta arbetet (skyddsombudsstopp) i avvaktan på Arbetsmiljöverkets ställningstagande.`,
    prompt: "När har ett skyddsombud rätt att lägga ett så kallat 'skyddsombudsstopp'?",
    options: [
      "A) När det föreligger omedelbar och allvarlig fara för de anställdas liv eller hälsa",
      "B) När lunchen i personalrestaurangen är försenad",
      "C) Varje fredag eftermiddag efter klockan 15:00",
      "D) Endast om chefen skriftligen godkänner stoppet i förväg"
    ],
    correctAnswer: "A) När det föreligger omedelbar och allvarlig fara för de anställdas liv eller hälsa",
    explanation: "Lagen ger skyddsombudet rätt att avbryta arbetet om det innebär 'omedelbar och allvarlig fara för arbetstagares liv eller hälsa'."
  },
  {
    id: "sv-sfid-r-03",
    subtest: "reading",
    title: "Försäkringskassans Riktlinjer: Vård av barn (VAB)",
    passage: `FÖRSÄKRINGSKASSAN — ERSÄTTNING FÖR TILLFÄLLIG FÖRÄLDRAPENNING (VAB)
När du stannar hemma från jobbet eller går miste om a-kassa för att vårda ett sjukt barn kan du få tillfällig föräldrapenning (vab).
Ersättningen motsvarar knappt 80 procent av din vanliga inkomst upp till ett lagstadgat maxbelopp.
Du ansöker enkelt digitalt med BankID på Mina sidor. Om barnet är sjukt i mer än 7 kalenderdagar krävs ett läkarintyg som styrker sjukdomen från och med dag 8.
Glöm inte att anmäla frånvaron till din arbetsgivare samma morgon du stannar hemma.`,
    prompt: "Från vilken dag kräver Försäkringskassan läkarintyg vid vård av sjukt barn?",
    options: [
      "A) Från och med den åttonde kalenderdagen",
      "B) Redan från första timmen barnet nyser",
      "C) Först efter trettio dagars sammanhängande frånvaro",
      "D) Läkarintyg behövs aldrig för barn under 12 år"
    ],
    correctAnswer: "A) Från och med den åttonde kalenderdagen",
    explanation: "Riktlinjerna klargör: 'Om barnet är sjukt i mer än 7 kalenderdagar krävs ett läkarintyg... från och med dag 8'."
  },
  {
    id: "sv-sfid-r-04",
    subtest: "reading",
    title: "Trafikförvaltningen SL: Regler för Ombordstigning och Cyklar",
    passage: `SL KUNDSERVICE — RESEVILLKOR I STOCKHOLMS KOLLEKTIVTRAFIK
Resenärer är skyldiga att ha en giltig och aktiverad biljett innan man kliver ombord på buss eller passerar spärrlinjen till tunnelbana och pendeltåg.
Cyklar får medtas kostnadsfritt på pendeltåg och Saltsjöbanan under lågtrafiktid.
Under rusningstid (vardagar kl. 06:00–09:00 samt 15:00–18:00) är det av säkerhetsskäl förbjudet att ta med cykel på tågen.
Cyklar får under inga omständigheter medtas i tunnelbanan eller på bussar.`,
    prompt: "Vilken regel gäller för att ta med cykel på pendeltåget i Stockholm?",
    options: [
      "A) Cykel är tillåten utan extra kostnad, men förbjuden under rusningstid på vardagar",
      "B) Cyklar är tillåtna dygnet runt i alla bussar och tunnelbanevagnar",
      "C) Man måste alltid köpa en särskild förstaklassbiljett för cykeln",
      "D) Cyklar får endast tas med om de är packade i en trälåda"
    ],
    correctAnswer: "A) Cykel är tillåten utan extra kostnad, men förbjuden under rusningstid på vardagar",
    explanation: "Villkoren stipulerar att cyklar får tas med gratis under lågtrafik, men är förbjudna under rusningstid (06-09 och 15-18 på vardagar)."
  },
  {
    id: "sv-sfid-r-05",
    subtest: "reading",
    title: "Arbetsförmedlingen: Etableringsprogrammet och Introduktionsjobb",
    passage: `ARBETSFÖRMEDLINGEN — VÄGEN TILL ARBETSMARKNADEN
Etableringsprogrammet vänder sig till nyanlända invandrare som har beviljats uppehållstillstånd i Sverige som flyktingar eller skyddsbehövande.
Programmet kombinerar sfi-studier, samhällsorientering och yrkespraktik under ledning av en personlig etableringshandläggare.
Arbetsgivare som anställer en person via ett introduktionsjobb kan erhålla ett statligt lönebidrag som täcker upp till 80 procent av lönekostnaden, under förutsättning att lön och villkor följer svenskt kollektivavtal.`,
    prompt: "Vilket villkor måste vara uppfyllt för att en arbetsgivare ska få bidrag för introduktionsjobb?",
    options: [
      "A) Lön och anställningsvillkor måste följa svenskt kollektivavtal i branschen",
      "B) Företaget måste ha minst 500 anställda i Sverige",
      "C) Den anställde måste arbeta helt utan lön de första sex månaderna",
      "D) Verksamheten måste bedrivas enbart på engelska"
    ],
    correctAnswer: "A) Lön och anställningsvillkor måste följa svenskt kollektivavtal i branschen",
    explanation: "Bidraget förutsätter att 'lön och villkor följer svenskt kollektivavtal'."
  },
  {
    id: "sv-sfid-r-06",
    subtest: "reading",
    title: "Kollektivavtalets Grundpelare: Den Svenska Modellen",
    passage: `FACKFÖRBUNDET KOMMUNAL — HUR DIN LÖN OCH DINA RÄTTIGHETER BESTÄMS
I Sverige finns det ingen lagstiftad minimilön. I stället sätts lägstalöner, övertidsersättning och ob-tillägg genom förhandlingar mellan arbetsgivarorganisationer och fackförbund i kollektivavtal.
Denna ordning kallas den svenska modellen.
Ett kollektivavtal garanterar också att arbetsgivaren betalar avtalsförsäkringar och tjänstepension, vilket ger en betydligt högre pension och trygghet vid arbetsskador jämfört med grundskyddet.`,
    prompt: "Hur bestäms minimilöner och ersättningar för obekväm arbetstid i Sverige?",
    options: [
      "A) Genom förhandlingar mellan fack och arbetsgivare i kollektivavtal",
      "B) Genom en fast lagstiftad minimilön som Riksdagen beslutar om varje månad",
      "C) Av den enskilde polismästaren i varje kommun",
      "D) Det finns inga fasta regler; varje arbetsgivare bestämmer helt fritt"
    ],
    correctAnswer: "A) Genom förhandlingar mellan fack och arbetsgivare i kollektivavtal",
    explanation: "I den svenska modellen regleras löner och ersättningar via kollektivavtal och inte genom statlig lagstiftning."
  }
];

export const swedishSfiDWriting = [
  {
    id: "sv-sfid-w-01",
    subtest: "writing",
    taskType: "message",
    title: "Uppgift 1: Formellt mejl till arbetsgivaren (Sjukanmälan & Karens)",
    prompt: `Du har blivit hastigt sjuk och kan inte komma till ditt arbete på äldreboendet eller lagret i morgon bitti.
Skriv ett formellt mejl till din chef (Lena) där du:
1. Hälsar artigt och meddelar att du måste stanna hemma på grund av hög feber och hosta.
2. Berättar vilka arbetsuppgifter eller pass som behöver täckas av en vikarie.
3. Informerar om att du avser att återkomma så snart du har konsulterat 1177 eller din vårdcentral.
Skriv cirka 60–80 ord på korrekt svenska med passande hälsnings- och avslutningsfraser.`,
    sampleResponse: `Hej Lena,

Jag vill meddela att jag tyvärr har blivit sjuk med hög feber och kraftig hosta och inte kan arbeta i morgon bitti. 

Mina planerade arbetsuppgifter på förmiddagen omfattar medicinutdelning och dokumentation i journalsystemet, så det vore bra om en vikarie kan kallas in för morgonpasset. Jag har sjukanmält mig i personalsystemet och återkommer till dig så snart jag har rådgjort med vårdcentralen om provtagning.

Vänliga hälsningar,
Samir Al-Mansoor`
  },
  {
    id: "sv-sfid-w-02",
    subtest: "writing",
    taskType: "essay",
    title: "Uppgift 2: Formellt klagobrev till fastighetsägaren (Kall lägenhet)",
    prompt: `Under de senaste två veckorna har elementen i din hyreslägenhet varit kalla trots att utomhustemperaturen ligger under noll grader. Inomhustemperaturen är endast 16 grader.
Skriv ett formellt reklamationsbrev till din hyresvärd (Stadens Fastighets AB) där du:
1. Presenterar dig med namn, adress och lägenhetsnummer.
2. Beskriver problemet detaljerat och hur det påverkar din familjs hälsa och trivsel.
3. Hänvisar till Folkhälsomyndighetens rekommendationer om en lägsta inomhustemperatur på 20 grader.
4. Kräver att en fastighetstekniker undersöker värmesystemet inom 48 timmar samt begär en rimlig hyresnedsättning för perioden.
Skriv cirka 120–160 ord med god disposition, sambandsord (eftersom, därför, emellertid) och formell ton.`,
    sampleResponse: `Till: Kundservice, Stadens Fastighets AB
Datum: 15 november 2026
Ärende: Reklamation gällande otillräcklig inomhustemperatur i lägenhet 1204

Mitt namn är Elena Lindström och jag hyr lägenhet 1204 på Storgatan 14B. Jag skriver till er för att anmäla ett allvarligt fel på värmesystemet i vår fastighet.

Under de senaste två veckorna har elementen i samtliga rum varit kalla. Vi har genomfört regelbundna mätningar mitt i rummet som visar att inomhustemperaturen pendlar mellan 15 och 16 grader Celsius. Enligt Folkhälsomyndighetens allmänna råd ska temperaturen i en bostad inte understiga 20 grader. Kylan i lägenheten har medfört att barnen har blivit förkylda och att vi tvingas sova med ytterkläder på oss.

Jag kräver härmed att en behörig fastighetstekniker undersöker och åtgärdar värmeproblemet inom 48 timmar. Vidare förutsätter jag att vi erhåller en skälig hyresnedsättning för de veckor som bristen har kvarstått.

Jag ser fram emot ert skyndsamma svar.

Med vänlig hälsning,
Elena Lindström
Telefon: 070-123 45 67`
  }
];

export const swedishSfiDListening = [
  {
    id: "sv-sfid-l-01",
    subtest: "listening",
    title: "Rådgivning hos 1177 Vårdguiden",
    audioText: "Välkommen till 1177 Vårdguiden på telefon. För närvarande är det många som ringer oss. Vår genomsnittliga kötid är cirka femton minuter. Om du har symtom på akut livshotande tillstånd, lägg på luren och ring omedelbart 112. För rådgivning om recept och tidsbokning rekommenderar vi att du loggar in med e-legitimation på 1177.se.",
    prompt: "Vad uppmanas en person med ett akut livshotande tillstånd att göra?",
    options: [
      "A) Lägga på luren och genast ringa larmnumret 112",
      "B) Vänta i telefonkön i femton minuter",
      "C) Skicka ett vykort till vårdcentralen",
      "D) Logga in på internetbanken och göra en överföring"
    ],
    correctAnswer: "A) Lägga på luren och genast ringa larmnumret 112",
    explanation: "Telefonsvararen säger tydligt: 'Om du har symtom på akut livshotande tillstånd, lägg på luren och ring omedelbart 112'."
  },
  {
    id: "sv-sfid-l-02",
    subtest: "listening",
    title: "Trafikmeddelande från Sveriges Radio P4",
    audioText: "Trafik P4 meddelar: På grund av ett spårfel mellan Uppsala och Knivsta råder det för närvarande stopp i all tågtrafik mot Stockholm Central. Ersättningsbussar har beställts och beräknas anlända till stationsplanen vid Uppsala Central klockan 08:30. Resenärer uppmanas att räkna med minst 45 minuters längre restid.",
    prompt: "När beräknas ersättningsbussarna anlända till Uppsala Central?",
    options: [
      "A) Klockan 08:30",
      "B) Klockan 12:00 mitt på dagen",
      "C) Först i morgon bitti klockan 06:00",
      "D) Bussarna anländer inte alls utan tågen kör som vanligt"
    ],
    correctAnswer: "A) Klockan 08:30",
    explanation: "Radiomeddelandet anger: 'Ersättningsbussar... beräknas anlända till stationsplanen vid Uppsala Central klockan 08:30'."
  },
  {
    id: "sv-sfid-l-03",
    subtest: "listening",
    title: "Arbetsplatsinformation: Utbildning i Brandsäkerhet",
    audioText: "Hej allihop! Bara en påminnelse om att hela personalstyrkan ska samlas i konferensrum Birka klockan 13:00 i dag för den årliga brandskyddsutbildningen. Räddningstjänsten kommer att visa hur man hanterar pulversläckare och brandfiltar. Närvaron är obligatorisk för samtliga anställda enligt skyddsombudets avtal.",
    prompt: "Vilken utrustning kommer Räddningstjänsten att demonstrera?",
    options: [
      "A) Pulversläckare och brandfiltar",
      "B) Motorsågar och stegbilar",
      "C) Datorer och kassaapparater",
      "D) Kaffebryggare och mikrovågsugnar"
    ],
    correctAnswer: "A) Pulversläckare och brandfiltar",
    explanation: "I talet sägs: 'Räddningstjänsten kommer att visa hur man hanterar pulversläckare och brandfiltar'."
  },
  {
    id: "sv-sfid-l-04",
    subtest: "listening",
    title: "SMHI Väderprognos: Klass 1 Varning för Snöfall",
    audioText: "Det här är SMHI med en vädervarning för norra Svealand och Gävleborgs län. Ett intensivt lågtryck rör sig in österifrån och medför kraftigt snöfall i kombination med frisk nordostlig vind. På öppna vägar kan det bildas höga snödrivor och dålig sikt. Trafikverket avråder från att köra med sommardäck.",
    prompt: "Vad avråder Trafikverket bestämt trafikanterna från att göra?",
    options: [
      "A) Att köra på vägarna med sommardäck",
      "B) Att lyssna på radio under bilfärden",
      "C) Att tanka bilen på bensinmackar",
      "D) Att åka tåg eller kollektivtrafik"
    ],
    correctAnswer: "A) Att köra på vägarna med sommardäck",
    explanation: "Vädermeddelandet avslutas med: 'Trafikverket avråder från att köra med sommardäck'."
  },
  {
    id: "sv-sfid-l-05",
    subtest: "listening",
    title: "Telefonsamtal: Kallelse till Anställningsintervju",
    audioText: "Hej Fatima! Det här är Henrik från ICA Supermarket i Liljeholmen. Vi har läst ditt CV och ditt personliga brev och vill gärna bjuda in dig till en anställningsintervju för tjänsten som butiksmedarbetare. Skulle du kunna komma till butikens personalentré på torsdag klockan tio? Ta gärna med kontaktuppgifter till två referenser.",
    prompt: "Vilka handlingar ber Henrik att Fatima ska ta med sig till intervjun?",
    options: [
      "A) Kontaktuppgifter till två referenser",
      "B) Sitt pass och sitt vigselbevis",
      "C) Ett färskt utdrag från skattekontot i kontanter",
      "D) En låda med nybakade bullar"
    ],
    correctAnswer: "A) Kontaktuppgifter till två referenser",
    explanation: "Henrik säger i slutet av samtalet: 'Ta gärna med kontaktuppgifter till två referenser'."
  },
  {
    id: "sv-sfid-l-06",
    subtest: "listening",
    title: "Information om Förskoleplats från Utbildningsförvaltningen",
    audioText: "God dag. Du har kommit till kontaktcenter för förskola och skola. Er ansökan om förskoleplats för ert barn har nu behandlats. Ni har blivit erbjudna en plats på Förskolan Solstrålen från och med den första februari. Vänligen logga in i e-tjänsten senast den femtonde december för att tacka ja eller nej till erbjudandet.",
    prompt: "Vilket sista datum har vårdnadshavaren på sig att svara på platserbjudandet?",
    options: [
      "A) Senast den femtonde december",
      "B) Senast i morgon bitti före klockan åtta",
      "C) Först den sista mars nästa år",
      "D) Man behöver inte svara alls; platsen bekräftas automatiskt"
    ],
    correctAnswer: "A) Senast den femtonde december",
    explanation: "Handläggaren anger: 'Vänligen logga in i e-tjänsten senast den femtonde december för att tacka ja eller nej'."
  }
];

export const swedishSfiDSpeaking = [
  {
    id: "sv-sfid-s-01",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Muntlig interaktion: Samtal med kollega om semesterplanering",
    instructions: "Du och din kollega (provledaren) arbetar på samma avdelning. Ni har fem veckors semester per år och måste komma överens om vem som ska arbeta under juli månad så att avdelningen inte står tom. Diskutera era önskemål artigt, ge förslag och nå en gemensam kompromiss.",
    prepTimeSeconds: 60,
    speakTimeSeconds: 180,
    guidingQuestions: [
      "Vilka veckor under sommaren skulle du helst vilja vara ledig och varför?",
      "Hur kan ni dela upp ansvaret så att båda blir nöjda?",
      "Vilka artiga uttryck kan du använda (t.ex. 'Skulle det passa dig om...', 'Hur tänker du kring...', 'Kan vi kompromissa så att...')?"
    ]
  },
  {
    id: "sv-sfid-s-02",
    subtest: "speaking",
    taskType: "monologue",
    title: "Individuell presentation: Min yrkesbakgrund och framtidsplaner i Sverige",
    instructions: "Presentera dig själv och din professionella resa för bedömarna. Berätta om din utbildning, vad du har arbetat med tidigare i ditt hemland eller i Sverige, och vilka karriärmål du strävar mot. Tala i cirka 2–3 minuter med sammanhängande meningar och tydlig artikulation.",
    prepTimeSeconds: 90,
    speakTimeSeconds: 150,
    guidingQuestions: [
      "Vad har du för utbildning eller yrkeserfarenhet sedan tidigare?",
      "Vilka styrkor och personliga egenskaper har du nytta av på en svensk arbetsplats?",
      "Vilka steg behöver du ta framöver för att nå ditt drömyrke (t.ex. validering, körkort, yrkeshögskola)?"
    ]
  }
];

// =========================================================================
// 2. POOL TISUS (STOCKHOLMS UNIVERSITET & UHR • CEFR C1)
// =========================================================================
export const swedishTisusReading = [
  {
    id: "sv-tisus-r-01",
    subtest: "reading",
    title: "Akademisk essä: Den Demografiska Utmaningen och Välfärdsmodellens Hållbarhet",
    passage: `DEN SVENSKA VÄLFÄRDSSTATEN VID SKILJEVÄGEN (Utdrag ur Universitetslektor K. Lindbloms analys)
Den klassiska nordiska välfärdsmodellen vilar på principen om generell skattefinansiering och universell tillgång till vård, omsorg och utbildning.
Under de senaste decennierna har emellertid den demografiska försörjningskvoten förskjutits markant: en åldrande befolkning medför ett ökat omsorgsbehov samtidigt som andelen yrkesverksamma i arbetsför ålder minskar proportionellt.
Denna strukturförändring aktualiserar en spänning mellan två motstridiga politiska paradigm.
Å ena sidan förespråkas en höjd pensionsålder kombinerad med ökad digital automatisering och preventiv folkhälsa för att bevara skattebasen.
Å andra sidan varnar samhällsvetare för att ökade inslag av privata avgifter och privata sjukvårdsförsäkringar riskerar att fragmentera systemets universella legitimitet och undergräva den folkliga skatteviljan.`,
    prompt: "Vilket grundläggande strukturellt hot mot den universella välfärdsmodellen belyses i texten?",
    options: [
      "A) En förskjutning i försörjningskvoten där en åldrande befolkning ökar omsorgsbehoven samtidigt som den yrkesverksamma basen minskar",
      "B) Att universiteten helt saknar studenter som vill utbilda sig till akademiker",
      "C) Att befolkningen har slutat betala skatt på grund av att kontanter har avskaffats",
      "D) Att all vårdverksamhet i Sverige har flyttats utomlands av ekonomiska skäl"
    ],
    correctAnswer: "A) En förskjutning i försörjningskvoten där en åldrande befolkning ökar omsorgsbehoven samtidigt som den yrkesverksamma basen minskar",
    explanation: "Texten fastslår: 'en åldrande befolkning medför ett ökat omsorgsbehov samtidigt som andelen yrkesverksamma i arbetsför ålder minskar proportionellt'."
  },
  {
    id: "sv-tisus-r-02",
    subtest: "reading",
    title: "Forskningsöversikt: Källkritik i den Generativa Artificiella Intelligensens Tidsålder",
    passage: `EPISTEMOLOGISKA DILEMMAN VID INFORMATIONSHANTERING (Docent E. Strömberg)
De etablerade källkritiska kriterierna – äkthet, tidssamband, beroende och tendens – formulerades ursprungligen för att värdera fysiska dokument och mänskligt författad text.
Med introduktionen av generativa neurala språkmodeller som producerar syntetisk text, verklighetstrogna 'deepfakes' och sofistikerade hallucinationer ställs källkritiken inför ett paradigmbrott.
När textuell koherens och formell stringens inte längre korrelerar med fakticitet förlorar traditionell närläsning delvis sitt förklaringsvärde.
I stället krävs en förskjutning mot 'lateral läsning': att verifiera informationspåståenden genom att konsultera externa, oberoende referensdatabaser och spåra algoritmisk proveniens snarare än att förlita sig på textens inneboende retoriska elegans.`,
    prompt: "Vad innebär begreppet 'lateral läsning' enligt textens forskningsanalys?",
    options: [
      "A) Att verifiera fakta via externa oberoende källor och databaser snarare än att bara lita på textens egen yttre form",
      "B) Att läsa texten från höger till vänster på ett horisontellt papper",
      "C) Att uteslutande förlita sig på information från anonyma kommentarsfält",
      "D) Att vägra använda datorer och enbart läsa handskrivna böcker"
    ],
    correctAnswer: "A) Att verifiera fakta via externa oberoende källor och databaser snarare än att bara lita på textens egen yttre form",
    explanation: "Författaren definierar lateral läsning som att 'verifiera informationspåståenden genom att konsultera externa, oberoende referensdatabaser'."
  },
  {
    id: "sv-tisus-r-03",
    subtest: "reading",
    title: "Medicinsk Etik: Prioriteringar inom Offentligt Finansierad Specialistvård",
    passage: `PRIORITERINGSETISKA PRINCIPER ENLIGT HÄLSO- OCH SJUKVÅRDSLAGEN (Socialstyrelsens riktlinjer)
Den svenska hälso- och sjukvårdens resurser är ändliga, vilket fordrar transparenta och etiskt försvarbara prioriteringskriterier.
Riksdagen har fastställt en etisk plattform som vilar på tre rangordnade principer:
1. Människovärdesprincipen: Alla människor har lika värde och samma rätt till vård oberoende av personliga egenskaper och funktioner i samhället (ålder, kön, inkomst).
2. Behovs- och solidaritetsprincipen: Resurserna ska i första hand fördelas till den som har det största medicinska vårdbehovet, särskilt eftersatta grupper.
3. Kostnadseffektivitetsprincipen: Vid val mellan olika behandlingsformer ska en rimlig relation mellan kostnad och effekt eftersträvas.
Observera att kostnadseffektivitet aldrig får tillämpas mellan olika individer, utan endast vid val av behandlingsmetod för en given diagnos.`,
    prompt: "Hur förhåller sig kostnadseffektivitetsprincipen till människovärdesprincipen i svensk sjukvård?",
    options: [
      "A) Den är underordnad människovärdes- och behovsprinciperna och får aldrig användas för att diskriminera individer",
      "B) Den står högst i rangordningen så att den rikaste patienten alltid prioriteras först",
      "C) Den ersätter alla medicinska bedömningar så att den billigaste vården alltid ges oavsett utgång",
      "D) Den tillämpas enbart för utländska turister utan europeiskt sjukförsäkringskort"
    ],
    correctAnswer: "A) Den är underordnad människovärdes- och behovsprinciperna och får aldrig användas för att diskriminera individer",
    explanation: "Texten klargör att plattformen är rangordnad och att kostnadseffektivitet aldrig får användas mellan individer utan är strikt underställd människovärdet och behovet."
  },
  {
    id: "sv-tisus-r-04",
    subtest: "reading",
    title: "Språkvetenskaplig Tidskrift: Domänförluster i det Akademiska Svenska Språket",
    passage: `ENGELSKANS HEGEMONI I HÖGRE UTBILDNING (Professor emeritus M. Teleman)
I takt med universitetens internationalisering och globala publiceringstraditioner har engelskan kommit att dominera naturvetenskapliga och tekniska fakulteter närmast totalt.
Denna utveckling medför en reell risk för domänförlust: situationer där det svenska språket förlorar sin terminologiska och begreppsliga apparat inom ett helt vetenskapsområde.
Språklagen från 2009 föreskriver att svenskan är huvudspråk i Sverige och att det allmänna har ett särskilt ansvar för att svenskan ska vara ett komplett och samhällsbärande språk.
Om framtidens läkare, ingenjörer och biologer saknar ett fungerande svenskt fackspråk hämmas den demokratiska dialogen och populärvetenskapliga folkbildningen med allmänheten drastiskt.`,
    prompt: "Vad innebär en så kallad 'domänförlust' för det svenska språket?",
    options: [
      "A) Att svenskan inte längre kan användas inom ett fackområde på grund av bristande terminologi och engelsk dominans",
      "B) Att en svensk domänadress på internet (.se) stängs ned av myndigheterna",
      "C) Att svenskar bosatta utomlands glömmer bort sitt modersmål efter tre månader",
      "D) Att Svenska Akademien upphör med utgivningen av ordlistan SAOL"
    ],
    correctAnswer: "A) Att svenskan inte längre kan användas inom ett fackområde på grund av bristande terminologi och engelsk dominans",
    explanation: "Domänförlust definieras i texten som att ett språk slutar användas och saknar terminologi inom ett visst vetenskapligt eller samhälleligt område."
  },
  {
    id: "sv-tisus-r-05",
    subtest: "reading",
    title: "Samhällsbyggnad: Den Funktionella Bostadssegregationens Dynamik",
    passage: `URBAN MORFOLOGI OCH SOCIAL STRATIFIERING (Boverkets forskningsrapport)
Bostadsmarknadens strukturella utveckling i de tre storstadsregionerna uppvisar en tilltagande socioekonomisk och etnisk polarisering.
Miljonprogramsområdenas storskaliga arkitektur, uppförd mellan 1965 och 1974 för att avhjälpa bostadsbristen, har kommit att koncentrera hushåll med svagare förankring på arbetsmarknaden.
Samtidigt har ombildningar av allmännyttiga hyresrätter till bostadsrätter i centrala lägen trissat upp trösklarna för nytillträdande på marknaden.
Forskningen visar att denna rumsliga segregation inte blott är ett passivt avtryck av inkomstklyftor, utan en aktiv mekanism som förstärker skillnader i skolresultat, nätverkskapital och livschanser.`,
    prompt: "Vilken slutsats dras i rapporten om bostadssegregationens konsekvenser?",
    options: [
      "A) Den är en aktiv mekanism som förstärker skillnader i skolresultat, socialt nätverk och livschanser",
      "B) Den är helt ofarlig och löser sig själv automatiskt genom fri marknadshyra",
      "C) Den leder enbart till att bostadspriserna i förorten stiger snabbare än i innerstaden",
      "D) Den berör uteslutande fritidshus och sommarstugor i fjällvärlden"
    ],
    correctAnswer: "A) Den är en aktiv mekanism som förstärker skillnader i skolresultat, socialt nätverk och livschanser",
    explanation: "Rapporten konstaterar att segregationen är 'en aktiv mekanism som förstärker skillnader i skolresultat, nätverkskapital och livschanser'."
  },
  {
    id: "sv-tisus-r-06",
    subtest: "reading",
    title: "Statsvetenskaplig Debatt: Den Svenska Förvaltningsmodellens Särart",
    passage: `MINISTERSTYRETS FÖRBUD OCH ÄMBETSVERKENS SJÄLVSTÄNDIGHET (Docent G. Wallin)
Ett av de mest karakteristiska särdragen i den svenska grundlagen (Regeringsformen) är förbudet mot ministerstyre.
I de flesta parlamentariska demokratier har ett enskilt statsråd befogenhet att direkt instruera en underordnad myndighet om hur ett enskilt ärende ska avgöras.
I Sverige fattar regeringen beslut uteslutande som ett kollektiv.
Dessutom stadgar Regeringsformen kapitel 12 att varken riksdag, regering eller enskild minister får bestämma hur en myndighet ska besluta i ett enskilt fall som rör myndighetsutövning mot en enskild eller tillämpning av lag.
Denna ämbetsmannatradition borgar för rättssäkerhet och opartiskhet, om än den tidvis kritiseras för att försvåra ansvarsutkrävande vid kriser.`,
    prompt: "Vad innebär förbudet mot ministerstyre i Sveriges grundlag?",
    options: [
      "A) Att en enskild minister inte får beordra en myndighet hur den ska besluta i ett enskilt ärende",
      "B) Att statsministern inte får träffa utländska statschefer utan tillstånd från kungen",
      "C) Att ministrar inte har rätt att bo i Stockholm under sin mandatperiod",
      "D) Att alla myndigheter leds av militära officerare i stället för civila tjänstemän"
    ],
    correctAnswer: "A) Att en enskild minister inte får beordra en myndighet hur den ska besluta i ett enskilt ärende",
    explanation: "Texten belyser att regeringen beslutar kollektivt och att ingen enskild minister får instruera en myndighet i handläggningen av enskilda ärenden."
  }
];

export const swedishTisusWriting = [
  {
    id: "sv-tisus-w-01",
    subtest: "writing",
    taskType: "message",
    title: "Delprov Skrivning 1: Vetenskaplig sammanfattning och syntes",
    prompt: `Du har tagit del av två kortare forskningsrapporter om effekterna av artificiell intelligens inom diagnostisk bildmedicin.
Författa en koncis vetenskaplig sammanfattning (ca 100–140 ord) där du:
1. Syntetiserar rapporternas huvudsakliga rön avseende träffsäkerhet och tidsbesparing.
2. Problematiserar de etiska riskerna rörande ansvar vid feldiagnoser samt 'svarta lådan'-fenomenet.
3. Använder akademiska referatmarkörer och ett stringent skriftspråk utan talspråksdrag.`,
    sampleResponse: `Forskningsläget rörande artificiell intelligens inom medicinsk radiologi uppvisar påtagliga fördelar men också betydande epistemologiska utmaningar. Enligt samstämmiga metastudier överträffar moderna djupinlärningsmodeller ofta mänskliga specialister i hastighet och sensitivitet vid screening av tidiga maligna tumörer.

Icke desto mindre belyser etikforskare allvarliga juridiska och principiella komplikationer. Det så kallade 'svarta lådan'-problemet innebär att de bakomliggande statistiska processerna inte kan härledas i detalj, vilket försvårar ansvarsutkrävande vid felaktiga negativa svar. Vidare riskerar en överdriven tilltro till algoritmiska beslutsstöd att undergräva den kliniska kompetensuppbyggnaden bland unga läkare. Följaktligen förordas en symbios där AI fungerar som ett komplementärt granskningssteg under överinseende av legitimerad medicinsk expertis.`
  },
  {
    id: "sv-tisus-w-02",
    subtest: "writing",
    taskType: "essay",
    title: "Delprov Skrivning 2: Akademisk argumenterande uppsats (Tisus standard • ca 400 ord)",
    prompt: `I den samtida samhällsdebatten diskuteras huruvida ett införande av ett obligatoriskt språk- och samhällskunskapstest för svenskt medborgarskap stärker integrationen eller tvärtom skapar nya former av utanförskap.
Författa en akademiskt strukturerad argumenterande uppsats (ca 350–450 ord) där du tar ställning i frågan.
Din text måste uppfylla följande Tisus-kriterier:
1. En välformulerad inledning med kontextualisering och en explicit tes (propositio).
2. Två välunderbyggda argument med sakliga belägg och principiella resonemang.
3. Ett relevant motargument som metodiskt bemöts och vederläggs (refutatio).
4. En sammanfattande avslutning med slutsats (peroratio).
5. Hög stilistisk nivå, god textbindning, adekvat nominalisering och fullständig grammatisk korrekthet.`,
    sampleResponse: `SPRÅKTESTET SOM TRÖSKEL ELLER SPRÅNGBRÄDA: EN PRINCIPDEBATT OM MEDBORGARSKAPETS INNEBÖRD

Frågan om huruvida språkliga och medborgerliga kunskapskrav bör utgöra ett formellt villkor för naturalisation har under senare år intagit en central position i den svenska integrationspolitiska diskursen. Medan merparten av Europas demokratier tillämpar standardiserade prov, har den svenska traditionen historiskt präglats av en inkluderande princip där medborgarskapet betraktats som ett verktyg för integration snarare än dess slutliga bekräftelse. I det följande argumenteras för att ett välbalanserat språk- och samhällskrav på CEFR B1-nivå stärker den enskildes autonomi och fördjupar det demokratiska samhällskontraktet.

Det primära argumentet för ett språkkrav vilar på en demokratisk jämlikhetsprincip. Ett modernt, kunskapsintensivt samhälle förutsätter att medborgaren kan tillgodogöra sig myndighetsinformation, delta i den allmänna opinionsbildningen och utöva sina medborgerliga rättigheter utan beroendeställning till tolkar eller informella grindvakter. Genom att knyta medborgarskapet till bevisad språkbehärskning signalerar staten att fullvärdigt deltagande i folkstyret förutsätter kommunikativ kompetens. Därutöver påvisar sociologiska studier att formella krav i kombination med subventionerad kvalitativ utbildning motverkar bildandet av parallellsamhällen och ökar individernas etableringshastighet på den reguljära arbetsmarknaden.

Motståndare till reformen gör emellertid gällande att språktester verkar diskriminerande och exkluderar traumatiserade flyktingar, äldre individer och analfabeter från politiskt inflytande. Detta motargument är legitimt i sin omsorg om utsatta grupper, men förbiser att reformen inte stipulerar ett oöverstigligt akademiskt hinder, utan en grundläggande funktionell nivå. Vidare kan och bör lagstiftningen innehålla rimliga dispensregler för individer med dokumenterade kognitiva funktionshinder eller hög ålder. Att avstå från språkkrav av rädsla för exkludering riskerar i praktiken att institutionalisera låga förväntningar och permanenta ett socialt utanförskap.

Sammanfattningsvis representerar införandet av ett språk- och samhällskunskapstest inte en avvisande mur, utan en pedagogisk och medborgerlig kompass. När medborgarskapet kombineras med reella krav och generösa utbildningsresurser förvandlas det från en passiv administrativ formalitet till en aktiv gemenskap byggd på delade fri- och rättigheter.`
  }
];

export const swedishTisusListening = [
  {
    id: "sv-tisus-l-01",
    subtest: "listening",
    title: "Universitetsföreläsning: Den Svenska Grundlagens Historiska Utveckling",
    audioText: "Välkomna till denna föreläsningsserie i konstitutionell rätt. I dag granskar vi övergången från 1809 års regeringsform till 1974 års författning. Medan 1809 års regeringsform var influerad av Montesquieus maktdelningslära med en balans mellan kungamakten och ständerna, bygger 1974 års regeringsform på folksuveränitetsprincipen. All offentlig makt i Sverige utgår från folket och riksdagen är folkets främsta företrädare.",
    prompt: "Vilken filosofisk och konstitutionell princip utgör grundvalen för 1974 års svenska regeringsform?",
    options: [
      "A) Folksuveränitetsprincipen — all offentlig makt utgår från folket",
      "B) Maktdelningsprincipen med absolut kunglig vetorätt",
      "C) Teokratisk förvaltning under ärkebiskopens ledning",
      "D) Direkt anarki utan parlamentariska institutioner"
    ],
    correctAnswer: "A) Folksuveränitetsprincipen — all offentlig makt utgår från folket",
    explanation: "Föreläsaren betonar att '1974 års regeringsform bygger på folksuveränitetsprincipen: All offentlig makt i Sverige utgår från folket'."
  },
  {
    id: "sv-tisus-l-02",
    subtest: "listening",
    title: "P1 Morgon: Samtal om Antibiotikaresistens och Global Folkhälsa",
    audioText: "I Sveriges Radio P1 Morgon intervjuas överläkare docent Barbro Hedin om den tilltagande resistensen hos multiresistenta bakterier. Hedin framhåller att Sverige tack vare en restriktiv förskrivningskultur och ett tidigt förbud mot antibiotika i djurfoder under 1980-talet har ett gynnsamt läge i dag. Hon varnar dock för att resistensen är ett gränslöst fenomen och kräver globala bindande konventioner.",
    prompt: "Vad har enligt docent Hedin bidragit till Sveriges relativt gynnsamma läge avseende antibiotikaresistens?",
    options: [
      "A) En restriktiv förskrivningskultur och ett tidigt förbud mot antibiotika i djurfoder",
      "B) Att alla antibiotikapreparat förbjöds helt på svenska sjukhus",
      "C) Att befolkningen är immun mot alla bakterieinfektioner",
      "D) Att mediciner uteslutande importeras från tropiska länder"
    ],
    correctAnswer: "A) En restriktiv förskrivningskultur och ett tidigt förbud mot antibiotika i djurfoder",
    explanation: "Intervjun lyfter fram Sveriges 'restriktiva förskrivningskultur och ett tidigt förbud mot antibiotika i djurfoder under 1980-talet'."
  },
  {
    id: "sv-tisus-l-03",
    subtest: "listening",
    title: "Forskningsseminarium: Kvantberäkningars Inverkan på Informationssäkerhet",
    audioText: "Kvantdatorernas intåg innebär att dagens asymmetriska kryptosystem, såsom RSA och elliptiska kurvor, teoretiskt kan forceras på bråkdelen av en sekund med Shors algoritm. Detta framtvingar en global övergång till postkvantkryptografi baserad på gitterbaserade matematiska problem. Nationella säkerhetsmyndigheter uppmanar nu alla samhällsviktiga aktörer att inventera sina långsiktiga krypteringsbehov.",
    prompt: "Varför utgör kvantdatorer ett hot mot existerande digital säkerhetsinfrastruktur?",
    options: [
      "A) De kan knäcka nuvarande asymmetriska kryptosystem som RSA med Shors algoritm",
      "B) De förstör alla fysiska internetkablar på havsbotten",
      "C) De förbrukar mer ström än hela världens samlade kraftverk",
      "D) De raderar automatiskt alla hårddiskar hos privatpersoner"
    ],
    correctAnswer: "A) De kan knäcka nuvarande asymmetriska kryptosystem som RSA med Shors algoritm",
    explanation: "Föreläsaren klargör att 'asymmetriska kryptosystem, såsom RSA... teoretiskt kan forceras på bråkdelen av en sekund med Shors algoritm'."
  },
  {
    id: "sv-tisus-l-04",
    subtest: "listening",
    title: "Kulturdebatt: August Strindbergs Dramatiska Modernism",
    audioText: "I radioprogrammet Filosofiska rummet diskuterar litteraturvetare August Strindbergs övergång från 1880-talets naturalistiska kammarspel till 1900-talets drömspelsdramatik. I förordet till Ett drömspel förklarar Strindberg att tid och rum har upphävts och att fantasin spinner nya mönster på en verklighetsbakgrund. Detta markerade en radikal vändpunkt för hela den västerländska teatern.",
    prompt: "Vad kännetecknar Strindbergs modernistiska dramaturgi i 'Ett drömspel'?",
    options: [
      "A) Tid och rum har upphävts och karaktärerna rör sig fritt i ett associativt drömliknande tillstånd",
      "B) Pjäsen följer strikt Aristoteles tre enheter för tid, rum och handling",
      "C) Den handlar uteslutande om matematik och kemiska experiment",
      "D) Pjäsen är skriven på antik grekiska och saknar dialog"
    ],
    correctAnswer: "A) Tid och rum har upphävts och karaktärerna rör sig fritt i ett associativt drömliknande tillstånd",
    explanation: "Texten refererar till Strindbergs eget förord där han beskriver hur 'tid och rum har upphävts och att fantasin spinner nya mönster'."
  },
  {
    id: "sv-tisus-l-05",
    subtest: "listening",
    title: "Riksbankens Penningpolitiska Rapport: Inflationsmål och Räntebana",
    audioText: "Riksbanksfullmäktige och direktionen har beslutat att lämna styrräntan oförändrad vid sitt senaste sammanträde. Riksbankens inflationsmål om två procents KPIF-inflation har etablerat sig som ett robust ankare för pris- och lönebildningen. Samtidigt varnar rapporten för att hushållens höga skuldsättning och räntekänslighet skapar en tröghet i den inhemska konsumtionen under det kommande verksamhetsåret.",
    prompt: "Vilket är Riksbankens officiella inflationsmål enligt rapporten?",
    options: [
      "A) Två procents årlig KPIF-inflation",
      "B) Noll procents inflation för evigt",
      "C) Tio procents deflation varje kvartal",
      "D) En rörlig inflation mellan fem och sju procent"
    ],
    correctAnswer: "A) Två procents årlig KPIF-inflation",
    explanation: "Rapporten fastslår: 'Riksbankens inflationsmål om två procents KPIF-inflation har etablerat sig som ett robust ankare'."
  },
  {
    id: "sv-tisus-l-06",
    subtest: "listening",
    title: "Symposium vid Karolinska Institutet: Epigenetik och Miljöfaktorer",
    audioText: "Dagens avslutande föreläsning behandlar epigenetiska mekanismer vid kroniska livsstilssjukdomar. Forskningen visar att miljöfaktorer som kronisk stress, kost och luftföroreningar inte förändrar själva DNA-sekvensen, men kan aktivera eller tysta specifika gener genom DNA-metylering och histonmodifiering. Vissa av dessa förändringar har i djurmodeller visat sig vara överförbara till efterföljande generationer.",
    prompt: "Vad innebär epigenetisk påverkan på människans gener enligt föreläsningen?",
    options: [
      "A) Miljöfaktorer aktiverar eller stänger av gener utan att förändra själva DNA-sekvensen",
      "B) Alla människans kromosomer raderas och ersätts med syntetiska proteiner",
      "C) DNA förändras till RNA i hela kroppen",
      "D) Människan blir immun mot alla ärftliga sjukdomar"
    ],
    correctAnswer: "A) Miljöfaktorer aktiverar eller stänger av gener utan att förändra själva DNA-sekvensen",
    explanation: "Docenten förklarar: 'inte förändrar själva DNA-sekvensen, men kan aktivera eller tysta specifika gener genom DNA-metylering'."
  }
];

export const swedishTisusSpeaking = [
  {
    id: "sv-tisus-s-01",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Delprov Samtal: Akademiskt seminarium (Tisus Pratprov)",
    instructions: "Du deltar i ett akademiskt rundabordssamtal tillsammans med en medkandidat och två examinatorer. Ämnet är 'Statens ansvar kontra individens frihet vid folkhälsointerventioner (t.ex. sockerskatt, vaccinationskrav och åldersgränser)'. Försvara din ståndpunkt med stringenta sakskäl, definiera centrala begrepp, bemöt opponentens invändningar och upprätthåll en nyanserad akademisk diskurs.",
    prepTimeSeconds: 120,
    speakTimeSeconds: 300,
    guidingQuestions: [
      "Var går den principiella gränsen mellan paternalistiskt förmynderi och legitimt samhällsskydd?",
      "Hur kan man väga individens självbestämmanderätt mot sjukvårdssystemets solidariska kostnader?",
      "Vilka stilistiska och retoriska grepp använder du för att nyansera ditt resonemang (t.ex. 'Detta torde förutsätta att...', 'Man måste göra en distinktion mellan...', 'Icke desto mindre kan man invända att...')?"
    ]
  },
  {
    id: "sv-tisus-s-02",
    subtest: "speaking",
    taskType: "monologue",
    title: "Delprov Monolog: Individuellt anförande kring ett samhällsfenomen",
    instructions: "Håll ett välstrukturerat anförande på cirka 3–4 minuter inför examensnämnden kring ämnet: 'Den högre utbildningens framtid i ljuset av artificiell intelligens och livslångt lärande'. Följ en klassisk retorisk disposition: inledning med syfte (exordium), problembeskrivning (narratio), två teser med belägg samt en syntetiserande avslutning (peroratio).",
    prepTimeSeconds: 120,
    speakTimeSeconds: 240,
    guidingQuestions: [
      "Hur påverkas examinationer och vetenskaplig integritet av AI-verktyg i den högre utbildningen?",
      "Vilken roll spelar universitetens bildningsideal i jämförelse med ren yrkesinriktad kompetensutveckling?",
      "Hur sammanfattar du ditt anförande med en minnesvärd och tankeväckande slutkläm?"
    ]
  }
];

// =========================================================================
// 3. EXAM POOL DEFINITIONS & REGISTRY
// =========================================================================
export const swedishExamPools = {
  sfiKursD: {
    levelKey: "sfiKursD",
    title: "Skolverket SFI Kurs D (Nationellt prov • SeQF 3 / CEFR B1)",
    badge: "SFI Kurs D • Uppehållstillstånd & Arbete",
    description: "Officiellt nationellt prov för kommunal vuxenutbildning i svenska för invandrare (SFI). Standardiserat krav för permanent uppehållstillstånd, medborgarskap och yrkesutbildningar under Skolverket.",
    reading: swedishSfiDReading,
    writing: swedishSfiDWriting,
    listening: swedishSfiDListening,
    speaking: swedishSfiDSpeaking
  },
  tisusC1: {
    levelKey: "tisusC1",
    title: "Tisus (Test i svenska för universitets- och högskolestudier • C1)",
    badge: "Tisus C1 • Högskola & Legitimation",
    description: "Centralt standardprov administrerat av Stockholms universitet på uppdrag av UHR. Ger generell behörighet för universitetsstudier i Sverige och krävs av Socialstyrelsen för läkar- och sjuksköterskelegitimation.",
    reading: swedishTisusReading,
    writing: swedishTisusWriting,
    listening: swedishTisusListening,
    speaking: swedishTisusSpeaking
  }
};

/**
 * Generates an authentic, fresh Swedish SFI Kurs D & Tisus CBT exam session
 * prioritizing unseen questions for the logged-in user on every attempt.
 * 
 * @param {string} levelKey - 'sfiKursD' | 'tisusC1'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @param {Set<string>} seenQuestionIds - IDs of questions previously attempted by the user
 * @returns {object} Randomized Swedish exam session object
 */
export function generateSwedishDynamicExam(levelKey = "sfiKursD", subtestFilter = "all", seenQuestionIds = new Set()) {
  const pool = swedishExamPools[levelKey] || swedishExamPools.sfiKursD;

  // 1. Reading selection
  const readingResult = selectBrandNewSet(pool.reading, Math.min(6, pool.reading.length), seenQuestionIds);
  const selectedReading = readingResult.selected;

  // 2. Writing selection (1 message/short brief + 1 formal essay)
  const messages = pool.writing.filter(w => w.taskType === "message");
  const essays = pool.writing.filter(w => w.taskType === "essay");
  const messagesResult = selectBrandNewSet(messages, Math.min(1, messages.length), seenQuestionIds);
  const essaysResult = selectBrandNewSet(essays, Math.min(1, essays.length), seenQuestionIds);
  const selectedWriting = [...messagesResult.selected, ...essaysResult.selected];

  // 3. Listening selection (maxPlays: 2)
  const listeningResult = selectBrandNewSet(pool.listening, Math.min(6, pool.listening.length), seenQuestionIds);
  const selectedListening = listeningResult.selected.map(item => ({
    ...item,
    maxPlays: 2
  }));

  // 4. Speaking selection (1 dialogue + 1 monologue)
  const dialogues = pool.speaking.filter(s => s.taskType === "dialogue");
  const monologues = pool.speaking.filter(s => s.taskType === "monologue");
  const dialoguesResult = selectBrandNewSet(dialogues, Math.min(1, dialogues.length), seenQuestionIds);
  const monologuesResult = selectBrandNewSet(monologues, Math.min(1, monologues.length), seenQuestionIds);
  const selectedSpeaking = [...dialoguesResult.selected, ...monologuesResult.selected];

  // Assemble question stream based on chosen subtest
  let questions = [];
  let durationMinutes = 0;
  let subtestLabel = "Skolverket SFI / Tisus Komplett Provsimulering (4 Delprov)";

  const isTisus = levelKey === "tisusC1";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = isTisus ? 75 : 45;
    subtestLabel = isTisus 
      ? "Tisus Delprov Läsförståelse (Vetenskapliga och Samhällstexter • 75 min)"
      : "SFI Delprov Läsa (Vardags- och Myndighetstexter • 45 min)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = isTisus ? 150 : 50;
    subtestLabel = isTisus 
      ? "Tisus Delprov Skriva (Akademisk Argumenterande Uppsats • 150 min)"
      : "SFI Delprov Skriva (Formellt Klagobrev & Meddelande • 50 min)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = isTisus ? 40 : 30;
    subtestLabel = isTisus 
      ? "Tisus Delprov Hörförståelse (Föreläsningar & P1-debatter • 40 min)"
      : "SFI Delprov Höra (Nyhetsinslag & Vardagssamtal • 30 min)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = isTisus ? 30 : 15;
    subtestLabel = isTisus 
      ? "Tisus Delprov Tala (Akademiskt Seminariesamtal & Anförande • 30 min)"
      : "SFI Delprov Tala (Muntlig Interaktion & Presentation • 15 min)";
  } else {
    // "all" - Full official simulation
    questions = [
      ...selectedReading,
      ...selectedWriting,
      ...selectedListening,
      ...selectedSpeaking
    ];
    durationMinutes = isTisus ? 295 : 140;
    subtestLabel = isTisus 
      ? "Tisus Fullständig Examination (4 Delprov • UHR / Stockholms Universitet)"
      : "Skolverket SFI Kurs D Fullständigt Nationellt Prov (4 Delprov)";
  }

  const isBrandNewSession = 
    (subtestFilter === "reading" && readingResult.isBrandNew) ||
    (subtestFilter === "writing" && messagesResult.isBrandNew && essaysResult.isBrandNew) ||
    (subtestFilter === "listening" && listeningResult.isBrandNew) ||
    (subtestFilter === "speaking" && dialoguesResult.isBrandNew && monologuesResult.isBrandNew) ||
    (subtestFilter === "all" && readingResult.isBrandNew && messagesResult.isBrandNew && listeningResult.isBrandNew);

  const sessionId = `sv-${levelKey}-${subtestFilter}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

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
