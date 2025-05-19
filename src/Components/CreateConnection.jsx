// src/components/Contact.js
import "./Styling/CreateConnection.css"
function CreateConnection() {
  return (
    <section className="contact">
      <div className="contact-grid">
        <div className="contact-text">
          <h3>Skab kontakt</h3>
          <h2>Klar til en snak?</h2>
          <p>Kontakt mig gennem disse kanaler:</p>
          <div className="contact-buttons">
            <div><a href="mailto:cupcakestudious@gmail.com">Email</a></div>
            <div><a href="https://www.linkedin.com/in/ting-hua-lin-21b919198/">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src="/images/chair3.png" alt="Chair" />
        </div>
      </div>
    </section>
  );
  }
  export default CreateConnection;