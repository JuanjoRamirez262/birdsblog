const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Hike extends Model {}

Hike.init()

module.exports = Hike;