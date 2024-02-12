
const router = require("express").Router();
const  {Student, Course, User, Group_} = require("../models");
const withAuth = require("../utils/auth");

// Use withAuth middleware to prevent access to route
//get all students
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const groupData = await Group_.findAll({
    //   attributes: { exclude: ["password"] },
    //   include: [
    //   {
    //       model: User,
    //       attributes: ["name"],
    //     },
    //     {
    //       model: Course,
    //       attributes: ["title", "description"],
    //     },
    //     {
    //       model: Student,
    //       attributes: ["firstname", "lastname"],
    //     },
    //    ],
    });
   console.log(groupData);
    const groups = groupData.map((student) => student.get({ plain: true}));
  
    res.render("groups", {
      groups,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get student by id
router.get("/singlegroup/:id", withAuth, async (req, res) => {
  try {
    const groupData = await Groups.findByPk(req.params.id, {
      include: [{ model: Course }],
    });

    const groupSingle = groupData.get({ plain: true });

    res.render("groups", {
      ...groupSingle,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/courses");
    return;
  }

  res.render("login");
});

module.exports = router;
