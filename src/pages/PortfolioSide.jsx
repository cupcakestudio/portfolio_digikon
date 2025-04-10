
import '../Components/Styling/PortfolioSidestyling.css'
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import {_imghvr-zoom-in} from '../imagehover.css-master'
import React, { useState } from 'react';
import {cases} from '../Components/CVdata'

function PortfolioSide() {
/*bladr igennem projecterne med pile og gennem useState til at holde styr på hvilket projekt der vises 
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

  const currentCase = cases[currentIndex];*/
/* den udfoldede sektion
  const [visMere, setVisMere] = useState(false);

  const toggleVisMere = () => {
    setVisMere(!visMere);
  }; */

  /*udfold case index state*/
  const [openIndex, setOpenIndex] = useState(null);

  const toggleVisMere = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (<>
    <div className="timeline">
        {cases.map((caseItem, index) => (
          <div key={index} className={`timeline_item ${index % 2 === 0 ? 'left' : 'right'}`}>
            {/* date on opposite side*/}
            <div className={`timeline_date ${index % 2 === 0 ? 'right' : 'left'}`}><p> {caseItem.date}</p></div> 
           
            {/* content box*/}
            
            <div className="content">
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              {caseItem.image && (
                <img src={caseItem.image} alt={`Billede af ${caseItem.title}`} />
              )}

              <button onClick={() => toggleVisMere(index)}>
                {openIndex === index ? 'Læs mindre' : 'Læs mere'}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="readMore_section"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {caseItem.extradescription && (
                      <>
                        <h4>Mere info:</h4>
                        <p>{caseItem.extradescription}</p>
                      </>
                    )}
                    {caseItem.processdescription && (
                      <>
                        <h4>Proces:</h4>
                        <p>{caseItem.processdescription}</p>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
           
            </div>
          </div>
        ))}
      </div>
 </>)
}

  
  
  export default PortfolioSide;

  /*
   {/* AnimatePresence + motion.div }
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
        transition={{ duration: 0.6 }}
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
      {/* Carousel navigation with Font Awesome icons }
      <div className="carousel-nav">
        <button onClick={prevCase}>
          <FontAwesomeIcon icon={faArrowLeft} /> {/* Left arrow }
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
          <FontAwesomeIcon icon={faArrowRight} /> {/* Right arrow }
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
            transition={{ duration: 0.4 }} 
          >

            <h3>{currentCase.title}</h3>
            <p>
               {currentCase.extradescription}
            </p>
            </motion.div>
        )}
      

      {/* visible container only if btn read more is cliked }
      {visMere && currentCase.processdescription && (
        <motion.div
        className="readMore_container_process"
        /* initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }} 
        
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
        transition={{ duration: 0.4 }} 
        
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
  whileInView={{ opacity: 1 }} }
  <div className='project_img'><img src="src/Components/images/image1_placeholder.jpg" alt="Work 1" /> <div className='overlay'><p className='text'>text</p></div></div>
  <div className='project_img'><img src="src/Components/images/image2_placeholder.jpg" alt="Work 2" /></div>
  <div className='project_img'><img src="src/Components/images/image3_placeholder.jpg" alt="Work 3" /></div>
  <div className='project_img'><img src="src/Components/images/image4_placeholder.jpg" alt="Work 4" /></div>
            
      </div>
   */