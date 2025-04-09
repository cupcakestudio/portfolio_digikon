
import '../Components/Styling/PortfolioSidestyling.css'
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {_imghvr-zoom-in} from '../imagehover.css-master'
import React, { useState } from 'react';

const cases = [
  {
    title: "Case 1: 'Lyt til magien!' Tivoli projekt",
    description: "Til dette tivoli projekt, var målet: At designe en digital koncept der skabte en værdiskabende oplevelse. \nVores koncept: Lyt til magien. Et koncept udviklede til gæster i parken, med synshadicap. Konceptet består af en lydbaseret app og et taktilt kort. Appen, baseret på information om parkens forskellige zoner og miljøer, bliver beskrevet af en guide, indtalt af AI-stemmer fra EllevenLabs.Der blev arbejdet meget iterativt med design thinking og double diamond modellerne. Vi fik mulighed for at udstille vores koncept. ",
    extradescription: "Jeg har med en gruppe, arbejdede på at besvare dette problem: 'Hvordan kan vi skabe et innovativt digitalt koncept, der gør Tivoli mere tilgængelig og fremmer inklusion for synshandicappede gæster, så de får den fulde oplevelse af Tivolis magiske have?' udviklede dette koncept om en lydbaseret guide i Tivoli parken, for at sikre gæster med synshadicap, kan få en ligeså magisk oplevelse af parken på lige med med seende gæster. Appen, baseret på information om parkens forskellige zoner og miljøer, bliver beskrevet af en guide, indtalt af AI-stemmer fra EllevenLabs. ",
    processdescription: "Der blev arbejdet meget med grundlæggende kvalitative interviews får at få indsigter i synshadicappets hverdag.",
    image: "src/Components/images/image1_placeholder.jpg",
  },
  {
    title: "Case 2: 'Vi griber dig, før ludomanien gør' - danske spil/NoA Ignite og ansvarlighed",
    description: "En udfordring i at komme 'ansvarlighed' til livs hos Danmarks spiludbydere. Mig og min gruppes svar: Ansvarligheden skal faktisk opleves hos brugerne. Vi fik udviklet konceptet, der skal være forebyggende og støttende, således at unge mænd fastholder sunde spillevaner. Konceptet udvider Oddset-appen, da flest fra målgruppen: unge mænd under 25 år, anvender denne app mest. Der er udvidet på deres oprettelses flow, forbruget af spil bliver mere synliggjort og hjælpen bliver proaktiv fra Danske spils side af. Jeg har i dette projekt indgået i en tværfaglig team-sammensætning, hvor jeg fik mine kompetencer, indenfor projektfacilitering og idegenering, forstærket.",
    extradescription: "Dette er et koncept der skal gribe unge mænd, der har tidligere spilleerfaring, således at de ikke forværrer deres spillevaner yderligere. Vi har hertil udviklet et særskilt oprettelsesflow for unge mænd under 25 år, hvor de skal indgive nogle økonomiske forhold (såsom indkomst) og en 'Pårørende' sektion, således en fra deres netværk (forældre eller ven) er opmærksomme på brugerens spillevaner. Når brugeren har logget ind, vil de have en forbrugsgrænse at spille for om måneden, baseret på deres angivet indkomstbeløb. For at motivere brugeren til at spille for under sit forbrug, introduceres et point system, hvor fordele kan indløses og opleves hos Danske Spils samarbejdspartnere. Sker det at brugeren ikke overholder sit anbefalet forbrug, vil danske spil tage kontakt til pågældende bruger, samtidig ville der være hjælp at hente direkte fra appen, og den angivet pårørende får også direkte besked herom. Jeg har i dette projekt indgået i en tværfaglig team-sammensætning, hvor jeg fik mine kompetencer, indenfor projektfacilitering og idegenering meget i spil, samt forstærket mine brugerundersøgelsesevner",
    processdescription:"Vi har arbejdet med modellen Double Diamond, hvor vi i discover fasen har arbejdet divergerende i forhold til vores desk research. Vi har arbejdet på at definere det reelle problem i ‘Problem’-diamanten, som blev præsenteret i design briefen af Noa Ignite (NoAIgnite brief, 2025), (https://www.designpsykologi.dk/hvad-er-double-diamond). Parallelt med Double Diamond-modellen arbejder vi også med Google Venture ‘SPRINT’, som er designet til at kunne bygge en prototype på blot fem dage. Brug af dybdegående desk research, interviews med brugere og eksperter, samt et omfattende spørgeskema gjorde vi fandt frem til nogle indsigter, som ikke mange opdagede. 'Nemlig at Danske spil har en gruppe af unge spillere med masser af spilerfaring og aktivt bruger penge i disse spil.' Der blev arbejdet intenst under SPRINT ugen, hvor jeg også agerede Projektfacilitator for 'Sketch' dagen, altså dagen der skulle udformes på idéer og mulige løsninger, vha. Crazy 8's og kreativ tænkning.",
    image: "src/Components/images/image2_placeholder.jpg",
  },
  {
    title: "Case 3: Den gode morgen oplevelse",
    description: "Et hurtig øvelse i hvordan man laver kvalitative brugerundersøgelser. Her gennemgik vi hvordan et interview bliver udført, og hvad der gør at man bliver en god interviewer.",
    extradescription:"Hertil skulle jeg i fællesskab med mine medstuderende i et mindre team, udforme og storyboarde hvordan en future user journey for en god morgen oplevelse, vil se ud. Vi kom frem til at man kunne udvikle en skærn at opsætte i vinduet, og derved vågne op til ens ønsket morgenladskab, ved at indstille på temperaturen, lysfølsomheden, og audio. Med inspiration fra Philips hue.",
    processdescription: "Vi har i en lille team af 2-3 mennesker udført et interview. Som forarbejde har jeg udviklet en interviewguide, og derefter fik jeg selv lov til at blive interviewet. Efter interviewet, skulle vi i teamet, finde frem til hvilke pain-points der kunne addreseres og opportunity spaces man kunne optimere på, i et service blue-print map. For derefter at udvikle og storyboarde en future user journey med konceptet indarbejdet.",
    image: "src/Components/images/image3_placeholder.jpg",
  },
];

function PortfolioSide() {
/*bladr igennem projecterne med pile og gennem useState til at holde styr på hvilket projekt der vises*/ 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // ➡️ For glide-animation

  const nextCase = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
    setVisMere(false); // reset read more on next
  };

  const prevCase = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    setVisMere(false);
  
  };

  const currentCase = cases[currentIndex];
/* den udfoldede sektion */
  const [visMere, setVisMere] = useState(false);

  const toggleVisMere = () => {
    setVisMere(!visMere);
  };


    return (<>
      
      <div className="portfoliosite">
        <h1>Portfolio Page</h1>
        <p>Se mit arbejde her!</p>
      </div>
     

 {/* AnimatePresence + motion.div */}
 <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className="case_container"
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.5 }} 
         /*        key={currentIndex}
        className="case_container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.6 }}*/
        >
          <div className="text">
            <h3>{currentCase.title}</h3>
            <p>{currentCase.description}</p>
            <button onClick={toggleVisMere}>
              {visMere ? 'Læs mindre' : 'Læs mere'}
            </button>
          </div>

          <div className="portfolioimg">
            <img src={currentCase.image} alt={`Billede af ${currentCase.title}`} />
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Carousel navigation with Font Awesome icons */}
      <div className="carousel-nav">
        <button onClick={prevCase}>
          <FontAwesomeIcon icon={faArrowLeft} /> {/* Left arrow */}
        </button>
        <div className="pager">
    {cases.map((caseItem, index) => (
      <button
        key={index}
        className={`pager-button ${currentIndex === index ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)} // Navigate directly to the specific slide
      />
    ))}
  </div>
        <button onClick={nextCase}>
          <FontAwesomeIcon icon={faArrowRight} /> {/* Right arrow */}
        </button>
      </div> 
      <AnimatePresence>
      <motion.div className='readMore_container'
       initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}>

        <div className='readMore_text'>
       
        {visMere && (
          <motion.div
            className="readMore_container_content"
          /*   initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }} */
          >

            <h3>{currentCase.title}</h3>
            <p>
               {currentCase.extradescription}
            </p>
            </motion.div>
        )}
      

      {/* visible container only if btn read more is cliked */}
      {visMere && currentCase.processdescription && (
        <motion.div
        className="readMore_container_process"
        /* initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }} */
        
      >
        <h3>Proces:</h3>
        <p>
         {currentCase.processdescription}
        </p>
      </motion.div>
      )}  </div>
      {visMere && (
      <div
        className="readMore_img_container"
       /*  initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }} */
        
      >
        <img src={currentCase.image}></img>
      </div>
      )}
      </motion.div>
      
    </AnimatePresence>
     

      <div className="label"><h2>Other projects...</h2></div> 
      <div className="caroussel_showcase">
       {/* initial={{ opacity: 0 }}
  whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
  whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
  whileInView={{ opacity: 1 }} */}
              <img src="src/Components/images/image1_placeholder.jpg" alt="Work 1" />
              <img src="src/Components/images/image2_placeholder.jpg" alt="Work 2" />
              <img src="src/Components/images/image3_placeholder.jpg" alt="Work 3" />
              <img src="src/Components/images/image4_placeholder.jpg" alt="Work 4" />
            
      </div>
    </>);
  }
  
  export default PortfolioSide;
  