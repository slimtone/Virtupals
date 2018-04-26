const Sequelize = require('sequelize');
const db = require('../db');

const UserAnswer = db.define('userAnswer', {
  UserId: {
    type: Sequelize.INTEGER
  },
  AnswerId: {
    type: Sequelize.INTEGER
  }
})

module.exports = UserAnswer;
