import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit'
import UserContext from '../../Context/userContext'
import profileImage from '../../Assets/Images/profileImage-1707418520644.jpg'
import { TypeAnimation } from 'react-type-animation'
import { Outlet, Link } from 'react-router-dom'

function Dashboard () {
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <div className='board'>
      <Sidebar />
      <div className='main__board'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='text-white py-2'>
            Hey, Welcome
            <TypeAnimation
              sequence={[' ' + user.name + '!', 1000, ' ', 2000]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{ color: '#fff', textAlign: 'center' }}
            />
          </h1>
          <Link
            to={`/dashboard/update-profile/${user._id}`}
            className='btn btn-primary'
          >
            Update Profile
          </Link>
        </div>
        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className='py-5'>
            {/* <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className='bg-light rounded-3 p-3 mb-4'>
                  <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                    <a href='#'>User</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow> */}

            <MDBRow>
              <MDBCol lg='4'>
                <MDBCard className='mb-4'>
                  <MDBCardBody className='text-center'>
                    <MDBCardImage
                      src={profileImage}
                      alt='avatar'
                      className='rounded-circle'
                      style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                      fluid
                    />

                    {/* <p>{`http://localhost:5000/uploads/${user.path}`}</p> */}
                    <p className='text-muted mb-1'>{user.currentJob}</p>
                    <p className='text-muted mb-4'>House 10, Canada Ontario.</p>
                    {/* <div className='d-flex justify-content-center mb-2'>
                      <MDBBtn>Follow</MDBBtn>
                      <MDBBtn outline className='ms-1'>
                        Message
                      </MDBBtn>
                    </div> */}
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className='mb-4 mb-lg-0'>
                  <MDBCardBody className='p-0'>
                    <MDBListGroup flush className='rounded-3'>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBCardText> Company Name :</MDBCardText>
                        <MDBCardText className='text-muted'>
                          CapacityBay
                        </MDBCardText>
                      </MDBListGroupItem>
                      {/* <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                          <MDBIcon
                            fab
                            icon='github fa-lg'
                            style={{ color: '#333333' }}
                          />
                          <MDBCardText>DeHireVentures</MDBCardText>
                        </MDBListGroupItem> */}
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBCardText className='text-dark'>
                          Qualification :{' '}
                        </MDBCardText>
                        <MDBCardText className='text-muted'>
                          {user.qualification}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBCardText className='text-dark'>
                          Phone Number :{' '}
                        </MDBCardText>
                        <MDBCardText className='text-muted'>
                          {user.phoneNumber}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBCardText className='text-dark'>
                          Date of Birth :{' '}
                        </MDBCardText>
                        <MDBCardText className='text-muted'>
                          {user.DOB}
                        </MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg='8'>
                <MDBCard className='mb-4'>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>
                          Full Name :{' '}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {user.name}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>
                          Email :{' '}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {user.email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>
                          Current JobTitle :{' '}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {user.currentJob}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>
                          Description :{' '}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          {user.jobDescription}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                  </MDBCardBody>
                </MDBCard>
                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard
