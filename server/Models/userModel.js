const mongoose = require('mongoose')
const { isEmail } = require('validator')

// User Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    name: {
      type: String,
      required: [true, 'Please enter a name']
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      validate: {
        validator: function (value) {
          return value.length >= 6
        },
        message: 'Minimum password length is 6 characters'
      }
    },
    currentJob: {
      type: String,
      required: [true, 'Please enter your current job title']
    },
    jobDescription: {
      type: String,
      required: [true, 'Please enter your job description']
    },
    qualification: {
      type: String,
      required: [true, 'Please enter your highest qualification']
    },
    DOB: {
      type: String,
      required: [true, 'Please enter a date']
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Please enter a phone number']
    },
    appliedJobs: [
      {
        job: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'jobmodels'
        },
        applicationStatus: {
          type: String,
          enum: ['pending', 'approved', 'rejected']
        },

        applicationDate: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
)

// User Model
const userModel = mongoose.model('usermodels', userSchema)

module.exports = userModel
