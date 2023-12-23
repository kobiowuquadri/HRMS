import axios from 'axios'

export const userRegister = async (payload) => {
   const response = await axios.post('http://localhost:5000/api/v1/user-register', payload, {
     withCredentials: true
   })
   console.log(response)
   return response
}

export const userLogin = async (payload) => {
   const response = await axios.post('http://localhost:5000/api/v1/user-login', payload, {
     withCredentials: true
   })
   //  usertoken
  //  console.log(response?.data)
  //  const { token } = response?.data?.isUser
  //  console.log(token)
  //  const userToken = localStorage.setItem('userToken', JSON.stringify())
  //  console.log(response)
   return response
}