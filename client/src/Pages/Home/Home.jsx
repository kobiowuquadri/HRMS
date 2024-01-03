import React from 'react'
import Header from '../../Components/Header/Header'
import './home.scss'
import bgImage from '../../assets/bg.jpg'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Jobs from '../../Components/Jobs/Jobs'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <Header />
      <div className='home_layout'>
        <div className='home_content'>
          <h1>
            Easy&nbsp;
            <TypeAnimation
              sequence={[
                'Job Hunting...', // Types 'One'
                1000, // Waits 1s
                'Explore', // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                'Career Advancement...', // Types 'Three' without deleting 'Two'
                5000,
                () => {
                  console.log('Sequence completed')
                }
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{ color: '#0174BE', textAlign: 'center' }}
            />
          </h1>
          <p>
            DHireventures is a mobile-optimized platform for seamless hiring and
            job hunting, offering easy search, application, and profile creation
            for <em  style={{ color: '#0174BE'}}>job seekers</em> and &nbsp; <em  style={{ color: '#0174BE'}}>HR administrators.</em>
          </p>
          <div className='btns'>
            <button id='getStartedBtn'><Link to={'/login'} className='text-white'>Get Started</Link></button>
          </div>
        </div>
        {/* <div className='home_image'>
          <img src={bgImage} alt='' />
        </div> */}
      </div>
      <About />
      <Jobs />
      <Footer />
    </div>
  )
}

export default Home
