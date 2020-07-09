const mongoose = require("mongoose");
const Schema = mongoose.Schema;

userModel = new Schema({
    username: {type: String, required: [true, "Username is required"], unique: true},
    password: {type: String, required: [true, "Password is required"]},
    images: {
        list: [{}]
    },
    appointments: {
        list: [{}]
    },
    messages: {
        contactList: [{}]
    }
});

module.exports = mongoose.model("users", vetModel);
