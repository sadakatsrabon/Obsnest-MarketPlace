import { useState } from "react";
import CategoryCart from "./CategoryCart";
import { useEffect } from "react";


const Category = () => {
    const [loadedData, setLoadedData] = useState([]);
    console.log(loadedData);
    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data);
            })
    }, [])
    return (
        <div>
            <CategoryCart></CategoryCart>
        </div>
    );
};

export default Category;