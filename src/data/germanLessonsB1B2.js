// =========================================================================
// BAMF DTZ & DeuFöV Berufssprachkurse Aligned German Curriculum
// Phase 2: Selbstständige Sprachverwendung (B1–B2)
// Units 5 to 8 • 4 Lessons per Unit = 16 Lessons Total
// =========================================================================

export const germanB1B2Units = [
  // =========================================================================
  // UNIT 5: Gesellschaft, Ämter & Institutionen (B1.1)
  // Handlungsfeld: Behörden und Ämter / Gesellschaftliches Leben
  // =========================================================================
  {
    id: "de-unit-5",
    unitId: "de-unit-5",
    unitNumber: 5,
    level: "Phase 2: B1.1 (Selbstständige Sprachverwendung)",
    title: "Unit 5: Gesellschaft, Ämter & Institutionen (B1.1)",
    subtitle: "Behörden und Ämter — Nebensätze (weil, dass, wenn, obwohl), Genitiv, reflexive Verben, Bürgerservice.",
    icon: "BookOpen",
    color: "#8b5cf6",
    lessons: [
      {
        id: "de-u5-l1",
        title: "Lesson 5.1: Termine auf dem Amt (Anmeldung & Ausländerbehörde)",
        description: "Wohnsitz anmelden beim Bürgeramt, Meldebestätigung, Aufenthaltstitel verlängern, Missverständnisse aufklären.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u5-l1-q1",
            type: "multiple_choice",
            prompt: "Was ist die gesetzliche 'Wohnsitzanmeldung' in Deutschland?",
            options: [
              "Die Pflicht jedes Einwohners, sich innerhalb von zwei Wochen nach Umzug beim Bürgeramt anzumelden",
              "Eine Einladung zu einem Stadtfest",
              "Ein Kaufvertrag für Grundstücke",
              "Eine optionale Umfrage der Stadtwerke"
            ],
            correctAnswer: "Die Pflicht jedes Einwohners, sich innerhalb von zwei Wochen nach Umzug beim Bürgeramt anzumelden",
            explanation: "Nach dem Bundesmeldegesetz muss sich jeder Bürger innerhalb von 14 Tagen nach Bezug einer neuen Wohnung beim örtlichen Bürgeramt/Einwohnermeldeamt anmelden."
          },
          {
            id: "de-u5-l1-q2",
            type: "fill_blank",
            sentence: "Für die Anmeldung beim Bürgeramt benötigen Sie die Wohnungsgeber-___ vom Vermieter.",
            missingWord: "bestätigung",
            options: ["bestätigung", "werbung", "farbe", "rechnung"],
            correctAnswer: "bestätigung",
            explanation: "Die 'Wohnungsgeberbestätigung' (Vermieterbescheinigung) ist das amtliche Formular, in dem der Vermieter den Einzug schriftlich bestätigt."
          },
          {
            id: "de-u5-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die Nebensatz-Konjunktionen ihren Bedeutungen zu:",
            pairs: [
              { native: "weil", english: "Kausal (Grund: 'weil ich einen Termin habe')", left: "weil", right: "Kausal (Grund: 'weil ich einen Termin habe')" },
              { native: "obwohl", english: "Konzessiv (Gegengrund: 'obwohl es regnet')", left: "obwohl", right: "Konzessiv (Gegengrund: 'obwohl es regnet')" },
              { native: "wenn", english: "Konditional / Temporal (Bedingung: 'wenn Sie Zeit haben')", left: "wenn", right: "Konditional / Temporal (Bedingung: 'wenn Sie Zeit haben')" },
              { native: "dass", english: "Inhaltssatz (Aussage: 'Ich weiß, dass...')", left: "dass", right: "Inhaltssatz (Aussage: 'Ich weiß, dass...')" }
            ]
          },
          {
            id: "de-u5-l1-q4",
            type: "scramble",
            prompt: "Bauen Sie den Nebensatz mit 'weil' (finites Verb ganz am Ende!):",
            tokens: ["Ich", "gehe", "zum", "Amt,", "weil", "ich", "meinen", "Pass", "verlängern", "muss."],
            correctTokens: ["Ich", "gehe", "zum", "Amt,", "weil", "ich", "meinen", "Pass", "verlängern", "muss."],
            explanation: "In untergeordneten Nebensätzen mit 'weil' rückt das konjugierte Verb ('muss') an die allerletzte Satzstelle."
          },
          {
            id: "de-u5-l1-q5",
            type: "multiple_choice",
            prompt: "Wo steht das finite (konjugierte) Verb in einem deutschen Nebensatz mit 'dass' oder 'obwohl'?",
            options: [
              "Ganz am Ende des Nebensatzes",
              "Auf Position 2 wie im Hauptsatz",
              "Ganz am Anfang vor dem Subjekt",
              "Es entfällt komplett"
            ],
            correctAnswer: "Ganz am Ende des Nebensatzes",
            explanation: "Subordinierende Konjunktionen (weil, dass, obwohl, wenn, als) verbannen das konjugierte Verb ans Satzende (Verbletztstellung)."
          },
          {
            id: "de-u5-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Sachbearbeiterin bei der Ausländerbehörde. Welche Unterlage fehlt?",
            audioText: "Ihr Antrag ist fast vollständig, aber uns fehlt noch der aktuelle Gehaltsnachweis Ihres Arbeitgebers.",
            options: [
              "Der aktuelle Gehaltsnachweis des Arbeitgebers",
              "Der Reisepass im Original",
              "Das Passfoto",
              "Die Geburtsurkunde der Eltern"
            ],
            correctAnswer: "Der aktuelle Gehaltsnachweis des Arbeitgebers",
            explanation: "Die Beamtin sagt deutlich: 'uns fehlt noch der aktuelle Gehaltsnachweis'."
          },
          {
            id: "de-u5-l1-q7",
            type: "fill_blank",
            sentence: "Könnten Sie mir das bitte erklären? Ich habe diesen Bescheid nicht ganz ___.",
            missingWord: "verstanden",
            options: ["verstanden", "gekauft", "gesehen", "gebacken"],
            correctAnswer: "verstanden",
            explanation: "Höfliche Nachfrage bei Unklarheiten: 'Ich habe diesen Bescheid nicht ganz verstanden'."
          },
          {
            id: "de-u5-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die amtlichen Dokumente ihren Behörden zu:",
            pairs: [
              { native: "Meldebescheinigung", english: "Bürgeramt / Einwohnermeldeamt", left: "Meldebescheinigung", right: "Bürgeramt / Einwohnermeldeamt" },
              { native: "Elektronischer Aufenthaltstitel (eAT)", english: "Ausländerbehörde", left: "Elektronischer Aufenthaltstitel (eAT)", right: "Ausländerbehörde" },
              { native: "Steuer-Identifikationsnummer", english: "Finanzamt", left: "Steuer-Identifikationsnummer", right: "Finanzamt" },
              { native: "Bürgergeld-Bescheid", english: "Jobcenter", left: "Bürgergeld-Bescheid", right: "Jobcenter" }
            ]
          }
        ]
      },
      {
        id: "de-u5-l2",
        title: "Lesson 5.2: Schriftverkehr mit Behörden",
        description: "Offizielle Briefe und E-Mails an Behörden formulieren: Betreffzeile, Aktenzeichen, formelle Anrede und Schlussformeln.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u5-l2-q1",
            type: "multiple_choice",
            prompt: "Wie lautet die korrekte formelle Anrede in einem Brief an eine Behörde, wenn der Name des Empfängers unbekannt ist?",
            options: [
              "Sehr geehrte Damen und Herren,",
              "Liebe Freunde,",
              "Hallo zusammen,",
              "Guten Tag Amt,"
            ],
            correctAnswer: "Sehr geehrte Damen und Herren,",
            explanation: "'Sehr geehrte Damen und Herren,' ist die protokollarisch vorgeschriebene formelle Anrede im deutschen Behörden- und Geschäftsbrief."
          },
          {
            id: "de-u5-l2-q2",
            type: "fill_blank",
            sentence: "Bei Rückfragen geben Sie bitte immer unser ___ an (z. B. AZ: 2024-X45).",
            missingWord: "Aktenzeichen",
            options: ["Aktenzeichen", "Passwort", "Gehalt", "Geburtstag"],
            correctAnswer: "Aktenzeichen",
            explanation: "Das 'Aktenzeichen' (AZ) ermöglicht Behörden die sofortige Zuordnung eines Schreibens zum Vorgang."
          },
          {
            id: "de-u5-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie die Elemente eines deutschen DIN-Geschäftsbriefs zu:",
            pairs: [
              { native: "Briefkopf", english: "Absender mit Anschrift und Kontaktdaten", left: "Briefkopf", right: "Absender mit Anschrift und Kontaktdaten" },
              { native: "Betreffzeile", english: "Kurze Inhaltsangabe in fetter Schrift ohne Punkt", left: "Betreffzeile", right: "Kurze Inhaltsangabe in fetter Schrift ohne Punkt" },
              { native: "Grußformel", english: "Mit freundlichen Grüßen (ohne Komma)", left: "Grußformel", right: "Mit freundlichen Grüßen (ohne Komma)" },
              { native: "Anlagenvermerk", english: "Hinweis auf beigefügte Dokumente (Anlage)", left: "Anlagenvermerk", right: "Hinweis auf beigefügte Dokumente (Anlage)" }
            ]
          },
          {
            id: "de-u5-l2-q4",
            type: "scramble",
            prompt: "Bauen Sie die förmliche Bitte im Behördenbrief zusammen:",
            tokens: ["Ich", "bitte", "Sie", "höflich", "um", "eine", "schriftliche", "Bestätigung."],
            correctTokens: ["Ich", "bitte", "Sie", "höflich", "um", "eine", "schriftliche", "Bestätigung."],
            explanation: "Standardformel für amtliche Anträge: 'Ich bitte Sie höflich um eine schriftliche Bestätigung'."
          },
          {
            id: "de-u5-l2-q5",
            type: "multiple_choice",
            prompt: "Wird nach der deutschen Schlussformel 'Mit freundlichen Grüßen' ein Komma gesetzt?",
            options: [
              "Nein, im Deutschen steht nach 'Mit freundlichen Grüßen' KEIN Komma (direkt darunter folgt die Unterschrift)",
              "Ja, immer ein Pflichtkomma",
              "Ein Ausrufezeichen",
              "Ein Semikolon"
            ],
            correctAnswer: "Nein, im Deutschen steht nach 'Mit freundlichen Grüßen' KEIN Komma (direkt darunter folgt die Unterschrift)",
            explanation: "Ein wichtiger Unterschied zum Englischen: Im Deutschen folgt nach 'Mit freundlichen Grüßen' kein Satzzeichen."
          },
          {
            id: "de-u5-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Fristbelehrung auf dem behördlichen Bescheid. Wie lang ist die Widerspruchsfrist?",
            audioText: "Gegen diesen Bescheid können Sie innerhalb eines Monats nach Bekanntgabe schriftlich Widerspruch einlegen.",
            options: [
              "Innerhalb eines Monats",
              "Innerhalb von drei Tagen",
              "Ein Jahr lang",
              "Es ist kein Widerspruch möglich"
            ],
            correctAnswer: "Innerhalb eines Monats",
            explanation: "Die Rechtsbehelfsbelehrung nennt: 'innerhalb eines Monats nach Bekanntgabe'."
          },
          {
            id: "de-u5-l2-q7",
            type: "fill_blank",
            sentence: "Hiermit lege ich gegen Ihren Bescheid vom 14. Mai form- und fristgerecht ___ ein.",
            missingWord: "Widerspruch",
            options: ["Widerspruch", "Urlaub", "Geld", "Pause"],
            correctAnswer: "Widerspruch",
            explanation: "Gegen einen Verwaltungsakt legt der Bürger offiziell 'Widerspruch' ein."
          },
          {
            id: "de-u5-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Genitivformen ihren Bedeutungen zu:",
            pairs: [
              { native: "des Bürgers (maskulin)", english: "Genitiv Singular maskulin mit -(e)s", left: "des Bürgers (maskulin)", right: "Genitiv Singular maskulin mit -(e)s" },
              { native: "der Stadt (feminin)", english: "Genitiv Singular feminin mit 'der'", left: "der Stadt (feminin)", right: "Genitiv Singular feminin mit 'der'" },
              { native: "des Amtes (neutral)", english: "Genitiv Singular neutral mit -(e)s", left: "des Amtes (neutral)", right: "Genitiv Singular neutral mit -(e)s" },
              { native: "der Behörden (Plural)", english: "Genitiv Plural mit 'der'", left: "der Behörden (Plural)", right: "Genitiv Plural mit 'der'" }
            ]
          }
        ]
      },
      {
        id: "de-u5-l3",
        title: "Lesson 5.3: Kinderbetreuung und Schule",
        description: "Kindertagesstätte (Kita), Schulanmeldung, Grundschule und weiterführende Schulen, Elternabende und Zeugnisse.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u5-l3-q1",
            type: "multiple_choice",
            prompt: "Was versteht man in Deutschland unter einer 'Kita'?",
            options: [
              "Kindertagesstätte (Einrichtung zur Betreuung von Kleinkindern und Kindergartenkindern)",
              "Ein Krankenhaus für Senioren",
              "Eine weiterführende Universität",
              "Eine Einkaufsstraße"
            ],
            correctAnswer: "Kindertagesstätte (Einrichtung zur Betreuung von Kleinkindern und Kindergartenkindern)",
            explanation: "'Kita' ist das Kurzwort für Kindertagesstätte (Krippe und Kindergarten)."
          },
          {
            id: "de-u5-l3-q2",
            type: "fill_blank",
            sentence: "Am Donnerstagabend findet in der Grundschule der erste ___ für alle Eltern statt.",
            missingWord: "Elternabend",
            options: ["Elternabend", "Mittagsschlaf", "Ferientag", "Kaufvertrag"],
            correctAnswer: "Elternabend",
            explanation: "Der 'Elternabend' ist das regelmäßige Informationstreffen zwischen Lehrkräften und Eltern."
          },
          {
            id: "de-u5-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die deutschen Schulformen zu:",
            pairs: [
              { native: "Grundschule", english: "Klassen 1 bis 4 (in Berlin/Brandenburg 1 bis 6)", left: "Grundschule", right: "Klassen 1 bis 4 (in Berlin/Brandenburg 1 bis 6)" },
              { native: "Gymnasium", english: "Führt nach Klasse 12 oder 13 zum Abitur", left: "Gymnasium", right: "Führt nach Klasse 12 oder 13 zum Abitur" },
              { native: "Realschule / Gesamtschule", english: "Mittlerer Schulabschluss (Realschulabschluss)", left: "Realschule / Gesamtschule", right: "Mittlerer Schulabschluss (Realschulabschluss)" },
              { native: "Berufsschule", english: "Theoretischer Teil der dualen Ausbildung", left: "Berufsschule", right: "Theoretischer Teil der dualen Ausbildung" }
            ]
          },
          {
            id: "de-u5-l3-q4",
            type: "scramble",
            prompt: "Bringen Sie die Entschuldigung für die Schule in die richtige Form:",
            tokens: ["Mein", "Sohn", "kann", "heute", "nicht", "zur", "Schule", "kommen,", "weil", "er", "fiebert."],
            correctTokens: ["Mein", "Sohn", "kann", "heute", "nicht", "zur", "Schule", "kommen,", "weil", "er", "fiebert."],
            explanation: "Krankmeldung des Kindes mit Kausalsatz ('weil er fiebert')."
          },
          {
            id: "de-u5-l3-q5",
            type: "multiple_choice",
            prompt: "Welches ist die beste Note im deutschen Schulnotensystem (von 1 bis 6)?",
            options: [
              "Note 1 (sehr gut)",
              "Note 6 (ungenügend)",
              "Note 10",
              "Note A+"
            ],
            correctAnswer: "Note 1 (sehr gut)",
            explanation: "Im deutschen Schulsystem reicht die Notenskala von 1 (sehr gut) bis 6 (ungenügend)."
          },
          {
            id: "de-u5-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Lehrerin beim Elterngespräch. Was lobt sie besonders an der Schülerin?",
            audioText: "Sara arbeitet im Unterricht sehr aktiv mit und hilft ihren Mitschülern gerne bei Gruppenarbeiten.",
            options: [
              "Sie arbeitet sehr aktiv mit und hilft Mitschülern hilfsbereit",
              "Sie kommt immer zu spät zum Unterricht",
              "Sie verweigert die Hausaufgaben",
              "Sie spricht kein einziges Wort"
            ],
            correctAnswer: "Sie arbeitet sehr aktiv mit und hilft Mitschülern hilfsbereit",
            explanation: "Die Lehrerin lobt ausdrücklich Saras aktive Mitarbeit und Hilfsbereitschaft."
          },
          {
            id: "de-u5-l3-q7",
            type: "fill_blank",
            sentence: "Am Ende des Schulhalbjahres erhalten alle Schüler ihr ___.",
            missingWord: "Zeugnis",
            options: ["Zeugnis", "Rezept", "Fahrrad", "Telefon"],
            correctAnswer: "Zeugnis",
            explanation: "Die offizielle Beurteilung mit Noten am Halbjahres- und Schuljahresende heißt 'Zeugnis'."
          },
          {
            id: "de-u5-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die Begriffe der Kinderbetreuung zu:",
            pairs: [
              { native: "Tagesmutter / Tagesvater", english: "Kindertagespflege in kleiner Gruppe", left: "Tagesmutter / Tagesvater", right: "Kindertagespflege in kleiner Gruppe" },
              { native: "Hort / Ganztagsbetreuung", english: "Nachmittagsbetreuung nach dem Grundschulunterricht", left: "Hort / Ganztagsbetreuung", right: "Nachmittagsbetreuung nach dem Grundschulunterricht" },
              { native: "Einschulung", english: "Erster Schultag mit Schultüte", left: "Einschulung", right: "Erster Schultag mit Schultüte" },
              { native: "Schulpflicht", english: "Gesetzliche Pflicht zum Schulbesuch ab 6 Jahren", left: "Schulpflicht", right: "Gesetzliche Pflicht zum Schulbesuch ab 6 Jahren" }
            ]
          }
        ]
      },
      {
        id: "de-u5-l4",
        title: "Lesson 5.4: Bürgerpflichten & Mülltrennung",
        description: "Das deutsche Mülltrennungssystem (Gelber Sack, Altpapier, Biomüll, Restmüll, Glascontainer, Pfandsystem) und Nachbarschaftspflichten.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u5-l4-q1",
            type: "multiple_choice",
            prompt: "Welche Abfälle gehören in die 'Gelbe Tonne' (oder den 'Gelben Sack')?",
            options: [
              "Verpackungen aus Kunststoff, Metall und Verbundstoffen mit dem Grünen Punkt",
              "Alte Zeitungen und Pappkartons",
              "Essensreste und Kaffeesatz",
              "Glasflaschen und Weinkorken"
            ],
            correctAnswer: "Verpackungen aus Kunststoff, Metall und Verbundstoffen mit dem Grünen Punkt",
            explanation: "In die Gelbe Tonne gehören Leichtverpackungen aus Plastik, Alufolie, Konservendosen und Getränkekartons (Tetra Pak)."
          },
          {
            id: "de-u5-l4-q2",
            type: "fill_blank",
            sentence: "Bananenschalen, Gemüsereste und Kaffeesatz gehören in die ___-Tonne.",
            missingWord: "Bio",
            options: ["Bio", "Papier", "Glas", "Restmüll"],
            correctAnswer: "Bio",
            explanation: "Organische Küchen- und Gartenabfälle gehören in die braune oder grüne Biotonne zur Kompostierung."
          },
          {
            id: "de-u5-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Mülltonnen den Abfallarten zu:",
            pairs: [
              { native: "Blaue Tonne", english: "Altpapier, Zeitschriften und Kartonagen", left: "Blaue Tonne", right: "Altpapier, Zeitschriften und Kartonagen" },
              { native: "Braune Tonne", english: "Biotonne (organische Abfälle)", left: "Braune Tonne", right: "Biotonne (organische Abfälle)" },
              { native: "Schwarze/Graue Tonne", english: "Restmüll (nicht recyclebarer Hausmüll)", left: "Schwarze/Graue Tonne", right: "Restmüll (nicht recyclebarer Hausmüll)" },
              { native: "Glascontainer", english: "Nach Farben getrennt: Weiß-, Grün- und Braunglas", left: "Glascontainer", right: "Nach Farben getrennt: Weiß-, Grün- und Braunglas" }
            ]
          },
          {
            id: "de-u5-l4-q4",
            type: "scramble",
            prompt: "Ordnen Sie den Satz zum Pfandsystem:",
            tokens: ["Bringen", "Sie", "die", "leeren", "Flaschen", "zum", "Pfandautomaten", "zurück."],
            correctTokens: ["Bringen", "Sie", "die", "leeren", "Flaschen", "zum", "Pfandautomaten", "zurück."],
            explanation: "Pfandflaschen (Einweg mit DPG-Logo = 25 Cent, Mehrweg = 8–15 Cent) gibt man im Supermarkt am Leergutautomaten zurück."
          },
          {
            id: "de-u5-l4-q5",
            type: "multiple_choice",
            prompt: "Darf man am Sonntag oder spät in der Nacht Altglas in die Straßencontainer einwerfen?",
            options: [
              "Nein, wegen Lärmschutz darf Glas nur an Werktagen (meist 07:00–20:00 Uhr) eingeworfen werden",
              "Ja, 24 Stunden rund um die Uhr erlaubt",
              "Nur sonntags von 13:00 bis 15:00 Uhr",
              "Nur bei Regen"
            ],
            correctAnswer: "Nein, wegen Lärmschutz darf Glas nur an Werktagen (meist 07:00–20:00 Uhr) eingeworfen werden",
            explanation: "Um Anwohner vor Klirr-Lärm zu schützen, ist der Glaseinwurf an Sonn- und Feiertagen sowie nachts untersagt."
          },
          {
            id: "de-u5-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Mitteilung der Hausverwaltung. Wann wird der Sperrmüll abgeholt?",
            audioText: "Die diesjährige Sperrmüllabfuhr für Großmöbel findet am Dienstag, den 18. Juni, ab sechs Uhr morgens statt.",
            options: [
              "Am Dienstag, 18. Juni, ab 06:00 Uhr",
              "Am Sonntagabend um 22:00 Uhr",
              "Jeden ersten Freitag im Monat",
              "Sperrmüll muss man immer selbst verbrennen"
            ],
            correctAnswer: "Am Dienstag, 18. Juni, ab 06:00 Uhr",
            explanation: "Die Ansage nennt: 'am Dienstag, den 18. Juni, ab sechs Uhr morgens'."
          },
          {
            id: "de-u5-l4-q7",
            type: "fill_blank",
            sentence: "Für Einweg-Getränkedosen zahlt man in Deutschland 25 Cent ___.",
            missingWord: "Pfand",
            options: ["Pfand", "Zinsen", "Steuer", "Trinkgeld"],
            correctAnswer: "Pfand",
            explanation: "Das gesetzliche Einwegpfand beträgt 25 Cent pro Dose oder PET-Flasche."
          },
          {
            id: "de-u5-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Bürgerpflichten zu:",
            pairs: [
              { native: "Winterdienst (Schneeräumen)", english: "Gehwege vor dem Haus morgens von Schnee und Eis befreien", left: "Winterdienst (Schneeräumen)", right: "Gehwege vor dem Haus morgens von Schnee und Eis befreien" },
              { native: "Kehrwoche", english: "Regelmäßige Treppenhausreinigung durch Mieter im Wechsel", left: "Kehrwoche", right: "Regelmäßige Treppenhausreinigung durch Mieter im Wechsel" },
              { native: "Ruhezeiten einhalten", english: "Keine lauten Maschinen an Sonn- und Feiertagen", left: "Ruhezeiten einhalten", right: "Keine lauten Maschinen an Sonn- und Feiertagen" },
              { native: "Rauchmelderpflicht", english: "Schlaf- und Fluchträume müssen mit Feuermeldern ausgestattet sein", left: "Rauchmelderpflicht", right: "Schlaf- und Fluchträume müssen mit Feuermeldern ausgestattet sein" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 6: Beruf & Meinungsäußerung (B1.2)
  // Handlungsfeld: Arbeitssuche / Aus- und Weiterbildung
  // =========================================================================
  {
    id: "de-unit-6",
    unitId: "de-unit-6",
    unitNumber: 6,
    level: "Phase 2: B1.2 (Selbstständige Sprachverwendung)",
    title: "Unit 6: Beruf & Meinungsäußerung (B1.2)",
    subtitle: "Arbeitssuche / Aus- und Weiterbildung — Konjunktiv II, Vorgangspassiv (werden + Partizip II), Relativsätze, Debatten.",
    icon: "GraduationCap",
    color: "#d97706",
    lessons: [
      {
        id: "de-u6-l1",
        title: "Lesson 6.1: Der deutsche Lebenslauf",
        description: "Tabellarischer Lebenslauf nach deutschen Standards, chronologischer vs. antichronologischer Aufbau, Qualifikationen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u6-l1-q1",
            type: "multiple_choice",
            prompt: "Welche Formatierung ist für einen deutschen Lebenslauf der Standard?",
            options: [
              "Der tabellarische Lebenslauf (antichronologisch: neueste Stationen zuerst)",
              "Ein handgeschriebener Fließtext ohne Daten",
              "Eine mündliche Tonaufnahme",
              "Ein kurzes Gedicht über eigene Hobbys"
            ],
            correctAnswer: "Der tabellarische Lebenslauf (antichronologisch: neueste Stationen zuerst)",
            explanation: "In Deutschland wird ein übersichtlich gegliederter tabellarischer Lebenslauf erwartet, meist beginnend mit der aktuellen Position."
          },
          {
            id: "de-u6-l1-q2",
            type: "fill_blank",
            sentence: "Zu vollständigen Bewerbungsunterlagen gehören Anschreiben, Lebenslauf und Arbeits-___.",
            missingWord: "zeugnisse",
            options: ["zeugnisse", "kleidung", "rezepte", "fahrkarten"],
            correctAnswer: "zeugnisse",
            explanation: "In Deutschland legen Arbeitgeber höchsten Wert auf schriftliche qualifizierte 'Arbeitszeugnisse' früherer Vorgesetzter."
          },
          {
            id: "de-u6-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die Rubriken des Lebenslaufs ihren Inhalten zu:",
            pairs: [
              { native: "Beruflicher Werdegang", english: "Bisherige Arbeitsstellen, Positionen und Aufgaben", left: "Beruflicher Werdegang", right: "Bisherige Arbeitsstellen, Positionen und Aufgaben" },
              { native: "Ausbildung / Studium", english: "Schule, Hochschule, Berufsausbildung mit Abschlüssen", left: "Ausbildung / Studium", right: "Schule, Hochschule, Berufsausbildung mit Abschlüssen" },
              { native: "Besondere Kenntnisse", english: "Sprachen (nach GER: A1–C2), IT-Kenntnisse, Führerschein", left: "Besondere Kenntnisse", right: "Sprachen (nach GER: A1–C2), IT-Kenntnisse, Führerschein" },
              { native: "Persönliche Daten", english: "Name, Anschrift, E-Mail, Telefonnummer, Geburtsdatum", left: "Persönliche Daten", right: "Name, Anschrift, E-Mail, Telefonnummer, Geburtsdatum" }
            ]
          },
          {
            id: "de-u6-l1-q4",
            type: "scramble",
            prompt: "Bauen Sie den Relativsatz im Lebenslauf zusammen:",
            tokens: ["Ich", "suche", "eine", "Stelle,", "die", "meinen", "Qualifikationen", "entspricht."],
            correctTokens: ["Ich", "suche", "eine", "Stelle,", "die", "meinen", "Qualifikationen", "entspricht."],
            explanation: "Relativsatz mit femininem Relativpronomen ('die Stelle' -> 'die') und Verb am Ende ('entspricht')."
          },
          {
            id: "de-u6-l1-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet das Sprachniveau 'verhandlungssicher' im deutschen Lebenslauf?",
            options: [
              "Sehr hohe Sprachkompetenz (C1/C2), um fachlich anspruchsvolle Geschäftsverhandlungen zu führen",
              "Grundkenntnisse auf A1-Niveau",
              "Nur Texte mit Wörterbuch lesen können",
              "Die Sprache der Eltern"
            ],
            correctAnswer: "Sehr hohe Sprachkompetenz (C1/C2), um fachlich anspruchsvolle Geschäftsverhandlungen zu führen",
            explanation: "'Verhandlungssicher' entspricht C1/C2, während 'fließend' meist B2/C1 und 'Grundkenntnisse' A1/A2 meint."
          },
          {
            id: "de-u6-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Karriereberater. Worauf kommt es beim Bewerbungsanschreiben an?",
            audioText: "Im Anschreiben sollten Sie präzise begründen, warum genau Ihr Profil und Ihre Motivation perfekt zum Unternehmen passen.",
            options: [
              "Präzise Motivation und Passung zum Unternehmen begründen",
              "Möglichst fünf Seiten Fließtext schreiben",
              "Nur das gewünschte Gehalt nennen",
              "Keine Rechtschreibprüfung durchführen"
            ],
            correctAnswer: "Präzise Motivation und Passung zum Unternehmen begründen",
            explanation: "Der Berater betont die individuelle Motivation und Passgenauigkeit für die Stelle."
          },
          {
            id: "de-u6-l1-q7",
            type: "fill_blank",
            sentence: "Am Ende des Lebenslaufs stehen immer Ort, Datum und die handschriftliche ___.",
            missingWord: "Unterschrift",
            options: ["Unterschrift", "Note", "Adresse", "Kopie"],
            correctAnswer: "Unterschrift",
            explanation: "Ein klassischer deutscher Lebenslauf wird mit Ort, Datum und Unterschrift abgeschlossen."
          },
          {
            id: "de-u6-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die Relativpronomen nach Kasus und Genus zu:",
            pairs: [
              { native: "der Kollege (Nominativ maskulin)", english: "der...", left: "der Kollege (Nominativ maskulin)", right: "der..." },
              { native: "den Kollegen (Akkusativ maskulin)", english: "den ich kenne...", left: "den Kollegen (Akkusativ maskulin)", right: "den ich kenne..." },
              { native: "dem Kollegen (Dativ maskulin)", english: "dem ich helfe...", left: "dem Kollegen (Dativ maskulin)", right: "dem ich helfe..." },
              { native: "die Firma (Akkusativ feminin)", english: "die mich anstellt...", left: "die Firma (Akkusativ feminin)", right: "die mich anstellt..." }
            ]
          }
        ]
      },
      {
        id: "de-u6-l2",
        title: "Lesson 6.2: Das Vorstellungsgespräch (Konjunktiv II)",
        description: "Höfliche Bitten und Vorstellungen mit Konjunktiv II (hätte, wäre, würde gern), Stärken präsentieren, Gehalt ansprechen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u6-l2-q1",
            type: "multiple_choice",
            prompt: "Welche Formulierung mit Konjunktiv II drückt im Bewerbungsgespräch eine höfliche Absicht aus?",
            options: [
              "Ich würde mich sehr freuen, Teil Ihres Teams zu werden.",
              "Ihr müsst mich sofort einstellen!",
              "Ich will viel Geld verdienen.",
              "Ich habe keine Lust auf Überstunden."
            ],
            correctAnswer: "Ich würde mich sehr freuen, Teil Ihres Teams zu werden.",
            explanation: "'Ich würde mich freuen...' ist die klassische, hochgeschätzte Höflichkeitsformel im Konjunktiv II."
          },
          {
            id: "de-u6-l2-q2",
            type: "fill_blank",
            sentence: "Wenn Sie mir die Chance geben, ___ ich meine Fähigkeiten mit vollem Engagement einbringen.",
            missingWord: "würde",
            options: ["würde", "wird", "wurde", "worden"],
            correctAnswer: "würde",
            explanation: "Konjunktiv II mit 'würde + Infinitiv' für hypothetische Höflichkeit."
          },
          {
            id: "de-u6-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie den Indikativ der Konjunktiv II-Form zu:",
            pairs: [
              { native: "ich habe", english: "ich hätte", left: "ich habe", right: "ich hätte" },
              { native: "ich bin", english: "ich wäre", left: "ich bin", right: "ich wäre" },
              { native: "ich kann", english: "ich könnte", left: "ich kann", right: "ich könnte" },
              { native: "ich will / mag", english: "ich möchte / würde gern", left: "ich will / mag", right: "ich möchte / würde gern" }
            ]
          },
          {
            id: "de-u6-l2-q4",
            type: "scramble",
            prompt: "Bauen Sie die Rückfrage an den Personalleiter zusammen:",
            tokens: ["Könnten", "Sie", "mir", "mehr", "über", "die", "Einarbeitungsphase", "erzählen?"],
            correctTokens: ["Könnten", "Sie", "mir", "mehr", "über", "die", "Einarbeitungsphase", "erzählen?"],
            explanation: "Höfliche Bewerberfrage mit dem Konjunktiv II von können ('Könnten Sie...')."
          },
          {
            id: "de-u6-l2-q5",
            type: "multiple_choice",
            prompt: "Wie antwortet man professionell auf die Frage nach den eigenen Schwächen im Vorstellungsgespräch?",
            options: [
              "Man nennt eine echte Entwicklungsfläche, an der man bereits aktiv arbeitet (z. B. Fachbegriffe perfektionieren)",
              "Man behauptet arrogant, gar keine Fehler oder Schwächen zu haben",
              "Man sagt, dass man morgens nie pünktlich aufstehen kann",
              "Man schweigt und verlässt den Raum"
            ],
            correctAnswer: "Man nennt eine echte Entwicklungsfläche, an der man bereits aktiv arbeitet (z. B. Fachbegriffe perfektionieren)",
            explanation: "Reflektierte Selbstwahrnehmung und Lernbereitschaft werden im deutschen Berufsleben positiv bewertet."
          },
          {
            id: "de-u6-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Frage der Personalleiterin. Worüber möchte sie sprechen?",
            audioText: "Kommen wir nun zu Ihren Gehaltsvorstellungen: Welches Bruttojahresgehalt stellen Sie sich vor?",
            options: [
              "Über das gewünschte Bruttojahresgehalt",
              "Über den Urlaubsort des Bewerbers",
              "Über das Mittagessen in der Kantine",
              "Über die Krankengeschichte der Familie"
            ],
            correctAnswer: "Über das gewünschte Bruttojahresgehalt",
            explanation: "In Deutschland verhandelt man bei Gehaltsgesprächen traditionell das jährliche 'Bruttogehalt' vor Steuern."
          },
          {
            id: "de-u6-l2-q7",
            type: "fill_blank",
            sentence: "Es ___ mir eine große Ehre, für Ihr Unternehmen tätig zu sein.",
            missingWord: "wäre",
            options: ["wäre", "ist", "war", "gewesen"],
            correctAnswer: "wäre",
            explanation: "Konjunktiv II von sein: 'Es wäre mir eine große Ehre'."
          },
          {
            id: "de-u6-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Phasen eines Bewerbungsgesprächs zu:",
            pairs: [
              { native: "Smalltalk & Begrüßung", english: "Eisbrecher, angenehme Atmosphäre schaffen", left: "Smalltalk & Begrüßung", right: "Eisbrecher, angenehme Atmosphäre schaffen" },
              { native: "Selbstpräsentation", english: "Kurze Zusammenfassung des Werdegangs und Erfolge", left: "Selbstpräsentation", right: "Kurze Zusammenfassung des Werdegangs und Erfolge" },
              { native: "Fragen zur Stelle", english: "Aufgabenprofil, Teamstruktur, Arbeitszeiten", left: "Fragen zur Stelle", right: "Aufgabenprofil, Teamstruktur, Arbeitszeiten" },
              { native: "Verabschiedung", english: "Bedanken für das Gespräch, Verbleib vereinbaren", left: "Verabschiedung", right: "Bedanken für das Gespräch, Verbleib vereinbaren" }
            ]
          }
        ]
      },
      {
        id: "de-u6-l3",
        title: "Lesson 6.3: Am Arbeitsplatz (Vorgangspassiv)",
        description: "Arbeitsschutz und Betriebsabläufe, Vorgangspassiv im Präsens (werden + Partizip II), Kollegiale Zusammenarbeit.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u6-l3-q1",
            type: "multiple_choice",
            prompt: "Wie bildet man das deutsche Vorgangspassiv im Präsens?",
            options: [
              "Konjugierte Form von 'werden' + Partizip II am Satzende",
              "Hilfsverb 'haben' + Infinitiv",
              "Hilfsverb 'sein' + Adjektiv",
              "Nur das Verb im Präteritum"
            ],
            correctAnswer: "Konjugierte Form von 'werden' + Partizip II am Satzende",
            explanation: "Die Passivformel lautet: Subjekt + werden (konjugiert) + ... + Partizip II (z. B. 'Die Ware wird geliefert')."
          },
          {
            id: "de-u6-l3-q2",
            type: "fill_blank",
            sentence: "Alle Sicherheitshinweise ___ strikt von den Mitarbeitern beachtet (Passiv Präsens).",
            missingWord: "werden",
            options: ["werden", "haben", "wurden", "worden"],
            correctAnswer: "werden",
            explanation: "Pluralform von werden im Passiv Präsens: 'Alle Sicherheitshinweise werden... beachtet'."
          },
          {
            id: "de-u6-l3-q3",
            type: "matching",
            prompt: "Wandeln Sie Aktivsätze in Passivsätze um:",
            pairs: [
              { native: "Der Mechaniker repariert die Maschine.", english: "Die Maschine wird repariert.", left: "Der Mechaniker repariert die Maschine.", right: "Die Maschine wird repariert." },
              { native: "Die Kollegin schreibt das Protokoll.", english: "Das Protokoll wird geschrieben.", left: "Die Kollegin schreibt das Protokoll.", right: "Das Protokoll wird geschrieben." },
              { native: "Der Chef prüft die Rechnungen.", english: "Die Rechnungen werden geprüft.", left: "Der Chef prüft die Rechnungen.", right: "Die Rechnungen werden geprüft." },
              { native: "Das Team plant das Projekt.", english: "Das Projekt wird geplant.", left: "Das Team plant das Projekt.", right: "Das Projekt wird geplant." }
            ]
          },
          {
            id: "de-u6-l3-q4",
            type: "scramble",
            prompt: "Bringen Sie die betriebliche Sicherheitsanweisung im Passiv in die richtige Reihenfolge:",
            tokens: ["In", "der", "Werkstatt", "muss", "stets", "ein", "Schutzhelm", "getragen", "werden."],
            correctTokens: ["In", "der", "Werkstatt", "muss", "stets", "ein", "Schutzhelm", "getragen", "werden."],
            explanation: "Passiv mit Modalverb: Modalverb 'muss' an Position 2, 'getragen werden' (Partizip II + Infinitiv werden) am Satzende."
          },
          {
            id: "de-u6-l3-q5",
            type: "multiple_choice",
            prompt: "Welche Präposition leitet im Passivsatz den Urheber/Akteur ein (z. B. 'vom Vorgesetzten')?",
            options: ["von (+ Dativ) oder durch (+ Akkusativ)", "mit", "aus", "nach"],
            correctAnswer: "von (+ Dativ) oder durch (+ Akkusativ)",
            explanation: "Der handelnde Akteur wird mit 'von + Dativ' (Personen) oder 'durch + Akkusativ' (Mittel/Vermittler) angegeben."
          },
          {
            id: "de-u6-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Sicherheitsunterweisung. Welcher Schutzkleidung ist Pflicht?",
            audioText: "Achtung: Im gesamten Lagerbereich müssen Sicherheitsschuhe der Schutzklasse S3 getragen werden.",
            options: [
              "Sicherheitsschuhe der Schutzklasse S3",
              "Normale Turnschuhe",
              "Nur eine Warnweste",
              "Gehörschutz im Freien"
            ],
            correctAnswer: "Sicherheitsschuhe der Schutzklasse S3",
            explanation: "Der Sicherheitsbeauftragte verlangt: 'müssen Sicherheitsschuhe der Schutzklasse S3 getragen werden'."
          },
          {
            id: "de-u6-l3-q7",
            type: "fill_blank",
            sentence: "Der Mangel wurde sofort ___ unserem Schichtleiter gemeldet.",
            missingWord: "von",
            options: ["von", "zu", "bei", "mit"],
            correctAnswer: "von",
            explanation: "Akteur im Passiv: 'von unserem Schichtleiter'."
          },
          {
            id: "de-u6-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die arbeitsrechtlichen Gremien ihren Funktionen zu:",
            pairs: [
              { native: "der Betriebsrat", english: "Gewählte Interessenvertretung der Arbeitnehmer im Betrieb", left: "der Betriebsrat", right: "Gewählte Interessenvertretung der Arbeitnehmer im Betrieb" },
              { native: "die Berufsgenossenschaft (BG)", english: "Gesetzliche Unfallversicherung und Arbeitsschutzaufsicht", left: "die Berufsgenossenschaft (BG)", right: "Gesetzliche Unfallversicherung und Arbeitsschutzaufsicht" },
              { native: "die Gewerkschaft", english: "Organisation der Beschäftigten für Tarifverträge und Löhne", left: "die Gewerkschaft", right: "Organisation der Beschäftigten für Tarifverträge und Löhne" },
              { native: "der Datenschutzbeauftragte", english: "Überwacht die Einhaltung der DSGVO im Unternehmen", left: "der Datenschutzbeauftragte", right: "Überwacht die Einhaltung der DSGVO im Unternehmen" }
            ]
          }
        ]
      },
      {
        id: "de-u6-l4",
        title: "Lesson 6.4: Diskussion und Argumentation",
        description: "Die eigene Meinung fundiert vertreten, Einwände formulieren ('Einerseits... andererseits'), Redemittel für Besprechungen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u6-l4-q1",
            type: "multiple_choice",
            prompt: "Mit welchem Redemittel leitet man die eigene Meinung im beruflichen Diskurs professionell ein?",
            options: [
              "Meiner Ansicht nach sollten wir diesen Schritt sorgfältig prüfen.",
              "Du redest Unsinn!",
              "Mir ist das völlig egal.",
              "Keine Ahnung."
            ],
            correctAnswer: "Meiner Ansicht nach sollten wir diesen Schritt sorgfältig prüfen.",
            explanation: "'Meiner Ansicht nach / Meiner Meinung nach...' ist das Standardredemittel für eine konstruktive, sachliche Meinungsäußerung."
          },
          {
            id: "de-u6-l4-q2",
            type: "fill_blank",
            sentence: "Ich bin der ___, dass wir mit diesem Konzept Zeit und Ressourcen sparen.",
            missingWord: "Auffassung",
            options: ["Auffassung", "Farbe", "Wohnung", "Frage"],
            correctAnswer: "Auffassung",
            explanation: "'Ich bin der Auffassung / der Ansicht, dass...' drückt eine fundierte persönliche Überzeugung aus."
          },
          {
            id: "de-u6-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Argumentationsbausteine zu:",
            pairs: [
              { native: "Zustimmung ausdrücken", english: "Da haben Sie vollkommen recht / Ich stimme Ihnen voll zu", left: "Zustimmung ausdrücken", right: "Da haben Sie vollkommen recht / Ich stimme Ihnen voll zu" },
              { native: "Höflich widersprechen", english: "Da bin ich anderer Meinung / Das sehe ich etwas anders", left: "Höflich widersprechen", right: "Da bin ich anderer Meinung / Das sehe ich etwas anders" },
              { native: "Kompromiss vorschlagen", english: "Lassen Sie uns einen Mittelweg finden", left: "Kompromiss vorschlagen", right: "Lassen Sie uns einen Mittelweg finden" },
              { native: "Nachfragen", english: "Könnten Sie diesen Punkt näher erläutern?", left: "Nachfragen", right: "Könnten Sie diesen Punkt näher erläutern?" }
            ]
          },
          {
            id: "de-u6-l4-q4",
            type: "scramble",
            prompt: "Bauen Sie das Pro-und-Kontra-Argument zusammen:",
            tokens: ["Einerseits", "ist", "die", "Software", "teuer,", "andererseits", "steigert", "sie", "unsere", "Effizienz."],
            correctTokens: ["Einerseits", "ist", "die", "Software", "teuer,", "andererseits", "steigert", "sie", "unsere", "Effizienz."],
            explanation: "Doppelkonnektor 'einerseits... andererseits' zur Gegenüberstellung zweier Perspektiven."
          },
          {
            id: "de-u6-l4-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet das verbindende Wort 'obwohl' in einer Argumentation?",
            options: [
              "Es drückt einen Gegensatz oder eine unerwartete Einschränkung aus (Konzessivsatz)",
              "Es nennt den Grund",
              "Es fragt nach der Uhrzeit",
              "Es zählt Dinge auf"
            ],
            correctAnswer: "Es drückt einen Gegensatz oder eine unerwartete Einschränkung aus (Konzessivsatz)",
            explanation: "'Obwohl' signalisiert einen Gegengrund: 'Obwohl das Projekt herausfordernd ist, halten wir den Zeitplan ein'."
          },
          {
            id: "de-u6-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Projektleiter im Teammeeting. Welchen Vorschlag unterbreitet er?",
            audioText: "Um Überstunden zu vermeiden, schlage ich vor, die Aufgaben auf zwei Teams aufzuteilen.",
            options: [
              "Die Aufgaben auf zwei Teams aufteilen, um Überstunden zu vermeiden",
              "Alle Mitarbeiter sollen am Wochenende arbeiten",
              "Das gesamte Projekt sofort abbrechen",
              "Keine weiteren Besprechungen mehr abhalten"
            ],
            correctAnswer: "Die Aufgaben auf zwei Teams aufteilen, um Überstunden zu vermeiden",
            explanation: "Der Leiter schlägt vor: 'die Aufgaben auf zwei Teams aufzuteilen'."
          },
          {
            id: "de-u6-l4-q7",
            type: "fill_blank",
            sentence: "Ich stimme Ihrem Vorschlag im Großen und Ganzen ___.",
            missingWord: "zu",
            options: ["zu", "ab", "auf", "an"],
            correctAnswer: "zu",
            explanation: "Das trennbare Verb 'zustimmen' verlangt die Partikel 'zu' am Satzende ('Ich stimme... zu')."
          },
          {
            id: "de-u6-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Satzverbindungen ihren Funktionen zu:",
            pairs: [
              { native: "deshalb / daher", english: "Konsekutiv (Folge)", left: "deshalb / daher", right: "Konsekutiv (Folge)" },
              { native: "trotzdem / dennoch", english: "Konzessiv (trotz des Einwands)", left: "trotzdem / dennoch", right: "Konzessiv (trotz des Einwands)" },
              { native: "außerdem / darüber hinaus", english: "Additiv (weitere Information ergänzen)", left: "außerdem / darüber hinaus", right: "Additiv (weitere Information ergänzen)" },
              { native: "stattdessen", english: "Substitutiv (Alternative wählen)", left: "stattdessen", right: "Substitutiv (Alternative wählen)" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 7: Professionelle Kommunikation im Beruf (B2.1)
  // Handlungsfeld: Berufliche Handlungskompetenz (DeuFöV B2)
  // =========================================================================
  {
    id: "de-unit-7",
    unitId: "de-unit-7",
    unitNumber: 7,
    level: "Phase 2: B2.1 (Selbstständige Sprachverwendung)",
    title: "Unit 7: Professionelle Kommunikation im Beruf (B2.1)",
    subtitle: "Berufliche Handlungskompetenz — Adjektivdeklination, zweiteilige Konnektoren, Nominalisierung, Reklamationen.",
    icon: "Award",
    color: "#0284c7",
    lessons: [
      {
        id: "de-u7-l1",
        title: "Lesson 7.1: Reklamation und Beschwerdemanagement",
        description: "Schriftliche Mängelrügen verfassen, Lieferverzögerungen anmahnen, Fristsetzungen und Kulanzlösungen im Kundenservice.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u7-l1-q1",
            type: "multiple_choice",
            prompt: "Was versteht man im deutschen Handelsrecht unter einer 'Mängelrüge'?",
            options: [
              "Die form- und fristgerechte schriftliche Beanstandung einer fehlerhaften oder unvollständigen Warenlieferung",
              "Ein Lobschreiben an den Lieferanten",
              "Eine Mahnung wegen Zahlungsverzugs",
              "Einen Kündigungsbrief"
            ],
            correctAnswer: "Die form- und fristgerechte schriftliche Beanstandung einer fehlerhaften oder unvollständigen Warenlieferung",
            explanation: "Mit der Mängelrüge (§ 377 HGB) zeigt der Käufer unverzüglich Mängel der gelieferten Ware an, um Gewährleistungsansprüche zu wahren."
          },
          {
            id: "de-u7-l1-q2",
            type: "fill_blank",
            sentence: "Wir setzen Ihnen zur Nacherfüllung eine ___ bis zum 25. Oktober.",
            missingWord: "Frist",
            options: ["Frist", "Note", "Münze", "Nummer"],
            correctAnswer: "Frist",
            explanation: "Im Reklamationsrecht setzt man dem Vertragspartner eine angemessene 'Frist' zur Nachbesserung oder Nachlieferung."
          },
          {
            id: "de-u7-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die zweiteiligen Konnektoren ihren Verwendungen zu:",
            pairs: [
              { native: "sowohl... als auch", english: "Positive Verdoppelung (beides trifft zu)", left: "sowohl... als auch", right: "Positive Verdoppelung (beides trifft zu)" },
              { native: "weder... noch", english: "Doppelte Verneinung (keines von beiden trifft zu)", left: "weder... noch", right: "Doppelte Verneinung (keines von beiden trifft zu)" },
              { native: "zwar... aber", english: "Konzessiver Gegensatz (Zugeben, aber einschränken)", left: "zwar... aber", right: "Konzessiver Gegensatz (Zugeben, aber einschränken)" },
              { native: "nicht nur... sondern auch", english: "Gesteigerte Ergänzung", left: "nicht nur... sondern auch", right: "Gesteigerte Ergänzung" }
            ]
          },
          {
            id: "de-u7-l1-q4",
            type: "scramble",
            prompt: "Bauen Sie den Reklamationssatz zusammen:",
            tokens: ["Die", "Ware", "entspricht", "weder", "unseren", "Qualitätsstandards", "noch", "der", "Auftragsbestätigung."],
            correctTokens: ["Die", "Ware", "entspricht", "weder", "unseren", "Qualitätsstandards", "noch", "der", "Auftragsbestätigung."],
            explanation: "Einsatz von 'weder... noch' zur doppelten Beanstandung von Qualitätsstandard und Auftragsbestätigung."
          },
          {
            id: "de-u7-l1-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet das Wort 'Kulanz' im Beschwerdemanagement?",
            options: [
              "Ein freiwilliges Entgegenkommen des Unternehmens gegenüber dem Kunden über die gesetzliche Pflicht hinaus",
              "Eine gerichtliche Bestrafung",
              "Eine Preiserhöhung bei Reklamationen",
              "Die Weigerung, mit dem Kunden zu sprechen"
            ],
            correctAnswer: "Ein freiwilliges Entgegenkommen des Unternehmens gegenüber dem Kunden über die gesetzliche Pflicht hinaus",
            explanation: "'Aus Kulanz' handelt ein Unternehmen, wenn es dem Kunden kundenfreundlich entgegenkommt, ohne rechtlich dazu gezwungen zu sein."
          },
          {
            id: "de-u7-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Antwort des Kundendienstleiters. Welche Lösung bietet er an?",
            audioText: "Wir bedauern die Unannehmlichkeiten zutiefst und werden Ihnen unverzüglich eine kostenfreie Ersatzlieferung per Express zukommen lassen.",
            options: [
              "Eine kostenfreie Ersatzlieferung per Express",
              "Die Kündigung der Geschäftsbeziehung",
              "Einen Rechtsstreit vor Gericht",
              "Dass der Kunde die defekte Ware selbst behalten muss"
            ],
            correctAnswer: "Eine kostenfreie Ersatzlieferung per Express",
            explanation: "Der Kundendienstleiter kündigt an: 'eine kostenfreie Ersatzlieferung per Express zukommen lassen'."
          },
          {
            id: "de-u7-l1-q7",
            type: "fill_blank",
            sentence: "Sollte die Nachbesserung fehlschlagen, behalten wir uns den Rücktritt vom ___ vor.",
            missingWord: "Vertrag",
            options: ["Vertrag", "Garten", "Markt", "Zug"],
            correctAnswer: "Vertrag",
            explanation: "Juristische Formel im Gewährleistungsrecht: 'Rücktritt vom Kaufvertrag'."
          },
          {
            id: "de-u7-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die Adjektivendungen im Dativ nach bestimmtem Artikel zu:",
            pairs: [
              { native: "mit dem neu___ Kollegen", english: "-en (mit dem neuen Kollegen)", left: "mit dem neu___ Kollegen", right: "-en (mit dem neuen Kollegen)" },
              { native: "in der groß___ Firma", english: "-en (in der großen Firma)", left: "in der groß___ Firma", right: "-en (in der großen Firma)" },
              { native: "aus dem alt___ Lager", english: "-en (aus dem alten Lager)", left: "aus dem alt___ Lager", right: "-en (aus dem alten Lager)" },
              { native: "zu den wichtig___ Kunden", english: "-en (zu den wichtigen Kunden, Plural)", left: "zu den wichtig___ Kunden", right: "-en (zu den wichtigen Kunden, Plural)" }
            ]
          }
        ]
      },
      {
        id: "de-u7-l2",
        title: "Lesson 7.2: Protokollführung in Meetings",
        description: "Besprechungsprotokolle verfassen, Verlaufsprotokoll vs. Ergebnisprotokoll, Tagesordnungspunkte (TOP) und Beschlussfassung.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u7-l2-q1",
            type: "multiple_choice",
            prompt: "Was ist der Unterschied zwischen einem 'Ergebnisprotokoll' und einem 'Verlaufsprotokoll'?",
            options: [
              "Das Ergebnisprotokoll dokumentiert nur Beschlüsse und Aufgaben; das Verlaufsprotokoll fasst auch den Diskussionsablauf zusammen",
              "Ein Ergebnisprotokoll wird nur auf Englisch geführt",
              "Es gibt keinen Unterschied",
              "Ein Verlaufsprotokoll enthält nur Noten"
            ],
            correctAnswer: "Das Ergebnisprotokoll dokumentiert nur Beschlüsse und Aufgaben; das Verlaufsprotokoll fasst auch den Diskussionsablauf zusammen",
            explanation: "In der Wirtschaftspraxis dominiert das effiziente Ergebnisprotokoll mit klaren To-Dos, Verantwortlichen und Deadlines."
          },
          {
            id: "de-u7-l2-q2",
            type: "fill_blank",
            sentence: "Wir eröffnen die Teamsitzung und gehen zu ___ 1 (Tagesordnungspunkt) über.",
            missingWord: "TOP",
            options: ["TOP", "SMS", "LKW", "GmbH"],
            correctAnswer: "TOP",
            explanation: "'TOP' steht für 'Tagesordnungspunkt' auf der Agenda einer Besprechung."
          },
          {
            id: "de-u7-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie die Protokollelemente ihren Abschnitten zu:",
            pairs: [
              { native: "Kopfdaten", english: "Datum, Uhrzeit, Ort, Sitzungsleiter, Protokollant", left: "Kopfdaten", right: "Datum, Uhrzeit, Ort, Sitzungsleiter, Protokollant" },
              { native: "Anwesenheitsliste", english: "Teilnehmer und entschuldigt fehlende Personen", left: "Anwesenheitsliste", right: "Teilnehmer und entschuldigt fehlende Personen" },
              { native: "Beschlüsse (Decisions)", english: "Einstimmig oder mehrheitlich getroffene Entscheidungen", left: "Beschlüsse (Decisions)", right: "Einstimmig oder mehrheitlich getroffene Entscheidungen" },
              { native: "To-Do-Liste / Action Items", english: "Wer macht was bis wann (Zuständigkeit und Frist)", left: "To-Do-Liste / Action Items", right: "Wer macht was bis wann (Zuständigkeit und Frist)" }
            ]
          },
          {
            id: "de-u7-l2-q4",
            type: "scramble",
            prompt: "Formulieren Sie den Protokolleintrag sachlich im Präsens/Perfekt:",
            tokens: ["Herr", "Bauer", "übernimmt", "die", "Erstellung", "des", "Kostenplans", "bis", "Freitag."],
            correctTokens: ["Herr", "Bauer", "übernimmt", "die", "Erstellung", "des", "Kostenplans", "bis", "Freitag."],
            explanation: "Präziser Eintrag mit Person, Aufgabe und Fertigstellungstermin."
          },
          {
            id: "de-u7-l2-q5",
            type: "multiple_choice",
            prompt: "In welcher Zeitform (Tempus) verfasst man üblicherweise geschäftliche Protokolle im Deutschen?",
            options: [
              "Im sachlichen Präsens (Gegenwart)",
              "Im Futur II",
              "Ausschließlich im Plusquamperfekt",
              "Im Konjunktiv II"
            ],
            correctAnswer: "Im sachlichen Präsens (Gegenwart)",
            explanation: "Das Präsens (Gegenwartsform) verleiht dem Protokoll Objektivität und zeitlose Gültigkeit als historisches Dokument."
          },
          {
            id: "de-u7-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Sitzungsleiter. Was wird unter TOP 3 beschlossen?",
            audioText: "Unter TOP 3 wurde einstimmig beschlossen, das Budget für die Marketingkampagne um fünfzehn Prozent zu erhöhen.",
            options: [
              "Das Marketingbudget wird einstimmig um 15 % erhöht",
              "Die Marketingabteilung wird geschlossen",
              "Keine Budgetänderung vorgenommen",
              "Der Beschluss wird auf nächstes Jahr vertagt"
            ],
            correctAnswer: "Das Marketingbudget wird einstimmig um 15 % erhöht",
            explanation: "Der Beschluss lautet: 'einstimmig beschlossen, das Budget... um fünfzehn Prozent zu erhöhen'."
          },
          {
            id: "de-u7-l2-q7",
            type: "fill_blank",
            sentence: "Am Ende unterzeichnen der Sitzungsleiter und der ___ das Dokument.",
            missingWord: "Protokollant",
            options: ["Protokollant", "Kunde", "Besucher", "Zuschauer"],
            correctAnswer: "Protokollant",
            explanation: "Die Person, die das Protokoll verfasst hat, nennt man 'Protokollant' (bzw. Protokollführer)."
          },
          {
            id: "de-u7-l2-q8",
            type: "matching",
            prompt: "Nominalisieren Sie Verben zu professionellen Substantiven:",
            pairs: [
              { native: "entscheiden", english: "die Entscheidung", left: "entscheiden", right: "die Entscheidung" },
              { native: "durchführen", english: "die Durchführung", left: "durchführen", right: "die Durchführung" },
              { native: "genehmigen", english: "die Genehmigung", left: "genehmigen", right: "die Genehmigung" },
              { native: "vereinbaren", english: "die Vereinbarung", left: "vereinbaren", right: "die Vereinbarung" }
            ]
          }
        ]
      },
      {
        id: "de-u7-l3",
        title: "Lesson 7.3: Arbeitsverträge verstehen",
        description: "Rechtsklauseln im Arbeitsvertrag: Probezeit, Kündigungsfristen, Überstundenregelung, Schweigepflicht und Urlaubstage.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u7-l3-q1",
            type: "multiple_choice",
            prompt: "Wie lange darf eine 'Probezeit' in einem deutschen Arbeitsvertrag maximal dauern?",
            options: [
              "Höchstens sechs Monate (§ 622 Abs. 3 BGB)",
              "Zwei Jahre",
              "Einen Monat",
              "Es gibt keine Obergrenze"
            ],
            correctAnswer: "Höchstens sechs Monate (§ 622 Abs. 3 BGB)",
            explanation: "Nach deutschem Arbeitsrecht ist die Probezeit auf maximal 6 Monate begrenzt; währenddessen gilt eine verkürzte Kündigungsfrist von 2 Wochen."
          },
          {
            id: "de-u7-l3-q2",
            type: "fill_blank",
            sentence: "Der gesetzliche Mindesturlaub beträgt in Deutschland bei einer 5-Tage-Woche 20 Arbeitstage pro ___.",
            missingWord: "Kalenderjahr",
            options: ["Kalenderjahr", "Monat", "Woche", "Quartal"],
            correctAnswer: "Kalenderjahr",
            explanation: "Nach dem Bundesurlaubsgesetz stehen jedem Vollzeitbeschäftigten mindestens 20 Tage Urlaub im Kalenderjahr zu (oft tariflich 28–30 Tage)."
          },
          {
            id: "de-u7-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die Vertragsklauseln ihren Rechtsbedeutungen zu:",
            pairs: [
              { native: "Verschwiegenheitspflicht", english: "Geheimhaltung betrieblicher Geschäftsgeheimnisse", left: "Verschwiegenheitspflicht", right: "Geheimhaltung betrieblicher Geschäftsgeheimnisse" },
              { native: "Nebentätigkeitsverbot", english: "Zweitjobs bedürfen der vorherigen Genehmigung des Arbeitgebers", left: "Nebentätigkeitsverbot", right: "Zweitjobs bedürfen der vorherigen Genehmigung des Arbeitgebers" },
              { native: "Kündigungsfrist", english: "Zeitraum zwischen Kündigungsschreiben und Beendigung", left: "Kündigungsfrist", right: "Zeitraum zwischen Kündigungsschreiben und Beendigung" },
              { native: "Ausschlussfrist", english: "Ansprüche verfallen, wenn sie nicht binnen Frist geltend gemacht werden", left: "Ausschlussfrist", right: "Ansprüche verfallen, wenn sie nicht binnen Frist geltend gemacht werden" }
            ]
          },
          {
            id: "de-u7-l3-q4",
            type: "scramble",
            prompt: "Bauen Sie die Vertragsklausel zu Überstunden zusammen:",
            tokens: ["Überstunden", "müssen", "vom", "Vorgesetzten", "vorab", "schriftlich", "angeordnet", "werden."],
            correctTokens: ["Überstunden", "müssen", "vom", "Vorgesetzten", "vorab", "schriftlich", "angeordnet", "werden."],
            explanation: "Passivkonstruktion mit Modalverb zur rechtlichen Absicherung von Mehrarbeit."
          },
          {
            id: "de-u7-l3-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet die Klausel 'Pauschalierung von Überstunden' ('Überstunden sind mit dem Gehalt abgegolten')?",
            options: [
              "Sie ist nur wirksam, wenn eine konkrete Höchstzahl an Stunden (z. B. bis zu 10 % der Monatsarbeitszeit) vertraglich beziffert ist",
              "Der Arbeitnehmer muss unendlich viele Überstunden ohne Geld leisten",
              "Überstunden sind generell verboten",
              "Der Arbeitnehmer bekommt das doppelte Gehalt"
            ],
            correctAnswer: "Sie ist nur wirksam, wenn eine konkrete Höchstzahl an Stunden (z. B. bis zu 10 % der Monatsarbeitszeit) vertraglich beziffert ist",
            explanation: "Das Bundesarbeitsgericht verlangt transparente Grenzen; Klauseln wie 'alle Überstunden sind abgegolten' sind bei normalen Gehältern unwirksam."
          },
          {
            id: "de-u7-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Personalleiter zur Kündigungsfrist. Wie lange beträgt sie nach der Probezeit?",
            audioText: "Nach erfolgreichem Ablauf der Probezeit beträgt die Kündigungsfrist drei Monate zum Monatsende.",
            options: [
              "Drei Monate zum Monatsende",
              "Zwei Wochen zum Wochenende",
              "Fünf Jahre",
              "Keine Kündigungsfrist"
            ],
            correctAnswer: "Drei Monate zum Monatsende",
            explanation: "Der Personalleiter nennt: 'drei Monate zum Monatsende'."
          },
          {
            id: "de-u7-l3-q7",
            type: "fill_blank",
            sentence: "Änderungen und Ergänzungen dieses Vertrages bedürfen der ___-Form.",
            missingWord: "Schrift",
            options: ["Schrift", "Telefon", "Gedanken", "Foto"],
            correctAnswer: "Schrift",
            explanation: "Die 'Schriftformklausel' sichert ab, dass mündliche Absprachen keine Rechtswirksamkeit entfalten."
          },
          {
            id: "de-u7-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die Lohnbestandteile ihren Definitionen zu:",
            pairs: [
              { native: "Bruttogehalt", english: "Gesamtvergütung vor Abzug von Steuern und Sozialabgaben", left: "Bruttogehalt", right: "Gesamtvergütung vor Abzug von Steuern und Sozialabgaben" },
              { native: "Nettogehalt", english: "Auszahlungsbetrag auf das Girokonto des Arbeitnehmers", left: "Nettogehalt", right: "Auszahlungsbetrag auf das Girokonto des Arbeitnehmers" },
              { native: "Sozialversicherungsbeiträge", english: "Rente, Kranken-, Pflege- und Arbeitslosenversicherung", left: "Sozialversicherungsbeiträge", right: "Rente, Kranken-, Pflege- und Arbeitslosenversicherung" },
              { native: "Lohnsteuer", english: "Direkt an das Finanzamt abzuführende Einkommensteuer", left: "Lohnsteuer", right: "Direkt an das Finanzamt abzuführende Einkommensteuer" }
            ]
          }
        ]
      },
      {
        id: "de-u7-l4",
        title: "Lesson 7.4: Telefonische Verhandlungen im Beruf",
        description: "Formeln am Geschäftstelefon, Weiterleiten, Nachrichten aufnehmen, Preisverhandlungen und souveräner Umgang mit Einwänden.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u7-l4-q1",
            type: "multiple_choice",
            prompt: "Wie meldet man sich im deutschen Geschäftsleben professionell am Firmentelefon?",
            options: [
              "Firmenname, eigener Vor- und Nachname, freundlicher Gruß (z. B. 'Siemens Logistik, Thomas Müller, guten Tag!')",
              "Nur 'Hallo, wer stört?'",
              "Nur die Telefonnummer aufsagen",
              "'Ja, bitte?'"
            ],
            correctAnswer: "Firmenname, eigener Vor- und Nachname, freundlicher Gruß (z. B. 'Siemens Logistik, Thomas Müller, guten Tag!')",
            explanation: "Der Drei-Klang aus Unternehmensname, eigenem Namen und Grußformel ist die verbindliche Telefon-Etikette im deutschsprachigen Geschäftsleben."
          },
          {
            id: "de-u7-l4-q2",
            type: "fill_blank",
            sentence: "Frau Sommer ist derzeit in einem Meeting. Kann ich ihr etwas ___?",
            missingWord: "ausrichten",
            options: ["ausrichten", "verkaufen", "zahlen", "schließen"],
            correctAnswer: "ausrichten",
            explanation: "'Kann ich ihr etwas ausrichten?' bedeutet: 'Soll ich ihr eine Nachricht übermitteln?'."
          },
          {
            id: "de-u7-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Phrasen für Geschäftstelefonate zu:",
            pairs: [
              { native: "Einen Moment, ich stelle Sie durch.", english: "I will transfer your call right away.", left: "Einen Moment, ich stelle Sie durch.", right: "I will transfer your call right away." },
              { native: "Die Leitung ist leider besetzt.", english: "The line is currently busy.", left: "Die Leitung ist leider besetzt.", right: "The line is currently busy." },
              { native: "Könnten Sie bitte Ihren Namen wiederholen?", english: "Could you please repeat your name?", left: "Könnten Sie bitte Ihren Namen wiederholen?", right: "Could you please repeat your name?" },
              { native: "Er wird Sie baldmöglichst zurückrufen.", english: "He will return your call as soon as possible.", left: "Er wird Sie baldmöglichst zurückrufen.", right: "He will return your call as soon as possible." }
            ]
          },
          {
            id: "de-u7-l4-q4",
            type: "scramble",
            prompt: "Formulieren Sie das Verhandlungsangebot am Telefon:",
            tokens: ["Bei", "einer", "größeren", "Bestellmenge", "können", "wir", "Ihnen", "einen", "Rabatt", "gewähren."],
            correctTokens: ["Bei", "einer", "größeren", "Bestellmenge", "können", "wir", "Ihnen", "einen", "Rabatt", "gewähren."],
            explanation: "Geschäftlicher Verhandlungssatz über Mengenrabatt."
          },
          {
            id: "de-u7-l4-q5",
            type: "multiple_choice",
            prompt: "Wie reagiert man professionell, wenn ein Geschäftspartner den geforderten Preis als 'viel zu hoch' kritisiert?",
            options: [
              "Verständnis für das Budget zeigen, aber den Mehrwert, die Qualität und Zuverlässigkeit der Leistung herausstellen",
              "Sofort beleidigt auflegen",
              "Den Preis ohne Rücksprache um 90 Prozent senken",
              "Dem Geschäftspartner mangelnde Kompetenz vorwerfen"
            ],
            correctAnswer: "Verständnis für das Budget zeigen, aber den Mehrwert, die Qualität und Zuverlässigkeit der Leistung herausstellen",
            explanation: "Im B2B-Vertrieb argumentiert man nutzen- und wertorientiert statt rein über Preisschlachten."
          },
          {
            id: "de-u7-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Assistentin. Zu welcher Uhrzeit ist der Geschäftsführer wieder erreichbar?",
            audioText: "Herr Dr. Franke ist auf einer Geschäftsreise, aber er wird morgen ab vierzehn Uhr wieder in seinem Büro erreichbar sein.",
            options: [
              "Morgen ab 14:00 Uhr",
              "Erst nächste Woche",
              "Heute Abend um 20:00 Uhr",
              "Er arbeitet nicht mehr im Unternehmen"
            ],
            correctAnswer: "Morgen ab 14:00 Uhr",
            explanation: "Die Assistentin kündigt an: 'morgen ab vierzehn Uhr wieder in seinem Büro'."
          },
          {
            id: "de-u7-l4-q7",
            type: "fill_blank",
            sentence: "Unter welcher Telefonnummer kann Herr Weber Sie am besten ___?",
            missingWord: "zurückrufen",
            options: ["zurückrufen", "vergessen", "kündigen", "schließen"],
            correctAnswer: "zurückrufen",
            explanation: "Rückrufnotiz: '...kann Herr Weber Sie am besten zurückrufen?'."
          },
          {
            id: "de-u7-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Höflichkeitsstufen bei Einwänden zu:",
            pairs: [
              { native: "Ich verstehe Ihren Standpunkt, allerdings...", english: "Diplomatischer Einwand", left: "Ich verstehe Ihren Standpunkt, allerdings...", right: "Diplomatischer Einwand" },
              { native: "Lassen Sie mich kurz nachhaken:", english: "Gezieltes Nachfragen", left: "Lassen Sie mich kurz nachhaken:", right: "Gezieltes Nachfragen" },
              { native: "Unter dieser Voraussetzung kommen wir ins Geschäft.", english: "Einigung erzielen", left: "Unter dieser Voraussetzung kommen wir ins Geschäft.", right: "Einigung erzielen" },
              { native: "Ich schicke Ihnen das Angebot noch heute per Mail.", english: "Verbindliche Nachbereitung", left: "Ich schicke Ihnen das Angebot noch heute per Mail.", right: "Verbindliche Nachbereitung" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 8: Fachsprache & Prozessbeschreibungen (B2.2)
  // Handlungsfeld: Betriebliche Abläufe / Wirtschaft & Technik
  // =========================================================================
  {
    id: "de-unit-8",
    unitId: "de-unit-8",
    unitNumber: 8,
    level: "Phase 2: B2.2 (Selbstständige Sprachverwendung)",
    title: "Unit 8: Fachsprache & Prozessbeschreibungen (B2.2)",
    subtitle: "Betriebliche Abläufe — Passiv in allen Zeiten, Verben mit festen Präpositionen, Pronominaladverbien, telc/Goethe B2.",
    icon: "Utensils",
    color: "#475569",
    lessons: [
      {
        id: "de-u8-l1",
        title: "Lesson 8.1: Prozessabläufe schildern",
        description: "Automatisierte Workflows, Standard Operating Procedures (SOPs), Qualitätssicherung und Passivkonstruktionen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u8-l1-q1",
            type: "multiple_choice",
            prompt: "Warum wird bei technischen Prozessbeschreibungen im Deutschen überwiegend das Passiv eingesetzt?",
            options: [
              "Weil der technische Vorgang und das Objekt im Mittelpunkt stehen, nicht die handelnde Person",
              "Weil Verben im Passiv leichter zu buchstabieren sind",
              "Weil das Passiv nur in der Industrie erlaubt ist",
              "Weil es keine Subjekte in technischen Betrieben gibt"
            ],
            correctAnswer: "Weil der technische Vorgang und das Objekt im Mittelpunkt stehen, nicht die handelnde Person",
            explanation: "Das Passiv objektiviert den Bericht und stellt den standardisierten Ablauf in den Fokus: 'Die Bauteile werden montiert und geprüft'."
          },
          {
            id: "de-u8-l1-q2",
            type: "fill_blank",
            sentence: "Zunächst werden die Rohstoffe geliefert, danach ___ die Qualitätsprüfung statt.",
            missingWord: "findet",
            options: ["findet", "geht", "steht", "macht"],
            correctAnswer: "findet",
            explanation: "Feste Redewendung: 'etwas findet statt' (wird durchgeführt)."
          },
          {
            id: "de-u8-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die Prozessschritte chronologisch zu:",
            pairs: [
              { native: "Eingangskontrolle", english: "1. Prüfung der angelieferten Rohmaterialien", left: "Eingangskontrolle", right: "1. Prüfung der angelieferten Rohmaterialien" },
              { native: "Fertigung / Montage", english: "2. Maschinelle und manuelle Produktion", left: "Fertigung / Montage", right: "2. Maschinelle und manuelle Produktion" },
              { native: "Endprüfung", english: "3. Messtechnische Funktions- und Qualitätskontrolle", left: "Endprüfung", right: "3. Messtechnische Funktions- und Qualitätskontrolle" },
              { native: "Verpackung & Versand", english: "4. Versandfertige Übergabe an die Logistik", left: "Verpackung & Versand", right: "4. Versandfertige Übergabe an die Logistik" }
            ]
          },
          {
            id: "de-u8-l1-q4",
            type: "scramble",
            prompt: "Bauen Sie den Satz mit Pronominaladverb (worauf / darauf) zusammen:",
            tokens: ["Wir", "müssen", "darauf", "achten,", "dass", "die", "Toleranzgrenzen", "eingehalten", "werden."],
            correctTokens: ["Wir", "müssen", "darauf", "achten,", "dass", "die", "Toleranzgrenzen", "eingehalten", "werden."],
            explanation: "'Achten auf' verbindet sich mit Nebensätzen durch das Pronominaladverb 'darauf'."
          },
          {
            id: "de-u8-l1-q5",
            type: "multiple_choice",
            prompt: "Wie lautet das Vorgangspassiv im Präteritum von 'Die Techniker reparierten die Turbine'?",
            options: [
              "Die Turbine wurde repariert.",
              "Die Turbine ist repariert worden.",
              "Die Turbine wird repariert.",
              "Die Turbine war repariert."
            ],
            correctAnswer: "Die Turbine wurde repariert.",
            explanation: "Passiv Präteritum: Subjekt + wurde/wurden + Partizip II ('wurde repariert')."
          },
          {
            id: "de-u8-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Fertigungsleiter. Welche Abweichung wurde im Audit festgestellt?",
            audioText: "Bei der thermischen Härtung wurde eine Temperaturabweichung von drei Grad Celsius gemessen, woraufhin die Charge gesperrt wurde.",
            options: [
              "Eine Temperaturabweichung von 3 Grad (Charge gesperrt)",
              "Ein kompletter Maschinenausfall",
              "Dass alle Teile perfekt produziert wurden",
              "Ein Stromausfall in der Nachbarstadt"
            ],
            correctAnswer: "Eine Temperaturabweichung von 3 Grad (Charge gesperrt)",
            explanation: "Der Fertigungsleiter berichtet über: 'eine Temperaturabweichung von drei Grad Celsius... Charge gesperrt'."
          },
          {
            id: "de-u8-l1-q7",
            type: "fill_blank",
            sentence: "Die Messergebnisse wurden tabellarisch erfasst und im System ___ (speichern).",
            missingWord: "gespeichert",
            options: ["gespeichert", "speichern", "gespeicherten", "speicherte"],
            correctAnswer: "gespeichert",
            explanation: "Partizip II von speichern: 'wurden... erfasst und... gespeichert'."
          },
          {
            id: "de-u8-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie Verben mit festen Präpositionen ihren passenden Pronominaladverbien zu:",
            pairs: [
              { native: "warten auf (+ Akk)", english: "worauf / darauf", left: "warten auf (+ Akk)", right: "worauf / darauf" },
              { native: "sprechen über (+ Akk)", english: "worüber / darüber", left: "sprechen über (+ Akk)", right: "worüber / darüber" },
              { native: "teilnehmen an (+ Dat)", english: "woran / daran", left: "teilnehmen an (+ Dat)", right: "woran / daran" },
              { native: "sich befassen mit (+ Dat)", english: "womit / damit", left: "sich befassen mit (+ Dat)", right: "womit / damit" }
            ]
          }
        ]
      },
      {
        id: "de-u8-l2",
        title: "Lesson 8.2: Sicherheitsunterweisung & Gefahrstoffe",
        description: "Arbeitsschutzprotokolle, Gefahrensymbole, Sicherheitsdatenblätter (SDB), Notfallpläne und Erste Hilfe im Betrieb.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u8-l2-q1",
            type: "multiple_choice",
            prompt: "Was enthält ein 'Sicherheitsdatenblatt' (SDB) für chemische Stoffe im Betrieb?",
            options: [
              "Gefahrenhinweise (H-Sätze), Sicherheitsratschläge (P-Sätze), Toxizität und Maßnahmen bei Verschütten",
              "Nur den Verkaufspreis der Chemikalie",
              "Eine Werbeanzeige des Herstellers",
              "Einen Reiseführer für Chemiker"
            ],
            correctAnswer: "Gefahrenhinweise (H-Sätze), Sicherheitsratschläge (P-Sätze), Toxizität und Maßnahmen bei Verschütten",
            explanation: "Das SDB ist das gesetzlich vorgeschriebene Sicherheitsdokument für alle Gefahrstoffe am Arbeitsplatz."
          },
          {
            id: "de-u8-l2-q2",
            type: "fill_blank",
            sentence: "Bei Gasaustritt muss der Gefahrenbereich sofort ___ werden.",
            missingWord: "geräumt",
            options: ["geräumt", "geputzt", "verkauft", "gefeiert"],
            correctAnswer: "geräumt",
            explanation: "'Einen Bereich räumen' bedeutet, alle Personen unverzüglich in Sicherheit zu bringen."
          },
          {
            id: "de-u8-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie die internationalen GHS-Gefahrenpiktogramme ihren Bedeutungen zu:",
            pairs: [
              { native: "Flamme", english: "Entzündbare Stoffe und Gase", left: "Flamme", right: "Entzündbare Stoffe und Gase" },
              { native: "Totenkopf mit Knochen", english: "Akute Toxizität (Lebensgefahr)", left: "Totenkopf mit Knochen", right: "Akute Toxizität (Lebensgefahr)" },
              { native: "Ätzwirkung (Reagenzgläser)", english: "Hautätzend und metallkorrosiv", left: "Ätzwirkung (Reagenzgläser)", right: "Hautätzend und metallkorrosiv" },
              { native: "Umwelt (toter Baum und Fisch)", english: "Gewässergefährdend", left: "Umwelt (toter Baum und Fisch)", right: "Gewässergefährdend" }
            ]
          },
          {
            id: "de-u8-l2-q4",
            type: "scramble",
            prompt: "Bauen Sie die Rettungsanweisung zusammen:",
            tokens: ["Im", "Brandfall", "dürfen", "die", "Aufzüge", "keinesfalls", "benutzt", "werden."],
            correctTokens: ["Im", "Brandfall", "dürfen", "die", "Aufzüge", "keinesfalls", "benutzt", "werden."],
            explanation: "Striktes Sicherheitsgebot: Im Brandfall Treppen statt Aufzüge nutzen."
          },
          {
            id: "de-u8-l2-q5",
            type: "multiple_choice",
            prompt: "Wer ist im deutschen Betrieb für die Erstversorgung verletzter Mitarbeiter zuständig?",
            options: [
              "Die ausgebildeten betrieblichen Ersthelfer",
              "Ausschließlich der Betriebsinhaber",
              "Praktikanten",
              "Niemand, man wartet ab"
            ],
            correctAnswer: "Die ausgebildeten betrieblichen Ersthelfer",
            explanation: "Unternehmen müssen gesetzlich eine bestimmte Quote von Mitarbeitern regelmäßig als Ersthelfer schulen lassen."
          },
          {
            id: "de-u8-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Warnmeldung über die Werkssirene. Was ist zu tun?",
            audioText: "Achtung, dies ist kein Probealarm: Verlassen Sie das Gebäude über die gekennzeichneten Notausgänge und finden Sie sich am Sammelplatz ein.",
            options: [
              "Über Notausgänge zum Sammelplatz gehen",
              "Im Büro bleiben und Fenster öffnen",
              "Mit dem Aufzug ins Parkhaus fahren",
              "Auf den Feierabend warten"
            ],
            correctAnswer: "Über Notausgänge zum Sammelplatz gehen",
            explanation: "Die Durchsage fordert auf: 'Verlassen Sie das Gebäude... finden Sie sich am Sammelplatz ein'."
          },
          {
            id: "de-u8-l2-q7",
            type: "fill_blank",
            sentence: "Der Verbandskasten und der Defibrillator befinden sich neben dem Not-___.",
            missingWord: "ausgang",
            options: ["ausgang", "arzt", "fahrrad", "schalter"],
            correctAnswer: "ausgang",
            explanation: "Erste-Hilfe-Mittel sind üblicherweise gut sichtbar an Fluchtwegen und Notausgängen platziert."
          },
          {
            id: "de-u8-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Arbeitsschutzbegriffe zu:",
            pairs: [
              { native: "PSA", english: "Persönliche Schutzausrüstung (Helm, Brille, Schuhe)", left: "PSA", right: "Persönliche Schutzausrüstung (Helm, Brille, Schuhe)" },
              { native: "Gefährdungsbeurteilung", english: "Systematische Erfassung betrieblicher Unfallrisiken", left: "Gefährdungsbeurteilung", right: "Systematische Erfassung betrieblicher Unfallrisiken" },
              { native: "Sammelplatz", english: "Sicherer Treffpunkt im Freien nach Gebäude-Evakuierung", left: "Sammelplatz", right: "Sicherer Treffpunkt im Freien nach Gebäude-Evakuierung" },
              { native: "DGUV", english: "Deutsche Gesetzliche Unfallversicherung", left: "DGUV", right: "Deutsche Gesetzliche Unfallversicherung" }
            ]
          }
        ]
      },
      {
        id: "de-u8-l3",
        title: "Lesson 8.3: Statistiken & Wirtschaftsdaten auswerten",
        description: "Grafik- und Diagrammbeschreibungen, Trends analysieren (steigen, sinken, stagnieren, verzeichnen), Wirtschaftsberichte.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u8-l3-q1",
            type: "multiple_choice",
            prompt: "Welches Verb drückt in einer wirtschaftlichen Grafikanalyse eine 'stabile Seitwärtsbewegung ohne Veränderung' aus?",
            options: ["stagnieren (auf konstantem Niveau verharren)", "explodieren", "drastisch abstürzen", "sich verdoppeln"],
            correctAnswer: "stagnieren (auf konstantem Niveau verharren)",
            explanation: "'Stagnieren' bedeutet, dass sich Zahlen oder Kurven weder nach oben noch nach unten bewegen, sondern unverändert bleiben."
          },
          {
            id: "de-u8-l3-q2",
            type: "fill_blank",
            sentence: "Wie aus der vorliegenden Grafik ___ geht, sind die Exporte im zweiten Quartal um vier Prozent gestiegen.",
            missingWord: "hervor",
            options: ["hervor", "hin", "zurück", "weg"],
            correctAnswer: "hervor",
            explanation: "Die Standardformel zur Grafikbeschreibung lautet: 'Wie aus der Grafik hervorgeht...'."
          },
          {
            id: "de-u8-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die Trendverben ihren Bedeutungen zu:",
            pairs: [
              { native: "deutlich zunehmen / ansteigen", english: "Wachstum / Steigerung", left: "deutlich zunehmen / ansteigen", right: "Wachstum / Steigerung" },
              { native: "kontinuierlich sinken / zurückgehen", english: "Rückgang / Schrumpfung", left: "kontinuierlich sinken / zurückgehen", right: "Rückgang / Schrumpfung" },
              { native: "einen Höchststand erreichen", english: "Den höchsten Punkt (Peak) markieren", left: "einen Höchststand erreichen", right: "Den höchsten Punkt (Peak) markieren" },
              { native: "einen Tiefpunkt durchlaufen", english: "Den niedrigsten Punkt markieren", left: "einen Tiefpunkt durchlaufen", right: "Den niedrigsten Punkt markieren" }
            ]
          },
          {
            id: "de-u8-l3-q4",
            type: "scramble",
            prompt: "Bauen Sie den statistischen Vergleichssatz zusammen:",
            tokens: ["Im", "Vergleich", "zum", "Vorjahr", "hat", "sich", "der", "Umsatz", "nahezu", "verdoppelt."],
            correctTokens: ["Im", "Vergleich", "zum", "Vorjahr", "hat", "sich", "der", "Umsatz", "nahezu", "verdoppelt."],
            explanation: "Statistischer Wirtschaftssatz zum Jahresvergleich im Perfekt."
          },
          {
            id: "de-u8-l3-q5",
            type: "multiple_choice",
            prompt: "Welche Präposition verwendet man im Deutschen für prozentuale Differenzen ('Steigerung ___ 5 Prozent')?",
            options: ["um", "nach", "bei", "mit"],
            correctAnswer: "um",
            explanation: "Bei Differenzen und Veränderungen steht die Präposition 'um': 'Der Gewinn stieg um 5 Prozent' (auf 105 %)."
          },
          {
            id: "de-u8-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Analystenbericht. Welcher Sektor verzeichnete den stärksten Zuwachs?",
            audioText: "Besonders die erneuerbaren Energien und die Halbleiterindustrie verzeichneten im vergangenen Geschäftsjahr ein zweistelliges Wachstum.",
            options: [
              "Erneuerbare Energien und Halbleiterindustrie",
              "Die traditionelle Kohleförderung",
              "Der stationäre Zeitschriftenhandel",
              "Die Tabakwirtschaft"
            ],
            correctAnswer: "Erneuerbare Energien und Halbleiterindustrie",
            explanation: "Der Analyst nennt: 'die erneuerbaren Energien und die Halbleiterindustrie... zweistelliges Wachstum'."
          },
          {
            id: "de-u8-l3-q7",
            type: "fill_blank",
            sentence: "Das Säulendiagramm vermittelt einen detaillierten Überblick ___ die Kostenentwicklung.",
            missingWord: "über",
            options: ["über", "unter", "auf", "vor"],
            correctAnswer: "über",
            explanation: "'Einen Überblick über (+ Akkusativ)' ist die feste Kollokation bei Präsentationen."
          },
          {
            id: "de-u8-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die Diagrammtypen zu:",
            pairs: [
              { native: "das Balkendiagramm", english: "Horizontale Balken zum Größenvergleich", left: "das Balkendiagramm", right: "Horizontale Balken zum Größenvergleich" },
              { native: "das Säulendiagramm", english: "Vertikale Säulen über Zeiträume", left: "das Säulendiagramm", right: "Vertikale Säulen über Zeiträume" },
              { native: "das Kreisdiagramm (Tortendiagramm)", english: "Anteile vom Gesamten (100 Prozent)", left: "das Kreisdiagramm (Tortendiagramm)", right: "Anteile vom Gesamten (100 Prozent)" },
              { native: "das Liniendiagramm", english: "Verlaufskurven über kontinuierliche Zeit", left: "das Liniendiagramm", right: "Verlaufskurven über kontinuierliche Zeit" }
            ]
          }
        ]
      },
      {
        id: "de-u8-l4",
        title: "Lesson 8.4: Abschlussprüfung B2 (telc / Goethe B2)",
        description: "Prüfungsformate telc B2 & Goethe-Zertifikat B2: Textsynthese, Diskussionsführung, Stellungnahme und Lese-Hör-Strategien.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u8-l4-q1",
            type: "multiple_choice",
            prompt: "Welche Prüfungsbereiche umfasst die offizielle Goethe- bzw. telc-B2-Prüfung?",
            options: [
              "Vier Fertigkeiten: Leseverstehen, Hörverstehen, Schriftlicher Ausdruck und Mündliche Prüfung",
              "Nur ein kurzes Grammatikdiktat",
              "Nur ein Multiple-Choice-Test am Handy",
              "Nur das Singen deutscher Lieder"
            ],
            correctAnswer: "Vier Fertigkeiten: Leseverstehen, Hörverstehen, Schriftlicher Ausdruck und Mündliche Prüfung",
            explanation: "Die GER-Prüfungen auf B2-Niveau testen alle 4 Grundkompetenzen (Lesen, Hören, Schreiben, Sprechen)."
          },
          {
            id: "de-u8-l4-q2",
            type: "fill_blank",
            sentence: "Im schriftlichen Teil der B2-Prüfung verfassen Sie eine strukturierte ___, beispielsweise zu flexiblen Arbeitszeitmodellen.",
            missingWord: "Stellungnahme",
            options: ["Stellungnahme", "Rechnung", "Postkarte", "Zeichnung"],
            correctAnswer: "Stellungnahme",
            explanation: "Eine 'Stellungnahme' ist ein argumentativer Text mit eigener begründeter Position zu einem gesellschaftlichen Thema."
          },
          {
            id: "de-u8-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Lesestrategien für Prüfungen zu:",
            pairs: [
              { native: "Kursorisches / Globales Lesen (Skimming)", english: "Den Hauptgedanken des Textes erfassen", left: "Kursorisches / Globales Lesen (Skimming)", right: "Den Hauptgedanken des Textes erfassen" },
              { native: "Selektives Lesen (Scanning)", english: "Gezielt nach konkreten Informationen (Zahlen, Namen) suchen", left: "Selektives Lesen (Scanning)", right: "Gezielt nach konkreten Informationen (Zahlen, Namen) suchen" },
              { native: "Detailliertes Lesen", english: "Gründliches Verstehen aller Argumente und Nuancen", left: "Detailliertes Lesen", right: "Gründliches Verstehen aller Argumente und Nuancen" },
              { native: "Ausschlussverfahren", english: "Eindeutig falsche Distraktoren bei Multiple-Choice streichen", left: "Ausschlussverfahren", right: "Eindeutig falsche Distraktoren bei Multiple-Choice streichen" }
            ]
          },
          {
            id: "de-u8-l4-q4",
            type: "scramble",
            prompt: "Bauen Sie die Prüfungs-Überleitung für die mündliche Diskussion zusammen:",
            tokens: ["Nachdem", "wir", "die", "Vorteile", "betrachtet", "haben,", "sollten", "wir", "auch", "die", "Risiken", "abwägen."],
            correctTokens: ["Nachdem", "wir", "die", "Vorteile", "betrachtet", "haben,", "sollten", "wir", "auch", "die", "Risiken", "abwägen."],
            explanation: "Elegante Überleitung mit Temporalsatz ('Nachdem... haben') im mündlichen B2-Diskurs."
          },
          {
            id: "de-u8-l4-q5",
            type: "multiple_choice",
            prompt: "Was ist in der mündlichen Paarprüfung B2 besonders wichtig bei der Interaktion?",
            options: [
              "Auf den Partner eingehen, Gegenfragen stellen und aktiv das Gespräch am Laufen halten",
              "Allein 15 Minuten durchgehend monologisieren ohne Pause",
              "Den Partner ständig lautstark unterbrechen",
              "Nichts sagen und den Partner alles machen lassen"
            ],
            correctAnswer: "Auf den Partner eingehen, Gegenfragen stellen und aktiv das Gespräch am Laufen halten",
            explanation: "Die Prüfer bewerten die 'Interaktionsfähigkeit': Aktives Zuhören, Anknüpfen an Vorredner und dialogische Lösungsfindung."
          },
          {
            id: "de-u8-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Aufgabenstellung der Prüferin. Worüber soll der Prüfling sprechen?",
            audioText: "Wählen Sie eines der beiden Themen: Präsentieren Sie die Vor- und Nachteile von Homeoffice und schildern Sie eigene Erfahrungen.",
            options: [
              "Vor- und Nachteile von Homeoffice mit eigenen Erfahrungen präsentieren",
              "Ein deutsches Gedicht vortragen",
              "Über das Wetter in Berlin berichten",
              "Den Lebenslauf des Prüfungspartners vorlesen"
            ],
            correctAnswer: "Vor- und Nachteile von Homeoffice mit eigenen Erfahrungen präsentieren",
            explanation: "Die Prüferin stellt die Aufgabe: 'Vor- und Nachteile von Homeoffice und schildern Sie eigene Erfahrungen'."
          },
          {
            id: "de-u8-l4-q7",
            type: "fill_blank",
            sentence: "Zusammenfassend lässt sich festhalten, ___ die Digitalisierung sowohl Chancen als auch Herausforderungen mit sich bringt.",
            missingWord: "dass",
            options: ["dass", "weil", "ob", "wann"],
            correctAnswer: "dass",
            explanation: "Fazit-Formel am Ende der Stellungnahme: 'Zusammenfassend lässt sich festhalten, dass...'."
          },
          {
            id: "de-u8-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Bewertungskriterien der B2-Prüfung zu:",
            pairs: [
              { native: "Aufgabenerfüllung & Textaufbau", english: "Alle Leitpunkte sinnvoll und kohärent bearbeitet", left: "Aufgabenerfüllung & Textaufbau", right: "Alle Leitpunkte sinnvoll und kohärent bearbeitet" },
              { native: "Wortschatzspektrum", english: "Angemessener Fach- und B2-Wortschatz ohne ständige Wiederholungen", left: "Wortschatzspektrum", right: "Angemessener Fach- und B2-Wortschatz ohne ständige Wiederholungen" },
              { native: "Grammatische Korrektheit", english: "Sichere Beherrschung von Kasus, Verbstellung und Konnektoren", left: "Grammatische Korrektheit", right: "Sichere Beherrschung von Kasus, Verbstellung und Konnektoren" },
              { native: "Aussprache & Intonation", english: "Klare, flüssige und verständliche Artikulation", left: "Aussprache & Intonation", right: "Klare, flüssige und verständliche Artikulation" }
            ]
          }
        ]
      }
    ]
  }
];
