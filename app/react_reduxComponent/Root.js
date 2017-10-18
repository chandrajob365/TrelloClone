import React from 'react'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import AppContainer from '../container/AppContainer'
import HeaderPannel from '../react_reduxComponent/HeaderPannel'
import Footer from '../react_reduxComponent/Footer'

const Root = () => {
  return (
    <Provider store={configureStore()} >
      <div>
        <HeaderPannel />
        <AppContainer />
        <Footer />
      </div>
    </Provider>
  )
}

export default Root
