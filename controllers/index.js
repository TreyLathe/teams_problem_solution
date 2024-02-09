const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./homeRoutes');
const coursePage = require('./courseRoutes');

router.use('/', homePage);
router.use('/courses', coursePage);
router.use('/api', apiRoutes);

module.exports = router;