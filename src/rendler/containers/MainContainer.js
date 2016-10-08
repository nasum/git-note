import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mainctions from '../actions/MainAction'
import mainComponent from '../components/MainComponent'

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainctions, dispatch)
  }
}

function mapStateToProps(state) {
  const { MainReducer } = state
  return {
    MainReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainComponent)
