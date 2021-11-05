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
            allowNull: true,
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
        modelName: 'seenBird',
    }
)

module.exports = SeenBird;