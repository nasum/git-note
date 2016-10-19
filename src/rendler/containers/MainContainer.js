import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mainActions from '../actions/MainAction'
import * as codeActions from '../actions/CodeAction'
import mainComponent from '../components/MainComponent'

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch),
    codeActions: bindActionCreators(codeActions, dispatch)
  }
}

function mapStateToProps(state) {
  const { MainReducer, CodeReducer } = state
  return {
    MainReducer,
    CodeReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainComponent)
