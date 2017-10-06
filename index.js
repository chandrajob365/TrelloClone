import React from 'react'
import {render} from 'react-dom'
import App from './app/components/App'
import HeaderPannel from './app/components/HeaderPannel'
import Footer from './app/components/Footer'
// import style from './app/styles/main.css'

const Root = () => (
  <div>
    <HeaderPannel />
    <App />
    <Footer />
  </div>
)

render(
  <Root />,
  document.getElementById('root')
)
