import React from 'react'
import {render} from 'react-dom'
import AppContainer from './app/container/AppContainer'
import HeaderPannel from './app/components/HeaderPannel'
import Footer from './app/components/Footer'
import {createStore} from 'redux'
import AppReducer from './app/reducers/AppReducer'
import {Provider} from 'react-redux'

let state = {}
const Root = () => {
  return (
    <Provider store={createStore(AppReducer, state)} >
      <div>
        <HeaderPannel />
        <AppContainer />
        <Footer />
      </div>
    </Provider>
  )
}

render(
  <Root />,
  document.getElementById('root')
)
