const data = {
  boards: {
    '1BuyFruits': {
      boardId: '1BuyFruits',
      boardName: 'BuyFruits',
      taskList: ['1l1', '2l2', '3l3', '4l4', '5l5'],
      desc: ''
    },
    '2CompleteApp': {
      boardId: '2CompleteApp',
      boardName: 'CompleteApp',
      taskList: ['6l6'],
      desc: ''
    }
  },
  tasks: {
    '1l1': {
      taskId: '1l1',
      taskName: 'l1',
      taskDesc: 'Test task 1',
      taskDueDate: '2017-10-08',
      taskCreationDate: '2017-10-03',
      cards: ['1C1', '2C2'] // one card can be part of only one task at a time
    },
    '2l2': {
      taskId: '2l2',
      taskName: 'l2',
      taskDesc: 'Test task 2',
      taskDueDate: '2017-10-08',
      taskCreationDate: '2017-10-03',
      cards: ['2C2']
    },
    '3l3': {
      taskId: '3l3',
      taskName: 'l3',
      taskDesc: 'Test task 3',
      taskDueDate: '2017-10-08',
      taskCreationDate: '2017-10-03',
      cards: []
    },
    '4l4': {
      taskId: '4l4',
      taskName: 'l4',
      taskDesc: 'Test task 4',
      taskDueDate: '2017-10-08',
      taskCreationDate: '2017-10-03',
      cards: []
    },
    '5l5': {
      taskId: '5l5',
      taskName: 'l5',
      taskDesc: 'Test task 5',
      taskDueDate: '2017-10-08',
      taskCreationDate: '2017-10-03',
      cards: []
    },
    '6l6': {
      taskId: '6l6',
      taskName: 'l6',
      taskDesc: 'Test task 6',
      taskDueDate: '2017-10-08',
      taskCreationDate: '2017-10-03',
      cards: []
    }
  },
  cards: {
    '1C1': {
      cardId: '1C1',
      cardName: 'C1',
      cardDesc: '',
      cardDueDate: '',
      cardCreationDate: ''
    },
    '2C2': {
      cardId: '2C2',
      cardName: 'C2',
      cardDesc: '',
      cardDueDate: '',
      cardCreationDate: ''
    }
  },
  currentCardIndex: 2,
  currentBoardIndex: 3,
  currentTaskIndex: 7
}

export default data
