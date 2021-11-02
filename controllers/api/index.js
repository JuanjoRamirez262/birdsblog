const router = require('express').Router();
const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const postRoutes = require('./postRoutes');
router.use('/posts', postRoutes);

module.exports = router;
