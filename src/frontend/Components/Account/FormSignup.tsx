import { memo } from "react";
import { Link } from 'react-router-dom';
import LayoutContainer from "../../components/All/LayoutContainer";
import Button from "../../components/All/Button";
import useAnimationLogin from "../../hook/Animation/useAnimationLogin";
import { useRegisterForm } from "../../hook/useRegisterForm";
import ErrorMessage from "../All/ErrorMessage";
import SuccessModal from "../All/SuccessModal";


type AuthFormPage = {
    toggleChange: (value:"login" | "signup" | "reset") => void
}


function FormSignup ({toggleChange}:AuthFormPage) {
    const { 
        formData, 
        error, 
        isLoading, 
        isSuccessModalOpen,
        handleChange, 
        handleSubmit,
        handleCloseModal
    } = useRegisterForm();
    return(
        <div>
             <LayoutContainer className="">
                <div className="bg-white drop-shadow-2xl animate-zoomIn">
                    <div className="px-[150px] py-[100px]">
                        <form onSubmit={handleSubmit} noValidate>
                            <h2 className="text-[28px] mb-[30px] uppercase text-main font-[700]">Create an account</h2>
                            <div>
                                <label htmlFor="username">
                                    Username
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="username" id="username" required placeholder="Username" value={formData.username} onChange={handleChange} className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main  outline-none "/>
                            </div>

                            <div className="m">
                                <label htmlFor="email">
                                    Email
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="email" id="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main outline-none" />
                           </div>
                           
                           <div>
                                <label htmlFor="password">
                                    Password
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type={"password"} name="password" id="password" required placeholder="Password" value={formData.password} onChange={handleChange} className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] focus:border-main outline-none" />
                           </div>
                           <ErrorMessage message={error} />

                            <div className="mt-[30px]">
                            <button type="submit" disabled={isLoading} className="w-full py-[20px]  text-white  bg-main font-[700] text-[16px] rounded-lg  px-[35px] mt-[5px] relative cursor-pointer overflow-hidden uppercase group  duration-700">
                                        <span className="z-10 relative">
                                            {isLoading ? 'Registering...' : 'Sign Up'}
                                        </span>

                                        <div
                                            className="absolute w-full h-1/2 bg-[length:200%_100%] top-full left-0 animate-wave duration-300 group-hover:top-1/2"
                                            style={{
                                                backgroundImage: "url('/src/frontend/assets/images/wave-yellow.svg')",
                                            }}
                                        />
                                    </button>
                            </div>

                            <div className="flex gap-x-2 mt-[30px] justify-center text-gray-400 text-[16px]">
                                <span>Have An Account?</span>
                                <button type="button" className="hover:text-main" onClick={()=>toggleChange("login")}>Log In</button>
                            </div>
                           


                        </form>
                       


                    </div>
                </div>
            </LayoutContainer>
            <SuccessModal
                            isOpen={isSuccessModalOpen}
                            onClose={handleCloseModal}
                            title="Đăng Ký Thành Công!"
                            message="Tài khoản của bạn đã được tạo. Hãy đăng nhập để bắt đầu khám phá."
                            buttonText="Đi đến Đăng nhập"
            />
        </div>
    );
}
export default memo(FormSignup)