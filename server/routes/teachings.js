const router = require("express").Router();
const Teaching = require("../models/Teaching");

// Create Teaching
router.post("/", async (req, res) => {
    const newTeaching = new Teaching(req.body);
    try {
        const savedTeaching = await newTeaching.save();
        res.status(200).json(savedTeaching);
    } catch (err) {res.status(500).json(err)}
});

// Update Teaching
router.put("/:id", async (req, res) => {
    try {
        const teaching = await Teaching.findById(req.params.id);
        try {
            const updatedTeaching = await Teaching.findByIdAndUpdate (req.params.id, {
                $set:req.body
            }, 
            {new: true}
            );
            res.status(200).json(updatedTeaching);
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Delete Teaching
router.delete("/:id", async (req, res) => {
    try {
        const teaching = await Teaching.findById(req.params.id);
        try {
            await teaching.delete();
            res.status(200).json("Teaching has been deleted.");
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Get Teaching
router.get("/:id", async (req, res) => {
    try {
        const teaching = await Teaching.findById(req.params.id);
        res.status(200).json(teaching);
    } catch (err) {res.status(500).json(err)};
});

// Get Teachings by category
router.get("/", async (req, res) => {
    const catName = req.query.cat
    try {
        let teachings;
        if (catName) {teachings = await Teaching.find({categories:{$in: [catName]}});} else {teachings = await Teaching.find();}
        res.status(200).json(teachings);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;