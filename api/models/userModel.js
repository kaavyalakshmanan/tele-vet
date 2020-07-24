const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Number,
        default: Date.now
    },
    isAuthenticated: {
        type: Boolean
    },
    isFetching: {
        type: Boolean
    },
    didInvalidate: {
        type: Boolean
    },
    profilePicture: {
        type: String
    },
    lastUpdate: {
        type: Number
    },
    images: [{}],
    appointments: [{}],
    messages: [{}],
    documents: [{}]
    //videoConferenceId: {type: String}
});

module.exports = mongoose.model("users", userSchema);