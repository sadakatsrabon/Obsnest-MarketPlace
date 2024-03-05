
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


                            <div className="carousel w-full">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>


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