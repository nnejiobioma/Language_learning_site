// Standard Computer Based Testing (CBT) Examination Bank for FiksLingo
// Grounded in official examination standards (e.g. YKI - Yleinen kielitutkinto in Finland, CEFR standards)

import { generateDynamicExam, examPools } from "./cbtExamEngine.js";
import { generateFrenchDynamicExam, frenchExamPools } from "./cbtFrenchExamEngine.js";
export { generateDynamicExam, examPools, generateFrenchDynamicExam, frenchExamPools };

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
      title: "DELF B1 Épreuve Officielle (Naturalisation & Autonomie)",
      subtitle: "Diplôme officiel du Ministère de l'Éducation Nationale — Niveau requis pour la naturalisation et la carte de résident",
      badgeText: "DELF B1 • Nationalité & Séjour",
      level: "B1 (CEFR Indépendant)",
      timeLimitMinutes: 30,
      passPercentage: 70,
      description: "Examen standardisé évaluant la compréhension d'articles de presse, la rédaction d'un courriel formel de réclamation, la maîtrise du subjonctif et l'interaction orale citoyenne.",
      sections: [
        "Compréhension des écrits (Presse & Droits)",
        "Structures & Grammaire (Subjonctif & Passé)",
        "Compréhension de l'oral (Radio & Annonces)",
        "Production écrite (Lettre de réclamation)"
      ],
      questions: [
        {
          id: "fr-cbt-delf-1",
          section: "Compréhension des écrits (Presse & Droits)",
          passage: `RÉPUBLIQUE FRANÇAISE — CODE DE LA CONSOMMATION
Tout consommateur dispose d'un délai légal de rétractation de quatorze jours francs pour exercer son droit de retour lors d'un achat à distance (internet, correspondance ou téléphone) au sein de l'Union européenne, sans avoir à motiver sa décision ni à supporter de pénalités.
Le professionnel est tenu de rembourser le consommateur de la totalité des sommes versées, y compris les frais de livraison standard, au plus tard dans les quatorze jours suivant la date à laquelle il est informé de la rétractation.`,
          prompt: "Quel est le délai légal accordé à un consommateur pour se rétracter lors d'un achat sur internet ?",
          options: [
            "A) 7 jours ouvrables",
            "B) 14 jours francs",
            "C) Un mois calendaire",
            "D) 48 heures seulement"
          ],
          correctAnswer: "B) 14 jours francs",
          explanation: "L'article de loi dispose formellement : 'd'un délai légal de rétractation de quatorze jours francs'."
        },
        {
          id: "fr-cbt-delf-2",
          section: "Structures & Grammaire (Subjonctif & Passé)",
          prompt: "Sélectionnez la phrase grammaticalement correcte exigeant le subjonctif :",
          options: [
            "A) Je pense qu'il est indispensable que nous soyons présents à la réunion.",
            "B) Je pense qu'il est indispensable que nous sommes présents à la réunion.",
            "C) Il est certain que vous veniez demain matin.",
            "D) J'espère que tu sois heureux dans ta nouvelle maison."
          ],
          correctAnswer: "A) Je pense qu'il est indispensable que nous soyons présents à la réunion.",
          explanation: "La locution impersonnelle exprimant la nécessité 'il est indispensable que' exige le subjonctif présent ('que nous soyons')."
        },
        {
          id: "fr-cbt-delf-3",
          section: "Compréhension de l'oral (Radio & Annonces)",
          audioPhrase: "Flash spécial RFI : En raison d'un épisode de pollution aux particules fines sur l'Île-de-France, la vitesse maximale autorisée sur les autoroutes et voies rapides est abaissée de 20 kilomètres par heure dès 06 heures demain. Les transports en commun proposent un forfait anti-pollution à tarif réduit.",
          prompt: "Quelle mesure est prise pour faire face à la pollution selon le flash radio ?",
          options: [
            "A) La fermeture de tous les aéroports parisiens",
            "B) L'abaissement de la vitesse de 20 km/h et un forfait transport à tarif réduit",
            "C) La gratuité totale du carburant en station-service",
            "D) L'interdiction complète de sortir de chez soi"
          ],
          correctAnswer: "B) L'abaissement de la vitesse de 20 km/h et un forfait transport à tarif réduit",
          explanation: "Le message indique : 'la vitesse maximale autorisée... est abaissée de 20 km/h' et 'un forfait anti-pollution à tarif réduit'."
        },
        {
          id: "fr-cbt-delf-4",
          section: "Production écrite (Lettre de réclamation)",
          prompt: "Quelle est la formule d'attaque et de clôture la plus appropriée pour une lettre formelle adressée à un préfet ou à un juge ?",
          options: [
            "A) 'Salut Monsieur' / 'Bisous et merci.'",
            "B) 'Monsieur le Préfet,' / 'Je vous prie d'agréer, Monsieur le Préfet, l'expression de ma haute considération.'",
            "C) 'Bonjour cher ami,' / 'À la revoyure !'",
            "D) 'Cher Monsieur,' / 'Prends soin de toi.'"
          ],
          correctAnswer: "B) 'Monsieur le Préfet,' / 'Je vous prie d'agréer, Monsieur le Préfet, l'expression de ma haute considération.'",
          explanation: "L'étiquette administrative française requiert de nommer le titre en formule d'attaque ('Monsieur le Préfet') et dans la formule de clôture protocolaire."
        }
      ]
    },
    {
      id: "fr-delf-b2",
      title: "DELF B2 Avancé (Accès Universités & Cadre Professionnel)",
      subtitle: "Diplôme d'État certifiant l'autonomie complète en contexte académique, technique et professionnel",
      badgeText: "DELF B2 • Études & Débats",
      level: "B2 (CEFR Indépendant Avancé)",
      timeLimitMinutes: 35,
      passPercentage: 70,
      description: "Examen officiel requis pour l'entrée dans les universités françaises en Licence et Master, testant la défense d'un point de vue argumenté, la synthèse critique et la négociation formelle.",
      sections: [
        "Compréhension des écrits (Essais & Débats)",
        "Rhétorique & Connecteurs logiques",
        "Compréhension orale (Conférences & Médias)",
        "Production argumentée (Prise de position)"
      ],
      questions: [
        {
          id: "fr-cbt-b2-1",
          section: "Compréhension des écrits (Essais & Débats)",
          passage: `TRIBUNE DU MONDE — LA TRANSITION ÉNERGÉTIQUE ET L'ACCEPTABILITÉ CITOYENNE
La mise en œuvre de grands chantiers éoliens et photovoltaïques se heurte fréquemment au phénomène NIMBY (« Not In My Back Yard » ou « Pas chez moi »). Si l'immense majorité des citoyens approuve la nécessité impérieuse de sortir des énergies fossiles à l'échelle nationale, l'implantation concrète d'infrastructures à proximité immédiate de leur domicile suscite des recours juridiques suspensifs.
Les sociologues de l'environnement soulignent que la seule clé pour surmonter ces blocages réside dans la co-construction participative précoce, associant les riverains dès la genèse du projet et prévoyant des retombées fiscales ou d'actionnariat citoyen direct dans l'exploitation des parcs énergétiques.`,
          prompt: "Quelle stratégie est préconisée par les sociologues pour faciliter l'adoption des projets d'énergies renouvelables ?",
          options: [
            "A) Imposer les chantiers sans aucune consultation par décret préfectoral d'urgence",
            "B) Associer les riverains dès la genèse du projet et instaurer des retombées financières et citoyennes directes",
            "C) Supprimer tous les parcs éoliens du territoire national",
            "D) Déplacer les éoliennes exclusivement à l'étranger"
          ],
          correctAnswer: "B) Associer les riverains dès la genèse du projet et instaurer des retombées financières et citoyennes directes",
          explanation: "Le texte préconise 'la co-construction participative précoce, associant les riverains dès la genèse... et prévoyant des retombées fiscales ou d'actionnariat citoyen direct'."
        },
        {
          id: "fr-cbt-b2-2",
          section: "Rhétorique & Connecteurs logiques",
          prompt: "Quel connecteur logique exprime l'opposition avec une nuance de concession rigoureuse ?",
          options: [
            "A) C'est pourquoi (conséquence)",
            "B) Quoique (+ subjonctif)",
            "C) En outre (addition)",
            "D) Étant donné que (cause)"
          ],
          correctAnswer: "B) Quoique (+ subjonctif)",
          explanation: "'Quoique' exprime la concession/opposition et s'emploie obligatoirement avec le subjonctif (ex: 'Quoiqu'il soit tard, il continue à travailler')."
        },
        {
          id: "fr-cbt-b2-3",
          section: "Compréhension orale (Conférences & Médias)",
          audioPhrase: "Extrait de l'émission Géopolitique : L'économiste en chef rappelle que la relocalisation des chaînes de valeur industrielles critiques en Europe ne peut pas reposer sur des subventions perpétuelles. Elle exige un investissement massif dans la recherche fondamentale, la robotisation de pointe et la qualification continue des travailleurs pour compenser le différentiel de coût de main-d'œuvre.",
          prompt: "Que requiert la pérennité de la réindustrialisation européenne selon l'intervenant ?",
          options: [
            "A) Une dépendance exclusive aux aides d'État permanentes",
            "B) L'investissement dans la recherche, la robotisation et la formation continue de la main-d'œuvre",
            "C) La fermeture complète de toutes les frontières commerciales",
            "D) La réduction du temps de travail à deux heures par semaine"
          ],
          correctAnswer: "B) L'investissement dans la recherche, la robotisation et la formation continue de la main-d'œuvre",
          explanation: "L'économiste affirme que cela 'exige un investissement massif dans la recherche fondamentale, la robotisation de pointe et la qualification continue'."
        }
      ]
    },
    {
      id: "fr-tcf-irn",
      title: "TCF IRN (Intégration, Résidence et Nationalité)",
      subtitle: "Test de Connaissance du Français officiel administré par France Éducation International",
      badgeText: "TCF IRN • Officiel",
      level: "A1 à B1 (CEFR Multi-Niveaux)",
      timeLimitMinutes: 25,
      passPercentage: 70,
      description: "Test officiel standardisé d'évaluation conçu spécifiquement pour les démarches en préfecture : demande de carte de séjour pluriannuelle (A2), carte de résident de 10 ans (A2/B1) et acquisition de la nationalité française par décret (B1/B2).",
      sections: [
        "Compréhension orale (Écoute)",
        "Compréhension écrite (Documents du quotidien)",
        "Lexique & Maîtrise des structures"
      ],
      questions: [
        {
          id: "fr-tcf-1",
          section: "Compréhension écrite (Documents du quotidien)",
          passage: `ASSURANCE MALADIE — RENOUVELLEMENT DE LA CARTE VITALE
Pour renouveler votre carte Vitale égarée ou défectueuse, connectez-vous à votre compte Ameli.fr muni de vos identifiants de sécurité.
Vous devez télécharger une photo d'identité numérique conforme aux normes officielles ainsi qu'une copie numérisée de votre pièce d'identité en cours de validité. La nouvelle carte vous parviendra par voie postale sous un délai moyen de trois semaines. Durant cette période, votre attestation de droits téléchargeable fait foi auprès des professionnels de santé.`,
          prompt: "Que peut utiliser l'assuré pour justifier de ses droits médicaux en attendant sa nouvelle carte Vitale ?",
          options: [
            "A) Son contrat de bail locatif",
            "B) Son attestation de droits téléchargeable sur son compte Ameli",
            "C) Une simple déclaration verbale au médecin",
            "D) Son permis de conduire uniquement"
          ],
          correctAnswer: "B) Son attestation de droits téléchargeable sur son compte Ameli",
          explanation: "Le texte précise que 'votre attestation de droits téléchargeable fait foi auprès des professionnels de santé'."
        },
        {
          id: "fr-tcf-2",
          section: "Lexique & Maîtrise des structures",
          prompt: "Quelle phrase illustre un accord correct du participe passé avec le pronom 'avoir' ?",
          options: [
            "A) Les lettres que j'ai écrit étaient très claires.",
            "B) Les lettres que j'ai écrites étaient très claires.",
            "C) Elle a écrites une belle lettre ce matin.",
            "D) Nous avons allés à la préfecture ensemble."
          ],
          correctAnswer: "B) Les lettres que j'ai écrites étaient très claires.",
          explanation: "Avec l'auxiliaire avoir, le participe passé s'accorde en genre et en nombre avec le COD s'il est placé avant le verbe ('les lettres que' = féminin pluriel -> 'écrites')."
        },
        {
          id: "fr-tcf-3",
          section: "Compréhension orale (Écoute)",
          audioPhrase: "Message des services municipaux : Chers parents, en raison du mouvement de grève des transports de demain, le ramassage scolaire sera suspendu sur l'ensemble de la commune. Cependant, un service d'accueil minimum pour les élèves sera assuré à l'école élémentaire Pasteur de 08 heures 30 à 16 heures 30.",
          prompt: "Quelle disposition exceptionnelle est prise pour les enfants demain ?",
          options: [
            "A) Tous les cours sont annulés pour toute la semaine",
            "B) Les bus scolaires rouleront deux fois plus vite",
            "C) Le ramassage est suspendu mais un service d'accueil minimum est mis en place à l'école Pasteur",
            "D) Les parents doivent garder obligatoirement leurs enfants à la maison"
          ],
          correctAnswer: "C) Le ramassage est suspendu mais un service d'accueil minimum est mis en place à l'école Pasteur",
          explanation: "L'annonce indique : 'le ramassage scolaire sera suspendu... Cependant, un service d'accueil minimum pour les élèves sera assuré à l'école élémentaire Pasteur'."
        }
      ]
    },
    {
      id: "fr-tef-canada",
      title: "TEF Canada & Québec (CCI Paris Île-de-France)",
      subtitle: "Test d'Évaluation de Français officiel pour l'immigration et la citoyenneté canadienne",
      badgeText: "TEF • CCI Paris IdF",
      level: "A1 à C2 (Score Standardisé 0–699)",
      timeLimitMinutes: 30,
      passPercentage: 70,
      description: "Test informatisé certifié par la Chambre de Commerce et d'Industrie de Paris, indispensable pour les dossiers d'immigration vers le Canada (Entrée Express) et le Québec.",
      sections: [
        "Compréhension écrite (Articles & Annonces)",
        "Lexique & Structures de la langue",
        "Compréhension orale (Conversations & Radio)"
      ],
      questions: [
        {
          id: "fr-tef-1",
          section: "Lexique & Structures de la langue",
          prompt: "Trouvez le synonyme le plus précis du mot 'incontournable' dans la phrase : « C'est un monument incontournable de la culture québécoise. »",
          options: [
            "A) Inévitable / Indispensable à connaître",
            "B) Dangereux et inaccessible",
            "C) Récent et sans importance",
            "D) Difficile à regarder"
          ],
          correctAnswer: "A) Inévitable / Indispensable à connaître",
          explanation: "'Incontournable' désigne un élément essentiel et incontestable que l'on ne peut pas ignorer."
        },
        {
          id: "fr-tef-2",
          section: "Compréhension écrite (Articles & Annonces)",
          passage: `EMPLOI MONTRÉAL — TRANSITION NUMÉRIQUE ET SUBVENTIONS AUX PME
Le ministère du Développement économique du Québec annonce une enveloppe budgétaire de 50 millions de dollars visant à soutenir l'adoption de l'intelligence artificielle et du commerce électronique par les petites et moyennes entreprises locales.
Les entreprises admissibles employant moins de 250 salariés peuvent obtenir une subvention non remboursable couvrant jusqu'à 50 % des honoraires de consultants spécialisés en automatisation des processus. Le programme vise à stimuler la productivité provinciale face à la pénurie chronique de main-d'œuvre qualifiée.`,
          prompt: "Quelle proportion des frais d'accompagnement peut être financée par la subvention québécoise ?",
          options: [
            "A) L'intégralité (100 %) sans aucun plafond",
            "B) Jusqu'à 50 % des honoraires des consultants spécialisés",
            "C) Seulement 10 % sous forme de prêt remboursable",
            "D) Aucune somme d'argent, uniquement du matériel informatique d'occasion"
          ],
          correctAnswer: "B) Jusqu'à 50 % des honoraires des consultants spécialisés",
          explanation: "Le texte stipule que les entreprises peuvent recevoir 'une subvention non remboursable couvrant jusqu'à 50 % des honoraires de consultants'."
        }
      ]
    },
    {
      id: "fr-dcl-affaires",
      title: "DCL (Diplôme de Compétence en Langue - Affaires & Professionnel)",
      subtitle: "Diplôme national professionnel du Ministère de l'Éducation Nationale pour adultes",
      badgeText: "DCL • Compétences Pro",
      level: "A2 à C1 (Scénario d'Entreprise)",
      timeLimitMinutes: 30,
      passPercentage: 70,
      description: "Épreuve professionnelle unique plongeant le candidat au cœur d'une mission d'entreprise : audit de rentabilité, traitement d'un litige fournisseur et rédaction d'une synthèse stratégique.",
      sections: [
        "Traitement documentaire d'entreprise",
        "Communication commerciale & Négociation",
        "Prise de décision & Synthèse managériale"
      ],
      questions: [
        {
          id: "fr-dcl-1",
          section: "Communication commerciale & Négociation",
          passage: `ÉCHANGE DE COURRIELS — LITIGE FOURNISSEUR EMBALLAGES
De : direction.achats@ecopack-france.com
À : commercial@verre-nord.fr
Objet : Retard critique de livraison commande N° 45872
Monsieur,
Notre chaîne de mise en bouteille est actuellement à l'arrêt faute de réception des 50 000 flacons en verre commandés le 3 septembre, dont la livraison ferme était contractuellement convenue pour le 2 octobre au plus tard.
Ce retard occasionne un préjudice financier journalier de 4 500 euros pour notre entreprise. Sans livraison complète ou solution de substitution validée sous 48 heures, nous ferons jouer la clause résolutoire du contrat et exigerons l'application des pénalités de retard contractuelles de 5 % par jour calendaire.`,
          prompt: "Quelle conséquence juridique et financière le client envisage-t-il d'actionner sans solution sous 48 heures ?",
          options: [
            "A) Doubler le montant de sa commande de flacons",
            "B) Résilier le contrat et exiger les pénalités contractuelles de retard de 5% par jour",
            "C) Embaucher le personnel de l'entreprise fournisseuse",
            "D) Offrir une prime de livraison exceptionnelle"
          ],
          correctAnswer: "B) Résilier le contrat et exiger les pénalités contractuelles de retard de 5% par jour",
          explanation: "Le courriel énonce clairement : 'nous ferons jouer la clause résolutoire du contrat et exigerons l'application des pénalités de retard contractuelles de 5 % par jour'."
        },
        {
          id: "fr-dcl-2",
          section: "Prise de décision & Synthèse managériale",
          prompt: "Dans un rapport de synthèse managériale, quelle formulation exprime une recommandation stratégique avec tact et professionnalisme ?",
          options: [
            "A) 'Il faut tout jeter à la poubelle immédiatement.'",
            "B) 'Au vu des indicateurs de performance récents, nous préconisons d'optimiser le canal logistique avant d'envisager une expansion commerciale.'",
            "C) 'Je m'en fiche complètement de ce que vous déciderez.'",
            "D) 'Vous n'avez rien compris à la gestion des stocks.'"
          ],
          correctAnswer: "B) 'Au vu des indicateurs de performance récents, nous préconisons d'optimiser le canal logistique avant d'envisager une expansion commerciale.'",
          explanation: "C'est la formulation managériale équilibrée, argumentée et étayée par les indicateurs opérationnels."
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
      id: "p-cbt-foundational",
      title: "NERDC Nigerian Pidgin Foundation & Intermediate Standard (Levels 1–2)",
      subtitle: "Phonology, Sound Substitutions, Serial Verbs & Tense Aspect Markers",
      badgeText: "NERDC Level 1–2 Standard",
      level: "Foundational Pikin & Street Smart",
      timeLimitMinutes: 20,
      passPercentage: 70,
      description: "Standardized evaluation of consonant/vowel substitutions (ting, dem, ouse), personal pronouns (Una, Im), Serial Verb Constructions, and market bargaining dialogues.",
      sections: [
        "Phonology & Sound Substitutions",
        "Grammatical Aspect & Serial Verbs",
        "Marketplace & Transit Comprehension"
      ],
      questions: [
        {
          id: "p-cbt-1",
          section: "Phonology & Sound Substitutions",
          prompt: "In standard Nigerian Pidgin oracy, how is the English dental fricative /θ/ in 'think' or 'thing' pronounced?",
          options: [
            "A) Substituted with /t/ ('tink', 'ting')",
            "B) Substituted with /s/ ('sink', 'sing')",
            "C) Substituted with /f/ ('fink', 'fing')",
            "D) Maintained identically to British Received Pronunciation"
          ],
          correctAnswer: "A) Substituted with /t/ ('tink', 'ting')",
          explanation: "NPE phonology replaces the voiceless dental fricative /θ/ with the alveolar plosive /t/."
        },
        {
          id: "p-cbt-2",
          section: "Grammatical Aspect & Serial Verbs",
          prompt: "Which sentence correctly demonstrates a Serial Verb Construction (SVC) meaning 'Bring the book here'?",
          options: [
            "A) 'Take the book come give me.'",
            "B) 'Bring the book to my place.'",
            "C) 'Make you carry book to here.'",
            "D) 'Carry the book arriving.'"
          ],
          correctAnswer: "A) 'Take the book come give me.'",
          explanation: "'Take... come... give' chains multiple verbs together into a single conceptual action without prepositions or conjunctions."
        },
        {
          id: "p-cbt-3",
          section: "Grammatical Aspect & Serial Verbs",
          prompt: "Which auxiliary aspect marker in Pidgin indicates that an action is currently ongoing right now?",
          options: [
            "A) 'don' (completed)",
            "B) 'dey' (continuous / ongoing)",
            "C) 'go' (future)",
            "D) 'bin' (past)"
          ],
          correctAnswer: "B) 'dey' (continuous / ongoing)",
          explanation: "'Dey' indicates progressive/continuous aspect (e.g. 'I dey come' = I am coming right now)."
        },
        {
          id: "p-cbt-4",
          section: "Grammatical Aspect & Serial Verbs",
          prompt: "How does Nigerian Pidgin mark the plural form of the noun 'pikin' (child)?",
          options: [
            "A) 'Pikin dem'",
            "B) 'Pikins'",
            "C) 'Pikines'",
            "D) 'Pikin-pikin-pikin'"
          ],
          correctAnswer: "A) 'Pikin dem'",
          explanation: "Post-nominal 'dem' is the universal plural marker in NPE: 'pikin dem' = children."
        },
        {
          id: "p-cbt-5",
          section: "Marketplace & Transit Comprehension",
          prompt: "In Nigerian commercial bus transport (Danfo), what is the universal call shouted to signal the conductor that you want to drop off at the next bus stop?",
          options: [
            "A) 'Owa o!'",
            "B) 'Drive fast fast!'",
            "C) 'Give me water!'",
            "D) 'Good morning conductor!'"
          ],
          correctAnswer: "A) 'Owa o!'",
          explanation: "'Owa o!' is the iconic transit alert indicating that someone wants to alight."
        },
        {
          id: "p-cbt-6",
          section: "Marketplace & Transit Comprehension",
          prompt: "When haggling at Balogun Market, what does a customer ask to request the seller's final non-negotiable discount?",
          options: [
            "A) 'Customer, how much last?'",
            "B) 'Give me your bank receipt.'",
            "C) 'Why is the market noisy?'",
            "D) 'Which day did you arrive from village?'"
          ],
          correctAnswer: "A) 'Customer, how much last?'",
          explanation: "'How much last?' is the universal phrase to request the lowest possible discount price."
        }
      ]
    },
    {
      id: "p-cbt-advanced",
      title: "NERDC Advanced Fluency & Oracy Examination (Levels 3–4)",
      subtitle: "Conditionals, Relative Wey, Focus Clefting, Media Translation & Oratory",
      badgeText: "Yarn Specialist / BBC Pidgin Standard",
      level: "Yarn Specialist (Professional Mastery)",
      timeLimitMinutes: 25,
      passPercentage: 75,
      description: "Advanced assessment testing complex counterfactual conditionals ('If to say'), focus marker 'Na', idiomatic proverbs, and active voice inversion of English passive constructions.",
      sections: [
        "Advanced Syntax & Passive Inversion",
        "Conditionals & Relative Structures",
        "Oral Literature, Proverbs & Satire"
      ],
      questions: [
        {
          id: "p-cbt-adv-1",
          section: "Advanced Syntax & Passive Inversion",
          prompt: "According to the NERDC language mapping standards, how does Nigerian Pidgin naturally render the English passive voice: 'The bread was eaten by them'?",
          options: [
            "A) 'Dem don chop the bread.' (Active subject inversion with completed aspect)",
            "B) 'The bread was chopped by dem.'",
            "C) 'The bread eating was done by them.'",
            "D) 'Bread chop finish by people.'"
          ],
          correctAnswer: "A) 'Dem don chop the bread.' (Active subject inversion with completed aspect)",
          explanation: "NPE avoids formal passive inflections by using active subject inversion with the perfective marker 'don'."
        },
        {
          id: "p-cbt-adv-2",
          section: "Advanced Syntax & Passive Inversion",
          prompt: "How is the English Future Perfect tense 'I will have eaten by 4 PM' constructed in advanced Nigerian Pidgin?",
          options: [
            "A) 'By 4 o'clock, I go don chop.' (Combination of future 'go' + perfective 'don')",
            "B) 'By 4 o'clock, I go will eat.'",
            "C) 'I go eating have finished by 4 o'clock.'",
            "D) '4 o'clock shall meet my eating.'"
          ],
          correctAnswer: "A) 'By 4 o'clock, I go don chop.' (Combination of future 'go' + perfective 'don')",
          explanation: "The combination of 'go' (future) and 'don' (completive) represents future perfect aspect."
        },
        {
          id: "p-cbt-adv-3",
          section: "Conditionals & Relative Structures",
          prompt: "Which counterfactual conditional sentence correctly translates: 'Had I known, I would not have gone'?",
          options: [
            "A) 'If to say I know, I for no go.'",
            "B) 'If I knowing before, I no go go.'",
            "C) 'Had I known so, me no go went.'",
            "D) 'Suppose I sabi, I will not went.'"
          ],
          correctAnswer: "A) 'If to say I know, I for no go.'",
          explanation: "'If to say' introduces counterfactual premises, and modal 'for no' introduces the negative unrealized outcome."
        },
        {
          id: "p-cbt-adv-4",
          section: "Conditionals & Relative Structures",
          prompt: "In the sentence 'Na me do am', what syntactic purpose does 'Na' serve?",
          options: [
            "A) Focus marker in a cleft sentence meaning 'It was I who did it'",
            "B) A negative particle meaning 'No'",
            "C) An adverb of place meaning 'Near'",
            "D) A future conjunction"
          ],
          correctAnswer: "A) Focus marker in a cleft sentence meaning 'It was I who did it'",
          explanation: "'Na' introduces focused constituents in cleft constructions to emphasize the subject or predicate."
        },
        {
          id: "p-cbt-adv-5",
          section: "Oral Literature, Proverbs & Satire",
          prompt: "What is the sociopolitical meaning of the famous Nigerian proverb: 'Monkey dey work, baboon dey chop'?",
          options: [
            "A) One person toils and produces wealth while another unjustly exploits and consumes it",
            "B) Wild animals should be protected in national reserves",
            "C) Hard work is always rewarded immediately without delay",
            "D) Monkeys and baboons belong to the same biological genus"
          ],
          correctAnswer: "A) One person toils and produces wealth while another unjustly exploits and consumes it",
          explanation: "It is the master metaphor for systemic labor exploitation, cronyism, and uncredited toil."
        },
        {
          id: "p-cbt-adv-6",
          section: "Oral Literature, Proverbs & Satire",
          prompt: "What does the expression 'Water don pass garri' indicate when discussing a community problem?",
          options: [
            "A) The crisis has escalated beyond repair or manageable control",
            "B) Fresh clean drinking water has been supplied to the town",
            "C) The price of cassava has fallen drastically",
            "D) It is time to prepare evening dinner"
          ],
          correctAnswer: "A) The crisis has escalated beyond repair or manageable control",
          explanation: "When water exceeds the optimal ratio for soaking garri, it is ruined; hence the situation is out of hand."
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
