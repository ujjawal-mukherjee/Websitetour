const mongoose = require('mongoose');
//import mongoose from "mongoose";
const connectDB = async () => {
    try {
        // Removed useNewUrlParser and useUnifiedTopology options
        const conn = await mongoose.connect('mongodb://localhost:27017/Tourregistration');

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
//export default connectDB;