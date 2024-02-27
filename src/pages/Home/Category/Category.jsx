import CategoryCart from "./CategoryCart";
import useData from "../../../components/Hooks/useData";



const Category = () => {
    const [data] = useData()

    return (
        <div>
                <CategoryCart
                    items={data}
                ></CategoryCart>
        </div>
    );
};

export default Category;