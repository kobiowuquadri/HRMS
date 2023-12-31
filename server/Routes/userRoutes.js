const express = require('express')
const userRouter = express.Router()
const {userRegister, userLogin, logout, applyForJobs, viewAppliedJobs} = require('../Controllers/userController')
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
// User Application
userRouter.post('/user-apply', authorizedUser, upload.single('resume'),  applyForJobs)

userRouter.get('/getapplied-jobs/:_id', authorizedUser, viewAppliedJobs)

module.exports = userRouter
