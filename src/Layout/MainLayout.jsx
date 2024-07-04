import { Outlet } from "react-router-dom";
import NavMenu from "../Shared/NavMenu";
import Footer from "../Shared/Footer";
import Sidebar from "../components/Sidebar/Sidebar";


const MainLayout = () => {
    return (
        <div className="lg:grid grid-cols-2">
            <div className="w-1/3" >
                <Sidebar></Sidebar>
            </div>
            <div className="w-full">
                <NavMenu></NavMenu>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;