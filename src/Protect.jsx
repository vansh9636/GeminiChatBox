import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const Protect = () => {
    const islogon = JSON.parse(localStorage.getItem('currentUser'));
    return (
        (islogon) ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default Protect