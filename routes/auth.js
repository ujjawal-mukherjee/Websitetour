const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const Booking = require('../models/Booking');
const multer = require('multer');
const Blog = require('../models/Blog');
/*import express from 'express';
import bcrypt from 'bcrypt';
import multer from 'multer';

import User from '../models/User.js';
import Booking from '../models/Booking.js';
import Blog from '../models/Blog.js';*/
// Register a new user
router.post('/register', async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newUser = new User({ userName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ message: 'Server error.' });
    }
});

// Login a user
/*
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found!' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password!' });

        req.session.user = { userName: user.userName, email: user.email };
        res.status(200).json({ message: 'Login successful!' });
        console.log("data is", req.session.user);
        console.log("Session after login:", req.session);
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Check login status
router.get('/check-login', (req, res) => {
    console.log("I am here");
    console.log(req.session.user);
    console.log(req.session);
    if (req.session && req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Not logged in' });
        console.log("here again");
    }
});
*/
// Book a trip
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found!' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password!' });

        req.session.user = { userName: user.userName, email: user.email };

        // Explicitly save the session
        req.session.save(err => {
            if (err) {
                console.error('Error saving session:', err);
                return res.status(500).json({ message: 'Session save error' });
            }
            console.log("Session after login:", req.session);
            res.status(200).json({ message: 'Login successful!', user: req.session.user });
        });
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});
router.get('/check-login', (req, res) => {
    console.log("Session in /check-login:", req.session);
    if (req.session && req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
});

router.post('/bookings', async (req, res) => {
    try {
        if (!req.session || !req.session.user) {
            return res.status(401).json({ message: 'User not logged in!' });
        }
        console.log("Booking data received:", req.body);
        const { hotelName, price, numPersons, specialRequests } = req.body;
        const { userName, email } = req.session.user;

        const booking = new Booking({ userName, email, hotelName, price, numPersons, specialRequests });
        await booking.save();

        res.status(201).json({ message: 'Booking successful!' });
    } catch (error) {
        console.error('Error booking trip:', error.message);
        res.status(500).json({ message: 'Failed to book your trip.', error: error.message });
    }
});
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.clearCookie('connect.sid'); // Clear session cookie
        res.status(200).json({ message: 'Logged out successfully' });
    });
});
router.get('/', (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
});
//store image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });
//router to add image
router.post('/add', upload.single('Image'), async (req, res) => {
    try {
        /*if (!req.session || !req.session.user) {
            return res.status(401).json({ message: 'User not logged in!' });
        }*/
        if (!req.session || !req.session.user) {
            return res.status(401).json({ message: 'User not logged in!' });
        }
        console.log('User session data:', req.session.user);
        //const { userName } = req.session.user;
        const newBlog = new Blog({
            BlogTitle: req.body.BlogTitle,
            Destination: req.body.Destination,
            Blogdesc: req.body.Blogdesc,
            Image: req.file.filename,
            userName: req.session.user.userName,
        });
        await newBlog.save();
        res.status(201).json({ message: "Blog added successfully!" });
    } catch (error) {
        console.error("Error details:", error);
        res.status(500).json({ message: "Error adding blog" });
    }
});
/*
router.post('/add', upload.single('Image'), async (req, res) => {
    try {
        /*if (!req.body.BlogTitle || !req.body.Destination || !req.body.Blogdesc) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }
    
        if (!req.session || !req.session.user) {
            return res.status(401).json({ message: 'User not logged in' });
        }
        console.log("sessid", req.session.user._id);
        const newBlog = new Blog({
            BlogTitle: req.body.BlogTitle,
            Destination: req.body.Destination,
            Blogdesc: req.body.Blogdesc,
            Image: req.file.filename,
            userId: req.session.user._id, // Store the user's ID from the session
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog added successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding blog" });
    }
});
*/
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        res.status(500).json({ message: 'Error fetching blogs' });
    }
});
module.exports = router;

