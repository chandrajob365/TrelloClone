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
          displayTaskList={this.displayTaskList} />
      </div>
    )
  }
}

export default BoardPannel
