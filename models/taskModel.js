const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')

const Task = db.define('Tasks', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  limitDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  startDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  finishDate: {
    type: DataTypes.DATE,
  },
  status: {
    allowNull: false,
    defaultValue: 'active',
    type: DataTypes.STRING,
  },  
})

module.exports = { Task }