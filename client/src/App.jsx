import './App.css'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
