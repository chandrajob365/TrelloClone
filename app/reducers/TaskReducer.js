const TaskReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      let boardId = state.activeBoardId
      console.log('<App.js, createTask > boardId = ', boardId)
      let taskId = state.currentTaskIndex + action.taskName
      let newTask = {
        taskId: taskId,
        taskName: action.taskName,
        taskDesc: '',
        taskDueDate: '',
        taskCreationDate: new Date().toLocaleDateString(),
        cards: []
      }
      return {
        ...state,
        boards: {
          ...state.boards,
          [boardId]: {
            ...state.boards[boardId],
            taskList: state.boards[boardId].taskList.concat(taskId)
          }
        },
        tasks: {
          ...state.tasks,
          [taskId]: newTask
        },
        currentTaskIndex: ++state.currentTaskIndex,
        activeBoardTasks: state.boards[boardId].taskList.concat(taskId)
      }
    case 'UPDATE_BOARD_NAME':
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
    case 'DELETE_BOARD':
      let tasksCopy = Object.assign({}, state.tasks)
      delete tasksCopy[action.taskId]
      return {
        ...state,
        tasks: tasksCopy
      }
    default:
      return state
  }
}

export default TaskReducer
