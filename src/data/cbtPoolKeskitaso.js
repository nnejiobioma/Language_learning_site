// YKI Keskitaso (CEFR B1–B2) Official CBT Question Pool
// Citizenship & Professional Exam
// 30 Reading Comprehension | 30 Writing | 30 Listening Comprehension | 30 Speaking

export const keskitasoReading = [
  {
    id: "ke-r-1",
    subtest: "reading",
    title: "Taloyhtiön tiedote: Putkiremontin aikataulu ja vesikatkot",
    passage: `ASUNTO OY KANERVATIE 4 – TIEDOTE OSAKKAILLE JA ASUKKAILLE
Putkiremontin linjasaneeraus etenee B-portaaseen maanantaina 14. lokakuuta alkaen.
Vedenjakelu on keskeytettynä päivittäin klo 08:30–16:00 välisenä aikana kahden viikon ajan (14.–25.10.).
Asukkaita pyydetään huomioimaan, että viemäreiden käyttö on ankarasti kielletty vesikatkojen aikana. Pihan pysäköintialueella on vuokrattuna lämmitetyt suihku- ja wc-vaunut, joiden avaimet voi noutaa huoltoyhtiön toimistolta kuittausta vastaan.
Ylimääräistä tavaraa ei saa säilyttää porraskäytävissä paloturvallisuusmääräysten vuoksi. Mahdollisista vahingoista ja vuodoista on ilmoitettava viipymättä päivystävälle työnjohtajalle (puh. 040 123 4567).`,
    prompt: "Mitä asukkaiden tulee tehdä vesikatkojen aikana henkilökohtaisen hygienian hoitamiseksi?",
    options: [
      "A) Käyttää oman asuntonsa suihkua varoen aamuisin ennen kello kahdeksaa",
      "B) Noutaa avaimet huoltoyhtiöltä ja käyttää pihan suihku- ja wc-vaunuja",
      "C) Siirtää kaikki tavarat porraskäytävään remontin ajaksi",
      "D) Odottaa remontin päättymistä ilman erillisiä pesutiloja"
    ],
    correctAnswer: "B) Noutaa avaimet huoltoyhtiöltä ja käyttää pihan suihku- ja wc-vaunuja",
    explanation: "Tiedotteessa todetaan selkeästi, että pihalla on lämmitetyt suihku- ja wc-vaunut, joiden avaimet noudetaan huoltoyhtiöltä kuittausta vastaan."
  },
  {
    id: "ke-r-2",
    subtest: "reading",
    title: "Työpaikkailmoitus: Monikielinen asiakaspalvelukoordinaattori",
    passage: `HAETAAN ASIAKASPALVELUKOORDINAATTORIA PÄÄKAUPUNKISEUDULLE
Nordic Logistics Oy etsii reipasta ja oma-aloitteista asiakaspalvelukoordinaattoria vakituiseen työsuhteeseen.
Tehtäviisi kuuluu tilauskäsittely, kuljetusseuranta, reklamaatioiden hoito sekä asiakasyhteydenpito sähköpostitse ja puhelimitse.
Edellytämme hakijalta:
- Soveltuvaa kaupallista tai logistiikka-alan koulutusta (esim. tradenomi) tai vastaavaa työkokemusta
- Sujuvaa suomen ja englannin kielen taitoa (ruotsin kielen taito katsotaan eduksi)
- Hyviä IT-perustaitoja ja kokemusta toiminnanohjausjärjestelmistä (ERP)
- Paineensietokykyä ja ratkaisukeskeistä asennetta hektisissä tilanteissa.
Tarjoamme joustavat etätyömahdollisuudet (2–3 pv/vko), lounas- ja liikuntaedun sekä kattavan työterveyshuollon.
Hakemukset ansioluetteloineen ja palkkatoiveineen 31. marraskuuta mennessä osoitteeseen rekry@nordiclogistics.fi.`,
    prompt: "Mikä seuraavista EI ole välttämätön vaatimus tehtävään valitsemiselle?",
    options: [
      "A) Sujuva suomen kielen taito",
      "B) Kokemus ERP-toiminnanohjausjärjestelmistä",
      "C) Ruotsin kielen taito",
      "D) Paineensietokyky hektisissä tilanteissa"
    ],
    correctAnswer: "C) Ruotsin kielen taito",
    explanation: "Ilmoituksessa todetaan ruotsin kielen osalta vain, että se 'katsotaan eduksi' (lisäpiste), toisin kuin suomi ja englanti, jotka ovat ehdottomia vaatimuksia."
  },
  {
    id: "ke-r-3",
    subtest: "reading",
    title: "Kuluttajansuojalehden artikkeli: Verkko-ostosten peruuttamisoikeus",
    passage: `VERKKOKAUPAN PALAUTUKSET JA KULUTTAJAN VASTUUT
Kuluttajansuojalain mukaan etämyynnissä, kuten kotimaisissa ja EU-alueen verkkokaupoissa, ostajalla on pääsääntöisesti 14 päivän lakisääteinen peruuttamisoikeus tuotteen vastaanottamisesta.
Oikeus ei kuitenkaan ole täysin rajoitukseton. Peruuttamisoikeus ei koske esimerkiksi sinetöityjä hygieniatuotteita (kuten korvakuulokkeita tai alusvaatteita), joiden pakkaus on avattu, eikä mittatilaustyönä valmistettuja esineitä.
Lisäksi kuluttajan on palautettava tuote olennaisesti muuttumattomana. Mikäli tuotetta on kokeiltu enemmän kuin mitä tavanomaisessa myymälässä tehtäisiin, myyjällä on oikeus vähentää palautettavasta summasta tuotteen arvon alenemista vastaava osuus.
Huomaa myös, että lakimuutoksen jälkeen verkkokaupalla ei ole enää velvollisuutta tarjota ilmaista palautusta, ellei siitä ole nimenomaisesti sovittu sopimusehdoissa.`,
    prompt: "Mitä laissa sanotaan tuotteen palautuskuluista nykyisin?",
    options: [
      "A) Kaikkien verkkokauppojen on aina tarjottava ilmainen palautus asiakkaalle",
      "B) Verkkokaupan ei ole pakko maksaa palautuskuluja, ellei siitä ole erikseen sovittu",
      "C) Posti korvaa aina palautuksesta aiheutuvat postimaksut",
      "D) Kuluttaja joutuu maksamaan aina sakkoa tuotteen palauttamisesta"
    ],
    correctAnswer: "B) Verkkokaupan ei ole pakko maksaa palautuskuluja, ellei siitä ole erikseen sovittu",
    explanation: "Tekstissä sanotaan: 'verkkokaupalla ei ole enää velvollisuutta tarjota ilmaista palautusta, ellei siitä ole nimenomaisesti sovittu'."
  },
  {
    id: "ke-r-4",
    subtest: "reading",
    title: "Kelan tiedote: Asumistuen tarkistus tulojen muuttuessa",
    passage: `YLEISEN ASUMISTUEN VUOSITARKISTUS JA ILMOITUSVELVOLLISUUS
Kela myöntää yleistä asumistukea ruokakunnan yhteenlaskettujen bruttotulojen ja asumismenojen perusteella.
Tuki tarkistetaan vähintään kerran vuodessa. Tuen saajalla on kuitenkin lakisääteinen velvollisuus ilmoittaa viipymättä Kelaan kesken vuotta, mikäli ruokakunnan kuukausitulot nousevat vähintään 400 euroa tai asumismenot muuttuvat vähintään 50 euroa kuukaudessa.
Mikäli tuloissa tapahtunutta nousua ei ilmoiteta ajoissa, Kela perii liikaa maksetun tuen takaisin jälkikäteen viivästyskorkoineen.
Ilmoituksen voi tehdä kätevimmin OmaKela-verkkoasiointipalvelussa pankkitunnuksilla tai toimittamalla palkkatodistukset postitse.`,
    prompt: "Milloin tuensaajan täytyy ilmoittaa Kelalle tulojensa muutoksesta ennen virallista vuositarkistusta?",
    options: [
      "A) Vain silloin kun hän jää kokonaan työttömäksi",
      "B) Kun ruokakunnan kuukausitulot nousevat vähintään 400 euroa",
      "C) Aina kun saa yli 20 euroa syntymäpäivälahjaksi",
      "D) Vain vuositarkistuksen yhteydessä marraskuussa"
    ],
    correctAnswer: "B) Kun ruokakunnan kuukausitulot nousevat vähintään 400 euroa",
    explanation: "Tiedotteen ehto: 'mikäli ruokakunnan kuukausitulot nousevat vähintään 400 euroa tai asumismenot muuttuvat vähintään 50 euroa kuukaudessa'."
  },
  {
    id: "ke-r-5",
    subtest: "reading",
    title: "Mielipidekirjoitus: Koulujen digitaaliset laitteet ja oppimistulokset",
    passage: `DIGILOIKASTA KOHTI TASAPAINOISTA KOULUNKÄYNTIÄ
Viime vuosina kouluissa on hehkutettu tablettien ja kannettavien tietokoneiden vallankumousta. Nyt PISA-tulosten heikennyttyä ja opettajien uupumuksen lisääntyessä on aika katsoa totuutta silmiin.
Jatkuva ruudun ääressä istuminen pirstaloi lasten keskittymiskyvyn ja passivoi syvällistä ajattelua. Perinteinen paperisen kirjan lukeminen ja käsin kirjoittaminen aktivoivat aivojen muistijälkiä aivan toisella tavalla kuin kosketusnäytön naputtelu.
En vaadi teknologian täyskieltoa, sillä digitaaliset taidot ovat tulevaisuudessa välttämättömiä. Vaadin kuitenkin malttia: luokkaan tarvitaan rauhaa, konkreettisia oppikirjoja ja puhelinten täyskieltoa oppituntien aikana. Vain siten turvaamme tasa-arvoisen oppimisen.
– Leena Koskela, äidinkielen lehtori`,
    prompt: "Mitä kirjoittaja Leena Koskela ehdottaa ongelman ratkaisemiseksi?",
    options: [
      "A) Tietotekniikan kieltämistä kokonaan ja palaamista 1800-luvun opetusmenetelmiin",
      "B) Kalliimpien tietokoneiden ostamista joka oppilaalle",
      "C) Tasapainoa: konkreettisia kirjoja, luokkarauhaa ja puhelinten kieltämistä oppitunneilla",
      "D) Läksyjen ja kokeiden poistamista opetussuunnitelmasta"
    ],
    correctAnswer: "C) Tasapainoa: konkreettisia kirjoja, luokkarauhaa ja puhelinten kieltämistä oppitunneilla",
    explanation: "Kirjoittaja korostaa malttia: 'tarvitaan rauhaa, konkreettisia oppikirjoja ja puhelinten täyskieltoa oppituntien aikana' ilman teknologian täyskieltoa."
  },
  {
    id: "ke-r-6",
    subtest: "reading",
    title: "Uutinen: Sähköpotkulautojen uudet liikennerajoitukset kaupungissa",
    passage: `KAUPUNKI OTTAA KÄYTTÖÖN YÖAIKAISET NOPEUSRAJOITUKSET JA PYSÄKÖINTIALUEET
Kaupunkisuunnittelulautakunta on päättänyt tiukentaa yhteiskäyttöisten sähköpotkulautojen sääntelyä tapaturmien vähentämiseksi.
Uusien määräysten myötä lautojen suurin sallittu nopeus lasketaan viikonloppuöisin klo 00–05 välillä 25 kilometristä tunnissa 15 kilometriin tunnissa. Lisäksi vilkkaimmilla ydinkeskustan jalkakäytävillä vuokralautojen pysäköinti on jatkossa sallittu ainoastaan merkityille pysäköintiruuduille.
Mikäli lauta jätetään ruudun ulkopuolelle kulkuväylää tukkien, vuokrayhtiöt veloittavat huolimattomalta käyttäjältä 15 euron virhemaksun.
Päivystyksen ylilääkäri kiittelee päätöstä todeten, että valtaosa pään ja kasvojen vakavista potkulautavammoista sattuu juuri viikonloppuöisin päihtyneenä ajettaessa.`,
    prompt: "Mikä seuraamus käyttäjälle koituu, jos hän jättää potkulaudan keskustassa merkityn alueen ulkopuolelle?",
    options: [
      "A) Poliisi ottaa ajokortin pois puoleksi vuodeksi",
      "B) Vuokrayhtiö veloittaa häneltä 15 euron virhemaksun",
      "C) Hänet määrätään 10 tunniksi yhdyskuntapalveluun",
      "D) Sähköpotkulautojen vuokraus kielletään häneltä ikuisesti"
    ],
    correctAnswer: "B) Vuokrayhtiö veloittaa häneltä 15 euron virhemaksun",
    explanation: "Tekstissä mainitaan: 'vuokrayhtiöt veloittavat huolimattomalta käyttäjältä 15 euron virhemaksun'."
  },
  {
    id: "ke-r-7",
    subtest: "reading",
    title: "Katsastusohje: Auton määräaikaiskatsastus ja hylkäysperusteet",
    passage: `MÄÄRÄAIKAISKATSASTUKSEN AJANKOHTA JA YLEISIMMÄT VIAT
Yksityiskäytössä olevat henkilöautot on katsastettava ensimmäisen kerran neljän vuoden kuluttua käyttöönottopäivästä, minkä jälkeen katsastus suoritetaan joka toinen vuosi aina kymmenenteen vuoteen asti. Kymmenvuotiaat ja sitä vanhemmat autot on katsastettava vuosittain.
Yleisimmät hylkäykseen johtavat syyt liittyvät etuakseliston ja jousituksen väljyyteen, jarrujen puoltokorjauksiin sekä liian suuriin pakokaasupäästöihin.
Mikäli autossa havaitaan ajokieltoon johtava vaarallinen vika (esimerkiksi jarruputken puhkeaminen), autolla ei saa ajaa katsastusasemalta pois.
Lievemmistä vioista annetaan korjauskehotus, joka velvoittaa kuljettajan korjaamaan vian kuukauden kuluessa ilman jälkitarkastusmaksua.`,
    prompt: "Kuinka usein yli 10-vuotias henkilöauto on katsastettava laillisesti?",
    options: [
      "A) Joka kuukausi",
      "B) Joka toinen vuosi",
      "C) Joka vuosi (vuosittain)",
      "D) Vain omistajan vaihtuessa"
    ],
    correctAnswer: "C) Joka vuosi (vuosittain)",
    explanation: "Katsastussäännön mukaan: 'Kymmenvuotiaat ja sitä vanhemmat autot on katsastettava vuosittain'."
  },
  {
    id: "ke-r-8",
    subtest: "reading",
    title: "Verotoimiston ohjeistus: Kotitalousvähennyksen hakeminen",
    passage: `HYÖDYNNÄ KOTITALOUSVÄHENNYS ASUNNON KUNNOSTUSTÖISTÄ
Kotitalousvähennystä voi hakea verotuksessa töistä, jotka tehdään kotona tai vapaa-ajan asunnossa. Tällaisia töitä ovat remontti-, siivous- ja hoitotyöt.
Vähennystä myönnetään ainoastaan työn osuudesta, ei materiaaleista tai matkakuluista.
Yrityksen, jolta palvelu ostetaan, täytyy ehdottomasti kuulua ennakkoperintärekisteriin sopimuksentekohetkellä. Voit tarkistaa yrityksen rekisteröinnin maksutta osoitteessa ytj.fi.
Kotitalousvähennyksen omavastuu on 100 euroa kalenterivuodessa henkilöä kohden. Ilmoita vähennys veroilmoituksessasi joko verkossa OmaVerossa tai paperilomakkeella ennen määräpäivää.`,
    prompt: "Mistä osuudesta kotitalousvähennystä voi saada verotuksessa?",
    options: [
      "A) Kaikista ostetuista rakennusmateriaaleista ja työkaluista",
      "B) Ainoastaan työn osuudesta, ei tarvikkeista tai matkoista",
      "C) Työntekijöiden ruokailu- ja hotellikuluista",
      "D) Vain asunnon myyntivoitosta"
    ],
    correctAnswer: "B) Ainoastaan työn osuudesta, ei tarvikkeista tai matkoista",
    explanation: "Ohjeessa lukee: 'Vähennystä myönnetään ainoastaan työn osuudesta, ei materiaaleista tai matkakuluista'."
  },
  {
    id: "ke-r-9",
    subtest: "reading",
    title: "Työsuojelutiedote: Näyttöpäätetyö ja ergonomia",
    passage: `NÄYTTÖPÄÄTETYYN TAUKO- JA ERGONOMIAOHJEET
Pitkäaikainen staattinen istuminen näyttöpäätteen ääressä aiheuttaa niska-hartiaseudun kiputiloja, silmien kuivumista ja päänsärkyä.
Työterveyslaitos suosittelee, että työntekijä pitää vähintään viiden minuutin mikrotauon jokaista työskentelytuntia kohden. Tauon aikana on suositeltavaa nousta ylös tuolilta, venytellä ja katsella kauas ikkunasta silmälihasten rentouttamiseksi.
Säädettävän sähköpöydän avulla puolet työpäivästä kannattaa viettää seisten.
Mikäli työntekijä kokee jatkuvaa silmien rasittumista, työnantajalla on lakisääteinen velvollisuus kustantaa erityistyölasit lääkärintodistuksen ja optikon lausunnon perusteella.`,
    prompt: "Mitä työnantajan velvollisuuksiin kuuluu, jos työntekijän näkö rasittuu jatkuvasti näyttöpäätetyössä?",
    options: [
      "A) Antaa työntekijälle välittömästi potkut",
      "B) Kustantaa erityistyölasit lääkärin ja optikon lausunnon perusteella",
      "C) Kieltää tietokoneen käyttö koko yrityksessä",
      "D) Maksaa työntekijälle ylimääräinen lomamatka etelään"
    ],
    correctAnswer: "B) Kustantaa erityistyölasit lääkärin ja optikon lausunnon perusteella",
    explanation: "Tekstissä sanotaan: 'työnantajalla on lakisääteinen velvollisuus kustantaa erityistyölasit lääkärintodistuksen ja optikon lausunnon perusteella'."
  },
  {
    id: "ke-r-10",
    subtest: "reading",
    title: "Ympäristökatsaus: Itämeren suojelu ja mökkeilijöiden jätevedet",
    passage: `HAJA-ASUTUSALUEIDEN JÄTEVESIASETUS JA RANTAVYÖHYKKEET
Itämeren ja sisävesistöjen rehevöityminen on yksi Suomen vakavimmista ympäristöongelmista. Erityisesti fosfori- ja typpipäästöt kiihdyttävät myrkyllisten sinilevälauttojen muodostumista kesähelteillä.
Lainsäädäntö edellyttää, että herkillä ranta-alueilla (alle 100 metriä vesistöstä) sijaitsevien kiinteistöjen ja vapaa-ajan asuntojen jätevesijärjestelmät on saatettava tiukkojen puhdistusvaatimusten tasolle.
Käymäläjätevesiä ei saa missään tilanteessa laskea suoraan maastoon tai vesistöön, vaan ne on johdettava umpisäiliöön tai pienpuhdistamoon.
Vähäiset pesuvedet eli ns. harmaat vedet voidaan imeyttää asianmukaisesti maaperään riittävän kaukana rantaviivasta.`,
    prompt: "Miten käymäläjätevedet tulee asetuksen mukaan käsitellä ranta-alueilla?",
    options: [
      "A) Laskea suoraan järveen tai mereen yöaikaan",
      "B) Johtaa umpisäiliöön tai pienpuhdistamoon",
      "C) Polttaa rannalla kokossa",
      "D) Kaataa naapurin tontille"
    ],
    correctAnswer: "B) Johtaa umpisäiliöön tai pienpuhdistamoon",
    explanation: "Asetus vaatii: 'Käymäläjätevesiä ei saa missään tilanteessa laskea suoraan maastoon tai vesistöön, vaan ne on johdettava umpisäiliöön tai pienpuhdistamoon'."
  },
  {
    id: "ke-r-11",
    subtest: "reading",
    title: "Kirjaston ilmoitus: Digiopastus senioreille ja maahanmuuttajille",
    passage: `ILMAISTA DIGIOPASTUSTA PÄÄKIRJASTON MEDIATILASSA
Ovatko sähköiset viranomaispalvelut, Kanta.fi tai verkkopankin käyttö sinulle haastavia?
Kirjaston digitukihenkilöt ja vapaaehtoiset opastajat neuvovat maksutta älypuhelinten, tablettien ja tietokoneiden käytössä joka torstai klo 13–15.
Opastukseen ei tarvitse ilmoittautua etukäteen; vuoronumerot jaetaan klo 12:45 alkaen neuvontatiskillä.
Huomioithan, että opastaja ei saa tietoturvasyistä koskaan tietää henkilökohtaisia salasanojasi tai pankkitunnuksiasi – asiointi tehdään aina siten, että kirjoitat salasanasi itse. Ota mukaan oma laitteesi ja laturi!`,
    prompt: "Mitä tietoturvasääntöä opastuksessa noudatetaan ehdottomasti?",
    options: [
      "A) Opastaja kirjoittaa aina asiakkaan pankkitunnukset muistiin paperille",
      "B) Asiakkaan täytyy antaa puhelimensa opastajalle kotiin vietäväksi",
      "C) Opastaja ei saa koskaan tietää asiakkaan salasanoja tai pankkitunnuksia",
      "D) Kirjasto vaatii 50 euron panttimaksun ennen opastusta"
    ],
    correctAnswer: "C) Opastaja ei saa koskaan tietää asiakkaan salasanoja tai pankkitunnuksia",
    explanation: "Ilmoitus painottaa: 'opastaja ei saa tietoturvasyistä koskaan tietää henkilökohtaisia salasanojasi tai pankkitunnuksiasi'."
  },
  {
    id: "ke-r-12",
    subtest: "reading",
    title: "Vakuutusyhtiön tiedote: Matkavakuutus ja matkan peruuntuminen",
    passage: `MATKAVAKUUTUKSEN KORVAUSPERUSTEET: MILLOIN MATKAN PERUUNTUMINEN KORVATAAN?
Jatkuva matkustajavakuutus korvaa matkan peruuntumiskuluja, mikäli matkalle lähtö estyy vakuutetun itsensä tai hänen lähiomaisensa äkillisen, odottamattoman ja vakavan sairastumisen, tapaturman tai kuoleman johdosta.
Korvauksen hakeminen edellyttää aina lääkärintodistusta, josta ilmenee este matkustamiselle ennen matkan alkamista.
Vakuutus ei korvaa peruuntumista, jos syynä on pelkkä matkakohteen huono sää, lakko, lentoyhtiön konkurssi tai matkustajan oma mielenmuutos.
Hae korvausta ensisijaisesti lentoyhtiöltä tai matkanjärjestäjältä käyttämättömistä lipuista ennen vakuutusilmoituksen tekemistä.`,
    prompt: "Missä tapauksessa matkavakuutus korvaa matkan peruuntumisen?",
    options: [
      "A) Jos matkustaja ei enää haluakaan lähteä lomalle",
      "B) Jos kohteessa sataa vettä koko viikon",
      "C) Jos vakuutettu tai hänen lähiomaisensa sairastuu äkillisesti ja vakavasti",
      "D) Jos matkakohteen hotelli on liian kallis"
    ],
    correctAnswer: "C) Jos vakuutettu tai hänen lähiomaisensa sairastuu äkillisesti ja vakavasti",
    explanation: "Vakuutusehdot korvaavat esteen, kun kyseessä on 'vakuutetun itsensä tai hänen lähiomaisensa äkillisen, odottamattoman ja vakavan sairastumisen, tapaturman tai kuoleman johdosta'."
  },
  {
    id: "ke-r-13",
    subtest: "reading",
    title: "Poliisin tiedote: Polkupyörävarkauksien ehkäisy",
    passage: `LUKITSE PYÖRÄSI OIKEIN – POLIISIN VINKIT PYÖRÄVARKAUKSIEN ESTÄMISEEN
Polkupyörävarkaudet lisääntyvät keväisin ja syksyisin vilkkailla juna-asemilla ja oppilaitosten pihoilla.
Poliisi muistuttaa, että pelkkä rungon runkolukko ei riitä estämään varkautta, sillä pyörä voidaan helposti nostaa pakettiautoon. Pyörä tulisi aina lukita tukevalla U-lukolla tai kettinkilukolla rungostaan kiinteään telineeseen tai aitaan.
Ota pyörästäsi valokuva ja kirjoita sen runkonumero muistiin heti oston jälkeen. Runkonumero on stanssattu polkupyörän runkoon keskiön alle.
Ilman runkonumeroa poliisin on lähes mahdotonta palauttaa varastettua ja takavarikoitua pyörää takaisin oikealle omistajalleen.`,
    prompt: "Miksi pyörää ei poliisin mukaan kannata lukita vain omalla runkolukollaan?",
    options: [
      "A) Koska runkolukko maksaa liikaa kaupassa",
      "B) Koska pyörä voidaan helposti kantaa tai nostaa kyytiin, ellei se ole kiinni telineessä",
      "C) Koska runkolukko rikkoo pyörän renkaat",
      "D) Koska laki kieltää runkolukkojen käytön Suomessa"
    ],
    correctAnswer: "B) Koska pyörä voidaan helposti kantaa tai nostaa kyytiin, ellei se ole kiinni telineessä",
    explanation: "Tiedotteen mukaan runkolukko ei riitä, 'sillä pyörä voidaan helposti nostaa pakettiautoon' ellei se ole kiinni kiinteässä telineessä."
  },
  {
    id: "ke-r-14",
    subtest: "reading",
    title: "Terveysuutinen: D-vitamiinin saantisuositukset pimeänä vuodenaikana",
    passage: `D-VITAMIINILISÄ ON TARPEEN LOKAKUUSTA MAALISKUUSSA
Suomen maantieteellisen sijainnin vuoksi auringonvalon UVB-säteily ei riitä tuottamaan ihossa riittävästi D-vitamiinia lokakuun alusta maaliskuun loppuun.
Valtion ravitsemusneuvottelukunta suosittelee kaikille aikuisille päivittäistä 10 mikrogramman (µg) D-vitamiinilisää pimeän talvikauden aikana. Yli 75-vuotiaille ja raskaana oleville suositus on 20 mikrogrammaa ympäri vuoden.
D-vitamiini on elintärkeä luuston lujuudelle, kalsiumin imeytymiselle sekä immuunijärjestelmän normaalille toiminnalle.
Ravinnosta parhaita D-vitamiinin lähteitä ovat rasvaiset kalat (kuten lohi, silakka ja siika) sekä D-vitaminoidut maitotuotteet ja kasvimaitojuomat.`,
    prompt: "Miksi suomalaisten on otettava D-vitamiinilisää talvella?",
    options: [
      "A) Koska Suomessa ei myydä lainkaan hedelmiä talvella",
      "B) Koska auringonvalo ei ole riittävää D-vitamiinin muodostamiseksi ihossa talvikuukausina",
      "C) Koska talvella ei saa syödä maitotuotteita",
      "D) Koska laki määrää jokaiselle sakon ilman vitamiineja"
    ],
    correctAnswer: "B) Koska auringonvalo ei ole riittävää D-vitamiinin muodostamiseksi ihossa talvikuukausina",
    explanation: "Artikkelissa todetaan: 'auringonvalon UVB-säteily ei riitä tuottamaan ihossa riittävästi D-vitamiinia lokakuun alusta maaliskuun loppuun'."
  },
  {
    id: "ke-r-15",
    subtest: "reading",
    title: "Uutinen: Työn ja perhe-elämän yhteensovittaminen Suomessa",
    passage: `PERHEVAPAIDEN UUDISTUS KANNUSTAA ISiÄ JÄÄMÄÄN KOTIIN
Vuonna 2022 voimaan tullut perhevapaauudistus jakoi vanhempainrahapäivät tasan molempien vanhempien kesken (160 arkipäivää kummallekin vanhemmalle). Vanhempi voi luovuttaa omista kiintiöpäivistään toiselle vanhemmalle enintään 63 päivää.
Tuoreiden tilastojen mukaan yhä useampi isä hyödyntääkin nyt vapaansa aiempaa pidempänä jaksona.
Uudistuksen tavoitteena on paitsi vahvistaa isän ja lapsen varhaista suhdetta, myös edistää naisten asemaa työmarkkinoilla kaventamalla äitiydestä johtuvia urataukoja ja palkkaeroja.
Työelämän joustot, kuten osittainen hoitoraha ja mahdollisuus lyhennettyyn työpäivään pikkulapsivaiheessa, ovat saaneet kiitosta myös perheystävällisiltä yrityksiltä.`,
    prompt: "Mikä oli perhevapaauudistuksen yksi keskeinen tavoite työmarkkinoilla?",
    options: [
      "A) Pakottaa kaikki äidit jäämään kotiin viideksi vuodeksi",
      "B) Kaventaa naisten urataukoja ja palkkaeroja jakamalla vapaat tasaisemmin",
      "C) Poistaa vanhempainpäivärahat kokonaan säästösyistä",
      "D) Kieltää isiltä vanhempainvapaat tulevaisuudessa"
    ],
    correctAnswer: "B) Kaventaa naisten urataukoja ja palkkaeroja jakamalla vapaat tasaisemmin",
    explanation: "Uudistuksen tavoitteena oli: 'edistää naisten asemaa työmarkkinoilla kaventamalla äitiydestä johtuvia urataukoja ja palkkaeroja'."
  },
  {
    id: "ke-r-16",
    subtest: "reading",
    title: "Kuluttajaliitto: Sähkösopimusten vertailu ja pörssisähkön riskit",
    passage: `MÄÄRÄAIKAINEN VAI PÖRSSISÄHKÖ – MITEN VALITA OIKEA SOPIMUS?
Sähkömarkkinoilla kuluttajille tarjotaan pääasiassa kahta sopimustyyppiä: kiinteähintaista määräaikaista sopimusta ja toistaiseksi voimassa olevaa pörssisähkösopimusta.
Pörssisähkössä hinta vaihtelee tunneittain kysynnän ja tarjonnan mukaan Nord Pool -sähköpörssissä. Se on pitkällä aikavälillä ollut tilastollisesti edullisempi vaihtoehto, mutta se vaatii kuluttajalta kykyä ajoittaa suurta sähkönkulutusta (kuten saunomista, lämmitystä tai auton latausta) halvoille yötunneille.
Kiinteähintainen sopimus puolestaan tuo budjetointiturvaa ja ennakoitavuutta, mutta sitoo kuluttajan samaan hintaan sopimuskauden (esim. 24 kk) loppuun asti riippumatta markkinahintojen laskusta.`,
    prompt: "Mitä pörssisähkösopimus edellyttää kuluttajalta, jotta siitä hyötyisi parhaiten?",
    options: [
      "A) Sähkön käyttämistä ainoastaan talvikuukausina",
      "B) Kykyä ajoittaa sähkönkulutusta halvoille tunneille, kuten öihin",
      "C) Oman sähkövoimalan rakentamista kotipihalle",
      "D) Sähkölaskujen maksamista viikoittain käteisellä"
    ],
    correctAnswer: "B) Kykyä ajoittaa sähkönkulutusta halvoille tunneille, kuten öihin",
    explanation: "Tekstissä todetaan, että pörssisähkö 'vaatii kuluttajalta kykyä ajoittaa suurta sähkönkulutusta... halvoille yötunneille'."
  },
  {
    id: "ke-r-17",
    subtest: "reading",
    title: "Pelastuslaitoksen tiedote: Palovaroittimien lakimuutos",
    passage: `LAKIMUUTOS: PALOVAROITTIMIEN KUNNOSSAPITOVASTUU SIIRTYI TALOYHTIÖILLE
Vuoden alusta voimaan tullut pelastuslain muutos siirsi palovaroittimien hankinta- ja kunnossapitovastuun asukkaalta rakennuksen omistajalle eli kerros- ja rivitaloissa asunto-osakeyhtiölle.
Aiemmin asukas vastasi itse varoittimen toiminnasta ja paristonvaihdosta, mikä johti valitettavan usein toimimattomiin laitteisiin.
Jatkossa taloyhtiö vastaa siitä, että jokaisessa asunnossa on lain vaatima määrä (yksi palovaroitin jokaista alkavaa 60 asuinneliömetriä kohden jokaisessa kerroksessa) toimivia varoittimia ja niiden paristot vaihdetaan määräajoin.
Asukkaan velvollisuutena on kuitenkin edelleen testata varoitin säännöllisesti ja ilmoittaa viipymättä huoltoyhtiölle, jos varoitin piippaa vian tai pariston loppumisen merkiksi.`,
    prompt: "Mikä on asukkaan vastuu palovaroittimista lakimuutoksen jälkeen?",
    options: [
      "A) Ostaa 10 uutta palovaroitinta joka kuukausi omalla kustannuksellaan",
      "B) Testata laite säännöllisesti ja ilmoittaa huoltoyhtiölle mahdollisista vioista",
      "C) Purkaa varoittimet pois katosta esteettisistä syistä",
      "D) Asukkaalla ei ole enää mitään tekemistä paloturvallisuuden kanssa"
    ],
    correctAnswer: "B) Testata laite säännöllisesti ja ilmoittaa huoltoyhtiölle mahdollisista vioista",
    explanation: "Tekstissä sanotaan: 'Asukkaan velvollisuutena on kuitenkin edelleen testata varoitin säännöllisesti ja ilmoittaa viipymättä huoltoyhtiölle'."
  },
  {
    id: "ke-r-18",
    subtest: "reading",
    title: "Koulutusartikkeli: Oppisopimuskoulutus väylänä uuteen ammattiin",
    passage: `OPPISOPIMUS YHDISTÄÄ PALKALLISEN TYÖN JA OPISKELUN
Oppisopimus on erinomainen ja käytännönläheinen tapa opiskella ammatillinen perustutkinto, ammattitutkinto tai suorittaa tutkinnon osia.
Noin 80 prosenttia opiskelusta tapahtuu työpaikalla aidoissa työtehtävissä kokeneen työpaikkaohjaajan opastuksessa, ja loppuosa koostuu oppilaitoksen teoriapäivistä ja verkko-opinnoista.
Oppisopimuksen ajaksi solmitaan määräaikainen työsopimus, ja opiskelijalle maksetaan työehtosopimuksen mukaista palkkaa työssäoloajalta.
Oppisopimus sopii niin nuorille ilman aiempaa ammattia kuin alanvaihtajille tai jo työssä oleville, jotka haluavat virallisen todistuksen osaamisestaan. Ensimmäinen askel on sopivan työpaikan löytäminen, minkä jälkeen otetaan yhteyttä seudun ammatilliseen oppilaitokseen.`,
    prompt: "Miten suuri osuus oppisopimuskoulutuksesta tapahtuu työpaikalla?",
    options: [
      "A) Vain noin 10 prosenttia",
      "B) Noin 50 prosenttia",
      "C) Noin 80 prosenttia aidoissa työtehtävissä",
      "D) 100 prosenttia vain kotona luettuna"
    ],
    correctAnswer: "C) Noin 80 prosenttia aidoissa työtehtävissä",
    explanation: "Tekstissä kerrotaan: 'Noin 80 prosenttia opiskelusta tapahtuu työpaikalla aidoissa työtehtävissä'."
  },
  {
    id: "ke-r-19",
    subtest: "reading",
    title: "Kuntatiedote: Kirjastojen ja asukastalojen yhteistilat",
    passage: `KUNTALAISTEN OLOHUONEET: MONIPUOLISET TILAVARAUKSET
Kaupunki tarjoaa asukkailleen ilmaisia kokoontumis- ja harrastustiloja kirjastoissa ja asukastaloissa Varaamo-palvelun kautta (varaamo.fi).
Asukkaat ja paikalliset yhdistykset voivat varata kokoushuoneita, ompelukoneita, 3D-tulostimia, musiikin äänitysstudioita sekä digitointilaitteita vanhojen VHS-kasettien siirtämiseksi digimuotoon.
Tilojen varaaminen on ei-kaupalliseen käyttöön täysin maksutonta. Varauksen tekemiseen tarvitaan ainoastaan kirjastokortti ja PIN-koodi.
Huomaathan, että varatun tilan käyttämättä jättämisestä ilman peruutusta 24 tuntia etukäteen voi seurata kahden viikon varauskielto järjestelmässä.`,
    prompt: "Mitä voi tapahtua, jos asukas jättää varatun tilan käyttämättä eikä peruuta sitä ajoissa?",
    options: [
      "A) Hän saa 500 euron sakon poliisilta",
      "B) Hänen kirjastokorttinsa tuhotaan pysyvästi",
      "C) Hän voi saada kahden viikon varauskiellon palveluun",
      "D) Ei mitään, tilaa ei tarvitse koskaan peruuttaa"
    ],
    correctAnswer: "C) Hän voi saada kahden viikon varauskiellon palveluun",
    explanation: "Sääntöjen mukaan: 'käyttämättä jättämisestä ilman peruutusta 24 tuntia etukäteen voi seurata kahden viikon varauskielto järjestelmässä'."
  },
  {
    id: "ke-r-20",
    subtest: "reading",
    title: "Talousuutinen: Kierrätys ja panttijärjestelmän tehokkuus Suomessa",
    passage: `SUOMEN PANTTIJÄRJESTELMÄ ON MAAILMAN HUIPPULUOKKAA
Suomalainen juomapakkausten palautusjärjestelmä (Palpa) saavuttaa vuosittain huikeita tuloksia: jopa yli 90 prosenttia alumiinitölkeistä, muovisista PET-pulloista ja lasipulloista palautetaan kiertoon.
Tölkkien materiaali voidaan kierrättää lähes ikuisesti uusiin pakkauksiin ilman laadun heikkenemistä, mikä säästää jopa 95 prosenttia energiaa verrattuna neitseellisen alumiinin louhimiseen ja valmistukseen.
Panttijärjestelmän menestys perustuu helppouteen: palautusautomaatteja löytyy lähes jokaisesta ruokakaupasta ja hyvitys maksetaan asiakkaalle suoraan käteisenä tai ostosten loppusummasta vähennettynä.
Kierrätys säästää paitsi luontoa myös hillitsee roskaantumista kaupunkien puistoissa ja teiden varsilla.`,
    prompt: "Kuinka paljon energiaa säästyy, kun tölkkialumiini kierrätetään neitseellisen sijaan?",
    options: [
      "A) Vain 10 prosenttia",
      "B) Noin 50 prosenttia",
      "C) Jopa 95 prosenttia",
      "D) Energiaa ei säästy lainkaan"
    ],
    correctAnswer: "C) Jopa 95 prosenttia",
    explanation: "Tekstissä todetaan: 'mikä säästää jopa 95 prosenttia energiaa verrattuna neitseellisen alumiinin louhimiseen ja valmistukseen'."
  },
  {
    id: "ke-r-21",
    subtest: "reading",
    title: "Matkailuartikkeli: Jokamiehenoikeudet ja vastuut Suomen luonnossa",
    passage: `JOKAMIEHENOIKEUDET: VAPAUS LIUKUA JA VELVOLLISUUS SUOJELLA
Suomen jokamiehenoikeudet (nykyisin usein kutsutaan myös jokaisenoikeuksiksi) antavat kaikille maassa oleskeleville poikkeuksellisen vapauden liikkua luonnossa, marjastaa ja sienestää vapaasti riippumatta siitä, kuka maan omistaa.
Oikeuksien vastapainona ovat kuitenkin tiukat velvollisuudet: luonnolle tai maanomistajalle ei saa aiheuttaa häiriötä eikä haittaa.
Esimerkiksi tulenteko toisen maalle ilman maanomistajan lupaa on kielletty, eikä avotulta saa koskaan sytyttää maastopalovaroituksen aikana edes virallisilla nuotiopaikoilla.
Myöskään toisen kotirauhan piiriin (kuten pihoille tai viljellyille pelloille) ei saa mennä, eikä eläviä puita saa kaataa tai oksia taittaa ilman lupaa.`,
    prompt: "Saako toisen maalle sytyttää nuotion jokamiehenoikeuksien nojalla?",
    options: [
      "A) Kyllä, aina ja missä tahansa metsässä",
      "B) Ei saa ilman maanomistajan erillistä lupaa",
      "C) Vain jos mukana on oma teltta",
      "D) Kyllä, mutta vain yöaikaan"
    ],
    correctAnswer: "B) Ei saa ilman maanomistajan erillistä lupaa",
    explanation: "Tekstissä sanotaan selvästi: 'tulenteko toisen maalle ilman maanomistajan lupaa on kielletty'."
  },
  {
    id: "ke-r-22",
    subtest: "reading",
    title: "Terveyskirjasto: Unettomuuden lääkkeettömät hoitokeinot",
    passage: `UNEN HUOLTO JA UNIHYGIENIA PITKÄAIKAISEN UNETTOMUUDEN HOIDOSSA
Tilapäinen unettomuus stressin tai elämänmuutosten yhteydessä on yleistä, mutta pitkittyessään se heikentää elämänlaatua ja vastustuskykyä.
Lääkehoito on tarkoitettu ainoastaan lyhytaikaiseksi tueksi, ja ensisijainen hoito perustuu aina unihygienian parantamiseen ja kognitiivisiin menetelmiin.
Tärkeimpiä keinoja ovat säännöllinen unirytmi (nouseminen samaan aikaan myös viikonloppuisin), kofeiinin ja alkoholin välttäminen iltaisin sekä makuuhuoneen pitäminen viileänä, pimeänä ja hiljaisena.
Jos uni ei tule 20–30 minuutissa, sängyssä ei pidä pyöriä ahdistuneena, vaan kannattaa nousta hämärään huoneeseen tekemään jotain rauhallista, kunnes väsymys palaa.`,
    prompt: "Mitä suositellaan tehtäväksi, jos uni ei tule puolessa tunnissa?",
    options: [
      "A) Juoda kaksi kuppia vahvaa kahvia",
      "B) Aloittaa kova kuntosalitreeni makuuhuoneessa",
      "C) Nousta ylös vuoteesta ja tehdä jotain rauhallista hämärässä",
      "D) Katsoa toimintaelokuvaa täydellä äänenvoimakkuudella sängyssä"
    ],
    correctAnswer: "C) Nousta ylös vuoteesta ja tehdä jotain rauhallista hämärässä",
    explanation: "Ohje neuvoo: 'kannattaa nousta hämärään huoneeseen tekemään jotain rauhallista, kunnes väsymys palaa', eikä jäädä pyörimään sänkyyn."
  },
  {
    id: "ke-r-23",
    subtest: "reading",
    title: "Yritysuutinen: Kiertotalous ja tekstiilijätteen lajittelu",
    passage: `POISTOTEKSTIILIEN ERILLISKERÄYS LAAJENTUU KOKO MAAHAN
Jätelain uudistus velvoittaa kunnat järjestämään asumisessa syntyvän poistotekstiilin erilliskeräyksen.
Poistotekstiilikeräykseen kelpaavat puhtaat, kuivat ja käyttökelvottomat vaatteet ja kodintekstiilit (kuten repeytyneet paidat, lakanat ja pyyhkeet), jotka pakataan tiiviisti muovipusseihin kosteuden ja lian estämiseksi.
Keräykseen EI saa laittaa homeisia, märkiä tai voimakkaasti haisevia tekstiilejä, eikä myöskään kenkiä, laukkuja, mattoja tai alusvaatteita; nämä kuuluvat edelleen sekajätteeseen.
Kerätystä kuidusta valmistetaan uusiomateriaalia mm. eristevilloihin, lankoihin ja komposiittituotteisiin.`,
    prompt: "Miten poistotekstiilit tulee pakata keräyspisteeseen vietäessä?",
    options: [
      "A) Ilman mitään pussia suoraan laariin",
      "B) Tiiviisti suljettuihin muovipusseihin kosteudelta suojaamiseksi",
      "C) Pahvilaatikoihin ilman teippiä",
      "D) Kangassäkkeihin, jotka jätetään auki"
    ],
    correctAnswer: "B) Tiiviisti suljettuihin muovipusseihin kosteudelta suojaamiseksi",
    explanation: "Ohje vaatii, että poistotekstiilit 'pakataan tiiviisti muovipusseihin kosteuden ja lian estämiseksi'."
  },
  {
    id: "ke-r-24",
    subtest: "reading",
    title: "Liikenneturvan tiedote: Heijastimen käyttö pimeällä tiellä",
    passage: `NÄY PIMEÄSSÄ: HEIJASTIN PELASTAA HENKIÄ
Syksyn hämärässä ja sateessa jalankulkijan havaitseminen ilman heijastinta on autoilijalle erittäin vaikeaa.
Auton lähivaloilla ajava kuljettaja havaitsee ilman heijastinta pimeissä vaatteissa liikkuvan jalankulkijan vasta noin 50 metrin päästä. Jos jalankulkijalla on heijastin, hänet voidaan havaita jo 150–350 metrin etäisyydeltä, mikä antaa kuljettajalle runsaasti aikaa reagoida ja jarruttaa.
Liikenneturva suosittelee heijastimen kiinnittämistä polven korkeudelle tien puoleiselle sivulle, jotta se osuu parhaiten auton valokeilaan. Parhaan turvan antaa molemmilla puolilla heiluva riippuheijastin tai heijastinliivi.`,
    prompt: "Miltä etäisyydeltä autoilija havaitsee heijastimella varustetun jalankulkijan lähivaloilla?",
    options: [
      "A) Vasta 10 metrin päästä",
      "B) Noin 50 metrin päästä",
      "C) Noin 150–350 metrin etäisyydeltä",
      "D) Heijastin ei vaikuta etäisyyteen lainkaan"
    ],
    correctAnswer: "C) Noin 150–350 metrin etäisyydeltä",
    explanation: "Tekstissä kerrotaan: 'Jos jalankulkijalla on heijastin, hänet voidaan havaita jo 150–350 metrin etäisyydeltä'."
  },
  {
    id: "ke-r-25",
    subtest: "reading",
    title: "Asumistiedote: Vuokralaisen oikeudet asunnon vikojen yhteydessä",
    passage: `VUOKRALAINEN, VAADI HINNANALENNUSTA ASUNNON PUUTTEISTA
Asuinhuoneiston vuokrauksesta annetun lain mukaan vuokralaisella on oikeus saada vapautus vuokran maksamisesta tai kohtuullinen alennus vuokrasta siltä ajalta, jona huoneisto ei ole ollut vaadittavassa kunnossa.
Mikäli asunnossa alkaa esimerkiksi laaja kylpyhuoneremontti, joka estää suihkun tai pesutilojen käytön viikoiksi, vuokralainen ei ole velvollinen maksamaan täyttä vuokraa.
Alennusta ei kuitenkaan saa automaattisesti taannehtivasti: vuokralaisen on ilmoitettava viasta tai häiriöstä vuokranantajalle kirjallisesti viipymättä ja vaadittava vuokranalennusta.
Vuokralainen ei saa kuitenkaan omavaltaisesti jättää koko vuokraa maksamatta ilman vuokranantajan suostumusta tai oikeuden päätöstä.`,
    prompt: "Mitä vuokralaisen tulee tehdä saadakseen alennusta vuokraan asunnon puutteista?",
    options: [
      "A) Lopettaa vuokranmaksu kokonaan ilmoittamatta mitään",
      "B) Ilmoittaa viasta vuokranantajalle kirjallisesti ja esittää alennusvaatimus",
      "C) Muuttaa heti pois ja viedä huonekalut mukanaan",
      "D) Soittaa poliisille hätänumeroon"
    ],
    correctAnswer: "B) Ilmoittaa viasta vuokranantajalle kirjallisesti ja esittää alennusvaatimus",
    explanation: "Laissa korostetaan: 'vuokralaisen on ilmoitettava viasta tai häiriöstä vuokranantajalle kirjallisesti viipymättä ja vaadittava vuokranalennusta'."
  },
  {
    id: "ke-r-26",
    subtest: "reading",
    title: "Tietosuojaohjeistus: Evästeet ja omien tietojen hallinta verkossa",
    passage: `MITÄ EVÄSTEET OVAT JA MITEN NIITÄ VOI HALLITA?
Evästeet (engl. cookies) ovat pieniä tekstitiedostoja, joita verkkosivustot tallentavat käyttäjän selaimeen.
Välttämättömät evästeet varmistavat sivuston teknisen toiminnan, kuten ostoskorin säilymisen tai kirjautumisen. Näihin sivusto ei tarvitse erillistä suostumusta.
Sen sijaan analytiikka-, markkinointi- ja seurantatarkoituksiin käytettäviin evästeisiin tarvitaan EU:n tietosuoja-asetuksen (GDPR) mukaan käyttäjän vapaaehtoinen ja nimenomainen suostumus.
Käyttäjällä on aina oltava yhtä helppo mahdollisuus kieltäytyä ylimääräisistä evästeistä kuin hyväksyä ne. Evästeet voi myös poistaa tai estää kokonaan oman verkkoselaimen asetuksista.`,
    prompt: "Millaisiin evästeisiin verkkosivusto tarvitsee aina käyttäjän erillisen suostumuksen?",
    options: [
      "A) Vain sivuston kielivalinnan tallentamiseen",
      "B) Analytiikka-, markkinointi- ja seurantatarkoituksiin",
      "C) Ostoskorin toimintaan verkkokaupassa",
      "D) Sivuston virheilmoitusten näyttämiseen"
    ],
    correctAnswer: "B) Analytiikka-, markkinointi- ja seurantatarkoituksiin",
    explanation: "GDPR:n mukaan: 'analytiikka-, markkinointi- ja seurantatarkoituksiin käytettäviin evästeisiin tarvitaan... käyttäjän vapaaehtoinen ja nimenomainen suostumus'."
  },
  {
    id: "ke-r-27",
    subtest: "reading",
    title: "Työmarkkinakatsaus: Koeaika ja sen pelisäännöt",
    passage: `KOEAIKA TYÖSUHTEEN ALUSSA: OIKEUDET JA VELVOLLISUUDET
Työsopimuslain mukaan työnantaja ja työntekijä voivat sopia työnteon aloittamisesta alkavasta koeajasta, jonka pituus voi toistaiseksi voimassa olevassa työsuhteessa olla enintään kuusi kuukautta.
Koeajan tarkoituksena on antaa molemmille osapuolille mahdollisuus arvioida työn ja tekijän yhteensopivuutta.
Koeajan kuluessa työsopimus voidaan purkaa kummankin osapuolen toimesta päättymään heti ilman irtisanomisaikaa.
Purkamista ei kuitenkaan saa koskaan suorittaa syrjivillä tai epäasiallisilla perusteilla (kuten raskauden, perhevapaan, iän, uskonnon tai ammattiyhdistystoiminnan vuoksi). Työnantajan on pyydettäessä esitettävä asialliset perusteet koeaikapurulle.`,
    prompt: "Miten pitkä koeaika voi enintään olla toistaiseksi voimassa olevassa työsopimuksessa?",
    options: [
      "A) Kaksi viikkoa",
      "B) Kaksi kuukautta",
      "C) Enintään kuusi kuukautta",
      "D) Kaksi vuotta"
    ],
    correctAnswer: "C) Enintään kuusi kuukautta",
    explanation: "Lain mukaan koeajan pituus 'voi toistaiseksi voimassa olevassa työsuhteessa olla enintään kuusi kuukautta'."
  },
  {
    id: "ke-r-28",
    subtest: "reading",
    title: "Terveysuutinen: Antibioottiresistenssi ja lääkkeiden oikea käyttö",
    passage: `ANTIBIOOTTIRESISTANSSI UHJAA GLOBAALIA TERVEYTTÄ
Bakteerien vastustuskyky antibiooteille eli antibioottiresistenssi on yksi nykylääketieteen suurimmista uhkakuvista. Jos antibiootit menettävät tehonsa, tavalliset tulehdukset ja rutiinileikkaukset voivat muuttua hengenvaarallisiksi.
Suomessa resistenssitilanne on kansainvälisesti hyvä tiukan reseptikäytännön ja vastuullisen eläinlääkinnän ansiosta.
On tärkeää muistaa, että antibiootit tehoavat ainoastaan bakteereihin, eivät viruksiin. Siksi tavalliseen flunssaan, influenssaan tai koronaan ei tule koskaan määrätä antibioottikuuria.
Lisäksi määrätty antibioottikuuri on aina syötävä loppuun lääkärin ohjeen mukaisesti, eikä ylijääneitä lääkkeitä saa koskaan säästää kotona tai heittää viemäriin.`,
    prompt: "Tehoavatko antibiootit tavalliseen virusflunssaan?",
    options: [
      "A) Kyllä, ne parantavat flunssan yhdessä tunnissa",
      "B) Eivät, antibiootit tepsivät vain bakteeritulehduksiin, eivät viruksiin",
      "C) Vain jos niitä ottaa kaksinkertaisen annoksen",
      "D) Kyllä, mutta vain talvikuukausina"
    ],
    correctAnswer: "B) Eivät, antibiootit tepsivät vain bakteeritulehduksiin, eivät viruksiin",
    explanation: "Tekstissä korostetaan: 'antibiootit tehoavat ainoastaan bakteereihin, eivät viruksiin. Siksi tavalliseen flunssaan... ei tule koskaan määrätä antibioottikuuria'."
  },
  {
    id: "ke-r-29",
    subtest: "reading",
    title: "Asumistalous: Taloyhtiön hoitovastike ja rahoitusvastike",
    passage: `MITÄ EROA ON HOITOVASTIKKEELLA JA RAHOITUSVASTIKKEELLA?
Asunto-osakeyhtiössä asunnon omistaja maksaa kuukausittain yhtiövastiketta, joka koostuu tyypillisesti kahdesta eri osasta: hoitovastikkeesta ja rahoitusvastikkeesta.
Hoitovastikkeella katetaan kiinteistön säännölliset juoksevat kulut, kuten lämmitys, kiinteistösähkö, jätehuolto, huoltoyhtiön palvelut, isännöinti ja pienet vuosikorjaukset.
Rahoitusvastikkeella (tai pääomavastikkeella) puolestaan lyhennetään taloyhtiön ottamaa yhteistä lainaa, jolla on rahoitettu suuria peruskorjaushankkeita, kuten putkiremonttia, julkisivusaneerausta tai hissien uusimista.
Mikäli osakas maksaa oman osuutensa yhtiölainasta kerralla pois, hänen ei tarvitse maksaa kuukausittaista rahoitusvastiketta lainkaan.`,
    prompt: "Mihin kuluihin hoitovastiketta käytetään taloyhtiössä?",
    options: [
      "A) Vain isännöitsijän ulkomaanmatkoihin",
      "B) Kiinteistön juokseviin kuluihin, kuten lämmitykseen, jätehuoltoon ja kiinteistönhuoltoon",
      "C) Osakkaiden omien huonekalujen ostamiseen",
      "D) Yhtiölainan lyhentämiseen pankille"
    ],
    correctAnswer: "B) Kiinteistön juokseviin kuluihin, kuten lämmitykseen, jätehuoltoon ja kiinteistönhuoltoon",
    explanation: "Hoitovastikkeella katetaan: 'kiinteistön säännölliset juoksevat kulut, kuten lämmitys, kiinteistösähkö, jätehuolto, huoltoyhtiön palvelut'."
  },
  {
    id: "ke-r-30",
    subtest: "reading",
    title: "Työhyvinvointi: Työuupumuksen ennaltaehkäisy ja varoitusmerkit",
    passage: `TYÖUUPUMUKSEN TUNNISTAMINEN JA TYÖYHTEISÖN VASTUU
Työuupumus (burnout) kehittyy hitaasti pitkittyneen työstressin seurauksena. Sen kolme keskeistä oiretta ovat krooninen väsymys, josta ei toivu viikonlopun levolla, kyynistyminen työtä kohtaan sekä ammatillisen itsetunnon heikkeneminen.
Työuupumus ei ole yksilön heikkoutta, vaan useimmiten merkki huonosti organisoidusta työstä: jatkuvasta aikapulasta, epäselvistä tavoitteista tai riittämättömästä esihenkilön tuesta.
Ennaltaehkäisyssä avainasemassa on työkuorman säännöllinen seuraaminen ja rajojen asettaminen työn ja vapaa-ajan välille.
Mikäli työntekijä havaitsee itsessään uupumusoireita, asia kannattaa ottaa puheeksi esihenkilön ja työterveyshuollon kanssa heti ennen sairausloman tarvetta.`,
    prompt: "Mistä työuupumus useimmiten johtuu artikkelin mukaan?",
    options: [
      "A) Yksilön huonosta kunnosta ja laiskuudesta",
      "B) Huonosti organisoidusta työstä, aikapulasta ja epäselvistä tavoitteista",
      "C) Liian pitkistä kesälomista",
      "D) Pelkästään perhe-elämän vaikeuksista"
    ],
    correctAnswer: "B) Huonosti organisoidusta työstä, aikapulasta ja epäselvistä tavoitteista",
    explanation: "Tekstissä todetaan: 'Työuupumus ei ole yksilön heikkoutta, vaan useimmiten merkki huonosti organisoidusta työstä: jatkuvasta aikapulasta, epäselvistä tavoitteista'."
  }
];

export const keskitasoWriting = [
  // 20 Practical Messages / Semi-formal & Formal Complaints & Letters
  {
    id: "ke-w-1",
    subtest: "writing",
    taskType: "message",
    title: "Kirjallinen valitus vuokranantajalle: Asunnon lämmitysongelmat",
    prompt: "Asunnossasi on ollut useamman viikon ajan kylmä (lämpötila vain 17 astetta), ja patterit ovat haaleat. Olet soittanut asiasta kerran huoltomiehelle, mutta tilanne ei ole korjaantunut. Kirjoita virallinen ja asiallinen sähköposti vuokranantajallesi.\n\nKerro viestissä:\n- Mikä ongelma asunnossasi on ja kauanko se on kestänyt\n- Mitä olet jo tehnyt asian eteen\n- Miten tilanne vaikuttaa asumismukavuuteesi ja terveyteesi\n- Pyydä asian pikaista korjaamista tiettyyn päivään mennessä ja mainitse mahdollinen vuokranalennusvaatimus.",
    minWords: 60,
    modelResponse: "Hei vuokranantaja,\n\nOtan yhteyttä asuntoni (Rantakatu 4 B 12) vakavan lämmitysongelman vuoksi. Huoneiston sisälämpötila on ollut jo kolmen viikon ajan vain noin 17 astetta, ja olohuoneen ja makuuhuoneen patterit ovat täysin haaleat.\n\nOlen ilmoittanut viasta huoltoyhtiölle kaksi viikkoa sitten, mutta huoltomiehen käynnistä huolimatta lämpötila ei ole noussut asumisterveysasetuksen edellyttämälle vähintään 20 asteen tasolle. Asunnossa on vetoisaa ja joudun käyttämään sisällä jatkuvasti talvitakkia, mikä aiheuttaa vilustumista.\n\nPyydän teitä selvittämään asian LVI-asiantuntijan kanssa ja korjaamaan lämmityksen kuntoon perjantaihin 18.10. mennessä. Mikäli vikaa ei korjata viipymättä, tulen vaatimaan vuokranalennusta puutteellisesta asumisolosuhteesta kuluneelta ajalta.\n\nYstävällisin terveisin,\nAlex Johnson\nPuh. 040 123 9876"
  },
  {
    id: "ke-w-2",
    subtest: "writing",
    taskType: "message",
    title: "Työhakemus: Asiakaspalveluneuvoja kaupungin asiointipisteeseen",
    prompt: "Olet nähnyt ilmoituksen avoimesta asiakaspalveluneuvojan paikasta kotikuntasi asiointipisteessä. Kirjoita virallinen hakemuskirje osaston päällikölle.\n\nKerro hakemuksessa:\n- Mihin tehtävään haet ja mistä kuulit paikasta\n- Koulutustaustasi ja aiempi työkokemuksesi asiakaspalvelusta\n- Kielitaitosi (suomi, englanti, muut kielet) ja vuorovaikutustaitosi\n- Miksi juuri sinä sopisit tähän tehtävään ja miten sinuun voi ottaa yhteyttä.",
    minWords: 70,
    modelResponse: "Arvoisa palvelupäällikkö,\n\nKirjoitan hakeakseni kaupungin asiointipisteen avoinna olevaa asiakaspalveluneuvojan tehtävää, josta luin Kuntarekry-sivustolta. Tehtävä vastaa erinomaisesti ammatillista osaamistani ja kiinnostustani kuntalaisten auttamiseen.\n\nOlen koulutukseltani merkonomi ja olen työskennellyt viimeiset kolme vuotta monikielisessä asiakaspalvelussa vähittäiskaupan alalla. Työssäni olen tottunut ratkaisemaan haastavia asiakastilanteita kärsivällisesti, ystävällisesti ja ratkaisukeskeisesti. Kommunikoin sujuvasti suomeksi ja englanniksi, minkä lisäksi osaan espanjan perusteet.\n\nUskon, että vahva palveluasenteeni, hyvät IT-taitoni sekä kykyni kohdata eri kulttuuritaustoista tulevia ihmisiä tekisivät minusta erinomaisen lisän tiimiinne. Toivon mahdollisuutta esittäytyä haastattelussa henkilökohtaisesti.\n\nYstävällisin terveisin,\nElena Virtanen\nPuh. 050 987 6543\nelena.virtanen@email.fi"
  },
  {
    id: "ke-w-3",
    subtest: "writing",
    taskType: "message",
    title: "Reklamaatio huonekaluliikkeelle: Viallinen tuote ja viivästynyt toimitus",
    prompt: "Olet tilannut verkkokaupasta uuden ruokapöydän ja neljä tuolia. Toimitus saapui kaksi viikkoa myöhässä, ja avattuasi pakkauksen huomasit, että pöydän kannessa on syvä naarmu ja yksi tuolin jalka puuttuu. Kirjoita reklamaatiosähköposti asiakaspalveluun.\n\nKerro viestissä:\n- Tilausnumero, tilauspäivä ja mitä tuotteita tilaus koski\n- Toimituksen myöhästyminen ja havaitut viat\n- Mitä vaadit liikkeeltä (vaihto uuteen virheettömään tuotteeseen tai hinnanalennus/kaupan purku)\n- Liitteet (kerro laittaneesi kuvat vaurioista mukaan) ja vastausaika.",
    minWords: 60,
    modelResponse: "Hei Asiakaspalvelu,\n\nKirjoitan reklamoidakseni tilauksestani numero #FI-88492, jonka tein verkkokaupassanne 15. syyskuuta. Tilaus koski Tammi-ruokapöytää ja neljää valkoista tuolia.\n\nEnsinnäkin toimitus myöhästyi luvatusta toimitusajasta lähes kaksi viikkoa ilman ennakkoilmoitusta. Toiseksi, purettuani pakkauksen eilen totesin, että pöytälevyn pinnassa on näkyvä, noin 15 senttimetrin pituinen syvä naarmu. Lisäksi yhden tuolin puinen jalka puuttui kokonaan paketista.\n\nOlen liittänyt viestiin valokuvat vaurioituneesta pöytälevystä ja pakkauksen koodista. Vaadin, että toimitatte minulle pikaisesti uuden, virheettömän pöytälevyn ja puuttuvan jalan kuluitta kotiinkuljetettuna ensi viikon loppuun mennessä. Vaihtoehtoisesti vaadin kaupan purkamista ja rahojen palautusta.\n\nOdotan yhteydenottoanne mahdollisimman pian.\n\nTerveisin,\nMarcus Niemi\nPuh. 045 112 2334"
  },
  {
    id: "ke-w-4",
    subtest: "writing",
    taskType: "message",
    title: "Yhteydenotto päiväkodin johtajalle: Huoli lapsen viihtymisestä",
    prompt: "Lapsesi on aloittanut kuukausi sitten uudessa kunnallisessa päiväkodissa. Hän on ollut viime viikkoina itkuinen kotiin tullessaan ja kertonut, että isommat lapset kiusaavat häntä ulkoleikeissä. Kirjoita asiallinen viesti päiväkodin johtajalle ja ryhmän varhaiskasvatuksen opettajalle.\n\nKerro viestissä:\n- Lapsesi nimi ja ryhmä\n- Mitä olet havainnut lapsesi käytöksessä kotona\n- Mitä lapsi on kertonut päiväkodin tilanteista\n- Ehdota tapaamista tai keskusteluaikaa tilanteen ratkaisemiseksi yhdessä.",
    minWords: 60,
    modelResponse: "Hei Päiväkodin johtaja ja Oravat-ryhmän opettajat,\n\nKirjoitan teille huolestuneena tyttäreni Sofian (4 v) tilanteesta. Sofia aloitti ryhmässänne kuukausi sitten.\n\nViimeisten parin viikon aikana Sofia on muuttunut kotona hyvin araksi ja itkuiseksi aamuisin päiväkotiin lähdettäessä. Hän on kertonut useampana iltana, että häntä on tönitty pihaleikeissä ja että muutama vanhempi lapsi on sanonut, ettei hän saa tulla leikkimökkiin mukaan.\n\nHaluaisin kuulla teidän havaintonne Sofian arjesta päiväkodissa. Toivoisin, että voisimme sopia lyhyen keskusteluajan tälle viikolle esimerkiksi iltapäivällä haun yhteydessä, jotta voimme miettiä yhdessä keinoja, joilla tuemme Sofian turvallisuudentunnetta ja ryhmäytymistä.\n\nYstävällisin terveisin,\nAnna Korhonen (Sofian äiti)\nPuh. 040 776 5432"
  },
  {
    id: "ke-w-5",
    subtest: "writing",
    taskType: "message",
    title: "Viesti työyhteisölle: Uuden projektityökalun käyttöönotto",
    prompt: "Toimit tiimisi projektivastaavana. Yrityksessänne otetaan käyttöön uusi digitaalinen projektinhallintatyökalu (Asana/Trello) kahden viikon kuluttua. Kirjoita tiedottava ja kannustava sähköposti tiimisi jäsenille.\n\nKerro viestissä:\n- Mikä työkalu otetaan käyttöön ja miksi vanhasta järjestelmästä luovutaan\n- Milloin siirtymä tapahtuu\n- Milloin järjestetään yhteinen koulutustilaisuus ja miten siihen voi valmistautua\n- Kehen voi ottaa yhteyttä, jos herää kysymyksiä.",
    minWords: 60,
    modelResponse: "Hei tiimiläiset,\n\nKuten osastokokouksessa alustavasti keskustelimme, siirrymme kahden viikon kuluttua eli maanantaina 4. marraskuuta käyttämään uutta Asana-projektinhallintatyökalua. Vanha sähköpostipohjainen seurantataulukkomme poistuu käytöstä, sillä uusi työkalu tekee tehtävien jaosta, aikataulutuksesta ja viestinnästä huomattavasti sujuvampaa.\n\nJärjestämme kaikille yhteisen tunnin mittaisen verkkokoulutuksen ensi viikon torstaina klo 10:00 Teamsissa. Lähetän kutsulinkin ja tunnukset järjestelmään myöhemmin tänään. Toivon, että jokainen kirjautuu ohjelmaan kerran ennen koulutusta kokeillakseen pääsyä.\n\nMikäli teillä on kysyttävää tai huolia siirtymään liittyen, tulkaa rohkeasti juttelemaan tai laittakaa minulle viestiä.\n\nTsemppiä uuden työkalun opetteluun!\n\nYstävällisin terveisin,\nKari Laine\nProjektipäällikkö"
  },
  {
    id: "ke-w-6",
    subtest: "writing",
    taskType: "message",
    title: "Ilmoitus taloyhtiön isännöitsijälle: Pysäköintipaikan luvaton käyttö",
    prompt: "Olet vuokrannut taloyhtiöltäsi maksullisen lämpötolpallisen autopaikkapaikan. Viimeisen kahden viikon aikana paikallasi on usein ollut pysäköitynä vieras auto, etkä ole mahtunut omaan ruutuusi työpäivän jälkeen. Kirjoita isännöitsijälle ilmoitus asiasta.\n\nKerro viestissä:\n- Oma nimesi, osoitteesi ja autopaikkasi numero\n- Vieras auton merkki, väri ja rekisterinumero sekä ajankohdat, jolloin se on ollut paikallasi\n- Miten asia on haitannut arkeasi\n- Pyydä isännöitsijää tai pysäköinninvalvontaa puuttumaan tilanteeseen.",
    minWords: 50,
    modelResponse: "Hei Isännöitsijä,\n\nOlen Marko Virtanen asunnosta B 14. Olen maksanut kuukausittaista vuokraa tolpallisesta autopaikasta numero 8 jo kahden vuoden ajan.\n\nValitettavasti viimeisen kahden viikon aikana kyseisellä paikallani on seissyt toistuvasti harmaa Volkswagen Golf (rekisteritunnus XYZ-789). Tämän vuoksi en ole päässyt omalle paikalleni iltaisin töistä tullessani, vaan olen joutunut etsimään maksullista paikkaa kaukaa kadunvarresta ja kantamaan ruokakasseja pitkän matkan sateessa.\n\nOlen jättänyt auton tuulilasiin huomautuslapun, mutta siitä ei ollut apua. Pyydän teitä selvittämään, kenen asukkaan vieraasta on kyse, tai tilaamaan paikalle kunnallisen pysäköinninvalvonnan sakottamaan luvattomasta pysäköinnistä.\n\nYstävällisin terveisin,\nMarko Virtanen"
  },
  {
    id: "ke-w-7",
    subtest: "writing",
    taskType: "message",
    title: "Hakemus opintovapaasta työnantajalle",
    prompt: "Haluat hakea työnantajaltasi opintovapaata kuuden kuukauden ajaksi suorittaaksesi ammatillisia lisäopintoja yliopistossa tai ammattikorkeakoulussa. Kirjoita virallinen opintovapaahakemus esihenkilöllesi.\n\nKerro hakemuksessa:\n- Mitä opintoja aiot suorittaa ja missä oppilaitoksessa\n- Haettu opintovapaan tarkka ajankohta (alkamis- ja päättymispäivä)\n- Miten opinnot tukevat nykyistä tai tulevaa työtäsi yrityksessä\n- Miten työtehtäviesi siirto tai sijaisuus voitaisiin järjestää poissaolosi ajaksi.",
    minWords: 70,
    modelResponse: "Arvoisa osastopäällikkö Pekka Saari,\n\nHaen opintovapaalain mukaista opintovapaata ajalle 1. tammikuuta – 30. kesäkuuta 2027. Olen tullut valituksi Metropolia Ammattikorkeakoulun 'Digitaalinen data-analytiikka ja liiketoiminta' -erikoistumiskoulutukseen.\n\nKoulutus syventää osaamistani SQL-tietokannoista ja raportointityökaluista, mikä hyödyttää suoraan osastomme tulevia digitalisaatiohankkeita ja tehokkuutta. Uskon, että palatessani pystyn tuomaan tiimiimme arvokasta uutta osaamista.\n\nOlen suunnitellut siirtäväni päävastuut käynnissä olevista asiakasprojekteistani kollegalleni Hannalle joulukuun aikana ennen vapaani alkua, ja laadin perusteelliset ohjeet rutiinitehtävien hoitamiseksi. Olen myös valmis perehdyttämään mahdollisen määräaikaisen sijaisen hyvissä ajoin.\n\nToivon myönteistä päätöstä hakemukseeni.\n\nYstävällisin terveisin,\nSami Heikkinen\nLiiketoiminta-analyytikko"
  },
  {
    id: "ke-w-8",
    subtest: "writing",
    taskType: "message",
    title: "Viesti opiskeluryhmälle: Esityksen aikatauluttaminen ja vastuunjako",
    prompt: "Opiskelet ammattikorkeakoulussa tai kansalaisopistossa, ja ryhmällänne on tulossa yhteinen 20 minuutin esitys ensi viikolla. Kirjoita ryhmäsi WhatsApp- tai Teams-kanavalle viesti valmistautumisesta.\n\nKerro viestissä:\n- Ehdota yhteistä tapaamista verkossa diaesityksen kokoamiseksi\n- Ehdota miten aiheet (johdanto, teoria, tutkimustulokset, yhteenveto) jaetaan ryhmäläisten kesken\n- Aseta aikaraja, mihin mennessä jokaisen osuuden diojen tulee olla valmiina jaettuna tiedostona.",
    minWords: 50,
    modelResponse: "Moi kaikille!\n\nMeidän loppuesityksemme on jo ensi viikon torstaina, joten nyt olisi korkea aika kasata diat yhteen ja harjoitella esiintymistä. Ehdotan, että pidämme tunnin mittaisen Teams-palaverin sunnuntaina klo 18:00.\n\nMiltä kuulostaisi seuraava vastuunjako: minä voin hoitaa johdannon ja taustan, Ville voisi koota teoriadiat, ja Maria sekä Laura ottaisivat vastuun tutkimustuloksista ja yhteenvedosta? Olisi loistavaa, jos jokainen kirjoittaisi omat diansa valmiiksi meidän jaettuun kansioomme lauantai-iltaan klo 20 mennessä, jotta ehdimme käydä kokonaisuuden läpi ennen sunnuntain palaveria.\n\nLaittakaa peukkua jos aika ja jako sopivat teille!\n\nTerveisin, Tuomas"
  },
  {
    id: "ke-w-9",
    subtest: "writing",
    taskType: "message",
    title: "Palaute kaupungin joukkoliikenneyhtiölle (HSL/Nysse): Bussivuorojen harvennus",
    prompt: "Kaupungin joukkoliikenneyhtiö on ilmoittanut lakkauttavansa aamuisin kulkevan suoran bussilinjasi keskustaan ja harventavansa muita vuoroja. Kirjoita asiallinen mutta päättäväinen palautekirje joukkoliikennelautakunnalle.\n\nKerro viestissä:\n- Millä asuinalueella asut ja mitä linjaa muutos koskee\n- Miten bussivuoron poistuminen hankaloittaa alueen asukkaiden, koululaisten ja työssäkäyvien arkea\n- Miten tämä sotii kaupungin tavoitteita vastaan vähentää yksityisautoilua ja ilmastopäästöjä\n- Esitä toivomus tai kompromissiratkaisu aikataulujen korjaamiseksi.",
    minWords: 60,
    modelResponse: "Arvoisa joukkoliikennesuunnittelun lautakunta,\n\nKirjoitan antaakseni palautetta päätöksestä lakkauttaa suora bussilinja 42 Kuokkalan ja keskustan väliltä aamuliikenteestä. Asun perheeni kanssa kyseisellä alueella, josta suuri määrä lapsiperheitä ja työssäkäyviä liikkuu päivittäin keskustaan ja oppilaitoksiin.\n\nSuoran linjan poistaminen pakottaa meidät tekemään kaksi hankalaa vaihtoa ja pidentää yhdensuuntaista työmatkaa lähes puoli tuntia. Tämä luo kohtuutonta arjen stressiä erityisesti koululaisten aamuihin. Lisäksi muutos pakottaa monet asukkaat siirtymään oman henkilöauton käyttöön, mikä on täysin ristiriidassa kaupungin ilmastotavoitteiden ja joukkoliikenteen suosion lisäämisen kanssa.\n\nVetoan lautakuntaan, että säilyttäisitte edes aamun ruuhkatuntien (klo 07–09) suorat vuorot. Toivon asialle pikaista uudelleenarviointia.\n\nYstävällisin terveisin,\nJohanna Koski"
  },
  {
    id: "ke-w-10",
    subtest: "writing",
    taskType: "message",
    title: "Vastaus naapurin valitukseen: Koiran haukkuminen päivällä",
    prompt: "Olet saanut naapuriltasi kirjeen, jossa hän valittaa koirasi haukkuvan yksin ollessaan työpäivän aikana. Kirjoita ystävällinen ja ratkaisukeskeinen vastauskirje naapurillesi.\n\nKerro viestissä:\n- Pahoittele aiheutunutta häiriötä ja kiitä siitä, että hän ilmoitti asiasta suoraan\n- Selitä tilanne (koira on nuori tai toipumassa uudesta ympäristöstä)\n- Kerro mitä konkreettisia toimenpiteitä aiot heti tehdä ongelman korjaamiseksi (esim. kouluttaja, aktivointilelut, koirahoitola)\n- Anna yhteystietosi ja pyydä ilmoittamaan, jos tilanne ei heti rauhoitu.",
    minWords: 60,
    modelResponse: "Hei naapuri,\n\nKiitos paljon kirjeestäsi ja siitä, että otit asian suoraan ja ystävällisesti puheeksi. Olen todella pahoillani siitä häiriöstä, jota koirani haukkuminen on aiheuttanut teille päiväsaikaan.\n\nKyseessä on hiljattain luokseni muuttanut nuori rescuekoira, jolle yksin jääminen uuteen asuntoon on selvästi aiheuttanut eroahdistusta työpäivieni aikana. En tietenkään halua pilata kenenkään kotirauhaa.\n\nOlen jo tänään varannut ajan ammattitaitoiselle eläinkouluttajalle tilanteen kartoittamiseksi. Lisäksi olen ostanut koiralle virikkeitä ja aktivointileluja, ja järjestän sille koirahoitajan seuraa ensi viikosta alkaen päiviksi. Toivon, että nämä toimet auttavat nopeasti.\n\nVoit laittaa minulle suoraan viestiä numeroon 040 333 4455, mikäli ääniä kuuluu vielä jatkossa.\n\nYstävällisin terveisin,\nVille Rantala (asunto A 7)"
  },
  {
    id: "ke-w-11",
    subtest: "writing",
    taskType: "message",
    title: "Sähköposti pankin asiakaspalveluun: Asuntolainan lyhennysvapaan hakeminen",
    prompt: "Perheenne taloudellinen tilanne on muuttunut tilapäisesti toisen vanhemman jäätyä vanhempainvapaalle tai lomautetuksi. Kirjoita virallinen viesti pankin lainaneuvojalle.\n\nKerro viestissä:\n- Asuntolainan tilinumero tai viitetiedot\n- Syy hakemukselle ja perheen tilapäinen tulojen lasku\n- Kuinka moneksi kuukaudeksi haet lyhennysvapaata (esim. 6 kuukautta) ja maksatko korkoja tänä aikana normaalisti\n- Pyydä vahvistusta ja tietoa mahdollisista palvelumaksuista.",
    minWords: 60,
    modelResponse: "Arvoisa lainaneuvoja,\n\nOtan yhteyttä asuntolainamme (sopimusnumero #LA-90214-FI) hoitamiseen liittyen. Haluaisimme hakea lainaamme kuuden kuukauden lyhennysvapaata jaksoa ajalle 1. joulukuuta 2026 – 31. toukokuuta 2027.\n\nHakemuksen syynä on perheemme tilapäinen tulojen pieneneminen puolisoni siirtyessä vanhempainvapaalle hoitamaan vastasyntynyttä lastamme. Taloutemme tasapainottamiseksi lyhennysvapaa olisi meille suureksi avuksi. Sitoudumme luonnollisesti maksamaan lainan korot ja pankin marginaalin normaalisti kuukausittain eräpäivänä.\n\nPyydän teitä ystävällisesti vahvistamaan, onnistuuko vapaan myöntäminen sopimusehtojemme puitteissa ja veloitetaanko muutoksesta hinnaston mukainen muutosmaksu. Olemme tarvittaessa valmiita toimittamaan tulotositteet verkkopankin kautta.\n\nYstävällisin terveisin,\nMikko ja Laura Salo\nPuh. 050 654 3210"
  },
  {
    id: "ke-w-12",
    subtest: "writing",
    taskType: "message",
    title: "Viesti hotellin johdolle: Unohtuneen tavaran tiedustelu",
    prompt: "Olet yöpynyt viikonloppuna hotellissa toisessa kaupungissa ja kotiin palattuasi huomaat, että tärkeä työläppärisi laturi ja silmälasikotelosi unohtuivat huoneeseen. Kirjoita sähköposti hotellin vastaanottoon.\n\nKerro viestissä:\n- Nimesi, huonenumero ja vierailusi tarkat päivämäärät\n- Mitä esineitä unohtui ja missä kohdassa huonetta ne todennäköisesti olivat\n- Pyydä heitä tarkistamaan löytötavarat ja postittamaan ne osoitteeseesi\n- Lupaa maksaa postituskulut ja anna puhelinnumerosi.",
    minWords: 50,
    modelResponse: "Hei Hotelli Scandic Jyväskylä vastaanotto,\n\nYövyin hotellissanne huoneessa 412 menneenä viikonloppuna 12.–14. lokakuuta nimellä David Miller. Huomasin harmikseni kotiin palattuani, että kaksi tärkeää tavaraani jäi huoneeseen.\n\nKyseessä on musta Lenovon kannettavan tietokoneen laturi, joka jäi todennäköisesti työpöydän viereen pistorasiaan, sekä ruskea nahkainen silmälasikotelo, joka saattaa olla sängyn viereisellä yöpöydällä.\n\nVoisitteko ystävällisesti tarkistaa huoneen siivouksen löytötavaroista, ovatko kyseiset esineet löytyneet? Mikäli ne ovat tallessa, toivoisin että voisitte postittaa ne kotiosoitteeseeni (Kirkkokatu 5 A 3, 00100 Helsinki). Maksan luonnollisesti kaikki aiheutuvat postitus- ja käsittelykulut mielelläni.\n\nKiitos paljon avustanne!\n\nYstävällisin terveisin,\nDavid Miller\nPuh. 040 889 9776"
  },
  {
    id: "ke-w-13",
    subtest: "writing",
    taskType: "message",
    title: "Vahingonkorvausvaatimus lentoyhtiölle: Rikkoutunut matkalaukku",
    prompt: "Lentosi jälkeen huomasit matkatavarahihnalla, että uusi matkalaukkusi oli haljennut ja sen pyörä oli murtunut irti kuljetuksessa. Kirjoita virallinen korvaushakemus lentoyhtiön matkatavarapalveluun.\n\nKerro viestissä:\n- Lentonumero, lentopäivä ja matkatavaran PIR-vahinkoraportin numero, jonka teit lentokentällä\n- Laukun arvo, ostopäivä ja vahingon laatu\n- Vaadi laukun korvaamista tai uuden vastaavan hankintakulujen maksamista\n- Mainitse liitteenä olevat kuitit ja valokuvat vauriosta.",
    minWords: 60,
    modelResponse: "Arvoisa Finnairin asiakaspalvelu,\n\nKirjoitan hakeakseni korvausta rikkoutuneesta matkalaukustani lennolla AY 142 Tukholmasta Helsinkiin sunnuntaina 6. lokakuuta. Tein vahingosta heti lentoasemalla virallisen vahinkoilmoituksen (raportin viite PIR HELAY55231).\n\nKyseessä oli vain kaksi kuukautta vanha Samsonite-kovalaukku, jonka arvo uutena oli 189 euroa. Laukun kylki on haljennut koko matkalta ja toinen takapyöristä on repeytynyt kokonaan irti, joten laukku on täysin korjauskelvoton.\n\nOlen liittänyt tähän viestiin ostokuitin sekä valokuvat rikkoutuneesta laukusta ja matkatavaralipukkeesta. Vaadin lentoyhtiötä korvaamaan laukun arvon täysimääräisenä tililleni FI21 1234 5678 9101 11.\n\nOdotan vahvistustanne ja korvauksen käsittelyä kahden viikon kuluessa.\n\nYstävällisin terveisin,\nSatu Hakala"
  },
  {
    id: "ke-w-14",
    subtest: "writing",
    taskType: "message",
    title: "Tiedote naapureille: Asuntoremontin meluhaitat",
    prompt: "Olet aloittamassa asunnossasi kahden viikon mittaisen keittiö- ja lattiaremontin, josta aiheutuu äänekästä poraamista ja purkutöitä arkipäivisin. Kirjoita ystävällinen ja huomaavainen tiedotelappu taloyhtiön ilmoitustaululle ja ala-aulaan.\n\nKerro viestissä:\n- Kuka olet ja missä asunnossa remontti tehdään\n- Remontin tarkka kesto ja minä kellonaikoina äänekkäimpiä töitä tehdään (esim. arkisin klo 08–17)\n- Pahoittele aiheutuvaa meluhaittaa ja lupaa, että iltaisin ja viikonloppuisin on täysi hiljaisuus\n- Anna nimesi ja puhelinnumerosi mahdollisia yhteydenottoja varten.",
    minWords: 50,
    modelResponse: "Hyvät naapurit!\n\nAsunnossani B 22 alkaa kattava keittiö- ja pintaremontti ensi maanantaina 21. lokakuuta. Remontin arvioitu kesto on noin kaksi viikkoa.\n\nRemontin aikana joudumme valitettavasti tekemään äänekkäitä purku- ja poraustöitä. Olemme sopineet urakoitsijan kanssa, että meluisat työt rajoittuvat ehdottomasti arkipäiviin kello 08:30–17:00 välille. Iltaisin kello 17 jälkeen sekä koko viikonlopun ajan talossa vallitsee normaali rauha.\n\nPahoittelen vilpittömästi remontista mahdollisesti koituvaa äänihaittaa ja pölyä rappukäytävässä, jota siivoamme päivittäin. Mikäli teillä on kysyttävää tai jokin erityinen tarve huomioida (kuten pienen lapsen päiväunet tiettyyn aikaan), soittakaa tai laittakaa rohkeasti viestiä!\n\nYstävällisin terveisin,\nTommi Laukkanen (as. B 22)\nPuh. 040 554 1122"
  },
  {
    id: "ke-w-15",
    subtest: "writing",
    taskType: "message",
    title: "Yhteydenotto Kelaan: Hakemuksen käsittelyajan viivästyminen",
    prompt: "Olet jättänyt opintotukihakemuksen tai vanhempainpäivärahahakemuksen Kelaan yli kaksi kuukautta sitten. Virallinen käsittelyaika-arvio oli neljä viikkoa, mutta et ole saanut päätöstä etkä lisäselvityspyyntöä. Kirjoita asiallinen tiedustelu Kelan asiointipalveluun.\n\nKerro viestissä:\n- Henkilötietosi, hakemuksen tyyppi ja jättöpäivämäärä\n- Käsittelyajan ylittyminen ja taloudellisen tilanteesi vaikeutuminen\n- Kysy puuttuuko hakemuksesta jokin liite tai milloin päätös annetaan\n- Pyydä asian kiirehtimistä.",
    minWords: 60,
    modelResponse: "Hei Kela,\n\nKirjoitan tiedustellakseni vanhempainpäivärahahakemukseni tilannetta (hakemusnumero #KL-667123, jätetty verkossa 8. elokuuta). Verkkosivujenne mukaan hakemuksen tavanomainen käsittelyaika on noin neljä viikkoa, mutta hakemukseni jättämisestä on kulunut jo yli kaksi kuukautta.\n\nOmaKela-palvelussa hakemuksen tilana lukee yhä 'vastaanotettu / odottaa käsittelyä', eikä minulle ole saapunut mitään lisäselvityspyyntöjä. Olen toimittanut kaikki vaaditut palkka- ja lääkärintodistukset jo hakemuksen yhteydessä.\n\nTilanne alkaa olla taloudellisesti hyvin tukala, sillä palkkani maksu on päättynyt enkä ole saanut lainkaan etuuksia suunnitellussa aikataulussa. Voisitteko ystävällisesti tarkistaa hakemukseni tilanteen ja ilmoittaa, tarvitaanko minulta lisätietoja sekä milloin saan virallisen päätöksen? Pyydän asian kiirehtimistä mahdollisuuksien mukaan.\n\nYstävällisin terveisin,\nLiisa Mattila\nHenkilötunnus: 120490-XXXX"
  },
  {
    id: "ke-w-16",
    subtest: "writing",
    taskType: "message",
    title: "Sähköposti koulun rehtorille: Ehdotus iltapäiväkerhon perustamisesta",
    prompt: "Lapsesi koulussa ei ole tällä hetkellä tarjolla ohjattua toimintaa 3.–4.-luokkalaisille koulupäivän päätyttyä, ja monet lapset joutuvat viettämään useita tunteja yksin kotona ruutujen ääressä. Kirjoita vanhempaintoimikunnan edustajana ehdotuskirje koulun rehtorille.\n\nKerro viestissä:\n- Ketä edustat ja mikä on koululaisten nykytilanne\n- Ehdotus harrastus- tai läksykerhosta yhteistyössä paikallisen nuorisoseuran tai urheiluseuran kanssa\n- Kerro tilojen hyödyntämisestä koulun päätyttyä\n- Pyydä tapaamista asian edistämiseksi.",
    minWords: 60,
    modelResponse: "Arvoisa rehtori Hannele Virta,\n\nLähestyn teitä koulumme vanhempainyhdistyksen puheenjohtajana tärkeän asian tiimoilta. Olemme saaneet useilta 3.–4.-luokkalaisten vanhemmilta huolestuneita yhteydenottoja siitä, että lakisääteisen aamu- ja iltapäivätoiminnan päätyttyä toisen luokan jälkeen lapset jäävät arkisin iltapäivisin useiksi tunneiksi yksin kotiin.\n\nHaluaisimme ehdottaa koululle matalan kynnyksen maksutonta läksy- ja liikuntakerhoa, joka kokoontuisi koulun tiloissa arkisin klo 13:30–16:00. Olemme jo alustavasti keskustelleet paikallisen urheiluseuran ja nuorisotoimen kanssa, jotka olisivat halukkaita tarjoamaan koulutettuja ohjaajia, mikäli koululta saadaan käyttöön liikuntasali ja luokkatila.\n\nToivoisimme mahdollisuutta tavata teidät lyhyessä palaverissa ensi viikolla asian tarkempaa suunnittelua varten.\n\nYstävällisin terveisin,\nAntti Järvinen\nVanhempainyhdistyksen puheenjohtaja"
  },
  {
    id: "ke-w-17",
    subtest: "writing",
    taskType: "message",
    title: "Viesti autonvuokrausfirmalle: Ylimääräisen maksun oikaisupyyntö",
    prompt: "Vuokrasit auton viikonlopuksi ja palautit sen sovitusti täyteen tankattuna ja siistinä avaintenpalautuslaatikkoon. Luottokorttisi laskussa näkyy kuitenkin 85 euron lisäveloitus 'puuttuvasta polttoaineesta'. Kirjoita oikaisupyyntö autonvuokrausyritykselle.\n\nKerro viestissä:\n- Vuokrasopimuksen numero ja auton rekisterinumero\n- Milloin ja missä palautit auton\n- Selitä, että tankkasit auton aivan aseman viereisellä huoltoasemalla ja liitä mukaan kuitti bensiiniostosta\n- Vaadi perusteettoman veloituksen välitöntä hyvitystä luottokortillesi.",
    minWords: 60,
    modelResponse: "Hei Avis Asiakaspalvelu,\n\nOlin vuokrannut teiltä henkilöauton (sopimusnumero #FI-RENT-99120, rekisteritunnus ABC-123) ajalle 4.–6. lokakuuta Helsingin rautatieaseman toimipisteestä. Huomasin luottokorttierittelystäni, että olette veloittaneet minulta 85 euron ylimääräisen maksun polttoaineesta.\n\nTämä veloitus on täysin aiheeton. Palautin auton sunnuntaina klo 18:00 aseman parkkihalliin tankki aivan täynnä. Tankkasin auton vain kaksi kilometriä ennen palautuspaikkaa Teboil Mannerheimintiellä klo 17:48. Olen liittänyt viestiin valokuvan kyseisestä tankkauskuitista sekä mittariston kuvasta palautushetkellä.\n\nPyydän teitä korjaamaan virheen ja palauttamaan aiheetta veloitetun 85 euroa takaisin luottokortilleni viipymättä. Odotan kirjallista vahvistustanne hyvityksestä.\n\nYstävällisin terveisin,\nChristian Berg"
  },
  {
    id: "ke-w-18",
    subtest: "writing",
    taskType: "message",
    title: "Työpaikkailmoitukseen vastaaminen: Lisäkysymykset ennen hakemusta",
    prompt: "Olet kiinnostunut haussa olevasta projektiasiantuntijan paikasta kansainvälisessä järjestössä, mutta haluat selvittää muutamia tärkeitä yksityiskohtia ennen hakemuksen lähettämistä. Kirjoita kohtelias sähköposti ilmoituksessa mainitulle yhteyshenkilölle.\n\nKerro viestissä:\n- Mihin tehtävään viittaat ja miksi tehtävä kiinnostaa sinua\n- Kysy etätyökäytännöistä ja mahdollisuudesta työskennellä osittain toiselta paikkakunnalta\n- Tiedustele toivottua työn aloitusajankohtaa\n- Kiitä etukäteen vastauksesta ja kerro jättäväsi virallisen hakemuksen vastausten perusteella.",
    minWords: 50,
    modelResponse: "Hei Marja Kivimäki,\n\nOlen kiinnostunut Suomen Luonnonsuojeluliiton avoinna olevasta projektiasiantuntijan tehtävästä, josta ilmoititte verkkosivuillanne. Tehtävänkuva ympäristökasvatuksen parissa vastaa erinomaisesti asiantuntemustani ja arvojani.\n\nHaluaisin tiedustella kahta tarkentavaa seikkaa ennen virallisen hakemukseni jättämistä. Ensinnäkin, millaiset ovat tehtävän etätyökäytännöt ja mahdollistaako toimenkuva osittaisen etätyöskentelyn Tampereelta käsin? Toiseksi, mikä on toivottu tehtävän aloitusajankohta, sillä minulla on nykyisessä työssäni kuukauden irtisanomisaika?\n\nKiitos paljon ajastanne ja vaivannäöstänne. Toimitan hakemukseni ja ansioluetteloni heti saatuani lisätietoja.\n\nYstävällisin terveisin,\nElina Hämäläinen"
  },
  {
    id: "ke-w-19",
    subtest: "writing",
    taskType: "message",
    title: "Viesti harrastusseuran hallitukselle: Treenivuoron vaihto",
    prompt: "Toimit aikuisten salibandy- tai joogaryhmän yhteyshenkilönä. Ryhmänne vakituinen vuoro on tällä hetkellä perjantai-iltana klo 21–22, mikä on monelle osallistujalle liian myöhäinen aika. Kirjoita anomus seuran vuorovastaavalle vuoron vaihtamisesta.\n\nKerro viestissä:\n- Mikä ryhmä on kyseessä ja mikä on nykyinen harjoitusaikanne\n- Miksi myöhäinen aika on ongelmallinen (osallistujamäärän lasku, julkisen liikenteen loppuminen)\n- Mitä aikoja tai viikonpäiviä toivoisitte tilalle (esim. tiistai tai torstai klo 18–20)\n- Kiitä yhteistyöstä ja pyydä vastausta ennen seuraavaa kautta.",
    minWords: 50,
    modelResponse: "Hei Seuran tilavastaava,\n\nKirjoitan aikuisten harrastejoogaryhmän puolesta tulevan talvikauden harjoitusvuoroista. Nykyinen salivuoromme koulun liikuntasalissa on ollut perjantaisin kello 21:00–22:00.\n\nTämä myöhäinen ajankohta on osoittautunut monelle osallistujalle erittäin hankalaksi, sillä julkinen liikenne harvenee illalla ja monilla on aikaisia herätyksiä lauantaisin. Vuoron myöhäisyyden vuoksi osallistujamäärämme on valitettavasti pudonnut puoleen.\n\nHaluaisimme tiedustella, olisiko ensi kuussa alkavalle jaksolle mahdollista saada aikaisempaa vuoroa joko tiistai- tai torstai-illalta kello 18:00 ja 20:00 väliltä mistä tahansa seuran käytössä olevasta salista. Tämä pelastaisi ryhmämme jatkuvuuden.\n\nKiitos paljon joustavuudestanne ja avustanne!\n\nYstävällisin terveisin,\nRiikka Kallio"
  },
  {
    id: "ke-w-20",
    subtest: "writing",
    taskType: "message",
    title: "Kirjallinen irtisanoutuminen vuokra-asunnosta",
    prompt: "Olet muuttamassa työn perässä toiselle paikkakunnalle ja sinun tulee irtisanoa nykyinen vuokra-asuntosi kirjallisesti asuinhuoneiston vuokralain mukaisesti. Kirjoita virallinen irtisanomisilmoitus vuokranantajallesi.\n\nKerro viestissä:\n- Vuokrattavan asunnon osoite ja vuokrasopimuksen osapuolet\n- Ilmoita irtisanomisesta ja laske laillinen päättymispäivä (irtisanomisaika on yksi kalenterikuukausi sen kuukauden lopusta lukien, jona ilmoitus tehtiin)\n- Ehdota lopputarkastuksen ajankohtaa ja avainten luovutusta\n- Anna uusi osoitteesi ja tilinumerosi vuokravakuuden palauttamista varten.",
    minWords: 60,
    modelResponse: "Arvoisa vuokranantaja Matti Meikäläinen,\n\nIlmoitan täten irtisanovani asuinhuoneiston vuokrasopimuksen koskien asuntoa osoitteessa Rauhankatu 8 B 15, 33100 Tampere.\n\nAsuinhuoneiston vuokralain mukainen vuokralaisen irtisanomisaika on yksi kuukausi, joka lasketaan sen kalenterikuukauden viimeisestä päivästä, jonka aikana irtisanominen suoritetaan. Koska teen irtisanomisen tänään 15. lokakuuta, vuokrasopimus päättyy ja vuokranmaksuvelvollisuuteni lakkaa 30. marraskuuta 2026.\n\nAsunto tyhjennetään ja loppusiivotaan marraskuun loppuun mennessä. Ehdotan asunnon yhteistä lopputarkastusta ja avainten luovutusta sunnuntaille 30. marraskuuta kello 14:00.\n\nPyydän palauttamaan kahden kuukauden vuokravakuuden (1 600 €) tarkastuksen jälkeen tililleni FI44 1234 5678 9000 12. Uusi postiosoitteeni 1. joulukuuta alkaen on Aleksanterinkatu 10 A 4, 00170 Helsinki.\n\nKiitos sujuvasta vuokrasuhteesta ja yhteistyöstä!\n\nYstävällisin terveisin,\nKasperi Laitinen\nPuh. 040 123 7788"
  },

  // 10 Opinion Essays (societal, environmental, work-life, technology, cultural integration)
  {
    id: "ke-w-21",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Pitäisikö Suomessa siirtyä nelipäiväiseen työviikkoon?",
    prompt: "Monissa maissa ja kokeiluissa on tutkittu nelipäiväistä työviikkoa (esim. 32 työtuntia viikossa samalla palkalla). Kirjoita sanomalehden yleisönosastolle mielipidekirjoitus aiheesta.\n\nKäsittele tekstissäsi:\n- Oma selkeä kantasi asiaan perusteluineen\n- Miten lyhyempi työviikko vaikuttaisi työntekijöiden jaksamiseen, perhe-elämään ja terveyteen\n- Mitä haasteita muutos toisi työnantajille ja taloudelle (esim. palvelualat, sairaalat, kustannukset)\n- Johtopäätös: Voisiko malli toimia Suomessa tulevaisuudessa.",
    minWords: 100,
    modelResponse: "Nelipäiväinen työviikko on noussut viime aikoina kiivaan yhteiskunnallisen keskustelun kohteeksi, ja mielestäni Suomen tulisi suhtautua ajatukseen avoimesti ja rohkeasti. Työelämä on muuttunut viime vuosikymmeninä valtavasti henkisesti raskaammaksi, ja työuupumuksesta johtuvat sairauspoissaolot maksavat yhteiskunnalle vuosittain miljardeja euroja.\n\nKansainväliset kokeilut esimerkiksi Islannissa ja Isossa-Britanniassa ovat osoittaneet, että työtuntien vähentäminen 32 tuntiin viikossa ei suinkaan laskenut tuottavuutta, vaan päinvastoin nosti sitä. Kun työntekijät ovat paremmin levänneitä, he tekevät vähemmän virheitä, keskittyvät tehokkaammin ja ovat motivoituneempia. Lisäksi kolmipäiväinen viikonloppu antaisi vanhemmille enemmän arvokasta aikaa lasten kanssa, mikä tukisi perheiden hyvinvointia ja lisäisi tasa-arvoa kotitöiden jakamisessa.\n\nOn totta, että muutos ei ole mutkaton kaikilla aloilla. Vuorotyössä, kuten terveydenhuollossa, poliisissa ja ravintola-alalla, työtunteja ei voi noin vain leikata ilman lisähenkilöstön palkkaamista, mikä toisi työnantajille kovia kustannuspaineita. Siksi mallia ei voida ottaa käyttöön yhdessä yössä kaikkialla samalla tavalla.\n\nUskon kuitenkin vahvasti, että joustava ja asteittainen siirtymä lyhyempään työaikaan on tulevaisuutta. Työn tekemisen tavat kehittyvät tekoälyn ja automaation ansiosta kovaa vauhtia, ja tämän tuottavuushypyn hedelmien tulisi näkyä myös tavallisen ihmisen vapaa-ajassa ja elämänlaadussa."
  },
  {
    id: "ke-w-22",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Pitäisikö autoilu kieltää suurten kaupunkien ydinkeskustoissa?",
    prompt: "Monet Euroopan kaupungit ovat rajoittaneet tai kieltäneet yksityisautoilun kaupunkien ydinkeskustoissa luodakseen kävelykatuja ja vähentääkseen saasteita. Kirjoita mielipidekirjoitus aiheesta 'Pitäisikö kaupunkien keskustat pyhittää vain jalankulkijoille ja julkiselle liikenteelle?'\n\nKäsittele tekstissäsi:\n- Mitä hyötyjä autottomasta keskustasta olisi (turvallisuus, ilmanlaatu, viihtyisyys, kaupunkikulttuuri)\n- Mitä haittoja siitä voisi olla (yrittäjien pelko asiakkaiden menetyksestä, liikuntarajoitteisten pääsy, huoltoliikenne)\n- Oma näkemyksesi ja ehdotuksesi parhaasta ratkaisusta.",
    minWords: 100,
    modelResponse: "Keskustojen elinvoimaisuus ja tulevaisuus puhuttavat asukkaita ja päättäjiä. Osa vaatii autojen täyskieltoa ilmanlaadun ja viihtyisyyden parantamiseksi, kun taas toiset pelkäävät keskustan kauppojen kuolevan ilman autolla saapuvia asiakkaita. Mielestäni paras ratkaisu löytyy näiden kahden ääripään välistä.\n\nAutottomilla alueilla on kiistattomia hyötyjä. Kun katuja rauhoitetaan autoliikenteeltä, ilmanlaatu paranee huomattavasti ja melusaaste vähenee. Kävelykadut houkuttelevat ihmisiä viettämään aikaa, nauttimaan kahviloista ja tekemään ostoksia turvallisesti ilman pelkoa yliajetuksi tulemisesta. Monet eurooppalaiset esimerkit todistavat, että kävely-ympäristön parantaminen on todellisuudessa lisännyt kivijalkakauppojen myyntiä, ei vähentänyt sitä.\n\nToisaalta täydellinen kielto ilman poikkeuksia olisi kohtuuton. Keskustaan on taattava esteetön pääsy ikäihmisille, liikuntarajoitteisille sekä takseille ja tavarantoimituksille. Lisäksi kaupungin laidoilta tuleville autoilijoille täytyy rakentaa edullisia ja toimivia liityntäpysäköintilaitoksia raide- ja bussilinjojen varrelle, jotta julkiseen vaihtaminen on vaivatonta.\n\nKaupunkiympäristöä tulisi kehittää ihmisten, ei peltilehmien ehdoilla. Keskustojen hidaskatualueet, pyöräilyväylät ja kävelykeskustat luovat elävää ja modernia eurooppalaista kaupunkia, jossa kaikkien on hyvä elää."
  },
  {
    id: "ke-w-23",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Älypuhelimet ja sosiaalinen media – uhka vai mahdollisuus nuorille?",
    prompt: "Sosiaalisen median ja älypuhelinten jatkuva käyttö herättää huolta nuorten mielenterveyden, keskittymiskyvyn ja unen laadun vuoksi. Kirjoita pohtiva essee aiheesta.\n\nKäsittele tekstissäsi:\n- Miten sosiaalinen media vaikuttaa nuorten arkeen ja itsetuntoon\n- Mitä positiivisia puolia digitaalisella vuorovaikutuksella on (yhteydenpito, tiedonhaku, yhteisöt)\n- Pitäisikö vanhempien ja koulujen rajoittaa puhelinten käyttöä enemmän lailla tai säännöillä\n- Oma johtopäätöksesi tasapainoisesta digiarjesta.",
    minWords: 100,
    modelResponse: "Elämme aikakautta, jolloin älypuhelin on käytännössä kiinni jokaisen nuoren kädessä aamusta iltaan. Sosiaalinen media tarjoaa huikeita mahdollisuuksia globaaliin yhteydenpitoon, oppimiseen ja itseilmaisuun, mutta sen kääntöpuoli on herättänyt perusteltua huolta asiantuntijoiden ja vanhempien keskuudessa.\n\nSuurin huolenaihe liittyy nuorten mielenterveyteen ja keskittymiskykyyn. TikTokin ja Instagramin kaltaiset alustat on suunniteltu koukuttamaan käyttäjänsä dopamiinipiikeillä, mikä pirstaloi kyvyn lukea pitkiä tekstejä tai keskittyä koulutunneilla. Lisäksi algoritmien luomat epärealistiset kauneus- ja elämäntyyli-ihanteet ruokkivat riittämättömyyden tunnetta ja vertailua, mikä voi altistaa ahdistukselle ja unettomuudelle, kun ruutua selataan vielä sängyssä yömyöhään.\n\nSamaan aikaan emme voi sivuuttaa somen hyötyjä. Monelle syrjäänvetäytyvälle tai vähemmistöön kuuluvalle nuorelle verkko tarjoaa elintärkeän vertaistuen ja hengenheimolaisten yhteisön, jota omasta kotikylästä ei välttämättä löydy. Kännykkä on myös tehokas tiedonhankinnan väline, kunhan mediakriittisyyttä opetetaan ajoissa.\n\nMielestäni kouluihin tarvitaan selkeät ja yhtenäiset säännöt: puhelimet tulisi kerätä oppituntien ajaksi pois, jotta opiskelurauha palautuu. Kotona vanhempien vastuu on asettaa ruutuajalle selkeät rajat ja näyttää itse hyvää esimerkkiä. Teknologia on loistava rengin roolissa, mutta vaarallinen isäntänä."
  },
  {
    id: "ke-w-24",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Koulutus ja jatkuva oppiminen työelämän murroksessa",
    prompt: "Työelämä muuttuu nopeasti automaation, tekoälyn ja vihreän siirtymän myötä. Yksi tutkinto nuoruudessa ei enää riitä koko työuran ajaksi. Kirjoita mielipidekirjoitus jatkuvan oppimisen tärkeydestä.\n\nKäsittele tekstissäsi:\n- Miksi jatkuva oppiminen ja uudelleenkoulutus ovat välttämättömiä nykyään\n- Kuka kantaa päävastuun kouluttautumisesta: työntekijä, työnantaja vai valtio\n- Miten työn ohessa opiskelua voitaisiin tukea paremmin (esim. aikuiskoulutustuet, lyhytkurssit)\n- Oma näkemyksesi työelämän tulevaisuudesta.",
    minWords: 100,
    modelResponse: "Aika, jolloin ihminen valmistui parikymppisenä yhteen ammattiin ja teki sitä eläkeikään saakka samassa työpaikassa, on peruuttamattomasti ohi. Tekoäly, digitalisaatio ja vihreä siirtymä muuttavat työtehtäviä ennennäkemättömän nopeasti, mikä vaatii meiltä kaikilta kykyä ja halua oppia uutta läpi koko elämän.\n\nJatkuva oppiminen ei tarkoita sitä, että jokaisen pitäisi suorittaa viiden vuoden välein uusi yliopistotutkinto. Sen sijaan se tarkoittaa omien taitojen päivittämistä mikrotutkinnoilla, täydennyskoulutuksilla ja käytännön projekteilla. Työntekijä, joka ei kehitä osaamistaan, huomaa pian taitojensa vanhentuneen työmarkkinoilla.\n\nVastuu uudelleenkouluttautumisesta ei kuitenkaan voi langeta yksin yksilön harteille. Työnantajien on nähtävä koulutus investointina eikä kuluina: työntekijöille on annettava aikaa ja resursseja opiskella myös työajalla. Samalla valtion ja koulutusjärjestelmän tehtävänä on tarjota joustavia ilta- ja verkko-opintoja sekä riittävä toimeentuloturva opintojen ajaksi.\n\nSuomen menestys on aina rakentunut korkean osaamisen ja tasa-arvoisen koulutuksen varaan. Jos haluamme pärjätä kansainvälisessä kilpailussa, meidän on luotava yhteiskunta, jossa jokaisella on mahdollisuus kouluttautua uudelleen iästä ja taustasta riippumatta."
  },
  {
    id: "ke-w-25",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Ilmastonmuutos ja kuluttajan vastuu vs. yritysten vastuu",
    prompt: "Ilmastonmuutoksen hillitsemisestä puhuttaessa väitellään usein siitä, kuuluuko päävastuu yksittäisille kuluttajille (omilla valinnoillaan) vai suuryrityksille ja valtioille lainsäädännön kautta. Kirjoita kantaaottava teksti aiheesta.\n\nKäsittele tekstissäsi:\n- Mitä merkitystä yksilön kulutusvalinnoilla on (kierrätys, ruokavalio, matkustaminen)\n- Miksi pelkkä yksilön syyllistäminen ei riitä kriisin ratkaisemiseen\n- Millaista politiikkaa ja yritysvastuuta tarvitaan (verotus, päästökauppa, uusiutuva energia)\n- Oma yhteenvetosi siitä, miten todellisia muutoksia saadaan aikaan.",
    minWords: 100,
    modelResponse: "Ilmastokeskustelussa kuulee usein kahta vastakkaista näkemystä: toisten mielestä jokaisen on tingittävä arjen mukavuuksistaan maapallon pelastamiseksi, kun taas toiset pitävät kuluttajavalintoja pisarana meressä ja vaativat vastuuta teollisuudelta. Todellisuudessa tarvitsemme molempia, mutta pääpainon on oltava rakenteellisissa muutoksissa.\n\nYksilön teoilla on toki väliä. Kun vähennämme lihan kulutusta, lajittelemme jätteemme, vältämme turhaa lentämistä ja suosimme joukkoliikennettä, luomme markkinoille kysyntää kestäville tuotteille ja näytämme yhteiskunnallista esimerkkiä. Pienistä puroista voi kasvaa merkittävä virta.\n\nOn kuitenkin harhaanjohtavaa ja epäreilua sälyttää ilmastonmuutoksen pysäyttäminen tavallisen kuluttajan harteille. Valtaosa maailman päästöistä syntyy fossiilisesta energiantuotannosta, raskaasta teollisuudesta ja rahdista. Yksikään ihminen ei voi henkilökohtaisilla ostospäätöksillään sulkea kivihiilivoimaloita tai pakottaa lentoyhtiöitä käyttämään biopolttoaineita.\n\nRatkaisu vaatii tiukkaa valtiollista ja kansainvälistä sääntelyä: saastuttamisen on oltava taloudellisesti kannattamatonta ja puhtaan energian kehittämisen tuettua. Vasta kun lainsäädäntö tekee ekologisesta valinnasta kaikille helpoimman ja halvimman vaihtoehdon kaupan hyllyllä, saavutamme todellisia tuloksia."
  },
  {
    id: "ke-w-26",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Maahanmuuttajien kotoutuminen ja suomen kielen merkitys",
    prompt: "Suomeen muuttaa vuosittain kymmeniä tuhansia ihmisiä työn, perheen ja opiskelun perässä. Kirjoita mielipidekirjoitus aiheesta: 'Miten maahanmuuttajien kotoutumista ja työllistymistä voitaisiin edistää parhaiten?'\n\nKäsittele tekstissäsi:\n- Mikä rooli suomen kielen taidolla on arjessa ja työelämässä\n- Ovatko suomalaiset työnantajat liian vaativia täydellisen kielitaidon suhteen\n- Miten kotoutumiskoulutusta ja kielenopetusta tulisi kehittää käytännönläheisemmäksi\n- Miten tavalliset kansalaiset voivat auttaa uusia asukkaita kotiutumaan.",
    minWords: 100,
    modelResponse: "Onnistunut kotoutuminen on yksi Suomen tulevaisuuden tärkeimmistä kysymyksistä väestön ikääntyessä ja työvoimapulan vaivatessa useita aloja. Kotoutumisen ytimessä on aina kieli, mutta tapa, jolla suhtaudumme kielen oppimiseen ja vaatimuksiin, kaipaa pikaista uudistamista.\n\nSuomen kielen taito on avain itsenäiseen elämään, virastoasiointiin ja suomalaiseen kulttuuriin kiinnittymiseen. Ilman kieltä ihminen jää helposti oman kieliryhmänsä kuplaan ja syrjäytyy yhteiskunnallisesta osallistumisesta. Kielen opiskelun tulisi kuitenkin tapahtua nykyistä enemmän työpaikoilla ja aidoissa kohtaamisissa, ei pelkästään luokkahuoneessa kielioppisääntöjä päntäten.\n\nSuurin haaste on usein työnantajien asenteissa. Monet yritykset vaativat täydellistä sujuvaa suomea tehtäviin, joissa pärjäisi mainiosti hyvällä perustasolla tai englannilla. Kieltä oppii parhaiten juuri työtä tekemällä ja kahvipöydässä kollegoiden kanssa juttelemalla. Jos työnantajat eivät uskalla palkata henkilöä, jolla on vasta kehittyvä kielitaito, he sulkevat pois valtavan määrän osaavaa ja motivoitunutta työvoimaa.\n\nMeidän jokaisen suomalaisen tulisi myös katsoa peiliin: kun maahanmuuttaja yrittää puhua suomea, meidän ei pitäisi heti vaihtaa englantiin, vaan vastata kärsivällisesti selkosuomella. Vain avoimuudella ja yhteistyöllä rakennamme aidosti toimivan monikulttuurisen Suomen."
  },
  {
    id: "ke-w-27",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Julkisen terveydenhuollon tila ja hyvinvointialueet",
    prompt: "Hyvinvointialueiden aloitettua toimintansa Suomessa terveyskeskusten jonot, henkilöstöpula ja rahoituskriisi ovat herättäneet suurta huolta kansalaisissa. Kirjoita kantaaottava essee julkisen terveydenhuollon tulevaisuudesta.\n\nKäsittele tekstissäsi:\n- Miksi nopea hoitoonpääsy on perusoikeus jokaiselle varallisuudesta riippumatta\n- Miten terveydenhuollon ammattilaisten työoloja ja palkkausta tulisi parantaa\n- Miten digitaaliset lääkäripalvelut ja ennaltaehkäisy voivat auttaa ratkaisemaan ongelmaa\n- Oma näkemyksesi siitä, miten toimiva julkinen terveydenhuolto turvataan.",
    minWords: 100,
    modelResponse: "Suomalainen hyvinvointiyhteiskunta on perinteisesti nojannut ajatukseen siitä, että jokainen saa tarvitsemaansa korkeatasoista lääkärinhoitoa varallisuudesta ja asuinpaikasta riippumatta. Viime vuosina tämä peruspilari on kuitenkin alkanut rakoilla hälyttävällä tavalla terveyskeskusten jonoissa ja leikkaussalien suluissa.\n\nHoitojonojen venyminen kuukausien mittaisiksi on inhimillisesti kohtuutonta ja taloudellisesti järjetöntä. Kun perussairaudet jäävät ajoissa hoitamatta, ne pahenevat kalliiksi ja raskaiksi erikoissairaanhoidon tapauksiksi. Nopea pääsy perusterveydenhuoltoon säästäisi verovaroja ja vähentäisi sairauslomia.\n\nOngelman ytimessä on hoitohenkilökunnan uupumus ja huonot työolot. Sairaanhoitajat ja lääkärit pakenevat julkiselta puolelta yksityisille lääkäriasemille kohtuuttoman työkuorman ja heikon johtamisen vuoksi. Pelkkä rahan kaataminen hallintoon ei riitä; työolot on saatava kuntoon ja palkkausta on korjattava vastaamaan työn vaativuutta, jotta ammattilaiset saadaan pysymään julkisella puolella.\n\nDigitaaliset etävastaanotot voivat helpottaa rutiiniasioiden hoitoa, mutta ne eivät korvaa fyysistä lääkärikäyntiä vakavissa tilanteissa. Toimiva ja tasa-arvoinen julkinen terveydenhuolto on yhteiskuntamme kestävyyden kivijalka, josta emme saa tinkiä."
  },
  {
    id: "ke-w-28",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Kestokulutus ja pikamuodin ympäristöhaitat",
    prompt: "Pikamuotiteollisuus (fast fashion) tuottaa halpoja vaatteita valtavia määriä, mikä aiheuttaa valtavia päästöjä, vesistöjen saastumista ja jätevuoria. Kirjoita mielipidekirjoitus kestävämmästä kulutuskulttuurista.\n\nKäsittele tekstissäsi:\n- Miksi ihmiset ostavat niin paljon vaatteita, joita he tuskin käyttävät\n- Miten pikamuoti saastuttaa luontoa ja polkee työntekijöiden oikeuksia halpatyömaissa\n- Miten kirpputorit, kierrätys ja laadukkaiden tuotteiden korjaaminen voivat muuttaa tilannetta\n- Oma suosituksesi vastuullisempaan pukeutumiseen.",
    minWords: 100,
    modelResponse: "Pikamuoti on muuttanut tapamme suhtautua vaatteisiin: vaatteesta on tullut kertakäyttöhyödyke, jota ostetaan heräteostoksena muutamalla eurolla ja heitetään roskiin parin pesukerran jälkeen. Tämä kestämätön kulutushysteria maksaa luonnolle ja ihmisoikeuksille aivan liian kovan hinnan.\n\nTekstiiliteollisuus on yksi maailman saastuttavimmista aloista tuottaen enemmän hiilidioksidipäästöjä kuin kansainvälinen lento- ja laivaliikenne yhteensä. Yhden puuvillaisen t-paidan valmistukseen kuluu tuhansia litroja puhdasta makeaa vettä, ja halpatyömaiden tehtaissa työntekijät ahkeroivat vaarallisissa oloissa nälkäpalkalla ilman ammattiyhdistysoikeuksia.\n\nOnneksi asenteet ovat alkaneet muuttua erityisesti nuoremman sukupolven keskuudessa. Toisen käden vaatteiden ostaminen kirpputoreilta ja sovelluksista on noussut suosituksi trendiksi. Yhä useampi ymmärtää, että laatu korvaa määrän: on paljon järkevämpää ostaa yksi laadukas kotimainen tai eettinen villapaita, joka kestää kymmenen vuotta, kuin kymmenen keinokuituista paitaa, jotka nyppyyntyvät viikossa.\n\nVaatteiden korjaamisen ja huoltamisen taito tulisi palauttaa kunniaan. Pienillä teoilla – ostamalla vähemmän, korjaamalla ja kierrättämällä – voimme ottaa askeleen kohti kestävämpää ja fiksumpaa elämäntapaa."
  },
  {
    id: "ke-w-29",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Yksinäisyys yhteiskunnallisena kansansairautena",
    prompt: "Yksinäisyys on tutkimusten mukaan lisääntynyt Suomessa huolestuttavasti niin nuorten kuin ikäihmisten keskuudessa. Kirjoita pohtiva mielipidekirjoitus siitä, miten yhteisöllisyyttä voitaisiin vahvistaa.\n\nKäsittele tekstissäsi:\n- Mitä seurauksia pitkäaikaisella yksinäisyydellä on ihmisen fyysiselle ja psyykkiselle terveydelle\n- Miksi suomalaisessa yhteiskunnassa on toisinaan vaikea tutustua uusiin ihmisiin\n- Miten kaupunkisuunnittelu, harrastustoiminta ja naapuriapu voisivat vähentää yksinäisyyttä\n- Jokaisen ihmisen pienet arkiset teot toisten huomioimiseksi.",
    minWords: 100,
    modelResponse: "Suomea on useana vuonna peräkkäin äänestetty maailman onnellisimmaksi maaksi, mutta tämän tilaston varjossa piilee kipeä totuus: sadoille tuhansille suomalaisille arki on kylmää ja yksinäistä. Yksinäisyydestä onkin muodostunut yksi vakavimmista hiljaisista kansantaudeistamme.\n\nLääketieteelliset tutkimukset osoittavat, että krooninen yksinäisyys on terveydelle yhtä vaarallista kuin tupakointi tai ylipaino. Se nostaa sydän- ja verisuonitautien riskiä, heikentää vastustuskykyä ja altistaa masennukselle. Erityisen haavoittuvia ovat yksin asuvat vanhukset sekä nuoret, jotka kokevat jäävänsä kaveriporukoiden ulkopuolelle.\n\nSuomalainen kulttuuri arvostaa omaa rauhaa ja toisten tilan kunnioittamista, mutta tämä kääntyy usein etäisyydeksi ja puhumattomuudeksi. Uusiin ihmisiin tutustuminen ilman alkoholia tai selkeää harrastuskontekstia koetaan usein vaikeaksi. Tähän tarvitaan konkreettisia yhteisöllisiä ratkaisuja: asukastaloja, ilmaisia harrastuskerhoja, yhteisöpuutarhoja ja kaupunkitiloja, joissa ihmiset luontevasti kohtaavat.\n\nLoppujen lopuksi suurin muutos lähtee meistä itsestämme. Ystävällinen hymy rapussa, muutama sana kassajonossa vanhukselle tai naapurin kutsuminen kahvikupilliselle eivät maksa mitään, mutta ne voivat olla jollekulle päivän ainoa inhimillinen valonpilkahdus."
  },
  {
    id: "ke-w-30",
    subtest: "writing",
    taskType: "essay",
    title: "Mielipidekirjoitus: Tekoälyn hyödyt ja eettiset riskit tulevaisuudessa",
    prompt: "Generatiivinen tekoäly kehittyy valtavalla nopeudella ja muuttaa tapoja tehdä työtä, tuottaa taidetta ja opiskella. Kirjoita tasapainoinen mielipidekirjoitus tekoälyn tuomista mahdollisuuksista ja uhista.\n\nKäsittele tekstissäsi:\n- Miten tekoäly voi tehostaa rutiinitöitä, terveydenhuoltoa ja tieteellistä tutkimusta\n- Mitä eettisiä huolia ja vaaroja liittyy valeuutisiin, tekijänoikeuksiin ja työpaikkojen katoamiseen\n- Tarvitaanko kansainvälistä tiukkaa sääntelyä\n- Miten ihmisen oma ainutlaatuinen luovuus ja empatia säilyttävät arvonsa.",
    minWords: 100,
    modelResponse: "Tekoäly ei ole enää tieteiselokuvien kaukaista tulevaisuutta, vaan se on tullut pysyväksi osaksi jokapäiväistä elämäämme. Keskustelu tekoälyn ympärillä heilahtelee usein sokean teknologiaoptimismin ja maailmanlopun pelkojen välillä, vaikka todellisuus vaatii kriittistä ja tasapainoista tarkastelua.\n\nTekoäly tarjoaa kiistattomia hyötyjä. Lääketieteessä algoritmit kykenevät analysoimaan röntgenkuvia ja löytämään syöpäkasvaimia tarkemmin kuin ihmissilmä. Rutiininomaisissa toimistotehtävissä, tiedonhaussa ja koodauksessa tekoäly säästää satoja tunteja työaikaa, jolloin ihmiset voivat keskittyä monimutkaisempaan ongelmanratkaisuun ja luovaan työhön.\n\nSamalla teknologiaan liittyy valtavia eettisiä ja yhteiskunnallisia riskejä. Syväväärennökset (deepfakes) ja automatisoidut valeuutiset voivat vaarantaa demokraattiset vaalit ja heikentää luottamusta totuuteen. Lisäksi monet asiantuntijat pelkäävät perinteisten tietotyöammattien katoavan ilman, että uusia työpaikkoja syntyy tilalle riittävän nopeasti.\n\nTekoälyä ei voida pysäyttää, mutta sen kehitystä täytyy ohjata tiukalla lainsäädännöllä, kuten EU:n tekoälyasetuksella. Tärkeintä on muistaa, että mikään koodi ei pysty korvaamaan ihmisen aitoa empatiaa, moraalista harkintakykyä ja lämmintä vuorovaikutusta – niitä taitoja, joita maailma tarvitsee enemmän kuin koskaan."
  }
];

export const keskitasoListening = [
  {
    id: "ke-l-1",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hyvät matkustajat, InterCity-juna 45 Oulusta Helsinkiin on myöhässä noin 25 minuuttia ratatöiden vuoksi. Juna saapuu poikkeuksellisesti raiteelle neljä tavallisen raiteen kaksi sijasta. Pyydämme anteeksi viivästystä.",
    prompt: "Miksi juna on myöhässä ja mille raiteelle se saapuu?",
    options: [
      "A) Sähkövian vuoksi, raiteelle kaksi",
      "B) Ratatöiden vuoksi, raiteelle neljä",
      "C) Huonon sään takia, raiteelle kolme",
      "D) Veturi on rikki, raiteelle yksi"
    ],
    correctAnswer: "B) Ratatöiden vuoksi, raiteelle neljä",
    explanation: "Kuulutus ilmoittaa: 'noin 25 minuuttia ratatöiden vuoksi... saapuu poikkeuksellisesti raiteelle neljä'."
  },
  {
    id: "ke-l-2",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hei, täällä soittaa terveyskeskuksen sairaanhoitaja Mäkinen. Lääkäri on katsonut verikoetuloksenne, ja kaikki arvot ovat normaaleja. Teidän ei tarvitse tulla uudelle vastaanotolle, mutta muistakaa jatkaa verenpainelääkitystä entiseen tapaan. Hyvää päivänjatkoa!",
    prompt: "Mitä hoitaja kertoo laboratoriotuloksista ja jatkohoidosta?",
    options: [
      "A) Tulokset ovat huonoja ja potilaan täytyy tulla heti sairaalaan",
      "B) Arvot ovat normaaleja, vastaanottoa ei tarvita, mutta lääkitystä jatketaan",
      "C) Verikoe täytyy uusia huomenaamulla paastossa",
      "D) Verenpainelääkitys tulee lopettaa heti"
    ],
    correctAnswer: "B) Arvot ovat normaaleja, vastaanottoa ei tarvita, mutta lääkitystä jatketaan",
    explanation: "Hoitaja vahvistaa: 'kaikki arvot ovat normaaleja... ei tarvitse tulla uudelle vastaanotolle, mutta muistakaa jatkaa verenpainelääkitystä'."
  },
  {
    id: "ke-l-3",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Säätiedotus: Huomenna lounaasta alkaen lännestä saapuu voimakas matalapaine, joka tuo mukanaan runsaita vesisateita ja puuskittaista tuulta rannikolla jopa 20 metriä sekunnissa. Lämpötila pysyttelee 12 ja 15 asteen välillä.",
    prompt: "Millaista säätä rannikolle ennustetaan huomiseksi?",
    options: [
      "A) Helleaaltoa ja tyyntä auringonpaistetta",
      "B) Lumimyrskyä ja kovaa pakkasta",
      "C) Runsaita sateita ja puuskittaista kovaa tuulta",
      "D) Kuivaa pakkassäätä ja sumua"
    ],
    correctAnswer: "C) Runsaita sateita ja puuskittaista kovaa tuulta",
    explanation: "Tiedote kertoo matalapaineesta: 'runsaita vesisateita ja puuskittaista tuulta rannikolla jopa 20 metriä sekunnissa'."
  },
  {
    id: "ke-l-4",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hei Pekka, tässä on Leena naapurista asunnosta B 12. Huomasin äsken rappukäytävässä, että pyörävaraston ovi oli jäänyt auki ja siellä oli valot päällä. Laitoin oven lukkoon, mutta kannattaa ehkä tarkistaa omat pyörät varmuuden vuoksi.",
    prompt: "Minkä havainnon Leena teki taloyhtiön tiloissa?",
    options: [
      "A) Hissi oli rikki ja pysähtynyt kerrosten väliin",
      "B) Pyörävaraston ovi oli jäänyt auki ja valot olivat päällä",
      "C) Saunassa oli vesivuoto",
      "D) Joku oli varastanut hänen autonsa pihalta"
    ],
    correctAnswer: "B) Pyörävaraston ovi oli jäänyt auki ja valot olivat päällä",
    explanation: "Leena sanoo: 'pyörävaraston ovi oli jäänyt auki ja siellä oli valot päällä. Laitoin oven lukkoon'."
  },
  {
    id: "ke-l-5",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Tervetuloa Asiakaspalveluun. Palvelussamme on tällä hetkellä ruuhkaa. Olette jonossa sijalla seitsemän. Arvioitu jonotusaika on noin 12 minuuttia. Voitte myös jättää takaisinsoittopyynnön painamalla yksi.",
    prompt: "Mitä vaihtoehtoa jonottavalle asiakkaalle tarjotaan puhelimessa?",
    options: [
      "A) Tulla paikan päälle konttoriin heti",
      "B) Jättää takaisinsoittopyyntö painamalla numeronäppäintä yksi",
      "C) Sulkea puhelin ja soittaa vasta ensi viikolla",
      "D) Maksaa ylimääräinen pikamaksu jonon ohittamiseksi"
    ],
    correctAnswer: "B) Jättää takaisinsoittopyyntö painamalla numeronäppäintä yksi",
    explanation: "Nauhoite sanoo: 'Voitte myös jättää takaisinsoittopyynnön painamalla yksi'."
  },
  {
    id: "ke-l-6",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Radiohaastattelussa ekologi toteaa: Suomen metsien monimuotoisuuden säilyttämiseksi on äärimmäisen tärkeää jättää hakkuiden yhteydessä riittävästi lahopuuta ja säästöpuuryhmiä. Monet uhanalaiset kovakuoriaiset ja käävät ovat täysin riippuvaisia lahoavasta puuaineksesta.",
    prompt: "Mikä on haastatellun asiantuntijan mukaan tärkeää metsien monimuotoisuudelle?",
    options: [
      "A) Kaikkien vanhojen puiden kaataminen ja polttaminen",
      "B) Riittävän lahopuun ja säästöpuiden jättäminen metsiin hakkuissa",
      "C) Metsien muuttaminen kokonaan viljeltyiksi pelloiksi",
      "D) Kaikkien hyönteisten myrkyttäminen metsistä"
    ],
    correctAnswer: "B) Riittävän lahopuun ja säästöpuiden jättäminen metsiin hakkuissa",
    explanation: "Ekologi painottaa: 'on äärimmäisen tärkeää jättää hakkuiden yhteydessä riittävästi lahopuuta ja säästöpuuryhmiä'."
  },
  {
    id: "ke-l-7",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kauppakeskuksen kuulutus: Löytötavaroihin infopisteelle on toimitettu musta lompakko, joka löytyi toisen kerroksen kahvilasta. Lompakon omistaja voi noutaa sen henkilöllisyystodistusta vastaan infopisteeltä.",
    prompt: "Mistä kadonnut lompakko löytyi kuulutuksen mukaan?",
    options: [
      "A) Pysäköintihallista auton alta",
      "B) Toisen kerroksen kahvilasta",
      "C) Ulkoa bussipysäkiltä",
      "D) Naisten wc-tiloista"
    ],
    correctAnswer: "B) Toisen kerroksen kahvilasta",
    explanation: "Kuulutus: 'musta lompakko, joka löytyi toisen kerroksen kahvilasta'."
  },
  {
    id: "ke-l-8",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Autokorjaamolta soitetaan: Hei, olemme tutkineet autonne jarrut. Etujarrupalat ovat kuluneet lähes loppuun ja myös jarrulevyt vaativat vaihtoa. Osat ja työ maksavat yhteensä 340 euroa. Haluatteko, että teemme korjauksen tänään?",
    prompt: "Mitä vikaa autossa havaittiin ja paljonko korjaus maksaa?",
    options: [
      "A) Moottori on rikki ja korjaus maksaa 3 000 euroa",
      "B) Etujarrupalat ja -levyt ovat kuluneet, hinta 340 euroa",
      "C) Renkaat ovat tyhjät, työ on ilmainen",
      "D) Akku on loppu ja se maksaa 50 euroa"
    ],
    correctAnswer: "B) Etujarrupalat ja -levyt ovat kuluneet, hinta 340 euroa",
    explanation: "Mekaanikko: 'Etujarrupalat ovat kuluneet... ja myös jarrulevyt vaativat vaihtoa... yhteensä 340 euroa'."
  },
  {
    id: "ke-l-9",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Poliisitiedote: Liikkuva poliisi valvoo tehostetusti talvirenkaiden kuntoa ja ajonopeuksia liukkailla pääteillä koko loppuviikon. Muistutamme, että nastarenkaissa nastojen määrä ei saa poiketa merkittävästi renkaiden välillä.",
    prompt: "Mitä asiaa poliisi valvoo tehostetusti liikenteessä loppuviikolla?",
    options: [
      "A) Autojen musiikin äänenvoimakkuutta",
      "B) Talvirenkaiden kuntoa ja ajonopeuksia liukkailla teillä",
      "C) Pyöräilijöiden heijastimia kävelykaduilla",
      "D) Autojen katsastamattomuutta vain kesällä"
    ],
    correctAnswer: "B) Talvirenkaiden kuntoa ja ajonopeuksia liukkailla teillä",
    explanation: "Poliisi valvoo: 'tehostetusti talvirenkaiden kuntoa ja ajonopeuksia liukkailla pääteillä'."
  },
  {
    id: "ke-l-10",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Työpaikan palaverissa tiimivetäjä sanoo: Ensi vuoden budjettileikkausten vuoksi emme valitettavasti voi palkata uutta sijaista, mutta voimme tarjota kaikille halukkaille mahdollisuuden joustavaan työaikaan ja lisäkoulutukseen työnantajan kustannuksella.",
    prompt: "Mitä työnantaja tarjoaa henkilöstölle budjettirajoitusten vastineeksi?",
    options: [
      "A) Kaikkien palkkojen leikkaamista puoleen",
      "B) Mahdollisuutta joustavaan työaikaan ja työnantajan maksamaan lisäkoulutukseen",
      "C) Pakollista irtisanoutumista ennen uuttavuotta",
      "D) Työmatkojen kieltämistä kokonaan"
    ],
    correctAnswer: "B) Mahdollisuutta joustavaan työaikaan ja työnantajan maksamaan lisäkoulutukseen",
    explanation: "Tiimivetäjä lupaa: 'mahdollisuuden joustavaan työaikaan ja lisäkoulutukseen työnantajan kustannuksella'."
  },
  {
    id: "ke-l-11",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Hammaslääkäriaseman viesti: Muistutus varatusta ajasta. Teillä on hammastarkastus huomenna klo 10:15 lääkäri Laaksoselle. Mikäli ette pääse tulemaan, aika on peruttava viimeistään tänään klo 16:00 mennessä välttääksenne peruutusmaksun.",
    prompt: "Mihin mennessä varattu aika täytyy perua ilman peruutusmaksua?",
    options: [
      "A) Huomenna aamulla ennen yhdeksää",
      "B) Tänään kello 16:00 mennessä",
      "C) Vasta kaksi päivää vastaanoton jälkeen",
      "D) Aikaa ei voi perua lainkaan"
    ],
    correctAnswer: "B) Tänään kello 16:00 mennessä",
    explanation: "Viestissä todetaan: 'aika on peruttava viimeistään tänään klo 16:00 mennessä välttääksenne peruutusmaksun'."
  },
  {
    id: "ke-l-12",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Uutistoimittaja kertoo: Suomen Pankin tuoreen ennusteen mukaan inflaatio on hidastunut merkittävästi ja korkojen lasku tukee kotitalouksien ostovoimaa ensi vuonna. Asuntokaupan odotetaan vilkastuvan vähitellen kevään aikana.",
    prompt: "Mitä Suomen Pankki ennustaa asuntomarkkinoille ja koroille?",
    options: [
      "A) Korkojen rajua nousua ja asuntokaupan täyttä pysähtymistä",
      "B) Korkojen laskua ja asuntokaupan vähittäistä vilkastumista",
      "C) Kaikkien asuntolainojen anteeksiantamista",
      "D) Inflaation nousua historiallisen korkealle"
    ],
    correctAnswer: "B) Korkojen laskua ja asuntokaupan vähittäistä vilkastumista",
    explanation: "Uutisessa sanotaan: 'korkojen lasku tukee kotitalouksien ostovoimaa... Asuntokaupan odotetaan vilkastuvan vähitellen'."
  },
  {
    id: "ke-l-13",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Ravintolassa tarjoilija selittää: Päivän erikoisuutena meillä on tuoretta paistettua kuhaa kukkakaalipyreen ja voikastikkeen kera. Se on gluteeniton ja laktoositon annos. Keittiömestari suosittelee sen seuraksi kuivaa valkoviiniä.",
    prompt: "Mitkä erityisruokavaliot päivän kala-annos huomioi?",
    options: [
      "A) Se on vegaaninen ja soijaton",
      "B) Se on gluteeniton ja laktoositon",
      "C) Se sisältää runsaasti pähkinää ja vehnää",
      "D) Se sopii vain sokerittomaan dieettiin"
    ],
    correctAnswer: "B) Se on gluteeniton ja laktoositon",
    explanation: "Tarjoilija mainitsee: 'Se on gluteeniton ja laktoositon annos'."
  },
  {
    id: "ke-l-14",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Taloyhtiön tiedote kaiuttimesta: Huomio asukkaat. Kiinteistön ilmanvaihtokanavien nuohous ja mittaus suoritetaan huomenna klo 08–16. Huoneistoihin tullaan yleisavaimella, mikäli ette ole kotona. Lemmikkieläimet pyydetään sulkemaan yhteen huoneeseen.",
    prompt: "Mitä lemmikinomistajien tulee tehdä ilmanvaihtotöiden ajaksi?",
    options: [
      "A) Viedä lemmikit viikoksi hotelliin",
      "B) Sulkea lemmikkieläimet yhteen huoneeseen työn ajaksi",
      "C) Jättää koirat rappukäytävään vapaaksi",
      "D) Lemmikeille ei tarvitse tehdä mitään"
    ],
    correctAnswer: "B) Sulkea lemmikkieläimet yhteen huoneeseen työn ajaksi",
    explanation: "Ohje asukkaille: 'Lemmikkieläimet pyydetään sulkemaan yhteen huoneeseen'."
  },
  {
    id: "ke-l-15",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kansalaisopiston rehtori tiedottaa: Kevään kielikursseille ilmoittautuminen avautuu verkossa ensi maanantaina klo 09:00. Suosituimmat espanjan ja suomen jatkokurssit täyttyvät usein ensimmäisten minuuttien aikana, joten suosittelemme kirjautumaan valmiiksi järjestelmään.",
    prompt: "Mitä suositellaan nopean täyttymisen vuoksi?",
    options: [
      "A) Tulemaan opistolle jonottamaan edellisenä yönä",
      "B) Kirjautumaan valmiiksi verkkojärjestelmään ennen ilmoittautumisen alkua",
      "C) Soittamaan poliisille kurssipaikasta",
      "D) Odottelemaan rauhassa seuraavaan vuoteen"
    ],
    correctAnswer: "B) Kirjautumaan valmiiksi verkkojärjestelmään ennen ilmoittautumisen alkua",
    explanation: "Rehtori neuvoo: 'suosittelemme kirjautumaan valmiiksi järjestelmään' ennen klo 09:00 alkua."
  },
  {
    id: "ke-l-16",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Terveysneuvontapuhelin: Jos lapsella on korkea kuume, mutta hän jaksaa juoda nesteitä ja leikkiä hetkittäin, tilannetta voi yleensä seurata kotona kuumetta alentavalla lääkkeellä. Mikäli lapsi muuttuu veltoksi tai hengitys vaikeutuu, ottakaa heti yhteys päivystykseen.",
    prompt: "Milloin vanhempaa kehotetaan ottamaan heti yhteys päivystykseen?",
    options: [
      "A) Jos lapsi haluaa katsoa piirrettyjä",
      "B) Jos lapsi muuttuu veltoksi tai hengitys muuttuu vaikeaksi",
      "C) Jos lapsi juo paljon vettä",
      "D) Heti kun lämpö nousee 37 asteeseen"
    ],
    correctAnswer: "B) Jos lapsi muuttuu veltoksi tai hengitys muuttuu vaikeaksi",
    explanation: "Hoitaja neuvoo: 'Mikäli lapsi muuttuu veltoksi tai hengitys vaikeutuu, ottakaa heti yhteys päivystykseen'."
  },
  {
    id: "ke-l-17",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kirjastonhoitaja kuuluttaa: Kirjasto suljetaan tänään poikkeuksellisesti jo klo 17:00 henkilökunnan koulutuksen vuoksi. Palautukset voi jättää ulkoluukkuun ja lainoja voi uusia vuorokauden ympäri verkkokirjastossa. Huomenna avaamme normaalisti klo 09:00.",
    prompt: "Miksi kirjasto suljetaan aikaisemmin?",
    options: [
      "A) Sähkökatkon vuoksi",
      "B) Henkilökunnan koulutustilaisuuden vuoksi",
      "C) Siivoustöiden takia",
      "D) Kirjaston muuttaessa uuteen osoitteeseen"
    ],
    correctAnswer: "B) Henkilökunnan koulutustilaisuuden vuoksi",
    explanation: "Kuulutus: 'suljetaan tänään poikkeuksellisesti jo klo 17:00 henkilökunnan koulutuksen vuoksi'."
  },
  {
    id: "ke-l-18",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Työhaastattelija kysyy: Teillä on erinomainen tausta logistiikka-alalta. Miten kuvailisitte omaa tapaanne toimia kiireellisissä ja ennakoimattomissa tilanteissa, kun toimitusajat uhkaavat viivästyä?",
    prompt: "Mitä haastattelija haluaa tietää hakijan toimintatavoista?",
    options: [
      "A) Miten hän juhlii viikonloppuisin",
      "B) Miten hän toimii paineen alla kiireellisissä ja ennakoimattomissa tilanteissa",
      "C) Paljonko hän haluaa palkkaa ensimmäisenä kuukautena",
      "D) Osaako hän ajaa kuorma-autoa"
    ],
    correctAnswer: "B) Miten hän toimii paineen alla kiireellisissä ja ennakoimattomissa tilanteissa",
    explanation: "Kysymys kohdistuu tapaan: 'toimia kiireellisissä ja ennakoimattomissa tilanteissa, kun toimitusajat uhkaavat viivästyä'."
  },
  {
    id: "ke-l-19",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Ympäristöluento radiossa: Ruokahävikin vähentäminen on yksi tehokkaimmista ilmastoteoista jokaisessa kodissa. Suomalaisten kotitalouksien roskiin heittämästä ruoasta suurin osa on leipää, vihanneksia ja hedelmiä sekä maitotuotteita.",
    prompt: "Mitä ruokia heitetään suomalaisissa kodeissa eniten roskiin?",
    options: [
      "A) Kalliita lihatuotteita ja kaloja",
      "B) Leipää, vihanneksia, hedelmiä ja maitotuotteita",
      "C) Karkkia ja suklaata",
      "D) Pakastepizzoja ja limsaa"
    ],
    correctAnswer: "B) Leipää, vihanneksia, hedelmiä ja maitotuotteita",
    explanation: "Luennossa todetaan: 'suurin osa on leipää, vihanneksia ja hedelmiä sekä maitotuotteita'."
  },
  {
    id: "ke-l-20",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Lentoemäntä kuuluttaa: Hyvät matkustajat, aloitamme laskeutumisen Helsinki-Vantaan lentoasemalle. Pyydämme teitä kiinnittämään turvavyönne, nostamaan istuimen selkänojan pystyasentoon ja sulkemaan pöydät. Lämpötila Helsingissä on kaksi astetta pakkasella ja kiitotiellä on kevyt lumisade.",
    prompt: "Millainen sää Helsingissä on lentokoneen saapuessa?",
    options: [
      "A) Lämmin kesäsää ja 20 astetta",
      "B) Kaksi astetta pakkasta ja kevyt lumisade",
      "C) Rankkasade ja ukkosmyrsky",
      "D) Täysin aurinkoista ja tyyntä"
    ],
    correctAnswer: "B) Kaksi astetta pakkasta ja kevyt lumisade",
    explanation: "Kuulutus kertoo: 'kaksi astetta pakkasella ja kiitotiellä on kevyt lumisade'."
  },
  {
    id: "ke-l-21",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Asukaspuheenvuoro kunnanvaltuustossa: Alueellemme tarvitaan kipeästi hidastetöyssyjä ja alempi 30 km/h nopeusrajoitus alakoulun kohdalle. Nykyisellään autot ajavat koulumatkalaisten ohi huimaa vauhtia, mikä tekee suojatien ylittämisestä hengenvaarallista.",
    prompt: "Mitä toimenpidettä asukas vaatii koulun läheisyyteen?",
    options: [
      "A) Koulun lakkauttamista ja siirtämistä toiseen kuntaan",
      "B) Hidastetöyssyjä ja alemman 30 km/h nopeusrajoituksen asettamista",
      "C) Kaikkien suojateiden poistamista",
      "D) Nopeusrajoituksen nostamista 80 kilometriin tunnissa"
    ],
    correctAnswer: "B) Hidastetöyssyjä ja alemman 30 km/h nopeusrajoituksen asettamista",
    explanation: "Puhuja vaatii: 'alueellemme tarvitaan kipeästi hidastetöyssyjä ja alempi 30 km/h nopeusrajoitus alakoulun kohdalle'."
  },
  {
    id: "ke-l-22",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Optikon vastaanotolla: Silmänpaineesi ja näöntarkkuutesi ovat hyvät, mutta huomaan lievää ikänäköä lukemisessa. Suosittelen moniteholaseja, jotta näet sujuvasti sekä näyttöpäätteelle että kauas ilman lasien jatkuvaa vaihtamista.",
    prompt: "Millaisia silmälaseja optikko suosittelee asiakkaalle?",
    options: [
      "A) Vain mustia aurinkolaseja",
      "B) Moniteholaseja, jotka toimivat eri etäisyyksille",
      "C) Pelkkiä suojalaseja työpajalle",
      "D) Ei mitään laseja, vaan leikkausta"
    ],
    correctAnswer: "B) Moniteholaseja, jotka toimivat eri etäisyyksille",
    explanation: "Optikko: 'Suosittelen moniteholaseja, jotta näet sujuvasti sekä näyttöpäätteelle että kauas'."
  },
  {
    id: "ke-l-23",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kuntosalin ohjaaja neuvoo: Kyykkyä tehdessä muista pitää selkä suorana, rinta auki ja katse eteenpäin. Polvien ei pitäisi kääntyä sisäänpäin ja painon tulisi pysyä tasaisesti koko jalkapohjalla ja kantapäillä.",
    prompt: "Mihin asentoon ohjaaja kehottaa kiinnittämään huomiota kyykyssä?",
    options: [
      "A) Painon viemiseen pelkästään varpaille",
      "B) Suoraan selkään ja painon pitämiseen tasaisesti jalkapohjilla ja kantapäillä",
      "C) Selän pyöristämiseen mahdollisimman alas",
      "D) Silmien sulkemiseen koko liikkeen ajaksi"
    ],
    correctAnswer: "B) Suoraan selkään ja painon pitämiseen tasaisesti jalkapohjilla ja kantapäillä",
    explanation: "Ohjaajan ohje: 'pidä selkä suorana... painon tulisi pysyä tasaisesti koko jalkapohjalla ja kantapäillä'."
  },
  {
    id: "ke-l-24",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Puhelinviesti päiväkodista: Hei, täällä opettaja Riikka. Poikanne Oliver kompastui pihaleikeissä ja loukkasi ranteensa. Ranne on hieman turvoksissa ja aristaa. Olemme laittaneet kylmäpussin. Toivoisimme, että voisitte hakea hänet hieman aiemmin lääkärintarkastukseen.",
    prompt: "Miksi päiväkodista soitetaan vanhemmalle?",
    options: [
      "A) Oliver kieltäytyi syömästä lounasta",
      "B) Oliver kaatui ja loukkasi ranteensa, joten hänet pyydetään hakemaan tarkastukseen",
      "C) Päiväkoti on suljettu vesivahingon takia",
      "D) Oliver voitti piirustuskilpailun"
    ],
    correctAnswer: "B) Oliver kaatui ja loukkasi ranteensa, joten hänet pyydetään hakemaan tarkastukseen",
    explanation: "Opettaja kertoo: 'Oliver kompastui pihaleikeissä ja loukkasi ranteensa... toivoisimme että voisitte hakea hänet hieman aiemmin lääkärintarkastukseen'."
  },
  {
    id: "ke-l-25",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Museo-opas kertoo kierroksella: Tämä taideteos edustaa Suomen kultakauden kansallisromantiikkaa 1890-luvulta. Taiteilija on kuvannut teoksessa Kalevalan sankaria Väinämöistä, ja teoksen symboliikka liittyy kiinteästi itsenäisyystaisteluun ja luonnonmystiikkaan.",
    prompt: "Mitä aikakautta ja teemaa esitelty taideteos edustaa?",
    options: [
      "A) Modernia 2020-luvun katutaidetta",
      "B) 1890-luvun kansallisromantiikkaa ja Kalevalan symboliikkaa",
      "C) Keskiaikaista kirkkomaalausta",
      "D) Ranskalaista impressionismia ilman suomalaisia aiheita"
    ],
    correctAnswer: "B) 1890-luvun kansallisromantiikkaa ja Kalevalan symboliikkaa",
    explanation: "Opas kertoo teoksen edustavan 'Suomen kultakauden kansallisromantiikkaa 1890-luvulta... Kalevalan sankaria'."
  },
  {
    id: "ke-l-26",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Pankkivirkailija ohjeistaa: Verkkohuijaukset ovat lisääntyneet voimakkaasti. Muistakaa, että pankki tai poliisi ei koskaan soita teille ja pyydä pankkitunnuksianne tai tekstiviestillä tullutta vahvistuskoodia. Jos joku pyytää niitä, sulkekaa puhelu välittömästi.",
    prompt: "Miten asiakkaan tulee toimia, jos joku soittaa ja kysyy pankkitunnuksia?",
    options: [
      "A) Antaa tunnukset heti tarkistusta varten",
      "B) Sulkea puhelu välittömästi, sillä pankki ei koskaan kysy tunnuksia puhelimessa",
      "C) Pyytää soittajaa soittamaan huomenna uudelleen",
      "D) Siirtää kaikki rahat vieraalle tilille turvaan"
    ],
    correctAnswer: "B) Sulkea puhelu välittömästi, sillä pankki ei koskaan kysy tunnuksia puhelimessa",
    explanation: "Virkailija painottaa: 'pankki tai poliisi ei koskaan soita... ja pyydä pankkitunnuksianne... sulkekaa puhelu välittömästi'."
  },
  {
    id: "ke-l-27",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Rakennusvalvonnan tiedote: Omakotitalojen julkisivujen maalaus tai pieni terassin rakentaminen ei useimmiten vaadi rakennuslupaa, mutta toimenpideilmoitus kuntaan on syytä tehdä etukäteen. Ranta-alueilla säännöt ovat tiukemmat ja kaavamääräykset on aina tarkistettava.",
    prompt: "Mitä rakentajan kannattaa tehdä ennen maalausta tai terassin rakentamista?",
    options: [
      "A) Purkaa koko talo ilman ilmoitusta",
      "B) Tehdä toimenpideilmoitus kuntaan ja tarkistaa kaavamääräykset",
      "C) Aloittaa rakentaminen salassa yöllä",
      "D) Maksaa naapurille lahjus"
    ],
    correctAnswer: "B) Tehdä toimenpideilmoitus kuntaan ja tarkistaa kaavamääräykset",
    explanation: "Tiedote ohjeistaa: 'toimenpideilmoitus kuntaan on syytä tehdä etukäteen... kaavamääräykset on aina tarkistettava'."
  },
  {
    id: "ke-l-28",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Veroneuvoja vastaa radiossa: Palkansaajan verokortti on nykyään voimassa koko kalenterivuoden yhdellä tulorajalla. Jos huomaat loppuvuodesta tulorajan ylittyvän, voit korottaa veroprosenttiasi OmaVerossa milloin vain, jotta vältyt jäännösverolta eli mätkyiltä.",
    prompt: "Miten palkansaaja voi välttää jäännösverot, jos vuosituloraja uhkaa ylittyä?",
    options: [
      "A) Lopettamalla työnteon kokonaan syyskuussa",
      "B) Korottamalla veroprosenttia OmaVerossa",
      "C) Polttamalla verokortin",
      "D) Vaatimalla palkkaa käteisenä pimeästi"
    ],
    correctAnswer: "B) Korottamalla veroprosenttia OmaVerossa",
    explanation: "Neuvoja opastaa: 'voit korottaa veroprosenttiasi OmaVerossa milloin vain, jotta vältyt jäännösverolta'."
  },
  {
    id: "ke-l-29",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Teatterin kuulutus: Hyvät katsojat, esitys alkaa viiden minuutin kuluttua. Pyydämme teitä ystävällisesti kytkemään matkapuhelimet äänettömälle tai sulkemaan ne kokonaan. Valokuvaaminen ja esityksen taltiointi esityksen aikana on tekijänoikeussyistä kielletty.",
    prompt: "Mitkä kaksi asiaa katsojia pyydetään tekemään ennen teatteriesityksen alkua?",
    options: [
      "A) Laulamaan mukana ja syömään popcornia",
      "B) Kytkemään puhelimet äänettömälle ja pidättäytymään kuvaamisesta esityksen aikana",
      "C) Poistumaan katsomosta välittömästi",
      "D) Ostamaan uusi lippu väliajalla"
    ],
    correctAnswer: "B) Kytkemään puhelimet äänettömälle ja pidättäytymään kuvaamisesta esityksen aikana",
    explanation: "Kuulutus ohjeistaa: 'kytkemään matkapuhelimet äänettömälle... Valokuvaaminen ja esityksen taltiointi... on tekijänoikeussyistä kielletty'."
  },
  {
    id: "ke-l-30",
    subtest: "listening",
    maxPlays: 2,
    audioPhrase: "Kansanterveystutkija haastattelussa: Säännöllinen arkiliikunta, kuten portaiden nousu ja puolen tunnin reipas kävely päivittäin, tuo merkittäviä hyötyjä aineenvaihdunnalle ja aivoterveydelle. Ei tarvitse treenata maratonille saavuttaakseen terveyshyötyjä; jo pienet päivittäiset valinnat ratkaisevat.",
    prompt: "Mitä tutkija korostaa terveyshyötyjen saavuttamiseksi?",
    options: [
      "A) Äärimmäisen raskasta maratontreeniä joka päivä",
      "B) Säännöllistä arkiliikuntaa ja pieniä päivittäisiä aktiivisia valintoja",
      "C) Täyttä lepoa sohvalla ilman liikuntaa",
      "D) Vain kalliiden vitamiinipillereiden syöntiä"
    ],
    correctAnswer: "B) Säännöllistä arkiliikuntaa ja pieniä päivittäisiä aktiivisia valintoja",
    explanation: "Tutkija korostaa: 'Säännöllinen arkiliikunta... Ei tarvitse treenata maratonille... jo pienet päivittäiset valinnat ratkaisevat'."
  }
];

export const keskitasoSpeaking = [
  // 20 Simulated Dialogues (Rapid response, 25-45 seconds)
  {
    id: "ke-s-1",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Työhaastattelu: Vahvuudet ja kehityskohteet",
    audioPrompt: "Tervetuloa haastatteluun! Kertoisitteko aluksi, mitkä ovat mielestänne suurimmat ammatilliset vahvuutenne ja missä asioissa haluaisitte vielä kehittyä?",
    prepSeconds: 10,
    speakSeconds: 40,
    prompt: "Vastaa haastattelijalle. Kerro kaksi keskeistä ammatillista vahvuuttasi (esim. tarkkuus, asiakaspalvelutaidot, kielitaito) ja yksi asia, jossa haluat kehittyä lisää.",
    modelAnswer: "Kiitos! Suurimpia vahvuuksiani ovat luotettavuus, järjestelmällisyys sekä hyvät vuorovaikutustaidot erilaisten ihmisten kanssa. Olen nopea omaksumaan uusia tietojärjestelmiä ja toimin rauhallisesti myös kiireessä. Kehityskohteekseni mainitsisin sen, että haluaisin syventää osaamistani projektien budjetoinnissa ja talousseurannassa, mihin toivon saavani oppia tässä tehtävässä."
  },
  {
    id: "ke-s-2",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Naapurin kanssa neuvottelu: Pihan haravointitalkoot",
    audioPrompt: "Moi naapuri! Mietittiin tuossa hallituksen kanssa, että pidettäisiinkö syystalkoot ensi lauantaina vai sunnuntaina. Kumpikaan päivä sopisi sinulle paremmin ja mitä hommia voisit ottaa?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Vastaa naapurille. Kerro kumpana päivänä pääset osallistumaan ja mitä talkootöitä voit tehdä (esim. lehtien haravointi, grillimakkaroiden paisto, pensaiden leikkaus).",
    modelAnswer: "Moi! Minulle sopisi huomattavasti paremmin lauantai aamupäivästä, sillä sunnuntaina minulla on menoa perheen kanssa. Voin erittäin mielelläni ottaa vastuulleni pihan lehtien haravoinnin ja pensaiden leikkauksen, minulla on siihen omat oksasaksetkin mukana. Voin myös auttaa talkooväen kahvinkeitossa."
  },
  {
    id: "ke-s-3",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Lääkärin vastaanotto: Pitkittynyt selkäkipu",
    audioPrompt: "Päivää. Tulkaa peremmälle. Kertokaa tarkemmin, missä kohtaa kipu tuntuu, kauanko sitä on ollut ja säteileekö se jalkoihin?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Kuvaile lääkärille selkäkipuasi tarkasti (alaselkä, alkoi viikko sitten raskaasta nostosta, tuntuu istuessa, särkylääkkeet eivät auta tarpeeksi).",
    modelAnswer: "Päivää tohtori. Kipu tuntuu erityisesti alaselässä oikealla puolella ja se alkoi noin viikko sitten, kun nostin raskasta laatikkoa muutossa. Kipu pahenee varsinkin pitkään istuessa näyttöpäätteen ääressä, mutta ei säteile vielä onneksi varpaisiin asti. Tavalliset särkylääkkeet, kuten burana, eivät ole enää riittäneet helpottamaan oloa."
  },
  {
    id: "ke-s-4",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Pankissa: Asuntolainaneuvottelu",
    audioPrompt: "Päivää! Olette hakeneet meiltä asuntolainaa ensiasunnon ostoon. Minkälaista asuntoa olette etsimässä ja paljonko teillä on omaa säästöosuutta valmiina?",
    prepSeconds: 10,
    speakSeconds: 40,
    prompt: "Vastaa pankkineuvojalle. Kerro etsimäsi asunnon koko ja sijainti, arvioitu hintaluokka sekä paljonko ASP-tilillä tai säästöissä on rahaa.",
    modelAnswer: "Päivää! Etsimme perheelleni kolmiota Espoon tai Vantaan alueelta hyvien juna- ja metroyhteyksien varrelta, ja hintahaarukka olisi noin kaksisataaviisikymmentätuhatta euroa. Meillä on ASP-tilillä ja muissa säästöissä valmiina noin kolmekymmentätuhatta euroa omarahoitusosuutta, ja meillä molemmilla on vakituiset työpaikat."
  },
  {
    id: "ke-s-5",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Reklamaatio vaatekaupassa: Rikkinäinen vetoketju",
    audioPrompt: "Hei, kuinka voin auttaa teitä tänään?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Olet ostanut kalliin talvitakin kaksi viikkoa sitten, ja sen vetoketju on jo hajonnut. Reklamoi asiallisesti myyjälle, näytä kuitti ja vaadi takin vaihtoa tai korjausta.",
    modelAnswer: "Hei. Ostin tämän talvitakin myymälästänne kaksi viikkoa sitten, mutta sen päävetoketju hajosi ja jumiutui eilen täysin tavanomaisessa käytössä. Tässä on ostokuitti. Koska takki on uusi ja hintava, haluaisin vaihtaa sen virheettömään kappaleeseen tai että liike korjaa vetoketjun kuluitta kuntoon."
  },
  {
    id: "ke-s-6",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Koulun opettajan tapaaminen: Lapsen kielikehitys",
    audioPrompt: "Hei! Mukava tavata. Halusin jutella lapsenne suomen kielen kehityksestä luokassa. Miten teidän mielestänne kotitehtävät ja lukeminen ovat sujuneet kotona?",
    prepSeconds: 10,
    speakSeconds: 40,
    prompt: "Vastaa lapsesi luokanopettajalle. Kerro miten teette läksyt kotona, miten tuette suomen kieltä ja kysy opettajalta vinkkejä sanavaraston laajentamiseen.",
    modelAnswer: "Hei opettaja, kiitos tapaamisesta! Teemme kotitehtävät aina yhdessä joka iltapäivä ja luemme suomenkielisiä helppolukuisia kirjoja kirjastosta noin kaksikymmentä minuuttia päivässä. Hän ymmärtää ohjeet hyvin, mutta uusia käsitteitä ja sanastoa tarvittaisiin lisää. Onko teillä suositella jotain erityisiä sovelluksia tai lukukirjoja sanavaraston vahvistamiseen?"
  },
  {
    id: "ke-s-7",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Työpaikan kehityskeskustelu: Toiveet tulevaisuudesta",
    audioPrompt: "Olemme käyneet menneen vuoden tulokset läpi. Mihin suuntaan haluaisit viedä omaa työnkuvaasi ensi vuonna? Kiinnostavatko esimerkiksi tiiminvetovastuut vai asiantuntijarooli?",
    prepSeconds: 10,
    speakSeconds: 40,
    prompt: "Vastaa esihenkilöllesi. Kerro kummasta roolista olet enemmän kiinnostunut ja perustele miksi (esim. koulutus, kiinnostus ihmisten sparraamiseen tai tekniseen syventymiseen).",
    modelAnswer: "Olen pohtinut tätä paljon ja minua kiinnostaisi kovasti siirtyminen enemmän tiiminveto- ja koordinointitehtäviin. Nautin ihmisten sparraamisesta, työn organisoinnista ja sujuvasta viestinnästä eri osastojen välillä. Haluaisin mielelläni osallistua yrityksen sisäiseen esihenkilövalmennukseen ensi kevään aikana valmiuksien kehittämiseksi."
  },
  {
    id: "ke-s-8",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Päivystyspoliklinikalla: Ilmoittautuminen ja oireet",
    audioPrompt: "Ilmoittautumistiski, päivää. Teillä on lähete päivystykseen. Kertokaa henkilötunnuksenne ja milloin nämä vatsakivut ovat alkaneet?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Kerro henkilötietosi (keksi syntymäaika), että kova alavatsakipu alkoi tänä aamuna ja että sinulla on myös pahoinvointia ja huimausta.",
    modelAnswer: "Päivää. Henkilötunnukseni on 150688-123X. Kova, viiltävä kipu alaoikealla vatsassa alkoi tänä aamuna kello kuuden aikaan, ja se on pahentunut nopeasti. Minulla on ollut myös voimakasta pahoinvointia enkä ole pystynyt pitämään mitään nesteitä sisälläni."
  },
  {
    id: "ke-s-9",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Autovuokraamossa: Vakuutuksen valinta ja ehdot",
    audioPrompt: "Tässä olisi autonne avaimet. Haluaisitteko ottaa tähän lisäturvavakuutuksen, joka poistaa omavastuun kolaritilanteessa kokonaan, se maksaa 15 euroa vuorokaudessa?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Vastaa virkailijalle. Päätä otatko vakuutuksen vai et, perustele miksi ja kysy miten toimia jos autoon tulee rengasrikko matkalla.",
    modelAnswer: "Kyllä, otan mielelläni tuon omavastuun poistavan lisäturvan, jotta matka sujuu ilman huolta. Haluaisin vielä kysyä, miten toimin, jos matkan aikana tulee tekninen vika tai rengasrikko maantiellä – mihin tiepalvelunumeroon soitan?"
  },
  {
    id: "ke-s-10",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kirjastossa: Kaukolainapyynnön tekeminen",
    audioPrompt: "Hei! Etsittekö jotain tiettyä teosta tietokannastamme?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Etsit harvinaista teosta, jota ei löydy kotikaupunkisi kirjastosta. Pyydä virkailijalta kaukolainaa toisen kaupungin yliopistokirjastosta ja kysy paljonko se maksaa.",
    modelAnswer: "Hei! Etsin suomen kielen historiallista kielioppikirjaa, jota ei valitettavasti löydy kaupunkinne kokoelmasta. Voisitteko tilata sen minulle kaukolainana esimerkiksi Helsingin yliopiston kirjastosta, ja paljonko kaukolainan tilausmaksu on?"
  },
  {
    id: "ke-s-11",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Ravintolassa: Väärän annoksen huomauttaminen",
    audioPrompt: "Tässä olisi ruokanne, olkaa hyvä! Maistuuko kaikki hyvältä?",
    prepSeconds: 6,
    speakSeconds: 30,
    prompt: "Huomaat, että sait lihapullia vaikka tilasit kasvisannoksen allergian vuoksi. Huomauta tarjoilijalle kohteliaasti mutta selkeästi virheestä.",
    modelAnswer: "Anteeksi, mutta tässä taisi tulla pieni sekaannus keittiössä. Tilasin kasvisruoan gluteenittomana vakavan allergian vuoksi, mutta tämä lautasella oleva annos näyttää sisältävän naudanlihaa. Voisitteko ystävällisesti vaihtaa tämän tilaamaani kasvisannokseen?"
  },
  {
    id: "ke-s-12",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Katsastusasemalla: Hylkäyspäätöksen selvittäminen",
    audioPrompt: "No niin, autonne katsastus on valmis. Valitettavasti auto ei mennyt läpi etuiskunvaimentimen vuodon ja liian suurien päästöjen takia. Tässä on hylkäystodistus.",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Kysy katsastajalta lisätietoja: kuinka kauan sinulla on aikaa korjata viat, paljonko jälkitarkastus maksaa ja saako autolla ajaa korjaamolle.",
    modelAnswer: "Selvä, harmi kuulla. Haluaisin kysyä, saanko ajaa autolla nyt suoraan korjaamolle viat korjattavaksi? Kuinka monta viikkoa minulla on aikaa suorittaa jälkitarkastus, ja tuleeko jälkitarkastuksesta erillinen maksu?"
  },
  {
    id: "ke-s-13",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Poliisiasemalla: Kadonneen passin ilmoittaminen",
    audioPrompt: "Poliisin lupapalvelut, päivää. Teiltä on kadonnut passi. Missä ja milloin havaitsitte katoamisen?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Selitä poliisille tilanne: huomasit passin kadonneen eilen rautatieasemalla tai junassa, olet etsinyt sitä kaikkialta, ja tarvitset rikosilmoituksen/katoamisilmoituksen uutta passia varten.",
    modelAnswer: "Päivää. Huomasin passini kadonneen eilen iltapäivällä matkustaessani lähijunalla Tikkurilasta Helsinkiin. Passi oli repun sivutaskussa, josta se on todennäköisesti pudonnut. Olen tarkistanut VR:n löytötavarat tuloksetta, ja tarvitsisin nyt virallisen katoamisilmoituksen uuden passin hakemista varten."
  },
  {
    id: "ke-s-14",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kuntosalilla: Jäsenyyden tauottaminen vamman takia",
    audioPrompt: "Moi! Haluaisitko uusia vuosisopimuksesi vai miten voin auttaa?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Sinulla on polvivamma ja lääkäri on kieltänyt treenaamisen kahdeksi kuukaudeksi. Pyydä jäsenyyden laittamista tauolle lääkärintodistuksella.",
    modelAnswer: "Moi! Minulla on valitettavasti tullut polvivamma ja leikkaus, jonka vuoksi lääkäri on kieltänyt liikunnan kahdeksi kuukaudeksi. Haluaisin laittaa kuntosalijäsenyyteni tauolle tämän lääkärintodistuksen perusteella kahdeksi kuukaudeksi ilman kuukausimaksua."
  },
  {
    id: "ke-s-15",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Työkaverin kanssa: Projektin myöhästymisestä sopiminen",
    audioPrompt: "Moi! Huomasin että meidän yhteisen raporttimme dedis on jo ylihuomenna, mutta minulla on vielä kaksi osiota kesken. Ehditkö sinä auttaa minua vai siirretäänkö määräaikaa?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Vastaa työkaverille ratkaisukeskeisesti. Kerro että ehdit auttaa toisen osion kirjoittamisessa huomenna ja ehdota että pyydätte pomolta yhden lisäpäivän viimeistelyyn.",
    modelAnswer: "Moi! Ymmärrän hyvin, minullakin on ollut kiirettä. Voin huomenna aamupäivällä ottaa toisen noista osioista ja kirjoittaa sen valmiiksi. Ehdotan kuitenkin, että laitamme pomolle viestin ja pyydämme yhtä lisäpäivää perjantaihin saakka, jotta ehdimme oikolukea koko raportin kunnolla."
  },
  {
    id: "ke-s-16",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Isännöitsijän toimistolla: Saunavuoron ja autopaikan varaus",
    audioPrompt: "Asiakaspalvelu, päivää. Te olette muuttaneet uutena asukkaana taloon. Mitä palveluita haluaisitte varata?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Tilaa viikoittainen lauantaisaunavuoro (mieluiten klo 19–20) ja kysy onko pihalla vapaana sähkötolpallista autopaikkaa.",
    modelAnswer: "Päivää! Muutin asuntoon A 14 ja haluaisin varata viikoittaisen vakiolenkkisaunavuoron lauantai-illaksi kello yhdeksäntoista ja kahdenkymmenen välille. Lisäksi haluaisin tiedustella, onko pihalla vapaana tolpallista autopaikkaa autolleni ja paljonko se maksaa kuussa?"
  },
  {
    id: "ke-s-17",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Päiväkodissa: Lapsen ruoka-aineallergiasta ilmoittaminen",
    audioPrompt: "Hei! Mukava nähdä. Onko lapsellanne jotain erityisruokavaliota tai allergioita, jotka keittiön pitäisi tietää?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Kerro opettajalle, että lapsesi on vakavasti allerginen maapähkinöille ja kananmunalle. Näytä lääkärintodistus ja kysy miten ensiapulääke säilytetään.",
    modelAnswer: "Hei! Kyllä, lapsellani on lääkärin diagnosoima vakava allergia maapähkinälle ja kananmunalle. Tässä on lääkärintodistus keittiötä varten. Toisin myös mukanani adrenaliinikynän ja antihistamiinin – mihin lääkekaappiin ne sijoitetaan ja onko ryhmän opettajilla ohjeet niiden käyttöön?"
  },
  {
    id: "ke-s-18",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Apteekissa: Reseptilääkkeen nouto ja neuvonta",
    audioPrompt: "Päivää! Saanko Kela-korttinne? Täällä on teille lääkärin määräämä antibioottikuuri tulehdukseen.",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Ota lääke vastaan ja kysy farmaseutilta: otetaanko lääke ruoan kanssa vai tyhjään mahaan ja saako sen aikana käyttää maitotuotteita.",
    modelAnswer: "Päivää, tässä on Kela-korttini, kiitos. Haluaisin kysyä tämän antibiootin ottamisesta: kannattaako tabletti ottaa ruokailun yhteydessä vai tyhjään vatsaan, ja heikentävätkö maitotuotteet tämän kyseisen lääkkeen imeytymistä?"
  },
  {
    id: "ke-s-19",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Työkaverin perehdytys: Ohjeistaminen kahvihuoneen sääntöihin",
    audioPrompt: "Moi! Olen aloittanut täällä eilen uutena työntekijänä. Miten teillä yleensä toimii nämä tauot ja keittiön siisteys täällä toimistolla?",
    prepSeconds: 8,
    speakSeconds: 35,
    prompt: "Neuvo uutta työkaveria ystävällisesti: lounastunti on 30 min, kahvitauot 15 min, omat astiat tiskikoneeseen ja jääkaapissa omiin eväisiin laitetaan nimilappu.",
    modelAnswer: "Tervetuloa taloon! Meillä on lounastauko kolmekymmentä minuuttia ja kaksi vartin kahvitaukoa päivässä. Taukohuoneessa pidetään perinteisesti yhdessä siisteyttä: jokainen laittaa omat kahvikupit suoraan tiskikoneeseen, ja jääkaappiin tuotuihin omiin eväsrasioihin on tapana kirjoittaa maalarinteipille oma nimi ja päivämäärä."
  },
  {
    id: "ke-s-20",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kodin elektroniikkaliikkeessä: Puhelimen takuukorjaus",
    audioPrompt: "Hei! Mitä vikaa tässä puhelimessa on ilmennyt?",
    prepSeconds: 8,
    speakSeconds: 30,
    prompt: "Puhelimesi näyttö pimenee itsekseen ja akku tyhjenee tunnissa, vaikka laite on vain neljä kuukautta vanha. Pyydä takuuhuoltoa ja lainapuhelinta korjauksen ajaksi.",
    modelAnswer: "Hei. Tämä neljä kuukautta sitten ostettu puhelin sammuu ja pimenee itsestään kesken käytön, ja akku tyhjenee sadasta prosentista nollaan tunnissa ilman rasitusta. Laite on takuun alainen, joten haluaisin lähettää sen valtuutettuun huoltoon. Olisiko mahdollista saada lainapuhelin huollon ajaksi käyttöön?"
  },

  // 10 Monologues (Timed Speech: 45-60s prep, 90-120s continuous speech)
  {
    id: "ke-s-21",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Työelämän tasapaino ja vapaa-ajan merkitys",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu aiheesta 'Työn ja vapaa-ajan tasapaino nyky-yhteiskunnassa':\n- Miksi työn ja levon erottaminen toisistaan on tärkeää\n- Mitä haasteita etätyö ja älypuhelimet tuovat tähän tasapainoon\n- Miten itse rentoudut ja huolehdit omasta jaksamisestasi\n- Anna vinkkejä siitä, miten työstressiä voi hallita.",
    modelAnswer: "Työn ja vapaa-ajan välinen tasapaino on yksi aikamme merkittävimmistä hyvinvointikysymyksistä. Kun ihminen tekee liikaa töitä ilman riittävää lepoa, keho ja mieli kuormittuvat, mikä voi johtaa pitkittyneeseen unettomuuteen ja työuupumukseen. Nykyaikainen etätyö ja puhelimeen kilahtelevat sähköpostit tekevät työn ja vapaan rajan vetämisestä entistä vaikeampaa, kun toimisto kulkee taskussa myös iltaisin ja lomilla. Minulle itselleni luonnossa liikkuminen, säännöllinen kuntosaliharjoittelu ja ystävien tapaaminen ovat parhaita keinoja nollata ajatukset. Suljen työläppärin ja ilmoitukset aina työpäivän päätyttyä kello viideltä. Suosittelen kaikille selkeiden rajojen asettamista: vapaa-aika ei ole työstä ylijäävää aikaa, vaan se on ihmisen elämän arvokkainta aikaa, jota täytyy vaalia."
  },
  {
    id: "ke-s-22",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Asuminen kaupungissa vs. maaseudulla",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Vertaa asumista tiheässä kaupungissa ja rauhallisella maaseudulla:\n- Mitä hyviä ja huonoja puolia kaupunkiasumisessa on\n- Mitä hyviä ja huonoja puolia maaseudulla asumisessa on\n- Kumpi asumismuoto sopii paremmin sinulle ja perheellesi tässä elämänvaiheessa\n- Miten uskot asumisen trendien muuttuvan tulevaisuudessa.",
    modelAnswer: "Asumisen valinta kaupungin ja maaseudun välillä riippuu vahvasti ihmisen elämäntilanteesta ja arvostuksista. Kaupunkiasumisessa parasta on palveluiden, kulttuurin ja julkisen liikenteen läheisyys – kaikki kaupoista kouluihin ja harrastuksiin on saavutettavissa ilman omaa autoa. Toisaalta asuminen kaupungissa on huomattavasti kalliimpaa, tilat ovat pienempiä ja ympärillä on jatkuvaa melua ja kiirettä. Maaseudulla taas ihmistä ympäröi upea luonnonrauha, puhdas ilma ja väljät asunnot edulliseen hintaan, mutta pitkät välimatkat ja riippuvuus henkilöautosta vaikeuttavat arkea. Tässä elämänvaiheessani suosin kaupunkia tai sen kehyskuntaa työpaikan ja lasten koulumatkojen vuoksi. Uskon kuitenkin, että etätyön vakiintuessa yhä useammat tulevat valitsemaan hybridiasumisen ja muuttamaan kauemmas luonnon helmaan."
  },
  {
    id: "ke-s-23",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Ympäristöteot ja kestävät valinnat omassa arjessani",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu omista ympäristöteoistasi ja kestävästä arjesta:\n- Mitä teet itse kotona ja arjessa luonnon säästämiseksi (kierrätys, ruoka, energia)\n- Onko ekologisten valintojen tekeminen helppoa vai vaikeaa Suomessa\n- Mikä ympäristöongelma huolestuttaa sinua eniten ja miksi\n- Miten yhteiskunta voisi kannustaa ihmisiä elämään vielä vihreämmin.",
    modelAnswer: "Ympäristönsuojelu on minulle tärkeä arvo, jota pyrin toteuttamaan arjen konkreettisissa valinnoissa. Lajittelen kotonani huolellisesti kaikki jätteet: biojätteen, muovin, kartongin, lasin ja metallin omiin astioihinsa. Lisäksi olen vähentänyt lihan syöntiä ja korvannut sen kotimaisilla kasviksilla, kalalla ja palkokasveilla. Liikkumisessa suosin kävelyä ja julkista liikennettä aina kun mahdollista. Suomessa ekologinen elämä on tehty melko helpoksi erinomaisen panttijärjestelmän ja kierrätyspisteiden ansiosta, mutta talvisin asunnon lämmitys ja tuoretuotteiden korkeat hinnat luovat omat haasteensa. Eniten minua huolestuttaa ilmaston lämpenemisen myötä tapahtuva luonnon monimuotoisuuden katoaminen. Yhteiskunnan tulisi tukea kestävyyttä laskemalla julkisen liikenteen ja korjauspalveluiden veroja."
  },
  {
    id: "ke-s-24",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Suomen kielen oppimisen haasteet ja oivallukset",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Kerro kokemuksestasi suomen kielen opiskelijana:\n- Mikä suomen kielessä on ollut kaikkein vaikeinta (esim. sijamuodot, puhekieli vs. kirjakieli, sanasto)\n- Mikä opiskelussa on ollut palkitsevaa ja mikä menetelmä on toiminut parhaiten\n- Kerro jokin hauska tai opettavainen väärinkäsitys, jonka olet kokenut suomen kielellä\n- Mitä neuvoja antaisit henkilölle, joka aloittaa suomen opiskelun alusta.",
    modelAnswer: "Suomen kielen opiskelu on ollut minulle kiehtova, mutta samalla erittäin haastava matka. Vaikeinta kielen alussa oli ehdottomasti valtava ero kirjakielen ja arkisen puhekielen välillä. Koulussa opitut lauseet tuntuivat usein aivan toisenlaisilta kuin se, mitä kuulin kadulla ja kaupan kassalla. Myös astevaihtelu ja monet sijamuodot vaativat paljon harjoittelua. Kaikkein palkitsevinta on kuitenkin ollut huomata se hetki, kun pystyy asioimaan virastossa tai keskustelemaan naapurin kanssa ilman englantia. Kerran tilasin ravintolassa vahingossa 'kuuman koiran' sijasta 'kuoleman', mikä nauratti meitä kaikkia kovasti. Tärkein neuvoni uudelle oppijalle on: älä pelkää virheitä! Suomalaiset arvostavat valtavasti sitä, että yrität puhua heidän kieltään rohkeasti."
  },
  {
    id: "ke-s-25",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Julkinen liikenne vai oma auto – tulevaisuuden liikkuminen",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Ota kantaa liikkumisen muotoihin Suomessa:\n- Mitkä ovat julkisen liikenteen vahvuudet ja kehityskohteet\n- Milloin oma auto on välttämätön Suomen olosuhteissa\n- Miten sähköautot ja uusi teknologia muuttavat liikennettä\n- Mikä on oma näkemyksesi parhaasta tavasta liikkua arjessa.",
    modelAnswer: "Liikkuminen herättää Suomessa suuria tunteita pitkien välimatkojen ja ankaran talvi-ilmaston vuoksi. Suurissa kaupungeissa, kuten Helsingissä ja Tampereella, julkinen liikenne ratikoineen ja metroineen toimii loistavasti ja tekee omasta autosta lähes tarpeettoman. Se säästää rahaa ja ympäristöä. Kaupunkien ulkopuolella ja harvaan asutulla maaseudulla oma auto on kuitenkin edelleen elinehto: busseja saattaa kulkea vain kaksi päivässä, eikä vuorotyöläinen tai lapsiperhe pärjää ilman omaa kulkuneuvoa. Sähköautot yleistyvät kovaa vauhtia ja vähentävät lähipäästöjä, mutta niiden korkea hankintahinta ja latausverkoston puutteet pohjoisessa hidastavat vielä siirtymää. Henkilökohtaisesti suosin arkimatkoilla junaa ja pyöräilyä, mutta viikonloppumatkoille luontoon auto on edelleen korvaamaton apuväline."
  },
  {
    id: "ke-s-26",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Sosiaalisen median vaikutus ihmissuhteisiin",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu sosiaalisen median vaikutuksesta ihmisten kanssakäymiseen:\n- Miten sosiaalinen media yhdistää ihmisiä eri puolilla maailmaa\n- Mitä haittaa jatkuvasta somen käytöstä on kasvokkaiselle vuorovaikutukselle\n- Ovatko ihmiset nykyään yksinäisempiä ruutujen ääressä\n- Miten suosittelisit tasapainottamaan virtuaalisen ja todellisen elämän.",
    modelAnswer: "Sosiaalinen media on mullistanut tavan, jolla olemme yhteydessä läheisiimme ja maailmaan. Se antaa meille mahdollisuuden pitää reaaliaikaista yhteyttä toisella puolella maapalloa asuviin perheenjäseniin ja löytää uusia ystäviä samanlaisten harrastusten parista. Tästä huolimatta somella on myös vakava varjopuoli. Huomaan jatkuvasti kahviloissa ja perhejuhlissa tilanteita, joissa ihmiset istuvat saman pöydän ääressä, mutta jokainen tuijottaa omaa ruutuaan puhumatta toisilleen. Jatkuva toisten kiillotetun elämän katselu voi myös lisätä riittämättömyyden tunnetta ja syvää yksinäisyyttä. Todelliset ihmissuhteet vaativat katsekontaktia, äänenpainoja ja aitoa läsnäoloa. Suosittelen kaikille ruuduttomia hetkiä: laita puhelin toiseen huoneeseen ruokailun ajaksi ja kohtaa ihminen silmästä silmään."
  },
  {
    id: "ke-s-27",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Suomalainen saunaperinne ja hyvinvointi",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu suomalaisesta saunasta kulttuuri- ja terveysilmiönä:\n- Mikä merkitys saunalla on suomalaisille arjessa ja juhlassa\n- Mitä terveysvaikutuksia saunomisella tutkimusten mukaan on\n- Miten itse koet saunomisen (pidätkö siitä, kuinka usein käyt)\n- Miten kuvailisit suomalaista saunakulttuuria ulkomaalaiselle vieraalle.",
    modelAnswer: "Sauna on suomalaisen identiteetin ja kulttuurin ehdoton sydän. Suomessa on yli kolme miljoonaa saunaa, mikä kertoo sen valtavasta merkityksestä: sauna löytyy lähes jokaisesta kodista, mökistä ja jopa eduskunnasta. Sauna ei ole suomalaiselle pelkkä peseytymispaikka, vaan pyhä hiljentymisen ja rentoutumisen keidas, jossa kaikki ihmiset ovat tasa-arvoisia ilman titteleitä ja vaatteita. Lääketieteelliset tutkimukset ovat osoittaneet, että säännöllinen saunominen laskee verenpainetta, parantaa verisuonten joustavuutta ja edistää syvää unta. Itse rakastan saunomista viikon päätteeksi lauantai-iltaisin, ja talvinen avantouinti saunan jälkeen on uskomattoman virkistävää. Jos ulkomaalainen ystäväni tulisi kylään, veisin hänet ehdottomasti perinteiseen puusaunaan järven rannalle kokemaan tämän ainutlaatuisen rauhan."
  },
  {
    id: "ke-s-28",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Tasa-arvo ja naisten asema suomalaisessa yhteiskunnassa",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu tasa-arvosta Suomessa:\n- Miten tasa-arvo näkyy koulutuksessa, työelämässä ja politiikassa\n- Mitä asioita Suomessa on tehty hyvin sukupuolten tasa-arvon eteen\n- Mitä haasteita tai epäkohtia on edelleen olemassa (esim. palkkaerot, perhevapaat)\n- Miten tasa-arvoa tulisi edistää tulevaisuudessa.",
    modelAnswer: "Suomi on kansainvälisesti tunnettu yhtenä sukupuolten tasa-arvon edelläkävijämaista. Suomi antoi naisille täydet poliittiset oikeudet ensimmäisenä maana Euroopassa vuonna 1906, ja tasa-arvo näkyy vahvasti koulutuksessa ja politiikassa, jossa naisilla on aina ollut vahva edustus ministereinä ja johtajina. Tasa-arvoinen koulutusjärjestelmä ja laadukas varhaiskasvatus mahdollistavat molempien vanhempien työssäkäynnin. Silti tehtävää on vielä jäljellä. Työmarkkinat ovat Suomessa edelleen poikkeuksellisen vahvasti jakautuneet nais- ja miesvaltaisiin aloihin, ja naisen euro on yhä keskimäärin noin kahdeksankymmentäneljä senttiä miehen euroon verrattuna. Myös hoivavastuu jakautuu usein epätasaisesti äideille. Tulevaisuudessa meidän on kannustettava isejä pitämään enemmän perhevapaita ja purettava palkkakuoppia julkisilla hoiva-aloilla."
  },
  {
    id: "ke-s-29",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Kulttuurien kohtaaminen ja moninaisuus Suomessa",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu monikulttuurisuudesta ja erilaisten ihmisten kohtaamisesta:\n- Miten Suomi on muuttunut kansainvälisemmäksi viime vuosikymmeninä\n- Mitä rikkautta erilaiset kulttuurit tuovat ruokaan, taiteeseen ja työelämään\n- Miten ennakkoluuloja ja syrjintää voidaan vähentää yhteiskunnassa\n- Kerro omasta kokemuksestasi eri kulttuuritaustoista tulevien ihmisten kanssa.",
    modelAnswer: "Suomalainen yhteiskunta on kokenut suuren muutoksen viimeisen kolmenkymmenen vuoden aikana muuttuen varsin suljetusta ja yhtenäisestä maasta monimuotoiseksi ja kansainväliseksi. Tämä muutos näkyy katukuvassa, ravintoloissa, musiikissa ja ennen kaikkea työelämässä, jossa kansainväliset tiimit ovat arkipäivää. Erilaiset kulttuurit tuovat yhteiskuntaan uutta luovuutta, monipuolista kielitaitoa ja uusia näkökulmia ongelmanratkaisuun. Ennakkoluulot kumpuavat kuitenkin usein tiedon puutteesta ja pelosta. Paras lääke ennakkoluuloja vastaan on aito vuorovaikutus: kun ihmiset tekevät työtä yhdessä, asuvat naapureina ja heidän lapsensa leikkivät samoissa leikkipuistoissa, pelot väistyvät. Olen itse saanut elämääni valtavasti rikkautta ystävistä, jotka tulevat eri puolilta maailmaa. Erilaisuus ei ole uhka, vaan suuri voimavara."
  },
  {
    id: "ke-s-30",
    subtest: "speaking",
    taskType: "monologue",
    title: "Puhe: Elinikäinen oppiminen ja itsensä kehittäminen",
    prepSeconds: 50,
    speakSeconds: 100,
    prompt: "Puhu itsensä kehittämisestä ja uusien asioiden oppimisesta aikuisiällä:\n- Miksi oppimisen ei pitäisi päättyä koulusta valmistumiseen\n- Mitä taitoja tai tietoja olet itse oppinut aikuisiällä (kieli, käsityöt, teknologia, urheilu)\n- Miten uuden oppiminen vaikuttaa ihmisen aivoterveyteen ja itseluottamukseen\n- Miten motivoisit aikuista, joka pelkää aloittaa uuden opiskelun.",
    modelAnswer: "Oppiminen on elinikäinen seikkailu, jonka ei pitäisi koskaan päättyä tutkintotodistuksen saamiseen. Maailma ympärillämme muuttuu niin nopeasti, että kyky oppia uutta ja mukautua muutoksiin on ihmisen tärkein taito. Aikuisiällä uuden taidon – olipa se uusi kieli, koodaus, soittimen soittaminen tai puutarhanhoito – opetteleminen pitää aivot joustavina, ennaltaehkäisee muistisairauksia ja antaa valtavasti onnistumisen iloa. Olen itse opetellut aikuisiällä suomen kielen ja huomannut, kuinka jokainen opittu uusi sana on avannut minulle uuden oven yhteiskuntaan. Jos joku aikuinen epäröi tai pelkää aloittaa uutta opiskelua, sanoisin hänelle: koskaan ei ole liian myöhäistä. Aivot ovat kuin lihas, joka vahvistuu treenatessa. Aloita pienin askelin ja nauti jokaisesta oivalluksesta matkan varrella."
  }
];
