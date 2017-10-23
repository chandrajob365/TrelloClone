import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginPage from '../app/react_reduxComponent/LoginPage'
import SignUpPage from '../app/react_reduxComponent/SignUpPage'
import HomePage from '../app/react_reduxComponent/HomePage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/signup' component={SignUpPage} />
  </Switch>
)

export default Routes
