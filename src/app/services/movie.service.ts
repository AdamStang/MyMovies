import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.model";
import { Genres } from "../enums/genres.enum";
import { SortMovie } from "../enums/sortMovie.enum";
import { Actor } from "../models/actor.model";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private movies: Movie[] = [
        {
            id: 1,
            title: "Ak sa nahnevame budeme zli",
            description: "Hlavní cenou pro vítěze automobilových závodů je zbrusu nový závodní speciál. Potíž je v tom, že po dramatickém závodu projedou cílem, zaklesnuti do sebe, dva závodníci současně. Kid a Ben. Vůz je však jen jeden, a tak Kid navrhne, aby si dali závod v tom, kdo sní víc párků a vypije víc piva a vítězi pak připadne výhra. Vypraví se do lunaparku poblíž Benovy dílny a ve zdejší restauraci se pustí do závodu. Těsně před rozhodujícím párkem se však v lunaparku objeví banda gangsterů, kteří pod vedením Attily a Binga začnou demolovat vše kolem sebe a jednou z věcí, které zničí, je také nový vůz Bena a Kida. Jediným důvodem, proč gangsteři v lunaparku řádili, je šéf, který se na radu svého psychiatra rozhodl ukázat všem jak moc je zlý. Neurotický doktor nutí šéfa, aby v podobných akcích pokračoval. Cílem je dosáhnout uzavření lunaparku a pak na jeho místě postavit mrakodrap, z něhož by doktor dostal deset procent zisku. Zatímco Kid se v lunaparku seznámí s pohlednou provazochodkyní, Ben zpívá v místním sboru a pak v dílně nacvičuje novou píseň. Navštíví ho tu Kid, který ho přesvědčí, že by měli po šéfovi gangsterů chtít náhradu za zničený vůz. Vypraví se do jeho restaurace a dají mu ultimátum. Pokud nedostanou nový vůz do zítřejšího poledne, rozzlobí se a budou zlí. Psychiatr však šéfa přesvědčí, že k nim musí být nemilosrdný. Šéf proto nařídí Attilovi, aby to s nimi vyřídil. Ať se však gangster snaží seč může, jeho pokusy zlikvidovat Kida a Bena se nedaří. Dvojic hlavních hrdinů si hravě poradí i s několikanásobnou přesilou. Druhý den se před Benovou dílnou objeví deset motocyklistů, kteří začnou dvojici závodníků provokovat. Těm se je po divoké honičce podaří vylákat na rozlehlou louku za městem, kde je postupně jednoho po druhém zlikvidují. Doktor najme na zlikvidování dvojice nejlepšího zabijáka z podsvětí, přezdívaného Paganini. Ani ten si však na dvojici hrdinů nepřijde. Nakonec se dvojice objeví před dveřmi šéfovy restaurace. A to už se opravdu zlobí. Je jisté, že šéf a jeho banda vzápětí zažijí velmi krušné chvíle.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920489_jvzc8a.png",
            trailerUrl: "https://www.youtube.com/watch?v=xi45r1c7IwQ",
            movieYTUrl: "https://www.youtube.com/watch?v=ev1REgOWIbI",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            rating: 9,
            imdbRating: 7.3,
            csfdRating: 8.5,
            year: 1974,
            favourite: true
        },
        {
            id: 2,
            title: "Superpolicajti z Miami",
            description: "V Super policajtech z Miami se setkáme s našimi hrdiny (Bud Spencer a Terence Hill), tentokráte v rolích dvou odvážných bojovníků se zločinem, kteří jsou na stopě 20 miliónů dolarů, které byly před několika lety ukradeny při vloupání. Při hledání peněz - a zloděje - , při čemž jim samozřejmě trochu pomáhají i dvě krásné dívky, nesmí chybět vražda, nelítostné rvačky a děsný blázinec!",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/000/076/76751_34145b.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=GuPbrwHTQpY",
            movieYTUrl: "https://www.youtube.com/watch?v=iwFZS8LFTcc",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1985,
            rating: 8.4,
            imdbRating: 6.1,
            csfdRating: 6.6,
            favourite: true
        },
        {
            id: 3,
            title: "Maly unaveny Joe",
            description: "Bratři Malý Joe (Terence Hill) a Drobeček (Bud Spencer) se rozhodnou zastavit na návštěvu v rodné chatrči. Drobeček ještě cestou stačí ukrást pár koní. Malý Joe však přijíždí s prázdnou, takže se rodiče začínají strachovat o jeho budoucnost. Otec sice Joea nabádá, že krádeže koní jsou perspektivní zaměstnání, ale tomu „slušná“ práce nevoní. Joe s Drobečkem odjíždějí do blízkého města za zábavou. V tamním saloonu Joe objeví svůj talent falešného hráče pokeru. Za vyhrané peníze oba bratři změní svůj zevnějšek, takže vypadají jako federální agenti Washingtonu. Obě ruce ďábla se vydávají do San Jose procvičit Joea v krádeži koní. Ve městě se dozvídají od místních lidí o zvláštní misionářské stanici, kde jsou věřící biti jako žito. A tak nezbývá, než aby tam ďábel poslal obě svoje ruce. Malý unavený Joe je volným pokračováním filmu Pravá a levá ruka ďábla.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920314_qd7bie.png",
            trailerUrl: "https://www.youtube.com/watch?v=bwI37ZvaRAY",
            movieYTUrl: "https://www.youtube.com/watch?v=lok20tpcZXk",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1971,
            rating: 8.2,
            imdbRating: 7.2,
            csfdRating: 7.8,
            favourite: true
        }, 
        {
            id: 4,
            title: "Kto najde priatela najde poklad",
            description: "Oba vyvedení parťáci se tentokrát vydávají na údajně liduprázdný ostrov, na němž má být ukrytý poklad. K jejich překvapení ostrov není opuštěný, o čemž je dostatečně přesvědčí střelba, při níž jde oběma o život. Kromě domorodců na ostrově žije zapomenutý japonský voják, stále v plné válečné pohotovosti. Společnými silami se vydají hledat záhadný poklad, čelí útoku pirátů, až nakonec dojdou k vytouženému cíli.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920500_g95gz3.png",
            trailerUrl: "https://www.youtube.com/watch?v=FS_sEBdUuNo",
            movieYTUrl: "https://www.youtube.com/watch?v=udFSBBF3vgk",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1981,
            rating: 8.8,
            imdbRating: 7.1,
            csfdRating: 7.6,
            favourite: true
        }, 
        {
            id: 5,
            title: "Buddy mieri na zapad",
            description: "Bud možná vypadá jako doktor, ale doktor rozhodně není. To jen jeho indiánský kamarád Orlí oko přepadl vlak a ukradl jednomu doktorovi kufr, ve kterém prý má být největší poklad. Ale co je tohle za poklad? Jen samé lékařské knihy a nástroje. Jenže než se Bud naděje, celé město, do kterého právě společně s Orlím okem dorazil, si myslí, že Bud je doktor (má přece lékařský kufr) a hned mu zařídí ordinaci. Bud tu ale bude mít ještě jinou práci - musí město zbavit lupičské bandy, která řádí po celém okolí.",
            imageUrl: "http://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920307_i2b1zb.png",
            trailerUrl: "https://www.youtube.com/watch?v=2ouMZ7mClR8",
            movieYTUrl: "https://www.youtube.com/watch?v=NM0ks9e2PrA",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1981,
            rating: 8.7,
            imdbRating: 6.5,
            csfdRating: 7.0,
            favourite: true
        },
        {
            id: 6,
            title: "Dobrodruh",
            description: "Luke se toulá po amerických silnicích ve svém starém džípu s přívěsem, ve kterém s sebou vozí svého milovaného koně. Při svých toulkách má spoustu problémů nejen s policisty, kteří v hrdinovi vidí potenciální problémy své poklidné služby, ale také dva nesympatičtí řidiči kamionu, kterým neustále kříží cestu. Luke si však dokáže poradit v každé situaci. Jednoho dne se ujme čtrnáctiletého Matta, jehož otce dostal do vězení bohatý podnikatel Lawson, aby se mohl zmocnit jeho pozemku. Luke se rozhodne pomoci Mattovu otci i dalším starousedlíkům, které se Lawson pokouší vyštvat z jejich pozemků. Navíc Luke zjistí, že má s Lawsonem nevyřízené účty ještě z dřívějších dob.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/160/979/160979672_195e92.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=TyNVRRs5mCE",
            movieYTUrl: "https://www.youtube.com/watch?v=IYCQy2lKK-E",
            actorIds: [2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1987,
            rating: 8.6,
            imdbRating: 6.2,
            csfdRating: 6.4,
            favourite: true
        }, 
        {
            id: 7,
            title: "Prava a lava ruka diabla",
            description: "Joe Trinity, jehož přezdívají pro umění zacházet s revolverem Pravá ruka ďábla, přichází do městečka, kde je jeho bratr Bambino, Levá ruka ďábla, šerifem. Pravda, šerifem falešným, protože toho pravého postřelil, a tak ho zastupuje, než přijdou jeho komplici, aby připravili loupež. Místo toho se však bratři musí postavit na stranu zákona a chránit osadníky před nenasytným vlastníkem půdy a stáda koní Harrimanem...",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920298_23ox1w.png",
            trailerUrl: "https://www.youtube.com/watch?v=gsVGjKal9_I",
            movieYTUrl: "https://www.youtube.com/watch?v=yVNGxJErLBg",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1970,
            rating: 8.0,
            imdbRating: 7.4,
            csfdRating: 8.0,
            favourite: true
        },
        {
            id: 8,
            title: "Pomsta cierneho korzara",
            description: "Pirát zvaný Blackie (Terence Hill) má v hlavě velký plán. Chce přepadnout španělskou loď a pořádně se na této akci obohatit. Naskytne se ale ještě jedna příležitost jak zbohatnout. Na dražbě se objeví krásná žena, ve které Blackie pozná manželku místokrále. Koupit ji je však problém, protože pirát Skull (Bud Spencer) o ni má také zájem. Nakonec Blackie Skulla přeplatí a Isabelu získá. Skull se ale s prohrou jen tak nesmíří…",
            imageUrl: "https://www.niagara.sk/images/products/big/pomsta-cierneho-korzara.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=4aQI9jvOt8w",
            movieYTUrl: "https://www.youtube.com/watch?v=73-N2c9fvpA",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1970,
            rating: 7.8,
            imdbRating: 5.2,
            csfdRating: 6.0,
            favourite: true
        },
        {
            id: 9,
            title: "Dvaja machri medzi nebom a peklom",
            description: "Zpočátku Salud a Plata pracovali pro svého známého, ale pak se s jedním jeho letadlem zřítili do pralesa. Vyvázli bez zranění a dostali se do tábora hledačů smaragdů. Seznámí se tu nejen se starým prospektorem Mattem, ale také s poměry, které výrazně ovlivňuje gangsterský boss, přezdívaný pan Ucho. Salud a Plata se rozhodnou začít sami podnikat. Seženou si staré letadlo, opraví ho a pustí se do práce. Daří se jim a dokonce si otevřou prosperující hospodu. To se ovšem nelíbí konkurenci, kterou je mocný pan Ucho. Proto při nejbližší příležitosti vyhodí do vzduchu jejich letadlo a podpálí nálevnu. Salud se to dozví, nakoupí zbraně a jde si to s panem Uchem a jeho kumpány vyřídit. S pomocí Plata se mu podaří gangstery porazit a pak bossovým letadlem odvážejí Matta a jeho psa do Salvadoru, což bylo staříkovo vysněné přání. Když Matt zemře, zjistí přátelé, že jeho historky o smaragdové hoře vůbec nebyly smyšlené. V jeho věcech totiž objeví obrovský smaragd. Ale to zdaleka není konec dobrodružství, protože je tu pan Ucho a jeho daleko sahající prsty.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920493_esu85f.png",
            trailerUrl: "https://www.youtube.com/watch?v=pm-YNZq9Rok",
            movieYTUrl: "https://www.youtube.com/watch?v=I7R_oscyGKE",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1972,
            rating: 7.5,
            imdbRating: 6.6,
            csfdRating: 7.1,
            favourite: true
        }, 
        {
            id: 10,
            title: "Policajt drabom",
            description: "Komisař Rizzo přezdívaný Velká noha odmítá nosit zbraň. V boji proti zločinu si vystačí se svými pěstmi, díky nimž si získal respekt celého neapolského podsvětí. Avšak Rizzovy netradiční metody práce začnou být velmi záhy trnem v oku novému policejnímu náčelníkovi, který se rozhodne, že svého podřízeného předělá k obrazu svému. Jenže na malicherné spory si nevybere právě nejvhodnější dobu. Ve městě se totiž objeví nové smrtelně nebezpečné drogy, jež si velmi záhy vyžádají i prvé oběti. Rizzo se pouští do boje s marseilleským překupníkem, na jehož stopu se dostane díky poslednímu tipu zavražděného informátora Pepita. Naštvaný hromotluk v policejní uniformě chce překupníka dostat za každou cenu. A můžete vzít jed na to, že když si Rizzo něco vezme do hlavy, nezastaví ho ani přesila mafiánských zabijáků, ani jeho nadřízený. A rozhodně to udělá po svém...",
            imageUrl: "https://filmnadvd.b-cdn.net/PICTURES/policajt-drabem-dvd.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=lTFMr1Y1Nfc",
            movieYTUrl: "https://www.youtube.com/watch?v=ss9DKiONmVs",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1973,
            rating: 7.8,
            imdbRating: 6.7,
            csfdRating: 7.3,
            favourite: true
        },
        {
            id: 11,
            title: "Dvaja misionari",
            description: "V roce 1890 žili na malém ostrůvku v Jižní Americe dva misionáři, otec Pedro de Leon a otec G. Jejich misionářská činnost se ovšem poněkud vymykala běžným postupům, což mělo za následek, že na ně chodily biskupovi pravidelné stížnosti Otec Pedro a otec G se právě chystají na cestu lodí, během níž chtějí prodat papoušky a žoky pepře a za utržené peníze přivézt svým ovečkám vše, co potřebují. Když dorazí k cíli své cesty, chtějí prodat náklad pepře, zjistí ale, že hamižný guvernér, markýz Gonzaga, svévolně snížil cenu pepře, a to tak, že místní obyvatelé budou ještě ožebračenější, než jsou nyní. Oba bratři ošetřují nemocné a káží o tom, že lakomce a ty, kteří se snaží obohatit na úkor jiných, čeká peklo. To se ovšem Gonzagovi nelíbí, a proto pošle své muže spálit loď, na které oba misionáři připluli. Ti jsou nuceni obstarat si jinou, nemají však peníze. Otec G nepozorovaně sebere prsten z biskupova prstu a zastaví ho. Zděšený otec Pedro chce prsten co nejdříve vyplatit a vrátit jeho právoplatnému majiteli. Bratři tedy vymyslí další neortodoxní způsob, jak se dostat k penězům: svléknou své mnišské oděvy a zavítají do místní herny",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/188/169188514_73tryc.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=PL6QDbLKKwM",
            movieYTUrl: "",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1974,
            rating: 7.9,
            imdbRating: 6.3,
            csfdRating: 7.0,
            favourite: true
        },
        {
            id: 12,
            title: "Policajt v Hongkongu",
            description: "Inspektora Rizza přezdívaného Velká noha čeká náročný případ, který se ho osobně dotýká. Někdo se totiž odvážil obvinit ho z obchodování s drogami. Aby očistil své jméno, musí zjistit, kdo z kruhů blízkých mafii infiltroval jeho policejní oddělení. Každý druhý by se takového úkolu zalekl, anebo si na něm později zlámal vaz, avšak pro Rizza neřešitelné případy prostě neexistují. Zjistí pravdu, i kdyby se kvůli tomu měl vydat až do samotného Hong Kongu...",
            imageUrl: "http://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/160/616/160616338_c7f38a.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=atuJJstERBU",
            movieYTUrl: "https://www.youtube.com/watch?v=TdTv9TZhAWY",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1975,
            rating: 7.8,
            imdbRating: 6.4,
            csfdRating: 6.5,
            favourite: true
        },
        {
            id: 13,
            title: "Dvaja Policajti",
            description: "Bud Spencer a Terence Hill v roli policistů proti své vůli. Nouze a neustálé potíže s mafiány a jinými nepoctivci přivedou Buda do řad policistů, kteří navíc mají tak krásné motorky. V podstatě podobně je na tom i Terence. Brzy však poznají, že služba u policie byla jejich největším životním omylem. Dělají tedy všechno pro to, aby se uniformy zbavili. Ale vždy u nich nakonec zvítězí smysl pro spravedlnost.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/000/020/20961_e3cf9f.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=sWL_e04MJbw",
            movieYTUrl: "https://www.youtube.com/watch?v=bxseQnt15Pk",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1977,
            rating: 8.3,
            imdbRating: 7.1,
            csfdRating: 7.7,
            favourite: true
        },
        {
            id: 14,
            title: "Policajt v Afrike",
            description: "Neapolský policejní komisař Rizzo přezdívaný Velká noha se právě vrátil z Hong Kongu, kde se velmi razantně očistil od obvinění, že je překupníkem drog. Jenže klidu si příliš neužije. Okamžitě se musí pustit do dalšího případu. Tentokrát však nejde jen o drogy, ale také o krádež a pašování diamantů. Na prodej drog i nelegální obchod s diamanty ho upozorní africký kolega, který je ovšem vzápětí zavražděn. Stopy vraha vedou do Johannesburgu, kam se Rizzo neprodleně vydává. Ještě před odjezdem se ale setká s bývalým strážmistrem Caputem a s Bodem, synkem zavražděného policisty, kteří se ochotně stávají jeho pomocníky v boji proti dobře informované narkomafii. Od prvního okamžiku, kdy nenápadná trojka vystoupí z letadla, musí komisař čelit najatým zabijákům, kteří nevynechají jedinou příležitost, aby se ho nepokusili zabít. Ale Rizzo poněkud přihlouplé a nešikovné protivníky s přehledem likviduje pádnými pěstmi i důvtipem. Kromě toho stále pátrá po vrahovi afrického kolegy. Stopa ho zavede až k odhadci drahých kamenů Spyrosovi a jeho šéfovi, jenž se neštítí žádného zločinu...",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/013/158013080_c3c8c8.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=Ej8R-sEH6_8",
            movieYTUrl: "https://www.youtube.com/watch?v=Xkhw8GjnNaU",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1978,
            rating: 7.8,
            imdbRating: 6.2,
            csfdRating: 6.7,
            favourite: true
        },
        {
            id: 15,
            title: "Buldozer",
            description: "Jednotka namachrovaných amerických vojáků dohodne utkání v americkém fotbale s partou obyčejných italských kluků. Je jasné, kdo je favoritem, vojáci ani na vteřinu nepochybují o svém vítězství. Jenže trénování jejich protivníků se ujme bývalý špičkový hráč, kterému říkají Buldozer (Bud Spencer). Podaří se mu nemožné?",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920556_d1iu30.png",
            trailerUrl: "https://www.youtube.com/watch?v=Z_mQ4CBC_MY",
            movieYTUrl: "https://www.youtube.com/watch?v=yHFPEGksh7M",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1978,
            rating: 7.4,
            imdbRating: 6.7,
            csfdRating: 6.6,
            favourite: true
        },
        {
            id: 16,
            title: "Parna a neparna",
            description: "Jedna z nejproslulejších komedií dvojice Bud Spencer a Terence Hill. Tentokrát opět musí oba kumpáni spojit síly, aby společně zlikvidovali bandu, která chce zabránit loďstvu Spojených států ve vítězství v soutěži námořních sil. Pomocí různých sázek, her a soutěží se oba dostanou až do samotného hlavního stanu zločineckého gangu. Film je plný divokých honiček na souši i na moři, nekonečných rvaček a hráčských fint.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920502_bdcwhj.png",
            trailerUrl: "https://www.youtube.com/watch?v=lQf3lIqr8MA",
            movieYTUrl: "https://www.youtube.com/watch?v=z7461RbomyQ",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1978,
            rating: 8,
            imdbRating: 7.1,
            csfdRating: 8.2,
            favourite: true
        },
        {
            id: 17,
            title: "Hrochy v afrike",
            description: "Bláznivý příběh dvou kamarádů, kteří se pokouší zbohatnout a téměř proti své vůli jsou zataženi do dobrodružství, kde mohou naplno využít své pádné pěsti a důvtip. Tentokrát se rozhodnou pro podnikání v oblasti cestovního ruchu a otevřou si cestovní kancelář pod tropickým africkým sluncem. Jako rození smolaři však nemají lehký život a na jejich výpravy šokovaní turisté jen tak nezapomenou. Zejména pokud měli tolik nerozumu, že si s nimi chtěli zahrát karty. Hůř už totiž mohli dopadnout jen ti, kdo si dovolili ohrožovat zvířata, která oba svérázní průvodci potřebovali pro své podnikání.",
            imageUrl: "https://www.niagara.sk/images/products/big/hrochy-v-afrike.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=VqlnI34OXa0",
            movieYTUrl: "https://www.youtube.com/watch?v=tiHh9gOWaLI",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1979,
            rating: 8,
            imdbRating: 6.6,
            csfdRating: 6.8,
            favourite: true
        },
        {
            id: 18,
            title: "Milionovy chrobak",
            description: "Neapolský policista Rizzo přezdívaný Velká noha právě úspěšně dořešil případ v Johannesburgu, kde poněkud razantnějším způsobem převychoval překupníky a pašeráky narkotik. Po dobře odvedené práci si chtěl trochu odpočinout, ale místo toho se musí okamžitě pustit do dalšího případu. Tentokrát se vydává po stopách vrahů mladého Araba Omara Hakima a současně únosců, kteří se zmocnili botanika Cerulla. Ten se nechal jen pár dní před únosem slyšet, že objevil brouka, s jehož pomocí bude možno odhalit dosud skryté prameny nafty. Během vyšetřování Rizzo zjistí, že v únosu má prsty známý podvodník přezdívaný Švéd, který se právě chystá do Káhiry. Na takovém výletě Rizzo samozřejmě nesmí chybět _ k velké radosti Švéda, jenž o hromotlukovu přítomnost ani trochu nestojí. Ale ani policista to nemá jednoduché. Cestou se musí vyrovnat nejen s přítomností horlivého kolegy Caputa a černouška Boda, ale také s řadou vražedných útoků, které proti němu a jeho přátelům podnikají muži v hnědých burnusech a červených turbanech. Rizzova cesta plná rvaček, honiček a pěstních soubojů vede až k původci všeho zla, zrádnému Zakarovi, jenž se chce zmocnit profesorova tajemství a pak se zbavit všech svědků...",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/406/158406133_f10632.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=yjwEvzssehs",
            movieYTUrl: "https://www.youtube.com/watch?v=3fD8ngguSUQ",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1980,
            rating: 7.8,
            imdbRating: 6.1,
            csfdRating: 7.2,
            favourite: true
        },
        {
            id: 19,
            title: "Bananovy joe",
            description: "Banánový Joe přijíždí s bárkou plnou ovoce. Má sice trsy prvotřídních banánů, ale není mu to nic platné. Potřebuje nutně získat licenci, kterou požaduje mafie, ale ta se pro Joea stává nedostupnou. Silák zvyklý žít v přírodě se dočká ve městě pouze problémů. Útoky soupeřů řeší tak, jak jsme na to ve filmech s Budem Spencerem zvyklí - úderem obří pěsti. Pomůže mu jeho síla i k banánové licenci, nebo Joe vyřeší potíže jiným způsobem?",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920490_022dho.png",
            trailerUrl: "https://www.youtube.com/watch?v=IzDSgSuf4oE",
            movieYTUrl: "https://www.youtube.com/watch?v=2UaSzGWynHI",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1982,
            rating: 7.9,
            imdbRating: 6.3,
            csfdRating: 6.6,
            favourite: true
        },
        {
            id: 20,
            title: "Bomber",
            description: "Bud (Bud Spencer) je bývalý špičkový boxer. S boxem přestal po té, co prohrál zápas kvůli nekalým praktikám soupeře. Teď se mu naskytla příležitost vyrovnat účty a dát několika všivákům pořádně do nosu. Ujme se tréninku začínajícího boxera, ze kterého chce udělat profesionála, který bude schopný porazit ty nejlepší.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920491_qarlb6.png",
            trailerUrl: "https://www.youtube.com/watch?v=SGy-_Iwbpvw",
            movieYTUrl: "https://www.youtube.com/watch?v=JEIWmhfIbRM",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1982,
            rating: 7.6,
            imdbRating: 6.2,
            csfdRating: 5.8,
            favourite: true
        },
        {
            id: 21,
            title: "Dvojnici",
            description: "Bud Spencer a Terence Hill tentokrát v čtyřroli. Zahrají si dva snobské milionáře, které chtějí obrat gangsteři o veškeré jmění, tak rovněž dva ochránce, Kteří se nezaleknou jen tak nějaké pohrůžky a pro ránu nejdou nikdy daleko. Obě dvojice jsou si natolik podobné, že vyděrači až příliš pozdě poznají, s kým mají co do činění. V tu chvíli už počítají ztráty a je jim jasné, že majetek milionářů se na jejich konta stěhovat nebude.",
            imageUrl: "https://www.moviemania.sk/img/film/n/non-ce-due-senza-quattro.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=dVNFJgum4X0",
            movieYTUrl: "https://www.youtube.com/watch?v=nXlJ2Th8IrY",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1984,
            rating: 7.9,
            imdbRating: 7.1,
            csfdRating: 7.5,
            favourite: true
        }, 
        {
            id: 22,
            title: "Superpolicajt",
            description: "Dave Speed (Terence Hill) je bezvýznamný policajt z malého amerického mestečka, ktorého poverujú len rutinnými úlohami. Aj dnes ho vyšlú na misiu do bývalej indiánskej rezervácie, aby tam vyšetril banálny prípad. Neďaleko sa však nachádza utajený vojenský priestor s nukleárnou strelnicou. Čo čert nechcel, práve počas vyšetrovania nad Davom vybuchne zatúlaná atómová hlavica a zasiahne ho rádioaktívne žiarenie. To však nemá smrteľné účinky, naopak, obdarí ho nadprirodzenými schopnosťami a silami. Dave zrazu dokáže hýbať predmetmi a objektmi silou svojej mysle, je schopný odhaliť všetky nevysvetliteľné zločiny a nerobí mu problém zoskočiť zo strechy mrakodrapu. Priatelia ani kolegovia si nedokážu vysvetliť túto náhlu premenu dobráckeho babráka na superpolicajta, ktorý zastúpi celú kompletne vyzbrojenú jednotku rýchleho policajného nasadenia SWAT. Dave Speed zachraňuje svet od zločinu, ale kto zachráni svet pred všemocným a všetkého schopným Davom Speedom? Horlivý policajt sa rozhodne investovať všetky svoje schopnosti do služieb zákona. Pri zásahu proti bande falšovateľov však akcia dopadne zúfalo, jeho nadriadeného unesú zločinci a Dave skončí vo väzení. Vďaka svojim nadprirodzeným schopnostiam sa mu odtiaľ podarí uniknúť, oslobodiť svojho veliteľa a zachrániť život mužovi, ktorého podsvetie odsúdilo na smrť. Pri konečnom účtovaní, prirodzene, vytrestá všetkých páchateľov tak, ako sa patrí...",
            imageUrl: "https://www.niagara.sk/images/products/big/superpolicajt.jpg",
            trailerUrl: "https://www.youtube.com/watch?v=obvWWcHLI6I",
            movieYTUrl: "https://www.youtube.com/watch?v=zsVnthCHRFk",
            actorIds: [2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1980,
            rating: 8.8,
            imdbRating: 6.3,
            csfdRating: 7.1,
            favourite: true
        },
        {
            id: 23,
            title: "Chod na to",
            description: "Dva týpkové mají různé životní osudy, než je náhoda svede dohromady. Rosco Frazer a Doug O'Riordan spolu zažijí pár zvláštních situací, když jsou nejprve považováni za zločince, posléze ovšem za super-tajné špióny a do rukou se jim dostane milión dolarů v hotovosti. Jako agenti Steinberg a Mason bojují proti organizaci šíleného gangstera K1, který má plán na ovládnutí země tak, že z lidskeho vědomí smaže čísla.",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920492_reh0x3.png",
            trailerUrl: "https://www.youtube.com/watch?v=HtJ2EOTkmiQ",
            movieYTUrl: "https://www.youtube.com/watch?v=cZ0l-R6c-yA",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1983,
            rating: 8.1,
            imdbRating: 7.1,
            csfdRating: 7.7,
            favourite: true
        }
    ];

    getMovies(search: string, favoriteOnly: boolean, genres: string[], actors: Actor[], sort: SortMovie): Movie[] {
        const movies =  this.movies.filter(movie => {
            const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
            const matchesFavorite = !favoriteOnly || movie.favourite === true;
            const matchesGenres = !genres?.length || 
                movie.genres?.some(g => genres.includes(g));
            const matchesActors = !actors?.length || 
                movie.actorIds.some(a => actors.map(x => x.id).includes(a));

            return matchesSearch && matchesFavorite && matchesGenres && matchesActors;
        });

        switch (sort) {
            case SortMovie.Rating:  
                return movies.sort((a, b) => b.rating - a.rating);
            case SortMovie.Year:
                return movies.sort((a, b) => b.year - a.year);
            case SortMovie.Name:
                return movies.sort((a, b) => a.title.localeCompare(b.title));
            default: 
                return movies;
        }
    }

    getMovieById(id: number) : Movie | undefined {
        return this.movies.find(x => x.id === id);
    }
}