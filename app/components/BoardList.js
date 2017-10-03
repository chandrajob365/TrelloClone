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
    console.log('<BoardList> this.props.boards = ', this.props.boards)
    // console.log('Object keys = ', Object.keys(this.props.data.boards))
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
      <div>
        {rows}
        <div className='nav-item'>
          <input type='text' ref='boardName' value={this.state.boardName} placeholder='Add new Board' onChange={this.handleChange} />
          <input type='button' value='Create' onClick={this.handleCreate} />
        </div>
      </div>
    )
  }
}

export default BoardList
