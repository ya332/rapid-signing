const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: String,
    isPremium: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = User = mongoose.model("users", UserSchema);