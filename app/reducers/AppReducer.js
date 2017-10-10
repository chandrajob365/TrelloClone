import { combineReducers } from 'redux'
import BoardReducer from './BoardReducer'
import TaskReducer from './TaskReducer'
import createTaskReducer from './CreateTaskReducer'

const combinedReducer = combineReducers({
  boards: BoardReducer,
  tasks: TaskReducer
})

const secondReducer = function (state, action) {
  console.log('<SecondReducer> state = ', state, '  action = ', action)
  let finalState = null
  switch (action.type) {
    case 'CREATE_TASK': finalState = createTaskReducer(state.boards, state.tasks, action)
      console.log('<SecondReducer>CREATE_TASK case finalState = ', finalState)
      return finalState
    default: return state
  }
}

const AppReducer = (state, action) => {
  console.log('<AppReducer> state = ', state, ' action = ', action)
  const intermediateState = combinedReducer(state, action)
  console.log('<AppReducer> intermediateState = ', intermediateState)
  const finalState = secondReducer(intermediateState, action)
  console.log('<AppReducer> finalState = ', finalState)
  return finalState
}

export default AppReducer
