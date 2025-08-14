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


import LayoutContainer from '../../Components/All/LayoutContainer';
import React, { useRef, useState } from 'react';
import CommentBackground from '../../assets/images/testimonial-bg-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




function Comment () {
    return (
        <div style={{backgroundImage: `url(${CommentBackground})`}}>
        <LayoutContainer >
            <div className='flex flex-wrap '>
                    <div className='pr-[500px]'>
                        <span className='text-[24px] font-[600] text-secondary'>Các đánh giá tích cực</span>
                        <h1 className='mt-[20px] text-[48px] font-[700] text-white '>Hơn 50,000 khách hàng hài lòng trên khắp thế giới</h1>
                    </div>
            </div>
        </LayoutContainer>
    </div>
    );
}
export default memo(Comment);