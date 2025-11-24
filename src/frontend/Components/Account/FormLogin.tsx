import { memo } from "react";
import LayoutContainer from "../../components/All/LayoutContainer";
import { useLoginForm } from "../../hook/useLoginForm";
import ErrorMessage from "../All/ErrorMessage";


type AuthFormPage = {
    toggleChange: (value:("login" | "signup" | "reset")) => void 

}

function FormLogin ({toggleChange}: AuthFormPage) {
    
    const { formData, error, isLoading, handleChange, handleSubmit} = useLoginForm(); 

    return(
        <div>
           
            <LayoutContainer className="">
                
                
                <div className="bg-white drop-shadow-2xl animate-zoomIn">
                    <div className="px-[150px] py-[100px]">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-[28px] mb-[30px] uppercase text-main font-[700]">Login</h2>
                            <div>
                                <label htmlFor="email">
                                    Email or username
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="text" name="email" id="email" placeholder="Email or username" required value={formData.email}   onChange={handleChange}  className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main  outline-none "/>
                            </div>
                           
                           <div>
                                <label htmlFor="password">
                                    Password
                                    <span className="text-red-500">*</span>
                                </label>
                                <input type="password" name="password" id="password" placeholder="Password"  value={formData.password} onChange={handleChange} className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] focus:border-main outline-none" />
                           </div>
                           <ErrorMessage message={error} />


                          
                            
                            <div className="grid grid-cols-2 py-[20px]">
                                <div className="flex justify-start">
                                    <input id="checkbox_remember" type="checkbox" value="" className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded-sm cursor-pointer"/>
                                    <label htmlFor="checkbox_remember" className="ms-2 text-[13px] font-medium text-black cursor-pointer">Remember me</label>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="text-[13px] hover:text-main" onClick={()=>toggleChange("reset")}>Forgot password ?</button>
                                </div>
                            </div>

                            <div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-[20px]  text-white  bg-main font-[700] text-[16px] rounded-lg  px-[35px] mt-[5px] relative cursor-pointer overflow-hidden uppercase group  duration-700"
                                    >
                                        <span className="z-10 relative">
                                            {isLoading ? 'Logging in...' : 'Log in'}
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
                                <span>Don't have an account?</span>
                                <button type="button" className="hover:text-main on" onClick={() => toggleChange("signup")}>
                                    Sign up
                                </button>
                            </div>
                           


                        </form>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}
export default memo(FormLogin)