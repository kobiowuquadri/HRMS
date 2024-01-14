import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAllJobs } from '../../API/apiCalls';
import UserContext from '../../Context/userContext';


function Jobs() {
  const  { setGetJob, getJob } = useContext(UserContext)
  console.log(getJob)
  const [jobs, setJobs] = useState([]);

  const handleJobs = async () => {
    const response = await getAllJobs();
    setJobs(response.data.jobs);
    setGetJob(response.data.jobs)
  };

  useEffect(() => {
    handleJobs();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className='row container-fluid'>
      <h4 className='text-center text-white fw-bold fs-3 p-4'>All Career Opportunities.</h4>
      {jobs.map((job, index) => (
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
  );
}

export default Jobs;
