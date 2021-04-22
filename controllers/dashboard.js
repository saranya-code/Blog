const sequelize = require('../config/connection');
const router = require('express').Router();
const { User,Post,Comment} = require('../models');

//
router.get('/', (req, res) => {
    res.render('dashboard', {loggedIn: req.session.loggedIn});
});

router.get('/new', (req, res) => {
    res.render('newpost',{loggedIn: req.session.loggedIn});
});



module.exports = router