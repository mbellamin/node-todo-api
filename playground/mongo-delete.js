const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the server', err);
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').deleteMany({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').deleteOne({completed: false}).then((result) => {
//   console.log(result);
// });

db.collection('Todos').findOneAndDelete({_id: new ObjectID('5c2e95660e965d843e0dfe63')}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

db.close();

});
