import { memo } from 'react';
import HeaderTop from '../Components/Homapage/HeaderTop'; 
import Header from '../Components/All/Header';
import InfoContact from '../Components/Contact/InfoContact';
import FormContact from '../Components/Contact/FormContact';
import Footer from '../Components/All/Footer'
import BannerContact from '../Components/Contact/BannerContact';

function Contact() {
    return (
        <div className='all'>
            <HeaderTop/>
            <Header/>
            <BannerContact/>
            <InfoContact/>
            <FormContact/>
            <Footer/>
        
           
        </div>
    );

}
export default memo(Contact);
