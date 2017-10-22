
const CardReducer = (state = {
  cards: {},
  currentCardIndex: 0,
  isOpen: false
}, action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.cardId]: {
            ...state.cards[action.cardId],
            cardDesc: action.cardDesc,
            cardDueDate: action.cardDueDate
          }
        }
      }
    case 'DELETE_CARD':
      let cardsCopy = Object.assign({}, state.cards)
      delete cardsCopy[action.cardId]
      return {
        ...state,
        cards: cardsCopy
      }
    case 'TOGGLE_CARD_MODAL':
      return {
        ...state,
        isOpen: !state.isOpen,
        openedCardDetail: {
          cardId: action.cardId || '',
          taskName: action.taskName || ''
        }
      }
    default:
      return state
  }
}

export default CardReducer
