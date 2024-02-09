const router = require('express').Router();
const {Course, User } = require('../models'); ///need to change Project and User
//const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const courseData = await Course.findAll({ //need to change project
    //   include: [
    //     {
    //       model: User,   ///need to change user
    //       attributes: ['name'],
    //     },
    //   ],
    });

    // Serialize data so the template can read it
    const courses = courseData.map((course) => course.get({ plain: true })); ///need to change project

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      courses, /// need to change project
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => { ///need to change project
  try {
    const courseData = await Course.findByPk(req.params.id, { /// need to change project
      include: [
        {
          model: User, //need to change user
          attributes: ['name'],
        },
      ],
    });

    const course = courseData.get({ plain: true }); ///neeed to change project

    res.render('project', { /// need to change project
      ...course,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, { 
      attributes: { exclude: ['password'] },
      //include: [{ model: Course }], ///need to change project
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user, ///need to change user
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;