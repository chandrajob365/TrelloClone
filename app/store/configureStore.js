import {createStore} from 'redux'
import AppReducer from '../reducers/AppReducer'

const configureStore = () => {
  return createStore(AppReducer)
}

export default configureStore
