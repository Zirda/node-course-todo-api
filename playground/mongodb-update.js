//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('5b4e536fe01788b15aef3247')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  //(filter, update, options, callback)

  //Uppdatera Yoldas Balbo till Yoldas Jansson samt minska ålder till 50

  db.collection('Users').findOneAndUpdate({
    name: 'Yoldas Balboa'
  }, {
    $set: {
      name: 'Yoldas Jansson'
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })



  //client.close();
});
