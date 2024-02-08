const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StudentCourse extends Model {}

StudentCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id',
      },
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'course',
          key: 'id',
        },
      },
    preference1_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'student',
          key: 'id',
        },
      },
      preference2_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'student',
          key: 'id',
        },
      },
      preference3_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'student',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'studentcourse',
  }
);

module.exports = StudentCourse;
