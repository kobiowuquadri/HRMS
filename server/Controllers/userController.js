const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const appForJobsModel = require('../Models/applyForJbs')
const jobsModel = require('../Models/createJobs')
const path = require('path')

const period = 1000 * 60 * 60 * 24 * 3

const handleErrors = err => {
  console.log(err.message, err.code)
  let error = { email: '', password: '' }

  // validation errors
  if (err.message.includes('usermodels validation failed')) {
    console.log(
      Object.values(err.errors).forEach(({ properties }) => {
        error[properties.path] = properties.message
      })
    )
  }
  return error
}

const userRegister = async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      currentJob,
      jobDescription,
      qualification,
      DOB,
      phoneNumber
    } = req.body
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      return res
        .status(409)
        .json({ sucess: false, message: 'Email already in use' })
    }
    let hashPassword
    if (password) {
      hashPassword = await bcrypt.hash(password, 10)
    }
    const newUser = userModel({
      email,
      name,
      password: hashPassword,
      currentJob,
      jobDescription,
      qualification,
      DOB,
      phoneNumber
    })
    const savedUser = await newUser.save()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
      },
      from: 'kobiowuq@gmail.com'
    })

    const info = await transporter.sendMail({
      from: '"DeHireventures Team 👻" <kobiowuq@gmail.com>',
      to: email,
      subject: 'Welcome to DeHireventures',
      html: `
  <p>Hello ${name},</p>
  <p>Welcome to DeHireventures, where we redefine the future of hiring and job hunting through innovation, efficiency, and seamless user experiences.</p>
  <p>We are thrilled to inform you that your account has been successfully created. You can now access our platform and explore the plethora of opportunities waiting for you.</p>
  <p>To get started, please visit our login page:</p>
  <p><a href="https://hrms-client-self.vercel.app/login">Login to DeHireventures</a></p>
  <p>If you have any questions or need assistance, feel free to reach out to our support team. We are here to help you at every step of your journey.</p>
  <p>Thank you for choosing DeHireventures. We look forward to helping you achieve your career goals!</p>
  <p>Best regards,<br/>The DeHireventures Team</p>
  `
    })

    console.log('Message sent: %s', info.messageId)

    res
      .status(201)
      .json({ success: true, message: 'User Created Successfully', savedUser })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(422).json({
      success: false,
      errors
    })
  }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const isUser = await userModel.findOne({ email })
    if (!isUser) {
      return res
        .status(401)
        .json({ success: false, message: 'User not found!' })
    }
    const isPassword = await bcrypt.compare(password, isUser.password)
    if (!isPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Incorrect Password' })
    }
    jwt.sign(
      { id: isUser._id },
      process.env.SECRET,
      { expiresIn: '1d' },
      async (err, token) => {
        if (err) {
          throw new Error(err)
        }
        res.cookie('userId', isUser._id, { maxAge: period, httpOnly: true })
        res.status(200).json({
          success: true,
          message: 'User Login Successfully',
          isUser,
          token
        })
      }
    )
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

//  list all jobs

const allJobs = async (req, res) => {
  try {
    // Access the authenticated user ID using req.user
    const userId = req.user

    // Example: Do something with the user ID
    console.log('Authenticated User ID:', userId)

    const jobs = await jobsModel.find()
    res
      .status(200)
      .json({ success: true, message: 'View allJobs Successful', jobs })
  } catch (err) {
    console.error(err)
    res.status(404).json({ success: false, msg: err.message })
  }
}

const applyForJobs = async (req, res) => {
  try {
    const id = req.params.id
    const userId = req.user
    console.log(userId)
    const { address, coverLetter, resume } = req.body

    console.log('userId:', userId)
    console.log('address:', address)
    console.log('coverLetter:', coverLetter)
    console.log('resume:', resume)

    const user = await userModel.findById(userId)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    const hasApplied = user.appliedJobs.some(application =>
      application.job.equals(id)
    )

    if (hasApplied) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this job'
      })
    }

    const newApplication = new appForJobsModel({
      address,
      resume,
      coverLetter
    })

    const savedApplication = await newApplication.save()

    await userModel.findByIdAndUpdate(userId, {
      $push: {
        appliedJobs: {
          job: id,
          applicationStatus: 'pending',
          applicationDate: new Date()
        }
      }
    })
    res.status(202).json({
      success: true,
      message: 'Application Submitted Successfully',
      savedApplication
    })
  } catch (err) {
    console.error(err)
    console.log('message' + err.message)
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const viewAppliedJobs = async (req, res) => {
  try {
    const id = req.params._id
    const getJob = await appForJobsModel.findById(id)
    res
      .status(200)
      .json({ success: true, message: 'View Applied Jobs Successful', getJob })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
}

// User update profile

const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const {
      email,
      name,
      currentJob,
      jobDescription,
      qualification,
      DOB,
      phoneNumber
    } = req.body
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        email,
        name,
        currentJob,
        jobDescription,
        qualification,
        DOB,
        phoneNumber
      },
      { new: true }
    )
    res
      .status(202)
      .json({ success: true, message: 'Update User Successfully', updatedUser })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
}

// Job Single View
const jobSingleView = async (req, res) => {
  try {
    const id = req.params.id
    const singleJob = await jobsModel.findById(id)
    res.status(202).json({
      success: true,
      message: 'Single JOb View Successfully',
      singleJob
    })
  } catch (err) {
    console.log(err)
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
}

const getRecentJobs = async (req, res) => {
  try {
    const days = req.query.days || 7
    const fromDate = new Date(new Date() - days * 24 * 60 * 60 * 1000)
    const recentJobs = await jobsModel
      .find({ createdAt: { $gte: fromDate } })
      .sort({ createdAt: -1 })
      .limit(6)
    res.status(200).json({
      success: true,
      message: `Recent Jobs in the last ${days} days`,
      recentJobs
    })
  } catch (err) {
    console.log(err.message)
    re.status(404).json({
      success: false,
      message: err.message
    })
  }
}

const logout = async (req, res) => {
  res.cookie('userId', '', { maxAge: 0, httpOnly: true })
  res.status(200).json({ success: true, message: 'Logged out successfully' })
}

module.exports = {
  userRegister,
  userLogin,
  logout,
  applyForJobs,
  viewAppliedJobs,
  allJobs,
  updateUser,
  jobSingleView,
  getRecentJobs
}
