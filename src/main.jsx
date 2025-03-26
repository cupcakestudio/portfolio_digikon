/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' */
import './index.css'
import App from './App.jsx'
// import HeaderSection from './Components/HeaderSection.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Sørg for at bruge BrowserRouter her

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Sørg for, at BrowserRouter er omkring hele appen */}
    <App />
  </BrowserRouter>
);