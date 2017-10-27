const Trello = require('../src/controller/trello')

exports.getBoards = (req, res) => {
  console.log('<taskManager.js, getBoards> req.params.emailId = ', req.params.emailId)
  Trello.getBoards(req.params.emailId, (boards, error) => {
    if (error) return res.status(500).json({msg: error.msg + ' from DB'})
    res.status(200).json({boards: boards})
  })
}

exports.getTasks = (req, res) => {
  console.log('<getTasks> req.params.boardId = ', req.params.boardId)
  Trello.getTasks(req.params.boardId, (tasks, error) => {
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({tasks: tasks})
  })
}

exports.getCards = (req, res) => {
  console.log('<getCards> req.params.taskId = ', req.params.taskId)
  Trello.getCards(req.params.taskId, (cards, error) => {
    if (error) return res.send({msg: error.msg})
    res.send({cards: cards})
  })
}
exports.getCard = (req, res) => {
  Trello.getCard(req.params.cardId, (card, error) => {
    if (error) return res.send({msg: error.msg})
    res.send({card: card})
  })
}

exports.createBoard = (req, res) => {
  console.log('req.params.emailId = ', req.params.emailId)
  Trello.createBoard(req.params.emailId, req.body.boardName, (board, error) => {
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'new board created', board: board})
  })
}

exports.createTask = (req, res) => {
  console.log('<createTask > req.params.boardId = ', req.params.boardId, ' req.body.taskName= ', req.body.taskName)
  Trello.createTask(req.params.boardId, req.body.taskName, (task, error) => {
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'new task created', task: task})
  })
}

exports.createCard = (req, res) => {
  console.log('<createCard > req.params.taskId = ', req.params.taskId, ' req.body.cardName= ', req.body.cardName)
  Trello.createCard(req.params.taskId, req.body.cardName, (card, error) => {
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'new Card created', card: card})
  })
}

exports.updateBoard = (req, res) => {
  console.log('<taskManager.js, updateBoard> req.params.boardId = ', req.params.boardId, 'req.body.boardName = ', req.body.boardName)
  Trello.updateBoard(req.params.boardId, req.body.boardName, (board, error) => {
    console.log('<taskManager.js, updateBoard> board = ', board, ' error = ', error)
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'Board updated', board: board})
  })
}

exports.updateTask = (req, res) => {
  Trello.updateTask(req.params.taskId, req.body.taskName, (task, error) => {
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'Task updated'})
  })
}

exports.updateCard = (req, res) => {
  Trello.updateCard(req.params.cardId, req.body.cardDesc, req.body.cardDueDate, (card, error) => {
    if (error) return res.send({msg: error.msg})
    res.send({msg: 'Card updated'})
  })
}

exports.deleteBoard = (req, res) => {
  console.log('<deleteBoard> req.params.emailId = ', req.params.emailId, '  req.params.boardId = ', req.params.boardId)
  Trello.deleteBoard(req.params.emailId, req.params.boardId, (result, error) => {
    console.log('<taskManager.js, deleteBoard> result = ', result, ' error = ', error)
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'Board deleted'})
  })
}

exports.deleteTask = (req, res) => {
  console.log('<taskManager.js, deleteTask> req.params.boardId = ', req.params.boardId, '  req.params.taskId = ', req.params.taskId)
  Trello.deleteTask(req.params.boardId, req.params.taskId, (result, error) => {
    console.log('<taskManager.js, deleteTask>,result = ', result, '  error = ', error)
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'Task deleted'})
  })
}

exports.deleteCard = (req, res) => {
  console.log('<taskManager.js, deleteCard> req.params.taskId = ', req.params.taskId, '  req.params.cardId = ', req.params.cardId)
  Trello.deleteCard(req.params.taskId, req.params.cardId, (result, error) => {
    console.log('<taskManager.js, deleteCard> result = ', result, ' error = ', error)
    if (error) return res.status(500).json({msg: error.msg})
    res.status(200).json({msg: 'Card deleted'})
  })
}
