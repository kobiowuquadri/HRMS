import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes () {
  const isUser = JSON.parse(localStorage.getItem('userToken'))
  console.log(isUser)
  return isUser ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
