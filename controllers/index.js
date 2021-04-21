const router = require('express').Router();

const homeRoute = require('./home-route.js');
const apiRoutes = require('./api');

router.use('/', homeRoute);
router.use('/api', apiRoutes);

module.exports = router;
