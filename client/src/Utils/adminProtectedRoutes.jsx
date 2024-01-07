import React, {useState, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'


function ProtectedAdminRoutes () {
    const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem('adminToken')))

    useEffect(() => {
        setIsAdmin(JSON.parse(localStorage.getItem('adminToken')))
    })

    return isAdmin ? <Outlet/> : <Navigate to='/admin-login'/>
}

export default ProtectedAdminRoutes