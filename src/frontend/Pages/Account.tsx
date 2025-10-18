import { memo } from "react";
import { Link } from 'react-router-dom';
import Banner  from "../Components/All/Banner";
import AuthPage from "../Components/Account/AuthPage";
import FormLogin from "../Components/Account/FormLogin";
import FormSignup from "../Components/Account/FormSignup";
import FormResetPassword from "../Components/Account/FormResetPassword";
import LayoutContainer from "../Components/All/LayoutContainer";
import Button from "../Components/All/Button";

function Account() {
   
    return(
        <div>
            <Banner
                text1="Account"
                text2="Home"
            />
            <AuthPage/>
           

            
           

        </div>
      
    );
}

export default memo(Account)