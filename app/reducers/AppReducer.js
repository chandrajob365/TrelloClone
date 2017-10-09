import BoardReducer from './BoardReducer'
import CardReducer from './CardReducer'
import TaskReducer from './TaskReducer'

const AppReducer = (state = {}, action) => {
  return {
    boardReducer: BoardReducer({
      boards: state.Boards,
      currentBoardIndex: state.currentBoardIndex,
      activeBoardId: state.activeBoardId
    }, action),
    taskReducer: TaskReducer({
      activeBoardId: state.activeBoardId,
      boards: state.boards,
      tasks: state.Tasks,
      currentTaskIndex: state.currentTaskIndex,
      activeBoardTasks: []
    }, action),
    cardReducer: CardReducer({
      tasks: state.tasks,
      cards: state.Cards,
      currentCardIndex: state.currentCardIndex,
      isOpen: false,
      openedCardDetail: {
        cardId: '',
        taskName: ''
      }
    })
  }
}

export default AppReducer
