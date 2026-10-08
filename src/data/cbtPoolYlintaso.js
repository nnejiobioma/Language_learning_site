// YKI Ylintaso (CEFR C1–C2) Official CBT Question Pool
// Academic & Literary Mastery Exam
// 30 Reading Comprehension | 30 Writing | 30 Listening Comprehension | 30 Speaking

export const ylintasoReading = [
  {
    id: "yl-r-1",
    subtest: "reading",
    title: "Oikeustieteellinen katsaus: Perustuslaillinen tulkintaetuoikeus ja normihierarkia",
    passage: `PERUSTUSLAIN 106 §:N SOVELTAMISKÄYTÄNTÖ TUOMIOISTUIMISSA
Suomen perustuslain 106 § velvoittaa tuomioistuimen antamaan etusijan perustuslain säännökselle, mikäli tuomioistuimen käsiteltävänä olevassa asiassa lain säännöksen soveltaminen olisi ilmeisessä ristiriidassa perustuslain kanssa.
Tämä perustuslaillinen normikontrolli poikkeaa useiden mannermaisen oikeusjärjestelmän maiden erillisistä perustuslakituomioistuimista: Suomessa valvonta on hajautettua ja konkreettista.
Kynnys pykälän soveltamiselle on asetettu oikeuskirjallisuudessa ja korkeimman oikeuden ennakkoratkaisuissa korkealle ilmaisun 'ilmeinen ristiriita' vuoksi.
Säännöksen ensisijaisena tehtävänä ei ole syrjäyttää eduskunnan lainsäädäntövaltaa, vaan estää yksittäistapaukselliset perusoikeusloukkaukset silloin, kun lainsäätäjän ennakoimaton laintulkinta johtaisi kestämättömään lopputulokseen perusoikeusmyönteisen laintulkinnan osoittauduttua riittämättömäksi.`,
    prompt: "Mihin tuomioistuin on perustuslain 106 §:n mukaan velvoitettu 'ilmeisen ristiriidan' vallitessa?",
    options: [
      "A) Kumoamaan eduskunnan säätämän lain takautuvasti koko valtakunnassa",
      "B) Antamaan yksittäistapauksessa etusijan perustuslain säännökselle tavallisen lain sijasta",
      "C) Siirtämään asian Euroopan ihmisoikeustuomioistuimen ratkaistavaksi",
      "D) Pidättäytymään tuomion antamisesta kokonaan"
    ],
    correctAnswer: "B) Antamaan yksittäistapauksessa etusijan perustuslain säännökselle tavallisen lain sijasta",
    explanation: "Perustuslain 106 §:n mukaan tuomioistuimen on konkreettisessa tapauksessa annettava soveltamisetusija perustuslaille suhteessa tavalliseen lakiin, kun ilmeinen ristiriita todetaan."
  },
  {
    id: "yl-r-2",
    subtest: "reading",
    title: "Filosofinen essee: Determinismi, moraalinen vastuu ja vapaan tahdon illuusio",
    passage: `KAPASITEETTI VAI KAUSAALIKETJU: VASTUUN FILOSOFINEN DILEMMA
Nykyaikainen neurotiede ja fysikalismi ovat haastaneet klassisen libertaristisen vapaan tahdon käsitteen osoittamalla, että tiedostamattomat aivoprosessit ennakoivat tietoista päätöksentekoa useita satoja millisekunteja ennen koettua 'valintahetkeä'.
Kovien deterministien mukaan moraalinen syyllisyys ja ansio ovat evolutiivisia konstruktioita, joilla ei ole ontologista perustaa kausaalisesti suljetussa universumissa.
Kompatibilistit, kuten Daniel Dennett, argumentoivat kuitenkin, ettei moraalisen vastuun edellytyksenä ole kausaalilakien rikkominen tai fysiikan indeterminismi, vaan toimijan riittävä kognitiivinen reflektiokyky ja kyky reagoida rationaalisiin perusteisiin.
Tässä valossa rangaistusjärjestelmän legitimiteetti ei nojaa metafyysiseen kostoon, vaan normatiivisen koheesion ja sosiaalisen ohjattavuuden ylläpitämiseen.`,
    prompt: "Mihin kompatibilistinen näkemys nojaa moraalisen vastuun oikeutuksessa tekstin mukaan?",
    options: [
      "A) Fysikaalisten luonnonlakien kumoamiseen ja taikuuteen",
      "B) Toimijan kognitiiviseen reflektiokykyyn ja rationaalisiin perusteisiin reagoimiseen",
      "C) Täydelliseen aivotoiminnan ennalta-arvaamattomuuteen",
      "D) Rikollisten rankaisemiseen metafyysisen koston periaatteella"
    ],
    correctAnswer: "B) Toimijan kognitiiviseen reflektiokykyyn ja rationaalisiin perusteisiin reagoimiseen",
    explanation: "Tekstissä todetaan kompatibilismista: 'vastuun edellytyksenä... toimijan riittävä kognitiivinen reflektiokyky ja kyky reagoida rationaalisiin perusteisiin'."
  },
  {
    id: "yl-r-3",
    subtest: "reading",
    title: "Kansantaloustieteellinen tutkimus: Tuottavuusparadoksi ja aineeton pääoma",
    passage: `DIGITAALISEN TALOUDEN SOLOWIN PARADOKSI 2020-LUVULLA
Robert Solow totesi kuuluisasti vuonna 1987 tietokoneiden näkyvän kaikkialla paitsi tuottavuustilastoissa. Huolimatta tekoälyn, pilvipalveluiden ja automaation eksponentiaalisesta kasvusta viime vuosikymmenellä, kokonaistuottavuuden (TFP) kasvu OECD-maissa on hidastunut vastoin perinteisiä kasvumalleja.
Tuoreimmat empiiriset analyysit selittävät tätä ilmiötä aineettoman pääoman (kuten organisaatiorakenteiden, prosessiosaamisen ja datan laadun) viiveellä.
Uusien teknologioiden diffuusio huipulta keskivertoyrityksiin vaatii laajoja komplementaarisia investointeja ja inhimillisen pääoman uudelleenkoulutusta, joiden realisoituminen makrotasolla vie tyypillisesti vuosikymmeniä.
Lisäksi nykyinen kansantalouden tilinpito aliarvioi digitaalisten ilmaispalveluiden ja kuluttajahyötyjen tuottamaa todellista hyvinvointilisää.`,
    prompt: "Mikä tutkimuksen mukaan selittää tuottavuuskasvun hidastumista teknologian nopeasta kehityksestä huolimatta?",
    options: [
      "A) Tietokoneiden ja tekoälyn käyttökelvottomuus työpaikoilla",
      "B) Aineettoman pääoman viive ja tarve mittaville komplementaarisille organisaatioinvestoinneille",
      "C) Työntekijöiden kieltäytyminen digitaalisten palveluiden käytöstä",
      "D) Globaalin raaka-ainetuotannon pysähtyminen"
    ],
    correctAnswer: "B) Aineettoman pääoman viive ja tarve mittaville komplementaarisille organisaatioinvestoinneille",
    explanation: "Teksti selittää: 'aineettoman pääoman... viiveellä. Uusien teknologioiden diffuusio... vaatii laajoja komplementaarisia investointeja ja inhimillisen pääoman uudelleenkoulutusta'."
  },
  {
    id: "yl-r-4",
    subtest: "reading",
    title: "Kirjallisuuskritiikki: Volter Kilven proosan kielellinen arkkitehtuuri",
    passage: `AJAN JA TAJUNNAN VIRTA ALASTALON SALISSA
Volter Kilven pääteos Alastalon salissa (1933) edustaa suomalaisen modernismin monumentaalisinta tajunnanvirtakokeilua. Kilven proosa ei tyydy ulkokohtaiseen kerrontaan, vaan pirstaloi romaanin kronologisen ajan kuvaamalla kuusituntisen parkkilaivayhtiön perustamiskokouksen lähes tuhannen sivun laajuisena introspektiona.
Teoksen lause- ja ajatusrakenne nojaa monipolviseen, hypotalaktiseen syntaksiin ja lauseenvastikkeiden arkkitehtoniseen kerrostamiseen, joka vaatii lukijalta poikkeuksellista kielellistä kestävyyttä.
Kilpi ei kuvaa ainoastaan Kustavin saaristolaisten taloudellista kamppailua, vaan kielen itsensä syntyä ajattelun materiaalina: jokainen piipunvalinta ja katseen vaihto kasvaa ontologiseksi tapahtumaksi, jossa menneisyys, tulevaisuus ja ihmismielen häilyvät motiivit sulautuvat katkeamattomaksi verkkomaiseksi kudokseksi.`,
    prompt: "Millainen kerronnallinen ratkaisu tekee Alastalon salissa -teoksesta poikkeuksellisen?",
    options: [
      "A) Nopeatempoinen ja vähäsanainen toimintaelokuvamainen kerronta",
      "B) Kuusituntisen kokouksen kuvaaminen lähes tuhannella sivulla monipolvisena introspektiivisenä tajunnanvirtana",
      "C) Murteiden täydellinen välttäminen ja virallisen lakikielen käyttö",
      "D) Tapahtumien sijoittaminen kuvitteelliseen tulevaisuuteen avaruudessa"
    ],
    correctAnswer: "B) Kuusituntisen kokouksen kuvaaminen lähes tuhannella sivulla monipolvisena introspektiivisenä tajunnanvirtana",
    explanation: "Teksti kertoo: 'pirstaloi romaanin kronologisen ajan kuvaamalla kuusituntisen... perustamiskokouksen lähes tuhannen sivun laajuisena introspektiona'."
  },
  {
    id: "yl-r-5",
    subtest: "reading",
    title: "Bioetiikan artikkeli: Geenieditointi ja ihmisyyden genealogia",
    passage: `CRISPR-TEKNOLOGIAN ITURATAMUOKKAUS JA TULEVIEN SUKUPOLVIEN ITSEMÄÄRÄÄMISOIKEUS
CRISPR-Cas9-teknologian kehitys on tuonut geeniterapian kokeellisesta tieteestä kliinisen soveltamisen kynnykselle. Samalla kun somaattinen geenieditointi vaikeiden monogeenisten sairauksien hoidossa nauttii laajaa eettistä hyväksyntää, iturataan (alkioihin ja sukusoluihin) kohdistuvat modifikaatiot jakavat bioeetikot jyrkästi kahteen leiriin.
Habermaslaisen deontologisen etiikan mukaan perimän keinotekoinen ohjailu rikkoo tulevien yksilöiden eksistentiaalista autonomiaa: ihminen muuttuu biologisen sattuman synnyttämästä subjektista toisten ihmisten ennalta ohjelmoimaksi artefaktiksi.
Toisaalta utilitaristinen suuntaus painottaa eettistä velvollisuutta poistaa kärsimystä aiheuttavat perinnölliset sairaudet silloin, kun se on teknisesti riskitöntä.
Rajanveto terapeuttisen parantamisen ja esteettis-älyllisen parantelun (enhancement) välillä on kuitenkin liukuva ja alttiina eugeniikan vaaroille.`,
    prompt: "Mikä on Jürgen Habermasin eettisen kritiikin ydinhuoli ituradan geenimuokkauksessa?",
    options: [
      "A) Menetelmän liian alhainen taloudellinen kustannus",
      "B) Tulevan yksilön eksistentiaalisen autonomian vaarantuminen, kun hänestä tulee toisten ohjelmoima objekti",
      "C) Geeniteknologian tehottomuus sairauksien parantamisessa",
      "D) Laboratoriolaitteiden vanhentuminen"
    ],
    correctAnswer: "B) Tulevan yksilön eksistentiaalisen autonomian vaarantuminen, kun hänestä tulee toisten ohjelmoima objekti",
    explanation: "Tekstissä todetaan: 'perimän keinotekoinen ohjailu rikkoo tulevien yksilöiden eksistentiaalista autonomiaa: ihminen muuttuu... toisten ihmisten ennalta ohjelmoimaksi artefaktiksi'."
  },
  {
    id: "yl-r-6",
    subtest: "reading",
    title: "Sosiologinen tutkielma: Sosiaalinen pääoma ja polarisaatio luottamusyhteiskunnassa",
    passage: `INSTITUTIONAALINEN LUOTTAMUS POHJOISMAISEN HYVINVOINTIVALTION PANTTINA
Pohjoismaisen mallin kansainvälinen poikkeuksellisuus ei kiteydy ainoastaan progressiiviseen verotukseen tai kattavaan sosiaaliturvaverkkoon, vaan poikkeuksellisen korkeaan yleistyneeseen luottamukseen (generalized trust). Luottamus toisiin kansalaisiin ja julkisiin instituutioihin toimii transaktiokustannuksia radikaalisti alentavana voiteluaineena.
Viimeaikainen yhteiskunnallinen eriarvoistuminen ja viestintäympäristön algoritminen segregaatio uhkaavat kuitenkin tämän pääoman perustaa.
Kun kansalaiset jakautuvat sosioekonomisesti ja arvoiltaan toisilleen vieraisiin kaikukammioihin, Robert Putnamin erottelema 'sillanrakentava sosiaalinen pääoma' (bridging social capital) kuihtuu, ja tilalle nousee vain omaa sisäryhmää vahvistava ja ulkoryhmiä demonisoiva 'yhteenkuuluvuuspääoma' (bonding social capital).
Tämä kehitys rapauttaa kompromissipolitiikan ja asiantuntijatiedon legitimiteettiä.`,
    prompt: "Mikä vaara uhkaa pohjoismaista luottamusyhteiskuntaa tekstin analyysin mukaan?",
    options: [
      "A) Veroprosentin laskeminen liian alhaiseksi",
      "B) Sillanrakentavan sosiaalisen pääoman korvautuminen vain omaa sisäryhmää vahvistavalla ja ulkoryhmiä sulkevalla pääomalla",
      "C) Liian monien uusien kirjastojen rakentaminen",
      "D) Digitaalisen viestinnän loppuminen"
    ],
    correctAnswer: "B) Sillanrakentavan sosiaalisen pääoman korvautuminen vain omaa sisäryhmää vahvistavalla ja ulkoryhmiä sulkevalla pääomalla",
    explanation: "Analyysi osoittaa, että ryhmien välisen sillanrakentavan pääoman rapautuminen ja sisäryhmäkeskeinen yhteenkuuluvuuspääoma (bonding) polarisoivat yhteiskuntaa."
  },
  {
    id: "yl-r-7",
    subtest: "reading",
    title: "Ympäristöoikeus: Ekososiaalinen sääntely ja ennallistamisasetus",
    passage: `EU:N ENNALLISTAMISASETUS JA JÄSENVALTIOIDEN SUBSI-DIARITEETTI
Euroopan unionin luonnon ennallistamisasetus heijastaa paradigman muutosta passiivisesta luonnonsuojelusta aktiiviseen ekosysteemien palauttamiseen.
Asetus velvoittaa jäsenvaltiot toimeenpanemaan ennallistamistoimenpiteitä, jotka kattavat vähintään 20 prosenttia unionin maa- ja merialueista vuoteen 2030 mennessä, painottaen erityisesti turvemaita, kosteikkoja ja metsäelinympäristöjä.
Suomessa asetus herätti kiivasta valtiosääntöoikeudellista ja taloudellista debattia subsidiariteettiperiaatteen eli toissijaisuusperiaatteen soveltuvuudesta metsätalouden kansalliseen sääntelyyn.
Kriitikot esittivät toimenpiteiden loukkaavan perustuslaillista omaisuudensuojaa ja vääristävän kustannusten jakautumista metsävaltaisille maille, kun taas ympäristöjuridiikan asiantuntijat korostivat ekosysteemipalveluiden ja ilmastonmuutokseen sopeutumisen ylittävän puhtaan elinkeinovapauden intressit.`,
    prompt: "Mikä periaate nousi Suomessa keskustelun keskiöön ennallistamisasetuksen toimivallasta?",
    options: [
      "A) Vapaakauppasopimuksen purkaminen",
      "B) Toissijaisuusperiaate (subsidiariteetti) suhteessa kansalliseen metsäpolitiikkaan",
      "C) Yhteisvaluutta euron vakausmekanismi",
      "D) Kansainvälisen merioikeuden toimivalta"
    ],
    correctAnswer: "B) Toissijaisuusperiaate (subsidiariteetti) suhteessa kansalliseen metsäpolitiikkaan",
    explanation: "Tekstissä korostetaan: 'debattia subsidiariteettiperiaatteen eli toissijaisuusperiaatteen soveltuvuudesta metsätalouden kansalliseen sääntelyyn'."
  },
  {
    id: "yl-r-8",
    subtest: "reading",
    title: "Kielitieteellinen essee: Suomen kielen lauseenvastikkeet ja syntaktinen tiiviys",
    passage: `PARTISIIPPI- JA INFINTIIVIRAKENTEET TYYLIN JA SYNTAKSIN VÄLINEENÄ
Suomen kielen lauseenvastikkeet (kuten temporaalinen, finaalinen, modaalinen ja partisiippirakenne) edustavat kielen syntaktisen tiivistämisen huippua. Korvaamalla sivulauseen finiittiverbi infiniittisellä verbimuodolla kieli mahdollistaa äärimmäisen informaatiotiheyden.
Esimerkiksi lauseenvastike 'asian tultua ilmi' korvaa konstruktion 'kun asia oli tullut ilmi', ja 'opiskelijan tekemä tutkielma' korvaa suhteellisen sivulauseen 'tutkielma, jonka opiskelija oli tehnyt'.
Historiallisesti lauseenvastikkeiden runsas käyttö kuului virkakielen ja korkean kirjallisen tyylin ihanteisiin.
Nykysuomen kielenhuolto kuitenkin varoittaa lauseenvastikkeiden liiallisesta kerrostamisesta ja ketjuttamisesta, sillä useiden nominaalimuotojen kasautuminen heikentää tekstin luettavuutta ja hämärtää tekijyyden ja aikasuhteiden suoraa hahmottamista.`,
    prompt: "Mistä nykyinen kielenhuolto varoittaa lauseenvastikkeiden käytössä?",
    options: [
      "A) Niiden käyttämisestä missään kirjallisessa tekstissä",
      "B) Liiallisesta ketjuttamisesta ja kerrostamisesta, mikä vaikeuttaa luettavuutta ja hämärtää aikasuhteita",
      "C) Niiden korvaamisesta aina englanninkielisillä lainasanoilla",
      "D) Niiden taivuttamisesta monikossa"
    ],
    correctAnswer: "B) Liiallisesta ketjuttamisesta ja kerrostamisesta, mikä vaikeuttaa luettavuutta ja hämärtää aikasuhteita",
    explanation: "Kielenhuolto varoittaa: 'lauseenvastikkeiden liiallisesta kerrostamisesta ja ketjuttamisesta, sillä useiden nominaalimuotojen kasautuminen heikentää tekstin luettavuutta'."
  },
  {
    id: "yl-r-9",
    subtest: "reading",
    title: "Tieteenfilosofia: Paradigmanvaihdokset ja tieteellinen realismi",
    passage: `KUHNIN INKOMMENSURABILITEETTI JA POPPERILAINEN FALSIFIKOINTI
Thomas Kuhnin teos Tieteellisten vallankumousten rakenne (1962) horjutti syvästi positivismin uskoa tieteen lineaarisesti kumuloituvaan edistykseen. Kuhn esitti tieteen etenevän normaalityön ja kriisien kautta kohti vallankumouksellisia paradigmanvaihdoksia.
Paradigmojen inkommensurabiliteetti eli yhteismitattomuus tarkoittaa, ettei eri aikakausien teorioita voida arvioida täysin puolueettomalla mittarilla, sillä havainnot ovat aina teoreettisesti latautuneita (theory-laden).
Kuhnin radikaali relativismi joutui kuitenkin ankaran kritiikin kohteeksi popperilaisen falsifioitavuuden ja tieteellisen realismin puolustajilta.
Realistit muistuttavat tieteen ennustus- ja teknologiakyvystä: lentokoneiden lentäminen ja rokotteiden toimivuus eivät ole pelkkiä sosiaalisia konstruktioita, vaan todistavat teorioiden vastaavan jollain objektiivisella tasolla todellisuutta.`,
    prompt: "Mihin tieteellisen realismin kannattajat vetoavat puolustaessaan tieteen objektiivisuutta Kuhnin relativismia vastaan?",
    options: [
      "A) Tutkijoiden henkilökohtaiseen uskonnollisuuteen",
      "B) Tieteen käytännön ennustusvoimaan ja teknologiseen toimivuuteen (kuten lentokoneet ja rokotteet)",
      "C) Kaikkien filosofisten teosten hylkäämiseen",
      "D) Äänestystuloksiin tiedeyhteisössä"
    ],
    correctAnswer: "B) Tieteen käytännön ennustusvoimaan ja teknologiseen toimivuuteen (kuten lentokoneet ja rokotteet)",
    explanation: "Realistit vetoavat: 'tieteen ennustus- ja teknologiakyvystä: lentokoneiden lentäminen ja rokotteiden toimivuus... todistavat teorioiden vastaavan... todellisuutta'."
  },
  {
    id: "yl-r-10",
    subtest: "reading",
    title: "Historiantutkimus: Suomen autonomian synty ja Porvoon maapäivät 1809",
    passage: `VALTIOPÄIVÄTOIMINTA PORVOOSSA: TRADITIO VAI UUDEN VALTION SYNTY?
Vuoden 1808–1809 Suomen sota irrotti alueen yli kuusisataavuotisesta Ruotsin valtakunnan yhteydestä ja liitti sen osaksi Venäjän keisarikuntaa. Porvoon valtiopäivillä maaliskuussa 1809 keisari Aleksanteri I vannoi hallitsijanvakuutuksen, jolla hän vahvisti Suomen uskonnon, perustuslait ja säätyjen erioikeudet.
Historioitsijoiden keskuudessa vallitsee edelleen nyanssieroja siitä, luotiinko Porvoossa uusi suomalainen valtio-organismi (kuten J. R. Danielson-Kalmari 1800-luvun lopun valtio-opillisessa puolustustaistelussa argumentoi) vai oliko kyseessä pelkkä valloitetun maakunnan liittäminen imperiumiin vanhat privilegeot vahvistamalla ilman tietoista suvereniteetin delegointia.
Joka tapauksessa hallitsijanvakuutus loi vankan oikeudellisen perustan suomalaiselle byrokratialle, senaatille ja oikeusjärjestykselle, jotka kykenivät 1800-luvun kuluessa kehittymään itsenäisen kansallisvaltion instituutioiksi.`,
    prompt: "Mikä oli Aleksanteri I:n hallitsijanvakuutuksen merkitys Suomen tulevalle kehitykselle?",
    options: [
      "A) Suomen välitön täydellinen venäläistäminen ja kielten kieltäminen",
      "B) Oikeudellisen perustan luominen omalle hallinnolle, senaatille ja instituutioille vanhat lait vahvistamalla",
      "C) Ruotsin vallan palauttaminen seuraavana vuonna",
      "D) Kaikkien verojen ja virastojen lakkauttaminen"
    ],
    correctAnswer: "B) Oikeudellisen perustan luominen omalle hallinnolle, senaatille ja instituutioille vanhat lait vahvistamalla",
    explanation: "Tekstissä todetaan vakuutuksen luoneen: 'vankan oikeudellisen perustan suomalaiselle byrokratialle, senaatille ja oikeusjärjestykselle'."
  },
  {
    id: "yl-r-11",
    subtest: "reading",
    title: "Neuropsykologinen tutkimus: Kaksikielisyys ja kognitiivinen reservi ikääntyessä",
    passage: `KIELELLISEN FLEKSIBILITEETIN NEURAALISET KORRELAATIT
Aivojen plastisuutta tutkivat pitkittäistutkimukset ovat toistuvasti osoittaneet, että aktiivinen elinikäinen useamman kielen käyttö viivästyttää neurodegeneratiivisten sairauksien, kuten Alzheimerin taudin, kliinisten oireiden puhkeamista keskimäärin 4–5 vuodella.
Tämä ilmiö ei estä aivojen orgaanista atrofiaa tai amyloidiplakkien kertymistä, vaan se vahvistaa aivojen niin sanottua kognitiivista reserviä.
Kaksikielisen henkilön aivot joutuvat jatkuvasti inhiboimaan ei-käytössä olevaa kielijärjestelmää ja säätelemään koodinvaihtoa prefrontaalisen aivokuoren toiminnanohjausverkostojen kautta.
Tämä jatkuva harjoitus lujittaa valkean aineen ratoja ja tehostaa vaihtoehtoisten hermoverkkojen kompensaatiomekanismeja patologisten muutosten ilmaantuessa.`,
    prompt: "Miten monikielisyys suojaa aivoja tutkimuksen mukaan?",
    options: [
      "A) Estämällä kokonaan aivojen fyysisen vanhenemisen ja solukuoleman",
      "B) Vahvistamalla kognitiivista reserviä ja hermoverkkojen kompensaatiokykyä toiminnanohjauksen kautta",
      "C) Korvaamalla lääkehoidon kaikissa sairaustapauksissa",
      "D) Parantamalla pelkästään kuulon tarkkuutta"
    ],
    correctAnswer: "B) Vahvistamalla kognitiivista reserviä ja hermoverkkojen kompensaatiokykyä toiminnanohjauksen kautta",
    explanation: "Tutkimus osoittaa, että monikielisyys 'vahvistaa aivojen niin sanottua kognitiivista reserviä' ja tehostaa hermoverkkojen kompensaatiomekanismeja."
  },
  {
    id: "yl-r-12",
    subtest: "reading",
    title: "Poliittinen teoria: Deliberatiivinen demokratia vs. agonistinen pluralismi",
    passage: `RATIONAALINEN KONSENSUS VAI LOPUTON KONFLIKTI?
Jürgen Habermasin deliberatiivinen demokratiateoria asettaa julkisen keskustelun ideaaliksi rationaalisen, valtasuhteista vapaan kommunikaation (herrschaftsfreier Diskurs), jonka tavoitteena on saavuttaa yhteinen konsensus paremman argumentin voimalla.
Chantal Mouffe on kuitenkin kritisoinut tätä näkemystä ankarasti 'agonistisen pluralismin' teoriassaan. Mouffen mukaan pyrkimys täydelliseen konsensukseen on paitsi saavuttamaton illuusio, myös vaarallinen yritys tukahduttaa politiikan väistämätön antagonistinen luonne.
Demokratian ensisijaisena tehtävänä ei ole erimielisyyksien hävittäminen, vaan vihollisasettelujen (antagonismi) muuntaminen legitiimiksi vastustajuudeksi (agonismi), jossa eriävät arvot saavat tilaa törmätä ilman yhteiskuntarauhan rikkoutumista.`,
    prompt: "Mitä Chantal Mouffe pitää demokratian ensisijaisena tehtävänä tekstissä?",
    options: [
      "A) Kaikkien erimielisyyksien ja puolueiden kieltämistä",
      "B) Vihollisasettelujen muuntamista legitiimiksi vastustajuudeksi ilman väkivaltaa",
      "C) Täydellisen yksimielisyyden saavuttamista joka asiassa",
      "D) Vallan keskittämistä asiantuntijoille"
    ],
    correctAnswer: "B) Vihollisasettelujen muuntamista legitiimiksi vastustajuudeksi ilman väkivaltaa",
    explanation: "Mouffen teorian mukaan tehtävä on: 'vihollisasettelujen (antagonismi) muuntaminen legitiimiksi vastustajuudeksi (agonismi)'."
  },
  {
    id: "yl-r-13",
    subtest: "reading",
    title: "Ekologinen taloustiede: BKT:n riittämättömyys ja planetaariset rajat",
    passage: `KASVUN RAJAT JA HYVINVOINNIN MITTAAMISEN UUDISTAMINEN
Bruttokansantuote (BKT) kehitettiin toisen maailmansodan jälkeisenä aikana mittaamaan kansantalouden rahamääräistä tuotantoa, ei inhimillistä hyvinvointia tai ekologista kestävyyttä.
BKT:n paradoksaalisuus paljastuu tilanteissa, joissa öljyonnettomuuden puhdistustyöt tai sairaanhoidon kustannukset kasvattavat BKT:ta, kun taas luonnonvarojen ehtyminen ja luontokato eivät näy taseissa lainkaan miinusmerkkisinä.
Tukholman resilienssikeskuksen määrittelemät planetaariset rajat osoittavat, että ihmiskunta on ylittänyt turvallisen toimintatilan jo useilla kriittisillä osa-alueilla, mukaan lukien ilmastonmuutos, typen ja fosforin kierto sekä biosfäärin eheys.
Ekologiset taloustieteilijät vaativat siirtymistä donitsitalouden tai GPI-mittarin (Genuine Progress Indicator) kaltaisiin järjestelmiin, jotka kytkevät taloudellisen toiminnan maapallon ekologiseen kantokykyyn.`,
    prompt: "Mikä on BKT:n keskeinen puute hyvinvoinnin mittarina tekstin mukaan?",
    options: [
      "A) Se ei osaa laskea rahasummia oikein",
      "B) Se laskee ympäristövahinkojen korjaamisen kasvuksi eikä huomioi luonnonvarojen kulumista ja biosfäärin tilaa",
      "C) Se huomioi liikaa kansalaisten vapaa-ajan onnellisuutta",
      "D) Se on käytössä vain kehitysmaissa"
    ],
    correctAnswer: "B) Se laskee ympäristövahinkojen korjaamisen kasvuksi eikä huomioi luonnonvarojen kulumista ja biosfäärin tilaa",
    explanation: "Tekstissä korostetaan, että BKT ei huomioi luontopääoman kulumista ja laskee jopa onnettomuuksien siivouskulut tuotannolliseksi kasvuksi."
  },
  {
    id: "yl-r-14",
    subtest: "reading",
    title: "Taidehistoria: Modernismin läpimurto ja Suomen avantgarde",
    passage: `TULENKANTAJAT JA KOSMOPOLIITTISUUDEN JULISTUS 1920-LUVULLA
Vuonna 1924 perustettu kirjallinen Tulenkantajat-ryhmä, keulakuvinaan Olavi Paavolainen, Katri Vala ja Mika Waltari, julisti ohjelmassaan: 'Ikkunat auki Eurooppaan!'
Nuoren tasavallan taiteilijasukupolvi pyrki repäisemään itsensä irti 1800-luvun kansallisromantiikan ja talonpoikaisrealismin perinteen ikeestä kohti urbaania modernismia, futuristista vauhdinhurmaa ja kone-estetiikkaa.
Ryhmän teoksissa heijastui toisaalta eksotiikan ja sensuellin elämänjanon ihannointi, toisaalta sotienvälisen ajan eksistentiaalinen levottomuus.
Vaikka Tulenkantajien hurmioitunut ekspressionismi ja kosmopoliittisuus kohtasi vanhoillisten kulttuuripiirien ankaran tuomion 'epäkansallisena rappiona', liike mursi pysyvästi suomalaisen taide-elämän provinsiaalisuuden ja avasi tien eurooppalaisille avantgarde-virtauksille.`,
    prompt: "Mitä Tulenkantajat-ryhmä vaati suomalaiselta taiteelta ja kulttuurilta?",
    options: [
      "A) Paluuta tiukkaan perinteiseen kansanrunouteen ja kalevalaiseen mittaan",
      "B) Avautumista Eurooppaan, irtiottoa kansallisromantiikasta ja urbaanin modernismin omaksumista",
      "C) Kaiken kirjallisuuden kääntämistä latinaksi",
      "D) Teknologian ja koneiden kieltämistä taiteessa"
    ],
    correctAnswer: "B) Avautumista Eurooppaan, irtiottoa kansallisromantiikasta ja urbaanin modernismin omaksumista",
    explanation: "Teksti kertoo ryhmän julistuksesta: 'Ikkunat auki Eurooppaan!' ja pyrkimyksestä 'irti 1800-luvun kansallisromantiikan... ikeestä kohti urbaania modernismia'."
  },
  {
    id: "yl-r-15",
    subtest: "reading",
    title: "Sopimusoikeudellinen analyysi: Kohtuuttomat sopimusehdot ja sovittelu",
    passage: `OIKEUSTOIMILAIN 36 § JA SOPIMUSSUHTEIDEN TASAPAINO
Varallisuusoikeudellisista oikeustoimista annetun lain (OikTL) 36 § muodostaa suomalaisen sopimusoikeuden keskeisimmän yleislausekkeen. Pykälän mukaan sopimusehtoa voidaan joko sovitella tai jättää se kokonaan huomioon ottamatta, mikäli ehdon soveltaminen johtaisi kohtuuttomuuteen.
Sopimusten sitovuuden periaate (pacta sunt servanda) on edelleen markkinatalouden fundamentti, mutta moderni sopimusoikeus tunnustaa osapuolten välisen tosiasiallisen epäsymmetrian.
Sovitteluharkinnassa otetaan huomioon sopimuksen koko sisältö, osapuolten asema, sopimusta tehtäessä vallinneet ja sen jälkeiset olosuhteet sekä muut seikat.
Oikeuskäytännössä kynnys elinkeinonharjoittajien välisen liikesopimuksen sovittelulle on huomattavasti korkeampi kuin kuluttajasopimuksissa, joissa heikomman osapuolen suoja korostuu.`,
    prompt: "Miten OikTL 36 §:n soveltaminen eroaa elinkeinonharjoittajien välillä verrattuna kuluttajasuhteisiin?",
    options: [
      "A) Kuluttajasopimuksia ei saa koskaan sovitella lainkaan",
      "B) Liikesopimusten sovittelukynnys on oikeuskäytännössä huomattavasti korkeampi heikomman osapuolen suojan puuttuessa samassa mitassa",
      "C) Kaikki sopimukset mitätöidään automaattisesti viiden vuoden välein",
      "D) Elinkeinonharjoittajat voivat aina yksipuolisesti muuttaa hintoja ilman rajoitusta"
    ],
    correctAnswer: "B) Liikesopimusten sovittelukynnys on oikeuskäytännössä huomattavasti korkeampi heikomman osapuolen suojan puuttuessa samassa mitassa",
    explanation: "Oikeuskäytännössä 'kynnys elinkeinonharjoittajien välisen liikesopimuksen sovittelulle on huomattavasti korkeampi kuin kuluttajasopimuksissa'."
  },
  {
    id: "yl-r-16",
    subtest: "reading",
    title: "Mediasosiologia: Valvontakapitalismi ja huomiotalouden mekanismit",
    passage: `SHOSHANA ZUBOFF JA KÄYTTÄYTYMISYLISÄÄN MONETISOINTI
Shoshana Zuboff lanseerasi käsitteen 'valvontakapitalismi' kuvaamaan talousjärjestystä, jossa inhimillinen kokemus kaapataan digitaalisen raaka-aineen lähteeksi.
Internetalustojen liiketoimintamalli ei perustu ainoastaan käyttäjien palvelujen parantamiseen, vaan massiivisen 'käyttäytymisylijäämän' (behavioral surplus) keräämiseen. Tätä dataa louhitaan, analysoidaan ja jalostetaan ennustetuotteiksi, jotka myydään mainostajille ja vaikuttajille käyttäytymismarkkinoilla.
Tämän mekanismin seurauksena alustojen arkkitehtuuri optimoidaan maksimoimaan käyttäjien viipymä ja kiihtymys, sillä voimakkaat negatiiviset affektit, kuten raivo ja pelko, sitouttavat huomiota tehokkaimmin.
Zuboff varoittaa tämän kehityksen uhkaavan paitsi yksilön psykologista itsemääräämisoikeutta, myös demokraattisen julkisuuden perustuksia.`,
    prompt: "Mihin digitaalisten alustojen ansaintalogiikka Zuboffin mukaan ensisijaisesti perustuu?",
    options: [
      "A) Kertaluonteisiin laitemyyntituloihin",
      "B) Käyttäytymisylijäämän keräämiseen ja sen muuttamiseen ennustetuotteiksi käyttäytymismarkkinoilla",
      "C) Käyttäjille maksettaviin kuukausipalkkioihin",
      "D) Pelkästään hyväntekeväisyyteen ja opiskelijatukeen"
    ],
    correctAnswer: "B) Käyttäytymisylijäämän keräämiseen ja sen muuttamiseen ennustetuotteiksi käyttäytymismarkkinoilla",
    explanation: "Valvontakapitalismi perustuu: 'massiivisen käyttäytymisylijäämän keräämiseen... jalostetaan ennustetuotteiksi, jotka myydään mainostajille'."
  },
  {
    id: "yl-r-17",
    subtest: "reading",
    title: "Metsäekologia: Jatkuvapeitteinen kasvatus vs. jaksollinen metsätalous",
    passage: `HIILENSIDONTA JA LAJISTOTURVA METSÄNKÄSITTELYN RATKAISUISSA
Suomen metsätaloudessa on vuosikymmeniä vallinnut jaksollinen kasvatusmalli, joka perustuu päätehakkuuseen, maanmuokkaukseen ja uudisistutukseen. Vaikka malli on taannut tasaisen teollisuuspuun saannin, se on johtanut boreaalisen lajiston uhanalaistumiseen ja maaperän hiilivarastojen merkittävään purkautumiseen avohakkuun jälkeisinä vuosina.
Vaihtoehdoksi noussut jatkuvapeitteinen kasvatus, jossa puustoa korjataan valikoivasti poimintahakkuilla ilman avohakkuita, säilyttää metsän mikroilmaston ja sienijuuristot ehjinä.
Tutkimustulokset osoittavat, että erityisesti paksuturpeisilla suometsillä jatkuva peitteisyys ehkäisee pohjaveden pinnan heilahtelua, vähentää vesistöihin huuhtoutuvia ravinteita ja pienentää turpeen hajoamisesta aiheutuvia kasvihuonekaasupäästöjä ilman kalliita ojitusinvestointeja.`,
    prompt: "Mikä on jatkuvapeitteisen kasvatuksen keskeinen ympäristöhyöty erityisesti suometsissä?",
    options: [
      "A) Metsän täydellinen kuivattaminen maanviljelyä varten",
      "B) Pohjaveden heilahtelun ja ravinnepäästöjen ehkäiseminen sekä turpeen hiilipäästöjen väheneminen",
      "C) Puiden kasvunopeuden kymmenkertaistuminen ilman aurinkoa",
      "D) Kaikkien sienten ja hyönteisten hävittäminen maaperästä"
    ],
    correctAnswer: "B) Pohjaveden heilahtelun ja ravinnepäästöjen ehkäiseminen sekä turpeen hiilipäästöjen väheneminen",
    explanation: "Teksti osoittaa: 'erityisesti paksuturpeisilla suometsillä jatkuva peitteisyys ehkäisee pohjaveden pinnan heilahtelua... ja pienentää turpeen hajoamisesta aiheutuvia kasvihuonekaasupäästöjä'."
  },
  {
    id: "yl-r-18",
    subtest: "reading",
    title: "Kognitiotiede: Kehollinen kognitio ja metaforateoria",
    passage: `GEORGE LAKOFF JA METAFORIEN KOKEELLINEN ALKUPERÄ
Klassinen kognitiotiede käsitteli ihmismieltä pitkään abstraktina tietokoneena, joka manipuloi mielivaltaisia symboleja formaalien sääntöjen mukaisesti.
George Lakoffin ja Mark Johnsonin kehittämä kehollisen kognition (embodied cognition) teoria osoitti tämän mekanistisen käsityksen kestämättömäksi. Heidän mukaansa inhimillinen käsitteistö ja abstraktit ajatukset juontavat suoraan fyysisistä, kehollisista sensomotorisista kokemuksistamme.
Metaforat eivät ole vain kaunokirjallisia koristeita, vaan ajattelun perusrakenteita: hahmotamme aikaa tilana ('aika kuluu eteenpäin'), tunteita pystyakselilla ('mieli on maassa' tai 'korkealla') ja argumentaatiota sodankäyntinä ('hän murskasi vastustajan väitteet').
Kieli heijastaa siten elimellisesti sitä, millaista on elää ja liikkua biologisessa ihmiskehossa gravitaation alaisena.`,
    prompt: "Miten kehollisen kognition teoria määrittelee metaforien luonteen tekstin mukaan?",
    options: [
      "A) Pelkiksi runoilijoiden keksimiksi koristeellisiksi sanoiksi",
      "B) Ajattelun fundamentaalisiksi rakenteiksi, jotka kumpuavat fyysisistä kehollisista kokemuksistamme",
      "C) Virheellisiksi kielioppivirheiksi, jotka tulisi poistaa kielestä",
      "D) Tietokoneiden ohjelmointikieliksi"
    ],
    correctAnswer: "B) Ajattelun fundamentaalisiksi rakenteiksi, jotka kumpuavat fyysisistä kehollisista kokemuksistamme",
    explanation: "Lakoffin teoria osoittaa: 'Metaforat eivät ole vain kaunokirjallisia koristeita, vaan ajattelun perusrakenteita: inhimillinen käsitteistö... juontaa suoraan fyysisistä, kehollisista sensomotorisista kokemuksistamme'."
  },
  {
    id: "yl-r-19",
    subtest: "reading",
    title: "Hallintotiede: New Public Management ja julkisen sektorin mittarointi",
    passage: `TULOSOHJAUKSEN PARADOKSAALISET VAIKUTUKSET ASIANTUNTIJATYYSSÄ
1990-luvulta lähtien länsimaisessa julkishallinnossa omaksuttu New Public Management (NPM) -oppi pyrki tehostamaan virastoja soveltamalla yksityisen sektorin liikkeenjohdollisia mekanismeja: tulosohjausta, suoritteiden kvantifiointia, kilpailuttamista ja asiakkuusajattelua.
Vaikka uudistukset toivat aluksi kustannustietoisuutta, järjestelmä on osoittautunut monin paikoin disfunktionaaliseksi.
Niin sanottu Goodhartin laki kiteyttää ongelman: kun mittarista tulee tavoite, se lakkaa olemasta hyvä mittari. Lääkärit, opettajat ja poliisit käyttävät yhä suuremman osan työajastaan byrokraattiseen raportointiin ja suoritemäärien keinotekoiseen optimointiin (gaming the system) varsinaisen substanssityön kustannuksella.
Tämä on johtanut ammatillisen autonomian kaventumiseen ja asiantuntijoiden motivaation murenemiseen.`,
    prompt: "Mitä Goodhartin laki tarkoittaa julkisen sektorin mittaroinnissa artikkelin kontekstissa?",
    options: [
      "A) Kaikkien virkamiesten palkat kaksinkertaistuvat vuosittain",
      "B) Kun mittarista tehdään tavoite, se menettää luotettavuutensa toiminnan ohjaajana ja johtaa raportoinnin manipulointiin",
      "C) Julkinen sektori tuottaa aina voittoa pörssissä",
      "D) Mittarit parantavat automaattisesti työntekijöiden terveyttä"
    ],
    correctAnswer: "B) Kun mittarista tehdään tavoite, se menettää luotettavuutensa toiminnan ohjaajana ja johtaa raportoinnin manipulointiin",
    explanation: "Goodhartin lain mukaan: 'kun mittarista tulee tavoite, se lakkaa olemasta hyvä mittari', johtaen keinotekoiseen optimointiin substanssin kärsiessä."
  },
  {
    id: "yl-r-20",
    subtest: "reading",
    title: "Yhteiskuntamaantiede: Alueellinen eriytyminen ja asuntomarkkinoiden polarisaatio",
    passage: `KAUPUNGISTUMISEN SPASIAALINEN TRIAGE SUOMESSA
Suomen aluekehitykselle on 2000-luvulla ollut ominaista kiihtyvä väestöllinen ja taloudellinen keskittyminen muutamille suurimmille kaupunkiseuduille, erityisesti Uudellemaalle, Pirkanmaalle ja Varsinais-Suomeen.
Tämä kehitys on luonut asuntomarkkinoille syvän epäsymmetrian: kasvukeskuksissa asuntokuntia kurittavat kohtuuttoman korkeat neliöhinnat ja vuokramenot, kun taas taantuvilla seuduilla asuntojen vakuusarvot ovat romahtaneet, mikä estää asukkaita saamasta pankkilainaa edes välttämättömiin peruskorjauksiin.
Ilmiötä on kutsuttu spatiaaliseksi triageksi: valtio joutuu priorisoimaan infrastruktuuri-investointeja ruuhkautuville vyöhykkeille samalla kun harvaanasutun maaseudun peruspalveluverkkoa karsitaan väestöpohjan huvetessa.
Tämä syventää maantieteellistä katkeruutta ja heijastuu suoraan äänestyskäyttäytymiseen.`,
    prompt: "Mikä seuraus asuntomarkkinoiden eriytymisellä on taantuvilla paikkakunnilla?",
    options: [
      "A) Asuntojen arvo nousee ennätystahtia",
      "B) Asuntojen vakuusarvot romahtavat, jolloin asukkaat eivät saa lainaa edes peruskorjauksiin",
      "C) Kaikki asukkaat ostavat viisi uutta asuntoa",
      "D) Pankit maksavat ilmaista tukea kaikille talonomistajille"
    ],
    correctAnswer: "B) Asuntojen vakuusarvot romahtavat, jolloin asukkaat eivät saa lainaa edes peruskorjauksiin",
    explanation: "Tekstissä todetaan: 'taantuvilla seuduilla asuntojen vakuusarvot ovat romahtaneet, mikä estää asukkaita saamasta pankkilainaa edes välttämättömiin peruskorjauksiin'."
  },
  {
    id: "yl-r-21",
    subtest: "reading",
    title: "Kulttuuriantropologia: Lahjatalous vs. hyödykemarkkinat",
    passage: `MARCEL MAUSS JA VASTAVUOROISUUDEN MORAALINEN PAKKO
Marcel Maussin klassikkoteos Lahja (1925) osoitti, ettei perinteisten yhteisöjen lahjananto koskaan edustanut pyyteetöntä altruismia. Lahjajärjestelmä muodostaa 'totaalisen sosiaalisen ilmiön' (fait social total), joka kietoo yhteen talouden, oikeuden, moraalin, uskonnon ja estetiikan.
Lahjaan sisältyy kolme universaalia velvollisuutta: velvollisuus antaa, velvollisuus ottaa vastaan ja velvollisuus korvata lahja vastalahjalla.
Toisin kuin anonyymit hyödykemarkkinat, joissa transaktio päättyy ja osapuolet vapautuvat toisistaan heti kun raha ja tavara vaihtavat omistajaa, lahjatalous luo ja ylläpitää jatkuvaa sosiaalista velkaa ja riippuvuussuhdetta.
Lahja sitoo ihmiset toisiinsa moraalisella liimalla, jota moderni atomisoitunut sopimusyhteiskunta kaipaa, mutta ei kykene puhtaasti rahallisesti tuottamaan.`,
    prompt: "Miten lahjatalouden suhde poikkeaa anonyymistä markkinatransaktiosta Maussin mukaan?",
    options: [
      "A) Lahjataloudessa ei koskaan anneta mitään materiaalista",
      "B) Lahja sitoo osapuolet jatkuvaan moraaliseen ja sosiaaliseen vastavuoroisuuden verkostoon, toisin kuin päättyvä rahakauppa",
      "C) Lahjan vastaanottaminen on aina ankarasti kiellettyä",
      "D) Lahjatalous toimii vain digitaalisissa valuutoissa"
    ],
    correctAnswer: "B) Lahja sitoo osapuolet jatkuvaan moraaliseen ja sosiaaliseen vastavuoroisuuden verkostoon, toisin kuin päättyvä rahakauppa",
    explanation: "Mauss osoittaa, että toisin kuin heti päättyvä kauppa, lahjatalous 'luo ja ylläpitää jatkuvaa sosiaalista velkaa ja riippuvuussuhdetta' sitoen ihmiset moraalisesti toisiinsa."
  },
  {
    id: "yl-r-22",
    subtest: "reading",
    title: "Tekoälyetiikka: Algoritminen vinouma ja opetusdatan epistemologia",
    passage: `HISTORIALLISTEN ENNAKKOLUULOJEN DIGITAALINEN SEDIMENTOITUMINEN
Koneoppimismallien legitimiteettiä perustellaan usein niiden matemaattisella objektiivisuudella ja ihmiselle tyypillisen tunteellisuuden puuttumisella. Tämä uskomus sivuuttaa kuitenkin sen epistemologisen tosiasian, että algoritmit oppivat historiallisesta datasta, joka on itsessään läpitunkevan vääristynyttä ja vinoutunutta.
Kun syväoppimisverkkoja koulutetaan rekrytointipäätöksiin, luotonmyöntöön tai rikosoikeudelliseen uusimisriskiarviointiin aiemmin tehtyjen inhimillisten ratkaisujen pohjalta, tekoäly ei ainoastaan toista menneitä rakenteellisia syrjintämalleja, vaan se formalisoi ja vahvistaa ne näennäisen neutraaliksi totuudeksi.
Mallien korjaaminen ei onnistu vain poistamalla arkaluontoisia muuttujia (kuten sukupuolta tai etnisyyttä), sillä monimutkaiset korrelaatiot ja proksimuuttujat (kuten postinumero tai harrastukset) palauttavat vinouman järjestelmään.`,
    prompt: "Miksi arkaluontoisten muuttujien poistaminen ei yksinään poista tekoälyn vinoumia tekstin mukaan?",
    options: [
      "A) Koska tietokoneet eivät osaa poistaa sarakkeita tiedostoista",
      "B) Koska muut proksimuuttujat ja monimutkaiset korrelaatiot palauttavat vinouman takaisin malliin",
      "C) Koska kaikki ohjelmoijat kieltäytyvät noudattamasta lakeja",
      "D) Koska tekoälyllä on oma vapaa tahto ja tunteet"
    ],
    correctAnswer: "B) Koska muut proksimuuttujat ja monimutkaiset korrelaatiot palauttavat vinouman takaisin malliin",
    explanation: "Tekstissä todetaan: 'monimutkaiset korrelaatiot ja proksimuuttujat (kuten postinumero tai harrastukset) palauttavat vinouman järjestelmään'."
  },
  {
    id: "yl-r-23",
    subtest: "reading",
    title: "Kirjallisuusteoria: Intertekstuaalisuus ja tekijän kuolema",
    passage: `ROLAND BARTHES JA LUKIJATYÖN SYNTY
Roland Barthes julisti esseessään Tekijän kuolema (1967), että perinteinen käsitys kirjailijasta teoksen ainoana merkityksen auktoriteettina ja luojana on porvarillisen individualismin jäänne.
Barthesin mukaan teksti ei ole yhden ihmisen nerouden suora ilmaus, vaan moniulotteinen avaruus, jossa kohtaavat ja kamppailevat lukemattomat aiemmat kirjoitukset, lainaukset ja kulttuuriset koodit.
Intertekstuaalisuus merkitsee sitä, ettei mikään teksti ole erillinen saari; jokainen lause on jo aiemmin lausutun kielen kierrätystä.
Tästä seuraa radikaali johtopäätös: tekijän kuolema on välttämätön hinta lukijan syntymälle. Tekstin yhtenäisyys ei sijaitse sen alkuperässä (kirjailijan mielessä), vaan sen päämäärässä eli lukijassa, joka kokoaa moninaiset merkityslangat yhteen kussakin historiallisessa luennassa.`,
    prompt: "Missä tekstin yhtenäisyys Barthesin teorian mukaan todellisuudessa sijaitsee?",
    options: [
      "A) Kustannusyhtiön sopimusehdoissa",
      "B) Päämäärässään eli lukijassa, joka kokoaa tekstin merkitykset, ei kirjailijan alkuperäisessä mielessä",
      "C) Sanakirjojen virallisissa määritelmissä",
      "D) Painokoneen teknisessä laadussa"
    ],
    correctAnswer: "B) Päämäärässään eli lukijassa, joka kokoaa tekstin merkitykset, ei kirjailijan alkuperäisessä mielessä",
    explanation: "Barthes esittää: 'Tekstin yhtenäisyys ei sijaitse sen alkuperässä (kirjailijan mielessä), vaan sen päämäärässä eli lukijassa'."
  },
  {
    id: "yl-r-24",
    subtest: "reading",
    title: "Valtiosääntöoikeus: Hätätilaoikeus ja valmiuslain soveltamiskriteerit",
    passage: `POIKKEUSOLOT JA PERUSOIKEUSJÄRJESTELMÄN VENYVYYS
Valmiuslain (1552/2011) tarkoituksena on poikkeusoloissa turvata väestön toimeentulo, maan talouselämä ja oikeusjärjestys sekä suojella kansalaisten perusoikeuksia.
Lain toimivaltuuksien käyttöönotto edellyttää valtioneuvoston ja tasavallan presidentin yhteistoiminnassa tekemää käyttöönottoasetusta, joka alistetaan välittömästi eduskunnan perustuslakivaliokunnan jälkitarkastukseen.
Perusoikeusdoktriinin mukaan poikkeusoloissakaan ei voida poiketa perusoikeuksien ydinalueesta, kuten oikeudesta elämään, kidutuksen kiellosta tai rikosoikeudellisesta laillisuusperiaatteesta (ehdottomat perusoikeudet).
Toimenpiteiden on aina oltava välttämättömiä, oikeasuhtaisia ja ajallisesti tarkoin rajattuja. Normaaliolojen lainsäädännön etusijaperiaate velvoittaa viranomaiset ensisijaisesti käyttämään tavallisia valtuuksia ennen poikkeuspykäliin turvautumista.`,
    prompt: "Mitkä ehdot valmiuslain mukaisten toimivaltuuksien käytölle asetetaan tekstin mukaan?",
    options: [
      "A) Niitä voidaan käyttää milloin tahansa ilman mitään rajoituksia",
      "B) Niiden on oltava välttämättömiä, oikeasuhtaisia ja ajallisesti rajattuja, eivätkä ne saa loukata ehdottomia perusoikeuksia",
      "C) Niitä saa käyttää vain sotilaallisen hyökkäyksen sattuessa, ei koskaan pandemioissa",
      "D) Eduskunta ei saa koskaan puuttua niiden soveltamiseen"
    ],
    correctAnswer: "B) Niiden on oltava välttämättömiä, oikeasuhtaisia ja ajallisesti rajattuja, eivätkä ne saa loukata ehdottomia perusoikeuksia",
    explanation: "Tekstissä korostetaan periaatteita: 'Toimenpiteiden on aina oltava välttämättömiä, oikeasuhtaisia ja ajallisesti tarkoin rajattuja' ja ehdottomia oikeuksia on kunnioitettava."
  },
  {
    id: "yl-r-25",
    subtest: "reading",
    title: "Yhteiskuntafilosofia: Tunnustuksen politiikka ja identiteetin rajat",
    passage: `AXEL HONNETH JA INTERSUBJEKTIIVISEN TUNNUSTUKSEN MUODOT
Kriittisen teorian edustaja Axel Honneth esittää teoksessaan Taistelu tunnustuksesta (1992), että yhteiskunnallisten konfliktien ja oikeudenmukaisuusvaatimusten syvimpänä käyttövoimana ei ole pelkkä materiaalinen resurssien uusjako, vaan loukatun arvokkuuden ja tunnustuksen puute.
Honneth erottaa kolme intersubjektiivisen tunnustuksen tasoa: emotionaalisen tunnustuksen (rakkaus ja ystävyys), joka rakentaa itsemyötätuntoa ja -luottamusta; oikeudellisen tunnustuksen (universaalit kansalaisoikeudet), joka takaa itsekunnioituksen moraalisena toimijana; sekä sosiaalisen arvostuksen (solidaarisuus), joka mahdollistaa oman panoksen kokemisen merkitykselliseksi yhteisössä.
Kun jokin näistä tasoista evätään – olipa kyseessä fyysinen väkivalta, oikeuksien riisto tai sosiaalinen leimaaminen – seurauksena on eksistentiaalinen nöyryytys, joka synnyttää vastarintaa.`,
    prompt: "Mitä seuraa Honnethin mukaan silloin, kun ihmiseltä evätään oikeudellinen tunnustus?",
    options: [
      "A) Hänen taloudellinen tulonsa nousee automaattisesti",
      "B) Hänen itsekunnioituksensa moraalisena ja tasavertaisena toimijana murenee",
      "C) Hän menettää kykynsä puhua mitään kieltä",
      "D) Ei mitään, sillä laeilla ei ole merkitystä ihmismielelle"
    ],
    correctAnswer: "B) Hänen itsekunnioituksensa moraalisena ja tasavertaisena toimijana murenee",
    explanation: "Honnethin teorian mukaan oikeudellinen tunnustus takaa 'itsekunnioituksen moraalisena toimijana', ja sen epääminen johtaa itsekunnioituksen romahtamiseen ja nöyryytykseen."
  },
  {
    id: "yl-r-26",
    subtest: "reading",
    title: "Psykopatologia: Trauma, dissosiaatio ja kerronnallinen eheys",
    passage: `POST-TRAUMAATTISEN KOKEMUKSEN SIRPALEISUUS JA NARRAATIO
Vakavan trauman neurobiologiset tutkimukset osoittavat, että hengenvaaran tai äärimmäisen kauhun hetkellä aivojen mantelitumakkeen (amygdala) ylivirittyminen lamauttaa aivoturson (hippokampus) normaalin muistin konsolidaatiotoiminnan.
Tämän seurauksena traumaattinen muisto ei tallennu elämäkerralliseen muistiin loogisena menneisyyden tapahtumaketjuna, vaan se pirstaloituu hajanaisiksi kehollisiksi aistimuksiksi, takaumiksi ja ahdistusreaktioiksi, joilta puuttuu kielellinen koodaus.
Traumaterapian keskeisenä tavoitteena on dissosioitujen muistisirpaleiden integrointi koherentiksi kerronnalliseksi narraatioksi.
Vasta kun potilas kykenee pukemaan tuskallisen kokemuksen sanoiksi ja sijoittamaan sen menneeseen aikamuotoon, aivot ymmärtävät uhkan olevan ohitse, mikä mahdollistaa autonomisen hermoston rauhoittumisen.`,
    prompt: "Miksi traumaattinen muisto ei tallennu normaalisti elämäkerralliseen muistiin tekstin mukaan?",
    options: [
      "A) Koska ihminen unohtaa aina kaiken viidessä minuutissa",
      "B) Koska mantelitumakkeen ylivirittyminen lamauttaa aivoturson muistin kielellisen konsolidaation",
      "C) Koska aivot eivät tarvitse muistia vaaratilanteessa",
      "D) Koska trauma parantaa kielellistä päättelyä heti"
    ],
    correctAnswer: "B) Koska mantelitumakkeen ylivirittyminen lamauttaa aivoturson muistin kielellisen konsolidaation",
    explanation: "Tekstissä todetaan: 'mantelitumakkeen... ylivirittyminen lamauttaa aivoturson... normaalin muistin konsolidaatiotoiminnan'."
  },
  {
    id: "yl-r-27",
    subtest: "reading",
    title: "Ekologinen antropologia: Perinnetieto ja alkuperäiskansojen luontosuhde",
    passage: `SAAMELAISTEN ÄRBEJIEHTU JA LUONNONVAROJEN KESTÄVÄ HALLINTA
Alkuperäiskansojen perinnetieto, saamelaisessa kontekstissa ärbejiehtu, ei edusta staattista kansanperinnettä, vaan sukupolvien yli kumuloitunutta, dynaamista ja paikkasidonnaista ekologista tietoa.
Ärbejiehtu kattaa laidunmaiden kiertorytmit, lumityyppien (kuten seie ja tsheevvi) tarkan terminologian ja lohikantojen tilan arvioinnin Tenojoen vesistössä.
Länsimainen luonnonsuojelukäsitys on perinteisesti perustunut ihmisen ja luonnon dikotomiaan, jossa luonto suojellaan eristämällä se ihmistoiminnalta suojelualueiksi.
Pohjoisessa tämä 'linnoitussuojelu' (fortress conservation) on toistuvasti törmännyt paikallisyhteisöjen oikeuksiin rajoittamalla perinteistä poronhoitoa ja pyyntiä, vaikka juuri saamelainen vuorovaikutteinen maankäyttö on todistettavasti ylläpitänyt tunturiluonnon monimuotoisuutta vuosituhansia.`,
    prompt: "Miten länsimainen 'linnoitussuojelu' poikkeaa saamelaisesta perinnetiedosta artikkelin mukaan?",
    options: [
      "A) Se ei käytä mitään tieteellisiä laitteita",
      "B) Se eristää luonnon ihmistoiminnalta, kun taas perinnetieto perustuu ihmisen ja luonnon vuorovaikutteiseen kestävään maankäyttöön",
      "C) Se kieltää kaiken teollisuuden Euroopassa",
      "D) Se suosii pelkästään avohakkuita"
    ],
    correctAnswer: "B) Se eristää luonnon ihmistoiminnalta, kun taas perinnetieto perustuu ihmisen ja luonnon vuorovaikutteiseen kestävään maankäyttöön",
    explanation: "Teksti osoittaa kontrastin: linnoitussuojelu 'eristää luonnon ihmistoiminnalta', kun taas saamelainen perinnetieto on 'vuorovaikutteista maankäyttöä', joka ylläpitää monimuotoisuutta."
  },
  {
    id: "yl-r-28",
    subtest: "reading",
    title: "Yhteiskuntahistoria: Hyvinvointivaltion universaaliusperiaatteen synty",
    passage: `RESURSSIPERUSTAINEN KOHDENTAMINEN VAI KAIKKIA KOSKEVA UNIVERSALISMI?
Pohjoismaisen sosiaalipolitiikan merkittävin erottava tekijä suhteessa anglosaksiseen liberaaliin malliin on universalismin periaate. Siinä missä liberaali malli perustuu tarveharkintaan ja etuuksien tiukkaan kohdentamiseen vain vähävaraisimmille (means-testing), pohjoismainen malli tarjoaa perusturvan, perusopetuksen ja terveydenhuollon yhtäläisenä kansalaisoikeutena koko väestölle tuloista riippumatta.
Gøsta Esping-Andersenin mukaan universalismin nerokkuus piilee sen poliittisessa kestävyydessä.
Kun myös keskiluokka ja hyvätuloiset saavat konkreettista vastinetta korkeille veroilleen laadukkaiden päiväkotien, koulujen ja lapsilisien muodossa, he ovat valmiita puolustamaan hyvinvointivaltion rahoitusta.
Pelkästään köyhille suunnatut palvelut muuttuvat helposti 'köyhiksi palveluiksi', joiden rahoitusta keskiluokkainen äänestäjäkunta on valmis leikkaamaan ensimmäisenä.`,
    prompt: "Miksi universalismin malli on Esping-Andersenin mukaan poliittisesti kestävämpi kuin tarveharkintainen malli?",
    options: [
      "A) Koska se ei maksa valtiolle mitään",
      "B) Koska myös keskiluokka hyötyy palveluista ja on siten valmis puolustamaan ja rahoittamaan verojärjestelmää",
      "C) Koska köyhät eivät saa siinä mitään etuuksia",
      "D) Koska verotusta ei tarvita lainkaan"
    ],
    correctAnswer: "B) Koska myös keskiluokka hyötyy palveluista ja on siten valmis puolustamaan ja rahoittamaan verojärjestelmää",
    explanation: "Esping-Andersen osoittaa: 'Kun myös keskiluokka... saa konkreettista vastinetta korkeille veroilleen... he ovat valmiita puolustamaan hyvinvointivaltion rahoitusta'."
  },
  {
    id: "yl-r-29",
    subtest: "reading",
    title: "Tieteenhistoria: Valistuksen dialektiikka ja instrumentaalinen järki",
    passage: `ADORNO, HORKHEIMER JA JÄRJEN MUUTTUMINEN HALLINNAKSI
Theodor W. Adornon ja Max Horkheimerin vuonna 1944 julkaisema Valistuksen dialektiikka esitti murskaavan analyysin länsimaisen modernisaation kääntöpuolesta. Kirjoittajat kysyivät, miksi ihmiskunta ei suinkaan astunut valistuksen lupaamaan universaalin vapauden ja inhimillisyyden aikakauteen, vaan vajosi barbariaan, totalitarismiin ja teollisen mittakaavan tuhoon toisessa maailmansodassa.
Heidän mukaansa valistuksen vapauttava järki korvautui vähitellen puhtaasti 'instrumentaalisella järjellä' (instrumentelle Vernunft), joka ei pohdi päämäärien oikeutusta tai moraalista hyvää, vaan keskittyy ainoastaan keinojen tekniseen optimointiin ja luonnon hallintaan.
Kun luonto alistetaan pelkäksi laskettavaksi ja hyödynnettäväksi objektiksi, sama välineellinen logiikka kääntyy väistämättä ihmistä itseään vastaan: yhteiskunta muuttuu hallintakoneistoksi, jossa inhimilliset suhteet typistyvät hyötynäkökohdiksi.`,
    prompt: "Miten Adorno ja Horkheimer määrittelevät instrumentaalisen järjen tragedian?",
    options: [
      "A) Ihmiset lakkasivat käyttämästä matematiikkaa",
      "B) Järki pelkistyi keinojen tekniseksi optimoinniksi ja luonnon hallinnaksi pohtimatta päämäärien moraalista oikeutusta",
      "C) Kaikki kirjat poltettiin 1800-luvulla",
      "D) Teollisuustuotanto lakkasi kokonaan olemasta kannattavaa"
    ],
    correctAnswer: "B) Järki pelkistyi keinojen tekniseksi optimoinniksi ja luonnon hallinnaksi pohtimatta päämäärien moraalista oikeutusta",
    explanation: "Instrumentaalinen järki 'ei pohdi päämäärien oikeutusta tai moraalista hyvää, vaan keskittyy ainoastaan keinojen tekniseen optimointiin ja luonnon hallintaan'."
  },
  {
    id: "yl-r-30",
    subtest: "reading",
    title: "Kansainvälinen oikeus: Suvereniteetin käsite ja suojeluvastuu (R2P)",
    passage: `WESTFALENIN JÄRJESTELMÄSTÄ HUMANITAARISEEN INTERVENTIOON
Vuoden 1648 Westfalenin rauha loi kansainvälisen oikeuden peruskiven: valtion alueellisen koskemattomuuden ja sisäisen suvereniteetin periaatteen, joka kieltää ulkopuolisia valtioita puuttumasta toisen valtion sisäisiin asioihin.
Kylmän sodan päättymisen jälkeen tapahtuneet kansanmurhat Ruandassa ja Srebrenicassa osoittivat kuitenkin vanhan suvereniteettikäsityksen sietämättömät rajat silloin, kun valtio syyllistyy omien kansalaistensa järjestelmälliseen tuhoamiseen.
Vuonna 2005 YK:n yleiskokouksessa vahvistettu suojeluvastuun doktriini (Responsibility to Protect, R2P) muotoili suvereniteetin uudelleen: suvereniteetti ei ole enää valtionloukkaamaton etuoikeus, vaan vastuu omien kansalaisten suojelemisesta.
Mikäli valtio on kyvytön tai haluton estämään sotarikoksia tai rikoksia ihmisyyttä vastaan, kansainvälisellä yhteisöllä on YK:n turvallisuusneuvoston valtuutuksella velvollisuus toimia, tarvittaessa jopa voimakeinoin.`,
    prompt: "Miten suojeluvastuun doktriini (R2P) muutti perinteistä valtion suvereniteetin käsitettä?",
    options: [
      "A) Se poisti kaikki valtiot maailmasta ja korvasi ne yhdellä maailmanhallituksella",
      "B) Se määritteli suvereniteetin oikeudesta vastuuksi omien kansalaisten suojelemisesta ja salli tarvittaessa kansainvälisen väliintulon",
      "C) Se kielsi YK:lta kaiken toimivallan konflikteissa",
      "D) Se palautti 1600-luvun monarkioiden absoluuttisen vallan"
    ],
    correctAnswer: "B) Se määritteli suvereniteetin oikeudesta vastuuksi omien kansalaisten suojelemisesta ja salli tarvittaessa kansainvälisen väliintulon",
    explanation: "R2P määritteli suvereniteetin uudelleen: 'suvereniteetti ei ole enää valtionloukkaamaton etuoikeus, vaan vastuu omien kansalaisten suojelemisesta'."
  }
];

export const ylintasoWriting = [
  // 20 High-Register Administrative Petitions / Formal Legal Appeals / Professional Critiques
  {
    id: "yl-w-1",
    subtest: "writing",
    taskType: "message",
    title: "Oikaisuvaatimus aluehallintovirastolle: Virkavalintapäätöksen kumoaminen",
    prompt: "Olet hakenut valtion tai kunnan korkeampaa johtavaa virkaa (esim. opetustoimen johtaja tai hallintopäällikkö). Valintapäätöksessä toimeen valittiin henkilö, jolla on vähemmän koulutusta ja työkokemusta kuin sinulla, ja valintakriteereissä sivuutettiin ilmoituksessa mainitut kelpoisuusvaatimukset. Laadi virallinen, hallintolain mukainen oikaisuvaatimus aluehallintovirastolle tai lautakunnalle.\n\nKäsittele kirjelmässä:\n- Päätös, johon haetaan oikaisua, ja asianosaisaseman peruste\n- Virantäytössä tapahtuneet menettelyvirheet (ansiovertailun puutteellisuus, perustuslain 125 §:n yleiset nimitysperusteet: taito, kyky ja koeteltu kansalaiskunto)\n- Vaatimus päätöksen kumoamisesta ja asian palauttamisesta uudelleen valmisteltavaksi.",
    minWords: 80,
    modelResponse: "Aluehallintoviraston kirjaamoon\n\nOIKAISUVAATIMUS\n\nAsia: Oikaisuvaatimus sivistystoimenjohtajan virkavalintapäätökseen (Kaupunginhallitus 14.10.2026, § 142)\n\nVaatimus:\nVaadin, että kaupunginhallituksen päätös 14.10.2026 § 142 kumotaan lainvastaisena ja asia palautetaan virkavalmisteluun uutta objektiivista ansiovertailua varten.\n\nPerustelut:\nOlen osallistunut kyseiseen virkahakuun täyttäen kaikki ilmoituksessa asetetut kelpoisuusehdot. Päätös loukkaa perustuslain 125 §:n 2 momentissa säädettyjä yleisiä nimitysperusteita, joiden mukaan valinnan tulee perustua taitoon, kykyyn ja koeteltuun kansalaiskuntoon.\n\nValituksi tulleella hakijalla on alempi korkeakoulututkinto ja viiden vuoden kokemus alalta, kun taas allekirjoittaneella on tohtorintutkinto hallintotieteistä sekä yli kymmenen vuoden menestyksekäs johtamiskokemus vastaavista vaativista hallintotehtävistä. Virkavalintamuistiosta ilmenevä ansiovertailu on suoritettu ilmeisen puutteellisesti ja keinotekoisesti painottaen seikkoja, joita ei ollut mainittu hakuilmoituksessa. Valintapäätös perustuu siten syrjivään ja epäasialliseen harkintavallan ylitykseen.\n\nHelsingissä 20. lokakuuta 2026\n\nDosentti Kaarlo Vuorinen\nHallintotieteiden tohtori"
  },
  {
    id: "yl-w-2",
    subtest: "writing",
    taskType: "message",
    title: "Lausunto eduskunnan valiokunnalle: Tekoälysääntelyn perusoikeusvaikutukset",
    prompt: "Toimit asiantuntijana oikeustieteellisessä tutkimuslaitoksessa tai ihmisoikeusjärjestössä. Eduskunnan perustuslakivaliokunta pyytää lausuntoa hallituksen esityksestä, joka koskee viranomaisten automatisoidun päätöksenteon laajentamista sosiaaliturvaetuuksissa. Laadi korkeatasoinen asiantuntijalausunto.\n\nKäsittele lausunnossa:\n- Automatisoidun päätöksenteon suhde hyvän hallinnon perusteisiin (perustuslaki 21 §) ja yhdenvertaisuuteen (perustuslaki 6 §)\n- Algoritmisen läpinäkyvyyden ja muutoksenhakuoikeuden turvaaminen kansalaiselle\n- Konkreettiset sääntelyehdotukset riskien minimoimiseksi ennen lain hyväksymistä.",
    minWords: 90,
    modelResponse: "Eduskunnan perustuslakivaliokunnalle\n\nASIAKIRJA: Asiantuntijalausunto hallituksen esityksestä eduskunnalle laiksi automatisoidusta päätöksenteosta julkishallinnossa (HE 188/2026 vp)\n\nKunnioitettava valiokunta,\n\nKiitän mahdollisuudesta lausua lakiluonnoksesta. Esitys automatisoidun päätöksenteon laajentamisesta massaluonteisiin sosiaaliturvaetuuksiin sisältää merkittäviä valtiosääntöoikeudellisia jännitteitä, joihin valiokunnan on kiinnitettävä erityistä huomiota.\n\nPerustuslain 21 § turvaa jokaiselle oikeuden hyvään hallintoon ja oikeusturvaan. Automatisoitu ratkaisutoiminta uhkaa heikentää hallinnon läpinäkyvyyttä ja perusteluvelvollisuutta, mikäli kansalaiselle ei kyetä aukottomasti osoittamaan algoritmisen päättelyn logiikkaa ja käytettyjä muuttujia yksilöllisessä muutoksenhaussa. Lisäksi riskinä on välillinen syrjintä (PL 6 §), mikäli opetusdatan vääristymät heijastuvat haavoittuvassa asemassa olevien vähemmistöjen toimeentuloon.\n\nEsitän valiokunnalle, että lakiehdotukseen sisällytetään ehdoton vaatimus ihmisen suorittamasta sisällöllisestä uudelleenarvioinnista aina, kun automaattinen päätös on asianosaiselle kielteinen tai harkinnanvarainen, sekä velvollisuus julkistaa järjestelmien lähdekoodi ja eettinen auditointiraportti.\n\nKunnioittavasti,\nProfessori Helena Lindqvist\nInformaatio-oikeuden tutkimusryhmä"
  },
  {
    id: "yl-w-3",
    subtest: "writing",
    taskType: "message",
    title: "Yliopiston rehtorille: Tutkimusrahoituksen leikkauksia vastustava vetoomus",
    prompt: "Toimit yliopiston professorikunnan ja tutkijayhteisön edustajana. Yliopiston hallitus suunnittelee mittavia leikkauksia humanistisen ja yhteiskuntatieteellisen tiedekunnan perusrahoitukseen strategisen uudelleenallokoinnin nimissä. Laadi yliopiston rehtorille ja hallitukselle argumentoitu vetoomus leikkausten peruuttamiseksi.\n\nKäsittele vetoomuksessa:\n- Yliopistolain mukainen sivistystehtävä ja tieteen vapauden periaate\n- Humanistisen ja yhteiskuntatieteellisen tutkimuksen korvaamaton merkitys kriittisen ajattelun, demokratian ja kriisinkestävyyden ylläpitäjänä\n- Lyhytnäköisen kvartaaliajattelun haitat yliopiston kansainväliselle maineelle ja houkuttelevuudelle.",
    minWords: 90,
    modelResponse: "Yliopiston rehtorille ja hallitukselle\n\nVETOOMUS perustutkimuksen ja sivistystehtävän turvaamiseksi strategisessa budjettiriihessä\n\nArvoisa rehtori,\n\nYliopistoyhteisömme on seurannut tyrmistyneenä hallituksen kaavailuja leikata humanistis-yhteiskuntatieteellisen tiedekunnan perusrahoitusta kymmenellä prosentilla. Tällainen toimenpide olisi kohtalokas isku yliopistomme maineelle ja tieteelliselle integriteetille.\n\nYliopistolain 2 §:n mukaan yliopiston tehtävänä on edistää vapaata tutkimusta sekä tieteellistä ja taiteellista sivistystä. Yliopisto ei ole liikeyritys, jonka arvoa voidaan mitata ainoastaan lyhyen aikavälin teknologisilla patenteilla tai ulkopuolisella yritysrahoituksella. Monimutkaistuvassa maailmassa, jossa demokraattiset instituutiot, etiikka ja kulttuurinen ymmärrys ovat jatkuvan paineen alaisina, ihmistieteiden tuottama syvällinen yhteiskunnallinen analyysi on kansallisen resilienssimme elinehto.\n\nPerustutkimuksen näivettäminen karkottaa kansainväliset huippututkijat ja rapauttaa monitieteisyyden, joka on myös luonnontieteiden ja teknologian innovaatioiden perusta. Vaadimme hallitusta hylkäämään suunnitellut kohdennetut leikkaukset ja sitoutumaan pitkäjänteiseen akateemiseen autonomiaan.\n\nTutkijayhteisön puolesta,\nProfessori Markus Cronstedt\nYliopistonlehtori Sirkka Tuomola"
  },
  {
    id: "yl-w-4",
    subtest: "writing",
    taskType: "message",
    title: "Hallintovalitus korkeimmalle hallinto-oikeudelle: Ympäristöluvan kumoaminen",
    prompt: "Kansalaisjärjestön tai paikallisen osakaskunnan juristina laadit valituskirjelmän korkeimmalle hallinto-oikeudelle (KHO). Vaadit kaivosyhtiölle myönnetyn ympäristöluvan kumoamista vesistöpäästöjen ja vaarantuneiden pohjavesialueiden vuoksi. Vaasan hallinto-oikeus hylkäsi aiemman valituksenne.\n\nKäsittele valituskirjelmässä:\n- Valituksen kohteena oleva hallinto-oikeuden päätös ja valituslupaperusteet (ennakkopäätösperuste ja ilmeinen virhe)\n- Ympäristönsuojelulain varovaisuusperiaatteen (YSL 20 §) ja vesipuitedirektiivin heikentämiskiellon rikkominen\n- Vaatimus luvan kumoamisesta tai toimeenpanon kieltämisestä välittömästi.",
    minWords: 90,
    modelResponse: "Korkeimmalle hallinto-oikeudelle\n\nVALITUSKIRJELMÄ JA TÄYTÄNTÖÖNPANON KIELTÄMISVAATIMUS\n\nMuutoksenhakija: Pro Vesistö ry\nAsia: Ympäristönsuojelulain mukainen ympäristölupa uraani- ja monimetallikaivokselle (Vaasan HAO 02.09.2026 nro 26/0412/1)\n\nVaatimukset:\n1. Korkeimman hallinto-oikeuden tulee myöntää valituslupa ja kumota Vaasan hallinto-oikeuden päätös sekä Aluehallintoviraston myöntämä ympäristölupa.\n2. Kaivoshankkeen koetoiminnan täytäntöönpano on kiellettävä välittömästi väliaikaisella määräyksellä asian käsittelyn ajaksi.\n\nPerusteet:\nAsiassa on kyse merkittävästä oikeuskysymyksestä koskien EU:n vesipuitedirektiivin mukaista heikentämiskieltoa (C-461/13, ns. Weser-tuomio). Hallinto-oikeus on sivuuttanut asiassa ympäristönsuojelulain 20 §:ssä säädetyn varovaisuusperiaatteen hyväksyessään sulfaattipitoisten jätevesien johtamisen luokitukseltaan erinomaiseen järvialueeseen ilman riittävää puhdistusteknologiaa. Riski alapuolisen pohjavesialueen pysyvästä pilaantumisesta on asiantuntijalausuntojen valossa ilmeinen ja peruuttamaton.\n\nKunnioittavasti,\nOTM, asianajaja Laura Manner\nValtuutettuna"
  },
  {
    id: "yl-w-5",
    subtest: "writing",
    taskType: "message",
    title: "Kirjallinen kantelu eduskunnan oikeusasiamiehelle: Terveydenhuollon hoitotakuun laiminlyönti",
    prompt: "Hyvinvointialueen asukkaana tai potilasjärjestön edustajana teet virallisen kantelun eduskunnan oikeusasiamiehelle. Hyvinvointialueen sairaala on järjestelmällisesti ylittänyt lakisääteisen kuuden kuukauden hoitotakuun erikoissairaanhoidossa ilman, että potilaille olisi tarjottu maksusitoumusta yksityiselle puolelle tai toiselle hyvinvointialueelle.\n\nKäsittele kantelussa:\n- Kantelun kohde (hyvinvointialueen terveyspalvelujen johto) ja sovellettava lainsäädäntö (terveydenhuoltolaki 51–53 §)\n- Hallinnon lainalaisuusperiaatteen (PL 2 § 3 mom) ja perusoikeuden riittäviin sosiaali- ja terveyspalveluihin (PL 19 § 3 mom) loukkaaminen\n- Pyyntö tutkia viranomaisen menettelyn lainmukaisuus ja ryhtyä tarvittaviin toimenpiteisiin.",
    minWords: 80,
    modelResponse: "Eduskunnan oikeusasiamiehelle\n\nKANTELU viranomaisen lainvastaisesta menettelystä\n\nKantelija: Varsinais-Suomen Potilasturvayhdistys ry\nKantelun kohde: Varsinais-Suomen hyvinvointialueen erikoissairaanhoidon johto\n\nIlmoitan tutkittavaksi Varsinais-Suomen hyvinvointialueen menettelyn terveydenhuoltolain 51–53 §:ssä säädetyn ehdottoman hoitotakuun laiminlyömisessä. Yli neljäsataa potilasta on jonottanut kiireetöntä leikkaushoitoa yli kahdeksan kuukautta, mikä ylittää selvästi lain asettaman kuuden kuukauden enimmäisajan.\n\nViranomainen on kieltäytynyt myöntämästä potilaille terveydenhuoltolain 54 §:n velvoittamia palveluseteleitä tai maksusitoumuksia toisille palveluntuottajille vedoten puhtaasti talousarviorajoitteisiin. Resurssipula ei kuitenkaan oikeuta poikkeamaan lakisääteisistä velvoitteista tai perustuslain 19 §:n 3 momentissa turvatusta oikeudesta riittäviin terveyspalveluihin. Menettely rikkoo räikeästi hallinnon lainalaisuusperiaatetta.\n\nPyydän oikeusasiamiestä tutkimaan johtavien viranhaltijoiden virkavelvollisuuksien noudattamisen ja antamaan asiassa huomautuksen.\n\nTurussa 11. marraskuuta 2026\nPuheenjohtaja Eero Salmela"
  },
  {
    id: "yl-w-6",
    subtest: "writing",
    taskType: "message",
    title: "Oikaisupyyntö Suomen Akatemialle: Arviointiprosessin esteellisyys",
    prompt: "Olet huippututkija, jonka johtaman konsortion mittava tutkimusapurahahakemus hylättiin Suomen Akatemian toimikunnassa. Hylkäysperusteista käy ilmi, että kansainvälisessä arviointipaneelissa toimi professori, joka on suora kilpailijasi ja jolla on julkaistu yhteisartikkeli rahoituksen saaneen kilpailevan ryhmän johtajan kanssa. Laadi virallinen oikaisupyyntö arviointilautakunnalle.\n\nKäsittele kirjelmässä:\n- Hallintolain esteellisyysperusteet (hallintolaki 28 §:n intressi- ja esteellisyysjäävit)\n- Objektiivisen asiantuntija-arvioinnin vaarantuminen\n- Vaatimus hakemuksen ottamisesta uuteen, puolueettomaan asiantuntija-arviointiin.",
    minWords: 80,
    modelResponse: "Suomen Akatemian hallitukselle\n\nOIKAISUPYYNTÖ tutkimushankkeen rahoituspäätökseen (Päätösnumero #SA-883921)\n\nHakija: Akatemiatutkija, dosentti Mikael Blomqvist\n\nPyydän hallintolain 7 b luvun nojalla oikaisua kulttuurin ja yhteiskunnan tutkimuksen toimikunnan hylkäävään rahoituspäätökseen ja vaadin hankkeeni ottamista uuteen riippumattomaan vertaisarviointiin arviointipaneelissa ilmenneen ilmeisen esteellisyyden vuoksi.\n\nHankkeeni arvioinnista vastanneessa kansainvälisessä paneelissa keskeisenä asiantuntijana toimi professori X. Hänellä on hallintolain 28 §:n 1 momentin 7 kohdan mukainen esteellisyysasema (yleislausekejäävi), sillä hän on viimeisen kahden vuoden aikana julkaissut kolme yhteisartikkelia kyseisessä haussa täyden rahoituksen saaneen konsortion johtajan kanssa. Paneelilausunnon negatiivinen palaute oli epäasiallisen subjektiivista ja ristiriidassa hakemukseni kansainvälisten julkaisumetriikoiden kanssa.\n\nPuolueettomuusvaatimuksen loukkaaminen vaarantaa Akatemian päätöksenteon legitimiteetin. Hakemus tulee arvioida uudelleen ilman esteellisiä asiantuntijoita.\n\nEspoossa 5. marraskuuta 2026\nMikael Blomqvist"
  },
  {
    id: "yl-w-7",
    subtest: "writing",
    taskType: "message",
    title: "Kunnallisvalitus hallinto-oikeudelle: Kaavamuutoksen kumoaminen luontoarvojen vuoksi",
    prompt: "Kansalaisaktiivina ja alueen kiinteistönomistajana laadit kunnallisvalituksen maankäyttö- ja rakennuslain nojalla kaupunginvaltuuston päätöksestä hyväksyä asemakaavamuutos, joka hävittää kaupungin ainoan jäljellä olevan liito-oravien elinympäristön ja vihersormen uuden ostoskeskuksen tieltä.\n\nKäsittele valituksessa:\n- Valitusoikeus ja valituksen määräaika (MRL 191 §)\n- Maankäyttö- ja rakennuslain 54 §:n asemakaavan sisältövaatimusten rikkominen (luonnonympäristön vaaliminen ja virkistysalueiden riittävyys)\n- Luonnonsuojelulain liitteen IV(a) tiukasti suojeltujen lajien lisääntymis- ja levähdyspaikkojen heikentämiskielto.",
    minWords: 85,
    modelResponse: "Hämeenlinnan hallinto-oikeudelle\n\nKUNNALLISVALITUS\n\nValittaja: Asunto Oy Kuusirinne osakkaat\nValituksen kohde: Riihimäen kaupunginvaltuuston päätös 28.09.2026 § 88 (Harjunrinteen asemakaavan muutos)\n\nVaatimus:\nVaadimme, että kaupunginvaltuuston päätös kumotaan lainvastaisena maankäyttö- ja rakennuslain 197 §:n nojalla.\n\nPerustelut:\nValtuuston hyväksymä kaavamuutos on maankäyttö- ja rakennuslain 54 §:n 2 momentin vastainen, sillä kaava ei täytä luonnonympäristön vaalimista ja riittävien virkistysalueiden turvaamista koskevia sisältövaatimuksia. Alueelta hakattavaksi osoitettu metsikkö muodostaa ELY-keskuksen lausunnossaan vahvistaman liito-oravan (Pteromys volans) keskeisen lisääntymis- ja levähdyspaikan. Luonnonsuojelulain 49 § kieltää ehdottomasti kyseisten paikkojen heikentämisen ja hävittämisen. Kaavaselostuksessa esitetyt kompensaatiotoimet ovat riittämättömiä eivätkä perustu luotettavaan luontokartoitukseen.\n\nValtuusto on ylittänyt harkintavaltansa ja tehnyt päätöksen puutteellisten selvitysten varassa.\n\nRiihimäellä 18. lokakuuta 2026\nAsiamiehenä: Varatuomari Antero Kivi"
  },
  {
    id: "yl-w-8",
    subtest: "writing",
    taskType: "message",
    title: "Lausunto oikeusministeriölle: Sananvapauden ja maalittamisen rajanveto rikoslaissa",
    prompt: "Toimit journalistijärjestön tai viestintäoikeuden tutkijaryhmän edustajana. Oikeusministeriö valmistelee rikoslain uudistusta koskien virkamiehiin ja toimittajiin kohdistuvan systemaattisen maalittamisen kriminalisointia. Laadi analyyttinen lausunto lainsäädäntöhankkeesta.\n\nKäsittele lausunnossa:\n- Sananvapauden suoja demokratiassa (PL 12 §, EIS 10 artikla) ja julkisen vallan kritiikin sietovelvollisuus\n- Maalittamisen ja järjestäytyneen vihakampanjoinnin aiheuttamat vakavat uhat oikeuslaitoksen toiminnalle ja vapaalle lehdistölle\n- Täsmällisyys- ja tarkkarajaisuusvaatimus rikoslainsäädännössä (rikosoikeudellinen laillisuusperiaate PL 8 §).",
    minWords: 90,
    modelResponse: "Oikeusministeriön lainvalmisteluosastolle\n\nLAUSUNTO arviomuistiosta: Maalittamisen rikosoikeudellinen sääntely (OM 042/2026)\n\nSuomen Journalistiliitto kiittää mahdollisuudesta lausua maalittamisen kriminalisointia koskevasta muistiosta. Ilmiö, jossa viranomaisia, tutkijoita ja toimittajia pyritään vaientamaan koordinoidulla häirinnällä, on vakava uhka avoimelle kansalaisyhteiskunnalle.\n\nLainsäädännössä on kuitenkin noudatettava äärimmäistä pidättyväisyyttä perustuslain 8 §:ssä turvatun rikosoikeudellisen laillisuusperiaatteen vuoksi. Tunnusmerkistön on oltava poikkeuksellisen tarkkarajainen, jotta se ei kriminalisoi legitiimiä vallanpitäjien julkista arvostelua tai journalistista tutkintaa. Euroopan ihmisoikeustuomioistuimen vakiintuneen käytännön mukaan poliitikoilla ja julkista valtaa käyttävillä virkamiehillä on korostunut velvollisuus sietää kovaakin arvostelua.\n\nEhdotamme, että erillisen epämääräisen maalittamispykälän sijaan korotetaan laittoman uhkauksen ja vainoamisen rangaistusasteikkoja silloin, kun teko kohdistuu henkilöön hänen yhteiskunnallisen tehtävänsä vuoksi.\n\nKunnioittavasti,\nSananvapausvaliokunnan puolesta,\nPääsihteeri Tuula Vanamo"
  },
  {
    id: "yl-w-9",
    subtest: "writing",
    taskType: "message",
    title: "Vastine tasa-arvovaltuutetulle: Epäily palkkasyrjinnästä organisaatiossa",
    prompt: "Toimit suuren pörssiyrityksen henkilöstöjohtajana (CHRO). Tasa-arvovaltuutettu on pyytänyt yritykseltänne selvitystä entisen työntekijän tekemästä kantelusta, jossa väitetään yrityksen rikkoneen tasa-arvolain mukaista samapalkkaisuusperiaatetta maksaessaan naispuoliselle markkinointipäällikölle alhaisempaa palkkaa kuin mieskollegoilleen. Laadi muodollinen ja juridisesti perusteltu vastine.\n\nKäsittele kirjelmässä:\n- Tehtävien vaativuuden ja toimenkuvien vertailu (vastuualueet, budjetti, alaiset)\n- Palkkaeron hyväksyttävät, sukupuolesta riippumattomat perusteet (koulutus, erityisosaaminen, suoriutuminen)\n- Yrityksen tasa-arvosuunnitelma ja säännölliset palkkakartoitukset.",
    minWords: 85,
    modelResponse: "Tasa-arvovaltuutetun toimistolle\n\nASIA: Selvityspyyntö koskien palkkasyrintäväitettä (Dnro TAS 341/2026)\n\nNordic Innovations Oyj antaa kunnioittavasti seuraavan selvityksen entisen työntekijän A:n palkkausta koskevassa asiassa.\n\nYrityksemme kiistää rikkoneensa naisten ja miesten välisestä tasa-arvosta annetun lain 8 §:n syrjintäkieltoa. Kantelija vertaa palkkaansa kansainvälisen myynnin johtajaan B:hen. Vaikka molemmilla on nimikkeessään 'johtaja', tehtävät eivät ole samanarvoisia lain tarkoittamassa mielessä. B vastaa 40 miljoonan euron tulosyksiköstä globaalisti ja johtaa 25 hengen tiimiä ympärivuorokautisessa asiakasvastuussa, kun taas A:n vastuulla oli kotimaan viestinnän koordinointi ilman suoraa tulos- tai henkilöstövastuuta.\n\nKyseessä on toimenkuvien objektiiviseen vaativuuserotteluun perustuva palkkaero. Yrityksessämme on voimassa oleva tasa-arvosuunnitelma ja säännöllinen palkkakartoitus, jotka eivät osoita perusteettomia sukupuolittuneita palkkaeroja.\n\nEspoossa 28. lokakuuta 2026\nHenkilöstöjohtaja Camilla Ahlström"
  },
  {
    id: "yl-w-10",
    subtest: "writing",
    taskType: "message",
    title: "Kirjelmä Kilpailu- ja kuluttajavirastolle: Määräävän markkina-aseman väärinkäyttö",
    prompt: "Edustat kotimaista itsenäisten ohjelmistoyritysten liittoa. Teet toimenpidepyynnön Kilpailu- ja kuluttajavirastolle (KKV) monikansallisen teknologiakonsernin toiminnasta. Yhtiö sitoo hallitsevan käyttöjärjestelmänsä yhteyteen oman maksupalvelunsa ja perii kilpailijoilta kohtuuttomia komissioita sulkien kilpailijoita markkinoilta.\n\nKäsittele kirjelmässä:\n- Kilpailulain 7 §:n ja SEUT 102 artiklan mukainen määräävän markkina-aseman väärinkäyttö\n- Keinotekoiset markkinoille pääsyn esteet, sidontakäytännöt ja kohtuuttomat ehdot\n- Vaatimus tutkinnan aloittamisesta ja väliaikaisten kieltojen asettamisesta.",
    minWords: 90,
    modelResponse: "Kilpailu- ja kuluttajaviraston kirjaamoon\n\nTOIMENPIDEPYYNTÖ kilpailulain 7 §:n rikkomisesta\n\nToimenpidepyynnön tekijä: Suomen Digitaaliset Innovaatiot ry\nKohteena oleva elinkeinonharjoittaja: Global Cloud Platforms Finland Oy / emoyhtiö\n\nPyydämme virastoa ryhtymään viipymättä kilpailulain mukaisiin toimenpiteisiin kohteena olevan yrityksen harjoittaman määräävän markkina-aseman räikeän väärinkäytön vuoksi mobiilisovellusten jakelumarkkinoilla.\n\nYhtiöllä on yli 85 prosentin markkinaosuus mobiiliekosysteemissä, mikä muodostaa kiistattoman määräävän markkina-aseman. Yhtiö velvoittaa sopimusehdoissaan kaikki sovelluskehittäjät käyttämään yksinomaan omaa maksunvälitysjärjestelmäänsä ja perii 30 prosentin kohtuuttoman komission estäen kolmansien osapuolten maksupalveluiden integroinnin. Tällainen sidonta ja syrjivä hinnoittelu rikkoo suoraan kilpailulain 7 §:n 1 ja 4 kohtaa sekä SEUT 102 artiklaa estäen tehokkaan hintakilpailun ja vahingoittaen kuluttajia.\n\nVaadimme KKV:ta määräämään väliaikaisen kiellon kyseisille sopimusehdoille.\n\nHelsingissä 3. marraskuuta 2026\nPuheenjohtaja Jari Koskinen"
  },
  {
    id: "yl-w-11",
    subtest: "writing",
    taskType: "message",
    title: "Oikaisuvaatimus Verohallinnolle: Konserniavustuksen hylkäämisen kumoaminen",
    prompt: "Toimit suuren teollisuuskonsernin verojohtajana. Verohallinto on hylännyt verotarkastuksen yhteydessä tytäryhtiöiden välisen konserniavustuksen vähennyskelpoisuuden vedoten keinotekoiseen verosuunnitteluun (VML 28 §:n veronkiertosäännös). Laadi verotuksen oikaisulautakunnalle argumentoitu oikaisuvaatimus.\n\nKäsittele kirjelmässä:\n- Konserniavustuksesta annetun lain edellytysten täyttyminen (omistusosuus, tilikausien yhtenevyys)\n- Liiketaloudelliset syyt ja todellinen taloudellinen substanssi transaktioissa\n- VML 28 §:n soveltamiskynnyksen ylittymättömyys korkeimman hallinto-oikeuden ennakkopäätösten valossa.",
    minWords: 85,
    modelResponse: "Verotuksen oikaisulautakunnalle\n\nOIKAISUVAATIMUS yhteisön tuloverotukseen (Verovuosi 2025)\n\nVerovelvollinen: Teräs & Kone Oyj (Y-tunnus 1234567-8)\n\nVaatimus:\nVaadimme, että Verohallinnon jälkiverotuspäätös kumotaan ja konserniavustuksesta annetun lain mukainen 4,2 miljoonan euron konserniavustus hyväksytään emoyhtiön vähennyskelpoiseksi kuluksi ja tytäryhtiön tuloksi.\n\nPerustelut:\nKaikki konserniavustuslain 2–7 §:ssä säädetyt muodolliset ja aineelliset edellytykset täyttyvät: omistusosuus on 100 prosenttia ja yhtiöiden tilikaudet ovat päättyneet samanaikaisesti. Verohallinnon vetoaminen VML 28 §:n veronkiertosäännökseen on perusteeton. Järjestelylle on osoitettu kiistattomat liiketaloudelliset syyt: tytäryhtiön pääomarakenteen vahvistaminen ja kansainvälisen vientiprojektin rahoitusvajeen kattaminen.\n\nKorkeimman hallinto-oikeuden vakiintuneen käytännön (KHO 2017:145) mukaan laissa nimenomaisesti sallitun konserniavustusjärjestelmän hyödyntäminen ei voi sellaisenaan muodostaa veronkiertoa ilman keinotekoisia erillistoimia. Päätös tulee kumota lainvastaisena.\n\nHelsingissä 9. marraskuuta 2026\nVerojohtaja Olli Rantamäki"
  },
  {
    id: "yl-w-12",
    subtest: "writing",
    taskType: "message",
    title: "Valitus Tietosuojavaltuutetun toimistolle: Terveystietojen lainvastainen käsittely",
    prompt: "Edustat työntekijäliittoa. Työnantaja on ottanut käyttöön toimistossa tekoälypohjaisen läsnäolo- ja mielialaseurantajärjestelmän (kasvojentunnistuskamerat ja stressitasomittarit), joka kerää arkaluonteisia biometrisia ja terveystietoja ilman nimenomaista suostumusta. Laadi valitus tietosuojavaltuutetulle.\n\nKäsittele valituksessa:\n- EU:n yleisen tietosuoja-asetuksen (GDPR) 9 artiklan erityisten henkilötietoryhmien käsittelykielto\n- Työelämän tietosuojalain rajoitukset työnantajan valvontaoikeudelle\n- Vaatimus käsittelyn välittömästä kieltämisestä ja hallinnollisen seuraamusmaksun määräämisestä.",
    minWords: 85,
    modelResponse: "Tietosuojavaltuutetun toimistoon\n\nVALITUS JA TOIMENPIDEPYYNTÖ henkilötietojen lainvastaisesta käsittelystä\n\nIlmoittaja: Toimihenkilöunioni ry\nKohteena oleva rekisterinpitäjä: FinTech Analytics Oy\n\nSaatetaan tietosuojavaltuutetun tutkittavaksi FinTech Analytics Oy:n työpaikalla käyttöönottama biometrinen seurantajärjestelmä. Yhtiö on asentanut työtiloihin kasvojentunnistuskamerat, jotka analysoivat työntekijöiden ilmeitä ja vireystilaa suorituskykymittareina.\n\nMenettely rikkoo räikeästi GDPR:n 9 artiklaa, jonka mukaan biometristen ja terveydentilaa koskevien tietojen käsittely on lähtökohtaisesti kiellettyä. Työsuhteessa vallitsevan alisteisen aseman vuoksi työntekijän antama suostumus ei voi koskaan olla GDPR:n vaatimalla tavalla vapaaehtoista. Lisäksi laki yksityisyyden suojasta työelämässä kieltää työntekijän jatkuvan teknisen valvonnan työaikana.\n\nPyydämme tietosuojavaltuutettua määräämään järjestelmän välittömään käyttökieltoon GDPR 58 artiklan nojalla sekä määräämään yritykselle tehokkaan hallinnollisen seuraamusmaksun.\n\nHelsingissä 12. marraskuuta 2026\nLakimies Tarja Hiltunen"
  },
  {
    id: "yl-w-13",
    subtest: "writing",
    taskType: "message",
    title: "Muistio puolustusministeriölle: Huoltovarmuuden ja kriittisen infrastruktuurin suojaaminen",
    prompt: "Toimit turvallisuuspolitiikan ja geopoliittisten riskien erikoistutkijana. Laadit asiantuntijamuistion puolustusministeriön ja työ- ja elinkeinoministeriön yhteiselle työryhmälle koskien ulkomaisten valtiollisten toimijoiden kiinteistö- ja infrastruktuuriomistuksia Suomessa.\n\nKäsittele muistiossa:\n- Hybridivaikuttamisen ja sabotaasin uhkakuvat kriittisen infrastruktuurin (satamat, energiaverkot, tietoliikennekaapelit) lähellä\n- Nykyisen maanhankintalain aukot bulvaanijärjestelyiden tunnistamisessa\n- Konkreettiset suositukset pakkolunastusmenettelyiden virtaviivaistamiseksi ja strategisten kohteiden suojavyöhykkeiksi.",
    minWords: 90,
    modelResponse: "Puolustusministeriön strategiselle osastolle\n\nASIANTUNTIJAMUISTIO: Kansallisen turvallisuuden ja kriittisen infrastruktuurin suojan aukot kiinteistöomistuksissa\n\nGeopoliittisen toimintaympäristön pysyvä kiristyminen Itämeren alueella edellyttää kansallisen lainsäädäntömme välitöntä päivittämistä vastaamaan laaja-alaisen hybridivaikuttamisen uhkiin.\n\nNykyinen ulkomaalaisten kiinteistönhankintojen luvanvaraisuuslaki (470/2019) on osoittautunut riittämättömäksi estämään strategisten kohteiden hallintaa monimutkaisten monikansallisten yritys- ja bulvaanirakenteiden kautta. Kiinteistöomistukset sähkönsiirron solmukohtien, tutka-asemien ja merikaapelien rantautumispaikkojen välittömässä läheisyydessä luovat vihollisvaltiolle mahdollisuuden reaaliaikaiseen signaalitiedusteluun ja sabotaasin esivalmisteluun kriisitilanteessa.\n\nEsitän työryhmälle kolmea toimenpidettä: 1) Ehdottoman maanhankintakiellon asettamista EU/ETA-alueen ulkopuolisille tahoille kriittisen infrastruktuurin suojavyöhykkeillä, 2) Taannehtivan valtiollisen lunastusoikeuden laajentamista korvauksettomana silloin, kun omistus muodostaa välittömän turvallisuusuhan, sekä 3) Yrityskauppojen valvonnan kytkemistä suoraan suojelupoliisin arviointiin.\n\nKunnioittavasti,\nErikoistutkija Jussi Peltola"
  },
  {
    id: "yl-w-14",
    subtest: "writing",
    taskType: "message",
    title: "Vastine lääketieteellisen tiedekunnan eettiselle toimikunnalle: Kliinisen lääketutkimuksen korjaussuunnitelma",
    prompt: "Toimit vastuullisena tutkijana (Principal Investigator) laajassa syöpälääketutkimuksessa. Eettinen toimikunta on antanut tutkimussuunnitelmastanne kielteisen lausunnon vedoten potilaiden riittämättömään informoituun suostumukseen ja lumelääkeryhmän eettisiin ongelmiin. Laadi korjattu ja argumentoitu vastine toimikunnalle.\n\nKäsittele kirjelmässä:\n- Helsingin julistuksen eettisten periaatteiden noudattaminen\n- Potilastiedotteen selkiyttäminen ja suostumusmenettelyn kaksivaiheisuus\n- Placebo-ryhmän korvaaminen parhaalla saatavilla olevalla nykyhoidolla (standard of care) hengenvaaran välttämiseksi.",
    minWords: 85,
    modelResponse: "Helsingin yliopistollisen sairaalan eettiselle toimikunnalle\n\nVASTINE JA KORJATTU TUTKIMUSSUUNNITELMA: Onkologinen faasin III lääketutkimus IMMUNO-CELL-26\n\nVastuullinen tutkija: Dosentti Marjut Saastamoinen\n\nKiitämme toimikuntaa arvokkaista huomioista koskien tutkimussuunnitelmamme eettistä kestävyyttä. Olemme päivittäneet tutkimusprotokollan vastaamaan täysimääräisesti toimikunnan vaatimuksia ja Helsingin julistuksen periaatteita.\n\n1. Lumelääkkeen poistaminen: Olemme luopuneet puhtaasta placebo-kontrolliryhmästä. Vertailuryhmän potilaille annetaan kokeellisen molekyylin sijasta kansainvälisten hoitosuositusten mukainen paras mahdollinen vakiintunut solunsalpaajahoito (standard of care), jolloin kenenkään hengenpelastavaa hoitoa ei viivytetä.\n2. Tietoon perustuva suostumus: Potilastiedote on kirjoitettu uudelleen selkokielelle potilasjärjestön edustajien avustuksella. Olemme lisänneet tutkimukseen 48 tunnin harkinta-ajan ennen suostumusasiakirjan allekirjoittamista sekä nimenneet riippumattoman potilasasiamiehen lisäkysymyksiä varten.\n\nPyydämme toimikuntaa hyväksymään korjatun tutkimussuunnitelman kliinisen vaiheen aloittamiseksi.\n\nHelsingissä 2. marraskuuta 2026\nDosentti Marjut Saastamoinen"
  },
  {
    id: "yl-w-15",
    subtest: "writing",
    taskType: "message",
    title: "Muistio ulkoasiainvaliokunnalle: Arktisen alueen sopimusjärjestelmän tulevaisuus",
    prompt: "Toimit kansainvälisen oikeuden professorina. Eduskunnan ulkoasiainvaliokunta valmistelee Suomen uutta arktista strategiaa tilanteessa, jossa Arktisen neuvoston toiminta on halvaantunut suurvaltajännitteiden vuoksi. Laadi valiokunnalle analyysi arktisen oikeusjärjestyksen tulevaisuudesta.\n\nKäsittele muistiossa:\n- YK:n merioikeusyleissopimuksen (UNCLOS) sitovuus mannermerjalueiden ja Koillisväylän hallinnassa\n- Arktisen neuvoston roolin mureneminen ja alueen sotilaallinen varustelukierre\n- Suomen rooli kansainvälisen ympäristönormiston ja alkuperäiskansojen aseman puolustajana monenkeskisessä diplomatiassa.",
    minWords: 90,
    modelResponse: "Eduskunnan ulkoasiainvaliokunnalle\n\nASIANTUNTIJALAUSUNTO: Arktisen alueen monenkeskisen oikeusjärjestyksen hajoaminen ja Suomen strategiset valinnat\n\nArktisen alueen poikkeuksellinen rauha ja yhteistyö (ns. arktinen ekseptionalismi) on tullut tiensä päähän. Arktisen neuvoston toiminnan vaikeutuminen on jättänyt alueelle vaarallisen institutionaalisen tyhjiön samalla kun ilmaston lämpeneminen avaa uusia laivaväyliä ja fossiilisia luonnonvaroja sotilaallisen kilpailun kohteeksi.\n\nSuomen ulkopolitiikan ehdottomana ankkurina tulee säilyä YK:n merioikeusyleissopimus (UNCLOS). Alueelliset kiistat mannerjalustoista ja navigointioikeuksista Koillisväylällä on ratkaistava kansainvälisen oikeuden, ei voimapolitiikan ehdoilla. Vaikka turvallisuuspoliittinen yhteistyö Naton puitteissa on vahvistunut, Suomen tulee aktiivisesti estää Arktiksen täydellinen militarisoituminen.\n\nSuosittelen, että Suomi ajaa Arktisen neuvoston ympäristötyöryhmien ja Saamelaisneuvoston kaltaisten alkuperäiskansaelinten työn jatkamista erillisissä ad hoc -formaateissa ilman että oikeudellisista ilmastotavoitteista tingitään.\n\nKunnioittavasti,\nProfessori Henrik Stenberg"
  },
  {
    id: "yl-w-16",
    subtest: "writing",
    taskType: "message",
    title: "Kirjelmä Finanssivalvonnalle: Sisäpiirintiedon laiton ilmaiseminen ja markkinoiden manipulointi",
    prompt: "Toimit pörssiyhtiön compliance-johtajana tai sijoittajasuojajärjestön lakimiehenä. Teet ilmoituksen Finanssivalvonnalle (Fiva) havaitusta epäilyttävästä kaupankäynnistä ennen merkittävää yrityskauppajulkistusta. Osakkeen volyymi ja johdannaishinnat nousivat poikkeuksellisesti sisäpiiripiirin ulkopuolisten toimijoiden tileillä.\n\nKäsittele kirjelmässä:\n- Markkinoiden väärinkäyttöasetuksen (MAR, EU N:o 596/2014) 10 ja 14 artiklan loukkaukset\n- Kaupankäyntidatan tilastollinen poikkeavuus ja sisäpiiriluettelon vuotoriskit\n- Pyyntö käynnistää virallinen tutkinta ja takavarikoida laittomat kurssivoitot.",
    minWords: 85,
    modelResponse: "Finanssivalvonnan markkinavalvontaosastolle\n\nTUTKINTAPYYNTÖ sisäpiirintiedon väärinkäytöstä ja markkinoiden manipuloinnista (MAR)\n\nIlmoittaja: Suomen Arvopaperisäästäjien Liitto ry\nKohdeyhtiö: Nordic Biotech Oyj (kaupankäyntitunnus: NBIOT)\n\nPyydämme Finanssivalvontaa käynnistämään välittömän tutkinnan koskien Nordic Biotech Oyj:n osakkeella ja osto-optioilla käytyä kauppaa 12.–14. lokakuuta 2026 ennen 15.10. julkistettua kansainvälistä ostotarjousta.\n\nKaupankäyntivolyymi monikertaistui ilman julkisia uutisia ja osakekurssi nousi 28 prosenttia kolme päivää ennen tiedotetta. Lisäksi johdannaismarkkinoilla havaittiin useita poikkeuksellisen suuria call-optio-ostoja hallintarekisteröityjen tilien kautta. Nämä havainnot viittaavat suoraan markkinoiden väärinkäyttöasetuksen (MAR 596/2014) 14 artiklan kieltämään laittomaan sisäpiirintiedon hyödyntämiseen ja ilmaisemiseen.\n\nVaadimme virastoa selvittämään sisäpiiriluetteloon merkittyjen henkilöiden viestinnän ja asettamaan epäillyt varat vakuustakavarikkoon.\n\nHelsingissä 24. lokakuuta 2026\nJohtava lakimies Ville Voutilainen"
  },
  {
    id: "yl-w-17",
    subtest: "writing",
    taskType: "message",
    title: "Vastine Museovirastolle: Suojelupäätöksen purkaminen kiinteistön käyttötarkoituksen muuttamiseksi",
    prompt: "Toimit kiinteistösijoitusyhtiön edustajana tai arkkitehtina. Museovirasto on esittänyt historiallisesti merkittävän 1950-luvun teollisuusrakennuksen asettamista rakennusperinnön suojelemisesta annetun lain mukaiseen suojeluun. Rakennus on ollut tyhjillään 15 vuotta, pahoin vaurioitunut ja kärsii homeesta. Laadi vastine ELY-keskukselle ja Museovirastolle.\n\nKäsittele kirjelmässä:\n- Rakennusperintölain 8 §:n kohtuuttomuuskriteeri kiinteistön omistajalle\n- Rakennuksen korjauskelvottomuus ja mikrobiologiset terveyshaitat asiantuntijalausuntojen valossa\n- Kompromissiehdotus: julkisivun keskeisten arkkitehtonisten elementtien säilyttäminen ja dokumentointi uudisrakennuksen yhteydessä.",
    minWords: 85,
    modelResponse: "Uudenmaan ELY-keskuksen ympäristö ja luonnonvarat -vastuualueelle\n\nVASTINE Museoviraston suojeluesitykseen koskien entistä Tehdaskiinteistöä (Dnro UUDELY/412/2026)\n\nKiinteistö Oy Teollisuuskortteli antaa kunnioittavasti seuraavan lausunnon Museoviraston tekemään rakennussuojeluesitykseen.\n\nYhtiö ymmärtää rakennuksen teollisuushistoriallisen arvon, mutta vastustaa täysimittaista suojelua rakennusperinnön suojelemisesta annetun lain 8 §:n vastaisena kohtuuttomana rasitteena. Rakennus on seissyt kylmillään viisitoista vuotta. Riippumattomien rakenne- ja sisäilmatutkimusten mukaan kantavat betonirakenteet ovat karbonatisoituneet vaarallisesti ja laaja sädesienikasvusto tekee rakennuksen saneeraamisesta terveelliseksi teknisesti mahdotonta ilman rakenteiden lähes täydellistä purkamista.\n\nEhdotamme kompromissia: kaavamuutoksessa suojellaan ja entisöidään tiilijulkisivun historiallinen torniosa ja pääportaikko samalla kun haitalliset siipirakennukset korvataan modernilla, energiatehokkaalla asuinrakentamisella.\n\nHelsingissä 1. marraskuuta 2026\nToimitusjohtaja Ralf Ekström"
  },
  {
    id: "yl-w-18",
    subtest: "writing",
    taskType: "message",
    title: "Lausunto sosiaali- ja terveysministeriölle: Eutanasialainsäädännön reunaehdot",
    prompt: "Toimit Lääkäriliiton tai bioetiikan neuvottelukunnan puheenjohtajana. Ministeriö pyytää lausuntoa kansalaisaloitteesta, joka vaatii eutanasian ja avustetun itsemurhan laillistamista sietämättömästi kärsiville terminaalivaiheen potilaille. Laadi moniääninen ja perusteellinen lausunto.\n\nKäsittele lausunnossa:\n- Itsemääräämisoikeuden (autonomia) ja elämän pyhyyden/koskemattomuuden jännite lääkärinetiikassa\n- Palliatiivisen hoidon ja saattohoidon puutteet Suomessa ennen mahdollista lakimuutosta\n- Mahdollisen lain tiukat reunaehdot: vapaaehtoisuus, toistuva pyyntö, kaksi toisistaan riippumatonta asiantuntijalääkäriä ja lääkärin kieltäytymisoikeus omantunnonsyistä.",
    minWords: 90,
    modelResponse: "Sosiaali- ja terveysministeriölle\n\nLAUSUNTO kansalaisaloitteesta KAA 4/2026 vp: Eutanasian laillistaminen ja saattohoidon kehittäminen\n\nSuomen Lääkäriliitto kiittää lausuntopyynnöstä. Kysymys eutanasiasta koskettaa lääkärin ammattietiikan syvimpiä perusteita, joissa potilaan autonomian kunnioittaminen ja velvollisuus suojella elämää asettuvat vastakkain.\n\nLiitto korostaa, että ensisijainen inhimillinen ja yhteiskunnallinen velvollisuus on taata korkeatasoinen, kärsimystä lievittävä palliatiivinen sedaatio ja saattohoito yhdenvertaisesti koko maassa. Tällä hetkellä saattohoidon saatavuus on Suomessa alueellisesti erittäin kirjavaa. Ennen kuin saattohoidon resurssit ovat kunnossa, on olemassa vaara, että eutanasia näyttäytyy potilaalle ainoana pakotienä heitteillejätön pelossa.\n\nMikäli lainsäätäjä päättää edetä lakiesityksen kanssa, lakiin on kirjattava ehdottomat suojamekanismit: diagnosoitu parantumaton terminaalivaiheen sairaus, vapaaehtoinen ja dokumentoitu toistuva pyyntö ilman ulkoista painetta, psykiatrinen konsultaatio sekä lääkärin täysi oikeus kieltäytyä toimenpiteestä omantunnonsyistä.\n\nKunnioittavasti,\nPuheenjohtaja, professori Niilo Koski"
  },
  {
    id: "yl-w-19",
    subtest: "writing",
    taskType: "message",
    title: "Kirjelmä kuluttaja-asiamiehelle: Monikansallisen teknologiajätin viherpesu markkinoinnissa",
    prompt: "Toimit ympäristöjuridiikkaan erikoistuneen kansalaisjärjestön lakimiehenä. Teet toimenpidepyynnön kuluttaja-asiamiehelle monikansallisen polttoaineyhtiön markkinointikampanjasta, jossa fossiilista dieseliä myydään väitteillä '100 % ilmastoneutraali' ja 'luontoa parantava' epämääräisiin hiilikompensaatiohankkeisiin vedoten. Laadi juridinen kirjelmä.\n\nKäsittele kirjelmässä:\n- Kuluttajansuojalain 2 luvun harhaanjohtavan ja totuudenvastaisen markkinoinnin kielto\n- EU:n viherväittämiä koskeva direktiivi (Green Claims Directive) ja täsmällisen todennettavuuden vaatimus\n- Vaatimus markkinoinnin kieltämisestä sakon uhalla.",
    minWords: 85,
    modelResponse: "Kuluttaja-asiamiehelle / Kilpailu- ja kuluttajavirasto\n\nTOIMENPIDEPYYNTÖ harhaanjohtavasta ympäristömarkkinoinnista (viherpesu)\n\nIlmoittaja: Ympäristöoikeuden Keskus ry\nMarkkinoija: Oil & Energy Nordic Oy\n\nSaatetaan kuluttaja-asiamiehen tutkittavaksi Oil & Energy Nordic Oy:n valtakunnallinen mainoskampanja, jossa yhtiön fossiilipohjaista polttoainetta markkinoidaan sanamuodoilla 'Täysin hiilineutraali valinta' ja 'Aja ilman ilmastovaikutusta'.\n\nKuluttajansuojalain 2 luvun 6 § kieltää totuudenvastaisten tai harhaanjohtavien tietojen antamisen. Väite hiilineutraaliudesta perustuu globaaleihin metsityskompensaatiohankkeisiin, joiden lisäisyyttä, pysyvyyttä ja todellisia päästövähennyksiä ei ole riippumattomasti todennettu. Fossiilisen polttoaineen palaminen vapauttaa kiistatta hiilidioksidia ilmakehään. Markkinointi antaa kuluttajalle virheellisen kuvan kulutuksen ekologisesta haitattomuudesta rikkoen suoraan EU:n viherväitedirektiivin ja oikeuskäytännön asettamia tiukkoja vaatimuksia.\n\nVaadimme kuluttaja-asiamiestä kieltämään kyseisen markkinoinnin jatkamisen 100 000 euron uhkasakon voimalla.\n\nHelsingissä 6. marraskuuta 2026\nToiminnanjohtaja, OTM Annika Vauras"
  },
  {
    id: "yl-w-20",
    subtest: "writing",
    taskType: "message",
    title: "Virkamiesmuistio pääministerin kanslialle: Julkisen talouden kestävyysvaje ja rakenneuudistukset",
    prompt: "Toimit valtiovarainministeriön kansantalousosaston ylijohtajana. Laadit strategisen taustamuistion hallituksen puoliväliriiheen Suomen julkisen talouden pitkän aikavälin kestävyysvajeesta ja väestön ikääntymisen aiheuttamista paineista.\n\nKäsittele muistiossa:\n- Huoltosuhteen heikkeneminen ja sosiaali- ja terveysmenojen automaattinen kasvu suhteessa bruttokansantuotteeseen\n- Pelkkien sopeutustoimien (juustohöyläleikkaukset) riittämättömyys ilman tuottavuutta ja työllisyysastetta nostavia rakenneuudistuksia\n- Konkreettiset toimenpidekokonaisuudet: työurien pidentäminen, työperäisen maahanmuuton nopeuttaminen ja julkisen sektorin digitalisaatio.",
    minWords: 90,
    modelResponse: "Valtioneuvoston kansliaan / Pääministerille\n\nSTRATEGINEN MUISTIO: Julkisen talouden kestävyysvaje ja rakenteelliset sopeutustarpeet 2027–2035\n\nSuomen julkisen talouden rakenteellinen alijäämä uhkaa muodostua pysyväksi ilman määrätietoisia toimia. Huoltosuhteen jyrkkä heikkeneminen – eläkeikäisten määrän kasvu suhteessa työikäiseen väestöön – aiheuttaa hyvinvointialueiden sote-menoihin automaattisen menopaineen, jota nykyinen noin yhden prosentin trendikasvu ei kykene rahoittamaan.\n\nValtiovarainministeriö muistuttaa, että pelkät menoleikkaukset (ns. juustohöyläys) eivät ratkaise ongelmaa, vaan heikentävät pahimmillaan kotimaista kysyntää ja koulutuspääomaa. Tarvitaan kolme rinnakkaista rakenteellista ratkaisua: 1) Työperäisen maahanmuuton lupaprosessien radikaali nopeuttaminen työllisyysasteen nostamiseksi yli 78 prosentin, 2) Korkeakoulutettujen opintojen aloittamisiän varhentaminen ja työurien pidentäminen alusta, sekä 3) Hyvinvointialueiden rutiinitoimintojen aito digitalisaatio ja hallintokerrosten karsiminen.\n\nKestävyysvajeen kurominen umpeen edellyttää puoluerajat ylittävää parlamentaarista sitoutumista yli vaalikausien.\n\nYlijohtaja Seppo Anttila\nValtiovarainministeriö"
  },

  // 10 Rigorous Academic / Philosophical Argumentative Essays
  {
    id: "yl-w-21",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Yhteiskuntasopimusteoria ja suvereniteetin rajat kriisiaikoina",
    prompt: "Kirjoita syvällinen filosofis-oikeustieteellinen essee aiheesta: 'Hobbesilainen turvallisuusvaltio vastaan lockelainen yksilönvapaus modernien kriisien aikakaudella'.\n\nKäsittele tekstissä:\n- Thomas Hobbesin Leviathanin ja John Locken yhteiskuntasopimusten keskeiset erot vallan legitiimiydessä\n- Miten nykyiset kriisit (pandemiat, ilmastohätätila, hybridisota) houkuttelevat keskittämään valtaa poikkeustilamekanismeilla\n- Missä kulkee perustuslaillinen raja, jonka jälkeen valtion suojelu muuttuu kansalaisvapauksien tukahduttamiseksi\n- Oma synteesisi vapauden ja turvallisuuden dialektiikasta.",
    minWords: 140,
    modelResponse: "Länsimaisen poliittisen filosofian fundamentaalein jännite kiteytyy kysymykseen valtion olemassaolon perimmäisestä tarkoituksesta. Thomas Hobbesille valtion synty merkitsi pakotietä luonnontilan 'kaikkien sodasta kaikkia vastaan': suvereeni Leviathan luodaan takaamaan fyysinen turvallisuus, ja tämän suojan vastineeksi kansalaiset luovuttavat luonnollisen vapautensa lähes rajoituksetta hallitsijalle. John Locke sen sijaan ankkuroi yhteiskuntasopimuksen ihmisen luovuttamattomiin luonnonoikeuksiin – elämään, vapauteen ja omaisuuteen. Lockelaisessa traditiossa valtio on ainoastaan luottamusmies, jonka valta on ehdollisesti sidottu näiden perusoikeuksien vaalimiseen; mikäli suvereeni kääntyy kansalaisiaan vastaan, kansalla on moraalinen oikeus vastarintaan.\n\n2020-luvun monikriisit – globaalit pandemiat, ilmastokatastrofin kiihtyminen ja kyberhybridisodankäynti – ovat nostaneet hobbesilaisen houkutuksen uudelleen politiikan keskiöön. Kriisin nimissä kansalaiset ovat valmiita hyväksymään liikkumisvapauden rajoituksia, laajamittaista digitaalista biometrista valvontaa ja poikkeustilalainsäädännön normalisoimista. Vaarana on Giorgio Agambenin kuvaama poikkeustilan institutionalisoituminen: väliaikaiseksi tarkoitetusta hallintakoneiston venytyksestä tulee uusi pysyvä normaali, jossa parlamentaarinen kontrolli marginalisoituu asiantuntijavallan tieltä.\n\nDemokraattisen oikeusvaltion elinehto on tiedostaa, ettei turvallisuus ole vapaudesta irrallinen päämäärä, vaan sen välttämätön edellytys. Mikäli vapaus uhrataan turvallisuuden alttarille, valtio kadottaa saman legitimiteetin, jota se pyrki suojelemaan. Perustuslaillinen normikontrolli ja ehdottomien ihmisoikeuksien loukkaamattomuus muodostavat sen rajapinnan, jota edes eksistentiaalisen kriisin hetkellä ei saa ylittää."
  },
  {
    id: "yl-w-22",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Tekoälyn ontologia ja luovuuden käsite taiteessa",
    prompt: "Kirjoita analyyttinen essee tekoälyn ja inhimillisen luovuuden suhteesta aiheesta: 'Voiko algoritmi luoda aitoa taidetta, vai onko generatiivinen tekoäly ainoastaan kulttuurisen datan peilausta?'\n\nKäsittele tekstissä:\n- Immanuel Kantin ja Walter Benjaminin taidekäsitykset (nerous, taideteoksen aura, mekaaninen toisinnettavuus)\n- Miten suuret kielimallit ja diffuusiomallit tuottavat teoksia (tilastolliset korrelaatiot vs. eksistentiaalinen kokemus ja ruumiillisuus)\n- Taiteilijan roolin muutos kuraattoriksi ja promptaajaksi\n- Johtopäätös: Mitä ihmisen luovuudesta jää jäljelle automaation aikakaudella.",
    minWords: 140,
    modelResponse: "Generatiivisen tekoälyn huikea esiinmarssi on pakottanut meidät määrittelemään uudelleen inhimillisen kulttuurin pyhimmän linnakkeen: taiteellisen luovuuden. Kun neuroverkot kykenevät sekunneissa säveltämään sinfonioita Bachin tyyliin tai generoimaan fotorealistisia maalauksia Rembrandtia jäljitellen, herää ontologinen kysymys siitä, mitä 'luominen' perimmältään tarkoittaa.\n\nImmanuel Kant määritteli Arvostelukyvyn kritiikissään aidon taiteen vapaan hengen neroudeksi, joka antaa säännöt taiteelle ilman ulkoista mekaanista kaavaa. Walter Benjamin puolestaan puhui taideteoksen 'aurasta' – sen ainutkertaisesta läsnäolosta ajassa ja paikassa, joka kytkeytyy teoksen syntyhistoriaan ja rituaaliseen perinteeseen. Generatiiviselta tekoälyltä puuttuu tämä aura täydellisesti. Neuroverkko ei koe tuskaa, iloa, kuolevaisuuden pelkoa tai rakkauden kaipuuta; se ei tiedä, mitä se tuottaa. Se operoi moniulotteisessa vektoriavaruudessa laskien pelkkiä todennäköisyyksiä ja optimoiden sanojen tai pikseleiden tilastollista jakautumaa miljoonien ihmisten tuottamien teosten pohjalta. Se on toisin sanoen menneen inhimillisen kulttuurin giganttinen peili, ei uuden merkityksen lähde.\n\nTästä huolimatta tekoäly ei tuhoa taidetta, vaan muuttaa sen tekotapaa samalla tavoin kuin valokuvaus mullisti maalaustaiteen 1800-luvulla. Taiteilijan rooli siirtyy teknisestä suorittamisesta käsitteelliseen kuratointiin, eettiseen valintaan ja kontekstualisointiin. Taiteen arvo ei ole lopputuloksen pikseleissä, vaan tekijän ja kokijan välisessä inhimillisessä vuoropuhelussa – tiedossa siitä, että teoksen taustalla on toinen hauras, tunteva olento."
  },
  {
    id: "yl-w-23",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Tieteellisen tiedon legitimiteetti ja totuudenjälkeinen aika",
    prompt: "Kirjoita tieteenfilosofinen ja sosiologinen essee aiheesta: 'Episteeminen auktoriteetti, tieteellinen konsensus ja populismin nousu'.\n\nKäsittele tekstissä:\n- Tieteellisen tiedon luonne fallibilistisena ja itseään korjaavana prosessina (Peirce, Popper)\n- Miksi tieteen epävarmuuden avoin tunnustaminen kääntyy populistisessa retoriikassa epäpätevyyden syytökseksi\n- Sosiaalisen median algoritmit ja tiedollinen relativismi ('jokaisella on oma totuutensa')\n- Miten luottamus tieteeseen voidaan palauttaa polarisoituneessa yhteiskunnassa.",
    minWords: 140,
    modelResponse: "Moderni länsimainen yhteiskunta nojaa perustaltaan valistuksen perintöön: ajatukseen siitä, että julkisen päätöksenteon ja todellisuuskäsityksemme tulee nojata rationaaliseen, koeteltuun asiantuntijatietoon. Viime vuosina tämä episteeminen auktoriteetti on kuitenkin ajautunut ennennäkemättömään legitimiteettikriisiin, jota usein luonnehditaan 'totuudenjälkeiseksi ajaksi'.\n\nTieteen syvin olemus, kuten Charles Sanders Peirce ja Karl Popper osoittivat, on fallibilistinen: tiede ei tuota muuttumattomia dogmeja, vaan parhaiten perusteltuja hypoteeseja, jotka ovat aina alttiita kumoamiselle ja korjaamiselle uusien havaintojen myötä. Tämä tieteen suurin vahvuus ja rehellisyys osoittautuu kuitenkin sen suurimmaksi haavoittuvuudeksi populistisessa julkisuudessa. Kun tutkijat pandemian tai ilmastokriisin aikana päivittävät suosituksiaan uuden datan valossa, populistinen retoriikka leimaa tämän epävarmuuden eliitin valehteluksi tai osaamattomuudeksi. Tilalle tarjotaan mustavalkoisia narratiiveja, salaliittoteorioita ja intuitiivisia 'vaihtoehtoisia faktoja', jotka vahvistavat ihmisten identiteettiä ja ennakkoluuloja.\n\nSosiaalisen median huomiotalous kiihdyttää tätä kehitystä luomalla algoritmisiä kaikukammioita, joissa totuudesta tulee pelkkä heimoidentiteetin merkki. Tiedollinen relativismi – väite siitä, että tiede on vain yksi 'valtainstituutioiden mielipide muiden joukossa' – romuttaa mahdollisuuden yhteiseen jaettuun todellisuuteen. Luottamuksen palauttaminen ei onnistu ylhäältä alaspäin suuntautuvalla holhoamisella, vaan avaamalla tieteen tekemisen prosessia, opettamalla mediakriittisyyttä ja osoittamalla tieteen konkreettinen merkitys ihmisten arjen turvana."
  },
  {
    id: "yl-w-24",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Kapitalismin metamorfoosi ja ekologinen kestävyys",
    prompt: "Kirjoita taloussosiologinen essee aiheesta: 'Vihreä kasvu vastaan kohtuutalous (degrowth) – onko kapitalismi sovitettavissa yhteen planetaaristen rajojen kanssa?'\n\nKäsittele tekstissä:\n- Absoluuttisen irtikytkennän (decoupling) mahdollisuus ja empiiriset rajoitteet resurssien käytössä\n- Teknologisen optimismin lupaukset (kiertotalous, fuusioenergia, vety) vs. rebound-ilmiö (Jevonsin paradoksi)\n- Kohtuutalouden (degrowth) haasteet demokraattisessa järjestelmässä ja hyvinvointivaltion rahoituksessa\n- Oma analyysisi siitä, millaista rakenteellista siirtymää maapallon ekologinen tila vaatii.",
    minWords: 140,
    modelResponse: "Kysymys talouskasvun ja ekologisen kestävyyden yhteensovittamisesta on 2000-luvun polttavin yhteiskunnallinen vedenjakaja. Valtavirtainen talouspolitiikka nojaa visioon 'vihreästä kasvusta', jonka mukaan bruttokansantuotteen kasvu voidaan irrottaa absoluuttisesti luonnonvarojen kulutuksesta ja päästöistä teknologisten innovaatioiden, sähköistymisen ja kiertotalouden avulla.\n\nEmpiirinen tutkimus suhtautuu tähän lupaukseen kuitenkin kasvavalla skeptisyydellä. Vaikka päästöt ovat joissakin kehittyneissä talouksissa laskeneet suhteessa BKT:hen, globaali materiaalien ja neitseellisten raaka-aineiden kokonaiskulutus jatkaa kasvuaan. William Stanley Jevonsin jo 1800-luvulla havaitsema paradoksi pätee yhä: energiatehokkuuden parantuminen alentaa tuotantokustannuksia, mikä lisää tuotteen kulutusta ja kumoaa saavutetut säästöt (rebound-ilmiö). Rajallisella planeetalla ääretön eksponentiaalinen materiaalinen kasvu on fysikaalinen mahdottomuus.\n\nToisaalta kohtuutalousliikkeen (degrowth) vaatimus tuotannon ja kulutuksen tietoisesta supistamisesta kohtaa valtavia poliittisia ja institutionaalisia esteitä. Nykyinen hyvinvointivaltio eläkejärjestelmineen ja julkisine palveluineen on rakennettu talouskasvun oletuksen varaan; kasvun pysähtyminen nykyrakenteilla johtaisi massatyöttömyyteen ja leikkauksiin. Ratkaisu vaatii talousjärjestelmän perusteellista uudelleenkalibrointia: siirtymistä laadullisen hyvinvoinnin mittaamiseen, työajan lyhentämistä, ekologista verouudistusta ja investointien suuntaamista materiaalisesta kulutuksesta hoivaan, koulutukseen ja luonnon ennallistamiseen."
  },
  {
    id: "yl-w-25",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Kieli vallankäytön ja todellisuuden rakentumisen välineenä",
    prompt: "Kirjoita kieli- ja yhteiskuntatieteellinen essee aiheesta: 'Diskursiivinen valta ja kielen poliittinen ontologia Michel Foucault'n ja Ludwig Wittgensteinin valossa'.\n\nKäsittele tekstissä:\n- Ludwig Wittgensteinin kielipelit ja kielirajat maailman rajoina\n- Michel Foucault'n diskurssianalyysi: miten tieto, kieli ja valta kietoutuvat toisiinsa instituutioissa (lääketiede, mielenterveys, vankilat)\n- Nykypäivän kielelliset kamppailut: käsitteiden uudelleenmäärittely (esim. 'turvallisuus', 'vapaus', sukupuolineutraali kieli)\n- Johtopäätös: Onko kieli vapauttava vai alistava voima ihmisyydessä.",
    minWords: 140,
    modelResponse: "Kieli ei ole pelkkä passiivinen työkalu valmiin todellisuuden kuvaamiseen tai ajatusten välittämiseen, vaan se on aktiivinen voima, joka muotoilee, rajaa ja tuottaa sitä, mitä pidämme todellisena. Tämä oivallus muodostaa modernin filosofian kielellisen käänteen ytimen.\n\nLudwig Wittgenstein kiteytti Tractatuksessaan: 'Kieleni rajat ovat maailmani rajat.' Myöhäistuotannossaan hän osoitti, että kielen merkitykset syntyvät sen käytöstä jaetuissa sosiaalisissa elämänmuodoissa eli 'kielipeleissä'. Se, mitä emme voi käsitteellistää tai mistä meillä ei ole sanoja, jää kielellisen ja siten usein myös sosiaalisen todellisuuden ulkopuolelle. Michel Foucault vei tämän analyysin politiikan ja vallan ytimeen: diskurssit eivät ole vain lauseita, vaan sääntöjärjestelmiä, jotka määräävät, kuka voi puhua auktoriteetilla, mitä pidetään totena ja mikä leimataan hulluudeksi, rikollisuudeksi tai poikkeavuudeksi. Lääketieteen, oikeuslaitoksen ja psykiatrian käsitteistö ei ainoastaan diagnosoi ihmistä, vaan kurinalaistaa ja tuottaa subjektia.\n\nTämä kamppailu sanoista näkyy polttavana nykypäivän yhteiskunnallisissa väittelyissä. Kysymykset sukupuolen käsitteistöstä, vihapuheen rajoista tai sotilaallisten toimien nimeämisestä 'turvallisuusoperaatioiksi' eivät ole pelkkää semanttista saivartelua, vaan raakaa taistelua vallasta. Kieli kantaa sisällään vuosisataisia valtasuhteita ja hierarkioita, mutta samalla se on vastarinnan ja emansipaation tehokkain ase: nimeämällä näkymättömän epäoikeudenmukaisuuden ihminen vapauttaa itsensä alistuksen diskursseista."
  },
  {
    id: "yl-w-26",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Tasa-arvon tulevaisuus genetiikan ja teknologisen parantelun aikakaudella",
    prompt: "Kirjoita bioeettinen ja valtiosääntöoikeudellinen essee aiheesta: 'Biologinen luokkayhteiskunta: Inhimillinen parantelu (enhancement) ja tasa-arvon mureneminen'.\n\nKäsittele tekstissä:\n- Terapeuttisen hoidon ja suorituskyvyn parantelun (enhancement) liukuva raja\n- Geneettisen ja kognitiivisen parantelun jakautuminen markkinaehtoisesti vain varakkaimmille (GATTACA-skenaario)\n- John Rawlsin oikeudenmukaisuusteoria ja luonnollinen lahjakkuuslottonäkökulma\n- Miten valtioiden tulisi säännellä transhumanistisia teknologioita tasa-arvon turvaamiseksi.",
    minWords: 140,
    modelResponse: "Koko moderni käsitys ihmisoikeuksista ja oikeusvaltiosta nojaa perusoletukseen ihmisten fundamentaalisesta biologisesta ja moraalisesta tasa-arvosta. Tämä perustuslakiimme kirjattu yhdenvertaisuusperiaate kohtaa kuitenkin eksistentiaalisen haasteen bioteknologian, geenieditoinnin ja aivo-tietokoneliitäntöjen kehittyessä huimaa vauhtia kohti transhumanismin aikakautta.\n\nPerinteinen lääketiede on määritellyt tehtäväkseen sairauden poistamisen ja terveyden palauttamisen. Raja terapeuttisen hoidon ja terveen ihmisen suorituskyvyn parantelun (enhancement) välillä on kuitenkin äärimmäisen liukuva: jos geeniterapialla voidaan korjata muistisairaus, sama teknologia mahdollistaa pian terveen ihmisen kognitiivisen kapasiteetin, lihasvoiman tai eliniän keinotekoisen moninkertaistamisen. Mikäli nämä kalliit teknologiat jätetään vapaiden markkinoiden ja maksukyvyn varaan, yhteiskuntamme uhkaa jakautua paitsi taloudellisesti, myös biologisesti kahteen eri kastiin: geneettisesti optimoituun eliittiin ja luonnontilassa pysyvään alaluokkaan.\n\nJohn Rawls argumentoi Oikeudenmukaisuusteoriassaan, että ihmisen luonnolliset synnynnäiset lahjakkuudet ovat moraalisen sattuman tuotetta, jonka hedelmiä tulee käyttää huono-osaisimpien aseman parantamiseen. Jos sattumanvarainen luonnonlotto korvataan tietoisella varallisuuteen perustuvalla ohjelmoinnilla, sosiaalinen liikkuvuus ja tasa-arvo luhistuvat lopullisesti. Yhteiskunnan on luotava tiukka kansainvälinen bioeettinen sääntely, joka takaa, että teknologia palvelee koko ihmiskunnan hyvinvointia, eikä syvennä biologista eriarvoisuutta."
  },
  {
    id: "yl-w-27",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Demokratian rapautuminen ja autoritaarinen houkutus",
    prompt: "Kirjoita valtiotieteellinen essee aiheesta: 'Miksi vakiintuneet demokratiat murenevat sisältäpäin? Steven Levitskyn ja Daniel Ziblattin teorioiden tarkastelua'.\n\nKäsittele tekstissä:\n- Miten nykyajan demokratiat eivät kuole sotilasvallankaappauksiin, vaan vaaleilla valittujen johtajien asteittaiseen instituutioiden rapauttamiseen\n- Kirjoittamattomien normien (keskinäinen kunnioitus ja institutionaalinen maltti) merkitys perustuslain rinnalla\n- Oikeuslaitoksen, vapaan median ja vaalijärjestelmän valjastaminen vallanpitäjien suojaksi\n- Keinoja demokraattisen resilienssin vahvistamiseksi.",
    minWords: 140,
    modelResponse: "Kylmän sodan päättyessä Francis Fukuyaman kuuluisa teesi julisti liberaalin demokratian saavuttaneen lopullisen voiton ideologisessa kamppailussa. Muutamaa vuosikymmentä myöhemmin optimismi on vaihtunut syvään huoleen: demokratia ei ole uhattuna pelkästään ulkopuolelta, vaan se on alkanut rapautua sisältäpäin omissa perinteisissä linnakkeissaan.\n\nKuten Steven Levitsky ja Daniel Ziblatt teoksessaan How Democracies Die osoittavat, nykyaikainen demokratian kuolema ei tapahdu panssarivaunujen vyöryessä kaduille tai perustuslakia muodollisesti kumotessa. Sen sijaan se tapahtuu hitaasti ja näennäisen laillisesti vaaleilla valittujen autoritaaristen populistien toimesta. Prosessi alkaa instituutioiden asteittaisella valtaamisella: tuomioistuimet miehitetään uskollisilla tuomareilla, vapaata mediaa heikennetään taloudellisilla sanktioilla tai omistusjärjestelyillä ja vaalilakeja manipuloidaan hallitsevan puolueen eduksi. Perustuslain kirjain säilyy ehjänä, mutta sen henki ja toimintakyky tuhoutuvat.\n\nDemokratian todellinen suojamuuri ei ole pelkkä kirjoitettu laki, vaan kaksi ratkaisevaa kirjoittamatonta normia: keskinäinen legitiimiys (vastustajan tunnustaminen tasavertaiseksi toimijaksi vihollisen sijaan) ja institutionaalinen maltti (pidättäytyminen vallan äärimmäisestä käytöstä, vaikka laki sen muodollisesti sallisi). Kun poliittinen polarisaatio tuhoaa nämä normit, demokratia luisuu kohti 'illiberaalia demokratiaa'. Resilienssi vaatii kansalaisten valppautta, vahvoja riippumattomia instituutioita ja poliittista rohkeutta puolustaa pelisääntöjä myös silloin, kun se ei palvele omaa välitöntä etua."
  },
  {
    id: "yl-w-28",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Yksilöllistyminen, yhteisöllisyys ja moderni eksistentiaalinen ahdistus",
    prompt: "Kirjoita sosiologis-filosofinen essee aiheesta: 'Zygmunt Baumanin notkea moderniteetti ja vapauden sietämätön taakka'.\n\nKäsittele tekstissä:\n- Siirtymä kiinteästä moderniteetista (elinikäiset instituutiot, luokat, avioliitot) notkeaan moderniteettiin (jatkuva muutos, epävarmuus, prekariaatti)\n- Yksilön vastuu omasta onnistumisesta ja epäonnistumisesta ilman yhteisön turvaverkkoa\n- Sosiaalisten suhteiden muuttuminen kulutushyödykkeiksi ja sitoutumiskammo\n- Miten aito yhteisöllisyys ja merkityksellisyys voidaan löytää pirstaloituneessa maailmassa.",
    minWords: 140,
    modelResponse: "Modernisaation suuri lupaus oli yksilön vapauttaminen perinteiden, säätyjen ja uskonnon asettamista kahleista. Ihminen sai vapauden valita ammattinsa, asuinpaikkansa ja identiteettinsä. Sosiologi Zygmunt Bauman osoitti kuitenkin tarkkanäköisesti 'notkean moderniteetin' käsitteellään, että tällä rajattomalla vapaudella on ollut ankara kääntöpuoli: turvallisuuden ja vakauden menetys.\n\nKiinteän moderniteetin aikakaudella ihmisen elämää rytmittivät pysyvät instituutiot: elinikäinen työpaikka samassa tehtaassa, kestävä avioliitto, vahva ammattiyhdistys ja naapurusto. Notkeassa moderniteetissa kaikki nämä sosiaaliset ankkurit ovat sulaneet. Työelämä on muuttunut pätkätöiden, projektien ja jatkuvan uudelleenkouluttautumisen prekaariksi suoksi, jossa ihminen on oman elämänsä toimitusjohtaja ja brändi. Rakenneongelmat ja sosiaalinen eriarvoisuus yksilöllistetään: työttömyys tai uupumus tulkitaan yksilön henkilökohtaiseksi epäonnistumiseksi ja riittämättömyydeksi. Tämä synnyttää kroonista eksistentiaalista ahdistusta ja riittämättömyyden tunnetta.\n\nSamalla myös ihmissuhteet ovat alistuneet markkinalogiikalle: deittisovellusten ja somen aikakaudella toinen ihminen nähdään helposti korvattavana kulutushyödykkeenä, josta luovutaan heti, kun parempi vaihtoehto ilmaantuu ruudulle. Sitoutumisen pelko estää syvien emotionaalisten juurten syntymisen. Vapauden taakka muuttuu raskaaksi, ellei sitä tasapainoteta vastuulla toisista. Todellinen vapaus ei löydy loputtomasta valintojen virrasta, vaan kyvystä sitoutua toisiin ihmisiin, yhteisöön ja päämääriin, jotka ylittävät oman minän rajat."
  },
  {
    id: "yl-w-29",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Kansainvälinen oikeus ja suurvaltapolitiikan realismi",
    prompt: "Kirjoita kansainvälisen politiikan teorian essee aiheesta: 'Liberaali institutionalismi vastaan poliittinen realismi – onko kansainvälinen oikeus vain heikkojen harha?'\n\nKäsittele tekstissä:\n- Realistisen koulukunnan (Thukydides, Morgenthau, Mearsheimer) käsitys anarkiasta ja voimatasapainosta\n- Liberaalin institutionalismin usko kansainvälisiin sopimuksiin, YK:hon ja keskinäisriippuvuuteen\n- Miten suurvaltojen veto-oikeus ja kansainvälisen tuomiovallan puute heikentävät oikeudenmukaisuutta konflikteissa\n- Miksi pienille valtioille, kuten Suomelle, kansainvälinen sopimuspohjainen järjestelmä on eksistentiaalinen elinehto.",
    minWords: 140,
    modelResponse: "Thukydideen Melos-dialogissa lausuttu kylmäävä toteamus – 'Vahvat tekevät mitä voivat, ja heikot kärsivät mitä heidän täytyy' – tiivistää kansainvälisen politiikan realistisen teorian kovan ytimen. Realismin mukaan kansainvälinen järjestelmä on perustaltaan anarkinen: ei ole olemassa globaalia hallitusta tai poliisia, joka kykenisi pakottamaan valtiot noudattamaan yhteisiä sääntöjä. Siksi valtiot toimivat itseapujärjestelmässä (self-help), jossa valta, sotilaallinen voima ja strateginen tasapaino sanelevat historian kulun.\n\nToisen maailmansodan jälkeen rakennettu liberaali institutionalismi pyrki murtamaan tämän karkean voimapolitiikan logiikan. YK:n peruskirja, kansainväliset ihmisoikeussopimukset ja Kansainvälinen rikostuomioistuin (ICC) loivat puitteet sääntöpohjaiselle maailmanjärjestykselle, jossa valtioiden välinen kanssakäyminen alistettiin laillisuusperiaatteelle. Viime vuosien globaalit kriisit ja suurvaltojen harjoittama häikäilemätön rajojen siirtely ovat kuitenkin paljastaneet järjestelmän krooniset heikkoudet: kun pysyvä turvallisuusneuvoston jäsenmaa rikkoo kansainvälistä oikeutta, veto-oikeus halvaannuttaa järjestelmän toiminnan.\n\nTästä kyynisyydestä huolimatta kansainvälisen oikeuden julistaminen turhaksi olisi kohtalokas virhe. Pienille valtioille, kuten Suomelle, sääntöpohjainen järjestelmä ja monenkeskinen diplomatia eivät ole naiivia idealismia, vaan ainoa olemassaolon tae. Ilman kansainvälisiä normeja maailma taantuu viidakon laiksi, jossa pienten maiden itsenäisyys on suurvaltojen armoilla. Kansainvälinen oikeus on hauras ja puutteellinen, mutta se on ainoa kestävä este raa'an voiman mielivaltaa vastaan."
  },
  {
    id: "yl-w-30",
    subtest: "writing",
    taskType: "essay",
    title: "Akateeminen essee: Sivistys vastaan kompetenssi – yliopistoinstituution kriisi",
    prompt: "Kirjoita sivistysfilosofinen essee aiheesta: 'Humboldtilaisen sivistysyliopiston kuolema ja hyötyajattelun ylivalta'.\n\nKäsittele tekstissä:\n- Wilhelm von Humboldtin sivistysihanne (tutkimuksen ja opetuksen ykseys, tiedon itseisarvo ja persoonallisuuden kasvu)\n- Modernin yliopiston muuttuminen markkinaehtoiseksi tutkintotehtaaksi ja innovaatiokeskukseksi (kompetenssi- ja suoriteajattelu)\n- Mitä yhteiskunta menettää, kun kriittinen, vapaa ja taloudellisesti hyödytön ajattelu ajetaan marginaaliin\n- Oma näkemyksesi aidon sivistyksen merkityksestä 2000-luvulla.",
    minWords: 140,
    modelResponse: "Wilhelm von Humboldtin 1800-luvun alussa Berliinissä hahmottelema yliopistoihanne loi modernin länsimaisen tieteen menestyksen perustan. Humboldtilainen sivistysyliopisto nojasi kolmeen vallankumoukselliseen periaatteeseen: tutkimuksen ja opetuksen jakamattomaan ykseyteen, tieteen vapauteen ja autonomiaan suhteessa valtioon ja kirkkoon sekä ajatukseen tiedosta ja sivistyksestä (Bildung) arvona sinänsä. Yliopiston tehtävänä ei ollut kouluttaa kapea-alaisia rattaita hallintokoneistoon, vaan kasvattaa itsenäisesti ja kriittisesti ajattelevia, eettisiä persoonallisuuksia ihmiskunnan parhaaksi.\n\n2000-luvun yliopisto on ajautunut kauas tästä ihanteesta. Globalisoituneen talouskilpailun ja uusliberalistisen hallintamallin puristuksessa yliopistot on alistettu markkinalogiikalle. Sivistys on korvattu 'kompetenssilla', tiede 'innovaatioilla' ja opiskelijat 'asiakkailla'. Rahoitusmallit palkitsevat nopeasta tutkintotehtailusta, julkaisumäärien keinotekoisesta maksimoinnista ja suoraan yritysmaailmaa palvelevasta soveltavasta tutkimuksesta. Humanistiset ja teoreettiset perustieteet, joiden taloudellinen hyöty ei ole realisoitavissa seuraavalla vuosineljänneksellä, joutuvat jatkuvasti puolustelemaan oikeutustaan.\n\nTämä kehitys on yhteiskunnallisesti itsetuhoista. Todelliset tieteelliset läpimurrot ja kulttuuriset murrokset eivät synny tilatuista innovaatioprosesseista, vaan uteliaisuudesta, vapaasta harhailusta ja intellektuaalisesta riskinotosta. Sivistys ei ole ulkoa opittujen taitojen varasto, vaan henkinen asenne: kyky kyseenalaistaa itsestäänselvyyksiä, asettua toisen asemaan ja kantaa moraalista vastuuta maailmasta. Jos yliopisto luopuu sivistystehtävästään, se lakkaa olemasta yliopisto ja muuttuu ammattikouluksi."
  }
];

export const ylintasoListening = [
  {
    id: "yl-l-1",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Valtiosääntöoikeuden symposiumissa dosentti toteaa: Perustuslakivaliokunnan rooli ennakollisena perustuslainmukaisuuden valvojana on uniikki. Se ei arvioi poliittista tarkoituksenmukaisuutta, vaan lakiesitysten suhdetta perusoikeusjärjestelmään ja kansainvälisiin ihmisoikeussopimuksiin riippumattomien valtiosääntöasiantuntijoiden kuulemisten pohjalta.",
    prompt: "Mihin perustuslakivaliokunnan arviointi symposiumin mukaan perustuu?",
    options: [
      "A) Hallituksen poliittisen kannatuksen mittaamiseen gallupeilla",
      "B) Lakiesitysten suhteeseen perusoikeuksiin ja ihmisoikeussopimuksiin asiantuntijakuulemisten kautta",
      "C) Tuomioistuinten antamien tuomioiden kumoamiseen jälkikäteen",
      "D) Pelkästään lakiesityksen taloudellisiin kustannuksiin"
    ],
    correctAnswer: "B) Lakiesitysten suhteeseen perusoikeuksiin ja ihmisoikeussopimuksiin asiantuntijakuulemisten kautta",
    explanation: "Dosentti korostaa, että valiokunta arvioi suhdetta 'perusoikeusjärjestelmään ja kansainvälisiin ihmisoikeussopimuksiin'."
  },
  {
    id: "yl-l-2",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Kirjallisuusohjelmassa kriitikko analysoi: Kirjailijan kielellinen rekisteri leikittelee arkaaisilla lauseenvastikkeilla ja kansanrunouden allitteraatiolla. Teksti ei päästä lukijaa helpolla, vaan vaatii syntaktisen arkkitehtuurinsa sulattelua useampaan otteeseen luoden hypnoottisen, ajattoman tunnelman.",
    prompt: "Miten kriitikko kuvailee teoksen kieltä ja lukukokemusta?",
    options: [
      "A) Kieli on helppotajuista ja nopealukuista viihdettä",
      "B) Teksti hyödyntää arkaaisia rakenteita ja vaatii syntaksinsa vuoksi syvällistä useampaa lukukertaa",
      "C) Kieli on täynnä englanninkielisiä lainasanoja",
      "D) Teos on tarkoitettu vain pikkulapsille"
    ],
    correctAnswer: "B) Teksti hyödyntää arkaaisia rakenteita ja vaatii syntaksinsa vuoksi syvällistä useampaa lukukertaa",
    explanation: "Kriitikko mainitsee: 'leikittelee arkaaisilla lauseenvastikkeilla... ei päästä lukijaa helpolla, vaan vaatii syntaktisen arkkitehtuurinsa sulattelua useampaan otteeseen'."
  },
  {
    id: "yl-l-3",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Pankin pääekonomisti arvioi suorassa radiolähetyksessä: Geopoliittinen fragmentaatio ja toimitusketjujen uudelleenjärjestely eli ns. friend-shoring nostavat väistämättä rakenteellista inflaatiopainetta. Keskuspankkien liikkumavara korkojen laskussa on kapeampi kuin nollakorkokaudella uskallettiin toivoa.",
    prompt: "Mikä pääekonomistin mukaan ylläpitää rakenteellista inflaatiota?",
    options: [
      "A) Kaikkien tuotteiden hintojen lasku maailmanmarkkinoilla",
      "B) Geopoliittinen fragmentaatio ja toimitusketjujen uudelleenjärjestely poliittisesti läheisiin maihin",
      "C) Pankkikorttien poistuminen käytöstä",
      "D) Öljyn hinnan pysyvä romahtaminen nollaan"
    ],
    correctAnswer: "B) Geopoliittinen fragmentaatio ja toimitusketjujen uudelleenjärjestely poliittisesti läheisiin maihin",
    explanation: "Pääekonomisti toteaa: 'Geopoliittinen fragmentaatio ja toimitusketjujen uudelleenjärjestely eli ns. friend-shoring nostavat väistämättä rakenteellista inflaatiopainetta'."
  },
  {
    id: "yl-l-4",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Oikeudenkäynnin loppulausunnossa syyttäjä esittää: Vastaajan väite tahallisuuden puuttumisesta on hylättävä. Rikoslain 3 luvun mukainen todennäköisyystahallisuus täyttyy, sillä tekijän on täytynyt mieltää teon seurauksen syntyminen varsin todennäköiseksi olosuhteet huomioon ottaen.",
    prompt: "Mihin juridiseen käsitteeseen syyttäjä nojaa vaatiessaan rangaistusta?",
    options: [
      "A) Tapaturmaan ja anteeksiantoon",
      "B) Todennäköisyystahallisuuteen, koska vastaajan oli täytynyt mieltää seurauksen todennäköisyys",
      "C) Puhtaaseen tuottamukseen ilman rangaistavuutta",
      "D) Oikeudenkäynnin vanhentumiseen"
    ],
    correctAnswer: "B) Todennäköisyystahallisuuteen, koska vastaajan oli täytynyt mieltää seurauksen todennäköisyys",
    explanation: "Syyttäjä vetoaa: 'Rikoslain 3 luvun mukainen todennäköisyystahallisuus täyttyy, sillä tekijän on täytynyt mieltää teon seurauksen syntyminen varsin todennäköiseksi'."
  },
  {
    id: "yl-l-5",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Tiedepaneelissa ilmastotutkija varoittaa: Metapopulaatioiden kytkeytyvyyden katkeaminen boreaalisessa vyöhykkeessä uhkaa lajien geneettistä elinvoimaa. Kun pirstoutuneiden elinympäristöjen väliset ekologiset käytävät häviävät, lajit eivät kykene siirtymään ilmaston lämmetessä pohjoisemmaksi.",
    prompt: "Mikä uhkaa lajien sopeutumista ilmastonmuutokseen tutkijan mukaan?",
    options: [
      "A) Liian suuret yhtenäiset metsäalueet",
      "B) Elinympäristöjen pirstoutuminen ja ekologisten käytävien häviäminen",
      "C) Liian ankarat talvipakkaset",
      "D) Kaikkien saalistajien katoaminen"
    ],
    correctAnswer: "B) Elinympäristöjen pirstoutuminen ja ekologisten käytävien häviäminen",
    explanation: "Tutkija selittää: 'Kun pirstoutuneiden elinympäristöjen väliset ekologiset käytävät häviävät, lajit eivät kykene siirtymään ilmaston lämmetessä pohjoisemmaksi'."
  },
  {
    id: "yl-l-6",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Filosofisessa radioesseessä pohditaan: Hannah Arendtin käsite 'pahan banaalisuus' ei viitannut hirviömäiseen sadismiin, vaan kyvyttömyyteen kriittiseen ajatteluun. Byrokraatti Eichmann toimi vain sokeasti sääntöjä noudattaen ilman kykyä asettua toisen asemaan.",
    prompt: "Mitä 'pahan banaalisuus' Hannah Arendtin mukaan tarkoittaa radioesseen mukaan?",
    options: [
      "A) Pahuuden johtumista pelkästään mielisairaudesta",
      "B) Sokeaa sääntöjen noudattamista ja kriittisen ajattelun sekä empatian puutetta byrokratiassa",
      "C) Pahuuden olemista aina täysin vähäpätöistä ja harmitonta",
      "D) Lakien rikkomista henkilökohtaisen hyödyn saamiseksi"
    ],
    correctAnswer: "B) Sokeaa sääntöjen noudattamista ja kriittisen ajattelun sekä empatian puutetta byrokratiassa",
    explanation: "Esseessä sanotaan pahan banaalisuuden viitanneen 'kyvyttömyyteen kriittiseen ajatteluun... toimi vain sokeasti sääntöjä noudattaen ilman kykyä asettua toisen asemaan'."
  },
  {
    id: "yl-l-7",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Korkeakoulupolitiikan seminaarissa professori linjaa: Tohtorikoulutuksen määrällinen kasvattaminen ilman vastaavaa lisäystä akateemisiin virkoihin tai tutkimusinfrastruktuuriin synnyttää vain akateemisen prekariaatin. Osaamispääomaa valuu hukkaan, ellei elinkeinoelämä kykene absorboimaan tohtoreita T&K-tehtäviin.",
    prompt: "Mitä riskiä professori korostaa tohtorimäärien kasvattamisessa?",
    options: [
      "A) Yliopistojen muuttumista maksullisiksi",
      "B) Akateemisen prekariaatin syntyä, ellei työmarkkinoilla ole kykyä hyödyntää tohtorikoulutettuja",
      "C) Kaikkien tutkimusten laadun automaattista laskua",
      "D) Opetuksen loppumista yliopistoissa"
    ],
    correctAnswer: "B) Akateemisen prekariaatin syntyä, ellei työmarkkinoilla ole kykyä hyödyntää tohtorikoulutettuja",
    explanation: "Seminaarissa todetaan: 'synnyttää vain akateemisen prekariaatin. Osaamispääomaa valuu hukkaan, ellei elinkeinoelämä kykene absorboimaan tohtoreita'."
  },
  {
    id: "yl-l-8",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Taidehistorioitsija luennoi: Alvar Aallon funktionalismi erosi Keski-Euroopan korostuneen teollisesta Bauhaussuuntauksesta orgaanisen muotokielen ja puumateriaalin inhimillisen käytön ansiosta. Aalto korosti, että standardisoinnin tulee palvella ihmisen biologista hyvinvointia, ei pelkkää konetta.",
    prompt: "Miten Aallon arkkitehtuuri erottui saksalaisesta Bauhausista luennoitsijan mukaan?",
    options: [
      "A) Se hylkäsi kokonaan rakennusten käytännöllisyyden",
      "B) Orgaanisella muotokielellä, puun käytöllä ja ihmisen biologisen hyvinvoinnin korostamisella",
      "C) Käyttämällä ainoastaan betonia ja terästä",
      "D) Rakentamalla pelkästään kirkkoja ja linnoja"
    ],
    correctAnswer: "B) Orgaanisella muotokielellä, puun käytöllä ja ihmisen biologisen hyvinvoinnin korostamisella",
    explanation: "Luennoitsija kertoo: 'orgaanisen muotokielen ja puumateriaalin inhimillisen käytön ansiosta... standardisoinnin tulee palvella ihmisen biologista hyvinvointia'."
  },
  {
    id: "yl-l-9",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Sosiologian luennolla käsitellään Pierre Bourdieuta: Kulttuurinen pääoma periytyy hienovaraisesti perheen habituksen kautta. Se ilmenee esteettisinä mieltymyksinä, kielellisenä itsevarmuutena ja koulutusvalintoina, jotka koulujärjestelmä palkitsee näennäisenä luontaisena lahjakkuutena.",
    prompt: "Miten kulttuurinen pääoma Bourdieun mukaan toimii koulutusjärjestelmässä?",
    options: [
      "A) Koulut jakavat rahaa oppilaiden perheille",
      "B) Koulu palkitsee kotoa perityn kielellisen ja esteettisen habituksen ikään kuin se olisi yksilön omaa synnynnäistä lahjakkuutta",
      "C) Se estää ketään oppimasta matematiikkaa",
      "D) Koulutus poistaa kaikki sosiaaliset erot yhdessä vuodessa"
    ],
    correctAnswer: "B) Koulu palkitsee kotoa perityn kielellisen ja esteettisen habituksen ikään kuin se olisi yksilön omaa synnynnäistä lahjakkuutta",
    explanation: "Luennossa selitetään, että perheen habitus 'ilmenee kielellisenä itsevarmuutena ja koulutusvalintoina, jotka koulujärjestelmä palkitsee näennäisenä luontaisena lahjakkuutena'."
  },
  {
    id: "yl-l-10",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Yleisen oikeustieteen väitöskirjassa todetaan: Positiivisen oikeuden ja luonnonoikeuden ikiaikainen vastakkainasettelu konkretisoituu radikaalisti oikeudenmukaisuuskriiseissä. Radbruchin kaavan mukaan äärimmäisen epäoikeudenmukainen laki lakkaa olemasta oikeutta, eikä siihen voida vedota virkavelvollisuutena.",
    prompt: "Mikä on niin sanotun Radbruchin kaavan ydin oikeusfilosofiassa?",
    options: [
      "A) Kaikkia kirjoitettuja lakeja on aina toteltava kritiikittä",
      "B) Äärimmäisen epäoikeudenmukainen laki menettää oikeudellisen sitovuutensa eikä se ole todellista oikeutta",
      "C) Tuomioistuimet voidaan korvata tekoälyllä",
      "D) Lait ovat voimassa vain kymmenen vuotta kerrallaan"
    ],
    correctAnswer: "B) Äärimmäisen epäoikeudenmukainen laki menettää oikeudellisen sitovuutensa eikä se ole todellista oikeutta",
    explanation: "Radbruchin kaavan mukaan: 'äärimmäisen epäoikeudenmukainen laki lakkaa olemasta oikeutta, eikä siihen voida vedota virkavelvollisuutena'."
  },
  {
    id: "yl-l-11",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Aivotutkija selvittää podissaan: Syvän lukemisen kognitiivinen arkkitehtuuri vaatii lineaarista keskittymistä ja monimutkaisten syntaktisten suhteiden hahmottamista. Hypertekstuaalinen digilukeminen taas totuttaa aivot selailevaan informaation skannaamiseen, mikä heikentää kykyä pitkäkestoiseen abstraktiin päättelyyn.",
    prompt: "Miten digitaalinen lukeminen vaikuttaa aivojen lukutapaan tutkijan mukaan?",
    options: [
      "A) Se nopeuttaa muistia ilman mitään haittavaikutuksia",
      "B) Se totuttaa aivot selailevaan skannaukseen ja heikentää pitkäkestoista abstraktia päättelykykyä",
      "C) Se parantaa silmien näöntarkkuutta",
      "D) Se korvaa kokonaan nukkumisen tarpeen"
    ],
    correctAnswer: "B) Se totuttaa aivot selailevaan skannaukseen ja heikentää pitkäkestoista abstraktia päättelykykyä",
    explanation: "Tutkija osoittaa: 'totuttaa aivot selailevaan informaation skannaamiseen, mikä heikentää kykyä pitkäkestoiseen abstraktiin päättelyyn'."
  },
  {
    id: "yl-l-12",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Turvallisuuspolitiikan tutkija analysoi: Pelotevaikutus eli deterrenssi ei perustu pelkästään materiaalisille asejärjestelmille, vaan vastustajan havainnolle poliittisesta tahdosta ja eskalaatiohallinnasta. Jos pelotteen uskottavuus horjuu puolustusliiton sitoumusten epävarmuuden takia, kynnys kokeilevaan aggressioon madaltuu.",
    prompt: "Mikä on sotilaallisen pelotteen kriittisin elementti analyysin mukaan?",
    options: [
      "A) Pelkästään tankkien ja ohjusten lukumäärä",
      "B) Vastustajan usko ja havainto todellisesta poliittisesta tahdosta ja sitoumusten pitävyydestä",
      "C) Täydellinen aseista luopuminen rauhan merkiksi",
      "D) Salassa pidettävät neuvottelut ilman liittolaisia"
    ],
    correctAnswer: "B) Vastustajan usko ja havainto todellisesta poliittisesta tahdosta ja sitoumusten pitävyydestä",
    explanation: "Analyysi painottaa: 'ei perustu pelkästään materiaalisille asejärjestelmille, vaan vastustajan havainnolle poliittisesta tahdosta ja eskalaatiohallinnasta'."
  },
  {
    id: "yl-l-13",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Kielipolitiikan keskustelussa kielitieteilijä huomauttaa: Suomen kielen asema tieteen ja korkeakoulutuksen kielenä uhkaa erodoitua, jos maisteriohjelmat ja tutkimusjulkaisut siirtyvät yksinomaan englantiin. Kieli menettää kykynsä kehittää uutta terminologiaa ja käsiteapparaattia ilman akateemista käyttöä.",
    prompt: "Mikä uhka suomen kielelle koituu tieteen englanninkielistymisestä?",
    options: [
      "A) Suomen kieli lakkaa olemasta puhuttu arkikieli heti huomenna",
      "B) Kieli menettää kykynsä kehittää uutta terminologiaa ja käsitteistöä yhteiskunnan ja tieteen kielenä",
      "C) Englannin kieli muuttuu Suomen ainoaksi viralliseksi kieleksi",
      "D) Yliopistot joudutaan sulkemaan"
    ],
    correctAnswer: "B) Kieli menettää kykynsä kehittää uutta terminologiaa ja käsitteistöä yhteiskunnan ja tieteen kielenä",
    explanation: "Tutkija varoittaa: 'Kieli menettää kykynsä kehittää uutta terminologiaa ja käsiteapparaattia ilman akateemista käyttöä'."
  },
  {
    id: "yl-l-14",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Finanssioikeuden luennolla: Sisäpiirintiedon määritelmässä olennaista on tiedon täsmällisyys ja sen potentiaalinen hintavaikutus. Tiedon katsotaan olevan luonteeltaan täsmällistä, mikäli se viittaa olosuhteisiin tai tapahtumaan, jonka voidaan kohtuudella odottaa toteutuvan ja josta voidaan tehdä johtopäätös rahoitusvälineen kurssikehityksestä.",
    prompt: "Milloin tieto täyttää sisäpiirintiedon täsmällisyyden kriteerin luennon mukaan?",
    options: [
      "A) Vasta kun se on julkaistu Helsingin Sanomien etusivulla",
      "B) Kun se viittaa tapahtumaan, jonka voidaan kohtuudella odottaa toteutuvan ja jolla on arvioitavissa oleva kurssivaikutus",
      "C) Vain jos se koskee valtion ottamaa lainaa",
      "D) Silloin kun kukaan muu ei ole kuullut siitä"
    ],
    correctAnswer: "B) Kun se viittaa tapahtumaan, jonka voidaan kohtuudella odottaa toteutuvan ja jolla on arvioitavissa oleva kurssivaikutus",
    explanation: "Luennossa määritellään: 'mikäli se viittaa olosuhteisiin tai tapahtumaan, jonka voidaan kohtuudella odottaa toteutuvan ja josta voidaan tehdä johtopäätös rahoitusvälineen kurssikehityksestä'."
  },
  {
    id: "yl-l-15",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Kulttuuriantropologi esitelmöi: Saamelaisen duodji-käsityön merkitys ei rajoitu vain esineen funktionaaliseen käyttöarvoon. Se on aineellistunutta kulttuuriperintöä, jonka muodot, materiaalit ja koristekuviot kantavat tietoa kantajansa suvusta, alueesta ja suhteesta ympäröivään arktiseen maisemaan.",
    prompt: "Mitä duodji edustaa pelkän käyttöesineen lisäksi antropologin mukaan?",
    options: [
      "A) Modernia teollista massatuotantoa",
      "B) Aineellistunutta kulttuuriperintöä, joka viestii suvusta, alueellisesta identiteetistä ja luontosuhteesta",
      "C) Pelkkää museoesinettä, jota ei saa koskettaa",
      "D) Halpaa matkamuistoa turisteille"
    ],
    correctAnswer: "B) Aineellistunutta kulttuuriperintöä, joka viestii suvusta, alueellisesta identiteetistä ja luontosuhteesta",
    explanation: "Esitelmässä todetaan: 'Se on aineellistunutta kulttuuriperintöä, jonka muodot... kantavat tietoa kantajansa suvusta, alueesta ja suhteesta ympäröivään arktiseen maisemaan'."
  },
  {
    id: "yl-l-16",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Epidemiologian professori arvioi: Laumaimmuniteetin saavuttaminen pelkästään taudin vapaan leviämisen kautta olisi johtanut terveydenhuollon kantokyvyn täydelliseen kollapsiin ja tuhansiin estettävissä oleviin kuolemiin. Rokotteiden kehittäminen ja farmakologiset interventiot olivat ainoa eettisesti kestävä tie suojata väestöä.",
    prompt: "Miksi taudin vapaata leviämistä laumaimmuniteetin saavuttamiseksi pidettiin kestämättömänä?",
    options: [
      "A) Koska rokotteet olivat liian halpoja",
      "B) Koska se olisi romuttanut terveydenhuollon kantokyvyn ja johtanut mittavaan määrään vältettävissä olevia kuolemia",
      "C) Koska virukset kuolevat itsestään talvella",
      "D) Koska kukaan ei sairastunut virukseen"
    ],
    correctAnswer: "B) Koska se olisi romuttanut terveydenhuollon kantokyvyn ja johtanut mittavaan määrään vältettävissä olevia kuolemia",
    explanation: "Professori toteaa sen johtaneen 'terveydenhuollon kantokyvyn täydelliseen kollapsiin ja tuhansiin estettävissä oleviin kuolemiin'."
  },
  {
    id: "yl-l-17",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Musiikkitieteen luento: Jean Sibeliuksen neljäs sinfonia heijastaa säveltäjän kieltäytymistä sentimentaalisesta paatoksesta. Sen aforistinen, dissonansseja hyödyntävä karsittu sävelkieli ennakoi eurooppalaisen modernismin ahdistusta ensimmäisen maailmansodan kynnyksellä.",
    prompt: "Millainen sävelkieli Sibeliuksen neljännessä sinfoniassa on luennon mukaan?",
    options: [
      "A) Kevytmielinen ja iloinen tanssimusiikki",
      "B) Karsittu, aforistinen ja dissonansseja hyödyntävä syvällinen modernismi",
      "C) Yksinomaan kirkkokuorolle sävelletty hymni",
      "D) Perinteinen romanttinen sankarisatu"
    ],
    correctAnswer: "B) Karsittu, aforistinen ja dissonansseja hyödyntävä syvällinen modernismi",
    explanation: "Luento kuvaa: 'aforistinen, dissonansseja hyödyntävä karsittu sävelkieli ennakoi eurooppalaisen modernismin ahdistusta'."
  },
  {
    id: "yl-l-18",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Eettisen neuvottelukunnan lausunto: Algoritmisessa triage-päätöksenteossa potilaan kronologinen ikä ei saa koskaan toimia ainoana hoidon rajauskriteerinä. Päätöksen on perustuttava kokonaisvaltaiseen lääketieteelliseen arvioon toipumisennusteesta ja elinajanodotteesta elämänlaatua kunnioittaen.",
    prompt: "Mikä ei saa toimia ainoana hoidon rajausperusteena lausunnon mukaan?",
    options: [
      "A) Potilaan sairauden vaikeusaste",
      "B) Potilaan pelkkä kronologinen ikä",
      "C) Lääkärin asiantuntemus",
      "D) Laboratoriokokeiden tulokset"
    ],
    correctAnswer: "B) Potilaan pelkkä kronologinen ikä",
    explanation: "Lausunnossa korostetaan: 'potilaan kronologinen ikä ei saa koskaan toimia ainoana hoidon rajauskriteerinä'."
  },
  {
    id: "yl-l-19",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Historian symposiumissa professori esittää: Suomen selviytyminen toisesta maailmansodasta ilman miehitystä ei ollut pelkkä sotilaallinen torjuntavoitto. Ratkaisevampaa oli yhteiskunnan sisäinen eheys ja parlamentaarisen demokratian legitimiteetti, jotka säilyivät katkeamattomina koko kriisin läpi.",
    prompt: "Mikä oli professorin mukaan ratkaisevaa Suomen selviytymisessä sodasta?",
    options: [
      "A) Ulkomaisten palkkasoturien suuri määrä",
      "B) Yhteiskunnan sisäinen sosiaalinen eheys ja demokratian katkeamaton legitimiteetti",
      "C) Täydellinen aseettomuus",
      "D) Kaikkien vaalien peruuttaminen kymmeneksi vuodeksi"
    ],
    correctAnswer: "B) Yhteiskunnan sisäinen sosiaalinen eheys ja demokratian katkeamaton legitimiteetti",
    explanation: "Professori korostaa: 'Ratkaisevampaa oli yhteiskunnan sisäinen eheys ja parlamentaarisen demokratian legitimiteetti'."
  },
  {
    id: "yl-l-20",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Tietosuojaluennoitsija varoittaa: Biometrisen datan peruuttamattomuus tekee siitä poikkeuksellisen vaarallisen väärinkäytöksille. Salasanan voi vaihtaa tietomurron jälkeen, mutta omien kasvojen piirteitä tai iiriksen rakennetta ei voi muuttaa. Siksi massamuotoinen biometrinen valvonta julkisissa tiloissa on suhteeton puuttuminen yksityisyyteen.",
    prompt: "Miksi biometrinen data on vaarallisempaa tietomurroissa kuin salasanat?",
    options: [
      "A) Koska biometriset tiedostot ovat liian pieniä",
      "B) Koska omia kasvoja tai iiristä ei voi vaihtaa tai uusia tietomurron tapahduttua toisin kuin salasanoja",
      "C) Koska tietokoneet eivät osaa lukea biometristä dataa",
      "D) Koska biometristä dataa ei voi tallentaa digitaalisesti"
    ],
    correctAnswer: "B) Koska omia kasvoja tai iiristä ei voi vaihtaa tai uusia tietomurron tapahduttua toisin kuin salasanoja",
    explanation: "Luennoitsija selittää: 'Salasanan voi vaihtaa... mutta omien kasvojen piirteitä tai iiriksen rakennetta ei voi muuttaa'."
  },
  {
    id: "yl-l-21",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Ympäristöekonomisti analysoi: Hiilitullit (CBAM) ovat välttämätön mekanismi hiilivuodon estämiseksi. Jos Euroopan unioni asettaa tiukat päästörajat omalle teollisuudelleen ilman rajatulleja, tuotanto ja päästöt vain siirtyvät kolmansiin maihin, joissa sääntely on löyhempää, ilman että globaalit päästöt vähenevät.",
    prompt: "Mikä on hiilitullien ensisijainen tavoite taloustieteilijän mukaan?",
    options: [
      "A) Koko ulkomaankaupan lopettaminen Euroopassa",
      "B) Hiilivuodon estäminen eli tuotannon ja saastuttamisen siirtymisen estäminen maihin, joissa ei ole päästösääntelyä",
      "C) Euroopan unionin budjetin lakkauttaminen",
      "D) Kaikkien tehtaiden sulkeminen pysyvästi"
    ],
    correctAnswer: "B) Hiilivuodon estäminen eli tuotannon ja saastuttamisen siirtymisen estäminen maihin, joissa ei ole päästösääntelyä",
    explanation: "Ekonomisti perustelee: 'Hiilitullit... ovat välttämätön mekanismi hiilivuodon estämiseksi... tuotanto ja päästöt vain siirtyvät kolmansiin maihin'."
  },
  {
    id: "yl-l-22",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Valtiotieteen dosentti pohtii: Äänestysaktiivisuuden sosioekonominen kuilu on demokratian hiljainen kriisi. Kun korkeakoulutetuilla äänestysprosentti ylittää 85 prosenttia mutta matalan koulutustason ja vähävaraisilla nuorilla se jää alle 40 prosentin, parlamentti heijastaa väistämättä vain hyväosaisten preferenssejä.",
    prompt: "Mikä vääristymä syntyy äänestysaktiivisuuden sosioekonomisesta kuilusta?",
    options: [
      "A) Kaikki puolueet saavat saman määrän ääniä",
      "B) Poliittinen päätöksenteko painottuu heijastamaan vain hyväosaisten intressejä alhaisen osallistumisen vuoksi",
      "C) Vaaleja ei voida järjestää laillisesti",
      "D) Nuoret päättävät kaikista laeista"
    ],
    correctAnswer: "B) Poliittinen päätöksenteko painottuu heijastamaan vain hyväosaisten intressejä alhaisen osallistumisen vuoksi",
    explanation: "Dosentti toteaa: 'parlamentti heijastaa väistämättä vain hyväosaisten preferenssejä' kun vähävaraisten äänestysprosentti romahtaa."
  },
  {
    id: "yl-l-23",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Kirjallisuudentutkija esitelmöi: Edith Södergranin runous räjäytti suomenruotsalaisen modernismin kielen. Vapaarytminen mitta, vahva subjektius ja nietzscheläinen voimantunto kieltäytyivät sovinnaisesta naiskuvasta ja avasivat polun koko pohjoismaiselle lyriikan uudistumiselle.",
    prompt: "Mikä teki Edith Södergranin runoudesta vallankumouksellista?",
    options: [
      "A) Tiukka perinteinen loppusointuinen runomitta",
      "B) Vapaarytminen kieli, vahva naisen toimijuus ja kieltäytyminen sovinnaisista normeista",
      "C) Runojen kääntäminen ainoastaan muinaiskreikaksi",
      "D) Pelkkien historiallisten sotakuvauksien kirjoittaminen"
    ],
    correctAnswer: "B) Vapaarytminen kieli, vahva naisen toimijuus ja kieltäytyminen sovinnaisista normeista",
    explanation: "Esitelmä korostaa: 'Vapaarytminen mitta, vahva subjektius ja nietzscheläinen voimantunto kieltäytyivät sovinnaisesta naiskuvasta'."
  },
  {
    id: "yl-l-24",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Hallintolakimies luennoi: Viranomaisen tiedonantovelvollisuus ja asiakirjajulkisuus ovat pääsääntö, ja salassapito on aina poikkeus, jonka tulee perustua lain nimenomaiseen pykälään. Salassapitoa ei voida koskaan perustella viranomaisen halulla välttää julkista arvostelua tai kiusallisia virheitä.",
    prompt: "Mihin salassapidon viranomaistoiminnassa tulee aina perustua?",
    options: [
      "A) Viranhaltijan omaan mielialaan ja toiveisiin",
      "B) Lain nimenomaiseen pykälään ja julkisuuslain täsmällisiin salassapitoperusteisiin",
      "C) Virheen peittämiseen ja maineen suojeluun",
      "D) Salassapito on kielletty kaikissa tilanteissa ilman poikkeuksia"
    ],
    correctAnswer: "B) Lain nimenomaiseen pykälään ja julkisuuslain täsmällisiin salassapitoperusteisiin",
    explanation: "Lakimies painottaa: 'salassapito on aina poikkeus, jonka tulee perustua lain nimenomaiseen pykälään'."
  },
  {
    id: "yl-l-25",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Kansainvälisen politiikan tutkija huomauttaa: Ydinaseiden läsnäolo muuttaa suurvaltasuhteiden dynamiikan perustavanlaatuisesti. Vaikka konventionaalinen sota kahden ydinasemahdin välillä käydään usein epäsuorasti proksisodissa, eskalaatioriski rajoittaa suoraa sotilaallista yhteenottoa toisen osapuolen elintärkeillä intressialueilla.",
    prompt: "Miten ydinaseet vaikuttavat suurvaltojen käyttäytymiseen lausunnon mukaan?",
    options: [
      "A) Ne lisäävät suoria sotia maiden välillä päivittäin",
      "B) Eskalaatioriski rajoittaa suoraa sotilaallista yhteenottoa ja siirtää konfliktit epäsuoriin proksisotiin",
      "C) Ne poistavat kaikki diplomaattiset neuvottelut",
      "D) Ne estävät talouspakotteiden käytön"
    ],
    correctAnswer: "B) Eskalaatioriski rajoittaa suoraa sotilaallista yhteenottoa ja siirtää konfliktit epäsuoriin proksisotiin",
    explanation: "Tutkija selittää: 'eskalaatioriski rajoittaa suoraa sotilaallista yhteenottoa... sota kahden ydinasemahdin välillä käydään usein epäsuorasti proksisodissa'."
  },
  {
    id: "yl-l-26",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Neurotieteilijä kuvailee kokeellisia tuloksia: Neuroplastisuus säilyy aivoissa läpi koko elämänkaaren, vastoin aiempaa käsitystä aikuisiän staattisuudesta. Intensiivinen uuden oppiminen synnyttää uusia synaptisia yhteyksiä ja vahvistaa gliasolujen tukiverkostoa jopa syvässä vanhuudessa.",
    prompt: "Minkä uuden käsityksen moderni neurotiede on vahvistanut aikuisten aivoista?",
    options: [
      "A) Aivot eivät voi koskaan muuttua lapsuuden jälkeen",
      "B) Aivojen neuroplastisuus ja kyky muodostaa uusia synapsiyhteyksiä säilyy läpi elämän",
      "C) Oppiminen on mahdollista vain alle 15-vuotiaana",
      "D) Aivosolut kuolevat automaattisesti 40 ikävuoden jälkeen"
    ],
    correctAnswer: "B) Aivojen neuroplastisuus ja kyky muodostaa uusia synapsiyhteyksiä säilyy läpi elämän",
    explanation: "Kokeelliset tulokset vahvistavat: 'Neuroplastisuus säilyy aivoissa läpi koko elämänkaaren... uusia synaptisia yhteyksiä... jopa syvässä vanhuudessa'."
  },
  {
    id: "yl-l-27",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Kaupunkimaantieteilijä analysoi gentrifikaatiota: Vanhojen työläiskaupunginosien saneeraus ja trendikkyys nostavat kiinteistöjen arvoa, mutta samalla ne syrjäyttävät alkuperäisen pienituloisen asujaimiston. Kaupungin elävä monimuotoisuus korvautuu homogeenisella hyvätuloisten kulutustilalla.",
    prompt: "Mitä gentrifikaatio aiheuttaa kaupunginosan väestörakenteelle?",
    options: [
      "A) Kaikkien asukkaiden tulotason laskua ja slummiutumista",
      "B) Pienituloisten asukkaiden syrjäytymistä ja alueen muuttumista sosiaalisesti homogeenisemmaksi",
      "C) Teollisuustyöpaikkojen palaamista keskustoihin",
      "D) Julkisen liikenteen täydellisen loppumisen"
    ],
    correctAnswer: "B) Pienituloisten asukkaiden syrjäytymistä ja alueen muuttumista sosiaalisesti homogeenisemmaksi",
    explanation: "Tutkija osoittaa: 'syrjäyttävät alkuperäisen pienituloisen asujaimiston. Kaupungin elävä monimuotoisuus korvautuu homogeenisella hyvätuloisten kulutustilalla'."
  },
  {
    id: "yl-l-28",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Tieteenfilosofi kritisoi scientismiä: Scientismi eli skientismi on virheellinen uskomus siitä, että luonnontiede on ainoa pätevä tiedonlähde ja että inhimilliset arvot, moraali ja taide voidaan redusoida fysiikaksi ja kemiaksi. Tämä sivuuttaa kokemuksen subjektiivisen mielekkyyden ja hermeneuttisen ymmärryksen tarpeen.",
    prompt: "Mitä filosofi kritisoi termillä 'scientismi'?",
    options: [
      "A) Tietokoneiden käyttöä tutkimuksessa",
      "B) Luonnontieteen nostamista ainoaksi totuuden kriteeriksi ja inhimillisen kokemuksen ja etiikan pelkistämistä pelkäksi fysiikaksi",
      "C) Rokotteiden kehittämistä laboratorioissa",
      "D) Matematiikan opettamista kouluissa"
    ],
    correctAnswer: "B) Luonnontieteen nostamista ainoaksi totuuden kriteeriksi ja inhimillisen kokemuksen ja etiikan pelkistämistä pelkäksi fysiikaksi",
    explanation: "Scientismi tarkoittaa virheellistä käsitystä: 'luonnontiede on ainoa pätevä tiedonlähde ja että inhimilliset arvot, moraali ja taide voidaan redusoida fysiikaksi'."
  },
  {
    id: "yl-l-29",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Makrotalouden tutkija linjaa: Velkaantumisen kestävyydessä ratkaisevaa ei ole valtionvelan absoluuttinen euromäärä, vaan reaalikoron ja talouskasvun suhde (r miinus g). Mikäli talouskasvu ylittää valtionvelan reaalikoron, velkasuhde bruttokansantuotteeseen supistuu automaattisesti ilman budjetin ylijäämää.",
    prompt: "Milloin velkasuhde supistuu ilman leikkauksia makrotalouden yhtälön mukaan?",
    options: [
      "A) Kun velka maksetaan kerralla pois käteisellä",
      "B) Kun talouskasvu (g) ylittää velan reaalikoron (r)",
      "C) Kun korot nousevat 20 prosenttiin",
      "D) Kun inflaatio laskee nollaan"
    ],
    correctAnswer: "B) Kun talouskasvu (g) ylittää velan reaalikoron (r)",
    explanation: "Tutkija korostaa: 'Mikäli talouskasvu ylittää valtionvelan reaalikoron, velkasuhde bruttokansantuotteeseen supistuu automaattisesti'."
  },
  {
    id: "yl-l-30",
    subtest: "listening",
    maxPlays: 1,
    audioPhrase: "Evoluutiobiologi selittää: Yhteistyö ja altruismi eivät ole luonnonvalinnan vastaisia poikkeamia, vaan evoluution tehokkaimpia strategioita. Sukulaisvalinta ja vastavuoroinen altruismi selittävät, miksi sosiaaliset lajit, ihminen mukaan lukien, uhraavat omaa yksilöllistä etuaan yhteisön selviytymisen puolesta.",
    prompt: "Miten evoluutiobiologia selittää ihmisen epäitsekkyyttä ja yhteistyötä?",
    options: [
      "A) Se pitää yhteistyötä pelkkänä geneettisenä virheenä",
      "B) Se osoittaa yhteistyön ja altruismin olevan menestyksekkäitä evolutiivisia selviytymisstrategioita sukulaisvalinnan kautta",
      "C) Se väittää kaikkien eläinten taistelevan aina vain toisiaan vastaan",
      "D) Se kieltää luonnonvalinnan olemassaolon"
    ],
    correctAnswer: "B) Se osoittaa yhteistyön ja altruismin olevan menestyksekkäitä evolutiivisia selviytymisstrategioita sukulaisvalinnan kautta",
    explanation: "Biologi selittää: 'Yhteistyö ja altruismi eivät ole luonnonvalinnan vastaisia poikkeamia, vaan evoluution tehokkaimpia strategioita'."
  }
];

export const ylintasoSpeaking = [
  // 20 High-Register Debate Rebuttals & Simulated Professional Dialogues
  {
    id: "yl-s-1",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Väittely: Algoritminen päätöksenteko tuomioistuimissa",
    audioPrompt: "Vastaväittäjänne esittää: Tekoälytuomarit ratkaisisivat oikeudenkäyntien ruuhkautumisen ja poistaisivat inhimillisen subjektiivisuuden. Miten vastaatte tähän näkemykseen oikeusturvan ja perusoikeuksien näkökulmasta?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Esitä kriittinen, oikeudellisesti argumentoitu vastaus. Korosta tuomarin harkintavaltaa, ennakkotapausten moraalista ulottuvuutta ja algoritmisen opetusdatan historiallisia vinoumia.",
    modelAnswer: "Näkemyksenne sivuuttaa tuomitsemistoiminnan perimmäisen luonteen. Oikeudenkäynti ei ole pelkkää mekaanista syllogismia tai pykälien ristiintaulukointia, vaan syvällistä inhimillistä ja moraalista harkintaa kunkin tapauksen ainutkertaisissa olosuhteissa. Algoritmit nojaavat aina menneisyyden opetusdataan, mikä pahimmillaan sedimentoi ja moninkertaistaa historian rakenteelliset vinoumat ja syrjintämallit näennäisen objektiivisuuden taakse. Oikeusturva edellyttää oikeutta tulla aidosti kuulluksi inhimillisen tuomarin edessä."
  },
  {
    id: "yl-s-2",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Hallituksen tiedotustilaisuus: Talouskriisin leikkaustoimet",
    audioPrompt: "Toimittaja kysyy kriittisesti: Hallituksenne esittämät leikkaukset koulutukseen ja tutkimukseen uhkaavat romuttaa Suomen tulevaisuuden kilpailukyvyn. Miten perustelette nämä toimet kansalaisille?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa valtiovarainministeriön johtavana asiantuntijana. Tasapainota valtiontalouden velkaantumisen vakavuus ja säästöjen välttämättömyys sekä selitä kohdennukset.",
    modelAnswer: "Ymmärrän täysin kysymyksen herättämän huolen. Emme kuitenkaan elä eristyksessä talouden realiteeteista: korkomenojemme räjähdysmäinen kasvu uhkaa viedä pohjan kaikilta julkisilta palveluiltamme tulevaisuudessa. Kyse ei ole sivistyksen arvon kieltämisestä, vaan välttämättömästä julkisen talouden vakauttamisesta, jotta meillä on varaa rahoittaa korkeatasoista tutkimusta myös ensi vuosikymmenellä. Samalla olemme suojanneet perustutkimuksen kaikkein kriittisimmät kärkihankkeet."
  },
  {
    id: "yl-s-3",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Yliopistopaneeli: Tieteen avoimuus ja turvallisuusuhkat",
    audioPrompt: "Professori kysyy: Eikö avoimen tieteen periaate (Open Science) tulisi ulottaa myös kaikkiin tekoälyn ja biotieteiden tutkimustuloksiin ilman mitään valtiollista sensuuria?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa punniten tiedon vapauden ja kaksoiskäyttöteknologioiden (dual-use) vaaroja (esim. biologiset aseet tai kyberhyökkäykset).",
    modelAnswer: "Tieteen avoimuus on ollut modernin tieteen suurin moottori, mutta sen ehdottomuus kohtaa rajansa kaksoiskäyttöteknologioiden aikakaudella. Emme voi sokeasti sivuuttaa sitä eksistentiaalista riskiä, että patogeenien geneettiset modifikaatiot tai autonomisten kyberaseiden koodit päätyvät avoimesta datasta suoraan valtiollisten vihollisten tai terroristien käsiin. Avoimuuden rinnalla tarvitaan eettistä ja turvallisuuspoliittista ennakkoarviointia, joka suojaa ihmiskuntaa tiedon tuhoisimmilta sovelluksilta ilman perustutkimuksen tukahduttamista."
  },
  {
    id: "yl-s-4",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kansainvälinen neuvottelu: Ilmastokompensaatioiden oikeudenmukaisuus",
    audioPrompt: "Kehittyvän maan edustaja esittää: Globaali pohjoinen on aiheuttanut valtaosan historiallisista päästöistä. Miksi meidän tulisi rajoittaa teollistumistamme samalla aikataululla ilman täysimääräistä taloudellista korvausta?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa kansainvälisenä neuvottelijana. Tunnusta historiallisen vastuun merkitys, mutta argumentoi globaalin ilmastojärjestelmän yhteisen kiireellisyyden ja teknologiasiirron puolesta.",
    modelAnswer: "Argumenttinne historiallisen vastuun jakautumisesta on kiistaton ja oikeudenmukainen. Teollistuneet maat kantavat historiallisen velan ilmakehän hiilikuormasta. Fysikaalinen todellisuus ei kuitenkaan neuvottele: ilmaston keikahduspisteet eivät odota, ja ilmastokatastrofin ankarimmat seuraukset iskevät juuri kaikkein haavoittuvimpiin maihin. Ratkaisu ei ole saastuttavan kehityspolun toistaminen, vaan massiivinen teknologiansiirto, vihreä rahoitus ja tappioiden ja vahinkojen rahaston todellinen pääomittaminen pohjoisen toimesta."
  },
  {
    id: "yl-s-5",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kielipoliittinen debatti: Suomen kielen tulevaisuus tieteessä",
    audioPrompt: "Korkeakoulun rehtori väittää: Suomi on pienen kielialueen kieli. Meidän tulisi siirtyä yliopistoissa kokonaan englantiin parhaan kansainvälisen menestyksen saavuttamiseksi. Mitä sanotte tähän?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Puolusta suomen kielen asemaa korkeakoulutuksessa ja tutkimuksessa argumentoiden kielen roolista demokratiassa ja yhteiskunnallisessa keskustelussa.",
    modelAnswer: "Ehdotuksenne olisi sivistysvaltiollinen itsemurha. Mikäli luovumme suomen kielestä tieteen ja akateemisen ajattelun kielenä, luomme kielellisen kuilun akateemisen eliitin ja muun kansan välille. Kieli kuihtuu, ellei sitä käytetä yhteiskunnan monimutkaisimpien ilmiöiden kuvaamiseen. Kansainvälisyys ja vahva kansalliskieli eivät sulje toisiaan pois: huippututkimusta voi ja pitää tehdä kansainvälisesti englanniksi, mutta samaan aikaan meillä on velvollisuus kehittää suomenkielistä terminologiaa ja pitää tieteen tulokset koko yhteiskunnan saavutettavissa."
  },
  {
    id: "yl-s-6",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Oikeussalissa: Rikosoikeudellisen laillisuusperiaatteen puolustaminen",
    audioPrompt: "Syyttäjä väittää: Vaikka kyseistä toimintaa ei ole nimenomaisesti kielletty rikoslaissa, sen moraalinen moitittavuus on niin ilmeinen, että tuomioistuimen tulisi laajentaa pykälän sanamuotoa analogialla. Miten vastaat puolustusasianajajana?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa jyrkästi torjuen analogisen laintulkinnan rikosprosessissa perustuslain 8 §:n laillisuusperiaatteen (nullum crimen sine lege) nojalla.",
    modelAnswer: "Arvoisa oikeus, syyttäjän vaatimus on räikeässä ristiriidassa länsimaisen oikeusvaltion pyhimmän periaatteen, rikosoikeudellisen laillisuusperiaatteen kanssa. Perustuslain 8 § ja rikoslain 3 luku kieltävät ehdottomasti analogian käyttämisen vastaajan vahingoksi. Ketään ei saa tuomita teosta, jota ei ole tekohetkellä laissa nimenomaisesti säädetty rangaistavaksi. Moraalinen moitittavuus kuuluu lainsäätäjälle, ei tuomioistuimen mielivallalle. Vaatimus on hylättävä heti lainvastaisena."
  },
  {
    id: "yl-s-7",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Mediapaneeli: Sananvapaus vastaan maalittaminen ja vihapuhe",
    audioPrompt: "Kansalaisaktivisti argumentoi: Sananvapauden tulee olla absoluuttista ilman mitään poikkeuksia verkossa, sillä jokainen rajoitus johtaa totalitaariseen sensuuriin. Miten kommentoitte tätä?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa mediaoikeuden asiantuntijana. Analysoi miksi järjestelmällinen häirintä ja maalittaminen tosiasiallisesti vaientavat muita ja heikentävät sananvapautta.",
    modelAnswer: "Absoluuttisen sananvapauden teesi kumoaa paradoksaalisesti itsensä todellisuudessa. Kun verkossa sallitaan koordinoitu häirintä, vainoaminen ja tutkijoihin tai toimittajiin kohdistuva maalittaminen, seurauksena ei ole sananvapauden juhla, vaan toisten sananvapauden tukahtuminen pelon ja itsesensuurin vuoksi. Euroopan ihmisoikeustuomioistuimen oikeuskäytäntö osoittaa selvästi, että oikeuksiin liittyy velvollisuuksia ja vastuuta. Sananvapaus ei suojaa toisten vaimentamista ja oikeusvaltion instituutioiden lamauttamista."
  },
  {
    id: "yl-s-8",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Yritysjohtoryhmä: Kiertotalouden kannattavuus ja pääomamenot",
    audioPrompt: "Talousjohtaja epäröi: Siirtyminen neitseellisistä raaka-aineista kierrätysmateriaaleihin ja tuote-palveluna-malliin vaatii valtavia investointeja ja heikentää kvartaalitulostamme. Miksi meidän pitäisi ottaa tämä riski nyt?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa strategiajohtajana. Argumentoi regulaatioriskeistä (EU:n kestävyysdirektiivit), raaka-aineiden ehtymisestä ja edelläkävijän markkina-asemasta.",
    modelAnswer: "Kvartaalituloksen optimointi tässä hetkessä on strategista sokeutta. Neitseellisten raaka-aineiden hinnat ja saatavuus heikkenevät geopoliittisten kriisien myötä, ja EU:n kiristyvä lainsäädäntö tulee tekemään lineaarisesta talousmallista taloudellisesti mahdotonta sakkojen ja hiilitullien vuoksi. Jos teemme investoinnit nyt, saavutamme ratkaisevan etulyöntiaseman ja luomme brändiarvoa, jota kilpailijat eivät kykene kuromaan kiinni silloin, kun siirtymä muuttuu pakolliseksi."
  },
  {
    id: "yl-s-9",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Väittely: Perustulo vastaan osallistava sosiaaliturva",
    audioPrompt: "Poliittinen vastustajanne esittää: Vastikkeeton perustulo passivoisi ihmiset ja johtaisi työnteon romahtamiseen. Miten vastaatte tähän ihmiskuvan ja työelämän murroksen näkökulmasta?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa perustulon puolesta argumentoiden kannustinloukkujen purkamisesta, ihmisen luontaisesta toiminnantulvasta ja silpputyön todellisuudesta.",
    modelAnswer: "Väitteenne perustuu vanhentuneeseen ja kyyniseen ihmiskuvaan, jossa ihminen liikkuu ainoastaan pakon ja byrokraattisen sanktion alaisena. Nykyinen tarveharkintainen järjestelmämme rankaisee työn vastaanottamisesta passivoivilla kannustinloukuilla: pienikin keikkatyö voi katkaista etuudet kuukausiksi. Perustulo ei poistaisi työnteon halua, vaan purkaisi byrokratian ja loisi turvaverkon, joka mahdollistaa yrittäjyyden, itsensä kehittämisen ja osa-aikatyön yhdistämisen ilman toimeentulon romahtamisen pelkoa."
  },
  {
    id: "yl-s-10",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Bioetiikan foorumi: Geeniterapian tasa-arvohaasteet",
    audioPrompt: "Keskustelija kysyy: Jos kerran geenieditoinnilla voidaan lisätä lapsen älykkyyttä ja vastustuskykyä, miksi valtion pitäisi rajoittaa vanhempien vapautta tarjota parasta mahdollista tulevaisuutta omalle lapselleen?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa analysoiden eugeniikan vaaroja, yhteiskunnallisen eriarvoisuuden syvenemistä ja lapsen itsemääräämisoikeuden rajaamista toisten tahdoksi.",
    modelAnswer: "Yksilöllisen valinnanvapauden retoriikka kätkee taakseen vaarallisen eugenistisen kehityskulun. Kun lapsen perimästä tehdään kulutushyödyke ja vanhempien odotusten toteuttaja, rikotaan syntyvän ihmisen eksistentiaalista autonomiaa. Lisäksi markkinaehtoinen geneettinen parantelu johtaisi väistämättä biologiseen kastiyhteiskuntaan, jossa varakkaat ostavat jälkeläisilleen ylivoimaisia fyysisiä ja kognitiivisia etuja, jolloin ajatus tasa-arvoisista mahdollisuuksista menettää merkityksensä."
  },
  {
    id: "yl-s-11",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Ympäristöneuvottelu: Ydinvoiman rooli vihreässä siirtymässä",
    audioPrompt: "Aktivisti väittää: Ydinvoima ei ole vihreää energiaa, koska siihen liittyy uraaninlouhinnan ympäristöhaitat ja ydinjätteen tuhansien vuosien loppusijoitusongelma. Miten vastaatte tähän?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa tasapainoisesti energiajärjestelmän asiantuntijana. Korosta ydinvoiman päästöttömyyttä, perusvoiman vakautta ja Suomen Onkalo-loppusijoitusratkaisua.",
    modelAnswer: "Kritiikki uraanintuotannosta ja jätteestä on historiallisesti perusteltua, mutta ilmastokriisin kokonaiskuvassa emme voi sivuuttaa fysiikan lakeja. Uusiutuva energia, kuten tuuli ja aurinko, on välttämätöntä, mutta sään mukaan heilahteleva tuotanto vaatii tuekseen vakaata ja vähähiilistä perusvoimaa. Ydinvoiman maankäyttö ja elinkaaripäästöt ovat pienempiä kuin lähes millään muulla energiamuodolla, ja Suomi on ratkaissut loppusijoituskysymyksen maailman ensimmäisenä geologisessa Onkalo-kallioluolastossa."
  },
  {
    id: "yl-s-12",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Hallintotuomioistuimessa: Kunnallisen päätöksenteon esteellisyys",
    audioPrompt: "Kaupungin lakimies väittää: Valtuutetun esteellisyydellä ei ollut merkitystä kaavapäätöksen lopputulokseen, koska päätös tehtiin suurella äänten enemmistöllä. Miten vastaat valittajan edustajana?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa kuntalain ja hallintolain esteellisyyssääntöjen ehdottomuuden pohjalta: esteellisen henkilön osallistuminen tekee päätöksestä aina muotovirheen vuoksi kumoutuvan äänimäärästä riippumatta.",
    modelAnswer: "Lakimiehen argumentti on oikeudellisesti kestämätön. Kuntalain ja hallintolain esteellisyyssäännökset ovat luonteeltaan ehdottomia menettelytapanormeja, joiden tarkoituksena on suojata päätöksenteon puolueettomuutta ja yleistä luottamusta hallintoon. Mikäli esteellinen henkilö on osallistunut asian käsittelyyn tai päätöksentekoon, päätös on syntynyt laittomassa järjestyksessä. Tätä menettelyvirhettä ei voi korjata jälkikäteen vetoamalla äänten määrään, vaan päätös on poikkeuksetta kumottava."
  },
  {
    id: "yl-s-13",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Sosiologinen paneeli: Työelämän uupumus ja jatkuva suorituskeskeisyys",
    audioPrompt: "Keskustelija esittää: Työuupumus johtuu vain siitä, että nykynuoret ovat liian herkkiä eivätkä kestä samanlaista kovaa työntekoa kuin aiemmat sukupolvet. Miten vastaatte tähän?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa hyläten yksilökeskeisen syyllistämisen ja analysoiden työn kognitiivista kuormitusta, tietotyön pirstaleisuutta ja jatkuvan tavoitettavuuden vaatimusta.",
    modelAnswer: "Analyysinne sivuuttaa työelämän syvän luonteellisen murroksen. Aiemmin ruumiillinen työ päättyi silloin, kun tehdas pantiin kiinni ja kotiin lähdettiin. Nykyaikainen asiantuntijatyö on rajatonta, henkisesti kuormittavaa ja jatkuvasti läsnä älylaitteiden kautta. Työntekijältä vaaditaan herkeämätöntä kognitiivista suorituskykyä ja epävarmuuden sietoa tilanteessa, jossa tavoitteet ovat usein epäselviä. Kyse ei ole yksilön heikkoudesta, vaan huonosti johdetuista organisaatioista ja työn rajaamattomuudesta."
  },
  {
    id: "yl-s-14",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kulttuuridebatti: Historian patsaiden kaataminen ja menneisyyden uudelleenarviointi",
    audioPrompt: "Kriitikko väittää: Siirtomaa-ajan ja sortovallan historiallisten patsaiden poistaminen kaupunkitilasta on historian pyyhkimistä ja menneisyyden kieltämistä. Miten argumentoitte patsaiden poiston puolesta?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Erottele toisistaan historian tutkiminen ja historian kunnioittaminen/monumentalisointi. Perustele miksi julkinen tila heijastaa nyky-yhteiskunnan arvoja.",
    modelAnswer: "Tässä sekoitetaan kaksi täysin eri asiaa: historian muistaminen ja historian monumentalisointi. Patsas julkisessa kaupunkitilassa ei ole neutraali historiankirja, vaan kunnianosoitus ja vallan symboli, joka viestii yhteisön yhteisistä arvoista. Sortoon tai orjuuteen syyllistyneiden henkilöiden patsaiden siirtäminen museoihin ei pyyhi historiaa, vaan sijoittaa sen oikeaan kriittiseen kontekstiin. Kaupunkitilan tulee kuulua kaikille kansalaisille, ei menneiden sortajien glorifioinnille."
  },
  {
    id: "yl-s-15",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Teknologiafoorumi: Yksityisyys vastaan kansallinen turvallisuus",
    audioPrompt: "Poliisiylijohtaja vaatii: Viranomaisille tulee antaa takaportti kaikkiin salattuihin viestisovelluksiin terrorismin ja järjestäytyneen rikollisuuden torjumiseksi. Miten vastaatte tietoturva-asiantuntijana?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa selittäen matemaattisen salauksen luonnetta: takaporttia ei voi luoda vain hyville toimijoille, vaan se rikkoo koko yhteiskunnan digitaalisen turvallisuuden.",
    modelAnswer: "Vaatimus osoittaa syvää ymmärtämättömyyttä kryptografian luonteesta. Matemaattisessa salauksessa ei ole mahdollista luoda takaporttia, joka aukeaisi vain hyväntahtoisille viranomaisille. Jos salaukseen rakennetaan heikkous, se on haavoittuvuus myös vihamielisille valtioille, verkkorikollisille ja teollisuusvakoojille. Takaporttien pakottaminen vaarantaisi pankkijärjestelmän, kriittisen infrastruktuurin ja kansalaisten yksityisyyden luoden valtavan turvallisuusuhkan koko yhteiskunnalle."
  },
  {
    id: "yl-s-16",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Yliopistopaneeli: Vertaisarvioinnin kriisi ja julkaisupaine",
    audioPrompt: "Tutkija toteaa: Akateeminen 'julkaise tai tuhoudu' -kulttuuri johtaa tieteen laadun heikkenemiseen ja toistettavuuskriisiin. Miten yliopistojen arviointijärjestelmää tulisi uudistaa?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa esittäen siirtymistä määrällisistä mittareista laadulliseen arviointiin ja julkaisujen avoimuuteen (DORA-julistus).",
    modelAnswer: "Olette täysin oikeassa. Julkaisujen määrän ja lehtien vaikuttavuuskertoimien sokea tuijottaminen on kääntynyt tiedettä vastaan. Se kannustaa tutkijoita pirstaloimaan tuloksia mikrojulkaisuiksi ja suosimaan riskittömiä tutkimusaiheita syvällisen tieteellisen läpimurron kustannuksella. Yliopistojen tulisi sitoutua San Franciscon DORA-julistukseen: tutkijoita on arvioitava heidän parhaiden töidensä todellisen sisällöllisen laadun, avoimuuden ja yhteiskunnallisen vaikuttavuuden perusteella, ei keinotekoisten volyymimittareiden varassa."
  },
  {
    id: "yl-s-17",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Kunnallisvaalitentti: Sosiaali- ja terveyspalvelujen yksityistäminen",
    audioPrompt: "Vastaehdokkaanne väittää: Yksityiset terveysjätit pystyvät aina tuottamaan terveyspalvelut halvemmalla ja tehokkaammin kuin julkinen sektori, joten kaikki palvelut tulisi kilpailuttaa markkinoilla. Miten vastaatte?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa analysoiden kermankuorintaa (cherry-picking), voitontavoittelun ja kalliin erikoissairaanhoidon epäsymmetriaa.",
    modelAnswer: "Tämä markkinafundamentalismi on osoittautunut harhaksi käytännössä. Yksityiset toimijat poimivat markkinoilta kaikkein kannattavimmat ja helpoimmat rutiinitoimenpiteet, jolloin raskas, kallis ja monisairas erikoissairaanhoito ja päivystys jäävät julkisen puolen maksettavaksi. Terveydenhuolto ei ole tavanomainen hyödykemarkkina: sairaalla ihmisellä ei ole markkinoiden edellyttämää täydellistä informaatiota tai mahdollisuutta kilpailuttaa leikkaustaan hädän hetkellä. Julkisen sektorin tehtävä on taata yhdenvertainen hoito, ei tuottaa voittoa pääomasijoittajille."
  },
  {
    id: "yl-s-18",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Väittely: Taiteen julkinen tuki ja markkinaehtoisuus",
    audioPrompt: "Kansanedustaja vaatii: Valtion tulisi lakkauttaa kaikki apurahat taiteilijoille. Jos taideteos on hyvä, ihmiset maksavat siitä markkinoilla. Miten puolustatte taiteen julkista tukea?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa esteettisen ja filosofisen argumentaation kautta. Selitä miksi taide ei ole pelkkää viihdettä ja miten kokeellinen kulttuuri vaatii suojaa markkinapaineelta.",
    modelAnswer: "Taiteen redusoiminen markkinahyödykkeeksi tuhoaisi kulttuurimme moniäänisyyden ja syvyyden. Markkinat suosivat aina massaviihdettä, tuttua ja ennalta-arvattavaa. Aito, kokeellinen ja haastava taide tutkii ihmisyyden rajoja, kritisoi vallanpitäjiä ja luo uutta esteettistä kieltä, joka harvoin on välittömästi kaupallisesti kannattavaa. Julkinen taiteen tuki ei ole almua taiteilijalle, vaan sijoitus koko kansakunnan sivistykseen, luovuuteen ja henkiseen itsetuntoon."
  },
  {
    id: "yl-s-19",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Yhteiskuntapaneeli: Kansalaistottelemattomuus oikeusvaltiossa",
    audioPrompt: "Konservatiivinen debatoija väittää: Elokapinan kaltainen rauhanomainen kadun tukkiminen ilmaston vuoksi on pelkkää anarkiaa ja oikeusvaltion halveksuntaa. Lakia on noudatettava aina. Miten vastaatte?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa kansalaistottelemattomuuden filosofisen perinteen (Thoreau, Gandhi, King, Rawls) pohjalta. Korosta rauhanomaisuutta ja valmiutta kantaa lailliset seuraukset.",
    modelAnswer: "Kansalaistottelemattomuudella on kunniakas ja legitiimi perinne länsimaisessa demokratiassa. John Rawls määritteli kansalaistottelemattomuuden julkiseksi, väkivallattomaksi ja omantunnon sanelemaksi lain rikkomiseksi, jonka tavoitteena on vedota yhteisön oikeustajuun vakavan epäkohdan korjaamiseksi. Toimijat eivät pakene oikeutta, vaan kantavat tekojensa lailliset seuraukset rangaistuksineen. Monet historian suurimmista edistysaskeleista, kuten naisten äänioikeus ja rotuerottelun purkaminen, ovat vaatineet tuekseen rauhanomaista kansalaistottelemattomuutta."
  },
  {
    id: "yl-s-20",
    subtest: "speaking",
    taskType: "dialogue",
    title: "Talouspolitiikan väittely: Veropohjan tiivistäminen ja pääomapako",
    audioPrompt: "Elinkeinoelämän edustaja varoittaa: Jos yritysten osinkoverotusta tai suurituloisten pääomaverotusta kiristetään, pääomat ja innovaattorit pakenevat välittömästi maasta. Miten vastaatte tähän?",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Vastaa empiirisen taloustutkimuksen valossa: pääoman liikkuvuus ei riipu vain veroprosenteista, vaan infrastruktuurista, koulutetusta työvoimasta, luottamuksesta ja turvallisuudesta.",
    modelAnswer: "Pääomapaon uhkakuva on tuttu ja liioiteltu argumentti, jota käytetään torjumaan kaikki oikeudenmukainen verouudistus. Empiirinen taloustutkimus osoittaa, että yritysten ja asiantuntijoiden sijoittumispäätöksissä ratkaisevat vakaa oikeusjärjestys, huippukoulutettu työvoima, toimiva infrastruktuuri, vähäinen korruptio ja yhteiskunnan turvallisuus – kaikki asiat, jotka rahoitetaan juuri verovaroilla. Verokilpailu pohjalle vain rapauttaa nämä menestystekijät ilman vastaavia investointihyötyjä."
  },

  // 10 Keynote Monologues / Persuasive Academic Speeches (Prep 60s, Speak 120s)
  {
    id: "yl-s-21",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Tieteen ja sivistyksen puolustuspuhe valheen aikakaudella",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä yliopiston lukuvuoden avajaisissa juhlapuhe tieteen vapauden ja totuuden etsimisen merkityksestä:\n- Miten totuudenjälkeinen aika ja populistinen tiedevastaisuus uhkaavat yhteiskuntamme kehitystä\n- Miksi tieteellinen metodi ja avoin kritiikki ovat inhimillisen sivistyksen kestävin kivijalka\n- Mikä on yliopistoyhteisön eettinen vastuu totuuden puhujana paineen alla\n- Päätä puheesi voimakkaaseen tulevaisuudenuskoon ja vetoomukseen vapaan ajattelun puolesta.",
    modelAnswer: "Arvoisa akateeminen yhteisö, hyvät kollegat ja opiskelijat. Kokoontuessamme tänään avaamaan uutta akateemista lukuvuotta emme voi ummistaa silmiämme siltä henkiseltä ja poliittiselta myrskyltä, joka riepottelee tiedettä ja sivistystä ympärillämme. Elämme aikakautta, jota leimaavat tiedon pirstaloituminen, kyyninen populismi ja algoritmien kiihdyttämä viha, jossa vuosisatojen tieteelliset saavutukset pyritään alistamaan heimoidentiteetin ja lyhytnäköisen poliittisen hyödyn pelinappuloiksi. Tällaisena aikana yliopiston tehtävä ei ole mukautua vallitsevaan ilmapiiriin tai ryhtyä pelkäksi työelämän tilausten suorittajaksi. Meidän kutsumuksemme on jotain paljon suurempaa: periksiantamaton totuuden etsiminen. Tieteellinen metodi – valmius asettaa omatkin hypoteesit alttiiksi ankaralle vertaisarvioinnille ja kumoamiselle – on inhimillisen hengen jaloin saavutus. Se opettaa meille intellektuaalista nöyryyttä ja suojaa meitä dogmatismeilta. Yliopiston on oltava se vapaan ajattelun saareke, jossa uskalletaan kysyä vaikeat kysymykset silloinkin, kun vastaukset ovat vallanpitäjille epämiellyttäviä. Sivistys ei ole ulkokohtaista oppineisuutta, vaan moraalista rohkeutta seistä totuuden puolella valheen pauhun keskellä. Vaalikaamme tätä vapautta yhdessä, pelkäämättä ja periksi antamatta."
  },
  {
    id: "yl-s-22",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Ekologisen kriisin eksistentiaalinen luonne ja yhteiskuntasopimuksen uusiminen",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä kansainvälisessä tiedekonferenssissa pääpuheenvuoro ekokriisin ja ihmiskunnan tulevaisuuden suhteesta:\n- Miksi ilmastonmuutos ja luontokato eivät ole vain teknisiä ympäristöongelmia, vaan eksistentiaalinen kriisi ihmisyydelle\n- Miten nykyinen talousjärjestelmä on sokeutunut luonnon kanto- ja uusiutumiskyvylle\n- Millaista uutta ekologista yhteiskuntasopimusta tuleville sukupolville tarvitaan\n- Kutsu radikaaliin toivoon ja toimintaan fatalismin sijaan.",
    modelAnswer: "Arvoisat kuulijat. Olemme tottuneet käsittelemään ilmastonmuutosta ja luontokatoa teknisinä ongelmina – päästötonneina, hiilidioksidiprosentteina ja sähköverkon säätövoimana. Tämä teknokraattinen kieli kuitenkin häivyttää todellisuuden syvyyden: olemme keskellä eksistentiaalista kriisiä, joka kyseenalaistaa ihmislajin paikan ja jatkuvuuden biosfäärissä. Teollinen modernisaatio rakentui harhalle, jonka mukaan ihminen on luonnosta erillinen herra ja omistaja, jolla on oikeus alistaa elonkehä ehtymättömäksi raaka-ainevarastoksi ja jätteiden kaatopaikaksi. Nyt planeetan rajat ovat tulleet vastaan, ja ne vastaavat meille myrskyillä, kuivuudella ja lajien massasukupuutolla. Tarvitsemme uuden ekologisen yhteiskuntasopimuksen. Sen on ulotuttava nykyhetken äänestäjien yli kattamaan tulevat sukupolvet ja ei-inhimillinen luonto, jolla on itseisarvoinen oikeus kukoistaa. Tämä vaatii talouden perusteiden kääntämistä: talous ei voi olla itseisarvo, vaan sen on palveltava elämän ylläpitämistä. Älkäämme kuitenkaan vajotko lamauttavaan dystopiaan tai kyyniseen fatalismiin. Todellinen toivo ei ole passiivista odottamista, vaan se syntyy toiminnasta, solidaarisuudesta ja rohkeudesta rakentaa kestävämpi maailma tässä ja nyt."
  },
  {
    id: "yl-s-23",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Ihmisarvo ja etiikka tekoälyn ja transhumanismin aikakaudella",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä puhe tieteenfilosofian kongressissa tekoälyn eksistentiaalisista ja eettisistä vaikutuksista:\n- Miten tekoälyn nopea kehitys haastaa inhimillisen identiteetin ja moraalisen toimijuuden\n- Miksi inhimillistä empatiaa, haavoittuvuutta ja merkityksellisyyttä ei voida redusoida laskennaksi\n- Miten estämme algoritmeja muuttamasta ihmisiä pelkiksi optimoinnin kohteiksi\n- Päätä puhe humanistiseen julistukseen ihmisarvon korvaamattomuudesta.",
    modelAnswer: "Arvoisat kollegat. Seisomme historiamme suurimman murroksen partaalla. Vuosisatojen ajan olemme pitäneet älykkyyttä ja rationaalista päättelyä ihmisyyden ainutlaatuisena kruununa. Nyt olemme luoneet koneita, jotka ylittävät meidät tiedon käsittelyssä, kuvioiden tunnistuksessa ja jopa kielellisessä sujuvuudessa. Tämä herättää ahdistavan kysymyksen: mikä ihmisessä on enää korvaamatonta, jos algoritmi pystyy kaikkeen, mihin me pystymme? Vastaus piilee siinä, mitä koneelta puuttuu ja mitä se ei koskaan voi saavuttaa. Kone voi laskea, mutta se ei voi tuntea. Algoritmi voi diagnosoida sairauden, mutta se ei voi pitää kuolevan potilaan kädestä myötätunnolla. Ihminen ei ole biologinen tietokone; ihmisyys kumpuaa ruumiillisuudestamme, kuolevaisuudestamme ja hauraudestamme. Juuri meidän rajallisuutemme tekee elämästä, rakkaudesta ja moraalisesta vastuusta merkityksellistä. Vaarana ei ole ainoastaan se, että koneista tulee liian ihmismäisiä, vaan se, että me ihmiset alamme kohdella toisiamme koneina – suoritteina, datana ja optimoinnin objekteina. Meidän on asetettava teknologialle tinkimättömät eettiset rajat. Tekoäly olkoon renkimme, mutta ihmisarvo ja inhimillinen sydän säilykööt ikuisesti pyhänä ja koskemattomana."
  },
  {
    id: "yl-s-24",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Oikeusvaltion ja perustuslaillisuuden puolustaminen",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä juhlapuhe tuomarikunnan ja asianajajien vuosikokouksessa oikeusvaltioperiaatteen tilasta:\n- Miten oikeusvaltiota haastetaan sisältäpäin populismilla ja polarisaatiolla\n- Miksi riippumaton tuomioistuinlaitos on kansalaisten vapauden viimeinen suoja\n- Mitä tarkoittaa tuomarin virkavala ja virkavastuu paineen alaisena\n- Vetoa oikeudellisen yhteisön rohkeuteen seistä perusoikeuksien puolella.",
    modelAnswer: "Arvoisat oikeuslaitoksen edustajat, kollegat. Oikeusvaltioperiaate ei ole itsestäänselvyys tai kerran saavutettu tila, joka säilyisi pystyssä ilman jatkuvaa valppautta ja puolustamista. Se on herkkä ja monimutkainen sopimus, joka erottaa sivistyneen yhteiskunnan raa'asta mielivallasta. Tänä päivänä näemme Euroopassa ja maailmalla huolestuttavia merkkejä siitä, miten helposti oikeusvaltion perustuksia voidaan murentaa. Populismi hyökkää tuomioistuinten riippumattomuutta vastaan leimaten oikeudenmukaisen oikeudenkäynnin ja ihmisoikeuksien kunnioittamisen 'eliitin juoniksi' tai 'kansantahdon estämiseksi'. Tuomioistuinlaitoksen tehtävä ei kuitenkaan koskaan ole ollut miellyttää vallanpitäjiä tai seurata yleisen mielipiteen tuuliviirejä. Sen tehtävä on suojella heikointa väkevintä vastaan, suojella vähemmistöä enemmistön tyrannialta ja valvoa, että laki on sama kaikille. Tuomarin ja juristin virkavala velvoittaa meidät asettumaan oikeuden ja perustuslain puolelle silloinkin, kun se vaatii rohkeutta ja tuo mukanaan julkista arvostelua. Pitäkäämme kiinni riippumattomuudestamme, sillä sinä päivänä, kun oikeuslaitos alistuu politiikalle, oikeus kuolee ja kansalaisten vapaus katoaa sen mukana."
  },
  {
    id: "yl-s-25",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Sivistys vastaan markkinahumu – Yliopiston tulevaisuus",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä kantaaottava puhe yliopiston hallituksen strategiaseminaarissa:\n- Miten lyhytnäköinen tulosohjaus ja hyötyajattelu uhkaavat yliopiston perustehtävää\n- Miksi perustutkimus ja ihmistieteet tarvitsevat suojelua kvartaalitaloudelta\n- Miten todellinen sivistys luo kansakunnalle resilienssiä ja henkistä kriisinkestävyyttä\n- Esitä visio rohkeasta, vapaasta ja autonomisesta tulevaisuuden yliopistosta.",
    modelAnswer: "Hyvät yliopiston hallituksen jäsenet. Keskustelemme tänään strategiasta, tulosindikaattoreista ja rahoitusmalleista. Nämä ovat tärkeitä hallinnollisia välineitä, mutta jos unohdamme yliopiston todellisen hengen, strategiamme muuttuu ontoksi kuoreksi. Yliopistoa ei voi johtaa kuin saippuatehdasta. Kun mittaamme kaikkea tutkintomäärillä, yritysrahoituksen euroilla ja välittömällä kaupallisella hyödyllä, suljemme silmämme siltä, mikä tieteessä on kaikkein arvokkainta: vapaalta, ennakkoluulottomalta perustutkimukselta. Suuret tieteelliset vallankumoukset eivät ole koskaan syntyneet tilauksesta tai konsulttien strategiapapereista; ne ovat syntyneet uteliaisuudesta, kärsivällisyydestä ja oikeudesta epäonnistua. Erityisesti humanistiset ja yhteiskuntatieteet ovat joutuneet puolustuskannalle markkinapaineessa, vaikka juuri ne tuottavat sen kriittisen ajattelun, historian tajun ja kielellisen ymmärryksen, jota yhteiskuntamme kipeästi tarvitsee kriisien ja disinformaation keskellä. Palauttakaamme yliopistolle sen arvokkuus sivistysinstituutiona. Olkaamme rohkeita puolustamaan tieteen autonomiaa markkinahumua vastaan, sillä aito sivistys on kansakuntamme kallein aarre."
  },
  {
    id: "yl-s-26",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Suomalaisen kulttuurin identiteetti globalisoituvassa maailmassa",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä puhe Suomalaisuuden Liiton tai kulttuurifoorumin juhlaseminaarissa:\n- Mitä suomalainen kulttuuri-identiteetti merkitsee 2020-luvun moninaisessa yhteiskunnassa\n- Miten suomalaisuus voi olla yhtä aikaa juurevaa ja maailmalle avointa ilman sulkeutunutta nationalismia\n- Kielen ja kirjallisuuden merkitys kansallisessa muistissa\n- Visio dynaamisesta, monikielisestä ja rikkaasta suomalaisuudesta.",
    modelAnswer: "Hyvät juhlavieraat. Kysymys siitä, mitä suomalaisuus on, on ollut liikkeessä läpi koko historiamme. Runebergin ja Snellmanin kansallisromanttisesta heräämisestä nykypäivän urbaaniin ja monikulttuuriseen arkeen identiteettimme on jatkuvasti neuvoteltu ja uudelleenrakennettu. Suomalaisuus ei ole lukkoon lyöty museoarkku, jota täytyy vartioida pelokkaina ulkomaailman vaikutteilta. Aito juurevuus ja kansallinen itsetunto eivät kumpua toisten poissulkemisesta tai vihasta, vaan luottamuksesta omaan kulttuuriimme ja sen kykyyn uudistua. Kieli on sielumme koti: suomen kielen rikkaus, sen luontosanasto, sen hiljaisuuden ja suoruuden arvostus ovat ainutlaatuinen lahja maailmankirjallisuudelle. Samaan aikaan suomalaisuus on aina saanut elinvoimaa kosketuksesta muihin kulttuureihin. Tänä päivänä suomalainen voi olla monella kielellä, monella ihonvärillä ja monella taustalla; meitä yhdistää sitoutuminen yhteiskuntamme arvoihin: tasa-arvoon, oikeudenmukaisuuteen, luonnon kunnioittamiseen ja toisistamme huolehtimiseen. Olkaamme ylpeitä historiastamme ja avoimia tulevaisuudelle – se tekee meistä vahvoja ja ehyitä."
  },
  {
    id: "yl-s-27",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Kansainvälisen solidaarisuuden ja monenkeskisyyden puolustus",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä diplomaattikunnan tilaisuudessa puhe monenkeskisen kansainvälisen järjestelmän puolesta:\n- Miten suurvaltojen unilateralismi ja etupiiriajattelu uhkaavat maailmanrauhaa\n- Miksi kansainväliset järjestöt (YK, WTO, kansainväliset tuomioistuimet) ovat pienten valtioiden elinehto\n- Miten ilmastonmuutos ja globaalit pandemiat vaativat globaalia yhteistyötä enemmän kuin koskaan\n- Vetoomus monenkeskisen sääntöpohjaisen järjestyksen puolustamiseksi.",
    modelAnswer: "Arvoisat diplomaattikunnan jäsenet, hyvät kollegat. Todistamme parhaillaan historiamme vaarallisinta murrosta kylmän sodan päättymisen jälkeen. Suurvallat kääntyvät jälleen kohti imperialistista etupiiriajattelua, unilateralismia ja raakaa asevoiman politiikkaa. Kansainväliset sopimukset, joita pidimme vuorokauden ympäri itsestäänselvinä, kyseenalaistetaan ja sääntöpohjainen maailmanjärjestys horjuu. Tällaisessa maailmassa meillä pienillä ja keskisuurilla valtioilla on velvollisuus korottaa äänemme. Meille monenkeskinen diplomatia, Yhdistyneet kansakunnat ja kansainvälinen oikeus eivät ole pelkkää idealistista retoriikkaa, vaan meidän fyysisen itsenäisyytemme ja turvallisuutemme perusta. Yksikään valtio – ei edes mahtavin suurvalta – kykene ratkaisemaan aikamme todellisia eksistentiaalisia haasteita yksin. Ilmaston lämpeneminen, ekosysteemien romahdus, globaalit pandemiat ja tekoälyn asettamat uhat eivät pysähdy rajapuomeille tai sotilasliittojen aidoille. Ne vaativat yhteisiä sitoumuksia, jaettua vastuuta ja luottamusta. Kansainvälinen yhteistyö on ainoa suojamme barbaariutta vastaan. Puolustakaamme monenkeskisyyttä päättäväisesti."
  },
  {
    id: "yl-s-28",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Taiteen ja esteettisen kokemuksen merkitys ihmisyydelle",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä puhe taideakatemian promootiojuhlassa taiteen metafyysisestä ja yhteiskunnallisesta voimasta:\n- Miten esteettinen kokemus avaa ihmiselle todellisuuden ulottuvuuksia, joita rationaalinen kieli ei tavoita\n- Miten taide toimii vapauden tilana totalitaarisia pyrkimyksiä ja yhdenmukaistamista vastaan\n- Taiteilijan vastuu yhteiskunnan peilinä ja toivon tuottajana\n- Onnittelusanat valmistuville maistereille ja tohtoreille.",
    modelAnswer: "Arvoisat vastapromovoidut taiteen maisterit ja tohtorit, hyvät vieraat. Elämme maailmassa, joka vaatii meiltä jatkuvasti mitattavuutta, taloudellista tuottavuutta ja rationaalista perustelua jokaiselle hengenvakaallemme. Tässä tehokkuuden vankilassa taide on se ihmeellinen ikkuna, joka muistuttaa meitä siitä, että ihmisyys on mittaamaton ja ääretön mysteeri. Esteettinen kokemus – musiikin sointu, maalarin siveltimenveto kankaalla, runon hiljainen säe – koskettaa meissä jotain syvempää kuin mihin arkikieli tai tieteellinen kaava koskaan yltää. Se lohduttaa meitä kuolevaisuuden edessä ja yhdistää meidät toisiin yli vuosisatojen ja maanosien. Totalitaariset hallinnot ovat aina pelänneet taiteilijoita enemmän kuin poliitikkoja, koska aito taide kieltäytyy alistumasta yhdenmukaistamiselle; se pitää elossa mielikuvituksen ja vaihtoehtoisten maailmojen mahdollisuuden. Te, hyvät valmistuvat taiteilijat, otatte tänään vastaan tämän pyhän ja vaativan tehtävän. Olkaa rohkeita, olkaa tinkimättömiä totuudessanne ja tuokaa maailmaan se kauneus ja kriittinen särmä, jota ilman ihmiskunta menettäisi sielunsa."
  },
  {
    id: "yl-s-29",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Yhteisöllisyys ja yksinäisyyden voittaminen modernissa ajassa",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä sosiaalialan ja filosofian symposiumissa pääpuheenvuoro vieraantumisesta ja yhteenkuuluvuudesta:\n- Miten moderni hyperindividualismi on johtanut epidemian kaltaiseen yksinäisyyteen\n- Mitä tarkoittaa solidaarisuus ja toisen kohtaaminen vailla hyötynäkökulmaa\n- Miten yhteiskuntamme rakenteita tulee muuttaa inhimillisen yhteyden palauttamiseksi\n- Loppukaneetti jaetun inhimillisyyden merkityksestä.",
    modelAnswer: "Hyvät symposiumin osallistujat. Aikamme suurin paradoksi on ilmeinen: olemme teknologisesti kytkeytyneempiä toisiimme kuin koskaan aiemmin historiassa, ja silti elämme syvemmän yksinäisyyden ja vieraantumisen aikakautta kuin koskaan ennen. Hyperindividualismi on uskotellut meille, että ihminen on täysin riippumaton saareke, oman onnensa seppä, joka ei tarvitse ketään. Tämä valhe maksaa meille inhimillisen mielenterveyden, yhteiskunnallisen luottamuksen ja elämänilon romahtamisena. Ihminen on biologisesti ja eksistentiaalisesti sosiaalinen olento. Tulemme itseksemme ainoastaan toisen ihmisen katseessa ja hyväksynnässä. Kun yhteiskuntamme muuttaa jokaisen kanssakäymisen transaktioksi, asiakkuudeksi tai verkostoitumisen hyötylaskelmaksi, kadotamme aidon kohtaamisen lahjan. Solidaarisuus ei ole abstraktia valtionapua, vaan konkreettista vastuuta lähimmäisestä – valmiutta nähdä toisen ihmisen hauraus ja vastata siihen myötätunnolla. Meidän on rakennettava kaupunkeja, työpaikkoja ja kouluja, jotka eivät eristä ihmisiä omiin ruutuihinsa, vaan tuovat meidät yhteen jakamaan elämän riemun ja surun. Vasta yhdessä olemme todella ihmisiä."
  },
  {
    id: "yl-s-30",
    subtest: "speaking",
    taskType: "monologue",
    title: "Akateeminen puhe: Tulevaisuuden demokratia – Osallisuus, luottamus ja toivo",
    prepSeconds: 60,
    speakSeconds: 120,
    prompt: "Pidä parlamentaarisen demokratian juhlaseminaarissa päätöspuheenvuoro kansanvallan tulevaisuudesta:\n- Miten kansalaisosallisuutta voidaan syventää deliberatiivisilla menetelmillä ja kansalaisraadeilla\n- Miten luottamus instituutioihin ja toisiin kansalaisiin palautetaan\n- Miksi demokratia on yhä kaikista puutteistaan huolimatta ainoa moraalinen hallintamuoto\n- Innostava kutsu jokaiselle kansalaiselle vaalia ja kehittää kansanvaltaa.",
    modelAnswer: "Arvoisat kansanedustajat, hyvät kansalaiset. Winston Churchill totesi tunnetusti demokratian olevan huonoin hallintomuoto – lukuun ottamatta kaikkia muita, joita on kokeiltu. Tämä lausahdus kätkee sisäänsä syvän viisauden: demokratia on sotkuista, hidasta ja kompromissien täyttämää. Se ei tarjoa helppoja mustavalkoisia vastauksia tai autoritaarisen hallinnon näennäistä tehokkuutta. Mutta se on ainoa poliittinen järjestelmä, joka tunnustaa jokaisen ihmisen yhtäläisen arvon ja oikeuden päättää omasta ja yhteisönsä tulevaisuudesta. Demokratia ei kuitenkaan voi jäädä pelkäksi neljän vuoden välein tapahtuvaksi äänestysrituaaliksi. Meidän on uskallettava uudistaa kansanvaltaa avaamalla päätöksentekoa kansalaisraadeille, osallistuvalle budjetoinnille ja aidolle deliberatiiviselle keskustelulle, jossa kansalaiset kohtaavat toisensa yli puoluerajojen ja oppivat kuuntelemaan toistensa perusteluja. Luottamus ei synny itsestään; se rakentuu avoimuudesta, oikeudenmukaisuudesta ja siitä, että jokainen kokee äänensä tulevan kuulluksi. Demokratia ei ole valmis koneisto, jonka voimme jättää pyörimään omalla painollaan. Se on elävä tuli, jota meidän jokaisen on ruokittava omalla osallistumisellamme, rohkeudellamme ja keskinäisellä kunnioituksellamme joka ainoa päivä."
  }
];
