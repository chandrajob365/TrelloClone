import React from 'react'
import Board from './Board'

class BoardList extends React.Component {
  render (props) {
    console.log('this.props = ', this.props.data.boards)
    console.log('Object keys = ', Object.keys(this.props.data.boards))
    let boards = this.props.data.boards
    let rows = []
    for (let board in boards) {
      rows.push(
        <Board key={boards[board].boardId} boardName={boards[board].boardName} />
      )
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}

export default BoardList
