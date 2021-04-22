const sequelize = require('../config/connection');
const router = require('express').Router();
const { User,Post,Comment} = require('../models');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id
        },
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
        res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
      }
      catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });


router.get('/new', (req, res) => {
    res.render('newpost',{loggedIn: req.session.loggedIn});
});

module.exports = router