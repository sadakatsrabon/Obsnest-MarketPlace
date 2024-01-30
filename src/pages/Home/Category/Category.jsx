import { useState } from "react";
import CategoryCart from "./CategoryCart";
import { useEffect } from "react";



const Category = () => {
    const [loadedData, setLoadedData] = useState([]);


    const mobile = loadedData.filter(item => item.category === 'phone')
    console.log(mobile)
    // console.log(loadedData);


    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data);
            })
    }, [])

    return (
        <div>
            <CategoryCart
            item = {mobile}
            ></CategoryCart>
        </div>
    );
};

export default Category;