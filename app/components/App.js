import React from 'react'
import Header from './Header'
import BoardContainer from './BoardContainer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newBoardName: ''
    }
    this.createNewBoard = this.createNewBoard.bind(this)
  }

  createNewBoard (boardName) {
    this.setState({
      newBoardName: boardName
    })
  }

  render () {
    return (
      <div>
        <Header createBoard={this.createNewBoard} />
        <BoardContainer boardName={this.createNewBoard} />
      </div>
    )
  }
}

export default App
