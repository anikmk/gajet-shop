import { Link, useNavigate, } from "react-router"
import useAuth from "../(hook)/useAuth"
import GoogleSignUp from "../sharecomponnents/(GoogleSignUP)/GoogleSignUp";
import useAxios from "../(hook)/useAxios";


export const Register = () => {
  const axiosInstance = useAxios();
    const {signinUser} = useAuth();
    const navigate = useNavigate();
    const handleSignIn = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const status = role === "buyer" ? "aproved" : "pending";
        const wishlist = [];
        const userData = {email,role,status,wishlist}

        try{
            const user = await signinUser(email,password)
            if(user){
             const result =  await axiosInstance.post("/users",userData)
             if(result?.data?.insertedId){
              alert("Registration succesfull!");
               navigate('/')
            }
            }
           
        }
        catch(err){console.log(err);}
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <select name="role" className="select select-bordered w-full max-w-xs">
        <option disabled selected>Role</option>
        <option value={'buyer'}>Buyer</option>
        <option value={'seller'}>Seller</option>
        </select>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
            have an account? <Link to={'/login'}>Login</Link>
        </div>
        <GoogleSignUp />
      </form>
    </div>
  </div>

  )
}
