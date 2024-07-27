import useCart from "../../../components/hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
            <h2>You Have Added {cart.length} Obsnest Item For Obsnesest Delivery</h2>
        </div>
    );
};

export default MyCart;