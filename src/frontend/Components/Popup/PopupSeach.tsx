import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { type } from "os";

type ShowSearchPopup = {
    toggleOpen: (value:("open" | "close"))=>void
}
const PopupSearch: FC<ShowSearchPopup> = ({toggleOpen})=> {
    return(
            <div className="flex justify-center items-center w-full h-svh bg-[#000000f2]  fixed inset-0 z-[9999] animate-slideInLeft">
                <div className="absolute top-10 right-10 w-[60px] h-[60px]  bg-main rounded-[50%] flex justify-center items-center hover:bg-secondary duration-500" onClick={() => toggleOpen("close")}>
                    <button className="text-white " >
                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                    </button>
                </div>
                <div>
                    <label htmlFor="searchPopup"></label>
                    <input type="text" name="searchPopup" id="searchPopup" placeholder="Search..." className="border-[2px] solid border-main rounded-[30px] py-[20px] px-[20px] w-[800px] bg-transparent outline-none text-white animate-zoomIn" />
                </div>
            
            </div>
    );
}
export default memo(PopupSearch)