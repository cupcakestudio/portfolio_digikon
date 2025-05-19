import "./Styling/Hero.css";
import Button from "./Button";

function Hero() {
 /*  return (
    <section className="hero">

  
</section> 
  );*/
  return (

  <section className="hero">
      {/* Maskerede billeder */}
      <div className="image masked-image image-1">
        <img
          src="/images/meCV.svg"
          alt="Mit Portræt"
        />
      </div>

      <div className="image masked-image image-2">
        <img
          src="/images/Casecontent/case_girltalk/presentation.jpg"
          alt="Billede 2"
        />
      </div>

      <div className="image masked-image image-3">
        <img
          src="/images/sketch_storyboard.jpg"
          alt="Billede 3"
        />
      </div>

      {/* Tekstindhold */}
      <div className="hero-content">
        <h1>
          Pushing the Boundaries of <br />
          <span className="highlight">Visual Communication</span>
        </h1>
        <p>Designs der taler til dig</p>
        <div className="button-container">
          <button>Skab kontakt</button>
          <a href="#services">Tag et kig</a>
        </div>
      </div>
    </section>
  


     /* <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white text-gray-900">
     
           {/* Billede med maske anvendt 
        <img
          src="/images/meCV.svg"
          alt="Mit Portræt"
          width="192"
          height="192"
          style={{
            WebkitMaskImage: "url('/images/Design_uden_navn-removebg-preview.png')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center"
          }}
          className="w-48 h-48 object-cover"
        />
         {/* Billede 2 med maske 2 
      <img
        src="https://i.pravatar.cc/300"
        alt="Billede 2"
        className="w-48 h-48 object-cover"
        style={{
          maskImage: "url('/images/Design_uden_navn-removebg-preview.png')",
          WebkitMaskImage: "url('/images/Design_uden_navn-removebg-preview.png')",
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center"
        }}
      />
  

      {/* ✨ Indhold 
      <div className="hero-content">
    <h1>Pushing the Boundaries of <span className='highlight'>Visual Communication</span></h1>
    <h3>Designs der taler til dig</h3>
    <div className="button-container">
    <button className="cta">Skab kontakt</button>
    <a href="#services" id="scrollBtnHero">Tag et kig</a>

    </div>
  </div>

</section> */


  

  );
}
export default Hero;
