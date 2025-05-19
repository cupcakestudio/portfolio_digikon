import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderSection from "./Components/HeaderSection";
// src/App.js
 import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import PortfolioSide from "./pages/PortfolioSide";

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