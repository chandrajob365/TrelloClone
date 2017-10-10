import React from 'react'
import Board from '../react_reduxComponent/Board'
class Boards extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boardName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleChange (e) {
    this.setState(
      {boardName: e.target.value}
    )
  }

  handleCreate (e) {
    this.props.addBoard(this.state.boardName)
    this.setState({boardName: ''})
    this.refs.boardName.focus()
  }

  render (props) {
    console.log('<Boards.js, render > props = ', this.props)
    let boards = this.props.boards
    let rows = []
    if (boards) {
      console.log('<Boards.js, render> boards = ', boards)
      Object.keys(boards).map(board => {
        rows.push(
          <Board key={boards[board].boardId}
            board={boards[board]}
            updateBoardName={this.props.updateBoardName}
            deleteBoard={this.props.deleteBoard}
            displayTaskList={this.props.displayTaskList} />
        )
      })
    }
    console.log('<Boards.js, render> rows = ', rows)
    return (
      <div className='board-pannel-container'>
        <div className='boards'>
          {rows}
          <div className='create-board'>
            <input type='text' ref='boardName' value={this.state.boardName} placeholder='Add new Board' onChange={this.handleChange} />
            <input className='button-OK' type='button' value='Create' onClick={this.handleCreate} />
          </div>
        </div>
      </div>
    )
  }
}

export default Boards
