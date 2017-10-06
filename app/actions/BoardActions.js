export let addBoard = boardName => (
  {
    type: 'ADD_BOARD',
    boardName
  }
)

export let updateBoardName = (boardName, boardId) => (
  {
    type: 'UPDATE_BOARD_NAME',
    boardName,
    boardId
  }
)

export let deleteBoard = boardId => (
  {
    type: 'DELETE_BOARD',
    boardId
  }
)
