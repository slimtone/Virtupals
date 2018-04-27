const router = require('express').Router();
const { Message, User } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.findById(req.user.id)
  .then(user => {
    const message = Message.build({firstName: req.user.firstName, content: req.body.content, channelId: req.body.channelId});
    message.setUser(user, {save: false});
    return message.save()
      .then(message => {
        message = message.toJSON();
        message.user = user;
        return message;
      });
  })
    .then(message => {
      res.json(message);
    })
    .catch(next);
})

router.put('/:messageId', (req, res, next) => {
  const messageId = req.params.messageId;

  Message.findById(messageId)
    .then(message => message.update(req.body))
    .catch(next);
})

router.delete('/:messageId', (req, res, next) => {
  const id = req.params.messageId;

  Message.destroy({where: {id} })
    .then(() => res.status(204).end())
    .catch(next);
})
