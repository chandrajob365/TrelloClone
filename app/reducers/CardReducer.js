
const CardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      let cardId = state.currentCardIndex + action.cardName
      let newCard = {
        cardId: cardId,
        cardName: action.cardName,
        cardDesc: '',
        cardDueDate: '',
        cardCreationDate: new Date().toLocaleDateString() // Format -> '12/21/2017'
      }
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            cards: state.tasks[action.taskId].cards.concat(cardId)
          }
        },
        cards: {
          ...state.cards,
          [cardId]: newCard
        },
        currentCardIndex: ++state.currentCardIndex
      }
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
      delete cardsCopy[cardId]
      return {
        ...state,
        cards: cardsCopy
      }
    default:
      return state
  }
}

export default CardReducer
