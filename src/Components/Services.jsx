import "./Styling/Services.css";
function Services() {
    return (
        <section className="services">
          <h2>Campaigns that Resonate with Audiences</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Branding</h3>
              <p>Creating visual identities for brands</p>
            </div>
            <div className="service-box">
              <h3>Advertising</h3>
              <p>Creating impactful advertising materials</p>
            </div>
            <div className="service-box">
              <h3>Content</h3>
              <p>Producing engaging content for websites</p>
            </div>
          </div>
        </section>
      );
}
export default Services;