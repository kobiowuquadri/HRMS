const express = require('express')
const userRouter = express.Router()
const {userRegister, userLogin, allJobs, logout, applyForJobs, viewAppliedJobs, updateUser, jobSingleView} = require('../Controllers/userController')
const authorizedUser = require('../Middlewares/userMiddleware')


// Routes
// User register
userRouter.post('/user-register', userRegister)
// User login
userRouter.post('/user-login', userLogin)

// All Jobs
userRouter.get('/all-jobs', authorizedUser, allJobs)

// Update Users
userRouter.put('/update-user/:id', authorizedUser, updateUser)

userRouter.post('/user-apply/:id', authorizedUser, applyForJobs)


// View Single Job
userRouter.get('/single-job/:id', authorizedUser, jobSingleView)

// Logout
userRouter.post('/user-logout',  logout)



userRouter.get('/getapplied-jobs/:id', authorizedUser, viewAppliedJobs)

module.exports = userRouter
