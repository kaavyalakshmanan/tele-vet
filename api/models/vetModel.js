const mongoose = require("mongoose");
const Schema = mongoose.Schema;

vetModel = new Schema({
        coverPhoto: {type: String},
        username: {type: String, required: [true, "A userName is required"], unique: true},
        firstName: {type: String, required: [true, "A firstName is required"]},
        lastName: {type: String, required: [true, "A lastName is required"]},
        description: {type: String},
        email: {type: String, unique: true},
        phone: {type: String, unique: true},
        businessName: {type: String},
        profilePicture: {type: 'Buffer'},
        pictures: [{type: 'Buffer'}],
        reviews: Schema.Types.Mixed,
        rating: {type: Number},
        facebook: {type: String},
        twitter: {type: String},
        geometry: Schema.Types.Mixed
    }
    // ,{ strict: "throw" }
    // ,{versionKey: false}
);

module.exports = mongoose.model("veterinarians", vetModel);

// for practicing your post {
// {
//     "username":"ashawarma",
//     "password": "cpsc436i",
//     "firstName": "Atiya",
//     "lastName": "Shawarma",
//     "description": "Atiya is a passionate dog owner and healer! She specialises in large canines, although she welcomes any size at her Kitsilano clinic. Atiya earned a practicing doctorate in canine health with focus in heart surgery at the university of saskatchewan. She has been operating her own clinic on arbutus street and broadway since 1971",
//     "website": "www.kitsilanok9.com",
//     "email": "AtiyaShawarma@kitsilanok9.com",
//     "phone": "604-913-4043",
//     "businessAddress": "3000 west broadway",
//     "city": "Vancouver",
//     "postalCode": "v6r2r9",
//     "specialization": "canines",
//     "acceptEmergencyCalls": false,
//     "certificates": [{"type":"Buffer","data":[100,97,116,97,58,14,79,8,113,97,65,43,57,55,89,69,88,51,66,101,70,86,112,121,112,121,121,121,80,81,104]}],
//     "businessName": "Point Grey Veterinary Hospital",
//     "businessNumber": 123456789,
//     "activeOnPlatform": true,
//     "profilePicture": {"type":"Buffer","data":[100,97,116,97,58,14,79,8,113,97,65,43,57,55,89,69,88,51,66,101,70,86,112,121,112,121,121,121,80,81,104]},
//     "carouselPictures": [{"type":"Buffer","data":[100,97,116,97,58,14,79,8,113,97,65,43,57,55,89,69,88,51,66,101,70,86,112,121,112,121,121,121,80,81,104]}],
//     "reviews": ["Dr. Shawarma is the best! She installed a mechanical heart for my german shepperd 5 years ago, and it has been healthy and happy even since!"],
//     "rating": 4,
//     "facebook": "https://www.facebook.com/Veterinarian-Community-366567727022295",
//     "instagram": "https://www.instagram.com/explore/tags/veterinarian/?hl=en",
//     "socialMediaSpare1": "https://www.snapchat.com/add/drbelindathevet",
//     "socialMediaSpare2": "",
//     "socialMediaSpare3": "",
//     "socialMediaSpare4": "",
//     "socialMediaSpare5": "",
//     "weeklyTimeBlocks": [[""]],
//     "scheduledAppointments": [""],
//     "relationships": [{customerId: "", videoLink: "", messages: [""], appointmentReport: [""], appointmentPictures: [{type: 'Buffer'}]},
//     "sundayOpen": "2014-08-18T08:00:00",
//     "sundayClose": "2014-08-18T18:00:00",
//     "mondayOpen": "2014-08-18T08:00:00",
//     "mondayClose": "2014-08-18T18:00:00",
//     "tuesdayOpen": "2014-08-18T08:00:00",
//     "tuesdayClose": "2014-08-18T18:00:00",
//     "wednesdayOpen": "2014-08-18T08:00:00",
//     "wednesdayClose": "2014-08-18T18:00:00",
//     "thursdayOpen": "2014-08-18T08:00:00",
//     "thursdayClose": "2014-08-18T18:00:00",
//     "fridayOpen": "2014-08-18T08:00:00",
//     "fridayClose": "2014-08-18T18:00:00",
//     "saturdayOpen": "2014-08-18T08:00:00",
//     "saturdayClose": "2014-08-18T18:00:00",
//     "spareField1": "",
//     "spareField2": [""],
//     "spareField3": [[""]],
//     "spareField4": true,
//     "spareField5": 12345
//     "geometry": {
//     "location": {
//       "lat": 49.2636642,
//       "lng": -123.2048531
//     },
//     "viewport": {
//       "northeast": {
//         "lat": 49.26507027989273,
//         "lng": -123.2035009201073
//       },
//       "southwest": {
//         "lat": 49.26237062010728,
//         "lng": -123.2062005798927
//       }
//     }
//   },
// }



// activeOnPlatform: {type: Boolean}, relationships,geometry



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