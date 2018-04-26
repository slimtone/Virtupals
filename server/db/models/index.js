const User = require('./user')
const Question = require('./question');
const Answer = require('./answer');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(Answer, {through: 'UserAnswers'});
Question.hasMany(Answer, {constraints: false});
Answer.belongsTo(Question, {onDelete: 'cascade', constraints: false});
Answer.belongsToMany(User, {through: 'UserAnswers'});



/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Question,
  Answer
}
