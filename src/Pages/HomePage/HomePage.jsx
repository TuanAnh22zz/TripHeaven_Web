import { memo } from 'react';
import HeaderTop from '../../Components/Homapage/HeaderTop'; 
import Banner from '../../Components/Homapage/Banner'
import Introduction from '../../Components/Homapage/Introduction';
import Offer from '../../Components/Homapage/Offer';
import Feature from '../../Components/Homapage/Feature';
import Discover from '../../Components/Homapage/Discover';
import Header from '../../Components/All/Header';
import Destination from '../../Components/Homapage/Destination';
import Blog from '../../Components/Homapage/Blog';
import Comment from '../../Components/Homapage/Comment';
import LogoImage from '../../assets/images/1-e1709277145445.png'
import  MaterialButton from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Image0ffer from "../../assets/images/offer-1-1.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/joy/Input';
import RowingIcon from '@mui/icons-material/Rowing';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import featureLogoImage1 from '../../assets/images/features-1-1.png';

import LayoutContainer from '../../Components/All/LayoutContainer';
import React, { useRef, useState } from 'react';
import CommentBackground from '../../assets/images/testimonial-bg-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Destination_1 from '../../assets/images/destinations-1-3.jpg'
import DestinationBackground from '../../assets/images/Bg.png'
import ImageBlog1 from '../../assets/images/6-2-342x252.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';






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

           


           


  

                
        </div>
        
        
      
    );
}

export default memo(HomePage)
