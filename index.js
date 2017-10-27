const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
const login = require('./server/routes/login')
const taskManager = require('./server/routes/taskManager')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/trello', { useMongoClient: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'db connection error:'))
db.on('open', () => {
  console.log('Mongo Db up and running....')
})
// tells the express to look for static files in these directories
app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))

app.post('/register', login.register) // working
app.post('/login', login.login) // working
// CRUD Board
app.get('/user/:emailId', taskManager.getBoards) // working
app.post('/user/:emailId', taskManager.createBoard) // working
app.put('/boards/:boardId', taskManager.updateBoard) // working
app.delete('/user/:emailId/boards/:boardId', taskManager.deleteBoard) // working
app.get('/boards/:boardId', taskManager.getTasks) // get list of tasks with cards detail

// CRUD task
app.put('/tasks/:taskId', taskManager.updateTask)
app.delete('/boards/:boardId/tasks/:taskId', taskManager.deleteTask)
app.post('/tasks/:taskId', taskManager.createCard)
app.post('/boards/:boardId', taskManager.createTask)
app.delete('/tasks/:taskId/cards/:cardId', taskManager.deleteCard)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000')
})
