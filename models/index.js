const User = require('./User')
const Post = require('./Post')
// const Location = require('./Location')
const Bird = require('./Bird')
// const Comment = require('./Comment')
// const Like = require('./Like')

User.hasMany(Post, {
    foreignKey:"user_id",
    onDelete:"CASCADE"
})
Post.belongsTo(User, {
    foreignKey:"user_id",
})

// Post.hasMany(Comment)
// Post.hasMany(Bird)
// Post.hasOne(Location)
// Post.hasMany(Like)

module.exports = { User, Post, Bird };
// module.exports = { User, Post, Location, Bird, Comment }