import { memo } from 'react';
import HeaderTop from '../Components/All/HeaderTop';
import Banner from '../Components/Homapage/Banner'
import Introduction from '../Components/Homapage/Introduction';
import Offer from '../Components/Homapage/Offer';
import Feature from '../Components/Homapage/Feature';
import Discover from '../Components/Homapage/Discover';
import Header from '../Components/All/Header';
import Destination from '../Components/Homapage/Destination';
import Blog from '../Components/Homapage/Blog';
import Comment from '../Components/Homapage/Comment';
import Footer from '../Components/All/Footer'
import BestTour from '../Components/Homapage/BestTour';
import ScrollToTopButton from '../Components/Hook/ScrollToTopButton';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';








function HomePage() {
    return (
       
       
   
        <div className='all'>
            <HeaderTop />
            <Header/>
            <Banner/>
            <BestTour/>
            <Introduction/>
            <Offer/>
            <Feature/>
            <Discover/>  
            <Destination/> 
            <Comment/>
            <Blog/>
            <Footer/>
            <ScrollToTopButton/>
        </div>
        
     
    );
}

export default memo(HomePage)
