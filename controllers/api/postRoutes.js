const express = require('express');
const router = express.Router();
const { Post, User, SeenBird, Bird, Location } = require("../../models");
const moment = require('moment')

router.get("/:id", (req, res) => {
    User.findAll({
      where: {
        id: req.params.id
      },
      attributes: {
        exclude: ["password"]
      },
      include: [{
        model: Post,
      },
    ]
    }).then(dbUser => {
      if (dbUser.length) {
        res.json(dbUser)
      } else {
        res.status(404).json({ message: "No users found in db" })
      }
    }).catch(err => {
      console.log(err)
      res.status(500).json({ message: "An error occured", err: err })
    });
  });

//create post
router.post("/", (req, res) => {
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
            .then((postCreated) => {
                res.status(200).json({postCreated})
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

router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: Bird
            },
            // {
            //     model: Location
            // },
            // {
            //   model: User
            // }
        ]
    }).then((posts) => {
        res.status(200).json(posts)
    })
});

module.exports = router;