import React from 'react'
import Board from './Board'

class BoardList extends React.Component {
  render (props) {
    let boards = this.props.boardList
    let rows = []
    for (let board in boards) {
      rows.push(
        <Board key={boards[board].boardId} boardName={boards[board].boardName} />
      )
    }
    return (
      <div>
        <ul>
          {rows}
        </ul>
      </div>
    )
  }
}

export default BoardList
