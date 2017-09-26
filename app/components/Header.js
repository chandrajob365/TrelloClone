import React from 'react'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white'
}

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onCreateBoard = this.onCreateBoard.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  onCreateBoard (event) {
    this.props.createBoard(this.state.value)
  }

  render (props) {
    return (
      <AppBar
        title='Trello'
        style={{backgroundColor: '#026AA7'}}
        iconElementRight={
          <div>
            <TextField
              hintText='New Board Name'
              value={this.state.value}
              onChange={this.handleChange}
              style={{color: 'white'}} />
            <FlatButton style={buttonStyle} label='Create' onClick={this.onCreateBoard} />
          </div>
      }
    />
    )
  }
}
export default Header
