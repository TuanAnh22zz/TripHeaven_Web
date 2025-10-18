
import { memo } from "react";
import HeaderTop from "../Components/All/HeaderTop";
import Header from "../Components/All/Header";
import Banner from "../Components/All/Banner";
import Footer from "../Components/All/Footer";
import LayoutContainer from "../Components/All/LayoutContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faPenNib,  faBook} from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faInstagram, faPinterest} from "@fortawesome/free-brands-svg-icons"
import ImageBlog1 from "../assets/images/Blog/6-2.jpg"
import Button from "../Components/All/Button";


function DetailBlog () {
    return (
        <div>
       
            <Banner
                text1="Blog Details"
                text2="Blog"
                text3="Home"
            />

            <div>
                <LayoutContainer>
                    <div className="flex flex-wrap">
                        <div className="w-3/5 space-y-[30px] px-[30px] drop-shadow-xl">
                            <div>
                                <h2 className="text-[30px] font-[700]">
                                    10 Sun Hats For Beach Days, Long Hikes, And Everything In Between
                                </h2>
                            </div>

                            <div>
                                <ul className="flex gap-8">
                                        <li>
                                            <span>
                                                <FontAwesomeIcon icon={faCalendarDays} style={{color: '#4CAF50'}} size="lg" className='pr-[8px]'/>
                                                12 Tháng Mười Hai, 2023
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                    <FontAwesomeIcon icon={faPenNib} style={{color: '#4CAF50'}} size="lg" className='pr-[8px]'/>
                                                    Tuan Anh
                                            </span>
                                        </li>
                                </ul>
                            </div>
                               
                            <div className="space-y-[30px]">
                                    <p>
                                        Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.
                                    </p>
                                    <p>
                                        Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                    </p>
                                    <blockquote className="bg-gray-200 p-[20px] border-main solid border-l-[5px] space-y-[10px]">
                                        <p className="text-[24px] italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor in sit amget, consectetur elit. 
                                        </p>
                                        <cite className="flex items-center">
                                            <hr className="border-main solid border-[1px] w-[5%] mr-[15px]" />
                                            Rodja Hartmann
                                        </cite>
                                         
                                    </blockquote>

                                    <h2 className="text-[30px] font-[700]">
                                        Lorem ipsum dolor sit amet consectetur.

                                    </h2>
                                    <p>
                                         Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                    </p>
                                    <div>
                                        <div className="grid grid-cols-3 gap-x-[30px]">
                                            <div>
                                                    <img src={ImageBlog1} alt="" />
                                            </div>
                                            <div>
                                                    <img src={ImageBlog1} alt="" />
                                            </div>
                                            <div>
                                                    <img src={ImageBlog1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.
                                    </p>

                            </div>

                            <div className="space-y-[50px]">
                                <hr className="border-main solid border-[0.5px] w-[100%] mb-[30px]"/>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-x-[20px]">
                                        <span>Thẻ:</span>
                                        <ul className="flex gap-5 text-[14px]">
                                            <li>
                                                <a href="http://" className="bg-gray-100 p-[10px] rounded-[8px] ">Camera</a>
                                            </li>
                                            <li>
                                                <a href="http://" className="bg-gray-100 p-[10px] rounded-[8px] ">Camp</a>
                                            </li>
                                            <li>
                                                <a href="http://" className="bg-gray-100 p-[10px] rounded-[8px] ">Summer</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex gap-5 justify-end">
                                        <span> Chia sẻ: </span>
                                        <ul className="flex gap-5 text-[14px]">
                                            <li>
                                                <a href="http://" className="bg-gray-100 p-[15px] rounded-[50%] "><FontAwesomeIcon icon={faFacebookF} /></a>
                                            </li>
                                            <li>
                                                <a href="http://" className="bg-gray-100 p-[15px] rounded-[50%] "><FontAwesomeIcon icon={faInstagram} />   </a>
                                            </li>
                                            <li>
                                                <a href="http://" className="bg-gray-100 p-[15px] rounded-[50%] "><FontAwesomeIcon icon={faPinterest} />  </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="border-main solid border-[0.5px] w-[100%] mb-[30px]"/>
                                    <div>
                                        <div className="grid grid-cols-2">
                                            <div className="flex">
                                                <a href="http://" className="flex gap-8 items-center">
                                                    <img src={ImageBlog1} alt="" className="w-[80px] h-[80px] rounded-[10px]" />
                                                    <span>Bài viết trước</span>
                                                </a>
                                            </div>
                                            <div className="flex items-center">
                                                <a href="http://"><FontAwesomeIcon icon={faBook} size="2xl" style={{color: "#4CAF50"}} /></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                <hr className="border-main solid border-[0.5px] w-[100%] mb-[30px]"/>
                                
                            </div>

                            <div className="space-y-[30px]">
                                <h3 className="text-[30px] font-[700] mb-[15px]">
                                    Comment
                                </h3>
                                <span>Your email address will not be published. Required fields are marked *</span>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-[30px] ">
                                        <div>
                                            <input type="text" id="default-input" placeholder="Enter your email: *" className="bg-gray-50 border border-main text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                        </div>
                                        <div>
                                            <input type="text" id="default-input" placeholder="Enter your name: *" className="bg-gray-50 border border-main text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"/>
                                        </div>
                                    </div>
                                    <textarea name="" id="" cols={30} rows={10} placeholder="Write a comment *" className="bg-gray-50 border border-main text-gray-900 text-sm rounded-lg  w-full py-[15px] px-[10px]"></textarea>
                                </div>

                                <div>
                                  <button type="submit" className="text-white bg-main font-[700] text-[16px] rounded-lg  px-5 py-2.5 mt-[5px] uppercase">
                                        Post comments
                                  </button>
                                </div>
                            </div>

                            
                        </div>
                        <div className="w-2/5 px-[30px] space-y-[50px]">
                            <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">
                                    <div>
                                        <label htmlFor="search-input" className="mb-2 text-[22px] font-medium capitalize">Search</label>
                                        <hr className="border-main solid border-[2px] w-[20%] mb-[30px]" />
                                        <div className="relative w-full">
                                            <input type="search" id="search-input" className="block p-[20px] w-full z-20 text-sm text-gray-900 bg-white rounded-[10px]" required />
                                            <button type="submit" className="absolute top-0 end-0 p-[20px] text-sm font-medium h-full text-white bg-main rounded-e-[10px]">
                                                Search
                                            </button>
                                        </div>
                                    </div>

                            </div>

                            <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">

                                    <div>
                                        <h2 className="mb-2 text-[22px] font-medium capitalize">New Post</h2>
                                        <hr className="border-main solid border-[2px] w-[20%] mb-[30px]"/>
                                        <ul className="space-y-[20px]">
                                            <li>
                                                <a href="http://">10 Sun Hats For Beach Days, Long Hikes, And Everything In Between</a>
                                            </li>
                                            <li>
                                                <a href="http://">Cambodia In August: Island Hopping And Weather Tips</a>
                                            </li>
                                            <li>
                                                <a href="http://">Kenya vs Tanzania Safari: The Better African Safari Experience</a>
                                            </li>
                                            <li>
                                                <a href="http://">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring</a>
                                            </li>
                                            <li>
                                                <a href="http://">Dorem ipsum dolor sit amet, consectetur adipiscing on a elit Curabitur argcu erat accumsan.</a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>

                            <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">
                                    <div>
                                        <h2 className="mb-2 text-[22px] font-medium capitalize">Feedback</h2>
                                        <hr className="border-main solid border-[2px] w-[20%] mb-[30px]" />
                                        <div className="relative w-full">
                                            <ul className="space-y-[20px]">
                                                <li>
                                                        <a href="http://">wp-travolo trong Dorem ipsum dolor sit amet, consectetur adipiscing on a elit Curabitur argcu erat accumsan.</a>
                                                </li>
                                                <li>
                                                        <a href="http://">wp-travolo trong Dorem ipsum dolor sit amet, consectetur adipiscing on a elit Curabitur argcu erat accumsan.</a>
                                                </li>
                                                <li>
                                                        <a href="http://">wp-travolo trong Dorem ipsum dolor sit amet, consectetur adipiscing on a elit Curabitur argcu erat accumsan.</a>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                            </div>

                            <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">
                                    <div>
                                        <h2 className="mb-2 text-[22px] font-medium capitalize">Categories</h2>
                                        <hr className="border-main solid border-[2px] w-[20%] mb-[30px]" />
                                        <div className="relative w-full">
                                            <ul className="font-[700] space-y-5">
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">Adventure</a>
                                                </li>
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">Food</a>
                                                </li>
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">New year</a>
                                                </li>
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">Summer</a>
                                                </li>
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">Travel</a>
                                                </li>
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">Allgemein</a>
                                                </li>
                                                <li className="border-main solid border-[2px] p-[20px] rounded-[10px]">
                                                        <a href="http://">Other</a>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                            </div> 

                            <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">
                                    <div>
                                        <label htmlFor="newsletter-input" className="mb-2 text-[22px] font-medium capitalize">Newsletter</label>
                                        <hr className="border-main solid border-[2px] w-[20%] mb-[30px]" />
                                        <div className="relative w-full space-y-4">
                                            <input type="search" id="newsletter-input" className="block p-[20px] w-full z-20 text-sm text-gray-900 bg-white rounded-[10px]" placeholder="Enter your email" required />
                                            <button type="submit" className="w-full bg-main py-[18px] rounded-[10px] text-white uppercase font-[700]">
                                                    Subscribe
                                            </button>
                                        </div>
                                    </div>
                            </div>

                            <div className="bg-gray-100 px-[30px] py-[40px] rounded-[10px]">
                                    <div>
                                        <h2 className="mb-2 text-[22px] font-medium capitalize">tag</h2>
                                        <hr className="border-main solid border-[2px] w-[20%] mb-[30px]"/>
                                        <div className="w-full flex flex-wrap gap-y-3 gap-x-3 text-[14px]">
                                            <a href="http://" className="bg-white p-[10px] rounded-[8px] ">Adventure</a>
                                            <a href="http://" className="bg-white p-[10px] rounded-[8px] ">Camera</a>
                                            <a href="http://" className="bg-white p-[10px] rounded-[8px] ">Camp</a>
                                            <a href="http://" className="bg-white p-[10px] rounded-[8px] ">City</a>
                                            <a href="http://" className="bg-white p-[10px] rounded-[8px] ">Nature</a>
                                            <a href="http://" className="bg-white p-[10px] rounded-[8px] ">Summer</a>
                                        </div>
                                    </div>
                            </div>

                            
                        </div>
                    </div>
                </LayoutContainer>
              
            </div>
           

        </div>
    );
}
export default memo(DetailBlog)