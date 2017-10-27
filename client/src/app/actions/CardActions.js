export let createCard = (card, taskId) => (
  {
    type: 'CREATE_CARD',
    card,
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

export let deleteCard = (cardId, taskId) => (
  {
    type: 'DELETE_CARD',
    cardId,
    taskId
  }
)

export let toggleCardModal = (cardId, taskName) => (
  {
    type: 'TOGGLE_CARD_MODAL',
    cardId,
    taskName
  }
)
