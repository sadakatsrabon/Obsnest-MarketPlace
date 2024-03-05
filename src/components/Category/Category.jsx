
const Category = (params) => {
    const smart = params.smart
    const kitchen = params.kitchen
    const plastic = params.plastic
    const electronic = params.electronic
    const fashion_beauty = params.fashion_beauty
    // console.log(smart)
    return (
        <div>
            <div className="text-center">
                <div>
                    <h2 className="text-4xl font-semibold">{smart[0]?.category}</h2>
                    {
                        smart.map((item => <div key={item?._id}>
                            {/* Carousel */}


                            {/* Cart */}
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            </div>
                        </div>))
                    }
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{kitchen[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{plastic[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{electronic[0]?.category}</h2>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">{fashion_beauty[0]?.category}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;