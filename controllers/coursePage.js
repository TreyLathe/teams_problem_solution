const router = require('express').Router();
const { Course } = require('../models');


router.get('/', async (req, res) => {
    try {
        const courseData = await Course.findAll({});
        const course = courseData.map((course) => course.get({ plain: true }));
        res.render('all', { course });
    } catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = router;