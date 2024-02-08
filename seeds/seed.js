const sequelize = require('../config/connection.js');
const { Student, Course, Group, StudentCourse } = require('../models');

const studentData = require('./students.json');
const classData = require('./course.json');
const groupData = require('./group.json');
const scData = require ('./studentcourse.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Course.bulkCreate(classData, {
      individualHooks: true,
      returning: true,
    });

    await Student.bulkCreate(studentData, {
        individualHooks: true,
        returning: true,
      });

    await Group.bulkCreate(groupData, {
        individualHooks: true,
        returning: true,
      }); 

    await StudentCourse.bulkCreate(scData, {
        individualHooks: true,
        returning: true,
      });
  
    process.exit(0);
  };
  
  seedDatabase();