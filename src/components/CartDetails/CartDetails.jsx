import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../hooks/useCart";

const CartDetails = ({ item, isLoading }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!item) {
        return <p>Nothing to show due to loading error</p>;
    }

    const { _id, img, name, brandName, description, color, deliveryStatus, price, offerStatus } = item;

    // Add Cart Handler
    const handleAddToCart = () => {
        console.log(item);
        // To do: If User not in login, redirect in login page: and if user is not in login- he can not add product in cart
        if (user && user.email) {
            const selectedItem = { selectedId: _id, name, img, brandName, description, color, deliveryStatus, price, offerStatus, email: user.email };
            fetch('https://obsnest-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        // toDo : need to add confirmation swal
                        console.log("Added new item");
                    } else {
                        // toDo : need to added a decline showing message by swal
                        console.error("Failed to add item");
                    }
                })
                .catch(error => console.error("Error adding item:", error));
        } else {
            console.log("Something went wrong. Please login first");
        }
    };

    return (
        <div>
            <div className="md:flex">
                <figure>
                    <img className="w-[700px] p-4 rounded-3xl" src={img} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>By {brandName}</p>
                    <div className="divider"></div>
                    <p>{description}</p>
                    <p>Color: {color}</p>
                    <p>Delivery Charge: {deliveryStatus}</p>
                    <div className="flex">
                        <p className="text-yellow-800 font-semibold">Price: {price}</p>
                        <p>Offer Status: {offerStatus}</p>
                    </div>
                </div>
                <div className="card-actions md:mt-20 mb-8 justify-center pt-5 pr-6">
                    <input onClick={handleAddToCart} className="btn bg-yellow-400 w-52 text-black" type="button" value="Add To Cart" />
                </div>
            </div>
        </div>
    );
};

export default CartDetails;