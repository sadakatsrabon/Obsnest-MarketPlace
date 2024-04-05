// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
// import './styles.css';
// import { Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';

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


    return (
        <div>
            {
                categories?.map((category, index) =>
                    <div key={index}
                        className="text-center mt-10 border-b-4">
                        <h2 className="text-4xl font-semibold">{category.title}</h2>


                        <CartSwiper
                            category={category}
                        ></CartSwiper>


                        <div className='text-end'>
                            <Link to={`product/${category.title}`} className='btn btn-outline rounded-full text-3xl text-black'>{">"}</Link>
                            {/* <Link to={`product/${category}`} className='btn btn-outline rounded-full text-3xl text-black'>{">"}</Link> */}
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Category;