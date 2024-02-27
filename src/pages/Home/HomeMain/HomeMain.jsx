// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Carousel from "../Carousel/Carousel";
import SideSwiper from "../Carousel/SiceSwiper/SideSwiper";
import useData from "../../../components/Hooks/useData";

const HomeMain = () => {

    const [loadedData] = useData()

    const phone = loadedData.filter(item => item.category === 'phone');
    const kitchen = loadedData.filter(item => item.category === 'kitchen');
    const plastic = loadedData.filter(item => item.category === 'plastic');
    const electronic = loadedData.filter(item => item.category === 'electronic');
    const fashion_beauty = loadedData.filter(item => item.category = 'fashion_beauty')

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
            <SectionTitle
                subHeadin={"Special Category By OBSNEST Market"}
                heading={"Category"}
            ></SectionTitle>
        </div>
    );
};

export default HomeMain;