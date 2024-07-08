import React from 'react';
import { Navigate } from 'react-router-dom';
//import Loader from '../loader/Loader';

const ProtectedRoute = ({ children, isAdmin }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Assuming you store user role in localStorage

    const isAuthenticated = !!token;

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if(isAuthenticated) {
    if (isAdmin === true && userRole === 'admin') {
        return <Navigate to="/admin/upload" />;
    }
    }
    return children;
};

export default ProtectedRoute;
