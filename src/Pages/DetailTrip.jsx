import { memo } from "react";
import HeaderTop from "../Components/All/HeaderTop";
import Header from "../Components/All/Header";
import Banner from "../Components/All/Banner";
import Footer from "../Components/All/Footer";
import BestTour from "../Components/Homapage/BestTour";
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

            <div>
                <LayoutContainer className="!px-[10px]">
                    <div className="flex flex-wrap">
                        <div className="w-3/5 space-y-[80px]">
                            {/* Phần title */}
                            <div className="flex flex-wrap">
                                <div className="w-3/4">
                                    <h1 className="text-[32px]">Everest Base Camp Trek: See the Majestic Mt. Everest</h1>
                                </div>
                                <div className="w-1/4 flex text-center justify-end drop-shadow-lg">
                                    <div className="">
                                        <div className="grid grid-rows-2">
                                            <div className="bg-main px-[30px] rounded-t-md">
                                                <span className="text-[32px] text-white">4</span>
                                            </div>
                                            <div className="bg-white flex justify-center items-center rounded-b-md">
                                                <span className="">Ngày</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            {/* Phần slider */}
                            <div className="flex flex-wrap">
                                <div className=" w-full
                                    
                                    [&_.swiper-button-prev]:text-white
                                    [&_.swiper-button-next]:text-white
                                    [&_.swiper-pagination-bullet-active]:bg-white
                                    [&_.swiper-button-prev::after]:text-2xl
                                    [&_.swiper-button-next::after]:text-2xl
                
                                    ">
                                        <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    navigation={true}
                                    pagination={{clickable: true}}
                                    modules={[Pagination, Navigation]}
                                    className=""
                                    >
                                        <SwiperSlide>
                                            <div>
                                                <img src={DemoImage} alt="" className='w-full h-[561px] rounded-[8px]' />
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className=''>
                                                <img src={DemoImage}  alt="" className='w-full h-[561px] rounded-[8px] ' />
                                            </div>
                                    
                                        </SwiperSlide> 
                                    
                                        
                                      </Swiper>
                                    </div>
                            </div>

                            <div className="flex flex-wrap px-[15px] space-y-10"> 
                                {/* Phần Tổng quan */}
                                <div className="space-y-8 px-[40px]">
                                    <h2 className="text-[28px]">Tổng quan</h2>
                                    <p className="text-[#505050]">
                                        Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements.
                                    </p>
                                    <p className="text-[#505050]">
                                         The origin of the word “travel” is most likely lost to history. The term “travel” may originate from the Old French word travail, which means ‘work’. According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century.
                                    </p>
                                    <h3 className="text-[30px]">
                                        Highlights
                                    </h3>
                                    <ul className="space-y-4 text-[#505050]">
                                        <li>
                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>
                                            Trek to the world-famous Everest Base Camp
                                        </li>
                                        <li>
                                             <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}}  className='pr-[10px]' />
                                             Enjoy the amazing view of the Himalayas from Kala Patthar
                                        </li>
                                        <li>
                                             <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}}  className='pr-[10px]' />
                                             Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}}  className='pr-[10px]' />
                                            Visit Tengboche the biggest and oldest monastery n the region.
                                        </li>
                                    </ul>
                                </div>
                                 {/* Chi tiết chuyến đi */}
                                 <div className="px-[40px]">
                                    <h2 className="text-[28px] mb-[40px]">Hành trình</h2>
                                    <ol>                  
                                        <li className=" relative pb-10 ms-4">
                                            <div className="absolute w-0.5 h-full bg-gray-300"></div>
                                            <div className="absolute w-[30px] h-[30px] bg-main rounded-full -start-3.5 border border-white flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faLocationDot} style={{color: 'white', fontSize: '13px'}} />
                                            </div>
                                            
                                            <div className="pl-[35px] space-y-3"> 
                                                <div className="flex flex-wrap text-[18px]">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 1: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                      
                                                              
                                                                    <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                        Kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity.
                                                                    </span>
                                                               
                                                               
                                                            
                                                         
                                                           
                                                        </div>
                                                       
                                                </div>
                                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Arrive at Tribhuwan International Airport, Kathmandu, you are welcomed by the team and then you will be transferred to your hotel. This trail goes through Ghorepani Poon Hill. Normally, the trek starts like Pokhara to Nayapul and ends like Phedi to Pokhara. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.</p>
                                            </div>
                                        </li>

                                        <li className="relative pb-10 ms-4">
                                            <div className="absolute w-0.5 h-full bg-gray-300 "></div>
                                            <div className="absolute w-4 h-4 bg-main rounded-full mt-1.5 -start-1.5 border"></div>
                                            <div className="pl-[35px] space-y-3">
                                                <div className="flex flex-wrap text-[18px] ">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 2: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                Drive to Nayapul and trek to Ulleri							
                                                            </span>
                                                        </div>
                                                </div>
                                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.</p>
                                            </div>
                                          
                                        </li>

                                        <li className="relative pb-10 ms-4">
                                            <div className="absolute w-0.5 h-full bg-gray-300 "></div>
                                            <div className="absolute w-4 h-4 bg-main rounded-full mt-1.5 -start-1.5 border"></div>
                                            <div className="pl-[35px] space-y-3">
                                                <div className="flex flex-wrap text-[18px] ">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 3: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                Trek to Ghorepani		
                                                            </span>
                                                        </div>
                                                </div>
                                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">The Palace of Fifty five Windows: This magnificent palace was built during the reign of King Yakshya Malla in A.D. 1427 and was subsequently remodeled by King Bhupatindra Malla in the seventeenth century. Among the brick walls with their gracious setting and sculptural design, is a balcony with Fifty five Windows, considered to be a unique masterpiece of woodcarving.</p>
                                            </div>
                                          
                                        </li>

                                        <li className="relative pb-10 ms-4">
                                            <div className="absolute w-0.5 h-full bg-gray-300 "></div>
                                            <div className="absolute w-4 h-4 bg-main rounded-full mt-1.5 -start-1.5 border"></div>
                                            <div className="pl-[35px] space-y-3">
                                                <div className="flex flex-wrap text-[18px] ">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 4: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                Early trek to Poon Hill, Back to Ghorepani and Trek to Tadapani							
                                                            </span>
                                                        </div>
                                                </div>
                                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                            </div>
                                          
                                        </li>

                                        <li className=" relative pb-10 ms-4">
                                            <div className="absolute w-0.5 h-full bg-gray-300 "></div>
                                            <div className="absolute w-4 h-4 bg-main rounded-full mt-1.5 -start-1.5 border"></div>
                                            <div className="pl-[35px] space-y-3">
                                                <div className="flex flex-wrap text-[18px] ">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 5: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                Tadapani to Chomrong						
                                                            </span>
                                                        </div>
                                                </div>
                                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of  Dan decided to leave for the far World of Grammar.</p>
                                            </div>
                                          
                                        </li>

                                        <li className="relative pb-10 ms-4">
                                            <div className="absolute w-0.5 h-full bg-gray-300 "></div>
                                            <div className="absolute w-4 h-4 bg-main rounded-full mt-1.5 -start-1.5 border"></div>
                                            <div className="pl-[35px] space-y-3">
                                                <div className="flex flex-wrap text-[18px] ">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 6: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                Chomrong to Dobhan (Dovan)					
                                                            </span>
                                                        </div>
                                                </div>
                                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">The Big Oxmox advised her not to do so because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                                            </div>
                                          
                                        </li>

                                        <li className=" relative pb-10 ms-4">
                                          
                                            <div className="absolute w-[30px] h-[30px] bg-main rounded-full -start-3.5 border border-white flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faMap} style={{color: 'white', fontSize: '13px'}} />
                                            </div>

                                            <div className="pl-[35px] space-y-3"> 
                                                <div className="flex flex-wrap text-[18px]">
                                                        <div className="w-fit pr-[10px]">
                                                            <span> Ngày 7: </span>                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span className="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                Dovan to Deurali

                                                            </span>
                                                        </div>
                                                </div>
                                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p>
                                            </div>
                                        </li>


                                        
                                    </ol>
                                </div>
                                {/* Phần Chi phí  */}
                                <div className="space-y-8 px-[40px]">
                                    <div>
                                        <h2 className="text-[28px]">Chi phí</h2>
                                    </div>
                                   
                                   <div>
                                        <h2 className="text-[20px]">Chi phí bao gồm</h2>
                                        <ul className="space-y-4 text-[#505050] mt-[40px]">
                                            <li>
                                            <div className="flex flex-wrap">
                                                    <div className="w-fit">
                                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                    </div>
                                                    <div className="w-3/4">
                                                        <span>
                                                            Pick-up or Drop-off service from and to Airport(in our own vehicle)
                                                        </span>
                                                    </div>
                                                </div>
                                            
                                            </li>
                                            <li>
                                            <div className="flex flex-wrap">
                                                    <div className="w-fit">
                                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                    </div>
                                                    <div className="w-3/4">
                                                        <span>
                                                            Transportation to and from!!                                                    
                                                        </span>
                                                    </div>
                                                </div>                                           
                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                    <div className="w-fit">
                                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                    </div>
                                                    <div className="w-3/4">
                                                        <span>
                                                            Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment.
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                    <div className="w-fit">
                                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                    </div>
                                                    <div className="w-3/4">
                                                        <span>
                                                            Transportation, food, accommodation and insurance of Guide during the trip
                                                        </span>
                                                    </div>
                                                </div>
                                            
                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                        <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                Down jacket, all-season sleeping bag, duffel bag and trekking map(in case if you don’t have your own. Down jacket, sleeping bag and duffel bag must be returned after completion of the trip)
                                                            </span>
                                                        </div>
                                                </div>
                                            </li>
                                            <li>
                                            <div className="flex flex-wrap">
                                                <div className="w-fit">
                                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                </div>
                                                <div className="w-3/4">
                                                    <span>
                                                        First Aid Medical Kit(Your guide will carry the Medical Kit but we also advise to bring yourself for your own use, as far as possible)
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                    <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: '#4CAF50'}} className='pr-[10px]'/>                                                
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                All the required permits and paperwork
                                                            </span>
                                                    </div>
                                                </div>
                                                
                                            </li>
                                        </ul>
                                   </div>

                                   <div>
                                        <h2 className="text-[20px]">Chi phí không bao gồm</h2>
                                        <ul className="space-y-4 text-[#505050]  mt-[40px]">
                                            <li>
                                                <div className="flex flex-wrap">
                                                        <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                International Airfare
                                                            </span>
                                                        </div>
                                                </div> 
                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                    <div className="w-fit">
                                                        <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                    </div>
                                                    <div className="w-3/4">
                                                        <span>
                                                            Visa Charges
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                        <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                Hotel Expenses(In Kathmandu, some packages do include hotel expenses)
                                                            </span>
                                                        </div>
                                                </div>
                                                
                                            

                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                            <div className="w-fit">
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                            </div>
                                                            <div className="w-3/4">
                                                                <span>
                                                                    Your travel and medical insurance
                                                                </span>
                                                            </div>
                                                </div>
                                                
                                            </li>
                                            <li>
                                            <div className="flex flex-wrap">
                                                        <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                Personal Expenses such as shopping, bar bills, hot shower, telephone, laundry, titbits etc
                                                            </span>
                                                        </div>
                                                </div>
                                            

                                            </li>
                                            <li>
                                            <div className="flex flex-wrap">
                                                        <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                Food and accommodations in Kathmandu
                                                            </span>
                                                        </div>
                                                </div>

                                            </li>
                                            <li>
                                            <div className="flex flex-wrap">
                                                        <div className="w-fit">
                                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                        </div>
                                                        <div className="w-3/4">
                                                            <span>
                                                                Services not mentioned or not promised by the agent/agency expenses)
                                                            </span>
                                                        </div>
                                                </div>
                                            

                                            </li>
                                            <li>
                                                <div className="flex flex-wrap">
                                                            <div className="w-fit">
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{color: 'red'}} className='pr-[10px]' />                                             
                                                            </div>
                                                            <div className="w-3/4">
                                                                <span>
                                                                    Emergency expenses such as expenses on chartered helicopter.
                                                                </span>
                                                            </div>
                                                </div>
                                            

                                            </li>
                                        
                                        </ul>
                                   </div>

                                  
                                 
                                </div>
                                {/* Phần bản đồ */}
                                <div className="space-y-4 px-[40px]">
                                    <h2 className="text-[28px]">Bản đồ tham quan</h2>
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.954410425894!2d106.67525717504132!3d10.73799718940843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1756102408935!5m2!1svi!2s" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                {/* Phần form */}
                                <div className="space-y-5 w-full px-[40px]">
                                    <div className="flex flex-wrap">
                                        <h2>
                                            Bạn có thể gửi yêu cầu của mình qua mẫu dưới đây
                                        </h2>
                                    </div>
                                    
                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Tên của bạn: <span className="text-red-500">*</span></label>
                                            <input type="text" id="default-input" placeholder="Nhập tên *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                        </div> 
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Email: <span className="text-red-500">*</span></label>
                                            <input type="text" id="default-input" placeholder="Nhập Email *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Chủ đề đã yêu cầu: <span className="text-red-500">*</span></label>
                                            <input type="text" id="default-input" placeholder="Nhập chủ đề đã yêu cầu: *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="pr-[30px]" >
                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Chọn quốc gia<span className="text-red-500">*</span></label>
                                                <select id="default"  className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]">
                                                    <option value="Country">Chọn quốc gia: *</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                                 
                                            </div>
                                          
                                        </div>
                                        <div className="w-1/2 pl-[30px] flex justify-end items-center">
                                            <div className="w-full">
                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Số liên lạc: <span className="text-red-500">*</span></label>
                                                <input type="text" id="default-input" placeholder="Số liên lạc: *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                            </div>
                                         
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-1/2">
                                            <div className="pr-[30px]" >
                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Số người lớn: <span className="text-red-500">*</span></label>
                                                <input type="text" id="default-input" placeholder="Số người lớn: *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                            </div>
                                          
                                        </div>
                                        <div className="w-1/2 pl-[30px] flex justify-end items-center">
                                            <div className="w-full">
                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium ">Số trẻ em: <span className="text-red-500">*</span></label>
                                                <input type="text" id="default-input" placeholder="Số trẻ em: *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                            </div>
                                         
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap">
                                        <div className="w-full">
                                            <label  htmlFor="default-input" className="block mb-2 text-sm font-medium ">Nhập nội dung: <span className="text-red-500">*</span></label>
                                            <textarea name="" id="" cols="30" rows="10" placeholder="Nhập nội dung: *" className="bg-gray-50 border border-[#505050] text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"></textarea>
                                        </div>
                                    </div>

                                  

                                    <div className="flex flex-wrap pt-[20px]">
                                        <div className="w-full">
                                            <button className="bg-main w-full py-[15px] text-white font-[700] rounded-md">
                                                Gửi Email
                                            </button>
                                        </div>
                                     
                                    </div>
                                  
                                </div>
                               


                            </div>
                        </div>

                        <div className="w-2/5 ">
                            <div className="flex flex-wrap items-center justify-end drop-shadow-2xl ">
                                <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">
                                    <div className="bg-white rounded-[10px] px-[20px] space-y-6">
                                        <div className="pt-[40px]">
                                            <span className="text-[13px]">Từ</span>
                                            <div>
                                                <span className="text-[28px]">5.000.000đ</span>
                                                <span className="text-[14px] text-[#505050]"> / Người</span>
                                            </div>                                      
                                        </div>
                                        <div>
                                            <button className="bg-main text-white py-[20px] w-full font-[700] text-[18px]">
                                                Đặt lịch ngay
                                            </button>
                                        </div>
                                        <div className="px-[10px] py-[24px] text-[14px]">
                                            <span>Cần hỗ trợ đặt chỗ? </span>
                                            <a href="" className="text-main">Gửi tin nhắn cho chúng tôi</a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center justify-start  pl-[125px] py-[50px]">
                                <ul className="space-y-8">
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faHotel} style={{color: '#4CAF50'}} />
                                            </div>
                                            <div className="w-fit pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Chỗ ở</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">4 Stars Hotel</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faBus} style={{color: '#4CAF50'}} />
                                            </div>
                                            <div className="w-fit pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Di chuyển</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">Bus, Airline</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faMountain} style={{color: '#4CAF50'}} />
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Độ cao tối đa</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">5,416 metres</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faCloudSunRain}  style={{color: '#4CAF50'}}/>
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Mùa tốt nhất</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">Feb, Mar, Apr & May</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faHeart} style={{color: '#4CAF50'}}/>
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Chuyến đi sẵn có</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">Available</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faUtensils}  style={{color: '#4CAF50'}}/>
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Bữa ăn</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">All meals during the trip</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faLanguage} style={{color: '#4CAF50'}}/>
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Ngôn ngữ</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">English, Spanish, French, Chinese</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faClock} style={{color: '#4CAF50'}}  />
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Giờ đi bộ</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">5-8 Hours</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faWifi} style={{color: '#4CAF50'}} />
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Wifi</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">Availablel</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faChild} style={{color: '#4CAF50'}}/>
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Tuổi nhỏ nhất</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">12</span>
                                        </div>
                                    </li>
                                    <li className="space-y-2">
                                        <div className="flex flex-wrap">
                                            <div className="w-fit">
                                                <FontAwesomeIcon icon={faPerson} style={{color: '#4CAF50'}}/>
                                            </div>
                                            <div className="w-3/4 pl-[8px]">
                                                <label htmlFor="" className="text-[13px] text-[#06162666]">Tuổi lớn nhất</label>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-[#505050]">65</span>
                                        </div>
                                    </li>
                                  

                                </ul>
                            </div>
                            
                          
                        </div>
                    </div>
                </LayoutContainer>
            </div>
            <BestTour/>



            <Footer/>

 
        </div>
    );
     
}

export default memo(DetailTrip);