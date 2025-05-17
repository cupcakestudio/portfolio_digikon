import "./Styling/Services.css";
function Services() {
    return (
        <section className="services">
          <h2>Campaigns that Resonate with Audiences</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Branding</h3>
              <p>Udvikling af visuelle identiteter, der udtrykker dine værdier og styrker din virksomhed</p>
            </div>
            <div className="service-box">
              <h3>Produktion</h3>
              <p>Produktion af målrettet materiale, der skaber synlighed og effekt</p>
            </div>
            <div className="service-box">
              <h3>Indholdskreation</h3>
              <p>Der produceres engagerende indhold, som tiltrækker flere ind i din verden</p>
            </div>
          </div>
        </section>
      );
}
export default Services;