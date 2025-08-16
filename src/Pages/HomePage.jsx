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
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';








function HomePage() {
    return (
       
       
   
        <div className='all'>
            {/* Phần HeaderTop */}
            <HeaderTop />

            {/* Phần Header */}
            <Header/>
            
            {/* Phần Banner */}
            <Banner/>
          
            {/* Phần Introduction */}
            <Introduction/>
          
           {/* Phần Offer */}
            <Offer/>

            {/* {Phần Feature} */}
            <Feature/>
            
            {/* {Phần Discover} */}
            <Discover/>  
            
            {/* Phần điểm đến  */}
            <Destination/> 

            {/* Phần Comment */}
            <Comment/>

            {/* Phần Blog */}
            <Blog/>

            {/* Phần Footer */}
           <Footer/>
        </div>
        
     
    );
}

export default memo(HomePage)
