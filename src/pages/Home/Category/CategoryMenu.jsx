import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const CategoryMenu = () => {

    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default CategoryMenu;