const mongoose = require("mongoose")
//import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    BlogTitle: { type: String, required: true },
    Destination: { type: String, required: true },
    Blogdesc: { type: String, required: true },
    Image: { type: String, required: true },
    Date: { type: Date, default: Date.now },
    userName: {
        type: String,
        required: true,
    },
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
module.exports = mongoose.model("Blog", blogSchema);