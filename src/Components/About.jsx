import './Styling/About.css'
import {sections} from './CVdata.jsx'
import Card from './Card.jsx'
import { useNavigate } from 'react-router-dom'

function About() {
    return (
    <>
    <section className='cv_section'>
        <div className='cv_container' alt="freepik.com">
            <div className='features_wrapper'>
                <div className='features_left'>
                <h2>"TING UDVIKLER OG DESIGNER MED KREATIVITET, PERSONLIGHED OG ØJE FOR DETALJER"
                </h2>
                <button onClick={() => navigate('/pages/about')}>Lad mig vide mere</button>
                <img id='MeCV'src="/images/meCV.svg"></img>
                </div>
                <div className='features_right'>
                    {sections.map((section, index) => {
                        return (
                            <Card key={index} {...section}></Card>
                        )
                    })}
                </div>
                
                
            </div>
        </div>
    </section>
    
    </>

    )      
}
export default About;