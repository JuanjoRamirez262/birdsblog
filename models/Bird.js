const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
    {
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    bird_name: {
        type: DataTypes.STRING,
    },
    date_last_seen: {
        type: DataTypes.STRING,
    },
    date_last_location: {
        type: DataTypes.STRING,
    }
},{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'bird',
});

module.exports = Bird;