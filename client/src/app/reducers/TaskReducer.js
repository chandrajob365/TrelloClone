const TaskReducer = (state = {
  activeBoardId: '',
  tasks: {},
  currentTaskIndex: 0
}, action) => {
  switch (action.type) {
    case 'POPULATE_TAKS':
      let taskList = action.tasks
      state.tasks = {}
      taskList.forEach(task => {
        state.tasks[task._id] = task
      })
      return {
        ...state,
        tasks: {
          ...state.tasks
        }
      }
    case 'CREATE_TASK':
      let newTask = action.task
      newTask['cards'] = []
      console.log('<TaskReducer, CREATE_TASK>, newTask = ', newTask, ' newTask._id = ', newTask._id)
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [newTask._id]: newTask
        }
      }
    case 'UPDATE_TASK_NAME':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            taskName: action.taskName
          }
        }
      }
    case 'DELETE_TASK':
      let tasksCopy = Object.assign({}, state.tasks)
      delete tasksCopy[action.taskId]
      return {
        ...state,
        tasks: tasksCopy
      }
    case 'UPDATE_TASKLIST':
      let newCard = {[action.card._id]: action.card}
      console.log('<TaskReducer.js, UPDATE_CARDLIST>, newCard = ', newCard)
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            cardList: state.tasks[action.taskId].cardList.concat(action.card._id),
            cards: state.tasks[action.taskId].cards.concat(newCard)
          }
        }
      }
    case 'DELETE_CARD':
      let TaskCpy = Object.assign({}, state.tasks[action.taskId])
      let {updateCardList, updatedCards} = getUpdatedTaskList(TaskCpy, action.taskId, action.cardId)
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            cardList: updateCardList,
            cards: updatedCards
          }
        }
      }
    default:
      return state
  }
}

const getUpdatedTaskList = (newTaskCpy, taskId, cardId) => {
  let cardIdListCpy = newTaskCpy.cardList
  let cardIndexInCardList = cardIdListCpy.indexOf(cardId)
  cardIdListCpy = cardIndexInCardList === cardIdListCpy.length - 1
    ? cardIdListCpy.splice(0, cardIndexInCardList)
    : cardIdListCpy.splice(0, cardIndexInCardList).concat(cardIdListCpy.splice(cardIndexInCardList + 1, cardIdListCpy.length))
  let updatedCards = updateCardList(newTaskCpy.cards, cardId)
  console.log('<TaskReducer.js, getUpdatedTaskList> cardIdListCpy = ', cardIdListCpy, ' updatedCards = ', updatedCards)
  return {updateCardList: cardIdListCpy, updatedCards: updatedCards}
}

const updateCardList = (cards, cardId) => {
  let cardIndex = 0
  cards.forEach((card, index) => {
    let ObjKey = Object.keys(card)[0]
    if (ObjKey === cardId) cardIndex = index
  })
  console.log('<TaskReducer.js, updateCardList> cardIndex = ', cardIndex)
  return (cardIndex === cards.length - 1)
    ? cards.splice(0, cardIndex)
    : cards.splice(0, cardIndex).concat(cards.splice(cardIndex + 1, cards.length))
}

export default TaskReducer
