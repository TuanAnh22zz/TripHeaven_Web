import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import Introduction from './Pages/Introduction'
import Destination from './Pages/Destination'
import ListDestinations from './Pages/ListDestinations'
import DetailTrip from './Pages/DetailTrip'
import Blog from './Pages/Blog'
import DetailBlog from './Pages/DetailBlog'

import './Styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)
