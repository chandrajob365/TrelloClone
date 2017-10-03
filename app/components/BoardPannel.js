import React from 'react'
import BoardList from './BoardList'
import data from '../../data.js'

class BoardPannel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: data.boards,
      currentBoardIndex: data.currentBoardIndex
    }
    this.addBoard = this.addBoard.bind(this)
    this.updateBoardName = this.updateBoardName.bind(this)
    this.displayTaskList = this.displayTaskList.bind(this)
    this.deleteBoard = this.deleteBoard.bind(this)
  }

  addBoard (boardName) {
    console.log('<BoardPannel addBoard > boardName = ', boardName)
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

  deleteBoard (boardId) {
    console.log('<BoardPannel, deleteBoard> boardId = ', boardId)
    let boardsCopy = Object.assign({}, this.state.boards)
    console.log('boardsCopy = ', boardsCopy)
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

  displayTaskList (boardId) {
    console.log('------------ Inside displayTaskList ------------------ boardId = ', boardId)
  }

  render () {
    console.log('<BoardPannel> this.state = ', this.state)
    return (
      <div className='nav'>
        <BoardList boards={this.state.boards}
          addBoard={this.addBoard}
          updateBoardName={this.updateBoardName}
          displayTaskList={this.displayTaskList}
          deleteBoard={this.deleteBoard} />
      </div>
    )
  }
}

export default BoardPannel
