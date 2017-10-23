import React from 'react'
import {Link} from 'react-router-dom'
import Routes from '../Routes'
class BaseRoot extends React.Component {
  render () {
    return (
      <div>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <Link to='/'>Trello</Link>
          </div>
          <div className='top-bar-right'>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
          </div>
        </div>
        <div>
          <Routes />
        </div>
      </div>
    )
  }
}

export default BaseRoot
