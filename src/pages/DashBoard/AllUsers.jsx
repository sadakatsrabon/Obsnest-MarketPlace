import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        querykey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://obsnest-server.vercel.app/obsnestusers')
            return res.json();
        }

    });
    return (
        <div>
            This is the all users page.
            <br />
            Total users :  {users.length}
        </div>
    );
};

export default AllUsers;