

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
                    <p>{category}</p>
                    <figure><img src={img} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{brandName}</p>
                        <p>{description}</p>
                        <p>Price: {price}</p>
                        <p>Color: {color}</p>
                        <p>Offer Status: {offerStatus}</p>
                        <p>Delivery Status: {deliveryStatus}</p>


                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SingleCart;