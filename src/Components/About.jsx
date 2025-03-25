import "./Styling/About.css";
function About() {
    return (
       <section className="about">
            <div className="about-grid">
                <div className="about-image">
                <img src="/images/CV.jpg" alt="CV" />
            </div>
            <div className="about-text">
                <p>Here is what you get</p>
                <div className="about-buttons">
                <button>Read more</button>
               
                </div>
            </div>
            
            </div>
            </section>
     );
}
export default About;