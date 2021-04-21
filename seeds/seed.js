const sequelize = require('../config/connection');
const { Comment,Post,User } = require('../models');

// const commentSeedData = require('./commentseed.json');
const postSeedData = require('./postseed.json');
// const userSeedData = require('./userseed.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

//   await Comment.bulkCreate(commentSeedData);

  await Post.bulkCreate(postSeedData);

//   await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();
