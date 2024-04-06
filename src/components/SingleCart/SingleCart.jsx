import { Link } from "react-router-dom";


const SingleCart = ({ item, isLoading }) => {

    if (isLoading) {
        return <p>Loading....</p>
    }

    if (!item) {
        return <p>No item available</p>;
    }

    const { name, img, brandName, category, price, description, color, offerStatus, deliveryStatus } = item;

    return (
        <>
            {!isLoading &&
                <div>
                    <p className="text-center font-bold">Category: {category}</p>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <div>
                            <Link to={`/product/product-details/${item._id}`}>
                                <figure><img className=" hover:scale-110 duration-75" src={img} alt="Movie" /></figure>
                            </Link>
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

                                <div className="card-actions justify-center pt-5 pr-6">
                                    <button className="btn bg-yellow-400 w-52 text-black">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SingleCart;