import { Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Contact from './Pages/Contact'
import Introduction from './Pages/Introduction'
import Account from './Pages/Account'
import Destination from './Pages/Destination'
import ListDestinations from './Pages/ListDestinations'
import DetailTrip from './Pages/DetailTrip'
import Blog from './Pages/Blog'
import DetailBlog from './Pages/DetailBlog'
import HeaderTop from './Components/All/HeaderTop'
import Header from './Components/All/Header'
import Footer from './Components/All/Footer'
import ScrollToTopButton from './Components/Hook/ScrollToTopButton'
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
            </Routes>
            <Footer/>
            <ScrollToTopButton/>

        </div>
    
    );
}
export default App