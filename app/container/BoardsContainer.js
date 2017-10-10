import {connect} from 'react-redux'
import Boards from '../react_reduxComponent/Boards'
import {addBoard} from '../actions/BoardActions'

const mapStateToProps = (state) => {
  console.log('<BoardContainer> state = ', state)
  return {
    boards: state.boards.boards
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('<BoardsContainer, mapDispatchToProps> dispatch = ', dispatch)
  return {
    addBoard: boardName => {
      dispatch(addBoard(boardName))
    }
  }
}

const BoardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)

export default BoardsContainer
