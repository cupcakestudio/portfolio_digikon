import './Styling/About.css'
import {sections} from './CVdata.jsx'
import Card from './Card.jsx'
function About() {
    return (
    <>
    <div className='about'> <p>about me </p>
    <div className='card_container'>
        {
            sections.map((section, index) => {
                return <Card key={index} {...section}/>
            })
        }
        </div>
    </div>
    </>

    )      
}
export default About;