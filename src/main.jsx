
import './index.css'
import App from './App.jsx'

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Sørg for at bruge BrowserRouter her

//google fonts
<style>

</style>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Sørg for, at BrowserRouter er omkring hele appen */}
    <App />
  </BrowserRouter>
);