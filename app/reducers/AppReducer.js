import { combineReducers } from 'redux'
import BoardReducer from './BoardReducer'

const AppReducer = combineReducers({
  boards: BoardReducer
})
// export default BoardReducer

export default AppReducer
