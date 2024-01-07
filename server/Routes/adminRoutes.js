const express = require('express')
const adminRouter = express.Router()
const {adminRegister, adminLogin,adminCreateJobs, getAllUsers, totalJobs} = require('../Controllers/adminControllers')
const authorizedAdmin = require('../Middlewares/adminMiddleware')


// Routes
// User register
adminRouter.post('/admin-register', adminRegister)

// User login
adminRouter.post('/admin-login', adminLogin)

// Get All Users login
adminRouter.get('/admin-all-users', authorizedAdmin,  getAllUsers)

// Create Jobs
adminRouter.post('/admin-create-jobs', authorizedAdmin, adminCreateJobs)


// Get All Jobs
// adminRouter.get('/all-jobs', allJobs)

// Get All Jobs
adminRouter.get('/admin-total-jobs', authorizedAdmin, totalJobs)

module.exports = adminRouter