import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'

function SingleJob () {
  const [jobDetails, setJobDetails] = useState('')
  const { id } = useParams()

  const handleJob = async () => {
    try {
      const response = await axios.get(
        `https://hrms-server-gilt.vercel.app/api/v1/single-job/${id}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('userToken')
            )}`,
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(response.data)
      setJobDetails(response.data.singleJob)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleJob()
  })

  return (
    <div className='board'>
      <Sidebar />
      <div className='main__board text-white vh-100 d-flex flex-column align-items-start p-5'>
        <h1>{jobDetails.jobTitle}</h1>
        <p>{jobDetails.jobDescription}</p>
        <p>{jobDetails.companyName}</p>
        <p>{jobDetails.startDate}</p>
        <p>{jobDetails.endDate}</p>
        <Link className='btn btn-primary' to={`/dashboard/apply-job/${jobDetails._id}`}>Apply Now</Link>
      </div>
    </div>
  )
}

export default SingleJob
