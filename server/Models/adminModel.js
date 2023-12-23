const mongoose = require('mongoose')

// User Schema
const adminSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password : {
        type:String,
        required: true
    }
},  { timestamps: true })


// User Model
const adminModel = mongoose.model('adminmodels', adminSchema)

module.exports = adminModel