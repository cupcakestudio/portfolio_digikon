
// src/components/Header.js
 import "./Styling/headerSectionAlt.css";
import { Link } from "react-router-dom";
import Button from "./Button"

function HeaderSectionAlt() {
  return (
    <header className="header">
      <nav>
        <ul>
        <li><a href="./portfolioSide">Portfolio</a></li> {/* Bliver på forsiden */}
          <li><Link to="/">Ting Hua Lin</Link></li> {/* Til forsiden */}
          <li><a href="./about">About</a></li> {/* Bliver på forsiden */}
          <li>
            <Link to="#contact"> {/* Kontakt sektion skal nu navigeres */}
              <Button id="ContactCTA" content="Create connection" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default HeaderSectionAlt