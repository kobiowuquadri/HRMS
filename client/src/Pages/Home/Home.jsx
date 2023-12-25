import React from 'react'
import Header from '../../Components/Header/Header'
import './home.scss'
import bgImage from '../../assets/home_bg.jpeg'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Jobs from '../../Components/Jobs/Jobs'

function Home () {
  return (
    <div>
      <Header />
      <div className='home_layout'>
        <div className='home_content'>
          <h1>
            Your Gateway to <span>Seamless Hiring </span>,{' '}
            <span id='secure'>and Job Hunting.</span>
          </h1>
          <p>
            DHireventures is a mobile-optimized platform for seamless hiring and
            job hunting, offering easy search, application, and profile creation
            for job seekers and HR administrators.
          </p>
          <div className='btns'>
            <button id='getStartedBtn'>Get Started</button>
            <button id='bookDemo'>Book a Demo</button>
          </div>
        </div>
        <div className='home_image'>
          <img src={bgImage} alt='' />
        </div>
      </div>
      <About/>
      <Jobs/>
      <Footer />
    </div>
  )
}

export default Home
