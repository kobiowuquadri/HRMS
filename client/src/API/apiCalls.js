import axios from 'axios'

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
  localStorage.setItem('userToken', JSON.stringify({token}))
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

// Admin API
