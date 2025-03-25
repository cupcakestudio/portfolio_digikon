import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './headersection.css'
import Button from './Components/Button'

function HeaderSection() {


  return (
    <>
      <div className='header'>
        <a href="portfolio.html" target="_blank">
          <p>Portfolio</p>
        </a>
        <a href="CV.html" target="_blank">
         <p>About</p>
        </a>
        <a href="https://react.dev" target="_blank">
         <p>Ting Hua Lin</p>
        </a>
        {/* possible CTA Button */}
        <a href="https://react.dev" target="_blank">
         <Button id="ContactCTA"content="Create connection"/>
        </a>
      </div>
     
    </>
  )
}

export default HeaderSection
