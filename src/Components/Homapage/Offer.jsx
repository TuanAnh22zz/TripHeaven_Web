import { memo } from 'react';
import HeaderTop from '../../Components/Homapage/HeaderTop'; 
import Banner from '../../Components/Homapage/Banner'
import Introduction from '../../Components/Homapage/Introduction';
import  MaterialButton from '@mui/material/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/joy/Input';
import RowingIcon from '@mui/icons-material/Rowing';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';




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
    <div className="circles-container">
        <div className="circle">
            {text}
        </div>
    </div>
)
const LableItem = ({text}) => (
    <span className='label'>
        {text}
    </span>
)

function Offer () {
    return (
        <div className="part offer">
        <div className="offer_picture">        
        </div>
        <div className="container">
            
                <div className="row">
                    <div className='offer__left'>
                        <div className='info__offer'>
                            <span className='sec_sub-title'>{offerInfo.sub_title}</span>
                            <h2 className='sec_title'>{offerInfo.title}</h2>
                            <p className='sec_text'>{offerInfo.text}</p>
        
                            <div className="time__countdown">
                            <div className="circles-container">
                                {clockItem.map((item) => (
                                    <ClockItem
                                        key={item.id}
                                        text={item.text}
                                    />
                                ))}
                            </div>

                                <div className="labels-container">
                                {label.map((item) => (
                                        <LableItem
                                            key={item.id}
                                            text={item.text}
                                        />
                                ))}
                                </div>
                            </div>

                            <div className='btn_wrapper'>
                                        <a href="http://">
                                            <MaterialButton variant="contained" disableElevation className='muiButton btn_style1'>
                                                {offerInfo.buttonText}
                                            </MaterialButton>
                                        </a>
                                
                            </div>
                        </div>
                    </div>
                    <div className='offer__right'>
                            <div className="video">
                                <div className='btn_wrapper'>
                                    <a href="http://">
                                        <MaterialButton variant="contained" disableElevation className='play_btn_style1' >
                                            <PlayArrowIcon fontSize='large'/>
                                        </MaterialButton>
                                    </a>
                                 </div>
                            </div>                 
                    </div> 
            </div>
        </div>
        </div>
    )
}

export default memo(Offer);

