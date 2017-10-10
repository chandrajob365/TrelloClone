// import { combineReducers } from 'redux'
import BoardReducer from './BoardReducer'
// import CardReducer from './CardReducer'
// import TaskReducer from './TaskReducer'
// const AppReducer = (state = {}, action) => {
//   console.log('<AppReducer> state = ', state)
//   return {
//     boardReducer: BoardReducer({
//       boards: state.boards,
//       currentBoardIndex: state.currentBoardIndex | 0,
//       activeBoardId: state.activeBoardId | ''
//     }, action)
//     // taskReducer: TaskReducer({
//     //   activeBoardId: state.activeBoardId,
//     //   boards: state.boards,
//     //   tasks: state.tasks,
//     //   currentTaskIndex: state.currentTaskIndex,
//     //   activeBoardTasks: []
//     // }, action),
//     // cardReducer: CardReducer({
//     //   tasks: state.tasks,
//     //   cards: state.cards,
//     //   currentCardIndex: state.currentCardIndex,
//     //   isOpen: false,
//     //   openedCardDetail: {
//     //     cardId: '',
//     //     taskName: ''
//     //   }
//     // }, action)
//   }
// }

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        console.log('key = ', key, '  nextState = ', nextState)
        nextState[key] = reducers[key](state[key], action)
        return nextState
      }, {})
  }
}
const AppReducer = combineReducers({
  BoardReducer
})
export default AppReducer
