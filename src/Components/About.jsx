import './Styling/About.css'
import {sections} from './CVdata.jsx'
import Card from './Card.jsx'
function About() {
    return (
    <>
    <section className='cv_section'>
        <div className='cv_container'>
            <div className='features_wrapper'>
                <div className='features_right'>
                    <p>Tekst omkring mig som person</p>
                </div>
                <div className='features_left'>
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