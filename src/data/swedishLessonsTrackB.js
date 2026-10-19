// =========================================================================
// Swedish Curriculum — Track B: Primary & Secondary Compulsory School
// (Skolverket Lgr22 & Gy11/Gy25 National Curriculum Standards)
// Units 4 to 6 • 4 Lessons per Unit = 12 Comprehensive Academic Lessons Total
// =========================================================================

export const swedishTrackBUnits = [
  {
    "id": "sv-unit-4",
    "unitId": "sv-unit-4",
    "unitNumber": 4,
    "level": "Track B: Grundskolan Årskurs 3 (Nationella prov)",
    "title": "Unit 4: Fundamental Literacy & Grade 3 Nationella Prov Alignment",
    "subtitle": "Sammansatta ord, skönlitteratur för barn, tidsbindare (först, sedan, till slut), muntlig presentation och Skolverkets läsmatriser.",
    "icon": "GraduationCap",
    "color": "#f59e0b",
    "lessons": [
      {
        "id": "sv-u2-l1",
        "title": "Lesson 4.1: Phonetic Awareness & Narrative Reading",
        "description": "Ljudning och sammansatta ord, läsflyt i skönlitteratur, berättelsens röda tråd och grundläggande skiljetecken (punkt, frågetecken).",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u4-l1-q1",
            "type": "multiple_choice",
            "prompt": "Vad händer när man bildar ett sammansatt ord på svenska som 'fotboll' eller 'skolbänk'?",
            "options": [
              "Orden skrivs ihop till ett enda ord utan mellanslag för att undvika särskrivning",
              "Man måste alltid sätta ett bindestreck mellan orden",
              "Orden skrivs alltid isär med dubbla mellanslag",
              "Sista bokstaven i första ordet tas alltid bort"
            ],
            "correctAnswer": "Orden skrivs ihop till ett enda ord utan mellanslag för att undvika särskrivning",
            "explanation": "På svenska skrivs sammansatta ord ihop ('en fotboll', 'en skolväska'). Om man särskriver kan betydelsen ändras drastiskt (t.ex. 'brunhårig sjuksköterska' vs 'brun hårig sjuk sköterska')."
          },
          {
            "id": "sv-u4-l1-q2",
            "type": "fill_blank",
            "sentence": "Emma hittade en liten röd ___ på skolgården och gav den till läraren.",
            "missingWord": "skolväska",
            "options": [
              "skolväska",
              "skol väska",
              "skolväskor",
              "väska skol"
            ],
            "correctAnswer": "skolväska",
            "explanation": "Sammansatta substantiv som 'skolväska' skrivs ihop i ett ord i singular bestämd/obestämd form."
          },
          {
            "id": "sv-u4-l1-q3",
            "type": "scramble",
            "prompt": "Ordna orden till en korrekt berättande mening för barnlitteratur:",
            "tokens": [
              "Pelle",
              "och",
              "Lisa",
              "läste",
              "en",
              "spännande",
              "bok",
              "i",
              "biblioteket."
            ],
            "correctTokens": [
              "Pelle",
              "och",
              "Lisa",
              "läste",
              "en",
              "spännande",
              "bok",
              "i",
              "biblioteket."
            ],
            "explanation": "Meningen har rak ordföljd: Subjekt (Pelle och Lisa) + Predikat (läste) + Objekt (en spännande bok) + Adverbial (i biblioteket)."
          },
          {
            "id": "sv-u4-l1-q4",
            "type": "matching",
            "prompt": "Koppla skiljetecken till deras funktion i skönlitterär text:",
            "pairs": [
              {
                "native": "Punkt (.)",
                "english": "Avslutar ett vanligt påstående eller en fullständig mening",
                "left": "Punkt (.)",
                "right": "Avslutar ett vanligt påstående eller en fullständig mening"
              },
              {
                "native": "Frågetecken (?)",
                "english": "Avslutar en direkt fråga som kräver svar",
                "left": "Frågetecken (?)",
                "right": "Avslutar en direkt fråga som kräver svar"
              },
              {
                "native": "Utropstecken (!)",
                "english": "Markerar en uppmaning, ett rop eller stark känsla",
                "left": "Utropstecken (!)",
                "right": "Markerar en uppmaning, ett rop eller stark känsla"
              },
              {
                "native": "Kommatecken (,)",
                "english": "Skapar paus i uppräkningar eller mellan satser",
                "left": "Kommatecken (,)",
                "right": "Skapar paus i uppräkningar eller mellan satser"
              }
            ]
          },
          {
            "id": "sv-u4-l1-q5",
            "type": "multiple_choice",
            "prompt": "Vad menas med 'den röda tråden' i en berättelse för grundskolan?",
            "options": [
              "Huvudhandlingen och sammanhanget som binder ihop början, händelse och slut",
              "Att boken har ett rött bokmärke av siden",
              "Att alla karaktärer bär röda kläder i berättelsen",
              "Att författaren har skrivit med rött bläck"
            ],
            "correctAnswer": "Huvudhandlingen och sammanhanget som binder ihop början, händelse och slut",
            "explanation": "Den röda tråden är det tematiska och logiska sammanhang som löper genom hela berättelsen och hjälper läsaren att förstå handlingen."
          },
          {
            "id": "sv-u4-l1-q6",
            "type": "audio_listen",
            "prompt": "Lyssna på texten och välj vad barnen hittade i skogsbacken:",
            "audioText": "I skogsbacken bakom skolan fann barnen söta blåbär och en liten igelkott.",
            "options": [
              "Söta blåbär och en liten igelkott",
              "En gammal övergiven cykel",
              "Ett stort björnbo",
              "En fotboll och två tröjor"
            ],
            "correctAnswer": "Söta blåbär och en liten igelkott",
            "explanation": "I ljudspåret hörs tydligt: 'I skogsbacken bakom skolan fann barnen söta blåbär och en liten igelkott.'"
          },
          {
            "id": "sv-u4-l1-q7",
            "type": "fill_blank",
            "sentence": "När du skriver en fråga på svenska måste du alltid sätta ett ___ i slutet av meningen.",
            "missingWord": "frågetecken",
            "options": [
              "frågetecken",
              "utropstecken",
              "kommatecken",
              "kolon"
            ],
            "correctAnswer": "frågetecken",
            "explanation": "En frågemening (t.ex. 'Vad heter du?') avslutas alltid med ett frågetecken (?)."
          },
          {
            "id": "sv-u4-l1-q8",
            "type": "matching",
            "prompt": "Bygg ihop orden till korrekta svenska sammansatta ord:",
            "pairs": [
              {
                "native": "sommar + lov",
                "english": "sommarlov (skolledighet under sommarmånaderna)",
                "left": "sommar + lov",
                "right": "sommarlov (skolledighet under sommarmånaderna)"
              },
              {
                "native": "sol + glasögon",
                "english": "solglasögon (skydd för ögonen mot solljus)",
                "left": "sol + glasögon",
                "right": "solglasögon (skydd för ögonen mot solljus)"
              },
              {
                "native": "cykel + hjälm",
                "english": "cykelhjälm (skyddsutrustning vid cykling)",
                "left": "cykel + hjälm",
                "right": "cykelhjälm (skyddsutrustning vid cykling)"
              },
              {
                "native": "bok + hylla",
                "english": "bokhylla (möbel där böcker förvaras)",
                "left": "bok + hylla",
                "right": "bokhylla (möbel där böcker förvaras)"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l2",
        "title": "Lesson 4.2: Creative Written Narration",
        "description": "Skriva korta personliga berättelser, loggböcker och meddelanden. Tidsbindare (först, sedan, efter det, till slut) och satsfogning.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u4-l2-q1",
            "type": "multiple_choice",
            "prompt": "Vilka tidsbindare hjälper läsaren att förstå den kronologiska ordningsföljden i en berättelse?",
            "options": [
              "Först, sedan, därefter, efter det och till slut",
              "Kanske, troligen, möjligen och absolut inte",
              "Härifrån, därifrån, uppåt och nedåt",
              "Gul, blå, grön och röd"
            ],
            "correctAnswer": "Först, sedan, därefter, efter det och till slut",
            "explanation": "Kronologiska tidsbindare som 'först', 'sedan' och 'till slut' guidar läsaren genom handlingens olika skeden."
          },
          {
            "id": "sv-u4-l2-q2",
            "type": "fill_blank",
            "sentence": "___ åt vi frukost, sedan packade vi väskorna och begav oss iväg.",
            "missingWord": "Först",
            "options": [
              "Först",
              "Aldrig",
              "Till sist",
              "Varför"
            ],
            "correctAnswer": "Först",
            "explanation": "'Först' inleder händelseförloppet i en kronologisk berättelse."
          },
          {
            "id": "sv-u4-l2-q3",
            "type": "scramble",
            "prompt": "Ordna meningen med korrekt tidsföljd och V2-regel:",
            "tokens": [
              "Efter",
              "skolan",
              "cyklade",
              "vi",
              "hem",
              "till",
              "mormor",
              "och",
              "fikade."
            ],
            "correctTokens": [
              "Efter",
              "skolan",
              "cyklade",
              "vi",
              "hem",
              "till",
              "mormor",
              "och",
              "fikade."
            ],
            "explanation": "När meningen inleds med tidsadverbialet 'Efter skolan' kommer verbet 'cyklade' på andra plats följt av subjektet 'vi'."
          },
          {
            "id": "sv-u4-l2-q4",
            "type": "matching",
            "prompt": "Para ihop tidsorden med deras roll i en narrativ berättelse:",
            "pairs": [
              {
                "native": "Först",
                "english": "Markerar startpunkten för hela händelseförloppet",
                "left": "Först",
                "right": "Markerar startpunkten för hela händelseförloppet"
              },
              {
                "native": "Sedan / Därefter",
                "english": "Länkar vidare till nästa handling i mitten av historien",
                "left": "Sedan / Därefter",
                "right": "Länkar vidare till nästa handling i mitten av historien"
              },
              {
                "native": "Plötsligt",
                "english": "Inför en överraskande vändpunkt eller ett problem",
                "left": "Plötsligt",
                "right": "Inför en överraskande vändpunkt eller ett problem"
              },
              {
                "native": "Till slut",
                "english": "Avrundar historien och presenterar upplösningen",
                "left": "Till slut",
                "right": "Avrundar historien och presenterar upplösningen"
              }
            ]
          },
          {
            "id": "sv-u4-l2-q5",
            "type": "multiple_choice",
            "prompt": "Varför ska man börja varje ny mening med stor begynnelsebokstav (versal)?",
            "options": [
              "För att signalera till läsaren att en ny tanke eller mening startar",
              "För att spara bläck på papperet",
              "För att visa att ordet är ett engelskt lånord",
              "Det är bara nödvändigt om man skriver på dator"
            ],
            "correctAnswer": "För att signalera till läsaren att en ny tanke eller mening startar",
            "explanation": "Stor bokstav i början av meningen och punkt i slutet är grundläggande skrivregler som gör texten läsbar och begriplig."
          },
          {
            "id": "sv-u4-l2-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och välj vad barnen fann bakom den gamla träporten:",
            "audioText": "Sedan öppnade vi den knarrande dörren och fann en hemlig kista full med gamla brev.",
            "options": [
              "En hemlig kista full med gamla brev",
              "En hungrig räv i ett hörn",
              "En trave med nya läroböcker",
              "Ett par borttappade vantar"
            ],
            "correctAnswer": "En hemlig kista full med gamla brev",
            "explanation": "I ljudsekvensen hörs: '...och fann en hemlig kista full med gamla brev.'"
          },
          {
            "id": "sv-u4-l2-q7",
            "type": "fill_blank",
            "sentence": "Igår eftermiddag ___ alla eleverna brännboll på idrottsplatsen.",
            "missingWord": "spelade",
            "options": [
              "spelade",
              "spela",
              "spelar",
              "spelat"
            ],
            "correctAnswer": "spelade",
            "explanation": "Efter tidsordet 'Igår' används preteritum (dåtid): 'spelade'."
          },
          {
            "id": "sv-u4-l2-q8",
            "type": "matching",
            "prompt": "Koppla händelserna till rätt fas i en berättelse:",
            "pairs": [
              {
                "native": "Inledning",
                "english": "Presentation av personer, tid och miljö",
                "left": "Inledning",
                "right": "Presentation av personer, tid och miljö"
              },
              {
                "native": "Problem / Händelse",
                "english": "Något oväntat inträffar som måste lösas",
                "left": "Problem / Händelse",
                "right": "Något oväntat inträffar som måste lösas"
              },
              {
                "native": "Höjdpunkt",
                "english": "Det mest spännande ögonblicket i berättelsen",
                "left": "Höjdpunkt",
                "right": "Det mest spännande ögonblicket i berättelsen"
              },
              {
                "native": "Avslutning",
                "english": "Problemet löses och historien rundas av",
                "left": "Avslutning",
                "right": "Problemet löses och historien rundas av"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l3",
        "title": "Lesson 4.3: Descriptive Oral Presentation",
        "description": "Muntlig framställning i grupp, beskriva ett föremål eller intresse med konkreta adjektiv, röstkontroll och talartempo.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u4-l3-q1",
            "type": "multiple_choice",
            "prompt": "Vad är viktigast att tänka på när man håller en muntlig presentation för klasskamraterna?",
            "options": [
              "Tala med lagom tempo, tydlig röst och möta lyssnarnas blickar",
              "Läsa innantill så fort som möjligt utan att titta upp",
              "Viska hemligheter så att bara läraren hör",
              "Stå helt tyst och peka på en bild"
            ],
            "correctAnswer": "Tala med lagom tempo, tydlig röst och möta lyssnarnas blickar",
            "explanation": "Ett lugnt tempo, god artikulation, hörbar röststyrka och ögonkontakt engagerar publiken och gör presentationen tydlig."
          },
          {
            "id": "sv-u4-l3-q2",
            "type": "fill_blank",
            "sentence": "När du talar inför klassen är det bra att ha ett litet kort med ___ så att du kommer ihåg ordningen.",
            "missingWord": "stödord",
            "options": [
              "stödord",
              "godis",
              "hörlurar",
              "läsk"
            ],
            "correctAnswer": "stödord",
            "explanation": "Stödord (stödordskort) hjälper talaren att hålla den röda tråden utan att läsa innantill ord för ord."
          },
          {
            "id": "sv-u4-l3-q3",
            "type": "scramble",
            "prompt": "Ordna rådet för en god muntlig presentation:",
            "tokens": [
              "Titta",
              "på",
              "dina",
              "kamrater",
              "och",
              "använd",
              "en",
              "tydlig",
              "röst."
            ],
            "correctTokens": [
              "Titta",
              "på",
              "dina",
              "kamrater",
              "och",
              "använd",
              "en",
              "tydlig",
              "röst."
            ],
            "explanation": "En bra talare söker kontakt med publiken och anpassar röststyrkan till rummets storlek."
          },
          {
            "id": "sv-u4-l3-q4",
            "type": "matching",
            "prompt": "Koppla presentationstekniska begrepp till deras funktion:",
            "pairs": [
              {
                "native": "Ögonkontakt",
                "english": "Skapar kontakt och gör lyssnarna mer engagerade",
                "left": "Ögonkontakt",
                "right": "Skapar kontakt och gör lyssnarna mer engagerade"
              },
              {
                "native": "Tydlig artikulation",
                "english": "Gör att varje ord hörs klart och tydligt i klassrummet",
                "left": "Tydlig artikulation",
                "right": "Gör att varje ord hörs klart och tydligt i klassrummet"
              },
              {
                "native": "Beskrivande adjektiv",
                "english": "Målar upp en levande bild av föremålet i åhörarnas sinnen",
                "left": "Beskrivande adjektiv",
                "right": "Målar upp en levande bild av föremålet i åhörarnas sinnen"
              },
              {
                "native": "Konstpaus",
                "english": "Ger publiken tid att tänka och smälta viktig information",
                "left": "Konstpaus",
                "right": "Ger publiken tid att tänka och smälta viktig information"
              }
            ]
          },
          {
            "id": "sv-u4-l3-q5",
            "type": "multiple_choice",
            "prompt": "Vilken beskrivning är mest målande och beskrivande enligt Skolverkets kursplan?",
            "options": [
              "Föremålet är tillverkat i glänsande mässing med mjuka, rundade hörn",
              "Det är en grej som är bra",
              "Den är vanlig och finns hemma",
              "Jag vet inte vad den heter"
            ],
            "correctAnswer": "Föremålet är tillverkat i glänsande mässing med mjuka, rundade hörn",
            "explanation": "Genom att använda specifika material och beskrivande adjektiv ('glänsande mässing', 'rundade hörn') blir beskrivningen levande och precis."
          },
          {
            "id": "sv-u4-l3-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och avgör vad föredraget handlar om:",
            "audioText": "Hej allihop! I dag ska jag berätta om min samling av gamla nordiska frimärken.",
            "options": [
              "En samling av gamla nordiska frimärken",
              "Hur man bakar kanelbullar",
              "En fotbollsmatch i Göteborg",
              "Att åka skidor i fjällen"
            ],
            "correctAnswer": "En samling av gamla nordiska frimärken",
            "explanation": "Talaren säger ordagrant: 'I dag ska jag berätta om min samling av gamla nordiska frimärken.'"
          },
          {
            "id": "sv-u4-l3-q7",
            "type": "fill_blank",
            "sentence": "Ett artigt sätt att avsluta sin presentation är att fråga: 'Har någon i klassen några ___?'",
            "missingWord": "frågor",
            "options": [
              "frågor",
              "pennor",
              "suddgummin",
              "pengar"
            ],
            "correctAnswer": "frågor",
            "explanation": "Att öppna för frågor ('Har någon några frågor?') bjuder in kamraterna till ett tvåvägssamtal."
          },
          {
            "id": "sv-u4-l3-q8",
            "type": "matching",
            "prompt": "Para ihop faserna i en muntlig redovisning:",
            "pairs": [
              {
                "native": "Hälsa och inleda",
                "english": "Säga hej och berätta vad ämnet är",
                "left": "Hälsa och inleda",
                "right": "Säga hej och berätta vad ämnet är"
              },
              {
                "native": "Beskriva och visa",
                "english": "Gå igenom föremålets egenskaper med stödord",
                "left": "Beskriva och visa",
                "right": "Gå igenom föremålets egenskaper med stödord"
              },
              {
                "native": "Sammanfatta",
                "english": "Knyta ihop säcken med en kort slutkläm",
                "left": "Sammanfatta",
                "right": "Knyta ihop säcken med en kort slutkläm"
              },
              {
                "native": "Tacka och svara",
                "english": "Tacka för uppmärksamheten och ta emot frågor",
                "left": "Tacka och svara",
                "right": "Tacka för uppmärksamheten och ta emot frågor"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l4",
        "title": "Lesson 4.4: Grade 3 Nationella Prov Simulation",
        "description": "Skolverkets nationella prov i årskurs 3: läsförståelse av skönlitteratur och faktatext, ordavkodning och läsflyt i matriser.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u4-l4-q1",
            "type": "multiple_choice",
            "prompt": "Vad är huvudsyftet med Skolverkets nationella prov i svenska i årskurs 3?",
            "options": [
              "Att stödja lärarens bedömning och tidigt fånga upp elever som behöver extra läs- och skrivstöd",
              "Att rangordna skolor och ge betyg från A till F",
              "Att bestämma vilka elever som får sommarlov",
              "Att testa hur snabbt eleverna kan skriva på tangentbord"
            ],
            "correctAnswer": "Att stödja lärarens bedömning och tidigt fånga upp elever som behöver extra läs- och skrivstöd",
            "explanation": "I årskurs 3 sätts inga betyg; de nationella proven är diagnostiska verktyg för att säkerställa att alla elever når grundläggande läs- och skrivmål."
          },
          {
            "id": "sv-u4-l4-q2",
            "type": "fill_blank",
            "sentence": "I en faktatext kan man ofta hitta svaret på enkla frågor ___ i texten genom att söka efter nyckelord.",
            "missingWord": "direkt",
            "options": [
              "direkt",
              "hemligt",
              "osynligt",
              "baklänges"
            ],
            "correctAnswer": "direkt",
            "explanation": "Direkt utläsning ('på raderna') innebär att svaret står utskrivet med samma eller snarlika ord i texten."
          },
          {
            "id": "sv-u4-l4-q3",
            "type": "scramble",
            "prompt": "Ordna instruktionen för nationella provets läsförståelse:",
            "tokens": [
              "Läs",
              "hela",
              "texten",
              "lugnt",
              "innan",
              "du",
              "besvarar",
              "frågorna."
            ],
            "correctTokens": [
              "Läs",
              "hela",
              "texten",
              "lugnt",
              "innan",
              "du",
              "besvarar",
              "frågorna."
            ],
            "explanation": "God lässtrategi: Skaffa först en helhetsbild av texten, gå därefter till frågorna och sök belägg."
          },
          {
            "id": "sv-u4-l4-q4",
            "type": "matching",
            "prompt": "Koppla Skolverkets läsförståelsenivåer till deras innebörd:",
            "pairs": [
              {
                "native": "På raderna (bokstavlig läsning)",
                "english": "Hitta fakta som står ordagrant utskriven i texten",
                "left": "På raderna (bokstavlig läsning)",
                "right": "Hitta fakta som står ordagrant utskriven i texten"
              },
              {
                "native": "Mellan raderna (inferens)",
                "english": "Dra slutsatser genom att lägga ihop olika ledtrådar",
                "left": "Mellan raderna (inferens)",
                "right": "Dra slutsatser genom att lägga ihop olika ledtrådar"
              },
              {
                "native": "Bortom raderna (reflektion)",
                "english": "Koppla textens budskap till egna erfarenheter och omvärlden",
                "left": "Bortom raderna (reflektion)",
                "right": "Koppla textens budskap till egna erfarenheter och omvärlden"
              },
              {
                "native": "Avkodning och läsflyt",
                "english": "Säker och automatiserad igenkänning av ord och skiljetecken",
                "left": "Avkodning och läsflyt",
                "right": "Säker och automatiserad igenkänning av ord och skiljetecken"
              }
            ]
          },
          {
            "id": "sv-u4-l4-q5",
            "type": "multiple_choice",
            "prompt": "Vad kännetecknar ett gott läsflyt vid Skolverkets individuella högläsningsprov?",
            "options": [
              "Eleven läser med naturligt tempo, intonation och pausar vid punkt och kommatecken",
              "Eleven läser så snabbt som möjligt utan att andas",
              "Eleven stavar sig igenom varje bokstav högt",
              "Eleven hoppar över alla svåra ord"
            ],
            "correctAnswer": "Eleven läser med naturligt tempo, intonation och pausar vid punkt och kommatecken",
            "explanation": "Läsflyt innebär automatiserad ordavkodning kombinerad med prosodi (tonfall och pausering) som speglar förståelse."
          },
          {
            "id": "sv-u4-l4-q6",
            "type": "audio_listen",
            "prompt": "Lyssna på textavsnittet och svara på frågan om björnen:",
            "audioText": "Björnen sover i sitt ide under hela vintern och vaknar först när vårsolen smälter den sista snön.",
            "options": [
              "När vårsolen smälter den sista snön",
              "Mitt i december under snöstormen",
              "Efter exakt tre veckors sömn",
              "När höstlöven börjar falla"
            ],
            "correctAnswer": "När vårsolen smälter den sista snön",
            "explanation": "I uppläsningen sägs klart och tydligt: '...och vaknar först när vårsolen smälter den sista snön.'"
          },
          {
            "id": "sv-u4-l4-q7",
            "type": "fill_blank",
            "sentence": "Den nationella bedömningsmatrisen från Skolverket mäter om eleven har uppnått kriterierna för godtagbar ___ i årskurs 3.",
            "missingWord": "läsförståelse",
            "options": [
              "läsförståelse",
              "idrottsförmåga",
              "räknehastighet",
              "sångröst"
            ],
            "correctAnswer": "läsförståelse",
            "explanation": "Skolverkets bedömningsmatriser i årskurs 3 fokuserar på läsförståelse och grundläggande skrivförmåga."
          },
          {
            "id": "sv-u4-l4-q8",
            "type": "matching",
            "prompt": "Para ihop delmomenten i årskurs 3:s nationella prov med deras övningsform:",
            "pairs": [
              {
                "native": "Delprov: Högläsning",
                "english": "Eleven läser en kort berättelse enskilt för läraren",
                "left": "Delprov: Högläsning",
                "right": "Eleven läser en kort berättelse enskilt för läraren"
              },
              {
                "native": "Delprov: Läsa skönlitteratur",
                "english": "Svara på skriftliga frågor om handling och karaktärer",
                "left": "Delprov: Läsa skönlitteratur",
                "right": "Svara på skriftliga frågor om handling och karaktärer"
              },
              {
                "native": "Delprov: Läsa faktatext",
                "english": "Hitta sakinformation i en natur- eller samhällstext",
                "left": "Delprov: Läsa faktatext",
                "right": "Hitta sakinformation i en natur- eller samhällstext"
              },
              {
                "native": "Delprov: Samtala om text",
                "english": "Diskutera textens budskap i en liten grupp med klasskamrater",
                "left": "Delprov: Samtala om text",
                "right": "Diskutera textens budskap i en liten grupp med klasskamrater"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sv-unit-5",
    "unitId": "sv-unit-5",
    "unitNumber": 5,
    "level": "Track B: Grundskolan Årskurs 9 (Nationella prov)",
    "title": "Unit 5: Expository Reading, Text Types & Grade 9 Nationella Prov Calibration",
    "subtitle": "Källkritik, argumenterande text, sambandsord (å ena sidan, dessutom), litterär analys av ungdomslitteratur och Delprov A, B, C.",
    "icon": "Compass",
    "color": "#8b5cf6",
    "lessons": [
      {
        "id": "sv-u2-l5",
        "title": "Lesson 5.1: Information Retrieval & Media Analysis",
        "description": "Källkritiska kriterier (äkthet, tid, beroende, tendens), skilja fakta från värdering i nyhetsmedier och granskning av virala påståenden.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u5-l1-q1",
            "type": "multiple_choice",
            "prompt": "Vilka är Skolverkets fyra klassiska källkritiska kriterier?",
            "options": [
              "Äkthet, tidssamband, oberoende och tendensfrihet/objektivitet",
              "Popularitet, antal följare, design och färgsättning",
              "Längd på texten, typsnitt, pris och leveranstid",
              "Författarens ålder, kön, nationalitet och bostadsort"
            ],
            "correctAnswer": "Äkthet, tidssamband, oberoende och tendensfrihet/objektivitet",
            "explanation": "Källkritikens fyra pelare är: Äkthet (är källan äkta?), Tid (när skapades den?), Beroende (är det en primärkälla?) och Tendens (finns det partiska intressen?)."
          },
          {
            "id": "sv-u5-l1-q2",
            "type": "fill_blank",
            "sentence": "En text som har ett dolt ekonomiskt eller politiskt intresse och vinklar fakta har en tydlig ___.",
            "missingWord": "tendens",
            "options": [
              "tendens",
              "neutralitet",
              "faktabas",
              "källförteckning"
            ],
            "correctAnswer": "tendens",
            "explanation": "Tendenskriteriet granskar om upphovspersonen har personliga, politiska eller kommersiella skäl att förvränga verkligheten."
          },
          {
            "id": "sv-u5-l1-q3",
            "type": "scramble",
            "prompt": "Ordna den gyllene källkritiska regeln för sociala medier:",
            "tokens": [
              "Kontrollera",
              "alltid",
              "vem",
              "som",
              "är",
              "den",
              "ursprungliga",
              "avsändaren."
            ],
            "correctTokens": [
              "Kontrollera",
              "alltid",
              "vem",
              "som",
              "är",
              "den",
              "ursprungliga",
              "avsändaren."
            ],
            "explanation": "Att spåra förstahandskällan bakom ett viralt påstående är avgörande för att bedöma dess sanningshalt."
          },
          {
            "id": "sv-u5-l1-q4",
            "type": "matching",
            "prompt": "Koppla det källkritiska kriteriet till rätt kontrollfråga:",
            "pairs": [
              {
                "native": "Äkthetskriteriet",
                "english": "Är källan vad den utger sig för att vara eller en förfalskning?",
                "left": "Äkthetskriteriet",
                "right": "Är källan vad den utger sig för att vara eller en förfalskning?"
              },
              {
                "native": "Tidskriteriet",
                "english": "Hur nära i tiden efter händelsen dokumenterades informationen?",
                "left": "Tidskriteriet",
                "right": "Hur nära i tiden efter händelsen dokumenterades informationen?"
              },
              {
                "native": "Beroendekriteriet",
                "english": "Är uppgiften en förstahandskälla eller en återberättelse i flera led?",
                "left": "Beroendekriteriet",
                "right": "Är uppgiften en förstahandskälla eller en återberättelse i flera led?"
              },
              {
                "native": "Tendenskriteriet",
                "english": "Har författaren ett personligt eller ekonomiskt intresse i frågan?",
                "left": "Tendenskriteriet",
                "right": "Har författaren ett personligt eller ekonomiskt intresse i frågan?"
              }
            ]
          },
          {
            "id": "sv-u5-l1-q5",
            "type": "multiple_choice",
            "prompt": "Vad skiljer en nyhetsartikel från en ledartext i svensk press (t.ex. DN eller SvD)?",
            "options": [
              "Nyhetsartikeln ska vara objektiv och saklig, medan ledartexten driver tidningens politiska linje",
              "Nyhetsartikeln är alltid skriven på rim, medan ledaren är på prosa",
              "Ledartexten är alltid anonym och saknar åsikter",
              "Det finns ingen skillnad; båda uttrycker journalistens privata känslor"
            ],
            "correctAnswer": "Nyhetsartikeln ska vara objektiv och saklig, medan ledartexten driver tidningens politiska linje",
            "explanation": "I seriösa svenska medier hålls en strikt rågång mellan nyhetsrapportering (objektiv sakprosa) och opinionsjournalistik (ledare, debatt och krönikor)."
          },
          {
            "id": "sv-u5-l1-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och avgör varför denna forskningsrapport har hög trovärdighet:",
            "audioText": "Enligt en vetenskaplig metastudie från Karolinska Institutet, baserad på tjugo oberoende granskade studier, förbättras inlärningen av regelbunden fysisk aktivitet.",
            "options": [
              "Den bygger på en metastudie från Karolinska Institutet med 20 oberoende granskade studier",
              "Den publicerades av en influencer som säljer energidrycker",
              "Den är ett anonymt inlägg på ett internetforum utan källor",
              "Den är baserad på en enskild persons gissning"
            ],
            "correctAnswer": "Den bygger på en metastudie från Karolinska Institutet med 20 oberoende granskade studier",
            "explanation": "Hög akademisk auktoritet (Karolinska Institutet), oberoende kollegial granskning (peer review) och metastudie borgar för stark vetenskaplig tillförlitlighet."
          },
          {
            "id": "sv-u5-l1-q7",
            "type": "fill_blank",
            "sentence": "I en källkritisk analys måste du noga särskilja bevisade fakta från skribentens subjektiva ___.",
            "missingWord": "värderingar",
            "options": [
              "värderingar",
              "faktauppgifter",
              "forskningsresultat",
              "lagparagrafer"
            ],
            "correctAnswer": "värderingar",
            "explanation": "Fakta kan verifieras empiriskt, medan värderingar och åsikter uttrycker vad någon tycker eller känner."
          },
          {
            "id": "sv-u5-l1-q8",
            "type": "matching",
            "prompt": "Koppla textgenren i dagspress till dess funktion:",
            "pairs": [
              {
                "native": "Nyhetsnotis",
                "english": "Mycket kort, faktaspäckad redogörelse för en dagsaktuell händelse",
                "left": "Nyhetsnotis",
                "right": "Mycket kort, faktaspäckad redogörelse för en dagsaktuell händelse"
              },
              {
                "native": "Reportage",
                "english": "Fördjupande text med miljöskildringar, personintervjuer och närvaro",
                "left": "Reportage",
                "right": "Fördjupande text med miljöskildringar, personintervjuer och närvaro"
              },
              {
                "native": "Debattartikel",
                "english": "Argumenterande inlägg skrivet av en extern debattör med tydlig tes",
                "left": "Debattartikel",
                "right": "Argumenterande inlägg skrivet av en extern debattör med tydlig tes"
              },
              {
                "native": "Krönika",
                "english": "Personlig betraktelse och underhållande reflektion över vardagen",
                "left": "Krönika",
                "right": "Personlig betraktelse och underhållande reflektion över vardagen"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l6",
        "title": "Lesson 5.2: Structure of the Opinion Piece (Argumenterande text)",
        "description": "Tes, argument, motargument och bemötande. Sambandsord och markörer: å ena sidan, å andra sidan, dessutom, emellertid, följaktligen.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u5-l2-q1",
            "type": "multiple_choice",
            "prompt": "Vad kallas den centrala åsikt som en argumenterande text vill övertyga läsaren om?",
            "options": [
              "Tes",
              "Motargument",
              "Liknelse",
              "Hypotes"
            ],
            "correctAnswer": "Tes",
            "explanation": "Tesen är textens huvudpåstående (t.ex. 'Inför gratis kollektivtrafik för alla ungdomar'). All argumentation syftar till att stödja tesen."
          },
          {
            "id": "sv-u5-l2-q2",
            "type": "fill_blank",
            "sentence": "För att visa att du har förstått frågan ur flera perspektiv bör du ta upp ett starkt ___ och sedan bemöta det.",
            "missingWord": "motargument",
            "options": [
              "motargument",
              "skämt",
              "ordstäv",
              "rim"
            ],
            "correctAnswer": "motargument",
            "explanation": "Att formulera och vederlägga ett motargument visar prov på nyanserat och moget tänkande enligt Skolverkets betygskriterier."
          },
          {
            "id": "sv-u5-l2-q3",
            "type": "scramble",
            "prompt": "Ordna den balanserade argumenterande strukturen:",
            "tokens": [
              "Å",
              "ena",
              "sidan",
              "finns",
              "fördelar,",
              "å",
              "andra",
              "sidan",
              "finns",
              "risker."
            ],
            "correctTokens": [
              "Å",
              "ena",
              "sidan",
              "finns",
              "fördelar,",
              "å",
              "andra",
              "sidan",
              "finns",
              "risker."
            ],
            "explanation": "Paret 'Å ena sidan... å andra sidan' är en klassisk svensk konstruktion för att belysa två sidor av ett mynt."
          },
          {
            "id": "sv-u5-l2-q4",
            "type": "matching",
            "prompt": "Koppla sambandsorden till deras funktion i argumentationen:",
            "pairs": [
              {
                "native": "Dessutom / Vidare",
                "english": "Lägger till ytterligare ett stödjande argument i samma riktning",
                "left": "Dessutom / Vidare",
                "right": "Lägger till ytterligare ett stödjande argument i samma riktning"
              },
              {
                "native": "Emellertid / Däremot",
                "english": "Signalerar en kontrast, invändning eller motsats",
                "left": "Emellertid / Däremot",
                "right": "Signalerar en kontrast, invändning eller motsats"
              },
              {
                "native": "Följaktligen / Därför",
                "english": "Visar en logisk slutsats eller orsak-verkan-effekt",
                "left": "Följaktligen / Därför",
                "right": "Visar en logisk slutsats eller orsak-verkan-effekt"
              },
              {
                "native": "Sammanfattningsvis",
                "english": "Knyter ihop resonemanget och upprepar tesen i avslutningen",
                "left": "Sammanfattningsvis",
                "right": "Knyter ihop resonemanget och upprepar tesen i avslutningen"
              }
            ]
          },
          {
            "id": "sv-u5-l2-q5",
            "type": "multiple_choice",
            "prompt": "Vad innebär de tre retoriska övertygelsemedlen ethos, logos och pathos?",
            "options": [
              "Ethos bygger talarens trovärdighet, logos vädjar till förnuft och fakta, pathos väcker känslor",
              "De är tre grekiska filosofer som grundade det nationella provet",
              "De är tre grammatiska tempus för preteritum, perfekt och pluskvamperfekt",
              "De är typer av skiljetecken i formell svenska"
            ],
            "correctAnswer": "Ethos bygger talarens trovärdighet, logos vädjar till förnuft och fakta, pathos väcker känslor",
            "explanation": "Aristoteles tre appellformer utgör grunden för att övertyga läsare: trovärdighet (ethos), logiska sakskäl (logos) och empati/känsla (pathos)."
          },
          {
            "id": "sv-u5-l2-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och identifiera skribentens tes i anförandet:",
            "audioText": "Skolan måste omgående införa en garanterad lästimme varje morgon. Vår förmåga till djupkoncentration hotas av korta digitala klipp.",
            "options": [
              "Skolan måste införa en garanterad lästimme varje morgon",
              "Alla datorer och telefoner ska förbjudas i hemmet",
              "Eleverna behöver längre sovmorgnar",
              "Böcker ska ersättas helt med ljudklipp"
            ],
            "correctAnswer": "Skolan måste införa en garanterad lästimme varje morgon",
            "explanation": "Skribenten slår fast sin tes direkt: 'Skolan måste omgående införa en garanterad lästimme varje morgon.'"
          },
          {
            "id": "sv-u5-l2-q7",
            "type": "fill_blank",
            "sentence": "För att ett argument ska vara bärkraftigt måste det vara både sant och ___ för tesen.",
            "missingWord": "relevant",
            "options": [
              "relevant",
              "roligt",
              "långt",
              "gammalt"
            ],
            "correctAnswer": "relevant",
            "explanation": "I argumentationsanalys ställs två krav på argument: Hållbarhet (att påståendet är sant) och Relevans (att det faktiskt har med tesen att göra)."
          },
          {
            "id": "sv-u5-l2-q8",
            "type": "matching",
            "prompt": "Para ihop dispositionens delar i en argumenterande uppsats i årskurs 9:",
            "pairs": [
              {
                "native": "Inledning med tes",
                "english": "Väcka intresse, presentera bakgrund och slå fast åsikten",
                "left": "Inledning med tes",
                "right": "Väcka intresse, presentera bakgrund och slå fast åsikten"
              },
              {
                "native": "Argument 1 och 2",
                "english": "Presentera de starkaste sakliga argumenten med bevis och exempel",
                "left": "Argument 1 och 2",
                "right": "Presentera de starkaste sakliga argumenten med bevis och exempel"
              },
              {
                "native": "Motargument och bemötande",
                "english": "Lyfta motståndarens invändning och sakligt motbevisa den",
                "left": "Motargument och bemötande",
                "right": "Lyfta motståndarens invändning och sakligt motbevisa den"
              },
              {
                "native": "Avslutning med uppmaning",
                "english": "Sammanfatta huvudargumenten och rikta en kraftfull appell",
                "left": "Avslutning med uppmaning",
                "right": "Sammanfatta huvudargumenten och rikta en kraftfull appell"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l7",
        "title": "Lesson 5.3: Literary Reading & Analytical Decoding",
        "description": "Litterär analys av svensk ungdomslitteratur (Khemiri, Kadefors, Lindgren). Bildspråk: metaforer, liknelser, tema och motiv.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u5-l3-q1",
            "type": "multiple_choice",
            "prompt": "Vad skiljer en liknelse från en metafor i litterär analys?",
            "options": [
              "En liknelse innehåller ett jämförelseord ('som' eller 'likt'), medan en metafor saknar jämförelseord",
              "En liknelse är alltid sann medan en metafor alltid är en lögn",
              "En metafor får bara användas i dikter och aldrig i romaner",
              "Det finns ingen skillnad; de är synonymer"
            ],
            "correctAnswer": "En liknelse innehåller ett jämförelseord ('som' eller 'likt'), medan en metafor saknar jämförelseord",
            "explanation": "Exempel på liknelse: 'Han slogs som ett lejon'. Exempel på metafor: 'Han var ett lejon i striden' (direkt överföring utan jämförelseord)."
          },
          {
            "id": "sv-u5-l3-q2",
            "type": "fill_blank",
            "sentence": "Uttrycket 'Hennes ord var kalla knivar som skar genom rummet' är en litterär ___.",
            "missingWord": "metafor",
            "options": [
              "metafor",
              "liknelse",
              "allitteration",
              "hyperbel"
            ],
            "correctAnswer": "metafor",
            "explanation": "Här likställs orden direkt med knivar utan ordet 'som' mellan ord och kniv, vilket utgör en metafor."
          },
          {
            "id": "sv-u5-l3-q3",
            "type": "scramble",
            "prompt": "Ordna den litteraturanalytiska metoden:",
            "tokens": [
              "Analysera",
              "karaktärens",
              "inre",
              "utveckling",
              "och",
              "berättelsens",
              "övergripande",
              "budskap."
            ],
            "correctTokens": [
              "Analysera",
              "karaktärens",
              "inre",
              "utveckling",
              "och",
              "berättelsens",
              "övergripande",
              "budskap."
            ],
            "explanation": "I årskurs 9 analyserar eleven hur karaktärerna utvecklas och hur författaren gestaltar underliggande teman."
          },
          {
            "id": "sv-u5-l3-q4",
            "type": "matching",
            "prompt": "Koppla stilfigurerna till deras svenska definition och exempel:",
            "pairs": [
              {
                "native": "Liknelse",
                "english": "'Snabb som vinden' — bildspråk med jämförelseordet 'som'",
                "left": "Liknelse",
                "right": "'Snabb som vinden' — bildspråk med jämförelseordet 'som'"
              },
              {
                "native": "Metafor",
                "english": "'Du är min sol' — bildspråk där ett begrepp överförs direkt utan 'som'",
                "left": "Metafor",
                "right": "'Du är min sol' — bildspråk där ett begrepp överförs direkt utan 'som'"
              },
              {
                "native": "Besjälning",
                "english": "'Skogen suckade djupt' — döda ting ges mänskliga egenskaper",
                "left": "Besjälning",
                "right": "'Skogen suckade djupt' — döda ting ges mänskliga egenskaper"
              },
              {
                "native": "Hyperbel",
                "english": "'Jag dör av hunger' — en medveten och kraftig överdrift",
                "left": "Hyperbel",
                "right": "'Jag dör av hunger' — en medveten och kraftig överdrift"
              }
            ]
          },
          {
            "id": "sv-u5-l3-q5",
            "type": "multiple_choice",
            "prompt": "Vad är skillnaden mellan ett litterärt 'tema' och ett 'motiv'?",
            "options": [
              "Temat är verkets övergripande idé eller budskap (t.ex. utanförskap), medan motivet är en konkret typsituation (t.ex. styvmodern)",
              "Temat är huvudpersonens namn och motivet är bokens omslagsbild",
              "Motivet är författarens lön och temat är bokförlaget",
              "Det är exakt samma sak i Skolverkets betygskriterier"
            ],
            "correctAnswer": "Temat är verkets övergripande idé eller budskap (t.ex. utanförskap), medan motivet är en konkret typsituation (t.ex. styvmodern)",
            "explanation": "Ett tema är abstrakt och allmängiltigt (kärlek, förräderi, mod), medan motiv är de konkreta situationer och element som bygger upp temat."
          },
          {
            "id": "sv-u5-l3-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och identifiera vilket verk och tema som presenteras:",
            "audioText": "I Jonas Hassen Khemiris hyllade debutroman 'Ett öga rött' gestaltas Halims sökande efter identitet och makt över språket i ett segregerat Stockholm.",
            "options": [
              "'Ett öga rött' av Jonas Hassen Khemiri (identitet och språk)",
              "'Pippi Långstrump' av Astrid Lindgren (äventyr till sjöss)",
              "'Mio, min Mio' av Astrid Lindgren (kamp mot riddar Kato)",
              "'Gösta Berlings saga' av Selma Lagerlöf (herrgårdsliv i Värmland)"
            ],
            "correctAnswer": "'Ett öga rött' av Jonas Hassen Khemiri (identitet och språk)",
            "explanation": "Ljudklippet nämner 'Ett öga rött' av Jonas Hassen Khemiri och belyser Halims sökande efter identitet och språk."
          },
          {
            "id": "sv-u5-l3-q7",
            "type": "fill_blank",
            "sentence": "När en skribent inte skriver ut allt rakt på sak utan låter läsaren förstå genom antydningar, kallas det att läsa mellan ___.",
            "missingWord": "raderna",
            "options": [
              "raderna",
              "sidorna",
              "böckerna",
              "bokstäverna"
            ],
            "correctAnswer": "raderna",
            "explanation": "Att 'läsa mellan raderna' innebär att göra inferenser och tolka det som antyds snarare än det som står bokstavligt utskrivet."
          },
          {
            "id": "sv-u5-l3-q8",
            "type": "matching",
            "prompt": "Para ihop svenska klassiska författare med deras centrala teman:",
            "pairs": [
              {
                "native": "Jonas Hassen Khemiri",
                "english": "Språklig lek, förortens verklighet och identitetskris ('Ett öga rött')",
                "left": "Jonas Hassen Khemiri",
                "right": "Språklig lek, förortens verklighet och identitetskris ('Ett öga rött')"
              },
              {
                "native": "Sara Kadefors",
                "english": "Klasskillnader, fördomar och ung förälskelse ('Sandor slash Ida')",
                "left": "Sara Kadefors",
                "right": "Klasskillnader, fördomar och ung förälskelse ('Sandor slash Ida')"
              },
              {
                "native": "Astrid Lindgren",
                "english": "Mod, syskonskap, död och frihetskamp ('Bröderna Lejonhjärta')",
                "left": "Astrid Lindgren",
                "right": "Mod, syskonskap, död och frihetskamp ('Bröderna Lejonhjärta')"
              },
              {
                "native": "Mats Wahl",
                "english": "Tonårskonflikter, rasism och kärlek i Stockholmsmiljö ('Vinterviken')",
                "left": "Mats Wahl",
                "right": "Tonårskonflikter, rasism och kärlek i Stockholmsmiljö ('Vinterviken')"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l8",
        "title": "Lesson 5.4: Grade 9 Nationella Prov Preparation",
        "description": "Genomgång av nationella provets tre delprov: Delprov A (Tala i par), Delprov B (Läsa skönlitteratur och sakprosa) och Delprov C (Skriva).",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u5-l4-q1",
            "type": "multiple_choice",
            "prompt": "Hur ser strukturen ut för Skolverkets nationella prov i svenska i årskurs 9?",
            "options": [
              "Delprov A (Muntligt samtal i par/grupp), Delprov B (Läsförståelse) och Delprov C (Skriftlig produktion)",
              "Endast ett digitalt flervalsprov med tjugo frågor",
              "Ett rent grammatikprov med ordkunskapstest",
              "Enbart en muntlig presentation inför hela skolan"
            ],
            "correctAnswer": "Delprov A (Muntligt samtal i par/grupp), Delprov B (Läsförståelse) och Delprov C (Skriftlig produktion)",
            "explanation": "Nationella provet i årskurs 9 testar elevernas allsidiga kommunikativa kompetens: Tala (A), Läsa (B1/B2) och Skriva (C)."
          },
          {
            "id": "sv-u5-l4-q2",
            "type": "fill_blank",
            "sentence": "I Delprov C (Skriva) är det obligatoriskt att använda och referera till texterna i det utdelade ___.",
            "missingWord": "texthäftet",
            "options": [
              "texthäftet",
              "lexikonet",
              "atlaset",
              "schemat"
            ],
            "correctAnswer": "texthäftet",
            "explanation": "Eleverna får ett tematiskt texthäfte och måste citera eller referera till minst en eller två källor med korrekt källhänvisning."
          },
          {
            "id": "sv-u5-l4-q3",
            "type": "scramble",
            "prompt": "Ordna den gyllene regeln för Delprov C (Skriva):",
            "tokens": [
              "Följ",
              "instruktionen",
              "noggrant",
              "och",
              "behåll",
              "en",
              "tydlig",
              "röd",
              "tråd."
            ],
            "correctTokens": [
              "Följ",
              "instruktionen",
              "noggrant",
              "och",
              "behåll",
              "en",
              "tydlig",
              "röd",
              "tråd."
            ],
            "explanation": "Skolverkets bedömningsmatris betonar att texten måste hålla sig strikt till uppgiften och uppvisa logisk struktur."
          },
          {
            "id": "sv-u5-l4-q4",
            "type": "matching",
            "prompt": "Koppla delproven i årskurs 9 till deras bedömningsfokus:",
            "pairs": [
              {
                "native": "Delprov A (Tala)",
                "english": "Förmåga att delta i samtal, lyssna, ställa följdfrågor och utveckla resonemang",
                "left": "Delprov A (Tala)",
                "right": "Förmåga att delta i samtal, lyssna, ställa följdfrågor och utveckla resonemang"
              },
              {
                "native": "Delprov B (Läsa)",
                "english": "Läsförståelse av sakprosa och skönlitteratur, källkritik och tolkningsförmåga",
                "left": "Delprov B (Läsa)",
                "right": "Läsförståelse av sakprosa och skönlitteratur, källkritik och tolkningsförmåga"
              },
              {
                "native": "Delprov C (Skriva)",
                "english": "Författa en sammanhängande text med god disposition, källhänvisningar och språklig precision",
                "left": "Delprov C (Skriva)",
                "right": "Författa en sammanhängande text med god disposition, källhänvisningar och språklig precision"
              },
              {
                "native": "Textbindning",
                "english": "Använda sambandsord så att styckena hänger ihop till en fungerande helhet",
                "left": "Textbindning",
                "right": "Använda sambandsord så att styckena hänger ihop till en fungerande helhet"
              }
            ]
          },
          {
            "id": "sv-u5-l4-q5",
            "type": "multiple_choice",
            "prompt": "Vad innebär kravet på att 'resonera i flera led' för att nå betyget C eller A i årskurs 9?",
            "options": [
              "Att förklara bakomliggande orsaker, direkta effekter och långsiktiga konsekvenser ur olika perspektiv",
              "Att skriva texten med ovanligt stor stil så att den tar mycket plats",
              "Att upprepa samma argument tre gånger med olika synonymer",
              "Att citera hela texten från häftet ord för ord utan egna kommentarer"
            ],
            "correctAnswer": "Att förklara bakomliggande orsaker, direkta effekter och långsiktiga konsekvenser ur olika perspektiv",
            "explanation": "Ett resonemang i flera led visar kausalsamband (orsak -> verkan -> konsekvens) och belyser frågan ur mer än en synvinkel."
          },
          {
            "id": "sv-u5-l4-q6",
            "type": "audio_listen",
            "prompt": "Lyssna på provledarens instruktion inför Delprov C:",
            "audioText": "Tänk på att disponera din tid väl. Du har tre klocktimmar på dig. Läs instruktionen noga och glöm inte att ange författare och titel när du refererar till texterna.",
            "options": [
              "Du har tre timmar på dig och måste ange författare och titel vid källreferat",
              "Provet tar en kvart och källhänvisningar är förbjudna",
              "Du får samarbeta med din bänkkamrat under hela skrivtiden",
              "Du ska bara skriva en dikt på fem rader"
            ],
            "correctAnswer": "Du har tre timmar på dig och måste ange författare och titel vid källreferat",
            "explanation": "Instruktionen betonar tre timmars provtid samt vikten av att ange författare och titel när man refererar till källorna."
          },
          {
            "id": "sv-u5-l4-q7",
            "type": "fill_blank",
            "sentence": "Ett referat av en text ur häftet måste skrivas med egna ord och innehålla tydliga ___ som 'författaren belyser' eller 'skribenten påstår'.",
            "missingWord": "referatmarkörer",
            "options": [
              "referatmarkörer",
              "skällsord",
              "mellanslag",
              "utropstecken"
            ],
            "correctAnswer": "referatmarkörer",
            "explanation": "Referatmarkörer (t.ex. 'artikelförfattaren hävdar', 'enligt rapporten') skiljer källans tankar från skribentens egna reflektioner."
          },
          {
            "id": "sv-u5-l4-q8",
            "type": "matching",
            "prompt": "Koppla betygsstegen i Skolverkets betygsskala för Delprov C:",
            "pairs": [
              {
                "native": "Betyg E (Godtagbar)",
                "english": "Texten följer instruktionen, har enkel röd tråd och grundläggande källhänvisning",
                "left": "Betyg E (Godtagbar)",
                "right": "Texten följer instruktionen, har enkel röd tråd och grundläggande källhänvisning"
              },
              {
                "native": "Betyg C (Utvecklad)",
                "english": "Tydlig disposition, god textbindning, utvecklade resonemang och fungerande källintegration",
                "left": "Betyg C (Utvecklad)",
                "right": "Tydlig disposition, god textbindning, utvecklade resonemang och fungerande källintegration"
              },
              {
                "native": "Betyg A (Välutvecklad)",
                "english": "Stilistisk säkerhet, nyanserat språk, djup källkritisk syntes och resonemang i flera led",
                "left": "Betyg A (Välutvecklad)",
                "right": "Stilistisk säkerhet, nyanserat språk, djup källkritisk syntes och resonemang i flera led"
              },
              {
                "native": "Betyg F (Icke godkänd)",
                "english": "Texten missar uppgiften, saknar sammanhang eller plagierar källorna rakt av",
                "left": "Betyg F (Icke godkänd)",
                "right": "Texten missar uppgiften, saknar sammanhang eller plagierar källorna rakt av"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sv-unit-6",
    "unitId": "sv-unit-6",
    "unitNumber": 6,
    "level": "Track B: Gymnasieskolan SVA 3 (Nationellt prov)",
    "title": "Unit 6: Advanced Rhetoric, Literature & Gymnasieskolan Graduation",
    "subtitle": "Klassisk retorik (partesläran), språkhistoria (runsvenska till nysvenska, du-reformen), nordisk litteraturkanon och digitalt nationellt prov.",
    "icon": "Award",
    "color": "#ec4899",
    "lessons": [
      {
        "id": "sv-u2-l9",
        "title": "Lesson 6.1: Rhetorical Masterclass & Public Address",
        "description": "Partesläran (intellectio till actio), talets klassiska disposition (exordium, narratio, peroratio) och stilfigurer (anafor, antites, trikolon).",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u6-l1-q1",
            "type": "multiple_choice",
            "prompt": "Vilken är den korrekta ordningsföljden i den klassiska retoriska arbetsprocessen (partesläran)?",
            "options": [
              "Intellectio, Inventio, Dispositio, Elocutio, Memoria, Actio",
              "Actio, Memoria, Elocutio, Dispositio, Inventio, Intellectio",
              "Inventio, Actio, Dispositio, Intellectio, Elocutio, Memoria",
              "Exordium, Narratio, Propositio, Argumentatio, Peroratio"
            ],
            "correctAnswer": "Intellectio, Inventio, Dispositio, Elocutio, Memoria, Actio",
            "explanation": "Parteslärans sex steg: Förstå uppgiften (intellectio), samla material (inventio), strukturera (dispositio), formulera (elocutio), lära in (memoria) och framföra (actio)."
          },
          {
            "id": "sv-u6-l1-q2",
            "type": "fill_blank",
            "sentence": "Den inledande delen av ett tal som syftar till att göra publiken välvilligt inställd kallas enligt klassisk retorik för ___.",
            "missingWord": "exordium",
            "options": [
              "exordium",
              "narratio",
              "peroratio",
              "refutatio"
            ],
            "correctAnswer": "exordium",
            "explanation": "Exordium (inledningen) fångar åhörarnas uppmärksamhet och bygger upp talarens trovärdighet (captatio benevolentiae)."
          },
          {
            "id": "sv-u6-l1-q3",
            "type": "scramble",
            "prompt": "Ordna den klassiska taldispositionens huvudsteg:",
            "tokens": [
              "Inled",
              "med",
              "exordium,",
              "redogör",
              "i",
              "narratio",
              "och",
              "avsluta",
              "med",
              "peroratio."
            ],
            "correctTokens": [
              "Inled",
              "med",
              "exordium,",
              "redogör",
              "i",
              "narratio",
              "och",
              "avsluta",
              "med",
              "peroratio."
            ],
            "explanation": "Från inledning (exordium) genom bakgrund (narratio) till kraftfull avslutning (peroratio)."
          },
          {
            "id": "sv-u6-l1-q4",
            "type": "matching",
            "prompt": "Para ihop retoriska stilfigurer med deras definitioner:",
            "pairs": [
              {
                "native": "Anafor",
                "english": "Upprepning av samma ord i början av flera satser i rad",
                "left": "Anafor",
                "right": "Upprepning av samma ord i början av flera satser i rad"
              },
              {
                "native": "Antites",
                "english": "Två motsatta begrepp ställs mot varandra för kontrastverkan",
                "left": "Antites",
                "right": "Två motsatta begrepp ställs mot varandra för kontrastverkan"
              },
              {
                "native": "Trikolon (Tretal)",
                "english": "En rytmisk uppräkning av tre element ('tro, hopp och kärlek')",
                "left": "Trikolon (Tretal)",
                "right": "En rytmisk uppräkning av tre element ('tro, hopp och kärlek')"
              },
              {
                "native": "Allitteration",
                "english": "Bokstavsrim där flera ord i följd börjar på samma konsonant",
                "left": "Allitteration",
                "right": "Bokstavsrim där flera ord i följd börjar på samma konsonant"
              }
            ]
          },
          {
            "id": "sv-u6-l1-q5",
            "type": "multiple_choice",
            "prompt": "Vilken retorisk stilfigur exemplifieras av citatet: 'Det krävs mod att tala, men det krävs också mod att lyssna'?",
            "options": [
              "Antites kombinerad med anaforisk upprepning",
              "Hyperbel och parodi",
              "Slang och talspråk",
              "Pleonasms och tautologi"
            ],
            "correctAnswer": "Antites kombinerad med anaforisk upprepning",
            "explanation": "Att tala vs att lyssna ställs i motsats (antites) med upprepad struktur ('det krävs mod...')."
          },
          {
            "id": "sv-u6-l1-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och avgör vilken retorisk fas talaren befinner sig i:",
            "audioText": "Låt oss därför gemensamt lova varandra i dag: vi ska inte tveka, vi ska inte ge upp, vi ska bygga en framtid där varje röst räknas!",
            "options": [
              "Peroratio (talets avslutning med stark känslomässig appell och tretal)",
              "Intellectio (talarens förberedelse i ensamhet)",
              "Källkritiskt abstract i en fotnot",
              "En stillsam presentation av talarens namn"
            ],
            "correctAnswer": "Peroratio (talets avslutning med stark känslomässig appell och tretal)",
            "explanation": "Talaren håller sitt slutord (peroratio) med trikolon ('inte tveka, inte ge upp, bygga en framtid') för att mana publiken till handling."
          },
          {
            "id": "sv-u6-l1-q7",
            "type": "fill_blank",
            "sentence": "Kroppsspråk, blick, röstläge och pauser under framförandet hör till retorikens sista steg: ___.",
            "missingWord": "actio",
            "options": [
              "actio",
              "memoria",
              "inventio",
              "elocutio"
            ],
            "correctAnswer": "actio",
            "explanation": "Actio (pronuntiatio) är den fysiska framställningen och rösthanteringen inför publik."
          },
          {
            "id": "sv-u6-l1-q8",
            "type": "matching",
            "prompt": "Para ihop retoriska taltyper enligt genreläran:",
            "pairs": [
              {
                "native": "Genus demonstrativum (Hyllningstal)",
                "english": "Tal som hyllar eller klandrar vid högtider (bröllop, begravning, jubileum)",
                "left": "Genus demonstrativum (Hyllningstal)",
                "right": "Tal som hyllar eller klandrar vid högtider (bröllop, begravning, jubileum)"
              },
              {
                "native": "Genus deliberativum (Politiskt tal)",
                "english": "Tal som råder eller avråder inför framtida beslut i riksdag eller debatt",
                "left": "Genus deliberativum (Politiskt tal)",
                "right": "Tal som råder eller avråder inför framtida beslut i riksdag eller debatt"
              },
              {
                "native": "Genus iudiciale (Juridiskt tal)",
                "english": "Försvars- eller anklagelsetal i domstol om vad som skett i det förflutna",
                "left": "Genus iudiciale (Juridiskt tal)",
                "right": "Försvars- eller anklagelsetal i domstol om vad som skett i det förflutna"
              },
              {
                "native": "Docere, movere, delectare",
                "english": "Retorikens tre mål: Att undervisa, beröra och behaga åhörarna",
                "left": "Docere, movere, delectare",
                "right": "Retorikens tre mål: Att undervisa, beröra och behaga åhörarna"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l10",
        "title": "Lesson 6.2: Historical Language Evolution & Dialectology",
        "description": "Från runsvenska (Rökstenen) och fornsvenska (Äldre Västgötalagen) till Gustav Vasas bibel 1526, 1700-talets franska lånord och Du-reformen 1967.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u6-l2-q1",
            "type": "multiple_choice",
            "prompt": "Vilken händelse år 1526 räknas traditionellt som startpunkten för äldre nysvenska?",
            "options": [
              "Översättningen och tryckningen av Nya testamentet på svenska under Gustav Vasa",
              "Byggandet av regalskeppet Vasa",
              "Grundandet av Svenska Akademien av Gustav III",
              "Undertecknandet av Kalmarunionen"
            ],
            "correctAnswer": "Översättningen och tryckningen av Nya testamentet på svenska under Gustav Vasa",
            "explanation": "Gustav Vasas Nya testamente 1526 (och hela bibeln 1541) skapade ett enhetligt svenskt skriftspråk som bröt med den fornsvenska dialektspridningen."
          },
          {
            "id": "sv-u6-l2-q2",
            "type": "fill_blank",
            "sentence": "Under medeltiden förändrades det fornsvenska ordförrådet dramatiskt genom massivt inflytande från ___, spridit av Hansans köpmän.",
            "missingWord": "lågtyska",
            "options": [
              "lågtyska",
              "spanska",
              "ryska",
              "arabiska"
            ],
            "correctAnswer": "lågtyska",
            "explanation": "Hanseförbundets lågtyska tillförde tusentals ord inom handel, hantverk och stadsliv (t.ex. stad, skräddare, köpman, betala, klok, frihet)."
          },
          {
            "id": "sv-u6-l2-q3",
            "type": "scramble",
            "prompt": "Ordna den språkhistoriska händelseutvecklingen:",
            "tokens": [
              "Du-reformen",
              "år",
              "1967",
              "demokratiserade",
              "tilltalet",
              "i",
              "hela",
              "det",
              "svenska",
              "samhället."
            ],
            "correctTokens": [
              "Du-reformen",
              "år",
              "1967",
              "demokratiserade",
              "tilltalet",
              "i",
              "hela",
              "det",
              "svenska",
              "samhället."
            ],
            "explanation": "Du-reformen avskaffade det hierarkiska titulerandet ('Herr direktör', 'Fru grevinna', 'Ni') till förmån för ett jämlikt 'du'."
          },
          {
            "id": "sv-u6-l2-q4",
            "type": "matching",
            "prompt": "Para ihop de historiska språkinfluenserna med typiska svenska lånord:",
            "pairs": [
              {
                "native": "Medeltida lågtyska",
                "english": "Stad, borgmästare, snickare, köpa, betala, fönster, bli, ganska",
                "left": "Medeltida lågtyska",
                "right": "Stad, borgmästare, snickare, köpa, betala, fönster, bli, ganska"
              },
              {
                "native": "1700-talets franska",
                "english": "Parfym, fåtölj, dessert, journalist, ridå, garderob, frisyr",
                "left": "1700-talets franska",
                "right": "Parfym, fåtölj, dessert, journalist, ridå, garderob, frisyr"
              },
              {
                "native": "Modern engelska",
                "english": "Dator, container, tejp, strejk, mejl, sajt, podcast, stream",
                "left": "Modern engelska",
                "right": "Dator, container, tejp, strejk, mejl, sajt, podcast, stream"
              },
              {
                "native": "Kyrkligt latin och grekiska",
                "english": "Biskop, altare, präst, kloster, skola, kyrka, filosofi",
                "left": "Kyrkligt latin och grekiska",
                "right": "Biskop, altare, präst, kloster, skola, kyrka, filosofi"
              }
            ]
          },
          {
            "id": "sv-u6-l2-q5",
            "type": "multiple_choice",
            "prompt": "Vilket kännetecken utmärker de sydsvenska målen (t.ex. i Skåne och Blekinge)?",
            "options": [
              "Bakre uvulart r-ljud ('skorrande r') samt diftongering av långa vokaler",
              "Melodisk musikalisk accent med apokope i slutet av alla verb",
              "Avsaknad av bestämd artikel",
              "Att alla substantiv böjs som neutrum (ett-ord)"
            ],
            "correctAnswer": "Bakre uvulart r-ljud ('skorrande r') samt diftongering av långa vokaler",
            "explanation": "Sydsvenska mål har bakre r (skorrande r) till skillnad från det främre rullande r-ljudet i mellansvenska och norrländska dialekter."
          },
          {
            "id": "sv-u6-l2-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och identifiera vilket historiskt monument som omtalas:",
            "audioText": "Rökstenen i Östergötland, rest på 800-talet, bär världens längsta runinskrift och speglar övergången från urnordiska till runsvenska.",
            "options": [
              "Rökstenen i Östergötland med världens längsta runinskrift",
              "Gripsholms slott och dess bibliotek",
              "Uppsala domkyrkas medeltida klockor",
              "Visby ringmur på Gotland"
            ],
            "correctAnswer": "Rökstenen i Östergötland med världens längsta runinskrift",
            "explanation": "Ljudavsnittet beskriver Rökstenen i Östergötland från 800-talet som ett centralt runsvenskt monument."
          },
          {
            "id": "sv-u6-l2-q7",
            "type": "fill_blank",
            "sentence": "Olof von Dalins tidskrift 'Then Swänska Argus' från 1732 markerar inträdet i epoken ___ nysvenska genom sitt lediga och talspråksnära skrivsätt.",
            "missingWord": "yngre",
            "options": [
              "yngre",
              "äldre",
              "urnordisk",
              "fornsvensk"
            ],
            "correctAnswer": "yngre",
            "explanation": "Then Swänska Argus (1732) brukar i svensk språkhistoria sätta gränsen mellan äldre och yngre nysvenska."
          },
          {
            "id": "sv-u6-l2-q8",
            "type": "matching",
            "prompt": "Para ihop Sveriges sex traditionella dialektområden:",
            "pairs": [
              {
                "native": "Sydsvenska mål",
                "english": "Skåne, Blekinge, södra Halland och södra Småland",
                "left": "Sydsvenska mål",
                "right": "Skåne, Blekinge, södra Halland och södra Småland"
              },
              {
                "native": "Götamål",
                "english": "Västergötland, Dalsland, Bohuslän och norra Halland",
                "left": "Götamål",
                "right": "Västergötland, Dalsland, Bohuslän och norra Halland"
              },
              {
                "native": "Sveamål",
                "english": "Uppland, Södermanland, Västmanland och Dalarna",
                "left": "Sveamål",
                "right": "Uppland, Södermanland, Västmanland och Dalarna"
              },
              {
                "native": "Norrländska mål",
                "english": "Gästrikland, Hälsingland och norrut till Norrbotten",
                "left": "Norrländska mål",
                "right": "Gästrikland, Hälsingland och norrut till Norrbotten"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l11",
        "title": "Lesson 6.3: Nordic Literature & Comparative Text Analysis",
        "description": "Det moderna genombrottet (Brandes), August Strindberg (Röda rummet, Fröken Julie), Selma Lagerlöf, Henrik Ibsen (Ett dockhem) och Karin Boye.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u6-l3-q1",
            "type": "multiple_choice",
            "prompt": "Vilken litterär epok och paroll inleddes i Norden efter Georg Brandes berömda föreläsningar 1871?",
            "options": [
              "Det moderna genombrottet — 'Litteraturen ska sätta samhällsproblem under debatt'",
              "Romantiken — 'Litteraturen ska fly verkligheten till sagornas värld'",
              "Medeltidens riddarromantik — 'Hedra kungen och kyrkan'",
              "Postmodernismen — 'All mening är en illusion'"
            ],
            "correctAnswer": "Det moderna genombrottet — 'Litteraturen ska sätta samhällsproblem under debatt'",
            "explanation": "Den danske kritikern Georg Brandes krävde att nordisk litteratur skulle debattera äktenskap, religion, klass och könsroller."
          },
          {
            "id": "sv-u6-l3-q2",
            "type": "fill_blank",
            "sentence": "Selma Lagerlöf blev 1909 den allra första kvinnan att tilldelas Nobelpriset i ___.",
            "missingWord": "litteratur",
            "options": [
              "litteratur",
              "fred",
              "fysik",
              "medicin"
            ],
            "correctAnswer": "litteratur",
            "explanation": "Selma Lagerlöf erhöll Nobelpriset i litteratur 1909 och valdes senare in i Svenska Akademien på stol nummer 7."
          },
          {
            "id": "sv-u6-l3-q3",
            "type": "scramble",
            "prompt": "Ordna den litterära analysen av August Strindbergs författarskap:",
            "tokens": [
              "Röda",
              "rummet",
              "från",
              "1879",
              "inledde",
              "naturalismen",
              "i",
              "svensk",
              "litteratur."
            ],
            "correctTokens": [
              "Röda",
              "rummet",
              "från",
              "1879",
              "inledde",
              "naturalismen",
              "i",
              "svensk",
              "litteratur."
            ],
            "explanation": "Strindbergs satiriska skildring av Stockholms byråkrati och konstnärsliv i 'Röda rummet' förnyade det svenska prosaspråket."
          },
          {
            "id": "sv-u6-l3-q4",
            "type": "matching",
            "prompt": "Para ihop nordiska litterära mästerverk med deras författare och tematik:",
            "pairs": [
              {
                "native": "August Strindberg",
                "english": "'Fröken Julie' — naturalistiskt drama om klasskamp och könskonflikt",
                "left": "August Strindberg",
                "right": "'Fröken Julie' — naturalistiskt drama om klasskamp och könskonflikt"
              },
              {
                "native": "Henrik Ibsen",
                "english": "'Ett dockhem' — Nora lämnar Torvald för sin personliga frihet",
                "left": "Henrik Ibsen",
                "right": "'Ett dockhem' — Nora lämnar Torvald för sin personliga frihet"
              },
              {
                "native": "Selma Lagerlöf",
                "english": "'Gösta Berlings saga' — mustig värmländsk berättarkonst och försoning",
                "left": "Selma Lagerlöf",
                "right": "'Gösta Berlings saga' — mustig värmländsk berättarkonst och försoning"
              },
              {
                "native": "Karin Boye",
                "english": "'Kallocain' — dystopisk roman om totalitär övervakning och samvete",
                "left": "Karin Boye",
                "right": "'Kallocain' — dystopisk roman om totalitär övervakning och samvete"
              }
            ]
          },
          {
            "id": "sv-u6-l3-q5",
            "type": "multiple_choice",
            "prompt": "Vilken berömd dikt av Karin Boye inleds med raderna: 'Ja visst gör det ont när knoppar brister. Varför skulle annars våren tveka?'",
            "options": [
              "'Ja visst gör det ont'",
              "'Du är min renaste tröst'",
              "'Till Österland vill jag fara'",
              "'Ett folk i vapen'"
            ],
            "correctAnswer": "'Ja visst gör det ont'",
            "explanation": "Dikten ur samlingen 'För trädets skull' (1935) är en av den svenska poesins mest älskade klassiker om livets smärtsamma men nödvändiga utveckling."
          },
          {
            "id": "sv-u6-l3-q6",
            "type": "audio_listen",
            "prompt": "Lyssna och avgör vilket epos av Vilhelm Moberg som beskrivs:",
            "audioText": "Vilhelm Mobergs storslagna Utvandrarsvit skildrar småländska bönders hårda liv, religiösa förtryck och den mödosamma resan till Minnesota i Amerika.",
            "options": [
              "Vilhelm Mobergs Utvandrarsvit (Karl Oskar och Kristina)",
              "Eyvind Johnsons 'Romanen om Olof'",
              "Harry Martinsons rymdepos 'Aniara'",
              "Hjalmar Söderbergs 'Doktor Glas'"
            ],
            "correctAnswer": "Vilhelm Mobergs Utvandrarsvit (Karl Oskar och Kristina)",
            "explanation": "I ljudspåret beskrivs Vilhelm Mobergs klassiska romansvit om den svenska emigrationen till Amerika under 1800-talet."
          },
          {
            "id": "sv-u6-l3-q7",
            "type": "fill_blank",
            "sentence": "Hjalmar Söderbergs roman 'Doktor Glas' från 1905 behandlar det brännande moraliska dilemmat om man har rätt att döda en människa för att rädda en ___.",
            "missingWord": "annan",
            "options": [
              "annan",
              "stad",
              "förmögenhet",
              "regering"
            ],
            "correctAnswer": "annan",
            "explanation": "Doktor Glas brottas med frågan: 'Har man rätt att döda en människa för att rädda en annan?'"
          },
          {
            "id": "sv-u6-l3-q8",
            "type": "matching",
            "prompt": "Para ihop litterära epoker med deras stilistiska kännetecken:",
            "pairs": [
              {
                "native": "Upplysningen (1700-tal)",
                "english": "Förnuftstro, satir mot auktoriteter och vetenskaplig klarhet",
                "left": "Upplysningen (1700-tal)",
                "right": "Förnuftstro, satir mot auktoriteter och vetenskaplig klarhet"
              },
              {
                "native": "Romantiken (tidigt 1800-tal)",
                "english": "Känslostormar, vördnad för naturen, folksjäl och historiska myter",
                "left": "Romantiken (tidigt 1800-tal)",
                "right": "Känslostormar, vördnad för naturen, folksjäl och historiska myter"
              },
              {
                "native": "Realismen/Naturalismen (sent 1800-tal)",
                "english": "Vetenskaplig detaljskärpa, arv och miljö, social debatt",
                "left": "Realismen/Naturalismen (sent 1800-tal)",
                "right": "Vetenskaplig detaljskärpa, arv och miljö, social debatt"
              },
              {
                "native": "Modernismen (1900-tal)",
                "english": "Fri vers, uppbruten kronologi, existentiell ångest och alienation",
                "left": "Modernismen (1900-tal)",
                "right": "Fri vers, uppbruten kronologi, existentiell ångest och alienation"
              }
            ]
          }
        ]
      },
      {
        "id": "sv-u2-l12",
        "title": "Lesson 6.4: Upper Secondary Graduation Test (Nationella provet i Svenska 3)",
        "description": "Den digitala provplattformen, författa en vetenskaplig utredande text, syntetisera 3–4 textkällor och uppfylla Skolverkets högsta betygskriterier.",
        "xp": 25,
        "completed": false,
        "questions": [
          {
            "id": "sv-u6-l4-q1",
            "type": "multiple_choice",
            "prompt": "Vad är huvuduppgiften i det skriftliga nationella provet i Svenska 3 / SVA 3 på gymnasiet?",
            "options": [
              "Att författa en utredande eller argumenterande vetenskaplig text som syntetiserar och källkritiskt granskar flera texter ur provhäftet",
              "Att memorera och skriva ned en dikt utan stavfel",
              "Att göra ett rent grammatiskt böjningstest på tid",
              "Att översätta en engelsk artikel till svenska"
            ],
            "correctAnswer": "Att författa en utredande eller argumenterande vetenskaplig text som syntetiserar och källkritiskt granskar flera texter ur provhäftet",
            "explanation": "I Svenska 3 prövas studentens förmåga till akademisk källsyntes: att självständigt sammanföra, jämföra och värdera 3–4 källor i en stringent uppsats."
          },
          {
            "id": "sv-u6-l4-q2",
            "type": "fill_blank",
            "sentence": "Att inte bara sammanfatta källor var för sig, utan väva ihop deras perspektiv och jämföra dem med varandra kallas att göra en käll-___.",
            "missingWord": "syntes",
            "options": [
              "syntes",
              "kopia",
              "översättning",
              "karikatyr"
            ],
            "correctAnswer": "syntes",
            "explanation": "En syntes innebär att man förenar skilda källor till en ny, sammanhängande och analyserande helhet."
          },
          {
            "id": "sv-u6-l4-q3",
            "type": "scramble",
            "prompt": "Ordna regeln för akademisk källhänvisning i Svenska 3:",
            "tokens": [
              "Ange",
              "alltid",
              "författare,",
              "årtal",
              "och",
              "källa",
              "vid",
              "varje",
              "referat."
            ],
            "correctTokens": [
              "Ange",
              "alltid",
              "författare,",
              "årtal",
              "och",
              "källa",
              "vid",
              "varje",
              "referat."
            ],
            "explanation": "Korrekt referatteknik enligt APA, Harvard eller Oxford är obligatorisk för godkänt betyg på gymnasienivå."
          },
          {
            "id": "sv-u6-l4-q4",
            "type": "matching",
            "prompt": "Para ihop referatmarkörerna med deras nyans i en utredande text:",
            "pairs": [
              {
                "native": "Forskaren påvisar / fastställer",
                "english": "Markerar ett vetenskapligt bevisat och empiriskt belagt faktum",
                "left": "Forskaren påvisar / fastställer",
                "right": "Markerar ett vetenskapligt bevisat och empiriskt belagt faktum"
              },
              {
                "native": "Skribenten hävdar / gör gällande",
                "english": "Visar att det rör sig om författarens egen åsikt eller tolkning",
                "left": "Skribenten hävdar / gör gällande",
                "right": "Visar att det rör sig om författarens egen åsikt eller tolkning"
              },
              {
                "native": "Författaren problematiserar",
                "english": "Belyser svårigheter, etiska dilemman och motstridiga intressen",
                "left": "Författaren problematiserar",
                "right": "Belyser svårigheter, etiska dilemman och motstridiga intressen"
              },
              {
                "native": "Kritikern ifrågasätter",
                "english": "Introducerar invändningar mot en etablerad ståndpunkt eller metod",
                "left": "Kritikern ifrågasätter",
                "right": "Introducerar invändningar mot en etablerad ståndpunkt eller metod"
              }
            ]
          },
          {
            "id": "sv-u6-l4-q5",
            "type": "multiple_choice",
            "prompt": "Vilken stilnivå krävs för betyget A i Svenska 3 på gymnasiet?",
            "options": [
              "Formellt och precist skriftspråk med varierad meningsbyggnad, god textbindning och nominaliseringar där talspråksdrag undviks helt",
              "Vardagligt talspråk med förkortningar, emojis och utropstecken",
              "Arkaisk 1600-talssvenska med pluraländelser på verben",
              "Engelsk slang blandad med svenska ord"
            ],
            "correctAnswer": "Formellt och precist skriftspråk med varierad meningsbyggnad, god textbindning och nominaliseringar där talspråksdrag undviks helt",
            "explanation": "Gymnasiebetyget A kräver akademisk precision, stilistisk säkerhet, avancerad meningsbyggnad och konsekvent formalia."
          },
          {
            "id": "sv-u6-l4-q6",
            "type": "audio_listen",
            "prompt": "Lyssna på informationen om Skolverkets digitala provplattform:",
            "audioText": "I Skolverkets digitala provsystem genomförs provet i en säker nedlåst webbläsare utan internetåtkomst, med integrerad ordbehandlare och digital tillgång till källtexterna.",
            "options": [
              "Provet görs i en säker nedlåst webbläsare med inbyggd ordbehandlare och digitala textkällor",
              "Studenterna kan fritt chatta med artificiell intelligens och söka på Google",
              "Provet skrivs uteslutande för hand med bläckpenna på linjerat papper",
              "Provet har ingen tidsgräns och får tas med hem"
            ],
            "correctAnswer": "Provet görs i en säker nedlåst webbläsare med inbyggd ordbehandlare och digitala textkällor",
            "explanation": "Skolverkets digitala prov genomförs i en säker, nedlåst klient (kiosk-läge) som garanterar likvärdig och rättssäker examination."
          },
          {
            "id": "sv-u6-l4-q7",
            "type": "fill_blank",
            "sentence": "Att skriva av text från källhäftet ord för ord utan citattecken och källhänvisning betraktas som otillåtet ___ och leder till underkänt prov.",
            "missingWord": "plagiat",
            "options": [
              "plagiat",
              "referat",
              "citat",
              "abstract"
            ],
            "correctAnswer": "plagiat",
            "explanation": "Plagiat strider mot alla akademiska och gymnasiala regler och resulterar i att provet ogiltigförklaras."
          },
          {
            "id": "sv-u6-l4-q8",
            "type": "matching",
            "prompt": "Para ihop Skolverkets officiella betygskriterier i Svenska 3:",
            "pairs": [
              {
                "native": "Betyg E",
                "english": "Behandlar ämnet med acceptabel struktur, relevant källanvändning och begriplig stil",
                "left": "Betyg E",
                "right": "Behandlar ämnet med acceptabel struktur, relevant källanvändning och begriplig stil"
              },
              {
                "native": "Betyg C",
                "english": "Välstrukturerad disposition, säker källhantering, god textbindning och utvecklade resonemang",
                "left": "Betyg C",
                "right": "Välstrukturerad disposition, säker källhantering, god textbindning och utvecklade resonemang"
              },
              {
                "native": "Betyg A",
                "english": "Stilistisk virtuositet, stringent analys, djupgående källsyntes och problematisering i flera led",
                "left": "Betyg A",
                "right": "Stilistisk virtuositet, stringent analys, djupgående källsyntes och problematisering i flera led"
              },
              {
                "native": "Källförteckning",
                "english": "Fullständig och korrekt formaterad bibliografi i slutet av den akademiska uppsatsen",
                "left": "Källförteckning",
                "right": "Fullständig och korrekt formaterad bibliografi i slutet av den akademiska uppsatsen"
              }
            ]
          }
        ]
      }
    ]
  }
];
