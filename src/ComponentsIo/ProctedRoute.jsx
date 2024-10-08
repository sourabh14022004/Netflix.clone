import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProctedRoute = ({children}) => {
    const {user} = UserAuth;


    if (!user) {
        return <Navigate to="/"/>
    }
    return children
};

export default ProctedRoute;
