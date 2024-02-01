
const CategoryCart = ({ key, items, title }) => {
    // console.log(items, title)
    return (
        <div>

            {
                items.map(item => {
                    <div
                        key={key}
                        className="carousel-item w-56 md:w-96 h-72 card bg-base-100 shadow-xl image-full"
                    ><h2 className="text-7xl">anything</h2></div>
                    console.log(item.name)
                })
            }

            <div className="carousel-item w-56 md:w-96 h-72 card bg-base-100 shadow-xl image-full">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}!</h2>
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