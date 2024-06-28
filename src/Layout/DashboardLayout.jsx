
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="pt-20">
            {/* Drawer */}
            <div className="">
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <h2>Page Content</h2>
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                    </div>
                    <div className="drawer-side mt-16">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link to="/"></Link>Home</li>
                            <div className="divider"></div>
                            <li><Link>Admin Home</Link></li>
                            <li><Link>User Home</Link></li>
                            <li><Link to='mycart'>My Cart</Link></li>
                            <li><Link>Payment History</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;