import React from 'react'
import {render} from 'react-dom'
import BaseRoot from '../app/react_reduxComponent/BaseRoot'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter} from 'react-router-dom'
import store from '../app/store/configureStore'
import {Provider} from 'react-redux'

render(
  (<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store()} >
      <BrowserRouter>
        <div><BaseRoot /></div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>),
  document.getElementById('root')
)
