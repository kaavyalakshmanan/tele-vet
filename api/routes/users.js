var express = require('express');
var router = express.Router();

const templateUser = [
{firstName: "", //Kaavya
  lastName: "",//Kaavya
  username: "",//Kaavya
  description:"",//Franco
  businessAddress: "",//Amy + Franco
  city:"",//prefilled by Amy -> to populate edit fields for Franco
  postalCode:"",//AmyFranco
  website: "",//Amy/Franco
  email:"",//Amy/Franco
  phone:"",//Amy/Franco
  appointmentSlots:"",//Franco
  certification:"", //Kaavya, but maybe should be Franco
  specialisation:"", //Franco
  acceptEmergency: false, //Franco
  sundayOpen: "", //All hours below: Franco
  sundayClose: "",
  mondayOpen: "",
  mondayClose: "",
  tuesdayOpen: "",
  tuesdayClose: "",
  wednesdayOpen: "",
  wednesdayClose: "",
  thursdayOpen: "",
  thursdayClose: "",
  fridayOpen: "",
  fridayClose: "",
  saturdayOpen: "",
  saturdayClose: "",
  profilePicture:"",//Franco
  carouselPictures: [], //Franco
  reviewMessages:[], //Amy + Franco
  rating:"" //Amy + Franco
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
