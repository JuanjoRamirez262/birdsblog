const sequelize = require('../config/connection');
const { User, Post, Location, Bird, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const birdData = require('./birdData.json');
const locationData = require('./locationData.json');
const commentData = require('./commentData.json');
const likeData = require('./likeData.json');


const seedDatabase = async () => {
    //add logic
};

seedDatabase();