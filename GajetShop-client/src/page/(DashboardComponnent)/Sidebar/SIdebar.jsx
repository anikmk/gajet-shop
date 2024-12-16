import { Link } from "react-router"

const Sidebar = () =>{
    return <>
   <div className="min-h-screen bg-purple-400 p-4">
   <ul className="space-y-4 text-white text-lg">
        <li><Link to={"/dashboard/overview"}>Overview</Link></li>
        <li><Link to={"/dashboard/myProduct"}>My Product</Link></li>
        <li><Link to={"/dashboard/addProduct"}>Add Product</Link></li>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link>Logout</Link></li>
    </ul>
   </div>
    </>
}
export default Sidebar;