const router = require("express").Router();
const Course = require("../models/Course");

// Create Course
router.post("/", async (req, res) => {
    const newCourse = new Course(req.body);
    try {
        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse);
    } catch (err) {res.status(500).json(err)}
});

// Update Course
router.put("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        try {
            const updatedCourse = await Course.findByIdAndUpdate (req.params.id, {
                $set:req.body
            }, 
            {new: true}
            );
            res.status(200).json(updatedCourse);
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Delete Course
router.delete("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        try {
            await course.delete();
            res.status(200).json("Course has been deleted.");
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Get Course
router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (err) {res.status(500).json(err)};
});

// Get Courses by category
router.get("/", async (req, res) => {
    const catName = req.query.cat
    try {
        let courses;
        if (catName) {courses = await Course.find({categories:{$in: [catName]}});} else {courses = await Course.find();}
        res.status(200).json(courses);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;