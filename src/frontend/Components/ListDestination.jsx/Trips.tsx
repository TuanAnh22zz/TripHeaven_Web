import { memo } from 'react';
import React, { FC} from 'react';
import LayoutContainer from '../All/LayoutContainer';
//@ts-ignore
import InfoImage from '../../assets/images/ListDestinations/destinations-1-1 (1).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {faClock, faUser, faChartBar, faMap, faCircleCheck, faCalendarDays} from '@fortawesome/free-regular-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
//@ts-ignore
import DemoImage from '../../assets/images/ListDestinations/4.jpg'
import Button from '../All/Button';


export interface Trip { 
    id: number,
    title: string,
    description: string,
    time: string,
    people: number,
    destination: string,
    price: string,
    difficult: string,
    image1: string,
    image2: string,
}

const InfoTrip: Trip[] = [
    {
        id: 1, 
        title: 'Everest Base Camp Trek: See the Majestic Mt. Everest',
        description: 'Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train,...',
        time: '4',
        people:1,
        destination: 'Annapurna',
        price: '5.000.000đ',
        difficult: 'Hard',
        image1: DemoImage,
        image2: DemoImage
    },

    {
        id: 2, 
        title: 'Everest Base Camp Trek: See the Majestic Mt. Everest',
        description: 'Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train,...',
        time: '4',
        people:1,
        destination: 'Annapurna',
        price: '5.000.000đ',
        difficult: 'Hard',
        image1: DemoImage,
        image2: DemoImage
    },
    

];

interface RenderTripsProps {
    trip: Trip;
}

const RenderTrips: FC<RenderTripsProps> = ({trip}) => (
    <div>
        <div className='flex flex-wrap'>
            <div className='w-2/5'>
                <div className="
                        
                        [&_.swiper-button-prev]:text-white
                        [&_.swiper-button-next]:text-white
                        [&_.swiper-pagination-bullet-active]:bg-white
                        [&_.swiper-button-prev::after]:text-2xl
                        [&_.swiper-button-next::after]:text-2xl
                        ">
                            <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        pagination={true}
                        modules={[Pagination, Navigation]}
                        className=""
                    >
                        <SwiperSlide className=''>
                            <div className='py-[8px] px-[5px]'>
                                <img src={trip.image1} alt="" className='w-[402px] h-[301px]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='py-[8px] px-[5px]'>
                                <img src={trip.image2} alt="" className='w-[402px] h-[301px]' />
                            </div>
                    
                        </SwiperSlide> 
                    
                        
                    </Swiper>
                </div>
            </div>

            <div className='w-3/5 pl-[25px]'>
                
                <div>
                <div className='flex flex-wrap mb-[25px]'>
                    <div className='w-4/5 flex items-start justify-start '>
                        <a href="" className='text-[24px] font-semibold'>{trip.title}</a>
                    </div>
                    <div className='w-1/5 flex items-start justify-center pt-[6px] pl-[20px]'>
                        <FontAwesomeIcon icon={faHeart} style={{color: "#505050"}} size="xl" />
                    </div>
                </div>

                <div className='flex flex-wrap relative'>
                    <div className="absolute top-0 bottom-0 right-1/3 -translate-x-1/2 w-0 border-l-[0.5px] border-[#505050] border-solid"></div>

                    <div className='w-2/3 space-y-5 flex items-center pr-[15px]'>
                        <div className='space-y-2'>
                        
                                <div className='flex flex-wrap'>
                                    <div className='w-fit mr-[8px]'>
                                        <FontAwesomeIcon icon={faClock} style={{color: "#4caf50",}} />     
                                    </div>
                                    <div className='w-fit'>
                                        <span className='flex'>{trip.time} Ngày</span>
                                    </div>
                                </div>  

                                <div className='flex flex-wrap'>
                                        <div className='w-fit mr-[8px]'>
                                            <FontAwesomeIcon icon={faUser} style={{color: "#4caf50",}} />
                                        </div>
                                        <div className='w-fit'>
                                            <span>{trip.people} Người</span>
                                        </div>
                                </div>  

                                <div className='flex flex-wrap'>
                                        <div className='w-fit mr-[8px]'>
                                            <FontAwesomeIcon icon={faChartBar} style={{color: "#4caf50",}} /> 
                                        </div>
                                        <div className='w-fit'>
                                            <a href="">{trip.difficult}</a>
                                        </div>
                                </div>  

                                <div className='flex flex-wrap'>
                                        <div className='w-fit mr-[8px]'>
                                            <FontAwesomeIcon icon={faMap} style={{color: "#4caf50",}} />
                                            </div>
                                            <div className='w-fit'>
                                                <a href="">{trip.destination}</a>
                                                <a href=""></a>
                                                <a href=""></a>
                                            </div>
                                </div>  
                                <div className='flex flex-wrap'>
                                    <div className='flex flex-wrap w-full mt-[15px]'>
                                        <span>{trip.description}</span>
                                    </div> 
                                </div>

                            
                        </div>
                    

                        
                    </div>
                    <div className='w-1/3 flex items-start pl-[20px]'>
                            <div>
                            <div>
                                <span className='text-[24px] text-main font-[600]'>{trip.price}</span>
                            
                            </div>
                            <div className='mt-[15px]'> 
                                <span className='text-[12px]'>Chuyến khởi hành tiếp theo</span>
                            </div>
                            <div className='mt-[10px]'>
                                <ul className='space-y-2'>
                                <li className='flex items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#4caf50",}} />
                                    <span className='text-[12px]'>Th8 22</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#4caf50",}} />
                                    <span className='text-[12px]'>Th8 22</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#4caf50",}} />
                                    <span className='text-[12px]'>Th8 22</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                </div>

                </div>
            
            </div>

            

        </div>
        <div className='flex flex-wrap mt-[20px] w-full px-[5px] '>
                    <hr className='solid border-[0.5px] border-[#505050] w-[100%]'  />
        </div>
        <div className='flex flex-wrap mt-[20px]'>
            <div className='w-3/4  flex items-center justify-start'>
                <div>
                    <span className='text-[13px]'>Có sẵn quanh năm</span>
                    <ul className='flex gap-x-[10px] text-[14px] mt-[10px]' >
                        <li> <FontAwesomeIcon icon={faCalendarDays} style={{color: "#4caf50", fontSize:'20px' }}/></li>
                        <li>Th1</li>
                        <li>Th2</li>
                        <li>Th3</li>
                        <li>Th4</li>
                        <li>Th5</li>
                        <li>Th6</li>
                        <li>Th7</li>
                        <li>Th8</li>
                        <li>Th9</li>
                        <li>Th10</li>
                        <li>Th11</li>
                        <li>Th12</li>
                    </ul>
                </div>
            
            </div>
            <div className='w-1/4 flex items-center justify-end pr-[20px]'>
                <Button>
                    Xem chuyến đi
                </Button>
            </div>
        </div>
    </div>
);

function Trips () {
    return (
        <div>
        <LayoutContainer className='!px-0'>
            <div>
                <h1 className='text-[48px] font-[700] uppercase text-center'>Annapurna</h1>
                <img src={InfoImage} alt="" className='w-[581px] h-[660px] mt-[10px]' />
            </div>  

            <div className='mt-[80px]'>
                <div className='flex flex-wrap'>
                    {/* Phần Filter */}
                    <div className='w-1/4 pr-[60px] pl-0 space-y-[30px]'>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span className='text-[20px]'>Điều kiện lọc</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <button className='text-[14px] underline text-[#505050] p-0'>
                                        Xoá tất cả
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span>Giá</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                    <div className="relative mb-6 w-full">
                                        <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                                        <input id="labels-range-input" type="range" min="1.500.000" max="5.000.000" className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-main 
                                            [&::-webkit-slider-thumb]:appearance-none     
                                            [&::-webkit-slider-thumb]:h-5
                                            [&::-webkit-slider-thumb]:w-5
                                            [&::-webkit-slider-thumb]:rounded-full
                                            [&::-webkit-slider-thumb]:bg-main
                                            [&::-webkit-slider-thumb]:shadow-md
                                            [&::-webkit-slider-thumb]:border-2
                                            [&::-webkit-slider-thumb]:border-main"/>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">1.500.000d</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">5.000.000đ</span>
                                    </div>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span>Thời gian</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                    <div className="relative mb-6 w-full">
                                        <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                                        <input id="labels-range-input" type="range" min="1.500.000" max="5.000.000" className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-main 
                                            [&::-webkit-slider-thumb]:appearance-none     
                                            [&::-webkit-slider-thumb]:h-5
                                            [&::-webkit-slider-thumb]:w-5
                                            [&::-webkit-slider-thumb]:rounded-full
                                            [&::-webkit-slider-thumb]:bg-main
                                            [&::-webkit-slider-thumb]:shadow-md
                                            [&::-webkit-slider-thumb]:border-2
                                            [&::-webkit-slider-thumb]:border-main"/>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0 ngày</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">8 ngày</span>
                                    </div>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span>Các điểm đến</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div> 
                                    <div className="flex items-center mb-4">
                                        <input  id="checkbox_hard" type="checkbox" value="annapurna" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Annapurna</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox-medium" type="checkbox" value="bhutan" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox-medium" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Bhutan</label>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span>Các hoạt động</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='space-y-4'> 
                                    <div className="flex items-center">
                                        <input  id="checkbox_hard" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Chèo thuyền</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox-medium" type="checkbox" value="citytour" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox-medium" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">City Tour</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox_hard" type="checkbox" value="cycling" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Cycling</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox-medium" type="checkbox" value="hiking" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox-medium" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Hiking</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox_hard" type="checkbox" value="jungle" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Jungle Safari</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox-medium" type="checkbox" value="climbing" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox-medium" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Peak Climbing</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox_hard" type="checkbox" value="rafting" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Rafting</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox-medium" type="checkbox" value="skiing" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox-medium"  className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Skiing</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="checkbox_hard" type="checkbox" value="trekking" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                        <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Trekking</label>
                                    </div>
                                    
                                </div>
                               
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span>Loại chuyến đi</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                                <div className='flex items-center'>
                                    <div> 
                                        <div className="flex items-center mb-4">
                                            <input  id="checkbox_hard" type="checkbox" value="hard" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                            <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Budget Travel</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input  id="checkbox-medium" type="checkbox" value="medium" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                            <label htmlFor="checkbox-medium" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Child-friendly</label>
                                        </div>
                                    </div>
                                
                                </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-center '>
                                <div className='w-3/4 flex '>
                                    <span>Độ khó khăn</span>
                                </div>
                                <div className='w-1/4 flex justify-end'>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                                <div className='flex items-center'>
                                    <div> 
                                        <div className="flex items-center mb-4">
                                            <input  id="checkbox_hard" type="checkbox" value="hard" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                            <label htmlFor="checkbox_hard" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Khó khăn</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input  id="checkbox-medium" type="checkbox" value="medium" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded-sm"/>
                                            <label htmlFor="checkbox-medium" className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Trung bình</label>
                                        </div>
                                    </div>
                                
                                </div>
                        </div>
                        
                    </div>
                    {/*Phần thông tin chuyến đi */}
                    <div className='w-3/4 space-y-[80px]'>
                       
                        <div className='flex flex-wrap !mb-[-30px]'>
                                <div className='w-1/2 flex items-center justify-start'>
                                    <h2>
                                        <strong className='pr-[5px]'>2</strong>
                                        Trips Found
                                    </h2>
                                </div>
                                <div className='w-1/2 flex justify-end items-center pr-[3px]'>
                                        <span className='mr-[10px]'>Sắp xếp: </span>
                                        <div>
                                            <span>Mới nhất</span>
                                            <FontAwesomeIcon icon={faAngleDown} className='ml-[5px]'/>
                                        </div>
                                </div>
                        </div>
                        {InfoTrip.map((item) => (
                            <RenderTrips
                                key={item.id}
                                trip={item}
                              
                            />
                        ))}

                    </div>
                </div>
            </div>
        </LayoutContainer>
        </div>
    );
}
export default memo(Trips);