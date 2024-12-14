import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../page/Home";
import { Register } from "../page/(Register)/Register";
import { LogIn } from "../page/(LogIn)/LogIn";

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
    }
])