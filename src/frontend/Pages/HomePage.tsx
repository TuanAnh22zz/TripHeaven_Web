import { memo } from 'react';
import Banner from '../components/Homapage/Banner'
import Introduction from '../components/Homapage/Introduction';
import Offer from '../components/Homapage/Offer';
import Feature from '../components/Homapage/Feature';
import Discover from '../components/Homapage/Discover';
import Destination from '../components/Homapage/Destination';
import Blog from '../components/Homapage/Blog';
import Comment from '../components/Homapage/Comment';
import BestTour from '../components/Homapage/BestTour';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';








function HomePage() {
    return (
       
       
   
        <div className='all'>
           
            <Banner/>
            <BestTour/>
            <Introduction/>
            <Offer/>
            <Feature/>
            <Discover/>  
            <Destination/> 
            <Comment/>
            <Blog/>
            
        </div>
        
     
    );
}

export default memo(HomePage)
