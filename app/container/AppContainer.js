import {connect} from 'react-redux'
import App from '../react_reduxComponent/App'

const mapStateToProps = (state) => (
  {
    isOpen: state.isOpen
  }
)

const AppContainer = connect(
  mapStateToProps,
  undefined
)(App)

export default AppContainer
