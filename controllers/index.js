const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./homePage.js');
const coursePage = require('./coursePage.js');
const studentPage = require('./studentPage.js');
const groupPage = require('./groupPage.js');

router.use('/', homePage);
router.use('/courses', coursePage);
router.use('/api', apiRoutes);
router.use('/students', studentPage);
router.use('/groups', groupPage);

module.exports = router;