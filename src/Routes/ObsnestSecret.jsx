import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ObsnestSecret = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-center mt-40'>
            <span className="loading loading-spinner w-10 text-secondary"></span>
            <span className="loading loading-spinner w-10 text-accent"></span>
            <span className="loading loading-spinner w-10 text-primary"></span>
            <span className="loading loading-spinner w-10 text-neutral"></span>
            <span className="loading loading-spinner w-10 text-info"></span>
            <span className="loading loading-spinner w-10 text-success"></span>
            <span className="loading loading-spinner w-10 text-warning"></span>
            <span className="loading loading-spinner w-10 text-error"></span>
        </div>
    }
    if (user) {
        return children;
    }
    // return < Navigate to="/nest/login" state={{from: location}} replace ></Navigate >
    return < Navigate to="/nest/login" state={{ from: location }} replace></Navigate >

}

export default ObsnestSecret;