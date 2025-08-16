import { memo } from 'react';
import HeaderTop from '../Components/All/HeaderTop'; 
import Header from '../Components/All/Header';
import Banner from '../Components/All/Banner';
import Intro from '../Components/Introduction/Intro';
import Discover from '../Components/Homapage/Discover'
import Blog from '../Components/Homapage/Blog'
import InfoContact from '../Components/Contact/InfoContact';
import FormContact from '../Components/Contact/FormContact';
import Footer from '../Components/All/Footer'
import LayoutContainer from '../Components/All/LayoutContainer';
import Image1 from '../assets/images/Introduction/img-2-1.jpg'
import Image2 from '../assets/images/Introduction/img-2-2.jpg'


function Introduction () {
    
    return (
        <div className="all">
            <HeaderTop/>
            <Header/>
            <Banner
                text1='Giới thiệu'
                text2='Trang chủ'
            />
            <Intro/>
            <Discover/>
            <Blog/>

        </div>
    );
}
export default memo(Introduction);