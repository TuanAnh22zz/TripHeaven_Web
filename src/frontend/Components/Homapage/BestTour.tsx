
import { memo, FC, JSX } from 'react';
import LayoutContainer from '../../components/All/LayoutContainer';
//@ts-ignore
import Background1 from '../../assets/images/Destination/Bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import Button from '../../components/All/Button';
//@ts-ignore
import Destination1 from '../../assets/images/Destination/10-900x490.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faMap} from '@fortawesome/free-regular-svg-icons'
import AnimationScroll from '../../hook/Animation/useAnimationScroll'
import { Link } from 'react-router-dom';


export interface TourProps {
    id: number,
    image: string
    title:string,
    time: string,
    price: string,
    location: string

}
const InfoTour: TourProps[] = [
    {
        id:1,
        image: Destination1,
        title: 'Romantic Sri Lanka Honeymoon Package',
        time: '7 Ngày - 5 Đêm ',
        price: '3.400.000đ',
        location: 'England'
        
    },
    {
        id:2,
        image: Destination1,
        title: 'Romantic Sri Lanka Honeymoon Package',
        time: '7 Ngày - 5 Đêm ',
        price: '3.400.000đ',
        location: 'England'
        
    },
    {
        id:3,
        image: Destination1,
        title: 'Romantic Sri Lanka Honeymoon Package',
        time: '7 Ngày - 5 Đêm ',
        price: '3.400.000đ',
        location: 'England'
        
    },
    {
        id:4,
        image: Destination1,
        title: 'Romantic Sri Lanka Honeymoon Package',
        time: '7 Ngày - 5 Đêm ',
        price: '3.400.000đ',
        location: 'England'
        
    },
    {
        id:5,
        image: Destination1,
        title: 'Romantic Sri Lanka Honeymoon Package',
        time: '7 Ngày - 5 Đêm ',
        price: '3.400.000đ',
        location: 'England'
        
    },
    {
        id:6,
        image: Destination1,
        title: 'Romantic Sri Lanka Honeymoon Package',
        time: '7 Ngày - 5 Đêm ',
        price: '3.400.000đ',
        location: 'England'
        
    },
]
interface RenderTourProps {
    tour: TourProps
}


const RenderTour: FC<RenderTourProps> = ({tour}) => (
    <div className='drop-shadow-lg bg-white rounded-[10px]'>
        <div className='overflow-hidden rounded-[10px]'>
            <a href="http://">
                <img src={tour.image} alt="" className='w-full h-[251px] max-w-full object-cover mb-[30px] transition-transform ease-in-out hover:scale-105 duration-500' />
            </a>
        </div>
        
        <div className='px-[15px]'>
            <a href="http://" className='text-[24px] font-[700] hover:text-main duration-300'>{tour.title}</a>
            
            <div className='flex flex-wrap mt-[25px] relative'>
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0 border-l-[1px] border-[#505050] border-solid"></div>

                    <div className='w-1/2 space-y-2'>
                        <div className='flex flex-wrap text-[#505050]'>
                            <div className='w-fit mr-[8px]'>
                                <FontAwesomeIcon icon={faMap} />
                                </div>
                                <div className='w-3/4'>
                                    <span>
                                        <a href=""> {tour.location} </a>,

                                        <a href=""></a>
                                        <a href=""></a>
                                        <a href=""></a>
                                    </span>
                                </div>
                            </div>
                        <div className='flex flex-wrap'>
                        
                                <div className='w-fit mr-[8px]'>
                                <FontAwesomeIcon icon={faClock} />
                                </div>
                            <div className='w-3/4'>
                                <span>{tour.time}</span>
                            </div>

                        </div>
                        
                        
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <span className='font-[700] text-[24px]'>{tour.price}</span>
                    </div>
                    
            
            </div>

            <div className='mt-[30px] w-full pb-[20px]'>
        
                <button className="text-white bg-main px-[35px] py-2.5 w-full relative overflow-hidden font-[700] text-[16px] rounded-lg
                after:content-[''] 
                after:absolute 
                after:top-0 
                after:bottom-0 
                after:left-0 after:w-0 
                after:bg-secondary
                after:hover:w-full 
                after:transition-[width]
                after: ease-linear
                duration-1000
                ">
                    <a href="http://" className='relative z-10'>
                       <span>Xem chi tiết</span>
                    </a>
                
                </button>
                
            </div>
        </div>
    </div>
);
function BestTour () {
    const { ref, view } = AnimationScroll(0.2); 

    return (
        <div  className='' style={{backgroundImage: `url(${Background1})`}}>
        <LayoutContainer>
            <div ref={ref}  className={`text-center ${view?"animate-zoomIn":"opacity-0"}`}>
                <div className='text-main font-[700] text-[24px] mb-[15px]'>Chuyến đi tuyệt vời</div>
                <div className='text-black mt-[15px] text-[40px] uppercase font-[700]'>Gói kỳ nghỉ tốt nhất</div>
                <p className='mt-[30px] mb-[40px] text-[#505050] px-[200px]'>Khám phá gói kỳ nghỉ hoàn hảo, được thiết kế riêng cho mọi hành trình mơ ước của bạn. Từ các khu nghỉ dưỡng sang trọng đến những chuyến phiêu lưu kỳ thú, mọi chi tiết đều được chăm chút tỉ mỉ. Điều này cho phép bạn hoàn toàn đắm mình vào trải nghiệm và khám phá thế giới mà không cần lo lắng.</p>
            </div>

            <div ref={ref}  className={` 
            relative
            [&_.swiper-button-prev]:text-main
            [&_.swiper-button-next]:text-main
        
            [&_.swiper-pagination-bullet-active]:bg-main
            ${view?"animate-zoomIn":"opacity-0"}
            `}
           
           
        >
                <Swiper
                  
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
                delay: 5000, 
                disableOnInteraction: false, 
              }}
            className="mySwiper"
        >
            <SwiperSlide className='px-[0] py-[60px]'>
                <div className='grid grid-cols-3 gap-x-[30px]'>
                    {InfoTour.filter(item => [1,2,3].includes(item.id)).map(item => (
                        <RenderTour
                            key={item.id}
                            tour={item}
                        />
                    ))}
                </div>
            </SwiperSlide>
            <SwiperSlide className='px-0 py-[50px]'>
                <div className='grid grid-cols-3 gap-x-[30px]'>
                    {InfoTour.filter(item => [4,5,6].includes(item.id)).map(item => (
                            <RenderTour
                                key={item.id}
                                tour={item}
                            />
                        ))}
                </div>
            </SwiperSlide>
     
     
        
            
        </Swiper>
            </div>

            <div className='flex items-center justify-center mt-[5px]'>
                <Button>
                   Xem thêm
                </Button>
            </div>

        </LayoutContainer>
       
    </div>
    );

}
export default memo(BestTour);