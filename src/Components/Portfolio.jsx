// src/components/Portfolio.js
import "./Styling/Portfolio.css";
function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Latest Work</h2>
      <div className="portfolio-grid">
        <img src="/images/work1.jpg" alt="Work 1" />
        <img src="/images/work2.jpg" alt="Work 2" />
        <img src="/images/work3.jpg" alt="Work 3" />
        <img src="/images/work4.jpg" alt="Work 4" />
      </div>
    </section>
  );
}
export default Portfolio;