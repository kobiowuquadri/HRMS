import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../Register/register.scss'
import UserContext from '../../Context/userContext'

function UpdateProfile () {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [currentJob, setCurrentJob] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [qualification, setQualification] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [DOB, setDOB] = useState('')

  const { user } = useContext(UserContext)

  const navigate = useNavigate()

  // Update Profile

  const updateProfile = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/update-user/${user._id}}`,
        {
          email,
          name,
          currentJob,
          jobDescription,
          qualification,
          phoneNumber,
          DOB
        },
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('userToken')
            )}`,
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(response)
      toast.success('Profile Updated Successfully')
      navigate('/dahsboard')
    } catch (err) {
        conole.log(err.message)
    }
  }

  return (
    <MDBContainer
      id='register_user'
      fluid
      className='d-flex min-vh-100 align-items-center justify-content-center'
    >
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='10'
              style={{ width: '500px' }}
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                Update Profile
              </p>
              {/* <form onSubmit={handleRegister}> */}
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Your Email'
                  name='email'
                  id='form2'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  value={user.email}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Your name'
                  name='name'
                  id='form3'
                  type='text'
                  onChange={e => setName(e.target.value)}
                  value={user.name}
                />
              </div>
              {/* <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput
                    label='Password'
                    name='password'
                    id='form3'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div> */}

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Current Job Title'
                  name='currentJob'
                  id='form3'
                  type='text'
                  onChange={e => setCurrentJob(e.target.value)}
                  value={user.currentJob}
                />
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Description'
                  name='jobDescription'
                  id='form3'
                  type='text'
                  onChange={e => setJobDescription(e.target.value)}
                  value={user.jobDescription}
                />
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Qualification'
                  name='qualification'
                  id='form3'
                  type='text'
                  onChange={e => setQualification(e.target.value)}
                  value={user.qualification}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Phone Number'
                  name='phoneNumber'
                  id='form3'
                  type='number'
                  onChange={e => setPhoneNumber(e.target.value)}
                  value={user.phoneNumber}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='lock me-3' size='lg' />
                <MDBInput
                  label='Date of Birth'
                  name='DOB'
                  id='form3'
                  type='date'
                  onChange={e => setDOB(e.target.value)}
                  value={user.DOB}
                />
              </div>

              <MDBBtn
                className='mb-4'
                size='lg'
                style={{ backgroundColor: '#0174BE' }}
                onClick={updateProfile}
              >
                Update Profile
              </MDBBtn>
              {/* </form> */}
            </MDBCol>

            <MDBCol
              md='10'
              lg='6'
              className='order-1 order-lg-2 d-flex align-items-center'
            >
              {/* <MDBCardImage src={loginBg} fluid /> */}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default UpdateProfile
