import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../page/Home";
import { Register } from "../page/(Register)/Register";
import { LogIn } from "../page/(LogIn)/LogIn";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import PrivetRoute from "../page/(PrivetRoute)/PrivetRoute";
import Overview from "../page/(DashboardComponnent)/Overview/Overview";
import MyProduct from "../page/(DashboardComponnent)/MyProduct/MyProduct";
import AddProduct from "../page/(DashboardComponnent)/AddProduct/AddProduct";
import SellerRoute from "../page/(PrivetRoute)/SellerRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/login",
                element:<LogIn />
            }
            
        ]
    },
    {
        path:"/dashboard",
        element:<PrivetRoute><DashboardLayout /></PrivetRoute>,
        children:[
            {
                path:"overview",
                element:<Overview />
            },
            {
                path:"myProduct",
                element:<MyProduct />
            },
            {
                path:"addProduct",
                element:<SellerRoute><AddProduct /></SellerRoute>
            }


        ]
    }
])