import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router"
import { getUserDataByEmail } from "../../Api/userAPi";
import useAuth from "../../(hook)/useAuth";

const Sidebar = () =>{
    const {user} = useAuth();
    const {data:userData,isLoading} = useQuery({
        queryKey:["userData",user?.email],
        queryFn:async()=>await getUserDataByEmail(user?.email)
    }) 
    if(isLoading){
        return <div>Loading..</div>
    }
    if(!userData){return <div><p>user not found</p> <Link to={'/'}>Home</Link></div>}
    return <>
   <div className="min-h-screen bg-purple-400 p-4">
   <ul className="space-y-4 text-white text-lg">
        <li><Link to={"/dashboard/overview"}>Overview</Link></li>
        {
        userData?.role === "seller" && <>
        <li><Link to={"/dashboard/myProduct"}>My Product</Link></li>
        <li><Link to={"/dashboard/addProduct"}>Add Product</Link></li></>
        }
        <li><Link to={"/"}>Home</Link></li>
        <li><Link>Logout</Link></li>
    </ul>
   </div>
    </>
}
export default Sidebar;