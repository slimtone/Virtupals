const router = require('express').Router();
const {Answer} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Answer.findAll({})
    .then(answers => {
      res.json(answers);
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  Answer.create(req.body)
    .then(answer => {
      req.json(answer);
    })
    .catch(next);
})
