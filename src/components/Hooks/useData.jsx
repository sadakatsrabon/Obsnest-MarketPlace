import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loadig, setLoading] = useState(true);
    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
                setLoading(false);
            })
    }, [])
    return [data]
}
export default useData;