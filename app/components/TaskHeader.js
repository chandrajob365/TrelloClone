import React from 'react'

class TaskHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.taskName
    }
    this.toEditable = this.toEditable.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  toEditable () {
    this.refs.list_name.style.display = 'none'
    this.refs.rename_list.style.display = 'inline-block'
    this.refs.rename_list.focus()
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  handleBlur () {
    this.setState({
      value: this.state.value.length > 0 ? this.state.value : this.props.taskName
    })
    this.refs.list_name.style.display = 'inline-block'
    this.refs.rename_list.style.display = 'none'
    this.props.updateTaskName(this.state.value)
  }

  render () {
    return (
      <div className='task-header'>
        <span ref='list_name' onClick={this.toEditable}>{this.state.value}</span>
        <input type='text'
          ref='rename_list'
          value={this.state.value}
          style={{display: 'none'}}
          onChange={this.handleChange}
          onBlur={this.handleBlur} />
      </div>
    )
  }
}

export default TaskHeader
