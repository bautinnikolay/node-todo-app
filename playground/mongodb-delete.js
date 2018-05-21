const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err)
  }
  console.log('Connected to MongoDB server')

  const db = client.db('TodoApp')

  // db.collection('Todos').deleteMany({text: 'Eat lanch'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').deleteOne({text: 'Eat lanch'}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  }, (err) => {
    console.log('Something went wrong...', err)
  })

  //client.close()
})
