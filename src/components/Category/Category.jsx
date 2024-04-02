import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

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
                        className="text-center mt-10">
                        <h2 className="text-4xl font-semibold">{category.title}</h2>
                        {/* Swiper Slide */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                category.data.map(((item) =>
                                    <div className='' key={item._id}>
                                        <SwiperSlide>
                                            <Link to={`product/product-details/${item._id}`} className="card hover:scale-110 duration-75 w-96 bg-base-100 shadow-xl">
                                                <figure className="px-10 pt-10">
                                                    <img src={item.img} alt="Shoes" className="rounded-xl" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.description}</p>
                                                    <div className='divider w-1/2 mx-auto my-0'></div>
                                                    <p>${item.price}</p>
                                                    <div className='gap-2'>
                                                        <p className='w-full px-4 border-2 border-orange-600 rounded-lg text-orange-600'>DeliveryC. {item.deliveryStatus}</p>
                                                        <p className='w-full px-4 border-2 bg-sky-500 text-white rounded-lg'>{item.offerStatus}$ Discount</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>)
            }
        </div>
    );
};

export default Category;