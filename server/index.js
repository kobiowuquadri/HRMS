const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes.js')
const adminRouter = require('./Routes/adminRoutes.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');


const port = process.env.PORT

// Middlewares
app.use(cors({
    origin: "https://hrms-client-self.vercel.app",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static('public'))

// Home
app.get('/', (req, res) => {
    res.send('Connected to Backend Successfully.')
})
// Routes
app.use('/api/v1', userRouter)
app.use('/api/v1', adminRouter)
connectToDB()

// Additional middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
