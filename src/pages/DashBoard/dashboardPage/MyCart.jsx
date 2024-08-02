import Swal from "sweetalert2";
import useCart from "../../../components/hooks/useCart";

const MyCart = () => {
    const [cart, , refetch] = useCart();
    // console.log(cart)
    // Calculate Total Price Using Reduce Function. 
    const accumulator = cart.reduce((sum, item) => item.price + sum, 0);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    const handleDelete = item => {
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://obsnest-server.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div>
            <h2>You Have Added {cart.length} Obsnest Item For Obsnesest Delivery</h2>
            <h2>You Have To Pay {accumulator} $</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            cart.map((item, index) => <div key={item._id}>
                                <tr className="flex justify-evenly">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={item.img} alt="Obsnest IMG" />
                                                </div>
                                            </div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost bg-green-600 text-white btn-xs">Update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn bg-red-500 text-white btn-xs">X</button>
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