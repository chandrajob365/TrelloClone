import React from 'react'
import BoardPannel from './BoardPannel'
import TaskPannel from './TaskPannel'
import data from '../../data.js'
import CardModal from './CardModal'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: data.boards || {},
      currentBoardIndex: data.currentBoardIndex || 0,
      tasks: data.tasks || {},
      currentTaskIndex: data.currentTaskIndex || 0,
      activeBoardId: '',
      activeBoardTasks: [],
      cards: data.cards || {},
      currentCardIndex: data.currentCardIndex || 0,
      isOpen: false,
      openedCardDetail: {cardId: '', taskName: ''}
    }
    this.displayTaskList = this.displayTaskList.bind(this)
    this.addBoard = this.addBoard.bind(this)
    this.updateBoardName = this.updateBoardName.bind(this)
    this.deleteBoard = this.deleteBoard.bind(this)
    this.createTask = this.createTask.bind(this)
    this.createCard = this.createCard.bind(this)
    this.updateTaskName = this.updateTaskName.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.toggleCardModal = this.toggleCardModal.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.handleDeleteCard = this.handleDeleteCard.bind(this)
  }

  displayTaskList (boardId) {
    this.setState({
      activeBoardTasks: this.state.boards[boardId].taskList,
      activeBoardId: boardId
    })
  }

  addBoard (boardName) {
    let boardId = this.state.currentBoardIndex + boardName
    this.setState(
      {
        ...this.state,
        boards: {
          ...this.state.boards,
          [boardId]: {
            boardId: boardId,
            boardName: boardName,
            taskList: [],
            desc: ''
          }
        },
        currentBoardIndex: ++this.state.currentBoardIndex,
        activeBoardId: boardId,
        activeBoardTasks: []
      }
    )
  }

  updateBoardName (boardName, boardId) {
    this.setState(
      {
        ...this.state,
        boards: {
          ...this.state.boards,
          [boardId]: {
            boardId: boardId,
            boardName: boardName,
            taskList: [],
            desc: ''
          }
        }
      }
    )
  }

  deleteBoard (boardId) {
    let boardsCopy = Object.assign({}, this.state.boards)
    if (boardId === this.state.activeBoardId) {
      this.setState({activeBoardTasks: []})
    }
    delete boardsCopy[boardId]
    this.setState({
      boards: boardsCopy,
      currentBoardIndex: --this.state.currentBoardIndex
    })
  }

  createTask (taskName) {
    let boardId = this.state.activeBoardId
    console.log('<App.js, createTask > boardId = ', boardId)
    let taskId = this.state.currentTaskIndex + taskName
    let newTask = {
      taskId: taskId,
      taskName: taskName,
      taskDesc: '',
      taskDueDate: '',
      taskCreationDate: new Date().toLocaleDateString(),
      cards: []
    }
    this.setState(
      {
        ...this.state,
        boards: {
          ...this.state.boards,
          [boardId]: {
            ...this.state.boards[boardId],
            taskList: this.state.boards[boardId].taskList.concat(taskId)
          }
        },
        tasks: {
          ...this.state.tasks,
          [taskId]: newTask
        },
        currentTaskIndex: ++this.state.currentTaskIndex,
        activeBoardTasks: this.state.boards[boardId].taskList.concat(taskId)
      }
    )
  }

  updateTaskName (taskId, taskName) {
    console.log('<App.js, updateTaskName> taskId = ', taskId, '  taskName = ', taskName)
    this.setState(
      {
        ...this.state,
        tasks: {
          ...this.state.tasks,
          [taskId]: {
            ...this.state.tasks[taskId],
            taskName: taskName
          }
        }
      }
    )
  }

  deleteTask (taskId) {
    let tasksCopy = Object.assign({}, this.state.tasks)
    delete tasksCopy[taskId]
    this.setState(
      {
        ...this.state,
        tasks: tasksCopy
      }
    )
  }

  createCard (cardName, taskId) {
    let cardId = this.state.currentCardIndex + cardName
    let newCard = {
      cardId: cardId,
      cardName: cardName,
      cardDesc: '',
      cardDueDate: '',
      cardCreationDate: new Date().toLocaleDateString() // Format -> '12/21/2017'
    }
    this.setState(
      {
        ...this.state,
        tasks: {
          ...this.state.tasks,
          [taskId]: {
            ...this.state.tasks[taskId],
            cards: this.state.tasks[taskId].cards.concat(cardId)
          }
        },
        cards: {
          ...this.state.cards,
          [cardId]: newCard
        },
        currentCardIndex: ++this.state.currentCardIndex
      }
    )
  }

  toggleCardModal (cardId, taskName) {
    console.log('<App.js, toggleCardModal> cardId = ', cardId)
    this.setState({
      isOpen: !this.state.isOpen,
      openedCardDetail: {
        cardId: cardId || '',
        taskName: taskName || ''
      }
    })
  }

  updateCard (cardId, cardDesc, cardDueDate) {
    console.log('<App.js, updateCard> cardId = ', cardId, '  cardDes = ', cardDesc, '  cardDueDate = ', cardDueDate)
    this.setState({
      ...this.state,
      cards: {
        ...this.state.cards,
        [cardId]: {
          ...this.state.cards[cardId],
          cardDesc: cardDesc,
          cardDueDate: cardDueDate
        }
      }
    })
  }

  handleDeleteCard (cardId) {
    console.log('<App.js, handleDeleteCard > cardId = ', cardId)
    let cardsCopy = Object.assign({}, this.state.cards)
    delete cardsCopy[cardId]
    this.setState(
      {
        ...this.state,
        cards: cardsCopy
      }
    )
  }

  render (props) {
    let modal = null
    if (this.state.isOpen) {
      modal = <CardModal isOpen={this.state.isOpen}
        cards={this.state.cards}
        openedCardDetail={this.state.openedCardDetail}
        onClose={this.toggleCardModal}
        updateCard={this.updateCard} />
    } else {
      modal = null
    }
    return (
      <div className='app-container'>
        <BoardPannel
          boards={this.state.boards}
          addBoard={this.addBoard}
          updateBoardName={this.updateBoardName}
          displayTaskList={this.displayTaskList}
          deleteBoard={this.deleteBoard} />
        <TaskPannel
          activeBoardTasks={this.state.activeBoardTasks}
          tasks={this.state.tasks}
          createTask={this.createTask}
          updateTaskName={this.updateTaskName}
          deleteTask={this.deleteTask}
          cards={this.state.cards}
          createCard={this.createCard}
          toggleCardModal={this.toggleCardModal}
          handleDeleteCard={this.handleDeleteCard} />
        {modal}
      </div>
    )
  }
}

export default App
