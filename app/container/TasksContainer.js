import {connect} from 'react-redux'
import Tasks from '../react_reduxComponent/Tasks'
import {createTask, updateTaskName, deleteTask} from '../actions/TaskActions'

const mapStateToProps = (state) => {
  console.log('<TasksContainer, mapStateToProps> state = ', state)
  return {
    tasks: state.tasks.tasks,
    activeBoardTasks: state.boards.activeBoardTasks
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
    )
  }
}

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)

export default TaskContainer
