const User = require('./User')
const Post = require('./Post')
const Hike = require('./Hike')
const Bird = require('./Bird')
const Comment = require('./Comment')

User.hasMany(Post)

Post.belongsTo(User)

Post.hasMany(Comments)
Post.hasMany(Birds)
Post.hasOne(Map)
Post.hasMany(Likes)

module.exports = { User, Post, Hike, Bird, Comment}