const mongoose = require('mongoose');
//import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hotelName: { type: String, required: true },
    price: { type: Number, required: true },
    numPersons: { type: Number, required: true },
    specialRequests: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
