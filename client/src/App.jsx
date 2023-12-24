import './App.css'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/UserDashboard/Dashboard'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
