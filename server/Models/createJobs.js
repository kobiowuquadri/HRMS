const mongoose = require('mongoose')

// User Schema
const jobsSchema = new mongoose.Schema({
    jobTitle : {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    companyName : {
        type:String,
        required: true
    },
    startDate : {
        type:String,
        required: true
    },
    endDate: {
        type:String,
        required: true
    },
    applicants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usermodels'
        }
    ]
},  { timestamps: true })


// User Model
const jobsModel = mongoose.model('jobsmodels', jobsSchema)

module.exports = jobsModel