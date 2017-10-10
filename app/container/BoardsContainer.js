import {connect} from 'react-redux'
import Boards from '../react_reduxComponent/Boards'
import {addBoard, updateBoardName, deleteBoard, displayTaskList} from '../actions/BoardActions'

const mapStateToProps = (state) => {
  console.log('<BoardContainer, mapStateToProps> state = ', state)
  return {
    boards: state.boards.boards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: boardName => (
      dispatch(addBoard(boardName))
    ),
    updateBoardName: (boardName, boardId) => (
      dispatch(updateBoardName(boardName, boardId))
    ),
    deleteBoard: boardId => (
      dispatch(deleteBoard(boardId))
    ),
    displayTaskList: boardId => (
      dispatch(displayTaskList(boardId))
    )
  }
}

const BoardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)

export default BoardsContainer
