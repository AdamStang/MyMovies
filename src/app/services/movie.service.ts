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
            title: "Ak sa nahneváme budeme zlí",
            description: "Po remíze v automobilových pretekoch sú rivali Kid a Ben nútení deliť sa o jednu výhru - terénnu buginu. O tom, komu pripadne auto, má rozhodnúť súťaž v jedení párkov. Skôr než sa však stihne skončiť, gangstri im v neďalekom lunaparku nové vozidlo zničia. Dvojica sa rozhodne žiadať náhradu, čelí opakovaným útokom a napokon sa vyberie priamo za šéfom zločineckej bandy do jeho reštaurácie.",
            imageUrl: "images/WatchOutWeAreMad.png",
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
            description: "Po prepustení z väzenia sa do Miami vracia bývalý zločinec, ktorý si odsedel sedem rokov za krádež 20 miliónov dolárov. Krátko nato je zavraždený. Prípad preberajú dvaja agenti FBI, ktorí do mesta prichádzajú v utajení ako obyčajní policajti – Dave Speed (Terence Hill) a Wilbur Walsh (Bud Spencer). Pri vyšetrovaní narazia na rozsiahlu zločineckú sieť a pomocou netradičných metód, pästí a humoru sa snažia odhaliť pravdu a dostať sa k ukrytému lupu.",
            imageUrl: "images/MiamiSupercops.png",
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
            title: "Malý unavený Joe",
            description: "Bambino (Bud Spencer) sa rozhodne naučiť svojho mladšieho brata Malého Joea (Terence Hill), ako sa stať skutočným banditom a postaviť sa na vlastné nohy. Ich snaha o zločineckú kariéru sa však neustále komplikuje, keď sa namiesto lúpeží zapletú do pomoci bezbrannej rodine osadníkov. Postupne odhalia nelegálny obchod so zbraňami, ktorý ohrozuje celé okolie, a hoci to nemali v pláne, svojimi činmi spôsobia poriadny rozruch a spravodlivosť vezmú do vlastných rúk Malý unavený Joe je volným pokračovaním filmu Pravá a lavá ruka ďiabla.",
            imageUrl: "images/TrinityIsStillMyName.png",
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
            title: "Kto nájde priatela nájde poklad",
            description: "Alan (Terence Hill) a Charlie (Bud Spencer), sa vydávajú na údajne opustený tichomorský ostrov, kde má byť ukrytý poklad japonskej armády z druhej svetovej vojny. Na ich prekvapenie ostrov opustený nie je – čelia domorodcom, zabudnutému japonskému vojakovi a nebezpečným situáciám, pri ktorých ide o život. Spolu prekonávajú nástrahy a útoky pirátov, až nakoniec objavia legendárny poklad, pričom si uvedomia, že najväčším bohatstvom je ich priateľstvo.",
            imageUrl: "images/WhoFindsAFriendFindsATreasure.png",
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
            title: "Buddy mieri na západ",
            description: "Dvaja potulní banditi, „Doktor“ (Bud Spencer), bývalý pištoľník vydávajúci sa za putujúceho lekára, a jeho indiánsky spoločník Girolamo (Amidou), prichádzajú do pokojnej westernovej dediny. Keď skorumpovaný šerif a jeho banda objavia zlato pod miestnou pôdou a pokúsia sa vyhnať obyvateľov, dvojica zasiahne. Pomocou hrubej sily, prefíkaných trikov a komických pästných bitiek ochránia dedinčanov a obnovia spravodlivosť.",
            imageUrl: "images/BuddyGoesWest.png",
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
            description: "Luke sa túla po amerických cestách vo svojom starom džípe s prívesom, v ktorom preváža svojho milovaného koňa. Neustále sa dostáva do konfliktov s policajtmi aj s dvojicou nepríjemných vodičov kamiónov. Luke si však vie poradiť v každej situácii. Jedného dňa sa ujme štrnásťročného Matta, ktorého otca dal bohatý podnikateľ Lawson nespravodlivo uväzniť, aby získal jeho pozemok. Luke sa rozhodne pomôcť Mattovi, jeho otcovi aj ďalším farmárom a zároveň si vyrovnať staré účty s Lawsonom.",
            imageUrl: "images/Renegade.png",
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
            title: "Pravá a ľava ruka diabla",
            description: "Lenivý a neortodoxný pištoľník Malý Joe (Terence Hill) sa znovu stretáva so svojím zavalitým bratom Bambinom (Bud Spencer), zlodejom koní s drsnou povesťou. Spoločne sa postavia na obranu mormónskej osady, ktorú ohrozuje chamtivý major, mexický bandita a ich ozbrojení poskoci. Hoci bratia spočiatku sledujú vlastné záujmy, nakoniec spoja sily v boji za spravodlivosť. Legendárny western ponúka množstvo humoru, bitiek, prestreliek a nezameniteľnú chémiu tejto filmovej dvojice.",
            imageUrl: "images/TheyCallMeTrinity.png",
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
            title: "Pomsta čierneho korzára",
            description: "Pirátsky kapitán Blackie (Terence Hill) sa dozvie o zásielke španielskeho zlata, keď narazí na Dona Pedra, a okamžite začne plánovať jej získanie. Jeho odvážny plán však skrížia traja ďalší pirátski kapitáni, ktorí chcú poklad len pre seba. Medzi nimi je aj drsný pirát Skull (Bud Spencer), ktorý sa s Blackiem dostáva do otvoreného konfliktu. Súboj o zlato sa mení na sériu dobrodružstiev, bitiek a komických situácií na mori aj na pevnine.",
            imageUrl: "images/BlackieThePirate.png",
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
            description: "V dobrodružnej komédii All the Way Boys sa dvaja priatelia, Plata (Terence Hill) a Salud (Bud Spencer), zapletú do boja o kontrolu nad malým juhoamerickým letiskom. Keď zistia, že miestna letecká spoločnosť vykorisťuje chudobných obyvateľov, rozhodnú sa zasiahnuť. Pomocou pästí, humoru a prefíkanosti sa postavia proti zločincom a pomôžu miestnym ľuďom získať spravodlivosť.",
            imageUrl: "images/AllTheWayBoys.png",
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
            title: "Policajt drábom",
            description: "Komisár Rizzo, prezývaný Piedone (Bud Spencer), odmieta nosiť zbraň a v boji proti zločinu sa spolieha len na svoje päste, vďaka čomu si získal rešpekt neapolského podsvetia. Jeho neortodoxné metódy však prekážajú novému policajnému náčelníkovi. V nevhodnom čase sa v meste objaví smrteľne nebezpečná droga. Po vražde informátora Pepita sa Rizzo pustí do nekompromisného boja s marseillským pašerákom a zločineckou sieťou – po svojom, tvrdo a bez ústupkov.",
            imageUrl: "images/TheKnockOutCop.png",
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
            title: "Dvaja misionári",
            description: "V roku 1890 pôsobia na malom ostrove v severozápadnej Venezuele dvaja neobyčajní misionári, otec Pedro de Leon a otec Gino, ktorých netradičné metódy často vyvolávajú sťažnosti. Pomáhajú miestnym obyvateľom predať úrodu, no narazia na chamtivého a skorumpovaného guvernéra Gonzagu, ktorý ich chce pripraviť o všetko. Keď im dá spáliť loď, bratia sa bez váhania postavia na obranu svojho stáda a spravodlivosti – aj za cenu pästných súbojov.",
            imageUrl: "images/TheTwoMissionaries.png",
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
            description: "Neapolský policajný komisár Rizzo, prezývaný Piedone (Bud Spencer), čelí vážnemu obvineniu z obchodovania s drogami. Aby očistil svoje meno, musí odhaliť, kto z mafie infiltroval jeho policajné oddelenie. Pátranie ho zavedie až do Hongkongu, kde spojí sily s americkým mafiánom Frankom Barellom. Spoločne sa zapletú do boja s medzinárodným drogovým gangom. V neznámom prostredí Rizzo opäť presadzuje spravodlivosť po svojom – päsťami, dôvtipom a typickým humorom.",
            imageUrl: "images/FlatfootInHongKong.png",
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
            description: "Dvaja nezamestnaní priatelia, Matt Kirby a Wilbur Walsh, sa z núdze pokúsia o lúpež, no omylom sa vlámu do policajnej stanice. Namiesto väzenia sú nečakane naverbovaní do policajného zboru. Hoci sa chcú uniformy čo najskôr zbaviť, ich služba ich privedie k veľkému zločineckému syndikátu. Napriek neustálym problémom, mafiánom a vlastnej neochote u nich vždy zvíťazí zmysel pre spravodlivosť, humor a poriadna dávka pästí.",
            imageUrl: "images/CrimeBusters.png",
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
            description: "Neapolský policajný komisár Rizzo, prezývaný Piedone (Bud Spencer), dostane správu od policajta z Južnej Afriky, ktorý sa s ním chce stretnúť. Tesne pred schôdzkou je však policajt zavraždený a umierajúci ukáže Rizzovi fotografiu svojho malého syna Boda. Rizzo sa vydáva do Johannesburgu, aby zistil, na čom jeho kolega pracoval, a našiel chlapca. Pátranie ho zavedie do sveta drog, pašovania diamantov a nebezpečných zločincov, ktorým čelí po svojom – päsťami, dôvtipom a humorom.",
            imageUrl: "images/FlatfootInAfrica.png",
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
            title: "Buldozér",
            description: "Jednotka namyslených amerických vojakov si dohodne zápas v americkom futbale s partiou obyčajných talianskych chlapcov. Je jasné, kto je favoritom, vojaci ani na sekundu nepochybujú o svojom víťazstve. Lenže tréningu ich súperov sa ujme bývalý špičkový hráč, ktorému hovoria Buldozér (Bud Spencer). Podarí sa mu nemožné?",
            imageUrl: "images/Buldozer.png",
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
            title: "Párna a nepárna",
            description: "Námorný detektív Johnny Firpo (Terence Hill) spojí sily so svojím nevlastným bratom Charliem (Bud Spencer), bývalým hazardným hráčom, aby rozložili nelegálny herný syndikát pôsobiaci na jachte pri Miami. Zločinci sa snažia ovplyvniť výsledok prestížnej súťaže amerického námorníctva, no bratia im skrížia plány pomocou stávok, hier a prefíkaných trikov. Film ponúka divoké naháňačky na súši aj na mori, množstvo bitiek a typický humor legendárnej dvojice.",
            imageUrl: "images/OddsAndEvens.png",
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
            title: "Hrochy v Afrike",
            description: "Slim (Terence Hill) a Tom (Bud Spencer) sa po rokoch znovu stretnú v Afrike. Dvaja kamaráti, ktorí si zvyčajne neustále lezú na nervy, však nájdu spoločného nepriateľa, keď Ormondovi muži začnú strieľať a odchytávať zver na vývoz a vyháňať miestnych z ich pôdy. Slim pracuje ako kapitán lode, Tom je správcom prírodnej rezervácie a zanieteným ochrancom zvierat. Keď sú ohrozené hrochy aj obyvatelia, dvojica spojí sily a pomocou humoru, prefíkanosti a poriadnej dávky pästí sa postaví zločincom a ochráni africkú prírodu.",
            imageUrl: "images/IamForTheHippopotamus.png",
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
            title: "Miliónový chrobák",
            description: "Neapolský policajný komisár Rizzo, prezývaný Piedone (Bud Spencer), sa po úspešnom zásahu proti pašerákom púšťa do ďalšieho prípadu. Vyšetruje vraždu mladého Araba a únos botanika Cerulla, ktorý objavil hmyz schopný odhaliť skryté ložiská nafty. Stopy vedú do Egypta, kde sa Rizzo stretáva so známym podvodníkom prezývaným Švéd. Neskôr sa za ním vydajú aj jeho kolega Caputo a verný Bodo. V exotickom prostredí sa rozbehne vyšetrovanie plné bitiek, naháňačiek a typického humoru.",
            imageUrl: "images/FlatfootInEgypt.png",
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
            title: "Banánový Joe",
            description: "Bezstarostný obchodník s banánmi žije pokojne na karibskom ostrove, kde vymieňa svoju úrodu a vyhýba sa peniazom aj zákonom. Keď sa skorumpovaní podnikatelia a úradníci pokúsia zmocniť jeho pôdy a prinútiť ho platiť licencie a dane, je po prvý raz donútený ísť do neďalekého mesta. Tam sa postaví modernému systému a pomocou sily, dôvtipu a dobrej povahy bráni svoj domov aj spôsob života",
            imageUrl: "images/BananaJoe.png",
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
            title: "Bombér",
            description: "Bud (Bud Spencer) je bývalý špičkový boxer, ktorý ukončil kariéru po nečestnej prehre spôsobenej podvodom súpera. Žije pokojne, kým nestretne mladého talentovaného boxera bez skúseností. Rozhodne sa ho trénovať a vrátiť sa do sveta boxu, aby napravil staré krivdy. Počas tvrdého tréningu a humorných situácií sa Bud opäť postaví gangsterom aj skorumpovaným promotérom.",
            imageUrl: "images/Bomber.png",
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
            title: "Dvojníci",
            description: "V akčnej komédii Double Trouble sa Bud Spencer a Terence Hill predstavia v štvorrole. Jazzový hudobník a kaskadér sú na nerozoznanie podobní dvom snobským milionárskym bratom, ktorých chce v Riu de Janeiro zlikvidovať gang zločincov. Prijmú preto úlohu ich dvojníkov a ochrankárov. Vďaka zámene osôb, dôvtipu a tvrdým pästiam gangstri dlho netušia, s kým majú do činenia – a nakoniec prichádzajú o všetky plány aj nádeje na zisk.",
            imageUrl: "images/DoubleTrouble.png",
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
            description: "Policajt Dave Speed (Terence Hill) z Miami sa po zásahu pri jadrovej havárii stane obeťou zvláštneho žiarenia, ktoré mu dá nadľudské schopnosti. Získa obrovskú silu, neporaziteľnosť a schopnosť lietať, no len dovtedy, kým neuvidí červenú farbu. Keď je neprávom obvinený z vraždy, stane sa terčom polície aj mafie a musí čeliť sérii neúspešných pokusov o popravu. Akčná komédia spája superhrdinský námet s bláznivým humorom a typickým šarmom Terencea Hilla.",
            imageUrl: "images/SuperFuzz.png",
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
            title: "Choď na to",
            description: "Rosco Frazer (Bud Spencer) a Doug O’Riordan (Terence Hill) vedú rozdielne životy, kým ich náhoda nezvedie dohromady. Najprv sú omylom považovaní za zločincov, neskôr za agentov tajnej služby. Ako Steinberg a Mason sa dostanú k miliónu dolárov a sú vtiahnutí do boja proti organizácii šialeného gangstra K1, ktorý plánuje ovládnuť krajinu vymazaním čísiel z ľudského vedomia. Bez výcviku, no s dôvtipom a tvrdými päsťami sa postavia nebezpečnému sprisahaniu.",
            imageUrl: "images/GoForIt.png",
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