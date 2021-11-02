const router = require('express').Router();
const { User, Post } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.name= userData.name;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json({ message: "you are logged out"});
    });
  } else {
    res.status(404).end();
  }
});

router.get('/session', (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
      res.status(200).json(req.session);
  } else {
    res.status(404).end();
  }
});

//CREATE new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//findall users
router.get("/", (req, res) => {
  User.findAll({
      include: [{
          model: Post,
          // attributes: {
          //     exclude: ["createdAt", "updatedAt"]
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

module.exports = router;
