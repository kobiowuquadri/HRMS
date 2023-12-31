import axios from 'axios'
import { useContext } from 'react'
import UserContext from '../Context/userContext'

export const userRegister = async payload => {
  const response = await axios.post(
    'http://localhost:5000/api/v1/user-register',
    payload,
    {
      withCredentials: true
    }
  )
  console.log(response)
  return response
}

export const userLogin = async payload => {
  const response = await axios.post(
    'http://localhost:5000/api/v1/user-login',
    payload,
    {
      withCredentials: true
    }
  )
  console.log(response?.data)
  const { token } = response.data
  localStorage.setItem('userToken', JSON.stringify(token))

  const isUser = JSON.parse(localStorage.getItem("userToken"));
  console.log(isUser)
  return response
}


// View all Jobs

export const getAllJobs = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/all-jobs', {
      withCredentials: true,
      headers : {
        Accept: 'application/json',
        Authorization : `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data)
    return response
}

// Submit Application

export const applyForJob = async payload => {
  const response = await axios.post(
    'http://localhost:5000/api/v1/user-apply',
    payload,
    {
      withCredentials: true
    }
  )
  return response
}

