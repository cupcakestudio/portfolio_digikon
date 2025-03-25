/* import './Section.css'
function Section({ tagline, title, content, content1, image, reverse }) {
  return (
    <section>
      <div className="container">
      <div className={`container ${reverse ? "reverse" : ""}`}>
        {reverse ? (
          <>
            <div className="small_con">
              {tagline && <h3>{tagline}</h3>}
              <h2>{title}</h2>
              <div className="text_con">
                <p>{content}</p>
                {content1 && <p>{content1}</p>}
              </div>
            </div>
            {image && <img src={image} alt={title} style={{ width: "300px", borderRadius: "10px" }} />}
          </>
        ) : (
          <>
            {image && <img src={image} alt={title} style={{ width: "300px", borderRadius: "10px" }} />}
            <div className="small_con">
              {tagline && <h3>{tagline}</h3>}
              <h2>{title}</h2>
              <div className="text_con">
                <p>{content}</p>
                {content1 && <p>{content1}</p>}
              </div>
            </div>
          </>
        )}
      </div>
      </div>
    </section>
  );
} export default Section
 */

import "./Section.css";

const Section = ({ title, subtitle, content, button, buttonText, image, reverse, }) => {
  return (
    <section className={`section ${reverse ? "reverse" : ""}`}>
      <div className="content">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
        <p>{content}</p>
        {button && <button className="btn">{buttonText}</button>}
      </div>
     {/*  <Button content="Email"></Button>
      <Button content="Kanal 1"></Button> */}
      <div className="image">
        <img src={image} alt={title} />
      </div>

    </section>
  );
};

export default Section;
