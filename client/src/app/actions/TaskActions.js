// change createTask => addTask
export let populateTasks = tasks => (
  {
    type: 'POPULATE_TAKS',
    tasks
  }
)
export let createTask = task => (
  {
    type: 'CREATE_TASK',
    task
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

export let updateTaskList = (card, taskId) => (
  {
    type: 'UPDATE_TASKLIST',
    card,
    taskId
  }
)
