const Student = require('./Student');
const Course = require('./Course');
const Group = require('./Group');
const StudentCourse = require('./StudentCourse');

Student.hasOne(Group, {
    foreignKey: 'student_id',
     });

Course.hasOne(Group, {
    foreignKey: 'course_id',
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



module.exports = { Student, Course, Group, StudentCourse };

