import { memo } from "react";
import { Link } from 'react-router-dom';
import LayoutContainer from "../../Components/All/LayoutContainer";
import Button from "../../Components/All/Button";
function FormLogin () {
    return(
        <div>
            <LayoutContainer className="">
                <div className="bg-white drop-shadow-2xl">
                    <div className="px-[150px] py-[100px]">
                        <form action="">
                            <h2 className="text-[28px] mb-[30px] uppercase text-main font-[700]">Login</h2>
                            <div>
                                <label htmlFor="username">
                                    Email or username
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="username" id="username" placeholder="Email or username" className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main  outline-none "/>
                            </div>
                           
                           <div>
                                <label htmlFor="password">
                                    Password
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="password" id="password" placeholder="Password" className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] focus:border-main outline-none" />
                           </div>

                          
                            
                            <div className="grid grid-cols-2 py-[20px]">
                                <div className="flex justify-start">
                                    <input id="checkbox_remember" type="checkbox" value="" className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded-sm cursor-pointer"/>
                                    <label htmlFor="checkbox_remember" className="ms-2 text-[13px] font-medium text-black cursor-pointer">Remember me</label>
                                </div>
                                <div className="flex justify-end">
                                    <Link to="" className="hover:text-main duration-200 text-[13px]">Forgot Password ?</Link>
                                </div>
                            </div>

                            <div>
                                <Button className="w-full py-[20px]">
                                    Log in
                                </Button>
                            </div>

                            <div className="flex gap-x-2 mt-[30px] justify-center text-gray-400 text-[16px]">
                                <span>Don't have an account?</span>
                                <Link to="" className="hover:text-main">Sign up</Link>
                            </div>
                           


                        </form>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}
export default memo(FormLogin)