const router = require('express').Router()
const {Question} = require('../db/models')
module.exports = router

// GETS ALL QUESTIONS
router.get('/', (req, res, next) => {
  Question.findAll({})
    .then(questions => {
      if (questions){
        res.status(200).json(questions);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
})

