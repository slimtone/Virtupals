const Sequelize = require('sequelize');
const db = require('../db');

const Option = db.define('options', {
  option: {
    type: Sequelize.STRING
  },
  questionId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Option;
