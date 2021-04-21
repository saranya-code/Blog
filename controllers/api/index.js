const router = require('express').Router();
const userRoute = require('./user_routes.js');
const postRoute = require('./post_routes.js');
const commentRoute = require('./comment_routes.js')


router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/comment', commentRoute);

module.exports = router;