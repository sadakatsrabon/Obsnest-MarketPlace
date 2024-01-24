import { useEffect, useState } from "react";

const Category = () => {
    const [loadedData, setLoadedData] = useState([])
    console.log(loadedData);

    const smart_collection = loadedData.filter(Category === 'smart_collection')

    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])
    return (
        <div>
            <h2>{smart_collection}</h2>
            <h2 className="pt-20">Here will show our Obsnest category</h2>
        </div>
    );
};

export default Category;