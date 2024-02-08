const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
  {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false,
    },
    group_name: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
      },
    project_name: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group',
  }
);

module.exports = Group;
