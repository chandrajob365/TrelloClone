import React from 'react'
import AddBoard from './AddBoard'
import BoardList from './BoardList'

class BoardPannel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: {},
      currentBoardIndex: 0
    }
    this.addBoard = this.addBoard.bind(this)
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
            boardName: boardName
          }
        },
        currentBoardIndex: ++this.state.currentBoardIndex
      }
    )
  }

  render (props) {
    return (
      <div>
        <AddBoard addBoard={this.addBoard} />
        <BoardList boardList={this.state.boards} />
      </div>
    )
  }
}

export default BoardPannel
