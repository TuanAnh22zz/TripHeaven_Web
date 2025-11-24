import { Route, Routes} from 'react-router-dom'
import HomePage from './frontend/pages/HomePage'
import Contact from './frontend/pages/Contact'
import Introduction from './frontend/pages/Introduction'
import Account from './frontend/pages/Account'
import Destination from './frontend/pages/Destination'
import ListDestinations from './frontend/pages/ListDestinations'
import DetailTrip from './frontend/pages/DetailTrip'
import Blog from './frontend/pages/Blog'
import DetailBlog from './frontend/pages/DetailBlog'
import Trips from './frontend/Components/ListDestination.jsx/Trips'
import HeaderTop from './frontend/Components/All/HeaderTop'
import Header from './frontend/Components/All/Header'
import Footer from './frontend/Components/All/Footer'
import ScrollToTopButton from './frontend/hook/All/ScrollToTopButton'
import Booking from './frontend/pages/Booking'
import { AuthProvider } from './frontend/context/AuthContext'
function App() {
    return(
        <AuthProvider>
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
                <Route path="/account" element={<Account/>} />
                <Route path="/trips" element={<Trips/>}></Route>
                <Route path='/booking_details' element={<Booking/>}></Route>
            </Routes>
            <Footer/>



            <ScrollToTopButton/>

        </div>
        </AuthProvider>
        
        
    
    );
}
export default App