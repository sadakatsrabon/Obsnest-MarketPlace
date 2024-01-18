import TopRetedProdects from "../../../components/TopRetedProducts/TopRetedProdects";

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img from "../../../assets/img.jpg"


const Carousel = () => {
    return (
        <div className="md:flex m-0 my-10 p-0 w-96">
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img className="" src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img} alt="" />
                            <h2>carousel</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <TopRetedProdects></TopRetedProdects>
            </div>
        </div>
    );
};

export default Carousel;