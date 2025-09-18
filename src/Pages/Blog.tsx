import { memo } from "react";
import HeaderTop from "../Components/All/HeaderTop";
import Header from "../Components/All/Header";
import Banner from "../Components/All/Banner";
import Post from "../Components/Blog/Post";
import LayoutContainer from "../Components/All/LayoutContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDays, faEye, faArrowRight, faMessage, faCircleUser} from "@fortawesome/free-solid-svg-icons"
import Button from "../Components/All/Button";
import ImageBlog1 from "../assets/images/Blog/6-2.jpg"
import Footer from "../Components/All/Footer";


function Blog () {
    return (
        <div>
         
            <Banner
                text1="Blog"
                text2="Home"
            />
            <Post/>

        
           
        </div>
    );
}
export default memo(Blog);