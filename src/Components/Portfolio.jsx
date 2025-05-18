// src/components/Portfolio.js
import Button from "./Button";
import "./Styling/Portfolio.css";
import { useNavigate } from "react-router-dom";
import { cases } from "./CVdata";
function Portfolio() {

 
  const navigate = useNavigate();
  return (
    <section className="portfolio">
      <div className="portfolio-banner">
        <div className="portfolio-headlines">
          <h3>Portfolio</h3>
          <h2>Latest Work</h2>
        </div>
      <button onClick={() => navigate("/portfolioSide")}>See My Portfolio</button>
      </div>
  
        
        <div className="portfolio-grid">{cases.map((item, index) => (
            <div key={index} className="portfolioCard">
              <div className="face face1">
                <div className="portfolioCardContent">
                  
                  <p>{item.client}</p> 
                  <p>{item.blurp}</p> 
                <button onClick={() => navigate(`/portfolioSide#${item.id}`)}>Læs mere
            </button>
                </div>
              </div>
              <div className="face face2" style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
     
        }}>
              <div className="face face2 blur"></div>
              <p>{item.title}</p>
              </div>
    </div>
  ))}
       
      </div>
    </section>
  );
}
export default Portfolio;