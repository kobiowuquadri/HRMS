const express = require('express');
const app = express();
require('dotenv').config();
const connectToDB = require('./Database/db');
const userRouter = require('./Routes/userRoutes.js');
const adminRouter = require('./Routes/adminRoutes.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const port = process.env.PORT

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.send('Connected to Backend Successfully.');
});

// Routes
app.use('/api/v1', userRouter);
app.use('/api/v1', adminRouter);

// Additional middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to database
connectToDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
