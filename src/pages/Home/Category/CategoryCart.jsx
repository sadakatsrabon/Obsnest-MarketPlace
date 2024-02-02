import { useEffect, useState } from "react";

const CategoryCart = () => {
    const [loadedData, setLoadedData] = useState([]);


    const phone = loadedData.filter(item => item.category === 'phone')
    console.log(phone)
    // console.log(loadedData);


    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data);
            })
    }, [])
    // console.log(items, title)
    return (
        <div>


            {/* {
                items.map((item) => {
                    console.log(item)
                    return (
                        <div key={key} className="carousel-item w-56 md:w-96 h-72 card bg-base-100 shadow-xl image-full">
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
                    <h2 className="card-title">Category!</h2>
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