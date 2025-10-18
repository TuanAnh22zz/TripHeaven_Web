import { memo } from "react";
import { Link } from 'react-router-dom';
import LayoutContainer from "../All/LayoutContainer";
import Button from "../All/Button";
import useAnimationLogin from "../../Hook/Animation/useAnimationLogin";


type AuthFormPage = {
    toggleChange: (value:"login" | "signup" | "reset") => void
}
function FormSignup ({toggleChange}:AuthFormPage) {
    return(
        <div>
             <LayoutContainer className="">
                <div className="bg-white drop-shadow-2xl animate-zoomIn">
                    <div className="px-[150px] py-[100px]">
                        <form action="">
                            <h2 className="text-[28px] mb-[30px] uppercase text-main font-[700]">Create an account</h2>
                            <div>
                                <label htmlFor="username">
                                    Email or username
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="username" id="username" placeholder="Email or username" className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main  outline-none "/>
                            </div>

                            <div className="m">
                                <label htmlFor="email">
                                    Email
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="email" id="email" placeholder="Password" className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main outline-none" />
                           </div>
                           
                           <div>
                                <label htmlFor="password">
                                    Password
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="password" id="password" placeholder="Password" className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] focus:border-main outline-none" />
                           </div>

                            <div className="mt-[30px]">
                                <Button className="w-full py-[20px]">
                                    Sign up
                                </Button>
                            </div>

                            <div className="flex gap-x-2 mt-[30px] justify-center text-gray-400 text-[16px]">
                                <span>Have An Account?</span>
                                <button className="hover:text-main" onClick={()=>toggleChange("login")}>Log In</button>
                            </div>
                           


                        </form>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}
export default memo(FormSignup)