const mongoose = require('mongoose')

const connectToDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        .then(result => {
            console.log('Connected to Database Succcessfully')
        })
        .catch(err => console.log(err.message))
    }
    catch(err){
      console.log(err)
    }
}

module.exports = connectToDB