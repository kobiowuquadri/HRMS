import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getAllJobs } from '../../API/apiCalls'

function Jobs () {
  const [jobs, getJobs] = useState([])

  const handleJobs = async () => {
    const response = await getAllJobs()
    console.log(response.data)
    getJobs(response.data.jobs)

  }

  useEffect(() => {
    handleJobs()
  }, [])
  return (
    <div className='row container-fluid'>
      <h4 className='text-center text-white fw-bold fs-3 p-4'>All Career Opportunities.</h4>
      {jobs.map((job, index) => (
        <div key={index} className='mb-3 mb-md-0 col-lg-6 col-12 p-2'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'><b>Job Title:</b> {job.jobTitle}</h5>
              <p className='card-text'><b>Job Description: </b>{job.jobDescription}</p>
              <p className='card-text'><b>Company: </b>{job.companyName}</p>
              <ul className='list-unstyled d-flex gap-2'>
                <li><b>Date: </b></li>
                <li>{job.startDate}</li> -
                <li>{job.endDate}</li>
              </ul>
              <Link to={'/dashboard/applyforjob'} className='btn btn-primary'>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Jobs
