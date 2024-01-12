import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
  import { adminCreateJobs } from '../../../API/adminApiCalls'

function CreateJobs() {
    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [ endDate, setEndDate] = useState('')


    const navigate = useNavigate()

    const handlecreateJob = async () => {
      try {
        const response = await adminCreateJobs({
          jobTitle,
          jobDescription,
          companyName,
          startDate,
          endDate
        });
    
        console.log(response.data);
        
        if (response.status === 200 || response.status === 201) {
          // Assuming a successful response status code
          navigate('/admin-dashboard');
          toast.success('Job created Successfully');
        } else {
          toast.error('Job Create Failed');
        }
      } catch (error) {
        console.error('Job Create failed', error);
        toast.error('Job Create Failed');
      }
    };
    

  return (
    <>
     <MDBContainer
      id='login_user'
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
                Create Job
              </p>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Job Title'
                  name='jobTitle'
                  id='form2'
                  type='text'
                  onChange={e => setJobTitle(e.target.value)}
                  value={jobTitle}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Job Description'
                  name='jobDescription'
                  id='form2'
                  type='text'
                  onChange={e => setJobDescription(e.target.value)}
                  value={jobDescription}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Company Name'
                  name='companyName'
                  id='form2'
                  type='text'
                  onChange={e => setCompanyName(e.target.value)}
                  value={companyName}
                />
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='Start Date'
                  name='startate'
                  id='form2'
                  type='date'
                  onChange={e => setStartDate(e.target.value)}
                  value={startDate}
                />
              </div>
              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon fas icon='envelope me-3' size='lg' />
                <MDBInput
                  label='End Date'
                  name='endDate'
                  id='form2'
                  type='date'
                  onChange={e => setEndDate(e.target.value)}
                  value={endDate}
                />
              </div>

              
              <MDBBtn
                className='mb-4'
                size='lg'
                style={{ backgroundColor: '#0174BE' }}
                onClick={handlecreateJob}
              >
               Create Job
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </>
  )
}

export default CreateJobs