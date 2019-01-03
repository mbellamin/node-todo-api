// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find({name: 'Maju Bellamin'}).toArray().then((users) => {
  //   console.log(JSON.stringify(users, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to find users', err);
  // });

  db.collection('Users').find({_id: new ObjectID('5c2cba27309fd021e0c7d030')}).toArray().then((users) => {
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});
