const express = require("express");
const router = express.Router();
const Post = require("../models/Bdays");
const findNearest = require('../utils/nearestDate');

router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message: err});
    }
});

router.get("/nearest", async(req, res) => {
    try{
        const posts = await Post.find();
        const date = req.body.date;
        res.json(findNearest(posts, date));
    }
    catch(err){
        res.json({message: err});
    }
});

router.post("/", (req, res)=>{
    const post = new Post ({
        name: req.body.name, 
        birthdate: req.body.birthdate 
    })

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});

router.get("/:name", async(req, res) => {
    try{
        const specificPost = await Post.findOne({'name': req.params.name});
        res.json(specificPost);
    } catch(err){
        res.json({message: err});
    }
});

router.delete("/:name", async(req, res) => {
    try{
        const deletedPost = await Post.findOneAndRemove({'name': req.params.name});
        res.json({message: "Deleted successfully!"});
    } catch(err){
        res.json({message: err});
    }
});

router.patch("/:name", async(req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {'name': req.params.name},
            {$set: {'birthdate': req.body.birthdate}}
        );
        res.json({message: "Updated successfully!"});
    } catch(err){
        res.json({message: err});
    }
});

module.exports = router;