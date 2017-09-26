import React from 'react'

class AddBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boardName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddBoard = this.handleAddBoard.bind(this)
  }

  handleChange (e) {
    this.setState({
      boardName: e.target.value
    })
  }

  handleAddBoard () {
    this.props.addBoard(this.state.boardName)
    this.setState({
      boardName: ''
    })
    this.refs.boardName.focus()
  }

  render (props) {
    return (
      <div>
        <input type='text' ref='boardName' value={this.state.boardName} onChange={this.handleChange} />
        <input type='submit' value='AddBoard' onClick={this.handleAddBoard} />
      </div>
    )
  }
}

export default AddBoard
