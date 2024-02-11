const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes.js')
const adminRouter = require('./Routes/adminRoutes.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const port = process.env.PORT

const BASE_URL = 'http://localhost:5173';

// remode db
//  mongodb+srv://Dehireventure:OcaRXa7uUXo3PiEG@atlascluster.0d2q4pl.mongodb.net/Dehireventure-DB

// Middlewares
app.use(cors({
    origin: `${BASE_URL}`,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Home
app.get('/', (req, res) => {
    res.send('Connected to Backend Successfully.')
})
// Routes
app.use('/api/v1', userRouter)
app.use('/api/v1', adminRouter)
connectToDB()

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
