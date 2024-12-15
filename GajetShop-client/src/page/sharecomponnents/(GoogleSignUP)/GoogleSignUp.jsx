import useAuth from "../../(hook)/useAuth"
import { FcGoogle } from "react-icons/fc";
const GoogleSignUp = () => {
        // const {signinWithGoogle} = useAuth();
    return(
        <div>
            <div className="divider">OR</div>
            <div><FcGoogle /> Google</div>
        </div>
    )
}
export default GoogleSignUp