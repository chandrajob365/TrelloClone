// NOT USING THIS

import {connect} from 'react-redux'
import Board from '../react_reduxComponent/Board'
import {updateBoardName, deleteBoard, displayTaskList} from '../actions/BoardActions'
const mapStateToProps = (state) => {
  console.log('<BoardsContainer, mapStateToProps> state = ', state)
  return {
    boards: state.boards.boards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardContainer
