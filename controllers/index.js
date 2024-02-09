const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./homePage');
const coursePage = require('./coursePage');
const studentPage = require('./studentPage');

router.use('/', homePage);
router.use('/courses', coursePage);
router.use('/api', apiRoutes);
router.use('/students', studentPage);

module.exports = router;