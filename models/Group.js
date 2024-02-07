const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
      },
    project: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: false,
      },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Student',
        key: 'id',
      },
    },
    class_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Class',
          key: 'id',
        },
      
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
