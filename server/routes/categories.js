const router = require("express").Router();
const Category = require("../models/Category");

// Create Category
router.post("/", async (req, res) => {
    const newCategory = new Course(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {res.status(500).json(err)}
});

// Category Course
router.get("/", async (req, res) => {
    try {
        const categories = await Course.find();
        res.status(200).json(categories);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;