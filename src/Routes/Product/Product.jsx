

import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";
import { useEffect, useState } from "react";

const Product = () => {
    const [selectedData, setSelectedData] = useState([]);

    const data = useData()
    const allDatas = data[0];
    // console.log(allDatas);


    const passedCategory = useParams();
    const selectedCategory = passedCategory.category;
    console.log(selectedCategory);


    useEffect(() => {
        const filteredData = allDatas.filter((item) => item.category === selectedCategory);
        setSelectedData(filteredData);
    }, [allDatas, selectedCategory]);

    useEffect(() => {
        console.log(selectedData);
    }, [selectedData]);

    // console.log(selectedData, 'string');
    return (
        <div className='pt-20'>
            <h2 className='text-3xl'>This is th product Page</h2>
        </div>
    );
};

export default Product;
