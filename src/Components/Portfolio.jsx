// src/components/Portfolio.js
import Button from "./Button";
import "./Styling/Portfolio.css";
function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-banner">
        <div className="portfolio-headlines">
      <h3>Portfolio</h3>
      <h2>Latest Work</h2>
      </div>
      <Button content="View More"/>
      </div>
      <div className="portfolio-grid">
        <img src="C:\Users\Cupca\Documents\Kea - Digital konceptudvikling\portfolio\src\Components\images\image1_placeholder.jpg" alt="Work 1" />
        <img src="\images\image2_placeholder.jpg" alt="Work 2" />
        <img src="\images\image3_placeholder.jpg" alt="Work 3" />
        <img src="\images\image4_placeholder.jpg" alt="Work 4" />
       
      </div>
    </section>
  );
}
export default Portfolio;