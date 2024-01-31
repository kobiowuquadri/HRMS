const { default: mongoose } = require('mongoose')
const adminModel = require('../Models/adminModel')
const jobsModel = require('../Models/createJobs')
const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const period = 1000 * 60 * 60 * 24 * 3

const adminRegister = async (req, res) => {
  try {
    const { email, name, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const existingAdmin = await adminModel.findOne({ email })
    if (existingAdmin) {
      return res
        .status(409)
        .json({ sucess: false, message: 'Email already in use' })
    }
    const newAdmin = adminModel({
      email,
      name,
      password: hashPassword
    })
    const savedAdmin = await newAdmin.save()
    res
      .status(201)
      .json({
        success: true,
        message: 'Admin Created Successfully',
        savedAdmin
      })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const isAdmin = await adminModel.findOne({ email })
    if (!isAdmin) {
     return res.status(401).json({ success: false, message: 'Admin not found!' })
    }
    const isPassword = await bcrypt.compare(password, isAdmin.password)
    if (!isPassword) {
     return res.staus(401).json({ success: false, message: 'Incorrect Password' })
    }
    jwt.sign(
      { id: isAdmin._id },
      process.env.SECRET,
      { expiresIn: '1d' },
      async (err, token) => {
        if (err) {
          throw new Error(err)
        }
        res.cookie('adminId', isAdmin._id, { maxAge: period, httpOnly: true })
        res.status(200).json({
          success: true,
          message: 'Admin Login Successfully',
          isAdmin,
          token
        })
      }
    )
  } catch (err) {
    console.error(err)
     return res.status(404).json({
      success: false,
      message: err.message
    })
  }
}

// Addmin create Jobs

const adminCreateJobs = async (req, res) => {
  try {
    const { jobTitle, jobDescription, companyName, endDate } =
      req.body

      const existingJob = await jobsModel.findOne({jobDescription})
      if(existingJob){
        return res.status(404).json({
          success: false,
          message: "Job already exist."
        })
      }
    const newJob = jobsModel({
      jobTitle,
      jobDescription,
      companyName,
      endDate
    })
    const savedJob = await newJob.save()
    res
      .status(201)
      .json({ success: true, message: 'Job Created Successfully', savedJob })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}

// total jobs
const totalJobs = async (req, res) => {
  try {
    const jobsCount = await jobsModel.countDocuments()
    res
      .status(200)
      .json({ success: true, message: 'Total Jobs Successful', jobsCount })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}

//  total users

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.countDocuments()
    res
      .status(202)
      .json({ success: true, message: 'View All Users Succesfully', allUsers })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}


// Get Jobs

const getJobs = async (req, res) => {
  try {
      const jobs = await jobsModel.find()
      res
      .status(202)
      .json({ success: true, message: 'View All Jobs Succesfully', jobs })
  }
  catch(err){
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find()
    res.status(202).json({success: true, message: "View all users successfully", users})

  }
  catch(err){
    console.error(err)
    res.status(404).json({
      success: false,
      msg: err.message
    })
  }
}










// logout admin

const logoutAdmin = (req, res) => {
  res.cookie('adminId', '', {maxAge: 0, httpOnly: true})
  res.status(200).json({success: true, message: "Logged out Succcessfully"})
}

module.exports = {
  adminRegister,
  adminLogin,
  adminCreateJobs,
  getAllUsers,
  totalJobs,
  logoutAdmin,
  getJobs,
  getUsers
}
