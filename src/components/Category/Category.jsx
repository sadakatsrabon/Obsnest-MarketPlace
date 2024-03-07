import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import Cart from '../Cart/Cart';

const Category = ({ smart, kitchen, plastic, electronic, fashion_beauty }) => {
    // const [, setProductData] = useState([{ smart }, { kitchen }, { plastic }, { electronic }, { fashion_beauty }]);

    const productData = [{ smart }, { kitchen }, { plastic }, { electronic }, { fashion_beauty }]
    //    console.log(productData)
    return (
        <div>
            {
                productData?.map((productItem, index) => <div key={index}
                    className="text-center">
                    <h2 className="text-4xl font-semibold">{"productItem.category"}</h2>
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
                            productData.map(((item, index) =>
                                <SwiperSlide key={index}>

                                    <div className="card w-96 bg-base-100 shadow-xl">
                                        <figure className="px-10 pt-10">
                                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{item.name}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                            <div className="card-actions">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>)
            }
        </div>
    );
};

export default Category;