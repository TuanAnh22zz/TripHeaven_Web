import React from "react";
import { memo } from 'react';
import BannerBackground from '../../assets/images/All/breadcumb-bg.jpg'
import LayoutContainer from "./LayoutContainer";
import { Link } from "react-router-dom";

function Banner ({text1= '', text2='', text3='', link1="", link2="", link3=""}) {
    return (
        <div style={{backgroundImage: `url(${BannerBackground})`}} className='bg-no-repeat bg-cover py-[130px]'>
            <LayoutContainer>
                <div className='flex flex-wrap'>
                    <div>
                        <h1 className='text-[48px] font-[700] text-white'>{text1}</h1>
                        <div>
                            <span className='text-white'>
                                <Link to={link1}>{text3}</Link>
                                <span className='px-[10px]' >/</span>
                                <Link to={link2}>{text2}</Link>
                                <span className='px-[10px]' >/</span>
                                <span>{text1}</span>
                            </span>
                        </div>
                    </div>
                
                </div>
            </LayoutContainer>
        </div>
    );
}

export default memo(Banner)