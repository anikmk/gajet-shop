import { Link, useNavigate, } from "react-router"
import useAuth from "../(hook)/useAuth"


export const Register = () => {
    const {signinUser} = useAuth();
    const navigate = useNavigate();
    const handleSignIn = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        try{
            await signinUser(email,password)
            navigate('/')
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
            have an account? <Link to={'/login'}>Login</Link>
        </div>
      </form>
    </div>
  </div>

  )
}
