import { Outlet } from "react-router-dom";
import NavMenu from "../Shared/NavMenu";
import Footer from "../Shared/Footer";
import Sidebar from "../components/Sidebar/Sidebar";


const MainLayout = () => {
    return (
        <div className="">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;