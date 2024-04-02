

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
                <div className="card card-side bg-base-100 shadow-xl">
                    <p>Category: {category}</p>
                    <figure><img className="w-96" src={img} alt="Movie" /></figure>
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


                        <div className="card-actions justify-center pt-5">
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                    <button className="btn uppercase">Back <br></br> To <br></br> Home</button>
                </div>
            }
        </>
    );
};

export default SingleCart;