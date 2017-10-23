export let setSignUpPending = (isSignUpPending) => (
  {
    type: 'SET_SIGNUP_PENDING',
    isSignUpPending
  }
)

export let setSignUpSuccess = (isSignUpSuccess) => (
  {
    type: 'SET_SIGNUP_SUCCESS',
    isSignUpSuccess
  }
)

export let setSignUpError = (SignUpError) => (
  {
    type: 'SET_SIGNUP_ERROR',
    SignUpError
  }
)
