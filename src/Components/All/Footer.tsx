import { memo } from 'react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage1 from '../../assets/images/2-e1709277174419.png'
import ImageBlog1 from '../../assets/images/6-2-342x252.jpg';
import LayoutContainer from './LayoutContainer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import IconHeadSet from '../../assets/images/icons8-headset-80.png'
import IconSend from '../../assets/images/icons8-send-80.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faEnvelope , faPhone, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faGithub, faPinterest} from "@fortawesome/free-brands-svg-icons"





function Footer () {
    return (
        <div className='bg-black'>
        <LayoutContainer>
            <div className='flex flex-wrap text-white'>

                <div className='grid grid-cols-3 gap-x-[80px]'>
                    
                        <div className='flex items-center gap-4'>
                            <div className='w-1/4'>
                                <img src={IconHeadSet} alt="" className='w-[80px] h-[80px] max-w-full' />
                            </div>
                            <div className='w-3/4'>
                                <h3 className='text-[24px] font-[700]'>Gọi 24/7</h3>
                                <a href="http://" className='text-[16px]'>(+84) 0313728397</a>
                            </div>
                        </div>
                        
                        <div className='flex items-center gap-4'>
                            <div className='w-1/4'>
                                  
                                        <img src={IconSend} alt="" className='w-[80px] h-[80px] max-w-full' />
                            
                            </div>
                             <div className='w-3/4'>
                               
                                   <h3 className='text-[24px] font-[700]'>Subscribe</h3>
                                   <a href="http://" className='text-[16px]'>Đăng ký để cập nhật hàng ngày</a>
                               
                            </div>
                        </div>

                        <div className='flex items-center gap-4 justify-end'>
                            <div>
                                <div className="relative">
                                    <input type="search" id="default-search" className="w-[400px] block p-5 ps-5 text-sm border-main solid border-[2px] rounded-lg bg-black" placeholder="Nhập Email..." required />
                                    <button type="submit" className="text-white bg-main absolute end-2.5 bottom-3.5 font-medium rounded-lg text-sm px-4 py-2">Gửi</button>

                                </div>                                        
                            </div>
                        </div>
               
                </div>
              
            </div>

            <hr  className='mt-[80px] border-main'/> 
            <div className='flex flex-wrap mt-[50px]'>
                <div className='grid grid-cols-4'>
                    <div className='text-white space-y-6'>
                        <Link to="/">
                            <img src={LogoImage1} alt="" />
                        </Link>
                        <p>Trip Heaven mang đến hành trình khám phá trọn vẹn với dịch vụ chuyên nghiệp, điểm đến độc đáo và trải nghiệm đáng nhớ cho mọi du khách.</p>
                        <div className='grid grid-cols-4 gap-x-[20px]'>
                                <div className='w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center'>
                                    <a href="https://www.facebook.com/anh.tuan.nguyen.372199/" className='flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className='w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center'>
                                     <a href="https://www.instagram.com/_ntanh22/" className='flex items-center justify-center'>
                                         <FontAwesomeIcon icon={faInstagram} />                    
                                      </a>
                                </div>
                                <div className='w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center'>
                                    <a href="https://github.com/TuanAnh22zz" className='flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faGithub} />  
                                    </a>
                                </div>
                                <div className='w-[45px] h-[45px] rounded-[50%] solid border-white border-[2px] flex items-center justify-center'>
                                     <a href="https://www.pinterest.com/nguyentuananh22042004/" className='flex items-center justify-center'>
                                     <FontAwesomeIcon icon={faPinterest} />  
                                    </a>
                                </div>
                            
                        </div>
                    </div>
                    <div className='text-white space-y-6 pl-[70px]'>
                        <div className='space-y-2'>
                            <h4 className='font-[600] text-[20px]'>Danh mục</h4>
                            <hr className='w-[30%] border-main border-[1px]'/>
                        </div>
                        <div>
                                <ul className='space-y-4'> 
                                    <li className='flex items-center gap-x-[5px] ml-[-10px]'>
                                         <FontAwesomeIcon icon={faAngleDown} />
                                        <Link  to="/" className='w-3/4 flex justify-start'>Trang chủ</Link>
                                    </li>
                                    <li className='flex items-center gap-x-[5px] ml-[-10px]'>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                        <Link to="/introduction" className='w-3/4 flex justify-start'>Giới thiệu</Link>
                                    </li>
                                    <li className='flex items-center gap-x-[5px] ml-[-10px]'>
                                         <FontAwesomeIcon icon={faAngleDown} />
                                        <Link to='/destination' className='w-3/4 flex justify-start'>Tour</Link>
                                    </li>
                                    <li className='flex items-center gap-x-[5px] ml-[-10px]'>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                        <Link to="/blog" className='w-3/4 flex justify-start'>Tin tức</Link>
                                    </li>
                                    <li className='flex items-center gap-x-[5px] ml-[-10px]'>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                        <Link to="/contact" className='w-3/4 flex justify-start'>Liên hệ</Link>
                                    </li>
                                  
                                 
                                </ul>
                        </div>
                    </div>
                    <div className='text-white space-y-6'>
                        <div className='space-y-2'>
                            <h4 className='font-[600] text-[20px]'>Liên hệ</h4>
                            <hr className='w-[20%] border-main border-[1px]'/>
                        </div>
                        <div>
                            <ul className='space-y-5'>
                                    <li  className='flex items-center gap-x-[10px]'>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <a href="">1073/23 Cách mạng tháng 8, P7, Q.Tân Bình, TP.HCM</a>
                                    </li>
                                    <li  className='flex items-center gap-x-[10px]'>
                                        <FontAwesomeIcon icon={faEnvelope} />                                       
                                        <a href="mailto:nguyentuananh22042004@gmail.com">nguyentuananh22042004@gmail.com</a>
                                    </li>
                                    <li  className='flex items-center gap-x-[10px]'>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <a href="tel:+84313728397">(+84) 784223858</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white space-y-6 pl-[30px]'>
                         <div className='space-y-2'>
                            <h4 className='font-[600] text-[20px]'>Hình ảnh</h4>
                            <hr className='w-[20%] border-main border-[1px]'/>
                        </div>
                        <div className='space-y-1'>
                            <div className='flex flex-wrap'>
                                    <div className='grid grid-cols-3 gap-x-[5px]'>
                                        <img src={ImageBlog1} alt="" className='rounded-[5px]' />
                                        <img src={ImageBlog1} alt="" className='rounded-[5px]'/>
                                        <img src={ImageBlog1} alt="" className='rounded-[5px]'/>
                                    </div>
                            </div>
                            <div className='flex flex-wrap pt-[5px]'>
                                    <div className='grid grid-cols-3 gap-x-[5px]'>
                                        <img src={ImageBlog1} alt="" className='rounded-[5px]' />
                                        <img src={ImageBlog1} alt="" className='rounded-[5px]'/>
                                        <img src={ImageBlog1} alt="" className='rounded-[5px]'/>
                                    </div>
                            </div>
                        
                        </div>
                       
                    </div>
                   
                </div>
            </div>
            <hr  className='mt-[80px] border-main'/> 

            <div className='flex flex-wrap mt-[20px]'>
                <div className='grid grid-cols-2 gap-x-[340px]'>
                    <div className='flex'>
                        <div className='flex items-center justify-center'>
                            <div> 
                                  <i className='bx bx-copyright text-white text-[15px]'></i>  
                            </div>
                            <div>
                                
                                <span className='text-white text-[16px] pl-[5px]'>Thiết kế và lập trình bởi:  
                                <a className='font-[700] text-main'href=""> MonoMedia </a> 
                                /
                                <a className='font-[700] text-main' href=""> Anh Tuan Nguyen</a>
                                </span>
                            </div>
                           
                          
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='text-white flex items-center justify-center'>
                            <div>
                                <span>Chính sách bảo mật</span>
                            </div>
                            <div>
                                <span className='text-main px-[20px] text-[25px]'> | </span>
                            </div>
                            <div>
                                <span>Điều khoản & điều kiện</span>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

          

        </LayoutContainer>
    </div>
    );
}

export default memo(Footer);