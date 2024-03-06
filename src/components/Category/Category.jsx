import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import Cart from '../Cart/Cart';

const Category = (params) => {
    const { smart, kitchen, plastic, electronic, fashion_beauty } = params;

    return (
        <div>
            <div className="text-center">
                <div>
                    <h2 className="text-4xl font-semibold">{smart[0]?.category}</h2>
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
                            smart.map((item =>
                                <SwiperSlide key={item.name}> <Cart SmartItem={item}></Cart> </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{kitchen[0]?.category}</h2>
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
                            kitchen.map((item =>
                                <SwiperSlide key={item.name}> <Cart kitchenItem={item}></Cart> </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{plastic[0]?.category}</h2>
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
                            plastic.map((item =>
                                <SwiperSlide key={item.name}> <Cart plasticItem={item}></Cart> </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{electronic[0]?.category}</h2>
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
                            electronic.map((item =>
                                <SwiperSlide key={item.name}> <Cart electronicItem={item}></Cart> </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{fashion_beauty[0]?.category}</h2>
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
                            fashion_beauty.map((item =>
                                <SwiperSlide key={item.name}> <Cart fashion_beautyItem={item}></Cart> </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Category;