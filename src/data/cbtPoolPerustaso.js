// YKI Perustaso (CEFR A1–A2) Official CBT Question Pool
// 30 Reading Comprehension | 30 Writing | 30 Listening Comprehension | 30 Speaking

export const perustasoReading = [
  {
    id: "pe-r-1",
    subtest: "reading",
    title: "Kahvilan aukioloajat",
    passage: `KAHVILA AURINKO
Avoinna:
Maanantai - Perjantai: 07:30 - 18:00
Lauantai: 09:00 - 16:00
Sunnuntai: Suljettu

Lounas tarjoillaan arkisin klo 11:00 - 14:00 (keitto ja leipä 8,50 €).
Tervetuloa!`,
    prompt: "Milloin Kahvila Aurinko tarjoilee lounasta?",
    options: [
      "A) Vain lauantaisin klo 09:00 - 16:00",
      "B) Maanantaista perjantaihin klo 11:00 - 14:00",
      "C) Joka päivä aamusta iltaan",
      "D) Sunnuntaisin klo 12:00 - 15:00"
    ],
    correctAnswer: "B) Maanantaista perjantaihin klo 11:00 - 14:00",
    explanation: "Tekstissä lukee selvästi: 'Lounas tarjoillaan arkisin klo 11:00 - 14:00'."
  },
  {
    id: "pe-r-2",
    subtest: "reading",
    title: "Kirjaston ilmoitus",
    passage: `PÄÄKIRJASTON REMONTTI
Pääkirjasto on suljettu huoltotöiden vuoksi 1.–5. toukokuuta.
Lainoja voi palauttaa ulkona olevaan palautusluukkuun vuorokauden ympäri.
Lähin avoinna oleva kirjasto on Kallion lähikirjasto (avoinna arkisin 10–19).`,
    prompt: "Miten asiakkaat voivat palauttaa kirjoja pääkirjaston remontin aikana?",
    options: [
      "A) Kirjoja ei voi palauttaa lainkaan toukokuussa",
      "B) Ulkona olevaan palautusluukkuun milloin vain",
      "C) Vain postittamalla kirjat kotiin",
      "D) Ainoastaan Kallion kirjaston tiskille klo 10–19"
    ],
    correctAnswer: "B) Ulkona olevaan palautusluukkuun milloin vain",
    explanation: "Ilmoitus kertoo: 'Lainoja voi palauttaa ulkona olevaan palautusluukkuun vuorokauden ympäri'."
  },
  {
    id: "pe-r-3",
    subtest: "reading",
    title: "Asunnon vuokrailmoitus",
    passage: `VUOKRATAAN KAKSIO TÖÖLÖSSÄ
Valoisa 2 huonetta + keittiö (48 m²), 3. kerros, hissi on.
Vuokra: 820 €/kk + vesimaksu 25 €/hlö/kk.
Vapautuu 1. kesäkuuta. Ei tupakointia, ei lemmikkejä.
Yhteydenotot: matti.vuokra@posti.fi tai puh. 040 555 1234.`,
    prompt: "Mitä vuokralaiselta vaaditaan ilmoituksen mukaan?",
    options: [
      "A) Vuokralaisella täytyy olla oma koira",
      "B) Asunnossa ei saa tupakoida eikä pitää lemmikkieläimiä",
      "C) Vuokra on maksettava käteisellä joka perjantai",
      "D) Asuntoon pitää muuttaa jo toukokuussa"
    ],
    correctAnswer: "B) Asunnossa ei saa tupakoida eikä pitää lemmikkieläimiä",
    explanation: "Ilmoituksessa todetaan: 'Ei tupakointia, ei lemmikkejä'."
  },
  {
    id: "pe-r-4",
    subtest: "reading",
    title: "Uimahallin hinnasto",
    passage: `TAMPEREEN UIMAHALLI
Kertamaksu aikuiset: 6,50 €
Lapset (alle 12 v), opiskelijat ja eläkeläiset: 4,00 €
10 kerran sarjalippu aikuiset: 55,00 €
Sauna ja poreallas sisältyvät aina hintaan!`,
    prompt: "Kuinka paljon opiskelijan uintilippu maksaa?",
    options: ["A) 6,50 €", "B) 4,00 €", "C) 55,00 €", "D) Ilmainen"],
    correctAnswer: "B) 4,00 €",
    explanation: "Hinnaston mukaan opiskelijat maksavat 4,00 €."
  },
  {
    id: "pe-r-5",
    subtest: "reading",
    title: "Sähköposti opettajalta",
    passage: `Hei kurssilaiset!
Muistutan, että ensi maanantaina 12. lokakuuta meillä ei ole suomen kielen tuntia, koska koulu on suljettu opettajien koulutuspäivän vuoksi.
Kotitehtävänä on lukea kirjan kappale 6 ja tehdä tehtävät 1–4.
Nähdään keskiviikkona!
Terveisin, Minna-opettaja`,
    prompt: "Miksi suomen kurssin oppituntia ei pidetä maanantaina?",
    options: [
      "A) Opettaja on sairaana",
      "B) Koulu on suljettu opettajien koulutuspäivän takia",
      "C) Kurssi on loppunut kokonaan",
      "D) Oppilaat ovat lomalla"
    ],
    correctAnswer: "B) Koulu on suljettu opettajien koulutuspäivän takia",
    explanation: "Viestissä sanotaan: 'koulu on suljettu opettajien koulutuspäivän vuoksi'."
  },
  {
    id: "pe-r-6",
    subtest: "reading",
    title: "Lääkärin vastaanotto",
    passage: `TERVEYSASEMAN OHJE POTILAALLE:
Saavu vastaanotolle noin 10 minuuttia ennen varattua aikaa.
Ilmoittaudu automaatilla Kela-kortilla tai henkilökortilla.
Jos sinulla on hengitystieoireita (yskä, kuume), pue kasvomaski ennen odotustilaan astumista.`,
    prompt: "Mitä potilaan pitää tehdä, jos hänellä on yskää tai kuumetta?",
    options: [
      "A) Jäädä ulos odottamaan lääkäriä",
      "B) Laittaa kasvomaski ennen kuin menee odotustilaan",
      "C) Maksaa kaksinkertainen maksu",
      "D) Palata kotiin ilman tutkimusta"
    ],
    correctAnswer: "B) Laittaa kasvomaski ennen kuin menee odotustilaan",
    explanation: "Ohje: 'Jos sinulla on hengitystieoireita... pue kasvomaski ennen odotustilaan astumista'."
  },
  {
    id: "pe-r-7",
    subtest: "reading",
    title: "Bussiaikataulu",
    passage: `LINJA 550: ITÄKESKUS - ESPOO
Lähdöt arkisin 10 minuutin välein klo 06:00 - 20:00.
Viikonloppuisin lähdöt 15 minuutin välein.
Lippu ostettava etukäteen HSL-sovelluksesta tai automaatista. Kuljettaja ei myy lippuja.`,
    prompt: "Voiko bussissa ostaa lipun kuljettajalta?",
    options: [
      "A) Kyllä, vain käteisellä",
      "B) Kyllä, vain pankkikortilla",
      "C) Ei, kuljettaja ei myy lippuja",
      "D) Kyllä, jos matka on lyhyt"
    ],
    correctAnswer: "C) Ei, kuljettaja ei myy lippuja",
    explanation: "Aikataulussa lukee selvästi: 'Kuljettaja ei myy lippuja'."
  },
  {
    id: "pe-r-8",
    subtest: "reading",
    title: "Kierrätysohje taloyhtiössä",
    passage: `JÄTTEIDEN LAJITTELU:
Biojäte: ruoantähteet, hedelmien kuoret, kahvinporot (käytä paperipussia).
Kartonki: maitotölkit, pahvilaatikot (litistä laatikot tilan säästämiseksi).
Sekajäte: vaipat, rikkinäiset astiat, pölypussit.
Älä laita metallia tai lasia sekajätteeseen!`,
    prompt: "Miten pahvilaatikot tulee käsitellä ennen keräysastiaan laittamista?",
    options: [
      "A) Ne täytyy kastella vedellä",
      "B) Ne täytyy litistää tilan säästämiseksi",
      "C) Ne täytyy polttaa",
      "D) Ne pitää laittaa biojätepussiin"
    ],
    correctAnswer: "B) Ne täytyy litistää tilan säästämiseksi",
    explanation: "Ohjeessa lukee: 'litistä laatikot tilan säästämiseksi'."
  },
  {
    id: "pe-r-9",
    subtest: "reading",
    title: "Työpaikan lounaslista",
    passage: `RAVINTOLA PUISTO - PERJANTAI
1. Lohikeitto ja ruisleipä (L, G) 9,90 €
2. Kasvislasagne ja vihersalaatti (VL) 8,90 €
3. Kanapasta ja parmesaani 10,50 €
Kaikkiin annoksiin kuuluu kahvi tai tee ja pieni jälkiruoka.`,
    prompt: "Mitä jokaiseen lounasannokseen sisältyy automaattisesti?",
    options: [
      "A) Limonadi tai mehu",
      "B) Kahvi tai tee ja pieni jälkiruoka",
      "C) Hampurilainen ja ranskalaiset",
      "D) Kakkupala ja jäätelö"
    ],
    correctAnswer: "B) Kahvi tai tee ja pieni jälkiruoka",
    explanation: "Listassa todetaan: 'Kaikkiin annoksiin kuuluu kahvi tai tee ja pieni jälkiruoka'."
  },
  {
    id: "pe-r-10",
    subtest: "reading",
    title: "Kuntosalin säännöt",
    passage: `KUNTOSALIN SÄÄNNÖT:
1. Käytä aina puhtaita sisäkenkiä salilla.
2. Pyyhi laitteet käytön jälkeen desinfiointiliinalla.
3. Palauta painot omille paikoilleen treenin jälkeen.
4. Salin ovi aukeaa henkilökohtaisella avainkortilla klo 05–23.`,
    prompt: "Mitä kuntosalin käyttäjän on tehtävä laitteelle käytön jälkeen?",
    options: [
      "A) Pyyhittävä laite desinfiointiliinalla",
      "B) Siirrettävä laite toiseen huoneeseen",
      "C) Jätettävä pyyhe laitteen päälle varaukseksi",
      "D) Sammutettava salin valot"
    ],
    correctAnswer: "A) Pyyhittävä laite desinfiointiliinalla",
    explanation: "Sääntö 2: 'Pyyhi laitteet käytön jälkeen desinfiointiliinalla'."
  },
  {
    id: "pe-r-11",
    subtest: "reading",
    title: "Tapaamiskutsu",
    passage: `Moi Ville!
Mennäänkö lauantaina leffaan katsomaan se uusi suomalainen komedia?
Näytös alkaa Tennispalatsissa klo 17:30. Voitaisiin käydä pizzalla ennen sitä klo 16:00.
Sopiiko sinulle? Vastaa pian, niin varaan liput!
T. Sami`,
    prompt: "Mitä Sami ehdottaa tehtäväksi ennen elokuvan alkua?",
    options: [
      "A) Käydä kuntosalilla",
      "B) Käydä syömässä pizzaa klo 16:00",
      "C) Ostaa uusi televisio",
      "D) Tavata leffateatterin edessä klo 18:00"
    ],
    correctAnswer: "B) Käydä syömässä pizzaa klo 16:00",
    explanation: "Viestissä ehdotetaan: 'Voitaisiin käydä pizzalla ennen sitä klo 16:00'."
  },
  {
    id: "pe-r-12",
    subtest: "reading",
    title: "Apteekin tiedote",
    passage: `APTEEKIN ROINATEISTO
Reseptilääkkeiden uusiminen kestää tavallisesti 2–3 arkipäivää.
Muistathan uusia reseptisi hyvissä ajoin ennen lääkkeen loppumista OmaKanta-palvelussa tai asioimalla suoraan apteekissa henkilöllisyystodistuksen kanssa.`,
    prompt: "Kuinka kauan reseptin uusiminen tavallisesti kestää?",
    options: [
      "A) Vain 10 minuuttia",
      "B) 2–3 arkipäivää",
      "C) Kaksi viikkoa",
      "D) Yhden kuukauden"
    ],
    correctAnswer: "B) 2–3 arkipäivää",
    explanation: "Tiedotteen mukaan: 'kestää tavallisesti 2–3 arkipäivää'."
  },
  {
    id: "pe-r-13",
    subtest: "reading",
    title: "Päiväkodin viesti vanhemmille",
    passage: `Hyvät vanhemmat!
Huomenna keskiviikkona retkeilemme läheiseen metsään klo 09:30–12:00.
Lapsilla tulee olla säänmukaiset vaatteet, kumisaappaat ja sadevarusteet.
Päiväkoti tarjoaa lapsille eväsleivät ja lämmintä mehua.`,
    prompt: "Mitä vanhempien tulee huolehtia lapselle retkipäiväksi?",
    options: [
      "A) Omat eväsleivät ja juomapullo",
      "B) Säänmukaiset vaatteet, kumisaappaat ja sadevarusteet",
      "C) Rahaa linja-autolippuun",
      "D) Polkupyörä ja kypärä"
    ],
    correctAnswer: "B) Säänmukaiset vaatteet, kumisaappaat ja sadevarusteet",
    explanation: "Viestissä pyydetään: 'Lapsilla tulee olla säänmukaiset vaatteet, kumisaappaat ja sadevarusteet'."
  },
  {
    id: "pe-r-14",
    subtest: "reading",
    title: "Vaatekaupan alennusmyynti",
    passage: `KESÄALE ON ALKANUT!
Kaikki kesävaatteet ja -kengät nyt -50 %!
Tarjous voimassa vain tämän viikon sunnuntaihin saakka.
Avoinna arkisin 10–20, lauantaina 10–18 ja sunnuntaina 12–16.
Tervetuloa tekemään löytöjä!`,
    prompt: "Mihin saakka alennusmyynti on voimassa?",
    options: [
      "A) Koko kesän loppuun",
      "B) Tämän viikon sunnuntaihin saakka",
      "C) Vain tänään perjantaina",
      "D) Ensi kuun alkuun"
    ],
    correctAnswer: "B) Tämän viikon sunnuntaihin saakka",
    explanation: "Mainos: 'Tarjous voimassa vain tämän viikon sunnuntaihin saakka'."
  },
  {
    id: "pe-r-15",
    subtest: "reading",
    title: "Hotellin varausvahvistus",
    passage: `VARAUSVAHVISTUS - HOTELLI KANTO
Huonetyyppi: Standard kahden hengen huone
Sisäänkirjautuminen: 14. heinäkuuta klo 15:00 alkaen
Uloskirjautuminen: 16. heinäkuuta klo 12:00 mennessä
Aamiainen sisältyy hintaan ja tarjoillaan arkisin 07:00–10:00.`,
    prompt: "Mihin aikaan mennessä hotellihuoneesta täytyy kirjautua ulos?",
    options: ["A) Klo 15:00", "B) Klo 12:00 mennessä", "C) Klo 10:00", "D) Klo 07:00"],
    correctAnswer: "B) Klo 12:00 mennessä",
    explanation: "Vahvistuksessa lukee: 'Uloskirjautuminen: 16. heinäkuuta klo 12:00 mennessä'."
  },
  {
    id: "pe-r-16",
    subtest: "reading",
    title: "Postin saapumisilmoitus",
    passage: `SINULLE ON SAAPUNUT PAKETTI!
Lähettäjä: Verkkokauppa Oy
Noutopaikka: Postin pakettiautomaatti, K-Citymarket Kamppi
Noutokoodi: 489211
Viimeinen noutopäivä: 24. syyskuuta klo 21:00. Paketti palautetaan lähettäjälle tämän jälkeen.`,
    prompt: "Mitä tapahtuu paketille, jos sitä ei noudeta 24. syyskuuta mennessä?",
    options: [
      "A) Posti heittää sen roskakoriin",
      "B) Paketti palautetaan takaisin lähettäjälle",
      "C) Asiakas saa 50 euron sakon",
      "D) Paketti siirretään toiseen kaupunkiin"
    ],
    correctAnswer: "B) Paketti palautetaan takaisin lähettäjälle",
    explanation: "Ilmoitus: 'Paketti palautetaan lähettäjälle tämän jälkeen'."
  },
  {
    id: "pe-r-17",
    subtest: "reading",
    title: "Autokorjaamon ilmoitus",
    passage: `RENKAANVAIHTOPÄIVÄT
Vaihda talvirenkaat ajoissa ennen liukkaita kelejä!
Ajanvaraus netissä tai suoraan drive-in-palvelusta arkisin 08:00 - 17:00.
Renkaiden vaihto: 35 €
Renkaiden kausisäilytys: 65 € / kausi (sisältää pesun).`,
    prompt: "Mitä renkaiden kausisäilytyksen 65 euron hintaan sisältyy?",
    options: [
      "A) Uudet renkaat",
      "B) Säilytys ja renkaiden pesu",
      "C) Auton katsastus",
      "D) Moottoriöljyn vaihto"
    ],
    correctAnswer: "B) Säilytys ja renkaiden pesu",
    explanation: "Hinnaston mukaan: '65 € / kausi (sisältää pesun)'."
  },
  {
    id: "pe-r-18",
    subtest: "reading",
    title: "Hammaslääkäriaika",
    passage: `MUISTUTUS HAMMASLÄÄKÄRIAJASTA
Aikanne hammastarkastukseen on torstaina 18. marraskuuta klo 10:15.
Osoite: Hammasklinikka Hymy, Mannerheimintie 14 B, 4. krs.
Peruutus on tehtävä vähintään 24 tuntia ennen vastaanottoa. Peruuttamattomasta ajasta laskutamme 50 €.`,
    prompt: "Milloin aika on viimeistään peruttava ilman sakkomaksua?",
    options: [
      "A) Tuntia ennen vastaanottoa",
      "B) Vähintään 24 tuntia ennen vastaanottoa",
      "C) Vasta seuraavana päivänä",
      "D) Aikaa ei voi perua lainkaan"
    ],
    correctAnswer: "B) Vähintään 24 tuntia ennen vastaanottoa",
    explanation: "Teksti: 'Peruutus on tehtävä vähintään 24 tuntia ennen vastaanottoa'."
  },
  {
    id: "pe-r-19",
    subtest: "reading",
    title: "Koirapuiston säännöt",
    passage: `HELSINGIN KAUPUNKI — KOIRAPUISTON SÄÄNNÖT:
- Sulje puiston portti heti perässäsi.
- Pidä koirasi vapaana vain aitauksen sisällä.
- Kerää aina koirasi ulosteet roskakoriin (roskapusseja saatavilla portilla).
- Vihainen tai sairas koira ei saa tulla puistoon.`,
    prompt: "Mitä säännöt sanovat koirien jätöksistä puistossa?",
    options: [
      "A) Ne saa jättää nurmikolle",
      "B) Ne on aina kerättävä roskakoriin",
      "C) Ne pitää viedä omaan kotiin",
      "D) Puistossa ei saa ulkoiluttaa koiria"
    ],
    correctAnswer: "B) Ne on aina kerättävä roskakoriin",
    explanation: "Sääntö: 'Kerää aina koirasi ulosteet roskakoriin'."
  },
  {
    id: "pe-r-20",
    subtest: "reading",
    title: "Naapurin viesti rapussa",
    passage: `Hei naapurit!
Vietän syntymäpäivääni asunnossa A 12 tänä lauantaina 20. huhtikuuta.
Asunnostamme saattaa kuulua musiikkia ja puheensorinaa klo 23:00 saakka.
Pahoittelen mahdollista häiriötä ja toivotan kaikille mukavaa viikonloppua!
Terveisin, Laura`,
    prompt: "Mihin kellonaikaan saakka juhlista saattaa kuulua ääntä?",
    options: [
      "A) Koko yön aamuun asti",
      "B) Klo 23:00 saakka",
      "C) Vain klo 18:00 asti",
      "D) Vain sunnuntaina aamulla"
    ],
    correctAnswer: "B) Klo 23:00 saakka",
    explanation: "Lauran ilmoitus: 'saattaa kuulua musiikkia ja puheensorinaa klo 23:00 saakka'."
  },
  {
    id: "pe-r-21",
    subtest: "reading",
    title: "Nuorisotalon kerhotoiminta",
    passage: `ILMAISET HARRASTEKERHOT 10–16-VUOTIAILLE:
- Keskiviikkoisin klo 16–18: Kokkikerho
- Torstaisin klo 17–19: Koodaus- ja pelikerho
- Perjantaisin klo 17–20: Bänditreenit ja musiikki
Kaikki kerhot ovat maksuttomia. Ilmoittautuminen paikan päällä!`,
    prompt: "Paljonko kerhoihin osallistuminen maksaa?",
    options: ["A) 20 euroa kuussa", "B) 5 euroa kerralta", "C) Ei mitään (maksuttomia)", "D) 100 euroa vuodessa"],
    correctAnswer: "C) Ei mitään (maksuttomia)",
    explanation: "Ilmoitus kertoo: 'Kaikki kerhot ovat maksuttomia'."
  },
  {
    id: "pe-r-22",
    subtest: "reading",
    title: "Museon sisäänpääsy",
    passage: `SUOMEN KANSALLISMUSEO
Liput: Aikuiset 14 €, alle 18-vuotiaat vapaa pääsy.
Huom: Joka kuukauden ensimmäisenä perjantaina vapaa pääsy kaikille klo 16:00 - 18:00!
Opastetut kierrokset lauantaisin klo 14:00 suomeksi ja klo 15:00 englanniksi.`,
    prompt: "Milloin museoon pääsee ilmaiseksi kuka tahansa?",
    options: [
      "A) Joka lauantai aamupäivällä",
      "B) Joka kuukauden ensimmäisenä perjantaina klo 16–18",
      "C) Vain jouluaattona",
      "D) Museoon ei koskaan pääse ilmaiseksi"
    ],
    correctAnswer: "B) Joka kuukauden ensimmäisenä perjantaina klo 16–18",
    explanation: "Teksti: 'Joka kuukauden ensimmäisenä perjantaina vapaa pääsy kaikille klo 16:00 - 18:00'."
  },
  {
    id: "pe-r-23",
    subtest: "reading",
    title: "Työpaikan kahvihuoneen lappu",
    passage: `KAHVINJUOJAT HUOMIO!
Kuka ottaa pannusta viimeisen kupillisen kahvia, keittää uuden pannullisen tai sammuttaa keittimen virtakytkimen.
Pestään myös omat kahvikupit ja laitetaan ne tiskikoneeseen.
Pidetään taukohuone siistinä yhdessä!`,
    prompt: "Mitä työntekijän tulee tehdä, jos hän juo viimeisen kahvikupillisen?",
    options: [
      "A) Lähteä heti kotiin",
      "B) Keittää uusi pannullinen tai sammuttaa keitin",
      "C) Ostaa uusi kahvinkeitin kaupasta",
      "D) Jättää pannu tyhjäksi ja likaiseksi"
    ],
    correctAnswer: "B) Keittää uusi pannullinen tai sammuttaa keitin",
    explanation: "Lappu ohjeistaa: 'keittää uuden pannullisen tai sammuttaa keittimen virtakytkimen'."
  },
  {
    id: "pe-r-24",
    subtest: "reading",
    title: "Taloyhtiön saunavuorot",
    passage: `TALOSAUNAN VUOROT:
Miesten lenkkisauna: Keskiviikko klo 18:00 - 20:00
Naisten lenkkisauna: Keskiviikko klo 20:00 - 22:00
Perhesaunavuorot (varattava huoltoyhtiöltä): Perjantaisin ja lauantaisin klo 16:00 - 22:00.
Saunamaksu omaan vuoroon on 12 €/kk.`,
    prompt: "Milloin naisten yleinen lenkkisauna lämpiää?",
    options: [
      "A) Keskiviikkoisin klo 20:00 - 22:00",
      "B) Perjantaisin klo 16:00 - 18:00",
      "C) Lauantaisin klo 10:00 - 12:00",
      "D) Joka aamu klo 08:00"
    ],
    correctAnswer: "A) Keskiviikkoisin klo 20:00 - 22:00",
    explanation: "Listan mukaan: 'Naisten lenkkisauna: Keskiviikko klo 20:00 - 22:00'."
  },
  {
    id: "pe-r-25",
    subtest: "reading",
    title: "Kadonneen kissan ilmoitus",
    passage: `KADONNUT KISSA!
Raidallinen harmaa maatiaiskissa 'Misse' katosi Puistokadulta tiistaina 5. toukokuuta.
Kissalla on punainen panta, jossa on puhelinnumero. Se on arka mutta ihmisystävällinen.
Jos näet Missen, soita viipymättä numeroon 050 987 6543. Löytöpalkkio 100 €!`,
    prompt: "Mistä kadonneen kissan voi tunnistaa?",
    options: [
      "A) Se on musta ja sillä on siniset kengät",
      "B) Se on raidallinen harmaa kissa, jolla on punainen panta",
      "C) Se on iso valkoinen koira",
      "D) Sillä on keltainen huivi"
    ],
    correctAnswer: "B) Se on raidallinen harmaa kissa, jolla on punainen panta",
    explanation: "Teksti: 'Raidallinen harmaa maatiaiskissa 'Misse'... punainen panta'."
  },
  {
    id: "pe-r-26",
    subtest: "reading",
    title: "Taidemuseon opas",
    passage: `VALOKUVAUS MUSEOSSA:
Valokuvaaminen näyttelytiloissa omaan yksityiskäyttöön on sallittua ilman salamaa.
Salaman ja jalustan käyttö on ehdottomasti kielletty taideteosten suojelemiseksi.
Reput ja isot laukut tulee jättää lukollisiin säilytyslokeroihin alakertaan.`,
    prompt: "Onko valokuvaaminen sallittua näyttelytiloissa?",
    options: [
      "A) Ei lainkaan, valokuvaus on täysin kielletty",
      "B) Kyllä, omaan käyttöön mutta vain ilman salamaa",
      "C) Vain jos käyttää isoa jalustaa ja kirkasta salamaa",
      "D) Vain museon henkilökunnalle"
    ],
    correctAnswer: "B) Kyllä, omaan käyttöön mutta vain ilman salamaa",
    explanation: "Opas kertoo: 'sallittua ilman salamaa'."
  },
  {
    id: "pe-r-27",
    subtest: "reading",
    title: "Kirpputorin pöytävaraus",
    passage: `ITSEPALVELUKIRPPIS AARRE
Vuokraa myyntipöytä viikoksi hintaan 32 €!
Tuot vain puhtaat ja ehjät vaatteesi ja tavarasi myyntiin. Me hoidamme myynnin puolestasi.
Myyntitulot maksetaan tilillesi viikon päätteeksi (provisio 5 % kokonaismyynnistä).`,
    prompt: "Mitä kirpputorille saa tuoda myyntiin?",
    options: [
      "A) Likaisia ja rikkinäisiä vaatteita",
      "B) Puhtaita ja ehjiä vaatteita ja tavaroita",
      "C) Vain autoja ja huonekaluja",
      "D) Eläviä lemmikkejä"
    ],
    correctAnswer: "B) Puhtaita ja ehjiä vaatteita ja tavaroita",
    explanation: "Teksti edellyttää: 'Tuot vain puhtaat ja ehjät vaatteesi ja tavarasi myyntiin'."
  },
  {
    id: "pe-r-28",
    subtest: "reading",
    title: "Kaupan kuitin palautusehdot",
    passage: `VAIHTO- JA PALAUTUSOIKEUS:
Käyttämättömillä tuotteilla on 14 päivän vaihto- ja palautusoikeus ostokuitin kanssa.
Tuotteen tulee olla alkuperäisessä pakkauksessa ja myyntikunnossa.
Alusvaatteilla ja korvakoruilla ei ole hygienia-syistä palautusoikeutta.`,
    prompt: "Mitä asiakas tarvitsee tuotteen palauttamiseen?",
    options: [
      "A) Ostokuitin ja tuotteen alkuperäisessä pakkauksessa",
      "B) Passin ja poliisitodistuksen",
      "C) Naapurin allekirjoituksen",
      "D) Vain käteistä rahaa"
    ],
    correctAnswer: "A) Ostokuitin ja tuotteen alkuperäisessä pakkauksessa",
    explanation: "Ehdot: 'ostokuitin kanssa... alkuperäisessä pakkauksessa ja myyntikunnossa'."
  },
  {
    id: "pe-r-29",
    subtest: "reading",
    title: "Sääennuste viikonlopulle",
    passage: `SÄÄ TIEDOTE ETELÄ-SUOMEEN:
Lauantaina on aurinkoista ja lämmintä, lämpötila kohoaa 22 asteeseen. Heikkoa lounaistuulta.
Sunnuntaina sää muuttuu pilviseksi: iltapäivällä saadaan sadekuuroja ja lämpötila laskee 16 asteeseen.`,
    prompt: "Millaista säätä sunnuntai-iltapäivälle on luvassa?",
    options: [
      "A) Kovaa lumimyrskyä ja pakkasta",
      "B) Pilvistä ja sadekuuroja, lämpötila noin 16 astetta",
      "C) Helleaalto ja 30 astetta lämmintä",
      "D) Täysin aurinkoista ja kuivaa"
    ],
    correctAnswer: "B) Pilvistä ja sadekuuroja, lämpötila noin 16 astetta",
    explanation: "Ennuste: 'Sunnuntaina... iltapäivällä saadaan sadekuuroja ja lämpötila laskee 16 asteeseen'."
  },
  {
    id: "pe-r-30",
    subtest: "reading",
    title: "Koulun vanhempainilta",
    passage: `KUTSU VANHEMPAINILTAAN
Tervetuloa 3. luokan lukuvuoden aloittavaan vanhempainiltaan tiistaina 1. syyskuuta klo 18:00 koulun ruokasaliin.
Käsittelemme lukuvuoden tavoitteita, kouluruokailua ja luokan retkisuunnitelmia.
Kahvitarjoilu klo 17:45 alkaen.
Ystävällisin terveisin, Luokanopettaja Timo`,
    prompt: "Mistä asioista vanhempainillassa keskustellaan?",
    options: [
      "A) Koulun myymisestä yritykselle",
      "B) Lukuvuoden tavoitteista, kouluruokailusta ja retkisuunnitelmista",
      "C) Vain opettajan omista lomamatkoista",
      "D) Koulurakennuksen purkamisesta"
    ],
    correctAnswer: "B) Lukuvuoden tavoitteista, kouluruokailusta ja retkisuunnitelmista",
    explanation: "Kutsussa lukee: 'Käsittelemme lukuvuoden tavoitteita, kouluruokailua ja luokan retkisuunnitelmia'."
  }
];

export const perustasoWriting = [
  // 20 Practical Messages (informal / semi-formal)
  {
    id: "pe-w-1",
    subtest: "writing",
    taskType: "message",
    title: "Viesti naapurille (Postipaketti)",
    prompt: "Olet tilannut postipaketin, mutta et ole kotona kun lähetti saapuu. Kirjoita lyhyt ystävällinen viesti naapurillesi Laurille.\n\nKerro viestissä:\n- Miksi kirjoitat\n- Pyydä häntä ottamaan paketti vastaan puolestasi\n- Milloin tulet hakemaan paketin hänen luotaan ja kiitä avusta.",
    minWords: 30,
    modelResponse: "Hei Lauri! Olen tilannut postipaketin kotiin, mutta olen tänään töissä iltaan asti. Voisitko ottaa paketin vastaan puolestani, jos lähetti soittaa ovikelloasi? Tulen hakemaan sen tänään illalla noin kello kahdeksan. Kiitos tosi paljon avusta! Terveisin, Alex"
  },
  {
    id: "pe-w-2",
    subtest: "writing",
    taskType: "message",
    title: "Sähköposti opettajalle (Poissaolo)",
    prompt: "Olet flunssassa etkä pääse tänään suomen kielen tunnille. Kirjoita sähköposti opettajallesi Hannalle.\n\nKerro viestissä:\n- Miksi et pääse tunnille\n- Kysy mitä kotitehtäviä tunnilla annetaan\n- Kerro milloin toivot palaavasi kouluun.",
    minWords: 30,
    modelResponse: "Hei Hanna! Olen valitettavasti sairaana flunssassa ja minulla on kuumetta, joten en pääse tänään suomen kielen kurssille. Voisitko lähettää minulle sähköpostilla tiedon kotitehtävistä? Toivon, että olen terve jo keskiviikkona ja pääsen taas tunnille. Ystävällisin terveisin, Maria"
  },
  {
    id: "pe-w-3",
    subtest: "writing",
    taskType: "message",
    title: "Viesti ystävälle (Lounastapaaminen)",
    prompt: "Haluat tavata ystäväsi Mikan lounaalla viikonloppuna. Kirjoita hänelle tekstiviesti.\n\nKerro viestissä:\n- Ehdota päivää ja kellonaikaa\n- Ehdota ravintolaa tai ruokapaikkaa\n- Pyydä häntä vastaamaan sopiiko aika.",
    minWords: 25,
    modelResponse: "Moi Mika! Olisiko sinulla aikaa nähdä lauantaina lounaalla? Voisimme mennä syömään uuteen italialaiseen pizzeriaan keskustassa noin kello yksi iltapäivällä. Sopiiko sinulle tämä aika? Terveisin, Daniel"
  },
  {
    id: "pe-w-4",
    subtest: "writing",
    taskType: "message",
    title: "Viesti taloyhtiön huoltomiehelle (Vuotava hana)",
    prompt: "Keittiösi vesihana vuotaa vettä. Kirjoita viesti huoltoyhtiölle.\n\nKerro viestissä:\n- Kuka olet ja missä asunnossa asut\n- Mikä vika asunnossa on\n- Pyydä huoltomiestä tulemaan korjaamaan hana mahdollisimman pian.",
    minWords: 30,
    modelResponse: "Hei! Asun asunnossa B 14. Keittiöni vesihana vuotaa vettä altaaseen koko ajan, eikä hana sulkeudu kunnolla. Voisitteko tulla katsomaan ja korjaamaan hanan mahdollisimman pian? Asuntoon saa tulla yleisavaimella arkisin klo 8-16. Ystävällisin terveisin, Peter"
  },
  {
    id: "pe-w-5",
    subtest: "writing",
    taskType: "message",
    title: "Syntymäpäiväkutsu kavereille",
    prompt: "Täytät vuosia ja järjestät pienet juhlat kotona. Kirjoita kutsuviesti ystävillesi.\n\nKerro viestissä:\n- Milloin juhlat pidetään (päivämäärä ja kellonaika)\n- Missä juhlitaan\n- Mitä tarjottavaa on ja pyydä ilmoittamaan tulosta etukäteen.",
    minWords: 30,
    modelResponse: "Hei ystävät! Täytän vuosia ja järjestän syntymäpäiväjuhlat kotonani ensi perjantaina 15. toukokuuta kello 18:00 alkaen. Tarjolla on kakkua, pientä suolaista syötävää ja juotavaa. Ilmoittaisitko minulle keskiviikkoon mennessä, pääsetkö tulemaan? Tervetuloa juhlimaan! T. Elena"
  },
  {
    id: "pe-w-6",
    subtest: "writing",
    taskType: "message",
    title: "Anteeksipyyntö myöhästymisestä",
    prompt: "Olet sopinut tapaamisen ystäväsi kanssa, mutta bussisi on myöhässä. Kirjoita viesti ystävällesi.\n\nKerro:\n- Miksi olet myöhässä\n- Kuinka paljon myöhästyt (noin minuutteina)\n- Pyydä anteeksi ja sano missä tapaatte.",
    minWords: 25,
    modelResponse: "Moi Anna! Olen tosi pahoillani, mutta bussini on juuttunut pahaan ruuhkaan ja myöhästyn noin 15 minuuttia sovitusta ajasta. Odota minua kahvilan sisällä, tulen sinne heti kun pääsen perille! Terveisin, Sami"
  },
  {
    id: "pe-w-7",
    subtest: "writing",
    taskType: "message",
    title: "Tiedustelu kuntosalille",
    prompt: "Haluat aloittaa kuntosaliharjoittelun. Kirjoita lyhyt sähköposti kuntosalin asiakaspalveluun.\n\nKysy viestissä:\n- Paljonko kuukausikortti maksaa\n- Onko salilla opastusta aloittelijoille\n- Miten jäseneksi voi liittyä.",
    minWords: 30,
    modelResponse: "Hei! Haluaisin aloittaa kuntoilun salillanne. Voisitteko kertoa, paljonko kuukausikortti maksaa opiskelijalle? Onko salillanne mahdollista saada laiteopastusta aloittelijalle? Miten jäseneksi ilmoittaudutaan? Kiitos tiedoista! Ystävällisin terveisin, Sara"
  },
  {
    id: "pe-w-8",
    subtest: "writing",
    taskType: "message",
    title: "Tavaran myynti-ilmoitus (Polkupyörä)",
    prompt: "Myyt käytettyä polkupyörääsi taloyhtiön ilmoitustaululla tai netissä. Kirjoita myynti-ilmoitus.\n\nKerro ilmoituksessa:\n- Millainen pyörä on (väri, vaihteet, kunto)\n- Paljonko pyörä maksaa\n- Yhteystietosi ostajalle.",
    minWords: 30,
    modelResponse: "MYYDÄÄN POLKUPYÖRÄ! Myyn hyväkuntoisen mustan miesten polkupyörän. Pyörässä on 7 vaihdetta, toimivat käsijarrut ja uudet renkaat. Pyörä toimii moitteettomasti. Hinta: 90 euroa. Jos olet kiinnostunut, soita tai laita viestiä numeroon 045 123 4567. Terveisin, Markus"
  },
  {
    id: "pe-w-9",
    subtest: "writing",
    taskType: "message",
    title: "Lääkäriajan peruutus",
    prompt: "Olet varannut hammaslääkäriajan huomiselle, mutta et pääsekään työesteen takia. Kirjoita viesti ajanvaraukseen.\n\nKerro viestissä:\n- Nimesi ja syntymäaikasi\n- Huominen aikasi, jonka haluat perua\n- Pyydä uutta aikaa ensi viikolle.",
    minWords: 30,
    modelResponse: "Hei! Nimeni on Olga Ivanova (syntymäaika 12.04.1990). Minulla on varattu hammaslääkäriaika huomiseksi klo 13:00. Joudun valitettavasti perumaan tämän ajan työesteen vuoksi. Olisiko teillä vapaata aikaa ensi viikon tiistaina aamupäivällä? Kiitos paljon! Ystävällisin terveisin, Olga"
  },
  {
    id: "pe-w-10",
    subtest: "writing",
    taskType: "message",
    title: "Kiitosviesti kyläilyn jälkeen",
    prompt: "Olit eilen ystäväsi luona syömässä illallista. Kirjoita hänelle kiitosviesti.\n\nKerro viestissä:\n- Kiitä kutsusta ja herkullisesta ruoasta\n- Kerro että sinulla oli tosi mukavaa\n- Kutsu hänet kylään luoksesi ensi kerralla.",
    minWords: 25,
    modelResponse: "Moi Laura! Halusin kiittää sinua eilisestä illasta. Ruoka oli aivan ihanaa ja meillä oli tosi hauskaa yhdessä! Ensi kerralla sinun täytyy tulla kylään minun luokseni, niin minä kokkaan meille. Nähdään pian! T. Emma"
  },
  {
    id: "pe-w-11",
    subtest: "writing",
    taskType: "message",
    title: "Koiranhoitoapu naapurille",
    prompt: "Naapurisi tarvitsee apua koiransa ulkoiluttamisessa. Kirjoita hänelle viesti.\n\nKerro viestissä:\n- Että voit auttaa ja ulkoiluttaa koiran\n- Mihin aikaan pääset kävelylle\n- Kysy missä koiran hihna ja herkut ovat.",
    minWords: 25,
    modelResponse: "Hei Mikko! Voin ilomielin auttaa ja viedä koirasi lenkille tänään iltapäivällä noin kello neljä. Missä pidät koiran talutushihnaa ja nameja? Tulen hakemaan avaimen oveltasi kello neljältä. Terveisin, Jari"
  },
  {
    id: "pe-w-12",
    subtest: "writing",
    taskType: "message",
    title: "Palaute ravintolalle",
    prompt: "Kävit eilen uudessa lounasravintolassa. Kirjoita lyhyt palaute ravintolan verkkosivuille.\n\nKerro viestissä:\n- Mitä ruokaa söit\n- Miksi pidit ruoasta ja palvelusta\n- Sano että suosittelet ravintolaa muillekin.",
    minWords: 30,
    modelResponse: "Hei! Kävin eilen ravintolassanne lounaalla ja söin lohikeittoa. Ruoka oli todella maukasta ja tuoretta, ja leipä oli lämmintä. Asiakaspalvelu oli erittäin ystävällistä ja nopeaa. Suosittelen paikkaa lämpimästi kaikille ystävilleni! Tulen varmasti uudelleen. T. Kalle"
  },
  {
    id: "pe-w-13",
    subtest: "writing",
    taskType: "message",
    title: "Ilmoitus kadonneesta avaimesta",
    prompt: "Olet kadottanut kotiavaimen taloyhtiön pihalle. Kirjoita ilmoitus taloyhtiön ala-aulan ilmoitustaululle.\n\nKerro ilmoituksessa:\n- Millainen avain on (avainperä, määrä)\n- Missä ja milloin olet saattanut kadottaa sen\n- Miten löytäjä voi ottaa sinuun yhteyttä.",
    minWords: 30,
    modelResponse: "KADONNUT AVAIN! Olen kadottanut avainnipun eilen illalla taloyhtiön pihalle tai pyörävarastoon. Nipussa on kaksi kotiavainta ja sininen heijastin-avainperä. Jos olet löytänyt avaimet, soittaisitko minulle numeroon 040 112 2334 (asunto A 5). Löytäjälle pieni palkkio! Kiitos, Timo"
  },
  {
    id: "pe-w-14",
    subtest: "writing",
    taskType: "message",
    title: "Viesti työkaverille (Vuoronvaihto)",
    prompt: "Haluat vaihtaa työvuoroa työkaverisi kanssa ensi viikonloppuna. Kirjoita hänelle viesti.\n\nKerro viestissä:\n- Miksi haluat vaihtaa vuoroa (esim. perhejuhla)\n- Mikä vuoro sinulla on ja minkä vuoron haluaisit ottaa häneltä\n- Kysy sopiiko vaihto hänelle.",
    minWords: 30,
    modelResponse: "Moi Antti! Haluaisin kysyä, olisiko sinun mahdollista vaihtaa työvuoroa kanssani ensi lauantaina? Minulla on lauantaina siskoni häät enkä pääse iltavuoroon. Voisin ottaa vastineeksi sinun sunnuntaivuorosi tai tehdä vuoron puolestasi ensi viikolla. Sopisiko tämä sinulle? T. Juha"
  },
  {
    id: "pe-w-15",
    subtest: "writing",
    taskType: "message",
    title: "Kirjaston kirjan uusiminen",
    prompt: "Kirjastosta lainaamasi kirjan laina-aika päättyy huomenna, mutta et ole ehtinyt lukea sitä loppuun. Kirjoita kirjastolle viesti.\n\nKerro:\n- Nimesi ja kirjastokortin numero\n- Kirjan nimi, jonka haluat uusia\n- Kysy onnistuuko lainan pidentäminen kahdella viikolla.",
    minWords: 30,
    modelResponse: "Hei! Nimeni on Liisa Mäkinen ja kirjastokorttini numero on 2004558. Haluaisin uusia lainani kirjaan 'Suomen kielen alkeet'. En ole ehtinyt lukea kirjaa vielä loppuun. Voisitteko pidentää laina-aikaa kahdella viikolla, jos kirjaan ei ole varauksia? Kiitos paljon! Terveisin, Liisa"
  },
  {
    id: "pe-w-16",
    subtest: "writing",
    taskType: "message",
    title: "Kysely asunnon vuokranantajalle",
    prompt: "Olet nähnyt vuokrailmoituksen asunnosta ja olet kiinnostunut siitä. Kirjoita sähköposti vuokranantajalle.\n\nKerro:\n- Kuka olet ja että haluaisit vuokrata asunnon\n- Kysy milloin asuntoa pääsee katsomaan\n- Kerro että sinulla on vakituinen työpaikka.",
    minWords: 30,
    modelResponse: "Hei! Olen nähnyt ilmoituksenne vapaasta kaksiosta Kalliossa. Olen 28-vuotias rauhallinen IT-asiantuntija ja minulla on vakituinen työpaikka. En tupakoi eikä minulla ole lemmikkejä. Olisin erittäin kiinnostunut asunnosta. Milloin sitä olisi mahdollista tulla katsomaan? Ystävällisin terveisin, Alex"
  },
  {
    id: "pe-w-17",
    subtest: "writing",
    taskType: "message",
    title: "Viesti lapsen opettajalle (Hammashoito)",
    prompt: "Lapsellasi on huomenna hammashoitola-aika kesken koulupäivän. Kirjoita viesti Wilmaan opettajalle.\n\nKerro:\n- Miksi lapsi joutuu lähtemään koulusta aiemmin\n- Mihin aikaan hän lähtee\n- Tuleeko hän takaisin kouluun vastaanoton jälkeen.",
    minWords: 30,
    modelResponse: "Hei! Ilmoitan, että tyttärelläni Sofialla on hammastarkastus huomenna torstaina klo 11:30. Hänen täytyy lähteä koulusta klo 11:00. Tulen hakemaan hänet koulun portilta. Tarkastuksen jälkeen Sofia palaa takaisin kouluun iltapäivän viimeiselle oppitunnille. Ystävällisin terveisin, Sofian isä"
  },
  {
    id: "pe-w-18",
    subtest: "writing",
    taskType: "message",
    title: "Kirpputoripöydän varaus",
    prompt: "Haluat varata myyntipöydän paikalliselta itsepalvelukirpputorilta. Kirjoita sähköposti kirpputorille.\n\nKerro:\n- Mille viikolle haluat varata pöydän\n- Kysy paljonko viikkovuokra maksaa\n- Kysy saako kirpputorilta hintalappuja ja henkareita.",
    minWords: 30,
    modelResponse: "Hei! Haluaisin varata itsepalvelukirpputoriltanne myyntipöydän viikolle 25 (maanantaista sunnuntaihin). Paljonko yhden viikon pöytävuokra on tällä hetkellä? Kuuluvatko hintalaput ja vaatehenkarit pöydän vuokrahintaan? Kiitos vastauksestanne! Terveisin, Maija"
  },
  {
    id: "pe-w-19",
    subtest: "writing",
    taskType: "message",
    title: "Pyyntö lainata polkupyörää",
    prompt: "Oma polkupyöräsi on rikki ja tarvitset pyörää viikonlopuksi. Kirjoita viesti ystävällesi.\n\nKerro:\n- Miksi tarvitset pyörää (oma rikki, menossa pyöräretkelle)\n- Palautatko sen ehjänä ja milloin\n- Kiitä ystävää avusta.",
    minWords: 25,
    modelResponse: "Moi Ville! Oma pyöräni meni rikki eilen ja minun oli tarkoitus lähteä pyöräretkelle lauantaina. Voisinko lainata sinun varapyörääsi viikonlopuksi? Palautan sen puhtaana ja ehjänä heti sunnuntaina illalla. Kiitos valtavasti avusta! T. Niko"
  },
  {
    id: "pe-w-20",
    subtest: "writing",
    taskType: "message",
    title: "Hotellihuoneen toive",
    prompt: "Olet varannut hotellihuoneen ja haluat esittää erityistoiveen. Kirjoita viesti hotellin vastaanottoon.\n\nKerro:\n- Varausnumerosi ja nimesi\n- Toivo hiljaista huonetta ylimmästä kerroksesta\n- Kysy voiko aamiaisen saada huoneeseen gluteenittomana.",
    minWords: 30,
    modelResponse: "Hei! Olen varannut huoneen nimellä Matti Laine (varausnumero 778912). Toivoisin mahdollisuuksien mukaan hiljaista huonetta hotellin ylimmästä kerroksesta. Lisäksi haluaisin tiedustella, onko aamiaisella saatavilla gluteenittomia leipiä? Kiitos avustanne! Ystävällisin terveisin, Matti"
  },

  // 10 Opinion / Essay tasks
  {
    id: "pe-w-21",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Onko parempi asua kaupungissa vai maalla?",
    prompt: "Kirjoita mielipidekirjoitus aiheesta: 'Onko parempi asua kaupungissa vai maalla?'\n\nKerro tekstissäsi:\n- Missä sinä mieluiten asut ja miksi\n- Mitä hyviä puolia kaupungissa asumisessa on (esim. palvelut, kulkuyhteydet)\n- Mitä hyviä puolia maalla asumisessa on (esim. luonto, rauha)\n- Esitä oma yhteenvetosi.",
    minWords: 60,
    modelResponse: "Mielestäni kaupungissa asuminen on mukavampaa ja helpompaa kuin maalla asuminen. Kaupungissa kaikki tärkeät palvelut, kuten ruokakaupat, koulut, lääkärit ja kirjastot, ovat lähellä. Lisäksi julkinen liikenne toimii usein erittäin hyvin, joten autoa ei välttämättä tarvitse ollenkaan. Toisaalta maalla on ihanaa luonnonrauhaa, puhdasta ilmaa ja enemmän tilaa lapsille leikkiä. Silti pidän enemmän kaupungin elämästä ja sen tarjoamista harrastusmahdollisuuksista."
  },
  {
    id: "pe-w-22",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Pitäisikö julkisen liikenteen olla ilmaista kaikille?",
    prompt: "Kirjoita mielipidekirjoitus: 'Pitäisikö bussien ja junien olla maksuttomia kaikille kaupunkilaisille?'\n\nKerro tekstissäsi:\n- Mikä on oma mielipiteesi\n- Miten ilmainen julkinen liikenne vaikuttaisi ympäristöön ja ruuhkiin\n- Kuka maksaisi kulut (esim. verot)\n- Oma johtopäätöksesi.",
    minWords: 60,
    modelResponse: "Mielestäni julkisen liikenteen tulisi olla maksutonta kaikille asukkaille kaupungeissa. Jos bussit, ratikat ja junat olisivat ilmaisia, useammat ihmiset jättäisivät oman autonsa kotiin. Tämä vähentäisi ilmansaasteita ja tekisi kaupungin keskustasta viihtyisämmän ja turvallisemman. Vaikka julkisen liikenteen kulut maksettaisiin veroista, se olisi pitkällä aikavälillä hyvä sijoitus parempaan tulevaisuuteen ja puhtaampaan ympäristöön."
  },
  {
    id: "pe-w-23",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Harrastusten merkitys ihmisen elämässä",
    prompt: "Kirjoita lyhyt essee aiheesta: 'Miksi ihmisellä pitää olla harrastuksia?'\n\nKerro tekstissäsi:\n- Mitä sinä itse harrastat\n- Miten harrastukset auttavat rentoutumaan työn tai koulun jälkeen\n- Voiko harrastusten kautta tutustua uusiin ystäviin.",
    minWords: 60,
    modelResponse: "Harrastukset ovat todella tärkeitä jokaiselle ihmiselle. Minä harrastan juoksemista ja uimista kaksi kertaa viikossa. Kun liikun urheiluhallissa tai luonnossa raskaan työpäivän jälkeen, mieleni rentoutuu ja saan paljon uutta energiaa. Harrastukset tuovat iloa arkeen ja auttavat jaksamaan paremmin. Lisäksi harrastusten, kuten kielikurssien tai joukkueurheilun kautta, voi löytää uusia hyviä ystäviä samanmielisten ihmisten parista."
  },
  {
    id: "pe-w-24",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Onko etätyö parempaa kuin toimistotyö?",
    prompt: "Monet tekevät nykyään töitä kotoa käsin tietokoneella. Kirjoita mielipiteesi etätyöstä.\n\nKerro tekstissäsi:\n- Mitä hyötyä etätyöstä on (esim. työmatkat, oma rauha)\n- Mitä haittaa etätyöstä voi olla (esim. työkavereiden puute)\n- Kumpaa sinä suosit ja miksi.",
    minWords: 60,
    modelResponse: "Etätyössä on mielestäni paljon hyviä puolia, mutta myös joitakin huonoja puolia. Paras puoli on se, ettei aikaa kulu ruuhkissa istumiseen työmatkoilla, ja kotona voi työskennellä rauhallisessa ympäristössä. Toisaalta kotona voi välillä tuntea itsensä yksinäiseksi, kun työkavereita ei näe kasvotusten päivittäin. Minun mielestäni paras malli on yhdistelmä: 2–3 päivää viikossa kotona ja loput toimistolla tiimin kanssa."
  },
  {
    id: "pe-w-25",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Lemmikkieläimen ottaminen kotiin",
    prompt: "Kirjoita ajatuksiasi lemmikkieläimistä.\n\nKerro tekstissäsi:\n- Pidätkö eläimistä ja onko sinulla lemmikkiä\n- Miten koira tai kissa voi tuoda iloa perheelle\n- Mitä velvollisuuksia lemmikin omistajalla on (hoito, kulut, aika).",
    minWords: 60,
    modelResponse: "Pidän eläimistä todella paljon, ja meidän perheessämme on pieni koira. Lemmikkieläin tuo kotiin valtavasti iloa, seuraa ja rakkautta. Koiran kanssa tulee myös ulkoiltua joka päivä säällä kuin säällä, mikä tekee hyvää terveydelle. Lemmikin ottaminen vaatii kuitenkin suurta vastuuta: eläin tarvitsee ruokaa, säännöllistä hoitoa, lääkärikäyntejä ja paljon aikaa. Eläintä ei saa koskaan ottaa ilman huolellista harkintaa."
  },
  {
    id: "pe-w-26",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Terveellisen ruoan merkitys",
    prompt: "Kirjoita mielipide terveellisestä ruokavaliosta.\n\nKerro tekstissäsi:\n- Mitä tarkoittaa terveellinen ruoka sinulle\n- Miksi pikaruokaa ei pitäisi syödä liian usein\n- Miten ruokavalio vaikuttaa ihmisen jaksamiseen ja mielialaan.",
    minWords: 60,
    modelResponse: "Terveellinen ruoka on perusta hyvälle elämälle ja jaksamiselle. Minulle terveellinen ruokavalio tarkoittaa paljon tuoreita kasviksia, hedelmiä, marjoja, kalaa ja ruisleipää. Pikaruoka, kuten hampurilaiset ja ranskalaiset, maistuu välillä hyvältä, mutta sitä ei kannata syödä säännöllisesti, koska siinä on liikaa rasvaa ja suolaa. Kun syö monipuolisesti ja juo riittävästi puhdasta vettä, olo on virkeä ja työssä jaksaa keskittyä paljon paremmin."
  },
  {
    id: "pe-w-27",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Kierrätyksen tärkeys arjessa",
    prompt: "Kirjoita mielipiteesi roskien lajittelusta ja kierrätyksestä.\n\nKerro tekstissäsi:\n- Kierrätätkö sinä kotona roskia (paperi, muovi, lasi)\n- Miksi kierrättäminen on tärkeää luonnolle\n- Miten ihmisiä voisi kannustaa lajittelemaan enemmän.",
    minWords: 60,
    modelResponse: "Kierrättäminen on minulle tärkeä jokapäiväinen tapa. Lajittelen kotonani aina muovit, paperit, kartongit, lasit ja biojätteet omiin astioihinsa. Se vie vain vähän aikaa, mutta tekee suuren eron ympäristölle. Kun materiaalit kierrätetään, maapallon luonnonvaroja säästyy eikä luontoon päädy haitallisia roskia. Kaupunkien tulisi lisätä kierrätyspisteitä talojen lähelle, jotta lajitteleminen olisi jokaiselle mahdollisimman helppoa ja vaivatonta."
  },
  {
    id: "pe-w-28",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Onko tärkeää oppia asuinmaan kieli?",
    prompt: "Kirjoita mielipidekirjoitus: 'Miksi uuden kielen oppiminen on tärkeää maahanmuuttajalle?'\n\nKerro tekstissäsi:\n- Miten suomen kielen taito auttaa arjessa (kaupassa, lääkärissä)\n- Miten kieli vaikuttaa työpaikan saamiseen\n- Miksi kieli auttaa ystävystymään paikallisten ihmisten kanssa.",
    minWords: 60,
    modelResponse: "Asuinmaan kielen oppiminen on mielestäni ensiarvoisen tärkeää kaikille, jotka muuttavat uuteen maahan. Kun osaa suomen kieltä, arkipäivän asiointi kaupassa, virastoissa, lääkärissä ja bussissa muuttuu helpoksi ja itsenäiseksi. Suomen kielen taito on myös erittäin tärkeää työpaikan löytämisessä ja työelämässä menestymisessä. Lisäksi kielen avulla on paljon helpompi tutustua suomalaisiin naapureihin ja tuntea itsensä osaksi paikallista yhteiskuntaa."
  },
  {
    id: "pe-w-29",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Kirjan lukeminen vai elokuvien katsominen?",
    prompt: "Kumpi on mielestäsi parempaa ajanvietettä: kirjan lukeminen vai elokuvan katsominen?\n\nKerro tekstissäsi:\n- Kummasta pidät enemmän ja miksi\n- Mitä etuja kirjan lukemisessa on (mielikuvitus, kieli)\n- Mitä etuja elokuvassa on (visuaalisuus, rentoutuminen).",
    minWords: 60,
    modelResponse: "Pidän sekä kirjojen lukemisesta että elokuvien katselusta, mutta useimmiten valitsen hyvän kirjan. Kirjaa lukiessa oma mielikuvitus pääsee tekemään työtä, ja tarinaan voi uppoutua rauhassa omaan tahtiin ilman häiriötekijöitä. Lukeminen myös kehittää sanavarastoa ja keskittymiskykyä. Toisaalta elokuvan katsominen ystävien kanssa on hauska ja rentouttava tapa viettää iltaa television ääressä rankan viikon päätteeksi."
  },
  {
    id: "pe-w-30",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipide: Älypuhelimet ja nuoret",
    prompt: "Käyttävätkö ihmiset nykyään liikaa puhelinta?\n\nKerro tekstissäsi:\n- Mihin käytät puhelinta päivittäin\n- Mitä haittaa liiallisesta ruutuajasta voi olla (uni, keskittyminen)\n- Pitäisikö puhelimen käyttöä rajoittaa koulussa.",
    minWords: 60,
    modelResponse: "Nykyään moni ihminen käyttää puhelinta valitettavasti aivan liikaa. Älypuhelin on toki hyödyllinen laite yhteydenpitoon, karttojen katsomiseen ja uutisten lukemiseen. Liiallinen puhelimen selaaminen kuitenkin heikentää unen laatua ja häiritsee keskittymistä työhön tai opiskeluun. Erityisesti koulussa oppitunneilla puhelimet tulisi mielestäni laittaa pois repun pohjalle, jotta lapset ja nuoret voivat keskittyä opettajaan ja toistensa kanssa keskustelemiseen."
  }
];

export const perustasoListening = [
  {
    id: "pe-l-1",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Huomenta kaikille! Tänään lounaaksi meillä on tarjolla hernekeittoa ja pannukakkua kello yhteentoista alkaen.",
    prompt: "Mitä ruokaa lounaalla tarjotaan tänään?",
    options: [
      "A) Pizzaa ja salaattia",
      "B) Hernekeittoa ja pannukakkua",
      "C) Lohikeittoa ja leipää",
      "D) Hampurilaisia ja ranskalaisia"
    ],
    correctAnswer: "B) Hernekeittoa ja pannukakkua",
    explanation: "Kuulutus sanoo selvästi: 'lounaaksi meillä on tarjolla hernekeittoa ja pannukakkua'."
  },
  {
    id: "pe-l-2",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hyvät matkustajat, juna Helsinkiin lähtee raiteelta kaksi kello neljätoista viisitoista. Juna on aikataulussa.",
    prompt: "Miltä raiteelta juna lähtee ja mihin aikaan?",
    options: [
      "A) Raiteelta 1 klo 14:00",
      "B) Raiteelta 2 klo 14:15",
      "C) Raiteelta 4 klo 15:30",
      "D) Raiteelta 2 klo 15:00"
    ],
    correctAnswer: "B) Raiteelta 2 klo 14:15",
    explanation: "Kuulutuksessa sanotaan: 'raiteelta kaksi kello neljätoista viisitoista'."
  },
  {
    id: "pe-l-3",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Terve Maria, Matti tässä! Soittaisitko minulle takaisin kun ehdit? Haluaisin kysyä huomisesta kokouksesta.",
    prompt: "Miksi Matti soittaa Marialle?",
    options: [
      "A) Hän haluaa lainata autoa",
      "B) Hän haluaa kysyä huomisesta kokouksesta",
      "C) Hän pyytää Mariaa ravintolaan syömään",
      "D) Hän kertoo olevansa sairaana"
    ],
    correctAnswer: "B) Hän haluaa kysyä huomisesta kokouksesta",
    explanation: "Matti sanoo: 'Haluaisin kysyä huomisesta kokouksesta'."
  },
  {
    id: "pe-l-4",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Anteeksi, tietäisittekö missä täällä on lähin apteekki? Se taitaa olla tuolla ruokakaupan vieressä.",
    prompt: "Mitä paikkaa henkilö etsii?",
    options: ["A) Pankkia", "B) Apteekkia", "C) Postia", "D) Polialiasemaa"],
    correctAnswer: "B) Apteekkia",
    explanation: "Puhuja kysyy: 'missä täällä on lähin apteekki?'"
  },
  {
    id: "pe-l-5",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Sääennuste: Huomenna koko maassa on poutaista ja aurinkoista. Lämpötila nousee parinkymmeneen asteeseen.",
    prompt: "Millaista säätä huomiseksi luvataan?",
    options: [
      "A) Sadetta ja kovaa tuulta",
      "B) Aurinkoista ja noin 20 astetta lämmintä",
      "C) Lumipyryä ja pakkasta",
      "D) Kylmää sumua"
    ],
    correctAnswer: "B) Aurinkoista ja noin 20 astetta lämmintä",
    explanation: "Ennuste sanoo: 'poutaista ja aurinkoista. Lämpötila nousee parinkymmeneen asteeseen'."
  },
  {
    id: "pe-l-6",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hei, täällä puhuu hoitaja terveyskeskuksesta. Teidän lääkäriaikanne on siirretty huomiseksi kello kymmeneksi.",
    prompt: "Mihin aikaan uusi lääkäriaika on?",
    options: ["A) Tänään klo 14:00", "B) Huomenna klo 10:00", "C) Ensi viikolla klo 09:00", "D) Huomenna klo 12:00"],
    correctAnswer: "B) Huomenna klo 10:00",
    explanation: "Viestissä sanotaan: 'siirretty huomiseksi kello kymmeneksi'."
  },
  {
    id: "pe-l-7",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kassalla numero kolme on vapaata tilaa. Palvelemme seuraavaa asiakasta kassalla kolme.",
    prompt: "Mille kassalle asiakkaita kutsutaan?",
    options: ["A) Kassalle 1", "B) Kassalle 2", "C) Kassalle 3", "D) Kassalle 5"],
    correctAnswer: "C) Kassalle 3",
    explanation: "Kuulutus: 'Palvelemme seuraavaa asiakasta kassalla kolme'."
  },
  {
    id: "pe-l-8",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Moi Timo! Tulisitko meille illalla saunomaan? Sauna on lämmin kello seitsemältä.",
    prompt: "Mitä Timoa pyydetään tekemään?",
    options: [
      "A) Tulemaan saunomaan kello seitsemältä",
      "B) Korjaamaan pyörää kello kuudelta",
      "C) Viemään roskat ulos",
      "D) Lähtemään lenkille aamulla"
    ],
    correctAnswer: "A) Tulemaan saunomaan kello seitsemältä",
    explanation: "Viestissä kysytään: 'Tulisitko meille illalla saunomaan? Sauna on lämmin kello seitsemältä'."
  },
  {
    id: "pe-l-9",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hyvät asiakkaat, tavaratalo sulkeutuu tänään poikkeuksellisesti jo kello kahdeksantoista. Pyydämme siirtymään kassoille.",
    prompt: "Mihin aikaan tavaratalo sulkeutuu tänään?",
    options: ["A) Klo 21:00", "B) Klo 20:00", "C) Klo 18:00", "D) Klo 16:00"],
    correctAnswer: "C) Klo 18:00",
    explanation: "Kuulutuksessa sanotaan: 'sulkeutuu tänään poikkeuksellisesti jo kello kahdeksantoista' (18:00)."
  },
  {
    id: "pe-l-10",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Yksi aikuisten lippu Tampereelle maksaa kaksikymmentä euroa. Haluatteko menolipun vai meno-paluun?",
    prompt: "Paljonko Tampereen aikuisen menolippu maksaa?",
    options: ["A) 10 euroa", "B) 15 euroa", "C) 20 euroa", "D) 25 euroa"],
    correctAnswer: "C) 20 euroa",
    explanation: "Myyjä sanoo: 'maksaa kaksikymmentä euroa' (20 €)."
  },
  {
    id: "pe-l-11",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Tervetuloa kirjastoon! Lastenosasto sijaitsee toisessa kerroksessa ja lehtisali heti sisääntulokerroksessa.",
    prompt: "Missä kerroksessa lastenosasto sijaitsee?",
    options: ["A) Kellarissa", "B) Ensimmäisessä kerroksessa", "C) Toisessa kerroksessa", "D) Pihalla"],
    correctAnswer: "C) Toisessa kerroksessa",
    explanation: "Kuulutus: 'Lastenosasto sijaitsee toisessa kerroksessa'."
  },
  {
    id: "pe-l-12",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Moi! Olen kaupassa, tarvitaanko me kotiin maitoa tai leipää? Laita viestiä jos tarvitaan jotain muuta.",
    prompt: "Mitä soittaja kysyy?",
    options: [
      "A) Kysyy tarvitaanko kotiin maitoa tai leipää",
      "B) Kysyy missä avaimet ovat",
      "C) Kertoo myöhästyvänsä töistä",
      "D) Kysyy mihin aikaan televisio-ohjelma alkaa"
    ],
    correctAnswer: "A) Kysyy tarvitaanko kotiin maitoa tai leipää",
    explanation: "Soittaja kysyy: 'tarvitaanko me kotiin maitoa tai leipää?'"
  },
  {
    id: "pe-l-13",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Huomio matkustajat, metroliikenteessä on pieni tekninen häiriö. Junat kulkevat noin viisi minuuttia myöhässä.",
    prompt: "Kuinka paljon metrot ovat myöhässä?",
    options: ["A) 20 minuuttia", "B) 15 minuuttia", "C) Noin 5 minuuttia", "D) Eivät lainkaan"],
    correctAnswer: "C) Noin 5 minuuttia",
    explanation: "Kuulutus: 'kulkevat noin viisi minuuttia myöhässä'."
  },
  {
    id: "pe-l-14",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Lääkärikeskus Ilona, hyvää päivää. Seuraava vapaa rokotusaika olisi ensi viikon tiistaina kello kymmenen.",
    prompt: "Milloin vapaa rokotusaika on?",
    options: ["A) Tänään iltapäivällä", "B) Ensi viikon tiistaina klo 10:00", "C) Perjantaina klo 14:00", "D) Lauantaina aamulla"],
    correctAnswer: "B) Ensi viikon tiistaina klo 10:00",
    explanation: "Vastaaja sanoo: 'ensi viikon tiistaina kello kymmenen'."
  },
  {
    id: "pe-l-15",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hei, meillä on huomenna talkoot taloyhtiön pihalla kello kymmeneltä. Haravoidaan lehtiä ja juodaan kahvia.",
    prompt: "Mitä taloyhtiön talkoissa tehdään huomenna?",
    options: [
      "A) Maalataan talon katto",
      "B) Haravoidaan lehtiä ja juodaan kahvia",
      "C) Korjataan autoja",
      "D) Puretaan vanha sauna"
    ],
    correctAnswer: "B) Haravoidaan lehtiä ja juodaan kahvia",
    explanation: "Viestissä kerrotaan: 'Haravoidaan lehtiä ja juodaan kahvia'."
  },
  {
    id: "pe-l-16",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Terve Laura! Muistathan palauttaa lainaamasi kirjan huomenna koululle, koska tarvitsen sitä kokeeseen.",
    prompt: "Miksi puhuja pyytää palauttamaan kirjan huomenna?",
    options: [
      "A) Hän aikoo myydä sen",
      "B) Hän tarvitsee sitä kokeeseen",
      "C) Se täytyy viedä kirjastoon tänään",
      "D) Kirja on likainen"
    ],
    correctAnswer: "B) Hän tarvitsee sitä kokeeseen",
    explanation: "Puhuja sanoo: 'koska tarvitsen sitä kokeeseen'."
  },
  {
    id: "pe-l-17",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kahvilassa on tarjolla tänään tuoretta mustikkapiirakkaa ja vaniljakastiketta vain kolmella eurolla.",
    prompt: "Paljonko mustikkapiirakka maksaa?",
    options: ["A) 1 euroa", "B) 3 euroa", "C) 5 euroa", "D) 7 euroa"],
    correctAnswer: "B) 3 euroa",
    explanation: "Kuulutus: 'vain kolmella eurolla' (3 €)."
  },
  {
    id: "pe-l-18",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Anteeksi, minulta putosi hanska tähän penkille. Onko kukaan nähnyt punaista villahanskaa?",
    prompt: "Minkä esineen henkilö on kadottanut?",
    options: ["A) Lompakon", "B) Punaisen villahanskan", "C) Kännykän", "D) Kotiavaimen"],
    correctAnswer: "B) Punaisen villahanskan",
    explanation: "Puhuja kysyy: 'Onko kukaan nähnyt punaista villahanskaa?'"
  },
  {
    id: "pe-l-19",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Koulu alkaa huomenna poikkeuksellisesti kello yhdeksältä aamulla opettajien kokouksen vuoksi.",
    prompt: "Mihin aikaan koulu alkaa huomenna?",
    options: ["A) Klo 08:00", "B) Klo 09:00", "C) Klo 10:00", "D) Klo 11:00"],
    correctAnswer: "B) Klo 09:00",
    explanation: "Viestissä sanotaan: 'alkaa huomenna poikkeuksellisesti kello yhdeksältä aamulla'."
  },
  {
    id: "pe-l-20",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Terveysasema on suljettu perjantaina henkilöstön koulutuspäivän takia. Kiireellisissä tapauksissa soittakaa päivystykseen numeroon 116 117.",
    prompt: "Mihin numeroon kiireellisissä tapauksissa tulee soittaa?",
    options: ["A) 112", "B) 116 117", "C) 0800 123", "D) 100 200"],
    correctAnswer: "B) 116 117",
    explanation: "Viesti ohjeistaa: 'soittakaa päivystykseen numeroon 116 117'."
  },
  {
    id: "pe-l-21",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Haluaisin varata yhden leikkausajan kampaajalta torstaille kello kuusitoista. Onko silloin vapaata?",
    prompt: "Mitä palvelua asiakas haluaa varata torstaille?",
    options: ["A) Autopesua", "B) Hiustenleikkausaikaa kampaajalta", "C) Hierontaa", "D) Hammaslääkäriaikaa"],
    correctAnswer: "B) Hiustenleikkausaikaa kampaajalta",
    explanation: "Asiakas kysyy: 'varata yhden leikkausajan kampaajalta'."
  },
  {
    id: "pe-l-22",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Päivän leffalippu maksaa kymmenen euroa ja opiskelijoille kahdeksan euroa. Näytös alkaa varttia vaille kuusi.",
    prompt: "Mihin aikaan elokuvanäytös alkaa?",
    options: ["A) Klo 17:45 (varttia vaille kuusi)", "B) Klo 18:15 (vartin yli kuusi)", "C) Klo 18:00", "D) Klo 16:30"],
    correctAnswer: "A) Klo 17:45 (varttia vaille kuusi)",
    explanation: "Puhuja ilmoittaa: 'Näytös alkaa varttia vaille kuusi' (17:45)."
  },
  {
    id: "pe-l-23",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Muistathan ottaa uimalasit ja pyyhkeen mukaan, kun lähdetään uimahallille puoli kolmelta.",
    prompt: "Mitä tavaroita pyydetään ottamaan mukaan uimahallille?",
    options: [
      "A) Uimalasit ja pyyhe",
      "B) Luistimet ja kypärä",
      "C) Kirja ja kynä",
      "D) Sadetakki ja saappaat"
    ],
    correctAnswer: "A) Uimalasit ja pyyhe",
    explanation: "Puhuja muistuttaa: 'ottaa uimalasit ja pyyhkeen mukaan'."
  },
  {
    id: "pe-l-24",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hei, toimitamme uuden pesukoneenne huomenna kello kahdentoista ja kahden välillä. Olkaa kotona vastaanottamassa.",
    prompt: "Mihin aikaan pesukone toimitetaan huomenna?",
    options: [
      "A) Aamulla klo 8 ja 10 välillä",
      "B) Klo 12 ja 14 välillä (kahdentoista ja kahden välillä)",
      "C) Illalla klo 18 jälkeen",
      "D) Vasta perjantaina"
    ],
    correctAnswer: "B) Klo 12 ja 14 välillä (kahdentoista ja kahden välillä)",
    explanation: "Kuljettaja ilmoittaa: 'kello kahdentoista ja kahden välillä'."
  },
  {
    id: "pe-l-25",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Bussikuski kuuluttaa: Päätepysäkki saavutettu, kaikki matkustajat poistuvat autosta. Kiitos matkasta!",
    prompt: "Mitä bussinkuljettaja ilmoittaa matkustajille?",
    options: [
      "A) Bussi on hajonnut",
      "B) Bussi on saapunut päätepysäkille ja kaikkien tulee poistua",
      "C) Bussi pysähtyy kaupan eteen kymmeneksi minuutiksi",
      "D) Liput tarkastetaan nyt"
    ],
    correctAnswer: "B) Bussi on saapunut päätepysäkille ja kaikkien tulee poistua",
    explanation: "Kuulutus: 'Päätepysäkki saavutettu, kaikki matkustajat poistuvat autosta'."
  },
  {
    id: "pe-l-26",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Moi Antti! Olen kirjastossa lainaamassa kurssikirjaa. Tulisitko kahville viereiseen kahvilaan puolen tunnin kuluttua?",
    prompt: "Missä soittaja on tällä hetkellä?",
    options: ["A) Kotona", "B) Kirjastossa lainaamassa kirjaa", "C) Bussissa", "D) Ruokakaupassa"],
    correctAnswer: "B) Kirjastossa lainaamassa kirjaa",
    explanation: "Soittaja sanoo: 'Olen kirjastossa lainaamassa kurssikirjaa'."
  },
  {
    id: "pe-l-27",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Säävaroitus: Yöllä lämpötila laskee nollaan ja tiet ovat aamulla erittäin liukkaita. Ajelkaa varovasti!",
    prompt: "Miksi teillä on aamulla vaarallista ajaa?",
    options: [
      "A) Koska teillä on paljon vettä",
      "B) Koska tiet ovat yöpakkasen takia erittäin liukkaita",
      "C) Koska on kova sumu",
      "D) Koska tiellä on eläimiä"
    ],
    correctAnswer: "B) Koska tiet ovat yöpakkasen takia erittäin liukkaita",
    explanation: "Varoitus kertoo: 'tiet ovat aamulla erittäin liukkaita'."
  },
  {
    id: "pe-l-28",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Ravintolassa tarjoilija kysyy: Otatteko kahvin kanssa maitoa tai sokeria vai juotteko mustana?",
    prompt: "Mitä tarjoilija kysyy asiakkaalta?",
    options: [
      "A) Haluatteko teetä vai mehua?",
      "B) Otatteko kahviin maitoa tai sokeria vai juotteko mustana?",
      "C) Haluatteko maksaa käteisellä vai kortilla?",
      "D) Oletteko valmiit tilaamaan ruokaa?"
    ],
    correctAnswer: "B) Otatteko kahviin maitoa tai sokeria vai juotteko mustana?",
    explanation: "Tarjoilija kysyy: 'Otatteko kahvin kanssa maitoa tai sokeria vai juotteko mustana?'"
  },
  {
    id: "pe-l-29",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hei, soitamme autohuollosta. Autonne katsastus ja öljynvaihto on valmis. Voitte noutaa auton kello viiteen mennessä.",
    prompt: "Mihin aikaan mennessä auto on noudettava huollosta?",
    options: ["A) Klo 14:00", "B) Klo 17:00 (viiteen mennessä)", "C) Klo 19:00", "D) Vasta huomenna"],
    correctAnswer: "B) Klo 17:00 (viiteen mennessä)",
    explanation: "Huollosta sanotaan: 'Voitte noutaa auton kello viiteen mennessä' (17:00)."
  },
  {
    id: "pe-l-30",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Lentoasemakuulutus: Lento AY 123 Lontooseen tekee lähtöä portilta numero kaksikymmentäyksi. Tervetuloa koneeseen!",
    prompt: "Miltä portilta Lontoon lento lähtee?",
    options: ["A) Portilta 12", "B) Portilta 15", "C) Portilta 21", "D) Portilta 30"],
    correctAnswer: "C) Portilta 21",
    explanation: "Kuulutus: 'lähtöä portilta numero kaksikymmentäyksi' (21)."
  }
];

export const perustasoSpeaking = [
  // 20 Simulated Dialogues (Rapid response, 20-40 seconds)
  {
    id: "pe-s-1",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kahvilassa tilaaminen",
    audioPrompt: "Hei! Mitä teille saisi olla?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Olet kahvilassa. Tilaa kahvi ja korvapuusti ja kysy paljonko ne maksavat yhteensä.",
    modelAnswer: "Hei! Haluaisin yhden kupin kahvia maidolla ja yhden korvapuustin, kiitos. Paljonko ne maksavat yhteensä?"
  },
  {
    id: "pe-s-2",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Tien neuvominen",
    audioPrompt: "Anteeksi, osaisitko kertoa missä täällä on lähin rautatieasema?",
    prepSeconds: 5,
    speakSeconds: 30,
    prompt: "Neuvo kysyjälle reitti asemalle (esim. mene suoraan ja käänny oikealle kirkon kohdalla).",
    modelAnswer: "Joo, kävele vain tätä tietä suoraan eteenpäin noin viisisataa metriä ja käänny sitten oikealle kirkon kohdalla. Asema näkyy heti siinä edessä."
  },
  {
    id: "pe-s-3",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Lääkärin vastaanotolla",
    audioPrompt: "Päivää, tulkaa vain peremmälle ja istukaa. Mikä vaiva teillä on tänään?",
    prepSeconds: 5,
    speakSeconds: 30,
    prompt: "Kerro lääkärille oireistasi (esim. kova kurkkukipu ja kuume, joka alkoi kaksi päivää sitten).",
    modelAnswer: "Päivää. Minulla on ollut kovaa kurkkukipua ja yskää toissapäivästä asti. Tänä aamuna minulla oli myös kuumetta kolmekymmentäkahdeksan astetta."
  },
  {
    id: "pe-s-4",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Naapurin tervehtiminen rapussa",
    audioPrompt: "Hei naapuri! Miten sinun viikonloppusi on sujunut?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Vastaa naapurille iloisesti. Kerro lyhyesti mitä teit viikonloppuna ja kysy hänen kuulumisiaan.",
    modelAnswer: "Hei! Oikein mukavasti, kiitos. Kävin lauantaina kävelemässä luonnossa ja eilen rentouduin kotona saunoen. Miten sinun viikonloppusi on mennyt?"
  },
  {
    id: "pe-s-5",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kaupassa asiointi (Hinta)",
    audioPrompt: "Tässä olisi nämä kaksi paitaa. Tarvitsetteko pussia ostoksille?",
    prepSeconds: 5,
    speakSeconds: 20,
    prompt: "Vastaa myyjälle että et tarvitse pussia ja kysy voitko maksaa pankkikortilla.",
    modelAnswer: "En tarvitse pussia, kiitos, minulla on oma kangaskassi mukana. Voinko maksaa nämä pankkikortilla?"
  },
  {
    id: "pe-s-6",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kirjastossa asiointi",
    audioPrompt: "Päivää, miten voisin auttaa teitä tänään täällä kirjastossa?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kerro virkailijalle, että etsit suomen kielen oppikirjoja ja kysy missä hyllyssä ne ovat.",
    modelAnswer: "Hei! Etsisin suomen kielen alkeiskirjoja ja kielioppikirjoja. Osaisitteko kertoa, missä hyllyssä ne sijaitsevat?"
  },
  {
    id: "pe-s-7",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kutsusta kieltäytyminen kohteliaasti",
    audioPrompt: "Moi! Haluaisitko lähteä huomenna illalla meidän kanssa keilaamaan?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kieltäydy kutsusta kohteliaasti. Kerro että sinulla on jo toinen meno ja ehdota toista päivää.",
    modelAnswer: "Voi kiitos paljon kutsusta! En valitettavasti pääse huomenna, koska minulla on jo sovittu perhepäivällinen. Sopisiko sinulle jos menisimme keilaamaan ensi viikolla?"
  },
  {
    id: "pe-s-8",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Hotellin aamiainen",
    audioPrompt: "Hyvää huomenta ja tervetuloa aamiaiselle! Mikä on teidän huonenumeronne?",
    prepSeconds: 5,
    speakSeconds: 20,
    prompt: "Kerro huonenumerosi (esim. 312) ja kysy mihin aikaan aamiainen päättyy.",
    modelAnswer: "Hyvää huomenta! Huonenumero on kolmesataakaksitoista. Voisitteko vielä kertoa, mihin aikaan aamiainen päättyy tänään?"
  },
  {
    id: "pe-s-9",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Työhaastattelun aloitus",
    audioPrompt: "Tervetuloa haastatteluun! Kertoisitko aivan aluksi lyhyesti kuka olet?",
    prepSeconds: 5,
    speakSeconds: 35,
    prompt: "Esittele itsesi: nimesi, mistä maasta tulet, kauanko olet asunut Suomessa ja mitä osaat tehdä.",
    modelAnswer: "Hei! Nimeni on Maria. Olen kotoisin Espanjasta ja olen asunut Suomessa nyt kaksi vuotta. Olen ammatiltani sairaanhoitaja ja puhun espanjaa, englantia ja suomea."
  },
  {
    id: "pe-s-10",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Bussilipun ostaminen",
    audioPrompt: "Mihin olette matkustamassa?",
    prepSeconds: 5,
    speakSeconds: 20,
    prompt: "Sano mihin matkustat (esim. Porvooseen) ja kysy moneltako bussi saapuu perille.",
    modelAnswer: "Yksi aikuisten lippu Porvooseen, kiitos. Moneltako tämä bussi on perillä Porvoossa?"
  },
  {
    id: "pe-s-11",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Lapsen haku päiväkodista",
    audioPrompt: "Hei! Tulitte hakemaan Sofiaa kotiin. Sofialla oli oikein mukava päivä ulkoillessa.",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kiitä hoitajaa ja kysy söikö lapsi lounaansa hyvin ja nukkuiko hän päiväunet.",
    modelAnswer: "Hei, kiva kuulla! Kiitos paljon. Söikö Sofia lounaansa hyvin tänään ja nukkuiko hän päiväunet ilman ongelmia?"
  },
  {
    id: "pe-s-12",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Apteekissa asiointi",
    audioPrompt: "Päivää, miten voin auttaa teitä täällä apteekissa?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Sano että sinulla on kurkkukipua ja pyydä kurkkupastilleja tai särkylääkettä.",
    modelAnswer: "Päivää. Minulla on ollut kurkku kipeänä kaksi päivää. Olisiko teillä jotain tehokasta kurkkutablettia tai särkylääkettä kurkkukipuun?"
  },
  {
    id: "pe-s-13",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Uuden tuttavan tapaaminen",
    audioPrompt: "Hei! Olen Jari, asun tässä samassa rapussa kolmannessa kerroksessa. Oletko muuttanut tänne hiljattain?",
    prepSeconds: 5,
    speakSeconds: 30,
    prompt: "Tervehdi ja esittele itsesi. Kerro että muutit tänne viime viikolla ja sano että talo vaikuttaa mukavalta.",
    modelAnswer: "Moi Jari, hauska tutustua! Minun nimeni on Alex. Muutin tänne tosiaan vasta viime viikolla toiseen kerrokseen. Talo ja tämä alue vaikuttavat todella rauhallisilta ja mukavilta."
  },
  {
    id: "pe-s-14",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Vaatteen koon vaihtaminen",
    audioPrompt: "Hei, miten voin auttaa teitä näiden vaatteiden kanssa?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kerro myyjälle että sovitit takkia, mutta se on liian pieni. Kysy löytyykö isompaa kokoa M tai L.",
    modelAnswer: "Hei! Sovitin tätä takkia, mutta se tuntuu vähän liian pieneltä päälläni. Löytyisikö teiltä tästä yhtä kokoa isompaa, kokoa M tai L?"
  },
  {
    id: "pe-s-15",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Pankkikortin katoaminen puhelimitse",
    audioPrompt: "Pankin sulkupalvelu, hyvää päivää. Miten voimme auttaa?",
    prepSeconds: 5,
    speakSeconds: 30,
    prompt: "Kerro että olet kadottanut pankkikorttisi kauppareissulla ja haluat sulkea kortin heti väärinkäytösten estämiseksi.",
    modelAnswer: "Päivää. Olen valitettavasti kadottanut pankkikorttini äsken kaupassa. Haluaisin sulkea korttini välittömästi, ettei kukaan voi käyttää sitä."
  },
  {
    id: "pe-s-16",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Ravintolassa laskun pyytäminen",
    audioPrompt: "Maistuiko ruoka teille hyvin? Saisiko olla vielä jälkiruokaa tai kahvia?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kiitä hyvästä ruoasta. Kieltäydy jälkiruoasta ja pyydä lasku pöytään.",
    modelAnswer: "Kyllä, kiitos paljon, ruoka oli erittäin hyvää! Emme ota enää jälkiruokaa, mutta voisimmeko saada laskun, kiitos?"
  },
  {
    id: "pe-s-17",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kuntosalin laiteopastus",
    audioPrompt: "Moi! Oletko uusi täällä salilla, kaipaatko apua laitteiden kanssa?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Vastaa että olet uusi jäsen ja pyydä häntä näyttämään miten juoksumatto käynnistetään turvallisesti.",
    modelAnswer: "Moi! Olen joo uusi jäsen täällä. Voisitko näyttää minulle nopeasti, miten tämä juoksumatto käynnistetään ja miten nopeutta säädetään turvallisesti?"
  },
  {
    id: "pe-s-18",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Pyöränkorjaamossa asiointi",
    audioPrompt: "Päivää! Mikäs pyörässä on vikana?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kerro että pyörän eturengas on puhki ja takajarru ei toimi kunnolla. Kysy milloin se olisi valmis.",
    modelAnswer: "Päivää. Pyöräni eturengas meni puhki ja takajarru ei ota kunnolla kiinni. Voisitteko korjata ne, ja milloin pyörän voisi hakea?"
  },
  {
    id: "pe-s-19",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Huonekasvien kasteluapu naapurille",
    audioPrompt: "Hei! Lähden ensi viikolla viikoksi lomalle. Ehtisitkö mitenkään kastella minun kukkani kerran viikon aikana?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Suostu mielelläsi auttamaan. Kysy minä päivänä kasvit pitää kastella ja mistä saat avaimen.",
    modelAnswer: "Totta kai, autan tosi mielelläni! Minä päivänä kukat kannattaa kastella, ja milloin tuot minulle asunnon avaimen?"
  },
  {
    id: "pe-s-20",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kampaajalla toiveen kertominen",
    audioPrompt: "Hei ja istukaa vain tuoliin! Millaista mallia tai leikkausta olette ajatelleet tänään?",
    prepSeconds: 5,
    speakSeconds: 25,
    prompt: "Kerro että haluat leikata hiuksista vain latvat pois (noin kaksi senttiä) ja siistiä sivut.",
    modelAnswer: "Hei! Haluaisin vain lyhentää latvoja noin kaksi senttiä ja siistiä hiuksia sivuilta hieman lyhyemmäksi. Muuten pituus on hyvä."
  },

  // 10 Monologues (1-2 min timed speeches with prep time)
  {
    id: "pe-s-21",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Minun tavallinen arkipäiväni",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro omasta tavallisesta arkipäivästäsi:\n- Mihin aikaan heräät aamulla ja mitä syöt aamiaiseksi\n- Mitä teet päivällä (työ, koulu tai muut puuhat)\n- Mitä teet illalla ja mihin aikaan menet nukkumaan.",
    modelAnswer: "Herään arkisin yleensä kello seitsemältä aamulla. Keitän ensin kupillisen kahvia ja syön aamiaiseksi kaurapuuroa ja marjoja. Kello kahdeksalta lähden bussilla töihin tai kouluun. Päivällä työskentelen kello neljään asti ja syön lounasta työkavereiden kanssa. Työpäivän jälkeen käyn ruokakaupassa ja valmistan kotona päivällistä. Illalla tykkään käydä kävelemässä luonnossa tai lukea kirjaa. Menen nukkumaan tavallisesti kello yhdentoista aikoihin."
  },
  {
    id: "pe-s-22",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Lempiharrastukseni",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro lempiharrastuksestasi:\n- Mitä harrastat ja kuinka usein\n- Miksi pidät tästä harrastuksesta\n- Missä harrastat ja mitä välineitä siihen tarvitaan.",
    modelAnswer: "Minun lempiharrastukseni on lenkkeily ja luonnossa liikkuminen. Käyn juoksemassa noin kolme kertaa viikossa läheisessä puistossa tai metsäpoluilla. Pidän juoksemisesta, koska se antaa minulle paljon hyvää energiaa, vahvistaa kuntoa ja auttaa nollaamaan ajatukset kiireisen päivän jälkeen. Harrastus on myös helppo, koska siihen tarvitaan vain hyvät juoksukengät ja mukavat urheiluvaatteet. Suosittelen lenkkeilyä kaikille!"
  },
  {
    id: "pe-s-23",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Kotikaupunkini Suomessa",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kuvaile asuinkaupunkiasi tai -kuntaasi:\n- Missä kaupungissa asut ja millainen se on\n- Mitä paikkoja kaupungissa on (puistot, meri, keskusta)\n- Miksi viihdyt siellä.",
    modelAnswer: "Asun Helsingissä, joka on Suomen kaunis pääkaupunki. Helsinki on sopivan kokoinen kaupunki: siellä on vilkas keskusta ja paljon kulttuuria, mutta myös upeaa meriluontoa ja vehreitä puistoja aivan vieressä. Julkinen liikenne, kuten raitiovaunut ja metrot, toimii täällä tosi kätevästi. Pidän erityisesti siitä, että kaupunki on turvallinen, siisti ja rauhallinen paikka asua ja elää."
  },
  {
    id: "pe-s-24",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Mielipiteeni Suomen vuodenajoista",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Puhu Suomen vuodenajoista:\n- Mikä vuodenaika on suosikkisi ja miksi (talvi, kevät, kesä vai syksy)\n- Millaista säätä silloin on ja mitä silloin voi tehdä\n- Mitä mieltä olet Suomen talvesta ja pimeydestä.",
    modelAnswer: "Suomessa on neljä hyvin erilaista vuodenaikaa, ja minun suosikkini on kesä. Kesällä Suomessa on valoisaa lähes ympäri vuorokauden, lämmintä ja luonto on kauneimmillaan. Kesällä voi uida järvissä, mökkeillä ja nauttia grillauksesta. Talvi on toisaalta melko kylmä ja pimeä, mutta kun maassa on valkoista lunta, talvikin tuntuu tunnelmalliselta. Talvella on kiva luistella, hiihtää ja mennä saunaan lämmittelemään."
  },
  {
    id: "pe-s-25",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Minun perheeni tai ystäväni",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro perheestäsi tai parhaasta ystävästäsi:\n- Keitä perheeseesi kuuluu tai kuka ystäväsi on\n- Mitä he tekevät (työ, koulu, harrastukset)\n- Mitä tykkäätte tehdä yhdessä vapaa-ajalla.",
    modelAnswer: "Haluan kertoa parhaasta ystävästäni Larasta. Olemme tunteneet toisemme jo monta vuotta. Lara työskentelee opettajana ja hän on luonteeltaan todella iloinen, auttavainen ja huumorintajuinen ihminen. Vapaa-ajalla hän harrastaa tanssia ja valokuvausta. Me tykkäämme tavata viikonloppuisin, käydä yhdessä kahvilla, laittaa hyvää ruokaa ja keskustella kaikista elämän asioista tuntikausia."
  },
  {
    id: "pe-s-26",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Mieleenpainuva matka",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro jostakin mukavasta matkasta, jonka olet tehnyt:\n- Minne matkustit ja kenen kanssa\n- Mitä näit ja teit matkalla\n- Miksi matka oli erityinen ja mukava.",
    modelAnswer: "Matkustin viime talvena perheeni kanssa viikoksi Suomen Lappiin Rovaniemelle. Matka oli aivan unohtumaton kokemus. Näimme paljon lunta, ajoimme poroajelulla ja pääsimme näkemään taivaalla vihreänä loimuavat revontulet. Kävimme myös Joulupukin Pajakylässä, josta lapset pitivät valtavasti. Matka oli erityinen, koska Lapin hiljaisuus ja talvinen luonto olivat niin uskomattoman kauniita."
  },
  {
    id: "pe-s-27",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Lempiruokani ja ruoanlaitto",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Puhu ruoasta ja kokkaamisesta:\n- Mitä lempiruokasi on ja mistä se valmistetaan\n- Tykkäätkö laittaa ruokaa itse kotona vai syödä ravintolassa\n- Oletko maistanut perinteisiä suomalaisia ruokia (esim. karjalanpiirakoita, lohikeittoa).",
    modelAnswer: "Minun lempiruokani on perinteinen lohikeitto ruisleivän kanssa. Lohikeitto valmistetaan tuoreesta lohesta, perunoista, porkkanoista, tillistä ja kermasta. Tykkään kokata sitä itse kotona, koska ruoanlaitto on mukavaa ja rentouttavaa puuhaa. Olen maistanut myös karjalanpiirakoita munavoin kera ja mustikkapiirakkaa, ja ne ovat molemmat mielestäni aivan valtavan herkullisia suomalaisia perinneruokia."
  },
  {
    id: "pe-s-28",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Unelma-ammattini ja työelämä",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro unelmatyöstäsi:\n- Mitä työtä haluaisit tehdä tulevaisuudessa\n- Miksi tämä ammatti kiinnostaa sinua\n- Mitä taitoja kyseisessä työssä tarvitaan.",
    modelAnswer: "Unelma-ammattini olisi toimia opastajana tai asiakaspalvelijana kansainvälisessä matkailuyrityksessä. Pidän ihmisten auttamisesta, uusien kulttuurien oppimisesta ja kielten puhumisesta. Tässä työssä tarvitaan hyviä vuorovaikutustaitoja, positiivista asennetta ja sujuvaa kielitaitoa. Toivon, että suomen kielen taitoni kehittyy pian niin hyväksi, että voin palvella asiakkaita sujuvasti myös suomeksi."
  },
  {
    id: "pe-s-29",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Viikonloppusuunnitelmani",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro mitä aiot tehdä ensi viikonloppuna:\n- Mitä suunnitelmia sinulla on lauantaiksi ja sunnuntaiksi\n- Teetkö asioita yksin vai perheen tai ystävien kanssa\n- Miten aiot rentoutua ennen uutta viikkoa.",
    modelAnswer: "Ensi viikonlopulle minulla on mukavia suunnitelmia. Lauantaina aion herätä rauhassa ilman herätyskelloa ja syödä pitkän aamiaisen. Iltapäivällä menen ystäväni kanssa keskustaan kiertelemään kauppoja ja juomaan kahvit. Sunnuntaina aion siivota kotona, käydä uimahallissa saunomassa ja uimassa sekä valmistaa ruokaa valmiiksi seuraavaa viikkoa varten. Illalla katson hyvää elokuvaa sohvalla ja menen ajoissa nukkumaan."
  },
  {
    id: "pe-s-30",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Miten opin suomen kieltä parhaiten",
    prepSeconds: 45,
    speakSeconds: 90,
    prompt: "Kerro miten opiskelet ja harjoittelet suomen kieltä:\n- Mitä tapoja käytät (kielikurssi, kirjat, mobiilisovellukset)\n- Miten harjoittelet puhumista arkielämässä\n- Mikä suomen kielessä on mielestäsi vaikeinta ja mikä hauskinta.",
    modelAnswer: "Opiskelen suomen kieltä monella eri tavalla. Käyn suomen kurssilla kaksi kertaa viikossa ja teen kotitehtäviä huolellisesti. Lisäksi käytän FiksLingo-sovellusta päivittäin uusien sanojen oppimiseen. Yritän myös puhua suomea aina rohkeasti kaupassa, kirjastossa ja naapureiden kanssa. Suomen kielen taivutusmuodot ja sijamuodot ovat välillä haastavia, mutta on tosi palkitsevaa ja hauskaa huomata, kun ymmärtää uusia asioita ja pystyy kommunikoimaan paikallisten kanssa."
  }
];
