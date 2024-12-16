import useAuth from "../(hook)/useAuth";
import  { useLocation,Navigate } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // if (loading) {
  //   return "loading...";
  // }
  if (user) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace />;
};
export default PrivetRoute;
