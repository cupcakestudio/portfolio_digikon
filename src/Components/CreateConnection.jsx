// src/components/Contact.js
import "./Styling/CreateConnection.css"
function CreateConnection() {
  return (
    <section className="contact">
      <div className="contact-grid">
        <div className="contact-text">
          <h3>Create a connection</h3>
          <h2>Ready to Talk?</h2>
          <p>Contact me through these channels:</p>
          <div className="contact-buttons">
            <button>Email</button>
            <button>Chat</button>
          </div>
        </div>
        <div className="contact-image">
          <img src="/images/contact-chair.jpg" alt="Chair" />
        </div>
      </div>
    </section>
  );
  }
  export default CreateConnection;