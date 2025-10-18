import { memo } from "react";
import HeaderTop from "../Components/All/HeaderTop";
import Header from "../Components/All/Header";
import Banner from "../Components/All/Banner";
import Footer from "../Components/All/Footer";
import BestTour from "../Components/Homapage/BestTour";
import Overview from "../Components/DetailTrip/Overview";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function DetailTrip () { 
    return (
        <div className="all">
          
            <Banner
                text1='Chi tiết chuyến đi'
                text2='Chuyến đi'
                text3='Trang chủ'
            />
            <Overview/>
            <BestTour/>
          

 
        </div>
    );
     
}

export default memo(DetailTrip);