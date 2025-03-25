import "./CardGrid.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const CardContent = ({ title, text }) => {
  return (
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
};

const cardData = [
  { id: 1, title: "Værdi 1", text: "værdi værdi tekst." },
  { id: 2, title: "Værdi 2", text: "værdi værdi tekst." },
  { id: 3, title: "Værdi 3", text: "værdi værdi tekst." },
];

const CardGrid = () => {
  return (
    
    <div className="grid-container">
      {cardData.map((card) => (
        <Card key={card.id}>
          <CardContent title={card.title} text={card.text} />
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
