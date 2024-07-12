import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const ObsnestSecret = ({ children }) => {
    const { user } = useContext(AuthContext);
    console.log(user)
    if (user) {
        return children;
    }
    return <Navigate to="/nest/login"></Navigate>
}

export default ObsnestSecret;