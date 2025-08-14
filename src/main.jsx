import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Pages/HomePage/HomePage'

import './Styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
