import "./Styling/Hero.css";
import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
 
  <div className="hero-content">
    <h1>Pushing the Boundaries of <span className='highlight'>Visual Communication</span></h1>
    <h3>Designs der taler til dig</h3>
    <div className="button-container">
    <button className="cta">Skab kontakt</button>
    <a href="#services" id="scrollBtnHero">Tag et kig</a>

    </div>
  </div>
</section>
  );
}
export default Hero;
