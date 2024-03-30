import { useState, useEffect } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(loading, "loading condition");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/productsData.json');
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return [data, loading];
};

export default useData;





