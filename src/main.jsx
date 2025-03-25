import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeaderSection from './HeaderSection.jsx'

createRoot(document.getElementById('root'), document.getElementById('HeaderSection')).render(
  <StrictMode>
    <HeaderSection/>
    <App />
  </StrictMode>,
)
