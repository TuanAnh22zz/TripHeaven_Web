import { memo } from 'react';
import LayoutContainer from '../All/LayoutContainer';
import React, { useRef, useState } from 'react';
import CommentBackground from '../../assets/images/testimonial-bg-2.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useAnimationScroll from '../Hook/useAnimationScroll';




function Comment () {
    const {ref: ref1, view: view1} = useAnimationScroll(0.5);
    return (
        <div style={{backgroundImage: `url(${CommentBackground})`}}>
        <LayoutContainer >
            <div ref={ref1} className={`flex flex-wrap ${view1?"animate-zoomIn":"opacity-0"}`}>
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