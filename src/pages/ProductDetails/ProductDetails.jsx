import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const { _id } = useParams();
    const loadedProduct = useData();

    useEffect(() => {
        if (loadedProduct && loadedProduct.length > 0) {
            const selectedProduct = loadedProduct.find(item => item._id === _id);
            setSelectedItem(selectedProduct);
            // console.log(selectedItem);
        }
    }, [_id, loadedProduct]);


    useEffect(() => {
        // This will log the updated value of selectedItem
        console.log(selectedItem);
    }, [selectedItem]);




    // console.log(_id )
    // console.log(loadedProduct);




    return (
        <div className="pt-20">
            <h2>This is the product details page id no:{_id} form {loadedProduct[0].length} data.</h2>
        </div>
    );
};

export default ProductDetails;