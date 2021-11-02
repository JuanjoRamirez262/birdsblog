const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.TEXT,
    },
    birds_seen: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    date_seen: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // bird_id: {
    //     type: DataTypes.STRING,
    //     references: {
    //         model: 'bird',
    //         key: 'id',
    //     }
    // }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
})

module.exports = Post;