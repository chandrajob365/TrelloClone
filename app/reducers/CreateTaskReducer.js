const CreateTaskReducer = (boardsState, taskState, cardState, action) => {
  console.log('<CreateTaskReducer> boardsState = ', boardsState)
  console.log('<CreateTaskReducer> taskState = ', taskState)
  console.log('<CreateTaskReducer> taskState = ', cardState)
  console.log('<CreateTaskReducer> action = ', action)
  switch (action.type) {
    case 'CREATE_TASK':
      let boardId = boardsState.activeBoardId
      console.log('<CreateTaskReducer.js, createTask > boardId = ', boardId)
      let taskId = taskState.currentTaskIndex + action.taskName
      let newTask = {
        taskId: taskId,
        taskName: action.taskName,
        taskDesc: '',
        taskDueDate: '',
        taskCreationDate: new Date().toLocaleDateString(),
        cards: []
      }
      return {
        boards: {
          ...boardsState,
          boards: {
            ...boardsState.boards,
            [boardId]: {
              ...boardsState.boards[boardId],
              taskList: boardsState.boards[boardId].taskList.concat(taskId)
            }
          },
          activeBoardTasks: boardsState.boards[boardId].taskList.concat(taskId)
        },
        tasks: {
          ...taskState,
          tasks: {
            ...taskState.tasks,
            [taskId]: newTask
          },
          currentTaskIndex: ++taskState.currentTaskIndex,
          activeBoardTasks: boardsState.boards[boardId].taskList.concat(taskId)
        },
        cards: {
          ...cardState
        }
      }
    default: return {boards: boardsState, tasks: taskState, cards: cardState}
  }
}

export default CreateTaskReducer
