import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About';
import Event from './event.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About name = "Imran"/> 
    <About name = "Khan"/> 
    <Event isValue ={false}/>
  </StrictMode>,
)
