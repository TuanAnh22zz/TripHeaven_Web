import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'


import './Styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact/>
  </StrictMode>,
)
