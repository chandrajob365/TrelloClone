import React from 'react'
import BoardsContainer from '../container/BoardsContainer'
// import TaskContainer from './TaskContainer'
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
    </div>
  )
}

export default App
