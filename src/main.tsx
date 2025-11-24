import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import App from './App'
import PopupSelectDay from './frontend/components/Popup/PopupSelectDay'
import PopupQuantity from './frontend/components/Popup/PopupQuantity'
import Booking from './frontend/pages/Booking'
import Blog from './frontend/pages/Blog'

import './frontend/Styles/index.css'
import DetailTrip from './frontend/pages/DetailTrip'
import FormLogin from './frontend/components/Account/FormLogin'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </StrictMode>,
)
