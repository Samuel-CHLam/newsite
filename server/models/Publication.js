const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        authors: {type: String, required: true},
        journal: {type: String, required: false},
        volume: {type: Number, required: false},
        volumeNumber: {type: Number, required: false},
        firstpage: {type: Number, required: false},
        lastpage: {type: Number, required: false},
        year: {type: Number, required: false},
        publisher: {type: String, required: false},
        issn: {type: String, required: false},
        abstract: {type: String, required: true},
        photo: {type: String, required: false},
        categories: {type: Array, required: false},
        tags: {type: Array, required: false},
    },
    {timestamps: true},
);

module.exports = mongoose.model("Publication", PublicationSchema)