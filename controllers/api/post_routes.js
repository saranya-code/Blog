const router = require('express').Router();
const { Post } = require('../../models');


router.post('/newpost', async (req, res) => {
    try {
      const dbUserData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        created_at: new Date(),
        updated_by: new Date()
      });
        res.status(200).json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//Get all post

module.exports = router;