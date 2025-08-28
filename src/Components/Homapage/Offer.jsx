import { memo } from 'react';
import LayoutContainer from '../All/LayoutContainer';
import VideoBackground from '../../assets/images/discount-bg.jpg'
import OfferPicture from '../../assets/images/visit-left2.png'
import Button from '../All/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'


const offerInfo = {
    sub_title: 'Ưu đãi giới hạn',
    title: 'Nhận giảm giá lên đến 50%',
    text:'Thời gian có hạn. Hãy khám phá ngay',
    buttonText:'Xem thêm',
};

const clockItem = [
    {
        id: 1,
        text:'10'
    },
    {
        id: 2,
        text:'22'
    },
    {
        id: 3,
        text:'04'
    },
    {
        id: 4,
        text:'04'
    },
]

const label = [
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



const ClockItem = ({text}) => (
    <div className="flex gap-[40px]">
        <div className="w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center text-white text-[32px] font-[700]">
            {text}
        </div>
    </div>
)
const LableItem = ({text}) => (
    <span className='w-[80px] text-center text-[14px] text-[#666] uppercase'>
        {text}
    </span>
)

function Offer () {
    return (
        <div className="bg-black flex items-center justify-center">
        <div className="bg-no-repeat max-w-full w-[552px] h-[608px]" style={{backgroundImage: `url(${OfferPicture})`}}>        
        </div>
            <LayoutContainer className='w-full'>
                <div className="relative flex flex-col lg:flex-row items-center">
                        <div className='relative z-10 w-full max-w-2xl lg:w-auto bg-white p-8 lg:p-12 rounded-2xl shadow-2xl flex-shrink-0'>
                            <div className='w-[595px] max-w-[595px] bg-white p-[30px] rounded-[20px]'>
                                <span className='text-main font-[700] text-[24px] '>{offerInfo.sub_title}</span>
                                <h2 className='text-black font-[700] text-[40px]'>{offerInfo.title}</h2>
                                <p className='mb-[30px]'>{offerInfo.text}</p>
            
                                <div className="flex items-center flex-col mt-[50px] gap-[50px] ">
                                <div className="flex gap-[40px]">
                                    {clockItem.map((item) => (
                                        <ClockItem
                                            key={item.id}
                                            text={item.text}
                                        />
                                    ))}
                                </div>

                                    <div className="flex gap-[40px] mt-[-30px] mb-[30px]">
                                    {label.map((item) => (
                                            <LableItem
                                                key={item.id}
                                                text={item.text}
                                            />
                                    ))}
                                    </div>
                                </div>

                                <div className='flex items-center justify-center'>
                                            <a href="http://">
                                               
                                                <Button className='!bg-secondary'>
                                                    {offerInfo.buttonText}
                                                </Button>
                                            </a>
                                    
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

