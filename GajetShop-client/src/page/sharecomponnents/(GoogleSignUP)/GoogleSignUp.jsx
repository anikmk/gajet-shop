import { useNavigate } from "react-router";
import useAuth from "../../(hook)/useAuth"
import { FcGoogle } from "react-icons/fc";
const GoogleSignUp = () => {
        const navigate = useNavigate();
        const {signinWithGoogle} = useAuth();
        const handleGoogleLogin =  async () => {
            try{
                await signinWithGoogle();
                navigate('/')
            }
            catch(err){console.log(err)}
            
        }
    return(
        <div>
            <div className="divider">OR</div>
            <div onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 cursor-pointer"><FcGoogle /> Google</div>
        </div>
    )
}
export default GoogleSignUp