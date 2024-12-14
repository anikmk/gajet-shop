import { Outlet } from "react-router-dom";
import Navbar from "../page/shareComponnents/Navbar";
import Footer from "../page/sharecomponnents/Footer";



const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen"><Outlet></Outlet></div>
            <Footer />
        </div>
    );
};

export default Main;