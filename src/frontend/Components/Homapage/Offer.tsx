import { memo, FC } from 'react';
import LayoutContainer from '../../components/All/LayoutContainer';
//@ts-ignore
import VideoBackground from '../../assets/images/discount-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { useCountdown } from '../../hook/All/useCountDown';

export interface InfoOfferProps {
    sub_title: string
    title:string
    text:string
    buttonText:string
}
const offerInfo:InfoOfferProps[]  = [
    {
        sub_title: 'Ưu đãi giới hạn',
        title: 'Nhận giảm giá lên đến 50%',
        text:'Thời gian có hạn. Hãy khám phá ngay',
        buttonText:'Xem thêm',
    }
]





export interface LableProps {
    id: number
    text:string
}
const label: LableProps[] = [
    {
        id: 1,
        text:'Days'
    },
    {
        id: 2,
        text:'Hours'
    },
    {
        id: 3,
        text:'Minutes'
    },
    {
        id: 4,
        text:'Seconds'
    },
]
interface RenderProps {
    label: LableProps
}






const LableItem: FC<RenderProps> = ({label}) => (
    <span className='w-[80px] text-center text-[14px] text-[#666] uppercase'>
        {label.text}
    </span>
)

function Offer () {
    const { dayNum, hourNum, minuteNum, secondNum } = useCountdown(20)

    return (
        <div className="bg-black flex items-center justify-center">
      
            <LayoutContainer className='w-full'>
                <div className="relative flex flex-col lg:flex-row items-center">
                        <div className='relative z-10 w-full max-w-2xl lg:w-auto bg-white p-8 lg:p-12 rounded-2xl shadow-2xl flex-shrink-0'>
                            <div className='w-[595px] max-w-[595px] bg-white p-[30px] rounded-[20px]'>
                                <span className='text-main font-[700] text-[24px] '>{offerInfo[0].sub_title}</span>
                                <h2 className='text-black font-[700] text-[40px]'>{offerInfo[0].title}</h2>
                                <p className='mb-[30px]'>{offerInfo[0].text}</p>
            
                                <div className="flex items-center flex-col mt-[50px] gap-[50px] ">
                                <div className="flex gap-[40px]">
                                    <div className="flex gap-[40px]">
                                        <div className="w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center text-white text-[32px] font-[700]">
                                            {dayNum}
                                        </div>
                                    </div>
                                    <div className="flex gap-[40px]">
                                        <div className="w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center text-white text-[32px] font-[700]">
                                            {hourNum}
                                        </div>
                                    </div>
                                    <div className="flex gap-[40px]">
                                        <div className="w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center text-white text-[32px] font-[700]">
                                            {minuteNum}
                                        </div>
                                    </div>
                                    <div className="flex gap-[40px]">
                                        <div className="w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center text-white text-[32px] font-[700]">
                                            {secondNum}
                                        </div>
                                    </div>
                                </div>

                                    <div className="flex gap-[40px] mt-[-30px] mb-[30px]">
                                    {label.map((item) => (
                                            <LableItem
                                                key={item.id}
                                                label={item}
                                            />
                                    ))}
                                    </div>
                                </div>

                                <div className='flex items-center justify-center'>
                                            
                                               
                                             
                                            <button className="text-white bg-secondary px-[35px] py-2.5 w-full relative overflow-hidden font-[700] text-[16px] rounded-lg
                                                after:content-[''] 
                                                after:absolute 
                                                after:top-0 
                                                after:bottom-0 
                                                after:left-0 after:w-0 
                                                after:bg-main
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
                        <div className='w-full mt-8 lg:mt-0 lg:-ml-48'>
                                <div className="relative flex items-center justify-center h-[480px] lg:h-[640px] max-w-full bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(${VideoBackground})`}}>
                                    <div className='btn_wrapper'>
                                        <a href="http://">
                                        
                                            <button className='bg-main p-[40px] rounded-[50%]' >
                                                <FontAwesomeIcon icon={faPlay} className='text-white text-[20px]'/>
                                            </button>
                                        </a>
                                    </div>
                                </div>                 
                        </div> 
                </div>
            </LayoutContainer>
        </div>
    )
}

export default memo(Offer);

