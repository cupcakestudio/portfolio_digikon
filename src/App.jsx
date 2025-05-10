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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderSection from "./Components/HeaderSection";
// src/App.js
 import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import PortfolioSide from "./pages/PortfolioSide";
import Banner from "./Components/Banner";
import About from "./Components/About";
import CreateConnection from "./Components/CreateConnection"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";
import Footer from "./Components/Footer";

function App() {

    useEffect(() => {const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        //observer.unobserve(entry.target); // Fjern dette hvis du vil animere hver gang de kommer i view
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.01 });

  sections.forEach(section => {
    observer.observe(section);
  });})
  
  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
  

    <div className="app">
     <HeaderSection/>

    <Routes>
      <Route
        path="/"
        element={
          <>
            <section id="hero"><Hero /></section>
            <section id="services"><Services /></section>
            <section id="portfolio"><Portfolio /></section>
            <section id="about"><About /></section>
            <section id="createConnection"><CreateConnection /></section>
          </>
        }
      />
      <Route path="/portfolioSide" element={<PortfolioSide />} />
    </Routes>
    <Footer/>
  </div>

  );
}

export default App;

/*  <div className="app">
      <Hero />
      <Services />
      <Portfolio />
      <Banner />
      <About />
      <CreateConnection />
    </div> */
    //test af statisk og dynmaisk routing
 
   

      {/* De fleste sektioner vises altid på forsiden 
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="qoute">
        <Banner content="Inspirational test here that make you get a sense of who i am"/>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="createConnection">
        <CreateConnection />
      </section>
    </div>*/}