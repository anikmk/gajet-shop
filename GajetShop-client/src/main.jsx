

import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router/routes';
import AuthProvider from './page/(Provider)/AuthProvider';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  
)
