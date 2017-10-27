import {connect} from 'react-redux'
import Tasks from '../react_reduxComponent/Tasks'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {setPending, setSuccess, setError} from '../actions/AuthenticationAction'
import {createTask, updateTaskName, deleteTask, populateTasks, updateTaskList} from '../actions/TaskActions'
import {deleteCard, toggleCardModal} from '../actions/CardActions'
const ROOT_URL = 'http://localhost:3000'

const getTasks = boardId => {
  console.log('<TasksContainer.js, getTaskWithCards> boardId = ', boardId)
  return dispatch => {
    dispatch(setPending(true))
    dispatch(setSuccess(false))
    dispatch(setError(null))
    axios.get(`${ROOT_URL}/boards/${boardId}`)
    .then(response => {
      console.log('<TasksContainer.js, getTaskWithCards> Success response = ', response.data)
      dispatch(populateTasks(response.data.tasks))
    })
    .catch(error => {
      console.log('<TasksContainer.js, getTaskWithCards> error = ', error.data)
    })
  }
}

const updateTaskNameById = (taskId, taskName) => {
  return dispatch => {
    dispatch(setPending(true))
    dispatch(setSuccess(false))
    dispatch(setError(null))
    axios.put(`${ROOT_URL}/tasks/${taskId}`, {taskName})
    .then(response => {
      console.log('<TasksContainer.js, getTaskWithCards> Success response = ', response.data)
      dispatch(updateTaskName(taskId, taskName))
    })
    .catch(error => {
      console.log('<TasksContainer.js, getTaskWithCards> error = ', error.data)
    })
  }
}

const deleteTaskById = taskId => {
  console.log('<TasksContainer, deleteTaskById> taskId = ', taskId)
  console.log('<TasksContainer, deleteTaskById> boardId = ', localStorage.getItem('boardId'))
  let boardId = localStorage.getItem('boardId')
  return dispatch => {
    axios.delete(`${ROOT_URL}/boards/${boardId}/tasks/${taskId}`)
    .then(response => {
      console.log('<TasksContainer.js, deleteTaskById> Success response = ', response.data)
      dispatch(deleteTask(taskId))
    })
    .catch(error => {
      console.log('<TasksContainer.js, deleteTaskById> ERROR = ', error.data)
    })
  }
}

const updateTaskCardList = (cardName, taskId) => {
  console.log('<TaskContainer.js, createCardInTask> cardName = ', cardName, ' taskId = ', taskId)
  return dispatch => {
    axios.post(`${ROOT_URL}/tasks/${taskId}`, {cardName})
    .then(response => {
      console.log('<TasksContainer.js, createCardInTask> Success response = ', response.data)
      dispatch(updateTaskList(response.data.card, taskId))
    })
    .catch(error => {
      console.log('<TasksContainer.js, createCardInTask> Error = ', error.data)
    })
  }
}

const createNewTask = taskName => {
  console.log('<TaskContainer.js, createTask> taskName = ', taskName)
  let boardId = localStorage.getItem('boardId')
  return dispatch => {
    axios.post(`${ROOT_URL}/boards/${boardId}`, {taskName})
    .then(response => {
      console.log('<TaskContainer.js, createTask> SUCCESS response = ', response.data)
      dispatch(createTask(response.data.task))
    })
    .catch(error => {
      console.log('<TasksContainer.js, createTask> Success error = ', error.data)
    })
  }
}

const deleteTaskCard = (cardId, taskId) => {
  console.log('<TaskContainer.js, createTask> cardId = ', cardId, ' taskId = ', taskId)
  return dispatch => {
    axios.delete(`${ROOT_URL}/tasks/${taskId}/cards/${cardId}`)
    .then(response => {
      console.log('<TaskContainer.js, deleteTaskCard> SUCCESS response = ', response.data)
      dispatch(deleteCard(cardId, taskId))
    })
    .catch(error => {
      console.log('<TaskContainer.js, deleteTaskCard> ERROR = ', error.data)
    })
  }
}
const mapStateToProps = (state) => {
  console.log('<TasksContainer, mapStateToProps> state = ', state)
  return {
    tasks: state.tasks.tasks,
    cards: state.cards.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('<TaskContainer, mapDispatchToProps> Entry')
  return {
    getTasks: boardId => (
      dispatch(getTasks(boardId))
    ),
    createTask: taskName => (
      dispatch(createNewTask(taskName))
    ),
    updateTaskName: (taskId, taskName) => (
      dispatch(updateTaskNameById(taskId, taskName))
    ),
    deleteTask: taskId => (
      dispatch(deleteTaskById(taskId))
    ),
    createCard: (cardName, taskId) => (
      dispatch(updateTaskCardList(cardName, taskId))
    ),
    deleteCard: (cardId, taskId) => (
      dispatch(deleteTaskCard(cardId, taskId))
    ),
    toggleCardModal: (cardId, taskName) => (
      dispatch(toggleCardModal(cardId, taskName))
    )
  }
}

const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)

export default withRouter(TasksContainer)
