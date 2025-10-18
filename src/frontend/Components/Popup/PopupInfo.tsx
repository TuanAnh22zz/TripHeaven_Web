import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark, faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

//@ts-ignore
import LogoImage from '../../assets/images/1-e1709277145445.png'
//@ts-ignore
import ImageBlog1 from '../../assets/images/6-2-342x252.jpg';
type ShowInfoPopup = {
    toggleOpen: (value:("open" | "close"))=>void
}
const PopupInfo: FC<ShowInfoPopup> = ({toggleOpen}) => {
    return(
        <div className="flex justify-end items-center w-full h-svh bg-[#000000f2]  fixed inset-0 z-[9999] animate-slideInRight">
            <div className="bg-white px-[30px] py-[30px] w-[400px] h-svh">
                <div className="flex flex-col gap-y-[30px]">
                        <div className="flex justify-end">
                            <div className="w-[60px] h-[60px]  bg-main rounded-[50%] flex justify-center items-center  hover:bg-secondary duration-500" onClick={() => toggleOpen("close")}>
                                <button className="text-white" onClick={() => {toggleOpen("close")}} >
                                    <FontAwesomeIcon icon={faXmark} size="xl"/>
                                </button>
                            </div>
                        </div>
                   

                        <div className='img__logo'>
                            <Link to="/">
                                <img src={LogoImage} alt="logo_image" width={"450px"} height={"64px"} />
                            </Link>
                        </div>

                        <div>
                            <span className="text-[16px] text-[#505050]">TripHeaven is a trusted travel company offering unique journeys and memorable experiences. From relaxing getaways to cultural adventures, we design every trip with care to inspire and delight our travelers.</span>
                        </div>

                        <div>
                            <ul className="text-main flex gap-x-[20px]">
                                <li>
                                    <div className='w-[45px] h-[45px] rounded-[50%] solid border-main border-[2px] flex items-center justify-center'>
                                        <a href="https://www.facebook.com/anh.tuan.nguyen.372199/" className='flex items-center justify-center'>
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-[45px] h-[45px] rounded-[50%] solid border-main border-[2px] flex items-center justify-center'>
                                        <a href="https://www.instagram.com/_ntanh22/" className='flex items-center justify-center'>
                                            <FontAwesomeIcon icon={faInstagram} />                    
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-[45px] h-[45px] rounded-[50%] solid border-main border-[2px] flex items-center justify-center'>
                                        <a href="https://github.com/TuanAnh22zz" className='flex items-center justify-center'>
                                            <FontAwesomeIcon icon={faGithub} />  
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[24px] font-[700]">Recent Posts</h2>
                            <hr className="solid border-main border-[2px] w-[20%]" />
                        </div>

                        <div className="flex flex-col gap-y-[30px] mb-[40px]">
                            <div className="flex">
                                    <div className="w-2/5">
                                        <img src={ImageBlog1} alt="" className='rounded-[5px] h-[80px] w-[90px]'/>
                                    </div>
                                    <div className="w-3/5 m-auto">
                                        <div>
                                            <FontAwesomeIcon icon={faCalendarDays} style={{color: '#4CAF50'}} size="lg" className='pr-[5px]'/>
                                           <time dateTime='2022-04-10'>10 Tháng Tư, 2022</time>
                                        </div>
                                        <div>
                                            <Link to="/blog" className="font-[600] text-[20px]">10 Sun Hats For Beach Days, Long</Link>
                                        </div>
                                     
                                    </div>
                            </div>

                            <div className="flex ">
                                    <div className="w-2/5 ">
                                        <img src={ImageBlog1} alt="" className='rounded-[5px] h-[80px] w-[90px]'/>
                                    </div>
                                    <div className="w-3/5 m-auto">
                                        <div>
                                            <FontAwesomeIcon icon={faCalendarDays} style={{color: '#4CAF50'}} size="lg" className='pr-[5px]'/>
                                           <time dateTime='2022-04-10'>10 Tháng Tư, 2022</time>
                                        </div>
                                        <div>
                                            <Link to="/blog" className="font-[600] text-[20px]">10 Sun Hats For Beach Days, Long</Link>
                                        </div>
                                     
                                    </div>
                            </div>
                            
                        </div>
                       
                </div>           
            </div>
          
           
        </div>
    );
}
export default memo(PopupInfo)