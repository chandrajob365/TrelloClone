import React from 'react'

class CreateTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleChange (e) {
    this.refs.btn_Save.style.display = 'inline-block'
    this.refs.btn_Cancel.style.display = 'inline-block'
    this.setState({value: e.target.value})
  }

  handleCreate (e) {
    if (this.state.value.length > 0) {
      this.hide()
      this.props.createTask(this.state.value)
    }
  }

  handleCancel (e) {
    this.refs.taskName.value = ''
    this.setState({value: ''})
    this.hide()
  }

  hide () {
    this.refs.btn_Save.style.display = 'none'
    this.refs.btn_Cancel.style.display = 'none'
  }

  render () {
    return (
      <div className='create-task'>
        <input type='text' ref='taskName' placeholder='Create new Task' onChange={this.handleChange} />
        <input className='button-OK' type='button' ref='btn_Save' value='Save' style={{display: 'none'}} onClick={this.handleCreate} />
        <input className='button-Cancel' type='button' ref='btn_Cancel' value='Cancel' style={{display: 'none'}} onClick={this.handleCancel} />
      </div>
    )
  }
}

export default CreateTask
