import React from 'react'
import {render} from 'react-dom'
import App from './app/components/App'
// import style from './app/styles/main.css'

const Root = () => (
  <div className='body'>
    <App />
  </div>
)

render(
  <Root />,
  document.getElementById('root')
)
