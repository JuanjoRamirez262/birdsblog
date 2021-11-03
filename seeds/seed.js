const sequelize = require('../config/connection');
const { User, Post, Location, Bird, Comment, Like, SeenBird } = require('../models');

const userData = require('./userData.json');
// const postData = require('./postData.json');
// const birdData = require('./birdData.json');
// const locationData = require('./locationData.json');
// const commentData = require('./commentData.json');
// const likeData = require('./likeData.json');
// const seenBirdData = require('./seenBirdData.json');


const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        // await Bird.bulkCreate(birdData)
        // await Location.bulkCreate(locationData)
        // await Post.bulkCreate(postData)
        // await SeenBird.bulkBuild(seenBirdData)
        // await Comment.bulkCreate(commentData)
        // await Like.bulkCreate(likeData)
        process.exit(0);
    } catch (err) {
        throw err
    }
};

seedDatabase();