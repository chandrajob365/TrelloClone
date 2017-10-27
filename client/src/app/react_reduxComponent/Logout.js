import React from 'react'

class Logout extends React.Component {
  componentDidMount () {
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }
  render () {
    return (
      <h1 className='processing-message'>
        Logging out...
      </h1>
    )
  }
}

export default Logout
