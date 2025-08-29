import { memo } from 'react';
import HeaderTop from '../Components/All/HeaderTop';
import Header from '../Components/All/Header';
import Banner from '../Components/All/Banner';
import Footer from '../Components/All/Footer';
import ListDestination from '../Components/Destination/ListDestination';
import BestTour from '../Components/Homapage/BestTour';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Destination () {
    return (
        <div className='all'>
            <HeaderTop/>
            <Header/>
            <Banner
                text1='Các điểm đến'
                text2='Trang chủ' 
            />
            <ListDestination/>
            <BestTour/>
            <Footer/>
            
        </div>
     
    );

}
export default memo(Destination);