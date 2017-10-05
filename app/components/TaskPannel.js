import React from 'react'
import Task from './Task'
import CreateTask from './CreateItem'

class TaskPannel extends React.Component {
  render (props) {
    console.log('<TaskPannel, render >, this.props = ', this.props)
    let rows = []
    this.props.activeBoardTasks.forEach(taskId => {
      console.log('<TaskPannel, render > taskId = ', taskId)
      rows.push(
        <Task key={taskId}
          task={this.props.tasks[taskId]}
          cards={this.props.cards}
          createCard={this.props.createCard} />
      )
    })
    return (
      <div className='task-pannel-container'>
        {rows}
        <CreateTask
          create={this.props.createTask}
          placeholder={'Create new Task'} />
      </div>
    )
  }
}

export default TaskPannel
