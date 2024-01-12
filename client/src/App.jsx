import './App.css'
import { useState, useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/UserDashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import ViewJobs from './Pages/UserDashboard/ViewJobs'
import Apply from './Pages/UserDashboard/Apply'
import ProtectedRoutes from './Utils/ProtectedRoutes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AdminLogin from './Pages/Admin/Login/AdminLogin'
import AdminRegister from './Pages/Admin/Register/AdminRegister'
import ProtectedAdminRoutes from './Utils/adminProtectedRoutes'
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard'

function App () {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <ToastContainer
        style={{
          '--toastify-color-progress-bar': '#B3B3B3'
        }}
      />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<ProtectedRoutes />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='jobs' element={<ViewJobs />} />
          <Route path='applyforjob' element={<Apply />} />
        </Route>
        <Route path='/admin-login' element={<AdminLogin />}></Route>
        <Route path='/admin-signup' element={<AdminRegister />}></Route>
        <Route path='/admin-dashboard' element={<ProtectedAdminRoutes />}>
          <Route index element={<AdminDashboard />} />
          <Route path='create-jobs' element={<ViewJobs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
