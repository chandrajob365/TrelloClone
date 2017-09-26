import React from 'react'

class Board extends React.Component {
  render (props) {
    return (
      <li> {this.props.boardName} </li>
    )
  }
}

export default Board
