import useCart from "../../../components/hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart)
    // Calculate Total Price Using Reduce Function. 
    const accumulator = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>
            <h2>You Have Added {cart.length} Obsnest Item For Obsnesest Delivery</h2>
            <h2>You Have To Pay {accumulator} $</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    </thead>
                    <tbody>
                        {
                            cart.map((item) => <div key={item._id}>
                                <tr className="flex justify-evenly">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.img} alt="Obsnest IMG" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost bg-green-600 text-white btn-xs">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn bg-red-500 text-white btn-xs">X</button>
                                    </td>
                                </tr>
                            </div>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;