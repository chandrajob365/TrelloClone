import React from 'react'
import SignUpForm from '../react_reduxComponent/SignUpForm.js'

class SignUpPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    }

    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  changeUser (event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  processForm (event) {
    event.preventDefault()
    this.props.register(this.state.user.email, this.state.user.name, this.state.user.password)
  }

  render () {
    return (
      <SignUpForm
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

export default SignUpPage
