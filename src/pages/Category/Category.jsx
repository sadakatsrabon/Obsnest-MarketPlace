import { useEffect, useState } from "react";

const Category = () => {
    const [loadedData, setLoadedData] = useState([])
    console.log(loadedData);

    const smart_collection = loadedData.filter(item => item.category === 'smart_collection')
    // console.log(smart_collection);

    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])
    return (
        <div className="pt-48">
            {
                smart_collection.map((item) => 
                    <div key={item._id}>
                        <h2>{item.name}</h2>
                    </div>
                )
            }
            <h2 className="">Here will show our Obsnest category</h2>
            <h2 className="">{smart_collection.name}</h2>
        </div>
    );
};

export default Category;