import React from 'react'

class CardModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      desc: this.props.openedCardDetail.cardId ? this.props.cards[this.props.openedCardDetail.cardId].cardDesc : '',
      dueDate: this.props.openedCardDetail.cardId ? this.props.cards[this.props.openedCardDetail.cardId].cardDueDate : ''
    }
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleDueDateChange = this.handleDueDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleDescChange (e) {
    this.setState({desc: e.target.value})
  }

  handleDueDateChange (e) {
    this.setState({dueDate: e.target.value})
  }

  handleSubmit () {
    this.props.updateCard(
        this.props.openedCardDetail.cardId,
        this.state.desc,
        this.state.dueDate)
  }

  handleClose () {
    this.props.onClose()
  }

  componentWillUnmount () {
    this.setState({
      desc: '',
      dueDate: ''
    })
  }
  render () {
    return (
      <div ref='cardModal' className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <div className='card-Detail'>
              <span>Card &nbsp;
                <em><bold>
                  {this.props.cards[this.props.openedCardDetail.cardId].cardName}
                </bold></em>
              </span>
              <span> &nbsp;of list {this.props.openedCardDetail.taskName}</span>
            </div>
            <div className='close' onClick={this.handleClose}>&times;</div>
          </div>
          <div className='modal-body'>
            <div>
              Card Description :
              <textarea
                value={this.state.desc}
                onChange={this.handleDescChange} />
            </div>
            <div>
              Card DueDate (mm/dd/yyyy):
              <input type='text'
                value={this.state.dueDate}
                onChange={this.handleDueDateChange} />
            </div>
          </div>
          <div className='modal-footer'>
            <input type='button' className='button-OK' value='Submit' onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default CardModal
