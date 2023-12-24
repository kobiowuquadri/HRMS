const express = require('express')
const adminRouter = express.Router()
const {adminRegister, adminLogin,adminCreateJobs, getAllUsers, allJobs, totalJobs} = require('../Controllers/adminControllers')

// Routes
// User register
adminRouter.post('/admin-register', adminRegister)

// User login
adminRouter.post('/admin-login', adminLogin)

// Get All Users login
adminRouter.get('/all-users', getAllUsers)

// Create Jobs
adminRouter.post('/create-jobs', adminCreateJobs)


// Get All Jobs
adminRouter.get('/all-jobs', allJobs)

// Get All Jobs
adminRouter.get('/total-jobs', totalJobs)

module.exports = adminRouter