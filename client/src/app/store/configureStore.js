import {createStore, applyMiddleware} from 'redux'
import AppReducer from '../reducers/AppReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = () => {
  return createStore(
    AppReducer,
     {}, applyMiddleware(thunk, logger))
}

export default store
