const BoardReducer = (state = {
  boards: {},
  currentBoardIndex: 0,
  activeBoardId: '',
  activeBoardTasks: []
}, action) => {
  console.log('BoardReducer, action = ', action)
  console.log('<BoardReducer > state = ', state)
  switch (action.type) {
    case 'POPULATE_BOARDS':
      let boardList = action.boards
      boardList.forEach(board => {
        state.boards[board._id] = board
      })
      return {
        ...state,
        boards: {
          ...state.boards
        },
        activeBoardId: action.boards[0] !== undefined ? action.boards[0]._id : 0,
        activeBoardTasks: []
      }
    case 'ADD_BOARD':
      // let boardId = state.currentBoardIndex + action.boardName
      console.log('<BoardReducer.js, ADD_BOARD> boardId = ', action.board._id)
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.board._id]: {
            _id: action.board._id,
            boardName: action.board.boardName,
            taskList: [],
            desc: ''
          }
        },
        activeBoardId: action.board._id,
        activeBoardTasks: []
      }
    case 'UPDATE_BOARD_NAME':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.boardId]: {
            _id: action.boardId,
            boardName: action.boardName,
            taskList: [],
            desc: ''
          }
        }
      }
    case 'DELETE_BOARD':
      let boardsCopy = Object.assign({}, state.boards)
      let activeBoardTasks = state.activeBoardTasks
      if (action.boardId === state.activeBoardId) {
        activeBoardTasks = []
      }
      delete boardsCopy[action.boardId]
      return {
        ...state,
        boards: boardsCopy,
        activeBoardTasks: activeBoardTasks
      }
    case 'DISPLAY_TASKLIST':
      return {
        ...state,
        activeBoardTasks: state.boards[action.boardId].taskList,
        activeBoardId: action.boardId
      }
    default:
      return state
  }
}

export default BoardReducer
