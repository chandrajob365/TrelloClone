import React from 'react'
import BoardPannel from './BoardPannel'
import TaskPannel from './TaskPannel'
import data from '../../data.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: data.boards || {},
      currentBoardIndex: data.currentBoardIndex,
      tasks: data.tasks,
      currentTaskIndex: data.currentTaskIndex,
      activeBoardTasks: []
    }
    this.displayTaskList = this.displayTaskList.bind(this)
    this.addBoard = this.addBoard.bind(this)
    this.updateBoardName = this.updateBoardName.bind(this)
    this.deleteBoard = this.deleteBoard.bind(this)
  }

  displayTaskList (boardId) {
    console.log('<App.js , displayTaskList> boardId = ', boardId)
    let boardTasksList = this.state.boards[boardId].taskList
    console.log('boardTasksList = ', boardTasksList)
    let activeBoardTasks = []
    boardTasksList.forEach(taskId => {
      activeBoardTasks.push(this.state.tasks[taskId])
    })
    console.log('activeBoardTasks = ', activeBoardTasks)
    this.setState({
      activeBoardTasks: activeBoardTasks
    })
  }

  addBoard (boardName) {
    console.log('<App.js addBoard > boardName = ', boardName)
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
        currentBoardIndex: ++this.state.currentBoardIndex
      }
    )
  }

  updateBoardName (boardName, boardId) {
    console.log('updatedName = ', boardName, ' id = ', boardId)
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

  deleteBoard (boardId, activeBoardId) {
    console.log('<App.js, deleteBoard> boardId = ', boardId, '  activeBoardId = ', activeBoardId)
    let boardsCopy = Object.assign({}, this.state.boards)
    console.log('boardsCopy = ', boardsCopy)
    if (boardId === activeBoardId) {
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

  render (props) {
    return (
      <div className='app'>
        <BoardPannel
          boards={this.state.boards}
          addBoard={this.addBoard}
          updateBoardName={this.updateBoardName}
          displayTaskList={this.displayTaskList}
          deleteBoard={this.deleteBoard} />
        <TaskPannel
          activeBoardTasks={this.state.activeBoardTasks} />
      </div>
    )
  }
}

export default App
