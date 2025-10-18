import Button from "../Components/All/Button";
import Banner from "../Components/All/Banner";
import Header from "../Components/All/Header";
import HeaderTop from "../Components/All/HeaderTop";
import LayoutContainer from "../Components/All/LayoutContainer";

function Booking() {
  return (
    <div>
        <HeaderTop/>
        <Header/>\
        <Banner
            text1="Booking Details"
            text2="Home"
        />
        <LayoutContainer>
            <div className="flex flex-wrap ">
                <div className="w-3/5 pr-[30px] bg-white animate-slideInLeft">
                    <div className="">

                        <div className="flex-col flex gap-y-[20px] p-[30px]">
                            <p className="text-main font-[700] text-[20px]">Have a Coupon code?</p>
                            <p>Add your coupon code below to get your discount.</p>
                            <div className="flex flex-row">
                                <div className="w-1/2">
                                    <input type="text" id="input_coupon" name="input_coupon" className="w-full h-full border-black border-[1px] border-r-0 p-[12px] rounded-s-lg outline-none" placeholder="Coupon code" />
                                </div>
                                <div className="w-1/2 ">
                                    <button className="w-full h-full rounded-e-lg bg-main text-white uppercase font-[700] py-[15px]">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>

                        <form action="" className="py-[40px] px-[24px]">
                            <h2 className="mb-[20px] font-[700] text-[20px] text-main">Billing Details</h2>
                            <div className="flex flex-col gap-y-[30px]">
                                <div>
                                    <label htmlFor="input_fname">First Name <span className="text-red-600">*</span></label>
                                    <input type="text" name="input_fname" className="w-full border-[1px] border-black p-[12px] rounded-[6px] mt-[10px]" />
                                </div>

                                <div>
                                    <label htmlFor="input_fname">Last Name <span className="text-red-600">*</span></label>
                                    <input type="text" name="input_lname" className="w-full border-[1px] border-black p-[12px] rounded-[6px] mt-[10px]" />
                                </div>

                                <div>
                                    <label htmlFor="input_fname">Email <span className="text-red-600">*</span></label>
                                    <input type="text" name="input_email" className="w-full border-[1px] border-black p-[12px] rounded-[6px] mt-[10px]" />
                                </div>

                                <div>
                                    <label htmlFor="input_fname">Địa chỉ <span className="text-red-600">*</span></label>
                                    <input type="text" name="input_address" className="w-full border-[1px] border-black p-[12px] rounded-[6px] mt-[10px]" />
                                </div>

                                <div>
                                    <label htmlFor="input_fname">City <span className="text-red-600">*</span></label>
                                    <input type="text" name="input_city" className="w-full border-[1px] border-black p-[12px] rounded-[6px] mt-[10px]" />
                                </div>


                                <div>
                                    <label htmlFor="input_fname">Country <span className="text-red-600">*</span></label>
                                    <input type="text" name="input_city" className="w-full border-[1px] border-black p-[12px] rounded-[6px] mt-[10px]" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-[20px] mt-[50px]">
                                <h2 className="mb-[20px] font-[700] text-[20px] text-main">Payment Method</h2>

                                <div className="flex flex-col gap-y-[20px]"> 
                                    <div className="flex">
                                        <input id="default-radio-1" type="radio"  name="default-radio" className="w-5 h-5 text-main bg-gray-100 border-gray-300 focus:ring-main"/>
                                        <label htmlFor="default-radio-1" className="ml-[10px]  text-[16px] font-medium ">Book Now Pay Later</label>
                                    </div>
                                    
                                    <div className="bg-blue-50 p-[16px] text-[15px]">
                                         If checked, no payment gateways will be used in checkout. The booking process will be completed and booking will be saved without payment.
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-[20px]">
                                    <div className="flex">
                                        <input id="default-radio-1" type="radio"  name="default-radio" className="w-5 h-5 text-main bg-gray-100 border-gray-300 focus:ring-main"/>
                                        <label htmlFor="default-radio-1" className="ms-2 text-[16px] font-medium ">Bank Transfer</label>
                                    </div>
                                  
                                    <div className="bg-blue-50 p-[16px] text-[15px]">
                                         Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </div>
                                </div>

                                <div className="mt-[30px]">
                                    <Button className="py-[20px]">
                                        BOOK NOW
                                    </Button>
                                </div>
                               

                               
                            </div>
                          

                            
                           
                        </form>
                    </div>
                </div>
                <div className="w-2/5 py-[32px] px-[24px] drop-shadow-lg bg-white h-fit animate-slideInRight">
                    <div className="flex flex-col gap-y-[40px]">
                        <h2 className="text-[28px] uppercase font-[700] text-main">Booking Summary</h2>

                        <div className="flex flex-col bg-blue-50 py-[32px] px-[24px] gap-y-[15px]">
                            <h3 className="text-[20px] font-[600]">Fantastic Maldives Tour Package</h3>
                            <span className="text-[16px] text-[#505050]">Starting Date: Sep 30, 2025</span>
                            <span className="py-[8px] px-[10px] bg-gray-400 text-white text-[13px] italic w-fit rounded-[25px] font-[600]">Trip Code: WTE-2957</span>
                        </div>

                        <div>
                            <div className="flex justify-end mb-[30px]">
                                <span>Package:Gói cơ bản</span>
                            </div>

                            <div className="flex flex-wrap items-center my-[30px]">
                                <div className="w-1/5">
                                    <span>1 Adult</span>
                                </div>
                                <div className="w-3/5">
                                    <hr className="border-[1px] w-[90%] border-dashed border-gray-400 "/>
                                </div>
                                <div className="w-1/5 flex justify-end">
                                    <span>3.400.000₫</span>
                                </div>
                            </div>
                            <hr className="border-[1px] solid border-main "/>

                            <div className="flex justify-end my-[30px] text-[20px]">
                                <span>Subtotal: <span>3.400.000₫</span></span>
                            </div>
                            <hr className="border-[1px] solid border-main "/>
                            <div className="flex justify-end mt-[30px]">
                                <span className="text-[20px]">Total: <span className="text-[30px] font-[600]">3.400.000đ</span></span>
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    </div>
   
  );
}
export default Booking;