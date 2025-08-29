import { memo } from 'react';
import Image0ffer from "../../assets/images/offer-1-1.png"
import DiscoverBackground from '../../assets/images/Untitled-design-e1709281316930.png'
import LayoutContainer from '../All/LayoutContainer';

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
                            <a href="http://">
                      
                                <button className="!bg-white py-[10px] px-[30px] rounded-[15px] font-[700] text-main text-[16px]">
                                    {discoverInfo[0].button_text}
                                </button>
                            </a>
                    
                        </div>
                    </div>
                   
                </div>
           
                <div className='w-1/2 mr-auto'>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center w-[440px] h-[440px] bg-white/60 rounded-[50%]">
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