const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user')

// var id = '5b4ea3b8f142b7294823439811';
//
// if (!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


var userID = '5b4e692f7df5c523089fc915';

if (!ObjectID.isValid(userID)){
  return console.log('Invalid ID');
}


User.findById(userID).then((user) => {
  if (!user){
    return console.log('id not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));

//ID 5b4e692f7df5c523089fc915

//user.findById

//User not found
//User found
//Handle error
