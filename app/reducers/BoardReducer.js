const BoardReducer = (state = {
  boards: {},
  currentBoardIndex: 0,
  activeBoardId: ''
}, action) => {
  console.log('BoardReducer, action = ', action)
  console.log('<BoardReducer > state = ', state)
  switch (action.type) {
    case 'ADD_BOARD':
      let boardId = state.currentBoardIndex + action.boardName
      console.log('boardId = ', boardId)
      return {
        ...state,
        boards: {
          ...state.boards,
          [boardId]: {
            boardId: boardId,
            boardName: action.boardName,
            taskList: [],
            desc: ''
          }
        },
        currentBoardIndex: ++state.currentBoardIndex,
        activeBoardId: boardId,
        activeBoardTasks: []
      }
    case 'UPDATE_BOARD_NAME':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.boardId]: {
            boardId: action.boardId,
            boardName: action.boardName,
            taskList: [],
            desc: ''
          }
        }
      }
    case 'DELETE_BOARD':
      let boardsCopy = Object.assign({}, state.boards)
      let activeBoardTasks = []
      if (action.boardId === state.activeBoardId) {
        activeBoardTasks = []
      }
      delete boardsCopy[action.boardId]
      return {
        boards: boardsCopy,
        currentBoardIndex: --state.currentBoardIndex,
        activeBoardTasks: activeBoardTasks
      }
    default:
      return state
  }
}

export default BoardReducer
