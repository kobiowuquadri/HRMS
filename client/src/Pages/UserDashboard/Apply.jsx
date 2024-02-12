import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
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
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Apply () {
  const [address, setAddress] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  // const [userId, setUserId] = useState(null)

  const { id } = useParams()

  // Submit Application

  const navigate = useNavigate()

  const userToken = JSON.parse(localStorage.getItem('userToken'))
  const handleApply = async () => {
    try {
      const response = await axios.post(
        `https://hrms-server-gilt.vercel.app/api/v1/user-apply/${id}`,
        {
          resume,
          address,
          coverLetter
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
          }
        }
      )

      console.log(response.data)

      if (response.data.success) {
        toast.success('Application Successfully Submitted')
        navigate('/dashboard/jobs')
      } else {
        // Handle server-side errors or display user-friendly messages
        toast.error(response.data.message || 'Error submitting application')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast.error('An unexpected error occurred. Please try again later.')
    }
  }

  return (
    <div className='board'>
      <Sidebar />
      <div className='main__board'>
        <MDBContainer fluid>
          <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                  <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Apply for Job
                  </p>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='envelope me-3' size='lg' />
                    <MDBInput
                      label='Enter your Address'
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      name='address'
                      id='form2'
                      type='text'
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    <textarea
                      className='form-control'
                      placeholder='About yourself'
                      rows={4}
                      value={resume}
                      onChange={e => setResume(e.target.value)}
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    <textarea
                      className='form-control'
                      placeholder='Write your Cover Letter'
                      rows={4}
                      value={coverLetter}
                      onChange={e => setCoverLetter(e.target.value)}
                    />
                  </div>

                  <MDBBtn
                    className='mb-4'
                    size='lg'
                    onClick={handleApply}
                    style={{ backgroundColor: '#0174BE' }}
                  >
                    Apply
                  </MDBBtn>
                </MDBCol>

                {/* <MDBCol
                  md='10'
                  lg='6'
                  className='order-1 order-lg-2 d-flex align-items-center'
                >
                  <MDBCardImage src={bgApply} fluid />
                </MDBCol> */}
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  )
}

export default Apply
