const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes.js')
const adminRouter = require('./Routes/adminRoutes.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const port = process.env.PORT

// Middlewares
app.use(cors({
    origin: 'https://hrms-client-self.vercel.app/',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Routes
app.use('/api/v1', userRouter)
app.use('/api/v1', adminRouter)
connectToDB()

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
