import { useEffect } from "react";
import Category from "../../../components/Category/Category";
import Carousel from "../Carousel/Carousel";

const HomeMain = () => {
 useEffect(() => {
    fetch('productsData.json')
    .then(res => res.json())
    .then(data => console.log(data))
 }, [])
    return (
        <div>
            <div className="sm:flex mt-0">
                <div className="sm:w-3/4">
                    <Carousel></Carousel>
                </div>
                <div className="h-96 carousel-vertical rounded-box m-auto">
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                    </div>
                    <div className="carousel-item h-full">
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                    </div>
                </div>
            </div>
            {/* Categor */}
            <Category></Category>
        </div>
    );
};

export default HomeMain;