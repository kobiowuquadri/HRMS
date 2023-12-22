const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const period = 1000 * 60 * 60 * 3

const userRegister = async (req, res) => {
   try{
    const {email, name, password, currentJob, jobDescription, qualification, DOB, phoneNumber} = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const existingUser = await userModel.findOne({email})
    if(existingUser) {
        return res.status(409).json({sucess: false, message: 'Email already in use'})
    }
    const newUser = userModel({
        email, name, password: hashPassword, currentJob, jobDescription, qualification, DOB, phoneNumber
    })
    const savedUser = await newUser.save()
    res.status(201).json({success: true, message: "User Created Successfully", savedUser})
   }
   catch(err){
    console.log(err.message)
   }
}

const userLogin = async (req, res) => {
   try {
     const {email, password} = req.body
     const isUser = await userModel.finOne({email})
     if(!isUser){
        res.status(402).json({success: false, message: "User not found!"})
     }
     const isPassword = await bcrypt.compare(password, isUser.password)
     if(!isPassword) {
        re.staus(402).json({success: false, message: "Incorrect Password"})
     }
     jwt.sign({id: isUser._id}, process.env.SECRET, async(token, err)=> {
         if (err){
            throw new Error(err)
         }

         
     })

   }

   catch(err){
      
   }
}


module.exports = {userRegister, userLogin}