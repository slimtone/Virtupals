const User = require('./user')
const Question = require('./question');
const Answer = require('./answer');
const Channel = require('./channel');
const Message = require('./message');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Channel.hasMany(Message, {
   onDelete: 'cascade',
   hooks: true
 });

User.hasMany(Message);
Message.belongsTo(Channel);
Message.belongsTo(User);
// Question.hasMany(Answer, {constraints: false});
// Answer.belongsTo(Question, {onDelete: 'cascade', constraints: false});
Answer.belongsTo(User, {onDelete: 'cascade', constraints: false});

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Question,
  Answer,
  Channel,
  Message,
}
