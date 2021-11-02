const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SeenBird extends Model { }

SeenBird.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        birdId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize, 
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'seen_bird',
    }
)

module.exports = SeenBird;