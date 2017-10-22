import {createStore} from 'redux'
import AppReducer from '../reducers/AppReducer'

const persistentState = {}
const configureStore = () => {
  return createStore(
    AppReducer,
    persistentState)
}

export default configureStore
