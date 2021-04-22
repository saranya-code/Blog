const router = require('express').Router();

const homeRoute = require('./home-route.js');
const dashboardRoute = require('./dashboard.js');
const apiRoutes = require('./api');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);

module.exports = router;
