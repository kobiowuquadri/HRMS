import React, { useState, useEffect } from 'react'
import UserContext from './userContext'
import axios from 'axios'

function UserContextProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('userToken'))
  )

  useEffect(() => {
    // Check and update authUser when localStorage changes
    const storedUserToken = JSON.parse(localStorage.getItem('userToken'));
    if (storedUserToken !== authUser) {
      setAuthUser(storedUserToken);
    }
  }, []);  // <-- Removed authUser from the dependency array


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
  return (
    <UserContext.Provider value={{ user, setUser, logout, authUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
