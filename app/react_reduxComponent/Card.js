import React from 'react'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (e) {
    this.props.handleDeleteCard(this.props.card.cardId)
    e.stopPropagation()
  }

  handleClick () {
    console.log('<Card.js, handle> cardName = ', this.props.card.cardName, ' cardID = ', this.props.card.cardId)
    this.props.displayCardModal(this.props.card.cardId)
  }
  render (props) {
    return (
      <div onClick={this.handleClick}>
        <div className='card'>
          <div className='card-name'>{this.props.card.cardName}</div>
          <div className='close' onClick={this.handleDelete}>&times;</div>
        </div>
      </div>
    )
  }
}

export default Card
