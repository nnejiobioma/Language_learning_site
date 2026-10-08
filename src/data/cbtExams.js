// Standard Computer Based Testing (CBT) Examination Bank for FiksLingo
// Grounded in official examination standards (e.g. YKI - Yleinen kielitutkinto in Finland, CEFR standards)

export const CBT_EXAMS = {
  finnish: [
    {
      id: "fi-yki-keskitaso",
      title: "YKI Keskitaso (B1–B2) Citizenship & Professional Exam",
      subtitle: "Official Finnish National Certificate Simulation for Citizenship & Public Sector Work",
      badgeText: "Kansalaisuuskoe (Citizenship Standard)",
      level: "B1–B2 (CEFR Threshold)",
      timeLimitMinutes: 25,
      passPercentage: 70,
      description: "A standard timed multi-section CBT examination testing authentic Reading Comprehension, Grammar & Case Rections, Listening Comprehension, and Situational Judgement.",
      sections: [
        "Tekstin ymmärtäminen (Reading)",
        "Rakenteet & Sanasto (Structures & Cases)",
        "Kuuntelun ymmärtäminen (Listening)",
        "Tilannekirjoittaminen (Situational Response)"
      ],
      questions: [
        // Section 1: Reading Comprehension (Tekstin ymmärtäminen)
        {
          id: "fi-cbt-1",
          section: "Tekstin ymmärtäminen (Reading)",
          passage: `TALOYHTIÖN TIEDOTE — LINJASANEERAUS (PUTKIREMONTTI)
Asunto Oy Helsingin Kotiranta tiedottaa osakkaille ja asukkaille:

Taloyhtiössämme aloitetaan laaja linjasaneeraus maanantaina 15. marraskuuta. Työt alkavat A-portaasta ja etenevät porras kerrallaan C-portaaseen saakka. Kussakin asunnossa vesikatko ja viemäreiden poiskytkentä kestää noin kolme viikkoa, jolloin huoneiston märkätilat ovat poissa käytöstä.

Pihalle tuodaan tilapäiset lämmitetyt suihku- ja wc-kontit asukkaiden ympärivuorokautiseen käyttöön. Avainhallinnasta vastaa urakoitsija: yleisavaimella liikutaan asunnoissa arkisin klo 07:00–16:00 välisenä aikana. Lemmikkieläimiä ei saa jättää valvomatta asuntoon työpäivien aikana turvallisuussyistä.

Mahdolliset kysymykset voi osoittaa suoraan vastaavalle työnjohtajalle (puh. 040 123 4567) tai isännöitsijälle.`,
          prompt: "Miten asukkaiden peseytyminen järjestetään asuntokohtaisen vesikatkon aikana?",
          options: [
            "A) Asukkaiden tulee käyttää naapuritalon saunaa erillistä maksua vastaan.",
            "B) Pihalle asennetaan tilapäiset lämmitetyt suihku- ja wc-kontit, jotka ovat käytössä 24/7.",
            "C) Vesi on kytkettynä päälle joka ilta klo 18 jälkeen.",
            "D) Asukkaiden on muutettava hotelliin taloyhtiön kustannuksella."
          ],
          correctAnswer: "B) Pihalle asennetaan tilapäiset lämmitetyt suihku- ja wc-kontit, jotka ovat käytössä 24/7.",
          explanation: "Tiedotteessa todetaan selkeästi: 'Pihalle tuodaan tilapäiset lämmitetyt suihku- ja wc-kontit asukkaiden ympärivuorokautiseen käyttöön.'"
        },
        {
          id: "fi-cbt-2",
          section: "Tekstin ymmärtäminen (Reading)",
          passage: `TYÖPAIKKAILMOITUS — ASIAKASPALVELUNEUVOTTELEVA
Haemme monikansalliseen logistiikkakeskukseemme Vantaalle motivoitunutta ja kielitaitoista asiakaspalveluneuvottelijaa toistaiseksi voimassa olevaan työsuhteeseen.

Tehtävässä vastaat yritysasiakkaidemme tilausseurannasta, laskutuskysymyksistä sekä reklamaatioiden käsittelystä suomeksi ja englanniksi. Toivomme sinulta vähintään kahden vuoden työkokemusta asiakasrajapinnasta, itsenäistä ongelmanratkaisukykyä sekä sujuvaa tietojärjestelmien hallintaa. Ruotsin kielen taito katsotaan merkittäväksi eduksi.

Tarjoamme joustavan hybridityömallin (2–3 etäpäivää viikossa perehdytyksen jälkeen), kattavan työterveyshuollon sekä liikunta- ja kulttuuriedun. Hakuaika päättyy 30. lokakuuta.`,
          prompt: "Mikä seuraavista vaatimuksista on hakijalle ehdoton edellytys ilmoituksen mukaan?",
          options: [
            "A) Täydellinen ruotsin kielen kirjallinen taito.",
            "B) Valmius työskennellä toimistolla joka päivä ilman etätyömahdollisuutta.",
            "C) Suomen ja englannin kielen taito sekä vähintään 2 vuoden kokemus asiakaspalvelusta.",
            "D) Vähintään viiden vuoden kokemus logistiikka-alan johtotehtävistä."
          ],
          correctAnswer: "C) Suomen ja englannin kielen taito sekä vähintään 2 vuoden kokemus asiakaspalvelusta.",
          explanation: "Ilmoituksessa vaaditaan käsittelyä 'suomeksi ja englanniksi' sekä 'vähintään kahden vuoden työkokemusta asiakasrajapinnasta'. Ruotsi on vain etu, ei ehdoton vaatimus."
        },
        {
          id: "fi-cbt-3",
          section: "Tekstin ymmärtäminen (Reading)",
          passage: `KELA TIEDOTTAA: OPINTOTUEN TULORAJAT
Opiskelijan omien tulojen vuosituloraja määräytyy sen mukaan, kuinka monelta kuukaudelta hän on nostanut opintotukea kalenterivuoden aikana. Jos vuosituloraja ylittyy, opiskelijan on palautettava liikaa maksettu tuki oma-aloitteisesti seuraavan vuoden toukokuun loppuun mennessä.

Jos tukea ei palauteta ajoissa, Kela perii liikaa maksetun tuen takaisin 7,5 prosentin korotuksella. Tulojen tarkistaminen OmaKelassa kannattaa tehdä aina loppuvuodesta.`,
          prompt: "Mitä tapahtuu, jos opiskelija tienaa yli tulorajan eikä palauta tukea toukokuun loppuun mennessä?",
          options: [
            "A) Opinto-oikeus yliopistossa mitätöidään välittömästi.",
            "B) Kela perii tuen takaisin lisättynä 7,5 prosentin korotuksella.",
            "C) Tuki muutetaan automaattisesti verovapaaksi stipendiksi.",
            "D) Tuloraja nousee kaksinkertaiseksi seuraavalle vuodelle."
          ],
          correctAnswer: "B) Kela perii tuen takaisin lisättynä 7,5 prosentin korotuksella.",
          explanation: "Tekstissä todetaan: 'Kela perii liikaa maksetun tuen takaisin 7,5 prosentin korotuksella.'"
        },

        // Section 2: Structures & Grammar (Rakenteet ja Sanasto)
        {
          id: "fi-cbt-4",
          section: "Rakenteet & Sanasto (Structures)",
          prompt: "Valitse oikea sijamuoto lauseeseen: 'Hän osti eilen uuden ___.'",
          options: [
            "A) puhelin",
            "B) puhelimen",
            "C) puhelinta",
            "D) puhelimessa"
          ],
          correctAnswer: "B) puhelimen",
          explanation: "Yksikön kokonaisobjekti myönteisessä loppuun saatetussa teossa saa genetiivimuodon (-n): 'osti uuden puhelimen'."
        },
        {
          id: "fi-cbt-5",
          section: "Rakenteet & Sanasto (Structures)",
          prompt: "Täydennä kielteinen lause oikein: 'Minä en nähnyt eilen kadulla ___.'",
          options: [
            "A) ketään",
            "B) kuka",
            "C) kenet",
            "D) kenelle"
          ],
          correctAnswer: "A) ketään",
          explanation: "Kielteisessä lauseessa objekti on partitiivissa. Pronominin 'kukaan' partitiivimuoto on 'ketään'."
        },
        {
          id: "fi-cbt-6",
          section: "Rakenteet & Sanasto (Structures)",
          prompt: "Mikä verbin 'osallistua' rektio on?",
          options: [
            "A) osallistua + mihin / illatiivi (esim. osallistua kurssille / kokoukseen)",
            "B) osallistua + mistä / elatiivi (esim. osallistua kurssista)",
            "C) osallistua + partitiivi (esim. osallistua kurssia)",
            "D) osallistua + adessiivi (esim. osallistua kurssilla)"
          ],
          correctAnswer: "A) osallistua + mihin / illatiivi (esim. osallistua kurssille / kokoukseen)",
          explanation: "Verbi 'osallistua' vaatii aina illatiivin tai allatiivin (mihin): 'osallistua kokoukseen / seminaariin'."
        },
        {
          id: "fi-cbt-7",
          section: "Rakenteet & Sanasto (Structures)",
          prompt: "Muuta lause passiiviin: 'Ihmiset puhuvat Suomessa paljon englantia.' -> 'Suomessa ___ paljon englantia.'",
          options: [
            "A) puhutaan",
            "B) puhuttiin",
            "C) puhuttaisiin",
            "D) puhuttu"
          ],
          correctAnswer: "A) puhutaan",
          explanation: "Preesensin passiivimuoto verbille 'puhua' on 'puhutaan'."
        },
        {
          id: "fi-cbt-8",
          section: "Rakenteet & Sanasto (Structures)",
          prompt: "Valitse oikea lauseenvastike lauseelle: 'Kun olimme syöneet lounaan, palasimme töihin.'",
          options: [
            "A) Syödessämme lounaan, palasimme töihin.",
            "B) Syötyämme lounaan, palasimme töihin.",
            "C) Syömään lounaan, palasimme töihin.",
            "D) Syötyä lounasta, palasimme töihin."
          ],
          correctAnswer: "B) Syötyämme lounaan, palasimme töihin.",
          explanation: "Menneen ajan temporaalinen lauseenvastike muodostetaan 2. partisiipin partitiivilla + omistusliitteellä: 'Syötyämme' = Kun olimme syöneet."
        },
        {
          id: "fi-cbt-9",
          section: "Rakenteet & Sanasto (Structures)",
          prompt: "Täydennä lause oikealla possessiivisuffiksilla: 'Matti unohti avaime___ kotiin.'",
          options: [
            "A) -nsa (avaimensa)",
            "B) -ni (avaimeni)",
            "C) -mme (avaimemme)",
            "D) -si (avaimesi)"
          ],
          correctAnswer: "A) -nsa (avaimensa)",
          explanation: "3. persoonan (hän / Matti) omistusliite on '-nsa/-nsä': 'unohti avaimensa'."
        },

        // Section 3: Listening Comprehension (Kuuntelun ymmärtäminen)
        {
          id: "fi-cbt-10",
          section: "Kuuntelun ymmärtäminen (Listening)",
          audioPhrase: "Hyvät matkustajat, intercity-juna 45 Ouluun lähtee poikkeuksellisesti raiteelta neljä, ei raiteelta kaksi. Juna on myöhässä noin kymmenen minuuttia.",
          prompt: "Kuuntele kuulutus. Miltä raiteelta Oulun juna lähtee ja onko se aikataulussa?",
          options: [
            "A) Raiteelta 2, ja se on täsmällisesti ajallaan.",
            "B) Raiteelta 4, ja se on myöhässä noin 10 minuuttia.",
            "C) Raiteelta 4, ja se on peruttu kokonaan.",
            "D) Raiteelta 1, ja se lähtee 15 minuuttia etuajassa."
          ],
          correctAnswer: "B) Raiteelta 4, ja se on myöhässä noin 10 minuuttia.",
          explanation: "Kuulutus ilmoittaa: 'lähtee poikkeuksellisesti raiteelta neljä... juna on myöhässä noin kymmenen minuuttia'."
        },
        {
          id: "fi-cbt-11",
          section: "Kuuntelun ymmärtäminen (Listening)",
          audioPhrase: "Lääkärikeskus Mehiläinen, huomenta. Teille on varattu aika tohtori Virtaselle huomenna torstaina kello neljätoista kolmekymmentä. Muistattehan ottaa Kela-kortin mukaan.",
          prompt: "Kuuntele puhelinviesti. Mihin aikaan lääkäriaika on varattu?",
          options: [
            "A) Kello 12:30 torstaina.",
            "B) Kello 14:00 torstaina.",
            "C) Kello 14:30 torstaina (kaksi iltapäivällä).",
            "D) Kello 16:30 perjantaina."
          ],
          correctAnswer: "C) Kello 14:30 torstaina (kaksi iltapäivällä).",
          explanation: "Viestissä sanotaan: 'kello neljätoista kolmekymmentä' (14:30)."
        },
        {
          id: "fi-cbt-12",
          section: "Kuuntelun ymmärtäminen (Listening)",
          audioPhrase: "Anteeksi, tietäisittekö missä täällä on lähin pankkiautomaatti? Se asematunnelin Otto-automaatti taitaa nimittäin olla epäkunnossa.",
          prompt: "Mitä henkilö tiedustelee ohikulkijalta?",
          options: [
            "A) Milloin juna-asema avautuu.",
            "B) Missä on lähin toimiva pankkiautomaatti rahan nostamista varten.",
            "C) Missä voi vaihtaa valuuttaa euroiksi.",
            "D) Paljonko junalippu asematunneliin maksaa."
          ],
          correctAnswer: "B) Missä on lähin toimiva pankkiautomaatti rahan nostamista varten.",
          explanation: "Puhuja kysyy lähintä pankkiautomaattia, koska asematunnelin Otto on epäkunnossa."
        },

        // Section 4: Situational Communication & Writing Judgement (Tilanneviestintä)
        {
          id: "fi-cbt-13",
          section: "Tilanneviestintä (Situational)",
          prompt: "Haluat lähettää esihenkilöllesi virallisen sähköpostiviestin, jossa ilmoitat sairastuneesi flunssaan ja joutuvasi olemaan poissa töistä kaksi päivää. Mikä aloitus ja viestin sävy on sopivin ja ammattimaisin?",
          options: [
            "A) 'Moi pomo! En jaksa tulla tänään, nähdään joskus myöhemmin.'",
            "B) 'Hei Johanna, Ilmoitan valitettavasti, että olen sairastunut kovaan flunssaan ja lääkärin arvion mukaan joudun olemaan sairauslomalla tämän viikon torstaihin saakka. Toimitan sairauslomatodistuksen heti kun mahdollista. Ystävällisin terveisin, Alex.'",
            "C) 'Kuule Johanna, miksi meillä on aina niin paljon töitä? Olen kipeä enkä tule.'",
            "D) 'Arvoisa Tasavallan Presidentti, joudun ilmoittamaan poissaolostani valtiollisista tehtävistä.'"
          ],
          correctAnswer: "B) 'Hei Johanna, Ilmoitan valitettavasti, että olen sairastunut kovaan flunssaan ja lääkärin arvion mukaan joudun olemaan sairauslomalla tämän viikon torstaihin saakka. Toimitan sairauslomatodistuksen heti kun mahdollista. Ystävällisin terveisin, Alex.'",
          explanation: "Vaihtoehto B käyttää asiallista, selkeää ja ammatillista suomen kielen rekisteriä ilmoittaen poissaolon syyn, keston ja todistuksen toimituksen."
        },
        {
          id: "fi-cbt-14",
          section: "Tilanneviestintä (Situational)",
          prompt: "Olet vastaanottanut väärän tuotteen verkkokaupasta ja haluat reklamoida asiakaspalveluun ystävällisesti mutta jämäkästi. Miten muotoilet asiasi parhaiten?",
          options: [
            "A) 'Olette huijareita! Palauttakaa rahani heti tai menen poliisille!'",
            "B) 'Hei, Tilasin verkkokaupastanne takin (tilausnumero 45678), mutta paketissa saapui kengät. Haluaisin vaihtaa tuotteen tilaamaani takkiin tai saada ohjeet tuotteen maksuttomaan palautukseen ja hyvitykseen. Ystävällisin terveisin, Laura.'",
            "C) 'En tiedä mitä tehdä, mutta laitoin kengät roskiin.'",
            "D) 'Eipä tässä mitään, pidän kengät vaikka en niitä tarvitsekaan.'"
          ],
          correctAnswer: "B) 'Hei, Tilasin verkkokaupastanne takin (tilausnumero 45678), mutta paketissa saapui kengät. Haluaisin vaihtaa tuotteen tilaamaani takkiin tai saada ohjeet tuotteen maksuttomaan palautukseen ja hyvitykseen. Ystävällisin terveisin, Laura.'",
          explanation: "Tehokas reklamaatio yksilöi tilauksen, selittää virheen asiallisesti ja ehdottaa selkeää ratkaisua (vaihto tai maksuton palautus)."
        },
        {
          id: "fi-cbt-15",
          section: "Tilanneviestintä (Situational)",
          prompt: "Ystäväsi tarjoaa sinulle ruokaa, jossa on pähkinää, jolle olet hengenvaarallisesti allerginen. Miten ilmaiset asian kohteliaasti mutta ehdottoman selkeästi?",
          options: [
            "A) 'Kiitos paljon tarjouksesta, mutta en valitettavasti voi syödä tätä, sillä olen vakavasti allerginen pähkinöille.'",
            "B) 'En pidä ruuastasi, se näyttää pahalta.'",
            "C) 'Voin maistaa vain pienen palan, vaikka joutuisin sairaalaan.'",
            "D) 'Pähkinät ovat typerää ruokaa.'"
          ],
          correctAnswer: "A) 'Kiitos paljon tarjouksesta, mutta en valitettavasti voi syödä tätä, sillä olen vakavasti allerginen pähkinöille.'",
          explanation: "Kohtelias kieltäytyminen kiittää tarjouksesta ja ilmaisee selkeän lääketieteellisen syyn."
        }
      ]
    },

    {
      id: "fi-yki-perustaso",
      title: "YKI Perustaso (A1–A2) Beginner Survival Exam",
      subtitle: "Everyday Foundation Practice for Practical Life, Shopping, Transit & Health",
      badgeText: "Perustaso (A1–A2 Survival)",
      level: "A1–A2 (CEFR Foundation)",
      timeLimitMinutes: 20,
      passPercentage: 65,
      description: "Introductory computer-based test covering basic greetings, ordering, local transportation, price inquiries, and everyday family communication.",
      sections: [
        "Arkipäivän viestintä (Daily Life)",
        "Ostokset & Asiointi (Errands & Shops)",
        "Sää, Aika & Matkustaminen (Time & Travel)"
      ],
      questions: [
        {
          id: "fi-perus-1",
          section: "Arkipäivän viestintä (Daily Life)",
          prompt: "Miten tervehdit kaupan kassaa aamupäivällä kohteliaasti suomeksi?",
          options: [
            "A) Hyvää huomenta / Hei!",
            "B) Hyvää yötä!",
            "C) Ei kestä!",
            "D) Ole hyvä!"
          ],
          correctAnswer: "A) Hyvää huomenta / Hei!",
          explanation: "'Hyvää huomenta' tai 'Hei' on luonteva ja kohtelias aamupäivän tervehdys."
        },
        {
          id: "fi-perus-2",
          section: "Arkipäivän viestintä (Daily Life)",
          prompt: "Mikä on lauseen 'Minulla on kaksi lasta' oikea englanninkielinen merkitys?",
          options: [
            "A) I have two cars.",
            "B) I have two children.",
            "C) I live in two houses.",
            "D) I have two dogs."
          ],
          correctAnswer: "B) I have two children.",
          explanation: "'Lapsi' (partitiivi monikossa 'lasta') tarkoittaa lasta (children)."
        },
        {
          id: "fi-perus-3",
          section: "Ostokset & Asiointi (Errands & Shops)",
          prompt: "Haluat ostaa torilta maitoa ja leipää. Miten pyydät niitä myyjältä?",
          options: [
            "A) Saisinko maitoa ja leipää, kiitos?",
            "B) Minulla on maito ja leipä.",
            "C) Missä maito asuu?",
            "D) Osta minulle leipä!"
          ],
          correctAnswer: "A) Saisinko maitoa ja leipää, kiitos?",
          explanation: "'Saisinko...' + partitiivimuodot 'maitoa ja leipää' on kohtelias tilausfraasi."
        },
        {
          id: "fi-perus-4",
          section: "Ostokset & Asiointi (Errands & Shops)",
          prompt: "Kysyt kaupassa paidan hintaa. Mikä kysymys on oikein?",
          options: [
            "A) Paljonko tämä paita maksaa?",
            "B) Miksi tämä paita maksaa?",
            "C) Kuka tämä paita on?",
            "D) Mihin paita menee?"
          ],
          correctAnswer: "A) Paljonko tämä paita maksaa?",
          explanation: "'Paljonko tämä maksaa?' on vakiintunut kysymys hinnan tiedusteluun."
        },
        {
          id: "fi-perus-5",
          section: "Sää, Aika & Matkustaminen (Time & Travel)",
          prompt: "Kello näyttää aikaa 14:15. Miten sanot sen suomeksi?",
          options: [
            "A) Kello on varttia vaille kaksi.",
            "B) Kello on vartin yli kaksi.",
            "C) Kello on puoli kaksi.",
            "D) Kello on tasan kaksi."
          ],
          correctAnswer: "B) Kello on vartin yli kaksi.",
          explanation: "14:15 on 'vartin yli kaksi' (quarter past two)."
        },
        {
          id: "fi-perus-6",
          section: "Sää, Aika & Matkustaminen (Time & Travel)",
          prompt: "Mitä 'Tänään sataa lunta ja on pakkasta' tarkoittaa?",
          options: [
            "A) Today it is raining and very warm.",
            "B) Today it is snowing and below freezing.",
            "C) Today the sun is shining brightly.",
            "D) Today it is stormy with thunder."
          ],
          correctAnswer: "B) Today it is snowing and below freezing.",
          explanation: "'Sataa lunta' = snowing; 'pakkanen' = freezing/sub-zero temperature."
        },
        {
          id: "fi-perus-7",
          section: "Ostokset & Asiointi (Errands & Shops)",
          prompt: "Olet apteekissa ja tarvitset särkylääkettä päänsärkyyn. Mitä sanot farmaseutille?",
          options: [
            "A) Tarvitsisin särkylääkettä kovaan päänsärkyyn.",
            "B) Haluaisin ostaa sanomalehden ja kahvin.",
            "C) Missä bussi numero kymmenen pysähtyy?",
            "D) Minulla on nälkä, onko teillä leipää?"
          ],
          correctAnswer: "A) Tarvitsisin särkylääkettä kovaan päänsärkyyn.",
          explanation: "'Särkylääke' on kipulääke päänsärkyyn (headache painkiller)."
        },
        {
          id: "fi-perus-8",
          section: "Sää, Aika & Matkustaminen (Time & Travel)",
          prompt: "Kysyt tietä: 'Anteeksi, miten pääsen rautatieasemalle?' Mitä kysyt?",
          options: [
            "A) How much does the railway ticket cost?",
            "B) Excuse me, how do I get to the railway station?",
            "C) When does the next train to Tampere depart?",
            "D) Is the railway station closed today?"
          ],
          correctAnswer: "B) Excuse me, how do I get to the railway station?",
          explanation: "'Miten pääsen...' kysyy reittiä ja kulkuyhteyttä kohteeseen."
        },
        {
          id: "fi-perus-9",
          section: "Arkipäivän viestintä (Daily Life)",
          prompt: "Täydennä lause oikealla sanalla: 'Asun perheeni kanssa kauniissa ___ Helsingissä.'",
          options: [
            "A) talossa",
            "B) talolle",
            "C) talosta",
            "D) taloa"
          ],
          correctAnswer: "A) talossa",
          explanation: "Inessiivi (-ssa/-ssä) ilmaisee asumista jossakin paikassa: 'talossa'."
        },
        {
          id: "fi-perus-10",
          section: "Arkipäivän viestintä (Daily Life)",
          prompt: "Ystäväsi sanoo sinulle: 'Kiitos paljon avustasi!' Miten vastaat luontevasti?",
          options: [
            "A) Ole hyvä! / Eipä kestä!",
            "B) Anteeksi!",
            "C) Hyvää yötä!",
            "D) Minun nimeni on Matti."
          ],
          correctAnswer: "A) Ole hyvä! / Eipä kestä!",
          explanation: "'Ole hyvä' tai 'Eipä kestä' on luonnollinen vastaus kiitokseen."
        }
      ]
    },

    {
      id: "fi-yki-ylintaso",
      title: "YKI Ylintaso (C1–C2) Academic & Literary Mastery Exam",
      subtitle: "Advanced National Certification in Law, Public Administration, Academia & Rhetoric",
      badgeText: "Ylintaso (C1–C2 Master)",
      level: "C1–C2 (CEFR Mastery)",
      timeLimitMinutes: 30,
      passPercentage: 75,
      description: "Rigorous high-level examination testing participial replacements (lauseenvastikkeet), statutory terminology, academic discourse, and literary interpretation.",
      sections: [
        "Juridinen & Hallinnollinen kieli (Legal & Bureaucracy)",
        "Lauseenvastikkeet & Syntaksi (Advanced Syntax)",
        "Kulttuuri & Kirjallisuuden tulkinta (Culture & Literature)"
      ],
      questions: [
        {
          id: "fi-ylin-1",
          section: "Juridinen & Hallinnollinen kieli (Legal & Bureaucracy)",
          prompt: "Mitä tarkoitetaan käsitteellä 'oikeusvoima' (res judicata) suomalaisessa prosessioikeudessa?",
          options: [
            "A) Poliisin oikeutta käyttää voimakeinoja pakkotilanteessa.",
            "B) Tuomioistuimen lopullisen päätöksen sitovuutta, jolloin samaa asiaa ei voida enää ottaa uudelleen tutkittavaksi samojen asianosaisten välillä.",
            "C) Asianajajan oikeutta edustaa asiakastaan oikeussalissa.",
            "D) Eduskunnan lakia säätävää toimivaltaa."
          ],
          correctAnswer: "B) Tuomioistuimen lopullisen päätöksen sitovuutta, jolloin samaa asiaa ei voida enää ottaa uudelleen tutkittavaksi samojen asianosaisten välillä.",
          explanation: "Oikeusvoima tarkoittaa tuomion lopullisuutta ja sitovuutta lainvoimaisuuden jälkeen."
        },
        {
          id: "fi-ylin-2",
          section: "Lauseenvastikkeet & Syntaksi (Advanced Syntax)",
          prompt: "Mikä seuraavista ilmaisee agenttirakenteen mukaisen lauseenvastikkeen virheettömästi?",
          options: [
            "A) Eduskunnan säätämä laki astuu voimaan vuodenvaihteessa.",
            "B) Eduskunta säätää laki joka astuu voimaan.",
            "C) Eduskunnan säätämässä laissa oli virhe kun se astui voimaan.",
            "D) Laki joka oli eduskunnalta säädetty astuu voimaan."
          ],
          correctAnswer: "A) Eduskunnan säätämä laki astuu voimaan vuodenvaihteessa.",
          explanation: "Agenttirakenteessa tekijä on genetiivissä ('Eduskunnan') ja pääsanaa määrittää agenttipartisiippi ('säätämä')."
        },
        {
          id: "fi-ylin-3",
          section: "Lauseenvastikkeet & Syntaksi (Advanced Syntax)",
          prompt: "Tunnista finaalirakenteen lauseenvastike:",
          options: [
            "A) Saavuttaakseen tavoitteensa tutkijan oli työskenneltävä uupumatta.",
            "B) Saavuttaessaan tavoitteensa tutkija oli tyytyväinen.",
            "C) Tutkijan saavutettua tavoitteensa tutkimus valmistui.",
            "D) Tutkija tiesi saavuttavansa tavoitteensa."
          ],
          correctAnswer: "A) Saavuttaakseen tavoitteensa tutkijan oli työskenneltävä uupumatta.",
          explanation: "Finaalirakenne ilmaisee tarkoitusta ('jotta saavuttaisi'): translatiivin 1. infinitiivi + omistusliite ('saavuttaakseen')."
        },
        {
          id: "fi-ylin-4",
          section: "Kulttuuri & Kirjallisuuden tulkinta (Culture & Literature)",
          prompt: "Minkä runomitan ja kielellisen keinon varaan Kalevalan eeppinen säerakenne perustuu?",
          options: [
            "A) Loppusointuiseen jambiseen viisipolviseen mittaan.",
            "B) Nelipolviseen trokeeseen, alkusointuun (allitteraatio) ja kertosäkeisyyteen (parallellismi).",
            "C) Rytmittömään vapaaseen mittaan ja ranskalaiseen aleksandriiniin.",
            "D) Hexametriin ja antiikin elegiseen säepariin."
          ],
          correctAnswer: "B) Nelipolviseen trokeeseen, alkusointuun (allitteraatio) ja kertosäkeisyyteen (parallellismi).",
          explanation: "Kalevalamitta on nelipolvinen trokee, jolle ominaista ovat allitteraatio (esim. 'Mieleni minun tekevi') ja parallellismi."
        },
        {
          id: "fi-ylin-5",
          section: "Juridinen & Hallinnollinen kieli (Legal & Bureaucracy)",
          prompt: "Mitä 'subsidiariteettiperiaate' tarkoittaa julkishallinnollisessa ja valtiosääntöoikeudellisessa viitekehyksessä?",
          options: [
            "A) Periaatetta, jonka mukaan päätökset on tehtävä mahdollisimman lähellä kansalaisia alimmalla mahdollisella toimivaltaisella tasolla.",
            "B) Talousarvion ylijäämän sijoittamista valtion eläkerahastoon.",
            "C) Ylimmän laillisuusvalvojan itsenäistä riippumattomuutta hallituksesta.",
            "D) Kansainvälisten sopimusten ensisijaisuutta kansalliseen perustuslakiin nähden."
          ],
          correctAnswer: "A) Periaatetta, jonka mukaan päätökset on tehtävä mahdollisimman lähellä kansalaisia alimmalla mahdollisella toimivaltaisella tasolla.",
          explanation: "Subsidiariteettiperiaate eli toissijaisuusperiaate määrää, että julkisen vallan päätökset tulee tehdä mahdollisimman lähellä niitä, joita asia koskee."
        }
      ]
    }
  ],

  spanish: [
    {
      id: "es-dele-b1",
      title: "DELE B1 Intermediate Examination Simulation",
      subtitle: "Official Instituto Cervantes Standard Exam for Independent Spanish Communication",
      badgeText: "DELE B1 (Cervantes Standard)",
      level: "B1 (CEFR Intermediate)",
      timeLimitMinutes: 20,
      passPercentage: 70,
      description: "Timed exam testing Spanish Reading Comprehension, Subjunctive Mood, Preterite vs Imperfect, and Practical Everyday Correspondence.",
      sections: ["Comprensión de lectura", "Gramática & Subjuntivo", "Expresión e interacción"],
      questions: [
        {
          id: "es-cbt-1",
          section: "Gramática & Subjuntivo",
          prompt: "¿Cuál es la forma correcta del presente de subjuntivo en: 'Es necesario que tú ___ (estudiar) más'?",
          options: ["A) estudias", "B) estudies", "C) estudiabas", "D) estudiarás"],
          correctAnswer: "B) estudies",
          explanation: "Las expresiones impersonales de necesidad ('es necesario que') exigen el modo subjuntivo: 'estudies'."
        },
        {
          id: "es-cbt-2",
          section: "Gramática & Subjuntivo",
          prompt: "Completa con pretérito indefinido o imperfecto: 'Ayer, mientras yo ___ (cocinar), sonó el teléfono.'",
          options: ["A) cociné", "B) cocinaba", "C) cocino", "D) haya cocinado"],
          correctAnswer: "B) cocinaba",
          explanation: "Una acción continua en el pasado que sirve de fondo a una acción puntual se expresa en pretérito imperfecto: 'cocinaba'."
        },
        {
          id: "es-cbt-3",
          section: "Comprensión de lectura",
          prompt: "En un restaurante en Madrid, ¿qué significa la frase '¿Nos cobra, por favor?'?",
          options: [
            "A) Pedir más comida al camarero.",
            "B) Solicitar la cuenta para pagar el consumo.",
            "C) Preguntar cuánto cuesta abrir un restaurante.",
            "D) Quejarse por el mal servicio del local."
          ],
          correctAnswer: "B) Solicitar la cuenta para pagar el consumo.",
          explanation: "'¿Nos cobra, por favor?' es una fórmula educada y común en España para pedir la cuenta."
        },
        {
          id: "es-cbt-4",
          section: "Comprensión de lectura",
          prompt: "¿Qué expresa la frase idiomática 'estar hasta las narices'?",
          options: [
            "A) Tener gripe o congestión nasal.",
            "B) Estar completamente harto o cansado de una situación.",
            "C) Estar muy contento y enamorado.",
            "D) Tener mucho dinero ahorrado."
          ],
          correctAnswer: "B) Estar completamente harto o cansado de una situación.",
          explanation: "'Estar hasta las narices' es un modismo que significa estar harto o agotado por algo."
        },
        {
          id: "es-cbt-5",
          section: "Expresión e interacción",
          prompt: "Para disculparse formalmente por un retraso involuntario por correo electrónico, ¿cuál es la mejor opción?",
          options: [
            "A) 'Perdón por la tardanza, es que me dormí.'",
            "B) 'Le ruego disculpe el retraso en mi respuesta debido a circunstancias imprevistas.'",
            "C) 'No te preocupes por el retraso, nos vemos.'",
            "D) 'La culpa fue del tráfico, no mía.'"
          ],
          correctAnswer: "B) 'Le ruego disculpe el retraso en mi respuesta debido a circunstancias imprevistas.'",
          explanation: "La opción B mantiene un registro formal, respetuoso y profesional adecuado para correspondencia oficial."
        }
      ]
    }
  ],

  french: [
    {
      id: "fr-delf-b1",
      title: "DELF B1 Intermediate French Simulation",
      subtitle: "Official France Éducation International Exam for Fluency & Autonomy",
      badgeText: "DELF B1 (France Éducation)",
      level: "B1 (CEFR Intermediate)",
      timeLimitMinutes: 20,
      passPercentage: 70,
      description: "Timed exam testing French Reading Comprehension, Passé Composé vs Imparfait, Subjunctive, and Formal Email Etiquette.",
      sections: ["Compréhension des écrits", "Structures linguistiques", "Production et interactions"],
      questions: [
        {
          id: "fr-cbt-1",
          section: "Structures linguistiques",
          prompt: "Choisissez la bonne forme : 'Il faut absolument que vous ___ (venir) à l'heure.'",
          options: ["A) venez", "B) veniez", "C) veniez", "D) viendrez"],
          correctAnswer: "B) veniez",
          explanation: "L'obligation impersonnelle 'il faut que' est suivie du subjonctif : 'que vous veniez'."
        },
        {
          id: "fr-cbt-2",
          section: "Compréhension des écrits",
          prompt: "Que signifie l'expression familière française 'avoir du pain sur la planche' ?",
          options: [
            "A) Avoir beaucoup de travail ou de tâches à accomplir.",
            "B) Être boulanger de profession.",
            "C) Avoir très faim avant le déjeuner.",
            "D) Ne rien avoir à faire pendant le week-end."
          ],
          correctAnswer: "A) Avoir beaucoup de travail ou de tâches à accomplir.",
          explanation: "'Avoir du pain sur la planche' signifie avoir une grande charge de travail."
        },
        {
          id: "fr-cbt-3",
          section: "Production et interactions",
          prompt: "Quelle formule de politesse finale convient à une lettre administrative formelle ?",
          options: [
            "A) 'Bisous et à bientôt !'",
            "B) 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.'",
            "C) 'Salut, merci beaucoup !'",
            "D) 'Bonne journée mon ami !'"
          ],
          correctAnswer: "B) 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.'",
          explanation: "C'est la formule d'usage la plus respectueuse et classique dans la correspondance administrative française."
        }
      ]
    }
  ],

  german: [
    {
      id: "de-goethe-b1",
      title: "Goethe-Zertifikat B1 Standard Exam Simulation",
      subtitle: "Official Goethe-Institut Examination for Work, Study & Residence in Germany",
      badgeText: "Goethe B1 (Zertifikat)",
      level: "B1 (CEFR Intermediate)",
      timeLimitMinutes: 20,
      passPercentage: 70,
      description: "Timed exam covering German Reading Comprehension, Nebensätze (weil, dass, obwohl), Dativ/Akkusativ prepositions, and Business Etiquette.",
      sections: ["Leseverstehen", "Sprachbausteine", "Schriftliche Kommunikation"],
      questions: [
        {
          id: "de-cbt-1",
          section: "Sprachbausteine",
          prompt: "Welches Relativpronomen ist richtig? 'Das ist der Kollege, ___ ich gestern geholfen habe.'",
          options: ["A) den", "B) dem", "C) der", "D) des"],
          correctAnswer: "B) dem",
          explanation: "Das Verb 'helfen' verlangt den Dativ: 'dem ich geholfen habe'."
        },
        {
          id: "de-cbt-2",
          section: "Sprachbausteine",
          prompt: "Wählen Sie die richtige Konjunktion: 'Ich bleibe heute zu Hause, ___ ich erkältet bin.'",
          options: ["A) weil", "B) denn", "C) deshalb", "D) trotzdem"],
          correctAnswer: "A) weil",
          explanation: "'Weil' leitet einen Nebensatz mit dem finiten Verb am Satzende ein ('erkältet bin')."
        },
        {
          id: "de-cbt-3",
          section: "Leseverstehen",
          prompt: "Was bedeutet das deutsche Konzept 'Feierabend' im Arbeitsleben?",
          options: [
            "A) Eine offizielle Betriebsfeier zum Geburtstag der Firma.",
            "B) Das wohlverdiente Ende des täglichen Arbeitstages und der Beginn der Freizeit.",
            "C) Eine Kündigung des Arbeitsvertrags.",
            "D) Der Feiertag am ersten Mai."
          ],
          correctAnswer: "B) Das wohlverdiente Ende des täglichen Arbeitstages und der Beginn der Freizeit.",
          explanation: "'Feierabend' bezeichnet die freie Zeit nach Abschluss der täglichen Arbeit."
        }
      ]
    }
  ],

  pidgin: [
    {
      id: "p-cbt-fluency",
      title: "West African Pidgin Standard Fluency Examination",
      subtitle: "National Lingua Franca Proficiency & Everyday Cultural Code Examination",
      badgeText: "WAEC / Naija Fluency Standard",
      level: "Professional Fluency",
      timeLimitMinutes: 15,
      passPercentage: 70,
      description: "Interactive exam testing everyday street expressions, tense markers (dey, don, go), proverbs, and market negotiation dialogues.",
      sections: ["Grammar & Tense Markers", "Street Slang & Expressive Idioms", "Cultural Dialogue & Etiquette"],
      questions: [
        {
          id: "p-cbt-1",
          section: "Grammar & Tense Markers",
          prompt: "Which auxiliary aspect marker in Pidgin indicates that an action is currently ongoing right now?",
          options: ["A) 'don' (completed)", "B) 'dey' (continuous / ongoing)", "C) 'go' (future)", "D) 'bin' (past)"],
          correctAnswer: "B) 'dey' (continuous / ongoing)",
          explanation: "'Dey' indicates progressive/continuous aspect (e.g. 'I dey come' = I am coming right now)."
        },
        {
          id: "p-cbt-2",
          section: "Street Slang & Expressive Idioms",
          prompt: "What does the popular expression 'No wahala' mean?",
          options: [
            "A) Plenty of dangerous trouble.",
            "B) No problem at all / Everything is completely fine.",
            "C) Hurry up immediately.",
            "D) I do not have enough money."
          ],
          correctAnswer: "B) No problem at all / Everything is completely fine.",
          explanation: "'Wahala' means trouble or stress. 'No wahala' signifies zero worries or everything is good."
        },
        {
          id: "p-cbt-3",
          section: "Cultural Dialogue & Etiquette",
          prompt: "In Nigerian commercial bus transport (Danfo), what is the universal call shouted to signal the conductor that you want to drop off at the next bus stop?",
          options: [
            "A) 'Owa o!'",
            "B) 'Drive fast fast!'",
            "C) 'Give me water!'",
            "D) 'Good morning conductor!'"
          ],
          correctAnswer: "A) 'Owa o!'",
          explanation: "'Owa o!' is the iconic transit alert indicating that someone wants to alight."
        }
      ]
    }
  ]
};

// Default fallback exam generator for any language that doesn't have an explicit entry
export function getExamsForLanguage(langId) {
  if (CBT_EXAMS[langId] && CBT_EXAMS[langId].length > 0) {
    return CBT_EXAMS[langId];
  }
  // If language has no specific mock, fall back to Finnish (the main national focus) or generic
  return CBT_EXAMS.finnish;
}
