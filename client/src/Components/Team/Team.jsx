import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import myPics from '../../Assets/Images/profileme.png'
import simonPics from '../../Assets/Images/dev_simon-removebg-preview.png'
import './team.scss'

function Team () {
  return (
    <div className='container p-5'>
      <h1 className='p-4 text-center fw-bold'>OUR TEAM</h1>
      <div className='row row-cols-md-2 row-cols-lg'>
        <div
          data-aos='flip-left'
          className='d-flex justify-content-center shadow flex-column text-center align-items-center p-4'
        >
          <p>
            <img width={'200px'} src={myPics} alt='my-image' />
          </p>
          <p classname='fw-bold'>Quadri Kobiowu</p>
          <h4>Fullstack Developer</h4>
          <p style={{ fontStyle: 'italic' }}>
            <em>
              <q>
                Experienced Fullstack Developer passionate about creating
                seamless user experiences. Specializing in M.E.R.N Stack with a
                focus on captivating design, performance optimization, and
                accessibility. Actively seeking opportunities to contribute
                expertise and make a positive impact.
              </q>
            </em>
          </p>
          <div className='social-media d-flex gap-4'>
            <a
              href='https://github.com/kobiowuquadri'
              target='_blank'
              id='media_logo'
              className='d-flex align-items-center gap-1'
              rel='noopener noreferrer'
            >
              <BsGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/quadri-kobiowu-955313233/'
              target='_blank'
              id='media_logo'
              className='d-flex align-items-center gap-1'
              rel='noopener noreferrer'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://wa.me/2349157750858'
              target='_blank'
              id='media_logo'
              className='d-flex align-items-center gap-1'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div
          data-aos='flip-left'
          className='d-flex justify-content-center shadow flex-column text-center align-items-center p-4'
        >
          <p>
            <img width={'200px'} src={simonPics} alt='my-image' />
          </p>
          <p classname='fw-bold'>Simon Azike</p>
          <h4>Project Manager</h4>
          <p style={{ fontStyle: 'italic' }}>
            <em>
              <q>Proficient in programming languages like Python, JavaScript, HTML, and CSS, capable of working independently or in a team. Experienced software project management with high energy, excellent communication skills, Linux administration, and interest in technology trends.</q>
            </em>
          </p>
          <div className='social-media d-flex gap-4'>
            <a
              href='https://github.com/samzik234/HRMS'
              target='_blank'
              id='media_logo'
              className='d-flex align-items-center gap-1'
              rel='noopener noreferrer'
            >
              <BsGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/simon-azike-941864265/'
              target='_blank'
              id='media_logo'
              className='d-flex align-items-center gap-1'
              rel='noopener noreferrer'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://wa.me/2347047923970'
              target='_blank'
              id='media_logo'
              className='d-flex align-items-center gap-1'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
