import React from 'react'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'select',
      isModalOpen: false
    }
    this.handleChange = this.handleChange.bind(this)
    //this.
  }

  handleChange (e) {
    // if (e.target.value !== 'select') {
    console.log('e.target.value = ', e.target.value, ' boardName = ', this.props.boardName)
    this.setState({value: e.target.value})
  //  e.target.value === 'renameBoard' ? this.state.isModalOpen :
    // }
  }

  render (props) {
    return (
      <div className='nav-item'>
          {this.props.boardName}
      </div>
    )
  }
}

export default Board
