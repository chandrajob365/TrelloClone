const TaskReducer = (state = {
  activeBoardId: '',
  tasks: {},
  currentTaskIndex: 0
}, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default TaskReducer
