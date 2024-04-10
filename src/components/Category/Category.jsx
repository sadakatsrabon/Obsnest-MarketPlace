

import { Link } from "react-router-dom";
import CartSwiper from "./CartSwiper/CartSwiper";

const Category = ({ smart, kitchen, plastic, electronic, fashion_beauty }) => {

    // const handleAddToCard =

    const categories = [
        { title: "Smart", data: smart },
        { title: "Kitchen", data: kitchen },
        { title: "Plastic", data: plastic },
        { title: "Electronic", data: electronic },
        { title: "Fashion & Beauty", data: fashion_beauty }
    ];

    const randomlyGenerateKey = () => {
        return Math.floor(Math.random() * 1000000); // Adjust the range as needed
    };

    return (
        <div>
            {
                categories?.map((category) => {
                    const randomKey = randomlyGenerateKey();
                    // console.log(category)
                    return (
                        <div key={randomKey}
                            className="text-center mt-10 border-b-4">
                            <h2 className="text-4xl font-semibold">{category.title}</h2>


                            <CartSwiper
                                category={category}
                            ></CartSwiper>


                            <div className='text-end'>
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
