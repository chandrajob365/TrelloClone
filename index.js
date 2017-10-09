import React from 'react'
import {render} from 'react-dom'
import App from './app/components/App'
import HeaderPannel from './app/components/HeaderPannel'
import Footer from './app/components/Footer'
import {createStore} from 'redux'
import AppReducer from './app/reducers/AppReducer'
import {Provider} from 'react-redux'

const Root = () => (
  <Provider store={createStore(AppReducer)} >
    <div>
      <HeaderPannel />
      <App />
      <Footer />
    </div>
  </Provider>
)

render(
  <Root />,
  document.getElementById('root')
)
