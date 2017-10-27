import React from 'react'
import Board from './Board'
import {Card} from 'material-ui/Card'

class DashBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boardName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.displayTaskList = this.displayTaskList.bind(this)
  }

  componentDidMount () {
    this.props.getBoards(() => {
      console.log('<DashBoard.js, componentDidMount> ')
    })
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

  displayTaskList (boardId) {
    console.log('<DashBoard.js, displayTaskList> boardId = ', boardId)
    this.props.history.push({
      pathname: '/tasklist',
      state: {boardId: boardId}
    })
  }

  render (props) {
    console.log('<Boards.js, render > props = ', this.props)
    let boards = this.props.boards
    let rows = []
    if (boards) {
      console.log('<Boards.js, render> boards = ', boards)
      Object.keys(boards).map(board => {
        console.log('<DashBoard.js, render> board = ', boards[board])
        rows.push(
          <Board key={boards[board]._id}
            board={boards[board]}
            updateBoardName={this.props.updateBoardName}
            deleteBoard={this.props.deleteBoard}
            displayTaskList={this.displayTaskList} />
        )
      })
    }
    console.log('<Boards.js, render> rows = ', rows)
    return (
      <Card className='container'>
        <div className='board-pannel-container'>
          <div className='boards'>
            {rows}
            <div className='create-board'>
              <input type='text' ref='boardName' value={this.state.boardName} placeholder='Add new Board' onChange={this.handleChange} />
              <input className='button-OK' type='button' value='Create' onClick={this.handleCreate} />
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default DashBoard
