// =========================================================================
// BAMF Rahmencurriculum & Goethe-Institut Aligned German Curriculum
// Phase 1: Elementare Sprachverwendung (A1–A2)
// Units 1 to 4 • 4 Lessons per Unit = 16 Lessons Total
// =========================================================================

export const germanA1A2Units = [
  // =========================================================================
  // UNIT 1: Erste Kontakte & Orientierung (A1.1)
  // Handlungsfeld: Wohnen / Kontakte und Alltag
  // =========================================================================
  {
    id: "de-unit-1",
    unitId: "de-unit-1",
    unitNumber: 1,
    level: "Phase 1: A1.1 (Elementare Sprachverwendung)",
    title: "Unit 1: Erste Kontakte & Orientierung (A1.1)",
    subtitle: "Wohnen / Kontakte und Alltag — Present tense verbs, V2 word order, W-Fragen, nominative personal pronouns.",
    icon: "Sparkles",
    color: "#10b981",
    lessons: [
      {
        id: "de-u1-l1",
        title: "Lesson 1.1: Guten Tag!",
        description: "Begrüßungen, formelles 'Sie' vs. informelles 'du', das deutsche Alphabet, Buchstabieren und Zahlen 0–20.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u1-l1-q1",
            type: "multiple_choice",
            prompt: "Wie begrüßt man jemanden am Morgen formell auf Deutsch?",
            options: ["Guten Morgen!", "Gute Nacht!", "Tschüss!", "Mahlzeit!"],
            correctAnswer: "Guten Morgen!",
            explanation: "'Guten Morgen' ist die korrekte und höfliche Begrüßung am Vormittag (bis ca. 11:00 Uhr)."
          },
          {
            id: "de-u1-l1-q2",
            type: "matching",
            prompt: "Ordnen Sie die deutschen Pronomen und Verbformen von 'sein' zu:",
            pairs: [
              { native: "ich", english: "bin", left: "ich", right: "bin" },
              { native: "du", english: "bist", left: "du", right: "bist" },
              { native: "er / sie / es", english: "ist", left: "er / sie / es", right: "ist" },
              { native: "Sie (formell)", english: "sind", left: "Sie (formell)", right: "sind" }
            ]
          },
          {
            id: "de-u1-l1-q3",
            type: "fill_blank",
            sentence: "Guten Tag, wie ___ Sie? — Ich heiße Müller.",
            missingWord: "heißen",
            options: ["heißen", "heißt", "heiße", "heiß"],
            correctAnswer: "heißen",
            explanation: "Für die formelle Höflichkeitsform 'Sie' lautet die Konjugation: 'Wie heißen Sie?'."
          },
          {
            id: "de-u1-l1-q4",
            type: "scramble",
            prompt: "Bringen Sie die Wörter in die richtige Reihenfolge (Verb an Position 2):",
            tokens: ["Ich", "heiße", "Lukas", "und", "lerne", "Deutsch."],
            correctTokens: ["Ich", "heiße", "Lukas", "und", "lerne", "Deutsch."],
            explanation: "Im deutschen Hauptsatz steht das konjugierte Verb immer an Position 2: 'Ich heiße Lukas'."
          },
          {
            id: "de-u1-l1-q5",
            type: "multiple_choice",
            prompt: "Wann benutzt man im Deutschen die Anrede 'du' statt 'Sie'?",
            options: [
              "Mit Freunden, in der Familie und unter Kindern",
              "Bei Behörden und im Vorstellungsgespräch",
              "Beim ersten Treffen mit älteren Personen",
              "Im Kontakt mit der Polizei und Beamten"
            ],
            correctAnswer: "Mit Freunden, in der Familie und unter Kindern",
            explanation: "'Du' ist die vertrauliche Anrede; im formellen Geschäfts- und Behördenleben gilt strikt das 'Sie'."
          },
          {
            id: "de-u1-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Begrüßung und wählen Sie die passende Tageszeit:",
            audioText: "Guten Abend! Herzlich willkommen in Berlin.",
            options: ["Abends (nach 18:00 Uhr)", "Morgens um 08:00 Uhr", "Mittags um 12:00 Uhr", "Nachts zum Schlafen"],
            correctAnswer: "Abends (nach 18:00 Uhr)",
            explanation: "'Guten Abend' verwendet man ab ca. 18:00 Uhr zur Begrüßung."
          },
          {
            id: "de-u1-l1-q7",
            type: "fill_blank",
            sentence: "Wie ist die Zahl '12' auf Deutsch? — Das ist ___.",
            missingWord: "zwölf",
            options: ["zwölf", "zwanzig", "zwei", "zehn"],
            correctAnswer: "zwölf",
            explanation: "12 heißt auf Deutsch 'zwölf', 2 heißt 'zwei' und 20 heißt 'zwanzig'."
          },
          {
            id: "de-u1-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die Begrüßung der passenden Verabschiedung zu:",
            pairs: [
              { native: "Guten Tag!", english: "Auf Wiedersehen!", left: "Guten Tag!", right: "Auf Wiedersehen!" },
              { native: "Hallo!", english: "Tschüss!", left: "Hallo!", right: "Tschüss!" },
              { native: "Gute Nacht!", english: "Schlaf gut!", left: "Gute Nacht!", right: "Schlaf gut!" },
              { native: "Bis später!", english: "Bis dann!", left: "Bis später!", right: "Bis dann!" }
            ]
          }
        ]
      },
      {
        id: "de-u1-l2",
        title: "Lesson 1.2: Woher kommen Sie?",
        description: "Herkunftsländer, Nationalitäten, Herkunftspräpositionen 'aus' und 'in', Konjugation von 'kommen' und 'wohnen'.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u1-l2-q1",
            type: "multiple_choice",
            prompt: "Welche Präposition drückt die Herkunft (Heimatland oder Geburtsstadt) aus?",
            options: ["aus", "nach", "in", "bei"],
            correctAnswer: "aus",
            explanation: "Für die Herkunft verwendet man 'aus + Dativ': 'Ich komme aus Spanien / aus Berlin'."
          },
          {
            id: "de-u1-l2-q2",
            type: "fill_blank",
            sentence: "Woher kommen Sie? — Ich ___ aus Italien.",
            missingWord: "komme",
            options: ["komme", "kommst", "kommt", "kommen"],
            correctAnswer: "komme",
            explanation: "Die 1. Person Singular von 'kommen' lautet: 'ich komme'."
          },
          {
            id: "de-u1-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie das Land der passenden Sprache zu:",
            pairs: [
              { native: "Deutschland", english: "Deutsch", left: "Deutschland", right: "Deutsch" },
              { native: "Spanien", english: "Spanisch", left: "Spanien", right: "Spanisch" },
              { native: "Frankreich", english: "Französisch", left: "Frankreich", right: "Französisch" },
              { native: "Polen", english: "Polnisch", left: "Polen", right: "Polnisch" }
            ]
          },
          {
            id: "de-u1-l2-q4",
            type: "scramble",
            prompt: "Bauen Sie eine korrekte W-Frage (Fragewort an Position 1, Verb an Position 2):",
            tokens: ["Wo", "wohnen", "Sie", "in", "Deutschland?"],
            correctTokens: ["Wo", "wohnen", "Sie", "in", "Deutschland?"],
            explanation: "In einer W-Frage steht das Fragewort (Wo) auf Position 1, das konjugierte Verb (wohnen) auf Position 2."
          },
          {
            id: "de-u1-l2-q5",
            type: "multiple_choice",
            prompt: "Welche Besonderheit gilt für Länder mit Artikel wie 'die Schweiz' oder 'die Türkei' bei der Herkunft?",
            options: [
              "Man sagt 'aus der Schweiz' und 'aus der Türkei' (Dativ feminin)",
              "Man lässt den Artikel einfach weg",
              "Man verwendet 'in die Schweiz'",
              "Es gibt keine Länder mit Artikel im Deutschen"
            ],
            correctAnswer: "Man sagt 'aus der Schweiz' und 'aus der Türkei' (Dativ feminin)",
            explanation: "Feminine Ländernamen verlangen nach 'aus' den Dativartikel 'der': 'Ich komme aus der Schweiz'."
          },
          {
            id: "de-u1-l2-q6",
            type: "fill_blank",
            sentence: "Ich wohne jetzt ___ Frankfurt am Main.",
            missingWord: "in",
            options: ["in", "aus", "nach", "von"],
            correctAnswer: "in",
            explanation: "Für den aktuellen Wohnort oder Aufenthaltsort verwendet man 'in + Dativ': 'Ich wohne in Frankfurt'."
          },
          {
            id: "de-u1-l2-q7",
            type: "audio_listen",
            prompt: "Hören Sie den Satz und identifizieren Sie den Wohnort des Sprechers:",
            audioText: "Mein Name ist Amira, ich komme aus Ägypten, aber ich lebe in Köln.",
            options: ["Köln", "Kairo", "Ägypten", "München"],
            correctAnswer: "Köln",
            explanation: "Die Sprecherin sagt: 'ich lebe in Köln' (Wohnort)."
          },
          {
            id: "de-u1-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Personalpronomen den Formen von 'wohnen' zu:",
            pairs: [
              { native: "ich", english: "wohne", left: "ich", right: "wohne" },
              { native: "du", english: "wohnst", left: "du", right: "wohnst" },
              { native: "wir", english: "wohnen", left: "wir", right: "wohnen" },
              { native: "ihr", english: "wohnt", left: "ihr", right: "wohnt" }
            ]
          }
        ]
      },
      {
        id: "de-u1-l3",
        title: "Lesson 1.3: Formulare und Behörden",
        description: "Persönliche Datenblätter bei Ämtern ausfüllen: Vorname, Nachname, Familienstand, Geburtsdatum und Meldeadresse.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u1-l3-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet das Feld 'Familienstand' auf einem deutschen Behördenformular?",
            options: [
              "Ob man ledig, verheiratet, geschieden oder verwitwet ist",
              "Wie viele Haustiere man besitzt",
              "Welchen Beruf der Vater ausübt",
              "Wie groß die Wohnung ist"
            ],
            correctAnswer: "Ob man ledig, verheiratet, geschieden oder verwitwet ist",
            explanation: "'Familienstand' bezeichnet den rechtlichen Beziehungsstatus: ledig, verheiratet, geschieden, verwitwet."
          },
          {
            id: "de-u1-l3-q2",
            type: "matching",
            prompt: "Ordnen Sie die Formularbegriffe ihren Bedeutungen zu:",
            pairs: [
              { native: "Vorname", english: "First name (z. B. Anna)", left: "Vorname", right: "First name (z. B. Anna)" },
              { native: "Familienname / Nachname", english: "Surname / Last name (z. B. Schmidt)", left: "Familienname / Nachname", right: "Surname / Last name (z. B. Schmidt)" },
              { native: "Geburtsort", english: "Place of birth", left: "Geburtsort", right: "Place of birth" },
              { native: "Staatsangehörigkeit", english: "Nationality / Citizenship", left: "Staatsangehörigkeit", right: "Nationality / Citizenship" }
            ]
          },
          {
            id: "de-u1-l3-q3",
            type: "fill_blank",
            sentence: "Bitte tragen Sie Ihre ___ ein: Postleitzahl, Ort und Straße.",
            missingWord: "Adresse",
            options: ["Adresse", "Unterschrift", "Nationalität", "Sprache"],
            correctAnswer: "Adresse",
            explanation: "Straße, Hausnummer, Postleitzahl und Stadt bilden zusammen die Wohnadresse."
          },
          {
            id: "de-u1-l3-q4",
            type: "scramble",
            prompt: "Bringen Sie die Ja/Nein-Frage in die richtige Form (Verb an Position 1):",
            tokens: ["Sind", "Sie", "in", "Deutschland", "gemeldet?"],
            correctTokens: ["Sind", "Sie", "in", "Deutschland", "gemeldet?"],
            explanation: "In einer Entscheidungsfrage (Ja/Nein-Frage) steht das konjugierte Verb ganz am Anfang (Position 1)."
          },
          {
            id: "de-u1-l3-q5",
            type: "multiple_choice",
            prompt: "Welche Abkürzung steht in deutschen Adressen für 'Postleitzahl'?",
            options: ["PLZ", "PKW", "AG", "GmbH"],
            correctAnswer: "PLZ",
            explanation: "'PLZ' ist die fünfstellige Postleitzahl (z. B. 10115 Berlin)."
          },
          {
            id: "de-u1-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Durchsage am Schalter des Bürgeramts und wählen Sie die gezogene Nummer:",
            audioText: "Nummer siebenundvierzig bitte an Schalter drei.",
            options: ["Nummer 47 an Schalter 3", "Nummer 74 an Schalter 3", "Nummer 37 an Schalter 4", "Nummer 40 an Schalter 7"],
            correctAnswer: "Nummer 47 an Schalter 3",
            explanation: "'Siebenundvierzig' ist 47 (im Deutschen werden die Einer vor den Zehnern gesprochen)."
          },
          {
            id: "de-u1-l3-q7",
            type: "fill_blank",
            sentence: "Am Ende des Antragsformulars fehlt noch Ihre ___.",
            missingWord: "Unterschrift",
            options: ["Unterschrift", "Farbe", "Briefmarke", "Rechnung"],
            correctAnswer: "Unterschrift",
            explanation: "Amtliche Dokumente und Verträge werden durch die eigenhändige 'Unterschrift' (Signatur) gültig."
          },
          {
            id: "de-u1-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie den Familienstand der passenden Situation zu:",
            pairs: [
              { native: "ledig", english: "Nicht verheiratet", left: "ledig", right: "Nicht verheiratet" },
              { native: "verheiratet", english: "In einer Ehe lebend", left: "verheiratet", right: "In einer Ehe lebend" },
              { native: "geschieden", english: "Ehe offiziell aufgelöst", left: "geschieden", right: "Ehe offiziell aufgelöst" },
              { native: "verwitwet", english: "Ehepartner ist verstorben", left: "verwitwet", right: "Ehepartner ist verstorben" }
            ]
          }
        ]
      },
      {
        id: "de-u1-l4",
        title: "Lesson 1.4: Telefonieren & Kontaktdaten",
        description: "Telefonnummern austauschen, E-Mail-Adressen diktieren, Buchstabieralphabet und höfliche Bitten mit 'möchte'.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u1-l4-q1",
            type: "multiple_choice",
            prompt: "Wie spricht man das Zeichen '@' in einer deutschen E-Mail-Adresse aus?",
            options: ["ät (at)", "Punkt", "Klammer", "Strich"],
            correctAnswer: "ät (at)",
            explanation: "Das '@'-Symbol wird im Deutschen international als 'ät' ausgesprochen."
          },
          {
            id: "de-u1-l4-q2",
            type: "fill_blank",
            sentence: "Können Sie Ihren Nachnamen bitte ___? — Ja, M-Ü-L-L-E-R.",
            missingWord: "buchstabieren",
            options: ["buchstabieren", "vergessen", "bezahlen", "wohnen"],
            correctAnswer: "buchstabieren",
            explanation: "'Buchstabieren' bedeutet, ein Wort Buchstabe für Buchstabe auszusprechen."
          },
          {
            id: "de-u1-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Symbole von Kontaktdaten ihren Wörtern zu:",
            pairs: [
              { native: ".", english: "Punkt", left: ".", right: "Punkt" },
              { native: "-", english: "Bindestrich", left: "-", right: "Bindestrich" },
              { native: "_", english: "Unterstrich", left: "_", right: "Unterstrich" },
              { native: "/", english: "Schrägstrich", left: "/", right: "Schrägstrich" }
            ]
          },
          {
            id: "de-u1-l4-q4",
            type: "scramble",
            prompt: "Formulieren Sie eine höfliche Bitte am Telefon:",
            tokens: ["Ich", "möchte", "bitte", "Herrn", "Weber", "sprechen."],
            correctTokens: ["Ich", "möchte", "bitte", "Herrn", "Weber", "sprechen."],
            explanation: "Höfliche Telefonformel: 'Ich möchte bitte Herrn Weber sprechen' (Modalverb möchten + Infinitiv am Satzende)."
          },
          {
            id: "de-u1-l4-q5",
            type: "multiple_choice",
            prompt: "Wie meldet man sich in Deutschland typischerweise am Telefon bei einem privaten oder geschäftlichen Anruf?",
            options: [
              "Mit dem eigenen Nachnamen: 'Schmidt, guten Tag!'",
              "Nur mit 'Hallo' ohne Namen",
              "Mit 'Wer ist da?'",
              "Gar nichts sagen und warten"
            ],
            correctAnswer: "Mit dem eigenen Nachnamen: 'Schmidt, guten Tag!'",
            explanation: "Im deutschsprachigen Raum nennt man beim Abheben üblicherweise zuerst den Nachnamen gefolgt von einer Begrüßung."
          },
          {
            id: "de-u1-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Telefonnachricht. Welche Handynummer wird genannt?",
            audioText: "Meine Handynummer lautet: null eins sieben zwei, drei vier fünf sechs sieben.",
            options: ["0172 34567", "0172 35467", "0173 24567", "0171 34567"],
            correctAnswer: "0172 34567",
            explanation: "Die Ziffern lauten: 0 (null) 1 (eins) 7 (sieben) 2 (zwei), 3 4 5 6 7."
          },
          {
            id: "de-u1-l4-q7",
            type: "fill_blank",
            sentence: "Können Sie das bitte noch einmal ___? Ich habe es nicht verstanden.",
            missingWord: "wiederholen",
            options: ["wiederholen", "kaufen", "trinken", "reisen"],
            correctAnswer: "wiederholen",
            explanation: "Wenn man etwas akustisch nicht verstanden hat, bittet man: 'Können Sie das bitte wiederholen?'."
          },
          {
            id: "de-u1-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Telefonformel der passenden Bedeutung zu:",
            pairs: [
              { native: "Einen Moment bitte.", english: "Just a moment please.", left: "Einen Moment bitte.", right: "Just a moment please." },
              { native: "Auf Wiederhören!", english: "Goodbye (on the phone)!", left: "Auf Wiederhören!", right: "Goodbye (on the phone)!" },
              { native: "Ich verbinde Sie.", english: "I will transfer your call.", left: "Ich verbinde Sie.", right: "I will transfer your call." },
              { native: "Falsch verbunden.", english: "Wrong number.", left: "Falsch verbunden.", right: "Wrong number." }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 2: Einkaufen & Dienstleistungen (A1.2)
  // Handlungsfeld: Einkaufen / Waren und Dienstleistungen
  // =========================================================================
  {
    id: "de-unit-2",
    unitId: "de-unit-2",
    unitNumber: 2,
    level: "Phase 1: A1.2 (Elementare Sprachverwendung)",
    title: "Unit 2: Einkaufen & Dienstleistungen (A1.2)",
    subtitle: "Einkaufen / Waren und Dienstleistungen — Bestimmte/unbestimmte Artikel, Negation kein/keine, Akkusativobjekt.",
    icon: "ShoppingBag",
    color: "#059669",
    lessons: [
      {
        id: "de-u2-l1",
        title: "Lesson 2.1: Auf dem Wochenmarkt",
        description: "Lebensmittel, Mengenangaben (Kilo, Gramm, Liter), Preise in Euro und Cent, Dialoge beim Gemüsehändler.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u2-l1-q1",
            type: "multiple_choice",
            prompt: "Wie fragt man auf dem Wochenmarkt höflich nach Äpfeln?",
            options: [
              "Ich hätte gerne ein Kilo Äpfel, bitte.",
              "Gib mir sofort Äpfel!",
              "Äpfel sind hier.",
              "Haben Sie keine Äpfel?"
            ],
            correctAnswer: "Ich hätte gerne ein Kilo Äpfel, bitte.",
            explanation: "'Ich hätte gerne...' ist die klassische, sehr höfliche Bestellformel beim Einkaufen."
          },
          {
            id: "de-u2-l1-q2",
            type: "matching",
            prompt: "Ordnen Sie die deutschen Mengenangaben ihren Abkürzungen zu:",
            pairs: [
              { native: "Kilogramm (Kilo)", english: "kg", left: "Kilogramm (Kilo)", right: "kg" },
              { native: "Gramm", english: "g", left: "Gramm", right: "g" },
              { native: "Liter", english: "l", left: "Liter", right: "l" },
              { native: "Stück", english: "Stk.", left: "Stück", right: "Stk." }
            ]
          },
          {
            id: "de-u2-l1-q3",
            type: "fill_blank",
            sentence: "Was darf es sein? — Ich brauche zwei ___ Milch und fünf Äpfel.",
            missingWord: "Liter",
            options: ["Liter", "Meter", "Stunden", "Kilometer"],
            correctAnswer: "Liter",
            explanation: "Flüssigkeiten wie Milch oder Wasser misst man in 'Liter'."
          },
          {
            id: "de-u2-l1-q4",
            type: "scramble",
            prompt: "Bringen Sie die Frage nach dem Preis in die richtige Reihenfolge:",
            tokens: ["Wie", "viel", "kostet", "ein", "Kilo", "Tomaten?"],
            correctTokens: ["Wie", "viel", "kostet", "ein", "Kilo", "Tomaten?"],
            explanation: "Die Standardfrage nach dem Preis lautet: 'Wie viel kostet...' oder 'Was kostet...'."
          },
          {
            id: "de-u2-l1-q5",
            type: "multiple_choice",
            prompt: "Wie spricht man den Preis '3,50 €' im Deutschen korrekt aus?",
            options: [
              "Drei Euro fünfzig",
              "Drei Punkt fünfzig",
              "Fünfzig Euro drei",
              "Dreihundertfünfzig"
            ],
            correctAnswer: "Drei Euro fünfzig",
            explanation: "Preise mit Cent spricht man als '[Zahl] Euro [Cent]': 'drei Euro fünfzig'."
          },
          {
            id: "de-u2-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Verkäuferin auf dem Markt. Was fragt sie?",
            audioText: "Darf es sonst noch etwas sein?",
            options: [
              "Ob der Kunde noch einen weiteren Wunsch hat",
              "Ob der Markt jetzt schließt",
              "Wie viel Geld der Kunde hat",
              "Woher das Gemüse kommt"
            ],
            correctAnswer: "Ob der Kunde noch einen weiteren Wunsch hat",
            explanation: "'Darf es sonst noch etwas sein?' bedeutet: 'Möchten Sie noch etwas anderes kaufen?'."
          },
          {
            id: "de-u2-l1-q7",
            type: "fill_blank",
            sentence: "Das ist alles, danke. Ich möchte bitte ___.",
            missingWord: "bezahlen",
            options: ["bezahlen", "schlafen", "rennen", "schwimmen"],
            correctAnswer: "bezahlen",
            explanation: "Zum Abschluss des Einkaufs sagt man: 'Ich möchte bitte bezahlen'."
          },
          {
            id: "de-u2-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie das Obst und Gemüse dem richtigen grammatischen Artikel zu:",
            pairs: [
              { native: "Apfel", english: "der (maskulin)", left: "Apfel", right: "der (maskulin)" },
              { native: "Banane", english: "die (feminin)", left: "Banane", right: "die (feminin)" },
              { native: "Brot", english: "das (neutral)", left: "Brot", right: "das (neutral)" },
              { native: "Kartoffeln", english: "die (Plural)", left: "Kartoffeln", right: "die (Plural)" }
            ]
          }
        ]
      },
      {
        id: "de-u2-l2",
        title: "Lesson 2.2: Was kostet das? (Akkusativ & Negation)",
        description: "Akkusativobjekte (den Apfel, einen Kaffee), Verneinung mit 'kein/keine' vs. 'nicht', Vorlieben mit 'möchten'.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u2-l2-q1",
            type: "multiple_choice",
            prompt: "Welcher Artikel verändert sich im Akkusativ Singular?",
            options: [
              "Nur der maskuline Artikel: der -> den (ein -> einen)",
              "Alle Artikel (maskulin, feminin und neutral)",
              "Nur der feminine Artikel: die -> der",
              "Gar kein Artikel ändert sich"
            ],
            correctAnswer: "Nur der maskuline Artikel: der -> den (ein -> einen)",
            explanation: "Im Akkusativ wechselt nur maskulin von 'der / ein' zu 'den / einen'. Das Neutrum (das/ein) und Femininum (die/eine) bleiben unverändert."
          },
          {
            id: "de-u2-l2-q2",
            type: "fill_blank",
            sentence: "Ich nehme ___ Apfel und ein Brötchen.",
            missingWord: "den",
            options: ["den", "der", "dem", "des"],
            correctAnswer: "den",
            explanation: "'Der Apfel' ist maskulin. Nach 'nehmen' steht das Akkusativobjekt: 'den Apfel'."
          },
          {
            id: "de-u2-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie den Nominativ dem passenden Akkusativ unbestimmter Artikel zu:",
            pairs: [
              { native: "ein Tisch (maskulin)", english: "einen Tisch", left: "ein Tisch (maskulin)", right: "einen Tisch" },
              { native: "eine Lampe (feminin)", english: "eine Lampe", left: "eine Lampe (feminin)", right: "eine Lampe" },
              { native: "ein Buch (neutral)", english: "ein Buch", left: "ein Buch (neutral)", right: "ein Buch" },
              { native: "keine Äpfel (Plural)", english: "keine Äpfel", left: "keine Äpfel (Plural)", right: "keine Äpfel" }
            ]
          },
          {
            id: "de-u2-l2-q4",
            type: "scramble",
            prompt: "Ordnen Sie die Satzteile mit Akkusativobjekt:",
            tokens: ["Möchten", "Sie", "einen", "heißen", "Kaffee", "trinken?"],
            correctTokens: ["Möchten", "Sie", "einen", "heißen", "Kaffee", "trinken?"],
            explanation: "'Einen heißen Kaffee' ist das Akkusativobjekt zu 'möchten / trinken'."
          },
          {
            id: "de-u2-l2-q5",
            type: "multiple_choice",
            prompt: "Wann verneint man mit 'kein/keine' statt mit 'nicht'?",
            options: [
              "Bei Nomen mit unbestimmtem Artikel oder ohne Artikel (Nullartikel)",
              "Immer vor Verben und Adjektiven",
              "Nur bei Eigennamen von Personen",
              "Nur in Fragesätzen"
            ],
            correctAnswer: "Bei Nomen mit unbestimmtem Artikel oder ohne Artikel (Nullartikel)",
            explanation: "Nomen mit 'ein' oder ohne Artikel verneint man mit 'kein' (z. B. 'Ich habe keine Zeit', 'Das ist kein Problem')."
          },
          {
            id: "de-u2-l2-q6",
            type: "fill_blank",
            sentence: "Haben Sie Orangensaft? — Nein, leider haben wir ___ Saft mehr.",
            missingWord: "keinen",
            options: ["keinen", "nicht", "kein", "keine"],
            correctAnswer: "keinen",
            explanation: "'Der Saft' ist maskulin; im Akkusativ lautet die Verneinung: 'keinen Saft'."
          },
          {
            id: "de-u2-l2-q7",
            type: "audio_listen",
            prompt: "Hören Sie die Bestellung im Café. Was bestellt der Gast?",
            audioText: "Ich möchte bitte ein Stück Käsekuchen und einen schwarzen Tee.",
            options: [
              "Ein Stück Käsekuchen und einen schwarzen Tee",
              "Einen Kaffee und ein Schinkenbrot",
              "Zwei Stück Apfelkuchen ohne Getränk",
              "Ein Glas Mineralwasser"
            ],
            correctAnswer: "Ein Stück Käsekuchen und einen schwarzen Tee",
            explanation: "Der Gast bestellt: 'ein Stück Käsekuchen und einen schwarzen Tee'."
          },
          {
            id: "de-u2-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Verneinung dem passenden Satz zu:",
            pairs: [
              { native: "Ich trinke...", english: "keinen Alkohol (Nomen mit kein)", left: "Ich trinke...", right: "keinen Alkohol (Nomen mit kein)" },
              { native: "Die Suppe ist...", english: "nicht heiß (Adjektiv mit nicht)", left: "Die Suppe ist...", right: "nicht heiß (Adjektiv mit nicht)" },
              { native: "Er kommt heute...", english: "nicht (Verb mit nicht)", left: "Er kommt heute...", right: "nicht (Verb mit nicht)" },
              { native: "Wir haben...", english: "keine Kinder (Plural mit kein)", left: "Wir haben...", right: "keine Kinder (Plural mit kein)" }
            ]
          }
        ]
      },
      {
        id: "de-u2-l3",
        title: "Lesson 2.3: Im Kaufhaus",
        description: "Kleidungsstücke, Farben, Größen, Anprobe in der Umkleidekabine und Beratung durch das Verkaufspersonal.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u2-l3-q1",
            type: "multiple_choice",
            prompt: "Wo probiert man in einem Kaufhaus Kleidung an?",
            options: ["In der Umkleidekabine", "An der Kasse", "Auf dem Parkplatz", "Im Lager"],
            correctAnswer: "In der Umkleidekabine",
            explanation: "Kleidung probiert man in der 'Umkleidekabine' (oder Umkleide) an."
          },
          {
            id: "de-u2-l3-q2",
            type: "fill_blank",
            sentence: "Haben Sie dieses Hemd auch in ___ M?",
            missingWord: "Größe",
            options: ["Größe", "Farbe", "Kilogramm", "Kasse"],
            correctAnswer: "Größe",
            explanation: "Kleidergrößen (S, M, L, XL oder 38, 40) erfragt man mit: 'in Größe M'."
          },
          {
            id: "de-u2-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die Kleidungsstücke ihren Artikeln zu:",
            pairs: [
              { native: "Hose", english: "die Hose", left: "Hose", right: "die Hose" },
              { native: "Mantel", english: "der Mantel", left: "Mantel", right: "der Mantel" },
              { native: "T-Shirt", english: "das T-Shirt", left: "T-Shirt", right: "das T-Shirt" },
              { native: "Schuhe", english: "die Schuhe (Plural)", left: "Schuhe", right: "die Schuhe (Plural)" }
            ]
          },
          {
            id: "de-u2-l3-q4",
            type: "scramble",
            prompt: "Bauen Sie den Satz zur Passform zusammen:",
            tokens: ["Die", "Hose", "passt", "mir", "sehr", "gut."],
            correctTokens: ["Die", "Hose", "passt", "mir", "sehr", "gut."],
            explanation: "'Passen' steht mit Dativpronomen: 'Die Hose passt mir sehr gut'."
          },
          {
            id: "de-u2-l3-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet es, wenn eine Jacke 'zu eng' ist?",
            options: [
              "Sie ist nicht weit genug / zu klein",
              "Sie ist viel zu groß",
              "Sie ist zu billig",
              "Sie hat die falsche Farbe"
            ],
            correctAnswer: "Sie ist nicht weit genug / zu klein",
            explanation: "'Zu eng' bedeutet, dass das Kleidungsstück spannt oder zu klein geschnitten ist (Gegenteil: 'zu weit')."
          },
          {
            id: "de-u2-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Frage des Verkäufers und wählen Sie die Absicht:",
            audioText: "Kann ich Ihnen behilflich sein oder suchen Sie etwas Bestimmtes?",
            options: [
              "Der Verkäufer bietet dem Kunden seine Hilfe an",
              "Der Verkäufer fordert den Kunden auf zu gehen",
              "Der Verkäufer verlangt den Kassenbeleg",
              "Der Verkäufer fragt nach der Uhrzeit"
            ],
            correctAnswer: "Der Verkäufer bietet dem Kunden seine Hilfe an",
            explanation: "'Kann ich Ihnen behilflich sein?' ist die typische Höflichkeitsfrage von Verkaufspersonal."
          },
          {
            id: "de-u2-l3-q7",
            type: "fill_blank",
            sentence: "Ich suche eine Jacke in der ___ Blau oder Schwarz.",
            missingWord: "Farbe",
            options: ["Farbe", "Größe", "Zahl", "Währung"],
            correctAnswer: "Farbe",
            explanation: "Blau, Schwarz, Rot und Grün sind 'Farben'."
          },
          {
            id: "de-u2-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die Adjektive ihren Gegenteilen zu:",
            pairs: [
              { native: "hell", english: "dunkel", left: "hell", right: "dunkel" },
              { native: "teuer", english: "billig / günstig", left: "teuer", right: "billig / günstig" },
              { native: "groß", english: "klein", left: "groß", right: "klein" },
              { native: "weit", english: "eng", left: "weit", right: "eng" }
            ]
          }
        ]
      },
      {
        id: "de-u2-l4",
        title: "Lesson 2.4: Öffnungszeiten und Kassenbelege",
        description: "Geschäftszeiten verstehen, Schilder im Einzelhandel, Kassenbons prüfen, Zahlungsarten (bar oder mit Karte).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u2-l4-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet das Schild 'Mo–Fr 08:00–20:00 Uhr, Sa 08:00–18:00 Uhr' an der Ladentür?",
            options: [
              "Die regulären Öffnungszeiten des Geschäfts unter der Woche und am Samstag",
              "Die Abfahrtszeiten des Busses",
              "Die Arbeitszeit des Wachpersonals",
              "Dass der Laden am Samstag geschlossen bleibt"
            ],
            correctAnswer: "Die regulären Öffnungszeiten des Geschäfts unter der Woche und am Samstag",
            explanation: "'Öffnungszeiten' geben an, von wann bis wann Kunden einkaufen können. 'Mo–Fr' steht für Montag bis Freitag."
          },
          {
            id: "de-u2-l4-q2",
            type: "fill_blank",
            sentence: "Zahlen Sie ___ oder mit Karte?",
            missingWord: "bar",
            options: ["bar", "schnell", "laut", "frei"],
            correctAnswer: "bar",
            explanation: "Die Standardfrage an der Kasse lautet: 'Zahlen Sie bar (Bargeld) oder mit Karte?'."
          },
          {
            id: "de-u2-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Kassenbegriffe den Erklärungen zu:",
            pairs: [
              { native: "der Kassenbon", english: "Rechnungsbeleg nach dem Einkauf", left: "der Kassenbon", right: "Rechnungsbeleg nach dem Einkauf" },
              { native: "das Rückgeld", english: "Restgeld bei Barzahlung", left: "das Rückgeld", right: "Restgeld bei Barzahlung" },
              { native: "die EC-Karte / Girocard", english: "Bankkarte zur bargeldlosen Zahlung", left: "die EC-Karte / Girocard", right: "Bankkarte zur bargeldlosen Zahlung" },
              { native: "die Mehrwertsteuer (MwSt.)", english: "Gesetzliche Verbrauchssteuer", left: "die Mehrwertsteuer (MwSt.)", right: "Gesetzliche Verbrauchssteuer" }
            ]
          },
          {
            id: "de-u2-l4-q4",
            type: "scramble",
            prompt: "Ordnen Sie den Fragesatz an der Kasse:",
            tokens: ["Brauchen", "Sie", "den", "Kassenzettel", "mit?"],
            correctTokens: ["Brauchen", "Sie", "den", "Kassenzettel", "mit?"],
            explanation: "Die Kassiererin fragt oft: 'Brauchen Sie den Kassenzettel mit?' (Kassenzettel = Kassenbon)."
          },
          {
            id: "de-u2-l4-q5",
            type: "multiple_choice",
            prompt: "Sind Supermärkte in Deutschland an Sonntagen normalerweise geöffnet?",
            options: [
              "Nein, sonntags gilt der gesetzliche Ladenschluss (außer an großen Hauptbahnhöfen)",
              "Ja, alle Geschäfte haben 24 Stunden an 7 Tagen geöffnet",
              "Nur sonntags von 14:00 bis 22:00 Uhr",
              "Ja, aber nur für Kleidung"
            ],
            correctAnswer: "Nein, sonntags gilt der gesetzliche Ladenschluss (außer an großen Hauptbahnhöfen)",
            explanation: "In Deutschland gilt das Sonntagsverkaufsverbot: Reguläre Geschäfte und Supermärkte bleiben sonntags geschlossen."
          },
          {
            id: "de-u2-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Ansage im Supermarkt. Wann schließt der Markt heute?",
            audioText: "Sehr geehrte Kundinnen und Kunden, unser Markt schließt in fünfzehn Minuten. Bitte begeben Sie sich zu den Kassen.",
            options: [
              "In 15 Minuten",
              "In einer halben Stunde",
              "Um Mitternacht",
              "Er bleibt die ganze Nacht geöffnet"
            ],
            correctAnswer: "In 15 Minuten",
            explanation: "Die Durchsage kündigt an: 'schließt in fünfzehn Minuten'."
          },
          {
            id: "de-u2-l4-q7",
            type: "fill_blank",
            sentence: "Wenn Sie einen Artikel umtauschen möchten, bringen Sie bitte den ___ mit.",
            missingWord: "Kassenbeleg",
            options: ["Kassenbeleg", "Führerschein", "Schlüssel", "Spiegel"],
            correctAnswer: "Kassenbeleg",
            explanation: "Für eine Reklamation oder Rückgabe benötigt man den Kaufnachweis: den Kassenbeleg (Kassenbon)."
          },
          {
            id: "de-u2-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Wochentage in chronologischer Reihenfolge zu:",
            pairs: [
              { native: "Montag", english: "1. Tag der Arbeitswoche", left: "Montag", right: "1. Tag der Arbeitswoche" },
              { native: "Mittwoch", english: "Mitte der Woche", left: "Mittwoch", right: "Mitte der Woche" },
              { native: "Freitag", english: "Letzter Werktag vor dem Wochenende", left: "Freitag", right: "Letzter Werktag vor dem Wochenende" },
              { native: "Sonntag", english: "Ruhetag", left: "Sonntag", right: "Ruhetag" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 3: Alltag, Wohnen & Mobilität (A2.1)
  // Handlungsfeld: Wohnen / Mobilität und Verkehr
  // =========================================================================
  {
    id: "de-unit-3",
    unitId: "de-unit-3",
    unitNumber: 3,
    level: "Phase 1: A2.1 (Elementare Sprachverwendung)",
    title: "Unit 3: Alltag, Wohnen & Mobilität (A2.1)",
    subtitle: "Wohnen / Mobilität und Verkehr — Dativ, Wechselpräpositionen, Modalverben (können, müssen, dürfen), ÖPNV.",
    icon: "Compass",
    color: "#3b82f6",
    lessons: [
      {
        id: "de-u3-l1",
        title: "Lesson 3.1: Wohnungssuche",
        description: "Wohnungsanzeigen verstehen, Abkürzungen (2-ZKB, EG, OG), Kaltmiete vs. Warmmiete, Kaution und Grundrisse.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u3-l1-q1",
            type: "multiple_choice",
            prompt: "Wofür steht die gängige Abkürzung '2-ZKB' in einer deutschen Wohnungsanzeige?",
            options: [
              "2 Zimmer, Küche, Bad",
              "2 Zentner Kohle und Briketts",
              "2 Züge, Kinder und Betten",
              "2 Zähler für Keller und Balkon"
            ],
            correctAnswer: "2 Zimmer, Küche, Bad",
            explanation: "'2-ZKB' bedeutet: 2 Wohn-/Schlafräume plus separate Küche und Badezimmer."
          },
          {
            id: "de-u3-l1-q2",
            type: "matching",
            prompt: "Ordnen Sie die Begriffe der Wohnungsmiete zu:",
            pairs: [
              { native: "Kaltmiete", english: "Grundmiete ohne Heiz- und Nebenkosten", left: "Kaltmiete", right: "Grundmiete ohne Heiz- und Nebenkosten" },
              { native: "Warmmiete", english: "Gesamtmiete inklusive Nebenkostenvorauszahlung", left: "Warmmiete", right: "Gesamtmiete inklusive Nebenkostenvorauszahlung" },
              { native: "Kaution", english: "Sicherheitsleistung (meist bis zu 3 Kaltmieten)", left: "Kaution", right: "Sicherheitsleistung (meist bis zu 3 Kaltmieten)" },
              { native: "Nebenkosten (NK)", english: "Wasser, Müllabfuhr, Heizung, Hausmeister", left: "Nebenkosten (NK)", right: "Wasser, Müllabfuhr, Heizung, Hausmeister" }
            ]
          },
          {
            id: "de-u3-l1-q3",
            type: "fill_blank",
            sentence: "Die Wohnung befindet sich im 2. ___ (Obergeschoss) und hat einen Balkon.",
            missingWord: "Stock",
            options: ["Stock", "Garten", "Keller", "Dach"],
            correctAnswer: "Stock",
            explanation: "'Im 2. Stock' (oder 2. OG / Obergeschoss) bezeichnet die Etage im Gebäude."
          },
          {
            id: "de-u3-l1-q4",
            type: "scramble",
            prompt: "Bringen Sie die Terminanfrage für eine Wohnungsbesichtigung in die richtige Reihenfolge:",
            tokens: ["Wann", "kann", "ich", "die", "Wohnung", "besichtigen?"],
            correctTokens: ["Wann", "kann", "ich", "die", "Wohnung", "besichtigen?"],
            explanation: "Modalverb 'kann' an Position 2, Infinitiv 'besichtigen' am Satzende."
          },
          {
            id: "de-u3-l1-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet die Abkürzung 'EG' in einer Immobilienanzeige?",
            options: ["Erdgeschoss (Parterre)", "Erstes Geschoss", "Eigentümergemeinschaft", "Eckgarten"],
            correctAnswer: "Erdgeschoss (Parterre)",
            explanation: "'EG' steht für Erdgeschoss, die unterste Wohnetage auf Straßenniveau."
          },
          {
            id: "de-u3-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Vermieterin auf der Mailbox. Wie hoch ist die Warmmiete?",
            audioText: "Guten Tag, die Kaltmiete beträgt sechshundert Euro und die Warmmiete achthundert Euro im Monat.",
            options: ["800 Euro", "600 Euro", "1.400 Euro", "200 Euro"],
            correctAnswer: "800 Euro",
            explanation: "Die Vermieterin nennt explizit: 'die Warmmiete achthundert Euro'."
          },
          {
            id: "de-u3-l1-q7",
            type: "fill_blank",
            sentence: "Vor dem Einzug müssen Mieter und Vermieter das Übergabe-___ unterschreiben.",
            missingWord: "Protokoll",
            options: ["Protokoll", "Zeugnis", "Rezept", "Buch"],
            correctAnswer: "Protokoll",
            explanation: "Im 'Übergabeprotokoll' werden Zustand, Zählerstände und eventuelle Mängel der Wohnung festgehalten."
          },
          {
            id: "de-u3-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die Raumbezeichnungen den Tätigkeiten zu:",
            pairs: [
              { native: "die Küche", english: "Hier kocht man", left: "die Küche", right: "Hier kocht man" },
              { native: "das Schlafzimmer", english: "Hier schläft man", left: "das Schlafzimmer", right: "Hier schläft man" },
              { native: "das Badezimmer", english: "Hier duscht man", left: "das Badezimmer", right: "Hier duscht man" },
              { native: "der Keller", english: "Hier lagert man Gegenstände", left: "der Keller", right: "Hier lagert man Gegenstände" }
            ]
          }
        ]
      },
      {
        id: "de-u3-l2",
        title: "Lesson 3.2: Einrichten und Beschreiben (Wechselpräpositionen)",
        description: "Möbelstücke, Dativ zur Ortsbestimmung (Wo?), Wechselpräpositionen (in, an, auf, unter, über, vor, hinter, neben, zwischen).",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u3-l2-q1",
            type: "multiple_choice",
            prompt: "Welche Frage verlangt bei Wechselpräpositionen (in, an, auf...) den DATIV?",
            options: [
              "Die Frage 'Wo?' (feste Position / Stillstand)",
              "Die Frage 'Wohin?' (Richtung / Bewegung)",
              "Die Frage 'Warum?' (Grund)",
              "Die Frage 'Wann?' (Zeitpunkt)"
            ],
            correctAnswer: "Die Frage 'Wo?' (feste Position / Stillstand)",
            explanation: "Auf die Frage 'Wo?' (Ort/Lage) folgt immer der Dativ: 'Das Buch liegt auf dem Tisch'."
          },
          {
            id: "de-u3-l2-q2",
            type: "fill_blank",
            sentence: "Das Bild hängt an ___ Wand (feminin, Dativ).",
            missingWord: "der",
            options: ["der", "die", "den", "dem"],
            correctAnswer: "der",
            explanation: "Im Dativ wird 'die Wand' (feminin) zu 'der Wand': 'an der Wand'."
          },
          {
            id: "de-u3-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie den Nominativ dem Dativ nach Wechselpräpositionen zu:",
            pairs: [
              { native: "der Tisch (maskulin)", english: "auf dem Tisch", left: "der Tisch (maskulin)", right: "auf dem Tisch" },
              { native: "das Sofa (neutral)", english: "auf dem Sofa", left: "das Sofa (neutral)", right: "auf dem Sofa" },
              { native: "die Küche (feminin)", english: "in der Küche", left: "die Küche (feminin)", right: "in der Küche" },
              { native: "die Regale (Plural)", english: "in den Regalen", left: "die Regale (Plural)", right: "in den Regalen" }
            ]
          },
          {
            id: "de-u3-l2-q4",
            type: "scramble",
            prompt: "Bauen Sie den Satz mit Dativ-Ortsangabe:",
            tokens: ["Der", "Teppich", "liegt", "unter", "dem", "Schreibtisch."],
            correctTokens: ["Der", "Teppich", "liegt", "unter", "dem", "Schreibtisch."],
            explanation: "'Unter dem Schreibtisch' ist die Dativ-Ortsbestimmung zu der maskulinen Schreibtisch."
          },
          {
            id: "de-u3-l2-q5",
            type: "multiple_choice",
            prompt: "Welche Präposition wählt man, wenn ein Gegenstand 'senkrecht an einer Fläche' befestigt ist (z. B. ein Poster an der Wand)?",
            options: ["an", "auf", "in", "unter"],
            correctAnswer: "an",
            explanation: "'An' beschreibt den seitlichen Kontakt zu einer senkrechten Fläche (an der Wand, am Fenster)."
          },
          {
            id: "de-u3-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Wegbeschreibung im Zimmer. Wo steht der Kleiderschrank?",
            audioText: "Der Kleiderschrank steht neben der Tür hinter dem Bett.",
            options: ["Neben der Tür", "Auf dem Balkon", "Im Badezimmer", "Unter dem Tisch"],
            correctAnswer: "Neben der Tür",
            explanation: "Der Sprecher erklärt: 'Der Kleiderschrank steht neben der Tür'."
          },
          {
            id: "de-u3-l2-q7",
            type: "fill_blank",
            sentence: "Die Katze schläft zwischen den beiden ___ (Plural, Dativ).",
            missingWord: "Stühlen",
            options: ["Stühlen", "Stühle", "Stuhl", "Stuhles"],
            correctAnswer: "Stühlen",
            explanation: "Im Dativ Plural erhalten deutsche Nomen fast immer ein zusätzliches '-n': 'zwischen den Stühlen'."
          },
          {
            id: "de-u3-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Möbelstücke den Räumen zu:",
            pairs: [
              { native: "der Kühlschrank", english: "in der Küche", left: "der Kühlschrank", right: "in der Küche" },
              { native: "das Doppelbett", english: "im Schlafzimmer", left: "das Doppelbett", right: "im Schlafzimmer" },
              { native: "die Badewanne", english: "im Badezimmer", left: "die Badewanne", right: "im Badezimmer" },
              { native: "die Couch", english: "im Wohnzimmer", left: "die Couch", right: "im Wohnzimmer" }
            ]
          }
        ]
      },
      {
        id: "de-u3-l3",
        title: "Lesson 3.3: Unterwegs mit Bus und Bahn",
        description: "Fahrkarten am Automaten kaufen, Fahrpläne lesen, S-Bahn/U-Bahn, Gleisangaben, Verspätungen und Richtungsfragen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u3-l3-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet die Abkürzung 'ÖPNV' in Deutschland?",
            options: [
              "Öffentlicher Personennahverkehr (Bus, Tram, U-Bahn, S-Bahn)",
              "Öffentliche Polizei nach Vorschrift",
              "Örtlicher Post- und Notfallverkehr",
              "Ökologische Parkplatznutzungsverordnung"
            ],
            correctAnswer: "Öffentlicher Personennahverkehr (Bus, Tram, U-Bahn, S-Bahn)",
            explanation: "'ÖPNV' ist der Sammelbegriff für das öffentliche Nahverkehrsnetz."
          },
          {
            id: "de-u3-l3-q2",
            type: "fill_blank",
            sentence: "Der Zug nach München fährt heute von ___ 4 ab.",
            missingWord: "Gleis",
            options: ["Gleis", "Straße", "Flugplatz", "Hafen"],
            correctAnswer: "Gleis",
            explanation: "Züge fahren an Bahnhöfen von einem bestimmten 'Gleis' (Bahnsteig) ab."
          },
          {
            id: "de-u3-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die Ticketarten ihren Verwendungszwecken zu:",
            pairs: [
              { native: "Einzelfahrschein", english: "Für eine einfache Fahrt in eine Richtung", left: "Einzelfahrschein", right: "Für eine einfache Fahrt in eine Richtung" },
              { native: "Tageskarte", english: "Gilt 24 Stunden für beliebig viele Fahrten", left: "Tageskarte", right: "Gilt 24 Stunden für beliebig viele Fahrten" },
              { native: "Monatskarte / Deutschlandticket", english: "Gültig für einen ganzen Kalendermonat bundesweit", left: "Monatskarte / Deutschlandticket", right: "Gültig für einen ganzen Kalendermonat bundesweit" },
              { native: "Kurzstrecke", english: "Gültig für bis zu 3 oder 4 Stationen", left: "Kurzstrecke", right: "Gültig für bis zu 3 oder 4 Stationen" }
            ]
          },
          {
            id: "de-u3-l3-q4",
            type: "scramble",
            prompt: "Fragen Sie nach dem Weg zum Hauptbahnhof:",
            tokens: ["Entschuldigung,", "wie", "komme", "ich", "zum", "Hauptbahnhof?"],
            correctTokens: ["Entschuldigung,", "wie", "komme", "ich", "zum", "Hauptbahnhof?"],
            explanation: "Klassische Höflichkeitsformel für Wegbeschreibungen im Straßenverkehr."
          },
          {
            id: "de-u3-l3-q5",
            type: "multiple_choice",
            prompt: "Was muss man vor Fahrtantritt mit vielen Papiertickets im Nahverkehr tun, damit sie gültig sind?",
            options: [
              "Am Entwerter auf dem Bahnsteig oder im Bus abstempeln (entwerten)",
              "Unterschreiben und per Post an die Bahn senden",
              "In der Mitte durchreißen",
              "Dem Busfahrer schenken"
            ],
            correctAnswer: "Am Entwerter auf dem Bahnsteig oder im Bus abstempeln (entwerten)",
            explanation: "Nicht entwertete Tickets gelten bei einer Fahrkartenkontrolle als ungültig ('Schwarzfahren')."
          },
          {
            id: "de-u3-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Lautsprecherdurchsage am Bahnhof. Warum verzögert sich der ICE?",
            audioText: "Information zu ICE 574 nach Hamburg: Wegen einer Signalstörung verzögert sich die Abfahrt um circa zwanzig Minuten.",
            options: [
              "Wegen einer Signalstörung (ca. 20 Minuten Verspätung)",
              "Wegen starken Schneefalls (Zug fällt aus)",
              "Weil der Zug bereits vorzeitig abgefahren ist",
              "Wegen Bauarbeiten am Bahnsteig 10"
            ],
            correctAnswer: "Wegen einer Signalstörung (ca. 20 Minuten Verspätung)",
            explanation: "Die Durchsage nennt: 'Wegen einer Signalstörung... um circa zwanzig Minuten'."
          },
          {
            id: "de-u3-l3-q7",
            type: "fill_blank",
            sentence: "Muss ich in Hannover ___ oder fährt der Zug direkt durch?",
            missingWord: "umsteigen",
            options: ["umsteigen", "aufstehen", "einkaufen", "kochen"],
            correctAnswer: "umsteigen",
            explanation: "Von einem Verkehrsmittel in ein anderes wechseln heißt 'umsteigen'."
          },
          {
            id: "de-u3-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die Richtungsangaben zu:",
            pairs: [
              { native: "geradeaus", english: "Straight ahead", left: "geradeaus", right: "Straight ahead" },
              { native: "nach links", english: "To the left", left: "nach links", right: "To the left" },
              { native: "nach rechts", english: "To the right", left: "nach rechts", right: "To the right" },
              { native: "gegenüber", english: "Opposite / across from", left: "gegenüber", right: "Opposite / across from" }
            ]
          }
        ]
      },
      {
        id: "de-u3-l4",
        title: "Lesson 3.4: Hausordnung und Nachbarschaft (Modalverben)",
        description: "Modalverben (können, müssen, dürfen, nicht dürfen), Ruhezeiten, Müllentsorgung im Miethaus, nachbarschaftliche Vereinbarungen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u3-l4-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet das Verbot 'Hier darf man nicht rauchen' mit dem Modalverb 'dürfen'?",
            options: [
              "Rauchen ist gesetzlich oder durch Hausordnung verboten (keine Erlaubnis)",
              "Rauchen wird empfohlen",
              "Man muss hier rauchen",
              "Man kann rauchen, wenn man möchte"
            ],
            correctAnswer: "Rauchen ist gesetzlich oder durch Hausordnung verboten (keine Erlaubnis)",
            explanation: "'Nicht dürfen' drückt ein striktes Verbot aus (fehlende Erlaubnis)."
          },
          {
            id: "de-u3-l4-q2",
            type: "fill_blank",
            sentence: "Ab 22:00 Uhr gilt die Nachtruhe. Man ___ keinen lauten Lärm mehr machen.",
            missingWord: "darf",
            options: ["darf", "muss", "will", "mag"],
            correctAnswer: "darf",
            explanation: "'Man darf nicht' signalisiert das Verbot von Ruhestörungen während der gesetzlichen Nachtruhe."
          },
          {
            id: "de-u3-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Modalverben ihren Bedeutungen zu:",
            pairs: [
              { native: "müssen", english: "Notwendigkeit / Pflicht (obligation)", left: "müssen", right: "Notwendigkeit / Pflicht (obligation)" },
              { native: "können", english: "Fähigkeit / Möglichkeit (ability/possibility)", left: "können", right: "Fähigkeit / Möglichkeit (ability/possibility)" },
              { native: "dürfen", english: "Erlaubnis (permission)", left: "dürfen", right: "Erlaubnis (permission)" },
              { native: "wollen", english: "Fester Wille / Absicht (strong intention)", left: "wollen", right: "Fester Wille / Absicht (strong intention)" }
            ]
          },
          {
            id: "de-u3-l4-q4",
            type: "scramble",
            prompt: "Bauen Sie die Hausordnungsregel zusammen:",
            tokens: ["Im", "Treppenhaus", "muss", "man", "Kinderwagen", "platzsparend", "abstellen."],
            correctTokens: ["Im", "Treppenhaus", "muss", "man", "Kinderwagen", "platzsparend", "abstellen."],
            explanation: "Modalverb 'muss' an Position 2, Hauptverb 'abstellen' im Infinitiv am Satzende."
          },
          {
            id: "de-u3-l4-q5",
            type: "multiple_choice",
            prompt: "Wann gilt in Deutschland nach den meisten Hausordnungen die tägliche Nachtruhe?",
            options: [
              "Von 22:00 Uhr bis 06:00 oder 07:00 Uhr morgens",
              "Nur sonntags für zwei Stunden",
              "Gibt es in Deutschland überhaupt nicht",
              "Von 12:00 bis 14:00 Uhr nachts"
            ],
            correctAnswer: "Von 22:00 Uhr bis 06:00 oder 07:00 Uhr morgens",
            explanation: "Die gesetzliche Nachtruhe beginnt in Deutschland bundesweit um 22:00 Uhr."
          },
          {
            id: "de-u3-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Hausmeister. Welche Regel erklärt er dem neuen Mieter?",
            audioText: "Bitte stellen Sie keine Fahrräder oder Müllsäcke in den Hausflur, das ist ein Fluchtweg.",
            options: [
              "Der Hausflur muss als Fluchtweg frei bleiben von Fahrrädern und Müll",
              "Jeder Mieter soll sein Fahrrad im Flur reparieren",
              "Der Müll soll im Treppenhaus gelagert werden",
              "Die Haustür muss Tag und Nacht offen bleiben"
            ],
            correctAnswer: "Der Hausflur muss als Fluchtweg frei bleiben von Fahrrädern und Müll",
            explanation: "Der Hausmeister begründet das Verbot damit, dass das Treppenhaus der offizielle Fluchtweg bei Brandgefahr ist."
          },
          {
            id: "de-u3-l4-q7",
            type: "fill_blank",
            sentence: "Wir ___ am Samstag eine kleine Feier machen. Wir haben die Nachbarn informiert.",
            missingWord: "möchten",
            options: ["möchten", "müssen", "darf", "sollst"],
            correctAnswer: "möchten",
            explanation: "1. Person Plural von möchten: 'Wir möchten...' (Ausdruck von Wunsch/Absicht)."
          },
          {
            id: "de-u3-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Konjugationen des unregelmäßigen Modalverbs 'können' zu:",
            pairs: [
              { native: "ich", english: "kann", left: "ich", right: "kann" },
              { native: "du", english: "kannst", left: "du", right: "kannst" },
              { native: "er / sie / es", english: "kann", left: "er / sie / es", right: "kann" },
              { native: "wir", english: "können", left: "wir", right: "können" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 4: Gesundheit & Arbeitswelt (A2.2)
  // Handlungsfeld: Gesundheit / Arbeit und Beruf
  // =========================================================================
  {
    id: "de-unit-4",
    unitId: "de-unit-4",
    unitNumber: 4,
    level: "Phase 1: A2.2 (Elementare Sprachverwendung)",
    title: "Unit 4: Gesundheit & Arbeitswelt (A2.2)",
    subtitle: "Gesundheit / Arbeit und Beruf — Perfekt (haben/sein), Präteritum von sein/haben, Imperativ, Arzttermin, AU-Bescheinigung.",
    icon: "Shield",
    color: "#e11d48",
    lessons: [
      {
        id: "de-u4-l1",
        title: "Lesson 4.1: Beim Arzt",
        description: "Körperteile, Symptome und Schmerzen beschreiben ('tut weh'), Praxisabläufe, Notaufnahme und Krankenversicherungskarte.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u4-l1-q1",
            type: "multiple_choice",
            prompt: "Wie drückt man auf Deutsch aus, dass man starke Kopfschmerzen hat?",
            options: [
              "Mein Kopf tut mir sehr weh. / Ich habe starke Kopfschmerzen.",
              "Mein Kopf ist schuld.",
              "Ich wehe meinen Kopf.",
              "Der Kopf ist kaputt."
            ],
            correctAnswer: "Mein Kopf tut mir sehr weh. / Ich habe starke Kopfschmerzen.",
            explanation: "Körperliche Schmerzen drückt man mit 'wehtun' oder 'Ich habe [Körperteil]schmerzen' aus."
          },
          {
            id: "de-u4-l1-q2",
            type: "fill_blank",
            sentence: "Bitte zeigen Sie mir an der Anmeldung Ihre elektronische Gesundheits-___.",
            missingWord: "karte",
            options: ["karte", "tür", "uhr", "brille"],
            correctAnswer: "karte",
            explanation: "In Deutschland legt man in der Arztpraxis die Versichertenkarte (elektronische Gesundheitskarte) vor."
          },
          {
            id: "de-u4-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die Beschwerden der passenden Facharztpraxis zu:",
            pairs: [
              { native: "Zahnschmerzen", english: "Zahnarzt", left: "Zahnschmerzen", right: "Zahnarzt" },
              { native: "Fieber, Husten, Grippe", english: "Hausarzt (Allgemeinmediziner)", left: "Fieber, Husten, Grippe", right: "Hausarzt (Allgemeinmediziner)" },
              { native: "Sehprobleme", english: "Augenarzt", left: "Sehprobleme", right: "Augenarzt" },
              { native: "Knochenbruch / Gelenkunfall", english: "Orthopäde / Notaufnahme", left: "Knochenbruch / Gelenkunfall", right: "Orthopäde / Notaufnahme" }
            ]
          },
          {
            id: "de-u4-l1-q4",
            type: "scramble",
            prompt: "Bilden Sie den Imperativ für den Patienten beim Arzt:",
            tokens: ["Nehmen", "Sie", "diese", "Tabletten", "dreimal", "täglich."],
            correctTokens: ["Nehmen", "Sie", "diese", "Tabletten", "dreimal", "täglich."],
            explanation: "Formeller Imperativ: 'Nehmen Sie...' (Verb an Position 1 gefolgt von 'Sie')."
          },
          {
            id: "de-u4-l1-q5",
            type: "multiple_choice",
            prompt: "Welche bundesweite Telefonnummer wählt man in Deutschland bei lebensgefährlichen Notfällen (Rettungsdienst)?",
            options: ["112", "110", "116 117", "118 33"],
            correctAnswer: "112",
            explanation: "Die 112 ist der europaweite Notruf für Rettungsdienst und Feuerwehr (110 ist die Polizei)."
          },
          {
            id: "de-u4-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Arzt. Was diagnostiziert er?",
            audioText: "Sie haben eine akute Bronchitis mit hohem Fieber. Sie müssen fünf Tage im Bett bleiben.",
            options: [
              "Eine akute Bronchitis mit Fieber (5 Tage Bettruhe)",
              "Einen gebrochenen Arm",
              "Eine leichte allergische Hautreaktion",
              "Der Patient ist völlig gesund"
            ],
            correctAnswer: "Eine akute Bronchitis mit Fieber (5 Tage Bettruhe)",
            explanation: "Der Arzt stellt 'eine akute Bronchitis mit hohem Fieber' fest und verordnet 5 Tage Bettruhe."
          },
          {
            id: "de-u4-l1-q7",
            type: "fill_blank",
            sentence: "Seit wann ___ Sie diese Beschwerden schon? — Seit zwei Tagen.",
            missingWord: "haben",
            options: ["haben", "bist", "macht", "geht"],
            correctAnswer: "haben",
            explanation: "Frage nach der Dauer: 'Seit wann haben Sie diese Beschwerden?'."
          },
          {
            id: "de-u4-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die Körperteile ihren Artikeln zu:",
            pairs: [
              { native: "Kopf", english: "der Kopf (maskulin)", left: "Kopf", right: "der Kopf (maskulin)" },
              { native: "Hand", english: "die Hand (feminin)", left: "Hand", right: "die Hand (feminin)" },
              { native: "Bein", english: "das Bein (neutral)", left: "Bein", right: "das Bein (neutral)" },
              { native: "Augen", english: "die Augen (Plural)", left: "Augen", right: "die Augen (Plural)" }
            ]
          }
        ]
      },
      {
        id: "de-u4-l2",
        title: "Lesson 4.2: Krankmeldung und Apotheke",
        description: "Den Arbeitgeber über Arbeitsunfähigkeit informieren, ärztliches Attest (eAU), rezeptpflichtige Medikamente in der Apotheke.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u4-l2-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet die Abkürzung 'AU-Bescheinigung' im Arbeitsalltag?",
            options: [
              "Arbeitsunfähigkeitsbescheinigung (ärztliches Attest für den Arbeitgeber)",
              "Allgemeine Unfallversicherung",
              "Ausbildungsunterlagen",
              "Autovermietung"
            ],
            correctAnswer: "Arbeitsunfähigkeitsbescheinigung (ärztliches Attest für den Arbeitgeber)",
            explanation: "Die 'AU-Bescheinigung' (Krankenschein, heute elektronisch als eAU) bestätigt offiziell, dass der Arbeitnehmer arbeitsunfähig krank ist."
          },
          {
            id: "de-u4-l2-q2",
            type: "fill_blank",
            sentence: "Guten Morgen Chef, ich bin leider krank und kann heute nicht zur Arbeit ___.",
            missingWord: "kommen",
            options: ["kommen", "reisen", "schlafen", "zahlen"],
            correctAnswer: "kommen",
            explanation: "Krankmeldung beim Vorgesetzten: '...kann heute nicht zur Arbeit kommen'."
          },
          {
            id: "de-u4-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie die Begriffe aus der Apotheke zu:",
            pairs: [
              { native: "das Rezept", english: "Ärztliche Verordnung für Medikamente", left: "das Rezept", right: "Ärztliche Verordnung für Medikamente" },
              { native: "die Packungsbeilage", english: "Information über Dosierung und Nebenwirkungen", left: "die Packungsbeilage", right: "Information über Dosierung und Nebenwirkungen" },
              { native: "die Notdienst-Apotheke", english: "Geöffnet in der Nacht und an Feiertagen", left: "die Notdienst-Apotheke", right: "Geöffnet in der Nacht und an Feiertagen" },
              { native: "die Schmerztablette", english: "Gegen Schmerzen (z. B. Ibuprofen)", left: "die Schmerztablette", right: "Gegen Schmerzen (z. B. Ibuprofen)" }
            ]
          },
          {
            id: "de-u4-l2-q4",
            type: "scramble",
            prompt: "Ordnen Sie die Einnahmeempfehlung des Apothekers:",
            tokens: ["Nehmen", "Sie", "die", "Tropfen", "vor", "dem", "Essen."],
            correctTokens: ["Nehmen", "Sie", "die", "Tropfen", "vor", "dem", "Essen."],
            explanation: "Imperativanweisung in der Apotheke: 'Nehmen Sie die Tropfen vor dem Essen'."
          },
          {
            id: "de-u4-l2-q5",
            type: "multiple_choice",
            prompt: "Was unterscheidet eine 'Apotheke' von einer 'Drogerie' in Deutschland?",
            options: [
              "In der Apotheke gibt es rezeptpflichtige Medikamente; in der Drogerie nur Kosmetik und Hygieneartikel",
              "Eine Drogerie verkauft nur Kleidung",
              "Es gibt überhaupt keinen Unterschied",
              "Apotheken verkaufen nur Lebensmittel"
            ],
            correctAnswer: "In der Apotheke gibt es rezeptpflichtige Medikamente; in der Drogerie nur Kosmetik und Hygieneartikel",
            explanation: "Echte Arzneimittel sind in Deutschland apothekenpflichtig. Drogerien (z. B. dm, Rossmann) dürfen keine verschreibungspflichtigen Medikamente verkaufen."
          },
          {
            id: "de-u4-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Apothekerin. Wie oft soll das Medikament eingenommen werden?",
            audioText: "Nehmen Sie bitte morgens und abends jeweils eine Tablette mit ausreichend Wasser.",
            options: [
              "Zweimal täglich (morgens und abends)",
              "Einmal pro Woche",
              "Fünfmal täglich vor dem Schlafen",
              "Nur bei akutem Husten"
            ],
            correctAnswer: "Zweimal täglich (morgens und abends)",
            explanation: "Die Apothekerin instruiert: 'morgens und abends jeweils eine Tablette' (zweimal am Tag)."
          },
          {
            id: "de-u4-l2-q7",
            type: "fill_blank",
            sentence: "Für dieses Antibiotikum brauchen Sie ein ___ vom Arzt.",
            missingWord: "Rezept",
            options: ["Rezept", "Geldstück", "Foto", "Telefon"],
            correctAnswer: "Rezept",
            explanation: "Verschreibungspflichtige Arzneimittel wie Antibiotika gibt es nur mit ärztlichem Rezept."
          },
          {
            id: "de-u4-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Verben den passenden Vorsichtsmaßnahmen zu:",
            pairs: [
              { native: "gurgeln", english: "mit Kamillentee bei Halsschmerzen", left: "gurgeln", right: "mit Kamillentee bei Halsschmerzen" },
              { native: "einnehmen", english: "Tabletten mit einem Glas Wasser", left: "einnehmen", right: "Tabletten mit einem Glas Wasser" },
              { native: "inhalieren", english: "heißen Dampf bei verstopfter Nase", left: "inhalieren", right: "heißen Dampf bei verstopfter Nase" },
              { native: "auftragen", english: "Heilsalbe dünn auf die Haut", left: "auftragen", right: "Heilsalbe dünn auf die Haut" }
            ]
          }
        ]
      },
      {
        id: "de-u4-l3",
        title: "Lesson 4.3: Mein beruflicher Werdegang (Perfekt)",
        description: "Vergangene Ausbildungen und berufliche Stationen erzählen, Perfektbildung mit 'haben' vs. 'sein', unregelmäßige Partizipien.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u4-l3-q1",
            type: "multiple_choice",
            prompt: "Wann bildet man das Perfekt im Deutschen mit dem Hilfsverb 'sein' statt 'haben'?",
            options: [
              "Bei Verben der Ortsveränderung (gehen, fahren), Zustandsänderung (aufwachen, sterben) und bei 'sein' und 'bleiben'",
              "Bei allen reflexiven Verben",
              "Bei allen regelmäßigen Verben",
              "Immer wenn das Subjekt im Plural steht"
            ],
            correctAnswer: "Bei Verben der Ortsveränderung (gehen, fahren), Zustandsänderung (aufwachen, sterben) und bei 'sein' und 'bleiben'",
            explanation: "Verben der Bewegung/Ortsänderung (kommen, fliegen) oder Zustandsänderung bilden das Perfekt mit 'sein': 'Ich bin nach Berlin gefahren'."
          },
          {
            id: "de-u4-l3-q2",
            type: "fill_blank",
            sentence: "Ich habe fünf Jahre als Buchhalter in Madrid ___ (arbeiten).",
            missingWord: "gearbeitet",
            options: ["gearbeitet", "arbeiten", "gearbeiten", "arbeitete"],
            correctAnswer: "gearbeitet",
            explanation: "Das regelmäßige Partizip II von 'arbeiten' lautet: 'gearbeitet' (ge- + Stamm + -et)."
          },
          {
            id: "de-u4-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie den Infinitiv dem korrekten Partizip II zu:",
            pairs: [
              { native: "machen", english: "gemacht (hat gemacht)", left: "machen", right: "gemacht (hat gemacht)" },
              { native: "lernen", english: "gelernt (hat gelernt)", left: "lernen", right: "gelernt (hat gelernt)" },
              { native: "studieren", english: "studiert (hat studiert - Verben auf -ieren ohne ge-)", left: "studieren", right: "studiert (hat studiert - Verben auf -ieren ohne ge-)" },
              { native: "gehen", english: "gegangen (ist gegangen - unregelmäßig)", left: "gehen", right: "gegangen (ist gegangen - unregelmäßig)" }
            ]
          },
          {
            id: "de-u4-l3-q4",
            type: "scramble",
            prompt: "Bilden Sie den Satz im Perfekt über den beruflichen Werdegang:",
            tokens: ["Vor", "zwei", "Jahren", "bin", "ich", "nach", "Deutschland", "gekommen."],
            correctTokens: ["Vor", "zwei", "Jahren", "bin", "ich", "nach", "Deutschland", "gekommen."],
            explanation: "Perfekt mit sein: Hilfsverb 'bin' an Position 2, Partizip II 'gekommen' am Satzende."
          },
          {
            id: "de-u4-l3-q5",
            type: "multiple_choice",
            prompt: "Wie lautet das Präteritum von 'sein' für 'ich' und 'er'?",
            options: ["war", "hatte", "wäre", "bin"],
            correctAnswer: "war",
            explanation: "Die Präteritumform von 'sein' lautet: 'ich war', 'er war' (sehr häufig in Erzählungen verwendet)."
          },
          {
            id: "de-u4-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Bewerberin. Was hat sie im Heimatland gemacht?",
            audioText: "In meiner Heimat habe ich Wirtschaftswissenschaften studiert und danach in einer Bank gearbeitet.",
            options: [
              "Wirtschaftswissenschaften studiert und in einer Bank gearbeitet",
              "Als Ärztin im Krankenhaus praktiziert",
              "Eine Bäckerei eröffnet",
              "Deutsch an einer Schule unterrichtet"
            ],
            correctAnswer: "Wirtschaftswissenschaften studiert und in einer Bank gearbeitet",
            explanation: "Die Bewerberin berichtet: 'habe ich Wirtschaftswissenschaften studiert und danach in einer Bank gearbeitet'."
          },
          {
            id: "de-u4-l3-q7",
            type: "fill_blank",
            sentence: "Gestern ___ ich einen sehr erfolgreichen Arbeitstag (Präteritum von haben).",
            missingWord: "hatte",
            options: ["hatte", "habe", "war", "hätte"],
            correctAnswer: "hatte",
            explanation: "Präteritum von haben: 'ich hatte'."
          },
          {
            id: "de-u4-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie das Hilfsverb im Perfekt dem Partizip zu:",
            pairs: [
              { native: "ist...", english: "nach Hause gefahren (Bewegung -> sein)", left: "ist...", right: "nach Hause gefahren (Bewegung -> sein)" },
              { native: "hat...", english: "die E-Mail geschrieben (Aktion -> haben)", left: "hat...", right: "die E-Mail geschrieben (Aktion -> haben)" },
              { native: "ist...", english: "am Wochenende umgezogen (Ortswechsel -> sein)", left: "ist...", right: "am Wochenende umgezogen (Ortswechsel -> sein)" },
              { native: "hat...", english: "den Vertrag unterschrieben (Aktion -> haben)", left: "hat...", right: "den Vertrag unterschrieben (Aktion -> haben)" }
            ]
          }
        ]
      },
      {
        id: "de-u4-l4",
        title: "Lesson 4.4: Stellenausschreibungen",
        description: "Stellenangebote lesen, Anforderungsprofile (Vollzeit, Teilzeit, Minijob), Bewerbungsfristen und Voraussetzungen.",
        xp: 25,
        completed: false,
        questions: [
          {
            id: "de-u4-l4-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet die Angabe 'Vollzeit (40 Std./Woche)' in einem Stelleninserat?",
            options: [
              "Reguläre Beschäftigung mit vollem wöchentlichen Arbeitsumfang von 40 Stunden",
              "Arbeit nur am Wochenende für 4 Stunden",
              "Ein unbezahltes Schnupperpraktikum",
              "Ein Job nur in den Sommerferien"
            ],
            correctAnswer: "Reguläre Beschäftigung mit vollem wöchentlichen Arbeitsumfang von 40 Stunden",
            explanation: "'Vollzeit' bezeichnet ein volles Arbeitsverhältnis mit der üblichen tariflichen oder vertraglichen Wochenarbeitszeit (meist 38–40 Stunden)."
          },
          {
            id: "de-u4-l4-q2",
            type: "fill_blank",
            sentence: "Wir suchen ab sofort eine motivierte Fachkraft in ___ (20 Stunden pro Woche).",
            missingWord: "Teilzeit",
            options: ["Teilzeit", "Vollzeit", "Nachtschicht", "Rente"],
            correctAnswer: "Teilzeit",
            explanation: "20 Stunden wöchentlich ist eine klassische 'Teilzeit'-Anstellung (Gegenteil: Vollzeit)."
          },
          {
            id: "de-u4-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Abkürzungen und Begriffe aus Stellenanzeigen ihren Bedeutungen zu:",
            pairs: [
              { native: "m/w/d", english: "männlich / weiblich / divers (geschlechtsneutral)", left: "m/w/d", right: "männlich / weiblich / divers (geschlechtsneutral)" },
              { native: "ab sofort", english: "Beginn zum nächstmöglichen Zeitpunkt", left: "ab sofort", right: "Beginn zum nächstmöglichen Zeitpunkt" },
              { native: "unbefristet", english: "Arbeitsvertrag ohne festes Enddatum", left: "unbefristet", right: "Arbeitsvertrag ohne festes Enddatum" },
              { native: "Berufserfahrung", english: "Bereits geleistete Praxis in diesem Bereich", left: "Berufserfahrung", right: "Bereits geleistete Praxis in diesem Bereich" }
            ]
          },
          {
            id: "de-u4-l4-q4",
            type: "scramble",
            prompt: "Bauen Sie die Aufforderung zur Bewerbung zusammen:",
            tokens: ["Bitte", "senden", "Sie", "Ihre", "Bewerbungsunterlagen", "per", "E-Mail."],
            correctTokens: ["Bitte", "senden", "Sie", "Ihre", "Bewerbungsunterlagen", "per", "E-Mail."],
            explanation: "Standardformel in Inseraten: 'Bitte senden Sie Ihre Bewerbungsunterlagen per E-Mail'."
          },
          {
            id: "de-u4-l4-q5",
            type: "multiple_choice",
            prompt: "Was versteht man in Deutschland unter einem 'Minijob' (Geringfügige Beschäftigung)?",
            options: [
              "Eine Beschäftigung mit einer monatlichen Verdienstgrenze von bis zu 538 Euro (steuer- und sozialabgabenreduziert)",
              "Einen Job für Kinder unter 10 Jahren",
              "Ein Arbeitsverhältnis ohne Gehalt",
              "Eine Beschäftigung nur für Vorstandsmitglieder"
            ],
            correctAnswer: "Eine Beschäftigung mit einer monatlichen Verdienstgrenze von bis zu 538 Euro (steuer- und sozialabgabenreduziert)",
            explanation: "Ein Minijob ist eine geringfügige Beschäftigung mit gesetzlicher Monatsverdienstgrenze (derzeit 538 €)."
          },
          {
            id: "de-u4-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Stellenanforderung im Radio. Welche Sprachkenntnisse werden verlangt?",
            audioText: "Wir suchen Servicemitarbeiter. Voraussetzung sind gute Deutschkenntnisse auf B1-Niveau und Teamfähigkeit.",
            options: [
              "Gute Deutschkenntnisse auf B1-Niveau und Teamfähigkeit",
              "Verhandlungssicheres Chinesisch und Spanisch",
              "Keine Sprachkenntnisse erforderlich",
              "Nur Englischkenntnisse auf C2-Niveau"
            ],
            correctAnswer: "Gute Deutschkenntnisse auf B1-Niveau und Teamfähigkeit",
            explanation: "Der Sprecher verlangt: 'gute Deutschkenntnisse auf B1-Niveau und Teamfähigkeit'."
          },
          {
            id: "de-u4-l4-q7",
            type: "fill_blank",
            sentence: "Die Bewerbungs-___ endet am 31. Oktober um 24:00 Uhr.",
            missingWord: "frist",
            options: ["frist", "tür", "pause", "straße"],
            correctAnswer: "frist",
            explanation: "Die 'Bewerbungsfrist' ist der letztmögliche Abgabetermin für Bewerbungsunterlagen."
          },
          {
            id: "de-u4-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Jobanforderungen ihren Bedeutungen zu:",
            pairs: [
              { native: "Zuverlässigkeit", english: "Pünktlich und gewissenhaft arbeiten", left: "Zuverlässigkeit", right: "Pünktlich und gewissenhaft arbeiten" },
              { native: "Belastbarkeit", english: "Auch in stressigen Situationen ruhig bleiben", left: "Belastbarkeit", right: "Auch in stressigen Situationen ruhig bleiben" },
              { native: "Flexibilität", english: "Bereitschaft zu wechselnden Arbeitszeiten", left: "Flexibilität", right: "Bereitschaft zu wechselnden Arbeitszeiten" },
              { native: "Schichtbereitschaft", english: "Arbeiten im Früh-, Spät- oder Nachtdienst", left: "Schichtbereitschaft", right: "Arbeiten im Früh-, Spät- oder Nachtdienst" }
            ]
          }
        ]
      }
    ]
  }
];
