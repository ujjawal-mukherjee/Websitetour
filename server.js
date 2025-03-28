const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const session = require('express-session');
const MongoStore = require('connect-mongo');
//const blogRoutes = require('./routes/auth');
// Connect to MongoDB
/*import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import connectDB from './config/db.js';*/
connectDB();

const app = express();

// Middleware for CORS
app.use(cors({
    origin: 'http://localhost:5173',  // Frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
    credentials: true,  // Required to handle cookies
}));

// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // For form data

// Serve Static Files (For images)
app.use('/uploads', express.static('public/uploads'));
// Session setup with MongoStore for persistence
app.use(session({
    secret: 'your-secret-key',  // Directly providing the secret
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/Tourregistration'  // Direct MongoDB URL
    }),
    cookie: {
        secure: false,  // Don't use secure cookies in development
        httpOnly: true,  // Prevents access via JavaScript
        maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    },
}));

// Routes
app.use('/api/auth', require('./routes/auth'));  // Assuming auth routes are in this file
app.use('/api/blogs', require('./routes/auth'));//for blogs
// Start server

const PORT = 5000;  // Directly defining the port number
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
