import { Outlet } from "react-router";
import Sidebar from "../../page/(DashboardComponnent)/Sidebar/SIdebar";

const DashboardLayout = () => {
    return <>
    <div className="grid lg:grid-cols-12 gap-2">
        <div className="grid  col-span-2"><Sidebar /></div>
        <div className="grid  col-span-10"><Outlet /></div>
    </div>
    </>
}
export default DashboardLayout;