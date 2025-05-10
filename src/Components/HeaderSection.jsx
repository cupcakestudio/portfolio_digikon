
// src/components/Header.js
/*import "./Styling/headerSection.css";
import { Link } from "react-router-dom";
import Button from "./Button"

 function HeaderSection() {
  return (
    <header className="header">
      <nav>
        <ul>
        <li><a href="#portfolio">Portfolio</a></li> {/* Bliver på forsiden }
          <li><Link to="/">Ting Hua Lin</Link></li> {/* Til forsiden }
          <li><a href="#about">About</a></li> {/* Bliver på forsiden }
          <li>
            <Link to="#contact"> {/* Kontakt sektion skal nu navigeres }
              <Button id="ContactCTA" content="Create connection" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>

   
  
  );
}

  import React, { useState } from 'react';
import './Styling/headerSection.css';
import { useLocation } from 'react-router-dom';
 
export default function HeaderSection() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = location.pathname === "/";

  const handleClick = (target) => (e) => {e.preventDefault}

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Ting Hua Lin</div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta-btn">Create connection</a>
        </div>

        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
      </nav>
    </header>  )
    import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (target) => (e) => {
    e.preventDefault();
    setMenuOpen(false); // luk menu på mobil

    if (isHome) {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${target}`);
    }
  };

  // Luk mobilmenu ved route-skift
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <div className="text-xl font-bold">MyPortfolio</div>

        {/* Desktop links 
        <div className="hidden md:flex gap-6 items-center">
          <a href="#portfolio" onClick={handleNavClick('portfolio')} className="hover:underline">Portfolio</a>
          <a href="#about" onClick={handleNavClick('about')} className="hover:underline">About</a>
          <a href="#contact" onClick={handleNavClick('contact')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Let’s Talk</a>
        </div>

        {/* Burger ico
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu 
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow-md">
          <a href="#portfolio" onClick={handleNavClick('portfolio')}>Portfolio</a>
          <a href="#about" onClick={handleNavClick('about')}>About</a>
          <a href="#contact" onClick={handleNavClick('contact')} className="bg-blue-600 text-white px-4 py-2 rounded">Let’s Talk</a>
        </div>
      )}
    </header>
  );
};

export default Header;

} */
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Styling/headersection.css';

const Header = () => {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  const scrollOrLink = (id) => isLanding ? `#${id}` : `/#${id}`;

  
  return (
    <header className="header ">
      <nav className="nav">
        <ul className="nav-left">
          <li><a href={scrollOrLink('services')}>Services</a></li>
          <li><a href={scrollOrLink('portfolio')}>Portfolio</a></li>
        </ul>
        <div className="logo"><a href={scrollOrLink('/')}><h2>Ting Hua Lin</h2></a></div>   
      
        <ul className="nav-right">
         
          <li><a href={scrollOrLink('about')}>Om mig</a></li>
          <li><a href={scrollOrLink('createConnection')} className='cta'>Skab Kontakt</a></li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
