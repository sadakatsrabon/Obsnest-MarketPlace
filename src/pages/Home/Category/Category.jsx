import CategoryCart from "./CategoryCart";
import useData from "../../../components/Hooks/useData";
import { data } from "autoprefixer";



const Category = () => {
    // const [loadedData, setLoadedData] = useState([]);

    // const phone = loadedData.filter(item => item.category === 'phone')
    // console.log(phone)

    // console.log(loadedData);

    const loadedData = useData(data)
    console.log(loadedData);

    return (
        <div>
            <CategoryCart
                items={loadedData}
            ></CategoryCart>
        </div>
    );
};

export default Category;