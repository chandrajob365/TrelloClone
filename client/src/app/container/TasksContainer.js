import {connect} from 'react-redux'
import Tasks from '../react_reduxComponent/Tasks'
import {createTask, updateTaskName, deleteTask} from '../actions/TaskActions'
import {createCard, deleteCard, toggleCardModal} from '../actions/CardActions'

const mapStateToProps = (state) => {
  console.log('<TasksContainer, mapStateToProps> state = ', state)
  return {
    tasks: state.tasks.tasks,
    activeBoardTasks: state.boards.activeBoardTasks,
    cards: state.cards.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('<TaskContainer, mapDispatchToProps> Entry')
  return {
    createTask: taskName => (
      dispatch(createTask(taskName))
    ),
    updateTaskName: (taskId, taskName) => (
      dispatch(updateTaskName(taskId, taskName))
    ),
    deleteTask: taskId => (
      dispatch(deleteTask(taskId))
    ),
    createCard: (cardName, taskId) => (
      dispatch(createCard(cardName, taskId))
    ),
    deleteCard: cardId => (
      dispatch(deleteCard(cardId))
    ),
    toggleCardModal: (cardId, taskName) => (
      dispatch(toggleCardModal(cardId, taskName))
    )
  }
}

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)

export default TaskContainer
