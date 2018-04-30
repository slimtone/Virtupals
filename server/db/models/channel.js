const Sequelize = require('sequelize');
const db = require('../db');

const Channel = db.define('channel', {
  name: Sequelize.STRING,
  user1: Sequelize.INTEGER,
  user2: Sequelize.INTEGER,
});

module.exports = Channel;
