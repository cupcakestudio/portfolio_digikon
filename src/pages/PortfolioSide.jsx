
import '../Components/Styling/PortfolioSidestyling.css'
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import {_imghvr-zoom-in} from '../imagehover.css-master'
import React, { useState } from 'react';
import {cases} from '../Components/CVdata'
import { useEffect } from 'react';

function PortfolioSide() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll til top
  }, []);
  /*udfold case index state*/
  const [openIndex, setOpenIndex] = useState(null);

  const toggleVisMere = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  function groupCasesByMonth(cases) {
    const grouped = {};
  
    cases.forEach((item) => {
      const date = new Date(item.date);
      const key = date.toLocaleString('da-DK', { month: 'long', year: 'numeric' }); // fx "april 2025"
  
      if (!grouped[key]) {
        grouped[key] = [];
      }
  
      grouped[key].push(item);
    });
  
    return grouped;
  }
  const groupCases = groupCasesByMonth(cases);


    return (<>
    <div className="timeline"> {/*Today*/}
            <motion.div
          >
            <div className="timeline_date center">
              <p>I dag</p>
            </div>
          </motion.div>

          {Object.entries(groupCases).reverse().map(([monthLabel, monthCases], monthIndex) => (
  <React.Fragment key={monthLabel}>
    {/*måned label*/}
    <motion.div
      className="timeline_month-label"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <p>{monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1)}</p>
    </motion.div>

    {/* MAP CASES i ASCENDING DATO ORDER */}
    {monthCases.slice().reverse().map((caseItem, index) => {
      const totalIndex = cases.length - 1 - (monthCases.length * monthIndex + index); // for left/right alignment
      const side = totalIndex % 2 === 0 ? 'left' : 'right';

      return (
        <div key={index} className={`timeline_item ${side}`} >
          {/* DATO */}
          <motion.div className={`timeline_date ${side}`} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <p>{caseItem.date}</p>
          </motion.div>

          {/* INDHOLD */}
          <motion.div className="content" initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
            <h3>{caseItem.title}</h3>
            {caseItem.client ? <p className='case_client'>Kunde: {caseItem.client}</p> : <p></p>}
            <p>{caseItem.description}</p>
            {caseItem.image && (
              <img src={caseItem.image} alt={`Billede af ${caseItem.title}`} />
            )}

            <button onClick={() => toggleVisMere(caseItem.id || index)}>
              {openIndex === (caseItem.id || index) ? 'Læs mindre' : 'Læs mere'}
            </button>

            <AnimatePresence>
              {openIndex === (caseItem.id || index) && (
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
          </motion.div>
        </div>
      );
    })}
  </React.Fragment>
))}

      </div>
    </>
  );
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