const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // isAuthenticated: {type: Boolean},
    // isFetching: {type: Boolean},
    // didInvalidate: {type: Boolean},
    // email: {type: String, required: [true, "Password is required"], unique: true},
    // username: {type: String, required: [true, "Username is required"], unique: true},
    // password: {type: String, required: [true, "Password is required"]},
    // profilePicture: {type: String},
    // lastUpdate: {type: Number},
    // images: {
    //     list: [{}]
    // },
    // appointments: {
    //     list: [{}]
    // },
    // messages: {
    //     contactList: [{}]
    // },
    // documents: {
    //     list: [{}]
    // }
    //videoConferenceId: {type: String}

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
        type: Date,
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
    images: {
        list: [{}]
    },
    appointments: {
        list: [{}]
    },
    messages: {
        contactList: [{}]
    },
    documents: {
        list: [{}]
    }
    //videoConferenceId: {type: String}
});

module.exports = mongoose.model("users", userSchema);