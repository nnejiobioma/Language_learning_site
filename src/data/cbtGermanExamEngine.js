// =========================================================================
// CBT & DTZ Dynamic German Examination Engine
// Grounded in official German government and institutional standards:
// - BAMF DTZ (Deutsch-Test für Zuwanderer A2–B1: Einbürgerung & Niederlassung)
// - Goethe-Zertifikat / telc B2 (DeuFöV Berufssprachkurse: Berufliche Anerkennung)
// - TestDaF & DSH (C1: Hochschulzugangsprüfung der Hochschulrektorenkonferenz KMK)
// Guarantees a BRAND NEW set of test questions on every attempt for logged-in users!
// =========================================================================

import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

// =========================================================================
// 1. POOL DTZ A2–B1 (BAMF DEUTSCH-TEST FÜR ZUWANDERER / EINBÜRGERUNG)
// =========================================================================
export const germanDtzReading = [
  {
    id: "de-dtz-r-01",
    subtest: "reading",
    title: "Aushang der Hausverwaltung: Wartung der Heizungsanlage",
    passage: `HAUSVERWALTUNG DRESDNER STRASSE 12
Sehr geehrte Mieterinnen und Mieter,
am kommenden Donnerstag, den 14. November, wird in der Zeit von 08:30 bis 13:00 Uhr die jährliche gesetzliche Überprüfung und Entlüftung der zentralen Heizungsanlage durchgeführt.
Während dieser Wartungsarbeiten bleibt die Warmwasser- und Heizungsversorgung in allen Wohnungen vorübergehend abgeschaltet.
Wir bitten Sie sicherzustellen, dass die Heizkörper in Ihren Räumen frei zugänglich sind. Sollten Sie zu diesem Zeitpunkt nicht zu Hause sein, bitten wir um Schlüsselhinterlegung beim Hausmeister (EG rechts).
Vielen Dank für Ihr Verständnis.`,
    prompt: "Was müssen die Bewohner am Donnerstagvormittag beachten?",
    options: [
      "A) Die Heizung und das Warmwasser sind zwischen 08:30 und 13:00 Uhr abgestellt",
      "B) Alle Mieter müssen zwingend aus ihren Wohnungen ausziehen",
      "C) Die Heizkörper werden komplett ausgebaut und ersetzt",
      "D) Es fallen zusätzliche Reparaturkosten von 500 Euro pro Mieter an"
    ],
    correctAnswer: "A) Die Heizung und das Warmwasser sind zwischen 08:30 und 13:00 Uhr abgestellt",
    explanation: "Der Text informiert ausdrücklich: 'bleibt die Warmwasser- und Heizungsversorgung... vorübergehend abgeschaltet'."
  },
  {
    id: "de-dtz-r-02",
    subtest: "reading",
    title: "Mitteilung des Bürgeramtes: Erweiterte Öffnungszeiten für Berufstätige",
    passage: `STADTVERWALTUNG — BÜRGERAMT MITTE
Um den Service für berufstätige Bürgerinnen und Bürger zu verbessern, bietet das Bürgeramt Mitte ab dem 1. Oktober jeweils donnerstags verlängerte Öffnungszeiten von 08:00 bis 19:30 Uhr an.
Bitte beachten Sie, dass für Dienstleistungen wie Passbeantragung, Meldebescheinigungen oder Führungszeugnisse zwingend eine vorherige Online-Terminvereinbarung über das Bürgerportal erforderlich ist.
Notfalltermine für vorläufige Reisedokumente werden werktags von 08:00 bis 09:00 Uhr am Schnellschalter vergeben.`,
    prompt: "Was ist ab Oktober für einen Besuch im Bürgeramt am Donnerstagabend zwingend erforderlich?",
    options: [
      "A) Eine vorherige Online-Terminvereinbarung über das Internetportal",
      "B) Eine schriftliche Genehmigung des Arbeitgebers",
      "C) Die Vorlage einer Heiratsurkunde",
      "D) Ein Bargeldbetrag von mindestens 100 Euro"
    ],
    correctAnswer: "A) Eine vorherige Online-Terminvereinbarung über das Internetportal",
    explanation: "Der Aushang betont: 'zwingend eine vorherige Online-Terminvereinbarung über das Bürgerportal erforderlich'."
  },
  {
    id: "de-dtz-r-03",
    subtest: "reading",
    title: "Stellenanzeige: Mitarbeiter für Kundenbetreuung und Logistik",
    passage: `DHL LOGISTICS HUB — WIR SUCHEN VERSTÄRKUNG
Für unser modernes Paketverteilzentrum am Flughafen Leipzig suchen wir ab sofort engagierte Lagermitarbeiter und Kommissionierer (m/w/d) in Vollzeit oder Teilzeit.
Ihr Profil:
- Zuverlässigkeit, Pünktlichkeit und körperliche Belastbarkeit
- Grundlegende Deutschkenntnisse (mindestens Niveau A2/B1 für Sicherheitsanweisungen)
- Bereitschaft zur Schichtarbeit (Früh- und Spätschicht im wöchentlichen Wechsel).
Wir bieten Ihnen einen übertariflichen Stundenlohn von 14,80 Euro, Zuschläge für Nachtarbeit sowie ein bezuschusstes Deutschlandticket für den Nahverkehr. Bewerbungen an karriere@dhl-leipzig.de.`,
    prompt: "Welche Vergünstigung bietet das Unternehmen seinen Mitarbeitern neben dem Lohn?",
    options: [
      "A) Ein bezuschusstes Deutschlandticket für Bus und Bahn",
      "B) Einen kostenlosen Firmenwagen für Urlaubsreisen",
      "C) Eine mietfreie Wohnung am Flughafen",
      "D) Kostenlose Flüge in alle europäischen Hauptstädte"
    ],
    correctAnswer: "A) Ein bezuschusstes Deutschlandticket für Bus und Bahn",
    explanation: "Die Anzeige verspricht: 'ein bezuschusstes Deutschlandticket für den Nahverkehr'."
  },
  {
    id: "de-dtz-r-04",
    subtest: "reading",
    title: "Elternbrief der Grundschule: Projekttag 'Gesunde Ernährung'",
    passage: `PESTALOZZI-GRUNDSCHULE KÖLN
Liebe Eltern,
am Freitag, den 20. September, veranstaltet unsere Schule einen fächerübergreifenden Projekttag zum Thema 'Gesunde Ernährung und Bewegung'.
Alle Klassen bereiten gemeinsam in der Schulküche vollwertige Pausensnacks zu. Wir bitten Sie daher, Ihren Kindern an diesem Tag kein eigenes Frühstück mitzugeben, sondern lediglich eine wiederverwendbare Trinkflasche für Leitungswasser.
Der Unterricht endet für alle Jahrgangsstufen einheitlich um 12:30 Uhr. Die Nachmittagsbetreuung im Hort findet wie gewohnt statt.`,
    prompt: "Was sollen die Eltern ihren Kindern an diesem Projekttag mitgeben?",
    options: [
      "A) Nur eine wiederverwendbare Trinkflasche für Wasser",
      "B) Ein großes Lunchpaket mit Schokoriegeln",
      "C) Zehn Euro in bar für das Schulessen",
      "D) Sportschuhe für einen Waldlauf"
    ],
    correctAnswer: "A) Nur eine wiederverwendbare Trinkflasche für Wasser",
    explanation: "Im Brief steht: 'bitten Sie daher... lediglich eine wiederverwendbare Trinkflasche für Leitungswasser' mitzugeben."
  },
  {
    id: "de-dtz-r-05",
    subtest: "reading",
    title: "Verbraucherzentrale: Vorsicht vor betrügerischen Anrufen",
    passage: `VERBRAUCHERZENTRALE BUNDESVERBAND — WARNMELDUNG
Aktuell häufen sich bundesweit Beschwerden über angebliche Anrufe der Bundesnetzagentur oder von Energieversorgern. Die Anrufer behaupten wahrheitswidrig, der aktuelle Stromvertrag laufe aus, und fordern die Weitergabe der Zählernummer sowie der Bankverbindung.
Die Verbraucherzentrale stellt klar: Seriöse Versorger erfragen niemals telefonisch Passwörter oder Kontodaten.
Geben Sie am Telefon keinesfalls sensible Daten preis und fordern Sie alle Vertragsangebote stets in schriftlicher Form zur Prüfung an.`,
    prompt: "Was rät die Verbraucherzentrale den Bürgern bei solchen Anrufen?",
    options: [
      "A) Niemals sensible Kontodaten oder Zählernummern am Telefon zu nennen",
      "B) Dem Anrufer sofort die Kreditkartennummer mitzuteilen",
      "C) Den Stromanschluss in der Wohnung selbst abzuklemmen",
      "D) Den Telefonvertrag unverzüglich zu kündigen"
    ],
    correctAnswer: "A) Niemals sensible Kontodaten oder Zählernummern am Telefon zu nennen",
    explanation: "Die Verbraucherzentrale rät: 'Geben Sie am Telefon keinesfalls sensible Daten preis'."
  },
  {
    id: "de-dtz-r-06",
    subtest: "reading",
    title: "Information der Krankenkasse: Elektronische Patientenakte (ePA)",
    passage: `TECHNIKER KRANKENKASSE — DIGITALER GESUNDHEITSSERVICE
Ab dem kommenden Jahr erhalten alle gesetzlich Versicherten automatisch die elektronische Patientenakte (ePA), sofern sie dem Verfahren nicht aktiv widersprechen (Opt-out-Prinzip).
In der ePA können Befunde, Laborwerte, e-Rezepte und der Impfausweis digital und sicher gespeichert werden. Dies verhindert unnötige Doppeluntersuchungen beim Facharzt und warnt vor gefährlichen Wechselwirkungen verschiedener Medikamente.
Der Zugriff auf die Daten erfolgt ausschließlich nach Freigabe durch den Versicherten über die Krankenkassen-App oder die elektronische Gesundheitskarte in der Praxis.`,
    prompt: "Welcher Vorteil der elektronischen Patientenakte wird im Schreiben genannt?",
    options: [
      "A) Vermeidung überflüssiger Doppeluntersuchungen und Warnung vor Medikamenten-Wechselwirkungen",
      "B) Eine automatische Senkung des Krankenkassenbeitrags um 50 Prozent",
      "C) Dass Ärzte keine Rezepte mehr ausstellen dürfen",
      "D) Die Pflicht zur täglichen Online-Meldung des Gewichts"
    ],
    correctAnswer: "A) Vermeidung überflüssiger Doppeluntersuchungen und Warnung vor Medikamenten-Wechselwirkungen",
    explanation: "Der Text nennt: 'verhindert unnötige Doppeluntersuchungen beim Facharzt und warnt vor gefährlichen Wechselwirkungen'."
  },
  {
    id: "de-dtz-r-07",
    subtest: "reading",
    title: "Bibliotheksordnung der Stadtbücherei: Leihfristen und Gebühren",
    passage: `STADTBIBLIOTHEK NÜRNBERG — BENUTZUNGSHINWEISE
Die reguläre Leihfrist für Bücher und Sprachlehrwerke beträgt vier Wochen, für DVDs und Konsolenspiele zwei Wochen.
Eine Verlängerung der Leihfrist ist bis zu zweimal möglich, sofern keine Vormerkung eines anderen Lesers vorliegt. Die Verlängerung kann bequem über das Online-Benutzerkonto oder telefonisch vorgenommen werden.
Wird die Frist überschritten, fällt ab dem ersten Werktag eine Säumnisgebühr von 0,50 Euro pro Medium und Tag an.`,
    prompt: "Unter welcher Bedingung kann ein Buch in der Bibliothek verlängert werden?",
    options: [
      "A) Sofern kein anderer Leser das Buch vorbestellt (vorgemerkt) hat",
      "B) Nur wenn man das Buch ein zweites Mal kauft",
      "C) Ausschließlich montags zwischen 08:00 und 09:00 Uhr",
      "D) Bücher können grundsätzlich nie verlängert werden"
    ],
    correctAnswer: "A) Sofern kein anderer Leser das Buch vorbestellt (vorgemerkt) hat",
    explanation: "Der Text formuliert: 'sofern keine Vormerkung eines anderen Lesers vorliegt'."
  },
  {
    id: "de-dtz-r-08",
    subtest: "reading",
    title: "Hinweis des Abfallwirtschaftsbetriebs: Schadstoffmobil",
    passage: `BERLINER STADTREINIGUNG (BSR) — SCHADSTOFFMOBIL
Farbreste, Lacke, Altbatterien, Energiesparlampen und Reinigungschemikalien dürfen keinesfalls über den normalen Hausmüll oder die Kanalisation entsorgt werden, da sie giftige Schwermetalle enthalten.
Am Samstag, den 5. Oktober, macht das Schadstoffmobil der BSR von 09:00 bis 12:00 Uhr Station auf dem Marktplatz Neukölln.
Berliner Privathaushalte können dort gefährliche Sonderabfälle bis zu einer Gesamtmenge von 20 Kilogramm kostenfrei abgeben.`,
    prompt: "Was kann am Samstag beim Schadstoffmobil abgegeben werden?",
    options: [
      "A) Gefährliche Haushaltsabfälle wie Farben, Altbatterien und Chemikalien (kostenfrei bis 20 kg)",
      "B) Alte Kleidungsstücke und gebrauchte Möbel",
      "C) Grünschnitt und Gartenabfälle",
      "D) Küchenabfälle für die Biotonne"
    ],
    correctAnswer: "A) Gefährliche Haushaltsabfälle wie Farben, Altbatterien und Chemikalien (kostenfrei bis 20 kg)",
    explanation: "Die BSR informiert über die kostenfreie Abgabe von Farben, Lacken, Altbatterien und Chemikalien bis 20 kg."
  },
  {
    id: "de-dtz-r-09",
    subtest: "reading",
    title: "Volkshochschule (VHS): Integrationskurs und B1-Prüfungstermine",
    passage: `VOLKSHOCHSCHULE FRANKFURT — FACHBEREICH DEUTSCH
Der nächste allgemeine Integrationskurs mit 600 Unterrichtsstunden Sprachkurs und 100 Stunden Orientierungskurs beginnt am Montag, den 4. November.
Teilnehmer mit einer Berechtigung oder Verpflichtung durch das BAMF oder das Jobcenter zahlen einen reduzierten Kostenbeitrag von 2,29 Euro pro Unterrichtsstunde. Bei Bezug von Bürgergeld ist eine vollständige Kostenbefreiung möglich.
Die Anmeldung zur B1-Abschlussprüfung (Deutsch-Test für Zuwanderer) muss spätestens vier Wochen vor dem Prüfungstermin persönlich im Sekretariat erfolgen.`,
    prompt: "Bis wann muss die persönliche Prüfungsanmeldung für den DTZ vorliegen?",
    options: [
      "A) Spätestens vier Wochen vor dem eigentlichen Prüfungstermin",
      "B) Am Tag der Prüfung direkt vor Beginn",
      "C) Ein ganzes Jahr im Voraus",
      "D) Nach Erhalt des Prüfungsergebnisses"
    ],
    correctAnswer: "A) Spätestens vier Wochen vor dem eigentlichen Prüfungstermin",
    explanation: "Die VHS schreibt: 'spätestens vier Wochen vor dem Prüfungstermin persönlich im Sekretariat'."
  },
  {
    id: "de-dtz-r-10",
    subtest: "reading",
    title: "Kfz-Zulassungsstelle: Ummeldung des Fahrzeugs nach Wohnortwechsel",
    passage: `LANDRATSAMT MÜNCHEN — FAHRZEUGZULASSUNG
Wer innerhalb Deutschlands umzieht, muss unverzüglich die neue Wohnadresse in die Zulassungsbescheinigung Teil I (Fahrzeugschein) eintragen lassen.
Seit der bundesweiten Neuregelung ist es jedoch möglich, das bisherige Kennzeichen (z. B. B für Berlin) auch am neuen Wohnort in München beizubehalten, wodurch die Kosten für neue Nummernschilder entfallen.
Für die Adressänderung benötigen Sie: Personalausweis, Zulassungsbescheinigung Teil I und die Meldebestätigung des Einwohnermeldeamtes.`,
    prompt: "Welche Erleichterung gilt bei einem Umzug für das Autokennzeichen?",
    options: [
      "A) Das bisherige Kennzeichen kann bundesweit behalten werden (keine neuen Schilder nötig)",
      "B) Man muss das Auto zwingend sofort verkaufen",
      "C) Man darf nur noch sonntags mit dem Auto fahren",
      "D) Die Kfz-Steuer entfällt für fünf Jahre"
    ],
    correctAnswer: "A) Das bisherige Kennzeichen kann bundesweit behalten werden (keine neuen Schilder nötig)",
    explanation: "Der Text stellt klar: 'ist es jedoch möglich, das bisherige Kennzeichen... auch am neuen Wohnort... beizubehalten'."
  },
  {
    id: "de-dtz-r-11",
    subtest: "reading",
    title: "Mietrecht: Rechtzeitige Kündigung eines Mietvertrages",
    passage: `DEUTSCHER MIETERBUND — RATGEBER KÜNDIGUNG
Für Mieter von Wohnraum gilt gesetzlich nach § 573c BGB eine dreimonatige Kündigungsfrist.
Entscheidend für die Rechtzeitigkeit ist der Tag, an dem das Kündigungsschreiben dem Vermieter zugeht: Die Kündigung muss spätestens am dritten Werktag eines Kalendermonats beim Vermieter eingehen, damit dieser Monat noch zur Frist zählt.
Die Kündigung bedarf zwingend der Schriftform mit eigenhändiger Unterschrift aller im Mietvertrag genannten Mieter. Eine Kündigung per E-Mail, SMS oder WhatsApp ist rechtlich unwirksam.`,
    prompt: "Warum ist eine Kündigung der Wohnung per WhatsApp oder E-Mail unwirksam?",
    options: [
      "A) Weil das Gesetz zwingend die Schriftform mit eigenhändiger Unterschrift vorschreibt",
      "B) Weil WhatsApp in Deutschland verboten ist",
      "C) Weil der Vermieter kein Smartphone besitzt",
      "D) Weil Kündigungen nur mündlich am Telefon ausgesprochen werden dürfen"
    ],
    correctAnswer: "A) Weil das Gesetz zwingend die Schriftform mit eigenhändiger Unterschrift vorschreibt",
    explanation: "Der Ratgeber stellt klar: 'bedarf zwingend der Schriftform mit eigenhändiger Unterschrift... E-Mail, SMS oder WhatsApp ist rechtlich unwirksam'."
  },
  {
    id: "de-dtz-r-12",
    subtest: "reading",
    title: "Schulamt: Regelung bei witterungsbedingtem Schulausfall",
    passage: `MINISTERIUM FÜR SCHULE UND BILDUNG NRW
Bei extremen Wetterlagen wie Blitzeis, schweren Orkanböen oder außergewöhnlich starkem Schneefall entscheidet die örtliche Koordinierungsgruppe über einen witterungsbedingten Ausfall des Präsenzunterrichts.
Die Schulen richten in diesen Fällen digitalen Distanzunterricht über die Schulplattform ein.
Für Schülerinnen und Schüler der Klassen 1 bis 6, die das Schulgebäude dennoch erreichen oder deren Eltern keine Betreuung organisieren können, gewährleistet jede Schule eine Notbetreuung durch das Lehrpersonal.`,
    prompt: "Was passiert, wenn der Präsenzunterricht wegen Blitzeis ausfällt?",
    options: [
      "A) Die Schulen schalten auf Distanzunterricht um und bieten eine Notbetreuung für Klassen 1 bis 6 an",
      "B) Die Sommerferien werden um zwei Wochen gekürzt",
      "C) Alle Kinder müssen Schnee auf dem Schulhof schaufeln",
      "D) Die Noten aller Schüler werden automatisch um eine Stufe gesenkt"
    ],
    correctAnswer: "A) Die Schulen schalten auf Distanzunterricht um und bieten eine Notbetreuung für Klassen 1 bis 6 an",
    explanation: "Das Ministerium garantiert: 'richten... digitalen Distanzunterricht... ein' und 'gewährleistet jede Schule eine Notbetreuung'."
  }
];

export const germanDtzWriting = [
  {
    id: "de-dtz-w-01",
    subtest: "writing",
    taskType: "message",
    title: "Brief an die Hausverwaltung: Heizungsausfall im Winter",
    prompt: "In Ihrer Mietwohnung ist seit zwei Tagen die Heizung im Wohnzimmer und im Kinderzimmer komplett ausgefallen. Sie haben bereits vergeblich versucht, den Hausmeister telefonisch zu erreichen.\n\nSchreiben Sie einen formellen Brief oder eine formelle E-Mail (mindestens 80 Wörter) an die Hausverwaltung:\n- Grund des Schreibens nennen (Adresse, Heizungsausfall seit zwei Tagen)\n- Situation schildern (Kälte in den Zimmern, kleine Kinder im Haushalt)\n- Um sofortige Reparatur bitten und Frist von drei Tagen setzen\n- Erreichbarkeit für Handwerkertermin mitteilen.",
    minWords: 80,
    modelResponse: "Sehr geehrte Damen und Herren,\n\nich wende mich an Sie bezüglich meiner Mietwohnung in der Goethestraße 15, 3. OG links. Seit vergangenem Dienstag ist in unserer Wohnung die Heizung im Wohnzimmer sowie im Kinderzimmer vollständig ausgefallen. Trotz mehrfacher Versuche konnte ich den Hausmeister telefonisch leider nicht erreichen.\n\nDa die Außentemperaturen derzeit um den Gefrierpunkt liegen und wir zwei kleine Kinder haben, kühlen die Räume rapide aus. Ich fordere Sie daher höflich, aber nachdrücklich auf, den Defekt innerhalb von drei Werktagen durch einen Fachbetrieb beheben zu lassen.\n\nSie erreichen mich für eine Terminabsprache tagsüber jederzeit unter der Rufnummer 0172 9876543.\n\nMit freundlichen Grüßen\n\nAli Yilmaz"
  },
  {
    id: "de-dtz-w-02",
    subtest: "writing",
    taskType: "message",
    title: "Entschuldigungsschreiben an die Klassenlehrerin",
    prompt: "Ihre Tochter Leonie (8 Jahre alt) konnte wegen einer akuten Magen-Darm-Grippe drei Tage lang nicht am Grundschulunterricht teilnehmen.\n\nVerfassen Sie eine schriftliche Entschuldigung (mindestens 70 Wörter) an die Klassenlehrerin Frau Sommer:\n- Entschuldigung für das Fehlen der Tochter mit Datumsangabe\n- Grund des Fehlens (akute Erkrankung mit ärztlichem Attest)\n- Bitten um Mitteilung der versäumten Hausaufgaben und Lerninhalte\n- Ankündigung der Rückkehr in die Schule ab nächstem Montag.",
    minWords: 70,
    modelResponse: "Sehr geehrte Frau Sommer,\n\nbitte entschuldigen Sie das Fehlen meiner Tochter Leonie Müller in der Zeit vom 12. bis zum 14. Oktober.\n\nLeonie litt an einer schweren Magen-Darm-Grippe mit Fieber und musste auf ärztlichen Rat das Bett hüten. Die entsprechende Bescheinigung unseres Kinderarztes Dr. Bergmann liegt diesem Schreiben bei.\n\nLeonie fühlt sich nun wieder gesund und wird am kommenden Montag wie gewohnt am Unterricht teilnehmen. Könnten Sie mir bitte kurz mitteilen, welche Aufgaben in Mathematik und Deutsch nachgeholt werden müssen?\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\n\nSusanne Müller"
  },
  {
    id: "de-dtz-w-03",
    subtest: "writing",
    taskType: "message",
    title: "Terminanfrage beim Bürgeramt: Verlängerung des Aufenthaltstitels",
    prompt: "Ihr elektronischer Aufenthaltstitel läuft in sechs Wochen ab. Auf der Webseite des Bürgeramtes sind derzeit keine freien Online-Termine buchbar.\n\nSchreiben Sie eine E-Mail (mindestens 80 Wörter) an die Ausländerbehörde:\n- Sachverhalt schildern (Name, Geburtsdatum, Ablaufdatum des aktuellen Titels)\n- Problem erklären (keine freien Online-Termine im Buchungssystem)\n- Um dringenden Termin oder Ausstellung einer Fiktionsbescheinigung bitten\n- Aktuelle Arbeitsbescheinigung und Passkopie als Anhang ankündigen.",
    minWords: 80,
    modelResponse: "Sehr geehrte Damen und Herren,\n\nmein Name ist Carlos Gomez, geboren am 15.03.1992 in Bogotá. Mein aktueller elektronischer Aufenthaltstitel läuft am 30. November dieses Jahres ab. Im Online-Terminvergabesystem der Stadtverwaltung konnte ich in den vergangenen Wochen leider keinen freien Termin zur Verlängerung buchen.\n\nDa ich in einem unbefristeten Arbeitsverhältnis stehe, bitte ich Sie dringend um die Zuteilung eines persönlichen Vorsprachetermins oder um die vorläufige Ausstellung einer Fiktionsbescheinigung zur Fortgeltung meines Aufenthaltstitels.\n\nIn der Anlage finden Sie eine Kopie meines Reisepasses sowie eine aktuelle Beschäftigungsbestätigung meines Arbeitgebers.\n\nIch bedanke mich im Voraus für Ihre Unterstützung.\n\nMit freundlichen Grüßen\n\nCarlos Gomez"
  },
  {
    id: "de-dtz-w-04",
    subtest: "writing",
    taskType: "message",
    title: "Mitteilung an den Arbeitgeber: Einreichung von Elternzeit",
    prompt: "Sie erwarten in drei Monaten die Geburt Ihres Kindes und möchten im Anschluss an den Mutterschutz zwei Monate Elternzeit nehmen.\n\nSchreiben Sie ein formelles Schreiben (mindestens 80 Wörter) an die Personalabteilung:\n- Grund des Schreibens (Mitteilung über die Geburt und Inanspruchnahme von Elternzeit)\n- Konkreten Zeitraum und Dauer der gewünschten Elternzeit angeben\n- Übergabe der aktuellen Projekte vor Beginn der Auszeit vorschlagen\n- Um schriftliche Bestätigung der Elternzeit bitten.",
    minWords: 80,
    modelResponse: "Sehr geehrte Damen und Herren der Personalabteilung,\n\nhiermit informiere ich Sie offiziell darüber, dass ich nach der Geburt unseres Kindes Elternzeit in Anspruch nehmen möchte. Der voraussichtliche Entbindungstermin ist der 10. Dezember.\n\nGemäß § 16 BEEG beantrage ich zwei Monate Elternzeit für den Zeitraum vom 1. Februar bis zum 31. März des kommenden Jahres. Selbstverständlich werde ich alle meine laufenden Kundenprojekte rechtzeitig vor Antritt der Elternzeit strukturiert an meine Kollegin Frau Schneider übergeben.\n\nIch bitte Sie höflich, mir den Erhalt dieses Schreibens sowie den beantragten Zeitraum der Elternzeit schriftlich zu bestätigen.\n\nMit freundlichen Grüßen\n\nMarkus Weber"
  },
  {
    id: "de-dtz-w-05",
    subtest: "writing",
    taskType: "essay",
    title: "Meinungsäußerung: Vor- und Nachteile der Ganztagsbetreuung an Schulen",
    prompt: "In den Medien und im Stadtrat wird über den flächendeckenden Ausbau der Ganztagsbetreuung (Offene Ganztagsschule / OGS) für alle Grundschulkinder diskutiert.\n\nVerfassen Sie einen zusammenhängenden argumentativen Text (120–160 Wörter):\n- Einleitung zur Bedeutung der Ganztagsbetreuung in Deutschland\n- Vorteile für Eltern (bessere Vereinbarkeit von Familie und Beruf) und Kinder (Förderung, Hausaufgabenhilfe, Sportangebote)\n- Mögliche Nachteile oder Bedenken (weniger Familienzeit am Nachmittag, Qualität des Essens und Betreuungsschlüssels)\n- Eigene Meinung und persönliches Fazit.",
    minWords: 120,
    modelResponse: "Die Einführung und der Ausbau der Ganztagsbetreuung an Grundschulen ist ein zentrales Thema der deutschen Bildungspolitik. Meiner Ansicht nach bringt dieses Modell erhebliche Erleichterungen für viele Familien mit sich.\n\nEinerseits ermöglicht die Ganztagsschule beiden Elternteilen, einer vollwertigen Erwerbstätigkeit nachzugehen, ohne sich um die Betreuung am Nachmittag sorgen zu müssen. Darüber hinaus erhalten die Kinder dort eine geregelte Hausaufgabenbetreuung, warme Mahlzeiten und vielfältige Freizeitangebote in Sport und Musik, was insbesondere die soziale Integration fördert.\n\nAndererseits befürchten manche Eltern, dass die gemeinsame Zeit in der Familie verkürzt wird und Kinder nach einem langen Schultag erschöpft sind. Zudem hängt der Erfolg entscheidend von qualifiziertem pädagogischem Personal und kindgerechten Räumlichkeiten ab.\n\nZusammenfassend halte ich die Ganztagsschule für ein zukunftsweisendes Konzept, sofern die Teilnahme für Familien freiwillig bleibt und hohe Qualitätsstandards gesichert sind."
  },
  {
    id: "de-dtz-w-06",
    subtest: "writing",
    taskType: "essay",
    title: "Meinungsäußerung: Öffentlicher Nahverkehr vs. eigenes Auto in der Großstadt",
    prompt: "Immer mehr deutsche Metropolen diskutieren über autofreie Innenstädte und die Förderung des Deutschlandtickets für Bus und Bahn.\n\nSchreiben Sie einen argumentativen Beitrag (120–160 Wörter):\n- Vorzüge des ÖPNV (Umweltschutz, Entlastung vom Stau, keine Parkplatzsuche, günstige Monatstickets)\n- Einschränkungen von Bus und Bahn (Verspätungen, Unzuverlässigkeit auf dem Land, Ausfälle bei Streik)\n- Vorteile des Autos für Familien und ältere Menschen beim Transport\n- Ihr eigenes Fazit für eine zukunftsgerechte Mobilität in der Stadt.",
    minWords: 120,
    modelResponse: "Die Frage, ob man in der Stadt auf ein eigenes Auto verzichten sollte, wird heute intensiv debattiert. Durch das Deutschlandticket ist der öffentliche Personennahverkehr so attraktiv wie selten zuvor.\n\nFür Bus und Bahn sprechen starke Argumente: Sie schonen die Umwelt durch niedrigere Emissionen, befreien vom täglichen Stress im Stau und machen die nervenaufreibende Parkplatzsuche in den Innenstädten überflüssig. Zudem sind die Monatskosten deutlich geringer als Ausgaben für Benzin, Kfz-Versicherung und Reparaturen.\n\nDennoch weist der ÖPNV auch Schwächen auf. Häufige Zugverspätungen, überfüllte Abteile zur Hauptverkehrszeit und Streiks im Nahverkehr stellen Pendler regelmäßig vor große Geduldsproben. Vor allem für Familien mit Großeinkäufen oder Bewohner ländlicher Randbezirke bleibt das Auto oft unverzichtbar.\n\nMein Fazit lautet: In Großstädten mit dichtem Taktnetz ist der ÖPNV dem Auto klar überlegen. Eine vollständige Verkehrswende gelingt aber nur mit zuverlässigen Investitionen in Pünktlichkeit und Netzausbau."
  }
];

export const germanDtzListening = [
  {
    id: "de-dtz-l-01",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Achtung an Gleis drei: Der Regionalexpress siebzehn nach Rostock über Neubrandenburg fährt heute mit circa fünfundzwanzig Minuten Verspätung ein. Grund dafür ist eine behobene technische Störung an der Weiche. Wir bitten um Entschuldigung.",
    prompt: "Warum hat der Zug nach Rostock Verspätung?",
    options: [
      "A) Wegen einer behobenen technischen Störung an der Weiche (ca. 25 Minuten)",
      "B) Wegen eines plötzlichen Lokführerstreiks",
      "C) Weil der Zug komplett ausfällt",
      "D) Wegen starken Schneefalls auf der Strecke"
    ],
    correctAnswer: "A) Wegen einer behobenen technischen Störung an der Weiche (ca. 25 Minuten)",
    explanation: "Die Ansage nennt: 'Grund dafür ist eine behobene technische Störung an der Weiche'."
  },
  {
    id: "de-dtz-l-02",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Guten Tag, Praxis Dr. Med. Weimann. Unsere Sprechstunde für akute Notfälle ist montags bis freitags von acht bis zehn Uhr morgens. Bitte bringen Sie Ihre Versichertenkarte mit. Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort die einhundertzwölf.",
    prompt: "Wann findet die Notfallsprechstunde der Praxis statt?",
    options: [
      "A) Montags bis freitags von 08:00 bis 10:00 Uhr morgens",
      "B) Nur am Wochenende ab 18:00 Uhr",
      "C) Dienstags und donnerstags am Nachmittag",
      "D) Rund um die Uhr ohne Pause"
    ],
    correctAnswer: "A) Montags bis freitags von 08:00 bis 10:00 Uhr morgens",
    explanation: "Der Anrufbeantworter sagt: 'montags bis freitags von acht bis zehn Uhr morgens'."
  },
  {
    id: "de-dtz-l-03",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Sehr geehrte Kundinnen und Kunden, wegen einer Personalversammlung schließt unsere Filiale heute bereits um sechzehn Uhr dreißig. Ab morgen früh um acht Uhr dreißig stehen wir Ihnen wieder wie gewohnt zur Verfügung. Vielen Dank für Ihr Verständnis.",
    prompt: "Um wie viel Uhr schließt die Filiale heute ausnahmsweise?",
    options: [
      "A) Um 16:30 Uhr wegen einer Personalversammlung",
      "B) Um 20:00 Uhr wie an jedem Werktag",
      "C) Um 12:00 Uhr mittags",
      "D) Die Filiale bleibt heute ganztägig geschlossen"
    ],
    correctAnswer: "A) Um 16:30 Uhr wegen einer Personalversammlung",
    explanation: "Die Durchsage nennt: 'schließt unsere Filiale heute bereits um sechzehn Uhr dreißig'."
  },
  {
    id: "de-dtz-l-04",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hallo Thomas, hier ist Julia vom Sportverein. Unser Hallentraining am Mittwoch muss leider ausfallen, weil der Hallenboden renoviert wird. Wir treffen uns stattdessen am Donnerstag um neunzehn Uhr auf dem Sportplatz draußen zum Laufen. Gib mir kurz Bescheid, ob du kommst!",
    prompt: "Wann und wo findet das Ersatztraining statt?",
    options: [
      "A) Am Donnerstag um 19:00 Uhr draußen auf dem Sportplatz",
      "B) Am Mittwoch wie gewohnt in der Turnhalle",
      "C) Am Samstagmorgen im Schwimmbad",
      "D) Das Training ist für die nächsten zwei Monate abgesagt"
    ],
    correctAnswer: "A) Am Donnerstag um 19:00 Uhr draußen auf dem Sportplatz",
    explanation: "Julia sagt: 'treffen uns stattdessen am Donnerstag um neunzehn Uhr auf dem Sportplatz'."
  },
  {
    id: "de-dtz-l-05",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Wetterbericht für Norddeutschland: Nach Auflösung lokaler Frühnebelfelder erwartet uns heute ein überwiegend sonniger und trockener Tag mit Höchstwerten um einundzwanzig Grad. Erst ab morgen Abend ziehen von Westen her dichte Wolken mit einzelnen Regenschauern auf.",
    prompt: "Welches Wetter wird für den heutigen Tag vorhergesagt?",
    options: [
      "A) Überwiegend sonnig und trocken mit bis zu 21 Grad",
      "B) Schwere Gewitter mit Hagel und Sturm",
      "C) Dauerhafter Schneefall und Frost",
      "D) Dichte Regenwolken den ganzen Tag"
    ],
    correctAnswer: "A) Überwiegend sonnig und trocken mit bis zu 21 Grad",
    explanation: "Der Wetterbericht meldet: 'überwiegend sonniger und trockener Tag mit Höchstwerten um einundzwanzig Grad'."
  },
  {
    id: "de-dtz-l-06",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Guten Tag, Herr Fischer, hier spricht die Kfz-Werkstatt Auto-Service Schulz. Die Hauptuntersuchung und der Ölwechsel an Ihrem Wagen sind abgeschlossen. Sie können das Fahrzeug heute bis achtzehn Uhr gegen Barzahlung oder mit EC-Karte abholen.",
    prompt: "Was teilt der Werkstattmitarbeiter dem Kunden mit?",
    options: [
      "A) Dass das Auto fertig repariert ist und bis 18:00 Uhr abgeholt werden kann",
      "B) Dass das Auto leider einen Totalschaden hat",
      "C) Dass der Kunde neue Winterreifen kaufen muss",
      "D) Dass die Werkstatt heute geschlossen bleibt"
    ],
    correctAnswer: "A) Dass das Auto fertig repariert ist und bis 18:00 Uhr abgeholt werden kann",
    explanation: "Der Mitarbeiter informiert: 'Untersuchung und Ölwechsel... abgeschlossen... bis achtzehn Uhr... abholen'."
  },
  {
    id: "de-dtz-l-07",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Apotheken-Notdienstansage: Außerhalb der regulären Öffnungszeiten wenden Sie sich bitte an die Hirsch-Apotheke in der Bahnhofstraße zweiundzwanzig. Sie erreichen den diensthabenden Apotheker unter der Telefonnummer null sechs neun eins zwei drei null null.",
    prompt: "Welche Apotheke hat heute Nacht Notdienst?",
    options: [
      "A) Die Hirsch-Apotheke in der Bahnhofstraße 22",
      "B) Die Schloss-Apotheke am Marktplatz",
      "C) Alle Apotheken der Stadt",
      "D) Keine, man muss ins Krankenhaus fahren"
    ],
    correctAnswer: "A) Die Hirsch-Apotheke in der Bahnhofstraße 22",
    explanation: "Die Ansage nennt: 'Hirsch-Apotheke in der Bahnhofstraße zweiundzwanzig'."
  },
  {
    id: "de-dtz-l-08",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hallo Herr Becker, hier ist die Personalabteilung der Firma TechLog. Wir haben Ihre Bewerbung erhalten und möchten Sie sehr gerne zu einem persönlichen Vorstellungsgespräch am nächsten Dienstag um zehn Uhr einladen. Bitte rufen Sie uns kurz zurück.",
    prompt: "Warum ruft die Personalabteilung Herrn Becker an?",
    options: [
      "A) Um ihn zu einem persönlichen Vorstellungsgespräch am Dienstag um 10:00 Uhr einzuladen",
      "B) Um ihm eine Absage zu erteilen",
      "C) Um ihn nach einer Adresse zu fragen",
      "D) Um einen Liefertermin zu verschieben"
    ],
    correctAnswer: "A) Um ihn zu einem persönlichen Vorstellungsgespräch am Dienstag um 10:00 Uhr einzuladen",
    explanation: "Die Mitarbeiterin lädt ihn ein: 'zu einem persönlichen Vorstellungsgespräch am nächsten Dienstag um zehn Uhr'."
  },
  {
    id: "de-dtz-l-09",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Durchsage im Möbelhaus: Herr Schmidt, bitte zur Information im Erdgeschoss. Ihr Sohn wartet dort auf Sie. Herr Schmidt, bitte zur Information.",
    prompt: "Wer soll sich an der Information im Erdgeschoss melden?",
    options: [
      "A) Herr Schmidt, da sein Sohn an der Information auf ihn wartet",
      "B) Der Filialleiter wegen einer Lieferung",
      "C) Ein Kunde, der seine Geldbörse verloren hat",
      "D) Alle Mitarbeiter der Möbelabteilung"
    ],
    correctAnswer: "A) Herr Schmidt, da sein Sohn an der Information auf ihn wartet",
    explanation: "Die Durchsage ruft: 'Herr Schmidt, bitte zur Information... Ihr Sohn wartet dort auf Sie'."
  },
  {
    id: "de-dtz-l-10",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Verkehrsdurchsage: Auf der Autobahn A3 Frankfurt Richtung Köln gibt es zwischen Limburg-Nord und Montabaur sechs Kilometer Stau wegen einer Baustelle. Der Zeitverlust beträgt aktuell etwa fünfunddreißig Minuten. Wir empfehlen die Umleitung über die B acht.",
    prompt: "Wie lang ist der Stau auf der Autobahn A3?",
    options: [
      "A) Sechs Kilometer mit ca. 35 Minuten Zeitverlust",
      "B) Zwanzig Kilometer ohne Zeitverlust",
      "C) Die Autobahn ist komplett gesperrt",
      "D) Nur zwei Minuten Verzögerung"
    ],
    correctAnswer: "A) Sechs Kilometer mit ca. 35 Minuten Zeitverlust",
    explanation: "Der Verkehrsfunk meldet: 'sechs Kilometer Stau... Zeitverlust beträgt aktuell etwa fünfunddreißig Minuten'."
  },
  {
    id: "de-dtz-l-11",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Guten Tag, Frau Richter, hier ist die Stadtbibliothek. Das von Ihnen vorbestellte Sprachlehrwerk 'Deutsch B2 für den Beruf' ist eingetroffen und liegt ab sofort an der Ausleihe für Sie bereit. Sie haben sieben Tage Zeit zur Abholung.",
    prompt: "Wie lange hat Frau Richter Zeit, das vorbestellte Buch abzuholen?",
    options: [
      "A) Sieben Tage",
      "B) Nur zwei Stunden",
      "C) Einen ganzen Monat",
      "D) Bis zum Ende des Jahres"
    ],
    correctAnswer: "A) Sieben Tage",
    explanation: "Die Mitarbeiterin sagt: 'Sie haben sieben Tage Zeit zur Abholung'."
  },
  {
    id: "de-dtz-l-12",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Radiomeldung der Verbraucherzentrale: Ab dem ersten Januar sinken die gesetzlichen EEG-Umlagen für Strom. Haushalte sollten deshalb ihren Zählerstand zum einunddreißigsten Dezember ablesen und online an ihren Stromanbieter übermitteln, um von den niedrigeren Tarifen zu profitieren.",
    prompt: "Was empfiehlt der Radiosprecher den Haushalten zum Jahresende?",
    options: [
      "A) Den Stromzählerstand am 31. Dezember abzulesen und an den Anbieter zu melden",
      "B) Den Stromvertrag sofort zum Jahresende zu kündigen",
      "C) Alle Haushaltsgeräte durch Neugeräte zu ersetzen",
      "D) Den Zähler aus der Wohnung auszubauen"
    ],
    correctAnswer: "A) Den Stromzählerstand am 31. Dezember abzulesen und an den Anbieter zu melden",
    explanation: "Der Rat lautet: 'Zählerstand zum einunddreißigsten Dezember ablesen und online an ihren Stromanbieter übermitteln'."
  }
];

export const germanDtzSpeaking = [
  {
    id: "de-dtz-s-01",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Prüfungsteil 1: Sich vorstellen (Name, Herkunft, Beruf, Familie)",
    audioPrompt: "Guten Tag! Willkommen zur mündlichen Prüfung des Deutsch-Tests für Zuwanderer. Würden Sie sich bitte kurz vorstellen: Wie heißen Sie, woher kommen Sie, wie lange leben Sie in Deutschland und was machen Sie beruflich?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Stellen Sie sich den Prüfern flüssig vor: Name, Herkunft, Wohnort, Familie, Berufstätigkeit und wie lange Sie Deutsch lernen.",
    modelAnswer: "Guten Tag. Mein Name ist Maria Santos. Ich komme aus Madrid in Spanien und lebe seit drei Jahren in Frankfurt am Main. Von Beruf bin ich ausgebildete Buchhalterin und arbeite derzeit in Teilzeit in einem mittelständischen Logistikunternehmen. Ich bin verheiratet und habe eine sechsjährige Tochter, die vor kurzem eingeschult wurde. In meiner Freizeit lese ich gern deutsche Romane und mache Sport im Verein.",
    criteria: "Flüssige Selbstpräsentation, grammatische Richtigkeit in Präsens und Perfekt, klare Aussprache."
  },
  {
    id: "de-dtz-s-02",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Prüfungsteil 2: Über Erfahrungen sprechen (Wohnungssuche)",
    audioPrompt: "Erzählen Sie uns bitte von Ihren persönlichen Erfahrungen bei der Wohnungssuche in Deutschland: Welche Kriterien waren Ihnen wichtig und wie haben Sie Ihre jetzige Wohnung gefunden?",
    prepSeconds: 20,
    speakSeconds: 60,
    prompt: "Berichten Sie über Ihre Wohnungssuche: Online-Portale, Besichtigungstermine, Anforderungen (Kaltmiete, Lage, Kaution) und Vertragsabschluss.",
    modelAnswer: "Als ich nach Deutschland kam, war die Wohnungssuche eine der größten Herausforderungen. Ich habe täglich auf verschiedenen Internetportalen nach passenden Anzeigen gesucht. Für meine Familie war eine Dreizimmerwohnung mit guter Anbindung an die S-Bahn und in der Nähe einer Grundschule besonders wichtig. Nach zahlreichen Besichtigungen hatten wir Glück: Wir konnten den Vermieter mit vollständigen Unterlagen — Schufa-Auskunft und Gehaltsnachweisen — überzeugen und haben vor zwei Jahren einen unbefristeten Mietvertrag unterschrieben.",
    criteria: "Souveränes Berichten in Vergangenheit (Perfekt/Präteritum), logische Satzverknüpfung."
  },
  {
    id: "de-dtz-s-03",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Prüfungsteil 3: Gemeinsam eine Aufgabe planen (Einweihungsfest)",
    audioPrompt: "Sie und Ihr Prüfungspartner sind vor kurzem in ein neues Mehrfamilienhaus eingezogen und möchten ein Nachbarschaftsfest im Garten organisieren. Planen Sie das Fest gemeinsam: Wann soll es stattfinden, was gibt es zu essen und wie informieren Sie die Nachbarn?",
    prepSeconds: 20,
    speakSeconds: 70,
    prompt: "Führen Sie ein partnerschaftliches Gespräch: Unterbreiten Sie Vorschläge für Datum, Essen, Getränke, Aushang im Treppenhaus und reagieren Sie auf die Ideen Ihres Partners.",
    modelAnswer: "Hallo! Da wir neu im Haus sind, wäre ein kleines Sommerfest im Garten doch eine wunderbare Gelegenheit, alle Nachbarn kennenzulernen. Was hältst du davon, wenn wir das Fest an einem Samstagnachmittag gegen 15 Uhr planen? Wir könnten einen Grill organisieren und die Nachbarn bitten, Salate oder Kuchen mitzubringen. Außerdem sollten wir mindestens zwei Wochen vorher einen freundlichen Zettel im Hausflur aufhängen, damit sich jeder den Termin freihalten kann. Was meinst du dazu?",
    criteria: "Interaktionsfähigkeit, Höflichkeitsformeln, Vorschläge unterbreiten und Kompromisse aushandeln."
  },
  {
    id: "de-dtz-s-04",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Rollenspiel: Reklamation beim Handwerkerdienst",
    audioPrompt: "Guten Tag, Sanitärbetrieb Meißner. Sie haben uns wegen einer undichten Waschmaschine angerufen, die unser Techniker gestern reparieren sollte. Worum geht es genau?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Erklären Sie dem Kundendienstmitarbeiter sachlich, dass die Maschine weiterhin tropft. Verlangen Sie eine kostenfreie Nachbesserung noch für denselben Tag.",
    modelAnswer: "Guten Tag, Herr Meißner. Ihr Kollege war gestern Vormittag bei mir, um die Dichtung der Waschmaschine auszutauschen. Leider habe ich gestern Abend festgestellt, dass beim Schleudergang immer noch Wasser austritt und das Badezimmer unter Wasser steht. Da es sich um eine fehlerhafte Reparatur handelt, bitte ich Sie, heute nochmals einen Techniker zur kostenlosen Nachbesserung vorbeizuschicken, da ich die Maschine dringend benötige.",
    criteria: "Souveräne Reklamationsführung, sachliche Argumentation, Fristsetzung ohne Aggressivität."
  },
  {
    id: "de-dtz-s-05",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Gemeinsam planen: Deutsch-Lernclub an der Volkshochschule",
    audioPrompt: "Sie und Ihr Prüfungspartner möchten einen wöchentlichen Deutsch-Stammtisch gründen, um vor der Abschlussprüfung mehr Sprechpraxis zu sammeln. Besprechen Sie Ort, Uhrzeit, Gesprächsthemen und wie Sie weitere Teilnehmer finden.",
    prepSeconds: 20,
    speakSeconds: 70,
    prompt: "Planen Sie den Stammtisch: Treffpunkt (Café oder Park), wöchentlicher Termin, Themen (Beruf, Kultur, Alltag) und Flyer in der Sprachschule.",
    modelAnswer: "Das ist eine hervorragende Initiative! Um flüssiger für die mündliche Prüfung zu werden, sollten wir uns einmal pro Woche für anderthalb Stunden treffen. Als Treffpunkt schlage ich ein ruhiges Café nahe der Sprachschule vor, zum Beispiel jeden Donnerstag um 17:30 Uhr nach dem Unterricht. Wir könnten für jedes Treffen ein festes Thema vereinbaren, etwa Berufsalltag oder aktuelle Nachrichten. Ich kann gerne einen Flyer entwerfen und ihn am schwarzen Brett der VHS aushängen. Was denkst du darüber?",
    criteria: "Kooperative Dialogführung, Vorschlagskraft, Anknüpfen an Äußerungen des Partners."
  },
  {
    id: "de-dtz-s-06",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Beratungsgespräch: Kita-Platz bei der Stadtverwaltung erfragen",
    audioPrompt: "Guten Tag, Jugendamt Stadtverwaltung. Sie interessieren sich für einen Betreuungsplatz für Ihr Kind. Wie alt ist Ihr Kind und ab wann benötigen Sie die Betreuung?",
    prepSeconds: 15,
    speakSeconds: 60,
    prompt: "Erklären Sie der Sachbearbeiterin Ihre familiäre Situation: Alter des Kindes, Arbeitsaufnahme beider Eltern und gewünschter Ganztagsplatz ab September.",
    modelAnswer: "Guten Tag. Unser Sohn ist jetzt zwei Jahre alt und wir suchen ab dem 1. September einen Ganztagsplatz in einer städtischen Kindertagesstätte. Da mein Mann und ich ab Herbst beide wieder in Vollzeit arbeiten werden, benötigen wir eine tägliche Betreuungszeit von 08:00 bis 16:30 Uhr. Wir haben uns bereits im Online-Kita-Portal registriert, wollten uns aber persönlich erkundigen, ob in unserem Stadtbezirk noch freie Plätze vorhanden sind und welche Nachweise Sie noch benötigen.",
    criteria: "Zielorientiertes Behördengespräch, präzise Schilderung des Bedarfs, korrekte Modalverben."
  },
  {
    id: "de-dtz-s-07",
    subtest: "speaking",
    taskType: "monologue",
    title: "Monolog: Meine berufliche Integration in Deutschland",
    audioPrompt: null,
    prepSeconds: 30,
    speakSeconds: 90,
    prompt: "Sprechen Sie zusammenhängend über Ihren beruflichen Werdegang: Ihre Ausbildung im Heimatland, die Anerkennung Ihrer Abschlüsse, Ihre bisherigen Erfahrungen und Ihre beruflichen Ziele für die Zukunft.",
    modelAnswer: "In meinem Heimatland habe ich eine vierjährige Ausbildung im Bereich Elektrotechnik abgeschlossen und mehrere Jahre als Installateur gearbeitet. Als ich vor drei Jahren nach Deutschland kam, war mein erstes großes Ziel das Erlernen der deutschen Sprache, da Fachbegriffe auf der Baustelle unverzichtbar sind. Gleichzeitig habe ich meine Zeugnisse bei der Handwerkskammer zur Anerkennung eingereicht, was erfolgreich als gleichwertiger Gesellenabschluss anerkannt wurde. Seit einem Jahr arbeite ich nun bei einem Installationsbetrieb für Solaranlagen. Mein langfristiges Ziel ist es, in den nächsten Jahren die Meisterprüfung abzulegen und Führungsverantwortung für Auszubildende zu übernehmen.",
    criteria: "Strukturierte Narration, chronologische Verknüpfung, Einsatz von Fachwortschatz und Zukunftsformen."
  },
  {
    id: "de-dtz-s-08",
    subtest: "speaking",
    taskType: "monologue",
    title: "Monolog: Ehrenamtliches Engagement und Zusammenhalt",
    audioPrompt: null,
    prepSeconds: 30,
    speakSeconds: 90,
    prompt: "Erläutern Sie die Bedeutung des ehrenamtlichen Engagements (Vereine, Nachbarschaftshilfe, Feuerwehr) für das gesellschaftliche Leben in Deutschland und schildern Sie eigene Aktivitäten.",
    modelAnswer: "Das Vereinsleben und das freiwillige Ehrenamt bilden das Herzstück des gesellschaftlichen Zusammenhalts in Deutschland. Über sechsunddreißig Prozent der Bürger engagieren sich in ihrer Freizeit ohne Bezahlung — sei es bei der Freiwilligen Feuerwehr, im Sportverein oder bei Hilfsorganisationen wie dem Roten Kreuz. Ich selbst engagiere mich seit zwei Jahren ehrenamtlich in der örtlichen Bürgerstiftung und gebe Geflüchteten einmal wöchentlich Nachhilfe in deutscher Konversation. Dieses Engagement stärkt nicht nur die Demokratie und hilft Mitmenschen, sondern ermöglicht auch persönliche Begegnungen auf Augenhöhe zwischen Menschen unterschiedlichster Herkunft.",
    criteria: "Ausdrucksstarker Vortrag, differenzierter B1/B2-Wortschatz, überzeugende persönliche Reflexion."
  }
];

export const germanExamPools = {
  dtzA2B1: {
    levelKey: "dtzA2B1",
    title: "BAMF Deutsch-Test für Zuwanderer (DTZ A2–B1 • Einbürgerung)",
    badge: "BAMF DTZ • Staatsbürgerschaft",
    description: "Offizieller Nachweis für Einbürgerung (B1) und unbefristete Niederlassungserlaubnis (A2/B1). Umfasst behördliche Kommunikation, Arbeitssuche, Mietverträge und Alltag.",
    reading: germanDtzReading,
    writing: germanDtzWriting,
    listening: germanDtzListening,
    speaking: germanDtzSpeaking
  }
};

/**
 * Generates an authentic, fresh German BAMF DTZ & Goethe CBT exam session
 * prioritizing unseen questions for the logged-in user on every attempt.
 * 
 * @param {string} levelKey - 'dtzA2B1' | 'goetheB2' | 'testdafC1'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @param {Set<string>} seenQuestionIds - IDs of questions previously attempted by the user
 * @returns {object} Randomized German exam session object
 */
export function generateGermanDynamicExam(levelKey = "dtzA2B1", subtestFilter = "all", seenQuestionIds = new Set()) {
  const pool = germanExamPools[levelKey] || germanExamPools.dtzA2B1;

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
  let subtestLabel = "Offizielle BAMF DTZ Prüfungssimulation (4 Fertigkeiten)";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = 45;
    subtestLabel = "Leseverstehen (Authentische Dokumente • 45 min)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = 30;
    subtestLabel = "Schriftlicher Ausdruck (Behördenbriefe & Stellungnahme • 30 min)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = 25;
    subtestLabel = "Hörverstehen (Originalgetreue Audioansagen • 25 min)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = 16;
    subtestLabel = "Mündliche Prüfung (Paarprüfung & Präsentation • 16 min)";
  } else {
    // "all" - Full official simulation
    questions = [
      ...selectedReading,
      ...selectedWriting,
      ...selectedListening,
      ...selectedSpeaking
    ];
    durationMinutes = 116;
    subtestLabel = "Gesamtprüfung BAMF DTZ / Goethe (4 Prüfungsteile • 19 Aufgaben)";
  }

  const isBrandNewSession = 
    (subtestFilter === "reading" && readingResult.isBrandNew) ||
    (subtestFilter === "writing" && messagesResult.isBrandNew && essaysResult.isBrandNew) ||
    (subtestFilter === "listening" && listeningResult.isBrandNew) ||
    (subtestFilter === "speaking" && dialoguesResult.isBrandNew && monologuesResult.isBrandNew) ||
    (subtestFilter === "all" && readingResult.isBrandNew && messagesResult.isBrandNew && listeningResult.isBrandNew);

  const sessionId = `de-${levelKey}-${subtestFilter}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

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
