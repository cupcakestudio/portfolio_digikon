import "./Styling/CVCard.css"

export default function CVCard({title, content}) {
    return (
        <div className="cv_card_container">
        <div className="CVstyle">
            <div className="card_icon"><img></img></div>
            <div className="card_text">
            <h3>{title}</h3>
            <p>{content}</p>
            </div>
        </div>
        </div>
    )
}