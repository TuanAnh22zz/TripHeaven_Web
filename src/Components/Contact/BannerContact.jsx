import { memo } from 'react';
import LayoutContainer from '../All/LayoutContainer';
import BannerBackground from '../../assets/images/All/breadcumb-bg.jpg'
function ContactBanner () {
    return (
        <div style={{backgroundImage: `url(${BannerBackground})`}} className='bg-no-repeat bg-cover py-[180px]'>
            <LayoutContainer>
                <div className='flex flex-wrap'>
                    <div>
                        <h1 className='text-[48px] font-[700] text-white'>Liên hệ</h1>
                        <div>
                            <span className='text-white'>
                                <a href="">Trang chủ</a>
                                <span className='px-[10px]' >/</span>
                                <a href="">Liên hệ</a>
                            </span>
                        </div>
                    </div>
                
                </div>
            </LayoutContainer>
      </div>
    );
}
export default memo(ContactBanner);