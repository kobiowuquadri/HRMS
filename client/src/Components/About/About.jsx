import React from 'react'
import bgImage from '../../assets/about_bg.jpeg'
import './about.scss'



function About() {
  return (
    <div id='about' className='about_me d-flex align-items-center justify-content-between px-5'>
        <div className='col'>
            <h1 className='display-5 fw-bold'>About DHireventures</h1>
            <p className='fs-4'>Welcome to DHireventures, where we redefine the future of hiring and job hunting through innovation, efficiency, and seamless user experiences. Our platform serves as a dynamic and centralized hub, empowering both job seekers and HR administrators to navigate the evolving landscape of talent acquisition effortlessly.</p>
        </div>
        <div className='col '>
            <img src={bgImage} className='img-fluid' alt="" />
        </div>
    </div>
  )
}

export default About