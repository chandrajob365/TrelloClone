import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginContainer from '../app/container/LoginContainer'
import SignUpContainer from '../app/container/SignUpContainer'
import HomePage from '../app/react_reduxComponent/HomePage'
import Logout from '../app/react_reduxComponent/Logout'
import DashBoardContainer from '../app/container/DashBoardContainer'
import TaskContainer from '../app/container/TasksContainer'
const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginContainer} />
    <Route exact path='/signup' component={SignUpContainer} />
    <Route exact path='/dashboard' component={DashBoardContainer} />
    <Route exact path='/taskList' component={TaskContainer} />
    <Route exact path='/logout' component={Logout} />
  </Switch>
)

export default Routes
