
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
 */
  import React, { useState } from 'react';
import './Styling/headerSection.css';
 /* ny heder med chat hjælp */ 
export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Ting Hua Lin</div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#" className="cta-btn">Create connection</a>
        </div>

        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
      </nav>
    </header>  )
}