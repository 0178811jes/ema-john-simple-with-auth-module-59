import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../contexts/Usercontext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation();

    if(loading){
        return <div>Loading...</div>
    }

    if(user && user.id){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;