const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./homeRoutes');
const coursePage = require('./courseRoutes');
const studentPage = require('./studentRoutes');

router.use('/', homePage);
router.use('/courses', coursePage);
router.use('/api', apiRoutes);
router.use('/students', studentPage);

module.exports = router;