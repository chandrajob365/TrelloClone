import React from 'react'

class HeaderPannel extends React.Component {
  render () {
    return (
      <div className='header-container'>
        <div className='header'>
          <h1> TaskMaster </h1>
          <div className='links'>
            <a href='#' className='signup'> Sign-up </a>
            <a href='#' className='login'> Login </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderPannel
