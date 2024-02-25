import CategoryCart from "./CategoryCart";
import useData from "../../../components/Hooks/useData";



const Category = () => {
    // const [data, setdata] = useState([]);

    // const phone = data.filter(item => item.category === 'phone')
    // console.log(phone)

    // console.log(data);

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