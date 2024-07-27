

import { Link } from "react-router-dom";
import CartSwiper from "./CartSwiper/CartSwiper";

const Category = ({ smart, kitchen, plastic, electronic, fashion_beauty }) => {

    // const handleAddToCard =

    const categories = [
        { title: "Smart", data: smart },
        { title: "Kitchen", data: kitchen },
        { title: "Plastic", data: plastic },
        { title: "Electronic", data: electronic },
        { title: "Fashion_Beauty", data: fashion_beauty }
    ];

    // const randomlyGenerateKey = () => {
    //     return Math.floor(Math.random() * 1000000); // Adjust the range as needed
    // };

    return (
        <div>
            {
                categories?.map((category) => {
                    return (
                        <div key={category.title}
                            className="text-center mt-10 border-b-4">
                            <h2 className="text-4xl font-semibold">{category.title}</h2>

                            <div className="bg-sky-200 p-2 pr-0">
                                <CartSwiper
                                    category={category}
                                ></CartSwiper>
                            </div>

                            <div className=''>
                                <Link to={`product/${category.title}`} className='btn btn-outline rounded-full text-3xl text-black'>{">"}</Link>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    );
};
export default Category;
