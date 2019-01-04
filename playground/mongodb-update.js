const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Users').find().toArray().then((users)=> {
//   console.log(JSON.stringify(users, undefined, 2));
// });

db.collection('Users').findOneAndUpdate(
  {name: 'Andrew'},
  {
    $set: {name: 'Andrew Mead'},
    $inc: {age: 1}
  },
  {
    returnNewDocument: true
  }
).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

db.close();

});
