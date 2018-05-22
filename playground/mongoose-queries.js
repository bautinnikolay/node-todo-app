const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

let id = '5b02a020dc8a9a2decf1228a'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user')
  }
  console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e)
})

// let id = '5b03e16ea5bf993960305d1e11'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => console.log(e))
