import { memo } from 'react';
import  MaterialButton from '@mui/material/Button'
import LayoutContainer from '../../Components/All/LayoutContainer';
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ImageBlog1 from '../../assets/images/6-2-342x252.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const infoBlog = [
    {
        id: 1,
        title: '10 Sun Hats For Beach Days, Long',
        text: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.',
        image: ImageBlog1

    },
    {
        id: 2,
        title: '10 Sun Hats For Beach Days, Long',
        text: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.',
        image: ImageBlog1
    },
    {
        id: 3,
        title: '10 Sun Hats For Beach Days, Long',
        text: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.',
        image: ImageBlog1
    },
    {
        id: 4,
        title: '10 Sun Hats For Beach Days, Long',
        text: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.',
        image: ImageBlog1
    },
    {
        id: 5,
        title: '10 Sun Hats For Beach Days, Long',
        text: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.',
        image: ImageBlog1
    },
    {
        id: 6,
        title: '10 Sun Hats For Beach Days, Long',
        text: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.',
        image: ImageBlog1
    },
];

const ItemBlog = ({title, text, image}) => (
    <div className='border-main p-[20px] border-solid border-[3px] rounded-[20px]'>
        <img src={image} alt="" className='w-[341px] h-[251px] max-w-full rounded-[20px] mb-[30px]' />
        <a href="http://" className='text-[24px] font-[700]'>{title}</a>
        <p className='text-[16px] font-[400] text-[#505050] pt-[10px] pb-[40px]'>{text}</p>
        <div className='flex items-center justify-start'>
            <CalendarMonthIcon fontSize='large' className='pr-[10px]'/>
            <time dateTime='2022-04-10'>10 Tháng Tư, 2022</time>
        
        </div>
        <MaterialButton variant="contained" disableElevation className='!rounded-[5px] !bg-main !text-[16px] !font-[700] !py-[8px] !px-[30px] !mt-[10px]'>
            Đọc thêm    
        </MaterialButton>
   
    </div>
)

function Blog() {
    return (
            <div className=''>
            <LayoutContainer className='!px-[0]'>
                <div className='text-center'>
                    <div className='text-main font-[700] text-[24px] mb-[15px]'>Blog & Tin tức</div>
                    <div className='text-black mt-[15px] text-[40px] uppercase font-[700]'>Tin tức mới nhất</div>
                    <p className='mt-[30px] mb-[40px] text-[#505050] px-[300px]'>Khám phá bài viết mới nhất với thông tin nổi bật, các xu hướng mới nhất và nội dung hữu ích để giúp bạn cập nhật và được thông tin tức thời..</p>
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
                            {infoBlog.filter(item => [1,2,3].includes(item.id)).map((item) => (
                                    <ItemBlog
                                        key={item.id}
                                        title={item.title}
                                        text={item.text}
                                        image={item.image}
                                    />
                            ))}
                            
                
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='px-[80px] py-[50px]'>
                    <div className='grid grid-cols-3 gap-x-[30px]'>
                        
                        {infoBlog.filter(item => [4,5,6].includes(item.id)).map((item) => (
                                <ItemBlog
                                    key={item.id}
                                    title={item.title}
                                    text={item.text}
                                    image={item.image}
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

export default memo(Blog);