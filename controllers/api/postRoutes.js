const express = require('express');
const router = express.Router();
const { Post, User, SeenBird } = require("../../models");
const moment = require('moment')

//create post
router.post("/", (req, res) => {
    console.log(req.body)
    if (!req.session.logged_in) {
        return res.status(401).send("please login first")
    }
    Post.create({
        description: req.body.description,
        //pass in UserId of logged in user session (rq.session.user.id)
        user_id: req.session.user_id,
        location_id: req.body.location_id
    }).then(newPost => {
        SeenBird.create({
            post_id: newPost.id,
            bird_id: req.body.bird_id,
            date: moment().unix()
        })
            .then((newSeenBird) => {
                res.status(200).json({
                    message: "Post created",
                    newPost,
                    newSeenBird
                })
            })
        // res.status(200).json(newPost)
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json({ message: "An error occured", err: err })
    })
})

router.delete("/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(delPost => {
        res.json(delPost)
    })
})

router.get('/', (req,res) => {
    Post.findAll({
        where: {
          user_id: req.session.user_id
        },
        include: [{
          model: SeenBird,
        }]
})

module.exports = router;