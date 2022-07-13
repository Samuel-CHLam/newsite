const mongoose = require("mongoose");

const TeachingSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        institute: {type: String, required: true},
        code: {type: String, required: false},
        year: {type: String, required: true},
        lecturer: {type: String, required: false},
        role: {type: String, required: false},
        meetingtime: {type: String, required: false},
        meetingvenue: {type: String, required: false}, 
        description: {type: String, required: true},
        photo: {type: String, required: false},
        categories: {type: String, required: false},
    },
    {timestamps: true},
);

module.exports = mongoose.model("Teaching", TeachingSchema)