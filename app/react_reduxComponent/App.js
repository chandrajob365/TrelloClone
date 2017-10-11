import React from 'react'
import BoardsContainer from '../container/BoardsContainer'
import TasksContainer from '../container/TasksContainer'
import CardModalContainer from '../container/CardModalContainer'

const App = (props) => {
  console.log('<App.js> props = ', props)
  let modal = null
  if (props.isOpen) {
    modal = <CardModalContainer />
  }
  return (
    <div className='app-container'>
      <BoardsContainer />
      <TasksContainer />
      {modal}
    </div>
  )
}

export default App
