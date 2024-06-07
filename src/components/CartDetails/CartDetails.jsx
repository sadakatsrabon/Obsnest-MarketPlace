import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CartDetails = ({ item, isLoading }) => {

    const { user } = useContext(AuthContext);

    if (isLoading) {
        return <p>Loading ...</p>
    }

    if (!item) {
        return <p>Nothing to show Due to loadign error</p>
    }
    const { _id, img, name, brandName, description, color, deliveryStatus, price, offerStatus } = item;

    // Add Cart Handler
    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            const selectedItem = { selectedId: _id }
            fetch('https://obsnest-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json)
                .then(data => {
                    if (data.insertedId) {
                        console.log("Added New date")
                    }
                })
        } else (console.log("Somthing went wrong. Please login first"))
    }

    return (
        <div>
            <div className="md:flex">
                <figure><img className="w-[700px] p-4 rounded-3xl" src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>By {brandName}</p>
                    <div className="divider"></div>
                    <p>{description}</p>
                    <p>Color: {color}</p>
                    <p>Delivery Charge: {deliveryStatus}</p>
                    <div className="flex">
                        <p className="text-yellow-800 handleAddToCartfont-semibold">Price: {price}</p>
                        <p>Offer Status: {offerStatus}</p>
                    </div>

                </div>
                <div className="card-actions md:mt-20 mb-8 justify-center pt-5 pr-6">
                    {/* ToDo: Need to setup add to cart dynamicly */}
                    <input onClick={handleAddToCart} className="btn bg-yellow-400 w-52 text-black" type="submit" value="Add To Cart" />
                    {/* <button onClick={handleAddToCart} className="btn w-52 text-black">Add To Cart</button> */}
                </div>
            </div>
        </div>
    );
};

export default CartDetails;