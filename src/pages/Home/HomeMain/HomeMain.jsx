import Carousel from "../Carousel/Carousel";
import LetestProduct from "../LetextProduct/LetestProduct";

const HomeMain = () => {
    return (
        <div className="flex">
            <div className="w-36">
                <Carousel></Carousel>
            </div>
            <div className="w-36">
                {/* <LetestProduct></LetestProduct> */}
                <h2 className="text-3xl">Obsnest Market Home Page-Main By SadakatHossainSrabon</h2>

            </div>
        </div>
    );
};

export default HomeMain;