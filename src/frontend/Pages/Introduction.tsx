import { memo } from 'react';
import HeaderTop from '../Components/All/HeaderTop'; 
import Header from '../Components/All/Header';
import Banner from '../Components/All/Banner';
import Intro from '../Components/Introduction/Intro';
import History from '../Components/Introduction/History';
import Discover from '../Components/Homapage/Discover'
import Blog from '../Components/Homapage/Blog'
import Footer from '../Components/All/Footer'
import LayoutContainer from '../Components/All/LayoutContainer';
import HistoryBackground from '../assets/images/Introduction/map-bg.png'



function Introduction () {
    
    return (
        <div className="all">
            
            <Banner
                text1='Giới thiệu'
                text2='Trang chủ'
                link2='/'
            />
            <Intro/>
            <History/>
            <Discover/>
            <Blog/>
            

         

        </div>
    );
}
export default memo(Introduction);