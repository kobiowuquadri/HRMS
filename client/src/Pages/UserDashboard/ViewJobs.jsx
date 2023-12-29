import React from 'react'
import Sidebar from './Sidebar'
import Jobs from '../../Components/Jobs/Jobs'

function ViewJobs() {
  return (
    <div className='board'>
      <Sidebar/>
      <div className='main__board'>
      <Jobs/>
      </div>
       
    </div>
  )
}

export default ViewJobs