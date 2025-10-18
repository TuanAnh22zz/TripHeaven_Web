import FormLogin from "./FormLogin";
import FormSignup from "./FormSignup";
import FormResetPassword from "./FormResetPassword";
import useAnimationLogin from "../../Hook/Animation/useAnimationLogin";

function AuthPage () {
    const {screen, toggleChange} = useAnimationLogin()
  
    return (
        <div>
                {screen==="login" && <FormLogin toggleChange={toggleChange}/>}
                {screen==="signup" && <FormSignup toggleChange={toggleChange}/>}
                {screen==="reset" && <FormResetPassword toggleChange={toggleChange}/>}
        </div>
    );
}
export default AuthPage