
const router = require("express").Router();
const { Student, Course } = require("../models");
const withAuth = require("../utils/auth");

// Use withAuth middleware to prevent access to route
//get all students
router.get("/student", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const studentData = await Student.findByPk(req.session.id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Course }], 
    });

    const student = studentData.get({ plain: true });

    res.render("student", {
      student, 
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get student by id
router.get("/student/:id", withAuth, async (req, res) => {
  try {
    const studentData = await Student.findByPk(req.params.id, {
      include: [{ model: Course }],
    });

    const student = studentData.get({ plain: true });
    console.log(student);
    res.render("student", {
      student,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/student");
    return;
  }

  res.render("login");
});

module.exports = router;
