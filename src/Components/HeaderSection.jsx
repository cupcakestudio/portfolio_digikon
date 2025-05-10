

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Styling/headersection.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  const scrollOrLink = (id) => isLanding ? `#${id}` : `/#${id}`;

    // Luk menu ved route change
    useEffect(() => {
      setMenuOpen(false);
    }, [location]);
  return (
    <header className="header">
      <nav className="nav ">
        <button
          className="burger "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
     
        
        <ul className="nav-left hidden">
          <li><a href={scrollOrLink('services')}>Services</a></li>
          <li><a href={scrollOrLink('portfolio')}>Portfolio</a></li>
        </ul>
        <div className="logo"><a href={scrollOrLink('/')}><h2>Ting Hua Lin</h2></a></div>   
      
        <ul className="nav-right hidden">
         
          <li><a href={scrollOrLink('about')}>Om mig</a></li>
          <li><a href={scrollOrLink('createConnection')} className='cta'>Skab Kontakt</a></li>
        
        </ul>
      </nav>
      {/*Mobil menu*/}
       {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        
          <li><a href={scrollOrLink('services')}>Services</a></li>
          <li><a href={scrollOrLink('portfolio')}>Portfolio</a></li>
          <li><a href={scrollOrLink('about')}>Om mig</a></li>
          <li><a href={scrollOrLink('createConnection')} className='cta'>Skab Kontakt</a></li>
      </div>)}
{/*       
      
        {/*burger menu*/}
        {/* Mobile menu 
        {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#services" onClick={scrollOrLink('services')}>Services</a>
            <a href="#portfolio" onClick={scrollOrLink('portfolio')}>Portfolio</a>
            <a href="#about" onClick={scrollOrLink('about')}>Om mig</a>
            <a href="#createConnection" onClick={scrollOrLink('createConnection')} className="cta bg-blue-600 text-white px-4 py-2 rounded">Skab Kontakt</a>
          </div>
        )} */}
    </header>
  );
};

export default Header;
