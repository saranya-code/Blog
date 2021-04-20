
const sequelize = require('../config/connection');
const router = require('express').Router();
const { User,Post,Comment} = require('../models');


// route to get all post
router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
   
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts });
    });