import React from 'react'
import teams from '../../Assets/Data/team.json'

function Team () {
  return (
    <div className='container p-5'>
      <h1 className='p-4 text-center fw-bold'>Meet Our Team</h1>
      <div className='row row-cols-1 row-cols-lg-4 pb-3'>
        {teams.map((team, index) => {
          return (
            <div
              data-aos='flip-left'
              key={index}
              className='d-flex justify-content-center shadow p-5 flex-column text-center align-items-center'
            >
              <p>
                <img width={'150px'} src={team.image} alt='my-image' />
              </p>
              <p>{team.name}</p>
              <p>{team.desc}</p>
              <button className='btn btn-blue text-white'>Connect</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
