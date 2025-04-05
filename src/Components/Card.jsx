import './cardStyles.css'

export default function Card({title, content}) {
    return (
        <div className="cardContainer">
            <div className='card-styles'>
                <div className='card_icon'><img src='src/Components/images/image1_placeholder.jpg'></img></div>
               <div className='card_text'> <h2>
                    {title}
                </h2>
                <p>{content}</p>
                </div>
            </div>
            
            
        </div>
    )
}