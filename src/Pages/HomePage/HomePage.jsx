import { memo } from 'react';
import HeaderTop from '../../Components/Homapage/HeaderTop'; 
import Banner from '../../Components/Homapage/Banner'
import Introduction from '../../Components/Homapage/Introduction';
import Offer from '../../Components/Homapage/Offer';
import Feature from '../../Components/Homapage/Feature';
import  MaterialButton from '@mui/material/Button'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Input from '@mui/joy/Input';
import RowingIcon from '@mui/icons-material/Rowing';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import featureLogoImage1 from '../../assets/images/features-1-1.png';





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
          
           {/* Phần Offer */}
            <Offer/>

            {/* {Phần Feature} */}
            <Feature/>
       
            <div className='part discover'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 discover__left'>
                            <span className='sec_sub-title'>Go & Discover</span>
                            <h2 className='sec_title'>Ưu đãi đặc biệt</h2>
                            <p className='sec_text'>Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convgallis at tellus. </p>
                            <div className='btn_wrapper'>
                                <a href="http://">
                                    <MaterialButton variant="contained" disableElevation className='muiButton btn_style1'>
                                        Nhận ưu đãi ngay
                                    </MaterialButton>
                                </a>
                        
                            </div>
                        </div>
                   
                        <div className='col-6 discover__right'>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        
      
    );
}

export default memo(HomePage)
