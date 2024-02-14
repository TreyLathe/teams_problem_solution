const router = require("express").Router();
const { Course, User, Student, Group_ } = require("../models");
const withAuth = require("../utils/auth");

//get all courses if logged in, otherwise redirect to login page
router.get("/", withAuth, async (req, res) => {
  try {
    // Get all courses and JOIN with user data
    const courseData = await Course.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
     ],
    });

    // Serialize data so the template can read it
    const courses = courseData.map((course) => course.get({ plain: true }));

    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      //include: [{ model: Course }], ///need to change project
    });

    const user = userData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render("course", {
      courses,
      logged_in: req.session.logged_in,
      name: user.name,
      user_id:req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//getting course by id if logged in, otherwise redirect to login page
router.get("/course/:id", withAuth, async (req, res) => {
  try {
    const courseData = await Course.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Student,
          attributes: ["firstname", "lastname"],
        },
        {
          model: Group_,
          attributes: ["group_name"],
        },
      ],
    });

    const course = courseData.get({ plain: true });
console.log(course);
    res.render("courseId", {
      course,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
