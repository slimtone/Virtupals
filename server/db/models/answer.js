const Sequelize = require('sequelize');
const db = require('../db');

const Answer = db.define('answer', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  position: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  }
}, {
  classMethods: {
    createAndAssocWithQuestion: (text, position, questionInstance) => {
      return Answer.create({
        text,
        position
      })
      .then(ans => {
        return ans.setQuestion(questionInstance);
      })
      .then(ans => {
        return ans;
      })
      .catch(next);
    }
  }
})

module.exports = Answer;
