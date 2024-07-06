import NavMenu from "../Shared/NavMenu";
import Footer from "../Shared/Footer";
import Sidebar from "../components/Sidebar/Sidebar";


const MainLayout = () => {
    return (
        <div className="">
            <div className="" >
                <NavMenu></NavMenu>
                <Sidebar></Sidebar>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;