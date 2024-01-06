import { useState, useContext } from 'react'
import menuIcon from '../.././assets/icon-menu.svg'
import closeIcon from '../.././assets/icon-close.svg'
import './header.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import UserContext from '../../Context/userContext'

function Header () {
  const [toggle, setToggle] = useState(false) 
  const { authUser, logout } = useContext(UserContext)


  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <>
      <div id='navcard' className={toggle ? 'show' : ''}>
        <img id='close' src={closeIcon} onClick={() => setToggle(false)}></img>
        <ul>
          <Link to='/about'>
            <a href='#about'>About</a>
          </Link>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
          {authUser ? (
             <>
                <Link to='dashboard'>Dashboard</Link>
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
             </>
            ) : (
              <>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
              </>
            )}
        </ul>
      </div>

      <header className='header_home'>
        <Link id='logo' to='/'>
          DeHireventures
        </Link>

        <nav id='navbar'>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact us</a>
            </li>
            {authUser ? (
             <>
                <Link to='dashboard'>Dashboard</Link>
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
             </>
            ) : (
              <>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
              </>
            )}
          </ul>
        </nav>
        <img
          src={menuIcon}
          onClick={() => setToggle(true)}
          id='menuBar'
          alt=''
        />
      </header>
    </>
  )
}

export default Header
