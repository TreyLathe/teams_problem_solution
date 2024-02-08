const sequelize = require('./config/connection');
const Class = require('../models/Class');
const Student = require('../models/Student')
const Group = require('../models/Group');
const StudentClass = require('../models/StudentClass');

const studentData = require('./students.json');
const classData = require('./class.json');
const groupData = require('./group.json');
const scData = require ('./studentclass.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Class.bulkCreate(classData, {
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

    await StudentClass.bulkCreate(scData, {
        individualHooks: true,
        returning: true,
      });
  
    process.exit(0);
  };
  
  seedDatabase();