
import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";
import { useEffect, useState } from "react";
import SingleCart from "../../components/SingleCart/SingleCart";

const Product = () => {
    const [selectedData, setSelectedData] = useState([]);
    const [loading, setLoading] = useState(true);

    const data = useData();
    const allDatas = data[0];
    // console.log(allDatas);


    const passedCategory = useParams();
    const selectedCategory = passedCategory.category.toLocaleLowerCase();
    // console.log(selectedCategory);


    useEffect(() => {
        if (allDatas.length > 0 && selectedCategory.length > 0) {
            const filteredData = allDatas.filter((item) => item.category == selectedCategory);
            setSelectedData(filteredData);
            setLoading(false);
        }
        else {
            console.log('Nothing to console')
            setLoading(true)
        }
    }, [allDatas, selectedCategory]);

    useEffect(() => {
        console.log(selectedData);
    }, [selectedData]);

    if (loading) {
        return <div className="text-4xl">Loading...</div>;
    }

    return (
        <div className='pt-20'>
            <h2 className='text-3xl font-extrabold text-center'>Showing OBSNEST Data By Caegory :<span className="text-sky-500"> {selectedData.length > 0 ? selectedData[0].name : "Category"}</span></h2>

            <div className="md:grid grid-cols-2 pt-28">
                {
                    selectedData?.map((item) =>
                        <div key={item._id}>
                            <SingleCart
                                item={item}
                            ></SingleCart>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Product;
