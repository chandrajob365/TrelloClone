import React from 'react'
import {render} from 'react-dom'
import App from './app/components/App'

const style = {
  backgroundColor: '#BD4200'
}

const Root = () => (
  <App />
)

render(
  <Root />,
  document.getElementById('root')
)
