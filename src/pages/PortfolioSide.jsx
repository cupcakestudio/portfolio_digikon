
import '../Components/Styling/PortfolioSidestyling.css'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {cases} from '../Components/CVdata'
import { useEffect } from 'react';

function PortfolioSide() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll til top
    //hash nav virker efter mount
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
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

  //slideshow states centralt - hver caseItem.id har én useState sat, men er gemt pr. id indeks
 const [imageIndexes, setImageIndexes] = useState({});

const nextImage = (id, images) => {
  setImageIndexes((prev) => ({
    ...prev,
    [id]: prev[id] === images.length - 1 ? 0 : (prev[id] || 0) + 1
  }));
};

const prevImage = (id, images) => {
  setImageIndexes((prev) => ({
    ...prev,
    [id]: prev[id] === 0 || prev[id] == null ? images.length - 1 : prev[id] - 1
  }));
};



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
        <div key={index} id={caseItem.id} className={`timeline_item ${side}`} >
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
            {/* {caseItem.image && (
              <img src={caseItem.image} alt={`Billede af ${caseItem.title}`} />
            )} 

              {caseItem.images && caseItem.images.length > 0 && (
                <div className="slideshow">
                  <img
                    src={caseItem.images[currentImageIndex].src}
                    alt={`Billede ${currentImageIndex + 1} af ${caseItem.title}`}
                  />
                  <p className="caption">{caseItem.images[currentImageIndex].caption}</p>
                  <div className="slideshow-controls">
                    <button onClick={prevImage}>Forrige</button>
                    <button onClick={nextImage}>Næste</button>
                  </div>
                </div>
              )}*/}

              {caseItem.images && caseItem.images.length > 0 && (
              <div className="slideshow">
                <img
                  src={caseItem.images[imageIndexes[caseItem.id] || 0].src}
                  alt={`Billede af ${caseItem.title}`}
                />
                <p>{caseItem.images[imageIndexes[caseItem.id] || 0].caption}</p>
                <div className="slideshow-controls">
                  <button onClick={() => prevImage(caseItem.id, caseItem.images)}>Forrige</button>
                  <button onClick={() => nextImage(caseItem.id, caseItem.images)}>Næste</button>
                </div>
              </div>
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
