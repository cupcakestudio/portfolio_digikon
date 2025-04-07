import HeaderSectionAlt from "../Components/HeaderSectionAlt";
import '../Components/Styling/PortfolioSidestyling.css'

import React, { useState } from 'react';



function PortfolioSide() {
  const [visMere, setVisMere] = useState(false);

  const toggleVisMere = () => {
    setVisMere(!visMere);
  };


    return (<>
      <HeaderSectionAlt />
      <div>
        <h1>Portfolio Page</h1>
        <p>Se mit arbejde her!</p>
      </div>
      <div className="case_container">
        <div className="text">
          <h3>Case:</h3>
          <p>What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button onClick={toggleVisMere}>{visMere ? "Read less" : "Read more here"}</button>
        
        </div>
        
        <div className="portfolioimg">
          <img src="src/Components/images/image3_placeholder.jpg" alt="Hero splash img"></img>
        </div>
      </div>
      {/* visible container only if btn read more is cliked */}
      {visMere && (
        <div className="readMore_container">
          <p>
            Why do we use it? It is a long established fact that a reader will be distracted...
          </p>
        </div>
      )}


      <div className="label"><p>Other projects...</p></div> 
      <div className="caroussel_showcase">
       
              <img src="src/Components/images/image1_placeholder.jpg" alt="Work 1" />
              <img src="src/Components/images/image2_placeholder.jpg" alt="Work 2" />
              <img src="src/Components/images/image3_placeholder.jpg" alt="Work 3" />
              <img src="src/Components/images/image4_placeholder.jpg" alt="Work 4" />
            
      </div>
    </>);
  }
  
  export default PortfolioSide;
  