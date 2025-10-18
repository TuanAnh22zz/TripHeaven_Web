import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays, faAngleRight,faUsers,faArrowRight, faChevronLeft, faPlus, faWindowMinimize} from '@fortawesome/free-solid-svg-icons';
import Button from "../All/Button";
import LayoutContainer from "../All/LayoutContainer";
import { colors } from "@mui/joy";

function PopupSelectQuantity () {
    return(
        <div>

            <div className="flex justify-center items-center w-full h-svh bg-[#000000f2]  fixed inset-0 z-[9999] animate-slideInLeft">
                <LayoutContainer>
                <div className="bg-white w-full h-full flex py-[60px]">
                    <div className="w-3/5 flex flex-col  px-[80px]">
                    
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

                        <hr className="w-[100%] solid border-[1px] my-[15px]"/>

                        <div className="w-full text-[12px] opacity-25">
                                <div className="flex flex-row px-[20px]">
                                    <div className="w-1/2 flex justify-start">
                                        <p className="uppercase">Travellers</p>
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <p className="uppercase">Quantity</p>
                                    </div>

                                </div>
                                <div></div>
                        </div>

                        <div>

                            <div className="w-full  bg-white drop-shadow-xl rounded-[5px] mt-[30px]">
                                <div className="flex flex-row py-[30px] px-[20px]">
                                        <div className="w-1/2 flex justify-start items-center">Adult</div>
                                        <div className="w-1/2 flex justify-end items-center">
                                            <div className="w-1/2">
                                                <strong>1,5000,000đ </strong>/ person
                                            </div>
                                       
                                            <div className="w-1/2 flex justify-end items-center">
                                                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                                                <div className="flex items-center max-w-[8rem]">
                                                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-300 rounded-s-lg p-3 h-11 focus:outline-none flex ">
                                                        <FontAwesomeIcon icon={faWindowMinimize} style={{color: "black"}} className="w-3 h-3" />
                                                    </button>
                                                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 w-11 h-11 text-center text-gray-900 text-sm  block py-2.5 focus:outline-none" placeholder="0" required />
                                                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-300 rounded-e-lg p-3 h-11 focus:outline-none flex items-center">
                                                        <FontAwesomeIcon icon={faPlus} style={{color: "black"}} className="w-3 h-3"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                      
                                </div>
                            </div>
                            <div className="w-full  bg-white drop-shadow-xl rounded-[5px] mt-[30px]">
                                <div className="flex flex-row py-[30px] px-[20px]">
                                        <div className="w-1/2 flex justify-start items-center">Children</div>
                                        <div className="w-1/2 flex justify-end items-center">
                                            <div className="w-1/2">
                                                <strong>1,5000,000đ </strong>/ person
                                            </div>
                                       
                                            <div className="w-1/2 flex justify-end items-center">
                                                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                                                <div className="flex items-center max-w-[8rem]">
                                                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-300 rounded-s-lg p-3 h-11 focus:outline-none flex ">
                                                        <FontAwesomeIcon icon={faWindowMinimize} style={{color: "black"}} className="w-3 h-3" />
                                                    </button>
                                                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 w-11 h-11 text-center text-gray-900 text-sm  block  py-2.5 focus:outline-none" placeholder="0" required />
                                                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-300 rounded-e-lg p-3 h-11 focus:outline-none flex items-center">
                                                        <FontAwesomeIcon icon={faPlus} style={{color: "black"}} className="w-3 h-3"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-x-[100px] mt-[100px]">
                          <button className="hover:text-main" >
                            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
                                Back
                          </button>
                          <Button className="capitalize flex justify-center items-center">
                                Proceed To Checkout
                                <FontAwesomeIcon icon={faArrowRight} className="pl-[10px]"/>
                          </Button>
                        </div>
                     

                    </div>
                    <div className="w-2/5 pr-[50px]">
                        
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

                        <div className="flex flex-row">
                            <div className="w-1/2">
                                <strong className="text-[14px]">1 Adult </strong>
                                <span className="text-[13px]">(1.500.000đ/person)</span>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <strong>1.500.000đ</strong>
                            </div>
                           
                          
                        </div>
                        <hr className="w-[100%] solid border-[1px] my-[15px]"/>


                        <div>
                            <span><strong>Total:</strong></span>
                        </div>


                    </div>

                </div>
                </LayoutContainer>
               
            </div>
      
          
        </div>
    );
}
export default memo(PopupSelectQuantity)