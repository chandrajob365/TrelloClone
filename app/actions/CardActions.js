export let createCard = (cardName, taskId) => (
  {
    type: 'CREATE_CARD',
    cardName,
    taskId
  }
)

export let updateCard = (cardId, cardDesc, cardDueDate) => (
  {
    type: 'UPDATE_CARD',
    cardId,
    cardDesc,
    cardDueDate
  }
)

export let deleteCard = cardId => (
  {
    type: 'DELETE_CARD',
    cardId
  }
)
