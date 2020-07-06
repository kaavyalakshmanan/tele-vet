const mongoose = require("mongoose");
const Schema = mongoose.Schema;

veterinarianModel = new Schema({
            username: {type: String, required: [true, "A userName is required"]},
            password: {type: String, required: [true, "A password is required"]},
            firstName: {type: String, required: [true, "A firstName is required"]},
            lastName: {type: String, required: [true, "A lastName is required"]},
            description: {type: String},
            website: {type: String},
            email: {type: String},
            phone: {type: String},
            businessAddress: {type: String, required: [true, "A businessAddress is required"]},
            city: {type: String, required: [true, "A city is required"]},
            postalCode: {type: String},
            specialization: {type: String},
            acceptEmergencyCalls: {type: Boolean},
            certificates: [{type: 'Buffer'}],
            businessNumber: {type: Number},
            profilePicture: {type: 'Buffer'},
            carouselPictures: [{type: 'Buffer'}],
            reviews: [{type: String}],
            rating: {type: Number},
            facebook: {type: String},
            instagram: {type: String},
            socialMediaSpare1: {type: String},
            socialMediaSpare2: {type: String},
            socialMediaSpare3: {type: String},
            socialMediaSpare4: {type: String},
            socialMediaSpare5: {type: String},
            weeklyTimeBlocks: [[{type: String}]],
            scheduledAppointments: [{type: String}],
            sundayOpen: {type: String},
            sundayClose: {type: String},
            mondayOpen: {type: String},
            mondayClose: {type: String},
            tuesdayOpen: {type: String},
            tuesdayClose: {type: String},
            wednesdayOpen: {type: String},
            wednesdayClose: {type: String},
            thursdayOpen: {type: String},
            thursdayClose: {type: String},
            fridayOpen: {type: String},
            fridayClose: {type: String},
            saturdayOpen: {type: String},
            saturdayClose: {type: String},
            spareField1: Schema.Types.Mixed,
            spareField2: Schema.Types.Mixed,
            spareField3: Schema.Types.Mixed,
            spareField4: Schema.Types.Mixed,
            spareField5: Schema.Types.Mixed
    }
    // ,{ strict: "throw" }
    // ,{versionKey: false}
);

module.exports = mongoose.model("veterinarian", veterinarianModel);

// HOW MODEL WORK: https://mongoosejs.com/docs/models.html

//https://mongoosejs.com/docs/schematypes.html#arrays

//will need this to ensure no duplicates of username and password exist https://docs.mongodb.com/manual/core/index-unique/#create-a-unique-index

//responsibilities
//
// const templateUser = [
// {firstName: "", //Kaavya
//   lastName: "",//Kaavya
//   username: "",//Kaavya
//   description:"",//Franco
//   businessAddress: "",//Amy + Franco
//   city:"",//prefilled by Amy -> to populate edit fields for Franco
//   postalCode:"",//AmyFranco
//   website: "",//Amy/Franco
//   email:"",//Amy/Franco
//   phone:"",//Amy/Franco
//   appointmentSlots:"",//Franco
//   certification:"", //Kaavya, but maybe should be Franco
//   specialisation:"", //Franco
//   acceptEmergency: false, //Franco
//   sundayOpen: "", //All hours : Franco
//   profilePicture:"",//Franco
//   carouselPictures: [], //Franco
//   reviewMessages:[], //Amy + Franco
//   rating:"" //Amy + Franco
// }]