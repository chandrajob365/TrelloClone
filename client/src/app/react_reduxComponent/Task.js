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
    this.handleDeleteCard = this.handleDeleteCard.bind(this)
  }

  createCard (cardName) {
    this.props.createCard(cardName, this.props.task._id)
  }

  updateTaskName (taskName) {
    this.props.updateTaskName(this.props.task._id, taskName)
  }

  deleteTask () {
    this.props.deleteTask(this.props.task._id)
  }

  displayCardModal (cardId) {
    // this.props.toggleCardModal(cardId, this.props.task.taskName)
  }

  handleDeleteCard (cardId) {
    this.props.handleDeleteCard(cardId, this.props.task._id)
  }

  render () {
    console.log('<Task.js render> props = ', this.props)
    let cardList = this.props.cards
    console.log('<Task.js, render> cardList = ', cardList)
    let cards = []
    if (cardList.length > 0) {
      cardList.forEach(card => {
        console.log('<Task.js, render> card = ', card)
        let cardKey = Object.keys(card)[0]
        console.log('<Task.js, render> cardId = ', cardKey, ' card[cardKey] = ', card)
        cards.push(
          <Card key={card[cardKey]._id}
            card={card[cardKey]}
            handleDeleteCard={this.handleDeleteCard} />
        )
      })
    }
    return (
      <div className='task-item'>
        <TaskHeader
          taskName={this.props.task.taskName}
          updateTaskName={this.updateTaskName}
          deleteTask={this.deleteTask}
          />
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
