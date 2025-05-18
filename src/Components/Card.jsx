import './cardStyles.css'

export default function Card({title, content, icon}) {
    return (
        
            <div className='card-styles'>
                <div className='card_icon' > {icon}</div>
               <div className='card_text'> <h2>
                    {title}
                </h2>
                <p>{content}</p>
                </div>
            </div>
            
            
        
    )
}