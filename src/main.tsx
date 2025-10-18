import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import App from './App'
import PopupSelectDay from './frontend/Components/Popup/PopupSelectDay'
import PopupQuantity from './frontend/Components/Popup/PopupQuantity'
import Booking from './frontend/Pages/Booking'
import Blog from './frontend/Pages/Blog'

import './frontend/Styles/index.css'
import DetailTrip from './frontend/Pages/DetailTrip'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <DetailTrip/>
    </BrowserRouter>
  </StrictMode>,
)
