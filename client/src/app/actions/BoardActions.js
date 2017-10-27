export let populateBoard = boards => (
  {
    type: 'POPULATE_BOARDS',
    boards
  }
)

export let addBoard = board => (
  {
    type: 'ADD_BOARD',
    board
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

export let displayTaskList = boardId => (
  {
    type: 'DISPLAY_TASKLIST',
    boardId
  }
)
