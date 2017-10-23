export let setLoginPending = (isLoginPending) => (
  {
    type: 'SET_LOGIN_PENDING',
    isLoginPending
  }
)

export let setLoginSuccess = (isLoginSuccess) => (
  {
    type: 'SET_LOGIN_SUCCESS',
    isLoginSuccess
  }
)

export let setLoginError = (loginError) => (
  {
    type: 'SET_LOGIN_ERROR',
    loginError
  }
)
