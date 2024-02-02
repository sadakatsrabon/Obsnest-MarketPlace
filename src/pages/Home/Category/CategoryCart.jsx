
const CategoryCart = ({ items }) => {
    console.log(items)

    const phone = items.filter(item => item.category === 'phone')
    const electronic = items.filter(item => item.category === 'electronic')
    const fashion_beauti = items.filter(item => item.category === 'fashion_beauti')
    const home_applience = items.filter(item => item.category === 'home_applience')
    const kitchen = items.filter(item => item.category === 'kitchen')
    // console.log(phone)

    return (
        <div>
            {/* {
                loadedData.map((item) => {
                    console.log(item)
                    return (
                        <div className="carousel-item w-56 md:w-96 h-72 card bg-base-100 shadow-xl image-full">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            } */}

            <div className="carousel-item w-56 md:w-96 h-72 card bg-base-100 shadow-xl image-full">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{'title'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryCart;