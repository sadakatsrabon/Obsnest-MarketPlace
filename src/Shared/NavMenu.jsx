import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"
import useCart from "../components/hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavMenu = () => {
    const { user, logOut } = useContext(AuthContext)

    const [cart] = useCart();

    const handleLogOut = async () => {
        await logOut()
        // .then(() => { })
        // .catch(error => console.error(error))
    };
    const navOptions =
        <div className="flex">
            <div className="sm:flex">
                <li>
                    <Link to='dashboard'><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Dashboard</button></Link>
                </li>
                <li>
                    <Link to="/dashboard/mycart"><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>--{cart?.length || 0}--</button></Link>
                </li>
            </div>
            <div className="text-end">
                {
                    user ? <>
                        <li><button onClick={handleLogOut} className='btn btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Log Out</button></li>
                    </> : <>
                        <li><Link to="nest/login"><button className='btn-outline text-white bg-black p-2 bg-opacity-40 uppercase font-semibold rounded-md'>Login</button></Link></li>
                    </>
                }
            </div>
        </div>
    return (
        <div className="navbar h-1 fixed z-30 max-w-screen-2xl bg-opacity-30 md:bg-opacity-100 bg-black text-white">
            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 bg-opacity-80 rounded-box w-52">
                        <Link className="" to="/"><img className='w-10 rounded-lg' src={logo} alt="logo" /></Link>
                        {navOptions}

                    </ul>
                </div>
                <Link to="/"><img className='w-10 rounded-lg' src={logo} alt="logo" /></Link>
                <input className="px-8 py-2 ml-20 w-40 sm:w-96 rounded-3xl text-black text-center" type="text" name="" placeholder="Type to search your product" id="" />
            </div>

            <div className="navbar-center hidden sm:flex">

                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>

            </div>

        </div>
    );
};

export default NavMenu;