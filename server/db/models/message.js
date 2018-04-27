const Sequelize = require('sequelize');
const db = require('../db');
const Author = require('./user');

const Message = db.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  defaultScope: {
    include: [
      { model: Author}
    ]
  }
});

module.exports = Message;
