import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";
import { useEffect, useState } from "react";
import SingleCart from "../../components/SingleCart/SingleCart";
import CartDetails from "../../components/CartDetails/CartDetails";

const ProductDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const { _id } = useParams();
    const [loadedProduct, isLoading] = useData();
    // console.log(isLoading);

    useEffect(() => {
        if (loadedProduct && loadedProduct.length > 0) {
            const selectedProduct = loadedProduct.find(item => item._id == _id);
            setSelectedItem(selectedProduct);
        }
    }, [_id, loadedProduct]);

    useEffect(() => {
        // console.log(selectedItem);
        // console.log(selectedItem && 'Data founded' || 'Can not find data');
    }, [selectedItem]);

    return (
        <div className="pt-20">
            {
                isLoading ? <p>Loangin...</p> :
                    <CartDetails
                        item={selectedItem}
                        isLoading={isLoading}
                    ></CartDetails>
            }
        </div>
    );
};

export default ProductDetails;