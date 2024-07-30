import useCart from "../../../components/hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    // Calculate Total Price Using Reduce Function. 
    const accumulator = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>
            <h2>You Have Added {cart.length} Obsnest Item For Obsnesest Delivery</h2>
            <h2>You Have To Pay {accumulator} $</h2>
        </div>
    );
};

export default MyCart;