import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import Cart from '../Cart/Cart';

const Category = ({ smart, kitchen, plastic, electronic, fashion_beauty }) => {
    // const [, setProductData] = useState([{ smart }, { kitchen }, { plastic }, { electronic }, { fashion_beauty }]);

    const productData = [{ smart }, { kitchen }, { plastic }, { electronic }, { fashion_beauty }]
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
                                    <Cart item={item}></Cart>
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