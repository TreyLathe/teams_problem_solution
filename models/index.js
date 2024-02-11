const Student = require('./Student');
const Course = require('./Course');
const Groups = require('./Groups');
const StudentCourse = require('./StudentCourse');
const User = require('./User');

Student.hasOne(Groups, {
    foreignKey: 'student_id',
     });

Course.hasOne(Groups, {
    foreignKey: 'course_id',
    });

User.hasMany(Course, {
    foreignKey: 'user_id',  
    });

Course.belongsTo(User, {
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



module.exports = { User, Student, Course, Groups, StudentCourse };

