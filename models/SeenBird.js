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
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bird_id: {
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'seen_bird',
    }
)

module.exports = SeenBird;