import React from 'react'
import bgImage from '../../Assets/Images/team_images.jpeg'
import './about.scss'
import { Link } from 'react-router-dom'

function About () {
  return (
    <div id='about' className='p-5'>
      <div className='about_me d-flex align-items-center gap-5 justify-content-between'>
        <div className='col'>
          <h4 className='display-6 fw-bold text-center p-2'>
            <i>About DeHireventures</i>
          </h4>
          <p data-aos="fade-up-right" className='fs-4 text-center' >
            Welcome to DeHireventures, where we redefine the future of hiring and
            job hunting through innovation, efficiency, and seamless user
            experiences. Our platform serves as a dynamic and centralized hub,
            empowering both job seekers and HR administrators to navigate the
            evolving landscape of talent acquisition effortlessly.
          </p>
          <p style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='btn btn-primary fs-6 btn-blue text-white'>
              <Link to={'/login'} className='text-white'>
                Get Hired
              </Link>
            </button>
          </p>
        </div>
        <div data-aos="fade-left" className='col' >
          <img src={bgImage}  className='img-fluid' alt='' />
        </div>
      </div>
    </div>
  )
}

export default About
