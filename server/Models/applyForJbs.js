const mongoose = require('mongoose')

// User Schema
const appForJobsSchema = new mongoose.Schema({
    address : {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    coverLetter : {
        type: String,
        required: true
    }
},  { timestamps: true })


// User Model
const  appForJobsModel = mongoose.model('appforjobsmodel',  appForJobsSchema)

module.exports = appForJobsModel