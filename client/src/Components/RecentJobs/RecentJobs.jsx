import React, { useEffect, useState } from 'react'
import { getTopSixRecentJobs } from '../../API/apiCalls'

function RecentJobs () {
  const [recentJobs, getRecentJobs] = useState([])

  const handleRecentJobs = async () => {
    const response = await getTopSixRecentJobs()
    const { recentJobs } = response.data
    getRecentJobs(recentJobs)
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };


  useEffect(() => {
    handleRecentJobs()
  }, [])
  return (
    <div className='row container-fluid'>
      <h4 className='text-center text-white fw-bold fs-3 p-4'>Recent Jobs</h4>
      {recentJobs.map((job, index) => (
        <div key={index} className='mb-3 mb-md-0 col-lg-6 col-12 p-2'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'><b>Job Title:</b> {job.jobTitle}</h5>
              <p className='card-text'><b>Job Description: </b>{truncateDescription(job.jobDescription, 150)}</p>
              <p className='card-text'><b>Company: </b>{job.companyName}</p>
              <ul className='list-unstyled d-flex gap-2'>
                <li><b>Date: </b></li>
                <li>{job.startDate} - {job.endDate}</li>
              </ul>
              <Link to={`/dashboard/single-job/${job._id}`} className='btn btn-primary'>
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
