import { memo } from "react";
import LayoutContainer from "../All/LayoutContainer";
import Button from "../All/Button";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
type AuthFormPage = {
    toggleChange: (value:"login" | "signup" | "reset") => void
}
function ResetPassword ({toggleChange}:AuthFormPage) {
    return(
        <div>

            <LayoutContainer>
                <div className="bg-white drop-shadow-2xl animate-zoomIn">
                        <div className="px-[100px] py-[100px] grid grid-cols-2">
                            <div className="pr-[100px] flex flex-col gap-y-[15px] m-auto">
                                <div>
                                    <h2 className="text-main text-[28px] font-[700] uppercase">Reset your password</h2>
                                    <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                </div>
                                <div>
                                    <button onClick={()=>toggleChange("login")} className="hover:text-main">
                                        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
                                        Back
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                        <label htmlFor="username">
                                            Email or username
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input type="text" name="username" id="username" placeholder="Email or username" className="w-full solid border-[2px] px-[20px] py-[15px] mt-[10px] mb-[30px] focus:border-main  outline-none "/>
                                </div>
                                <div>
                                    <Button className="w-full py-[20px]">
                                        Reset password
                                    </Button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
            </LayoutContainer>
        </div>
    );
}
export default memo(ResetPassword)