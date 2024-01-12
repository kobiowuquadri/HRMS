import React, { useState, useEffect } from 'react'
import UserContext from './userContext'
import axios from 'axios'

function UserContextProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('userToken'))
  )

  useEffect(() => {
    const storedUserToken = JSON.parse(localStorage.getItem('userToken'));
    if (storedUserToken !== authUser) {
      setAuthUser(storedUserToken);
    }
  }, []);


  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/user-logout', null, {
        withCredentials: true
      })
      setAuthUser(null)
      localStorage.removeItem('userToken')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  const logoutAdmin = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/admin-logout', null, {
        withCredentials: true
      })
      // setAuthUser(null)
      localStorage.removeItem('adminToken')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, logout, authUser, logoutAdmin, admin, setAdmin }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
