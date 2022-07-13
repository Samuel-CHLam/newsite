const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        institute: {type: String, required: true},
        code: {type: String, required: false},
        year: {type: String, required: true},
        lecturer: {type: String, required: false},
        description: {type: String, required: true},
        photo: {type: String, required: false},
        categories: {type: Array, required: false},
        website: {type: String, required: false},
    },
    {timestamps: true},
);

module.exports = mongoose.model("Course", CourseSchema)