import { memo } from 'react';
import HeaderTop from '../Components/All/HeaderTop';
import Header from '../Components/All/Header';
import InfoContact from '../Components/Contact/InfoContact';
import FormContact from '../Components/Contact/FormContact';
import Footer from '../Components/All/Footer'
import Banner from '../Components/All/Banner';

function Contact() {
    return (
        <div className='all'>
          
            <Banner
                text1='Liên hệ'
                text2='Trang chủ'
            />
            <InfoContact/>
            <FormContact/>
        
        
           
        </div>
    );

}
export default memo(Contact);
