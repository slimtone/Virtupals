const Sequelize = require('sequelize');
const db = require('../db');

const Channel = db.define('channel', {
  name: Sequelize.STRING
});

module.exports = Channel;
