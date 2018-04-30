/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Question, Answer, Channel, Message} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'geoff@email.com', password: '123', firstName: 'Geoff', lastName: 'Banks', phoneNumber: '7187213241', addressLine1: '5 hanover square', city: 'New York', state: 'NY', zip: '11000', quizPoints: 31}),
    User.create({email: 'corey@email.com', password: '123', firstName: 'Corey', lastName: 'Banks', phoneNumber: '7187213241', addressLine1: '5 hanover square', city: 'New York', state: 'NY', zip: '11000', quizPoints: 31}),
    User.create({email: 'omri@email.com', password: '123', firstName: 'Omri', lastName: 'Banks', phoneNumber: '7187213241', addressLine1: '5 hanover square', city: 'New York', state: 'NY', zip: '11000', quizPoints: 31})
  ])

  const questions = await Promise.all([
    Question.create({question: 'Do you prefer morning or night showers?'}),
    Question.create({question: 'What color are the majority of your clothes in your closet?'}),
    Question.create({question: 'Do you prefer smart comedy, stupid/silly comedy or no comedy at all??'}),
  ])

  const channels = await Promise.all([
    Channel.create({name: 'random'}),
    Channel.create({name: 'general'}),
    Channel.create({name: 'fullstack'}),
    Channel.create({name: 'personal'}),
  ]);

  const id = () => Math.round(Math.random() * (users.length -1)) + 1;

  const messages = await Promise.all([
    Message.create({userId: id(), content: 'I like react', channelId: 1}),
    Message.create({userId: id(), content: 'I like redux', channelId: 1}),
    Message.create({userId: id(), content: 'I like coding', channelId: 1}),
    Message.create({userId: id(), content: 'I like js', channelId: 2}),
    Message.create({userId: id(), content: 'I like blah', channelId: 2}),
    Message.create({userId: id(), content: 'I like same thing', channelId: 2}),
    Message.create({userId: id(), content: 'I like thunks', channelId: 2}),
    Message.create({userId: id(), content: 'I like backend', channelId: 3}),
    Message.create({userId: id(), content: 'I like salad', channelId: 3}),
    Message.create({userId: id(), content: 'I like drinks', channelId: 3}),
    Message.create({userId: id(), content: 'I like dogs', channelId: 4}),
    Message.create({userId: id(), content: 'I like cats', channelId: 4}),
    Message.create({userId: id(), content: 'I dont like myself', channelId: 4}),
  ])

  const answers = await Promise.all([
    Answer.create({q1: 1, q2: 2, q3: 3, q4: 2, q5: 1, userId: 1})
  ])

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users, ${questions.length} questions`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
