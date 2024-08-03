
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {

    // ToDo: Load Data from server to have dynamic isAdmin based on data;
    const isAdmin = true;

    return (
        <div className="pt-20">
            {/* Drawer */}
            <label htmlFor="my-drawer-4" className="btn md:hidden btn-outline text-sky-600 border-sky-300 border-y-8 ">O-Drawer</label>
            <div className="">
                <div className="drawer md:drawer-open drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side mt-16">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {
                                isAdmin ? <>
                                    <li><Link to="/">Home</Link></li>
                                    <div className="divider"></div>
                                    <li><Link>Admin Home</Link></li>
                                    <li><Link to="manageusers">Manage User</Link></li>
                                    <li><Link>Manage Product</Link></li>
                                    <li><Link>Payment History</Link></li>
                                    <div className="divider"></div>
                                    <li><Link>Menu</Link></li>
                                </> : <>
                                    <li><Link to="/">Home</Link></li>
                                    <div className="divider"></div>
                                    <li><Link>User Home</Link></li>
                                    <li><Link to='mycart'>My Cart</Link></li>
                                    <li><Link>Payment History</Link></li>
                                    <div className="divider"></div>
                                    <li><Link>Menu</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;