import React from 'react'

const card = [
  {
    image: '../../../public/Assets/team2.png',
    name: 'Quadri Kobiowu',
    desc: 'A Software Developer'
  },
  {
    image: '../../../public/Assets/team1.png',
    name: 'Simon Azike',
    desc: 'A project Manager'
  },
  {
    image: '../../../public/Assets/team2.png',
    name: 'Simo Mohammad',
    desc: 'An PHP developer'
  },
  {
    image: '../../../public/Assets/team1.png',
    name: 'Sodiq Kobiowu',
    desc: 'Frontend Developer'
  }
]

function Team () {
  return (
      <div className='container p-5'>
      <h1 className='p-4 text-center fw-bold'>Meet Our Team</h1>
          <div className='row row-cols-1 row-cols-lg-4 pb-3' >
            {card.map((team, index) => {
                return (
                    <div data-aos="flip-left" key={index} className='d-flex justify-content-center shadow p-5 flex-column text-center align-items-center'>
                        <p><img width={'150px'} src={team.image} alt="my-image" /></p>
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
