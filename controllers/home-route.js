const sequelize = require('../config/connection');
const router = require('express').Router();
const { User,Post,Comment} = require('../models');


// route to get all post
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
          attributes: [
              'id',
              'title',
              'content',
              'created_at'
          ],
          include: [{
                  model: Comment,
                  attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                  include: {
                      model: User,
                      attributes: ['username']
                  }
              },
              {
                  model: User,
                  attributes: ['username']
              }
          ]
      })
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
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