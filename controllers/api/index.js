const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const courseRoutes = require('./courseRoutes.js');
const studentRoutes = require('./studentRoutes.js');
const groupRoutes = require('./groupRoutes.js');

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);
router.use('/groups', groupRoutes);

module.exports = router;
