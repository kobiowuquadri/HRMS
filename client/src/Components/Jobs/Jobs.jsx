import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Jobs () {
  const [jobs, getJobs] = useState([])

  const handleJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/all-jobs')
      console.log(response)
      const { jobs } = response?.data
      getJobs(jobs)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    handleJobs()
  }, [])
  return (
    <div className='row container-fluid'>
      <h4>All Jobs</h4>
      {jobs.map((job, index) => (
        <div key={index} className='mb-3 mb-md-0 col-lg-6 col-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{job.jobTitle}</h5>
              <p className='card-text'>{job.jobDescription}</p>
              <p className='card-text'>{job.companyName}</p>
              <ul>
                <li>{job.startDate}</li>
                <li>{job.endDate}</li>
              </ul>
              <a href='#' className='btn btn-primary'>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Jobs
