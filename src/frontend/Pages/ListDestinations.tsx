import { memo } from 'react';
import HeaderTop from "../Components/All/HeaderTop";
import Header from "../Components/All/Header";
import Banner from "../Components/All/Banner";
import Trips from '../Components/ListDestination.jsx/Trips';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '../Components/All/Footer';
function ListDestinations () {
    return (
        <div className="all">
       
            <Banner
            text1='Điểm đến: Annapurna'
            text2='Trang chủ'
            />
            <Trips/>
           
        </div>
  

    );

}
export default memo(ListDestinations);