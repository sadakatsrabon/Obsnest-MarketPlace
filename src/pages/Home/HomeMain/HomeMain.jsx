import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Carousel from "../Carousel/Carousel";
import SideSwiper from "../Carousel/SiceSwiper/SideSwiper";
import useData from "../../../components/hooks/useData";
import Category from "../../../components/Category/Category";

const HomeMain = () => {

    const [loadedData, isLoading] = useData();
    const smart = loadedData.filter(item => item.category === 'smart');
    const kitchen = loadedData.filter(item => item.category === 'kitchen');
    const plastic = loadedData.filter(item => item.category === 'plastic');
    const electronic = loadedData.filter(item => item.category === 'electronic');
    const fashion_beauty = loadedData.filter(item => item.category === 'fashion_beauty')
    // console.log([loadedData], "console.log")




    if (isLoading) {
        return <div className='text-center mt-40'>
            <span className="loading loading-spinner w-10 text-secondary"></span>
            <span className="loading loading-spinner w-10 text-accent"></span>
            <span className="loading loading-spinner w-10 text-primary"></span>
            <span className="loading loading-spinner w-10 text-neutral"></span>
            <span className="loading loading-spinner w-10 text-info"></span>
            <span className="loading loading-spinner w-10 text-success"></span>
            <span className="loading loading-spinner w-10 text-warning"></span>
            <span className="loading loading-spinner w-10 text-error"></span>
        </div>
    }

    return (
        <div className="pt-14" >
            <Helmet>
                <title>Onsnest || Home</title>
            </Helmet>

            <div className="sm:flex mx-auto">
                <div className="sm:w-[75%]">
                    <Carousel></Carousel>
                </div>
                <SideSwiper></SideSwiper>
            </div>

            {/* Category */}
            <div>
                <SectionTitle
                    subHeadin={"Special Category By OBSNEST Market"}
                    heading={"Category"}
                ></SectionTitle>

                <Category
                    smart={smart}
                    kitchen={kitchen}
                    plastic={plastic}
                    electronic={electronic}
                    fashion_beauty={fashion_beauty}
                ></Category>

            </div>
        </div>
    );
};

export default HomeMain;