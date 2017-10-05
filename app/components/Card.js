import React from 'react'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('cardName = ', this.props.card.cardName, ' cardID = ', this.props.card.cardId)
    this.props.displayCardModal(this.props.card.cardId)
  }
  render (props) {
    return (
      <div onClick={this.handleClick}>
        <div className='card'> {this.props.card.cardName} </div>
      </div>
    )
  }
}

export default Card
