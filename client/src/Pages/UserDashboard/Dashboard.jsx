import React from 'react'
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

function Dashboard() {
  return (
    <div className='board'>
       <Sidebar/>
       <div className='main__board'>
        <h1>Dashboard</h1>
        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className='py-5'>
            <MDBRow>
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
            </MDBRow>

            <MDBRow>
              <MDBCol lg='4'>
                <MDBCard className='mb-4'>
                  <MDBCardBody className='text-center'>
                    <MDBCardImage
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                      alt='avatar'
                      className='rounded-circle'
                      style={{ width: '150px' }}
                      fluid
                    />
                    <p className='text-muted mb-1'>Full Stack Developer</p>
                    <p className='text-muted mb-4'>
                      No 11, Akanbi akinpelu street.
                    </p>
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
                        <MDBIcon fas icon='globe fa-lg text-warning' />
                        <MDBCardText>https://dehireventures.com</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='github fa-lg'
                          style={{ color: '#333333' }}
                        />
                        <MDBCardText>DeHireVentures</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='twitter fa-lg'
                          style={{ color: '#55acee' }}
                        />
                        <MDBCardText>@dehireventures</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='instagram fa-lg'
                          style={{ color: '#ac2bac' }}
                        />
                        <MDBCardText>DeHireVentures</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                        <MDBIcon
                          fab
                          icon='facebook fa-lg'
                          style={{ color: '#3b5998' }}
                        />
                        <MDBCardText>DeHireVentures</MDBCardText>
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
                        <MDBCardText className='text-dark'>Full Name : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          Quadri Kobiowu
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Email : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          kobiowuq@gmail.com
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Current Job Title : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                           Fullstack Developer
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Description : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                        Develops and implements online marketing strategies to promote products or services. Utilizes tools such as social media, email marketing, and SEO to drive online visibility and increase customer engagement.
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Company Name : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          CapacityBay
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Qualification : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                          High School
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Phone Number : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                           +2349157750858
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm='3'>
                        <MDBCardText className='text-dark'>Date of Birth : </MDBCardText>
                      </MDBCol>
                      <MDBCol sm='9'>
                        <MDBCardText className='text-muted'>
                           10-12-2023
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    
                  </MDBCardBody>
                </MDBCard>
                 <hr/>
               
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
       </div>
    </div>
  )
}

export default Dashboard