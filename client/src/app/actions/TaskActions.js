// change createTask => addTask
export let createTask = taskName => (
  {
    type: 'CREATE_TASK',
    taskName
  }
)

export let updateTaskName = (taskId, taskName) => (
  {
    type: 'UPDATE_TASK_NAME',
    taskId,
    taskName
  }
)

export let deleteTask = taskId => (
  {
    type: 'DELETE_TASK',
    taskId
  }
)
