import React from 'react'
import Task from './Task'
class TaskPannel extends React.Component {
  render (props) {
    let rows = []
    this.props.activeBoardTasks.forEach(task => {
      rows.push(
        <Task key={task.taskId}
          task={task} />
      )
    })
    return (
      <div className='content'>
        {rows}
      </div>
    )
  }
}

export default TaskPannel
