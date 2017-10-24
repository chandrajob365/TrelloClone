import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginContainer from '../app/container/LoginContainer'
import SignUpContainer from '../app/container/SignUpContainer'
import HomePage from '../app/react_reduxComponent/HomePage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginContainer} />
    <Route exact path='/signup' component={SignUpContainer} />
  </Switch>
)

export default Routes
