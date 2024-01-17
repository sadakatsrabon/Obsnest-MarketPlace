import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import './styles.css';
import 'swiper/css/effect-creative';


const TopRetedProdects = () => {
    return (
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide>Item Category -1</SwiperSlide>
                <SwiperSlide>Item Category -2</SwiperSlide>
                <SwiperSlide>Item Category -3</SwiperSlide>
                <SwiperSlide>Item Category -4</SwiperSlide>
                <SwiperSlide>Item Category -5</SwiperSlide>
                <SwiperSlide>Item Category -6</SwiperSlide>
                <SwiperSlide>Item Category -7</SwiperSlide>
                <SwiperSlide>Item Category -8</SwiperSlide>
                <SwiperSlide>Item Category -9</SwiperSlide>
            </Swiper>
    );
};

export default TopRetedProdects;