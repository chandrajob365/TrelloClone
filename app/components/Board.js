import React from 'react'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleRename = this.handleRename.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDisplayTaskList = this.handleDisplayTaskList.bind(this)
  }

  handleRename (e) {
    console.log('e.target.value = ', e.target.value, ' boardName = ', this.props.board.boardName)
    this.refs.inp_rename.style.display = 'block'
    this.refs.btn_rename.style.display = 'none'
    this.refs.btn_Ok.style.display = 'inline-block'
    this.refs.btn_Cancel.style.display = 'inline-block'
  }

  handleChange (e) {
    this.setState({value: e.target.value})
    console.log('Inside Handle change ')
  }

  handleOk (e) {
    if (this.state.value.length > 0) {
      console.log('this.state.value = ', this.state.value)
      this.props.updateBoardName(this.state.value, this.props.board.boardId)
    }
    this.hide()
  }

  handleCancel (e) {
    this.setState({value: ''})
    this.hide()
  }

  handleDisplayTaskList (e) {
    if (e.target.tagName === 'DIV') {
      console.log('$$$$$$$$$$ Inside handleDisplayTaskList $$$$$$$$$$$$$$ ')
      this.props.displayTaskList(this.props.board.boardId)
    }
  }

  hide () {
    this.refs.inp_rename.style.display = 'none'
    this.refs.btn_rename.style.display = 'block'
    this.refs.btn_Ok.style.display = 'none'
    this.refs.btn_Cancel.style.display = 'none'
  }

  render (props) {
    return (
      <div className='nav-item' onClick={this.handleDisplayTaskList}>
        <span style={{display: 'block'}}>{this.props.board.boardName}</span>
        <input type='text' ref='inp_rename' value={this.value} style={{display: 'none'}} onChange={this.handleChange} />
        <input type='button' className='floating-button' ref='btn_rename' value='Rename' onClick={this.handleRename} />
        <input type='button' className='floating-button' ref='btn_Ok' value='Ok' style={{display: 'none'}} onClick={this.handleOk} />
        <input type='button' className='floating-button' ref='btn_Cancel' value='Cancel' style={{display: 'none'}} onClick={this.handleCancel} />
      </div>
    )
  }
}

export default Board
