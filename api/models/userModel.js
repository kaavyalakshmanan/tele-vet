const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    isAuthenticated: {type: Boolean},
    isFetching: {type: Boolean},
    didInvalidate: {type: Boolean},
    email: {type: String, required: [true, "Password is required"], unique: true},
    username: {type: String, required: [true, "Username is required"], unique: true},
    password: {type: String, required: [true, "Password is required"]},
    profilePicture: {type: 'Buffer'},
    lastUpdate: {type: Number},
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
    },
    isVetConnected: {type: Boolean},
    videoConferenceId: {type: String},
    spareField1: Schema.Types.Mixed,
    spareField2: Schema.Types.Mixed,
    spareField3: Schema.Types.Mixed,
    spareField4: Schema.Types.Mixed,
    spareField5: Schema.Types.Mixed,
});

module.exports = mongoose.model("AnimalOwner", userSchema);