import React from 'react'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    console.log('<Board.js> props = ', props)
    this.handleRename = this.handleRename.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDisplayTaskList = this.handleDisplayTaskList.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleRename (e) {
    console.log('e.target.value = ', e.target.value, ' boardName = ', this.props.board.boardName)
    this.refs.inp_rename.style.display = 'inline-block'
    this.refs.btn_rename.style.display = 'none'
    this.refs.btn_Ok.style.display = 'inline-block'
    this.refs.btn_Cancel.style.display = 'inline-block'
    this.refs.btn_Delete.style.display = 'none'
  }

  handleChange (e) {
    this.setState({value: e.target.value})
    console.log('Inside Handle change ')
  }

  handleOk (e) {
    if (this.state.value.length > 0) {
      console.log('this.state.value = ', this.state.value)
      console.log('<Board.js, handleOk> this.props.board._id = ', this.props.board._id)
      this.props.updateBoardName(this.state.value, this.props.board._id)
    }
    this.hide()
  }

  handleCancel (e) {
    this.setState({value: ''})
    this.hide()
  }

  handleDisplayTaskList (e) {
    if (e.target.tagName === 'DIV') {
      this.props.displayTaskList(this.props.board._id)
    }
  }

  handleDelete (e) {
    this.props.deleteBoard(this.props.board._id)
  }

  hide () {
    this.refs.inp_rename.style.display = 'none'
    this.refs.btn_rename.style.display = 'inline-block'
    this.refs.btn_Ok.style.display = 'none'
    this.refs.btn_Cancel.style.display = 'none'
    this.refs.btn_Delete.style.display = 'inline-block'
  }

  render (props) {
    console.log('<Board.js, render> this.props.board = ', this.props.board)
    return (
      <div className='board' onClick={this.handleDisplayTaskList}>
        <span style={{display: 'block'}}>{this.props.board.boardName }</span>
        <input type='text' ref='inp_rename' value={this.value} style={{display: 'none'}} onChange={this.handleChange} />
        <input type='button' className='button-OK' ref='btn_rename' value='Rename' style={{display: 'inline-block'}} onClick={this.handleRename} />
        <input type='button' className='button-OK' ref='btn_Ok' value='Ok' style={{display: 'none'}} onClick={this.handleOk} />
        <input type='button' className='button-Cancel' ref='btn_Cancel' value='Cancel' style={{display: 'none'}} onClick={this.handleCancel} />
        <input type='button' className='button-Cancel' ref='btn_Delete' value='Delete' style={{display: 'inline-block'}} onClick={this.handleDelete} />
      </div>
    )
  }
}

export default Board
