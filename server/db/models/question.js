const Sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('question', {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Question;
