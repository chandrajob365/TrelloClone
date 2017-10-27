import React from 'react'
import LoginForm from '../react_reduxComponent/LoginForm.js'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: '',
      user: {
        email: '',
        password: ''
      }
    }
    console.log('<LoginPage, constructor> Props = ', this.props)
    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  processForm (event) {
    event.preventDefault()
    if (this.isValidInput()) {
      this.setState({
        errors: ''
      })
      this.props.login(this.state.user.email, this.state.user.password, () => {
        this.props.history.push('/dashboard')
      })
    } else if (this.state.user.email.length === 0) {
      this.setState({
        errors: 'Missing Email'
      })
    } else {
      this.setState({
        errors: 'Missing Password'
      })
    }
  }

  isValidInput () {
    if (this.state.user.email.length > 0 && this.state.user.password.length > 0) {
      return true
    }
    return false
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
        isPending={this.props.isPending}
        isSuccess={this.props.isSuccess}
        isError={this.props.isError}
      />
    )
  }
}

export default LoginPage
