import React from 'react'
import Header from '../../Components/Header/Header'
import './home.scss'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import Team from '../../Components/Team/Team'
import RecentJobs from '../../Components/RecentJobs/RecentJobs'

function Home () {
  return (
    <div>
      <Header />
      <div className='home_layout'>
        <div className='home_content'>
          <h1 id='home_typer'>
            <span>Easy </span>
            <span>
              <TypeAnimation
                sequence={[
                  'Job Hunt', // Types 'One'
                  1000, // Waits 1s
                  'Explore', // Deletes 'One' and types 'Two'
                  2000,
                  () => {
                    console.log('Sequence completed')
                  }
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
                style={{ color: '#0174BE', textAlign: 'center' }}
              />
            </span>
          </h1>

          <p>
            DeHireventures is a mobile-optimized platform for seamless hiring
            and job hunting, offering easy search, application, and profile
            creation for <em style={{ color: '#0174BE' }}>job seekers</em> and
            &nbsp; <em style={{ color: '#0174BE' }}>HR administrators.</em>
          </p>
          <div className='btns'>
            <button id='getStartedBtn'>
              <Link to={'/login'} className='text-white'>
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
      <About />
      <RecentJobs />
      <Team />
      <Footer />
    </div>
  )
}

export default Home
