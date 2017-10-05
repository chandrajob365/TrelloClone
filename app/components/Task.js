import React from 'react'
import Card from './Card'
import CreateCard from './CreateItem'

class Task extends React.Component {
  constructor (props) {
    super(props)
    this.createCard = this.createCard.bind(this)
  }

  createCard (cardName) {
    this.props.createCard(cardName, this.props.task.taskId)
  }

  render (props) {
    console.log('<Task.js render> props = ', this.props)
    let cards = []
    this.props.task.cards.forEach(cardId => {
      cards.push(
        <Card key={cardId} card={this.props.cards[cardId]} />
      )
    })
    return (
      <div className='task-item'>
        <div className='task-header'>{this.props.task.taskName}</div>

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
