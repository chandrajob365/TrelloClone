import React from 'react'
import Task from './Task'
import CreateTask from './CreateItem'
import {Card} from 'material-ui/Card'

class Tasks extends React.Component {
  componentDidMount () {
    console.log('<Tasks.js, componentDidMount> this.props.location.state.boardId = ', this.props.location.state.boardId)
    localStorage.setItem('boardId', this.props.location.state.boardId)
    this.props.getTasks(this.props.location.state.boardId, () => {
      console.log('<taskPage.js, componentDidMount> CallBack')
    })
  }
  render (props) {
    console.log('<Tasks, render >, this.props.tasks = ', this.props.tasks)
    let rows = []
    Object.keys(this.props.tasks).forEach(taskId => {
      let task = this.props.tasks[taskId]
      console.log('task = ', task)
      console.log('----<Tasks.js, render> cards = ', task.cards)
      rows.push(
        <Task key={task._id}
          task={task}
          cards={task.cards}
          updateTaskName={this.props.updateTaskName}
          deleteTask={this.props.deleteTask}
          createCard={this.props.createCard}
          handleDeleteCard={this.props.deleteCard} />
      )
    })
    // this.props.tasks.forEach(task => {
    //   console.log('<Tasks, render > task = ', taskId)
    //   if (this.props.tasks[taskId]) {
    //     rows.push(
    //       <Task key={taskId}
    //         task={this.props.tasks[taskId]}
    //         cards={this.props.cards}
    //         createCard={this.props.createCard}
    //         updateTaskName={this.props.updateTaskName}
    //         deleteTask={this.props.deleteTask}
    //         toggleCardModal={this.props.toggleCardModal}
    //         handleDeleteCard={this.props.deleteCard} />
    //     )
    //   }
    // })
    return (
      <Card className='container'>
        <div className='task-pannel-container'>
          {rows}
          <CreateTask
            create={this.props.createTask}
            placeholder={'Create new Task'} />
        </div>
      </Card>
    )
  }
}

export default Tasks
