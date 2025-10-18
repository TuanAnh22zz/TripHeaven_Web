import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays, faAngleRight,faUsers,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import LayoutContainer from "../All/LayoutContainer";
import Button from "../All/Button";

function PopupSelectDay() {
    return(
        <div>
             <div className="flex justify-center items-center w-full h-svh bg-[#000000f2]  fixed inset-0 z-[9999] py-[100px] px-[100px] animate-slideInLeft">
                <LayoutContainer>
                    <div className="bg-white w-full h-full flex py-[20px]">
                        <div className="w-3/5 flex items-center justify-center ">
                        
                            <div className="flex flex-row gap-x-[80px] justify-center">
                                <div>
                                    <FontAwesomeIcon icon={faCalendarDays}  size="lg" className='pr-[5px]'/>
                                    <span>Day & Time</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUsers} className='pr-[5px]' />
                                    <span>Quantity</span>
                                </div>
                            </div>
                            <div className="">
                                    <Button className="capitalize flex justify-center items-center">
                                            Continue
                                            <FontAwesomeIcon icon={faArrowRight} className="pl-[10px]"/>
                                    </Button>
                            </div>
                            <div>
                                
                            </div>

                          

                        </div>
                        <div className="w-2/5">
                            
                            <div className="flex flex-col gap-y-[10px] mb-[20px]">
                                <h5 className="uppercase text-[14px] opacity-25">Booking Summary</h5>
                                <h2 className="text-[20px] opacity-85 pr-[200px]">Experience the Incredible India With travolo</h2>
                                <p className="text-[14px]">
                                    <strong>Starting Date: </strong>
                                    September 26, 2025
                                </p>
                            </div>
                            <hr className="w-[100%] solid border-[1px] my-[15px]"/>
                            <div className="flex flex-col gap-y-[10px]">
                                <div className="px-[10px] py-[5px] bg-secondary w-fit rounded-[5px]">
                                    <h5 className="text-[13px] text-white">Package: Gói cơ bản</h5>
                                </div>
                                <h6 className="italic text-[14px]"><strong>Travellers</strong></h6>
                            </div>
                            <hr className="w-[100%] solid border-[1px] my-[15px]"/>


                          


                        </div>

                    </div>
                
                    <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                        <script src="https://unpkg.com/flowbite@latest/dist/datepicker.js"></script>
                    </div>

                </LayoutContainer>
               
            </div>
        </div>
    );
}
export default memo(PopupSelectDay);