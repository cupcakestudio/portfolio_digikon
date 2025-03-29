/* 
import './headersection.css'
import Button from './Components/Button'

function HeaderSection() {


  return (
    <>
      <div className='header'>
        <a href="portfolio.html" target="_blank">
          <p>Portfolio</p>
        </a>
          <h3>Ting Hua Lin</h3>
          
          <a href="CV.html" target="_blank">
         <p>About</p>
        </a>
        
     
        
        {/* possible CTA Button }
        <a href="https://react.dev" target="_blank">
         <Button id="ContactCTA"content="Create connection"/>
        </a>
      </div>
     
    </>
  )
}

export default HeaderSection
 */

// src/components/Header.js
import "./headerSection.css";
import { Link } from "react-router-dom";
import Button from "./Button"

function HeaderSection() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="."><p>Ting Hua Lin</p></a></li>
          <li><a href="#about">About</a></li>
          <li>
            <Link to="/contact"> {/* Kontakt sektion skal nu navigeres */}
              <Button id="ContactCTA" content="Create connection" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default HeaderSection