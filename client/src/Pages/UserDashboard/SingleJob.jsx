import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function SingleJob () {
  const [jobDetails, setJobDetails] = useState('')
  const { id } = useParams()

  const handleJob = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/single-job/${id}`,
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
    <div>
      <h1>{jobDetails.jobTitle}</h1>
      <p>{jobDetails.jobDescription}</p>
      <p>{jobDetails.companyName}</p>
      <p>{jobDetails.startDate}</p>
      <p>{jobDetails.endDate}</p>
      <button className='btn btn-primary'>Apply Now</button>
    </div>
  )
}

export default SingleJob
