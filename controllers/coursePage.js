const router = require("express").Router();
const { Course, User, Student, Group } = require("../models");

//get all courses if logged in, otherwise redirect to login page
router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const courseData = await Course.findAll({
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
          model: Group,
          attributes: ["group_name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const courses = courseData.map((course) => course.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      courses,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//getting course by id if logged in, otherwise redirect to login page
router.get("/course/:id", async (req, res) => {
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
          model: Group,
          attributes: ["group_name"],
        },
      ],
    });

    const course = courseData.get({ plain: true });

    res.render("course", {
      ...course,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
