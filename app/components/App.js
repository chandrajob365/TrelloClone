import React from 'react'
import BoardPannel from './BoardPannel'
import TaskPannel from './TaskPannel'
//import style from '../styles/main.css'

class App extends React.Component {

  render (props) {
    return (
      <div className='app'>
        <BoardPannel />
        <TaskPannel />
      </div>
    )
  }
}

export default App
