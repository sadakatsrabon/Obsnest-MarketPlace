import { Outlet } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer" className="btn lg:hidden btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Content here */}
                    <div className="pt-20">
                        <li><a>Smart</a></li>
                        <li><a>Kitchen</a></li>
                        <li><a>Plastic</a></li>
                        <li><a>Electronic</a></li>
                        <li><a>Fashion and beauty</a></li>
                        <div className="divider"></div>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;