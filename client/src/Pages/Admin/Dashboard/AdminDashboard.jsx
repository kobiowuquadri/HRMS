import React, { useEffect, useState } from 'react';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { getAllUsers, getAllJobs } from '../../../API/adminApiCalls';
import ReactApexChart from 'react-apexcharts';

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState('');
  const [totalJobs, setTotalJobs] = useState('');

  const handleGetAllUsers = async () => {
    try {
      const response = await getAllUsers();
      const totalusers = response.data.allUsers;
      setTotalUsers(totalusers);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const handleGetAllJobs = async () => {
    try {
      const response = await getAllJobs();
      const totaljob = response.data.jobsCount;
      setTotalJobs(totaljob);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    handleGetAllUsers()
    handleGetAllJobs()
  }, []);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  const chartSeries = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <div className='board'>
      <AdminSidebar />
      <div className='main__board'>
        <h1 className='text-white'>Welcome to the admin dashboard</h1>
        <div className='flex d-flex justify-content-around gap-5 my-3'>
          <div style={{background:"grey"}} className='d-flex w-50  flex-column justify-content-center fs-2 fw-bold align-items-center border-2 text-white rounded'>
            <p>{totalUsers}</p>
            <p>Users</p>
          </div>
          <div style={{background:"grey"}} className='d-flex flex-column w-50 justify-content-center fs-2 fw-bold align-items-center border-2 text-white rounded'>
            <p>{totalJobs}</p>
            <p>Jobs</p>
          </div>
        </div>
        <div style={{background:"grey"}}>
          <ReactApexChart className="p-5" style={{background:"white"}} options={chartOptions} series={chartSeries} type='area' height={350} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AdminDashboard;
