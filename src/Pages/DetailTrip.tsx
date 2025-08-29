import { memo } from "react";
import HeaderTop from "../Components/All/HeaderTop";
import Header from "../Components/All/Header";
import Banner from "../Components/All/Banner";
import Footer from "../Components/All/Footer";
import BestTour from "../Components/Homapage/BestTour";
import Overview from "../Components/DetailTrip/Overview";
import LayoutContainer from "../Components/All/LayoutContainer";
import DemoImage from '../assets/images/ListDestinations/4.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleXmark, faLocationDot, faMap, 
faCirclePlus,faHotel, faBus, faMountain, faCloudSunRain, faUtensils, faLanguage, faClock, faWifi, faChild, faPerson, faHeart} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


function DetailTrip () { 
    return (
        <div className="all">
            <HeaderTop/>
            <Header/>
            <Banner
                text1='Chi tiết chuyến đi'
                text2='Chuyến đi'
                text3='Trang chủ'
            />
            <Overview/>
            <BestTour/>
            <Footer/>

 
        </div>
    );
     
}

export default memo(DetailTrip);