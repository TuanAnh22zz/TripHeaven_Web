import { memo } from 'react';
import RowingIcon from '@mui/icons-material/Rowing';

import  MaterialButton from '@mui/material/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/joy/Input';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
    <div className='select__field'>
        <Input
            className='input__select'
            type={'text'}
            placeholder={placeholder}
            startDecorator={icon}
            endDecorator={<KeyboardArrowDownIcon/>}
        />                     
     </div>
)
function Banner() {
    return (
        <div className="part banner">
        <div className="container">
            <div className="row">
                <div className="col-6 banner__left">
                    <div className="info__banner__left">
                        <span className='sec_sub-title'>{bannerInfo.sub_title}</span>
                        <h2 className='sec_title'>{bannerInfo.title}</h2>
                        <p className='sec_text'>{bannerInfo.text} </p>
                        <div className='btn_wrapper'>
                            <a href="http://">
                                <MaterialButton variant="contained" disableElevation className='muiButton btn_style1'>
                                    {bannerInfo.buttonText}
                                </MaterialButton>
                            </a>
                    
                        </div>
                    </div>

                </div>
                <div className="col-6 banner__right">
                    <div className="info__banner__right">
                        <form action="" className='form_search_trip'>
                            {bannerSearch.map((item) => (
                             < SearchField
                                    key={item.id}
                                    icon={item.icon}
                                    placeholder={item.placeholder}
                            />
                            ))}
                        <div className='btn_wrapper'>
                            <a href="http://">
                                <MaterialButton variant="contained" disableElevation className=' muiButton btn_style1'>
                                    Tìm Ngay
                                </MaterialButton>
                            </a>
                    
                        </div>
                        
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );

}
export default memo(Banner);
