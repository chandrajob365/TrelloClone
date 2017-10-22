import {connect} from 'react-redux'
import {toggleCardModal, updateCard} from '../actions/CardActions'
import CardModal from '../react_reduxComponent/CardModal'

const mapStateToProps = (state) => {
  console.log('<CardModalContainer, mapStateToProps> state = ', state)
  return {
    isOpen: state.cards.isOpen,
    cards: state.cards.cards,
    openedCardDetail: state.cards.openedCardDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCardModal: (cardId, taskName) => (
      dispatch(toggleCardModal(cardId, taskName))
    ),
    updateCard: (cardId, cardDesc, cardDueDate) => (
      dispatch(updateCard(cardId, cardDesc, cardDueDate))
    )
  }
}

const CardModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardModal)

export default CardModalContainer
