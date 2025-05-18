import { caption } from "framer-motion/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faListCheck, faCogs, faLightbulb, faUserTie, faUserGraduate, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { icon } from "@fortawesome/fontawesome-svg-core";


export const sections=[
    {title: 'Om mig', content: 'A passionate developer who loves creating intuitive UI/UX experiences.', icon: <FontAwesomeIcon icon={faUserTie}/>},
    {title: "Erfaring", content: "Som uddannet multimediedesigner, har jeg haft muligheden for at udfolde mine evner indenfor UX og research, gennem et års fuldtidsarbejde hos XMedicus ApS.", icon: <FontAwesomeIcon icon={faBriefcase}/>},
    {title: "Projekter", content: "Opbygget fantastiske brugerrelevante koncepter fra idé til kundepitching.", icon: <FontAwesomeIcon icon={faListCheck}/>},
    {title: "Kompetencer", content: "Brugerundersøgelser er i højsæder, da jeg gerne vil fokusere på hvad brugeren har behov for. Med det formål udvikler jeg til at imødekomme disse behov.", icon: <FontAwesomeIcon icon={faUserGraduate}/> },
    {title: "Arbejdstilgang", content: "Design thinking - Stor fokus på at kunne facilitere Google SPRINT. \nJeg ligger vægt på at kunne udveksle ideer i gruppearbejde", icon: <FontAwesomeIcon icon={faPeopleGroup}/>},
]

export const  cases = [
   {
    id: 0,
    date: "03. Feb '25",
    title: "Cirkulær økonomi",
    client: "KEA",
    blurp: "En hurtig case til cirkulær økonomi og at tænke bæredygtigt",
    description: "Mange studerende og undervisere på KEA bruger papir til noter, skitser og brainstorme, \nhvilket fører til et stort papirspild. Samtidig har mange en præference for den analoge fordybelse, som papir og blyant tilbyder. Hvordan kan man mindske papirspild uden at fjerne den taktile oplevelse?",
    extradescription:"Hos KEA skal cirkulær økonomi være det nye sort. KEA arbejder på at mindske vores CO2 udledning og har bæredygtighed som et strategisk pejlemærke.",
    processdescription: "Med afsæt i Cirkular Design lab, blev jeg udfordreret på at tænke i andre divergente baner end hidtil. Det var en fantastisk mulighed for at få brugt kreativiteten og argumentere for mine pointer, ift. idegenerering.",
    image: "src/Components/images/Casecontent/case_cirkulær_økonomi/løsning.png",
    images: [{src:"src/Components/images/Casecontent/case_cirkulær_økonomi/Insigths.png", caption: "Brugerindsigter"}, {src:"src/Components/images/Casecontent/case_cirkulær_økonomi/løsning.png", caption:"Fremtidig løsning"}]
  },{
    id: 1,
    date: "06. Marts '25",
    title: "'Lyt til magien!'",
    client: "Tivoli (fiction)",
    blurp: "En audio guided oplevelse af den magiske have for gæster med synshandicap. ",
    description: "Til dette tivoli projekt, var målet: At designe en digital koncept der skabte en værdiskabende oplevelse. \nVores koncept: Lyt til magien. Et koncept udviklede til gæster i parken, med synshadicap. Konceptet består af en lydbaseret app og et taktilt kort. Appen, baseret på information om parkens forskellige zoner og miljøer, bliver beskrevet af en guide, indtalt af AI-stemmer fra EllevenLabs. Der blev arbejdet meget iterativt med design thinking og double diamond modellerne. Vi fik mulighed for at udstille vores koncept. ",
    extradescription: "Jeg har med en gruppe, arbejdede på at besvare dette problem: 'Hvordan kan vi skabe et innovativt digitalt koncept, der gør Tivoli mere tilgængelig og fremmer inklusion for synshandicappede gæster,\nså de får den fulde oplevelse af Tivolis magiske have?' udviklede dette koncept om en lydbaseret guide i Tivoli parken, for at sikre gæster med synshadicap, kan få en ligeså magisk oplevelse af parken på lige med med seende gæster. Appen, baseret på information om parkens forskellige zoner og miljøer, bliver beskrevet af en guide, indtalt af AI-stemmer fra EllevenLabs. ",
    processdescription: "Der blev arbejdet meget med grundlæggende kvalitative interviews for at få indsigter i synshadicappets hverdag.",
    image: "src/Components/images/Casecontent/case_tivoli/Koncept_prototype.png",
    images: [{src:"src/Components/images/Casecontent/case_tivoli/Koncept_prototype.png", caption:"Koncept"},{src:"src/Components/images/Casecontent/case_tivoli/Prototype.png", caption:"Prototype"}]
  },
  {
    id: 2,
    date: "01. April '25",
    title: "'Vi griber dig, før ludomanien gør'",
    client: "Danske Spil / NoA Ignite",
    blurp: "Ansvarligheden skal opleves hos Danske Spils yngste brugere",
    description: "En udfordring i at komme 'ansvarlighed' til livs hos Danmarks spiludbydere. Mig og min gruppes svar: Ansvarligheden skal faktisk opleves hos brugerne. Vi fik udviklet konceptet, der skal være forebyggende og støttende, således at unge mænd fastholder sunde spillevaner. Konceptet udvider Oddset-appen, da flest fra målgruppen: unge mænd under 25 år, anvender denne app mest. \nDer er udvidet på deres oprettelses flow, forbruget af spil bliver mere synliggjort og hjælpen bliver proaktiv fra Danske spils side af. Jeg har i dette projekt indgået i en tværfaglig team-sammensætning, hvor jeg fik mine kompetencer, indenfor projektfacilitering og idegenering, forstærket.",
    extradescription: "Dette er et koncept der skal gribe unge mænd, der har tidligere spilleerfaring, således at de ikke forværrer deres spillevaner yderligere. Vi har hertil udviklet et særskilt oprettelsesflow for unge mænd under 25 år, hvor de skal indgive nogle økonomiske forhold og en 'Pårørende' sektion, således en fra deres netværk (forældre eller ven) er opmærksomme på brugerens spillevaner. Når brugeren har logget ind, vil de have en forbrugsgrænse at spille for om måneden, baseret på deres angivet indkomstbeløb. For at motivere brugeren til at spille for under sit forbrug, introduceres et point system, hvor fordele kan indløses og opleves hos Danske Spils samarbejdspartnere. Sker det at brugeren ikke overholder sit anbefalet forbrug, vil danske spil tage kontakt til pågældende bruger, samtidig ville der være hjælp at hente direkte fra appen, og den angivet pårørende får også direkte besked herom. Jeg har i dette projekt indgået i en tværfaglig team-sammensætning, hvor jeg fik mine kompetencer, indenfor projektfacilitering og idegenering meget i spil, samt forstærket mine brugerundersøgelsesevner",
    processdescription:"Vi har arbejdet med modellen Double Diamond, hvor vi i discover fasen har arbejdet divergerende i forhold til vores desk research. Vi har arbejdet på at definere det reelle problem i ‘Problem’-diamanten, som blev præsenteret i design briefen af Noa Ignite (NoAIgnite brief, 2025), (https://www.designpsykologi.dk/hvad-er-double-diamond). Parallelt med Double Diamond-modellen arbejder vi også med Google Venture ‘SPRINT’, som er designet til at kunne bygge en prototype på blot fem dage. Brug af dybdegående desk research, interviews med brugere og eksperter, samt et omfattende spørgeskema gjorde vi fandt frem til nogle indsigter, som ikke mange opdagede. 'Nemlig at Danske spil har en gruppe af unge spillere med masser af spilerfaring og aktivt bruger penge i disse spil.' Der blev arbejdet intenst under SPRINT ugen, hvor jeg også agerede Projektfacilitator for 'Sketch' dagen, altså dagen der skulle udformes på idéer og mulige løsninger, vha. Crazy 8's og kreativ tænkning.",
    image: "src/Components/images/Casecontent/case_danskespil/presentation.png",
    images: [{src:"src/Components/images/Casecontent/case_danskespil/presentation.png", caption:"Præsentation"},{src:"src/Components/images/Casecontent/case_danskespil/prototype.png", caption:"Prototype"}]
  },
 ,
  {
    id: 3,
    date: "08. April '25",
    title: "Girltalk Chat",
    client: "Girltalk",
    blurp: "En tryggere og intuitiv chatoplevelse for piger med sårbare emner på hjertet",
    description: "Konceptet “GirlTalk Chat” er en mobilapp, der samler og forbedrer GirlTalks eksisterende chatfunktion i et nyt format.",
    extradescription:"Appen tilbyder anonym skriftlig chat med frivillige rådgivere hver aften, samt mulighed for at indtale talebeskeder, hvis man har svært ved at formidle/udtrykke sine følelser på skrift. Derudover kan pigerne til- eller fravælge daglige notifikationer med omsorgsfulde affirmationer Dette projekt tager afsæt i den stigende mistrivsel blandt unge piger i alderen 12-16 år og NGO’en GirlTalks ønske om at tilbyde støtte på målgruppens præmisser, både digitalt og følelsesmæssigt.",
    processdescription: "Gennem desk research, et semistruktureret interview med en respondent i målgruppen og et fokusgruppeinterview med en række brugere fra målgruppen, opnåede jeg dyb indsigt i målgruppens oplevelser med mistrivsel og rådgivning. Jeg undersøgte også digitale tendenser og platforme, og fandt ud af, at apps foretrækkes blandt målgruppen frem for hjemmesider. Visuelle og emotionelle elementer skaber større tillid hos målgruppen. Derudover har vi lavet seks five-act interviews, med fokus på at teste brugeroplevelsen, brugerinteraktion og brugerrejsen i prototype 1.",
    image: "src/Components/images/Casecontent/case_girltalk/presentation.jpg",
    images: [{src:"src/Components/images/Casecontent/case_girltalk/merch_product.jpg",caption:"Brochure med konceptbeskrivelse"}, {src:"src/Components/images/Casecontent/case_girltalk/merch_product_open.jpg", caption:"Brochure med konceptbeskrivelse udfoldet"}, {src:"src/Components/images/Casecontent/case_girltalk/presentation.jpg", caption:"Præsentation"}]
  },
];