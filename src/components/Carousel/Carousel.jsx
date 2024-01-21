
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img from "../../assets/img.jpg"


const Carousel = () => {
    return (
        <div className=''>
            <div className=''>
                <>
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
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img className='max-w-fit' src={img} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Carousel;