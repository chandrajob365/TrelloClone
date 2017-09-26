import React from 'react'
import {render} from 'react-dom'
import App from './app/components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  backgroundColor: '#BD4200'
}

const Root = () => (
  <div>
    <MuiThemeProvider >
      <App />
    </MuiThemeProvider>
  </div>
)

render(
  <Root />,
  document.getElementById('root')
)
