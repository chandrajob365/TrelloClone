import React from 'react'
import BoardsContainer from '../container/BoardsContainer'
import TasksContainer from '../container/TasksContainer'
// import CardModalContainer from './CardModalContainer'

const App = (props) => {
  // let modal = null
  // if (props.isOpen) {
  //   modal = <CardModalContainer />
  // }
  // {modal}
  return (
    <div className='app-container'>
      <BoardsContainer />
      <TasksContainer />
    </div>
  )
}

export default App
