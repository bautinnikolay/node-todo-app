let express = require('express')
let bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

let {mongoose} = require('./db/mongoose')
let {Todo} = require('./models/todo')
let {User} = require('./models/user')

let app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send()
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send()
  })
})

app.get('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send()
  }
  Todo.findById(req.params.id).then((todo) => {
    if(!todo) {
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((e) => {
    res.status(400).send()
  })
})

app.delete('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send()
  }
  Todo.findByIdAndRemove(req.params.id).then((todo) => {
    if(!todo) {
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((e) => {
    console.log(JSON.stringify(e))
    res.status(400).send(e.message)
  })
})

// app.update('/todos/:id', (req, res) => {
//
// })

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = {app}
