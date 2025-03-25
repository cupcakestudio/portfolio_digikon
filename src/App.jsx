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

// src/App.js
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import CreateConnection from "./Components/CreateConnection";


function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <CreateConnection />
    </div>
  );
}

export default App;