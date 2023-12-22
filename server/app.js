const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes.js')


const port = process.env.PORT

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.use('/api/v1', userRouter)
connectToDB()

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
