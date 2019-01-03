const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to Todos', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Maju Bellamin',
    age: 44,
    location: 'Sydney'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert to Users', err);
    }

    console.log(JSON.stringify(result.ops), undefined, 2);
  });

  db.close();
});
