import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { isPending, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://obsnest-server.vercel.app/carts?.email=${user.email}`)
            return response.json();
        }
    })
    return [isPending, cart]
};
export default useCart;