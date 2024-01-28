
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Obsnet Category</title>
            </Helmet>
        </div>
    );
};

export default CategoryMenu;