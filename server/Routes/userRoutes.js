const express = require('express')
const userRouter = express.Router()
const {userRegister, userLogin, logout, applyForJobs} = require('../Controllers/userController')
const { storage } = require('../storage/storage')
const multer = require('multer')
const upload = multer({storage})

// Routes
// User register
userRouter.post('/user-register', userRegister)
// User login
userRouter.post('/user-login', userLogin)
// User Application
userRouter.post('/user-apply', upload.single('resume') , applyForJobs)

module.exports = userRouter
