import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RecentJobs () {
  const [recentJob, setRecentJobs] = useState([])

  const handleRecentJobs = async () => {
    try {
      const response = await axios.get(
        'https://hrms-server-gilt.vercel.app/api/v1/recent-jobs',
        {
          withCredentials: true
        }
      )
      console.log(response.data)
      setRecentJobs(response.data.recentJobs)
    } catch (err) {
      console.log(err)
    }
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...'
    }
    return description
  }

  useEffect(() => {
    handleRecentJobs()
  }, [])

  
  return (
    <div className='row container-fluid'>
      <h4 className='text-center fw-bold fs-3 p-4'>Recent Jobs</h4>
      {recentJob.map((job, index) => (
        <div key={index} className='mb-3 mb-md-0 col-lg-6 col-12 p-2 shadow-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>
                <b>Job Title:</b> {job.jobTitle}
              </h5>
              <p className='card-text'>
                <b>Job Description: </b>
                {truncateDescription(job.jobDescription, 150)}
              </p>
              <p className='card-text'>
                <b>Company: </b>
                {job.companyName}
              </p>
              <ul className='list-unstyled d-flex gap-2'>
                <li>
                  <b>Date: </b>
                </li>
                <li>
                  {job.startDate} - {job.endDate}
                </li>
              </ul>
              <Link
                to={`/dashboard/single-job/${job._id}`}
                className='btn btn-primary'
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentJobs
