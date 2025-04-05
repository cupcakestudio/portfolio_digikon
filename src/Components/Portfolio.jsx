// src/components/Portfolio.js
import Button from "./Button";
import "./Styling/Portfolio.css";
import { useNavigate } from "react-router-dom";

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
      <div className="portfolio-grid">
        <img src="src/Components/images/image1_placeholder.jpg" alt="Work 1" />
        <img src="src/Components/images/image2_placeholder.jpg" alt="Work 2" />
        <img src="src/Components/images/image3_placeholder.jpg" alt="Work 3" />
        <img src="src/Components/images/image4_placeholder.jpg" alt="Work 4" />
       
      </div>
    </section>
  );
}
export default Portfolio;