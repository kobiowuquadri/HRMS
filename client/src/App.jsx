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
        <Route path='/admin' element={<ProtectedRoutes />}>
          <Route index element={<AdminLogin />}></Route>
          <Route path='register' element={<ViewJobs />} />
          <Route path='dashboard' element={<Apply />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
