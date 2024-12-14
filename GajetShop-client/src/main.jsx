

import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './router/routes';
import AuthProvider from './page/(Provider)/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  
)
