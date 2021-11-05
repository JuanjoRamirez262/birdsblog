const express = require('express');
const router = express.Router();
const { SeenBird } = require("../../models");

router.post("/", (req, res) => {
    console.log(req.body)
    if(!req.session.logged_in){
        return res.status(401).send("please login first")
    }
    SeenBird.create({
        post_id: req.body.newPost.id,
        bird_id: req.body.bird_id
    }).then(newSeenBird => {
        res.json(newSeenBird);
    }).catch(err => {
        console.log(err);
        res.status(501).json({ message: "An error occured", err: err })
    })
})



module.exports=router;