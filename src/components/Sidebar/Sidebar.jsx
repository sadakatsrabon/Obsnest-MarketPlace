import { Link, Outlet } from "react-router-dom";
import useData from "../hooks/useData";


const Sidebar = () => {

    const [loadedData] = useData();
    const smart = loadedData.filter(item => item.category === 'smart');
    const kitchen = loadedData.filter(item => item.category === 'kitchen');
    const plastic = loadedData.filter(item => item.category === 'plastic');
    const electronic = loadedData.filter(item => item.category === 'electronic');
    const fashion_beauty = loadedData.filter(item => item.category === 'fashion_beauty')
    // console.log([loadedData], "console.log")
    // console.log(smart);

    const categories = [
        { title: "Smart", data: smart },
        { title: "Kitchen", data: kitchen },
        { title: "Plastic", data: plastic },
        { title: "Electronic", data: electronic },
        { title: "Fashion_Beauty", data: fashion_beauty }
    ]

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn lg:hidden bg-sky-300 rounded-full fixed z-20 mt-16 drawer-button">{">"}</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Content here */}
                    <div className="pt-20">
                        {
                            categories.map((category) => <Link to={`product/${category.title}`} key={category.title}><li className="p-1 ml-4 hover:bg-slate-300 rounded-lg">{category.title}</li></Link>)
                        }

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