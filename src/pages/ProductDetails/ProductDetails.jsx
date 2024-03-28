import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";

const ProductDetails = () => {
    const { _id } = useParams();
    // const paramsId = router._id;
    // console.log(_id )
    const loadedProduct = useData();

    useEffect(() => {
        fetch(`http://localhost:5173/product/product-details/${_id}`)
            .then(res => res.json())
            .then(data => console.log(data, "S-npData"))
    }, [])

    // console.log(loadedProduct)
    // const smart = loadedProduct[0].filter(item => item._id === `${_id}`);

    // console.log(loadedProduct, "Sting");

    return (
        <div className="pt-20">
            <h2>This is the product details page.</h2>
        </div>
    );
};

export default ProductDetails;