import React from 'react'
import BoardPannel from './BoardPannel'
import TaskPannel from './TaskPannel'
import data from '../../data.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: data.boards || {},
      currentBoardIndex: data.currentBoardIndex || 0,
      tasks: data.tasks || {},
      currentTaskIndex: data.currentTaskIndex || 0,
      activeBoardId: '',
      activeBoardTasks: []
    }
    this.displayTaskList = this.displayTaskList.bind(this)
    this.addBoard = this.addBoard.bind(this)
    this.updateBoardName = this.updateBoardName.bind(this)
    this.deleteBoard = this.deleteBoard.bind(this)
    this.createTask = this.createTask.bind(this)
  }

  displayTaskList (boardId) {
    let boardTasksList = this.state.boards[boardId].taskList
    let activeBoardTasks = []
    boardTasksList.forEach(taskId => {
      activeBoardTasks.push(this.state.tasks[taskId])
    })
    this.setState({
      activeBoardTasks: activeBoardTasks,
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
    for (let boardKey in boardsCopy) {
      if (boardKey === boardId) {
        delete boardsCopy[boardId]
        break
      }
    }
    this.setState({
      boards: boardsCopy,
      currentBoardIndex: --this.state.currentBoardIndex
    })
  }

  createTask (taskName) {
    let boardId = this.state.activeBoardId
    let taskId = this.state.currentTaskIndex + taskName
    let newTask = {
      taskId: taskId,
      taskName: taskName,
      taskDesc: '',
      taskDueDate: '',
      taskCreationDate: new Date().toISOString()
    }
    this.setState(
      {
        ...this.state,
        boards: {
          ...this.state.boards,
          [boardId]: {
            ...this.state.boards[boardId],
            taskList: this.state.boards[boardId].taskList.concat(taskId) // check if task is undefined ternary operator
          }
        },
        tasks: {
          ...this.state.tasks,
          [taskId]: newTask
        },
        currentTaskIndex: ++this.state.currentTaskIndex,
        activeBoardTasks: this.state.activeBoardTasks.concat(newTask)
      }
    )
  }

  render (props) {
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
          createTask={this.createTask} />
      </div>
    )
  }
}

export default App
