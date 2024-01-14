const express = require('express')
const userRouter = express.Router()
const {userRegister, userLogin, allJobs, logout, applyForJobs, viewAppliedJobs, updateUser, jobSingleView} = require('../Controllers/userController')
const multer = require('multer')
const authorizedUser = require('../Middlewares/userMiddleware')

// Set up multer storage
const storage = multer.memoryStorage(); // This stores the file in memory as a Buffer
const upload = multer({ storage});


// Routes
// User register
userRouter.post('/user-register', userRegister)
// User login
userRouter.post('/user-login', userLogin)

// All Jobs
userRouter.get('/all-jobs', authorizedUser, allJobs)

// Update Users
userRouter.put('/update-user/:id', authorizedUser, updateUser)

// View Single Job
userRouter.get('/single-job/:id', authorizedUser, jobSingleView)

// Logout
userRouter.post('/user-logout',  logout)

// User Application
userRouter.post('/user-apply', authorizedUser, upload.single('resume'),  applyForJobs)

userRouter.get('/getapplied-jobs/:id', authorizedUser, viewAppliedJobs)

module.exports = userRouter

// http://localhost:5000/api/v1/update-user/659813107b395d5dd53f3d53

// {
// "email" : "augusterernser2023@gmail.com",
// "name" : "Auguster Ernser",
// "password" : "Auguster123",
// "currentJob": "Fullstack Developer",
// "jobDescription" : "I'm a passionate full-stack developer.",
// "qualification" : "High school",
// "DOB" : "10-12-2024",
// "phoneNumber" : 2349145678909
// }
