import React from 'react'
import AddBoard from './AddBoard'
import BoardList from './BoardList'
import data from '../../data.js'

class BoardPannel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: {},
      currentBoardIndex: 0
    }
    // this.addBoard = this.addBoard.bind(this)
    // this.renameBoard = this.renameBoard.bind(this)
  }

  // addBoard (boardName) {
  //   let boardId = this.state.currentBoardIndex + boardName
  //   this.setState(
  //     {
  //       ...this.state,
  //       boards: {
  //         ...this.state.boards,
  //         [boardId]: {
  //           boardId: boardId,
  //           boardName: boardName
  //         }
  //       },
  //       currentBoardIndex: ++this.state.currentBoardIndex
  //     }
  //   )
  // }
  //
  // renameBoard (boardName) {
  //
  // }

  render (props) {
    return (
      <div className='nav'>
        <BoardList data={data} />
      </div>
    )
  }
}

export default BoardPannel
