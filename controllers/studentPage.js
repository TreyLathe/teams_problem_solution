
const router = require("express").Router();
const  {Student, Course, User, Group_} = require("../models");
const withAuth = require("../utils/auth");

// Use withAuth middleware to prevent access to route
//get all students
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const studentData = await Student.findAll({
      attributes: { exclude: ["password"] },
      include: [
      {
          model: User,
          attributes: ["name"],
        },
       ],
    });

    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    // Pass serialized data and session flag into template    
    const students = studentData.map((student) => student.get({ plain: true}));
  
    res.render("student", {
      students,
      logged_in: req.session.logged_in,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get student by id
router.get("/student/:id", withAuth, async (req, res) => {
  try {
    const studentData = await Student.findByPk(req.params.id, {
      include: [
        { model: Course,
        attributes: ["classname", "id"],
       },
        { model: User,
        attributes: ["id"],
       },
      ],
    });

    const student = studentData.get({ plain: true });
    console.log(student);
    res.render("studentId", {
      student,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/students");
    return;
  }

  res.render("login");
});

module.exports = router;
