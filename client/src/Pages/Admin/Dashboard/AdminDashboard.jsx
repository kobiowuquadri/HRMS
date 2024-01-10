import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Sidebar/AdminSidebar'
import { getAllUsers } from '../../../API/adminApiCalls'


function AdminDashboard () {
  const [totalUsers, setTotalusers] = useState('')

  const handleGetAllUsers = async () => {
    const response = await getAllUsers()
    console.log(response.data)
    const total = response.data.allUsers
    setTotalusers(total)
  }

  useEffect(() => {
    handleGetAllUsers()
  })
  return (
    <div className='board'>
      <AdminSidebar />
      <div className='main__board'>
        <h1 className='text-white'>Welcome to the admin dashboard</h1>
        <div className='flex d-flex justify-content-around w-100 gap-5'>
          <div className='d-flex w-50 flex-column bg-primary justify-content-center fs-2 fw-bold align-items-center border-2 text-white rounded'>
            <p>{totalUsers}</p>
            <p>Users</p>
          </div>
          <div className='d-flex w-50 flex-column bg-primary justify-content-center fs-2 fw-bold align-items-center border-2 text-white rounded'>
            <p>{totalUsers}</p>
            <p>Total Users</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default AdminDashboard
