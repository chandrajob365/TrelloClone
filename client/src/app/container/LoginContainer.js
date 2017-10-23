import {connect} from 'react-redux'
import LoginPage from '../react_reduxComponent/LoginPage'
import {setLoginPending, setLoginSuccess, setLoginError} from '../actions/LoginAction'
import axios from 'axios'
const ROOT_URL = 'http://localhost:3000'
export let login = (emailId, password) => {
  console.log('Entry login emailId = ', emailId, '  password = ', password)
  return dispatch => {
    dispatch(setLoginPending(true))
    dispatch(setLoginSuccess(false))
    dispatch(setLoginError(null))
    axios.post(`${ROOT_URL}/login`, {emailId, password})
    .then(response => {
      console.log('response.msg = ', response.msg)
      dispatch(setLoginPending(false))
      dispatch(setLoginSuccess(true))
      console.log('User is authenticated')
    })
    .catch(response => {
      dispatch(setLoginError(response.msg))
    })
  }
}
const mapStateToProps = (state) => {
  console.log('<LoginContainer, mapStateToProps> state = ', state)
  return {
    isLoginPending: state.users.isLoginPending,
    isLoginSuccess: state.users.isLoginSuccess,
    loginError: state.users.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('<LoginContainer, mapDispatchToProps> Entry')
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginContainer
