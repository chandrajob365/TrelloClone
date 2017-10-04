import React from 'react'
import Task from './Task'
import CreateTask from './CreateTask'

class TaskPannel extends React.Component {
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
        <CreateTask createTask={this.props.createTask} />
      </div>
    )
  }
}

export default TaskPannel
