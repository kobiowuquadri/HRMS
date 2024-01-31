import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <MDBFooter bgColor='light' id='contact' className='text-center text-lg-start text-muted shadow-3 px-5 py-4'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between px-5 py-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='github' />
          </a>
        </div>
      </section> */}

      <section className='m-0 p-0'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                DeHireventures
              </h6>
              <p>
                DeHireventures is a mobile-optimized platform for seamless hiring
                and job hunting, offering easy search, application, and profile
                creation for job seekers and HR administrators.
              </p>
            </MDBCol>

            {/* <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Access</h6>
              <p>
                <Link to='/' className='text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link to='/register' className='text-reset'>
                  Register
                </Link>
              </p>
              <p>
                <Link to='/login' className='text-reset'>
                  Login
                </Link>
              </p>
              <p>
                <a href='#about' className='text-reset'>
                  About
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                DeHireventures@example.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          DeHireventures
        </a>
      </div>
    </MDBFooter>
  )
}
