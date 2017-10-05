import React from 'react'
import Card from './Card'
import CreateCard from './CreateItem'
import TaskHeader from './TaskHeader'

class Task extends React.Component {
  constructor (props) {
    super(props)
    this.createCard = this.createCard.bind(this)
    this.updateTaskName = this.updateTaskName.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.displayCardModal = this.displayCardModal.bind(this)
  }

  createCard (cardName) {
    this.props.createCard(cardName, this.props.task.taskId)
  }

  updateTaskName (taskName) {
    this.props.updateTaskName(this.props.task.taskId, taskName)
  }

  deleteTask () {
    this.props.deleteTask(this.props.task.taskId)
  }

  displayCardModal (cardId) {
    this.props.toggleCardModal(cardId, this.props.task.taskName)
  }
  render () {
    console.log('<Task.js render> props = ', this.props)
    let cards = []
    this.props.task.cards.forEach(cardId => {
      cards.push(
        <Card key={cardId}
          card={this.props.cards[cardId]}
          displayCardModal={this.displayCardModal} />
      )
    })
    return (
      <div className='task-item'>
        <TaskHeader
          taskName={this.props.task.taskName}
          updateTaskName={this.updateTaskName}
          deleteTask={this.deleteTask} />
        <div className='task-content'>
          {cards}
        </div>
        <div className='task-footer'>
          <CreateCard
            create={this.createCard}
            placeholder={'Create new Card'} />
        </div>
      </div>
    )
  }
}

export default Task
