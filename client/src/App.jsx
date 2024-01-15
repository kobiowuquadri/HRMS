import './App.css'
import { useState, useEffect, useContext, ErrorBoundary } from 'react'
import Home from './Pages/Home/Home'
import { Routes, Route} from 'react-router-dom'
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
import CreateJobs from './Pages/Admin/CretateJobs/CreateJobs'
import UpdateProfile from './Pages/UserDashboard/UpdateProfile'
import SingleJob from './Pages/UserDashboard/SingleJob'

// function ErrorFallback ({ error }) {
//   return (
//     <div>
//       <h2>Something went wrong:</h2>
//       <p>{error.message}</p>
//     </div>
//   )
// }

function App () {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  // const { user } = useContext(UserContext)

  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
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
          <Route path='update-profile/:id' element={<UpdateProfile />} />
          <Route path='single-job/:id' element={<SingleJob />} />
          <Route path='apply-job/:id' element={<Apply />} />
        </Route>
        <Route path='/admin-login' element={<AdminLogin />}></Route>
        <Route path='/admin-signup' element={<AdminRegister />}></Route>
        <Route path='/admin-dashboard' element={<ProtectedAdminRoutes />}>
          <Route index element={<AdminDashboard />} />
          <Route path='create-jobs' element={<CreateJobs />} />
          {/* <Route path='all-users' element={<ViewJobs />} /> */}
        </Route>
      </Routes>
    </>
    // </ErrorBoundary>
  )
}

export default App
