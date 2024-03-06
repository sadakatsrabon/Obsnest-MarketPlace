import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import Cart from '../Cart/Cart';

const Category = (params) => {
    const smart = params.smart
    const kitchen = params.kitchen
    const plastic = params.plastic
    const electronic = params.electronic
    const fashion_beauty = params.fashion_beauty
    // console.log(smart)
    return (
        <div>
            <div className="text-center">
                <div>
                    <h2 className="text-4xl font-semibold">{smart[0]?.category}</h2>
                    {
                        smart.map((item =>

                            <Swiper
                                key={item.name}
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
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                                <SwiperSlide> <Cart></Cart> </SwiperSlide>
                            </Swiper>

                        ))
                    }
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{kitchen[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{plastic[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{electronic[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{fashion_beauty[0]?.category}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;