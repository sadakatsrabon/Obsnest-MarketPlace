import { Outlet } from "react-router-dom";
import NavMenu from "../Shared/NavMenu";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;