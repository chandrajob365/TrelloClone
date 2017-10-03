import React from 'react'
import BoardList from './BoardList'

class BoardPannel extends React.Component {
  render () {
    console.log('<BoardPannel> this.props = ', this.props)
    return (
      <div className='nav'>
        <BoardList boards={this.props.boards}
          addBoard={this.props.addBoard}
          updateBoardName={this.props.updateBoardName}
          displayTaskList={this.props.displayTaskList}
          deleteBoard={this.props.deleteBoard} />
      </div>
    )
  }
}

export default BoardPannel
