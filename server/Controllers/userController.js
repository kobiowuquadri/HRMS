const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const appForJobsModel = require('../Models/applyForJbs')
const jobsModel = require('../Models/createJobs')

const period = 1000 * 60 * 60 * 24 * 3

const handleErrors = (err)=> {
  console.log(err.message, err.code)
  let error = {email: "", password: ""}

  // validation errors
  if(err.message.includes("usermodels validation failed")){
    console.log(Object.values(err.errors).forEach(({properties}) => {
      error[properties.path] = properties.message
    }))
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
    let hashPassword;
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
      from: '"DHireventures 👻" <kobiowuq@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Account Created Successfully', // Subject line
      html: `
      <p>Hello ${name},</p>
      <p>Your account has been created successfully.</p>
      <p>So, you can now proceed with other processes</p>
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
      res.status(401).json({ success: false, message: 'User not found!' })
    }
    const isPassword = await bcrypt.compare(password, isUser.password)
    if (!isPassword) {
      res.status(401).json({ success: false, message: 'Incorrect Password' })
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
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

//  list all jobs

const allJobs = async (req, res) => {
  try {
     const jobs = await jobsModel.find()
     res.status(200).json({success: true, message: "View allJobs Successful", jobs})
  
  }
  catch(err){
     console.error(err);
     res.status(404).json({
       success: false,
       msg: err.message,
     });
  }
}

const applyForJobs = async (req, res) => {
  try {
    const { address, coverLetter } = req.body

    const resumeBuffer = req.file.buffer
    const resumeBase64 = resumeBuffer.toString('base64')

    const newApplication = new appForJobsModel({
      address,
      resume: resumeBase64,
      coverLetter
    })

    const savedApplication = await newApplication.save()
    res.status(202).json({
      success: true,
      message: 'Application Submitted Successfully',
      savedApplication
    })
  } catch (err) {
    console.error(err)
    res.status(404).json({
      success: false,
      message: err.message
    })
  }
}

const viewAppliedJobs = async (req, res) => {
    try {
      const id = req.params._id
      const getJob = await appForJobsModel.findById(id)
      res.status(200).json({success: true, message: "View Applied Jobs Successful", getJob})
    }
    catch(err){
      console.error(err)
      res.status(404).json({
        success: false,
        message: err.message
      })
    }

}

const logout = async (req, res) => {
  res.cookie('userId', '', { maxAge: 0, httpOnly: true })
  res.status(200).json({success: true, message: 'Logged out successfully'})
}

module.exports = { userRegister, userLogin, logout, applyForJobs, viewAppliedJobs, allJobs }
