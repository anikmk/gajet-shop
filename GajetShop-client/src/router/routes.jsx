import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../page/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])