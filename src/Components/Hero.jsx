import "./Styling/Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
 
  <div className="hero-content">
    <h1>Pushing the Boundaries of <span className='highlight'>Visual Communication</span></h1>
    <h3>Designs for small businesses</h3>
    <div className="button-container">
    <button className="cta">Work with Me</button>
    <a href="#services" id="scrollBtnHero">Check Me Out</a>

    </div>
  </div>
</section>
  );
}
export default Hero;
