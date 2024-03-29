import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";

const ProductDetails = () => {
    const { _id } = useParams();
    // const paramsId = router._id;
    const loadedProduct = useData();
    console.log(loadedProduct)
    
    // console.log(_id )
    // console.log(loadedProduct);

    return (
        <div className="pt-20">
            <h2>This is the product details page.</h2>
        </div>
    );
};

export default ProductDetails;