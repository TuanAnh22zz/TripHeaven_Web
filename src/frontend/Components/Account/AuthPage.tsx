import FormLogin from "../../components/Account/FormLogin";
import FormSignup from "../../components/Account/FormSignup";
import FormResetPassword from "../../components/Account/FormResetPassword";
import useAnimationLogin from "../../hook/Animation/useAnimationLogin";

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