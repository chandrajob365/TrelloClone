import React from 'react'
import Task from './Task'
class TaskPannel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleCreate (e) {
    if (this.state.value.length > 0) {
      this.props.createTask(this.state.value)
    }
  }

  render (props) {
    console.log('<TaskPannel, render >, props = ', this.props)
    let rows = []
    this.props.activeBoardTasks.forEach(task => {
      console.log('<TaskPannel, render > task = ', task)
      rows.push(
        <Task key={task.taskId}
          task={task} />
      )
    })
    return (
      <div className='task-pannel-container'>
        {rows}
        <div className='create-task'>
          <input type='text' ref='taskName' placeholder='Create new Task' onChange={this.handleChange} />
          <input type='button' value='Create' onClick={this.handleCreate}/>
        </div>
      </div>
    )
  }
}

export default TaskPannel
