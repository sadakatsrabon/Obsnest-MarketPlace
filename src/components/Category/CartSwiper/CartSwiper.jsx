import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CartSwiper = ({ category }) => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    category.data.map(((item) =>
                        <div key={item._id}>
                            <SwiperSlide>
                                <Link to={`product/product-details/${item._id}`} className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10 hover:scale-110 duration-75 ">
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
        </div>
    );
};

export default CartSwiper;