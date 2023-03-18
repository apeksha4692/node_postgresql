'use strict';
const Sequelize = require('sequelize')

// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../sequelize-connection')

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const User = sequelize.define('certificate', {

  // Column-1, user_id is an object with 
  // properties like type, keys, 
  // validation of column.
  id: {

    // Sequelize module has INTEGER Data_Type.
    type: Sequelize.INTEGER,

    // To increment user_id automatically.
    autoIncrement: true,

    // user_id can not be null.
    allowNull: false,

    // For uniquely identify user.
    primaryKey: true
  },
  name: { type: Sequelize.STRING, allowNull: false },
  father_name: { type: Sequelize.STRING, allowNull: false },
  mother_name: { type: Sequelize.STRING, allowNull: false },
  gender: { type: Sequelize.STRING, allowNull: false },
  name_hoshpital: { type: Sequelize.STRING, allowNull: false },
  birth_weight: { type: Sequelize.STRING, allowNull: false },
  dob: { type: Sequelize.STRING, allowNull: false },
  birth_address: { type: Sequelize.STRING, allowNull: false },
  permanent_address: { type: Sequelize.STRING, allowNull: false },
})
sequelize.sync()
module.exports = User