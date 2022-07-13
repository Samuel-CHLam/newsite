const router = require("express").Router();
const Post = require("../models/Post");

// Create Post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {res.status(500).json(err)}
});

// Update Post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        try {
            const updatedPost = await Post.findByIdAndUpdate (req.params.id, {
                $set:req.body
            }, 
            {new: true}
            );
            res.status(200).json(updatedPost);
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        try {
            await post.delete();
            res.status(200).json("Post has been deleted.");
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Get Post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {res.status(500).json(err)};
});

// Get posts by category
router.get("/", async (req, res) => {
    const catName = req.query.cat
    try {
        let posts;
        if (catName) {posts = await Post.find({categories:{$in: [catName]}});} else {posts = await Post.find();}
        res.status(200).json(posts);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;