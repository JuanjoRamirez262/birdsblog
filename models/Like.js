const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model {}

Like.init(
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
        userId: {
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

module.exports = Like;