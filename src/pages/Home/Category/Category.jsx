import { useState } from "react";
import CategoryCart from "./CategoryCart";
import { useEffect } from "react";



const Category = () => {
    const [loadedData, setLoadedData] = useState([]);

    // const phone = loadedData.filter(item => item.category === 'phone')
    // console.log(phone)

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
                items={loadedData}
            ></CategoryCart>
        </div>
    );
};

export default Category;