
import '../Components/Styling/PortfolioSidestyling.css'
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';

const cases = [
  {
    title: "Case 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "src/Components/images/image1_placeholder.jpg",
  },
  {
    title: "Case 2",
    description: "More text about another project, still just placeholder stuff.",
    image: "src/Components/images/image2_placeholder.jpg",
  },
  {
    title: "Case 3",
    description: "Even more project description here. Third case in carousel.",
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
        {visMere && (
          <motion.div
            className="readMore_container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              This is extra content for {currentCase.title}. You can customize this per project.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* visible container only if btn read more is cliked */}
      {visMere && (
        <motion.div
        className="readMore_container"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        
      >
        <p>
          Why do we use it? It is a long established fact that a reader will be distracted...
        </p>
      </motion.div>
      )}


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
  