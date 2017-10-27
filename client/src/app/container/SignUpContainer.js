import {connect} from 'react-redux'
import SignUpPage from '../react_reduxComponent/SignUpPage'
import {setPending, setSuccess, setError} from '../actions/AuthenticationAction'
import axios from 'axios'
const ROOT_URL = 'http://localhost:3000'

export let register = (emailId, name, password, cb) => {
  console.log('Entry register emailId = ', emailId, '  password = ', password, ' name = ', name)
  return dispatch => {
    dispatch(setPending(true))
    dispatch(setSuccess(false))
    dispatch(setError(null))
    axios.post(`${ROOT_URL}/register`, {emailId, name, password})
    .then(response => {
      console.log('<SignUpContainer SUCESS RESPONSE >response.msg = ', response)
      dispatch(setPending(false))
      dispatch(setSuccess(true))
      console.log('User Registration Successfull')
      cb()
    })
    .catch(error => {
      console.log('<SignUpContainer FAILURE RESPONSE> error = ', error)
      dispatch(setError(error.response))
    })
  }
}
const mapStateToProps = (state) => {
  console.log('<SignUpContainer, mapStateToProps> state = ', state)
  return {
    isPending: state.users.isPending,
    isSuccess: state.users.isSuccess,
    isError: state.users.isError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, name, password, cb) => (
       dispatch(register(email, name, password, cb))
    )
  }
}

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)

export default SignUpContainer
