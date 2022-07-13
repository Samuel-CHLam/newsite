const router = require("express").Router();
const Publication = require("../models/Publication");

// Create Publication
router.post("/", async (req, res) => {
    const newPublication = new Publication(req.body);
    try {
        const savedPublication = await newPublication.save();
        res.status(200).json(savedPublication);
    } catch (err) {res.status(500).json(err)}
});

// Update Publication
router.put("/:id", async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        try {
            const updatedPublication = await Publication.findByIdAndUpdate (req.params.id, {
                $set:req.body
            }, 
            {new: true}
            );
            res.status(200).json(updatedPublication);
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Delete Publication
router.delete("/:id", async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        try {
            await publication.delete();
            res.status(200).json("Publication has been deleted.");
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Get Publication
router.get("/:id", async (req, res) => {
    try {
        const publication = await Publication.findById(req.params.id);
        res.status(200).json(publication);
    } catch (err) {res.status(500).json(err)};
});

// Get Publications by category
router.get("/", async (req, res) => {
    const catName = req.query.cat
    try {
        let publications;
        if (catName) {publications = await Publication.find({categories:{$in: [catName]}});} else {publications = await Publication.find();}
        res.status(200).json(publications);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;