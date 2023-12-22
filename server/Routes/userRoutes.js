const express = require('express')
const userRouter = express.Router()
const {userRegister, userLogin} = require('../Controllers/userController')

// Routes
// User register
userRouter.post('/user-register', userRegister)
// User login
userRouter.post('/user-login', userLogin)

module.exports = userRouter
