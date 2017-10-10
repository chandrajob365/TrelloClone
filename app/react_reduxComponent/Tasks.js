import React from 'react'
import Task from './Task'
import CreateTask from './CreateItem'

class Tasks extends React.Component {
  render (props) {
    console.log('<Tasks, render >, this.props = ', this.props)
    let rows = []
    this.props.activeBoardTasks.forEach(taskId => {
      console.log('<Tasks, render > taskId = ', taskId)
      if (this.props.tasks[taskId]) {
        rows.push(
          <Task key={taskId}
            task={this.props.tasks[taskId]}
            cards={this.props.cards}
            createCard={this.props.createCard}
            updateTaskName={this.props.updateTaskName}
            deleteTask={this.props.deleteTask}
            toggleCardModal={this.props.toggleCardModal}
            handleDeleteCard={this.props.deleteCard} />
        )
      }
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

export default Tasks
