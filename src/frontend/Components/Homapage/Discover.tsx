import { memo } from 'react';
//@ts-ignore
import Image0ffer from "../../assets/images/offer-1-1.png"
//@ts-ignore
import DiscoverBackground from '../../assets/images/Untitled-design-e1709281316930.png'
import LayoutContainer from '../../components/All/LayoutContainer';

export interface InfoDiscoverProps {
    sub_title: string
    title: string
    text: string
    button_text: string
}

const discoverInfo: InfoDiscoverProps[] = [
    {
        sub_title: 'Go & Discover',
        title: 'Ưu đãi đặc biệt',
        text: 'Chỉ trong thời gian có hạn, nhận ngay khuyến mãi 35% khi đặt tour du lịch tại hệ thống của chúng tôi. Hành trình hấp dẫn – Giá cực chất – Trải nghiệm không thể bỏ lỡ!',
        button_text: 'Nhận ưu đãi ngay'
    }
]
    
function Discover () {
    return (
        
        <div className='bg-no-repeat bg-cover'style={{backgroundImage: `url(${DiscoverBackground})`}}>
      
        <LayoutContainer>
        <div className='flex flex-wrap'>
                <div className='w-1/2 flex items-center'>
                    <div className=''>
                        <span className='font-[700] text-[24px] mb-[15px] text-transparent-[capitalize] text-white'>{discoverInfo[0].sub_title}</span>
                        <h2 className='mt-[15px] font-[700] text-[40px] uppercase text-white'>{discoverInfo[0].title}</h2>
                        <p className='leading-[26px] mt-[30px] mb-[40px] pr-[200px] text-white'> {discoverInfo[0].text}</p>
                        <div className='btn_wrapper'>
                            
                            <button className="text-main bg-white px-[35px] py-2.5 group relative overflow-hidden font-[700] text-[16px] rounded-lg
                                after:content-[''] 
                                after:absolute 
                                after:top-0 
                                after:bottom-0 
                                after:left-0 after:w-0 
                                after:bg-main
                                after:hover:w-full 
                                after:transition-[width]
                                after: ease-linear
                                duration-2000
                                ">
                                <a href="http://" className='relative  z-10 group-hover:text-white '>
                                <span>{discoverInfo[0].button_text}</span>
                                </a>
                
                            </button>
                         
                    
                        </div>
                    </div>
                   
                </div>
           
                <div className='w-1/2 mr-auto'>
                    <div className="flex items-center justify-center">
                        <div className="relative flex items-center justify-center w-[440px] h-[440px] bg-white/60 rounded-[50%]">
                            <div className='absolute inset-0 animate-spin_slow '>
                                <div className="absolute top-10 left-14 w-10 h-10 bg-yellow-400 rounded-full group-hover:bg-main duration-1000"></div>
                                <div className="absolute bottom-10 right-14  w-10 h-10 bg-yellow-400 rounded-full group-hover:bg-main duration-1000"></div>
                            </div>
                       
                            <div className='flex items-center justify-center h-[350px] w-[350px] rounded-[50%] border-solid border-[50px] border-white bg-main'>
                                    
                                    <div className='img__offer'>
                                        <img src= {Image0ffer} alt="" width={"140px"} height={"80px"}/>
                                      
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    </div>
    );
}

export default memo(Discover)