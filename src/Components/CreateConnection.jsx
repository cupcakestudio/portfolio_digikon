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
            <button><a href="mailto:cupcakestudious.com">Email</a>
            </button>
          </div>
        </div>
        <div className="contact-image">
          <img src="src/Components/images/chair3.png" alt="Chair" />
        </div>
      </div>
    </section>
  );
  }
  export default CreateConnection;