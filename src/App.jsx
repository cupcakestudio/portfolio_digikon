/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Section'
import Section from './Components/Section'
import Button from './Components/Button'
import Banner from './Components/Banner'
import CardGrid from './Components/CardGrid'


function App() {


  return (
    <>
      <Section id="splash" img="src\assets\react.svg" title="Ting Hua Lin" content="Tekst tekst transformerer catchphrase" content1="mere tekst"/>
      <Banner content="Tagline"/>
      <CardGrid></CardGrid>
      <div className='cta_container'>
        <div id='tagBox'><h3>Portfolio</h3>
        <p>Seneste projekter</p></div>
      <Button content="Se mere"></Button></div>
      
      <CardGrid id="Portfolio"></CardGrid>
      <Banner content="Citat"/>
      <Section reverse id="CV" img="src\assets\react.svg" title="About Me" content="Tekst tekst  tekst lorem ipsum  elfdsngfdnf efworfnw catchphrase" />
      <Section tagline="Skab kontakt" title="Klar til en snak?" content="Du har været på min side i XX minutter, er det på tide at tage en snak?  Jeg ser i hvert fald frem til at høre fra dig!
Kontakt mig igennem disse kanaler:">
      
      </Section>
    </>
  )
}

export default App
 */

//router redirect
import "./App.css";

import HeaderSection from "./Components/HeaderSection";
// src/App.js
 import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Banner from "./Components/Banner";
import About from "./Components/About";
import CreateConnection from "./Components/CreateConnection"; 


function App() {
  return (
   /*  <div className="app">
      <Hero />
      <Services />
      <Portfolio />
      <Banner />
      <About />
      <CreateConnection />
    </div> */
    //test af statisk og dynmaisk routing
 
    <div className="app">
      {/* HeaderSection skal altid være synlig */}
      <HeaderSection />

      {/* De fleste sektioner vises altid på forsiden */}
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="createConnection">
        <CreateConnection />
      </section>
    </div>

  );
}

export default App;