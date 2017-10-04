import React from 'react'
import Board from './Board'

class BoardList extends React.Component {
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
    let boards = this.props.boards
    let rows = []
    for (let board in boards) {
      rows.push(
        <Board key={boards[board].boardId}
          board={boards[board]}
          updateBoardName={this.props.updateBoardName}
          displayTaskList={this.props.displayTaskList}
          deleteBoard={this.props.deleteBoard} />
      )
    }
    return (
      <div className='board-pannel'>
        {rows}
        <div className='create-board'>
          <input type='text' ref='boardName' value={this.state.boardName} placeholder='Add new Board' onChange={this.handleChange} />
          <input className='button-OK' type='button' value='Create' onClick={this.handleCreate} />
        </div>
      </div>
    )
  }
}

export default BoardList
