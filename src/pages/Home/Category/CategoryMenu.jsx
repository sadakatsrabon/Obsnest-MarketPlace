
import React, { useEffect, useState } from 'react';

const CategoryMenu = () => {

    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setLoadedData(data)
            })
    }, [])
    console.log(loadedData)
    return (
        <div>

        </div>
    );
};

export default CategoryMenu;