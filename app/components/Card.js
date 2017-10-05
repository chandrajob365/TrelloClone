import React from 'react'

class Card extends React.Component {
  render (props) {
    return (
      <div className='card'>
        {this.props.card.cardName}
      </div>
    )
  }
}

export default Card
