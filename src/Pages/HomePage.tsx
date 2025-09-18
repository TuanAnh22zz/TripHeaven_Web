import { memo } from 'react';
import Banner from '../Components/Homapage/Banner'
import Introduction from '../Components/Homapage/Introduction';
import Offer from '../Components/Homapage/Offer';
import Feature from '../Components/Homapage/Feature';
import Discover from '../Components/Homapage/Discover';
import Destination from '../Components/Homapage/Destination';
import Blog from '../Components/Homapage/Blog';
import Comment from '../Components/Homapage/Comment';
import BestTour from '../Components/Homapage/BestTour';
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
