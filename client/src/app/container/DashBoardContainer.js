import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DashBoard from '../react_reduxComponent/DashBoard'
import {setPending, setSuccess, setError} from '../actions/AuthenticationAction'
import {addBoard, populateBoard, updateBoardName, deleteBoard, displayTaskList} from '../actions/BoardActions'
import axios from 'axios'
const ROOT_URL = 'http://localhost:3000'

const getBoards = (cb) => {
  let emailId = (JSON.parse(localStorage.getItem('user'))).email
  console.log('emailId =====> ', emailId)
  return dispatch => {
    dispatch(setPending(true))
    dispatch(setSuccess(false))
    dispatch(setError(null))
    axios.get(`${ROOT_URL}/user/${emailId}`)
    .then(response => {
      console.log('<DashBoardContainer.js, getBoards> Success response = ', response)
      dispatch(populateBoard(response.data.boards))
      cb()
    })
    .catch(error => {
      console.log('<DashBoardContainer.js, getBoards> Error ', error)
      dispatch(setPending(false))
      dispatch(setSuccess(false))
      dispatch(setError(error.response.data))
    })
  }
}

const addNewBoard = boardName => {
  let emailId = (JSON.parse(localStorage.getItem('user'))).email
  return dispatch => {
    axios.post(`${ROOT_URL}/user/${emailId}`, {boardName})
    .then(response => {
      console.log('<DashBoardContainer.js, addNewBoard> Success response = ', response)
      dispatch(addBoard(response.data.board))
    })
    .catch(error => {
      console.log('<DashBoardContainer.js, getBoards> Error ', error)
      dispatch(setPending(false))
      dispatch(setSuccess(false))
    })
  }
}

const updateSelectedBoardName = (boardName, boardId) => {
  console.log('<DashBoardContainer.js, updateSelectedBoardName> boardId = ', boardId)
  return dispatch => {
    axios.put(`${ROOT_URL}/boards/${boardId}`, {boardName})
      .then(response => {
        console.log('<DashBoardContainer.js, updateSelectedBoardName> Success response = ', response)
        dispatch(updateBoardName(boardName, boardId))
      })
      .catch(error => {
        console.log('<DashBoardContainer.js, getBoards> Error ', error)
        dispatch(setPending(false))
        dispatch(setSuccess(false))
      })
  }
}
const deleteBoardById = boardId => {
  console.log('<DashBoardContainer.js, deleteBoardById> boardId = ', boardId)
  let emailId = (JSON.parse(localStorage.getItem('user'))).email
  return dispatch => {
    axios.delete(`${ROOT_URL}/user/${emailId}/boards/${boardId}`)
    .then(response => {
      console.log('<DashBoardContainer.js, deleteBoardById> Success response = ', response)
      dispatch(deleteBoard(boardId))
    })
    .catch(error => {
      console.log('<DashBoardContainer.js, deleteBoardById> error = ', error)
      dispatch(setPending(false))
      dispatch(setSuccess(false))
    })
  }
}

// const displayBoardTaskList = boardId => {
//  console.log('<DashBoardContainer.js, deleteBoardById>')
// }

const mapStateToProps = (state) => {
  return {
    boards: state.boards.boards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards: cb => (
      dispatch(getBoards(cb))
    ),
    updateBoardName: (boardName, _id) => (
      dispatch(updateSelectedBoardName(boardName, _id))
    ),
    deleteBoard: boardId => (
      dispatch(deleteBoardById(boardId))
    ),
    // displayTaskList: boardId => (
    //   dispatch(displayBoardTaskList(boardId))
    // ),
    addBoard: boardName => (
      dispatch(addNewBoard(boardName))
    )
  }
}

const DashBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)

export default withRouter(DashBoardContainer)
