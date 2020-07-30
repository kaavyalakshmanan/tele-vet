const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    isAuthenticated: {type: Boolean},
    isFetching: {type: Boolean},
    didInvalidate: {type: Boolean},
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


// trueIsVetFalseIsPet: {type: Boolean},
// username: {type: String, required: [true, "A userName is required"], unique: true},
// password: {type: String, required: [true, "A password is required"]},
// firstName: {type: String, required: [true, "A firstName is required"]},
// lastName: {type: String, required: [true, "A lastName is required"]},
// description: {type: String},
// website: {type: String, unique: true},
// email: {type: String, unique: true},
// phone: {type: String, unique: true},
// businessAddress: {type: String, required: [true, "A businessAddress is required"], unique: true},
// city: {type: String, required: [true, "A city is required"]},
// postalCode: {type: String},
// formatted_address: {type: String},
// specialization: {type: String},
// acceptEmergencyCalls: {type: Boolean},
// certificates: [{type: 'Buffer'}],
//     businessName: {type: String},
// businessNumber: {type: Number, unique: true},
// activeOnPlatform: {type: Boolean},
// profilePicture: {type: 'Buffer'},
// carouselPictures: [{type: 'Buffer'}],
//     reviews: [{type: String}],
//     rating: {type: Number},
// facebook: {type: String},
// instagram: {type: String},
// photos: [
//     {
//         height: {type: Number},
//         html_attributions: [{type: String}],
//         photo_reference: {type: String},
//         width: {type: Number}
//     }
// ],
//     socialMediaSpare1: {type: String},
// socialMediaSpare2: {type: String},
// socialMediaSpare3: {type: String},
// socialMediaSpare4: {type: String},
// socialMediaSpare5: {type: String},
// weeklyTimeBlocks: [[{type: String}]],
//     scheduledAppointments: [{type: String}],
//     relationships: Schema.Types.Mixed,
//     opening_hours: [{
//     open_now: {type: Boolean},
//     sundayOpen: {type: String},
//     sundayClose: {type: String},
//     mondayOpen: {type: String},
//     mondayClose: {type: String},
//     tuesdayOpen: {type: String},
//     tuesdayClose: {type: String},
//     wednesdayOpen: {type: String},
//     wednesdayClose: {type: String},
//     thursdayOpen: {type: String},
//     thursdayClose: {type: String},
//     fridayOpen: {type: String},
//     fridayClose: {type: String},
//     saturdayOpen: {type: String},
//     saturdayClose: {type: String}
// }],
//     spareField1: Schema.Types.Mixed,
//     spareField2: Schema.Types.Mixed,
//     spareField3: Schema.Types.Mixed,
//     spareField4: Schema.Types.Mixed,
//     spareField5: Schema.Types.Mixed,
//     geometry: {
//     location: {
//         lat: {type: Number},
//         lng: {type: Number}
//     }
// },
// isAuthenticated: {type: Boolean},
// isFetching: {type: Boolean},
// didInvalidate: {type: Boolean},
// lastUpdate: {type: Number},
// images: [],
//     appointments: [],
//     messages: [],
//     documents: []