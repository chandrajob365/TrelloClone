import BoardReducer from './BoardReducer'
import CardReducer from './CardReducer'
import TaskReducer from './TaskReducer'
import CardModalReducer from './CardModalReducer'
const AppReducer = (state = {}, action) => {
  return {
    boardReducer: BoardReducer({
      boards: state.boards,
      currentBoardIndex: state.currentBoardIndex,
      activeBoardId: state.activeBoardId
    }, action),
    taskReducer: TaskReducer({
      activeBoardId: state.activeBoardId,
      boards: state.boards,
      tasks: state.tasks,
      currentTaskIndex: state.currentTaskIndex,
      activeBoardTasks: []
    }, action),
    cardReducer: CardReducer({
      tasks: state.tasks,
      cards: state.cards,
      currentCardIndex: state.currentCardIndex,
      isOpen: false,
      openedCardDetail: {
        cardId: '',
        taskName: ''
      }
    }, action),
    cardModalReducer: CardModalReducer({
      isOpen: state.isOpen,
      cards: state.cards
    }, action)
  }
}

export default AppReducer
