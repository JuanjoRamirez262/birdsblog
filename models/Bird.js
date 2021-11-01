const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init()

module.exports = Bird;