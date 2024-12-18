
import  { useLocation,Navigate } from "react-router-dom";
import useAuth from "../(hook)/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getUserDataByEmail } from "../Api/userAPi";
const SellerRoute = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    const {data:userData,isLoading} = useQuery({
      queryKey:["userData",user?.email],
      queryFn:async()=>await getUserDataByEmail(user?.email)
  }) 
    if (loading || isLoading) {
      return "loading...";
    }
    if (user && userData?.role === "seller") {
      return children;
    }
    return <Navigate to={"/"} state={{ from: location }} replace />;
}
export default SellerRoute;