
import { memo, FC } from "react";

import LayoutContainer from "../../Components/All/LayoutContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faEye, faArrowRight, faMessage, faCircleUser} from "@fortawesome/free-solid-svg-icons"
import Button from "../../Components/All/Button";
import ImageBlog1 from "../../assets/images/Blog/6-2.jpg"

export interface PostProps { 
    id: number,
    writer: string,
    image: string,
    title: string,
    text: string,
    time: string,
    view: string,
    comment: string
}

const InfoBlog: PostProps[] = [
    {
        id: 1,
        writer: "TuanAnh",
        image: ImageBlog1,
        title: "10 Sun Hats For Beach Days, Long Hikes, And Everything In Between",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
        time: "12 Tháng Mười Hai, 2023",
        view: "Lượt xem(129)",
        comment: "0 Bình luận"
    },
    {
        id: 2,
        writer: "TuanAnh",
        image: ImageBlog1,
        title: "10 Sun Hats For Beach Days, Long Hikes, And Everything In Between",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
        time: "12 Tháng Mười Hai, 2023",
        view: "Lượt xem(129)",
        comment: "0 Bình luận"
    }
]

interface RenderPostBlog {
    blog: PostProps
}

const RenderInfoBlog: FC<RenderPostBlog> = ({blog}) => (
        <div className="flex flex-wrap rounded-[20px] solid border-main border-[1px]">
        <div className="w-full">
            <img src={ImageBlog1} alt="" className="rounded-t-[20px] relative" />
            <div className="absolute p-[20px] bg-black mt-[-150px] rounded-r-[15px]">
                <span className="text-white">
                    <FontAwesomeIcon icon={faCircleUser} className="pr-[15px]" size="2xl"/>
                    {blog.writer}
                </span>
            </div>
        </div>
        <div className="px-[50px] py-[40px]">
            <a href="" className="text-[30px] font-[700]">{blog.title}</a>
            <p className="text-[16px] text-gray-500 mt-[10px]">{blog.text}</p>
            <hr className="border-main solid border-[1px] w-full mt-[50px] mb-[20px]"/>
            <div className="w-full">
                <ul className="flex">
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCalendarDays} style={{color: '#4CAF50'}} size="lg" className='pr-[8px]'/>
                            {blog.time}
                        </span>
                    </li>
                    <span className="px-[20px]"> | </span>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faEye} style={{color: '#4CAF50'}} size="lg" className='pr-[8px]'/>
                            {blog.view}
                        </span>
                    </li>
                    <span className="px-[20px]"> | </span>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faMessage} style={{color: '#4CAF50'}} size="lg" className='pr-[8px]'/>
                            {blog.comment}
                        </span>
                    </li>

                    
                </ul>
            </div>
            <div className="mt-[20px]">
                <Button>
                        Đọc thêm
                        <FontAwesomeIcon icon={faArrowRight} className="pl-[10px]" size="sm" />
                </Button>
            </div>
        
        </div>
        </div>
);


function Post () {
    return(
         <div>
        <LayoutContainer>
            <div className="flex flex-wrap">
                <div className="w-3/5 space-y-[60px]">
                    {InfoBlog.map((item) => (
                        <RenderInfoBlog
                            key={item.id}
                            blog={item}
                        />
                    ))}
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
    );
}
export default memo(Post);