// import { useState } from "react";
// import { useEffect } from "react";

// const useData = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch('productsData.json')
//             .then(res => res.json())
//             .then(data => {
//                 setData(data)
//                 setLoading(false);
//             })
//     }, [])
//     return [data, loading]
// }
// export default useData;




import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  return [data, loading, error];
};

export default useData;
