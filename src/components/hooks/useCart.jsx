import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { isPending, refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://obsnest-server.vercel.app/carts?email=${user?.email}`)
            const retu = response.json();
            console.log(retu)
            return retu;                                
        }
    })
    return [isPending, refetch, cart]
};
export default useCart;