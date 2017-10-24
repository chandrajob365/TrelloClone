const UserReducer = (state = {
  isSuccess: false,
  isPending: false,
  isError: null
}, action) => {
  console.log('<UserReducer> state = ', state)
  console.log('<UserReducer> action = ', action)
  switch (action.type) {
    case 'SET_PENDING':
      return Object.assign({}, state, {
        isPending: action.isPending
      })
    case 'SET_SUCCESS':
      return Object.assign({}, state, {
        isSuccess: action.isSuccess
      })
    case 'SET_ERROR':
      return Object.assign({}, state, {
        isError: action.isError
      })
    default:
      return state
  }
}

export default UserReducer
