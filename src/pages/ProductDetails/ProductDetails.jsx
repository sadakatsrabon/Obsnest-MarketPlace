import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";

const ProductDetails = () => {
    const router = useParams();
    const paramsId = router._id;
    // console.log(paramsId)
    const loadedProduct = useData();

    console.log(loadedProduct)
    // const smart = loadedProduct[0].filter(item => item._id === `${_id}`);

    // console.log(loadedProduct, "Sting");

    return (
        <div className="pt-20">
            <h2>This is the product details page.</h2>
        </div>
    );
};

export default ProductDetails;