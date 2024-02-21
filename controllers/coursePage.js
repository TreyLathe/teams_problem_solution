const router = require("express").Router();
const { Course, User, Student, Group_ } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection.js");

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
// router.get("/course/:id", withAuth, async (req, res) => {
//   try {
//     const courseData = await Course.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//         {
//           model: Student,
//           attributes: ["firstname", "lastname"],
//         },
//         {
//           model: Group_,
//           attributes: ["group_name"],
//         },
//       ],
//     });

//     const course = courseData.get({ plain: true });
// console.log(course);
//     res.render("courseId", {
//       course,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/course/:id", withAuth, async (req, res) => {
  try  {
    const studentsInCourseQuery = `
    SELECT student.firstname, student.lastname, student.id
    FROM student 
    JOIN studentcourse ON student.id = studentcourse.student_id 
    JOIN course ON studentcourse.course_id = course.id 
    WHERE course.id = ${req.params.id};`;

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
                // Execute the query
    const [studentsInCourse, metadata] = await sequelize.query(studentsInCourseQuery);
    console.log("hello!")
    console.log(studentsInCourse);
  
    res.render('courseId', { course, enrolledStudents: studentsInCourse });
    // Send the response
    // res.json(studentsInCourse);
  
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;


//const courseId = req.params.courseId; // Assuming courseId is obtained from request parameters

// const studentsInCourse = await Student.findAll({
//   attributes: ['firstname', 'lastname'], // Select firstname and lastname columns
//   include: [{
//     model: StudentCourse, // Include the StudentCourse model
//     where: { courseId: courseId }, // Use the dynamic courseId value
//     include: [{
//       model: Course // Include the Course model
//     }]
//   }]
// });