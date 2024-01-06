import React, {useState, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes () {
  const [isUser, setIsUser] = useState(JSON.parse(localStorage.getItem('userToken')));

  useEffect(() => {
    setIsUser(JSON.parse(localStorage.getItem('userToken')));
  }, []);

  return isUser ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoutes
