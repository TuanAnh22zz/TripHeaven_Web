import { memo, FC } from 'react';
import LayoutContainer from '../All/LayoutContainer';
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Destination_1 from '../../assets/images/destinations-1-3.jpg'
import DestinationBackground from '../../assets/images/Bg.png'

export interface InfoDestinationProps {
    id:number,
    name: string
    image: string
}

const infoDestination: InfoDestinationProps[] = [
    {
        id:1,
        name: 'Colombo',
        image: Destination_1
    },
    {
        id:2,
        name: 'England',
        image: Destination_1
    },
    {
        id:3,
        name: 'France',
        image: Destination_1
    },
    {
        id:4,
        name: 'Annapurna',
        image: Destination_1
    },
    {
        id:5,
        name: 'Bhutan',
        image: Destination_1
    },
    {
        id:6,
        name: 'India',
        image: Destination_1
    },
]

interface RenderDestinationProps {
    destination: InfoDestinationProps
}
const ItemDestination: FC<RenderDestinationProps> = ({destination}) => (
   
         <div className=''>
            <div className='max-w-full w-[386] h-[405px] rounded-[20px]'   style={{ backgroundImage: `url(${destination.image})` }}></div>
            <div className='font-[700] text-[20px] pt-[20px]'>{destination.name}</div>
        </div>

   
     
);


function Destination () {
    return (
        <div className='' style={{backgroundImage: `url(${DestinationBackground})`}}>
        <LayoutContainer className='!px-[0]'>
            <div className='text-center'>
                <div className='text-main font-[700] text-[24px] mb-[15px]'>Go & Discover</div>
                <div className='text-black mt-[15px] text-[40px] uppercase font-[700]'>Thành phố tuyệt vời</div>
                <div className='mt-[30px] mb-[40px] text-[#505050] px-[200px]'>Khám phá những thành phố tuyệt vời trên thế giới, nơi sự kết hợp hoàn hảo giữa kiến trúc, văn hóa đa dạng và cuộc sống sôi động tạo nên những trải nghiệm đáng nhớ.</div>
            </div>
            <div className="
                relative
                [&_.swiper-button-prev]:text-main
                [&_.swiper-button-next]:text-main
                [&_.swiper-pagination-bullet-active]:bg-main
            ">
                     <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                 <SwiperSlide className='px-[80px] py-[50px]'>
                    <div className='grid grid-cols-3 gap-x-[30px]'>
                       {infoDestination.filter(item => [1,2,3].includes(item.id)).map((item) => (
                            <ItemDestination
                                key={item.id}
                                destination={item}
                            />
                       ))}
                        
             
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-[80px] py-[50px]'>
                <div className='grid grid-cols-3 gap-x-[30px]'>
                        {infoDestination.filter(item => [4,5,6].includes(item.id)).map((item) => (
                                    <ItemDestination
                                        key={item.id}
                                        destination={item}
                                    />
                            ))}
                        
             
                    </div>
                </SwiperSlide> 
             
                
            </Swiper>
            
            </div>
            
       

     </LayoutContainer>
 </div>  
    );
}

export default memo(Destination);