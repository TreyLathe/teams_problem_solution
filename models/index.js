const Student = require('./Student.js');
const Course = require('./Course.js');
const Group_ = require('./Groups.js');
const StudentCourse = require('./StudentCourse.js');
const User = require('./User.js');

Student.hasOne(Group_, {
    foreignKey: 'student_id',
     });

Course.hasOne(Group_, {
    foreignKey: 'course_id',
    });

User.hasMany(Course, {
    foreignKey: 'user_id',  
    });

Course.belongsTo(User, {
    foreignKey: 'user_id',
    });

User.hasMany(Student, {  
    foreignKey: 'user_id',  
    });

Student.belongsTo(User, { 
    foreignKey: 'user_id',
    });

    
Student.belongsToMany(Course, {
    through: StudentCourse,
    foreignKey: 'student_id',
    });

Course.belongsToMany(Student, {
    through: StudentCourse,
    foreignKey: 'course_id',
    });

StudentCourse.belongsTo(Student, {
    foreignKey: 'student_id',
    });

StudentCourse.belongsTo(Course, {
    foreignKey: 'course_id',
    });



module.exports = { User, Student, Course, Group_, StudentCourse };

