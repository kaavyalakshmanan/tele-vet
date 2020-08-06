/* Vet Model*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

vetModel = new Schema({
        coverPhoto: {type: String},
        username: {type: String, required: [true, "A userName is required"], unique: true},
        firstName: {type: String, required: [true, "A firstName is required"]},
        lastName: {type: String, required: [true, "A lastName is required"]},
        description: {type: String},
        email: {type: String, unique: true},
        businessName: {type: String},
        profilePicture: {type: 'String'},
        pictures: [{type: 'String'}],
        reviews: Schema.Types.Mixed,
        rating: {type: Number},
        facebook: {type: String},
        twitter: {type: String},
        geometry: Schema.Types.Mixed,
        weeklyTimeBlocks: [[{type: 'String'}]]
    }
);

module.exports = mongoose.model("vets", vetModel);