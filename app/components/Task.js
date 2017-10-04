import React from 'react'

class Task extends React.Component {
  render (props) {
    console.log('<Task.js render> props = ', this.props)
    return (
      <div className='task-item'>
        <div className='task-header'>{this.props.task.taskName}</div>

        <div className='task-content'>
          <span> Card1 </span>
          <span> Card2 </span>
        </div>

        <div className='task-footer'>
          <span> Add new Card </span>
        </div>
      </div>
    )
  }
}

export default Task
