const CreateCardReducer = (boardsState, taskState, cardState, userState, action) => {
  console.log('<CreateCardReducer> taskState = ', boardsState)
  console.log('<CreateCardReducer> taskState = ', taskState)
  console.log('<CreateCardReducer> cardState = ', cardState)
  console.log('<CreateCardReducer> action = ', action)
  switch (action.type) {
    case 'CREATE_CARD':
      let cardId = cardState.currentCardIndex + action.cardName
      let newCard = {
        cardId: cardId,
        cardName: action.cardName,
        cardDesc: '',
        cardDueDate: '',
        cardCreationDate: new Date().toLocaleDateString() // Format -> '12/21/2017'
      }
      return {
        boards: {
          ...boardsState
        },
        tasks: {
          ...taskState,
          tasks: {
            ...taskState.tasks,
            [action.taskId]: {
              ...taskState.tasks[action.taskId],
              cards: taskState.tasks[action.taskId].cards.concat(cardId)
            }
          }
        },
        cards: {
          ...cardState,
          cards: {
            ...cardState.cards,
            [cardId]: newCard
          },
          currentCardIndex: ++cardState.currentCardIndex
        }
      }
    default: return {tasks: taskState, cards: cardState, users: userState}
  }
}

export default CreateCardReducer
