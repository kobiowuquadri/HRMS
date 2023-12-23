import React, {useState} from 'react'
import loginBg from '../../assets/login_bg.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit'
import { userLogin } from '../../API/apiCalls'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
  
    await userLogin({
      email,
      password
    })
    navigate('/dashboard')
  }
  
    return (
      <MDBContainer
        fluid
        className='d-flex min-vh-100 align-items-center justify-content-center'
      >
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md='10'
                lg='6'
                className='order-2 order-lg-1 d-flex flex-column align-items-center'
              >
                <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                  LogIn
                </p>
  
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput
                    label='Your Email'
                    name='email'
                    id='form2'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
  
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Password'
                    name='password'
                    id='form3'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
  
                <MDBBtn
                  className='mb-4'
                  size='lg'
                  style={{ backgroundColor: '#0174BE' }}
                  onClick={handleLogin}
                >
                  Login
                </MDBBtn>
              </MDBCol>
  
              <MDBCol
                md='10'
                lg='6'
                className='order-1 order-lg-2 d-flex align-items-center'
              >
                <MDBCardImage src={loginBg} fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
}

export default Login