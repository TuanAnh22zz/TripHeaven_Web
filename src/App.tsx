import { Route, Routes} from 'react-router-dom'
import HomePage from './frontend/Pages/HomePage'
import Contact from './frontend/Pages/Contact'
import Introduction from './frontend/Pages/Introduction'
import Account from './frontend/Pages/Account'
import Destination from './frontend/Pages/Destination'
import ListDestinations from './frontend/Pages/ListDestinations'
import DetailTrip from './frontend/Pages/DetailTrip'
import Blog from './frontend/Pages/Blog'
import DetailBlog from './frontend/Pages/DetailBlog'
import Trips from './frontend/Components/ListDestination.jsx/Trips'
import HeaderTop from './frontend/Components/All/HeaderTop'
import Header from './frontend/Components/All/Header'
import Footer from './frontend/Components/All/Footer'
import ScrollToTopButton from './frontend/Hook/All/ScrollToTopButton'
import Booking from './frontend/Pages/Booking'
function App() {
    return(
        <div>
            <HeaderTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/destinations" element={<ListDestinations />} />
                <Route path="/trip/:id" element={<DetailTrip />} />
                <Route path="/blogs/:id" element={<DetailBlog />} />
                <Route path="/account" element={< Account/>} />
                <Route path="/trips" element={<Trips/>}></Route>
                <Route path='/booking_details' element={<Booking/>}></Route>
            </Routes>
            <Footer/>



            <ScrollToTopButton/>

        </div>
        
    
    );
}
export default App