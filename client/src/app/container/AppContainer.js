import {connect} from 'react-redux'
import App from '../react_reduxComponent/App'

const mapStateToProps = (state) => {
  console.log('<AppContainer> state = ', state)
  return {
    isOpen: state.cards.isOpen
  }
}

const AppContainer = connect(
  mapStateToProps,
  undefined
)(App)

export default AppContainer
