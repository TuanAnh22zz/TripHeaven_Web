import { memo } from 'react';
import RowingIcon from '@mui/icons-material/Rowing';

import  MaterialButton from '@mui/material/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/joy/Input';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BannerBackgroundImage from '../../assets/images/hero2-bg.jpg'
import LayoutContainer from '../All/LayoutContainer';
const bannerInfo = 
    {
        sub_title: 'Khám phá ngay',
        title: 'Hành trình thú vị đang chờ đợi',
        text: 'Chào mừng bạn đến với trang chủ của chúng tôi, nơi bạn có thể khám phá và trải nghiệm những chuyến du lịch tuyệt vời. Chúng tôi tự hào là một đơn vị hàng đầu trong ngành du lịch, mang đến cho bạn những trải nghiệm đáng nhớ và không thể quên.',
        buttonText: 'Xem thêm',
    };
const bannerSearch = [
    {
        id: 'destination',
        placeholder: 'Điểm đến',    
        icon: <LocationOnIcon />,
    
    },
    {
        id: 'activity',
        placeholder: 'Hoạt động',    
        icon: <RowingIcon/>,
    
    },
    {
        id: 'duration',
        placeholder: '0 ngày - 8 ngày',    
        icon: <AccessTimeFilledIcon />,
    
    },
    {
        id: 'price',
        placeholder: '1,500,000đ - 5,000,000đ',    
        icon: <PaidIcon />,
    
    }


]
const SearchField = ({icon, placeholder}) => (
    <div className='py-[15px] px-[20px]'>
        <Input
            className='pt-[15px] pr-[10px] pb-[20px] w-[400px]'
            type={'text'}
            placeholder={placeholder}
            startDecorator={icon}
            endDecorator={<KeyboardArrowDownIcon/>}
        />                     
     </div>
)
function Banner() {
    return (
        <div className="bg-no-repeat w-full bg-cover bg-center"   style={{ backgroundImage: `url(${BannerBackgroundImage})` }}>
   
        <LayoutContainer>
        <div className="flex flex-wrap">
                <div className="w-1/2 flex mr-auto">
                    <div className="">
                        <span className='font-[700] text-[24px] mb-[15px] text-transparent-[capitalize] text-[#4CAF50] '>{bannerInfo.sub_title}</span>
                        <h2 className='mt-[15px] font-[700] text-[64px] text-white uppercase '>{bannerInfo.title}</h2>
                        <p className='text-white leading-[26px] mt-[30px] mb-[40px] pr-[200px]'>{bannerInfo.text} </p>
                        <div className='btn_wrapper'>
                            <a href="http://">
                                <MaterialButton variant="contained" disableElevation className='!rounded-[5px] !bg-main !text-[16px] !font-[700] !py-[8px] !px-[30px] !mt-[10px]'>
                                    {bannerInfo.buttonText}
                                </MaterialButton>
                            </a>
                    
                        </div>
                    </div>

                </div>
                <div className="w-1/2 flex justify-end items-center mr-auto">
                    <div className="info__banner__right">
                        <form action="" className='bg-white border-main border-solid border-[4px] rounded-[5px]'>
                            {bannerSearch.map((item) => (
                             < SearchField
                                    key={item.id}
                                    icon={item.icon}
                                    placeholder={item.placeholder}
                            />
                            ))}
                        <div className='py-[25px] px-[20px]'>
                            <a href="http://">
                                <MaterialButton variant="contained" disableElevation className='py-[10px] px-[0]rounded-[10px] w-[400px] !bg-main'>
                                    Tìm Ngay
                                </MaterialButton>
                            </a>
                    
                        </div>
                        
                        </form>
                    </div>
                   
                </div>
            </div>
        </LayoutContainer>

    </div>
    );

}
export default memo(Banner);
