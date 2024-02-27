// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Carousel from "../Carousel/Carousel";
import SideSwiper from "../Carousel/SiceSwiper/SideSwiper";

const HomeMain = () => {

    // const [productsData, setData] = useState([])

    // useEffect(() => {
    //     fetch('productsData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(productsData)
    //         })
    // }, [productsData])
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