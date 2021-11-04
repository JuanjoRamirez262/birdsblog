const express = require('express');
const router = express.Router();
const { Post, User, SeenBird, Bird, Location } = require("../../models");
const moment = require('moment')

// router.get("/", (req, res) => {
//     Post.findAll({
//         include: [{
//             model: User,
//             attributes: {
//             exclude: ["password"]
//         }
//         }]
//     }).then(dbPosts => {
//         if (dbPosts.length) {
//             const posts=dbPosts.map((project)=> project.get({plain: true}));

//             res.render('homepage', {
//                 posts,
//             })
//         } else {
//             res.status(404).json({ message: "No posts found in db" })
//         }
//     }).catch(err => {
//         console.log(err)
//         res.status(500).json({ message: "An error occured getting all posts", err: err })
//     });
// });

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
        // attributes: {
        //     exclude: ["createdAt", "updatedAt", "password"]
        // }
      }]
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

router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: Bird
            },
            {
                model: Location
            }
        ]
    }).then((posts) => {
        res.status(200).json(posts)
    })
});

module.exports = router;