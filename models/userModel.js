const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    isAuthenticated: {type: Boolean},
    isFetching: {type: Boolean},
    didInvalidate: {type: Boolean},
    name: {type: String, required: [true, "Name is required"]},
    email: {type: String, required: [true, "Password is required"], unique: true},
    username: {type: String, required: [true, "Username is required"], unique: true},
    password: {type: String, required: [true, "Password is required"]},
    profilePicture: {type: String},
    lastUpdate: {type: Number},
    images: [],
    appointments: [],
    messages: [],
    documents: []
});

module.exports = mongoose.model("users", userSchema);