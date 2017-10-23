import React from 'react'
import LoginForm from '../react_reduxComponent/LoginForm.js'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    }
    console.log('Props = ', this.props)
    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  processForm (event) {
    event.preventDefault()
    this.props.login(this.state.user.emailId, this.state.user.password)
  }

  changeUser (event) {
    const field = event.target.name
    const user = this.state.user
    console.log('user = ', user)
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  render () {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }
}

export default LoginPage
