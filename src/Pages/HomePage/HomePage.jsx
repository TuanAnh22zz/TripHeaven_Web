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





import './style.scss'
function HomePage() {
    return (
       
       
   
        <div className='all'>
            {/* Phần HeaderTop */}
            <HeaderTop />

            {/* Phần Banner */}
            <Banner/>
          

            {/* Phần Introduction */}
            <Introduction/>
          

            <div className="part offer">
                <div className="container">
                    <div className="row">
                        <div className='info__offer'>
                            <span className='sec_sub-title'>Ưu đãi giới hạn</span>
                            <h2 className='sec_title'>Nhận giảm giá lên đến 50%</h2>
                            <p className='sec_text'>Thời gian có hạn. Hãy khám phá ngay</p>
                        <div className='count__down'>

                        </div>
                        <div className='btn_wrapper'>
                                    <a href="http://">
                                        <MaterialButton variant="contained" disableElevation className='muiButton btn_style1'>
                                            Xem thêm
                                        </MaterialButton>
                                    </a>
                            
                      </div>
                      
                    </div>

                    <div className="info__video">  
                        </div>
                </div>
            </div>
             </div>
        </div>
        
        
      
    );
}

export default memo(HomePage)
