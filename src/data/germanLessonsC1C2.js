// =========================================================================
// Goethe-Zertifikat C1/C2 & TestDaF / DSH Aligned German Curriculum
// Phase 3: Kompetente Sprachverwendung (C1–C2)
// Units 9 and 10 • 4 Lessons per Unit = 8 Lessons Total
// =========================================================================

export const germanC1C2Units = [
  // =========================================================================
  // UNIT 9: Wissenschaftliches Arbeiten & Fachdiskurs (C1)
  // Standard: TestDaF, DSH, Goethe-Zertifikat C1 (Hochschulzugang KMK)
  // =========================================================================
  {
    id: "de-unit-9",
    unitId: "de-unit-9",
    unitNumber: 9,
    level: "Phase 3: C1 (Kompetente Sprachverwendung / Hochschulzugang)",
    title: "Unit 9: Wissenschaftliches Arbeiten & Fachdiskurs (C1)",
    subtitle: "Wissenschaftssprache — Nominalstil, Funktionsverbgefüge, Konjunktiv I (indirekte Rede), erweiterte Partizipialattribute, TestDaF/DSH.",
    icon: "BookOpen",
    color: "#6366f1",
    lessons: [
      {
        id: "de-u9-l1",
        title: "Lesson 9.1: Wissenschaftssprache & Nominalstil",
        description: "Verbalstil in dichten akademischen Nominalstil transformieren, Nomen-Verb-Verbindungen (Funktionsverbgefüge: in Betracht ziehen, zur Verfügung stehen).",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "de-u9-l1-q1",
            type: "multiple_choice",
            prompt: "Was charakterisiert den sogenannten 'Nominalstil' in wissenschaftlichen Fachtexten des Deutschen?",
            options: [
              "Verdichtung von Information durch Substantivierungen, Genitivattribute und Präpositionalphrasen anstelle von Nebensätzen",
              "Ausschließliche Verwendung von Umgangssprache",
              "Das Fehlen jeglicher Verben",
              "Nur sehr kurze Sätze mit maximal drei Wörtern"
            ],
            correctAnswer: "Verdichtung von Information durch Substantivierungen, Genitivattribute und Präpositionalphrasen anstelle von Nebensätzen",
            explanation: "Der Nominalstil ist das Kennzeichen akademischer deutscher Prosa: Statt 'Weil die Temperaturen steigen...' heißt es 'Infolge des Temperaturanstiegs...'."
          },
          {
            id: "de-u9-l1-q2",
            type: "fill_blank",
            sentence: "Wir müssen diese methodische Alternative unbedingt in Betracht ___ (Funktionsverbgefüge).",
            missingWord: "ziehen",
            options: ["ziehen", "stellen", "legen", "bringen"],
            correctAnswer: "ziehen",
            explanation: "Das Funktionsverbgefüge heißt: 'etwas in Betracht ziehen' (bedeutet: etwas erwägen / berücksichtigen)."
          },
          {
            id: "de-u9-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die Funktionsverbgefüge ihren einfachen Verben zu:",
            pairs: [
              { native: "zur Verfügung stehen", english: "verfügbar / nutzbar sein", left: "zur Verfügung stehen", right: "verfügbar / nutzbar sein" },
              { native: "eine Entscheidung treffen", english: "entscheiden", left: "eine Entscheidung treffen", right: "entscheiden" },
              { native: "Kritik üben an (+ Dat)", english: "kritisieren", left: "Kritik üben an (+ Dat)", right: "kritisieren" },
              { native: "in Frage kommen", english: "möglich / denkbar sein", left: "in Frage kommen", right: "möglich / denkbar sein" }
            ]
          },
          {
            id: "de-u9-l1-q4",
            type: "scramble",
            prompt: "Bauen Sie den Satz mit erweitertem Partizipialattribut zusammen:",
            tokens: ["Die", "von", "den", "Forschern", "präsentierten", "Ergebnisse", "widerlegen", "die", "bisherige", "Hypothese."],
            correctTokens: ["Die", "von", "den", "Forschern", "präsentierten", "Ergebnisse", "widerlegen", "die", "bisherige", "Hypothese."],
            explanation: "Erweitertes Partizipialattribut: 'Die [von den Forschern präsentierten] Ergebnisse' (hochgradig typisch für akademische Register)."
          },
          {
            id: "de-u9-l1-q5",
            type: "multiple_choice",
            prompt: "Wie transformiert man den verbalen Satz 'Weil die Wirtschaft unerwartet schrumpfte...' in den Nominalstil?",
            options: [
              "Infolge des unerwarteten Schrumpfens der Wirtschaft...",
              "Weil Wirtschaft schrumpft...",
              "Die Wirtschaft war geschrumpft und fertig...",
              "Das Schrumpfen schrumpft wirtschaftlich..."
            ],
            correctAnswer: "Infolge des unerwarteten Schrumpfens der Wirtschaft...",
            explanation: "Subordinierender Kausalsatz ('Weil...') wird zu Präpositionalphrasen mit Genitiv: 'Infolge des Schrumpfens...'."
          },
          {
            id: "de-u9-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Auszug aus der Universitätsvorlesung. Was wird zur Forschungsförderung mitgeteilt?",
            audioText: "Die Universität stellt den Nachwuchswissenschaftlern zusätzliche Drittmittel für interdisziplinäre Forschungsprojekte zur Verfügung.",
            options: [
              "Zusätzliche Drittmittel für interdisziplinäre Forschung werden zur Verfügung gestellt",
              "Alle Fördermittel wurden gestrichen",
              "Die Universität schließt die naturwissenschaftliche Fakultät",
              "Studenten müssen für Vorlesungen Eintritt bezahlen"
            ],
            correctAnswer: "Zusätzliche Drittmittel für interdisziplinäre Forschung werden zur Verfügung gestellt",
            explanation: "Der Dozent formuliert: 'stellt... zusätzliche Drittmittel... zur Verfügung'."
          },
          {
            id: "de-u9-l1-q7",
            type: "fill_blank",
            sentence: "Die neuen empirischen Befunde bringen die tradierte Lehrmeinung ins ___.",
            missingWord: "Wanken",
            options: ["Wanken", "Stehen", "Laufen", "Fallen"],
            correctAnswer: "Wanken",
            explanation: "Akademische Redewendung: 'etwas ins Wanken bringen' (die Gültigkeit einer Theorie erschüttern)."
          },
          {
            id: "de-u9-l1-q8",
            type: "matching",
            prompt: "Transformieren Sie Verben in akademische Substantive mit Genitivanschluss:",
            pairs: [
              { native: "die Daten analysieren", english: "die Analyse der Daten", left: "die Daten analysieren", right: "die Analyse der Daten" },
              { native: "die Theorie überprüfen", english: "die Überprüfung der Theorie", left: "die Theorie überprüfen", right: "die Überprüfung der Theorie" },
              { native: "die Parameter modifizieren", english: "die Modifikation der Parameter", left: "die Parameter modifizieren", right: "die Modifikation der Parameter" },
              { native: "die Phänomene beschreiben", english: "die Beschreibung der Phänomene", left: "die Phänomene beschreiben", right: "die Beschreibung der Phänomene" }
            ]
          }
        ]
      },
      {
        id: "de-u9-l2",
        title: "Lesson 9.2: Wissenschaftliche Arbeiten zitieren (Konjunktiv I)",
        description: "Indirekte Rede im Konjunktiv I zur neutralen Wiedergabe von Theorien und Thesen anderer Autoren, Quellenangaben nach APA/Harvard.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "de-u9-l2-q1",
            type: "multiple_choice",
            prompt: "Welche Funktion erfüllt der 'Konjunktiv I' in der wissenschaftlichen Literatur?",
            options: [
              "Er signalisiert distanzierte, sachlich neutrale Wiedergabe fremder Aussagen in der indirekten Rede",
              "Er drückt persönliche Wut aus",
              "Er zeigt, dass die Aussage gelogen ist",
              "Er wird nur in Märchen verwendet"
            ],
            correctAnswer: "Er signalisiert distanzierte, sachlich neutrale Wiedergabe fremder Aussagen in der indirekten Rede",
            explanation: "Im wissenschaftlichen Diskurs dient der Konjunktiv I der exakten Trennung zwischen eigenen Thesen und referierter Literatur."
          },
          {
            id: "de-u9-l2-q2",
            type: "fill_blank",
            sentence: "Der Autor postuliert, die globale Erwärmung ___ irreversible Folgen für die Biodiversität (Konjunktiv I von haben).",
            missingWord: "habe",
            options: ["habe", "hat", "hätte", "gehabt"],
            correctAnswer: "habe",
            explanation: "Die 3. Person Singular im Konjunktiv I lautet 'er/sie/es habe' (Stamm + -e)."
          },
          {
            id: "de-u9-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie den Indikativ der 3. Person der Konjunktiv-I-Form zu:",
            pairs: [
              { native: "er ist (Indikativ)", english: "er sei (Konjunktiv I)", left: "er ist (Indikativ)", right: "er sei (Konjunktiv I)" },
              { native: "er hat (Indikativ)", english: "er habe (Konjunktiv I)", left: "er hat (Indikativ)", right: "er habe (Konjunktiv I)" },
              { native: "er weiß (Indikativ)", english: "er wisse (Konjunktiv I)", left: "er weiß (Indikativ)", right: "er wisse (Konjunktiv I)" },
              { native: "sie können (Plural Indikativ)", english: "sie könnten (Ersatzform Konjunktiv II, da Konjunktiv I = Indikativ)", left: "sie können (Plural Indikativ)", right: "sie könnten (Ersatzform Konjunktiv II, da Konjunktiv I = Indikativ)" }
            ]
          },
          {
            id: "de-u9-l2-q4",
            type: "scramble",
            prompt: "Bauen Sie das indirekte Zitat zusammen:",
            tokens: ["Laut", "Müller", "sei", "der", "gefundene", "Effekt", "statistisch", "hochgradig", "signifikant."],
            correctTokens: ["Laut", "Müller", "sei", "der", "gefundene", "Effekt", "statistisch", "hochgradig", "signifikant."],
            explanation: "Quellenverweis 'Laut Müller...' mit Konjunktiv I ('sei... signifikant')."
          },
          {
            id: "de-u9-l2-q5",
            type: "multiple_choice",
            prompt: "Wann weicht man in der indirekten Rede vom Konjunktiv I auf den Konjunktiv II (oder die 'würde'-Form) aus?",
            options: [
              "Wenn die Form des Konjunktiv I mit dem Indikativ identisch ist (z. B. 'sie haben' -> 'sie hätten')",
              "Wenn der zitierten Person misstraut wird",
              "Ausnahmslos immer im Plural",
              "Wenn der Text auf Papier gedruckt wird"
            ],
            correctAnswer: "Wenn die Form des Konjunktiv I mit dem Indikativ identisch ist (z. B. 'sie haben' -> 'sie hätten')",
            explanation: "Bei Formengleichheit zwischen Konjunktiv I und Indikativ (v. a. 1. Pers. Sg. und 3. Pers. Pl.) greift man zur eindeutigen Unterscheidung auf den Konjunktiv II zurück."
          },
          {
            id: "de-u9-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie das Kolloquiumsreferat. Wie referiert die Referentin die Ansicht von Professor Weber?",
            audioText: "Weber vertritt die Auffassung, dass die bisherigen Rechenmodelle die soziokulturellen Variablen unzureichend abbildeten.",
            options: [
              "Dass bisherige Modelle soziokulturelle Variablen unzureichend abbilden",
              "Dass Weber die Modelle für perfekt und fehlerfrei hält",
              "Dass alle bisherigen Berechnungen gelöscht wurden",
              "Dass Weber seine Professur niedergelegt hat"
            ],
            correctAnswer: "Dass bisherige Modelle soziokulturelle Variablen unzureichend abbilden",
            explanation: "Die Referentin zitiert Weber mit Konjunktiv: 'die bisherigen Rechenmodelle... unzureichend abbildeten'."
          },
          {
            id: "de-u9-l2-q7",
            type: "fill_blank",
            sentence: "Schmidt hebt hervor, dass die Implementierung neuer Algorithmen unverzichtbar ___ (sein, Konjunktiv I).",
            missingWord: "sei",
            options: ["sei", "wäre", "ist", "gewesen"],
            correctAnswer: "sei",
            explanation: "Konjunktiv I von sein (3. Person Sg.): '...unverzichtbar sei'."
          },
          {
            id: "de-u9-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Zitationsverben ihren Konnotationen zu:",
            pairs: [
              { native: "konstatieren", english: "Nüchtern und objektiv feststellen", left: "konstatieren", right: "Nüchtern und objektiv feststellen" },
              { native: "plädieren für (+ Akk)", english: "Sich nachdrücklich für eine These einsetzen", left: "plädieren für (+ Akk)", right: "Sich nachdrücklich für eine These einsetzen" },
              { native: "in Abrede stellen", english: "Die Existenz oder Richtigkeit einer Behauptung bestreiten", left: "in Abrede stellen", right: "Die Existenz oder Richtigkeit einer Behauptung bestreiten" },
              { native: "mutmaßen", english: "Vorsichtig vermuten ohne endgültigen Beweis", left: "mutmaßen", right: "Vorsichtig vermuten ohne endgültigen Beweis" }
            ]
          }
        ]
      },
      {
        id: "de-u9-l3",
        title: "Lesson 9.3: Stellungnahme & Erörterung",
        description: "Dialektische Erörterung auf C1-Niveau, Synthese kontroverser wissenschaftlicher Positionen, argumentative Kohäsion.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "de-u9-l3-q1",
            type: "multiple_choice",
            prompt: "Wie ist eine 'dialektische Erörterung' auf C1/TestDaF-Niveau idealtypisch aufgebaut?",
            options: [
              "Einleitung mit Problemaufriss -> Gegenthese mit Argumenten -> Eigene Hauptthese mit stärksten Gegenargumenten -> Synthese / fundiertes Fazit",
              "Ausschließlich die eigene Meinung ohne Gegenargumente aufschreiben",
              "Ein kurzes Brainstorming ohne logische Gliederung",
              "Eine bloße Aufzählung von Anekdoten aus dem Bekanntenkreis"
            ],
            correctAnswer: "Einleitung mit Problemaufriss -> Gegenthese mit Argumenten -> Eigene Hauptthese mit stärksten Gegenargumenten -> Synthese / fundiertes Fazit",
            explanation: "Die dialektische Erörterung verlangt die souveräne Abwägung von Pro und Contra mit überzeugender Synthesebildung."
          },
          {
            id: "de-u9-l3-q2",
            type: "fill_blank",
            sentence: "Angesichts der gravierenden Befunde drängt sich die Frage ___, ob die bisherigen Grenzwerte noch haltbar sind.",
            missingWord: "auf",
            options: ["auf", "ab", "aus", "unter"],
            correctAnswer: "auf",
            explanation: "Gehobene argumentative Wendung: 'eine Frage drängt sich auf' (drängt sich in den Vordergrund)."
          },
          {
            id: "de-u9-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die Konnektoren für argumentative Übergänge zu:",
            pairs: [
              { native: "Demgegenüber ist einzuwenden, dass...", english: "Einen Gegenbeweis anführen", left: "Demgegenüber ist einzuwenden, dass...", right: "Einen Gegenbeweis anführen" },
              { native: "Dies manifestiert sich insbesondere darin, dass...", english: "Konkrete Evidenz veranschaulichen", left: "Dies manifestiert sich insbesondere darin, dass...", right: "Konkrete Evidenz veranschaulichen" },
              { native: "Ein nicht zu unterschätzender Aspekt liegt in...", english: "Einen weiteren wesentlichen Faktor beleuchten", left: "Ein nicht zu unterschätzender Aspekt liegt in...", right: "Einen weiteren wesentlichen Faktor beleuchten" },
              { native: "Wägt man die Argumente gegeneinander ab...", english: "Überleitung zur Synthese", left: "Wägt man die Argumente gegeneinander ab...", right: "Überleitung zur Synthese" }
            ]
          },
          {
            id: "de-u9-l3-q4",
            type: "scramble",
            prompt: "Bringen Sie die akademische These in die korrekte grammatische Reihenfolge:",
            tokens: ["Aus", "epistemologischer", "Sicht", "lässt", "sich", "diese", "Schlussfolgerung", "kaum", "aufrechterhalten."],
            correctTokens: ["Aus", "epistemologischer", "Sicht", "lässt", "sich", "diese", "Schlussfolgerung", "kaum", "aufrechterhalten."],
            explanation: "Passiv-Ersatzform 'lässt sich + Infinitiv' ('lässt sich kaum aufrechterhalten' = kann kaum aufrechterhalten werden)."
          },
          {
            id: "de-u9-l3-q5",
            type: "multiple_choice",
            prompt: "Was bedeutet die Passiversatzform 'sich lassen + Infinitiv' (z. B. 'Das Problem lässt sich lösen')?",
            options: [
              "Es kann gelöst werden (Möglichkeitspassiv)",
              "Man darf es nicht lösen",
              "Es muss von selbst verschwinden",
              "Niemand will es lösen"
            ],
            correctAnswer: "Es kann gelöst werden (Möglichkeitspassiv)",
            explanation: "'Sich lassen + Infinitiv' ersetzt 'können + Passiv' und verleiht dem C1-Text stilistische Eleganz."
          },
          {
            id: "de-u9-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Argumentation im wissenschaftlichen Radio-Feature. Welches Fazit zieht der Philosoph?",
            audioText: "Zusammenfassend lässt sich konstatieren, dass technologischer Fortschritt ohne ethische Reflexion in blinden Aktionismus umschlägt.",
            options: [
              "Technologischer Fortschritt ohne Ethik schlägt in blinden Aktionismus um",
              "Technik löst automatisch alle ethischen Fragen der Menschheit",
              "Forschung sollte komplett verboten werden",
              "Ethik hat in den Naturwissenschaften keinen Platz"
            ],
            correctAnswer: "Technologischer Fortschritt ohne Ethik schlägt in blinden Aktionismus um",
            explanation: "Der Philosoph bilanziert: 'technologischer Fortschritt ohne ethische Reflexion in blinden Aktionismus umschlägt'."
          },
          {
            id: "de-u9-l3-q7",
            type: "fill_blank",
            sentence: "Diese Argumentation hält einer kritischen Überprüfung nicht ___.",
            missingWord: "stand",
            options: ["stand", "fest", "ab", "auf"],
            correctAnswer: "stand",
            explanation: "Feste Wendung: 'einer Prüfung standhalten' (den Test bestehen)."
          },
          {
            id: "de-u9-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die rhetorischen Mittel der Argumentation zu:",
            pairs: [
              { native: "das Scheinargument (Fallaz)", english: "Vordergründig plausibel, logisch jedoch unhaltbar", left: "das Scheinargument (Fallaz)", right: "Vordergründig plausibel, logisch jedoch unhaltbar" },
              { native: "die Antithese", english: "Betonte Gegenüberstellung gegensätzlicher Begriffe", left: "die Antithese", right: "Betonte Gegenüberstellung gegensätzlicher Begriffe" },
              { native: "die Prämisse", english: "Grundannahme, auf der die logische Schlussfolgerung fußt", left: "die Prämisse", right: "Grundannahme, auf der die logische Schlussfolgerung fußt" },
              { native: "die Konklusion", english: "Logisch zwingende Folgerung aus den Prämissen", left: "die Konklusion", right: "Logisch zwingende Folgerung aus den Prämissen" }
            ]
          }
        ]
      },
      {
        id: "de-u9-l4",
        title: "Lesson 9.4: Vorträge & Fachpräsentationen",
        description: "Akademische Vorträge strukturieren, Thesen vor Fachpublikum verteidigen, Diskussionsleitung im Seminar.",
        xp: 30,
        completed: false,
        questions: [
          {
            id: "de-u9-l4-q1",
            type: "multiple_choice",
            prompt: "Wie leitet man einen wissenschaftlichen Fachvortrag vor Kollegen souverän ein?",
            options: [
              "Sehr geehrte Kolleginnen und Kollegen, im Rahmen meines heutigen Vortrags widme ich mich der Fragestellung...",
              "Hallo Leute, hört mir mal fünf Minuten zu!",
              "Ich weiß gar nicht, worüber ich heute reden soll...",
              "Ich lese jetzt einfach die Folien vor."
            ],
            correctAnswer: "Sehr geehrte Kolleginnen und Kollegen, im Rahmen meines heutigen Vortrags widme ich mich der Fragestellung...",
            explanation: "Präzise Nennung der Forschungsfrage und professionelle Anrede setzen den Tonus für die akademische Präsentation."
          },
          {
            id: "de-u9-l4-q2",
            type: "fill_blank",
            sentence: "Lassen Sie mich nun zum zweiten Kernpunkt meiner Ausführungen ___.",
            missingWord: "übergehen",
            options: ["übergehen", "abfliegen", "wegrennen", "aufhören"],
            correctAnswer: "übergehen",
            explanation: "Etablierte Übergangsformel im Vortrag: 'Lassen Sie mich nun zu ... übergehen'."
          },
          {
            id: "de-u9-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die Moderationsformeln ihren Funktionen zu:",
            pairs: [
              { native: "Ich danke Ihnen für diese aufschlussreiche Frage.", english: "Wertschätzende Reaktion auf Zuhörerfrage", left: "Ich danke Ihnen für diese aufschlussreiche Frage.", right: "Wertschätzende Reaktion auf Zuhörerfrage" },
              { native: "Hierzu möchte ich folgende Einschränkung machen:", english: "Präzisierung / Nuancierung der These", left: "Hierzu möchte ich folgende Einschränkung machen:", right: "Präzisierung / Nuancierung der These" },
              { native: "Gestatten Sie mir, diesen Einwand zu entkräften:", english: "Souveränes Widerlegen von Kritik", left: "Gestatten Sie mir, diesen Einwand zu entkräften:", right: "Souveränes Widerlegen von Kritik" },
              { native: "Damit bin ich am Ende meiner Darlegungen angelangt.", english: "Vortragsabschluss einleiten", left: "Damit bin ich am Ende meiner Darlegungen angelangt.", right: "Vortragsabschluss einleiten" }
            ]
          },
          {
            id: "de-u9-l4-q4",
            type: "scramble",
            prompt: "Bauen Sie den Vortragssatz zur Hypothesenüberprüfung zusammen:",
            tokens: ["Die", "von", "uns", "durchgeführte", "Versuchsreihe", "bestätigt", "die", "ursprüngliche", "Arbeitshypothese."],
            correctTokens: ["Die", "von", "uns", "durchgeführte", "Versuchsreihe", "bestätigt", "die", "ursprüngliche", "Arbeitshypothese."],
            explanation: "Wissenschaftlicher Ergebnissatz mit partizipialem Attribut ('Die von uns durchgeführte Versuchsreihe')."
          },
          {
            id: "de-u9-l4-q5",
            type: "multiple_choice",
            prompt: "Was versteht man unter 'Diskursmarkern' in einer Fachpräsentation?",
            options: [
              "Strukturierende Wörter und Phrasen, die Zuhörern die argumentative Architektur und Logik des Vortrags verdeutlichen",
              "Bunte Textmarker zum Anstreichen von Büchern",
              "Fehler in der PowerPoint-Präsentation",
              "Mikrofone im Hörsaal"
            ],
            correctAnswer: "Strukturierende Wörter und Phrasen, die Zuhörern die argumentative Architektur und Logik des Vortrags verdeutlichen",
            explanation: "Diskursmarker (z. B. 'erstens', 'nichtsdestoweniger', 'zusammenfassend') lenken die Aufmerksamkeit des Publikums."
          },
          {
            id: "de-u9-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Tagungsleiter. Welche Fragerunde eröffnet er?",
            audioText: "Ich bedanke mich für diesen brillanten Vortrag und eröffne hiermit die Diskussion für das Plenum.",
            options: [
              "Er eröffnet die Diskussion für das gesamte Auditorium (Plenum)",
              "Er schließt die Konferenz sofort ohne Fragen",
              "Er fordert den Redner auf, von vorne zu beginnen",
              "Er verlegt die Sitzung in den nächsten Monat"
            ],
            correctAnswer: "Er eröffnet die Diskussion für das gesamte Auditorium (Plenum)",
            explanation: "Der Tagungsleiter bedankt sich und sagt: 'eröffne hiermit die Diskussion für das Plenum'."
          },
          {
            id: "de-u9-l4-q7",
            type: "fill_blank",
            sentence: "Ich stehe Ihnen nun gerne für Fragen und Anmerkungen zur ___.",
            missingWord: "Verfügung",
            options: ["Verfügung", "Aussicht", "Hand", "Seite"],
            correctAnswer: "Verfügung",
            explanation: "Höfliche Schlussformel: 'Ich stehe Ihnen gerne zur Verfügung'."
          },
          {
            id: "de-u9-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie die Fachbegriffe der Wissenschaftskommunikation zu:",
            pairs: [
              { native: "das Kolloquium", english: "Wissenschaftliches Fachgespräch im universitären Rahmen", left: "das Kolloquium", right: "Wissenschaftliches Fachgespräch im universitären Rahmen" },
              { native: "die Disputation", english: "Öffentliche mündliche Verteidigung einer Doktorarbeit", left: "die Disputation", right: "Öffentliche mündliche Verteidigung einer Doktorarbeit" },
              { native: "das Abstract", english: "Prägnante Kurzzusammenfassung einer Forschungsarbeit", left: "das Abstract", right: "Prägnante Kurzzusammenfassung einer Forschungsarbeit" },
              { native: "das Peer-Review", english: "Begutachtung von Artikeln durch unabhängige Fachgutachter", left: "das Peer-Review", right: "Begutachtung von Artikeln durch unabhängige Fachgutachter" }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // UNIT 10: Höchste sprachliche Perfektion & Stilebenen (C2)
  // Standard: Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom (GDS)
  // =========================================================================
  {
    id: "de-unit-10",
    unitId: "de-unit-10",
    unitNumber: 10,
    level: "Phase 3: C2 (Höchste sprachliche Perfektion & Stilebenen)",
    title: "Unit 10: Höchste sprachliche Perfektion & Stilebenen (C2)",
    subtitle: "Meisterhafte Beherrschung — Verwaltungs- & Rechtssprache, Rhetorik, Literaturanalyse, Registerwechsel und Idiomatik.",
    icon: "Sparkles",
    color: "#4f46e5",
    lessons: [
      {
        id: "de-u10-l1",
        title: "Lesson 10.1: Verwaltungs- und Rechtssprache",
        description: "Juristische Fachtexte analysieren (BGB, Grundgesetz, Urteile), Passiversatzformen (sein + zu + Infinitiv), Subsumtionstechnik.",
        xp: 35,
        completed: false,
        questions: [
          {
            id: "de-u10-l1-q1",
            type: "multiple_choice",
            prompt: "Was drückt die grammatische Konstruktion 'sein + zu + Infinitiv' in juristischen Normtexten aus (z. B. 'Die Frist ist einzuhalten')?",
            options: [
              "Eine zwingende Notwendigkeit / Pflicht (muss eingehalten werden)",
              "Eine freiwillige Empfehlung",
              "Eine vergangene Handlung",
              "Einen Wunsch des Verfassers"
            ],
            correctAnswer: "Eine zwingende Notwendigkeit / Pflicht (muss eingehalten werden)",
            explanation: "'Sein + zu + Infinitiv' drückt im juristischen und behördlichen Sprachgebrauch eine strikte normative Verpflichtung ('muss/soll') aus."
          },
          {
            id: "de-u10-l1-q2",
            type: "fill_blank",
            sentence: "Gemäß § 823 BGB ist der Verursacher zum ___ des entstandenen Schadens verpflichtet.",
            missingWord: "Ersatz",
            options: ["Ersatz", "Verkauf", "Kauf", "Gewinn"],
            correctAnswer: "Ersatz",
            explanation: "Die zentrale zivilrechtliche Generalklausel normiert die Pflicht zum 'Schadensersatz'."
          },
          {
            id: "de-u10-l1-q3",
            type: "matching",
            prompt: "Ordnen Sie die Rechtsbegriffe ihren Definitionen zu:",
            pairs: [
              { native: "die Rechtsbehelfsbelehrung", english: "Belehrung über Frist und Form eines Rechtsmittels (Widerspruch/Klage)", left: "die Rechtsbehelfsbelehrung", right: "Belehrung über Frist und Form eines Rechtsmittels (Widerspruch/Klage)" },
              { native: "die Nichtigkeit", english: "Vollständige rechtliche Unwirksamkeit eines Rechtsgeschäfts von Anfang an", left: "die Nichtigkeit", right: "Vollständige rechtliche Unwirksamkeit eines Rechtsgeschäfts von Anfang an" },
              { native: "die Verjährung", english: "Verlust der gerichtlichen Durchsetzbarkeit eines Anspruchs durch Zeitablauf", left: "die Verjährung", right: "Verlust der gerichtlichen Durchsetzbarkeit eines Anspruchs durch Zeitablauf" },
              { native: "die Subsumtion", english: "Das Unterordnen eines konkreten Lebenssachverhalts unter eine Gesetzesnorm", left: "die Subsumtion", right: "Das Unterordnen eines konkreten Lebenssachverhalts unter eine Gesetzesnorm" }
            ]
          },
          {
            id: "de-u10-l1-q4",
            type: "scramble",
            prompt: "Bauen Sie den verfassungsrechtlichen Leitsatz zusammen:",
            tokens: ["Die", "Würde", "des", "Menschen", "ist", "unantastbar", "sie", "zu", "achten", "und", "zu", "schützen", "ist", "Verpflichtung", "aller", "staatlichen", "Gewalt."],
            correctTokens: ["Die", "Würde", "des", "Menschen", "ist", "unantastbar", "sie", "zu", "achten", "und", "zu", "schützen", "ist", "Verpflichtung", "aller", "staatlichen", "Gewalt."],
            explanation: "Artikel 1 Absatz 1 Satz 1 und 2 des Grundgesetzes für die Bundesrepublik Deutschland."
          },
          {
            id: "de-u10-l1-q5",
            type: "multiple_choice",
            prompt: "Was versteht man unter dem Begriff 'Verhältnismäßigkeitsprinzip' im deutschen Verfassungs- und Verwaltungsrecht?",
            options: [
              "Jede staatliche Maßnahme muss einen legitimen Zweck verfolgen und dazu geeignet, erforderlich sowie angemessen sein",
              "Alle Bürger müssen genau das gleiche Einkommen erhalten",
              "Gesetze gelten nur für die Hälfte der Bevölkerung",
              "Steuern müssen jedes Jahr verdoppelt werden"
            ],
            correctAnswer: "Jede staatliche Maßnahme muss einen legitimen Zweck verfolgen und dazu geeignet, erforderlich sowie angemessen sein",
            explanation: "Der Grundsatz der Verhältnismäßigkeit (Übermaßverbot) ist das elementare Schutzschild des Bürgers gegen ungebührliche staatliche Eingriffe."
          },
          {
            id: "de-u10-l1-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Urteilsverkündung des Bundesverfassungsgerichts. Welche Entscheidung wird verkündet?",
            audioText: "Die angegriffene Norm ist mit dem allgemeinen Gleichheitssatz des Artikels drei Absatz eins Grundgesetz unvereinbar und daher nichtig.",
            options: [
              "Die Norm ist verfassungswidrig (unvereinbar mit Art. 3 Abs. 1 GG) und nichtig",
              "Das Gesetz wird vollumfänglich bestätigt",
              "Das Verfahren wird an das Amtsgericht verwiesen",
              "Die Verfassungsbeschwerde war unzulässig"
            ],
            correctAnswer: "Die Norm ist verfassungswidrig (unvereinbar mit Art. 3 Abs. 1 GG) und nichtig",
            explanation: "Der Gerichtspräsident urteilt: 'mit dem allgemeinen Gleichheitssatz... unvereinbar und daher nichtig'."
          },
          {
            id: "de-u10-l1-q7",
            type: "fill_blank",
            sentence: "Der Vertrag verstößt gegen die guten Sitten und ist daher nach § 138 BGB von Anfang an ___.",
            missingWord: "nichtig",
            options: ["nichtig", "gültig", "bezahlt", "verlängert"],
            correctAnswer: "nichtig",
            explanation: "Ein sittenwidriges Rechtsgeschäft ist nach dem Bürgerlichen Gesetzbuch 'nichtig' (unwirksam)."
          },
          {
            id: "de-u10-l1-q8",
            type: "matching",
            prompt: "Ordnen Sie die juristischen Fachverben zu:",
            pairs: [
              { native: "anfechten", english: "Eine Willenserklärung wegen Irrtums oder Täuschung rückwirkend vernichten", left: "anfechten", right: "Eine Willenserklärung wegen Irrtums oder Täuschung rückwirkend vernichten" },
              { native: "rügen", english: "Einen Verfahrensfehler oder Sachmangel förmlich geltend machen", left: "rügen", right: "Einen Verfahrensfehler oder Sachmangel förmlich geltend machen" },
              { native: "vollstrecken", english: "Einen gerichtlichen Titel zwangsweise durchsetzen", left: "vollstrecken", right: "Einen gerichtlichen Titel zwangsweise durchsetzen" },
              { native: "aberkennen", english: "Ein Recht oder einen Titel gerichtlich entziehen", left: "aberkennen", right: "Ein Recht oder einen Titel gerichtlich entziehen" }
            ]
          }
        ]
      },
      {
        id: "de-u10-l2",
        title: "Lesson 10.2: Rhetorik & Debattenkultur",
        description: "Nuancierte politische Reden dekonstruieren, rhetorische Stilfiguren (Chiasmus, Antithese, Klimax, Ironie), Streitkultur im Bundestag.",
        xp: 35,
        completed: false,
        questions: [
          {
            id: "de-u10-l2-q1",
            type: "multiple_choice",
            prompt: "Welche rhetorische Figur liegt vor in: 'Ich schlafe am Tag, in der Nacht wache ich' (spiegelbildliche Überkreuzstellung von Satzgliedern)?",
            options: ["Chiasmus", "Alliteration", "Litotes", "Metapher"],
            correctAnswer: "Chiasmus",
            explanation: "Der Chiasmus (benannt nach dem griechischen Buchstaben Chi / X) bezeichnet die synchrone Überkreuzung von Wortstellungen."
          },
          {
            id: "de-u10-l2-q2",
            type: "fill_blank",
            sentence: "Die Formulierung 'Er ist nicht gerade unklug' ist eine klassische ___ (doppelte Verneinung zur Hervorhebung).",
            missingWord: "Litotes",
            options: ["Litotes", "Ellipse", "Hyperbel", "Anapher"],
            correctAnswer: "Litotes",
            explanation: "Die 'Litotes' betont eine Eigenschaft durch die Verneinung des Gegenteils ('nicht unklug' = sehr klug)."
          },
          {
            id: "de-u10-l2-q3",
            type: "matching",
            prompt: "Ordnen Sie die rhetorischen Stilfiguren ihren Definitionen zu:",
            pairs: [
              { native: "Klimax", english: "Stufenartige Steigerung ('Ich kam, sah und siegte')", left: "Klimax", right: "Stufenartige Steigerung ('Ich kam, sah und siegte')" },
              { native: "Oxymoron", english: "Verbindung zweier scheinbar widersprüchlicher Begriffe ('bittersüß')", left: "Oxymoron", right: "Verbindung zweier scheinbar widersprüchlicher Begriffe ('bittersüß')" },
              { native: "Euphemismus", english: "Beschönigende Umschreibung eines negativen Sachverhalts", left: "Euphemismus", right: "Euphemismus" },
              { native: "Hyperbel", english: "Stilistische Übertreibung ('ein Meer von Tränen')", left: "Hyperbel", right: "Stilistische Übertreibung ('ein Meer von Tränen')" }
            ]
          },
          {
            id: "de-u10-l3-q4",
            type: "scramble",
            prompt: "Bauen Sie den rhetorisch geschliffenen Bundestagsbeitrag zusammen:",
            tokens: ["Wer", "die", "Freiheit", "opfert,", "um", "Sicherheit", "zu", "gewinnen,", "wird", "am", "Ende", "beides", "verlieren."],
            correctTokens: ["Wer", "die", "Freiheit", "opfert,", "um", "Sicherheit", "zu", "gewinnen,", "wird", "am", "Ende", "beides", "verlieren."],
            explanation: "Berühmte staatsphilosophische Maxime zur Abwägung von Bürgerrechten und staatlicher Sicherheit."
          },
          {
            id: "de-u10-l2-q5",
            type: "multiple_choice",
            prompt: "Was versteht man unter 'subtiler Ironie' in einer politischen Debatte?",
            options: [
              "Eine verfeinerte Form des Spotts, bei der das wörtlich Gesagte im Widerspruch zum tatsächlich Gemeinten steht, aber durch Tonfall oder Kontext erkennbar ist",
              "Eine körperliche Beleidigung",
              "Einen Rechenfehler in den Finanzdaten",
              "Eine schriftliche Entschuldigung"
            ],
            correctAnswer: "Eine verfeinerte Form des Spotts, bei der das wörtlich Gesagte im Widerspruch zum tatsächlich Gemeinten steht, aber durch Tonfall oder Kontext erkennbar ist",
            explanation: "Ironie verlangt vom Hörer höchste linguistische und pragmatische Dekodierungskompetenz auf C2-Niveau."
          },
          {
            id: "de-u10-l2-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Parlamentsredner. Welches rhetorische Mittel dominiert seinen Appell?",
            audioText: "Wir wollen den Wandel gestalten. Wir wollen die Zukunft sichern. Wir wollen den Zusammenhalt stärken.",
            options: [
              "Eine Anapher (Wiederholung desselben Satzanfangs: 'Wir wollen...')",
              "Ein Flüstern ohne Intonation",
              "Ein Fremdwort in lateinischer Sprache",
              "Ein mathematischer Beweis"
            ],
            correctAnswer: "Eine Anapher (Wiederholung desselben Satzanfangs: 'Wir wollen...')",
            explanation: "Die dreifache Wiederholung von 'Wir wollen...' am Satzbeginn ist eine wirkungsvolle 'Anapher'."
          },
          {
            id: "de-u10-l2-q7",
            type: "fill_blank",
            sentence: "Eine scheinbare Frage, auf die keine reale Antwort erwartet wird, nennt man eine ___ Frage.",
            missingWord: "rhetorische",
            options: ["rhetorische", "törichte", "heimliche", "geheime"],
            correctAnswer: "rhetorische",
            explanation: "Die 'rhetorische Frage' dient als stilistisches Verstärkungsmittel zur stillen Zustimmung des Publikums."
          },
          {
            id: "de-u10-l2-q8",
            type: "matching",
            prompt: "Ordnen Sie die Formen der Redekunst zu:",
            pairs: [
              { native: "die Laudatio", english: "Festrede zur Würdigung einer herausragenden Persönlichkeit", left: "die Laudatio", right: "Festrede zur Würdigung einer herausragenden Persönlichkeit" },
              { native: "die Philippika", english: "Leidenschaftliche, strafende Angriffsrede gegen Missstände", left: "die Philippika", right: "Leidenschaftliche, strafende Angriffsrede gegen Missstände" },
              { native: "das Plädoyer", english: "Schlussvortrag vor Gericht oder nachdrückliche Fürsprache", left: "das Plädoyer", right: "Schlussvortrag vor Gericht oder nachdrückliche Fürsprache" },
              { native: "das Bonmot", english: "Treffende, geistreiche und pointierte Bemerkung", left: "das Bonmot", right: "Treffende, geistreiche und pointierte Bemerkung" }
            ]
          }
        ]
      },
      {
        id: "de-u10-l3",
        title: "Lesson 10.3: Literarische Analyse & Epochen",
        description: "Textanalyse kanonischer deutscher Literatur (Goethe, Schiller, Kafka, Thomas Mann, Brecht, Dürrenmatt), Motive, Metrik und Hermeneutik.",
        xp: 35,
        completed: false,
        questions: [
          {
            id: "de-u10-l3-q1",
            type: "multiple_choice",
            prompt: "Welches Motiv steht im Zentrum von Johann Wolfgang von Goethes Tragödie 'Faust'?",
            options: [
              "Das unstillbare Streben des modernen Menschen nach allumfassender Erkenntnis, Grenzüberschreitung und Welterfassung (Pakt mit Mephisto)",
              "Ein einfacher Banküberfall in Frankfurt",
              "Eine Seereise nach Amerika",
              "Ein Streit unter Handwerkern"
            ],
            correctAnswer: "Das unstillbare Streben des modernen Menschen nach allumfassender Erkenntnis, Grenzüberschreitung und Welterfassung (Pakt mit Mephisto)",
            explanation: "'Faust' gilt als das Jahrhundertwerk der deutschen Literaturgeschichte über den faustischen Wissensdrang und existenzielle Sinnsuche."
          },
          {
            id: "de-u10-l3-q2",
            type: "fill_blank",
            sentence: "In Franz Kafkas Erzählung 'Die Verwandlung' erwacht Gregor Samsa eines Morgens als ungeheures ___.",
            missingWord: "Ungeziefer",
            options: ["Ungeziefer", "Raubtier", "Gespenst", "Fabelwesen"],
            correctAnswer: "Ungeziefer",
            explanation: "Kafkas berühmter Anfangssatz lautet: '...fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt'."
          },
          {
            id: "de-u10-l3-q3",
            type: "matching",
            prompt: "Ordnen Sie die Epochen der deutschen Literatur ihren Leitthemen zu:",
            pairs: [
              { native: "Sturm und Drang (ca. 1765–1785)", english: "Gefühlskult, Geniebegriff, Aufbegehren gegen Autoritäten", left: "Sturm und Drang (ca. 1765–1785)", right: "Gefühlskult, Geniebegriff, Aufbegehren gegen Autoritäten" },
              { native: "Weimarer Klassik (ca. 1786–1805)", english: "Harmonie, Humanitätsideal, sittliche Vervollkommnung (Goethe, Schiller)", left: "Weimarer Klassik (ca. 1786–1805)", right: "Harmonie, Humanitätsideal, sittliche Vervollkommnung (Goethe, Schiller)" },
              { native: "Romantik (ca. 1795–1835)", english: "Sehnsucht, Traumwelt, Naturmystik, blaue Blume, Schauerliteratur", left: "Romantik (ca. 1795–1835)", right: "Sehnsucht, Traumwelt, Naturmystik, blaue Blume, Schauerliteratur" },
              { native: "Episches Theater (Brecht)", english: "Verfremdungseffekt (V-Effekt), Desillusionierung, gesellschaftliche Kritik", left: "Episches Theater (Brecht)", right: "Verfremdungseffekt (V-Effekt), Desillusionierung, gesellschaftliche Kritik" }
            ]
          },
          {
            id: "de-u10-l3-q4",
            type: "scramble",
            prompt: "Bringen Sie das berühmte Faust-Zitat in die richtige Reihenfolge:",
            tokens: ["Da", "steh", "ich", "nun,", "ich", "armer", "Tor!", "Und", "bin", "so", "klug", "als", "wie", "zuvor;"],
            correctTokens: ["Da", "steh", "ich", "nun,", "ich", "armer", "Tor!", "Und", "bin", "so", "klug", "als", "wie", "zuvor;"],
            explanation: "Goethes 'Faust I', Nachtszene: Resignation des Gelehrten über die Begrenztheit menschlicher Rationalität."
          },
          {
            id: "de-u10-l3-q5",
            type: "multiple_choice",
            prompt: "Was bewirkt Bertolt Brechts 'Verfremdungseffekt' (V-Effekt) im epischen Theater?",
            options: [
              "Er verhindert die emotionale Identifikation des Zuschauers mit den Figuren und regt stattdessen zum kritischen Mitdenken über gesellschaftliche Missstände an",
              "Er lässt die Schauspieler Masken tragen, damit sie niemand erkennt",
              "Er schaltet die Beleuchtung im Saal komplett aus",
              "Er zwingt die Zuschauer, auf der Bühne mitzuspielen"
            ],
            correctAnswer: "Er verhindert die emotionale Identifikation des Zuschauers mit den Figuren und regt stattdessen zum kritischen Mitdenken über gesellschaftliche Missstände an",
            explanation: "Der V-Effekt durchbricht die theatrale Illusion (durch Lieder, Spruchbänder, direkte Publikumsansprache), um das Publikum zum politischen Handeln zu bewegen."
          },
          {
            id: "de-u10-l3-q6",
            type: "audio_listen",
            prompt: "Hören Sie den Rezitator. Welches Gedicht von Johann Wolfgang von Goethe wird vorgetragen?",
            audioText: "Wer reitet so spät durch Nacht und Wind? Es ist der Vater mit seinem Kind; Er hat den Knaben wohl in dem Arm, Er fasst ihn sicher, er hält ihn warm.",
            options: [
              "Der Erlkönig",
              "Der Zauberlehrling",
              "Prometheus",
              "Willkommen und Abschied"
            ],
            correctAnswer: "Der Erlkönig",
            explanation: "Die weltberühmte Anfangsstrophe von Goethes dramatischer Ballade 'Der Erlkönig'."
          },
          {
            id: "de-u10-l3-q7",
            type: "fill_blank",
            sentence: "Friedrich Dürrenmatts Tragikomödie 'Der Besuch der alten Dame' thematisiert die Korrumpierbarkeit der menschlichen ___ durch Reichtum.",
            missingWord: "Moral",
            options: ["Moral", "Sprache", "Kleidung", "Landschaft"],
            correctAnswer: "Moral",
            explanation: "Dürrenmatts Meisterwerk demaskiert, wie die verarmte Bürgerschaft von Güllen ihre humanistischen Grundsätze für eine Milliarde opfert."
          },
          {
            id: "de-u10-l3-q8",
            type: "matching",
            prompt: "Ordnen Sie die literarischen Autoren ihren Werken zu:",
            pairs: [
              { native: "Thomas Mann", english: "Buddenbrooks / Der Zauberberg", left: "Thomas Mann", right: "Buddenbrooks / Der Zauberberg" },
              { native: "Hermann Hesse", english: "Der Steppenwolf / Siddhartha", left: "Hermann Hesse", right: "Der Steppenwolf / Siddhartha" },
              { native: "Heinrich Böll", english: "Die verlorene Ehre der Katharina Blum", left: "Heinrich Böll", right: "Die verlorene Ehre der Katharina Blum" },
              { native: "Christa Wolf", english: "Der geteilte Himmel / Kassandra", left: "Christa Wolf", right: "Der geteilte Himmel / Kassandra" }
            ]
          }
        ]
      },
      {
        id: "de-u10-l4",
        title: "Lesson 10.4: Idiomatik & Registerwechsel",
        description: "Virtuoses Umschalten zwischen Dialekt/Umgangssprache und gehobenem Hochdeutsch, Redewendungen, Phraseologismen und Konnotationen.",
        xp: 35,
        completed: false,
        questions: [
          {
            id: "de-u10-l4-q1",
            type: "multiple_choice",
            prompt: "Was bedeutet die bildhafte deutsche Redewendung 'Den Nagel auf den Kopf treffen'?",
            options: [
              "Etwas ganz exakt und zutreffend auf den Punkt bringen",
              "Sich beim Hämmern am Finger verletzen",
              "Einen Handwerker beauftragen",
              "Ein Bild an der falschen Wand aufhängen"
            ],
            correctAnswer: "Etwas ganz exakt und zutreffend auf den Punkt bringen",
            explanation: "Diese Redewendung lobt eine pointierte, absolut zutreffende Analyse oder Bemerkung."
          },
          {
            id: "de-u10-l4-q2",
            type: "fill_blank",
            sentence: "Wir sollten die Flinte jetzt nicht ins ___ werfen, sondern beharrlich weiterforschen.",
            missingWord: "Korn",
            options: ["Korn", "Wasser", "Feuer", "Gras"],
            correctAnswer: "Korn",
            explanation: "'Die Flinte ins Korn werfen' ist das deutsche Idiom für vorzeitiges, mutloses Aufgeben."
          },
          {
            id: "de-u10-l4-q3",
            type: "matching",
            prompt: "Ordnen Sie die deutschen Idiome ihren Bedeutungen zu:",
            pairs: [
              { native: "den inneren Schweinehund überwinden", english: "Sich trotz Unlust zur Disziplin aufraffen", left: "den inneren Schweinehund überwinden", right: "Sich trotz Unlust zur Disziplin aufraffen" },
              { native: "um den heißen Brei herumreden", english: "Das Wesentliche vermeiden / nicht zur Sache kommen", left: "um den heißen Brei herumreden", right: "Das Wesentliche vermeiden / nicht zur Sache kommen" },
              { native: "ins Fettnäpfchen treten", english: "Aus Versehen etwas Unpassendes sagen / peinlicher Fauxpas", left: "ins Fettnäpfchen treten", right: "Aus Versehen etwas Unpassendes sagen / peinlicher Fauxpas" },
              { native: "reinen Tisch machen", english: "Klarheit schaffen / offene Konflikte bereinigen", left: "reinen Tisch machen", right: "Klarheit schaffen / offene Konflikte bereinigen" }
            ]
          },
          {
            id: "de-u10-l4-q4",
            type: "scramble",
            prompt: "Bringen Sie das C2-Sprichwort in die richtige Reihenfolge:",
            tokens: ["In", "der", "Kürze", "liegt", "die", "Würze."],
            correctTokens: ["In", "der", "Kürze", "liegt", "die", "Würze."],
            explanation: "Klassisches Sprichwort, das die Kunst prägnanter und schnörkelloser Sprache preist."
          },
          {
            id: "de-u10-l4-q5",
            type: "multiple_choice",
            prompt: "Welches Sprachregister verkörpert der Ausdruck: 'Dieses Unterfangen entbehrt jeglicher rationalen Grundlage'?",
            options: [
              "Gehobenes Bildungsdeutsch (hohes stilistisches Register)",
              "Jugendsprache / Vulgärsprache",
              "Dialektale Alltagssprache",
              "Behördliche Formularsprache"
            ],
            correctAnswer: "Gehobenes Bildungsdeutsch (hohes stilistisches Register)",
            explanation: "Das Verb 'entbehren' mit Genitiv ('entbehrt jeglicher...') gehört zum erlesensten bildungssprachlichen Register."
          },
          {
            id: "de-u10-l4-q6",
            type: "audio_listen",
            prompt: "Hören Sie die Redewendung. Was bedeutet sie im übertragenen Sinn?",
            audioText: "Da müssen wir jetzt wohl oder übel in den sauren Apfel beißen.",
            options: [
              "Eine unangenehme, aber unumgängliche Notwendigkeit akzeptieren",
              "Unreifes Obst im Garten ernten",
              "Zum Zahnarzt gehen",
              "Ein Picknick veranstalten"
            ],
            correctAnswer: "Eine unangenehme, aber unumgängliche Notwendigkeit akzeptieren",
            explanation: "'In den sauren Apfel beißen' bedeutet, eine bittere Pflicht tapfer zu erfüllen."
          },
          {
            id: "de-u10-l4-q7",
            type: "fill_blank",
            sentence: "Wer im Glashaus sitzt, sollte nicht mit ___ werfen.",
            missingWord: "Steinen",
            options: ["Steinen", "Geld", "Büchern", "Äpfeln"],
            correctAnswer: "Steinen",
            explanation: "Das Sprichwort warnt davor, andere wegen Schwächen zu tadeln, die man selbst besitzt."
          },
          {
            id: "de-u10-l4-q8",
            type: "matching",
            prompt: "Ordnen Sie den umgangssprachlichen Begriff dem gehobenen Bildungsdeutsch zu:",
            pairs: [
              { native: "keinen Bock haben (Umgangssprache)", english: "dem Vorhaben mit Vorbehalt / Unlust begegnen (Gehoben)", left: "keinen Bock haben (Umgangssprache)", right: "dem Vorhaben mit Vorbehalt / Unlust begegnen (Gehoben)" },
              { native: "Mist bauen (Umgangssprache)", english: "einen gravierenden Fehltritt begehen (Gehoben)", left: "Mist bauen (Umgangssprache)", right: "einen gravierenden Fehltritt begehen (Gehoben)" },
              { native: "Kohle machen (Umgangssprache)", english: "ein beträchtliches Vermögen erwirtschaften (Gehoben)", left: "Kohle machen (Umgangssprache)", right: "ein beträchtliches Vermögen erwirtschaften (Gehoben)" },
              { native: "pleite sein (Umgangssprache)", english: "Zahlungsunfähigkeit erleiden (Gehoben)", left: "pleite sein (Umgangssprache)", right: "Zahlungsunfähigkeit erleiden (Gehoben)" }
            ]
          }
        ]
      }
    ]
  }
];
