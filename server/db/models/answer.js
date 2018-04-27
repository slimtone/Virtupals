const Sequelize = require('sequelize');
const db = require('../db');

const Answer = db.define('answer', {
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
})

module.exports = Answer;
