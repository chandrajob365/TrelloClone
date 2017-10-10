import {connect} from 'react-redux'
import Boards from '../react_reduxComponent/Boards'
import {addBoard} from '../actions/BoardActions'
const mapStateToProps = (state) => {
  return {
    boards: state.boards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: boardName => {
      dispatch(addBoard(boardName))
    }
  }
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Boards)

export default BoardContainer
