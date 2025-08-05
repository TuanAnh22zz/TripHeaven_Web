import { memo } from 'react';
import  MaterialButton from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/joy/Input';
import RowingIcon from '@mui/icons-material/Rowing';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';





import './style.scss'
function HomePage() {
    return (
       
       
   
        <div className='all'>
            {/* Phần HeaderTop */}
            <div className='header_top'>
                    <div className='container'>
                        <div className='row'> 
                            <div className='col-6 header__left'>
                                <ul>
                                    <li>
                                        <a href="https://github.com/TuanAnh22zz" className='contact_link'>
                                            <MailIcon></MailIcon>
                                        nfo@themona.global 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://trip-haven.monamedia.net/tel:0313728397" className='contact_link'>
                                        <PermPhoneMsgIcon fontSize='large'></PermPhoneMsgIcon>
                                        (+84) 0313728397
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6 header__right'>
                                <a href="#">
                                    <AccountCircleIcon fontSize='large'></AccountCircleIcon>
                                </a>
                            </div>

                            
                        </div>
                    </div>
            </div>

            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-6 banner__left">
                            <span className='sec_sub-title'>Khám phá ngay</span>
                            <h2 className='sec_title'>Hành trình thú vị đang chờ đợi</h2>
                            <p className='sec_text'>
                            Chào mừng bạn đến với trang chủ của chúng tôi, nơi bạn có thể khám phá và trải nghiệm những chuyến du lịch tuyệt vời. Chúng tôi tự hào là một đơn vị hàng đầu trong ngành du lịch, mang đến cho bạn những trải nghiệm đáng nhớ và không thể quên.
                            </p>
                            <div className='btn_wrapper'>
                                <a href="http://">
                                    <MaterialButton variant="contained" disableElevation className='btn_style1'>
                                        Xem thêm
                                    </MaterialButton>
                                </a>
                           
                            </div>

                        </div>
                        <div className="col-6 banner__right">
                            <form action="" className='form_search_trip'>
                                <div className='select__field'>
                                    <Input
                                        className='input__select'
                                        type={'text'}
                                        placeholder="Điểm đến"
                                        startDecorator={<LocationOnIcon></LocationOnIcon>}
                                        endDecorator={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}

                                    />
                                </div>
                               <div className="select__field">
                                    <Input
                                            className='input__select'
                                            type={'text'}
                                            placeholder="Hoạt động"
                                            startDecorator={<RowingIcon></RowingIcon>}
                                            endDecorator={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}
   
                                        
                                        />
                               </div>
                               <div className="select__field">
                                    <Input
                                            className='input__select'
                                            type={'text'}
                                            placeholder='0 ngày - 8 ngày'
                                            startDecorator={<AccessTimeFilledIcon></AccessTimeFilledIcon>}
                                            endDecorator={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}
                                        />                             
                              </div>
                               <div className="select__field">
                                    <Input
                                            className='input__select'
                                            type={'text'}
                                            placeholder='1,500,000đ - 5,000,000đ'
                                            startDecorator={<PaidIcon   ></PaidIcon>}
                                            endDecorator={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}

                                        />    
                              </div>

                              <div className='btn_wrapper'>
                                <a href="http://">
                                    <MaterialButton variant="contained" disableElevation className='btn_style1'>
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

export default memo(HomePage)
