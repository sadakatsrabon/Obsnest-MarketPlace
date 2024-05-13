import banner1 from '../../../../assets/bannerCarousel/sideBanner1.jpg'
import banner2 from '../../../../assets/bannerCarousel/sideBanner2.jpg'
import banner3 from '../../../../assets/bannerCarousel/sideBanner3.jpg'
import banner4 from '../../../../assets/bannerCarousel/sideBanner4.jpg'
import banner5 from '../../../../assets/bannerCarousel/sideBanner5.jpg'

const SideSwiper = () => {
    return (
        <div className="h-96 carousel-vertical m-auto rounded-2xl">
                    <div className="my-2">
                        <img className="mx-auto" src={banner1} />
                    </div>
                    <div className="my-2">
                        <img className="mx-auto" src={banner2} />
                    </div>
                    <div className="my-2">
                        <img className="mx-auto" src={banner3} />
                    </div>
                    <div className="my-2">
                        <img className="mx-auto" src={banner4} />
                    </div>
                    <div className="my-2">
                        <img className="mx-auto" src={banner5} />
                    </div>
                    <div className="my-2">
                        <img className="mx-auto" src={banner3} />
                    </div>
                    <div className="my-2">
                        <img className="mx-auto" src={banner1} />
                    </div>
                </div>
    );
};

export default SideSwiper;