const router = require('express').Router();
const {Answer, User, Channel} = require('../db/models');
const Sequelize = require('sequelize');

module.exports = router;

router.get('/', (req, res, next) => {
  Answer.findAll({})
    .then(answers => {
      res.json(answers);
    })
    .catch(next);
  })

  router.post('/', (req, res, next) => {
    // console.log('REQ.BODY', req.body.userId);
  const Op = Sequelize.Op;
  const id = req.body.userId;
  let matches = 0;
  let allAnswers;
  let currentUserAnswer;
  Answer.create(req.body)
    .then(answer => {
      currentUserAnswer = answer.dataValues;
      Answer.findAll(
        {
        attributes: ['q1', 'q2', 'q3', 'userId'],
        raw: true,
        where: {
          userId: {
            [Op.ne]: id
          }
        }
      }
    )
    .then( (user) => {
      allAnswers = user[0];
      return Object.keys(currentUserAnswer).reduce((map, k) => {
        if (currentUserAnswer[k] === allAnswers[k])  matches += 1;
      }, {})
    }
  ).then(() => {
    if (matches >= 2){
      Channel.create({
        name: allAnswers.userId,
        user1: id,
        user2: allAnswers.userId
      })
    }
  })
    .catch(next);
  })
})
