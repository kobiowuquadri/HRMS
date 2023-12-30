import './App.css'
import Home from './Pages/Home/Home'
import {Routes, Route, Outlet} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/UserDashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import ViewJobs from './Pages/UserDashboard/ViewJobs'
import Apply from './Pages/UserDashboard/Apply'

function App() {

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Outlet />}>
            <Route index element={<Dashboard/>}></Route>
            <Route path='jobs' element={<ViewJobs />}></Route>
            <Route path='applyforjob' element={<Apply />}></Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
