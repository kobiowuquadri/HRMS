const express = require('express')
const adminRouter = express.Router()
const {adminRegister, adminLogin,adminCreateJobs, getAllUsers} = require('../Controllers/adminControllers')

// Routes
// User register
adminRouter.post('/admin-register', adminRegister)

// User login
adminRouter.post('/admin-login', adminLogin)

// Create Jobs
adminRouter.post('/create-jobs', adminCreateJobs)

// Get All Users login
adminRouter.get('/all-users', getAllUsers)

module.exports = adminRouter