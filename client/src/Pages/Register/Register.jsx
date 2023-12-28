import React, { useState } from 'react'
import loginBg from '../../assets/login_bg.jpeg'
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
import { userRegister } from '../../API/apiCalls'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

function Register () {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [currentJob, setCurrentJob] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [qualification, setQualification] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [DOB, setDOB] = useState('')

  const navigate = useNavigate()

  const handleRegister = async () => {
  
    await userRegister({
      email,
      name,
      password,
      currentJob,
      jobDescription,
      qualification,
      phoneNumber,
      DOB
    })
    toast.success("Registration Successfully")
    navigate('/login')
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
                Sign Up
              </p>
              {/* <form onSubmit={handleRegister}> */}
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
                    label='Your name'
                    name='name'
                    id='form3'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Current Job Title'
                    name='currentJob'
                    id='form3'
                    type='text'
                    onChange={(e) => setCurrentJob(e.target.value)}
                    value={currentJob}
                  />
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Description'
                    name='jobDescription'
                    id='form3'
                    type='text'
                    onChange={(e) => setJobDescription(e.target.value)}
                    value={jobDescription}
                  />
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Qualification'
                    name='qualification'
                    id='form3'
                    type='text'
                    onChange={(e) => setQualification(e.target.value)}
                    value={qualification}
                  />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Phone Number'
                    name='phoneNumber'
                    id='form3'
                    type='number'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Date of Birth'
                    name='DOB'
                    id='form3'
                    type='date'
                    onChange={(e) => setDOB(e.target.value)}
                    value={DOB}
                  />
                </div>

                <MDBBtn
                  className='mb-4'
                  size='lg'
                  style={{ backgroundColor: '#0174BE' }}
                  onClick={handleRegister}
                >
                  Sign Up
                </MDBBtn>
              {/* </form> */}
              <p>Already have an account? <Link to={'/login'}>Login</Link></p>
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

export default Register
