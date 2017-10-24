export let setPending = (isPending) => (
  {
    type: 'SET_PENDING',
    isPending
  }
)

export let setSuccess = (isSuccess) => (
  {
    type: 'SET_SUCCESS',
    isSuccess
  }
)

export let setError = (isError) => (
  {
    type: 'SET_ERROR',
    isError
  }
)
