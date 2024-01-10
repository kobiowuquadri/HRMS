import axios from "axios";


export const adminRegister = (payload) => {
  const response = axios.post('http://localhost:5000/api/v1/admin-register', payload, {
    withCredentials: true
  })

  return response
}

export const adminLogin = async payload => {
    const response = await axios.post(
      'http://localhost:5000/api/v1/admin-login',
      payload,
      {
        withCredentials: true
      }
    )
    console.log(response?.data)
    const { token } = response.data
    localStorage.setItem('adminToken', JSON.stringify(token))
  
    const isAdmin = JSON.parse(localStorage.getItem("adminToken"));
    console.log(isAdmin)
    return response
  }

export const getAllUsers = async () => {
  const response = await axios.get('http://localhost:5000/api/v1/admin-all-users', {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
       Accept: 'application/json',
       Authorization: `Bearer ${JSON.parse(localStorage.getItem('adminToken'))}`
    }
  })
  console.log(response.data)
  return response
}
export const getAllJobs = async () => {
  const response = await axios.get('http://localhost:5000/api/v1/admin-total-jobs', {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
       Accept: 'application/json',
       Authorization: `Bearer ${JSON.parse(localStorage.getItem('adminToken'))}`
    }
  })
  console.log(response.data)
  return response
}
