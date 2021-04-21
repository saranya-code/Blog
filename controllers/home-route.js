
const sequelize = require('../config/connection');
const router = require('express').Router();
const { User,Post,Comment} = require('../models');


// route to get all post
router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
    res.json(err);
  });

  // const posts = postData.map((post) => post.get({ plain: true }));
  res.render('homepage', { 
    people: [
      "Yehuda Katz",
      "Alan Johnson",
      "Charles Jolley",
    ],
    loggedIn: req.session.loggedIn
  });
});

//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
  }
  res.render('login');
});

//signup route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('signup');
});


module.exports = router;